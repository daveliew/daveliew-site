import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Optimize barrel imports for faster builds and cold starts
  experimental: {
    optimizePackageImports: ['recharts', 'framer-motion', 'lucide-react'],
  },

  async redirects() {
    return [
      // Main how-to-learn page redirect
      {
        source: '/ai-journey/how-to-learn',
        destination: '/ai-journey',
        permanent: true,
      },

      // Top-level pages
      {
        source: '/ai-journey/how-to-learn/overview',
        destination: '/ai-journey',
        permanent: true,
      },
      // Old overview page now redirects to main AI Journey hub
      {
        source: '/ai-journey/overview',
        destination: '/ai-journey',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/technical-leadership',
        destination: '/ai-journey/technical-leadership',
        permanent: true,
      },

      // Techniques pages (cross-tool AI/LLM skills)
      {
        source: '/ai-journey/how-to-learn/claude-mastery/prompt-engineering',
        destination: '/ai-journey/techniques/prompt-engineering',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/tool-use',
        destination: '/ai-journey/techniques/tool-use',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/retrieval-augmented-generation',
        destination: '/ai-journey/techniques/rag',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/agent-rag',
        destination: '/ai-journey/techniques/agent-rag',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/llm-handling',
        destination: '/ai-journey/techniques/llm-handling',
        permanent: true,
      },

      // Claude-specific pages
      {
        source: '/ai-journey/how-to-learn/claude-mastery',
        destination: '/ai-journey/claude/overview',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/claude-code',
        destination: '/ai-journey/claude/code',
        permanent: true,
      },
      // Legacy placeholder redirects → Capabilities Reference
      {
        source: '/ai-journey/how-to-learn/claude-mastery/computer-use',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/developer-console',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/cookbook-examples',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/vision-multimodal',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      // Deleted placeholder pages → Capabilities Reference
      {
        source: '/ai-journey/claude/computer-use',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/claude/console',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/claude/cookbook',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      {
        source: '/ai-journey/claude/vision',
        destination: '/ai-journey/claude/capabilities',
        permanent: true,
      },
      // Hooks moved to Context Engineering
      {
        source: '/ai-journey/claude/code-hooks',
        destination: '/context-engineering/hooks',
        permanent: true,
      },
      // Context Engineering promoted to top-level
      {
        source: '/ai-journey/context-engineering',
        destination: '/context-engineering',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/model-context-protocol',
        destination: '/ai-journey/claude/mcp',
        permanent: true,
      },
      {
        source: '/ai-journey/how-to-learn/claude-mastery/2026-predictions',
        destination: '/ai-journey/claude/2026-predictions',
        permanent: true,
      },

      // RAG content consolidated into agents patterns
      {
        source: '/ai-journey/techniques/rag',
        destination: '/agents/patterns',
        permanent: true,
      },
      {
        source: '/ai-journey/techniques/agent-rag',
        destination: '/agents/learning-path',
        permanent: true,
      },

      // Voice Agents moved under /agents
      {
        source: '/voice-agents',
        destination: '/agents/voice',
        permanent: true,
      },

      // 4-pillar refactor redirects
      {
        source: '/laboratory',
        destination: '/hackathons',
        permanent: true,
      },
      {
        source: '/philosophy',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm', {}]],
    rehypePlugins: [
      ['rehype-pretty-code', {
        theme: 'github-dark',
        keepBackground: false,
      }]
    ],
  },
});

export default withMDX(nextConfig);
