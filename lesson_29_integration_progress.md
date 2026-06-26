# Lesson 29 — Hard Surface Modeling — Integration Progress

**Status:** INTEGRATION — ALL 24 FIGURES LIVE (6 inline SVG + 18 PNG overlays). Phases 0/A/B/C/D/E COMPLETE. Live HTML **229,489 B**. NEXT = QA (Playwright 380/900px dark+light) + FINAL INVARIANT TABLE + INTEGRATION COMPLETE + session.md → L30.
**Opened:** 2026-06-25
**File:** lesson_29_hard_surface_modeling.html
**Module:** 7 (Advanced Modeling), lesson 2 of module
**Next lesson link:** lesson_30_retopology_fundamentals.html (1 occurrence, confirmed)

---

## BASELINE INVARIANTS (live, 2026-06-25, pre-integration)

| Invariant | Baseline | Notes |
|---|---|---|
| file size | 158,493 B | old-gen, created 2026-06-12, untouched |
| `<figure>` | 0 | none integrated |
| `<figcaption>` | 0 | |
| `<img>` | 0 | |
| `<svg>` | 0 | |
| figures integrated | 0 / target TBD | |
| U+2014 (em-dash) | 18 | ALL pre-existing prose — PRESERVE verbatim; recount via `python3 \u2014 count` (NOT grep) each checkpoint |
| literal U+00B7 (·) | 0 | use `&#183;` entity for any new separators |
| `<table>` | 1 | neutralize header only at integration (keep table) |
| `#667eea` | 7 | neutralize → currentColor at integration |
| `#764ba2` | 5 | neutralize → currentColor at integration |
| inline `style=` | 85 | |
| mermaid jsdelivr import (head) | 1 | dead — `class="mermaid"` divs = 0 → STRIP at integration |
| `class="mermaid"` divs | 0 | no rendered diagrams present |

**8 section ids (confirmed live):** what-is-hard-surface · hard-surface-vs-organic · essential-modifiers · boolean-operations · edge-flow-topology · precision-tools · project · summary

---

## STRUCTURAL-CLEANUP DECISION

**Resolution: (a) MODERNIZE — applied AT INTEGRATION** (same as L28).
- Neutralize `#667eea` (7) and `#764ba2` (5) → `currentColor`.
- KEEP `<table>` (1); neutralize header styling only.
- STRIP dead mermaid jsdelivr import block from `<head>` (0 rendered diagrams → safe).
- Preserve all 18 pre-existing U+2014 verbatim; 0 new em-dashes (use `&#8212;` / `&#183;` entities in any added HTML).

*Change if Ray prefers (b) leave-as-is.*

---

## ROSTER RECONCILIATION (from lesson_29_image_requirements.md — 38 candidates)

Priority tiers in requirements doc:
- **High (10):** #1, #5, #6, #15, #21, #29, #30, #31, #32, #33 → BUILD
- **Medium (14):** #2, #7, #9, #10, #11, #16, #17, #18, #20, #22, #24, #26, #28, #34 → BUILD
- **Lower (14):** #3, #4, #8, #12, #13, #14, #19, #23, #25, #27, #35, #36, #37, #38 → DEFER (unless Ray pulls any forward)

**BUILD set = 24 figures (High + Medium).** DEFER set = 14.

### Format split (BUILD set)

**Inline SVG** (vector — diagrams/infographics/flowcharts; req-doc SVG candidates ∩ BUILD):
- #5 Modifier Stack Visualization
- #15 Boolean Operations Explained
- #22 Edge Flow Patterns
- #26 Snapping System Overview
- #28 Precision Tools Reference
- #2 Hard Surface Characteristics (callout diagram)

→ **6 inline SVGs**

**PNG (Blender-rendered)** — remainder of BUILD set:
- #1 Hard Surface vs Organic
- #6 Bevel Before/After
- #21 Quad Topology
- #29 Project Phase 1 — Base Form          [PNG BATCH 1 ✓]
- #30 Project Phase 2 — Panel Details       [PNG BATCH 1 ✓]
- #31 Project Phase 3 — Functional Details  [PNG BATCH 1 ✓]
- #32 Project Phase 4 — Edge Definition (before/after) [PNG BATCH 1 ✓]
- #33 Project Final Result — Multiple Angles [PNG BATCH 1 ✓]
- #7 Bevel Settings
- #9 Mirror Setup Guide
- #10 Mirror Settings
- #11 Array Examples
- #16 Boolean Workflow
- #17 Boolean Settings
- #18 Boolean Use Cases
- #20 Boolean Troubleshooting
- #24 Support Geometry Demo
- #34 Modifier Order Comparison

→ **18 PNGs** (5 done, 13 remaining)

**Production split note:** 18 PNGs → batch in ≤5-figure groups; each batch ≥5 figs gets its own sub-chat. 6 SVGs → one SVG production batch (Claude-side). INTEGRATION (24 figs ≥6) → its own chat.

---

## PLACEMENT MAP (BUILD figures → section ids)

