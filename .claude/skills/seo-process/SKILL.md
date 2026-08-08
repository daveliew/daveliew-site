---
name: seo-process
description: SEO cadence and checklist for daveliew.com — deploy-time validation, the monthly Search Console review (15th), and the quarterly full audit (Jan/Apr/Jul/Oct). Use when deploying, when the user mentions SEO, Search Console, sitemap, or meta tags, or when a new page is added.
---

# SEO Process (daveliew.com)

**Memory triggers:**

- "Deploy = SEO check runs automatically"
- "15th of month = Search Console quick review"
- "New page = add to sitemap.ts"

**Automated checks** (run via `npm run seo-check`, included in `npm run pre-deploy`):

- Meta tag coverage (title, description per route)
- Sitemap completeness (compare /app routes vs sitemap.ts)
- Schema.org JSON-LD validation
- Image alt attribute presence

**Analytics**: Vercel Analytics (privacy-first, auto-configured)

**Recurring tasks**:

| Task                  | Frequency    | Trigger              |
| --------------------- | ------------ | -------------------- |
| SEO validation        | Every deploy | `npm run pre-deploy` |
| Search Console review | Monthly      | Calendar: 15th       |
| Full SEO audit        | Quarterly    | Jan/Apr/Jul/Oct      |

For the full audit itself, use the user-scope `seo-geo-audit` skill; this file carries the project cadence only.
