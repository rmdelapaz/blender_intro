# Lesson 04 HTML Integration: Progress

Tracks production and integration of the 14 Lesson 04 images into `lesson_04_basic_object_manipulation.html`. Image production starts fresh in this chat; no `lesson_04_*` assets exist in `images/` at chat start.

## Status

- Phase 1 integration chat. Inlined both selection-basics SVGs into `lesson_04_basic_object_manipulation.html`. SVG #1 `lesson_04_01_selection_states.svg` (id prefix `ss`) inserted in the Understanding Selection States subsection between the outline-states `<ul>` and the active-object `<p>`; SVG #2 `lesson_04_02_selection_tools.svg` (id prefix `st`) inserted in the Advanced Selection Techniques subsection between the More Selection Tools card and the selection-methods mermaid block. Both inserts via `Filesystem:edit_file` with `dryRun=true` first then commit; `color="#222"` attribute stripped from each inlined root `<svg>` tag (the standalone `.svg` files in `images/` retain that attribute for `<img>` fallback); content re-indented to 20-space content depth per the locked inline pattern; new figcaptions written em-dash-free, conversational, pointing the reader at what each figure shows. The pre-existing em-dash in the source paragraph ("you selected—it's the one") was preserved verbatim through the anchor; no new em-dashes introduced in any new content. HTML grew from 106.0 KB (108546 bytes) at chat start to 125.7 KB (128694 bytes) at chat end, plus 20.1 KB across both inserts. Placement table rows for #1 and #2 flipped from "produced; not integrated" to "integrated"; phase plan table Phase 1 row flipped to "2 of 2 produced, 2 of 2 integrated". `status.md` Image Integration Status row for Lesson 04 updated to reflect 2 of 14 integrated and new file size 125.7 KB. Phase 2 handoff written at `lesson_04_integration_phase2_handoff.md`. Image production for Phase 2 (SVGs #3 transform_gizmo, #4 axis_movement, #6 rotation_axes covering the move-grab and rotate sections) deferred to the next chat to keep context budget clean.
- Phase 1 production chat. Authored both selection-basics SVGs and wrote them to `images/`. `lesson_04_01_selection_states.svg` at 5578 bytes (5.4 KB), id prefix `ss`, trio comparison of three cubes showing active, selected-not-active, and unselected outline states with a tip explaining the active-vs-selected distinction. `lesson_04_02_selection_tools.svg` at 9540 bytes (9.3 KB), id prefix `st`, three-panel triptych for Box Select (dashed rectangle, B key badge), Circle Select (orange brush, C key badge), and Lasso Select (freeform curve, Ctrl + drag badge). Both verified on disk via `Filesystem:get_file_info`. Locked house style followed verbatim: 800x560 viewBox, 3px Blender-orange top strip, `currentColor` labels, footer tip callout, full accessibility tags (`role="img"` plus `aria-labelledby` pointing at matching `<title>` and `<desc>`), `color="#222"` retained on the root for `<img>` fallback. No new em-dashes introduced anywhere in the new content. No HTML edits made this chat; Phase 1 integration deferred to a dedicated chat to keep context budget clean. Phase 2 handoff written at `lesson_04_integration_phase2_handoff.md`.
- Planning chat (this chat). Read `lesson_04_image_requirements.md`, the full `lesson_04_basic_object_manipulation.html` (106.0 KB at chat start), `lesson_03_completion_handoff.md` for the locked patterns carried forward, `lesson_03_integration_progress.md` for structural reference, and `images/IMAGE_STYLE_GUIDE.md` for SVG house style. Confirmed `images/` contains no `lesson_04_*` assets at chat start (only stray `_tmp_*` and `_wave*_temp` directories alongside the produced lesson_01, lesson_02, and lesson_03 assets). Decided a 6-phase plan mapping cleanly to the lesson's 10 HTML sections, with the 14 images split as 10 inline SVGs plus 4 PNG Blender screenshots. The SVG-heavy split is deliberate: most Lesson 04 images are diagrammatic in nature (selection-state outlines, transform gizmos, axis-constraint motion diagrams, rotation rods, scale comparison grids, global-vs-local axis frames, duplication concept, origin point illustration, keyboard cheat sheet) and convert cleanly to the locked house style; only #8 3D cursor placement, #9 Shift+S snap pie menu, #12 N-panel transform sidebar, and #13 finished table-scene render genuinely require a live Blender 5.1 viewport capture. Placement anchors mapped for all 14 images, with each row of the placement table pointing at a paragraph-or-card anchor above and an h3-or-card anchor below to give `Filesystem:edit_file` a unique 2 to 3 line match. Companion prompts doc `lesson_04_image_prompts.md` also written this chat, documenting Blender 5.1 capture instructions plus Adobe Firefly and Canva AI fallback prompts for the 4 PNGs. Both planning docs confirmed on disk via `Filesystem:get_file_info`: `lesson_04_integration_progress.md` at 22353 bytes (21.8 KB), `lesson_04_image_prompts.md` at 20678 bytes (20.2 KB). No Phase 1 SVG production was started this chat; the chat ended after the two planning docs so the budget stays clean for a dedicated Phase 1 production chat. Phase 1 handoff written at `lesson_04_integration_phase1_handoff.md`. HTML still unchanged at 106.0 KB. No HTML edits made.

