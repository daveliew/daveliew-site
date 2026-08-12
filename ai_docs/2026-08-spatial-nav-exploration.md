# Spatial Navigation Exploration — August 2026

Decision-support record. Dave asked (2026-08-13): can visiting the site be reimagined
as a spatial/graph experience — "a sphere or rubik's cube to map all the articles…
because that's how my mind works anyway"?

Method: ultracode workflow, 10 agents (~490k tokens) — 1 corpus inventory, 1 engine
assessment, then 4 independent design concepts (sphere, Rubik's cube, free 3D graph,
contrarian 2D/2.5D) each adversarially critiqued. Raw outputs:
`/private/tmp/claude-501/…/tasks/wvne1clii.output` (session-scratch; this doc is the
durable record).

## The corpus reality (load-bearing facts)

- **30 nodes**: 3 log entries + About (the live surface = 4) + 23 frozen course pages
  - 3 frozen-other. The /agents subtree (9 pages) already left via 308 to agenticbrewery.ai.
- **The era axis is degenerate**: 29 of 30 nodes are AI-era. The four-decade arc is
  declared spine, not written corpus. Any layout using era shows four nearly-empty bands.
- **Axes with real discriminating power**: kind (live vs frozen — the 33-of-40 story
  as a data split) and lens (kids/craft/career/meta/human-tech).
- **41 edges, but only ~6 are semantically real** cross-links; 20 are course section
  membership. The graph is hub-and-spoke around three frozen section landings, with
  `thirty-three-of-forty` as the natural bridge node (it is literally a node about
  the other 26).

## The engine reality (topic-map-explorer)

- Clean seam: `MapGraph` (layout output) separates a pure deterministic force layout
  from an SVG renderer. Extending the **layout** to 3D ≈ one day (add z, reinterpret
  tier bands as shells/planes). The **renderer** is a rewrite regardless — SVG shares
  no code path with WebGL. Verdict: new component against the same data contract;
  a 3D renderer must be a sibling entry point so 2D consumers never pull WebGL weight.
- Reusable as-is: data model, config-injection pattern, prerequisite-chain BFS,
  HTML overlay panel/legend/tooltip, `?topic=` deep-link pattern.

## Four concepts, four critiques

| Concept                              | Form                                                                | Bundle  | Build     | Critique                |
| ------------------------------------ | ------------------------------------------------------------------- | ------- | --------- | ----------------------- |
| **Planisphere** (sphere, inside-out) | Star chart you look out from; azimuth=date, altitude=era, Canvas 2D | ~12 KB  | 6–9 days  | **viable-with-changes** |
| Twenty-Seven Cells (Rubik's cube)    | 3×3×3 CSS-3D lattice, era×lens×speed                                | ~18 KB  | 5–6 days  | **kill**                |
| Nightfield (free 3D graph)           | r3f orbit through force-directed constellation                      | ~165 KB | 7–10 days | **kill**                |
| The Field Map (contrarian 2.5D)      | Plan-view SVG terrain, semantic zoom, parallax depth=aliveness      | ~15 KB  | 5–7 days  | **kill**                |

### Why three died — the convergent kill reasons

1. **Every concept's visual mass is the frozen course.** 26 of 30 nodes are pages the
   reset (2026-08-08) explicitly rules "do not extend, re-link, or audit" — and which
   the reset doc flags for possible migration to agenticbrewery.ai (/agents already
   left). A map drawn around a landmass being carted off-site. Without the frozen
   district the corpus is 4 nodes — chrome, not a map.
2. **Navigation value is negative.** Every dimension the spatial views encode (date,
   kind, lens) appears losslessly in one list row today. The list shows the latest
   entry AND the next several with zero interaction; every spatial view is strictly
   slower to every article, for both declared readers.
3. **It re-enacts 33-of-40.** Days of structure-building displacing writing, on a
   corpus of three entries — the exact failure mode the site's flagship note documents.
   Consumer-first rule: a layer shipped before its consumer exists.
4. **Premature ontology.** Fixed axes (era×lens×speed) imposed on 3 entries, before any
   natural cluster has voted. The cube was worst: "frozen" as a speed value makes ~⅓
   of its lattice _permanently unfillable_ — emptiness that reads broken, not young.

### The survivor: Planisphere, but later

Inside-out celestial sphere — you stand where Dave stands and look out at what he has
logged. Canvas 2D, zero new dependencies, ~12 KB, layout as a pure build-time function
of MDX meta (no force sim). Newest entry pulsing in studio-lime; constellation lines
are the refs; the frozen course is a single soft glow below the horizon (not 26 stars —
honouring the freeze); the empty era bands render as **visible absence** — the declared
four-decade spine drawn as unwritten sky. "The empty sky is the to-do list."

Required changes before it's buildable:

- **Fix the double-booked altitude axis**: as specced, altitude = era AND older entries
  drop a band with age — aging entries would migrate into eras they aren't. Pick one
  (altitude = era, honestly; recency stays in magnitude/pulse only).
- **Threshold: ~15–20 live stars** (~3 months of weekly entries). Below that the sky
  reads broken-or-precious. Writing fixes for free what build days cannot.
- **Trial at /sky first**, list homepage unregressed; promote only on demonstrated use.
- Version the layout function in any shareable gaze hash, or drop shareable gaze.
- Keep lens field optional until ~15 entries reveal real clusters — no closed enum yet.

## Standing rule adopted (from the contrarian's analysis)

Free 3D navigation has failed every usability generation since VRML, always for the
same reason: it adds camera freedom without adding a dimension of meaning, and charges
for it in occlusion, illegible text, and disorientation. Every spatial UI that won
(Maps, Figma, Miro, Obsidian canvas) is plan-view 2D with semantic zoom. **"Spatial"
need not mean "3D"** — depth is an attribute (the Planisphere's FOV, the Field Map's
parallax), never a joystick. Any future spatial UI on any Dave property starts from
this rule.

## Salvage worth shipping now (independent of any map)

1. **Metadata accretion** (~1–2 h): optional `lens` (free string for now) and `refs`
   (slugs this entry builds on) in the typed MDX meta + backfill 3 entries + pre-deploy
   validation. Seconds per future entry; makes ANY future visualization a rendering
   problem instead of a retrofit. All four critiques independently recommended this.
2. **"Builds on" footers** (~1 h): render `refs` as prose links on log entries —
   hand-written connection sentences are content in the site's register, zero KB.
3. **URL-resolution pre-deploy check** (~1 h): every internally linked URL must resolve
   to a real route — valuable this week regardless (the /agents redirect proved it).
4. _(Optional, private)_: build-time census printout in pre-deploy — which lens/era
   combinations are filling. The "empty cells are a writing prompt", delivered to the
   only reader who needs it, at commit time, with zero visitor-facing UI.

## Where the frozen corpus's spatial home actually is

agenticbrewery.ai, after the migration the reset doc already contemplates. A 26-node
curriculum that _wants an audience_ is exactly what the topic-map-explorer engine (2D,
tier-banded, already built) renders well. That decision belongs to the AB open-questions
session, not this repo.

## Decision state

- Explored: yes (this doc). Built: nothing — deliberate.
- Re-linking frozen pages in any visitor-facing view: **requires Dave's explicit yes**
  (reverses the reset clause). Default: don't; frozen appears only as the
  below-horizon glow if/when the sky ships.
- Revisit trigger: **~15 live log entries** (≈ mid-November 2026 at weekly cadence)
  → decide on building Planisphere Cut 1 at /sky.
