# Lesson 05 Image Integration Progress

**Lesson:** `lesson_05_understanding_meshes_and_geometry.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Image directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
**Started:** 2026-05-19 (planning chat)
**Current state:** Phase 3 PRODUCTION COMPLETE. SVGs #8 and #9 authored; PNGs #10 and #11 captured via BlenderMCP; PNG #28 captured manually via Win+Shift+S. 8 of 30 integrated (4 SVGs + 4 PNGs); 13 of 30 produced or captured. HTML at 129.4 KB (132,484 bytes); not modified this chat.

This file is the running narrative log for Lesson 05 image production and integration. Modeled on `lesson_04_integration_progress.md`. Updates appended at milestone boundaries per `INTERRUPTION_RECOVERY.md` pillar 2.1 (save-first).

---

## Status

- 2026-05-20 — Phase 3 PRODUCTION chat. Authored 2 SVGs and captured all 3 PNGs for the `#mesh-density` and `#normals` sections of `lesson_05_understanding_meshes_and_geometry.html`. SVG #8 `lesson_05_08_density_comparison_sphere.svg` (7,411 bytes, id prefix `ds`) authored with the trade-off framing decision: paired-panel low-poly vs high-poly with use-case footers (Games, VR, backgrounds, mobile vs Film, product viz, hero close-ups, sculpting) rather than duplicating Phase 1 SVG #2's segment-count progression. Placement locked: after line 872 (end of the "fewer polygons" list in `#mesh-density`), before the Density Decision mermaid block at line 874. SVG #9 `lesson_05_09_smooth_vs_flat_shading.svg` (9,991 bytes, id prefix `sf`) authored as paired-panel: left FLAT panel shows the same 12-gon silhouette with sharp facet edges and 12 green per-face normal arrows (`#4ADE80`, using a shared SVG marker definition for the arrowhead); right SMOOTH panel shows the same 12-gon with very faint edges, a smooth radial gradient fill, and 12 green per-vertex normal arrows radiating outward. Placement locked: after the Smooth Shading card (line 1033), before the "Try It Now: Smooth vs Flat" card (line 1035). Both SVGs follow the locked house style (800x560 viewBox, top 3px orange accent, system-ui font, retain `color="#222"` on standalone files, will strip on inline). Zero new em-dashes anywhere in the SVG copy (commas, semicolons, and periods used throughout). BlenderMCP capture session: block 1 manually cleaned up the Phase 2 leftover MeshCountCube via `bpy.data.objects.remove(obj, do_unlink=True)` plus orphan-mesh cleanup, added a fresh `primitive_uv_sphere_add(segments=16, ring_count=8, radius=1.0)` named `NormalSphere` (114 verts, 128 faces; mid-low-poly chosen so individual normal arrows are readable), set 1280x720 render config with `BLENDER_EEVEE_NEXT` try-set falling back to `BLENDER_EEVEE` on `TypeError` (same as Phase 2), set the user-perspective view rotation via `r3d.view_rotation = Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=5.0`, entered Edit Mode, configured overlays (`show_face_normals=True`, `normals_length=0.3`, vertex_normals and split_normals off, face_orientation off), and OpenGL viewport rendered #10 `lesson_05_10_face_normals_visualization.png` (711,611 bytes) via `bpy.context.temp_override(window, screen, area, region)` + `bpy.ops.render.opengl(write_still=True, view_context=True)`. Block 2 stayed in Edit Mode on the same sphere, switched overlays (face_normals off, face_orientation on), used bmesh to find faces with `f.calc_center_median().z > 0.4` (48 of 128 faces, 37.5%, which approximates the top 1/3 cluster per the locked decision) and flipped them via `bmesh.ops.reverse_faces(bm, faces=faces_to_flip)` + `bmesh.update_edit_mesh(obj.data)`, then OpenGL viewport rendered #11 `lesson_05_11_flipped_normals_problem.png` (693,316 bytes). Single mixed-orientation capture per the locked decision (red flipped cap on top, blue correctly-oriented faces below). All four new image files verified post-write/post-render via `Filesystem:get_file_info`. #28 `lesson_05_28_normals_overlay_toggle.png` (149,601 bytes) captured manually via Win+Shift+S of the Overlays dropdown showing the Normals section with one section above and one below for context; initial save had a filename typo (`.pn.png`) which was renamed to `.png` via `Filesystem:move_file`. HTML not modified this chat.

