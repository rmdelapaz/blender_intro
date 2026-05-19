# Lesson 03 HTML Integration: Phase 5 Handoff

Phase 5 handoff for the focus-frame and camera-view sections of `lesson_03_navigation_and_viewport_control.html`. This file was spun out from the embedded "Phase 5 and Phase 6 handoff" section at the bottom of `lesson_03_integration_progress.md` once `Filesystem:write_file` became available again. The original embedded section is preserved in the progress doc for backward reference.

## Status

**Phase 5 is complete as of 2026-05-18.** All 4 PNG figures (#10, #11, #9, #15) are integrated into the HTML in document order. HTML file size: 207,218 bytes (202.4 KB), up from 200.2 KB at chat start. Lesson 03 integration state advanced from 11 of 18 to 15 of 18 figures placed. See the top status bullet in `lesson_03_integration_progress.md` for chat-level detail.

This document is retained as a historical record of the Phase 5 spec. The active forward-looking handoff is `lesson_03_integration_phase6_handoff.md`.

## Current state at Phase 5 chat start (for the record)

Lesson 03 HTML integration was at 11 of 18 figures (Phases 1 through 4 complete). HTML file size was 200.2 KB. The seven remaining figures spanned four sections: focus-frame, camera-view, advanced-techniques, and summary. All seven figure files already existed in `images/`. Phase 3+4 chat had shifted document line numbers by roughly +288 lines beyond pre-edit positions; the Phase 5 chat reread the HTML fresh rather than relying on cached line numbers.

## Standing rules (unchanged across phases)

- `\\wsl$\Ubuntu\` path prefix only. Never `\\wsl.localhost\`.
- `Filesystem:edit_file` for existing files. Run with `dryRun=true` first to confirm anchors match, then commit with `dryRun=false`. Verify with `Filesystem:get_file_info` after every commit.
- Plain `<figure>` plus `<figcaption>` wrapper, no class.
- For every PNG, use the standard `<img src="images/..." alt="..." loading="lazy">` pattern inside `<figure>`, with descriptive alt text. `<figure>` and `</figure>` at column 16, `<img>` and `<figcaption>` at column 20.
- Use 2 to 3 line anchors for `oldText` so each insertion point is unique within the file.
- No new em-dashes in any new figcaption, alt text, status block, or markdown note written this pass. Use a comma, a colon, or a sentence break instead. Em-dashes that already exist in source content (paragraphs, blockquotes, SVG body comments) are preserved.
- Warn when context starts getting tight rather than letting automatic compaction happen.

## Phase 5: focus-frame and camera-view sections (4 PNG figures)

Document order in the HTML is focus-frame first, then camera-view. Place the four PNGs in document order so the placement table reads top to bottom.

### Phase 5 figure 1: #10 `lesson_03_10_frame_all_vs_selected.png` (focus-frame)

- Subsection: "Frame Selected: Focus on What Matters".
- Anchor above: the closing `</div>` of the "Try It Now: Frame Selected" card.
- Anchor below: `<h3>Zoom to Mouse Cursor</h3>`.
- Alt text idea: side by side composite showing Frame All (entire scene fit to view) on the left and Frame Selected (zoomed in on a single object) on the right.
- Figcaption idea: contrasts the two framing commands so the reader notices that Frame All pulls the camera back to fit the whole scene while Frame Selected pulls in tight on the active selection.

### Phase 5 figure 2: #11 `lesson_03_11_local_view_demo.png` (focus-frame)

- Subsection: "The Local View: Isolate Your Focus".
- Anchor above: the closing `</div>` of the "Try It Now: Local View" info card.
- Anchor below: the opening `<div>` of the "Local View Gotcha" warning card.
- Alt text idea: before and after composite, first the full scene with several objects visible, then Local View isolating a single object with the rest of the scene hidden.
- Figcaption idea: highlights how Numpad slash temporarily hides everything except the active selection so the reader can work on one object without visual clutter.

### Phase 5 figure 3: #9 `lesson_03_09_camera_view_frame.png` (camera-view)

- Subsection: "The Camera Frame".
- Anchor above: the closing `</li>` of the bullet ending with "Triangles at corners" in the bullet list that describes the frame elements.
- Anchor below: the opening `<div>` of the "Composition in Camera View" info card.
- Alt text idea: Blender camera view with the camera frame visible, annotated to call out the dashed safe-area lines, the dotted outer mask, and the corner triangles.
- Figcaption idea: orients the reader to the visible parts of the camera frame so they can match what the screenshot shows to what the bullet list described.

### Phase 5 figure 4: #15 `lesson_03_15_camera_to_view.png` (camera-view)

- Subsection: "Moving the Camera" then the "Method 2" subheading.
- Anchor above: the closing `</div>` of the "Camera to View" card.
- Anchor below: the paragraph beginning "This 'Camera to View' mode is incredibly intuitive".
- Alt text idea: N-panel sidebar in the camera view, with a tight ellipse highlighting the "Camera to View" checkbox row in the View tab.
- Figcaption idea: points to exactly which checkbox in the View tab activates Camera to View mode so the reader does not have to hunt for it.

## End-of-chat obligations (Phase 5)

After the chat that finishes Phase 5 integration:

1. Verify the HTML with `Filesystem:get_file_info` and record the new size.
2. Flip the rows for #9, #10, #11, #15 in the placement table inside `lesson_03_integration_progress.md` from `produced; not integrated` to `integrated`.
3. Update the phase plan table (Phase 5 status cell to `4 of 4 integrated`).
4. Add a new status bullet at the top of the `## Status` list inside `lesson_03_integration_progress.md` summarizing what was placed, anchors used, file size delta, em-dash discipline, and the path to the Phase 6 handoff.
5. Update `status.md`: the top `Total Size` paragraph, the Lesson 03 row size cell, the Image Integration Status row for Lesson 03, and the Site-Wide Image Production and Integration row.
6. If `Filesystem:write_file` is available, also write `lesson_03_integration_phase6_handoff.md` so the next chat has a standalone file rather than relying on the embedded section.

## Verbatim handoff prompt (the one this chat ran on)

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Target file: lesson_03_navigation_and_viewport_control.html
Task: Lesson 03 HTML integration, Phase 5. Place 4 PNG figures into the focus-frame and camera-view sections. After this phase, integration goes from 11 of 18 to 15 of 18.
Document order (focus-frame first, then camera-view):
1. #10 lesson_03_10_frame_all_vs_selected.png  (focus-frame)
   Subsection: "Frame Selected: Focus on What Matters"
   Above: closing </div> of the "Try It Now: Frame Selected" card
   Below: <h3>Zoom to Mouse Cursor</h3>
2. #11 lesson_03_11_local_view_demo.png  (focus-frame)
   Subsection: "The Local View: Isolate Your Focus"
   Above: closing </div> of the "Try It Now: Local View" info card
   Below: opening <div> of the "Local View Gotcha" warning card
3. #9 lesson_03_09_camera_view_frame.png  (camera-view)
   Subsection: "The Camera Frame"
   Above: closing </li> of the bullet ending "Triangles at corners"
   Below: opening <div> of the "Composition in Camera View" info card
4. #15 lesson_03_15_camera_to_view.png  (camera-view)
   Subsection: "Moving the Camera" then "Method 2"
   Above: closing </div> of the "Camera to View" card
   Below: paragraph beginning "This 'Camera to View' mode is incredibly intuitive"
Wrapper pattern (PNGs only this phase):
    <figure>
        <img src="images/lesson_03_NN_slug.png" alt="..." loading="lazy">
        <figcaption>Caption text.</figcaption>
    </figure>
<figure> at column 16, <img> and <figcaption> at column 20, </figure> at column 16.
Standing rules: \\wsl$ paths only, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info after commit, plain <figure>/<figcaption> wrapper (no class), 2-3 line anchors for oldText uniqueness. Warn me when context gets tight.
Reads, in this order:
1. lesson_03_integration_progress.md "Phase 5 and Phase 6 handoff" section near the bottom (alt-text and figcaption guidance per figure lives there)
2. lesson_03_navigation_and_viewport_control.html (full read, current size 200.2 KB)
End-of-chat obligations:
- Flip placement table rows for #9, #10, #11, #15 to "integrated"
- Update phase plan table: Phase 5 -> "4 of 4 integrated"
- New status bullet at the top of lesson_03_integration_progress.md
- status.md: Lesson 03 size cell, Image Integration Status row (11 of 18 -> 15 of 18), Site-Wide row, top Total Size paragraph
- If Filesystem:write_file is available, spin out lesson_03_integration_phase5_handoff.md from the embedded handoff section in the progress doc, and write lesson_03_integration_phase6_handoff.md for the next phase
```

## Final captions and alt text used (for the record)

For continuity if any caption needs revisiting in a future polish pass.

- **#10 `lesson_03_10_frame_all_vs_selected.png`**
  - Alt: Side by side composite. Left panel shows Frame All with the entire scene fit to the viewport. Right panel shows Frame Selected with the view pulled in tight on a single object.
  - Figcaption: Frame All on the left pulls the camera back to fit the whole scene; Frame Selected on the right zooms in tight on the active selection. The two commands together cover most of the framing you will reach for during modeling.
- **#11 `lesson_03_11_local_view_demo.png`**
  - Alt: Before and after composite. Top shows the full scene with cube, light, and camera all visible. Bottom shows Local View active, with only the selected cube remaining and the rest of the scene hidden.
  - Figcaption: Numpad slash toggles Local View, temporarily hiding everything except the active selection. The bottom pane shows the same scene after Local View takes over, leaving a clean workbench for just the cube.
- **#9 `lesson_03_09_camera_view_frame.png`**
  - Alt: Blender 3D viewport in camera view. The solid render frame, dashed inner safe area lines, dotted outer mask, center cross, and triangles at each corner are all visible around the default cube.
  - Figcaption: What you should see when you press Numpad 0. Match the elements in this screenshot to the bullet list above: solid frame, dashed safe area, center cross, and corner triangles.
- **#15 `lesson_03_15_camera_to_view.png`**
  - Alt: Blender N-panel sidebar opened to the View tab. A tight orange ellipse circles the 'Camera to View' checkbox row, isolating it from the other View settings around it.
  - Figcaption: The exact checkbox to look for in the View tab of the N-panel. Tick it to enter Camera to View mode, untick it when you are done framing the shot.
