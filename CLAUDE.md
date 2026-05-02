# CLAUDE.md

@AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Stack**: Next.js 16.2 + React 19 + TypeScript + Tailwind + Framer Motion
**Philosophy**: Fitzgerald Principle (opposing forces in productive tension)
**Path Alias**: `@/*` → root directory
**Critical**: Always run `npm run pre-deploy` before committing

## Site Purpose & Positioning

**What This Is**: Personal site for an Advertising Solutions Architect at Google gTech Ads. Substance: measurement, signal integrity, AI governance — the through-line across Meta and now Google.

**Tonal Reference**: nitobuendia.com — factual, restrained, achievement-anchored, no commercial CTAs, employer disclosed openly. When in doubt, ask "would Nito put this on his site?"

**Target Audience**: Solutions Architect peers and people working on measurement, AI adoption, or governance in financial services or brand marketing. Not "explorers" or "learners" — that was an older positioning.

**Key Differentiators**:

- **Measurement & Signal Integrity**: Two years deep at Meta (SKAN 4.0, Conversions API); continuing at Google
- **AI Governance & Human Judgement**: The architecture around what AI decides vs what stays human
- **Context Engineering**: Architecting informational environments where understanding emerges (not just prompts)
- **Multi-Role Fluency**: Rapid context switching (Systems Architect / Product Manager / Implementation)
- **Personal Lab**: Frameworks refined through agentic exploration (Claude Code orchestration, MCP servers)

**Strategic Priorities**: Tonal coherence (no commercial CTAs, no mission framing), employer-safe positioning, factual hackathon and exploration write-ups.

## Career Positioning & Branding

**Bio**: "Solutions Architect — measurement, signal integrity, AI governance. Currently at Google gTech Ads (Finance & Brands). Ex-Meta. Singapore."

**Enterprise Experience**:

- **Google gTech Ads** (Apr 2026 – Present): Advertising Solutions Architect, Finance & Brands verticals
- **Meta** (2022-2024): Technical Solutions Consultant — 2 years deep on SKAN 4.0, Conversions API, signal-loss attribution
- **AWS / SG Code Campus** (earlier): Bedrock reselling + AI tool building

**Public Disclosure**: Google role is publicly disclosed on the site (matches Solutions Architect peers like Nito Buendia). Older "do not disclose Google" guidance is stale.

**What to Avoid**: Outside-business solicitation framing, "client projects" / "case studies" / "consulting" language, voice-agents-for-sales positioning (Agentic Brewery is sterilised — do not reintroduce). Workshop content under `/vibe-coding` is the one place workshop-marketing tone is appropriate, since it's an actual workshop product.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production (runs type-check + lint first)
- `npm run type-check` - TypeScript validation only
- `npm run lint` - ESLint validation only
- `npm run philosophy-check` - Fitzgerald Principle adherence scoring
- `npm run seo-check` - SEO validation (meta tags, sitemap, Schema.org)
- `npm run pre-deploy` - Full validation (TypeScript + ESLint + Philosophy + SEO + Build)
- `npm run quick-check` - Fast validation (TypeScript + ESLint + Philosophy, no build)

## Pre-Deployment Validation

**CRITICAL**: Always run `npm run pre-deploy` before committing. Check for existing errors FIRST, make changes, validate again, fix ESLint quote escaping (`'` → `&apos;`, `"` → `&quot;`), then deploy.

**Scripts**: `pre-deploy.js` (full), `validate-philosophy.js` (Fitzgerald scoring), `quick-check.js` (fast, no build)

**Note**: ESLint errors WILL block Vercel deployments.

## SEO Process

**Memory triggers:**

- "Deploy = SEO check runs automatically"
- "15th of month = Search Console quick review"
- "New page = add to sitemap.ts + seo-tracker.json"

**Automated Checks** (run via `npm run seo-check`):

- Meta tag coverage (title, description per route)
- Sitemap completeness (compare /app routes vs sitemap.ts)
- Schema.org JSON-LD validation
- Image alt attribute presence

