# L35 (Rigid Body Physics) &#8212; Integration Progress

**Status:** FULLY CLOSED &#8212; INTEGRATION COMPLETE + QA-PASS (2026-06-28) &#8212; 17/17 figures live (4 inline SVG `{9,12,28,29}` + 13 PNG+c35 `{2,3,4,6,7,8,13,14,16,18,19,20,25}`). Live HTML 271,469 bytes; U+2014=32 held; figure/figcaption/</figure>=17, img=13, svg=17; #667eea/#764ba2/color222=0; table-wrap 9; mermaid 1/10. All 13 PNG committed FIRST-match-only via `edit_file` dryRun&#8594;commit&#8594;`get_file_info`, byte deltas matched projection exactly. L33 overlay-margin fix baked into every PNG figure; shared `main.css` untouched. #18 overlay confirmed mapped to actual geometry (no swap). Browser QA PASS (live-pixel @380/900 dark+light, Claude-side Chromium 1194/Playwright, 4 configs, 0 defects, 0 live-HTML edits). STAGED_BLOCKS.txt may be left in place or removed via bridge os.remove. Blender TRUE-PRISTINE (HTML-only integration + QA, no bridge work). Next lesson: L36 (Character Modeling Workflow).
**Prior phases:** planning/triage + baseline COMPLETE 2026-06-28 &#183; Phase-0 modernize COMPLETE 2026-06-28 &#183; SVG batch COMPLETE 2026-06-28 &#183; PNG Batch A {2,3,4,6,7} + B {8,13,14,16,18} + C {19,20,25} COMPLETE 2026-06-28 (all 13 base renders) &#183; INTEGRATION COMPLETE 2026-06-28.
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

> **PHASE-0 CLOSE (2026-06-28):** DONE. Live md5 `729db28747fcf58af80868f3b16a0909`, **196,427 bytes**. Mermaid init border `#667eea`&#8594;`#888888`; 10 mermaid `style A fill` `#667eea`&#8594;`#3a3a3a` (KEEP+neutralize, L34 mirror, mermaid LIVE). Gradient cards = **3** (not 1 as first estimate: intro "What You'll Learn", project "What You'll Create", closer "Congratulations") &#8594; all neutralized `linear-gradient(...)`&#8594;`background: #2a2a2a`, `color:white` text KEPT (14 instances, intentional, L34 convention). All 9 tables wrapped `<div class="table-wrap"><table ...; min-width: max-content;">...</table></div>`. Invariants verified: #667eea/#764ba2/linear-gradient=0; U+2014=32 (preserved); U+2192=53; jsdelivr=1; class="mermaid"=10; table-wrap=9; min-width:max-content=9; double-wrap=0; figure/img/svg=0. Applied via 32 `edit_file` commits (newline-anchored close pattern after one double-wrap was caught+reverted). Blender untouched (TRUE-PRISTINE).

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

  > **SVG-BATCH CLOSE (2026-06-28):** DONE. 4 inline `<figure><svg>` committed via `edit_file` dryRun&#8594;commit (unique anchor each, FIRST-match-only). id-prefixes csh/cst/tsg/apd (no collision). Each: root `color="currentColor"`, `role="img"`, `aria-labelledby`, scoped id-prefixed `<style>`, 3px #FF8C00 accent bar, node-internal text #fff/#1a1a1a (theme-safe), em-dash-free caption. cairosvg render-sanity + dark-PNG preview on all 4 pre-commit. Bytes 196,427&#8594;235,217 (+38,790). Invariants verified ALL-PASS: U+2014=32 (preserved), U+2192=53, #667eea/#764ba2/color222=0, table-wrap 9, min-width:max-content 9, mermaid 1/10, figure/figcaption/svg = 4 each. Blender untouched (TRUE-PRISTINE). Source `.svg` not separately saved (inline-only, mirrors L34 inline figs).
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
| (Phase-0 close) | 196,427 |
| +SVG #9 collision-shapes (csh) | 207,430 |
| +SVG #12 constraints (cst) | 218,620 |
| +SVG #28 summary troubleshooting (tsg) | 228,044 |
| +SVG #29 active-vs-passive (apd) | 235,217 |
| **(SVG-batch close)** | **235,217** |
| +#2 first-simulation | 238,652 |
| +#3 first-simulation | 241,913 |
| +#6 first-simulation | 244,684 |
| +#4 active-vs-passive | 246,761 |
| +#7 physical-properties | 249,355 |
| +#8 physical-properties | 252,266 |
| +#13 constraints | 256,519 |
| +#14 constraints | 259,310 |
| +#16 world-settings | 262,126 |
| +#18 world-settings | 264,049 |
| +#19 practical-examples | 266,736 |
| +#20 practical-examples | 268,693 |
| +#25 optimization | 271,469 |
| **(INTEGRATION close, 13 PNG)** | **271,469** |

