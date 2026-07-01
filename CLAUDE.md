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

**What this is**: Personal site for an Advertising Solutions Architect at Google gTech Ads (Finance & Brands). Substance: **measurement, signal integrity, AI governance** — the through-line across Meta and now Google. Audience: Solutions Architect peers and people working on measurement, AI adoption, or governance in financial services / brand marketing (not "explorers" or "learners" — that was older positioning).

**Bio**: "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads (Finance & Brands). Ex-Meta. Singapore."

**Experience**: Google gTech Ads (Apr 2026–present, Advertising SA) · Meta (2022–2024, Technical Solutions Consultant — SKAN 4.0, Conversions API, signal-loss attribution) · AWS / SG Code Campus (earlier — Bedrock, AI tooling).

**Employer disclosure**: Google role **is** publicly disclosed on the site (matches SA peers like Nito Buendia). The old "do not disclose Google" guidance is **stale — ignore it.**

**Tone — Nito-tier** (ref: nitobuendia.com; "would Nito put this on his site?"):

- **Concrete over evocative** — dated, scoped, named achievements; no aspirational mood pieces
- **Notes, not pitches** — "Notes on X" / "Happy to compare notes", never "let's talk" / "ready to build"
- **Proper sentence case**, research-backed (cite sources: SWE-bench, Coatue S-curve)
- **No commercial CTAs anywhere** on the main site (workshop pages excepted)

**Terminology** — ✅ use: "Context Engineering" (not Prompt Engineering) · "Multi-Role Fluency" (not Three-Hat / "multiple hats") · "Agentic exploration" / "Personal lab" (not "client projects" / "case studies") · "Compare notes" (not "let's talk" / "book a call") · "Solutions Architect" (not "AI SA" / "Voice Agent Specialist").

**Avoid**: mission framing ("pioneering", "next generation", "frameworks our children will need"); commercial framing ("battle-tested", "build your business", "give your business a voice", "ready to…"); any outside-business solicitation; reintroducing Agentic Brewery (sterilised) or the "Voice Agent Specialist" bio / "3 active client projects". Workshop-marketing tone is OK **only** under `/vibe-coding` and `/teaching` (actual workshop products).

**Decoupled surfaces**: daveliew.com and github.com/daveliew are intentionally separate — the site is Nito-tier notes for SA peers (data from `/data/*.json`); the GitHub profile is professional hiring positioning (data from the `daveliew/daveliew` repo). Don't force-sync them; it dilutes both.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production (runs type-check + lint first)
- `npm run type-check` - TypeScript validation only
- `npm run lint` - ESLint validation only
- `npm run philosophy-check` - Fitzgerald Principle adherence scoring
- `npm run seo-check` - SEO validation (meta tags, sitemap, Schema.org)
- `npm run pre-deploy` - Full validation (TypeScript + ESLint + Philosophy + SEO + Build)
- `npm run quick-check` - Fast validation (TypeScript + ESLint + Philosophy, no build)

## SEO Process

**Memory triggers:**

- "Deploy = SEO check runs automatically"
- "15th of month = Search Console quick review"
- "New page = add to sitemap.ts"

**Automated Checks** (run via `npm run seo-check`):

- Meta tag coverage (title, description per route)
- Sitemap completeness (compare /app routes vs sitemap.ts)
- Schema.org JSON-LD validation
- Image alt attribute presence

**Analytics**: Vercel Analytics (privacy-first, auto-configured)

**Recurring Tasks**:
| Task | Frequency | Trigger |
|------|-----------|---------|
| SEO validation | Every deploy | `npm run pre-deploy` |
| Search Console review | Monthly | Calendar: 15th |
| Full SEO audit | Quarterly | Jan/Apr/Jul/Oct |

## Project Structure

**No `/src` directory** - All files at root level:

```
/app              - Next.js App Router pages & layouts
/components       - React components (layout, common, skills, ai-journey, experience)
/data             - JSON content files (never hardcode content in components)
/types            - TypeScript interfaces for data structures
/styles           - Global CSS and theme utilities
/utils            - Helper functions (animations.ts for framer-motion)
/scripts          - Validation and build scripts
/public           - Static assets
/ai_docs          - Comprehensive documentation
```

**Top Nav**: About / Writing / Hackathons / Contact (collapsed from 6 items in May 2026 to mirror Nito's three-bucket structure).

**Full site map**: `ai_docs/architecture/codebase-analysis.md`. _Removed routes (do not re-add)_: `/philosophy`, `/laboratory` — declared in sitemap/nav but never had pages; purged May 2026.

**Key Data Files** (`/data/`):

- `ai-journey.json` - Tab content for Writing hub (Why/How/What sections)
- `skill-tree-navigation.json` - Desktop hover dropdown data

Most other page copy lives inline in `app/**/<Section>Content.tsx` rather than in JSON. The May 2026 repositioning moved content closer to the components that render it; reach for inline JSX before reintroducing a new JSON data file.

## Architecture Essentials

**Tech Stack**: Next.js 16.2 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration. Bundled docs at `node_modules/next/dist/docs/` — see `AGENTS.md`.

**Fitzgerald Principle (legacy, vestigial)**: The site originally embodied the Fitzgerald Principle (productive tension of opposing ideas — simple surfaces with rich depth). Automated scoring still exists at `npm run philosophy-check` but the site no longer leads with this framing as primary. Treat as a design heuristic for new components, not a positioning anchor.

**Data-Driven Content Pattern** (CRITICAL):

- Content lives in `/data/*.json` files, NOT hardcoded in components
- TypeScript interfaces in `/types/*.ts` enforce structure
- Components consume data via props only
- Never hardcode content directly in components

Component layout + reuse (barrel exports in `/components/common/`) is covered in `AGENTS.md`; full inventory in `ai_docs/architecture/codebase-analysis.md`.

_Strategic/changelog context (May 2026 repositioning, content-maturity map, active priorities) lives in memory `project_daveliew_site`. Theme tokens (`styles/globals.css`) and `utils/animations.ts` helpers are documented in `AGENTS.md`._

## Common Development Patterns

### Content Updates

1. Most page copy lives inline in `app/**/<Section>Content.tsx` — edit there
2. For Writing tab content, edit `data/ai-journey.json` (typed via `types/ai-journey-tabs.ts`)
3. For nav dropdown, edit `data/skill-tree-navigation.json` (typed via `types/skill-tree.ts`)

### Adding New Pages

1. Create page in `/app/[route]/page.tsx`
2. Add data to appropriate JSON file in `/data/`
3. Update Navbar links if needed in `/components/layout/Navbar.tsx`

## Key Dependencies

- **next** (^16.2.1) - App Router + Turbopack
- **react** (^19.2.1) - improved hydration and Actions
- **typescript** (^5) - strict, `noEmit`
- **tailwindcss** (^3.4.18) - utility-first CSS
- **framer-motion** (^11.18.2) - animations

**Build Config** (`next.config.mjs`): MDX via `@next/mdx` (`pageExtensions: ts/tsx/md/mdx`), `optimizePackageImports: ['framer-motion']`, plus `/ai-journey/*` redirects. Path alias `@/*` → root (tsconfig.json).

## Detailed Documentation

For deep dives, see `/ai_docs/`:

- `developer_guide/getting-started.md` - Setup, debugging tips
- `developer_guide/design-system.md` - Fitzgerald design system, philosophy workflow
- `architecture/codebase-analysis.md` - Full site map, tech stack, patterns
