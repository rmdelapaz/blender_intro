# Lesson 05 Image Integration Progress

**Lesson:** `lesson_05_understanding_meshes_and_geometry.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
**Image directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
**Started:** 2026-05-19 (planning chat)
**Current state:** Phase 6 PRODUCTION COMPLETE 2026-05-21. All 6 Phase 6 images on disk (3 SVGs: #20 mf 9,098 B, #21 nm 10,696 B, #23 df 9,758 B; 3 PNGs: #22 c22 692,686 B, #25 c25 154,004 B, #30 c30 1,479,452 B; total new content 2,355,694 bytes / 2.25 MB). 24 of 30 integrated (13 SVGs + 11 PNGs). 6 of 30 produced or captured but not integrated. 0 of 30 missing (lesson has all 30 images on disk for the first time). HTML still at 234,483 bytes (not modified by Phase 6 PRODUCTION; will grow at Phase 6 INTEGRATION). Next phase: Phase 6 INTEGRATION (final Lesson 05 image cycle, closes lesson at 30 of 30 integrated).

This file is the running narrative log for Lesson 05 image production and integration. Modeled on `lesson_04_integration_progress.md`. Updates appended at milestone boundaries per `INTERRUPTION_RECOVERY.md` pillar 2.1 (save-first).

---

## Status

- 2026-05-21 — Phase 6 PRODUCTION chat. Authored 3 SVGs and captured 3 PNGs for the `#manifold-geometry` and `#summary` sections per the locked Phase 6 PRODUCTION specs in this doc. SVGs first then PNGs per the locked production order. SVG #20 `lesson_05_20_manifold_geometry.svg` (9,098 bytes, id prefix `mf`) authored as single-panel hero with central edge highlight: 2x2 quad patch (9 verts in 3x3 grid centered at (400, 282), spanning x=310-490 y=170-395) with the central vertical edge from (400, 170) to (400, 282) highlighted in green `#4ADE80` width 4 to demonstrate the manifold rule of every edge bordering exactly 2 faces; 3-layer green endpoint glyphs at both ends; 7 other vertices in 2-layer orange dots; LEFT card (40, 195) "EXACTLY 2 FACES" and RIGHT card (580, 195) "WATERTIGHT" 170x100 each with dashed connectors to the highlighted edge. **Deviation in #20 vs the locked spec:** the BOTTOM annotation card at translate(310, 460) 140x70 in the locked spec would have overlapped the footer tip card at y=506-540, so it was reshaped into a wide single-row card at translate(180, 415) 440x50 with subhead "3D-PRINTABLE · BOOLEAN-SAFE · SIM-READY" carrying the same body copy. Same kind of layout nudge as Phase 4 #15 and Phase 5 #24 (precedent established). SVG #21 `lesson_05_21_nonmanifold_types.svg` (10,696 bytes, id prefix `nm`) authored as 4-panel grid per requirements doc default: panel 1 BOUNDARY (2 quads sharing inner edge, right outer edge highlighted red as boundary, label "1 face"); panel 2 TRIPLE (cross-section view with central 3-layer red glyph at (305, 280) plus 3 face-lines fanning at 120-degree intervals to (305, 215), (249, 313), (361, 313), label "3 faces"); panel 3 ISOLATED VERTEX (clean 2x2 quad patch in panel interior plus one orphan red 3-layer vertex glyph at (490, 225) above the patch, label "0 edges"); panel 4 WIRE EDGE (clean 2x2 quad patch plus extra wire edge stroked red from corner vertex (725, 270) up-and-right to terminal vertex (745, 230) with red 2-layer terminal dot, label "0 faces"). All 4 panel header bars fill `#E63946` red (all are AVOID cases) with white text "BOUNDARY"/"TRIPLE"/"ISOLATED"/"WIRE" size 12 weight 700. **Deviations in #21 vs the locked spec:** (1) dropped the separate panel name labels at y=410 since the header bars already carry the type names (avoids redundancy and clears layout space); (2) panel 2 TRIPLE EDGE uses cross-section visualization (central red dot plus 3 face-lines radiating at 120-degree intervals) rather than 3 actual quads sharing one edge in 2D, which does not read at panel-quarter size; (3) pill row values rephrased for clarity: "Boolean operations fail" / "3D-print slicer breaks" / "Physics simulation crashes" instead of the briefer spec wording. SVG #23 `lesson_05_23_density_decision_flowchart.svg` (9,758 bytes, id prefix `df`, 800x680 viewBox) authored as 2-question vertical decision tree: root question "Will the camera get close?" at y=170-220, branch arrows YES/NO to 2 secondary questions ("Animated or deformed?" at x=200 and "Many copies in scene?" at x=600) at y=275-325, 4 leaf arrows to 4 terminal density boxes at y=395-465 (HIGH green at x=110 with "50K+ verts" subtext, MEDIUM yellow at x=290 with "5K to 50K verts", LOW blue at x=510 with "Under 5K verts", LOW instanced blue at x=690 with italic "Instanced"), 3 synthesis pills at y=505-545 (GAMES "Low to medium" / FILM "High to very high" / PRINT "Medium to high"). Single `<marker>` def for arrowheads referenced by all 6 arrow lines. **Deviations in #23 vs the locked spec:** (1) dropped the dashed side-note callouts at LEFT and RIGHT margins; the 3-pill synthesis row at the bottom carries the same use-case-to-density mapping more structurally and the side notes would have crowded the 800-wide layout; (2) pill values rephrased to density tiers ("Low to medium" / "High to very high" / "Medium to high") rather than single tier names for more useful information. All 3 SVGs follow the locked house style (top 3px `#FF6B00` accent rail at (0,0); system-ui font stack; `color="#222"` retained on standalone files for `<img>` fallback, will strip on inline at Phase 6 INTEGRATION; heading at y=56 size 24 weight 700; subtitle at y=84 size 14 opacity 0.65; divider line at y=108; orange subhead at y=138 size 15 weight 700 letter-spacing 2). PNG #22 `lesson_05_22_nonmanifold_example.png` (692,686 bytes, id prefix `c22`) captured via single `blender:execute_blender_code` block: manual scene cleanup, fresh `primitive_cube_add(size=2)` named `NonManifoldCube`, sun light at (4, -4, 6), 1280x720 render config with `BLENDER_EEVEE_NEXT` try-set falling back to `BLENDER_EEVEE` on enum error (fallback triggered as expected). Edit Mode plus face select, top face selected via bmesh `f.normal.z > 0.9` (1 face), deleted then edge select then `bpy.ops.mesh.select_non_manifold()` selected exactly 4 boundary edges (verified via len check); op works in 5.1.1 without needing bmesh fallback. User-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=7.0`, solid viewport shading. OpenGL viewport render via `bpy.context.temp_override`. **Deviation in #22 vs the locked spec:** the spec's `bpy.ops.mesh.delete(type='FACES')` (plural) does not work in Blender 5.1.1; valid enum values for that op are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`. Corrected to `type='FACE'` (singular). PNG #25 `lesson_05_25_shading_toggle_ui.png` (154,004 bytes, id prefix `c25`) captured manually via Win+Shift+S by Ray of the default cube's right-click object context menu in Object Mode showing Shade Smooth and Shade Flat options with a few pixels of viewport background for context. Save filename correct first try (no rename needed, unlike the Phase 3 #28 `.pn.png` precedent). PNG #30 `lesson_05_30_realworld_topology_examples.png` (1,479,452 bytes, id prefix `c30`, 3840x720 composite) captured via 3 sequential `blender:execute_blender_code` blocks plus a Pillow composite block. Block 1 (cup): cleanup, `primitive_cylinder_add(vertices=24, radius=0.6, depth=1.4, location=(0, 0, 0.7))`, 2 horizontal loop cuts via `bmesh.ops.subdivide_edges` with cuts=2 on the 24 vertical side-edges. **Cup loop-cut deviation:** spec called for cuts at world z=0.2 and z=0.9 specifically, but `subdivide_edges` does not support unequal spacing in a single call; equal-spaced 1/3 and 2/3 z positions (local z=-0.233 and z=+0.233 = world z=0.467 and z=0.933) read well visually as cup rim and base ring details. Top n-gon cap selected via `f.normal.z > 0.9 and len(f.verts) > 4` (1 face), inset via `bpy.ops.mesh.inset(thickness=0.08)` then extrude (0, 0, -1.2) hollows the cup interior (post-extrude inner face center at local z=-0.5 = world z=0.2, just above cup bottom at world z=0; verified). Torus handle added via `primitive_torus_add(major_radius=0.3, minor_radius=0.05, location=(0.7, 0, 0.7), rotation=(radians(90), 0, 0))` so handle plane is X-Z, joined to cup. Final cup mesh 720 verts. view_distance=4.0, view_location=(0, 0, 0.5), solid shading with wireframe overlay enabled (`space.overlay.show_wireframes=True`, `wireframe_threshold=1.0`). OpenGL render to `_temp_lesson_05_30_p1.png` (695,171 bytes). Block 2 (chair): cleanup, 6 cubes built from primitives (seat 1.2x1.2x0.1 at (0, 0, 0.5); 4 legs 0.1x0.1x0.5 at corners (±0.5, ±0.5, 0.25); back panel 1.2x0.1x0.7 at (0, -0.55, 0.95)); scales applied via `transform_apply(scale=True)` then joined into single Chair mesh of 48 verts (8 verts × 6 cubes). view_distance=4.5, view_location=(0, 0, 0.6), same wireframe overlay config. OpenGL render to `_temp_lesson_05_30_p2.png` (658,221 bytes). Block 3 (bust): cleanup, `primitive_uv_sphere_add(segments=16, ring_count=12, radius=1, location=(0, 0, 1))` starting 178 verts. 4 cuts via `bmesh.ops.bisect_plane` (chosen over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics): 2 horizontal cuts at local z=0.3 (forehead) and z=0.0 (eye-mouth band) plus 2 vertical cuts at local x=0.3 and x=-0.3 (cheek-flow). After 4 bisects: 282 verts, 576 edges, 296 faces. Jaw scaling: 111 bottom verts (local z<-0.001) scaled by (1, 0.85, 1) via `bmesh.ops.scale` to taper Y dimension. NO facial features per the locked decision (no eye sockets, no nose, no mouth, no brows; lesson learned from #19 type-flip is that character-feature modeling is out of scope; the bust just shows loops flow around feature zones). view_distance=3.5, view_location=(0, 0, 1), same wireframe overlay. OpenGL render to `_temp_lesson_05_30_p3.png` (761,575 bytes). Bust orchestration well under the 20-min fallback threshold, so vase fallback not triggered. Block 4 (Pillow composite): `from PIL import Image, ImageDraw`, opened the 3 temp PNGs (each confirmed 1280x720), created 3840x720 RGBA canvas with transparent background, pasted at (0, 0), (1280, 0), (2560, 0), drew 2px `#FF6B00` vertical dividers at x=1279-1281 and x=2559-2561 via `draw.rectangle(..., fill=(255, 107, 0, 255))`, saved composite to final path. All 3 temp PNGs removed via `os.remove` (cleanly removed, no failures). Pillow 12.2.0 at addons modules path confirmed working again (Phase 5 #29 already verified). Zero new em-dashes anywhere in any of the new SVG copy (titles, descs, headings, subtitles, subheads, pill labels, pill values, takeaways, tip text, annotation card bodies); middle-dot (`·`, U+00B7) used in all 3 subheads ("WATERTIGHT · 3D-PRINTABLE · SOLID" for #20, "BOUNDARY · TRIPLE · ISOLATED · WIRE" for #21, "ASK · DECIDE · BUILD" for #23) and in the #20 BOTTOM card subhead ("3D-PRINTABLE · BOOLEAN-SAFE · SIM-READY"). `>` characters in tip text encoded as `&gt;` per XML rules. All 6 new image files verified post-write/post-render via `Filesystem:get_file_info`. HTML not modified this chat. **Phase 6 PRODUCTION fully complete; all 30 Lesson 05 images now on disk for the first time. Phase 6 INTEGRATION can run as a single pass with all 6 images, closing Lesson 05 image work at 30 of 30 integrated.**

- 2026-05-21 — Phase 5 INTEGRATION chat (executed across 2 sessions; original chat partial-closed mid-phase with 2 of 5 done before context tightened, continuation chat finished the remaining 3 plus the post-integration cleanup). All 5 Phase 5 images inlined into `lesson_05_understanding_meshes_and_geometry.html` via 5 sequential `Filesystem:edit_file` cycles (dry-run then commit then `Filesystem:get_file_info` verify each). Bottom-up integration order so earlier line positions stayed stable across both sessions: original chat handled #29 then #24; continuation chat handled #19 then #18 then #17. HTML size progression: 194,925 → 197,366 (+2,441 after #29 in original chat) → 212,521 (+15,155 after #24 in original chat) → 219,292 (+6,771 after #19 in continuation) → 232,123 (+12,831 after #18 in continuation) → 234,483 (+2,360 after #17 in continuation); total Phase 5 INTEGRATION delta +39,558 bytes (38.6 KB; within the projected 37-39 KB range). Per-figure HTML deltas tracked their projections cleanly: #19 ≈ 7 KB projected, 6.6 KB actual; #18 ≈ 12 KB projected, 12.5 KB actual; #17 ≈ 2.5-3 KB projected, 2.3 KB actual (at the low end because the c17 overlay wrapper svg used the `inset: 0` shorthand and 7 px marker-to-badge gap from the c28 precedent, slightly leaner than the `top: 0; left: 0` form drafted in the plan-lock). All three SVGs (#18, #19, #24) inlined per the locked rules: `color="#222"` stripped from inlined root, multi-line root attribute declaration collapsed onto a single line, re-indented to figure col 16 / svg root col 20 / svg children col 24 / group contents col 28; structural comments preserved (`<!-- Top accent rail -->`, `<!-- Header band -->`, `<!-- Head silhouette -->`, `<!-- Forehead arc loop -->`, `<!-- Right eye -->`, `<!-- Left eye -->`, `<!-- Mouth loops -->`, `<!-- Right cheek flow -->`, `<!-- Left cheek flow -->`, `<!-- LEFT annotation card: EYE LOOPS -->`, `<!-- Dashed connector ... -->`, etc. in #19; `<!-- Left panel: GOOD (green header) -->`, `<!-- Right panel: BAD (red header) -->`, `<!-- Header bar -->`, `<!-- 6x6 quad grid: 7 horizontal lines -->`, `<!-- 7 vertical lines -->`, `<!-- 5-pole marker ... -->`, `<!-- Outer panel border rect ... -->`, `<!-- 6-pole spoke edges (red) -->`, `<!-- Ring edges around pole ... -->`, `<!-- Extending edges from pole-ring outward to panel boundary -->`, `<!-- Auxiliary mid-area edges -->`, `<!-- Two triangles in lower-left (red outline) -->`, `<!-- Hexagonal n-gon in lower-right (red outline) -->`, `<!-- 6-pole vertex glyph (red, 3-layer) -->`, `<!-- Italic takeaway -->`, `<!-- Property pills row -->`, `<!-- Pill 1: ANIMATION -->`, `<!-- Pill 2: SUBDIVISION -->`, `<!-- Pill 3: READABILITY -->`, `<!-- Footer tip card -->` in #18); decorative comments (none present in Phase 5 SVGs by author convention) pruned. Both PNG overlays (c17, c29) used the locked inline-stacked overlay pattern with wrapper div `position: relative; display: inline-block; max-width: 100%` and overlay svg `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none` plus `preserveAspectRatio="xMidYMid meet"` (matching the c10/c11/c27/c28 precedent), viewBox matching PNG pixel dimensions (`0 0 1280 720` for c17, `0 0 3840 720` for c29). c29 overlay carries three `SELECT CAP` / `INSET` / `EXTRUDE` green badges centered above each panel (no highlights, no leaders, no marker circles per locked decision because the 2px `#FF6B00` vertical dividers baked into the PNG at x=1280 and x=2560 already carry panel boundaries); namespaced `c29-badge-1`/`c29-badge-2`/`c29-badge-3` rect + text ids and `c29-title`/`c29-desc` accessibility nodes. c17 overlay carries one labeled green highlight: ellipse `cx=640 cy=360 rx=275 ry=55` around the visible portion of the 24-edge horizontal middle ring, plus leader line up-and-right from `(878, 333)` to `(1013, 90)` and marker circle r=6 at `(1013, 90)` (7 px left of the badge per the c28 precedent), plus EDGE LOOP badge rect `x=1020 y=67 width=180 height=46 rx=6 fill="#4ADE80"` with centered text `x=1110 y=98 font-size=22 font-weight=700 fill="#0f1a14" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"`; namespaced `c17-highlight`/`c17-leader`/`c17-marker`/`c17-badge`/`c17-badge-text` ids plus `c17-title`/`c17-desc` accessibility nodes. #29 used the deeper-indent variant (figure col 20, wrapper div col 24, img and overlay svg col 28, overlay children col 32, figcaption col 24, figure close col 20) matching the #16 inside-Try-It-Now-card precedent from Phase 4 INTEGRATION because Exercise 6 card opens at col 16. #17 used the default-depth variant (figure col 16, wrapper div col 20, img and overlay svg col 24, overlay children col 28, figcaption col 20) since the Edge Flow and Edge Loops anchor sits at the section depth (h3 + p, not nested inside a card). Zero new em-dashes anywhere in any new content across all 5 figures (figcaptions, alt text, overlay titles, overlay descs, overlay badge text); commas, semicolons, parentheses, and middle-dot (`·`, U+00B7) used throughout (middle-dot in SVG subheads `POLE COUNT · ACCEPTABILITY` for #24, `QUAD GRIDS · IRREGULAR MIX` for #18, `EYES · MOUTH · CHEEKS` for #19). Pre-existing em-dashes in source HTML preserved verbatim through edits: `square border—this is an n-gon (8 sides)!` and `selects—it's an octagon!` in the Exercise 6 `<ol>` body (the second in #29's oldText anchor; em-dash preserved through the exact-match `Filesystem:edit_file` call), `connected—the "flow"` in the `#topology` intro `<p>` (outside all Phase 5 anchors), `topology—like two road networks` in the What Is Topology? intro (outside all Phase 5 anchors), `globe—they wrap around continuously` inside the 🔄 Edge Loops card body (just below #17's insertion point but not in #17's 4-line oldText anchor; preserved by virtue of not being touched). Placement-table row 29 Section column corrected from `#topology` to `#mesh-project` during this cleanup pass, reconciling the pre-existing inconsistency where the table said `#topology` but the actual anchor description ("In Exercise 6 section or n-gon-creation discussion") and content match (#29 illustrates the same n-gon-via-inset operation Exercise 6 walks through) both pointed at `#mesh-project > Part 3 > Exercise 6`. Browser QA pass deferred to a later cleanup chat (bundles with the deferred Phase 1, 2, 3, and 4 QA, plus the now-newly-integrated 5 Phase 5 figures).

