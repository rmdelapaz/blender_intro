# Lesson 30 (Retopology Fundamentals) &#183; Integration Progress

**Status:** CLOSED (closed-with-known-minor resolved) &#8212; all 19 figs placed + #23 cross-ref + browser QA PASS @380/900px dark+light. Single QA finding (380px table overflow) FIXED via table-wrap; file re-locked at **263,608 B**.
**Module:** 7 (Advanced Modeling), lesson 3 of module. Slug `retopology_fundamentals`.
**Live file:** `lesson_30_retopology_fundamentals.html`
**Next-lesson link target:** `lesson_31_advanced_modifier_stack.html` (slug `advanced_modifier_stack`) &#8212; confirmed from nav (1 occurrence). Prev-link `lesson_29_hard_surface_modeling.html` also present (1).
**Date:** 2026-06-25

---

## BASELINE INVARIANT BLOCK (live, old-gen, created 2026-06-12, untouched)

UTF-8 python3 over a Claude-side copy of the live file (NOT grep). This is the LOCKED baseline; re-verify at every checkpoint.

| Invariant | Baseline count | Notes |
|-----------|---------------:|-------|
| bytes (disk) | 195,269 | |
| figure (open) | 0 | none yet |
| figure (close `</figure>`) | 0 | |
| figcaption | 0 | |
| img | 0 | |
| svg (open) | 0 | |
| **em-dash U+2014** | **16** | **PRESERVE verbatim** &#8212; locked baseline; recount via python3 at every checkpoint |
| literal U+00B7 (middot) | 0 | |
| arrow U+2192 | 77 | pre-existing prose (mermaid + body), untouched |
| `<table>` | 4 | see cleanup decision |
| `#667eea` | 7 | purple gradient, neutralize at integration |
| `#764ba2` | 4 | purple gradient, neutralize at integration |
| inline `style=` | 144 | |
| mermaid jsdelivr import | 1 | **LIVE harness &#8212; KEEP (see cleanup note)** |
| rendered `class="mermaid"` divs | **3** | 1 `graph LR` + 2 `graph TD` &#8212; **live diagrams, NOT dead** |
| `color="#222"` | 0 | |
| `color: white` | 26 | pre-existing card/footer styling |

**Section ids (7):** `what-is-retopology` / `why-retopology` / `manual-retopology` / `automated-solutions` / `detail-transfer` / `project` / `summary`.

Note: the image_requirements placement map references some ids that do NOT exist in the live file as `<section id=...>` (e.g. `good-vs-bad-topology`, `topology-fundamentals`). Placement map below is reconciled against the 7 ACTUAL section ids; sub-placement within a section is by heading/card and will be anchor-resolved at INTEGRATION.

---

## CLEANUP DECISION (MODERNIZE at integration &#8212; L28/L29 precedent, ADJUSTED for live mermaid)

Confirmed against actual L30 baseline:

