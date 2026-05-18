# Lesson 01 HTML Integration: Progress

Tracks the integration of available images into `lesson_01_welcome_to_blender.html`. Image production for Lesson 01 is at 11 of 12 (the last missing image is #7 workspace_setup, documented below). Image #9 is produced but not yet integrated; image #3 was integrated this chat.

## Status

- Image #3 produced (Adobe Firefly, 1536x1024 PNG, 2.3 MB) and integrated this chat. Renamed from `sixpanel.png` to `lesson_01_03_use_cases_showcase.png` and placed at the top of `what-can-you-create` after the section opening paragraph and before the "Character Art and Animation" h3. File size after integration: 108,947 bytes. Image production state moves from 10 of 12 to 11 of 12. Only #7 (workspace_setup) remains missing.
- Image #9 produced this chat (`lesson_01_09_community_resources.svg`, 8,611 bytes); not yet integrated. AI-image-generator prompts for the remaining two missing PNGs (#3, #7) saved to `lesson_01_image_prompts.md`. Image production state moves from 9 of 12 to 10 of 12.
- Version currency pass on `getting-ready`: minimum and recommended system requirement bullets updated to Blender 5.1 baseline (8 GB RAM minimum and 2 GB VRAM minimum with OpenGL 4.3 or Vulkan; 32 GB RAM and 8+ GB VRAM recommended; quad-core minimum, 8-core recommended). Version Note prose retargeted to Blender 5.1 specifically (current stable, March 2026).
- **Integration complete (for the 9 originally available images).** All 9 placed across 3 phases (2 PNGs, 7 inline SVGs). Final file size 107,724 bytes (107,934 after post-Phase-3 polish). The remaining 2 missing images (#3, #7) are documented below with AI-prompt sourcing options.
- Post-Phase-3 polish: refined image #12's alt text to enumerate splash content accurately (the original wording said 'browse online help', which did not reflect the actual splash links); updated the Version Note prose in `getting-ready` to acknowledge Blender 5.x since the #12 screenshot shows 5.1.1.
- Phase 3 done: 9 of 9 images placed (2 PNGs, 7 inline SVGs). File size 107,724 bytes after Phase 3 (was 84,961 after Phase 2).
- Phase 3 placed image #11 (system_requirements, inline SVG) after the Recommended Requirements `<ul>` and before the "About Your Mouse" info card; image #10 (mouse_diagram, inline SVG) after the "About Your Mouse" card and before the "Downloading and Installing Blender" h3; image #12 (first_launch, PNG) after the 4-step install `<ol>` and before the "Version Note" info card; image #8 (folder_structure, inline SVG) after the `<pre><code>` ASCII folder tree and before the "Save Early, Save Often" info card. All four shipped with the locked approach: plain `<figure>` + `<figcaption>` wrapper, PNG as `<img loading="lazy">` with descriptive alt text, SVGs re-indented to 20-space root depth with `color="#222"` stripped from each root `<svg>` tag.
- Phase 2 done: 5 of 9 images placed (1 PNG, 4 inline SVGs). File size 84,961 bytes after Phase 2 (was 61,226 after Phase 1, 50,537 at start). Phase 3 remaining: 4 images (#8, #10, #11, #12).
- Phase 2 placed image #4 (learning_path, inline SVG) after the 12-module mermaid in `course-structure` and before the "The Learning Path" h3; image #5 (growth_mindset, inline SVG) after the "Growth Mindset in Action" card in `learning-mindset` and before the "Patience Is Your Superpower" h3; image #6 (learning_curve, inline SVG) after the plateau-pattern mermaid and before the "When you hit a plateau..." paragraph. All three shipped with the locked approach: plain `<figure>` + `<figcaption>` wrapper, SVG re-indented to 20-space root depth with `color="#222"` stripped from each root `<svg>` tag.
- Phase 1 done: 2 of 9 images placed (1 PNG, 1 inline SVG). File size 61,226 bytes after Phase 1 (was 50,537 bytes at start).
- Phase 1 placed image #1 (hero PNG) after the opening "Imagine having..." paragraph in `what-is-blender`, and image #2 (capabilities, inline SVG) after the Swiss Army Knife card and before the "A Brief History Worth Knowing" h3. Both shipped with the locked approach: plain `<figure>` + `<figcaption>` wrapper, PNG as `<img loading="lazy">`, SVG inlined verbatim with `color="#222"` stripped from the root `<svg>` tag per the dark-mode rule.

## Images available and missing

Available in `images/` (11 of 12):

- #1 `lesson_01_01_blender_hero.png` (PNG)
- #2 `lesson_01_02_capabilities.svg` (inline; on-disk filename differs from the requirements doc, which lists it as `_capabilities_infographic.svg`)
- #3 `lesson_01_03_use_cases_showcase.png` (PNG; Adobe Firefly generated, integrated)
- #4 `lesson_01_04_learning_path.svg` (inline)
- #5 `lesson_01_05_growth_mindset.svg` (inline)
- #6 `lesson_01_06_learning_curve.svg` (inline)
- #8 `lesson_01_08_folder_structure.svg` (inline)
- #9 `lesson_01_09_community_resources.svg` (inline; produced but not yet integrated)
- #10 `lesson_01_10_mouse_diagram.svg` (inline)
- #11 `lesson_01_11_system_requirements.svg` (inline)
- #12 `lesson_01_12_first_launch.png` (PNG)

Missing from production (1 of 12; placement is skipped for this; AI prompts available in `lesson_01_image_prompts.md`):

- #7 `lesson_01_07_workspace_setup.png` (would have gone into "Setting Up Your Workspace" in `getting-ready`; real Blender screenshot strongly preferred over AI generation, see prompts file)

## Locked approach (identical to Lesson 02)

- **Wrapper:** plain `<figure>` with `<figcaption>` for every image. No class. `styles/main.css` already styles both elements directly.
- **PNGs:** `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- **SVGs:** inlined verbatim inside the figure, re-indented to 20-space content depth. **Critical: strip the `color="#222"` attribute from the inline `<svg>` root tag.** That attribute is the `<img>`-embedded fallback (so a standalone SVG has *some* color); when inlined, it locks the SVG's `color` to `#222` and prevents `currentColor` from inheriting the page text color, breaking dark mode. The `.svg` source files in `images/` keep the attribute for standalone viewing; only the inline copy in HTML drops it.
- **Tools:** `Filesystem:edit_file` only. Always `dryRun=true` first to confirm anchors match, then commit. Verify with `Filesystem:get_file_info` after every commit. NEVER use the built-in `create_file` (writes to Claude's container, not the user filesystem at `\\wsl$\Ubuntu\` paths). For new files, use `Filesystem:write_file`.
- **Anchors:** use 2-3 lines for `oldText` (the paragraph or h3 immediately above and the next element below the insertion point). Make sure the anchor is unique.
- **Path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.
- **No new em-dashes** in any new content (captions, alt text, this doc). Preserve em-dashes that exist in source content (existing paragraphs, blockquotes, the SVG body text).
- **Per-chat archive discipline:** when the chat is winding down or context is getting heavy, warn Ray rather than letting automatic compaction happen.
- **AI prompts for missing raster images:** any chat that identifies a missing PNG or other raster image that cannot be produced inside the chat (real screenshots, photographs, photorealistic renders, AI generation) must also produce text prompts for AI image generators and save them to `lesson_NN_image_prompts.md` alongside the progress doc. The prompts must cover Adobe Firefly, ChatGPT (DALL-E), and Midjourney at minimum, and must include negative prompts and acceptance criteria. Where AI generation is a poor fit (Blender UI screenshots, hardware photos, anything requiring literal accuracy), the prompts file says so plainly and provides screenshot-capture or real-photo instructions as the preferred path.
- **Version currency (project mission):** all lessons target the current stable Blender release, which is Blender 5.1 as of March 2026. Bump to the next stable when the project's pinned version changes. When updating, audit each lesson for stale version references: explicit version numbers in prose, minimum and recommended system specs, Vulkan vs OpenGL mentions, OS minimums (Apple Silicon required for macOS on 5.x; glibc 2.28+ for Linux), and any feature mentions that became version-specific. The authoritative source is `blender.org/download/requirements/` plus the current release notes.

## Phase plan

| Phase | Section(s) | Images | Inline SVGs | Status |
|---|---|---|---|---|
| 1 | what-is-blender | #1 hero, #2 capabilities | #2 | done |
| 2 | course-structure + learning-mindset | #4, #5, #6 | #4, #5, #6 | done |
| 3 | getting-ready | #11, #12, #10, #8 | #8, #10, #11 | done |

## Placement table (9 available images)

| # | File | Section | Insertion point | Status |
|---|---|---|---|---|
| 1 | `lesson_01_01_blender_hero.png` | what-is-blender | After opening "Imagine having..." paragraph, before "Blender is a free, open-source..." paragraph | done |
| 2 | `lesson_01_02_capabilities.svg` | what-is-blender | After the Swiss Army Knife card's `</div>`, before the "A Brief History Worth Knowing" h3 | done (inline) |
| 3 | `lesson_01_03_use_cases_showcase.png` | what-can-you-create | After the opening "This is where things get exciting..." paragraph, before the "Character Art and Animation" h3 | done |
| 4 | `lesson_01_04_learning_path.svg` | course-structure | In "Course Structure Overview" subsection. Suggest placement: before or after the existing mermaid showing 12 modules. Read the SVG first to confirm orientation and dimensions; pick whichever flanking element gives a cleaner reading flow. | done (inline; placed after the 12-module mermaid) |
| 5 | `lesson_01_05_growth_mindset.svg` | learning-mindset | In "Embrace the Beginner Stage" subsection. Suggest placement: after the "Growth Mindset in Action" card (the green-border card that lists fixed vs growth mindset statements), before the "Patience Is Your Superpower" h3. | done (inline) |
| 6 | `lesson_01_06_learning_curve.svg` | learning-mindset | In "The Plateau Pattern" subsection. Suggest placement: after the existing plateau-pattern mermaid, before the paragraph "When you hit a plateau...". | done (inline) |
| 11 | `lesson_01_11_system_requirements.svg` | getting-ready | In "System Requirements" subsection. Suggest placement: after the "Recommended Requirements (Better Experience)" `<ul>` list, before the "About Your Mouse" info card. | done (inline) |
| 10 | `lesson_01_10_mouse_diagram.svg` | getting-ready | In "Recommended Requirements" area near the "About Your Mouse" info card. Suggest placement: after that info card, before the "Downloading and Installing Blender" h3. | done (inline) |
| 12 | `lesson_01_12_first_launch.png` | getting-ready | In "Downloading and Installing Blender" subsection. Suggest placement: after the 4-step numbered install list, before the "Version Note" info card. | done |
| 8 | `lesson_01_08_folder_structure.svg` | getting-ready | In "Creating Your Learning Environment" subsection. Suggest placement: after the existing `<pre><code>` ASCII folder tree block, before the "Save Early, Save Often" info card. | done (inline) |

Phase 3 rows are listed in document order (System Requirements → Mouse callout → Downloading and Installing → Creating Your Learning Environment), which is also the recommended processing order.

## Caption and alt-text guidance

- **Alt text:** describe the image content factually for screen readers. PNG screenshots get full descriptive alt (what is visible). Inline SVGs keep their own `<title>` and `<desc>`, so no additional alt is needed; the figcaption is the visible label.
- **Figcaption:** one or two sentences, conversational, points the reader at what to notice or how to use the image. Should not just repeat the image title.

## Example: the wrapper patterns

PNG figure (as used for image #1):

```html
<figure>
    <img src="images/lesson_01_NN_slug.png" alt="..." loading="lazy">
    <figcaption>Caption text.</figcaption>
</figure>
```

Inline SVG figure (as used for image #2; preserve the SVG's `role`, `aria-labelledby`, `<title>`, `<desc>` exactly; re-indent the outer `<svg>` to 20-space depth and inner lines proportionally; **DROP the `color="#222"` attribute when inlining**):

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

The next chat integrates image #9 into the HTML. One missing PNG (#7) still needs external sourcing; see `lesson_01_image_prompts.md` for the preferred real-screenshot path (AI generation is a poor fit for a Blender UI screenshot).

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Integrate image #9 (`lesson_01_09_community_resources.svg`) into `lesson_01_welcome_to_blender.html`. Read lesson_01_integration_progress.md first for plan, current state, and locked approach.
Placement: in the `what-is-blender` section, after the "Who Uses Blender?" `<ul>` (the 7-item community list ending with "3D printing enthusiasts") and before the "Real Talk" blockquote. Match the locked approach: plain <figure> + <figcaption>, strip color="#222" from the root <svg> tag, re-indent SVG body to 20-space content depth.
Standing rules: \\wsl$ paths, no new em-dashes in new content, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info. After integration, update the placement table and the available-images list in the progress doc.
If image #7 has been sourced by the time this chat runs, integrate it too: #7 in "Setting Up Your Workspace" in `getting-ready`. PNG figure pattern only.
Warn me if context starts getting tight rather than letting automatic compaction happen.
```
