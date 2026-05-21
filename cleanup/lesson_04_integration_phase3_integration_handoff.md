# Lesson 04 HTML Integration: Phase 3 Integration Handoff

This handoff sets up the next chat to inline the two Phase 3 SVGs into `lesson_04_basic_object_manipulation.html`. Phase 3 production is complete and both SVGs are verified on disk. No HTML edits have happened yet for Phase 3.

## Chat goal

Inline `lesson_04_07_scale_operations.svg` into the `#scale` section and `lesson_04_05_global_local_axes.svg` into the `#axis-constraints` section. Use `Filesystem:edit_file` with `dryRun=true` first, then commit. Update `lesson_04_integration_progress.md` and `status.md` after both inserts. One phase per chat is the locked cadence.

## Inputs

- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_04_basic_object_manipulation.html` (162912 bytes, 159.1 KB at chat start)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_07_scale_operations.svg` (12848 bytes, 12.5 KB, id prefix `so`)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_05_global_local_axes.svg` (8597 bytes, 8.4 KB, id prefix `gl`)
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_04_integration_progress.md` for placement table and post-edit updates
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\status.md` for the Lesson 04 status row

## Outputs

- `lesson_04_basic_object_manipulation.html` grown by both inserts (estimated 25 to 30 KB across the two figures based on Phase 2 deltas, putting the file at roughly 185 to 190 KB after integration; verify with `Filesystem:get_file_info` after each commit)
- `lesson_04_integration_progress.md` updated: placement table rows #7 and #5 flipped to "integrated"; phase plan table Phase 3 row flipped to "2 of 2 produced, 2 of 2 integrated"; new Status bullet at top covering the integration deltas
- `status.md` updated: Image Production and Integration row for Lesson 04 advanced to "7 of 14 produced, 7 of 14 integrated"; Module 1 file size table row updated to the new byte count; Last Updated date bumped; Image Integration Status narrative appended for Lesson 04
- Phase 4 handoff written at `lesson_04_integration_phase4_handoff.md` covering the two PNG captures for the 3d-cursor section (#8 3d_cursor and #9 snap_menu)

## Production order in this integration chat

Document order: #7 sits in `#scale`, which appears before `#axis-constraints` in the HTML. Integrate #7 first, then #5. That keeps the edit-then-verify cycle ordered the same way as the file reads top-to-bottom, and makes the byte-delta accounting in the progress bullet easier to write.

## SVG #7: scale_operations placement

Section: `#scale` (the `<section id="scale">` block).

Insertion point: in the "Uniform vs. Non-Uniform Scaling" subsection, after the "Axis-Constrained Scaling" card's closing `</div>` (the card lists `S` then `X`, `S` then `Y`, `S` then `Z`), before the "Try It Now: Stretch and Squash" card.

Anchor strategy: use the closing `</div>` of the Axis-Constrained Scaling card plus the opening of the Try It Now: Stretch and Squash card as the 2 to 3 line `oldText` window. Both element labels are unique within the file. Always run `dryRun=true` first to confirm the anchor matches exactly once.

Figcaption draft (em-dash-free):

> Six cubes show how scale behaves. The top row keeps every dimension equal: the same factor on all three axes, so the cube stays cube-shaped. The bottom row constrains the change to a single axis, and the colored edges or inward arrows mark which dimension is moving.

Inline transform: drop the `color="#222"` attribute from the inline `<svg>` root tag. Re-indent the figure to 20-space content depth per the locked pattern (`<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<figcaption>` at column 20; multi-line svg attribute continuations at column 25; SVG body at column 22; `<g>` children at column 24; rect and path attribute continuations inside `<g>` at column 30). Preserve every `role`, `aria-labelledby`, `<title>`, `<desc>`, and `id`-prefixed attribute verbatim. Every id in this SVG is prefixed `so-` and must remain so to avoid collision with other inlined Lesson 04 SVGs on the same page.

## SVG #5: global_local_axes placement

Section: `#axis-constraints` (the `<section id="axis-constraints">` block).

Insertion point: in the "Global vs. Local Axes" subsection, after the "Global vs Local Orientation" card's closing `</div>`, before the "Try It Now: Global vs Local" card.

Anchor strategy: use the closing `</div>` of the Global vs Local Orientation card plus the opening of the Try It Now: Global vs Local card as the 2 to 3 line `oldText` window. Both element labels are unique within the file. Always run `dryRun=true` first.

Figcaption draft (em-dash-free):

> Two cubes side by side. On the left the gnomon arrows stay aligned with the world, so G X always moves along world X. On the right the cube has been rotated thirty degrees; pressing the axis key twice, G X X, locks the move to the object's own X, and the arrows rotate with the cube. The faint dashed lines under the rotated gnomon show where world X, Y, and Z still point.

