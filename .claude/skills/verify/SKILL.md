---
name: verify
description: Runtime verification recipe for daveliew-site — gate, build, serve, drive the routes, fossil greps. Use after changes to routes, redirects, log entries, theme, or shared components.
---

# Verify daveliew-site

## Gate + build + serve

```bash
npm run pre-deploy    # the full gate: type-check, lint, philosophy, seo, build — all explicit
# or bare build — must run UNSANDBOXED (next/font fetches Google Fonts):
npm_config_ignore_scripts=false npm run build
(npx next start -p 3010 > "$TMPDIR/dl/verify.log" 2>&1 &); sleep 7
```

Gotchas:

- `~/.npmrc` sets `ignore-scripts=true`, so a plain `npm run build` silently
  SKIPS the `prebuild` gate (type-check + lint) that Vercel WILL run. Either
  use `pre-deploy` or set the env var — a green plain build is not proof CI passes.
- `mkdir -p "$TMPDIR/dl"` first; `$TMPDIR` differs between sandboxed and
  unsandboxed shells — make the dir and start the server in the SAME mode.
- Kill servers when done: `pkill -f "next start"` (needs user approval — ask,
  or leave the port number in the report).

Route-table invariant: `ƒ` (Dynamic) appears ONLY for `/opengraph-image` and
`/twitter-image`. Every other route is ○ (Static) or ● (SSG). Any new `ƒ` is
a finding. Baseline 2026-08-10: 46/46 static pages, 3 log slugs.

## Drive

Live surfaces (expect 200): `/ /log /log/<slug> /about`

Frozen curriculum spot-checks (expect 200, content unchanged by design):
`/ai-journey /agents /context-engineering /vibe-coding /teaching /contact`

Redirects (expect 308): `/ai-journey/overview → /ai-journey`,
`/ai-journey/how-to-learn → /ai-journey` — full table in `next.config.js`.

Must 404: unknown `/log/<slug>` (`dynamicParams = false`).

## Fossil greps (each encodes a real past bug — keep green)

1. **No undefined CSS variables** (the 113c762 MDX bug class — `var()` typos
   silently render as no color):

   ```bash
   comm -13 <(grep -ohE '\-\-[a-z0-9-]+' styles/globals.css tailwind.config.js | sort -u) \
            <(grep -rohE 'var\(--[a-z0-9-]+' app components mdx-components.tsx | sed 's/var(//' | sort -u)
   ```

   Must print nothing.

2. **Dark-only stays structural** (5a481bb — light mode must be impossible,
   not just absent): `app/layout.tsx` html className contains `dark`;
   `styles/globals.css` has `color-scheme: dark`; `tailwind.config.js` has
   `darkMode: "class"`. Served `/` HTML: the `<html` tag carries `dark`.

3. **One-accent chrome** (c3126c4 — nav/footer are lime only):
   `grep -rE "pink|purple|teal|gold|blue-[0-9]" components/layout/` → zero
   hits. Scope is layout chrome only; frozen curriculum pages are exempt.

## Browser layer (Playwright MCP)

Playwright is the right browser here (logged-out deterministic site), but it
is NOT registered — this repo has no `.mcp.json`. Re-add on demand, then
restart the session:

```bash
claude mcp add-json playwright '{"command":"npx","args":["@playwright/mcp@latest"]}' -s project
```

Minimum pass: `/`, one `/log/<slug>`, `/about` at desktop and 375px —
`document.body.scrollWidth <= 375`, headings render in Work Sans (Jura only
in the wordmark), no invisible text (the dark-only + var() bugs both
presented as unreadable text).

## Current open findings (delete a line when fixed)

- "evergreen pages" line in `/log/what-this-log-is` predates the log-only
  reality.
