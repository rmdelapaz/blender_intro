# Blender Mastery Course — Project Status

**Project Path:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`  
**Last Updated:** April 12, 2026  
**Total Size:** ~12.4 MB (126 files, 7 directories)

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
| 1 | Welcome to Blender | `lesson_01_welcome_to_blender.html` | 49.4 KB | ✅ | ✅ | ✅ |
| 2 | The Blender Interface | `lesson_02_the_blender_interface.html` | 69.6 KB | ✅ | ✅ | ✅ |
| 3 | Navigation and Viewport Control | `lesson_03_navigation_and_viewport_control.html` | 103.5 KB | ✅ | ✅ | ✅ |
| 4 | Basic Object Manipulation | `lesson_04_basic_object_manipulation.html` | 106.0 KB | ✅ | ✅ | ✅ |

### Module 2: 3D Modeling Fundamentals

| # | Lesson | File | Size | Scripts | Prev/Next | Footer |
|---|--------|------|------|---------|-----------|--------|
| 5 | Understanding Meshes and Geometry | `lesson_05_understanding_meshes_and_geometry.html` | 82.4 KB | ✅ | ✅ | ✅ |
| 6 | Edit Mode Essentials | `lesson_06_edit_mode_essentials.html` | 136.3 KB | ✅ | ✅ | ✅ |
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

## Supporting Files

### Image Requirements Docs
Every lesson has one or more `*_image_requirements*.md` files specifying the images needed for that lesson. These are production notes, not public-facing.

| Range | Count | Notes |
|-------|-------|-------|
| Lessons 1–27 | 27 files | Single `.md` per lesson |
| Lessons 28–51 | 35 files | Some lessons have `_part1.md` / `_part2.md` splits |

### Other Documentation
- `curriculum_overview.md` (11.9 KB) — Full course curriculum outline
- `course_lesson_plan.json` (5.2 KB) — Structured lesson plan data
- `image_analysis.md` (16.0 KB) — Image analysis notes
- `lesson_41_analysis_summary.md` (7.9 KB) — Lesson 41 analysis
- `lesson_43_image_requirements_quick_reference.md` (4.1 KB) — Quick ref
- `lesson_44_quick_reference.md` (16.3 KB) — Quick ref
- `continue.md` (2.0 KB) — Session handoff notes
- `continue_updated.md` (11.2 KB) — Earlier session handoff notes

### Archive
- `parts/archive/` — Contains ~300 individual part files (`lesson_XX_*_part_NN.html`) used during the multi-part lesson assembly process. These are the source fragments that were concatenated into the final lesson files.

---

## Known Issues / Future Work

| Issue | Severity | Notes |
|-------|----------|-------|
| Lesson 51 was truncated | ⚠️ Fixed | Was missing closing tags, footer, scripts. Fixed April 12, 2026. Content may be incomplete (parts 8+ were referenced but not merged). |
| Inconsistent nav structures | ℹ️ Low | Lesson files have varying HTML structures for their header nav (some use `.main-nav`, some use breadcrumbs, some use inline `<header><nav>`). The JS injection adds a uniform `.site-nav` bar to all pages regardless. |
| Lesson footers have hardcoded styles | ℹ️ Low | Some footers (e.g., lesson 43) have inline `background: #f5f5f5`. The `injectSiteFooter()` JS function replaces these with CSS variable-based styles at runtime. |
| Copyright dates | ℹ️ Low | `index.html` and `lesson_51` updated to 2025. Other 50 lesson footers show 2024, but the JS injection replaces footer content with 2025 at runtime. |
| No actual images | ℹ️ Low | `images/` and `assets/` directories contain only `README.md` placeholders. Image requirement docs describe what's needed but images haven't been produced yet. |
| `parts/archive/` cleanup | ℹ️ Low | ~300 part files are still in the archive. Could be removed once the merged lesson files are confirmed complete. |

---

## WSL Path Note

- **Works:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- **Does NOT work:** `\\wsl.localhost\Ubuntu\...`
