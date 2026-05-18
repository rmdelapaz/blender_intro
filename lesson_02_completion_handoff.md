# Lesson 02 Image Production: COMPLETE

All 20 images delivered. Lesson 02 image work is closed.

## What was produced

Core 16 images (#1 through #16) per the original `lesson_02_image_requirements.md`, plus 4 enhancement images:

- #17 Interface Evolution (PNG, 453 KB, hybrid live-capture + synthesis composite)
- #18 Keyboard Shortcuts Reference (SVG, 15 KB, two-column reference card)
- #19 Interface Comparison vs Maya / 3ds Max / Cinema 4D (SVG, 7.6 KB, feature grid)
- #20 Mobile / Tablet Note (SVG, 5.8 KB, three-device informational)

Files at `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`.

## Next

Ray's call. Likely candidates:

- Lesson 03 image production (Materials and Texturing)
- HTML integration of Lesson 02 images into `lesson_02_the_blender_interface.html`
- A different module or project entirely

If continuing image production for another lesson, start that chat by reading the style guide first, then the new lesson's `lesson_NN_image_requirements.md`.

## Tool selection rules (LOCKED, learned in chat-96)

Tools are deferred. Call `tool_search` before invoking.

**For SVG writes:** Use `Filesystem:write_file` (load via `tool_search` for "filesystem write"). Do NOT use Claude's built-in `create_file`. The built-in writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths. It reports "File created successfully" but the file never appears on disk. Always verify with `Filesystem:get_file_info` after every write.

**For PNG capture work:** Same tool_search pattern (search "filesystem" and "blender"). Lowercase `blender:execute_blender_code` only (uppercase hangs). Full PNG pipeline recipes are in `lesson_02_next_chat_handoff.md` (still useful as reference; don't delete that file yet).

## Standing rules (carry forward)

- `\\wsl$\Ubuntu\` paths only, never `\\wsl.localhost\`
- No em-dashes anywhere
- Style guide canonical: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md`
- One image per chat ideal
- Warn Ray before context gets tight
- Propose spec + design plan before generating; lock plan in writing first, then build
- Per-chat archive discipline for intermediate captures (PNG work only; SVGs have no intermediates)

## SVG patterns proven in Lesson 02 (reuse directly)

**Header (always):**
- 3px top accent at y=0, fill `#FF6B00`
- Title 24pt 700 at y=56
- Subtitle 14pt opacity 0.65 at y=84
- Divider line at y=108, stroke currentColor opacity 0.15
- font-family on root: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- Fallback color on root: `color="#222"`
- Accessibility: `role="img"`, `aria-labelledby` pointing to `<title>` and `<desc>`, unique id prefix per file

**Footer tip callout:**
- rect width=720 rx=6, fill `#FF6B00` 0.10, stroke `#FF6B00` 0.4
- height=34 for 1 line, height=44 for 2 lines
- "Tip:" tspan in 700 weight `#FF6B00`, body in currentColor

**Comparison grid (#19 pattern):**
- 5-column layout (feature label + 4 data cols) at viewBox width 800
- Column header underlines in each column's accent color, 2px
- Subtle full-column tint for focus column (`#FF6B00` 0.04 fill-opacity)
- Row dividers currentColor 0.12, column dividers currentColor 0.15
- Cell text uses `<tspan dy="14">` for second lines when wrapping

**Status pill (#20 pattern):**
- 100x24 rounded pill (rx=12)
- Color at fill-opacity 0.15, stroke-opacity 0.5
- Uppercase label inside: 11pt 700 letter-spacing 1, fill = pill color

**Keycap (#18 pattern):**
- rect rx=4, fill currentColor 0.08, stroke currentColor 0.3
- 12pt 600 centered text in currentColor
- Multi-key combos: "+" separator at 13pt opacity 0.5 centered in 16px gap

**Brand palette (use exactly these hex; do not invent new):**
- Blender brand: `#FF6B00`
- Course / structure: `#4A9EFF` (darker variant `#3a7fd1`)
- Practice / process: `#B47EE8`
- Reference / inspire: `#FF7EA8`
- Resources / external: `#4ADE80`
- Portfolio / outcome: `#F5C242`

## Previous handoff

`lesson_02_next_chat_handoff.md` (verbose, mid-Wave-4) contains the full PNG pipeline: 5 recipes, Pillow path injection, font loader fallbacks, Blender API research, style constants for the dark-theme synthesis. Keep that file around as the PNG reference until Lesson 03 PNG work begins and the recipes get re-validated.
