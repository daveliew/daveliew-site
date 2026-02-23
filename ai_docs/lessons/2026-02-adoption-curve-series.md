# The Adoption Curve - Series Insights

**Started**: 2026-02-23
**Status**: Active iteration
**Thesis**: Every layer of the AI stack is being democratized faster than it's being secured.

## Design Decisions

### 2026-02-23: Benefits before risks

- **Decision**: Moved "What It Does Well" section before "The Core Problem" and risk matrix
- **Rationale**: Leading with benefits establishes credibility and fairness before presenting risks. Readers are more receptive to criticism when they see you understand the value first.
- **Pattern**: Balanced assessment > takedown piece

## Series Structure: The Adoption Curve

**Core insight**: Individual AI breakthroughs (ChatGPT, DeepSeek, OpenClaw) aren't separate stories — they're one story of capability democratizing across every layer of the stack, with security consistently lagging behind.

### Timeline

| Year    | Layer          | Moment   | What Democratized                   |
| ------- | -------------- | -------- | ----------------------------------- |
| 2022/23 | Model          | ChatGPT  | Anyone can reason with AI           |
| 2025    | Infrastructure | DeepSeek | Anyone can run AI locally           |
| 2025    | Protocol       | MCP      | Anyone can connect AI to everything |
| 2026    | Agent          | OpenClaw | Anyone can deploy autonomous agents |
| 202X    | Physical?      | TBD      | Anyone can deploy embodied AI?      |

### Key observation (2026-02-23)

2025 was the "plumbing year" — both compute (DeepSeek) and connectivity (MCP) democratized simultaneously. 2026 is when agents arrive to USE that plumbing, which is why it feels more dangerous. Capability is compounding across layers.

### Pieces

1. **Series spine / landing page** — `/agents/adoption-curve` (LIVE)
2. **OpenClaw Risk Assessment** — `/agents/openclaw-risk-assessment` (LIVE)
3. **MCP Trust Assessment** — `/agents/mcp-trust-assessment` (LIVE)
4. **DeepSeek / infrastructure layer** — retrospective? (IDEA)

## Insights Log

### 2026-02-23 — Session 1: OpenClaw + Series Genesis

- Benefits-first framing works — lead with what's good before critiquing
- The individual assessments are chapters, not standalone pieces
- MCP is 2025 (protocol) not 2026 (agent) — cleaner to pair it with DeepSeek as "the plumbing year"
- The series itself has more lasting SEO/GEO value than any individual piece
- Decided: `/agents/adoption-curve` — agents is the right neighbourhood, "adoption curve" is an established term with SEO weight
- Spine page built with 5-layer timeline, compounding section, and assessment links

### 2026-02-23 — Session 1: MCP Trust Assessment

- Research yielded incredibly rich material: 315 documented CVEs, OWASP MCP Top 10, real breach timeline
- Key framing: "The spec is sound. The ecosystem isn't." — MCP isn't insecure by design, it's insecure by default in practice
- Simon Willison's "lethal trifecta" (private data + untrusted instructions + exfiltration pathways) is the standout framework
- The CVE timeline section is unique differentiator — no other assessment has this chronological view
- **Practitioner's Dilemma**: Best insight of the session. For power users with shell access, MCP adds complexity for marginal convenience. Its real value is ecosystem-level standardisation. The self-referential angle (using MCP to critique MCP) gives it authenticity.
- Stats that hit hardest: 43% command injection rate, 53% on static keys, 84% tool poisoning success with auto-approve
- Hardening recommendations follow same pattern as OpenClaw (immediate / enterprise / no-go criteria) — this is becoming a series format
- Bottom line: "The right standard with the wrong defaults" — parallel to OpenClaw's "Pilot-safe with strict controls"

### Emerging patterns across pieces

- Both assessments follow: What Is → What It Does Well → Core Problem → Risk Matrix → Unique Section → Recommendations → Bottom Line → Sources
- Both bottom lines are punchy one-liners that capture the tension
- TechnicalDetail collapsible pattern works well for dual audience (non-technical readers + security practitioners)
- Benefits-first is now the series standard

## Open Questions

- Should DeepSeek get a full assessment or just a section in the spine?
- What's the 202X prediction? Physical AI (robotics)? Financial AI? Both?
- Should the series have a shared "methodology" section explaining the assessment framework?
- Cross-linking between MCP piece and existing `/ai-journey/claude/mcp` (educational) — worth adding a callout?
- Rename insights doc from `2026-02-openclaw-risk-assessment.md` to `2026-02-adoption-curve-series.md`?
