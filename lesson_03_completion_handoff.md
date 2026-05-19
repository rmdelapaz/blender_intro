# Lesson 03 Image Production and Integration: COMPLETE

Lesson 03 image work is closed. All 18 images produced; all 18 integrated into `lesson_03_navigation_and_viewport_control.html`. Final HTML size: 231.8 KB (237,410 bytes), up from 103.5 KB at integration start (+128.3 KB across six phases).

## What was produced

18 of 18 images per `lesson_03_image_requirements.md`. 12 SVGs (inlined into HTML) plus 6 PNG screenshots (captured via the MCP Blender bridge from a Blender 5.1 session). Files at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.

SVGs (12):

- #1 `lesson_03_01_big_three_operations.svg` — visual primer for orbit, pan, and zoom
- #2 `lesson_03_02_mouse_button_reference.svg` — mouse button roles in Blender
- #3 `lesson_03_03_orbit_operation.svg` — orbit motion diagram with drag mapping inset
- #4 `lesson_03_04_pan_operation.svg` — pan motion diagram with drag mapping inset
- #5 `lesson_03_05_zoom_operation.svg` — zoom motion diagram with input mapping inset
- #7 `lesson_03_07_standard_views_cube.svg` — isometric cube with six labeled camera positions
- #8 `lesson_03_08_numpad_layout.svg` — color-coded numpad with right-side legend
- #12 `lesson_03_12_perspective_depth.svg` — rails converging on a vanishing point on a dashed horizon
- #13 `lesson_03_13_orthographic_parallels.svg` — blueprint-style vertical rails with equal-width measurements
- #14 `lesson_03_14_navigation_workflow.svg` — decision tree with dashed side-note callouts
- #17 `lesson_03_17_walk_fly_controls.svg` — WASD highlighted with directional arrows plus a mouse with yaw and pitch callouts
- #18 `lesson_03_18_navigation_shortcuts_reference.svg` — two-column reference card, six categories

PNGs (6):

- #6 `lesson_03_06_perspective_vs_orthographic.png` — viewport comparison
- #9 `lesson_03_09_camera_view_frame.png` — annotated camera frame elements
- #10 `lesson_03_10_frame_all_vs_selected.png` — Frame All vs Frame Selected side by side
- #11 `lesson_03_11_local_view_demo.png` — Local View before and after
- #15 `lesson_03_15_camera_to_view.png` — N-panel Camera to View checkbox with tight ellipse highlight
- #16 `lesson_03_16_quadview_layout.png` — Ctrl Alt Q quadview with four Blender-orange corner labels (Top, User Persp, Front, Right)

## What was integrated

Six phases across five integration chats (Phases 3 and 4 ran in a single chat). Each phase placed its figures in document order using the locked inline pattern. HTML grew from 103.5 KB to 231.8 KB.

| Phase | Section(s) | Figures | Cumulative HTML size |
|---|---|---|---|
| 1 | the-big-three | #1, #3, #4, #5, #14 (all SVG) | 150.5 KB |
| 2 | mouse-navigation | #2 (SVG) | 158.5 KB |
| 3 and 4 | perspective-ortho, standard-views | #6 (PNG); #7, #8, #12, #13 (SVG) | 200.2 KB |
| 5 | focus-frame, camera-view | #9, #10, #11, #15 (all PNG) | 202.4 KB |
| 6 | advanced-techniques, summary | #16 (PNG); #17, #18 (SVG) | 231.8 KB |

Per-phase handoff files at project root: `lesson_03_integration_phase2_handoff.md`, `lesson_03_integration_phase3_handoff.md`, `lesson_03_integration_phase5_handoff.md`, `lesson_03_integration_phase6_handoff.md`. The full phase-by-phase narrative lives in `lesson_03_integration_progress.md`.

## Locked inline pattern (carry forward to Lesson 04 and beyond)

- Plain `<figure>` plus `<figcaption>` wrapper, no class. `styles/main.css` already styles both.
- PNGs: `<img src="images/..." alt="..." loading="lazy">` inside the figure, with descriptive alt text.
- Inline SVGs: re-indent to 20-space content depth. `<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<img>`, `<figcaption>` at column 20; multi-line svg attribute continuations at column 25; SVG body at column 22; `<g>` children at column 24.
- **Strip the `color="#222"` attribute** from the root `<svg>` when inlining. That attribute locks `currentColor` and breaks dark mode when inlined. The standalone `.svg` file in `images/` keeps the attribute for fallback rendering; only the inline copy in HTML drops it. If `color="#222"` sits on its own continuation line, drop the line and reattach the closing `>` to the previous attribute line.
- 2 to 3 line anchors for `oldText` so each insertion point is unique within the file.
- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note. Pre-existing em-dashes in source content are preserved verbatim.

