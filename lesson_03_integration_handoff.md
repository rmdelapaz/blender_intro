# Lesson 03 HTML Integration: Next Chat Handoff

Resume work on Lesson 03. All 18 image assets are produced and in `images/`. This chat starts the HTML integration pass into `lesson_03_navigation_and_viewport_control.html`. Phase 1 (the-big-three section, 5 figures) is the unit for this chat.

## STANDING RULES

- WSL paths: `\\wsl$\Ubuntu\` only, never `\\wsl.localhost\`.
- No new em-dashes in any markdown or HTML caption text. Em-dashes already present in source HTML stay as-is.
- `Filesystem:edit_file` for existing files (always dryRun first), `Filesystem:write_file` for new/overwrite.
- Verify each write with `Filesystem:get_file_info` after commit.
- Plain `<figure>` + `<figcaption>` wrapper. No class. `styles/main.css` already styles both.
- PNGs: `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- SVGs: inlined verbatim, re-indented to 20-space content depth. **Strip the `color="#222"` attribute from the inline `<svg>` root tag.** It locks `currentColor` and breaks dark mode when inlined. The standalone `.svg` files in `images/` keep the attribute for direct viewing.
- 2-3 line anchors for `oldText` so the match is unique within the file.
- Warn me when context tightens; do not let auto-compaction happen. Prefer ending the chat and writing a handoff for the next one.

## PROJECT PATHS

- Root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Target HTML: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_navigation_and_viewport_control.html` (103.5 KB at chat start; remeasure at chat end)
- Images: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
- Source of truth for placement: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_integration_progress.md`
- Reference for inlining pattern in practice: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_02_the_blender_interface.html` and `lesson_02_integration_progress.md`

## STATE AT CHAT START

- Production: 18 of 18 (12 SVGs plus 6 PNGs, all in `images/`).
- Integration: 0 of 18. The HTML is untouched.
- Total HTML file size: 103.5 KB.
- The PNG capture campaign (Track B) is complete. #15 was redone in the prior chat with a tight pixel-measured ellipse on the "Camera to View" row. #16 was captured with quadview corner labels matching the actual Blender 5.1 layout (User Persp lives in the top-right quadrant, not bottom-right).

## TASK: PHASE 1 INTEGRATION (the-big-three section)

Phase 1 inlines five SVGs into the `the-big-three` section. All five are visually coordinated motion diagrams plus a decision-tree workflow. They share the locked house style (800px viewBox, 3px Blender orange top strip, `currentColor` text).

Figures and their anchors (verbatim from the placement table in `lesson_03_integration_progress.md`):

1. **#1 `lesson_03_01_big_three_operations.svg`** in `the-big-three`: after the opening paragraph "All viewport navigation comes down to three fundamental operations..." and before the `<h3>Orbit: Rotating Around Your Scene</h3>`.
2. **#3 `lesson_03_03_orbit_operation.svg`** in "Orbit: Rotating Around Your Scene": after the "How to Orbit" card's closing `</div>`, before the paragraph beginning "Think of orbit like this:".
3. **#4 `lesson_03_04_pan_operation.svg`** in "Pan: Moving Sideways Through Your Scene": after the "How to Pan" card's closing `</div>`, before the paragraph beginning "Panning is essential".
4. **#5 `lesson_03_05_zoom_operation.svg`** in "Zoom: Moving Closer or Further Away": after the "How to Zoom" card's closing `</div>`, before the paragraph beginning "Zooming is your tool".
5. **#14 `lesson_03_14_navigation_workflow.svg`** in "Combining the Three Operations": after the existing mermaid block, before the "Practice Exercise: Combine All Three" card. The mermaid stays. The SVG is a richer when-to-use-what decision tree with two dashed side-note callouts (Home key for "lost or disoriented", Numpad period for "focus on one object").

## WRAPPER PATTERN (locked, matches Lessons 01 and 02)

```html
<figure>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="..." role="img" aria-labelledby="..." font-family="...">
      <title id="...-title">...</title>
      <desc id="...-desc">...</desc>
      ... SVG body (indented within 20-space content depth) ...
    </svg>
    <figcaption>One or two sentences, conversational. Point the reader at what to notice.</figcaption>
