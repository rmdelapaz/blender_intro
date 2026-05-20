# Session Resume Pointer

Single-block snapshot per `INTERRUPTION_RECOVERY.md` pillar 2.2. Overwrite-every-update semantics. First file to read in every new chat, before `status.md` and before any per-lesson progress doc.

---

## Chat / Date / Status

**Lesson 05 Phase 3 PRODUCTION chat.** 2026-05-20. **CLOSED CLEAN (all 5 images on disk).**

Authored 2 SVGs and captured all 3 PNGs for the `#mesh-density` and `#normals` sections of `lesson_05_understanding_meshes_and_geometry.html`. SVG #8 `lesson_05_08_density_comparison_sphere.svg` (7,411 bytes, id prefix `ds`) authored with the locked trade-off framing: paired-panel low-poly vs high-poly with use-case footers (Games, VR, backgrounds, mobile vs Film, product viz, hero close-ups, sculpting). SVG #9 `lesson_05_09_smooth_vs_flat_shading.svg` (9,991 bytes, id prefix `sf`) authored as paired-panel: left FLAT shows 12 per-face normal arrows in `#4ADE80` (via a shared SVG marker for the arrowhead), right SMOOTH shows 12 per-vertex normal arrows over a radial gradient fill. Both SVGs use the locked `#4ADE80` Normals green and follow the locked house style (800x560 viewBox, top 3px orange accent, system-ui font, retain `color="#222"` on standalone files). BlenderMCP block 1 set up a fresh UV sphere named NormalSphere (segments=16, ring_count=8, 114 verts and 128 faces) at origin with view rotation set to Blender's default user perspective `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ')` and `view_distance=5.0`, and rendered #10 `lesson_05_10_face_normals_visualization.png` (711,611 bytes) with face normals overlay at length 0.3 via the Phase 2 OpenGL temp_override pattern. Block 2 stayed in Edit Mode on the same sphere, switched overlays (face normals off, face orientation on), flipped 48 of 128 faces (top 1/3 cluster, `f.calc_center_median().z > 0.4`) via `bmesh.ops.reverse_faces`, and rendered #11 `lesson_05_11_flipped_normals_problem.png` (693,316 bytes) showing the red flipped cap on top and blue correctly-oriented faces below. PNG #28 `lesson_05_28_normals_overlay_toggle.png` (149,601 bytes) captured manually by Ray via Win+Shift+S of the Blender Overlays dropdown with the Normals section visible plus one section above and one below for context; initial save had a `.pn.png` filename typo which was renamed to `.png` via `Filesystem:move_file`. All five image files verified via `Filesystem:get_file_info`. Placement table rows in `lesson_05_integration_progress.md` flipped: #8 and #9 to `produced; not integrated`, #10 and #11 and #28 to `captured; not integrated`. Phase plan row 3 flipped to `PRODUCTION COMPLETE 2026-05-20`. Header Current state line, Available section (8 to 13 entries), and Missing section (22 to 17) all updated. HTML not modified this chat.

**Lesson 05 current state:** 8 of 30 integrated (4 SVGs + 4 PNGs, from Phases 1 and 2). 13 of 30 produced or captured. 17 of 30 still missing (9 SVGs plus 8 PNGs). HTML at 129.4 KB (132,484 bytes).

---

## Current step (next chat)

**Recommended next step: Lesson 05 Phase 3 INTEGRATION.**

Inline all 5 Phase 3 images into `lesson_05_understanding_meshes_and_geometry.html` at the locked placements documented in the progress doc placement table and Phase plan row 3 notes. Workflow: integrate bottom-up (highest line number first) so earlier line numbers stay stable across edits. Order: #9, then #11, then #28, then #10, then #8.

**Recommended kickoff for the next chat:**