**Analytics**: Vercel Analytics (privacy-first, auto-configured)

**Tracking**: `data/seo-tracker.json` - page priorities, target keywords, optimization status

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

**Complete Site Map:**

_Main Routes:_

- `/` - Home (hero, Context Engineering callout, exploration cards, compare-notes CTA)
- `/about` - Bio, Meta→Google through-line, current focus, personal note, skills
- `/contact` - LinkedIn, GitHub, "Compare Notes" card

_Writing (uses `/ai-journey` URL — labelled "Writing" in nav):_

- `/ai-journey` - Hub: notes on context engineering, Claude, agents, human-AI collaboration
- `/ai-journey/why-ai` - S-curve framework (Coatue research)
- `/ai-journey/technical-leadership` - Context Engineering patterns
- `/ai-journey/portfolio` - Projects from hackathons and personal exploration
- `/ai-journey/claude/*` - Claude notes (5 modules):
  - `overview`, `code`, `capabilities`, `mcp`, `2026-predictions`
- `/ai-journey/techniques/*` - Technical paths:
  - `prompt-engineering`, `tool-use`, `llm-handling`, `seo-geo-audit`

_Context Engineering (top-level):_

- `/context-engineering` - Hub with learning ladder
- `/context-engineering/claude-md`, `/context-engineering/skills`, `/context-engineering/hooks`, `/context-engineering/archetypes`, `/context-engineering/seo-geo-audit`

_Agents (reachable via Writing > What in nav, plus direct URL):_

- `/agents` - Hub: notes on agent orchestration, trust, patterns
- `/agents/overview`, `/agents/learning-path`, `/agents/patterns`, `/agents/personal-systems`
- `/agents/trust-engineering`, `/agents/adoption-curve`
- `/agents/mcp-trust-assessment`, `/agents/openclaw-risk-assessment` — substantive AI security/governance writeups
- `/agents/voice` - ElevenLabs hackathon notes (2nd place)

_Other:_

- `/hackathons` - Dated, factual hackathon log (the strongest Nito-tier section)
- `/teaching` - Workshop log (UB×SIM, RBN, Rafflesian AI)
- `/vibe-coding`, `/vibe-coding/fundamentals`, `/vibe-coding/handout` - Workshop product (workshop-marketing tone is OK here only)

_Removed (do not re-add)_: `/philosophy`, `/laboratory` — were declared in sitemap and nav but never had pages; purged May 2026.

**Key Data Files** (`/data/` - never hardcode content):

- `ai-journey.json` - Tab content for Writing hub (Why/How/What sections)
- `experiences.json` - Career history including current Google role at top
- `now.json` - Current focus areas (measurement, AI governance, agentic exploration)
- `personal.json` - Virtuous cycle framing
- `skills.json` - Skill matrix
- `sustainability.json` - Lab details (currently not surfaced on site post-/laboratory removal)
- `agent-experiments.json`, `voice-experiments.json` - Personal lab logs
- `seo-tracker.json` - Page priorities and target keywords
- `skill-tree-navigation.json` - Desktop hover dropdown data

## Content Architecture (Decoupled Surfaces)

**daveliew.com and github.com/daveliew are intentionally separate** — different audiences, different jobs.

### daveliew.com - Personal site for Solutions Architect peers

- **Audience**: Google peers, Solutions Architect community, financial services / brand marketing folks working on measurement and governance
- **Tone**: Factual, restrained, achievement-anchored (Nito-tier)
- **Content**: Bio, current focus, hackathons, writing on context engineering and agents
- **Data Source**: `/data/*.json` files in this repo

### GitHub Profile (github.com/daveliew) - Professional positioning

- **Audience**: Hiring managers, technical peers
- **Content**: Agentic Engineer positioning, validated outcomes, metrics
- **Tone**: Professional, credible, technically competent
- **Data Source**: `daveliew/daveliew` repo `/data/professional-summary.json`

