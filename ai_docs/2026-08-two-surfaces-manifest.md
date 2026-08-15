# Two surfaces: what lives where

**Date**: 2026-08-15
**Status**: inventory verified against production; dispositions proposed, not executed
**Companion**: `agenticbrewery/ai_docs/strategy/2026-08-learn-path-spine.md`

## The two purposes

Both surfaces drifted because neither had a stated job. Dave's framing, 2026-08-15:

- **daveliew.com — an agentic journey plus a life-with-AI map.** Living. Written for
  future Dave. The log is the journey; `/sky` is the map.
- **agenticbrewery.ai — a semi-cold store of previous work**, kept credible enough to
  resurrect if the channel to earn as an agentic-engineering doer/consultant is ever
  worth opening.

The useful consequence: **daveliew.com holds nothing finished, AB holds nothing living.**
Anything that stopped growing leaves daveliew.com. Anything commercial can only exist on
AB. That single rule resolves every row below.

## Verified state, not assumed

Checked against **production** on 2026-08-15 (a local dev server gave false 404s — it hit
`EMFILE: too many open files`, so its misses were discarded):

| Route                         | daveliew.com                                      | Meaning                                 |
| ----------------------------- | ------------------------------------------------- | --------------------------------------- |
| `/agents/patterns`            | **308** → `www.agenticbrewery.ai/agents/patterns` | agents pillar migration is **complete** |
| `/context-engineering`        | 200                                               | still live here **and** on AB           |
| `/context-engineering/skills` | 200                                               | still live here **and** on AB           |
| `/context-engineering/hooks`  | 200                                               | still live here **and** on AB           |
| `/vibe-coding`                | 200                                               | not migrated                            |
| `/ai-journey`                 | 200                                               | not migrated                            |

**This corrects an earlier claim in this session.** The live cross-domain duplication is
**6 routes, not 16** — `/agents/:path*` already redirects (`next.config.mjs:164`), so only
the context-engineering pillar is genuinely served twice. Its daveliew.com copy
self-canonicalises to `daveliew.com`, and AB's copy self-canonicalises to AB, so the two
domains currently claim the same six pages.

## Array A — daveliew.com (41 route files)

| #                                                                              | Class | Routes | Disposition |
| ------------------------------------------------------------------------------ | ----- | ------ | ----------- |
| Dispositions below are **Dave's calls, 2026-08-15**. Two of them overruled the |
| first draft of this doc — see the note under the table.                        |

| #   | Class                                         | Routes                                                                                                                                                                          | Disposition                                                                                         |
| --- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 5   | **Living journey + map**                      | `/`, `/about`, `/log`, `/log/[slug]`, `/sky`                                                                                                                                    | **Keep.** The spine of the site.                                                                    |
| 10  | ~~`/agents/*`~~                               | hub + adoption-curve, learning-path, mcp-trust-assessment, openclaw-risk-assessment, overview, patterns, personal-systems, trust-engineering, voice                             | ✅ **DELETED 2026-08-15.** Was already 308ing to AB. Files removed.                                 |
| 6   | ~~`/context-engineering/*`~~                  | hub + archetypes, claude-md, hooks, seo-geo-audit, skills                                                                                                                       | ✅ **DELETED 2026-08-15**, with a new `/context-engineering/:path*` 308 added first so no URL 404s. |
| 14  | **Frozen, queued to migrate** `/ai-journey/*` | hub, why-ai, portfolio, technical-leadership, claude/{overview,code,mcp,capabilities,2026-predictions}, techniques/{hub,prompt-engineering,tool-use,llm-handling,seo-geo-audit} | **Migrate to AB**, then redirect. Declared pending on AB's `/learn`. **The remaining large job.**   |
| 3   | **LIVING — stays and grows** `/vibe-coding/*` | hub, fundamentals, handout                                                                                                                                                      | ✅ **UNFROZEN 2026-08-15.** Stays on daveliew.com, now in the sitemap, extend freely.               |
| 3   | **Stays — journey record**                    | `/hackathons`, `/teaching`, `/contact`                                                                                                                                          | **Keep on daveliew.com.** Frozen but live, as before. Not commercial (see below).                   |

**Two corrections to the first draft of this doc:**

1. **`/vibe-coding` is not leaving.** It is the one course surface that stays here and
   keeps growing, because it is what people actually ask for — the trigger was a friend
   asking "got any good vibe coding resources? how did you learn?" Its `/handout`
   (printable quick start, prompt templates) and `/fundamentals` (interactive events /
   state / conditionals demo) are the literal answer. ✅ AB's `/learn` no longer
   advertises it: AB commit `64c143c` removed the greyed "Migrating" placeholder cards
   entirely, so `/learn` now lists only pillars that have actually landed.
2. **`/hackathons`, `/teaching`, `/contact` are not commercial.** Grepped: `/contact` and
   `/hackathons` contain **zero** booking/pricing/hire language. They are journey record,
   not a sales funnel, and they stay. The only commercial residue found anywhere is
   `/teaching`'s **metadata** — its description and keywords still say "Available for
   corporate training" and "AI workshop singapore". That is a stale-metadata cleanup on a
   frozen page, not a reason to move the page.

