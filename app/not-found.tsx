import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | David Liew",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          Go Home
        </Link>
        <Link
          href="/ai-journey"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
        >
          Explore AI Journey
        </Link>
      </div>

      <div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
        <p>Looking for something specific?</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              The Fitzgerald Principle
            </Link>
          </li>
          <li>
            <Link href="/agents" className="text-blue-600 hover:underline">
              AI Agents 2026
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
