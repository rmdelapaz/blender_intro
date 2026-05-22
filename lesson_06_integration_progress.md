# Lesson 06 Image Integration Progress

**Lesson:** `lesson_06_edit_mode_essentials.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Image directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
**Started:** 2026-05-21 (planning chat)
**Current state:** Planning complete. 6-phase plan locked (Option L: 10/10/8/6/8/8 across the 13 section IDs). 50 images total: 3 SVG (#8, #21, #44), 47 PNG. 0 of 50 produced or captured, 0 of 50 integrated. Next phase: Phase 1 PRODUCTION (10 images: SVG #8 plus PNGs #1, #2, #3, #4, #5, #6, #7, #9, #46).

This file is the running narrative log for Lesson 06 image production and integration. Modeled on `lesson_05_integration_progress.md` (post-archive-sweep shape locked 2026-05-21). Updates appended at milestone boundaries per `INTERRUPTION_RECOVERY.md` pillar 2.1 (save-first).

---

## Status

- 2026-05-21 — Planning chat. Read `lesson_06_image_requirements.md` (60.5 KB, 50 images specified with AI prompts, placement suggestions, and three-tier priority ranking: ~11 High, ~13 Medium, ~26 Lower). Read head of `lesson_06_edit_mode_essentials.html` (139,576 bytes, 2,861 lines) to confirm section IDs match the requirements doc; all 13 image-bearing section IDs present and accounted for (`#enter-edit-mode`, `#selection-modes`, `#proportional-editing`, `#loop-tools`, `#advanced-selection`, `#inset-outset`, `#mesh-cleanup`, `#extrude-operations`, `#duplicate-array`, `#spin-screw`, `#knife-tool`, `#subdivide`, `#bevel`; plus `#selection-tools` as a sub-anchor in advanced-selection and `#lesson-summary` for the closer, neither of which the requirements doc places images in). Locked scope: Option C (all 50 images, phase ordering set to allow stopping after Phase N if budget pressure builds). Locked SVG vs PNG split: 3 SVGs (#8 proportional editing falloff types comparison, #21 dissolve vs delete comparison, #44 selection tools quick reference chart), 47 PNGs (all viewport screenshots, UI captures, composite multi-panel screenshots, before/after pairs). Type-flip discretion preserved during production: if a PNG turns out to be a poor screenshot candidate (Lesson 05 #19 precedent), flip to SVG at the time. Locked phase plan: Option L 6-phase layout following section boundaries, 10/10/8/6/8/8 image distribution. Rationale for Option L over alternatives K (5-phase 10/10/8/14/8) and M (4-phase 14/14/14/8) per Lesson 05 multi-sub-chat cadence data: compaction risk is per-chat not per-phase; bigger phases force bigger plan-lock chats AND bigger integration chats, both of which raise per-chat risk; Option L keeps the biggest phase at 10 images (vs 14 in K and M) and the average phase at 8.3 images which scales naturally from Lesson 05's 30-image 6-phase average of 5 per phase. Per-phase High/Medium/Lower priority breakdown: P1 5H/3M/2L, P2 1H/4M/5L, P3 1H/3M/4L, P4 1H/2M/3L, P5 0H/1M/7L, P6 2H/2M/4L (covers all 11 High plus 13 Medium across 6 phases; cumulative priority coverage builds toward complete by Phase 6). Wrote this `lesson_06_integration_progress.md`. Image production has not yet started.
- 2026-05-21 — Phase 1 PRODUCTION sub-chat A. Rendered three single-pose Edit Mode selection captures via BlenderMCP OpenGL viewport render path: #4 vertex select (3 top vertices selected on default cube, 779,498 bytes), #5 edge select (3-edge L-shape around front-top-right corner, 774,226 bytes), #6 face select (top face plus adjacent visible side face, 776,447 bytes). All three at 1280x720, EEVEE engine (EEVEE_NEXT not available, fallback engaged per locked rule). Same `L06_Cube` reused across all three renders with `mesh_select_mode` toggled per capture. Scene cleanup tweaks applied: 3D cursor hidden, world axes hidden, object origins hidden, outline-selected hidden, theme vertex_size bumped to 5, edge_width bumped to 2; grid floor kept for spatial context. View rotation per locked default `Euler((63.6°, 0, -46.7°))`, view_distance 3.5 (closer than the canonical 5.0 to make vertex dots readable). #4 needed one re-render to drop the origin dot and re-tighten the view; #5 and #6 came clean on first pass. Sub-chat A complete; sub-chats B (#1, #2, #3) and C (#7, #8, #9, #46) pending.

