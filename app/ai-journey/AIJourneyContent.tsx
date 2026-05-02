"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageLayout, CTAButton } from "@/components/common";
import { fadeInUp, sectionAnimation } from "@/utils/animations";
import AIJourneyTabs from "@/components/ai-journey/AIJourneyTabs";

// Loading fallback for tabs that use useSearchParams
function TabsLoading() {
  return (
    <div className="py-8 flex justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-2xl">
        <div className="flex justify-center gap-4">
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}

export default function AIJourneyContent() {
  return (
    <PageLayout
      title="Writing"
      description="Notes on context engineering, Claude, agents, and human-AI collaboration"
      maxWidth="4xl"
      gradientTitle
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <motion.div {...fadeInUp()} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Writing</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Notes on context engineering, Claude, agents, and human-AI
            collaboration. Published as I figure things out.
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation - WHY / HOW / WHAT */}
      <motion.section
        {...sectionAnimation(0)}
        className="border-t border-gray-200 dark:border-gray-700"
      >
        <Suspense fallback={<TabsLoading />}>
          <AIJourneyTabs />
        </Suspense>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...sectionAnimation(1)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Where to start</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Two entry points depending on what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/ai-journey/why-ai">Why AI</CTAButton>
          <Link
            href="/ai-journey/claude/overview"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Claude Notes
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
