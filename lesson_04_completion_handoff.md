# Lesson 04 Image Production and Integration: COMPLETE

Lesson 04 image work is closed. All 14 images produced or captured; all 14 integrated into `lesson_04_basic_object_manipulation.html`. Final HTML size: 229.2 KB (234,730 bytes), up from 106.0 KB (108,546 bytes) at integration start (+123.2 KB across six phases).

## What was produced

14 of 14 images per `lesson_04_image_requirements.md`. 10 SVGs (inlined into HTML) plus 4 PNG captures (3 via the MCP Blender bridge from a Blender 5.1 session, 1 via manual Win+Shift+S for a pie menu the bridge cannot capture). Files at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.

SVGs (10):

- #1 `lesson_04_01_selection_states.svg` — 5,578 bytes, id prefix `ss`; three selection states (deselected, selected, active) shown on identical cubes with outline coloring
- #2 `lesson_04_02_selection_tools.svg` — 9,540 bytes, id prefix `st`; reference grid for the four primary selection tools (Click, Box, Circle, Lasso) with hotkey badges and one-line use-when blurbs
- #3 `lesson_04_03_transform_gizmo.svg` — 7,164 bytes, id prefix `tg`; isometric move gizmo with red X, green Y, blue Z handles plus center sphere and the plane-constraint triangles labeled
- #4 `lesson_04_04_axis_movement.svg` — 9,533 bytes, id prefix `am`; three side-by-side panels showing G+X, G+Y, G+Z constrained motion with directional arrows along each colored axis
- #5 `lesson_04_05_global_local_axes.svg` — 8,597 bytes, id prefix `gl`; paired panels contrasting global axes (world-aligned) with local axes (object-rotated) on a cube tilted off-axis
- #6 `lesson_04_06_rotation_axes.svg` — 9,351 bytes, id prefix `ra`; three side-by-side panels showing R+X, R+Y, R+Z rotation around each colored axis with curved arrow indicators
- #7 `lesson_04_07_scale_operations.svg` — 12,848 bytes, id prefix `so`; uniform-versus-axis-constrained scale comparison with S, S+X, S+Y, S+Z badges and demo cubes
- #10 `lesson_04_10_duplication_comparison.svg` — 8,315 bytes, id prefix `dc`; two-panel comparison with Independent Copy (Shift + D) on the left and Linked Copy (Alt + D) on the right, with a horizontal chain-link icon between the right-panel cubes signaling shared mesh data
- #11 `lesson_04_11_origin_point.svg` — 7,106 bytes, id prefix `op`; central cube with orange origin dot and three annotation cards around it (Rotation pivot, Scale center, Location reference) connected by dashed lines to the dot
- #14 `lesson_04_14_keyboard_shortcuts.svg` — 10,062 bytes, id prefix `ks`; two-column cheat-sheet card at 800x560 with orange-filled `#FF6B00` key-combo badges (a deliberate variation from the Lessons 02 and 03 muted-badge pattern, matching Lesson 04's broader operation-badge idiom from #5 and #10) covering SELECTION, TRANSFORMATIONS, DUPLICATION & CURSOR, and ADVANCED

PNGs (4):

