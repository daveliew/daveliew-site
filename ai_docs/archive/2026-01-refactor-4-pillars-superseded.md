# daveliew.com Refactor: 4 Pillars

**Created:** 2026-01-28
**Status:** Planning
**Priority:** After UB×SIM workshop

## Goal

Simplify daveliew.com from 8+ sections to 4 focused pillars for better SEO and clarity.

**Core identity:** AI practitioner building in public

## The 4 Pillars

### 1. Teaching `/teaching` or `/workshops`
- **Purpose:** Credibility through education
- **SEO:** "vibe coding workshop singapore", "AI workshop singapore"
- **Content:**
  - Workshops listing (UB×SIM, Rafflesian AI, RBN)
  - Vibe coding handout (generic, reusable)
  - Fundamentals demos
- **Migrate from:** `/vibe-coding/*`

### 2. Hackathons `/hackathons`
- **Purpose:** Proof of building ability
- **SEO:** "AI hackathon singapore", "hackathon projects"
- **Content:**
  - Hackathon adventures/stories
  - Project showcases
  - Lessons learned
- **Migrate from:** `/laboratory` (partial)

### 3. AI Skill Tree `/ai-journey`
- **Purpose:** Learning journey, skill progression
- **SEO:** "learn AI development", "AI learning path"
- **Content:**
  - Overview/roadmap
  - Techniques (prompt engineering, RAG, tool use)
  - Claude-specific content
- **Keep:** `/ai-journey/*`
- **Merge in:** `/context-engineering/*`

### 4. Voice Agents `/voice-agents`
- **Purpose:** Specialization showcase
- **SEO:** "voice agents singapore", "ElevenLabs developer", "conversational AI"
- **Content:**
  - What are voice agents
  - Case studies / demos
  - Technical approach
- **Migrate from:** `/agents/*` (voice-focused only)

## Routes to Remove/Fold

| Route | Action | Destination |
|-------|--------|-------------|
| `/philosophy` | Fold into | `/about` |
| `/laboratory` | Becomes | `/hackathons` |
| `/context-engineering/*` | Merge into | `/ai-journey/techniques/` |
| `/agents/*` (non-voice) | Remove or archive | - |

## New Nav Structure

```
Home | AI Journey | Voice Agents | Teaching | Hackathons | About
```

## Implementation Phases

### Phase 1: Audit & Plan
- [ ] Audit all existing content
- [ ] Identify content to keep vs remove
- [ ] Map URL redirects needed

### Phase 2: Create New Structure
- [ ] Create `/hackathons` route
- [ ] Create `/voice-agents` route (or elevate from /agents)
- [ ] Add `/workshops` or `/teaching` listing page
- [ ] Update nav

### Phase 3: Migrate Content
- [ ] Move `/vibe-coding` content to `/teaching`
- [ ] Move voice content from `/agents` to `/voice-agents`
- [ ] Merge `/context-engineering` into `/ai-journey`
- [ ] Fold `/philosophy` into `/about`

### Phase 4: Cleanup
- [ ] Set up redirects for old URLs
- [ ] Remove deprecated routes
- [ ] Update internal links
- [ ] Test all pages

### Phase 5: SEO
- [ ] Update meta tags for new structure
- [ ] Submit new sitemap
- [ ] Monitor rankings

## Notes

- Workshop companion sites (ub-sim.vercel.app, etc.) stay separate for client branding
- daveliew.com/teaching links OUT to workshop sites
- Keep handout generic (remove "UB/SIM" hardcoding)

## Estimated Effort

- Phase 1: 1 session
- Phase 2: 1-2 sessions
- Phase 3: 2 sessions
- Phase 4: 1 session
- Phase 5: Ongoing

**Total: ~5-6 sessions**
