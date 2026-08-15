import type { MetadataRoute } from "next";
import { getLogEntries } from "@/utils/log";

/**
 * Next.js 16 Sitemap Generation
 * Automatically generates sitemap.xml at /sitemap.xml
 *
 * Only the live surface is listed: home (the log), /log, entries, /about.
 * Frozen pages (curriculum, agents, hackathons, teaching, contact) stay
 * reachable by URL but are deliberately absent — see
 * ai_docs/2026-08-site-purpose-reset.md.
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
  ];
}
