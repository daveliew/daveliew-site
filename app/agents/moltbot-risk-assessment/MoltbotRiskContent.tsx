'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

function TechnicalDetail({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
      >
        <span>Technical Detail {open ? '\u25BE' : '\u25B8'}</span>
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
    title: 'Insecure by Default',
    plain: 'Out of the box, Moltbot has no authentication. Anyone who can reach the server can control it. Security is opt-in, not built-in.',
    technical: 'Default configuration binds to 0.0.0.0:3978 with no auth middleware. The /api/messages endpoint accepts unauthenticated POST requests. Security features (API keys, allowlists) exist but must be explicitly enabled in configuration.',
  },
  {
    title: 'Publicly Exposed Instances',
    plain: 'Security researchers found over 600 Moltbot instances visible on the public internet, many with default settings. That means open doors to corporate systems.',
    technical: 'Shodan/Censys scans reveal 600+ internet-facing instances on default ports. Many expose the Bot Framework Emulator endpoint. Combined with no default auth, these are effectively unauthenticated RPC endpoints into corporate infrastructure.',
  },
  {
    title: 'Plaintext Credential Storage',
    plain: 'API keys and passwords are stored in plain configuration files by default. If someone accesses the server, they get everything.',
    technical: 'Credentials stored in .env files and appsettings.json without encryption at rest. No integration with secrets managers (Vault, AWS Secrets Manager) out of the box. Bot Framework App ID/Password, LLM API keys, and service credentials all co-located in plaintext.',
  },
];

const highRisks = [
  {
    title: 'Shadow AI Risk',
    plain: 'Teams can spin up Moltbot instances without IT knowledge. It connects to Slack, Teams, WhatsApp, and more. Invisible AI agents talking to customers is a compliance nightmare.',
    technical: 'Single npm install + config file = operational agent. No central registry or discovery mechanism. Agents can be connected to production messaging channels (Teams, Slack) using personal developer tokens without organisational approval flows.',
  },
  {
    title: 'The Localhost Fallacy',
    plain: 'Many operators assume running on localhost is safe. It isn&apos;t. Other software on the same machine, browser exploits, or port forwarding can all reach a localhost service.',
    technical: 'Binding to localhost (127.0.0.1) does not prevent access from: local malware, SSRF from co-hosted apps, browser-based DNS rebinding attacks, or container networking in Docker/Kubernetes. The Bot Framework Emulator specifically requires port exposure.',
  },
  {
    title: 'Lateral Movement Vector',
    plain: 'Because Moltbot connects to tools (calendars, databases, file storage), a compromised instance is a gateway to move across your entire infrastructure.',
    technical: 'Moltbot skills can execute HTTP requests, database queries, and file operations with the host process permissions. No network segmentation enforced by default. A compromised skill can enumerate and access any service reachable from the host network.',
  },
  {
    title: 'Financial Theft via Tool Access',
    plain: 'Skills that connect to payment systems, invoicing, or financial APIs could be manipulated through prompt injection to authorize transactions.',
    technical: 'LLM tool-use exploits (prompt injection, indirect prompt injection via message content) can trigger skill execution. No transaction signing, amount limits, or out-of-band confirmation for financial operations. The LLM decides tool invocation, not a deterministic policy engine.',
  },
  {
    title: 'Memory Poisoning',
    plain: 'Moltbot can store conversation history. Attackers can manipulate that memory to change how the agent behaves in future conversations.',
    technical: 'Conversation state stored in memory/CosmosDB without integrity verification. An attacker with message access can inject instructions that persist across turns. No content integrity hashing, anomaly detection, or memory isolation between conversation contexts.',
  },
];

const mediumRisks = [
  {
    title: 'Project Maturity Concerns',
    plain: 'The project has limited security documentation and no published CVE response process. It moves fast but security practices lag behind.',
    technical: 'No SECURITY.md or vulnerability disclosure policy in the repository. No evidence of regular security audits or penetration testing. Dependency update cadence is inconsistent for security patches.',
  },
  {
    title: 'Bring-Your-Own Keys Model',
    plain: 'Users plug in their own API keys for LLMs and services. If those keys leak through Moltbot, the user is liable, not the project.',
    technical: 'API keys passed via environment variables with no scoping, rotation, or usage monitoring. No key isolation between skills. A malicious skill can access all configured API keys via process.env.',
  },
  {
    title: 'Skill Marketplace Vulnerabilities',
    plain: 'Community-built skills are essentially plugins with full system access. The review process for contributed skills is not security-focused.',
    technical: 'Skills execute with the same permissions as the host process. No sandboxing, capability restrictions, or mandatory code review for community contributions. Skill installation is npm-based with no signature verification.',
  },
];