---

## Locked rules (carry forward from Lessons 03, 04, 05; see `lesson_05_completion_handoff.md` and `images/IMAGE_STYLE_GUIDE.md` v4 for full discussion)

**Path discipline:**
- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`

**File operations:**
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`
- Tools are deferred; call `tool_search` before invoking; do not inherit "tool X is unavailable" assumptions from a compaction summary
- `Filesystem:copy_file_user_to_claude` for one-way copy from user filesystem to Claude's container; useful for bash-grep section mapping on large docs before edit work

**Em-dash discipline (style guide v4, locked decision 9):**
- No new em-dashes anywhere in new content (figcaptions, alt text, status blocks, markdown notes, handoff docs, archive doc headers, pointer blocks, SVG label / heading / subhead / pill / footer / takeaway text, overlay badge text, overlay title / desc text, style-guide prose, this doc)
- Middle-dot (`·`, U+00B7) for dash-style separation in SVG labels per Phase 4 / Phase 5 / Phase 6 Lesson 05 precedents
- Pre-existing em-dashes in source content preserved verbatim through edits
- Quoting pre-existing em-dashes inside backtick code spans in a status bullet is OK
- Structural em-dash after a date in Status bullets (the date-then-separator-then-description pattern) is grandfathered as a list-item separator

**Inline image pattern (locked from Phase 1 Lesson 01, confirmed across all subsequent phases):**
- Plain `<figure>` / `<figcaption>` wrapper, no class
- PNGs: `<img loading="lazy">` with descriptive alt text. Figure at col 16, img and figcaption at col 20 (default depth)
- Inline SVGs: figure at col 16, svg root at col 20, svg children at col 24, deeper nesting at 28/32, figcaption at col 20; `color="#222"` stripped from inlined root `<svg>` (breaks dark mode); standalone `.svg` files in `images/` retain `color="#222"` for `<img>` fallback
- Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` (and similar) collapsed onto single lines during inlining
- Decorative ASCII-divider author comments (`====== Block Title ======`) pruned during inlining; short structural comments (`<!-- Panel 1 -->`, `<!-- Cell: Plane -->`, etc.) kept
- Deeper-indent variant (figure col 20, contents at col 24/28/32, figcaption col 24, figure close col 20) for figures placed inside cards that open at col 16

**PNG annotation overlay pattern (locked across Phases 3-6 Lesson 05 INTEGRATION; style guide v4 component snippet):**
- Wrapper div `position: relative; display: inline-block; max-width: 100%`
- Overlay SVG viewBox matches PNG pixel dimensions
- Overlay SVG style `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none`
- `preserveAspectRatio="xMidYMid meet"` on overlay svg
- Img inline style `display: block; max-width: 100%; height: auto; margin: 0` to override global img margin
- No baked-in callouts on PNGs going forward
- Overlay ids namespaced per PNG with a `c{N}-*` prefix
- Highlight shape (ellipse or circle) fill `none`, stroke matches colorway, width 4
- Leader line stroke matching colorway, stroke-width 3, stroke-linecap `round`
- Marker circle r=6 at badge-side end of leader (7 px from badge edge per c28 convention) when a highlight is present; at target-side end per c11 convention when there is no separate highlight
- Badge rect rx=6, fill `#4ADE80` (positive) or `#E63946` (warning); text font-family `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, font-size 22, font-weight 700, text-anchor middle, fill `#0f1a14` on green or `#ffffff` on red
- Composite-overlay variant for horizontally-divided composite PNGs with baked-in 2px `#FF6B00` vertical dividers (Lesson 05 #29 SELECT CAP/INSET/EXTRUDE and #30 CUP/CHAIR/BUST precedents): no highlight ellipses, no leader lines, just one centered badge per panel near the bottom edge

**Overlay badge colorway split (style guide v4 locked decision 8):**
- Positive labels (Face normal, EDGE LOOP, CORRECT, CUP, CHAIR, BUST, and similar affirmative labels): `#4ADE80` green badge with `#0f1a14` dark text
- Warning labels (FLIPPED, NON-MANIFOLD, AVOID, and similar cautionary labels): `#E63946` red badge with `#ffffff` white text
- Pick from the label's semantic role; mixed colorways on a single PNG are expected

**BlenderMCP capture (locked, confirmed Phases 2-6 Lesson 05):**
- Lowercase `blender:execute_blender_code` (uppercase hangs)
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere (kills BlenderMCP addon mid-execution; recovery requires restarting Blender)
- Clean Blender state manually instead (`bpy.data.objects.remove(obj, do_unlink=True)`, etc.)
- Render engine fallback path: try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum error, fall back to `BLENDER_EEVEE`
- Pie menus and other transient UI Blender's render API cannot reach: manual Win+Shift+S capture into `images/` directly (Phase 3 Lesson 05 #28 precedent; Phase 4 Lesson 04 #9 and Lesson 05 Phase 6 #25 follow the same path)
- OpenGL viewport render path: find the first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Re-find the VIEW_3D area and region in each `blender:execute_blender_code` block since Python local variables do not persist
- UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` works cleanly from Blender Python on Windows
- Default user-perspective view rotation: `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()`. View distance scales with subject size

**Pillow availability:**
- Pillow 12.2.0 is installed in Blender 5.1's Python at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL` (a user-writable path already on `sys.path`). Verified working across Phases 4, 5, 6 Lesson 05 composites. Survives Blender restarts.

**Blender 5.1.1 op-name discoveries (locked through Lesson 05 Phase 6):**
- `bpy.ops.mesh.inset_faces` does NOT exist in Blender 5.1.1; use `bpy.ops.mesh.inset` instead
- `bpy.ops.mesh.delete(type='FACES')` (plural) does NOT exist; valid enum values are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`; use `type='FACE'` (singular)
- `bpy.ops.mesh.select_non_manifold()` works in 5.1.1 without bmesh fallback
- Prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics
- `bmesh.ops.subdivide_edges` with cuts=N produces ONLY equal-spaced cuts; for unequal-spaced cuts, use `bmesh.ops.bisect_plane` per cut plane

**Brand palette (current as of Lesson 05 close-out; style guide v4):**
- Blender brand / Orange operation badge / SVG accent rail: `#FF6B00`
- Course / structure / Z-axis blue: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external / Y-axis green / Normals / positive glyph / positive overlay badges: `#4ADE80`
- Portfolio / outcome / Caution / warning glyph: `#F5C242`
- X-axis red / Warning / negative glyph / warning overlay badges: `#E63946`
- Badge text dark on green: `#0f1a14`; badge text light on red: `#ffffff`

**Cadence:**
- One production chat plus one integration chat per phase by default (Lesson 04 cadence)
- Sub-chats expected for any phase of 6+ images per Lesson 05 precedent (Phase 5 INTEGRATION split into 2 sub-chats with 5 images; Phase 6 INTEGRATION used dedicated plan-lock chat plus 3 execution sub-chats with 6 images)
- Lesson 06 Phase 1 and Phase 2 at 10 images each are larger than any Lesson 05 phase; expect 3-5 sub-chats per
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit

---

## Four-state placement-table legend

- `not captured; not integrated` (or `not produced; not integrated`): image does not yet exist on disk
- `produced; not integrated` (or `captured; not integrated`): image is on disk in `images/` but has not been inlined into the HTML
- `produced; handoff_written; not integrated`: intermediate state written when a production chat completes but its integration chat has not yet started
- `integrated`: image is inlined into the HTML, placement-table row and phase-plan row both reflect final state

---

## Placement table (50 images)

| # | Filename | Type | ID prefix | Section | Anchor (planned insertion point) | State |
|---|---|---|---|---|---|---|
| 1 | `lesson_06_01_object_vs_edit_mode_comparison.png` | PNG | (none) | `#enter-edit-mode` | After Object Mode vs Edit Mode table | not captured; not integrated |
| 2 | `lesson_06_02_edit_mode_visual_indicators.png` | PNG | `c2` | `#enter-edit-mode` | After Visual Differences in Edit Mode list | not captured; not integrated |
| 3 | `lesson_06_03_selection_mode_icons.png` | PNG | `c3` | `#selection-modes` | After The Selection Mode Trio introduction | not captured; not integrated |
| 4 | `lesson_06_04_vertex_selection_example.png` | PNG | (none) | `#selection-modes` | Within Vertex Select Mode card | captured; not integrated |
| 5 | `lesson_06_05_edge_selection_example.png` | PNG | (none) | `#selection-modes` | Within Edge Select Mode card | captured; not integrated |
| 6 | `lesson_06_06_face_selection_example.png` | PNG | (none) | `#selection-modes` | Within Face Select Mode card | captured; not integrated |
| 7 | `lesson_06_07_proportional_editing_circle.png` | PNG | (none) | `#proportional-editing` | After Activating Proportional Editing card | not captured; not integrated |
| 8 | `lesson_06_08_proportional_falloff_comparison.svg` | SVG | `pf` | `#proportional-editing` | After Falloff Types table | not produced; not integrated |
| 9 | `lesson_06_09_proportional_hill_creation.png` | PNG | (none) | `#proportional-editing` | Within Practice Exercise: Creating a Hill | not captured; not integrated |
| 46 | `lesson_06_46_proportional_falloff_menu.png` | PNG | `c46` | `#proportional-editing` | After Falloff Types mermaid diagram | not captured; not integrated |
| 10 | `lesson_06_10_loop_tools_addon_location.png` | PNG | `c10` | `#loop-tools` | After Enabling Loop Tools Add-on instructions | not captured; not integrated |
| 11 | `lesson_06_11_loop_tools_circle_before_after.png` | PNG | (none) | `#loop-tools` | After Circle: Creating Perfect Rounds section | not captured; not integrated |
| 12 | `lesson_06_12_loop_tools_bridge_operation.png` | PNG | (none) | `#loop-tools` | After Bridge: Connecting Edge Loops section | not captured; not integrated |
| 47 | `lesson_06_47_loop_tools_sidebar_panel.png` | PNG | (none) | `#loop-tools` | After Loop Tools Practice Project as reference | not captured; not integrated |
| 13 | `lesson_06_13_box_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Box Select: The Rectangular Selector card | not captured; not integrated |
| 14 | `lesson_06_14_circle_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Circle Select: The Brush Tool card | not captured; not integrated |
| 15 | `lesson_06_15_lasso_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Lasso Select: Freeform Selection description | not captured; not integrated |
| 16 | `lesson_06_16_select_similar_menu.png` | PNG | `c16` | `#advanced-selection` | After Selection by Similarity explanation | not captured; not integrated |
| 48 | `lesson_06_48_checker_deselect_result.png` | PNG | (none) | `#advanced-selection` | After Checker Deselect description | not captured; not integrated |
| 44 | `lesson_06_44_selection_tools_reference.svg` | SVG | `sr` | `#advanced-selection` | At end of section as summary | not produced; not integrated |
| 17 | `lesson_06_17_inset_operation_progression.png` | PNG | (none) | `#inset-outset` | After Basic Inset Operation card | not captured; not integrated |
| 18 | `lesson_06_18_inset_individual_vs_group.png` | PNG | (none) | `#inset-outset` | After Individual vs Group Inset card | not captured; not integrated |
| 19 | `lesson_06_19_inset_double_technique.png` | PNG | (none) | `#inset-outset` | Within The Double Inset Technique blockquote | not captured; not integrated |
| 20 | `lesson_06_20_merge_by_distance.png` | PNG | `c20` | `#mesh-cleanup` | After Merge by Distance card | not captured; not integrated |
| 21 | `lesson_06_21_dissolve_vs_delete.svg` | SVG | `dd` | `#mesh-cleanup` | After Dissolve vs Delete explanation | not produced; not integrated |
| 22 | `lesson_06_22_limited_dissolve_before_after.png` | PNG | (none) | `#mesh-cleanup` | After Limited Dissolve: The Smart Cleanup section | not captured; not integrated |
| 23 | `lesson_06_23_face_orientation_overlay.png` | PNG | `c23` | `#mesh-cleanup` | After Recalculate Normals card | not captured; not integrated |
| 50 | `lesson_06_50_fill_operations_comparison.png` | PNG | (none) | `#mesh-cleanup` | After Fill and Grid Fill card | not captured; not integrated |
| 24 | `lesson_06_24_extrude_operation_sequence.png` | PNG | (none) | `#extrude-operations` | After Basic Extrude Operation card | not captured; not integrated |
| 45 | `lesson_06_45_transform_constraint_indicators.png` | PNG | `c45` | `#extrude-operations` | After Constrained Extrude explanation | not captured; not integrated |
| 25 | `lesson_06_25_extrude_normals_vs_regular.png` | PNG | (none) | `#extrude-operations` | After Extrude Individual vs Group mermaid | not captured; not integrated |
| 26 | `lesson_06_26_extrude_individual_faces.png` | PNG | (none) | `#extrude-operations` | After individual vs group table | not captured; not integrated |
| 27 | `lesson_06_27_extrude_scale_technique.png` | PNG | (none) | `#extrude-operations` | After Extrude and Scale: Creating Tapers section | not captured; not integrated |
| 49 | `lesson_06_49_extrude_menu_alt_e.png` | PNG | `c49` | `#extrude-operations` | Within special extrude menu discussion | not captured; not integrated |
| 28 | `lesson_06_28_array_modifier_panel.png` | PNG | `c28` | `#duplicate-array` | After Array Modifier: Parametric Repetition workflow | not captured; not integrated |
| 29 | `lesson_06_29_array_modifier_result.png` | PNG | (none) | `#duplicate-array` | After Array Modifier Options table | not captured; not integrated |
| 30 | `lesson_06_30_spin_operation_setup.png` | PNG | `c30` | `#spin-screw` | After Spin: Creating Radial Geometry card | not captured; not integrated |
| 31 | `lesson_06_31_spin_vase_creation.png` | PNG | (none) | `#spin-screw` | After Spin Settings table | not captured; not integrated |
| 32 | `lesson_06_32_screw_modifier_spring.png` | PNG | (none) | `#spin-screw` | After Screw Modifier: Threaded and Spiral Forms card | not captured; not integrated |
| 33 | `lesson_06_33_knife_tool_active.png` | PNG | (none) | `#knife-tool` | After Basic Knife Tool Usage card | not captured; not integrated |
| 34 | `lesson_06_34_knife_tool_constraints.png` | PNG | (none) | `#knife-tool` | After Knife Tool Modes and Options table | not captured; not integrated |
| 35 | `lesson_06_35_knife_project_operation.png` | PNG | (none) | `#knife-tool` | After Knife Project: Advanced Cutting workflow | not captured; not integrated |
| 36 | `lesson_06_36_subdivide_levels.png` | PNG | (none) | `#subdivide` | After Subdivide Warning card | not captured; not integrated |
| 37 | `lesson_06_37_subdivide_smoothness.png` | PNG | (none) | `#subdivide` | After Subdivide Smooth section | not captured; not integrated |
| 38 | `lesson_06_38_subdivide_fractal_terrain.png` | PNG | (none) | `#subdivide` | Within Subdivide Practice exercise | not captured; not integrated |
| 39 | `lesson_06_39_bevel_operation_interface.png` | PNG | (none) | `#bevel` | After Basic Bevel Operation card | not captured; not integrated |
| 40 | `lesson_06_40_bevel_segment_comparison.png` | PNG | (none) | `#bevel` | After Bevel Segments Explained card | not captured; not integrated |
| 41 | `lesson_06_41_edge_vs_vertex_bevel.png` | PNG | (none) | `#bevel` | After Edge Bevel vs Vertex Bevel table | not captured; not integrated |
| 42 | `lesson_06_42_bevel_before_after_cube.png` | PNG | (none) | `#bevel` | After Design Principle blockquote | not captured; not integrated |
| 43 | `lesson_06_43_bevel_modifier_settings.png` | PNG | `c43` | `#bevel` | After Bevel Modifier: Non-Destructive Beveling card | not captured; not integrated |

**Totals:**
- 3 SVGs: #8, #21, #44
- 47 PNGs: #1, #2, #3, #4, #5, #6, #7, #9, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #22, #23, #24, #25, #26, #27, #28, #29, #30, #31, #32, #33, #34, #35, #36, #37, #38, #39, #40, #41, #42, #43, #45, #46, #47, #48, #49, #50

**PNG overlay ids planned (subset of 47 PNGs; confirmed at production time):**
- `c2` (#2 Edit Mode visual indicators, multi-callout)
- `c3` (#3 Selection mode icons, three labels)
- `c10` (#10 Loop Tools add-on location, single highlight)
- `c16` (#16 Select Similar menu, menu highlight)
- `c20` (#20 Merge by Distance menu, menu highlight)
- `c23` (#23 Face Orientation overlay, single highlight)
- `c28` (#28 Array Modifier panel, multi-label callouts)
- `c30` (#30 Spin Operation setup, multi-label callouts)
- `c43` (#43 Bevel Modifier settings, multi-label callouts)
- `c45` (#45 Transform constraint indicators, single colored constraint line label)
- `c46` (#46 Proportional Editing falloff menu, menu highlight)
- `c49` (#49 Extrude menu Alt+E, menu highlight)

12 PNGs identified at planning time as needing overlays. Remaining 35 PNGs ship as plain figures with descriptive alt text and no overlay (the screenshot or composite carries the message on its own). Additional overlays may be added during integration if a PNG turns out to need a callout.

---

## Phase plan

Option L locked 2026-05-21 (6 phases, 10/10/8/6/8/8 distribution, follows section boundaries). Ordering preserves "stop after Phase N" property: each phase closes a coherent set of sections, so the lesson remains coherent at any stopping point.

| Phase | Sections | Images (50 total) | Count | SVGs | High/Med/Low | Cumulative |
|-------|----------|---------------------|-------|------|--------------|------------|
| 1 | `#enter-edit-mode` + `#selection-modes` + `#proportional-editing` | #1, #2, #3, #4, #5, #6, #7, #8, #9, #46 | 10 | #8 (`pf`) | 5H / 3M / 2L | 10/50 (20%) |
| 2 | `#loop-tools` + `#advanced-selection` | #10, #11, #12, #47, #13, #14, #15, #16, #48, #44 | 10 | #44 (`sr`) | 1H / 4M / 5L | 20/50 (40%) |
| 3 | `#inset-outset` + `#mesh-cleanup` | #17, #18, #19, #20, #21, #22, #23, #50 | 8 | #21 (`dd`) | 2H / 1M / 5L | 28/50 (56%) |
| 4 | `#extrude-operations` | #24, #45, #25, #26, #27, #49 | 6 | none | 1H / 2M / 3L | 34/50 (68%) |
| 5 | `#duplicate-array` + `#spin-screw` + `#knife-tool` | #28, #29, #30, #31, #32, #33, #34, #35 | 8 | none | 0H / 1M / 7L | 42/50 (84%) |
| 6 | `#subdivide` + `#bevel` | #36, #37, #38, #39, #40, #41, #42, #43 | 8 | none | 2H / 2M / 4L | 50/50 (100%) |

**Cadence expectation:** production + integration chats per phase, with sub-chats expected for any phase 6 or more images. Phase 1 and Phase 2 at 10 images each will likely need 3-5 sub-chats per phase (split production into 2-3 sub-chats, integration into 2-3 sub-chats). Phase 3, 5, 6 at 8 images each will likely need 2-4 sub-chats per phase. Phase 4 at 6 images matches Lesson 05 Phase 6 precedent (1 plan-lock chat plus 3 execution sub-chats). Realistic total chat count for Lesson 06 image work: 14 to 21 chats plus 1 close-out chat for handoff + archive sweep + status roll.

---

## Available section

3 of 50. Will populate as PRODUCTION chats deliver. Each entry will list file size, image dimensions, id prefix, and capture-method note (BlenderMCP / manual Win+Shift+S / PIL composite).

- #4 `lesson_06_04_vertex_selection_example.png` (779,498 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)
- #5 `lesson_06_05_edge_selection_example.png` (774,226 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)
- #6 `lesson_06_06_face_selection_example.png` (776,447 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)

---

## Missing section

47 of 50:
- Phase 1: #1, #2, #3, #7, #8, #9, #46 (#4, #5, #6 captured in sub-chat A)
- Phase 2: #10, #11, #12, #13, #14, #15, #16, #44, #47, #48
- Phase 3: #17, #18, #19, #20, #21, #22, #23, #50
- Phase 4: #24, #25, #26, #27, #45, #49
- Phase 5: #28, #29, #30, #31, #32, #33, #34, #35
- Phase 6: #36, #37, #38, #39, #40, #41, #42, #43

---

## ID prefix registry

**SVG ids (3 entries):**
- `pf` for #8 `lesson_06_08_proportional_falloff_comparison.svg`
- `dd` for #21 `lesson_06_21_dissolve_vs_delete.svg`
- `sr` for #44 `lesson_06_44_selection_tools_reference.svg`

**PNG overlay ids (12 planned):**
- `c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49` (see PNG overlay ids planned list in the Placement table totals above for which PNG each covers)

No prefix collisions: all 3 SVG prefixes (`pf`/`dd`/`sr`) are unused in prior Lesson 06 work and unique relative to one another. PNG overlay `c{N}` ids are inherently unique to their image number. The `c8`, `c11`, `c17`, `c22`, `c25`, `c27`, `c29` overlays from Lessons 04 and 05 do not apply here (those live in other lesson HTML files).

---

## SVG design notes (locked patterns to reuse, new patterns to author)

All 3 SVGs follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` v4: 800x560 default viewBox (use 800x680 dense-content variant if content density requires it), top 3px `#FF6B00` accent rail at (0, 0), system-ui font stack, `color="#222"` retained on standalone files for `<img>` fallback, heading at y=56 size 24 weight 700, subtitle at y=84 size 14 opacity 0.65, divider line at y=108, first body subhead at y=138, footer tip card y=506 to y=540 on 800x560 canvas (y=641 to y=675 on 800x680). Middle-dot (`·`, U+00B7) for subhead separation. Zero new em-dashes.

**Per-SVG initial sketches (refined during the Phase production chat):**

- **#8 Proportional editing falloff types comparison** (`pf` prefix, Phase 1). 6-panel comparison grid (2x3 layout): Smooth, Sharp, Linear, Constant, Sphere, Random. Each panel shows the same vertex's influence falloff as a 2D curve from selection center to falloff radius edge. Y-axis is influence strength (0 to 1), x-axis is distance from selection center (0 to 1). Curves: Smooth (cosine-like S-curve from 1 to 0), Sharp (steep drop near origin), Linear (straight line), Constant (flat at 1 then cliff to 0), Sphere (semicircle arc), Random (jagged noise). Color: curves stroked in `#FF6B00` (Blender orange tie-break per style guide rule). Each panel labeled with falloff name in y=400 area. Subhead: `SMOOTH · SHARP · LINEAR · CONSTANT · SPHERE · RANDOM` or similar. Likely 800x560.
- **#21 Dissolve vs Delete comparison** (`dd` prefix, Phase 3). Paired-panel comparison: left panel "DELETE" shows mesh with a face removed, leaving an obvious hole (boundary edges visible, gap in geometry); right panel "DISSOLVE" shows the same starting mesh with the same face dissolved, remaining geometry reconnected cleanly without a hole. Use warning red `#E63946` header bar with white text for DELETE panel and positive green `#4ADE80` header bar with `#0f1a14` text for DISSOLVE panel per the overlay colorway split idea applied to SVG panel headers. Subhead: `LEAVES HOLES · RECONNECTS GEOMETRY`. Takeaway about when to reach for each. Likely 800x560.
- **#44 Selection tools quick reference chart** (`sr` prefix, Phase 2). Grid-layout cheat sheet adapting the Lesson 04 #14 keyboard shortcuts SVG pattern at 800x560 (or 800x680 if content density requires). 5 entries: Box Select (icon: rectangle, shortcut: B), Circle Select (icon: circle, shortcut: C), Lasso Select (icon: freeform loop, shortcut: Ctrl + Right Click), Select Similar (icon: connected elements, shortcut: Shift + G), Checker Deselect (icon: checkerboard, accessed via menu). Each entry with icon, shortcut badge (filled `#FF6B00` per Lesson 04 #14 precedent), and one-line description. Cheat-sheet badge variant: filled (matching Lesson 04 idiom). Subhead: `5 WAYS TO SELECT`.

---

## PNG capture notes (lock during each phase PRODUCTION chat)

All 47 PNGs follow the locked BlenderMCP / manual Win+Shift+S / PIL composite paths from Lesson 05. Capture method estimate by category:

- **BlenderMCP viewport renders (single-block):** approximately 18 PNGs: single-pose viewport captures of edit-mode operations (#4, #5, #6, #7, #13, #14, #15, #22, #23, #26, #29, #38, #45, #48) and modifier results (#29, #32). Render config: 1280x720, `BLENDER_EEVEE_NEXT` with `BLENDER_EEVEE` fallback per locked rule. View rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance` scaled to subject (likely 5.0 for cubes, 4.5 for slightly larger compositions).
- **BlenderMCP multi-pose sequences (composite via PIL):** approximately 14 PNGs: multi-panel progression sequences (#9 hill creation 3-panel, #11 Loop Tools Circle 2-panel, #12 Bridge 2-panel, #17 Inset progression 3-panel, #18 Inset Individual vs Group 2-panel, #19 Double Inset 4-panel, #24 Extrude sequence 3-panel, #25 Extrude normals vs regular 2-panel, #27 Extrude scale technique 4-panel, #31 Spin vase creation 2-panel, #34 Knife constraints 3-panel, #35 Knife Project 3-panel, #36 Subdivide levels 4-panel, #37 Subdivide smoothness 2-panel, #40 Bevel segment 4-panel, #41 Edge vs vertex bevel 2-panel, #42 Bevel before/after 2-panel, #50 Fill operations 3-panel). Per-panel BlenderMCP capture into `images/_temp_lesson_06_NN_pN.png`, Pillow composite to final filename, temp PNGs removed via `os.remove`. Pillow 12.2.0 path confirmed working from Lesson 05.
- **Manual Win+Shift+S captures:** approximately 7-10 PNGs: pie menus, preferences screens, special UI states that BlenderMCP cannot reach. Likely candidates: #10 Add-ons preferences window (Edit > Preferences > Add-ons), #16 Shift+G Select Similar menu (Edit Mode + Shift+G), #20 M Merge menu (Edit Mode + M), #46 Shift+O Proportional Falloff menu (Edit Mode + Shift+O), #49 Alt+E Extrude special menu (Edit Mode + Alt+E), plus any others identified during the Phase 2/3/4 PRODUCTION chats as resistant to scripted capture.
- **Annotated UI panel screenshots:** approximately 5 PNGs that combine a Blender screenshot capture with an annotation overlay at integration time: #1 Object/Edit mode side-by-side, #2 Edit Mode visual indicators, #3 Selection mode icons closeup, #28 Array Modifier panel, #43 Bevel Modifier settings. Capture via BlenderMCP (#1 viewport state pairs) or manual Win+Shift+S (#3 icon closeup), overlay applied at integration per the inline-stacked overlay pattern.

LOCKED RULE from Lesson 04 / 05: no `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere; manual scene cleanup only. LOCKED RULE from Lesson 05 Phase 4: Blender 5.1.1 op-name corrections (no `inset_faces`, no `delete(type='FACES')` plural). LOCKED RULE from Lesson 05 Phase 5: composites use Pillow 12.2.0 in Blender's bundled Python.

---

## Next chat

**Phase 1 PRODUCTION chat.** Read this `lesson_06_integration_progress.md` first, then the relevant slice of `lesson_06_image_requirements.md` (entries #1, #2, #3, #4, #5, #6, #7, #8, #9, #46), then propose detailed PRODUCTION specs for each of the 10 Phase 1 images. Per the cadence expectation, Phase 1 with 10 images will likely need 2-3 production sub-chats. Suggested sub-chat split: sub-chat A handles #4, #5, #6 (selection mode trio: BlenderMCP single-pose captures with bmesh selection setup; same cube reused across three captures), sub-chat B handles #1, #2, #3 (the UI-state PNGs requiring side-by-side mode comparison and annotation prep), sub-chat C handles #7, #8, #9, #46 (proportional editing: 1 SVG plus 1 single-pose PNG plus 1 multi-panel composite plus 1 menu capture). Adjust split based on actual time spent in each sub-chat. Phase 1 PRODUCTION close criterion: all 10 Phase 1 images on disk in `images/`, verified via `Filesystem:get_file_info`, Placement table rows updated to `produced; not integrated` or `captured; not integrated`, Available section populated with file sizes and dimensions.

After Phase 1 PRODUCTION: Phase 1 INTEGRATION chat (or sub-chats). Then Phase 2 PRODUCTION, Phase 2 INTEGRATION, etc., through Phase 6 INTEGRATION close-out. Then Lesson 06 close-out chat for handoff doc + archive sweep + status roll.
