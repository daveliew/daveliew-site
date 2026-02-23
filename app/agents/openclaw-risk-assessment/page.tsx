import type { Metadata } from "next";
import OpenClawRiskContent from "./OpenClawRiskContent";

export const metadata: Metadata = {
  title: "OpenClaw Risk Assessment - David Liew",
  description:
    "Independent risk assessment of OpenClaw, the open-source AI agent framework connecting LLMs to messaging apps. Security analysis, enterprise readiness, and pilot recommendations.",
  keywords:
    "OpenClaw, AI agent security, open-source agent risk, enterprise AI assessment, AI agent framework, trust engineering",
  openGraph: {
    title: "OpenClaw Risk Assessment - David Liew",
    description:
      "Independent risk assessment of OpenClaw: security analysis, enterprise readiness, and pilot recommendations.",
    url: "https://daveliew.com/agents/openclaw-risk-assessment",
  },
  alternates: {
    canonical: "https://daveliew.com/agents/openclaw-risk-assessment",
  },
};

export default function OpenClawRiskAssessmentPage() {
  return <OpenClawRiskContent />;
}