**Why Separate**: Different audience, different job. Forcing sync would dilute both.

## Key Frameworks & Concepts

**Context Engineering** - Refined through personal agentic exploration:

- Architecting informational environments where understanding emerges
- Prompts are subset of broader environmental design
- Focus: What context enables AI to reason effectively?

**Multi-Role Fluency** - Rapid context switching between:

- Systems Architect: High-level design, dependencies, trade-offs
- Product Manager: User needs, feature prioritization, business value
- Implementation: Technical execution, code quality, testing

**Complementarity Principle**:

- AI amplifies human capabilities (moral agency, creativity, embodied wisdom)
- Not replacement narrative, but augmentation
- Memory trigger: "AI handles what scales, humans handle what matters"

**ADHD-AI Optimization**:

- Neurodivergent patterns as collaboration advantage
- Rapid context switching = natural multi-role operation
- Hyperfocus + AI execution = competitive edge

**Fitzgerald Principle Applications**:

- Simple surfaces with rich depth
- Technical rigor with human warmth
- AI augmentation preserving human agency
- Automated scoring: `npm run philosophy-check`

## Architecture Essentials

**Tech Stack**: Next.js 16.2 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration. Bundled docs at `node_modules/next/dist/docs/` — see `AGENTS.md`.

**Fitzgerald Principle (legacy, vestigial)**: The site originally embodied the Fitzgerald Principle (productive tension of opposing ideas — simple surfaces with rich depth). Automated scoring still exists at `npm run philosophy-check` but the site no longer leads with this framing as primary. Treat as a design heuristic for new components, not a positioning anchor.

**Data-Driven Content Pattern** (CRITICAL):

- Content lives in `/data/*.json` files, NOT hardcoded in components
- TypeScript interfaces in `/types/*.ts` enforce structure
- Components consume data via props only
- Never hardcode content directly in components

**Component Organization**:

- `/components/layout/` - Navbar, Footer (4-column comprehensive navigation)
- `/components/common/` - Reusable UI with barrel exports: Card, PageLayout, SubpageLayout, BackLink, SectionHeader, CTAButton
- `/components/skills/` - SkillsMatrix, CaseStudyCard, PhaseProgressBar, RoadmapTimeline
- `/components/ai-journey/` - SubpageLayout for hierarchical navigation, breadcrumbs
- `/components/experience/` - ExperienceSection, CategorySection

## Strategic Context & Content Priorities

**Recent Direction** (May 2026 repositioning pass):

- Repositioned site for Google gTech Ads role; removed Agentic Brewery (including Schema.org `worksFor`)
- Reframed "client projects" as "agentic exploration"
- Collapsed top nav from 6 to 4 items (About / Writing / Hackathons / Contact)
- Reframed AI Journey + Agents hub copy from mission/aspirational to factual notes
- Dropped dead `/philosophy` and `/laboratory` routes
- Tightened deep subpages (voice agents, patterns, portfolio, layout metadata)

**Content Maturity Map**:

- ✅ **Strongest sections (Nito-tier)**: `/hackathons`, `/agents/trust-engineering`, `/agents/mcp-trust-assessment`, `/agents/openclaw-risk-assessment`, `/context-engineering` ladder
- ✅ **Now coherent**: Home, About, Contact, Footer, Writing hub, Agents hub
- ⚠️ **Workshop-product (intentionally separate tone)**: `/vibe-coding`, `/teaching` — workshop-marketing copy is appropriate here
- 📦 **Latent content**: `data/sustainability.json` (no surfacing route), `agent-experiments.json`, `voice-experiments.json`

**Development Priorities** (post-repositioning):

1. Cohesion check: Three-Hat → Multi-Role Fluency terminology sweep across `data/ai-journey.json`
2. SEO/AIEO metadata optimization (ongoing)
3. Hackathon log additions as new events happen
4. Decide whether `data/sustainability.json` should resurface anywhere or be archived