## Images available and missing

Available in `images/` (2 of 14):

SVGs (2 of 10):

- #1 `lesson_04_01_selection_states.svg` (5578 bytes, id prefix `ss`)
- #2 `lesson_04_02_selection_tools.svg` (9540 bytes, id prefix `st`)

PNGs (0 of 4):

None yet.

Missing from production (12 of 14):

SVGs (8):

- #3 `lesson_04_03_transform_gizmo.svg`
- #4 `lesson_04_04_axis_movement.svg`
- #5 `lesson_04_05_global_local_axes.svg`
- #6 `lesson_04_06_rotation_axes.svg`
- #7 `lesson_04_07_scale_operations.svg`
- #10 `lesson_04_10_duplication_comparison.svg`
- #11 `lesson_04_11_origin_point.svg`
- #14 `lesson_04_14_keyboard_shortcuts.svg`

PNGs (4):

- #8 `lesson_04_08_3d_cursor.png` (Blender 5.1 viewport with 3D cursor placed and annotated)
- #9 `lesson_04_09_snap_menu.png` (Shift+S pie menu over default viewport)
- #12 `lesson_04_12_transform_properties.png` (N-panel Item tab with Location, Rotation, Scale, Dimensions populated)
- #13 `lesson_04_13_completed_scene.png` (finished table scene matching the project Step 1 through Step 7 outcome)

Full capture instructions and AI-generation fallback prompts for all 4 PNGs live in `lesson_04_image_prompts.md`.

## Locked approach (identical to Lessons 01, 02, and 03)

- **Wrapper:** plain `<figure>` with `<figcaption>` for every image. No class. `styles/main.css` already styles both elements directly.
- **PNGs:** `<img src="images/..." alt="..." loading="lazy">` inside the figure with descriptive alt text.
- **SVGs:** inlined verbatim inside the figure, re-indented to 20-space content depth. **Critical: strip the `color="#222"` attribute from the inline `<svg>` root tag.** That attribute is the `<img>`-embedded fallback (so a standalone SVG has some color); when inlined, it locks the SVG's `color` to `#222` and prevents `currentColor` from inheriting the page text color, breaking dark mode. The `.svg` source files in `images/` keep the attribute for standalone viewing; only the inline copy in HTML drops it.
- **Tools:** `Filesystem:edit_file` only for existing files. Always `dryRun=true` first to confirm anchors match, then commit. Verify with `Filesystem:get_file_info` after every commit. For new files (the SVGs in `images/`, this progress doc, the prompts file), use `Filesystem:write_file`. NEVER use the built-in `create_file` (writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths).
- **Anchors:** use 2 to 3 lines for `oldText` (the paragraph or h3 immediately above and the next element below the insertion point). Make sure the anchor is unique within the file.
- **Path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.
- **No new em-dashes** in any new content (captions, alt text, this doc, the prompts doc). Preserve em-dashes that exist in source content (existing paragraphs, blockquotes, the SVG body text from prior lessons). Note: Lesson 04 source HTML contains many em-dashes in the existing prose (for example, "Move (Grab)—Positioning Objects"); those are preserved verbatim through every edit anchor.
- **Per-chat archive discipline:** when the chat is winding down or context is getting heavy, warn Ray rather than letting automatic compaction happen.
- **AI prompts for missing raster images:** all 4 PNGs that this lesson needs are documented in `lesson_04_image_prompts.md`. Real Blender 5.1 screenshots are the strongly preferred sourcing route for every one of them; AI generation (Adobe Firefly via the Adobe for creativity MCP, or Canva AI image generator) is a fallback only.
- **Version currency:** Blender 5.1 is the project target (current stable as of March 2026). Audit Lesson 04 prose for version-specific references when integration runs. The HTML in its current form references "Blender 4.0+" in the Box Select card; that should be retargeted to Blender 5.1 (or made version-generic) at the relevant integration phase, since press-and-drag box select has been default since well before 5.1.