- #8 `lesson_04_08_3d_cursor.png` — 783,526 bytes (765.2 KB), 1280x720, c8 overlay prefix; OpenGL viewport render via the BlenderMCP bridge with the 3D cursor moved to world coordinates (2.5, -1.5, 0.8), a UV sphere added at the cursor location, and the default cube reselected; carries three orange callouts in an inline-stacked overlay (3D Cursor label and arrow at the cursor target ring, New object spawns at cursor label and arrow at the UV sphere, dashed circle around the cursor plus a pivot reference label and arrow)
- #9 `lesson_04_09_snap_menu.png` — 112,585 bytes (110.0 KB), 882x450, c9 overlay prefix; manual Win+Shift+S capture of the Shift+S snap pie menu with all eight wedges legible and the default cube visible behind (the BlenderMCP bridge cannot capture transient pie menus); carries one overlay callout, a dashed orange rectangle around all eight pie wedges plus a Shift + S Snap Menu title pill sitting tab-style on the upper-left of the rectangle
- #12 `lesson_04_12_transform_properties.png` — 453,308 bytes (442.7 KB), 1920x1046, c12 overlay prefix; N-panel Item tab capture via the BlenderMCP bridge under the addon-safe pattern, with the default cube's `location = (2.5, -1.0, 1.5)`, `rotation_euler = (radians(30), 0, radians(45))`, and `scale = (1.5, 1.0, 0.75)` so the N-panel fields show meaningfully populated; carries a minimal #9-style overlay (single dashed orange `#FF6B00` rectangle tracing the Transform section plus a filled orange tab-style title pill above)
- #13 `lesson_04_13_completed_scene.png` — 501,641 bytes (490 KB), 1280x720, no overlay; finished table-scene render via the BlenderMCP bridge of the manipulation-project target (6m ground plane plus 2m square table top at z=0.75 plus four corner legs plus UV sphere, cone, torus lying flat, and cylinder on the table top, point light overhead, camera at the three-quarter perspective angle), rendered via `bpy.ops.render.render(write_still=True)` with `BLENDER_EEVEE`

## What was integrated

Six phases across six chats (one production chat plus one integration chat per phase from Phase 4 onward; Phases 1, 2, and 3 ran integration directly off requirements-doc SVG production). Each phase placed its figures in document order using the locked inline pattern. HTML grew from 106.0 KB to 229.2 KB.

| Phase | Section(s) | Figures | Cumulative HTML size |
|---|---|---|---|
| 1 | selection-basics | #1 ss, #2 st (both SVG) | 125.7 KB |
| 2 | move-grab, rotate | #3 tg, #4 am, #6 ra (all SVG) | 159.1 KB |
| 3 | scale, axis-constraints | #7 so, #5 gl (both SVG) | 187.1 KB |
| 4 | 3d-cursor | #8 c8, #9 c9 (both PNG with inline-stacked SVG overlays) | 192.9 KB |
| 5 | duplication, origin-transform | #10 dc, #11 op (both SVG); #12 c12 (PNG with overlay) | 215.6 KB |
| 6 | manipulation-project, summary | #13 (PNG, no overlay); #14 ks (SVG) | 229.2 KB |

Per-phase handoff files at project root: `lesson_04_integration_phase1_integration_handoff.md`, `lesson_04_integration_phase2_handoff.md`, `lesson_04_integration_phase2_integration_handoff.md`, `lesson_04_integration_phase3_integration_handoff.md`, plus the in-flight handoffs Phases 4, 5, and 6 generated. The full phase-by-phase narrative lives in `lesson_04_integration_progress.md`.

## ID-prefix registry for this page

10 inline SVGs plus 3 PNG annotation overlay namespaces, no collisions:

- Inline SVGs: `ss` (#1), `st` (#2), `tg` (#3), `am` (#4), `gl` (#5), `ra` (#6), `so` (#7), `dc` (#10), `op` (#11), `ks` (#14)
- PNG annotation overlays: `c8` (#8), `c9` (#9), `c12` (#12)
- PNG #13 carries no overlay (the rendered scene itself is the visual reference and needs no callouts), so no `c13-` prefix exists

## Locked inline pattern (carry forward to Lesson 05 and beyond)

Identical to the Lesson 03 close-out. Restated here so this file stands alone:

- Plain `<figure>` plus `<figcaption>` wrapper, no class. `styles/main.css` already styles both.
- PNGs: `<img src="images/..." alt="..." loading="lazy">` inside the figure, with descriptive alt text.
- Inline SVGs: re-indent to 20-space content depth. `<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<img>`, `<figcaption>` at column 20; multi-line svg attribute continuations at column 25; SVG body at column 22; `<g>` children at column 24; multi-line `<rect>` continuation at column 28; `<tspan>` content at column 24.
- **Strip the `color="#222"` attribute** from the root `<svg>` when inlining. That attribute locks `currentColor` and breaks dark mode when inlined. The standalone `.svg` file in `images/` keeps the attribute for fallback rendering; only the inline copy in HTML drops it. If `color="#222"` sits on its own continuation line, drop the line and reattach the closing `>` to the previous attribute line.
- 2 to 3 line anchors for `oldText` so each insertion point is unique within the file.
- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note. Pre-existing em-dashes in source content are preserved verbatim.

## Inline-stacked PNG overlay pattern (NEW in Lesson 04; carry forward)

When a captured PNG needs annotation callouts that should scale and survive dark mode, do not bake the callouts into a flattened raster. Stack an inline SVG over the `<img>` instead. Pattern:

```html
<figure>
    <div style="position: relative; display: inline-block; max-width: 100%;">
        <img src="images/lesson_NN_XX_name.png"
             alt="..."
             loading="lazy"
             style="display: block; max-width: 100%; height: auto; margin: 0;">
        <svg viewBox="0 0 PNG_W PNG_H"
             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
             aria-hidden="true">
            <!-- callouts in c{N}- prefixed ids, using #FF6B00 (Blender orange) -->
        </svg>
    </div>
    <figcaption>...</figcaption>
</figure>
```

Key details:

- The wrapper div needs `position: relative; display: inline-block; max-width: 100%` so it sizes to the image and provides the absolute-positioning context.
- The `<img>` needs the inline `style` to override the global `img { margin: var(--spacing-md) auto; }` rule that would otherwise blow out the wrapper's natural sizing.
- The overlay SVG viewBox must exactly match the PNG pixel dimensions (`viewBox="0 0 PNG_W PNG_H"`) so callout coordinates are pixel-accurate against the source capture, even though the rendered SVG scales fluidly with the image.
- `pointer-events: none` on the overlay so clicks reach the image (relevant if lightboxes or right-click-save are wanted).
- Namespace overlay ids `c{N}-*` where N is the image number, to avoid `<title>`/`<desc>`/marker-id collisions with the inline SVGs on the page.
- Preview overlay geometry against both the full-resolution PNG and a downscaled lesson-display-width version (around 800px wide) with PIL before committing the HTML edit. Coordinates look fine at full res but get illegible if labels are too small or arrows too thin at display width.

Lesson 04 used the pattern on PNGs #8, #9, and #12. Lesson 03 PNGs all used flattened annotation (callouts baked in during capture or post-processing); the inline-stacked pattern is the new default going forward because it keeps the source capture clean and the callouts editable.

## Tool selection rules (LOCKED, applies to all future lessons)

Tools are deferred. Call `tool_search` before invoking. The previous chat's compaction summary may say a tool was unavailable; that was true for *that* chat, not necessarily the current one. Always verify your own toolset rather than inheriting the assumption.

**For new file writes:** `Filesystem:write_file` (load via `tool_search` for "filesystem write"). Do NOT use Claude's built-in `create_file`. The built-in writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths. It reports "File created successfully" but the file never appears on disk. Always verify with `Filesystem:get_file_info` after every write.

**For edits to existing files:** `Filesystem:edit_file` with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.

**For PNG capture via Blender:** lowercase `blender:execute_blender_code` (uppercase hangs). Full pipeline recipes documented in `lesson_02_next_chat_handoff.md` (still valid reference) plus the addon-safe variant introduced this lesson (see LOCKED RULE below).

**For pie menus and other transient UI Blender's render API cannot reach:** manual Win+Shift+S capture into `images/` directly. Lesson 04 #9 (Shift+S snap pie menu) is the canonical example.

**For other raster sources:** Canva and Adobe for creativity are available as MCP connectors when AI generation is the right call. For Blender-specific UI screenshots, the live MCP Blender bridge remains the strongly preferred sourcing route; AI generation is a fallback only and should be documented in `lesson_NN_image_prompts.md` with concrete platform-specific prompts and acceptance criteria.

## LOCKED RULE from Lesson 04 Phase 4 production (2026-05-19)

**Never call `bpy.ops.wm.read_factory_settings(use_empty=False)` from inside a BlenderMCP `execute_blender_code` payload.**

This call reloads Blender's startup file, which has the side effect of unregistering all installed addons, including the BlenderMCP addon itself. The bridge dies mid-execution. The capture script appears to hang; Blender becomes unresponsive; the only recovery is to restart Blender and re-enable the addon.

This was hit twice during Phase 4 PNG capture before the failure mode was identified. The Phase 4 production pass patched `lesson_04_image_prompts.md` to remove the call from all four PNG state-setup snippets and added an Addon safety note documenting the failure mode. Phase 5 and Phase 6 production carried the rule forward without incident.

Safe alternative for state setup: clean Blender state manually (delete unwanted objects via `bpy.data.objects.remove(obj, do_unlink=True)`, reset cursor with `bpy.context.scene.cursor.location = (0, 0, 0)`, etc.) inside the same code payload. Trade-off: a few extra lines per snippet versus a working bridge.

## Render engine fallback path (BLENDER_EEVEE_NEXT → BLENDER_EEVEE)

Discovered during Phase 6 production while rendering PNG #13 (finished table-scene). The current `lesson_04_image_prompts.md` specifies `BLENDER_EEVEE_NEXT` as the preferred engine, but the installed Blender exposed only the legacy engine enum `('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')`. Setting `bpy.context.scene.render.engine = 'BLENDER_EEVEE_NEXT'` raised an enum-value error.

Documented fallback path (already noted in `lesson_04_image_prompts.md`): try `BLENDER_EEVEE_NEXT` first; on enum error, fall back to `BLENDER_EEVEE`. Both produce visually comparable output for the lesson's render needs. Carry the fallback forward when authoring Blender capture snippets for future lessons until project-wide Blender 5.1 currency is confirmed (currently audited per-lesson; Lesson 01 done).

## Four-state placement-table legend (NEW in Lesson 04; carry forward)

Per-lesson placement tables now use four states rather than two:

- `not captured; not integrated` (or `not produced; not integrated`) — the image does not yet exist on disk
- `produced; not integrated` (or `captured; not integrated`) — the image is on disk in `images/` but has not been inlined into the HTML
- `produced; handoff_written; not integrated` — production close-of-phase intermediate state, written when a production chat completes but its integration chat has not yet started; used to make the production-integration handoff explicit on disk
- `integrated` — the image is inlined into the HTML and the relevant placement-table row plus phase-plan row both reflect the final state

This is the minimum viable adoption of `INTERRUPTION_RECOVERY.md` pillar 2.4 (intermediate states). Lesson 04 was the first lesson to apply it, starting with Phase 3 rows #7 and #5. The legend lives directly above each lesson's placement table.

## SVG patterns proven in Lesson 04 (reuse for Lesson 05 and beyond)

All Lesson 04 SVGs follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` with the palette extension noted in the next section. Patterns specifically validated this lesson:

**Three-panel axis-comparison set (#4 am, #6 ra).** Side-by-side panels showing the same operation along each colored axis (X, Y, Z) with directional arrows or curved rotation indicators. Reusable for any "operation has three flavors aligned to the three axes" topic. The two SVGs share a panel-layout template that the next axis-aware diagram can pick up directly. ID prefixes used: `am` (axis movement), `ra` (rotation axes).

**Paired-panel comparison (#5 gl, #10 dc).** Two adjacent square panels in a single SVG, each with its own demo object and labeled badge, contrasting two related concepts. Lesson 04 used this for Global vs Local axes (#5) and Independent vs Linked duplication (#10). The chain-link icon variation on #10 (a horizontal connector between the two right-panel cubes signaling shared data) is reusable for any "these two things share state" comparison. ID prefixes used: `gl`, `dc`.

**Single-panel hero with annotation cards (#11 op).** Central object with cards arranged around it, each card connected to a labeled point on the object via a dashed line. Adapted from the Lesson 03 #1 big-three pattern but with three callouts radiating off a single visual focal point rather than three operations side-by-side. Reusable for any "one thing serves multiple roles" topic. ID prefix `op`.

**Scale operations grid (#7 so).** Uniform-versus-axis-constrained scaling shown as a grid of demo cubes with S, S+X, S+Y, S+Z badges and result silhouettes. Densest single-SVG layout in the lesson (12,848 bytes). Reusable for any operation that has a uniform mode plus per-axis modes. ID prefix `so`.

**Transform gizmo elevation (#3 tg).** Isometric three-axis gizmo with center sphere, three colored handles, and three plane-constraint triangles all labeled. Carries the operation-grammar of the move tool more completely than a flat 2D diagram. Reusable for any 3D widget that has multiple labeled affordances. ID prefix `tg`.

**Reference card (#14 ks).** Two-column grid at the tighter 800x560 Lesson 04 canvas (vs the 800x680 used by Lessons 02 and 03 cheat sheets) with orange-filled `#FF6B00` key-combo badges and white bold text. Deliberate variation from the Lessons 02 and 03 muted `currentColor` `fill-opacity=0.08` badge pattern, matching Lesson 04's broader operation-badge idiom from #10 and #5. Four categories tested (SELECTION, TRANSFORMATIONS, DUPLICATION & CURSOR, ADVANCED). Reusable for any "essential shortcuts" summary where the lesson's other figures already lean on filled-orange badges; use the muted-badge variant when the cheat sheet stands alone visually (per Lessons 02 and 03). ID prefix `ks`.

## Cheat-sheet badge styling decision (documented for future reference)

Lessons 02 and 03 each shipped a two-column cheat-sheet reference card (`lesson_02_18_keyboard_shortcuts_reference.svg`, `lesson_03_18_navigation_shortcuts_reference.svg`) with muted key-combo badges (`currentColor` fill at `fill-opacity=0.08`). Lesson 04's cheat sheet (`lesson_04_14_keyboard_shortcuts.svg`) deliberately uses filled Blender-orange `#FF6B00` badges with white bold text instead.

Rationale: Lesson 04's earlier figures (#5 gl, #10 dc) both use filled orange operation badges as the dominant visual idiom on the page. A muted cheat-sheet card would have read as visually demoted relative to the operation diagrams that precede it. The filled-orange variant maintains visual continuity within the lesson at the cost of inter-lesson consistency.

Future-lesson rule: choose the badge variant that matches the lesson's broader badge idiom, not a project-wide default. Document the choice in the lesson's integration progress doc the first time it appears.

## Brand palette (UPDATED for Lesson 04)

The Lesson 03 close-out palette continues unchanged. **New addition introduced in Lesson 04 Phase 2**: X-axis red.

- Blender brand / Orange operation badge: `#FF6B00`
- Course / structure: `#4A9EFF` (also Z-axis blue in axis-aware diagrams; darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external / Y-axis green: `#4ADE80`
- Portfolio / outcome: `#F5C242`
- **X-axis red (NEW): `#E63946`**

The X-axis red was introduced in Phase 2 across #3 tg, #4 am, and #6 ra alongside the existing palette green `#4ADE80` (Y) and course-blue `#4A9EFF` (Z). Phase 3 carried it forward across #7 so and #5 gl. The red is canonical going forward and is queued for inclusion in the next revision of `images/IMAGE_STYLE_GUIDE.md` (currently a deferred item, called out in the Lesson 04 integration progress notes).

The Z-axis blue and the course-structure blue are intentionally the same hex (`#4A9EFF`). The Y-axis green and the resources-external green are intentionally the same hex (`#4ADE80`). When palette roles compete on a single diagram (e.g., a course-flow chart with axis annotations), reserve `#FF6B00` orange to break the tie since orange is not an axis color.

## Production-then-integration cadence (carry forward)

Lesson 03 ran production and integration tightly coupled per phase, with production chats often spilling directly into integration in the same session. Lesson 04 adopted a stricter cadence: one chat per production pass plus one chat per integration pass, with an explicit `produced; handoff_written; not integrated` state on disk between them.

Benefits observed:

- Production-chat context budget stayed clean (no need to also hold lesson HTML layout decisions in window).
- Integration-chat context budget stayed clean (no need to also hold SVG authoring decisions in window).
- Handoff files captured the production-to-integration interface explicitly, surviving any chat compaction.
- Per-phase placement-table state transitions became audit-able in the integration progress doc.

Trade-off: more chats per lesson (Lesson 04 used six production chats plus six integration chats vs. Lesson 03's five integration chats covering six phases). Total context budget across all chats is broadly comparable; the cost is in chat-startup overhead.

Recommendation for Lesson 05 and beyond: continue the strict cadence unless a phase has only one image, in which case combining is fine.

## Standing rules (carry forward)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`
- No new em-dashes anywhere in new content; preserve pre-existing em-dashes verbatim
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (palette revision to fold in `#E63946` X-axis red is queued)
- One phase per chat is the ideal cadence for integration; one production chat plus one integration chat per phase is the Lesson 04 cadence (carry forward)
- Warn Ray before context gets tight rather than letting automatic compaction happen
- Propose spec plus design plan before generating new images; lock plan in writing first, then build
- Per-chat archive discipline for intermediate captures (PNG work only; SVGs have no intermediates)
- Always `tool_search` for deferred tools rather than inheriting "tool X is unavailable" assumptions from a compaction summary
- LOCKED RULE: no `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere in BlenderMCP capture code (kills the bridge)
- LOCKED RULE: BLENDER_EEVEE_NEXT → BLENDER_EEVEE fallback path when `BLENDER_EEVEE_NEXT` raises an enum-value error
- Use the inline-stacked PNG overlay pattern (wrapper div with `position: relative; display: inline-block`, overlay SVG with viewBox matching PNG pixel dimensions, `pointer-events: none`, namespaced `c{N}-*` ids) when a captured PNG needs annotation callouts; do not bake callouts into the raster

## File footprint summary

HTML:

- `lesson_04_basic_object_manipulation.html` — 234,730 bytes (229.2 KB), up from 108,546 bytes (106.0 KB) at integration start (+126,184 bytes / +123.2 KB)

Images on disk in `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`:

- SVGs: #1 5,578 B; #2 9,540 B; #3 7,164 B; #4 9,533 B; #5 8,597 B; #6 9,351 B; #7 12,848 B; #10 8,315 B; #11 7,106 B; #14 10,062 B (10 files, 88,094 B total / ~86 KB)
- PNGs: #8 783,526 B (765.2 KB); #9 112,585 B (110 KB); #12 453,308 B (442.7 KB); #13 501,641 B (490 KB) (4 files, 1,851,060 B total / ~1.77 MB)

Total image asset footprint for Lesson 04: ~1.85 MB on disk. PNGs dominate; the 10 SVGs together come in well under 90 KB.

## Next

Lesson 05 (`lesson_05_understanding_meshes_and_geometry.html`, currently 82.4 KB per status.md). Image requirements doc exists at `lesson_05_image_requirements.md`. Image production for Lesson 05 has not started; per status.md, Lessons 05 through 51 are all still "not started" for image production and integration.

Recommended kickoff: a planning chat that reads the Lesson 05 requirements doc and the HTML, writes `lesson_05_integration_progress.md` modeled on `lesson_04_integration_progress.md` (which itself was modeled on Lesson 03's), decides the phase plan, and (if context budget allows) begins Phase 1 SVG production. The Lesson 04 production-then-integration cadence plus the four-state placement-table legend should carry forward without modification.

Deferred follow-up: revise `images/IMAGE_STYLE_GUIDE.md` to fold in the `#E63946` X-axis red as canonical palette. Worth pairing with the Lesson 05 planning chat so the new lesson's palette baseline is correct from the start.