- 2026-05-21 — Phase 5 PRODUCTION chat. Authored 3 SVGs and captured 2 PNGs for the `#topology` section per the locked Phase 5 PRODUCTION specs in this doc. SVGs first then PNGs per the locked production order. SVG #24 `lesson_05_24_topology_pole_types.svg` (11,441 bytes, id prefix `tl`) authored as the 4-panel pole grid (panel centers x=120, 305, 490, 675; rects 170x230 starting y=170) with color-coded header bars (3-pole green `#4ADE80` "OK", 4-pole green "BEST", 5-pole yellow `#F5C242` "OK", 6-pole red `#E63946` "AVOID"; white text on the red panel, dark `#0f1a14` text on the green and yellow panels), 3-layer central vertex glyphs at panel-center y=280 (halo r=8 opacity 0.20 `#FF6B00` / solid r=5 `#FF6B00` / inner highlight r=1.5 white) with N peripheral 2-layer dots at radius 55 (halo r=6 opacity 0.20 / solid r=3.5). **Minor placement nudge in #24 vs the locked spec:** panel labels and acceptability notes moved from y=310/y=330 to y=365/y=383 because the locked y values conflicted with the edge spread reaching y=335 (the 4-pole's south peripheral dot sits at exactly y=335 = panel-center y=280 + radius 55, and a label at y=310 would have overlapped the south edge of the 4-pole's spread). Same kind of nudge that #15 needed in Phase 4 (italic takeaway and footer card y values trimmed to fit). All other locked spec values preserved exactly (pills y=425 to y=465 with BEST/OK/AVOID copy, takeaway y=490, footer tip card y=506 to y=540 with "Use Select &gt; All by Trait &gt; Faces by Sides..." text, aria-labelledby="tl-title tl-desc"). SVG #18 `lesson_05_18_good_bad_topology.svg` (10,041 bytes, id prefix `gb`) authored as paired-panel comparison: left panel "GOOD: ALL QUADS" (green `#4ADE80` header bar with dark `#0f1a14` text) shows a 6x6 quad grid (7 horizontal plus 7 vertical lines filling the panel interior, cells ~53.33w x 32h, area x=50 to x=370 y=200 to y=392) with one yellow `#F5C242` 5-pole marker dot at intersection (210, 264) to demonstrate that good topology accommodates acceptable transition poles; right panel "BAD: TRIS, N-GONS, POLES" (red `#E63946` header bar with white text) shows the same panel outline filled with a chaotic mix — a prominent 6-pole vertex centered at (570, 270) with a 3-layer red glyph (halo r=12 opacity 0.20 / solid r=6 / inner highlight r=2 white) and 6 red spoke edges radiating to a ring at radius 45 plus 6 normal-color ring edges (forming 6 pinched triangles), 2 red triangle outlines in the lower-left ("436,335 490,330 470,380" and "470,380 490,330 530,380"), and 1 red hexagonal n-gon outline in the lower-right (center ~680, 335 radius ~22). Panels at x=40 and x=420, width 340 each, y=160 to y=400. Subhead text "QUAD GRIDS · IRREGULAR MIX". Takeaway y=425, pills y=455 to y=495 (ANIMATION/SUBDIVISION/READABILITY), footer tip y=506 to y=540 ("Mesh &gt; Clean Up &gt; Tris to Quads..."), aria-labelledby="gb-title gb-desc". All locked spec values preserved. SVG #19 `lesson_05_19_character_edge_flow.svg` (5,123 bytes, id prefix `cf`) authored as the type-flipped (PNG to SVG, decision 1 of the locked specs) stylized character head with orange `#FF6B00` edge loops drawn inside the head outline (concentric eye rings at cx=360/cx=440 cy=255 rx=22/16/10 ry=12/8/5, paired mouth ellipses at cx=400 cy=370 rx=35/22 ry=15/9, curved cheek-flow arcs descending from y=285 to y=425, shallow forehead arc spanning x=322 to x=478 at y=218) and three annotation cards (LEFT EYE LOOPS at (40,200), RIGHT MOUTH LOOPS at (580,200), BOTTOM CHEEK FLOW at (310,460)) with dashed `currentColor` opacity 0.30 stroke-dasharray "4 3" connectors from each card to the relevant interior loop region. **Head dimension nudge in #19 vs the locked spec:** ellipse changed from cx=400 cy=290 rx=140 ry=170 to cx=400 cy=300 rx=125 ry=140 to keep the head clear of two adjacent layout elements that the spec dimensions would have overlapped — the spec's top of the head (cy=290 - ry=170 = y=120) would have overlapped the orange subhead text at y=138, and the spec's bottom (cy=290 + ry=170 = y=460) would have collided with the top edge of the BOTTOM annotation card also at y=460. The nudged dimensions place the head top at y=160 (22 px below the subhead) and the bottom at y=440 (20 px above the BOTTOM card). All loop and annotation positions shifted accordingly: eyes at cy=255 (spec was cy=245, +10 to track the head center shift), mouth at cy=370 (spec was cy=360, +10), forehead arc at y=218. No takeaway and no footer tip card (the annotation cards already carry the pedagogical detail per the locked spec). aria-labelledby="cf-title cf-desc". PNG #17 `lesson_05_17_edge_loop_selection.png` (709,325 bytes, id prefix `c17`) captured via a single `blender:execute_blender_code` block: manual scene cleanup via `bpy.data.objects.remove(obj, do_unlink=True)` plus orphan-mesh cleanup, fresh `primitive_cylinder_add(vertices=24, radius=0.8, depth=2.4)` named `EdgeLoopCylinder`, sun light at (4, -4, 6), 1280x720 render config with `BLENDER_EEVEE_NEXT` try-set falling back to `BLENDER_EEVEE` on `TypeError` (fallback triggered as expected; engine settled on `BLENDER_EEVEE`). The default cylinder has only top-cap and bottom-cap rings with no middle ring, so a horizontal middle ring at z=0 was created first by subdividing the 24 vertical side-edges via bmesh: `bmesh.ops.subdivide_edges(bm, edges=[e for e in bm.edges if (e.verts[0].co.z * e.verts[1].co.z) < 0], cuts=1, use_grid_fill=False)`. Edge select mode plus bmesh selection filter `len(e.link_faces) == 2 and all(abs(v.co.z) < 0.05 for v in e.verts)` selected exactly the expected 24 horizontal middle-ring edges (verified via print). User-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=5.0`, view_location (0,0,0), solid viewport shading. OpenGL viewport render via `bpy.context.temp_override(window=window_3d, screen=screen_3d, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. PNG #29 `lesson_05_29_inset_ngon_creation.png` (784,451 bytes, id prefix `c29`) captured via 3 sequential `blender:execute_blender_code` blocks plus a Pillow composite block. Block 1: manual cleanup, fresh `primitive_cylinder_add(vertices=32, radius=0.8, depth=1.6)` named `InsetCylinder`, sun light, EEVEE fallback, user-perspective view, Edit Mode plus face select mode, bmesh select top-cap n-gon via `f.normal.z > 0.9 and len(f.verts) > 4` (1 face, the 32-gon top cap), OpenGL render to `images/_temp_lesson_05_29_p1.png`. Block 2: same scene, top cap still selected from block 1 (state persists across `blender:execute_blender_code` calls in this Blender MCP), applied inset and rendered to `images/_temp_lesson_05_29_p2.png`. **Operator-name deviation in block 2 vs the locked spec:** the locked spec calls `bpy.ops.mesh.inset_faces(thickness=0.3)` but in Blender 5.1.1 the only available inset op is `bpy.ops.mesh.inset` (verified via `dir(bpy.ops.mesh)` filtered for `inset` returning `['inset']` only); first attempt with the spec name returned "Calling operator bpy.ops.mesh.inset_faces error, could not be found"; corrected name `bpy.ops.mesh.inset(thickness=0.3)` works identically (region inset by default; individual-faces inset is the same op with `use_individual=True`). Post-inset verification confirmed the inner inset face is now selected with 32 verts and normal.z=1.000. Block 3: same scene, inner 32-gon still selected post-inset, applied `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (0, 0, 0.3)})` (this operator name was correct per spec) and rendered to `images/_temp_lesson_05_29_p3.png`. Post-extrude verification confirmed the inner face center moved from cylinder top z=0.8 to z=1.1 (delta 0.3 along Z as expected). Block 4 (Pillow composite): `from PIL import Image, ImageDraw`, opened the three 1280x720 temp PNGs, created a 3840x720 RGBA canvas (transparent background via `Image.new('RGBA', (3840, 720), (0, 0, 0, 0))`), pasted at (0,0), (1280,0), (2560,0), drew 2px `#FF6B00` vertical dividers at x=1280 and x=2560 via `draw.rectangle([x-1, 0, x+1, 720], fill=(255, 107, 0, 255))`, saved composite to the final path. All 3 temp PNGs removed via `os.remove` (cleanly removed; no failures reported). Pillow 12.2.0 worked correctly at the addons modules path (`C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`), confirming that the Phase 4 numpy-fallback workaround is no longer needed for future composites. Zero new em-dashes anywhere in any of the new SVG copy (titles, descs, headings, subtitles, subheads, pill labels, pill values, takeaways, tip text, annotation card bodies); middle-dot (`·`, U+00B7) used in all three subheads (`POLE COUNT · ACCEPTABILITY`, `QUAD GRIDS · IRREGULAR MIX`, `EYES · MOUTH · CHEEKS`). `>` characters in tip text encoded as `&gt;` per XML rules ("Select &gt; All by Trait &gt; Faces by Sides..." in #24, "Mesh &gt; Clean Up &gt; Tris to Quads..." in #18). All 3 SVGs follow the locked house style (800x560 viewBox; top 3px `#FF6B00` accent rail at (0,0); system-ui font stack `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`; `color="#222"` retained on standalone files for `<img>` fallback, will strip on inline at Phase 5 INTEGRATION; heading at y=56 size 24 weight 700; subtitle at y=84 size 14 opacity 0.65; divider line at y=108 x=120 to x=680 opacity 0.25; orange subhead at y=138 size 15 weight 700 letter-spacing 2). All 5 new image files verified post-write/post-render via `Filesystem:get_file_info`. HTML not modified this chat. Phase 5 PRODUCTION fully complete; Phase 5 INTEGRATION can now run as a single pass with all 5 images (now 3 SVGs and 2 PNGs after the type flip).

- 2026-05-20 — Phase 4 INTEGRATION chat (executed across 2 sessions due to context-budget split). All 6 Phase 4 images inlined into the `#polygon-types` section of `lesson_05_understanding_meshes_and_geometry.html` via 6 sequential `Filesystem:edit_file` cycles (dry-run then commit then `Filesystem:get_file_info` verify each). Bottom-up integration order so earlier line numbers stay stable across edits: session 1 handled #16, #27, #15, #14; session 2 handled #13, #12. HTML size progression: 161,951 → 162,617 (+666 after #16) → 164,799 (+2,182 after #27) → 176,468 (+11,669 after #15) → 183,405 (+6,937 after #14) → 189,316 (+5,911 after #13) → 194,925 (+5,609 after #12); total Phase 4 INTEGRATION delta +32,974 bytes (32.2 KB; at the low end of the projected 41 to 49 KB range, reflecting that #16 shipped with no overlay, #27's overlay was compact, and the trio SVGs landed at the low end of their 8 KB projections). Overlay decisions confirmed per the locked plan: #16 ships clean with no overlay (the pole-tri vs equator-quad selection contrast IS the message), #27 carries a `c27-*` overlay (green ellipse, leader line, green badge pointing at the "Faces by Sides" submenu row). SVGs #12, #13, #14, #15 all inlined per locked rules: `color="#222"` stripped from inlined root, re-indented to figure col 16 / svg root col 20 / svg children col 24 / group contents col 28 / figcaption col 20; multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, and `<desc>` collapsed onto single lines (consistent with the #14 inline pattern set in session 1); decorative author comments pruned (none present in Phase 4 SVGs by author convention); short structural comments (`<!-- Top accent rail -->`, `<!-- Header band -->`, `<!-- Hero polygon: ... -->`, `<!-- Vertex glyphs ... -->`, `<!-- Property pills row -->`, `<!-- Italic takeaway -->`, `<!-- Footer tip card -->`, plus per-vertex comments inside the vertex glyph groups, plus per-cell `<!-- Triangle -->` / `<!-- Quad -->` / `<!-- N-gon -->` blocks in #15) kept. Zero new em-dashes anywhere in any new content (figcaptions, alt text, desc text, title text, overlay badge text) across all 6 figures; commas, semicolons, periods, parentheses, and middle-dot (U+00B7) used throughout. Pre-existing em-dash in source HTML anchor regions preserved verbatim (the #16 anchor's Try It Now ordered list contains `topology—quads in the middle, triangles at poles` and was kept exactly when that figure was inlined). All 6 inline figures use plain `<figure>`/`<figcaption>` wrappers, no class attribute. #16 and #27 use `<img loading="lazy">` with descriptive alt text; #27 additionally wraps the img in the locked inline-stacked overlay pattern (`<div style="position: relative; display: inline-block; max-width: 100%;">` with overlay `<svg pointer-events: none>` matching PNG pixel dimensions, namespaced `c27-*` ids per the lesson's id-prefix registry). Browser QA pass deferred to a later cleanup chat (bundles with the deferred Phase 1, 2, and 3 QA).

- 2026-05-20 — Phase 4 PRODUCTION (PNGs only) chat. Captured 2 PNGs for the `#polygon-types` section per the locked Phase 4 PRODUCTION (PNGs) specs carried in `session.md`. PNG #16 `lesson_05_16_sphere_topology_analysis.png` (1,125,758 bytes, id prefix `c16`) produced via the locked 3-block BlenderMCP plan with a numpy fallback for the composite step since this Blender's Python has no PIL module. Block 1 (left panel: pole triangles): manual scene cleanup via `bpy.data.objects.remove(obj, do_unlink=True)` plus orphan-mesh cleanup, fresh `primitive_uv_sphere_add(segments=32, ring_count=16, radius=1.0)` named `TopologySphere` (482 verts, 512 faces; matches Blender's default UV sphere and what students see if they Shift+A > Mesh > UV Sphere themselves), sun light at (4, -4, 6), 1280x720 render config with `BLENDER_EEVEE_NEXT` try-set falling back to `BLENDER_EEVEE` on `TypeError` (fallback triggered as expected, engine settled on `BLENDER_EEVEE`), user-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=5.0` (matches Phase 3 sphere capture), solid viewport shading, floor and X/Y axes visible. Enter Edit Mode, face select mode, then bmesh selection of pole-cap triangles. The locked spec's selection filter `f.calc_center_median().z > 0.85` was found to select 96 faces (32 pole triangles plus 2 quad bands at z≈0.95 and z≈0.88) for a 32/16 sphere rather than the 32 faces the spec annotation expected, because the ring centers at cos(k·π/16) place the first quad band at z≈0.953 and the second at z≈0.878, both above the 0.85 threshold. Re-ran with the cleaner geometric filter `len(f.verts) == 3 and f.calc_center_median().z > 0` which selects only the 32 top-pole triangles (a UV sphere has triangles only at its two poles; the rest is quads), matching the spec's stated count and the panel's intent of pure-triangle contrast against the equator quads panel. OpenGL viewport render via `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)` saved the left panel to `images/_temp_lesson_05_16_left.png`. Block 2 (right panel: equator quads): same sphere, same scene, no rebuild; selection swapped to equator quads via `abs(f.calc_center_median().z) < 0.3` (selected 128 faces, slightly more than the spec annotation's ~96 because the threshold catches 4 quad bands with centers at z≈±0.098 and z≈±0.289; followed the spec literal since the wider band reads more clearly as an equator zone against the pole-tri left panel). OpenGL viewport render saved to `images/_temp_lesson_05_16_right.png`. Block 3 (composite): PIL not available in this Blender's Python (`No module named 'PIL'`), so the composite was done with numpy and Blender's image API instead. Both temp PNGs loaded via `bpy.data.images.load`, pixels pulled into `np.float32` arrays of shape (720, 1280, 4), pasted into a 2560x720 canvas via array slicing (`canvas[:, 0:1280, :] = left_pixels`, `canvas[:, 1280:2560, :] = right_pixels`), then written into a new Blender image via `bpy.data.images.new` and saved as PNG via `image.save()`. Final file `lesson_05_16_sphere_topology_analysis.png` at 1,125,758 bytes (1.07 MB), 2560x720, clean side-by-side with no baked captions per the locked Option 2 decision at chat start (captions decision was deferred from production design; chose no baked text for three reasons: less code in block 3, pattern consistency with other Phase 3 PNGs whose annotations are SVG overlays at integration time, and dark-mode safety since baked composite pixels do not respect page color whereas SVG overlay text inherits `currentColor`). Both temp PNGs and all three Blender image datablocks cleaned up after save. PNG #27 `lesson_05_27_select_by_trait_menu.png` (207,045 bytes, id prefix `c27`) captured manually via Win+Shift+S of the Select > Select All by Trait expanded submenu in the 3D viewport header, with both the parent Select menu and the expanded submenu in frame and a few pixels of header bar above and below for context. Save filename correct first try (no `.pn.png` typo this time, unlike Phase 3 #28). Both PNGs verified post-write via `Filesystem:get_file_info` (sizes confirmed). HTML not modified this chat. Phase 4 PRODUCTION fully complete; Phase 4 INTEGRATION can now run as a single pass with all 6 images (4 SVGs from the SVG sub-chat plus the 2 PNGs from this chat).

- 2026-05-20 — Phase 4 PRODUCTION (SVGs only) chat. Authored 4 SVGs for the `#polygon-types` section per the locked Phase 4 PRODUCTION (SVGs) specs carried in `session.md`. All four use `Filesystem:write_file` (new files), with `Filesystem:get_file_info` verification after each write. SVG #12 `lesson_05_12_triangle_diagram.svg` (4,461 bytes, id prefix `tri`) authored as an equilateral triangle apex-up with vertices (400, 195), (270, 415), (530, 415); property pills `3` / `Always planar` / `Subdivides cleanly`; takeaway "Three points always define a flat plane. Game engines tessellate everything to triangles before rendering."; tip about GPUs ultimately drawing triangles and quads being split at render time. SVG #13 `lesson_05_13_quad_diagram.svg` (4,657 bytes, id prefix `qd`) as a clean 280x280 square with vertices (260, 165), (540, 165), (540, 445), (260, 445); property pills `4` / `Deforms cleanly` / `Smooth Catmull-Clark`; takeaway about edge loops carrying cleanly through joints and bends; tip about reaching for quads first with the Subdivision Surface modifier. SVG #14 `lesson_05_14_ngon_diagram.svg` (5,443 bytes, id prefix `ng`) as a regular hexagon on a circle of radius 140 centered at (400, 305) with the six locked vertex coordinates (540, 305), (470, 426), (330, 426), (260, 305), (330, 184), (470, 184); pointy-left/right orientation with flat top and bottom edges; italic clarifying line at y=395 inside the lower interior of the hexagon reads "Hexagon shown here. Any face with 5 or more sides counts as an n-gon." (font-size 12, opacity 0.6, sits on top of the faint fill, by spec); property pills `6 typical` / `Avoid when deforming` / `Subdivision artifacts`; takeaway about converting to quads or triangles before rigging or subdivision; tip about Select > Select All by Trait > Faces by Sides. SVG #15 `lesson_05_15_polygon_types_comparison.svg` (9,944 bytes, id prefix `pc`) as the synthesizing comparison grid in 800x680 viewBox: three mini-polygon cells across the top (mini equilateral triangle at center (150, 305) radius 60 with vertices (150, 245), (98, 335), (202, 335); mini rectangular quad with vertices (320, 245), (480, 245), (480, 365), (320, 365); mini regular hexagon at center (650, 305) radius 70 with the six analogous angular positions), each cell carrying a small header at y=195 and a small footer label at y=395 in `#FF6B00` (`3 SIDES` / `4 SIDES` / `5+ SIDES`); 5-column properties table with thin horizontal rules at y=425, y=458, and y=595, column centers at (110, 240, 380, 540, 700), header at y=445 with `TYPE / SIDES / ANIMATION / SUBDIVISION / PRODUCTION USE` (font-size 12, font-weight 700, `#FF6B00`, letter-spacing 1), three data rows at y=480, 525, 570 with the locked per-type values; glyphs `✓` and `✓✓` in `#4ADE80` (positive), `⚠` in `#F5C242` (caution), `✗` in `#E63946` (negative) implemented as inline `<tspan>` color overrides inside each data-cell `<text>` element. Two minor placement nudges in #15 vs the locked spec: italic takeaway moved from y=640 to y=625 (-15 px) and footer tip card moved from y=655 to y=641 (-14 px) so the 34-pixel-tall card fits inside the 800x680 viewBox (the locked y values would have placed the card bottom at y=689, 9 pixels below the viewBox). All other locked spec values (cell positions, polygon coordinates, table column centers, header positions, all text content) preserved exactly. All four SVGs follow the locked house style: top 3px `#FF6B00` accent rail at (0,0), system-ui font stack `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, `color="#222"` retained on standalone files (will strip on inline), heading at y=56 font-size 24 font-weight 700, subtitle at y=84 font-size 14 opacity 0.65, divider line at y=108 (x=120 to x=680, opacity 0.25), orange subhead at y=138 font-size 15 font-weight 700 letter-spacing 2. Trio (#12, #13, #14) shares the 800x560 viewBox with hero polygons stroked at width 4 and three-circle vertex glyphs (outer halo r=10 opacity 0.20, middle solid r=6, inner highlight r=1.8 white); #15 uses 800x680 with mini-polygons stroked at width 3 and two-circle vertex glyphs (halo r=7 opacity 0.20, solid r=4) per the locked spec. Property pills in the trio sit at y=425-465, three pills horizontally arranged (centers x=160, 400, 640), pill rect width 220 height 40 rx=6, fill currentColor fill-opacity 0.04 stroke `#FF6B00` stroke-width 1 stroke-opacity 0.5; label font-size 11 font-weight 700 `#FF6B00` letter-spacing 1; value font-size 12 fill currentColor opacity 0.85. Footer tip cards across the trio at y=506-540 (height 34) with a 4px `#FF6B00` rail on the left edge and `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan>` prefix. Zero new em-dashes anywhere in any of the SVG copy (titles, descs, headings, subtitles, subheads, pill labels, pill values, clarifying lines, takeaways, tip text); middle-dot (`·`, U+00B7) used for dash-style separation in all four subheads (`TRIANGLE · 3 SIDES`, `QUAD · 4 SIDES`, `N-GON · 5 OR MORE SIDES`, `PICK QUADS FOR DEFORMATION · TRIANGLES FOR EXPORT`) per the locked precedent from #8 footer (`26 verts · 8 × 4`). `>` characters in tip text encoded as `&gt;` per XML rules ("Select &gt; Select All by Trait..." in #14, "Mesh &gt; Clean Up &gt; Tris to Quads..." in #15). All four new image files verified post-write via `Filesystem:get_file_info`. HTML not modified this chat. PNGs #16 (sphere topology PIL composite) and #27 (Select-By-Trait menu manual Win+Shift+S capture) deferred to a follow-on Phase 4 PRODUCTION (PNGs) chat per the locked context-budget split.

- 2026-05-20 — Phase 3 INTEGRATION chat. Inlined all 5 Phase 3 images into `lesson_05_understanding_meshes_and_geometry.html` via five sequential `Filesystem:edit_file` cycles (dryRun then commit then `Filesystem:get_file_info` verify each). Bottom-up integration order so earlier line numbers stay stable across edits: #9 (Smooth vs Flat Shading SVG), #11 (Flipped Normals PNG with c11 overlay), #28 (Normals Overlay Toggle PNG with c28 overlay), #10 (Face Normals Visualization PNG with c10 overlay), #8 (Density Comparison Sphere SVG); the first three were committed in an earlier session and #10 plus #8 in this chat. HTML size progression: 132,484 → 145,104 (+12,620 after #9) → 147,929 (+2,825 after #11) → 150,299 (+2,370 after #28) → 152,652 (+2,353 after #10) → 161,951 (+9,299 after #8); total Phase 3 INTEGRATION delta +29,467 bytes (28.8 KB). #28 overlay pivot: the manually captured Win+Shift+S snip frames the Geometry section of the Viewport Overlays dropdown but does not include the Edit-Mode-only Normals icon row, so the c28 overlay targets the visible Face Orientation toggle row instead (which is the UI control the Try It Now exercise actually directs users to enable); ellipse cx=175 cy=945 rx=170 with a green `Face Orientation` badge at the leader end. All three PNG overlays use the locked inline-stacked pattern (wrapper div `position: relative; display: inline-block; max-width: 100%`, overlay SVG `pointer-events: none` with viewBox matching PNG pixel dimensions: 1280x720 for #10 and #11, 702x1255 for #28), namespaced `c10-*`, `c11-*`, `c28-*` ids. c10 overlay structure mirrors the existing c28 block (system-ui font-family, font-size 22, font-weight 700, badge rect rx=6 with marker circle r=6 at badge-side end of leader); only coordinates, ids, badge text (`Face normal`), and viewBox were changed. SVGs #8 and #9 inlined per the locked rules: `color="#222"` stripped from inlined root `<svg>` (standalone files in `images/` retain it for `<img>` fallback), re-indented to figure col 16 / svg root col 20 / svg children col 24 / figcaption col 20; multi-line `<rect>` continuations not present in source so no collapsing needed; short structural comments (Panel 1, Panel 2, Octagon silhouette, Latitude ellipses, vs badge, Footer tip, etc.) kept. Zero new em-dashes anywhere in any new content (figcaptions, alt text, desc text, title text) across all 5 figures; commas, semicolons, and periods used throughout. Pre-existing em-dashes in source HTML anchor regions preserved verbatim (the #28 anchor region contains `faces—those are the normals` and was kept exactly when that figure was inlined). Browser QA pass deferred to a later cleanup chat (bundles with the deferred Phase 1 and Phase 2 QA).