| Section id | Figures (req-doc placement) |
|---|---|
| what-is-hard-surface | #1, #2 |
| hard-surface-vs-organic | (Lower-tier #4/#35 deferred) |
| essential-modifiers | #5, #6, #7, #9, #10, #11, #34 |
| boolean-operations | #15, #16, #17, #18, #20 |
| edge-flow-topology | #21, #22, #24 |
| precision-tools | #26, #28 |
| project | #29, #30, #31, #32, #33 |
| summary | (Lower-tier #37 deferred) |

---

## PIPELINE STATE

- [x] SETUP — roster reconciled, format split, placement map, baseline invariants, cleanup decision; progress.md written; session.md pointer updated.
- [x] PRODUCTION — SVG batch (6 inline SVGs, currentColor light+dark safe, id-prefixed, cairosvg render-verify). **DONE 2026-06-25** — see SVG BATCH RESULT below.
- [~] PRODUCTION — PNG batches (18 PNGs; ≤5/batch; ≥5 → own sub-chat; TRUE-PRISTINE before+after each scene; no baked labels; cairosvg pixel-verify before overlay commit).
    - [x] PNG BATCH 1 (project core #29–#33, 5 figs) — **DONE 2026-06-25** — see PNG BATCH 1 RESULT below.
    - [x] PNG BATCH 2 (#1, #6, #21, #7, #9 — 5 figs) — **DONE 2026-06-25** — see PNG BATCH 2 RESULT below.
    - [x] PNG BATCH 3 (#10, #11, #16, #17, #18, #20, #24, #34 — 8 figs) — **DONE 2026-06-25** (all 8 in one chat, no split needed) — see PNG BATCH 3 RESULT below.
- [x] PRODUCTION COMPLETE — 6 SVG + 18 PNG all produced + byte-confirmed. Studio rig left clean (Cam + 3 lights + StudioWorld + 3 locked mats w/ fake_user).
- [ ] INTEGRATION — own chat; edit_file dryRun→commit→get_file_info per figure; responsive overlay wrapper; per-commit byte ladder + c{N} registry; em-dash recount each checkpoint.
- [ ] QA — headless Chromium/Playwright @380/900px dark+light; force eager + full-page scroll before measure; 0 horizontal overflow; all imgs decode; overlays register 1:1.

---

## SVG BATCH RESULT (2026-06-25)

All 6 inline SVGs produced Claude-side (no Blender), cairosvg render-verified (non-empty, no parse error), currentColor-only (light+dark safe — no baked hex fills, no #222), unique id-prefix each, 0 literal em-dash / 0 literal U+00B7 (entities only). Written via Filesystem:write_file → get_file_info byte-confirmed.

| # | id-prefix | file | bytes | verify |
|---|---|---|---|---|
| 2 | hc | images/lesson_29_02_characteristics_diagram.svg | 4,048 | render OK, currentColor-only, 0 literal em/·· |
| 5 | ms | images/lesson_29_05_modifier_stack_visualization.svg | 5,311 | render OK, currentColor-only, 1 `&#8212;` entity |
| 15 | bo | images/lesson_29_15_boolean_operations_explained.svg | 4,107 | render OK, currentColor-only, ∪/−/∩ entities |
| 22 | ef | images/lesson_29_22_edge_flow_patterns.svg | 4,684 | render OK, currentColor-only, 1 `&#8212;` entity |
| 26 | sn | images/lesson_29_26_snapping_overview.svg | 3,616 | render OK, currentColor-only, 6 `&#8212;` entities |
| 28 | pt | images/lesson_29_28_precision_tools_reference.svg | 6,619 | render OK, currentColor-only, 3 `&#8212;` + 1 `&#9656;` |

**Notes for INTEGRATION:**
- These are standalone full diagrams carrying intrinsic text (legit — not PNG overlays). No baked callout labels that belong to c{N} overlays.
- All entities used: `&#8212;` (em-dash), `&#8220;/&#8221;` (curly quotes, hc), `&#8746;/&#8722;/&#8745;` (∪/−/∩, bo), `&#9656;` (▸ menu chevron, pt). No literal U+2014 or U+00B7 anywhere.
- id-prefixes are unique per SVG: hc, ms, bo, ef, sn, pt — no class/id collisions when inlined together.
- viewBoxes: hc 880×560 · ms 880×620 · bo 880×460 · ef 760×620 · sn 760×580 · pt 880×560. All `max-width:100%;height:auto`.

---

## PNG BATCH 1 RESULT (2026-06-25) — project core #29–#33

5 Blender-rendered PNGs (EEVEE, dark #2b2b2b world, 3-point lighting, MetalGrey/MetalDark materials). Mechanical-container subject (3:2:1.4 body) per req-doc prompts — no humanoid rig needed for this lesson. **NO baked labels/text** on any render (all panel/step/view callouts deferred to INTEGRATION c{N} overlays). TRUE-PRISTINE mesh-clear before each scene. Deterministic capture: render→Windows tempdir→UNC relay to `\\wsl$\` images dir→Filesystem:get_file_info byte-confirm. Max PNG compression (100). Raw PNGs only — overlay registration cairosvg pixel-verify happens at INTEGRATION.

| # | file | bytes | content / layout | verify |
|---|---|---|---|---|
| 29 | images/lesson_29_29_project_phase1_base.png | 549,776 | 4-panel row: scaled cube / support loops (bevel) / subdivision (subsurf×2) / mirror setup (half + Mirror mod + orange mirror-plane) | render OK, 4 panels distinct, no baked text, <1MB |
| 30 | images/lesson_29_30_project_phase2_panels.png | 589,092 | 4-panel row: front inset / corner reinforce (4 orange plates) / panel-line boolean (2 grooves) / bolt array (2 rows ×7) | render OK, 4 panels distinct, no baked text, <1MB |
| 31 | images/lesson_29_31_project_phase3_functional.png | 577,533 | 4-panel row: vent grilles (5-slot bool array) / handle recess (beveled bool) / top hatch (inset+extrude) / label area (recessed bool) | render OK, 4 panels distinct, no baked text, <1MB |
| 32 | images/lesson_29_32_project_phase4_beveling.png | 675,580 | before/after: sharp+flat-lit (left) vs beveled+dramatic-rim-light (right), full detailed container both sides | render OK, dramatic edge-highlight contrast, no baked text, <1MB |
| 33 | images/lesson_29_33_project_final_result.png | 762,391 | 2×2 view grid (Pillow composite 1504×1504): front / side (vent side) / top / 3-4 perspective of finished hero container | render OK, 4 views, Pillow-composited on #2b2b2b, no baked text, <1MB |

**Notes for INTEGRATION:**
- Layout convention: #29–#31 are horizontal 4-panel rows (~2200×560, 4:1). #32 is 16:9 before/after. #33 is square 2×2 composite. Overlay grids must match these aspect splits.
- c{N} overlay anchors needed per figure: #29/#30/#31 = 4 step labels each (panels left→right); #32 = "BEFORE"/"AFTER" + bevel-settings callout; #33 = "FRONT"/"SIDE"/"TOP"/"PERSPECTIVE" (TL/TR/BL/BR).
- Orange geometry in renders = "new element this step" / cutter / mirror-plane indicators (intentional, per Blender style guide #ff8c00). These are geometry, not labels — keep as-is; do NOT overlay-cover.
- All 5 under 1MB target (compression=100; #33 cell size reduced to 740px to fit). All 3:2:1.4 container shares one material set for cross-figure consistency.
- File-naming matches req-doc convention exactly (lesson_29_NN_slug.png).
- Production note: #29 was re-rendered once after an accidental scene-state overwrite during the compression pass; final #29 byte size 549,776 confirmed distinct from #30 (589,092) and verified correct (Phase-1 geometry).

---

## PNG BATCH 2 RESULT (2026-06-25) — comparison/reference figures #1, #6, #21, #7, #9

5 Blender-rendered PNGs (EEVEE, persistent studio rig reused — Cam/Key/Fill/Rim/StudioWorld #2b2b2b, MetalGrey/MetalDark/OrangeHi). Mechanical-container/geometric subjects per req-doc prompts — no humanoid rig. **NO baked labels/text** on any render (all callouts deferred to INTEGRATION c{N} overlays). TRUE-PRISTINE mesh-clear before each scene + final purge (rig left clean: Cam + 3 lights + 3 mats + StudioWorld only). Deterministic capture: render→Windows tempdir→UNC relay to `\\wsl$\` images dir→Filesystem:get_file_info byte-confirm. Max PNG compression (100) + Pillow optimize. Raw PNGs only — overlay registration cairosvg pixel-verify happens at INTEGRATION.

| # | file | bytes | content / layout | verify |
|---|---|---|---|---|
| 1 | images/lesson_29_01_hard_surface_vs_organic.png | 311,910 | side-by-side composite (1524×900): LEFT hard-surface paneled block (beveled body + raised front panel + 5-bolt row + greeble box, MetalGrey/MetalDark) vs RIGHT organic smooth blob (4 merged subsurf spheres, flowing curves). Thin grey divider. | render OK, 2 halves distinct, no baked text, <1MB |
| 6 | images/lesson_29_06_bevel_before_after.png | 312,518 | before/after composite (1644×900): LEFT sharp cube (no bevel, flat read) vs RIGHT same cube w/ Bevel mod (width .06, 4 seg, harden_normals) under boosted rim light catching edges. Rim energy restored after. | render OK, edge-highlight contrast clear, no baked text, <1MB |
| 21 | images/lesson_29_21_quad_topology.png | 425,577 | 2×2 grid (1524×1244): cols LEFT=clean quads / RIGHT=messy tris+ngons; rows TOP=cage (orange wireframe overlay) / BOTTOM=subsurf×2 result. Clean→smooth, messy→visible pinching/faceting artifacts. | render OK, artifact contrast confirmed via viewport, no baked text, <1MB |
| 7 | images/lesson_29_07_bevel_settings.png | 574,888 | schematic settings-reference (2200×620): row of 4 cubes w/ increasing Bevel segments (1/2/4/8) at stepped amount = visual "segments/amount" axis; orange marker plate under the highlighted sample = "this setting." Settings-screenshot type rendered as schematic geo (no Blender UI panel); ALL parameter labels (Amount/Segments/Limit Method/Angle) deferred to INTEGRATION overlay. Cam temporarily pulled back to (7.5,-9.5,5.2)/55mm then RESTORED to (6.5,-6.5,4.5)/80mm. | render OK, 4-step progression distinct, no baked text, <1MB |
| 9 | images/lesson_29_09_mirror_setup_guide.png | 215,787 | 4-panel row (2492×680): P1 delete-half (single half + orange mirror-plane slab) / P2 add-mirror (clip OFF, visible center gap/seam) / P3 enable-clipping (clip ON, halves merged + orange center-seam highlight) / P4 result (clean symmetrical, no orange). | render OK, 4 steps distinct, no baked text, <1MB |

**Notes for INTEGRATION:**
- Layout conventions: #1 & #6 are side-by-side 50/50 (thin grey divider @ x≈midpoint; #1 split 760|760, #6 split 820|820 +4px gap). #21 is 2×2 (cell 760×620, +4px gaps at col x=760, row y=620). #7 is wide 4-step row (~3.5:1, four cells ~550px each across 2200w). #9 is 4-panel row (cell 620×680, +4px gaps → panel centers ≈ 312/936/1560/2184).
- c{N} overlay anchors needed per figure:
  - #1 = "HARD SURFACE" (left-bottom) + "ORGANIC" (right-bottom).
  - #6 = "WITHOUT BEVEL"/"BEFORE" (left) + "WITH BEVEL"/"AFTER" (right) + optional edge-highlight callout right.
  - #21 = "CLEAN QUADS"/"GOOD" (left col) + "MESSY TOPOLOGY"/"BAD" (right col); row sub-labels "CAGE"(top)/"SUBSURF RESULT"(bottom); green ✓ left / red ✗ right.
  - #7 = 4 param labels left→right: "Amount" / "Segments" / "Limit Method" / "Angle" (+ brief desc each); the orange plate marks the emphasized sample. This is the figure carrying the most deferred text — overlay must supply all setting names.
  - #9 = 4 step labels left→right: "1 DELETE HALF" / "2 ADD MIRROR MODIFIER" / "3 ENABLE CLIPPING" / "4 RESULT" (+ brief desc).
- Orange geometry = intentional indicator (mirror-plane #1-of-#9-P1, center seam #9-P3, bevel-segment marker plate #7, wireframe-cage overlay #21-top-row) per style guide #ff8c00. Geometry, NOT labels — do NOT overlay-cover.
- All 5 under 1MB (compression=100 + Pillow optimize/compress_level=9). File-naming matches req-doc convention exactly.
- Studio rig (Cam 80mm @ (6.5,-6.5,4.5) rot[67.5,0,45]; Key/Fill/Rim; StudioWorld 0.0265 lin) left intact + clean for PNG BATCH 3.

---

## PNG BATCH 3 RESULT (2026-06-25) — schematic/composite figures #10, #11, #16, #17, #18, #20, #24, #34

8 Blender-rendered PNGs (EEVEE, persistent studio rig reused — Cam/Key/Fill/Rim/StudioWorld #2b2b2b, MetalGrey/MetalDark/OrangeHi). Mechanical/geometric subjects per req-doc prompts — no humanoid rig. **NO baked labels/text** on any render (all callouts deferred to INTEGRATION c{N} overlays). TRUE-PRISTINE mesh-clear before each scene + final purge (rig left clean: Cam + 3 lights + StudioWorld + 3 locked mats only, mats given fake_user). Deterministic capture: render→Windows tempdir→UNC relay to `\\wsl$\` images dir→Filesystem:get_file_info byte-confirm. Max PNG compression (100) + Pillow optimize/compress_level=9. Raw PNGs only — overlay registration cairosvg pixel-verify happens at INTEGRATION.

| # | file | bytes | content / layout | verify |
|---|---|---|---|---|
| 10 | images/lesson_29_10_mirror_settings.png | 505,110 | single (1500×1000): two mirrored half-objects + thin orange mirror-PLANE slab @ X=0 + orange center merge-seam bar. Settings-screenshot type rendered as model state; ALL labels (Axis/Clipping/Merge/Bisect) deferred to overlay. | render OK, mirror symmetry clear, no baked text, <1MB |
| 11 | images/lesson_29_11_array_examples.png | 457,077 | 3-panel row (2708×820): LINEAR (7-bolt row on plate, Array X) / CIRCULAR (8 spokes from hub, Array+Empty object-offset) / 2D GRID (4×3 studs on plate, 2× Array X+Y). Grey dividers, 4px gaps. | render OK, 3 array types distinct, no baked text, <1MB |
| 16 | images/lesson_29_16_boolean_workflow.png | 326,602 | 4-panel row (2492×680): P1 BASE OBJECT (grey block) / P2 CUTTER POSITIONED (orange cylinder penetrating) / P3 BOOLEAN MODIFIER (cutter→orange WIREFRAME ghost, diff applied) / P4 RESULT (clean vertical through-hole, cutter hidden). | render OK, 4 steps distinct, no baked text, <1MB |
| 17 | images/lesson_29_17_boolean_settings.png | 397,902 | single (1300×1000): grey base block + orange-WIREFRAME cutter cube at corner, boolean DIFFERENCE notch cut. Settings-screenshot type; ALL labels (Operation/Object/Solver) deferred to overlay. | render OK, base+cutter relationship clear, no baked text, <1MB |
| 18 | images/lesson_29_18_boolean_use_cases.png | 343,350 | 2×2 (1524×1244): TL PANEL LINES (2 parallel grooves) / TR VENT GRILLS (5-slot array cut) / BL WINDOW OPENING (rect through-cut, upright wall) / BR CIRCULAR HOLES (3 bored cylinders). | render OK, 4 use-cases distinct, no baked text, <1MB |
| 20 | images/lesson_29_20_boolean_troubleshooting.png | 432,801 | 2×2 (1524×1244) problem(red,LEFT)/fix(green,RIGHT) per cell: TL ARTIFACTS (FLOAT solver mess vs EXACT clean) / TR NO-EFFECT (cutter floating-above orange ghost, block intact vs penetrating→hole) / BL SHADING (flat-shade facets vs smooth+harden_normals) / BR MESSY-TOPOLOGY (triangulated thick-wireframe vs clean-quad wireframe). | render OK, problem/fix geo-states clear, no baked X/✓ text, <1MB |
| 24 | images/lesson_29_24_support_geometry.png | 311,528 | 3-stage row (2168×820): each = orange WIREFRAME cage (above) + grey subsurf×2 result (below). S1 NO SUPPORT→round / S2 FAR SUPPORT (bevel off .32)→soft / S3 CLOSE SUPPORT (bevel off .07)→sharp. | render OK, round→soft→sharp progression clear, no baked text, <1MB |
| 34 | images/lesson_29_34_modifier_order_comparison.png | 353,762 | side-by-side (1600×900): LEFT CORRECT ORDER (Boolean→Bevel→Subsurf = clean beveled block w/ crisp bore) vs RIGHT WRONG ORDER (Subsurf FIRST→Boolean→Bevel = melted/pinched blob artifacts). Center grey divider. | render OK, dramatic clean-vs-artifact contrast, no baked text, <1MB |

**Notes for INTEGRATION:**
- Layout conventions: #10 & #17 are single-subject schematics (settings-screenshot type, no internal panels → overlay supplies all setting labels). #11 & #24 are wide 3-panel rows (cell ~720×820 / 760×820; dividers at panel boundaries +4px). #16 is wide 4-panel row (cell 620×680, panel centers ≈ 312/936/1560/2184). #18 & #20 are 2×2 (cell 760×620, col split x=760+gap, row split y=620+gap). #34 is 50/50 side-by-side (divider @ x=800).
- c{N} overlay anchors needed per figure:
  - #10 = setting labels: "Axis (X/Y/Z)" / "Clipping" / "Merge" / "Bisect" (+ brief desc each); orange plane = mirror-axis indicator, orange bar = merge-seam. This is a deferred-label figure — overlay supplies ALL setting names.
  - #11 = 3 labels: "LINEAR ARRAY" / "CIRCULAR ARRAY" / "2D GRID ARRAY" (left→right).
  - #16 = 4 step labels: "1 BASE OBJECT" / "2 CUTTER POSITIONED" / "3 ADD BOOLEAN MODIFIER" / "4 RESULT" (left→right).
  - #17 = setting labels: "Operation (Difference)" / "Object (cutter)" / "Solver (Exact)" (+ brief desc); orange wireframe = the cutter Object. Deferred-label figure — overlay supplies ALL.
  - #18 = 4 cell labels: "PANEL LINES"(TL) / "VENT GRILLS"(TR) / "WINDOW OPENINGS"(BL) / "CIRCULAR HOLES"(BR).
  - #20 = 4 cell labels + problem/solution text: "ARTIFACTS"(TL) / "NO EFFECT"(TR) / "SHADING PROBLEMS"(BL) / "MESSY TOPOLOGY"(BR); add red ✗ over LEFT (red) sub-object + green ✓ over RIGHT (green) sub-object of each cell; overlay supplies the fix text (recalc normals/use Exact · check penetration · mark sharp/auto-smooth · clean manually). Red/green are geo-state indicators (temp mats), NOT labels.
  - #24 = 3 stage labels: "NO SUPPORT" / "FAR SUPPORT" / "CLOSE SUPPORT" (+ result desc round/soft/sharp); row sub-labels "CAGE"(top)/"SUBSURF RESULT"(bottom). Orange = control cage wireframe.
  - #34 = "CORRECT ORDER"+green ✓ (left) / "WRONG ORDER"+red ✗ (right); overlay supplies the two modifier stacks (left: Mirror→Boolean→Bevel→Subsurf; right reversed: Subsurf→Boolean→Bevel→Mirror).
- Orange geometry = intentional indicator per style guide #ff8c00 (mirror-plane/seam #10, boolean-cutter ghost #16/#17, support cage #24). Geometry, NOT labels — do NOT overlay-cover.
- BLENDER BUILD NOTE (carry to any re-render): this Blender is 5.x — engine string is `BLENDER_EEVEE`; boolean solver enum is FLOAT/EXACT/MANIFOLD (no "FAST"). Boolean cuts must penetrate deep/wide enough to read at the 80mm 3/4 cam distance — shallow (<~0.1 unit) thin cuts are invisible even when the boolean succeeds (verify via evaluated poly-count, not just byte size).
- All 8 under 1MB. File-naming matches req-doc convention exactly.
- Studio rig (Cam 80mm @ (6.5,-6.5,4.5) rot[67.5,0,45]; Key 1800/Fill 500/Rim 1600; StudioWorld 0.0265 lin; MetalGrey/MetalDark/OrangeHi w/ fake_user) left intact + clean.

---

## PER-COMMIT LOG

### INTEGRATION started 2026-06-25 (own chat, 24 figs). Cadence: edit_file dryRun→commit→get_file_info; cairosvg pixel-verify per PNG overlay; em-dash recount (python3) each checkpoint.

**Baseline re-verified vs progress.md (all 11 match):** 158,493 B · fig/img/svg 0/0/0 · table 1 · #667eea 7 · #764ba2 5 · inline style 85 · mermaid import 1 · U+2014 18 · U+00B7 0 · next-link 1.

#### PHASE 0 — STRUCTURAL CLEANUP (decision (a) MODERNIZE) — COMPLETE
| # | commit | edit | bytes after | Δ |
|---|---|---|---|---|
| 1 | head | strip dead mermaid jsdelivr `<script>` block (removed 1×#667eea L24) | 158,080 | −413 |
| 2 | L64 card | Learning Objectives gradient→`border:2px solid currentColor`; strip 4× inner color:white (−1 #667eea, −1 #764ba2) | 157,955 | −125 |
| 3 | L256 table | header `<tr>`+3`<th>` neutralized (#667eea→none; #ddd→currentColor); table kept | 157,983 | +28 |
| 4 | L911 card | Modifier Stack Recipe gradient→currentColor; strip inner color:white | (batch) | |
| 5 | L1914 card | Precision Shortcuts gradient→currentColor; strip inner color:white | (batch) | |
| 6 | L1947 card | Project Overview gradient→currentColor; strip inner color:white | (batch) | |
| 7 | L2402 card | What You've Mastered gradient→currentColor; strip inner color:white | 157,375 | |

**PHASE 0 CHECKPOINT (live):** #667eea **0** · #764ba2 **0** · linear-gradient **1** (green closer, see note) · mermaid import **0** · `<table>` **1** · 5 cards neutralized · U+2014 **18** (python3) · U+00B7 **0** · 0 new literal em-dash/middot.

**GREEN-CARD DECISION (resolved, L28 precedent):** A 6th gradient card exists at L2692 using `#4CAF50/#45a049` (green "You're a Hard Surface Modeler Now" closer) + the dark footer `#2c3e50`. These were NOT in the cleanup scope (decision names only #667eea/#764ba2). Checked L28 (`lesson_28_sculpting_basics.html` L3156): identical green closer + footer were **kept verbatim**. → L29 **keeps green card + footer as-is**. The 10 remaining `color: white` are these two elements only (9 green card + 1 footer) — intentional.

_(Phase A — 6 SVG figs + PNG #1 — next.)_

#### PHASE A — COMPLETE (all 6 inline SVGs integrated)
| fig | type | section | bytes after | overlay / notes |
|---|---|---|---|---|
| 1 | PNG 1524×900 | what-is-hard-surface (after intro ¶ L92) | 159,183 | c1: "HARD SURFACE"(x380) + "ORGANIC"(x1140) plates @ y812, #FF6B00/#fff. cairosvg 1:1 verified (verify_01.png). |
| 2 | inline SVG 880×560 | what-is-hard-surface (after fig 1) | 163,553 | id-prefix hc. No overlay (standalone diagram). cairosvg render OK. |
| 5 | inline SVG 880×620 | essential-modifiers (after modifier-stack card / before `<h3>Bevel Modifier</h3>`) | 169,231 | id-prefix ms. 1 `&#8212;` entity. Standalone diagram, NOT c{N}. dryRun→commit→get_file_info OK (+5,678). |
| 15 | inline SVG 880×460 | boolean-operations (after `<h3>Understanding Boolean Operations</h3>`) | 173,666 | id-prefix bo. ∪/−/∩ via `&#8746;/&#8722;/&#8745;`. Standalone diagram, NOT c{N}. OK (+4,435). |
| 22 | inline SVG 760×620 | edge-flow-topology (after `<h3>Edge Flow Principles</h3>`) | 178,698 | id-prefix ef. 1 `&#8212;` entity. Standalone diagram, NOT c{N}. OK (+5,032). |
| 26 | inline SVG 760×580 | precision-tools (after `<h3>Snapping System</h3>`) | 182,634 | id-prefix sn. 6 `&#8212;` + `&#8217;` (figcaption). Standalone diagram, NOT c{N}. OK (+3,936). |
| 28 | inline SVG 880×560 | precision-tools (after Quick-Reference card / before closing blockquote) | 189,610 | id-prefix pt. 3 `&#8212;` + `&#9656;`. Standalone diagram, NOT c{N}. OK (+6,976). |

**PHASE A CHECKPOINT (live, python3):** size **189,610 B** · `<figure>` **7** · `<figcaption>` **7** · `<img>` **1** · `<svg` **7** (6 inline SVG + 1 PNG overlay on #1) · #667eea/#764ba2 **0/0** · `<table>` **1** · mermaid **0** · U+2014 **18** · U+00B7 **0** · next-link **1**. All 6 SVG id-prefixes unique & present (hc/ms/bo/ef/sn/pt). Em-dash held at 18. ✅ PHASE A COMPLETE.

#### PHASE B — COMPLETE (6 PNG overlays: #6, #7 prior session; #9, #10, #11, #34 this session)

| fig | c{N} | type | section / anchor | bytes after | Δ | overlay / notes |
|---|---|---|---|---|---|---|
| 6 | c2 | PNG 1644×900 | essential-modifiers (Bevel) | 191,? | — | (committed prior session; live good) |
| 7 | c3 | PNG 2200×620 | essential-modifiers (Bevel settings) | 193,109 | — | (committed prior session; live good) |
| 9 | c4 | PNG 2492×680 | essential-modifiers, before `<h3>Array Modifier</h3>` (1st of pair) | 196,772 | +3,663 (pair) | 4 step plates `&#183;` separator; `&#8212;` figcaption. Paste-and-commit from staging (pre-verified cairosvg 1:1). dryRun→commit→get_file_info OK. |
| 10 | c5 | PNG 1500×1000 | essential-modifiers, before `<h3>Array Modifier</h3>` (2nd, after #9) | (pair) | (in +3,663) | Deferred-label fig: overlay supplies ALL settings (Axis/Clipping/Merge/Bisect) + desc row; `&#8212;` figcaption. OK. |
| 11 | c6 | PNG 2708×820 | essential-modifiers, before `<h3>Solidify Modifier</h3>` | 198,184 | +1,412 | 3 array-type plates (LINEAR/CIRCULAR/2D GRID); `&#8212;` figcaption. OK. |
| 34 | c7 | PNG 1600×900 | essential-modifiers, after Modifier Stack Recipe card `</div>`, before "Non-Destructive Advantage" `<blockquote>` | 200,400 | +2,216 | CORRECT(green ✓ #2e7d32)/WRONG(red ✗ #c62828) + two stack legends `&#8594;` arrows; `&#8212;` figcaption. OK. |

**Byte ladder (confirmed via get_file_info):** 193,109 → +#9/#10 196,772 → +#11 198,184 → +#34 **200,400**.

**PHASE B CHECKPOINT (live, python3):** size **200,400 B** · `<figure>` **13** · `<figcaption>` **13** · `<img>` **7** · `<svg` **13** (6 inline SVG + 7 PNG overlays: #1/#6/#7/#9/#10/#11/#34) · #667eea/#764ba2 **0/0** · `<table>` **1** · mermaid **0** · U+2014 **18** (python3, NOT grep) · U+00B7 **0** · next-link **1**. Entity hygiene confirmed: 0 literal em-dash / middot inside all 4 new figure blocks. Em-dash held at 18. ✅ PHASE B COMPLETE.

_Note on counts: `<img>`=7 = one per PNG figure (#1/#6/#7/#9/#10/#11/#34); `<svg`=13 = 6 standalone inline SVG diagrams + 7 PNG overlays; `<figure>`=13 = 7 PNG + 6 SVG. Internally consistent._

#### PHASE C — COMPLETE (4 boolean PNG overlays: #16/c8, #17/c9, #18/c10, #20/c11)

Placement: boolean-operations section, each figure inserted before a unique `<h3>` anchor (re-grepped live; line nums had shifted). Cadence per figure: build overlay in PNG-native viewBox &#8594; cairosvg alpha-composite 1:1 verify (visual-inspected) &#8594; edit_file dryRun &#8594; commit &#8594; get_file_info byte ladder. Locked markup, #FF6B00 plates / #fff text, entities only.

| fig | c{N} | type | section / anchor (inserted before) | bytes after | Δ | overlay / notes |
|---|---|---|---|---|---|---|
| 16 | c8 | PNG 2492×680 | boolean-operations, before `<h3>Setting Up Boolean Operations</h3>` | 202,443 | +2,043 | 4 step plates: 1 BASE OBJECT / 2 CUTTER POSITIONED / 3 ADD BOOLEAN MODIFIER / 4 RESULT (centers 312/936/1560/2184). `&#8212;` in figcaption. cairosvg 1:1 OK. |
| 17 | c9 | PNG 1300×1000 | boolean-operations, before `<h3>Common Boolean Use Cases</h3>` | 204,986 | +2,543 | Deferred-label: overlay supplies ALL settings (Operation (Difference)/Object (cutter)/Solver (Exact)) + desc rows + "cutter Object" pointer to orange wireframe. `&#8212;`+`&#183;` entities. cairosvg 1:1 OK. |
| 18 | c10 | PNG 1524×1244 | boolean-operations, before `<h3>Boolean Best Practices</h3>` | 206,996 | +2,010 | 4 cell labels: PANEL LINES(TL)/VENT GRILLS(TR)/WINDOW OPENINGS(BL)/CIRCULAR HOLES(BR). `&#8212;` figcaption. cairosvg 1:1 OK. |
| 20 | c11 | PNG 1524×1244 | boolean-operations, before `<h3>Advanced Boolean Techniques</h3>` | 211,836 | +4,840 | 4 cell labels (ARTIFACTS/NO EFFECT/SHADING PROBLEMS/MESSY TOPOLOGY) + red ✗ (#c62828) on problem(LEFT) obj + green ✓ (#2e7d32) on fix(RIGHT) obj + 4 fix-text plates. Badge coords from measured red/green centroids. `&#183;` in 2 fix plates, `&#8212;` figcaption. cairosvg 1:1 OK. |

**Byte ladder (confirmed via get_file_info):** 200,400 → +#16 202,443 → +#17 204,986 → +#18 206,996 → +#20 **211,836**.

**PHASE C CHECKPOINT (live, python3):** size **211,836 B** · `<figure>` **17** · `<figcaption>` **17** · `<img>` **11** · `<svg` **17** (6 inline SVG + 11 PNG overlays: #1/#6/#7/#9/#10/#11/#34/#16/#17/#18/#20) · #667eea/#764ba2 **0/0** · `<table>` **1** · mermaid **0** · U+2014 **18** (python3, NOT grep) · U+00B7 **0** · next-link **1**. Em-dash held at 18. ✅ PHASE C COMPLETE.

#### PHASE D — COMPLETE (2 edge-flow PNG overlays: #21/c12, #24/c13)

Placement: edge-flow-topology section, each figure inserted before a unique `<h3>` anchor (re-grepped live; line nums had shifted +11.4 KB from Phase C). Anchors: #21 before `<h3>Topology Around Details</h3>` (lands right after the existing #22 ef SVG, under the Quad Rule / Edge Flow content); #24 before `<h3>Topology Workflow Tips</h3>` (lands inside the Supporting Geometry subsection — semantic fit). Cadence per figure: measured quadrant/stage centroids &#8594; build overlay in PNG-native viewBox &#8594; cairosvg alpha-composite 1:1 verify (visual-inspected) &#8594; edit_file dryRun &#8594; commit &#8594; get_file_info byte ladder. Locked markup, #FF6B00 plates / #fff text, entities only.

| fig | c{N} | type | section / anchor (inserted before) | bytes after | Δ | overlay / notes |
|---|---|---|---|---|---|---|
| 21 | c12 | PNG 1524×1244 | edge-flow-topology, before `<h3>Topology Around Details</h3>` | 215,190 | +3,354 | 2×2: col headers CLEAN QUADS/GOOD (left) + MESSY TOPOLOGY/BAD (right); row sub-labels CAGE(top)/SUBSURF RESULT(bottom); green ✓ (#2e7d32) on both LEFT cubes + red ✗ (#c62828) on both RIGHT cubes. Badges placed in upper-outer clear corners (measured cube centroids TL/BL≈x398, TR/BR≈x1120; badges at x=120/x=1410, y=200/760). `&#8212;` figcaption. cairosvg 1:1 OK. |
| 24 | c13 | PNG 2168×820 | edge-flow-topology, before `<h3>Topology Workflow Tips</h3>` | 218,396 | +3,206 | 3-stage row (dividers measured x=721/1445 → centers 361/1083/1806): stage labels NO SUPPORT/FAR SUPPORT/CLOSE SUPPORT (top) + result desc ROUND/SOFT/SHARP (bottom); row sub-labels CAGE(top)/SUBSURF RESULT(bottom, moved to y=500 to clear stage-1 sphere). Orange control cage NOT covered. `&#8212;` figcaption. cairosvg 1:1 OK. |

**Byte ladder (confirmed via get_file_info):** 211,836 → +#21 215,190 → +#24 **218,396**.

**PHASE D CHECKPOINT (live, python3):** size **218,396 B** · `<figure>` **19** · `<figcaption>` **19** · `<img>` **13** · `<svg` **19** (6 inline SVG + 13 PNG overlays: #1/#6/#7/#9/#10/#11/#34/#16/#17/#18/#20/#21/#24) · #667eea/#764ba2 **0/0** · `<table>` **1** · mermaid **0** · U+2014 **18** (python3, NOT grep) · U+00B7 **0** · next-link **1**. New figure blocks 100% entity-clean (0 literal em-dash/middot/arrow/check/cross; `&#8212;` entity present). _(Note: 91 literal U+2192 → arrows exist in pre-existing prose step-lists — not a tracked invariant, untouched by Phase D.)_ Em-dash held at 18. ✅ PHASE D COMPLETE.

#### PHASE E — COMPLETE (5 project PNG overlays: #29/c14, #30/c15, #31/c16, #32/c17, #33/c18)

Placement: project section (`<section id="project">`), each figure inserted before the next unique `<h3>` after its phase block (re-grepped live; anchors confirmed unique). Cadence per figure: measured panel centroids/cell splits via PIL (rows #29/#30/#31 dividers ~329/1100/1863 → panel centers 165/715/1485/2035; #32 objects x 0-378 / 1513-1919 + empty center band; #33 gutters x≈748/y≈748 → cell corners) &#8594; built overlay in PNG-native viewBox &#8594; cairosvg alpha-composite 1:1 verify (visual-inspected, all register on correct panels, no geometry covered) &#8594; edit_file dryRun &#8594; commit &#8594; get_file_info byte ladder. Locked markup, #FF6B00 plates / #fff text, entities only.

| fig | c{N} | type | section / anchor (inserted before) | bytes after | Δ | overlay / notes |
|---|---|---|---|---|---|---|
| 29 | c14 | PNG 2200×560 | project, before `<h3>Phase 2: Panel Details (20 minutes)</h3>` | 220,565 | +2,169 | 4 step plates: 1 SCALED CUBE / 2 SUPPORT LOOPS / 3 SUBDIVISION / 4 MIRROR SETUP (panel centers 165/715/1485/2035, bottom band y=484; plates 1&4 edge-clamped). `&#183;` sep, `&#8212;` figcaption. cairosvg 1:1 OK. |
| 30 | c15 | PNG 2200×560 | project, before `<h3>Phase 3: Functional Details (20 minutes)</h3>` | (ladder) | | 4 step plates: 1 FRONT INSET / 2 CORNER REINFORCE / 3 PANEL LINES / 4 BOLT ARRAY. Orange corner plates/panel-lines/bolts NOT covered. cairosvg 1:1 OK. |
| 31 | c16 | PNG 2200×560 | project, before `<h3>Phase 4: Edge Definition (10 minutes)</h3>` | (ladder) | | 4 step plates: 1 VENT GRILLES / 2 HANDLE RECESS / 3 TOP HATCH / 4 LABEL AREA. Orange handle/label geo NOT covered. cairosvg 1:1 OK. |
| 32 | c17 | PNG 1920×1080 | project, before `<h3>Phase 5: Optional Enhancements (15 minutes)</h3>` | (ladder) | | BEFORE (left obj) + AFTER (right obj) + BEVEL MODIFIER callout panel in empty center band (Amount 0.02m / Segments 3 / Harden Normals on / Clamp Overlap on). `&#8212;` figcaption. cairosvg 1:1 OK. |
| 33 | c18 | PNG 1504×1504 | project, before `<h3>Next Steps</h3>` (final hero, end of Success Criteria) | 229,489 | | 2×2 view labels: FRONT(TL)/SIDE(TR)/TOP(BL)/PERSPECTIVE(BR) in cell corners (gutters x≈748/y≈748). `&#8212;` figcaption ×2. cairosvg 1:1 OK. |

**Byte ladder (confirmed via get_file_info):** 218,396 → +#29 220,565 → +#30/#31/#32/#33 → **229,489**.

**PHASE E CHECKPOINT (live, python3):** size **229,489 B** · `<figure>` **24** · `<figcaption>` **24** · `<img>` **18** · `<svg` **24** (6 inline SVG + 18 PNG overlays) · #667eea/#764ba2 **0/0** · `<table>` **1** · mermaid **0** · U+2014 **18** (python3, NOT grep) · U+00B7 **0** · next-link **1** · U+2192 **91** (pre-existing prose, untouched). All 5 new images referenced once. New figure blocks 100% entity-clean. Em-dash held at 18. ✅ PHASE E COMPLETE — **ALL 24 FIGURES INTEGRATED.**

---

## 🟢 PHASE B — STAGING (RETIRED 2026-06-25)

_All four staged blocks (#9/c4, #10/c5, #11/c6, #34/c7) committed to live HTML and logged in the PER-COMMIT LOG (PHASE B section) + c{N} OVERLAY REGISTRY above. Staging markup removed — it served its purpose. Live file 200,400 B, invariants verified. See PHASE B CHECKPOINT._

<!-- staging body retired -->

---

## ➡️ RESUME POINTER (next chat starts here)

**State:** Phases 0/A/B/C/D/E ALL COMPLETE + logged. **ALL 24 FIGURES INTEGRATED** (6 inline SVG + 18 PNG overlays, c1–c18). Live file good & consistent at **229,489 B**. Invariants all hold (U+2014 **18** python3, #667eea/#764ba2 0/0, U+00B7 0, table 1, mermaid 0, figure/figcaption/svg = **24/24/24**, img **18**, next-link 1, U+2192 91 pre-existing prose untouched).

**Remaining integration commits:** NONE. All figures live + verified.

**➡️ NEXT = QA + CLOSE-OUT (own chat).**
  - **QA:** headless Chromium/Playwright @ **380px + 900px**, **dark + light**. Force `img` eager + full-page scroll before measure. Assert: **0 horizontal overflow**; all **18** imgs decode; all **18 PNG overlays register 1:1** (overlay plates land on correct panels — spot-check the 5 project figs c14–c18 especially, plus c11/c12 badge placement); confirm **6 inline SVGs** render. (Methodology = same as prior lessons: real Chromium via Playwright, force eager, full-page scroll, overlay registration measurement.)
  - **Populate FINAL INVARIANT TABLE** in this progress.md (bottom) + mark **"INTEGRATION COMPLETE"**.
  - **Update session.md** (cross-lesson pointer) → L29 DONE, point to **L30 (retopology_fundamentals)**.

**Reference — PNG native viewBox dims (overlay viewBoxes, all committed):** #1 1524×900 · #6 1644×900 · #7 2200×620 · #9 2492×680 · #10 1500×1000 · #11 2708×820 · #16 2492×680 · #17 1300×1000 · #18 1524×1244 · #20 1524×1244 · #21 1524×1244 · #24 2168×820 · #29–#31 2200×560 · #32 1920×1080 · #33 1504×1504 · #34 1600×900.

**Invariants to re-confirm at close (python3, NOT grep):** #667eea/#764ba2 = 0/0 · U+2014 = 18 · U+00B7 = 0 · `<table>` = 1 · mermaid = 0 · figure/figcaption/svg = 24/24/24 · img = 18 · next-link = 1.

**Note:** Green closer card + footer KEPT (L28 precedent); the 10 `color: white` are those two elements only — intentional, not a defect.

---

## c{N} OVERLAY REGISTRY

| c{N} | fig | section | overlay content | color | verify |
|---|---|---|---|---|---|
| c1 | #1 hard_surface_vs_organic | what-is-hard-surface | "HARD SURFACE" plate @ (380,838) + "ORGANIC" plate @ (1140,838), viewBox 1524×900 | #FF6B00 plate / #fff text | cairosvg composite 1:1 OK (left<760, right>760) |
| c2 | #6 bevel_before_after | essential-modifiers (Bevel) | BEFORE/AFTER bevel comparison plates, viewBox 1644×900 | #FF6B00 / #fff | committed prior session; live good |
| c3 | #7 bevel_settings | essential-modifiers (Bevel settings) | 4 param labels (Amount/Segments/Limit Method/Angle), viewBox 2200×620 | #FF6B00 / #fff | committed prior session; live good |
| c4 | #9 mirror_setup_guide | essential-modifiers (before Array h3) | 4 step plates: 1 DELETE HALF / 2 ADD MIRROR / 3 ENABLE CLIPPING / 4 RESULT (`&#183;` sep), viewBox 2492×680 | #FF6B00 / #fff | cairosvg 1:1 pre-verified; commit OK |
| c5 | #10 mirror_settings | essential-modifiers (before Array h3) | deferred-label: MIRROR SETTINGS + Axis/Clipping/Merge/Bisect + desc row, viewBox 1500×1000 | #FF6B00 / #fff | cairosvg 1:1 pre-verified; commit OK |
| c6 | #11 array_examples | essential-modifiers (before Solidify h3) | 3 plates: LINEAR / CIRCULAR / 2D GRID ARRAY, viewBox 2708×820 | #FF6B00 / #fff | cairosvg 1:1 pre-verified; commit OK |
| c7 | #34 modifier_order_comparison | essential-modifiers (after Recipe card, before blockquote) | CORRECT ORDER + green ✓ / WRONG ORDER + red ✗ + two stack legends (`&#8594;`), viewBox 1600×900 | #FF6B00 plate / #fff text / #2e7d32 ✓ / #c62828 ✗ | cairosvg 1:1 pre-verified; commit OK |

| c8 | #16 boolean_workflow | boolean-operations (before Setting Up h3) | 4 step plates: 1 BASE OBJECT / 2 CUTTER POSITIONED / 3 ADD BOOLEAN MODIFIER / 4 RESULT (centers 312/936/1560/2184), viewBox 2492×680 | #FF6B00 / #fff | cairosvg 1:1 OK; commit OK |
| c9 | #17 boolean_settings | boolean-operations (before Use Cases h3) | deferred-label: BOOLEAN MODIFIER SETTINGS panel (Operation/Object/Solver + desc) + "cutter Object" pointer, viewBox 1300×1000 | #FF6B00 / #fff | cairosvg 1:1 OK; commit OK |
| c10 | #18 boolean_use_cases | boolean-operations (before Best Practices h3) | 4 cell labels: PANEL LINES(TL)/VENT GRILLS(TR)/WINDOW OPENINGS(BL)/CIRCULAR HOLES(BR), viewBox 1524×1244 | #FF6B00 / #fff | cairosvg 1:1 OK; commit OK |
| c11 | #20 boolean_troubleshooting | boolean-operations (before Advanced h3) | 4 cell labels (ARTIFACTS/NO EFFECT/SHADING PROBLEMS/MESSY TOPOLOGY) + red ✗ on LEFT problem obj + green ✓ on RIGHT fix obj + 4 fix-text plates, viewBox 1524×1244 | #FF6B00 plate / #fff text / #c62828 ✗ / #2e7d32 ✓ | cairosvg 1:1 OK; commit OK |
| c12 | #21 quad_topology | edge-flow-topology (before Topology Around Details h3) | 2×2: CLEAN QUADS/GOOD (left col) + MESSY TOPOLOGY/BAD (right col) + CAGE(top)/SUBSURF RESULT(bottom) row labels + green ✓ on both LEFT cubes + red ✗ on both RIGHT cubes, viewBox 1524×1244 | #FF6B00 plate / #fff text / #2e7d32 ✓ / #c62828 ✗ | cairosvg 1:1 OK; commit OK |
| c13 | #24 support_geometry | edge-flow-topology (before Topology Workflow Tips h3) | 3 stage labels NO SUPPORT/FAR SUPPORT/CLOSE SUPPORT + result desc ROUND/SOFT/SHARP + CAGE(top)/SUBSURF RESULT(bottom) row labels; orange control cage not covered, viewBox 2168×820 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |
| c14 | #29 project_phase1_base | project (before Phase 2 h3) | 4 step plates: 1 SCALED CUBE / 2 SUPPORT LOOPS / 3 SUBDIVISION / 4 MIRROR SETUP (panel centers 165/715/1485/2035, y=484), viewBox 2200×560 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |
| c15 | #30 project_phase2_panels | project (before Phase 3 h3) | 4 step plates: 1 FRONT INSET / 2 CORNER REINFORCE / 3 PANEL LINES / 4 BOLT ARRAY, viewBox 2200×560 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |
| c16 | #31 project_phase3_functional | project (before Phase 4 h3) | 4 step plates: 1 VENT GRILLES / 2 HANDLE RECESS / 3 TOP HATCH / 4 LABEL AREA, viewBox 2200×560 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |
| c17 | #32 project_phase4_beveling | project (before Phase 5 h3) | BEFORE (left) + AFTER (right) + BEVEL MODIFIER callout panel (Amount/Segments/Harden Normals/Clamp Overlap) in empty center band, viewBox 1920×1080 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |
| c18 | #33 project_final_result | project (before Next Steps h3, final hero) | 2×2 view labels: FRONT(TL)/SIDE(TR)/TOP(BL)/PERSPECTIVE(BR) in cell corners (gutters x≈748/y≈748), viewBox 1504×1504 | #FF6B00 plate / #fff text | cairosvg 1:1 OK; commit OK |

_(c2+ as PNG overlays land. Inline SVGs #2/#5/#15/#22/#26/#28 carry intrinsic diagram text — NOT c{N} overlays.)_

---

## FINAL INVARIANT TABLE

**Live file:** `lesson_29_hard_surface_modeling.html` · confirmed via `get_file_info` + python3 on copied-over copy (NOT grep).

| invariant | expected | live | status |
|---|---|---|---|
| size (bytes) | 229,489 | 229,489 | ✅ |
| `<figure>` | 24 | 24 | ✅ |
| `<figcaption>` | 24 | 24 | ✅ |
| `<svg` | 24 | 24 | ✅ |
| `<img>` | 18 | 18 | ✅ |
| #667eea | 0 | 0 | ✅ |
| #764ba2 | 0 | 0 | ✅ |
| U+2014 (em-dash) | 18 | 18 | ✅ |
| U+00B7 (middot) | 0 | 0 | ✅ |
| `<table>` | 1 | 1 | ✅ |
| mermaid | 0 | 0 | ✅ |
| next-link (lesson_30_retopology_fundamentals.html) | 1 | 1 | ✅ |
| U+2192 (pre-existing prose arrows, untracked) | 91 | 91 | ✅ (untouched) |
| `color: white` (green closer card + footer only) | 10 | 10 | ✅ (intentional) |

**Asset composition:** 6 inline SVG + 18 PNG overlays (c1–c18). All 18 PNGs verified valid + native dims match overlay-viewBox reference table.

### BROWSER QA RESULTS

Headless Chromium via Playwright. Matrix: **380px + 900px × dark + light** (4 cells). `img` forced eager + `decoding=sync`, full-page scroll before measure, awaited all img load.

| assertion | result |
|---|---|
| horizontal overflow (both widths × both themes) | **0** at all 4 cells ✅ |
| imgs decode (naturalWidth>0) | **18/18** at all 4 cells ✅ |
| PNG overlays register 1:1 (dx/dy/dw/dh ≤2px) | **18/18** at all 4 cells — all dx=dy=dw=dh=**0** ✅ |
| inline SVGs render (geometry present) | **6/6** at all 4 cells ✅ |

**Spot-check overlay registration (project figs + badge figs), dark_900 — all dx=dy=dw=dh=0:**
#29/c14, #30/c15, #31/c16, #32/c17, #33/c18 (project); #20/c11, #21/c12 (badge placement). All land 1:1 on correct panels.

_(QA note: site-wide `js/clipboard.js` + `js/course-enhancements.js` 404 in the isolated QA tree because only L29 HTML+CSS+images were copied for serving; they are present in the live project and have no effect on layout/overflow/decode/registration.)_

---

# ✅ INTEGRATION COMPLETE

Lesson 29 (Hard Surface Modeling): all **24 figures** integrated (6 inline SVG + 18 PNG overlays), all invariants hold, browser QA passes at 380px + 900px × dark + light. Live file **229,489 B**. **DONE.**
