import type { LogEntry } from "@/types/log";

/**
 * The sky's layout: a pure, deterministic function of the manifest
 * (data/sky.json) and the written log entries. No randomness, no force
 * simulation — same inputs, same sky. Rendered by components/sky/SkyChart.
 */

export type StarState = "lit" | "shelved" | "unwritten";

export interface ManifestStar {
  id: string;
  title: string;
  era: string;
  lens?: string;
  /** Slug of the log entry that lit this star. */
  entry?: string;
  /** Route of a shelved (frozen/migrated) surface this star points at. */
  url?: string;
  note?: string;
}

export interface SkyManifest {
  eras: string[];
  stars: ManifestStar[];
}

export interface PositionedStar {
  id: string;
  title: string;
  era: string;
  lens?: string;
  state: StarState;
  href?: string;
  date?: string;
  note?: string;
  /** Unit coordinates in [0, 1]; y grows downward, horizon at HORIZON_Y. */
  x: number;
  y: number;
  /** The newest written entry pulses. */
  pulse?: boolean;
}

export interface SkyEdge {
  from: string;
  to: string;
}

export interface SkyBand {
  era: string;
  /** Unit y of the band's upper edge (zenith side). */
  top: number;
  /** Unit y of the band's lower edge (horizon side). */
  bottom: number;
  center: number;
  height: number;
}

export interface SkyLayout {
  eras: string[];
  stars: PositionedStar[];
  edges: SkyEdge[];
  /** Era bands from horizon (oldest) to zenith, heights weighted by star count. */
  bands: SkyBand[];
}

export const HORIZON_Y = 0.9;
const SKY_TOP = 0.12;
const X_MARGIN = 0.08;

/** Deterministic string hash to [0, 1) — stable jitter, no Math.random. */
function unitHash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return ((h >>> 0) % 10_000) / 10_000;
}

export function layoutSky(
  manifest: SkyManifest,
  entries: LogEntry[],
): SkyLayout {
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  // Oldest era sits just above the horizon; the current era near the zenith.
  // Band heights follow sqrt(star count) so a crowded era gets room without
  // flattening the sparse ones to slivers.
  const weights = manifest.eras.map((era) =>
    Math.sqrt(Math.max(1, manifest.stars.filter((s) => s.era === era).length)),
  );
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const bands: SkyBand[] = [];
  let bottom = HORIZON_Y;
  manifest.eras.forEach((era, i) => {
    const height = ((HORIZON_Y - SKY_TOP) * weights[i]) / totalWeight;
    bands.push({
      era,
      top: bottom - height,
      bottom,
      center: bottom - height / 2,
      height,
    });
    bottom -= height;
  });
  const bandByEra = new Map(bands.map((b) => [b.era, b]));

  const stars: PositionedStar[] = [];
  for (const era of manifest.eras) {
    const band = manifest.stars.filter((s) => s.era === era);
    // Dated (written) stars in date order, then the undated by id — a stable
    // left-to-right ordering that never shuffles between builds.
    band.sort((a, b) => {
      const da = a.entry ? (bySlug.get(a.entry)?.date ?? "") : "";
      const db = b.entry ? (bySlug.get(b.entry)?.date ?? "") : "";
      if (da && db) return da.localeCompare(db) || a.id.localeCompare(b.id);
      if (da !== db) return da ? -1 : 1;
      return a.id.localeCompare(b.id);
    });
    const eraBand = bandByEra.get(era)!;
    band.forEach((s, idx) => {
      const entry = s.entry ? bySlug.get(s.entry) : undefined;
      const state: StarState = entry ? "lit" : s.url ? "shelved" : "unwritten";
      stars.push({
        id: s.id,
        title: s.title,
        era,
        lens: s.lens,
        state,
        href: entry ? `/log/${entry.slug}` : s.url,
        date: entry?.date,
        note: s.note ?? entry?.summary,
        x: X_MARGIN + ((idx + 0.5) / band.length) * (1 - 2 * X_MARGIN),
        y: eraBand.center + (unitHash(s.id) - 0.5) * eraBand.height * 0.6,
      });
    });
  }

  const newest = stars
    .filter((s) => s.state === "lit" && s.date)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))[0];
  if (newest) newest.pulse = true;

  // Constellation lines: refs between entries where both ends are stars.
  const starByEntry = new Map(
    manifest.stars.filter((s) => s.entry).map((s) => [s.entry as string, s.id]),
  );
  const edges: SkyEdge[] = [];
  for (const s of manifest.stars) {
    if (!s.entry) continue;
    for (const ref of bySlug.get(s.entry)?.refs ?? []) {
      const to = starByEntry.get(ref);
      if (to) edges.push({ from: s.id, to });
    }
  }

  return { eras: manifest.eras, stars, edges, bands };
}
