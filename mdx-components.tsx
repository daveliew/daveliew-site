import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with Fitzgerald theme colors and proper spacing
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100 border-b-2 border-gray-700 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-800 dark:text-gray-200">
        {children}
      </h4>
    ),

    // Paragraphs with proper spacing
    p: ({ children }) => (
      <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),

    // Links with Fitzgerald hot pink accent
    a: ({ href, children }) => {
      // External links
      if (href?.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] underline transition-colors"
          >
            {children}
          </a>
        );
      }
      // Internal links
      return (
        <Link
          href={href || "#"}
          className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] underline transition-colors"
        >
          {children}
        </Link>
      );
    },

    // Lists with proper spacing
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    // Inline code with subtle background
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),

    // Code blocks styled by rehype-pretty-code
    pre: ({ children }) => (
      <pre className="mb-6 p-4 rounded-lg overflow-x-auto bg-gray-900 text-sm">
        {children}
      </pre>
    ),

    // Blockquotes with Fitzgerald teal accent
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--accent-primary)]/60 pl-4 py-2 my-4 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50">
        {children}
      </blockquote>
    ),

    // Horizontal rule with Fitzgerald theme
    hr: () => (
      <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />
    ),

    // Tables with proper styling
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </tbody>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
        {children}
      </td>
    ),

    // Strong/bold with emphasis color
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-gray-100">
        {children}
      </strong>
    ),

    // Emphasis/italic
    em: ({ children }) => <em className="italic">{children}</em>,

    ...components,
  };
}
