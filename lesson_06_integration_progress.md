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
- 2026-05-24 — Phase 5 PRODUCTION sub-chat A executed across A1 / A2 / A3 (locked A1 / A2 fallback invoked mid-run after A1 landed the 3 setup captures, then A3 added to close out the #35 p3 rebuild and the doc-update / handoff work A2 left open). Step 0 fresh scene reset cleared the 4 Phase 4 L06_* leftovers. **All 5 BlenderMCP captures landed on disk:** #28 `lesson_06_28_array_modifier_panel.png` (524,731 bytes, A1, full-window `bpy.ops.screen.screenshot` with Properties editor switched to Modifiers tab via `area.spaces.active.context = 'MODIFIER'` and Array Modifier added to `L06_ArrayCylinder` with count=10 / `relative_offset_displace[0]=1.5`); #29 `lesson_06_29_array_modifier_result.png` (781,875 bytes, A1, single-pose OpenGL viewport render of the same `L06_ArrayCylinder` at view_distance 7.5 framing the 10-cylinder array); #30 `lesson_06_30_spin_operation_setup.png` (522,254 bytes, A1, side ortho render of `L06_SpinProfile` with 3D cursor visible at origin per the `cursor ON` overlay deviation locked for this image); #31 `lesson_06_31_spin_vase_creation.png` (562,813 bytes, A2, 2562x720 2-panel composite with side ortho profile in panel 1 + user-perspective WIREFRAME shading on the 24-step spin result in panel 2); #32 `lesson_06_32_screw_modifier_spring.png` (673,993 bytes, A2, single-pose user-perspective render of the `L06_ScrewCircle` + Screw Modifier 5-iteration helical spring). **Cross-sub-chat temp files retained on disk for sub-chat B handoff:** `_temp_lesson_06_35_p1.png` (730,851 bytes, A2 re-render with `plane.show_wire=True` on a bmesh-rebuilt subdivided plane, circle visible above) and `_temp_lesson_06_35_p3.png` (674,108 bytes, A3 re-render after re-applying the corrected knife_project sequence on the rebuilt plane, then `circle.hide_viewport=True`, then user-perspective render at view_distance 5.0 / view_location (0, 0, 0); plane mesh went 25/40/16 -> 41/60/20, the +16 verts being the full 16-segment circle ring and the +4 faces being the central cell split into 4 pieces by the inscribed circle outline). All EEVEE_NEXT -> EEVEE fallback engaged (locked rule), SOLID shading except #31 panel 2 WIREFRAME, theme vertex_size=5 edge_width=2, overlays axes ON floor ON cursor OFF (except #30 cursor ON) origins OFF outline_selected OFF. **Op-name verification results (all three Phase 5 verification points resolved):** `bpy.ops.mesh.spin(steps=24, dupli=False, angle=2*pi, center=(0,0,0), axis=(0,0,1))` works in 5.1.1 first try (verified A2 on #31 panel 2, full canonical 5-arg signature, no positional fallback needed); `bpy.ops.mesh.knife_project(cut_through=False)` works in 5.1.1 but with the selection-state caveat below (verified A3 on #35 p3 rebuild); Properties editor `area.spaces.active.context = 'MODIFIER'` enum value confirmed (verified A1 on #28, no `'MODIFIERS'` plural fallback needed). **New Phase 5 PRODUCTION discoveries (4) to carry forward at lesson close into locked rules / style-guide v4 addenda:** (1) **Screw Modifier ignores `obj.rotation_euler`** when computing its helix axis; the modifier reads the source mesh in local space and treats object-level rotation as if applied separately, so a circle rotated 90° on X via `obj.rotation_euler = (radians(90), 0, 0)` still produces a flat-disc spring rather than a vertical helix. Working path: `bpy.ops.object.transform_apply(rotation=True)` on the circle BEFORE adding the Screw Modifier so the rotation is baked into the mesh data (A2 hit this on #32 first attempt). (2) **`bpy.ops.mesh.subdivide` needs a VIEW_3D `temp_override`** when called from inside `blender:execute_blender_code`; without the override the operator no-ops silently or raises a context error. A2 hit this rebuilding the plane for #35 panel 1; fix is to wrap subdivide in the same `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` pattern used for OpenGL renders. For the #35 plane A2 ultimately switched to a direct bmesh rebuild as a cleaner alternative, but the subdivide + temp_override path is documented for future use cases where bmesh would be heavier. (3) **Multi-object Edit Mode breaks `bpy.ops.mesh.knife_project`:** if both the target plane and the cutter circle are selected when entering Edit Mode, Blender enters multi-object Edit Mode and `knife_project` then sees the cutter as part of the edit scope (not as an external cutter) and the projection produces zero new geometry on the target. Working sequence: Object Mode → `bpy.ops.object.select_all(action='DESELECT')` → select TARGET plane alone → `bpy.context.view_layer.objects.active = plane` → `bpy.ops.object.mode_set(mode='EDIT')` (plane alone enters edit) → INSIDE Edit Mode call `cutter.select_set(True)` to add the cutter to the selection set without bringing it into multi-object edit (`bpy.context.objects_in_mode` stays `['L06_KnifeProjectPlane']` while `bpy.context.selected_objects` becomes `['L06_KnifeProjectPlane', 'L06_KnifeProjectCircle']`) → `bpy.ops.mesh.select_all(action='SELECT')` on the plane geometry → `bpy.ops.mesh.knife_project(cut_through=False)` under VIEW_3D `temp_override` (verified A3 on #35 p3). (4) **`plane.show_wire = True` required for the knife_project cut to read in SOLID shading**: without `show_wire` the post-knife_project cut edges blend into the face fill in SOLID shading and the cut pattern is invisible at thumbnail scale; with `show_wire` ON the cut edges render as dark wireframe overlay against the SOLID-shaded fill, making the cut read clearly (locked for both #35 p1 and p3). **Additional A3 finding (rebuild ergonomics, narrower scope than the 4 discoveries above):** assigning `region_data.view_rotation = Euler((0, 0, 0)).to_quaternion()` does NOT synchronously update the view matrix that `knife_project` reads from; the operator returns `{'FINISHED'}` but produces zero mesh delta. Working path is `bpy.ops.view3d.view_axis(type='TOP')` inside a VIEW_3D `temp_override`, which forces the operator-level view-state sync (A3 hit this rebuilding p3 from TOP ortho for a straight-down projection; first attempt with `view_rotation` assignment alone got `{'FINISHED'}` + zero delta, switched to `view_axis` operator and got the clean 41/60/20 cut result). Placement table rows #28 / #29 / #30 / #31 / #32 flipped to `captured; not integrated`. **Phase 5 PRODUCTION sub-chat A CLOSED** with all 5 sub-chat A PNGs on disk plus both `_temp_lesson_06_35_p*.png` retained for sub-chat B's cross-sub-chat composite. 39 of 50 lesson images produced overall (34 prior + #28 / #29 / #30 / #31 / #32); 34 of 50 integrated (count unchanged from Phase 4 INTEGRATION close since sub-chat A is PRODUCTION only). Sub-chat B pending: 3 manual Win+Shift+S captures (#33 / #34 / #35 panel 2) + #34 within-sub-chat 3-panel Pillow composite + #35 cross-sub-chat 3-panel Pillow composite combining the two A-produced temps with Ray's panel 2 capture.
- 2026-05-25 — Phase 5 PRODUCTION sub-chat B executed. **All 3 manual Win+Shift+S captures landed on disk:** #33 `lesson_06_33_knife_tool_active.png` (639,336 bytes, native snip dims, single manual snip of the K-active knife modal state with crosshair, placed dots, and in-progress cut line visible on the default cube); #34 `lesson_06_34_knife_tool_constraints.png` (687,313 bytes, 3844x720, Pillow 3-panel composite of Free / Angle-constrained / Cut-through modal-state snips with 2px `#FF6B00` dividers); #35 `lesson_06_35_knife_project_operation.png` (1,132,765 bytes, 3844x720, Pillow 3-panel cross-sub-chat composite combining sub-chat A's `_temp_lesson_06_35_p1.png` + Ray's manual panel 2 snip of the Mesh menu open with Knife Project hovered + sub-chat A's `_temp_lesson_06_35_p3.png` with 2px `#FF6B00` dividers). **Pre-flight check passed:** `Filesystem:get_file_info` confirmed both cross-sub-chat temps intact from sub-chat A handoff (`_temp_lesson_06_35_p1.png` 730,851 bytes, `_temp_lesson_06_35_p3.png` 674,108 bytes; no sub-chat A scene-build fallback needed). **All 6 panel temps removed via `os.remove`** after composite save: the 3 #34 panel temps at #34 composite close; the 3 #35 panel temps (2 A-produced + 1 B-manual) at #35 composite close. **First-pass capture pass rate was 1 of 4** (the 1-of-4 manual-capture rescue surfaced 4 of the 6 discoveries below): #33 landed clean on Ray's first snip; #34 p1 (Free) was marginal at sub-chat-internal review (only 2 near-vertical cut dots, visually indistinguishable from #33 at thumbnail scale); #34 p2 (Angle) used the spec's `C` key but the modal status bar read `Angle Constraint: (Off)` since `C` actually toggles Cut Through in 5.1.1; #34 p3 (Cut Through) was never captured since `Z` puts the modal into Z-axis lock (vertical blue constraint line) rather than cut-through; #35 p2 captured the knife modal with Z-axis constraint active instead of the open Mesh menu popover. All 4 marginal/wrong snips recaptured on Ray's second pass after the keybinding correction (discovery (1) below) and the Mesh menu popover capture path correction (discovery (5) below), then composited clean. **New Phase 5 PRODUCTION discoveries (6) to carry forward at lesson close into locked rules / style-guide v4 addenda:** (1) **Blender 5.1.1 knife-tool modal keybinding mismatch with the locked Phase 5 plan-lock spec:** the locked spec had `C = angle constraint` and `Z = cut through`; the actual modal bindings in 5.1.1 are `A Angle Constraint · C Cut Through · X / Y / Z Axis Lock` (visible in the modal status bar at the bottom of the viewport during knife-active state). Locked correction for any future knife-tool capture work: **A for angle constraint** (status bar reads `Angle Constraint: 0.00 (30.00) (On)` when toggled), **C for cut-through** (status bar reads `Cut Through: On`), **Z for axis-lock** (renders as a vertical blue constraint line through the viewport). The pre-existing per-image spec text in the Phase 5 PRODUCTION plan section's #34 block retains the old keybindings as a historical capture of the pre-correction state; the corrected bindings live here in the Status bullet for forward use and fold into style-guide v4 addenda at lesson close. (2) **Modal-status-bar-as-truth for manual modal captures:** the bottom-of-viewport modal status bar is the authoritative source for actual key bindings in any given Blender version, not the locked spec text or AI prompt language. Reading the status bar mid-capture (and including it in the snip frame so downstream review can verify) is now part of the locked manual-capture cadence for any modal operator. The 1-of-4 first-pass rate this sub-chat was rescued by Ray's snip showing the status bar binding strings, which let the keybinding mismatch get diagnosed from a single screenshot rather than requiring a keymap-preferences dig or a fresh Blender launch. (3) **First-pass marginal-read rejection precedent for manual composites:** #34 p1 with only 2 near-collinear cut dots looked visually indistinguishable from #33 (knife-active single-pose) when previewed at panel scale, even though it technically matched its locked spec. Locked criterion now: free-cutting panels need **4 to 5 non-collinear cut dots forming an obvious zigzag or curve across the face** so the freeform nature reads at thumbnail scale and contrasts cleanly with the constrained-cut panels in the composite. Apply this read-rejection check to any future multi-panel manual composite at sub-chat-internal review BEFORE the composite step (cheap to recapture pre-composite; expensive to recapture post-composite). (4) **Alt+Z X-ray ON before knife activation for Cut-Through readability in SOLID shading:** without X-ray, the dashed back-face cut line that Cut Through mode produces blends visually into the SOLID-shaded face fill at panel scale and reads as no different from a regular cut. Working sequence: `Alt+Z` (X-ray ON) → `K` (knife) → `C` (cut through, confirm via status bar `Cut Through: On`) → draw cut across the cube silhouette so the dashed segment spans visible back-face territory → Win+Shift+S before confirming the cut. The X-ray ON state itself reads as "seeing through the mesh" in the snip and reinforces the cut-through educational message even when the dashed line is subtle. (5) **Win+Shift+S overlay freezes the screen on Win 11, preserving transient popover state for capture:** the locked spec for #35 panel 2 assumed the Mesh menu popover would close on focus change before Win+Shift+S could capture it (same precedent assumption that drove #49 Alt+E and #46 Shift+O to manual-only paths). Sub-chat B confirmed that on Windows 11, **as long as the popover is open and the cursor is hovering the target row (no click-away to defocus first), triggering Win+Shift+S freezes the screen on overlay and the open popover state is preserved through the rectangle-select snip**. Sequence: top viewport header → click `Mesh` menu → hover `Knife Project` row → Win+Shift+S directly (no defocus first) → drag selection rectangle around the open menu and surrounding viewport context. This is now a documented capture path for any popover / pie-menu UI and complements the Phase 1 sub-chat B `bpy.ops.screen.screenshot_area` finding as the manual alternative for transient UI specifically. (6) **Cross-sub-chat composite pattern validated end-to-end (first-in-Lesson-06):** the locked #35 cross-sub-chat composite recipe ran clean: sub-chat A produced and retained `_temp_lesson_06_35_p1.png` + `_temp_lesson_06_35_p3.png` on disk; sub-chat B opened with the locked `Filesystem:get_file_info` pre-flight check (both temps confirmed at expected bytes), Ray's panel 2 capture landed (after one recapture per discovery (1) / (5)), Pillow composited the 3 panels at 3844x720 with 2px `#FF6B00` dividers, and all 3 panel temps (2 A-produced + 1 B-manual) were removed via `os.remove` at composite save. No rebuild via the sub-chat A scene-build fallback path was needed. Pattern is reusable for any future phase where a multi-panel composite has a mix of scriptable and manual panels that would otherwise force a single chat to carry both work shapes. Placement table rows #33 / #34 / #35 flipped to `captured; not integrated`. **Phase 5 PRODUCTION CLOSED** with all 8 Phase 5 images on disk (#28 524,731 / #29 781,875 / #30 522,254 / #31 562,813 / #32 673,993 / #33 639,336 / #34 687,313 / #35 1,132,765 bytes). 42 of 50 lesson images produced overall (39 prior + #33 / #34 / #35); 34 of 50 integrated (count unchanged from Phase 4 INTEGRATION close since Phase 5 PRODUCTION is PRODUCTION only). Sub-chat B work was light-touch BlenderMCP-wise (3 manual captures + 4 manual recaptures by Ray + 2 Pillow composite runs via `blender:execute_blender_code` + 1 pre-flight `Filesystem:get_file_info` pair + 3 placement-table flips + this Status bullet + a Next chat section rewrite + a `session.md` full rewrite). Next chat: Phase 5 INTEGRATION plan-lock.
- 2026-05-25 — Phase 5 INTEGRATION plan-lock (resumed from interrupted plan-lock chat). Read `session.md` (Phase 5 PRODUCTION sub-chat B CLOSED bullet; Phase 5 INTEGRATION plan-lock as next chat) and `lesson_06_phase5_integration_planlock_HANDOFF.md` (carries locked decisions from the interrupted chat: sub-chat split, bottom-up order, 8 anchor key phrases with grep counts, c28 / c30 overlay coord tables, composite-overlay visual review, #34 keybinding tension workaround, ID prefix registry status). Read the `Phase 4 INTEGRATION plan` section of this doc as structural template for the new `Phase 5 INTEGRATION plan` section. Re-verified all 8 anchor key phrases grep-unique against `lesson_06_edit_mode_essentials.html` (current size 211,972 bytes / 3,466 lines): #28 line 2470, #29 line 2520, #30 line 2617, #31 line 2666, #32 line 2712, #33 line 2831, #34 line 2886, #35 line 2914 (all count=1). Locked bottom-up execution order **`#35 → #34 → #33 → #32 → #31 → #30 → #29 → #28`** matching descending document line order. Drafted 3-5 line `oldText` anchors for all 8 figures plus alt text and figcaption prose (zero new em-dashes, middle-dot separators, pre-existing en-dashes in source HTML preserved verbatim through anchors). Locked c28 overlay coords (viewBox 1920x1046, 3 callouts: `COUNT 10` rect at panel-row level, `RELATIVE OFFSET X 1.5` rect at offset-row level, `MERGE` checkbox-row rect, all positive-green `#4ADE80` with `#0f1a14` dark text per the c25 composite-overlay precedent) and c30 overlay coords (viewBox 1280x720, 3 callouts: `3D CURSOR` ellipse at origin, `PROFILE EDGE` ellipse on the visible profile, `SPIN AXIS` ellipse aligned with the Z axis, all positive-green) per the Pillow band scan results carried over from the handoff doc. **Composite PNG visual review** of #31 (2-panel spin), #34 (3-panel knife constraints), and #35 (3-panel knife project): all 3 panels of each composite read distinctly at thumbnail scale (knife constraints panels differ via cut dot count + status bar binding text + X-ray-on state; knife project panels differ via plane wireframe-on state vs hovered Mesh menu vs final cut result; spin panels differ via side ortho profile vs user-perspective wireframe spin result), **no new composite-overlay needed** beyond the c25 precedent already established at Phase 4 INTEGRATION plan-lock. **#34 keybinding tension workaround locked:** the lesson body Knife Tool Modes table lists pre-5.1.1 modal bindings (`C = angle constraint`, `Z = cut through`) while the actual 5.1.1 modal status bar shows `A = angle constraint, C = cut through, Z = axis lock` (per Phase 5 PRODUCTION sub-chat B discovery (1)). For #34 the alt text and figcaption **describe the modal states visually without naming keys**, sidestepping the table-vs-figure mismatch; the lesson-body keybinding tension is folded into the style-guide v4 addenda pending list at lesson close. **No new IDs registered:** `c28` and `c30` were already reserved at Phase 5 PRODUCTION plan-lock; no new SVGs (Phase 5 has no SVGs per Option L); no new PNG overlay ids beyond c28 / c30. Wrote new `Phase 5 INTEGRATION plan` section between `Phase 5 PRODUCTION plan` and `Locked rules` (post-commit progress-doc file size 222,383 bytes; net delta +27,784 from 194,599 pre-edit baseline). Locked sub-chat split as **1 sub-chat for all 8 figures** with **fallback split point at 5a (#35 + #34 + #33 + #32) / 5b (#31 + #30 + #29 + #28)** if the chat tightens mid-execution; estimated HTML byte delta +15-18 KB per the Phase 4 INTEGRATION precedent at +8,909 bytes (Phase 5 has 8 figures vs Phase 4's 6 figures plus 2 new 3-callout overlays c28 / c30 vs Phase 4's c45 / c49 single-callout pair, so the per-figure overlay cost is higher). 42 of 50 lesson images produced overall, 34 of 50 integrated (counts unchanged from Phase 5 PRODUCTION close since plan-lock is plan-lock only). Cumulative Lesson 06 PNG overlay tally projects to 15 after Phase 5 INTEGRATION close (13 currently integrated + c28 + c30). Bottom-of-doc Next chat repointed at Phase 5 INTEGRATION sub-chat 1 execution. `session.md` rewritten to point at same. **Plan-lock chat workflow note:** original plan-lock chat was interrupted before any commits landed; this resume chat read the handoff doc, executed the 5 pending edits (insert new plan section, append this Status bullet, rewrite Next chat section, rewrite `session.md`; 5th edit is documented no-op since no placement-table edits happen at plan-lock). Next chat: Phase 5 INTEGRATION sub-chat 1 (or 5a if Ray prefers the smaller split from the open).
- 2026-05-25 — Phase 5 INTEGRATION sub-chat 1 executed. All 8 Phase 5 figures integrated into `lesson_06_edit_mode_essentials.html` in the locked bottom-up order #35 → #34 → #33 → #32 → #31 → #30 → #29 → #28. Per-figure HTML byte deltas: #35 +963, #34 +1,004, #33 +706, #32 +699, #31 +875, #30 +3,487 (c30 multi-callout overlay, three positive-green callouts SPIN AXIS / PROFILE EDGE / 3D CURSOR with straight horizontal leaders aimed left to the badge column at y=110 / y=360 / y=567), #29 +629, #28 +3,667 (c28 multi-callout overlay, three positive-green callouts COUNT / RELATIVE OFFSET / MERGE with diagonal leaders converging from the right-side Properties panel rows up-left to the top-of-image badge row at y=87-133). Total HTML net delta 211,972 → 224,002 bytes (+12,030), landing in the lower half of the +12-15 KB plan estimate and well under the +15-18 KB outer-bound estimate carried over from the plan-lock Status bullet. All 8 dry-run-then-commit pairs landed first try, no MCP timeouts, no anchor mismatches; #32's bare `</ol></div><table>` 3-token tail-pattern matched uniquely as planned (the preceding `Adjust <strong>Iterations</strong> (how many full rotations)` line grounded the anchor). **c28 and c30 multi-callout overlays successfully inlined** following the c2 multi-label precedent: per-overlay aria-labelledby title+desc pair (`c28-title c28-desc` / `c30-title c30-desc`), per-callout ellipse ids (`c28-count` / `c28-relativeoffset` / `c28-merge`; `c30-axis` / `c30-profile` / `c30-cursor`), structural author comments before each callout group (e.g. `<!-- COUNT callout pointing at the Count integer field -->`), all coordinates inlined verbatim from the plan-lock Pillow scan results without any post-commit coord adjustment; in-browser visual coord validation against actual PNG pixel positions deferred to the mid-lesson browser QA pass (cheap to confirm there, no risk in committing the locked plan-lock coords as-is given the c45 / c49 / c25 Phase 4 precedent of plan-lock Pillow scans landing pixel-accurate first-try). **#34 keybinding-tension workaround applied as planned**: alt text and figcaption describe the three modal states visually (freeform zigzag / angle-constrained straight cut / cut-through with X-ray on) without naming the `A` / `C` / `Z` keys, sidestepping the lesson-body Knife Tool Modes table's pre-5.1.1 `C=angle, Z=cut-through` listing vs the captured PNG's corrected 5.1.1 modal bindings (per Phase 5 PRODUCTION sub-chat B discovery (1)); the figcaption explicitly defers to the table for active keys ("the lesson body table above lists the active keys for each mode") so a future table edit can land without breaking figure copy. Alt text and figcaptions transferred verbatim from the locked plan; no em-dash drift, all new separators middle-dot (·), pre-existing en-dashes in source HTML preserved verbatim through anchors. Placement table rows #28 / #29 / #30 / #31 / #32 / #33 / #34 / #35 all flipped to `integrated` in a single 8-edit batch (zero net byte delta on the progress doc, confirmed via `Filesystem:get_file_info` size unchanged at 227,997 bytes pre- and post-batch; the `captured; not integrated     ` and `integrated                   ` 29-char column-padding precedent from Phase 4 INTEGRATION sub-chat 1's 6-edit table-flip batch held cleanly). **Phase 5 INTEGRATION COMPLETE**; 42 of 50 lesson images integrated, matching the produced count for the first time since Phase 4 INTEGRATION close. Cumulative Lesson 06 PNG overlay tally across the integrated set: 10 positive-green full-callouts (c2, c3, c10, c16, c20, c28 NEW, c30 NEW, c45, c46, c49) + 1 positive-green composite-overlay (c25) + 1 warning-red full-callout (c23) + 3 decorative-shape-only (c13, c14, c15) = 15 PNG overlays integrated (up from 13 at Phase 4 INTEGRATION close, exactly matching the plan-lock projection). No new IDs registered (`c28` and `c30` already in the registry from initial planning; no new SVGs since Phase 5 has none per Option L). Sub-chat 1 was sufficient; the 5a / 5b fallback split was not invoked. Bottom-of-doc Next chat repointed at Phase 6 PRODUCTION plan-lock. `session.md` rewritten to point at same. Next chat: Phase 6 PRODUCTION plan-lock.
- 2026-05-25 — Phase 6 PRODUCTION plan-lock. Read `session.md` (Phase 5 INTEGRATION sub-chat 1 CLOSED bullet; Phase 6 PRODUCTION plan-lock as next chat), the Status section of this doc through the 2026-05-25 Phase 5 INTEGRATION sub-chat 1 close bullet, `lesson_06_image_requirements.md` entries #36 / #37 / #38 / #39 / #40 / #41 / #42 / #43 (Phase 6's 8 images per Option L), and the `#subdivide` and `#bevel` slices of `lesson_06_edit_mode_essentials.html` (current size 224,002 bytes / 3,481 lines; section anchors confirmed at `#subdivide` line 3071, `#bevel` line 3239, `#lesson-summary` line 3478, 0/4/8-space indentation depth matching prior phases). Used the `Phase 5 PRODUCTION plan` section as structural template. **Locked 2 sub-chats** following Phase 3 / Phase 4 / Phase 5 PRODUCTION precedent (scripted vs manual split): **sub-chat A** for all 7 BlenderMCP captures (#36 / #37 / #38 / #40 / #41 / #42 / #43) with A1 / A2 fallback split point on the section + geometry boundary (A1 = #36 + #37 + #38 subdivide trio with plane geometry; A2 = #40 + #41 + #42 + #43 bevel quartet with cube geometry); **sub-chat B** for the single manual Win+Shift+S capture (#39 Ctrl+B bevel modal active state; smallest manual sub-chat in Lesson 06 to date vs Phase 4 sub-chat B at 2 manual + Phase 5 sub-chat B at 3 manual + 2 composite runs). Sub-chat A is the largest scripted PRODUCTION sub-chat in Lesson 06 to date at 7 captures + 5 Pillow composites (vs Phase 5 sub-chat A at 5 final captures + 1 composite + 2 cross-sub-chat temps); A1 / A2 fallback likelihood is correspondingly higher this phase. **Key spec deviations from Phase 5 default config:** (a) #36 uses TOP ortho view via `bpy.ops.view3d.view_axis(type='TOP')` inside VIEW_3D `temp_override` per Phase 5 sub-chat A discovery (5); (b) #36 and #38 use WIREFRAME OVERLAY ON (`space_data.overlay.show_wireframes = True`) so topology reads against face fill; (c) #42 uses MATCAP viewport shading (single Phase 6 deviation from default SOLID) so bevel highlights catch realistically and the physically-plausible pedagogical message reads at panel scale; (d) #43 reuses the #28 full-window `bpy.ops.screen.screenshot` recipe with Properties editor set to MODIFIER context via the verified `area.spaces.active.context = 'MODIFIER'` enum value. **Op-name verification points logged for sub-chat A execution** (all four to log working values in the sub-chat A close Status bullet): `bpy.ops.mesh.subdivide(fractal=N, fractal_along_normal=N, seed=N)` signature in 5.1.1 with `bpy.ops.transform.vertex_random(offset=0.5)` after plain subdivide as the fallback path (#38); `bpy.ops.mesh.bevel(offset=W, segments=N, affect='EDGES'/'VERTICES')` signature in 5.1.1 with `offset_type='OFFSET'` explicit enum as the fallback if `offset` kwarg fails (#40 / #41 / #42); Bevel Modifier attribute names `mod.width` / `mod.segments` / `mod.angle_limit` / `mod.limit_method` / `mod.use_clamp_overlap` in 5.1.1 with `dir(mod)` query as the diagnostic path if any attribute raises `AttributeError` (#43); MATCAP `studio_light` enum value in 5.1.1 with `[m.name for m in bpy.context.preferences.studio_lights if m.type == 'MATCAP']` query as the diagnostic path (#42). **New `L06_*` object names introduced this phase** (5 total): `L06_SubdivPlane` (#36), `L06_SmoothEdge` (#37), `L06_FractalPlane` (#38), `L06_BevelCube` (#40 / #41 / #42 shared), `L06_BevelModCube` (#43). Step 0 fresh scene reset clears the 5 Phase 5 L06_* leftovers (`L06_ArrayCylinder` / `L06_SpinProfile` / `L06_ScrewCircle` / `L06_KnifeProjectPlane` / `L06_KnifeProjectCircle`) plus defensive `L06_*` sweep. **ID prefix registry update minimal:** no new PNG overlay ids added at PRODUCTION (`c43` already reserved from initial planning; multi-label overlay specs and pixel coords deferred to Phase 6 INTEGRATION plan-lock per c2 / c3 / c25 / c28 / c30 multi-label precedent of sizing overlays after the source PNG is in hand); no SVG ids added (Phase 6 has no SVGs per Option L; SVGs concentrated in Phases 1 / 2 / 3 at `pf` / `sr` / `dd`). Cumulative Lesson 06 PNG overlay tally unchanged from Phase 5 INTEGRATION close: 15 integrated + 1 planned (`c43`); plan-locked PNG overlay registry total remains 13 entries. Wrote new `Phase 6 PRODUCTION plan` section between `Phase 5 INTEGRATION plan` and `Locked rules` (post-commit progress-doc file size 262,243 bytes; net delta +34,246 from 227,997 pre-edit baseline). 42 of 50 lesson images produced overall, 42 of 50 integrated (counts unchanged from Phase 5 INTEGRATION close since plan-lock is plan-lock only). **Phase 6 closes ALL of Lesson 06 PRODUCTION work at sub-chat B close** (50 of 50 produced); only Phase 6 INTEGRATION remains for full Lesson 06 image-work closeout. Bottom-of-doc Next chat repointed at Phase 6 PRODUCTION sub-chat A execution. `session.md` rewritten to point at same. Next chat: Phase 6 PRODUCTION sub-chat A (or A1 if Ray prefers the smaller split from the open).
- 2026-05-25 — Phase 6 PRODUCTION sub-chat A executed. Step 0 fresh scene reset cleared the 5 Phase 5 `L06_*` leftovers (`L06_ArrayCylinder` / `L06_SpinProfile` / `L06_ScrewCircle` / `L06_KnifeProjectPlane` / `L06_KnifeProjectCircle`) plus defensive `L06_*` sweep. **All 7 BlenderMCP captures landed on disk:** #36 `lesson_06_36_subdivide_levels.png` (614,190 bytes, 5126x720, 4-panel TOP ortho composite of progressive plane subdivision at 4 / 16 / 64 / 256 faces, WIREFRAME OVERLAY ON, `L06_SubdivPlane`); #37 `lesson_06_37_subdivide_smoothness.png` (390,678 bytes, 2562x720, 2-panel side-angle composite of V-polyline subdivide smoothness 0.0 vs 1.0, `L06_SmoothEdge`); #38 `lesson_06_38_subdivide_fractal_terrain.png` (581,386 bytes, 2562x720, 2-panel side-angle perspective composite of flat 5-cut plane vs fractal-subdivided plane using canonical `subdivide(fractal=5.0, fractal_along_normal=1.0, seed=42)` kwargs NOT the `vertex_random` fallback, WIREFRAME OVERLAY ON, `L06_FractalPlane`); #40 `lesson_06_40_bevel_segment_comparison.png` (748,518 bytes, 5126x720, 4-panel user-perspective closeup composite of cube front-top edge beveled at 1 / 2 / 4 / 8 segments, `L06_BevelCube`); #41 `lesson_06_41_edge_vs_vertex_bevel.png` (509,732 bytes, 2562x720, 2-panel composite of cube front-top-right edge `affect='EDGES'` vs corner vertex `affect='VERTICES'` both at offset 0.3 / segments 4, `L06_BevelCube` reused); #42 `lesson_06_42_bevel_before_after_cube.png` (671,358 bytes, 2562x720, 2-panel MATCAP-shaded composite of sharp cube + Shade Flat vs all-edge bevel offset 0.05 segments 3 + Shade Smooth with MATCAP `studio_light='basic_grey.exr'` selected from 27 available, `L06_BevelCube` reused); #43 `lesson_06_43_bevel_modifier_settings.png` (470,706 bytes, 1920x1054, full-window `bpy.ops.screen.screenshot` capture with Properties editor set to MODIFIER context per the verified #28 recipe, all 5 canonical Bevel Modifier attrs `mod.width=0.1` / `mod.segments=3` / `mod.angle_limit=radians(30)` / `mod.limit_method='ANGLE'` / `mod.use_clamp_overlap=True` worked first try, Shade Smooth applied for modifier-driven bevel readability, `L06_BevelModCube`). All EEVEE_NEXT → EEVEE fallback engaged (locked rule), 5 new `L06_*` object names used exactly as planned (`L06_SubdivPlane` / `L06_SmoothEdge` / `L06_FractalPlane` / `L06_BevelCube` / `L06_BevelModCube`), SOLID shading throughout except #42 MATCAP, overlays per per-image specs (#36 axes OFF floor OFF for TOP ortho clarity; #37 / #38 / #40 / #41 / #42 / #43 axes ON floor ON; cursor OFF origins OFF outline_selected OFF throughout). **Op-name verification results (all 4 Phase 6 verification points resolved first try with canonical signatures, no fallback paths needed):** `bpy.ops.mesh.subdivide(fractal=N, fractal_along_normal=N, seed=N)` canonical kwargs accepted in 5.1.1 first try (verified on #38, the `bpy.ops.transform.vertex_random(offset=0.5)` post-subdivide fallback NOT invoked); `bpy.ops.mesh.bevel(offset=W, segments=N, affect='EDGES'/'VERTICES')` canonical 3-arg signature accepted in 5.1.1 first try (verified across #40 / #41 / #42, no `offset_type='OFFSET'` explicit enum fallback needed); Bevel Modifier attribute names `mod.width` / `mod.segments` / `mod.angle_limit` / `mod.limit_method` / `mod.use_clamp_overlap` all confirmed in 5.1.1 first try (verified on #43, no `AttributeError` raised, `dir(mod)` diagnostic query not needed); MATCAP `studio_light` enum value `basic_grey.exr` confirmed in 5.1.1 (queried `[m.name for m in bpy.context.preferences.studio_lights if m.type == 'MATCAP']` returned 27 entries; `basic_grey.exr` picked as the most neutral grey for highlight clarity, verified on #42). **New Phase 6 PRODUCTION discoveries (2) to carry forward at lesson close into locked rules / style-guide v4 addenda:** (1) **`bpy.ops.mesh.subdivide(number_cuts=N)` grows quadratically not exponentially**: the operator's `number_cuts=N` parameter inserts N cuts per edge in a single call producing `(N+1)²` faces from one source face, NOT 4^N faces. Calling `subdivide(number_cuts=4)` on a fresh plane yields 25 faces (5x5 grid), not 256. To reach the locked #36 panel target of 4 / 16 / 64 / 256 faces, sequential `subdivide(number_cuts=1)` passes are required: pass 1 yields 4 faces, pass 2 yields 16, pass 3 yields 64, pass 4 yields 256 (matches the lesson-body table's 4^N exponential growth column). Caught and fixed on #36 mid-execution: panel 1 came out correct at 4 faces with `cuts=1`, panel 2 attempted `cuts=2` from a fresh plane and got 9 faces instead of 16; switched to sequential `cuts=1` passes per panel and got the canonical 4 / 16 / 64 / 256 progression. (2) **`bpy.ops.screen.screenshot` silently truncates output when targeting WSL UNC paths**: writing directly to a `\\wsl$\Ubuntu\...` UNC path via `filepath='\\\\wsl$\\Ubuntu\\...'` produces a 0-byte file with no Python error raised (the operator returns `{'FINISHED'}` cleanly). Working path: capture to a local Windows tempdir (e.g. `C:\Users\pract\AppData\Local\Temp\screenshot.png`), then read the bytes via `PIL.Image.open(temp_path)` and save through Pillow to the WSL UNC target. Verified working on #43 full-window screenshot (raw screenshot wrote 0 bytes to UNC initially; Windows-tempdir-then-Pillow-save path produced the 470,706-byte PNG at the correct WSL location). Pattern reusable for any future `bpy.ops.screen.screenshot` or `bpy.ops.screen.screenshot_area` call where the target is on WSL; folds into the locked rules / BlenderMCP capture section at lesson close. Placement table rows #36 / #37 / #38 / #40 / #41 / #42 / #43 flipped to `captured; not integrated` (zero net byte delta on the progress doc per the established 29-char column-padding precedent). **Phase 6 PRODUCTION sub-chat A CLOSED** with all 7 sub-chat A PNGs on disk; A1 / A2 fallback split NOT invoked, all 7 captures landed in a single sub-chat A despite the 7-capture / 5-composite load that drove the A1 / A2 fallback planning. 49 of 50 lesson images produced overall (42 prior + #36 / #37 / #38 / #40 / #41 / #42 / #43); 42 of 50 integrated (count unchanged from Phase 5 INTEGRATION close since sub-chat A is PRODUCTION only). Sub-chat B pending: 1 manual Win+Shift+S capture of #39 Bevel Operation Interface (Ctrl+B modal active state on a cube edge with width readout, segment count, and modal status bar visible per Phase 5 sub-chat B discovery (2) modal-status-bar-as-truth criterion). Per Phase 4 / Phase 5 cadence (sub-chat A close does not rewrite `session.md` or the bottom-of-doc Next chat section), both remain pointed at Phase 6 PRODUCTION sub-chat A; they get rewritten at sub-chat B close to point at Phase 6 INTEGRATION plan-lock.
- 2026-05-25 — Phase 6 PRODUCTION sub-chat B executed. **#39 manual Win+Shift+S landed on disk:** #39 `lesson_06_39_bevel_operation_interface.png` (1,340,913 bytes, 3838x2160 4K native snip) captured on `L06_BevelModCube` carried over from sub-chat A's #43 build (single front-top edge selected in Edit Mode, Ctrl+B Bevel modal active with 3-segment preview on the selected edge, orange highlight band visible across all three segment bands). **Modal-active state confirmed in-frame via both:** top-center floating readout `Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5` AND bottom modal keybinding hints bar (`Confirm` · `Esc Cancel` · `Ctrl Snap` · `M Width` · `A Width` · `S Segments` · `P Profile Shape` · etc.); per Phase 5 sub-chat B discovery (2) modal-status-bar-as-truth criterion. Bonus context: Bevel Modifier panel from #43 visible in the Properties editor on the right (Amount 0.1 m, Segments 3, Limit Method Angle, Angle 30°), non-blocking. **First-pass capture rate: 1 of 1** (snip landed clean on Ray's first try; read-rejection check at upload preview confirmed bevel curve + width readout + modal hints bar all present and legible before save). **New Phase 6 PRODUCTION discovery (1) to carry forward at lesson close into locked rules / style-guide v4 addenda:** **Bevel modal readout location in 5.1.1 is split across TOP floating text and BOTTOM modal hints bar, not consolidated into a single `Bevel (Width: X, Segments: N)` bottom-status-bar string** as the locked Phase 6 PRODUCTION plan #39 spec anticipated (extrapolated from the Phase 5 knife-tool modal status bar text pattern). Actual 5.1.1 behavior: the live operator readout (`Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5`) renders as floating text at the top-center of the viewport, while the bottom bar carries the modal keybinding hints (`Confirm` · `Esc Cancel` · `M Width` · `S Segments` · `P Profile Shape` · etc.). Both together unambiguously confirm modal-active state, but the locked spec's expected `Bevel (...)` string never appears in the bottom bar. Locked correction for any future modal-capture spec text: describe the criterion generically as `live operator readout (top floating or bottom bar) plus modal keybinding hints (bottom bar)` rather than assuming a single-line bottom-bar format. **Path round-trip observation (process-level, not a Blender discovery):** Ray uploaded the snip via Claude UI to `/mnt/user-data/uploads/` before saving to WSL; `Filesystem:write_file` is text-only and the loaded Filesystem tool set has no Claude→WSL binary cross-filesystem copy, so Ray manually copied the file to the WSL `images/` folder before the `Filesystem:get_file_info` verify step. Forward fix for future manual-capture sub-chats: save the snip directly to `\\wsl$\Ubuntu\...\blender_course\images\` first (matches the implicit Phase 4 sub-chat B #45 path), and skip the Claude UI upload entirely since the file is verifiable from WSL via `Filesystem:get_file_info` plus `Filesystem:copy_file_user_to_claude` for any preview check. Folds into the locked rules / manual-capture cadence at lesson close. **File-size note for Phase 6 INTEGRATION plan-lock decision:** #39 came in at 4K native (3838x2160, 1,340,913 bytes), heavier than the spec's expected `1500-1900 x 800-1100` viewport-only range. Phase 4 sub-chat B precedent (#45 at the same 3838x2160 4K starting size) cropped + resized in place via Pillow through `blender:execute_blender_code` to 1920x1080 viewport-only, but #45 had a c45 overlay viewBox to match; #39 has no planned overlay so the resize is purely a page-weight question. Decision deferred to Phase 6 INTEGRATION plan-lock per the spec's `INTEGRATION HTML insertion sized at native PNG dimensions (no resize needed since no overlay viewBox needs to match)` allowance, but Ray may want to crop the Windows / Blender chrome (menubar, workspace tabs, left toolbar) while preserving the viewport + top floating readout + bottom modal hints bar + right Properties panel for page-weight reasons. Placement table row #39 flipped to `captured; not integrated` (zero net byte delta on the progress doc per the established 29-char column-padding precedent). **Phase 6 PRODUCTION CLOSED** with all 8 Phase 6 images on disk (#36 614,190 / #37 390,678 / #38 581,386 / #39 1,340,913 / #40 748,518 / #41 509,732 / #42 671,358 / #43 470,706 bytes). **All Lesson 06 PRODUCTION work CLOSED**: **50 of 50 lesson images produced**; **42 of 50 integrated** (count unchanged from Phase 5 INTEGRATION close since Phase 6 PRODUCTION is PRODUCTION only). Only Phase 6 INTEGRATION remains for full Lesson 06 image-work closeout (8 figures to integrate into the `#subdivide` and `#bevel` sections of `lesson_06_edit_mode_essentials.html`, including the `c43` Bevel Modifier panel multi-callout overlay deferred from Phase 6 PRODUCTION plan-lock to INTEGRATION plan-lock per the c2 / c3 / c25 / c28 / c30 multi-label precedent of sizing overlays after the source PNG is in hand). Sub-chat B work was light-touch (1 manual capture by Ray + 1 cross-filesystem manual copy by Ray + 1 `Filesystem:get_file_info` verify + 1 placement-table flip + this Status bullet + a Next chat section rewrite + a `session.md` full rewrite). Next chat: Phase 6 INTEGRATION plan-lock.

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

## Phase 5 INTEGRATION plan

Locked 2026-05-25 during the Phase 5 INTEGRATION plan-lock chat (resumed from an interrupted plan-lock session per `lesson_06_phase5_integration_planlock_HANDOFF.md`). 8 image insertions into `lesson_06_edit_mode_essentials.html` across 3 sections (`#duplicate-array` · `#spin-screw` · `#knife-tool`) in 1 execution sub-chat (with 5a / 5b fallback split point if the chat tightens). Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block inserts at a marked position inside the anchor and the rest passes through.

**PART 06 indentation depth verified:** `#duplicate-array` · `#spin-screw` · `#knife-tool` all use 0/4/8-space depth, matching `#enter-edit-mode` / `#selection-modes` / `#proportional-editing` from Phase 1, `#loop-tools` / `#advanced-selection` / `#selection-tools` from Phase 2, `#inset-outset` / `#mesh-cleanup` from Phase 3, and `#extrude-operations` from Phase 4. All 8 Phase 5 figures sit at section level (not inside cards), so all 8 use the default-depth variant only: figure col 4, img and figcaption at col 8, overlay svg at col 12. No deeper-indent variant needed this phase.

### Sub-chat split

- **Sub-chat 1 (single sub-chat)** · `#duplicate-array` + `#spin-screw` + `#knife-tool` sections. All 8 images: #35 plain (3844x720, no overlay), #34 plain (3844x720, no overlay), #33 plain (native manual-snip dims, no overlay), #32 plain (1280x720, no overlay), #31 plain (2562x720, no overlay), #30 with c30 full callout (1280x720 viewBox, three positive-green pill badges `3D CURSOR` · `PROFILE EDGE` · `SPIN AXIS`), #29 plain (1280x720, no overlay), #28 with c28 full callout (1920x1046 viewBox, three positive-green pill badges `COUNT` · `RELATIVE OFFSET` · `MERGE`). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Estimated HTML byte delta +12-15 KB based on Phase 4 INTEGRATION's +8,909 byte 6-figure delta scaled to 8 figures with simpler overlays (c28 and c30 each carry 3 callouts; both are full-callout multi-label rather than composite-overlay; this phase has zero composite-overlays and zero inline SVGs).
- **Fallback split point** if sub-chat 1 tightens mid-execution: split into **5a** (#35 + #34 + #33 + #32, all four `#knife-tool` and last-`#spin-screw` figures) and **5b** (#31 + #30 with c30 + #29 + #28 with c28, both overlay-bearing figures plus the two remaining plain figures). The split-point boundary lands cleanly between the knife-tool block plus the screw-modifier closer (5a) and the spin-vase / spin-setup / array-result / array-panel block (5b); both Phase 5 overlay commits sit in the 5b half, concentrating the heaviest inline-SVG work in one chat half.

### Bottom-up execution order (grep-verified absolute lines)

Document positions in the locked `#duplicate-array` · `#spin-screw` · `#knife-tool` slices of `lesson_06_edit_mode_essentials.html` (absolute line numbers grep-verified against the locked key phrases from the handoff doc):

| Figure | Section            | Insertion line (absolute) |
| ------ | ------------------ | ------------------------- |
| #28    | `#duplicate-array` | line 2470                 |
| #29    | `#duplicate-array` | line 2520                 |
| #30    | `#spin-screw`      | line 2617                 |
| #31    | `#spin-screw`      | line 2666                 |
| #32    | `#spin-screw`      | line 2712                 |
| #33    | `#knife-tool`      | line 2831                 |
| #34    | `#knife-tool`      | line 2886                 |
| #35    | `#knife-tool`      | line 2914                 |

True bottom-up order (latest in document first, preserves earlier anchors): **`#35 → #34 → #33 → #32 → #31 → #30 → #29 → #28`**. This is the locked execution order for sub-chat 1.

If the fallback 5a + 5b split is invoked, each half retains bottom-up order within itself: **5a: #35 → #34 → #33 → #32**; **5b: #31 → #30 → #29 → #28**.

### c28 overlay coords (locked at this plan-lock via Pillow scan of the Properties panel area)

Positive-green multi-label callouts on the Array Modifier panel: `COUNT` highlights the Count integer field, `RELATIVE OFFSET` highlights the Relative Offset Factor X row, `MERGE` highlights the Merge checkbox. viewBox `0 0 1920 1046` matching the source PNG dimensions. Three highlight + leader + badge sets per the locked PNG annotation overlay component snippet (style guide v4) and the c2 / c3 multi-label precedent.

Pillow scan results: Properties panel sits at the right side of the Blender window with its left edge at x=1185. Value-field background transitions identify three row centers: Count y=361 (band 326-358 below the row title), Relative Offset Factor X y=397 (band 393-436), Merge y=569 (band 555+). The upper-left sky zone x=80-840 / y=82-128 is empty of Blender chrome and clears the three badges and the three converging leaders into a single horizontal badge row at y=87-133.

| element                    | locked coords                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------- |
| COUNT ellipse              | cx=1325 cy=361 rx=90 ry=16 stroke `#4ADE80` width 4 fill `none`                         |
| COUNT leader               | (1235, 361) → (227, 110) stroke `#4ADE80` width 3 linecap round                         |
| COUNT marker               | (227, 110) r=6 fill `#4ADE80`                                                           |
| COUNT badge rect           | x=80 y=87 width 140 height 46 rx=6 fill `#4ADE80`                                       |
| COUNT badge text           | `COUNT` at (150, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`           |
| RELATIVE OFFSET ellipse    | cx=1340 cy=397 rx=110 ry=16 stroke `#4ADE80` width 4 fill `none`                        |
| RELATIVE OFFSET leader     | (1230, 397) → (627, 110) stroke `#4ADE80` width 3 linecap round                         |
| RELATIVE OFFSET marker     | (627, 110) r=6 fill `#4ADE80`                                                           |
| RELATIVE OFFSET badge rect | x=380 y=87 width 240 height 46 rx=6 fill `#4ADE80`                                      |
| RELATIVE OFFSET badge text | `RELATIVE OFFSET` at (500, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14` |
| MERGE ellipse              | cx=1320 cy=569 rx=80 ry=16 stroke `#4ADE80` width 4 fill `none`                         |
| MERGE leader               | (1240, 569) → (847, 110) stroke `#4ADE80` width 3 linecap round                         |
| MERGE marker               | (847, 110) r=6 fill `#4ADE80`                                                           |
| MERGE badge rect           | x=700 y=87 width 140 height 46 rx=6 fill `#4ADE80`                                      |
| MERGE badge text           | `MERGE` at (770, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`           |

All three leaders converge from the right-side Properties panel rows up-left to the top-of-image badge row at y=87-133. Badges positioned left-to-right matching the visual flow Count → Relative Offset → Merge that mirrors the panel's vertical row order. Badge widths (140 / 240 / 140) sized to fit each label string at letter-spacing 2 with comfortable side padding.

### c30 overlay coords (locked at this plan-lock via Pillow scan)

Positive-green multi-label callouts on the Spin Operation setup view: `3D CURSOR` highlights the cursor at world origin, `PROFILE EDGE` highlights the selected profile, `SPIN AXIS` highlights the implied vertical Z axis line. viewBox `0 0 1280 720` matching the source PNG dimensions. Three highlight + leader + badge sets per the c28 precedent.

Pillow scan results: side-ortho view places the Z-axis as the dominant blue vertical column at x=551 (711 px tall), the orange-tinted selected profile bbox spans x=548-731 / y=149-570 with centroid at (639, 359), and the 3D cursor sits at the intersection of the X-axis red row (y=566) and the Z-axis blue column at approximately (551, 567). The left half of the image x=60-310 is empty of viewport content, clearing three vertically-stacked badges (one near top, one near vertical center, one near bottom).

| element                 | locked coords                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------ |
| 3D CURSOR ellipse       | cx=551 cy=567 rx=28 ry=28 stroke `#4ADE80` width 4 fill `none`                       |
| 3D CURSOR leader        | (523, 567) → (308, 567) stroke `#4ADE80` width 3 linecap round                       |
| 3D CURSOR marker        | (308, 567) r=6 fill `#4ADE80`                                                        |
| 3D CURSOR badge rect    | x=80 y=544 width 220 height 46 rx=6 fill `#4ADE80`                                   |
| 3D CURSOR badge text    | `3D CURSOR` at (190, 575) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`    |
| PROFILE EDGE ellipse    | cx=640 cy=360 rx=105 ry=215 stroke `#4ADE80` width 4 fill `none`                     |
| PROFILE EDGE leader     | (535, 360) → (308, 360) stroke `#4ADE80` width 3 linecap round                       |
| PROFILE EDGE marker     | (308, 360) r=6 fill `#4ADE80`                                                        |
| PROFILE EDGE badge rect | x=60 y=337 width 240 height 46 rx=6 fill `#4ADE80`                                   |
| PROFILE EDGE badge text | `PROFILE EDGE` at (180, 368) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14` |
| SPIN AXIS ellipse       | cx=551 cy=110 rx=14 ry=80 stroke `#4ADE80` width 4 fill `none`                       |
| SPIN AXIS leader        | (537, 110) → (308, 110) stroke `#4ADE80` width 3 linecap round                       |
| SPIN AXIS marker        | (308, 110) r=6 fill `#4ADE80`                                                        |
| SPIN AXIS badge rect    | x=80 y=87 width 220 height 46 rx=6 fill `#4ADE80`                                    |
| SPIN AXIS badge text    | `SPIN AXIS` at (190, 118) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14`    |

All three leaders are straight horizontal segments aimed left from each highlight toward the left-side badge column at y=110 / y=360 / y=567 (top / middle / bottom rough thirds). Badge widths (220 / 240 / 220) sized for the labels at letter-spacing 2 with the PROFILE EDGE badge widest to fit its 12-character string. The middle-third PROFILE EDGE ellipse uses a tall narrow ratio (rx=105 ry=215) to wrap the full vertical extent of the profile arc while staying inside the badge column's clearance envelope.

### Composite PNG visual review (no new composite-overlays needed)

Review of the 3 composite PNGs in Phase 5 (#31 2-panel, #34 3-panel, #35 3-panel) concluded that none require panel-label composite-overlays in the c25 mode from Phase 4. Each composite reads distinctly at PRODUCTION scale:

- **#31** (2-panel side-ortho profile + user-perspective WIREFRAME vase): panel 1 shows the profile as a thin polyline against the floor grid, panel 2 shows the vase as a rotationally-banded wireframe form; the visual contrast between flat 2D profile and full 3D revolved mesh is immediate at thumbnail scale.
- **#34** (3-panel free / angle / cut-through knife states): the four-dot freeform zigzag in panel 1, the straight horizontal cut in panel 2, and the X-ray-on dashed cut-through cut in panel 3 read as three visually distinct cut patterns with no risk of mid-thumbnail-scale confusion.
- **#35** (3-panel plane+circle / Mesh menu / cut plane): panel 1's hovering circle above the plane, panel 2's open Mesh menu popover, and panel 3's plane with the circular cut pattern are three completely different visual subjects; the cross-sub-chat composite reads as cleanly as any single-sub-chat composite.

These match the #24 (3-panel cube progression) and #27 (4-panel taper tower) plain-composite precedent from Phase 4 INTEGRATION rather than the #25 (2-panel sphere bulge comparison) c25 composite-overlay precedent.

### #34 keybinding tension and locked workaround

The lesson body Knife Tool Modes table at `lesson_06_edit_mode_essentials.html` lines 2876-2884 lists `C` for angle constraint and `Z` for cut-through (pre-5.1.1 keybindings preserved verbatim from the original lesson content). The captured #34 PNG shows the corrected Blender 5.1.1 modal state bindings (`A` for angle constraint, `C` for cut-through, `Z` for axis lock) per the 2026-05-25 sub-chat B Phase 5 PRODUCTION discovery (1) in the Status section.

Locked workaround for this plan-lock: **#34 alt text and figcaption describe the modal states visually WITHOUT naming keys**, sidestepping the lesson-body-vs-figure contradiction. The figure refers to "freeform cuts", "angle constraints snap each cut segment to fixed increments", and "cut-through extends the cut through back faces" rather than naming `C` / `Z` / `A`. Lesson body table edit OUT OF SCOPE at this plan-lock; folds into style-guide v4 addenda at lesson close. The 5.1.1 corrected bindings carry forward via the 2026-05-25 sub-chat B Status bullet and any future knife-tool capture work picks them up from there.

### Per-image specs

#### #35 · `lesson_06_35_knife_project_operation.png` · `#knife-tool` · plain figure, col 4/8

**oldText anchor:**

```
        <p><strong>Perfect for:</strong> Windows, logos, decorative patterns, text cutouts, panel details</p>
    </div>

    <blockquote>
```

Figure inserts between the Knife Project workflow card `</div>` (line 2 of the anchor) and the `<blockquote>` (line 4).

**alt:** Three-panel horizontal composite of the Knife Project workflow. Left panel: a subdivided plane sitting on the floor with a small circle floating one meter above it, selected as the cutter. Middle panel: the Mesh menu open in the top viewport header with the Knife Project option highlighted by hover. Right panel: the same plane after Knife Project ran, now carrying a clean circular edge cut projected straight down from the circle into the plane's surface topology. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Knife Project takes a separate cutter shape · projects it onto the target mesh from the current view direction · and cuts the projected silhouette into the target's surface topology · the cutter stays untouched · the target gains new edges that follow the cutter's outline exactly.

#### #34 · `lesson_06_34_knife_tool_constraints.png` · `#knife-tool` · plain figure, col 4/8

**oldText anchor:**

```
                <td>Freehand cutting without constraints</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
        <h4>💡 Knife Tool Pro Tips</h4>
```

Figure inserts between the Knife Tool Modes table `</table>` (line 4) and the Knife Tool Pro Tips card `<div class="card">` (line 6).

**alt:** Three-panel horizontal composite of the Knife Tool in three different modal states on the same default cube. Left panel: a freehand zigzag cut crosses the front face with four non-collinear cut points marking a curved path. Middle panel: an angle-constrained straight horizontal cut runs across the face. Right panel: a cut-through cut crosses the cube with X-ray shading on, so the dashed back-face portion of the cut is visible through the mesh. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** The Knife Tool ships with several modal states · freeform cuts follow the cursor exactly · angle constraints snap each cut segment to fixed increments for precise straight lines · cut-through extends the cut through back faces so you can slice all the way across a closed mesh · the lesson body table above lists the active keys for each mode.

**Keybinding-tension note:** alt text and figcaption describe modal states visually without naming keys per the locked workaround above; this sidesteps the lesson body table's pre-5.1.1 `C=angle, Z=cut-through` listing vs the captured PNG's corrected 5.1.1 `A=angle, C=cut-through, Z=axis-lock` modal state.

#### #33 · `lesson_06_33_knife_tool_active.png` · `#knife-tool` · plain figure, col 4/8

**oldText anchor:**

```
            <li>Press <kbd>Esc</kbd> to cancel</li>
        </ol>
    </div>

    <div class="mermaid">
```

Figure inserts between the How to Use Knife Tool card `</div>` (line 3 of the anchor) and the `<div class="mermaid">` opening the knife-tool LR flow diagram (line 5).

**alt:** Default cube in Edit Mode with the Knife Tool active. A crosshair sits over the front face, two cut points have already been placed and are visible as small dots on the face surface, and a faint in-progress cut line connects them. The viewport shows the live knife modal session against the user-perspective view of the cube.

**figcaption:** A live Knife Tool session · click drops a cut point · move and click again to extend the cut path · the placed dots mark where new vertices will land · confirm the cut to commit it to the mesh or cancel to back out without changes.

#### #32 · `lesson_06_32_screw_modifier_spring.png` · `#spin-screw` · plain figure, col 4/8

**oldText anchor:**

```
            <li>Adjust <strong>Iterations</strong> (how many full rotations)</li>
        </ol>
    </div>

    <table>
```

Figure inserts between the Screw Modifier Setup card `</div>` (line 3 of the anchor) and the Screw settings `<table>` (line 5). The bare `</ol></div><table>` pattern is grounded uniquely by the preceding `Adjust <strong>Iterations</strong> (how many full rotations)` line per handoff grep verification.

**alt:** Helical spring rendered in solid shading, generated by adding a Screw Modifier to a small vertical circle with Iterations set to 5. The spring climbs along the Z axis with five full coils, each loop offset half a meter above the previous one. The floor grid and world axes overlay anchor the spring vertically.

**figcaption:** The Screw Modifier spirals a profile along an axis · combining the rotation of Spin with a vertical climb per turn · a small circle plus Iterations 5 and a 0.5 m offset gives the five-coil helical spring above with no manual duplication.

#### #31 · `lesson_06_31_spin_vase_creation.png` · `#spin-screw` · plain figure, col 4/8

**oldText anchor:**

```
                <td>Keep original profile or not</td>
                <td>Usually disabled for complete objects</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
        <h4>💡 Spin Pro Tips</h4>
```

Figure inserts between the Spin Settings table `</table>` (line 5) and the Spin Pro Tips card `<div class="card">` (line 7).

**alt:** Two-panel horizontal composite of the Spin operation in action. Left panel: side ortho view of a vase profile drawn as a connected polyline of six vertices arcing from base to flared lip in the XZ plane. Right panel: user-perspective wireframe view of the finished vase, where 24 evenly-spaced cross-section rings reveal the rotational topology generated by Spin sweeping the profile 360° around the Z axis. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** Spin sweeps the selected profile through a full circle around the chosen axis · the wireframe view exposes the 24 evenly-spaced rings · each one a copy of the profile rotated a few degrees further · this is the lathe operation packaged as a single mesh op.

#### #30 · `lesson_06_30_spin_operation_setup.png` · `#spin-screw` · figure with c30 full callout, col 4/8

**oldText anchor:**

```
            <li>Adjust settings in operator panel (bottom-left)</li>
        </ol>
    </div>

    <div class="mermaid">
```

Figure inserts between the How to Use Spin card `</div>` (line 3 of the anchor) and the `<div class="mermaid">` opening the Spin flow diagram (line 5).

**alt:** Side ortho view of a vase profile curve sitting in the XZ plane with the 3D cursor positioned at the world origin to its left. The profile is a connected polyline of six vertices arcing from base to a flared lip. Three positive-green pill badges mark the 3D cursor at the origin, the selected profile edge, and the implied vertical Z spin axis running through the cursor.

**figcaption:** The three pieces every Spin needs · a profile edge to revolve · the 3D cursor to define the pivot point · and an axis to rotate around · usually the global Z axis for upright forms.

**c30 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c30-*` prefix; coords per the c30 overlay coords table above).

#### #29 · `lesson_06_29_array_modifier_result.png` · `#duplicate-array` · plain figure, col 4/8

**oldText anchor:**

```
                <td>Fuses copies if vertices overlap</td>
                <td>Create seamless continuous geometry</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="background: #e8f5e9; border-left: 4px solid #4CAF50;">
        <h4>✨ Array Modifier Power Moves</h4>
```

Figure inserts between the Array Modifier Options table `</table>` (line 5) and the Array Modifier Power Moves card `<div class="card">` (line 7).

**alt:** Ten cylinders in a single row along the X axis, generated by an Array Modifier with Count 10 and Relative Offset X 1.5. The cylinders sit on the world floor grid, evenly spaced, each one identical to the original, with the rightmost cylinders falling into the distance under user-perspective view.

**figcaption:** One source cylinder plus an Array Modifier · ten copies appear automatically · changing Count or Offset on the modifier updates the whole row at once, no manual duplication needed.

#### #28 · `lesson_06_28_array_modifier_panel.png` · `#duplicate-array` · figure with c28 full callout, col 4/8

**oldText anchor:**

```
            <li>Adjust <strong>Offset</strong> for spacing</li>
        </ol>
    </div>

    <div class="mermaid">
```

Figure inserts between the Array Modifier Workflow card `</div>` (line 3 of the anchor) and the `<div class="mermaid">` opening the Array Modifier flow diagram (line 5). The bare `</ol></div><div class="mermaid">` pattern is grounded uniquely by the preceding `Adjust <strong>Offset</strong> for spacing` line per handoff grep verification.

**alt:** Full Blender window in Object Mode with the Properties editor open to the Modifiers tab. The right panel shows the Array Modifier added to L06_ArrayCylinder with Count set to 10 and Relative Offset X set to 1.5, while the 3D viewport on the left shows the resulting row of ten cylinders stepping along the X axis. Three positive-green pill badges mark the Count field, the Relative Offset row, and the Merge checkbox.

**figcaption:** The Array Modifier lives in the Properties editor under the wrench icon · Count drives how many copies appear · Relative Offset spaces them along the source object's bounding box · Merge fuses overlapping vertices for seamless joins.

**c28 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c28-*` prefix; coords per the c28 overlay coords table above).

### ID prefix registry update (Phase 5 INTEGRATION)

- **No new PNG overlay ids added at INTEGRATION.** `c28` and `c30` were already reserved at Phase 5 PRODUCTION plan-lock from the initial planning registry; both overlay coords lock at this plan-lock per the c2 / c3 multi-label deferral pattern (coords sized after the source PNG is in hand). No collisions with existing Phase 1-4 INTEGRATION-registered prefixes (`c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c45`, `c46`, `c49`) or future-phase reserved (`c43`).
- **No SVG ids added at INTEGRATION.** Phase 5 has no SVGs per the locked Option L phase plan.

Cumulative Lesson 06 PNG overlay tally after Phase 5 INTEGRATION close: 10 positive-green full-callouts (`c2`, `c3`, `c10`, `c16`, `c20`, `c28`, `c30`, `c45`, `c46`, `c49`) + 1 positive-green composite-overlay (`c25`) + 1 warning-red full-callout (`c23`) + 3 decorative-shape-only (`c13`, `c14`, `c15`). 15 PNG overlays total across the integrated set, up from 13 at Phase 4 INTEGRATION close.

### Execution cadence (sub-chat 1)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- Bottom-up execution order within the sub-chat: `#35 → #34 → #33 → #32 → #31 → #30 → #29 → #28`
- No new em-dashes in figcaptions, alt text, status bullets, or any other new prose; middle-dot (`·`) for separation; pre-existing en-dashes in source content preserved verbatim through edit anchors
- Multi-edit `Filesystem:edit_file` calls with 3+ edits and long content avoided per the locked serialization-truncation workaround; one edit per figure (8 edits total), each as a single dry-run-then-commit pair; short multi-edit batches (e.g. the 8-row placement-table flip at sub-chat 1 close) still acceptable per the Phase 4 INTEGRATION sub-chat 1 precedent of a single 6-edit table-flip batch
- After all 8 figure inserts complete, perform doc updates: flip placement-table rows #28 / #29 / #30 / #31 / #32 / #33 / #34 / #35 from `captured; not integrated` to `integrated`; append Status section close bullet (single edit, long content); rewrite bottom-of-doc Next chat section pointing at Phase 6 PRODUCTION plan-lock (single edit, long content); rewrite `session.md` to point at same
- No ID prefix registry updates needed (`c28` and `c30` already in the registry from initial planning)
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → `Filesystem:get_file_info` size check before retry; applies to any heavy-content commit, particularly the #28 c28 multi-callout and #30 c30 multi-callout commits which carry the largest inline-SVG blocks this phase at 3 ellipses + 3 leaders + 3 markers + 3 badges + 3 text elements each)
- Warn Ray before context tightens; if the fallback 5a + 5b split is invoked, close 5a with all doc updates that reflect 5a-only progress (4 placement-table flips, partial Status bullet) and open 5b in a fresh chat
- Append Status section bullet at sub-chat 1 close (or 5a / 5b close if split invoked)

### Phase 5 INTEGRATION close criterion

All 8 Phase 5 figures integrated into `lesson_06_edit_mode_essentials.html` `#duplicate-array` / `#spin-screw` / `#knife-tool` sections with the locked anchors, alt text, figcaptions, and overlay markup. Placement-table rows #28 / #29 / #30 / #31 / #32 / #33 / #34 / #35 all flipped to `integrated`. Status section close bullet documents the integration with per-figure HTML byte deltas and any execution deviations from this plan. Bottom-of-doc Next chat section repointed at Phase 6 PRODUCTION plan-lock. `session.md` rewritten to point at same.

Plan-lock close criterion: new `Phase 5 INTEGRATION plan` section written into this doc between `Phase 5 PRODUCTION plan` and `Locked rules`; sub-chat split locked as 1 sub-chat with 5a / 5b fallback; per-figure 3-5 line `oldText` anchor candidates locked grounded on grep-verified-unique key phrases; c28 / c30 overlay specs locked with Pillow-scanned coords; #34 keybinding-tension workaround locked (visual modal-state language without naming keys); composite PNG visual review concluded no new composite-overlays needed. Status bullet appended documenting plan-lock details. Next chat section repointed at Phase 5 INTEGRATION sub-chat 1 execution. `session.md` rewritten to point at same. Met by this section.

---

## Phase 6 PRODUCTION plan

Locked 2026-05-25 during the Phase 6 PRODUCTION plan-lock chat. 8 image productions split across 2 execution sub-chats (7 BlenderMCP + 1 manual Win+Shift+S) following the Phase 3 / Phase 4 / Phase 5 PRODUCTION precedent of scripted vs manual split. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 6 fresh scene reset applies at sub-chat A start: delete `L06_ArrayCylinder` / `L06_SpinProfile` / `L06_ScrewCircle` / `L06_KnifeProjectPlane` / `L06_KnifeProjectCircle` and any other `L06_*` leftovers from Phase 5 PRODUCTION before building Phase 6 scenes. No Step 0 add-on check needed for Phase 6 (Subdivide, Bevel, and Bevel Modifier are all bundled `bpy.ops.mesh` ops or built-in modifier types; no Extensions Platform install required).

Phase 6 covers 2 HTML sections (`#subdivide` · `#bevel`) and ships zero SVGs · all 8 images are PNG. Priority split per `lesson_06_image_requirements.md` Production Priority section: 2 High (#40 Bevel Segment Comparison `Essential for understanding bevel smoothness`, #42 Bevel Before/After Cube `Dramatic demonstration of why beveling matters`) · 2 Medium (#36 Subdivide Levels `Important warning about geometry explosion`, #41 Edge vs Vertex Bevel `Shows bevel type distinction`) · 4 Lower (#37 Subdivide with Smoothness, #38 Subdivide Fractal, #39 Bevel Operation Interface, #43 Bevel Modifier Settings). One PNG overlay is already reserved in the ID prefix registry from initial planning (`c43` Bevel Modifier settings multi-label); overlay specs and pixel coords are deferred to Phase 6 INTEGRATION plan-lock per the c2 / c3 / c25 / c28 / c30 precedent of multi-label overlays sized after the source PNG is in hand. Phase 6 closes ALL of Lesson 06 PRODUCTION work: 50 of 50 images produced at Phase 6 PRODUCTION close, with only the 8 Phase 6 figures remaining unintegrated for the final Lesson 06 image-work chat.

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 7 final PNGs: #36 Subdivide Levels (5126x720 4-panel composite, plane progressively subdivided 1 / 2 / 3 / 4 cuts via bmesh plus per-panel TOP ortho renders), #37 Subdivide Smoothness (2562x720 2-panel composite, same source edge subdivided with smoothness 0.0 vs smoothness 1.0), #38 Subdivide Fractal (2562x720 2-panel composite, flat 5-cut plane vs fractal-subdivided plane for terrain), #40 Bevel Segment Comparison (5126x720 4-panel composite, cube edge beveled at 1 / 2 / 4 / 8 segments), #41 Edge vs Vertex Bevel (2562x720 2-panel composite, same cube corner with edge bevel via Ctrl+B vs vertex bevel via Ctrl+Shift+B), #42 Bevel Before/After Cube (2562x720 2-panel composite, sharp cube vs beveled cube under MATCAP viewport shading for highlight catch), #43 Bevel Modifier Settings (full-window screenshot via `bpy.ops.screen.screenshot` with Properties editor set to MODIFIER context, cube with Bevel Modifier added). Fresh scene reset as Step 0. Scene rebuilds: subdivided plane for #36 / #37 / #38, then default cube for #40 / #41 / #42, then #43 cube with Bevel Modifier instead of destructive bevel. Per-image rebuilds preferable to maintaining all sets simultaneously; the one in-place transition candidate is #41 → #42 (same cube, swap bevel approach), with full rebuild as the fallback path if `bpy.ops.ed.undo()` inside `temp_override` proves unreliable per the Phase 3 sub-chat A locked rule.
- **Sub-chat B** · All non-scripted work. 1 final PNG: #39 Bevel Operation Interface (single manual Win+Shift+S of the live Ctrl+B bevel modal state with width indicator, segment count display, and on-screen guides visible). Smallest manual sub-chat in Lesson 06 to date (Phase 4 sub-chat B had 2 manual captures, Phase 5 sub-chat B had 3 manual captures plus 2 Pillow composite runs); likely ships as a light-touch close-out chat similar in shape to Phase 4 sub-chat B.

If sub-chat A tightens after 3-4 captures land, split into **A1** (#36 + #37 + #38, all subdivide-section composites with plane geometry, no full-window screenshot) and **A2** (#40 + #41 + #42 + #43, all bevel-section captures with cube geometry including the #43 full-window screenshot). The split point falls cleanly on the section boundary (subdivide work in A1, bevel work in A2) and on the geometry boundary (subdivided plane in A1, cube in A2), so neither half carries cross-section or cross-geometry context. Sub-chat A is the largest scripted PRODUCTION sub-chat in Lesson 06 to date at 7 captures (vs Phase 3 sub-chat A at 6, Phase 4 sub-chat A at 4, Phase 5 sub-chat A at 5 final plus 2 cross-sub-chat temps); A1 / A2 fallback split likelihood is higher this phase given the 5 Pillow composites in sub-chat A vs Phase 5 sub-chat A's 1 composite (#31) plus 2 cross-sub-chat temps.

### Step 0 (sub-chat A only) · Fresh scene reset

Before any Phase 6 capture work, clean the scene of `L06_*` leftovers from Phase 5 PRODUCTION:

```python
import bpy
to_delete = [
    "L06_ArrayCylinder",
    "L06_SpinProfile",
    "L06_ScrewCircle",
    "L06_KnifeProjectPlane",
    "L06_KnifeProjectCircle",
]
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

New `L06_*` object names introduced this phase: `L06_SubdivPlane` (#36 progressive cuts), `L06_SmoothEdge` (#37 smoothness comparison), `L06_FractalPlane` (#38 fractal terrain), `L06_BevelCube` (#40 / #41 / #42 shared cube for destructive bevel demonstrations), `L06_BevelModCube` (#43 cube with non-destructive Bevel Modifier). Per-image scenes built fresh per the specs below; the one possible in-place transition is #41 → #42 (same cube, different bevel approach), with full rebuild via the bevel-cube scene-build path as the fallback if undo inside `temp_override` proves unreliable.

### Per-image specs · sub-chat A (7 BlenderMCP captures)

#### #36 · `lesson_06_36_subdivide_levels.png`

- **Type:** PNG, 4-panel horizontal composite, 5126x720, no overlay planned (panel labels carried via Pillow text rendering or deferred to INTEGRATION composite-overlay per c25 precedent if INTEGRATION review finds panels read too similarly)
- **Capture path:** BlenderMCP per-panel OpenGL viewport render at TOP ortho → PIL composite with 2 px `#FF6B00` vertical dividers → temp files removed via `os.remove`
- **Scene setup:** Add a Plane primitive (default 2 m x 2 m) named `L06_SubdivPlane` at origin. For each panel, rebuild the plane fresh (or use the prior plane after `bpy.ops.mesh.subdivide(number_cuts=N)` with N=1, then for panel 2 add another subdivide to reach 16 faces, etc); direct rebuild per panel preferred to avoid cumulative state drift. Panel 1: 1 cut yielding 4 faces. Panel 2: 2 cuts yielding 16 faces. Panel 3: 3 cuts yielding 64 faces. Panel 4: 4 cuts yielding 256 faces (the lesson-body table's exponential growth column).
- **View setup:** TOP ortho view via `bpy.ops.view3d.view_axis(type='TOP')` inside VIEW_3D `temp_override` per Phase 5 sub-chat A discovery (5) (the `region_data.view_rotation` direct assignment does NOT synchronously update the view matrix that downstream operators read from; `view_axis` operator forces the operator-level view-state sync). View_distance 2.5 to frame the 2 m x 2 m plane edge-to-edge in the viewport.
- **Render config:** EEVEE_NEXT -> EEVEE fallback per locked rule. Viewport SOLID shading with WIREFRAME OVERLAY ON so the cut grid lines read clearly against the face fill (style: `space_data.overlay.show_wireframes = True`, `space_data.overlay.wireframe_threshold = 1.0`). Theme: vertex_size=4, edge_width=2 (slightly smaller verts than Phase 5 since the 256-face panel's vertex density would otherwise dominate). Overlays: axes OFF (TOP ortho gives flat X/Y orientation; axes overlay clutters the grid), floor OFF, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_36_p1.png` (1280x720, 1 cut), `_temp_lesson_06_36_p2.png` (2 cuts), `_temp_lesson_06_36_p3.png` (3 cuts), `_temp_lesson_06_36_p4.png` (4 cuts).
- **Composite:** PIL 5126x720 (4 panels x 1280 + 3 x 2 px dividers), output `lesson_06_36_subdivide_levels.png`. Remove the 4 temps via `os.remove`.
- **Op-name verify at execution:** `bpy.ops.mesh.subdivide(number_cuts=N)` requires VIEW_3D `temp_override` per Phase 5 sub-chat A discovery (2); without the override the operator no-ops silently. Wrap each subdivide call in the same `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` pattern used for OpenGL renders.

#### #37 · `lesson_06_37_subdivide_smoothness.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render in side-angle view → PIL composite with 2 px `#FF6B00` vertical divider → temp files removed via `os.remove`
- **Scene setup:** Add a Plane primitive, enter Edit Mode, delete all faces, then build a 3-vert polyline forming a wide angle (verts at (-1, 0, 0), (0, 0, 0.3), (1, 0, 0); two connected edges forming a shallow V) so the `smoothness` parameter has a non-zero baseline curvature to interpolate from. Name the resulting object `L06_SmoothEdge`. For panel 1: select all verts/edges, `bpy.ops.mesh.subdivide(number_cuts=8, smoothness=0.0)` to insert 8 evenly-spaced new verts on each edge segment with no curvature interpolation (the V shape stays linear with extra verts on the straight segments). For panel 2: rebuild the V-polyline fresh, `bpy.ops.mesh.subdivide(number_cuts=8, smoothness=1.0)` to insert the same 8-per-edge verts with full smoothness pulling them toward a smooth arc interpolation between the original verts.
- **View setup:** Side-angle view via `Euler((radians(70), 0, radians(-20)))` to show the V profile with mild depth perspective. View_distance 4.0 to frame the 2 m polyline with comfortable padding.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme vertex_size=6 edge_width=3 (extra-bold verts and edges so the 8 new subdivision verts read clearly at panel scale). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_37_p1.png` (1280x720, smoothness 0.0), `_temp_lesson_06_37_p2.png` (smoothness 1.0).
- **Composite:** PIL 2562x720, output `lesson_06_37_subdivide_smoothness.png`. Remove the 2 temps via `os.remove`.
- **Fallback at execution:** If the V-polyline + smoothness 1.0 produces no visible curvature delta vs smoothness 0.0 at panel scale, swap the source mesh to a closed N-gon (e.g. 4-vert square outline) where smoothness 1.0 rounds the corners into a circle-like form; document the executed mesh shape in the Status bullet at sub-chat A close.

#### #38 · `lesson_06_38_subdivide_fractal_terrain.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render at side-angle perspective → PIL composite with 2 px `#FF6B00` vertical divider → temp files removed via `os.remove`
- **Scene setup:** Add a Plane primitive (4 m x 4 m for terrain feel), enter Edit Mode, select all, `bpy.ops.mesh.subdivide(number_cuts=5)` to produce a 6x6 = 36-quad / 49-vert grid. Name the object `L06_FractalPlane`. For panel 1 capture the flat subdivided state. For panel 2 apply `bpy.ops.mesh.subdivide(number_cuts=2, fractal=5.0, fractal_along_normal=1.0, seed=42)` for a single additional fractal subdivide pass that lifts the new verts randomly along the face normals for terrain-like height variation (fractal value 5.0 picked from the lesson-body Subdivide Practice exercise step 5). Alternative fallback: use `bpy.ops.transform.vertex_random(offset=0.5)` after a plain subdivide for explicit random Z-offset per vert (cleaner control over height range; document executed path in Status bullet if used).
- **View setup:** Side-angle perspective view `Euler((radians(75), 0, radians(-40)))` to show the height variation with mild top-down framing. View_distance 7.0 to frame the 4 m x 4 m plane with the tallest fractal verts in frame.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading with WIREFRAME OVERLAY ON so the topology plus height variation read together. Theme vertex_size=3 edge_width=1 (smaller verts and edges since the 49-vert density would dominate otherwise). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_38_p1.png` (1280x720, flat), `_temp_lesson_06_38_p2.png` (fractal).
- **Composite:** PIL 2562x720, output `lesson_06_38_subdivide_fractal_terrain.png`. Remove the 2 temps via `os.remove`.
- **Op-name verify at execution:** `bpy.ops.mesh.subdivide(fractal=N, fractal_along_normal=N, seed=N)` signature in 5.1.1 (the `fractal` and `fractal_along_normal` kwargs may have been renamed between versions; if assignment raises a `TypeError: keyword argument` error, fall back to `bpy.ops.transform.vertex_random(offset=0.5)` after a plain `bpy.ops.mesh.subdivide(number_cuts=2)`). Log the working signature in the Status bullet at sub-chat A close.

#### #40 · `lesson_06_40_bevel_segment_comparison.png`

- **Type:** PNG, 4-panel horizontal composite, 5126x720, no overlay planned (panel labels carried via Pillow text rendering or deferred to INTEGRATION composite-overlay per c25 precedent if INTEGRATION review finds panels read too similarly)
- **Capture path:** BlenderMCP per-panel OpenGL viewport render at user-perspective closeup → PIL composite with 2 px `#FF6B00` vertical dividers → temp files removed via `os.remove`
- **Scene setup:** Add a default Cube primitive named `L06_BevelCube`. For each panel rebuild the cube fresh (per-panel rebuild preferred over cumulative bevel state), enter Edit Mode, switch to Edge Select mode, select a single front-top edge (the long horizontal edge at the top-front of the cube, verts at (-1, -1, 1) and (1, -1, 1)) via bmesh edge filter, apply `bpy.ops.mesh.bevel(offset=0.25, segments=N)` for N in {1, 2, 4, 8}, return to Object Mode.
- **View setup:** User-perspective `Euler((radians(63.6), 0, radians(-46.7)))` with closeup framing on the front-top edge being beveled. View_distance 3.0, view_location (0, 0, 0.4) shifted slightly up so the beveled edge sits at frame center. Same view across all 4 panels so the only visible difference is the bevel segment count.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme vertex_size=4 edge_width=2. Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_40_p1.png` (1 segment), `_temp_lesson_06_40_p2.png` (2 segments), `_temp_lesson_06_40_p3.png` (4 segments), `_temp_lesson_06_40_p4.png` (8 segments).
- **Composite:** PIL 5126x720, output `lesson_06_40_bevel_segment_comparison.png`. Remove the 4 temps via `os.remove`.
- **Op-name verify at execution:** `bpy.ops.mesh.bevel(offset=W, segments=N, affect='EDGES')` signature in 5.1.1 (the `offset` kwarg may need to be paired with `offset_type='OFFSET'` explicit enum, and `affect` may need an explicit enum value rather than relying on selection mode); if signature fails, working alternative is `bpy.ops.mesh.bevel(offset_type='OFFSET', offset=0.25, segments=N, affect='EDGES')` with the full canonical signature. Log the working signature in the Status bullet.

#### #41 · `lesson_06_41_edge_vs_vertex_bevel.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite with 2 px `#FF6B00` vertical divider → temp files removed via `os.remove`
- **Scene setup:** Reuse `L06_BevelCube` from #40 if state-clean, or rebuild fresh per panel for guaranteed clean state. For panel 1 (Edge Bevel): enter Edit Mode, Edge Select mode, select the front-top-right edge (verts at (1, -1, 1) and (1, 1, 1)), `bpy.ops.mesh.bevel(offset=0.3, segments=4, affect='EDGES')`, return to Object Mode. For panel 2 (Vertex Bevel): rebuild cube fresh, enter Edit Mode, Vertex Select mode (`bpy.ops.mesh.select_mode(type='VERT')`), select the front-top-right corner vertex at (1, -1, 1), `bpy.ops.mesh.bevel(offset=0.3, segments=4, affect='VERTICES')`, return to Object Mode. Same offset 0.3 and segments 4 across both panels so the comparison isolates the `affect` mode as the only variable.
- **View setup:** User-perspective `Euler((radians(63.6), 0, radians(-46.7)))` with corner-focused framing. View_distance 3.5, view_location centered on the front-top-right corner area (0.4, -0.4, 0.6) so the corner being bevel-targeted sits at frame center across both panels. Same view across both panels.
- **Render config:** EEVEE_NEXT -> EEVEE fallback, viewport SOLID shading, theme vertex_size=5 edge_width=2 (slightly larger verts so the vertex bevel target reads in panel 2 pre-bevel reference). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_41_p1.png` (edge bevel), `_temp_lesson_06_41_p2.png` (vertex bevel).
- **Composite:** PIL 2562x720, output `lesson_06_41_edge_vs_vertex_bevel.png`. Remove the 2 temps via `os.remove`.

#### #42 · `lesson_06_42_bevel_before_after_cube.png`

- **Type:** PNG, 2-panel horizontal composite, 2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render under MATCAP viewport shading → PIL composite with 2 px `#FF6B00` vertical divider → temp files removed via `os.remove`
- **Scene setup:** Reuse or rebuild `L06_BevelCube`. For panel 1 (sharp, CG look): default cube in Object Mode with Shade Flat (`bpy.ops.object.shade_flat()` or leave default flat shading). For panel 2 (beveled, realistic): rebuild cube, enter Edit Mode, Edge Select mode, select ALL edges (`bpy.ops.mesh.select_all(action='SELECT')`), `bpy.ops.mesh.bevel(offset=0.05, segments=3, affect='EDGES')`, return to Object Mode, Shade Smooth (`bpy.ops.object.shade_smooth()`). The 0.05 offset + 3 segments + Shade Smooth combination is the subtle bevel recipe from the lesson-body Bevel Practice Project ordered list (set width 0.05, scroll wheel to 3 segments, Shade Smooth after Edit Mode exit).
- **View setup:** User-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 4.0, view_location (0, 0, 0.5). Same view across both panels.
- **Render config:** EEVEE_NEXT -> EEVEE fallback. **MATCAP viewport shading** (deviation from default SOLID across other Phase 6 captures) so the bevel highlights catch light realistically and the physically-plausible pedagogical message reads at panel scale; without MATCAP the flat SOLID shading flattens the bevel highlight and the comparison loses its educational impact. Set via `space_data.shading.type = 'SOLID'` plus `space_data.shading.light = 'MATCAP'` plus a neutral MATCAP studio preset (verify available MATCAPs in 5.1.1 at execution and pick a neutral grey one for highlight clarity). Same MATCAP setting across both panels so the comparison isolates the bevel as the only variable. Theme vertex_size=4 edge_width=2. Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Per-panel renders:** `_temp_lesson_06_42_p1.png` (sharp + Shade Flat), `_temp_lesson_06_42_p2.png` (beveled + Shade Smooth).
- **Composite:** PIL 2562x720, output `lesson_06_42_bevel_before_after_cube.png`. Remove the 2 temps via `os.remove`.
- **Op-name verify at execution:** MATCAP `studio_light` enum value in 5.1.1 (default MATCAPs in 5.1 include `basic_1.exr`, `basic_2.exr`, and several normal/check MATCAPs; pick the most neutral grey MATCAP for highlight clarity, querying `[m.name for m in bpy.context.preferences.studio_lights if m.type == 'MATCAP']` at execution if needed). Log the working `studio_light` value in the Status bullet.

#### #43 · `lesson_06_43_bevel_modifier_settings.png`

- **Type:** PNG, full-window Blender screenshot, target ~1920x1080 (varies by Blender window state), `c43` overlay planned at INTEGRATION (multi-label)
- **Capture path:** BlenderMCP `bpy.ops.screen.screenshot` of full Blender window after Properties area is set to Modifiers tab with the Bevel Modifier added and expanded; #28 precedent for the full-window screenshot path with `temp_override`
- **Scene setup:** Add a default Cube primitive named `L06_BevelModCube`. Apply Bevel Modifier via `cube.modifiers.new(name="Bevel", type='BEVEL')`. Set `mod.width = 0.1`, `mod.segments = 3`, `mod.angle_limit = radians(30)`, `mod.limit_method = 'ANGLE'`, `mod.use_clamp_overlap = True` (standard non-destructive bevel setup with angle-limited beveling and clamp overlap enabled per the lesson-body Bevel Modifier Advantages card). Set Properties editor context to Modifiers tab: find the Properties area (`area.type == 'PROPERTIES'`) and set `area.spaces.active.context = 'MODIFIER'` per the Phase 5 sub-chat A #28 verified enum value. Confirm Bevel Modifier panel is expanded at capture time.
- **View setup:** 3D viewport set to user-perspective `Euler((radians(63.6), 0, radians(-46.7)))`, view_distance 4.0 to fit the beveled cube within the viewport region. Apply Shade Smooth (`bpy.ops.object.shade_smooth()`) so the modifier-driven bevel reads clearly at viewport scale.
- **Capture:** `bpy.ops.screen.screenshot(filepath="...")` with full-window context override (no area filter) to grab the entire Blender window including the right-side Properties panel with Modifier panel visible alongside the viewport showing the beveled cube.
- **Render config:** EEVEE_NEXT -> EEVEE fallback per locked rule. Theme: vertex_size=5, edge_width=2. Overlays: axes ON, floor ON, cursor OFF, origins OFF.
- **Output:** `lesson_06_43_bevel_modifier_settings.png` at full-window dimensions (typically 1920x1080 or close per the #28 precedent at this window state).
- **Op-name verify at execution:** Bevel Modifier attribute names in 5.1.1 (`mod.width` / `mod.segments` / `mod.angle_limit` / `mod.limit_method` / `mod.use_clamp_overlap`; some attributes may be renamed e.g. `width` may be `offset`, `limit_method` may need a specific string enum `'ANGLE'` vs `'WEIGHT'` vs `'VGROUP'` vs `'NONE'`). If any attribute assignment raises `AttributeError` or `TypeError`, query `dir(mod)` and use the actual attribute names. Log the working attribute set in the Status bullet at sub-chat A close.
- **c43 overlay (deferred to INTEGRATION):** Multi-label callouts on Bevel Modifier panel settings. Likely targets per AI prompt: Amount slider (width), Segments value, Angle Limit option, Limit Method dropdown, Clamp Overlap checkbox. Positive-green colorway (`#4ADE80` badges with `#0f1a14` text). Final target set chosen at Phase 6 INTEGRATION plan-lock once the captured PNG is in hand; pixel coords resolved via Pillow scan of the Properties panel area per c28 precedent.

### Per-image specs · sub-chat B (1 manual Win+Shift+S capture)

#### #39 · `lesson_06_39_bevel_operation_interface.png`

- **Type:** PNG, manual Win+Shift+S, no overlay planned
- **Capture path:** Ray enters Edit Mode on any cube (L06_BevelCube carried over from sub-chat A or a fresh default cube), switches to Edge Select mode, selects a single front-top edge, presses Ctrl+B to activate the Bevel modal, moves the mouse slightly to set a visible non-zero bevel width, scrolls the mouse wheel to bump segment count to 2 or 3 so the modal status bar shows a multi-segment bevel, Win+Shift+S captures the viewport with the on-screen bevel guides, the width readout, and the segment count indicator all visible. Bevel modal exits on Enter or right-click; Ray must snip BEFORE either of those terminations.
- **Why manual:** Bevel is a modal operator entered via `bpy.ops.mesh.bevel` (or Ctrl+B keybinding) that requires interactive mouse input to set width and scroll wheel for segments; BlenderMCP cannot drive the modal because the op blocks on real input events (same limitation as #33 knife-active modal and #45 G+Z transform modal indicator).
- **Subject choice:** Cube + single-edge selection pre-Ctrl+B matches the lesson-body Basic Bevel Operation card workflow (the How to Bevel ordered list says select edges, press Ctrl+B, move mouse for width, scroll wheel for segments, click/Enter to confirm). The placement-table position is `After Basic Bevel Operation card`, so the figure visually echoes the card's ordered list.
- **Modal-status-bar criterion** (per Phase 5 PRODUCTION sub-chat B discovery (2)): the bottom-of-viewport modal status bar is the authoritative source for the active bevel state and should be included in the snip frame so downstream review can verify the bevel modal is the captured state (not a static post-bevel cube). Look for `Bevel: ...` strings in the status bar (e.g. `Bevel (Width: 0.1234, Segments: 3)` or similar 5.1.1 format).
- **Target dimensions:** Whatever the Win+Shift+S snip captures; full viewport is typically 1500-1900 px wide x 800-1100 tall. INTEGRATION HTML insertion sized at native PNG dimensions (no resize needed since no overlay viewBox needs to match).
- **Output:** `lesson_06_39_bevel_operation_interface.png`.
- **First-pass marginal-read rejection** (per Phase 5 PRODUCTION sub-chat B discovery (3)): if the snip shows only a static-looking beveled edge without visible width readout or segment count, recapture before sub-chat-internal review; the active modal indicators (width readout, segment count, on-screen guide) are the pedagogical centerpiece of the figure and a snip without them is visually indistinguishable from any #40 segment-N panel and provides no Bevel modal differentiation.

### ID prefix registry update (Phase 6)

- **No new PNG overlay ids added at PRODUCTION.** The one Phase 6 PNG overlay prefix (`c43` for #43 Bevel Modifier settings multi-label) is already in the ID prefix registry from initial planning; overlay specs and pixel coords deferred to Phase 6 INTEGRATION plan-lock per the c2 / c3 / c25 / c28 / c30 multi-label precedent of sizing overlays after the source PNG is in hand.
- **No SVG ids added.** Phase 6 has no SVGs per the locked Option L phase plan (SVGs concentrated in Phases 1 / 2 / 3 at #8 `pf`, #44 `sr`, #21 `dd`).

Cumulative Lesson 06 PNG overlay tally unchanged from Phase 5 INTEGRATION close: 15 PNG overlays integrated (10 positive-green full-callouts `c2` / `c3` / `c10` / `c16` / `c20` / `c28` / `c30` / `c45` / `c46` / `c49` + 1 positive-green composite-overlay `c25` + 1 warning-red full-callout `c23` + 3 decorative-shape-only `c13` / `c14` / `c15`); 1 PNG overlay planned but not yet integrated (`c43`); 0 added in Phase 6 PRODUCTION. Plan-locked PNG overlay registry total remains 13 entries (`c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49`).

### Execution cadence (sub-chats A and B)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit (applies to doc updates at each sub-chat close; image production uses BlenderMCP / manual Win+Shift+S paths instead)
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in figcaptions, alt text (both locked at Phase 6 INTEGRATION plan-lock chat, not at PRODUCTION), status bullets, or any other new prose; middle-dot (`·`) for separation
- BlenderMCP: lowercase `blender:execute_blender_code`, NO `read_factory_settings`, EEVEE_NEXT -> EEVEE fallback, `temp_override` for OpenGL renders, for `bpy.ops.screen.screenshot` full-window captures, AND for `bpy.ops.mesh.subdivide` per Phase 5 sub-chat A discovery (2); `bpy.ops.screen.screenshot_area` available for area-scoped captures
- `bpy.ops.view3d.view_axis(type='TOP')` inside VIEW_3D `temp_override` for #36 TOP ortho view per Phase 5 sub-chat A discovery (5); `region_data.view_rotation` direct assignment does NOT synchronously update the view matrix that downstream ops read from
- Locked op-name corrections to carry forward: `bpy.ops.mesh.inset` (not `inset_faces`), `bpy.ops.mesh.delete(type='FACE')` singular not plural, `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect`, Phase 4 extrude family ops all verified in 5.1.1, Phase 5 op-name results (spin signature canonical 5-arg, knife_project requires single-target Edit Mode setup per Phase 5 sub-chat A discovery (3), Properties editor `area.spaces.active.context = 'MODIFIER'` confirmed at #28). Phase 6 new op-name verification points at execution for `bpy.ops.mesh.subdivide(fractal=N, fractal_along_normal=N, seed=N)` signature (#38), `bpy.ops.mesh.bevel(offset=W, segments=N, affect='EDGES'/'VERTICES')` signature (#40 / #41 / #42), Bevel Modifier attribute names `width` / `segments` / `angle_limit` / `limit_method` / `use_clamp_overlap` (#43), and MATCAP `studio_light` enum value for #42 highlight catch
- **Avoid `bpy.ops.ed.undo()` inside `temp_override` blocks** per the Phase 3 sub-chat A locked connection-drop discovery; the #41 → #42 in-place transition candidate (same cube, swap bevel approach) should rebuild fresh as a fallback if undo proves unreliable
- Pillow 12.2.0 path for composites: 5 composites this phase, all self-contained within sub-chat A: #36 4-panel (5126x720), #37 2-panel (2562x720), #38 2-panel (2562x720), #40 4-panel (5126x720), #41 2-panel (2562x720), #42 2-panel (2562x720). Temp files named `_temp_lesson_06_NN_pN.png`; all temps removed via `os.remove` after each composite save. No cross-sub-chat composites this phase (#39 is a single manual capture with no scripted panels to combine)
- Phase 6 fresh scene reset at sub-chat A start per the Step 0 script above (delete `L06_ArrayCylinder` / `L06_SpinProfile` / `L06_ScrewCircle` / `L06_KnifeProjectPlane` / `L06_KnifeProjectCircle` plus defensive `L06_*` sweep)
- Update Placement table row state per image as each capture lands (`not captured; not integrated` → `captured; not integrated`)
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at sub-chat B close (Phase 6 PRODUCTION close) to point at Phase 6 INTEGRATION plan-lock; `session.md` not rewritten at sub-chat A close unless sub-chat B is meaningfully delayed
- Warn Ray before context tightens within an execution sub-chat; if A1 / A2 fallback split invoked, close A1 with placement-table flips for the 3 produced images (#36 / #37 / #38) and a partial Status bullet, then open A2 in a fresh chat. A1 / A2 split likelihood is higher this phase given 7 captures + 5 composites in sub-chat A vs Phase 5 sub-chat A's 5 captures + 1 composite
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → check file size with `Filesystem:get_file_info` before retrying; the c2 / c28 / c30 multi-callout commit precedents apply to any future heavy-content commit, particularly the eventual c43 multi-callout at INTEGRATION)

### Phase 6 PRODUCTION close criterion

All 8 Phase 6 images on disk in `images/`:

- 7 PNGs from sub-chat A: #36, #37, #38, #40, #41, #42, #43
- 1 PNG from sub-chat B: #39

Placement table rows #36, #37, #38, #39, #40, #41, #42, #43 all flipped to `captured; not integrated`. Status section gets close bullets for both sub-chats (or one combined A+B bullet if both close in the same chat per the Phase 4 sub-chat B precedent; the locked default is 2 sub-chats following the Phase 3 / Phase 4 / Phase 5 PRODUCTION precedent). Rewrite `session.md` at sub-chat B close to point at Phase 6 INTEGRATION plan-lock as the next chat. **This phase closes ALL of Lesson 06 PRODUCTION work**: 50 of 50 images produced; INTEGRATION work for the 8 Phase 6 figures remains as the final image-work chat for Lesson 06.

Plan-lock close criterion: all 8 capture specs, scene configs, view rotations, output filenames, and overlay deferrals (`c43`) locked in writing before any production work. Sub-chat split locked as 2 sub-chats (A scripted + B manual) with A1 / A2 fallback for sub-chat A given the 7-capture / 5-composite load. Met by this section.

---

## Phase 6 INTEGRATION plan

Locked 2026-05-25 during the Phase 6 INTEGRATION plan-lock chat (resumed from an interrupted plan-lock session per `lesson_06_phase6_integration_planlock_HANDOFF.md`). 8 image insertions into `lesson_06_edit_mode_essentials.html` across 2 sections (`#subdivide` · `#bevel`) in 1 execution sub-chat (with 6a / 6b fallback split point if the chat tightens). Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block inserts at a marked position inside the anchor and the rest passes through. This is the final image-work chat of Lesson 06; on close, all 50 of 50 lesson images will be integrated and Lesson 06 will be ready for mid-lesson browser QA.

**PART 06 indentation depth verified:** `#subdivide` and `#bevel` both use 0/4/8-space depth, matching `#enter-edit-mode` / `#selection-modes` / `#proportional-editing` from Phase 1, `#loop-tools` / `#advanced-selection` / `#selection-tools` from Phase 2, `#inset-outset` / `#mesh-cleanup` from Phase 3, `#extrude-operations` from Phase 4, and `#duplicate-array` / `#spin-screw` / `#knife-tool` from Phase 5. 7 of the 8 Phase 6 figures sit at section level (col 4) and use the default-depth variant (figure col 4, img and figcaption at col 8, overlay svg wrapper div at col 8, img / svg at col 12 when overlay present, svg children at col 16). **#38 is the single deviation:** placed inside the `<div class="card">` Terrain Generation card between the procedure `</ol>` and the bonus tip `<p><strong>Bonus:</strong>` so the fractal terrain figure visually closes the procedure before the bonus tip lands; depth shifts to figure col 8, img and figcaption at col 12. The card-internal placement matches the handoff doc's locked insertion-line position for #38 and is the first card-internal figure placement in Lesson 06 (prior 42 integrated figures all section-level).

### Sub-chat split

- **Sub-chat 1 (single sub-chat)** · `#subdivide` + `#bevel` sections. All 8 images: #43 with c43 full callout (1920x1054 viewBox, four positive-green pill badges `AMOUNT` · `SEGMENTS` · `LIMIT METHOD` · `ANGLE` arranged in a single top-of-image row), #42 plain (2562x720, no overlay), #41 with c41 composite-overlay NEW (2562x720 viewBox, two positive-green panel badges `EDGE BEVEL` · `VERTEX BEVEL` at the bottom of each panel), #40 plain (5126x720, no overlay), #39 plain (post-crop 1920x1080, no overlay; pre-integration crop + resize step locked below), #38 plain (2562x720, no overlay, card-internal placement at col 8/12 depth), #37 plain (2562x720, no overlay), #36 plain (5126x720, no overlay). 7 at section level col 4/8, 1 (#38) card-internal col 8/12. Estimated HTML byte delta +13-16 KB, slightly above the Phase 5 INTEGRATION sub-chat 1 actual at +12,030 bytes given Phase 6 has 8 figures vs Phase 5's 8 plus 2 new overlay registrations (`c41` 2-badge composite-overlay smaller than c28 / c30 3-callout; `c43` 4-callout larger than c28 / c30 3-callout).
- **Fallback split point** if sub-chat 1 tightens mid-execution: split into **6a** (#43 with c43 + #42 + #41 with c41 + #40 + #39, all five `#bevel` figures) and **6b** (#38 + #37 + #36, all three `#subdivide` figures). The split-point boundary lands cleanly on the `#bevel` / `#subdivide` section transition; both Phase 6 overlay commits sit in the 6a half, concentrating the heaviest inline-SVG work in one chat half. Matches the Phase 5 INTEGRATION sub-chat 1 cadence (8 figures landed cleanly in 1 sub-chat with the 5a / 5b fallback not invoked).

### Bottom-up execution order (grep-verified absolute lines)

Document positions in the locked `#subdivide` · `#bevel` slices of `lesson_06_edit_mode_essentials.html` (absolute line numbers grep-verified against the locked anchor key phrases from the handoff doc against the current 224,002-byte / 3,554-line HTML):

| Figure | Section       | Insertion line (absolute) | Depth          |
| ------ | ------------- | ------------------------- | -------------- |
| #36    | `#subdivide`  | line 3150                 | section col 4  |
| #37    | `#subdivide`  | line 3194                 | section col 4  |
| #38    | `#subdivide`  | line 3235                 | card col 8     |
| #39    | `#bevel`      | line 3267                 | section col 4  |
| #40    | `#bevel`      | line 3333                 | section col 4  |
| #41    | `#bevel`      | line 3360                 | section col 4  |
| #42    | `#bevel`      | line 3364                 | section col 4  |
| #43    | `#bevel`      | line 3393                 | section col 4  |

True bottom-up order (latest in document first, preserves earlier anchors): **`#43 → #42 → #41 → #40 → #39 → #38 → #37 → #36`**. This is the locked execution order for sub-chat 1.

If the fallback 6a + 6b split is invoked, each half retains bottom-up order within itself: **6a: #43 → #42 → #41 → #40 → #39**; **6b: #38 → #37 → #36**.

### c43 overlay coords (4-callout, locked at this plan-lock via Pillow band scan on the Properties panel value-field x-band)

Positive-green multi-label callouts on the Bevel Modifier panel in `lesson_06_43_bevel_modifier_settings.png` (1920x1054): `AMOUNT` highlights the Amount slider, `SEGMENTS` highlights the Segments integer field, `LIMIT METHOD` highlights the Limit Method enum dropdown showing the Angle value, `ANGLE` highlights the 30-degree threshold value field. viewBox `0 0 1920 1054` matching the source PNG dimensions. Four highlight + leader + marker + badge sets per the c28 / c30 multi-callout precedent (c28 had 3 callouts; c43 extends the pattern to 4).

**Colorway:** positive-green throughout (stroke / fill `#4ADE80`, text fill `#0f1a14`).

**Shared geometry:** ellipses `rx=80 ry=16 stroke-width=4 fill=none`; leaders `stroke-width=3 stroke-linecap=round`; markers `r=6`; badges `rx=6 height=46`; text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size=22 font-weight=700 text-anchor=middle letter-spacing=2`.

| Callout id          | Label          | Ellipse (cx, cy) | Badge (x, y, w) | Marker (x, y) | Text (x, y) |
| ------------------- | -------------- | ---------------- | --------------- | ------------- | ----------- |
| `c43-amount`        | `AMOUNT`       | 1810, 428        | 240, 87, 140    | 387, 110      | 310, 118    |
| `c43-segments`      | `SEGMENTS`     | 1805, 456        | 440, 87, 180    | 627, 110      | 530, 118    |
| `c43-limitmethod`   | `LIMIT METHOD` | 1805, 498        | 680, 87, 240    | 927, 110      | 800, 118    |
| `c43-angle`         | `ANGLE`        | 1810, 521        | 980, 87, 140    | 1127, 110     | 1050, 118   |

**Title id:** `c43-title` with text `Four Bevel Modifier panel callouts`. **Desc id:** `c43-desc` with text `Four positive-green pill badges mark the key Bevel Modifier settings on the right-side Properties panel · AMOUNT highlights the Amount slider · SEGMENTS highlights the Segments integer field · LIMIT METHOD highlights the Limit Method dropdown · ANGLE highlights the Angle threshold value.` ARIA pattern: `aria-labelledby="c43-title c43-desc"` on the `<svg>` root.

**Notes on the locked target set:**

- Phase 6 PRODUCTION plan-lock anticipated 5 likely targets (Amount, Segments, Angle Limit, Limit Method, Clamp Overlap). Clamp Overlap was **dropped** because it lives inside the collapsed Geometry sub-panel and is not visible in the captured PNG.
- Angle Limit and Limit Method were initially considered as a single combined callout, then **split into 2** separate callouts (`LIMIT METHOD` row showing the Angle enum dropdown, `ANGLE` row showing the 30 degree threshold value) since the lesson body Bevel Modifier Advantages card emphasizes both the smart-bevel mechanism (Limit Method) and the threshold value (Angle).
- Leaders fan out diagonally up-left from each ellipse left edge to a marker positioned at the right of each badge, mirroring the c28 multi-callout idiom (c28 had 3 callouts; c43 extends the pattern to 4).
- Badge positions chosen to clear the viewport top-left overlay text (`User Perspective` / `(1) Collection | L06_BevelModCube` at x=43 to x=220) and to clear the Outliner content (Scene Collection / Camera / L06_BevelModCube / Light) which starts at x=1240. All 4 badges sit in the viewport area between x=240 and x=1120 with the y=87-133 badge row hovering above the cube top.

### c41 composite-overlay coords (NEW; locked at this plan-lock via composite PNG visual review)

Positive-green panel-label composite-overlay on `lesson_06_41_edge_vs_vertex_bevel.png` (2562x720) covering the 2 composite panels: `EDGE BEVEL` for panel 1 (full-edge chamfer), `VERTEX BEVEL` for panel 2 (single-corner cut). viewBox `0 0 2562 720` matching the source PNG dimensions. Identical geometry to c25 since both are 2562x720 2-panel composites with the same panel boundaries; c41 is the second composite-overlay added to Lesson 06 after the c25 Phase 4 INTEGRATION precedent.

**Colorway:** positive-green (rect fill `#4ADE80`, text fill `#0f1a14`).

**Shared geometry:** rect `rx=6 fill=#4ADE80`; text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size=22 font-weight=700 text-anchor=middle fill=#0f1a14 letter-spacing=2`. No ellipse, no leader, no marker (composite-overlay variant per style guide v4).

| Callout id     | Label          | Rect (x, y, w, h)     | Text (x, y) |
| -------------- | -------------- | --------------------- | ----------- |
| `c41-panel1`   | `EDGE BEVEL`   | 500, 644, 280, 46     | 640, 675    |
| `c41-panel2`   | `VERTEX BEVEL` | 1782, 644, 280, 46    | 1922, 675   |

**Title id:** `c41-labels-title` with text `Edge Bevel vs Vertex Bevel panel labels`. **Desc id:** `c41-labels-desc` with text `Two centered positive-green badges sit near the bottom of the composite, one per panel · the left panel carries an EDGE BEVEL badge and the right panel carries a VERTEX BEVEL badge.` ARIA pattern: `aria-labelledby="c41-labels-title c41-labels-desc"` on the `<svg>` root.

### Composite PNG visual review verdicts

All 6 Phase 6 composite PNGs reviewed at this plan-lock. The c25 trigger criterion (panels read too similarly at thumbnail scale) was applied per figure.

| #  | Panels                                                          | Verdict                                                                                                            |
| -- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 36 | 4-panel TOP ortho subdivision progression (4 / 16 / 64 / 256)   | Ships plain. Exponential growth obvious at thumbnail scale.                                                        |
| 37 | 2-panel V-polyline subdivide smoothness 0.0 vs 1.0              | Ships plain. Angular V vs rounded arc reads at a glance.                                                           |
| 38 | 2-panel flat plane vs fractal terrain                           | Ships plain. Visual contrast dramatic.                                                                             |
| 40 | 4-panel bevel segment 1 / 2 / 4 / 8 progression                 | Ships plain. Reads as #24 / #27 progression precedent. Figcaption carries the per-panel segment counts.            |
| 41 | 2-panel edge bevel vs vertex bevel                              | **NEW `c41` composite-overlay required.** WHERE-the-bevel-is distinction is subtle at thumbnail scale.             |
| 42 | 2-panel MATCAP sharp vs beveled cube                            | Ships plain. Bevel-catches-light vs flat-CG message obvious.                                                       |

c41 matches the c25 trigger criterion (the 2-panel sphere bulge comparison from Phase 4 INTEGRATION); c41 is the second composite-overlay added at INTEGRATION rather than PRODUCTION per the locked rule that overlays may be added at INTEGRATION if a PNG turns out to need a callout. The 5 plain-composite verdicts match the #24 (3-panel cube progression) / #27 (4-panel taper tower) / #31 (2-panel spin) / #34 (3-panel knife constraints) / #35 (3-panel knife project) plain-composite precedent.

### #39 file-size disposition (locked decision)

**Locked:** crop and resize in place via Pillow through `blender:execute_blender_code`, mirroring the Phase 4 sub-chat B `#45` precedent. Pre-integration step at sub-chat 1 open (runs before the bottom-up integration order kicks in).

- **Current state:** 3838x2160 native 4K snip, 1,340,913 bytes (heavier than the spec's expected `1500-1900 x 800-1100` viewport-only range; matches the #45 starting condition exactly at the same 3838x2160 / ~1.3 MB scale).
- **Target:** ~1920x1080 viewport-only, ~500 KB (mirrors #45's post-crop final).
- **Preserve in crop:** the viewport with the bevel-modal-active cube + orange bevel preview band, the top floating readout `Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5`, the bottom modal keybinding hints bar (`Confirm` · `Esc Cancel` · `Ctrl Snap` · `M Width` · `A Width` · `S Segments` · `P Profile Shape` etc.), and the right-side Properties panel showing the carried-over Bevel Modifier (bonus context for the #43 figure that follows in the lesson body).
- **Drop from crop:** top Windows titlebar, top Blender menubar + workspace tabs, bottom timeline + status bar, left toolbar.
- **No overlay viewBox to match** (no c39 planned), so the resize ratio is flexible; pick crop bounds that frame the modal-active state cleanly and accept whatever final aspect ratio falls out (target 1920x1080 nominal, accept a wider or shorter final if the modal frame and Properties panel don't fit cleanly).
- **Rationale:** smaller file size (about 800 KB drop), viewport-focused framing matches the lesson body teaching emphasis on the modal interface, and the c39-less status means there's no overlay coord dependency to break.
- **Alternative considered and rejected:** ship at native 3838x2160 / 1.34 MB. Defensible since the modal-active state is clearly captured and the Phase 6 PRODUCTION plan-lock #39 spec explicitly allowed `INTEGRATION HTML insertion sized at native PNG dimensions`. Rejected on page-weight grounds (about 800 KB above the recommended target) and on framing grounds (Windows / Blender chrome dominates the snip at native size with the viewport occupying only ~52% of the frame).

### Per-image specs

#### #43 · `lesson_06_43_bevel_modifier_settings.png` · `#bevel` · figure with c43 full callout (4 callouts), col 4/8

**oldText anchor:**

```
        <p><strong>Setup:</strong> Add Modifier → Bevel, adjust Amount and Segments</p>
    </div>

    <div class="card" style="background: #e8f5e9; border-left: 4px solid #4CAF50;">
        <h4>✅ Bevel Best Practices</h4>
```

Figure inserts between the Bevel Modifier Advantages card `</div>` (line 2 of the anchor) and the Bevel Best Practices card `<div class="card">` (line 4).

**alt:** Full Blender window in Object Mode with the Properties editor open to the Modifiers tab on the bevel modifier test cube. The right panel shows the Bevel Modifier added to `L06_BevelModCube` with Amount set to 0.1 m, Segments set to 3, Limit Method set to Angle with the Angle threshold at 30 degrees, and Shade Smooth applied to the cube; the 3D viewport on the left shows the resulting all-edge bevel on the cube under user-perspective view. Four positive-green pill badges mark the Amount field, the Segments field, the Limit Method dropdown, and the Angle threshold value.

**figcaption:** The Bevel Modifier offers the same width and segment controls as the interactive bevel operator plus a few advantages · the Limit Method dropdown lets the modifier auto-detect which edges to bevel based on their angle · the Angle threshold sets the cut-off · this combination delivers consistent automatic bevels across an entire model without manual edge selection.

**c43 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c43-*` prefix; coords per the c43 overlay coords table above). Per-callout structural author comments before each ellipse+leader+marker+badge+text group following the c28 / c30 precedent (e.g. `<!-- AMOUNT callout pointing at the Amount slider -->`).

#### #42 · `lesson_06_42_bevel_before_after_cube.png` · `#bevel` · plain figure, col 4/8

**oldText anchor:**

```
    <blockquote>
        <p><strong>Design Principle:</strong> In industrial design and product modeling, there's a rule: "Everything has at least a 0.5mm bevel." Even tiny bevels make enormous differences in realism. Look at any manufactured object – even "sharp" edges have microscopic bevels that catch light. Model accordingly!</p>
    </blockquote>

    <h3>Bevel Profiles: Custom Shapes</h3>
```

Figure inserts between the Design Principle blockquote `</blockquote>` (line 3 of the anchor) and the Bevel Profiles `<h3>` (line 5). The blockquote contains pre-existing en-dashes (`even "sharp" edges`) which pass through verbatim through the anchor.

**alt:** Two-panel MATCAP-shaded composite contrasting a sharp cube with a fully beveled cube. Left panel: the source cube with Shade Flat and zero bevel, rendered under the `basic_grey.exr` matcap, with hard edges that read as obvious CG geometry. Right panel: the same cube with all edges beveled at offset 0.05 and segments 3 and Shade Smooth applied, the bevels picking up specular highlights from the matcap and making the cube read as a physically plausible manufactured object. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** MATCAP shading reveals what bevels do for realism · the sharp cube on the left has the unmistakable hard-edge silhouette of untreated CG geometry · the beveled cube on the right catches light along every edge the way a real manufactured object does · the rule of thumb in industrial design is that everything has at least a tiny bevel.

#### #41 · `lesson_06_41_edge_vs_vertex_bevel.png` · `#bevel` · figure with c41 composite-overlay NEW, col 4/8

**oldText anchor:**

```
                <td>Rounded corners, bolt heads, soft vertices</td>
            </tr>
        </tbody>
    </table>

    <blockquote>
```

Figure inserts between the Edge Bevel vs Vertex Bevel table `</table>` (line 4 of the anchor) and the Design Principle `<blockquote>` (line 6).

**alt:** Two-panel composite contrasting Edge Bevel with Vertex Bevel on the same starting cube. Left panel labeled `EDGE BEVEL`: the cube's front-top-right edge has been beveled with `affect='EDGES'` at offset 0.3 and segments 4, producing a smooth rounded chamfer that runs the full length of the selected edge. Right panel labeled `VERTEX BEVEL`: the same cube's front-top-right corner vertex has been beveled with `affect='VERTICES'` at the same offset and segments, producing a triangular faceted cut that affects only the single corner. A 2 px Blender-orange vertical divider separates the panels and positive-green pill badges at the bottom of each panel name the bevel mode.

**figcaption:** Edge Bevel chamfers the full length of a selected edge · Vertex Bevel cuts a single corner only · use Edge Bevel for hard-surface filleting and Vertex Bevel for chamfering a sharp corner without softening the edges that meet there.

**c41 overlay markup pattern** (full inline SVG body locked at this plan-lock; per-id `c41-*` prefix; coords per the c41 composite-overlay coords table above). Matches the c25 composite-overlay markup pattern from Phase 4 INTEGRATION (two centered bottom-of-panel rect+text pairs, no ellipse / leader / marker).

#### #40 · `lesson_06_40_bevel_segment_comparison.png` · `#bevel` · plain figure, col 4/8

**oldText anchor:**

```
            <li><strong>8+ segments:</strong> Very smooth, almost perfect cylinder – for hero details</li>
        </ul>
        <p>Scroll mouse wheel while beveling to adjust in real-time!</p>
    </div>

    <h3>Edge Bevel vs. Vertex Bevel</h3>
```

Figure inserts between the Segments Tip card `</div>` (line 4 of the anchor) and the Edge Bevel vs. Vertex Bevel `<h3>` (line 6). The list item contains a pre-existing en-dash (`– for hero details`) which passes through verbatim through the anchor.

**alt:** Four-panel user-perspective closeup composite of a single cube edge beveled at increasing segment counts. Panel 1: 1 segment, the chamfered edge reads as a single flat angled face. Panel 2: 2 segments, the bevel reads as a two-face arc with a single internal edge. Panel 3: 4 segments, a noticeably smoother rounded edge with three internal edges. Panel 4: 8 segments, the bevel reads as a nearly-perfect cylinder section. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Segment count drives how round the bevel reads · `Panels: 1 segment · 2 segments · 4 segments · 8 segments` · 2 to 3 segments suit most hard surfaces · 4 to 6 are realistic for metal and plastic · 8 or more are reserved for hero details where edge silhouette matters most.

#### #39 · `lesson_06_39_bevel_operation_interface.png` · `#bevel` · plain figure (post-crop), col 4/8

**oldText anchor:**

```
            <li>Scroll <strong>mouse wheel</strong> to add more segments (smoothness)</li>
            <li>Click or press <kbd>Enter</kbd> to confirm</li>
        </ol>
    </div>

    <div class="mermaid">
```

Figure inserts between the How to Bevel ordered-list card `</div>` (line 4 of the anchor) and the `<div class="mermaid">` opening the bevel flow diagram (line 6).

**alt:** Full Blender window in Edit Mode on the bevel test cube with the Bevel modal operator active. A single front-top edge is selected and the bevel preview spreads across three segment bands highlighted in Blender-orange. Top-center floating text reads `Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5` and the bottom modal hints bar lists the available adjustments (`Confirm` · `Esc Cancel` · `Ctrl Snap` · `M Width` · `A Width` · `S Segments` · `P Profile Shape`). The Bevel Modifier panel from the next figure remains visible in the Properties editor as bonus context.

**figcaption:** The interactive Bevel operator drives the bevel width with mouse motion and the segment count with the mouse wheel · the floating readout at top-center confirms the live values · the bottom hints bar names the available in-modal adjustments · commit with click or cancel with Escape to drop the preview.

**Modal-state language note:** alt text and figcaption describe the visible modal state via the top floating readout and bottom hints bar text strings (per Phase 5 sub-chat B discovery (2) modal-status-bar-as-truth criterion and per the Phase 6 sub-chat B discovery (1) bevel-modal-readout-split correction). The lesson body How to Bevel ordered list uses `Ctrl+B` and `Ctrl+Shift+B` for invocation only; the in-modal keybindings (`M Width`, `S Segments`, etc.) named in the figcaption come straight from the captured PNG's bottom modal hints bar.

**Pre-integration crop + resize step:** before the figure insertion lands, run the locked Pillow crop + resize via `blender:execute_blender_code` on `lesson_06_39_bevel_operation_interface.png` per the #39 file-size disposition section above. Verify final file size with `Filesystem:get_file_info` (target ~500 KB; reject if final exceeds 800 KB or falls below 200 KB). This is the first sub-chat 1 step, before the bottom-up integration order begins.

#### #38 · `lesson_06_38_subdivide_fractal_terrain.png` · `#subdivide` · plain figure CARD-INTERNAL, col 8/12

**oldText anchor:**

```
            <li><strong>Result:</strong> Rough, natural-looking terrain!</li>
        </ol>
        <p><strong>Bonus:</strong> Add Subdivision Surface Modifier for smoother terrain!</p>
    </div>
```

Figure inserts between the Terrain Generation procedure `</ol>` (line 2 of the anchor) and the bonus tip `<p><strong>Bonus:</strong>` (line 3). The figure block sits INSIDE the Terrain Generation card (the only card-internal figure placement in Lesson 06 to date), so `<figure>` indents to col 8 and `<img>` / `<figcaption>` indent to col 12.

**alt:** Two-panel side-angle perspective composite of a 5-cut subdivided plane shown flat and then with the Fractal setting applied. Left panel: the plane sits flat on the world grid, the 5-cut subdivision visible as a regular grid of small faces but with zero vertical displacement. Right panel: the same 5-cut subdivision with Fractal set to 5.0 and Along Normal at 1.0, the previously-flat vertices now displaced upward and downward by procedural noise into a rough rocky terrain. WIREFRAME OVERLAY is on so the subdivision topology reads against the face fill in both panels. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** Fractal subdivision adds procedural noise displacement on top of a regular subdivide pass · a flat 5-cut plane becomes a rough terrain mesh in one step · combine with Proportional Editing to sculpt the noisy result into hills and valleys.

#### #37 · `lesson_06_37_subdivide_smoothness.png` · `#subdivide` · plain figure, col 4/8

**oldText anchor:**

```
        <p><strong>Access:</strong> After subdividing, check the Adjust Last Operation panel (bottom-left) and adjust the Smoothness slider</p>
    </div>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
        <h4>💡 Strategic Subdivision</h4>
```

Figure inserts between the Smoothness card `</div>` (line 2 of the anchor) and the Strategic Subdivision card `<div class="card">` (line 4). The `<div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">` opening tag pattern repeats elsewhere in the lesson; the 5-line anchor is grounded uniquely by the preceding `Access: After subdividing, check the Adjust Last Operation panel` line per handoff grep verification (count=1).

**alt:** Two-panel side-angle composite of a V-shaped polyline mesh subdivided with the Smoothness slider set to two different values. Left panel: Smoothness 0.0, the subdivided V keeps its angular geometry, the new midpoint vertex landing exactly on the original line between the V's two endpoints, so the V remains a sharp angle. Right panel: Smoothness 1.0, the same V with Smoothness pushed to maximum, the new midpoint vertex bulging outward from the original line into a rounded arc that softens the V into a curve. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** The Adjust Last Operation panel's Smoothness slider controls how far new vertices are pulled away from the original surface · 0.0 keeps subdivision faithful to existing geometry · 1.0 maximizes curvature for an organic rounded result · intermediate values blend the two effects.

#### #36 · `lesson_06_36_subdivide_levels.png` · `#subdivide` · plain figure, col 4/8

**oldText anchor:**

```
        <p><strong>Be cautious:</strong> Too many subdivisions can make your mesh unmanageable and slow down Blender!</p>
    </div>

    <h3>Subdivide vs. Subdivision Surface</h3>
```

Figure inserts between the Subdivide Levels card `</div>` (line 2 of the anchor) and the Subdivide vs. Subdivision Surface `<h3>` (line 4).

**alt:** Four-panel TOP ortho composite of a square plane subdivided progressively. Panel 1: the plane after one Subdivide call, a 2x2 grid of four faces. Panel 2: after a second Subdivide, a 4x4 grid of sixteen faces. Panel 3: after a third Subdivide, an 8x8 grid of sixty-four faces. Panel 4: after a fourth Subdivide, a 16x16 grid of two hundred and fifty-six faces. WIREFRAME OVERLAY is on so the subdivision lines read clearly against the face fill. 2 px Blender-orange vertical dividers separate the panels.

**figcaption:** Subdivide multiplies face count by four with each pass · 4 then 16 then 64 then 256 · matches the lesson body table above · the exponential growth is why over-subdividing slows Blender down quickly.

### ID prefix registry update (Phase 6 INTEGRATION)

- **One new PNG overlay id added at INTEGRATION:** `c41` (positive-green composite-overlay, 2-badge `EDGE BEVEL` / `VERTEX BEVEL` for the 2-panel edge-vs-vertex bevel composite). Added per the locked rule that overlays may be added at INTEGRATION if a PNG turns out to need a callout (precedent: c25 at Phase 4 INTEGRATION plan-lock). Plan-locked PNG overlay registry total grows from 13 to **14** entries. Full 14-entry list after this plan-lock: `c2`, `c3`, `c10`, `c16`, `c20`, `c23`, `c25`, `c28`, `c30`, `c41` NEW, `c43`, `c45`, `c46`, `c49`.
- **`c43` overlay coords locked at this plan-lock** (already reserved at Phase 6 PRODUCTION plan-lock from the initial planning registry; coords sized at this plan-lock per the c2 / c3 / c25 / c28 / c30 multi-label deferral precedent of locking coords after the source PNG is in hand).
- **No SVG ids added at INTEGRATION.** Phase 6 has no SVGs per the locked Option L phase plan; SVGs are concentrated in Phases 1 / 2 / 3 at `pf` / `sr` / `dd`.

Cumulative Lesson 06 PNG overlay tally projection at Phase 6 INTEGRATION close: **17 PNG overlays integrated** (15 currently integrated + `c41` + `c43`), broken down as 12 positive-green full-callouts (`c2`, `c3`, `c10`, `c16`, `c20`, `c28`, `c30`, `c43` NEW, `c45`, `c46`, `c49`; the 11th and 12th being c28 and c30 from Phase 5 INTEGRATION sub-chat 1), 2 positive-green composite-overlays (`c25`, `c41` NEW), 1 warning-red full-callout (`c23`), 3 decorative-shape-only (`c13`, `c14`, `c15`). (Note: Phase 6 PRODUCTION plan-lock Status bullet projected 16 integrated at Phase 6 INTEGRATION close based on the 13-entry registry plus `c43`. The c41 addition at this plan-lock bumps the projection by 1, to 17.)

### Execution cadence (sub-chat 1)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- **First step (pre-integration):** run the locked #39 Pillow crop + resize via `blender:execute_blender_code` per the #39 file-size disposition section; verify final file size with `Filesystem:get_file_info` before #39 integration
- **Then bottom-up execution order within the sub-chat:** `#43 → #42 → #41 → #40 → #39 → #38 → #37 → #36`
- No new em-dashes in figcaptions, alt text, status bullets, or any other new prose; middle-dot (`·`) for separation; pre-existing en-dashes in source content (#42 blockquote `even "sharp" edges`; #40 segment-tip list item `– for hero details`) preserved verbatim through edit anchors
- Multi-edit `Filesystem:edit_file` calls with 3+ edits and long content avoided per the locked serialization-truncation workaround; one edit per figure (8 edits total), each as a single dry-run-then-commit pair; the 8-row placement-table flip batch at sub-chat 1 close still acceptable as a single 8-edit batch per the Phase 5 INTEGRATION sub-chat 1 precedent
- After all 8 figure inserts complete, perform doc updates: flip placement-table rows #36 / #37 / #38 / #39 / #40 / #41 / #42 / #43 from `captured; not integrated` to `integrated`; append Status section close bullet (single edit, long content); rewrite bottom-of-doc Next chat section pointing at the post-Lesson-06 next step (mid-lesson browser QA or Lesson 06 close); rewrite `session.md` to point at same
- ID prefix registry update needed at sub-chat 1 close: add `c41` to the PNG overlay ids list, bringing the total from 13 to 14 entries
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → `Filesystem:get_file_info` size check before retry; applies to any heavy-content commit, particularly the #43 c43 multi-callout commit which carries the largest inline-SVG block this phase at 4 ellipses + 4 leaders + 4 markers + 4 badges + 4 text elements)
- **#38 card-internal placement caution:** the only Phase 6 figure at non-section-level depth; `<figure>` indents to col 8 and `<img>` / `<figcaption>` to col 12; double-check the dry-run diff for #38 specifically against the card structure before commit
- Warn Ray before context tightens; if the fallback 6a + 6b split is invoked, close 6a with all doc updates that reflect 6a-only progress (5 placement-table flips, partial Status bullet) and open 6b in a fresh chat
- Append Status section bullet at sub-chat 1 close (or 6a / 6b close if split invoked)

### Phase 6 INTEGRATION close criterion

All 8 Phase 6 figures integrated into `lesson_06_edit_mode_essentials.html` `#subdivide` / `#bevel` sections with the locked anchors, alt text, figcaptions, overlay markup (c43 4-callout, c41 NEW composite-overlay 2-badge), and the #39 pre-integration Pillow crop + resize. Placement-table rows #36 / #37 / #38 / #39 / #40 / #41 / #42 / #43 all flipped to `integrated`. Status section close bullet documents the integration with per-figure HTML byte deltas, the #39 pre/post file-size delta, and any execution deviations from this plan. Bottom-of-doc Next chat section repointed at the post-Lesson-06 next step (mid-lesson browser QA pass recommended). `session.md` rewritten to point at same.

Plan-lock close criterion: new `Phase 6 INTEGRATION plan` section written into this doc between `Phase 6 PRODUCTION plan` and `Locked rules`; sub-chat split locked as 1 sub-chat with 6a / 6b fallback on the `#bevel` / `#subdivide` section boundary; per-figure 3-5 line `oldText` anchor candidates locked grounded on grep-verified-unique key phrases; c43 4-callout overlay spec locked with Pillow-scanned coords (carried over from the handoff doc); c41 NEW composite-overlay spec locked with c25-precedent geometry; composite PNG visual review concluded one new composite-overlay needed (c41); #39 file-size disposition locked as crop + resize per #45 precedent; ID prefix registry bumped from 13 to 14 entries with c41 added. Status bullet appended documenting plan-lock details. Next chat section repointed at Phase 6 INTEGRATION sub-chat 1 execution. `session.md` rewritten to point at same. Met by this section.

**This is the final image-work plan-lock of Lesson 06.** Sub-chat 1 execution closes all 50 of 50 lesson images integrated and Lesson 06 becomes ready for mid-lesson browser QA and any cleanup pass.

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
| 28  | `lesson_06_28_array_modifier_panel.png`            | PNG  | `c28`     | `#duplicate-array`      | After Array Modifier: Parametric Repetition workflow | integrated                   |
| 29  | `lesson_06_29_array_modifier_result.png`           | PNG  | (none)    | `#duplicate-array`      | After Array Modifier Options table                   | integrated                   |
| 30  | `lesson_06_30_spin_operation_setup.png`            | PNG  | `c30`     | `#spin-screw`           | After Spin: Creating Radial Geometry card            | integrated                   |
| 31  | `lesson_06_31_spin_vase_creation.png`              | PNG  | (none)    | `#spin-screw`           | After Spin Settings table                            | integrated                   |
| 32  | `lesson_06_32_screw_modifier_spring.png`           | PNG  | (none)    | `#spin-screw`           | After Screw Modifier: Threaded and Spiral Forms card | integrated                   |
| 33  | `lesson_06_33_knife_tool_active.png`               | PNG  | (none)    | `#knife-tool`           | After Basic Knife Tool Usage card                    | integrated                   |
| 34  | `lesson_06_34_knife_tool_constraints.png`          | PNG  | (none)    | `#knife-tool`           | After Knife Tool Modes and Options table             | integrated                   |
| 35  | `lesson_06_35_knife_project_operation.png`         | PNG  | (none)    | `#knife-tool`           | After Knife Project: Advanced Cutting workflow       | integrated                   |
| 36  | `lesson_06_36_subdivide_levels.png`                | PNG  | (none)    | `#subdivide`            | After Subdivide Warning card                         | captured; not integrated     |
| 37  | `lesson_06_37_subdivide_smoothness.png`            | PNG  | (none)    | `#subdivide`            | After Subdivide Smooth section                       | captured; not integrated     |
| 38  | `lesson_06_38_subdivide_fractal_terrain.png`       | PNG  | (none)    | `#subdivide`            | Within Subdivide Practice exercise                   | captured; not integrated     |
| 39  | `lesson_06_39_bevel_operation_interface.png`       | PNG  | (none)    | `#bevel`                | After Basic Bevel Operation card                     | captured; not integrated     |
| 40  | `lesson_06_40_bevel_segment_comparison.png`        | PNG  | (none)    | `#bevel`                | After Bevel Segments Explained card                  | captured; not integrated     |
| 41  | `lesson_06_41_edge_vs_vertex_bevel.png`            | PNG  | (none)    | `#bevel`                | After Edge Bevel vs Vertex Bevel table               | captured; not integrated     |
| 42  | `lesson_06_42_bevel_before_after_cube.png`         | PNG  | (none)    | `#bevel`                | After Design Principle blockquote                    | captured; not integrated     |
| 43  | `lesson_06_43_bevel_modifier_settings.png`         | PNG  | `c43`     | `#bevel`                | After Bevel Modifier: Non-Destructive Beveling card  | captured; not integrated     |

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

**Phase 6 INTEGRATION plan-lock.** Phase 6 PRODUCTION CLOSED 2026-05-25 at sub-chat B close. **All Lesson 06 PRODUCTION work is complete: 50 of 50 lesson images on disk** (8 Phase 6 = #36 614,190 / #37 390,678 / #38 581,386 / #39 1,340,913 / #40 748,518 / #41 509,732 / #42 671,358 / #43 470,706 bytes). 42 of 50 integrated (unchanged from Phase 5 INTEGRATION close since Phase 6 PRODUCTION is PRODUCTION only). Only Phase 6 INTEGRATION remains for full Lesson 06 image-work closeout. After Phase 6 INTEGRATION, Lesson 06 image work is fully complete and the lesson is ready for the mid-lesson browser QA and any cleanup pass.

Read `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md` first (rewritten at this sub-chat B close to point at Phase 6 INTEGRATION plan-lock), then the 2026-05-25 Phase 6 PRODUCTION sub-chat B CLOSED Status bullet in the Status section of this doc (above), then the existing `Phase 6 PRODUCTION plan` section of this doc as background, then the 8 Phase 6 placement-table rows (all `captured; not integrated`) for section + anchor mapping, then the `#subdivide` and `#bevel` slices of `lesson_06_edit_mode_essentials.html` (per the Phase 6 PRODUCTION plan-lock chat: current size 224,002 bytes / 3,481 lines; section anchors at `#subdivide` line 3071, `#bevel` line 3239, `#lesson-summary` line 3478, 0/4/8-space indentation depth matching prior phases — re-verify since the file may have shifted if any other edits landed since). Use the `Phase 5 INTEGRATION plan` section as structural template for the new `Phase 6 INTEGRATION plan` section.

**Plan-lock scope (model on Phase 5 INTEGRATION plan-lock):** verify the 8 anchor key phrases are grep-unique against the current HTML; lock the bottom-up execution order (descending document line order, model on Phase 5 INTEGRATION sub-chat 1's #35 → ... → #28 pattern); draft 3-5 line `oldText` anchors for all 8 figures plus alt text and figcaption prose (zero new em-dashes, middle-dot separators, pre-existing en-dashes in source HTML preserved verbatim through anchors); run Pillow band scan on #43 for c43 multi-callout pixel coords (likely targets per the locked Phase 6 PRODUCTION plan #43 spec: Amount slider / width, Segments value, Angle Limit option, Limit Method dropdown, Clamp Overlap checkbox; positive-green `#4ADE80` badges with `#0f1a14` text per c28 / c30 multi-callout precedent); composite PNG visual review of #36 (4-panel subdivide levels), #37 (2-panel subdivide smoothness), #38 (2-panel subdivide fractal terrain), #40 (4-panel bevel segment comparison), #41 (2-panel edge vs vertex bevel), #42 (2-panel before/after) for any new composite-overlay needs beyond c43 (per Phase 4 INTEGRATION plan-lock #25 composite-overlay precedent where a composite-overlay was added at INTEGRATION when panels read too similarly at thumbnail scale); decide on a #39 file-size disposition (native 3838x2160 1.28 MB vs Phase 4 #45 precedent crop + resize via Pillow through `blender:execute_blender_code` to viewport + modal-bar + Properties-panel only); lock the sub-chat split (likely 1 sub-chat for all 8 figures with a 6a / 6b fallback split point on the `#subdivide` / `#bevel` section boundary, model on Phase 5 INTEGRATION 5a / 5b fallback split that was not invoked).

**ID prefix registry update at plan-lock:** `c43` already reserved from initial planning; resolve final overlay target set + coordinate table at plan-lock via the Pillow band scan above. No new SVGs (Phase 6 has none per Option L). Cumulative Lesson 06 PNG overlay tally projects to 16 after Phase 6 INTEGRATION close (15 currently integrated + c43); plan-locked PNG overlay registry total stays at 13 entries with c43 the last to flip from planned to integrated.

**At plan-lock close:** flip no placement-table rows (plan-lock is plan-lock only); append the Phase 6 INTEGRATION plan-lock Status bullet to the Status section; insert the new `Phase 6 INTEGRATION plan` section between `Phase 6 PRODUCTION plan` and `Locked rules` (estimated +25-30 KB delta per Phase 5 INTEGRATION plan-lock precedent at +27,784 bytes); repoint this Next chat section at Phase 6 INTEGRATION sub-chat 1 execution; rewrite `session.md` to point at same. Counts at plan-lock close: 50 of 50 produced, 42 of 50 integrated (unchanged since plan-lock is plan-lock only).

**Alternative next steps if Ray wants something other than Phase 6 INTEGRATION plan-lock:**

- **Lesson 06 mid-lesson browser QA pass** (verify all 42 integrated figures render correctly in browser, especially the 2 most-recent 3-callout overlays c28 / c30 from Phase 5 INTEGRATION sub-chat 1 and the c25 composite-overlay from Phase 4). Recommended before Phase 6 INTEGRATION starts; surfaces any rendering issues while the integration patterns are fresh, and the 8-image visual review at Phase 6 INTEGRATION plan-lock will be cleaner if the existing 42 are already QA'd.
- **Lesson 05 retroactive browser QA pass paired with Lesson 06 mid-lesson QA pass.** Optional cleanup chat per Ray's 2026-05-23 direction (lesson 5 cleanup deferred to be paired with lesson 6 QA / cleanup).
- **#39 crop + resize in place** via the Phase 4 sub-chat B #45 Pillow-through-`blender:execute_blender_code` precedent if Ray decides at-now (rather than at Phase 6 INTEGRATION plan-lock) to trim the Windows / Blender chrome and bring the file size down ahead of integration. Brief sub-chat: single Pillow call + size verify + Status bullet appendix.
- **Non-Blender-course work.** Phase 6 PRODUCTION is cleanly closed with all 50 PNGs on disk; Phase 6 INTEGRATION plan-lock can pick up any future chat without losing context.
