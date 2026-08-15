"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { PositionedStar, SkyLayout } from "@/utils/sky";
import { HORIZON_Y } from "@/utils/sky";

const HIT_RADIUS = 14;

interface Palette {
  lit: string;
  shelved: string;
  faint: string;
  text: string;
}

function resolvePalette(): Palette {
  const styles = getComputedStyle(document.documentElement);
  const read = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;
  return {
    lit: read("--accent-primary", "#c3f53c"),
    shelved: read("--text-secondary", "#9ca3af"),
    faint: read("--text-muted", "#6b7280"),
    text: read("--text-secondary", "#9ca3af"),
  };
}

export function SkyChart({ layout }: { layout: SkyLayout }) {
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef<PositionedStar | null>(null);
  const [hovered, setHovered] = useState<PositionedStar | null>(null);

  const draw = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      const wrap = wrapRef.current;
      if (!canvas || !wrap) return;
      const dpr = window.devicePixelRatio || 1;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const palette = resolvePalette();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Horizon and era band labels.
      ctx.strokeStyle = palette.faint;
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.moveTo(0, HORIZON_Y * h);
      ctx.lineTo(w, HORIZON_Y * h);
      ctx.stroke();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = palette.faint;
      ctx.font = "10px monospace";
      for (const era of layout.eras) {
        ctx.fillText(era, 8, layout.bandCenters[era] * h + 3);
      }
      ctx.globalAlpha = 1;

      // Constellation lines (refs) under the stars.
      const byId = new Map(layout.stars.map((s) => [s.id, s]));
      ctx.strokeStyle = palette.lit;
      ctx.globalAlpha = 0.25;
      for (const edge of layout.edges) {
        const a = byId.get(edge.from);
        const b = byId.get(edge.to);
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(a.x * w, a.y * h);
        ctx.lineTo(b.x * w, b.y * h);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      for (const star of layout.stars) {
        const x = star.x * w;
        const y = star.y * h;
        const isHovered = hoveredRef.current?.id === star.id;
        if (star.state === "lit") {
          const pulse = star.pulse ? 1 + 0.25 * Math.sin(time / 450) : 1;
          ctx.fillStyle = palette.lit;
          ctx.shadowColor = palette.lit;
          ctx.shadowBlur = (isHovered ? 18 : 12) * pulse;
          ctx.beginPath();
          ctx.arc(x, y, 4.5 * pulse, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          // Only the newest star carries a permanent label; the rest would
          // collide in a crowded band. Titles surface in the hover tooltip.
          if (star.pulse) {
            ctx.fillStyle = palette.text;
            ctx.font = "11px monospace";
            ctx.fillText(star.title, x + 10, y + 4);
          }
        } else if (star.state === "shelved") {
          ctx.fillStyle = palette.shelved;
          ctx.globalAlpha = isHovered ? 1 : 0.7;
          ctx.shadowColor = palette.shelved;
          ctx.shadowBlur = isHovered ? 10 : 5;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        } else {
          ctx.strokeStyle = palette.faint;
          ctx.globalAlpha = isHovered ? 0.9 : 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    },
    [layout],
  );

  useEffect(() => {
    let frame: number;
    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [draw]);

  const starAt = (clientX: number, clientY: number): PositionedStar | null => {
    const wrap = wrapRef.current;
    if (!wrap) return null;
    const rect = wrap.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    let best: PositionedStar | null = null;
    let bestDist = HIT_RADIUS;
    for (const star of layout.stars) {
      const d = Math.hypot(star.x * rect.width - px, star.y * rect.height - py);
      if (d < bestDist) {
        bestDist = d;
        best = star;
      }
    }
    return best;
  };

  const handleMove = (e: React.PointerEvent) => {
    const star = starAt(e.clientX, e.clientY);
    if (star?.id !== hoveredRef.current?.id) {
      hoveredRef.current = star;
      setHovered(star);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const star = starAt(e.clientX, e.clientY);
    if (star?.href) router.push(star.href);
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[60vh] min-h-[380px]"
      style={{ cursor: hovered?.href ? "pointer" : "default" }}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        hoveredRef.current = null;
        setHovered(null);
      }}
      onClick={handleClick}
    >
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      {hovered && (
        <div
          className="absolute pointer-events-none bg-[var(--background-secondary)] border border-[var(--text-muted)]/30 rounded px-3 py-2 max-w-xs text-sm shadow-lg"
          style={{
            left: `min(${hovered.x * 100}%, calc(100% - 20rem))`,
            top: `calc(${hovered.y * 100}% + 14px)`,
          }}
        >
          <p className="text-gray-100 font-semibold">
            {hovered.title}
            {hovered.date && (
              <span className="text-gray-400 font-mono font-normal text-xs ml-2">
                {hovered.date}
              </span>
            )}
          </p>
          {hovered.note && <p className="text-gray-400 mt-1">{hovered.note}</p>}
          <p className="text-gray-500 text-xs mt-1 font-mono">
            {hovered.state}
            {hovered.lens ? ` · ${hovered.lens}` : ""}
            {hovered.href ? " · click to open" : ""}
          </p>
        </div>
      )}
    </div>
  );
}