- 2026-05-20 — Phase 2 INTEGRATION chat. Inlined all four `#mesh-components` PNGs (#5, #6, #7, #26) into `lesson_05_understanding_meshes_and_geometry.html` via four sequential `Filesystem:edit_file` cycles (dryRun then commit then `Filesystem:get_file_info` verify each). Grouping decision: distributed the selection-mode trio across the three subsections rather than grouping them at "How They Work Together"; each PNG sits after its matching Analogy info card (#5 after Vertex Analogy, #6 after Edge Analogy, #7 after Face Analogy), creating a "concept, then analogy, then real Blender screenshot" rhythm three times in a row. Considered grouping all three at the synthesis section; rejected because the mermaid hierarchy already carries that role and SVG #1's labeled cube already does the unified view. #26 placed after the "Try It Now: Examine a Cube's Components" card (before the "Component Count and Complexity" h3 and its 4/8/482/507-vert table) so the 506-verts / 1010-edges / 506-faces stats overlay prefigures the Suzanne row that follows. Considered placing #26 inside the Try It Now card and as the table figure; both rejected (mid-list figure breaks the 7-step workflow rhythm; mid-table figure looks ugly). All four figures use plain `<figure>`/`<figcaption>` (no class), `<img loading="lazy">`, descriptive alt text. Figure at col 16; img and figcaption at col 20 (Phase 1 indent pattern). No new em-dashes anywhere in figcaptions or alt text (commas and parentheses instead); pre-existing em-dashes in source content preserved verbatim through every anchor (Vertex Analogy `vertices—specific points` and `substance—they're just`, Edge Analogy `themselves—they connect`, Face Analogy `surface—it's what keeps`). HTML size progression: 130,291 → 130,813 (+522 after #5) → 131,334 (+521 after #6) → 131,822 (+488 after #7) → 132,484 (+662 after #26); total Phase 2 INTEGRATION delta +2,193 bytes (2.1 KB; under the projected 4 KB because PNG figures are simpler and shorter than the Phase 1 inlined-SVG figures). Browser QA pass deferred to a later cleanup chat (bundles with the Phase 1 QA that was also deferred).

- 2026-05-20 — Phase 2 PRODUCTION chat. Captured the four `#mesh-components` PNGs in a single BlenderMCP session per the locked rules. Block 1 set up the shared scene (manual cleanup via `bpy.data.objects.remove(obj, do_unlink=True)`, fresh default cube at origin, sun light at (4,-4,6), 1280x720 render config, `BLENDER_EEVEE_NEXT` try-set with `BLENDER_EEVEE` fallback on enum error; fallback triggered as expected, engine settled on `BLENDER_EEVEE`), set the user-perspective view rotation via `r3d.view_rotation = Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with view_distance=7.0, entered Edit Mode, set vertex select mode, selected the 4 top-face vertices (z > 0) via bmesh, OpenGL viewport rendered #5 (`lesson_05_05_vertex_selection_mode.png`, 519,404 bytes). Block 2 switched to edge select mode and selected the 3 edges meeting at the top-front-right corner (via `corner_vert.link_edges`), rendered #6 (`lesson_05_06_edge_selection_mode.png`, 521,784 bytes). Block 3 switched to face select mode and selected the front face (normal.y < -0.5) plus top face (normal.z > 0.5), rendered #7 (`lesson_05_07_face_selection_mode.png`, 520,322 bytes). Block 4 removed the original cube, added a fresh cube, subdivided with `number_cuts=8`, picked 5 spread-out top faces (sorted by center x,y) and extruded them upward by 0.3 along Z, partial-selected 12 faces for a non-trivial stats readout (48 verts / 48 edges / 12 faces selected against 506 verts / 1010 edges / 506 faces total, coincidentally 1 vert under Suzanne's 507 in the lesson's reference table), enabled `space.overlay.show_stats = True`, rendered #26 (`lesson_05_26_component_count_ui.png`, 572,177 bytes). All four PNGs verified post-render via `Filesystem:get_file_info`. OpenGL render path used `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` against the first VIEW_3D area. Solid viewport shading; floor grid plus X/Y axes visible, Z axis line hidden so it doesn't dominate the frame. UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` worked cleanly from Blender Python on Windows; no fallback to Unix path needed. HTML not modified this chat.

- 2026-05-20 — Phase 1 INTEGRATION chat. Inlined all four Phase 1 SVGs into the `#what-are-meshes` section of `lesson_05_understanding_meshes_and_geometry.html`. Each insert used `Filesystem:edit_file` with `dryRun=true` first then commit with `dryRun=false`, followed by `Filesystem:get_file_info` verification. All four SVGs wrapped in plain `<figure>`/`<figcaption>` (no class), `color="#222"` stripped from the inlined root `<svg>` for dark-mode safety, content re-indented to figure-col-16 / svg-root-col-20 / svg-children-col-24 / deeper-nesting-col-28-and-32 / figcaption-col-20. Multi-line `<rect>` attribute continuations collapsed onto single lines on inline. Decorative ASCII-divider author comments pruned from #1 (the `=========== Composition area ===========` and `=========== THREE ANNOTATION CARDS ===========` blocks); short structural comments like `<!-- Panel 1: 8 segments -->` and `<!-- Cell: Plane -->` kept. Standalone files in `images/` left untouched (preserved verbatim as fallback). No new em-dashes; pre-existing em-dashes in source content preserved verbatim (`image\u2014up close` in The Mesh Concept paragraph, `work\u2014more pieces` in Real-World Analogy card, `topology\u2014different arrangements` in primitive types wrap-up paragraph). HTML size progression: 84,327 → 92,405 (+8,078 after #1) → 104,823 (+12,418 after #2) → 115,159 (+10,336 after #3) → 130,291 (+15,132 after #4); total Phase 1 delta +45,964 bytes (44.9 KB; higher than the projected ~30 KB because the 2→4 space per level indent expansion adds bytes on top of the raw SVG file sizes). Figcaptions: #1 cube showing the three building blocks of every mesh with a highlighted vertex, edge, and face plus a 1/2/3 keypress prompt; #2 four spheres at 8, 16, 32, 64 segments noting that doubling segments roughly quadruples the face count; #3 the two layers (container with Location/Rotation/Scale/Name on the left vs mesh data with Vertices/Edges/Faces on the right) and the Object Mode vs Edit Mode distinction; #4 the eight Shift+A primitives each labeled with its default vertex count. Browser QA pass deferred to a later cleanup chat.

- 2026-05-19 — Planning chat. Read `lesson_05_image_requirements.md` (42.6 KB, 30 images specified with AI prompts and placement suggestions). Read head of `lesson_05_understanding_meshes_and_geometry.html` to confirm section IDs match (`#what-are-meshes`, `#mesh-components`, `#mesh-density`, `#normals`, `#polygon-types`, `#topology`, `#manifold-geometry`, `#mesh-project`, `#summary` — all match). Locked phase plan: 6 phases across 30 images, distributed `4 / 4 / 5 / 6 / 5 / 6` by HTML section. Locked SVG-vs-PNG split: 15 SVGs (concept diagrams, comparisons, flowcharts, polygon primers — extending the requirements doc's 9 explicit SVG candidates to follow the locked house-style precedent from Lessons 03 and 04) plus 15 PNGs (Edit Mode screenshots, UI captures, and one stylized topology render the SVG style cannot serve well). Wrote this `lesson_05_integration_progress.md`. Image production has not yet started.

- 2026-05-20 — Phase 1 production chat (resumed after a mid-session interruption; first SVG had already been written before the break, three to go on resume). Authored all four `#what-are-meshes` SVGs and wrote them to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`. All four follow the locked house style: 800x560 viewBox (800x680 for #4 only, to fit the 2x4 grid), `color="#222"` retained on standalone files (will be stripped on inline), system-ui font stack, top 3px orange accent rect, heading at y=56 with 14pt subtitle at y=84, divider line at y=108, orange subhead at y=138 with 2-letter spacing, footer tip card with 4px orange accent rail. Carried forward the `#E63946` X-axis red and `#4A9EFF` Z-axis blue from Lesson 04 as canonical palette. No em-dashes used in any of the new SVG copy. Files written: #1 `lesson_05_01_mesh_components_labeled.svg` (6,853 bytes, id prefix `mc`), #2 `lesson_05_02_lowpoly_highpoly_progression.svg` (10,472 bytes, id prefix `lp`), #3 `lesson_05_03_mesh_vs_object_properties.svg` (8,414 bytes, id prefix `mo`), #4 `lesson_05_04_primitive_types_grid.svg` (12,957 bytes, id prefix `pt`). Each verified post-write via `Filesystem:get_file_info`. Sphere segment counts in #2 locked to Blender defaults: 8 segments = 32 faces / 26 verts, 16 = 128/114, 32 = 512/482 (matches Blender default UV sphere), 64 = 2048/1986. Primitive vertex counts in #4 locked to Blender defaults: Plane 4, Cube 8, UV Sphere 482, Ico Sphere 42, Cylinder 64, Cone 33, Torus 576, Suzanne 507. Suzanne rendered as stylized silhouette (main ellipse plus two ear ellipses plus eye and mouth marks) rather than realistic mesh wireframe. IMAGE_STYLE_GUIDE.md revision deferred (skipped to keep this chat focused on SVG production; can be picked up in the integration chat or in a dedicated pass). HTML not yet modified.

---

## Locked rules (carry forward from Lessons 03 and 04; see `lesson_04_completion_handoff.md` for full discussion)

**Paths:**
- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`

**File operations:**
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info`
- `Filesystem:write_file` for new files and small full-doc overwrites; never Claude's built-in `create_file`
- Tools are deferred; call `tool_search` before invoking

**Inline image pattern:**
- Plain `<figure>`/`<figcaption>` wrapper, no class
- PNGs: `<img loading="lazy">` with descriptive alt text
- Inline SVGs: re-indent to 20-space content depth; `color="#222"` stripped from inlined root `<svg>` (breaks dark mode); standalone `.svg` files in `images/` retain `color="#222"` for `<img>` fallback
- PNGs needing annotation callouts use the inline-stacked overlay pattern (wrapper div `position: relative; display: inline-block; max-width: 100%`, overlay SVG viewBox matches PNG pixel dimensions, `pointer-events: none`, namespaced `c{N}-*` ids); no baked-in raster callouts
- No new em-dashes anywhere in new content; pre-existing em-dashes in source content preserved verbatim
- 2 to 3 line `oldText` anchors for unique insertion points

**BlenderMCP capture (locked):**
- Lowercase `blender:execute_blender_code` (uppercase hangs)
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls (kills BlenderMCP addon)
- `BLENDER_EEVEE_NEXT → BLENDER_EEVEE` fallback when `BLENDER_EEVEE_NEXT` raises enum-value error
- Clean Blender state manually: `bpy.data.objects.remove(obj, do_unlink=True)`, cursor reset, etc.
- Pie menus and transient UI Blender's render API cannot reach: manual Win+Shift+S capture into `images/` directly

**Brand palette (updated through Lesson 04):**
- Blender brand / Orange operation badge: `#FF6B00`
- Course / structure / Z-axis blue: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external / Y-axis green: `#4ADE80`
- Portfolio / outcome: `#F5C242`
- X-axis red: `#E63946`
- Mesh structure (NEW for Lesson 05, candidate): TBD — propose during Phase 1 design if a new accent emerges naturally for vertex/edge/face component highlighting; otherwise reuse `#FF6B00` for vertices (Blender's own selection color), `#4ADE80` for normals (out-pointing direction), and existing palette for everything else

**Cadence:**
- One production chat plus one integration chat per phase (Lesson 04 cadence)
- Warn Ray before context gets tight; do not let auto-compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build

---

## Four-state placement-table legend

- `not captured; not integrated` (or `not produced; not integrated`) — image does not yet exist on disk
- `produced; not integrated` (or `captured; not integrated`) — image is on disk in `images/` but has not been inlined into the HTML
- `produced; handoff_written; not integrated` — intermediate state written when a production chat completes but its integration chat has not yet started
- `integrated` — image is inlined into the HTML, placement-table row and phase-plan row both reflect final state

---

## Placement table (30 images)

| # | Filename | Type | ID prefix | Section | Anchor (planned insertion point) | State |
|---|---|---|---|---|---|---|
| 1 | `lesson_05_01_mesh_components_labeled.svg` | SVG | `mc` | `#what-are-meshes` | After "The Mesh Concept" paragraph | integrated |
| 2 | `lesson_05_02_lowpoly_highpoly_progression.svg` | SVG | `lp` | `#what-are-meshes` | After "Real-World Analogy" info card | integrated |
| 3 | `lesson_05_03_mesh_vs_object_properties.svg` | SVG | `mo` | `#what-are-meshes` | After "Mesh Data vs Object" mermaid block | integrated |
| 4 | `lesson_05_04_primitive_types_grid.svg` | SVG | `pt` | `#what-are-meshes` | After "Mesh Types in Blender" list | integrated |
| 5 | `lesson_05_05_vertex_selection_mode.png` | PNG | `c5` | `#mesh-components` | After "Vertices: Points in Space" explanation | integrated |
| 6 | `lesson_05_06_edge_selection_mode.png` | PNG | `c6` | `#mesh-components` | After "Edges: Connections Between Vertices" explanation | integrated |
| 7 | `lesson_05_07_face_selection_mode.png` | PNG | `c7` | `#mesh-components` | After "Faces: Surfaces and Polygons" explanation | integrated |
| 26 | `lesson_05_26_component_count_ui.png` | PNG | `c26` | `#mesh-components` | After "Try It Now: Examine a Cube's Components" card | integrated |
| 8 | `lesson_05_08_density_comparison_sphere.svg` | SVG | `ds` | `#mesh-density` | After "fewer polygons" list, before Density Decision mermaid | produced; not integrated |
| 9 | `lesson_05_09_smooth_vs_flat_shading.svg` | SVG | `sf` | `#normals` | After Smooth Shading card, before "Try It Now: Smooth vs Flat" card | produced; not integrated |
| 10 | `lesson_05_10_face_normals_visualization.png` | PNG | `c10` | `#normals` | After Normal Analogy card, before "Why Normals Matter" h3 | captured; not integrated |
| 11 | `lesson_05_11_flipped_normals_problem.png` | PNG | `c11` | `#normals` | After "Flipped Normals: A Common Problem" list, before "Fixing Flipped Normals" card | captured; not integrated |
| 28 | `lesson_05_28_normals_overlay_toggle.png` | PNG | `c28` | `#normals` | After "Try It Now: See Face Normals" card, before "Flipped Normals" h3 | captured; not integrated |
| 12 | `lesson_05_12_triangle_diagram.svg` | SVG | `tri` | `#polygon-types` | After "Triangles (Tris)" card | not produced; not integrated |
| 13 | `lesson_05_13_quad_diagram.svg` | SVG | `qd` | `#polygon-types` | After "Quads (Quadrilaterals)" card | not produced; not integrated |
| 14 | `lesson_05_14_ngon_diagram.svg` | SVG | `ng` | `#polygon-types` | After "N-gons" card | not produced; not integrated |
| 15 | `lesson_05_15_polygon_types_comparison.svg` | SVG | `pc` | `#polygon-types` | After polygon-types mermaid block | not produced; not integrated |
| 16 | `lesson_05_16_sphere_topology_analysis.png` | PNG | `c16` | `#polygon-types` | Within "Try It Now: Identify Polygon Types" exercise | not captured; not integrated |
| 27 | `lesson_05_27_select_by_trait_menu.png` | PNG | `c27` | `#polygon-types` | Near polygon-types exercise as UI reference | not captured; not integrated |
| 17 | `lesson_05_17_edge_loop_selection.png` | PNG | `c17` | `#topology` | After "Edge Flow and Edge Loops" explanation | not captured; not integrated |
| 18 | `lesson_05_18_good_bad_topology.svg` | SVG | `gb` | `#topology` | After "Why Topology Matters" card | not produced; not integrated |
| 19 | `lesson_05_19_character_edge_flow.png` | PNG | `c19` | `#topology` | After "Topology Patterns" explanation | not captured; not integrated |
| 24 | `lesson_05_24_topology_pole_types.svg` | SVG | `tl` | `#topology` | After "Topology Patterns" card | not produced; not integrated |
| 29 | `lesson_05_29_inset_ngon_creation.png` | PNG | `c29` | `#topology` | In Exercise 6 section or n-gon-creation discussion | not captured; not integrated |
| 20 | `lesson_05_20_manifold_geometry.svg` | SVG | `mf` | `#manifold-geometry` | After "What Is Manifold Geometry?" explanation | not produced; not integrated |
| 21 | `lesson_05_21_nonmanifold_types.svg` | SVG | `nm` | `#manifold-geometry` | After "Non-Manifold Geometry Problems" card | not produced; not integrated |
| 22 | `lesson_05_22_nonmanifold_example.png` | PNG | `c22` | `#manifold-geometry` | Within "Try It Now: Finding Non-Manifold Elements" exercise | not captured; not integrated |
| 23 | `lesson_05_23_density_decision_flowchart.svg` | SVG | `df` | `#mesh-density` or `#summary` | Near "When to Use Different Densities" section | not produced; not integrated |
| 25 | `lesson_05_25_shading_toggle_ui.png` | PNG | `c25` | `#summary` | Within "Essential Concepts Reference" card | not captured; not integrated |
| 30 | `lesson_05_30_realworld_topology_examples.png` | PNG | `c30` | `#summary` or `#topology` | Summary section or end of Topology section | not captured; not integrated |

**Totals:**
- 15 SVGs: #1, #2, #3, #4, #8, #9, #12, #13, #14, #15, #18, #20, #21, #23, #24
- 15 PNGs: #5, #6, #7, #10, #11, #16, #17, #19, #22, #25, #26, #27, #28, #29, #30

---

## Phase plan

| Phase | Section(s) | Images | SVGs | PNGs | Cadence | Notes |
|---|---|---|---|---|---|---|
| 1 | What Are Meshes? (`#what-are-meshes`) | #1, #2, #3, #4 | 4 | 0 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All four SVGs inlined into HTML; HTML grew from 82.4 KB (84,327 bytes) to 127.2 KB (130,291 bytes), delta +45,964 bytes (44.9 KB). |
| 2 | Building Blocks (`#mesh-components`) | #5, #6, #7, #26 | 0 | 4 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All four PNGs inlined into the `#mesh-components` section via four sequential `Filesystem:edit_file` cycles; HTML grew from 127.2 KB (130,291 bytes) to 129.4 KB (132,484 bytes), delta +2,193 bytes (2.1 KB). Selection-mode trio distributed across the Vertex/Edge/Face subsections (one PNG after each Analogy info card); #26 placed after the "Try It Now: Examine a Cube's Components" card, prefiguring the Component Count and Complexity table that follows. **PRODUCTION (2026-05-20):** All four PNGs captured in a single BlenderMCP session: #5 (519,404 bytes), #6 (521,784 bytes), #7 (520,322 bytes), #26 (572,177 bytes; 506 verts / 1010 edges / 506 faces with stats overlay enabled, 12 faces partial-selected). Selection-mode trio shares the default-cube scene with view rotation set to Blender's default user perspective; #26 used a fresh subdivided-and-extruded cube. |
| 3 | Density + Normals + Shading (`#mesh-density`, `#normals`) | #8, #9, #10, #11, #28 | 2 | 3 | 1 production + 1 integration chat | **PRODUCTION COMPLETE 2026-05-20.** SVGs #8 (7,411 bytes) and #9 (9,991 bytes) authored; PNGs #10 (711,611 bytes) and #11 (693,316 bytes) captured via BlenderMCP; PNG #28 (149,601 bytes) captured manually via Win+Shift+S. All five image files verified. Locked placements: #8 after the "fewer polygons" list before the Density Decision mermaid; #9 after the Smooth Shading card before "Try It Now: Smooth vs Flat"; #10 after the Normal Analogy card before "Why Normals Matter"; #11 after the "Flipped Normals: A Common Problem" list before "Fixing Flipped Normals"; #28 after "Try It Now: See Face Normals" before "Flipped Normals" h3. Overlay design for #10, #11, and #28 deferred to Phase 3 INTEGRATION chat. |
| 4 | Polygon Types (`#polygon-types`) | #12, #13, #14, #15, #16, #27 | 4 | 2 | 1 production + 1 integration chat | Mostly SVG phase. Triangle/quad/n-gon trio (#12, #13, #14) plus comparison grid (#15) anchor the conceptual primer; PNG #16 shows real polygon distribution on a UV sphere; PNG #27 captures the Select-By-Trait menu UI. Largest phase by image count. |
| 5 | Topology and Edge Flow (`#topology`) | #17, #18, #19, #24, #29 | 2 | 3 | 1 production + 1 integration chat | Mixed phase. SVG #18 (good-vs-bad topology comparison) plus #24 (pole types diagram) anchor the conceptual side; PNGs #17 (edge loop selection), #19 (character edge flow wireframe), #29 (inset n-gon creation 3-step) capture Blender workflow. |
| 6 | Manifold + Summary + Reference (`#manifold-geometry`, `#summary`) | #20, #21, #22, #23, #25, #30 | 3 | 3 | 1 production + 1 integration chat | Mixed phase. SVGs #20, #21, #23 (manifold diagram, non-manifold edge types, density decision flowchart) plus PNGs #22 (non-manifold selection), #25 (shade smooth/flat UI), #30 (real-world topology examples). Final phase closes the lesson. |

**Total: 30 images = 4 + 4 + 5 + 6 + 5 + 6**

**HTML size projection:**

- Starting: 82.4 KB (84,327 bytes)
- Per-image growth average (extrapolated from Lessons 03 and 04): ~7-9 KB per inserted image including figure wrapper, alt text, figcaption, and (for SVGs) re-indented inline content; PNGs with overlay add ~3-5 KB for the overlay SVG on top of the image reference
- Projected per-phase deltas: Phase 1 ~30 KB; Phase 2 ~20 KB; Phase 3 ~40 KB; Phase 4 ~50 KB; Phase 5 ~40 KB; Phase 6 ~50 KB
- Projected final: 82.4 KB + ~230 KB ≈ 310-340 KB
- Comparable to Lesson 03 (231.8 KB) and larger than Lesson 04 (229.2 KB); biggest lesson in the course's image-integration program to date

---

## Available section

13 of 30 images produced or captured.

- `lesson_05_01_mesh_components_labeled.svg` (6,853 bytes, written 2026-05-20)
- `lesson_05_02_lowpoly_highpoly_progression.svg` (10,472 bytes, written 2026-05-20)
- `lesson_05_03_mesh_vs_object_properties.svg` (8,414 bytes, written 2026-05-20)
- `lesson_05_04_primitive_types_grid.svg` (12,957 bytes, written 2026-05-20)
- `lesson_05_05_vertex_selection_mode.png` (519,404 bytes, captured 2026-05-20)
- `lesson_05_06_edge_selection_mode.png` (521,784 bytes, captured 2026-05-20)
- `lesson_05_07_face_selection_mode.png` (520,322 bytes, captured 2026-05-20)
- `lesson_05_26_component_count_ui.png` (572,177 bytes, captured 2026-05-20)
- `lesson_05_08_density_comparison_sphere.svg` (7,411 bytes, written 2026-05-20)
- `lesson_05_09_smooth_vs_flat_shading.svg` (9,991 bytes, written 2026-05-20)
- `lesson_05_10_face_normals_visualization.png` (711,611 bytes, captured 2026-05-20)
- `lesson_05_11_flipped_normals_problem.png` (693,316 bytes, captured 2026-05-20)
- `lesson_05_28_normals_overlay_toggle.png` (149,601 bytes, captured 2026-05-20)

---

## Missing section

17 of 30 images missing.

- SVGs (9): #12, #13, #14, #15, #18, #20, #21, #23, #24
- PNGs (8): #16, #17, #19, #22, #25, #27, #29, #30

---

## ID prefix registry

Planned per-image SVG and PNG-overlay id prefixes for the Lesson 05 page. Each prefix unique on the page; collisions with prefixes from other lessons are fine since each lesson's HTML is a separate document.

**Inline SVGs (15):**
- `mc` (#1 Mesh Components), `lp` (#2 Lowpoly progression), `mo` (#3 Mesh vs object), `pt` (#4 Primitive types) — **used in standalone files, will namespace on inline**
- `ds` (#8 Density sphere), `sf` (#9 Smooth vs flat)
- `tri` (#12 Triangle), `qd` (#13 Quad), `ng` (#14 N-gon), `pc` (#15 Polygon comparison)
- `gb` (#18 Good vs bad topology), `tl` (#24 Topology poles)
- `mf` (#20 Manifold), `nm` (#21 Non-manifold types)
- `df` (#23 Density flowchart)

**PNG annotation overlays (15 candidates; some may not need overlays after the production chat decides):**
- `c5`, `c6`, `c7`, `c10`, `c11`, `c16`, `c17`, `c19`, `c22`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`

No collisions on the Lesson 05 page. The `c10` and `c11` prefixes are reused from Lesson 04's pattern (different page, different file — no actual collision).

---

## SVG design notes (locked patterns to reuse, new patterns to author)

**Reuse from Lessons 03 and 04:**

- *Decision tree pattern* (`lesson_03_14_navigation_workflow.svg`) — directly applicable to #23 (density decision flowchart). Primary branches plus dashed side-note callouts.
- *Two-column reference card* (`lesson_02_18_keyboard_shortcuts_reference.svg`, `lesson_03_18_navigation_shortcuts_reference.svg`, `lesson_04_14_keyboard_shortcuts.svg`) — not directly used in Lesson 05; lesson does not have a keyboard-shortcuts summary
- *Three-panel axis-comparison* (`lesson_04_04_axis_movement.svg`, `lesson_04_06_rotation_axes.svg`) — adaptable to #15 (polygon type comparison: triangle, quad, n-gon side-by-side)
- *Paired-panel comparison* (`lesson_04_05_global_local_axes.svg`, `lesson_04_10_duplication_comparison.svg`) — adaptable to #8 (density sphere low vs high), #9 (flat vs smooth shading), #18 (good vs bad topology)
- *Single-panel hero with annotation cards* (`lesson_04_11_origin_point.svg`) — **applied to #1 (mesh components labeled)** and adaptable to #20 (manifold geometry: edge with 2-face callout)

**New patterns authored in Phase 1:**

- *Density progression* (#2): 4-panel horizontal showing increasing sphere segments (8/16/32/64). Adapted the axis-comparison panel layout to a left-to-right progression with vertex count footers. Octagon at 8 segments, hexadecagon at 16, full circle silhouette with light ellipse wireframes at 32 and 64.
- *Split-view object vs mesh data* (#3): two halves divided by a dashed vertical line with a "vs" badge circle at the midpoint, each half showing the same cube with different annotation sets. Left half uses `#4A9EFF` blue for the OBJECT layer (Location/Rotation/Scale/Name tags around the cube with the origin point as focal anchor). Right half uses `#FF6B00` orange for the MESH DATA layer (Vertices/Edges/Faces tags with the top-front-right vertex emphasized and the front face filled).
- *Primitive types grid* (#4): 2x4 grid of 8 primitive shapes in a taller 800x680 viewBox. Plane drawn as 4-vertex trapezoid (perspective), Cube as standard 3-face cube outline, UV Sphere as circle with lat/long ellipse wireframe, Ico Sphere as hexagonal silhouette with internal triangle facets, Cylinder as two ellipses with side rails plus vertical wireframe, Cone as triangle plus base ellipse plus spokes, Torus as concentric ellipses with side-tube cross-sections, Suzanne stylized as silhouette (main ellipse, two ear ellipses, eyes, brows, mouth arc). Each cell carries a name header at the top and a vertex-count footer.

**Still to design in later phases:**

- *Geometric polygon primers* (#12, #13, #14): single large polygon centered on canvas with orange vertex dots, thick edge lines, and a centered label. Three SVGs share a near-identical template differing only in vertex count and label text. Author together as a coordinated trio.
- *Topology pole grid* (#24): 4-panel grid showing 3-pole, 4-pole, 5-pole, 6-pole vertices (lines converging at a central dot). Color-code panels (green/green/yellow/red) signaling acceptability per the requirements doc.
- *Non-manifold edge types grid* (#21): 4-panel grid showing boundary edge, triple edge, isolated vertex, wire edge. Each panel a clean diagram of the problem with red highlighting.

**Color usage as applied in Phase 1:**

- Vertices: `#FF6B00` Blender orange (matches Blender's selection color)
- Edges: highlighted edges in `#FF6B00`; regular edge wireframe in `currentColor` at varied stroke-opacity (0.85 silhouette, 0.45-0.55 internal)
- Faces (filled): `#FF6B00` at `fill-opacity="0.10"` for highlighted face; `currentColor` at 0.04-0.05 for neutral cube fills
- Object layer (Lesson 05 SVG #3 only): `#4A9EFF` Z-axis blue, repurposed as "container" color paired with mesh-data orange
- Color usage for normals/topology/manifold deferred to later phases per the original plan

---

## PNG capture notes (lock during Phase 2/3/4/5/6 production chats)

**Edit Mode selection-mode screenshots (#5, #6, #7):** capture sequence in a single BlenderMCP session. Default cube, enter Edit Mode, switch selection mode (1/2/3 keys), select 3-4 components, OpenGL viewport render at 1280x720. All three captures share scene setup; just the selection mode and selected-component subset differs.

**Face normals visualization (#10):** UV sphere in Edit Mode with Overlays > Normals > Face Normals enabled and an appropriately scaled normal-line length. Capture before geometry edits.

**Flipped normals (#11):** UV sphere with Face Orientation overlay enabled, some faces selected and flipped (using `mesh.flip_normals()` on the bmesh subset), then captured. Optionally a second capture after `bpy.ops.mesh.normals_make_consistent()` for the "after" panel; OR captured as two side-by-side renders composited into a single PNG via PIL.

**UI captures (#25 Shade Smooth/Flat menu, #27 Select-By-Trait submenu):** these are transient menus that BlenderMCP's render API cannot reach. Manual Win+Shift+S capture per the Lesson 04 #9 (snap pie menu) pattern. Document the capture procedure in this progress doc when Phase 6 production begins.

**Component count UI (#26):** Edit Mode top header bar with component counts visible. Set up an interesting scene (subdivided cube with a few extruded faces, ~500 verts) so the counts display non-trivial numbers. Capture via BlenderMCP if the bridge can reach the header; otherwise manual capture.

**Overlays Normals toggle (#28):** Viewport overlays dropdown expanded showing the Normals section. Likely manual capture (dropdown is transient UI).

**Edge loop selection (#17):** cylinder in Edit Mode with one horizontal edge loop selected via `bpy.ops.mesh.loop_select()` or the bmesh edge-loop walk. Capture at an angle showing the selected ring clearly.

**Sphere topology analysis (#16):** UV sphere in Edit Mode, two captures (or one capture with side-by-side panels) — one with triangle faces at the poles selected, another with quad faces in the middle band selected. The captures could share scene setup with a selection-state difference between them.

**Non-manifold example (#22):** cube with one face deleted, non-manifold edges selected via `bpy.ops.mesh.select_non_manifold()`. Capture in Edit Mode.

**Inset n-gon creation (#29):** 3-panel sequence — (1) cube face selected, (2) after inset, (3) after deleting inner face. Could be three separate BlenderMCP captures composited into a single PNG, or three frames of a single scene with overlay-driven step indicators. Decision deferred to Phase 5 production.

**Character edge flow (#19):** the trickiest PNG. Requires a stylized head model with clean topology and colored edge loops visible. Options: (a) use a stock free head mesh from Polyhaven or Sketchfab (Lesson 03 used similar approach for some PNGs), (b) build a simple low-poly head in BlenderMCP, (c) capture from an existing community model with attribution. Decision deferred to Phase 5 production; if the bridge approach proves too expensive in production time, downgrade #19 to a stylized SVG instead and adjust the SVG/PNG counts.

**Real-world topology examples (#30):** 3-panel showing cup, chair, and head with clean topology. Similar challenge to #19. Options: build simple low-poly examples in BlenderMCP and capture wireframes, or use stock meshes. Decision deferred to Phase 6 production.

---

## Next chat

**Recommended:** Phase 3 INTEGRATION. Inline the Phase 3 images into `lesson_05_understanding_meshes_and_geometry.html` at the locked placements (see placement-table anchor column and Phase plan row 3 notes above). Workflow: integrate bottom-up (highest line number first) so earlier line numbers stay stable across edits. Order: #9, then #11, then #28, then #10, then #8. Use `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit.

**Images to inline (5 total):**

- #8 `lesson_05_08_density_comparison_sphere.svg` — inline SVG. Strip `color="#222"` from root. Re-indent figure col 16, svg root col 20, svg children col 24, deeper 28 or 32, figcaption col 20. Multi-line `<rect>` continuations collapsed onto single lines. Decorative ASCII-divider comments pruned, short structural comments kept. Place after the "fewer polygons" list (end of trade-off discussion), before the Density Decision mermaid.
- #9 `lesson_05_09_smooth_vs_flat_shading.svg` — inline SVG. Same handling as #8. Notable: contains a `<defs>` block with one `<marker>` (sf-arrow, fill `#4ADE80`) and one `<radialGradient>` (sf-smooth-grad). Place after the Smooth Shading card, before the "Try It Now: Smooth vs Flat" card.
- #10 `lesson_05_10_face_normals_visualization.png` — `<img loading="lazy">` with descriptive alt text. May need overlay (inline-stacked pattern with namespaced `c10-*` ids); decide during integration. Place after the Normal Analogy card, before the "Why Normals Matter" h3.
- #11 `lesson_05_11_flipped_normals_problem.png` — `<img loading="lazy">`. May need overlay with `c11-*` ids labeling the flipped (red) cap and correct (blue) bottom. Decide during integration. Place after the "Flipped Normals: A Common Problem" list, before the "Fixing Flipped Normals" card.
- #28 `lesson_05_28_normals_overlay_toggle.png` — `<img loading="lazy">`. Needs `c28-*` overlay callouts pointing to the Normals toggle row in the dropdown (especially the Face Normals sub-toggle since that is the subject of #10). Place after the "Try It Now: See Face Normals" card, before the "Flipped Normals" h3.

**Overlay design (deferred from Phase 3 PRODUCTION):**

- #10: arrows in the screenshot ARE the visual subject; may not need overlay at all. If used, a single callout pointing at one normal arrow as "this is what a face normal looks like".
- #11: red cap vs blue base needs labeling. Two text labels ("FLIPPED" pointing at red top cap, "CORRECT" pointing at blue base) or a single legend block.
- #28: UI callout circle around the Normals toggle row (likely the "Face Normals" toggle specifically since that is the subject of #10).

**HTML size projection for Phase 3 INTEGRATION:**

- Starting: 132,484 bytes (129.4 KB)
- Per-image growth (extrapolated from Phase 1 SVG inlines and Phase 2 PNG inlines): SVG inlines roughly 10 to 15 KB each (#8 around 10 KB inline, #9 around 13 KB inline including the marker and gradient defs expansion); PNG with overlay roughly 3 to 5 KB each
- Projected delta: 35 to 45 KB
- Projected post-Phase-3: around 170 to 175 KB

**Style guide v3 done (2026-05-20).** `IMAGE_STYLE_GUIDE.md` updated from v2 to v3 at the close of the Phase 2 INTEGRATION chat. All four scope items closed: `#E63946` folded in as canonical X-axis red, dual roles documented for `#4ADE80` and `#4A9EFF`, axis color convention subsection added, orange tie-break rule added, cheat-sheet badge variant policy added. File grew 11,119 to 15,450 bytes. No existing SVGs need re-issue.

**Alternative next steps if Ray wants something other than Phase 3 INTEGRATION:**

- Lesson 04 docs cleanup pass (archive per-phase Lesson 04 handoff files into a subfolder or `status_archive.md`)
- Lesson 04 browser QA pass (verify all 14 Lesson 04 images render correctly in light and dark mode at desktop and mobile widths)
- Lesson 05 Phase 1+2 browser QA pass (verify the 4 inlined Phase 1 SVGs and the 4 newly-inlined Phase 2 PNGs render correctly in light and dark mode at desktop and mobile widths)
