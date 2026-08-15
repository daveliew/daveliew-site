import type { MetadataRoute } from "next";
import { getLogEntries } from "@/utils/log";

/**
 * Next.js 16 Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 *
 * Only the live surface is listed: home (the log), /log, entries, /about,
 * /sky, and /vibe-coding (unfrozen 2026-08-15 — it stays here and grows).
 * Still-frozen pages (/ai-journey, /hackathons, /teaching, /contact) stay
 * reachable by URL but are deliberately absent. /agents and
 * /context-engineering have left the site entirely and 308 to
 * agenticbrewery.ai — see ai_docs/2026-08-two-surfaces-manifest.md.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://daveliew.com";
  const logEntries = await getLogEntries();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/log`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...logEntries.map((entry) => ({
      url: `${baseUrl}/log/${entry.slug}`,
      lastModified: new Date(entry.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sky`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    // Vibe Coding was unfrozen 2026-08-15: it is the one course surface that
    // stays on daveliew.com and keeps growing, so it is indexed like the rest
    // of the live surface. Everything else from the curriculum has left.
    ...["", "/fundamentals", "/handout"].map((suffix) => ({
      url: `${baseUrl}/vibe-coding${suffix}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
