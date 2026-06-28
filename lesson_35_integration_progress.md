# L35 (Rigid Body Physics) &#8212; Integration Progress

**Status:** OPEN (Phase: planning/triage + baseline COMPLETE 2026-06-28). Next phase: Phase-0 modernize.
**Module:** 7 (Advanced Modeling), lesson 8 of module.
**Slug:** `rigid_body_physics` &#183; **File:** `lesson_35_rigid_body_physics.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**SoT docs:** `session.md` head + `lesson_35_image_requirements.md` (roster) + this file.

---

## 1. BASELINE INVARIANT BLOCK (UTF-8 python3, NOT grep &#8212; live file pre-touch)

Pulled from live `lesson_35_rigid_body_physics.html`; created==modified **2026-06-12 12:58:24** (untouched since authoring &#8594; **OLD-GEN cohort**, same as L28&#8211;L34).

| invariant | count |
|---|---|
| bytes | **196,067** |
| em-dash U+2014 (literal) | **32** (all pre-existing prose &#8212; **PRESERVE verbatim**, recount every checkpoint) |
| literal U+00B7 (middot char) | 0 |
| `&#183;` entity | 0 |
| `&#8594;` entity (arrow) | 0 |
| U+2192 arrow char | 53 (pre-existing prose, untouched) |
| `&#8212;` entity (emdash) | 0 |
| `#667eea` | **14** (1 gradient + 13 mermaid `style A fill`) &#8594; MODERNIZE to 0 |
| `#764ba2` | **3** (gradient pair / mermaid) &#8594; MODERNIZE to 0 |
| `color="#222"` | 0 |
| `color:#222` / `color: #222` | 0 |
| currentColor | 0 |
| `<table>` / `</table>` | **9 / 9** (all `width:100%`, unwrapped) &#8594; wrap 9 in `.table-wrap` |
| `.table-wrap` | 0 |
| mermaid jsdelivr import | 1 (head) &#183; `class="mermaid"` divs | **10** (rendered) &#8212; KEEP, neutralize themes |
| `<figure` / `<figcaption` / `</figure>` / `<img` / `<svg` | **0 / 0 / 0 / 0 / 0** (expected; no figures yet) |
| `color: white` / `color:white` | 14 (card/closer/footer text on gradient &#8212; review during modernize) |
| inline `style=` | 463 |

**OLD-GEN vs MODERN verdict: OLD-GEN &#8594; MODERNIZE at Phase 0** (same class as L28&#8211;L34).
Phase-0 actions: (a) `#667eea`/`#764ba2` &#8594; 0 (neutralize gradient card headers/closers to `currentColor`-based, **KEEP + neutralize** the 13 mermaid `style A fill` theme refs per L34 convention &#8212; mermaid stays LIVE, 10 divs); (b) wrap all 9 `<table>` in `<div class="table-wrap">` + add `min-width:max-content` so tables scroll internally not the page (L30/L31 fix); (c) preserve mermaid jsdelivr import + 10 `class="mermaid"` divs; (d) 0 new em-dashes (recount U+2014 == 32 after every commit).

### Section ids (in document order, 11)
1. `understanding-rigid-body`
2. `first-simulation`
3. `active-vs-passive`
4. `physical-properties`
5. `collision-shapes`
6. `constraints`
7. `world-settings`
8. `practical-examples`
9. `optimization`
10. `project`
11. `summary`

Back-link &#8594; `lesson_34_cloth_simulation.html` (1, valid). Next-link &#8594; `lesson_36_character_modeling_workflow.html` (1, valid, L36 confirmed).

---

## 2. ROSTER TRIAGE (from `lesson_35_image_requirements.md`, 30 candidates)

Triage follows the requirements doc's own Production Priority tiers.

- **BUILD = High (7) + Medium (10) = 17 figures.**
  - High: `{2, 3, 4, 9, 12, 16, 29}`
  - Medium: `{6, 7, 8, 13, 14, 18, 19, 20, 25, 28}`
- **DEFER = Lower (13) = `{1, 5, 10, 11, 15, 17, 21, 22, 23, 24, 26, 27, 30}`** (out of scope unless reopened).

### Format split of the 17 BUILD figures
- **Inline SVG (diagrams / infographics / flowcharts) = 4: `{9, 12, 28, 29}`**
  - #9 Collision Shapes Overview (reference chart) &#8594; `collision-shapes`
  - #12 Rigid Body Constraints Types (infographic) &#8594; `constraints`
  - #28 Troubleshooting Guide (flowchart) &#8594; `summary`
  - #29 Active/Passive Decision (decision tree) &#8594; `active-vs-passive`
- **PNG + c35 overlay (screenshots / composites / renders) = 13: `{2, 3, 4, 6, 7, 8, 13, 14, 16, 18, 19, 20, 25}`**
  - #2 First Simulation Setup (3-panel) &#8594; `first-simulation`
  - #3 Physics Properties Panel Active (annotated) &#8594; `first-simulation`
  - #4 Active vs Passive Behavior (side-by-side) &#8594; `active-vs-passive`
  - #6 Mass Effect Demo (3-panel) &#8594; `first-simulation`
  - #7 Friction Values Comparison &#8594; `physical-properties`
  - #8 Bounciness Demo (multi-frame) &#8594; `physical-properties`
  - #13 Point Constraint Pendulum (4-panel) &#8594; `constraints`
  - #14 Hinge Constraint Door (3-panel) &#8594; `constraints`
  - #16 World Settings Panel (annotated) &#8594; `world-settings`
  - #18 Solver Settings Impact (2-panel) &#8594; `world-settings`
  - #19 Domino Chain Setup (dual-view) &#8594; `practical-examples`
  - #20 Bowling Scene Layout (angled) &#8594; `practical-examples`
  - #25 Baking Process UI (annotated) &#8594; `optimization`

### BUILD per-section coverage (placement map)
| section id | BUILD figures | count |
|---|---|---|
| understanding-rigid-body | &#8212; | 0 |
| first-simulation | #2, #3, #6 | 3 |
| active-vs-passive | #4, #29 | 2 |
| physical-properties | #7, #8 | 2 |
| collision-shapes | #9 | 1 |
| constraints | #12, #13, #14 | 3 |
| world-settings | #16, #18 | 2 |
| practical-examples | #19, #20 | 2 |
| optimization | #25 | 1 |
| project | &#8212; | 0 (deferred #26, acceptable per L27) |
| summary | #28 | 1 |

**File naming:** `images/lesson_35_NN_slug.{svg,png}` per requirements convention.

---

## 3. PRODUCTION PLAN (pipeline locked, carry-forward from L34)

Phases: **planning/triage [DONE]** &#8594; Phase-0 modernize &#8594; SVG batch &#8594; PNG batches (&#8804;5 figs/sub-chat) &#8594; INTEGRATION (&#8805;6 figs = own chat) &#8594; browser QA (own chat).

- **Phase 0 (modernize):** neutralize `#667eea`/`#764ba2` &#8594; 0 (KEEP+neutralize 13 mermaid themes, mermaid stays LIVE), wrap 9 tables in `.table-wrap` + `min-width:max-content`. Recount invariants; lock new byte baseline.
- **SVG batch (1 sub-chat):** 4 inline SVG `{9,12,28,29}`, root `color="currentColor"`, id-prefixed per figure. Light+dark safe (no hardcoded `color="#222"`).
- **PNG batches (3 sub-chats, &#8804;5 figs each):**
  - Batch A `{2,3,4,6,7}` (5)
  - Batch B `{8,13,14,16,18}` (5)
  - Batch C `{19,20,25}` (3)
- **INTEGRATION:** 17 &#8805; 6 &#8594; own chat. Bake L33 overlay-margin fix into EVERY PNG figure (wrapper `position:relative;display:inline-block;max-width:100%;font-size:0` + overlaid img `margin:0;vertical-align:top`). NEVER touch shared `main.css`.
- **Browser QA:** own chat, live-pixel @380/900px dark+light.

### Locked rules (this lesson)
- `\\wsl$\` paths only. 0 new em-dashes (`&#183;`/`&#8594;`/`&#8212;` entities); preserve 32 pre-existing U+2014 verbatim, recount every checkpoint.
- `edit_file` dryRun&#8594;commit&#8594;`get_file_info`; FIRST-match-only &#8594; unique anchor per dup target; recount specific invariant after each commit. Verify bytes (`write_file` truncates >~282KB).
- Blender bridge = Blender 5.1 on WINDOWS (os.name=nt); WSL files via `//wsl$/Ubuntu/` UNC. Renders &#8594; Windows tempdir &#8594; Pillow-relay to WSL (direct UNC write truncates to 0 bytes). EEVEE engine string = `BLENDER_EEVEE`. Verify TRUE-PRISTINE before/after each physics staging; bridge health test (render&#8594;move cam 0.5m&#8594;compare md5) before render work.
- Rigid-body bake: use `bpy.context.temp_override(scene=scn, ...)` pattern (cf. L34 cloth bake override) when baking RB world for render frames.
- cairosvg 1:1 pixel-verify before every PNG-overlay commit (overlay viewBox == on-disk px box).
- No Filesystem delete &#8212; purge temps via bridge `os.remove`.
- Tooling: `pip install playwright cairosvg pillow --break-system-packages`; chromium at `/opt/pw-browsers`.
- Warn before auto-compaction; start fresh chat when long.

### Blender state
TRUE-PRISTINE (carried from L34 close, 2026-06-28; no bridge work during L34 integration/QA). Run bridge health test before any L35 render work.

---

## 4. BYTE LADDER
| checkpoint | bytes |
|---|---|
| baseline (live, pre-touch) | 196,067 |
| (Phase-0 close) | _pending_ |

## 5. c35 OVERLAY REGISTRY
_pending PNG production._

## 6. FINAL INVARIANT TABLE
_pending close._

## 7. QA SECTION
_pending QA chat._
