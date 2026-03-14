# Agentic Engineering Blog Planning - Extracted Insights

**Source**: ACTIVE folder planning (Jan 2025)
**Status**: Key learnings extracted, workspace purged

---

## Blog Content Schema (Reusable Pattern)

Every technical blog post follows this structure:

```markdown
# [Post Title]

## Introduction
[Hook, context, why this matters]

## [Main Content Sections]
[Teaching + technical depth with collapsible code blocks]

## My Journey with [Topic]
- Why I chose this
- What I tried first
- What went wrong
- The breakthrough
- What I'd do differently
- Where I'm still learning

## Key Takeaways
[3-5 actionable insights]

## Next Steps
[What to read next, related content CTAs]
```

**Why this works**: Combines teaching with vulnerability, technical depth with personal journey.

---

## Technical Decisions Made

### Blog Infrastructure
- **MDX chosen** over JSON or Hybrid approach
- **Shiki** for syntax highlighting (VS Code quality)
- **Data architecture**: JSON metadata + MDX content files
- **URL pattern**: `/blog/[slug]` (implemented)

### Dependencies Added
```bash
@next/mdx @mdx-js/loader @mdx-js/react shiki gray-matter
remark-gfm rehype-pretty-code
```

### Why MDX
- High content volume planned (10+ posts)
- Authoring ergonomics for 2000+ word technical posts
- React component support for interactive elements
- Industry-standard pattern

---

## Content Positioning

### Central Tenet: "Agency > Intelligence" (Karpathy)
- Intelligence (raw capability) matters less than agency (autonomous action)
- Triple meaning: Human agency preserved, Digital agency created, Agency as business

### Fitzgerald Principle Integration
Each post embodies a productive tension:
- Hype vs reality
- Do more vs do less systematically
- Control vs delegation
- Breadth vs depth
- Simplicity vs power

### CTA Strategy
- Posts #1-9: Soft "Learn more" CTAs (link to related content)
- Post #10: Explicit coaching CTA (→ Agentic Brewery)

---

## Navigation Learnings

### Mega-menu Consolidation
- Original: ~20+ items across 5 sections (overwhelming)
- Target: 12 items, 4 sections (scannable)
- Added "Agentic Engineering" section

### TOC Architecture Decision
- Start simple (Winborne-style) before complex (ROJ-style)
- Upgrade triggers: 10+ posts, 3+ series, clear hierarchy

---

## Reusable Patterns

### Data-Driven Blog System
1. **Content Layer**: JSON metadata + MDX files
2. **Rendering Layer**: MDX with syntax highlighting
3. **Component Layer**: Reuse existing design system
4. **Navigation**: Mega-menu integration

### Journey Layer Component
Visual representation of learning journey with collapsible sections:
- Why I chose this
- The breakthrough moment
- Ongoing questions

---

## TOC Implementation Learnings

### Two Approaches Compared

| Aspect | Winborne (Simple) | ROJ (Production) |
|--------|-------------------|------------------|
| Lines | ~300 (single component) | ~900+ (11 components) |
| Tracking | Manual scroll events | IntersectionObserver |
| Structure | Flat h2/h3 | Recursive nesting |
| Use case | Small content | Long-form (5000+ words) |

### Key Insight
Start simple, upgrade when performance warrants. IntersectionObserver only needed for very long pages.

### IntersectionObserver Pattern (for reference)
```typescript
const observer = new IntersectionObserver(
  (entries) => {
    const visibleHeadings = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visibleHeadings.length > 0) {
      setActiveId(visibleHeadings[0].target.id);
    }
  },
  { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
);
```

---

*Extracted from ACTIVE folder Jan 2025. Original planning docs deleted per Extract & Purge protocol.*
