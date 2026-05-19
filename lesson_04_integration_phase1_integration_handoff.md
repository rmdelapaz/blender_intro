# Lesson 04 Integration: Phase 1 Integration Handoff

Handoff for the chat that will inline the two Phase 1 SVGs into `lesson_04_basic_object_manipulation.html`. Phase 1 production is complete; both SVGs are on disk. This chat only needs to do the HTML edits, then either stop or roll into Phase 2 production if context allows.

## State at handoff

- Phase 1 production chat (just ended) wrote `images/lesson_04_01_selection_states.svg` (5578 bytes, id prefix `ss`) and `images/lesson_04_02_selection_tools.svg` (9540 bytes, id prefix `st`). Both verified on disk via `Filesystem:get_file_info`.
- Both SVGs follow the locked house style: 800x560 viewBox, 3px Blender-orange top strip, `currentColor` labels, footer tip callout, full accessibility tags. Each retains `color="#222"` on its root `<svg>` tag for `<img>` fallback (that attribute must be stripped when the SVG is inlined into HTML).
- Lesson 04 HTML unchanged at 106.0 KB. No HTML edits made.
- `lesson_04_integration_progress.md` updated: new Phase 1 production status bullet added to top of `## Status` list, inventory section reflects 2 of 14 produced, phase plan table Phase 1 row now reads "2 of 2 produced, 0 of 2 integrated".
- `status.md` updated: Image Integration Status row split so that "04 Basic Object Manipulation" reads "2 of 14 produced, 0 of 14 integrated, in progress" with a Phase 1 summary note; the residual row "05 to 51" stays pending. Site-Wide Feature Status note reflects Lesson 04 in progress.

## Phase 1 integration scope

Two inserts, both in the selection-basics section:

| # | File | Section | Status target |
|---|---|---|---|
| 1 | `images/lesson_04_01_selection_states.svg` | selection-basics → Understanding Selection States | integrated |
| 2 | `images/lesson_04_02_selection_tools.svg` | selection-basics → Advanced Selection Techniques | integrated |

Order: #1 first, then #2 (document order in the HTML).

## Tool checklist for the next chat

Deferred. Call `tool_search` before invoking:

- `tool_search "filesystem read"` → loads `Filesystem:read_text_file` to read the lesson 04 HTML and the two SVG files (the SVG content must be inlined verbatim minus the `color="#222"` attribute).
- `tool_search "filesystem edit"` → loads `Filesystem:edit_file` for the two HTML inserts. Always `dryRun=true` first, then commit.
- `tool_search "filesystem info"` → loads `Filesystem:get_file_info` to confirm the HTML size grows after each commit.

No `Filesystem:write_file` calls are needed unless writing the next phase handoff at end of chat.

## Anchors (both confirmed unique during planning)

### Anchor for #1 in "Understanding Selection States"

`oldText` (3 lines, exact match required):

```
                    <li><strong>Dark outline:</strong> Hidden or disabled in viewport</li>
                </ul>

                <p>The "active" object is the last one you selected—it's the one whose properties show in the Properties panel. When multiple objects are selected, the active object is slightly brighter orange.</p>
```

Insertion goes between the `</ul>` and the `<p>`. Note that the source `<p>` paragraph contains an em-dash ("you selected—it's"), which is preserved verbatim in the anchor; the new figcaption written for #1 must NOT introduce new em-dashes.

`newText` shape (figure inserted between the `</ul>` and the `<p>`):

```
                    <li><strong>Dark outline:</strong> Hidden or disabled in viewport</li>
                </ul>

                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560"
                         role="img" aria-labelledby="ss-title ss-desc"
                         font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif">
                      <title id="ss-title">Object Selection States in Blender</title>
                      <desc id="ss-desc">...</desc>
                      ... full SVG body, re-indented per progress doc ...
                    </svg>
                    <figcaption>Three states of the same cube. The brightest orange outline marks the active object, the dimmer orange marks other selected objects, and no outline at all means unselected.</figcaption>
                </figure>

                <p>The "active" object is the last one you selected—it's the one whose properties show in the Properties panel. When multiple objects are selected, the active object is slightly brighter orange.</p>
```

