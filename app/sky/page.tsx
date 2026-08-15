import type { Metadata } from "next";
import Link from "next/link";
import { getLogEntries } from "@/utils/log";
import { layoutSky, type SkyManifest } from "@/utils/sky";
import { SkyChart } from "@/components/sky/SkyChart";
import { SkyLegend } from "@/components/sky/SkyLegend";
import skyManifest from "@/data/sky.json";

export const metadata: Metadata = {
  title: "The sky",
  description:
    "The whole territory of this log as a star chart: written entries lit, shelved work glowing faint, declared topics still dark.",
};

export default async function SkyPage() {
  const entries = await getLogEntries();
  const layout = layoutSky(skyManifest as SkyManifest, entries);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">The sky</h1>
        <p className="text-gray-400 leading-relaxed max-w-2xl">
          Everything this log claims as territory, drawn as sky. Lime stars are
          written entries. Faint stars are shelved work — finished, frozen,
          still live at their URLs. Outlines are declared and unwritten: the
          to-do list.
        </p>
      </header>

      <SkyChart layout={layout} />

      <SkyLegend layout={layout} className="mt-4" />

      {/* The chart is canvas; every navigable star is also a real link. */}
      <nav aria-label="All stars" className="sr-only">
        <ul>
          {layout.stars
            .filter((s) => s.href)
            .map((s) => (
              <li key={s.id}>
                <Link href={s.href as string}>{s.title}</Link>
              </li>
            ))}
        </ul>
      </nav>

      <p className="mt-8">
        <Link href="/" className="text-[var(--accent-primary)] hover:underline">
          ← Back to the log
        </Link>
      </p>
    </div>
  );
}
