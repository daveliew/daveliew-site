#!/usr/bin/env node

/**
 * Sky Census
 * Validates data/sky.json — the declared territory: topics awaiting transfer
 * into log entries — and prints which stars are lit vs unwritten, per era.
 * Invalid data (bad era, unresolvable entry slug, duplicate id) blocks
 * pre-deploy; an unlit sky never does. Empty bands are the to-do list,
 * not an error.
 */

const fs = require("fs");
const path = require("path");

const SKY_FILE = path.join(process.cwd(), "data", "sky.json");
const LOG_DIR = path.join(process.cwd(), "content", "log");

function main() {
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
    if (star.entry !== undefined) {
      if (typeof star.entry !== "string" || !slugs.has(star.entry)) {
        errors.push(
          `${label}: entry ${JSON.stringify(star.entry)} has no matching content/log/*.mdx`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error("❌ Sky census failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  const lit = stars.filter((s) => s.entry);
  console.log(
    `✨ Sky census: ${lit.length}/${stars.length} declared stars lit.`,
  );
  for (const era of sky.eras) {
    const band = stars.filter((s) => s.era === era);
    if (band.length === 0) {
      console.log(`  ${era}: (no stars declared — empty band)`);
      continue;
    }
    const unlit = band.filter((s) => !s.entry).map((s) => s.title);
    const counts = `${band.filter((s) => s.entry).length}/${band.length} lit`;
    console.log(
      `  ${era}: ${counts}${unlit.length ? ` — unwritten: ${unlit.join("; ")}` : ""}`,
    );
  }
  const claimed = new Set(lit.map((s) => s.entry));
  const unclaimed = [...slugs].filter((s) => !claimed.has(s));
  if (unclaimed.length > 0) {
    console.log(`  entries claimed by no star: ${unclaimed.join(", ")}`);
  }
}

main();
