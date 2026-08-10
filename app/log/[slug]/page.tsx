import Link from "next/link";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { getLogSlugs } from "@/utils/log";
import type { LogEntryMeta } from "@/types/log";
import { TypeBadge } from "@/components/log/TypeBadge";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLogSlugs().map((slug) => ({ slug }));
}

interface LogEntryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LogEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = (await import(`@/content/log/${slug}.mdx`)) as {
    meta: LogEntryMeta;
  };
  return {
    title: `${meta.title} | Log | Dave Liew`,
    description: meta.summary ?? `Field log entry, ${meta.date}.`,
  };
}

export default async function LogEntryPage({ params }: LogEntryPageProps) {
  const { slug } = await params;
  const { default: Entry, meta } = (await import(
    `@/content/log/${slug}.mdx`
  )) as { default: ComponentType; meta: LogEntryMeta };

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm mb-2">
          <time dateTime={meta.date} className="text-gray-400 font-mono">
            {meta.date}
          </time>
          <TypeBadge type={meta.type} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{meta.title}</h1>
      </header>

      <Entry />

      <footer className="mt-12 pt-6 border-t border-gray-800">
        <Link
          href="/log"
          className="text-[var(--accent-primary)] hover:underline"
        >
          ← All entries
        </Link>
      </footer>
    </article>
  );
}
