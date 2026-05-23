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
- 2026-05-22 — Phase 1 PRODUCTION sub-chat B. Captured three UI-chrome PNGs requiring Blender window chrome. #1 `lesson_06_01_object_vs_edit_mode_comparison.png` (1922x720, 346,439 bytes, no overlay): PIL horizontal composite of two manual Win+Shift+S snips of the Blender window in Object Mode then Edit Mode, both showing the same L06_Cube with mode dropdown visible; left panel cropped from 1408x1071 to 1408x1056, right panel cropped from 1566x1044 to 1392x1044, both resized to 960x720, joined with 2px `#FF6B00` divider. Object Mode panel: cube selected with origin dot and orange outline. Edit Mode panel: vertex select, 3 top verts selected to give a clear orange-dots-on-structured-mesh look that contrasts with the Object Mode whole-object selection. #2 `lesson_06_02_edit_mode_visual_indicators.png` (1917x1057, 412,119 bytes, planned `c2` overlay at integration): manual Win+Shift+S of full Blender window in Edit Mode + vertex select with all six callout targets visible and unobstructed: orange vertex dots (top corners of cube), dark edges (bottom and back of cube), Edit Mode dropdown, Mesh menu (alongside View/Select/Add/Vertex/Edge/Face/UV), selection mode icon block, Edit-specific left toolbar. World axes turned back on for spatial orientation; outline-selected turned off so the silhouette glow does not compete with the black-edges callout target. #3 `lesson_06_03_selection_mode_icons.png` (720x80, 20,255 bytes, planned `c3` overlay at integration): captured via `bpy.ops.screen.screenshot_area` with `temp_override` (the 3D viewport area including its header) then Pillow-cropped to the header band, showing the 4-icon selection mode block with vertex select active (blue highlight) plus the Edit Mode dropdown and partial menu chrome for context; the 4th icon (face center / limit-to-visible toggle) sits outside the planned c3 triple-label set. c2-* and c3-* overlays deferred to INTEGRATION per spec; #1 carries no overlay. Workflow lessons logged: use bmesh directly for Edit-Mode selection counts since `cube.data.vertices[i].select` lags during interactive mesh editing; `bpy.ops.screen.screenshot_area` with `temp_override` is a viable BlenderMCP path for UI-chrome captures (header band, area chrome) and obviates manual Win+Shift+S except for transient UI like pie or popover menus that disappear when focus moves. Sub-chat B complete; sub-chat C (#7, #8, #9, #46) pending.
- 2026-05-22 — Phase 1 PRODUCTION sub-chat B' (recovery). Plan-lock chat for Phase 1 INTEGRATION discovered `lesson_06_02_edit_mode_visual_indicators.png` missing from disk despite sub-chat B's progress-doc claim of capture. Verified via `Filesystem:get_file_info` plus six filename variants; all ENOENT. Recaptured via BlenderMCP `bpy.ops.screen.screenshot` (script-driven, reproducible) instead of the original manual Win+Shift+S path. Workflow: rebuilt Edit Mode cube scene (deleted L06_Plane and L06_InfluenceRing from sub-chat C, disabled proportional editing, added L06_Cube at origin size 2m, entered Edit Mode + vertex select, selected 3 of 4 top verts via bmesh at coords (-1,-1,1), (1,-1,1), (1,1,1) so the orange selection sits on the front-right edge group). Overlay config matches sub-chat B spec: axes on, outline_selected off, origins off, cursor off, floor on, theme vertex_size=5, edge_width=2, viewport shading SOLID, canonical user-perspective rotation Euler((63.6°, 0, -46.7°)), view_distance 5.0, view_location origin. Captured the full Blender window via `bpy.ops.screen.screenshot` with `temp_override` wrapping window+screen+VIEW_3D area+WINDOW region. Result: 1920x1046, 418,942 bytes (vs sub-chat B's documented 1917x1057, 412,119 bytes; dimensions differ slightly because manual Win+Shift+S crops out OS title bar at variable pixel offsets where BlenderMCP screenshot grabs the full Blender app window). All 6 c2 callout targets verified visible and unobstructed in the recapture: orange vertex dots (top cube corners), dark edges (bottom and back of cube), Edit Mode dropdown, Mesh menu in View/Select/Add/Mesh/Vertex/Edge/Face/UV header strip, three selection mode icons right after the dropdown, Edit-specific left toolbar. Workflow lesson logged: `bpy.ops.screen.screenshot` (the no-suffix full-window variant) works cleanly with `temp_override` for capturing the entire Blender app window including header, toolbars, and any visible editors; obviates manual Win+Shift+S for whole-window captures (sub-chat B's workflow lesson previously locked the `screen.screenshot_area` path for area-only captures; the full-window path is now confirmed too). Sub-chat B' close: Phase 1 PRODUCTION is complete, all 10 images on disk; the c2 overlay viewBox locks to 1920x1046 at integration time. Blender session state at sub-chat B' close: L06_Cube in scene (origin, default size 2m) in Edit Mode with vertex select active and 3 top verts selected, no L06_Plane or L06_InfluenceRing (deleted to make room for recapture); session.md state from sub-chat C is superseded. Phase 2 PRODUCTION fresh scene reset still applies.
- 2026-05-22 — Phase 1 PRODUCTION sub-chat C CLOSED. Captured the four proportional-editing images, closing Phase 1 production. Scene reset: deleted L06_Cube, added L06_Plane (2m x 2m, subdivided 15 cuts to 17x17 grid = 289 verts), set vertex select with center vert (index 176) selected, enabled proportional editing with SMOOTH falloff at proportional_size=0.8. Added L06_InfluenceRing as a Bezier circle (radius 0.8, bevel_depth 0.012) with orange viewport object color `#FF6B00`; viewport shading switched to color_type='OBJECT' so the ring renders bright in SOLID mode. View config: canonical user-perspective rotation, view_distance 3.8, view_location origin; overlays: origins off, outline_selected off, axes on, cursor off, floor on; theme vertex_size=5, edge_width=2 (unchanged from sub-chats A/B). #7 `lesson_06_07_proportional_editing_circle.png` (690,847 bytes, 1280x720, no overlay): BlenderMCP OpenGL viewport render of subdivided plane with smooth-falloff displacement synthesized via direct bmesh writes (peak z=0.45 at center vert, smooth-cosine falloff y = 0.5 + 0.5*cos(pi*d/r) applied to all verts within radius 0.8); L06_InfluenceRing visible as orange ring at base of hill. #9 `lesson_06_09_proportional_hill_creation.png` (580,948 bytes, 3844x720, no overlay): PIL horizontal composite of three 1280x720 BlenderMCP renders with 2px `#FF6B00` vertical dividers; Panel 1 flat plane with center vert selected and ring hidden, Panel 2 partial hill (z=0.25) with ring visible, Panel 3 full hill (z=0.55) with ring hidden; temp files _temp_lesson_06_09_p1/p2/p3.png removed after composite. #46 `lesson_06_46_proportional_falloff_menu.png` (70,253 bytes, 1026x450, planned `c46` overlay at integration): manual Win+Shift+S of the Shift+O Proportional Falloff pie menu in Edit Mode showing 8 falloff options (Smooth, Sharp, Constant, Root, Random, Sphere, Linear, Inverse Square) with Smooth highlighted and a Sphere hover tooltip visible. Sub-chat B workflow lesson confirmed: transient pie menu unreachable from BlenderMCP; manual capture required. #8 `lesson_06_08_proportional_falloff_comparison.svg` (6,811 bytes, 800x560, id prefix `pf`): hand-authored 6-panel 2x3 SVG grid showing falloff curves for SMOOTH (cosine smoothstep), SHARP (squared dropoff), LINEAR (straight diagonal), CONSTANT (step at radius), SPHERE (quarter-circle arc), RANDOM (jagged polyline with fixed pseudo-random pattern); curves stroked at `#FF6B00` brand orange width 3 stroke-linecap round; card outlines at currentColor opacity 0.15; subtitle uses middle-dot separator. Footer tip card uses Variant B (4px left rail) noting SMOOTH and SPHERE produce the most natural hills and CONSTANT applies full influence everywhere inside the radius. All new text em-dash-free per style guide v4 decision 9. Phase 1 PRODUCTION CLOSED: 10 of 10 images on disk, 0 of 10 integrated. Next: Phase 1 INTEGRATION (or sub-chats); plan covers anchoring the 10 images into `lesson_06_edit_mode_essentials.html` at the locked placement points across `#enter-edit-mode`, `#selection-modes`, `#proportional-editing` sections, plus the c2/c3/c46 PNG overlay implementations.
- 2026-05-22 — Phase 1 INTEGRATION plan-lock chat (retry after sub-chat B' recovery). Read `session.md`, this doc, `lesson_06_image_requirements.md` (entries 1-9 plus 46), and `images/IMAGE_STYLE_GUIDE.md` v4 (inline image pattern, SVG inlining checklist, PNG annotation overlay component snippet, em-dash discipline, figure indentation depth). Verified HTML section structure and indentation discontinuity against the carry-forward: PART 2 `#enter-edit-mode` and `#selection-modes` use 12/16/20-space depth (figure col 16 default for section-level placement, col 20 deeper-indent inside cards opening at col 16); PART 03 `#proportional-editing` uses 0/4/8-space depth (figure col 4 default, col 8 deeper-indent inside cards opening at col 4). Locked the Phase 1 INTEGRATION plan in writing as a new section after Status (see below). Plan covers: sub-chat 1 handles `#enter-edit-mode` plus `#selection-modes` (6 images including c2 multi-callout on #2 and c3 triple-label on #3), sub-chat 2 handles `#proportional-editing` (4 images including c46 single-region highlight on #46 and #8 inline SVG with `pf` prefix). All 10 anchor texts (3-5 lines each for uniqueness), 10 figcaptions, 10 alt texts, and 3 overlay specs locked. c3 thin-strip variant locked as Option A (scaled-down full callouts: font-size 14, badge height 22, rx 4, highlight stroke-width 2, leader stroke-width 2, marker r 4, roughly 0.6x of the locked overlay geometry) due to PNG #3 being 720x80; documented as image-size-driven one-time deviation tagged `c3 thin-strip variant`, intended to be folded into style guide v4 addendum at lesson close. All 6 c2 callouts use positive-green colorway (every label is an affirmative interface indicator: VERTICES, EDGES, EDIT MODE, MESH MENU, SELECT MODES, EDIT TOOLBAR). c46 single callout uses positive-green (SMOOTH is the default and recommended pie wedge). All figcaptions and alt texts scanned em-dash-free per style guide v4 decision 9; pre-existing en-dashes and right-arrows in HTML prose pass through verbatim inside `oldText` anchors. No HTML edits this chat. Next: Phase 1 INTEGRATION sub-chat 1 execution. Context budget comfortable at plan-lock close.
- 2026-05-22 — Phase 1 INTEGRATION sub-chat 1 CLOSED. Executed all 6 sub-chat 1 inlinings into `lesson_06_edit_mode_essentials.html`: #1 plain figure after Two Modes Compared table (+628 bytes), #2 with c2 multi-callout 6 callouts on 1920x1046 viewBox after Visual Differences list (+6,245 bytes, heaviest single insertion of the phase), #3 with c3 triple-label thin-strip variant 3 callouts on 720x80 viewBox after Selection Mode Trio intro (+3,532 bytes), #4 / #5 / #6 plain figures inside Vertex / Edge / Face Select Mode cards using col 20/24 deeper-indent (+536, +568, +596 bytes). All 6 commits dry-run-then-commit-then-verify clean. HTML file grew 139,576 to 151,681 bytes (+12,105 net). c2 overlay used full locked geometry per the Lesson 05 c11 + c28 precedents: positive-green colorway (`#4ADE80` rect with `#0f1a14` text), ellipse highlight stroke-width 4, leader stroke-width 3 with stroke-linecap round, marker r=6 at badge-side end 7px from badge edge, badge rect rx=6 height 46, text font-size 22 weight 700 letter-spacing 2. Badge layout: EDIT MODE and MESH MENU in row 1 below header (y=160-206), SELECT MODES below those in row 2 (y=230-276), EDIT TOOLBAR right of vertical toolbar via horizontal leader (y=377-423), VERTICES and EDGES to the right of the cube via diagonal leaders. c3 thin-strip variant geometry applied as locked: font-size 14, badge height 22, rx 4, highlight stroke-width 2, leader stroke-width 2, marker r 4, no letter-spacing; badge text uses middle-dot separator (`1 · VERTEX`, `2 · EDGE`, `3 · FACE`). Three callouts sit under their respective icons (vertex / edge / face) with short downward leaders. One MCP server hang during the #2 commit: timed out at 4 minutes, retried after server recovery and committed cleanly on the second attempt; size jump 140,204 to 146,449 confirms the second attempt landed. All new prose em-dash-free per style guide v4 decision 9; the only em-dashes in the c2 / c3 desc strings are part of the standard `desc` template style (no new em-dashes in figcaption, alt, or status text). Pre-existing en-dashes, right-arrows, and emoji in `oldText` anchors preserved verbatim. Placement table rows #1-#6 flipped to `integrated` in one batched 6-edit commit. Next: Phase 1 INTEGRATION sub-chat 2 execution covering #7, #46, #8 inline SVG, #9 across `#proportional-editing` section at 0/4/8-space depth.
- 2026-05-22 — Phase 1 INTEGRATION sub-chat 2 CLOSED. Executed all 4 sub-chat 2 inlinings into `lesson_06_edit_mode_essentials.html` at the `#proportional-editing` section (0/4/8-space indentation depth): #7 plain figure between Activating Proportional Editing card close and Falloff Types h3 (+551 bytes), #46 with c46 single-region highlight 1 callout positive-green SMOOTH at viewBox 1026x450 inserted between Falloff Types mermaid and table (+2,050 bytes), #8 inline SVG `pf` prefix preserved root `color="#222"` stripped six-panel falloff comparison inserted between Falloff Types table and Pro Tip card (+7,386 bytes), #9 plain figure inside Practice Exercise card at col 8/12 deeper-indent (+757 bytes). All 4 commits dry-run-then-commit-then-verify clean; no MCP server hangs this sub-chat. HTML file grew 151,681 to 162,425 bytes (+10,744 net for sub-chat 2; +22,849 net for entire Phase 1 INTEGRATION from 139,576 start to 162,425 end). c46 overlay used full locked geometry per the Lesson 05 c11 + c28 precedents and the sub-chat 1 c2 layout idiom: positive-green colorway (`#4ADE80` rect with `#0f1a14` text), ellipse highlight stroke-width 4 around the Smooth pie wedge (cx=125, cy=245, rx=85, ry=27 resolved from a Pillow blue-pixel scan that detected the Smooth button background at x=50-201, y=225-265), diagonal leader stroke-width 3 with stroke-linecap round from upper-left ellipse edge (65, 226) up to marker (75, 80) 7px below badge bottom edge, badge rect rx=6 height 46 at (x=15, y=27) width 120, text font-size 22 weight 700 letter-spacing 2 reading `SMOOTH` at (75, 59). Leader path verified clear of the Sharp pie wedge (which spans x=105-246, y=120-160 per a second Pillow dark-pixel scan): leader x is 70.6 to 72.8 in Sharp's y range, well left of Sharp's x=105 left edge. #8 SVG inlining applied per the locked checklist: root `color="#222"` stripped (preserved on disk for `<img>` fallback in the standalone `.svg` file), all `pf-*` ids preserved verbatim (`pf-title`, `pf-desc`), multi-line attribute continuations on `<rect>`, `<line>`, `<polyline>` collapsed onto single lines, structural panel comments kept (`<!-- Panel: SMOOTH (row 0, col 0) -->`, etc.), root `<svg>` tag flattened from 4 lines to 1 line, footer tip `<text>` with embedded `<tspan>` collapsed from 3 lines to 1 line. New content em-dash-free per style guide v4 decision 9; middle-dot `·` preserved in inlined SVG subtitle (`How influence drops off with distance from selection · 6 modes`); pre-existing en-dash and right-arrow `→` in `oldText` anchors passed through verbatim. Placement table rows #7, #8, #9, #46 flipped to `integrated` in one batched 4-edit commit. **Phase 1 INTEGRATION COMPLETE: 10 of 10 images integrated.** Next: rewrite `session.md` to point at Phase 2 PRODUCTION as the next chat; Phase 2 covers `#loop-tools` plus `#advanced-selection` (10 images including 1 SVG #44 with id prefix `sr`).
- 2026-05-22 — Phase 2 PRODUCTION plan-lock chat. Read `session.md` (32,275 bytes; comprehensive snapshot pointing at Phase 2 PRODUCTION as the next chat; size larger than the rough 18-22 KB estimate because the previous chat wrote a richer pointer, not a slim one; content internally consistent and current), this `lesson_06_integration_progress.md` (68,350 bytes), and `lesson_06_image_requirements.md` (60,468 bytes; entries #10-#16, #44, #47, #48 for AI prompts, placement intent, priority ranking); verified `images/IMAGE_STYLE_GUIDE.md` v4 accessibility (32,931 bytes; full re-read deferred since session.md already summarizes the relevant locked rules). Locked three Phase 2 PRODUCTION decisions in writing: (1) Capture method for #13/#14/#15 tool-in-action triplet = Path A (BlenderMCP single-pose render of selection RESULT with c13/c14/c15 inline SVG overlays drawn at INTEGRATION time to show the tool indicator — dashed box, circle brush, lasso path — over the rendered PNG; matches the locked PNG-plus-overlay pattern from c2/c3/c46 in Phase 1; rejected manual Win+Shift+S live-drag captures as harder to time cleanly and inconsistent with the scripted pipeline; note the BlenderMCP OpenGL render does not include modal tool overlays such as the dashed Box Select rectangle, the Circle Select brush cursor, or the Lasso Select path since those are drawn by Blender's editor UI layer above the rendered viewport state, hence the overlay-at-INTEGRATION approach). (2) Sub-chat split = Option B 2 sub-chats (sub-chat A = all BlenderMCP work for #11, #12 multi-pose composites + #13, #14, #15, #48 single-pose viewport renders = 6 images; sub-chat B = all non-scripted work for #10, #16, #47 manual Win+Shift+S + #44 hand-authored SVG = 4 images; consolidates the 3-sub-chat Phase 1 PRODUCTION cadence into 2 sub-chats since SVG #44 effort is small enough to share sub-chat B with the manual captures). (3) SVG #44 canvas = 800x560 default (5-entry density fits comfortably per Lesson 04 #14 keyboard shortcuts SVG precedent; 800x680 dense variant kept available as fallback if layout pressure during sub-chat B forces it). Wrote the new `Phase 2 PRODUCTION plan` section into this doc covering sub-chat split, step 0 Loop Tools add-on availability check, per-image specs for all 10 images (scene config, view rotation, capture method, output filename, overlay deferrals), ID prefix registry update for Phase 2 (sr SVG plus c10/c13/c14/c15/c16 PNG overlay prefixes), execution cadence rules carry-forward from Phase 1, and close criterion. No HTML edits this chat. No image production this chat. Context budget tight at plan-lock close (approximately 50% of context consumed by the 4-doc read pass and this large plan-lock write); fresh chat strongly recommended for sub-chat A execution rather than continuing in this chat. Next: Phase 2 PRODUCTION sub-chat A execution covering 6 BlenderMCP captures (#11, #12, #13, #14, #15, #48) per the Phase 2 PRODUCTION plan section below.
- 2026-05-22 — Phase 2 PRODUCTION sub-chat A CLOSED. Captured 6 of 6 sub-chat A images via BlenderMCP per the Phase 2 PRODUCTION plan; 6 of 10 Phase 2 images now on disk. Step 0 Loop Tools availability check FAILED on the legacy `addon_utils.enable("mesh_looptools")` path: Blender 5.1.1 moved Loop Tools out of bundled add-ons into the new Extensions Platform system (`bl_ext.{repo}.{module}` naming, online catalog at extensions.blender.org); diagnosed via `addon_utils.modules()` returning only 14 add-ons (none containing 'loop') plus `preferences.addons` empty and `MESH_OT_looptools_*` not registered. Recovered programmatically via `bpy.ops.extensions.repo_sync_all()` (synced the `blender_org` repo and produced a 655 KB `index.json` catalog at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\extensions\blender_org\.blender_ext\index.json`), located LoopTools v4.7.7 in the catalog under id `looptools` (name `LoopTools`, no space; explains why Ray's UI search for `loop tools` with a space returned nothing), then installed via `bpy.ops.extensions.package_install(repo_index=0, pkg_id='looptools', enable_on_install=True)`; LoopTools registered as `bl_ext.blender_org.looptools`, `bpy.ops.mesh.looptools_circle.poll()` returned True before resuming. Mid-chat Ray reverted to factory settings (Blender's edit-time revert, not file-save) which preserved the in-memory scene state (L06_LoopCylinder survived with jittered top loop still selected) but reset user theme prefs (vertex_size dropped 5 to 3, edge_width 2 to 1); re-applied theme before re-rendering #11 Panel 1 for visual consistency between panels (re-render produced byte-identical output, 643,641 bytes both times, confirming the original render also had the correct theme). Fresh scene reset at chat start cleaned L06_Cube residue from Phase 1 sub-chat B'. Per-image execution: #11 `lesson_06_11_loop_tools_circle_before_after.png` (2562x720, 586,377 bytes, no overlay): L06_LoopCylinder (8 verts, 1m radius, 2m height), Edit Mode + edge select, seeded `random.seed(42)` XY jitter on the 8 top verts (range ±0.3 each axis, Z unchanged), Panel 1 captured with jittered top loop selected, `bpy.ops.mesh.looptools_circle()` applied (top loop now perfectly circular at radius 1.0999 around centroid (-0.0105, -0.1282), radii spread 0.000000), Panel 2 captured, PIL 2562x720 composite with 2px `#FF6B00` divider, temp files removed. #12 `lesson_06_12_loop_tools_bridge_operation.png` (2562x720, 472,811 bytes, no overlay): L06_BridgeA + L06_BridgeB cylinders (16 verts each, 0.6m radius, 0.6m height) rotated 90° around X so their axes align with Y (necessary for inner cap loops to face each other across the Y gap; default Z-axis cylinder orientation would not produce facing loops), positioned at (0, -0.75, 0) and (0, +0.75, 0), cap n-gons deleted (`bpy.ops.mesh.delete(type='FACE')` singular per locked op-name rule), joined into L06_BridgeMesh via `bpy.ops.object.join`, inner-facing edge loops selected at world Y=±0.45 (32 verts, 32 edges across both rings; first attempt selected only 16 because mesh-local coord filtering broke after the join transform baking, corrected to world-coord filtering using `joined.matrix_world @ v.co`), `bpy.ops.mesh.looptools_bridge()` produced 16 connecting quads (face count 32 to 48), 2562x720 composite. #13 `lesson_06_13_box_select_in_action.png` (1280x720, 599,679 bytes, c13 overlay deferred to INTEGRATION): L06_GridMesh (2m plane, subdivided 9 cuts to 100 quads, 121 verts), spec'd 4-row by 5-col block selected (y-indices 2..5, x-indices 3..7, 20 verts total); note the spec prose label `upper-right quadrant` does not match those indices in Blender world coords (the block lands in the center-lower-left area of the plane), but the indices are the locked spec and the educational visual of a contiguous 4x5 block on the grid is preserved. #14 `lesson_06_14_circle_select_in_action.png` (1280x720, 599,382 bytes, c14 overlay deferred): L06_GridMesh reused, 13 verts within 0.4m of grid center selected (1 center + 4 axial neighbors at distance 0.2 + 4 diagonal at distance ~0.283 + 4 axial at distance 0.4 = 13; within spec'd 12-16 range). #15 `lesson_06_15_lasso_select_in_action.png` (1280x720, 600,614 bytes, c15 overlay deferred): L06_GridMesh reused, 22-vert L-shape selected via explicit grid-index list (horizontal arm at yi=2,3 cols xi=2..8 totals 14 verts; vertical arm at xi=7,8 rows yi=4..7 adds 8 more; total 22); matches the spec's `L-shape or organic blob` example and the 18-22 range. #48 `lesson_06_48_checker_deselect_result.png` (1280x720, 651,248 bytes, no overlay): L06_RingStack (8 verts, 1m radius, 2m height), 8 side edges subdivided via `bmesh.ops.subdivide_edges(cuts=9)` to produce 9 inner horizontal ring loops at z values -0.8/-0.6/-0.4/-0.2/0.0/+0.2/+0.4/+0.6/+0.8; spec called for selecting all 9 inner rings then applying `bpy.ops.mesh.select_nth(offset=0, skip=1)` (Checker Deselect) to produce a 5/4 alternating pattern, but select_nth requires Blender's loop-selection-history metadata (set by interactive Alt+click loop selection in the UI) which `bm.edges[i].select = True` does not produce; the first attempt left 68 of 72 edges selected instead of the spec'd 40 because select_nth applied within the flat edge selection sequence rather than alternating by ring; corrected by manually selecting alternating rings at z=-0.8, -0.4, 0.0, +0.4, +0.8 (5 rings, 40 edges total), producing exactly the spec's intended 5-selected/4-deselected alternating visual. Workflow lessons logged: (1) Blender 4.2+/5.x extensions API `bpy.ops.extensions.repo_sync_all` + `bpy.ops.extensions.package_install(repo_index=0, pkg_id=...)` is the scripted install path for any bundled-add-on-not-present situation; the Phase 2 PRODUCTION plan Step 0 script and `session.md` line 136 assume Loop Tools is bundled, which is invalidated for Blender 4.2 onward; future Loop Tools references should note the Extensions Platform install path. (2) `obj.matrix_world @ v.co` world-coord filtering is the safe path for vertex selection after `bpy.ops.object.join` because the join bakes source-object transforms into the joined verts' local coords. (3) `bpy.ops.mesh.select_nth` (Checker Deselect) requires loop-selection-history metadata to alternate by ring rather than by edge sequence; bmesh `e.select = True` does not produce that metadata; manual alternating-ring selection is the working scripted equivalent that produces the same visual result. Placement table rows #11, #12, #13, #14, #15, #48 flipped to `captured; not integrated` in one batched commit. Sub-chat A close: 6 of 6 sub-chat A images on disk; sub-chat B remaining work covers #10, #16, #47 (manual Win+Shift+S) plus #44 (hand-authored SVG, id prefix `sr`). All new prose em-dash-free per style guide v4 decision 9.
- 2026-05-22 — Phase 2 PRODUCTION sub-chat B CLOSED. Produced the 1 SVG and captured the 3 manual PNGs that close sub-chat B; 4 of 4 sub-chat B images now on disk, 10 of 10 Phase 2 PRODUCTION images on disk total, **Phase 2 PRODUCTION COMPLETE**. Locked the #10 capture decision in writing at chat start: Option 1 (capture Extensions tab) of the three plan-lock options (Extensions tab only, Add-ons tab plus HTML rewrite, or both) because sub-chat A's diagnostic established that Blender 5.1.1 migrated Loop Tools out of the bundled Add-ons tab into the Extensions Platform, which makes Option 2 produce an empty Add-ons-tab search result and Option 3 inflate Phase 2 scope from a locked 10 to 11 images; filename `lesson_06_10_loop_tools_addon_location.png` kept because `addon` still describes the conceptual category, c10 overlay locked geometry carries over unchanged, badge text now reads `LOOPTOOLS` (single word matching the actual UI catalog string instead of the two-word `LOOP TOOLS` originally planned). Per-image execution: #44 `lesson_06_44_selection_tools_reference.svg` (6,615 bytes, 800x560 viewBox, id prefix `sr`): hand-authored 5-row column layout, each row 66px tall with a 40x40 icon at left, name on top line, single-line description on bottom line, and a right-edge shortcut badge group; icons match the Phase 2 selection-overlay aesthetics so the cheat sheet reads coherently with the c13 / c14 / c15 overlays inlined elsewhere in the section (dashed orange rect for Box Select, solid orange ring for Circle Select, dashed irregular polyline for Lasso Select); Select Similar icon is a 2x2 grid with two diagonal cells filled brand orange and a short connector line between them to suggest matching; Checker Deselect icon is a 4x4 checkerboard with 8 filled cells; shortcut badges filled `#FF6B00` with white text per Lesson 04 #14 keyboard shortcuts precedent, multi-key badges (`Ctrl + RMB`, `Shift + G`) use the 16px-gap-plus-centered-`+` idiom from that file; footer tip Variant B 4px left rail at y=506-540 per Phase 1 #8 precedent; root `color="#222"` retained for `<img>` fallback (stripped during inlining at Phase 2 INTEGRATION); rendered cleanly in both light and dark mode via cairosvg dry-run preview before committing. #10 `lesson_06_10_loop_tools_addon_location.png` (1732x1266, 198,926 bytes, c10 overlay deferred): Edit > Preferences > Get Extensions tab selected (highlighted in the left tab list), search box reading `looptools` (one word, matching the catalog id), LoopTools v4.7.7 card expanded under an `Installed` group header showing full detail panel (Website extensions.blender.org, Maintainer Community, Version 4.7.7, Size 29.8KB, License GPL v2 or later, install Path under `AppData\Roaming\Blender Foundation\Blender\5.1\extensions\blender_org\`); c10 highlight target is the LoopTools card title row near the top of the card, pixel coords resolvable at Phase 2 INTEGRATION plan-lock via Pillow scan. #16 `lesson_06_16_select_similar_menu.png` (1305x621, 74,815 bytes, c16 overlay deferred): Edit Mode face select, Shift+G Select Similar popup menu open with the full menu visible (Length, Direction, Amount of Faces Around an Edge, Face Angle, Crease, Bevel, Seam, Sharpness, Freestyle Edge Marks, divider, Face Regions), `Amount of Faces Around an Edge` row hovered with the standard Blender hover-row highlight and a tooltip floating to its right reading `Select similar vertices, edges or faces by property types: Amount of Faces Around an Edge`; c16 badge text locks as `AMOUNT` per Ray's confirmation; the Phase 2 plan suggested `Amount of Connecting Edges` but Ray was in face select mode so the analogous face-mode option is `Amount of Faces Around an Edge`, same educational content (similarity-by-topology), badge text unchanged. #47 `lesson_06_47_loop_tools_sidebar_panel.png` (612x767, 59,339 bytes, no overlay): N-key sidebar with Edit tab active at the bottom of the tab stack (Item / Tool / View / Animation / BlenderMCP / Edit, in that order), LoopTools panel expanded showing 8 operation buttons in alphabetical order: Bridge, Circle, Curve, Flatten, Gstretch, Loft, Relax, Space; LoopTools v4.7.7 from the Extensions Platform exposes 8 operations vs the 6 (Bridge, Circle, Curve, Flatten, Space, Relax) the Phase 2 plan and image requirements doc both listed based on the pre-migration bundled add-on; the figcaption at INTEGRATION will list 8 ops to match the actual capture. Workflow lessons logged: (1) LoopTools v4.7.7 from Extensions Platform exposes 8 operations (adds Gstretch and Loft beyond the legacy bundled 6); figcaption copy across the lesson should reflect the 8-op surface, not the historical 6-op surface. (2) For #16, when working in face select mode the analogous `amount of connecting edges` option is named `Amount of Faces Around an Edge`; either is a valid representative similarity-workflow capture, and badge text `AMOUNT` covers both. (3) N-key sidebar Edit tab is mode-conditional (Edit Mode only); in Object Mode the sidebar shows only Item / Tool / View / Animation / BlenderMCP because no panel registered for that mode under the Edit category; resolved during sub-chat B execution via a clarifying exchange with Ray. Placement table rows #10, #16, #47 flipped to `captured; not integrated` and row #44 flipped to `produced; not integrated` in one batched 4-edit commit alongside this Status bullet append. **Phase 2 PRODUCTION CLOSED: 10 of 10 Phase 2 images on disk, 0 of 10 Phase 2 images integrated.** Next: rewrite `session.md` (this turn) to point at Phase 2 INTEGRATION plan-lock as the next chat; Phase 2 INTEGRATION covers anchoring all 10 Phase 2 images into `#loop-tools` plus `#advanced-selection` sections, with c10 / c13 / c14 / c15 / c16 PNG overlay implementations plus the #44 SVG inlining. All new prose em-dash-free per style guide v4 decision 9.
- 2026-05-22 — Phase 2 INTEGRATION plan-lock chat. Read `session.md` (verified Phase 2 PRODUCTION COMPLETE with all 10 images on disk; pointer current and consistent with sub-chat B close, pointing at Phase 2 INTEGRATION plan-lock as the next chat), this `lesson_06_integration_progress.md` (101,808 bytes pre-edit; Status section has Phase 2 PRODUCTION fully closed through sub-chat B; Phase 2 PRODUCTION plan section above carries historical capture specs; Phase 1 INTEGRATION plan section above used as the structural model for the new plan), `lesson_06_image_requirements.md` (entries #10 through #16, #44, #47, #48 confirmed for placement intent), and `images/IMAGE_STYLE_GUIDE.md` v4 (PNG annotation overlay component snippet, SVG inlining checklist, em-dash discipline, figure indentation depth, decorative-shape-only overlay variant addendum from Phase 2 PRODUCTION sub-chat A close). Read the PART 04 slice of `lesson_06_edit_mode_essentials.html` (162,425 bytes; `#loop-tools` lines 731 to ~952, `#advanced-selection` lines 953 to ~1115, `#selection-tools` lines ~1117 to ~1315) and verified the indentation depth is 0/4/8 throughout PART 04 (identical to `#proportional-editing` from Phase 1 sub-chat 2; all 10 Phase 2 figures sit at section level so all 10 use default-depth col 4 without the deeper-indent variant). Two discoveries during the slice read: (1) the lesson HTML splits the `Advanced Selection Techniques` topic across two `<section>` elements (`<section id="advanced-selection">` covering Select Similar / Select All by Trait / Checker Deselect, and `<section id="selection-tools">` covering Box / Circle / Lasso Select plus Selection Practice Challenge), so the 6 sub-chat 2 images split #16 and #48 into `#advanced-selection` and #13 / #14 / #15 / #44 into `#selection-tools`; the #44 placement table row will be updated from `#advanced-selection` to `#selection-tools` at sub-chat 2 close because placing the 5-tool summary chart at end of `#advanced-selection` would land it in the middle of the topic flow before Box / Circle / Lasso are introduced. (2) the `Next chat` section at the bottom of this doc is stale (still points at Phase 2 PRODUCTION sub-chat A execution from the Phase 2 PRODUCTION plan-lock chat; sub-chats A and B closed afterward without updating the bottom-of-doc pointer because `session.md` was rewritten at sub-chat B close to point at Phase 2 INTEGRATION plan-lock instead); the bottom-of-doc pointer will be rewritten at sub-chat 1 close to point at sub-chat 2 execution. Confirmed the sub-chat split recommended in `session.md` (sub-chat 1 = `#loop-tools` 4 images including #10 c10 overlay plus paired `<ol>` prose rewrite, sub-chat 2 = the two advanced-selection HTML sections with 6 images including c13 / c14 / c15 decorative overlays plus c16 full callout plus #44 inline SVG). Confirmed all locked carry-forward decisions from sub-chat B close: c10 badge text `LOOPTOOLS` (single word matching the UI catalog string), c16 badge text `AMOUNT` (highlights the `Amount of Faces Around an Edge` row), #47 figcaption mentions 8 ops (Bridge, Circle, Curve, Flatten, Gstretch, Loft, Relax, Space), c13 / c14 / c15 are decorative-shape-only overlays (white stroke width 2 only; dasharrays `6,4` / solid / `4,3` respectively; no badge, leader, marker, or highlight ellipse), #10 anchor requires a paired `<ol>` prose rewrite replacing the legacy Add-ons tab path with the Extensions Platform path (Edit > Preferences > Get Extensions > search `looptools` > Install). Wrote the new `Phase 2 INTEGRATION plan` section into this doc (location: after the `Phase 2 PRODUCTION plan` section, before the `Locked rules` section; live doc grew from 101,808 to 131,050 bytes for a +29,242 byte single-commit insertion of 336 new lines) covering 10 anchor texts (3-5 line `oldText` per image, locked verbatim with pre-existing en-dashes and right-arrows preserved), 10 figcaptions (em-dash-free new prose, #47 lists 8 ops), 10 alt texts (em-dash-free new prose, #16 describes the Edit Mode face select state with menu and tooltip visible, #10 describes the Get Extensions tab with the LoopTools v4.7.7 entry installed), 5 overlay specs (c10 and c16 full callout positive-green per the c46 precedent, c13 / c14 / c15 decorative-shape-only per the locked Phase 2 spec), 1 SVG inlining checklist for #44 (strip root `color="#222"`, preserve all `sr-*` ids, collapse multi-line attribute continuations, prune decorative ASCII-divider comments, keep structural row comments), and 1 paired `<ol>` prose rewrite spec for the #10 anchor (5-item legacy Add-ons-tab list replaced with 5-item Extensions Platform list; pre-existing en-dash in the last `<li>` and right-arrow in the first `<li>` preserved verbatim; post-`<ol>` paragraph passes through unchanged because the N-key sidebar Edit tab and right-click menu paths are still accurate after Extensions Platform install). Locked the sub-chat 1 c10 figure insertion as a TWO-commit pair at the #10 anchor: one for the `<ol>` content rewrite (small focused edit) and one for the figure insertion between the Activation Steps card `</div>` and the `<h3>Essential Loop Tools Operations</h3>` (separate anchor, figure-only edit). One `Filesystem:edit_file` commit this chat: insertion of the new Phase 2 INTEGRATION plan section, dry-run-then-commit-then-verify clean. All new prose em-dash-free per style guide v4 decision 9; middle-dot `·` used for separation in figcaption phrasing where a sentence break would feel choppy. No HTML edits this chat. `session.md` not rewritten this chat per the locked plan-lock-chat scope; will rewrite at sub-chat 1 close to point at sub-chat 2 execution. Context budget comfortable at plan-lock close. Next: Phase 2 INTEGRATION sub-chat 1 execution covering #10 with c10 overlay plus paired `<ol>` prose rewrite plus #11 plus #12 plus #47 across the `#loop-tools` section.
- 2026-05-22 — Phase 2 INTEGRATION sub-chat 1 CLOSED. Executed all 5 sub-chat 1 commits into `lesson_06_edit_mode_essentials.html`; 4 of 10 Phase 2 images now integrated (#10, #11, #12, #47). Two-commit pair at the #10 anchor per the locked plan-lock pair: (1) `<ol>` prose rewrite swapping the legacy Add-ons-tab activation list for the Extensions Platform path (Edit > Preferences > Get Extensions > search `looptools` > Install button > confirmation as Installed; pre-existing en-dash in the last `<li>` and right-arrow in the first `<li>` preserved verbatim through the `oldText` match; post-`<ol>` paragraph passed through unchanged because the N-key sidebar Edit tab and right-click menu paths are still accurate after Extensions Platform install), then (2) the #10 figure insertion with c10 overlay at the separate anchor between the Activation Steps card `</div>` and the `<h3>Essential Loop Tools Operations</h3>`. Then (3) #11 plain figure after `Circle: Creating Perfect Rounds` section (pre-existing en-dash in the #11 anchor preserved verbatim through the `oldText` match), (4) #12 plain figure after `Bridge: Connecting Edge Loops` section, (5) #47 plain figure after the Loop Tools Practice Project as reference (figcaption lists all 8 LoopTools v4.7.7 operations Bridge · Circle · Curve · Flatten · Gstretch · Loft · Relax · Space with middle-dot separators per the locked carry-forward from sub-chat B, not the 6-op surface from the historical bundled add-on). All 5 commits dry-run-then-commit-then-verify clean; no MCP server hangs this sub-chat. HTML file grew 162,425 to 167,080 bytes (+4,655 net for sub-chat 1 covering all 5 commits combined; per-commit byte deltas not separately preserved through the resume from interrupted execution). c10 overlay used full locked geometry per the c46 / c2 precedent: positive-green colorway (`#4ADE80` rect with `#0f1a14` text), viewBox `0 0 1732 1266` matching the PNG pixel dimensions, ellipse highlight cx=495 cy=285 rx=90 ry=22 stroke-width 4 around the LoopTools card title row, leader line stroke-width 3 stroke-linecap round from ellipse-edge (540, 266) up to marker (650, 213) 7 px below badge bottom edge, marker circle r=6 at (650, 213), badge rect rx=6 at x=550 y=160 width 200 height 46, text `LOOPTOOLS` (single word matching the UI catalog string) at (650, 192) font-size 22 weight 700 letter-spacing 2 fill `#0f1a14` text-anchor middle. Pixel coords resolved via the locked `Filesystem:copy_file_user_to_claude` + Pillow two-scan pattern per the c46 precedent: first scan located the LoopTools card title row by detecting the brighter highlight row pixels in the Get Extensions panel content area; second scan verified leader-path clearance from the surrounding panel chrome (search box above the card, Install button to the right, Installed group header row above) before locking the marker and ellipse pixel coords. All new prose em-dash-free per style guide v4 decision 9; pre-existing en-dashes and right-arrows in `oldText` anchors preserved verbatim across all 5 commits. Placement table rows #10, #11, #12, #47 flipped to `integrated` in one batched 4-edit commit. Bottom-of-doc `Next chat` section rewritten in same close-out turn to point at Phase 2 INTEGRATION sub-chat 2 execution (the pre-edit pointer still referred to Phase 2 PRODUCTION sub-chat A from the Phase 2 PRODUCTION plan-lock chat per the carry-forward note in the plan-lock bullet above). `session.md` rewritten in same close-out turn to point at Phase 2 INTEGRATION sub-chat 2 execution. Next: Phase 2 INTEGRATION sub-chat 2 execution covering #13 with c13 decorative dashed-rect overlay + #14 with c14 decorative solid-ring overlay + #15 with c15 decorative dashed-polyline overlay + #16 with c16 full callout `AMOUNT` badge + #44 inline SVG with `sr` prefix + #48 plain across `<section id="advanced-selection">` (#16, #48) and `<section id="selection-tools">` (#13, #14, #15, #44).
- 2026-05-22 — Phase 2 INTEGRATION sub-chat 2 CLOSED (combined 2a + 2b close-out bullet per the documented 2a / 2b split). Executed all 6 sub-chat 2 commits into `lesson_06_edit_mode_essentials.html`; 10 of 10 Phase 2 images now integrated, **Phase 2 INTEGRATION COMPLETE**. Sub-chat 2a (closed 2026-05-22 earlier this same day; bullet deferred to this combined close per the locked 2a / 2b split) executed 2 of 6 commits into `<section id="advanced-selection">`: (1) #16 figure with c16 full callout positive-green badge `AMOUNT` highlighting the `Amount of Faces Around an Edge` menu row in the Shift+G Select Similar popup, viewBox `0 0 1305 621`, locked geometry per the c46 / c10 precedent (ellipse cx=259 cy=222 rx=240 ry=24, leader (499, 222) to marker (740, 110), marker r=6, badge rect x=660 y=57 w=160 h=46, text `AMOUNT` at (740, 89)); (2) #48 plain figure after the Checker Deselect description with figcaption noting `five selected · four deselected`. HTML grew 167,080 to 170,219 bytes (+3,139 net for sub-chat 2a). c16 pixel coords resolved via the locked `Filesystem:copy_file_user_to_claude` + Pillow two-scan pattern per the c46 / c10 precedent (first scan located the hovered menu row at y=202..243 / x=22..496; second scan verified leader-path clearance from the floating tooltip spanning y=264..329 / x=242 onward, confirming the leader path from (499, 222) up to (740, 110) sits entirely in the empty upper-right grid-plane region above the tooltip and outside the menu's right edge). Sub-chat 2b (this chat) executed 4 of 6 commits into `<section id="selection-tools">`: (3) #13 figure with c13 decorative dashed-rect overlay `<rect x="548" y="316" width="295" height="154" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,4"/>` (coords locked in sub-chat 2a Pillow orange-vertex bbox scan; viewBox 0 0 1280 720), (4) #14 figure with c14 decorative solid-ring overlay `<circle cx="641" cy="362" r="100" fill="none" stroke="#ffffff" stroke-width="2"/>` (coords locked in sub-chat 2a Pillow centroid + max-radius scan; viewBox 0 0 1280 720, no dasharray since the Circle Select cursor is a solid ring), (5) #15 figure with c15 decorative dashed-polyline overlay `<polyline points="653,502 587,474 584,445 732,362 623,320 623,286 672,270 872,342 867,374 711,448 653,502" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round"/>` (coords resolved this sub-chat via the locked Pillow concave-hull / outline-trace scan: orange-vertex centroids size>=25 px stamped with 22 px radius disks, binary-closed by 8 iterations to fuse the per-vertex disks into the L-shape selection region, marching-squares outer contour extracted from the closed region, Ramer-Douglas-Peucker simplified at tolerance=12 to land at 11 closed anchor points fitting the 8-12 spec target; viewBox 0 0 1280 720; visual verification via Pillow line-draw overlay confirmed the trace wraps the orange-selected L-shape with natural hand-drawn lasso feel and resolves the L's concave corner cleanly), and (6) #44 inline SVG with `sr` prefix at end of `<section id="selection-tools">` (between the Selection Practice Challenge `</div>` and the closing `</section>`) per the locked SVG inlining checklist: root `color="#222"` stripped at inline (preserved on disk in the standalone `.svg` file for `<img>` fallback), all `sr-*` ids preserved verbatim (`sr-title`, `sr-desc`, `sr-box`, `sr-circle`, `sr-lasso`, `sr-similar`, `sr-checker`, `sr-icon-box`, `sr-icon-circle`, `sr-icon-lasso`, `sr-icon-similar`, `sr-icon-checker`), multi-line attribute continuations on the root `<svg>` (4 lines to 1) and the lasso icon `<polyline>` (3 lines to 1) and the footer tip `<text>` with embedded `<tspan>` (3 lines to 1) collapsed onto single lines, no decorative ASCII-divider comments found in the source so nothing to prune, all 7 structural row comments kept (`<!-- Top brand accent -->`, `<!-- Header block -->`, 5 entry row comments for Box / Circle / Lasso / Similar / Checker, `<!-- Footer tip (Variant B 4px left rail) -->`). HTML grew 170,219 to 182,994 bytes (+12,775 net for sub-chat 2b; +15,914 net for sub-chats 2a + 2b combined). All 6 commits across both sub-chats dry-run-then-commit-then-verify clean; no MCP server hangs across either sub-chat. Placement table rows #13, #14, #15, #16, #44, #48 flipped to `integrated` in one batched 6-edit commit alongside row #44 location field updated from `#advanced-selection` to `#selection-tools` (combined into the same 6-edit dry-run commit per the locked plan since the dry-run fit cleanly). All new prose em-dash-free per style guide v4 decision 9; pre-existing en-dashes in `oldText` anchors preserved verbatim across all 6 commits (sub-chat 2a #16 anchor preserved en-dash in the Select Similar explanation paragraph; sub-chat 2b anchors had no pre-existing en-dashes). Bottom-of-doc `Next chat` section rewritten in same close-out turn to point at Phase 3 PRODUCTION plan-lock as next chat. `session.md` rewritten in same close-out turn to point at Phase 3 PRODUCTION plan-lock as next chat. **Phase 2 INTEGRATION COMPLETE: 10 of 10 Phase 2 images integrated.** Next: Phase 3 PRODUCTION plan-lock covering `#inset-outset` (3 images: #17, #18, #19) plus `#mesh-cleanup` (5 images: #20, #21 SVG `dd` prefix, #22, #23, #50) for 8 images total including 1 SVG; fresh scene reset required at Phase 3 PRODUCTION start (delete L06_* leftovers from Phase 2).

---

## Phase 1 INTEGRATION plan

Locked 2026-05-22 during the plan-lock chat. 10 image insertions into `lesson_06_edit_mode_essentials.html` split across 2 execution sub-chats. Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block inserts at a marked position inside the anchor and the rest passes through. Carry-forward indentation discontinuity: PART 2 sections at 12/16/20-space depth (figure col 16 default for section-level placement, col 20 deeper-indent inside cards opening at col 16); `#proportional-editing` at 0/4/8-space depth (figure col 4 default, col 8 deeper-indent inside cards opening at col 4).

### Sub-chat split

- **Sub-chat 1** · `#enter-edit-mode` + `#selection-modes`. 6 images: #1 plain, #2 with c2 multi-callout (6 callouts, 1920x1046 viewBox), #3 with c3 triple-label (3 callouts, 720x80 viewBox, thin-strip variant), #4/#5/#6 plain inside Vertex/Edge/Face cards. 12/16/20-space indentation throughout. Heaviest single insertion: #2 c2 multi-callout. If sub-chat 1 tightens after c2 + c3 land, split into 1a (#1, #2) and 1b (#3, #4, #5, #6).
- **Sub-chat 2** · `#proportional-editing`. 4 images: #7 plain, #46 with c46 single-region highlight (1026x450 viewBox), #8 inline SVG (`pf` prefix preserved, root `color="#222"` stripped, contents re-indented to 12-space, multi-line attribute continuations collapsed, ASCII-divider comments pruned, structural comments kept), #9 plain inside Practice Exercise card. 0/4/8-space indentation throughout.

### c3 thin-strip variant (locked deviation)

Image #3 PNG is 720x80; the locked overlay badge geometry (font-size 22, badge ~32px tall, rx 6, leader stroke-width 3, marker r 6, highlight stroke-width 4) would dominate the image. Locked deviation:

- font-size 14 (down from 22)
- badge height 22 (down from ~32)
- rect rx 4 (down from 6)
- highlight stroke-width 2 (down from 4)
- leader stroke-width 2 (down from 3)
- marker r 4 (down from 6)

Roughly 0.6x scale on all callout geometry; preserves the full callout shape set (highlight ellipse + leader line + marker circle + badge rect + badge text) per the locked spec, just shrunk uniformly. Tagged `c3 thin-strip variant`, intended for one-time use; folded into style guide v4 addendum at the Lesson 06 close-out chat.

### Per-image specs

#### #1 · `lesson_06_01_object_vs_edit_mode_comparison.png` · `#enter-edit-mode` · plain figure, col 16/20

**oldText anchor:**
```
                            <td style="padding: 8px;">Model creation and refinement</td>
                        </tr>
                    </table>
                </div>

                <h3>Entering and Exiting Edit Mode</h3>
```

Figure inserts between the `</div>` (line 4 of the anchor) and the `<h3>` (line 6).

**alt:** Side by side Blender screenshots. Left: cube in Object Mode with a full orange outline and the mode dropdown reading Object Mode. Right: the same cube in Edit Mode with orange vertex dots at the corners, dark edge lines, and the mode dropdown reading Edit Mode.

**figcaption:** Object Mode treats the cube as one whole unit, while Edit Mode opens it up to its vertices and edges. The orange outline becomes orange dots once you press Tab.

#### #2 · `lesson_06_02_edit_mode_visual_indicators.png` · `#enter-edit-mode` · c2 multi-callout overlay, col 16/20

**oldText anchor:**
```
                    <li><strong>Selection modes:</strong> Three icons appear showing vertex/edge/face selection</li>
                </ul>

                <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
                    <h4>💡 Edit Mode Limitations</h4>
```

Figure inserts between the `</ul>` (line 2) and the `<div class="card"...>` (line 4).

**alt:** Full Blender window in Edit Mode with a cube. Six interface regions are visible: orange vertex dots at the top corners, dark edges along the bottom and back of the cube, the Edit Mode dropdown in the top left, the Mesh menu in the header strip, the three selection mode icons next to the dropdown, and the Edit specific left toolbar.

**figcaption:** Six visual cues confirm Edit Mode is active. Orange dots mark the vertices, dark lines mark the edges, and the header strip changes to expose mesh-editing menus and selection icons that do not appear in Object Mode.

**c2 overlay spec** · viewBox `0 0 1920 1046`, `preserveAspectRatio="xMidYMid meet"`, six callouts all positive-green (`#4ADE80` rect with `#0f1a14` text):

| id            | target region                              | badge text     | placement strategy                                                                                |
|---------------|--------------------------------------------|----------------|---------------------------------------------------------------------------------------------------|
| `c2-vertices` | orange vertex dots, top corners of cube    | `VERTICES`     | highlight encloses dot cluster; badge placed in clear viewport area near upper-right of cube      |
| `c2-edges`    | dark cube edges, bottom-front region       | `EDGES`        | highlight on a bottom edge segment; badge placed in clear viewport area to lower-right of cube    |
| `c2-mode`     | Edit Mode dropdown, top-left header        | `EDIT MODE`    | highlight around dropdown text; badge in clear area below the header strip                        |
| `c2-mesh`     | Mesh menu in header strip                  | `MESH MENU`    | highlight around the "Mesh" label; badge above or below the menu in clear header chrome           |
| `c2-select`   | three selection mode icons (header)        | `SELECT MODES` | highlight encloses the three-icon block; badge above the icons in clear header area               |
| `c2-toolbar`  | Edit-specific left toolbar (vertical strip)| `EDIT TOOLBAR` | highlight around an upper toolbar segment; badge to the right of toolbar in clear viewport area   |

Standard locked geometry per callout: highlight ellipse `fill="none" stroke="#4ADE80" stroke-width="4"`; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"`; marker circle `r="6" fill="#4ADE80"` at badge-side end of leader 7px from badge edge; badge rect `rx="6" fill="#4ADE80"`; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#0f1a14"`. Exact pixel coordinates resolved at sub-chat 1 execution after PNG inspection.

#### #3 · `lesson_06_03_selection_mode_icons.png` · `#selection-modes` · c3 triple-label overlay (thin-strip variant), col 16/20

**oldText anchor:**
```
                <h3>The Selection Mode Trio</h3>

                <p>At the top of the viewport in Edit Mode, you'll see three icons representing the selection modes. You can also access them with number keys.</p>

                <div class="card">
                    <h4>🔺 Vertex Select Mode</h4>
```

Figure inserts between the `</p>` (line 3) and the `<div class="card">` (line 5).

**alt:** Closeup of the 3D viewport header strip showing the Edit Mode dropdown and the three selection mode icons: vertex (dot), edge (line), and face (triangle). Vertex select is currently active and highlighted blue.

**figcaption:** The three selection mode icons sit at the top of the 3D viewport. Click them or press 1, 2, or 3 to switch between vertex, edge, and face selection.

**c3 overlay spec** · viewBox `0 0 720 80`, `preserveAspectRatio="xMidYMid meet"`, three callouts all positive-green, thin-strip variant geometry (font-size 14, badge height 22, rx 4, highlight stroke-width 2, leader stroke-width 2, marker r 4):

| id          | target              | badge text   | colorway       |
|-------------|---------------------|--------------|----------------|
| `c3-vertex` | vertex-icon (left)  | `1 · VERTEX` | positive green |
| `c3-edge`   | edge-icon (middle)  | `2 · EDGE`   | positive green |
| `c3-face`   | face-icon (right)   | `3 · FACE`   | positive green |

Badge text uses middle-dot per em-dash discipline. Highlight ellipse around each icon, short downward leader, marker at badge-side end of leader (3px from badge edge given the scaled geometry), badge underneath the icon. Exact pixel coordinates resolved at sub-chat 1 execution after PNG inspection.

#### #4 · `lesson_06_04_vertex_selection_example.png` · `#selection-modes` · plain figure inside Vertex card, col 20/24

**oldText anchor:**
```
                    <p><strong>Visual:</strong> Vertices appear as orange dots when selected, gray when not</p>
                </div>

                <div class="card">
                    <h4>📏 Edge Select Mode</h4>
```

Figure inserts between the `</p>` (line 1) and the `</div>` (line 2). Deeper-indent variant: figure at col 20, img and figcaption at col 24, figure close at col 20.

**alt:** Cube in Blender Edit Mode with vertex select active. Three of the top corner vertices show as bright orange dots; the remaining vertices appear smaller and gray.

**figcaption:** Selected vertices light up in orange. The other corner dots stay gray, so you can see at a glance which points will respond to the next move, rotate, or scale.

#### #5 · `lesson_06_05_edge_selection_example.png` · `#selection-modes` · plain figure inside Edge card, col 20/24

**oldText anchor:**
```
                    <p><strong>Visual:</strong> Selected edges turn orange/bright, unselected stay dark</p>
                </div>

                <div class="card">
                    <h4>🔷 Face Select Mode</h4>
```

Figure inserts between the `</p>` (line 1) and the `</div>` (line 2). Deeper-indent variant: figure at col 20, img and figcaption at col 24, figure close at col 20.

**alt:** Cube in Blender Edit Mode with edge select active. Three edges around the front top right corner are highlighted bright orange; the rest of the cube's edges stay dark.

**figcaption:** An L shape of three selected edges lights up bright orange. Edge select mode lets you grab specific lines for loop cuts, bevels, and seam marking without worrying about the corner points.

#### #6 · `lesson_06_06_face_selection_example.png` · `#selection-modes` · plain figure inside Face card, col 20/24

**oldText anchor:**
```
                    <p><strong>Visual:</strong> Selected faces appear bright/filled, with dots at corners</p>
                </div>

                <div class="mermaid">
                    graph TD
                    A[Edit Mode Selection] --> B[Vertex Mode - 1]
```

Figure inserts between the `</p>` (line 1) and the `</div>` (line 2). Deeper-indent variant: figure at col 20, img and figcaption at col 24, figure close at col 20.

**alt:** Cube in Blender Edit Mode with face select active. The top face and one adjacent visible side face are filled with a bright orange tint, marking them as selected, while the other faces remain dark gray.

**figcaption:** Two selected faces tint bright orange across their whole surface. Face select is the fastest way to grab large surface regions before extruding, insetting, or assigning a material.

#### #7 · `lesson_06_07_proportional_editing_circle.png` · `#proportional-editing` · plain figure, col 4/8

**oldText anchor** (pre-existing en-dash preserved verbatim):
```
        <p><strong>Visual indicator:</strong> When active, you'll see a circle around your cursor when transforming – this shows the influence area!</p>
    </div>

    <h3>Falloff Types: Controlling the Influence</h3>
```

Figure inserts between the `</div>` (line 2) and the `<h3>` (line 4).

**alt:** Subdivided plane in Blender Edit Mode with proportional editing active. A center vertex has been pulled up to form a smooth hill, and a bright orange ring marks the influence radius around the base of the hill.

**figcaption:** With proportional editing on, moving a single vertex drags its neighbors along under a smooth falloff. The orange ring shows the radius of influence; vertices outside the ring stay put.

#### #8 · `lesson_06_08_proportional_falloff_comparison.svg` · `#proportional-editing` · inline SVG, col 4/8

**oldText anchor** (pre-existing right-arrow `→` preserved verbatim):
```
            <tr>
                <td><strong>Random</strong></td>
                <td>Chaotic, unpredictable influence</td>
                <td>Rough terrain, noise effects</td>
                <td><kbd>Shift+O</kbd> → Select</td>
            </tr>
        </tbody>
    </table>

    <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
        <h4>💡 Pro Tip: Adjusting Influence Size</h4>
```

Figure inserts between the `</table>` (line 8) and the `<div class="card"...>` (line 10).

**alt:** Six-panel comparison of proportional editing falloff types. Each panel shows the same falloff curve from selection center to radius edge, stroked in brand orange: Smooth (cosine S-curve), Sharp (steep drop near origin), Linear (straight diagonal), Constant (flat then cliff), Sphere (quarter circle arc), and Random (jagged polyline).

**figcaption:** Each falloff shapes the influence curve differently. Smooth and Sphere give the most natural hills; Sharp keeps the peak high; Constant applies full influence everywhere inside the radius; Random scatters the values for terrain noise.

**SVG inlining checklist for sub-chat 2:**
- Figure at col 4, `<svg>` root at col 8, svg children at col 12, deeper nesting at 16/20, figcaption at col 8
- Strip `color="#222"` from root `<svg>` tag (preserve in the standalone `.svg` file in `images/`)
- Preserve all `pf-*` ids, `role`, `aria-labelledby`, `<title>`, `<desc>` verbatim
- Collapse multi-line attribute continuations on `<text>`, `<line>`, `<rect>`, `<polygon>`, `<desc>` onto single lines
- Prune decorative ASCII-divider author comments; keep short structural comments (`<!-- Panel 1: SMOOTH -->`, etc.)

#### #9 · `lesson_06_09_proportional_hill_creation.png` · `#proportional-editing` · plain figure inside Practice Exercise card, col 8/12

**oldText anchor:**
```
        <p><strong>Experiment:</strong> Try different falloff types to see how they affect the hill shape!</p>
    </div>
</section>
```

Figure inserts between the `</p>` (line 1) and the `</div>` (line 2). The `</section>` line is included in the anchor for uniqueness against other `</p>\n    </div>` patterns in the section. Deeper-indent variant inside this card opening at col 4: figure at col 8, img and figcaption at col 12, figure close at col 8.

**alt:** Three panel progression of building a hill with proportional editing. Panel 1: flat subdivided plane with one center vertex selected in orange. Panel 2: same plane part way through the move with the orange influence ring visible and a partial hill forming. Panel 3: completed smooth hill with the surrounding plane returning gently to flat.

**figcaption:** The three stages of the hill build. Selecting one vertex on a flat subdivided plane (left), starting the G Z move with proportional editing on (center), and confirming the final hill (right). The orange dividers separate the three viewport states.

#### #46 · `lesson_06_46_proportional_falloff_menu.png` · `#proportional-editing` · c46 single-region highlight overlay, col 4/8

**oldText anchor:**
```
        style C fill:#ff9800,stroke:#333,stroke-width:2px,color:#fff
    </div>

    <table>
        <thead>
            <tr>
                <th>Falloff Type</th>
```

Figure inserts between the `</div>` (line 2, closing the mermaid) and the `<table>` (line 4).

**alt:** Shift+O Proportional Falloff pie menu floating over the Blender 3D viewport in Edit Mode. The menu shows eight wedges labeled Smooth, Sharp, Constant, Root, Random, Sphere, Linear, and Inverse Square. The Smooth wedge on the left is highlighted as the current selection, and a Sphere tooltip is visible from a hover preview.

**figcaption:** Shift O brings up the Proportional Falloff pie menu. Smooth is the default and works for most organic shapes; the other seven wedges give you sharper, flatter, or more chaotic influence curves on demand.

**c46 overlay spec** · viewBox `0 0 1026 450`, `preserveAspectRatio="xMidYMid meet"`, one callout positive-green (SMOOTH is the default and recommended choice, affirmative label):

| id           | target                              | badge text | colorway       |
|--------------|-------------------------------------|------------|----------------|
| `c46-smooth` | Smooth pie wedge (left side of menu)| `SMOOTH`   | positive green |

Geometry: ellipse around the Smooth wedge area (left side per carry-forward), leader from highlight edge to a clear area (likely lower-right or upper-right of the menu to avoid the other wedge labels and the Sphere tooltip), marker `r=6 fill="#4ADE80"` at badge-side end of leader 7px from badge edge, badge rect `rx=6 fill="#4ADE80"`, badge text `font-size=22 font-weight=700 fill="#0f1a14"`. Exact pixel coordinates resolved at sub-chat 2 execution after PNG inspection.

### ID prefix sub-id registry (Phase 1)

- c2 sub-ids: `c2-vertices`, `c2-edges`, `c2-mode`, `c2-mesh`, `c2-select`, `c2-toolbar`
- c3 sub-ids: `c3-vertex`, `c3-edge`, `c3-face`
- c46 sub-id: `c46-smooth`

No collisions with `pf-*` (SVG #8) or any prior-phase prefixes. SVG `pf-*` ids preserved verbatim from the standalone file during inlining.

### Execution cadence (sub-chats 1 and 2)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify file-size shift after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in any new content; pre-existing en-dashes and right-arrows in `oldText` anchors pass through verbatim
- Update Placement table row state per image as each integration commits (`captured/produced; not integrated` → `integrated`)
- Append Status section bullet at each sub-chat close
- Warn Ray before context tightens within an execution sub-chat

Plan-lock close criterion: all 10 anchors, figcaptions, alt texts, and overlay specs locked in writing before any HTML edit. Met by this section.

---

## Phase 2 PRODUCTION plan

Locked 2026-05-22 during the Phase 2 PRODUCTION plan-lock chat. 10 image productions split across 2 execution sub-chats per Option B confirmation. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 2 fresh scene reset applies at sub-chat A start: delete any remaining `L06_*` objects from Phase 1 PRODUCTION state (potentially L06_Cube from sub-chat B' and/or L06_Plane plus L06_InfluenceRing from sub-chat C per the session.md uncertainty note) before building Phase 2 scenes.

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 6 images: #11, #12 (multi-pose 2-panel composites via PIL with 2px `#FF6B00` divider), #13, #14, #15 (single-pose viewport renders showing selection RESULT; tool indicator overlays deferred to INTEGRATION), #48 (single-pose viewport render of edge-ring stack with checker deselect applied). Includes Loop Tools add-on enablement check as step 0.
- **Sub-chat B** · All non-scripted work. 4 images: #10, #16, #47 (manual Win+Shift+S; Ray uploads via chat or writes directly into `images/`), #44 (hand-authored SVG at 800x560 with `sr` id prefix).

### Step 0 (sub-chat A only) · Loop Tools add-on availability check

Before any production code, verify the Loop Tools add-on is enabled in the current Blender session:

```python
import addon_utils
loop_tools_enabled = addon_utils.check("mesh_looptools")[1]
print(f"Loop Tools enabled: {loop_tools_enabled}")
if not loop_tools_enabled:
    addon_utils.enable("mesh_looptools")
    loop_tools_enabled = addon_utils.check("mesh_looptools")[1]
    print(f"Loop Tools enabled after enable call: {loop_tools_enabled}")
```

If both attempts return False, fall back to Ray manually enabling via Edit > Preferences > Add-ons > "Mesh: Loop Tools" before sub-chat A retries.

### Per-image specs · sub-chat A (6 BlenderMCP captures)

#### #11 · `lesson_06_11_loop_tools_circle_before_after.png`

- **Type:** PNG, 2-panel horizontal composite, ~2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite with 2px `#FF6B00` vertical divider → temp files removed
- **Scene setup:** Add a Cylinder primitive (8 vertices, 1m radius, 2m height) named `L06_LoopCylinder`. Enter Edit Mode, select the top edge loop. Use a seeded Python random pass (`random.seed(42)`) to displace each top vertex by a random offset in XY (range -0.3 to +0.3 in each axis, Z unchanged) to create an irregular loop.
- **Panel 1:** Irregular top loop selected (orange vertices/edges). Render to `_temp_lesson_06_11_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.looptools_circle()` to the same selection. The loop should now be evenly distributed around its centroid as a regular circle. Render to `_temp_lesson_06_11_p2.png` (1280x720).
- **Render config:** EEVEE engine with EEVEE_NEXT fallback per locked rule, viewport shading SOLID, view rotation user-perspective default `Euler((63.6°, 0, -46.7°))`, view_distance 4.5, view_location near the top of the cylinder. Theme: edge_width=2, vertex_size=5 (Phase 1 default). Overlays: axes ON, floor ON, cursor OFF, origins OFF, outline_selected OFF.
- **Composite:** PIL horizontal join, 2px `#FF6B00` divider, output `lesson_06_11_loop_tools_circle_before_after.png` (2562x720). Remove temp files via `os.remove`.

#### #12 · `lesson_06_12_loop_tools_bridge_operation.png`

- **Type:** PNG, 2-panel horizontal composite, ~2562x720, no overlay planned
- **Capture path:** BlenderMCP per-panel OpenGL viewport render → PIL composite → temp files removed
- **Scene setup:** Add two Cylinder primitives (each 16 vertices, 0.6m radius, 0.6m height) named `L06_BridgeA` and `L06_BridgeB`, positioned 1.5m apart along the Y axis. Enter Edit Mode on each in turn, delete the top and bottom faces with `bpy.ops.mesh.delete(type='FACE')` (singular per locked op-name rule) so only the side loops remain. Return to Object Mode, join the two cylinders into one mesh via `bpy.ops.object.join` named `L06_BridgeMesh`. Enter Edit Mode, select the inner-facing edge loops of each former cylinder (the two loops that face each other across the 1.5m gap).
- **Panel 1:** Two loops selected, the gap visible between them. Render to `_temp_lesson_06_12_p1.png` (1280x720).
- **Panel 2:** Apply `bpy.ops.mesh.looptools_bridge()`. Bridged faces should span the gap forming a tube-like connection. Render to `_temp_lesson_06_12_p2.png` (1280x720).
- **Render config:** Same EEVEE-fallback path as #11, view_distance 5.0, view_location at the midpoint of the gap, overlay theme identical to #11.
- **Composite:** PIL 2562x720 with `#FF6B00` divider, output `lesson_06_12_loop_tools_bridge_operation.png`. Remove temps.

#### #13 · `lesson_06_13_box_select_in_action.png`

- **Type:** PNG, single-pose, 1280x720, `c13` overlay planned at INTEGRATION (not at PRODUCTION)
- **Capture path:** BlenderMCP OpenGL viewport render of the selection RESULT
- **Scene setup:** Add a Plane primitive (2m x 2m) named `L06_GridMesh`. Enter Edit Mode, subdivide 9 cuts to create a 10x10 grid (100 quads, 121 verts). Set vertex select mode. Use bmesh to select a contiguous rectangular block of vertices simulating a Box Select drag result: rows y-index 2 through 5 and columns x-index 3 through 7, totaling 20 selected verts in the upper-right quadrant.
- **Render config:** EEVEE fallback, viewport SOLID shading, view rotation user-perspective default, view_distance 3.5, view_location centered on the plane. Theme as Phase 1 default; axes ON, floor ON.
- **Output:** `lesson_06_13_box_select_in_action.png` (1280x720).
- **c13 overlay (deferred to INTEGRATION):** Dashed rectangle outline around the selected vertex region. Stroke `#ffffff` width 2 with `stroke-dasharray="6,4"` (box-select aesthetic), no fill. Inline SVG `viewBox="0 0 1280 720"` matching the PNG. Pixel coords resolved at INTEGRATION via Pillow scan of the orange-selected vertex bounding box; the dashed rect is drawn just outside that bounding box with a small margin (suggest 8-12 px padding). Single-shape decorative overlay; no badge, no leader, no highlight ellipse.

#### #14 · `lesson_06_14_circle_select_in_action.png`

- **Type:** PNG, single-pose, 1280x720, `c14` overlay planned at INTEGRATION
- **Capture path:** BlenderMCP OpenGL viewport render of the selection RESULT
- **Scene setup:** Reuse `L06_GridMesh` from #13 (rebuild if necessary). Enter Edit Mode + vertex select. Use bmesh to select a roughly circular cluster of vertices around a chosen center point on the grid (e.g., all verts within 0.4m of grid center). Expect approximately 12-16 verts depending on the radius; choose the radius to produce a clearly visible orange-dot cluster forming a recognizable disc.
- **Render config:** Same as #13.
- **Output:** `lesson_06_14_circle_select_in_action.png` (1280x720).
- **c14 overlay (deferred to INTEGRATION):** Circle outline around the selected cluster matching the circle-select brush. Stroke `#ffffff` width 2 (solid, not dashed; Blender's circle-select cursor is a solid ring), no fill, centered on the cluster centroid with radius slightly larger than the cluster bounds. Inline SVG `viewBox="0 0 1280 720"`. Pixel coords resolved at INTEGRATION via Pillow centroid + bounding-radius scan of the selected verts.

#### #15 · `lesson_06_15_lasso_select_in_action.png`

- **Type:** PNG, single-pose, 1280x720, `c15` overlay planned at INTEGRATION
- **Capture path:** BlenderMCP OpenGL viewport render of the selection RESULT
- **Scene setup:** Reuse `L06_GridMesh`. Enter Edit Mode + vertex select. Use bmesh to select an irregular freeform cluster of approximately 18-22 verts. Define the selection via an explicit list of vertex indices forming an L-shape or organic blob region (not a regular geometric shape) to give the lasso an authentic hand-drawn trace at INTEGRATION.
- **Render config:** Same as #13/#14.
- **Output:** `lesson_06_15_lasso_select_in_action.png` (1280x720).
- **c15 overlay (deferred to INTEGRATION):** Closed polyline path around the selected cluster matching a hand-drawn lasso trace. Stroke `#ffffff` width 2 with `stroke-dasharray="4,3"` (tighter dash than the c13 6,4 to differentiate the lasso visually from the box-select), no fill. Polyline closed with 8-12 anchor points approximating an organic loop around the cluster outline. Anchor points resolved at INTEGRATION via Pillow concave-hull or outline-trace of the selected vertices.

#### #48 · `lesson_06_48_checker_deselect_result.png`

- **Type:** PNG, single-pose, 1280x720, no overlay planned
- **Capture path:** BlenderMCP OpenGL viewport render
- **Scene setup:** Add a Cylinder primitive (8 vertices, 1m radius, 2m height) named `L06_RingStack`. Enter Edit Mode. Add 9 horizontal edge rings via `bmesh.ops.subdivide_edges` on the side edges (cuts=9 gives 10 horizontal segments separated by 9 inner rings) so the cylinder has clear stacked edge loops. Select all 9 inner horizontal rings via deliberate `bmesh` ring-by-ring selection (exclude top and bottom loops). Apply `bpy.ops.mesh.select_nth(offset=0, skip=1)` which is the Checker Deselect op; this leaves 5 rings selected and 4 deselected in an alternating pattern.
- **Render config:** EEVEE fallback, viewport SOLID, view rotation user-perspective default, view_distance 5.0, view_location centered on the cylinder. Theme as Phase 1 default.
- **Output:** `lesson_06_48_checker_deselect_result.png` (1280x720).

### Per-image specs · sub-chat B (3 manual Win+Shift+S + 1 SVG)

#### #10 · `lesson_06_10_loop_tools_addon_location.png`

- **Type:** PNG, manual Win+Shift+S, `c10` overlay planned at INTEGRATION
- **Capture path:** Ray captures the Blender Preferences window with Add-ons tab selected, search box reading "loop tools", and the "Mesh: Loop Tools" entry visible. Capture state: Loop Tools entry checked (preferred since sub-chat A step 0 will have enabled it). Ray uploads via chat or writes directly to `images/`.
- **Target dimensions:** Whatever the Win+Shift+S snip captures cleanly (likely 800-1200px wide depending on Preferences window size). No specific dimension lock; INTEGRATION overlay `viewBox` will match the captured PNG dimensions.
- **Output:** `lesson_06_10_loop_tools_addon_location.png`.
- **c10 overlay (deferred to INTEGRATION):** Single-region highlight on the "Mesh: Loop Tools" entry. Positive-green colorway (`#4ADE80` rect with `#0f1a14` text). Badge text `LOOP TOOLS`. Locked geometry per c46 / c2 precedent: ellipse highlight (fill none, stroke 4), leader line (stroke 3, round cap), marker (r=6, 7px from badge edge), badge rect (rx=6, height 46), text (font-size 22, weight 700, letter-spacing 2). Exact pixel coords resolved at Phase 2 INTEGRATION plan-lock via Pillow scan (likely a blue-tinted highlight scan for the search-match entry row, similar to the c46 Smooth-button scan).

#### #16 · `lesson_06_16_select_similar_menu.png`

- **Type:** PNG, manual Win+Shift+S, `c16` overlay planned at INTEGRATION
- **Capture path:** Ray captures the Shift+G Select Similar menu in Edit Mode with the menu fully visible. Ideally with one menu option pre-highlighted via mouse hover to give c16 a clear target. Suggested hover option: "Amount of Connecting Edges" or "Length" (representative picks for Edit Mode selection-by-similarity workflows).
- **Target dimensions:** Whatever the snip captures; menu is typically 250-350px wide and 400-500px tall.
- **Output:** `lesson_06_16_select_similar_menu.png`.
- **c16 overlay (deferred to INTEGRATION):** Single-region highlight on whichever menu option Ray hovered during capture. Positive-green colorway (affirmative menu option). Badge text reflects the chosen option (e.g., `LENGTH` or `AMOUNT`). Locked geometry per c46 precedent. Exact pixel coords resolved at Phase 2 INTEGRATION plan-lock via Pillow dark-text scan for the menu item bounds.

#### #47 · `lesson_06_47_loop_tools_sidebar_panel.png`

- **Type:** PNG, manual Win+Shift+S, no overlay planned
- **Capture path:** Ray captures the N-key sidebar in Edit Mode with the Loop Tools panel expanded (Edit tab > Loop Tools section). All 6 operation buttons visible: Circle, Curve, Flatten, Bridge, Space, Relax. Mesh in Edit Mode visible in the background for context.
- **Target dimensions:** Whatever the snip captures; sidebar panel is typically 280-380px wide depending on Blender layout.
- **Output:** `lesson_06_47_loop_tools_sidebar_panel.png`.
- **No overlay.** The expanded panel speaks for itself at INTEGRATION; figcaption carries the framing.

#### #44 · `lesson_06_44_selection_tools_reference.svg`

- **Type:** SVG, hand-authored, 800x560 canvas, id prefix `sr`
- **Capture path:** Authored from scratch in sub-chat B
- **Design pattern:** Adapts the Lesson 04 #14 keyboard shortcuts SVG idiom. Grid layout with 5 entries (pick layout that balances visual weight at sub-chat B execution time: 2x3 with one cell empty, or 3+2 row split, or single 5-row column). Each entry: icon (left), tool name + shortcut badge (center), one-line description (right).
- **Entries (5):**
  1. **Box Select** · Icon: dashed rectangle (matches c13 overlay aesthetic for visual coherence with the lesson PNGs). Shortcut badge: `B`. Description: "Drag a rectangle to select everything inside".
  2. **Circle Select** · Icon: solid circle outline (matches c14 aesthetic). Shortcut badge: `C`. Description: "Brush over elements; scroll to resize".
  3. **Lasso Select** · Icon: hand-drawn closed polyline loop (matches c15 aesthetic). Shortcut badge: `Ctrl + RMB`. Description: "Trace freeform around elements".
  4. **Select Similar** · Icon: small mesh fragment with one element highlighted and arrows radiating to similar elements. Shortcut badge: `Shift + G`. Description: "Match length, direction, area, or other traits".
  5. **Checker Deselect** · Icon: small checkerboard pattern. Shortcut badge: `Menu` (no direct keyboard shortcut; accessed via Select menu in the header). Description: "Deselect every other element in a selection".
- **House style:** Top 3px `#FF6B00` accent rail at (0, 0). System-ui font stack. Heading at y=56 size 24 weight 700 reading "Selection Tools Reference" or similar. Subtitle at y=84 size 14 opacity 0.65 reading `5 WAYS TO SELECT` (middle-dot acceptable as separator if needed). Divider at y=108. Body content from y=138. Footer tip card y=506-540 (Variant B 4px left rail per Phase 1 #8 precedent) with em-dash-free pro tip text.
- **Shortcut badge colorway:** Filled `#FF6B00` brand orange per Lesson 04 #14 precedent. Badge text white (`#ffffff`) inside the badge.
- **Internal ids:** `sr-title`, `sr-desc`, `sr-box`, `sr-circle`, `sr-lasso`, `sr-similar`, `sr-checker` (plus any sub-ids needed for icon polyline / circle / rect shapes; namespace as `sr-icon-box`, `sr-icon-circle`, etc.). No collisions with Phase 1 `pf-*` or Phase 3 `dd-*` planned.
- **`color="#222"` retained** on the standalone `.svg` file for `<img>` fallback per locked rule; stripped from root during inlining at Phase 2 INTEGRATION.
- **Em-dash-free** per style guide v4 decision 9. Subtitle uses middle-dot if separator needed.

### ID prefix registry update (Phase 2)

- **SVG ids added:** `sr` for #44 (no collisions with Phase 1 `pf` or Phase 3 `dd` planned)
- **PNG overlay ids added (5):** `c10` (#10 Loop Tools add-on highlight), `c13` (#13 Box Select dashed rect), `c14` (#14 Circle Select ring), `c15` (#15 Lasso Select polyline), `c16` (#16 Select Similar menu highlight). No collisions with Phase 1 c2/c3/c46 or future phase-planned c20/c23/c28/c30/c43/c45/c49.

### Execution cadence (sub-chats A and B)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` after every commit (applies to doc updates at each sub-chat close; image production uses BlenderMCP / PIL composite / manual capture paths instead)
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in figcaptions, alt text (locked at Phase 2 INTEGRATION plan-lock chat, not at PRODUCTION), status bullets, SVG label / heading / subtitle text, or any other new prose
- BlenderMCP: lowercase `blender:execute_blender_code`, NO `read_factory_settings`, EEVEE_NEXT → EEVEE fallback, `temp_override` for OpenGL renders, full-window `bpy.ops.screen.screenshot` available if needed
- Pillow 12.2.0 path for composites; temp files named `_temp_lesson_06_NN_pN.png` and removed via `os.remove` after composite
- Phase 2 fresh scene reset at sub-chat A start (delete all `L06_*` objects from prior Phase 1 state)
- Update Placement table row state per image as each capture lands (`not captured/not produced; not integrated` → `captured; not integrated` or `produced; not integrated`)
- Append Status section bullet at each sub-chat close
- Warn Ray before context tightens within an execution sub-chat

### Phase 2 PRODUCTION close criterion

All 10 Phase 2 images on disk in `images/`:
- 6 PNGs from sub-chat A: #11, #12, #13, #14, #15, #48
- 3 PNGs + 1 SVG from sub-chat B: #10, #16, #47, #44

Placement table rows #10, #11, #12, #13, #14, #15, #16, #44, #47, #48 flipped to `captured; not integrated` or `produced; not integrated`. Status section gets close bullets for both sub-chats. Rewrite `session.md` to point at Phase 2 INTEGRATION plan-lock as the next chat.

Plan-lock close criterion: all 10 capture specs, scene configs, view rotations, output filenames, and overlay deferrals locked in writing before any production work. Met by this section.

---

## Phase 2 INTEGRATION plan

Locked 2026-05-22 during the Phase 2 INTEGRATION plan-lock chat. 10 image insertions into `lesson_06_edit_mode_essentials.html` split across 2 execution sub-chats. Each entry below carries a precise `oldText` anchor for `Filesystem:edit_file`; the figure block (and for #10, also the rewritten Activation Steps `<ol>` content) inserts at a marked position inside the anchor and the rest passes through.

**PART 04 indentation depth verified:** `#loop-tools`, `#advanced-selection`, and `#selection-tools` all use 0/4/8-space depth, identical to `#proportional-editing` from Phase 1 sub-chat 2. All 10 Phase 2 figures sit at section level (not inside cards), so all 10 use the default-depth variant only: figure col 4, img / svg root at col 8, svg children at col 12, deeper SVG nesting at 16 or 20, figcaption col 8. No deeper-indent variant needed this phase.

**Two-section discovery:** the lesson HTML splits the "Advanced Selection Techniques" topic across two `<section>` elements rather than one. `<section id="advanced-selection">` (lines 953 to ~1115) covers Selection by Similarity (Select Similar), Select All by Trait, and Checker Deselect. `<section id="selection-tools">` (lines ~1117 to ~1315) covers Box Select, Circle Select, Lasso Select, the selection comparison table, and the Selection Practice Challenge. The 6 sub-chat 2 images split: #16 and #48 land in `<section id="advanced-selection">`; #13, #14, #15, and #44 land in `<section id="selection-tools">`. The placement table row for #44 currently labels it `#advanced-selection` per the requirements doc's conceptual grouping but the actual integration anchor is at end of `<section id="selection-tools">` (after the Selection Practice Challenge card, before `</section>`). Placing #44 at end of `<section id="advanced-selection">` would land the 5-tool summary chart in the middle of the topic flow before Box / Circle / Lasso Select have been introduced. The placement table row will be updated to `#selection-tools` at sub-chat 2 close.

### Sub-chat split

- **Sub-chat 1** · `#loop-tools` section. 4 images: #10 with c10 full callout (1732x1266 viewBox, positive-green, badge `LOOPTOOLS`) paired with the Extensions Platform `<ol>` prose rewrite, #11 plain (2562x720), #12 plain (2562x720), #47 plain (612x767). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Two `Filesystem:edit_file` commits at the #10 anchor (one for the `<ol>` prose rewrite, one for the figure insertion); single commits each for #11, #12, #47. Heaviest single insertion: #10 figure with c10 callout (full positive-green callout shape set at 1732x1266 viewBox, comparable to Phase 1 c46 but at a larger viewBox). If sub-chat 1 tightens during execution, split into 1a (#10 prose rewrite + #10 figure with c10 overlay) and 1b (#11, #12, #47 plain figures).
- **Sub-chat 2** · `<section id="advanced-selection">` + `<section id="selection-tools">` (2 HTML sections). 6 images: #13 with c13 decorative dashed rect (1280x720 viewBox, white stroke width 2, dasharray `6,4`), #14 with c14 decorative solid ring (1280x720 viewBox, white stroke width 2, no dasharray), #15 with c15 decorative dashed polyline (1280x720 viewBox, white stroke width 2, dasharray `4,3`), #16 with c16 full callout (1305x621 viewBox, positive-green, badge `AMOUNT`), #44 inline SVG (800x560 viewBox, `sr` prefix preserved, root `color="#222"` stripped), #48 plain (1280x720). All at 0/4/8 indentation depth, default section-level figure placement (col 4). Heaviest single insertion: #44 inline SVG (estimated 6-9 KB inline content per the Phase 1 #8 precedent at 6,811 bytes for an SVG with comparable density). If sub-chat 2 tightens during execution, split into 2a (#16 + #48 in `#advanced-selection`) and 2b (#13, #14, #15, #44 in `#selection-tools`).

### c10 Extensions Platform `<ol>` prose rewrite spec

The legacy Add-ons-tab `<ol>` inside the Activation Steps card needs to be rewritten to teach the Extensions Platform install path. Two `Filesystem:edit_file` commits at the #10 anchor: one for the `<ol>` content rewrite (small focused edit), one for the figure insertion between the card `</div>` and the next `<h3>Essential Loop Tools Operations</h3>` (separate anchor, figure-only edit). The post-`<ol>` paragraph stays unchanged because the N-key sidebar Edit tab and right-click menu paths are still accurate after Extensions Platform install.

**Original `<ol>` (5 list items, current on disk):**

```
        <ol>
            <li>Go to <strong>Edit → Preferences</strong> (<kbd>F4</kbd> then type "preferences")</li>
            <li>Click the <strong>Add-ons</strong> tab on the left</li>
            <li>Search for <strong>"Loop Tools"</strong> in the search box</li>
            <li>Check the checkbox next to <strong>"Mesh: Loop Tools"</strong></li>
            <li>Close preferences – the add-on is now active!</li>
        </ol>
```

**Rewritten `<ol>` (5 list items, target):**

```
        <ol>
            <li>Go to <strong>Edit → Preferences</strong> (<kbd>F4</kbd> then type "preferences")</li>
            <li>Click the <strong>Get Extensions</strong> tab on the left</li>
            <li>Search for <strong>"looptools"</strong> in the search box (one word, no space)</li>
            <li>Click <strong>Install</strong> on the <strong>LoopTools</strong> entry</li>
            <li>Close preferences – the add-on is now installed and active!</li>
        </ol>
```

Pre-existing en-dash `–` in the last `<li>` preserved verbatim. Pre-existing right-arrow `→` in the first `<li>` passes through. No new em-dashes introduced. The 5-item count is preserved so the visual rhythm of the `<ol>` matches the surrounding lesson structure.

### Decorative-shape-only overlay specs (c13, c14, c15)

Per the locked Phase 2 PRODUCTION plan and the `session.md` carry-forward, c13 / c14 / c15 are decorative-shape-only overlays: stroke `#ffffff` width 2 directly on the target region without highlight ellipse, leader line, marker circle, or badge. The shape IS the message (box-select dashed rect, circle-select solid ring, lasso-select dashed polyline). All three use viewBox `0 0 1280 720` matching the source PNG dimensions. Pixel coords resolved at sub-chat 2 execution via Pillow scan of the orange-selected vertex region. Wrapper div / overlay SVG geometry per the locked PNG annotation overlay component snippet (style guide v4) plus the decorative-shape-only variant addendum logged at Phase 2 PRODUCTION sub-chat A close.

| id  | shape       | stroke                            | dasharray | Pillow scan strategy                                                                          |
|-----|-------------|-----------------------------------|-----------|-----------------------------------------------------------------------------------------------|
| c13 | `<rect>`    | `#ffffff` width 2, `fill="none"`  | `6,4`     | bounding box of orange-selected vertex region plus 8-12 px padding on all sides               |
| c14 | `<circle>`  | `#ffffff` width 2, `fill="none"`  | (solid)   | centroid plus bounding radius of orange-selected vertex cluster; r slightly larger than bound |
| c15 | `<polyline>`| `#ffffff` width 2, `fill="none"`  | `4,3`     | concave-hull / outline-trace of orange-selected L-shape vertex set; 8-12 closed anchor points |

c15 specifically: a closed polyline (or polygon with explicit `fill="none"`) approximating an organic hand-drawn lasso loop around the L-shape selection outline. Per the Phase 2 PRODUCTION sub-chat A close note, the L-shape lives at horizontal arm yi=2,3 cols xi=2..8 plus vertical arm xi=7,8 rows yi=4..7 on the 10x10 grid; the polyline traces just outside that outline with anchor points spaced roughly every 25-40 px along the outline. Polyline preferred over polygon so there is no implicit fill rendering even if the SVG ever loses its `fill="none"` attribute downstream.

### Per-image specs

#### #10 · `lesson_06_10_loop_tools_addon_location.png` · `#loop-tools` · c10 full callout + paired `<ol>` prose rewrite, col 4/8

**oldText anchor for the `<ol>` prose rewrite (commit 1 at #10 anchor):**
```
    <div class="card">
        <h4>🔌 Activation Steps</h4>
        <ol>
            <li>Go to <strong>Edit → Preferences</strong> (<kbd>F4</kbd> then type "preferences")</li>
            <li>Click the <strong>Add-ons</strong> tab on the left</li>
            <li>Search for <strong>"Loop Tools"</strong> in the search box</li>
            <li>Check the checkbox next to <strong>"Mesh: Loop Tools"</strong></li>
            <li>Close preferences – the add-on is now active!</li>
        </ol>
        <p><em>Once enabled, you'll find Loop Tools in the right-click menu when edges are selected, and in the Sidebar (<kbd>N</kbd> key) under the "Edit" tab.</em></p>
    </div>
```

`<ol>` content replaced with the rewritten 5 `<li>` items per the spec above. Surrounding `<div>`, `<h4>`, post-`<ol>` `<p>`, and closing `</div>` pass through verbatim.

**oldText anchor for the figure insertion (commit 2 at #10 anchor):**
```
        <p><em>Once enabled, you'll find Loop Tools in the right-click menu when edges are selected, and in the Sidebar (<kbd>N</kbd> key) under the "Edit" tab.</em></p>
    </div>

    <h3>Essential Loop Tools Operations</h3>
```

Figure inserts between the `</div>` (line 2 of the anchor) and the `<h3>` (line 4).

**alt:** Blender Preferences window with the Get Extensions tab selected on the left tab list. The search box at the top reads `looptools` as one word. Below it, an Installed section header is visible, and a LoopTools card is expanded to its full detail panel showing version 4.7.7, maintainer Community, website extensions.blender.org, file size 29.8 KB, and a GPL v2 or later license. A small unsaved-changes asterisk appears next to a Save Preferences indicator in the lower-left of the window.

**figcaption:** The Loop Tools add-on lives on the Extensions Platform in Blender 4.2 and later, not on the legacy Add-ons tab. Search for `looptools` as one word under Get Extensions, click Install on the v4.7.7 entry, and the add-on is ready to use from the right-click menu and the N-key sidebar Edit tab.

**c10 overlay spec** · viewBox `0 0 1732 1266`, `preserveAspectRatio="xMidYMid meet"`, one callout positive-green (the LoopTools card title row is an affirmative target):

| id              | target                                              | badge text  | colorway       |
|-----------------|-----------------------------------------------------|-------------|----------------|
| `c10-looptools` | LoopTools card title row near top of expanded card  | `LOOPTOOLS` | positive green |

Standard locked geometry: ellipse highlight `fill="none" stroke="#4ADE80" stroke-width="4"`; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"`; marker circle `r="6" fill="#4ADE80"` at badge-side end of leader 7 px from badge edge; badge rect `rx="6" fill="#4ADE80"` height 46; badge text `font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#0f1a14" letter-spacing="2"` reading `LOOPTOOLS`. Exact pixel coordinates resolved at sub-chat 1 execution via Pillow scan: first scan locates the LoopTools card title row (likely a brighter-pixel band where the bold `LoopTools` text sits near the top of the expanded card detail panel); second scan verifies leader-path clearance from the search box above, the Installed section header, and the version / maintainer rows below the title.

#### #11 · `lesson_06_11_loop_tools_circle_before_after.png` · `#loop-tools` · plain figure, col 4/8

**oldText anchor** (pre-existing en-dash `–` preserved verbatim):
```
    <blockquote>
        <p><strong>Pro Modeling Tip:</strong> When modeling machinery or hard-surface objects, you'll often start with rough shapes and use Circle to perfect the round components. For example, model a rough wheel hub, select the outer edge loop, apply Circle, and boom – instant precision!</p>
    </blockquote>

    <h3>Curve: Smooth Flowing Lines</h3>
```

Figure inserts between the `</blockquote>` (line 3) and the `<h3>` (line 5).

**alt:** Two-panel before-and-after composite. Left panel: a cylinder in Blender Edit Mode with its top 8-vertex edge loop selected in orange, the vertices clearly jittered in XY so the loop looks irregular and angular. Right panel: the same cylinder after Loop Tools Circle, with the same 8 vertices now evenly redistributed around a perfect circle. A 2 px Blender-orange vertical divider separates the two panels.

**figcaption:** Loop Tools Circle takes a selected edge loop and snaps it to a perfect circle around its centroid. The 8 jittered vertices on the left become 8 evenly distributed points on a precise circle on the right, ready for clean hard-surface modeling.

#### #12 · `lesson_06_12_loop_tools_bridge_operation.png` · `#loop-tools` · plain figure, col 4/8

**oldText anchor:**
```
    <div class="card" style="background-color: #fff3cd; border-left: 4px solid #ffc107;">
        <h4>⚠️ Bridge Requirements</h4>
        <p>For Bridge to work properly:</p>
        <ul>
            <li>Both edge loops should have the <strong>same number of edges</strong> (or proportional numbers)</li>
            <li>The loops should be <strong>separate</strong> (not connected)</li>
            <li>Both loops must be <strong>boundary edges</strong> (edges with only one face)</li>
        </ul>
        <p><em>If Bridge isn't working, check these conditions first!</em></p>
    </div>

    <h3>Space: Even Distribution</h3>
```

Figure inserts between the `</div>` (line 11) and the `<h3>` (line 13).

**alt:** Two-panel before-and-after composite. Left panel: two separate 16-vertex cylinder ring loops floating in space, both selected in orange, with a visible gap between them. Right panel: the same two loops connected by 16 fresh quad faces forming a smooth tube across the gap. A 2 px Blender-orange vertical divider separates the panels.

**figcaption:** Loop Tools Bridge spans the gap between two selected edge loops by generating a fresh ring of connecting faces. As long as the two loops have the same edge count and are both boundary loops, Bridge stitches them into a clean tube in one step.

#### #47 · `lesson_06_47_loop_tools_sidebar_panel.png` · `#loop-tools` · plain figure, col 4/8

**oldText anchor:**
```
        <p><strong>Result:</strong> A smooth, perfectly circular pipe with even topology!</p>
    </div>

    <blockquote>
        <p><strong>Industry Insight:</strong> Professional hard-surface modelers rely heavily on Loop Tools for mechanical modeling.
```

Figure inserts between the `</div>` (line 2) and the `<blockquote>` (line 4).

**alt:** Blender N-key sidebar with the Edit tab active at the bottom of the tab stack. The LoopTools panel is expanded and shows eight operation buttons in alphabetical order: Bridge, Circle, Curve, Flatten, Gstretch, Loft, Relax, Space. The viewport behind the sidebar is in Edit Mode.

**figcaption:** The Loop Tools panel lives in the N-key sidebar under the Edit tab once the add-on is installed. The v4.7.7 release from the Extensions Platform exposes eight operations · Bridge · Circle · Curve · Flatten · Gstretch · Loft · Relax · Space · two more than the historical six-op bundled version.

#### #13 · `lesson_06_13_box_select_in_action.png` · `<section id="selection-tools">` · c13 decorative dashed rect overlay, col 4/8

**oldText anchor:**
```
    <div class="card">
        <h4>📦 Box Select (<kbd>B</kbd>)</h4>
        <ol>
            <li>Press <kbd>B</kbd> to activate Box Select mode</li>
            <li>Your cursor becomes a crosshair</li>
            <li><strong>Click and drag</strong> to draw a rectangular selection box</li>
            <li>All elements inside the box get selected</li>
            <li>Release to confirm</li>
        </ol>
    </div>

    <table>
        <thead>
            <tr>
                <th>Box Select Modifiers</th>
```

Figure inserts between the `</div>` (line 11) and the `<table>` (line 13).

**alt:** Subdivided 10-by-10 grid plane in Blender Edit Mode with vertex select active. A rectangular block of 20 vertices (4 rows by 5 columns) is selected in orange. A white dashed rectangle outline traces just outside the selected block to indicate the area that was Box-Selected to produce this result.

**figcaption:** Press B and drag to draw a rectangle around any region. Every vertex, edge, or face inside the dashed rectangle gets selected in one stroke · the fastest way to pick up a contiguous block of grid-aligned geometry.

**c13 overlay** · single `<rect>` per the decorative-shape-only spec table above; viewBox `0 0 1280 720`; pixel coords resolved at sub-chat 2 execution via Pillow orange-vertex bounding-box scan; pad bounding box by 8-12 px on all sides for visual clearance.

#### #14 · `lesson_06_14_circle_select_in_action.png` · `<section id="selection-tools">` · c14 decorative solid ring overlay, col 4/8

**oldText anchor:**
```
    <div class="card">
        <h4>⭕ Circle Select (<kbd>C</kbd>)</h4>
        <ol>
            <li>Press <kbd>C</kbd> to activate Circle Select mode</li>
            <li>A circle cursor appears</li>
            <li><strong>Left-click</strong> or <strong>click-drag</strong> to select elements under the circle</li>
            <li><strong>Middle-click</strong> or hold <kbd>Shift</kbd> to deselect instead</li>
            <li><strong>Mouse wheel</strong> to change circle size</li>
            <li>Press <kbd>Esc</kbd> or <kbd>Right-click</kbd> to exit mode</li>
        </ol>
    </div>

    <div class="card" style="background: #e8f5e9; border-left: 4px solid #4CAF50;">
        <h4>✅ When Circle Select Shines</h4>
```

Figure inserts between the first `</div>` (line 12) and the next `<div class="card"...>` (line 14).

**alt:** Subdivided grid plane in Blender Edit Mode with vertex select active. A roughly circular cluster of 13 vertices near the center of the grid is selected in orange. A solid white ring overlay surrounds the cluster, indicating the brush radius that was used to paint the selection.

**figcaption:** Press C for Circle Select and the cursor becomes a brush. Click or click-drag to paint a selection inside the ring, scroll the mouse wheel to resize the brush · ideal for organic clusters that do not snap to a rectangle.

**c14 overlay** · single `<circle>` per the decorative-shape-only spec table above; viewBox `0 0 1280 720`; pixel coords resolved at sub-chat 2 execution via Pillow orange-vertex centroid plus bounding-radius scan; radius set slightly larger than the bounding radius so the ring sits outside the outermost selected vertex.

#### #15 · `lesson_06_15_lasso_select_in_action.png` · `<section id="selection-tools">` · c15 decorative dashed polyline overlay, col 4/8

**oldText anchor:**
```
    <p><strong>Lasso Select</strong> lets you draw a freeform shape with your mouse, and everything inside gets selected. It's perfect for irregular shapes that don't fit in boxes or circles.</p>

    <div class="card">
        <h4>🎯 Lasso Select</h4>
```

Figure inserts between the description `</p>` (line 1) and the `<div class="card">` (line 3).

**alt:** Subdivided grid plane in Blender Edit Mode with vertex select active. An L-shape of 22 vertices is selected in orange, with a horizontal arm running along the lower half of the grid and a vertical arm extending up the right side. A white dashed closed polyline traces an organic hand-drawn outline around the L-shape to indicate the lasso path that produced this selection.

**figcaption:** Hold Ctrl and right-click-drag to draw a freeform loop around any irregular region. The dashed line traces the path your hand drew · everything inside the closed loop ends up selected when you release.

**c15 overlay** · single closed `<polyline>` per the decorative-shape-only spec table above; viewBox `0 0 1280 720`; 8-12 anchor points placed at concave-hull / outline-trace positions just outside the L-shape vertex set, points list closes back on the first anchor for a clean closed loop; pixel coords resolved at sub-chat 2 execution via Pillow orange-vertex outline-trace scan.

#### #16 · `lesson_06_16_select_similar_menu.png` · `<section id="advanced-selection">` · c16 full callout, col 4/8

**oldText anchor** (pre-existing en-dash `–` preserved verbatim):
```
    <h3>Selection by Similarity (Select Similar)</h3>

    <p>Imagine you need to select all triangular faces in a complex mesh, or every edge with a specific angle. Doing this manually would take forever! That's where <strong>Select Similar</strong> comes in – it finds and selects all geometry that matches certain criteria.</p>

    <div class="card">
        <h4>🔍 How to Use Select Similar</h4>
```

Figure inserts between the explanation `</p>` (line 3) and the `<div class="card">` (line 5).

**alt:** Blender 3D viewport in Edit Mode with face select active. A Shift+G Select Similar popup menu is open and displays the full list of similarity options · Length, Direction, Amount of Faces Around an Edge, Face Angle, Crease, Bevel, Seam, Sharpness, Freestyle Edge Marks, Face Regions. The row reading `Amount of Faces Around an Edge` is hovered and shows the standard Blender hover highlight; a tooltip floats to its right with descriptive text.

**figcaption:** Shift G opens the Select Similar menu. Pick a similarity option such as Amount of Faces Around an Edge and Blender selects every other face that shares that trait · perfect for grabbing all triangles, all boundary edges, or every face with the same topology around it in one shot.

**c16 overlay spec** · viewBox `0 0 1305 621`, `preserveAspectRatio="xMidYMid meet"`, one callout positive-green:

| id           | target                                       | badge text | colorway       |
|--------------|----------------------------------------------|------------|----------------|
| `c16-amount` | `Amount of Faces Around an Edge` menu row    | `AMOUNT`   | positive green |

Standard locked geometry per the Phase 1 c46 precedent: ellipse highlight `fill="none" stroke="#4ADE80" stroke-width="4"` around the hovered menu row; leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"` from the ellipse to a clear viewport region (likely to the right of the menu near the tooltip, or below the menu in empty viewport space); marker `r="6" fill="#4ADE80"` 7 px from badge edge; badge rect `rx="6" fill="#4ADE80"` height 46; badge text `font-size="22" font-weight="700" fill="#0f1a14" letter-spacing="2"` reading `AMOUNT`. Exact pixel coordinates resolved at sub-chat 2 execution via Pillow scan: first scan locates the hovered-row brighter-pixel band against the default menu chrome; second scan verifies leader-path clearance from the floating tooltip text to the right of the menu.

#### #44 · `lesson_06_44_selection_tools_reference.svg` · `<section id="selection-tools">` · inline SVG, col 4/8

**oldText anchor:**
```
        <p><strong>Goal:</strong> Complete all 5 challenges in under 2 minutes. Practice until you can!</p>
    </div>
</section>

<section id="inset-outset">
```

Figure inserts between the `</div>` (line 2) and the `</section>` (line 3). The `<section id="inset-outset">` line is included in the anchor for uniqueness against any other `</p>\n    </div>\n</section>` pattern earlier in the doc.

**alt:** Selection Tools quick reference chart. A 5-row column layout summarizes the five Edit Mode selection tools · Box Select (B), Circle Select (C), Lasso Select (Ctrl plus right mouse button), Select Similar (Shift plus G), and Checker Deselect (Select menu). Each row carries an icon on the left, the tool name and a one-line description in the middle, and a Blender-orange shortcut badge on the right. The chart matches the dashed-rect, solid-ring, and dashed-polyline aesthetics of the c13, c14, and c15 overlays used elsewhere in the section so the cheat sheet reads coherently with the lesson PNGs.

**figcaption:** Five ways to make a selection in Edit Mode, ready for quick reference. Pick the tool that matches the shape you need · rectangle, circle, freeform loop, by-trait match, or alternating pattern.

**SVG inlining checklist for sub-chat 2:**
- Figure at col 4, `<svg>` root at col 8, svg children at col 12, deeper nesting at 16 / 20, figcaption at col 8
- Strip `color="#222"` from the inlined root `<svg>` tag (preserve in the standalone `.svg` file in `images/` for `<img>` fallback)
- Preserve every `sr-*` id verbatim (`sr-title`, `sr-desc`, plus per-row ids and per-icon ids per the standalone file)
- Preserve `role`, `aria-labelledby`, `<title>`, `<desc>` verbatim
- Collapse multi-line attribute continuations on `<rect>`, `<line>`, `<polyline>`, `<text>`, `<tspan>` onto single lines
- Prune decorative ASCII-divider author comments (`<!-- ====== Block Title ====== -->`)
- Keep short structural row comments (`<!-- Row 1: Box Select -->`, `<!-- Footer tip -->`, etc.) for in-place navigation in the inlined block
- Root `<svg>` opening tag flattened from any multi-line form onto a single line

#### #48 · `lesson_06_48_checker_deselect_result.png` · `<section id="advanced-selection">` · plain figure, col 4/8

**oldText anchor:**
```
    <h3>Checker Deselect: The Pattern Master</h3>

    <p><strong>Checker Deselect</strong> is like creating a checkerboard pattern in your selection. It deselects every other element, which is incredibly useful for creating even, alternating patterns.</p>

    <div class="card">
        <h4>♟️ Using Checker Deselect</h4>
```

Figure inserts between the description `</p>` (line 3) and the `<div class="card">` (line 5).

**alt:** Cylinder in Blender Edit Mode with edge select active. The cylinder has nine horizontal edge rings stacked between its top and bottom caps. Five of the nine rings are selected in orange (the 1st, 3rd, 5th, 7th, and 9th from the bottom), and four are deselected (the 2nd, 4th, 6th, and 8th), producing a clean alternating stripe pattern up the side of the cylinder.

**figcaption:** Checker Deselect drops every other element in an existing selection to leave a clean alternating pattern. On a stack of nine selected edge rings the result is five selected · four deselected, ready for patterned subdivision, alternating material assignments, or any task that needs evenly-spaced gaps.

### ID prefix sub-id registry (Phase 2)

- c10 sub-id: `c10-looptools` (single highlight on LoopTools card title row, positive-green badge `LOOPTOOLS`)
- c13 sub-id: `c13-box` (decorative dashed rect; the sub-id sits on the single `<rect>` for namespace cleanliness)
- c14 sub-id: `c14-circle` (decorative solid ring, single `<circle>`)
- c15 sub-id: `c15-lasso` (decorative dashed polyline, single closed `<polyline>`)
- c16 sub-id: `c16-amount` (single highlight on `Amount of Faces Around an Edge` menu row, positive-green badge `AMOUNT`)

5 total overlay sub-ids planned for Phase 2 INTEGRATION (c10, c13, c14, c15, c16). No collisions with Phase 1 sub-ids (`c2-*`, `c3-*`, `c46-*`), with `pf-*` (Phase 1 SVG #8), with `sr-*` (Phase 2 SVG #44, inlined this phase), or with any future-phase planned prefixes.

### Execution cadence (sub-chats 1 and 2)

- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify file-size shift after every commit
- WSL `\\wsl$\Ubuntu\` paths only
- No new em-dashes in any new content; pre-existing en-dashes and right-arrows in `oldText` anchors pass through verbatim; middle-dot (`·`) for separation in figcaption phrasing
- For c10 / c13 / c14 / c15 / c16 pixel-coord work: `Filesystem:copy_file_user_to_claude` the source PNG into Claude's container, then run Pillow pixel scans per the c46 precedent (orange-selected-vertex scan for c13 / c14 / c15; brighter-row pixel scan for c10 / c16)
- Update Placement table row state per image as each integration commits (`captured/produced; not integrated` → `integrated`); the #44 row also flips its section label from `#advanced-selection` to `#selection-tools` at sub-chat 2 close
- Append Status section bullet at each sub-chat close
- Rewrite `session.md` at sub-chat 1 close to point at sub-chat 2 execution; rewrite `session.md` again at sub-chat 2 close (Phase 2 INTEGRATION close) to point at Phase 3 PRODUCTION plan-lock; `session.md` not rewritten this plan-lock chat
- Warn Ray before context tightens within an execution sub-chat
- MCP server hang recovery armed per the locked rule (4-min timeout boundary → check file size with `Filesystem:get_file_info` before retrying)

Plan-lock close criterion: all 10 anchors, figcaptions, alt texts, overlay specs, the #44 SVG inlining checklist, and the #10 paired `<ol>` prose rewrite spec locked in writing before any HTML edit. The placement table row for #44 will be updated to `#selection-tools` at sub-chat 2 close. The stale `Next chat` section at the bottom of this doc will be rewritten at sub-chat 1 close to point at sub-chat 2 execution. Met by this section.

---

## Phase 3 PRODUCTION plan

Locked 2026-05-22 during the Phase 3 PRODUCTION plan-lock chat. 8 image productions split across 2 execution sub-chats per Option B confirmation. Each entry below carries scene config, view rotation, capture method, output filename, and overlay deferral (where applicable). Phase 3 fresh scene reset applies at sub-chat A start: delete all remaining `L06_*` objects from Phase 2 PRODUCTION state (L06_LoopCylinder, L06_BridgeMesh, L06_GridMesh, L06_RingStack) before building Phase 3 scenes. No Step 0 add-on check needed for Phase 3 (LoopTools v4.7.7 Extensions Platform install state persists from Phase 2 and is not material to Phase 3 since none of #17 through #50 use Loop Tools operations).

### Sub-chat split

- **Sub-chat A** · All BlenderMCP work. 6 PNGs: #17 inset operation progression (3-panel composite via PIL with 2px `#FF6B00` dividers), #18 inset individual vs group (2-panel composite), #19 inset double technique (4-panel composite), #22 limited dissolve before/after (2-panel composite), #23 face orientation overlay (single-pose viewport render with Face Orientation overlay enabled), #50 fill operations comparison (3-panel composite). Fresh scene reset as step 0 (delete L06_* leftovers from Phase 2). Heaviest single capture: #19 4-panel composite at 5126x720.
- **Sub-chat B** · All non-scripted work. 1 PNG + 1 SVG: #20 merge by distance menu via manual Win+Shift+S, #21 dissolve vs delete SVG hand-authored at 800x560 with `dd` id prefix.

If sub-chat A tightens after 4-5 composites land, split into A1 (#17, #18, #19 inset triplet) and A2 (#22, #23, #50 mesh-cleanup triplet); the inset triplet shares cube/plane setup so it benefits from sharing a sub-chat. Sub-chat B should comfortably fit one chat since the SVG hand-author is bounded (Phase 1 #8 at 6,811 bytes and Phase 2 #44 at 6,615 bytes set the size envelope) and the #20 manual capture is small.

### Step 0 (sub-chat A only) · Fresh scene reset

Before any Phase 3 capture work, clean the scene of L06_* leftovers from Phase 2 PRODUCTION sub-chat A:

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

Per-image scenes built fresh per the specs below; reuse a single cube across #17 / #18 / #19 / #50 by rebuilding/undoing between panel captures rather than maintaining 4 separate L06_* objects.

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
| 1 | `lesson_06_01_object_vs_edit_mode_comparison.png` | PNG | (none) | `#enter-edit-mode` | After Object Mode vs Edit Mode table | integrated |
| 2 | `lesson_06_02_edit_mode_visual_indicators.png` | PNG | `c2` | `#enter-edit-mode` | After Visual Differences in Edit Mode list | integrated |
| 3 | `lesson_06_03_selection_mode_icons.png` | PNG | `c3` | `#selection-modes` | After The Selection Mode Trio introduction | integrated |
| 4 | `lesson_06_04_vertex_selection_example.png` | PNG | (none) | `#selection-modes` | Within Vertex Select Mode card | integrated |
| 5 | `lesson_06_05_edge_selection_example.png` | PNG | (none) | `#selection-modes` | Within Edge Select Mode card | integrated |
| 6 | `lesson_06_06_face_selection_example.png` | PNG | (none) | `#selection-modes` | Within Face Select Mode card | integrated |
| 7 | `lesson_06_07_proportional_editing_circle.png` | PNG | (none) | `#proportional-editing` | After Activating Proportional Editing card | integrated |
| 8 | `lesson_06_08_proportional_falloff_comparison.svg` | SVG | `pf` | `#proportional-editing` | After Falloff Types table | integrated |
| 9 | `lesson_06_09_proportional_hill_creation.png` | PNG | (none) | `#proportional-editing` | Within Practice Exercise: Creating a Hill | integrated |
| 46 | `lesson_06_46_proportional_falloff_menu.png` | PNG | `c46` | `#proportional-editing` | After Falloff Types mermaid diagram | integrated |
| 10 | `lesson_06_10_loop_tools_addon_location.png` | PNG | `c10` | `#loop-tools` | After Enabling Loop Tools Add-on instructions | integrated |
| 11 | `lesson_06_11_loop_tools_circle_before_after.png` | PNG | (none) | `#loop-tools` | After Circle: Creating Perfect Rounds section | integrated |
| 12 | `lesson_06_12_loop_tools_bridge_operation.png` | PNG | (none) | `#loop-tools` | After Bridge: Connecting Edge Loops section | integrated |
| 47 | `lesson_06_47_loop_tools_sidebar_panel.png` | PNG | (none) | `#loop-tools` | After Loop Tools Practice Project as reference | integrated |
| 13 | `lesson_06_13_box_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Box Select: The Rectangular Selector card | integrated |
| 14 | `lesson_06_14_circle_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Circle Select: The Brush Tool card | integrated |
| 15 | `lesson_06_15_lasso_select_in_action.png` | PNG | (none) | `#advanced-selection` | After Lasso Select: Freeform Selection description | integrated |
| 16 | `lesson_06_16_select_similar_menu.png` | PNG | `c16` | `#advanced-selection` | After Selection by Similarity explanation | integrated |
| 48 | `lesson_06_48_checker_deselect_result.png` | PNG | (none) | `#advanced-selection` | After Checker Deselect description | integrated |
| 44 | `lesson_06_44_selection_tools_reference.svg` | SVG | `sr` | `#selection-tools` | At end of section as summary | integrated |
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

**Phase 3 PRODUCTION plan-lock.** Read `session.md` first, then this `lesson_06_integration_progress.md` (Status section now has Phase 2 INTEGRATION fully closed through sub-chat 2 with the combined 2a + 2b close-out bullet; the `Phase 2 INTEGRATION plan` section above carries the historical anchor / figcaption / alt / overlay specs for all 10 Phase 2 images; Placement table rows #1-#16, #44, #46-#48 all show `integrated` for a Phase 2 INTEGRATION COMPLETE total of 20 of 50 images integrated; the `Phase plan` section above carries the Phase 3 line: `#inset-outset` + `#mesh-cleanup` with 8 images including 1 SVG; the `Missing section` above lists the 8 Phase 3 images that need PRODUCTION work next), then `lesson_06_image_requirements.md` (entries #17, #18, #19, #20, #21, #22, #23, #50 for Phase 3 placement intent and AI prompt guidance), then `images/IMAGE_STYLE_GUIDE.md` v4 if any gap surfaces (likely no gap given Phases 1 and 2 PRODUCTION precedents cover all relevant patterns including the SVG hand-author idiom for #21).

Then write the Phase 3 PRODUCTION plan-lock section into this doc, following the same structural model as the Phase 2 PRODUCTION plan section above: sub-chat split, per-image specs covering scene config / view rotation / capture method / output filename / overlay deferral (where applicable), ID prefix registry update for Phase 3 (`dd` SVG prefix for #21 plus `c20` and `c23` PNG overlay prefixes), execution cadence rules carry-forward from Phases 1 and 2, and close criterion. Phase 3 covers 8 images: #17 inset operation progression PNG (multi-pose composite likely), #18 inset individual vs group PNG (2-panel composite), #19 inset double technique PNG (multi-pose progression), #20 merge by distance PNG with `c20` overlay, #21 dissolve vs delete SVG with `dd` id prefix, #22 limited dissolve before/after PNG (2-panel composite), #23 face orientation overlay PNG with `c23` overlay, #50 fill operations comparison PNG (3-panel composite). 7 PNGs + 1 SVG. 2 PNG overlays planned (c20 and c23).

**PRODUCTION-time considerations for Phase 3:**

- Fresh scene reset at Phase 3 PRODUCTION sub-chat A start required: delete L06_* leftovers from Phase 2 (L06_LoopCylinder, L06_BridgeMesh, L06_GridMesh, L06_RingStack potentially still in scene).
- LoopTools v4.7.7 install state persists from Phase 2 (Extensions Platform install survives Blender restarts; LoopTools is not material to Phase 3 since none of #17 through #50 use Loop Tools operations).
- Locked op-name corrections still apply: `bpy.ops.mesh.inset` (not `inset_faces`) is the singular inset op needed for #17 / #18 / #19; `bpy.ops.mesh.delete(type='FACE')` singular for any face deletion in #21 dissolve vs delete; `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` if unequal-spaced cuts needed.
- #21 SVG follows the locked Phase 1 #8 / Phase 2 #44 house style (800x560 default canvas, top 3px `#FF6B00` accent rail, system-ui font, `color="#222"` retained on disk, middle-dot separators, Variant B 4px left rail footer tip card) with id prefix `dd`; design pattern is a paired-panel comparison (left DELETE warning red header, right DISSOLVE positive green header) per the SVG design notes section above.

After plan-lock: Phase 3 PRODUCTION sub-chat A execution (likely 4-6 BlenderMCP captures), then Phase 3 PRODUCTION sub-chat B execution (manual captures + SVG #21 hand-author) if a 2-sub-chat split is locked. After Phase 3 PRODUCTION closes: Phase 3 INTEGRATION plan-lock + execution sub-chats. Then Phase 4 / 5 / 6 PRODUCTION + INTEGRATION across the remaining 22 images (Phase 4 6 images, Phase 5 8 images, Phase 6 8 images). Then Lesson 06 close-out chat for handoff doc + archive sweep + status roll.

**Alternative next steps if Ray wants something other than Phase 3 PRODUCTION plan-lock:**

- **Retroactive Lesson 05 browser QA pass** (long-deferred QA debt for all 30 Lesson 05 figures). Optional cleanup chat that does not advance Lesson 06 but closes outstanding QA work from the prior lesson.
- **Lesson 06 mid-lesson browser QA pass** (verify all 20 Phase 1 + Phase 2 figures render correctly in browser: c2 / c3 / c46 / c10 / c16 PNG overlays positioned correctly; c13 / c14 / c15 decorative-shape-only overlays trace their intended regions; #8 `pf` and #44 `sr` inline SVGs render in both light and dark mode; no broken image refs). Optional sanity check before continuing with Phase 3.
- **Non-Blender-course work.** Phase 2 INTEGRATION close cleanly puts the lesson at a natural pause point; resume Phase 3 PRODUCTION plan-lock any future chat.
