# Lesson 01 Image Prompts

AI image generator prompts for images that cannot be produced inside a Claude chat (PNG screenshots, real-world photography, photorealistic renders). Use these as starting prompts in Adobe Firefly, ChatGPT (DALL-E), Midjourney, or any other text-to-image tool, then drop the chosen output into `images/` with the exact filename in each section below.

## Why this file exists

The project's locked approach mandates that any chat which identifies a missing raster (PNG/JPEG) image must also generate AI-image-generator prompts for that image. The prompts in this file are portable across the three major commercial generators (Firefly, DALL-E, Midjourney) and include explicit notes for cases where AI generation is a poor substitute for a real screenshot or photograph.

## How to use these prompts

1. Pick a generator. Firefly tends to produce the most "designed" output (good for collages and infographics). DALL-E is strong at literal scene composition. Midjourney is strongest at photorealism and stylized illustration.
2. Paste the platform-specific prompt for that generator. Optional negative prompts are listed where they help.
3. Generate 4 to 8 variations. Pick one that matches the acceptance criteria.
4. Crop or resize to the target aspect ratio if needed.
5. Save with the exact filename to `images/` in the project root.
6. Open the next chat for integration; the placement anchors are already in `lesson_01_integration_progress.md`.

If a generator refuses a prompt (Firefly especially flags "Blender" or other branded software names), substitute "3D creation software" or "3D modeling application" and regenerate.

---

## Image #3: lesson_01_03_use_cases_showcase.png

**Target placement:** `why-blender` section, illustrating the breadth of what Blender can produce. Could also be placed in `what-can-you-create`.

**Visual goal:** a single composition that visually surveys the use cases Blender supports: character art, environments and worldbuilding, architectural visualization, product renders, VFX or motion graphics, and game assets. The viewer should immediately read "this one tool covers all of this."

**Composition:** a 2x3 or 3x2 grid of small 3D-rendered scenes, each a distinct discipline. Clean separators or subtle drop shadows between panels. Light or neutral background so the panels carry the color. Modern design portfolio aesthetic.

**Aspect ratio:** 16:9 (wide), or 3:2 if the layout pushes more square. Output at 1600x900 or larger; downsample on save.

