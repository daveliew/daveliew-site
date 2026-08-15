"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, SectionHeader } from "@/components/common";
import { sectionAnimation } from "@/utils/animations";

interface SeoGeoAuditContentProps {
  variant?: "context-engineering" | "techniques";
}

export default function SeoGeoAuditContent({
  variant = "context-engineering",
}: SeoGeoAuditContentProps) {
  const breadcrumbs =
    variant === "context-engineering"
      ? [
          { href: "/", label: "Home" },
          { href: "/context-engineering", label: "Context Engineering" },
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/ai-journey", label: "AI Journey" },
          { href: "/ai-journey/techniques", label: "Techniques" },
        ];

  const auditFramework = [
    {
      code: "C1",
      name: "AI Discoverability",
      items: ["llms.txt (summary)", "llms-full.txt (comprehensive)"],
      status: "critical",
    },
    {
      code: "C2",
      name: "Open Graph Images",
      items: ["Dynamic OG images", "Social preview cards"],
      status: "important",
    },
    {
      code: "C3",
      name: "robots.txt",
      items: ["AI crawler allowances", "Current crawler names (2026)"],
      status: "critical",
    },
    {
      code: "C4",
      name: "Sitemap",
      items: ["sitemap.xml coverage", "Priority settings"],
      status: "important",
    },
    {
      code: "C5",
      name: "Meta Configuration",
      items: ["Title/description tags", "Canonical URLs"],
      status: "important",
    },
    {
      code: "C6",
      name: "Schema.org",
      items: ["JSON-LD structured data", "Article/Person schemas"],
      status: "important",
    },
    {
      code: "C7",
      name: "Analytics",
      items: ["Privacy-first tracking", "Core Web Vitals"],
      status: "optional",
    },
  ];

  const toolStack = [
    {
      name: "Claude Code",
      role: "Orchestrator",
      description:
        "Runs the workflow, executes commands, edits files. The command center.",
      icon: "🎯",
    },
    {
      name: "Firecrawl MCP",
      role: "Research",
      description:
        "Searches the web for current best practices, scrapes authoritative sources.",
      icon: "🔥",
    },
    {
      name: "Context7 MCP",
      role: "Documentation",
      description:
        "Looks up library documentation for technical SEO implementations.",
      icon: "📚",
    },
  ];

  const crawlerChanges = [
    { old: "Claude-Web", new: "ClaudeBot", date: "Late 2025" },
    { old: "GPTBot", new: "ChatGPT-User, OAI-SearchBot", date: "2024-2025" },
    { old: "PerplexityBot", new: "PerplexityBot (unchanged)", date: "N/A" },
    {
      old: "Google-Extended",
      new: "Google-Extended (deprecated)",
      date: "2025",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center">
                {i > 0 && <span className="mx-2">/</span>}
                <Link href={crumb.href} className="hover:text-blue-600">
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-100">
                SEO/GEO Audit
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div {...sectionAnimation(0)} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Assisted SEO/GEO Auditing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            A Living Workflow for Continuous Optimization
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: January 2026
          </p>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong className="text-blue-700 dark:text-blue-400">
                The Problem:
              </strong>{" "}
              Traditional SEO audits are point-in-time snapshots. By the time
              you implement findings, best practices have changed—especially for
              AI discoverability.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              &ldquo;The AI crawler landscape changes faster than documentation
              can keep up. Your audit workflow needs to be self-updating.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Why AI-Assisted Auditing */}
        <motion.section {...sectionAnimation(0.5)} className="mb-12">
          <SectionHeader title="Why AI-Assisted Auditing" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-red-400">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Traditional Audits
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Point-in-time snapshots</li>
                <li>• Manual checklist updates</li>
                <li>• Outdated by publication</li>
                <li>• No research verification</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-green-400">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                AI-Assisted Audits
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Continuous, research-backed updates</li>
                <li>• Self-updating best practices</li>
                <li>• Verifies against current sources</li>
                <li>• Implements findings directly</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* The Tool Stack */}
        <motion.section {...sectionAnimation(1)} className="mb-12">
          <SectionHeader title="The Tool Stack" />
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Three tools working together: one orchestrates, one researches, one
            documents.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {toolStack.map((tool) => (
              <Card key={tool.name} className="p-6 text-center">
                <span className="text-4xl mb-3 block">{tool.icon}</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {tool.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded mb-3 inline-block">
                  {tool.role}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Workflow Diagram */}
          <Card className="p-6 bg-gray-50 dark:bg-gray-800/50">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
              Workflow
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="px-3 py-2 bg-white dark:bg-gray-700 rounded border">
                You
              </span>
              <span className="text-gray-400">→</span>
              <span className="px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-800">
                Claude Code
              </span>
              <span className="text-gray-400">→</span>
              <span className="px-3 py-2 bg-orange-100 dark:bg-orange-900 rounded border border-orange-200 dark:border-orange-800">
                Firecrawl / Context7
              </span>
              <span className="text-gray-400">→</span>
              <span className="px-3 py-2 bg-green-100 dark:bg-green-900 rounded border border-green-200 dark:border-green-800">
                Analysis
              </span>
              <span className="text-gray-400">→</span>
              <span className="px-3 py-2 bg-purple-100 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-800">
                Implementation
              </span>
            </div>
          </Card>
        </motion.section>

        {/* The Framework */}
        <motion.section {...sectionAnimation(1.5)} className="mb-12">
          <SectionHeader title="The Framework: 7 Checkpoints" />
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A systematic audit covering both traditional SEO and AI
            discoverability (GEO):
          </p>

          <div className="space-y-4">
            {auditFramework.map((item) => (
              <Card
                key={item.code}
                className={`p-4 border-l-4 ${
                  item.status === "critical"
                    ? "border-red-500"
                    : item.status === "important"
                      ? "border-amber-500"
                      : "border-gray-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg font-bold text-gray-500 dark:text-gray-400 min-w-[40px]">
                    {item.code}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {item.name}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          item.status === "critical"
                            ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                            : item.status === "important"
                              ? "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap gap-x-4">
                      {item.items.map((i) => (
                        <li key={i}>• {i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Case Study */}
        <motion.section {...sectionAnimation(2)} className="mb-12">
          <SectionHeader title="Case Study: daveliew.com (January 2026)" />

          <Card className="p-6 mb-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-3">
              Key Discovery: Outdated Crawler Names
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              During an audit, Firecrawl searched for &ldquo;AI crawler
              robots.txt 2026&rdquo; and discovered that several crawler names
              had changed since mid-2025. Our robots.txt was using outdated
              names.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-200 dark:border-amber-800">
                    <th className="text-left py-2 text-gray-700 dark:text-gray-300">
                      Old Name
                    </th>
                    <th className="text-left py-2 text-gray-700 dark:text-gray-300">
                      Current Name
                    </th>
                    <th className="text-left py-2 text-gray-700 dark:text-gray-300">
                      Changed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {crawlerChanges.map((change) => (
                    <tr
                      key={change.old}
                      className="border-b border-amber-100 dark:border-amber-900"
                    >
                      <td className="py-2 text-gray-600 dark:text-gray-400 line-through">
                        {change.old}
                      </td>
                      <td className="py-2 font-medium text-gray-800 dark:text-gray-200">
                        {change.new}
                      </td>
                      <td className="py-2 text-gray-500 dark:text-gray-500">
                        {change.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Before
              </h4>
              <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
                <code>{`# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Disallow: /`}</code>
              </pre>
              <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                Grade: B+ (outdated names)
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                After
              </h4>
              <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
                <code>{`# AI Crawlers (2026)
User-agent: ClaudeBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /`}</code>
              </pre>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                Grade: A- (current + llms-full.txt added)
              </p>
            </Card>
          </div>
        </motion.section>

        {/* The Living Workflow */}
        <motion.section {...sectionAnimation(2.5)} className="mb-12">
          <SectionHeader title="The Living Workflow" />

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                1. Run Audit
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Use the{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  /seo-geo-audit
                </code>{" "}
                skill or ask Claude Code to audit your site.
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <code>&quot;Run an SEO/GEO audit on this site&quot;</code>
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                2. Research Current Best Practices
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Firecrawl searches for the latest information on any findings
                that seem potentially outdated.
              </p>
              <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <code>
                  firecrawl_search: &quot;AI crawler robots.txt best practices
                  2026&quot;
                </code>
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                3. Verify Against Sources
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Scrape authoritative sources to confirm findings before
                implementing changes.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Trusted sources: Search Engine Journal, Rankability,
                FirstPageSage, official documentation
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                4. Implement & Update
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Claude Code implements the changes directly. If you&apos;re
                using a skill, update the skill itself so future audits benefit
                from the new knowledge.
              </p>
            </Card>
          </div>

          <Card className="p-6 mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                  Meta-Improvement
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The workflow improves itself. When you discover outdated
                  information during an audit, update both your site AND the
                  audit skill/checklist. Next time, the audit catches it
                  automatically.
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Key Takeaways */}
        <motion.section {...sectionAnimation(3)} className="mb-12">
          <SectionHeader title="Key Takeaways" />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                For SEO Professionals
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• AI crawlers change frequently—verify quarterly</li>
                <li>• llms.txt is becoming standard (see llmstxt.org)</li>
                <li>
                  • GEO ≠ SEO (treat AI discoverability as separate channel)
                </li>
                <li>
                  • Privacy-first analytics don&apos;t compromise rankings
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                For Claude Code Users
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  • MCP tools extend Claude&apos;s capabilities significantly
                </li>
                <li>• Firecrawl + Context7 = research + implementation</li>
                <li>• Skills can be self-improving (update as you learn)</li>
                <li>• Document your workflow for future sessions</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Resources */}
        <motion.section {...sectionAnimation(3.5)} className="mb-12">
          <SectionHeader title="Resources" />

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      llmstxt.org
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Official llms.txt specification
                    </p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://www.searchenginejournal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📰</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Search Engine Journal
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      SEO news and best practices
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...sectionAnimation(4)}>
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Start Your Own Living Audit
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The best time to audit your SEO/GEO infrastructure is now. The
              second best time is before your next deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.agenticbrewery.ai/context-engineering"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Learn Context Engineering →
              </Link>
              <Link
                href="/ai-journey/claude/mcp"
                className="inline-block px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
              >
                Explore MCP Tools →
              </Link>
            </div>
          </Card>
        </motion.section>

        {/* Related Links */}
        <motion.section {...sectionAnimation(4.5)} className="mt-12">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://www.agenticbrewery.ai/context-engineering"
                className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                Context Engineering →
              </Link>
              <Link
                href="/ai-journey/claude/mcp"
                className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors"
              >
                Model Context Protocol →
              </Link>
              <Link
                href="/ai-journey/techniques"
                className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
              >
                Techniques Reference →
              </Link>
              <Link
                href="/ai-journey/claude/code"
                className="text-sm px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 rounded hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
              >
                Claude Code →
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