> **PNG BATCH A `{2,3,4,6,7}` (2026-06-28):** 5 base PNGs produced/relayed to `images/` (render/produce-only chat; live HTML byte count UNCHANGED at 235,217 &#8212; PNG integration is a later chat). See &#167;5 registry for files/px-boxes. Blender restored TRUE-PRISTINE at batch close.

> **PNG BATCH B `{8,13,14,16,18}` (2026-06-28):** 5 base PNGs produced/relayed to `images/` (render/produce-only chat; live HTML byte count UNCHANGED at 235,217 &#8212; PNG integration is a later chat). See &#167;5 registry for files/px-boxes. Bridge health test PASS pre-render; TRUE-PRISTINE verified between every physics staging + at batch close. NOTE: Blender 5.1.1 RB solver produced ZERO restitution rebound under all tuning (split-impulse on/off, substeps&#8594;300, iters&#8594;100, ground rest 1.0, zero damping) &#8212; #8 built as static apex composite (h=e&#178;&#215;drop: b0.0 rest / b0.5 z2.68 / b0.9 z6.65); #18 stacks posed geometrically (stable aligned vs unstable offset/penetrating). Constraint-properties UI panels (#13 panel-2, #14 panel-2) + #16 full panel built as Blender-style PIL mockups (flat regions, no fake text). All teaching annotations/values/arcs deferred to c35 overlay at integration. Blender bridge restarted once mid-batch (read_factory_settings killed the socket; recovered via manual reconnect + in-place TRUE-PRISTINE rebuild &#8212; switched to in-place teardown thereafter, no further factory reloads).
> **PNG BATCH C `{19,20,25}` (2026-06-28):** 3 base PNGs produced/relayed to `images/` (render/produce-only chat; live HTML byte count UNCHANGED at 235,217). See &#167;5 registry for files/px-boxes. Bridge health test PASS pre-render; in-place TRUE-PRISTINE teardown between figures + at close (no factory reloads, bridge stable throughout). #19 dual-view domino line (top + perspective), #20 bowling 3/4 angled single-view (ball+lane+10-pin triangle, geometric stage), #25 PIL Cache/Bake panel mockup. All annotations/measurements/trajectories deferred to c35 overlay. **ALL 13 L35 PNG base renders now complete (A+B+C); next phase = INTEGRATION.**

## 5. c35 OVERLAY REGISTRY

**Batch A `{2,3,4,6,7}` PNGs PRODUCED 2026-06-28** (render/produce-only; on-disk base renders relayed to `images/`, pixel boxes verified == intended c35 box. Overlay callouts deferred to INTEGRATION chat). All teaching annotations (numbered circles, Type:Active/Passive labels, mass/friction values, arrows) to be added as c35 SVG overlay at integration; base PNGs carry correct legible 3D/UI content only.

| # | file | on-disk px box (== c35 viewBox) | bytes | section | overlay status |
|---|---|---|---|---|---|
| 2 | `images/lesson_35_02_first_simulation_setup.png` | 1920&#215;640 | 280,892 | first-simulation | pending (integration) |
| 3 | `images/lesson_35_03_physics_properties_active.png` | 800&#215;1200 | 8,438 | first-simulation | pending (integration) |
| 4 | `images/lesson_35_04_active_passive_comparison.png` | 1600&#215;800 | 662,985 | active-vs-passive | pending (integration) |
| 6 | `images/lesson_35_06_mass_effect_demo.png` | 1920&#215;640 | 239,224 | first-simulation | pending (integration) |
| 7 | `images/lesson_35_07_friction_comparison.png` | 1800&#215;700 | 348,641 | physical-properties | pending (integration) |

**Batch B `{8,13,14,16,18}` PNGs PRODUCED 2026-06-28** (render/produce-only; on-disk base renders relayed to `images/`, pixel boxes verified == intended c35 box via `Filesystem:get_file_info`. Overlay callouts deferred to INTEGRATION chat). #8 static apex composite (3 balls at physics-derived rebound heights); #13 4-panel 2&#215;2 (P1 rest / P2 PIL constraint-props mockup / P3 displaced 42&#176; / P4 mid-swing); #14 3-panel top-down (P1 closed / P2 PIL hinge-props mockup / P3 open 45&#176;); #16 full PIL Scene-Properties&#8594;Rigid Body World mockup; #18 2-panel (stable aligned stack vs unstable offset/penetrating stack).

| # | file | on-disk px box (== c35 viewBox) | bytes | section | overlay status |
|---|---|---|---|---|---|
| 8 | `images/lesson_35_08_bounciness_demo.png` | 1800&#215;800 | 492,441 | physical-properties | pending (integration) |
| 13 | `images/lesson_35_13_point_constraint_pendulum.png` | 1600&#215;1600 | 678,063 | constraints | pending (integration) |
| 14 | `images/lesson_35_14_hinge_constraint_door.png` | 1920&#215;640 | 210,349 | constraints | pending (integration) |
| 16 | `images/lesson_35_16_world_settings_panel.png` | 800&#215;1200 | 7,483 | world-settings | pending (integration) |
| 18 | `images/lesson_35_18_solver_settings_impact.png` | 1920&#215;800 | 512,640 | world-settings | pending (integration) |

Batch C `{19,20,25}` &#8212; PRODUCED 2026-06-28 (table below).

**Batch C `{19,20,25}` PNGs PRODUCED 2026-06-28** (render/produce-only; on-disk base renders relayed to `images/`, pixel boxes verified == intended c35 box via `Filesystem:get_file_info`. Overlay callouts deferred to INTEGRATION chat). #19 dual-view (left top-down domino line / right perspective 3/4); #20 single 3/4 angled bowling view (orange ball foreground + lane + 10-pin triangle, geometric stage); #25 full PIL Cache/Bake panel mockup (Sim Start/End, Cache Step, Bake button, Disk Cache).

| # | file | on-disk px box (== c35 viewBox) | bytes | section | overlay status |
|---|---|---|---|---|---|
| 19 | `images/lesson_35_19_domino_chain_setup.png` | 1920&#215;800 | 638,435 | practical-examples | pending (integration) |
| 20 | `images/lesson_35_20_bowling_scene_layout.png` | 1920&#215;1080 | 819,358 | practical-examples | pending (integration) |
| 25 | `images/lesson_35_25_baking_process_ui.png` | 800&#215;700 | 4,312 | optimization | pending (integration) |

**ALL 13 L35 PNG base renders complete (Batch A 5 + B 5 + C 3). Next phase = INTEGRATION.**

## 6. FINAL INVARIANT TABLE
_INTEGRATION COMPLETE (2026-06-28); 13 PNG + 4 inline SVG live. Browser QA still pending (separate chat)._

| invariant | count |
|---|---|
| bytes | 271,469 |
| em-dash U+2014 (literal) | 32 (preserved verbatim) |
| U+2192 arrow char | 53 |
| `#667eea` / `#764ba2` | 0 / 0 |
| `color="#222"` | 0 |
| currentColor | 35 |
| `class="table-wrap"` | 9 |
| `min-width: max-content` | 9 |
| `</table></div>` | 9 |
| mermaid jsdelivr / `class="mermaid"` | 1 / 10 |
| `<figure>` / `<figcaption>` / `</figure>` | 17 / 17 / 17 |
| `<img` | 13 |
| `<svg` | 17 (4 inline + 13 overlay) |
| id-prefixes (inline, no collision) | csh, cst, tsg, apd |
| all 13 c35 PNG src present | yes |

**Per-figure placement (all FIRST-match-only, unique `<h4>` anchor):** #2/#3/#6 first-simulation; #4 active-vs-passive; #7/#8 physical-properties; #13/#14 constraints; #16/#18 world-settings; #19/#20 practical-examples; #25 optimization. 4 inline SVG already live: #9 collision-shapes (csh), #12 constraints (cst), #28 summary (tsg), #29 active-vs-passive (apd). #18 overlay labels mapped to ACTUAL rendered geometry (High/green-check LEFT, Low/red-circles RIGHT) per STAGED_BLOCKS note &#8212; confirmed correct at integration, no swap. L33 overlay-margin fix (wrapper `font-size:0` + img `margin:0;vertical-align:top`) baked into all 13. Shared `main.css` untouched. All byte deltas matched projection exactly; U+2014=32 held at every checkpoint.

## 7. QA SECTION
**Live-pixel browser QA @380/900px dark+light &#8212; PASS (2026-06-28, Claude-side real Chromium 1194/Playwright; live HTML + `main.css` + 13 PNGs served on `127.0.0.1:5599` loopback, jsdelivr mermaid swapped for offline stub in the QA COPY ONLY &#183; live file untouched by harness, re-verified **271,469 B / mtime 2026-06-28 13:29:35 unchanged** post-run).**

All 4 configs (380&#215;dark, 380&#215;light, 900&#215;dark, 900&#215;light):
- **0 document horizontal overflow** (scrollWidth===clientWidth every config).
- **13/13 PNG decode** (forced eager+scroll; 0 broken).
- **13/13 overlays register 1:1** on their bitmaps &#8212; worst deviation **0.031px** (dw sub-pixel rounding only; dx/dy/dh = 0.000).
- **17/17 svg non-empty** (4 inline + 13 overlay).
- **4/4 inline SVG `currentColor` inverts** &#8212; dark `rgb(212,212,212)` / light `rgb(51,65,85)`.
- **9/9 `.table-wrap` contain tables** &#8212; @380px 8 scroll internally + 1 fits exactly (scrollW===clientW===298, no clip), 0 doc overflow; @900px 0 need internal scroll.
- **10/10 mermaid divs lay out** (offline stub = harness limit; real render = jsdelivr live).
- **0 pageerrors.**

**Overlay-margin sanity (L33 fix):** HELD on all 13 &#8212; global **max|dy|=0.0000px / max|dh|=0.0000px** (zero vertical drift; L33 defect signature was dy&#8776;&#8722;16px / dh&#8776;+32px). L33 fix markers (wrapper `font-size:0` + img `margin:0;vertical-align:top`) confirmed present in all 13 PNG-figure markup.

**Static pre-check:** all 13 overlay `viewBox`es == on-disk PNG px-boxes 1:1 (registry-matched); all 13 PNG on-disk boxes == &#167;5 registry.

**NO DEFECTS found; 0 live-HTML edits.** Final live-HTML invariants (UTF-8 python3, re-pulled + recounted post-run): bytes 271,469; U+2014 32 (preserved verbatim); U+2192 53; `#667eea`/`#764ba2` 0/0; `color="#222"` 0; currentColor 35; `.table-wrap` 9 / `min-width: max-content` 9 / `</table></div>` 9; mermaid jsdelivr 1 / `class="mermaid"` 10; figure/figcaption/`</figure>` 17/17/17; img 13; svg 17 (4 inline + 13 overlay) &#8212; all match &#167;6 FINAL INVARIANT TABLE exactly. Blender TRUE-PRISTINE (no bridge work during QA). STAGED_BLOCKS.txt may now be removed via bridge `os.remove`.