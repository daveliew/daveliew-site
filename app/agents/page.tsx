import type { Metadata } from "next";
import AgentsContent from "./AgentsContent";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Notes on agent orchestration, trust engineering, and multi-agent patterns. From prompt engineering to context engineering to agent orchestration.",
  keywords:
    "AI agents, agent orchestration, trust engineering, multi-agent systems, Claude Code, MCP",
  openGraph: {
    title: "AI Agents - David Liew",
    description:
      "Notes on agent orchestration, trust, and the patterns that emerge.",
  },
};

export default function AgentsPage() {
  return <AgentsContent />;
}
