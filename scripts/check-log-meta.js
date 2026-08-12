#!/usr/bin/env node

/**
 * Log Meta Validation
 * Validates the `export const meta = {...}` block of every content/log/*.mdx:
 * required fields, date shape, type enum, and that every `refs` slug resolves
 * to a real entry. Runs inside pre-deploy so a bad ref fails before the build.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const LOG_DIR = path.join(process.cwd(), "content", "log");
const TYPES = new Set(["note", "essay"]);

function readMeta(file) {
  const src = fs.readFileSync(path.join(LOG_DIR, file), "utf8");
  const match = src.match(/export const meta = ({[\s\S]*?});/);
  if (!match) return null;
  // Metas are plain object literals by convention (types/log.ts); evaluate in
  // an empty context so anything fancier fails loudly here, not in the build.
  return vm.runInNewContext(`(${match[1]})`);
}

function main() {
  const files = fs
    .readdirSync(LOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));
  const slugs = new Set(files.map((f) => f.replace(/\.mdx$/, "")));
  const errors = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    let meta;
    try {
      meta = readMeta(file);
    } catch (e) {
      errors.push(`${file}: meta is not a plain object literal (${e.message})`);
      continue;
    }
    if (!meta) {
      errors.push(`${file}: no \`export const meta = {...};\` found`);
      continue;
    }
    if (typeof meta.title !== "string" || !meta.title.trim()) {
      errors.push(`${file}: title is required`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date ?? "")) {
      errors.push(
        `${file}: date must be YYYY-MM-DD, got ${JSON.stringify(meta.date)}`,
      );
    }
    if (!TYPES.has(meta.type)) {
      errors.push(
        `${file}: type must be "note" or "essay", got ${JSON.stringify(meta.type)}`,
      );
    }
    if (
      meta.lens !== undefined &&
      (typeof meta.lens !== "string" || !meta.lens.trim())
    ) {
      errors.push(`${file}: lens, when present, must be a non-empty string`);
    }
    if (meta.refs !== undefined) {
      if (!Array.isArray(meta.refs)) {
        errors.push(`${file}: refs, when present, must be an array of slugs`);
      } else {
        for (const ref of meta.refs) {
          if (typeof ref !== "string") {
            errors.push(
              `${file}: refs entries must be strings, got ${JSON.stringify(ref)}`,
            );
          } else if (ref === slug) {
            errors.push(`${file}: refs must not include the entry itself`);
          } else if (!slugs.has(ref)) {
            errors.push(
              `${file}: refs slug "${ref}" has no matching content/log/${ref}.mdx`,
            );
          }
        }
        if (new Set(meta.refs).size !== meta.refs.length) {
          errors.push(`${file}: refs contains duplicates`);
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error("❌ Log meta validation failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log(`✅ Log meta valid: ${files.length} entries, all refs resolve.`);
}

main();