</figure>
```

Three reminders that bit Lesson 02 if not watched:

- **Drop `color="#222"`** from the inlined `<svg>` root tag. Keep all other attributes (`xmlns`, `viewBox`, `role`, `aria-labelledby`, `font-family`, etc.).
- **Preserve `<title>` and `<desc>`** inside each SVG. Those are the accessibility text; figcaption is the visible label.
- **No new em-dashes** in captions. Use a comma, a colon, or a sentence break.

## CADENCE FOR THIS CHAT

1. Dry-run each edit. Confirm the diff matches expectations. Then commit. Then `get_file_info`.
2. Use 2-3 lines for `oldText` (the immediate paragraph or h3 above plus the next element below). Make sure the anchor is unique in the file.
3. After all five figures are inlined, remeasure the HTML file size and note it.

## END-OF-CHAT OBLIGATIONS

All via `Filesystem:edit_file` with dryRun first. No em-dashes.

1. In `lesson_03_integration_progress.md`:
   - Add a NEW status block at the TOP of `## Status` describing this chat's Phase 1 integration work (5 figures inlined, which HTML sections changed, final HTML file size).
   - In the placement table, change the status cell for #1, #3, #4, #5, and #14 from `produced; not integrated` to `integrated`.
   - In the phase plan table, update the Phase 1 row's status from `5 of 5 produced; none integrated` to `5 of 5 integrated`.

2. In `status.md`:
   - Lesson 03 row currently: `18 of 18 | 0 of 18 | 🚧 In Progress`. Update to `18 of 18 | 5 of 18 | 🚧 In Progress` and refresh the notes to mention Phase 1 (the-big-three) is integrated.
   - Update the Lesson 03 row in the `## Lesson File Status` Module 1 table with the new file size (currently shown as `103.5 KB`).
   - Update the Site-Wide Feature Status row for "Image Production and Integration" to reflect the new count: `(18 of 18 produced, 5 of 18 integrated)`.

3. Write the next handoff doc at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_integration_phase2_handoff.md` covering Phases 2 through 4 (or Phase 2 alone if context was tight). The smaller phases can batch.

Verify each file write with `Filesystem:get_file_info` after commit.

## SUGGESTED CHAT SEQUENCING FOR THE REMAINING PHASES

After this chat (Phase 1 done):

- **Phase 2 (mouse-navigation, 1 figure: #2)** plus **Phase 3 (perspective-ortho, 3 figures: #6 PNG, #12 SVG, #13 SVG)** plus **Phase 4 (standard-views, 2 figures: #7 SVG, #8 SVG)**. Six figures total. Could fit in one chat if anchors are clean.
- **Phase 5 (focus-frame plus camera-view, 4 figures: #9 PNG, #10 PNG, #11 PNG, #15 PNG)**. All four are PNGs so this is fast wrapper work.
- **Phase 6 (advanced-techniques plus summary, 3 figures: #16 PNG, #17 SVG, #18 SVG)**. Wraps Lesson 03.

This is a suggestion. If a chat ends up tight, split smaller.

## START HERE

1. Read `lesson_03_integration_progress.md` end to end. The placement table is the source of truth and has full anchor text for every figure.
2. Skim a few figure blocks in `lesson_02_the_blender_interface.html` to see the inlining pattern in practice (search for `<figure>`).
3. Full read of `lesson_03_navigation_and_viewport_control.html`. Locate the five Phase 1 anchors before any edit.
4. Read each of the five Phase 1 SVGs in `images/` so you have the exact file text to inline. Re-indent each SVG body to 20-space content depth. Drop `color="#222"` from the `<svg>` root tag.
5. Begin inlining in document order: #1, then #3, then #4, then #5, then #14.
6. After each commit, `get_file_info` to verify, then move on.
7. At chat end, do the markdown updates listed in "END-OF-CHAT OBLIGATIONS" above and write the Phase 2 handoff.

## CAPTIONS, BRIEFLY

The figcaption for each figure should be one or two short sentences. It is the visible label under the image. It is conversational and points at what to notice or how to use the figure. Two examples in the right register:

- For #1 (the big three diagram): "The three operations every Blender artist learns first: orbit to rotate the view, pan to slide it, zoom to move closer or further. Together they cover every camera move you need before learning the keyboard shortcuts."
- For #14 (workflow decision tree): "A quick decision tree for picking the right move when you are not sure. Two dashed callouts cover the common rescue cases: press Home if you are lost, Numpad period to focus on one object."

Match the lesson's prose voice (warm, second person, no em-dashes in new content). If you are unsure, lean shorter.
