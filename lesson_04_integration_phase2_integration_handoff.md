# Lesson 04 Integration: Phase 2 Integration Handoff

Handoff for the Phase 2 integration chat. Phase 2 production (just ended) shipped all three move-grab and rotate SVGs to `images/`. This chat covers inlining them into `lesson_04_basic_object_manipulation.html`.

## State at handoff

- Phase 2 production chat (just ended) authored all three Phase 2 SVGs and wrote them to `images/`. All three verified on disk via `Filesystem:get_file_info`:
  - `images/lesson_04_03_transform_gizmo.svg` (7164 bytes, id prefix `tg`)
  - `images/lesson_04_04_axis_movement.svg` (9533 bytes, id prefix `am`)
  - `images/lesson_04_06_rotation_axes.svg` (9351 bytes, id prefix `ra`)
- `lesson_04_integration_progress.md` now reflects 5 of 14 produced, 2 of 14 integrated. The Available list and the Missing list are both updated; the phase plan table Phase 2 row reads "3 of 3 produced, 0 of 3 integrated". A Phase 2 production status bullet sits at the top of the `## Status` list.
- A new red `#E63946` was introduced for the X-axis arrow across all three SVGs; existing palette green `#4ADE80` is used for Y and existing course-blue `#4A9EFF` for Z; Blender-orange `#FF6B00` is retained for the top strip, key-combo badges, footer tip, the rotation arcs in #6, and the subhead labels. The new red should be folded into `images/IMAGE_STYLE_GUIDE.md` at the palette's next revision. No style-guide edit this chat; carry the note forward.
- `lesson_04_basic_object_manipulation.html` is still at 125.7 KB (128694 bytes) from the end of Phase 1 integration. No HTML edits made yet for Phase 2.
- `status.md` still shows Lesson 04 at "2 of 14 produced, 2 of 14 integrated" with HTML size 125.7 KB; that row needs to flip to "5 of 14 produced, 5 of 14 integrated" at the end of this chat once all three inlines are committed.

## Phase 2 integration scope

Inline all three Phase 2 SVGs into `lesson_04_basic_object_manipulation.html`. No new SVG production; no changes to the standalone `.svg` files in `images/`. Each inline insert is a `Filesystem:edit_file` with `dryRun=true` first to confirm the anchor matches uniquely, then a second call with `dryRun=false` to commit, then `Filesystem:get_file_info` on the HTML to capture the new size.

| # | File | Section | Insertion point |
|---|---|---|---|
| 3 | `lesson_04_03_transform_gizmo.svg` | move-grab → Understanding the Move Gizmo | After the `<ul>` listing Red arrow / Green arrow / Blue arrow / White circle; before the `<p>` beginning `You can press and drag these arrows` |
| 4 | `lesson_04_04_axis_movement.svg` | move-grab → Moving Along Specific Axes | After the "Axis-Constrained Movement" card's closing `</div>`; before the "Try It Now: Constrained Movement" card |
| 6 | `lesson_04_06_rotation_axes.svg` | rotate → Understanding Rotation Axes | After the existing mermaid block branching X / Y / Z with rod descriptions; before `<h3>Precise Rotation with Numbers</h3>` |

Suggested integration order: #3 first (single-panel, simplest), then #4, then #6 (both triptychs). Document order in the HTML places #3 before #4 (both in move-grab) and #6 after (in rotate), so this ordering also keeps the placement table reading top-to-bottom while editing.

Three inline inserts in one chat is achievable given the inserts are mechanically similar to the two Phase 1 inserts. If context gets tight after the second commit, end the chat and let a continuation chat take #6.

## Placement anchor details

### #3 transform_gizmo into move-grab → Understanding the Move Gizmo

- Anchor above: the `<ul>` listing the four gizmo elements (Red arrow, Green arrow, Blue arrow, White circle).
- Anchor below: the `<p>` beginning "You can press and drag these arrows".
- Recommended `oldText` window: the closing `</ul>` of the four-item list plus the opening of the next paragraph. That gives `Filesystem:edit_file` a 2 to 3 line unique anchor with the `<figure>` block sliding cleanly between them. Read the surrounding lines first to confirm the exact whitespace and tag spelling.
- Figcaption draft (em-dash-free, present-tense, points at what to notice): "The move gizmo appears whenever an object is selected. Press and drag any colored arrow to lock motion to that one axis, or grab the white center circle to move in any direction."

### #4 axis_movement into move-grab → Moving Along Specific Axes

- Anchor above: the "Axis-Constrained Movement" card's closing `</div>` (the card lists `G` then `X`, `G` then `Y`, `G` then `Z`).
- Anchor below: the opening of the "Try It Now: Constrained Movement" card.
- The two anchor elements are consecutive `<div>`-class cards in the source, so the `oldText` window can be the closing `</div>` of the Axis-Constrained Movement card plus the opening `<div class="...">` of the Try It Now card. Confirm the exact card class names by reading the surrounding lines before drafting the edit; the closing `</div>` on its own is unlikely to be unique in a document this long.
- Figcaption draft: "Tap G then X, Y, or Z to lock the move to one direction. The ghosted starting cube in each panel shows where the object began before the constrained move."

