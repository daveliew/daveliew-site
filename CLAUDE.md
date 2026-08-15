# CLAUDE.md

@AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Stack**: Next.js 16.2 + React 19 + TypeScript + Tailwind + Framer Motion
**Purpose**: a field log plus a thin About — decision record: `ai_docs/2026-08-site-purpose-reset.md`
**Path Alias**: `@/*` → root directory
**Critical**: Always run `npm run pre-deploy` before committing
**Backlog**: top-3 in `ai_docs/TODO.md` § Now / Next — auto-surfaced into every fresh session by the global SessionStart hook (priorities SoT: memory `project_daveliew_site.md`)

## Purpose & Voice

**What this is**: a field log plus a thin About page. Nothing else — no curriculum, no portfolio, no tabs. Decision record: `ai_docs/2026-08-site-purpose-reset.md` (Aug 2026; supersedes the May 2026 repositioning's audience and scope).

**Reader**: future Dave. Others overhear — the register never adjusts for an audience. Not "peers", not "explorers", not "learners".

**Spine**: the four-decade arc (pre-internet → internet → mobile → cloud → AI) as the frame · raising kids through those shifts as the recurring lens · human-tech interaction as the standing subject.

**Register**: raw and specific. The contract is `/log/what-this-log-is` ("written for future me first"); the reference piece is `/log/how-old-is-egypt`. No explaining for an audience, no generalising to be useful, no commercial CTAs anywhere.

**Employer disclosure**: the Google role stays publicly disclosed on daveliew.com as fact, not identity. Verified facts only: Google gTech Ads (Apr 2026–present; Product Deployment Engineer, Search+) · Meta (2022–2024, Technical Solutions Consultant — SKAN 4.0, Conversions API, signal-loss attribution) · AWS / SG Code Campus (earlier).

**Frozen surfaces — do not extend, re-link, or audit**: the 2025–2026 curriculum (`/ai-journey`, `/context-engineering`, `/agents`, `/vibe-coding`, `/teaching`) plus `/hackathons` and `/contact`. Live by URL, absent from nav and sitemap, no `noindex`. Writing them was how Dave learned; they are finished, not neglected. A future migration to agenticbrewery.ai is a separate project — open questions in the reset doc.

**Decoupled surfaces**: github.com/daveliew stays the professional/hiring surface (data from the `daveliew/daveliew` repo). Don't force-sync it with the site; it dilutes both.

## Development Commands

All scripts are in `package.json`. Local gate before committing: `npm run pre-deploy`.
Gotcha: `prebuild` runs type-check + lint on Vercel but NOT locally (`~/.npmrc ignore-scripts=true` blocks it) — a green local build is not proof CI passes.

## SEO Process

Cadence, memory triggers, and the recurring-task table live in the project skill `.claude/skills/seo-process/SKILL.md` — invoke it for deploy checks and the quarterly audit (which carries a 2-min GSC smoke check; the monthly review was deliberately dropped 2026-08-15, no metric watching). `npm run seo-check` runs inside `pre-deploy`.

## Project Structure

**Top Nav**: Log / About (stripped Aug 2026 per the reset; homepage renders the log, `/log` is the full archive).

**Full site map**: `ai_docs/architecture/codebase-analysis.md`. _Removed routes (do not re-add)_: `/philosophy`, `/laboratory` — declared in sitemap/nav but never had pages; purged May 2026, now 301-redirect to `/about` and `/hackathons` via `next.config.mjs`.

**Key Data Files** (`/data/`): `ai-journey.json` feeds frozen surfaces only — do not extend it. Live-surface copy lives inline in `app/**/<Section>Content.tsx`.

## Architecture Essentials

**Tech Stack**: Next.js 16.2 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration. Bundled docs at `node_modules/next/dist/docs/` — see `AGENTS.md`.

**Fitzgerald Principle (legacy, vestigial)**: The site originally embodied the Fitzgerald Principle (productive tension of opposing ideas — simple surfaces with rich depth). Automated scoring still exists at `npm run philosophy-check` but the site no longer leads with this framing as primary. Treat as a design heuristic for new components, not a positioning anchor.

Component layout + reuse (barrel exports in `/components/common/`) is covered in `AGENTS.md`; full inventory in `ai_docs/architecture/codebase-analysis.md`.

_Strategic/changelog context (May 2026 repositioning, content-maturity map, active priorities) lives in memory `project_daveliew_site`. Theme tokens (`styles/globals.css`) and `utils/animations.ts` helpers are documented in `AGENTS.md`._

## Common Development Patterns

### Content Updates

1. Field-log entries: add `content/log/<slug>.mdx` starting with `export const meta = { title, date, type: "note" | "essay", summary }` (typed via `types/log.ts`; no YAML frontmatter — it renders as text). Homepage, `/log` index, sitemap, and static params pick it up automatically. Underscore-prefixed files are ignored.
2. Other live-surface copy (About) lives inline in `app/**/<Section>Content.tsx` — edit there.
3. Frozen surfaces get no content updates (see Purpose & Voice).

## Detailed Documentation

For deep dives, see `/ai_docs/`:

- `developer_guide/getting-started.md` - Setup, debugging tips
- `developer_guide/design-system.md` - Fitzgerald design system, philosophy workflow
- `architecture/codebase-analysis.md` - Full site map, tech stack, patterns