**Cohesion with the lesson:** the existing PNGs in this lesson (#1 hero, #12 first_launch) are clean and modern. This image should feel like it belongs with them, not in a different visual register.

### Firefly prompt

```
A clean 6-panel grid composition showcasing diverse 3D-rendered scenes:
panel 1, a stylized cartoon character with expressive features standing in a neutral pose;
panel 2, a futuristic sci-fi cityscape at golden hour with glowing windows;
panel 3, a photorealistic architectural interior of a modern minimalist living room with soft natural light;
panel 4, a polished product render of consumer electronics on a seamless studio backdrop;
panel 5, a stylized fantasy creature in a misty forest;
panel 6, abstract colorful geometric motion graphics with flowing ribbons.
Each panel is its own 3D render, separated by subtle thin white gaps. Modern design portfolio aesthetic. Vibrant but tasteful colors. Wide 16:9 aspect ratio.
```

Firefly settings: Content type "Art", Style "3D", Color theme "Vivid". If the generated panels blur together, regenerate with "clean panel borders" added.

### ChatGPT / DALL-E prompt

```
Create a 16:9 image composed as a 2x3 grid (2 rows, 3 columns) of distinct 3D-rendered scenes, each in a different discipline of 3D art:
1. Top-left: a stylized 3D cartoon character, full body, expressive
2. Top-middle: a sci-fi cityscape with futuristic skyscrapers at sunset
3. Top-right: a photorealistic 3D architectural interior of a modern living room
4. Bottom-left: a 3D product render of headphones or a smartwatch on a clean studio backdrop
5. Bottom-middle: a stylized 3D fantasy creature in a forest setting
6. Bottom-right: abstract 3D motion graphics with flowing geometric ribbons
The panels are separated by thin clean white lines. Each panel renders cleanly without bleeding into the next. The overall image evokes the breadth of professional 3D creation work.
```

### Midjourney prompt

```
2x3 grid composition of six distinct 3D rendered scenes :: stylized cartoon character, sci-fi cityscape at golden hour, photorealistic minimalist living room, polished product render of consumer electronics on studio backdrop, fantasy creature in misty forest, abstract motion graphics ribbons :: clean white panel separators :: modern design portfolio aesthetic :: vibrant tasteful colors --ar 16:9 --v 7 --style raw
```

### Negative prompts (for tools that support them)

`text, words, logos, watermark, signature, ui elements, software interface, menus, buttons, wireframe, blueprint, low quality, blurry`

### Acceptance criteria

- All 6 panels visually distinct and immediately readable as 6 different 3D disciplines
- No text or UI elements anywhere in the image
- Color palette feels coherent across panels even if individual styles differ
- Panel separators clean (no blurring or merging at boundaries)
- No watermarks, signatures, or generator artifacts
- Stylistically compatible with `lesson_01_01_blender_hero.png` and `lesson_01_12_first_launch.png`

### Notes on licensing

If you use Firefly, the output is commercially safe under Adobe's IP indemnification. If you use Midjourney or DALL-E, check the relevant terms for the plan you are on. For a public-facing course, prefer Firefly for the cleanest licensing story.

---

## Image #7: lesson_01_07_workspace_setup.png

**Target placement:** "Setting Up Your Workspace" subsection in `getting-ready`. Illustrates Blender's workspace tab system and recommended workspace ordering.

**Strong recommendation: do NOT use AI generation for this one.** A real Blender screenshot is dramatically more useful than any AI image. AI generators do not know Blender's actual UI and will hallucinate workspace tab names, panel layouts, and button labels. For a learning resource, that is worse than no image.

### Preferred path: real screenshot

1. Launch Blender 5.1 (or 5.1.1). The splash will appear; close it.
2. Confirm the Top Bar shows the default workspace tabs in order: Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, Geometry Nodes, Scripting.
3. Stay on the "Layout" workspace (the default). The viewport should show the startup cube with the camera and light.
4. Capture the full Blender window at 1920x1080 or 1600x900 (use OS screenshot tools or `Window > New Window` then resize).
5. Optional crop: focus on the top half of the window so the workspace tab strip dominates, with the 3D viewport visible below. Final crop around 1600x900 or 16:9.
6. Save as PNG to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_01_07_workspace_setup.png`.

### Fallback only: AI prompts for a stylized illustration

These produce a generic "creative 3D workspace" illustration that does NOT pretend to be a real Blender UI. Use only if a real screenshot is unavailable and you are okay with a stylized non-literal image at this placement.

**Firefly prompt:**

```
A stylized illustration of a creative 3D modeling workspace on a desktop computer monitor. The screen shows a generic 3D modeling application with a dark UI theme, multiple side panels, a 3D viewport in the center showing a low-poly geometric scene with a single cube and simple lighting, and a row of workspace tabs across the top. Not a literal screenshot. Clean modern illustration style with flat colors. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:**

```
A clean stylized illustration (not a photorealistic screenshot) of a creative 3D-modeling workspace shown on a computer monitor. Dark UI theme. Center area shows a simple 3D viewport with a single low-poly cube on a grid floor, a camera, and a light. Sidebars on the right show generic property panels with sliders and icons. Across the top, a strip of workspace tab labels (do not write any real software names; use generic placeholders or abstract icons). Wide 16:9 framing. Modern illustration style. No real software branding.
```

**Midjourney prompt:**

```
stylized illustration of a 3D modeling application workspace on a desktop monitor :: dark UI theme, central 3D viewport with simple low-poly cube on grid floor, property panel sidebar, generic tab strip at top :: clean modern illustration style :: no real software branding :: not photorealistic --ar 16:9 --v 7
```

**Negative prompts:**

`real photograph, photo realistic, specific software, Blender logo, Adobe logo, Maya logo, real UI text, real menu items, lens flare, depth of field`

### Acceptance criteria for the fallback

- Image is clearly stylized illustration, not pretending to be a real screenshot
- No real software branding visible
- Dark UI theme matches Blender's general aesthetic without imitating its layout
- The viewport is clearly identifiable as a 3D editing space
- No hallucinated text labels that would confuse a learner

### Why we prefer the real screenshot

The image's caption will tell students which workspace to use and what the tab strip looks like. An AI illustration cannot convey accurate workspace tab names, and a learner who studies the image will look for the same UI in their own Blender and not find it. Spend 60 seconds taking a real screenshot.

---

## Standing notes for future image prompt files

When the project produces additional `lesson_NN_image_prompts.md` files:

- Match this file's structure: per-image section with placement, goal, composition, platform prompts, negative prompts, acceptance criteria.
- Always note when AI generation is a poor fit (UI screenshots, real-world hardware, brand-specific imagery) and recommend the alternative explicitly.
- Generators that refuse branded names (Blender, Adobe, etc.) take generic substitutions; document the substitution inline so the prompt user sees it before they paste.
- Acceptance criteria should be specific enough that someone outside this chat can judge "yes/no, this output is usable."
