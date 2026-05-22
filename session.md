# Session Resume Pointer

Single-block snapshot per `INTERRUPTION_RECOVERY.md` pillar 2.2. Overwrite-every-update semantics. First file to read in every new chat, before `status.md` and before any per-lesson progress doc.

---

## Chat / Date / Status

**Lesson 05 CLOSED, docs cleanup CLOSED, Lesson 06 PLANNING COMPLETE 2026-05-21; ready to start Lesson 06 Phase 1 PRODUCTION. Next chat: Lesson 06 Phase 1 PRODUCTION (10 images: SVG #8 plus PNGs #1, #2, #3, #4, #5, #6, #7, #9, #46 covering `#enter-edit-mode` + `#selection-modes` + `#proportional-editing` sections).** 2026-05-21. The docs cleanup plus Lesson 06 planning chat ran 4 work blocks. Block 1 (scope adjustment after Ray flagged that retroactive sweeps for Lessons 02-04 were out of scope): pivoted from the originally planned 3-lesson retroactive archive sweep to a leaner Style guide + Session.md rewrite + Lesson 06 planning sequence in the same chat. Block 2: revised `images/IMAGE_STYLE_GUIDE.md` from v3 (15,450 bytes, 7 locked decisions) to v4 (32,931 bytes, 13 locked decisions) folding in patterns matured across Lessons 03-05: overlay badge colorway split (positive green `#4ADE80` + `#0f1a14` text vs warning red `#E63946` + `#ffffff` text), em-dash discipline as a top-level section with middle-dot guidance, inline-stacked PNG annotation overlay pattern as a new component snippet (wrapper div + overlay SVG with `inset: 0` and `preserveAspectRatio="xMidYMid meet"` plus per-callout highlight + leader + marker + badge geometry plus the composite overlay variant for horizontally-divided composites with baked-in 2px `#FF6B00` dividers), 800x680 dense-content viewBox variant for content density (Lesson 05 #4, #15, #23 precedents), HTML integration patterns section covering plain figure wrapper plus default vs deeper-indent depth plus SVG inlining checklist (color attribute strip, re-indent, multi-line attribute collapse, comment preservation policy) plus edit cadence, footer tip callout Variant B (4px left rail, the matured form) alongside grandfathered Variant A (tinted fill), Subhead row added to typography size hierarchy table with y=138 first-body-subhead position noted. Block 3: wrote new `lesson_06_integration_progress.md` (31,599 bytes, 268 lines, modeled on `lesson_05_integration_progress.md` post-archive-sweep shape) locking the Lesson 06 plan: scope option C (all 50 images, phase ordering supports stopping after Phase N if needed), SVG vs PNG split of 3 SVG (#8 proportional editing falloff types comparison with id prefix `pf`, #21 dissolve vs delete comparison with id prefix `dd`, #44 selection tools quick reference chart with id prefix `sr`) and 47 PNG with 12 PNG annotation overlay c-prefixes planned (`c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49`), Option L 6-phase layout following section boundaries with 10/10/8/6/8/8 image distribution (P1 `#enter-edit-mode` + `#selection-modes` + `#proportional-editing` 10 images, P2 `#loop-tools` + `#advanced-selection` 10 images, P3 `#inset-outset` + `#mesh-cleanup` 8 images, P4 `#extrude-operations` 6 images, P5 `#duplicate-array` + `#spin-screw` + `#knife-tool` 8 images, P6 `#subdivide` + `#bevel` 8 images), full 50-row placement table populated with all anchors and `not captured; not integrated` initial states. Block 4: rolled `status.md` via 3 sequential `Filesystem:edit_file` edits (dry-run-then-commit, size 42,224 → 42,802 bytes); Image Production and Integration row updated to include Lesson 06 planning state, Image Integration Status table row for "06 to 51" split into a Lesson 06 row (📋 Planning Complete, 50 images planned, 0 of 50 produced) plus a "07 to 51" row for the rest, Supporting Files list extended with `lesson_06_integration_progress.md`.

**Style guide v4 highlights for the next chat:** the bumped style guide is the authoritative reference for all Lesson 06 SVG authoring and HTML integration. Read `images/IMAGE_STYLE_GUIDE.md` before authoring SVGs #8, #21, or #44; key new patterns are the overlay badge colorway split, the inline-stacked PNG annotation overlay component snippet, the 800x680 dense-content variant, and the SVG inlining checklist. Most existing locked rules (palette, header geometry, accessibility, file conventions) carry through unchanged from v3 plus tighter codification.

**Retroactive archive sweep for Lessons 02-04 EXPLICITLY OUT OF SCOPE per Ray's direction this chat.** Do not touch finished lesson docs. Forward-only work from here.

---

## Current step (next chat)

**Recommended next step: Lesson 06 Phase 1 PRODUCTION chat.** Read this `session.md`, then `lesson_06_integration_progress.md` (the locked plan), then the relevant slice of `lesson_06_image_requirements.md` (entries #1, #2, #3, #4, #5, #6, #7, #8, #9, #46 for Phase 1). Then propose detailed PRODUCTION specs for the 10 Phase 1 images for Ray's approval before generating anything.

**Sub-chat split recommendation per the locked plan:** Phase 1 with 10 images will likely need 2-3 production sub-chats. Suggested split: sub-chat A handles #4, #5, #6 (selection mode trio: BlenderMCP single-pose captures with bmesh selection setup; same cube reused across three captures), sub-chat B handles #1, #2, #3 (UI-state PNGs requiring side-by-side mode comparison and annotation prep), sub-chat C handles #7, #8, #9, #46 (proportional editing: 1 SVG plus 1 single-pose PNG plus 1 multi-panel composite plus 1 menu capture). Adjust split based on actual time spent in each sub-chat. Warn before context tightens rather than letting auto-compaction happen.

**Phase 1 PRODUCTION close criterion:** all 10 Phase 1 images on disk in `images/`, verified via `Filesystem:get_file_info`, Placement table rows updated to `produced; not integrated` or `captured; not integrated`, Available section populated with file sizes and dimensions, ID prefix registry populated with the 3 entries used in Phase 1 (`pf` for #8 plus PNG overlay c-prefixes for whichever Phase 1 PNGs get them: planned `c2`, `c3`, `c46`).

**After Phase 1 PRODUCTION:** Phase 1 INTEGRATION chat (or sub-chats) inlining the 10 Phase 1 images into `lesson_06_edit_mode_essentials.html`. Then Phase 2 PRODUCTION, Phase 2 INTEGRATION, etc., through Phase 6 INTEGRATION close-out. Then Lesson 06 close-out chat for handoff doc + archive sweep + status roll.

**Alternative next steps if Ray wants something other than Phase 1 PRODUCTION:** retroactive Lesson 05 browser QA pass (closes the long-deferred QA debt for all 30 Lesson 05 figures; could bundle with Lesson 02-04 deferred QA); non-Blender-course work (the planning chat closes this thread cleanly so any other project can pick up next).

---

## Process expectations (carry forward; all locked rules; see `images/IMAGE_STYLE_GUIDE.md` v4 and `lesson_06_integration_progress.md` for full discussion)

**Path discipline:**
- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`

**File operations:**
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`
- Tools are deferred; call `tool_search` before invoking; do not inherit "tool X is unavailable" assumptions from a compaction summary
- `Filesystem:copy_file_user_to_claude` for one-way copy from user filesystem to Claude's container; useful for bash-grep section mapping on large docs before edit work

**Em-dash discipline (style guide v4, locked decision 9):**
- No new em-dashes anywhere in new content (figcaptions, alt text, status blocks, markdown notes, handoff docs, archive doc headers, pointer blocks, SVG label / heading / subhead / pill / footer / takeaway text, overlay badge text, overlay title / desc text, style-guide prose)
- Middle-dot (`·`, U+00B7) for dash-style separation in SVG labels per the locked precedents
- Pre-existing em-dashes in source content preserved verbatim through edits
- Quoting pre-existing em-dashes inside backtick code spans in a status bullet is OK
- Structural em-dash after a date in Status bullets (the date-then-separator-then-description pattern) is grandfathered as a list-item separator, not new prose

**Inline image pattern (locked from Phase 1 Lesson 01, confirmed across all subsequent phases):**
- Plain `<figure>` / `<figcaption>` wrapper, no class
- PNGs: `<img loading="lazy">` with descriptive alt text. Figure at col 16, img and figcaption at col 20 (default depth)
- Inline SVGs: figure at col 16, svg root at col 20, svg children at col 24, deeper nesting at 28/32, figcaption at col 20; `color="#222"` stripped from inlined root `<svg>` (breaks dark mode); standalone `.svg` files in `images/` retain `color="#222"` for `<img>` fallback
- Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` collapsed onto single lines during inlining
- Decorative ASCII-divider author comments pruned during inlining; short structural comments kept
- Deeper-indent variant (figure col 20, contents at col 24/28/32, figcaption col 24, figure close col 20) for figures placed inside cards that open at col 16
- 2-to-3-line `oldText` anchors are the default for unique insertion points; extend to 4-8 lines when needed

**PNG annotation overlay pattern (style guide v4 component snippet, confirmed Phases 3-6 Lesson 05 INTEGRATION):**
- Wrapper div `position: relative; display: inline-block; max-width: 100%`
- Overlay SVG viewBox matches PNG pixel dimensions
- Overlay SVG style `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none` plus `preserveAspectRatio="xMidYMid meet"`
- Img inline style `display: block; max-width: 100%; height: auto; margin: 0` to override global img margin
- No baked-in callouts on PNGs going forward
- Overlay ids namespaced per PNG with a `c{N}-*` prefix
- Highlight shape (ellipse or circle) fill `none`, stroke matches colorway, width 4
- Leader line stroke matching colorway, stroke-width 3, stroke-linecap `round`
- Marker circle r=6 at badge-side end of leader (7 px from badge edge per c28 convention) when a highlight is present; at target-side end per c11 convention when there is no separate highlight
- Badge rect rx=6, fill `#4ADE80` (positive) or `#E63946` (warning); text font-family `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, font-size 22, font-weight 700, text-anchor middle, fill `#0f1a14` on green or `#ffffff` on red
- Composite-overlay variant for horizontally-divided composite PNGs with baked-in 2px `#FF6B00` vertical dividers: no highlight ellipses, no leader lines, just one centered badge per panel near the bottom edge

**Overlay badge colorway split (style guide v4 locked decision 8):**
- Positive labels: `#4ADE80` green badge with `#0f1a14` dark text
- Warning labels: `#E63946` red badge with `#ffffff` white text
- Pick from the label's semantic role; mixed colorways on a single PNG are expected

**BlenderMCP capture (locked, confirmed Phases 2-6 Lesson 05):**
- Lowercase `blender:execute_blender_code` (uppercase hangs)
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere (kills BlenderMCP addon mid-execution; recovery requires restarting Blender)
- Clean Blender state manually instead (`bpy.data.objects.remove(obj, do_unlink=True)`, etc.)
- Render engine fallback path: try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum error, fall back to `BLENDER_EEVEE`
- Pie menus and other transient UI Blender's render API cannot reach: manual Win+Shift+S capture into `images/` directly
- OpenGL viewport render path: find the first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Re-find the VIEW_3D area and region in each `blender:execute_blender_code` block since Python local variables do not persist
- UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` works cleanly from Blender Python on Windows
- Default user-perspective view rotation: `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()`. View distance scales with subject size
- Pillow 12.2.0 installed at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`; survives Blender restarts; used for multi-panel composites

**Blender 5.1.1 op-name discoveries (locked through Lesson 05 Phase 6):**
- `bpy.ops.mesh.inset_faces` does NOT exist; use `bpy.ops.mesh.inset` instead
- `bpy.ops.mesh.delete(type='FACES')` (plural) does NOT exist; valid enum values are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`; use `type='FACE'` (singular)
- `bpy.ops.mesh.select_non_manifold()` works in 5.1.1 without bmesh fallback
- Prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics
- `bmesh.ops.subdivide_edges` with cuts=N produces ONLY equal-spaced cuts; for unequal-spaced cuts, use `bmesh.ops.bisect_plane` per cut plane

**Brand palette (style guide v4 current):**
- Blender brand / SVG accent rail: `#FF6B00`
- Course / structure / Z-axis blue: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / Y-axis green / Normals / positive overlay badges: `#4ADE80`
- Portfolio / outcome / Caution / warning glyph: `#F5C242`
- X-axis red / Warning / negative glyph / warning overlay badges: `#E63946`
- Badge text dark on green: `#0f1a14`; badge text light on red: `#ffffff`

**SVG house style (style guide v4):**
- Default viewBox `0 0 800 560`; dense-content variant `0 0 800 680`
- Top 3px `#FF6B00` accent rail at (0, 0)
- System-ui font stack
- `color="#222"` retained on standalone files for `<img>` fallback; strip on inline
- Heading at y=56 size 24 weight 700; subtitle at y=84 size 14 opacity 0.65; divider at y=108
- First body subhead at y=138 size 18 weight 600
- Footer tip card y=506-540 on 560 canvas (y=641-675 on 680 variant); Variant B (4px left rail) is matured default; Variant A (tinted fill) grandfathered
- Per-file id prefix prevents collisions across multiple inline SVGs on one HTML page

**Documentation rhythm:**
- Per-lesson `lesson_NN_integration_progress.md` is the running narrative log (live; lean after archive sweep at lesson close)
- Per-lesson `lesson_NN_integration_progress_archive.md` is the close-out archive of locked PRODUCTION specs and INTEGRATION plans (per-lesson archive pattern locked 2026-05-21; created at close-out chat)
- Per-lesson `lesson_NN_completion_handoff.md` is the close-out summary written at lesson close
- `status.md` is the project-wide snapshot, rolled at every lesson close
- `status_archive.md` is the project-wide archive (parallel pattern; predates the per-lesson archive)
- This `session.md` is the resume pointer, overwritten every milestone

**Cadence:**
- One production chat plus one integration chat per phase by default
- Sub-chats expected for any phase of 6+ images (Lesson 05 precedent: Phase 5 INTEGRATION 2 sub-chats with 5 images, Phase 6 INTEGRATION 1 plan-lock chat plus 3 execution sub-chats with 6 images)
- Lesson 06 Phase 1 and Phase 2 at 10 images each are larger than any Lesson 05 phase; expect 3-5 sub-chats per
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit

**Placement-table state legend:**
- `not captured; not integrated` (or `not produced; not integrated`)
- `produced; not integrated` (or `captured; not integrated`)
- `produced; handoff_written; not integrated`
- `integrated`

**Progress-doc archive sweep pattern (locked 2026-05-21 for per-lesson use; applied to Lesson 05 only so far; retroactive sweeps for Lessons 02-04 explicitly out of scope per Ray's direction):**
- At lesson close, the `lesson_NN_integration_progress.md` plan sections (locked PRODUCTION specs, locked INTEGRATION plans) move to a new `lesson_NN_integration_progress_archive.md` companion file
- Live progress doc keeps: header, Status section chronological log, Locked rules, Placement table, Phase plan summary table, Available/Missing sections, ID prefix registry, SVG design notes, PNG capture notes, Next chat pointer
- Archive doc holds: locked PRODUCTION specs and locked INTEGRATION plans for every phase, verbatim, prefixed with a short migration header
- Live doc gets a short pointer block right after the Status section noting that the plan sections moved to the archive at the given date
- Live doc typically drops to 40-55% of its end-of-lesson size; archive holds the bulk
- Pattern mirrors the existing `status.md` / `status_archive.md` split at the project level

---

## Specifics (per next-chat plan)

If next chat is **Lesson 06 Phase 1 PRODUCTION** (recommended default):

- Project root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Source docs to consult (in order): this `session.md`, then `lesson_06_integration_progress.md` (the locked plan; placement table, phase plan, SVG design notes initial sketches, PNG capture notes), then `lesson_06_image_requirements.md` (specific entries #1, #2, #3, #4, #5, #6, #7, #8, #9, #46 for Phase 1), then `images/IMAGE_STYLE_GUIDE.md` v4 (especially the PNG annotation overlay component snippet for #2, #3, #46, and the SVG house style for #8)
- Phase 1 images (10):
  - #1 `lesson_06_01_object_vs_edit_mode_comparison.png` (composite screenshot 2-panel side-by-side; section `#enter-edit-mode`; planned anchor "After Object Mode vs Edit Mode table"; no overlay)
  - #2 `lesson_06_02_edit_mode_visual_indicators.png` (annotated screenshot; section `#enter-edit-mode`; planned anchor "After Visual Differences in Edit Mode list"; planned overlay `c2-*` with multi-callout for orange vertex dots, edge overlay, mode indicator, mesh menu, selection mode icons)
  - #3 `lesson_06_03_selection_mode_icons.png` (closeup screenshot with annotation; section `#selection-modes`; planned anchor "After The Selection Mode Trio introduction"; planned overlay `c3-*` with three labels for vertex / edge / face mode icons)
  - #4 `lesson_06_04_vertex_selection_example.png` (viewport screenshot; section `#selection-modes`; planned anchor "Within Vertex Select Mode card"; no overlay; cube in Edit Mode with vertex select active, 3-4 vertices selected)
  - #5 `lesson_06_05_edge_selection_example.png` (viewport screenshot; section `#selection-modes`; planned anchor "Within Edge Select Mode card"; no overlay; cube in Edit Mode with edge select active, 3-4 edges selected)
  - #6 `lesson_06_06_face_selection_example.png` (viewport screenshot; section `#selection-modes`; planned anchor "Within Face Select Mode card"; no overlay; cube in Edit Mode with face select active, 2 faces selected)
  - #7 `lesson_06_07_proportional_editing_circle.png` (viewport screenshot; section `#proportional-editing`; planned anchor "After Activating Proportional Editing card"; no overlay; subdivided plane or sphere with proportional editing active, influence circle visible)
  - #8 `lesson_06_08_proportional_falloff_comparison.svg` (SVG, id prefix `pf`; section `#proportional-editing`; planned anchor "After Falloff Types table"; 6-panel 2x3 comparison grid showing Smooth / Sharp / Linear / Constant / Sphere / Random falloff curves; likely 800x560)
  - #9 `lesson_06_09_proportional_hill_creation.png` (composite screenshot 3-panel progression; section `#proportional-editing`; planned anchor "Within Practice Exercise: Creating a Hill"; no overlay; PIL composite of 3 sequential Blender renders showing flat plane to vertex selected to hill formed)
  - #46 `lesson_06_46_proportional_falloff_menu.png` (manual Win+Shift+S capture of Shift+O Proportional Falloff menu; section `#proportional-editing`; planned anchor "After Falloff Types mermaid diagram"; planned overlay `c46-*` with single menu-region highlight)
- Outputs to produce this chat (or split across Phase 1 sub-chats A/B/C):
  - 9 PNG files in `images/` directory (sizes vary; viewport renders ~500-700 KB each; menu captures ~100-200 KB)
  - 1 SVG file `lesson_06_08_proportional_falloff_comparison.svg` in `images/` directory (likely 8-12 KB)
  - `lesson_06_integration_progress.md` updates: Placement table state flips for each of the 10 images (from `not captured; not integrated` to `captured; not integrated` for PNGs, `not produced; not integrated` to `produced; not integrated` for #8), Available section populated with file sizes and dimensions, ID prefix registry populated for #8 plus any c-prefix overlays planned (`c2`, `c3`, `c46` if those PNGs are captured this phase), Status section updated with chronological log entries per sub-chat or per phase close, Phase plan Phase 1 row updated to reflect actual produced/captured count
- Suggested sub-chat split per the locked plan: sub-chat A (#4, #5, #6 selection mode trio: same cube reused across three BlenderMCP captures, bmesh selection setup for vertices then edges then faces), sub-chat B (#1, #2, #3 UI-state PNGs: side-by-side mode comparison and annotation prep), sub-chat C (#7, #8, #9, #46 proportional editing: 1 SVG plus 1 single-pose PNG plus 1 multi-panel composite plus 1 menu capture). Adjust split based on actual time spent
- Locked rules carry forward unchanged (see Process expectations section above): WSL `\\wsl$\Ubuntu\` paths only, write_file for new files, no `read_factory_settings` calls anywhere, BLENDER_EEVEE_NEXT with EEVEE fallback, lowercase `blender:execute_blender_code`, manual scene cleanup per locked rule, `tool_search` before deferred tools, no new em-dashes in any new content (figcaptions, alt text, SVG text, overlay text)
- After Phase 1 PRODUCTION close: Phase 1 INTEGRATION chat (or sub-chats) inlining the 10 Phase 1 images into `lesson_06_edit_mode_essentials.html`. Then this `session.md` rewrite pointing at Phase 1 INTEGRATION or Phase 2 PRODUCTION as the next chat
- Budget warning: Phase 1 with 10 images is larger than any Lesson 05 phase. Expect 2-3 production sub-chats. Warn Ray after the first sub-chat completes if context is tightening; offer to close the sub-chat and start a fresh one rather than risk auto-compaction

If next chat is **non-Blender-course work** (alternative; the planning chat closes this thread cleanly):

- Pick up wherever Ray directs. The Lesson 06 plan in `lesson_06_integration_progress.md` is locked and durable; Phase 1 PRODUCTION can start any future chat without losing context
- If non-Blender-course work runs for multiple chats, leave this `session.md` alone (it'll continue pointing at Lesson 06 Phase 1 PRODUCTION whenever Ray returns to the Blender course)

---