- 2026-05-20 — Phase 3 PRODUCTION chat. Authored 2 SVGs and captured all 3 PNGs for the `#mesh-density` and `#normals` sections of `lesson_05_understanding_meshes_and_geometry.html`. SVG #8 `lesson_05_08_density_comparison_sphere.svg` (7,411 bytes, id prefix `ds`) authored with the trade-off framing decision: paired-panel low-poly vs high-poly with use-case footers (Games, VR, backgrounds, mobile vs Film, product viz, hero close-ups, sculpting) rather than duplicating Phase 1 SVG #2's segment-count progression. Placement locked: after line 872 (end of the "fewer polygons" list in `#mesh-density`), before the Density Decision mermaid block at line 874. SVG #9 `lesson_05_09_smooth_vs_flat_shading.svg` (9,991 bytes, id prefix `sf`) authored as paired-panel: left FLAT panel shows the same 12-gon silhouette with sharp facet edges and 12 green per-face normal arrows (`#4ADE80`, using a shared SVG marker definition for the arrowhead); right SMOOTH panel shows the same 12-gon with very faint edges, a smooth radial gradient fill, and 12 green per-vertex normal arrows radiating outward. Placement locked: after the Smooth Shading card (line 1033), before the "Try It Now: Smooth vs Flat" card (line 1035). Both SVGs follow the locked house style (800x560 viewBox, top 3px orange accent, system-ui font, retain `color="#222"` on standalone files, will strip on inline). Zero new em-dashes anywhere in the SVG copy (commas, semicolons, and periods used throughout). BlenderMCP capture session: block 1 manually cleaned up the Phase 2 leftover MeshCountCube via `bpy.data.objects.remove(obj, do_unlink=True)` plus orphan-mesh cleanup, added a fresh `primitive_uv_sphere_add(segments=16, ring_count=8, radius=1.0)` named `NormalSphere` (114 verts, 128 faces; mid-low-poly chosen so individual normal arrows are readable), set 1280x720 render config with `BLENDER_EEVEE_NEXT` try-set falling back to `BLENDER_EEVEE` on `TypeError` (same as Phase 2), set the user-perspective view rotation via `r3d.view_rotation = Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=5.0`, entered Edit Mode, configured overlays (`show_face_normals=True`, `normals_length=0.3`, vertex_normals and split_normals off, face_orientation off), and OpenGL viewport rendered #10 `lesson_05_10_face_normals_visualization.png` (711,611 bytes) via `bpy.context.temp_override(window, screen, area, region)` + `bpy.ops.render.opengl(write_still=True, view_context=True)`. Block 2 stayed in Edit Mode on the same sphere, switched overlays (face_normals off, face_orientation on), used bmesh to find faces with `f.calc_center_median().z > 0.4` (48 of 128 faces, 37.5%, which approximates the top 1/3 cluster per the locked decision) and flipped them via `bmesh.ops.reverse_faces(bm, faces=faces_to_flip)` + `bmesh.update_edit_mesh(obj.data)`, then OpenGL viewport rendered #11 `lesson_05_11_flipped_normals_problem.png` (693,316 bytes). Single mixed-orientation capture per the locked decision (red flipped cap on top, blue correctly-oriented faces below). All four new image files verified post-write/post-render via `Filesystem:get_file_info`. #28 `lesson_05_28_normals_overlay_toggle.png` (149,601 bytes) captured manually via Win+Shift+S of the Overlays dropdown showing the Normals section with one section above and one below for context; initial save had a filename typo (`.pn.png`) which was renamed to `.png` via `Filesystem:move_file`. HTML not modified this chat.

