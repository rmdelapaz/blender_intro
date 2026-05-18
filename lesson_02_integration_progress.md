# Lesson 02 HTML Integration: Progress

Tracks the integration of the 20 Lesson 02 images into `lesson_02_the_blender_interface.html`. Image production is closed (see `lesson_02_completion_handoff.md`); this doc tracks placement into HTML.

## Status

- Phases 1, 2, 3, 4, 5, and 6 done: all 20 images placed (14 PNG, 6 inline SVG). Lesson 02 image integration is complete.
- File size after Phase 6: 148.80 KB (was 133.74 KB after Phase 5, 111.99 KB after Phase 4, 108.75 KB after Phase 3, 106.57 KB after Phase 2, 82.87 KB after Phase 1)
- Phase 6 added image #18 (`lesson_02_18_keyboard_shortcuts_reference.svg`) to the `summary` section, inlined between the "Essential Shortcuts You Learned" card and the "Common Questions at This Stage" h3. Shipped with the `color="#222"` attribute stripped from the root `<svg>` tag, per the locked dark-mode rule.
- Phase 4 cleanup verified complete on 2026-05-17. Both items (orphan `</div>` in workspaces section, and the 7 missing default-workspace cards) were already resolved when checked: whole-file div balance is 74 / 74, and the workspaces section holds all 11 expected workspace cards. **Lesson 02 is fully closed.**

## Locked approach

- **Wrapper:** plain `<figure>` with `<figcaption>` for every image. No class. `styles/main.css` already styles both elements directly (centered, lg margin, muted figcaption).
- **PNGs (14 of 20):** `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- **SVGs (6 of 20):** inlined verbatim inside the figure, re-indented to 20-space content depth. **Critical: strip the `color="#222"` attribute from the inline `<svg>` root tag.** That attribute is the `<img>`-embedded fallback (so a standalone SVG has *some* color); when inlined, it locks the SVG's `color` to `#222` and prevents `currentColor` from inheriting the page text color, breaking dark mode. The `.svg` source files in `images/` keep the attribute for standalone viewing; only the inline copy in HTML drops it. (Lesson learned in chat-97: image #19 shipped with `color="#222"` intact and was unreadable in dark mode; fixed after the fact.)
- **Tools:** `Filesystem:edit_file` only. Always `dryRun=true` first to confirm anchors match, then commit. Verify with `Filesystem:get_file_info` after every commit. NEVER use the built-in `create_file` (writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths).
- **Anchors:** Use a paragraph or h3 immediately above the insertion point plus the next element below it as the `oldText` block; insert the figure between them in `newText`. Preserve em-dashes that exist in source content (the no-em-dash rule applies to NEW text only).
- **Path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.

## Phase plan

| Phase | Sections | Images | Inline SVGs | Notes |
|---|---|---|---|---|
| 1 (done) | first-impressions + interface-philosophy | #11, #1, #17, #19 | #19 | Done |
| 2 | areas-and-editors | #2, #3, #7, #16 | #2, #7 | Two SVGs to inline |
| 3 | the-viewport | #4, #5, #10, #12 | none | All PNG, simple |
| 4 | workspaces + structural fixes | #8, #15 | none | See "Phase 4 cleanup" below |
| 5 | key-editors + customization | #9, #6, #13, #14, #20 | #6, #20 | Largest by image count |
| 6 | summary | #18 | #18 | The biggest SVG (14.74 KB) |

## Placement table (all 20 images)

