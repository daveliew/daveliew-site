---
name: seo-process
description: SEO cadence and checklist for daveliew.com — deploy-time validation and the quarterly audit (Jan/Apr/Jul/Oct); Search Console is a smoke detector, not a ritual. Use when deploying, when the user mentions SEO, Search Console, sitemap, or meta tags, or when a new page is added.
---

# SEO Process (daveliew.com)

**Stance (decided 2026-08-15):** the site stays indexed and findable by name — it is
the sanctioned disclosure surface and should be legible to search and AI crawlers.
But there is no audience-growth goal, so there is no active SEO work and no metric
watching. Search Console is a smoke detector: it exists to catch broken plumbing
(deindexing, manual actions, sitemap failures), never to report traffic.

**Memory triggers:**

- "Deploy = SEO check runs automatically"
- "New page = add to sitemap.ts"
- "Quarterly audit = 2-minute GSC smoke check rides along"

**Automated checks** (run via `npm run seo-check`, included in `npm run pre-deploy`):

- Meta tag coverage (title, description per route)
- Sitemap completeness (compare /app routes vs sitemap.ts)
- Schema.org JSON-LD validation
- Image alt attribute presence

**Analytics**: Vercel Analytics (privacy-first, auto-configured)

**Recurring tasks**:

| Task                             | Frequency    | Trigger              |
| -------------------------------- | ------------ | -------------------- |
| SEO validation                   | Every deploy | `npm run pre-deploy` |
| Full SEO audit + GSC smoke check | Quarterly    | Jan/Apr/Jul/Oct      |

**GSC smoke check** (2 minutes, quarterly, or on suspicion something broke):
property `https://daveliew.com/` under daveliew@gmail.com — confirm no manual
actions / security issues, sitemap still Success. Do not review impressions or
clicks; watching them pulls the register back toward writing for an audience.
The monthly review was deliberately dropped 2026-08-15 — do not reinstate it.

For the full audit itself, use the user-scope `seo-geo-audit` skill; this file
carries the project cadence only.
