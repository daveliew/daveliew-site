"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/common";
import { fadeInUp, sectionAnimation } from "@/utils/animations";

const orchestrationPatterns = [
  {
    name: "Orchestrator + Specialists",
    description:
      "One coordinator agent delegates to specialized agents. The orchestrator handles routing and synthesis.",
    example:
      "Claude Code (orchestrator) → Frontend Agent, Backend Agent, Doc Writer (specialists)",
    useCase: "Complex projects with distinct skill requirements",
    colorClass: "text-[var(--deep-purple)]",
    borderClass: "border-[var(--deep-purple)]",
  },
  {
    name: "Pipeline Chain",
    description:
      "Agents process work sequentially. Output of one becomes input of the next.",
    example: "Research → Write → Review → Format → Publish",
    useCase: "Content creation, data processing workflows",
    colorClass: "text-[var(--teal)]",
    borderClass: "border-[var(--teal)]",
  },
  {
    name: "Parallel Workers",
    description:
      "Multiple agents work on independent subtasks simultaneously, results merged at end.",
    example: "Scrape 10 pages in parallel → Combine results",
    useCase: "Data collection, batch processing",
    colorClass: "text-[var(--gold)]",
    borderClass: "border-[var(--gold)]",
  },
  {
    name: "Critic Loop",
    description:
      "Worker agent produces output, critic agent reviews and requests improvements iteratively.",
    example: "Writer → Critic → Writer (revised) → Critic (approved)",
    useCase: "Quality-critical outputs, code review",
    colorClass: "text-[var(--hot-pink)]",
    borderClass: "border-[var(--hot-pink)]",
  },
];

const safetyPatterns = [
  {
    name: "Human-in-the-Loop Gates",
    level: "Critical",
    description: "Require human approval before irreversible actions",
    implementation: "Pre-commit hooks, approval workflows, staged deployments",
    example:
      "Agent prepares database migration → Human reviews → Agent executes",
  },
  {
    name: "Scope Locks",
    level: "High",
    description:
      "Agents can only access/modify explicitly allowed files or resources",
    implementation: "File allowlists in CLAUDE.md, read-only defaults",
    example: "Frontend agent can only modify /components/, not /lib/db/",
  },
  {
    name: "Explicit File Staging",
    level: "Critical",
    description:
      "Never use git add . with agents. Stage only files the agent actually modified.",
    implementation: "git add file1.tsx file2.tsx instead of git add .",
    example: "Prevents accidental commits of unreviewed changes",
  },
  {
    name: "Reversibility Checks",
    level: "Medium",
    description: "Before any action, verify it can be undone or rolled back",
    implementation: "Backup creation, transaction wrappers, soft deletes",
    example: "Agent backs up config before modifying",
  },
];

const productivityPatterns = [
  {
    name: "Memory Triggers",
    description: "Short phrases in CLAUDE.md that activate specific behaviors",
    example:
      '"READ FIRST, EDIT SECOND, ALWAYS" → Agent reads file before any suggestions',
  },
  {
    name: "File Dependencies",
    description:
      "Specify exact files required, not vague agent completion states",
    example:
      '"Requires: /lib/types.ts, /lib/utils.ts" instead of "after setup is done"',
  },
  {
    name: "Context Preservation",
    description:
      "Summarize state before breaks or handoffs to prevent context loss",
    example:
      "ADHD summary format: Where we are, What&apos;s done, To resume, Quick win",
  },
  {
    name: "Progressive Disclosure",
    description: "Start with simple, add complexity only when needed",
    example: "Basic agent → Add tools → Add memory → Add multi-agent",
  },
];

