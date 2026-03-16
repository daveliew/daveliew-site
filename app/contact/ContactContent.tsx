"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageLayout, Card } from "@/components/common";
import { sectionAnimation } from "@/utils/animations";

export default function ContactContent() {
  return (
    <PageLayout
      title="Connect"
      description="Let's build something meaningful together"
      gradientTitle
    >
      {/* Simple Contact Options */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* LinkedIn */}
          <Card className="p-8 text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Professional connections and thought leadership
            </p>
            <a
              href="https://linkedin.com/in/daveliew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              Connect on LinkedIn
            </a>
          </Card>

          {/* GitHub */}
          <Card className="p-8 text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-4">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Code collaborations and open source projects
            </p>
            <a
              href="https://github.com/daveliew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </Card>
        </div>
      </motion.section>

      {/* Business Inquiries Redirect */}
      <motion.section {...sectionAnimation(1)} className="text-center">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4">Business Inquiries</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            For AI voice agent projects and business collaborations
          </p>
          <div className="space-y-4">
            <a
              href="https://agenticbrewery.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Visit Agentic Brewery →
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI voice agents for sales and customer operations
            </p>
          </div>
        </Card>
      </motion.section>
    </PageLayout>
  );
}