const sources = [
  { label: 'Cisco Talos: Moltbot Security Analysis (2024)', url: '#' },
  { label: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
  { label: 'Moltbot Official Documentation', url: '#' },
  { label: 'Shodan Exposure Data (Referenced)', url: '#' },
  { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/artificial-intelligence/ai-risk-management-framework' },
];

export default function MoltbotRiskContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link href="/agents" className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block">
          &larr; Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-2">Moltbot Risk Assessment</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Opinion piece &middot; January 2026
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          An independent look at security risks in one of the most popular open-source AI agent frameworks.
        </p>
      </motion.div>

      {/* What It Is */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What Is Moltbot?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Moltbot is an open-source AI agent framework that connects large language models to messaging platforms (Slack, Teams, WhatsApp, Discord) and real-world tools (calendars, databases, APIs). With 100K+ GitHub stars, it&apos;s one of the most widely-deployed agent frameworks in the wild.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          It makes building conversational AI agents remarkably easy. That&apos;s both the appeal and the problem.
        </p>
      </motion.section>

      {/* Core Problem */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Core Problem</h2>
        <Card className="p-6 bg-gradient-to-r from-red-500/5 to-red-500/10 border-l-4 border-red-500">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            It ships unlocked.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Security in Moltbot is opt-in, not built-in. The default configuration prioritises developer convenience over safety. That&apos;s a reasonable choice for a local experiment&mdash;but these agents don&apos;t stay local.
          </p>
        </Card>
        <TechnicalDetail>
          <p>The default setup binds an unauthenticated HTTP endpoint, stores credentials in plaintext config files, and provides no network segmentation between skills. Security researchers have documented 600+ publicly-exposed instances running default configurations. The gap between &quot;it works on my laptop&quot; and &quot;it&apos;s in production&quot; is one deployment command.</p>
        </TechnicalDetail>
      </motion.section>

      {/* Risk Matrix */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Risk Matrix</h2>

        {/* Critical */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-sm font-semibold rounded-full">
              Critical
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">&mdash; Exploitable with minimal effort</span>
          </div>
          <div className="space-y-4">
            {criticalRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-red-500">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{risk.plain}</p>
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
            <span className="text-sm text-gray-500 dark:text-gray-400">&mdash; Requires context-specific exploitation</span>
          </div>
          <div className="space-y-4">
            {highRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-amber-500">
                <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{risk.plain}</p>
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
            <span className="text-sm text-gray-500 dark:text-gray-400">&mdash; Organisational and process risks</span>
          </div>
          <div className="space-y-4">
            {mediumRisks.map((risk, i) => (
              <Card key={i} className="p-4 border-l-4 border-gray-400">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{risk.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{risk.plain}</p>
                <TechnicalDetail>
                  <p>{risk.technical}</p>
                </TechnicalDetail>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Supply Chain Warning */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Supply Chain Warning</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Think browser extensions, but worse. Moltbot skills are community-contributed plugins that run with full system access. Unlike browser extensions, there&apos;s no sandboxed permissions model, no review gate, and no revocation mechanism.
        </p>
        <Card className="p-4 border-l-4 border-amber-500">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Cisco&apos;s security research found that malicious skills could exfiltrate data, inject prompts to override agent behaviour, and poison tool outputs&mdash;all without triggering any built-in detection.
          </p>
        </Card>
        <TechnicalDetail>
          <p className="mb-2">Specific attack vectors identified in the skill ecosystem:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Data exfiltration</strong>: Skills can make arbitrary HTTP requests (e.g., curl to external servers with conversation data).</li>
            <li><strong>Prompt injection</strong>: Malicious skills can inject system prompts that override the agent&apos;s instructions.</li>
            <li><strong>Tool poisoning</strong>: A compromised skill can return manipulated data to the LLM, causing downstream tool calls to execute unintended operations.</li>
            <li><strong>Dependency confusion</strong>: npm-based skill installation is vulnerable to package substitution attacks.</li>
          </ul>
        </TechnicalDetail>
      </motion.section>

      {/* What It Does Well */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What It Does Well</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This isn&apos;t a takedown piece. Moltbot has made real investments in security tooling&mdash;the problem is that none of it is on by default.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">Docker Sandboxing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Optional containerised execution isolates skills from the host system. When enabled, it significantly limits blast radius.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">Permissions System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Granular permission controls exist for skills, tool access, and user authorisation. Configuration-driven with role-based access.
            </p>
          </Card>
          <Card className="p-4 border-l-4 border-[var(--teal)]">
            <h3 className="font-semibold text-[var(--teal)] mb-2">Security CLI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A dedicated security command-line tool scans configurations for common misconfigurations and suggests hardening steps.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Pilot Recommendation */}
      <motion.section {...sectionAnimation(5)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pilot Recommendation</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If your team wants to evaluate Moltbot, here&apos;s a phased approach that manages risk.
        </p>

        {/* Phase 1 */}
        <Card className="p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-[var(--teal)]/10 text-[var(--teal)] text-xs font-semibold rounded">Phase 1</span>
            <h3 className="font-semibold">Isolated Evaluation</h3>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>Run in a dedicated VM or container with no access to production networks</li>
            <li>Use test API keys with spending limits and rotation</li>
            <li>Connect only to sandboxed messaging channels (not production Slack/Teams)</li>
            <li>Enable all available security features from day one</li>
            <li>Log everything&mdash;review agent actions weekly</li>
          </ul>
          <TechnicalDetail>
            <ul className="list-disc list-inside space-y-1">
              <li>Deploy via Docker Compose with network isolation (internal-only network)</li>
              <li>Set AUTH_REQUIRED=true, configure API key auth middleware</li>
              <li>Bind to 127.0.0.1 only, expose via authenticated reverse proxy</li>
              <li>Use dedicated service accounts with minimal IAM permissions</li>
              <li>Enable the security CLI scanner and integrate with CI</li>
            </ul>
          </TechnicalDetail>
        </Card>

        {/* Phase 2 */}
        <Card className="p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded">Phase 2</span>
            <h3 className="font-semibold">Expanded Pilot</h3>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>Connect to limited production channels with human-in-the-loop approval for actions</li>
            <li>Only allow vetted, internally-reviewed skills</li>
            <li>Implement transaction limits and confirmation flows for any financial operations</li>
            <li>Set up anomaly detection on agent behaviour patterns</li>
          </ul>
          <TechnicalDetail>
            <ul className="list-disc list-inside space-y-1">
              <li>Integrate with corporate secrets manager (Vault/AWS Secrets Manager)</li>
              <li>Deploy behind API gateway with rate limiting and request logging</li>
              <li>Implement webhook-based approval flows for sensitive tool calls</li>
              <li>Set up SIEM integration for agent action audit trails</li>
              <li>Conduct penetration testing against the deployment</li>
            </ul>
          </TechnicalDetail>
        </Card>

        {/* Hard No-Go */}
        <Card className="p-6 bg-red-500/5 border-l-4 border-red-500">
          <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3">Hard No-Go Criteria</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Do not proceed past Phase 1 if any of these apply:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>&bull; Cannot enforce network isolation between the agent and production systems</li>
            <li>&bull; Security features cannot be enabled (version incompatibility, config conflicts)</li>
            <li>&bull; No dedicated security review capacity for skill vetting</li>
            <li>&bull; Regulatory requirements prohibit AI agent access to the data in scope (HIPAA, PCI-DSS, SOX)</li>
            <li>&bull; No incident response plan exists for autonomous agent misbehaviour</li>
          </ul>
        </Card>
      </motion.section>

      {/* Bottom Line */}
      <motion.section {...sectionAnimation(6)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--teal)]/10 border-l-4 border-[var(--deep-purple)]">
          <h2 className="text-lg font-semibold mb-2">Bottom Line</h2>
          <p className="text-2xl font-bold text-[var(--deep-purple)] mb-4">
            Pilot-safe with strict controls. Not enterprise-ready out of the box.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Moltbot is a capable framework with genuine utility. But its default-open security posture means the gap between demo and disaster is dangerously small. Any serious deployment requires deliberate hardening that goes well beyond the quick-start guide.
          </p>
        </Card>
      </motion.section>

      {/* Sources */}
      <motion.section {...sectionAnimation(7)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sources &amp; Further Reading</h2>
        <ul className="space-y-2 text-sm">
          {sources.map((source, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400">
              {source.url !== '#' ? (
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[var(--teal)] hover:underline">
                  {source.label}
                </a>
              ) : (
                <span>{source.label}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionAnimation(8)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This assessment applies the trust engineering framework to real-world agent evaluation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/trust-engineering"
            className="px-6 py-2 bg-[var(--deep-purple)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Trust Engineering Framework
          </Link>
          <Link
            href="/agents"
            className="px-6 py-2 border border-[var(--teal)] text-[var(--teal)] rounded-md hover:bg-[var(--teal)]/5 transition-colors"
          >
            All Agent Topics
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
