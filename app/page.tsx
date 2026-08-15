import Link from "next/link";
import { getLogEntries } from "@/utils/log";
import { TypeBadge } from "@/components/log/TypeBadge";
import { layoutSky, type SkyManifest } from "@/utils/sky";
import { SkyChart } from "@/components/sky/SkyChart";
import skyManifest from "@/data/sky.json";

const RECENT_COUNT = 10;

export default async function HomePage() {
  const entries = await getLogEntries();
  const recent = entries.slice(0, RECENT_COUNT);
  const layout = layoutSky(skyManifest as SkyManifest, entries);
  const count = (state: string) =>
    layout.stars.filter((s) => s.state === state).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          A field log of the AI era
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Four decades of tech shifts — pre-internet, internet, mobile, cloud,
          now AI. This log keeps dated notes on the newest one as it unfolds,
          and on raising kids through it. Written for future me first; others
          overhear.
        </p>
      </header>

      <SkyChart layout={layout} />

      <p className="mt-4 mb-12 text-sm text-gray-500 font-mono">
        {count("lit")} lit · {count("shelved")} shelved · {count("unwritten")}{" "}
        unwritten — the empty sky is the to-do list
      </p>

      {recent.length === 0 ? (
        <p className="text-gray-400">No entries yet.</p>
      ) : (
        <ul className="space-y-8 max-w-2xl">
          {recent.map((entry) => (
            <li key={entry.slug}>
              <article>
                <div className="flex items-center gap-3 text-sm mb-1">
                  <time
                    dateTime={entry.date}
                    className="text-gray-400 font-mono"
                  >
                    {entry.date}
                  </time>
                  <TypeBadge type={entry.type} />
                </div>
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/log/${entry.slug}`}
                    className="text-gray-100 hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {entry.title}
                  </Link>
                </h2>
                {entry.summary && (
                  <p className="text-gray-400 mt-1">{entry.summary}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}

      {entries.length > RECENT_COUNT && (
        <p className="mt-10">
          <Link
            href="/log"
            className="text-[var(--accent-primary)] hover:underline"
          >
            All entries →
          </Link>
        </p>
      )}
    </div>
  );
}
