# Blender Mastery Course — Project Status

**Project Path:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`  
**Last Updated:** May 25, 2026  
**Total Size:** ~13+ MB and growing. Lesson 01 at 118.3 KB; Lesson 02 at 148.8 KB; Lesson 03 at 231.8 KB (integration complete); Lesson 04 at 229.2 KB (integration complete); Lesson 05 at 272.9 KB (integration complete); Lesson 06 at 231.5 KB (integration complete). Image production has shipped assets for Lessons 01 through 06 into `images/`. Per-lesson production-chat history and rolled-up Lesson 03 detail live in `status_archive.md` plus the per-lesson `lesson_NN_integration_progress.md` files.

---

## Site-Wide Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Light/Dark Mode Toggle | ✅ Complete | Toggle button in nav, persists via `localStorage`, early init prevents flash |
| Ray's House of Fun Link | ✅ Complete | In site nav bar + footer on all pages |
| Contact Link | ✅ Complete | In site nav bar + footer on all pages |
| Prev/Next Lesson Nav | ✅ Complete | Present in all 51 lesson files |
| Mobile Responsive | ✅ Complete | Index fully responsive; lessons inherit mobile CSS from `main.css` |
| Index Page Modernized | ✅ Complete | Full rewrite — CSS variable-based, responsive grids, correct lesson URLs |
| Lesson URLs Corrected | ✅ Complete | All 51 hrefs in `index.html` match actual filenames |
| Image Production and Integration | 🚧 In Progress | Lesson 01: complete (12 of 12). Lesson 02: complete (20 of 20). Lesson 03: complete (18 of 18 produced, 18 of 18 integrated). Lesson 04: complete (14 of 14 produced, 14 of 14 integrated). Lesson 05: complete (30 of 30 produced, 30 of 30 integrated). Lesson 06: complete (50 of 50 produced, 50 of 50 integrated). Lessons 07 to 51: not yet started. See per-lesson `lesson_NN_integration_progress.md` files. |
| Version Currency (Blender 5.1) | 🚧 Per-lesson | Project target is Blender 5.1 (current stable, March 2026). Audited per lesson as content is touched; Lesson 01 done. |

---

## Architecture

### How site-wide features are delivered

The site nav bar, theme toggle, and footer links are delivered **two ways** for resilience:

1. **`index.html`** — Static HTML (no JS dependency). Nav bar, toggle, and footer are baked into the markup.
2. **All 51 lesson pages** — Dynamic injection via `js/course-enhancements.js`:
   - `injectSiteNav()` inserts the nav bar at `<body>` top (skips if `.site-nav` exists)
   - `injectSiteFooter()` replaces the `<footer>` innerHTML with updated links
   - `initThemeToggle()` wires up the toggle button click handler
   - Early IIFE at file top reads `localStorage('theme')` and sets `data-theme` immediately

### Key Files

| File | Size | Role |
|------|------|------|
| `index.html` | 31.7 KB | Course homepage — modernized, mobile-friendly, all correct URLs |
| `styles/main.css` | 18.7 KB | Shared CSS — supports `data-theme="dark"` + `prefers-color-scheme` |
| `js/course-enhancements.js` | 19.9 KB | Shared JS — site nav injection, theme toggle, progress tracking |
| `js/clipboard.js` | 5.9 KB | Code block copy functionality |

---

## Lesson File Status (All 51 Lessons)

All lesson files confirmed to have: `js/course-enhancements.js` loaded, `<footer>` element, prev/next navigation.

### Module 1: Getting Started with Blender

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 1 | Welcome to Blender | `lesson_01_welcome_to_blender.html` | 118.3 KB | ✅ | ✅ | ✅ |
| 2 | The Blender Interface | `lesson_02_the_blender_interface.html` | 148.8 KB | ✅ | ✅ | ✅ |
| 3 | Navigation and Viewport Control | `lesson_03_navigation_and_viewport_control.html` | 231.8 KB | ✅ | ✅ | ✅ |
| 4 | Basic Object Manipulation | `lesson_04_basic_object_manipulation.html` | 229.2 KB | ✅ | ✅ | ✅ |

### Module 2: 3D Modeling Fundamentals

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 5 | Understanding Meshes and Geometry | `lesson_05_understanding_meshes_and_geometry.html` | 272.9 KB | ✅ | ✅ | ✅ |
| 6 | Edit Mode Essentials | `lesson_06_edit_mode_essentials.html` | 231.5 KB | ✅ | ✅ | ✅ |
| 7 | Modeling Your First Object | `lesson_07_modeling_your_first_object.html` | 114.7 KB | ✅ | ✅ | ✅ |
| 8 | Modifiers Introduction | `lesson_08_modifiers_introduction.html` | 126.2 KB | ✅ | ✅ | ✅ |
| 9 | Precision Modeling Techniques | `lesson_09_precision_modeling_techniques.html` | 219.0 KB | ✅ | ✅ | ✅ |

### Module 3: Materials and Texturing

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 10 | Introduction to Shader Editor | `lesson_10_shader_editor_introduction.html` | 195.6 KB | ✅ | ✅ | ✅ |
| 11 | PBR Materials Explained | `lesson_11_pbr_materials_explained.html` | 191.0 KB | ✅ | ✅ | ✅ |
| 12 | UV Unwrapping Basics | `lesson_12_uv_unwrapping_basics.html` | 190.4 KB | ✅ | ✅ | ✅ |
| 13 | Texture Painting Basics | `lesson_13_texture_painting_basics.html` | 183.5 KB | ✅ | ✅ | ✅ |
| 14 | Advanced Materials | `lesson_14_advanced_materials.html` | 190.3 KB | ✅ | ✅ | ✅ |

### Module 4: Lighting and Rendering

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 15 | Understanding Light Types | `lesson_15_understanding_light_types.html` | 186.8 KB | ✅ | ✅ | ✅ |
| 16 | Three-Point Lighting Setup | `lesson_16_three_point_lighting_setup.html` | 132.4 KB | ✅ | ✅ | ✅ |
| 17 | HDRI and World Lighting | `lesson_17_hdri_and_world_lighting.html` | 136.1 KB | ✅ | ✅ | ✅ |
| 18 | Eevee Real-time Rendering | `lesson_18_eevee_realtime_rendering.html` | 154.0 KB | ✅ | ✅ | ✅ |
| 19 | Cycles Path Tracing | `lesson_19_cycles_path_tracing.html` | 145.8 KB | ✅ | ✅ | ✅ |

### Module 5: Camera and Composition

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 20 | Camera Basics | `lesson_20_camera_basics.html` | 161.3 KB | ✅ | ✅ | ✅ |
| 21 | Composition Principles | `lesson_21_composition_principles.html` | 237.2 KB | ✅ | ✅ | ✅ |
| 22 | Depth of Field and Focus | `lesson_22_depth_of_field_and_focus.html` | 180.4 KB | ✅ | ✅ | ✅ |
| 23 | Camera Animation | `lesson_23_camera_animation.html` | 215.6 KB | ✅ | ✅ | ✅ |

### Module 6: Introduction to Animation

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 24 | Animation Fundamentals | `lesson_24_animation_fundamentals.html` | 125.5 KB | ✅ | ✅ | ✅ |
| 25 | Timeline and Keyframes | `lesson_25_timeline_and_keyframes.html` | 123.4 KB | ✅ | ✅ | ✅ |
| 26 | Graph Editor Essentials | `lesson_26_graph_editor_essentials.html` | 122.3 KB | ✅ | ✅ | ✅ |
| 27 | Basic Character Animation | `lesson_27_basic_character_animation.html` | 185.6 KB | ✅ | ✅ | ✅ |

### Module 7: Advanced Modeling

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 28 | Sculpting Basics | `lesson_28_sculpting_basics.html` | 142.6 KB | ✅ | ✅ | ✅ |
| 29 | Hard Surface Modeling | `lesson_29_hard_surface_modeling.html` | 154.8 KB | ✅ | ✅ | ✅ |
| 30 | Retopology Fundamentals | `lesson_30_retopology_fundamentals.html` | 190.7 KB | ✅ | ✅ | ✅ |
| 31 | Advanced Modifier Stack | `lesson_31_advanced_modifier_stack.html` | 201.7 KB | ✅ | ✅ | ✅ |

### Module 8: Particles and Simulations

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 32 | Particle Systems Overview | `lesson_32_particle_systems_overview.html` | 276.0 KB | ✅ | ✅ | ✅ |
| 33 | Hair and Fur | `lesson_33_hair_and_fur.html` | 251.2 KB | ✅ | ✅ | ✅ |
| 34 | Cloth Simulation | `lesson_34_cloth_simulation.html` | 192.0 KB | ✅ | ✅ | ✅ |
| 35 | Rigid Body Physics | `lesson_35_rigid_body_physics.html` | 191.6 KB | ✅ | ✅ | ✅ |

### Module 9: Character Creation

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 36 | Character Modeling Workflow | `lesson_36_character_modeling_workflow.html` | 236.8 KB | ✅ | ✅ | ✅ |
| 37 | Armature and Bones | `lesson_37_armature_and_bones.html` | 242.3 KB | ✅ | ✅ | ✅ |
| 38 | Weight Painting | `lesson_38_weight_painting.html` | 236.6 KB | ✅ | ✅ | ✅ |
| 39 | Rigging Essentials | `lesson_39_rigging_essentials.html` | 236.1 KB | ✅ | ✅ | ✅ |

### Module 10: Node Systems Mastery

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 40 | Geometry Nodes Introduction | `lesson_40_geometry_nodes_introduction.html` | 274.4 KB | ✅ | ✅ | ✅ |
| 41 | Procedural Modeling with Nodes | `lesson_41_procedural_modeling_with_nodes.html` | 208.6 KB | ✅ | ✅ | ✅ |
| 42 | Advanced Shader Techniques | `lesson_42_advanced_shader_techniques.html` | 329.6 KB | ✅ | ✅ | ✅ |
| 43 | Compositor Basics | `lesson_43_compositor_basics.html` | 119.8 KB | ✅ | ✅ | ✅ |

### Module 11: Professional Workflows

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 44 | Scene Organization | `lesson_44_scene_organization.html` | 187.6 KB | ✅ | ✅ | ✅ |
| 45 | Optimization Techniques | `lesson_45_optimization_techniques.html` | 271.2 KB | ✅ | ✅ | ✅ |
| 46 | Rendering for Production | `lesson_46_rendering_for_production.html` | 359.8 KB | ✅ | ✅ | ✅ |
| 47 | Post-Processing | `lesson_47_post_processing.html` | 254.6 KB | ✅ | ✅ | ✅ |

### Module 12: Portfolio Projects

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 48 | Product Visualization Project | `lesson_48_product_visualization_project.html` | 251.1 KB | ✅ | ✅ | ✅ |
| 49 | Architectural Visualization | `lesson_49_architectural_visualization.html` | 226.4 KB | ✅ | ✅ | ✅ |
| 50 | Character Animation Showcase | `lesson_50_character_animation_showcase.html` | 227.6 KB | ✅ | ✅ | ✅ |
| 51 | Your Portfolio Piece | `lesson_51_your_portfolio_piece.html` | 163.7 KB | ✅ | ✅ | ✅ |

---

## Image Integration Status

Image production and integration runs as a separate pass per lesson. Tracked per lesson via `lesson_NN_integration_progress.md` and (when needed) `lesson_NN_image_prompts.md` files at project root. Image files live in `images/` (with style notes in `images/IMAGE_STYLE_GUIDE.md`).

| Lesson | Images Produced | Images Integrated | State | Notes |
|---|---|---|---|---|
| 01 Welcome to Blender | 12 of 12 | 12 of 12 | ✅ Complete | 4 PNG plus 8 inline SVG, placed across `what-is-blender`, `what-can-you-create`, `course-structure`, `learning-mindset`, and `getting-ready`. Image #7 (workspace screenshot) captured live via MCP from a Blender 5.1.1 session on 2026-05-18 and integrated this pass between the Version Note card and the "Setting Up Your Workspace" h3. Final file size 118.3 KB. |
| 02 The Blender Interface | 20 of 20 | 20 of 20 | ✅ Complete | 14 PNG plus 6 inline SVG, placed across 6 phases. Phase 4 structural cleanup verified 2026-05-17 (div balance and workspace card count both confirmed). Final file size 148.8 KB. |
| 03 Navigation and Viewport Control | 18 of 18 | 18 of 18 | ✅ Complete | All 18 Lesson 03 image assets (12 SVGs and 6 PNGs) are produced and reside in `images/`. Integration complete across all six phases: 12 inline SVGs (#1, #2, #3, #4, #5, #7, #8, #12, #13, #14, #17, #18) plus 6 PNGs (#6, #9, #10, #11, #15, #16) inlined across the-big-three, mouse-navigation, perspective-ortho, standard-views, focus-frame, camera-view, advanced-techniques, and summary sections per the placement table in `lesson_03_integration_progress.md` using the locked inline pattern (plain `<figure>`/`<figcaption>` wrapper, `color="#222"` stripped from each root `<svg>`, 20-space content depth for SVGs; standard `<img>` with descriptive alt for PNGs). HTML grew from 103.5 KB to 231.8 KB (+128.3 KB across five integration chats covering six phases; Phases 3 and 4 ran in a single chat). Per-phase handoff files at `lesson_03_integration_phase2_handoff.md`, `lesson_03_integration_phase3_handoff.md`, `lesson_03_integration_phase5_handoff.md`, and `lesson_03_integration_phase6_handoff.md`. Lesson 03 close-out archive at `lesson_03_completion_handoff.md` (project root). |
| 04 Basic Object Manipulation | 14 of 14 | 14 of 14 | ✅ Complete | Phases 1, 2, and 3 of 6 integrated. Phase 1 (selection-basics) inlined #1 `lesson_04_01_selection_states.svg` (id prefix `ss`) in Understanding Selection States and #2 `lesson_04_02_selection_tools.svg` (id prefix `st`) in Advanced Selection Techniques. Phase 2 (move-grab and rotate) inlined #3 `lesson_04_03_transform_gizmo.svg` (id prefix `tg`) between the gizmo-elements `<ul>` and the next paragraph in Understanding the Move Gizmo, #4 `lesson_04_04_axis_movement.svg` (id prefix `am`) between the Axis-Constrained Movement card and the Try It Now: Constrained Movement card in Moving Along Specific Axes, and #6 `lesson_04_06_rotation_axes.svg` (id prefix `ra`) between the rotation-axes mermaid block and the Precise Rotation with Numbers h3. Phase 3 (scale and axis-constraints, this pass) inlined #7 `lesson_04_07_scale_operations.svg` (id prefix `so`) between the Axis-Constrained Scaling card and the Try It Now: Stretch and Squash card in Uniform vs. Non-Uniform Scaling, and #5 `lesson_04_05_global_local_axes.svg` (id prefix `gl`) between the Global vs Local Orientation card and the Try It Now: Global vs Local card in Global vs. Local Axes. All seven inserts via `Filesystem:edit_file` with dry-run-before-commit, `color="#222"` stripped from each inlined root tag, content re-indented to 20-space depth, every id and aria-labelledby preserved verbatim, em-dash discipline preserved. Phase 2 introduced a new X-axis red `#E63946` across #3, #4, and #6 alongside the existing palette green `#4ADE80` (Y) and course-blue `#4A9EFF` (Z); Phase 3 carried the same palette forward across #7 and #5. The red is canonical going forward and will be folded into `images/IMAGE_STYLE_GUIDE.md` at the palette's next revision. HTML grew from 106.0 KB (108546 bytes) at start of Phase 1 to 125.7 KB (128694 bytes) after Phase 1, then to 159.1 KB (162912 bytes) after Phase 2, then to 187.1 KB (191576 bytes) after Phase 3, plus 81.8 KB across all seven inserts. Phase 3 integration deltas: #7 added 17254 bytes (162912 to 180166); #5 added 11410 bytes (180166 to 191576); total Phase 3 integration growth 28664 bytes (28.0 KB). Phase 4 is the next phase: two Blender 5.1 viewport screenshots for the `#3d-cursor` section (#8 `lesson_04_08_3d_cursor.png` and #9 `lesson_04_09_snap_menu.png`), driven by `lesson_04_image_prompts.md`. See `lesson_04_integration_progress.md`, `lesson_04_integration_phase1_integration_handoff.md`, `lesson_04_integration_phase2_handoff.md`, `lesson_04_integration_phase2_integration_handoff.md`, and `lesson_04_integration_phase3_integration_handoff.md`. Phase 4 production (this pass) captured both PNGs and wrote them to `images/`: #8 `lesson_04_08_3d_cursor.png` at 783526 bytes (765.2 KB), 1280x720 OpenGL viewport render via the BlenderMCP bridge with the 3D cursor moved to world coordinates (2.5, -1.5, 0.8), a UV sphere added at the cursor location, and the default cube reselected; #9 `lesson_04_09_snap_menu.png` at 112585 bytes (110.0 KB), 882x450 manual Win+Shift+S capture of the Shift+S snap pie menu with all eight wedges legible and the default cube visible behind. Annotation overlays for both PNGs deferred to the Phase 4 integration chat as SVG overlays riding on top of the base captures. The prompts doc was also patched this pass (20678 to 22146 bytes) to remove `bpy.ops.wm.read_factory_settings(use_empty=False)` from all four PNG state-setup snippets and add an Addon safety note documenting that the call reloads Blender's startup file and unregisters the BlenderMCP addon, killing the bridge mid-execution. Phase 4 integration is the next pass. HTML still at 187.1 KB (191576 bytes); no HTML edits this pass. Phase 4 integration (this pass) inlined both PNGs into the HTML with inline SVG annotation overlays for each. #8 `lesson_04_08_3d_cursor.png` carries three orange callouts (3D Cursor label and arrow at the cursor target ring, New object spawns at cursor label and arrow at the UV sphere, dashed circle around the cursor plus a pivot reference label and arrow) authored as a stacked second SVG inside the figure with `position: absolute` over the PNG; the wrapper div uses `position: relative; display: inline-block` so the overlay scales with the image. #9 `lesson_04_09_snap_menu.png` carries one callout: a dashed orange rectangle around all eight pie wedges plus a Shift + S Snap Menu title pill sitting tab-style on the upper-left of the rectangle. Both overlays use the locked Blender-orange `#FF6B00` and namespaced ids (`c8-arrow` marker, `c8-title`/`c8-desc`, `c9-title`/`c9-desc`) so they do not collide with the existing `ss/st/tg/am/gl/ra/so` prefixes on the page. M1 inserted #8 as a plain `<figure>` to verify the anchor (+806 bytes); M2 restructured it to embed the overlay (+2780 bytes); M3 inserted #9 with its overlay in one combined edit (+2405 bytes). Total Phase 4 integration growth 5991 bytes. HTML grew from 187.1 KB (191576 bytes) at start of Phase 4 integration to 192.9 KB (197567 bytes) at end. Placement table rows #8 and #9 in `lesson_04_integration_progress.md` flipped from `captured; not integrated` to `integrated`; phase plan Phase 4 row flipped to `2 of 2 captured, 2 of 2 integrated`. Phase 5 is the next phase: SVGs #10 `lesson_04_10_duplication_comparison.svg` (id prefix `dc`) and #11 `lesson_04_11_origin_point.svg` (id prefix `op`), plus PNG #12 `lesson_04_12_transform_properties.png` (N-panel Item tab capture, addon-safe pattern from `lesson_04_image_prompts.md`). Phase 5 production (this pass) authored both SVGs and captured the PNG, writing all three to `images/`: #10 `lesson_04_10_duplication_comparison.svg` at 8315 bytes (8.1 KB), id prefix `dc`, two-panel comparison adapting Lesson 04 #5's paired-panel pattern (Independent Copy via Shift + D on the left, Linked Copy via Alt + D on the right with a horizontal chain-link icon between the cubes signaling shared mesh data); #11 `lesson_04_11_origin_point.svg` at 7106 bytes (6.9 KB), id prefix `op`, single-panel hero composition adapting the Lesson 03 #1 big-three pattern with a central cube carrying an orange origin dot and three annotation cards around it (Rotation pivot above, Scale center lower-left, Location reference lower-right) connected by dashed lines to the dot; #12 `lesson_04_12_transform_properties.png` at 453308 bytes (442.7 KB), N-panel Item tab capture via the BlenderMCP bridge under the addon-safe pattern with the default cube's `location = (2.5, -1.0, 1.5)`, `rotation_euler = (radians(30), 0, radians(45))`, and `scale = (1.5, 1.0, 0.75)` so the N-panel fields show meaningfully populated. All three verified on disk via `Filesystem:get_file_info`. Both SVGs follow the locked house style verbatim (800x560 viewBox, 3px Blender-orange top strip, `currentColor` labels, footer tip in `#FF6B00`, full a11y tags, `color="#222"` retained on standalone roots for `<img>` fallback). PNG #12's annotation overlay (orange outline rect around the Transform section plus arrowed callouts for Location, Rotation, Scale, Dimensions) deferred to the Phase 5 integration chat as an inline-stacked SVG overlay per the locked Phase 4 integration pattern (namespaced id prefix `c12-`). LOCKED RULE from 2026-05-19 carried through: no `read_factory_settings` calls anywhere in the Phase 5 capture code. Placement table row #12 in `lesson_04_integration_progress.md` flipped from `not captured; not integrated` to `captured; not integrated`; rows for #10 and #11 already sat at `produced; not integrated`. Phase plan Phase 5 row flipped to `3 of 3 produced or captured, 0 of 3 integrated`. Available section advanced to 12 of 14, Missing reduced to 2 of 14 (only #13 and #14 remain). Phase 5 integration is the next pass. HTML still at 192.9 KB (197567 bytes); no HTML edits this pass. Phase 5 integration (this pass) inlined all three Phase 5 assets into the HTML. #10 `lesson_04_10_duplication_comparison.svg` (id prefix `dc`) inserted in `#duplication` between the Linked Duplicate card's closing `</div>` and the When to Use Linked Duplication info card; #11 `lesson_04_11_origin_point.svg` (id prefix `op`) inserted in `#origin-transform` between the Origin Point Functions card's closing `</div>` and the Why Origins Matter info card; #12 `lesson_04_12_transform_properties.png` inserted in `#origin-transform` between the Transform Properties card's closing `</div>` and the Try It Now: Precise Positioning card, with an inline-stacked `c12-` namespaced annotation overlay carrying a single dashed orange `#FF6B00` rectangle at `x=915 y=80 w=290 h=460` tracing the N-panel Item tab Transform section plus a filled orange tab-style title pill at `x=915 y=24 w=480 h=50` with white bold N-Panel: Transform Section text sitting above the rectangle's top edge (the minimal #9-style overlay pattern rather than the multi-callout #8-style, since the N-panel itself already labels each field clearly at lesson display width). All three inserts via `Filesystem:edit_file` with dry-run-before-commit. For #10 and #11, `color="#222"` stripped from each inlined root `<svg>` tag, content re-indented to 20-space content depth, every `role`/`aria-labelledby`/`<title>`/`<desc>`/`id` preserved verbatim with `dc-` and `op-` prefixes carried through unchanged so no collision with the existing `ss/st/tg/am/gl/ra/so/c8/c9` prefixes on the page. For #12, the figure wraps a `position: relative; display: inline-block; max-width: 100%` div containing the `<img>` and an absolutely-positioned overlay `<svg>` with `pointer-events: none`, viewBox `0 0 1920 1046` matching the PNG pixel dimensions exactly, and the img carries inline `style="display: block; max-width: 100%; height: auto; margin: 0;"` to override the global `img { margin: var(--spacing-md) auto; }` rule so the wrapper div sizes cleanly to the image content. Overlay geometry previewed with PIL on the actual 1920x1046 PNG and on a downscaled 800px lesson-display-width version to confirm legibility before HTML commit per the Phase 4 cadence. All three figcaptions em-dash-free, conversational, pointing the reader at what to notice (#10: the chain-link icon between the right-panel cubes signaling shared mesh data versus the truly-separate Shift + D copies on the left; #11: the orange origin dot at the cube's center and the three roles it plays across every transform; #12: the N-panel Item tab with the default cube's transformed Location 2.5/-1/1.5 m, Rotation 30/0/45 degrees XYZ Euler, Scale 1.5/1.0/0.75 plus Dimensions reporting the actual size in Blender units). Source-prose em-dashes inside the M2 anchor for #11 (the Why Origins Matter paragraph) preserved verbatim through the edit. HTML size deltas: M1 #10 added 11091 bytes (197567 to 208658); M2 #11 added 9596 bytes (208658 to 218254); M3 #12 with overlay added 2539 bytes (218254 to 220793). Total Phase 5 integration growth 23226 bytes (22.7 KB). HTML grew from 192.9 KB (197567 bytes) at start of Phase 5 integration to 215.6 KB (220793 bytes) at end. Placement table rows #10, #11, #12 in `lesson_04_integration_progress.md` flipped from `produced; not integrated`, `produced; not integrated`, and `captured; not integrated` respectively to `integrated`; phase plan Phase 5 row flipped to `3 of 3 produced or captured, 3 of 3 integrated`. Phase 6 is the next phase: PNG #13 `lesson_04_13_completed_scene.png` (finished table-scene Eevee Next render via BlenderMCP, scene built programmatically per the addon-safe pattern: delete the default cube manually then add ground plane plus table top plus four legs plus sphere plus cone plus torus plus cylinder) and SVG #14 `lesson_04_14_keyboard_shortcuts.svg` (id prefix `ks`, two-column cheat sheet adapting the Lesson 02 #18 plus Lesson 03 #18 reference-card pattern). Phase 6 production (this pass) captured PNG #13 and authored SVG #14, writing both to `images/`: #13 `lesson_04_13_completed_scene.png` at 501641 bytes (490 KB), 1280x720 Eevee render via the BlenderMCP bridge of the finished table-scene project target (6m ground plane plus 2m square table top at z=0.75 plus four corner legs plus UV sphere, cone, torus lying flat, and cylinder on the table top, point light overhead, camera at the three-quarter perspective angle), rendered via `bpy.ops.render.render(write_still=True)` with `BLENDER_EEVEE` (the installed Blender exposed only the legacy engine enum `('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')` without `BLENDER_EEVEE_NEXT`, taking the documented fallback path per `lesson_04_image_prompts.md`), LOCKED RULE from 2026-05-19 carried through (no `read_factory_settings` calls anywhere in the capture code); #14 `lesson_04_14_keyboard_shortcuts.svg` at 10062 bytes (9.8 KB), id prefix `ks`, two-column cheat-sheet card adapting the Lesson 02 #18 plus Lesson 03 #18 reference-card pattern at the tighter 800x560 Lesson 04 canvas (vs the 800x680 used by Lessons 02 and 03 cheat sheets) with orange-filled `#FF6B00` key-combo badges and white bold text per `session.md` spec (a deliberate variation from the muted `currentColor` `fill-opacity=0.08` badge pattern used in Lessons 02 and 03 cheat sheets, matching Lesson 04's broader operation-badge idiom from #10 and #5), covering SELECTION (7 rows: A, Alt + A, B, C, Ctrl + drag, Click, Shift + Click) and TRANSFORMATIONS (3 compacted rows: G/R/S move-rotate-scale, +X/Y/Z constrain to global axis, +number for exact value) in the left column and DUPLICATION & CURSOR (4 rows: Shift + D, Alt + D, Shift + S, Shift + Right Click) and ADVANCED (3 rows: Ctrl + A apply transforms, Alt + G/R/S reset transforms, N toggle sidebar) in the right column with the local-axis nuance folded into the footer tip at y=506. Both verified on disk via `Filesystem:get_file_info`. Placement table row #13 in `lesson_04_integration_progress.md` flipped from `not captured; not integrated` to `captured; not integrated`; row #14 stays at `produced; not integrated` as the planning chat's anticipatory population predicted (the inconsistency resolved naturally now that Phase 6 production landed the SVG). Phase plan Phase 6 row flipped from `0 of 2 produced or captured, 0 of 2 integrated` to `2 of 2 produced or captured, 0 of 2 integrated`. Available section advanced from 12 of 14 to 14 of 14 with new entries for #13 (501641 bytes, 490 KB, 1280x720) and #14 (10062 bytes, 9.8 KB, id prefix `ks`); Missing reduced from 2 of 14 to 0 of 14 (full image set now on disk for Lesson 04). Phase 6 INTEGRATION is the next pass: inline #13 as a plain `<figure>`/`<img>`/`<figcaption>` insert in the manipulation-project section between the Project Goal info card's closing `</div>` and the `<h3>Step 1: Setup and Cleanup</h3>`, and inline #14 in the summary section between the Your Manipulation Cheat Sheet card's closing `</div>` and the `<h3>Common Questions at This Stage</h3>` with `color="#222"` stripped and 20-space content depth per the locked inline SVG pattern. HTML still at 215.6 KB (220793 bytes); no HTML edits this pass. Phase 6 INTEGRATION (this pass) inlined the final two assets and closed Lesson 04 at 14 of 14 produced or captured, 14 of 14 integrated. #13 `lesson_04_13_completed_scene.png` inserted in `#manipulation-project` between the Project Goal info card's closing `</div>` and the `<h3>Step 1: Setup and Cleanup</h3>` as a plain `<figure>`/`<img>`/`<figcaption>` block with no overlay (the rendered scene itself is the visual reference and needs no callouts) and detailed alt text describing the three-quarter perspective table scene with sphere, cone, torus, and cylinder on a 2-meter table top under soft directional lighting. #14 `lesson_04_14_keyboard_shortcuts.svg` (id prefix `ks`) inlined in `#summary` between the Your Manipulation Cheat Sheet card's closing `</div>` and the `<h3>Common Questions at This Stage</h3>` per the locked inline SVG pattern: `color="#222"` stripped from the root tag, content re-indented to 20-space content depth, all `role`/`aria-labelledby`/`<title id="ks-title">`/`<desc id="ks-desc">` plus every `ks-*` id preserved verbatim. Pre-existing em-dash inside the M2 anchor (the cheat-sheet card's closing sentence) preserved verbatim through the edit. HTML size deltas: M1 #13 added 944 bytes (220793 to 221737); M2 #14 added 12993 bytes (221737 to 234730). Total Phase 6 INTEGRATION growth 13937 bytes (13.6 KB). HTML grew from 215.6 KB (220793 bytes) at start of Phase 6 INTEGRATION to 229.2 KB (234730 bytes) at end. Placement table rows #13 and #14 in `lesson_04_integration_progress.md` flipped from `captured; not integrated` and `produced; not integrated` respectively to `integrated`; phase plan Phase 6 row flipped to `2 of 2 produced or captured, 2 of 2 integrated`. Lesson 04 image production and integration close-out handoff written to `lesson_04_completion_handoff.md` mirroring Lesson 03's close-out structure. Lesson 04 final state: 14 of 14 produced, 14 of 14 integrated, HTML at 229.2 KB (234730 bytes), up from 106.0 KB (108546 bytes) at start of Lesson 04 image integration across six chats (+123.2 KB total). Total inline SVG id-prefix registry on the page: `ss/st/tg/am/gl/ra/so/dc/op/ks` for the 10 inline SVGs and `c8/c9/c12` for the three PNG annotation overlay namespaces (PNG #13 carries no overlay so no `c13-` prefix), confirmed no collisions. |
| 05 Understanding Meshes and Geometry | 30 of 30 | 30 of 30 | ✅ Complete | 16 SVGs plus 14 PNGs across 6 phases (initial 15+15 split flipped to 16+14 during Phase 5 PRODUCTION when #19 character edge flow was type-flipped from PNG to SVG with new id prefix `cf`, after the locked decision that character-feature modeling is out of scope for the image-integration program). Phases distributed `4/4/5/6/5/6` across sections `#what-are-meshes` (P1: #1 mc, #2 lp, #3 mo, #4 pt; all SVG), `#mesh-components` (P2: #5, #6, #7, #26; all PNG no overlay), `#mesh-density` plus `#normals` (P3: #8 ds, #9 sf SVG; #10 c10, #11 c11, #28 c28 PNG with overlays), `#polygon-types` (P4: #12 tri, #13 qd, #14 ng, #15 pc SVG; #16 PNG no overlay, #27 c27 PNG with overlay), `#topology` (P5: #18 gb, #19 cf, #24 tl SVG; #17 c17, #29 c29 PNG with overlays), `#manifold-geometry` plus `#summary` (P6: #20 mf, #21 nm, #23 df SVG; #22 c22, #25 c25, #30 c30 PNG with overlays). HTML grew from 84,327 bytes (82.4 KB) at start to 279,445 bytes (272.9 KB) at end (+195,118 bytes / +190.5 KB across six phases). Per-phase HTML deltas: P1 +45,964 B (44.9 KB); P2 +2,193 B (2.1 KB); P3 +29,467 B (28.8 KB); P4 +32,974 B (32.2 KB); P5 +39,558 B (38.6 KB); P6 +44,962 B (43.9 KB). Largest single-lesson HTML in the image-integration program to date (Lesson 03 at 231.8 KB, Lesson 04 at 229.2 KB, Lesson 05 at 272.9 KB). Total inline SVG id-prefix registry on the page: `mc/lp/mo/pt/ds/sf/tri/qd/ng/pc/gb/cf/mf/nm/df/tl` for the 16 inline SVGs and `c10/c11/c17/c22/c25/c27/c28/c29/c30` for the 9 PNG annotation overlay namespaces (PNGs #5, #6, #7, #16, #26 carry no overlays so no `c{N}-` prefix), confirmed no collisions. Multi-sub-chat integration cadence observed: Phase 5 INTEGRATION split across 2 sub-chats due to context-budget pressure; Phase 6 INTEGRATION used a dedicated plan-lock chat plus 3 execution sub-chats. Bottom-up integration order (latest section back to earliest) used in every multi-sub-chat phase to keep earlier line positions stable across edits. New locked rules from this lesson (carry forward to Lesson 06 and beyond): Blender 5.1.1 op-name corrections (`bpy.ops.mesh.inset` not `inset_faces` which does not exist in 5.1.1; `bpy.ops.mesh.delete(type='FACE')` singular not `FACES` plural; `bpy.ops.mesh.select_non_manifold()` works without bmesh fallback; prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics; `bmesh.ops.subdivide_edges` with cuts=N produces only equal-spaced cuts, use `bmesh.ops.bisect_plane` per plane for unequal spacing); Pillow 12.2.0 confirmed available at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL` for composites and image-measurement, replacing the Lesson 04 Phase 4 numpy fallback; warning-vs-positive overlay colorway split (`#E63946` red badge with `#ffffff` white text for warning labels FLIPPED and NON-MANIFOLD; `#4ADE80` green badge with `#0f1a14` dark text for positive labels Face normal, Face Orientation, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST, etc.); deeper-indent variant for figures placed inside cards opening at col 16 (figure col 20, wrapper div col 24, img and overlay svg col 28, overlay children col 32, figcaption col 24, figure close col 20); inline-stacked PNG overlay pattern uses `inset: 0` shorthand and `preserveAspectRatio="xMidYMid meet"` (locked from c28 precedent in Phase 3); no-highlights composite-overlay variant for horizontally-divided composites with baked-in `#FF6B00` 2px vertical dividers (Phase 5 #29 SELECT CAP/INSET/EXTRUDE and Phase 6 #30 CUP/CHAIR/BUST precedent). Lessons learned: type-flip pattern when an image requires character-feature modeling (Phase 5 #19 character edge flow flipped PNG to SVG; same principle applied to Phase 6 #30 bust panel which uses a UV sphere with 4 bisect-plane cuts and a tapered jaw but no eye sockets, no nose, no mouth, no brows); layout-nudge precedent when locked SVG y values conflict with the locked header (y=0 to y=138) or footer tip card (y=506 to y=540 on 800x560 canvas, y=625 to y=675 on 800x680 canvas) regions, documented at production time in the chat status bullet (Phase 4 #15 takeaway and footer nudges, Phase 5 #24 panel labels nudge, Phase 5 #19 head dimension nudge, Phase 6 #20 BOTTOM card reshape). Deferred follow-ups: browser QA pass across all 30 figures; standalone `.svg` `color="#222"` audit; `images/IMAGE_STYLE_GUIDE.md` revision (palette, overlay colorway split, middle-dot convention, inline-stacked overlay pattern, deeper-indent variant, op-name corrections, Pillow availability); optional `lesson_05_integration_progress.md` archive sweep to prune now-history Phase plan sections. See `lesson_05_integration_progress.md` and `lesson_05_completion_handoff.md`. |
| 06 Edit Mode Essentials | 50 of 50 | 50 of 50 | ✅ Complete | 3 SVGs (`pf`, `dd`, `sr`) plus 47 PNGs (17 with overlays: c2, c3, c10, c13, c14, c15, c16, c20, c23, c25, c28, c30, c41 NEW, c43 NEW, c45, c46, c49) across 6 phases (Option L: 10/10/8/6/8/8 following section boundaries). HTML grew from 136.3 KB (139,576 B) at integration start to 231.5 KB (237,004 B) at close (+95.1 KB / +97,428 B). Per-phase cumulative HTML size: P3 sub-chat 2 close 203,063 B (combined P1+P2+P3 +63,487 B reconstructed from session.md since per-figure tracking landed mid-Phase 3); P4 close 211,972 B (+8,909 B); P5 close 224,002 B (+12,030 B); P6 close 237,004 B (+13,002 B). 17 PNG overlays integrated (11 positive-green full-callouts + 2 positive-green composite-overlays c25 / c41 + 1 warning-red c23 + 3 decorative-shape-only c13 / c14 / c15). New locked rules accumulated this lesson: 10 Blender 5.1.1 BlenderMCP discoveries across Phases 5 / 6 (Screw Modifier needs `transform_apply(rotation=True)` before add; `subdivide` needs VIEW_3D `temp_override`; multi-object Edit Mode breaks `knife_project`; `plane.show_wire=True` required for knife_project SOLID-shading visibility; `view3d.view_axis` operator vs `region_data.view_rotation` for view sync; knife modal keybindings A/C/Z not C/Z/A; Alt+Z X-ray ON before knife cut-through; `subdivide(number_cuts=N)` grows quadratically not exponentially; `bpy.ops.screen.screenshot` silently truncates to 0 bytes on WSL UNC paths; bevel modal readout splits across top floating text plus bottom hints bar). Plus the modal-status-bar-as-truth criterion for manual modal captures; first-pass marginal-read rejection precedent; Win+Shift+S overlay freezes screen on Win 11 (popover capture path); cross-sub-chat composite pattern (first-in-L06 via #35); resume-chat workflow precedent (chat hits tool-use limit mid-execution then resume picks up at next pending step; sub-chat envelope stays single); manual-capture save-direct-to-WSL forward fix; Pillow crop+resize pre-integration step for oversize manual captures (#45 in Phase 4, #39 in Phase 6); multi-callout overlay pattern extension from 3 (c28, c30) to 4 callouts (c43); composite-overlay second precedent (c41 follows c25 with identical 2562x720 geometry); decorative-shape-only overlay variant for tool-indicator captures (c13, c14, c15); card-internal figure placement (#38 only). See `lesson_06_integration_progress.md` and `lesson_06_completion_handoff.md`. |
| 07 to 51 | not started | n/a | ⏳ Pending | Image requirements docs exist for every lesson (`lesson_NN_image_requirements*.md`). |

### Locked integration approach (applies to all lessons)

- Plain `<figure>` + `<figcaption>` wrapper, no class. `styles/main.css` already styles both elements.
- PNGs use `<img src="images/..." alt="..." loading="lazy">` with descriptive alt text.
- Inline SVGs are re-indented to 20-space content depth, with the `color="#222"` attribute stripped from the root `<svg>` tag (it locks `currentColor` and breaks dark mode when inlined; standalone `.svg` files keep the attribute).
- Edits use `Filesystem:edit_file` with `dryRun=true` first, then commit, then verify with `Filesystem:get_file_info`.
- Path prefix is `\\wsl$\Ubuntu\` always (never `\\wsl.localhost\`).
- No new em-dashes in any new captions, alt text, or markdown notes. Em-dashes in existing source content are preserved.
- For raster images that need AI generation or real-world capture (screenshots, photos), a `lesson_NN_image_prompts.md` file documents the platform-specific prompts and acceptance criteria, or specifies the capture path when AI generation is a poor fit.

### Interruption-recovery protocol adoption

As of 2026-05-19, this project adopts the minimum viable subset of `INTERRUPTION_RECOVERY.md`:

- **Pillar 2.2 resume pointer:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` is the single-block snapshot of current project state. Overwrite-every-update semantics. First file read in every new chat, before this `status.md` and before any per-lesson progress doc.
- **Pillar 2.1 save-first:** disk artifacts (this `status.md`, per-lesson `lesson_NN_integration_progress.md` files, and `session.md`) are updated at milestone boundaries, not at chat end.
- **Pillar 2.4 intermediate states:** per-lesson placement tables now use a four-state legend covering `not captured; not integrated`, `produced; not integrated`, `produced; handoff_written; not integrated` (new intermediate state for the window between Phase production close and Phase integration close), and `integrated`. Legend lives directly above each lesson's placement table. Lesson 04 was the first lesson to apply the new intermediate state (rows #7 and #5).
- **Status archive:** historical and superseded `status.md` content lives in `status_archive.md` at project root, keeping this `status.md` lean. New archive sweeps append a dated section there; do not delete the on-disk files the archive references.

The other five pillars (2.3 append-only narrative log, 2.5 size-delta pre-check, 2.6 chat-N+1 stub staging, 2.7 LARGE-sweep split-call, 2.8 script-based automation) are not adopted at this time; they can be layered in as project complexity warrants.

---

## Supporting Files

### Image Requirements Docs
Every lesson has one or more `*_image_requirements*.md` files specifying the images needed for that lesson. These are production notes, not public-facing.

| Range | Count | Notes |
|-------|-------|-------|
| Lessons 1–27 | 27 files | Single `.md` per lesson |
| Lessons 28–51 | 35 files | Some lessons have `_part1.md` / `_part2.md` splits |

### Other Documentation
- `session.md`: Resume pointer per `INTERRUPTION_RECOVERY.md` pillar 2.2. Single-block snapshot of current project state. Overwrite-every-update semantics. First file read in every new chat.
- `status_archive.md`: Historical and superseded content moved out of this `status.md`. Append-only history.
- `INTERRUPTION_RECOVERY.md`: Portable multi-chat work-preservation protocol. Eight pillars; the minimum viable subset (pillars 2.1, 2.2, 2.4) is the adoption baseline for this project.
- `curriculum_overview.md` (11.9 KB) — Full course curriculum outline
- `course_lesson_plan.json` (5.2 KB) — Structured lesson plan data
- `image_analysis.md` (16.0 KB) — Image analysis notes
- `lesson_41_analysis_summary.md` (7.9 KB) — Lesson 41 analysis
- `lesson_43_image_requirements_quick_reference.md` (4.1 KB) — Quick ref
- `lesson_44_quick_reference.md` (16.3 KB) — Quick ref
- `lesson_01_integration_progress.md`: Lesson 01 image integration plan, current state, and locked approach
- `lesson_01_image_prompts.md`: AI generator prompts and screenshot capture spec for the lesson's raster images
- `lesson_02_integration_progress.md`: Lesson 02 image integration plan and final state (complete)
- `lesson_02_completion_handoff.md`: Lesson 02 image production handoff
- `lesson_03_integration_progress.md`: Lesson 03 image integration plan and final state (complete)
- `lesson_03_image_prompts.md`: Capture instructions and AI-fallback prompts for Lesson 03's six PNGs (all Blender UI screenshots)
- `lesson_03_completion_handoff.md`: Lesson 03 image production and integration close-out handoff
- `lesson_04_integration_progress.md`: Lesson 04 image integration plan and final state (complete; all six phases integrated; 14 of 14 images produced, 14 of 14 integrated; HTML at 229.2 KB)
- `lesson_04_image_prompts.md`: Capture instructions and Adobe Firefly plus Canva AI fallback prompts for Lesson 04's four PNGs (#8 3D cursor, #9 Shift+S snap pie menu, #12 N-panel Item tab, #13 finished table-scene render)
- `lesson_04_completion_handoff.md`: Lesson 04 image production and integration close-out handoff
- `lesson_05_integration_progress.md`: Lesson 05 image integration plan and final state (complete; all six phases integrated; 30 of 30 images produced, 30 of 30 integrated; HTML at 272.9 KB)
- `lesson_05_completion_handoff.md`: Lesson 05 image production and integration close-out handoff
- `lesson_06_integration_progress.md`: Lesson 06 image integration plan (50 images planned, 6-phase Option L layout 10/10/8/6/8/8 following section boundaries; planning complete 2026-05-21; 0 of 50 produced)

References to superseded session-handoff files (`continue.md`, `continue_updated.md`, `lesson_02_next_chat_handoff.md`, `lesson_02_phase4_cleanup_handoff.md`, `wave3_continuation_prompt.md`) moved to `status_archive.md`. The files themselves remain on disk for reference.

### Archive
- `parts/archive/` — Contains ~300 individual part files (`lesson_XX_*_part_NN.html`) used during the multi-part lesson assembly process. These are the source fragments that were concatenated into the final lesson files.

---

## Known Issues / Future Work

| Issue | Severity | Notes |
|-------|----------|-------|
| Inconsistent nav structures | ℹ️ Low | Lesson files have varying HTML structures for their header nav (some use `.main-nav`, some use breadcrumbs, some use inline `<header><nav>`). The JS injection adds a uniform `.site-nav` bar to all pages regardless. |
| Lesson footers have hardcoded styles | ℹ️ Low | Some footers (e.g., lesson 43) have inline `background: #f5f5f5`. The `injectSiteFooter()` JS function replaces these with CSS variable-based styles at runtime. |
| Image production in progress | ℹ️ Tracking | `images/` contains produced images for Lessons 01, 02, 03, and partially Lesson 04 (see Image Integration Status section above). `assets/` still contains only `README.md` placeholder. Image requirements docs continue to spec what's needed for lessons not yet in production. |
| `parts/archive/` cleanup | ℹ️ Low | ~300 part files are still in the archive. Could be removed once the merged lesson files are confirmed complete. |

Resolved historical entries (Lesson 51 truncation, 2024/2025 copyright-date sweep) moved to `status_archive.md`.

---

## WSL Path Note

- **Works:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- **Does NOT work:** `\\wsl.localhost\Ubuntu\...`
