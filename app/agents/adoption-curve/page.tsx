import type { Metadata } from "next";
import AdoptionCurveContent from "./AdoptionCurveContent";

export const metadata: Metadata = {
  title: "The AI Adoption Curve - David Liew",
  description:
    "Every layer of the AI stack is being democratized faster than it's being secured. From ChatGPT to DeepSeek to OpenClaw — tracking how capability outpaces safety.",
  keywords:
    "AI adoption curve, AI security, AI agent risks, ChatGPT, DeepSeek, OpenClaw, MCP, AI safety, trust engineering",
  openGraph: {
    title: "The AI Adoption Curve - David Liew",
    description:
      "Every layer of the AI stack is being democratized faster than it's being secured.",
    url: "https://daveliew.com/agents/adoption-curve",
  },
  alternates: {
    canonical: "https://daveliew.com/agents/adoption-curve",
  },
};

export default function AdoptionCurvePage() {
  return <AdoptionCurveContent />;
}
