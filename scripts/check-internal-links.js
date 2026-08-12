#!/usr/bin/env node

/**
 * Internal Link Resolution
 * Every internal href on the LIVE surfaces (log content, homepage, about,
 * shared layout/log/common components) must resolve to a real app route,
 * a log entry, or a declared redirect in next.config.mjs. Frozen surfaces
 * (ai-journey, context-engineering, vibe-coding, teaching, hackathons,
 * contact) are deliberately not scanned — per CLAUDE.md they are not audited.
 */

const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = process.cwd();

// Live-surface scan roots (files or directories).
const SCAN_PATHS = [
  "content/log",
  "app/page.tsx",
  "app/layout.tsx",
  "app/about",
  "app/log",
  "components/log",
  "components/layout",
  "components/common",
];

function collectFiles(p) {
  const abs = path.join(ROOT, p);
  if (!fs.existsSync(abs)) return [];
  if (fs.statSync(abs).isFile()) return [p];
  const out = [];
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    const rel = path.join(p, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(rel));
    else if (/\.(tsx?|mdx?)$/.test(entry.name)) out.push(rel);
  }
  return out;
}

function appRoutes() {
  const routes = new Set();
  const walk = (dir, segments) => {
    const abs = path.join(ROOT, "app", ...segments);
    for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(dir, [...segments, entry.name]);
      else if (/^page\.(tsx|mdx?)$/.test(entry.name)) {
        routes.add("/" + segments.join("/"));
      }
    }
  };
  walk("app", []);
  return routes;
}

function logSlugs() {
  const dir = path.join(ROOT, "content", "log");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function extractLinks(src) {
  const links = new Set();
  // href="..." / href='...' / href={"..."} / href={`...`} without ${}
  for (const re of [
    /href=["']([^"']+)["']/g,
    /href=\{["'`]([^"'`$]+)["'`]\}/g,
    /\]\((\/[^)#?\s]*)/g, // markdown links in MDX
  ]) {
    let m;
    while ((m = re.exec(src)) !== null) links.add(m[1]);
  }
  return [...links].filter(
    (href) => href.startsWith("/") && !href.startsWith("//"),
  );
}

function normalize(href) {
  const bare = href.split(/[#?]/)[0];
  if (bare === "/") return "/";
  return bare.replace(/\/$/, "");
}

async function redirectSources() {
  const mod = await import(
    pathToFileURL(path.join(ROOT, "next.config.mjs")).href
  );
  const redirects = await mod.default.redirects();
  const exact = new Set();
  const prefixes = [];
  for (const r of redirects) {
    if (r.source.includes(":")) {
      prefixes.push(r.source.slice(0, r.source.indexOf("/:")));
    } else {
      exact.add(normalize(r.source));
    }
  }
  return { exact, prefixes };
}

async function main() {
  const routes = appRoutes();
  const slugs = new Set(logSlugs());
  const redirects = await redirectSources();

  const resolves = (link) => {
    if (routes.has(link)) return true;
    const logMatch = link.match(/^\/log\/([^/]+)$/);
    if (logMatch && slugs.has(logMatch[1])) return true;
    if (redirects.exact.has(link)) return true;
    return redirects.prefixes.some(
      (p) => link === p || link.startsWith(p + "/"),
    );
  };

  const files = SCAN_PATHS.flatMap(collectFiles);
  const errors = [];
  let checked = 0;

  for (const file of files) {
    const src = fs.readFileSync(path.join(ROOT, file), "utf8");
    for (const raw of extractLinks(src)) {
      const link = normalize(raw);
      checked += 1;
      if (!resolves(link))
        errors.push(
          `${file}: "${raw}" does not resolve to any route, log entry, or redirect`,
        );
    }
  }

  if (errors.length > 0) {
    console.error("❌ Internal link resolution failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log(
    `✅ Internal links resolve: ${checked} links across ${files.length} live-surface files.`,
  );
}

main().catch((e) => {
  console.error(`❌ Internal link check errored: ${e.message}`);
  process.exit(1);
});
