import Link from "next/link";
import type { Metadata } from "next";
import { getLogEntries } from "@/utils/log";
import { TypeBadge } from "@/components/log/TypeBadge";

export const metadata: Metadata = {
  title: "Log | Dave Liew",
  description:
    "A field log of the AI era: dated notes at two speeds — fast observations and occasional slow essays.",
};

export default async function LogPage() {
  const entries = await getLogEntries();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Log</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Dated notes on the AI era as it unfolds — fast observations and
          occasional slow essays. Written for future me first.
        </p>
      </header>

      {entries.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No entries yet.</p>
      ) : (
        <ul className="space-y-8">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <article>
                <div className="flex items-center gap-3 text-sm mb-1">
                  <time
                    dateTime={entry.date}
                    className="text-gray-500 dark:text-gray-400 tabular-nums"
                  >
                    {entry.date}
                  </time>
                  <TypeBadge type={entry.type} />
                </div>
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/log/${entry.slug}`}
                    className="hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {entry.title}
                  </Link>
                </h2>
                {entry.summary && (
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {entry.summary}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
