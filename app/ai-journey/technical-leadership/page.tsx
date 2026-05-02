import type { Metadata } from "next";
import TechnicalLeadershipContent from "./TechnicalLeadershipContent";

export const metadata: Metadata = {
  title: "Technical Leadership Path",
  description:
    "Context Engineering patterns from agentic exploration. Technical leadership for AI-augmented development workflows.",
  keywords:
    "technical leadership, Context Engineering, AI workflow, agentic exploration, technical patterns, AI development",
  openGraph: {
    title: "Technical Leadership - Context Engineering",
    description: "Context Engineering patterns from agentic exploration.",
  },
};

export default function TechnicalLeadershipPage() {
  return <TechnicalLeadershipContent />;
}