| # | File | Section | Insertion point | Status |
|---|---|---|---|---|
| 11 | `lesson_02_11_default_startup_scene.png` | first-impressions | After first paragraph of "The Default Startup Screen" | done |
| 1  | `lesson_02_01_annotated_interface.png` | first-impressions | End of "The Big Picture" before mermaid | done |
| 17 | `lesson_02_17_interface_evolution.png` | interface-philosophy | After "Designed for Speed and Efficiency" | done |
| 19 | `lesson_02_19_interface_comparison.svg` | interface-philosophy | End of section before "Learning Mindset" blockquote | done (inline) |
| 2  | `lesson_02_02_areas_editors_concept.svg` | areas-and-editors | After "What Are Editors?" list, before mermaid | done (inline) |
| 3  | `lesson_02_03_editor_type_selector.png` | areas-and-editors | In "Changing Editor Types", after numbered try-it list | done |
| 7  | `lesson_02_07_split_join_areas.svg` | areas-and-editors | After "Joining Areas" subsubsection | done (inline) |
| 16 | `lesson_02_16_resize_areas_guide.png` | areas-and-editors | In "Resizing Areas" subsection | done |
| 4  | `lesson_02_04_viewport_header_breakdown.png` | the-viewport | Start of "Viewport Header", before View Controls list | done |
| 5  | `lesson_02_05_four_shading_modes.png` | the-viewport | Start of "Shading Modes Explained", before the 4 cards | done |
| 10 | `lesson_02_10_toolbar_sidebar_toggle.png` | the-viewport | In "The Toolbar and Sidebar" subsection | done |
| 12 | `lesson_02_12_grid_and_axes.png` | the-viewport | In "The Grid and Orientation" subsection | done |
| 8  | `lesson_02_08_workspace_tabs.png` | workspaces | Start of section, after intro paragraph | done |
| 15 | `lesson_02_15_custom_workspace_creation.png` | workspaces | In "Creating Custom Workspaces", after numbered steps | done |
| 9  | `lesson_02_09_outliner_anatomy.png` | key-editors | In "The Outliner", after "What You See in the Outliner" list | done |
| 6  | `lesson_02_06_properties_panel_icons.svg` | key-editors | In "Properties Panel", before the icon-by-icon cards | done (inline) |
| 13 | `lesson_02_13_preferences_window.png` | customization | In "Preferences: Your Personal Settings" | done |
| 14 | `lesson_02_14_quick_favorites_menu.png` | customization | In "Quick Favorites Menu" subsection | done |
| 20 | `lesson_02_20_mobile_tablet_note.svg` | customization | In "Interface Scaling" subsection | done (inline) |
| 18 | `lesson_02_18_keyboard_shortcuts_reference.svg` | summary | After "Essential Shortcuts You Learned" card | done (inline) |

## Phase 4 cleanup (DONE, 2026-05-17)

Both items verified resolved when this chat re-checked the file at 152,371 bytes:

1. **Orphan `</div>`**: gone. Whole-file div balance is 74 / 74 (perfectly balanced). The workspaces section specifically is 11 / 11, and the PART 8 region (START to END) is 21 / 21.
2. **Missing workspace cards**: all 11 cards now present in the "Default Workspaces" subsection, in this order: Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, Geometry Nodes, Scripting. Each follows the existing `<div class="card">` + emoji + `<h4>` + one-sentence-paragraph pattern.

Likely resolved during a previous Phase 4 image-integration chat (image #8, which shows all 11 workspace tabs, was placed at the start of this same section). No edits were needed in this chat.

**Lesson 02 image integration and Phase 4 cleanup are both complete. The file is ready to ship.**

## Caption and alt-text guidance

- **Alt text:** describe the image content factually for screen readers. PNG screenshots get full descriptive alt (what is visible in the screenshot). Inline SVGs keep their own `<title>` and `<desc>`, so no additional alt is needed; the figcaption is the visible label.
- **Figcaption:** one or two sentences, conversational, points the reader at what to notice or how to use the image. Should not just repeat the image title.

## Example: the wrapper patterns used in Phase 1

PNG figure:
```html
<figure>
    <img src="images/lesson_02_NN_slug.png" alt="..." loading="lazy">
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

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 02 HTML integration, Phase N of 6. Read lesson_02_integration_progress.md first for plan, current state, and locked approach.
Standing rules: \\wsl$ paths, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info, plain <figure> wrapper with figcaption (no class).
```