## Tool selection rules (LOCKED, applies to all future lessons)

Tools are deferred. Call `tool_search` before invoking. The previous chat's compaction summary may say a tool was unavailable; that was true for *that* chat, not necessarily the current one. Always verify your own toolset rather than inheriting the assumption.

**For new file writes:** `Filesystem:write_file` (load via `tool_search` for "filesystem write"). Do NOT use Claude's built-in `create_file`. The built-in writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths. It reports "File created successfully" but the file never appears on disk. Always verify with `Filesystem:get_file_info` after every write.

**For edits to existing files:** `Filesystem:edit_file` with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.

**For PNG capture via Blender:** lowercase `blender:execute_blender_code` (uppercase hangs). Full pipeline recipes documented in `lesson_02_next_chat_handoff.md` (still valid reference).

**For other raster sources:** Canva and Adobe for creativity are available as MCP connectors when AI generation is the right call. For Blender-specific UI screenshots, the live MCP Blender bridge remains the strongly preferred sourcing route; AI generation is a fallback only and should be documented in `lesson_NN_image_prompts.md` with concrete platform-specific prompts and acceptance criteria.

## SVG patterns proven in Lesson 03 (reuse for Lesson 04)

All Lesson 03 SVGs follow the locked house style from `images/IMAGE_STYLE_GUIDE.md`. Patterns specifically validated this lesson, each with a unique id prefix to avoid `<title>` and `<desc>` collisions when several are inlined on the same page:

**Motion diagram set (#3, #4, #5).** Authored as a coherent trio with matching header, operation badge near top, central scene visual, and a pair of bottom-row insets ("drag mapping" or "input mapping" on the left, "key idea" on the right). Reusable for any "show me how the gesture moves" subject. ID prefixes used: `op` (orbit), `pn` (pan), `zm` (zoom).

**Decision tree (#14).** Primary branches plus dashed side-note callouts for edge cases. Good alternative to a mermaid block when the workflow has 2 or 3 main paths plus escape hatches. Used as a richer companion to an existing mermaid in the same section.

**Reference card (#18).** Two-column grid modeled directly on `lesson_02_18_keyboard_shortcuts_reference.svg`. Six categories tested (The Big Three, Standard Views, Frame and Focus, Orbit by Keyboard, Camera View, Advanced). Reusable for any "essential shortcuts" summary. ID prefix `ns`.

**3D primitive with labels (#7).** Isometric cube with six labeled camera positions around it. Reusable for any "X has 6 sides, faces, views, or perspectives" topic. ID prefix `sv`.

**Keyboard layout with legend (#8).** Numpad-style key grid with color-coded keys plus a right-side legend explaining each color. Reusable for any hotkey-grouping diagram. ID prefix `np`.

**Comparison via parallel rails (#12, #13).** Authored as a pair, one with vanishing-point convergence, the other with equal-width parallels. Reusable for any "this vs that" perceptual comparison. ID prefixes `pd` and `or`.

**WASD plus mouse (#17).** Keyboard widget with directional arrows overlaid on WASD keys, plus a mouse sprite with yaw and pitch callouts. Reusable for any first-person navigation grammar. ID prefix `wf`.

## Brand palette (use exactly these hex; do not invent new)

- Blender brand: `#FF6B00`
- Course / structure: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external: `#4ADE80`
- Portfolio / outcome: `#F5C242`

## Standing rules (carry forward)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`
- No new em-dashes anywhere in new content; preserve pre-existing em-dashes verbatim
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md`
- One phase per chat is the ideal cadence for integration; one image per chat is the ideal cadence for SVG production
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Per-chat archive discipline for intermediate captures (PNG work only; SVGs have no intermediates)
- Always `tool_search` for deferred tools rather than inheriting "tool X is unavailable" assumptions from a compaction summary

## Next

Lesson 04 (`lesson_04_basic_object_manipulation.html`, currently 106.0 KB). Image requirements doc exists at `lesson_04_image_requirements.md`. Image production for Lesson 04 has not started.

Recommended kickoff: a planning chat that reads the requirements doc and the HTML, writes `lesson_04_integration_progress.md` modeled on `lesson_03_integration_progress.md`, decides the phase plan, and (if context budget allows) begins Phase 1 SVG production.
