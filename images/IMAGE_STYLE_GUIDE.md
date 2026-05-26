# Blender Course — Image Style Guide

**Purpose:** Reference for generating SVG diagrams and infographic assets for the Blender Mastery Course. Future chats should read this file first before producing new lesson SVGs so style stays consistent across all images.

**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
**Image output:** `images/` subfolder
**Status:** v5, locked. Pilot is `lesson_01_08_folder_structure.svg`. v5 adds the Capture workflow section (add-on dependencies, BlenderMCP capture paths, Face Orientation overlay capture recipe, manual capture cadence, modal capture criterion, visual readability in SOLID shading, multi-panel composite QA), the Blender 5.1.1 op-name and behavior discoveries section, and the cross-sub-chat composite pattern bullet in Workflow conventions. v4 (carried forward) adds the overlay badge colorway split (positive green, warning red), em-dash discipline, the inline-stacked PNG annotation overlay pattern, the 800x680 viewBox variant, HTML integration depth rules for figures inside cards, and the SVG inlining checklist (color attribute strip, content re-indent, multi-line attribute collapse, comment preservation policy).

---

## How to use this file

When generating a new lesson SVG:

1. Read this guide first.
2. Reuse the component snippets below verbatim where applicable.
3. Use the canonical color palette — do not invent new hex values for elements covered here.
4. Keep the canvas dimensions, font stack, and accessibility patterns consistent.
5. If a new pattern is needed (e.g., bar chart, side-by-side comparison, annotated screenshot), add it to this guide after Ray approves it.

In a fresh chat, ask Ray to point you at this file by path, or read it directly from `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\IMAGE_STYLE_GUIDE.md`.

---

## Theming model — read this first

These SVGs are **transparent and page-inheriting**, not self-contained dark panels. They use `currentColor` for all text, connector, and divider colors so that:

- On a light-mode HTML page, text appears dark.
- On a dark-mode HTML page, text appears light.

This works automatically when the SVG is **embedded inline** in the HTML (preferred). For `<img>`-embedded SVGs, the SVG falls back to its own `color="#222"` attribute, which means dark text — fine on light pages but unreadable on dark pages.

**Recommendation:** Embed SVGs inline in lesson HTML where possible. If `<img>` embedding is required and dark mode must work, generate a separate dark variant or switch to inline. **When inlining, strip the SVG root's `color="#222"` attribute** (the fallback documented in *Canvas & format* below applies only to `<img>` embedding); otherwise it overrides page-inherited `currentColor` and breaks dark mode.

Brand colors (orange, folder category colors) are fixed hex values because they read well against both light and dark page backgrounds — they don't use `currentColor`.

---

## Canvas & format

- **Format:** SVG, hand-written (not exported from a vector editor).
- **Default viewBox:** `0 0 800 560`. Adjust height for content but keep width at 800 unless there's a strong reason.
- **Dense-content variant:** `0 0 800 680`. Use when a single canvas needs to hold a deeper hierarchy or a wider mix of panel cards plus a footer tip and the 560 height crowds the layout. Lesson 05 precedents: #4 polygon-type panels, #15 polygon comparison grid, #23 density comparison panels.
- **Display width target:** 600 to 900px when embedded in HTML.
- **Background:** Transparent. A 3px Blender-orange accent strip runs along the very top of the SVG region as a brand anchor; no panel rect.
- **No external dependencies:** No web fonts, no external images, no scripts. Pure inline SVG.
- **Fallback color:** Set `color="#222"` as an attribute on the `<svg>` root for `<img>`-embedded fallback. Strip this attribute when the SVG is inlined directly in HTML (see the inlining checklist in *HTML integration patterns* below).

---

## Color palette

### Brand & semantic colors (fixed hex)

Use these consistently when the same concept appears across images.

| Concept                                  | Hex       | Notes                                                                                              |
|------------------------------------------|-----------|----------------------------------------------------------------------------------------------------|
| Blender brand / tie-break accent         | `#FF6B00` | Roots, anchors, primary accents, top strip. Also tie-break (see below).                            |
| Course / structure / Z-axis              | `#4A9EFF` | Course modules, navigation, "your work". Also Z-axis in 3D diagrams. Also Lesson 05 LOW density boxes. |
| Course (darker)                          | `#3a7fd1` | Sub-elements of course/structure                                                                   |
| Practice / process                       | `#B47EE8` | Experiments, exercises, practice                                                                   |
| Reference / inspire                      | `#FF7EA8` | Reference material, inspiration                                                                    |
| Resources / external / Y-axis / Normals / Positive overlay | `#4ADE80` | Tutorials, links, community resources. Also Y-axis. Also normals (Lesson 05+). Also positive-label overlay badges (Lesson 05+: Face normal, Face Orientation, CORRECT, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST, etc.). |
| Portfolio / outcome / Caution            | `#F5C242` | Finished work, destination, success states. Also OK 5-pole and Lesson 05 MEDIUM density boxes.     |
| X-axis / Warning / Negative overlay      | `#E63946` | X-axis in 3D diagrams. Also warning states (Lesson 05+: flipped normals, non-manifold edges, bad topology). Also warning-label overlay badges (FLIPPED, NON-MANIFOLD, AVOID). |
| Badge text on green                      | `#0f1a14` | Near-black dark text for positive overlay badges.                                                  |
| Badge text on red                        | `#ffffff` | Pure white text for warning overlay badges.                                                        |

### Axis color conventions

3D diagrams in lessons that show coordinate axes (Lesson 04 onward) use Blender's own axis colors so the diagrams match what learners see in the viewport:

- **X-axis:** `#E63946` red
- **Y-axis:** `#4ADE80` green
- **Z-axis:** `#4A9EFF` blue

