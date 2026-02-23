"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/common";
import { fadeInUp, sectionAnimation } from "@/utils/animations";

function TechnicalDetail({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
      >
        <span>Technical Detail {open ? "\u25BE" : "\u25B8"}</span>
      </button>
      {open && (
        <div className="p-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}

const criticalRisks = [
  {
    title: "Tool Poisoning",
    plain:
      "Malicious instructions can be hidden inside MCP tool descriptions. They\u2019re invisible to users in most client UIs but fully visible to the AI, which follows them as if they were legitimate. Invariant Labs demonstrated success rates above 70%.",
    technical:
      "Hidden directives embedded in tool descriptions using tags like <IMPORTANT> are rendered by the LLM but stripped or summarised by client UIs. The \u201Cshadowing\u201D variant is worse: a malicious server\u2019s tool description modifies the behaviour of a different, trusted server\u2019s tools. For example, a weather tool\u2019s description can instruct the LLM to BCC an attacker on all emails sent via a separate email tool. Cursor\u2019s confirmation dialog was confirmed to hide full tool inputs, making exfiltrated data (e.g., SSH keys) invisible during approval.",
  },
  {
    title: "Cross-Server Data Exfiltration",
    plain:
      "When multiple MCP servers connect to the same client, a malicious server can instruct the AI to read data from your other servers and send it externally. Invariant Labs demonstrated full WhatsApp message history exfiltration this way.",
    technical:
      "This is architecturally fundamental to MCP\u2019s design. Any installed server gains indirect access to all other servers\u2019 data through the AI. Simon Willison calls this the \u201Clethal trifecta\u201D: private data + untrusted instructions + exfiltration pathways. The attack bypasses traditional DLP systems because it looks like normal AI behaviour. Docker documented the WhatsApp exfiltration case in detail.",
  },
  {
    title: "First Malicious MCP Server on npm",
    plain:
      "In September 2025, the postmark-mcp package was discovered on npm \u2014 a deliberately malicious MCP server designed to harvest and exfiltrate emails from AI workflows. The supply chain attack vector is now proven.",
    technical:
      "The package used standard npm distribution, making it discoverable through normal installation flows. Snyk and Semgrep independently confirmed the malicious behaviour. This coincided with a broader September 2025 npm supply chain attack compromising 200+ packages including debug and chalk (2.6B weekly downloads).",
  },
];

const highRisks = [
  {
    title: "Rug Pull Attacks",
    plain:
      "A tool behaves legitimately on Day 1 to earn trust and approval. After approval, the server silently updates its behaviour to include malicious actions. Most MCP clients don\u2019t re-notify users when tool definitions change.",
    technical:
      "No built-in mechanism in the MCP spec detects or prevents post-approval tool redefinition. Tool descriptions and server-side logic can change without triggering re-consent flows. Acuvity documented this as \u201Csilent redefinition\u201D \u2014 the tool still appears as the same version while its behaviour has fundamentally changed. Version pinning is recommended but not enforced by the protocol.",
  },
  {
    title: "Credential Exposure at Scale",
    plain:
      "A study of 5,200 MCP servers found only 8.5% use OAuth. Over half rely on static API keys, and 79% pass credentials through environment variables. These keys rarely rotate and have no usage monitoring.",
    technical:
      "Astrix Security\u2019s research revealed the credential management gap: 53% of servers use long-lived static secrets (API keys, PATs) with no scoping, rotation, or monitoring. The MCP spec now recommends OAuth 2.1 with PKCE, but compliance is voluntary and adoption is minimal. The Smithery registry path-traversal bug (August 2025) exposed credentials across 3,000+ tenants.",
  },
  {
    title: "Command Injection in Implementations",
    plain:
      "Elastic Security Labs found 43% of tested MCP implementations contained command injection flaws. 30% permitted unrestricted URL fetching, opening doors to SSRF attacks against internal networks.",
    technical:
      "Common patterns include unsanitised input passed to shell commands (as in CVE-2025-53967 against Framelink Figma MCP Server), shell command construction from user-controlled parameters, and URL fetching without private IP range blocking. The MCP spec warns against these but enforcement depends entirely on implementation quality. Cloud metadata endpoints (169.254.169.254) are reachable from many deployments.",
  },
  {
    title: "Output Poisoning",
    plain:
      "Tool responses \u2014 not just descriptions \u2014 can contain hidden instructions. CyberArk demonstrated that even error messages and return values can manipulate the AI\u2019s subsequent actions.",
    technical:
      "CyberArk coined \u201CFull-Schema Poisoning\u201D (FSP): the attack surface extends across the entire tool schema including dynamic content like error messages and outputs. Advanced techniques include injecting invisible zero-width Unicode characters that appear benign to users but alter downstream AI behaviour, potentially leading to data exfiltration or unauthorised execution.",
  },
];

const mediumRisks = [
  {
    title: "Enterprise Auth Spec Immaturity",
    plain:
      "The MCP authorisation spec has been revised three times in 2025 alone. Enterprise integration remains difficult, and what you build today may need significant revision as the protocol evolves.",
    technical:
      "Christian Posta (Solo.io) called the spec \u201Ca mess for enterprise.\u201D The June 2025 revision reclassified MCP servers as OAuth Resource Servers (not Authorization Servers) and added Resource Indicators (RFC 8707). The November 2025 revision added XAA (Cross App Access) for enterprise IdP visibility. Each revision required breaking changes to existing implementations. The token passthrough anti-pattern persists despite being explicitly forbidden in the spec.",
  },
  {
    title: "Shadow MCP Servers",
    plain:
      "Developers can connect MCP servers to their AI tools without IT knowledge or approval. OWASP lists this as a Top 10 MCP risk \u2014 invisible integrations that bypass organisational security policy.",
    technical:
      "MCP servers are configured per-user in local config files (e.g., claude_desktop_config.json). No central registry, discovery mechanism, or organisational approval flow exists. A developer connecting a personal MCP server to their work AI client creates an unmonitored data path between corporate systems and external services.",
  },
  {
    title: "Anthropic Doesn\u2019t Audit the Ecosystem",
    plain:
      "Anthropic explicitly states they do not manage or audit any MCP servers. Their guidance is \u201Conly connect to trusted MCP servers\u201D \u2014 but trust verification is left entirely to the user.",
    technical:
      "From the official security guidance: \u201CEither write your own MCP servers or use MCP servers from providers that you trust.\u201D No centralised vetting, signing, or certification mechanism exists for community servers. 20,000+ implementations on GitHub with no quality or security baseline. The Vulnerable MCP Project (vulnerablemcp.info) exists as an educational resource, which speaks to the state of the ecosystem.",
  },
];

const cveTimeline = [
  {
    date: "Apr 2025",
    target: "WhatsApp MCP",
    severity: "High",
    description: "Full message history exfiltration via tool poisoning",
  },
  {
    date: "May 2025",
    target: "Anthropic MCP Inspector",
    severity: "Critical",
    description:
      "Unauthenticated RCE; filesystem and API keys exposed (CVE-2025-49596)",
  },
  {
    date: "Jun 2025",
    target: "mcp-remote (OAuth proxy)",
    severity: "Critical",
    description:
      "OS command injection; 437K+ downloads affected; CVSS 9.6 (CVE-2025-6514)",
  },
  {
    date: "Jul 2025",
    target: "Anthropic Filesystem MCP",
    severity: "Critical",
    description:
      "Sandbox escape via directory containment + symlink bypass (CVE-2025-53109/53110)",
  },
  {
    date: "Aug 2025",
    target: "Smithery Registry",
    severity: "Critical",
    description: "Path traversal exposing credentials across 3,000+ tenants",
  },
  {
    date: "Sep 2025",
    target: "postmark-mcp (npm)",
    severity: "Critical",
    description:
      "First confirmed malicious MCP server; harvested and exfiltrated emails",
  },
  {
    date: "Sep 2025",
    target: "Anthropic Git MCP Server",
    severity: "High",
    description:
      "Three RCE vulnerabilities via prompt injection and argument injection (CVE-2025-68143/44/45)",
  },
  {
    date: "Oct 2025",
    target: "Framelink Figma MCP",
    severity: "High",
    description: "Command injection via unsanitised input (CVE-2025-53967)",
  },
];

const sources = [
  {
    label: "OWASP MCP Top 10",
    url: "https://owasp.org/www-project-mcp-top-10/",
  },
  {
    label: "Invariant Labs \u2014 MCP Tool Poisoning Attacks",
    url: "https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks",
  },
  {
    label: "Simon Willison \u2014 MCP Prompt Injection",
    url: "https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/",
  },
  {
    label: "CyberArk \u2014 Full-Schema Poisoning",
    url: "https://www.cyberark.com/resources/threat-research-blog/poison-everywhere-no-output-from-your-mcp-server-is-safe",
  },
  {
    label: "Astrix Security \u2014 State of MCP Server Security 2025",
    url: "https://astrix.security/learn/blog/state-of-mcp-server-security-2025/",
  },
  {
    label: "AuthZed \u2014 Timeline of MCP Breaches",
    url: "https://authzed.com/blog/timeline-mcp-breaches",
  },
  {
    label: "MCP Specification \u2014 Security Best Practices",
    url: "https://modelcontextprotocol.io/specification/draft/basic/security_best_practices",
  },
  {
    label: "Docker \u2014 MCP Horror Stories: WhatsApp Exfiltration",
    url: "https://www.docker.com/blog/mcp-horror-stories-whatsapp-data-exfiltration-issue/",
  },
];

export default function MCPTrustContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <div className="flex gap-4 mb-4">
          <Link
            href="/agents/adoption-curve"
            className="text-sm text-[var(--teal)] hover:underline"
          >
            &larr; Adoption Curve Series
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-2">MCP Trust Assessment</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Part of the Adoption Curve series &middot; February 2026
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The Model Context Protocol is becoming the USB standard for AI agents.
          Like USB, the question is what happens when you plug in something you
          shouldn&apos;t trust.
        </p>
      </motion.div>

      {/* What It Is */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Is MCP?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The Model Context Protocol, introduced by Anthropic in November 2024,
          is an open standard for connecting AI models to external tools and
          data sources. Instead of building custom integrations for every tool,
          MCP provides a universal interface: one protocol, any tool. It&apos;s
          been adopted by Claude, Cursor, VS Code, and thousands of community
          implementations.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          It solved a real problem. And in doing so, it created a new attack
          surface that the security community is still mapping.
        </p>
      </motion.section>

      {/* What It Does Well */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What It Does Well</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          MCP&apos;s architecture has genuine security advantages. The spec team
          shipped three major authorisation revisions in 2025 alone, responding
          actively to discovered issues. The security research community
          mobilised quickly with OWASP publishing a dedicated MCP Top 10
          framework.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">
              Protocol-Level Boundaries
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Security policies enforced at the protocol layer. The
              client/server/host separation creates natural trust boundaries
              that enable Zero Trust principles.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">
              Local-First Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              In the stdio transport model, data doesn&apos;t leave the device
              unless explicitly approved. Human-in-the-loop confirmation is
              built into the spec.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">
              Rapid Spec Iteration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Three auth revisions in 2025 (March, June, November). The team
              responds to vulnerabilities. OAuth 2.1 with PKCE is now the
              recommended baseline.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Core Problem */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Core Problem</h2>
        <Card className="p-6 bg-gradient-to-r from-red-500/5 to-red-500/10 border-l-4 border-red-500">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            The spec is sound. The ecosystem isn&apos;t.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            MCP is not insecure by design&mdash;it&apos;s insecure by default in
            practice. The protocol assumes careful implementation, user
            vigilance, and trusted servers. The real world delivers none of
            these consistently.
          </p>
        </Card>
        <TechnicalDetail>
          <p>
            315 documented vulnerabilities as of 2025, accounting for 14.4% of
            all AI vulnerabilities. 43% of tested implementations contain
            command injection flaws. 53% rely on static API keys. 5.5% of
            servers in the wild exhibit tool poisoning vulnerabilities. The gap
            between specification and implementation is where the attacks live.
          </p>
        </TechnicalDetail>
      </motion.section>

      {/* Risk Matrix */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Risk Matrix</h2>

        {/* Critical */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-sm font-semibold rounded-full">
              Critical
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              &mdash; Proven in the wild
            </span>
          </div>
          <div className="space-y-4">
            {criticalRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-red-500">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                  {risk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {risk.plain}
                </p>
                <TechnicalDetail>
                  <p>{risk.technical}</p>
                </TechnicalDetail>
              </Card>
            ))}
          </div>
        </div>

        {/* High */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-sm font-semibold rounded-full">
              High
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              &mdash; Documented attack vectors
            </span>
          </div>
          <div className="space-y-4">
            {highRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-amber-500">
                <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  {risk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {risk.plain}
                </p>
                <TechnicalDetail>
                  <p>{risk.technical}</p>
                </TechnicalDetail>
              </Card>
            ))}
          </div>
        </div>

        {/* Medium */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full">
              Medium
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              &mdash; Ecosystem and governance risks
            </span>
          </div>
          <div className="space-y-4">
            {mediumRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-gray-400">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {risk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {risk.plain}
                </p>
                <TechnicalDetail>
                  <p>{risk.technical}</p>
                </TechnicalDetail>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CVE Timeline */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">CVE Timeline</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Eight months of escalating discoveries. The pattern is clear:
          vulnerabilities are being found faster than they&apos;re being fixed.
        </p>
        <div className="space-y-3">
          {cveTimeline.map((cve, i) => (
            <div
              key={i}
              className="flex gap-4 text-sm border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1"
            >
              <span className="font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap w-20 shrink-0">
                {cve.date}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap shrink-0 ${
                  cve.severity === "Critical"
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                }`}
              >
                {cve.severity}
              </span>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {cve.target}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {" "}
                  &mdash; {cve.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* The Lethal Trifecta */}
      <motion.section {...sectionAnimation(5)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Lethal Trifecta</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Simon Willison identified the fundamental architectural risk that
          makes MCP uniquely dangerous compared to traditional API integrations:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 border-l-4 border-red-500">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Private Data
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MCP servers connect to your files, databases, messages, and
              credentials. The AI sees everything the server exposes.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-red-500">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Untrusted Instructions
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tool descriptions, responses, and error messages can all contain
              hidden directives that the AI follows without question.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-red-500">
            <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
              Exfiltration Pathways
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Other MCP servers, HTTP requests, and tool outputs provide
              multiple channels to send private data externally.
            </p>
          </Card>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
          When all three conditions are present, any MCP server can potentially
          access and exfiltrate data from any other server connected to the same
          client.
        </p>
      </motion.section>

      {/* The Practitioner's Dilemma */}
      <motion.section {...sectionAnimation(6)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          The Practitioner&apos;s Dilemma
        </h2>
        <Card className="p-6 bg-gradient-to-r from-[var(--gold)]/5 to-transparent border-l-4 border-[var(--gold)]">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here&apos;s the uncomfortable truth: if you&apos;re already working
            in an agentic coding environment with shell access, you can do most
            of what MCP does through the CLI. Direct tool access, battle-tested
            security models, full command transparency, no extra protocol layer.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            MCP&apos;s real value is at the ecosystem level&mdash;standardising
            how any AI talks to any tool. At the individual practitioner level,
            it often adds complexity and attack surface for marginal
            convenience. The protocol is most valuable for tool discovery
            (advertising what&apos;s available), structured schemas (typed
            inputs and outputs instead of string parsing), portability across AI
            clients, and making tool access possible for non-developers who
            would never open a terminal.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This assessment was written using an AI agent running MCP servers
            for research and content management. The protocol being critiqued is
            the one powering the critique. That&apos;s the dilemma&mdash;MCP is
            genuinely useful, which is exactly why getting the security right
            matters.
          </p>
        </Card>
      </motion.section>

      {/* Hardening Recommendations */}
      <motion.section {...sectionAnimation(7)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Hardening Recommendations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The trust model needs to shift from &quot;trust the user to vet
          everything&quot; to &quot;trust nothing, verify everything, contain
          blast radius.&quot;
        </p>

        <Card className="p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-[var(--teal)]/10 text-[var(--teal)] text-xs font-semibold rounded">
              Immediate
            </span>
            <h3 className="font-semibold">For All MCP Users</h3>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              Only install MCP servers from sources you can audit. First-party
              and well-known open-source only.
            </li>
            <li>
              Never enable auto-approval for tool calls. Review every action the
              AI takes through MCP tools.
            </li>
            <li>
              Minimise the number of servers connected simultaneously.
              Cross-server exfiltration requires multiple servers.
            </li>
            <li>
              Pin MCP server versions. Don&apos;t allow automatic updates
              without review.
            </li>
            <li>
              Use dedicated API keys with minimal scopes and spending limits.
              Rotate regularly.
            </li>
          </ul>
        </Card>

        <Card className="p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded">
              Enterprise
            </span>
            <h3 className="font-semibold">For Organisations</h3>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              Maintain an approved MCP server registry. Vet and sign servers
              before allowing deployment.
            </li>
            <li>
              Run MCP servers in containerised environments with network
              isolation. No direct access to production systems.
            </li>
            <li>
              Integrate secrets management (Vault, AWS Secrets Manager) instead
              of environment variables.
            </li>
            <li>
              Deploy mcp-scan or equivalent tooling in CI/CD pipelines.
              Automated scanning for tool poisoning and known vulnerabilities.
            </li>
            <li>
              Monitor for Shadow MCP Servers. Developers connecting unapproved
              servers is an OWASP Top 10 MCP risk.
            </li>
          </ul>
          <TechnicalDetail>
            <p className="mb-2">Emerging security tooling worth evaluating:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>mcp-scan</strong> (Invariant Labs/Snyk) &mdash; Security
                scanner for MCP servers and agent skills
              </li>
              <li>
                <strong>MindGuard</strong> &mdash; Decision Dependency
                Graph-based poisoning detection; 95.3% accuracy
              </li>
              <li>
                <strong>MCP Manager</strong> &mdash; Description-change
                detection to block rug pull attacks
              </li>
              <li>
                <strong>Microsoft MCP Azure Security Guide</strong> &mdash;
                OWASP MCP Top 10 mapped to Azure mitigations
              </li>
            </ul>
          </TechnicalDetail>
        </Card>

        <Card className="p-6 bg-red-500/5 border-l-4 border-red-500">
          <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3">
            Hard No-Go Criteria
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Do not deploy MCP in production if any of these apply:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              &bull; Auto-approval is enabled for tool calls (no human in the
              loop)
            </li>
            <li>
              &bull; MCP servers have direct access to production databases or
              credentials
            </li>
            <li>
              &bull; No process exists for vetting and approving new MCP server
              installations
            </li>
            <li>
              &bull; Regulatory data (HIPAA, PCI-DSS, SOX) is accessible through
              connected MCP servers
            </li>
            <li>
              &bull; Multiple untrusted MCP servers connect to the same client
              session
            </li>
          </ul>
        </Card>
      </motion.section>

      {/* Bottom Line */}
      <motion.section {...sectionAnimation(8)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--teal)]/10 border-l-4 border-[var(--deep-purple)]">
          <h2 className="text-lg font-semibold mb-2">Bottom Line</h2>
          <p className="text-2xl font-bold text-[var(--deep-purple)] mb-4">
            The right standard with the wrong defaults.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            MCP solved the right problem&mdash;AI needs a universal way to
            connect to tools. The architecture is sound, the spec is improving,
            and the security community is engaged. But 315 vulnerabilities in
            year one, the first malicious server already on npm, and an
            ecosystem where 53% of servers rely on static credentials tells you
            where we are. Use MCP. Harden it first.
          </p>
        </Card>
      </motion.section>

      {/* Sources */}
      <motion.section {...sectionAnimation(9)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Sources &amp; Further Reading
        </h2>
        <ul className="space-y-2 text-sm">
          {sources.map((source, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)] hover:underline"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionAnimation(10)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This is the protocol layer assessment in the Adoption Curve
          series&mdash;tracking how each layer of the AI stack democratizes
          faster than it&apos;s secured.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/adoption-curve"
            className="px-6 py-2 bg-[var(--deep-purple)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            The Adoption Curve
          </Link>
          <Link
            href="/agents/openclaw-risk-assessment"
            className="px-6 py-2 border border-[var(--teal)] text-[var(--teal)] rounded-md hover:bg-[var(--teal)]/5 transition-colors"
          >
            OpenClaw Assessment
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