### #6 rotation_axes into rotate → Understanding Rotation Axes

- Anchor above: the existing mermaid block that branches X, Y, Z with rod descriptions.
- Anchor below: `<h3>Precise Rotation with Numbers</h3>`.
- Recommended `oldText` window: the closing of the mermaid block (in the existing HTML, mermaid blocks live inside `<pre class="mermaid">...</pre>`, so the closing `</pre>` is the right anchor edge) plus the opening of the next `<h3>`. That gives a unique 2-line anchor.
- Figcaption draft: "Each panel shows a rod through the cube along one axis. The orange arc is the direction the cube spins when you drag the mouse, so a clockwise drag while pressing R then Z rolls the cube around the vertical Z rod."

## Locked inline pattern (must follow verbatim)

From `lesson_04_integration_progress.md` and confirmed by the two Phase 1 figures already in this HTML file:

- **Strip `color="#222"` from the inline `<svg>` root tag.** Each standalone `.svg` file in `images/` keeps that attribute for `<img>` fallback rendering; the inline copy in the HTML must drop it so `currentColor` properly inherits the page text color (and thus survives dark mode). If `color="#222"` sits on its own continuation line in the source SVG, drop the line entirely and reattach the closing `>` to the previous attribute line.
- **Preserve verbatim**: `xmlns`, `viewBox`, `role="img"`, `aria-labelledby`, `font-family`, the `<title>` element, the `<desc>` element, every `id` attribute, every `<g>` group, every visual primitive.
- **Re-indent to 20-space content depth.** `<figure>` and `</figure>` at column 16; `<svg>`, `</svg>`, `<figcaption>` at column 20; multi-line svg-attribute continuations at column 25; SVG body at column 22; `<g>` children at column 24. Match the indentation already established by the Phase 1 inlined SVGs in the same HTML file.
- **Wrap the inlined SVG in a plain `<figure>` with `<figcaption>`.** No class on the figure; `styles/main.css` already styles `<figure>` and `<figcaption>` directly.
- **Tool discipline**: `Filesystem:edit_file` with `dryRun=true` first to confirm the anchor matches uniquely, then a second call with `dryRun=false` to commit. After every commit, `Filesystem:get_file_info` on `lesson_04_basic_object_manipulation.html` to capture the new size for the end-of-chat status notes.
- **No new em-dashes** in any figcaption or status-bullet content written this chat. Use commas, colons, or sentence breaks instead. The Lesson 04 source HTML uses em-dashes liberally in section bodies and h2 titles; those are preserved verbatim through every edit anchor and are not a problem.

### Reference: the Phase 1 inlined figure pattern

The Phase 1 integration chat established the exact pattern. Before drafting the first Phase 2 edit, read the two existing Phase 1 inlined figures in `lesson_04_basic_object_manipulation.html` (search for `aria-labelledby="ss-title` and `aria-labelledby="st-title` to find them) so the new inserts match indentation and structure byte-for-byte.

## Figcaption guidance