Inline transform: same drop-color rule. Same re-indent pattern. Every id in this SVG is prefixed `gl-` and must remain so.

## Locked workflow recap

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`.
- `Filesystem:edit_file` with `dryRun=true` first, then commit on each insert. Verify with `Filesystem:get_file_info` after every commit.
- Strip `color="#222"` from each inlined root `<svg>` tag. The standalone `.svg` files in `images/` keep that attribute for `<img>` fallback; only the inline copy in HTML drops it. If `color="#222"` sits on its own attribute-continuation line, drop the line entirely and reattach the closing `>` to the previous attribute line.
- 20-space content depth re-indent as detailed above.
- No new em-dashes anywhere in the new figcaptions or new alt text. Preserve any pre-existing em-dashes in source anchors verbatim. Lesson 04 source HTML uses em-dashes liberally in subsection h3 titles and body prose; those pass through edit anchors unchanged.
- Axis palette locked across Phase 2 and Phase 3 SVGs: X = `#E63946`, Y = `#4ADE80`, Z = `#4A9EFF`. Blender-orange `#FF6B00` reserved for top strip, key-combo badges, footer tips, subhead labels. The `images/IMAGE_STYLE_GUIDE.md` palette revision to fold `#E63946` in is still deferred to a dedicated chat.
- Cross-SVG id prefixes already used on this page: `ss` (#1), `st` (#2), `tg` (#3), `am` (#4), `ra` (#6). Phase 3 adds `so` (#7) and `gl` (#5). No collisions.

## Post-integration updates to `lesson_04_integration_progress.md`

After both inserts commit and `Filesystem:get_file_info` confirms the new HTML size:

- Add a Phase 3 integration chat bullet at the top of the Status section. Mirror the Phase 2 integration bullet's structure. Include: which SVG was inserted where (subsection name plus anchor pair), exact byte deltas per insert (capture `get_file_info` before and after each commit), final figcaption text for both figures, locked-style adherence confirmation (`color="#222"` stripped from both roots, 20-space depth, ids preserved verbatim, no new em-dashes introduced), and the total Phase 3 integration growth in bytes.
- Placement table: flip #7 and #5 rows from "produced; not integrated" to "integrated".
- Phase plan table: Phase 3 row from "2 of 2 produced, 0 of 2 integrated" to "2 of 2 produced, 2 of 2 integrated".

## Post-integration updates to `status.md`

- Image Production and Integration row for Lesson 04: "7 of 14 produced, 5 of 14 integrated" to "7 of 14 produced, 7 of 14 integrated".
- Module 1 file size table row for Lesson 04: update to the new byte count from final `get_file_info`. Phase 2 ended at 162912 bytes / 159.1 KB; the new value will be the post-Phase-3 byte count.
- Image Integration Status table Lesson 04 row narrative: append a short Phase 3 integration paragraph noting #7 scale_operations and #5 global_local_axes were inlined, and pointing at Phase 4 (the two 3D cursor PNG captures) as the next step.
- Bump the Last Updated date.

## Verification checklist

- [ ] `dryRun=true` confirmed unique anchor match for #7 before committing.
- [ ] `lesson_04_07_scale_operations.svg` inlined into `#scale` section after Axis-Constrained Scaling card, before Try It Now: Stretch and Squash card.
- [ ] `get_file_info` captured HTML byte size after the #7 commit.
- [ ] `dryRun=true` confirmed unique anchor match for #5 before committing.
- [ ] `lesson_04_05_global_local_axes.svg` inlined into `#axis-constraints` section after Global vs Local Orientation card, before Try It Now: Global vs Local card.
- [ ] `get_file_info` captured HTML byte size after the #5 commit.
- [ ] `color="#222"` stripped from both inlined root `<svg>` tags.
- [ ] All ids prefixed `so-` (for #7) and `gl-` (for #5) preserved verbatim, no collisions with `ss-`, `st-`, `tg-`, `am-`, `ra-`.
- [ ] Both figcaptions em-dash-free.
- [ ] `progress.md` Status bullet added, placement table updated, phase plan table updated.
- [ ] `status.md` row updated, file size table updated, Last Updated bumped, narrative appended.
- [ ] Phase 4 handoff written at `lesson_04_integration_phase4_handoff.md`.

## Pointer to next phase

Phase 4 covers the `#3d-cursor` section: SVGs are not used here; both #8 `lesson_04_08_3d_cursor.png` and #9 `lesson_04_09_snap_menu.png` are Blender 5.1 viewport screenshots. Capture instructions live in `lesson_04_image_prompts.md`. The Phase 4 handoff written at the end of this integration chat should mirror the Phase 2 to Phase 3 handoff style: state setup steps, capture targets, alt text drafts, figcaption drafts, placement anchors from the placement table.
