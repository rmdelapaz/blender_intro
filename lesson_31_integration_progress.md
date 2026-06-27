# Lesson 31 (Advanced Modifier Stack) &#183; Integration Progress

**Status:** FIGURE INTEGRATION COMPLETE (2026-06-27) &#8212; 20/20 figures inserted & invariant-locked; live = 292,219 B. Only browser QA @380/900px dark+light remains (own chat). PRODUCTION was 20/20 on disk (7 inline SVG {1,6,7,10,13,25,39} + 13 PNG {2,3,4,11,14,15,31,32,33,34,35,36,38}); Blender TRUE-PRISTINE. **CLEANUP done & verified: live file modernized to L30-style (4 gradient cards &#8594; `border-left:4px #FF6B00`, 27 `color: white` stripped, 6 mermaid node fills + `primaryBorderColor` recolored to `#FF6B00`); 6 commits; 206,488 &#8594; 205,836 B.** All cleanup close-targets hit (`#667eea` 0 / `#764ba2` 0 / `color: white` 0 / `<table>` 1 / mermaid import 1 / live divs 3 / em-dash 12 / U+00B7 0). **NEXT (fresh chat): FIGURE INTEGRATION** &#8212; inline 7 SVGs + place 13 PNGs with c1&#8211;c13 overlays (registry LOCKED below), byte-ladder from 205,836, then browser QA @380/900 dark+light. Old-gen live file, live-mermaid lesson (3 rendered divs).
**Module:** 7 (Advanced Modeling), lesson 4 of module. Slug `advanced_modifier_stack`.
**Live file:** `lesson_31_advanced_modifier_stack.html`
**Next-lesson link target:** `lesson_32_particle_systems_overview.html` (slug `particle_systems_overview`) &#8212; confirmed from nav (1 occurrence). Prev-link `lesson_30_retopology_fundamentals.html` also present (1).
**Date:** 2026-06-26

---

## BASELINE INVARIANT BLOCK (live, old-gen, created 2026-06-12, untouched)

UTF-8 python3 over a Claude-side copy of the live file (NOT grep). This is the LOCKED baseline; re-verify at every checkpoint.

| Invariant | Baseline count | Notes |
|-----------|---------------:|-------|
| bytes (disk) | 206,488 | |
| figure (open) | 0 | none yet |
| figure (close `</figure>`) | 0 | |
| figcaption | 0 | |
| img | 0 | |
| svg (open) | 0 | |
| **em-dash U+2014** | **12** | **PRESERVE verbatim** &#8212; locked baseline; recount via python3 at every checkpoint |
| literal U+00B7 (middot) | 0 | |
| arrow U+2192 | 127 | pre-existing prose (mermaid + body), untouched |
| `<table>` | 1 | KEEP (neutralize header only) |
| `#667eea` | 11 | purple gradient, neutralize at integration &#8594; 0 |
| `#764ba2` | 4 | purple gradient, neutralize at integration &#8594; 0 |
| inline `style=` | 70 | |
| mermaid jsdelivr import | 1 | **LIVE harness &#8212; KEEP (3 rendered divs)** |
| rendered `class="mermaid"` divs | **3** | 2 `graph TD` + 1 `graph LR` &#8212; **live diagrams, NOT dead** |
| `color="#222"` | 0 | |
| `color: white` | 27 | pre-existing card/footer styling |
| `currentColor` | 0 | added at integration via figure overlays/SVG |

**Section ids (8):** `understanding-stack` / `stack-order` / `strategic-combinations` / `advanced-techniques` / `performance-optimization` / `production-workflows` / `project` / `summary`.

---

## CLEANUP DECISION (MODERNIZE at integration &#8212; L30 precedent: live-mermaid lesson)

Confirmed against actual L31 baseline:

- **Neutralize** `#667eea` (11) and `#764ba2` (4) &#8594; `currentColor` / 0 (light+dark safe). Target both &#8594; 0.
- **KEEP the 1 `<table>`** with header gradient neutralized (same KEEP-table rule as L28/L29/L30).
- **DO NOT strip the mermaid import.** L31 has **3 LIVE rendered `class="mermaid"` divs** (2 `graph TD` + 1 `graph LR`), so the jsdelivr import is load-bearing and is PRESERVED. Treat as an L30-style live-harness lesson, NOT an L28/L29-style dead-harness lesson.
- **em-dash U+2014 = 12:** preserve verbatim; 0 new em-dashes in any added content (use `&#183;`).

Close-target hard counts (finalize at INTEGRATION): `#667eea` 0 / `#764ba2` 0 / `<table>` 1 / mermaid import 1 / rendered mermaid divs 3 / em-dash 12 / U+00B7 0.

---

## IMAGE-REQUIREMENTS TRIAGE

