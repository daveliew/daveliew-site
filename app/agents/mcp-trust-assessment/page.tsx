import type { Metadata } from "next";
import MCPTrustContent from "./MCPTrustContent";

export const metadata: Metadata = {
  title: "MCP Trust Assessment - David Liew",
  description:
    "Independent trust assessment of the Model Context Protocol (MCP), the universal standard for connecting AI agents to tools. Security analysis, CVE timeline, and hardening recommendations.",
  keywords:
    "MCP security, Model Context Protocol risks, MCP trust assessment, AI agent security, tool poisoning, MCP vulnerabilities, OWASP MCP Top 10",
  openGraph: {
    title: "MCP Trust Assessment - David Liew",
    description:
      "Independent trust assessment of MCP: the USB port for AI agents that has no lock.",
    url: "https://daveliew.com/agents/mcp-trust-assessment",
  },
  alternates: {
    canonical: "https://daveliew.com/agents/mcp-trust-assessment",
  },
};

export default function MCPTrustAssessmentPage() {
  return <MCPTrustContent />;
}
