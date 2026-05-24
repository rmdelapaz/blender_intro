# Lesson 06 Image Integration Progress

**Lesson:** `lesson_06_edit_mode_essentials.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Image directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
**Started:** 2026-05-21 (planning chat)
**Current state:** Phase 1 PRODUCTION CLOSED 2026-05-22 (all 10 images on disk; sub-chats A, B, C complete). 6-phase plan locked (Option L: 10/10/8/6/8/8 across the 13 section IDs). 50 images total: 3 SVG (#8, #21, #44), 47 PNG. 10 of 50 produced (#1, #2, #3, #4, #5, #6, #7, #8, #9, #46), 0 of 50 integrated. Next: Phase 1 INTEGRATION.

This file is the running narrative log for Lesson 06 image production and integration. Modeled on `lesson_05_integration_progress.md` (post-archive-sweep shape locked 2026-05-21). Updates appended at milestone boundaries per `INTERRUPTION_RECOVERY.md` pillar 2.1 (save-first).

---

## Status

- 2026-05-21 — Planning chat. Read `lesson_06_image_requirements.md` (60.5 KB, 50 images specified with AI prompts, placement suggestions, and three-tier priority ranking: ~11 High, ~13 Medium, ~26 Lower). Read head of `lesson_06_edit_mode_essentials.html` (139,576 bytes, 2,861 lines) to confirm section IDs match the requirements doc; all 13 image-bearing section IDs present and accounted for (`#enter-edit-mode`, `#selection-modes`, `#proportional-editing`, `#loop-tools`, `#advanced-selection`, `#inset-outset`, `#mesh-cleanup`, `#extrude-operations`, `#duplicate-array`, `#spin-screw`, `#knife-tool`, `#subdivide`, `#bevel`; plus `#selection-tools` as a sub-anchor in advanced-selection and `#lesson-summary` for the closer, neither of which the requirements doc places images in). Locked scope: Option C (all 50 images, phase ordering set to allow stopping after Phase N if budget pressure builds). Locked SVG vs PNG split: 3 SVGs (#8 proportional editing falloff types comparison, #21 dissolve vs delete comparison, #44 selection tools quick reference chart), 47 PNGs (all viewport screenshots, UI captures, composite multi-panel screenshots, before/after pairs). Type-flip discretion preserved during production: if a PNG turns out to be a poor screenshot candidate (Lesson 05 #19 precedent), flip to SVG at the time. Locked phase plan: Option L 6-phase layout following section boundaries, 10/10/8/6/8/8 image distribution. Rationale for Option L over alternatives K (5-phase 10/10/8/14/8) and M (4-phase 14/14/14/8) per Lesson 05 multi-sub-chat cadence data: compaction risk is per-chat not per-phase; bigger phases force bigger plan-lock chats AND bigger integration chats, both of which raise per-chat risk; Option L keeps the biggest phase at 10 images (vs 14 in K and M) and the average phase at 8.3 images which scales naturally from Lesson 05's 30-image 6-phase average of 5 per phase. Per-phase High/Medium/Lower priority breakdown: P1 5H/3M/2L, P2 1H/4M/5L, P3 1H/3M/4L, P4 1H/2M/3L, P5 0H/1M/7L, P6 2H/2M/4L (covers all 11 High plus 13 Medium across 6 phases; cumulative priority coverage builds toward complete by Phase 6). Wrote this `lesson_06_integration_progress.md`. Image production has not yet started.
- 2026-05-21 — Phase 1 PRODUCTION sub-chat A. Rendered three single-pose Edit Mode selection captures via BlenderMCP OpenGL viewport render path: #4 vertex select (3 top vertices selected on default cube, 779,498 bytes), #5 edge select (3-edge L-shape around front-top-right corner, 774,226 bytes), #6 face select (top face plus adjacent visible side face, 776,447 bytes). All three at 1280x720, EEVEE engine (EEVEE_NEXT not available, fallback engaged per locked rule). Same `L06_Cube` reused across all three renders with `mesh_select_mode` toggled per capture. Scene cleanup tweaks applied: 3D cursor hidden, world axes hidden, object origins hidden, outline-selected hidden, theme vertex_size bumped to 5, edge_width bumped to 2; grid floor kept for spatial context. View rotation per locked default `Euler((63.6°, 0, -46.7°))`, view_distance 3.5 (closer than the canonical 5.0 to make vertex dots readable). #4 needed one re-render to drop the origin dot and re-tighten the view; #5 and #6 came clean on first pass. Sub-chat A complete; sub-chats B (#1, #2, #3) and C (#7, #8, #9, #46) pending.
- 2026-05-22 — Phase 1 PRODUCTION sub-chat B. Captured three UI-chrome PNGs requiring Blender window chrome. #1 `lesson_06_01_object_vs_edit_mode_comparison.png` (1922x720, 346,439 bytes, no overlay): PIL horizontal composite of two manual Win+Shift+S snips of the Blender window in Object Mode then Edit Mode, both showing the same L06_Cube with mode dropdown visible; left panel cropped from 1408x1071 to 1408x1056, right panel cropped from 1566x1044 to 1392x1044, both resized to 960x720, joined with 2px `#FF6B00` divider. Object Mode panel: cube selected with origin dot and orange outline. Edit Mode panel: vertex select, 3 top verts selected to give a clear orange-dots-on-structured-mesh look that contrasts with the Object Mode whole-object selection. #2 `lesson_06_02_edit_mode_visual_indicators.png` (1917x1057, 412,119 bytes, planned `c2` overlay at integration): manual Win+Shift+S of full Blender window in Edit Mode + vertex select with all six callout targets visible and unobstructed: orange vertex dots (top corners of cube), dark edges (bottom and back of cube), Edit Mode dropdown, Mesh menu (alongside View/Select/Add/Vertex/Edge/Face/UV), selection mode icon block, Edit-specific left toolbar. World axes turned back on for spatial orientation; outline-selected turned off so the silhouette glow does not compete with the black-edges callout target. #3 `lesson_06_03_selection_mode_icons.png` (720x80, 20,255 bytes, planned `c3` overlay at integration): captured via `bpy.ops.screen.screenshot_area` with `temp_override` (the 3D viewport area including its header) then Pillow-cropped to the header band, showing the 4-icon selection mode block with vertex select active (blue highlight) plus the Edit Mode dropdown and partial menu chrome for context; the 4th icon (face center / limit-to-visible toggle) sits outside the planned c3 triple-label set. c2-_ and c3-_ overlays deferred to INTEGRATION per spec; #1 carries no overlay. Workflow lessons logged: use bmesh directly for Edit-Mode selection counts since `cube.data.vertices[i].select` lags during interactive mesh editing; `bpy.ops.screen.screenshot_area` with `temp_override` is a viable BlenderMCP path for UI-chrome captures (header band, area chrome) and obviates manual Win+Shift+S except for transient UI like pie or popover menus that disappear when focus moves. Sub-chat B complete; sub-chat C (#7, #8, #9, #46) pending.
- ~2026-05-22 — Phase 1 PRODUCTION sub-chat B' + sub-chat C close (reconstructed 2026-05-23 from session.md). #2 recaptured script-driven (manual sub-chat B capture lost from disk before plan-lock); sub-chat C delivered #7, #8, #9, #46. 10 of 10 Phase 1 images on disk; Phase 1 PRODUCTION CLOSED.
- ~2026-05-22 — Phase 1 INTEGRATION CLOSED (reconstructed 2026-05-23 from session.md). 10 figures integrated into `#enter-edit-mode`, `#selection-modes`, `#proportional-editing`. c2 multi-callout commit hit the 4-minute MCP timeout boundary; locked MCP-hang recovery procedure established (`Filesystem:get_file_info` size check before retry).
- ~2026-05-22 — Phase 2 PRODUCTION CLOSED (reconstructed 2026-05-23 from session.md). 10 images on disk (#10, #11, #12, #13, #14, #15, #16, #44, #47, #48). LoopTools v4.7.7 Extensions Platform install path discovered (`bpy.ops.extensions.repo_sync_all()` then `bpy.ops.extensions.package_install(repo_index=0, pkg_id='looptools', enable_on_install=True)`).
- ~2026-05-22 to 2026-05-23 — Phase 2 INTEGRATION CLOSED (reconstructed 2026-05-23 from session.md). 10 figures integrated into `#loop-tools`, `#advanced-selection`, `#selection-tools`. Decorative-shape-only overlay variant introduced (c13 orange-vertex bbox, c14 centroid+max-radius, c15 concave-hull / RDP outline-trace) for tool-indicator overlays where the shape carries the message without a separate ellipse / leader / marker / badge.
- 2026-05-22 — Phase 3 PRODUCTION plan-lock (reconstructed 2026-05-23 from session.md). Phase 3 PRODUCTION plan section written into this doc; sub-chat A (6 BlenderMCP) + sub-chat B (1 manual + 1 SVG) split locked.
- 2026-05-23 — Phase 3 PRODUCTION CLOSED (reconstructed 2026-05-23 from session.md). Sub-chats A / B / C delivered 8 images (#17, #18, #19, #20, #21, #22, #23, #50) on disk. Sub-chat C #23 recapture established Face Orientation overlay recipe: theme `face_front` / `face_back` RGBA alpha check (default may be 0.0 in Blender 5.1.1 which silently suppresses the overlay tint; bump to >=0.4 before capture), `bpy.ops.screen.screenshot_area` includes overlay layers vs `bpy.ops.render.opengl` does not, chrome-aware Pillow crop (1572x900 raw -> 1280x720 cropped at CROP_X=72 / CROP_Y=88).
- 2026-05-23 — Phase 3 INTEGRATION plan-lock (paused + RESUMED) (reconstructed 2026-05-23 from session.md). Phase 3 INTEGRATION plan section written into this doc; sub-chat 1 (3 inset figures, no overlays, no SVG) + sub-chat 2 (5 mesh-cleanup figures including c20 / c23 PNG overlays and #21 inline SVG with `dd` prefix) split locked; c20 overlay coords (cx=210 cy=282 rx=200 ry=22, leader (383, 271) -> (560, 110), badge `BY DISTANCE` positive-green at (460, 57, 200, 46)) and c23 overlay coords (cx=923 cy=309 rx=30 ry=22, leader (944, 293) -> (1140, 140), badge `FLIPPED` warning-red at (1065, 87, 150, 46)) locked.
- 2026-05-23 — Phase 3 INTEGRATION sub-chat 1 CLOSED (reconstructed 2026-05-23 from session.md). 3 inset figures (#17, #18, #19) integrated into `#inset-outset`. Bottom-up execution order (#19 -> #18 -> #17) per locked rule.
- 2026-05-23 — Phase 3 INTEGRATION sub-chat 2 CLOSED, resumed close-out (reconstructed 2026-05-23 from session.md). 5 mesh-cleanup figures (#20, #21, #22, #23, #50) integrated into `#mesh-cleanup`. HTML net delta 185,725 -> 203,063 bytes (+17,338); per-figure block sizes #20 2,196 / #21 10,773 (heaviest, inline SVG) / #22 1,043 / #23 2,248 / #50 1,073. First warning-red PNG overlay c23 `FLIPPED` introduced. Phase 3 INTEGRATION COMPLETE; 28 of 50 lesson images integrated overall.
- 2026-05-23 — Phase 4 PRODUCTION plan-lock. Detected progress-doc size mismatch vs `session.md` narrative (session claimed 230,526 bytes, file actually 90,483 bytes); HTML cross-check at 203,063 bytes corroborated session.md on HTML side. Ray confirmed manual deletion of Phase 1 INTEGRATION + Phase 2 PRODUCTION + Phase 2 INTEGRATION plan sections to `.bak`; 90 KB shape accepted as new baseline. Status history reconstructed from session.md narrative (9 bullets above tagged). Read `#extrude-operations` slice (lines 2103-2337 of `lesson_06_edit_mode_essentials.html`, 0/4/8-space depth confirmed) and `lesson_06_image_requirements.md` entries #24 / #25 / #26 / #27 / #45 / #49. New `Phase 4 PRODUCTION plan` section written between `Phase 3 INTEGRATION plan` and `Locked rules`. Sub-chat A (4 BlenderMCP: #24 / #25 / #26 / #27) + sub-chat B (2 manual Win+Shift+S: #45 / #49) split locked. ID prefix registry updated with `c45` (positive-green `ALONG Z`) and `c49` (positive-green `ALONG NORMALS`). Bottom-of-doc Next chat repointed at Phase 4 PRODUCTION sub-chat A execution; `session.md` rewritten to point at same.
- 2026-05-23 — Phase 4 PRODUCTION sub-chat A executed. Step 0 fresh scene reset removed L06_NormalsMonkey (L06_FillCube not present); default `Cube` also removed pre-build to clear the origin for #24. 4 BlenderMCP captures landed on disk: #24 `lesson_06_24_extrude_operation_sequence.png` (3844x720, 745,246 bytes, 3-panel composite, cube `L06_ExtrudeCube`, p1 top face selected + p2 `extrude_region_move` z=0.4 + p3 additional `transform.translate` z=+0.8 for total +1.2m); #25 `lesson_06_25_extrude_normals_vs_regular.png` (2562x720, 545,932 bytes, 2-panel composite, UVSphere `L06_ExtrudeSphere` 32 seg 16 rings, 8 contiguous equatorial faces on +X side selected via bmesh `|z|<0.15` filter then angular sort by abs(atan2(y,x)), p1 `extrude_region_move` global X=0.6 + p2 recreate path + `extrude_region_shrink_fatten` value=0.4 along normals); #26 `lesson_06_26_extrude_individual_faces.png` (1280x720, 680,306 bytes, single-pose, subdivided Plane `L06_ExtrudeGrid` 4x4 quad grid 16 faces, `extrude_faces_indiv()` then `transform.translate` z=0.5); #27 `lesson_06_27_extrude_scale_technique.png` (5126x720, 788,389 bytes, 4-panel composite, cube `L06_ExtrudeTower`, p1 base + p2 `extrude_region_move` z=0.8 + p3 `transform.resize` (0.7, 0.7, 1.0) + p4 second extrude+resize iteration, view_distance 6.0 per locked spec for tower height fit). All EEVEE_NEXT -> EEVEE fallback engaged (locked rule), SOLID shading, user-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, theme vertex_size=5 edge_width=2, overlays axes ON floor ON cursor OFF origins OFF outline_selected OFF. **Op-name verification results (all three locked Phase 4 op-names confirmed in 5.1.1 first try, no fallback paths needed):** `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(x,y,z)})` works (verified #24 / #27); `bpy.ops.mesh.extrude_region_shrink_fatten(TRANSFORM_OT_shrink_fatten={"value":0.4})` works (verified #25 panel 2); `bpy.ops.mesh.extrude_faces_indiv()` with no transform arg followed by separate `bpy.ops.transform.translate(value=(0,0,0.5))` works (verified #26). All composites via Pillow 12.2.0 with 2px `#FF6B00` vertical dividers, temp files removed via `os.remove` after composite save. Placement table rows #24 / #25 / #26 / #27 flipped to `captured; not integrated`. Phase 4 PRODUCTION sub-chat A close criterion met (4 of 6 Phase 4 images on disk). 32 of 50 lesson images produced overall; 28 of 50 integrated (count unchanged from Phase 3 INTEGRATION close since sub-chat A is PRODUCTION only). Sub-chat B pending: 2 manual Win+Shift+S captures by Ray (#45 transform constraint indicators with G+Z live move, #49 Alt+E extrude popover menu).
- 2026-05-23 — Phase 4 PRODUCTION sub-chat B executed (close-out chat resuming from sub-chat A handoff). Ray captured both remaining Phase 4 PNGs manually via Win+Shift+S. #45 `lesson_06_45_transform_constraint_indicators.png` initially captured as a full-screen 4K snip (3838x2160, 1,238,904 bytes initial) showing the Blender app window in Edit Mode on `L06_ExtrudeTower` (carried over from sub-chat A #27) with G+Z live move active, the blue Z-axis constraint line running vertically through the cube, and the floating coord readout `D: 0.7893 m (0.7893 m) along global Z` visible at top-center of the viewport; cropped in place to 1920x1080 viewport-only via Pillow 12.2.0 executed through `blender:execute_blender_code` (crop bounds x=115..3155, y=170..1880 to remove menubar / workspace tabs / Edit Mode header / left toolbar / right sidebar / timeline / status bar, then `Image.LANCZOS` resize from 3040x1710 to 1920x1080 for 16:9 final ratio; final size 499,352 bytes). #49 `lesson_06_49_extrude_menu_alt_e.png` captured as a tight popover crop (922x396, 80,526 bytes, no further cropping needed) showing the Alt+E Extrude special popover in Edit Mode with `Extrude Faces Along Normals` row hovered with the standard Blender hover highlight; bonus tooltip `Extrude region together along local normals.` also captured below the hovered row (welcome but non-blocking). **Menu-item-count discrepancy noted for #49** (locked Phase 4 plan-lock spec said `all 5 options`; actual Blender 5.1.1 shows 6 items): Extrude Faces, Extrude Faces Along Normals, Extrude Individual Faces, **Extrude Manifold**, Extrude Repeat, Spin. The `Extrude Manifold` option is an addition in Blender 5.x not present in the locked 5-option count; non-blocking, c49 `ALONG NORMALS` overlay target is still the highlighted Along Normals row; fold the 6-item observation into the style-guide v4 addenda pending list at lesson close. Placement table rows #45 and #49 flipped to `captured; not integrated`. Phase 4 PRODUCTION sub-chat B close criterion met. **Phase 4 PRODUCTION CLOSED** with all 6 Phase 4 images on disk (#24 745,246 / #25 545,932 / #26 680,306 / #27 788,389 / #45 499,352 / #49 80,526 bytes). 34 of 50 lesson images produced overall; 28 of 50 integrated (count unchanged from Phase 3 INTEGRATION close since Phase 4 PRODUCTION is PRODUCTION only). **New precedent for manual-capture post-processing:** Pillow can rewrite UNC-path PNGs in place via `blender:execute_blender_code` when a user-captured Win+Shift+S PNG comes in larger than ideal; useful pattern for any future oversized manual capture (verify size before, run crop+resize, verify size after). Sub-chat B work was light-touch (no BlenderMCP scene captures; 2 manual captures by Ray + 1 BlenderMCP Pillow crop + 2 placement-table flips + this Status bullet + a Next chat section rewrite + a `session.md` full rewrite). Next chat: Phase 4 INTEGRATION plan-lock.
- 2026-05-23 — Phase 4 INTEGRATION plan-lock. Read Phase 4 PRODUCTION close state (session.md narrative + 2026-05-23 sub-chat B Status bullet) and the `#extrude-operations` slice of `lesson_06_edit_mode_essentials.html` (lines 2103-2337 confirmed at 0/4/8-space depth) plus the 6 Phase 4 placement-table rows (all `captured; not integrated`). Verified absolute insertion-line positions for all 6 figures via document grep: #24 line 2132, #45 line 2193, #49 line 2204, #25 line 2219, #26 line 2250, #27 line 2282. **Corrected the bottom-up execution order from session.md proposal** (`#49 -> #27 -> #26 -> #25 -> #45 -> #24`) which was derived from reverse placement-table row order rather than from actual document positions; locked correct bottom-up order **`#27 -> #26 -> #25 -> #49 -> #45 -> #24`**. Drafted oldText anchors for all 6 figures: #26 extended to 6 lines because the bare `</tbody></table><blockquote>` pattern hit 4 occurrences across the full HTML; the other 5 anchors are 3-5 lines and verified unique via grep across the full HTML. Composed alt text and figcaptions for all 6 figures (zero new em-dashes, middle-dot separators throughout; pre-existing en-dashes in source HTML preserved verbatim through anchors). Ran Pillow blue-pixel band scan on #45: dominant central blue-pixel column at x=922 with 1043 pixels spanning full image height y=0..1079 (1px-wide constraint line), coord readout pill at x=778-1069 / y=15-25, cube top tip at y=189, right-side viewport gizmo at x=1803-1853. Locked c45 coords: ellipse cx=922 cy=110 rx=18 ry=70, straight horizontal leader (940,110) to (1173,110), marker r=6 at (1173,110), positive-green badge x=1180 y=87 w=150 h=46, text `ALONG Z` at (1255, 118). Ran Pillow brighter-pixel band scan on #49: hover-highlight band at y=138-178 (40 px tall, bg rgb 63 vs menu bg rgb 24), horizontal extent x=30-459, tooltip at y=215-260 / x=460-870. Locked c49 coords: ellipse cx=245 cy=158 rx=215 ry=24, diagonal leader (460,158) to (613,110), marker r=6 at (613,110), positive-green badge x=620 y=87 w=240 h=46, text `ALONG NORMALS` at (740, 118). Reviewed all 3 composite PNGs visually (#24 3-panel cube progression, #25 2-panel sphere regular vs along-normals, #27 4-panel taper tower): #24 and #27 ship plain because the progressions are self-evident left-to-right and no per-panel labels are needed, but #25's two outcomes read too similarly at thumbnail scale (both panels show a subtle +X-side bulge on the UV sphere at the captured camera angle), so **added new c25 composite-overlay** with positive-green panel badges (`REGULAR` panel 1 cx=640, `ALONG NORMALS` panel 2 cx=1922, both at y=644 w=280 h=46) per the locked composite-overlay variant from style guide v4. c25 added per the locked rule that overlays may be added at INTEGRATION if a PNG turns out to need a callout. ID prefix registry to be bumped from 12 PNG overlay ids planned to 13 with c25 inserted between c23 and c28. Locked sub-chat split as **1 sub-chat for all 6 figures** with **fallback split point at 4a (#27 + #26 + #25) / 4b (#49 + #45 + #24)** if the chat tightens mid-execution; estimated HTML byte delta +13-15 KB per the Phase 3 INTEGRATION sub-chat 2 precedent at +17 KB (Phase 4 has 6 figures vs sub-chat 2's 5 figures but no SVG inlining and simpler overlays). Wrote new `Phase 4 INTEGRATION plan` section (223 lines, projected +22,372 byte progress-doc delta from the dry-run; actual post-commit delta +22,443 bytes to 142,276 total file size; 71-byte rounding consistent with encoding margin). 34 of 50 lesson images produced overall, 28 of 50 integrated (counts unchanged from Phase 4 PRODUCTION close since plan-lock is plan-lock only). Bottom-of-doc Next chat repointed at Phase 4 INTEGRATION sub-chat 1 execution. `session.md` rewritten to point at same. Next chat: Phase 4 INTEGRATION sub-chat 1 (or 4a if Ray prefers the smaller split from the open).
- 2026-05-23 — Phase 4 INTEGRATION sub-chat 1 executed. All 6 Phase 4 figures integrated into `lesson_06_edit_mode_essentials.html` `#extrude-operations` section in the locked bottom-up order #27 -> #26 -> #25 -> #49 -> #45 -> #24. Per-figure HTML byte deltas: #27 +809, #26 +613, #25 +2,336 (c25 composite-overlay debut, largest in batch), #49 +2,218 (c49 ellipse + diagonal leader + ALONG NORMALS badge), #45 +2,103 (c45 ellipse + horizontal leader + ALONG Z badge), #24 +830. Total HTML net delta 203,063 -> 211,972 bytes (+8,909, comfortably under the +13-15 KB plan estimate; the 3-element c25 composite-overlay and the straight-line c45 leader landed lighter than the precedent-set Phase 3 sub-chat 2 +17 KB delta). All 6 dry-run-then-commit pairs landed first try, no MCP timeouts, no anchor mismatches; #26's 6-line extended anchor matched uniquely as planned (the bare `</tbody></table><blockquote>` 4-occurrence pattern was sidestepped). **New c25 composite-overlay variant successfully inlined** (2562x720 viewBox, two centered badges at y=644 w=280, `REGULAR` panel 1 cx=640 / `ALONG NORMALS` panel 2 cx=1922, both positive-green `#4ADE80` with `#0f1a14` dark text at letter-spacing 2; no ellipse, no leader, no marker per the composite-overlay variant from style guide v4); IDs `c25-panel1` and `c25-panel2` registered on the two rects, with `c25-labels-title` and `c25-labels-desc` for the composite description. ID slugs locked for c45 / c49 single-callout ellipses: `c45-alongz` and `c49-alongnormals`, matching the established `c{N}-{labeltext-lowercase}` precedent from c20-bydistance and c23-flipped. Title text follows the `{Label Title Case} callout` precedent (`Along Z callout`, `Along Normals callout`, plus `Regular vs Along Normals panel labels` for the composite). Alt text and figcaptions transferred verbatim from the locked plan, including the backticks around literal Blender UI strings in #45 alt (the `D: 0.7893 m (0.7893 m) along global Z` coord readout), #49 alt (the `Extrude region together along local normals.` tooltip), and #25 alt (the `REGULAR` / `ALONG NORMALS` panel labels); no em-dash drift, all new separators middle-dot. Placement table rows #24 / #25 / #26 / #27 / #45 / #49 all flipped to `integrated` in a single 6-edit batch (zero net byte delta on the progress doc since `captured; not integrated     ` and `integrated                   ` both pad to 29 chars in the table column). **Phase 4 INTEGRATION COMPLETE**; 34 of 50 lesson images integrated, matching the produced count for the first time since Phase 1 close. Cumulative Lesson 06 PNG overlay tally across the integrated set: 8 positive-green full-callouts (c2, c3, c10, c16, c20, c45, c46, c49) + 1 positive-green composite-overlay (c25 NEW) + 1 warning-red full-callout (c23) + 3 decorative-shape-only (c13, c14, c15) = 13 PNG overlays integrated. Bottom-of-doc Next chat repointed at Phase 5 PRODUCTION plan-lock. `session.md` rewritten to point at same. Next chat: Phase 5 PRODUCTION plan-lock.
- 2026-05-23 — Phase 5 PRODUCTION plan-lock. Read `session.md` (Phase 4 INTEGRATION sub-chat 1 CLOSED bullet; Phase 5 PRODUCTION plan-lock as next chat), the Status section of this doc through the 2026-05-23 Phase 4 INTEGRATION sub-chat 1 close bullet, the existing PNG capture notes block pre-estimating Phase 5 categories, the ID prefix registry showing the 13-PNG-overlay tally with c25 inserted, `lesson_06_image_requirements.md` entries #28 / #29 / #30 / #31 / #32 / #33 / #34 / #35 (brief specs + AI prompts + Production Priority bands), and the `#duplicate-array` / `#spin-screw` / `#knife-tool` slices of `lesson_06_edit_mode_essentials.html` (anchors confirmed at section openings lines 2400 / 2598 / 2803 respectively, 0/4/8 indentation depth matching prior phases). Wrote new `Phase 5 PRODUCTION plan` section between `Phase 4 INTEGRATION plan` and `Locked rules` (projected +28,506 char delta; actual post-commit file-size delta +28,583 bytes from 148,096 to 176,679; 77-byte margin consistent with multi-byte unicode encoding for `·` and `→` characters). **Locked 2 sub-chats** following Phase 3 / Phase 4 PRODUCTION precedent (scripted vs manual split): **sub-chat A** for all 5 BlenderMCP captures (#28 / #29 / #30 / #31 / #32) plus 2 cross-sub-chat temp files (#35 panels 1 + 3) with A1 / A2 fallback split point if context tightens; **sub-chat B** for all 3 manual Win+Shift+S captures (#33 / #34 / #35 panel 2) plus #34 within-sub-chat 3-panel Pillow composite plus #35 cross-sub-chat 3-panel Pillow composite combining sub-chat A's two temps with sub-chat B's manual panel 2. Pushed back on `session.md`'s "likely 1 PRODUCTION sub-chat" speculation; the locked default is 2 sub-chats per Phase 3 / Phase 4 precedent given the 5+3 scripted/manual split and the cross-sub-chat #35 composite handoff. Documented **NEW cross-sub-chat temp file pattern** as a first-in-Lesson-06 precedent (`_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png` persist between sub-chats; sub-chat B starts with `Filesystem:get_file_info` verify before Ray's panel 2 capture). ID prefix registry update minimal: no new PNG overlay ids added at PRODUCTION (`c28` and `c30` already reserved from initial planning; overlay coords deferred to Phase 5 INTEGRATION plan-lock per c2 / c3 / c25 multi-label precedent); no SVG ids added (Phase 5 has no SVGs per Option L). 34 of 50 lesson images produced overall, 34 of 50 integrated (counts unchanged from Phase 4 INTEGRATION close since plan-lock is plan-lock only). Op-name verification points logged for sub-chat A execution: `bpy.ops.mesh.spin` signature variance (#31 panel 2), `bpy.ops.mesh.knife_project` selection state setup (#35 panel 3), and Properties editor `area.spaces.active.context = 'MODIFIER'` enum value (#28). Bottom-of-doc Next chat repointed at Phase 5 PRODUCTION sub-chat A execution. `session.md` rewritten to point at same. Next chat: Phase 5 PRODUCTION sub-chat A (or A1 if Ray prefers the smaller split from the open).

## Phase 3 PRODUCTION plan

Locked 2026-05-22 during the Phase 3 PRODUCTION plan-lock chat. 8 image productions split across 2 execution sub-chats per Option B confirmation. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 3 fresh scene reset applies at sub-chat A start: delete all remaining `L06_*` objects from Phase 2 PRODUCTION state (L06_LoopCylinder, L06_BridgeMesh, L06_GridMesh, L06_RingStack) before building Phase 3 scenes. No Step 0 add-on check needed for Phase 3 (LoopTools v4.7.7 Extensions Platform install state persists from Phase 2 and is not material to Phase 3 since none of #17 through #50 use Loop Tools operations).

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 6 PNGs: #17 inset operation progression (3-panel composite via PIL with 2px `#FF6B00` dividers), #18 inset individual vs group (2-panel composite), #19 inset double technique (4-panel composite), #22 limited dissolve before/after (2-panel composite), #23 face orientation overlay (single-pose viewport render with Face Orientation overlay enabled), #50 fill operations comparison (3-panel composite). Fresh scene reset as step 0 (delete L06\_\* leftovers from Phase 2). Heaviest single capture: #19 4-panel composite at 5126x720.
- **Sub-chat B** · All non-scripted work. 1 PNG + 1 SVG: #20 merge by distance menu via manual Win+Shift+S, #21 dissolve vs delete SVG hand-authored at 800x560 with `dd` id prefix.

If sub-chat A tightens after 4-5 composites land, split into A1 (#17, #18, #19 inset triplet) and A2 (#22, #23, #50 mesh-cleanup triplet); the inset triplet shares cube/plane setup so it benefits from sharing a sub-chat. Sub-chat B should comfortably fit one chat since the SVG hand-author is bounded (Phase 1 #8 at 6,811 bytes and Phase 2 #44 at 6,615 bytes set the size envelope) and the #20 manual capture is small.

### Step 0 (sub-chat A only) · Fresh scene reset

Before any Phase 3 capture work, clean the scene of L06\_\* leftovers from Phase 2 PRODUCTION sub-chat A:

```python
import bpy
to_delete = ["L06_LoopCylinder", "L06_BridgeMesh", "L06_GridMesh", "L06_RingStack"]
for name in to_delete:
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)
        print(f"Removed: {name}")
    else:
        print(f"Not present: {name}")
```

Per-image scenes built fresh per the specs below; reuse a single cube across #17 / #18 / #19 / #50 by rebuilding/undoing between panel captures rather than maintaining 4 separate L06\_\* objects.

### Per-image specs · sub-chat A (6 BlenderMCP captures)

#### #17 · `lesson_06_17_inset_operation_progression.png`

- **Type:** PNG, 3-panel horizontal composite, 3844x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite with 2px `#FF6B00` vertical dividers → temp files removed via `os.remove`
- **Scene setup:** Add a Cube primitive (default 2m) named `L06_InsetCube`. Enter Edit Mode + face select. Select the top face only.
- **Panel 1:** Top face selected (orange highlight, dots at corners). Render to `_temp_lesson_06_17_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.inset(thickness=0.15)` (initial inset; top face now has an outer border of 4 new quads framing a smaller inner face still selected). Render to `_temp_lesson_06_17_p2.png` (1280x720).
- **Panel 3:** Apply a second `bpy.ops.mesh.inset(thickness=0.05)` step OR redo the same inset with thickness=0.3 to show a deeper inset progression with clear inner-face / border distinction. Render to `_temp_lesson_06_17_p3.png` (1280x720).
- **Render config:** EEVEE with EEVEE_NEXT fallback per locked rule, viewport SOLID shading, user-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 4.5, view_location near the cube top so the inset reads clearly. Theme: vertex_size=5, edge_width=2 (Phase 1 default). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Composite:** PIL 3844x720 (3 panels x 1280 + 2 x 2 px divider), output `lesson_06_17_inset_operation_progression.png`. Remove temps.

#### #18 · `lesson_06_18_inset_individual_vs_group.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite → temp files removed
- **Scene setup:** Reuse L06_InsetCube from #17 OR fresh state via undo/recreate. Replace with a Plane primitive (2m x 2m) named `L06_InsetGrid`. Enter Edit Mode, subdivide 3 cuts to create a 4x4 quad grid (16 faces). Set face select. Select all 16 faces.
- **Panel 1:** All 16 faces selected. Apply `bpy.ops.mesh.inset(thickness=0.08, use_individual=False)` (group inset; single continuous outer border framing all 16 faces as one unit; inner selection is a 14-face inner region). Render to `_temp_lesson_06_18_p1.png` (1280x720).
- **Panel 2:** Undo back to the all-16-selected state via `bpy.ops.ed.undo()` (or recreate L06_InsetGrid and re-select). Apply `bpy.ops.mesh.inset(thickness=0.08, use_individual=True)` (individual inset; each of the 16 faces gets its own independent border). Render to `_temp_lesson_06_18_p2.png` (1280x720).
- **Render config:** Same as #17, view_distance 3.0 (closer to make the grid distinction readable), looking down at the plane from the user-perspective rotation so the individual-vs-group topology difference reads at a glance.
- **Composite:** PIL 2562x720 (2 panels x 1280 + 1 x 2 px divider), output `lesson_06_18_inset_individual_vs_group.png`. Remove temps.

#### #19 · `lesson_06_19_inset_double_technique.png`

- **Type:** PNG, 4-panel horizontal composite, 5126x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite → temp files removed
- **Scene setup:** Delete L06_InsetGrid from #18. Add a Cube primitive (default 2m) named `L06_InsetPanel`. Enter Edit Mode + face select. Select the top face only.
- **Panel 1:** Original top face selected, no inset yet. Render to `_temp_lesson_06_19_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.inset(thickness=0.2)` (first inset creates outer border ring; inner face still selected). Render to `_temp_lesson_06_19_p2.png` (1280x720).
- **Panel 3:** Apply `bpy.ops.mesh.inset(thickness=0.1)` (second inset on the inner face creates the inner border ring; double-border effect with innermost face selected). Render to `_temp_lesson_06_19_p3.png` (1280x720).
- **Panel 4:** Apply `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0,0,-0.15)})` to extrude the innermost face downward, creating a recessed sci-fi panel detail. Render to `_temp_lesson_06_19_p4.png` (1280x720).
- **Render config:** Same as #17, view_distance 4.5 to keep all 4 panels framed consistently; user-perspective rotation lets the depth of the panel-4 recess read clearly against the surrounding double-bordered frame.
- **Composite:** PIL 5126x720 (4 panels x 1280 + 3 x 2 px divider), output `lesson_06_19_inset_double_technique.png`. Remove temps.

#### #22 · `lesson_06_22_limited_dissolve_before_after.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite → temp files removed
- **Scene setup:** Delete L06_InsetPanel from #19. Add a Cube primitive (default 2m) named `L06_DissolveCube`. Enter Edit Mode, subdivide 3 cuts on all 6 faces (4x4 grid per face = 96 quads total across the cube; via `bpy.ops.mesh.select_all(action='SELECT')` then `bpy.ops.mesh.subdivide(number_cuts=3)`). The cube now carries excessive coplanar interior edges on each face.
- **Panel 1:** Excessive-subdivision state, all verts selected to make the edge density visible. Viewport SOLID shading with wireframe overlay ON (`space.overlay.show_wireframes = True` and `space.overlay.wireframe_threshold = 1.0` to force all wires visible) so the edge density reads. Render to `_temp_lesson_06_22_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.dissolve_limited(angle_limit=radians(5))` to remove edges below 5° (all coplanar interior edges within each cube face dissolve; the 12 cube edges between faces at 90° survive). Cube reduces to its original 6-quad form maintaining shape. Render to `_temp_lesson_06_22_p2.png` (1280x720).
- **Render config:** Same as #17, view_distance 5.0, user-perspective rotation so both before and after read against the same 3/4 view. Wireframe overlay ON for both panels (the edge-count reduction is the entire point of the comparison).
- **Composite:** PIL 2562x720, output `lesson_06_22_limited_dissolve_before_after.png`. Remove temps.

#### #23 · `lesson_06_23_face_orientation_overlay.png`

- **Type:** PNG, single-pose, 1280x720, `c23` overlay planned at INTEGRATION
- **Capture path:** BlenderMCP OpenGL viewport render with Face Orientation overlay enabled
- **Scene setup:** Delete L06_DissolveCube from #22. Add a Suzanne (monkey head) primitive named `L06_NormalsMonkey` as a recognizable mesh with both flat and curved regions that the blue/red Face Orientation tint can play across distinctly. Enter Edit Mode + face select. Deliberately flip the normals on 2-3 contiguous faces to produce a visible red patch against the otherwise-blue mesh: select ~3 adjacent faces on the right ear or jaw via bmesh face-index list, then `bpy.ops.mesh.flip_normals()` on the selection. Return to Object Mode or stay in Edit Mode with no selection so the orange highlight does not compete with the blue/red overlay color.
- **Render config:** EEVEE with EEVEE_NEXT fallback, viewport SOLID shading, **Face Orientation overlay ENABLED** via `space.overlay.show_face_orientation = True` on the VIEW_3D space data. User-perspective view rotation, view_distance 4.5, view_location centered on the monkey head. Theme as Phase 1 default; axes ON, floor ON.
- **Output:** `lesson_06_23_face_orientation_overlay.png` (1280x720).
- **c23 overlay (deferred to INTEGRATION):** Single-region highlight on a flipped (red) face region. Warning-red colorway (`#E63946` badge with `#ffffff` text; the FLIPPED label is a cautionary indicator). Badge text locked as `FLIPPED` per the Lesson 05 face-orientation precedent. Final highlight target reviewable at Phase 3 INTEGRATION plan-lock once the captured PNG is in hand; alternative target (the Face Orientation overlay toggle in the viewport overlays dropdown) preserved as a fallback if the captured PNG composition favors highlighting the toggle over the flipped face. Locked geometry per the c46 / c10 / c16 precedent: ellipse highlight `fill="none" stroke="#E63946" stroke-width="4"`; leader line `stroke="#E63946" stroke-width="3" stroke-linecap="round"`; marker circle `r="6" fill="#E63946"` at badge-side end of leader 7 px from badge edge; badge rect `rx="6" fill="#E63946"` height 46; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#ffffff" letter-spacing="2"` reading `FLIPPED`. Exact pixel coords resolved at Phase 3 INTEGRATION plan-lock via Pillow scan (red-pixel band scan for the flipped-face overlay color; the Face Orientation overlay tints flipped faces in a recognizable red that scans cleanly against the blue-tinted majority).

#### #50 · `lesson_06_50_fill_operations_comparison.png`

- **Type:** PNG, 3-panel horizontal composite, 3844x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite → temp files removed
- **Scene setup base:** Delete L06_NormalsMonkey from #23. Add a Cube primitive named `L06_FillCube`. Enter Edit Mode + face select. Delete the top face only via `bpy.ops.mesh.delete(type='FACE')` (singular per locked op-name rule) to leave a 4-edge boundary hole. Switch to edge select.
- **Panel 1:** Select the 4 boundary edges of the hole. Apply `bpy.ops.mesh.fill()` (Simple Fill, F-key behavior). Result: typically a single n-gon or triangular fill across the hole. Render to `_temp_lesson_06_50_p1.png` (1280x720).
- **Panel 2:** Undo back to the hole state via `bpy.ops.ed.undo()` (or recreate L06_FillCube and re-delete top face). Select the 4 boundary edges. Apply `bpy.ops.mesh.fill_grid()`. Result: organized grid of quad faces filling the hole with clean topology. Render to `_temp_lesson_06_50_p2.png` (1280x720).
- **Panel 3:** Undo back to the hole state. Select the 4 boundary edges. First call `bpy.ops.mesh.fill()` to create a base fill, then call `bpy.ops.mesh.beautify_fill()` to optimize the triangulation. Result: optimized triangulation across the hole. Render to `_temp_lesson_06_50_p3.png` (1280x720).
- **Render config:** Same as #17, view_distance 3.5, looking at the cube top so the topology of each fill reads clearly. Wireframe overlay ON across all 3 panels so the topology distinction (n-gon vs grid quads vs triangulation) is visible.
- **Composite:** PIL 3844x720, output `lesson_06_50_fill_operations_comparison.png`. Remove temps.

### Per-image specs · sub-chat B (1 manual Win+Shift+S + 1 SVG)

#### #20 · `lesson_06_20_merge_by_distance.png`

- **Type:** PNG, manual Win+Shift+S, `c20` overlay planned at INTEGRATION
- **Capture path:** Ray captures the M Merge menu in Edit Mode with the menu fully visible. The `By Distance` row should be hovered with the standard Blender hover highlight to give c20 a clear target. Optionally also include the operator panel showing `Removed N vertices` after applying the operation to add quantitative reinforcement; or capture the menu alone if the operator panel state is hard to time. Ray uploads via chat or writes directly to `images/`.
- **Target dimensions:** Whatever the Win+Shift+S snip captures; M Merge menu is typically 200-300 px wide and 250-350 px tall. INTEGRATION overlay `viewBox` will match the captured PNG dimensions.
- **Output:** `lesson_06_20_merge_by_distance.png`.
- **c20 overlay (deferred to INTEGRATION):** Single-region highlight on the `By Distance` menu row. Positive-green colorway (`#4ADE80` badge with `#0f1a14` text; Merge by Distance is an affirmative cleanup operation that removes duplicate vertices). Badge text locked as `BY DISTANCE` (mirrors the row label exactly; matches the c10 `LOOPTOOLS` and c16 `AMOUNT` precedent of pulling badge text from the UI string itself); fallback `MERGE` if the captured PNG aspect ratio favors a shorter label. Locked geometry per c46 / c10 / c16 precedent: ellipse highlight `fill="none" stroke="#4ADE80" stroke-width="4"`; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"`; marker `r="6" fill="#4ADE80"` 7 px from badge edge; badge rect `rx="6" fill="#4ADE80"` height 46; badge text `font-size="22" font-weight="700" fill="#0f1a14" letter-spacing="2"` reading `BY DISTANCE`. Exact pixel coords resolved at Phase 3 INTEGRATION plan-lock via Pillow scan (brighter-pixel band for the hovered row, similar to the c16 Select Similar menu scan).

#### #21 · `lesson_06_21_dissolve_vs_delete.svg`

- **Type:** SVG, hand-authored, 800x560 canvas, id prefix `dd`
- **Capture path:** Authored from scratch in sub-chat B
- **Design pattern:** Paired-panel comparison adapting the Phase 1 #8 6-panel-grid SVG idiom but at 2-panel scale. Two equal-width panels side by side, each panel approximately 360 px wide x 340 px tall. Each panel has:
  - **Header bar at panel top:** left panel `DELETE` with warning-red `#E63946` background bar and white `#ffffff` text; right panel `DISSOLVE` with positive-green `#4ADE80` background bar and dark `#0f1a14` text. Header bar 32 px tall. Text font-size 18 weight 700 text-anchor middle letter-spacing 2.
  - **Body region (mesh diagram):** small simple mesh diagram drawn as line strokes. Left panel mesh has a gap/hole where a face was removed (the boundary edges visible as bold orange `#FF6B00` strokes outlining the hole); right panel mesh has the same starting state with the face dissolved and remaining geometry reconnected as one continuous larger face (cleaner topology, no boundary highlights). Use a 3x3 face grid as the base mesh so the difference between hole vs reconnect reads cleanly.
  - **Caption strip under each panel:** `LEAVES HOLES` (left) and `RECONNECTS GEOMETRY` (right), font-size 14 weight 600 opacity 0.85 text-anchor middle.
- **House style:** Top 3 px `#FF6B00` accent rail at (0, 0). System-ui font stack. Heading at y=56 size 24 weight 700 reading `Dissolve vs Delete`. Subtitle at y=84 size 14 opacity 0.65 reading `WHEN A FACE GOES · WHAT STAYS BEHIND` or similar (middle-dot separator). Divider line at y=108. Two panels content area y=138 to y=480 (approximately 342 px tall). Footer tip card y=506-540 Variant B (4 px left rail) with em-dash-free pro tip text noting `Reach for Dissolve when you want to simplify · reach for Delete when you want to open the mesh up · understanding the difference is core to clean editing`.
- **Brand colors used:** `#FF6B00` accent rail and Delete-panel hole boundary highlight; `#E63946` Delete-panel header bar with `#ffffff` text; `#4ADE80` Dissolve-panel header bar with `#0f1a14` text; `currentColor` for mesh edge strokes (renders dark in light mode, light in dark mode per the locked dark-mode-friendly SVG rule).
- **Internal ids:** `dd-title`, `dd-desc`, `dd-delete-panel`, `dd-dissolve-panel`, `dd-delete-header`, `dd-dissolve-header`, `dd-delete-mesh`, `dd-dissolve-mesh`, `dd-delete-caption`, `dd-dissolve-caption` (plus any sub-ids needed for mesh-shape polylines and rect frames; namespace all under `dd-*` consistently). No collisions with Phase 1 `pf-*` (#8), Phase 2 `sr-*` (#44), or any future-phase planned prefixes.
- **`color="#222"` retained** on the standalone `.svg` file in `images/` for `<img>` fallback per locked rule; stripped from root during inlining at Phase 3 INTEGRATION.
- **Em-dash-free** per style guide v4 decision 9. Subtitle and footer tip use middle-dot (`·`) where separator needed.
- **Dimensions:** 800x560 default (paired-panel content density fits comfortably per Phase 1 #8 6-panel grid precedent at 800x560 6,811 bytes and Phase 2 #44 5-row column layout at 800x560 6,615 bytes; 800x680 dense variant kept available as fallback if layout pressure forces it during sub-chat B execution).

### ID prefix registry update (Phase 3)

- **SVG ids added:** `dd` for #21 `lesson_06_21_dissolve_vs_delete.svg` (no collisions with Phase 1 `pf` for #8 or Phase 2 `sr` for #44; rounds out the SVG prefix set at 3 entries for the lesson)
- **PNG overlay ids added (2):** `c20` (#20 Merge by Distance menu highlight, positive-green badge `BY DISTANCE`), `c23` (#23 Face Orientation flipped-face highlight, warning-red badge `FLIPPED`). No collisions with Phase 1 `c2 c3 c46`, Phase 2 `c10 c13 c14 c15 c16`, or future-phase planned `c28 c30 c43 c45 c49`.

Phase 3 introduces the first warning-red PNG overlay badge in Lesson 06 (c23 `FLIPPED`); all prior Lesson 06 PNG overlay badges have been positive-green (c2 `VERTICES / EDGES / EDIT MODE / MESH MENU / SELECT MODES / EDIT TOOLBAR`, c3 `1 · VERTEX / 2 · EDGE / 3 · FACE`, c46 `SMOOTH`, c10 `LOOPTOOLS`, c16 `AMOUNT`). The locked colorway split (style guide v4 decision 8) drove the choice: FLIPPED is semantically a cautionary indicator (the face normal is pointing the wrong way and needs correction), which maps to the warning-red `#E63946` badge with `#ffffff` text.

### Execution cadence (sub-chats A and B)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` after every commit (applies to doc updates at each sub-chat close; image production uses BlenderMCP / PIL composite / manual capture paths instead)
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in figcaptions, alt text (both locked at Phase 3 INTEGRATION plan-lock chat, not at PRODUCTION), status bullets, SVG label / heading / subtitle / footer text, or any other new prose; middle-dot (`·`) for separation
- BlenderMCP: lowercase `blender:execute_blender_code`, NO `read_factory_settings`, EEVEE_NEXT → EEVEE fallback, `temp_override` for OpenGL renders, full-window `bpy.ops.screen.screenshot` available if needed
- Locked op-name corrections: `bpy.ops.mesh.inset` (not `inset_faces`) for #17 / #18 / #19; `bpy.ops.mesh.delete(type='FACE')` singular for #50 fill operations setup; `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` if unequal-spaced cuts are needed (not currently anticipated for Phase 3)
- Pillow 12.2.0 path for composites (#17 3-panel, #18 2-panel, #19 4-panel, #22 2-panel, #50 3-panel); temp files named `_temp_lesson_06_NN_pN.png` and removed via `os.remove` after composite
- Phase 3 fresh scene reset at sub-chat A start per the Step 0 script above (delete L06_LoopCylinder / L06_BridgeMesh / L06_GridMesh / L06_RingStack from prior Phase 2 state)
- Update Placement table row state per image as each capture lands (`not captured/not produced; not integrated` → `captured; not integrated` or `produced; not integrated`)
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at sub-chat B close (Phase 3 PRODUCTION close) to point at Phase 3 INTEGRATION plan-lock; `session.md` not rewritten at sub-chat A close unless sub-chat B is meaningfully delayed
- Warn Ray before context tightens within an execution sub-chat
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → check file size with `Filesystem:get_file_info` before retrying)

### Phase 3 PRODUCTION close criterion

All 8 Phase 3 images on disk in `images/`:

- 6 PNGs from sub-chat A: #17, #18, #19, #22, #23, #50
- 1 PNG + 1 SVG from sub-chat B: #20, #21

Placement table rows #17, #18, #19, #20, #22, #23, #50 flipped to `captured; not integrated` and row #21 flipped to `produced; not integrated`. Status section gets close bullets for both sub-chats (or one combined A+B bullet if both close in the same chat). Rewrite `session.md` at sub-chat B close to point at Phase 3 INTEGRATION plan-lock as the next chat.

Plan-lock close criterion: all 8 capture specs, scene configs, view rotations, output filenames, and overlay deferrals locked in writing before any production work. Met by this section.

---

## Phase 3 INTEGRATION plan

Locked 2026-05-23 during the Phase 3 INTEGRATION plan-lock chat RESUMED (after the 2026-05-23 paused plan-lock chat and the sub-chat C #23 recapture inserted between them). 8 image insertions into `lesson_06_edit_mode_essentials.html` split across 2 execution sub-chats. Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block (and for #21, the inlined SVG body) inserts at a marked position inside the anchor and the rest passes through.

**PART 05 indentation depth verified:** `#inset-outset` and `#mesh-cleanup` both use 0/4/8-space depth, identical to `#proportional-editing` from Phase 1 sub-chat 2 and to `#loop-tools` / `#advanced-selection` / `#selection-tools` from Phase 2. All 8 Phase 3 figures sit at section level (not inside cards), so all 8 use the default-depth variant only: figure col 4, img / svg root at col 8, svg children at col 12, deeper SVG nesting at 16 or 20, figcaption col 8. No deeper-indent variant needed this phase.

### Sub-chat split

- **Sub-chat 1** · `#inset-outset` section. 3 images: #17 plain (3844x720, no overlay), #18 plain (2562x720, no overlay), #19 plain (5126x720, no overlay). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Single `Filesystem:edit_file` dry-run-then-commit pair per image (3 commits total for the HTML) plus close-out doc updates. Lower complexity than sub-chat 2 since no overlay markup and no SVG inlining is needed. If sub-chat 1 closes with comfortable margin, the doc updates (Status bullet, placement-table row state flips, bottom-of-doc Next chat repointed at sub-chat 2 execution, `session.md` rewritten) land in the same chat.
- **Sub-chat 2** · `#mesh-cleanup` section. 5 images: #20 with c20 full callout (819x405 viewBox, positive-green, badge `BY DISTANCE`), #21 inline SVG (800x560 viewBox, `dd` prefix preserved, root `color="#222"` stripped), #22 plain (2562x720, no overlay), #23 with c23 full callout (1280x720 viewBox, warning-red, badge `FLIPPED`; first warning-red PNG overlay in Lesson 06), #50 plain (3844x720, no overlay). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Heaviest single insertion: #21 inline SVG (estimated 6-8 KB inline content per the Phase 1 #8 precedent at 6,811 bytes and Phase 2 #44 at 6,615 bytes). If sub-chat 2 tightens during execution, split into 2a (#20 with c20 + #21 inline SVG + #22 plain) and 2b (#23 with c23 + #50 plain).

**Bottom-up execution order within each sub-chat** (lower line numbers later so earlier inserts do not shift later anchors):

- Sub-chat 1: #19 (line ~1598) → #18 (line ~1592) → #17 (line ~1528)
- Sub-chat 2: #23 (line ~1893) → #50 (line ~1879) → #22 (line ~1833) → #21 (line ~1725) → #20 (line ~1684)

### c20 overlay coords (locked at 2026-05-23 paused plan-lock)

Positive-green `BY DISTANCE` callout on the hovered `By Distance` row of the M Merge popup menu. viewBox `0 0 819 405` matching the source PNG dimensions. Single highlight + leader + badge per the locked PNG annotation overlay component snippet (style guide v4) and the c46 / c10 / c16 precedent.

| element        | locked coords                                                                      |
| -------------- | ---------------------------------------------------------------------------------- |
| ellipse        | cx=210 cy=282 rx=200 ry=22 (wraps hover row at y=262-302, x=0-416)                 |
| ellipse stroke | `#4ADE80` width 4 fill `none`                                                      |
| leader         | from ellipse upper-right anchor (383, 271) up to marker (560, 110)                 |
| leader stroke  | `#4ADE80` width 3 linecap round                                                    |
| marker         | (560, 110) r=6 fill `#4ADE80` (7 px below badge bottom edge at y=103)              |
| badge rect     | x=460 y=57 width 200 height 46 rx=6 fill `#4ADE80` (centered at cx=560 cy=80)      |
| badge text     | `BY DISTANCE` at (560, 89) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14` |

Leader-path clearance verified at the paused plan-lock against the X-axis red guide line (red-mask bbox x=698-818 / y=0-120) and the floating tooltip (dark-fill band x=300-800 / y=320-380); the leader sits entirely in the empty upper-middle viewport region above the tooltip.

### c23 overlay coords (locked at this plan-lock RESUMED after sub-chat C close)

Warning-red `FLIPPED` callout on the 3-triangle flipped-face cluster in Suzanne's right temple. viewBox `0 0 1280 720` matching the cropped PNG dimensions. Pillow leader-path clearance scan run at this plan-lock confirms the candidate badge zone x=1000-1240 / y=80-180 is completely free of Suzanne mesh pixels (0 hits across both the full-zone scan and 4 sub-zone scans) and the chosen leader path crosses only 1 Suzanne pixel out of 31 samples near the ellipse anchor where the leader necessarily joins the highlighted target.

| element        | locked coords                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------- |
| ellipse        | cx=923 cy=309 rx=30 ry=22 (wraps red cluster bbox x=910..936 / y=295..322 with comfortable padding) |
| ellipse stroke | `#E63946` width 4 fill `none`                                                                       |
| leader         | from ellipse upper-right anchor (944, 293) up-right to marker (1140, 140)                           |
| leader stroke  | `#E63946` width 3 linecap round                                                                     |
| marker         | (1140, 140) r=6 fill `#E63946` (7 px below badge bottom edge at y=133)                              |
| badge rect     | x=1065 y=87 width 150 height 46 rx=6 fill `#E63946` (centered at cx=1140 cy=110)                    |
| badge text     | `FLIPPED` at (1140, 119) font-size 22 weight 700 letter-spacing 2 fill `#ffffff`                    |

Badge width 150 carries the 7-character `FLIPPED` string at letter-spacing 2 with comfortable side padding (text width approximately 105-110 px plus 20 px padding each side). The narrower badge vs the 200 px used for c20's longer `BY DISTANCE` label keeps the visual scale of the callout consistent with the smaller ellipse target (60 px wide vs c20's 400 px wide).

### #21 SVG inlining checklist

Per the locked inlining precedent from Phase 1 #8 (`pf` prefix) and Phase 2 #44 (`sr` prefix), and per the carry-forward note from Phase 3 PRODUCTION sub-chat B close:

- Figure at col 4, `<svg>` root at col 8, svg children at col 12, deeper nesting at 16 / 20, figcaption at col 8
- Strip `color="#222"` from the inlined root `<svg>` tag (preserve in the standalone `.svg` file in `images/` for `<img>` fallback)
- Preserve all 10 `dd-*` ids verbatim (`dd-title`, `dd-desc`, `dd-delete-panel`, `dd-dissolve-panel`, `dd-delete-header`, `dd-dissolve-header`, `dd-delete-mesh`, `dd-dissolve-mesh`, `dd-delete-caption`, `dd-dissolve-caption`, plus any namespaced sub-ids on mesh polylines or rect frames per the standalone file)
- Preserve `role`, `aria-labelledby`, `<title>`, `<desc>` verbatim
- No multi-line attribute continuations to collapse (the SVG was authored with single-line elements throughout per sub-chat B)
- No decorative ASCII-divider author comments to prune (the SVG carries only structural comments)
- Keep 5 short structural comments for in-place navigation in the inlined block (header, left panel, right panel, mesh groups, footer)
- Root `<svg>` opening tag flattened from any multi-line form onto a single line if needed

### Per-image specs

#### #17 · `lesson_06_17_inset_operation_progression.png` · `#inset-outset` · plain figure, col 4/8

**oldText anchor:**

```
            <li>Click to confirm (or type exact value)</li>
        </ol>
    </div>

    <div class="mermaid">
        graph LR
        A[Original Face] --> B[Press I]
```

Figure inserts between the Basic Inset card `</div>` (line 3 of the anchor) and the `<div class="mermaid">` (line 5).

**alt:** Three-panel horizontal composite showing the inset operation on a cube. Left panel: cube in Edit Mode with face select active and the top face selected in orange, no inset applied yet. Middle panel: the same cube after pressing I and moving the mouse inward, with a new inner face inside an outer border ring of four fresh quad faces; the new inner face is still selected. Right panel: a deeper inset progression with a second inset stacked on the inner face, producing two concentric inset borders. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Inset grows a fresh border of faces around any selected face without changing the silhouette. Press I and move the mouse inward · stack a second inset on top of the first whenever a deeper bevel-style frame is needed.

#### #18 · `lesson_06_18_inset_individual_vs_group.png` · `#inset-outset` · plain figure, col 4/8

**oldText anchor** (pre-existing en-dash `–` preserved verbatim):

```
            <li><strong>Individual Inset:</strong> Press <kbd>I</kbd> again while insetting – each face gets its own separate inset</li>
        </ul>
        <p><strong>Quick test:</strong> Select two adjacent faces, press <kbd>I</kbd> and move. Then press <kbd>I</kbd> again while still insetting. See the difference? Each face now has its own border!</p>
    </div>

    <h3>Common Inset Patterns</h3>
```

Figure inserts between the Individual vs Group Inset card `</div>` (line 4) and the `<h3>` (line 6).

**alt:** Two-panel horizontal composite showing the inset operation on a 4-by-4 subdivided plane. Left panel: all 16 grid faces selected and inset as a group, producing a single continuous outer border that frames the whole 4-by-4 region as one unit. Right panel: the same starting selection inset individually with the I-twice toggle, where each of the 16 faces carries its own independent border. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** Group inset frames the entire selection with a single border · individual inset gives every selected face its own border. Press I once for group · press I a second time while still insetting to toggle to individual mode.

#### #19 · `lesson_06_19_inset_double_technique.png` · `#inset-outset` · plain figure, col 4/8

**oldText anchor** (pre-existing en-dash `–` preserved verbatim):

```
    <blockquote>
        <p><strong>The "Double Inset" Technique:</strong> A professional modeling trick – select faces, inset once for a border, then inset again to create a second inner border. This creates beautiful panel detail with depth. Then extrude the innermost faces for 3D pop! This is used everywhere in hard-surface modeling.</p>
    </blockquote>

    <h3>Outset: The Reverse Inset</h3>
```

Figure inserts between the Double Inset Technique `</blockquote>` (line 3) and the `<h3>` (line 5).

**alt:** Four-panel horizontal composite showing the double-inset sci-fi panel technique on a cube. Panel 1: cube with its top face selected in orange, no inset applied. Panel 2: first inset applied, creating an outer border ring of four quads with a smaller inner face still selected. Panel 3: second inset applied to the inner face, creating an inner border ring nested inside the outer one. Panel 4: the innermost face extruded downward to create a recessed sci-fi panel detail. 2 px Blender-orange vertical dividers separate every pair of panels.

**figcaption:** The double inset is a workhorse for hard-surface paneling. Inset once for the outer frame · inset again for the inner frame · extrude the innermost face inward to recess the panel · and the recipe is done. Push the depth a little further on each step for a chunkier sci-fi look.

#### #20 · `lesson_06_20_merge_by_distance.png` · `#mesh-cleanup` · c20 full callout, col 4/8

**oldText anchor** (pre-existing right-arrow `→` preserved verbatim):

```
        <p><strong>Or:</strong> Mesh menu → Clean Up → Merge by Distance</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Setting</th>
```

Figure inserts between the Merge by Distance card `</div>` (line 2) and the `<table>` (line 4).

**alt:** Blender 3D viewport in Edit Mode with the M Merge popup menu open. The menu lists six options stacked vertically · At Center · At Cursor · At First · At Last · Collapse Edges and Faces · By Distance. The By Distance row at the bottom of the list is hovered and shows the standard Blender hover highlight, with a floating tooltip to its right describing the operation. The X-axis red viewport guide line is visible behind the menu in the upper right.

**figcaption:** Press M in Edit Mode and pick By Distance to fuse duplicate vertices that sit within a small radius of one another. Check the bottom-left of the viewport after running it · if it reports zero removed, the mesh was already clean.

**c20 overlay spec** · viewBox `0 0 819 405`, `preserveAspectRatio="xMidYMid meet"`, one callout positive-green (Merge by Distance is an affirmative cleanup operation):

| id               | target                                     | badge text    | colorway       |
| ---------------- | ------------------------------------------ | ------------- | -------------- |
| `c20-bydistance` | `By Distance` menu row at bottom of M menu | `BY DISTANCE` | positive green |

Locked pixel coords per the c20 overlay coords table above. Ellipse `fill="none" stroke="#4ADE80" stroke-width="4"` at cx=210 cy=282 rx=200 ry=22; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"` from (383, 271) to (560, 110); marker `r="6" fill="#4ADE80"` at (560, 110); badge rect `rx="6" fill="#4ADE80"` x=460 y=57 width=200 height=46; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#0f1a14" letter-spacing="2"` at (560, 89) reading `BY DISTANCE`.

#### #21 · `lesson_06_21_dissolve_vs_delete.svg` · `#mesh-cleanup` · inline SVG, col 4/8

**oldText anchor:**

```
    <h3>Dissolve vs. Delete</h3>

    <p>Understanding the difference between <strong>Delete</strong> and <strong>Dissolve</strong> is crucial for clean modeling. Both remove geometry, but they work very differently.</p>

    <div class="mermaid">
        graph TD
        A[Removing Geometry] --> B[Delete - Leaves holes]
```

Figure inserts between the Dissolve vs. Delete explanation `</p>` (line 3) and the `<div class="mermaid">` (line 5). The section heading text is `Dissolve vs. Delete` with a period (the figcaption uses dot-free phrasing instead so the visual rhythm stays clean).

**alt:** Side-by-side comparison illustration. The left panel is headed DELETE in white text on a warning-red bar and shows a 3-by-3 quad mesh with one face removed in the middle, leaving a square hole bordered by bold Blender-orange edges. The right panel is headed DISSOLVE in dark text on a positive-green bar and shows the same starting mesh after a dissolve, where the four faces around the removed center have merged into a single larger n-gon with no hole. Captions beneath each panel read LEAVES HOLES and RECONNECTS GEOMETRY.

**figcaption:** Delete and dissolve both remove geometry but the topology they leave behind is very different. Delete opens a hole bordered by raw boundary edges · dissolve reconnects the remaining geometry into a single continuous face. Reach for dissolve when the goal is to simplify the mesh while keeping it closed.

**SVG inlining checklist for sub-chat 2:** see the dedicated `#21 SVG inlining checklist` section above.

#### #22 · `lesson_06_22_limited_dissolve_before_after.png` · `#mesh-cleanup` · plain figure, col 4/8

**oldText anchor:**

```
    <blockquote>
        <p><strong>Import Cleanup Trick:</strong> When you import models from other software (especially CAD), they often have way too many tiny flat faces. Select all, run Limited Dissolve at 5 degrees, and watch thousands of unnecessary edges vanish while the shape stays perfect!</p>
    </blockquote>

    <h3>Fill and Grid Fill</h3>
```

Figure inserts between the Limited Dissolve blockquote `</blockquote>` (line 3) and the `<h3>` (line 5).

**alt:** Two-panel horizontal composite showing Limited Dissolve cleaning an over-subdivided cube. Left panel: a cube subdivided three times on every face producing a dense 4-by-4 quad grid on each of its six faces (96 quads total) with the full wireframe overlay enabled so the excessive edge density reads clearly. Right panel: the same cube after Limited Dissolve at a 5-degree angle limit, with all coplanar interior edges removed and the cube reduced back to its original six-quad form. The shape and silhouette are identical between the two panels. A 2 px Blender-orange vertical divider separates them.

**figcaption:** Limited Dissolve scans the mesh for edges between faces that sit within a small angle of each other and removes them. The over-subdivided cube on the left becomes a clean six-quad cube on the right · the shape is preserved while ninety unnecessary interior edges disappear in one step.

#### #23 · `lesson_06_23_face_orientation_overlay.png` · `#mesh-cleanup` · c23 full callout, col 4/8

**oldText anchor:**

```
            <li>All faces now point outward correctly!</li>
        </ol>
    </div>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
        <h4>💡 Seeing Normals</h4>
```

Figure inserts between the Fix Flipped Normals card `</div>` (line 3) and the Seeing Normals card opening `<div class="card" style="...">` (line 5).

**alt:** Suzanne monkey head in Blender Edit Mode with the Face Orientation overlay enabled and SOLID shading. The bulk of the mesh is tinted a translucent blue, indicating that the face normals are pointing outward as expected. A small cluster of three adjoining triangle faces on Suzanne's right temple is tinted translucent red, marking those faces as flipped relative to the surrounding mesh. Axis indicators and the world floor grid are visible in the background.

**figcaption:** The Face Orientation overlay paints front-facing faces translucent blue and back-facing faces translucent red. A red patch anywhere on a closed mesh signals a flipped normal · select all and press Shift N to recalculate outward, or flip a single face manually with Mesh menu, Normals, Flip.

**c23 overlay spec** · viewBox `0 0 1280 720`, `preserveAspectRatio="xMidYMid meet"`, one callout warning-red (FLIPPED face orientation is a cautionary indicator that signals a normal needs to be corrected):

| id            | target                                          | badge text | colorway    |
| ------------- | ----------------------------------------------- | ---------- | ----------- |
| `c23-flipped` | 3-triangle flipped-face cluster on right temple | `FLIPPED`  | warning red |

Locked pixel coords per the c23 overlay coords table above. Ellipse `fill="none" stroke="#E63946" stroke-width="4"` at cx=923 cy=309 rx=30 ry=22; leader line `stroke="#E63946" stroke-width="3" stroke-linecap="round"` from (944, 293) to (1140, 140); marker `r="6" fill="#E63946"` at (1140, 140); badge rect `rx="6" fill="#E63946"` x=1065 y=87 width=150 height=46; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#ffffff" letter-spacing="2"` at (1140, 119) reading `FLIPPED`.

This is the first warning-red PNG overlay badge in Lesson 06; all prior Lesson 06 PNG overlay badges (c2, c3, c46, c10, c16, c20) have been positive-green. The colorway split (style guide v4 decision 8) drives the choice: FLIPPED is semantically a cautionary indicator and maps to the warning-red `#E63946` badge with `#ffffff` text.

#### #50 · `lesson_06_50_fill_operations_comparison.png` · `#mesh-cleanup` · plain figure, col 4/8

**oldText anchor:**

```
        <p><strong>Requirement:</strong> The hole must have an even number of edges (4, 8, 12, etc.)</p>
    </div>

    <h3>Recalculate Normals</h3>
```

Figure inserts between the Grid Fill card `</div>` (line 2) and the `<h3>` (line 4).

**alt:** Three-panel horizontal composite showing three different fill operations on the same square hole in a cube. Left panel: the hole filled with Simple Fill (F key), producing a single n-gon face spanning the boundary loop. Middle panel: the hole filled with Grid Fill, producing an organized grid of quad faces with clean topology. Right panel: the hole filled with Fill followed by Poke, fan-triangulating the result around a central vertex (the locked PRODUCTION sub-chat A deviation from `beautify_fill` which is a no-op on 2-triangle topology). The wireframe overlay is enabled across all three panels so the topology difference reads clearly. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Blender offers several fill paths for the same square hole. Simple Fill drops a single face across the gap · Grid Fill builds a clean quad grid · a Poke after Fill fan-triangulates the result from a center vertex. Pick the fill that matches the topology the downstream tools (subdivision, baking, animation) want to see.

### ID prefix sub-id registry update (Phase 3)

- c20 sub-id: `c20-bydistance` (single highlight on `By Distance` menu row, positive-green badge `BY DISTANCE`)
- c23 sub-id: `c23-flipped` (single highlight on 3-triangle flipped-face cluster on Suzanne's right temple, warning-red badge `FLIPPED`)

2 total overlay sub-ids planned for Phase 3 INTEGRATION (c20, c23). No collisions with Phase 1 sub-ids (`c2-*`, `c3-*`, `c46-*`), Phase 2 sub-ids (`c10-*`, `c13-*`, `c14-*`, `c15-*`, `c16-*`), with `pf-*` (Phase 1 SVG #8), `sr-*` (Phase 2 SVG #44), `dd-*` (Phase 3 SVG #21 inlined this phase), or with any future-phase planned prefixes.

### Execution cadence (sub-chats 1 and 2)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify file-size shift after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in any new content; pre-existing en-dashes (`–`) and right-arrows (`→`) in `oldText` anchors pass through verbatim; middle-dot (`·`) for separation in figcaption phrasing
- Bottom-up execution order within each sub-chat (#19 → #18 → #17 in sub-chat 1; #23 → #50 → #22 → #21 → #20 in sub-chat 2) so earlier inserts do not shift line numbers under later anchors
- For #20 / #23 overlay markup: lock the figure block with the wrapper div `position: relative; display: inline-block; max-width: 100%`, inner img `style="display: block; width: 100%; height: auto"`, and overlay svg `style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none" preserveAspectRatio="xMidYMid meet"` per the locked overlay component snippet (style guide v4)
- For #21 SVG inlining: read the standalone file via `Filesystem:read_text_file` first, then build the inlined block per the inlining checklist above (strip root `color="#222"`, preserve all `dd-*` ids verbatim, keep 5 structural comments, no other transformations needed since sub-chat B authored the SVG single-line)
- Update Placement table row state per image as each integration commits (`captured; not integrated` or `produced; not integrated` → `integrated`)
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at this plan-lock RESUMED close to point at Phase 3 INTEGRATION sub-chat 1 execution; rewrite `session.md` at sub-chat 1 close to point at sub-chat 2 execution; rewrite `session.md` again at sub-chat 2 close (Phase 3 INTEGRATION close) to point at Phase 4 PRODUCTION plan-lock
- Warn Ray before context tightens within an execution sub-chat
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → check file size with `Filesystem:get_file_info` before retrying)

Plan-lock close criterion: all 8 anchors, figcaptions, alt texts, the 2 overlay specs (c20 + c23 with full locked pixel coords), and the #21 SVG inlining checklist locked in writing before any HTML edit. The stale `Next chat` section at the bottom of this doc will be rewritten at the same close-out commit pair to point at Phase 3 INTEGRATION sub-chat 1 execution. Met by this section.

---

## Phase 4 PRODUCTION plan

Locked 2026-05-23 during the Phase 4 PRODUCTION plan-lock chat. 6 image productions split across 2 execution sub-chats (4 BlenderMCP + 2 manual Win+Shift+S) per the Phase 3 PRODUCTION precedent of scripted-vs-manual split. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 4 fresh scene reset applies at sub-chat A start: delete L06_NormalsMonkey, L06_FillCube, and any other `L06_*` leftovers from Phase 3 PRODUCTION sub-chats A / B / C before building Phase 4 scenes. No Step 0 add-on check needed for Phase 4 (Extrude family operations are bundled `bpy.ops.mesh` ops, no Extensions Platform install required).

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 4 PNGs: #24 extrude operation sequence (3-panel composite via PIL with 2px `#FF6B00` dividers, cube), #25 extrude normals vs regular (2-panel composite, UVSphere), #26 extrude individual faces (single-pose viewport render, subdivided plane), #27 extrude scale technique (4-panel composite, cube tower). Fresh scene reset as step 0. Heaviest single capture: #27 4-panel composite at 5126x720. Scene rebuilds between #24 (cube) -> #25 (UVSphere) -> #26 (subdivided plane) -> #27 (cube tower) make per-image rebuilds preferable to maintaining all 4 L06_* objects simultaneously.
- **Sub-chat B** · All non-scripted work. 2 PNGs: #45 transform constraint indicators (manual Win+Shift+S of a live G+Z interactive move showing the blue Z-axis constraint line and coordinate readout; transient transform UI BlenderMCP cannot reach), #49 extrude menu Alt+E (manual Win+Shift+S of the Alt+E popover menu showing all 5 options; transient popover UI BlenderMCP cannot reach per the locked Phase 1 sub-chat C #46 precedent).

If sub-chat A tightens after 2-3 captures land, split into A1 (#24, #25 cube + sphere) and A2 (#26, #27 plane + tower). Sub-chat B should comfortably fit one chat since both captures are manual and small (popover menus and constraint indicators are typically under 500 KB each).

### Step 0 (sub-chat A only) · Fresh scene reset

Before any Phase 4 capture work, clean the scene of L06\_\* leftovers from Phase 3 PRODUCTION sub-chats A / B / C:

```python
import bpy
to_delete = ["L06_NormalsMonkey", "L06_FillCube"]
for name in to_delete:
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)
        print(f"Removed: {name}")
    else:
        print(f"Not present: {name}")

# Defensive sweep for any other L06_* survivors
for obj in list(bpy.data.objects):
    if obj.name.startswith("L06_"):
        bpy.data.objects.remove(obj, do_unlink=True)
        print(f"Swept: {obj.name}")
```

Per-image scenes built fresh per the specs below; do not reuse the cube primitive across #24 and #27 because the #27 tower build leaves a tall multi-segment column that would interfere with the clean #24 baseline if reused.

### Per-image specs · sub-chat A (4 BlenderMCP captures)

#### #24 · `lesson_06_24_extrude_operation_sequence.png`

- **Type:** PNG, 3-panel horizontal composite, 3844x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render -> PIL composite with 2px `#FF6B00` vertical dividers -> temp files removed via `os.remove`
- **Scene setup:** Add a Cube primitive (default 2m) named `L06_ExtrudeCube`. Enter Edit Mode + face select. Select the top face only.
- **Panel 1:** Top face selected (orange highlight, dots at corners), no extrude yet. Render to `_temp_lesson_06_24_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0,0,0.4)})` (partial extrude showing the new top face risen 0.4m with side faces forming the connecting walls; the new top face is still selected). Render to `_temp_lesson_06_24_p2.png` (1280x720).
- **Panel 3:** Apply additional translation to reach z=1.2 total via `bpy.ops.transform.translate(value=(0,0,0.8))`. Render to `_temp_lesson_06_24_p3.png` (1280x720).
- **Render config:** EEVEE with EEVEE_NEXT fallback per locked rule, viewport SOLID shading, user-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 5.0, view_location centered on the cube. Theme: vertex_size=5, edge_width=2 (Phase 1 default). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Composite:** PIL 3844x720 (3 panels x 1280 + 2 x 2 px divider), output `lesson_06_24_extrude_operation_sequence.png`. Remove temps.

#### #25 · `lesson_06_25_extrude_normals_vs_regular.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render -> PIL composite -> temp files removed
- **Scene setup:** Delete L06_ExtrudeCube from #24. Add a UVSphere primitive (default 32 segments, 16 rings, radius 1m) named `L06_ExtrudeSphere`. Enter Edit Mode + face select. Select an equatorial band of ~8 faces around the sphere's circumference at the y=0 plane (bmesh face filter for face centroid `z` within +/-0.15 of zero).
- **Panel 1:** Equatorial band selected. Apply `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0.6, 0, 0)})` (regular extrude with global X translation; all 8 selected faces shift together in the +X direction as one rigid unit, creating an asymmetric bulge on one side of the sphere). Render to `_temp_lesson_06_25_p1.png` (1280x720).
- **Panel 2:** Recreate L06_ExtrudeSphere and re-filter the equatorial band per the bmesh path (avoid `bpy.ops.ed.undo()` inside `temp_override` per the locked Phase 3 sub-chat A connection-drop discovery). Apply `bpy.ops.mesh.extrude_region_shrink_fatten(TRANSFORM_OT_shrink_fatten={"value":0.4})` (extrude along normals; each face extrudes 0.4m perpendicular to its own normal, creating a radial band-bulge that follows the sphere's curvature). **Op-name verify at execution:** if `extrude_region_shrink_fatten` is not the correct 5.1.1 op name, the working alternative is the two-step `bpy.ops.mesh.extrude_region()` (no transform) followed by `bpy.ops.transform.shrink_fatten(value=0.4)`. Log the working path in the Status bullet at sub-chat A close.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, SOLID shading, user-perspective rotation `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 5.0 to keep both before-extrude curvature and after-extrude bulge framed. Theme as #24. Overlays as #24.
- **Composite:** PIL 2562x720 (2 panels x 1280 + 1 x 2 px divider), output `lesson_06_25_extrude_normals_vs_regular.png`. Remove temps.

#### #26 · `lesson_06_26_extrude_individual_faces.png`

- **Type:** PNG, single-pose, 1280x720, no overlay planned
- **Capture path:** BlenderMCP OpenGL viewport render
- **Scene setup:** Delete L06_ExtrudeSphere from #25. Add a Plane primitive (2m x 2m) named `L06_ExtrudeGrid`. Enter Edit Mode, set face select, select all, then apply `bpy.ops.mesh.subdivide(number_cuts=3)` to produce a 4x4 quad grid (16 faces). Select all 16 faces.
- **Operation:** Apply `bpy.ops.mesh.extrude_faces_indiv()` (no transform argument) followed by `bpy.ops.transform.translate(value=(0, 0, 0.5))` to lift each individual extruded face uniformly 0.5m. Result: 16 individual pillars separated by visible vertical gaps between each, creating a uniform city-block array. The visible separation between columns is the pedagogical point: each face extruded independently rather than as one unit. **Op-name verify at execution:** if `extrude_faces_indiv` requires a transform argument in 5.1.1 (e.g., `TRANSFORM_OT_shrink_fatten={"value":0.5}`), use that single-call form instead. Log the working path in the Status bullet at sub-chat A close.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, SOLID shading, user-perspective rotation as #24, view_distance 5.0, view_location centered above the grid so the 16 individual pillars read clearly against the floor plane. Theme as #24. Overlays as #24.
- **Output:** `lesson_06_26_extrude_individual_faces.png` (1280x720).

#### #27 · `lesson_06_27_extrude_scale_technique.png`

- **Type:** PNG, 4-panel horizontal composite, 5126x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render -> PIL composite -> temp files removed
- **Scene setup:** Delete L06_ExtrudeGrid from #26. Add a Cube primitive (default 2m) named `L06_ExtrudeTower`. Enter Edit Mode + face select. Select the top face only.
- **Panel 1:** Top face selected, no extrude yet (the base cube ready state). Render to `_temp_lesson_06_27_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0,0,0.8)})` (first extrude up 0.8m, creating a tower base). Render to `_temp_lesson_06_27_p2.png` (1280x720).
- **Panel 3:** With the new top face still selected, apply `bpy.ops.transform.resize(value=(0.7, 0.7, 1.0))` (scale 0.7x on X and Y, lock Z, the locked Shift+Z behavior). The top face contracts to 70% of its size while staying at the same height, creating the first taper. Render to `_temp_lesson_06_27_p3.png` (1280x720).
- **Panel 4:** Apply a second extrude+scale iteration: `extrude_region_move` with `(0,0,0.8)` then `resize` with `(0.7, 0.7, 1.0)`. Result: a 2-tier tapered tower with two visible step transitions. Render to `_temp_lesson_06_27_p4.png` (1280x720).
- **Render config:** EEVEE_NEXT -> EEVEE fallback, SOLID shading, user-perspective rotation as #24, view_distance **6.0** (slightly farther than #24 to fit the growing tower height across all 4 panels with consistent framing), view_location centered on the tower's vertical center (z~1.0). Theme as #24. Overlays as #24.
- **Composite:** PIL 5126x720 (4 panels x 1280 + 3 x 2 px divider), output `lesson_06_27_extrude_scale_technique.png`. Remove temps.

### Per-image specs · sub-chat B (2 manual Win+Shift+S captures)

#### #45 · `lesson_06_45_transform_constraint_indicators.png`

- **Type:** PNG, manual Win+Shift+S, `c45` overlay planned at INTEGRATION
- **Capture path:** Ray initiates a G+Z interactive move on a cube (Object Mode or Edit Mode + face/vertex/edge selection), captures the moment the blue Z-axis constraint line is visible across the full viewport along with the floating coordinate readout in the corner. Capture timing: after pressing G then Z but before clicking to confirm (the transform is live with the constraint visualization rendered). Ray uploads via chat or writes directly to `images/`.
- **Why manual:** the transform constraint indicator is transient UI that only renders during a live interactive G / R / S operation; BlenderMCP cannot reach this state via scripted ops because `bpy.ops.transform.translate` does not display the interactive constraint visualization (the colored band is a viewport overlay drawn only during modal operator execution).
- **Target dimensions:** whatever the Win+Shift+S snip captures; full viewport is typically 1500-1900 px wide x 800-1100 tall. INTEGRATION overlay `viewBox` will match the captured PNG dimensions.
- **Subject choice:** Cube primitive near viewport center so the Z-axis line runs vertically through the cube origin and extends both above and below for visual clarity. Include the small `D: 0.500 Z` coordinate readout in the corner of the snip for quantitative reinforcement.
- **Output:** `lesson_06_45_transform_constraint_indicators.png`.
- **c45 overlay (deferred to INTEGRATION):** Single-region highlight on the blue Z-axis constraint line. Positive-green colorway (`#4ADE80` badge with `#0f1a14` text; the axis constraint is an affirmative indicator showing what is locked, not a warning). Badge text locked as `ALONG Z` (mirrors the visible coordinate readout's axis label per the c10 `LOOPTOOLS` / c16 `AMOUNT` / c20 `BY DISTANCE` precedent of pulling badge text from the on-screen UI string). Locked geometry per c46 / c10 / c16 / c20 precedent: ellipse highlight `fill="none" stroke="#4ADE80" stroke-width="4"`; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"`; marker circle `r="6" fill="#4ADE80"` at badge-side end of leader 7 px from badge edge; badge rect `rx="6" fill="#4ADE80"` height 46; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#0f1a14" letter-spacing="2"` reading `ALONG Z`. Exact pixel coords resolved at Phase 4 INTEGRATION plan-lock via Pillow scan (blue-pixel band scan for the Z-axis constraint line color).

#### #49 · `lesson_06_49_extrude_menu_alt_e.png`

- **Type:** PNG, manual Win+Shift+S, `c49` overlay planned at INTEGRATION
- **Capture path:** Ray opens the Alt+E special extrude popover menu in Edit Mode with the menu fully visible. The menu lists (per the lesson HTML and AI prompt): Extrude Region, Extrude Region and Move, Extrude Along Normals, Extrude Individual Faces, Extrude to Cursor. The `Extrude Along Normals` row should be hovered with the standard Blender hover highlight to give c49 a clear target. Ray uploads via chat or writes directly to `images/`.
- **Why manual:** Alt+E produces a popover menu that closes on mouse-down or focus-change; BlenderMCP cannot reach transient popover UI per the locked Phase 1 sub-chat C #46 precedent (same path the Shift+O Proportional Falloff pie menu used).
- **Target dimensions:** Whatever the Win+Shift+S snip captures; Alt+E menu is typically 200-300 px wide x 200-300 px tall, but the snip likely captures more viewport context around the menu for c49 leader-path headroom. INTEGRATION overlay `viewBox` will match the captured PNG dimensions.
- **Subject choice:** Any L06\_\* mesh in Edit Mode with a face / edge / vertex selected so the Alt+E menu populates with active options. Cube primitive is fine; menu content is invariant across mesh choice.
- **Output:** `lesson_06_49_extrude_menu_alt_e.png`.
- **c49 overlay (deferred to INTEGRATION):** Single-region highlight on the `Extrude Along Normals` menu row. Positive-green colorway (`#4ADE80` badge with `#0f1a14` text; Extrude Along Normals is an affirmative tool option, not a warning; the lesson copy emphasizes it as incredibly useful for organic shapes). Badge text locked as `ALONG NORMALS` (mirrors the menu row label per c10 `LOOPTOOLS` / c16 `AMOUNT` / c20 `BY DISTANCE` precedent). Locked geometry per c46 / c10 / c16 / c20 precedent: ellipse highlight `fill="none" stroke="#4ADE80" stroke-width="4"`; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"`; marker `r="6" fill="#4ADE80"` 7 px from badge edge; badge rect `rx="6" fill="#4ADE80"` height 46; badge text `font-size="22" font-weight="700" fill="#0f1a14" letter-spacing="2"` reading `ALONG NORMALS`. Exact pixel coords resolved at Phase 4 INTEGRATION plan-lock via Pillow scan (brighter-pixel band for the hovered row, similar to the c16 Select Similar menu scan and c20 By Distance row scan). Fallback target if the Alt+E menu capture composition disfavors the Along Normals row: `Extrude Individual Faces` row (the row immediately below), positive-green colorway, badge text `INDIVIDUAL FACES`. Final target chosen at Phase 4 INTEGRATION plan-lock once the captured PNG is in hand.

### ID prefix registry update (Phase 4)

- **PNG overlay ids added (2):** `c45` (#45 Transform constraint indicators, positive-green badge `ALONG Z`), `c49` (#49 Extrude menu Alt+E, positive-green badge `ALONG NORMALS`). No collisions with Phase 1 (`c2`, `c3`, `c46`), Phase 2 (`c10`, `c13`, `c14`, `c15`, `c16`), Phase 3 (`c20`, `c23`), or future-phase reserved (`c28`, `c30`, `c43`).
- **No SVG ids added.** Phase 4 has no SVGs per the locked Option L phase plan (SVGs concentrated in Phases 1 / 2 / 3 at #8 `pf`, #44 `sr`, #21 `dd`).

Phase 4 introduces two new positive-green PNG overlays (`c45`, `c49`); no warning-red overlays this phase. Cumulative Lesson 06 PNG overlay badge tally after Phase 4 PRODUCTION close: 8 positive-green (`c2`, `c3`, `c46`, `c10`, `c16`, `c20`, `c45`, `c49`) + 1 warning-red (`c23`) + 3 decorative-shape-only (`c13`, `c14`, `c15`).

### Execution cadence (sub-chats A and B)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit (applies to doc updates at each sub-chat close; image production uses BlenderMCP / manual Win+Shift+S paths instead)
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in figcaptions, alt text (both locked at Phase 4 INTEGRATION plan-lock chat, not at PRODUCTION), status bullets, or any other new prose; middle-dot (`·`) for separation
- BlenderMCP: lowercase `blender:execute_blender_code`, NO `read_factory_settings`, EEVEE_NEXT -> EEVEE fallback, `temp_override` for OpenGL renders, full-window `bpy.ops.screen.screenshot` available if needed
- Locked op-name corrections to carry forward: `bpy.ops.mesh.inset` (not `inset_faces`), `bpy.ops.mesh.delete(type='FACE')` singular not plural, `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect`; Phase 4 Extrude family op-name verification at execution per the per-image specs above for `extrude_region_move`, `extrude_region_shrink_fatten`, `extrude_faces_indiv` (log any 5.1.1-specific param signature deviations in Status bullets)
- **Avoid `bpy.ops.ed.undo()` inside `temp_override` blocks** per the Phase 3 sub-chat A locked connection-drop discovery; prefer recreate clauses for state rewind between panels (#25 panel 2 setup explicitly uses recreate; #24 / #27 build incrementally so no rewind needed; #26 single-pose so no rewind needed)
- Pillow 12.2.0 path for composites (#24 3-panel, #25 2-panel, #27 4-panel; #26 single-pose so no composite); temp files named `_temp_lesson_06_NN_pN.png` and removed via `os.remove` after composite
- Phase 4 fresh scene reset at sub-chat A start per the Step 0 script above (delete L06_NormalsMonkey / L06_FillCube + defensive L06\_\* sweep)
- Update Placement table row state per image as each capture lands (`not captured; not integrated` -> `captured; not integrated`)
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at sub-chat B close (Phase 4 PRODUCTION close) to point at Phase 4 INTEGRATION plan-lock; `session.md` not rewritten at sub-chat A close unless sub-chat B is meaningfully delayed
- Warn Ray before context tightens within an execution sub-chat
- MCP server hang recovery armed per the locked rule (4-min timeout boundary -> check file size with `Filesystem:get_file_info` before retrying; the c2 multi-callout commit precedent applies to any future heavy-content commit)

### Phase 4 PRODUCTION close criterion

All 6 Phase 4 images on disk in `images/`:

- 4 PNGs from sub-chat A: #24, #25, #26, #27
- 2 PNGs from sub-chat B: #45, #49

Placement table rows #24, #25, #26, #27, #45, #49 flipped to `captured; not integrated`. Status section gets close bullets for both sub-chats (or one combined A+B bullet if both close in the same chat). Rewrite `session.md` at sub-chat B close to point at Phase 4 INTEGRATION plan-lock as the next chat.

Plan-lock close criterion: all 6 capture specs, scene configs, view rotations, output filenames, and overlay deferrals (c45 / c49) locked in writing before any production work. Met by this section.

---

## Phase 4 INTEGRATION plan

Locked 2026-05-23 during the Phase 4 INTEGRATION plan-lock chat. 6 image insertions into `lesson_06_edit_mode_essentials.html` `#extrude-operations` section across 1 execution sub-chat (with fallback split point if the chat tightens). Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block inserts at a marked position inside the anchor and the rest passes through.

**PART 06 indentation depth verified:** `#extrude-operations` uses 0/4/8-space depth, matching `#proportional-editing` from Phase 1 sub-chat 2, `#loop-tools` / `#advanced-selection` / `#selection-tools` from Phase 2, and `#inset-outset` / `#mesh-cleanup` from Phase 3. All 6 Phase 4 figures sit at section level (not inside cards), so all 6 use the default-depth variant only: figure col 4, img and figcaption at col 8, overlay svg at col 12. No deeper-indent variant needed this phase.

### Sub-chat split

- **Sub-chat 1 (single sub-chat)** · `#extrude-operations` section. All 6 images: #24 plain (3844x720, no overlay), #45 with c45 full callout (1920x1080 viewBox, positive-green, badge `ALONG Z`), #25 with **new c25 composite-overlay** (2562x720 viewBox, two positive-green panel badges `REGULAR` and `ALONG NORMALS`; added at this plan-lock per the locked rule that overlays may be added at INTEGRATION if a PNG turns out to need a callout), #26 plain (1280x720, no overlay), #27 plain (5126x720, no overlay), #49 with c49 full callout (922x396 viewBox, positive-green, badge `ALONG NORMALS`). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Estimated HTML byte delta similar to Phase 3 INTEGRATION sub-chat 2 (+17 KB) since Phase 4 has 6 figures vs sub-chat 2's 5 figures with one inline SVG; the 3 Phase 4 overlays (c45, c25, c49) are simpler than Phase 3's c20+c23+inline-#21 combo, so net should land closer to +13-15 KB.
- **Fallback split point** if sub-chat 1 tightens mid-execution: split into **4a** (#27 + #26 + #25 with c25 composite-overlay) and **4b** (#49 + #45 with c45 + #24). The split-point boundary lands cleanly between bottom-half mesh-construction figures (4a) and top-half UI / menu figures (4b), and each half carries one of the two single-region overlays.

### Bottom-up execution order

**Corrected from session.md proposed order.** The session.md proposed `#49 → #27 → #26 → #25 → #45 → #24` was derived from reverse placement-table row order, but placement-table rows in the progress doc are not sorted by document position. Actual document positions in the locked `#extrude-operations` slice (absolute line numbers in `lesson_06_edit_mode_essentials.html`):

| Figure | Insertion line (absolute) |
| ------ | ------------------------- |
| #24    | line 2132                 |
| #45    | line 2193                 |
| #49    | line 2204                 |
| #25    | line 2219                 |
| #26    | line 2250                 |
| #27    | line 2282                 |

True bottom-up order (latest in document first, preserves earlier anchors): **`#27 → #26 → #25 → #49 → #45 → #24`**. This is the locked execution order for sub-chat 1.

If the fallback 4a + 4b split is invoked, each half retains bottom-up order within itself: **4a: #27 → #26 → #25**; **4b: #49 → #45 → #24**.

### c45 overlay coords (locked at this plan-lock via Pillow blue-pixel band scan)

Positive-green `ALONG Z` callout on the blue Z-axis transform constraint line. viewBox `0 0 1920 1080` matching the source PNG dimensions. Single highlight + leader + badge per the locked PNG annotation overlay component snippet (style guide v4) and the c46 / c10 / c16 / c20 precedent.

Pillow scan results: the dominant central blue-pixel column sits at exactly x=922 with 1043 blue pixels spanning the full image height y=0..1079 (1px-wide constraint line, with surrounding tower-mesh blue tint at x=920-921 from the same blue Z-color bleeding into the modal-move face shading). The constraint line's clearest segment is between the floating `D: 0.7893 m (0.7893 m) along global Z` coord readout (bounding box x=778-1069 / y=15-25) and the cube top tip at y=189. The right-side viewport gizmo widget sits at x=1803-1853 / y=103-132, leaving the upper-right zone x=1100-1500 / y=80-180 completely clear for badge placement.

| element        | locked coords                                                                            |
| -------------- | ---------------------------------------------------------------------------------------- |
| ellipse        | cx=922 cy=110 rx=18 ry=70 (wraps constraint-line segment y=40..180 below the coord pill) |
| ellipse stroke | `#4ADE80` width 4 fill `none`                                                            |
| leader         | from ellipse east anchor (940, 110) straight right to marker (1173, 110)                 |
| leader stroke  | `#4ADE80` width 3 linecap round                                                          |
| marker         | (1173, 110) r=6 fill `#4ADE80` (7 px left of badge left edge at x=1180)                  |
| badge rect     | x=1180 y=87 width 150 height 46 rx=6 fill `#4ADE80` (centered at cx=1255 cy=110)         |
| badge text     | `ALONG Z` at (1255, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`         |

Leader-path clearance verified: the straight horizontal leader at y=110 runs from x=940 to x=1173 across empty viewport background, below the coord readout (y=15-25) and above the cube top (y=189). Badge zone x=1180-1330 / y=87-133 is entirely clear of the coord readout (max x=1069) and the right-edge gizmo (min x=1803). Badge width 150 carries the 7-character `ALONG Z` string at letter-spacing 2 comfortably, matching the c23 `FLIPPED` 7-char precedent at the same width.

### c49 overlay coords (locked at this plan-lock via Pillow brighter-pixel band scan)

Positive-green `ALONG NORMALS` callout on the hovered `Extrude Faces Along Normals` row of the Alt+E special extrude popover. viewBox `0 0 922 396` matching the source PNG dimensions. Single highlight + leader + badge per the c46 / c10 / c16 / c20 / c45 precedent.

Pillow scan results: the hover-highlight band sits at y=138-178 (40 px tall, bg rgb 63,63,63 vs the menu's normal bg rgb 24,24,24), horizontal extent x=30-459 (full menu interior width). The hovered row text `Extrude Faces Along Normals` spans approximately x=30-340 within the band. The floating tooltip `Extrude region together along local normals.` sits at y=215-260 / x=460-870, comfortably below the planned upper-right badge zone.

| element        | locked coords                                                                          |
| -------------- | -------------------------------------------------------------------------------------- |
| ellipse        | cx=245 cy=158 rx=215 ry=24 (wraps hover band y=138..178 with x-padding around text)    |
| ellipse stroke | `#4ADE80` width 4 fill `none`                                                          |
| leader         | from ellipse east anchor (460, 158) up-right to marker (613, 110)                      |
| leader stroke  | `#4ADE80` width 3 linecap round                                                        |
| marker         | (613, 110) r=6 fill `#4ADE80` (7 px left of badge left edge at x=620)                  |
| badge rect     | x=620 y=87 width 240 height 46 rx=6 fill `#4ADE80` (centered at cx=740 cy=110)         |
| badge text     | `ALONG NORMALS` at (740, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`  |

Leader-path clearance verified: the leader from (460, 158) up-right to (613, 110) exits the menu at x=460 (just outside the menu right edge at x=459) and runs diagonally up across empty viewport background. Badge zone x=620-860 / y=87-133 is well above the floating tooltip (min y=215). Badge width 240 carries the 13-character `ALONG NORMALS` string at letter-spacing 2 with comfortable side padding. 922 px image width is just above the 720 px thin-strip-variant threshold from c3, so standard-size callout geometry applies; the row's 40 px highlight band height accommodates the 48 px ellipse comfortably without visual crowding.

### c25 composite-overlay coords (NEW; locked at this plan-lock via visual review)

Positive-green per-panel labels on the 2-panel #25 composite to disambiguate the subtle visual contrast between regular extrude and extrude along normals (both panels show a +X-side bulge on the UV sphere at the captured camera angle; without labels the pedagogical contrast is not legible at thumbnail scale). viewBox `0 0 2562 720` matching the source PNG dimensions. Two centered badges near the bottom edge per the composite-overlay variant in style guide v4 locked decision (no highlight ellipses, no leader lines, no markers; just one centered badge per panel).

Panel boundaries (from Phase 4 PRODUCTION composite spec, 2 panels x 1280 + 1 x 2 px divider): panel 1 spans x=0..1280 (center cx=640), panel 2 spans x=1282..2562 (center cx=1922). Both badges sit at y=644 (top) with height 46 so the bottom edge at y=690 leaves 30 px margin to the image bottom edge at y=720.

| element                | locked coords                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| panel 1 badge rect     | x=500 y=644 width 280 height 46 rx=6 fill `#4ADE80` (centered at cx=640 in panel 1)          |
| panel 1 badge text     | `REGULAR` at (640, 675) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`              |
| panel 2 badge rect     | x=1782 y=644 width 280 height 46 rx=6 fill `#4ADE80` (centered at cx=1922 in panel 2)        |
| panel 2 badge text     | `ALONG NORMALS` at (1922, 675) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`       |

Both badges use width 280 for visual symmetry across the composite even though `REGULAR` (7 chars) is shorter than `ALONG NORMALS` (13 chars); the shorter label sits within a slightly more padded badge but the matched widths preserve the side-by-side comparison rhythm. Y-position y=644 places the badges in the lower-third of each panel, against the sphere's lower meridian and the floor grid background where viewport content is darkest and the green badges read with strongest contrast.

### Per-image specs

#### #27 · `lesson_06_27_extrude_scale_technique.png` · `#extrude-operations` · plain figure, col 4/8

**oldText anchor:**

```
            <li><strong>Horns/spikes:</strong> Extrude, scale down aggressively = sharp spike</li>
        </ul>
    </div>

    <h3>Extrude and Rotate: Creating Curves</h3>
```

Figure inserts between the Common Extrude-Scale Patterns card `</div>` (line 3 of the anchor) and the `<h3>Extrude and Rotate</h3>` (line 5).

**alt:** Four-panel horizontal composite showing the extrude-and-scale workflow building a tapered tower from a cube. Panel 1: base cube with the top face selected. Panel 2: same cube after extruding the top face up 0.8 m, creating a tall single block. Panel 3: top face scaled to 0.7 on X and Y while Z is locked, producing the first taper. Panel 4: a second extrude-and-scale iteration adds a second tier above the first taper. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Extrude then scale, then extrude then scale again · this loop is the workhorse for tapered towers, tree trunks, bottle necks, and any silhouette that steps narrower as it grows.

#### #26 · `lesson_06_26_extrude_individual_faces.png` · `#extrude-operations` · plain figure, col 4/8

**oldText anchor** (extended to 6 lines for uniqueness across the full HTML; the bare `</tbody> </table> <blockquote>` pattern hit 4 occurrences):

```
                <td>Organic shapes, curved surfaces, consistent thickness</td>
            </tr>
        </tbody>
    </table>

    <blockquote>
```

Figure inserts between the Extrude Individual vs Group table `</table>` (line 4) and the `<blockquote>` (line 6).

**alt:** Subdivided 4 by 4 plane in Edit Mode after Extrude Individual Faces lifted all 16 quads up 0.5 m each. The grid of 16 separate pillars stands with visible vertical gaps between every pillar, since every face was extruded as its own independent piece rather than as one connected unit.

**figcaption:** Extrude Individual Faces breaks each selected face out as its own piece · use this to grow a field of pillars, spikes, or detail studs from a subdivided base in one keystroke.

#### #25 · `lesson_06_25_extrude_normals_vs_regular.png` · `#extrude-operations` · figure with c25 composite-overlay (NEW), col 4/8

**oldText anchor:**

```
        style E fill:#ff9800,stroke:#333,stroke-width:2px,color:#fff
    </div>

    <table>
```

Figure inserts between the Extrude Individual vs Group mermaid `</div>` (line 2 of the anchor) and the `<table>` (line 4).

**alt:** Two-panel horizontal composite contrasting regular extrude with extrude along normals on a UV sphere. Left panel labeled `REGULAR`: eight contiguous equatorial faces extruded together along the global X axis form a flat block-like bulge on one side of the sphere. Right panel labeled `ALONG NORMALS`: the same eight-face band extruded along normals produces a radial bulge in which each face moves perpendicular to its own surface. A 2 px Blender-orange vertical divider separates the panels and positive-green pill badges at the bottom of each panel name the extrude mode.

**figcaption:** Regular extrude moves all selected faces together along a single direction · Extrude Along Normals fans each face out along its own normal, which is the right choice for adding thickness to curved or organic surfaces.

**c25 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c25-*` prefix; coords per the c25 composite-overlay coords table above).

#### #49 · `lesson_06_49_extrude_menu_alt_e.png` · `#extrude-operations` · figure with c49 full callout, col 4/8

**oldText anchor:**

```
        <p><em>Extrude Along Normals is incredibly useful for organic shapes!</em></p>
    </div>

    <h3>Extrude Individual vs. Group</h3>
```

Figure inserts between the Pro Tip Extrude Along Normals card `</div>` (line 2 of the anchor) and the `<h3>Extrude Individual vs. Group</h3>` (line 4).

**alt:** Alt+E Extrude special popover in Edit Mode listing Extrude Faces, Extrude Faces Along Normals, Extrude Individual Faces, Extrude Manifold, Extrude Repeat, and Spin. The Extrude Faces Along Normals row carries the active hover highlight as a brighter background band, and a bonus Blender tooltip reading `Extrude region together along local normals.` floats to the right of the row. A positive-green pill labeled ALONG NORMALS marks the hovered row.

**figcaption:** Press Alt+E to open the Extrude special menu · this is the only place to reach Extrude Faces Along Normals · Extrude Individual Faces · Extrude Manifold · and Extrude Repeat directly from the keyboard.

**c49 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c49-*` prefix; coords per the c49 overlay coords table above).

**Menu-item-count note for figcaption / alt text drafting:** the actual Blender 5.1.1 menu shows 6 items (Extrude Faces, Extrude Faces Along Normals, Extrude Individual Faces, **Extrude Manifold**, Extrude Repeat, Spin), one more than the locked Phase 4 PRODUCTION 5-option spec. The figcaption deliberately lists the 4 options that the lesson HTML body card already mentions (Extrude Along Normals, Extrude Individual, Extrude Repeat, and adds Manifold for completeness with what is visible in the PNG); the alt text enumerates all 6 visible items.

#### #45 · `lesson_06_45_transform_constraint_indicators.png` · `#extrude-operations` · figure with c45 full callout, col 4/8

**oldText anchor:**

```
        <p><strong>Example:</strong> <kbd>E</kbd>, <kbd>Z</kbd>, <kbd>2</kbd>, <kbd>Enter</kbd> = Extrude exactly 2 units up on Z-axis!</p>
    </div>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
```

Figure inserts between the Extrude Along Axes card `</div>` (line 2 of the anchor) and the next `<div class="card">` opening the Pro Tip Extrude Along Normals card (line 4).

**alt:** Blender 3D viewport during a live G Z move on the L06_ExtrudeTower mesh in Edit Mode. The blue vertical line is the global Z-axis constraint indicator running through the tower center, the tower faces show the modal-operator blue tint, and the dark pill at top reads `D: 0.7893 m (0.7893 m) along global Z` for the active translation. A positive-green pill labeled ALONG Z marks the constraint line.

**figcaption:** Press G then X · Y · or Z to lock a translation to a single global axis · the colored constraint line and the floating coord readout confirm the direction and the distance traveled.

**c45 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c45-*` prefix; coords per the c45 overlay coords table above).

#### #24 · `lesson_06_24_extrude_operation_sequence.png` · `#extrude-operations` · plain figure, col 4/8

**oldText anchor:**

```
        <p><strong>Quick tip:</strong> After pressing <kbd>E</kbd>, you can type a number for exact distance!</p>
    </div>

    <div class="mermaid">
        graph LR
```

Figure inserts between the Basic Extrude Operation card `</div>` (line 2 of the anchor) and the `<div class="mermaid">` opening the LR-flow extrude diagram (line 4).

**alt:** Three-panel horizontal composite showing the basic extrude operation on a cube in Edit Mode. Left panel: cube in face select with the top face selected, no extrude yet. Middle panel: same cube after a partial extrude that pushed the top face up 0.4 m, with new connecting side walls forming below the lifted face. Right panel: same cube after an additional translation reached a total height gain of 1.2 m, the new top face still selected. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Press E to extrude the selected face, then move the mouse or type a distance · the new face stays connected to the original by fresh side walls that fill the gap automatically.

### ID prefix registry update (Phase 4 INTEGRATION)

- **PNG overlay ids added at INTEGRATION (1 NEW beyond the Phase 4 PRODUCTION plan registry):** `c25` (#25 Extrude normals vs regular, composite-overlay variant with two positive-green panel badges `REGULAR` and `ALONG NORMALS`). Added per the locked rule that overlays may be added at INTEGRATION if a PNG turns out to need a callout, after this plan-lock's visual review showed both panels reading too similarly without labels. No collisions with existing Phase 1-4 PRODUCTION-registered prefixes (`c2`, `c3`, `c46`, `c10`, `c13`, `c14`, `c15`, `c16`, `c20`, `c23`, `c45`, `c49`) or future-phase reserved (`c28`, `c30`, `c43`).
- **No SVG ids added at INTEGRATION.** Phase 4 has no SVGs per the locked Option L phase plan.

Cumulative Lesson 06 PNG overlay tally after Phase 4 INTEGRATION close: 9 positive-green full-callouts (`c2`, `c3`, `c46`, `c10`, `c16`, `c20`, `c45`, `c49`) + 1 positive-green composite-overlay (`c25`) + 1 warning-red full-callout (`c23`) + 3 decorative-shape-only (`c13`, `c14`, `c15`). 14 PNG overlays total across the integrated set.

### Execution cadence (sub-chat 1)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- Bottom-up execution order within the sub-chat: `#27 → #26 → #25 → #49 → #45 → #24`
- No new em-dashes in figcaptions, alt text, status bullets, or any other new prose; middle-dot (`·`) for separation; pre-existing en-dashes in source content preserved verbatim through edit anchors
- Multi-edit `Filesystem:edit_file` calls with 3+ edits and long content avoided per the locked serialization-truncation workaround; one edit per figure (6 edits total), each as a single dry-run-then-commit pair; short multi-edit batches (2 edits with short content) still acceptable for doc updates per the Phase 4 PRODUCTION sub-chat B placement-table-flip precedent
- After all 6 figure inserts complete, perform doc updates: flip placement-table rows #24 / #25 / #26 / #27 / #45 / #49 from `captured; not integrated` to `integrated`; append Status section close bullet (single edit, long content); rewrite bottom-of-doc Next chat section pointing at Phase 5 PRODUCTION plan-lock (single edit, long content); rewrite `session.md` to point at same
- Update the ID prefix registry section of the progress doc to add `c25` to the PNG overlay ids planned subset (and bump the count from 12 to 13)
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → `Filesystem:get_file_info` size check before retry; applies to any heavy-content commit, particularly the #25 c25 composite-overlay and the #45 / #49 callout commits which carry the largest inline-SVG blocks)
- Warn Ray before context tightens; if the fallback 4a + 4b split is invoked, close 4a with all doc updates that reflect 4a-only progress (3 placement-table flips, partial Status bullet) and open 4b in a fresh chat
- Append Status section bullet at sub-chat 1 close (or 4a / 4b close if split invoked)

### Phase 4 INTEGRATION close criterion

All 6 Phase 4 figures integrated into `lesson_06_edit_mode_essentials.html` `#extrude-operations` section with the locked anchors, alt text, figcaptions, and overlay markup. Placement-table rows #24 / #25 / #26 / #27 / #45 / #49 all flipped to `integrated`. Status section close bullet documents the integration with per-figure HTML byte deltas and any execution deviations from this plan. Bottom-of-doc Next chat section repointed at Phase 5 PRODUCTION plan-lock. `session.md` rewritten to point at same.

Plan-lock close criterion: new `Phase 4 INTEGRATION plan` section written into this doc between `Phase 4 PRODUCTION plan` and `Locked rules`; sub-chat split locked as 1 sub-chat with 4a / 4b fallback; per-figure anchor candidates locked; c45 / c49 / c25 overlay specs locked with Pillow-scanned and visually-reviewed coords. Status bullet appended documenting plan-lock details. Next chat section repointed at Phase 4 INTEGRATION sub-chat 1 execution. `session.md` rewritten to point at same. Met by this section.

---

## Phase 5 PRODUCTION plan

Locked 2026-05-23 during the Phase 5 PRODUCTION plan-lock chat. 8 image productions split across 2 execution sub-chats (5 BlenderMCP + 3 manual Win+Shift+S) following the Phase 3 / Phase 4 PRODUCTION precedent of scripted-vs-manual split. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 5 fresh scene reset applies at sub-chat A start: delete `L06_ExtrudeCube` / `L06_ExtrudeSphere` / `L06_ExtrudeGrid` / `L06_ExtrudeTower` and any other `L06_*` leftovers from Phase 4 PRODUCTION before building Phase 5 scenes. No Step 0 add-on check needed for Phase 5 (Array Modifier, Spin operation, Screw Modifier, Knife Tool, and Knife Project are all bundled `bpy.ops.mesh` / `bpy.ops.object` ops or built-in modifier types; no Extensions Platform install required).

Phase 5 covers 3 HTML sections (`#duplicate-array` · `#spin-screw` · `#knife-tool`) and ships zero SVGs · all 8 images are PNG. Priority split per `lesson_06_image_requirements.md` Production Priority section: 0 High · 1 Medium (#31 Spin vase creation, listed as "Dramatic transformation showing rotational modeling") · 7 Low (#28 / #29 / #30 / #32 / #33 / #34 / #35). Two PNG overlays are already reserved in the ID prefix registry from initial planning (`c28` Array Modifier panel multi-label, `c30` Spin Operation setup multi-label); both overlay specs and pixel coords are deferred to Phase 5 INTEGRATION plan-lock per the c2 / c3 / c25 precedent of multi-label overlays sized after the source PNG is in hand.

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 5 final PNGs plus 2 cross-sub-chat temp files for #35: #28 Array Modifier panel (full-window screenshot via `bpy.ops.screen.screenshot` after Properties area is set to Modifiers tab with Array Modifier on the cylinder), #29 Array Modifier result (1280x720 OpenGL viewport render), #30 Spin Operation setup (1280x720 OpenGL render in side ortho with 3D cursor visible at origin), #31 Spin vase creation (2-panel 2562x720 Pillow composite, panel 1 side ortho profile + panel 2 user-perspective wireframe of full vase), #32 Screw Modifier spring (1280x720 OpenGL render). Plus `_temp_lesson_06_35_p1.png` (circle over surface, 1280x720) and `_temp_lesson_06_35_p3.png` (knife project result, 1280x720) retained on disk for sub-chat B's #35 cross-sub-chat composite. Fresh scene reset as Step 0. Scene rebuilds: cylinder for #28 / #29 → vase profile for #30 / #31 → screw circle for #32 → plane + circle for #35 panels 1 + 3. Per-image rebuilds preferable to maintaining all 5 `L06_*` sets simultaneously; only the #28 → #29 transition reuses the same `L06_ArrayCylinder` (view rotation flip only, no rebuild) since both images share the array setup.
- **Sub-chat B** · All non-scripted work. 3 final PNGs: #33 Knife Tool active interface (single manual snip of live knife modal operation), #34 Knife Tool constraint modes (3 manual snips composited 3844x720 via Pillow within sub-chat B), #35 Knife Project operation (1 manual snip of Mesh menu open composited with the 2 sub-chat A temps via Pillow at 3844x720). Sub-chat B begins with a verify-temps step (`Filesystem:get_file_info` on `_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png`) before Ray's manual captures land; if either temp is missing, recapture via the sub-chat A scene-build path before proceeding.

If sub-chat A tightens after 3-4 captures land, split into **A1** (#28 + #29 + #30, no composites, single-pose viewport renders + 1 full-window screenshot) and **A2** (#31 + #32 + #35 panels 1+3, composites and cross-sub-chat temps). Sub-chat B should comfortably fit one chat since all 3 manual captures are small-to-medium (knife modal viewport snips and Mesh menu popovers are typically 1500-1900 px wide x 800-1100 tall, similar to #45 / #49 manual capture sizes).

### Step 0 (sub-chat A only) · Fresh scene reset

Before any Phase 5 capture work, clean the scene of `L06_*` leftovers from Phase 4 PRODUCTION sub-chat A:

```python
import bpy
to_delete = ["L06_ExtrudeCube", "L06_ExtrudeSphere", "L06_ExtrudeGrid", "L06_ExtrudeTower"]
for name in to_delete:
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)
        print(f"Removed: {name}")
    else:
        print(f"Not present: {name}")

# Defensive sweep for any other L06_* survivors
for obj in list(bpy.data.objects):
    if obj.name.startswith("L06_"):
        bpy.data.objects.remove(obj, do_unlink=True)
        print(f"Swept: {obj.name}")
```

New `L06_*` object names introduced this phase: `L06_ArrayCylinder` (#28 + #29), `L06_SpinProfile` (#30 + #31), `L06_ScrewCircle` (#32), `L06_KnifeProjectPlane` and `L06_KnifeProjectCircle` (#35 panels 1 + 3). Per-image scenes built fresh per the specs below; the one in-place transition is #28 → #29 (same `L06_ArrayCylinder` + Array Modifier setup, view rotation flip only). All other transitions (#29 → #30, #30/#31 → #32, #32 → #35 panels) are full rebuilds with explicit delete of the prior phase object before the next scene build.

### Per-image specs · sub-chat A (5 BlenderMCP captures + 2 cross-sub-chat temp files)

#### #28 · `lesson_06_28_array_modifier_panel.png`

- **Type:** PNG, full-window Blender screenshot, target ~1920x1080 (varies by Blender window state), `c28` overlay planned at INTEGRATION (multi-label)
- **Capture path:** BlenderMCP `bpy.ops.screen.screenshot` of full Blender window after Properties area is set to Modifiers tab with the Array Modifier added and expanded; #2 precedent for `bpy.ops.screen.screenshot` full-window path with `temp_override`
- **Scene setup:** Add a Cylinder primitive (default 32 vertices, radius 0.5, depth 2) named `L06_ArrayCylinder` at origin. Apply Array Modifier via `cylinder.modifiers.new(name="Array", type='ARRAY')`. Set `mod.count = 10`, `mod.use_relative_offset = True`, `mod.relative_offset_displace[0] = 1.5`, `mod.relative_offset_displace[1] = 0.0`, `mod.relative_offset_displace[2] = 0.0` (10 copies offset 1.5 cylinder-widths along world X). Set Properties editor context to Modifiers tab: find the Properties area (`area.type == 'PROPERTIES'`) and set `area.spaces.active.context = 'MODIFIER'`. Confirm Array Modifier panel is expanded at capture time.
- **View setup:** 3D viewport set to user-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 7.5 to fit the full 10-cylinder array within the viewport region, view_location centered at the array midpoint (~X=6.75, Y=0, Z=0).
- **Capture:** `bpy.ops.screen.screenshot(filepath="...")` with full-window context override (no area filter) to grab the entire Blender window including the right-side Properties panel with Modifier panel visible alongside the viewport showing the array result.
- **Render config:** EEVEE_NEXT -> EEVEE fallback per locked rule. Theme: vertex_size=5, edge_width=2. Overlays: axes ON, floor ON, cursor OFF, origins OFF.
- **Output:** `lesson_06_28_array_modifier_panel.png` at full-window dimensions (typically 1920x1080 or close per the #2 precedent at this window state).
- **Op-name verify at execution:** Properties editor context enum value (`'MODIFIER'` uppercase confirmed against Blender 5.x; if assignment raises `TypeError: bpy_struct: item.attr = val: enum "MODIFIER" not found` then try `'MODIFIERS'` plural or query `area.spaces.active.context_pin` setup paths). Log the working enum value in the Status bullet at sub-chat A close.
- **c28 overlay (deferred to INTEGRATION):** Multi-label callouts on Array Modifier panel settings. Likely targets per AI prompt: `Count` slider, `Relative Offset X/Y/Z` fields, `Constant Offset` option, `Merge` checkbox. Positive-green colorway (`#4ADE80` badges with `#0f1a14` text). Final target set chosen at Phase 5 INTEGRATION plan-lock once the captured PNG is in hand; pixel coords resolved via Pillow scan of the Properties panel area.

#### #29 · `lesson_06_29_array_modifier_result.png`

- **Type:** PNG, single-pose viewport render, 1280x720, no overlay planned
- **Capture path:** BlenderMCP OpenGL viewport render of the same `L06_ArrayCylinder` from #28
- **Scene setup:** Reuse `L06_ArrayCylinder` from #28 with the same Array Modifier settings (10 copies, 1.5x relative offset along X). No new geometry, no scene rebuild between #28 and #29. Restore Properties area context to default (`OBJECT` or `RENDER`) so the viewport gets full real estate for the OpenGL render path; alternatively just leave Properties in `MODIFIER` since OpenGL viewport render captures only the 3D viewport area, not the Properties panel.
- **View setup:** Same user-perspective `Euler((radians(63.6), 0, radians(-46.7)))` and view_distance 7.5 as #28; view_location centered at the array midpoint to frame all 10 cylinders.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme as #28, overlays axes ON floor ON cursor OFF origins OFF outline_selected OFF.
- **Output:** `lesson_06_29_array_modifier_result.png` (1280x720).

#### #30 · `lesson_06_30_spin_operation_setup.png`

- **Type:** PNG, single-pose viewport render, 1280x720, `c30` overlay planned at INTEGRATION (multi-label)
- **Capture path:** BlenderMCP OpenGL viewport render in side ortho view
- **Scene setup:** Delete `L06_ArrayCylinder` from #28 / #29. Add a Plane primitive, enter Edit Mode, delete all faces, then build a vase profile using bmesh: create ~6 connected vertices in a profile arc from base (0.0, 0, 0.0) → bulge midpoint (~0.6, 0, 0.6) → narrow neck (~0.4, 0, 1.0) → flared lip (~0.5, 0, 1.4), connect adjacent verts with edges to form a single connected polyline profile in the XZ plane. Name the resulting object `L06_SpinProfile`. Select all verts/edges (orange highlight on the profile). Position 3D cursor at world origin via `bpy.context.scene.cursor.location = (0, 0, 0)`.
- **View setup:** Side ortho view (looking down +Y axis with Z up; rotate viewport via `Euler((radians(90), 0, 0))` and switch to ORTHO projection). View_distance 3.0 to frame the profile + cursor + nearby Z axis line.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme as #28 but `vertex_size=5` `edge_width=3` (extra-bold edges for profile visibility). Overlays: axes ON (especially Z axis for visual spin reference), floor ON, **cursor ON** (the 3D cursor at origin is the pedagogical centerpiece), origins OFF, outline_selected OFF.
- **Output:** `lesson_06_30_spin_operation_setup.png` (1280x720).
- **c30 overlay (deferred to INTEGRATION):** Multi-label callouts. Likely 3 labels per AI prompt: `3D CURSOR` at the cursor location, `PROFILE EDGE` on the selected profile, `SPIN AXIS` on the implied vertical Z axis line. Positive-green colorway (`#4ADE80` badges, `#0f1a14` text). Final coords resolved at Phase 5 INTEGRATION plan-lock via Pillow scan after the source PNG is in hand.

#### #31 · `lesson_06_31_spin_vase_creation.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned (the before-after contrast carries the message on its own)
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite with 2 px `#FF6B00` vertical divider → temp files removed via `os.remove`
- **Scene setup:** Reuse `L06_SpinProfile` from #30 in panel 1. For panel 2, apply `bpy.ops.mesh.spin(steps=24, dupli=False, angle=2*pi, center=(0,0,0), axis=(0,0,1))` (24-step full 360° spin around the world Z axis at origin) to generate the rotational vase mesh; switch shading to WIREFRAME to expose the rotational topology rings.
- **Panel 1:** Side ortho view of profile (same view setup as #30 but with **cursor OFF** for cleaner before/after contrast; the before panel emphasizes the profile, not the spin axis). Render to `_temp_lesson_06_31_p1.png` (1280x720).
- **Panel 2:** Apply the spin op. Switch to user-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 4.5 to fit the full vase height. Switch viewport shading to WIREFRAME so the 24-segment rotational topology is visible as circular cross-section rings. Render to `_temp_lesson_06_31_p2.png` (1280x720).
- **Render config:** EEVEE_NEXT -> EEVEE fallback (note: shading flip from SOLID to WIREFRAME between panels), theme as #28, overlays axes ON floor ON cursor OFF origins OFF outline_selected OFF.
- **Op-name verify at execution:** `bpy.ops.mesh.spin` arg signature in Blender 5.1.1 (the canonical signature uses `steps`, `dupli`, `angle`, `center`, `axis`; some versions accept positional vs keyword variants). If the signature differs, the working alternative is `bpy.ops.mesh.spin(steps=24, angle=2*pi, axis=(0,0,1))` with minimum required args. Log the working signature in the Status bullet at sub-chat A close.
- **Composite:** PIL 2562x720 (2 panels x 1280 + 1 x 2 px divider), output `lesson_06_31_spin_vase_creation.png`. Remove temps via `os.remove`.

#### #32 · `lesson_06_32_screw_modifier_spring.png`

- **Type:** PNG, single-pose viewport render, 1280x720, no overlay planned
- **Capture path:** BlenderMCP OpenGL viewport render
- **Scene setup:** Delete `L06_SpinProfile` from #30 / #31. Add a Circle primitive (8 vertices, radius 0.15, fill_type='NOTHING') named `L06_ScrewCircle` at origin. Rotate the circle 90° on world X via `obj.rotation_euler = (radians(90), 0, 0)` so the circle is vertical (perpendicular to the screw axis). Apply Screw Modifier via `circle.modifiers.new(name="Screw", type='SCREW')` with `mod.screw_offset = 0.5`, `mod.iterations = 5`, `mod.axis = 'Z'`, `mod.steps = 32`, `mod.render_steps = 32` (5 spiral rotations along Z producing a clear helical spring shape ~2.5 m tall).
- **View setup:** User-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 6.0, view_location centered on the spring's vertical center (z~1.25 with 5 iterations × 0.5 offset = 2.5 m total spring height).
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme as #28, overlays axes ON floor ON cursor OFF origins OFF outline_selected OFF.
- **Output:** `lesson_06_32_screw_modifier_spring.png` (1280x720).

#### #35 panels 1 + 3 (cross-sub-chat temp files)

These two scripted panel renders land on disk in sub-chat A but DO NOT composite into a final image until sub-chat B captures the manual panel 2. Both panels persist as named temp files at sub-chat A close.

- **Type:** PNG temp files, 1280x720 each, no overlay planned (the composite has no overlay either; per #29 / #32 precedent the workflow progression speaks for itself)
- **Capture path:** BlenderMCP OpenGL viewport render per panel
- **Scene setup:** Delete `L06_ScrewCircle` from #32. Add a Plane primitive (4 m × 4 m), enter Edit Mode, subdivide 3 cuts via `bpy.ops.mesh.subdivide(number_cuts=3)` to produce a 4 × 4 quad grid (the cut result reads more clearly on a subdivided plane than on a single quad), return to Object Mode. Name the plane `L06_KnifeProjectPlane`. Add a Circle primitive (radius 0.4, fill_type='NOTHING', 16 verts) at world position (0, 0, 1) (1 m above the plane). Name it `L06_KnifeProjectCircle`.
- **Panel 1 setup:** Both objects in default state. Select `L06_KnifeProjectCircle` (orange outline) so the viewer's eye is drawn to the cutter. View user-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 6.0, view_location centered at (0, 0, 0.5) to frame both objects. Render to `_temp_lesson_06_35_p1.png` (1280x720). **Temp file retained on disk** for sub-chat B composite (no `os.remove` at sub-chat A close).
- **Panel 3 setup:** With both objects still in the scene, do the knife-project sequence: in Object Mode, select `L06_KnifeProjectCircle` first then ctrl+click `L06_KnifeProjectPlane` to make the plane active (selection order matters for `knife_project`; the active object is the target, the other selected objects are the knives). Enter Edit Mode on the plane via `bpy.ops.object.mode_set(mode='EDIT')`. Select all on the plane via `bpy.ops.mesh.select_all(action='SELECT')`. Apply `bpy.ops.mesh.knife_project(cut_through=False)` to project the circle's edges onto the plane mesh. Return to Object Mode. Hide `L06_KnifeProjectCircle` (`obj.hide_viewport = True`) so panel 3 shows the plane alone with the circular edge pattern cut in. View user-perspective same as panel 1, view_distance 5.0, view_location centered on the plane (0, 0, 0). Render to `_temp_lesson_06_35_p3.png` (1280x720). **Temp file retained on disk** for sub-chat B composite.
- **Op-name verify at execution:** `bpy.ops.mesh.knife_project` requires specific selection state setup; the locked sequence is "Object Mode → select cutter circle → ctrl+click target plane → Edit Mode on plane → select all → knife_project". If the op signature differs in 5.1.1 or rejects the selection state, log the working path in the Status bullet at sub-chat A close.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme as #28, overlays axes ON floor ON cursor OFF origins OFF outline_selected OFF (consistent across both panels so the only visible difference between p1 and p3 is the cut pattern on the plane).
- **No composite in sub-chat A.** Both temps retained on disk pending sub-chat B's manual panel 2 capture and cross-sub-chat composite.

### Per-image specs · sub-chat B (3 manual Win+Shift+S captures + #35 cross-sub-chat composite)

#### #33 · `lesson_06_33_knife_tool_active.png`

- **Type:** PNG, manual Win+Shift+S, no overlay planned
- **Capture path:** Ray enters Edit Mode on any L06_* mesh (or default cube), presses K to activate Knife Tool, click-places 2-4 points along a partial cut line WITHOUT pressing Enter to confirm, then Win+Shift+S captures the viewport with the knife crosshair, placed dots, and in-progress cut line visible. Knife tool exits on Enter or right-click; Ray must snip BEFORE either of those terminations.
- **Why manual:** Knife Tool is a modal operator entered via `bpy.ops.mesh.knife_tool` that requires interactive mouse input to place cut points; BlenderMCP cannot drive the modal cutting state because the op blocks on real input events (same limitation as the #45 G+Z transient transform indicator).
- **Subject choice:** Any mesh with multiple faces available for cutting (default cube is fine; the lesson HTML implies the knife is being used on a simple mesh surface). The placed cut points should land on a clearly-visible face.
- **Target dimensions:** Whatever the Win+Shift+S snip captures; full viewport is typically 1500-1900 px wide x 800-1100 tall. INTEGRATION HTML insertion sized at native PNG dimensions (no resize needed since no overlay viewBox needs to match).
- **Output:** `lesson_06_33_knife_tool_active.png`.

#### #34 · `lesson_06_34_knife_tool_constraints.png`

- **Type:** PNG, 3-panel horizontal composite, 3844x720, no overlay planned
- **Capture path:** Ray captures 3 separate Win+Shift+S manual snips of the knife tool in 3 different modal states; Claude crops + resizes each to 1280x720 and composites via Pillow with 2 px `#FF6B00` vertical dividers (within sub-chat B, self-contained)
- **Panel 1 (Free Cutting):** Ray enters knife tool (K), draws an irregular curved cut line by placing several non-collinear cut points across a face, Win+Shift+S before confirming the cut. Manual snip saved as `_temp_lesson_06_34_p1.png` (variable dims).
- **Panel 2 (Angle Constrained · C):** Ray enters knife tool (K), presses C to toggle angle constraint (constrains to 45° increments from the previous point), draws a perfectly straight horizontal cut, Win+Shift+S before confirming. Saved as `_temp_lesson_06_34_p2.png`.
- **Panel 3 (Cut Through · Z):** Ray enters knife tool (K), presses Z to toggle cut-through mode (cuts pass through back faces of the mesh), draws a cut across a closed mesh (cube works well; the cut visibly extends through the back faces as a dashed line), Win+Shift+S before confirming. Saved as `_temp_lesson_06_34_p3.png`.
- **Why manual for all 3:** Same modal-operator reason as #33; each constraint mode (C / Z) is a sub-state within the knife modal that requires real keyboard input during the modal session.
- **Composite:** Pillow crops and resizes each panel to 1280x720 (preserving the cut line region as central focus), then composites 3 × 1280 + 2 × 2 px = 3844 × 720 with `#FF6B00` dividers between panels. Save as `lesson_06_34_knife_tool_constraints.png`. Remove the 3 temps via `os.remove`.

#### #35 · `lesson_06_35_knife_project_operation.png` (cross-sub-chat composite)

- **Type:** PNG, 3-panel horizontal composite, 3844x720, no overlay planned
- **Capture path:** Combine sub-chat A temps (panels 1 + 3, both 1280 × 720 scripted) with sub-chat B manual snip (panel 2) via Pillow composite
- **Pre-flight check at sub-chat B start:** verify both sub-chat A temp files exist on disk via `Filesystem:get_file_info` before Ray captures panel 2 (catches the case where sub-chat A closed without producing the temps; if missing, recapture via the sub-chat A scene-build path before proceeding).
- **Panel 1 (from sub-chat A):** `_temp_lesson_06_35_p1.png` (1280 × 720, scripted viewport render of circle positioned above the subdivided plane, both visible)
- **Panel 2 (manual in sub-chat B):** Ray captures the Mesh menu open in Edit Mode showing the `Knife Project` option (ideally hovered for a brighter highlight). Ray enters Edit Mode on a target mesh, opens the Mesh menu (top viewport header), scrolls to or hovers over `Knife Project`, Win+Shift+S the viewport region including the open menu. Saved as `_temp_lesson_06_35_p2.png`. Pillow crops/resizes to 1280 × 720.
- **Panel 3 (from sub-chat A):** `_temp_lesson_06_35_p3.png` (1280 × 720, scripted viewport render of the plane after `knife_project` showing the circular edge pattern cut in)
- **Why manual for panel 2 only:** the Mesh menu is a popover that closes on focus change (same precedent as Alt+E #49 and Shift+O #46); BlenderMCP cannot capture transient popover state. Panels 1 and 3 are scriptable static scene states so they live in sub-chat A.
- **Composite:** Pillow composite 3 × 1280 + 2 × 2 px = 3844 × 720 with `#FF6B00` dividers. Save as `lesson_06_35_knife_project_operation.png`. Remove all 3 panel temps via `os.remove` (both sub-chat A produced and the sub-chat B manual temp).

### ID prefix registry update (Phase 5)

- **No new PNG overlay ids added at PRODUCTION.** Both Phase 5 PNG overlay prefixes (`c28` for #28 Array Modifier panel multi-label, `c30` for #30 Spin Operation setup multi-label) are already in the ID prefix registry from initial planning; overlay specs and pixel coords deferred to Phase 5 INTEGRATION plan-lock per the c2 / c3 / c25 multi-label precedent of sizing overlays after the source PNG is in hand.
- **No SVG ids added.** Phase 5 has no SVGs per the locked Option L phase plan (SVGs concentrated in Phases 1 / 2 / 3 at #8 `pf`, #44 `sr`, #21 `dd`).

Cumulative Lesson 06 PNG overlay tally unchanged from Phase 4 INTEGRATION close: 13 PNG overlays integrated (8 positive-green full-callouts `c2` / `c3` / `c10` / `c16` / `c20` / `c45` / `c46` / `c49` + 1 positive-green composite-overlay `c25` + 1 warning-red full-callout `c23` + 3 decorative-shape-only `c13` / `c14` / `c15`); 3 PNG overlays planned but not yet integrated (`c28`, `c30`, `c43`); 0 added in Phase 5 PRODUCTION. Plan-locked PNG overlay registry total remains 13 entries (`c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49`).

### Execution cadence (sub-chats A and B)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit (applies to doc updates at each sub-chat close; image production uses BlenderMCP / manual Win+Shift+S paths instead)
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in figcaptions, alt text (both locked at Phase 5 INTEGRATION plan-lock chat, not at PRODUCTION), status bullets, or any other new prose; middle-dot (`·`) for separation
- BlenderMCP: lowercase `blender:execute_blender_code`, NO `read_factory_settings`, EEVEE_NEXT -> EEVEE fallback, `temp_override` for OpenGL renders and for `bpy.ops.screen.screenshot` full-window captures, `bpy.ops.screen.screenshot_area` available for area-scoped captures
- Locked op-name corrections to carry forward: `bpy.ops.mesh.inset` (not `inset_faces`), `bpy.ops.mesh.delete(type='FACE')` singular not plural, `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect`, Phase 4 extrude family ops (`extrude_region_move`, `extrude_region_shrink_fatten`, `extrude_faces_indiv` all verified in 5.1.1); Phase 5 new op-name verification points at execution for `bpy.ops.mesh.spin` (signature variance), `bpy.ops.mesh.knife_project` (selection state setup), and Properties editor `area.spaces.active.context = 'MODIFIER'` (enum value to confirm at execution)
- **Avoid `bpy.ops.ed.undo()` inside `temp_override` blocks** per the Phase 3 sub-chat A locked connection-drop discovery; #31 panel 2 uses spin as a forward operation with no rewind, and #35 panel 3 uses knife_project as a forward operation (panel 1 captures the pre-cut state before knife_project lands, so no rewind needed between panels)
- Pillow 12.2.0 path for composites: #31 self-contained 2-panel within sub-chat A, #34 self-contained 3-panel within sub-chat B, #35 CROSS-SUB-CHAT 3-panel composite combining sub-chat A temps with sub-chat B manual capture. Temp files named `_temp_lesson_06_NN_pN.png`; #34 and #35 temps removed via `os.remove` after composite save; #35 cross-sub-chat temps persist between sub-chats and are removed in sub-chat B after the final composite
- **NEW cross-sub-chat temp file pattern for #35:** sub-chat A produces `_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png` and explicitly does NOT remove them at sub-chat A close. Sub-chat B starts with a `Filesystem:get_file_info` verify on both temps before Ray's panel 2 capture. If either temp is missing at sub-chat B start, recapture via the sub-chat A scene-build path before proceeding. This is the first cross-sub-chat composite in Lesson 06 (Lesson 05 had no precedent); the pattern is documented here so it can be reused if other phases benefit from it.
- Phase 5 fresh scene reset at sub-chat A start per the Step 0 script above (delete `L06_ExtrudeCube` / `L06_ExtrudeSphere` / `L06_ExtrudeGrid` / `L06_ExtrudeTower` + defensive `L06_*` sweep)
- Update Placement table row state per image as each capture lands (`not captured; not integrated` → `captured; not integrated`); for #35 the row flips at sub-chat B composite close (not at sub-chat A temp creation)
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at sub-chat B close (Phase 5 PRODUCTION close) to point at Phase 5 INTEGRATION plan-lock; `session.md` not rewritten at sub-chat A close unless sub-chat B is meaningfully delayed
- Warn Ray before context tightens within an execution sub-chat; if A1 / A2 fallback split invoked, close A1 with placement-table flips for the 3 produced images and a partial Status bullet, then open A2 in a fresh chat
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → check file size with `Filesystem:get_file_info` before retrying; the c2 multi-callout commit precedent applies to any future heavy-content commit)

### Phase 5 PRODUCTION close criterion

All 8 Phase 5 images on disk in `images/`:

- 5 PNGs from sub-chat A: #28, #29, #30, #31, #32
- 3 PNGs from sub-chat B: #33, #34, #35 (with #35 produced via cross-sub-chat Pillow composite of 2 sub-chat A temps and 1 sub-chat B manual capture)
- Sub-chat A cross-sub-chat temps `_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png` removed at #35 composite close in sub-chat B

Placement table rows #28, #29, #30, #31, #32, #33, #34, #35 flipped to `captured; not integrated`. Status section gets close bullets for both sub-chats (or one combined A+B bullet if both close in the same chat per the session.md "likely 1 PRODUCTION sub-chat" speculation; the locked default is 2 sub-chats following the Phase 3 / Phase 4 precedent). Rewrite `session.md` at sub-chat B close to point at Phase 5 INTEGRATION plan-lock as the next chat.

Plan-lock close criterion: all 8 capture specs, scene configs, view rotations, output filenames, and overlay deferrals (`c28`, `c30`) locked in writing before any production work. Cross-sub-chat temp file pattern for #35 documented as a first-in-Lesson-06 precedent. Met by this section.

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

| #   | Filename                                           | Type | ID prefix | Section                 | Anchor (planned insertion point)                     | State                        |
| --- | -------------------------------------------------- | ---- | --------- | ----------------------- | ---------------------------------------------------- | ---------------------------- |
| 1   | `lesson_06_01_object_vs_edit_mode_comparison.png`  | PNG  | (none)    | `#enter-edit-mode`      | After Object Mode vs Edit Mode table                 | integrated                   |
| 2   | `lesson_06_02_edit_mode_visual_indicators.png`     | PNG  | `c2`      | `#enter-edit-mode`      | After Visual Differences in Edit Mode list           | integrated                   |
| 3   | `lesson_06_03_selection_mode_icons.png`            | PNG  | `c3`      | `#selection-modes`      | After The Selection Mode Trio introduction           | integrated                   |
| 4   | `lesson_06_04_vertex_selection_example.png`        | PNG  | (none)    | `#selection-modes`      | Within Vertex Select Mode card                       | integrated                   |
| 5   | `lesson_06_05_edge_selection_example.png`          | PNG  | (none)    | `#selection-modes`      | Within Edge Select Mode card                         | integrated                   |
| 6   | `lesson_06_06_face_selection_example.png`          | PNG  | (none)    | `#selection-modes`      | Within Face Select Mode card                         | integrated                   |
| 7   | `lesson_06_07_proportional_editing_circle.png`     | PNG  | (none)    | `#proportional-editing` | After Activating Proportional Editing card           | integrated                   |
| 8   | `lesson_06_08_proportional_falloff_comparison.svg` | SVG  | `pf`      | `#proportional-editing` | After Falloff Types table                            | integrated                   |
| 9   | `lesson_06_09_proportional_hill_creation.png`      | PNG  | (none)    | `#proportional-editing` | Within Practice Exercise: Creating a Hill            | integrated                   |
| 46  | `lesson_06_46_proportional_falloff_menu.png`       | PNG  | `c46`     | `#proportional-editing` | After Falloff Types mermaid diagram                  | integrated                   |
| 10  | `lesson_06_10_loop_tools_addon_location.png`       | PNG  | `c10`     | `#loop-tools`           | After Enabling Loop Tools Add-on instructions        | integrated                   |
| 11  | `lesson_06_11_loop_tools_circle_before_after.png`  | PNG  | (none)    | `#loop-tools`           | After Circle: Creating Perfect Rounds section        | integrated                   |
| 12  | `lesson_06_12_loop_tools_bridge_operation.png`     | PNG  | (none)    | `#loop-tools`           | After Bridge: Connecting Edge Loops section          | integrated                   |
| 47  | `lesson_06_47_loop_tools_sidebar_panel.png`        | PNG  | (none)    | `#loop-tools`           | After Loop Tools Practice Project as reference       | integrated                   |
| 13  | `lesson_06_13_box_select_in_action.png`            | PNG  | (none)    | `#advanced-selection`   | After Box Select: The Rectangular Selector card      | integrated                   |
| 14  | `lesson_06_14_circle_select_in_action.png`         | PNG  | (none)    | `#advanced-selection`   | After Circle Select: The Brush Tool card             | integrated                   |
| 15  | `lesson_06_15_lasso_select_in_action.png`          | PNG  | (none)    | `#advanced-selection`   | After Lasso Select: Freeform Selection description   | integrated                   |
| 16  | `lesson_06_16_select_similar_menu.png`             | PNG  | `c16`     | `#advanced-selection`   | After Selection by Similarity explanation            | integrated                   |
| 48  | `lesson_06_48_checker_deselect_result.png`         | PNG  | (none)    | `#advanced-selection`   | After Checker Deselect description                   | integrated                   |
| 44  | `lesson_06_44_selection_tools_reference.svg`       | SVG  | `sr`      | `#selection-tools`      | At end of section as summary                         | integrated                   |
| 17  | `lesson_06_17_inset_operation_progression.png`     | PNG  | (none)    | `#inset-outset`         | After Basic Inset Operation card                     | integrated                   |
| 18  | `lesson_06_18_inset_individual_vs_group.png`       | PNG  | (none)    | `#inset-outset`         | After Individual vs Group Inset card                 | integrated                   |
| 19  | `lesson_06_19_inset_double_technique.png`          | PNG  | (none)    | `#inset-outset`         | Within The Double Inset Technique blockquote         | integrated                   |
| 20  | `lesson_06_20_merge_by_distance.png`               | PNG  | `c20`     | `#mesh-cleanup`         | After Merge by Distance card                         | integrated                   |
| 21  | `lesson_06_21_dissolve_vs_delete.svg`              | SVG  | `dd`      | `#mesh-cleanup`         | After Dissolve vs Delete explanation                 | integrated                   |
| 22  | `lesson_06_22_limited_dissolve_before_after.png`   | PNG  | (none)    | `#mesh-cleanup`         | After Limited Dissolve: The Smart Cleanup section    | integrated                   |
| 23  | `lesson_06_23_face_orientation_overlay.png`        | PNG  | `c23`     | `#mesh-cleanup`         | After Recalculate Normals card                       | integrated                   |
| 50  | `lesson_06_50_fill_operations_comparison.png`      | PNG  | (none)    | `#mesh-cleanup`         | After Fill and Grid Fill card                        | integrated                   |
| 24  | `lesson_06_24_extrude_operation_sequence.png`      | PNG  | (none)    | `#extrude-operations`   | After Basic Extrude Operation card                   | integrated                   |
| 45  | `lesson_06_45_transform_constraint_indicators.png` | PNG  | `c45`     | `#extrude-operations`   | After Constrained Extrude explanation                | integrated                   |
| 25  | `lesson_06_25_extrude_normals_vs_regular.png`      | PNG  | (none)    | `#extrude-operations`   | After Extrude Individual vs Group mermaid            | integrated                   |
| 26  | `lesson_06_26_extrude_individual_faces.png`        | PNG  | (none)    | `#extrude-operations`   | After individual vs group table                      | integrated                   |
| 27  | `lesson_06_27_extrude_scale_technique.png`         | PNG  | (none)    | `#extrude-operations`   | After Extrude and Scale: Creating Tapers section     | integrated                   |
| 49  | `lesson_06_49_extrude_menu_alt_e.png`              | PNG  | `c49`     | `#extrude-operations`   | Within special extrude menu discussion               | integrated                   |
| 28  | `lesson_06_28_array_modifier_panel.png`            | PNG  | `c28`     | `#duplicate-array`      | After Array Modifier: Parametric Repetition workflow | not captured; not integrated |
| 29  | `lesson_06_29_array_modifier_result.png`           | PNG  | (none)    | `#duplicate-array`      | After Array Modifier Options table                   | not captured; not integrated |
| 30  | `lesson_06_30_spin_operation_setup.png`            | PNG  | `c30`     | `#spin-screw`           | After Spin: Creating Radial Geometry card            | not captured; not integrated |
| 31  | `lesson_06_31_spin_vase_creation.png`              | PNG  | (none)    | `#spin-screw`           | After Spin Settings table                            | not captured; not integrated |
| 32  | `lesson_06_32_screw_modifier_spring.png`           | PNG  | (none)    | `#spin-screw`           | After Screw Modifier: Threaded and Spiral Forms card | not captured; not integrated |
| 33  | `lesson_06_33_knife_tool_active.png`               | PNG  | (none)    | `#knife-tool`           | After Basic Knife Tool Usage card                    | not captured; not integrated |
| 34  | `lesson_06_34_knife_tool_constraints.png`          | PNG  | (none)    | `#knife-tool`           | After Knife Tool Modes and Options table             | not captured; not integrated |
| 35  | `lesson_06_35_knife_project_operation.png`         | PNG  | (none)    | `#knife-tool`           | After Knife Project: Advanced Cutting workflow       | not captured; not integrated |
| 36  | `lesson_06_36_subdivide_levels.png`                | PNG  | (none)    | `#subdivide`            | After Subdivide Warning card                         | not captured; not integrated |
| 37  | `lesson_06_37_subdivide_smoothness.png`            | PNG  | (none)    | `#subdivide`            | After Subdivide Smooth section                       | not captured; not integrated |
| 38  | `lesson_06_38_subdivide_fractal_terrain.png`       | PNG  | (none)    | `#subdivide`            | Within Subdivide Practice exercise                   | not captured; not integrated |
| 39  | `lesson_06_39_bevel_operation_interface.png`       | PNG  | (none)    | `#bevel`                | After Basic Bevel Operation card                     | not captured; not integrated |
| 40  | `lesson_06_40_bevel_segment_comparison.png`        | PNG  | (none)    | `#bevel`                | After Bevel Segments Explained card                  | not captured; not integrated |
| 41  | `lesson_06_41_edge_vs_vertex_bevel.png`            | PNG  | (none)    | `#bevel`                | After Edge Bevel vs Vertex Bevel table               | not captured; not integrated |
| 42  | `lesson_06_42_bevel_before_after_cube.png`         | PNG  | (none)    | `#bevel`                | After Design Principle blockquote                    | not captured; not integrated |
| 43  | `lesson_06_43_bevel_modifier_settings.png`         | PNG  | `c43`     | `#bevel`                | After Bevel Modifier: Non-Destructive Beveling card  | not captured; not integrated |

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
- `c25` (#25 Extrude normals vs regular, composite-overlay variant with two panel badges `REGULAR` and `ALONG NORMALS`; added at Phase 4 INTEGRATION plan-lock)
- `c28` (#28 Array Modifier panel, multi-label callouts)
- `c30` (#30 Spin Operation setup, multi-label callouts)
- `c43` (#43 Bevel Modifier settings, multi-label callouts)
- `c45` (#45 Transform constraint indicators, single colored constraint line label)
- `c46` (#46 Proportional Editing falloff menu, menu highlight)
- `c49` (#49 Extrude menu Alt+E, menu highlight)

13 PNGs identified for overlays (12 from planning plus c25 added at Phase 4 INTEGRATION plan-lock after visual review showed the two #25 panels read too similarly without per-panel labels). Remaining 34 PNGs ship as plain figures with descriptive alt text and no overlay (the screenshot or composite carries the message on its own). Additional overlays may be added during integration if a PNG turns out to need a callout.

---

## Phase plan

Option L locked 2026-05-21 (6 phases, 10/10/8/6/8/8 distribution, follows section boundaries). Ordering preserves "stop after Phase N" property: each phase closes a coherent set of sections, so the lesson remains coherent at any stopping point.

| Phase | Sections                                                          | Images (50 total)                                | Count | SVGs       | High/Med/Low | Cumulative   |
| ----- | ----------------------------------------------------------------- | ------------------------------------------------ | ----- | ---------- | ------------ | ------------ |
| 1     | `#enter-edit-mode` + `#selection-modes` + `#proportional-editing` | #1, #2, #3, #4, #5, #6, #7, #8, #9, #46          | 10    | #8 (`pf`)  | 5H / 3M / 2L | 10/50 (20%)  |
| 2     | `#loop-tools` + `#advanced-selection`                             | #10, #11, #12, #47, #13, #14, #15, #16, #48, #44 | 10    | #44 (`sr`) | 1H / 4M / 5L | 20/50 (40%)  |
| 3     | `#inset-outset` + `#mesh-cleanup`                                 | #17, #18, #19, #20, #21, #22, #23, #50           | 8     | #21 (`dd`) | 2H / 1M / 5L | 28/50 (56%)  |
| 4     | `#extrude-operations`                                             | #24, #45, #25, #26, #27, #49                     | 6     | none       | 1H / 2M / 3L | 34/50 (68%)  |
| 5     | `#duplicate-array` + `#spin-screw` + `#knife-tool`                | #28, #29, #30, #31, #32, #33, #34, #35           | 8     | none       | 0H / 1M / 7L | 42/50 (84%)  |
| 6     | `#subdivide` + `#bevel`                                           | #36, #37, #38, #39, #40, #41, #42, #43           | 8     | none       | 2H / 2M / 4L | 50/50 (100%) |

**Cadence expectation:** production + integration chats per phase, with sub-chats expected for any phase 6 or more images. Phase 1 and Phase 2 at 10 images each will likely need 3-5 sub-chats per phase (split production into 2-3 sub-chats, integration into 2-3 sub-chats). Phase 3, 5, 6 at 8 images each will likely need 2-4 sub-chats per phase. Phase 4 at 6 images matches Lesson 05 Phase 6 precedent (1 plan-lock chat plus 3 execution sub-chats). Realistic total chat count for Lesson 06 image work: 14 to 21 chats plus 1 close-out chat for handoff + archive sweep + status roll.

---

## Available section

10 of 50. Will populate as PRODUCTION chats deliver. Each entry lists file size, image dimensions, id prefix, and capture-method note (BlenderMCP / manual Win+Shift+S / PIL composite).

- #1 `lesson_06_01_object_vs_edit_mode_comparison.png` (346,439 bytes, 1922x720, no overlay prefix, PIL horizontal composite of two manual Win+Shift+S snips with 2px `#FF6B00` divider)
- #2 `lesson_06_02_edit_mode_visual_indicators.png` (418,942 bytes, 1920x1046, planned `c2` overlay at integration, BlenderMCP `bpy.ops.screen.screenshot` of full Blender window with `temp_override`; original sub-chat B manual capture lost from disk before plan-lock; sub-chat B' on 2026-05-22 recaptured script-driven)
- #3 `lesson_06_03_selection_mode_icons.png` (20,255 bytes, 720x80, planned `c3` overlay at integration, `bpy.ops.screen.screenshot_area` of 3D viewport area + Pillow header-band crop)
- #4 `lesson_06_04_vertex_selection_example.png` (779,498 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)
- #5 `lesson_06_05_edge_selection_example.png` (774,226 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)
- #6 `lesson_06_06_face_selection_example.png` (776,447 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render)
- #7 `lesson_06_07_proportional_editing_circle.png` (690,847 bytes, 1280x720, no overlay prefix, BlenderMCP OpenGL viewport render of subdivided plane with synthesized smooth-falloff displacement and synthetic Bezier-circle influence ring at `#FF6B00`)
- #8 `lesson_06_08_proportional_falloff_comparison.svg` (6,811 bytes, 800x560, id prefix `pf`, hand-authored 6-panel 2x3 SVG grid of falloff curves SMOOTH/SHARP/LINEAR/CONSTANT/SPHERE/RANDOM stroked in brand orange)
- #9 `lesson_06_09_proportional_hill_creation.png` (580,948 bytes, 3844x720, no overlay prefix, PIL 3-panel horizontal composite of BlenderMCP OpenGL viewport renders with 2px `#FF6B00` vertical dividers between panels)
- #46 `lesson_06_46_proportional_falloff_menu.png` (70,253 bytes, 1026x450, planned `c46` overlay at integration, manual Win+Shift+S of Shift+O Proportional Falloff pie menu showing 8 falloff options)

---

## Missing section

40 of 50:

- Phase 1: (none; all 10 images on disk; sub-chats A 2026-05-21, B 2026-05-22, C 2026-05-22 all closed)
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

**PNG overlay ids (13 planned):**

- `c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49` (see PNG overlay ids planned list in the Placement table totals above for which PNG each covers)

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

**Phase 5 PRODUCTION sub-chat A.** Phase 5 PRODUCTION plan-lock CLOSED 2026-05-23 with new `Phase 5 PRODUCTION plan` section written into this doc between `Phase 4 INTEGRATION plan` and `Locked rules` (28,583 byte addition; file size 148,096 -> 176,679). All 8 image production specs locked: 5 BlenderMCP captures (#28 / #29 / #30 / #31 / #32), 3 manual Win+Shift+S captures (#33 / #34 / #35 panel 2), #34 within-sub-chat 3-panel Pillow composite, and #35 cross-sub-chat 3-panel Pillow composite. **2 sub-chats locked** following Phase 3 / Phase 4 PRODUCTION precedent (scripted vs manual split): sub-chat A for the 5 BlenderMCP captures plus 2 cross-sub-chat temp files (`_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png` for the Knife Project setup and result panels); sub-chat B for the 3 manual captures plus the #34 and #35 composites. NEW cross-sub-chat temp file pattern introduced as first-in-Lesson-06 precedent (sub-chat B starts with `Filesystem:get_file_info` verify on the two temps before Ray's panel 2 capture). 34 of 50 produced; 34 of 50 integrated (counts unchanged from Phase 4 INTEGRATION close since plan-lock is plan-lock only).

Read `session.md` first (rewritten at this plan-lock close to point at Phase 5 PRODUCTION sub-chat A), then the new `Phase 5 PRODUCTION plan` section of this `lesson_06_integration_progress.md` (per-image specs for #28 / #29 / #30 / #31 / #32 plus the two #35 temp-file captures; the sub-chat A / sub-chat B split locked language; the Step 0 fresh scene reset list deleting Phase 4 L06_* leftovers L06_ExtrudeCube / L06_ExtrudeSphere / L06_ExtrudeGrid / L06_ExtrudeTower; the op-name verification points logged for sub-chat A execution), then `lesson_06_image_requirements.md` entries #28 / #29 / #30 / #31 / #32 / #35 if any per-image spec needs cross-reference against the original requirements doc.

**Sub-chat A scope:** 5 BlenderMCP captures + 2 cross-sub-chat temp files. Captures: #28 Array Modifier panel screenshot (single-pose, `c28` overlay deferred to INTEGRATION), #29 array linear demo (single-pose viewport render), #30 Spin tool UI setup (single-pose, `c30` overlay deferred to INTEGRATION), #31 Spin vase creation (2-panel composite), #32 Screw modifier result (single-pose viewport render). Temp files: #35 panels 1 + 3 saved as `_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png` for sub-chat B handoff (do not remove at sub-chat A close, deviation from the standard within-sub-chat temp-file lifecycle). Step 0 fresh scene reset deletes Phase 4 L06_* leftovers (L06_ExtrudeCube / L06_ExtrudeSphere / L06_ExtrudeGrid / L06_ExtrudeTower). Op-name verification points to confirm during execution: `bpy.ops.mesh.spin` signature variance (#31 panel 2), `bpy.ops.mesh.knife_project` selection state setup (#35 panel 3 temp file), Properties editor `area.spaces.active.context = 'MODIFIER'` enum value (#28).

**Sub-chat A close criterion:** all 5 sub-chat A PNGs on disk in `images/` (#28 / #29 / #30 / #31 / #32) at expected dimensions per the locked Phase 5 PRODUCTION plan specs; 2 cross-sub-chat temp files on disk for sub-chat B handoff (`_temp_lesson_06_35_p1.png` and `_temp_lesson_06_35_p3.png`); placement-table rows for #28 / #29 / #30 / #31 / #32 flipped to `captured; not integrated`; Status section sub-chat A close bullet appended; bottom-of-doc Next chat section repointed at Phase 5 PRODUCTION sub-chat B execution; `session.md` rewritten to point at same. If sub-chat A tightens after 2-3 captures land, fall back to A1 (#28 / #29 / #30) / A2 (#31 / #32 + #35 temps) split point per the locked plan; A2 carries the two cross-sub-chat #35 temp files since they share scene state with #31 / #32.

**Alternative next steps if Ray wants something other than Phase 5 PRODUCTION sub-chat A:**

- **Lesson 06 mid-lesson browser QA pass** (verify all 34 integrated figures render correctly in browser before starting Phase 5 PRODUCTION). Recommended sanity check now that parity is locked.
- **Lesson 05 retroactive browser QA pass paired with Lesson 06 QA pass.** Optional cleanup chat per Ray's 2026-05-23 direction (lesson 5 cleanup deferred to be paired with lesson 6 QA / cleanup).
- **Phase 6 PRODUCTION plan-lock paired with Phase 5 sub-chat A.** Not recommended; PRODUCTION execution and plan-lock are different work shapes and packing Phase 6 plan-lock in alongside Phase 5 sub-chat A execution risks dragging both.
- **Non-Blender-course work.** Phase 5 PRODUCTION plan-lock is cleanly closed; sub-chat A can pick up any future chat without losing context.
