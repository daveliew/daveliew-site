# CLAUDE.md

@AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Stack**: Next.js 16.2 + React 19 + TypeScript + Tailwind + Framer Motion
**Philosophy**: Fitzgerald Principle (opposing forces in productive tension)
**Path Alias**: `@/*` → root directory
**Critical**: Always run `npm run pre-deploy` before committing
**Backlog**: top-3 in `ai_docs/TODO.md` § Now / Next — auto-surfaced into every fresh session by the global SessionStart hook (priorities SoT: memory `project_daveliew_site.md`)

## Positioning & Voice

**What this is**: Personal site for a Product Deployment Engineer at Google gTech Ads, specialising in Search+. The role combines Solutions Architect with Customer Solutions Engineering — the emphasis is **product adoption and deployment**, not vertical coverage. Substance: **product adoption, deployment, measurement integrity** — the through-line across Meta and now Google. Audience: peers doing product deployment, measurement, and AI adoption work (not "explorers" or "learners" — that was older positioning).

**Bio**: "Product Deployment Engineer — product adoption, deployment, measurement integrity. Currently at Google gTech Ads (Search+). Ex-Meta. Singapore."

**Experience**: Google gTech Ads (Apr 2026–present; Product Deployment Engineer, Search+ — previously titled Advertising Solutions Architect) · Meta (2022–2024, Technical Solutions Consultant — SKAN 4.0, Conversions API, signal-loss attribution) · AWS / SG Code Campus (earlier — Bedrock, AI tooling).

**Employer disclosure**: Google role **is** publicly disclosed on the site (matches peers like Nito Buendia). The old "do not disclose Google" guidance is **stale — ignore it.**

**Tone — Nito-tier** (ref: nitobuendia.com; "would Nito put this on his site?"):

- **Concrete over evocative** — dated, scoped, named achievements; no aspirational mood pieces
- **Notes, not pitches** — "Notes on X" / "Happy to compare notes", never "let's talk" / "ready to build"
- **Proper sentence case**, research-backed (cite sources: SWE-bench, Coatue S-curve)
- **No commercial CTAs anywhere** on the main site (workshop pages excepted)

**Terminology** — ✅ use: "Context Engineering" (not Prompt Engineering) · "Multi-Role Fluency" (not Three-Hat / "multiple hats") · "Agentic exploration" / "Personal lab" (not "client projects" / "case studies") · "Compare notes" (not "let's talk" / "book a call") · "Product Deployment Engineer" (not "Solutions Architect" / "AI SA" / "Voice Agent Specialist" — all superseded).

**Avoid**: mission framing ("pioneering", "next generation", "frameworks our children will need"); commercial framing ("battle-tested", "build your business", "give your business a voice", "ready to…"); any outside-business solicitation; reintroducing Agentic Brewery (sterilised) or the "Voice Agent Specialist" bio / "3 active client projects". Workshop-marketing tone is OK **only** under `/vibe-coding` and `/teaching` (actual workshop products).

**Decoupled surfaces**: daveliew.com and github.com/daveliew are intentionally separate — the site is Nito-tier notes for engineering peers (data from `/data/*.json`); the GitHub profile is professional hiring positioning (data from the `daveliew/daveliew` repo). Don't force-sync them; it dilutes both.

## Development Commands

All scripts are in `package.json`. Local gate before committing: `npm run pre-deploy`.
Gotcha: `prebuild` runs type-check + lint on Vercel but NOT locally (`~/.npmrc ignore-scripts=true` blocks it) — a green local build is not proof CI passes.

## SEO Process

Cadence, memory triggers, and the recurring-task table live in the project skill `.claude/skills/seo-process/SKILL.md` — invoke it for deploy checks, the monthly Search Console review, and quarterly audits. `npm run seo-check` runs inside `pre-deploy`.

## Project Structure

**Top Nav**: About / Writing / Log / Hackathons / Contact (collapsed from 6 items in May 2026; Log added Aug 2026 as the field-log stream — see memory `project_daveliew_site`).

**Full site map**: `ai_docs/architecture/codebase-analysis.md`. _Removed routes (do not re-add)_: `/philosophy`, `/laboratory` — declared in sitemap/nav but never had pages; purged May 2026, now 301-redirect to `/about` and `/hackathons` via `next.config.mjs`.

**Key Data Files** (`/data/`):

- `ai-journey.json` - Tab content for Writing hub (Why/How/What sections)
- `skill-tree-navigation.json` - Desktop hover dropdown data

Most other page copy lives inline in `app/**/<Section>Content.tsx` rather than in JSON. The May 2026 repositioning moved content closer to the components that render it; reach for inline JSX before reintroducing a new JSON data file.

## Architecture Essentials

**Tech Stack**: Next.js 16.2 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration. Bundled docs at `node_modules/next/dist/docs/` — see `AGENTS.md`.

**Fitzgerald Principle (legacy, vestigial)**: The site originally embodied the Fitzgerald Principle (productive tension of opposing ideas — simple surfaces with rich depth). Automated scoring still exists at `npm run philosophy-check` but the site no longer leads with this framing as primary. Treat as a design heuristic for new components, not a positioning anchor.

Component layout + reuse (barrel exports in `/components/common/`) is covered in `AGENTS.md`; full inventory in `ai_docs/architecture/codebase-analysis.md`.

_Strategic/changelog context (May 2026 repositioning, content-maturity map, active priorities) lives in memory `project_daveliew_site`. Theme tokens (`styles/globals.css`) and `utils/animations.ts` helpers are documented in `AGENTS.md`._

## Common Development Patterns

### Content Updates

1. Most page copy lives inline in `app/**/<Section>Content.tsx` — edit there
2. For Writing tab content, edit `data/ai-journey.json` (typed via `types/ai-journey-tabs.ts`)
3. For nav dropdown, edit `data/skill-tree-navigation.json` (typed via `types/skill-tree.ts`)
4. Field-log entries: add `content/log/<slug>.mdx` starting with `export const meta = { title, date, type: "note" | "essay", summary }` (typed via `types/log.ts`; no YAML frontmatter — it renders as text). Index, sitemap, and static params pick it up automatically. Underscore-prefixed files are ignored.

## Detailed Documentation

For deep dives, see `/ai_docs/`:

- `developer_guide/getting-started.md` - Setup, debugging tips
- `developer_guide/design-system.md` - Fitzgerald design system, philosophy workflow
- `architecture/codebase-analysis.md` - Full site map, tech stack, patterns
