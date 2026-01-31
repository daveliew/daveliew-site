'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

const agentSections = [
  {
    title: 'Personal Systems',
    description: 'How I orchestrate AI agents for my own productivity',
    href: '/agents/personal-systems',
    colorClass: 'text-[var(--hot-pink)]',
    borderClass: 'border-[var(--hot-pink)]',
    bgClass: 'bg-[var(--hot-pink)]',
    level: 'Level 1',
    items: ['Claude Code orchestration', 'MCP-powered workflows', 'Trust patterns in practice']
  },
  {
    title: 'Learning Path',
    description: 'For curious professionals ready to build their own agent systems',
    href: '/agents/learning-path',
    colorClass: 'text-[var(--teal)]',
    borderClass: 'border-[var(--teal)]',
    bgClass: 'bg-[var(--teal)]',
    level: 'Level 2',
    items: ['Agent fundamentals', 'Progressive trust building', 'First agent projects']
  },
  {
    title: 'Patterns Library',
    description: 'Reusable patterns for multi-agent orchestration',
    href: '/agents/patterns',
    colorClass: 'text-[var(--gold)]',
    borderClass: 'border-[var(--gold)]',
    bgClass: 'bg-[var(--gold)]',
    level: 'Reference',
    items: ['Multi-agent orchestration', 'Human-in-the-loop gates', 'Scope lock systems']
  },
  {
    title: 'Trust Engineering',
    description: 'The key differentiator: calibrating how much to trust your agents',
    href: '/agents/trust-engineering',
    colorClass: 'text-[var(--deep-purple)]',
    borderClass: 'border-[var(--deep-purple)]',
    bgClass: 'bg-[var(--deep-purple)]',
    level: 'Advanced',
    items: ['Trust levels framework', 'Deliberative refinement', 'When trust fails']
  }
];

export default function AgentsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Agents
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Where We&apos;re Going: Building AI Teams for 2026
        </p>

        {/* Core narrative */}
        <div className="max-w-2xl mx-auto">
          <div className="relative py-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--deep-purple)] to-[var(--teal)]" />
            <blockquote className="pl-6 text-left">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Software now has agency and personality.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The paradigm shift isn&apos;t about AI doing more work—it&apos;s about
                AI becoming a capable colleague who understands context, takes initiative
                within boundaries, and can be trusted with increasing autonomy.
              </p>
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Evolution story */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/5 to-[var(--teal)]/5">
          <h2 className="text-lg font-semibold mb-4 text-center">The Evolution</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <div className="text-center">
              <div className="text-gray-500 dark:text-gray-400">2023-2024</div>
              <div className="font-medium">Prompt Engineering</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="text-gray-500 dark:text-gray-400">2024-2025</div>
              <div className="font-medium text-[var(--teal)]">Context Engineering</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="text-gray-500 dark:text-gray-400">2025-2026</div>
              <div className="font-medium text-[var(--deep-purple)]">Agent Orchestration</div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Sections grid */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Explore</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {agentSections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-semibold ${section.colorClass}`}>
                    {section.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                    {section.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {section.description}
                </p>
                <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Risk Assessments */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Risk Assessments</h2>
        <Link href="/agents/moltbot-risk-assessment">
          <Card className="p-6 hover:shadow-lg transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
                Moltbot Risk Assessment
              </h3>
              <span className="text-xs px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded">
                Opinion
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Independent security analysis of a popular open-source AI agent framework. Two-tier format: plain language risks with expandable technical detail.
            </p>
            <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
              <li>&bull; Security-by-default analysis</li>
              <li>&bull; Enterprise readiness evaluation</li>
              <li>&bull; Phased pilot recommendation</li>
            </ul>
          </Card>
        </Link>
      </motion.section>

      {/* Specializations */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Specializations</h2>
        <Link href="/agents/voice">
          <Card className="p-6 hover:shadow-lg transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-[var(--teal)]">
                Voice Agents
              </h3>
              <span className="text-xs px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded">
                ElevenLabs
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Voice-first AI experiences. Conversational agents, voice synthesis, and audio generation. 2nd place at ElevenLabs Worldwide Hackathon.
            </p>
            <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
              <li>&bull; Conversational AI &amp; voice synthesis</li>
              <li>&bull; Sound &amp; music generation</li>
              <li>&bull; Give your business a voice</li>
            </ul>
          </Card>
        </Link>
      </motion.section>

      {/* Key insight */}
      <motion.section {...sectionAnimation(4)} className="text-center">
        <Card className="p-6 bg-gradient-to-r from-[var(--gold)]/5 to-transparent">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            The question isn&apos;t IF you&apos;re using agents—
          </p>
          <p className="text-lg font-semibold text-[var(--gold)]">
            It&apos;s how much you TRUST them.
          </p>
        </Card>

        <div className="mt-8">
          <Link
            href="/ai-journey"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--teal)] transition-colors"
          >
            ← Back to AI Journey (Where We Came From)
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
