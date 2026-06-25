# Lesson 27 &#183; Basic Character Animation &#8212; Integration Progress (SOURCE OF TRUTH)

**Lesson:** `lesson_27_basic_character_animation.html` &#183; Module 6, lesson 4 of 4 (final lesson of Module 6 &#183; Introduction to Animation) &#183; final lesson of the Introduction Course (Modules 1&#8211;6, 27 lessons).
**Slug:** `basic_character_animation` (confirmed from `curriculum_overview.md`).
**Status:** PLAN-LOCKED (this chat). No figures produced yet. PRODUCTION not started.
**Plan-lock date:** 2026-06-24.

---

## Current state

- L26 (Graph Editor Essentials) FULLY CLOSED (25/25 + QA PASS). No active lesson before this plan-lock.
- L27 plan-lock complete this chat: title + slug confirmed, HTML existence + `get_file_info` confirmed, invariant baseline captured, all 10 placement-target section IDs confirmed present verbatim, roster resolved, format split resolved, this doc created, `session.md` set to L27 ACTIVE.
- **Blender: TRUE-PRISTINE** (carried from L26 close; no bridge work this chat). PRODUCTION will need Blender for the 14 PNG figures (Pose Mode / armature scene staging) &#8212; verify TRUE-PRISTINE before + after any keyed/rigged staging, same cadence as L25.
- Next step: fresh chat for SVG PRODUCTION (pilot first, then batches of 3).

---

## Roster (build-now = High + Medium; defer Lower)

**Build-now: 20 figures** (High 8 + Medium 12).
**Deferred: 10 Lower** &#8212; out of scope unless reopened.

### High priority (8) &#8212; all build-now
- #12 Walk Cycle Four Key Poses (PNG)
- #4 IK vs FK Comparison (SVG)
- #8 Center of Gravity and Balance (PNG)
- #18 Walk Cycle Contact Pose Tutorial (PNG)
- #19 Walk Cycle Passing Pose Tutorial (PNG)
- #15 Walk Cycle Timing Chart (SVG)
- #2 Armature Hierarchy Visualization (SVG)
- #22 Walk Cycle Problem Troubleshooting Guide (PNG)

### Medium priority (12) &#8212; all build-now
- #1 Character Animation vs Object Animation Comparison (PNG)
- #5 Pose Mode Interface Overview (PNG)
- #7 Line of Action Examples (SVG)
- #10 Silhouette Test Examples (SVG)
- #11 Twinning Examples (PNG)
- #13 Walk Cycle Body Mechanics Diagram (PNG)
- #16 Arm Swing Oppositional Pattern (SVG)
- #20 Root Motion Visualization (PNG)
- #21 Graph Editor Curves for Walk Cycle (PNG)
- #23 Personality Walk Variations (PNG)
- #3 Bone Anatomy Components (PNG)
- #6 Bone Selection Methods (PNG)

### Lower priority (10) &#8212; DEFERRED (out of scope unless reopened)
- #9 Contrapposto Stance Breakdown (PNG)
- #14 Foot Roll Sequence (SVG)
- #17 Wave Animation Key Poses (PNG)
- #24 Facial Animation Phoneme Chart (SVG)
- #25 X-Ray Mode and Display Options (PNG)
- #26 Pose Mode Tools Panel (PNG)
- #27 Keyframe Insertion Menu (PNG)
- #28 Dope Sheet with Character Animation (PNG)
- #29 Character Animation Workflow Diagram (SVG) &#8212; NOTE: an existing `<div class="mermaid">` workflow graph already lives in this section; #29 stays deferred and the mermaid diagram stays as-is.
- #30 Breakdown Poses in Walk Cycle (PNG)

**OPEN FLAG for Ray:** #17 (Wave Animation Key Poses) is the ONLY mapped figure for the `first-animation` section, yet it falls in Lower priority and is therefore deferred under the strict High+Medium rule. The `first-animation` section will have zero figures at close. If that section should carry a visual, promote #17 into build-now before PRODUCTION starts. Left deferred for now per the locked roster rule (one decision, no auto-promote).

---

## Format split (build-now 20)

Split taken verbatim from the requirements-doc **File Naming Convention** block (`.svg` vs `.png` extension per image number).

- **Inline SVG (6):** #2, #4, #7, #10, #15, #16
- **PNG w/ c{N} overlay (14):** #1, #3, #5, #6, #8, #11, #12, #13, #18, #19, #20, #21, #22, #23

