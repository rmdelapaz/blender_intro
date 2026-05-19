# Lesson 03 HTML Integration: Phase 6 Handoff

Phase 6 is the final integration phase for `lesson_03_navigation_and_viewport_control.html`. Placing the three remaining figures (#16 PNG plus #17 and #18 inline SVGs) finishes Lesson 03 at 18 of 18.

## Current state at chat start

Lesson 03 HTML integration is at 15 of 18 figures (Phases 1 through 5 complete). HTML file size is **202.4 KB** (207,218 bytes). The three remaining figures span two sections: advanced-techniques (#16 PNG, #17 SVG) and summary (#18 SVG). All three figure files exist in `images/`. The Phase 5 chat shifted document line numbers by roughly +20 lines beyond the post-Phase-4 positions; reread the HTML fresh in the next chat rather than relying on cached line numbers.

## Standing rules (unchanged across phases)

- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- `Filesystem:edit_file` for existing files. Run with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.
- Plain `<figure>` plus `<figcaption>` wrapper, no class. Inline SVGs sit at 20-space content depth: `<figure>` at column 16, `<svg>` at column 20, body at column 22, `<g>` children at column 24, `</svg>` at column 20, `<figcaption>` at column 20, `</figure>` at column 16.
- For every inlined SVG, strip the `color="#222"` attribute from the root `<svg>` tag. That attribute locks `currentColor` and breaks dark mode when inlined. If `color="#222"` sits on its own continuation line, drop the line and reattach the closing `>` to the previous attribute line. Standalone `.svg` files in `images/` keep the attribute for fallback rendering; only the inline copy in HTML drops it.
- For the PNG (#16), use the standard `<img src="images/..." alt="..." loading="lazy">` pattern inside `<figure>`, with descriptive alt text. `<img>` and `<figcaption>` at column 20.
- Use 2 to 3 line anchors for `oldText` so each insertion point is unique within the file.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note written this pass. Use a comma, a colon, or a sentence break instead. Em-dashes that already exist in source content (paragraphs, blockquotes, SVG body comments) are preserved.
- Warn when context starts getting tight rather than letting automatic compaction happen.

## Phase 6: advanced-techniques and summary sections (1 PNG plus 2 inline SVGs)

Document order: #16 then #17 in advanced-techniques, then #18 in summary.

### Phase 6 figure 1: #16 `lesson_03_16_quadview_layout.png` (advanced-techniques, PNG)

- Subsection: "Quadview: See Four Views at Once".
- Anchor above: the closing `</div>` of the "Toggle Quadview" card.
- Anchor below: the opening `<div>` of the "Try It Now: Quadview" card.
- Alt text idea: the four-pane quadview layout with the Blender default cube, four corner labels naming each pane (Top, User Persp, Front, Right) in Blender orange.
- Figcaption idea: names each pane so the reader can map the on-screen Ctrl+Alt+Q layout to the standard views.

### Phase 6 figure 2: #17 `lesson_03_17_walk_fly_controls.svg` (advanced-techniques, inline SVG)

- Subsection: "Walk/Fly Navigation".
- Anchor above: the closing `</div>` of the "Walk Navigation Mode" card.
- Anchor below: the opening `<div>` of the "When to Use Walk Mode" info card.
- Inline pattern: standard SVG transform (drop `color="#222"` from the root `<svg>`, re-indent to 20-space content depth, preserve `<title>` and `<desc>`).
- Figcaption idea: highlights the WASD keys plus the mouse pointer for yaw and pitch so the reader sees Walk mode as a first-person navigation grammar borrowed from games.

### Phase 6 figure 3: #18 `lesson_03_18_navigation_shortcuts_reference.svg` (summary, inline SVG)

- Subsection: "Essential Navigation Shortcuts Reference".
- Anchor above: the closing `</div>` of the "Your Navigation Cheat Sheet" card.
- Anchor below: `<h3>Common Questions at This Stage</h3>`.
- Inline pattern: standard SVG transform (drop `color="#222"` from the root `<svg>`, re-indent to 20-space content depth, preserve `<title>` and `<desc>`).
- Figcaption idea: positions the SVG as a visual companion to the existing tabular cheat sheet so a reader can glance at one or the other depending on whether they prefer a table or a card.

## End-of-chat obligations (Phase 6, since this finishes Lesson 03)

1. Verify the HTML with `Filesystem:get_file_info` and record the new size.
2. Flip the rows for #16, #17, #18 in the placement table inside `lesson_03_integration_progress.md` from `produced; not integrated` to `integrated`.
3. Update the phase plan table (Phase 6 status cell to `3 of 3 integrated`).
4. Add a Lesson 03 close-out status bullet at the top of `lesson_03_integration_progress.md` noting 18 of 18 complete and recording final HTML size.
5. Flip the Lesson 03 row in `status.md` from In Progress to Complete: update the Image Integration Status row state cell and notes, the Site-Wide Image Production and Integration row, the top Total Size paragraph, and the Lesson 03 size cell in Module 1.
6. If `Filesystem:write_file` is available, also write a `lesson_03_completion_handoff.md` modeled on `lesson_02_completion_handoff.md` for the project archive.

## Suggested cadence

Phase 6 is 3 inserts (1 PNG plus 2 SVG transforms) and finishes Lesson 03. One chat should comfortably cover it. The two SVG inline transforms are the longest line of work; budget context for reading both `.svg` files in full to do the re-indent cleanly.

## Verbatim handoff prompt for Phase 6

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 03 HTML integration, Phase 6. Place 3 figures (1 PNG #16 plus 2 inline SVGs #17 and #18) into lesson_03_navigation_and_viewport_control.html across the advanced-techniques and summary sections. Document order: #16, #17, #18. This phase finishes Lesson 03 integration at 18 of 18.

First reads, in this order:
1. lesson_03_integration_phase6_handoff.md (this file; the spec lives here, including alt-text and figcaption ideas for each figure).
2. The target file lesson_03_navigation_and_viewport_control.html (full read; current size 202.4 KB).
3. images/lesson_03_17_walk_fly_controls.svg and images/lesson_03_18_navigation_shortcuts_reference.svg (full reads for the inline transform).

Standing rules: \\wsl$ paths only, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info after commit, plain <figure>/<figcaption> wrapper (no class), strip color="#222" from each inlined <svg> root, re-indent inline SVG body to 20-space content depth, <img src="images/..." alt="..." loading="lazy"> for the PNG, 2-3 line anchors for oldText uniqueness.

End-of-chat obligations: update placement table to "integrated" for #16, #17, #18; update phase plan table Phase 6 row to "3 of 3 integrated"; add a Lesson 03 close-out status bullet at the top of lesson_03_integration_progress.md noting 18 of 18 complete and recording final HTML size; flip the Lesson 03 row in status.md from In Progress to Complete (update Image Integration Status row state and notes, Site-Wide Image Production and Integration row, top Total Size paragraph, and Lesson 03 size cell in Module 1). If Filesystem:write_file is available, also write a lesson_03_completion_handoff.md modeled on lesson_02_completion_handoff.md for the project archive.

Warn me when context starts getting tight rather than letting automatic compaction happen.
```
