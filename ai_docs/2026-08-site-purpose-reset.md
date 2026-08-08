# Site Purpose Reset — August 2026

Decision record. Supersedes the May 2026 repositioning's audience and scope
assumptions. Written from a working session on 2026-08-08 after Dave said he'd
"lost the plot and purpose".

## What triggered it

A quarterly SEO audit was about to add four curriculum routes to the sitemap.
The counted shape of the site made the problem visible: **33 of 40 pages were a
course**, and the two `/log` entries — three weeks old — were the only part
matching what Dave actually wanted the site to be. Fixing the sitemap would have
deepened the drift rather than corrected it.

Second signal: `CLAUDE.md` had grown a large Positioning & Voice section with
avoid-lists and a terminology table. That much guard-rail is a symptom — it is
needed when the thing being maintained isn't the thing you'd naturally write.

## The decision

**daveliew.com is a log and a thin About. Nothing else.**

| Question            | Answer                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| What is the site?   | A field log, plus one honest About page. No curriculum, no tabs, no portfolio.                                |
| Who is it for?      | **Future Dave. Others overhear.** Kids and fellow parents are welcome readers but the register never adjusts. |
| What is the spine?  | The four-decade arc — pre-internet → internet → mobile → cloud → AI                                           |
| What's the subject? | Life and human-tech interaction, with raising kids through these shifts as the recurring lens                 |
| Where does work go? | agenticbrewery.ai becomes the professional front; the curriculum moves there                                  |

### Spine, in priority order

Dave's ranking of what's top of mind:

1. **The four decades** — tech eras as the organising structure; each piece sits somewhere on that arc
2. **Raising kids through it** — being a parent across these shifts
3. **Human-tech interaction** — how people and technology change each other

These compose rather than compete: the decades are the frame, parenting is the
recurring lens, human-tech interaction is the standing subject.

### Register

Raw and specific. The existing `/log/what-this-log-is` contract already states
it — "written for future me first" — and that is now the whole site's contract,
not just the log's. No explaining for an audience, no generalising to be useful,
no adjusting tone for reach. `/log/how-old-is-egypt` is the reference piece.

## Why the curriculum can leave without loss

Dave's own answer: **"it was how I learned."** Writing those 33 pages _was_ the
learning; publishing them was incidental. That makes them **finished, not
neglected** — which is the difference between archiving something and abandoning
it. There is no unfinished obligation buried in `/ai-journey`, `/agents`,
`/context-engineering`, or `/vibe-coding`.

## Open questions — not yet decided

1. **Employer disclosure.** The standing global rule is that daveliew.com is
   _the_ sanctioned employer-disclosure surface, and other public sites don't
   name Google unless following its lead. Making agenticbrewery.ai the
   professional front inverts that. Needs a deliberate call before any Google
   mention moves to AB.
2. **Does the résumé actually need a new home?** `github.com/daveliew` is
   already the hiring/professional surface by existing design. AB may be
   duplicating a job that's already covered. Worth checking before migrating.
3. **AB's readiness.** agenticbrewery.ai still ships a default create-next-app
   README. It is currently a thin venture site, not a professional front. The
   curriculum migration is a real project, not a copy-paste.
4. **Migration vs. freeze.** Moving 33 pages to another repo is significantly
   more work than freezing them in place on daveliew.com. The freeze achieves
   the same daveliew.com outcome at a fraction of the cost, and keeps the
   migration available later.

## What this supersedes

- **`CLAUDE.md` Positioning & Voice** — currently states the audience is "peers
  doing product deployment, measurement, and AI adoption work (**not**
  'explorers' or 'learners')". That is now wrong; the reader is future-Dave.
  The section needs rewriting, and will likely shrink substantially.
- **The 2026-08 SEO audit's fix list** — do **not** add `/vibe-coding/fundamentals`
  or `/ai-journey/techniques` to the sitemap; those routes are leaving.
  `/hackathons` and `/teaching` depend on the freeze-vs-migrate call.
  The llms.txt rewrite should describe a log, not a curriculum.
- **Memory `project_daveliew_site`** — "homepage rewrite anchored on /log" is
  confirmed and now has a purpose behind it, not just a layout change.

## Note on the session that produced this

The same session committed `b1879ff`, which pushed the job title "Product
Deployment Engineer at Google gTech Ads (Search+)" across all 13 public
surfaces. That work is correct as far as it goes — the title was stale — but it
pushed the site toward an org-chart identity in the same hours Dave concluded he
wanted an adventurer's one. Worth remembering that the drift was still
accelerating right up to the moment it got named.
