"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AIJourneySubpageLayout from "@/components/ai-journey/SubpageLayout";
import aiJourneyData from "@/data/ai-journey.json";

interface CaseStudy {
  title: string;
  date: string;
  category?: string;
  status?: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  demoUrl?: string;
  foundationSkillsApplied: string[];
}

export default function PortfolioContent() {
  const allProjects =
    (aiJourneyData.journey as { casestudies?: CaseStudy[] }).casestudies || [];

  // Group by category
  const voiceProjects = allProjects.filter(
    (cs) => cs.category === "hackathon" || cs.category === "exploration",
  );
  const clientProjects = allProjects.filter((cs) => cs.category === "client");

  return (
    <AIJourneySubpageLayout
      title="Portfolio & Results"
      description="Projects from hackathons and personal exploration."
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--teal)]/10 p-6 rounded-lg border border-[var(--deep-purple)]/30">
          <p className="text-gray-700 dark:text-gray-300">
            Every project here represents applied learning—from hackathon wins
            to production client systems. Multi-Role Fluency (Systems Architect
            → Product Manager → Implementation) runs through each one.
          </p>
        </div>
      </motion.section>

      {/* Voice AI Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Voice AI Experiments
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Hackathon wins and explorations in voice-first AI interaction.
        </p>

        <div className="space-y-8">
          {voiceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      {project.category === "hackathon" && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                          🏆 Hackathon
                        </span>
                      )}
                      {project.category === "exploration" && (
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                          🔬 Exploration
                        </span>
                      )}
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(project.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Demo →
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-green-500 mt-1">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Client Work Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Client Work
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Production systems delivering real business outcomes.
        </p>

        <div className="space-y-8">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-l-4 border-[var(--teal)]"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      {project.status === "Active" && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                          Active
                        </span>
                      )}
                      {project.status === "Completed" && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                          Completed
                        </span>
                      )}
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(project.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-[var(--teal)] mt-1">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What&apos;s Next Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--gold)]/10 p-6 rounded-lg border border-[var(--deep-purple)]/30">
          <h3 className="text-lg font-semibold text-[var(--deep-purple)] mb-2">
            2026 Focus: AI Agents
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Moving from AI tools to autonomous agent systems. Multi-agent
            orchestration, trust engineering, and knowledge patterns (RAG, MCP)
            are the next frontier.
          </p>
          <Link
            href="/agents"
            className="inline-block px-4 py-2 bg-[var(--deep-purple)] text-white rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            Explore AI Agents →
          </Link>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-between mt-12"
      >
        <Link
          href="/ai-journey/claude/overview"
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Claude Mastery
        </Link>
        <Link
          href="/ai-journey"
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          Back to AI Journey
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
}
