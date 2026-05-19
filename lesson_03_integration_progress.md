# Lesson 03 HTML Integration: Progress

Tracks production and integration of the 18 Lesson 03 images into `lesson_03_navigation_and_viewport_control.html`. Image production starts fresh in this chat; nothing for Lesson 03 was in `images/` at chat start.

## Status

- Phase 6 integration chat (this chat): the 3 final figures inlined into `lesson_03_navigation_and_viewport_control.html` across the advanced-techniques and summary sections, finishing Lesson 03 integration at 18 of 18. Document order in the file was #17 (Walk/Fly anchor in advanced-techniques) then #16 (Quadview anchor in advanced-techniques) then #18 (Cheat Sheet anchor in summary); the numeric order is reversed at the top because the Walk Navigation Mode card appears in the source file ahead of the Toggle Quadview card. #17 `lesson_03_17_walk_fly_controls.svg` inserted after the Walk Navigation Mode card's closing `</div>`, before the When to Use Walk Mode info card. #16 `lesson_03_16_quadview_layout.png` inserted after the Toggle Quadview card's closing `</div>`, before the Try It Now: Quadview card. #18 `lesson_03_18_navigation_shortcuts_reference.svg` inserted after the Your Navigation Cheat Sheet card's closing `</div>`, before the Common Questions at This Stage h3. The two SVGs followed the locked inline pattern: plain `<figure>` plus `<figcaption>` with no class, `color="#222"` stripped from each root `<svg>`, 20-space content depth, original `<title>` and `<desc>` preserved. The PNG used the standard `<img src="..." alt="..." loading="lazy">` pattern inside `<figure>` with descriptive alt text covering all four corner labels (Top, User Persp, Front, Right). All three figcaptions and the PNG alt text are em-dash-free; the pre-existing em-dash in the weird-views h4 in the summary section was preserved verbatim in the surrounding source. Edits staged in a single `Filesystem:edit_file` `dryRun=true` call (3 inserts, all anchors verified unique), then committed in one batch. HTML grew from 202.4 KB to 231.8 KB (+29.4 KB; 237,410 bytes). Integration state for Lesson 03: 18 of 18 figures placed; Lesson 03 image integration is now complete. Standalone close-out archive at `lesson_03_completion_handoff.md` (project root).
- Phase 5 integration chat (this chat): 4 PNG figures inlined into `lesson_03_navigation_and_viewport_control.html` across the focus-frame and camera-view sections in document order (#10, #11, #9, #15). #10 `lesson_03_10_frame_all_vs_selected.png` inserted after the Try It Now: Frame Selected card, before the Zoom to Mouse Cursor h3; #11 `lesson_03_11_local_view_demo.png` inserted after the Try It Now: Local View info card, before the paragraph beginning Local View is fantastic (which itself sits ahead of the Local View Gotcha warning card); #9 `lesson_03_09_camera_view_frame.png` inserted after the camera-frame bullet list ending with Triangles at corners, before the Composition in Camera View info card; #15 `lesson_03_15_camera_to_view.png` inserted after the Camera to View card, before the paragraph that begins This Camera to View mode is incredibly intuitive. All four followed the standard PNG pattern: plain `<figure>` plus `<figcaption>` wrapper with no class, `<img src="..." alt="..." loading="lazy">` at 20-space content depth, `<figure>` and `</figure>` at column 16. All four figcaptions and alt text are em-dash-free; the pre-existing em-dash in the source paragraph immediately after #15 was preserved verbatim in the anchor. Edits staged in a single `Filesystem:edit_file` `dryRun=true` call (4 inserts, all anchors verified unique), then committed in one batch. HTML grew from 200.2 KB to 202.4 KB (+2.2 KB; 207,218 bytes). Integration state for Lesson 03: 15 of 18 figures placed. Phase 6 remains (3 figures: #16 PNG plus #17 and #18 SVGs across advanced-techniques and summary). Phase 6 handoff written at `lesson_03_integration_phase6_handoff.md`. The previously embedded Phase 5 and Phase 6 handoff section in this doc has also been spun out into a standalone `lesson_03_integration_phase5_handoff.md` (now a historical record since Phase 5 is complete); the embedded section in this doc remains for backward reference.
- Phase 3+4 integration chat (this chat, continued from Phase 2): 5 figures inlined into `lesson_03_navigation_and_viewport_control.html` across perspective-ortho and standard-views sections. Phase 3 (3 figures: #12 `lesson_03_12_perspective_depth.svg`, #13 `lesson_03_13_orthographic_parallels.svg`, #6 `lesson_03_06_perspective_vs_orthographic.png`): #12 inserted after the train tracks paragraph in Perspective View, before the When to Use Perspective View card; #13 inserted after the infinitely good eyes paragraph in Orthographic View, before the When to Use Orthographic View card; #6 inserted after the Visual Comparison mermaid block, before the Practical Usage Tips h3. Phase 4 (2 figures: #7 `lesson_03_07_standard_views_cube.svg`, #8 `lesson_03_08_numpad_layout.svg`): #7 inserted after the inside a cube paragraph, before the Standard View Shortcuts card; #8 inserted after the standard-views mermaid block, before the Remember the Pattern info card. Followed the locked inline pattern for SVGs: plain `<figure>` plus `<figcaption>` with no class, `color="#222"` stripped from the root `<svg>`, 20-space content depth, original `<title>` and `<desc>` preserved. PNG #6 used the standard `<img src="..." alt="..." loading="lazy">` pattern inside `<figure>`. All five figcaptions and the PNG alt text are em-dash-free. Edits staged in a single `Filesystem:edit_file` `dryRun=true` call (5 inserts, all anchors verified unique), then committed in one batch. HTML grew from 158.5 KB to 200.2 KB (+41.7 KB). Integration state for Lesson 03: 11 of 18 figures placed. Phases 5 and 6 remain (7 figures: #9, #10, #11, #15 PNGs in Phase 5; #16 PNG plus #17 and #18 SVGs in Phase 6). Phase 5 handoff is embedded as the "Phase 5 and Phase 6 handoff" section at the bottom of `lesson_03_integration_progress.md` (the chat's toolset did not include `Filesystem:write_file`, so the handoff lives inline rather than in a separate file).
- Phase 2 integration chat (this chat, continued from Phase 1): figure #2 `lesson_03_02_mouse_button_reference.svg` inlined into the mouse-navigation section of `lesson_03_navigation_and_viewport_control.html`. Insertion point: after the paragraph "The middle mouse button is central to Blender navigation..." and before the "No Middle Mouse Button?" warning card. Followed the locked inline pattern: plain `<figure>` plus `<figcaption>` with no class, `color="#222"` stripped from the root `<svg>`, 20-space content depth, `<title>` and `<desc>` preserved. Figcaption is em-dash-free. HTML grew from 150.5 KB to ~158.5 KB (+8 KB). Integration state for Lesson 03: 6 of 18 figures placed. Phases 3 through 6 remain (12 figures). Phase 3 handoff written at `lesson_03_integration_phase3_handoff.md`.
- Phase 1 integration chat (this chat): 5 SVG figures inlined into the the-big-three section of `lesson_03_navigation_and_viewport_control.html`. Inserted in document order: #1 `big_three_operations` before the Orbit h3, #3 `orbit_operation` after the How to Orbit card, #4 `pan_operation` after the How to Pan card, #5 `zoom_operation` after the How to Zoom card, and #14 `navigation_workflow` after the mermaid block in Combining the Three Operations. Each followed the locked inline pattern: plain `<figure>` plus `<figcaption>` wrapper with no class, `color="#222"` stripped from the root `<svg>` so dark mode `currentColor` inheritance works, 20-space content depth, original `<title>` and `<desc>` preserved. All five figcaptions are em-dash-free. Edits ran via `Filesystem:edit_file` with `dryRun=true` first then committed in one batch. HTML grew from 103.5 KB to 150.5 KB (+47 KB). Integration state for Lesson 03: 5 of 18 figures placed. Phases 2 through 6 remain (13 figures). Phase 2 handoff written at `lesson_03_integration_phase2_handoff.md`.
- PNG capture chat completed the final two PNGs and brought Lesson 03 production to 18 of 18. Re-did #15 `lesson_03_15_camera_to_view.png`: the previous capture's ellipse was too tall and overlapped the "To 3D Cursor" and "Rotation" rows, so this pass measured precise pixel-row coordinates from the raw N-panel screenshot (text scan found row centers at y=500, 530, 559 with about 29 px spacing) and redrew the annotation with a tight ellipse at cx=1395, cy=530, rx=80, ry=11 focused on only the "Camera to View" row, leaving a clean 13 px gap to each neighbor. Then captured #16 `lesson_03_16_quadview_layout.png` (Ctrl+Alt+Q quadview) with four corner labels in Blender orange `#FF6B00`. Labels match the actual Blender 5.1 quadview layout: top-left "Top", top-right "User Persp", bottom-left "Front", bottom-right "Right". Note that Blender 5.1 places the perspective view in the top-right quadrant (not the bottom-right as the original spec assumed), so the labels match what is actually rendered. Used `bpy.ops.screen.screenshot()` for full-window capture (preserves panels) inside `bpy.context.temp_override` with the VIEW_3D WINDOW region for the camera-view and quadview operator calls. All six PNGs (#6, #9, #10, #11, #15, #16) now reside in `images/`. HTML still unchanged at 103.5 KB. Integration pass not yet started.
- Production chat 2 completed the remaining six SVGs in one pass, bringing total Lesson 03 image production to 12 of 18 (all 12 SVGs shipped, 0 of 6 PNGs). New files: #7 `lesson_03_07_standard_views_cube.svg` (isometric cube with six labeled camera positions around it), #8 `lesson_03_08_numpad_layout.svg` (color-coded numpad with right-side legend), #12 `lesson_03_12_perspective_depth.svg` (rails converging on a vanishing point on a dashed horizon), #13 `lesson_03_13_orthographic_parallels.svg` (blueprint-style vertical rails with equal-width measurements top and bottom proving no shrink), #17 `lesson_03_17_walk_fly_controls.svg` (WASD highlighted with directional arrows plus a mouse with yaw and pitch callouts), and #18 `lesson_03_18_navigation_shortcuts_reference.svg` (two-column reference card directly modeled on `lesson_02_18_keyboard_shortcuts_reference.svg`, six categories: The Big Three, Standard Views, Frame and Focus, Orbit by Keyboard, Camera View, Advanced). Each uses unique id prefixes (`sv`, `np`, `pd`, `op`, `wf`, `ns`) to avoid `<title>` and `<desc>` collisions when several are inlined on the same page. Phases 3 (SVGs only), 4, and 6 (SVGs only) are now produced; the six remaining PNGs (#6, #9, #10, #11, #15, #16) need Blender screenshots in a dedicated MCP capture chat. HTML still unchanged at 103.5 KB; no integration edits yet.
- Phase 1 SVG production completed this chat. Four more SVGs shipped: #3 `lesson_03_03_orbit_operation.svg`, #4 `lesson_03_04_pan_operation.svg`, #5 `lesson_03_05_zoom_operation.svg`, and #14 `lesson_03_14_navigation_workflow.svg`. The three motion-diagram SVGs (#3, #4, #5) were authored as a coherent set sharing visual treatment: matching header, operation badge near top, central scene visual, and a pair of bottom-row insets ("drag mapping" or "input mapping" on the left, "key idea" on the right). The workflow SVG (#14) is a polished decision-tree alternative to the existing mermaid in "Combining the Three Operations", with three primary branches (Orbit, Pan, Zoom) plus two dashed side-note callouts for "lost or disoriented" (press Home) and "focus on one object" (Numpad period). Total Lesson 03 production state: 6 of 18 (6 of 12 SVGs, 0 of 6 PNGs). Phase 1 is now 5 of 5 produced; Phase 2 is 1 of 1 produced. HTML still unchanged at 103.5 KB. No integration edits yet; that pass begins when production is further along or in a dedicated integration chat.
- Initial planning chat (post Lesson 01 close, post Lesson 02 close). Read `lesson_03_image_requirements.md` and the full `lesson_03_navigation_and_viewport_control.html` to map placement anchors. Confirmed `images/` contains no `lesson_03_*` assets yet. Phase plan, placement table, and image-prompts file all created on that chat.
- Phase 1 production started on the planning chat: 2 of 12 SVGs authored (#1 `lesson_03_01_big_three_operations.svg` and #2 `lesson_03_02_mouse_button_reference.svg`). Both follow the locked house style from `images/IMAGE_STYLE_GUIDE.md` (800px viewBox, 3px Blender-orange top strip, `currentColor` text, brand orange `#FF6B00` for highlights, footer tip callout, full accessibility tags). Neither is integrated into the HTML yet.
- Lesson 03 HTML file size at planning chat start: 103.5 KB. No HTML edits made on either chat so far.

## Images available and missing

Available in `images/` (18 of 18):

- #1 `lesson_03_01_big_three_operations.svg` (inline; produced on planning chat)
- #2 `lesson_03_02_mouse_button_reference.svg` (inline; produced on planning chat)
- #3 `lesson_03_03_orbit_operation.svg` (inline; produced on production chat 1)
- #4 `lesson_03_04_pan_operation.svg` (inline; produced on production chat 1)
- #5 `lesson_03_05_zoom_operation.svg` (inline; produced on production chat 1)
- #6 `lesson_03_06_perspective_vs_orthographic.png` (PNG; captured via MCP Blender bridge)
- #7 `lesson_03_07_standard_views_cube.svg` (inline; produced on production chat 2)
- #8 `lesson_03_08_numpad_layout.svg` (inline; produced on production chat 2)
- #9 `lesson_03_09_camera_view_frame.png` (PNG; captured via MCP Blender bridge)
- #10 `lesson_03_10_frame_all_vs_selected.png` (PNG; captured via MCP Blender bridge)
- #11 `lesson_03_11_local_view_demo.png` (PNG; captured via MCP Blender bridge)
- #12 `lesson_03_12_perspective_depth.svg` (inline; produced on production chat 2)
- #13 `lesson_03_13_orthographic_parallels.svg` (inline; produced on production chat 2)
- #14 `lesson_03_14_navigation_workflow.svg` (inline; produced on production chat 1)
- #15 `lesson_03_15_camera_to_view.png` (PNG; captured via MCP Blender bridge, redo with tight ellipse)
- #16 `lesson_03_16_quadview_layout.png` (PNG; captured via MCP Blender bridge)
- #17 `lesson_03_17_walk_fly_controls.svg` (inline; produced on production chat 2)
- #18 `lesson_03_18_navigation_shortcuts_reference.svg` (inline; produced on production chat 2)

Missing from production (0 of 18):

All 18 Lesson 03 image assets are now produced and reside in `images/`. The six PNG Blender screenshots were captured via the MCP Blender bridge; AI generation fallback was not needed. Capture instructions for all six remain documented in `lesson_03_image_prompts.md` for reference.

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
| 1 | the-big-three | #1, #3, #4, #5, #14 | all 5 | 5 of 5 integrated |
| 2 | mouse-navigation | #2 | #2 | 1 of 1 integrated |
| 3 | perspective-ortho | #6, #12, #13 | #12, #13 | 3 of 3 integrated |
| 4 | standard-views | #7, #8 | both | 2 of 2 integrated |
| 5 | focus-frame + camera-view | #9, #10, #11, #15 | none (all PNG) | 4 of 4 integrated |
| 6 | advanced-techniques + summary | #16, #17, #18 | #17, #18 | 3 of 3 integrated |

Note on Phase 1 progress: All 5 Phase 1 SVGs were produced across the planning chat (#1) and production chat 1 (#3, #4, #5 as a coherent motion-diagram trio, and #14 as a polished decision-tree alternative to the existing mermaid). Integration into the HTML was completed in the Phase 1 integration chat: all 5 figures were inlined into the the-big-three section in document order using the locked inline pattern, bringing Lesson 03 integration state to 5 of 18.

## Placement table (all 18 images)

Placements are derived from the HTML section structure plus the requirements doc. Each row gives the section ID, an anchor pair (the paragraph or h3 above the insertion point and the element immediately below it), and the current placement status.

| # | File | Section | Insertion point | Status |
|---|---|---|---|---|
| 1 | `lesson_03_01_big_three_operations.svg` | the-big-three | After the opening paragraph "All viewport navigation comes down to three fundamental operations..." and before the `<h3>Orbit: Rotating Around Your Scene</h3>` | integrated |
| 3 | `lesson_03_03_orbit_operation.svg` | the-big-three | In "Orbit: Rotating Around Your Scene". After the "How to Orbit" card's closing `</div>`, before the paragraph beginning "Think of orbit like this:". | integrated |
| 4 | `lesson_03_04_pan_operation.svg` | the-big-three | In "Pan: Moving Sideways Through Your Scene". After the "How to Pan" card's closing `</div>`, before the paragraph beginning "Panning is essential". | integrated |
| 5 | `lesson_03_05_zoom_operation.svg` | the-big-three | In "Zoom: Moving Closer or Further Away". After the "How to Zoom" card's closing `</div>`, before the paragraph beginning "Zooming is your tool". | integrated |
| 14 | `lesson_03_14_navigation_workflow.svg` | the-big-three | In "Combining the Three Operations". After the existing mermaid block, before the "Practice Exercise: Combine All Three" card. The mermaid covers branches; this SVG adds a richer "when to use what" decision tree with two dashed side-note callouts for "lost or disoriented" (Home) and "focus on one object" (Numpad period). | integrated |
| 2 | `lesson_03_02_mouse_button_reference.svg` | mouse-navigation | In "The Middle Mouse Button (Your Navigation Key)". After the opening paragraph "The middle mouse button is central to Blender navigation..." and before the "No Middle Mouse Button?" warning card. | integrated |
| 12 | `lesson_03_12_perspective_depth.svg` | perspective-ortho | In "Perspective View: How Eyes See". After the "train tracks" paragraph (begins "Imagine standing on train tracks..."), before the "When to Use Perspective View" card. | integrated |
| 13 | `lesson_03_13_orthographic_parallels.svg` | perspective-ortho | In "Orthographic View: Technical Precision". After the "infinitely good eyes" paragraph, before the "When to Use Orthographic View" card. | integrated |
| 6 | `lesson_03_06_perspective_vs_orthographic.png` | perspective-ortho | In "Visual Comparison". After the existing mermaid block, before the `<h3>Practical Usage Tips</h3>`. | integrated |
| 7 | `lesson_03_07_standard_views_cube.svg` | standard-views | In "The Six Standard Views". After the "Think of your scene as being inside a cube..." paragraph, before the "Standard View Shortcuts (Numpad)" card. | integrated |
| 8 | `lesson_03_08_numpad_layout.svg` | standard-views | In "The Six Standard Views". After the existing mermaid showing the six standard-view branches, before the "Remember the Pattern" info card. | integrated |
| 10 | `lesson_03_10_frame_all_vs_selected.png` | focus-frame | After "Frame Selected: Focus on What Matters" subsection's "Try It Now: Frame Selected" card, before the `<h3>Zoom to Mouse Cursor</h3>`. | integrated |
| 11 | `lesson_03_11_local_view_demo.png` | focus-frame | In "The Local View: Isolate Your Focus". After the "Try It Now: Local View" info card, before the "Local View Gotcha" warning card. | integrated |
| 9 | `lesson_03_09_camera_view_frame.png` | camera-view | In "The Camera Frame". After the bullet list describing frame elements (ending with "Triangles at corners"), before the "Composition in Camera View" info card. | integrated |
| 15 | `lesson_03_15_camera_to_view.png` | camera-view | In "Moving the Camera" then "Method 2". After the "Camera to View" card's closing `</div>`, before the paragraph beginning "This 'Camera to View' mode is incredibly intuitive". | integrated |
| 16 | `lesson_03_16_quadview_layout.png` | advanced-techniques | In "Quadview: See Four Views at Once". After the "Toggle Quadview" card's closing `</div>`, before the "Try It Now: Quadview" card. | integrated |
| 17 | `lesson_03_17_walk_fly_controls.svg` | advanced-techniques | In "Walk/Fly Navigation". After the "Walk Navigation Mode" card's closing `</div>`, before the "When to Use Walk Mode" info card. | integrated |
| 18 | `lesson_03_18_navigation_shortcuts_reference.svg` | summary | In "Essential Navigation Shortcuts Reference". After the existing "Your Navigation Cheat Sheet" card's closing `</div>`, before the `<h3>Common Questions at This Stage</h3>`. The existing card already provides table-form shortcuts; this SVG should add a visual reference card modeled on `lesson_02_18_keyboard_shortcuts_reference.svg`. | integrated |

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

## Phase 5 and Phase 6 handoff

This section is the working handoff for the next two integration chats (Phases 5 and 6). It would normally live in a separate `lesson_03_integration_phase5_handoff.md` file, but is embedded here because the Phase 3+4 chat ran on a toolset without `Filesystem:write_file` available for creating new files. The next chat can lift the verbatim prompt at the bottom of this section as its opening message.

**Current state at chat start.** Lesson 03 HTML integration is at 11 of 18 figures (Phases 1 through 4 complete). HTML file size is 200.2 KB. The seven remaining figures span four sections of the HTML: focus-frame, camera-view, advanced-techniques, and summary. All seven figure files exist in `images/`. Phase 3+4 chat shifted document line numbers by roughly +288 lines beyond the pre-edit positions; reread the HTML fresh in the next chat rather than relying on cached line numbers.

**Standing rules (unchanged from prior phases).**

- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- `Filesystem:edit_file` for existing files. Run with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.
- Plain `<figure>` plus `<figcaption>` wrapper, no class. Inline SVGs sit at 20-space content depth: `<figure>` at column 16, `<svg>` at column 20, body at column 22, `<g>` children at column 24, `</svg>` at column 20, `<figcaption>` at column 20, `</figure>` at column 16.
- For every inlined SVG, strip the `color="#222"` attribute from the root `<svg>` tag. That attribute locks `currentColor` and breaks dark mode when inlined. If `color="#222"` sits on its own continuation line, drop the line and reattach the closing `>` to the previous attribute line. Standalone `.svg` files in `images/` keep the attribute for fallback rendering; only the inline copy in HTML drops it.
- For every PNG, use the standard `<img src="images/..." alt="..." loading="lazy">` pattern inside `<figure>`, with descriptive alt text.
- Use 2 to 3 line anchors for `oldText` so each insertion point is unique within the file.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note written this pass. Use a comma, a colon, or a sentence break instead. Em-dashes that already exist in source content (paragraphs, blockquotes, SVG body comments) are preserved.
- Warn when context starts getting tight rather than letting automatic compaction happen.

### Phase 5: focus-frame and camera-view sections (4 PNG figures)

Document order in the HTML is focus-frame first, then camera-view. Place the four PNGs in document order so the placement table reads top to bottom.

**Phase 5 figure 1: #10 `lesson_03_10_frame_all_vs_selected.png` (focus-frame).**

- Subsection: "Frame Selected: Focus on What Matters".
- Anchor above: the closing `</div>` of the "Try It Now: Frame Selected" card.
- Anchor below: `<h3>Zoom to Mouse Cursor</h3>`.
- Alt text idea: side by side composite showing Frame All (entire scene fit to view) on the left and Frame Selected (zoomed in on a single object) on the right.
- Figcaption idea: contrasts the two framing commands so the reader notices that Frame All pulls the camera back to fit the whole scene while Frame Selected pulls in tight on the active selection.

**Phase 5 figure 2: #11 `lesson_03_11_local_view_demo.png` (focus-frame).**

- Subsection: "The Local View: Isolate Your Focus".
- Anchor above: the closing `</div>` of the "Try It Now: Local View" info card.
- Anchor below: the opening `<div>` of the "Local View Gotcha" warning card.
- Alt text idea: before and after composite, first the full scene with several objects visible, then Local View isolating a single object with the rest of the scene hidden.
- Figcaption idea: highlights how Numpad slash temporarily hides everything except the active selection so the reader can work on one object without visual clutter.

**Phase 5 figure 3: #9 `lesson_03_09_camera_view_frame.png` (camera-view).**

- Subsection: "The Camera Frame".
- Anchor above: the closing `</li>` of the bullet ending with "Triangles at corners" in the bullet list that describes the frame elements.
- Anchor below: the opening `<div>` of the "Composition in Camera View" info card.
- Alt text idea: Blender camera view with the camera frame visible, annotated to call out the dashed safe-area lines, the dotted outer mask, and the corner triangles.
- Figcaption idea: orients the reader to the visible parts of the camera frame so they can match what the screenshot shows to what the bullet list described.

**Phase 5 figure 4: #15 `lesson_03_15_camera_to_view.png` (camera-view).**

- Subsection: "Moving the Camera" then the "Method 2" subheading.
- Anchor above: the closing `</div>` of the "Camera to View" card.
- Anchor below: the paragraph beginning "This 'Camera to View' mode is incredibly intuitive".
- Alt text idea: N-panel sidebar in the camera view, with a tight ellipse highlighting the "Camera to View" checkbox row in the View tab.
- Figcaption idea: points to exactly which checkbox in the View tab activates Camera to View mode so the reader does not have to hunt for it.

### Phase 6: advanced-techniques and summary sections (1 PNG plus 2 inline SVGs)

Document order: #16 then #17 in advanced-techniques, then #18 in summary.

**Phase 6 figure 1: #16 `lesson_03_16_quadview_layout.png` (advanced-techniques, PNG).**

- Subsection: "Quadview: See Four Views at Once".
- Anchor above: the closing `</div>` of the "Toggle Quadview" card.
- Anchor below: the opening `<div>` of the "Try It Now: Quadview" card.
- Alt text idea: the four-pane quadview layout with the Blender default cube, four corner labels naming each pane (Top, User Persp, Front, Right) in Blender orange.
- Figcaption idea: names each pane so the reader can map the on-screen Ctrl+Alt+Q layout to the standard views.

**Phase 6 figure 2: #17 `lesson_03_17_walk_fly_controls.svg` (advanced-techniques, inline SVG).**

- Subsection: "Walk/Fly Navigation".
- Anchor above: the closing `</div>` of the "Walk Navigation Mode" card.
- Anchor below: the opening `<div>` of the "When to Use Walk Mode" info card.
- Inline pattern: standard SVG transform (drop `color="#222"` from the root `<svg>`, re-indent to 20-space content depth, preserve `<title>` and `<desc>`).
- Figcaption idea: highlights the WASD keys plus the mouse pointer for yaw and pitch so the reader sees Walk mode as a first-person navigation grammar borrowed from games.

**Phase 6 figure 3: #18 `lesson_03_18_navigation_shortcuts_reference.svg` (summary, inline SVG).**

- Subsection: "Essential Navigation Shortcuts Reference".
- Anchor above: the closing `</div>` of the "Your Navigation Cheat Sheet" card.
- Anchor below: `<h3>Common Questions at This Stage</h3>`.
- Inline pattern: standard SVG transform (drop `color="#222"` from the root `<svg>`, re-indent to 20-space content depth, preserve `<title>` and `<desc>`).
- Figcaption idea: positions the SVG as a visual companion to the existing tabular cheat sheet so a reader can glance at one or the other depending on whether they prefer a table or a card.

### Suggested cadence for the next two chats

Option A: one chat for Phase 5 (4 PNGs) and one chat for Phase 6 (1 PNG plus 2 SVGs). This matches the prior cadence and keeps each chat focused on a single section pair.

Option B: a single chat for both phases if context is available. Total of 7 inserts, including 2 SVG transforms. Workable but tighter on tokens.

When in doubt, run Option A.

### End-of-chat obligations

After each chat that finishes Lesson 03 integration further:

1. Verify the HTML with `Filesystem:get_file_info` and record the new size.
2. Flip the relevant rows in the placement table inside `lesson_03_integration_progress.md` from `produced; not integrated` to `integrated`.
3. Update the phase plan table (Phase 5 or Phase 6 status cell).
4. Add a new status bullet at the top of the `## Status` list inside `lesson_03_integration_progress.md` summarizing what was placed, anchors used, file size delta, em-dash discipline, and pointer to the next handoff or to the Lesson 03 close-out note.
5. Update `status.md`: the top `Total Size` paragraph, the Lesson 03 row size cell, the Image Integration Status row for Lesson 03, and the Site-Wide Image Production and Integration row.
6. If Phase 6 finishes Lesson 03 entirely (18 of 18 integrated), write a Lesson 03 close-out note: either as a new section at the bottom of `lesson_03_integration_progress.md`, or as a separate `lesson_03_completion_handoff.md` if `Filesystem:write_file` is available in that chat's toolset. Flip the Lesson 03 row in `status.md` to `✅ Complete`.

### Verbatim handoff prompt for Phase 5

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 03 HTML integration, Phase 5. Place 4 PNG figures into lesson_03_navigation_and_viewport_control.html across the focus-frame and camera-view sections. Document order: #10, #11, #9, #15.

First reads, in this order:
1. lesson_03_integration_progress.md, especially the "Phase 5 and Phase 6 handoff" section near the bottom.
2. The target file lesson_03_navigation_and_viewport_control.html (full read).
3. Each PNG referenced in passing only if needed for alt text refinement; the placement and caption guidance is in the handoff section.

Standing rules: \\wsl$ paths only, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info after commit, plain <figure>/<figcaption> wrapper (no class), <img src="images/..." alt="..." loading="lazy"> pattern for PNGs, 2-3 line anchors for oldText uniqueness.

End-of-chat obligations: update placement table to "integrated" for #9, #10, #11, #15; update phase plan table Phase 5 row to "4 of 4 integrated"; add a new status bullet at the top of lesson_03_integration_progress.md; update status.md Lesson 03 row (size cell, Image Integration Status row notes from 11 of 18 to 15 of 18), Site-Wide Image Production and Integration row, and the top Total Size paragraph; if a separate Phase 6 handoff file is needed and Filesystem:write_file is available, write lesson_03_integration_phase6_handoff.md; otherwise leave the embedded handoff section in lesson_03_integration_progress.md as the source of truth.

Warn me when context starts getting tight rather than letting automatic compaction happen.
```

### Verbatim handoff prompt for Phase 6

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 03 HTML integration, Phase 6. Place 3 figures (1 PNG #16 plus 2 inline SVGs #17 and #18) into lesson_03_navigation_and_viewport_control.html across the advanced-techniques and summary sections. Document order: #16, #17, #18. This phase finishes Lesson 03 integration at 18 of 18.

First reads, in this order:
1. lesson_03_integration_progress.md, especially the "Phase 5 and Phase 6 handoff" section near the bottom.
2. The target file lesson_03_navigation_and_viewport_control.html (full read).
3. images/lesson_03_17_walk_fly_controls.svg and images/lesson_03_18_navigation_shortcuts_reference.svg (full reads for the inline transform).

Standing rules: \\wsl$ paths only, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info after commit, plain <figure>/<figcaption> wrapper (no class), strip color="#222" from each inlined <svg> root, re-indent inline SVG body to 20-space content depth, <img src="images/..." alt="..." loading="lazy"> for the PNG, 2-3 line anchors for oldText uniqueness.

End-of-chat obligations: update placement table to "integrated" for #16, #17, #18; update phase plan table Phase 6 row to "3 of 3 integrated"; add a Lesson 03 close-out status bullet at the top of lesson_03_integration_progress.md noting 18 of 18 complete and recording final HTML size; flip the Lesson 03 row in status.md from In Progress to Complete (update Image Integration Status row state and notes, Site-Wide Image Production and Integration row, top Total Size paragraph, and Lesson 03 size cell in Module 1). If Filesystem:write_file is available, also write a lesson_03_completion_handoff.md modeled on lesson_02_completion_handoff.md for the project archive.

Warn me when context starts getting tight rather than letting automatic compaction happen.
```

