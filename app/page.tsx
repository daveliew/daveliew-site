import Link from "next/link";
import { Card } from "@/components/common";
import {
  HeroTextAnimation,
  HeroVisualAnimation,
  SectionAnimation,
} from "@/components/home/HeroAnimatedWrapper";
import { VirtuousCycleVisual } from "@/components/home/VirtuousCycleVisual";

// Server Component - hero text renders immediately as static HTML
// Animations hydrate progressively without blocking LCP
export default function HomePage() {
  return (
    <div>
      {/* Hero Section - LCP text is now static HTML */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--deep-purple)]/5 via-transparent to-[var(--teal)]/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content (LCP element) */}
          <HeroTextAnimation className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent">
              David Liew
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Most people use AI tools.
              <br className="hidden md:block" />
              I build AI teams.
              <br className="hidden md:block" />
              <span className="text-lg text-gray-600 dark:text-gray-400">
                Each project teaches me something new.
              </span>
            </p>

            {/* Key insight as visual callout */}
            <div className="relative py-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--deep-purple)] to-[var(--teal)]" />
              <blockquote className="pl-6">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent">
                  Software now has agency and personality.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  The paradigm shift: from tools to colleagues
                </p>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-[var(--hot-pink)]/10 text-[var(--hot-pink)] rounded-full">
                Claude Code orchestration
              </span>
              <span className="px-3 py-1 bg-[var(--teal)]/10 text-[var(--teal)] rounded-full">
                MCP-powered agents
              </span>
              <span className="px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full">
                Trust engineering
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Building AI systems that work like capable colleagues—
              <br />
              with context, initiative, and boundaries.
            </p>
          </HeroTextAnimation>

          {/* Right side - Visual element */}
          <HeroVisualAnimation className="relative hidden md:block">
            <VirtuousCycleVisual />
          </HeroVisualAnimation>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        {/* Context Engineering Section */}
        <SectionAnimation
          index={0}
          className="py-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-2 text-center">
            <span className="text-[var(--deep-purple)]">
              Context Engineering
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Architecting what AI knows{" "}
            <span className="text-[#0CC0DF]">before</span> it reasons
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-[#0CC0DF]/30 bg-gradient-to-br from-[#0CC0DF]/5 to-transparent hover:border-[#0CC0DF]/60 transition-colors">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="text-lg font-semibold mb-3 text-[#0CC0DF]">
                System Prompts
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                CLAUDE.md files
                <br />
                The AI&apos;s persistent memory
              </p>
            </Card>

            <Card className="p-6 border-2 border-[#FF0081]/30 bg-gradient-to-br from-[#FF0081]/5 to-transparent hover:border-[#FF0081]/60 transition-colors">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold mb-3 text-[#FF0081]">
                Tools & MCP
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                External capabilities
                <br />
                What the AI can do
              </p>
            </Card>

            <Card className="p-6 border-2 border-[#F8B400]/30 bg-gradient-to-br from-[#F8B400]/5 to-transparent hover:border-[#F8B400]/60 transition-colors">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="text-lg font-semibold mb-3 text-[#F8B400]">
                Conversation Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Information flow
                <br />
                How understanding emerges
              </p>
            </Card>
          </div>

          {/* Core Principle Card */}
          <div className="max-w-3xl mx-auto mt-8">
            <Card className="p-5 bg-gradient-to-r from-[var(--deep-purple)]/5 to-transparent">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                Prompts are just one part of context. The real skill is
                designing the entire informational environment.
              </p>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400 italic">
                I don&apos;t write prompts. I architect the context where AI
                insight emerges.
              </p>
            </Card>
          </div>
        </SectionAnimation>

        {/* What I'm Building - Living Proof */}
        <SectionAnimation
          index={1}
          className="py-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-3 text-center">
            See How I Work
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Rather than tell you what I can do, here&apos;s what I&apos;m
            actually building. You&apos;re looking at one of them right now.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* This Website - The Meta Example */}
            <Card className="p-6 hover:shadow-lg transition-shadow group md:col-span-2 border-2 border-[#0CC0DF]/30">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-[#0CC0DF] transition-colors">
                  This Portfolio Site (Meta Example)
                </h3>
                <span className="text-xs text-[#0CC0DF] px-2 py-1 bg-[#0CC0DF]/10 rounded font-medium">
                  Live Now
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You&apos;re looking at it. Built to embody the Fitzgerald
                Principle - holding opposing ideas (simple surface + rich depth)
                in productive tension.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--deep-purple)]">
                    What&apos;s Interesting:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Next.js 16 + React 19 (upgraded today!)</li>
                    <li>
                      • Philosophy validation scripts that score design
                      decisions
                    </li>
                    <li>• Zero hardcoded content (all JSON-driven)</li>
                    <li>• Automated quality gates before deploy</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-[var(--teal)]">
                    Still Figuring Out:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• How to improve philosophy score (currently 6%)</li>
                    <li>• Better ways to showcase technical depth</li>
                    <li>• Balance between showing code and keeping it clean</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">
                  Next.js 16
                </span>
                <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">
                  React 19
                </span>
                <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">
                  Framer Motion
                </span>
                <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">
                  Philosophy Automation
                </span>
              </div>
            </Card>

            {/* WhatsApp MCP Server */}
            <Card className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold group-hover:text-[#FF0081] transition-colors">
                  WhatsApp MCP Server
                </h3>
                <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  Active
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Created an MCP server that turns WhatsApp exports into insights.
                Turns out I was missing patterns in thousands of client
                messages.
              </p>

              <p className="text-xs text-[var(--deep-purple)] mb-3">
                <span className="font-medium">Discovery:</span> Most valuable
                insights came from messages I thought weren&apos;t important at
                the time.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  Python
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  MCP Protocol
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  Claude API
                </span>
              </div>
            </Card>

            {/* Client Projects - Honest */}
            <Card className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold group-hover:text-[#F8B400] transition-colors">
                  3 Client Projects
                </h3>
                <span className="text-xs text-[#F8B400] px-2 py-1 bg-[#F8B400]/10 rounded font-medium">
                  Learning Mode
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Working with 3 businesses on AI-powered automation. Can&apos;t
                share details yet, but here&apos;s what I&apos;m discovering:
              </p>

              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-3">
                <li>
                  • Most &quot;AI projects&quot; fail because they automate the
                  wrong things
                </li>
                <li>• Time-to-first-success &lt; 2 minutes is make-or-break</li>
                <li>• Simpler systems win, even when they feel too simple</li>
              </ul>

              <p className="text-xs text-[var(--deep-purple)] italic">
                Each project teaches me something for the next one. Still
                figuring out the patterns.
              </p>
            </Card>
          </div>

          <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
            Building and learning in public. If something I&apos;m exploring
            helps you, that&apos;s enough for me.
          </p>
        </SectionAnimation>

        {/* Beginner CTA */}
        <SectionAnimation
          index={3}
          className="py-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 text-center">
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
              New to AI?
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Start with Vibe Coding
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-lg mx-auto">
              Build your first AI-powered project in 30 minutes—no coding
              required. This is how I introduce everyone to AI collaboration.
            </p>
            <Link
              href="/vibe-coding"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Get Started →
            </Link>
          </div>
        </SectionAnimation>

        {/* CTA Section */}
        <SectionAnimation
          index={4}
          className="py-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="bg-gradient-to-r from-[var(--deep-purple)]/10 via-transparent to-[var(--teal)]/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Got a task that takes too long?
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              I&apos;m exploring how AI can help delete it from your day. If
              something I&apos;m discovering might help, let&apos;s compare
              notes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] hover:opacity-90 transition-opacity shadow-lg"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-[var(--deep-purple)] text-[var(--deep-purple)] hover:bg-[var(--deep-purple)]/10 transition-colors"
              >
                Explore My Approach →
              </Link>
            </div>
          </div>
        </SectionAnimation>
      </div>
    </div>
  );
}