## Phase plan

Phases are scoped to one or two HTML sections at a time, matching the Lesson 03 cadence. Each phase places that section's images and updates this progress doc when complete.

| Phase | Section(s) | Images | Inline SVGs | Status |
|---|---|---|---|---|
| 1 | selection-basics | #1, #2 | both | 2 of 2 produced, 2 of 2 integrated |
| 2 | move-grab, rotate | #3, #4, #6 | all 3 | 0 of 3 produced, 0 of 3 integrated |
| 3 | scale, axis-constraints | #7, #5 | both | 0 of 2 produced, 0 of 2 integrated |
| 4 | 3d-cursor | #8, #9 | none (both PNG) | 0 of 2 captured, 0 of 2 integrated |
| 5 | duplication, origin-transform | #10, #11, #12 | #10, #11 | 0 of 3 produced or captured, 0 of 3 integrated |
| 6 | manipulation-project, summary | #13, #14 | #14 only | 0 of 2 produced or captured, 0 of 2 integrated |

Phase order is document order in the HTML: selection-basics, move-grab, rotate, scale, axis-constraints, 3d-cursor, duplication, origin-transform, manipulation-project, summary. Production order within each phase should match document order so the placement table reads top to bottom when complete.

Production-vs-capture cadence:

- SVG phases (Phases 1, 2, 3, 5, 6 partial): one SVG per chat is the ideal cadence per the locked rules. Two SVGs per chat is workable when the diagrams are simple variants of an existing pattern (for example, #6 rotation axes adapts the Lesson 03 motion-diagram trio pattern; #14 keyboard shortcuts adapts the Lesson 02 #18 and Lesson 03 #18 two-column reference card pattern).
- PNG phases (Phase 4, plus #12 in Phase 5 and #13 in Phase 6): one or two captures per chat depending on Blender state setup overhead. Capture instructions in `lesson_04_image_prompts.md` keep state setup self-contained per image.

## Placement table (all 14 images)

Placements are derived from the HTML section structure plus the requirements doc's "Image Placement Suggestions in HTML" section. Each row gives the section ID, an anchor pair (the paragraph or h3 above the insertion point and the element immediately below it), and the current placement status.

| # | File | Section | Insertion point | Status |
|---|---|---|---|---|
| 1 | `lesson_04_01_selection_states.svg` | selection-basics | In "Understanding Selection States". After the `<ul>` listing the four outline states (Orange, Light orange or yellow, No outline, Dark outline), before the paragraph beginning `The "active" object is the last one`. | integrated |
| 2 | `lesson_04_02_selection_tools.svg` | selection-basics | In "Advanced Selection Techniques". After the "More Selection Tools" card's closing `</div>` (which introduces lasso plus other tools), before the mermaid block showing the selection-methods tree. The figure summarizes box, circle, and lasso visually as the trio is wrapped up. | integrated |
| 3 | `lesson_04_03_transform_gizmo.svg` | move-grab | In "Understanding the Move Gizmo". After the `<ul>` listing Red arrow, Green arrow, Blue arrow, White circle, before the paragraph beginning `You can press and drag these arrows`. | produced; not integrated |
| 4 | `lesson_04_04_axis_movement.svg` | move-grab | In "Moving Along Specific Axes". After the "Axis-Constrained Movement" card's closing `</div>` (which lists G then X, G then Y, G then Z), before the "Try It Now: Constrained Movement" card. | produced; not integrated |
| 6 | `lesson_04_06_rotation_axes.svg` | rotate | In "Understanding Rotation Axes". After the existing mermaid block that branches X, Y, Z with rod descriptions, before the `<h3>Precise Rotation with Numbers</h3>`. The mermaid covers the conceptual branches; this SVG adds the actual visual rotation rods with motion arcs. | produced; not integrated |
| 7 | `lesson_04_07_scale_operations.svg` | scale | In "Uniform vs. Non-Uniform Scaling". After the "Axis-Constrained Scaling" card's closing `</div>` (which lists S then X, S then Y, S then Z), before the "Try It Now: Stretch and Squash" card. | produced; not integrated |
| 5 | `lesson_04_05_global_local_axes.svg` | axis-constraints | In "Global vs. Local Axes". After the "Global vs Local Orientation" card's closing `</div>`, before the "Try It Now: Global vs Local" card. | produced; not integrated |
| 8 | `lesson_04_08_3d_cursor.png` | 3d-cursor | In "What Is the 3D Cursor?". After the "Moving the 3D Cursor" card's closing `</div>` (lists Shift plus Right Click, Shift plus S, manual positioning), before the "Try It Now: Position the Cursor" card. | not captured; not integrated |
| 9 | `lesson_04_09_snap_menu.png` | 3d-cursor | In "The Snap Menu (Shift + S)". After the "Shift + S Snap Menu" card's closing `</div>` (lists all snap options), before the "Try It Now: Snap Menu Magic" card. | not captured; not integrated |
| 10 | `lesson_04_10_duplication_comparison.svg` | duplication | In "Linked Duplication". After the "Linked Duplicate" card's closing `</div>` (which lists key differences from Shift plus D), before the "When to Use Linked Duplication" info card. | produced; not integrated |
| 11 | `lesson_04_11_origin_point.svg` | origin-transform | In "What Is an Object Origin?". After the "Origin Point Functions" card's closing `</div>` (lists Rotation pivot, Scale center, Position reference, Snap target, Parent connection), before the "Why Origins Matter" info card. | produced; not integrated |
| 12 | `lesson_04_12_transform_properties.png` | origin-transform | In "Transform Properties Panel". After the "Transform Properties" card's closing `</div>` (describes Location, Rotation, Scale, Dimensions fields), before the "Try It Now: Precise Positioning" card. | not captured; not integrated |
| 13 | `lesson_04_13_completed_scene.png` | manipulation-project | After the "Project Goal" info card's closing `</div>` (which lists the four scene elements), before the `<h3>Step 1: Setup and Cleanup</h3>`. The figure sits as the visual target reference before the step-by-step build begins. | not captured; not integrated |
| 14 | `lesson_04_14_keyboard_shortcuts.svg` | summary | In "Essential Manipulation Shortcuts Reference". After the "Your Manipulation Cheat Sheet" card's closing `</div>` (which holds the four reference tables: Selection, Transformations, Duplication and Cursor, Advanced), before the `<h3>Common Questions at This Stage</h3>`. Mirrors the Lesson 02 #18 and Lesson 03 #18 placement pattern: tabular cheat sheet first, visual reference card after. | produced; not integrated |

Phase order in document order: 1 (selection-basics), 2 (move-grab then rotate), 3 (scale then axis-constraints), 4 (3d-cursor), 5 (duplication then origin-transform), 6 (manipulation-project then summary). Note that the placement table groups Phase 5 with #10 and #11 above #12 because document order in the HTML places duplication before origin-transform; #5 axis-constraints sits below #7 scale in the table because the axis-constraints section sits after the scale section in the HTML.

## Caption and alt-text guidance

- **Alt text:** describe the image content factually for screen readers. PNG screenshots get full descriptive alt (what is visible: window panels, viewport contents, annotations, highlighted regions). Inline SVGs keep their own `<title>` and `<desc>`, so no additional alt is needed; the figcaption is the visible label.
- **Figcaption:** one or two sentences, conversational, points the reader at what to notice or how to use the image. Should not just repeat the image title.
- **No new em-dashes** in any caption or alt text written in this lesson. Use a comma, a colon, or a sentence break instead. Em-dashes in pre-existing source HTML are preserved verbatim through the edit anchors (Lesson 04 prose uses em-dashes liberally; that is not a problem, just do not add new ones inside new figcaptions or new alt text).
- **House style continuity:** match the caption tone Lesson 03 established. Conversational, present-tense, draws the reader's eye. Examples to model: Lesson 03 #14 navigation_workflow figcaption pointed at the dashed side-note callouts; Lesson 03 #18 navigation_shortcuts_reference figcaption positioned the SVG as a visual companion to the tabular cheat sheet.

## Example: the wrapper patterns

PNG figure (as used throughout Lessons 01, 02, and 03):

```html
<figure>
    <img src="images/lesson_04_NN_slug.png" alt="..." loading="lazy">
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

Indentation when inlined: `<figure>` and `</figure>` at column 16, `<svg>`, `</svg>`, `<img>`, `<figcaption>` at column 20, multi-line svg attribute continuations at column 25, SVG body at column 22, `<g>` children at column 24. Strip `color="#222"` from the root `<svg>` tag; if it sits on its own continuation line, drop the line entirely and reattach the closing `>` to the previous attribute line.

## SVG id-prefix registry (Lesson 04, unique per file)

Following the Lesson 03 convention of unique id prefixes per inlined SVG to avoid `<title>` and `<desc>` id collisions when several are on the same page:

| # | File | id prefix |
|---|---|---|
| 1 | `lesson_04_01_selection_states.svg` | `ss` |
| 2 | `lesson_04_02_selection_tools.svg` | `st` |
| 3 | `lesson_04_03_transform_gizmo.svg` | `tg` |
| 4 | `lesson_04_04_axis_movement.svg` | `am` |
| 5 | `lesson_04_05_global_local_axes.svg` | `gl` |
| 6 | `lesson_04_06_rotation_axes.svg` | `ra` |
| 7 | `lesson_04_07_scale_operations.svg` | `so` |
| 10 | `lesson_04_10_duplication_comparison.svg` | `dc` |
| 11 | `lesson_04_11_origin_point.svg` | `op` |
| 14 | `lesson_04_14_keyboard_shortcuts.svg` | `ks` |

Each prefix is two letters. None collide with the Lesson 03 prefixes (`op` was used in Lesson 03 for orbit_operation, but Lesson 03 SVGs never share a page with Lesson 04 SVGs, so the reuse is safe). If a future cross-lesson summary page ever inlines SVGs from multiple lessons, revisit the registry.

## SVG patterns to reuse from Lesson 03

These Lesson 04 SVGs adapt patterns proven in Lesson 03:

- **#6 rotation_axes**: adapts the Lesson 03 motion-diagram trio pattern (#3 orbit, #4 pan, #5 zoom). Three side-by-side panels showing rotation around X, Y, and Z, each with an operation badge near top, central scene visual (a rod through a cube with a rotation arc), and a small inset showing the keyboard shortcut. House style: 800px width, 3px Blender-orange top strip, `currentColor` labels, brand orange `#FF6B00` for the rotation arcs, footer tip callout.
- **#4 axis_movement**: same three-panel structure as #6 but with translation arrows instead of rotation arcs.
- **#7 scale_operations**: 2x3 grid pattern from the requirements doc. Top row: original cube, uniform-up 2x, uniform-down 0.5x. Bottom row: stretched X (2x), stretched Z (3x), compressed Y (0.5x). Grid background for reference.
- **#14 keyboard_shortcuts**: directly modeled on `lesson_02_18_keyboard_shortcuts_reference.svg` and `lesson_03_18_navigation_shortcuts_reference.svg`. Two-column reference card. Four category groupings to mirror the existing tabular cheat sheet: Selection, Transformations (G, R, S plus axis constraints), Duplication and Cursor, Advanced (Apply scale, reset transforms, sidebar).
- **#5 global_local_axes**: side-by-side comparison adapting the Lesson 03 #12 (perspective_depth) and #13 (orthographic_parallels) authored-as-a-pair pattern. Left panel: cube in default orientation with global X-Y-Z axes labeled, captioned "Global Axes: World Space". Right panel: same cube rotated 45 degrees with local axes rotating with it, captioned "Local Axes: Object Space".
- **#1 selection_states**: three identical cubes side by side with three different outline states (bright orange, light orange, no outline), each labeled. Adapts the comparison-trio composition.
- **#2 selection_tools**: three-panel composite showing box select rectangle, circle select brush, and lasso select freeform path. Same triptych layout.
- **#3 transform_gizmo**: detailed close-up of the Blender gizmo on a single cube with annotated arrows. Single-panel layout, like Lesson 02 #2 areas_editors_concept.
- **#10 duplication_comparison**: two-column comparison. Left: Shift plus D showing independent copies. Right: Alt plus D showing linked copies with chain-link visual indicators.
- **#11 origin_point**: single-panel illustration of a cube with the orange origin dot, plus three small annotation diagrams around it (rotation pivot, scale center, location reference). Adapts the Lesson 03 #1 (big_three_operations) composition: one hero visual with supporting callouts.

## Phase 1 production notes (for the next chat to pick up)

Phase 1 covers selection-basics: SVGs #1 (selection_states) and #2 (selection_tools). Both are diagrammatic and convert cleanly to the locked house style.

Production order: #1 first (simpler, just outline states), then #2 (slightly more complex with three tool shapes). Both fit the 800px viewBox with a single hero row.

#1 selection_states design notes:

- Three identical cubes laid out horizontally at y around 250.
- Each cube uses a simple isometric or front-three-quarter view (re-use the cube outline approach from Lesson 03 #7 standard_views_cube).
- Outline state 1 (leftmost): bright Blender orange `#FF6B00` stroke at full opacity. Label below: "Active (Bright Orange)".
- Outline state 2 (middle): lighter orange stroke. Use `#FF6B00` at opacity 0.5 or a hand-mixed lighter hex like `#FFB280`. Label below: "Selected, Not Active".
- Outline state 3 (rightmost): no stroke, just the cube fill. Label below: "Unselected".
- Footer tip callout: orange-on-orange-tint tip explaining that the active object is the last one you selected and is the one whose properties show in the Properties panel.

#2 selection_tools design notes:

- Three panels at y around 200. Each panel is roughly 240 wide.
- Panel 1 (Box Select): dashed rectangle drawn around two small primitive icons. Tool indicator: a stylized B key in the corner.
- Panel 2 (Circle Select): a circle brush hovering over a primitive. Tool indicator: a C key in the corner.
- Panel 3 (Lasso Select): a freeform closed curve around two primitives. Tool indicator: Ctrl + left drag glyph in the corner.
- Use `currentColor` opacity 0.4 for the dashed rectangle and the freeform curve so they read as "selection brushes" rather than solid graphics. The circle brush uses Blender orange at opacity 0.3 for the fill plus full-opacity stroke for the outline.
- Footer tip callout: short reminder that all three tools live one key press apart and pair with `Alt + A` to deselect.

End of Phase 1 production: 2 of 14 images produced. Phase 1 integration (the actual HTML insert) is a separate chat after both SVGs are written.

## Standing rules (carry forward from Lesson 03 completion handoff)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content; preserve pre-existing em-dashes verbatim. Lesson 04 source HTML uses em-dashes heavily in section h2 titles (for example "Move (Grab): Positioning Objects"... actually those use colons, but section bodies use em-dashes generously). Edit anchors will preserve them.
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md`.
- One phase per chat is the ideal cadence for integration; one image per chat is the ideal cadence for SVG production, with two-per-chat acceptable when the second is a variant of the same pattern.
- Warn Ray before context gets tight rather than letting automatic compaction happen.
- Propose spec plus design plan before generating new images; lock plan in writing first, then build. (This doc plus the prompts doc are that plan.)
- Per-chat archive discipline for intermediate captures (PNG work only; SVGs have no intermediates).
- Always `tool_search` for deferred tools rather than inheriting "tool X is unavailable" assumptions from a compaction summary.
