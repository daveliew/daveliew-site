#!/usr/bin/env node

/**
 * SEO Validation Script
 * Validates meta tags, sitemap coverage, internal links, and Schema.org data
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "../app");
const SITEMAP_PATH = path.join(__dirname, "../app/sitemap.ts");
const DATA_DIR = path.join(__dirname, "../data");

// Frozen surfaces (ai_docs/2026-08-site-purpose-reset.md): live by URL but
// intentionally absent from nav and sitemap. Not a coverage gap.
const FROZEN_PREFIXES = [
  "/agents",
  "/ai-journey",
  "/context-engineering",
  "/vibe-coding",
  "/teaching",
  "/hackathons",
  "/contact",
];

// Results tracking
const results = {
  metaTags: { passed: [], warnings: [], errors: [] },
  sitemap: { passed: [], warnings: [], errors: [] },
  schema: { passed: [], warnings: [], errors: [] },
  links: { passed: [], warnings: [], errors: [] },
};

/**
 * Find all page.tsx files in the app directory
 */
function findAllPages(dir, pages = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Skip special Next.js directories
      if (!item.name.startsWith("_") && !item.name.startsWith(".")) {
        findAllPages(fullPath, pages);
      }
    } else if (item.name === "page.tsx") {
      const route = dir.replace(APP_DIR, "").replace(/\\/g, "/") || "/";
      pages.push({ path: fullPath, route });
    }
  }

  return pages;
}

/**
 * Extract routes from sitemap.ts
 */
