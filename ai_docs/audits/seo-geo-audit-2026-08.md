# SEO/GEO Audit: daveliew.com

> **⚠️ Partially superseded by `ai_docs/2026-08-site-purpose-reset.md` (same day).**
> Do not apply as written:
>
> - **C4** — do NOT add the four missing routes to the sitemap; all four freeze under the reset.
> - **C6** — do NOT set the homepage title to "David Liew — Product Deployment Engineer"; the title is set during the homepage-as-log rewrite and matches the log identity, not the role.
>
> Still valid: the C1 llms.txt rewrite (now describes a log, not a curriculum) and the three `seo-check.js` false-positive patches.

**Date**: 2026-08-08 (quarterly, Jul cycle — run late)
**Context**: first audit after the Product Deployment Engineer (Search+) repositioning landed (`b1879ff`)
**Commit audited**: `86af155`

## Overall Score: C (73%)

Grade C is driven by two HIGH failures (C4 sitemap, C6 meta), not by a broken
foundation — robots.txt, Schema.org, OG images, and cross-validation are all clean.
The failures are drift: content shipped after the sitemap and the llms files were
last maintained.

### Checks Summary

| #   | Check                    | Severity | Status | Notes                                                              |
| --- | ------------------------ | -------- | ------ | ------------------------------------------------------------------ |
| 1   | AI Discoverability (GEO) | MEDIUM   | FAIL   | Both llms files document two removed routes; positioning is stale  |
| 2   | OG Image                 | MEDIUM   | PASS   | Dynamic route, 1200×630, `image/png`, alt carries the new title    |
| 3   | robots.txt               | HIGH     | PASS   | Sitemap ref, Q1-2026 crawler names, `/_next/static/` allowed       |
| 4   | Sitemap                  | HIGH     | FAIL   | 4 live routes absent                                               |
| 5   | hreflang                 | MEDIUM   | SKIP   | Single-language site — N/A                                         |
| 6   | Meta Config              | HIGH     | FAIL   | Homepage `<title>` is 10 chars and drops the role keyword          |
| 7   | Schema.org               | MEDIUM   | PASS   | Person + WebSite valid; `jobTitle` updated in the repositioning    |
| 8   | Analytics                | LOW      | FAIL   | `@vercel/analytics` present, `@vercel/speed-insights` absent       |
| 9   | Verification             | LOW      | SKIP   | No file or meta tag — DNS-verified via Vercel (assumed, unchecked) |
| 10  | Cross-Validation         | HIGH     | PASS   | No Disallow prefix collides with any live route or sitemap URL     |

**Deductions**: C1 −5, C4 −10, C6 −10, C8 −2 = **73**

## Findings

### HIGH (fix before next deploy)

| Check | Issue                                                                                                                                                                                                                                  | Fix                                                                                                                             |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| C4    | Four live routes are missing from `app/sitemap.ts`: `/hackathons`, `/teaching`, `/vibe-coding/fundamentals`, `/ai-journey/techniques`. `/hackathons` is in the top nav — a primary page Google is not being told about.                | Add the four entries. `/ai-journey/techniques` is the index whose five children are all already listed.                         |
| C6    | Root `title.default` is `"David Liew"` (10 chars). The OG title carries `"David Liew — Product Deployment Engineer"`, so the social card ranks the role keyword and the actual `<title>` tag does not. Target for a homepage is 50–60. | Set `default: "David Liew — Product Deployment Engineer"` in `app/layout.tsx`. Keep the `template` as-is; sub-pages unaffected. |

### MEDIUM

| Check | Issue                                                                                                                                                                                                                                                                                                                           | Fix                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| C1    | `public/llms.txt` lines 21–22 and `public/llms-full.txt` lines 150 & 156 present `/philosophy/` and `/laboratory/` as live content sections. Both routes were purged in May 2026 and now 301-redirect. AI crawlers are being handed dead URLs as primary content areas — the GEO equivalent of a sitemap listing removed pages. | Delete those entries from both files.                                                      |
| C1    | Same files carry superseded positioning the repositioning commit did not reach: "AI engineer and builder", "pioneering practical frameworks", "Building AI colleagues", "Three-Hat Framework … validated on 3 client projects", and an Agentic Brewery link. Each is on the CLAUDE.md avoid list or terminology-replaced list.  | Rewrite both bodies against the sanctioned bio; "Multi-Role Fluency" replaces "Three-Hat". |
| C1    | Neither file lists `/hackathons` or `/teaching`; `llms-full.txt` has no `/log/` section despite `/log` being the current primary stream.                                                                                                                                                                                        | Add them while rewriting.                                                                  |

### LOW

| Check | Issue                                                                                                                                                                 | Fix                                                                                      |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| C8    | `@vercel/speed-insights` is not installed — no Core Web Vitals field data.                                                                                            | `npm i @vercel/speed-insights`, mount `<SpeedInsights />` beside `<Analytics />`.        |
| C6    | `keywords` meta is still set in `app/layout.tsx` and was updated during the repositioning. Google has ignored it since 2009; it is inert noise, not a ranking signal. | Optional removal. **Accept decision**: harmless, costs nothing to leave. Not re-flagged. |

## `npm run seo-check` is over-reporting — 3 of its 7 warnings are false

Worth fixing so the script stays trustworthy; none of these are site defects.

| Warning                           | Reality                                                      | Cause                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `/: Not in sitemap`               | Homepage **is** in the sitemap (`app/sitemap.ts:35`)         | `scripts/seo-check.js:52` regex requires a quoted URL; the entry is bare `url: baseUrl`                                         |
| `/log/[slug]: Not in sitemap`     | Covered dynamically via `getLogEntries()`                    | `c77bae2` filtered `${…}` entries out of the sitemap side but left the page side still being checked — the fix was half-applied |
| `/log/[slug]: No metadata export` | It exports `generateMetadata` (`app/log/[slug]/page.tsx:18`) | `seo-check.js:76` matches `export function generateMetadata`; the file uses `export async function`                             |

The remaining 4 warnings are the genuine C4 sitemap gaps.

## Recommendations

1. Add the four missing sitemap routes (`/hackathons` first — it is in the top nav).
2. Rewrite both llms files: drop the dead `/philosophy` + `/laboratory` sections, replace the superseded positioning, add `/log`, `/hackathons`, `/teaching`.
3. Lengthen the homepage `<title>` default to include the role.
4. Patch the three `seo-check.js` false positives so the next run's warning count means something.

## Post-deploy actions (after fixes ship)

- Resubmit `https://daveliew.com/sitemap.xml` in Search Console.
- Request indexing for `/hackathons` and `/teaching` — newly discoverable.
- Confirm the homepage `<title>` on the live page, not just in source.

## Notes for the next run

- `keywords` meta: accepted as-is, do not re-flag (see LOW above).
- Verification method was assumed to be DNS (Vercel) but not confirmed with `dig`. Confirm once, then record it here.
