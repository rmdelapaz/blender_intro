# Lesson 06 Image Production and Integration: COMPLETE

Lesson 06 image work is closed. All 50 images produced or captured; all 50 integrated into `lesson_06_edit_mode_essentials.html`. Final HTML size: 231.5 KB (237,004 bytes), up from 136.3 KB (139,576 bytes) at integration start (+95.1 KB / +97,428 bytes across six phases). Lesson span: 2026-05-21 (planning) through 2026-05-25 (Phase 6 INTEGRATION sub-chat 1 close, resumed from interrupted execution chat).

## What was produced

50 of 50 images per `lesson_06_image_requirements.md`. The planned 3 SVG plus 47 PNG split held through close (zero in-flight type-flips this lesson, in contrast to Lesson 05's Phase 5 #19 PNG-to-SVG flip). 3 SVGs inlined into HTML; 47 PNGs captured via BlenderMCP single-pose renders, BlenderMCP per-panel renders with Pillow composites, full-window `bpy.ops.screen.screenshot`, area-scoped `bpy.ops.screen.screenshot_area` with `temp_override`, and manual Win+Shift+S snips for transient UI (pie menus, popovers, modal operators). Files at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.

SVGs (3):

- #8 `lesson_06_08_proportional_falloff_comparison.svg`, 6,811 bytes, id prefix `pf`; 6-panel 2x3 SVG grid of falloff curves SMOOTH/SHARP/LINEAR/CONSTANT/SPHERE/RANDOM, each curve stroked in brand orange `#FF6B00`
- #21 `lesson_06_21_dissolve_vs_delete.svg`, id prefix `dd`; paired-panel comparison with warning-red `#E63946` DELETE header bar (left, hole left behind) vs positive-green `#4ADE80` DISSOLVE header bar (right, geometry reconnected); captions LEAVES HOLES vs RECONNECTS GEOMETRY
- #44 `lesson_06_44_selection_tools_reference.svg`, 6,615 bytes, id prefix `sr`; 5-row reference-card chart adapting the Lesson 04 #14 keyboard-shortcuts SVG pattern; covers Box Select, Circle Select, Lasso Select, Select Similar, Checker Deselect with filled orange shortcut badges

PNGs (47): grouped by phase. Per Option C of the handoff structure proposal, plain-PNG details (file size, dimensions, capture method) live in the placement table and Available section of `lesson_06_integration_progress.md`; only overlay-bearing PNGs are detailed individually here.

### Phase 1 (3 PNGs with overlays, 6 plain; plus SVG #8 pf)

10 images total: #1, #2 (c2), #3 (c3), #4, #5, #6, #7, #8 (SVG), #9, #46 (c46). Sections `#enter-edit-mode` + `#selection-modes` + `#proportional-editing`. Mix of BlenderMCP single-pose Edit Mode selection captures (#4 vertex, #5 edge, #6 face), BlenderMCP displacement composite (#7 proportional editing circle), manual Win+Shift+S composites (#1 Object-vs-Edit), full-window `bpy.ops.screen.screenshot` (#2), area-scoped `screenshot_area` with `temp_override` and Pillow header-band crop (#3), manual pie menu snip (#46 Shift+O Proportional Falloff).

- **#2 `lesson_06_02_edit_mode_visual_indicators.png`** (412,119 B, 1917x1057), **c2 multi-label callout** (positive-green; 6 labels: VERTICES, EDGES, EDIT MODE, MESH MENU, SELECT MODES, EDIT TOOLBAR). Largest multi-callout overlay in the lesson by label count. Original sub-chat B manual capture was lost from disk before plan-lock; sub-chat B' on 2026-05-22 recaptured script-driven. c2 commit hit the 4-minute MCP timeout boundary; locked MCP-hang recovery procedure established (`Filesystem:get_file_info` size check before retry).
- **#3 `lesson_06_03_selection_mode_icons.png`** (20,255 B, 720x80), **c3 multi-label callout** (positive-green; 3 labels: 1 · VERTEX, 2 · EDGE, 3 · FACE). Thin-strip header-band capture via `bpy.ops.screen.screenshot_area` with `temp_override` then Pillow crop; smallest PNG in the lesson.
- **#46 `lesson_06_46_proportional_falloff_menu.png`** (70,253 B, 1026x450), **c46 single-region highlight** (positive-green; badge SMOOTH). Manual Win+Shift+S of Shift+O pie menu (the locked precedent for transient pie menus / popovers that BlenderMCP cannot reach).

### Phase 2 (5 PNGs with overlays, 4 plain; plus SVG #44 sr)

10 images total: #10 (c10), #11, #12, #13 (c13), #14 (c14), #15 (c15), #16 (c16), #44 (SVG), #47, #48. Sections `#loop-tools` + `#advanced-selection` + `#selection-tools`. LoopTools v4.7.7 Extensions Platform install path discovered this phase (`bpy.ops.extensions.repo_sync_all()` then `bpy.ops.extensions.package_install(repo_index=0, pkg_id='looptools', enable_on_install=True)`).

- **#10 `lesson_06_10_loop_tools_addon_location.png`**, **c10 single-region highlight** (positive-green; badge LOOPTOOLS) on the LoopTools row of the Add-ons preferences window.
- **#13 `lesson_06_13_box_select_in_action.png`**, **c13 decorative-shape-only overlay** (orange-vertex bbox; no separate ellipse / leader / marker / badge — the shape itself indicates the box-select region). **First decorative-shape-only overlay variant in Lesson 06.**
- **#14 `lesson_06_14_circle_select_in_action.png`**, **c14 decorative-shape-only overlay** (centroid + max-radius indicator).
- **#15 `lesson_06_15_lasso_select_in_action.png`**, **c15 decorative-shape-only overlay** (concave-hull / RDP outline-trace).
- **#16 `lesson_06_16_select_similar_menu.png`**, **c16 single-region highlight** (positive-green; badge AMOUNT) on the Amount row of the Shift+G Select Similar menu.

### Phase 3 (2 PNGs with overlays, 5 plain; plus SVG #21 dd)

8 images total: #17, #18, #19, #20 (c20), #21 (SVG), #22, #23 (c23), #50. Sections `#inset-outset` + `#mesh-cleanup`. Sub-chat C #23 recapture established the Face Orientation overlay recipe (theme `face_front` / `face_back` RGBA alpha check; default may be 0.0 in 5.1.1 which silently suppresses the overlay tint; bump to ≥0.4 before capture; `bpy.ops.screen.screenshot_area` includes overlay layers vs `bpy.ops.render.opengl` does not; chrome-aware Pillow crop 1572x900 raw → 1280x720 cropped at CROP_X=72 / CROP_Y=88).

- **#20 `lesson_06_20_merge_by_distance.png`** (819x405), **c20 single-region highlight** (positive-green; badge BY DISTANCE) on the By Distance row of the M Merge menu.
- **#23 `lesson_06_23_face_orientation_overlay.png`** (1280x720), **c23 single-region highlight** (warning-red; badge FLIPPED) on the 3-triangle flipped-face cluster on Suzanne's right temple. **First warning-red PNG overlay in Lesson 06**; all prior Lesson 06 overlays were positive-green per the colorway split (style guide v4 decision 8).

### Phase 4 (3 PNGs with overlays, 3 plain)

6 images total: #24, #25 (c25), #26, #27, #45 (c45), #49 (c49). Section `#extrude-operations`. All four canonical Extrude op-names (`extrude_region_move`, `extrude_region_shrink_fatten`, `extrude_faces_indiv` plus the post-extrude `transform.translate` / `transform.resize` pairs) verified in Blender 5.1.1 first try, no fallback paths needed.

- **#25 `lesson_06_25_extrude_normals_vs_regular.png`** (545,932 B, 2562x720 composite), **c25 composite-overlay** (positive-green; 2 panel badges: REGULAR, ALONG NORMALS). **First composite-overlay in Lesson 06**, added at Phase 4 INTEGRATION plan-lock after visual review showed both panels reading too similarly without labels (the c25 trigger criterion that c41 later inherited in Phase 6).
- **#45 `lesson_06_45_transform_constraint_indicators.png`** (499,352 B post-crop, 1920x1080 from 3838x2160 4K snip via Pillow through `blender:execute_blender_code`), **c45 single-region highlight** (positive-green; badge ALONG Z) on the blue Z-axis transform constraint line. **First Pillow-crop-pre-integration precedent in the lesson** (later applied again to #39 in Phase 6).
- **#49 `lesson_06_49_extrude_menu_alt_e.png`** (80,526 B, 922x396), **c49 single-region highlight** (positive-green; badge ALONG NORMALS) on the hovered Extrude Faces Along Normals row of the Alt+E special extrude popover. Menu-item-count discrepancy noted at production: locked spec said 5 options; actual 5.1.1 menu shows 6 (Extrude Manifold added in Blender 5.x). Non-blocking; the c49 target row is unaffected.

### Phase 5 (2 PNGs with overlays, 6 plain)

8 images total: #28 (c28), #29, #30 (c30), #31, #32, #33, #34, #35. Sections `#duplicate-array` + `#spin-screw` + `#knife-tool`. Ten new BlenderMCP / capture-cadence discoveries this phase (four in sub-chat A, six in sub-chat B); see NEW LOCKED RULES below. First cross-sub-chat Pillow composite in the lesson (#35 combines two sub-chat A scripted temps with one sub-chat B manual snip).

- **#28 `lesson_06_28_array_modifier_panel.png`** (524,731 B, 1920x1046 full-window screenshot), **c28 multi-label callout** (positive-green; 3 labels: COUNT, RELATIVE OFFSET, MERGE). Diagonal leaders converge from the right-side Properties panel rows up-left to a top-of-image badge row at y=87-133. Established the multi-callout-on-Properties-panel-screenshot pattern that c43 inherited in Phase 6.
- **#30 `lesson_06_30_spin_operation_setup.png`** (522,254 B, 1280x720 side-ortho viewport), **c30 multi-label callout** (positive-green; 3 labels: SPIN AXIS, PROFILE EDGE, 3D CURSOR). Straight horizontal leaders aimed left from each highlight to a left-side badge column at y=110 / y=360 / y=567 (top / middle / bottom rough thirds).

### Phase 6 (2 PNGs with overlays, 6 plain)

8 images total: #36, #37, #38, #39, #40, #41 (c41 NEW), #42, #43 (c43 NEW). Sections `#subdivide` + `#bevel`. Three new BlenderMCP discoveries this phase (subdivide quadratic-not-exponential per sub-chat A; `bpy.ops.screen.screenshot` UNC-path silent truncation per sub-chat A; bevel-modal-readout split top-floating-text + bottom-hints-bar per sub-chat B). #38 placed card-internal at col 8/12 depth inside the Terrain Generation card (only non-section-level figure placement in Lesson 06; first such placement since Lesson 05 Phase 6's two inside-card variants).

- **#41 `lesson_06_41_edge_vs_vertex_bevel.png`** (509,732 B, 2562x720 composite), **c41 composite-overlay NEW** (positive-green; 2 panel badges: EDGE BEVEL, VERTEX BEVEL). **Second composite-overlay in Lesson 06**, added at Phase 6 INTEGRATION plan-lock after visual review showed the where-the-bevel-is distinction subtle at thumbnail scale; identical 2562x720 geometry to c25 (the composite-overlay variant pattern is geometry-agnostic across same-dimension composites).
- **#43 `lesson_06_43_bevel_modifier_settings.png`** (470,706 B, 1920x1054 full-window screenshot), **c43 multi-label callout NEW** (positive-green; 4 labels: AMOUNT, SEGMENTS, LIMIT METHOD, ANGLE). **First 4-callout overlay in Lesson 06**, extending the c28 / c30 3-callout pattern to 4 without modification. Largest inline-SVG block in the lesson at 4 ellipses + 4 leaders + 4 markers + 4 badges + 4 text elements (+4,683 bytes HTML delta).
- **#39 `lesson_06_39_bevel_operation_interface.png`** (374,511 B post-crop, 1920x848 viewport+modal+Properties from 3838x2160 / 1,340,913 B 4K snip), plain figure (no overlay). Pre-integration Pillow crop+resize via `blender:execute_blender_code` (precedent: #45 in Phase 4). Locked-plan alt text leads with `Full Blender window` but the post-crop framing dropped the Windows titlebar + Blender menubar / workspace tabs / timeline / status bar / left toolbar; bulk of the description still matches (bevel-modal-active cube, segment bands, top floating readout, bottom modal hints bar, right Properties panel all present), but the mild `Full Blender window` mismatch is flagged for the browser QA pass as a candidate single-word alt-text touch-up.

## What was integrated

Six phases across roughly 25+ chats (planning chat plus per-phase production and integration chats, with three INTEGRATION plan-lock chats running interrupted-then-resumed and one INTEGRATION execution chat hitting the tool-use limit mid-batch and resuming cleanly in a second sub-chat envelope). Each phase placed its figures using the locked inline pattern.

| Phase | Section(s) | Figures | Cumulative HTML size | Phase delta |
|---|---|---|---|---|
| 1+2+3 | (combined; per-phase deltas reconstructed from session.md) | 28 figures including 7 overlays | 203,063 B (197.8 KB) at Phase 3 sub-chat 2 close | +63,487 B (+62.0 KB) combined |
| 4 | `#extrude-operations` | 6 figures including c25 / c45 / c49 | 211,972 B (207.0 KB) | +8,909 B (+8.7 KB) |
| 5 | `#duplicate-array` + `#spin-screw` + `#knife-tool` | 8 figures including c28 / c30 multi-callouts | 224,002 B (218.8 KB) | +12,030 B (+11.7 KB) |
| 6 | `#subdivide` + `#bevel` | 8 figures including c41 composite-overlay NEW and c43 4-callout NEW; #38 card-internal | 237,004 B (231.5 KB) | +13,002 B (+12.7 KB) |

Per-phase narrative for Phases 1, 2, and 3 sub-chat 1 was reconstructed retroactively from `session.md` after the Phase 4 PRODUCTION plan-lock chat detected a progress-doc size mismatch and Ray confirmed the manual deletion of those phase sections to `.bak`. The 90 KB shape was accepted as the new baseline; per-figure HTML deltas for those phases live in `session.md` and the reconstructed Status bullets in `lesson_06_integration_progress.md` only. Per-figure deltas for Phases 3 sub-chat 2 onward are explicit in the Status section.

## ID-prefix registry for this page

3 inline SVG prefixes plus 17 PNG annotation overlay namespaces, no collisions:

- Inline SVGs: `pf` (#8), `dd` (#21), `sr` (#44)
- PNG annotation overlays (17 total): `c2` (#2), `c3` (#3), `c10` (#10), `c13` (#13), `c14` (#14), `c15` (#15), `c16` (#16), `c20` (#20), `c23` (#23), `c25` (#25), `c28` (#28), `c30` (#30), `c41` (#41 NEW), `c43` (#43 NEW), `c45` (#45), `c46` (#46), `c49` (#49)
- PNGs without overlays (30 of 47, no `c{N}-` prefix): #1, #4, #5, #6, #7, #9, #11, #12, #17, #18, #19, #22, #24, #26, #27, #29, #31, #32, #33, #34, #35, #36, #37, #38, #39, #40, #42, #47, #48, #50

Breakdown of the 17 PNG overlay namespaces by colorway and shape:

- 11 positive-green full-callouts (ellipse + leader + marker + badge): `c2`, `c3`, `c10`, `c16`, `c20`, `c28`, `c30`, `c43`, `c45`, `c46`, `c49`
- 2 positive-green composite-overlays (centered bottom-of-panel rect+text, no highlight): `c25`, `c41`
- 1 warning-red full-callout: `c23`
- 3 decorative-shape-only (shape carries the message without ellipse / leader / marker / badge): `c13`, `c14`, `c15`

Lesson 06 introduces three new overlay-pattern variants beyond the Lesson 05 set: the decorative-shape-only variant (Phase 2 `c13` / `c14` / `c15` for tool-indicator overlays where the shape is the message); the 4-callout extension of the multi-callout pattern (Phase 6 `c43` extending the c28 / c30 3-callout idiom to 4 callouts without modification); and the second composite-overlay precedent (Phase 6 `c41` following the Phase 4 `c25` 2562x720 2-badge geometry verbatim, validating the composite-overlay pattern as reusable across same-dimension composites).

## Locked inline pattern (carry forward to Lesson 07 and beyond)

Identical to Lessons 04 and 05 close-outs. Restated briefly so this file stands alone; see `lesson_05_completion_handoff.md` for the full discussion.

- Plain `<figure>` plus `<figcaption>` wrapper, no class. `styles/main.css` already styles both.
- PNGs: `<img src="images/..." alt="..." loading="lazy">` inside the figure, with descriptive alt text.
- Inline SVGs: re-indent to 20-space content depth. `<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<img>`, `<figcaption>` at column 20; svg children at column 22 to 24; deeper nesting at 28 / 32.
- **Strip the `color="#222"` attribute** from the root `<svg>` when inlining. Standalone `.svg` file keeps the attribute for `<img>` fallback rendering; only the inlined HTML copy drops it.
- 3 to 5 line `oldText` anchors for `Filesystem:edit_file` per figure (extended to 6 lines for #26 in Phase 4 when the bare `</tbody></table><blockquote>` pattern hit 4 occurrences across the full HTML; bottom-up execution order within each sub-chat so earlier inserts do not shift later anchors).
- Structural comments preserved during inlining; decorative ASCII-divider author comments pruned.
- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note. Pre-existing en-dashes (`–`) and em-dashes in source content preserved verbatim through exact-match anchors (Lesson 06 examples: #42 blockquote `even "sharp" edges`; #40 segment-tip list item `– for hero details`; #20 anchor preserves pre-existing right-arrow `→`).

### Deeper-indent variant (reinforced once in Lesson 06)

When a figure is placed inside a card opening at column 16, the figure itself opens at column 20 and every level shifts deeper by 4 spaces: figure col 20, img and figcaption at col 24 (or wrapper div col 24 plus img and overlay svg col 28 plus overlay children col 32 when an overlay is present), figure close col 20.

Lesson 06 used this only once: Phase 6 #38 inside the Terrain Generation `<div class="card">` between the procedure `</ol>` and the bonus tip `<p><strong>Bonus:</strong>`. The figure visually closes the procedure before the bonus tip lands. All other 49 Lesson 06 figures sit at section level (col 4 / 8 default depth). Lesson 05 Phase 6 had two card-internal placements (#25 and #22); the variant remains an exception rather than the rule.

## Inline-stacked PNG overlay pattern (locked from Lessons 04 / 05, validated unchanged in Lesson 06)

Pattern restated tersely (full discussion in `lesson_05_completion_handoff.md`):

```html
<figure>
    <div style="position: relative; display: inline-block; max-width: 100%;">
        <img src="images/lesson_06_NN_name.png"
             alt="..."
             loading="lazy"
             style="display: block; max-width: 100%; height: auto; margin: 0;">
        <svg viewBox="0 0 PNG_W PNG_H"
             style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"
             preserveAspectRatio="xMidYMid meet"
             aria-labelledby="cN-title cN-desc">
            <title id="cN-title">...</title>
            <desc id="cN-desc">...</desc>
            <!-- callouts in c{N}- prefixed ids -->
        </svg>
    </div>
    <figcaption>...</figcaption>
</figure>
```

### Overlay element conventions (carry forward verbatim from Lesson 05)

- Highlight shape (ellipse or circle) fill `none`, stroke `#4ADE80` width 4 (positive label) or `#E63946` width 4 (warning label).
- Leader line stroke matching the highlight color, stroke-width 3, stroke-linecap `round`.
- Marker circle r=6 at badge-side end of leader, 7 px from badge edge.
- Badge rect rx=6, fill `#4ADE80` for positive labels or `#E63946` for warning labels.
- Badge text font-family `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`, font-size 22, font-weight 700, text-anchor middle, letter-spacing 2, fill `#0f1a14` on green or `#ffffff` on red.

### Multi-callout overlay pattern: extended from 3 to 4 callouts in Lesson 06

The c28 / c30 multi-callout pattern from Lesson 06 Phase 5 (3 callouts each, per-overlay `aria-labelledby="cN-title cN-desc"` pair, per-callout ellipse ids like `c28-count` / `c28-relativeoffset` / `c28-merge`, structural author comments before each callout group) extended cleanly to 4 callouts in Phase 6 `c43` (`c43-amount` / `c43-segments` / `c43-limitmethod` / `c43-angle`) without any modification to the pattern itself. The pattern is callout-count-agnostic; future lessons can scale further (5, 6, 7 callouts) as long as leader-path clearance and badge-zone clearance are verified per-target via Pillow band scans at INTEGRATION plan-lock.

### Composite-overlay variant: second precedent established in Lesson 06

The c25 composite-overlay variant from Lesson 05 / Lesson 06 Phase 4 INTEGRATION (two centered bottom-of-panel rect+text pairs on a 2562x720 2-panel composite, no ellipse / leader / marker) extended cleanly to Lesson 06 Phase 6 `c41` with identical 2562x720 geometry, identical 280 px badge width, identical y=644 / y=675 text-baseline coords, identical positive-green colorway. The composite-overlay pattern is now validated as reusable across same-dimension composites; future composites at 2562x720 dimensions can copy the c25 / c41 geometry verbatim. Composites at other dimensions (Lesson 05 #29 / #30 at 3840x720; Lesson 06 #17 / #19 / #27 / #40 at 3844x720 to 5126x720) would need fresh geometry but the same no-highlights / centered-bottom badge idiom.

### Decorative-shape-only overlay variant (new in Lesson 06)

For tool-indicator overlays where the shape itself carries the message without a separate ellipse / leader / marker / badge. Lesson 06 introduced this variant with three instances in Phase 2: `c13` orange-vertex bbox indicating box-select region, `c14` centroid + max-radius indicator for circle-select, `c15` concave-hull / RDP outline-trace for lasso-select. The variant is appropriate when the on-screen tool (the box-select rectangle, the circle-select cursor, the lasso-select stroke) is fundamentally a geometric shape and a separate callout would be redundant noise. Future lessons should reach for this variant whenever the captured PNG already shows a labeled or self-explanatory geometric form (selection regions, brush cursors, transform gizmos at rest).

## Tool selection rules (LOCKED, carry forward verbatim from Lesson 05)

Tools are deferred. Call `tool_search` before invoking; never inherit "tool X is unavailable" assumptions from a compaction summary.

- **For new file writes:** `Filesystem:write_file`. Do NOT use Claude's built-in `create_file` (writes to Claude's container, not WSL). Always verify with `Filesystem:get_file_info` after.
- **For edits to existing files:** `Filesystem:edit_file` with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.
- **For PNG capture via Blender:** lowercase `blender:execute_blender_code` (uppercase hangs). OpenGL viewport render path: find first `VIEW_3D` area and its `WINDOW` region, then `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` wrapping `bpy.ops.render.opengl(write_still=True, view_context=True)`. Re-find the VIEW_3D area and region in each `blender:execute_blender_code` block since Python local variables do not persist across calls (Blender state does).
- **For full-window screenshots:** `bpy.ops.screen.screenshot(filepath="...")` with full-window context override (no area filter). Lesson 06 Phase 5 #28 and Phase 6 #43 are the canonical examples for Properties-panel-plus-viewport captures with Properties context set to `MODIFIER`.
- **For area-scoped screenshots:** `bpy.ops.screen.screenshot_area` with `temp_override`. Useful for UI chrome captures (header band, area chrome) and as an alternative to manual Win+Shift+S for non-popover UI. Lesson 06 Phase 1 #3 used this for the 3D viewport header band.
- **For pie menus, popovers, modal-operator UI, and other transient state Blender's render API cannot reach:** manual Win+Shift+S capture into `images/` directly. Lesson 06 examples: #46 Shift+O Proportional Falloff pie menu, #20 M Merge popup menu, #45 G+Z transient transform constraint, #49 Alt+E Extrude special popover, #33 / #34 Knife Tool modal states, #39 Ctrl+B Bevel modal state, #35 panel 2 Mesh menu popover (the latter captured via the Win+Shift+S overlay-freezes-screen path discovered in Phase 5 sub-chat B; see NEW LOCKED RULES below).
- **For other raster sources:** Canva and Adobe for creativity MCP connectors when AI generation is the right call. For Blender-specific UI, the live MCP Blender bridge plus manual Win+Shift+S remain the strongly preferred sourcing routes; AI generation is a fallback only.

## LOCKED RULES carried forward from Lessons 04 and 05

### No `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere in BlenderMCP capture code

Kills the BlenderMCP bridge mid-execution by unregistering all installed addons. Safe alternative: clean Blender state manually via `bpy.data.objects.remove(obj, do_unlink=True)`, `bpy.context.scene.cursor.location = (0, 0, 0)`, etc. Lesson 06 carried this forward across all six phases without incident.

### BLENDER_EEVEE_NEXT to BLENDER_EEVEE fallback

Blender 5.1.1 exposes only the legacy engine enum. Try `BLENDER_EEVEE_NEXT` first; on `TypeError` or enum-value error, fall back to `BLENDER_EEVEE`. Lesson 06 triggered the fallback consistently across every BlenderMCP capture phase.

### Four-state placement-table legend

`not captured; not integrated` (or `not produced; not integrated`), `produced; not integrated` (or `captured; not integrated`), `produced; handoff_written; not integrated`, `integrated`. Legend lives directly above each lesson's placement table.

### Blender 5.1.1 operator-name corrections (locked at Lesson 05; reconfirmed unchanged in Lesson 06)

- `bpy.ops.mesh.inset_faces` does NOT exist; use `bpy.ops.mesh.inset` (with `use_individual=True` for the individual-faces variant).
- `bpy.ops.mesh.delete(type='FACES')` (plural) does NOT exist; use `type='FACE'` (singular). Valid enum values are `('VERT', 'EDGE', 'FACE', 'EDGE_FACE', 'ONLY_FACE')`.
- `bpy.ops.mesh.select_non_manifold()` works in 5.1.1 without bmesh fallback.
- Prefer `bmesh.ops.bisect_plane` over `bpy.ops.mesh.bisect` for unambiguous local-mesh-space `plane_co` semantics.
- `bmesh.ops.subdivide_edges` with `cuts=N` produces ONLY equal-spaced cuts; for unequal-spaced cuts, call `bmesh.ops.bisect_plane` once per plane.

### Pillow 12.2.0 availability in Blender's Python

Installed at `C:\Users\pract\AppData\Roaming\Blender Foundation\Blender\5.1\scripts\addons\modules\PIL`. Used in Lesson 06 for composite generation (#1 / #9 / #17 / #18 / #19 / #22 / #24 / #25 / #27 / #31 / #34 / #36 / #37 / #38 / #40 / #41 / #42 / #50), image-dimension measurement (overlay coord scans), and pre-integration crop+resize (#45 in Phase 4 and #39 in Phase 6).

### Warning vs positive overlay colorway split

Positive (`#4ADE80` green badge with `#0f1a14` dark text) for affirmative labels. Warning (`#E63946` red badge with `#ffffff` white text) for cautionary labels. Lesson 06 added one new warning-red badge (`c23` FLIPPED on Face Orientation overlay) and ten new positive-green badges across c2 / c3 / c10 / c16 / c20 / c25 / c28 / c30 / c41 / c43 / c45 / c46 / c49 (the locked precedents now span Lessons 03 / 04 / 05 / 06).

## NEW LOCKED RULES from Lesson 06

### Blender 5.1.1 Phase 5 + Phase 6 PRODUCTION discoveries (10 total; locked 2026-05-24 and 2026-05-25)

Phase 5 PRODUCTION sub-chat A (4):

1. **Screw Modifier ignores `obj.rotation_euler`** when computing its helix axis; the modifier reads the source mesh in local space and treats object-level rotation as if applied separately. A circle rotated 90° on X via `obj.rotation_euler = (radians(90), 0, 0)` still produces a flat-disc spring rather than a vertical helix. Working path: `bpy.ops.object.transform_apply(rotation=True)` on the circle BEFORE adding the Screw Modifier so the rotation is baked into the mesh data.
2. **`bpy.ops.mesh.subdivide` needs a VIEW_3D `temp_override`** when called from inside `blender:execute_blender_code`; without the override the operator no-ops silently or raises a context error. Wrap in the same `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` pattern used for OpenGL renders. A direct bmesh rebuild is a cleaner alternative when the subdivide complexity is low.
3. **Multi-object Edit Mode breaks `bpy.ops.mesh.knife_project`:** if both target and cutter are selected when entering Edit Mode, Blender enters multi-object Edit Mode and `knife_project` sees the cutter as part of the edit scope (not as an external cutter), producing zero new geometry. Working sequence: Object Mode → `bpy.ops.object.select_all(action='DESELECT')` → select TARGET alone → `bpy.context.view_layer.objects.active = target` → `bpy.ops.object.mode_set(mode='EDIT')` → INSIDE Edit Mode call `cutter.select_set(True)` to add the cutter to selection without bringing it into multi-object edit (`bpy.context.objects_in_mode` stays `[target]` while `bpy.context.selected_objects` becomes `[target, cutter]`) → `bpy.ops.mesh.select_all(action='SELECT')` on target geometry → `bpy.ops.mesh.knife_project(cut_through=False)` under VIEW_3D `temp_override`.
4. **`plane.show_wire = True` required for knife_project cut visibility in SOLID shading**: without `show_wire` the post-knife_project cut edges blend into the face fill in SOLID shading and the cut pattern is invisible at thumbnail scale; with `show_wire` ON the cut edges render as dark wireframe overlay against the SOLID-shaded fill.

Phase 5 PRODUCTION sub-chat A additional finding (rebuild ergonomics):

- **`region_data.view_rotation` direct assignment does NOT synchronously update the view matrix** that downstream operators read from; the operator returns `{'FINISHED'}` but produces zero mesh delta. Working path is `bpy.ops.view3d.view_axis(type='TOP')` (or `'FRONT'` / `'SIDE'` / etc.) inside a VIEW_3D `temp_override`, which forces the operator-level view-state sync.

Phase 5 PRODUCTION sub-chat B (4 from the knife-modal capture cycle):

5. **Blender 5.1.1 knife-tool modal keybindings differ from the locked Phase 5 plan-lock spec**: actual bindings are `A` Angle Constraint, `C` Cut Through, `Z` Axis Lock (status bar at the bottom of the viewport during knife-active state is authoritative). The pre-existing lesson body Knife Tool Modes table at lines 2876-2884 of `lesson_06_edit_mode_essentials.html` lists pre-5.1.1 bindings (`C=angle`, `Z=cut-through`); the captured PNG shows the corrected 5.1.1 bindings. Locked workaround at INTEGRATION: #34 alt text and figcaption describe the modal states visually without naming keys, sidestepping the lesson-body-vs-figure contradiction. Lesson body table edit deferred (folds into style-guide v6 addenda pending).
6. **Modal-status-bar-as-truth for manual modal captures**: the bottom-of-viewport modal status bar is the authoritative source for active key bindings in any Blender version. Reading the status bar mid-capture (and including it in the snip frame so downstream review can verify) is now part of the locked manual-capture cadence for any modal operator.
7. **First-pass marginal-read rejection precedent for manual composites**: free-cutting panels need 4 to 5 non-collinear cut dots forming an obvious zigzag or curve across the face so the freeform nature reads at thumbnail scale and contrasts cleanly with constrained-cut panels. Apply this read-rejection check at sub-chat-internal review BEFORE the composite step (cheap to recapture pre-composite; expensive to recapture post-composite).
8. **Alt+Z X-ray ON before knife activation for Cut-Through readability in SOLID shading**: without X-ray, the dashed back-face cut line that Cut Through mode produces blends visually into the SOLID-shaded face fill at panel scale. Sequence: `Alt+Z` (X-ray ON) → `K` (knife) → `C` (cut through, confirm via status bar `Cut Through: On`) → draw cut across the cube silhouette so the dashed segment spans visible back-face territory → Win+Shift+S before confirming.

Phase 6 PRODUCTION sub-chat A (2):

9. **`bpy.ops.mesh.subdivide(number_cuts=N)` grows quadratically not exponentially**: inserts N cuts per edge in a single call producing `(N+1)²` faces from one source face, NOT 4^N faces. Calling `subdivide(number_cuts=4)` on a fresh plane yields 25 faces (5x5 grid), not 256. To reach the 4 / 16 / 64 / 256 progression that matches the lesson-body table's exponential growth column, sequential `subdivide(number_cuts=1)` passes are required: pass 1 yields 4 faces, pass 2 yields 16, pass 3 yields 64, pass 4 yields 256.
10. **`bpy.ops.screen.screenshot` silently truncates to 0 bytes on WSL UNC paths**: writing directly to `\\wsl$\Ubuntu\...` UNC path via `filepath='\\\\wsl$\\Ubuntu\\...'` produces a 0-byte file with no Python error raised; the operator returns `{'FINISHED'}` cleanly. Working path: capture to a local Windows tempdir (e.g. `C:\Users\pract\AppData\Local\Temp\screenshot.png`), then read the bytes via `PIL.Image.open(temp_path)` and save through Pillow to the WSL UNC target. Pattern reusable for any future `bpy.ops.screen.screenshot` or `bpy.ops.screen.screenshot_area` call where the target is on WSL.

Phase 6 PRODUCTION sub-chat B (1 from the bevel-modal capture):

11. **Bevel modal readout location in 5.1.1 splits across TOP floating text and BOTTOM modal hints bar**, not consolidated into a single bottom-status-bar string as the knife-tool modal does. Actual 5.1.1 behavior: live operator readout (e.g. `Offset: 0.1735 m, Segments: 3, Profile Shape: 0.5`) renders as floating text at top-center of the viewport; bottom bar carries modal keybinding hints (`Confirm` · `Esc Cancel` · `Ctrl Snap` · `M Width` · `A Width` · `S Segments` · `P Profile Shape`, etc.). Both together unambiguously confirm modal-active state. Locked correction for any future modal-capture spec text: describe the criterion generically as `live operator readout (top floating or bottom bar) plus modal keybinding hints (bottom bar)` rather than assuming a single-line bottom-bar format.

### Win+Shift+S overlay freezes screen on Win 11 (popover capture path, Phase 5 sub-chat B discovery)

On Windows 11, as long as a popover is open and the cursor is hovering the target row (no click-away to defocus first), triggering Win+Shift+S freezes the screen on overlay and the open popover state is preserved through the rectangle-select snip. Sequence: open the menu / popover → hover the target row → Win+Shift+S directly (no defocus) → drag selection rectangle around the open menu and surrounding viewport context. This is now a documented capture path for any popover / pie-menu UI and complements the `bpy.ops.screen.screenshot_area` finding from Phase 1 sub-chat B. Validates the previously-assumed-unreachable popovers (#49 Alt+E, #20 M Merge, #35 panel 2 Mesh menu) as manually capturable.

### Cross-sub-chat composite pattern (first-in-Lesson-06, validated Phase 5)

When a multi-panel composite has a mix of scriptable and manual panels that would otherwise force a single chat to carry both work shapes, split across two sub-chats with named temp file handoff:

- Sub-chat A produces scripted panels as `_temp_lesson_NN_XX_pN.png` files in `images/` and explicitly does NOT remove them at sub-chat A close.
- Sub-chat B opens with a `Filesystem:get_file_info` pre-flight check on both temp files (catches the case where sub-chat A closed without producing the temps; if missing, recapture via the sub-chat A scene-build path before proceeding).
- Sub-chat B captures the manual panel, composites all panels via Pillow with `#FF6B00` vertical dividers, removes all panel temps via `os.remove` at composite save.

Validated end-to-end in Lesson 06 Phase 5 with #35 (`_temp_lesson_06_35_p1.png` 730,851 B from sub-chat A + Ray's manual Mesh-menu snip in sub-chat B + `_temp_lesson_06_35_p3.png` 674,108 B from sub-chat A → 3844x720 composite `lesson_06_35_knife_project_operation.png` 1,132,765 B). Pattern is reusable for any future phase where a composite spans scripted + manual capture work.

### Resume-chat workflow precedent (first-in-Lesson-06)

If a chat hits the tool-use limit mid-execution, the resume chat picks up at the next pending step from the close-out handoff doc rather than starting fresh. Lesson 06 used this pattern three times:

- Phase 5 INTEGRATION plan-lock chat interrupted before any commits; resume chat read `lesson_06_phase5_integration_planlock_HANDOFF.md` and executed the 5 pending edits.
- Phase 6 INTEGRATION plan-lock chat interrupted mid-edit-batch; resume chat read `lesson_06_phase6_integration_planlock_HANDOFF.md` and executed the remaining close edits.
- Phase 6 INTEGRATION sub-chat 1 execution chat hit the tool-use limit mid-batch after 3 of 8 figures integrated; resume chat picked up at the next pending step (#40) and finished the remaining 5 figures plus all doc updates.

Locked workflow elements:

- Status bullet at sub-chat close documents both halves explicitly (pre-resume work + resume work, per-figure deltas) so the chat record is unified.
- Sub-chat envelope stays single (no artificial 6a / 6b split unless the section boundary actually requires the split — Lesson 06 never invoked the planned fallback splits because resume always landed cleanly inside the same envelope).
- Handoff doc at interruption time should capture every locked decision and the next pending step explicitly, so the resume chat does not need to re-derive any decisions.

### Manual-capture path forward-fix (Phase 6 sub-chat B observation)

Save Win+Shift+S snips directly to `\\wsl$\Ubuntu\...\images\` first, then skip the Claude UI upload roundtrip entirely. The file is verifiable from WSL via `Filesystem:get_file_info`, and `Filesystem:copy_file_user_to_claude` handles any preview check Claude needs. Phase 6 sub-chat B path observation: Ray uploaded the #39 snip via Claude UI to `/mnt/user-data/uploads/` first, then had to manually copy it to the WSL `images/` folder since `Filesystem:write_file` is text-only and no Claude→WSL binary cross-filesystem copy is in the loaded Filesystem tool set. Save-direct-to-WSL eliminates the extra step. Matches the implicit Phase 4 sub-chat B #45 path.

### Pillow crop+resize pre-integration step for oversize manual captures (Lesson 06 second precedent)

When a user-captured Win+Shift+S PNG comes in larger than ideal (4K native snip ~1.3 MB on a 3838x2160 frame), run a Pillow crop+resize in place via `blender:execute_blender_code` BEFORE the figure insertion lands at INTEGRATION:

- Crop to remove Windows / Blender chrome (titlebar, menubar, workspace tabs, timeline, status bar, left toolbar where not needed)
- Resize to viewport-only dimensions (~1920x1080 nominal; accept a wider or shorter final if the modal frame and Properties panel do not fit cleanly)
- Preserve modal indicators, on-screen guides, coord readouts, hints bars, and any Properties panel context that supports the lesson body
- Verify final file size with `Filesystem:get_file_info`; target band ~200 to 800 KB depending on viewport content density
- Skip the resize entirely if a planned overlay viewBox needs to match exact PNG pixel dimensions (no precedent in Lesson 06 since #39 had no planned overlay; the Lesson 04 #45 precedent ran with a c45 overlay viewBox to match the post-resize 1920x1080)

Two Lesson 06 instances established the precedent across phases: Phase 4 sub-chat B #45 (3838x2160 / 1,238,904 B → 1920x1080 / 499,352 B), and Phase 6 INTEGRATION sub-chat 1 #39 pre-integration step (3838x2160 / 1,340,913 B → 1920x848 / 374,511 B, accepting the 848 vs 1080 ratio per the "no overlay viewBox to match" allowance).

### MCP server hang recovery: 4-min timeout boundary

If a heavy `Filesystem:edit_file` commit (large content payload, deeply-nested multi-callout overlay markup) hangs past the 4-minute mark, run `Filesystem:get_file_info` to check whether the commit actually landed despite the apparent hang. If file size shows the expected delta, the commit succeeded and the apparent hang was MCP-server-side; do not retry. If file size is unchanged, the commit failed and retry is safe. Established at Lesson 06 Phase 1 c2 multi-callout commit; applies to any future heavy-content commit, particularly multi-callout overlays at 3+ callouts (c28, c30, c43) and composite-overlays in 2-panel composites (c25, c41).

### Card-internal figure placement (single Lesson 06 instance reinforced)

Lesson 06 used the deeper-indent variant only once (#38 inside the Terrain Generation card in `#subdivide`). The pattern is now established across three lessons (Lesson 04 Phase 4 #16; Lesson 05 Phase 5 #29 + Phase 6 #25 + Phase 6 #22; Lesson 06 Phase 6 #38) and should be reached for whenever a figure visually closes a procedure or summarizes a card-bound concept before the card terminates. Default is still section-level placement (col 4 / 8).

## SVG patterns proven in Lesson 06 (reuse for Lesson 07 and beyond)

All Lesson 06 SVGs follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` v5. Patterns specifically validated this lesson:

**Falloff curve grid (#8 pf).** 6-panel 2x3 grid at 800x560 canvas of mathematical curves (SMOOTH cosine, SHARP exponential drop, LINEAR straight line, CONSTANT step, SPHERE semicircle arc, RANDOM noise). Curves stroked in brand orange `#FF6B00` per the locked tie-break rule. Reusable for any "this concept has N variants with mathematical character" topic; the per-panel label-plus-curve layout is the template.

**Paired-panel comparison with semantic-colored headers (#21 dd).** Two adjacent panels in a single SVG at 800x560 canvas, each with its own demo and labeled header bar. Warning-red `#E63946` header for the negative-outcome panel (DELETE leaves holes), positive-green `#4ADE80` header for the affirmative-outcome panel (DISSOLVE reconnects geometry). Captions under each panel name the consequence. Reusable for any "wrong way vs right way" or "two operations with opposing outcomes" topic; lesson 05 #18 good-vs-bad-topology established the semantic-header precedent that #21 carries forward.

**Reference-card chart (#44 sr).** 5-row chart adapting the Lesson 04 #14 keyboard-shortcuts SVG pattern at 800x560 canvas. Each row has an icon column (vectorized tool indicator: rectangle for Box, circle for Circle, freeform loop for Lasso, connected dots for Select Similar, checkerboard for Checker Deselect), a shortcut badge column (filled `#FF6B00` orange per Lesson 04 #14 idiom), and a one-line description column. Reusable for any cheat-sheet topic; the filled-orange badge variant is the locked choice when the lesson's broader badge idiom favors filled (as Lesson 04 #14 did and Lesson 06 #44 did) rather than the muted `currentColor` `fill-opacity=0.08` variant from Lessons 02 / 03.

## Brand palette (stable from Lesson 05 close; no changes in Lesson 06)

Carried forward verbatim. Lesson 06 used the full palette across overlays and SVGs without extending the role assignments:

- `#FF6B00` Blender orange: brand, operation badges, SVG accent rail, composite-PNG vertical dividers, decorative-shape-only overlay strokes (`c13` / `c14` / `c15`), shortcut badges on #44
- `#4A9EFF` blue (darker variant `#3a7fd1`): course, structure, Z-axis
- `#B47EE8` purple: practice, process
- `#FF7EA8` pink: reference, inspire
- `#4ADE80` green: resources, external, Y-axis, normals, positive overlay badges (11 in Lesson 06 plus 2 composite-overlay variants `c25` / `c41`), positive header bar on #21 DISSOLVE panel
- `#F5C242` yellow: portfolio, outcome, caution glyph
- `#E63946` X-axis red: warning glyph, warning overlay badge (`c23` FLIPPED in Lesson 06), warning header bar on #21 DELETE panel
- `#0f1a14` near-black: dark text on green badges
- `#ffffff` white: light text on red badges

## Production-then-integration cadence (carry forward with Lesson 06 chat-count observation)

Lesson 04 baseline (one-production-chat plus one-integration-chat per phase) plus Lesson 05 extensions (sub-chat splits for 5+ figure phases; integration plan-lock as its own chat for 6+ figure phases) carried into Lesson 06 unchanged. New observation from Lesson 06: with 50 images across 6 phases at 10 / 10 / 8 / 6 / 8 / 8 distribution, the lesson ran roughly 25+ chats total (planning + per-phase production + per-phase integration plan-lock + per-phase integration execution + 3 resume chats + this close-out chat). That is up from Lesson 05's 17 chats; the additional overhead came from (1) the larger image count, (2) the 3 plan-lock interruptions that needed resume chats, and (3) the cross-sub-chat composite pattern adding handoff overhead to Phase 5 PRODUCTION.

Recommendations for Lesson 07 and beyond:

- Continue the strict cadence; the per-chat context budget benefits outweigh the chat-startup overhead.
- Pre-allocate sub-chat slots at lesson-planning time for any phase with 5+ figures (Lesson 06 honored this and Phase 1 / 2 / 3 / 5 / 6 each used sub-chats successfully).
- Pre-allocate a dedicated plan-lock chat for any INTEGRATION phase with 6+ figures (Lesson 06 used this for Phases 3 / 4 / 5 / 6 INTEGRATION and the plan-lock-as-own-chat pattern proved valuable every time).
- Lock the handoff doc to capture every decision and the next pending step explicitly at any chat-tightness boundary; the resume-chat workflow precedent depends on the handoff doc being complete enough to drive resume without re-derivation.

## Standing rules (carry forward verbatim from Lesson 05; reinforced unchanged in Lesson 06)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content; preserve pre-existing em-dashes and en-dashes verbatim through exact-match `Filesystem:edit_file` anchors.
- Middle-dot (`·`, U+00B7) for dash-style separation in SVG subheads and labels, figcaption phrasing, status bullet separation, and badge text with multi-token labels.
- Structural em-dash after a date in Status bullets (the "2026-MM-DD — Description" pattern) is grandfathered as a list-item separator.
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` v5 (49,085 B; v5 addenda CLOSED earlier this session).
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit.
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`.
- `tool_search` for deferred tools rather than inheriting "tool X is unavailable" assumptions from a compaction summary.
- LOCKED RULE: no `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere.
- LOCKED RULE: BLENDER_EEVEE_NEXT to BLENDER_EEVEE fallback.
- LOCKED RULE: Blender 5.1.1 op-name corrections plus the 10 new Phase 5 / 6 PRODUCTION discoveries above.
- LOCKED RULE: Pillow 12.2.0 at the addons modules path.
- LOCKED RULE: warning vs positive overlay colorway split.
- Use the inline-stacked PNG overlay pattern; do not bake callouts into raster.
- Use the deeper-indent variant when a figure is placed inside a card.
- Use the decorative-shape-only overlay variant when the on-screen tool is fundamentally a geometric shape.
- Use the composite-overlay variant for horizontally-divided composites where panels read too similarly without labels.
- Pre-emptively plan sub-chat splits for any phase with 5+ figures; pre-emptively split INTEGRATION planning into its own chat for any phase with 6+ figures.
- Warn Ray before context gets tight rather than letting automatic compaction happen.
- Propose plan plus anchor choices plus grouping decisions before integration; lock plan in writing first, then edit.

## Deferred follow-ups

These items were called out across one or more Lesson 06 phases or carry over from Lesson 05 close and intentionally NOT completed during Lesson 06 image work. None block Lesson 07; all can be picked up in a dedicated cleanup or QA chat.

- **Browser QA pass for Lesson 06 across all 50 figures.** Highest priority: Phase 6 fresh integrations (#43 c43 4-callout, #41 c41 NEW composite-overlay, #38 card-internal placement, #39 cropped Pillow image plus the `Full Blender window` alt-text mismatch flagged at integration). Second priority: Phase 5 c28 / c30 multi-callouts (most recent integrations before Phase 6; not seen in browser yet). Third priority: Phase 4 c25 composite-overlay (the precedent c41 follows). Fourth priority: spot-check pass on the remaining 42 figures. Recommended viewport widths: 1920 (desktop), 1024 (tablet), 414 (mobile). Recommended in dark and light modes.
- **Browser QA pass for Lesson 05** (still pending from Lesson 05 close; same shape as Lesson 06 QA above but for the 30 Lesson 05 figures).
- **Optional progress-doc archive sweep for Lesson 06.** Post-integration `lesson_06_integration_progress.md` sits at ~316 KB after the Phase 6 INTEGRATION plan section landed. A cleanup pass could prune now-history Phase plan sections (Phase 3 PRODUCTION plan, Phase 3 / 4 / 5 / 6 INTEGRATION plan sections), leaving only the Status section narrative and the placement table. Same option as the standing Lesson 05 sweep.
- **Optional progress-doc archive sweep for Lesson 05** (still pending from Lesson 05 close; ~200 KB doc with Phase 4 / 5 / 6 PRODUCTION specs and INTEGRATION plan sections candidate for archive).
- **`IMAGE_STYLE_GUIDE.md` revision: v6 scoping.** v5 addenda (49,085 B) CLOSED earlier this session. A future v6 revision could fold in the 10 Lesson 06 Phase 5 / 6 PRODUCTION discoveries, the Win+Shift+S overlay-freezes-screen popover capture path, the cross-sub-chat composite pattern, the resume-chat workflow precedent, the manual-capture save-direct-to-WSL forward fix, the Pillow crop+resize pre-integration step, the 4-callout multi-callout extension validation, the second composite-overlay precedent (c25 → c41 geometry-reuse), and the decorative-shape-only overlay variant. Not yet scoped.
- **Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html`** to flip pre-5.1.1 `C=angle, Z=cut-through` listing to the corrected 5.1.1 `A=angle, C=cut-through, Z=axis-lock` bindings per Phase 5 sub-chat B discovery (1). Deferred from Phase 5 INTEGRATION plan-lock per the locked workaround (#34 alt text + figcaption describe modal states visually without naming keys). Low-priority; the figure copy does not break if the table stays as-is, but a content-pass for accuracy would fold the correction in.

## Close-out checklist

- [x] All 50 images produced or captured and verified on disk via `Filesystem:get_file_info`
- [x] All 50 images integrated into `lesson_06_edit_mode_essentials.html` and verified at 237,004 bytes
- [x] `lesson_06_integration_progress.md` fully updated through Phase 6 INTEGRATION sub-chat 1 close (header `Current state` flipped; dated Status bullets covering all 6 phases plus all interruption-resume chats; all 50 placement-table rows at `integrated`; all 6 phase-plan rows marked PRODUCTION and INTEGRATION COMPLETE; ID prefix registry updated with c41 NEW)
- [x] `lesson_06_completion_handoff.md` (this file) written
- [x] `status.md` rolled to reflect Lesson 06 image-complete (handled this chat)
- [x] `session.md` overwritten to point at the next chat (handled this chat)
- [x] Archive sweep done 2026-05-25 (this chat predecessor): `images\_archive\lesson_06_close_2026-05-25\` and project-root `_archive\` carry historical L06 close-out docs; `lesson_06_session_final.md` snapshot at project root
- [x] IMAGE_STYLE_GUIDE.md v5 addenda CLOSED earlier this session (49,085 B)
- [x] Lesson 05 color="#222" standalone-SVG audit CLOSED 2026-05-25 (16/16 standalone SVGs pass)
- [ ] Browser QA pass for Lesson 06 (deferred; see above)
- [ ] Browser QA pass for Lesson 05 (deferred; see above)
- [ ] `IMAGE_STYLE_GUIDE.md` v6 revision (deferred; see above)
- [ ] Optional progress-doc archive sweeps for Lessons 05 and 06 (deferred; see above)

## Close-out work completed this session

Three close-out work items landed in this chat's predecessor (the archive sweep chat) and earlier in this session (the IMAGE_STYLE_GUIDE.md v5 addenda chat and the Lesson 05 color audit chat) before this completion handoff chat. They are listed here for completeness of the Lesson 06 close-out record and to cross-reference the artifacts.

### Archive sweep (2026-05-25)

Three-tier archive sweep run to clean up the Lesson 06 working files and snapshot the session state at L06 close:

- **Images directory sweep:** `images\_archive\lesson_06_close_2026-05-25\` archived 5 `_temp_*` files plus 1 `.bak` file from the L06 PRODUCTION work cycle. Sub-tier `images\_archive\lesson_06_close_2026-05-25\_pending_delete\` staged 4 `_tmp_*` / `_diag_*` files for review before final removal.
- **Project-root sweep:** `_archive\` at project root archived 3 L06 handoff docs (`lesson_06_phase5_integration_planlock_HANDOFF.md`, `lesson_06_phase6_integration_planlock_HANDOFF.md`, and one earlier-phase handoff that paired with the resume chats). Handoff docs served their purpose at resume-chat time and are now historical reference only.
- **Session snapshot:** `lesson_06_session_final.md` (7,513 B) written at project root as a frozen snapshot of `session.md` at L06 close. Provides a permanent record of the Phase 6 INTEGRATION sub-chat 1 close pointer state that survives any future `session.md` overwrite.

### IMAGE_STYLE_GUIDE.md v5 addenda CLOSED

`\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` reached v5 at 49,085 bytes earlier in this session. The v5 addenda pass folded in the Lesson 05 close-out accumulated patterns (warning-vs-positive overlay colorway split, middle-dot SVG subhead convention, inline-stacked PNG overlay pattern, deeper-indent variant for inside-card figures, Blender 5.1.1 op-name corrections, Pillow availability) plus partial Lesson 06 contributions through Phase 4. The decorative-shape-only overlay variant (Phase 2 `c13` / `c14` / `c15`), the c25 / c41 composite-overlay validation across two precedents, the 4-callout multi-callout extension (c43), and the 10 Lesson 06 Phase 5 / 6 PRODUCTION discoveries are NOT yet in the guide; those land in v6 (deferred per the Deferred follow-ups section above).

### Lesson 05 color="#222" standalone-SVG audit CLOSED (2026-05-25)

The standing Lesson 05 deferred follow-up "Standalone `.svg` `color=\"#222\"` audit" CLOSED 2026-05-25. All 16 standalone Lesson 05 SVGs in `images/` (lesson_05_01 through lesson_05_24, the SVG subset) spot-checked for the `color="#222"` attribute on their root `<svg>` tag. Result: 16 of 16 pass; no on-disk file was inadvertently edited during integration. The standalone files retain `color="#222"` for `<img>` fallback rendering as intended; only the inlined HTML copies have the attribute stripped per the locked inline pattern. One Lesson 05 deferred follow-up closes; the remaining two (browser QA pass plus progress-doc archive sweep) carry forward.

## File footprint summary

HTML:

- `lesson_06_edit_mode_essentials.html`, 237,004 bytes (231.5 KB), up from 139,576 bytes (136.3 KB) at integration start (+97,428 bytes / +95.1 KB across six phases).

Images on disk in `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`:

- SVGs (3 files): #8 6,811 B; #21 ~7,200 B; #44 6,615 B. Total ~20,626 B (~20.1 KB).
- PNGs (47 files): file-size range from #3 at 20,255 B (thin-strip header band) to #35 at 1,132,765 B (3-panel cross-sub-chat composite); typical single-pose viewport renders 500-800 KB; 2-panel composites 400-800 KB; 3-panel composites 600-1200 KB; 4-panel composites 600-800 KB; full-window screenshots 400-550 KB; manual snip portrait UI 20-500 KB depending on capture region. Total PNG footprint ~25-30 MB (precise total available via a directory listing of `images/lesson_06_*.png`).

Total image asset footprint for Lesson 06: roughly 25-30 MB on disk. PNGs dominate (the 47 PNGs versus 3 SVGs); the 4K source snip for #39 (1,340,913 B, archived after the post-crop integration version landed at 374,511 B) was the heaviest single capture before the Phase 4 / Phase 6 Pillow crop+resize pre-integration step pattern brought it down to viewport-only dimensions.

## Next

Lesson 07 (`lesson_07_modeling_your_first_object.html`, 114.7 KB per status.md). Image requirements doc exists at `lesson_07_image_requirements.md`. Image production for Lesson 07 has not started.

Recommended kickoff: a planning chat that reads `lesson_07_image_requirements.md` and the head of `lesson_07_modeling_your_first_object.html` to confirm section IDs match the requirements doc, decides the SVG-vs-PNG split, decides the phase plan and per-phase figure counts (pre-allocate sub-chat slots for any phase with 5+ figures; pre-allocate dedicated plan-lock chats for any INTEGRATION phase with 6+ figures per the Lesson 06 cadence observation), locks the ID prefix registry (SVG prefixes plus PNG overlay `c{N}` ids), writes `lesson_07_integration_progress.md` modeled on `lesson_06_integration_progress.md` (or the leaner post-archive-sweep shape if Ray opts for the archive sweep first), and rewrites `session.md` to point at Phase 1 PRODUCTION. The Lessons 04 / 05 / 06 production-then-integration cadence, the four-state placement-table legend, the inline-stacked PNG overlay pattern (with multi-callout, composite-overlay, and decorative-shape-only variants), the warning-vs-positive colorway split, the deeper-indent inside-card variant, the resume-chat workflow precedent, the cross-sub-chat composite pattern, and the 10 Lesson 06 Phase 5 / 6 BlenderMCP discoveries all carry forward without modification.

Alternative kickoffs:

- **Lesson 06 browser QA pass.** Defer Lesson 07 planning one chat; verify all 50 Lesson 06 figures render correctly in dark and light modes and across viewport widths. Closes the highest-priority deferred item from this lesson close.
- **Lesson 05 plus Lesson 06 paired browser QA pass.** Broaden the QA scope to include all 30 Lesson 05 figures alongside the 50 Lesson 06 figures in a single QA chat; closes two of the standing deferred items.
- **`IMAGE_STYLE_GUIDE.md` v6 revision.** Fold in the Lesson 06 pattern additions and the 10 Phase 5 / 6 PRODUCTION discoveries listed in Deferred follow-ups above. Pairs well with Lesson 07 planning so the new lesson's baseline is correct from the start.
- **Lesson 05 plus Lesson 06 progress-doc archive sweeps.** Prune now-history Phase plan sections from both docs, leaving only the Status sections and placement tables. Mechanical work; one chat covers both.

Recommended pairing if budget allows: `IMAGE_STYLE_GUIDE.md` v6 revision plus Lesson 07 planning in one chat; the style-guide revision is relatively small and the planning step benefits from a fresh baseline. If the budget is tight, Lesson 07 planning alone is the cleanest next step.

---
