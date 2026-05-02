<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# Project Rules (all agents)

## Critical Patterns

- **JSON content where it exists**: `data/ai-journey.json` (Writing tabs) and `data/skill-tree-navigation.json` (nav dropdown) are consumed via typed imports. Most page copy now lives inline in `app/**/<Section>Content.tsx` files — that's the current default.
- **No `/src` directory**: All directories (`/app`, `/components`, `/data`, `/types`, `/styles`, `/utils`) are at root level.
- **Path alias**: `@/*` maps to root directory.

## Before Committing

Run `npm run pre-deploy` (TypeScript + ESLint + Philosophy + SEO + Build). ESLint errors block Vercel deployments.

**Common blocker**: Unescaped quotes in JSX — use `&apos;` for `'` and `&quot;` for `"`.

## Component Reuse

Check `/components/common/` before creating new components: Card, PageLayout, SubpageLayout, BackLink, SectionHeader, CTAButton.

## Theme

CSS custom properties live in `styles/globals.css`. Use them via Tailwind arbitrary values rather than hex literals.

- `--accent-primary` / `--accent-secondary` — studio-lime, default UI accents (links, buttons)
- `--time-color` (hot pink), `--knowledge-color` (teal), `--wealth-color` (beer gold) — three-pillar semantics for sectional accents
- `--background-primary` / `--background-secondary`, `--text-primary` / `--text-secondary` / `--text-muted` — base surfaces

Example: `text-[var(--time-color)]`, `border-[var(--accent-primary)]`.

## Animations

Use helpers from `utils/animations.ts`: `fadeInUp`, `pageHeaderAnimation`, `sectionAnimation`, `footerAnimation`, `tabContentVariants`.
