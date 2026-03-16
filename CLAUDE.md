# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

**Stack**: Next.js 16 + React 19 + TypeScript + Tailwind + Framer Motion
**Philosophy**: Fitzgerald Principle (opposing forces in productive tension)
**Path Alias**: `@/*` → root directory
**Critical**: Always run `npm run pre-deploy` before committing

## Site Purpose & Positioning

**What This Is**: Portfolio exploring human-AI collaboration through the Fitzgerald Principle - "Most people use AI to do more. I'm exploring how to do less—systematically."

**Core Thesis**: Time compounds faster than money. AI as complementarity (amplifies human capabilities) not replacement.

**Target Audiences**:

- **Beginners**: Philosophy → Context Engineering → LLM fundamentals → Claude Mastery
- **Technical Professionals**: Fast-track through Technical Leadership → Claude Mastery → Advanced Systems

**Key Differentiators**:

- **Context Engineering**: Architecting informational environments where understanding emerges (not just prompts)
- **Multi-Role Fluency**: Rapid context switching (Systems Architect / Product Manager / Implementation)
- **ADHD-Optimized Workflows**: Neurodivergent patterns as AI-collaboration advantage
- **Sustainability Convergence**: AI + Climate + Robotics intersection ($50T+ opportunity)
- **Living Laboratory**: Every framework validated across 3 active client projects

**Strategic Priorities**: Portfolio activation (case studies exist but not visible), SEO/AIEO optimization, 2026 predictions content

## Career Positioning & Branding

**Current Bio**: "AI Solutions Architect & Voice Agent Specialist—ex-Meta"

**Enterprise Experience** (2022-2026):

- Meta: 2 years Technical Solutions Consultant
- Google: 4-month Advertising SA contract (enterprise clients)
- AWS: SG Code Campus partnership (Bedrock reselling + AI tool building)

**Branding Strategy**:

- **Now**: Keep current bio, mention Meta+Google conversationally when relevant
- **After Google**: If work substantial, consider "ex-Meta, ex-Google"
- **AWS angle**: Lead with "building AI tools" not "AWS partner"

**What's rare**: Meta + Google ads insider + can build. Business bridging tech/non-tech.

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

**Complete Site Map:**

_Main Routes:_

- `/` - Home (hero, virtuous cycle, Context Engineering, projects)
- `/philosophy` - Fitzgerald Principle deep dive (9 sections)
- `/about` - Professional journey, achievements, value proposition
- `/laboratory` - Innovation experiments (AI/Sustainability/Robotics convergence)
- `/contact` - Links to LinkedIn, GitHub, Agentic Brewery (voice agent solutions)

_AI Journey Structure:_

- `/ai-journey` - Hub with tab navigation
- `/ai-journey/overview` - Learning philosophy & path options
- `/ai-journey/why-ai` - S-curve framework (Coatue research)
- `/ai-journey/context-engineering` - Context Engineering framework
- `/ai-journey/technical-leadership` - 3-client validation learnings
- `/ai-journey/portfolio` - Case studies (data exists, awaiting activation)
- `/ai-journey/claude/*` - Claude Mastery (8 modules):
  - `overview`, `code`, `cookbook`, `console`, `vision`, `computer-use`, `mcp`, `2026-predictions`
- `/ai-journey/techniques/*` - Technical paths:
  - `prompt-engineering`, `tool-use`, `llm-handling`, `rag`, `agent-rag`

_Agents Section:_

- `/agents` - Agent development hub
- `/agents/overview`, `/agents/learning-path`, `/agents/patterns`
- `/agents/trust-engineering`, `/agents/personal-systems`

**Key Data Files** (`/data/` - never hardcode content):

- `ai-journey.json` - S-curve phases, foundation skills, roadmap, **case studies** (hidden gems)
- `ai-journey-portfolio.json` - Portfolio structure (currently "coming soon")
- `ai-journey-learning-paths.json` - Structured learning curriculum
- `sustainability.json` - Lab details, experiments, investment thesis
- `skills.json`, `experiences.json`, `personal.json`, `now.json` - Professional background

## Content Architecture (Decoupled Surfaces)

**This portfolio (daveliew.com) and GitHub profile (github.com/daveliew) are intentionally separate:**

### Portfolio (daveliew.com) - Personal Philosophy & Journey

