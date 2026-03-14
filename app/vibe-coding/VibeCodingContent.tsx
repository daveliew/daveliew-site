"use client";
// Vibe Coding: Entry-level context engineering for beginners

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, SectionHeader, PageLayout } from "@/components/common";
import { sectionAnimation } from "@/utils/animations";

export default function VibeCodingContent() {
  return (
    <PageLayout
      title="Vibe Coding"
      description="Build Your Professional Brand Without Writing Code"
      gradientTitle
    >
      {/* Hero Section */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              What if you could describe what you want, and AI builds it for
              you?
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Vibe coding</strong> is a new way of building—you describe
              the vibe, AI handles the code. No programming experience needed.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This is your first taste of{" "}
              <Link
                href="/context-engineering"
                className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
              >
                context engineering
              </Link>
              —the skill of giving AI the right information to understand your
              vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/vibe-coding/handout"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Get the Handout
              </Link>
              <a
                href="https://v0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
              >
                Try v0.dev Now
              </a>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Web Fundamentals Section */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <SectionHeader title="Understand the Basics" />
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                The Only 3 Concepts You Need
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Before you start prompting, understand <strong>Events</strong>,{" "}
                <strong>State</strong>, and <strong>Conditionals</strong>. These
                three concepts power every website — from simple buttons to
                complex apps like Instagram and ChatGPT.
              </p>
              <Link
                href="/vibe-coding/fundamentals"
                className="inline-flex items-center px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Try the Interactive Demo →
              </Link>
            </div>
            <div className="flex gap-4 text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                <div className="text-2xl mb-1">🖱️</div>
                <div className="text-xs font-medium text-blue-700 dark:text-blue-300">
                  Events
                </div>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
                <div className="text-2xl mb-1">🧠</div>
                <div className="text-xs font-medium text-green-700 dark:text-green-300">
                  State
                </div>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                <div className="text-2xl mb-1">🔀</div>
                <div className="text-xs font-medium text-purple-700 dark:text-purple-300">
                  Conditionals
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* The Real Skill */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <SectionHeader title="The Real Skill" />
        <Card className="p-6">
          <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center mb-6 border-l-4 border-teal-500 pl-4 mx-auto max-w-2xl">
            &quot;The prompt is the question. The context is the
            classroom.&quot;
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-2xl mx-auto">
            The skill isn&apos;t prompting—it&apos;s giving AI the right context
            to understand what you actually want. Your background, goals, and
            constraints matter more than the specific words you use.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold mb-1">Your Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                What do you want to communicate?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold mb-1">Your Style</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                What makes you unique?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold mb-1">Your Audience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Who needs to see this?
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/context-engineering"
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            >
              Learn more about Context Engineering →
            </Link>
          </div>
        </Card>
      </motion.section>

      {/* 3-Step Process */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <SectionHeader title="3-Step Process" />
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Describe Your Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Tell AI what you want in plain English. Include your field,
                personality, and what makes you unique.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Claude or ChatGPT
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Generate with v0.dev</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Paste your prompt, get a working preview. Start simple—you can
                always add more.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  v0.dev
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Iterate Until Right</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Chat with AI to refine. Small changes work better than trying to
                change everything at once.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Deploy on Vercel
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Real Example */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <SectionHeader title="Real Example: This Portfolio" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This website was built using AI-assisted development. I described my
            vision and values, specified the &quot;Fitzgerald Principle&quot;
            philosophy, and iterated through conversation. AI handled the code,
            layouts, animations, and responsive design.
          </p>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>The insight:</strong> Human creativity + AI execution. I
              focused on <em>what</em> to communicate. AI handled <em>how</em>{" "}
              to build it. This{" "}
              <Link
                href="/about"
                className="text-amber-700 dark:text-amber-400 hover:underline"
              >
                complementarity
              </Link>{" "}
              is the future of work.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Your Turn + Next Steps */}
      <motion.section {...sectionAnimation(5)} className="mb-12">
        <SectionHeader title="Your Turn" />
        <Card className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
          <h3 className="text-lg font-semibold mb-4">
            Build Your Personal Introduction Site (30 min)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Write your prompt</strong> — &quot;Create a personal
                page for [Name], a [Year] [Major] student interested in
                [topics].&quot;
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Generate in v0.dev</strong> — Paste your prompt and see
                the magic happen.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Iterate</strong> — &quot;Add a skills section&quot; or
                &quot;Make colors more vibrant.&quot;
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Deploy</strong> — Click Deploy, get your live URL, add
                to LinkedIn.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/vibe-coding/handout"
              className="inline-flex items-center px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
            >
              Print the Handout
            </Link>
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors text-sm"
            >
              Open v0.dev
            </a>
          </div>
        </Card>
      </motion.section>

      {/* Continue Learning CTA */}
      <motion.section
        {...sectionAnimation(6)}
        className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
          Ready to Go Deeper?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Vibe coding is just the beginning. Learn how context engineering
          applies to everything from personal systems to enterprise AI
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/context-engineering"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200 shadow-sm"
          >
            Learn Context Engineering
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200"
          >
            Questions? Get in Touch
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
