# Lesson 03 HTML Integration: Phase 2 through 4 Handoff

This handoff covers the next integration chat for `lesson_03_navigation_and_viewport_control.html`. Phase 1 (the-big-three, 5 SVGs) was completed in a prior chat and the HTML now sits at ~150.5 KB.

Phases 2, 3, and 4 together place 6 figures (5 inline SVG + 1 PNG) across three sections. Phase 2 alone is one figure, so batching with Phase 3 and Phase 4 keeps cadence and avoids spinning up a chat for a single edit.

## Project context

- **Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- **Target HTML:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_navigation_and_viewport_control.html`
- **Progress doc:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_integration_progress.md`
- **Status doc:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\status.md`
- **Phase 1 handoff (for reference):** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_integration_handoff.md`
- **Images directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`

All 18 Lesson 03 image assets exist in `images/`. Production is complete; only integration remains.

## Standing rules (unchanged from Phase 1, locked across all phases)

- **WSL path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.
- **Tools:** `Filesystem:edit_file` only for existing files. Always `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit. Never use the built-in `create_file` tool (that writes to Claude's container, not the WSL filesystem).
- **Wrapper pattern:** plain `<figure>` plus `<figcaption>`. No class. `styles/main.css` already styles both elements directly.
- **PNG handling:** `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- **SVG handling:** inline the SVG verbatim inside the figure, re-indented to 20-space content depth (matching Lesson 02 cadence). Critical: strip the `color="#222"` attribute from the inline `<svg>` root tag. That attribute is the `<img>`-embedded fallback (so a standalone SVG has some color); when inlined, it locks the SVG's `color` to `#222` and prevents `currentColor` from inheriting the page text color, breaking dark mode. The `.svg` source files in `images/` keep the attribute for standalone viewing; only the inline copy in HTML drops it.
- **Preserve in inline SVGs:** `xmlns`, `viewBox`, `role`, `aria-labelledby`, `font-family`, and the original `<title>` and `<desc>` elements with their ids exactly as authored.
- **Anchors:** 2-3 lines for `oldText` (the element immediately above and the element immediately below the insertion point), unique within the file.
- **No new em-dashes** in any new content (figcaptions, alt text, this doc, status updates). Use a comma, a colon, or a sentence break instead. Em-dashes that already exist in source HTML or prior status entries are preserved.
- **Per-chat archive discipline:** warn Ray when context starts running long rather than letting automatic compaction happen.
- **Version currency:** Blender 5.1 is the project target. No changes needed to prose in the sections this phase touches; the current text mentions Blender generally without pinning a version.

## Indentation pattern (verified against Lesson 02 and Phase 1 Lesson 03)

When inlining an SVG into a `<figure>` inside this lesson's HTML body:

- `<figure>` opens at column 16 (16 leading spaces)
- `<svg>` opens at column 20 (20 leading spaces)
- Multi-line `<svg>` root tag continuation attrs at column 25
- `<title>` and `<desc>` at column 22
- SVG body elements (`<rect>`, `<text>`, `<g>`, `<line>`, `<ellipse>`, etc.) at column 22
- Children of top-level `<g>` groups at column 24
- `</svg>` at column 20
- `<figcaption>` at column 20
- `</figure>` at column 16

In practice the transformation is: prepend 20 spaces to every line of the source SVG, drop the `color="#222"` attribute line, reattach the trailing `>` from the dropped line to the `font-family` line above it. Phase 1 used `transform_svg.py` and `compose_edits.py` in Claude's container scratchpad to produce these mechanically; either reproduce that flow or compose by hand if more comfortable.

## Phase 2: mouse-navigation (1 SVG)

### Figure #2: lesson_03_02_mouse_button_reference.svg

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_02_mouse_button_reference.svg`
- **Section:** `mouse-navigation`, subsection "The Middle Mouse Button (Your Navigation Key)"
- **Insertion point:** After the opening paragraph "The middle mouse button is central to Blender navigation..." and before the "No Middle Mouse Button?" warning card.
- **Draft figcaption (review against the actual SVG):** "A quick reference for what each mouse button does in Blender's default keymap. The left button selects, the right button sets the 3D cursor, the middle button drives navigation, and Shift plus middle button pans the view."

## Phase 3: perspective-ortho (2 SVGs + 1 PNG)

### Figure #12: lesson_03_12_perspective_depth.svg

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_12_perspective_depth.svg`
- **Section:** `perspective-ortho`, subsection "Perspective View: How Eyes See"
- **Insertion point:** After the "train tracks" paragraph (the paragraph that begins "Imagine standing on train tracks..."), before the "When to Use Perspective View" card.
- **Draft figcaption:** "Perspective view borrows the rule your eyes follow: parallel rails appear to bend toward a single vanishing point on the horizon. The further the object, the smaller it looks."

### Figure #13: lesson_03_13_orthographic_parallels.svg

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_13_orthographic_parallels.svg`
- **Section:** `perspective-ortho`, subsection "Orthographic View: Technical Precision"
- **Insertion point:** After the "infinitely good eyes" paragraph, before the "When to Use Orthographic View" card.
- **Draft figcaption:** "Orthographic view drops perspective entirely. Parallel rails stay parallel and an object measures the same on screen no matter how far back it sits in the scene."

### Figure #6: lesson_03_06_perspective_vs_orthographic.png (PNG, not inline SVG)

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_06_perspective_vs_orthographic.png`
- **Section:** `perspective-ortho`, subsection "Visual Comparison"
- **Insertion point:** After the existing mermaid block in "Visual Comparison", before the `<h3>Practical Usage Tips</h3>`.
- **Wrapper:** PNG figure pattern with `<img src="images/lesson_03_06_perspective_vs_orthographic.png" alt="..." loading="lazy">`.
- **Draft alt text:** "Side by side: the same cube scene rendered first in perspective view, with depth cues and recession, then in orthographic view, with parallel edges and uniform scale."
- **Draft figcaption:** "Two renders of the same cube scene from the same camera. The perspective version on the left shows depth and recession. The orthographic version on the right preserves true scale and parallel edges."

## Phase 4: standard-views (2 SVGs)

### Figure #7: lesson_03_07_standard_views_cube.svg

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_07_standard_views_cube.svg`
- **Section:** `standard-views`, subsection "The Six Standard Views"
- **Insertion point:** After the "Think of your scene as being inside a cube..." paragraph, before the "Standard View Shortcuts (Numpad)" card.
- **Draft figcaption:** "The six standard views, arranged around an imaginary cube enclosing your scene. Each Numpad key sends the camera to one face of that cube."

### Figure #8: lesson_03_08_numpad_layout.svg

- **Source:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_08_numpad_layout.svg`
- **Section:** `standard-views`, subsection "The Six Standard Views"
- **Insertion point:** After the existing mermaid block showing the six standard-view branches, before the "Remember the Pattern" info card.
- **Draft figcaption:** "The Numpad cluster in Blender's default keymap, color coded by category. Orange keys send the camera to one of the six standard views. The supporting keys handle perspective toggle, quadview, and frame and focus."

## Authoring approach (suggested cadence)

This is 6 figures across 3 sections. A reasonable single-chat plan:

1. Read the handoff doc end to end (this file).
2. Read `lesson_03_integration_progress.md` for placement-table cross check.
3. Read the target HTML in full once, then read each SVG as it comes up.
4. For each figure: read the SVG, draft the figcaption against what the SVG actually shows (refine the drafts above as needed), build the `oldText` anchor from the surrounding HTML, build the `newText` with the inlined figure block.
5. Stage all 6 edits in one `Filesystem:edit_file` call with `dryRun=true` to verify anchors match.
6. Commit with `dryRun=false`.
7. Verify with `Filesystem:get_file_info`. Expect HTML to grow from ~150.5 KB to roughly 200 to 215 KB depending on SVG sizes.

If context starts running long around Phase 4, split: complete Phases 2 and 3 in this chat, defer Phase 4 to the next handoff. Either way, update the progress doc and status.md before ending.

## Caption and alt-text guidance

- **Alt text (PNG only):** describe the image content factually for screen readers. Inline SVGs use their internal `<title>` and `<desc>` so no `alt` attribute is needed; the figcaption is the visible label.
- **Figcaption:** one or two sentences, conversational, points the reader at what to notice. Should not just repeat the image's internal title.
- **No new em-dashes** in captions, alt text, or any markdown updates. Em-dashes in pre-existing source content are preserved.

## End-of-chat obligations (run before closing the chat)

1. **Update the placement table** in `lesson_03_integration_progress.md`: change the status cell for each integrated figure (#2, and depending on how far you got, some or all of #12, #13, #6, #7, #8) from `produced; not integrated` to `integrated`.
2. **Update the phase plan table** rows: Phase 2 to `1 of 1 integrated`; if Phase 3 finished, change to `3 of 3 integrated` (or partial state if not). Same for Phase 4.
3. **Add a new status block at the top of `## Status`** in `lesson_03_integration_progress.md` describing what shipped this chat: section(s) touched, figures placed, new HTML size, any deviations from the standard pattern, and where the next handoff lives (if a Phase 5 or 5-and-6 handoff was written).
4. **Update `status.md`:**
   - Lesson 03 row in the Module 1 "Lesson File Status" table: refresh the size value (currently `150.5 KB`) to the post-Phase-2-through-4 size.
   - Lesson 03 row in `## Image Integration Status`: bump integrated count (currently `5 of 18`), update the notes cell.
   - Site-Wide Feature Status row "Image Production and Integration": update integrated count there too (currently `5 of 18 integrated`).
   - Top "Total Size" paragraph: replace the Phase 1 mention with current state.
5. **Write the next handoff** at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_03_integration_phase5_handoff.md` (if Phases 2-4 complete) or `lesson_03_integration_phase3_handoff.md` (if you only got through Phase 2). The remaining work after Phases 2-4 is:
   - Phase 5: focus-frame and camera-view (#9, #10, #11, #15, all PNG)
   - Phase 6: advanced-techniques and summary (#16 PNG, #17 SVG, #18 SVG)
6. **Optionally delete this Phase 2 handoff** (`lesson_03_integration_phase2_handoff.md`) once the work it describes is committed and the next handoff is written. Phase 1's handoff was left in place as historical reference; same convention is fine here.

## Verbatim handoff prompt for the next chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 03 HTML integration, Phases 2 through 4. Place 6 figures (5 inline SVG, 1 PNG) into lesson_03_navigation_and_viewport_control.html across the mouse-navigation, perspective-ortho, and standard-views sections.

First reads, in this order:
1. lesson_03_integration_phase2_handoff.md (this handoff) end to end.
2. lesson_03_integration_progress.md for the placement table.
3. lesson_03_navigation_and_viewport_control.html (full read).
4. Each SVG/PNG as it comes up.

Standing rules: \\wsl$ paths only, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info after commit, plain <figure> wrapper with <figcaption> (no class), strip color="#222" from every inlined <svg> root, re-indent inline SVG body to 20-space content depth. Use 2-3 line anchors for oldText uniqueness.

End-of-chat obligations: update placement table status cells to "integrated", update phase plan table, add new status block at top of lesson_03_integration_progress.md, update status.md Lesson 03 row (size, integrated count, notes) and Site-Wide row, write Phase 5 handoff (or Phase 3 handoff if only Phase 2 finished).

Warn me if context starts getting tight rather than letting automatic compaction happen.
```