PRODUCTION shape (mirrors L24/L25/L26):
- SVG chat(s): 6 inline SVGs &#8212; pilot first, then batches of 3. 6 figures &#8805; 5 &#8594; sub-chat split allowed per production phase.
- PNG chat(s): 14 PNG renders/captures &#8212; Pose Mode / armature scene staging via Blender bridge; cairosvg pixel-verify each overlay Claude-side before commit (LD19).
- INTEGRATION in its OWN chat (20 figures &#8805; 6).

---

## Placement-target section IDs (all confirmed present verbatim, each &times;1)

| Section ID | Present | Build-now figures mapped here |
|---|---|---|
| `character-animation-intro` | yes | #1 (#29 deferred) |
| `armatures-bones` | yes | #2, #3, #4 |
| `pose-mode` | yes | #5, #6 (#25, #27, #26 deferred) |
| `posing-principles` | yes | #7, #8, #10, #11 (#9 deferred) |
| `first-animation` | yes | none build-now (#17 deferred &#8212; see OPEN FLAG) |
| `walk-cycle-theory` | yes | #12, #13, #16 (#14 deferred), #15 |
| `walk-cycle-project` | yes | #18, #19 (#28 deferred) |
| `walk-cycle-refinement` | yes | #20, #21, #22 (#30 deferred) |
| `variations` | yes | #23 |
| `beyond-basics` | yes | none build-now (#24 deferred) |

---

## Placement map (build-now, from requirements doc "Image Placement Suggestions")

- #1 &#8594; `character-animation-intro`, after "What Makes Character Animation Different" heading.
- #2 &#8594; `armatures-bones`, after "What is an Armature?" heading.
- #3 &#8594; `armatures-bones`, within "Bone Anatomy in Blender" card.
- #4 &#8594; `armatures-bones`, within "IK vs FK" card.
- #5 &#8594; `pose-mode`, after "Entering and Exiting Pose Mode" heading.
- #6 &#8594; `pose-mode`, within "Selecting Bones" card.
- #7 &#8594; `posing-principles`, within "The Line of Action" card.
- #8 &#8594; `posing-principles`, within "Weight and Balance" card.
- #10 &#8594; `posing-principles`, within "Silhouette and Clarity" card.
- #11 &#8594; `posing-principles`, within "Twinning and Breaking Symmetry" card.
- #12 &#8594; `walk-cycle-theory`, within "The Four Key Poses" card.
- #13 &#8594; `walk-cycle-theory`, within "Body Mechanics in Walking" card.
- #16 &#8594; `walk-cycle-theory`, within "Arm Swing" card.
- #15 &#8594; `walk-cycle-theory`, within "Walk Cycle Timing" card.
- #18 &#8594; `walk-cycle-project`, within "Phase 1: First Contact Pose" card.
- #19 &#8594; `walk-cycle-project`, within "Phase 2: Passing Pose" card.
- #20 &#8594; `walk-cycle-refinement`, within "Fixing Foot Slide" card.
- #21 &#8594; `walk-cycle-refinement`, within "Graph Editor Polish" card.
- #22 &#8594; `walk-cycle-refinement`, within "Common Walk Cycle Problems" card.
- #23 &#8594; `variations`, within "Personality Through Walk" card.

Exact anchor strings (card open lines, heading lines, anchor uniqueness extensions) are resolved at INTEGRATION, not now. Several placements are "within a card" &#8594; expect the deeper-indent figure variant (col 20 figure / col 24 content) per LD11; confirm per-figure against the actual card open depth at INTEGRATION.

---

## id-prefix registry

**Inline-SVG id prefixes** (one unique prefix per SVG, per style-guide header rule; assigned at PRODUCTION, recorded here when locked):
- #2 Armature Hierarchy &#8212; prefix TBD (proposed `ah`)
- #4 IK vs FK &#8212; prefix `ik` LOCKED (PRODUCED 2026-06-24, `lesson_27_04_ik_vs_fk_comparison.svg`, 6,423 bytes, cairosvg-verified light + dark)
- #7 Line of Action &#8212; prefix TBD (proposed `la`)
- #10 Silhouette Test &#8212; prefix TBD (proposed `st`)
- #15 Walk Cycle Timing Chart &#8212; prefix TBD (proposed `tc`)
- #16 Arm Swing Oppositional &#8212; prefix TBD (proposed `as`)

**PNG overlay c{N}-* registries** (one `c{N}-*` namespace per PNG overlay, per LD10; assigned at INTEGRATION):
- #1, #3, #5, #6, #8, #11, #12, #13, #18, #19, #20, #21, #22, #23 &#8212; `c1-*`, `c3-*`, `c5-*`, `c6-*`, `c8-*`, `c11-*`, `c12-*`, `c13-*`, `c18-*`, `c19-*`, `c20-*`, `c21-*`, `c22-*`, `c23-*` respectively. Geometry coordinates locked at INTEGRATION after each PNG's pixel dimensions are known.

---

## Invariant baseline (captured this chat, UTF-8 Python on Claude-side copy)

Source: `lesson_27_basic_character_animation.html`, `get_file_info` size 190,010 bytes, modified Fri Jun 12 2026.

| Invariant | Baseline |
|---|---|
| bytes | 190,010 |
| `<figure` | 0 |
| `<figcaption` | 0 |
| `<img` | 0 |
| `<svg` | 0 |
| `mermaid` | 5 |
| em-dash U+2014 | 72 |
| `color="#222"` | 0 |

**mermaid = 5 note:** the existing lesson ships one rendered workflow diagram as `<div class="mermaid">` plus its CDN-import + `mermaid.initialize` harness lines (5 string hits total, 1 rendered diagram). This is CSS/JS-harness noise of the same kind seen in L21 (2), L26 (4); it is NOT a figure and is preserved verbatim. Do NOT treat the mermaid count as a figure-count signal.

**em-dash U+2014 = 72 note:** all 72 are pre-existing literal em-dashes in the shipped lesson prose. Preserve every one verbatim; add zero new em-dashes (use `&#183;`). Re-verify the count is still 72 at EVERY checkpoint (after each commit at INTEGRATION, and at close).

---

## Projected close target (build-now 20)

20 build-now = 6 inline SVG + 14 PNG-with-overlay. Each PNG figure adds 1 `<img>` and 1 overlay `<svg>`; each inline SVG adds 1 `<svg>`. Each figure adds 1 `<figure>` + 1 `<figcaption>`.

| Invariant | Close target | Derivation |
|---|---|---|
| `<figure` | 20 | one per build-now figure |
| `<figcaption` | 20 | one per build-now figure |
| `<img` | 14 | one per PNG figure |
| `<svg` | 20 | 6 inline + 14 overlay |
| `mermaid` | 5 | unchanged (harness noise preserved) |
| em-dash U+2014 | 72 | unchanged (no new em-dashes; all pre-existing preserved) |
| `color="#222"` | 0 | inlined SVG roots stripped per LD12; remains 0 |
| bytes | grows | final value recorded at close |

---

## Locked rules cross-reference (carry forward, unchanged)

- `\\wsl$\` paths ONLY; never `\\wsl.localhost\`. Chrome can't use `wsl$` as a `file:` host &#8212; QA via `http://localhost:5504/<lesson>.html` or headless Chromium/Playwright Claude-side.
- 0 new em-dashes (use `&#183;`); preserve all pre-existing U+2014 verbatim; re-verify count (72) at every checkpoint.
- `Filesystem:write_file` for new files / full overwrites (never `create_file`); `edit_file` dryRun&#8594;commit&#8594;`get_file_info` per commit at INTEGRATION.
- `blender:execute_blender_code` lowercase only.
- cairosvg pixel-verify Claude-side before EVERY PNG-overlay commit (LD19).
- No Filesystem delete tool &#8212; remove temps via Blender bridge `os.remove`.
- STYLE: `IMAGE_STYLE_GUIDE.md` v6 governs (LD1&#8211;21), NOT 4.0-era prompt hexes. Axis X=`#E63946` / Y=`#4ADE80` / Z=`#4A9EFF`; brand orange `#FF6B00`; no cyan. The requirements-doc prompts use legacy hexes (`#2b2b2b`, `#00ffff` cyan, `#ff8c00`); v6 palette OVERRIDES those at PRODUCTION.
- Capture Blender 5.1.1.
- Color-dependent renders: F12 `render.render` under Standard view transform (LD17); plain-grey geometry + UI-chrome captures exempt.
- INTEGRATION in its own chat (&#8805;6 figures); sub-chat splits at &#8805;5 figures per production phase.
- Ray communicates tersely, one version no alternatives; warn before context gets long rather than allowing auto-compaction.

---

## Status log

- **2026-06-24 &#8212; PLAN-LOCK (this chat).** Read order completed: `session.md` &#8594; `curriculum_overview.md` (L27 = "Basic Character Animation", slug `basic_character_animation`, Module 6 lesson 4 of 4) &#8594; `IMAGE_STYLE_GUIDE.md` v6 (LD1&#8211;21) &#8594; `lesson_27_image_requirements.md`. Confirmed HTML exists (`get_file_info` 190,010 bytes). Captured invariant baseline (figure 0 / figcaption 0 / img 0 / svg 0 / mermaid 5 / em-dash 72 / color222 0). Confirmed all 10 placement-target section IDs present verbatim. Resolved roster (build-now 20 = High 8 + Medium 12; defer 10 Lower). Resolved format split (6 inline SVG `{2,4,7,10,15,16}` + 14 PNG `{1,3,5,6,8,11,12,13,18,19,20,21,22,23}`). Created this progress doc. Set `session.md` &#8594; L27 ACTIVE. OPEN FLAG raised: #17 is the only `first-animation` figure but is Lower/deferred. Next: fresh chat for SVG PRODUCTION (pilot first, then batches of 3).
