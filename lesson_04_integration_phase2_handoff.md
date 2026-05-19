# Lesson 04 Integration: Phase 2 Handoff

Handoff for the Phase 2 production chat. Phase 1 (production + integration) is complete. Phase 2 covers three SVGs across two HTML sections: move-grab (#3 transform_gizmo and #4 axis_movement) and rotate (#6 rotation_axes).

## State at handoff

- Phase 1 integration chat (just ended) inlined both selection-basics SVGs into `lesson_04_basic_object_manipulation.html`. HTML grew from 106.0 KB (108546 bytes) to 125.7 KB (128694 bytes), plus 20.1 KB across both inserts. SVG #1 placed in Understanding Selection States; SVG #2 placed in Advanced Selection Techniques.
- `lesson_04_integration_progress.md` now reflects 2 of 14 produced, 2 of 14 integrated. Placement table rows for #1 and #2 read "integrated". Phase plan table Phase 1 row reads "2 of 2 produced, 2 of 2 integrated".
- `status.md` updated: Lesson 04 row in Image Integration Status reads "2 of 14 produced, 2 of 14 integrated, in progress"; Module 1 file size table for Lesson 04 now shows 125.7 KB; Site-Wide Feature Status note updated.
- No Phase 2 SVGs produced yet. All three target SVGs are missing from `images/`.

## Phase 2 scope

Three SVGs spanning the move-grab and rotate sections of Lesson 04:

| # | File | Section | Pattern source |
|---|---|---|---|
| 3 | `lesson_04_03_transform_gizmo.svg` | move-grab → Understanding the Move Gizmo | Single-panel hero with annotated gizmo (Lesson 02 #2 `areas_editors_concept` pattern) |
| 4 | `lesson_04_04_axis_movement.svg` | move-grab → Moving Along Specific Axes | Three-panel triptych (Lesson 03 #3 `orbit_operation` motion-diagram pattern) |
| 6 | `lesson_04_06_rotation_axes.svg` | rotate → Understanding Rotation Axes | Three-panel triptych (same motion-diagram pattern as #4) |

Suggested production order: #3 first (single-panel, simplest to compose), then #4 and #6 together since they share the three-panel pattern and a lot of the panel scaffolding can be carried verbatim between them.

One-or-two SVGs per chat is the locked cadence. Three is feasible only if #4 and #6 are authored as direct variants of one another and the chat has the budget for it. If context gets tight after #3, end the chat and let a separate chat take #4 plus #6.

## Design notes

### #3 `lesson_04_03_transform_gizmo.svg`

- viewBox `0 0 800 560` per house style.
- Single-panel layout, cube at center stage. Like Lesson 02 #2 `areas_editors_concept`: one hero visual with annotation callouts arranged around it.
- Show the Blender move gizmo on a cube at the center of the canvas:
  - Red arrow pointing along the X axis with an arrowhead.
  - Green arrow pointing along the Y axis with an arrowhead.
  - Blue arrow pointing along the Z axis with an arrowhead.
  - A white outlined circle around the cube origin for free (any-direction) movement.
- The arrows use actual Blender axis colors (red `#E63946` or similar warm red, green `#4ADE80` reuses the brand resources-green, blue `#4A9EFF` reuses the brand course-blue). These colors are recognizable to anyone who has seen Blender. If the deviation from the brand-orange-only convention feels off, an alternative is to use Blender-orange `#FF6B00` for all three arrows with X-Y-Z label tags. Pick one and stay consistent across all three Phase 2 SVGs (the same call applies to #4 and #6).
- Annotation labels with small connector lines pointing from each gizmo element to a label off to the side:
  - X arrow → "X axis (left and right)".
  - Y arrow → "Y axis (forward and back)".
  - Z arrow → "Z axis (up and down)".
  - White circle → "Free movement (any direction)".
- Connector lines: `currentColor` opacity 0.3, stroke-width 1.5, stroke-linecap round (matches Lesson 03 connector style).
- Footer tip callout: brief reminder that the gizmo appears when an object is selected, and that you can press and drag any arrow to constrain motion to that axis.
- Header text: "THE MOVE GIZMO" (24pt, weight 700). Subtitle: "Three arrows and a center for free movement" (14pt, opacity 0.65).
- ID prefix: `tg`.

### #4 `lesson_04_04_axis_movement.svg`

- viewBox `0 0 800 560` per house style.
- Three-panel triptych. Each panel is roughly 240 wide. Pattern source: Lesson 03 motion-diagram trio (#3 `orbit_operation`, #4 `pan_operation`, #5 `zoom_operation`).
- Panel 1 (G then X, leftmost): cube starts at the panel center; a translation arrow shows the cube being displaced along the X axis. Operation badge near top: "G X". Optional ghost cube at the starting position with reduced opacity to show the before/after.
- Panel 2 (G then Y, middle): same composition with displacement along Y. Operation badge: "G Y".
- Panel 3 (G then Z, rightmost): same with displacement along Z. Operation badge: "G Z".
- Use Blender-orange `#FF6B00` for the translation arrows (or per-axis colors if you went that route for #3; whatever you picked, stay consistent across Phase 2 SVGs).
- Each panel has a small description below the visual:
  - Panel 1: "Move along X (red axis)".
  - Panel 2: "Move along Y (green axis)".
  - Panel 3: "Move along Z (blue axis)".
- A shared inset below the three panels (full width, `currentColor` fill-opacity 0.04, stroke-opacity 0.2) noting that pressing the same axis key twice locks to the local axes instead of global.
- Footer tip callout: typing a number after the key combo moves a precise distance (e.g., G Z 2 moves up 2 units).
- Header text: "AXIS-CONSTRAINED MOVEMENT" (24pt, weight 700). Subtitle: "G plus an axis key locks the move to one direction" (14pt, opacity 0.65).
- ID prefix: `am`.

### #6 `lesson_04_06_rotation_axes.svg`

- viewBox `0 0 800 560` per house style.
- Same three-panel triptych structure as #4. This is a near-direct variant.
- Panel 1 (R then X, leftmost): cube with a horizontal rod through it along the X axis, plus a curved arrow showing the rotation arc around that rod. Operation badge: "R X".
- Panel 2 (R then Y, middle): cube with a rod along the Y axis and a rotation arc. Badge: "R Y".
- Panel 3 (R then Z, rightmost): cube with a rod along the Z axis (vertical) and a rotation arc. Badge: "R Z".
- Use Blender-orange `#FF6B00` for the rotation arcs (consistent with the choice in #4).
- Each panel description:
  - Panel 1: "Pitch (around X)".
  - Panel 2: "Yaw (around Y)".
  - Panel 3: "Roll (around Z)".
- Shared inset: brief note that the rod direction is the rotation axis, and the arc shows the direction of rotation when the mouse drags clockwise.
- Footer tip callout: typing a number after R sets the exact rotation angle in degrees (e.g., R Z 45 rotates 45 degrees around Z).
- Header text: "ROTATION AXES" (24pt, weight 700). Subtitle: "R plus an axis key rotates around that axis" (14pt, opacity 0.65).
- ID prefix: `ra`.

## Locked SVG house style (must follow)

From `images/IMAGE_STYLE_GUIDE.md` and confirmed against the Phase 1 SVGs:

- Standalone `.svg` file in `images/` keeps `color="#222"` attribute on root `<svg>` for `<img>` fallback rendering. Only the inline copy in HTML drops it.
- Font stack: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`. Set once on `<svg>`.
- 3px Blender-orange `#FF6B00` accent strip at the top of the canvas (`<rect x="0" y="0" width="800" height="3" fill="#FF6B00"/>`).
- Title at (40, 56), 24pt, weight 700, `fill="currentColor"`.
- Subtitle at (40, 84), 14pt, `fill="currentColor"`, opacity 0.65.
- Divider line from (40, 108) to (760, 108), `stroke="currentColor"`, opacity 0.15.
- Body content starts around y=140.
- Footer tip callout at y=506, height 34, `fill="#FF6B00"` at fill-opacity 0.10, stroke `#FF6B00` at stroke-opacity 0.4. "Tip:" label in `#FF6B00` weight 700; body in `currentColor` weight 400. Both 13pt.
- Accessibility: `role="img"`, `aria-labelledby="{id}-title {id}-desc"`, matching `<title>` and `<desc>`.
- No animations, no scripts, no external dependencies.

## Tool checklist for the next chat

Deferred. Call `tool_search` before invoking:

- `tool_search "filesystem write"` → loads `Filesystem:write_file` for new SVG files in `images/`.
- `tool_search "filesystem read"` → loads `Filesystem:read_text_file` if a reference SVG needs to be inspected (recommend reading `lesson_03_03_orbit_operation.svg` for the triptych composition before authoring #4 and #6, and `lesson_02_02_areas_editors_concept.svg` for the single-panel hero composition before authoring #3).
- `tool_search "filesystem info"` → loads `Filesystem:get_file_info` to confirm each new SVG hits disk.

No `Filesystem:edit_file` calls needed for production (no existing-file modifications); integration into the HTML happens in a separate Phase 2 integration chat.

## Standing rules (unchanged)

- `\\wsl$\Ubuntu\` paths only. Never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content (SVG `<title>`, `<desc>`, label text, tip callout body). Use a comma, a colon, or a sentence break instead.
- Unique id prefix per SVG: `tg` for #3, `am` for #4, `ra` for #6. None collide with Lesson 03 prefixes or with `ss` and `st` from Phase 1.
- Brand palette locked: Blender orange `#FF6B00`, course blue `#4A9EFF`, practice purple `#B47EE8`, reference pink `#FF7EA8`, resources green `#4ADE80`, portfolio yellow `#F5C242`. Do not invent new hex except as noted in #3 design notes for the optional X-axis red (a hex like `#E63946` is a reasonable warm-red choice if needed; once picked, document the addition in the progress doc).
- Verify every new SVG with `Filesystem:get_file_info` after `Filesystem:write_file`.
- Warn before context gets tight rather than letting automatic compaction happen.

## End-of-chat obligations for Phase 2 production

1. Confirm each new SVG exists on disk via `Filesystem:get_file_info`. Record sizes.
2. Add a Phase 2 production status bullet at the top of `lesson_04_integration_progress.md`'s `## Status` list summarizing what shipped, the ID prefixes used, and the file sizes.
3. Update the Images available and missing section: move produced SVGs from the Missing list to the Available list.
4. Update the phase plan table Phase 2 row from "0 of 3 produced, 0 of 3 integrated" to reflect what was produced this chat (e.g., "3 of 3 produced, 0 of 3 integrated" if all three landed, or "1 of 3 produced" if only #3 landed).
5. Write `lesson_04_integration_phase2_integration_handoff.md` (Phase 2 integration to be run in a separate chat) once all three Phase 2 SVGs are on disk. If only some land this chat, write a Phase 2 continuation handoff instead.

## Verbatim kickoff prompt for the Phase 2 production chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 04 image integration, Phase 2 production. Author up to three SVGs for the move-grab and rotate sections: #3 lesson_04_03_transform_gizmo.svg, #4 lesson_04_04_axis_movement.svg, #6 lesson_04_06_rotation_axes.svg. Save to images/. No HTML edits this chat (integration is a separate phase chat).

First reads, in this order:
1. lesson_04_integration_phase2_handoff.md (this file) - has design notes and id-prefix assignments for all three SVGs.
2. lesson_04_integration_progress.md - confirms current state and the locked approach.
3. images/IMAGE_STYLE_GUIDE.md - SVG house style.
4. images/lesson_03_03_orbit_operation.svg - reference for the triptych composition that informs #4 and #6.
5. images/lesson_04_01_selection_states.svg or images/lesson_04_02_selection_tools.svg - reference for the Phase 1 style level (already proven through Phase 1 integration).

Tool discovery (LOCKED): tool_search before invoking. Filesystem:write_file for new SVGs in images/. Filesystem:get_file_info to verify after write. Filesystem:read_text_file for reference SVGs. Do NOT use Claude's built-in create_file (writes to Claude's container, not \\wsl$\ paths).

Standing rules: \\wsl$ paths only, no new em-dashes, unique id prefixes (tg for #3, am for #4, ra for #6), house style locked (3px orange top strip, currentColor labels, footer tip callout, full accessibility tags). Brand palette locked. Keep color="#222" attribute on each standalone .svg file's root tag (it gets stripped only when inlining into HTML in a future integration chat).

Cadence: one or two SVGs per chat is the ideal pace. Three is acceptable only if #4 and #6 are authored as direct variants of one another within budget. If context gets tight after #3, end the chat and let a separate chat take #4 and #6.

Deliverables this chat:
1. images/lesson_04_03_transform_gizmo.svg (or as many of the three as fit the budget).
2. images/lesson_04_04_axis_movement.svg.
3. images/lesson_04_06_rotation_axes.svg.
4. Update lesson_04_integration_progress.md: new Phase 2 production status bullet at top of ## Status list, Images available list updated, phase plan table Phase 2 row updated to reflect what shipped.
5. Write lesson_04_integration_phase2_integration_handoff.md once all three Phase 2 SVGs are on disk (or a Phase 2 continuation handoff if only some landed).

Warn me when context starts getting tight rather than letting automatic compaction happen.
```
