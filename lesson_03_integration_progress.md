# Lesson 03 HTML Integration: Progress

Tracks production and integration of the 18 Lesson 03 images into `lesson_03_navigation_and_viewport_control.html`. Image production starts fresh in this chat; nothing for Lesson 03 was in `images/` at chat start.

## Status

- Phase 1 SVG production completed this chat. Four more SVGs shipped: #3 `lesson_03_03_orbit_operation.svg`, #4 `lesson_03_04_pan_operation.svg`, #5 `lesson_03_05_zoom_operation.svg`, and #14 `lesson_03_14_navigation_workflow.svg`. The three motion-diagram SVGs (#3, #4, #5) were authored as a coherent set sharing visual treatment: matching header, operation badge near top, central scene visual, and a pair of bottom-row insets ("drag mapping" or "input mapping" on the left, "key idea" on the right). The workflow SVG (#14) is a polished decision-tree alternative to the existing mermaid in "Combining the Three Operations", with three primary branches (Orbit, Pan, Zoom) plus two dashed side-note callouts for "lost or disoriented" (press Home) and "focus on one object" (Numpad period). Total Lesson 03 production state: 6 of 18 (6 of 12 SVGs, 0 of 6 PNGs). Phase 1 is now 5 of 5 produced; Phase 2 is 1 of 1 produced. HTML still unchanged at 103.5 KB. No integration edits yet; that pass begins when production is further along or in a dedicated integration chat.
- Initial planning chat (post Lesson 01 close, post Lesson 02 close). Read `lesson_03_image_requirements.md` and the full `lesson_03_navigation_and_viewport_control.html` to map placement anchors. Confirmed `images/` contains no `lesson_03_*` assets yet. Phase plan, placement table, and image-prompts file all created on that chat.
- Phase 1 production started on the planning chat: 2 of 12 SVGs authored (#1 `lesson_03_01_big_three_operations.svg` and #2 `lesson_03_02_mouse_button_reference.svg`). Both follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` (800px viewBox, 3px Blender-orange top strip, `currentColor` text, brand orange `#FF6B00` for highlights, footer tip callout, full accessibility tags). Neither is integrated into the HTML yet.
- Lesson 03 HTML file size at planning chat start: 103.5 KB. No HTML edits made on either chat so far.

## Images available and missing

Available in `images/` (6 of 18):

- #1 `lesson_03_01_big_three_operations.svg` (inline; produced on planning chat)
- #2 `lesson_03_02_mouse_button_reference.svg` (inline; produced on planning chat)
- #3 `lesson_03_03_orbit_operation.svg` (inline; produced on production chat 1)
- #4 `lesson_03_04_pan_operation.svg` (inline; produced on production chat 1)
- #5 `lesson_03_05_zoom_operation.svg` (inline; produced on production chat 1)
- #14 `lesson_03_14_navigation_workflow.svg` (inline; produced on production chat 1)

Missing from production (12 of 18):

SVGs that can be authored in a future chat (6 remaining):

- #7 `lesson_03_07_standard_views_cube.svg` (inline; central cube with six camera positions, numpad labels)
- #8 `lesson_03_08_numpad_layout.svg` (inline; color-coded numpad keyboard diagram)
- #12 `lesson_03_12_perspective_depth.svg` (inline; railroad-tracks vanishing-point diagram)
- #13 `lesson_03_13_orthographic_parallels.svg` (inline; blueprint-style parallel-lines diagram)
- #17 `lesson_03_17_walk_fly_controls.svg` (inline; WASD + mouse-look diagram)
- #18 `lesson_03_18_navigation_shortcuts_reference.svg` (inline; two-column reference card, modeled on `lesson_02_18_keyboard_shortcuts_reference.svg`)

PNGs that need Blender screenshots or AI generation (6 remaining):

- #6 `lesson_03_06_perspective_vs_orthographic.png` (real Blender screenshot, side-by-side composite)
- #9 `lesson_03_09_camera_view_frame.png` (real Blender screenshot of camera view with frame annotations)
- #10 `lesson_03_10_frame_all_vs_selected.png` (real Blender screenshot composite)
- #11 `lesson_03_11_local_view_demo.png` (real Blender before/after composite)
- #15 `lesson_03_15_camera_to_view.png` (real Blender screenshot, sidebar visible)
- #16 `lesson_03_16_quadview_layout.png` (real Blender screenshot of Ctrl+Alt+Q quadview)

All six PNG screenshots are documented in `lesson_03_image_prompts.md` with capture instructions; AI-generation prompts are provided as a fallback only, since Blender UI screenshots benefit dramatically from literal accuracy that AI generators cannot deliver reliably.

## Locked approach (identical to Lesson 01 and Lesson 02)

- **Wrapper:** plain `<figure>` with `<figcaption>` for every image. No class. `styles/main.css` already styles both elements directly.
- **PNGs:** `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- **SVGs:** inlined verbatim inside the figure, re-indented to 20-space content depth. **Critical: strip the `color="#222"` attribute from the inline `<svg>` root tag.** That attribute is the `<img>`-embedded fallback (so a standalone SVG has *some* color); when inlined, it locks the SVG's `color` to `#222` and prevents `currentColor` from inheriting the page text color, breaking dark mode. The `.svg` source files in `images/` keep the attribute for standalone viewing; only the inline copy in HTML drops it.
- **Tools:** `Filesystem:edit_file` only for existing files. Always `dryRun=true` first to confirm anchors match, then commit. Verify with `Filesystem:get_file_info` after every commit. For new files (the SVGs in `images/`, this progress doc, the prompts file), use `Filesystem:write_file`. NEVER use the built-in `create_file` (writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths).
- **Anchors:** use 2-3 lines for `oldText` (the paragraph or h3 immediately above and the next element below the insertion point). Make sure the anchor is unique within the file.
- **Path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.
- **No new em-dashes** in any new content (captions, alt text, this doc, the prompts doc). Preserve em-dashes that exist in source content (existing paragraphs, blockquotes, the SVG body text from prior lessons).
- **Per-chat archive discipline:** when the chat is winding down or context is getting heavy, warn Ray rather than letting automatic compaction happen.
- **AI prompts for missing raster images:** all six PNGs that this lesson needs are documented in `lesson_03_image_prompts.md`. Real Blender screenshots are the strongly preferred sourcing route for every one of them; AI generation is a fallback only.
- **Version currency:** Blender 5.1 is the project target (current stable as of March 2026). Audit Lesson 03 prose for version-specific references when integration runs. The HTML in its current form mentions Blender generally without pinning a version; that is fine.

## Phase plan

Phases are scoped one HTML section at a time, matching Lesson 02's cadence. Each phase places that section's images and updates this progress doc when complete.

| Phase | Section(s) | Images | Inline SVGs | Status |
|---|---|---|---|---|
| 1 | the-big-three | #1, #3, #4, #5, #14 | all 5 | 5 of 5 produced; none integrated |
| 2 | mouse-navigation | #2 | #2 | 1 of 1 produced; not integrated |
| 3 | perspective-ortho | #6, #12, #13 | #12, #13 | not started |
| 4 | standard-views | #7, #8 | both | not started |
| 5 | focus-frame + camera-view | #9, #10, #11, #15 | none (all PNG) | not started |
| 6 | advanced-techniques + summary | #16, #17, #18 | #17, #18 | not started |

Note on Phase 1 progress: All 5 Phase 1 SVGs are produced. #1 was authored on the planning chat. #3, #4, and #5 were authored on the first production chat as a coherent motion-diagram trio sharing visual treatment (matching headers, operation badges, central visuals, and bottom-row insets). #14 was authored on the same production chat as a polished decision-tree alternative to the existing mermaid. Integration into the HTML has not yet started; that pass begins when production is further along or in a dedicated integration chat.

## Placement table (all 18 images)

Placements are derived from the HTML section structure plus the requirements doc. Each row gives the section ID, an anchor pair (the paragraph or h3 above the insertion point and the element immediately below it), and the current placement status.

| # | File | Section | Insertion point | Status |
|---|---|---|---|---|
| 1 | `lesson_03_01_big_three_operations.svg` | the-big-three | After the opening paragraph "All viewport navigation comes down to three fundamental operations..." and before the `<h3>Orbit: Rotating Around Your Scene</h3>` | produced; not integrated |
| 3 | `lesson_03_03_orbit_operation.svg` | the-big-three | In "Orbit: Rotating Around Your Scene". After the "How to Orbit" card's closing `</div>`, before the paragraph beginning "Think of orbit like this:". | produced; not integrated |
| 4 | `lesson_03_04_pan_operation.svg` | the-big-three | In "Pan: Moving Sideways Through Your Scene". After the "How to Pan" card's closing `</div>`, before the paragraph beginning "Panning is essential". | produced; not integrated |
| 5 | `lesson_03_05_zoom_operation.svg` | the-big-three | In "Zoom: Moving Closer or Further Away". After the "How to Zoom" card's closing `</div>`, before the paragraph beginning "Zooming is your tool". | produced; not integrated |
| 14 | `lesson_03_14_navigation_workflow.svg` | the-big-three | In "Combining the Three Operations". After the existing mermaid block, before the "Practice Exercise: Combine All Three" card. The mermaid covers branches; this SVG adds a richer "when to use what" decision tree with two dashed side-note callouts for "lost or disoriented" (Home) and "focus on one object" (Numpad period). | produced; not integrated |
| 2 | `lesson_03_02_mouse_button_reference.svg` | mouse-navigation | In "The Middle Mouse Button (Your Navigation Key)". After the opening paragraph "The middle mouse button is central to Blender navigation..." and before the "No Middle Mouse Button?" warning card. | produced; not integrated |
| 12 | `lesson_03_12_perspective_depth.svg` | perspective-ortho | In "Perspective View: How Eyes See". After the "train tracks" paragraph (begins "Imagine standing on train tracks..."), before the "When to Use Perspective View" card. | not produced |
| 13 | `lesson_03_13_orthographic_parallels.svg` | perspective-ortho | In "Orthographic View: Technical Precision". After the "infinitely good eyes" paragraph, before the "When to Use Orthographic View" card. | not produced |
| 6 | `lesson_03_06_perspective_vs_orthographic.png` | perspective-ortho | In "Visual Comparison". After the existing mermaid block, before the `<h3>Practical Usage Tips</h3>`. | not produced (PNG) |
| 7 | `lesson_03_07_standard_views_cube.svg` | standard-views | In "The Six Standard Views". After the "Think of your scene as being inside a cube..." paragraph, before the "Standard View Shortcuts (Numpad)" card. | not produced |
| 8 | `lesson_03_08_numpad_layout.svg` | standard-views | In "The Six Standard Views". After the existing mermaid showing the six standard-view branches, before the "Remember the Pattern" info card. | not produced |
| 10 | `lesson_03_10_frame_all_vs_selected.png` | focus-frame | After "Frame Selected: Focus on What Matters" subsection's "Try It Now: Frame Selected" card, before the `<h3>Zoom to Mouse Cursor</h3>`. | not produced (PNG) |
| 11 | `lesson_03_11_local_view_demo.png` | focus-frame | In "The Local View: Isolate Your Focus". After the "Try It Now: Local View" info card, before the "Local View Gotcha" warning card. | not produced (PNG) |
| 9 | `lesson_03_09_camera_view_frame.png` | camera-view | In "The Camera Frame". After the bullet list describing frame elements (ending with "Triangles at corners"), before the "Composition in Camera View" info card. | not produced (PNG) |
| 15 | `lesson_03_15_camera_to_view.png` | camera-view | In "Moving the Camera" then "Method 2". After the "Camera to View" card's closing `</div>`, before the paragraph beginning "This 'Camera to View' mode is incredibly intuitive". | not produced (PNG) |
| 16 | `lesson_03_16_quadview_layout.png` | advanced-techniques | In "Quadview: See Four Views at Once". After the "Toggle Quadview" card's closing `</div>`, before the "Try It Now: Quadview" card. | not produced (PNG) |
| 17 | `lesson_03_17_walk_fly_controls.svg` | advanced-techniques | In "Walk/Fly Navigation". After the "Walk Navigation Mode" card's closing `</div>`, before the "When to Use Walk Mode" info card. | not produced |
| 18 | `lesson_03_18_navigation_shortcuts_reference.svg` | summary | In "Essential Navigation Shortcuts Reference". After the existing "Your Navigation Cheat Sheet" card's closing `</div>`, before the `<h3>Common Questions at This Stage</h3>`. The existing card already provides table-form shortcuts; this SVG should add a visual reference card modeled on `lesson_02_18_keyboard_shortcuts_reference.svg`. | not produced |

Phase order in document order: 1 (the-big-three), 2 (mouse-navigation), 3 (perspective-ortho), 4 (standard-views), 5 (focus-frame then camera-view), 6 (advanced-techniques then summary). Production order within each phase should match document order so the placement table reads top to bottom when complete.

## Caption and alt-text guidance

- **Alt text:** describe the image content factually for screen readers. PNG screenshots get full descriptive alt (what is visible). Inline SVGs keep their own `<title>` and `<desc>`, so no additional alt is needed; the figcaption is the visible label.
- **Figcaption:** one or two sentences, conversational, points the reader at what to notice or how to use the image. Should not just repeat the image title.
- **No new em-dashes** in any caption or alt text written in this lesson. Use a comma, a colon, or a sentence break instead. Em-dashes in pre-existing source HTML are preserved (those were written before the rule was locked).

## Example: the wrapper patterns

PNG figure (as used throughout Lesson 01 and Lesson 02):

```html
<figure>
    <img src="images/lesson_03_NN_slug.png" alt="..." loading="lazy">
    <figcaption>Caption text.</figcaption>
</figure>
```

Inline SVG figure (preserve the SVG's `role`, `aria-labelledby`, `<title>`, `<desc>` exactly; re-indent the outer `<svg>` to 20-space depth and inner lines proportionally; **DROP the `color="#222"` attribute when inlining**):

```html
<figure>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="..." role="img" aria-labelledby="..." font-family="...">
      <title id="...-title">...</title>
      <desc id="...-desc">...</desc>
      ... SVG body ...
    </svg>
    <figcaption>Caption text.</figcaption>
</figure>
```

## How to start the next chat

The verbatim handoff prompt is at the bottom of this section. Drop it into a new chat to continue Lesson 03 production.

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 03 image production, remaining SVG batch. Six of twelve SVGs are already shipped to images/ (Phase 1 plus Phase 2 done). Produce the six remaining inline SVGs across Phases 3, 4, 6:

- #7  lesson_03_07_standard_views_cube.svg               (central cube with six camera positions and numpad labels; standard-views section)
- #8  lesson_03_08_numpad_layout.svg                     (color-coded numpad keyboard diagram; pairs visually with #7)
- #12 lesson_03_12_perspective_depth.svg                 (railroad-tracks vanishing-point diagram; perspective-ortho section)
- #13 lesson_03_13_orthographic_parallels.svg            (blueprint-style parallel-lines diagram; pairs visually with #12)
- #17 lesson_03_17_walk_fly_controls.svg                 (WASD plus mouse-look diagram; advanced-techniques section)
- #18 lesson_03_18_navigation_shortcuts_reference.svg    (two-column reference card modeled on lesson_02_18_keyboard_shortcuts_reference.svg; summary section closer)

Suggested batching: two SVGs per chat is comfortable, three is the ceiling before context gets heavy. Pair #7 with #8 (numpad theme), #12 with #13 (perspective-ortho theme), and #17 with #18 (close-out). Or batch the four diagrammatic ones (#7, #8, #12, #13) in one chat if context allows, then #17 plus #18 in a final SVG chat.

First reads, in this order:
1. lesson_03_integration_progress.md for current state, the post-Phase-1 status entry, locked approach, and the placement table.
2. images/IMAGE_STYLE_GUIDE.md for house SVG conventions.
3. images/lesson_02_18_keyboard_shortcuts_reference.svg as the direct reference for #18 (same layout, same component patterns).
4. images/lesson_03_01_big_three_operations.svg, lesson_03_02_mouse_button_reference.svg, lesson_03_03_orbit_operation.svg, lesson_03_04_pan_operation.svg, lesson_03_05_zoom_operation.svg, and lesson_03_14_navigation_workflow.svg to match the visual language already established for Lesson 03 (badge style, inset boxes, footer tip pattern, dashed side-note callouts on #14).

Do NOT touch lesson_03_image_prompts.md or attempt PNG captures in this chat. The six Blender screenshots (#6, #9, #10, #11, #15, #16) are a separate workflow best run in a dedicated chat with the MCP Blender bridge.

Standing rules: \\wsl$ paths only (never \\wsl.localhost\\), no new em-dashes anywhere in new markdown content (a substitute like a comma, colon, or sentence break reads as well), Filesystem:write_file for the new SVG files, Filesystem:edit_file with dryRun=true first then commit for the progress doc and status.md, verify with Filesystem:get_file_info after every commit, plain <figure> wrapper with figcaption (no class) when later integrated, strip color="#222" from any SVG inlined into HTML.

End-of-chat obligations:
- Update lesson_03_integration_progress.md: status block (newest entry on top), available-images list, missing-images list, phase plan table, placement table status cells for whichever SVGs were produced.
- Update status.md: Lesson 03 row in the Image Integration Status table (move count from 6 of 18 toward 12 of 18), the Site-Wide "Image Production and Integration" row, the Total Size line, and the file inventory if anything new is added.
- Em-dash audit on all newly written markdown before closing.

Warn me if context starts getting tight rather than letting automatic compaction happen.
```
