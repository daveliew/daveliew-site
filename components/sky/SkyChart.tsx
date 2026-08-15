"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { PositionedStar, SkyLayout } from "@/utils/sky";
import { HORIZON_Y } from "@/utils/sky";

const HIT_RADIUS = 14;
const LABEL_MAX_CHARS = 26;

interface Palette {
  lit: string;
  shelved: string;
  faint: string;
  text: string;
  label: string;
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
    label: read("--text-primary", "#f3f4f6"),
  };
}

function drawGlyph(
  ctx: CanvasRenderingContext2D,
  star: PositionedStar,
  x: number,
  y: number,
  palette: Palette,
  emphasized: boolean,
  scale = 1,
) {
  if (star.state === "lit") {
    ctx.fillStyle = palette.lit;
    ctx.shadowColor = palette.lit;
    ctx.shadowBlur = (emphasized ? 18 : 12) * scale;
    ctx.beginPath();
    ctx.arc(x, y, 4.5 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  } else if (star.state === "shelved") {
    ctx.fillStyle = palette.shelved;
    ctx.globalAlpha = emphasized ? 1 : 0.7;
    ctx.shadowColor = palette.shelved;
    ctx.shadowBlur = emphasized ? 10 : 5;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  } else {
    ctx.strokeStyle = palette.faint;
    ctx.globalAlpha = emphasized ? 0.9 : 0.5;
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

interface Rect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const overlaps = (a: Rect, b: Rect) =>
  a.x1 < b.x2 && b.x1 < a.x2 && a.y1 < b.y2 && b.y1 < a.y2;

/**
 * Everything that doesn't move — bands, edges, glyphs, labels — rendered once
 * to an offscreen canvas. The frame loop only composites this and animates
 * the pulse + hover emphasis on top.
 */
function buildStatic(
  target: HTMLCanvasElement,
  layout: SkyLayout,
  w: number,
  h: number,
  dpr: number,
  palette: Palette,
) {
  target.width = w * dpr;
  target.height = h * dpr;
  const ctx = target.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  // Horizon, band separators, era labels.
  ctx.strokeStyle = palette.faint;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(0, HORIZON_Y * h);
  ctx.lineTo(w, HORIZON_Y * h);
  ctx.stroke();
  ctx.globalAlpha = 0.12;
  for (const band of layout.bands.slice(1)) {
    ctx.beginPath();
    ctx.moveTo(0, band.bottom * h);
    ctx.lineTo(w, band.bottom * h);
    ctx.stroke();
  }
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = palette.faint;
  ctx.font = "12px monospace";
  for (const band of layout.bands) {
    ctx.fillText(band.era, 8, band.center * h + 4);
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

  // Glyphs. The pulsing star is drawn by the frame loop instead.
  for (const star of layout.stars) {
    if (star.pulse) continue;
    drawGlyph(ctx, star, star.x * w, star.y * h, palette, false);
  }

  // Permanent labels for everything written or shelved. Unwritten stars stay
  // nameless until hover — they don't have a story yet. Greedy vertical
  // nudging keeps the crowded band legible; layout is deterministic, so the
  // result never shuffles between builds.
  const placed: Rect[] = [];
  // On narrow screens only lit stars keep permanent labels — nine labels in
  // one band don't fit a phone; shelved titles stay a tap away.
  const labeled = layout.stars
    .filter((s) => s.state === "lit" || (w >= 520 && s.state === "shelved"))
    .sort((a, b) => a.x - b.x || a.y - b.y);
  for (const star of labeled) {
    const lit = star.state === "lit";
    const text =
      star.title.length > LABEL_MAX_CHARS
        ? star.title.slice(0, LABEL_MAX_CHARS - 1).trimEnd() + "…"
        : star.title;
    ctx.font = lit ? "11px monospace" : "10px monospace";
    const textW = ctx.measureText(text).width;
    const x = star.x * w;
    const y = star.y * h;
    const leftSide = star.x > 0.72;
    let tx = leftSide ? x - 9 - textW : x + 9;
    tx = Math.min(Math.max(tx, 2), w - textW - 2);
    let dy = 0;
    for (const candidate of [0, 13, -13, 26, -26]) {
      dy = candidate;
      const rect = {
        x1: tx,
        y1: y + candidate - 9,
        x2: tx + textW,
        y2: y + candidate + 4,
      };
      if (!placed.some((r) => overlaps(r, rect))) break;
    }
    placed.push({ x1: tx, y1: y + dy - 9, x2: tx + textW, y2: y + dy + 4 });
    ctx.fillStyle = lit ? palette.label : palette.text;
    ctx.globalAlpha = lit ? 0.95 : 0.65;
    ctx.fillText(text, tx, y + dy + 4);
    // A displaced label gets a leader line back to its star, so ownership
    // stays unambiguous in the crowded band.
    if (dy !== 0) {
      ctx.strokeStyle = lit ? palette.label : palette.text;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.moveTo(x + (leftSide ? -6 : 6), y);
      ctx.lineTo(leftSide ? tx + textW + 3 : tx - 3, y + dy);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

export function SkyChart({ layout }: { layout: SkyLayout }) {
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLCanvasElement | null>(null);
  const staticKeyRef = useRef("");
  const hoveredRef = useRef<PositionedStar | null>(null);
  const pointerTypeRef = useRef("mouse");
  const [hovered, setHovered] = useState<PositionedStar | null>(null);
  const [viaTouch, setViaTouch] = useState(false);
  const [inView, setInView] = useState(true);

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

      const staticKey = `${w}x${h}@${dpr}:${palette.lit}:${palette.shelved}:${palette.faint}:${palette.text}:${palette.label}`;
      if (!staticRef.current)
        staticRef.current = document.createElement("canvas");
      if (staticKeyRef.current !== staticKey) {
        buildStatic(staticRef.current, layout, w, h, dpr, palette);
        staticKeyRef.current = staticKey;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(staticRef.current, 0, 0, w, h);

      const hoveredStar = hoveredRef.current;
      for (const star of layout.stars) {
        const isHovered = hoveredStar?.id === star.id;
        if (star.pulse) {
          const pulse = 1 + 0.25 * Math.sin(time / 450);
          drawGlyph(
            ctx,
            star,
            star.x * w,
            star.y * h,
            palette,
            isHovered,
            pulse,
          );
        } else if (isHovered) {
          drawGlyph(ctx, star, star.x * w, star.y * h, palette, true);
        }
      }
    },
    [layout],
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [draw, inView]);

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
    if (e.pointerType === "touch") return;
    const star = starAt(e.clientX, e.clientY);
    if (star?.id !== hoveredRef.current?.id) {
      hoveredRef.current = star;
      setHovered(star);
      setViaTouch(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const star = starAt(e.clientX, e.clientY);
    // Touch has no hover: first tap surfaces the tooltip, a second tap on the
    // same star opens it.
    if (pointerTypeRef.current === "touch") {
      if (star && star.id === hoveredRef.current?.id) {
        if (star.href) router.push(star.href);
        return;
      }
      hoveredRef.current = star;
      setHovered(star);
      setViaTouch(true);
      return;
    }
    if (star?.href) router.push(star.href);
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[60vh] min-h-[380px]"
      style={{ cursor: hovered?.href ? "pointer" : "default" }}
      onPointerDown={(e) => {
        pointerTypeRef.current = e.pointerType;
      }}
      onPointerMove={handleMove}
      onPointerLeave={(e) => {
        if (e.pointerType === "touch") return;
        hoveredRef.current = null;
        setHovered(null);
      }}
      onClick={handleClick}
    >
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      <p
        className="absolute right-0 font-mono text-xs text-[var(--text-muted)] pointer-events-none select-none"
        style={{ top: `calc(${HORIZON_Y * 100}% + 10px)` }}
        aria-hidden="true"
      >
        oldest era at the horizon · the present overhead
      </p>
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
            {hovered.href
              ? viaTouch
                ? " · tap again to open"
                : " · click to open"
              : ""}
          </p>
        </div>
      )}
    </div>
  );
}
