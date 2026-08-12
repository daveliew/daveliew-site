#!/usr/bin/env node

/**
 * Pre-Deploy Validation Script
 * Ensures all checks pass before deployment
 */

const { execSync } = require("child_process");
const fs = require("fs");

const CHECKS = {
  typecheck: {
    command: "npm run type-check",
    name: "TypeScript Type Checking",
    critical: true,
  },
  lint: {
    command: "npm run lint",
    name: "ESLint Code Quality",
    critical: true,
  },
  philosophy: {
    command: "npm run philosophy-check",
    name: "Philosophy Validation",
    critical: false,
  },
  seo: {
    command: "npm run seo-check",
    name: "SEO Validation",
    critical: false,
  },
  logMeta: {
    command: "npm run check-log-meta",
    name: "Log Meta Validation",
    critical: true,
  },
  internalLinks: {
    command: "npm run check-links",
    name: "Internal Link Resolution",
    critical: true,
  },
  build: {
    command: "npm run build",
    name: "Production Build",
    critical: true,
  },
};

function runCheck(checkName, check) {
  console.log(`\n🔍 Running ${check.name}...`);

  try {
    const output = execSync(check.command, {
      encoding: "utf8",
      stdio: "pipe",
    });

    console.log(`✅ ${check.name} passed`);
    if (output.trim()) {
      console.log(`   ${output.trim()}`);
    }
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${check.name} failed`);
    console.log(`   Error: ${error.message}`);
    if (error.stdout) {
      console.log(`   Output: ${error.stdout}`);
    }
    if (error.stderr) {
      console.log(`   Error Details: ${error.stderr}`);
    }

    return {
      success: false,
      error: error.message,
      output: error.stdout || error.stderr,
    };
  }
}

function generateReport(results) {
  console.log("\n" + "=".repeat(60));
  console.log("🚀 PRE-DEPLOY VALIDATION REPORT");
  console.log("=".repeat(60));

  const passed = [];
  const failed = [];
  const warnings = [];

  Object.entries(results).forEach(([checkName, result]) => {
    const check = CHECKS[checkName];

    if (result.success) {
      passed.push(`✅ ${check.name}`);
    } else if (check.critical) {
      failed.push(`❌ ${check.name} (CRITICAL)`);
    } else {
      warnings.push(`⚠️  ${check.name} (WARNING)`);
    }
  });

  if (passed.length > 0) {
    console.log("\n✅ PASSED CHECKS:");
    passed.forEach((check) => console.log(`  ${check}`));
  }

  if (warnings.length > 0) {
    console.log("\n⚠️  WARNINGS:");
    warnings.forEach((check) => console.log(`  ${check}`));
  }

  if (failed.length > 0) {
    console.log("\n❌ FAILED CHECKS:");
    failed.forEach((check) => console.log(`  ${check}`));
  }

  console.log("\n" + "=".repeat(60));

  if (failed.length === 0) {
    console.log("🎉 DEPLOYMENT READY!");
    console.log("All critical checks passed. Safe to deploy.");

    if (warnings.length > 0) {
      console.log(
        `\n💡 Note: ${warnings.length} non-critical warning(s) detected.`,
      );
      console.log("Consider addressing these for optimal quality.");
    }

    return true;
  } else {
    console.log("🚫 DEPLOYMENT BLOCKED!");
    console.log(`${failed.length} critical check(s) failed.`);
    console.log("Fix these issues before deploying.");
    return false;
  }
}

function main() {
  console.log("🔧 Starting pre-deployment validation...");
  console.log("This ensures your code is ready for production.");

  const results = {};
  let shouldContinue = true;

  // Run checks in order
  for (const [checkName, check] of Object.entries(CHECKS)) {
    if (!shouldContinue && check.critical) {
      console.log(
        `\n⏭️  Skipping ${check.name} due to previous critical failure`,
      );
      continue;
    }

    results[checkName] = runCheck(checkName, check);

    // Stop on critical failures for faster feedback
    if (!results[checkName].success && check.critical) {
      shouldContinue = false;
    }
  }

  const deploymentReady = generateReport(results);

  // Exit with appropriate code
  process.exit(deploymentReady ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = { runCheck, CHECKS };