These hex values match Blender's viewport gizmo colors closely enough that diagrams feel native without being literal pixel-matches. Because Y-axis green and Z-axis blue are reused from the resources and course palette roles, the dual purpose is documented in the brand colors table above. When the same diagram needs to show both an axis color AND its non-axis semantic role (e.g., a course-navigation arrow on the same canvas as a Z-axis line), prefer to recolor the non-axis element to avoid confusion. The typical fix is swapping it to brand orange or to a muted neutral.

### Orange tie-break rule

`#FF6B00` Blender brand orange has no axis role and no scarce-resource semantic role, which makes it ideal as a tie-breaker when two or more palette roles would otherwise compete for the same element on a single diagram. Use orange to highlight whichever element should "win" the reader's attention, then let the original color hierarchy carry the rest. Example: on a topology diagram that needs to highlight one vertex among many, the highlighted vertex takes `#FF6B00` regardless of whether other vertices use axis colors elsewhere on the canvas.

This rule formalizes what already happens informally in Lesson 04 (gizmo center dot) and Lesson 05 (highlighted vertex in mesh-components SVG).

### Overlay badge colorway split (new in v4)

PNG annotation overlays in Lessons 03 through 05 settled on a two-color split for the badge rect plus its text fill, driven by whether the label is semantically positive or semantically warning:

| Badge label semantic | Badge rect fill | Badge text fill | Used for                                                                                       |
|----------------------|-----------------|-----------------|------------------------------------------------------------------------------------------------|
| Positive             | `#4ADE80`       | `#0f1a14`       | Face normal, Face Orientation, CORRECT, Faces by Sides, EDGE LOOP, SELECT CAP, INSET, EXTRUDE, SHADE SMOOTH/FLAT, CUP, CHAIR, BUST, and similar affirmative labels |
| Warning              | `#E63946`       | `#ffffff`       | FLIPPED, NON-MANIFOLD, AVOID, and similar cautionary labels                                    |

Pick the colorway from the label's meaning, not from the panel's location or the surrounding image. Mixed colorways on a single PNG overlay are expected and correct (e.g., a face-orientation reference showing a CORRECT green badge on one face and a FLIPPED red badge on another). See the PNG annotation overlay component snippet below for the rest of the overlay geometry.

### Cheat-sheet badge variants

Lesson cheat-sheet cards and inline operation badges come in two visual variants:

- **Filled:** solid fill at the brand color, white text. Bold, high-emphasis. Use for "primary" operations in a lesson's main cheat-sheet card (Lesson 03 navigation shortcuts, Lesson 04 keyboard shortcuts).
- **Muted:** transparent fill (4-10% opacity of the brand color) with the brand color as border and text. Low-emphasis. Use for secondary or supplementary badges, or when many badges appear close together and full saturation would compete.

Choose one variant per lesson and apply it consistently across that lesson's badges. Mixing filled and muted badges within a single lesson is allowed when the visual hierarchy actively benefits (e.g., primary operation filled, optional variants muted), but the default is "all filled" or "all muted" within a lesson.

Note: cheat-sheet badges (above) sit inside SVG cards and use the brand-orange or palette role color for the rect fill. They are a different pattern from the overlay badge colorway split (positive green vs warning red) used on PNG annotation overlays. The two patterns coexist in a single lesson; choose the right one for the surface.

### Text & line colors (via `currentColor` + opacity)

| Role                | Fill                              | Notes                                |
|---------------------|-----------------------------------|--------------------------------------|
| Primary label       | `currentColor`                    | Titles, root and level-1 labels      |
| Secondary text      | `currentColor` opacity `0.65`     | Subtitles                            |
| Description         | `currentColor` opacity `0.6`      | Right-column purpose descriptions    |
| Comment / placeholder | `currentColor` opacity `0.45` italic | Inline notes, ellipses             |
| Divider             | `currentColor` opacity `0.15`     | Horizontal line under title          |
| Tree / connector    | `currentColor` opacity `0.3`      | Tree lines, flow arrows              |

Use full opacity for any text that conveys real information (folder names, module labels, important values). Reserve opacity for genuinely supplementary content.

### Tip callout fills

Two equivalent variants are in use. Pick one per SVG and stay consistent across that file.

**Variant A: tinted fill (original).**

- Background: `#FF6B00` at `fill-opacity="0.10"`
- Border: `#FF6B00` at `stroke-opacity="0.4"`
- "Tip:" label: `#FF6B00`, weight 700
- Tip body: `currentColor`, weight 400

**Variant B: left rail (matured, Lessons 03 to 05).**

- Card rect: transparent fill, no full border
- Left rail: 4px wide `#FF6B00` block flush along the card's left edge
- "Tip:" label: `#FF6B00`, weight 700
- Tip body: `currentColor`, weight 400

Variant B is the newer style and reads cleaner against dark mode backgrounds; Variant A is grandfathered for SVGs that already use it. Both are correct.

---

## Typography