### Anchor for #2 in "Advanced Selection Techniques"

`oldText` (3 lines, exact match required):

```
                    <p><strong>Select Random:</strong> Select → Select Random (in header menu) for random object selection</p>
                </div>

                <div class="mermaid">
```

Insertion goes between the closing `</div>` of the "More Selection Tools" card and the opening `<div class="mermaid">` of the selection methods tree. The figure summarizes box, circle, and lasso visually as the trio is wrapped up, just before the mermaid that maps the selection methods conceptually.

`newText` shape:

```
                    <p><strong>Select Random:</strong> Select → Select Random (in header menu) for random object selection</p>
                </div>

                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560"
                         role="img" aria-labelledby="st-title st-desc"
                         font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif">
                      <title id="st-title">Selection Tools in Blender</title>
                      <desc id="st-desc">...</desc>
                      ... full SVG body, re-indented per progress doc ...
                    </svg>
                    <figcaption>Box, circle, and lasso compared side by side. The B and C keys jump straight to box and circle select; lasso lives on Ctrl plus drag, and all three pair with Alt + A to deselect.</figcaption>
                </figure>

                <div class="mermaid">
```

The figcaption above is a candidate; the integration chat may refine it as long as it stays em-dash-free.

## Suggested figcaptions (em-dash-free)

- **#1 selection_states:** "Three states of the same cube. The brightest orange outline marks the active object, the dimmer orange marks other selected objects, and no outline at all means unselected."
- **#2 selection_tools:** "Box, circle, and lasso compared side by side. The B and C keys jump straight to box and circle select; lasso lives on Ctrl plus drag, and all three pair with Alt + A to deselect."

If the integration chat refines these, the rule is: no new em-dashes, conversational present tense, points the reader at what to notice (not a repeat of the title).

## Indentation for inline SVG (from progress doc, locked)

- `<figure>` and `</figure>` at column 16.
- `<svg>`, `</svg>`, `<figcaption>` at column 20.
- Multi-line `<svg>` attribute continuations at column 25.
- SVG body top-level elements (`<rect>`, `<text>`, `<line>`, `<g>`, `<polygon>`, `<path>`, `<circle>`, `<ellipse>`, `<polyline>`) at column 22.
- Children inside `<g>` at column 24.
- **Critical:** strip `color="#222"` from the root `<svg>` tag when inlining. The standalone `.svg` file in `images/` keeps the attribute for `<img>` fallback; only the inline copy in HTML drops it. If the attribute sits on its own continuation line in the standalone file, drop that line and reattach the closing `>` to the previous attribute line.

In the two SVG files just produced, `color="#222"` sits at the end of the third attribute line (`     color="#222">`). When inlining, the third line should become `     font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif">` with the closing `>` reattached and the `color="#222"` removed.

## Locked rules (carry forward from Lesson 03 completion handoff)

- `\\wsl$\Ubuntu\` paths only. Never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content (figcaptions, alt text, new markdown notes). The em-dash inside the source `<p>` paragraph for #1 ("you selected—it's") is preserved verbatim through the anchor; that is not a new em-dash, it is part of the existing prose.
- `Filesystem:edit_file` with `dryRun=true` first, then commit, then verify with `Filesystem:get_file_info`.
- After both inserts, the HTML should grow by roughly 6 KB to 11 KB (the two SVGs total 15.1 KB on disk, but inlining drops the XML declaration overhead, the `color="#222"` attribute, and adds figcaptions; net growth is similar to Lesson 03's two-SVG phases).
- Warn before context gets tight rather than letting automatic compaction happen.

## End-of-chat obligations for Phase 1 integration

1. Confirm both HTML inserts hit via `Filesystem:get_file_info` (HTML size should grow from 106.0 KB to approximately 112 to 117 KB).
2. Update `lesson_04_integration_progress.md`:
   - New status bullet at top of `## Status` list summarizing what got integrated, the new HTML size, and any structural notes.
   - Placement table rows for #1 and #2 flip from "produced; not integrated" to "integrated".
   - Phase plan table Phase 1 row updates to "2 of 2 produced, 2 of 2 integrated".
