# Lesson 30 (Retopology Fundamentals) &#183; Integration Progress

**Status:** PRODUCTION IN PROGRESS. SVG batch {15,23,27} COMPLETE + verified. 16 PNGs remaining (4 sub-chats).
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

### PNG-A UI-chrome {5, 6, 7, 12, 16} &#8212; 3 of 5 DONE, 2 PENDING MANUAL SNIP (2026-06-25)

All captures label-free (no baked callouts; c{N} overlays added at INTEGRATION). Full-window `screen.screenshot` to Windows tempdir &#8594; bridge-side Pillow crop &#8594; WSL `images\`. Verified on disk via `get_file_info` and visually via `copy_file_user_to_claude`.

| Fig | File | px | bytes (disk) | verify | capture |
|----:|------|----|-------------:|--------|---------|
| #5 | `lesson_30_05_poly_build_tool_interface.png` | 1920x943 | 591,408 | visual PASS | scripted: Edit Mode + Poly Build tool active (header shows Create Quads / Drag: Select Box), retopo cage over high-poly wireframe |
| #6 | `lesson_30_06_manual_retopo_workspace_setup.png` | 1920x943 | 586,142 | visual PASS | scripted: high-poly WIRE + hide_select, retopo SOLID+wire active, snap magnet ON (Face+Project), outliner shows both meshes |
| #16 | `lesson_30_16_shader_editor_baking_setup.png` | 1920x994 | 106,484 | visual PASS | scripted: Shader Editor, Principled&#8594;Output + selected/active Image Texture "Bake Target" (Character_Normal 2048 RGB, no-alpha), unconnected |

**PENDING MANUAL (transient popover/dialog &#8212; locked routing to Win+Shift+S overlay-freeze; bridge cannot hold popover for `screen.screenshot`):**
- **#7** `lesson_30_07_snapping_settings_configuration.png` &#8212; snap dropdown popover open in 3D header (Face mode + Project Individual Elements). Scene was pre-staged with snap = Face + Project ON during this chat, but teardown reset snap to factory off; fresh chat must re-set snap before the snip.
- **#12** `lesson_30_12_quad_remesh_settings_panel.png` &#8212; **req-doc "Remesh modifier Quad mode" is STALE.** Native Remesh modifier in 5.1.1 has only Blocks/Smooth/Sharp/Voxel (NO Quad). Authentic quad-remesh UI is the **QuadriFlow Remesh dialog** (Object &#8594; Quad Re-Mesh; props: Mode / Number of Faces / Smooth Normals / Preserve Sharp / Preserve Boundary / Use Mesh Symmetry). Capture that dialog. INTEGRATION caption must match (QuadriFlow, not a modifier).

**id/material note:** staged objects (HighPoly_Source, Retopo_Mesh), material (Retopo_Bake_Mat), and image (Character_Normal) were all removed at teardown; orphans purged.

**Snap attribute discovery (5.1.1):** "Project Individual Elements" is `tool_settings.snap_elements_individual = {'FACE_PROJECT'}` (NOT a `use_snap_project` bool, which does not exist in this build). Setting it couples `snap_elements` to show `{'FACE_PROJECT'}`. No QUAD enum on `RemeshModifier.mode`.

### PNG batches remaining
- **PNG-A** {7, 12} &#8212; 2 manual snips outstanding (this sub-chat's close-out)
- **PNG-B** UI-chrome {17, 18, 19} (3) &#8212; own sub-chat
- **PNG-C** render/topology {1, 3, 4, 24, 25} (5) &#8212; own sub-chat
- **PNG-D** composite {9, 20, 22} (3) &#8212; own sub-chat

Blender at factory pristine at this chat's close (L22-close baseline: Camera+Cube+Light, EEVEE/AgX/None, world 0.88/1.0, 1920x1080@24, 0 mats, snap off, Object mode). AgX/world/res never changed this chat (UI-chrome captures exempt from the color-dependent render recipe), so no render-setting restore was needed.

---

## PER-COMMIT LOG

(empty &#8212; integration not started)

---

## c{N} OVERLAY REGISTRY

(empty &#8212; production not started; 16 PNGs &#8594; c1&#8211;c16 to be assigned at INTEGRATION)

---

## FINAL INVARIANT TABLE

(empty &#8212; to be populated at INTEGRATION close)

---

## QA

(empty &#8212; browser QA @380/900px dark+light after INTEGRATION)
