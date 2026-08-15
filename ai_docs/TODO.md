# Backlog — daveliew-site

> The `## Now / Next` section below is force-fed into every fresh Claude Code
> session by the global `SessionStart` hook. Keep it ≤15 lines — only this
> section is injected. De-facto source of truth for priorities is the memory
> file `project_daveliew_site.md` ("Active priorities"); keep this head in sync.

## Now / Next

1. Migrate `/ai-journey` (14 routes) to agenticbrewery.ai, then redirect + delete — the last pillar leaving. Its own session: ~5,000 lines TSX / 32 files + 1,279-line `data/ai-journey.json`, port into AB's dark theme. `components/content/SeoGeoAuditContent.tsx` can only be deleted after. Plan: `ai_docs/2026-08-two-surfaces-manifest.md`
2. Expand `/vibe-coding` — UNFROZEN 2026-08-15, now a living, indexed surface that grows (it is what people actually ask for). Open: does it earn a nav entry?
3. Write the next log entry — pick an unlit star from `npm run sky-census` (declared sky: `data/sky.json`); `content/log/<slug>.mdx` per CLAUDE.md
4. Rule for all surface questions: **daveliew.com holds nothing finished, agenticbrewery.ai holds nothing living.** `/hackathons`, `/teaching`, `/contact` stay here (frozen). AB open questions #1 employer disclosure and #2 résumé home remain open; #3/#4 answered by action

## Backlog

- Dead-code sweep after the reset: `components/home/*`, `components/navigation/SkillTreeMenu` are unconsumed since the nav/homepage rewrite (`/cleanup-audit`)
- Homepage CSS-showcase pass (plain version shipped Aug 2026; showcase was the original ambition)
- Adoption Curve series: frozen with /agents — revive as log essays if at all (ai_docs/lessons/2026-02-adoption-curve-series.md)
- Priorities SoT = memory `project_daveliew_site.md` — this head mirrors its "Active priorities"
