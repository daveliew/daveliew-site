'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function AboutContent() {
  return (
    <PageLayout
      title="About David Liew"
      description="AI Engineer & Builder with 10+ years building ventures from 0→1, implementing AI solutions, and scaling operations"
      gradientTitle
    >
      {/* Hero Section */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/headshot.jpg"
                alt="David Liew - Agentic AI Architect"
                width={160}
                height={160}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m Dave—exploring how humans and AI work together. 10+ years of building taught me patterns that work.
              But I&apos;m still discovering new ones. Each project teaches me something for the next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Builder</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                4 ventures co-founded, S$1M+ in revenue growth, Michelin recognition
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">AI Engineer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implementing human-AI collaboration systems across 3 active client projects
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Explorer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Testing frameworks for the next generation navigating AI cohabitation
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Three Languages */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Three Languages" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            When I look back, my career only started making sense when I realized I&apos;d been
            learning three languages—not spoken ones, but ways of thinking.
          </p>

          <div className="space-y-6">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Numbers</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Numbers taught me how to think about value—that&apos;s the language of the C-suite.
                Economics degree, trading, then Unity under the global CFO. I modeled their SaaS
                pricing pivot—translating unit economics into a story the board could act on.
                But I got curious: how do these numbers actually drive decisions on the ground?
              </p>
            </div>

            <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Operating</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Operating taught me to build the map while walking it—0-1 ownership, no playbook.
                At SG Code Campus as employee number one, I ran Google Ads, created a B2B vertical
                selling corporate workshops. Scaled from $100K to $2M. I learned to experiment my
                way forward—test, measure, learn, decide. But I hit a wall: I couldn&apos;t speak my
                dev team&apos;s language. I&apos;d describe features, they&apos;d build something different.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Systems</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Systems gave me a technical awakening—how things actually work. General Assembly
                gave me code. At Meta, I joined right as SKAN 4.0 rolled out—two years in the weeds
                on signal loss, Conversions API, troubleshooting at scale. That&apos;s where I learned
                why attribution matters. But I understood the system—I was still waiting on engineers
                to ship. To solve problems today, I needed to build.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
            Full history on{' '}
            <a
              href="https://linkedin.com/in/daveliew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </Card>
      </motion.section>

      {/* AI as Force Multiplier */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="The Force Multiplier" />
        <Card className="p-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Pyramid Visualization */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <svg viewBox="0 0 400 380" className="w-full max-w-md mx-auto">
                {/* Base triangle (Numbers, Operating, Systems) */}
                <polygon
                  points="200,320 60,320 130,260"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 dark:text-gray-600"
                />
                <polygon
                  points="200,320 340,320 270,260"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 dark:text-gray-600"
                />
                <polygon
                  points="130,260 270,260 200,320"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 dark:text-gray-600"
                />

                {/* Edges to apex (AI) */}
                <line x1="60" y1="320" x2="200" y2="80" stroke="currentColor" strokeWidth="2" className="text-pink-400 dark:text-pink-500" />
                <line x1="340" y1="320" x2="200" y2="80" stroke="currentColor" strokeWidth="2" className="text-teal-400 dark:text-teal-500" />
                <line x1="200" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4" className="text-amber-400 dark:text-amber-500" />

                {/* Vertex labels */}
                <text x="200" y="60" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-sm font-bold">
                  AI
                </text>
                <text x="50" y="345" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-xs font-semibold">
                  Numbers
                </text>
                <text x="200" y="345" textAnchor="middle" className="fill-teal-600 dark:fill-teal-400 text-xs font-semibold">
                  Operating
                </text>
                <text x="350" y="345" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-xs font-semibold">
                  Systems
                </text>

                {/* Vertex dots */}
                <circle cx="200" cy="80" r="8" className="fill-purple-500" />
                <circle cx="60" cy="320" r="6" className="fill-amber-500" />
                <circle cx="200" cy="320" r="6" className="fill-teal-500" />
                <circle cx="340" cy="320" r="6" className="fill-blue-500" />
              </svg>
            </div>

            {/* Description */}
            <div className="flex-1 space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Then AI arrived—my force multiplier. Suddenly I could create, not just advise.
                My wife needed a clinic website—I shipped it in weeks, despite not touching React
                in years. That&apos;s when I knew: the three languages weren&apos;t separate. They were a foundation.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                I started a prototyping business—testing if the market needed AI-assisted solutions.
                Entered two hackathons in a month—a decade-old ambition I&apos;d never checked off.
              </p>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Languages in Motion</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• 2nd place, ElevenLabs Voice AI Hackathon</li>
                  <li>• Solo build, Gemini API Developer Competition</li>
                  <li>• 3 active client projects shipping with AI-assisted development</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Current Focus */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Current Focus" />
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Context Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designing informational environments where human intuition and AI capabilities converge naturally.
                The art isn&apos;t in the prompts—it&apos;s in architecting the space where understanding emerges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Voice-First AI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exploring voice interfaces paired with real-time reasoning.
                2nd place at ElevenLabs hackathon. Building toward latency-optimized SME applications.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* What I Bring */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="What I Bring" />
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Technical Depth</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Full-stack development (Next.js, React, TypeScript, Python)</li>
                <li>• AI implementation & prompt engineering</li>
                <li>• System architecture & design</li>
                <li>• Database design & optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">Business Acumen</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• 0→1 venture building experience</li>
                <li>• Operations & growth strategy</li>
                <li>• Product development & iteration</li>
                <li>• Revenue growth & sustainability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Unique Perspective</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Human-AI complementarity design</li>
                <li>• Context engineering frameworks</li>
                <li>• Philosophical depth in technical work</li>
                <li>• ADHD-optimized workflows</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* The Landing */}
      <motion.section
        {...sectionAnimation(5)}
        className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-8"
      >
        <div className="max-w-2xl mx-auto text-center mb-8">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
            &quot;I navigate these worlds—and translate between them.&quot;
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            That&apos;s what I bring.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Get in Touch
          </Link>
          <Link
            href="/ai-journey"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            Explore AI Journey
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
