import type { SkyLayout, StarState } from "@/utils/sky";

const STATES: { state: StarState; glyph: string; color: string }[] = [
  { state: "lit", glyph: "●", color: "text-[var(--accent-primary)]" },
  { state: "shelved", glyph: "●", color: "text-[var(--text-secondary)]" },
  { state: "unwritten", glyph: "○", color: "text-[var(--text-muted)]" },
];

/** Count line under the chart, with glyphs matching the render. */
export function SkyLegend({
  layout,
  suffix,
  className = "",
}: {
  layout: SkyLayout;
  suffix?: string;
  className?: string;
}) {
  return (
    <p className={`text-sm text-gray-500 font-mono ${className}`.trim()}>
      {STATES.map(({ state, glyph, color }, i) => (
        <span key={state}>
          {i > 0 && " · "}
          <span className={color}>{glyph}</span>{" "}
          {layout.stars.filter((s) => s.state === state).length} {state}
        </span>
      ))}
      {suffix && <> — {suffix}</>}
    </p>
  );
}
