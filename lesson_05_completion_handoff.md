# Lesson 05 Image Production and Integration: COMPLETE

Lesson 05 image work is closed. All 30 images produced or captured; all 30 integrated into `lesson_05_understanding_meshes_and_geometry.html`. Final HTML size: 272.9 KB (279,445 bytes), up from 82.4 KB (84,327 bytes) at integration start (+190.5 KB / +195,118 bytes across six phases). Lesson span: 2026-05-19 (planning) through 2026-05-21 (Phase 6 INTEGRATION sub-chat 3). Largest single-lesson HTML in the image-integration program to date (Lesson 03 closed at 231.8 KB, Lesson 04 at 229.2 KB).

## What was produced

30 of 30 images per `lesson_05_image_requirements.md`, after one in-flight type-flip during Phase 5 PRODUCTION. 16 SVGs (inlined into HTML) plus 14 PNGs (BlenderMCP bridge renders, manual Win+Shift+S snips, and Pillow composites). Files at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.

The original planning split (locked 2026-05-19) was 15 SVGs and 15 PNGs. During Phase 5 PRODUCTION it became clear that #19 character edge flow could not realistically be captured as a Blender render: building clean character topology is hours of skilled manual work, Polyhaven has no character assets, and Sketchfab license complexity is a no-go. #19 was flipped from PNG to SVG with a new `cf` id prefix; the final split sits at 16 SVGs and 14 PNGs.

SVGs (16):

- #1 `lesson_05_01_mesh_components_labeled.svg`, 6,853 bytes, id prefix `mc`; labeled cube showing the three building blocks (vertex, edge, face) with the 1/2/3 keypress prompt
- #2 `lesson_05_02_lowpoly_highpoly_progression.svg`, 10,472 bytes, id prefix `lp`; four spheres at 8/16/32/64 segments noting that doubling segments roughly quadruples the face count
- #3 `lesson_05_03_mesh_vs_object_properties.svg`, 8,414 bytes, id prefix `mo`; paired-panel container-vs-mesh-data layout with Object Mode and Edit Mode framing
- #4 `lesson_05_04_primitive_types_grid.svg`, 12,957 bytes, id prefix `pt`; 2x4 grid of Shift+A primitives at 800x680 canvas, each labeled with its default vertex count (Plane 4, Cube 8, UV Sphere 482, Ico Sphere 42, Cylinder 64, Cone 33, Torus 576, Suzanne 507)
- #8 `lesson_05_08_density_comparison_sphere.svg`, 7,411 bytes, id prefix `ds`; paired-panel low-poly vs high-poly with use-case footers (Games, VR, backgrounds, mobile vs Film, product viz, hero close-ups, sculpting)
- #9 `lesson_05_09_smooth_vs_flat_shading.svg`, 9,991 bytes, id prefix `sf`; paired-panel 12-gon silhouettes with 12 green per-face normal arrows on the left (flat) and 12 green per-vertex normal arrows radiating from a smooth gradient fill on the right (smooth)
- #12 `lesson_05_12_triangle_diagram.svg`, 4,461 bytes, id prefix `tri`; apex-up equilateral triangle hero with three property pills and a footer tip about GPU tessellation
- #13 `lesson_05_13_quad_diagram.svg`, 4,657 bytes, id prefix `qd`; clean 280x280 square hero with four property pills and a footer tip about Subdivision Surface
- #14 `lesson_05_14_ngon_diagram.svg`, 5,443 bytes, id prefix `ng`; regular hexagon hero with an italic clarifying line ("Hexagon shown here. Any face with 5 or more sides counts as an n-gon.") plus property pills and a Select By Trait footer tip
- #15 `lesson_05_15_polygon_types_comparison.svg`, 9,944 bytes, id prefix `pc`; 800x680 canvas with three mini-polygon cells at the top and a 5-column properties table (TYPE, SIDES, ANIMATION, SUBDIVISION, PRODUCTION USE) using inline `<tspan>` color overrides for `✓`, `✓✓`, `⚠`, `✗` glyphs
- #18 `lesson_05_18_good_bad_topology.svg`, 10,041 bytes, id prefix `gb`; paired-panel comparison with a green-header 6x6 quad grid plus one yellow 5-pole on the left and a red-header chaotic mix (6-pole with red spoke edges, two triangles, one hexagonal n-gon) on the right
- #19 `lesson_05_19_character_edge_flow.svg`, 5,123 bytes, id prefix `cf`; stylized character head with orange edge loops around eye, mouth, and cheek zones plus three annotation cards (EYE LOOPS, MOUTH LOOPS, CHEEK FLOW) connected by dashed lines (PNG-to-SVG type-flip, see lessons-learned below)
- #20 `lesson_05_20_manifold_geometry.svg`, 9,098 bytes, id prefix `mf`; single-panel hero showing a 2x2 quad patch with one central vertical edge highlighted green to demonstrate the "every edge borders exactly 2 faces" manifold rule, plus three annotation cards (LEFT "EXACTLY 2 FACES", RIGHT "WATERTIGHT", BOTTOM "3D-PRINTABLE · BOOLEAN-SAFE · SIM-READY")
- #21 `lesson_05_21_nonmanifold_types.svg`, 10,696 bytes, id prefix `nm`; 4-panel grid with red AVOID header bars across all four (BOUNDARY, TRIPLE, ISOLATED, WIRE) showing the four canonical non-manifold defect types
- #23 `lesson_05_23_density_decision_flowchart.svg`, 9,758 bytes, id prefix `df`, 800x680 canvas; 2-question vertical decision tree (root "Will the camera get close?", branches to "Animated or deformed?" and "Many copies in scene?") feeding 4 terminal density boxes (HIGH green, MEDIUM yellow, LOW blue, LOW instanced blue) with 3 synthesis pills mapping GAMES/FILM/PRINT to density tiers; uses a single `<marker>` def for all 6 arrowhead lines
- #24 `lesson_05_24_topology_pole_types.svg`, 11,441 bytes, id prefix `tl`; 4-panel pole grid with color-coded header bars (3-pole green OK, 4-pole green BEST, 5-pole yellow OK, 6-pole red AVOID), 3-layer central vertex glyphs, N peripheral 2-layer dots at radius 55, plus pills BEST/OK/AVOID and a footer Select By Trait tip

PNGs (14):