## Theme System

**Color Philosophy** (semantic meaning):

- **Hot Pink (#FF0081)** - `time` - Human agency, energy, urgency
- **Teal (#0CC0DF)** - `knowledge` - AI capabilities, growth, learning
- **Beer Gold (#F8B400)** - `wealth` - Tangible outcomes, achievement, legacy

**Usage**: Theme utilities in `styles/theme.ts` provide type-safe color mappings:

```typescript
import { themeColors, getThemeColor } from "@/styles/theme";
// Use: themeColors.border.time, themeColors.text.knowledge, etc.
```

**Animation Utilities**: `utils/animations.ts` provides framer-motion helpers:

```typescript
import { fadeInUp, containerVariants, itemVariants } from "@/utils/animations";
```

## Common Development Patterns

### Content Updates

1. Edit JSON files in `/data/` (e.g., `skills.json`, `experiences.json`)
2. TypeScript interfaces in `/types/` enforce correct structure
3. Components automatically reflect changes

### ESLint Quote Escaping (Common Deployment Blocker)

**These errors WILL block Vercel deployments:**

- Replace `'` with `&apos;`
- Replace `"` with `&quot;`
- Always run `npm run lint` before committing

### Adding New Pages

1. Create page in `/app/[route]/page.tsx`
2. Add data to appropriate JSON file in `/data/`
3. Update Navbar links if needed in `/components/layout/Navbar.tsx`

## Key Dependencies

- **next** (16.2.1) - React framework with App Router and Turbopack
- **react** (^19.2.0) - React 19 with improved hydration and Actions
- **typescript** (^5) - Strict type checking
- **tailwindcss** (^3.4.18) - Utility-first CSS
- **framer-motion** (^11.18.2) - Animations
- **recharts** (^2.15.4) - Data visualizations

**Build Config:**

- Path alias `@/*` maps to root (tsconfig.json)
- Strict TypeScript with `noEmit` flag
- Standalone output mode (next.config.mjs)

## Dave's Voice & Terminology

**Voice Guidelines** (Nito-tier — factual, restrained, achievement-anchored):

- **Concrete over evocative**: dated, scoped, named achievements over aspirational mood pieces
- **Notes, not pitches**: "Notes on X" / "Happy to compare notes" — not "let's talk" / "ready to build"
- **Proper sentence case**: Web content, not WhatsApp casual
- **Research-backed**: Cite sources for claims (e.g., "SWE-bench scores", "Coatue S-curve")
- **Compare-notes invitations only**: No commercial CTAs anywhere on the main site (workshop pages excepted)

**Terminology Preferences**:

- ✅ "Context Engineering" (not "Prompt Engineering") — broader, more accurate
- ✅ "Multi-Role Fluency" (not "wearing multiple hats" or "Three-Hat Framework") — rapid context switching
- ✅ "Agentic exploration" / "Personal lab" (not "client projects" / "case studies" / "living laboratory")
- ✅ "Compare notes" (not "let's talk" / "get in touch" / "book a call")
- ✅ "Solutions Architect" (not "AI Solutions Architect" or "Voice Agent Specialist")
- ✅ "Measurement, signal integrity, AI governance" — the substance vocabulary

**Avoid**:

- Mission framing: "Pioneering", "Next generation", "Building the frameworks our children will need"
- Commercial framing: "Battle-tested solutions", "Build your business", "Give your business a voice", "Ready to..."
- Outside-business framing: anything that implies active solicitation of client / consulting work
- Reintroducing: Agentic Brewery, "Voice Agent Specialist" bio, "3 active client projects"

## Detailed Documentation

For deep dives, see `/ai_docs/`:

- `developer_guide/getting-started.md` - Setup, debugging tips
- `developer_guide/design-system.md` - Fitzgerald design system, philosophy workflow
- `architecture/codebase-analysis.md` - Full site map, tech stack, patterns

---

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