**Font stack:** `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
(Set as `font-family` attribute on `<svg>` so it cascades to all text.)

**Size hierarchy:**

| Role               | Size | Weight     |
|--------------------|------|------------|
| Section title      | 24   | 700        |
| Subtitle           | 14   | 400        |
| Subhead (in body)  | 18   | 600        |
| Root / hero label  | 16   | 600        |
| Level-1 label      | 15   | 500        |
| Level-2 label      | 14   | 400        |
| Description        | 13   | 400        |
| Inline comment     | 14   | 400 italic |
| Tip body           | 13   | 400        |
| Tip label ("Tip:") | 13   | 700        |

The header reserves y=0 through y=108 for the orange accent strip, title, subtitle, and divider. The first body subhead sits at y=138. The footer tip card occupies y=506 through y=540 on the default 560 canvas, or y=625 through y=675 on the 800x680 dense-content variant.

---

## Em-dash discipline (new in v4)

The project locks zero new em-dashes (U+2014) in any new content. This rule applies to:

- New SVG `<text>`, `<title>`, `<desc>`, label, subhead, pill, footer tip, takeaway, and overlay badge text
- New figcaption and alt-text prose written for HTML integration
- New status bullets, handoff doc prose, archive doc headers, and this style guide

Use one of these instead, picked for the surrounding rhythm:

- Middle dot (`·`, U+00B7) as a label separator in SVG subheads, panel titles, and compact pill text. Example: `OK · 5-pole vertex`, `AVOID · 6-pole vertex`, `Cube · 8 verts · 12 edges · 6 faces`. This is the canonical separator for dash-style breaks in SVG visual text from Lesson 03 onward.
- Sentence break (`.`) or comma (`,`) in figcaption and alt-text prose.
- Parenthetical `( )` for true asides.
- Colon (`:`) for introducing a list or expansion.

Pre-existing em-dashes in source content (existing v3 prose, existing lesson HTML, existing SVG files written before this rule) are preserved verbatim through edits. Don't introduce new ones; don't strip the old ones either.

Structural em-dash after a date in a status bullet (the date-then-separator-then-description pattern in status bullets) is grandfathered as a list-item separator, not new prose. That specific use is fine to continue.

Quoting a pre-existing em-dash inside a backtick code span (when referencing an existing string by exact spelling) is fine.

---

## Reusable component snippets

### Header (always start here)

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560"
     role="img" aria-labelledby="{id}-title {id}-desc"
     font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
     color="#222">
  <title id="{id}-title">{Accessible title}</title>
  <desc id="{id}-desc">{Full-sentence description for screen readers}</desc>

  <!-- Top brand accent -->
  <rect x="0" y="0" width="800" height="3" fill="#FF6B00"/>

  <!-- Heading block -->
  <text x="40" y="56" font-size="24" font-weight="700" fill="currentColor">{TITLE}</text>
  <text x="40" y="84" font-size="14" fill="currentColor" opacity="0.65">{SUBTITLE}</text>
  <line x1="40" y1="108" x2="760" y2="108" stroke="currentColor" stroke-width="1" opacity="0.15"/>

  <!-- First body subhead at y=138, then body content below -->
</svg>
```

Use a unique `{id}` prefix per file (e.g., `fs` for folder-structure, `lp` for learning-path) so multiple SVGs can coexist on one HTML page without `id` collisions. Per-lesson id-prefix registries live in each `lesson_NN_integration_progress.md`.

For the 800x680 dense-content variant, swap `viewBox="0 0 800 560"` for `viewBox="0 0 800 680"`. The header geometry (y=0 to y=108) stays the same; the extra 120px lives in the body region.

### Footer tip callout (Variant B, left rail)

```xml
<rect x="40" y="506" width="720" height="34" rx="0"
      fill="none"/>
<rect x="40" y="506" width="4" height="34"
      fill="#FF6B00"/>
<text x="58" y="528" font-size="13" fill="currentColor">
  <tspan font-weight="700" fill="#FF6B00">Tip:</tspan> {TIP_TEXT}
</text>
```

For the 800x680 variant, shift y=506 to y=641 and y=528 to y=663.

### Footer tip callout (Variant A, tinted fill, legacy)

```xml
<rect x="40" y="506" width="720" height="34" rx="6"
      fill="#FF6B00" fill-opacity="0.10"
      stroke="#FF6B00" stroke-opacity="0.4"/>
<text x="54" y="528" font-size="13" fill="currentColor">
  <tspan font-weight="700" fill="#FF6B00">Tip:</tspan> {TIP_TEXT}
</text>
```

### Folder icon (32x28, rounded)

Change `fill` for category color.

```xml
<path transform="translate({X},{Y})"
      d="M 4 7 Q 4 5 6 5 L 11 5 L 14 8 L 26 8 Q 28 8 28 10 L 28 22 Q 28 24 26 24 L 6 24 Q 4 24 4 22 Z"
      fill="{COLOR}"/>
```

### Tree connectors

Straight lines only, no curves. Stroke `currentColor` at opacity `0.3`, width `1.5`, `stroke-linecap="round"`.

- Vertical trunk drops from a parent's icon-bottom center to the vertical center of the last child.
- Horizontal branches stub right from the trunk's x to the child icon's left edge, at the child's vertical center.

Wrap connectors in a single `<g>` with the stroke/opacity attributes set once.

### PNG annotation overlay (inline-stacked pattern, new in v4)

PNGs that need callouts use a wrapper-div plus overlay-svg pattern. The base PNG and the overlay SVG stack inside a relative-positioned div so the overlay scales with the image at any HTML render width. No callouts get baked into the PNG itself; the overlay is always a separate SVG layer.

**Wrapper div + base PNG + overlay SVG skeleton:**

```html
<figure>
    <div style="position: relative; display: inline-block; max-width: 100%;">
        <img src="images/lesson_NN_II_slug.png"
             alt="..."
             loading="lazy"
             style="display: block; max-width: 100%; height: auto; margin: 0;">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 {PNG_WIDTH} {PNG_HEIGHT}"
             preserveAspectRatio="xMidYMid meet"
             style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
            <!-- highlight shape, leader line, marker, badge here -->
        </svg>
    </div>
    <figcaption>...</figcaption>
</figure>
```

Key requirements:

- Overlay `viewBox` matches the PNG's pixel dimensions exactly so coordinates map 1:1 to the source image.
- `preserveAspectRatio="xMidYMid meet"` keeps the overlay aligned when the wrapper scales below the PNG's natural width.
- `inset: 0` shorthand replaces the older `top: 0; left: 0; right: 0; bottom: 0` form (about 30 bytes lighter per overlay).
- `pointer-events: none` on the overlay so it never intercepts clicks intended for the image or surrounding content.
- The `<img>` carries inline `style="display: block; max-width: 100%; height: auto; margin: 0;"` to override the global `img { margin: var(--spacing-md) auto; }` rule so the wrapper div sizes cleanly to the image content.
- Overlay `id` values are namespaced per PNG with a `c{N}-*` prefix (e.g., `c28-marker`, `c17-badge`) so overlays on multiple PNGs in the same lesson don't collide. Per-lesson `c{N}-*` registries live in each lesson's progress doc.