3. Update `status.md`:
   - The "04 Basic Object Manipulation" row updates from "0 of 14 integrated" to "2 of 14 integrated".
   - The Site-Wide Feature Status note for "Image Production and Integration" updates the Lesson 04 sub-fragment to "in progress (2 of 14 produced, 2 of 14 integrated)".
4. Write `lesson_04_integration_phase2_handoff.md` covering Phase 2 production (SVGs #3 transform_gizmo, #4 axis_movement, #6 rotation_axes, all for the move-grab and rotate sections). Include design notes adapted from the progress doc's Phase plan plus SVG patterns sections, id-prefix assignments (`tg`, `am`, `ra`), and the verbatim kickoff prompt the Phase 2 production chat should run.

## Optional: combined Phase 1 integration + Phase 2 production start

If the Phase 1 integration chat has context budget after committing both inserts and updating the docs, it can optionally start Phase 2 production by authoring one of the three Phase 2 SVGs (recommended: start with #4 `axis_movement` since it adapts the Lesson 03 motion-diagram trio pattern most directly). Two of three Phase 2 SVGs in one chat is the ceiling per the locked one-or-two-SVGs-per-chat rule.

If Phase 2 production starts in the same chat:

- Read the IMAGE_STYLE_GUIDE plus one reference Lesson 03 motion-diagram SVG (e.g., `lesson_03_03_orbit_operation.svg` for the three-panel composition).
- Author and write the SVG with `Filesystem:write_file`. Verify with `Filesystem:get_file_info`.
- Update the progress doc inventory plus phase plan table for Phase 2.
- Write `lesson_04_integration_phase2_handoff.md` covering only the remaining Phase 2 SVGs and Phase 2 integration.

If not, end after the two HTML inserts and the progress/status updates. The dedicated Phase 2 production chat picks up cleanly from the handoff.

## Verbatim kickoff prompt for the Phase 1 integration chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 04 image integration, Phase 1 integration. Inline the two Phase 1 SVGs (#1 selection_states and #2 selection_tools) into lesson_04_basic_object_manipulation.html. The SVGs are already on disk at images/lesson_04_01_selection_states.svg and images/lesson_04_02_selection_tools.svg.

First reads, in this order:
1. lesson_04_integration_phase1_integration_handoff.md (this file) - has both anchors, suggested figcaptions, and the indentation rule.
2. lesson_04_integration_progress.md - confirms current state, the locked inline pattern (20-space depth, strip color="#222"), and the placement table.
3. images/lesson_04_01_selection_states.svg - the SVG to inline first.
4. images/lesson_04_02_selection_tools.svg - the SVG to inline second.

Tool discovery (LOCKED): tool_search before invoking. Filesystem:read_text_file for the SVGs and HTML. Filesystem:edit_file with dryRun=true first then commit for the HTML inserts. Filesystem:get_file_info to verify after each commit. Do NOT use Claude's built-in create_file (writes to Claude's container, not \\wsl$\ paths).

Standing rules: \\wsl$ paths only, no new em-dashes (preserve the existing em-dash in the source paragraph "you selected—it's"), strip color="#222" from each inlined SVG root tag, re-indent each SVG to 20-space content depth per the locked pattern.

Deliverables this chat:
1. Two Filesystem:edit_file commits inlining #1 and #2 with the anchors spelled out in the phase1_integration handoff.
2. lesson_04_integration_progress.md: placement table rows for #1 and #2 flipped to "integrated", phase plan table Phase 1 row updated to "2 of 2 produced, 2 of 2 integrated", and a new status bullet at top of ## Status.
3. status.md: 04 row updated to "2 of 14 integrated", Site-Wide note updated to match.
4. Write lesson_04_integration_phase2_handoff.md covering Phase 2 production (SVGs #3, #4, #6 for move-grab and rotate sections).

Warn me when context starts getting tight rather than letting automatic compaction happen.
```
