# Lesson 04 HTML Integration: Phase 3 Production Handoff

Hand-off doc for the next chat. Phase 3 produces two SVGs covering the scale and axis-constraints sections: #7 `scale_operations` and #5 `global_local_axes`. No HTML integration this chat. Phase 3 integration is a separate later chat after both SVGs are written to `images/` and verified.

State at handoff:

- HTML `lesson_04_basic_object_manipulation.html` is 162912 bytes (159.1 KB) with 5 of 14 images integrated (Phase 1 plus Phase 2 complete).
- `images/` contains 5 of 14 Lesson 04 assets: `lesson_04_01_selection_states.svg`, `lesson_04_02_selection_tools.svg`, `lesson_04_03_transform_gizmo.svg`, `lesson_04_04_axis_movement.svg`, `lesson_04_06_rotation_axes.svg`.
- `lesson_04_integration_progress.md` (29.9 KB) is the single source of truth for placement, status, and locked rules; read it first.
- `images/IMAGE_STYLE_GUIDE.md` palette revision to fold in the new X-axis red `#E63946` is still deferred to a dedicated chat, not Phase 3 production. Phase 3 SVGs use the new red anyway; the style guide just hasn't been updated yet.

## Standing rules (carry forward from prior chats, unchanged)

- `\\wsl$\Ubuntu\` paths only. Never `\\wsl.localhost\`.
- Project root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`.
- Image directory: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.
- Tool discovery: `tool_search` before invoking any Filesystem tool. The deferred tools needed this chat are `Filesystem:read_text_file`, `Filesystem:write_file`, `Filesystem:get_file_info`. Do NOT use the built-in `create_file` (writes to Claude container, not the WSL filesystem at `\\wsl$\Ubuntu\` paths).
- New file creation: `Filesystem:write_file` (Phase 3 produces two new SVGs).
- Verify every write with `Filesystem:get_file_info`.
- No new em-dashes in any new content (SVG body text, `<title>`, `<desc>`, this doc if revised, progress doc updates). Use commas, colons, or sentence breaks. Pre-existing em-dashes in source files are preserved verbatim through anchors.
- One SVG per chat is the ideal cadence; two per chat is workable when the second is a variant of an existing pattern. #7 and #5 are different patterns from each other, so the chat may want to do them in sequence with a short break between to confirm anchors, file sizes, and id prefixes match plan.
- Warn Ray before context gets tight rather than letting automatic compaction happen.

## House style essentials (locked, carry forward verbatim)

Every Lesson 04 SVG produced so far conforms to these. Phase 3 must match.

- **viewBox**: `0 0 800 560`.
- **xmlns**: `http://www.w3.org/2000/svg`.
- **Root attributes**: `role="img"`, `aria-labelledby="{prefix}-title {prefix}-desc"`, `font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"`, `color="#222"` (kept on the standalone `.svg` file for `<img>` fallback; will be stripped during a later integration chat).
- **First two children**: `<title id="{prefix}-title">...</title>` then `<desc id="{prefix}-desc">...</desc>`. Every other `id` in the SVG body must also be prefixed with the two-letter code so cross-SVG `id` collisions cannot happen when multiple inlines share the page.
- **Top decorative strip**: 3px tall, full width, fill `#FF6B00` (Blender orange). Sits at y=0.
- **Title text** (visible header): roughly y=42, font-size 22 to 26, fill `currentColor`, font-weight 600.
- **Subhead/secondary labels**: font-size 14 to 16, often `#FF6B00` for emphasis or `currentColor` for body text.
- **Body labels and connector lines**: `currentColor` so they inherit the page text color in dark mode.
- **Footer tip callout**: rounded rect (rx=8) at the bottom (typically y=490 to y=540), stroke `#FF6B00` (2px), fill `#FFF4EB` or `#FF6B00` at opacity 0.08. Contains a one-line tip in `#FF6B00` text or `currentColor`.
- **Accessibility tags non-negotiable**: `role="img"`, `aria-labelledby`, `<title>`, `<desc>`. The `<desc>` is the long-form screen-reader description; one to three sentences is typical.

## Axis color palette (LOCKED for Phase 3 and forward)

This is the canonical axis palette going forward. All three Phase 2 SVGs use it; Phase 3 must use it too:

- **X axis**: `#E63946` (new red; replaces the older `#FF6B6B` or `#ff5252` that some Lesson 03 diagrams used)
- **Y axis**: `#4ADE80` (resources-green; matches the green used in Lessons 01-03)
- **Z axis**: `#4A9EFF` (course-blue; matches the blue used in Lessons 01-03)
- **Blender orange `#FF6B00`**: reserved for the top strip, key-combo badges (B, C, G+X-style key indicators), footer tip callouts, subhead labels, and rotation arcs in #6. Not used as an axis color.

`images/IMAGE_STYLE_GUIDE.md` does not yet list `#E63946`; a later dedicated chat will fold it in. Phase 3 ships with the new red regardless of the style guide's current text.

## SVG #7: `lesson_04_07_scale_operations.svg`

**id prefix**: `so`

**Section**: scale (subsection "Uniform vs. Non-Uniform Scaling")

**Pattern**: 2x3 grid of cube variants on a light grid background. The grid layout reads top to bottom, left to right: original, uniform-up, uniform-down on the top row; stretched X, stretched Z, compressed Y on the bottom row.

**Layout**:

- Title text at top: "Scale Operations: Uniform vs. Non-Uniform" or similar.
- Optional one-line subhead noting "S then key shows the constrained axis."
- 2 rows by 3 columns of panels. Each panel roughly 240 wide by 180 tall (or similar), spaced with a small gutter.
- Light grid background visible within each panel as a faint reference (so the viewer can see what "2x" or "0.5x" looks like dimensionally). Use `currentColor` at opacity 0.1 or 0.15 for the grid lines.
- Each panel contains one cube drawn isometrically or front-three-quarter (re-use the cube drawing approach from Lesson 03 #7 `standard_views_cube` and Lesson 04 #1 and #3).
- Per-panel label below the cube identifying the operation: "Original (1x)", "Uniform 2x (S, 2)", "Uniform 0.5x (S, 0.5)", "Stretch X (S X 2)", "Stretch Z (S Z 3)", "Compress Y (S Y 0.5)".

**Per-panel detail**:

1. **Original**: standard cube, no scaling applied. Use `currentColor` outline, no fill or light fill. This is the reference.
2. **Uniform 2x**: same cube proportions, scaled up roughly 2x in viewport size. Keep it inside the panel bounds; the viewer should clearly see "bigger but same shape."
3. **Uniform 0.5x**: same cube proportions, scaled down 0.5x. Smaller but same shape.
4. **Stretch X**: cube stretched along X (twice as wide). Outline only.
5. **Stretch Z**: cube stretched along Z (three times as tall). The vertical stretch is the most visually distinct from the original.
6. **Compress Y**: cube compressed along Y (half depth). May look like a flattened slab.

**Color treatment**:

- All cube outlines `currentColor`.
- For the three axis-constrained panels (Stretch X, Stretch Z, Compress Y), tint the active-axis edges in the matching axis color (`#E63946` for X, `#4ADE80` for Y, `#4A9EFF` for Z) at full opacity. This makes the axis constraint visible at a glance.
- Operation badge for each non-original panel in the top-right of the panel: small rounded rect with the key combo in `#FF6B00`.

**Footer tip**: one-line callout reminding the viewer that S alone scales uniformly, S then X/Y/Z constrains the scale to one axis, and you can type a number to set the exact factor.

**Accessibility**:

- `<title id="so-title">`: "Scale operations: uniform and axis-constrained scaling"
- `<desc id="so-desc">`: roughly "Six cube variants arranged in a two-by-three grid. The top row shows uniform scaling: original, doubled in size, and halved. The bottom row shows axis-constrained scaling: stretched along X, stretched along Z, and compressed along Y. Each constrained panel highlights the active axis in its color."

**Anchor in HTML** (for the later Phase 3 integration chat, not this chat):

- Section: `#scale`
- Subsection: "Uniform vs. Non-Uniform Scaling"
- Insertion point: after the "Axis-Constrained Scaling" card's closing `</div>` (the card that lists S then X, S then Y, S then Z), before the "Try It Now: Stretch and Squash" card.

## SVG #5: `lesson_04_05_global_local_axes.svg`

**id prefix**: `gl`

**Section**: axis-constraints (subsection "Global vs. Local Axes")

**Pattern**: side-by-side comparison adapting the Lesson 03 perspective_depth/orthographic_parallels paired-panel pattern. Two panels at roughly equal width, with a clear gutter between, each titled with its mode label.

**Layout**:

- Title text at top: "Global vs. Local Axes" or similar.
- Optional one-line subhead noting "Press X X (or Y Y, Z Z) to switch the constraint to the object's local frame."
- Two panels side by side. Left panel roughly x=40 to x=380; right panel roughly x=420 to x=760.
- Each panel contains one cube drawn in three-quarter view with a small axis gnomon (X, Y, Z arrows) attached or near the cube.
- Left panel: cube in default orientation, axis gnomon aligned to world axes. Label below: "Global Axes (World Space)".
- Right panel: same cube rotated 45 degrees around Z (or some visually obvious rotation). Axis gnomon rotated WITH the cube to show the local frame. Label below: "Local Axes (Object Space)".

**Per-panel detail**:

- **Left (global)**: cube outline in `currentColor`. Gnomon arrows in the canonical axis colors: X arrow in `#E63946`, Y arrow in `#4ADE80`, Z arrow in `#4A9EFF`. Arrows originate from the cube center or a nearby corner and point outward. Label each arrow with its letter in matching color near the arrowhead.
- **Right (local)**: same cube, rotated. Gnomon arrows rotate with the cube. Same axis colors. The visual punch comes from seeing the X arrow no longer point in the same world direction as the global panel.
- Optional: faint dashed world-axis reference in the right panel (gray, `currentColor` at opacity 0.2) so the viewer can see how the local axes diverge from the global ones.

**Color treatment**:

- Cube outlines `currentColor` in both panels.
- Axis gnomon arrows in the canonical X/Y/Z colors (`#E63946`/`#4ADE80`/`#4A9EFF`) in both panels.
- Panel subheadings (the "Global Axes (World Space)" and "Local Axes (Object Space)" labels) in `#FF6B00` for emphasis.

**Footer tip**: one-line callout reminding the viewer that the first key press constrains to global axes (G X), and pressing the axis key twice switches to local axes (G X X). Same pattern works for R and S.

**Accessibility**:

- `<title id="gl-title">`: "Global axes versus local axes"
- `<desc id="gl-desc">`: roughly "Two cubes side by side. The left cube sits in default orientation with axis arrows pointing along the world X, Y, and Z directions. The right cube is rotated and shows the same axis arrows attached to the cube itself, so they now point along the object's own X, Y, and Z directions. The colors red, green, and blue label X, Y, and Z in both panels."

**Anchor in HTML** (for the later Phase 3 integration chat, not this chat):

- Section: `#axis-constraints`
- Subsection: "Global vs. Local Axes"
- Insertion point: after the "Global vs Local Orientation" card's closing `</div>`, before the "Try It Now: Global vs Local" card.

## Production order and cadence

Suggested order:

1. **#7 scale_operations first**: it is a 2x3 grid which is more layout-heavy but conceptually simpler (six static cubes with clear labels).
2. **#5 global_local_axes second**: it is a two-panel comparison which mirrors patterns Phase 2 already established; the design risk is lower because the pattern is proven.

Two-per-chat is acceptable here because:

- Both use the locked house style and the locked axis palette.
- #5 directly reuses the Lesson 03 paired-panel composition.
- The 2x3 grid in #7 is a contained pattern with clear per-panel boundaries.

If the chat is running heavy after #7, ship #7 and defer #5 to a follow-up production chat. Document that decision in the progress doc.

## Files to write and verify

After production:

1. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_07_scale_operations.svg`. Expected size somewhere in the 9 to 12 KB range based on the layout complexity (six panels with cubes, labels, and an outer frame). Verify with `Filesystem:get_file_info`.
2. `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_05_global_local_axes.svg`. Expected size somewhere in the 7 to 10 KB range. Verify with `Filesystem:get_file_info`.

## Progress doc updates at end of chat

Add a new Status bullet at the top of `lesson_04_integration_progress.md` covering:

- Which SVGs shipped (#7, #5, or just #7 if #5 deferred).
- Final file sizes from `Filesystem:get_file_info`.
- id prefixes used (`so` for #7, `gl` for #5).
- Locked house style adherence confirmation: 800x560 viewBox, 3px Blender-orange top strip, `currentColor` labels, axis colors per palette, footer tip callout, full accessibility tags, `color="#222"` retained on the standalone root.
- Axis-color palette continuity confirmation: `#E63946` X / `#4ADE80` Y / `#4A9EFF` Z / `#FF6B00` Blender-orange for non-axis accents.
- No new em-dashes confirmation.
- No HTML edits this chat; Phase 3 integration deferred.
- Pointer to a fresh Phase 3 integration handoff at `lesson_04_integration_phase3_integration_handoff.md` (which the production chat or a follow-up chat writes).

Update the Available section to bump SVGs to 7 of 10 (or 6 of 10 if only #7 shipped).
Remove the corresponding entries from the Missing section.
Update the phase plan table Phase 3 row from "0 of 2 produced" to "2 of 2 produced, 0 of 2 integrated" (or "1 of 2 produced, 0 of 2 integrated" if only #7 shipped).
Flip placement table rows for #7 and #5 from "produced; not integrated" wait, they are currently labeled "produced; not integrated" but actually look again at the progress doc state right now: at end of Phase 2 integration the placement rows for #7 and #5 still read "produced; not integrated" — that label was a leftover artifact and they are NOT actually produced yet. So at end of Phase 3 production, those rows should read "produced; not integrated" (which they already do; no flip needed) UNLESS the placement table tracks production status separately. **Important: re-read the current placement table state at chat start before editing.** If #7 and #5 rows already read "produced; not integrated" then no edit is needed for them this chat (production catches the label up to truth; integration is a later chat).

Actually, the cleanest cleanup at end of Phase 3 production is:

- Status bullet at top: new (covered above).
- Phase plan table Phase 2 row: untouched (already correct at "3 of 3 produced, 3 of 3 integrated").
- Phase plan table Phase 3 row: "0 of 2 produced, 0 of 2 integrated" → "2 of 2 produced, 0 of 2 integrated".
- Placement table rows for #7 and #5: keep "produced; not integrated" (the label is correct now that they are produced; it was inaccurate before).

## Status.md updates at end of chat

Update the Image Production and Integration row for Lesson 04 from "5 of 14 produced, 5 of 14 integrated" to "7 of 14 produced, 5 of 14 integrated" (or "6 of 14 produced, 5 of 14 integrated" if only #7 shipped).
Bump Last Updated date.
The Module 1 file size table does NOT change this chat (no HTML edits).
The Image Integration Status table Lesson 04 row narrative gets a short Phase 3 production paragraph appended noting which SVGs were produced and pointing at the Phase 3 integration handoff filename.

## What this chat does NOT do

- No HTML edits. `lesson_04_basic_object_manipulation.html` stays at 162912 bytes.
- No palette revision in `images/IMAGE_STYLE_GUIDE.md`. That is still deferred.
- No PNG production. PNGs #8, #9, #12, #13 are Phase 4, 5, and 6 work.
- No Phase 3 integration handoff written (that doc gets authored after both SVGs ship, ideally at the end of this chat or beginning of the next).

## Key file paths (verbatim, for tool calls)

- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_04_integration_progress.md`
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\status.md`
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (reference only; do not modify)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_07_scale_operations.svg` (to create)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_05_global_local_axes.svg` (to create)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_03_transform_gizmo.svg` (reference: same palette, single-panel pattern)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_04_axis_movement.svg` (reference: same palette, three-panel pattern, ghost-cube style)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_06_rotation_axes.svg` (reference: same palette, three-panel pattern, rod-and-arc style)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_12_perspective_depth.svg` (reference for #5 paired-panel composition)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_13_orthographic_parallels.svg` (reference for #5 paired-panel composition)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_07_standard_views_cube.svg` (reference for cube drawing approach in #7)

## Recommended first reads

1. `lesson_04_integration_progress.md` — current state, locked rules, pattern notes for #7 and #5.
2. This handoff (`lesson_04_integration_phase3_handoff.md`).
3. `images/lesson_04_04_axis_movement.svg` or `images/lesson_04_06_rotation_axes.svg` — most recent SVG to pattern-match house style, axis colors, and structure.
4. `images/lesson_03_12_perspective_depth.svg` plus `lesson_03_13_orthographic_parallels.svg` if going for the paired-panel composition on #5.

Read each file fully on entry. Do not assume any of these are still in the chat context from a prior session.
