# Blender Course — Image Style Guide

**Purpose:** Reference for generating SVG diagrams and infographic assets for the Blender Mastery Course. Future chats should read this file first before producing new lesson SVGs so style stays consistent across all images.

**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
**Image output:** `images/` subfolder
**Status:** v2 — locked. Pilot is `lesson_01_08_folder_structure.svg`.

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
- **Display width target:** 600–900px when embedded in HTML.
- **Background:** Transparent. A 3px Blender-orange accent strip runs along the very top of the SVG region as a brand anchor; no panel rect.
- **No external dependencies:** No web fonts, no external images, no scripts. Pure inline SVG.
- **Fallback color:** Set `color="#222"` as an attribute on the `<svg>` root for `<img>`-embedded fallback.

---

## Color palette

### Brand & semantic colors (fixed hex)

Use these consistently when the same concept appears across images.

| Concept              | Hex       | Notes                                       |
|----------------------|-----------|---------------------------------------------|
| Blender brand        | `#FF6B00` | Roots, anchors, primary accents, top strip  |
| Course / structure   | `#4A9EFF` | Course modules, navigation, "your work"     |
| Course (darker)      | `#3a7fd1` | Sub-elements of course/structure            |
| Practice / process   | `#B47EE8` | Experiments, exercises, practice            |
| Reference / inspire  | `#FF7EA8` | Reference material, inspiration             |
| Resources / external | `#4ADE80` | Tutorials, links, community resources       |
| Portfolio / outcome  | `#F5C242` | Finished work, destination, success states  |

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

- Background: `#FF6B00` at `fill-opacity="0.10"`
- Border: `#FF6B00` at `stroke-opacity="0.4"`
- "Tip:" label: `#FF6B00`, weight 700
- Tip body: `currentColor`, weight 400

---

## Typography

**Font stack:** `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
(Set as `font-family` attribute on `<svg>` so it cascades to all text.)

**Size hierarchy:**

| Role               | Size | Weight     |
|--------------------|------|------------|
| Section title      | 24   | 700        |
| Subtitle           | 14   | 400        |
| Root / hero label  | 16   | 600        |
| Level-1 label      | 15   | 500        |
| Level-2 label      | 14   | 400        |
| Description        | 13   | 400        |
| Inline comment     | 14   | 400 italic |
| Tip body           | 13   | 400        |
| Tip label ("Tip:") | 13   | 700        |

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

  <!-- body content starts here, y ≈ 140 -->
</svg>
```

Use a unique `{id}` prefix per file (e.g., `fs` for folder-structure, `lp` for learning-path) so multiple SVGs can coexist on one HTML page without `id` collisions.

### Footer tip callout

```xml
<rect x="40" y="506" width="720" height="34" rx="6"
      fill="#FF6B00" fill-opacity="0.10"
      stroke="#FF6B00" stroke-opacity="0.4"/>
<text x="54" y="528" font-size="13" fill="currentColor">
  <tspan font-weight="700" fill="#FF6B00">Tip:</tspan> {TIP_TEXT}
</text>
```

### Folder icon (32×28, rounded)

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

---

## Accessibility requirements

Every SVG must include:

- `role="img"` on the `<svg>` element.
- `aria-labelledby` pointing at a `<title>` and `<desc>`.
- Text contrast that passes WCAG AA at the smallest size used (verify on both light and dark backgrounds).
- Color used as supplement, never sole carrier of meaning — labels and shapes carry semantics; color reinforces.
- No flashing, no animation, no auto-playing motion in lesson images.

---

## File conventions

- **Location:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\`
- **Naming:** `lesson_{NN}_{II}_{slug}.svg`
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

---

## Locked decisions (v2)

1. **Theming:** Transparent / page-inheriting via `currentColor`. Fallback `color="#222"` on `<svg>` root. Inline embedding preferred for full dark/light support.
2. **Right-column descriptions:** Always on for top-level items in hierarchical diagrams.
3. **Footer tip callout:** Apply consistently across lesson images.
4. **Real names:** Use real course content (module names, lesson titles) sourced from the course-specific data files above, not generic placeholders.
5. **Brand orange top accent:** Always present (3px strip at y=0).
6. **Color palette:** As listed. No swaps.

---

## Revision log

- **v2 (current)** — Locked decisions per Ray's review of the v1 pilot. Switched from self-contained dark panel to transparent / page-inheriting using `currentColor`. Added course-specific data section with real module names from `curriculum_overview.md`. Pilot redone as `lesson_01_08_folder_structure.svg`.
- **v1** — Initial pilot with dark self-contained panel theme. Superseded.