- #5 `lesson_05_05_vertex_selection_mode.png`, 519,404 bytes; default cube in Edit Mode with the 4 top-face vertices selected, no overlay
- #6 `lesson_05_06_edge_selection_mode.png`, 521,784 bytes; default cube with the 3 edges meeting at the top-front-right corner selected, no overlay
- #7 `lesson_05_07_face_selection_mode.png`, 520,322 bytes; default cube with the front and top faces selected, no overlay
- #10 `lesson_05_10_face_normals_visualization.png`, 711,611 bytes, c10 overlay prefix; 16-segment UV sphere in Edit Mode with face-normals overlay enabled (`normals_length=0.3`), green leader line and "Face normal" badge pointing at one of the radiating normal arrows
- #11 `lesson_05_11_flipped_normals_problem.png`, 693,316 bytes, c11 overlay prefix; same sphere with face-orientation overlay on instead, the top 48 of 128 faces flipped via `bmesh.ops.reverse_faces` to show the red flipped cap against the blue correctly-oriented body; red ellipse and FLIPPED warning badge
- #16 `lesson_05_16_sphere_topology_analysis.png`, 1,125,758 bytes, 2560x720 composite, no overlay; default UV sphere with 32 pole triangles selected on the left panel and 128 equator quads selected on the right panel (the selection contrast carries the message on its own; no callout overlay needed)
- #17 `lesson_05_17_edge_loop_selection.png`, 709,325 bytes, c17 overlay prefix; cylinder with a constructed horizontal middle ring (added via `bmesh.ops.subdivide_edges`) and all 24 of its edges selected in edge select mode; green ellipse around the visible ring plus EDGE LOOP badge with leader line
- #22 `lesson_05_22_nonmanifold_example.png`, 692,686 bytes, c22 overlay prefix; default cube with the top face deleted, the 4 resulting boundary edges selected via `bpy.ops.mesh.select_non_manifold()`; red ellipse around the open top plus NON-MANIFOLD warning badge
- #25 `lesson_05_25_shading_toggle_ui.png`, 154,004 bytes, 454x1624 portrait, c25 overlay prefix; manual Win+Shift+S snip of the default cube's right-click object context menu in Object Mode showing Shade Smooth and Shade Flat options; green ellipse around both rows plus SHADE SMOOTH/FLAT positive badge
- #26 `lesson_05_26_component_count_ui.png`, 572,177 bytes, no overlay; subdivided cube (506 verts, 1010 edges, 506 faces total) with 12 faces partial-selected, viewport stats overlay enabled to show the selection-vs-total readout
- #27 `lesson_05_27_select_by_trait_menu.png`, 207,045 bytes, c27 overlay prefix; manual Win+Shift+S snip of the Select > Select All by Trait expanded submenu in the 3D viewport header; green ellipse around the Faces by Sides row plus green badge
- #28 `lesson_05_28_normals_overlay_toggle.png`, 149,601 bytes, 702x1255 portrait, c28 overlay prefix; manual Win+Shift+S snip of the Viewport Overlays dropdown Geometry section; green ellipse around the Face Orientation toggle row plus green badge (pivoted from the locked spec's Normals icon row, which is Edit-Mode-only and was not visible in the captured Object-Mode dropdown)
- #29 `lesson_05_29_inset_ngon_creation.png`, 784,451 bytes, 3840x720 composite, c29 overlay prefix; 3-panel sequence on a default 32-side cylinder (top cap selected as a 32-gon, after `bpy.ops.mesh.inset(thickness=0.3)`, after extruding the inner inset face upward by 0.3); three green badges centered above each panel (SELECT CAP, INSET, EXTRUDE), with 2px `#FF6B00` vertical dividers baked into the PNG at x=1280 and x=2560
- #30 `lesson_05_30_realworld_topology_examples.png`, 1,479,452 bytes, 3840x720 composite, c30 overlay prefix; 3-panel sequence (cup with rim and base loop cuts plus torus handle, simple six-cube chair, stylized bust UV sphere with 4 bisect-plane cuts and tapered jaw, no facial features per the type-flip lesson learned in #19); three small green badges centered above each panel (CUP, CHAIR, BUST), with baked-in `#FF6B00` vertical dividers

## What was integrated

Six phases across roughly 17 chats (planning chat plus per-phase production and integration chats, with several phases split across sub-chats due to context-budget pressure). Each phase placed its figures in document order using the locked inline pattern. HTML grew from 82.4 KB to 272.9 KB.

| Phase | Section(s) | Figures | Cumulative HTML size | Phase delta |
|---|---|---|---|---|
| 1 | `#what-are-meshes` | #1 mc, #2 lp, #3 mo, #4 pt (all SVG) | 130,291 B (127.2 KB) | +45,964 B (+44.9 KB) |
| 2 | `#mesh-components` | #5, #6, #7, #26 (all PNG, no overlays) | 132,484 B (129.4 KB) | +2,193 B (+2.1 KB) |
| 3 | `#mesh-density`, `#normals` | #8 ds, #9 sf (SVG); #10 c10, #11 c11, #28 c28 (PNG with overlays) | 161,951 B (158.2 KB) | +29,467 B (+28.8 KB) |
| 4 | `#polygon-types` | #12 tri, #13 qd, #14 ng, #15 pc (SVG); #16 (PNG no overlay), #27 c27 (PNG with overlay) | 194,925 B (190.4 KB) | +32,974 B (+32.2 KB) |
| 5 | `#topology` | #18 gb, #19 cf, #24 tl (SVG); #17 c17, #29 c29 (PNG with overlays) | 234,483 B (228.9 KB) | +39,558 B (+38.6 KB) |
| 6 | `#manifold-geometry`, `#summary` | #20 mf, #21 nm, #23 df (SVG); #22 c22, #25 c25, #30 c30 (PNG with overlays) | 279,445 B (272.9 KB) | +44,962 B (+43.9 KB) |

Per-phase narrative lives in `lesson_05_integration_progress.md` (Status section). Each chat's entry includes per-figure HTML deltas, overlay decisions, em-dash discipline notes, deviations from spec, and BlenderMCP discoveries.

## ID-prefix registry for this page

16 inline SVG prefixes plus 9 PNG annotation overlay namespaces, no collisions:

- Inline SVGs: `mc` (#1), `lp` (#2), `mo` (#3), `pt` (#4), `ds` (#8), `sf` (#9), `tri` (#12), `qd` (#13), `ng` (#14), `pc` (#15), `gb` (#18), `cf` (#19), `mf` (#20), `nm` (#21), `df` (#23), `tl` (#24)
- PNG annotation overlays: `c10` (#10), `c11` (#11), `c17` (#17), `c22` (#22), `c25` (#25), `c27` (#27), `c28` (#28), `c29` (#29), `c30` (#30)
- PNGs without overlays (no `c{N}-` prefix): #5, #6, #7, #16, #26

The `df` prefix on #23 owns a single `<marker id="df-arrow">` def that all 6 decision-tree arrow lines reference; this is the first SVG in the Lesson 03/04/05 image program to need an explicit marker def for arrowheads (Phase 3 #9 used per-arrow `<polygon>` triangles instead, which is heavier).

## Locked inline pattern (carry forward to Lesson 06 and beyond)

Identical to the Lesson 04 close-out. Restated here so this file stands alone:

- Plain `<figure>` plus `<figcaption>` wrapper, no class. `styles/main.css` already styles both.
- PNGs: `<img src="images/..." alt="..." loading="lazy">` inside the figure, with descriptive alt text.
- Inline SVGs: re-indent to 20-space content depth. `<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<img>`, `<figcaption>` at column 20; multi-line svg attribute continuations at column 25; SVG body at column 22; `<g>` children at column 24; multi-line `<rect>`, `<line>`, `<polygon>`, `<text>`, `<desc>` continuations collapsed onto single lines during inlining; deeper nesting at columns 28 and 32 (for transform-group contents and nested-transform-group contents respectively).
- **Strip the `color="#222"` attribute** from the root `<svg>` when inlining. That attribute locks `currentColor` and breaks dark mode when inlined. The standalone `.svg` file in `images/` keeps the attribute for fallback rendering; only the inline copy in HTML drops it.
- 2 to 3 line anchors for `oldText` so each insertion point is unique within the file. Longer anchors used when needed (4-line in Phase 4 INTEGRATION; up to 7 lines in Phase 5 INTEGRATION for #18; 8-line anchor in Phase 6 INTEGRATION plan for #21).
- Structural comments preserved during inlining (`<!-- Top accent rail -->`, `<!-- Header band -->`, `<!-- Panel 1 -->`, `<!-- Hero polygon: ... -->`, `<!-- Vertex glyphs -->`, etc.). Decorative ASCII-divider author comments (`====== Block Title ======`) pruned.
- `<defs>` and `<marker>` blocks preserved with proper nesting (Phase 6 #23 precedent for arrowhead markers).
- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note. Pre-existing em-dashes in source content are preserved verbatim through exact-match `Filesystem:edit_file` anchors.

### Deeper-indent variant (NEW pattern reinforced in Lesson 05)

When a figure is placed inside a card that opens at column 16, the figure itself opens at column 20 and every level shifts deeper by 4 spaces: figure col 20, wrapper div col 24, img and overlay svg col 28, overlay children col 32, figcaption col 24, figure close col 20.

Lesson 04 introduced this pattern at Phase 4 with #16 inside the Try-It-Now card. Lesson 05 reinforced it in three places:

- Phase 5 #29 inside the Exercise 6 card in `#topology`
- Phase 6 #25 inside the 📚 Quick Reference Guide card in `#summary`
- Phase 6 #22 inside the ✅ Finding Non-Manifold Elements card in `#manifold-geometry`

Section-depth figures (anchored after a `<h3>` and a card boundary, not nested inside a card) use the default-depth variant: figure col 16, svg root or wrapper div col 20, svg children or img and overlay svg col 24, overlay children or deeper svg col 28 and 32, figcaption col 20.

Lesson 05 totals: 4 default-depth + 2 deeper-indent variants in Phase 6 alone; across all 6 phases, roughly 28 default-depth and 2 deeper-indent figures (the 2 deeper-indent counts match the 2 Phase 5 inside-card and Phase 6 inside-card placements; the rest sit at section depth).

## Inline-stacked PNG overlay pattern (locked from Lesson 04, refined across Lesson 05 Phases 3 through 6)

When a captured PNG needs annotation callouts that scale with the image and survive dark mode, stack an inline SVG over the `<img>` rather than baking the callouts into a flattened raster. Pattern (default-depth variant):

```html
<figure>
    <div style="position: relative; display: inline-block; max-width: 100%;">
        <img src="images/lesson_NN_XX_name.png"
             alt="..."
             loading="lazy"
             style="display: block; max-width: 100%; height: auto; margin: 0;">
        <svg viewBox="0 0 PNG_W PNG_H"
             style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"
             preserveAspectRatio="xMidYMid meet"
             aria-hidden="true">
            <!-- callouts in c{N}- prefixed ids -->
        </svg>
    </div>
    <figcaption>...</figcaption>
</figure>
```

Key details (Lesson 04 baseline, refined by Lesson 05):

- The wrapper div needs `position: relative; display: inline-block; max-width: 100%` so it sizes to the image and provides the absolute-positioning context.
- The `<img>` needs the inline `style` to override the global `img { margin: var(--spacing-md) auto; }` rule that would otherwise blow out the wrapper's natural sizing.
- The overlay SVG viewBox must exactly match the PNG pixel dimensions (`viewBox="0 0 PNG_W PNG_H"`) so callout coordinates are pixel-accurate against the source capture, even though the rendered SVG scales fluidly with the image. Lesson 05 used 1280x720 (most renders), 2560x720 (#16 composite), 3840x720 (#29 and #30 composites), 702x1255 (#28 portrait snip), and 454x1624 (#25 portrait snip; confirmed at execution time via `PIL.Image.open(path).size`).
- `pointer-events: none` on the overlay so clicks reach the image.
- Namespace overlay ids `c{N}-*` where N is the image number, to avoid `<title>`/`<desc>`/marker-id collisions with the inline SVGs on the page.
- `preserveAspectRatio="xMidYMid meet"` ensures the overlay scales uniformly with the underlying image.
- `inset: 0` shorthand for `top: 0; left: 0; right: 0; bottom: 0` (locked from the c28 precedent in Phase 3 and confirmed by all subsequent overlays). About 30 bytes leaner per overlay than the longer form.
- Preview overlay geometry against both the full-resolution PNG and a downscaled lesson-display-width version (around 800px wide) with PIL before committing the HTML edit. Coordinates look fine at full res but get illegible if labels are too small or arrows too thin at display width.

### Overlay element conventions (locked across Phases 3 through 6)

- Highlight shape (ellipse or circle) fill `none`, stroke `#4ADE80` width 4 (positive label) or `#E63946` width 4 (warning label).
- Leader line stroke matching the highlight color, stroke-width 3, stroke-linecap `round`.
- Small marker circle r=6 at one end of the leader (badge-side end per the c28 / c17 / c27 pattern when a highlight is present; target-side end per the c11 pattern when there is no separate highlight). Marker sits 7 px from the badge edge per the c28/c17 convention.
- Badge rect rx=6, fill `#4ADE80` for positive labels (Face normal, Face Orientation, CORRECT, Faces by Sides, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST) or `#E63946` for warning labels (FLIPPED, NON-MANIFOLD).
- Badge text font-family `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, font-size 22, font-weight 700, text-anchor middle, fill `#0f1a14` on green or `#ffffff` on red.

### No-highlights composite overlay variant (Phase 5 #29, Phase 6 #30 precedent)

When a captured PNG is a horizontally-divided composite (multiple panels with 2px `#FF6B00` vertical dividers baked into the raster), small green badges centered above each panel work better than per-panel highlights with leaders. The panel boundaries are already drawn by the baked-in dividers, so a highlight ring would be redundant. The badges sit at fixed cx positions matching panel centers.

- #29 (3 panels at 1280-wide each): `c29-badge-1` SELECT CAP at cx=640, `c29-badge-2` INSET at cx=1920, `c29-badge-3` EXTRUDE at cx=3200, all green
- #30 (3 panels at 1280-wide each): `c30-badge-1` CUP at cx=640, `c30-badge-2` CHAIR at cx=1920, `c30-badge-3` BUST at cx=3200, widths 140/170/150 to fit 3-to-5-character labels

## Tool selection rules (LOCKED, applies to all future lessons)

Tools are deferred. Call `tool_search` before invoking. The previous chat's compaction summary may say a tool was unavailable; that was true for *that* chat, not necessarily the current one. Always verify your own toolset rather than inheriting the assumption.

**For new file writes:** `Filesystem:write_file` (load via `tool_search` for "filesystem write"). Do NOT use Claude's built-in `create_file`. The built-in writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths. It reports "File created successfully" but the file never appears on disk. Always verify with `Filesystem:get_file_info` after every write.

**For edits to existing files:** `Filesystem:edit_file` with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.

**For PNG capture via Blender:** lowercase `blender:execute_blender_code` (uppercase hangs). Full pipeline recipes documented in `lesson_02_next_chat_handoff.md` (still valid reference) plus the addon-safe variant (Lesson 04 Phase 4 PRODUCTION) plus the OpenGL viewport render path (Lesson 04 Phases 2 through 6 and Lesson 05 Phases 2 through 6 verified): find the first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Note: `blender:execute_blender_code` calls preserve Blender state (scene, objects, selection, mode) across calls, but Python local variables do NOT persist; re-find the VIEW_3D area and region in each block.

**For pie menus and other transient UI Blender's render API cannot reach:** manual Win+Shift+S capture into `images/` directly. Lesson 04 #9 (Shift+S snap pie menu), Lesson 05 #27 (Select By Trait submenu), Lesson 05 #28 (Viewport Overlays dropdown), and Lesson 05 #25 (right-click object context menu) are the canonical examples.

**For other raster sources:** Canva and Adobe for creativity are available as MCP connectors when AI generation is the right call. For Blender-specific UI screenshots, the live MCP Blender bridge remains the strongly preferred sourcing route; AI generation is a fallback only.

## LOCKED RULES carried forward from Lesson 04

### No `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere in BlenderMCP capture code

This call reloads Blender's startup file, which has the side effect of unregistering all installed addons including the BlenderMCP addon itself. The bridge dies mid-execution. Originally discovered during Lesson 04 Phase 4 production. Lesson 05 Phases 2 through 6 carried the rule forward without incident.

Safe alternative for state setup: clean Blender state manually inside the same code payload via `bpy.data.objects.remove(obj, do_unlink=True)`, `bpy.context.scene.cursor.location = (0, 0, 0)`, orphan-mesh cleanup, etc.

### BLENDER_EEVEE_NEXT to BLENDER_EEVEE fallback

The current Blender 5.1.1 exposes only the legacy engine enum `('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')` without `BLENDER_EEVEE_NEXT`. Try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum-value error, fall back to `BLENDER_EEVEE`. Both produce visually comparable output for lesson render needs. Originally discovered during Lesson 04 Phase 6 production. Lesson 05 Phases 2, 3, 5, and 6 all triggered the fallback as expected.

### Four-state placement-table legend

Per-lesson placement tables use four states:

- `not captured; not integrated` (or `not produced; not integrated`)
- `produced; not integrated` (or `captured; not integrated`)
- `produced; handoff_written; not integrated`
- `integrated`

Legend lives directly above each lesson's placement table.

## NEW LOCKED RULES from Lesson 05

### Blender 5.1.1 operator-name discoveries (locked 2026-05-21, accumulated across Phases 5 and 6)

Several `bpy.ops.mesh.*` operator names that appear in older Blender documentation or in the locked specs in this project's image-requirements docs do not exist or have different signatures in Blender 5.1.1. Locked corrections:

- **`bpy.ops.mesh.inset_faces` does NOT exist in Blender 5.1.1.** Use `bpy.ops.mesh.inset` instead. The op handles both region inset (default) and individual-faces inset (same op with `use_individual=True`). Verified via `dir(bpy.ops.mesh)` filtered for `inset` returning `['inset']` only. Hit during Phase 5 #29 production; first attempt with the spec name returned "Calling operator bpy.ops.mesh.inset_faces error, could not be found".
- **`bpy.ops.mesh.delete(type='FACES')` (plural) does NOT exist.** Valid enum values are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`. Use `type='FACE'` (singular). Hit during Phase 6 #22 production.
- **`bpy.ops.mesh.select_non_manifold()` works in 5.1.1 without bmesh fallback.** Selects exactly the expected boundary edges; verified via len check in Phase 6 #22.
- **Prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect`** for unambiguous local-mesh-space `plane_co` semantics. The high-level op operates in view-space which makes targeted cuts hard to reason about; the low-level op takes plane coordinates directly in mesh space. Phase 6 #30 bust used this for 4 deterministic cuts (2 horizontal, 2 vertical).
- **`bmesh.ops.subdivide_edges` with `cuts=N` produces ONLY equal-spaced cuts.** For unequal-spaced cuts, call `bmesh.ops.bisect_plane` once per cut plane. Phase 6 #30 cup originally specified loop cuts at world z=0.2 and z=0.9 but had to settle for equal-spaced 1/3 and 2/3 z positions (local z=-0.233 and z=+0.233 = world z=0.467 and z=0.933), which read fine visually as cup rim and base ring details.

### Pillow (PIL) availability in Blender's Python

**Pillow 12.2.0 is installed at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`** (a user-writable path already on `sys.path` for the BlenderMCP addon). Verified working across Lesson 05 Phase 4 #16 alternative path, Phase 5 #29 composite, Phase 6 #25 PNG-dimension measurement, and Phase 6 #30 composite. Survives Blender restarts.

This is a step up from Lesson 04 Phase 4, when PIL was not yet installed and the Phase 4 #16 sphere-topology composite had to fall back to a numpy-and-Blender-image-API approach (load both temp PNGs via `bpy.data.images.load`, pull pixels into `np.float32` arrays of shape (720, 1280, 4), paste into a canvas via array slicing, write back via `bpy.data.images.new` and save). Lesson 05's Phase 5 #29 and Phase 6 #30 composites both went through the clean Pillow `Image.new(...).paste(...).save(...)` path with `ImageDraw.Draw(...).rectangle(...)` for the `#FF6B00` vertical dividers.

Use Pillow first for any composite or image-measurement work in future lessons. Fall back to the numpy path only if Pillow somehow disappears from `sys.path`.

### Multi-sub-chat INTEGRATION cadence (NEW observation)

Lesson 04 ran a clean one-production-chat plus one-integration-chat-per-phase cadence (with a deliberate Phase 4 PRODUCTION split into SVGs-only and PNGs-only sub-chats because the 4-SVG plus 2-PNG load was too much for one production chat). Lesson 05's integration chats were larger because the figure counts per phase were larger (4, 4, 5, 6, 5, 6 vs Lesson 04's 2, 3, 2, 2, 3, 2), and three integration phases needed to split across sub-chats:

- **Phase 5 INTEGRATION**: 2 sub-chats. Original chat committed 2 of 5 figures (#29 and #24 from `#topology`) before context tightened; continuation chat finished the remaining 3 (#19, #18, #17) plus the post-integration cleanup of the progress doc and placement table.
- **Phase 6 INTEGRATION plan-lock**: 1 chat dedicated to planning alone (first time the planning step occupied its own chat for Lesson 05, reflecting the 6-figure load plus the unusually detailed plan section content including pre-resolved overlay coordinates for c22 and c30).
- **Phase 6 INTEGRATION execution**: 3 sub-chats. Sub-chat 1 committed #30 and #25; sub-chat 2 committed #22, #21, and #20; sub-chat 3 committed #23 plus the full post-integration cleanup of the progress doc and the next-chat session.md rewrite.

Bottom-up integration order (from the latest section back to the earliest) is critical when splitting across sub-chats. Earlier line positions stay stable across all sub-chats because each insert happens above the previously-edited line. Use this order for any future multi-sub-chat phase.

Future-lesson rule: estimate per-phase figure count at planning time. Phases with 5 or more figures should plan for a possible sub-chat split. Phases with 6 or more figures should plan for the integration plan to live in its own chat. Lesson 06 and onward should adopt this pre-emptively.

### Type-flip lesson (Phase 5 #19): character-feature modeling is out of scope

#19 was originally locked as a PNG capture of a low-poly character head showing edge loops around eye, mouth, and cheek zones. Building clean character topology in BlenderMCP is character-modeling territory: proper edge loops require hours of skilled manual work, Polyhaven has no character assets, Sketchfab license complexity blocks the easy alternative, and AI generation of accurate Blender wireframes is unreliable. The locked decision at Phase 5 planning was to flip the type from PNG to SVG, build a stylized illustration with orange `#FF6B00` edge loops drawn inside a head outline plus three annotation cards, and change the id prefix from `c19` (PNG-overlay) to `cf` (SVG content; "character flow"). The 5,123-byte SVG conveys the pedagogical point (loops follow muscle and expression) more clearly at lesson display width than a real wireframe screenshot would.

The same lesson applied to Phase 6 #30 bust panel: no facial features (no eye sockets, no nose, no mouth, no brows). The bust UV sphere just shows loops flowing around feature zones via 4 `bmesh.ops.bisect_plane` cuts and a jaw-taper scale. This kept the panel inside the program's scope without sliding into character-modeling territory.

Future-lesson rule: if an image requires character-feature modeling (eyes, nose, mouth, brows on a face, or analogous detailed organic features), flip the type to SVG and convey the topology concept through illustration. Do not attempt the capture.

### Layout-nudge precedent (Phase 4 #15, Phase 5 #24 and #19, Phase 6 #20 BOTTOM card)

When a locked SVG spec calls for body content at y values that conflict with the locked header (y=56 to y=138) or footer tip card (y=506 to y=540), nudge the conflicting y values upward or inward to fit. The nudges are layout-only; pedagogical content stays exact.

Recorded nudges:

- Phase 4 #15: italic takeaway moved y=640 to y=625, footer tip card moved y=655 to y=641, so the 34-pixel-tall card fits inside the 800x680 viewBox.
- Phase 5 #24: panel labels and acceptability notes moved from y=310/y=330 to y=365/y=383 because the locked y values conflicted with the edge spread reaching y=335.
- Phase 5 #19: head ellipse changed from cx=400 cy=290 rx=140 ry=170 to cx=400 cy=300 rx=125 ry=140 to clear the orange subhead at y=138 and the BOTTOM annotation card at y=460.
- Phase 6 #20: BOTTOM annotation card reshaped from translate(310, 460) 140x70 (would have overlapped the footer tip card at y=506 to y=540) into a wide single-row card at translate(180, 415) 440x50 with subhead "3D-PRINTABLE · BOOLEAN-SAFE · SIM-READY" carrying the same body copy.

Future-lesson rule: at SVG production time, sanity-check all body-content y values against the locked header (y=0 to y=138) and footer (y=506 to y=540 or, for 800x680 canvas, y=625 to y=675) regions. Nudge as needed; document the nudge in the production-chat status bullet.

### Warning vs positive overlay colorway split

Two overlay badge colors are canonical:

- **Positive** (`#4ADE80` green badge with `#0f1a14` dark text): Face normal, Face Orientation, CORRECT, Faces by Sides, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST
- **Warning** (`#E63946` red badge with `#ffffff` white text): FLIPPED, NON-MANIFOLD

The highlight ellipse and leader-line color match the badge color. Pick the colorway by the semantic role of the call-out: if the label points at a correct or normal state, use green; if it points at a problem state, use red. Locked from Phase 3 #11 FLIPPED (first red badge) and Phase 6 #22 NON-MANIFOLD (second red badge). Future warning labels (e.g., DEGENERATE, INVERTED, OVERLAPPING) should use red.

## SVG patterns proven in Lesson 05 (reuse for Lesson 06 and beyond)

All Lesson 05 SVGs follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` with the palette extensions noted below. Patterns specifically validated or extended this lesson:

**Paired-panel comparison (#3 mo, #8 ds, #9 sf, #18 gb).** Two adjacent square panels in a single SVG, each with its own demo and labeled badge, contrasting two related concepts. Lesson 05 used this 4 times: container vs mesh-data (#3), low-poly vs high-poly (#8), flat vs smooth shading (#9), good vs bad topology (#18). Colored header bars (green for GOOD, red for BAD) introduced in #18 are reusable for any "right way vs wrong way" comparison.

**Sphere-segment progression (#2 lp).** Row of 4 spheres at increasing segment counts (8, 16, 32, 64) with annotation underneath each. Reusable for any "this concept has a quality-vs-cost trade-off knob" topic. The face-count callouts (8→32, 16→128, 32→512, 64→2048 illustrating that doubling segments roughly quadruples faces) are reusable arithmetic for any subdivision-related figure.

**Primitive types grid (#4 pt).** 2x4 grid at 800x680 canvas of all the Shift+A mesh primitives (Plane, Cube, UV Sphere, Ico Sphere, Cylinder, Cone, Torus, Suzanne), each labeled with its default vertex count. Stylized Suzanne (main ellipse plus two ear ellipses plus eye and mouth marks) rather than realistic wireframe. Reusable for any "here are all the variants of this menu" topic.

**Three-panel polygon-type trio (#12 tri, #13 qd, #14 ng).** Three hero-polygon SVGs that share a layout template: 800x560 canvas, hero polygon stroked at width 4 with 3-circle vertex glyphs (outer halo r=10 opacity 0.20, middle solid r=6, inner highlight r=1.8 white), 3 property pills at y=425 to y=465, italic takeaway at y=490, footer tip card at y=506 to y=540 with 4px `#FF6B00` left rail. Reusable for any 3-variant comparison where each variant deserves its own page-width hero.

**Synthesis grid with properties table (#15 pc).** 800x680 canvas with three mini-polygon cells across the top (header at y=195, footer at y=395) and a 5-column properties table below (column centers at x=110, 240, 380, 540, 700; header at y=445; data rows at y=480, 525, 570; horizontal rules at y=425, 458, 595). Glyphs `✓`, `✓✓`, `⚠`, `✗` implemented as inline `<tspan>` color overrides inside each data-cell `<text>`. Reusable for any "comparison matrix" topic; the rule-line color (`#FF6B00`) and the 4-glyph status vocabulary are reusable.

**4-panel grid with color-coded headers (#21 nm, #24 tl).** Four panels horizontally, each 170 wide by 230 tall (panel centers at x=120, 305, 490, 675; panel y from 170 to 400 or similar). Header bars colored per acceptability (green BEST or OK, yellow OK, red AVOID). Central diagnostic glyph in each panel (vertex with N radiating edges in #24; topology defect in #21). Property pill row across the bottom at y=425 to y=465. Reusable for any "these are the N variants of this concept, with N typically 3 to 6" topic.

**Single-panel hero with annotation cards (#19 cf, #20 mf).** Central object with 3 annotation cards arranged around it, each card connected to a labeled point on the object via a dashed `currentColor` opacity 0.30 stroke-dasharray "4 3" connector line. #19 uses LEFT/RIGHT/BOTTOM cards at (40, 200), (580, 200), (310, 460) around a stylized head. #20 uses LEFT/RIGHT cards plus a wide BOTTOM single-row card around a 2x2 quad patch. Reusable for any "one thing has multiple labeled affordances" topic. Adapted from Lesson 04 #11 origin_point.

**Decision flowchart with `<marker>` arrowheads (#23 df).** 800x680 canvas with a 2-question vertical decision tree (root question at top, 2 branches via labeled YES/NO arrows to 2 secondary questions, 4 leaf arrows to 4 terminal density boxes), 3 synthesis pills at the bottom mapping use-cases to outcomes. Single `<marker id="df-arrow">` def referenced by all 6 arrow lines. Reusable for any decision-tree topic; the marker pattern is essential because per-arrow `<polygon>` triangles get tedious past 3 or 4 arrows.

**Stylized illustration with edge-loop curves (#19 cf).** Type-flipped from PNG: head outline plus orange `#FF6B00` edge loops drawn inside (concentric eye rings, paired mouth ellipses, curved cheek-flow arcs, shallow forehead arc) with annotation cards on the periphery. Reusable whenever a topology concept needs illustration but the underlying capture is too complex or out of scope. The "use SVG to illustrate, not to replicate" principle.

## Cheat-sheet badge styling decision (carry forward from Lesson 04)

Lesson 05 did not ship a dedicated keyboard-shortcuts cheat-sheet SVG (the 📚 Quick Reference Guide card in `#summary` covers that role inline in HTML). The Lesson 04 rule still applies for future cheat sheets: choose the badge variant (filled `#FF6B00` orange vs muted `currentColor` `fill-opacity=0.08`) that matches the lesson's broader badge idiom, not a project-wide default. Document the choice in the lesson's integration progress doc the first time it appears.

## Brand palette (UPDATED for Lesson 05 Phase 6)

Lesson 04 closed with: `#FF6B00` Blender orange, `#4A9EFF` course/Z-axis blue, `#B47EE8` practice/process, `#FF7EA8` reference/inspire, `#4ADE80` resources/Y-axis green, `#F5C242` portfolio/outcome, `#E63946` X-axis red. All carried forward unchanged. Lesson 05 extended the role assignments:

- **`#FF6B00` Blender orange:** brand, operation badges, SVG accent rail, vertices in Lesson 05 mesh diagrams (matches Blender's selection color), composite-PNG vertical dividers (`#29`, `#30`).
- **`#4A9EFF` blue:** course/structure (darker variant `#3a7fd1`), Z-axis, Phase 6 #23 LOW density boxes.
- **`#B47EE8` purple:** practice/process.
- **`#FF7EA8` pink:** reference/inspire.
- **`#4ADE80` green:** resources, external, Y-axis, Normals, positive glyph, "OK/BEST" pole panels, positive overlay badges (Face normal, Face Orientation, CORRECT, Faces by Sides, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST), SVG highlighted edges and endpoint glyphs in Phase 6 #20.
- **`#F5C242` yellow:** portfolio/outcome, caution glyph, "OK" 5-pole panel, Phase 6 #23 MEDIUM density box.
- **`#E63946` red:** X-axis, warning glyph, "AVOID" 6-pole panel, red-spoke edges, FLIPPED overlay badge, NON-MANIFOLD overlay badge, Phase 6 #21 all 4 panel headers and AVOID badges.
- **`#0f1a14` near-black:** dark text on green badges.
- **`#ffffff` white:** light text on red badges.

The palette is stable as of Phase 6 close. `images/IMAGE_STYLE_GUIDE.md` revision (folding in `#E63946` X-axis red, the warning-vs-positive overlay colorway split, and the role assignments above) is the deferred follow-up listed below; it was queued at Lesson 04 close and rolled forward through every Lesson 05 phase.

## Production-then-integration cadence (carry forward, with multi-sub-chat note)

Lesson 04 adopted the strict one-production-chat plus one-integration-chat-per-phase cadence. Lesson 05 carried it forward, with the following adjustments for larger figure loads:

- Phases with 1 to 2 figures: combine production and integration if budget allows (not used in Lesson 05; all phases had 4 or more figures).
- Phases with 3 to 4 figures: one production chat plus one integration chat (Lesson 04 baseline; Lesson 05 Phases 1, 2, 3).
- Phases with 5 figures: one production chat plus one or two integration sub-chats (Lesson 05 Phase 5 needed 2).
- Phases with 6 figures: consider an integration plan-lock chat plus one or more execution sub-chats (Lesson 05 Phase 6 used 1 plan-lock plus 3 execution sub-chats).
- Production chats may also split (Lesson 04 Phase 4 PRODUCTION was SVGs-only plus PNGs-only sub-chats; Lesson 05 did not need this split because BlenderMCP captures stayed inside single-chat budget).

Benefits observed across Lesson 05:

- Production-chat context budget stayed clean; SVG authoring decisions did not compete with HTML layout decisions.
- Integration-chat context budget stayed clean; HTML editing did not compete with SVG authoring.
- Handoff bullets captured the production-to-integration interface explicitly, surviving every chat compaction.
- The plan-lock-then-execute split for Phase 6 INTEGRATION proved especially valuable: the plan section resolved 6 anchors, 6 overlay placements (3 with measured coordinates and 3 with no-highlights badges only), 2 deeper-indent variants, and all 6 figcaption texts before any HTML edit, so the 3 execution sub-chats had no design decisions left to make.

Trade-off: more chats per lesson. Lesson 05 used roughly 17 chats vs Lesson 04's 12 vs Lesson 03's 5 to 6. Total context budget across all chats is broadly comparable; the cost is in chat-startup overhead.

Recommendation for Lesson 06 and beyond: continue the strict cadence. At lesson-planning time, estimate per-phase figure count and pre-allocate sub-chat slots for any phase with 5 or more figures.

## Standing rules (carry forward)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content; preserve pre-existing em-dashes verbatim through exact-match `Filesystem:edit_file` anchors.
- Middle-dot (`·`, U+00B7) for dash-style separation in SVG subheads and labels per the Phase 4 / Phase 5 / Phase 6 precedents.
- Structural em-dash after a date in Status bullets (the "2026-MM-DD — Description" pattern) is grandfathered as a list-item separator; not new prose.
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (palette revision deferred; see below).
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit.
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`.
- `tool_search` for deferred tools rather than inheriting "tool X is unavailable" assumptions from a compaction summary.
- LOCKED RULE: no `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere in BlenderMCP capture code (kills the bridge).
- LOCKED RULE: BLENDER_EEVEE_NEXT to BLENDER_EEVEE fallback when the next-gen engine raises an enum-value error.
- LOCKED RULE: Blender 5.1.1 op-name corrections (`inset` not `inset_faces`; `delete(type='FACE')` singular; prefer `bmesh.ops.bisect_plane` for targeted cuts; `subdivide_edges` is equal-spaced only).
- LOCKED RULE: Pillow 12.2.0 available at the addons modules path; use for composites and image-measurement work.
- LOCKED RULE: warning vs positive overlay colorway split (`#E63946` red for warning labels, `#4ADE80` green for positive labels).
- Use the inline-stacked PNG overlay pattern when a captured PNG needs annotation callouts; do not bake callouts into the raster.
- Use the deeper-indent variant when a figure is placed inside a card that opens at column 16.
- Warn Ray before context gets tight rather than letting automatic compaction happen.
- Propose spec plus design plan before generating new images; lock plan in writing first, then build.
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit.
- Pre-emptively plan sub-chat splits for any phase with 5 or more figures; pre-emptively split the integration planning into its own chat for any phase with 6 or more figures.

## Deferred follow-ups

These items were called out across one or more Lesson 05 phases and intentionally NOT completed during the lesson's image work. None block Lesson 06; all can be picked up in a dedicated cleanup or QA chat.

- **Browser QA pass across all 30 figures.** Deferred from every phase. A single consolidated pass would render the page in light and dark modes, scroll through every figure, confirm SVG inlines render correctly (no `color="#222"` regressions, no broken `currentColor` inheritance), confirm PNG overlays scale cleanly with their underlying images at lesson display width (~800px wide), confirm all `c{N}-*` namespaced ids are unique, and confirm no z-index or `pointer-events` regressions interfere with surrounding content. Recommended viewport widths: 1920 (desktop), 1024 (tablet), 414 (mobile).
- **Standalone `.svg` `color="#222"` audit.** The locked rule keeps `color="#222"` on the standalone `.svg` file in `images/` for `<img>` fallback rendering, and strips it only on the inlined HTML copy. On-disk files were left untouched at every integration time per the locked rule, but a spot-check at handoff time would confirm none were inadvertently edited. 16 files to spot-check: `lesson_05_01_*.svg` through `lesson_05_24_topology_pole_types.svg`.
- **`IMAGE_STYLE_GUIDE.md` revision.** Deferred from Phase 1 PRODUCTION (originally Lesson 04 Phase 3, rolled forward through every Lesson 05 phase). Scope: fold in the `#E63946` X-axis red as canonical palette; document the warning-vs-positive overlay colorway split; document the middle-dot (`·`, U+00B7) convention for SVG subhead separation; document the inline-stacked PNG overlay pattern (wrapper div, overlay svg, `inset: 0` shorthand, `c{N}-*` id convention); document the deeper-indent variant for inside-card figures; document the Blender 5.1.1 op-name corrections and the Pillow availability. Scope is small; can be done in roughly 1 hour of focused writing.
- **Optional progress-doc archive sweep.** The post-integration `lesson_05_integration_progress.md` is ~200 KB and contains 6 large Phase plan sections (Phase 1, 2, 3, 4, 5, 6 PRODUCTION specs and Phase 4, 5, 6 INTEGRATION plans). The plan sections are locked history at this point (the actual production and integration records are in the Status section). A cleanup pass could prune the now-history Phase 4 / 5 / 6 PRODUCTION specs and INTEGRATION plan sections, leaving only the Status section narrative and the placement table. Same option applies to Lesson 04's progress doc (deferred since Lesson 04 close).

## Close-out checklist

- [x] All 30 images produced or captured and verified on disk via `Filesystem:get_file_info`
- [x] All 30 images integrated into `lesson_05_understanding_meshes_and_geometry.html` and verified at 279,445 bytes
- [x] `lesson_05_integration_progress.md` fully updated through Phase 6 INTEGRATION close (header `Current state` flipped; 6 dated Status bullets covering all 6 phases; all 30 placement-table rows at `integrated`; all 6 phase-plan rows marked PRODUCTION and INTEGRATION COMPLETE)
- [x] `lesson_05_completion_handoff.md` (this file) written
- [ ] `status.md` rolled to reflect Lesson 05 image-complete (handled at chat close)
- [ ] `session.md` overwritten to point at the next chat (handled at chat close)
- [ ] Browser QA pass (deferred; see above)
- [ ] `IMAGE_STYLE_GUIDE.md` revision (deferred; see above)
- [ ] Optional progress-doc archive sweep (deferred; see above)

## File footprint summary

HTML:

- `lesson_05_understanding_meshes_and_geometry.html`, 279,445 bytes (272.9 KB), up from 84,327 bytes (82.4 KB) at integration start (+195,118 bytes / +190.5 KB across six phases).

Images on disk in `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`:

- SVGs (16 files): #1 6,853 B; #2 10,472 B; #3 8,414 B; #4 12,957 B; #8 7,411 B; #9 9,991 B; #12 4,461 B; #13 4,657 B; #14 5,443 B; #15 9,944 B; #18 10,041 B; #19 5,123 B; #20 9,098 B; #21 10,696 B; #23 9,758 B; #24 11,441 B. Total 136,760 B (~133.6 KB).
- PNGs (14 files): #5 519,404 B; #6 521,784 B; #7 520,322 B; #10 711,611 B; #11 693,316 B; #16 1,125,758 B; #17 709,325 B; #22 692,686 B; #25 154,004 B; #26 572,177 B; #27 207,045 B; #28 149,601 B; #29 784,451 B; #30 1,479,452 B. Total 8,840,936 B (~8.43 MB).

Total image asset footprint for Lesson 05: roughly 8.57 MB on disk. PNGs dominate (the two 3840x720 composites #29 and #30 plus the 2560x720 composite #16 together account for roughly 3.4 MB); the 16 SVGs together come in under 140 KB.

## Next

Lesson 06 (`lesson_06_edit_mode_essentials.html`, currently 136.3 KB per status.md). Image requirements doc exists at `lesson_06_image_requirements.md`. Image production for Lesson 06 has not started; per status.md, Lessons 06 through 51 are all still "not started" for image production and integration.

Recommended kickoff: a planning chat that reads the Lesson 06 requirements doc and the HTML, writes `lesson_06_integration_progress.md` modeled on `lesson_05_integration_progress.md`, decides the phase plan and the SVG-vs-PNG split, estimates per-phase figure counts to pre-allocate sub-chat slots for any phase at 5 or more figures, and (if context budget allows) begins Phase 1 SVG production. The Lesson 04 plus 05 production-then-integration cadence, the four-state placement-table legend, the inline-stacked PNG overlay pattern, the warning-vs-positive colorway split, and the deeper-indent inside-card variant all carry forward without modification.

Alternative kickoffs:

- **Lesson 05 fully-integrated browser QA pass.** Defer Lesson 06 planning one chat; verify all 30 Lesson 05 figures render correctly in dark and light modes and across viewport widths. Closes one of the standing deferred items.
- **Lesson 05 docs cleanup pass.** Prune now-history Phase 4 / 5 / 6 PRODUCTION specs and INTEGRATION plan sections from `lesson_05_integration_progress.md`, leaving only the Status section narrative and placement table. Optionally do the same for `lesson_04_integration_progress.md` in the same chat.
- **`IMAGE_STYLE_GUIDE.md` revision.** Fold in the deferred palette and pattern documentation listed above. Pairs well with Lesson 06 planning so the new lesson's baseline is correct from the start.

Recommended pairing: `IMAGE_STYLE_GUIDE.md` revision plus Lesson 06 planning in one chat if budget allows; the style-guide revision is relatively small and the planning step benefits from a fresh baseline.

---
