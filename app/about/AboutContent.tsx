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

      {/* Current Focus */}
      <motion.section
        {...sectionAnimation(1)}
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

      {/* Background */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Background" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            10+ years across tech, ventures, and operations. The thread: building systems that work.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="font-medium text-blue-700 dark:text-blue-300">Tech</span>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Meta, Unity, Nansen</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="font-medium text-green-700 dark:text-green-300">Ventures</span>
              <p className="text-gray-600 dark:text-gray-400 mt-1">4 co-founded, Michelin recognition</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <span className="font-medium text-purple-700 dark:text-purple-300">Now</span>
              <p className="text-gray-600 dark:text-gray-400 mt-1">AI-first engineering</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
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

      {/* Where This Comes From - Triangle of Competencies */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Where This Comes From" />
        <Card className="p-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Triangle Visualization */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <svg viewBox="0 0 400 350" className="w-full max-w-md mx-auto">
                {/* Triangle edges */}
                <polygon
                  points="200,40 60,300 340,300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-300 dark:text-gray-600"
                />

                {/* Vertex labels */}
                {/* Top - Commercial Lens */}
                <text x="200" y="25" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 text-sm font-semibold">
                  Commercial Lens
                </text>

                {/* Bottom Left - 0→1 Execution */}
                <text x="60" y="325" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-sm font-semibold">
                  0→1 Execution
                </text>

                {/* Bottom Right - AI Engineering */}
                <text x="340" y="325" textAnchor="middle" className="fill-teal-600 dark:fill-teal-400 text-sm font-semibold">
                  AI Engineering
                </text>

                {/* Center label */}
                <text x="200" y="200" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-xs font-medium">
                  You
                </text>

                {/* Vertex dots */}
                <circle cx="200" cy="40" r="6" className="fill-amber-500" />
                <circle cx="60" cy="300" r="6" className="fill-blue-500" />
                <circle cx="340" cy="300" r="6" className="fill-teal-500" />

                {/* Center dot */}
                <circle cx="200" cy="175" r="8" className="fill-purple-500" />
              </svg>
            </div>

            {/* Descriptions */}
            <div className="flex-1 space-y-4">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Commercial Lens</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Unity, Meta, Google ads context—understanding how businesses buy, sell, and operate.
                </p>
              </div>

              <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">AI Engineering</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack + AI implementation—can actually build the thing.
                </p>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">0→1 Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  4 ventures, Michelin kitchen—shipped from scratch, repeatedly.
                </p>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong className="text-purple-700 dark:text-purple-300">The intersection:</strong> Knows what to build, can build it, and has shipped from zero—multiple times.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Try this framework yourself: What 3 fields define your unique combination?
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Growth Philosophy */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Growth Philosophy" />
        <Card className="p-6">
          <div className="mb-6">
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 border-l-4 border-purple-500 pl-4 mb-4">
              &quot;Strong opinions, loosely held.&quot;
            </blockquote>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">— Paul Saffo, Stanford futurist</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This principle guides how I approach learning and building. I commit fully to current best understanding,
            but remain ready to update when new evidence arrives. It&apos;s the difference between being confident and being stubborn.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">The Commercial → Technical Arc</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Commercial analyst → SaaS/tech from business side (Unity, 2013-2014)</li>
                <li>• Business ops → CS fundamentals alongside (SG Code Campus, 2017-2020)</li>
                <li>• Career pivot → Full-stack immersion (GA, 2021)</li>
                <li>• Growth ops → Workflow automations (Nansen, 2021-2022)</li>
                <li>• AdTech consulting → AI-first engineering (Meta, 2022-2024)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">What Each Taught Me</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Every skill compounds into the next chapter</li>
                <li>• The best time to learn is when you&apos;re scared to start</li>
                <li>• Being wrong quickly beats being right slowly</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>For students:</strong> You don&apos;t need to have it all figured out. What you need is the willingness to
              keep learning, keep building, and keep updating your mental models. That&apos;s the real competitive advantage in an AI world.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* What I Bring */}
      <motion.section
        {...sectionAnimation(5)}
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

      {/* Call to Action */}
      <motion.section
        {...sectionAnimation(6)}
        className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Let&apos;s Collaborate</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          If you&apos;re exploring how AI can augment human capabilities rather than replace them, or if you&apos;re
          building systems that require thoughtful human-AI collaboration, let&apos;s compare notes.
        </p>
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