- **Neutralize** `#667eea` (7) and `#764ba2` (4) &#8594; `currentColor` / 0 (light+dark safe). Target both &#8594; 0.
- **KEEP all 4 `<table>`** with header gradient neutralized (same KEEP-table rule as L28/L29; L30 has 4 tables vs L29's 1).
- **DO NOT strip the mermaid import.** &#8212; **DEVIATION from L28/L29.** L28/L29 had a DEAD jsdelivr import (0 rendered divs) so it was stripped. **L30 has 3 LIVE rendered `class="mermaid"` divs** (1 `graph LR` + 2 `graph TD`), so the jsdelivr import is load-bearing and is PRESERVED. Treat mermaid as an L24/L25-style live-harness lesson, not an L28/L29-style dead-harness lesson.
- **em-dash U+2014 = 16:** preserve verbatim; 0 new em-dashes in any added content (use `&#183;`).

Close-target hard counts (to be finalized at INTEGRATION): `#667eea` 0 / `#764ba2` 0 / `<table>` 4 / mermaid import 1 / rendered mermaid divs 3 / em-dash 16 / U+00B7 0.

---

## IMAGE-REQUIREMENTS TRIAGE

Source: `lesson_30_image_requirements.md` (30 candidates, with an explicit author priority ranking: 8 High / 11 Medium / 11 Lower, and a 7-SVG recommendation set).

### Roster &#8212; BUILD vs DEFER

**BUILD = 19** (High 8 + Medium 11). **DEFER = 11** (Lower).

**High (8):** #3 good-vs-bad topology &#183; #6 manual retopo workspace &#183; #7 snapping settings &#183; #15 baking setup diagram &#183; #17 render-properties bake settings &#183; #20 baking result comparison &#183; #23 tool comparison matrix &#183; #24 edge-loop patterns for joints.

**Medium (11):** #1 retopo concept comparison &#183; #4 edge-flow patterns &#183; #5 Poly Build tool interface &#183; #9 Poly Build operations guide &#183; #12 Quad Remesh settings panel &#183; #16 Shader Editor baking setup &#183; #18 object selection for baking &#183; #19 normal-map connection setup &#183; #22 baking troubleshooting guide &#183; #25 facial edge-flow diagram &#183; #27 performance impact visualization.

**DEFER &#8212; Lower (11):** #2 pipeline flowchart (mermaid already covers it) &#183; #8 shrinkwrap modifier &#183; #10 edge-loop creation process &#183; #11 retopo workflow steps &#183; #13 remesh quality comparison &#183; #14 topology analysis overlay &#183; #21 UV unwrapping for retopo &#183; #26 polygon budget examples &#183; #28 project workflow overview &#183; #29 export pipeline diagram &#183; #30 Instant Meshes interface.

### Format split (19 BUILD)

Driven by the requirements doc's SVG recommendation set (#2,11,15,23,27,28,29) intersected with BUILD, plus type (diagram/infographic &#8594; inline SVG; Blender-render / annotated screenshot / 3D render / composite &#8594; PNG w/ c{N} overlays).

- **inline SVG = 3:** `{15, 23, 27}`
  - #15 baking setup diagram (process flow/infographic)
  - #23 retopology tool comparison matrix (infographic table)
  - #27 performance impact visualization (infographic)
- **PNG (Blender-render + c{N} overlays) = 16:** `{1, 3, 4, 5, 6, 7, 9, 12, 16, 17, 18, 19, 20, 22, 24, 25}`
  - Screenshots/UI chrome: #5, #6, #7, #12, #16, #17, #18, #19 (8)
  - 3D renders / topology overlays: #1, #3, #4, #24, #25 (5)
  - Composites / multi-panel: #9, #20, #22 (3)

(Deferred SVG-recommended #2/#11/#28/#29 are Lower &#8594; not built unless reopened.)

### Placement map (figure &#8594; ACTUAL section id)

Reconciled against the 7 real section ids. Sub-anchor (card/heading) resolved at INTEGRATION.

| Section id | BUILD figures (in placement order) |
|------------|-------------------------------------|
| `what-is-retopology` | #1 |
| `why-retopology` | #27, #24 |
| `manual-retopology` | #3, #4, #25, #6, #7, #5, #9 |
| `automated-solutions` | #12, #23 |
| `detail-transfer` | #15, #16, #17, #18, #19, #20, #22 |
| `project` | (refs only: #16/#17/#18/#19; no new BUILD-only fig here) |
| `summary` | #23 (ref/reuse) |

Note: the requirements doc placed several good-vs-bad / edge-flow figures (#3, #4, #25) under a `good-vs-bad-topology` section that does NOT exist as a live `<section id>`; those are folded into `manual-retopology` (and the topology discussion within it) pending anchor resolution at INTEGRATION. Likewise #26 (Lower, deferred) was the doc's polygon-budget placement.

---

## ARCHITECTURE (locked, carry forward)

- PRODUCTION and INTEGRATION in **separate chats**.
- A phase with **&#8805;5 figures &#8594; own sub-chat.**
- INTEGRATION (BUILD = 19 &#8805; 6) &#8594; **own chat.**
- PNG pipeline: Blender-render with **NO baked labels** (all callouts via INTEGRATION `c{N}` overlays) &#8594; **cairosvg pixel-verify Claude-side before EVERY overlay commit** (LD19).
- Writes: `edit_file` dryRun &#8594; commit &#8594; `get_file_info` for all HTML edits; **`write_file` (never `create_file`)** for new files.
- Blender: **TRUE-PRISTINE** &#8212; verify before/after any rigged/staged scene. (Current: TRUE-PRISTINE per session.md, post-L28-B6 teardown / L29 close.)
- No Filesystem delete tool &#8212; remove temps via Blender bridge `os.remove`.
- `\\wsl$\` paths only. `blender:execute_blender_code` lowercase only.
- Warn Ray to start a fresh chat before auto-compaction.

### Suggested production phasing (for next chats; not started)

- **PNG sub-chats** (16 PNGs, &#8805;5 &#8594; own sub-chats): batch in &#8804;5-fig groups, e.g. UI-chrome group {5,6,7,12,16,17,18,19} split into 2 sub-chats; render/overlay group {1,3,4,24,25} one sub-chat; composite group {9,20,22} one sub-chat. Final batching set in the PRODUCTION chat.
- **SVG batch** (3 SVGs: {15,23,27}): one batch (pilot + 2, or all 3 since <5).
- **INTEGRATION** (19 figs): own chat after all production verified.

---

## PRODUCTION LOG

### SVG batch {15, 23, 27} &#8212; COMPLETE (2026-06-25)

All 3 inline-SVG figures built per IMAGE_STYLE_GUIDE v6, cairosvg pixel-verified Claude-side (light + dark), written to `images/` via `write_file`, confirmed on disk via `get_file_info`.

| Fig | File | id-prefix | viewBox | bytes (disk) | verify |
|----:|------|-----------|---------|-------------:|--------|
| #15 | `lesson_30_15_baking_setup_diagram.svg` | `bk` | 0 0 800 560 | 6,827 | light+dark PASS |
| #23 | `lesson_30_23_retopology_tool_comparison_matrix.svg` | `tc` | 0 0 800 560 | 6,732 | light+dark PASS |
| #27 | `lesson_30_27_performance_impact_visualization.svg` | `pi` | 0 0 800 560 | 5,139 | light+dark PASS |

**Compliance audit (all 3, python3 grep):** em-dash U+2014 = 0 (all separators `&#183;` entities) &#183; literal U+00B7 = 0 &#183; `#667eea`/`#764ba2`/`#2b2b2b` = 0 &#183; req-doc `#ff8c00`/`#00d9ff` = 0 &#183; `color="#222"` fallback present (1 each) &#183; `#FF6B00` brand orange present throughout &#183; currentColor theming verified resolving on both light and dark page backgrounds.

**L30 inline-SVG id-prefix registry:** #15 `bk` &#183; #23 `tc` &#183; #27 `pi` (collision-safe within lesson).

**Content source note:** structure/data/labels taken from `lesson_30_image_requirements.md` prompts #15/#23/#27; the req-doc's own `#2b2b2b/#ff8c00/#00d9ff` palette was NOT used &#8212; style-guide v6 (currentColor + `#FF6B00`) is the authority.

### PNG-A UI-chrome {5, 6, 7, 12, 16} &#8212; 5 of 5 DONE, COMPLETE (2026-06-25 / 2026-06-26)

All captures label-free (no baked callouts; c{N} overlays added at INTEGRATION). Scripted captures: full-window `screen.screenshot` to Windows tempdir &#8594; bridge-side Pillow crop &#8594; WSL `images\`. Manual captures (#7, #12): Win+Shift+S overlay-freeze snip saved direct to WSL `images\`. Verified on disk via `get_file_info` and visually via `copy_file_user_to_claude`.

| Fig | File | px | bytes (disk) | verify | capture |
|----:|------|----|-------------:|--------|---------|
| #5 | `lesson_30_05_poly_build_tool_interface.png` | 1920x943 | 591,408 | visual PASS | scripted: Edit Mode + Poly Build tool active (header shows Create Quads / Drag: Select Box), retopo cage over high-poly wireframe |
| #6 | `lesson_30_06_manual_retopo_workspace_setup.png` | 1920x943 | 586,142 | visual PASS | scripted: high-poly WIRE + hide_select, retopo SOLID+wire active, snap magnet ON (Face+Project), outliner shows both meshes |
| #7 | `lesson_30_07_snapping_settings_configuration.png` | 533x1293 | 128,296 | visual PASS | manual Win+Shift+S: snap dropdown popover open in 3D header, magnet lit, Snap Base/Target structure visible, Face Project highlighted under Snap Target for Individual Elements (snap re-set this chat via Face + FACE_PROJECT, torn down after) |
| #12 | `lesson_30_12_quad_remesh_settings_panel.png` | 729x649 | 68,020 | visual PASS | manual Win+Shift+S: QuadriFlow Remesh operator dialog open ("QuadriFlow Remesh the Selected Mesh"); props Use Mesh Symmetry / Preserve Sharp / Preserve Mesh Boundary / Preserve Attributes / Smooth Normals / Mode (Faces) / Number of Faces (4000) / Seed; launched from Object Data Properties &#8594; Remesh panel button over a staged dense UV sphere (48 seg + subsurf 2), torn down after |
| #16 | `lesson_30_16_shader_editor_baking_setup.png` | 1920x994 | 106,484 | visual PASS | scripted: Shader Editor, Principled&#8594;Output + selected/active Image Texture "Bake Target" (Character_Normal 2048 RGB, no-alpha), unconnected |

**#12 location correction (5.1.1):** QuadriFlow Remesh is NOT in the Object menu in 5.1.1. It is a button at the bottom of the **Object Data Properties &#8594; Remesh panel** (`DATA_PT_remesh`): the panel shows a Mode toggle row (Voxel / Blocks / Smooth / Sharp &#8212; confirmed NO Quad mode), and when Mode is non-Voxel the panel exposes a single **QuadriFlow Remesh** operator button; clicking it opens the operator dialog captured here. INTEGRATION caption must say QuadriFlow Remesh dialog, not a modifier. Dialog label discoveries for caption/overlay: control reads **Use Mesh Symmetry** (not "Use Symmetry") and **Preserve Mesh Boundary** (not "Preserve Boundary"); Mode enum value shown is **Faces** (target_faces).

**id/material note:** staged objects (HighPoly_Source, Retopo_Mesh), material (Retopo_Bake_Mat), and image (Character_Normal) were all removed at teardown; orphans purged.

**Snap attribute discovery (5.1.1):** "Project Individual Elements" is `tool_settings.snap_elements_individual = {'FACE_PROJECT'}` (NOT a `use_snap_project` bool, which does not exist in this build). Setting it couples `snap_elements` to show `{'FACE_PROJECT'}`. No QUAD enum on `RemeshModifier.mode`.

### PNG-B UI-chrome {17, 18, 19} &#8212; COMPLETE (2026-06-26)

All captures label-free (no baked callouts; c{N} overlays added at INTEGRATION). Scripted captures: full-window screenshot &#8594; Windows tempdir &#8594; bridge-side Pillow crop &#8594; WSL `images\`. Verified on disk via `get_file_info` and visually via `copy_file_user_to_claude`.

| Fig | File | px | bytes (disk) | verify | capture |
|----:|------|----|-------------:|--------|---------|
| #17 | `lesson_30_17_render_properties_bake_settings.png` | 1920x874 | 67,790 | visual PASS | scripted full-window screenshot &#8594; Win tempdir &#8594; Pillow crop; Bake panel expanded under Cycles via Properties search-filter "Bake" (Bake Type Normal, Selected to Active checked, Influence/Output sub-panels) |
| #18 | `lesson_30_18_object_selection_for_baking.png` | 1920x700 | 247,879 | visual PASS | scripted; 3D viewport, both spheres selected, LowPoly_Target white active outline = bake target, high &#8594; low order, outliner both meshes |
| #19 | `lesson_30_19_normal_map_connection_setup.png` | 1340x825 | 87,845 | visual PASS | scripted node-editor maximize/view_all/screenshot/restore (isolated calls per L18 maximize-stall); NormalBake_Mat chain Image Texture(Non-Color) &#8594; Normal Map(Tangent, Str 1.0) &#8594; Principled Normal &#8594; Output |

**Note:** PNG-B captured under CYCLES engine (deviation from EEVEE baseline; bake settings require Cycles). Engine restored to EEVEE + bake settings reset (use_selected_to_active False, margin 16, cage_extrusion 0.0, normal_space TANGENT, cycles.bake_type COMBINED) at teardown. Scene verified TRUE-PRISTINE (Camera+Cube+Light, EEVEE/AgX/None, world 0.88/1.0, 1920x1080@100/24, snap off INCREMENT, Object mode, 1 mesh, 0 mats); NODE_EDITOR area reconverted to VIEW_3D, N-panel restored, object_outline default; 7 temps removed via bridge `os.remove`.

### PNG-C render/topology {1, 3, 4, 24, 25} &#8212; COMPLETE (2026-06-26)

All plain-grey topology renders (LD17 color recipe NOT used; `render.opengl` via scene camera + viewport `view_context=True`; AgX/world/res UNTOUCHED all chat, no render-setting restore needed). Label-free (c{N} overlays at INTEGRATION). SOLID STUDIO+cavity, `show_wire`+`show_all_edges` ON (LD15), deselect-all + active=None before each capture. Relay TEMP &#8594; Pillow &#8594; WSL `images\` (UNC-truncation workaround). Verified on disk via `get_file_info` and visually via `copy_file_user_to_claude`.

| Fig | File | px | bytes (disk) | verify | capture |
|----:|------|----|-------------:|--------|---------|
| #1 | `lesson_30_01_retopology_concept_comparison.png` | 1920x1080 | 1,463,213 | visual PASS | dense high-poly sphere vs clean low-poly retopo sphere, deselected neutral grey |
| #3 | `lesson_30_03_good_bad_topology_comparison.png` | 1920x1080 | 1,206,238 | visual PASS | left messy triangulated jittered limb / right clean quad limb, strong thumbnail contrast |
| #4 | `lesson_30_04_edge_flow_patterns.png` | 1920x1080 | 1,251,455 | visual PASS | hand-authored low-poly head base mesh (real facial edge-flow), three-quarter view; eye-socket loop rings, nose bridge/tip relief, mouth loop band, cheek/jaw flow; overlay host for flow callouts |
| #24 | `lesson_30_24_edge_loop_patterns_joints.png` | 1920x1080 | 1,009,652 | visual PASS | bmesh quad-tube arm bent at elbow; concentric edge loops clustered at shoulder/elbow/wrist (deformation topology); capped ends |
| #25 | `lesson_30_25_facial_edge_flow_diagram.png` | 1080x1920 | 1,490,843 | visual PASS | same head base mesh, front portrait view; concentric eye loops + mouth loop band + radial nose flow read front-on; overlay host for facial flow callouts |

**#4/#25 head base-mesh decision (Ray, this chat):** crude bmesh-sculpted UV-sphere faces do NOT read as a face at render scale (the resume-note KEY DECISION). Tried option 2 (real base-mesh asset): Sketchfab integration disabled (needs API key); PolyHaven (toggled on) has NO human head/bust meshes (props/furniture only) &#8212; both connector routes dead-ended. Went option A: hand-authored a low-poly head with REAL feature loops &#8212; a half-face grid warped so rows flow concentrically around eye + mouth centers, mirrored on X, then relief-sculpted (brow / recessed eye sockets / nose ridge+tip+nostrils / lips+philtrum / cheeks / chin) OVER the loop cage so the topology stays face-style (not lat/long). Reads believably front-on (#25) and three-quarter (#4). This is the host geometry; all colored edge-loop labels are c{N} overlays at INTEGRATION.

**Capture-rig note:** `bpy.ops.view3d.view_camera()` is a TOGGLE &#8212; calling it blind flips OUT of camera view when already in CAMERA. Guard with `if region_3d.view_perspective != 'CAMERA': view_camera()` for deterministic camera framing before `render.opengl(view_context=True)`. (`view_context=False` drops object `show_wire` overlay, so wire renders REQUIRE `view_context=True` + viewport in CAMERA view.)

**id/material note:** demo meshes (Face_EdgeFlow, Arm_EdgeLoops) and the shared `PNGC_Clay` material are removed at teardown (below); 5 temp previews removed via bridge `os.remove`.

### PNG-D composite {9, 20, 22} &#8212; COMPLETE (2026-06-26)

All three multi-panel composites built label-free (no baked callouts; c{N} overlays added at INTEGRATION). Per-panel render &#8594; Win tempdir &#8594; Pillow relay to WSL `_temp_` &#8594; Pillow-composite with `#FF6B00` 2px dividers &#8594; panel temps removed via `os.remove`. Verified on disk via `get_file_info` and visually via `copy_file_user_to_claude`.

| Fig | File | px | bytes (disk) | verify | capture |
|----:|------|----|-------------:|--------|---------|
| #9 | `lesson_30_09_poly_build_operations_guide.png` | 2162x2162 | 1,787,575 | visual PASS | 2x2 plain-grey clay topology renders via `render.opengl(view_context=True)`, SOLID STUDIO+cavity, show_wire+show_all_edges. TL extrude (new quad standing proud) / TR place-vertex (clean grid + small floating pyramid nub = visible placed-vertex target) / BL move-vertex (interior vert pulled off-plane, quads deformed) / BR delete (3x3 grid, center face removed = hole). Each panel object-mode opengl renders; verts/edit-dots do NOT render so place-vertex uses a nub proxy |
| #20 | `lesson_30_20_baking_result_comparison.png` | 3244x1080 | 1,405,756 | visual PASS | 3-panel, ALL via F12 `render.render` (Cycles, 64 samp) for parity (panel 2 needs true normal-map look). Low-poly = icosphere subdiv3 (320f, shade-smooth); high-poly = icosphere subdiv6 (20480f) with SHALLOW high-freq sin-fbm relief (amp ~0.022, no external noise lib). Normal map baked high&#8594;low (Cycles selected-to-active, TANGENT, cage 0.05, 1024). L=low-only clay / C=low+normal (NormalMap strength 2.2) / R=high-poly clay. KEY: smart_project gave tiny scattered islands &#8594; black artifact panel; FIX = `uv.sphere_project` (continuous tangent basis, fills 0-1) gave clean blue/purple map (656KB vs 3KB). Minor sphere-pole pinch on C panel, acceptable |
| #22 | `lesson_30_22_baking_troubleshooting_guide.png` | 2162x2162 | 2,454,009 | visual PASS | 2x2, four failure-state normal maps synthesized from the good #20 bake via Pillow, rendered on the low-poly (F12 Cycles) so each problem reads on the model. TL blank (flat neutral 128,128,255 = nothing baked) / TR artifacts (blocky checker + speckle = ray distance too large) / BL gaps (neutral-blue ellipse holes in detail = wrong/short ray distance, missing coverage) / BR seams (hard crossing discontinuity lines at UV boundaries). All four read distinctly at thumbnail |

**#20 normal-bake reliability note (NEW, carry forward):** for a tangent-space normal bake onto a sphere-like low-poly, `bpy.ops.uv.smart_project` produces many tiny islands with inconsistent tangents &#8594; the bake covers almost no UV area (3KB output) and the Normal Map node reconstructs garbage (black self-shadowed zones). Use `bpy.ops.uv.sphere_project(direction='VIEW_ON_EQUATOR', align='POLAR_ZX')` for a single continuous island filling 0-1 space; bake then covers the whole surface coherently. Tune relief amplitude SHALLOW (~0.02) so the normal map reads as surface texture, not form-breaking; push read with NormalMap node Strength 2.0&#8211;2.2 rather than deeper geometry. Bake requires BOTH source+target render-enabled (`hide_render=False`) and the target's active material must be the bake material with the target Image Texture node selected+active (a NormalMap-view material left on the target &#8594; bake CANCELLED).

**#9 place-vertex proxy note (carry forward):** object-mode `render.opengl` does NOT render loose vertices or edit-mode dots, so a "place vertex" operation has no native visible glyph. Host the placed vertex as a small floating 4-tri pyramid nub proud of the grid surface; it gives the INTEGRATION c{N} overlay a target and reads as a single placed point distinct from the extrude/move/delete panels.

**id/material/image note (PNG-D):** demo objects (PB9_p1_extrude, PB9_p2_place, PB9_p3_move, PB9_p4_delete, BK20_high, BK20_low) + materials (PNGD_Clay, BK20_BakeMat, BK20_NormalView, BK22_TroubleMat) + the baked image (BK20_NormalBake) + all loaded BK22_* failure images are removed at teardown (below); all panel + inspect temps removed via bridge `os.remove`.

### PNG batches remaining
- ~~**PNG-A** {5, 6, 7, 12, 16}~~ &#8212; COMPLETE (all 5 verified on disk, label-free)
- ~~**PNG-B** UI-chrome {17, 18, 19}~~ &#8212; COMPLETE (all 3 verified on disk, label-free)
- ~~**PNG-C** render/topology {1, 3, 4, 24, 25}~~ &#8212; COMPLETE (all 5 verified on disk, label-free)
- ~~**PNG-D** composite {9, 20, 22}~~ &#8212; COMPLETE (all 3 verified on disk, label-free)

**ALL PRODUCTION COMPLETE** &#8212; 19/19 BUILD figures on disk (3 SVG + 16 PNG). INTEGRATION next (19 figs, own chat).

Blender at factory pristine at this chat's close (L22-close baseline: Camera+Cube+Light, EEVEE/AgX/None, world 0.88/1.0, 1920x1080@24, 0 mats, snap off, Object mode). AgX/world/res never changed this chat (UI-chrome captures exempt from the color-dependent render recipe), so no render-setting restore was needed.

---

## PER-COMMIT LOG

Byte-ladder from baseline 195,269. dryRun &#8594; commit &#8594; get_file_info each.

### Cleanup (5 commits)

| # | Commit | bytes after | delta |
|--:|--------|------------:|------:|
| 1 | Card1 (What You'll Learn): gradient+white &#8594; orange left-rail, themed text | 195,144 | -125 |
| 2 | Card2 (Project Brief): same neutralization | (chain) | |
| 3 | Card3 (Key Takeaways): same neutralization | (chain) | |
| 4 | Card4 (Final Thoughts): same neutralization (em-dashes in body preserved verbatim) | (chain) | |
| 5 | Mermaid #667eea &#8594; #FF6B00 (primaryBorderColor + style C fill + style D fill) | 194,613 | |

**Post-cleanup invariants (python3 over Claude-side copy):** #667eea 0 &#183; #764ba2 0 &#183; color: white 0 &#183; &lt;table&gt; 4 &#183; class="mermaid" 3 &#183; jsdelivr mermaid import 1 &#183; em-dash U+2014 16 &#183; literal U+00B7 0 &#183; #FF6B00 7. Post-cleanup byte baseline **194,613**.

### Figures (19 commits)

| fig | c{N} | section | bytes after | overlay verify |
|----:|------|---------|------------:|----------------|
| #1 | c1 | what-is-retopology | 197,048 | cairosvg PASS (2 green badges HIGH-POLY SOURCE / LOW-POLY RETOPO; measured sphere centers L(388,664) R(1515,662)) |
| #27 | SVG | why-retopology | 204,009 | inline, pi-* ids, color=#222 stripped |
| #24 | c16 | why-retopology | 206,980 | cairosvg PASS (3 green badges SHOULDER/ELBOW/WRIST LOOPS; joints L(270,357) C(730,403) R(1500,640)) |
| #3 | c2 | manual-retopology | 208,901 | cairosvg PASS (red BAD TOPOLOGY L-subject ctr(444,545) / green GOOD TOPOLOGY R-subject ctr(1442,539); anchor: after section intro p, before Setting Up h3) |
| #4 | c3 | manual-retopology | 211,792 | cairosvg PASS (3 green EYE LOOPS / NOSE FLOW / MOUTH LOOPS, 3-quarter head; sequential after #3) |
| #25 | c4 | manual-retopology | 214,834 | cairosvg PASS (3 green EYE LOOPS / NOSE FLOW / MOUTH LOOPS, front portrait 1080x1920; sequential after #4) |
| #6 | c5 | manual-retopology | 217,868 | cairosvg PASS (3 green WIRE SOURCE / RETOPO CAGE / SNAP: FACE; 1920x943; snap magnet ctr(796,57), cage ctr(635,400); anchor: after Workspace Configuration card close, before Essential Retopology Settings h3) |
| #7 | c6 | manual-retopology | 220,771 | cairosvg PASS (3 green BASE: CLOSEST / TARGET / FACE PROJECT; 533x1293 portrait popover; Closest btn ctr(99,181), Face row ctr(268,458), Face Project ctr(268,737); DEEPER-INDENT figure inside Snap to Surface Configuration card, after X-Ray list before card close) |
| #5 | c7 | manual-retopology | 223,732 | cairosvg PASS (3 green POLY BUILD TOOL / CREATE QUADS / RETOPO CAGE; 1920x943; active tool icon ctr(38,875) [NOTE: lit tool is bottom-most toolbar icon, NOT the upper cube icon], Create Quads header ctr(153,80), cage ctr(640,400); anchor: after Poly Build card+QuickRef close, before Manual Retopology Workflow h3, sequential before #9) |
| #9 | c8 | manual-retopology | 226,115 | cairosvg PASS (composite-overlay, 4 centered green badges EXTRUDE QUAD / PLACE VERTEX / MOVE VERTEX / DELETE FACE; 2162x2162 2x2; dividers cross x1080 y1080, panel ctrs L540/R1620 T540/B1620, badges near panel bottoms; anchor: between #5 </figure> and Manual Retopology Workflow h3, default16) |
| #12 | c9 | automated-solutions | 228,956 | cairosvg PASS (standard highlight+leader+badge, 3 green USE MESH SYMMETRY / NUMBER OF FACES / REMESH; 729x649 QuadriFlow Remesh dialog; lit checkbox ctr(324,144), Number of Faces field ctr(505,479), lit-blue Remesh button ctr(192,603); anchor: after Quad Remesh card close </div>, before Instant Meshes h3, default16) |
| #23 | SVG | automated-solutions | 237,488 | inline, tc-* ids, color=#222 stripped; cairosvg light+dark PASS (5-row method matrix, hybrid row highlighted); anchor: after Tool Comparison Matrix card close (table+mermaid), before Common Automated Retopo Mistakes h3, default16 |
| #15 | SVG | detail-transfer | 246,323 | inline, bk-* ids, color=#222 stripped; cairosvg light+dark PASS (6-stage bake flow, stage 5 Normal Map highlighted); anchor: after Understanding Texture Baking card close (nested blue info-card inside), before Preparing for Baking h3, default16 |
| #16 | c10 | detail-transfer | 249,457 | cairosvg PASS (standard highlight+leader+badge, 3 green PRINCIPLED BSDF / IMAGE TEXTURE NODE / SELECTED (ACTIVE); 1920x994 Shader Editor; Principled header ctr(797,124), Bake Target header ctr(797,613), dashed selection box around active node 628-966 x 597-925; anchor: DEEPER-INDENT inside Step-by-Step Baking Process card, after Phase 1 </ol> before Phase 2 <p>) |
| #17 | c11 | detail-transfer | 252,416 | cairosvg PASS (standard highlight+leader+badge, 3 green BAKE PANEL / BAKE TYPE: NORMAL / SELECTED TO ACTIVE; 1920x874 Render Properties; blue Bake header band y572-606 (ctr left x105), Normal dropdown field ctr(900,707), lit-blue Selected to Active checkbox ctr(114,788); anchor: DEEPER-INDENT, after Phase 2 </ol> before Phase 3 <p>) |
| #18 | c12 | detail-transfer | 255,267 | cairosvg PASS (standard highlight+leader+badge, 3 green HIGH-POLY SOURCE / LOW-POLY (ACTIVE) / SELECT LOW-POLY LAST; 1920x700 viewport; left smooth sphere ctr(645,408) dark-orange selected outline, right faceted sphere ctr(945,525) bright active outline = bake target; anchor: DEEPER-INDENT, after Phase 3 </ol> before Phase 4 <p>) |
| #19 | c13 | detail-transfer | 258,339 | cairosvg PASS (standard highlight+leader+badge, 3 green IMAGE TEXTURE / NORMAL MAP NODE / SET TO NON-COLOR; 1340x825 node chain; Character_Normal hdr ctr(481,535), Normal Map hdr ctr(798,532), Non-Color Color Space field ctr(522,731); chain Image Texture Color->Normal Map->Principled Normal visible; anchor: DEEPER-INDENT, after Phase 4 </ol> before Baking Quick Checklist card [4-line anchor incl h4 — green-card style #e8f5e9 recurs 7x]) |
| #20 | c14 | detail-transfer | 260,312 | cairosvg PASS (composite-overlay, 3 centered green badges LOW-POLY ONLY / LOW-POLY + NORMAL MAP / HIGH-POLY SOURCE; 3244x1080 3-panel-horiz; dividers x1080/x2162, panel ctrs L540/C1621/R2703, badges y980 near panel bottoms; anchor: after Baking Quick Checklist card + outer baking-process card both close </div></div>, before Baking Other Map Types h3, default16) |
| #22 | c15 | detail-transfer | 262,889 | cairosvg PASS (composite-overlay, 4 centered green badges NOTHING BAKED / RAY DISTANCE TOO LARGE / RAY DISTANCE TOO SHORT / UV SEAM ERRORS; 2162x2162 2x2; dividers cross x1080 y1080, quadrant ctrs TL/TR(540/1621,540) BL/BR(540/1621,1621), badges TL/TR y1010 BL/BR y2090 near panel bottoms; anchor: DEEPER-INDENT inside Troubleshooting "Common Baking Problems" card [opens col20], after h4 before first Problem <p>, figure col20) |

(remaining: none — all 19 figures placed)

---

## c{N} OVERLAY REGISTRY

Assignment (16 PNGs): c1=#1 &#183; c2=#3 &#183; c3=#4 &#183; c4=#25 &#183; c5=#6 &#183; c6=#7 &#183; c7=#5 &#183; c8=#9 &#183; c9=#12 &#183; c10=#16 &#183; c11=#17 &#183; c12=#18 &#183; c13=#19 &#183; c14=#20 &#183; c15=#22 &#183; c16=#24. Composite-overlay variant (centered per-panel badge, no highlight/leader): c8/#9, c14/#20, c15/#22. Standard highlight+leader+badge: the rest. (SVG #15/#23/#27 are inline, no c{N}.)

| c{N} | fig | px | callouts | status |
|------|----:|----|----------|--------|
| c1 | #1 | 1920x1080 | HIGH-POLY SOURCE (green, L sphere) &#183; LOW-POLY RETOPO (green, R sphere) | DONE, verified |
| c2 | #3 | 1920x1080 | BAD TOPOLOGY (red, L limb) &#183; GOOD TOPOLOGY (green, R limb) | DONE, verified |
| c3 | #4 | 1920x1080 | EYE LOOPS &#183; NOSE FLOW &#183; MOUTH LOOPS (all green, 3-quarter head) | DONE, verified |
| c4 | #25 | 1080x1920 | EYE LOOPS &#183; NOSE FLOW &#183; MOUTH LOOPS (all green, front portrait) | DONE, verified |
| c5 | #6 | 1920x943 | WIRE SOURCE &#183; RETOPO CAGE &#183; SNAP: FACE (all green) | DONE, verified |
| c6 | #7 | 533x1293 | BASE: CLOSEST &#183; TARGET &#183; FACE PROJECT (all green, portrait popover) | DONE, verified |
| c7 | #5 | 1920x943 | POLY BUILD TOOL &#183; CREATE QUADS &#183; RETOPO CAGE (all green) | DONE, verified |
| c8 | #9 | 2162x2162 | EXTRUDE QUAD &#183; PLACE VERTEX &#183; MOVE VERTEX &#183; DELETE FACE (all green, composite-overlay 2x2 centered per-panel) | DONE, verified |
| c9 | #12 | 729x649 | USE MESH SYMMETRY &#183; NUMBER OF FACES &#183; REMESH (all green, QuadriFlow Remesh dialog) | DONE, verified |
| c16 | #24 | 1920x1080 | SHOULDER LOOPS &#183; ELBOW LOOPS &#183; WRIST LOOPS (all green) | DONE, verified |
| c10 | #16 | 1920x994 | PRINCIPLED BSDF &#183; IMAGE TEXTURE NODE &#183; SELECTED (ACTIVE) (all green, Shader Editor bake setup) | DONE, verified |
| c11 | #17 | 1920x874 | BAKE PANEL &#183; BAKE TYPE: NORMAL &#183; SELECTED TO ACTIVE (all green, Render Properties Bake panel) | DONE, verified |
| c12 | #18 | 1920x700 | HIGH-POLY SOURCE &#183; LOW-POLY (ACTIVE) &#183; SELECT LOW-POLY LAST (all green, viewport selection order) | DONE, verified |
| c13 | #19 | 1340x825 | IMAGE TEXTURE &#183; NORMAL MAP NODE &#183; SET TO NON-COLOR (all green, node-chain connection setup) | DONE, verified |
| c14 | #20 | 3244x1080 | LOW-POLY ONLY &#183; LOW-POLY + NORMAL MAP &#183; HIGH-POLY SOURCE (all green, composite-overlay 3-panel-horiz centered per-panel) | DONE, verified |
| c15 | #22 | 2162x2162 | NOTHING BAKED &#183; RAY DISTANCE TOO LARGE &#183; RAY DISTANCE TOO SHORT &#183; UV SEAM ERRORS (all green, composite-overlay 2x2 centered per-panel) | DONE, verified |

---

## FINAL INVARIANT TABLE

UTF-8 python3 over a Claude-side copy of the live file at INTEGRATION close (all 19 figures + #23 cross-ref committed). File on disk **263,184 B**.

| Invariant | Target | Final | Status |
|-----------|-------:|------:|--------|
| bytes (disk) | — | 263,184 | — |
| figure (open) | 19 | 19 | PASS |
| figure (close `</figure>`) | 19 | 19 | PASS |
| figcaption | 19 | 19 | PASS |
| img | 16 | 16 | PASS |
| svg (open) | 19 | 19 | PASS (3 inline SVG + 16 overlay) |
| em-dash U+2014 | 16 | 16 | PASS (baseline preserved verbatim) |
| literal U+00B7 (middot) | 0 | 0 | PASS |
| `#667eea` | 0 | 0 | PASS (neutralized at cleanup) |
| `#764ba2` | 0 | 0 | PASS (neutralized at cleanup) |
| `<table>` | 4 | 4 | PASS (KEEP-table rule) |
| rendered `class="mermaid"` divs | 3 | 3 | PASS (live diagrams) |
| mermaid jsdelivr import | 1 | 1 | PASS (load-bearing, preserved) |

All 19 BUILD figures integrated (3 inline SVG {15,23,27} + 16 PNG-overlay), all cairosvg-verified before commit. #23 also cross-referenced in summary "Choosing Your Approach" (prose ref, no second inline). Byte-ladder: baseline 195,269 → post-cleanup 194,613 → final 263,184.

---

## QA

Browser QA performed this session (real Chromium @ `/opt/pw-browsers/chromium-1194`). Harness constraints: Playwright CDN + jsdelivr blocked by allowlist; localhost unreachable from Chromium &#8594; page loaded via `file://` with the mermaid jsdelivr import swapped to an inline data-URI stub. 4 full-page captures @ 380 + 900px &#215; dark + light.

### Results (pre-fix)

- Live file 263,184 B confirmed; in-browser counts 19 figures / 4 tables / 3 mermaid. 16 PNGs all load, 0 broken (after eager + scroll-decode; lazy-load false-positives are harness artifacts).
- Composites #9 / #20 / #22: overlay badges stay anchored on panels, 1:1 scaling, orange dividers crisp &#8212; PASS both widths.
- Inline SVGs #15 / #23 / #27 (the 3 non-img figures): currentColor inverts correctly (light-on-dark / dark-on-light) &#8212; PASS. #23 summary cross-ref prose reads fine.
- 3 mermaid divs lay out without throwing (offline stub placeholder). Actual mermaid render UNVERIFIED offline = harness limitation, NOT a page defect.
- 900px: no overflow either theme &#8212; clean PASS.
- `ERR_FILE_NOT_FOUND` in console = favicon + `js/clipboard.js` + `js/course-enhancements.js` not staged in harness (exist in real WSL tree) = harness artifact, NOT a defect.

### Finding (FIXED)

- **380px both themes: page scrolled horizontally ~26px** (scrollW 406 vs 380). Culprit: the 4 `<table>`s carried inline `style="width:100%; border-collapse:collapse;"` and were NOT wrapped; the widest table's min-content (3 cols + `--spacing-sm` padding) exceeded the viewport. `.table-wrap{overflow-x:auto}` already existed in `main.css` (line ~276) but wrap-alone was insufficient (tested: 406&#8594;399, still over) because inline `width:100%` resolves against available width and never overflows the wrap.
- **Fix applied (this session):** wrapped all 4 tables in `<div class="table-wrap">` AND changed each table inline style to `width:100%; min-width:max-content; border-collapse:collapse;` so the table overflows the (scrolling) wrap instead of the page. Tables: Poly Build Quick Reference, Decision Framework, Tool Comparison Matrix, Decision Matrix. `edit_file` dryRun &#8594; commit &#8594; get_file_info; 8 edits, 0 new U+2014. File 263,184 &#8594; **263,608 B** (+424). Element counts (figure/figcaption/svg 19, img 16) unchanged.

### Re-locked invariants (post-fix)

| Invariant | Target | Final | Status |
|-----------|-------:|------:|--------|
| bytes (disk) | — | 263,608 | re-locked (was 263,184) |
| figure (open) | 19 | 19 | PASS |
| figure (close `</figure>`) | 19 | 19 | PASS |
| figcaption | 19 | 19 | PASS |
| img | 16 | 16 | PASS |
| svg (open) | 19 | 19 | PASS |
| em-dash U+2014 | 16 | 16 | PASS |
| literal U+00B7 (middot) | 0 | 0 | PASS |
| `<table>` | 4 | 4 | PASS |
| `.table-wrap` divs | 4 | 4 | PASS (new, table-wrap fix) |
| rendered `class="mermaid"` divs | 3 | 3 | PASS |
| mermaid jsdelivr import | 1 | 1 | PASS |

**L30 CLOSED.** Byte-ladder: baseline 195,269 &#8594; post-cleanup 194,613 &#8594; integration-final 263,184 &#8594; QA table-wrap fix **263,608**.
