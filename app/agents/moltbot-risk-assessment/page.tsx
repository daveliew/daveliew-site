import type { Metadata } from 'next';
import MoltbotRiskContent from './MoltbotRiskContent';

export const metadata: Metadata = {
  title: 'Moltbot Risk Assessment - David Liew',
  description: 'Independent risk assessment of Moltbot, the open-source AI agent framework connecting LLMs to messaging apps. Security analysis, enterprise readiness, and pilot recommendations.',
  keywords: 'Moltbot, AI agent security, open-source agent risk, enterprise AI assessment, AI agent framework, trust engineering',
  openGraph: {
    title: 'Moltbot Risk Assessment - David Liew',
    description: 'Independent risk assessment of Moltbot: security analysis, enterprise readiness, and pilot recommendations.',
    url: 'https://daveliew.com/agents/moltbot-risk-assessment',
  },
  alternates: {
    canonical: 'https://daveliew.com/agents/moltbot-risk-assessment',
  },
};

export default function MoltbotRiskAssessmentPage() {
  return <MoltbotRiskContent />;
}
