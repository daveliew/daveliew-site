'use client';

import Link from 'next/link';

const capabilities = [
  {
    title: 'Conversational AI Agents',
    description: 'Voice-first AI that talks naturally with your customers. Inbound support, outbound calls, appointment booking.',
    icon: '🎙️',
  },
  {
    title: 'Voice Synthesis',
    description: 'Natural text-to-speech for any content. Product demos, explainer videos, audiobooks, podcasts.',
    icon: '🔊',
  },
  {
    title: 'Voice Cloning',
    description: 'Clone voices ethically for consistent brand presence. Scale your voice without scaling your time.',
    icon: '🎭',
  },
  {
    title: 'Sound & Music Generation',
    description: 'AI-generated sound effects and music for content, apps, and experiences.',
    icon: '🎵',
  },
];

const useCases = [
  {
    title: 'Customer Support',
    description: '24/7 voice agents that handle inquiries, troubleshoot issues, and escalate when needed.',
  },
  {
    title: 'Appointment Booking',
    description: 'Conversational scheduling that integrates with your calendar and CRM.',
  },
  {
    title: 'Lead Qualification',
    description: 'Outbound calls that qualify leads and book meetings for your sales team.',
  },
  {
    title: 'Content Creation',
    description: 'Voice-overs, podcasts, and audio content at scale without studio time.',
  },
];

export default function VoiceAgentsContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
            <span>🥈</span>
            <span>2nd Place - ElevenLabs Worldwide Hackathon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Voice Agents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Give your business a voice. AI that speaks for you.
          </p>
        </div>

        {/* Thesis */}
        <section className="mb-16">
          <div className="p-8 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800">
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                <strong>Voice is the next interface.</strong> No typing, no screens, just conversation.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I specialize in building voice-first AI experiences using ElevenLabs. From conversational agents that handle customer calls to voice synthesis that scales your content — voice removes friction from human-AI interaction.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Proof - Hackathon */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Built & Proven
          </h2>
          <div className="p-6 rounded-xl border border-purple-200 bg-white dark:border-purple-800 dark:bg-gray-800">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Jazz Scat
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-purple-600 text-white rounded-full">
                    2nd Place 🥈
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ElevenLabs Worldwide Hackathon • Singapore • December 2025
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  AI jam partner for vocal practice. Conversational AI DJ + real-time backing track generation + voice coaching. Built in 12 hours, won 2nd place.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    Conversational AI
                  </span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    Sound Generation
                  </span>
                  <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    Client Tools
                  </span>
                </div>
              </div>
              <a
                href="https://gamma.app/docs/JazzScat-DJ--x5gse2gf7qr1wlo?mode=doc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                View Deck →
              </a>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="text-3xl mb-3">{cap.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {cap.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {['ElevenLabs', 'Conversational AI', 'WebRTC', 'Next.js', 'Vercel', 'MCP Integration'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Give Your Business a Voice?
          </h2>
          <p className="mb-6 max-w-xl mx-auto opacity-90">
            Whether you need a customer support agent, voice content at scale, or a custom voice experience — let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://agenticbrewery.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors"
            >
              Agentic Brewery →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