- 2026-05-20 — Phase 2 INTEGRATION chat. Inlined all four `#mesh-components` PNGs (#5, #6, #7, #26) into `lesson_05_understanding_meshes_and_geometry.html` via four sequential `Filesystem:edit_file` cycles (dryRun then commit then `Filesystem:get_file_info` verify each). Grouping decision: distributed the selection-mode trio across the three subsections rather than grouping them at "How They Work Together"; each PNG sits after its matching Analogy info card (#5 after Vertex Analogy, #6 after Edge Analogy, #7 after Face Analogy), creating a "concept, then analogy, then real Blender screenshot" rhythm three times in a row. Considered grouping all three at the synthesis section; rejected because the mermaid hierarchy already carries that role and SVG #1's labeled cube already does the unified view. #26 placed after the "Try It Now: Examine a Cube's Components" card (before the "Component Count and Complexity" h3 and its 4/8/482/507-vert table) so the 506-verts / 1010-edges / 506-faces stats overlay prefigures the Suzanne row that follows. Considered placing #26 inside the Try It Now card and as the table figure; both rejected (mid-list figure breaks the 7-step workflow rhythm; mid-table figure looks ugly). All four figures use plain `<figure>`/`<figcaption>` (no class), `<img loading="lazy">`, descriptive alt text. Figure at col 16; img and figcaption at col 20 (Phase 1 indent pattern). No new em-dashes anywhere in figcaptions or alt text (commas and parentheses instead); pre-existing em-dashes in source content preserved verbatim through every anchor (Vertex Analogy `vertices—specific points` and `substance—they're just`, Edge Analogy `themselves—they connect`, Face Analogy `surface—it's what keeps`). HTML size progression: 130,291 → 130,813 (+522 after #5) → 131,334 (+521 after #6) → 131,822 (+488 after #7) → 132,484 (+662 after #26); total Phase 2 INTEGRATION delta +2,193 bytes (2.1 KB; under the projected 4 KB because PNG figures are simpler and shorter than the Phase 1 inlined-SVG figures). Browser QA pass deferred to a later cleanup chat (bundles with the Phase 1 QA that was also deferred).

- 2026-05-20 — Phase 2 PRODUCTION chat. Captured the four `#mesh-components` PNGs in a single BlenderMCP session per the locked rules. Block 1 set up the shared scene (manual cleanup via `bpy.data.objects.remove(obj, do_unlink=True)`, fresh default cube at origin, sun light at (4,-4,6), 1280x720 render config, `BLENDER_EEVEE_NEXT` try-set with `BLENDER_EEVEE` fallback on enum error; fallback triggered as expected, engine settled on `BLENDER_EEVEE`), set the user-perspective view rotation via `r3d.view_rotation = Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with view_distance=7.0, entered Edit Mode, set vertex select mode, selected the 4 top-face vertices (z > 0) via bmesh, OpenGL viewport rendered #5 (`lesson_05_05_vertex_selection_mode.png`, 519,404 bytes). Block 2 switched to edge select mode and selected the 3 edges meeting at the top-front-right corner (via `corner_vert.link_edges`), rendered #6 (`lesson_05_06_edge_selection_mode.png`, 521,784 bytes). Block 3 switched to face select mode and selected the front face (normal.y < -0.5) plus top face (normal.z > 0.5), rendered #7 (`lesson_05_07_face_selection_mode.png`, 520,322 bytes). Block 4 removed the original cube, added a fresh cube, subdivided with `number_cuts=8`, picked 5 spread-out top faces (sorted by center x,y) and extruded them upward by 0.3 along Z, partial-selected 12 faces for a non-trivial stats readout (48 verts / 48 edges / 12 faces selected against 506 verts / 1010 edges / 506 faces total, coincidentally 1 vert under Suzanne's 507 in the lesson's reference table), enabled `space.overlay.show_stats = True`, rendered #26 (`lesson_05_26_component_count_ui.png`, 572,177 bytes). All four PNGs verified post-render via `Filesystem:get_file_info`. OpenGL render path used `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` against the first VIEW_3D area. Solid viewport shading; floor grid plus X/Y axes visible, Z axis line hidden so it doesn't dominate the frame. UNC path `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\...` worked cleanly from Blender Python on Windows; no fallback to Unix path needed. HTML not modified this chat.

- 2026-05-20 — Phase 1 INTEGRATION chat. Inlined all four Phase 1 SVGs into the `#what-are-meshes` section of `lesson_05_understanding_meshes_and_geometry.html`. Each insert used `Filesystem:edit_file` with `dryRun=true` first then commit with `dryRun=false`, followed by `Filesystem:get_file_info` verification. All four SVGs wrapped in plain `<figure>`/`<figcaption>` (no class), `color="#222"` stripped from the inlined root `<svg>` for dark-mode safety, content re-indented to figure-col-16 / svg-root-col-20 / svg-children-col-24 / deeper-nesting-col-28-and-32 / figcaption-col-20. Multi-line `<rect>` attribute continuations collapsed onto single lines on inline. Decorative ASCII-divider author comments pruned from #1 (the `=========== Composition area ===========` and `=========== THREE ANNOTATION CARDS ===========` blocks); short structural comments like `<!-- Panel 1: 8 segments -->` and `<!-- Cell: Plane -->` kept. Standalone files in `images/` left untouched (preserved verbatim as fallback). No new em-dashes; pre-existing em-dashes in source content preserved verbatim (`image\u2014up close` in The Mesh Concept paragraph, `work\u2014more pieces` in Real-World Analogy card, `topology\u2014different arrangements` in primitive types wrap-up paragraph). HTML size progression: 84,327 → 92,405 (+8,078 after #1) → 104,823 (+12,418 after #2) → 115,159 (+10,336 after #3) → 130,291 (+15,132 after #4); total Phase 1 delta +45,964 bytes (44.9 KB; higher than the projected ~30 KB because the 2→4 space per level indent expansion adds bytes on top of the raw SVG file sizes). Figcaptions: #1 cube showing the three building blocks of every mesh with a highlighted vertex, edge, and face plus a 1/2/3 keypress prompt; #2 four spheres at 8, 16, 32, 64 segments noting that doubling segments roughly quadruples the face count; #3 the two layers (container with Location/Rotation/Scale/Name on the left vs mesh data with Vertices/Edges/Faces on the right) and the Object Mode vs Edit Mode distinction; #4 the eight Shift+A primitives each labeled with its default vertex count. Browser QA pass deferred to a later cleanup chat.

- 2026-05-19 — Planning chat. Read `lesson_05_image_requirements.md` (42.6 KB, 30 images specified with AI prompts and placement suggestions). Read head of `lesson_05_understanding_meshes_and_geometry.html` to confirm section IDs match (`#what-are-meshes`, `#mesh-components`, `#mesh-density`, `#normals`, `#polygon-types`, `#topology`, `#manifold-geometry`, `#mesh-project`, `#summary` — all match). Locked phase plan: 6 phases across 30 images, distributed `4 / 4 / 5 / 6 / 5 / 6` by HTML section. Locked SVG-vs-PNG split: 15 SVGs (concept diagrams, comparisons, flowcharts, polygon primers — extending the requirements doc's 9 explicit SVG candidates to follow the locked house-style precedent from Lessons 03 and 04) plus 15 PNGs (Edit Mode screenshots, UI captures, and one stylized topology render the SVG style cannot serve well). Wrote this `lesson_05_integration_progress.md`. Image production has not yet started.

- 2026-05-20 — Phase 1 production chat (resumed after a mid-session interruption; first SVG had already been written before the break, three to go on resume). Authored all four `#what-are-meshes` SVGs and wrote them to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`. All four follow the locked house style: 800x560 viewBox (800x680 for #4 only, to fit the 2x4 grid), `color="#222"` retained on standalone files (will be stripped on inline), system-ui font stack, top 3px orange accent rect, heading at y=56 with 14pt subtitle at y=84, divider line at y=108, orange subhead at y=138 with 2-letter spacing, footer tip card with 4px orange accent rail. Carried forward the `#E63946` X-axis red and `#4A9EFF` Z-axis blue from Lesson 04 as canonical palette. No em-dashes used in any of the new SVG copy. Files written: #1 `lesson_05_01_mesh_components_labeled.svg` (6,853 bytes, id prefix `mc`), #2 `lesson_05_02_lowpoly_highpoly_progression.svg` (10,472 bytes, id prefix `lp`), #3 `lesson_05_03_mesh_vs_object_properties.svg` (8,414 bytes, id prefix `mo`), #4 `lesson_05_04_primitive_types_grid.svg` (12,957 bytes, id prefix `pt`). Each verified post-write via `Filesystem:get_file_info`. Sphere segment counts in #2 locked to Blender defaults: 8 segments = 32 faces / 26 verts, 16 = 128/114, 32 = 512/482 (matches Blender default UV sphere), 64 = 2048/1986. Primitive vertex counts in #4 locked to Blender defaults: Plane 4, Cube 8, UV Sphere 482, Ico Sphere 42, Cylinder 64, Cone 33, Torus 576, Suzanne 507. Suzanne rendered as stylized silhouette (main ellipse plus two ear ellipses plus eye and mouth marks) rather than realistic mesh wireframe. IMAGE_STYLE_GUIDE.md revision deferred (skipped to keep this chat focused on SVG production; can be picked up in the integration chat or in a dedicated pass). HTML not yet modified.

---

## Phase 4 INTEGRATION plan (locked 2026-05-20)

Locked plan for the Phase 4 INTEGRATION chat. All 6 anchors, oldText snippets, figcaptions, and overlay decisions resolved in advance against the pre-integration HTML at 161,951 bytes. The next chat runs as pure execution: read this section, confirm the plan, and edit. No further planning required.

**Reference HTML state at plan lock:** `lesson_05_understanding_meshes_and_geometry.html` 161,951 bytes (158.2 KB), 2,116 lines. `#polygon-types` section spans lines 1318 to 1438 (section close at 1438; PART 3 END comment at line ~1439). Line numbers below are reference-only; the textual `oldText` anchors are what the actual `Filesystem:edit_file` calls match against, and those remain stable regardless of intervening edits as long as edits proceed bottom-up.

**Integration order (bottom-up by line number for stability):** #16 → #27 → #15 → #14 → #13 → #12. Each insertion happens above the next unedited anchor, so earlier line numbers stay valid throughout the chat.

**Figure wrapper structure (uniform across all 6 figures, per locked rules):**
- Plain `<figure>` opens at column 16 (no class attribute)
- For SVGs: `<svg>` root at column 20 with `color="#222"` STRIPPED; svg children at column 24, deeper nesting at 28/32; `<figcaption>` at column 20; root SVG attributes (xmlns, viewBox, role, aria-labelledby) preserved
- For PNGs without overlay: `<img loading="lazy" src="images/..." alt="...">` at column 20; `<figcaption>` at column 20
- For PNGs with overlay: wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at column 20, then `<img>` at column 24, then overlay `<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;" viewBox="0 0 W H">` at column 24 (where W and H are the PNG pixel dimensions); overlay children at column 28; close div at column 20; `<figcaption>` at column 20
- `<figure>` closes at column 16

### Locked anchor and figcaption table

| # | File | Insertion site (text-relative) | Line ref | oldText snippet (3 lines) | Figcaption | Overlay |
|---|---|---|---|---|---|---|
| 16 | `lesson_05_16_sphere_topology_analysis.png` | Inside Try It Now card, after the ordered list close, before the card close | 1421–1422 | `                        <li>This is typical sphere topology—quads in the middle, triangles at poles</li>` then `                    </ol>` then `                </div>` | A default UV sphere with the 32 pole triangles selected on the left and the 128 equator quads selected on the right. The same scene rendered twice with different selections; the contrast between the triangular pole cap and the quad band is what step 9 describes. | **No overlay** (locked). The selection contrast carries the visual story; baked or overlay labels would clutter what is already a clean composite. If later authorship decides labels help, add a `c16-*` overlay SVG with `viewBox="0 0 2560 720"` and two green badges ("POLES: TRIANGLES" centered on x=640, "EQUATOR: QUADS" centered on x=1920); not done at integration time per this lock. |
| 27 | `lesson_05_27_select_by_trait_menu.png` | Between Acceptable N-gon Use card close and Try It Now card open | 1407–1409 | `                        <li>Areas that will be deleted or boolean-ed later</li>` then `                    </ul>` then `                </div>` | The Select > Select All by Trait submenu in the 3D viewport header. The exercise below uses Triangles and Quads from this submenu to highlight pole faces and equator faces respectively; Faces by Sides offers numeric-side filtering for the n-gon detection workflow. | **Yes**, `c27-*` overlay locked. Measure PNG pixel dimensions at integration time (likely around 600x500 from default Snipping Tool capture; confirm via Pillow `Image.open(path).size` or eye-measurement from the saved file). Place a green ellipse highlight `stroke="#4ADE80" fill="none" stroke-width="4"` around the "Faces by Sides" submenu row, leader line `stroke="#4ADE80" stroke-width="3" stroke-linecap="round"` from the ellipse to a badge near the snip edge, badge `<rect rx="6" fill="#4ADE80">` with `<text font-size="22" font-weight="700" fill="#0f1a14" text-anchor="middle">Faces by Sides</text>`. Coordinates and badge placement TBD at integration time after measuring snip. |
| 15 | `lesson_05_15_polygon_types_comparison.svg` | Between mermaid block close and "The Quad Rule" card open | 1379–1381 | `                    style D fill:#f44336,stroke:#333,stroke-width:2px,color:#fff` then `                </div>` then `` (blank) then `                <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">` (use 4 lines here because the empty line between mermaid and next card is ambiguous; concatenate the style line, the mermaid close, blank, and the Quad Rule card open for uniqueness) | The three polygon types side by side with their behavior across animation, subdivision, and production use. Quads first, triangles where they help, n-gons only on flat non-deforming surfaces. | n/a (SVG) |
| 14 | `lesson_05_14_ngon_diagram.svg` | Between N-gon Characteristics card close and mermaid block open | 1366–1368 | `                        <li><strong>Sometimes acceptable:</strong> On flat surfaces that won't subdivide or deform</li>` then `                    </ul>` then `                </div>` then `` then `                <div class="mermaid">` (4 lines for uniqueness since `</div>` followed by mermaid happens once but the `</ul>` plus closing card pattern repeats; the "Sometimes acceptable" li is unique to the N-gon card) | An n-gon has five or more sides. Convert to quads or triangles before rigging or subdivision; Select > Select All by Trait > Faces by Sides finds them in any mesh. | n/a (SVG) |
| 13 | `lesson_05_13_quad_diagram.svg` | Between Quad Characteristics card close and N-gons h3 | 1351–1353 | `                        <li><strong>Professional standard:</strong> Expected in production environments</li>` then `                    </ul>` then `                </div>` then `` then `                <h3>N-gons: Five or More Sides</h3>` (4 lines; "Professional standard:" is unique to the Quad Characteristics card) | A quad has four vertices and four edges. Quads are the gold standard because they deform cleanly under rigging and subdivide predictably under Catmull-Clark. | n/a (SVG) |
| 12 | `lesson_05_12_triangle_diagram.svg` | Between Triangle Characteristics card close and Quads h3 | 1336–1338 | `                        <li><strong>Deformation:</strong> Can cause pinching when object bends</li>` then `                    </ul>` then `                </div>` then `` then `                <h3>Quads (Quadrilaterals): Four-Sided Faces</h3>` (4 lines; "Deformation: Can cause pinching" is unique to the Triangle Characteristics card) | A triangle is the simplest polygon. Three vertices, three edges, always planar; game engines tessellate everything to triangles before rendering. | n/a (SVG) |

**oldText snippet uniqueness notes:** all six anchors use the last `<li>` of the preceding card (which contains card-specific content) plus the `</ul>`, `</div>`, blank, and the next structural element. This guarantees uniqueness without needing more than 4 to 5 lines. The Try It Now card's last `<li>` ("This is typical sphere topology...") contains a pre-existing em-dash (`topology—quads`) which must be preserved verbatim in the oldText match; do not normalize.

### Pre-existing em-dashes to preserve verbatim through integration

The `#polygon-types` section contains several pre-existing em-dashes in source content that the locked rules preserve verbatim through any anchor match:

- Line 1330: `<li><strong>Always planar:</strong> Three points always define a flat plane—never twisted or warped</li>` (inside Triangle Characteristics card; not in any oldText anchor for Phase 4 INTEGRATION but worth noting)
- Line 1361: `<li><strong>Non-planar risk:</strong> More vertices = higher chance of being twisted/warped</li>` (no em-dash actually; `/` between twisted and warped here, ignore)
- Line 1416: `<li>All triangular faces highlight—notice the top and bottom?</li>` (inside Try It Now card; not in any oldText anchor but inside the broader card that #16's anchor is inside)
- Line 1420: `<li>This is typical sphere topology—quads in the middle, triangles at poles</li>` (**in #16's oldText anchor**; preserve `topology—quads` em-dash exactly)
- The blockquote at line 1437 contains `headaches later!` no em-dash; OK

All new content (figcaptions, alt attributes, overlay badge text) uses commas, semicolons, or parentheses for separation, not em-dashes, per locked rules.

### Inline SVG handling per file

All 4 SVGs in `images/` retain `color="#222"` on the root tag for standalone `<img>` fallback rendering. On inline:
1. Open the standalone `.svg` file via `Filesystem:read_file` to get the full content
2. Strip `color="#222"` from the root `<svg>` tag (the only attribute change)
3. Re-indent every line: original col 0 root → col 20; original col 2 children → col 24; original col 4 nested → col 28; original col 6 deep nested → col 32
4. Multi-line `<rect>` attribute continuations (if any; the Phase 4 SVGs use single-line `<rect>` per author convention so likely none) collapsed onto single lines
5. Decorative ASCII-divider comments (likely none in Phase 4 SVGs) pruned
6. Short structural comments (`<!-- Cell: ... -->`, `<!-- Hero polygon: ... -->`, `<!-- Property pills -->`, etc.) kept
7. Build the `newText` as: opening `<figure>` at col 16, then the re-indented SVG content, then `<figcaption>` at col 20 with the locked figcaption text, then closing `</figure>` at col 16, then a blank line, then the next-anchor content (which is the original oldText's lower half)

### Inline PNG handling per file

**#16 `lesson_05_16_sphere_topology_analysis.png` (no overlay):**
- `<figure>` at col 16
- `<img loading="lazy" src="images/lesson_05_16_sphere_topology_analysis.png" alt="Side-by-side composite of a UV sphere with 32 pole triangles selected on the left panel and 128 equator quads selected on the right panel.">` at col 20
- `<figcaption>` at col 20 with the locked figcaption text
- `</figure>` at col 16

**#27 `lesson_05_27_select_by_trait_menu.png` (with c27 overlay):**
- `<figure>` at col 16
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 20
- `<img loading="lazy" src="images/lesson_05_27_select_by_trait_menu.png" alt="The Select menu in Blender's 3D viewport header showing the Select All by Trait submenu expanded.">` at col 24
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 W H" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">` at col 24 (W and H from `Image.open(path).size` at integration time now that Pillow is installed in Blender, or read directly via `Filesystem:get_file_info` and a quick PIL block)
- `c27-highlight` ellipse, `c27-leader` line, `c27-marker` circle, `c27-badge` rect, `c27-badge-text` text inside the overlay svg at col 28
- Close `</svg>` at col 24, close `</div>` at col 20
- `<figcaption>` at col 20
- `</figure>` at col 16

### HTML size projection per figure

- #12: roughly +8 KB (800x560 viewBox SVG, hero triangle with 3 vertex glyphs, 3 property pills, footer tip card, re-indent overhead)
- #13: roughly +8 KB (similar to #12, square hero with 4 vertex glyphs)
- #14: roughly +9 KB (hexagon hero with 6 vertex glyphs and the italic clarifying line)
- #15: roughly +12 to 14 KB (800x680 viewBox, three mini-polygons with combined 13 vertex glyphs, 5-column properties table with 18 data cells)
- #16: roughly +0.5 KB without overlay (just the img reference and figcaption)
- #27: roughly +3 to 5 KB with overlay (img reference plus the overlay SVG with ellipse, leader, marker, badge rect, badge text)

**Projected total Phase 4 INTEGRATION delta: 41 to 49 KB.** HTML at end of Phase 4 INTEGRATION: 203 to 211 KB (161,951 B → 202,951 to 210,951 B).

### Post-integration cleanup task

After all 6 integrations commit and verify, update `lesson_05_integration_progress.md`:
- Header `Current state` line → `Phase 4 INTEGRATION COMPLETE 2026-MM-DD`, final HTML size, total Phase 4 INTEGRATION delta in KB
- New dated status bullet at top of Status section describing the integration cycle in the verbose precedent style (per-figure HTML size progression, overlay decisions confirmed, em-dash discipline compliance, browser QA deferral)
- 6 placement-table rows (#12, #13, #14, #15, #16, #27) flipped from `produced; not integrated` / `captured; not integrated` to `integrated`
- Phase plan row 4 status update appending **INTEGRATION COMPLETE 2026-MM-DD** to the existing PRODUCTION COMPLETE marker
- Available section drops from 6 to 0 (or whatever is appropriate)
- Missing section stays at 11 (integration does not change which images exist on disk)
- Optional: prune this "Phase 4 INTEGRATION plan (locked 2026-05-20)" section after integration completes, since its purpose was forward-planning that is now history; or keep as reference for the Phase 5 INTEGRATION plan template

Then overwrite `session.md` to point at **Phase 5 PRODUCTION** as the natural next chat.

---

## Phase 5 PRODUCTION specs (locked 2026-05-20) — **PRODUCTION COMPLETE 2026-05-21**

Locked plan for the Phase 5 PRODUCTION chat. All 5 images' specs resolved in advance against the locked house style and the Lessons 03, 04, and Phase 4 precedents. **Status: production complete 2026-05-21; all 5 images on disk and verified. Kept as reference for the Phase 5 INTEGRATION plan template and for any future production re-runs (note the operator-name deviation documented in the 2026-05-21 Status bullet: Blender 5.1.1 uses `bpy.ops.mesh.inset` not `inset_faces`).** See the 2026-05-21 Status bullet above for production outcomes and three documented deviations (#24 panel label nudge, #19 head dimension nudge, #29 operator name).

**Image set (5 total; all currently missing on disk):**

| Order | # | File | Type | ID prefix | Section | Tool path |
|---|---|---|---|---|---|---|
| 1 | 24 | `lesson_05_24_topology_pole_types.svg` | SVG | `tl` | `#topology` | `Filesystem:write_file` |
| 2 | 18 | `lesson_05_18_good_bad_topology.svg` | SVG | `gb` | `#topology` | `Filesystem:write_file` |
| 3 | 19 | `lesson_05_19_character_edge_flow.svg` | SVG | `cf` | `#topology` | `Filesystem:write_file` |
| 4 | 17 | `lesson_05_17_edge_loop_selection.png` | PNG | `c17` | `#topology` | `blender:execute_blender_code` |
| 5 | 29 | `lesson_05_29_inset_ngon_creation.png` | PNG | `c29` | `#topology` | `blender:execute_blender_code` (3 captures plus Pillow composite) |

### Decisions locked at plan time

**1. #19 character edge flow: DOWNGRADE from PNG to SVG.** Building a clean-topology character head in BlenderMCP is character-modeling territory (proper edge loops around eye, mouth, and cheek zones); takes hours of skilled manual work; does not fit the cadence. Polyhaven has no character assets. Sketchfab license complexity is a no-go. A stylized SVG illustration showing edge flow around facial feature zones conveys the pedagogical point (loops follow muscle and expression) more clearly at lesson display width than a real wireframe screenshot would. New id prefix `cf` (character flow); old `c19` PNG-overlay prefix dropped. Phase plan row 5 SVG and PNG counts shift from 2 SVG and 3 PNG to 3 SVG and 2 PNG; placement table row 19 type column flips PNG to SVG, filename `.png` to `.svg`, prefix `c19` to `cf`, status `not captured; not integrated` to `not produced; not integrated`; SVG totals line goes 15 to 16, PNG totals line goes 15 to 14. These table and totals flips happen as part of the post-production cleanup at the end of the production chat, NOT at plan-lock time.

**2. #29 inset n-gon creation: Pillow composite of 3 BlenderMCP captures.** Pillow 12.2.0 is now installed at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL` per recent session memory, so the Phase 4 numpy fallback is no longer required. Composite as 3 horizontal panels (1280x720 each, 3840x720 final canvas). 3-state scenario uses a default Blender cylinder (32 sides) whose top cap is a 32-gon: (1) cylinder with top cap selected, (2) after `bpy.ops.mesh.inset_faces(thickness=0.3)` of the cap, (3) after extruding the inner inset face upward by 0.3 along Z via `bpy.ops.mesh.extrude_region_move`. Narrative: cap is an n-gon, inset preserves it, extrude turns it into a stepped feature you would triangulate before export. Optional 2px `#FF6B00` vertical dividers between panels at x=1280 and x=2560 (decide during composite; can also be added at integration time as overlay). **NOTE (added 2026-05-21):** the spec's `bpy.ops.mesh.inset_faces(thickness=0.3)` call does not work in Blender 5.1.1; the correct op name is `bpy.ops.mesh.inset(thickness=0.3)`. The extrude op name in step 3 is correct as written.

**3. #18 good vs bad topology: Paired-panel comparison.** Pattern locked from #8 density, #9 shading, and the Lesson 04 #5 plus #10 precedents. Visual consistency with Lesson 05's other comparison SVGs. Left panel "GOOD TOPOLOGY": uniform quad grid (6x6) on a flat patch with clean horizontal and vertical edge loops, all vertices 4-valence except one optional 5-pole in an acceptable transition zone. Right panel "BAD TOPOLOGY": same surface outline but with 2 triangles, 1 hexagonal n-gon, irregular edge spacing, broken loops, and one prominent 6-pole vertex highlighted in red `#E63946`.

**4. #24 topology pole types: 4-panel grid, color-coded per acceptability.** Already in scope per the SVG design notes section below. Concretely: 4 panels horizontally, central vertex dot in each, N edges radiating, panel header bars colored: 3-pole green `#4ADE80`, 4-pole green `#4ADE80`, 5-pole yellow `#F5C242`, 6-pole red `#E63946`. Property pill row across the bottom summarizes: BEST 4-pole, OK 3-pole and 5-pole, AVOID 6 or more.

**5. Production order: SVGs first, then PNGs.** Rationale: SVG authoring is stateless and fast-iteration via `Filesystem:write_file`, no BlenderMCP overhead. PNGs require Blender state setup, addon-safe scene cleanup, and (for #29) 3 captures plus a Pillow composite; best done after SVG work is verified. Within SVGs: #24 first (clearest spec, smallest variant of the 4-panel grid pattern), then #18 (paired-panel using locked house pattern), then #19 (stylized illustration; most novel content of the three). Within PNGs: #17 first (single capture, cylinder plus one edge loop, simplest BlenderMCP block), then #29 (3-capture plus composite).

### SVG specs

**#24 `lesson_05_24_topology_pole_types.svg`** (id prefix `tl`, 800x560 viewBox, target 8 to 10 KB):

- Standard house style header: 3px `#FF6B00` accent rail at (0,0), heading at y=56 size 24 weight 700 ("Topology Poles"), subtitle at y=84 size 14 opacity 0.65 ("Vertices where N edges meet, with N other than 4"), divider at y=108 x=120 to x=680 opacity 0.25, orange subhead at y=138 size 15 weight 700 letter-spacing 2 ("POLE COUNT · ACCEPTABILITY").
- Four panels arranged horizontally, each 170 wide by 230 tall. Panel centers at x=120, 305, 490, 675. Panel y from 170 to 400. Panel rect stroke `currentColor` opacity 0.25, fill `currentColor` opacity 0.03. Panel header bar at top (y=170 to y=196 within each panel) fill colored per acceptability, header text inside bar at panel-y=190 size 14 weight 700 with white-ish fill (`#0f1a14` for green and yellow panels, white for red panel).
- Inside each panel: central vertex glyph at panel center (panel-local 85, 280 in absolute y terms), 3-layer construction (halo r=8 opacity 0.20 `#FF6B00`, solid r=5 `#FF6B00`, inner highlight r=1.5 white). N edges radiate from center to N peripheral dots at standard angular positions (every 360/N degrees, radius 55). Peripheral dots are 2-layer (halo r=6 opacity 0.20 currentColor, solid r=3.5 currentColor).
- Panel labels at y=310 size 13 weight 700 centered per panel: "3-POLE" / "4-POLE" / "5-POLE" / "6-POLE". One-line acceptability notes at y=330 size 11 opacity 0.75 italic: "Common in transitions" / "Regular: the ideal" / "E-pole: manageable" / "Causes artifacts". **NUDGED at production: y=310/330 to y=365/383 to clear the edge spread reaching y=335.**
- Property pill row at y=425 to y=465, 3 pills, centers at x=160, 400, 640, pill rect width 220 height 40 rx=6, fill currentColor fill-opacity 0.04 stroke `#FF6B00` stroke-width 1 stroke-opacity 0.5. Pill 1 label "BEST" value "4-pole vertex". Pill 2 label "OK" value "3-pole, 5-pole". Pill 3 label "AVOID" value "6 or more pole".
- Italic takeaway at y=490 size 13 opacity 0.75: "Most production meshes have a few poles; the goal is to minimize them, especially 6-plus pole vertices."
- Footer tip card at y=506 to y=540 height 34 with 4px `#FF6B00` left rail, body fill currentColor opacity 0.04 stroke `#FF6B00` opacity 0.4. Text: `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan> Use Select &gt; All by Trait &gt; Faces by Sides to find pole-related polygons in any mesh.`
- Accessibility: `role="img"`, `aria-labelledby="tl-title tl-desc"`, `<title id="tl-title">Topology Poles</title>`, `<desc id="tl-desc">Four-panel grid showing 3-pole, 4-pole, 5-pole, and 6-pole vertices with color-coded acceptability. 4-pole is the ideal regular vertex; 3-pole and 5-pole are acceptable in transitions; 6-pole and higher should be avoided.</desc>`.
- `color="#222"` retained on root for `<img>` fallback (stripped on inline at Phase 5 INTEGRATION).
- Zero new em-dashes; middle-dot (U+00B7) for separation in subhead.

**#18 `lesson_05_18_good_bad_topology.svg`** (id prefix `gb`, 800x560 viewBox, target 10 to 12 KB):

- Standard house style header (accent rail at (0,0), heading, subtitle, divider, orange subhead). Heading: "Good vs Bad Topology". Subtitle: "Same surface, different quality of geometry". Subhead: "QUAD GRIDS · IRREGULAR MIX".
- Two panels horizontally at y=160 to y=400, each 340 wide by 240 tall, left panel x=40, right panel x=420.
- Panel header bars at panel-y=160 to y=186 height 26. Left bar fill `#4ADE80` (green), text "GOOD: ALL QUADS" inside, size 14 weight 700, fill `#0f1a14`. Right bar fill `#E63946` (red), text "BAD: TRIS, N-GONS, POLES" inside, size 14 weight 700, fill white.
- Left panel content: 6x6 grid of clean square quad cells filling the panel interior (cell width and height around 56 px each), all edges stroked in `currentColor` at 0.85 opacity stroke-width 1.2, 36 cells visible. One small `#F5C242` (yellow) 5-pole marker dot at an off-center grid intersection to demonstrate that good topology can include acceptable transition poles.
- Right panel content: same overall panel outline, but interior shows a chaotic mix: roughly 2 visible triangles in the lower-left, 1 hexagonal n-gon in the lower-right, irregular quad cells of varying sizes through the middle, and one prominent 6-pole vertex centered roughly at panel-local (170, 100) with a red `#E63946` 3-layer halo glyph (halo r=12 opacity 0.20 `#E63946`, solid r=6 `#E63946`, inner highlight r=2 white) and 6 edges radiating outward. The problem edges (the 6 around the 6-pole and the boundaries of the triangle and n-gon) stroked in `#E63946` at 0.85 opacity stroke-width 1.4; other edges in `currentColor` at 0.85 stroke-width 1.2.
- Italic takeaway at y=425 size 13 opacity 0.75 centered: "The same physical area can be tessellated cleanly with quads (left) or chaotically with mixed polygons (right). Clean topology subdivides smoothly, deforms predictably, and stays readable in Edit Mode."
- Property pill row at y=455 to y=495, 3 pills, centers at x=160, 400, 640, same dimensions as #24 pills. Pill 1: "ANIMATION" / "Quads deform clean". Pill 2: "SUBDIVISION" / "Quads predictable". Pill 3: "READABILITY" / "Edit Mode clarity".
- Footer tip card at y=506 to y=540, same style as #24. Text: `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan> Mesh &gt; Clean Up &gt; Tris to Quads converts triangle pairs back to quads where possible.`
- Accessibility: `role="img"`, `aria-labelledby="gb-title gb-desc"`. Title: "Good vs Bad Topology". Desc: "Paired comparison panels. Left panel shows uniform quad grid topology with all 4-valence vertices and one acceptable 5-pole transition. Right panel shows the same surface area filled with a chaotic mix of triangles, n-gons, and a problematic 6-pole vertex highlighted in red."
- `color="#222"` retained on root.
- Zero new em-dashes; middle-dot for separation in subhead.

**#19 `lesson_05_19_character_edge_flow.svg`** (id prefix `cf`, 800x560 viewBox, target 9 to 12 KB):

- Standard house style header. Heading: "Character Edge Flow". Subtitle: "Loops follow facial muscle and expression zones". Subhead: "EYES · MOUTH · CHEEKS".
- Single hero composition (Lesson 04 #11 origin_point precedent: one central object with 3 annotation cards around it).
- Head outline centered at canvas (400, 290), stylized oval: cx=400 cy=290 rx=140 ry=170, stroke `currentColor` stroke-width 1.5 opacity 0.85, fill `currentColor` opacity 0.04. **NUDGED at production: cx=400 cy=300 rx=125 ry=140 to clear the subhead at y=138 and the BOTTOM annotation card at y=460.**
- Inside the head outline, draw conceptual edge loops as orange `#FF6B00` curved paths (stroke-width 2 stroke-opacity 0.75, fill none):
  - Right eye loop region: horizontal ellipse cx=440 cy=245 rx=22 ry=12, plus 2 concentric inner loops at rx=16 ry=8 and rx=10 ry=5 (showing the loop concentration around the eye). **Production cy=255 to track head shift.**
  - Left eye loop region (mirror): cx=360 cy=245 with same concentric ellipses. **Production cy=255.**
  - Mouth loop: horizontal ellipse cx=400 cy=360 rx=35 ry=15, plus 1 inner loop at rx=22 ry=9. **Production cy=370.**
  - Cheek flow: 2 curved arcs (one each side) descending from the outer edge of each eye loop down toward the jaw / chin area, suggesting cheek volume flow.
  - Forehead horizontal loop: shallow arc above both eye loops at around y=200. **Production y=218.**
- Three annotation cards arranged around the head:
  - LEFT card at translate(40, 200), width 180 height 70, header "EYE LOOPS" `#FF6B00` weight 700 size 13, body size 11 opacity 0.75: "Concentric rings let the eye open and close cleanly."
  - RIGHT card at translate(580, 200), width 180 height 70, header "MOUTH LOOPS", body: "Loops around the mouth shape every facial expression."
  - BOTTOM card at translate(310, 460), width 180 height 70, header "CHEEK FLOW", body: "Diagonal loops carry deformation into the jaw."
- Dashed connector lines from each card's inner edge to the relevant loop region on the head (`currentColor` opacity 0.30, stroke-dasharray "4 3", stroke-width 1).
- No italic takeaway and no footer tip card (the annotation cards already carry the pedagogical detail; adding more would clutter the composition).
- Accessibility: `role="img"`, `aria-labelledby="cf-title cf-desc"`. Title: "Character Edge Flow". Desc: "Stylized character head outline with orange edge loops drawn around the eyes, mouth, and cheek zones. Three annotation cards label each loop region with its function for deformation and expression."
- `color="#222"` retained on root.
- Zero new em-dashes; middle-dot for separation in subhead.

### PNG specs

**#17 `lesson_05_17_edge_loop_selection.png`** (id prefix `c17` for integration overlay, target 400 to 800 KB, 1280x720):

- Single BlenderMCP block via lowercase `blender:execute_blender_code`.
- Scene setup: manual cleanup (`bpy.data.objects.remove(obj, do_unlink=True)` for any existing mesh and light objects, plus orphan-mesh cleanup); fresh `primitive_cylinder_add(vertices=24, radius=0.8, depth=2.4)` named `EdgeLoopCylinder` at origin; sun light at (4, -4, 6). NO `bpy.ops.wm.read_factory_settings` (locked rule, kills the bridge).
- Render config: 1280x720, `BLENDER_EEVEE_NEXT` try-set with `BLENDER_EEVEE` fallback on TypeError (locked pattern from Phase 3 and 4).
- View: user-perspective rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=5.0` (Phase 3 sphere capture precedent for visual consistency across Lesson 05's Blender screenshots).
- Enter Edit Mode, edge select mode (`bpy.ops.mesh.select_mode(type='EDGE')`).
- Edge loop selection via bmesh: select the middle horizontal edge ring of the cylinder. The cylinder has 24 vertical sides, so 24 horizontal edges in the middle ring. Filter: `len(e.link_faces) == 2 and all(abs(v.co.z) < 0.05 for v in e.verts)` (both vertices near z=0). This selects exactly the 24 horizontal edges of the middle ring. If that filter under-selects or over-selects, the cleaner alternative is bmesh's edge-loop walker via `bmesh.ops.contextual_create` or `bpy.ops.mesh.loop_select` with appropriate context override. **NOTE (added 2026-05-21):** the default cylinder has no middle ring at z=0; a horizontal loop cut at z=0 must be added first by subdividing the 24 vertical side-edges via bmesh (`bmesh.ops.subdivide_edges` on edges where `(v0.z * v1.z) < 0`, cuts=1, use_grid_fill=False). The locked filter then works exactly as described.
- Solid viewport shading; floor and X/Y axes visible per house pattern.
- OpenGL viewport render via `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Save to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_05_17_edge_loop_selection.png`.
- Verify post-write via `Filesystem:get_file_info`.

**#29 `lesson_05_29_inset_ngon_creation.png`** (id prefix `c29` for integration overlay, target 800 KB to 1.5 MB, 3840x720 composite):

- Three BlenderMCP capture blocks (sequential, shared scene) plus one Pillow composite block.
- Block 1 (panel 1: cylinder cap selected): manual cleanup; fresh `primitive_cylinder_add(vertices=32, radius=0.8, depth=1.6)` named `InsetCylinder`; sun light at (4, -4, 6); 1280x720 render config with EEVEE fallback; user-perspective view rotation (same as #17). Enter Edit Mode, face select mode. Select the top cap face only via bmesh: filter `f.normal.z > 0.9 and len(f.verts) > 4` (the 32-gon top cap; the side faces are quads with normal.z near 0; the bottom cap has normal.z near -1). OpenGL viewport render to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\_temp_lesson_05_29_p1.png`.
- Block 2 (panel 2: after inset): same scene, top cap face still selected, run `bpy.ops.mesh.inset_faces(thickness=0.3)`. The top is now a smaller 32-gon with 32 surrounding quad band faces. OpenGL viewport render to `images/_temp_lesson_05_29_p2.png` (same UNC base). **CORRECTION (added 2026-05-21):** Blender 5.1.1 uses `bpy.ops.mesh.inset(thickness=0.3)`, not `inset_faces`. Use the corrected name.
- Block 3 (panel 3: after extrude inner cap up): same scene, inner 32-gon still selected post-inset, run `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0, 0, 0.3)})` to extrude the inner cap upward by 0.3 along Z. The mesh now has a stepped raised inner disc, and the inner cap is still a 32-gon n-gon visible on top of the step. OpenGL viewport render to `images/_temp_lesson_05_29_p3.png`.
- Block 4 (composite): import `from PIL import Image` (Pillow 12.2.0 at the addons modules path). Open the three temp PNGs, create a new 3840x720 RGBA canvas (`Image.new('RGBA', (3840, 720))`), paste at (0, 0), (1280, 0), (2560, 0). Optional: draw 2px `#FF6B00` vertical lines at x=1280 and x=2560 using `ImageDraw`. Save to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_05_29_inset_ngon_creation.png` via `composite.save(path, 'PNG')`. Clean up the 3 temp PNGs via `os.remove`.
- Verify post-write via `Filesystem:get_file_info`.

### Suggested figcaption drafts (for Phase 5 INTEGRATION reference, not used during production)

Draft figcaptions to carry into the Phase 5 INTEGRATION chat. Em-dash-free per locked rules; revise during integration if a better phrasing emerges.

- **#17 edge_loop_selection:** "An edge loop selected on a cylinder. Alt-click in Edge Mode walks the connected ring around the model, and everything you push or pull on this loop moves together as one continuous chain."
- **#18 good_bad_topology:** "The same surface filled two different ways. The left panel keeps every face a quad with regular spacing; the right packs the same area with triangles, an n-gon, and a 6-pole vertex. Both render fine; only the left subdivides cleanly and deforms predictably."
- **#19 character_edge_flow:** "A stylized character head with the major edge loops sketched in orange. Loops circle the eyes and mouth so each one closes cleanly when the face animates; cheek loops carry that motion down toward the jaw."
- **#24 topology_pole_types:** "Four common vertex types by edge count. A 4-pole is the regular grid vertex you want most places. A 3-pole or 5-pole works in transitions; six or more edges at a single point is the configuration to avoid because subdivision and shading both struggle there."
- **#29 inset_ngon_creation:** "A cylinder cap going through inset, then through extrude. The cap starts as a 32-gon n-gon; inset preserves the shape on the new inner face; extruding that inner face upward turns the n-gon into a stepped feature you would triangulate before export."

### Post-production cleanup checklist

After all 5 images are on disk and verified:

- Update **Placement table** rows:
  - #17: status `not captured; not integrated` to `captured; not integrated`
  - #18: status `not produced; not integrated` to `produced; not integrated`
  - #19: filename `.png` to `.svg`, type `PNG` to `SVG`, prefix `c19` to `cf`, status `not captured; not integrated` to `produced; not integrated`
  - #24: status `not produced; not integrated` to `produced; not integrated`
  - #29: status `not captured; not integrated` to `captured; not integrated`
- Update **Totals lines** under the placement table: SVGs 15 to 16 (insert #19 into the SVG list at the position between #18 and #20); PNGs 15 to 14 (remove #19 from the PNG list).
- Update **Phase plan** row 5: SVG count 2 to 3, PNG count 3 to 2. Append `**PRODUCTION COMPLETE 2026-MM-DD**` to the Notes column.
- Update **Available section**: 0 to 5, with type and prefix per file.
- Update **Missing section**: 11 to 6. New breakdown: SVGs missing = #20, #21, #23 (3 of 16 SVGs); PNGs missing = #22, #25, #30 (3 of 14 PNGs).
- Append new dated **Status bullet** at top of Status section describing the production cycle in the verbose precedent style: file sizes, design decisions confirmed, em-dash discipline compliance, any deviations from this locked spec and their rationale.
- Update **Header** `Current state` line to reflect the new state (still 19 integrated, but now 5 produced and not integrated, with 6 still missing).
- Overwrite `session.md` to point at **Phase 5 INTEGRATION** as the next chat, with the locked image set (now 5 images including the type-flipped #19 SVG) and the locked anchor placements from the placement table.
- **Optional:** prune this "Phase 5 PRODUCTION specs (locked 2026-05-20)" section if it becomes a distraction, or keep as reference for the Phase 5 INTEGRATION plan template (the Phase 4 INTEGRATION plan section above is similarly kept as reference).

### Inline image pattern reminder (carry forward for Phase 5 INTEGRATION)

For the chat AFTER this one (Phase 5 INTEGRATION):

- Plain `<figure>`/`<figcaption>` wrapper at column 16, no class attribute.
- SVGs (#18, #19, #24): `<svg>` root at column 20 with `color="#222"` STRIPPED; svg children at column 24, deeper nesting at 28 and 32; `<figcaption>` at column 20; root SVG attributes (xmlns, viewBox, role, aria-labelledby) preserved.
- PNG without overlay (none in Phase 5; both #17 and #29 will likely want overlays since they capture specific UI subjects).
- PNGs with overlay (#17 and #29): wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at column 20, then `<img loading="lazy">` at column 24, then overlay `<svg viewBox="0 0 W H" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">` at column 24 where W and H are PNG pixel dimensions (`c17` overlay viewBox `0 0 1280 720`; `c29` overlay viewBox `0 0 3840 720`); overlay children at column 28; close `</svg>` at column 24, close `</div>` at column 20; `<figcaption>` at column 20.
- Namespaced `c{N}-*` ids on overlay SVGs to avoid collision with inline SVG title and desc ids on the same page.
- No new em-dashes anywhere in new content (figcaptions, alt text, overlay badge text, desc text, title text). Pre-existing em-dashes in source content preserved verbatim.
- 2 to 3 line `oldText` anchors for unique insertion points; bottom-up integration order if multiple inserts per chat for line-number stability.

---

## Phase 5 INTEGRATION plan (locked 2026-05-21)

Locked plan for the Phase 5 INTEGRATION chat. All 5 anchors, oldText snippets, figcaptions, and overlay decisions resolved in advance against the post-Phase-4-INTEGRATION HTML at 194,925 bytes. The remainder of this chat runs as pure execution: read this section, dry-run + commit each edit, verify with `Filesystem:get_file_info` after each commit, update the running state at chat close.

**Reference HTML state at plan lock:** `lesson_05_understanding_meshes_and_geometry.html` 194,925 bytes (190.4 KB). `#topology` section verified to contain (in order): intro `<p>`, `<h3>What Is Topology?</h3>` + intro `<p>`, 💡 Topology Analogy card, `<h3>Edge Flow and Edge Loops</h3>` + intro `<p>`, 🔄 Edge Loops card, ✅ Try It Now: Select Edge Loops card, `<h3>Why Topology Matters</h3>` + intro `<p>`, 🎯 Topology Impact Areas card, `<h3>Topology Patterns</h3>` + intro `<p>`, 🔷 Common Patterns card, mermaid block (Good Topology graph), `<h3>Bad Topology: What to Avoid</h3>` + ⚠️ Topology Problems card, `<h3>Learning Good Topology</h3>` + paragraphs + ordered list, closing blockquote. `#mesh-project` section verified to contain ⬡ Exercise 6: Create and Identify N-gons card inside Part 3: Polygon Type Investigation (cube → inset → delete face → 8-sided n-gon walkthrough; pre-existing em-dashes `square border—this is an n-gon` and `selects—it's an octagon!` in the `<ol>` body).

**#29 section reconciliation (note for post-integration cleanup):** the placement table currently shows row 29's Section column as `#topology` but the anchor description ("In Exercise 6 section or n-gon-creation discussion") points at `#mesh-project > Part 3 > Exercise 6`. The actual `#topology` section contains no Exercise 6 and no n-gon-creation discussion; Exercise 6 lives only in `#mesh-project`. Content match is exact (#29's cylinder cap inset → extrude composite illustrates the same n-gon-via-inset operation that Exercise 6 walks through). Integration places #29 inside the Exercise 6 card (matching the #16 inside-Try-It-Now-card precedent from Phase 4 INTEGRATION); placement table Section column for row 29 will be corrected to `#mesh-project` during post-integration cleanup along with the status flip to `integrated`.

### Integration order (bottom-up by line position for stability)

1. **#29** in `#mesh-project > Exercise 6` (latest in file)
2. **#24** between 🔷 Common Patterns card close and `<div class="mermaid">`
3. **#19** between Topology Patterns intro `<p>` and 🔷 Common Patterns card open
4. **#18** between 🎯 Topology Impact Areas card close and `<h3>Topology Patterns</h3>`
5. **#17** between Edge Flow and Edge Loops intro `<p>` and 🔄 Edge Loops card open (earliest in file)

Each insertion happens above the next unedited anchor, so earlier line numbers stay valid throughout the chat.

### Figure wrapper structure recap

Per locked rules across Phases 1-4 INTEGRATION, with the col-20 deeper variant for #29:

- **SVGs at default depth (#18, #19, #24):** `<figure>` col 16, `<svg>` root col 20 with `color="#222"` STRIPPED, svg children col 24, deeper nesting col 28/32, `<figcaption>` col 20. Root SVG attributes (xmlns, viewBox, role, aria-labelledby) preserved. Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` (if any) collapsed onto single lines. Short structural comments kept; decorative ASCII-divider comments pruned (none expected in Phase 5 SVGs by author convention).
- **PNG with overlay at default depth (#17):** `<figure>` col 16, wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` col 20, `<img loading="lazy">` col 24, overlay `<svg viewBox="0 0 1280 720" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">` col 24, overlay children col 28, close `</svg>` col 24, close `</div>` col 20, `<figcaption>` col 20.
- **PNG with overlay inside Exercise 6 card (#29):** card opens at col 16, so figure goes one level deeper. `<figure>` col 20, wrapper `<div>` col 24, `<img>` col 28, overlay `<svg viewBox="0 0 3840 720">` col 28, overlay children col 32, close `</svg>` col 28, close `</div>` col 24, `<figcaption>` col 24, close `</figure>` col 20. Matches the #16 inside-Try-It-Now-card precedent from Phase 4 INTEGRATION.

### Locked anchor and figcaption table

| # | File | oldText anchor lines (exact, indentation-sensitive) | Figcaption (em-dash-free, from Phase 5 PRODUCTION specs drafts) |
|---|---|---|---|
| 17 | `lesson_05_17_edge_loop_selection.png` | `<p>Edge flow refers to how edges connect across the mesh surface. Good edge flow follows the contours and natural forms of your object.</p>` + blank + `<div class="card">` + `<h4>🔄 Edge Loops</h4>` (4 lines; first `<p>` unique to this position in the file) | An edge loop selected on a cylinder. Alt-click in Edge Mode walks the connected ring around the model, and everything you push or pull on this loop moves together as one continuous chain. |
| 18 | `lesson_05_18_good_bad_topology.svg` | `<li>Retopology often needed for sculpted models</li>` + `</ul>` + `</li>` + `</ul>` + `</div>` + blank + `<h3>Topology Patterns</h3>` (7 lines; `Retopology often needed for sculpted models` `<li>` unique to 🎯 Topology Impact Areas Sculpting sub-list) | The same surface filled two different ways. The left panel keeps every face a quad with regular spacing; the right packs the same area with triangles, an n-gon, and a 6-pole vertex. Both render fine; only the left subdivides cleanly and deforms predictably. |
| 19 | `lesson_05_19_character_edge_flow.svg` | `<p>Professional modelers recognize and use standard topology patterns:</p>` + blank + `<div class="card">` + `<h4>🔷 Common Patterns</h4>` (4 lines; first `<p>` unique) | A stylized character head with the major edge loops sketched in orange. Loops circle the eyes and mouth so each one closes cleanly when the face animates; cheek loops carry that motion down toward the jaw. |
| 24 | `lesson_05_24_topology_pole_types.svg` | `<li><strong>Flow Lines:</strong> Edges following muscle direction on characters</li>` + `</ul>` + `</div>` + blank + `<div class="mermaid">` (5 lines; Flow Lines `<li>` unique to 🔷 Common Patterns) | Four common vertex types by edge count. A 4-pole is the regular grid vertex you want most places. A 3-pole or 5-pole works in transitions; six or more edges at a single point is the configuration to avoid because subdivision and shading both struggle there. |
| 29 | `lesson_05_29_inset_ngon_creation.png` | `<li>Go to Select → Select All by Trait → N-gons</li>` + `<li>The border face selects—it's an octagon!</li>` + `</ol>` + `</div>` (4 lines; `The border face selects—it's an octagon!` unique to Exercise 6; em-dash MUST be preserved verbatim) | A cylinder cap going through inset, then through extrude. The cap starts as a 32-gon n-gon; inset preserves the shape on the new inner face; extruding that inner face upward turns the n-gon into a stepped feature you would triangulate before export. |

### Overlay decisions for #17 and #29 (locked)

**#17 `lesson_05_17_edge_loop_selection.png` — c17 overlay, one labeled highlight on the selected ring:**

- Overlay `<svg viewBox="0 0 1280 720">` matching PNG pixel dimensions.
- One green highlight ellipse around the visible portion of the 24-edge horizontal middle ring. Starting coordinates: `cx≈640, cy≈360, rx≈275, ry≈55` (loop sits at z=0 in screen-projected view, slightly elliptical from the 63.6° view tilt with `view_distance=5.0`). Stroke `#4ADE80` width 4, fill none. Eyeball-measure against the rendered PNG at execution time before commit and nudge if needed.
- One leader line from the ellipse top edge up-and-right to a badge in the upper-right corner area of the frame, away from the cylinder body. Stroke `#4ADE80` width 3, stroke-linecap round.
- One marker circle r=6 at the badge-side end of the leader, fill `#4ADE80`.
- One badge: rect rx=6 fill `#4ADE80` width ~180 height 46, with `<text>` `EDGE LOOP` font-size 22 weight 700 fill `#0f1a14` text-anchor middle, system-ui font stack.
- Namespaced ids: `c17-highlight`, `c17-leader`, `c17-marker`, `c17-badge`, `c17-badge-text`. `role="img"`, `aria-labelledby="c17-title c17-desc"`, `<title id="c17-title">Edge loop selected on cylinder</title>`, `<desc id="c17-desc">A green elliptical outline marks the horizontal edge loop running around the middle of the cylinder, with a leader line connecting to an EDGE LOOP callout badge.</desc>`.

Rationale: the selected ring is the visual focus but easily misread as the cylinder's silhouette. One labeled highlight resolves the ambiguity without clutter.

**#29 `lesson_05_29_inset_ngon_creation.png` — c29 overlay, three panel labels only:**

- Overlay `<svg viewBox="0 0 3840 720">` matching the 3-panel composite pixel dimensions.
- Three small green badges, one centered above each panel:
  - Panel 1 badge centered at cx=640, cy=60, width 230 height 46, text `SELECT CAP`
  - Panel 2 badge centered at cx=1920, cy=60, width 140 height 46, text `INSET`
  - Panel 3 badge centered at cx=3200, cy=60, width 190 height 46, text `EXTRUDE`
- Each badge: rect rx=6 fill `#4ADE80`, text font-size 22 weight 700 fill `#0f1a14` text-anchor middle system-ui font stack.
- No highlight ellipses, no leader lines, no marker circles. The 2px orange (`#FF6B00`) vertical dividers baked into the PNG at x=1280 and x=2560 already carry the panel boundaries; the three transformations all act on the same inner cap face, so there's no specific element to point at within each panel — labels alone make the sequence legible.
- Namespaced ids: `c29-badge-1` / `c29-badge-1-text`, `c29-badge-2` / `c29-badge-2-text`, `c29-badge-3` / `c29-badge-3-text`. `role="img"`, `aria-labelledby="c29-title c29-desc"`, `<title id="c29-title">Inset n-gon creation sequence</title>`, `<desc id="c29-desc">Three green callout badges label the three stages of the composite: SELECT CAP on panel 1, INSET on panel 2, and EXTRUDE on panel 3.</desc>`.

Rationale: the 3-panel visual progression IS the message but inset vs extrude differences are subtle at lesson display widths. Labels match the cap → inset → extrude operator sequence the figcaption describes.

### Pre-existing em-dashes in/near anchor regions (preserve verbatim)

- `connected—the "flow"` — in `#topology` intro `<p>`, NOT in any Phase 5 anchor
- `topology—like two road networks` — in "What Is Topology?" intro `<p>`, NOT in any Phase 5 anchor
- `globe—they wrap continuously` — inside 🔄 Edge Loops card body, NOT in #17's oldText (#17 anchors above the card open)
- `square border—this is an n-gon (8 sides)!` and `selects—it's an octagon!` — both inside Exercise 6 `<ol>` in `#mesh-project`; the second is in #29's oldText anchor and MUST be preserved verbatim through the edit. The first is also in Exercise 6 but on a different `<li>` not captured by #29's 4-line anchor.

All new content (figcaptions, alt attributes, overlay titles/descs, overlay badge text) uses commas, semicolons, parentheses, or middle-dot (`·` U+00B7) — never em-dashes — per locked rules.

### Inline SVG handling per file (#18, #19, #24)

For each standalone `.svg` file in `images/`:
1. Read full content via `Filesystem:read_text_file`.
2. Strip `color="#222"` from the root `<svg>` tag (the only attribute change).
3. Re-indent every line: original col 0 root → col 20; col 2 children → col 24; col 4 nested → col 28; col 6 deep nested → col 32.
4. Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` collapsed onto single lines (Phase 4 INTEGRATION precedent).
5. Decorative ASCII-divider comments pruned (none expected); short structural comments (`<!-- Panel 1 -->`, `<!-- Cell: ... -->`, `<!-- Hero polygon: ... -->`, `<!-- Vertex glyphs -->`, etc.) kept.
6. Build the `newText` as: leading anchor lines + `<figure>` at col 16 + re-indented SVG content + `<figcaption>` at col 20 with locked figcaption text + closing `</figure>` at col 16 + blank line + trailing anchor lines.

### Inline PNG handling per file (#17, #29)

**#17 (default-depth wrapper, `<figure>` at col 16):**
- `<figure>` at col 16
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 20
- `<img loading="lazy" src="images/lesson_05_17_edge_loop_selection.png" alt="A cylinder in Blender's Edit Mode with the horizontal middle edge loop selected, highlighted along its 24-edge ring." style="display: block; width: 100%; height: auto;">` at col 24
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" role="img" aria-labelledby="c17-title c17-desc" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">` at col 24
- Overlay children (title, desc, ellipse, line, circle, rect, text) at col 28
- Close `</svg>` at col 24
- Close `</div>` at col 20
- `<figcaption>` at col 20 with the locked figcaption text
- `</figure>` at col 16

**#29 (col-20 deeper wrapper, inside Exercise 6 card at col 16):**
- `<figure>` at col 20
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 24
- `<img loading="lazy" src="images/lesson_05_29_inset_ngon_creation.png" alt="A three-panel composite of a 32-vertex cylinder in Edit Mode: panel 1 has the top n-gon cap selected, panel 2 shows the cap after inset, panel 3 shows the inner inset face after extruding upward." style="display: block; width: 100%; height: auto;">` at col 28
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 720" role="img" aria-labelledby="c29-title c29-desc" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">` at col 28
- Overlay children (title, desc, 3 badge rects, 3 badge texts) at col 32
- Close `</svg>` at col 28
- Close `</div>` at col 24
- `<figcaption>` at col 24 with the locked figcaption text
- `</figure>` at col 20

### HTML size projection per figure

- #18: ~12 KB (10,041 B standalone + ~2 KB re-indent overhead at the 20/24/28/32 expansion)
- #19: ~7 KB (5,123 B standalone + ~1.8 KB re-indent overhead)
- #24: ~14 KB (11,441 B standalone + ~2.5 KB re-indent overhead)
- #17: ~2.5 to 3 KB (img reference + overlay SVG with ~10 child elements)
- #29: ~2 to 2.5 KB (img reference + overlay SVG with 3 badge groups, no leaders/highlights, so leaner than #17)

**Projected total Phase 5 INTEGRATION delta: 37 to 39 KB.** HTML at end of Phase 5 INTEGRATION: ~232 to ~234 KB (194,925 B → ~231,925 to ~233,925 B). Tracks the session.md "35 to 45 KB" projection at the lean end (no #29 overlay leaders saves a few hundred bytes).

### Post-integration cleanup task

After all 5 integrations commit and verify, update `lesson_05_integration_progress.md`:
- Header `Current state` line → `Phase 5 INTEGRATION COMPLETE 2026-05-21`, final HTML size, total Phase 5 INTEGRATION delta in KB
- New dated 2026-05-21 status bullet at top of Status section in the verbose precedent style: per-figure HTML size progression, overlay decisions confirmed, em-dash discipline compliance, #29 placement in `#mesh-project > Exercise 6` documented, browser QA deferral
- 5 placement-table rows flipped from `produced; not integrated` / `captured; not integrated` to `integrated`
- **Placement table row 29 Section column corrected from `#topology` to `#mesh-project`** (correcting the pre-existing inconsistency)
- Phase plan row 5 status update prepending `**INTEGRATION COMPLETE 2026-05-21**` before the existing `**PRODUCTION COMPLETE 2026-05-21**` marker
- Available section drops from 5 to 0 with one-line note pointing at Phase 6 PRODUCTION as the next produced-but-not-integrated cycle
- Missing section stays at 6 (integration does not change which images exist on disk)
- Optional: prune this "Phase 5 INTEGRATION plan (locked 2026-05-21)" section after integration completes; or keep as reference for the Phase 6 INTEGRATION plan template

Then overwrite `session.md` to point at **Phase 6 PRODUCTION** as the natural next chat.

---

## Phase 6 PRODUCTION specs (locked 2026-05-21)

Locked plan for the Phase 6 PRODUCTION chat (lesson's final production cycle). All 6 images' specs resolved in advance against the locked house style, the Lessons 03/04 precedents, and the Phase 1-5 Lesson 05 precedents. The remainder of this chat runs as pure execution: read this section, build each image in production order, verify with `Filesystem:get_file_info` after each commit, update the running state at chat close.

**Reference state at plan lock:** `lesson_05_understanding_meshes_and_geometry.html` 234,483 bytes (228.99 KB) post-Phase-5-INTEGRATION. `lesson_05_integration_progress.md` 128,118 bytes post-Phase-5-INTEGRATION-cleanup (this new section adds ~10 KB). HTML not modified by Phase 6 PRODUCTION; will grow at Phase 6 INTEGRATION.

**Image set (6 total; all currently missing on disk):**

| Order | # | File | Type | ID prefix | Section | Tool path |
|---|---|---|---|---|---|---|
| 1 | 20 | `lesson_05_20_manifold_geometry.svg` | SVG | `mf` | `#manifold-geometry` | `Filesystem:write_file` |
| 2 | 21 | `lesson_05_21_nonmanifold_types.svg` | SVG | `nm` | `#manifold-geometry` | `Filesystem:write_file` |
| 3 | 23 | `lesson_05_23_density_decision_flowchart.svg` | SVG | `df` | `#mesh-density` or `#summary` | `Filesystem:write_file` |
| 4 | 22 | `lesson_05_22_nonmanifold_example.png` | PNG | `c22` | `#manifold-geometry` | `blender:execute_blender_code` |
| 5 | 25 | `lesson_05_25_shading_toggle_ui.png` | PNG | `c25` | `#summary` | Manual Win+Shift+S |
| 6 | 30 | `lesson_05_30_realworld_topology_examples.png` | PNG | `c30` | `#summary` or `#topology` | `blender:execute_blender_code` (3 captures plus Pillow composite) |

### Decisions resolved at plan lock

**1. #21 4-panel grid layout: CONFIRM requirements-doc default.** Panels: boundary edge / triple edge / isolated vertex / wire edge, in that left-to-right order. Rationale: these 4 conditions match exactly what `bpy.ops.mesh.select_non_manifold()` flags by default, so they line up with #22's capture; they read distinctly at panel-quarter size; semantically complete (no fifth category worth adding). All 4 panel headers fill `#E63946` red (all are AVOID cases), unlike #24's green/green/yellow/red gradient where some poles were acceptable.

**2. #25 capture path: CONFIRM manual Win+Shift+S.** Right-click context menu is transient UI that Blender's render API cannot reach. Follows the locked Phase 3 #28 and Phase 4 #27 precedent. Production pauses at this step and prompts Ray to capture and place the file in `images/` directly.

**3. #30 subjects: cup + chair + low-poly bust, with vase as fallback.** The #19 type-flip experience showed clean-topology character heads are character-modeling territory and not viable for the cadence; but the lesson's "real-world topology examples" framing wants an organic example alongside the two hardsurface ones to demonstrate loop discipline applies to both. A low-poly bust (UV sphere with 2-3 horizontal loop cuts plus 2 deliberate vertical loops around eye/mouth zones, no facial features) threads that needle in ~15 min of BlenderMCP work. Fallback: if bust orchestration burns more than ~20 min, swap to vase (cylinder revolution surface with 4 loop cuts and tapered ring scaling, ~5 min). Path for all 3 subjects: BlenderMCP individual captures at 1280x720, Pillow composite to 3840x720 with 2px `#FF6B00` vertical dividers at x=1280 and x=2560 (Phase 5 #29 pattern). No stock-asset path.

**4. Production order: SVGs first, then PNGs.** Within SVGs: #20 (cleanest spec, single-panel hero, warm up), then #21 (4-panel grid reuses #24 pattern), then #23 (most novel layout, vertical flowchart). Within PNGs: #22 (single BlenderMCP block, simplest capture), then #25 (manual capture, pause for Ray), then #30 (3 captures plus composite, most complex). Rationale: SVG authoring is stateless and fast-iterate via `Filesystem:write_file` with no BlenderMCP overhead; PNGs require Blender state setup; pure SVG first lets bulk authoring close before any Blender bridge work.

### SVG specs

**#20 `lesson_05_20_manifold_geometry.svg`** (id prefix `mf`, 800x560 viewBox, target ~10 KB):

- Pattern: single-panel hero with annotation cards (Lesson 04 #11 origin_point and Lesson 05 #1 mesh_components precedent).
- Standard house style header: 3px `#FF6B00` accent rail at (0,0), heading at y=56 size 24 weight 700 ("Manifold Geometry"), subtitle at y=84 size 14 opacity 0.65 ("Every edge shared by exactly two faces"), divider at y=108 x=120 to x=680 opacity 0.25, orange subhead at y=138 size 15 weight 700 letter-spacing 2 ("WATERTIGHT · 3D-PRINTABLE · SOLID").
- Hero composition: small piece of mesh centered around (400, 300) showing a 2x2 quad patch (4 quads, 9 vertices, 12 edges) drawn in 3/4 isometric perspective. Suggested vertex positions for the isometric grid: outer corners at (290, 220), (510, 220), (510, 410), (290, 410); midpoint-top at (400, 220), midpoint-bottom at (400, 410); midpoint-left at (290, 315), midpoint-right at (510, 315); center at (400, 315). Edges drawn between adjacent vertices forming 4 quad faces.
- The central shared edge between the two upper quads (from (400, 220) down to (400, 315)) highlighted in green `#4ADE80` stroke-width 4. Endpoints of the highlighted edge each get a 3-layer glyph (halo r=8 opacity 0.20 `#4ADE80` / solid r=5 `#4ADE80` / inner highlight r=1.5 white).
- Other edges in `currentColor` opacity 0.85 stroke-width 1.4; other vertices in `#FF6B00` 2-layer dots (halo r=6 opacity 0.20 / solid r=3.5).
- Three annotation cards (140 wide x 70 tall, 4px `#FF6B00` left rail, body fill currentColor opacity 0.04 stroke `#FF6B00` opacity 0.4):
  - LEFT at translate(40, 200): header "EXACTLY 2 FACES" `#FF6B00` weight 700 size 13, body size 11 opacity 0.75 "The highlighted edge borders the quad above and the quad below. That is the manifold rule."
  - RIGHT at translate(620, 200): header "WATERTIGHT", body "Manifold meshes have a clear inside and outside, like a sealed solid object."
  - BOTTOM at translate(310, 460): header "3D-PRINTABLE", body "Slicers, booleans, and physics simulations all require manifold input."
- Dashed `currentColor` opacity 0.30 stroke-dasharray "4 3" stroke-width 1 connectors from each card to the highlighted edge region.
- Italic takeaway at y=445 size 13 opacity 0.75 centered: "If you can trace a continuous surface with no holes and no extra dangling parts, the mesh is manifold."
- Footer tip card at y=506 to y=540 with 4px `#FF6B00` left rail. Text: `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan> Use Select &gt; All by Trait &gt; Non Manifold to find any edges that violate the rule.`
- Accessibility: `role="img"`, `aria-labelledby="mf-title mf-desc"`, `<title id="mf-title">Manifold Geometry</title>`, `<desc id="mf-desc">A small piece of mesh in three-quarter perspective with one central edge highlighted in green to show how every interior edge in a manifold mesh borders exactly two faces. Three annotation cards label the rule, the watertight property, and the 3D-printability requirement.</desc>`.
- `color="#222"` retained on root for `<img>` fallback (stripped on inline at Phase 6 INTEGRATION).
- Zero new em-dashes; middle-dot (U+00B7) used in subhead for separation.

**#21 `lesson_05_21_nonmanifold_types.svg`** (id prefix `nm`, 800x560 viewBox, target ~14 KB):

- Pattern: 4-panel grid (Phase 5 #24 topology_pole_types precedent).
- Standard house style header. Heading "Non-Manifold Geometry". Subtitle "Four conditions that violate the every-edge-two-faces rule". Subhead "BOUNDARY · TRIPLE · ISOLATED · WIRE".
- Four panels arranged horizontally, each 170 wide by 230 tall. Panel centers at x=120, 305, 490, 675. Panel y from 170 to 400. Panel rect stroke `currentColor` opacity 0.25 fill `currentColor` opacity 0.03. Panel header bar at top (y=170 to y=196 within each panel) fills `#E63946` (red, all 4 are AVOID), header text inside at panel-y=190 size 12 weight 700 fill `#ffffff` text-anchor middle. Header text per panel: "BOUNDARY" / "TRIPLE" / "ISOLATED" / "WIRE".
- Per-panel geometry (problem element stroked or marked in `#E63946` width 2.5 to draw the eye):
  - **Panel 1 BOUNDARY EDGE:** 2 adjacent quads sharing one inner edge plus one outer edge that has only 1 face. Quads roughly at panel-x-30 to panel-x and panel-x to panel-x+30, both from y=230 to y=350. Highlight the right outer edge in red as the boundary edge. Red label "1 face" near the highlighted edge size 10 weight 700 fill `#E63946`.
  - **Panel 2 TRIPLE EDGE:** 3 quads all meeting at one shared central vertical edge (cross-section view). Central edge runs from (panel-x, 220) to (panel-x, 360) stroked red. 3 faint quads fan out: upper-left, upper-right, straight down, each shown as a quad outline `currentColor` opacity 0.5 stroke-width 1.2 with one edge on the central red edge. Red label "3 faces" at panel-x, 380 centered.
  - **Panel 3 ISOLATED VERTEX:** clean 2x2 quad patch (vertices forming 4 small quads in the panel interior). Above the patch, at (panel-x, 200), one orphan vertex floating in red 3-layer glyph (halo r=10 opacity 0.20 `#E63946` / solid r=6 `#E63946` / inner highlight r=2 white). Red label "0 edges" at panel-x, 380 centered.
  - **Panel 4 WIRE EDGE:** 2x2 quad patch (same as panel 3). From the top-right corner vertex, one extra edge extends outward up-and-right to a terminal vertex at (panel-x+50, 195). Wire edge stroked red width 2.5; terminal vertex in red 2-layer dot (halo r=7 opacity 0.20 `#E63946` / solid r=4 `#E63946`). Red label "0 faces" at panel-x, 380 centered.
- Panel labels at y=410 size 12 weight 700 centered per panel: "BOUNDARY EDGE" / "TRIPLE EDGE" / "ISOLATED VERTEX" / "WIRE EDGE". (Note: y=410 may collide with the pill row at y=425; if so, nudge labels up to y=405 or pill row down to y=430-470 at production. Phase 4/5 precedent for this kind of nudge.)
- Property pill row at y=425 to y=465, 3 pills, centers at x=160, 400, 640, pill rect width 220 height 40 rx=6, fill currentColor fill-opacity 0.04 stroke `#FF6B00` stroke-width 1 stroke-opacity 0.5. Pill 1: label "PROBLEM" value "Boolean fails". Pill 2: label "PROBLEM" value "Slicer breaks". Pill 3: label "PROBLEM" value "Sim crashes".
- Italic takeaway at y=490 size 13 opacity 0.75 centered: "Any of these four conditions breaks the manifold rule. Select All by Trait &gt; Non Manifold finds them in one click."
- Footer tip card y=506 to y=540 with 4px `#FF6B00` left rail. Text: `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan> After deleting faces or merging vertices, run a Non Manifold select to catch leftover stray geometry.`
- Accessibility: `role="img"`, `aria-labelledby="nm-title nm-desc"`, `<title id="nm-title">Non-Manifold Geometry Types</title>`, `<desc id="nm-desc">Four-panel grid showing the four conditions that make a mesh non-manifold: a boundary edge with only one face, a triple edge with three or more faces, an isolated vertex with no connecting edges, and a wire edge with no bordering face. All four panels share a red AVOID header.</desc>`.
- `color="#222"` retained.
- Zero new em-dashes; middle-dot in subhead.

**#23 `lesson_05_23_density_decision_flowchart.svg`** (id prefix `df`, **800x680 viewBox**, target ~12 KB):

- Pattern: vertical decision flowchart (Lesson 03 #14 navigation_workflow precedent: primary branches plus dashed side-note callouts).
- Standard house style header. Heading "Choosing Mesh Density". Subtitle "Match polygon count to the job". Subhead "ASK · DECIDE · BUILD".
- Root question box at y=170-220 (rounded rect width 240 height 50 centered x=400, rx=8, fill currentColor opacity 0.05 stroke `#FF6B00` stroke-width 2). Text inside centered y=200 size 14 weight 700: "Will the camera get close?"
- Branch arrows at y=225-265: LEFT arrow from x=400 y=220 down-and-left to x=200 y=265 labeled "YES" along the arrow at midpoint, size 12 weight 700 fill `#FF6B00`. RIGHT arrow from x=400 y=220 down-and-right to x=600 y=265 labeled "NO". Arrows stroke `#FF6B00` width 2.5 with small triangular arrowhead tips (use inline polylines or `<defs>`/`<marker>`; polyline tips are leaner).
- Secondary question boxes at y=275-325 (rounded rect width 220 height 50, fill currentColor opacity 0.05 stroke `#FF6B00` stroke-width 2):
  - LEFT box centered x=200: "Animated or deformed?"
  - RIGHT box centered x=600: "Many copies in scene?"
- Branch arrows at y=330-380 from each secondary box (4 total leaf paths). Labels: "YES" / "NO" / "YES" / "NO".
  - LEFT-LEFT path: x=200 y=325 down-and-left to x=110 y=385
  - LEFT-RIGHT path: x=200 y=325 down-and-right to x=290 y=385
  - RIGHT-LEFT path: x=600 y=325 down-and-left to x=510 y=385
  - RIGHT-RIGHT path: x=600 y=325 down-and-right to x=690 y=385
- Terminal density boxes at y=395-465 (rounded rect width 140 height 70, rx=8, stroke-width 2):
  - HIGH DENSITY centered x=110: fill `#4ADE80` opacity 0.15 stroke `#4ADE80`. Text: "HIGH" weight 700 size 16 at y=425 + "50K+ verts" size 12 opacity 0.75 at y=450
  - MEDIUM DENSITY centered x=290: fill `#F5C242` opacity 0.15 stroke `#F5C242`. Text: "MEDIUM" at y=425 + "5K-50K verts" at y=450
  - LOW DENSITY centered x=510: fill `#4A9EFF` opacity 0.15 stroke `#4A9EFF`. Text: "LOW" at y=425 + "&lt;5K verts" at y=450
  - LOW DENSITY (instanced) centered x=690: fill `#4A9EFF` opacity 0.15 stroke `#4A9EFF`. Text: "LOW" at y=425 + "Instanced" size 12 italic at y=450
- Dashed side-note callouts (`currentColor` opacity 0.30 stroke-dasharray "4 3" stroke-width 1):
  - LEFT margin near y=440: short dashed line from x=40 to x=60, with label "Film, sculpting, hero closeups" at x=10 y=475 size 11 italic opacity 0.6
  - RIGHT margin near y=440: short dashed line from x=740 to x=760, with label "Mobile, instancing, backgrounds, VR" at x=620 y=475 size 11 italic opacity 0.6
- Bottom synthesis row at y=500-545: 3 small reference pills, centers x=180, 400, 620, pill rect width 150 height 40 rx=6, same pill style as #20/#21. Pill 1: label "GAMES" value "LOW". Pill 2: label "FILM" value "HIGH". Pill 3: label "PRINT" value "MEDIUM-HIGH".
- Italic takeaway at y=580 size 13 opacity 0.75 centered: "Density is a budget. Spend polygons where the camera looks."
- Footer tip card y=600 to y=634 (positioned for 800x680 viewBox, slightly higher in absolute y than the 800x560 pattern's y=506-540 since this viewBox is taller), 4px `#FF6B00` left rail. Text: `<tspan font-weight="700" fill="#FF6B00">Tip:</tspan> Start dense and use Decimate or Remesh modifiers to reduce; reversing direction is harder.`
- Accessibility: `role="img"`, `aria-labelledby="df-title df-desc"`, `<title id="df-title">Choosing Mesh Density</title>`, `<desc id="df-desc">A two-question decision tree. The first question asks whether the camera will get close; the second question splits further based on deformation or instancing needs. Four terminal density recommendations color-coded green for high, yellow for medium, and blue for low. Dashed side callouts give use-case examples on each margin.</desc>`.
- `color="#222"` retained.
- Zero new em-dashes; middle-dot in subhead.

### PNG specs

**#22 `lesson_05_22_nonmanifold_example.png`** (id prefix `c22` for integration overlay, target ~600-800 KB, 1280x720):

- Single `blender:execute_blender_code` block via lowercase op.
- Scene setup: manual cleanup (`bpy.data.objects.remove(obj, do_unlink=True)` for any existing mesh and light objects, plus orphan-mesh cleanup); fresh `primitive_cube_add(size=2)` named `NonManifoldCube` at origin; sun light at (4, -4, 6). NO `bpy.ops.wm.read_factory_settings` (locked rule).
- Render config: 1280x720, `BLENDER_EEVEE_NEXT` try-set with `BLENDER_EEVEE` fallback on TypeError.
- Enter Edit Mode, face select mode (`bpy.ops.mesh.select_mode(type='FACE')`). Select the top face via bmesh: `for f in bm.faces: f.select = (f.normal.z > 0.9)` (1 face). Delete via `bpy.ops.mesh.delete(type='FACES')`. The cube now has 5 faces, an open top, and 4 boundary edges around the open rim.
- Switch to edge select mode (`bpy.ops.mesh.select_mode(type='EDGE')`). Run `bpy.ops.mesh.select_non_manifold()`. Should select exactly the 4 boundary edges of the open top (verify count via print before render).
- Fallback if `select_non_manifold` API has shifted in 5.1.1: use bmesh equivalent `[e for e in bm.edges if not e.is_manifold]`, then set `e.select = True` for each, then `bmesh.update_edit_mesh(obj.data)`. Either path produces the same selection state.
- View: user-perspective rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()` with `view_distance=7.0` (default-cube scale per Phase 2 precedent).
- Solid viewport shading; floor and X/Y axes visible.
- OpenGL viewport render via `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Save to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_05_22_nonmanifold_example.png`. Verify post-write via `Filesystem:get_file_info`.

**#25 `lesson_05_25_shading_toggle_ui.png`** (id prefix `c25` for integration overlay, target ~150-250 KB):

- Manual Win+Shift+S capture, no BlenderMCP block.
- Procedure: open Blender, default cube selected in Object Mode (context menu shows the Shade Smooth and Shade Flat options only in Object Mode, not Edit Mode), right-click in the 3D viewport to open the object context menu, snip to include the full menu vertical extent plus 8 to 12 pixels of viewport background on all sides for context.
- Save filename exactly `lesson_05_25_shading_toggle_ui.png` directly into `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`. Production pauses at this step and prompts Ray to capture.
- After Ray confirms placement, verify dimensions and size via `Filesystem:get_file_info`. If filename has any typo (e.g., the Phase 3 #28 `.pn.png` precedent), rename via `Filesystem:move_file`.

**#30 `lesson_05_30_realworld_topology_examples.png`** (id prefix `c30` for integration overlay, target ~1.0 to 1.5 MB, 3840x720 composite):

- Three sequential `blender:execute_blender_code` capture blocks (one per subject), one Pillow composite block. Phase 5 #29 pattern.
- All 3 captures share base setup: manual cleanup at start of each block, sun light at (4, -4, 6), 1280x720 render config with EEVEE_NEXT to EEVEE fallback, user-perspective view rotation `Euler((radians(63.6), 0, radians(-46.7)), 'XYZ').to_quaternion()`, solid viewport shading with wireframe overlay enabled (`space.overlay.show_wireframes = True` and `space.overlay.wireframe_threshold = 1.0` to show all edges through the surface).
- **Block 1 (cup), `view_distance=4.0`:** `primitive_cylinder_add(vertices=24, radius=0.6, depth=1.4, location=(0, 0, 0.7))`. Edit Mode. Add 2 horizontal loop cuts at z=0.2 and z=0.9 by selecting vertical side-edges crossing each z plane and running `bmesh.ops.subdivide_edges` with cuts=1. Switch to face select, select top cap (normal.z > 0.9), inset via `bpy.ops.mesh.inset(thickness=0.08)` then extrude inset face downward by 1.2 via `bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0,0,-1.2)})` to hollow the cup interior. Object Mode briefly to add torus handle: `primitive_torus_add(major_radius=0.3, minor_radius=0.05, location=(0.7, 0, 0.7), rotation=(radians(90), 0, 0))` so handle plane is X-Z. Select both objects, set cup as active, `bpy.ops.object.join()`. Re-enter Edit Mode, deselect all. OpenGL render to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\_temp_lesson_05_30_p1.png`.
- **Block 2 (chair), `view_distance=4.5`:** Cleanup. Build from primitives: seat cube `primitive_cube_add(size=1, location=(0,0,0.5))` scaled `(1.2, 1.2, 0.1)` (apply via `obj.scale`); 4 leg cubes scaled `(0.1, 0.1, 0.5)` at the 4 corners `(±0.5, ±0.5, 0.25)`; back panel cube scaled `(1.2, 0.1, 0.7)` at `(0, -0.55, 0.95)`. Select all 6 cubes, set seat as active, `bpy.ops.object.join()` to merge into one mesh named `Chair`. Edit Mode, deselect all. OpenGL render to `images/_temp_lesson_05_30_p2.png`.
- **Block 3 (bust), `view_distance=3.5`:** Cleanup. `primitive_uv_sphere_add(segments=16, ring_count=12, radius=1, location=(0,0,1))`. Edit Mode. Add 2 horizontal loop cuts at z=1.3 (forehead) and z=1.0 (eye-mouth band) via bmesh subdivide on vertical edges crossing those z values. Add 2 vertical loop cuts at x=±0.3 via bmesh subdivide on horizontal edges crossing those x values to suggest cheek flow. Select verts with z < 1.0, `bmesh.ops.scale` factor `(1, 0.85, 1)` to suggest jaw shape. NO facial features (no eye sockets, no nose, no mouth); the lesson learned from #19 is that character-feature modeling is out of scope. The bust just needs to show loops flow around feature zones. Deselect all. OpenGL render to `images/_temp_lesson_05_30_p3.png`.
  - **FALLBACK if bust orchestration burns more than ~20 min in block 3:** replace with vase. `primitive_cylinder_add(vertices=24, radius=0.5, depth=1.6, location=(0,0,0.8))`. Edit Mode. Add 4 horizontal loop cuts at z=0.4, z=0.8, z=1.2, z=1.5 via bmesh subdivide on vertical edges. Select alternate rings and scale via `bmesh.ops.scale` factor `(1.4, 1.4, 1)` for wider rings and `(0.7, 0.7, 1)` for narrower rings to taper the vase silhouette. ~5 min replacement. Note the fallback in the post-production status bullet if used.
- **Block 4 (Pillow composite):** `from PIL import Image, ImageDraw`. Open the 3 temp PNGs (each 1280x720). Create `Image.new('RGBA', (3840, 720), (0, 0, 0, 0))`. Paste at (0, 0), (1280, 0), (2560, 0). Draw 2px `#FF6B00` vertical dividers at x=1280 and x=2560 via `draw.rectangle([x-1, 0, x+1, 720], fill=(255, 107, 0, 255))`. Save to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_05_30_realworld_topology_examples.png` via `composite.save(path, 'PNG')`. Clean up the 3 temp PNGs via `os.remove`. Pillow 12.2.0 at the addons modules path (`C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`), confirmed working in Phase 5 #29.
- Verify post-write via `Filesystem:get_file_info`.

### Suggested figcaption drafts (em-dash-free, for Phase 6 INTEGRATION reference)

- **#20 manifold_geometry:** "A small piece of mesh with the central shared edge highlighted in green. Every edge in a manifold mesh borders exactly two faces; that single rule is what makes a model watertight enough to 3D print, boolean, or simulate."
- **#21 nonmanifold_types:** "The four conditions that break manifold geometry. Boundary edges have only one face; triple edges have three or more; isolated vertices and wire edges hang in space without face support."
- **#22 nonmanifold_example:** "A default cube with its top face deleted and Select All by Trait &gt; Non Manifold run. The four edges around the open top highlight in orange because each now borders only one face."
- **#23 density_decision_flowchart:** "A two-question decision tree for picking polygon density. Camera proximity drives the first split; deformation and instancing decide the second. The three terminal densities map to typical game, film, and print budgets."
- **#25 shading_toggle_ui:** "The object context menu in the 3D viewport. Shade Smooth and Shade Flat sit near the top; they change how Blender averages face normals across edges without modifying the underlying geometry."
- **#30 realworld_topology_examples:** "Three real-world objects in Edit Mode with wireframes visible. Cup and chair show clean hardsurface quad topology with edge loops following silhouette curves; the bust shows the same principles on an organic form with loops circling natural feature zones."

### Post-production cleanup checklist

After all 6 images are on disk and verified:

- Update **Placement table** rows:
  - #20: status `not produced; not integrated` to `produced; not integrated`
  - #21: status `not produced; not integrated` to `produced; not integrated`
  - #22: status `not captured; not integrated` to `captured; not integrated`
  - #23: status `not produced; not integrated` to `produced; not integrated`
  - #25: status `not captured; not integrated` to `captured; not integrated`
  - #30: status `not captured; not integrated` to `captured; not integrated`
- Update **Phase plan** row 6: append `**PRODUCTION COMPLETE 2026-MM-DD**` to the Notes column with per-image file sizes and any documented deviations.
- Update **Available section**: 0 to 6.
- Update **Missing section**: 6 to 0 (lesson has all 30 images on disk for the first time).
- Update **Header** `Current state` line to reflect the new state (24 integrated + 6 produced + 0 missing).
- Append new dated 2026-MM-DD **Status bullet** at top of Status section in the verbose Phase 5 PRODUCTION precedent style: file sizes, design decisions confirmed, em-dash discipline compliance, any deviations from this locked spec and their rationale.
- Overwrite `session.md` to point at **Phase 6 INTEGRATION** as the next chat (the final Lesson 05 integration cycle).
- **Optional:** prune this "Phase 6 PRODUCTION specs (locked 2026-05-21)" section after integration completes, or keep as reference for the Phase 6 INTEGRATION plan template.

### Inline image pattern reminder (carry forward for Phase 6 INTEGRATION)

For the chat AFTER this one (Phase 6 INTEGRATION):

- Plain `<figure>`/`<figcaption>` wrapper at column 16, no class attribute.
- SVGs (#20, #21, #23): `<svg>` root at column 20 with `color="#222"` STRIPPED; svg children at column 24, deeper nesting at 28 and 32; `<figcaption>` at column 20; root SVG attributes (xmlns, viewBox, role, aria-labelledby) preserved.
- PNGs with overlay (#22, #25, #30 all likely warrant overlays since they capture specific UI subjects or multi-step compositions): wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at column 20, then `<img loading="lazy">` at column 24, then overlay `<svg viewBox="0 0 W H" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` at column 24 (the lean `inset: 0` form set by c28 and confirmed by c17/c29; `c22` overlay viewBox `0 0 1280 720`; `c25` overlay viewBox depends on the manual capture dimensions, measure with PIL at integration time; `c30` overlay viewBox `0 0 3840 720`); overlay children at column 28; close `</svg>` at column 24, close `</div>` at column 20; `<figcaption>` at column 20.
- Namespaced `c{N}-*` ids on overlay SVGs to avoid collision with inline SVG title and desc ids on the same page.
- No new em-dashes anywhere in new content (figcaptions, alt text, overlay badge text, desc text, title text). Pre-existing em-dashes in source content preserved verbatim.
- 2 to 3 line `oldText` anchors for unique insertion points; bottom-up integration order for line-number stability if all 6 land in one chat.
- Overlay decisions TBD at Phase 6 INTEGRATION plan-lock. Likely candidates: c22 single green ellipse around the 4 selected boundary edges plus a `NON-MANIFOLD` badge; c25 green ellipse around the Shade Smooth and Shade Flat menu rows plus a `SHADE SMOOTH/FLAT` badge; c30 three small green badges centered above each panel (`CUP`, `CHAIR`, `BUST` or whichever 3rd subject ships) using the c29 no-highlights-no-leaders pattern since the orange panel dividers already carry boundaries.

---

## Phase 6 INTEGRATION plan (locked 2026-05-21)

Locked plan for the Phase 6 INTEGRATION chat (lesson's final integration cycle). All 6 anchors, oldText snippets, figcaptions, indentation variants, and overlay decisions resolved in advance against the post-Phase-5-INTEGRATION / post-Phase-6-PRODUCTION HTML at 234,483 bytes. The remainder of this chat runs as pure execution: read this section, dry-run + commit each edit, verify with `Filesystem:get_file_info` after each commit, update the running state at chat close. Closes Lesson 05 image work at 30 of 30 integrated.

**Reference HTML state at plan lock:** `lesson_05_understanding_meshes_and_geometry.html` 234,483 bytes (228.99 KB). All 6 target sections verified by direct read: `#mesh-density` contains the `<h3>When to Use Different Densities</h3>` + 🎮 Low-Poly Use Cases card + 🎬 High-Poly Use Cases card + `<h3>The "Enough Detail" Principle</h3>` sequence (anchor for #23); `#manifold-geometry` contains `<h3>What Is Manifold Geometry?</h3>` + intro `<p>` + ✅ Manifold Characteristics card + `<h3>Non-Manifold Geometry Problems</h3>` + intro `<p>` + ⚠️ Non-Manifold Edge Types card + 💡 When Non-Manifold Is a Problem card + `<h3>Detecting Non-Manifold Geometry</h3>` + ✅ Finding Non-Manifold Elements card + `<h3>Fixing Common Non-Manifold Issues</h3>` + 🔧 Quick Fixes card + closing blockquote (anchors for #20, #21, #22); `#summary` contains 🎓 Key Takeaways gradient card + `<h3>What You've Accomplished</h3>` + ul + `<h3>Essential Concepts Reference</h3>` + 📚 Quick Reference Guide card (with Mesh Components / Polygon Types / Important Terms / Key Shortcuts h5 subsections) + `<h3>Common Questions</h3>` + 4 question cards + `<h3>Looking Ahead</h3>` + p + ul + 💡 Before the Next Lesson card + final 🎯 gradient card + closing blockquote (anchors for #25 and #30). `→` arrow character (U+2192) in #manifold-geometry's ✅ Finding Non-Manifold Elements card body (`Removing doubles with M → Merge by Distance`) confirmed clean UTF-8 in the file via re-read; an earlier display rendered it as `��` but that was a one-off transient artifact, not a file-content issue. All other arrows in the file (`Select → Select All by Trait → Non-Manifold`, `Press M → Merge by Distance` in 🔧 Quick Fixes, etc.) render cleanly throughout.

### Integration order (bottom-up by line position for stability)

1. **#30** in `#summary` between 💡 Before the Next Lesson card close and final 🎯 gradient card (latest in file)
2. **#25** in `#summary` inside 📚 Quick Reference Guide card, after Key Shortcuts `<ul>` close (end of card body)
3. **#22** in `#manifold-geometry` inside ✅ Finding Non-Manifold Elements card, after the `<ol>` close (end of card body)
4. **#21** in `#manifold-geometry` between ⚠️ Non-Manifold Edge Types card close and 💡 When Non-Manifold Is a Problem card open
5. **#20** in `#manifold-geometry` between ✅ Manifold Characteristics card close and `<h3>Non-Manifold Geometry Problems</h3>`
6. **#23** in `#mesh-density` between 🎬 High-Poly Use Cases card close and `<h3>The "Enough Detail" Principle</h3>` (earliest in file)

Each insertion happens above the next unedited anchor, so earlier line numbers stay valid throughout the chat.

### Figure wrapper structure recap (4 default-depth + 2 deeper-indent)

Per locked rules across Phases 1-5 INTEGRATION, with the col-20 deeper variant for #25 and #22 (both inside cards opening at col 16):

- **SVGs at default depth (#20, #21, #23):** `<figure>` col 16, `<svg>` root col 20 with `color="#222"` STRIPPED, svg children col 24, deeper nesting col 28/32, `<figcaption>` col 20. Root SVG attributes (xmlns, viewBox, role, aria-labelledby) preserved. Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` collapsed onto single lines. Short structural comments kept; decorative ASCII-divider comments pruned (none expected in Phase 6 SVGs by author convention).
- **PNG with overlay at default depth (#30):** `<figure>` col 16, wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` col 20, `<img loading="lazy">` col 24, overlay `<svg viewBox="0 0 3840 720" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` col 24, overlay children col 28, close `</svg>` col 24, close `</div>` col 20, `<figcaption>` col 20.
- **PNGs with overlay inside cards (#25 and #22):** card opens at col 16, so figure goes one level deeper. `<figure>` col 20, wrapper `<div>` col 24, `<img>` col 28, overlay `<svg viewBox="0 0 W H">` col 28, overlay children col 32, close `</svg>` col 28, close `</div>` col 24, `<figcaption>` col 24, close `</figure>` col 20. Matches the Phase 4 #16 inside-Try-It-Now-card and Phase 5 #29 inside-Exercise-6-card precedents.

### Locked anchor and figcaption table

| # | File | Indent | oldText anchor (exact, indentation-sensitive) | Figcaption (em-dash-free) |
|---|---|---|---|---|
| 30 | `lesson_05_30_realworld_topology_examples.png` | default (col 16) | `                        <li><strong>Watch topology videos:</strong> Search for "good topology examples" online</li>` + `                    </ul>` + `                </div>` + blank + `                <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 2rem;">` (5 lines; `Watch topology videos` is unique to the 💡 Before the Next Lesson card; the gradient-card opener with `text-align: center; padding: 2rem;` is unique to the final 🎯 gradient card in `#summary`) | Three real-world objects in Edit Mode with wireframes visible. Cup and chair show clean hardsurface quad topology with edge loops following silhouette curves; the bust shows the same principles on an organic form with loops circling natural feature zones. |
| 25 | `lesson_05_25_shading_toggle_ui.png` | **deeper (col 20)** | `                        <li><code>Shift + Ctrl + Alt + M</code> — Select non-manifold geometry</li>` + `                    </ul>` + `                </div>` (3 lines; `Shift + Ctrl + Alt + M` is unique to the Key Shortcuts ul inside 📚 Quick Reference Guide card; em-dash in the `<li>` MUST be preserved verbatim through the edit) | The object context menu in the 3D viewport. Shade Smooth and Shade Flat sit near the top; they change how Blender averages face normals across edges without modifying the underlying geometry. |
| 22 | `lesson_05_22_nonmanifold_example.png` | **deeper (col 20)** | `                                <li>Removing doubles with <code>M</code> → Merge by Distance</li>` + `                            </ul>` + `                        </li>` + `                    </ol>` + `                </div>` (5 lines; `Removing doubles with <code>M</code>` is unique to the ✅ Finding Non-Manifold Elements card's nested ul under Fix-these-elements-by; `→` is U+2192, preserve verbatim) | A default cube with its top face deleted and Select All by Trait > Non Manifold run. The four edges around the open top highlight in orange because each now borders only one face. |
| 21 | `lesson_05_21_nonmanifold_types.svg` | default (col 16) | `                                <li>Often leftover from modeling operations</li>` + `                            </ul>` + `                        </li>` + `                    </ul>` + `                </div>` + blank + `                <div class="card" style="background: #e3f2fd; border-left: 4px solid #2196F3;">` + `                    <h4>💡 When Non-Manifold Is a Problem</h4>` (8 lines; `Often leftover from modeling operations` is unique to the Wire edge sub-list in the ⚠️ Non-Manifold Edge Types card; the `💡 When Non-Manifold Is a Problem` h4 is unique to the next card) | The four conditions that break manifold geometry. Boundary edges have only one face; triple edges have three or more; isolated vertices and wire edges hang in space without face support. |
| 20 | `lesson_05_20_manifold_geometry.svg` | default (col 16) | `                        <li><strong>Predictable modifier behavior</strong></li>` + `                    </ul>` + `                </div>` + blank + `                <h3>Non-Manifold Geometry Problems</h3>` (5 lines; `Predictable modifier behavior` is unique to the ✅ Manifold Characteristics card; the h3 `Non-Manifold Geometry Problems` is unique) | A small piece of mesh with the central shared edge highlighted in green. Every edge in a manifold mesh borders exactly two faces; that single rule is what makes a model watertight enough to 3D print, boolean, or simulate. |
| 23 | `lesson_05_23_density_decision_flowchart.svg` | default (col 16) | `                        <li><strong>Hero assets:</strong> Main characters or important objects</li>` + `                    </ul>` + `                </div>` + blank + `                <h3>The "Enough Detail" Principle</h3>` (5 lines; `Hero assets:` is unique to the 🎬 High-Poly Use Cases card; the h3 `The "Enough Detail" Principle` is unique) | A two-question decision tree for picking polygon density. Camera proximity drives the first split; deformation and instancing decide the second. The three terminal densities map to typical game, film, and print budgets. |

Figcaptions taken directly from the Phase 6 PRODUCTION specs section's "Suggested figcaption drafts" subsection above; refined inline if a better phrasing emerges during execution (deviation noted in post-integration Status bullet).

### Overlay decisions for #22, #25, #30 (locked)

**#22 `lesson_05_22_nonmanifold_example.png` — c22 overlay, one labeled red highlight on the 4 boundary edges (warning colorway):**

- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" role="img" aria-labelledby="c22-title c22-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` matching the BlenderMCP render's 1280x720 pixel dimensions.
- One red highlight ellipse around the 4 selected boundary edges that form the open top of the cube. Starting coordinates: `cx≈640, cy≈300, rx≈270, ry≈140` (cube centered in frame at view_distance=7.0 with the user-perspective rotation; the open-top rim forms a roughly diamond-shaped silhouette around the top face, so an ellipse encompasses all 4 highlighted edges). Stroke `#E63946` width 4, fill none. Eyeball-measure against the rendered PNG at execution before commit and nudge if needed.
- One leader line from the ellipse top edge up-and-right to a badge in the upper-right corner area of the frame, away from the cube body. Stroke `#E63946` width 3, stroke-linecap round.
- One marker circle r=6 at the badge-side end of the leader, fill `#E63946` (badge-side end per c28/c17/c27 precedent; 7 px from badge edge per c28 convention).
- One badge: rect rx=6 fill `#E63946` width ~220 height 46, with `<text>` `NON-MANIFOLD` font-size 22 weight 700 fill `#ffffff` (white text on red, per locked warning-label rule; precedent: FLIPPED badge in c11) text-anchor middle, system-ui font stack.
- Namespaced ids: `c22-highlight`, `c22-leader`, `c22-marker`, `c22-badge`, `c22-badge-text` plus `c22-title`/`c22-desc` accessibility nodes. Title: `Four boundary edges highlighted around the open top`. Desc: `A red elliptical outline marks the four selected non-manifold boundary edges around the open top of the cube, with a leader line connecting to a NON-MANIFOLD callout badge.`

Rationale: 4 short edges around an open rim are easy to miss against the cube silhouette. One labeled red highlight makes the selection unmistakable and reinforces the warning framing of the lesson section. Warning colorway (`#E63946` red highlight + red badge + white text) per the FLIPPED c11 precedent.

**#25 `lesson_05_25_shading_toggle_ui.png` — c25 overlay, one labeled green highlight on the menu rows (positive colorway):**

- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 W H" role="img" aria-labelledby="c25-title c25-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` where W and H are the PNG pixel dimensions to be measured at execution time via a quick `blender:execute_blender_code` Pillow block (`from PIL import Image; Image.open(r'\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_05_25_shading_toggle_ui.png').size`). Win+Shift+S capture dimensions vary; the c28 precedent (702x1255) and c27 precedent (~600x500 estimate, actual TBD) show the range.
- One green highlight ellipse around the Shade Smooth and Shade Flat menu rows together (one ellipse encompassing both, since they're adjacent menu items and the badge text describes both). Stroke `#4ADE80` width 4, fill none. Position to be eyeball-measured at execution after Pillow dimension read; the menu items typically sit near the top of the right-click context menu so the ellipse will sit in the upper portion of the snip.
- One leader line from the ellipse edge to a badge placed in an empty area of the snip (likely lower-right or right-side). Stroke `#4ADE80` width 3, stroke-linecap round.
- One marker circle r=6 at the badge-side end of the leader, fill `#4ADE80`.
- One badge: rect rx=6 fill `#4ADE80` width ~290 height 46 (matches Face Orientation badge width in c28, which is similar character count), with `<text>` `SHADE SMOOTH/FLAT` font-size 22 weight 700 fill `#0f1a14` (dark text on green, positive-label rule) text-anchor middle, system-ui font stack.
- Namespaced ids: `c25-highlight`, `c25-leader`, `c25-marker`, `c25-badge`, `c25-badge-text` plus `c25-title`/`c25-desc`. Title: `Shade Smooth and Shade Flat menu rows highlighted`. Desc: `A green elliptical outline marks the Shade Smooth and Shade Flat rows in the right-click object context menu, with a leader line connecting to a SHADE SMOOTH/FLAT callout badge.`

Rationale: a right-click context menu contains many items; the 2 shade options are pedagogically the focus. One labeled green highlight (positive colorway) isolates them without crowding the snip. Coordinates parameterized on PNG dimensions because the manual snip size varies; measure-then-commit pattern matches c28's after-the-fact dimension confirmation.

**#30 `lesson_05_30_realworld_topology_examples.png` — c30 overlay, three panel labels only (c29 no-highlights-no-leaders pattern):**

- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 720" role="img" aria-labelledby="c30-title c30-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` matching the 3-panel Pillow composite pixel dimensions.
- Three small green badges, one centered above each panel:
  - Panel 1 badge (`CUP`): centered at cx=640, cy=60, width 140 height 46 (rect x=570 y=37). Text `CUP` font-size 22 weight 700 fill `#0f1a14` text-anchor middle at x=640 y=68.
  - Panel 2 badge (`CHAIR`): centered at cx=1920, cy=60, width 170 height 46 (rect x=1835 y=37). Text `CHAIR` at x=1920 y=68.
  - Panel 3 badge (`BUST`): centered at cx=3200, cy=60, width 150 height 46 (rect x=3125 y=37). Text `BUST` at x=3200 y=68.
- Each badge: rect rx=6 fill `#4ADE80`, text font-size 22 weight 700 fill `#0f1a14` text-anchor middle system-ui font stack. Matches the c29 badge style exactly (only badge widths differ to fit the 3-to-5-char labels vs c29's SELECT CAP/INSET/EXTRUDE labels).
- No highlight ellipses, no leader lines, no marker circles. The 2px orange (`#FF6B00`) vertical dividers baked into the PNG at x=1279-1281 and x=2559-2561 already carry the panel boundaries (c29 precedent confirmed).
- Namespaced ids: `c30-badge-1` / `c30-badge-1-text`, `c30-badge-2` / `c30-badge-2-text`, `c30-badge-3` / `c30-badge-3-text` plus `c30-title`/`c30-desc`. Title: `Cup, chair, and bust panel labels`. Desc: `Three green callout badges label the three real-world topology examples: CUP on panel 1, CHAIR on panel 2, and BUST on panel 3.`

Rationale: same as c29. The 3-panel visual progression IS the message; orange dividers carry the boundaries; the 3 subjects are visually distinct (cup has handle, chair has 4 legs, bust has spherical head silhouette) but labels reinforce the figcaption's per-subject narrative for accessibility and skim-readers.

### Pre-existing em-dashes in/near anchor regions (preserve verbatim)

- **#25 anchor's first line** contains the em-dash in `<li><code>Shift + Ctrl + Alt + M</code> — Select non-manifold geometry</li>` (the ` — ` between the code shortcut and the description). MUST be preserved verbatim through the exact-match `Filesystem:edit_file` call; do not normalize to ` - ` or any other character.
- **#manifold-geometry intro `<p>`** (outside all Phase 6 anchors): `water-tight" meshes—models` em-dash; preserved by virtue of not being touched.
- **#manifold-geometry closing blockquote** (outside all Phase 6 anchors, well below the Phase 6 anchors): `non-manifold geometry often doesn't matter—it renders fine` em-dash; preserved by not being touched.
- **#summary 🎓 Key Takeaways gradient card** (outside all Phase 6 anchors, above the 📚 Quick Reference Guide card that #25 inserts into): contains 8 em-dashes (one after each `<strong>...</strong>` summary item, e.g., `three components</strong>—vertices (points)`); preserved by not being touched.
- **#summary 📚 Quick Reference Guide card body** (above #25's anchor inside the same card): contains em-dashes in `Triangle (Tri):</strong> 3 sides—stable, always flat`, `Quad:</strong> 4 sides—preferred, subdivision-friendly`, `N-gon:</strong> 5+ sides—avoid except on flat surfaces`, `Manifold:</strong> Every edge has exactly 2 faces—"water-tight" mesh`, and 4 more em-dashes in the Key Shortcuts ul itself (`<code>1</code> / <code>2</code> / <code>3</code> — Vertex / Edge / Face`, `<code>Alt + Click</code> — Select edge loop`, `<code>Shift + N</code> — Recalculate normals (fix flipped faces)`, `<code>Shift + Ctrl + Alt + M</code> — Select non-manifold geometry`). The last one is IN #25's oldText (preserve verbatim); the other 3 in the Key Shortcuts ul sit above #25's 3-line anchor (preserved by not being touched).
- **#summary final 🎯 gradient card body** (immediately below #30's anchor, outside the anchor): `surface now—every smooth character` em-dash; preserved because #30's anchor's last line is just the gradient-card `<div>` opener, not the card body.
- **#mesh-density 🎬 High-Poly Use Cases card content** (just above #23's anchor): no em-dashes I can see in the bullet items. The closing tags are clean.
- **#manifold-geometry ✅ Finding Non-Manifold Elements card body** (above #22's anchor inside the same card): `→` arrow characters (U+2192) in `Go to Select menu → Select All by Trait → Non-Manifold` and `Removing doubles with <code>M</code> → Merge by Distance`. The second `→` is IN #22's oldText anchor (preserve verbatim); the first `→` is above #22's anchor (preserved by not being touched).

All new content (figcaptions, alt attributes, overlay titles/descs, overlay badge text) uses commas, semicolons, parentheses, or middle-dot (`·` U+00B7) — never em-dashes — per locked rules.

### Inline SVG handling per file (#20, #21, #23)

For each standalone `.svg` file in `images/`:
1. Read full content via `Filesystem:read_text_file`.
2. Strip `color="#222"` from the root `<svg>` tag (the only attribute change).
3. Re-indent every line: original col 0 root → col 20; col 2 children → col 24; col 4 nested → col 28; col 6 deep nested → col 32.
4. Multi-line attribute continuations on `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` collapsed onto single lines (Phase 4 / Phase 5 INTEGRATION precedent).
5. Decorative ASCII-divider comments pruned (none expected in Phase 6 SVGs by author convention; the Phase 6 PRODUCTION status bullet does not list any decorative comments).
6. Short structural comments (`<!-- Top accent rail -->`, `<!-- Header band -->`, `<!-- Panel 1 -->`, `<!-- Hero polygon -->`, `<!-- Vertex glyphs -->`, `<!-- Annotation card -->`, `<!-- Dashed connector -->`, `<!-- Footer tip card -->`, etc.) kept.
7. Build the `newText` as: leading anchor lines + `<figure>` at col 16 + re-indented SVG content + `<figcaption>` at col 20 with locked figcaption text + closing `</figure>` at col 16 + blank line + trailing anchor lines (with the blank between `<h3>` and the card preserved if present).

#23 is 800x680 viewBox (the only Phase 6 SVG with a non-default viewBox; 800x680 because the vertical decision tree needs the extra height). #20 and #21 are 800x560 viewBox per the locked house style.

### Inline PNG handling per file (#22, #25, #30)

**#30 (default-depth wrapper, `<figure>` at col 16, viewBox 0 0 3840 720):**
- `<figure>` at col 16
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 20
- `<img loading="lazy" src="images/lesson_05_30_realworld_topology_examples.png" alt="A three-panel composite showing three real-world objects in Edit Mode with wireframe overlay enabled: a cup with handle on the left panel, a four-legged chair in the middle panel, and a low-poly bust head on the right panel; orange vertical dividers separate the panels." style="display: block; width: 100%; height: auto;">` at col 24
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 720" role="img" aria-labelledby="c30-title c30-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` at col 24
- Overlay children (title, desc, 3 badge rects, 3 badge texts) at col 28
- Close `</svg>` at col 24
- Close `</div>` at col 20
- `<figcaption>` at col 20 with the locked figcaption text
- `</figure>` at col 16

**#25 (col-20 deeper wrapper, inside 📚 Quick Reference Guide card at col 16, viewBox to be measured at execution):**
- `<figure>` at col 20
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 24
- `<img loading="lazy" src="images/lesson_05_25_shading_toggle_ui.png" alt="The right-click object context menu in Blender's 3D viewport showing Shade Smooth and Shade Flat options near the top, captured against a viewport background for context." style="display: block; width: 100%; height: auto;">` at col 28
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 W H" role="img" aria-labelledby="c25-title c25-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` at col 28 (W and H measured at execution)
- Overlay children (title, desc, ellipse, line, circle, rect, text) at col 32
- Close `</svg>` at col 28
- Close `</div>` at col 24
- `<figcaption>` at col 24 with the locked figcaption text
- `</figure>` at col 20

**#22 (col-20 deeper wrapper, inside ✅ Finding Non-Manifold Elements card at col 16, viewBox 0 0 1280 720):**
- `<figure>` at col 20
- Wrapper `<div style="position: relative; display: inline-block; max-width: 100%;">` at col 24
- `<img loading="lazy" src="images/lesson_05_22_nonmanifold_example.png" alt="A default cube in Blender's Edit Mode with its top face deleted; the four edges around the open top are selected and highlighted in orange as the result of running Select All by Trait Non Manifold." style="display: block; width: 100%; height: auto;">` at col 28
- Overlay `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" role="img" aria-labelledby="c22-title c22-desc" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" preserveAspectRatio="xMidYMid meet">` at col 28
- Overlay children (title, desc, ellipse, line, circle, rect, text) at col 32
- Close `</svg>` at col 28
- Close `</div>` at col 24
- `<figcaption>` at col 24 with the locked figcaption text
- `</figure>` at col 20

### HTML size projection per figure

- #30: ~3 KB (img reference + overlay SVG with 3 badge groups + title/desc, no leaders/highlights so leaner than c22 and c25; close to c29's actual +2,441 B in Phase 5 INTEGRATION)
- #25: ~3 to 3.5 KB (img reference + overlay SVG with ~10 child elements: title, desc, ellipse, line, circle, badge rect, badge text; matches c17's actual +2,360 B in Phase 5 plus a slightly longer badge text)
- #22: ~3 to 3.5 KB (similar structure to c25, similar element count; figure inside deeper-indent wrapper adds ~50 B of extra indent overhead)
- #21: ~13 KB (10,696 B standalone + ~2.5 KB re-indent overhead at the 20/24/28/32 expansion; matches the Phase 5 #18 ~12 KB at 10,041 B standalone)
- #20: ~11 KB (9,098 B standalone + ~2 KB re-indent overhead)
- #23: ~12 KB (9,758 B standalone + ~2 KB re-indent overhead; 800x680 viewBox doesn't add bytes vs 800x560 since most content is positioned absolutely)

**Projected total Phase 6 INTEGRATION delta: 45 to 46 KB.** HTML at end of Phase 6 INTEGRATION: ~279 to 281 KB (234,483 B → ~280 KB). Tracks the session.md "40 to 50 KB" projection at the middle of the range. Final HTML will be the largest in the course's image-integration program to date (Lesson 03 was 231.8 KB, Lesson 04 was 229.2 KB).

### Post-integration cleanup task

After all 6 integrations commit and verify, update `lesson_05_integration_progress.md`:
- Header `Current state` line → `Phase 6 INTEGRATION COMPLETE 2026-05-21. Lesson 05 image work fully complete at 30 of 30 integrated.` plus final HTML size and total Phase 6 INTEGRATION delta in KB
- New dated 2026-05-21 Status bullet at top of Status section in the verbose precedent style: per-figure HTML size progression, overlay decisions confirmed (3 PNG overlays placed, 3 SVGs inlined), indentation variants used (4 default + 2 deeper), em-dash discipline compliance, pre-existing em-dashes preserved verbatim (including the `Shift + Ctrl + Alt + M` em-dash in #25's anchor and the `→` arrow in #22's anchor), c25 PNG dimensions discovered at execution time, any other deviations from this plan
- 6 placement-table rows (#20, #21, #22, #23, #25, #30) flipped from `produced; not integrated` or `captured; not integrated` to `integrated`
- Phase plan row 6 status update prepending `**INTEGRATION COMPLETE 2026-05-21**` before the existing `**PRODUCTION COMPLETE 2026-05-21**` marker, with per-figure HTML deltas appended to the Notes column
- **Available section** collapsed from 6 to 0 with note that Lesson 05 image work is fully integrated
- **Missing section** stays at 0 (integration does not change which images exist on disk; both "on disk" and "integrated into HTML" now hold for all 30 images)
- **Next chat section** flipped from Phase 6 INTEGRATION to Lesson 05 close-out and handoff (write `lesson_05_completion_handoff.md`, then roll `status.md` to reflect Lesson 05 closed)

Then overwrite `session.md` to point at **Lesson 05 close-out and handoff** as the next chat (Lesson 05 image work fully complete at 30 of 30 integrated; close-out chat should write `lesson_05_completion_handoff.md` consolidating all 6 phases, then roll `status.md` to reflect Lesson 05 closed).

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
- Blender 5.1.1 op name: `bpy.ops.mesh.inset` (not `inset_faces`); the older `inset_faces` alias is no longer available (discovered 2026-05-21 during Phase 5 PNG #29 production)

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
| 8 | `lesson_05_08_density_comparison_sphere.svg` | SVG | `ds` | `#mesh-density` | After "fewer polygons" list, before Density Decision mermaid | integrated |
| 9 | `lesson_05_09_smooth_vs_flat_shading.svg` | SVG | `sf` | `#normals` | After Smooth Shading card, before "Try It Now: Smooth vs Flat" card | integrated |
| 10 | `lesson_05_10_face_normals_visualization.png` | PNG | `c10` | `#normals` | After Normal Analogy card, before "Why Normals Matter" h3 | integrated |
| 11 | `lesson_05_11_flipped_normals_problem.png` | PNG | `c11` | `#normals` | After "Flipped Normals: A Common Problem" list, before "Fixing Flipped Normals" card | integrated |
| 28 | `lesson_05_28_normals_overlay_toggle.png` | PNG | `c28` | `#normals` | After "Try It Now: See Face Normals" card, before "Flipped Normals" h3 | integrated |
| 12 | `lesson_05_12_triangle_diagram.svg` | SVG | `tri` | `#polygon-types` | After "Triangles (Tris)" card | integrated |
| 13 | `lesson_05_13_quad_diagram.svg` | SVG | `qd` | `#polygon-types` | After "Quads (Quadrilaterals)" card | integrated |
| 14 | `lesson_05_14_ngon_diagram.svg` | SVG | `ng` | `#polygon-types` | After "N-gons" card | integrated |
| 15 | `lesson_05_15_polygon_types_comparison.svg` | SVG | `pc` | `#polygon-types` | After polygon-types mermaid block | integrated |
| 16 | `lesson_05_16_sphere_topology_analysis.png` | PNG | `c16` | `#polygon-types` | Within "Try It Now: Identify Polygon Types" exercise | integrated |
| 27 | `lesson_05_27_select_by_trait_menu.png` | PNG | `c27` | `#polygon-types` | Near polygon-types exercise as UI reference | integrated |
| 17 | `lesson_05_17_edge_loop_selection.png` | PNG | `c17` | `#topology` | After "Edge Flow and Edge Loops" explanation | integrated |
| 18 | `lesson_05_18_good_bad_topology.svg` | SVG | `gb` | `#topology` | After "Why Topology Matters" card | integrated |
| 19 | `lesson_05_19_character_edge_flow.svg` | SVG | `cf` | `#topology` | After "Topology Patterns" explanation | integrated |
| 24 | `lesson_05_24_topology_pole_types.svg` | SVG | `tl` | `#topology` | After "Topology Patterns" card | integrated |
| 29 | `lesson_05_29_inset_ngon_creation.png` | PNG | `c29` | `#mesh-project` | In Exercise 6 section or n-gon-creation discussion | integrated |
| 20 | `lesson_05_20_manifold_geometry.svg` | SVG | `mf` | `#manifold-geometry` | After "What Is Manifold Geometry?" explanation | produced; not integrated |
| 21 | `lesson_05_21_nonmanifold_types.svg` | SVG | `nm` | `#manifold-geometry` | After "Non-Manifold Geometry Problems" card | produced; not integrated |
| 22 | `lesson_05_22_nonmanifold_example.png` | PNG | `c22` | `#manifold-geometry` | Within "Try It Now: Finding Non-Manifold Elements" exercise | captured; not integrated |
| 23 | `lesson_05_23_density_decision_flowchart.svg` | SVG | `df` | `#mesh-density` or `#summary` | Near "When to Use Different Densities" section | produced; not integrated |
| 25 | `lesson_05_25_shading_toggle_ui.png` | PNG | `c25` | `#summary` | Within "Essential Concepts Reference" card | captured; not integrated |
| 30 | `lesson_05_30_realworld_topology_examples.png` | PNG | `c30` | `#summary` or `#topology` | Summary section or end of Topology section | captured; not integrated |

**Totals:**
- 16 SVGs: #1, #2, #3, #4, #8, #9, #12, #13, #14, #15, #18, #19, #20, #21, #23, #24
- 14 PNGs: #5, #6, #7, #10, #11, #16, #17, #22, #25, #26, #27, #28, #29, #30

---

## Phase plan

| Phase | Section(s) | Images | SVGs | PNGs | Cadence | Notes |
|---|---|---|---|---|---|---|
| 1 | What Are Meshes? (`#what-are-meshes`) | #1, #2, #3, #4 | 4 | 0 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All four SVGs inlined into HTML; HTML grew from 82.4 KB (84,327 bytes) to 127.2 KB (130,291 bytes), delta +45,964 bytes (44.9 KB). |
| 2 | Building Blocks (`#mesh-components`) | #5, #6, #7, #26 | 0 | 4 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All four PNGs inlined into the `#mesh-components` section via four sequential `Filesystem:edit_file` cycles; HTML grew from 127.2 KB (130,291 bytes) to 129.4 KB (132,484 bytes), delta +2,193 bytes (2.1 KB). Selection-mode trio distributed across the Vertex/Edge/Face subsections (one PNG after each Analogy info card); #26 placed after the "Try It Now: Examine a Cube's Components" card, prefiguring the Component Count and Complexity table that follows. **PRODUCTION (2026-05-20):** All four PNGs captured in a single BlenderMCP session: #5 (519,404 bytes), #6 (521,784 bytes), #7 (520,322 bytes), #26 (572,177 bytes; 506 verts / 1010 edges / 506 faces with stats overlay enabled, 12 faces partial-selected). Selection-mode trio shares the default-cube scene with view rotation set to Blender's default user perspective; #26 used a fresh subdivided-and-extruded cube. |
| 3 | Density + Normals + Shading (`#mesh-density`, `#normals`) | #8, #9, #10, #11, #28 | 2 | 3 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All five Phase 3 images inlined into the `#mesh-density` and `#normals` sections via five sequential `Filesystem:edit_file` cycles; HTML grew from 129.4 KB (132,484 bytes) to 158.2 KB (161,951 bytes), delta +29,467 bytes (28.8 KB). Bottom-up integration order: #9 (+12,620), #11 (+2,825), #28 (+2,370), #10 (+2,353), #8 (+9,299). All three PNGs use the locked inline-stacked overlay pattern with namespaced `c10-*`, `c11-*`, `c28-*` ids; #28 overlay targets the visible Face Orientation toggle row (the manually captured snip does not include the Edit-Mode-only Normals icon row). **PRODUCTION (2026-05-20):** SVGs #8 (7,411 bytes) and #9 (9,991 bytes) authored; PNGs #10 (711,611 bytes) and #11 (693,316 bytes) captured via BlenderMCP; PNG #28 (149,601 bytes) captured manually via Win+Shift+S. |
| 4 | Polygon Types (`#polygon-types`) | #12, #13, #14, #15, #16, #27 | 4 | 2 | 1 production (SVG sub-chat) + 1 production (PNG sub-chat) + 1 integration chat | **INTEGRATION COMPLETE 2026-05-20.** All 6 Phase 4 images inlined into the `#polygon-types` section across 2 integration sessions (session 1: #16, #27, #15, #14; session 2: #13, #12); HTML grew 161,951 to 194,925 bytes (+32,974 B, 32.2 KB); placement table 6 rows flipped to `integrated`. Full per-figure HTML size progression, overlay decisions confirmed, and em-dash discipline compliance documented in the dated 2026-05-20 Phase 4 INTEGRATION status bullet above. **PRODUCTION COMPLETE 2026-05-20.** All 6 Phase 4 images now on disk. PNGs (sub-chat 2, this chat): #16 `lesson_05_16_sphere_topology_analysis.png` (1,125,758 B, 2560x720 side-by-side composite of two 1280x720 viewport renders of a default-density UV sphere in Edit Mode; left panel shows 32 pole triangles selected via `len(f.verts) == 3 and f.calc_center_median().z > 0` after the spec literal `z > 0.85` was found to select 96 faces including quad bands; right panel shows 128 equator quads via `abs(z) < 0.3` per spec literal; numpy/Blender-image-API composite since this Blender Python has no PIL; clean composite with no baked captions per the locked Option 2 decision at chat start), #27 `lesson_05_27_select_by_trait_menu.png` (207,045 B, manual Win+Shift+S capture of the Select > Select All by Trait expanded submenu; filename correct first try). SVGs (sub-chat 1, 2026-05-20): All four Phase 4 SVGs authored in the SVG sub-chat: #12 (4,461 B, `tri`, equilateral triangle apex-up with vertices (400,195), (270,415), (530,415)), #13 (4,657 B, `qd`, clean 280x280 square with vertices (260,165), (540,165), (540,445), (260,445)), #14 (5,443 B, `ng`, regular hexagon on circle radius 140 centered at (400,305) with the six locked vertex coordinates and an italic clarifying line at y=395), #15 (9,944 B, `pc`, synthesizing comparison grid in 800x680 viewBox with three mini-polygon cells across the top and a 5-column properties table with color-coded inline glyphs). Total Phase 4 SVG production: 24,505 bytes (24.0 KB) of new SVG content on disk. Two minor placement nudges in #15 vs the locked spec (italic takeaway from y=640 to y=625, footer card from y=655 to y=641; both -15 px give or take) so the 34-pixel-tall card fits inside the 800x680 viewBox. All four follow the locked house style with `color="#222"` retained on standalone files. **Production cadence relaxed for this phase only:** split into SVG sub-chat (closed 2026-05-20) and PNG sub-chat (pending) for context-budget reasons. PNG #16 (sphere topology PIL composite) and #27 (Select-By-Trait menu manual Win+Shift+S capture) deferred to the follow-on Phase 4 PRODUCTION (PNGs) chat. |
| 5 | Topology and Edge Flow (`#topology`) | #17, #18, #19, #24, #29 | 3 | 2 | 1 production + 1 integration chat | **INTEGRATION COMPLETE 2026-05-21.** All 5 Phase 5 images inlined into the `#topology` section (with #29 placed in `#mesh-project > Exercise 6` card per the locked plan; placement-table row 29 Section column corrected from `#topology` to `#mesh-project` during post-integration cleanup); HTML grew 194,925 to 234,483 bytes (+39,558 B, 38.6 KB) across the 5-figure cycle in 2 sessions (original chat 2 figures, continuation chat 3 figures); placement table 5 rows flipped to `integrated`. Full per-figure HTML size progression, overlay decisions confirmed, indentation variants (default-depth for #17, deeper variant for #29 inside Exercise 6 card matching the Phase 4 #16 precedent), and em-dash discipline compliance documented in the dated 2026-05-21 Phase 5 INTEGRATION status bullet above. **PRODUCTION COMPLETE 2026-05-21.** Mixed phase. SVG #18 (good-vs-bad topology comparison) plus #24 (pole types diagram) plus #19 (character edge flow, downgraded from PNG to SVG at Phase 5 plan-lock per decision 1 of the locked Phase 5 specs) anchor the conceptual side; PNGs #17 (edge loop selection) and #29 (inset n-gon creation 3-step composite) capture Blender workflow. All 5 files on disk with sizes: #24 (11,441 B), #18 (10,041 B), #19 (5,123 B), #17 (709,325 B), #29 (784,451 B). Three documented production deviations (panel label nudge in #24, head dimension nudge in #19, operator name correction in #29) detailed in the 2026-05-21 Status bullet above. |
| 6 | Manifold + Summary + Reference (`#manifold-geometry`, `#summary`) | #20, #21, #22, #23, #25, #30 | 3 | 3 | 1 production + 1 integration chat | **PRODUCTION COMPLETE 2026-05-21.** Mixed phase. SVGs #20 mf manifold_geometry (9,098 B; single-hero with annotation cards), #21 nm nonmanifold_types (10,696 B; 4-panel red-AVOID grid), #23 df density_decision_flowchart (9,758 B; 2-question vertical decision tree, 800x680 viewBox). PNGs #22 c22 nonmanifold_example (692,686 B; cube with top face deleted, 4 non-manifold edges selected via `bpy.ops.mesh.select_non_manifold()`), #25 c25 shading_toggle_ui (154,004 B; manual Win+Shift+S of right-click context menu in Object Mode), #30 c30 realworld_topology_examples (1,479,452 B; 3-panel composite cup + chair + low-poly bust with wireframe overlay enabled, Pillow composite via Phase 5 #29 pattern). Five documented deviations (#20 BOTTOM card reshape to wide single-row banner; #21 dropped redundant panel name labels plus cross-section visualization for TRIPLE panel plus pill copy rephrase; #23 dropped side-note callouts plus pill values reshape to density tiers; #22 `bpy.ops.mesh.delete` enum corrected to `'FACE'` not `'FACES'` for Blender 5.1.1; #30 cup loop cuts equal-spaced via `subdivide_edges` cuts=2 instead of spec-locked specific z values, and bust uses `bmesh.ops.bisect_plane` instead of `bpy.ops.mesh.bisect` for unambiguous local-coord semantics) detailed in the 2026-05-21 Phase 6 PRODUCTION status bullet above. All 30 Lesson 05 images now on disk for the first time. Final phase closes the lesson after Phase 6 INTEGRATION. |

**Total: 30 images = 4 + 4 + 5 + 6 + 5 + 6**

**HTML size projection:**

- Starting: 82.4 KB (84,327 bytes)
- Per-image growth average (extrapolated from Lessons 03 and 04): ~7-9 KB per inserted image including figure wrapper, alt text, figcaption, and (for SVGs) re-indented inline content; PNGs with overlay add ~3-5 KB for the overlay SVG on top of the image reference
- Projected per-phase deltas: Phase 1 ~30 KB; Phase 2 ~20 KB; Phase 3 ~40 KB; Phase 4 ~50 KB; Phase 5 ~40 KB; Phase 6 ~50 KB
- Projected final: 82.4 KB + ~230 KB ≈ 310-340 KB
- Comparable to Lesson 03 (231.8 KB) and larger than Lesson 04 (229.2 KB); biggest lesson in the course's image-integration program to date

---

## Available section

6 of 30 images currently produced or captured but not integrated, all from Phase 6 PRODUCTION (closed 2026-05-21):

- SVGs (3): #20 mf manifold_geometry (9,098 B), #21 nm nonmanifold_types (10,696 B), #23 df density_decision_flowchart (9,758 B)
- PNGs (3): #22 c22 nonmanifold_example (692,686 B), #25 c25 shading_toggle_ui (154,004 B), #30 c30 realworld_topology_examples (1,479,452 B)

Total new content on disk: 2,355,694 bytes (2.25 MB). The next Phase 6 INTEGRATION chat will inline all 6 into `lesson_05_understanding_meshes_and_geometry.html`, closing Lesson 05 image work at 30 of 30 integrated.

---

## Missing section

0 of 30 images missing. **Lesson 05 has all 30 images on disk for the first time as of Phase 6 PRODUCTION close 2026-05-21.**

---

## ID prefix registry

Planned per-image SVG and PNG-overlay id prefixes for the Lesson 05 page. Each prefix unique on the page; collisions with prefixes from other lessons are fine since each lesson's HTML is a separate document.

**Inline SVGs (16):**
- `mc` (#1 Mesh Components), `lp` (#2 Lowpoly progression), `mo` (#3 Mesh vs object), `pt` (#4 Primitive types) — **used in standalone files, will namespace on inline**
- `ds` (#8 Density sphere), `sf` (#9 Smooth vs flat)
- `tri` (#12 Triangle), `qd` (#13 Quad), `ng` (#14 N-gon), `pc` (#15 Polygon comparison)
- `gb` (#18 Good vs bad topology), `cf` (#19 Character edge flow), `tl` (#24 Topology poles)
- `mf` (#20 Manifold), `nm` (#21 Non-manifold types)
- `df` (#23 Density flowchart)

**PNG annotation overlays (14 candidates; some may not need overlays after the production chat decides):**
- `c5`, `c6`, `c7`, `c10`, `c11`, `c16`, `c17`, `c22`, `c25`, `c26`, `c27`, `c28`, `c29`, `c30`

No collisions on the Lesson 05 page. The `c10` and `c11` prefixes are reused from Lesson 04's pattern (different page, different file — no actual collision). The `c19` PNG-overlay prefix originally planned for #19 was dropped at Phase 5 plan-lock when #19 was type-flipped to SVG (now uses inline-SVG prefix `cf` instead).

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

**Edge loop selection (#17):** cylinder in Edit Mode with one horizontal edge loop selected via `bpy.ops.mesh.loop_select()` or the bmesh edge-loop walk. Capture at an angle showing the selected ring clearly. **PRODUCED 2026-05-21:** cylinder with vertices=24, depth=2.4; a horizontal loop cut at z=0 was added via bmesh subdivide on the vertical side-edges first (the default cylinder has no middle ring); then the 24 middle-ring edges were selected via the locked filter `len(e.link_faces) == 2 and all(abs(v.co.z) < 0.05 for v in e.verts)`.

**Sphere topology analysis (#16):** UV sphere in Edit Mode, two captures (or one capture with side-by-side panels) — one with triangle faces at the poles selected, another with quad faces in the middle band selected. The captures could share scene setup with a selection-state difference between them.

**Non-manifold example (#22):** cube with one face deleted, non-manifold edges selected via `bpy.ops.mesh.select_non_manifold()`. Capture in Edit Mode.

**Inset n-gon creation (#29):** 3-panel sequence — (1) cube face selected, (2) after inset, (3) after deleting inner face. Could be three separate BlenderMCP captures composited into a single PNG, or three frames of a single scene with overlay-driven step indicators. Decision deferred to Phase 5 production. **PRODUCED 2026-05-21 as 3-capture Pillow composite of a 32-vertex cylinder cap going through select-cap → inset → extrude (not delete; the spec landed on extrude-up by 0.3 to leave the n-gon visible as a stepped feature). Blender 5.1.1 uses `bpy.ops.mesh.inset` not `inset_faces`.**

**Character edge flow (#19):** the trickiest PNG. Requires a stylized head model with clean topology and colored edge loops visible. Options: (a) use a stock free head mesh from Polyhaven or Sketchfab (Lesson 03 used similar approach for some PNGs), (b) build a simple low-poly head in BlenderMCP, (c) capture from an existing community model with attribution. Decision deferred to Phase 5 production; if the bridge approach proves too expensive in production time, downgrade #19 to a stylized SVG instead and adjust the SVG/PNG counts. **DOWNGRADED to SVG at Phase 5 plan-lock 2026-05-20; SVG produced 2026-05-21 with id prefix `cf` (5,123 bytes). Stylized character head outline with orange `#FF6B00` edge loops around eyes, mouth, and cheek zones plus three annotation cards.**

**Real-world topology examples (#30):** 3-panel showing cup, chair, and head with clean topology. Similar challenge to #19. Options: build simple low-poly examples in BlenderMCP and capture wireframes, or use stock meshes. Decision deferred to Phase 6 production.

---

## Next chat

**Recommended:** Phase 6 INTEGRATION. Final Lesson 05 image integration cycle. 6 Phase 6 images (all produced 2026-05-21) to inline into `lesson_05_understanding_meshes_and_geometry.html`. Closes Lesson 05 image work at 30 of 30 integrated.

Key orientation for the next chat:

- 6 images to integrate: 3 SVGs (#20 mf manifold_geometry 9,098 B, #21 nm nonmanifold_types 10,696 B, #23 df density_decision_flowchart 9,758 B) and 3 PNGs (#22 c22 nonmanifold_example 692,686 B, #25 c25 shading_toggle_ui 154,004 B, #30 c30 realworld_topology_examples 1,479,452 B). All 6 on disk and verified.
- Target sections: `#manifold-geometry` for #20, #21, #22; `#summary` (or `#mesh-density`) for #23 and #25; `#summary` or `#topology` for #30. Anchor decisions to lock at Phase 6 INTEGRATION plan time after a fresh HTML scan.
- Suggested integration order: bottom-up by line position in the HTML for line-number stability (likely #30 last in file, then #25, then #23, then #22, then #21, then #20 first in file; confirm at plan time).
- Overlay decisions to resolve at Phase 6 INTEGRATION plan-lock: c22 single green ellipse around the 4 selected boundary edges plus a `NON-MANIFOLD` badge; c25 green ellipse around the Shade Smooth and Shade Flat menu rows plus a `SHADE SMOOTH/FLAT` badge; c30 three small green badges centered above each panel (`CUP`, `CHAIR`, `BUST`) using the c29 no-highlights-no-leaders pattern since the orange panel dividers already carry panel boundaries.
- Projected HTML delta: roughly 40 to 50 KB total across 6 figures (per session.md projection). Projected post-integration HTML: roughly 270 to 280 KB. Largest in the course's image-integration program to date.
- Locked rules carry forward unchanged: WSL paths only (`\\wsl$\Ubuntu\`), `Filesystem:edit_file` with dry-run-then-commit-then-verify cycle, plain `<figure>`/`<figcaption>` wrapper with no class, SVGs at col 16/20/24/28 indent ladder with `color="#222"` stripped on inline, PNG overlays at the lean `inset: 0` form with namespaced `c{N}-*` ids, no em-dashes in new content (figcaptions/alt/overlay text), middle-dot `·` for separation in subheads, pre-existing em-dashes preserved verbatim.
- Read this doc's "Phase 6 PRODUCTION specs (locked 2026-05-21)" section for figcaption drafts and the inline image pattern reminder; read the Phase 5 INTEGRATION plan section as the closest template for the Phase 6 INTEGRATION plan.

**Alternative next steps if a different chat focus is preferred:**

- Lesson 05 full integrated set browser QA (verify all 24 currently-integrated figures render correctly in light and dark mode at desktop and mobile widths; would close out QA debt for Phases 1-5 in one pass before Phase 6 INTEGRATION runs)
- Lesson 05 docs cleanup (prune the now-history Phase 4 INTEGRATION plan, Phase 5 PRODUCTION specs, Phase 5 INTEGRATION plan, and Phase 6 PRODUCTION specs sections; consolidate older Status bullets into archive form)
- Lesson 04 docs cleanup follow-on (deeper archive of intermediate files now in `cleanup/`)