1. Read this `session.md`
2. Read `lesson_05_integration_progress.md` (master planning doc) for full context, especially the Phase 3 PRODUCTION status bullet at the top of the Status section and the updated Next chat section
3. Verify all 5 image files via `Filesystem:get_file_info`
4. Integrate bottom-up: #9 then #11 then #28 then #10 then #8, using `Filesystem:edit_file` with `dryRun=true` first then commit with `dryRun=false` then `Filesystem:get_file_info` verify after every commit
5. Design inline-stacked overlays for the three PNGs (#10, #11, #28): wrapper div `position: relative; display: inline-block; max-width: 100%`, overlay SVG with `pointer-events: none` and viewBox matching the PNG pixel dimensions (1280x720 for #10 and #11; native crop size for #28), namespaced ids (`c10-*`, `c11-*`, `c28-*`)
6. At chat close, update `lesson_05_integration_progress.md` placement table rows for the integrated images (flip to `integrated`), Phase plan row 3 (flip to `INTEGRATION COMPLETE`), header Current state line, Available and Missing sections, and add a new dated Status bullet; overwrite this `session.md` to point at Phase 4 PRODUCTION (polygon-types) as the next pass

**Phase 3 integration specifics:**

- #8 `lesson_05_08_density_comparison_sphere.svg`: inline SVG, no overlay. Strip `color="#222"` from root. Re-indent figure col 16, svg root col 20, svg children col 24, deeper 28 or 32, figcaption col 20. Multi-line `<rect>` continuations collapsed onto single lines. Decorative comments pruned, short structural comments kept. Place after the "fewer polygons" list (end of trade-off discussion), before the Density Decision mermaid.
- #9 `lesson_05_09_smooth_vs_flat_shading.svg`: inline SVG, no overlay. Same handling as #8. Notable: contains a `<defs>` block with one `<marker>` (id `sf-arrow`, arrowhead fill `#4ADE80`) and one `<radialGradient>` (id `sf-smooth-grad`). Place after the Smooth Shading card, before the "Try It Now: Smooth vs Flat" card.
- #10 `lesson_05_10_face_normals_visualization.png`: `<img loading="lazy">` with descriptive alt text. Overlay candidate (decide during integration): single callout pointing at one face normal arrow as the focal point, with `c10-*` ids. Place after the Normal Analogy card, before the "Why Normals Matter" h3.
- #11 `lesson_05_11_flipped_normals_problem.png`: `<img loading="lazy">`. Overlay candidate: two text labels ("FLIPPED" pointing at red top cap, "CORRECT" pointing at blue base) with `c11-*` ids, or a single legend block in the corner. Place after the "Flipped Normals: A Common Problem" list, before the "Fixing Flipped Normals" card.
- #28 `lesson_05_28_normals_overlay_toggle.png`: `<img loading="lazy">`. Overlay candidate: UI callout circle around the Normals toggle row in the dropdown, especially the "Face Normals" sub-toggle since that is the subject of #10. Use `c28-*` ids. Native pixel dimensions of the snip are unknown to Claude (file is 149,601 bytes); first step in integration is to determine pixel dims (via `bash_tool` on Claude's computer with PIL after `Filesystem:copy_file_user_to_claude`, or by reading the figure rendered size in the browser) so the overlay viewBox can match. Place after the "Try It Now: See Face Normals" card, before the "Flipped Normals" h3.

**HTML size projection:** Starting at 132,484 bytes (129.4 KB). Projected delta this chat 35 to 45 KB (SVG inlines roughly 10 to 15 KB each; PNGs with overlays roughly 3 to 5 KB each). Projected end of Phase 3 INTEGRATION: around 170 to 175 KB.

**Alternative next steps if Ray wants something other than Phase 3 INTEGRATION:**

- Lesson 04 docs cleanup pass (archive per-phase Lesson 04 handoff files into a subfolder or `status_archive.md`)
- Lesson 04 browser QA pass (verify all 14 Lesson 04 images render correctly in light and dark mode at desktop and mobile widths)
- Lesson 05 Phase 1+2 browser QA pass (verify the 8 already-inlined Phase 1+2 images render correctly in light and dark mode at desktop and mobile widths)

Ray to confirm the next step at the top of the next chat.

---

## Process expectations (carry forward; all locked rules)

**Path discipline:**
- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`

**File operations:**
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`
- Tools are deferred; call `tool_search` before invoking; do not inherit "tool X is unavailable" assumptions from a compaction summary

**Em-dash discipline:**
- No new em-dashes anywhere in new content (figcaptions, alt text, status blocks, markdown notes, handoff docs)
- Pre-existing em-dashes in source content are preserved verbatim through edits
- Quoting pre-existing em-dashes inside backtick code spans in a status bullet is OK (Phase 1 INTEGRATION and Phase 2 INTEGRATION precedent)
- Structural em-dash after a date in Status bullets (the "2026-MM-DD \u2014 Description" pattern) is grandfathered as a list-item separator; not new prose

**Inline image pattern (locked from Phase 1 and confirmed by Phase 2):**
- Plain `<figure>`/`<figcaption>` wrapper, no class
- PNGs: `<img loading="lazy">` with descriptive alt text. Figure at col 16, img and figcaption at col 20.
- Inline SVGs: figure at col 16, svg root at col 20, svg children at col 24, deeper nesting at 28/32, figcaption at col 20 (each 2-space orig level expands to 4 spaces); `color="#222"` stripped from inlined root `<svg>` (breaks dark mode); standalone `.svg` files in `images/` retain `color="#222"` for `<img>` fallback
- Multi-line `<rect>` attribute continuations collapsed onto single lines during inlining
- Decorative ASCII-divider author comments (`====== Block Title ======`) pruned during inlining; short structural comments (`<!-- Panel 1 -->`, `<!-- Cell: Plane -->`) kept
- PNGs needing annotation callouts use the inline-stacked overlay pattern (wrapper div `position: relative; display: inline-block; max-width: 100%`, overlay SVG viewBox matches PNG pixel dimensions, `pointer-events: none`, namespaced `c{N}-*` ids)
- No baked-in callouts on PNGs going forward
- 2-to-3-line `oldText` anchors for unique insertion points

**BlenderMCP capture (locked, confirmed Phase 2 and Phase 3):**
- Lowercase `blender:execute_blender_code` (uppercase hangs)
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere (kills BlenderMCP addon mid-execution; recovery requires restarting Blender)
- Clean Blender state manually instead (`bpy.data.objects.remove(obj, do_unlink=True)`, etc.)
- Render engine fallback path: try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum error, fall back to `BLENDER_EEVEE`. Both produce visually comparable output for lesson render needs. Phase 3 fallback triggered as expected.
- Pie menus and other transient UI Blender's render API cannot reach: manual Win+Shift+S capture into `images/` directly. Phase 3 #28 confirmed this path.
- OpenGL viewport render path (Phase 2 and Phase 3 verified): find the first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`
- UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` works cleanly from Blender Python on Windows for file output; no need for Unix-style path
- Default user-perspective view rotation: `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()`. View distance scales with subject size: 7.0 for default cube (Phase 2), 5.0 for unit-radius UV sphere (Phase 3)

**Brand palette (current as of Lesson 04 close; Phase 1, 2, and 3 carried forward unchanged):**
- Blender brand / Orange operation badge: `#FF6B00`
- Course / structure / Z-axis blue: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external / Y-axis green / Normals: `#4ADE80`
- Portfolio / outcome / Caution (Lesson 05 proposed): `#F5C242`
- X-axis red / Warning: `#E63946`
- Vertices in Lesson 05 mesh diagrams: `#FF6B00` (matches Blender's selection color)

**Documentation rhythm:**
- Per-lesson `lesson_NN_integration_progress.md` is the running narrative log
- Per-lesson `lesson_NN_completion_handoff.md` is the close-out summary written at lesson close
- `status.md` is the project-wide snapshot, rolled at every lesson close
- This `session.md` is the resume pointer, overwritten every milestone

**Cadence:**
- One production chat plus one integration chat per phase (Lesson 04 cadence; carry forward unless a phase has only one image)
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit

**Placement-table state legend:**
- `not captured; not integrated` (or `not produced; not integrated`)
- `produced; not integrated` (or `captured; not integrated`)
- `produced; handoff_written; not integrated`
- `integrated`

---

## Specifics (per next-chat plan)

If next chat is **Lesson 05 Phase 3 INTEGRATION** (recommended default):

- Project root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Master planning doc: `lesson_05_integration_progress.md` (read first for full context after this session.md)
- Image directory: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
- Lesson HTML: `lesson_05_understanding_meshes_and_geometry.html` (132,484 bytes; 1853 lines pre-Phase-3-integration)
- 5 images to inline:
  - SVG #8 `lesson_05_08_density_comparison_sphere.svg` (id prefix `ds`)
  - SVG #9 `lesson_05_09_smooth_vs_flat_shading.svg` (id prefix `sf`)
  - PNG #10 `lesson_05_10_face_normals_visualization.png` (id prefix `c10`)
  - PNG #11 `lesson_05_11_flipped_normals_problem.png` (id prefix `c11`)
  - PNG #28 `lesson_05_28_normals_overlay_toggle.png` (id prefix `c28`)
- Workflow: bottom-up integration order (#9, then #11, then #28, then #10, then #8); `Filesystem:edit_file` with dryRun first then commit; verify with `Filesystem:get_file_info` after every commit
- Overlay design for the three PNGs is part of this chat (was deferred from production)
- First step for #28: determine PNG pixel dimensions so the overlay viewBox can match (file is 149,601 bytes; native dims TBD)

If next chat is **Lesson 04 docs cleanup**:

- Identify all `lesson_04_integration_phase*_handoff.md` files at project root
- Decide whether to move them into a `lesson_04_handoffs/` subfolder, archive them into `status_archive.md`, or leave them in place with a deprecation note
- The consolidated `lesson_04_completion_handoff.md` is now authoritative; the per-phase handoffs are reference-only

If next chat is **Lesson 04 browser QA pass**:

- Open `lesson_04_basic_object_manipulation.html` in a browser at desktop and mobile widths, light and dark modes
- Verify all 14 images render (3 PNGs with overlays scale correctly; SVGs respect dark mode via stripped `color="#222"`)
- Verify cheat-sheet card colors hold in both modes
- No code edits expected; report any issues for a follow-up correction chat

If next chat is **Lesson 05 Phase 1+2 browser QA pass**:

- Open `lesson_05_understanding_meshes_and_geometry.html` in a browser at desktop and mobile widths, light and dark modes
- Verify all 4 inlined Phase 1 SVGs render correctly: #1 mesh components (cube with vertex/edge/face annotation cards), #2 lowpoly to highpoly progression (4-panel sphere segments), #3 object vs mesh data (split panel), #4 primitive types grid (2x4 grid in 800x680 viewBox)
- Verify all 4 inlined Phase 2 PNGs render correctly: #5 vertex selection mode, #6 edge selection mode, #7 face selection mode, #26 component count UI (stats overlay)
- Confirm dark mode renders correctly for the SVGs now that `color="#222"` is stripped from inlined SVG roots (text and stroke should follow page text color, not stay locked to dark gray)
- Confirm PNGs (which have no dark-mode dependency) render at full width within the figure wrapper
- No code edits expected; report any issues for a follow-up correction chat


---


---


---
