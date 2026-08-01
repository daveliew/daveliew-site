import fs from "fs";
import path from "path";
import type { LogEntry, LogEntryMeta } from "@/types/log";

// Server-only: reads content/log at build time (fs is unavailable in the browser).
const LOG_DIR = path.join(process.cwd(), "content", "log");

export function getLogSlugs(): string[] {
  if (!fs.existsSync(LOG_DIR)) return [];
  return fs
    .readdirSync(LOG_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getLogEntries(): Promise<LogEntry[]> {
  const entries = await Promise.all(
    getLogSlugs().map(async (slug) => {
      const { meta } = (await import(`@/content/log/${slug}.mdx`)) as {
        meta: LogEntryMeta;
      };
      return { slug, ...meta };
    }),
  );
  return entries.sort((a, b) => b.date.localeCompare(a.date));
}