const knowledgePatterns = [
  {
    name: "RAG (Retrieval Augmented Generation)",
    description:
      "Agents retrieve relevant information from external knowledge bases before generating responses. Reduces hallucinations and enables real-time data access.",
    architecture:
      "Index documents → Embed query → Similarity search → Context injection → Generate",
    tools: ["Supabase pgvector", "Pinecone", "Context7 MCP"],
    useCase:
      "Documentation Q&A, research assistants, enterprise knowledge bases",
    colorClass: "text-[var(--teal)]",
    borderClass: "border-[var(--teal)]",
  },
  {
    name: "MCP Knowledge Sources",
    description:
      "Use Model Context Protocol servers to give agents real-time access to external data sources and APIs.",
    architecture:
      "Agent → MCP server → External API/Database → Structured response → Agent action",
    tools: [
      "Firecrawl (web)",
      "Supabase (database)",
      "Airtable (structured data)",
    ],
    useCase: "Web research, database queries, real-time data integration",
    colorClass: "text-[var(--gold)]",
    borderClass: "border-[var(--gold)]",
  },
  {
    name: "Context Windowing",
    description:
      "Strategically manage what context agents see. Too much context causes confusion; too little causes errors.",
    architecture:
      "Full context → Relevance filter → Priority ranking → Token budget → Compressed context",
    tools: [
      "Prompt caching",
      "Document summarization",
      "Sliding context windows",
    ],
    useCase: "Long-running agents, multi-file operations, large codebases",
    colorClass: "text-[var(--deep-purple)]",
    borderClass: "border-[var(--deep-purple)]",
  },
];

export default function PatternsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link
          href="/agents"
          className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block"
        >
          ← Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-4">Patterns Library</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Reusable patterns for multi-agent orchestration
        </p>
      </motion.div>

      {/* Intro */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--gold)]/5 to-transparent">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Patterns I&apos;ve found useful while orchestrating agents — what
            they are, when they help, and where they break.
          </p>
        </Card>
      </motion.section>

      {/* Orchestration patterns */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Orchestration Patterns</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How to coordinate multiple agents for complex tasks.
        </p>
        <div className="space-y-4">
          {orchestrationPatterns.map((pattern, i) => (
            <Card key={i} className={`p-5 border-l-4 ${pattern.borderClass}`}>
              <h3 className={`font-semibold ${pattern.colorClass} mb-2`}>
                {pattern.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {pattern.description}
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <span className="font-medium">Example: </span>
                  {pattern.example}
                </div>
                <div>
                  <span className="font-medium text-gray-500">Best for: </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {pattern.useCase}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Safety patterns */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Safety Patterns</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How to prevent agents from causing unintended harm.
        </p>
        <div className="space-y-4">
          {safetyPatterns.map((pattern, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[var(--hot-pink)]">
                  {pattern.name}
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    pattern.level === "Critical"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : pattern.level === "High"
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  }`}
                >
                  {pattern.level}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {pattern.description}
              </p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-medium text-gray-500">How: </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {pattern.implementation}
                  </span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <span className="font-medium">Example: </span>
                  {pattern.example}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Productivity patterns */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Productivity Patterns</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How to get more done with less friction.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {productivityPatterns.map((pattern, i) => (
            <Card key={i} className="p-4">
              <h3 className="font-semibold text-[var(--teal)] mb-2">
                {pattern.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {pattern.description}
              </p>
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span dangerouslySetInnerHTML={{ __html: pattern.example }} />
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Knowledge patterns */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Knowledge Patterns</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How agents access and leverage external knowledge sources.
        </p>
        <div className="space-y-4">
          {knowledgePatterns.map((pattern, i) => (
            <Card key={i} className={`p-5 border-l-4 ${pattern.borderClass}`}>
              <h3 className={`font-semibold ${pattern.colorClass} mb-2`}>
                {pattern.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {pattern.description}
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  <span className="font-medium">Architecture: </span>
                  {pattern.architecture}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {pattern.tools.map((tool, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="font-medium text-gray-500">Best for: </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {pattern.useCase}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionAnimation(5)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          These patterns are the foundation. Trust engineering is how you decide
          when to apply them.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/trust-engineering"
            className="px-6 py-2 bg-[var(--deep-purple)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Explore Trust Engineering
          </Link>
          <Link
            href="/agents/personal-systems"
            className="px-6 py-2 border border-[var(--hot-pink)] text-[var(--hot-pink)] rounded-md hover:bg-[var(--hot-pink)]/5 transition-colors"
          >
            See Patterns in Practice
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