- **Narrative**: "Time compounds faster than money" + virtuous cycle
- **Audience**: Explorers, learners, potential collaborators
- **Content**: AI journey, learning paths, philosophical exploration
- **Tone**: Personal, exploratory, educational
- **Data Source**: `/data/*.json` files in this repo

### GitHub Profile (github.com/daveliew) - Professional Positioning

- **Narrative**: Context Engineering + Multi-Role Fluency
- **Audience**: Hiring managers, technical peers, consulting prospects
- **Content**: Agentic Engineer positioning, validated outcomes, metrics
- **Tone**: Professional, credible, technically competent
- **Data Source**: `daveliew/daveliew` repo `/data/professional-summary.json`

**Why Separate**: Each surface serves a different purpose. Forcing sync would dilute both messages.

**If Shared Data Needed**: Future consideration - create `shared-data.json` with only contact/project lists while keeping hero/narrative content separate.

## Key Frameworks & Concepts

**Context Engineering** - Validated across 3 client projects:

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

**Core Philosophy**: Portfolio embodying the Fitzgerald Principle - holding two opposed ideas simultaneously while retaining ability to function. Built around three trends:

1. **AI Revolution** - Exponential reasoning/automation capabilities
2. **Sustainability Imperatives** - Climate urgency driving green tech
3. **Robotic Systems** - Physical automation reaching cost parity

**Tech Stack**: Next.js 16 with React 19, leveraging App Router, Turbopack dev builds, and React 19's improved hydration.

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

**Recent Direction** (Last 5 commits):

- URL flattening for SEO/AIEO optimization (improved discoverability)
- Footer redesign: 4-column comprehensive navigation
- 2026 predictions content (research-backed AI trajectory)
- Claude Mastery focus (8 modules, 2025 breakthroughs)
- Portfolio section prep (data exists, awaiting activation)

**Content Maturity Map** (guides development focus):

- ✅ **Most Complete**: Claude Mastery (8 modules), Philosophy (deeply articulated)
- ✅ **Well Developed**: About, Laboratory, AI Journey structure, Home
- 🚀 **High-Impact Growth**: Portfolio activation (case studies in JSON, not visible on site)
- 📊 **Opportunities**: Testimonials from 3 client projects, Context Engineering metrics, visual representations

**Development Priorities**:

1. Portfolio page activation (highest ROI: credibility + SEO)
2. SEO/AIEO metadata optimization (ongoing)
3. Case study detail pages (data ready, needs UI)
4. Testimonials/social proof integration
5. Context Engineering metrics visualization

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

- **next** (16.0.10) - React framework with App Router and Turbopack
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

**Voice Guidelines**:

- **Humble explorer**: "Still figuring it out", "happy to share what I've learned"
- **Direct but warm**: Clear insights without aggressive claims or sales language
- **Lead with contrarian insights**: "Most people use AI to do more. I use it to do less."
- **Gentle invitations**: "Happy to chat" not "Book a call now!"
- **Proper sentence case**: Web content, not WhatsApp casual
- **Research-backed**: Cite sources for claims (e.g., "SWE-bench scores", "Coatue S-curve")
- **Virtuous cycle**: Build time → Capture knowledge → Create value → Share freely

**Terminology Preferences** (use these framings):

- ✅ "Context Engineering" (not "Prompt Engineering") - broader, more accurate
- ✅ "Complementarity" (not "replacement") - AI-human relationship
- ✅ "ADHD-optimized workflows" (not "despite ADHD") - advantage framing
- ✅ "Multi-Role Fluency" (not "wearing multiple hats") - rapid context switching methodology
- ✅ "Fitzgerald Principle applications" - when explaining design decisions
- ✅ "Living laboratory" (not "case studies") - ongoing validation vs past work

**Avoid**: Corporate speak, aggressive claims ("10x your productivity!"), achievement focus, overly casual tone, replacement narratives, limitation framing of neurodivergence

## Detailed Documentation

For deep dives, see `/ai_docs/`:

- `developer_guide/getting-started.md` - Setup, debugging tips
- `developer_guide/design-system.md` - Fitzgerald design system, philosophy workflow
- `architecture/codebase-analysis.md` - Full site map, tech stack, patterns

---

**Philosophy Integration Note**: The codebase includes automated scoring for Fitzgerald Principle adherence. Components should demonstrate productive tensions (simple surfaces with rich depth, technical rigor with human warmth, AI augmentation preserving human agency).

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