- Conversational, present-tense, em-dash-free.
- One or two sentences. Point the reader at what to notice or how to use the visual.
- Do not restate the section heading or the figure title; the SVG's `<title>` element already covers that for screen readers.
- Match the Lesson 03 caption tone (Lesson 03 #14 navigation_workflow and Lesson 03 #18 navigation_shortcuts_reference are the canonical voice references). The Phase 1 integration in this same lesson already extended that voice; new captions should sit naturally next to the existing ones.
- The drafts above (one per figure) are starting points. Tighten the wording during the chat if a better phrasing surfaces; the goal is clarity and "what to notice", not preserving the draft verbatim.

## Tool checklist for the next chat

Deferred. Call `tool_search` before invoking:

- `tool_search "filesystem read"` → loads `Filesystem:read_text_file` (and optionally `Filesystem:read_multiple_files`) for reading the HTML and the three Phase 2 SVGs in parallel.
- `tool_search "filesystem edit"` → loads `Filesystem:edit_file` for inserting the figures.
- `tool_search "filesystem info"` → loads `Filesystem:get_file_info` for verifying HTML size after each commit.

No new files this chat (no `Filesystem:write_file` needed for the inline work itself; only the end-of-chat progress doc bullet and status.md updates use `Filesystem:edit_file`). NEVER use the built-in `create_file` (writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths).

## Standing rules (unchanged)

- `\\wsl$\Ubuntu\` paths only. Never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content (figcaptions, alt text, status bullets, the next handoff doc if one is written). Use commas, colons, or sentence breaks instead. Preserve pre-existing em-dashes in the source HTML verbatim through every edit anchor.
- Unique id prefix per SVG (already locked from Phase 2 production): `tg` for #3, `am` for #4, `ra` for #6. These travel verbatim into the inlined HTML; no rename or reprefix on the way in.
- New red `#E63946` lives in all three Phase 2 SVGs and should be folded into `images/IMAGE_STYLE_GUIDE.md` at the palette's next revision. No action on the style guide this chat; just carry the note forward into the Phase 3 production handoff so #5 global_local_axes and #7 scale_operations stay consistent.
- `Filesystem:edit_file` with `dryRun=true` first for every existing-file modification, then commit. `Filesystem:get_file_info` to verify after each commit.
- One phase per chat is the ideal cadence. Three inline inserts in this chat is achievable but warn before context gets tight rather than letting automatic compaction happen.

## End-of-chat obligations for Phase 2 integration

1. Confirm `lesson_04_basic_object_manipulation.html` has all three Phase 2 figures inlined; capture the final HTML size via `Filesystem:get_file_info`.
2. Update `lesson_04_integration_progress.md`:
   - Add a Phase 2 integration status bullet at the top of the `## Status` list summarizing what shipped, the HTML size deltas per insert and overall, and any source-prose em-dashes preserved through the anchors. Match the verbosity of the Phase 1 integration bullet.
   - Flip the placement table rows for #3, #4, and #6 from "produced; not integrated" to "integrated".
   - Flip the phase plan table Phase 2 row from "3 of 3 produced, 0 of 3 integrated" to "3 of 3 produced, 3 of 3 integrated".
3. Update `status.md`:
   - Image Integration Status row for Lesson 04: bump from "2 of 14 produced, 2 of 14 integrated" to "5 of 14 produced, 5 of 14 integrated". Mirror the Phase 1 integration update style.
   - Module 1 file size table for Lesson 04: update the HTML file size to the new post-Phase-2 value.
   - Site-Wide Feature Status note: bump the running integrated-figure count by 3.
4. Decide whether to write a Phase 3 production handoff this chat or defer to a fresh chat. Phase 3 covers SVGs #7 scale_operations and #5 global_local_axes (scale section then axis-constraints section). One or two SVGs per chat is the locked production cadence, so Phase 3 production fits a single chat; if context is tight after the three integration inserts, defer the Phase 3 production handoff and end the chat. The Phase 3 production handoff should explicitly carry forward the new red `#E63946` X-axis color (canonical for X across the lesson now) so #5 global_local_axes and the axis arrows in #7 scale_operations stay consistent.

## Verbatim kickoff prompt for the Phase 2 integration chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 04 image integration, Phase 2 integration. Inline three already-produced SVGs into lesson_04_basic_object_manipulation.html: #3 transform_gizmo, #4 axis_movement, #6 rotation_axes. No SVG production this chat; all three Phase 2 SVGs already exist in images/.

First reads, in this order:
1. lesson_04_integration_phase2_integration_handoff.md (this file) - has placement anchors and figcaption drafts for all three inlines.
2. lesson_04_integration_progress.md - confirms current state, the locked inline pattern, and the placement table.
3. lesson_04_basic_object_manipulation.html - the integration target. Read the two existing Phase 1 inlined figures (search aria-labelledby="ss-title" and "st-title") to anchor on the exact indentation pattern.
4. images/lesson_04_03_transform_gizmo.svg, images/lesson_04_04_axis_movement.svg, images/lesson_04_06_rotation_axes.svg - the three SVGs to inline.

Tool discovery (LOCKED): tool_search before invoking. Filesystem:read_text_file (or read_multiple_files) for HTML and SVGs. Filesystem:edit_file with dryRun=true first then a second call with dryRun=false to commit. Filesystem:get_file_info after every commit. NEVER use the built-in create_file.

Standing rules: \\wsl$ paths only. No new em-dashes in figcaptions or status bullets. Strip color="#222" from each inlined <svg> root tag (the standalone .svg in images/ retains it for <img> fallback). Re-indent inlined SVGs to 20-space content depth matching the Phase 1 inserts. Preserve role, aria-labelledby, <title>, <desc>, and every id verbatim. Brand palette locked; new X-axis red #E63946 is canonical going forward and should be folded into images/IMAGE_STYLE_GUIDE.md at the palette's next revision (not this chat).

Cadence: one inline per dry-run-then-commit cycle. After each commit, get_file_info on the HTML to track the size delta.

Deliverables this chat:
1. Three new <figure> blocks inlined into lesson_04_basic_object_manipulation.html.
2. lesson_04_integration_progress.md: new Phase 2 integration status bullet at top of ## Status, placement table rows for #3 / #4 / #6 flipped to "integrated", phase plan table Phase 2 row flipped to "3 of 3 produced, 3 of 3 integrated".
3. status.md: Lesson 04 row updated to "5 of 14 produced, 5 of 14 integrated"; Module 1 file size table updated to the new HTML size; site-wide integrated-figure totals bumped by 3.
4. Optional: Phase 3 production handoff written if context allows. Phase 3 covers SVGs #7 scale_operations and #5 global_local_axes; carry forward the new red #E63946 X-axis color so the Phase 3 SVGs stay consistent.

Warn me when context starts getting tight rather than letting automatic compaction happen.
```
