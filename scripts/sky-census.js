#!/usr/bin/env node

/**
 * Sky Census
 * Validates data/sky.json — the declared territory: written entries (`entry`),
 * shelved surfaces (`url`), and unwritten topics (neither) — and prints the
 * lit / shelved / unwritten count per era band. Invalid data (bad era,
 * unresolvable entry slug or url, duplicate id, entry+url on one star) blocks
 * pre-deploy; an unlit sky never does. Empty bands are the to-do list,
 * not an error.
 */

const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const SKY_FILE = path.join(process.cwd(), "data", "sky.json");
const LOG_DIR = path.join(process.cwd(), "content", "log");

function appRoutes() {
  const routes = new Set();
  const walk = (segments) => {
    const abs = path.join(process.cwd(), "app", ...segments);
    for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
      if (entry.isDirectory()) walk([...segments, entry.name]);
      else if (/^page\.(tsx|mdx?)$/.test(entry.name)) {
        routes.add("/" + segments.join("/"));
      }
    }
  };
  walk([]);
  return routes;
}

async function redirectSources() {
  const mod = await import(
    pathToFileURL(path.join(process.cwd(), "next.config.mjs")).href
  );
  const redirects = await mod.default.redirects();
  const exact = new Set();
  const prefixes = [];
  for (const r of redirects) {
    if (r.source.includes(":")) {
      prefixes.push(r.source.slice(0, r.source.indexOf("/:")));
    } else {
      exact.add(r.source.replace(/\/$/, "") || "/");
    }
  }
  return { exact, prefixes };
}

async function main() {
  let sky;
  try {
    sky = JSON.parse(fs.readFileSync(SKY_FILE, "utf8"));
  } catch (e) {
    console.error(
      `❌ Sky census failed: cannot read data/sky.json (${e.message})`,
    );
    process.exit(1);
  }

  const errors = [];

  if (!Array.isArray(sky.eras) || sky.eras.length === 0) {
    errors.push("eras must be a non-empty array");
  }
  const eras = new Set(sky.eras ?? []);
  if (eras.size !== (sky.eras ?? []).length) {
    errors.push("eras contains duplicates");
  }

  const slugs = new Set(
    fs
      .readdirSync(LOG_DIR)
      .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
      .map((f) => f.replace(/\.mdx$/, "")),
  );
  const routes = appRoutes();
  const redirects = await redirectSources();
  const urlResolves = (url) =>
    routes.has(url) ||
    redirects.exact.has(url) ||
    redirects.prefixes.some((p) => url === p || url.startsWith(p + "/"));

  const ids = new Set();
  const stars = Array.isArray(sky.stars) ? sky.stars : [];
  if (!Array.isArray(sky.stars)) {
    errors.push("stars must be an array");
  }

  for (const star of stars) {
    const label = star.id ?? star.title ?? "<unnamed star>";
    if (typeof star.id !== "string" || !star.id.trim()) {
      errors.push(`${label}: id is required`);
    } else if (ids.has(star.id)) {
      errors.push(`${star.id}: duplicate id`);
    } else {
      ids.add(star.id);
    }
    if (typeof star.title !== "string" || !star.title.trim()) {
      errors.push(`${label}: title is required`);
    }
    if (!eras.has(star.era)) {
      errors.push(
        `${label}: era must be one of [${[...eras].join(", ")}], got ${JSON.stringify(star.era)}`,
      );
    }
    if (
      star.lens !== undefined &&
      (typeof star.lens !== "string" || !star.lens.trim())
    ) {
      errors.push(`${label}: lens, when present, must be a non-empty string`);
    }
    if (star.entry !== undefined && star.url !== undefined) {
      errors.push(
        `${label}: a star is written OR shelved, not both (entry + url)`,
      );
    }
    if (star.entry !== undefined) {
      if (typeof star.entry !== "string" || !slugs.has(star.entry)) {
        errors.push(
          `${label}: entry ${JSON.stringify(star.entry)} has no matching content/log/*.mdx`,
        );
      }
    }
    if (star.url !== undefined) {
      if (
        typeof star.url !== "string" ||
        !star.url.startsWith("/") ||
        !urlResolves(star.url)
      ) {
        errors.push(
          `${label}: url ${JSON.stringify(star.url)} does not resolve to a route or declared redirect`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error("❌ Sky census failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  const state = (s) => (s.entry ? "lit" : s.url ? "shelved" : "unwritten");
  const tally = (list) => {
    const t = { lit: 0, shelved: 0, unwritten: 0 };
    for (const s of list) t[state(s)] += 1;
    return t;
  };

  const total = tally(stars);
  console.log(
    `✨ Sky census: ${total.lit} lit · ${total.shelved} shelved · ${total.unwritten} unwritten (${stars.length} declared stars).`,
  );
  for (const era of sky.eras) {
    const band = stars.filter((s) => s.era === era);
    if (band.length === 0) {
      console.log(`  ${era}: (no stars declared — empty band)`);
      continue;
    }
    const t = tally(band);
    const unwritten = band
      .filter((s) => state(s) === "unwritten")
      .map((s) => s.title);
    console.log(
      `  ${era}: ${t.lit} lit · ${t.shelved} shelved · ${t.unwritten} unwritten${unwritten.length ? ` — unwritten: ${unwritten.join("; ")}` : ""}`,
    );
  }
  const claimed = new Set(stars.filter((s) => s.entry).map((s) => s.entry));
  const unclaimed = [...slugs].filter((s) => !claimed.has(s));
  if (unclaimed.length > 0) {
    console.log(`  entries claimed by no star: ${unclaimed.join(", ")}`);
  }
}

main().catch((e) => {
  console.error(`❌ Sky census errored: ${e.message}`);
  process.exit(1);
});
