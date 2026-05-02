import type { Metadata } from "next";
import AIJourneyContent from "./AIJourneyContent";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on context engineering, Claude, agents, and human-AI collaboration. Published as I figure things out.",
  keywords:
    "context engineering, Claude, AI agents, human-AI collaboration, prompt engineering",
  openGraph: {
    title: "Writing - David Liew",
    description:
      "Notes on context engineering, Claude, agents, and human-AI collaboration.",
  },
};

export default function AIJourneyPage() {
  return <AIJourneyContent />;
}