**Per-callout geometry (highlight + leader + marker + badge):**

```xml
<!-- Highlight shape: ellipse or circle around the target. Stroke matches colorway. -->
<ellipse cx="{HX}" cy="{HY}" rx="{HRX}" ry="{HRY}"
         fill="none" stroke="#4ADE80" stroke-width="4"/>
<!-- Leader line from highlight edge to badge edge. -->
<line x1="{LX1}" y1="{LY1}" x2="{LX2}" y2="{LY2}"
      stroke="#4ADE80" stroke-width="3" stroke-linecap="round"/>
<!-- Marker circle at the badge-side end of the leader, 7px from badge edge. -->
<circle cx="{MX}" cy="{MY}" r="6" fill="#4ADE80"/>
<!-- Badge rect + text. Colorway from positive (green) or warning (red) split. -->
<rect x="{BX}" y="{BY}" width="{BW}" height="{BH}" rx="6" fill="#4ADE80"/>
<text x="{BCX}" y="{BCY}" text-anchor="middle"
      font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      font-size="22" font-weight="700" fill="#0f1a14">{LABEL}</text>
```

Swap the four `#4ADE80` fills/strokes to `#E63946` and the badge text fill from `#0f1a14` to `#ffffff` for the warning colorway.

Variants:

- **Marker placement.** Default: marker sits at the badge-side end of the leader, 7px from the badge edge. Alternative: marker sits at the target-side end when there is no separate highlight shape (the `c11` precedent). Pick the badge-side end when a highlight is present so the marker visually anchors the badge rather than duplicating the highlight.
- **Composite overlay variant (new in v4).** For horizontally-divided composite PNGs that already have baked-in 2px vertical dividers between panels (Lesson 05 #29 SELECT CAP/INSET/EXTRUDE and #30 CUP/CHAIR/BUST precedents), drop the highlight ellipses and the per-panel leader lines. Each panel gets a single centered badge near the bottom edge of the panel, no highlight, no leader. The baked-in dividers carry the panel-separation work that highlights would otherwise do.

---

## HTML integration patterns (new in v4)

How figures land in lesson HTML files. Style decisions that affect markup, not the SVG itself.

### Figure wrapper

Plain `<figure>` plus `<figcaption>` wrapper, no class. `styles/main.css` already styles both elements. PNGs use `<img loading="lazy">` with descriptive alt text. Inline SVGs sit as a `<svg>` child of the figure.

### Default-depth figure (most common)

For figures placed directly in lesson sections (i.e., the parent container opens at col 12 or shallower), use 16-space indentation for the `<figure>` tag and 20-space indentation for `<img>`, the inlined `<svg>` root, and `<figcaption>`. SVG children sit at col 24, deeper SVG nesting at 28 or 32, and `<figcaption>` returns to col 20.

```
                <figure>
                    <img src="images/lesson_NN_II_slug.png"
                         alt="..."
                         loading="lazy">
                    <figcaption>...</figcaption>
                </figure>
```

### Deeper-indent figure variant (figures inside cards)

When a figure sits inside a card that opens at col 16 (such as a Try It Now card, Exercise card, Quick Reference Guide card, or similar pattern), shift the entire figure block one indentation level deeper. The figure tag moves to col 20, contents to col 24 / 28 / 32, figcaption to col 24, and the closing figure tag returns to col 20.

```
                    <figure>
                        <img src="images/lesson_NN_II_slug.png"
                             alt="..."
                             loading="lazy">
                        <figcaption>...</figcaption>
                    </figure>
```

Precedents: Lesson 04 #16 inside Try It Now card; Lesson 05 #29 inside Exercise 6 card; Lesson 05 #25 inside Quick Reference Guide card; Lesson 05 #22 inside Finding Non-Manifold Elements card.

### Inlining SVG: checklist

Each rule below was confirmed across Lessons 03 through 05 integration passes.

1. **Strip `color="#222"`** from the inlined root `<svg>` tag. The attribute blocks `currentColor` cascade and breaks dark mode. Standalone `.svg` files in `images/` keep the attribute so `<img>`-embedded fallback still works.
2. **Re-indent contents** to the depth chosen above (default 20-space content, or 24-space for deeper-indent). Match the surrounding HTML indentation; do not paste the SVG with its on-disk indentation if that conflicts.
3. **Collapse multi-line attribute continuations** onto single lines. `<text>`, `<line>`, `<polygon>`, `<rect>`, `<desc>` (and similar) elements that wrap attributes across multiple lines in the standalone file should collapse to a single line during inlining.
4. **Prune decorative ASCII-divider author comments** (`<!-- ====== Block Title ====== -->`). These are useful in the standalone file for editor scanning; they add noise in the inlined HTML. Keep short structural comments (`<!-- Panel 1 -->`, `<!-- Cell: Plane -->`, `<!-- Latitude ellipses -->`, `<!-- Hero polygon: ... -->`, `<!-- Vertex glyphs -->`) for in-place navigation in the inlined block.
5. **Preserve every `role`, `aria-labelledby`, `<title>`, `<desc>`, and `id`** verbatim. Per-file id prefixes (e.g., `mc-*`, `lp-*`) prevent collisions with other inline SVGs on the same page; do not rename them during integration.
6. **Pre-existing em-dashes** in surrounding HTML prose (the anchor text used by `Filesystem:edit_file`) pass through verbatim. New content added during integration follows the em-dash discipline above.

### Edit cadence

Insertions use `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then verify with `Filesystem:get_file_info` after every commit. Anchor lengths default to 2 or 3 lines for unique insertion points; extend to 4 to 8 lines when needed (Lesson 04 INTEGRATION used 4-line anchors; Lesson 05 INTEGRATION extended to 7 and 8 lines for ambiguous spots).

---

## Capture workflow (new in v5)

How source PNGs and screenshots get produced for lesson figures. Style decisions that affect what's captured, not how it's marked up.

### Add-on dependencies

- **LoopTools v4.7.7** (Lesson 06 Phase 2): install via Blender's Extensions Platform in Python, not the legacy Edit > Preferences > Add-ons workflow. Working sequence: `bpy.ops.extensions.repo_sync_all()` then `bpy.ops.extensions.package_install(repo_index=0, pkg_id='looptools', enable_on_install=True)`. The Extensions Platform path survives Blender restarts and matches how 5.x ships add-ons.

### BlenderMCP capture paths

- **`bpy.ops.screen.screenshot` silently truncates to 0 bytes on WSL UNC paths.** Writing directly to a `\\wsl$\Ubuntu\...` UNC path via `filepath='\\\\wsl$\\Ubuntu\\...'` produces an empty file with no Python error raised (the operator returns `{'FINISHED'}` cleanly). Working path: capture to a Windows tempdir first (e.g. `C:\Users\<user>\AppData\Local\Temp\screenshot.png`), then read the bytes via `PIL.Image.open(temp_path)` and save through Pillow to the WSL UNC target. Verified on Lesson 06 Phase 6 #43 full-window screenshot. Reusable for any `bpy.ops.screen.screenshot` or `bpy.ops.screen.screenshot_area` call where the target is on WSL.
- **`bpy.ops.screen.screenshot_area` includes overlay layers; `bpy.ops.render.opengl` does not.** Pick `screenshot_area` (wrapped in `temp_override` for the target area) when the capture must show viewport overlays like Face Orientation tint, edit-mode dots, gizmo, or 3D cursor. Pick `render.opengl` when only the rendered viewport contents matter and overlays would compete with the subject.

### Worked example: Face Orientation overlay capture recipe (Lesson 06 Phase 3 #23)

The Face Orientation overlay needs three things lined up before the capture lands cleanly:

1. **Bump the theme alpha** for `face_front` and `face_back` to at least `0.4`. Default in Blender 5.1.1 may be `0.0`, which silently suppresses the overlay tint even when the overlay toggle is ON. Set both colors' alpha channel directly via `bpy.context.preferences.themes[0].view_3d.face_front` and `face_back` (RGBA tuples).
2. **Capture via `bpy.ops.screen.screenshot_area`** (overlay-aware) under VIEW_3D `temp_override`, not `bpy.ops.render.opengl` (which strips the overlay).
3. **Chrome-aware Pillow crop** to trim the area header and any padding. Lesson 06 #23 used `1572x900 raw → 1280x720 cropped at CROP_X=72, CROP_Y=88`. Crop bounds depend on the area chrome included in the screenshot; measure once per Blender layout and reuse.

### Manual capture cadence

- **Save Win+Shift+S snips directly to WSL `images/`** (`\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`). Skip the Claude UI upload round-trip; the file is verifiable from WSL via `Filesystem:get_file_info` and previewable via `Filesystem:copy_file_user_to_claude`. The Claude UI upload plus manual copy adds a step that the WSL-first path avoids entirely.
- **Win+Shift+S overlay freezes the screen on Win 11, preserving transient popover state.** As long as the popover is open and the cursor is hovering the target row (no defocus click first), triggering Win+Shift+S freezes the screen on overlay and the open popover state is preserved through the rectangle-select snip. Sequence for capturing a menu popover: top viewport header → click `<Menu Name>` → hover target row → Win+Shift+S directly → drag selection rectangle around the open menu and surrounding viewport context. Pattern works for any popover, pie menu, or transient UI that Blender's render API cannot reach (Lesson 06 Phase 4 #49 Alt+E and Phase 5 #35 Mesh menu precedents).
- **Pillow can rewrite UNC-path PNGs in place via `blender:execute_blender_code`** when a user-captured snip comes in oversized. Working pattern: read the snip via `PIL.Image.open(unc_path)`, run `image.crop(bounds)` and/or `image.resize(target, Image.LANCZOS)`, save back to the same path. Verified on Lesson 06 Phase 4 #45 (3838x2160 → 1920x1080) and Phase 6 #39 (3838x2160 → 1920x848). Verify final size via `Filesystem:get_file_info` against the accept band (typical: 200 to 800 KB) before integration.

### Modal capture criterion

- **The bottom-of-viewport modal status bar is authoritative for actual key bindings** in any given Blender version. Locked spec text and AI prompt language are NOT authoritative; both can carry pre-version bindings that no longer match the running Blender. Read the status bar mid-capture and include it in the snip frame so downstream review can verify.
- **Generalized capture criterion:** every modal capture frame must include both (a) the live operator readout (top floating text OR bottom-bar string, varies by operator and Blender version) and (b) the modal keybinding hints (bottom bar). Both together unambiguously confirm modal-active state; neither alone is sufficient. The Bevel modal in 5.1.1 (Lesson 06 Phase 6 #39) splits these across top floating (`Offset: ... Segments: ... Profile Shape: ...`) plus bottom hints bar, NOT a single `Bevel (Width: X, Segments: N)` bottom-status-bar string as pre-5.x specs anticipated.
- **Knife-tool modal bindings in Blender 5.1.1** (worked example of why the status-bar-as-truth rule matters): **A** = angle constraint (status bar reads `Angle Constraint: 0.00 (30.00) (On)` when toggled), **C** = cut through (status bar reads `Cut Through: On`), **X / Y / Z** = axis lock (renders as a colored constraint line through the viewport). Pre-5.1.1 specs that list `C = angle constraint` and `Z = cut through` are stale; do not propagate without checking the status bar in the live Blender version.

### Visual readability in SOLID shading

- **`plane.show_wire = True` before `bpy.ops.mesh.knife_project`** (or any cut/slice operator). Without `show_wire`, the new edges blend into the SOLID-shaded face fill and the cut pattern is invisible at thumbnail scale. With `show_wire` ON, edges render as dark wireframe overlay against the SOLID fill, making the cut read clearly. (Lesson 06 Phase 5 #35 knife_project capture.)
- **`Alt+Z` X-ray ON before pressing `K` for Cut-Through captures.** Without X-ray, the dashed back-face cut line that Cut Through mode produces blends visually into the SOLID-shaded face fill and reads as no different from a regular cut. Working sequence: `Alt+Z` (X-ray ON) → `K` (knife) → `C` (cut through, confirm via status bar `Cut Through: On`) → draw cut across the silhouette so the dashed segment spans visible back-face territory → Win+Shift+S before confirming the cut. The X-ray ON state itself reads as "seeing through the mesh" in the snip and reinforces the cut-through educational message even when the dashed line is subtle. (Lesson 06 Phase 5 #34 panel 3.)

### Multi-panel composite QA

- **First-pass marginal-read rejection BEFORE the composite step.** For multi-panel composites where each panel illustrates a different operator state, every panel must read distinctly from every other panel at thumbnail scale. Free-cutting panels specifically need **4 to 5 non-collinear cut dots forming an obvious zigzag or curve across the face** so the freeform nature reads against constrained-cut sibling panels in the same composite. Apply the read-rejection check at sub-chat-internal review BEFORE running the Pillow composite step (cheap to recapture pre-composite; expensive to recapture post-composite, since the composite has to be rebuilt). Lesson 06 Phase 5 #34 panel 1 hit this: initial capture had only 2 near-collinear cut dots and read indistinguishably from #33 (single-pose knife-active) at panel scale; recaptured before composite landed.

---

## Blender 5.1.1 op-name and behavior discoveries (new in v5)

Cross-lesson Blender Python facts that affect what can be captured and how. Per-lesson progress-doc Locked rules sections cross-reference this list rather than restating it.

- **Screw Modifier ignores `obj.rotation_euler`.** The modifier reads the source mesh in local space and treats object-level rotation as if applied separately, so a circle rotated 90° on X via `obj.rotation_euler = (radians(90), 0, 0)` still produces a flat-disc spring rather than a vertical helix. Apply rotation first via `bpy.ops.object.transform_apply(rotation=True)` before adding the Screw Modifier so the rotation is baked into the mesh data. (Lesson 06 Phase 5 #32 spring capture.)
- **`bpy.ops.mesh.subdivide` requires a VIEW_3D `temp_override`** when called from inside `blender:execute_blender_code`. Without the override the operator no-ops silently or raises a context error. Wrap in `bpy.context.temp_override(window=window, screen=screen, area=area_3d, region=region_3d)` using the same VIEW_3D area lookup pattern used for `bpy.ops.render.opengl`. A direct bmesh rebuild is a cleaner alternative when subdivision is the only operation needed. (Lesson 06 Phase 5 #35 plane rebuild.)
- **`bpy.ops.mesh.subdivide(number_cuts=N)` grows quadratically, not exponentially.** The operator inserts N cuts per edge in a single call, producing `(N+1)²` faces from one source face. So `subdivide(number_cuts=4)` yields 25 faces (5x5 grid), not 256. For the canonical 4 / 16 / 64 / 256 progression that matches the lesson-body `4^N` exponential growth column, run sequential `subdivide(number_cuts=1)` passes: pass 1 yields 4 faces, pass 2 yields 16, pass 3 yields 64, pass 4 yields 256. (Lesson 06 Phase 6 #36 subdivide-levels composite.)
- **Multi-object Edit Mode breaks `bpy.ops.mesh.knife_project`.** If both the target and the cutter are selected when entering Edit Mode, Blender enters multi-object Edit Mode and `knife_project` then sees the cutter as part of the edit scope (not as an external cutter); the projection produces zero new geometry on the target. Working sequence: Object Mode → `bpy.ops.object.select_all(action='DESELECT')` → select TARGET alone → `bpy.context.view_layer.objects.active = target` → enter Edit Mode (target alone) → INSIDE Edit Mode call `cutter.select_set(True)` to add the cutter to the selection set without bringing it into multi-object edit (`bpy.context.objects_in_mode` stays single-target while `bpy.context.selected_objects` carries both) → `bpy.ops.mesh.select_all(action='SELECT')` on the target geometry → `bpy.ops.mesh.knife_project(cut_through=False)` under VIEW_3D `temp_override`. (Lesson 06 Phase 5 #35 plane cut.)
- **Alt+E Extrude special menu shows 6 items in Blender 5.x**, not the pre-5.x 5-item count. The 5.x menu reads: Extrude Faces, Extrude Faces Along Normals, Extrude Individual Faces, **Extrude Manifold**, Extrude Repeat, Spin. Specs derived from older Blender docs should expect the discrepancy and not assert the 5-item count. (Lesson 06 Phase 4 #49 Alt+E popover capture.)
- **`region_data.view_rotation` assignment does NOT synchronously update the view matrix** that view-dependent operators (`knife_project`, `view3d.dolly`, etc.) read from. The operator returns `{'FINISHED'}` but produces zero mesh delta. Working path is `bpy.ops.view3d.view_axis(type='TOP'|'FRONT'|'SIDE')` inside a VIEW_3D `temp_override`, which forces the operator-level view-state sync. (Lesson 06 Phase 5 #35 TOP ortho projection rebuild; narrower-scope companion to the knife_project workaround above.)

---

## Accessibility requirements

Every SVG must include:

- `role="img"` on the `<svg>` element.
- `aria-labelledby` pointing at a `<title>` and `<desc>`.
- Text contrast that passes WCAG AA at the smallest size used (verify on both light and dark backgrounds).
- Color used as supplement, never sole carrier of meaning — labels and shapes carry semantics; color reinforces.
- No flashing, no animation, no auto-playing motion in lesson images.

PNG annotation overlays carry their accessibility via the parent `<figure>`'s `<figcaption>` and the `<img>`'s `alt` attribute. The overlay SVG itself does not need `role="img"` since it's decorative on top of an already-described raster image; the `aria-labelledby` chain stays on the figcaption-plus-alt-text pair.

---

## File conventions

- **Location:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
- **Naming:** `lesson_{NN}_{II}_{slug}.svg` or `.png`
  - `NN` = zero-padded lesson number (e.g., `01`)
  - `II` = zero-padded image number from the lesson's requirements doc (e.g., `08`)
  - `slug` = short descriptive name in snake_case
- **Example:** `lesson_01_08_folder_structure.svg`
- **WSL path prefix:** Always use `\\wsl$\`. Never use `\\wsl.localhost\` — that prefix has caused issues in past sessions.

---

## Course-specific data

When SVGs need to reference real course content (module names, lesson titles, etc.), pull from these source-of-truth files:

- **Module names & structure:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\curriculum_overview.md`
- **Lesson-specific image requirements:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_{NN}_image_requirements.md`

### Real module names (snake_cased for folder/label use)

| Module | Snake-case name                    |
|--------|------------------------------------|
| 01     | `Module_01_Getting_Started`        |
| 02     | `Module_02_3D_Modeling`            |
| 03     | `Module_03_Materials_Texturing`    |
| 04     | `Module_04_Lighting_Rendering`     |
| 05     | `Module_05_Camera_Composition`     |
| 06     | `Module_06_Animation`              |
| 07     | `Module_07_Advanced_Modeling`      |
| 08     | `Module_08_Particles_Simulations`  |
| 09     | `Module_09_Character_Creation`     |
| 10     | `Module_10_Node_Systems`           |
| 11     | `Module_11_Pro_Workflows`          |
| 12     | `Module_12_Portfolio_Projects`     |

---

## Workflow conventions

- **Batching cadence:** 1 pilot SVG, then batches of 3, to balance review cycles against per-turn token overhead.
- **Style pilot first:** When the style guide changes meaningfully, do one pilot SVG before batching to confirm the changes look right.
- **One SVG per file:** Don't combine multiple diagrams into one SVG even if they're related.
- **Plan-lock before build:** Propose spec plus design plan in writing first (locked in `lesson_NN_integration_progress.md` or its archive), then generate the SVG or capture the PNG. Same rule for integration: propose anchors and grouping decisions before editing.
- **Cross-sub-chat composite pattern (new in v5):** When a multi-panel composite has a mix of scriptable BlenderMCP panels and manual Win+Shift+S panels, split across two sub-chats. The scripted sub-chat produces the BlenderMCP panels and retains them on disk as `_temp_<image>_p{N}.png` for handoff; the receiving manual sub-chat opens with a `Filesystem:get_file_info` pre-flight check on every temp, captures the manual panel, runs the Pillow composite, and removes all panel temps via `os.remove` at composite save. The split avoids forcing a single chat to carry both work shapes and lets per-panel recapture happen in the right work context. (Lesson 06 Phase 5 #35: 2 A-produced temps plus 1 B-manual panel composited at Phase 5 sub-chat B close.)

---

## Locked decisions

1. **Theming:** Transparent / page-inheriting via `currentColor`. Fallback `color="#222"` on `<svg>` root. Inline embedding preferred for full dark/light support. Strip the fallback attribute when inlining.
2. **Right-column descriptions:** Always on for top-level items in hierarchical diagrams.
3. **Footer tip callout:** Apply consistently across lesson images. Variant B (left rail) is the matured default; Variant A (tinted fill) is grandfathered.
4. **Real names:** Use real course content (module names, lesson titles) sourced from the course-specific data files above, not generic placeholders.
5. **Brand orange top accent:** Always present (3px strip at y=0).
6. **Color palette:** As listed. No swaps. Axis colors match Blender's viewport convention (X=red `#E63946`, Y=green `#4ADE80`, Z=blue `#4A9EFF`).
7. **Tie-break and cheat-sheet badge variants:** Use `#FF6B00` orange as the tie-break highlight color when palette roles compete on a single diagram. Choose one cheat-sheet badge variant (filled or muted) per lesson and apply consistently.
8. **Overlay badge colorway split (new in v4):** Positive labels (Face normal, EDGE LOOP, CORRECT, etc.) use `#4ADE80` green badge with `#0f1a14` dark text. Warning labels (FLIPPED, NON-MANIFOLD, AVOID, etc.) use `#E63946` red badge with `#ffffff` white text. Pick from the label's semantic role; mixed colorways on a single PNG are expected.
9. **Em-dash discipline (new in v4):** Zero new em-dashes in any new content (SVG text, figcaption prose, alt-text, status bullets, handoff doc prose, this style guide). Middle-dot (`·`, U+00B7) for separation in SVG subheads and compact labels. Pre-existing em-dashes preserved verbatim through edits.
10. **Inline-stacked PNG annotation overlay (new in v4):** Wrapper div + overlay SVG with `viewBox` matching PNG pixel dimensions, `preserveAspectRatio="xMidYMid meet"`, and `position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none`. No baked-in callouts on PNGs. Overlay ids namespaced per PNG with a `c{N}-*` prefix.
11. **Figure indentation depth (new in v4):** Default 16/20-space depth for figures placed directly in lesson sections; 20/24/28/32-space deeper-indent variant for figures inside cards opening at col 16. Pick from the parent container's depth, not from the figure's content.
12. **SVG inlining checklist (new in v4):** Strip root `color="#222"`, re-indent to 20-space (or 24-space) content depth, collapse multi-line attribute continuations onto single lines, prune decorative ASCII-divider comments, keep structural comments, preserve every `role` / `aria-labelledby` / `<title>` / `<desc>` / `id` verbatim.
13. **Dense-content viewBox variant (new in v4):** `0 0 800 680` for content density that overflows the default 560 height. Header geometry (y=0 to y=108) unchanged; footer tip card shifts to y=641 through y=675.
14. **Modal capture criterion (new in v5):** For any manual or scripted capture of a Blender modal operator (knife, bevel, transform, spin, screw, etc.), the bottom-of-viewport modal status bar is authoritative for the actual key bindings in the running Blender version. Capture frame must include both (a) the live operator readout (top floating text OR bottom-bar string, varies by operator and Blender version) and (b) the modal keybinding hints (bottom bar). Both together unambiguously confirm modal-active state; neither alone is sufficient. Spec text and AI prompt language are NOT authoritative; read the status bar mid-capture.
15. **Visual readability in SOLID shading (new in v5):** When capturing cut, slice, or projection results in SOLID shading, set `plane.show_wire = True` on the target mesh before the operator so the new edges render as dark wireframe overlay against the SOLID face fill (otherwise the cut blends in and reads as no different from the uncut face at thumbnail scale). For knife Cut-Through captures specifically, also toggle `Alt+Z` X-ray ON before pressing `K` so the dashed back-face cut line spans visible back-face territory and the through-the-mesh visual reads.
16. **Manual capture cadence (new in v5):** Win+Shift+S snips save directly to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\` first. Skip the Claude UI upload round-trip; the file is verifiable from WSL via `Filesystem:get_file_info` and previewable via `Filesystem:copy_file_user_to_claude`. On Win 11, Win+Shift+S freezes the screen on overlay and preserves any open popover or pie menu through the rectangle-select snip as long as the cursor is hovering the target row and no defocus click has happened first.

---

## Revision log

- **v5 (current, 2026-05-25).** Added the Capture workflow section between HTML integration patterns and Accessibility requirements, covering add-on dependencies (LoopTools v4.7.7 Extensions Platform install path), BlenderMCP capture paths (WSL UNC truncation workaround for `bpy.ops.screen.screenshot`; capture-path selection `screenshot_area` vs `render.opengl` for overlay-layer inclusion), a worked Face Orientation overlay capture recipe (theme alpha bump, overlay-aware capture path, chrome-aware Pillow crop), manual capture cadence (save direct to WSL `images/`, Win+Shift+S popover preservation on Win 11, Pillow rewrite-in-place via `blender:execute_blender_code`), the modal capture criterion (live operator readout top floating or bottom bar plus modal keybinding hints bottom bar; status bar authoritative for bindings; knife-tool 5.1.1 A/C/Z worked example), visual readability rules for SOLID shading (`show_wire` ON before `knife_project`; `Alt+Z` X-ray ON before knife Cut-Through), and multi-panel composite QA (first-pass marginal-read rejection check before the composite step). Added the Blender 5.1.1 op-name and behavior discoveries section between Capture workflow and Accessibility requirements (Screw Modifier rotation_euler caveat, subdivide VIEW_3D `temp_override` requirement and quadratic `(N+1)²` face growth, multi-object Edit Mode breaks knife_project workaround, Alt+E Extrude menu 6-item count in 5.x with Extrude Manifold added, narrower-scope view_rotation-vs-view_axis sync note). Added the cross-sub-chat composite pattern bullet to Workflow conventions (scriptable panels retained as `_temp_*.png` for the receiving sub-chat to composite with manual panel). Locked decisions grew from 13 to 16 entries (modal capture criterion; visual readability in SOLID; manual capture save-direct-to-WSL). All additions sourced from Lesson 06 Phase 2 through Phase 6 PRODUCTION discoveries; no existing SVGs or PNG overlays need re-issue.
- **v4 (2026-05-21).** Folded the overlay badge colorway split (positive green `#4ADE80` with `#0f1a14` text, warning red `#E63946` with `#ffffff` text) into the palette as a separate subsection. Added the inline-stacked PNG annotation overlay pattern as a component snippet, including the composite overlay variant for horizontally-divided composites with baked-in dividers. Added the 800x680 dense-content viewBox variant for content density (Lesson 05 #4, #15, #23 precedents). Added em-dash discipline as a top-level section: zero new em-dashes anywhere, middle-dot for SVG label separation. Added HTML integration patterns section covering the plain figure wrapper, default vs deeper-indent depth, the SVG inlining checklist (color attribute strip, re-indent, multi-line attribute collapse, comment preservation), and the edit cadence (dry-run-then-commit-then-verify with `Filesystem:edit_file`). Added the footer tip callout left-rail variant (Variant B) alongside the original tinted-fill variant (Variant A). Added a Subhead row to the typography size hierarchy table and noted the y=138 first-body-subhead position. Locked decisions grew from 7 to 13 entries. No existing SVGs need re-issue; existing Lesson 03 to 05 SVGs and PNG overlays already follow the conventions in production. Superseded by v5.
- **v3 (2026-05-20).** Folded `#E63946` X-axis red into the canonical palette. Documented dual roles for `#4ADE80` (Y-axis + resources + Lesson 05 normals) and `#4A9EFF` (Z-axis + course/structure). Added the axis color convention subsection (X=red, Y=green, Z=blue matching Blender's viewport), the orange tie-break rule (reserve `#FF6B00` as the cross-palette highlight), and the cheat-sheet badge variant policy (filled vs muted, one per lesson). Superseded by v4.
- **v2** — Locked decisions per Ray's review of the v1 pilot. Switched from self-contained dark panel to transparent / page-inheriting using `currentColor`. Added course-specific data section with real module names from `curriculum_overview.md`. Pilot redone as `lesson_01_08_folder_structure.svg`. Superseded by v3.
- **v1** — Initial pilot with dark self-contained panel theme. Superseded.