Source: `lesson_31_image_requirements.md` (40 candidates; author priority: 8 High / 9 Medium-band [items 9&#8211;17, expands to 12 figs] / Lower remainder; 9-SVG recommendation set {1,6,7,9,10,13,25,26,30}).

### Roster &#8212; BUILD vs DEFER

**BUILD = 20** (High 8 + Medium 12). **DEFER = 20** (Lower).

**High (8):** #1 modifier stack data flow &#183; #2 modifier panel anatomy &#183; #3 mirror-vs-subdiv order comparison &#183; #6 general stack-order flowchart &#183; #11 viewport-vs-render settings &#183; #15 Boolean+Bevel+Subdivision workflow &#183; #32 procedural colonnade final &#183; #38 Boolean Fast-vs-Exact solver.

**Medium (12):** #4 Boolean order comparison &#183; #7 modifier categories reference &#183; #10 performance comparison chart &#183; #13 visibility toggles reference &#183; #14 Mirror+Array workflow &#183; #25 optimization checklist &#183; #31 naming convention examples &#183; #33 column base fluting &#183; #34 colonnade array setup &#183; #35 arch connection system &#183; #36 decorative panel cuts &#183; #39 subdivision polygon-count chart.

**DEFER &#8212; Lower (20):** #5 array/mirror variations &#183; #8 nested array grid &#183; #9 Boolean chain diagram &#183; #12 cutter organization &#183; #16 solidify+array &#183; #17 curve modifier &#183; #18 multiresolution+mirror &#183; #19 lattice deformation &#183; #20 radial array &#183; #21 displacement terrain &#183; #22 shrinkwrap projection &#183; #23 animated parameters &#183; #24 build modifier &#183; #26 troubleshooting flowchart &#183; #27 LOD comparison &#183; #28 applied-vs-unapplied &#183; #29 collection organization &#183; #30 export workflow &#183; #37 complexity comparison &#183; #40 geometry nodes integration.

### Format split (20 BUILD)

Diagram / flowchart / infographic / chart &#8594; inline SVG; Blender screenshot / 3D render / composite &#8594; PNG with c{N} overlays. Driven by the req-doc SVG-rec set intersected with BUILD ({1,6,7,10,13,25}), PLUS #39 (polygon-count bar chart &#8212; diagram-class, promoted to SVG for consistency with chart handling).

- **inline SVG = 7:** `{1, 6, 7, 10, 13, 25, 39}`
  - #1 modifier stack data flow (vertical flowchart)
  - #6 general stack-order flowchart (8-stage vertical)
  - #7 modifier categories reference (2x2 infographic)
  - #10 performance comparison chart (horizontal bars)
  - #13 visibility toggles reference (3-icon card)
  - #25 optimization checklist (infographic checklist)
  - #39 subdivision polygon-count chart (exponential bar chart)
- **PNG (Blender-render / screenshot + c{N} overlays) = 13:** `{2, 3, 4, 11, 14, 15, 31, 32, 33, 34, 35, 36, 38}`
  - UI-chrome screenshots: #2, #11, #31 (3)
  - 3D viewport renders: #14, #32, #33, #34, #35 (5)
  - Composites / multi-panel: #3, #4, #15, #36, #38 (5)

(Deferred SVG-rec #9/#26/#30 are Lower &#8594; not built unless reopened.)

### Placement map (figure &#8594; section id)

Reconciled against the 8 real section ids (req-doc placement suggestions already reference real ids). Sub-anchor (card/heading) resolved at INTEGRATION.

| Section id | BUILD figures (in placement order) |
|------------|-------------------------------------|
| `understanding-stack` | #1, #2 |
| `stack-order` | #3, #4, #6, #7 |
| `strategic-combinations` | #14, #15 |
| `advanced-techniques` | (DEFER-heavy; no BUILD figs &#8212; #8/#9/#20/#21/#22/#23/#24 all Lower) |
| `performance-optimization` | #10, #11, #13, #25 |
| `production-workflows` | #31 |
| `project` | #32, #33, #34, #35, #36 |
| `summary` | #38, #39 |

Note: `advanced-techniques` has no BUILD figure (all its candidates fell to Lower); it stays text+mermaid only unless reopened. #38/#39 land in `summary` per the req-doc "Essential Modifier Patterns" placement.

---

## ARCHITECTURE (locked, carry forward)

- PRODUCTION and INTEGRATION in **separate chats**.
- A phase with **&#8805;5 figures &#8594; own sub-chat.**
- INTEGRATION (BUILD = 20 &#8805; 6) &#8594; **own chat.**
- PNG pipeline: Blender-render with **NO baked labels** (all callouts via INTEGRATION `c{N}` overlays) &#8594; **cairosvg pixel-verify Claude-side before EVERY overlay commit** (LD19).
- Writes: `edit_file` dryRun &#8594; commit &#8594; `get_file_info` for all HTML edits; **`write_file` (never `create_file`)** for new files.
- Blender: **TRUE-PRISTINE** &#8212; verify before/after any staged scene. (Current: TRUE-PRISTINE per session.md, post-L30 / no L30 bridge work.)
- No Filesystem delete tool &#8212; remove temps via Blender bridge `os.remove`.
- `\\wsl$\` paths only. `blender:execute_blender_code` lowercase only.
- Warn Ray to start a fresh chat before auto-compaction.

### Suggested production phasing (for next chats; not started)

- **SVG batch** (7 SVGs: {1,6,7,10,13,25,39}): &#8805;5 &#8594; own sub-chat(s); split into &#8804;5-fig groups or run as one batch per PRODUCTION-chat call.
- **PNG sub-chats** (13 PNGs, &#8805;5 &#8594; own sub-chats): UI-chrome {2,11,31} (3) + 3D renders {14,32,33,34,35} (5) + composites {3,4,15,36,38} (5). Final batching set in the PRODUCTION chat (e.g. 3D-render group one sub-chat; composite group one sub-chat; UI-chrome group folded in or its own).
- **INTEGRATION** (20 figs): own chat after all production verified.

Project-figure cluster {32,33,34,35,36} = the procedural colonnade (final render + 4 build-step screenshots); stage as one Blender scene (column &#8594; fluting &#8594; array &#8594; arch &#8594; decorative-panel) and capture progressively, mirroring the L29/L30 project-figure approach.

---

## PRODUCTION LOG

### SVG batch {1,6,7,10,13,25,39} &#8212; 7 inline SVGs (2026-06-26, own sub-chat)

All built per IMAGE_STYLE_GUIDE v6 (currentColor + #FF6B00; separators via `&#183;`; `color="#222"` fallback present on each standalone root; 0 new U+2014). cairosvg pixel-verified light+dark Claude-side; `get_file_info` confirmed on disk.

| Fig | File | id-prefix | viewBox | bytes | verify |
|-----|------|-----------|---------|------:|--------|
| #1 | `lesson_31_01_modifier_stack_data_flow.svg` | `msf` | 0 0 800 680 | 4,985 | light+dark OK |
| #6 | `lesson_31_06_stack_order_flowchart.svg` | `sof` | 0 0 800 680 | 6,277 | light+dark OK |
| #7 | `lesson_31_07_modifier_categories_reference.svg` | `mcr` | 0 0 800 560 | 4,900 | light+dark OK |
| #10 | `lesson_31_10_performance_comparison_chart.svg` | `pcc` | 0 0 800 560 | 4,033 | light+dark OK |
| #13 | `lesson_31_13_visibility_toggles_reference.svg` | `vtr` | 0 0 800 560 | 5,587 | light+dark OK |
| #25 | `lesson_31_25_optimization_checklist.svg` | `opt` | 0 0 800 680 | 5,362 | light+dark OK |
| #39 | `lesson_31_39_subdivision_polygon_chart.svg` | `spc` | 0 0 800 560 | 4,042 | light+dark OK |

**SVG batch COMPLETE (7/7).** Next PRODUCTION: PNG sub-chats &#8212; composites {3,4,15,36,38}, UI-chrome {2,11,31}.

### PNG sub-chat: 3D renders {14,32,33,34,35} &#8212; 5 PNGs (2026-06-26, own sub-chat)

Plain-grey geometry &#8594; `bpy.ops.render.opengl` (SOLID/MATERIAL clay), 1920x1080, NO baked labels (all callouts via INTEGRATION `c{N}` overlays). AgX left as-is (no color-dependent markers; exempt from the Standard-view recipe). PNG relay: Windows tempdir &#8594; Pillow `Image.open(tmp).save(unc)` &#8594; WSL UNC images/ path. `get_file_info` confirmed each on disk. cairosvg overlay pixel-verify DEFERRED to INTEGRATION.

**Project cluster {32,33,34,35} = procedural colonnade, ONE staged scene captured progressively** (column &#8594; fluting &#8594; array &#8594; arch), per the L29/L30 project-fig approach. Build: fluted column = full cylinder shaft (r0.35, h3.0) with square plinth/base + abacus/echinus caps; fluting = ring of 16 thin boolean cutter cylinders (EXACT solver) differenced into shaft, then APPLIED + joined so Array does not multiply the cutter; Mirror_Symmetry (clip) modifier present; Array_Colonnade count 5, constant offset (2.5,0,0); arches = 4 POLY half-circle curves (r1.25) springing from cap tops (z3.56), bevel_depth 0.18, joined into one `Arches` object. (A floating entablature was built then removed &#8212; the clean arched colonnade reads stronger as the #32 hero.)

| Fig | File | dims | bytes | scene-state |
|-----|------|------|------:|-------------|
| #14 | `lesson_31_14_mirror_array_workflow.png` | 1920x1080 | 954,819 | standalone: half-post &#8594; Mirror_Symmetry_X (clip) &#8594; Array_Row_5x (const 1.5) = 5 posts + connecting rail + ground; 3/4 broadside |
| #33 | `lesson_31_33_column_base_fluting.png` | 1920x1080 | 1,000,412 | colonnade scene: single fluted column (Mirror + applied fluting boolean), BEFORE array; close 3/4 |
| #34 | `lesson_31_34_colonnade_array_setup.png` | 1920x1080 | 1,145,394 | colonnade scene: Array_Colonnade count 5 (const 2.5) = row of 5; broadside |
| #35 | `lesson_31_35_arch_connection_system.png` | 1920x1080 | 1,142,796 | colonnade scene: 4 beveled arches connecting the 5 column tops; 3/4, full row |
| #32 | `lesson_31_32_procedural_colonnade_final.png` | 1920x1080 | 1,003,608 | colonnade scene HERO: 5 columns + 4 arches, dramatic front-left 3/4, ground + shadows |

**3D-render PNG sub-chat COMPLETE (5/5).** Naming matches req-doc convention exactly.

**Camera-aim gotcha (LD candidate for IMAGE_STYLE_GUIDE):** `dir.to_track_quat('-Z','Y')` assigned to `rotation_quaternion` (or `rotation_euler`) does NOT update `matrix_world` until `bpy.context.view_layer.update()` is called. Without the forced update, every `world_to_camera_view` framing check reads a STALE matrix and every `render.opengl` comes out mis-aimed (end-on / off-frame). Pattern: set rotation_mode='QUATERNION' &#8594; set rotation_quaternion &#8594; `view_layer.update()` &#8594; THEN project/render. `camera_to_view_selected` also fought manual placement (re-fits along stale view dir); manual NDC-sweep framing with the forced update is the reliable path.

**#36 HANDOFF (cross-sub-chat composite pattern):** the full colonnade scene is RETAINED on disk as `images/_temp_l31_colonnade_scene.blend` (116,623 B, `get_file_info` confirmed) for #36 (decorative-panel close-up) in the composite sub-chat. That sub-chat opens with a `get_file_info` pre-flight on the .blend, reopens it (or rebuilds from the recipe above), adds the decorative-panel Boolean&#8594;Array cutter detail on an arch, captures #36 close-up, then removes the .blend temp via Blender-bridge `os.remove` at composite close. Blender is currently NOT pristine (colonnade scene live, AgX intact, default world 0.88) &#8212; do NOT teardown/purge until #36 is captured.

### PNG sub-chat: composites {3,4,15,36,38} &#8212; (2026-06-26, own sub-chat, IN PROGRESS)

Plain-grey geometry &#8594; `bpy.ops.render.opengl` (SOLID/STUDIO/SINGLE `(0.55,0.55,0.57)`/cavity, overlays off), 1000x1000 per panel, NO baked labels (callouts via INTEGRATION `c{N}` overlays). AgX left as-is (no color-dependent markers). Panels relayed Windows tempdir &#8594; Pillow &#8594; composited horizontal with 2px `#FF6B00` (255,107,0) dividers. `get_file_info` confirmed on disk. cairosvg overlay pixel-verify DEFERRED to INTEGRATION.

| Fig | File | dims | bytes | scene-state |
|-----|------|------|------:|-------------|
| #3 | `lesson_31_03_mirror_subdivision_comparison.png` | 2002x1000 | 741,685 | 2-panel: Mirror&#8594;Subdiv (clean) vs Subdiv&#8594;Mirror (center seam); 2px orange divider |
| #4 | `lesson_31_04_boolean_order_comparison.png` | 3004x1000 | 1,014,719 | 3-panel: P1 Boolean only (sharp/faceted) &#183; P2 Boolean+Bevel (beveled, wire overlay) &#183; P3 Bevel-refined no-Subdiv (clean circular bore, rounded edges); 2px orange dividers |
| #15 | `lesson_31_15_boolean_bevel_subdivision.png` | 3004x1000 | 938,467 | 3-stage: P1 Boolean cutout (sharp/faceted) &#183; P2 +Bevel (chamfer ring, flat) &#183; P3 +Bevel rounded-square smooth (clean true-circular bore, stage-3 bevel-only per #4 lock, Subdiv DROPPED); same StageCam framing target+(1.2,-4.2,1.0), zoom/offset reset each, NO wire overlay on any panel; 2px orange dividers |
| #36 | `lesson_31_36_decorative_panel_cuts.png` | 1600x1200 | 895,819 | single-panel architectural macro of decorative panel-cut detail on colonnade arch; tight low 3/4 (StageCam tgt(1.25,-0.24,4.35) offset(-0.95,-1.95,0.18) 50mm); SOLID/STUDIO/SINGLE cavity, no baked labels |
| #38 | `lesson_31_38_boolean_fast_exact_solver.png` | 2002x1000 | 514,439 | 2-panel: FLOAT solver (108 non-manifold edges &#8212; z-fight striping + torn rim = artifacts) vs EXACT solver (0 non-manifold, clean bore + intact rim); identical double-coincident through-bore subject (cube size1.4, two r0.5 d3.0 v24 cutters rotX90 at origin, applied in sequence); same single-bore silhouette; 2px orange divider |

**#4 P3 DECISION (wall hit, resolved):** option **(b)** &#8212; Bevel-only rounded-square, Subdiv DROPPED. Subdiv L2 pinched the r0.55 bore into a teardrop from the StageCam 3/4 (back rim collapsed down the bore) at every loop/crease combo tried; the honest "clean" panel is the bevel-refined bore (true circle) reading as a clear step up from P2. P3 re-rendered at the P1/P2 spec framing target+(1.2,-4.2,1.0).

**#4 P3 render gotcha (LD candidate):** `render.opengl(view_context=True)` inherits the viewport camera-view `view_camera_zoom` / `view_camera_offset`; a stale non-zero zoom/offset throws the subject off-frame (bottom-right corner) even when the scene-camera `world_to_camera_view` NDC check reads centered. Fix: enter camera view then reset `region_3d.view_camera_zoom = 0` and `view_camera_offset = (0.0,0.0)` before `render.opengl`.

**#4 close-out done:** removed #4 staged objects (B1/B2/B3 + cut_B1/B2/B3 + StageCam + StageLight) + material L31Clay via Blender-bridge `os.remove`/`data.remove`; removed all stale QA temps (`_qa_l31_03_p1/p2`, `_qa_l31_04_contact`, `_qa_l31_04_p1/p2/p3`) + Windows tempdir #4 panel temps. Colonnade (Arches/Column/Camera/Light/Plane) VERIFIED intact; `_temp_l31_colonnade_scene.blend` (116,623 B) RETAINED for #36. Blender NOT pristine (colonnade live, AgX, world 0.88) &#8212; do NOT teardown until #36 captured.

**Composites sub-chat status: #3 LOGGED, #4 COMPLETE, #15 COMPLETE, #36 COMPLETE, #38 COMPLETE (5/5). Composites sub-chat COMPLETE.**

**#36 build:** decorative panel-cut detail (Boolean&#8594;Array cutter row) added to a colonnade arch on the retained `_temp_l31_colonnade_scene.blend`; tight architectural macro captured (low 3/4, StageCam tgt(1.25,-0.24,4.35) offset(-0.95,-1.95,0.18) 50mm); QA temps removed.

**#38 build:** double-coincident through-bore subject (cube size1.4 + two identical r0.5 d3.0 v24 cylinder cutters, rotX90, both at origin, applied in sequence). B38_Fast = FLOAT solver = 108 non-manifold edges (visible z-fight striping + torn rim chunk = the artifacts panel); B38_Exact = EXACT solver = 0 non-manifold (clean bore + intact rim, viewport-confirmed before composite). Same single-bore silhouette. Pillow composite FLOAT|EXACT with 2px #FF6B00 divider &#8594; 2002x1000; `get_file_info` confirmed 514,439 B on disk.

**5.1.1 solver-enum discovery:** Boolean solver enum is FLOAT / EXACT / MANIFOLD &#8212; there is NO 'FAST' value. Legacy "Fast" = FLOAT. (Promoted to IMAGE_STYLE_GUIDE 5.1.1 op-name discoveries.)

**render gotcha (promoted to IMAGE_STYLE_GUIDE):** use `r3d.view_perspective = 'CAMERA'` (idempotent) to enter camera view before `render.opengl`, NOT `bpy.ops.view3d.view_camera()` &#8212; the operator TOGGLES, so if already in camera view it exits and the render comes out blank (blanked the first #36 render this chat).

**TEARDOWN to TRUE-PRISTINE (composites close):** removed B38_Fast / B38_Exact / StageCam / StageLight / S36_Panel / Arches / Column / Plane (colonnade CLEARED per session.md factory baseline) + surplus StageLight.001 / StageCam.001 datablocks; recreated factory `Cube` (size2 origin); removed materials L31Arch/L31Clay/L31Col/L31Grey/L31Ground; purged 89 orphan datablocks; restored AgX/None/exp0, EEVEE, 1920x1080@100, fps24, world 0.88, POINT 1000 soft 0.25, lens 50, DoF OFF blades 0, frames 1&#8211;250. `os.remove` cleared `_temp_l31_colonnade_scene.blend` (images/), all `_qa_l31_38*` temps, and Windows %TEMP% `_l31_38_*` temps. **Blender VERIFIED TRUE-PRISTINE** (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans).

**PRODUCTION INCOMPLETE (CORRECTED 2026-06-26): 17/20 on disk &#8212; 7 inline SVG {1,6,7,10,13,25,39} + 10 PNG {3,4,14,15,32,33,34,35,36,38}. The UI-chrome PNG sub-chat {2,11,31} was NEVER RUN (no log entry above; files absent from images/, confirmed by directory listing). The 3D-render sub-chat {14,32,33,34,35} and composites sub-chat {3,4,15,36,38} are the only two PNG sub-chats actually completed. Next: produce UI-chrome {2,11,31} in their own PRODUCTION sub-chat (Blender TRUE-PRISTINE; #2 = modifier-panel anatomy screenshot, #11 = viewport-vs-render visibility settings screenshot, #31 = Outliner/stack naming-convention screenshot), THEN INTEGRATION (own chat) of all 20.**

### PNG sub-chat: UI-chrome {2,11,31} &#8212; 3 PNGs (2026-06-26, own sub-chat)

Docked-panel UI chrome &#8212; full-window local-tempdir `screen.screenshot` (carries panel overlays) &#8594; bridge-side Pillow in-place crop (PIL 12.2.0 in Blender 5.1.1) to WSL images/ path (v7/L18 P6 win), NO baked labels (all callouts via INTEGRATION `c{N}` overlays). The right-side IMAGE_EDITOR area was temporarily switched to PROPERTIES (`space.context = 'MODIFIER'`), the area maximized in an ISOLATED `execute_blender_code` call (maximize-stall fix), captured at 1920x1046, then restored to IMAGE_EDITOR; layout returned to original geometry. ONE staged scene served all three: factory Cube carrying a 7-modifier named stack (Mirror_Symmetry_X / Array_Columns_5x / Boolean_WindowCutouts / Boolean_DoorOpening / Boolean_VentHoles / Bevel_SmoothEdges / Subdivision_FinalSmooth @ viewport 1 / render 3) + 3 WIRE cutter objects for the Boolean refs. AgX left as-is (UI chrome exempt from the Standard-view recipe). Each crop view-verified Claude-side; `get_file_info` confirmed on disk. cairosvg overlay pixel-verify DEFERRED to INTEGRATION.

| Fig | File | dims | bytes | scene-state |
|-----|------|------|------:|-------------|
| #2 | `lesson_31_02_modifier_panel_anatomy.png` | 1870x357 | 41,198 | Properties>Modifier; Mirror_Symmetry_X expanded (header + visibility-toggle icon cluster + Axis/Bisect/Flip/Mirror-Object/Clipping/Merge settings); Array header sliver below for stack context |
| #11 | `lesson_31_11_viewport_render_settings.png` | 1870x260 | 32,322 | Properties>Modifier; Subdivision_FinalSmooth expanded showing Levels Viewport 1 / Render 3 (+ Catmull-Clark/Simple, Optimal Display); Bevel header above for context |
| #31 | `lesson_31_31_naming_convention_examples.png` | 1870x498 | 71,153 | Properties>Modifier; full collapsed named stack &#8212; all 7 descriptive modifier names visible (good-naming reference; poor-vs-good contrast deferred to INTEGRATION overlay) |

**UI-chrome PNG sub-chat COMPLETE (3/3).** Naming per req-doc convention (#11 = `viewport_render_settings` per the naming table, NOT `viewport_vs_render_settings`). Accept band ~25&#8211;800 KB met for all three.

**TEARDOWN to TRUE-PRISTINE (UI-chrome close):** restored right-side area IMAGE_EDITOR; un-maximized; cleared Cube modifier stack; removed Cutter_Windows/Doors/Vents + their meshes; orphan purge (none). **Blender VERIFIED TRUE-PRISTINE** (3 objs Camera+Cube+Light / 1 mesh / 0 mats / 0 node_groups / 0 actions / 0 empties / 0 orphans; Cube 0 modifiers; AgX/None, EEVEE, 1920x1080@100, world 0.05/str 0.88 &#8212; baseline unchanged). `os.remove` cleared Windows %TEMP% `_l31_uichrome_raw.png` + `_l31_11_raw.png` and WSL `_qa_l31_uichrome_raw.png` + `_qa_l31_11_raw.png`.

**PRODUCTION COMPLETE 20/20 (2026-06-26): 7 inline SVG {1,6,7,10,13,25,39} + 13 PNG {2,3,4,11,14,15,31,32,33,34,35,36,38}. All on disk; Blender TRUE-PRISTINE. Next phase: INTEGRATION (own chat) of all 20.**

### id-prefix registry (inline SVG, collision-safe per fig)

`msf` (#1) &#183; `sof` (#6) &#183; `mcr` (#7) &#183; `pcc` (#10) &#183; `vtr` (#13) &#183; `opt` (#25) &#183; `spc` (#39). All distinct; no cross-file `id` collisions when inlined on one page at INTEGRATION.

---

## PER-COMMIT LOG

Byte-ladder from baseline 206,488.

### CLEANUP phase (INTEGRATION chat, 2026-06-26) &#8212; COMPLETE

| # | Commit | bytes after | delta |
|---|--------|------------:|------:|
| baseline | live old-gen, re-verified UTF-8 python3 | 206,488 | &#8212; |
| C1 | hero card (L64) &#8594; `border-left:4px #FF6B00`; strip 5 child `color: white` | 206,363 | &#8722;125 |
| C2 | project card (L2835 Project Brief) &#8594; border-left; strip 6 child `color: white` | (folded) | |
| C3 | summary card (Key Takeaways) &#8594; border-left; strip 7 child `color: white` | (folded) | |
| C4 | final card (Final Thoughts) &#8594; border-left; strip 9 child `color: white` | (folded) | |
| C5 | mermaid: `primaryBorderColor` + 6 node `fill:#667eea` &#8594; `#FF6B00` | 205,836 | |
| **CLEANUP total** | **6 commits** | **205,836** | **&#8722;652** |

**CLEANUP close-target VERIFY (UTF-8 python3 on Claude-side copy):** `#667eea` 0 &#10003; / `#764ba2` 0 &#10003; / `color: white` 0 &#10003; / `<table>` 1 &#10003; / mermaid import 1 &#10003; / rendered mermaid divs 3 &#10003; (recolored node fills to brand `#FF6B00`, diagrams LIVE) / em-dash U+2014 12 &#10003; (preserved verbatim, incl. 2 in Final-Thoughts card + 1 in Summary lead) / U+00B7 0 &#10003; / arrow U+2192 127 &#10003; (untouched) / figure/figcaption/img/svg 0/0/0/0 (figures begin next phase) / `#FF6B00` 11. Table header is `#f0f0f0` (not purple) &#8212; no gradient to neutralize, KEPT as-is.

### FIGURE phase (COMPLETE 2026-06-26/27, across 3 chats) &#8212; 20/20 inserted

Byte-ladder from 205,836 (cleanup close). Insert ladder via `edit_file` dryRun&#8594;commit on `\\wsl$\` UNC; counts re-verified UTF-8 python3 on a fresh Claude-side copy at close.

| Checkpoint | figures in | bytes | notes |
|-----------|----------:|------:|-------|
| cleanup close | 0 | 205,836 | baseline for figure phase |
| chat 1 close | 6 | 238,209 | msf #1, sof #6, mcr #7 (inline) + c1 #2, c2 #3, c3 #4 (PNG) |
| chat 2 mid | 11 | 267,022 | + c4 #14, c5 #15 (strategic-combinations); c6 #11 + pcc #10, opt #25, vtr #13 (perf-opt) |
| chat 2 close | 13 | 269,549 | + c7 #31 (production-workflows). NOTE: chat-2 handoff claimed 17/20 but the c8&#8211;c12 "commit" was a stale dryRun that never landed; true resume state was 13/20. |
| chat 3 commit A | 18 | (project) | + c8 #32, c9 #33, c10 #34, c11 #35, c12 #36 (project section, one 5-edit commit) |
| chat 3 commit B | 20 | 292,219 | + c13 #38 then spc #39 (summary, one combined commit, ladder order #38&#8594;#39 after `Essential Modifier Patterns`) |

**FIGURE phase COMPLETE: 20/20 on disk, 292,219 B.** All invariants verified (table below).

---

## c{N} OVERLAY REGISTRY

**c{N} &#8594; PNG assignment LOCKED** (placement order; assigned at INTEGRATION cleanup boundary, overlays NOT yet built):

| c{N} | Fig | File | PNG dims (viewBox) |
|------|-----|------|--------------------|
| c1 | #2 | `lesson_31_02_modifier_panel_anatomy.png` | 1870x357 |
| c2 | #3 | `lesson_31_03_mirror_subdivision_comparison.png` | 2002x1000 |
| c3 | #4 | `lesson_31_04_boolean_order_comparison.png` | 3004x1000 |
| c4 | #14 | `lesson_31_14_mirror_array_workflow.png` | 1920x1080 |
| c5 | #15 | `lesson_31_15_boolean_bevel_subdivision.png` | 3004x1000 |
| c6 | #11 | `lesson_31_11_viewport_render_settings.png` | 1870x260 |
| c7 | #31 | `lesson_31_31_naming_convention_examples.png` | 1870x498 |
| c8 | #32 | `lesson_31_32_procedural_colonnade_final.png` | 1920x1080 |
| c9 | #33 | `lesson_31_33_column_base_fluting.png` | 1920x1080 |
| c10 | #34 | `lesson_31_34_colonnade_array_setup.png` | 1920x1080 |
| c11 | #35 | `lesson_31_35_arch_connection_system.png` | 1920x1080 |
| c12 | #36 | `lesson_31_36_decorative_panel_cuts.png` | 1600x1200 |
| c13 | #38 | `lesson_31_38_boolean_fast_exact_solver.png` | 2002x1000 |

Each overlay viewBox = its PNG pixel dims (1:1). cairosvg pixel-verify Claude-side before EVERY commit (LD19). Per-callout `c{N}-*` ids assigned when each overlay is authored.

### OVERLAY BUILD LOG (FIGURE phase, 2026-06-26)

Overlay style locked: green `#4ADE80` plate / `#0f1a14` text = good/viewport/clean; orange `#FF6B00` plate / `#fff` text = warn/render/raw; stroke-width 3; Arial weight 700; arrows via `&#8594;` (U+2192, NOT new em-dashes); each overlay has `role="img"` + `aria-labelledby` with `c{N}-title`/`c{N}-desc`. viewBox = PNG px (1:1). All composites VIEW-confirmed Claude-side (not scan-only, per LD c6).

**BUILT + pixel-verified (13/13): c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13.** All verified SVG sources below are paste-ready for the insert ladder (wrap each in the inline-stacked PNG figure wrapper). FIGURE phase overlay build COMPLETE. NEXT (chat 3): 7 SVG inlines {1,6,7,10,13,25,39} + insert ladder (byte-ladder from 205,836) + browser QA @380/900 dark+light.

- **c1/#2** (1870x357) &#8212; verified prior chat; source in session handoff. 5 callouts (modifier name, visibility toggles, axis toggle, clipping, merge).
- **c6/#11** (1870x260) &#8212; verified+corrected prior chat; source in session handoff. Viewport "1" (green) / Render "3" (orange) value-field callouts; TRUE bands y117-143 / y145-172 at value col.
- **c2/#3** (2002x1000) &#8212; this chat. Spheres: L center (482,421) r302 clean = green ring + "Smooth, seamless surface"; R center (1484,423) seam at x~1480 = orange box x1452 w60 y150-698 + "Visible seam at center". Titles: green "Correct: Mirror &#8594; Subdivision" / orange "Incorrect: Subdivision &#8594; Mirror". Dividers x1000-1001.
- **c3/#4** (3004x1000) &#8212; this chat. 3 panels (centers ~500/1501/2503, dividers 1000-1001/2002-2003). Titles: orange "1. Boolean only" / orange "2. Boolean + Bevel" / green "3. Refined: clean". Bore-edge leaders + plates: "Sharp, faceted bore edge" / "Bevel rounds the edges" / "Smooth circular bore".
- **c4/#14** (1920x1080) &#8212; this chat. 5 posts x-centers 273/632/959/1261/1538, span y~280-620. Green title "Mirror &#8594; Array workflow"; green box on base post (x225 w100 y255-650) + "Base object" leader; orange bracket posts 1-5 (y760) + orange "5 posts from 1 base object".
- **c5/#15** (3004x1000) &#8212; this chat. 3 panels (same layout as c3). Titles: orange "1. Boolean" / orange "2. + Bevel" / green "3. + Subdivision". Bore leaders + plates: "Sharp cut, hard edges" / "Bevel rounds the edges" / "Smooth, finished form".
- **c7/#31** (1870x498) &#8212; prior chat. Name-field rows y 51/83/114/146/178/210/242 (32px pitch), field x start ~85. Green box x78 y36 w640 h240 around descriptive names + two green callouts: "Descriptive names state each purpose" / "Self-documenting, not default labels".
- **c8/#32** (1920x1080) &#8212; chat 2. HERO colonnade, all-green. Columns at x~230/490/720/905/1075 (front-left 3/4), arch crowns y~165-185. Green title "Finished colonnade: 5 columns &#183; 4 arches" + 3 leaders: "Fluted column shaft" &#8594; col1, "Boolean fluting grooves" &#8594; central shaft, "Beveled arches connect tops" &#8594; arch crown. VIEW-confirmed.
- **c9/#33** (1920x1080) &#8212; chat 2. Single column centered x~690-810, all-green. Capital y~90-130, shaft y~130-760, plinth y~760-815. Title "One column &#183; before Array" (moved left, x300 w520 to clear column) + 3 leaders: "Capital (abacus)" &#8594; cap block (x810,y105), "Boolean fluting + Mirror symmetry" &#8594; shaft (x790,y420), "Plinth base" &#8594; base (x810,y795). VIEW-confirmed.
- **c10/#34** (1920x1080) &#8212; chat 2. Row of 5 broadside, centers x~190/575/955/1348/1738, span y~210-640. Green title "Array modifier &#183; count 5" + green box on base col (x120 w120 y200-640) + "Base column" leader; orange bracket all 5 (y770, x190&#8594;1738) + orange "5 columns from 1 base object". VIEW-confirmed (base box frames col1; bracket spans 5).
- **c11/#35** (1920x1080) &#8212; chat 2. 4 arches over 5 cols, all-green. Arch1 crown top y~186, bevel tube visible, spring junctions y~290 at capitals. Title "4 beveled arches connect the tops" + 3 leaders: "Arch crown (curve)" &#8594; arch1 crown (x320,y186), "Bevel depth gives thickness" &#8594; tube (x1190,y200), "Arch springs from capital" &#8594; col2/3 junction (x690,y295). VIEW-confirmed (corrected crown+spring endpoints).
- **c12/#36** (1600x1200) &#8212; chat 2. 4 recessed panel cuts on flat panel, all-green. Cut interiors x~460-510/570-610/680-700+ (group x360-705), y~370-610. Title "Decorative panel cuts" + "Beveled cut edge" &#8594; top-left frame (x400,y435); green bracket spanning 4 cuts (y668, x360&#8594;705) + "Array repeats cutter &#215;4"; "Boolean recesses the panel" &#8594; recess (x655,y470). VIEW-confirmed (widened bracket to span all 4).
- **c13/#38** (2002x1000) &#8212; chat 2. 2-panel, divider x1000-1001 (orange, baked). LEFT=FLOAT (orange/warn): bore center ~x355,y430 r~150, torn rim chunk upper-right ~x455,y370 &#8212; orange title "FLOAT solver: artifacts" + orange box x410 y330 w120 h110 on torn chunk + "Torn rim &#183; z-fighting" leader (x455,y440). RIGHT=EXACT (green/clean): bore center ~x1190,y455 &#8212; green title "EXACT solver: clean" + "Clean, intact bore" leader to rim (x1255,y560). NOTE: dropped the full-circle ring AND arc attempts &#8212; perspective foreshortening of the bore defeats both; final uses leader+label only on the EXACT side (mirrors box+leader on FLOAT side). LESSON: for foreshortened circular bores, do NOT trace with a geometric circle/arc &#8212; use a straight leader to the rim. VIEW-confirmed (3 iterations: box moved to true torn chunk, ring&#8594;arc&#8594;leader).

```svg-c2
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2002 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c2-title c2-desc">
  <title id="c2-title">Stack order comparison: Mirror then Subdivision versus Subdivision then Mirror</title>
  <desc id="c2-desc">The left sphere applies Mirror before Subdivision and is smooth and seamless; the right sphere applies Subdivision before Mirror and shows a visible seam down the right of center where the two halves meet.</desc>
  <g>
    <rect x="60" y="40" width="610" height="48" rx="6" fill="#4ADE80"/>
    <text x="365" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#0f1a14" text-anchor="middle">Correct: Mirror &#8594; Subdivision</text>
  </g>
  <g>
    <rect x="1320" y="40" width="630" height="48" rx="6" fill="#FF6B00"/>
    <text x="1635" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">Incorrect: Subdivision &#8594; Mirror</text>
  </g>
  <circle cx="482" cy="421" r="312" fill="none" stroke="#4ADE80" stroke-width="3"/>
  <g>
    <rect x="300" y="850" width="364" height="42" rx="5" fill="#4ADE80"/>
    <text x="482" y="879" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Smooth, seamless surface</text>
    <line x1="482" y1="850" x2="482" y2="735" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <rect x="1452" y="150" width="60" height="548" rx="6" fill="none" stroke="#FF6B00" stroke-width="3"/>
  <g>
    <rect x="1505" y="850" width="320" height="42" rx="5" fill="#FF6B00"/>
    <text x="1665" y="879" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Visible seam at center</text>
    <line x1="1620" y1="850" x2="1490" y2="700" stroke="#FF6B00" stroke-width="3"/>
  </g>
</svg>
```

```svg-c3
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3004 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c3-title c3-desc">
  <title id="c3-title">Boolean refinement in three stages</title>
  <desc id="c3-desc">Left panel shows a Boolean cut alone with faceted bore edges; center panel adds a Bevel that rounds the bore edges; right panel shows the refined result with a clean smooth circular bore.</desc>
  <g>
    <rect x="60" y="40" width="300" height="48" rx="6" fill="#FF6B00"/>
    <text x="210" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">1. Boolean only</text>
  </g>
  <g>
    <rect x="1230" y="40" width="320" height="48" rx="6" fill="#FF6B00"/>
    <text x="1390" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">2. Boolean + Bevel</text>
  </g>
  <g>
    <rect x="2250" y="40" width="300" height="48" rx="6" fill="#4ADE80"/>
    <text x="2400" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#0f1a14" text-anchor="middle">3. Refined: clean</text>
  </g>
  <g>
    <rect x="120" y="900" width="430" height="42" rx="5" fill="#FF6B00"/>
    <text x="335" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Sharp, faceted bore edge</text>
    <line x1="335" y1="900" x2="360" y2="430" stroke="#FF6B00" stroke-width="3"/>
  </g>
  <g>
    <rect x="1280" y="900" width="430" height="42" rx="5" fill="#FF6B00"/>
    <text x="1495" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Bevel rounds the edges</text>
    <line x1="1495" y1="900" x2="1430" y2="440" stroke="#FF6B00" stroke-width="3"/>
  </g>
  <g>
    <rect x="2280" y="900" width="450" height="42" rx="5" fill="#4ADE80"/>
    <text x="2505" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Smooth circular bore</text>
    <line x1="2505" y1="900" x2="2470" y2="450" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c4
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c4-title c4-desc">
  <title id="c4-title">Mirror and Array workflow producing five posts from one base object</title>
  <desc id="c4-desc">One half-post is completed by a Mirror modifier, then an Array modifier repeats it into a row of five evenly spaced posts joined by a top rail.</desc>
  <g>
    <rect x="700" y="60" width="520" height="50" rx="6" fill="#4ADE80"/>
    <text x="960" y="95" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#0f1a14" text-anchor="middle">Mirror &#8594; Array workflow</text>
  </g>
  <rect x="225" y="255" width="100" height="395" rx="6" fill="none" stroke="#4ADE80" stroke-width="3"/>
  <g>
    <rect x="70" y="700" width="230" height="44" rx="5" fill="#4ADE80"/>
    <text x="185" y="730" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Base object</text>
    <line x1="230" y1="700" x2="270" y2="650" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <path d="M 273 790 L 273 760 L 1538 760 L 1538 790" fill="none" stroke="#FF6B00" stroke-width="3"/>
  <g>
    <rect x="700" y="800" width="520" height="46" rx="5" fill="#FF6B00"/>
    <text x="960" y="831" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#fff" text-anchor="middle">5 posts from 1 base object</text>
  </g>
</svg>
```

```svg-c5
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3004 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c5-title c5-desc">
  <title id="c5-title">Boolean, Bevel, and Subdivision workflow in three stages</title>
  <desc id="c5-desc">Stage one is a raw Boolean cutout with sharp edges; stage two adds a Bevel to round the bore and outer edges; stage three smooths the whole panel for a clean finished result.</desc>
  <g>
    <rect x="120" y="40" width="300" height="48" rx="6" fill="#FF6B00"/>
    <text x="270" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">1. Boolean</text>
  </g>
  <g>
    <rect x="1300" y="40" width="300" height="48" rx="6" fill="#FF6B00"/>
    <text x="1450" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">2. + Bevel</text>
  </g>
  <g>
    <rect x="2240" y="40" width="380" height="48" rx="6" fill="#4ADE80"/>
    <text x="2430" y="73" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#0f1a14" text-anchor="middle">3. + Subdivision</text>
  </g>
  <g>
    <rect x="80" y="900" width="420" height="42" rx="5" fill="#FF6B00"/>
    <text x="290" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Sharp cut, hard edges</text>
    <line x1="290" y1="900" x2="250" y2="440" stroke="#FF6B00" stroke-width="3"/>
  </g>
  <g>
    <rect x="1290" y="900" width="420" height="42" rx="5" fill="#FF6B00"/>
    <text x="1500" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Bevel rounds the edges</text>
    <line x1="1500" y1="900" x2="1440" y2="450" stroke="#FF6B00" stroke-width="3"/>
  </g>
  <g>
    <rect x="2270" y="900" width="430" height="42" rx="5" fill="#4ADE80"/>
    <text x="2485" y="929" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Smooth, finished form</text>
    <line x1="2485" y1="900" x2="2440" y2="450" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c7
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1870 498" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c7-title c7-desc">
  <title id="c7-title">Descriptive modifier naming convention in the stack</title>
  <desc id="c7-desc">Every modifier in the stack carries a descriptive name stating its purpose, such as Mirror Symmetry X and Array Columns 5x, instead of Blender's default names, making the stack self-documenting.</desc>
  <rect x="78" y="36" width="640" height="240" rx="6" fill="none" stroke="#4ADE80" stroke-width="3"/>
  <g>
    <rect x="760" y="60" width="560" height="46" rx="5" fill="#4ADE80"/>
    <text x="1040" y="91" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#0f1a14" text-anchor="middle">Descriptive names state each purpose</text>
    <line x1="760" y1="83" x2="720" y2="83" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="760" y="150" width="560" height="46" rx="5" fill="#4ADE80"/>
    <text x="1040" y="181" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#0f1a14" text-anchor="middle">Self-documenting, not default labels</text>
    <line x1="760" y1="173" x2="720" y2="148" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c8
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c8-title c8-desc">
  <title id="c8-title">Finished procedural colonnade: five fluted columns joined by four arches</title>
  <desc id="c8-desc">The completed project shows five identical fluted columns produced by Mirror and Array modifiers, connected at their capitals by four beveled arches, with decorative fluting grooves running down each shaft.</desc>
  <g>
    <rect x="610" y="40" width="700" height="52" rx="6" fill="#4ADE80"/>
    <text x="960" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">Finished colonnade: 5 columns &#183; 4 arches</text>
  </g>
  <g>
    <rect x="60" y="470" width="300" height="44" rx="5" fill="#4ADE80"/>
    <text x="210" y="500" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Fluted column shaft</text>
    <line x1="240" y1="470" x2="225" y2="430" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="560" y="600" width="330" height="44" rx="5" fill="#4ADE80"/>
    <text x="725" y="630" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Boolean fluting grooves</text>
    <line x1="725" y1="600" x2="720" y2="500" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="980" y="120" width="430" height="44" rx="5" fill="#4ADE80"/>
    <text x="1195" y="150" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Beveled arches connect tops</text>
    <line x1="1100" y1="164" x2="1010" y2="210" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c9
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c9-title c9-desc">
  <title id="c9-title">Single fluted column built before the Array step</title>
  <desc id="c9-desc">One complete column with a square capital on top, a fluted shaft carved by Boolean grooves and finished with a Mirror modifier for symmetry, and a square plinth base, ready to be duplicated by the Array modifier.</desc>
  <g>
    <rect x="300" y="40" width="520" height="52" rx="6" fill="#4ADE80"/>
    <text x="560" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">One column &#183; before Array</text>
  </g>
  <g>
    <rect x="1000" y="120" width="280" height="44" rx="5" fill="#4ADE80"/>
    <text x="1140" y="150" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Capital (abacus)</text>
    <line x1="1000" y1="135" x2="810" y2="105" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="1010" y="400" width="420" height="44" rx="5" fill="#4ADE80"/>
    <text x="1220" y="430" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Boolean fluting + Mirror symmetry</text>
    <line x1="1010" y1="422" x2="790" y2="420" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="1010" y="760" width="260" height="44" rx="5" fill="#4ADE80"/>
    <text x="1140" y="790" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Plinth base</text>
    <line x1="1010" y1="788" x2="810" y2="795" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c10
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c10-title c10-desc">
  <title id="c10-title">Array modifier with count five producing a row of five columns</title>
  <desc id="c10-desc">A single base column is repeated by an Array modifier set to count five, creating an evenly spaced row of five identical columns from one source object.</desc>
  <g>
    <rect x="610" y="40" width="700" height="52" rx="6" fill="#4ADE80"/>
    <text x="960" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">Array modifier &#183; count 5</text>
  </g>
  <rect x="120" y="200" width="120" height="440" rx="6" fill="none" stroke="#4ADE80" stroke-width="3"/>
  <g>
    <rect x="60" y="690" width="230" height="44" rx="5" fill="#4ADE80"/>
    <text x="175" y="720" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Base column</text>
    <line x1="175" y1="690" x2="180" y2="645" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <path d="M 190 800 L 190 770 L 1738 770 L 1738 800" fill="none" stroke="#FF6B00" stroke-width="3"/>
  <g>
    <rect x="660" y="810" width="600" height="48" rx="5" fill="#FF6B00"/>
    <text x="960" y="843" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#fff" text-anchor="middle">5 columns from 1 base object</text>
  </g>
</svg>
```

```svg-c11
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c11-title c11-desc">
  <title id="c11-title">Four beveled arches connecting the tops of five columns</title>
  <desc id="c11-desc">Four curved arches, each given thickness by a Bevel on the profile curve, span between the capitals of the five columns, springing from one capital to the next.</desc>
  <g>
    <rect x="610" y="40" width="700" height="52" rx="6" fill="#4ADE80"/>
    <text x="960" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">4 beveled arches connect the tops</text>
  </g>
  <g>
    <rect x="120" y="110" width="320" height="44" rx="5" fill="#4ADE80"/>
    <text x="280" y="140" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Arch crown (curve)</text>
    <line x1="300" y1="154" x2="320" y2="186" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="1280" y="110" width="400" height="44" rx="5" fill="#4ADE80"/>
    <text x="1480" y="140" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Bevel depth gives thickness</text>
    <line x1="1280" y1="140" x2="1190" y2="200" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="560" y="430" width="380" height="44" rx="5" fill="#4ADE80"/>
    <text x="750" y="460" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Arch springs from capital</text>
    <line x1="720" y1="430" x2="690" y2="295" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c12
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c12-title c12-desc">
  <title id="c12-title">Decorative panel cuts made with a Boolean and Array cutter system</title>
  <desc id="c12-desc">A close-up of a panel showing four recessed rectangular cuts with beveled edges, produced by a single Boolean cutter repeated four times by an Array modifier.</desc>
  <g>
    <rect x="500" y="50" width="600" height="52" rx="6" fill="#4ADE80"/>
    <text x="800" y="86" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">Decorative panel cuts</text>
  </g>
  <g>
    <rect x="60" y="380" width="300" height="44" rx="5" fill="#4ADE80"/>
    <text x="210" y="410" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Beveled cut edge</text>
    <line x1="360" y1="402" x2="400" y2="435" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <path d="M 360 640 L 360 668 L 705 668 L 705 640" fill="none" stroke="#4ADE80" stroke-width="3"/>
  <g>
    <rect x="355" y="755" width="350" height="48" rx="5" fill="#4ADE80"/>
    <text x="530" y="788" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#0f1a14" text-anchor="middle">Array repeats cutter &#215;4</text>
    <line x1="530" y1="755" x2="530" y2="668" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="780" y="380" width="380" height="44" rx="5" fill="#4ADE80"/>
    <text x="970" y="410" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Boolean recesses the panel</text>
    <line x1="780" y1="410" x2="655" y2="470" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c13
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2002 1000" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c13-title c13-desc">
  <title id="c13-title">Boolean solver comparison: FLOAT versus EXACT</title>
  <desc id="c13-desc">The left cube was cut with the FLOAT solver and shows a torn, jagged chunk on the bore rim caused by coincident geometry; the right cube was cut with the EXACT solver and has a clean, intact circular bore.</desc>
  <g>
    <rect x="60" y="40" width="560" height="52" rx="6" fill="#FF6B00"/>
    <text x="340" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#fff" text-anchor="middle">FLOAT solver: artifacts</text>
  </g>
  <g>
    <rect x="1380" y="40" width="560" height="52" rx="6" fill="#4ADE80"/>
    <text x="1660" y="76" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#0f1a14" text-anchor="middle">EXACT solver: clean</text>
  </g>
  <rect x="410" y="330" width="120" height="110" rx="6" fill="none" stroke="#FF6B00" stroke-width="3"/>
  <g>
    <rect x="60" y="800" width="470" height="46" rx="5" fill="#FF6B00"/>
    <text x="295" y="831" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#fff" text-anchor="middle">Torn rim &#183; z-fighting</text>
    <line x1="350" y1="800" x2="455" y2="440" stroke="#FF6B00" stroke-width="3"/>
  </g>
  <g>
    <rect x="1470" y="800" width="470" height="46" rx="5" fill="#4ADE80"/>
    <text x="1705" y="831" font-family="Arial, sans-serif" font-size="23" font-weight="700" fill="#0f1a14" text-anchor="middle">Clean, intact bore</text>
    <line x1="1470" y1="800" x2="1255" y2="560" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c1
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1870 357" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c1-title c1-desc">
  <title id="c1-title">Anatomy of a modifier panel in the Properties editor</title>
  <desc id="c1-desc">The Mirror Symmetry X modifier panel showing the descriptive modifier name in the header, the visibility-toggle icon cluster on the right of the header, the Axis row that sets the mirror axis, the Clipping checkbox, and the Merge checkbox with its distance value.</desc>
  <g>
    <rect x="150" y="118" width="300" height="42" rx="5" fill="#4ADE80"/>
    <text x="300" y="147" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Modifier name</text>
    <line x1="200" y1="118" x2="150" y2="22" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="1430" y="95" width="340" height="42" rx="5" fill="#4ADE80"/>
    <text x="1600" y="124" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Visibility toggles</text>
    <line x1="1660" y1="95" x2="1740" y2="28" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="180" y="178" width="320" height="42" rx="5" fill="#4ADE80"/>
    <text x="340" y="207" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Axis sets mirror plane</text>
    <line x1="500" y1="190" x2="785" y2="58" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="900" y="240" width="240" height="40" rx="5" fill="#4ADE80"/>
    <text x="1020" y="268" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="#0f1a14" text-anchor="middle">Clipping toggle</text>
    <line x1="900" y1="255" x2="800" y2="205" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="900" y="300" width="320" height="40" rx="5" fill="#4ADE80"/>
    <text x="1060" y="328" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="#0f1a14" text-anchor="middle">Merge weld threshold</text>
    <line x1="900" y1="318" x2="800" y2="238" stroke="#4ADE80" stroke-width="3"/>
  </g>
</svg>
```

```svg-c6
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1870 260" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="c6-title c6-desc">
  <title id="c6-title">Subdivision modifier viewport and render level settings</title>
  <desc id="c6-desc">The Subdivision Final Smooth modifier has separate level fields: Levels Viewport is set to 1 for fast editing performance, while Render is set to 3 for full smoothing in the final render.</desc>
  <g>
    <rect x="60" y="95" width="540" height="44" rx="5" fill="#4ADE80"/>
    <text x="330" y="125" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Viewport: 1 &#183; fast editing</text>
    <line x1="600" y1="117" x2="1290" y2="129" stroke="#4ADE80" stroke-width="3"/>
  </g>
  <g>
    <rect x="60" y="175" width="600" height="44" rx="5" fill="#FF6B00"/>
    <text x="360" y="205" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">Render: 3 &#183; full smoothing</text>
    <line x1="660" y1="197" x2="1290" y2="159" stroke="#FF6B00" stroke-width="3"/>
  </g>
</svg>
```

**c1/c6 REBUILT + pixel-verified (chat 3, 2026-06-26):** original prior-chat sources were never persisted (lost to scrollback). Rebuilt from build-log specs, composited over the on-disk PNGs and VIEW-confirmed Claude-side (not scan-only): c1 5 leaders land on name / visibility cluster / Axis-X / Clipping / Merge; c6 green leader on the Viewport "1" numeral, orange on the Render "3" numeral. Now persisted here so they are never lost again. LESSON: write overlay sources into this log at verify-time, not "leave in scrollback."

---

## FINAL INVARIANT TABLE

UTF-8 python3 over a fresh Claude-side copy of the live file at FIGURE-phase close (2026-06-27).

| Invariant | Target | Final | OK |
|-----------|-------:|------:|:--:|
| bytes (disk) | &#8212; | 292,219 | &#10003; |
| figure (open) | 20 | 20 | &#10003; |
| figcaption | 20 | 20 | &#10003; |
| `</figure>` | 20 | 20 | &#10003; |
| svg (open) | 20 | 20 | &#10003; (7 inline + 13 overlay) |
| img | 13 | 13 | &#10003; |
| em-dash U+2014 | 12 | 12 | &#10003; (0 new) |
| middot U+00B7 (literal) | 0 | 0 | &#10003; (separators via `&#183;` entity) |
| `#667eea` | 0 | 0 | &#10003; |
| `#764ba2` | 0 | 0 | &#10003; |
| `color: white` | 0 | 0 | &#10003; |
| `<table>` | 1 | 1 | &#10003; |
| mermaid jsdelivr import | 1 | 1 | &#10003; |
| rendered `class="mermaid"` divs | 3 | 3 | &#10003; (LIVE) |
| c-ids c1&#8211;c13 | all | all | &#10003; |
| inline prefixes msf/sof/mcr/pcc/vtr/opt/spc | all | all | &#10003; |

**STATUS: INTEGRATION figure-insert + invariant lock COMPLETE.** Remaining: browser QA @380/900px dark+light (own chat).

---

## QA

**QA-PASS &#8212; live-pixel browser QA @380/900px dark+light (2026-06-27, Claude-side real Chromium 141 via Playwright; render copy served `file://`, jsdelivr mermaid import swapped for inline offline stub since CDN egress-blocked Claude-side &#183; live file untouched by the harness).** All 4 configs (380/900 &#215; dark/light): document horizontal overflow 0 (scrollWidth===clientWidth); 13/13 PNGs decode (naturalWidth>0, eager+scroll applied); 13/13 overlays register 1:1 on their bitmaps (dx/dy/dw/dh all 0); 20/20 svg render non-empty; 7 inline SVGs resolve `currentColor` and invert correctly (dark rgb(212,212,212) on bg rgb(30,30,30) &#183; light rgb(51,65,85) on bg rgb(248,250,252), tracking body color both themes); 3/3 mermaid divs lay out (offline stub = harness limit, not a defect).

**TWO defects found + FIXED (edit_file dryRun&#8594;commit&#8594;get_file_info, invariants re-locked):**
1. **Unwrapped `width:100%` `<table>` &#8594; 15px document overflow at 380px** (both themes; the L30-class finding). Fix = wrap in `<div class="table-wrap">` (class already in main.css: `overflow-x:auto`). Table now scrolls inside its wrapper; document overflow 0. +80 B (292,219 &#8594; 292,299).
2. **Hardcoded `color="#222"` on all 7 inline SVGs &#8594; no dark-mode inversion** (currentColor pinned to #222, near-invisible on dark bg &#183; violates house standard of `color222 0`, cf. L27). Fix = `color="#222"` &#8594; `color="currentColor"` &#215;7 so the SVGs inherit the inverting body color. +56 B (292,299 &#8594; 292,355).

**Post-fix invariants re-verified (UTF-8 python3, fresh Claude-side copy): bytes 292,355; figure 20 / figcaption 20 / `</figure>` 20 / img 13 / svg 20 (7 inline + 13 overlay); em-dash U+2014 12 (0 new); literal U+00B7 0; `#667eea` 0 / `#764ba2` 0 / `color: white` 0; `color="#222"` 0 / currentColor 154; `<table>` 1 / `.table-wrap` 1; mermaid jsdelivr import 1 / rendered `class="mermaid"` divs 3; all c1&#8211;c13 + all 7 inline prefixes present** &#8212; all hard counts match close-target (only bytes shifted, +136 from the two fixes). QA byte-ladder: figure-close 292,219 &#8594; table-wrap 292,299 &#8594; currentColor **292,355**.

**L31 FULLY CLOSED.** Next-pointer &#8594; L32 (Particle Systems Overview, slug `particle_systems_overview`, next-link confirmed 1).
