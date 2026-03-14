"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AIJourneySubpageLayout from "@/components/ai-journey/SubpageLayout";

export default function WhyAIContent() {
  return (
    <AIJourneySubpageLayout
      title="Why AI"
      description="Understanding the transformative potential of artificial intelligence and where we are on the adoption curve"
    >
      {/* S-Curve Explanation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          The AI S-Curve
        </h2>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="relative">
            <Image
              src="/images/coatue_framework.png"
              alt="Coatue Framework for AI S-Curve"
              width={800}
              height={450}
              className="rounded-lg mx-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
            Source: Coatue opinion and analysis as of June 2024. For
            illustrative purposes only.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
              Phase 1: AI Core Infrastructure
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              This foundation phase represents the development of key
              technologies powering AI: cloud computing infrastructure,
              specialized hardware (GPUs, TPUs), fundamental models, and
              essential data management systems. This phase enables all
              subsequent AI innovation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
              Phase 2: Edge AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              As AI becomes more accessible, we see increased implementation of
              AI capabilities in existing business systems. This includes
              API-based integrations with models like ChatGPT, Anthropic Claude,
              and others. Businesses are finding ways to enhance their
              operations with AI capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
              Phase 3: AI Applications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The next evolution involves building software applications with AI
              at their core. These solutions are designed from the ground up
              with AI capabilities, rather than simply adding AI to existing
              systems. We&apos;re seeing the rise of copilots, autonomous
              agents, and AI-native applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-2">
              Phase 4+: Physical AI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The frontier of AI development involves bridging the digital and
              physical worlds. This includes robotics, autonomous vehicles,
              industrial automation, and other areas where AI directly controls
              or interacts with physical systems and environments.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Why AI Matters Now
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We are at a critical inflection point in the AI S-curve, transitioning
          from early infrastructure to widespread application. This creates
          unprecedented opportunities for those who can effectively leverage
          these technologies.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
            <li>AI is becoming increasingly accessible to non-specialists</li>
            <li>
              The economic impact of AI is beginning to accelerate across
              industries
            </li>
            <li>
              Early adopters are gaining significant competitive advantages
            </li>
            <li>
              The skills gap between AI-proficient and non-proficient
              professionals is widening
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/ai-journey"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md"
        >
          Learn How to Master AI →
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
}
