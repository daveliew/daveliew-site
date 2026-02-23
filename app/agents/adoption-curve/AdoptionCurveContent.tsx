"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/common";
import { fadeInUp, sectionAnimation } from "@/utils/animations";

const layers = [
  {
    year: "2022/23",
    layer: "Model",
    moment: "ChatGPT",
    democratized: "Anyone can reason with AI",
    detail:
      "OpenAI wrapped GPT-3.5 in a chat interface and 100 million people showed up in two months. The model layer went from research paper to dinner table conversation overnight.",
    status: "history" as const,
  },
  {
    year: "2025",
    layer: "Infrastructure",
    moment: "DeepSeek",
    democratized: "Anyone can run AI locally",
    detail:
      "DeepSeek proved you don&apos;t need Big Tech&apos;s compute budget to build frontier models. Open-weight models running on consumer hardware broke the assumption that AI capability requires centralised infrastructure.",
    status: "history" as const,
  },
  {
    year: "2025",
    layer: "Protocol",
    moment: "MCP",
    democratized: "Anyone can connect AI to everything",
    detail:
      "Anthropic&apos;s Model Context Protocol became the USB standard for AI agents&mdash;a universal way to connect LLMs to tools, databases, and services. Every vendor started shipping MCP servers.",
    status: "current" as const,
  },
  {
    year: "2026",
    layer: "Agent",
    moment: "OpenClaw",
    democratized: "Anyone can deploy autonomous agents",
    detail:
      "OpenClaw made deploying AI agents to messaging platforms as easy as npm install. 140K+ GitHub stars and 600+ publicly-exposed instances later, the agent layer is wide open.",
    status: "current" as const,
  },
  {
    year: "202X",
    layer: "Physical",
    moment: "TBD",
    democratized: "Anyone can deploy embodied AI",
    detail:
      "When robotics hits the same accessibility inflection&mdash;consumer-grade hardware, open-source control systems, plug-and-play deployment&mdash;the pattern repeats in the physical world.",
    status: "future" as const,
  },
];

const statusColors = {
  history: {
    border: "border-gray-400",
    badge: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    label: "Historical",
  },
  current: {
    border: "border-[var(--teal)]",
    badge: "bg-[var(--teal)]/10 text-[var(--teal)]",
    label: "Active",
  },
  future: {
    border: "border-[var(--gold)]",
    badge: "bg-[var(--gold)]/10 text-[var(--gold)]",
    label: "Emerging",
  },
};

const assessments = [
  {
    title: "OpenClaw Risk Assessment",
    layer: "Agent Layer",
    href: "/agents/openclaw-risk-assessment",
    description:
      "Independent security analysis of the open-source AI agent framework. Default-open security posture, 600+ exposed instances, and a phased pilot recommendation.",
    status: "Published",
  },
  {
    title: "MCP Trust Assessment",
    layer: "Protocol Layer",
    href: "#",
    description:
      "How the universal connector for AI agents handles authentication, tool verification, and trust boundaries. The USB port that has no lock.",
    status: "Coming soon",
  },
];

export default function AdoptionCurveContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link
          href="/agents"
          className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block"
        >
          &larr; Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-2">The AI Adoption Curve</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Series &middot; Updated February 2026
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Every layer of the AI stack is being democratized faster than
          it&apos;s being secured.
        </p>
      </motion.div>

      {/* Thesis */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/5 to-[var(--teal)]/5 border-l-4 border-[var(--deep-purple)]">
          <h2 className="text-lg font-semibold mb-3">The Pattern</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ChatGPT, DeepSeek, and OpenClaw aren&apos;t separate stories.
            They&apos;re one story: capability becoming accessible at every
            layer of the stack, with security consistently arriving late.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Each step moves power closer to the edge&mdash;from API calls, to
            local models, to autonomous agents, to universal tool access. And at
            every step, the default configuration prioritises convenience over
            safety.
          </p>
        </Card>
      </motion.section>

      {/* Timeline */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">The Layers</h2>
        <div className="space-y-4">
          {layers.map((layer, i) => {
            const colors = statusColors[layer.status];
            return (
              <Card key={i} className={`p-5 border-l-4 ${colors.border}`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                    {layer.year}
                  </span>
                  <span className="font-semibold">{layer.moment}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}
                  >
                    {layer.layer}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}
                  >
                    {colors.label}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {layer.democratized}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {layer.detail}
                </p>
              </Card>
            );
          })}
        </div>
      </motion.section>

      {/* The compounding problem */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why It Compounds</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          2025 was the plumbing year. Both compute (DeepSeek) and connectivity
          (MCP) democratized simultaneously. 2026 is when agents arrived to use
          that plumbing&mdash;which is why it feels more dangerous. An agent
          built on OpenClaw can run a local DeepSeek model, connected to every
          tool in your stack via MCP, deployed in minutes with no security
          review.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Each layer doesn&apos;t just add capability. It multiplies the attack
          surface of every layer beneath it.
        </p>
      </motion.section>

      {/* Assessments */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Layer Assessments</h2>
        <div className="space-y-4">
          {assessments.map((assessment, i) => {
            const isLive = assessment.status === "Published";
            const card = (
              <Card
                className={`p-5 ${isLive ? "hover:shadow-lg transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500" : "border border-dashed border-gray-300 dark:border-gray-700"}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{assessment.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${isLive ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`}
                  >
                    {assessment.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {assessment.layer}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {assessment.description}
                </p>
              </Card>
            );
            return isLive ? (
              <Link key={i} href={assessment.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={i} className="block opacity-60">
                {card}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* What's next */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--gold)]/5 to-transparent border-l-4 border-[var(--gold)]">
          <h2 className="text-lg font-semibold mb-3">What Comes Next?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The pattern predicts itself. When robotics hardware hits consumer
            price points and open-source control systems mature, the physical
            layer follows the same curve: capability first, security later. The
            question is whether we learn from the software layers fast enough to
            get the physical layer right.
          </p>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionAnimation(5)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This series applies trust engineering principles to each layer of the
          AI stack as it democratizes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/trust-engineering"
            className="px-6 py-2 bg-[var(--deep-purple)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Trust Engineering Framework
          </Link>
          <Link
            href="/agents"
            className="px-6 py-2 border border-[var(--teal)] text-[var(--teal)] rounded-md hover:bg-[var(--teal)]/5 transition-colors"
          >
            All Agent Topics
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