function extractSitemapRoutes() {
  try {
    const content = fs.readFileSync(SITEMAP_PATH, "utf-8");
    // Quoted URLs plus the bare `url: baseUrl` homepage entry
    const urlMatches =
      content.match(/url:\s*([`'"][^`'"]+[`'"]|baseUrl\b)/g) || [];
    const routes = urlMatches.map((match) => {
      const url = match.replace(/url:\s*/g, "").replace(/[`'"]/g, "");
      return (
        url
          .replace("https://daveliew.com", "")
          .replace("${baseUrl}", "")
          .replace("baseUrl", "") || "/"
      );
    });
    // Dynamic entries (e.g. /log/${entry.slug}) can't be validated statically —
    // their [slug] routes are proven at build time via generateStaticParams.
    return routes.filter((route) => !route.includes("${"));
  } catch {
    return [];
  }
}

/**
 * Check if a page has metadata export
 */
function checkPageMetadata(pagePath, route) {
  try {
    const content = fs.readFileSync(pagePath, "utf-8");

    const hasMetadata =
      content.includes("export const metadata") ||
      content.includes("function generateMetadata"); // plain or async export

    if (hasMetadata) {
      // Check for essential meta properties
      const hasTitle =
        content.includes("title:") || content.includes("title =");
      const hasDescription =
        content.includes("description:") || content.includes("description =");

      if (hasTitle && hasDescription) {
        results.metaTags.passed.push(`${route}: Has title and description`);
      } else {
        if (!hasTitle) {
          results.metaTags.warnings.push(`${route}: Missing title in metadata`);
        }
        if (!hasDescription) {
          results.metaTags.warnings.push(
            `${route}: Missing description in metadata`,
          );
        }
      }
    } else {
      // Check if it's a layout that might provide metadata
      if (route === "/") {
        results.metaTags.passed.push(`${route}: Uses root layout metadata`);
      } else {
        results.metaTags.warnings.push(`${route}: No metadata export found`);
      }
    }

    return hasMetadata;
  } catch (error) {
    results.metaTags.errors.push(
      `${route}: Error reading file - ${error.message}`,
    );
    return false;
  }
}

/**
 * Check sitemap coverage
 */
function checkSitemapCoverage(pages, sitemapRoutes) {
  const pageRoutes = pages.map((p) => p.route);

  // Find pages not in sitemap
  for (const route of pageRoutes) {
    if (sitemapRoutes.includes(route)) {
      results.sitemap.passed.push(`${route}: In sitemap`);
    } else if (route.includes("[")) {
      // Dynamic routes are covered by generated sitemap entries
      // (e.g. /log/${entry.slug}), which extractSitemapRoutes can't
      // match statically — proven at build time via generateStaticParams.
      results.sitemap.passed.push(`${route}: Covered by dynamic entries`);
    } else if (FROZEN_PREFIXES.some((p) => route.startsWith(p))) {
      results.sitemap.passed.push(`${route}: Frozen (intentionally absent)`);
    } else {
      results.sitemap.warnings.push(`${route}: Not in sitemap`);
    }
  }

  // Find sitemap entries without pages (potential broken links)
  for (const sitemapRoute of sitemapRoutes) {
    if (!pageRoutes.includes(sitemapRoute)) {
      results.sitemap.errors.push(
        `${sitemapRoute}: In sitemap but no page.tsx found`,
      );
    }
  }
}

/**
 * Check Schema.org JSON-LD in layout
 */
function checkSchemaOrg() {
  const layoutPath = path.join(APP_DIR, "layout.tsx");

  try {
    const content = fs.readFileSync(layoutPath, "utf-8");

    const hasJsonLd = content.includes("application/ld+json");
    const hasSchemaContext = content.includes("@context");
    const hasSchemaType = content.includes("@type");

    if (hasJsonLd && hasSchemaContext && hasSchemaType) {
      results.schema.passed.push(
        "Root layout: Has valid Schema.org JSON-LD structure",
      );

      // Check for recommended schema types
      if (content.includes('"Person"')) {
        results.schema.passed.push("Schema: Person type present");
      }
      if (content.includes('"WebSite"')) {
        results.schema.passed.push("Schema: WebSite type present");
      }
      if (content.includes('"Organization"')) {
        results.schema.passed.push("Schema: Organization type present");
      }
    } else {
      if (!hasJsonLd) {
        results.schema.errors.push("Root layout: Missing JSON-LD script tag");
      }
      if (!hasSchemaContext) {
        results.schema.warnings.push("Schema: Missing @context property");
      }
      if (!hasSchemaType) {
        results.schema.warnings.push("Schema: Missing @type property");
      }
    }
  } catch (error) {
    results.schema.errors.push(`Error checking Schema.org: ${error.message}`);
  }
}

/**
 * Check for common SEO issues in components
 */
function checkComponents() {
  const componentsDir = path.join(__dirname, "../components");

  try {
    const checkDir = (dir) => {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
          checkDir(fullPath);
        } else if (item.name.endsWith(".tsx")) {
          const content = fs.readFileSync(fullPath, "utf-8");

          // Check for images without alt tags
          const imgMatches = content.match(/<img[^>]*>/g) || [];
          for (const img of imgMatches) {
            if (!img.includes("alt=")) {
              const componentName = path.relative(componentsDir, fullPath);
              results.links.warnings.push(
                `${componentName}: Image without alt attribute`,
              );
            }
          }

          // Check Next.js Image components
          const nextImgMatches = content.match(/<Image[^>]*>/g) || [];
          for (const img of nextImgMatches) {
            if (!img.includes("alt=")) {
              const componentName = path.relative(componentsDir, fullPath);
              results.links.warnings.push(
                `${componentName}: Next.js Image without alt attribute`,
              );
            }
          }
        }
      }
    };

    checkDir(componentsDir);

    if (results.links.warnings.length === 0) {
      results.links.passed.push("All images have alt attributes");
    }
  } catch (error) {
    results.links.errors.push(`Error checking components: ${error.message}`);
  }
}

/**
 * Generate report
 */
function generateReport() {
  console.log("\n" + "=".repeat(60));
  console.log("🔍 SEO VALIDATION REPORT");
  console.log("=".repeat(60));

  const categories = [
    { key: "metaTags", name: "Meta Tags", icon: "📝" },
    { key: "sitemap", name: "Sitemap Coverage", icon: "🗺️" },
    { key: "schema", name: "Schema.org", icon: "📊" },
    { key: "links", name: "Images & Links", icon: "🔗" },
  ];

  let totalPassed = 0;
  let totalWarnings = 0;
  let totalErrors = 0;

  for (const cat of categories) {
    const data = results[cat.key];
    totalPassed += data.passed.length;
    totalWarnings += data.warnings.length;
    totalErrors += data.errors.length;

    console.log(`\n${cat.icon} ${cat.name.toUpperCase()}`);
    console.log("-".repeat(40));

    if (data.passed.length > 0) {
      console.log(`✅ Passed: ${data.passed.length}`);
      data.passed.slice(0, 3).forEach((p) => console.log(`   ${p}`));
      if (data.passed.length > 3) {
        console.log(`   ... and ${data.passed.length - 3} more`);
      }
    }

    if (data.warnings.length > 0) {
      console.log(`⚠️  Warnings: ${data.warnings.length}`);
      data.warnings.forEach((w) => console.log(`   ${w}`));
    }

    if (data.errors.length > 0) {
      console.log(`❌ Errors: ${data.errors.length}`);
      data.errors.forEach((e) => console.log(`   ${e}`));
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("📈 SUMMARY");
  console.log("=".repeat(60));
  console.log(`✅ Passed:   ${totalPassed}`);
  console.log(`⚠️  Warnings: ${totalWarnings}`);
  console.log(`❌ Errors:   ${totalErrors}`);

  const score = Math.round(
    (totalPassed / (totalPassed + totalWarnings + totalErrors)) * 100,
  );
  console.log(`\n🎯 SEO Score: ${score}%`);

  if (totalErrors > 0) {
    console.log("\n🚫 SEO check failed with errors.");
    return false;
  } else if (totalWarnings > 5) {
    console.log(
      "\n⚠️  SEO check passed with warnings. Consider addressing these.",
    );
    return true;
  } else {
    console.log("\n🎉 SEO check passed!");
    return true;
  }
}

/**
 * Main execution
 */
function main() {
  console.log("🔍 Starting SEO validation...\n");

  // Find all pages
  const pages = findAllPages(APP_DIR);
  console.log(`Found ${pages.length} pages in /app directory`);

  // Extract sitemap routes
  const sitemapRoutes = extractSitemapRoutes();
  console.log(`Found ${sitemapRoutes.length} routes in sitemap.ts`);

  // Run checks
  console.log("\nRunning checks...");

  // Check metadata for each page
  for (const page of pages) {
    checkPageMetadata(page.path, page.route);
  }

  // Check sitemap coverage
  checkSitemapCoverage(pages, sitemapRoutes);

  // Check Schema.org
  checkSchemaOrg();

  // Check components
  checkComponents();

  // Generate report
  const passed = generateReport();

  process.exit(passed ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = { main, results };
