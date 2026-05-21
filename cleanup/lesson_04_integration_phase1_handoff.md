# Lesson 04 Integration: Phase 1 Handoff

Handoff for the Phase 1 production chat. Planning is complete; this doc gives the next chat everything it needs to author Phase 1's two SVGs (#1 `selection_states` and #2 `selection_tools`).

## State at handoff

- Planning chat (this chat just ended) wrote `lesson_04_integration_progress.md` (22353 bytes) and `lesson_04_image_prompts.md` (20678 bytes) at project root, plus updated `status.md`'s Supporting Files list with the two new docs.
- Lesson 04 image inventory: **0 of 14 produced.** All 14 images are missing from `images/`.
- Lesson 04 HTML unchanged at 106.0 KB. No HTML edits made this chat.
- Phase plan, placement table, caption guidance, SVG id-prefix registry, and design notes all live in `lesson_04_integration_progress.md`.
- AI-fallback prompts and Blender capture instructions for the 4 PNGs (#8, #9, #12, #13) all live in `lesson_04_image_prompts.md`.

## Phase 1 scope

Two SVGs, both for the selection-basics section:

| # | File | Section | Pattern source |
|---|---|---|---|
| 1 | `lesson_04_01_selection_states.svg` | selection-basics → Understanding Selection States | Trio comparison (three cubes with different outline states) |
| 2 | `lesson_04_02_selection_tools.svg` | selection-basics → Advanced Selection Techniques | Three-panel triptych (box, circle, lasso) |

Production order: #1 first (simpler, just outline states), then #2 (three tool brush shapes). Both fit 800px viewBox.

## Design notes copied from progress doc

### #1 `lesson_04_01_selection_states.svg`

- viewBox `0 0 800 560` per house style.
- Three identical cubes laid out horizontally at y around 250.
- Each cube uses a simple isometric or front-three-quarter view (re-use the cube outline approach from Lesson 03 #7 `standard_views_cube`).
- Outline state 1 (leftmost): bright Blender orange `#FF6B00` stroke at full opacity. Label below: "Active (Bright Orange)".
- Outline state 2 (middle): lighter orange stroke. Use `#FF6B00` at opacity 0.5, or a hand-mixed lighter hex like `#FFB280`. Label below: "Selected, Not Active".
- Outline state 3 (rightmost): no stroke, just the cube fill at low opacity. Label below: "Unselected".
- Footer tip callout (orange-on-orange-tint per house style): tip explaining that the active object is the last one you selected and is the one whose properties show in the Properties panel.
- ID prefix: `ss` (`<title id="ss-title">`, `<desc id="ss-desc">`).
- Header text: "OBJECT SELECTION STATES" (24pt, weight 700). Subtitle: "How Blender shows what's selected" (14pt, opacity 0.65).

### #2 `lesson_04_02_selection_tools.svg`

- viewBox `0 0 800 560` per house style.
- Three panels at y around 200. Each panel is roughly 240 wide.
- Panel 1 (Box Select, leftmost): dashed rectangle drawn around two small primitive icons. Tool indicator: a stylized B key in the corner.
- Panel 2 (Circle Select, middle): a circle brush hovering over a primitive. Tool indicator: a C key in the corner.
- Panel 3 (Lasso Select, rightmost): a freeform closed curve around two primitives. Tool indicator: Ctrl + left-drag glyph in the corner.
- Use `currentColor` opacity 0.4 for the dashed rectangle and the freeform curve so they read as "selection brushes" rather than solid graphics.
- The circle brush uses Blender orange at fill-opacity 0.3 plus full-opacity stroke for the outline.
- Footer tip callout: short reminder that all three tools live one key press apart and pair with `Alt + A` to deselect.
- ID prefix: `st` (`<title id="st-title">`, `<desc id="st-desc">`).
- Header text: "SELECTION TOOLS" (24pt, weight 700). Subtitle: "Three ways to pick objects in the viewport" (14pt, opacity 0.65).

## Locked SVG house style (must follow)

From `images/IMAGE_STYLE_GUIDE.md`:

- Standalone .svg file in `images/` keeps `color="#222"` attribute on root `<svg>` for `<img>` fallback rendering. Only the inline copy in HTML drops it.
- Font stack: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`. Set once on `<svg>` so it cascades.
- 3px Blender-orange `#FF6B00` accent strip along the very top of the canvas (`<rect x="0" y="0" width="800" height="3" fill="#FF6B00"/>`).
- Title at (40, 56), 24pt, weight 700, `fill="currentColor"`.
- Subtitle at (40, 84), 14pt, `fill="currentColor"`, opacity 0.65.
- Divider line from (40, 108) to (760, 108), `stroke="currentColor"`, opacity 0.15.
- Body content starts at y around 140.
- Footer tip callout at y=506, height 34, `fill="#FF6B00"` at fill-opacity 0.10, stroke `#FF6B00` at stroke-opacity 0.4. Tip label "Tip:" in `#FF6B00` weight 700; tip body in `currentColor` weight 400, both 13pt.
- Accessibility: `role="img"`, `aria-labelledby="{id}-title {id}-desc"`, with matching `<title>` and `<desc>` inside the SVG.
- No animations, no scripts, no external dependencies.

## Tool checklist for the next chat

Deferred. Call `tool_search` before invoking:

- `tool_search "filesystem write"` → loads `Filesystem:write_file` for new SVG files in `images/`.
- `tool_search "filesystem read"` → loads `Filesystem:read_text_file` if a reference SVG needs to be inspected first.
- `tool_search "filesystem info"` → loads `Filesystem:get_file_info` to confirm each new SVG hits disk.

For SVG production, no `Filesystem:edit_file` calls are needed (no existing-file modifications). Integration into the HTML is a separate chat.

For reference style inspection, the next chat may want to read one of these proven SVGs verbatim before authoring:

- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_07_standard_views_cube.svg` (for cube isometric outline reference; informs #1).
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_03_orbit_operation.svg` (for triptych-panel composition reference; informs #2).
- `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md` (canonical style guide).

## Standing rules (unchanged)

- `\\wsl$\Ubuntu\` paths only. Never `\\wsl.localhost\`.
- No new em-dashes anywhere in new content (SVG `<title>`, `<desc>`, label text, tip callout body). Use a comma, a colon, or a sentence break instead.
- Unique id prefix per SVG to avoid `<title>` and `<desc>` collisions when inlined together (`ss` for #1, `st` for #2).
- Brand palette locked: Blender orange `#FF6B00`, course blue `#4A9EFF`, practice purple `#B47EE8`, reference pink `#FF7EA8`, resources green `#4ADE80`, portfolio yellow `#F5C242`. Do not invent new hex.
- Verify every new SVG with `Filesystem:get_file_info` after `Filesystem:write_file`.
- Warn before context gets tight rather than letting automatic compaction happen.

## End-of-chat obligations for Phase 1 production

1. Confirm both new SVGs exist on disk via `Filesystem:get_file_info`. Record their sizes.
2. Add a Phase 1 production status bullet at the top of `lesson_04_integration_progress.md`'s `## Status` list summarizing what shipped, the ID prefixes used, and the file sizes.
3. Flip the relevant rows in the placement table from "produced; not integrated" to keep "produced; not integrated" (no change needed; status was already pre-flipped to that target state in the planning doc because production was assumed near-term).
4. Update the phase plan table Phase 1 row from "0 of 2 produced, 0 of 2 integrated" to "2 of 2 produced, 0 of 2 integrated".
5. Update `status.md` Image Integration Status row for "04 to 51" if any Phase 1 SVGs were produced; the row can move from "not started" to "in progress" once at least one Lesson 04 asset hits `images/`.
6. Write `lesson_04_integration_phase2_handoff.md` (or `lesson_04_integration_phase1_integration_handoff.md` if the Phase 1 production chat decides to also run the Phase 1 HTML integration in the same chat, which is feasible with only 2 figures but may be tight on context).

## Verbatim kickoff prompt for the Phase 1 production chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 04 image integration, Phase 1 production. Author the two SVGs for the selection-basics section: #1 lesson_04_01_selection_states.svg and #2 lesson_04_02_selection_tools.svg. Save to images/. No HTML edits this chat (integration is a separate phase chat).

First reads, in this order:
1. lesson_04_integration_phase1_handoff.md (this file) - has the design notes and id-prefix assignments for both SVGs.
2. lesson_04_integration_progress.md - confirms current state and the locked approach.
3. images/IMAGE_STYLE_GUIDE.md - SVG house style.
4. images/lesson_03_07_standard_views_cube.svg - reference for cube outline composition (informs #1).
5. images/lesson_03_03_orbit_operation.svg - reference for triptych-panel composition (informs #2).

Tool discovery (LOCKED): tool_search before invoking. Filesystem:write_file for new SVGs in images/. Filesystem:get_file_info to verify after write. Filesystem:read_text_file for reference SVGs. Do NOT use Claude's built-in create_file (writes to Claude's container, not \\wsl$\ paths).

Standing rules: \\wsl$ paths only, no new em-dashes, unique id prefixes (ss for #1, st for #2), house style locked (3px orange top strip, currentColor labels, footer tip callout, full accessibility tags). Brand palette locked. Keep color="#222" attribute on each standalone .svg file's root tag (it gets stripped only when inlining into HTML in a future integration chat).

Deliverables this chat:
1. images/lesson_04_01_selection_states.svg (trio comparison of three cubes with outline states).
2. images/lesson_04_02_selection_tools.svg (three-panel triptych showing box, circle, lasso).
3. Update lesson_04_integration_progress.md: new Phase 1 production status bullet at top of ## Status list. Phase plan table row Phase 1 updated to "2 of 2 produced, 0 of 2 integrated".
4. status.md Image Integration Status row for "04 to 51" can flip from "not started" to "in progress" since assets are now on disk.
5. Write lesson_04_integration_phase2_handoff.md (or lesson_04_integration_phase1_integration_handoff.md if planning to run Phase 1 integration in the same chat).

Warn me when context starts getting tight rather than letting automatic compaction happen.
```

## Optional: combined Phase 1 production + integration

If the Phase 1 production chat has context budget after writing both SVGs (each is roughly 8 to 12 KB of XML), it can optionally proceed to the HTML integration in the same chat. Integration is two inserts: one for #1 in "Understanding Selection States", one for #2 in "Advanced Selection Techniques". Both anchors are spelled out in the placement table of `lesson_04_integration_progress.md`.

If integration runs in the same chat:

- Use `Filesystem:edit_file` with `dryRun=true` first, then commit, then verify with `Filesystem:get_file_info`.
- Strip `color="#222"` from each inlined `<svg>` root tag.
- Re-indent each inlined SVG to 20-space content depth per the locked pattern.
- Update the placement table rows for #1 and #2 to "integrated".
- Update the phase plan table Phase 1 row to "2 of 2 produced, 2 of 2 integrated".
- Update status.md Image Integration Status row to reflect "2 of 14 integrated".
- Write `lesson_04_integration_phase2_handoff.md` at end.

If not, end after production and let the dedicated integration chat handle the inserts.

## Quick reference: anchors for Phase 1 integration (when it happens)

For #1 in "Understanding Selection States":

```
oldText anchor (3 lines):
                    <li><strong>Dark outline:</strong> Hidden or disabled in viewport</li>
                </ul>

                <p>The "active" object is the last one you selected—it's the one whose properties show in the Properties panel. When multiple objects are selected, the active object is slightly brighter orange.</p>
```

Insertion goes between the `</ul>` and the `<p>`. Note that the source paragraph contains an em-dash ("it's the one") which is preserved verbatim in the anchor; the new figcaption written for #1 must NOT introduce new em-dashes.

For #2 in "Advanced Selection Techniques":

```
oldText anchor (3 lines):
                    <p><strong>Select Random:</strong> Select → Select Random (in header menu) for random object selection</p>
                </div>

                <div class="mermaid">
```

Insertion goes between the closing `</div>` of the "More Selection Tools" card and the opening `<div class="mermaid">` of the selection methods tree. This places the figure as a visual summary just before the mermaid that maps the selection methods conceptually.

Both anchors are unique within the file (verified during planning by reading the full HTML).