**End state for daveliew.com: 8 live routes** — the 5-route living spine plus
`/vibe-coding` ×3 — with `/ai-journey` ×14, `/hackathons`, `/teaching`, `/contact`
frozen-but-reachable until ai-journey migrates.

## Array B — agenticbrewery.ai (32 route files)

| #   | Class                   | Routes                                                                    | Disposition                                                                         |
| --- | ----------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 16  | **Received cold store** | `/agents/*` (10), `/context-engineering/*` (6)                            | **Keep, do not grow.** Archive.                                                     |
| 3   | **Core**                | `/`, `/about`, `/learn`                                                   | **Keep.** `/learn` is the index of the cold store.                                  |
| 10  | **Notes**               | `/notes` + 8 posts + `/notes/topics/[slug]`                               | **Keep.** The one genuinely living thing on AB — but see the overlap warning below. |
| 3   | **Work**                | `/work`, `/work/[slug]`, `/work/ntuc-navigator`                           | **Keep and grow when the channel opens.** This is the commercial credential.        |
| —   | **Incoming**            | `/ai-journey/*`, `/vibe-coding/*`, `/hackathons`, `/teaching`, `/contact` | 20 routes still to arrive from Array A.                                             |

**End state for AB: ~52 routes**, of which ~36 are archive and ~16 are the live
commercial front (`/work`, `/notes`, `/learn`, contact).

## The overlap warning that should gate any new build on AB

AB already carries **three parallel vocabularies for one subject**: `taxonomy.ts`'s six
graph-centric topics, the received pillar tree, and `/agents/learning-path`'s four phases.
A new expert-anchored path that mints its own slugs would make four. If the Ng-anchored
path gets built, it must be an **ordering over existing routes and topic slugs**, never a
new set of names — see the companion doc.

Under "semi-cold store", that path is also **not** a curriculum investment. Its only
justification is as the commercial channel's credential, and the cheapest possible test of
whether that channel is worth opening: one static page answering the exact question a real
person already asked ("how did you learn?"). If nobody else asks, it cost one page.

## Order of work

**Done 2026-08-15** (uncommitted at time of writing):

1. ✅ Added the `/context-engineering/:path*` → AB redirect, mirroring `/agents/:path*`.
2. ✅ Deleted `app/agents/**` and `app/context-engineering/**` — **37 files**.
   `components/content/SeoGeoAuditContent.tsx` was deliberately **kept**: it is shared
   with `/ai-journey/techniques/seo-geo-audit`, which is still live. Its two
   `/context-engineering` CTA links now point straight at the AB URL instead of taking a
   redirect hop.
3. ✅ Unfroze `/vibe-coding`: added its 3 routes to the sitemap, updated `CLAUDE.md`, and
   rewrote its `sky.json` star note.
4. ✅ Full `pre-deploy` gate green — all 8 checks. Verified on a real production server:
   all 6 `/context-engineering/*` and both `/agents/*` probes return **308** to
   agenticbrewery.ai; `/vibe-coding`, `/sky`, `/log` return **200**; the sitemap emits
   exactly 11 URLs.

Gotchas hit, worth remembering: `tsc` failed twice on **stale generated validators** in
`.next/types` and `.next/dev/types` referencing the deleted routes. `next build`
regenerates the former but not the latter — clear `.next/dev` when routes are deleted.
Separately, `sky-census` requires star URLs to **start with `/`** and resolve against a
route or a declared redirect, so shelved stars must keep domain-relative paths and let
the 308 carry them; absolute AB URLs fail the census.

**Remaining:**

5. **Migrate `/ai-journey` (14 routes) to AB**, then redirect and delete. The last large
   chunk, and real content work rather than config — roughly 5,000 lines of TSX across 32
   files plus a 1,279-line `data/ai-journey.json`, with two single files over 900 lines.
   It needs porting into AB's dark theme and Navbar/Footer conventions, so it is its own
   session. `SeoGeoAuditContent.tsx` can be deleted only once this lands.
6. ~~Fix AB's `/learn`~~ — ✅ resolved upstream by AB commit `64c143c`, which deleted the
   pending placeholder cards rather than correcting them. Add an AI Journey card when it
   actually lands, not before.
7. **Optional cleanup**: strip the "Available for corporate training" commercial language
   from `/teaching`'s metadata — it conflicts with the site's no-commercial-CTA rule.

## Still open

- **Employer disclosure on AB** (reset doc § Open questions #1) is untouched and now more
  pressing: if `/contact` and the consulting channel move to AB, AB becomes a surface where
  the Google role's presence or absence is a deliberate signal.
- **`github.com/daveliew` vs AB** (reset doc #2): under this framing they are not
  duplicates — GitHub is the _employment_ surface, AB is the _contract-work_ surface.
  Worth confirming rather than assuming.
