"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t-4 border-gradient">
      {/* Gradient border effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-teal-500 to-yellow-500" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              David Liew
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              AI Engineer & Builder fusing human creativity with tomorrow&apos;s
              technology.
            </p>

            {/* Social Links with Icons */}
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/daveliew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-1 group"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/daveliew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:translate-x-1 group"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://agenticbrewery.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:translate-x-1 group"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Agentic Brewery{" "}
                  <span className="text-xs font-normal text-gray-400 dark:text-gray-500">
                    — Voice Agents
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Main Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-blue-500">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/hackathons"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI Journey - Why/How/What */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-teal-500">
              AI Journey
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/ai-journey/why-ai"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Why Human-AI Collaboration
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-journey/context-engineering"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Context Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-journey/claude/overview"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Claude Mastery
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-journey/portfolio"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Portfolio & Results
                </Link>
              </li>
              <li>
                <Link
                  href="/hackathons"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Hackathons
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: AI Agents - 2026 Focus */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2 border-[var(--deep-purple)]">
              AI Agents
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/agents"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--deep-purple)] transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Agents Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/personal-systems"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--hot-pink)] transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Personal Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/learning-path"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--teal)] transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Learning Path
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/patterns"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--gold)] transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Patterns Library
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/trust-engineering"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-[var(--deep-purple)] transition-colors duration-200 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Trust Engineering
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} David Liew. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <span>Built with Next.js 16 & Claude Code</span>
              <span className="hidden md:inline">•</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                ↑ Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
