# L38 (Weight Painting) — Integration Progress

**File:** `lesson_38_weight_painting.html`
**Slug:** `weight_painting` (CONFIRMED via L37 live next-link)
**Module 7 (Advanced Modeling), lesson 11.**
**Next-pointer after L38:** **L39 (`lesson_39_rigging_essentials.html`, slug `rigging_essentials`)** — CONFIRMED from L38 live next-link `href="lesson_39_rigging_essentials.html"`.
**Back-link:** `lesson_37_armature_and_bones.html` (1, valid).

---

## §PHASE 0 — MODERNIZATION  [DONE 2026-06-29]

OLD-GEN file (same cohort as L28–L37: purple gradient cards + live mermaid + bare tables). Modernized per locked L33–L37 pipeline.

### Baseline invariants (pre-touch, UTF-8 python3 on live file)
| metric | baseline |
|---|---|
| bytes (utf-8, LF) | **242,220** |
| U+2014 em-dash (literal) | **68** (all pre-existing prose — PRESERVE verbatim, recount every checkpoint) |
| U+2013 en-dash (literal) | 0 |
| U+2192 arrow (literal) | 49 (pre-existing prose) |
| U+00B7 middot (literal) | 0 |
| `&#8212;`/`&#8594;`/`&#8211;`/`&#183;` entities | 0 / 0 / 0 / 0 |
| `#667eea` | 14 |
| `#764ba2` | 12 |
| `linear-gradient` | 12 |
| `color: white` | 54 (intentional card text) |
| `color="#222"` | 0 |
| `currentColor` | 0 |
| `<figure>` / `<figcaption>` / `</figure>` | 0 / 0 / 0 |
| `<img>` / `<svg>` | 0 / 0 |
| `<table>` | 2 |
| `.table-wrap` / `min-width:max-content` / `</table></div>` | 0 / 0 / 0 |
| `class="mermaid"` | 1 |
| `jsdelivr` | 1 |
| `mermaid.initialize` | 1 |
| `style A fill` | 3 (A=#667eea, E=#FF9800, F=#4CAF50) |
| `lesson_37` link / `lesson_39` link | 1 / 1 |

### Phase-0 edits (17 total, single edit_file dryRun→commit)
1. Mermaid init `primaryBorderColor: '#667eea'` → `'#888888'` (mermaid KEPT LIVE).
2. Mermaid `style A fill:#667eea` → `#3a3a3a`. **E (#FF9800 orange) + F (#4CAF50 green) KEPT** (semantic node colors).
3. 12 gradient cards `linear-gradient(135deg,#667eea 0%,#764ba2 100%)` → `#2a2a2a`; **`color: white` text KEPT** on all. (1 intro card w/ padding+margin variant + 11 section-summary cards, each uniquely anchored by its following `<h3>` heading.)
4. 2 `<table>` wrapped: `<div class="table-wrap"><table style="...; min-width:max-content; ...">` … `</table></div>`. (Table 1 = weight color scale @ understanding-skinning; Table 2 = problem quick-fix @ common-problems.)

### Phase-0 CLOSE invariants (UTF-8 python3 on freshly-written live file) — ALL PASS
| metric | value | note |
|---|---|---|
| bytes (utf-8, LF) | **241,822** | delta −398 from baseline |
| U+2014 literal | **68 HELD** | 0 new |
| U+2013 / U+00B7 literal | 0 / 0 | |
| U+2192 literal | 49 | unchanged |
| `#667eea` / `#764ba2` / `linear-gradient` | **0 / 0 / 0** | neutralized |
| `color: white` | **54 HELD** | intentional, preserved |
| `color="#222"` / `currentColor` | 0 / 0 | |
| `<table>` | 2 | |
| `.table-wrap` / `min-width:max-content` / `</table></div>` | **2 / 2 / 2** | no double-wrap (0) |
| `class="mermaid"` / `jsdelivr` | 1 / 1 | mermaid LIVE |
| `primaryBorderColor: '#888888'` | 1 | |
| `style A fill:#3a3a3a` | 1 | E/F semantic colors KEPT (1/1) |
| `<figure>` / `<img>` / `<svg>` | 0 / 0 / 0 | (pre-SVG-batch) |
| `lesson_37` / `lesson_39` | 1 / 1 | nav intact |

---

## §SECTION LIST (10 sections)
1. `understanding-skinning` — Understanding Skinning and Vertex Weights
2. `binding-armature` — Binding Armature to Mesh
3. `weight-paint-mode` — Weight Paint Mode Interface
4. `automatic-weights` — Automatic Weights and When They Work
5. `painting-techniques` — Manual Weight Painting Techniques
6. `testing-deformation` — Testing and Refining Deformation
7. `common-problems` — Common Weight Painting Problems
8. `advanced-tools` — Advanced Weight Painting Tools
9. `project` — Hands-On Project: Complete Character Weight Painting
10. `summary` — Summary

---

## §ROSTER (30 candidates from lesson_38_image_requirements.md) — TRIAGE APPROVED (2026-06-29)

Priority tiers (from requirements doc):
- **High (8):** #2 weight-color-gradient, #5 weight-paint-interface, #13 gradient-painting-diagram, #9 sharp-crease-problem, #24 problems-quick-reference, #4 binding-process-screenshot, #7 weight-visualization-character, #16 split-screen-workflow.
- **Medium (10):** #1 skinning-fundamentals, #8 auto-weights-comparison, #15 xmirror-demo, #14 elbow-deformation-comparison, #17 shoulder-weight-guide, #20 testing-checklist, #10 volume-loss, #22 weight-transfer-diagram, #25 armature-modifier-settings, #21 blur-brush-before-after.
- **Lower (12):** #3 vertex-weight-example, #6 brush-tools-reference, #11 candy-wrapper, #12 weight-bleeding, #18 leg-hip-zones, #19 finger-strategy, #23 vertex-groups-panel, #26 bone-roll-correction, #27 normalize-operation, #28 clean-weights, #29 project-phase-flowchart, #30 elbow-topology-guide.

Requirements-doc SVG recommendations: {1, 2, 6, 13, 22, 27, 29} strong + {24, 28, 30} candidates.

### TRIAGE DECISION — BUILD 23 / DEFER 7
**BUILD 23** = High 8 `{2,4,5,7,9,13,16,24}` + Medium 10 `{1,8,10,14,15,17,20,21,22,25}` + promoted Lower 5 `{3,6,27,29,30}`.
- Lower promotions justified: **#6** brush-icons + **#27** normalize + **#29** project-flowchart are reqs-doc *strong/candidate SVG* picks (cheap, crisp vector, high teaching value); **#30** elbow-topology is the sole figure for `summary` (topology discussion) and is conceptually distinct from the shoulder/leg zone guides; **#3** is the only plain "what weights look like on a simple arm mesh" base example feeding `understanding-skinning` ahead of the full-character #7.

**DEFER 7** Lower `{11,12,18,19,23,26,28}`:
- **#11 candy-wrapper** + **#12 weight-bleeding** — problem visuals already covered by the #9 crease composite + prose; redundant render cost.
- **#18 leg-hip-zones** — near-duplicate of #17 shoulder-zone guide (same annotated-illustration pattern); #17 carries the "complex blend zone" teaching.
- **#19 finger-strategy** — advanced detail work, prose-sufficient at this lesson level.
- **#23 vertex-groups-panel** + **#26 bone-roll-correction** — UI-discoverable / niche; #25 armature-modifier panel covers the essential modifier UI; bone-roll is L37 territory (already taught there).
- **#28 clean-weights** — math/threshold fully conveyed in prose + the #27 normalize data-viz establishes the before/after value-table pattern.

### FORMAT SPLIT — 9 inline SVG / 14 PNG+c38
**inline SVG (9)** `{1,2,6,13,22,24,27,29,30}` — diagrams / flowcharts / gradient-bar / data-viz / icon+text infographics (no photoreal content):
- #1 skinning flowchart · #2 weight-color gradient bar · #6 brush-tool icon grid · #13 gradient-painting joint diagram · #22 weight-transfer flowchart · #24 problems quick-reference (icon+text grid, monochrome) · #27 normalize before/after value+pie data-viz · #29 project-phase flowchart · #30 elbow edge-loop topology line-diagram.

**PNG+c38 (14)** `{3,4,5,7,8,9,10,14,15,16,17,20,21,25}` — 3D viewport renders + UI-chrome screenshots + deformation composites:
- 3D renders / composites: #3 arm-mesh WP view · #7 character WP view · #8 auto-weights good-vs-bad · #9 sharp-crease 3-panel · #10 volume-loss 2-panel · #14 elbow-deform 2×3 grid · #15 X-mirror demo · #17 shoulder-zone illustration · #20 testing-pose grid (6–9 poses).
- UI-chrome: #4 Ctrl+P bind menu · #5 WP-mode interface overview · #16 split-screen WP+Pose · #21 blur before/after WP view · #25 Armature-modifier panel.

id-prefixes to assign at SVG authoring (one per inline fig): sf(#1) wcg(#2) bti(#6) gpd(#13) wtf(#22) pqr(#24) nrm(#27) ppf(#29) elt(#30).

**Pipeline:** Phase-0 [DONE] → roster triage (BUILD vs DEFER + format split) → SVG batch (one chat, all inline) → PNG batches ≤5/sub-chat (Blender TRUE-PRISTINE before/after each staging; Windows tempdir → Pillow-relay → WSL; opengl viewport; view-inspect every panel pre-write) → integration (own chat, figs ≥6; cairosvg pixel-verify + L33 overlay-margin fix per PNG; FIRST-match anchors; edit_file dryRun→commit→re-copy+recount per fig) → browser QA (own chat; Claude-side Chromium 1194 + Playwright; 127.0.0.1 loopback; 380/900 × dark/light).

**Blender TRUE-PRISTINE** (Phase-0 was HTML-only, no bridge work). Verify before/after any bridge staging in PNG batches.

---

## §SVG BATCH CLOSE  [DONE 2026-06-29]

All 9 inline SVGs committed + verified on the real live file. Each `<svg color="currentColor">`, figcaption `&#8212;`, 0 banned literals, cairosvg pixel-verified, body-text fills use currentColor. Commit anchors are FIRST-match.

### Byte ladder (UTF-8 python3, authoritative)
| step | bytes |
|---|---|
| Phase-0 close | 241,822 |
| +sf +wcg | 249,733 |
| +bti | 255,500 |
| +gpd | 260,429 |
| +wtf | 266,235 |
| +pqr | 272,693 |
| +nrm | 278,196 |
| +ppf | 285,489 |
| +elt (FINAL) | **292,057** |

### Per-figure anchors (9) — prefix · section · anchor · display fig
- **#1 sf** · understanding-skinning · (Figure 1, prior chat)
- **#2 wcg** · understanding-skinning · (Figure 2, prior chat)
- **#6 bti** · weight-paint-mode · (Figure 3, prior chat)
- **#13 gpd** · painting-techniques · (Figure 4, prior chat)
- **#22 wtf** · advanced-tools · (Figure 5, prior chat)
- **#24 pqr** · common-problems @ `<h4>🔍 Fast Problem Lookup</h4>` &#8594; Figure 6
- **#27 nrm** · advanced-tools @ `<h4>Normalize and Clean Tools</h4>` &#8594; Figure 7  **[ANCHOR DEVIATION:** reqs-doc nominally put Normalize in common-problems; the Normalize subsection content lives in advanced-tools, so it landed there.**]**
- **#29 ppf** · project @ `<h3 style="color: white;">🎯 Project Overview</h3>` &#8594; Figure 8  (inserted AFTER the H3; card text untouched, `color: white` held 54).
- **#30 elt** · summary @ `<h4>🔑 Key Takeaways</h4>` &#8594; Figure 9  **[ANCHOR DEVIATION:** reqs-doc "topology discussion" has no literal summary match; #30 is sole summary figure per triage.**]**

### FINAL invariants (UTF-8 python3 on live file) — ALL PASS
| metric | value |
|---|---|
| bytes | **292,057** |
| `<figure>` / `<figcaption>` / `</figure>` / `<svg>` | 9 / 9 / 9 / 9 |
| `<img>` | 0 |
| U+2014 literal | **68 HELD** |
| U+2013 / U+2192 / U+00B7 literal | 0 / 49 / 0 |
| `#667eea` / `#764ba2` / `linear-gradient` | 0 / 0 / 0 |
| `color: white` | **54 HELD** |
| `.table-wrap` / `min-width:max-content` / `</table></div>` | 2 / 2 / 2 |
| `class="mermaid"` / `jsdelivr` | 1 / 1 |
| `lesson_37` / `lesson_39` | 1 / 1 |
| id-prefix roots (sf wcg bti gpd wtf pqr nrm ppf elt, 1 each) | 9 present |

**PNG batch is NEXT** = the 14 PNG+c38 `{3,4,5,7,8,9,10,14,15,16,17,20,21,25}`. Suggested grouping: 3D renders/composites `{3,7,8,9,10,14,15,17,20}` then UI-chrome `{4,5,16,21,25}`, split into ≤5/sub-chat. Overlays deferred to integration.

---

## §PNG BATCH — SUB-CHAT 1 `{3,7,8,9,10}`  [DONE 2026-06-29]

**5/14 PNG base renders produced + relayed to `images/`; overlays deferred to integration. Live HTML UNCHANGED (still 292,057 B — PNG batch is asset production only, no HTML edits).** Bridge health PASS pre-staging; TRUE-PRISTINE verified vs L22 baseline before AND after (3 objs Camera+Cube+Light, 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 armatures / 0 empties / 0 orphans; EEVEE/AgX; 1920x1080@100; fps 24; range 1-250; POINT 1000; lens 50/DoF OFF; Cube origin unhidden). 19 orphan data-blocks purged + all 9 temps removed via os.remove at teardown.

### Reusable assets built this sub-chat (in `L38_stage` collection, torn down at close)
- **arm** — dense-loop tube along +X (elbow x=2.0), 2-bone rig (upper_arm + forearm, .L not needed for arm-only), deterministic smoothstep weights for controllable WP gradient. Feeds #3/#8/#9/#10.
- **human** — simple T-pose humanoid: primitives joined w/ overlapping joints &#8594; voxel remesh 0.05 &#8594; 1 continuous island (10,230 verts); deterministic `upper_arm.L` weights (red core x 0.65-1.45 @ z~0.7, elbow falloff to 2.05, shoulder-chest blend, blue elsewhere). Feeds #7.
- **WP-color pipeline (LOCKED for L38 3D figs):** bake per-vertex weight &#8594; CORNER BYTE_COLOR attr `wpcol` via Blender WP colormap (0.0 blue / 0.25 cyan / 0.5 green / 0.75 yellow / 1.0 red) &#8594; flat **Emission** material (vertex-color &#8594; emission, no light wash-out) &#8594; RENDERED-shading opengl viewport capture &#8594; Windows tempdir &#8594; Pillow relay (optimize) &#8594; WSL `images/`. Standard view_transform during WP renders for TRUE colors (AgX desaturates); restored to AgX at teardown.

### Per-figure results (box == intended c38 box; bg #2b2b2b = (43,43,43); full-decode integrity confirmed on every relayed file)
- **#3** `lesson_38_03_vertex_weight_example.png` · 1920x1080 · 646,872 B · 3/4-angle arm, RENDERED. Verified gradient: x0.16 blue (0,0,255) &#8594; x0.28 cyan &#8594; x0.40 yellow &#8594; x0.50 red &#8594; solid red forearm. Subtle ref-grid slab tried then DROPPED (rendered as solid slab; clean dark bg is on-Style-Guide).
- **#7** `lesson_38_07_weight_visualization_character.png` · 1080x1920 portrait · 601,678 B · front view. upper_arm.L red core @ img x744-984/y576-648, smooth elbow gradient to blue; rest of body blue. Color counts: red 416 / yellow 118 / cyan 61 / blue 11172 (sampled). NOTE: first humanoid attempt was disconnected islands + mislocated arm (z~0.7 not 1.5); fixed by overlapping-joint rebuild + voxel remesh + positional reweight.
- **#8** `lesson_38_08_automatic_weights_comparison.png` · 1920x1080 · 522,621 B · 2-panel good|bad, 4px #ff8c00 divider. LEFT(good) smooth: rich mids (yellow 606/cyan 612/green 82), 0 hard red&#8596;blue transitions. RIGHT(bad) spotty (seed-stable per-vertex noise + hard step): sparse mids, 152 hard red&#8596;blue transitions.
- **#9** `lesson_38_09_sharp_crease_problem.png` · 1920x600 · 274,087 B · 3-panel (rest-smooth / bent sharp-crease SOLID-grey / abrupt-WP), two 4px #ff8c00 dividers. Sharp crease achieved via HARD-STEP weights (1.0 if x&#8805;2.0 else 0.0, no gradient) + 95deg forearm pose-bend &#8594; pinched fold (visually confirmed). Panel 3 WP: red 118 + blue 1305, **0 mid-tones** = abrupt no-gradient transition.
- **#10** `lesson_38_10_volume_loss_problem.png` · 1920x1080 · 98,214 B · 2-panel loss|preserved, 4px #ff8c00 divider, SOLID-grey shaded. LOSS panel = baked-bent arm copy (`arm_loss`, modifiers applied) with joint cross-section verts within 0.9 of elbow lerped 45% toward elbow center &#8594; dramatic thin-waist pinch (visually confirmed). PRESERVED = smooth-weight arm + use_deform_preserve_volume, 110deg. **KEY:** Preserve-Volume modifier flag + smooth-vs-hard weights ALONE did NOT collapse cross-section enough (vertical-thickness metric ~equal); manual joint pinch on a baked copy was required for the dramatic loss. Vertical/horizontal silhouette metrics do NOT capture an in-plane XY bend pinch — visual `view`/screenshot inspection is authoritative per locked rule. SOLID-shading panel bg renders lighter (~62,62,62); PIL-recolored neutral bg &#8594; #2b2b2b for consistency with RENDERED-shaded figs.

### REMAINING PNG (9) — split into ≤5/sub-chat
- 3D renders/composites: `{14,15,17,20}` (next 3D sub-chat).
- UI-chrome: `{4,5,16,21,25}` (own sub-chat).
Reuse the **arm** + **human** asset recipes + WP-color pipeline above. Overlays (c38) deferred to integration.

---

## §PNG BATCH — SUB-CHAT 2 `{14,15,17,20}`  [DONE 2026-06-29]

**9/14 PNG base renders produced + relayed to `images/`; overlays deferred to integration. Live HTML UNCHANGED (still 292,057 B — PNG batch is asset production only, no HTML edits; em-dash U+2014 stays 68 untouched).** Bridge health PASS pre-staging; TRUE-PRISTINE verified vs L22 baseline before AND after (3 objs Camera+Cube+Light, 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 armatures / 0 empties / 0 orphans; EEVEE/AgX; 1920x1080@100; fps 24; range 1-250; POINT 1000; lens 50/DoF OFF; Cube origin unhidden). All temps removed via os.remove at teardown (23 Windows tempdir renders + 2 WSL `_tmp_l38_f14*`); Camera/Light restored to factory transform; view_transform restored Standard→AgX; `L38_stage` collection + all created data purged (orphans_purge clean, 0 orphans).

### Assets used this sub-chat (in `L38_stage`, torn down at close)
- **arm** (fig14): dense-loop tube along +X (1944 verts, 81 rings × 24 seg, r0.45, elbow x=2.0), 2-bone rig upper_arm(0-2)+forearm(2-4), smoothstep weights (forearm ramp x1.6→2.4). **KEY axis fact:** bones point +X so bone-length axis = local **Y**; to BEND (swing) the forearm in the visible X-Z plane, pose-rotate about local **X** (rotating about local Y twists/rolls in place, NOT a bend — cost two iterations to discover). Hard-step weights (1.0 if x≥2.0 else 0.0) → sharp crease.
- **human** (fig15/17/20): overlapping-joint primitives (torso box + head/neck cyl + 2 arms along ±X + 2 legs) → voxel remesh 0.05 → 1 island (5420 verts). For fig20, auto-weighted to an 11-bone rig (hips/spine/neck + upper_arm.L/.R + forearm.L/.R + thigh.L/.R + shin.L/.R) via `parent_set(type='ARMATURE_AUTO')`. **Pose axis fact:** with arms along ±X and legs along −Z, elbow bend = forearm local **X**; knee = shin local X; hip = thigh local X; spine fwd-bend = spine local X; spine twist = spine local Z; arms-up = upper_arm local Z.

### Per-figure results (full-decode integrity confirmed on every relayed file; bg #2b2b2b = (43,43,43))
- **#14** `lesson_38_14_elbow_deformation_comparison.png` · 1920x1440 · 386,363 B · 2 cols (Good|Bad) × 3 rows, cells 960x480. Headers GOOD DEFORMATION (green) | BAD DEFORMATION (red); per-cell green/red borders (6px) + dark caption strips. **R1 Smooth Bend:** good = smooth-weight 90° local-X bend (rounded elbow); bad = hard-step weights 90° → sharp angular crease/pinch. **R2 Volume:** good = smooth weights + `use_deform_preserve_volume` 100°; bad = baked-bent copy `arm_loss` (eval mesh→from_pydata) with elbow-region verts (within 0.9 of elbow (2,0,0)) lerped up to 45% toward elbow center → dramatic thin-waist pinch (per locked KEY: preserve-volume flag alone insufficient). **R3 No Twisting:** 3/4 persp view, 4 longitudinal emission stripes (orange vertex-color band at 4 radial angles) on a 60° bend; good = stripes run straight; bad = baked copy `arm_twist` with progressive forearm-axis rotation (up to 140° over forearm length) → stripes spiral (candy-wrapper). Pixel-verify PASS: all 6 borders correct color, all 6 cells non-empty content, R3 warm-stripe pixels present (~1800 each). Headers use plain text (✓/✗ glyphs were tofu in the PIL font → replaced with words). Visually confirmed on preview-plane screenshot.
- **#15** `lesson_38_15_xmirror_demonstration.png` · 1920x1080 · 127,820 B · 2-panel, cells 960x1080. human T-pose front-view ortho, symmetric upper_arm WP gradient baked BOTH arms (red shoulder x|0.45| → blue elbow |1.15|, smoothstep). LEFT panel "Paint One Side" + white brush-cursor circle over left arm + orange mirror arrow L→R; RIGHT panel "Both Update Automatically" (green). Dotted white mirror axis down each figure center; orange "X-Mirror: ON" badge; "Automatic Mirror Complete" note; cyan ".L/.R bone naming + symmetrical mesh" note. Both arms identical symmetric gradient. Visually confirmed.
- **#17** `lesson_38_17_shoulder_weight_guide.png` · 1200x1200 · 212,437 B · front-3/4 persp on right shoulder/armpit. Zones: solid RED upper_arm/shoulder cap (w=1.0, |x|>0.62 arm), GREEN/YELLOW armpit blend band (w 0.3→0.75 smoothstep, 0.34<x≤0.62 & 1.05<z<1.7), BLUE chest/torso (w=0). Title "Shoulder Weight Zones" + 3 leader-line label boxes (RED upper_arm 1.0 / BLUE chest 0.0 / GREEN-YELLOW blend 0.3-0.7 "most complex"). First weight pass was too green (over-reduced); fixed to solid-red arm. Visually confirmed.
- **#20** `lesson_38_20_testing_checklist_grid.png` · 1920x1440 · 280,577 B · 3×3 grid, cells 640x480, front-3/4 persp, grey SOLID-shaded silhouettes. Title "Weight Paint Testing Checklist" (orange), orange cell borders (4px), green checkmark (drawn lines) top-right each cell, label strip bottom each cell. 9 poses: Elbow Bend 90 / Elbow Bend 180 / Knee Bend / Sitting Pose / Arms Raised / Spine Forward Bend / Spine Twist / Extreme Squat / Reaching Pose — each a distinct rig pose. Visually confirmed all 9 deform + labels.

### Compositing pattern (reused from sub-chat 1, extended)
- Cells rendered individually to Windows tempdir → PIL-loaded, flat bg recolored to #2b2b2b (any near-grey r<52 with |r-g|<6,|g-b|<6) → pasted into grid → PIL borders/headers/captions → saved to Windows tempdir AND relayed (optimize) to WSL `images/` final filename → reopened + `.load()` + pixel-sampled for integrity.
- **Visual-inspection channel:** Claude's `view` cannot reach `\\wsl$\` UNC paths; authoritative visual check = load the composite onto a camera-facing plane (emission-textured) in `L38_stage` + `get_viewport_screenshot` in RENDERED shading. (Pixel-sampling alone missed nothing but the plane-screenshot is the locked authoritative check.)
- **Emission stripe/WP materials** read TRUE flat colors only in RENDERED viewport (MATERIAL preview applies studio HDRI and washes them); keep view_transform=Standard during WP/stripe renders.

### REMAINING PNG (5) — UI-chrome `{4,5,16,21,25}` (LAST sub-chat)
- #4 Ctrl+P bind menu · #5 WP-mode interface overview · #16 split-screen WP+Pose · #21 blur before/after WP view · #25 Armature-modifier panel.
- These are UI-chrome screenshots (Blender interface), likely needing Ray-side manual capture or PIL mockups per the L22/L37 UI-chrome pattern. Overlays (c38) deferred to integration. After this last sub-chat, PNG batch = 14/14 → integration (own chat, figs ≥6).

---

## §PNG BATCH — SUB-CHAT 3 `{4,5,16,21,25}`  [DONE 2026-06-29]

**14/14 PNG base renders COMPLETE + relayed to `images/`; overlays deferred to integration. Live HTML UNCHANGED (still 292,057 B — PNG batch is asset production only, no HTML edits; em-dash U+2014 stays 68 untouched).** Bridge health PASS; TRUE-PRISTINE verified vs L22 baseline before AND after (3 objs Camera+Cube+Light, 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 armatures / 0 empties / 0 orphans; EEVEE/AgX; 1920x1080@100; fps 24; range 1-250; POINT 1000; lens 50/DoF OFF; Cube origin unhidden). 24 orphan data-blocks purged (orphans_purge clean in 1 pass, 0 orphans); 6 Windows tempdir `l38_f*` temps removed via os.remove (f5 human/interface, f21 before/after/composite, f25 panel); no WSL `_tmp_l38*` present; `L38_stage` collection + staging rig/armature/vgroups/modifier all purged; Camera/Light restored to factory transform; view_transform restored Standard→AgX.

### Per-figure results (full-decode integrity confirmed on every relayed file; bg #2b2b2b = (43,43,43); UI-chrome = Ray snip or PIL Blender-style mockup per L22/L37 pattern)
- **#4** `lesson_38_04_binding_process_screenshot.png` · Ray Win+Shift+S snip · 110,934 B · Ctrl+P "Set Parent To" menu with "With Automatic Weights" highlighted + tooltip visible. Visually confirmed.
- **#5** `lesson_38_05_weight_paint_interface.png` · PIL Blender-style mockup · 1920x1080 · full WP-mode UI: header mode/brush/weight 0.750/strength 0.50/radius 35/X-Mirror checked, T-panel Draw active, central WP-colored human w/ brush cursor, Outliner + Tool>VertexGroups upper_arm.L highlighted + Mesh Data Props Assign/Remove/Select/Deselect; bg #2b2b2b; Segoe-substitute font; NO emoji. Visually confirmed.
- **#16** `lesson_38_16_split_screen_workflow.png` · PIL Blender-style two-panel mockup · 1920x1080 · 36,229 B · md5 c4f0c1a7fb16033d1bf895855f0595d2. LEFT 3D-viewport "Weight Paint" editor: WP color-ramp arm (upper_arm.L hot red→blue forearm matching selected group), white brush-cursor ring, T-panel toolbar, header (Weight Paint / Draw / Weight 0.750 / Strength 0.50 / Radius 35 / X Mirror), bottom tag "Vertex Group: upper_arm.L". RIGHT 3D-viewport "Pose Mode" editor: same arm as 2-bone octahedral armature (upper_arm.L + forearm.L) with forearm bent at elbow, rotation arc, header (Pose Mode / Rotate / Global / Auto Key), bottom tag "forearm.L rotated -60 deg" (degree drawn as glyph circle, not Unicode char). 4px #ff8c00 center divider. **Decided mockup over genuine dual-editor snip:** per-area mode assignment is not reliably scriptable through the bridge (mode is per-object, not per-editor), and the arm-bend foreshortens from a front view; mockup matches the #5/#21/#25 visual language and removes the last interactive dependency. Built end-to-end in PIL on Claude side, regenerated deterministically (same md5), landed via Ray download then drop into `images/`, verified md5 match + valid 1920x1080 PNG on copy-back. Visually confirmed.
- **#21** `lesson_38_21_blur_brush_before_after.png` · WP-color pipeline 2-panel · 1920x1080 · 111,169 B · LEFT hard-step weights = sharp blue|red, RIGHT smoothstep = full blue-cyan-green-yellow-red gradient; 4px #ff8c00 divider; bg #2b2b2b. Visually confirmed.
- **#25** `lesson_38_25_armature_modifier_settings.png` · PIL Blender-style mockup · 800x1000 · Armature modifier panel: Object→Armature blue-linked, Bind To→Vertex Groups, Preserve Volume checked + orange highlight box, empty Vertex Group, Multi Modifier unchecked, Bindings; drawn wrench glyph (not emoji); bg #2b2b2b. Visually confirmed.

### KEY FIX LOGGED — EEVEE render bg recolor threshold
EEVEE render bg comes out (114,114,114) NOT <60 — the old r<60 grey-detection threshold left grey panels on the first #21 relay. **Corrected to a channel-spread test:** treat a pixel as recolorable-grey iff (max(r,g,b) − min(r,g,b)) ≤ 14 AND min(r,g,b) ≥ 70, then map → #2b2b2b. Use the spread test, not r<60, for any EEVEE-render bg recolor going forward.

### Transport note (one-off this sub-chat)
Claude→WSL binary relay for #16: `Filesystem:write_file` is text-only (PNG is non-UTF-8, corrupts as a string) and Claude context view truncates >~16 K, so hand-carried base64 chunks corrupt silently above ~2 K (verified: divergence at index 2661 on an 8 K write). Resolution: Claude built the PNG deterministically and presented it for Ray download then drop into `images/`; integrity confirmed by md5 round-trip. Stray transport scratch left in images/ for Ray to delete: `_l38_16.b64`, `_l38_16.p01` (incomplete, unused).

### PNG BATCH 14/14 COMPLETE → NEXT: INTEGRATION
All 14 PNG `{3,4,5,7,8,9,10,14,15,16,17,20,21,25}` produced + relayed. Live HTML still 0 img (integration not started). NEXT: integration (own chat, figs ≥6; cairosvg pixel-verify + L33 overlay-margin fix wrapper font-size:0 + img margin:0;vertical-align:top; FIRST-match anchors; edit_file dryRun→commit→re-copy+UTF-8 recount per fig) → browser QA (Claude-side Chromium 1194 + Playwright; serve live HTML + styles/main.css + PNGs on 127.0.0.1; offline mermaid stub in QA copy ONLY; 380/900 × dark/light; re-verify live bytes 292,057 + invariants).

---

## §INTEGRATION COMPLETE  [DONE 2026-06-29]

**All 23/23 figures live + verified on the real file (9 inline SVG Figs 1–9 + 14 PNG+c38 Figs 10–23).** Integration was HTML-only; Blender TRUE-PRISTINE held throughout (no bridge work beyond final os.remove cleanup).

### FINAL invariants (UTF-8 python3 on live file) — ALL PASS
| metric | value |
|---|---|
| bytes | **323,850** |
| `<figure>` / `<figcaption>` / `</figure>` / `<svg>` | 23 / 23 / 23 / 23 |
| `<img>` | 14 |
| U+2014 literal | **68 HELD** |
| U+2013 / U+2192 / U+00B7 literal (whole-file) | 0 / 49 / 0 |
| `#667eea` / `#764ba2` / `linear-gradient` | 0 / 0 / 0 |
| `color: white` | **54 HELD** |
| `.table-wrap` / `min-width:max-content` / `</table></div>` | 2 / 2 / 2 |
| mermaid `class="mermaid"` / `jsdelivr` | 1 / 1 |
| `lesson_37` / `lesson_39` links | 1 / 1 |

### Full byte ladder (UTF-8 python3, authoritative)
SVG-batch close 292,057 → Figs 10+11 (prior chat) 298,158 → +Fig 12 (#4) 299,744 → +Fig 13 (#25) 301,503 → +Fig 14 (#5) 304,313 → +Fig 15 (#8) 307,151 → +Fig 16 (#17) 308,657 → +Fig 17 (#16) 311,221 → +Fig 18 (#15) 312,459 → +Fig 19 (#14) 313,706 → +Fig 20 (#20) 315,653 → +Fig 21 (#9) 318,349 → +Fig 22 (#10) 321,080 → +Fig 23 (#21) **323,850** (FINAL).

### c38 PNG figure registry (14 figs, display order) — prefix-id `c38f{N}ar` per fig; anchors FIRST-match unique
| Fig | PNG | box | section | anchor |
|---|---|---|---|---|
| 10 | lesson_38_03_vertex_weight_example.png | 1920x1080 | understanding-skinning | (prior chat) |
| 11 | lesson_38_07_weight_visualization_character.png | 1080x1920 | understanding-skinning | (prior chat) |
| 12 | lesson_38_04_binding_process_screenshot.png | 1071x567 | binding-armature | `<h4>✅ Binding with Automatic Weights (Recommended)</h4>` |
| 13 | lesson_38_25_armature_modifier_settings.png | 800x1000 | binding-armature | `<h4>⚙️ Armature Modifier Settings</h4>` |
| 14 | lesson_38_05_weight_paint_interface.png | 1920x1080 | weight-paint-mode | `<h4>🖥️ Interface Overview</h4>` |
| 15 | lesson_38_08_automatic_weights_comparison.png | 1920x1080 | automatic-weights | `<h4>✅ Quality Assessment Workflow</h4>` |
| 16 | lesson_38_17_shoulder_weight_guide.png | 1200x1200 | painting-techniques | `<h4>💡 Body-Part Specific Techniques</h4>` |
| 17 | lesson_38_16_split_screen_workflow.png | 1920x1080 | painting-techniques | `<h4>🎨 Pro-Level Techniques</h4>` |
| 18 | lesson_38_15_xmirror_demonstration.png | 1920x1080 | painting-techniques | `<h4>❌ Avoid These Beginner Errors</h4>` |
| 19 | lesson_38_14_elbow_deformation_comparison.png | 1920x1440 | testing-deformation | `<h4>💡 Refinement Workflow</h4>` |
| 20 | lesson_38_20_testing_checklist_grid.png | 1920x1440 | testing-deformation | `<h4>✅ Complete Testing Checklist</h4>` |
| 21 | lesson_38_09_sharp_crease_problem.png | 1920x600 | common-problems | `<h4>❌ Problem: Sharp Crease at Joint</h4>` |
| 22 | lesson_38_10_volume_loss_problem.png | 1920x1080 | common-problems | `<h4>❌ Problem: Limb Loses Volume When Bent</h4>` |
| 23 | lesson_38_21_blur_brush_before_after.png | 1920x1080 | advanced-tools | `<h4>🎯 Weight-Based Selection</h4>` |

Inline SVG Figs 1–9 (prefix · section): sf/wcg understanding-skinning · bti weight-paint-mode · gpd painting-techniques · wtf/nrm advanced-tools · pqr common-problems · ppf project · elt summary.

### Fig 22 + Fig 23 detail (committed this session)
- **Fig 22** `lesson_38_10_volume_loss_problem.png` (1920x1080) → `<h4>❌ Problem: Limb Loses Volume When Bent</h4>` (common-problems, FIRST-match count==1). 2-panel, NO baked text; baked 4px #ff8c00 divider pixel-verified center x=959. LEFT = bent limb whose joint cross-section collapses into a pinched waist (limb x158–578); RIGHT = bent limb with full rounded preserved joint (limb x1120–1585). Per locked KEY: in-plane XY bend pinch is NOT captured by bbox-height metric (bent distal mass overlaps in projection) — placed by visual crop inspection. c38f22 overlay = red #E04C4C VOLUME LOSS pill + green #4CAF50 VOLUME PRESERVED pill in dark bg, dashed gold (#FFD24D) ring on LEFT pinch (ellipse cx412 cy660), dashed green ring on RIGHT full joint (ellipse cx1452 cy650), #FF8C00 leaders from each pill. cairosvg pixel-verified 1:1. figcaption `&#8212;`/`&#38;` entities (0 literals).
- **Fig 23** `lesson_38_21_blur_brush_before_after.png` (1920x1080) → `<h4>🎯 Weight-Based Selection</h4>` (advanced-tools, FIRST-match count==1). 2-panel, NO baked text; baked 4px #ff8c00 divider center x=959. LEFT = hard blue|red step (before blur), pixel-verified hard edge x≈472; RIGHT = smooth blue→cyan→green→yellow→red gradient (after blur), transition centered x≈1440. c38f23 overlay = red #E04C4C BEFORE: Hard Edge pill + green #4CAF50 AFTER: Blurred pill in dark bg, red dashed ring on LEFT hard edge (ellipse cx472 cy540), gold dashed (#FFD24D) ring on RIGHT smooth gradient (ellipse cx1440 cy540), #FF8C00 leaders. cairosvg pixel-verified 1:1. figcaption `&#8212;`/`&#8594;` entities (0 literals; whole-file U+2192 literal stays 49).

### Cleanup done (2026-06-29)
- Removed via Blender bridge os.remove: `images/_l38_16.b64`, `images/_l38_16.p01`, + 8 stray `*Zone.Identifier` files (incl. lesson_38_16 + several lesson_15_* + sixpanel). 0 Zone.Identifier remaining.

### NEXT
- **Browser QA in its OWN fresh chat:** Claude-side Chromium 1194 + Playwright; serve live HTML + `styles/main.css` + the 14 PNGs on 127.0.0.1; offline mermaid stub in QA copy ONLY (live file untouched); 380/900 × dark/light; verify 0 doc overflow, 14/14 PNG decode, 23/23 overlays register 1:1 (L33 margin fix: wrapper font-size:0 + img margin:0;vertical-align:top, max|dy|=max|dh|=0), 9/9 inline SVG currentColor inverts; re-verify live bytes 323,850 + all invariants unchanged post-run.
- **Next-pointer after L38: L39** (`lesson_39_rigging_essentials.html`, slug `rigging_essentials`, CONFIRMED via live next-link).

---

## §INTEGRATION — IN PROGRESS (checkpoint 2026-06-29)

**Figs 10–14 committed to live HTML. 9 remain (Figs 15–23).** Integration is HTML-only; Blender untouched (TRUE-PRISTINE held).

### Checkpoint update 2026-06-29 (Figs 13 + 14 committed this session)
- Live invariants AFTER Fig 14 (UTF-8 python3) — ALL PASS: bytes **304,313**; figure/figcaption/`</figure>`/svg 14/14/14/14; img 5; U+2014 **68 HELD**; U+2013/U+2192/U+00B7 (whole-file) 0/49/0; color: white 54 HELD; `#667eea`/`#764ba2`/`linear-gradient` 0/0/0.
- Byte ladder: 299,744 (after Fig 12) → +Fig 13 (+1,759) 301,503 → +Fig 14 (+2,810) **304,313**.
- **Fig 13** `lesson_38_25_armature_modifier_settings.png` (800x1000) → anchor `<h4>⚙️ Armature Modifier Settings</h4>` (binding-armature, FIRST-match unique). UI-chrome mockup, already baked (incl. baked orange Preserve-Volume highlight box at x68-758/y220-256 — NOT duplicated). Light c38 overlay = leader from the baked Preserve-Volume row (marker x690 y262) to a 2-line callout pill in the empty lower-panel area (x96 y560 w610 h92) explaining Preserve Volume's role. cairosvg pixel-verified 1:1. figcaption `&#8212;` entity (0 literals).
- **Fig 14** `lesson_38_05_weight_paint_interface.png` (1920x1080) → anchor `<h4>🖥️ Interface Overview</h4>` (weight-paint-mode, FIRST-match unique). UI-chrome mockup, richly baked. Light c38 overlay = 4 zone callouts (Brush settings header → header; Brush toolbar → left Draw icon x44; Active vertex group paints here → red arm gradient ~x900 y470; Pick the group to paint → selected upper_arm.L row ~x1300 y460). No baked-label duplication. cairosvg pixel-verified 1:1. figcaption `&#8212;` entity (0 literals).

### Checkpoint update 2026-06-29 (Fig 15 committed)
- **Fig 15** `lesson_38_08_automatic_weights_comparison.png` (1920x1080) → anchor `<h4>✅ Quality Assessment Workflow</h4>` (automatic-weights, FIRST-match unique, nearest id=automatic-weights). 2-panel comparison; PNG carries ONLY the baked 4px #ff8c00 center divider (x960) + the two color bands — NO baked text labels, so c38 overlay supplies all labels. LEFT band smooth blue→cyan→green→yellow→red gradient (good); RIGHT band spotty/patchy (bad). Overlay = green GOOD pill + red BAD pill (in bg above bands) + leader callout to left blend transition (~x480) + leader callout to right noisy patch (~x1240). cairosvg pixel-verified 1:1. figcaption + body use `&#8212;`/`&#8594;` entities (0 literals). Byte ladder: 304,313 → +Fig 15 (+2,838) **307,151**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 15/15/15/15; img 6; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 16 committed)
- **Fig 16** `lesson_38_17_shoulder_weight_guide.png` (1200x1200) → anchor `<h4>💡 Body-Part Specific Techniques</h4>` (painting-techniques section, FIRST-match unique). PNG is FULLY baked (title "Shoulder Weight Zones" + 3 leader-label boxes: RED upper_arm / BLUE chest-spine / GREEN-YELLOW blend zone, all with text + leaders). NO label duplication — c38 overlay = single thin dashed gold (#FFD24D) highlight ring (ellipse cx498 cy610 rx92 ry135) around the ACTUAL green/yellow blend band (the baked label's "most complex area"), drawing the eye to the geometry the baked label only describes. cairosvg pixel-verified 1:1. figcaption uses `&#8212;` + `&#8211;` (en-dash for 0.3–0.7 range) entities (0 literals; whole-file U+2013 literal stays 0). Byte ladder: 307,151 → +Fig 16 (+1,506) **308,657**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 16/16/16/16; img 7; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 17 committed)
- **Fig 17** `lesson_38_16_split_screen_workflow.png` (1920x1080) → anchor `<h4>🎨 Pro-Level Techniques</h4>` (painting-techniques section, FIRST-match unique). UI-chrome mockup, FULLY baked (both headers Weight Paint | Pose Mode, all toolbar fields, brush cursor, color-ramp arm, posed armature, bottom tags `Vertex Group: upper_arm.L` / `forearm.L rotated -60`). NO baked-label duplication — c38 overlay = 2 thin workflow callouts in the empty mid-canvas ("1. Paint weights in this view" leader to left ramp arm ~x325 y432; "2. Pose-test the deform live" leader to right posed elbow ~x1030 y490) + a dashed gold bridging arrow across the divider (x960) conveying the simultaneous paint→test loop. cairosvg pixel-verified 1:1. figcaption `&#8212;` entity (0 literals). Byte ladder: 308,657 → +Fig 17 (+2,564) **311,221**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 17/17/17/17; img 8; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 18 committed)
- **Fig 18** `lesson_38_15_xmirror_demonstration.png` (1920x1080) → anchor `<h4>❌ Avoid These Beginner Errors</h4>` (painting-techniques section, FIRST-match unique, count==1). FULLY baked (panel titles Paint One Side | Both Update Automatically, white brush cursor, orange L→R mirror arrow, dotted mirror axes, orange X-Mirror:ON badge, .L/.R note, "Automatic Mirror Complete"). NO label duplication — c38 overlay = single thin dashed gold (#FFD24D) highlight ring (ellipse cx1438 cy292 rx205 ry74) straddling the mirror axis on the RIGHT panel, encircling BOTH mirrored arm gradients to emphasize the "both update automatically" payoff the baked labels only describe. cairosvg pixel-verified 1:1 (ring symmetric over both warm arm roots). figcaption `&#8212;` entities + `<code>.L</code>/<code>.R</code>` (0 literals). Byte ladder: 311,221 → +Fig 18 (+1,238) **312,459**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 18/18/18/18; img 9; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 19 committed)
- **Fig 19** `lesson_38_14_elbow_deformation_comparison.png` (1920x1440) → anchor `<h4>💡 Refinement Workflow</h4>` (testing-deformation section, FIRST-match unique, count==1). FULLY baked 2col(Good|Bad)×3row grid (GOOD/BAD DEFORMATION headers, green/red 6px cell borders, per-cell caption strips Smooth-Bend/Sharp-Crease, Volume-Preserved/Volume-Loss, No-Twisting/Twisting). NO label duplication — c38 overlay = single thin dashed gold (#FFD24D) ring (ellipse cx1645 cy778 rx92 ry64) on the R2-BAD thin-waist pinch (pixel-scanned: upper-limb width necks to ~98px min at y≈780 before the joint widens), the subtlest "thin stick limb" tell. cairosvg pixel-verified 1:1. figcaption `&#8212;` entities (0 literals). Byte ladder: 312,459 → +Fig 19 (+1,247) **313,706**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 19/19/19/19; img 10; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 20 committed)
- **Fig 20** `lesson_38_20_testing_checklist_grid.png` (1920x1440) → anchor `<h4>✅ Complete Testing Checklist</h4>` (testing-deformation section, FIRST-match unique, count==1). FULLY baked 3×3 pose grid (title “Weight Paint Testing Checklist”, orange cell borders @ x≈0/640/1280/1920 + y≈0/480/960, green checkmarks top-right of each cell, per-cell labels Elbow-Bend-90/Elbow-Bend-180/Knee-Bend/Sitting-Pose/Arms-Raised/Spine-Forward-Bend/Spine-Twist/Extreme-Squat/Reaching-Pose). NO label duplication — c38 overlay = single thin dashed gold (#FFD24D) ring (ellipse cx613 cy505 rx34 ry30) around the Sitting-Pose cell's baked green check + a short #FF8C00 leader to a compact 2-line callout pill in that cell's empty dark left area (x36 y612 w232 h64: “Tick each pose / once it deforms cleanly”), teaching what the baked ✓ marks signify. Per-fig marker id `c38f20ar`. cairosvg pixel-verified 1:1 (ring centered on the green check, leader clear of all baked labels). figcaption `&#8212;` entities + `&#215;`/`&#38;` (0 literals). Byte ladder: 313,706 → +Fig 20 (+1,947) **315,653**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 20/20/20/20; img 11; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Checkpoint update 2026-06-29 (Fig 21 committed)
- **Fig 21** `lesson_38_09_sharp_crease_problem.png` (1920x600) → anchor `<h4>❌ Problem: Sharp Crease at Joint</h4>` (common-problems section, FIRST-match unique, count==1). 3-panel composite, NO baked text labels; two baked 4px #ff8c00 dividers (pixel-verified centers x=638, x=1279 → panel centers 319/958/1599). Panel 1 = straight limb w/ smooth blue→red weight gradient bar; Panel 2 = grey bent limb pinching into a sharp crease at the joint (grey limb bbox x760–1009, crease at inner elbow ~x968 y372); Panel 3 = bent limb w/ abrupt blue→red weight step (limb bbox x1400–1680, transition ~x1600 y378). c38 overlay supplies ALL labels: 3 two-line panel headers in the dark top band (GREEN #4CAF50 “Smooth weight blend” / RED #E04C4C “Sharp crease at joint” / RED “Abrupt weight step”) + thin dashed gold (#FFD24D) rings on the panel-2 crease (ellipse cx968 cy372) and the panel-3 abrupt step (ellipse cx1600 cy378), each with a short #FF8C00 leader from its header. Per-fig marker id `c38f21ar`. cairosvg pixel-verified 1:1 (rings land on actual geometry, labels clear of limbs). figcaption + body `&#8212;`/`&#8594;` entities (0 literals; whole-file U+2192 literal stays 49). Byte ladder: 315,653 → +Fig 21 (+2,696) **318,349**. Invariants ALL PASS: figure/figcaption/`</figure>`/svg 21/21/21/21; img 12; U+2014 68 HELD; whole-file U+2013/U+2192/U+00B7 0/49/0; color: white 54.

### Live invariants (UTF-8 python3, authoritative, AFTER Fig 12 commit) — ALL PASS
bytes **299,744**; figure/figcaption/`</figure>`/svg 12/12/12/12; img 3; U+2014 **68 HELD**; U+2013/U+2192/U+00B7 (whole-file) 0/49/0; color: white 54 HELD; `#667eea`/`#764ba2`/`linear-gradient` 0/0/0.

### Byte ladder
Figs 10+11 (chat start) 298,158 → +Fig 12 (#4 binding menu, +1,586) **299,744**.

### Fig 12 committed — detail
- **#4** `lesson_38_04_binding_process_screenshot.png` (1071x567) → anchor `<h4>✅ Binding with Automatic Weights (Recommended)</h4>` (binding-armature, FIRST-match unique). UI-chrome: Ctrl+P Set Parent To menu, "With Automatic Weights" baked-highlighted + baked tooltip. Light c38 overlay = thin #FF8C00 accent box on highlighted row (x14 y416 w576 h44) + leader arrow to compact "Use this option" label clear of the baked tooltip; no baked-label duplication. cairosvg pixel-verified 1:1. figcaption uses `&#8212;`/`&#8594;` entities (0 literals).

### LOCKED IDIOM CORRECTION (the continuation brief's "26-space indent" note is STALE for this file)
Live committed PNG-figure idiom (verified by extracting live Fig 10):
- `<figure style="margin:1.5rem 0;text-align:center">` at **20-space** indent
- `<div style="position:relative;display:inline-block;max-width:100%;font-size:0">` at **24-space**
- `<img ... loading="lazy" style="display:block;max-width:100%;height:auto;margin:0;vertical-align:top">` at **28-space**
- `<svg xmlns=... viewBox="0 0 W H" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none">` at **28-space**; overlay inner elements flush at column 0
- `</svg>` 28-space, `</div>` 24-space, `<figcaption style="font-size:0.85rem;opacity:0.75;margin-top:0.4rem;text-align:center;">Figure N &#8212; …</figcaption>` 24-space, `</figure>` 20-space
- **PNG overlays use explicit hex strokes (e.g. #FF8C00), NOT `currentColor`** — currentColor is only the 9 inline SVGs (Figs 1–9). No `color="currentColor"` root attr on PNG overlay svgs.
- edit_file oldText = bare anchor `<h4>…</h4>`; newText = anchor + `\n` + 20-space-indented figure block.

### REMAINING 11 (Figs 13–23) — anchors verified unique FIRST-match + monotonic by doc position; all 12 PNGs copied Claude-side + box-verified
- Fig 13: lesson_38_25_armature_modifier_settings.png (800x1000) → `<h4>⚙️ Armature Modifier Settings</h4>`
- Fig 14: lesson_38_05_weight_paint_interface.png (1920x1080) → `<h4>🖥️ Interface Overview</h4>`
- Fig 15: lesson_38_08_automatic_weights_comparison.png (1920x1080) → `<h4>✅ Quality Assessment Workflow</h4>`
- Fig 16: lesson_38_17_shoulder_weight_guide.png (1200x1200) → `<h4>💡 Body-Part Specific Techniques</h4>`
- Fig 17: lesson_38_16_split_screen_workflow.png (1920x1080) → `<h4>🎨 Pro-Level Techniques</h4>`
- Fig 18: lesson_38_15_xmirror_demonstration.png (1920x1080) → `<h4>❌ Avoid These Beginner Errors</h4>`
- Fig 19: lesson_38_14_elbow_deformation_comparison.png (1920x1440) → `<h4>💡 Refinement Workflow</h4>`
- Fig 20: lesson_38_20_testing_checklist_grid.png (1920x1440) → `<h4>✅ Complete Testing Checklist</h4>`
- Fig 21: lesson_38_09_sharp_crease_problem.png (1920x600) → `<h4>❌ Problem: Sharp Crease at Joint</h4>`
- Fig 22: lesson_38_10_volume_loss_problem.png (1920x1080) → `<h4>❌ Problem: Limb Loses Volume When Bent</h4>`
- Fig 23: lesson_38_21_blur_brush_before_after.png (1920x1080) → `<h4>🎯 Weight-Based Selection</h4>`
Note: many PNGs are already richly baked (labels/dividers/captions); UI-chrome mockups (#5,#16,#25 = Figs 14,17,13) need only a thin highlight callout. Author LIGHT c38 overlays tuned to actual PNG content via visual inspection; do NOT duplicate baked labels. Every PNG figure still carries an overlay svg (svg count climbs 1 per fig).

### Still pending at close
- Delete `images/_l38_16.b64` + `images/_l38_16.p01` + any `*Zone.Identifier` files via Blender bridge `os.remove` (no Filesystem delete tool).
- After all 23 figs: append §INTEGRATION COMPLETE (full c38 registry + per-fig anchors + final byte ladder); update session.md head; next-pointer L39 (`lesson_39_rigging_essentials.html`, slug `rigging_essentials`, CONFIRMED).
- Browser QA in its own chat after integration closes.

---

## §BROWSER QA — PASS (2026-06-29, own chat)

**Harness:** Claude-side real Chromium 1194 (`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`) + Playwright sync API; loopback `http://127.0.0.1:{ephemeral}/` serving QA COPY + `styles/main.css` + 14 PNGs (`images/`). Live file UNTOUCHED — QA ran on `lesson_38_QACOPY.html` with the jsdelivr mermaid ESM import swapped for an offline DOMContentLoaded stub (QA copy only; `js/clipboard.js` + `js/course-enhancements.js` + `favicon.png` 404 in harness = expected, not served, no pageerror). Configs: 380/900 × dark/light (4). Theme forced via `:root[data-theme=...]` + context `color_scheme`. Imgs forced `loading=eager` + full-page scroll + `img.decode()` before measure.

**Results — ALL 4 CONFIGS PASS:**
- **Doc horizontal overflow:** 0 / all 4. `scrollWidth===clientWidth` exactly (380/380, 380/380, 900/900, 900/900).
- **PNG decode:** 14/14 each config (`complete && naturalWidth>0`, 0 bad).
- **Overlay 1:1 registration:** 14/14 pairs each config. **max|dx|=max|dy|=max|dh|=0.000px** (all three checked axes exact). max|dw|=0.015625px (1/64px, width-only, Figs 11/12 only) = `getBoundingClientRect` sub-pixel rounding from viewBox aspect (1080×1920 / 1071×567) scaled to fractional CSS width; NOT a defect. **L33 defect signature (dy≈−16px / dh≈+32px) ABSENT** — wrapper `font-size:0` + img `margin:0;vertical-align:top` HOLDS.
- **Inline SVG currentColor inversion:** 9/9 inline SVGs measured at the `currentColor` child level. 8/9 invert exactly: dark `rgb(212,212,212)` ↔ light `rgb(51,65,85)`. Fig 8 (workflow diagram, svg `#ppf-root`) carries baked `background:#2b2b2b` self-contained dark panel — its currentColor children resolve white in BOTH themes BY DESIGN (theme-inverting text on a fixed dark panel would be unreadable); intentional, not a failure. All currentColor paths present + resolving (ccCount 16/11/30/13/9/15/15/6/6).
- **.table-wrap containment:** 2/2 contain. @380 both internal-scroll (scrollW 513>clientW 298; 505>295; `overflow-x:auto`) with 0 doc overflow. @900 both fit (802/802, 799/799, no internal scroll). 0 doc overflow contributed either width.
- **mermaid div:** 1 div lays out (@380 348×307px, @900 852×102px). Offline stub = harness limitation (live uses jsdelivr ESM); div present + sized, not rendered-diagram-verified.
- **pageerrors:** 0 / all 4 configs.

**Post-run live-file integrity (re-pull + UTF-8 python3 recount, harness must not touch live):**
- `get_file_info` live: size **323,850**, mtime unchanged (20:41:41, identical to pre-QA) — harness never wrote live file.
- Recount of re-pulled live bytes — **ALL 21 INVARIANTS UNCHANGED:** bytes 323,850; figure/figcaption/`</figure>`/svg 23/23/23/23; img 14; U+2014 **68 HELD**; U+2013/U+2192/U+00B7 (whole-file) 0/49/0; white 54; `#667eea`/`#764ba2`/`linear-gradient` 0/0/0; `.table-wrap`/`min-width:max-content`/`</table></div>` 2/2/2; `class="mermaid"` 1 + jsdelivr 1; lesson_37/lesson_39 links 1/1.

**VERDICT: L38 BROWSER QA PASS.** Matches L33–L37 QA outcome. L38 FULLY CLOSED. Next = L39 (`lesson_39_rigging_essentials.html`, slug `rigging_essentials`, CONFIRMED via L38 live next-link).
