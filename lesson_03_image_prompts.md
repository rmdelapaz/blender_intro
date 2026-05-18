# Lesson 03 Image Prompts

AI image generator prompts and Blender screenshot capture instructions for the six PNGs Lesson 03 needs. Use these as starting prompts in Adobe Firefly, ChatGPT (DALL-E), or Midjourney; or follow the capture steps to take real Blender 5.1 screenshots. Drop the chosen output into `images/` with the exact filename in each section below.

## Why this file exists

The project's locked approach mandates that any lesson with missing raster images document the production path. Lesson 03 has 12 inline SVGs (authored directly in chat) plus 6 PNGs (captured from Blender). All six PNGs are Blender UI screenshots where literal accuracy matters far more than generator aesthetics.

## Strong recommendation: real Blender screenshots, not AI

Every PNG in this lesson depicts Blender's actual interface. AI image generators do not know Blender's literal UI and reliably hallucinate workspace tab names, panel layouts, header buttons, and gizmo widgets. For a learning resource, an inaccurate screenshot is worse than no image at all, because students will look for the same UI in their own Blender and not find it.

The capture path for each PNG below is fast (under three minutes per image) once Blender is open. Take the screenshots.

If a real capture is impossible, AI prompts are provided as a clearly labeled fallback. The fallback prompts produce stylized illustrations that do not pretend to be real screenshots.

## How to capture Blender screenshots cleanly

The standard capture pattern, used successfully for `lesson_01_07_workspace_setup.png`:

1. Open Blender 5.1.x with the default startup scene (cube, camera, light).
2. Set up the scene state needed for the image (described in each section below).
3. From Blender's Python console or scripting workspace, run:
   ```python
   import bpy
   bpy.ops.screen.screenshot(filepath=r"\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_03_NN_slug.png")
   ```
   This captures the full Blender window, including header, workspace tabs, toolbar, viewport, and properties panels.
4. Confirm the output file exists and renders correctly (open it in an image viewer).
5. Optional crop in any image editor if a tighter focus is needed. Save as PNG.

For composite images (Frame All vs Frame Selected, Local View before/after), take two screenshots and combine them side by side in an image editor.

The MCP Blender bridge (`blender:execute_blender_code`) can run the screenshot command remotely if Ray's Blender is open and the bridge is connected. **Important:** the bridge uses the lowercase `blender:` namespace via the ahujasid uvx server, and the capital-B `Blender:` extension stays disabled in Claude Settings to avoid the addon conflict that drops the connection mid-call. Ping `blender:get_scene_info` as the connection check before issuing any capture. Do NOT use `blender:get_viewport_screenshot` for these UI screenshots: it captures only the 3D viewport region and loses the header, tabs, and panels that every Lesson 03 PNG needs to show.

---

## Image #6: lesson_03_06_perspective_vs_orthographic.png

**Target placement:** `perspective-ortho` section, in "Visual Comparison" subsection. After the existing mermaid block, before the "Practical Usage Tips" h3.

**Visual goal:** side-by-side comparison of the same scene rendered in perspective view vs. orthographic view, so the depth distortion vs. flat parallel lines is immediately legible.

### Preferred path: real Blender screenshots, composited

1. Open Blender 5.1 with the default scene. Add two more objects so depth is visible:
   - `Shift + A` → Mesh → UV Sphere, then `G X 3 Enter` to move it 3 units along X.
   - `Shift + A` → Mesh → Cone, then `G X -3 Enter` to move it back along X.
2. Free-orbit to a three-quarter view where all three objects (cube center, sphere right, cone left) are visible and the difference between near and far will be obvious.
3. **Capture 1 (Perspective):** confirm "User Perspective" appears in the viewport's top-left corner. Run the screenshot command above with filepath `..._perspective_raw.png`.
4. **Capture 2 (Orthographic):** press `Numpad 5` to toggle. Confirm "User Orthographic" appears. Capture with filepath `..._ortho_raw.png`.
5. In an image editor, place the two captures side by side at the same scale, label each panel "Perspective" and "Orthographic" using a clean sans-serif font in Blender orange `#FF6B00`, and export as `lesson_03_06_perspective_vs_orthographic.png` at 1600 wide or larger.

### Fallback: AI prompts (use only if a real capture is impossible)

**Firefly prompt:**

```
A side-by-side educational comparison of two 3D viewport renderings of the same scene. Left panel labeled "PERSPECTIVE": multiple 3D shapes (cube, sphere, cone) arranged on a grid floor, with clear perspective foreshortening where distant objects appear smaller and parallel grid lines converge toward a vanishing point. Right panel labeled "ORTHOGRAPHIC": exactly the same scene from the same angle, but with all parallel lines staying parallel, objects the same apparent size regardless of distance, blueprint-style flat technical rendering. Clean educational diagram style. Identical lighting and shapes between panels. Dark neutral backdrop. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:**

```
Create a 16:9 educational comparison image with two panels separated by a thin vertical line. Left panel labeled "Perspective": a simple 3D scene with a cube, a sphere, and a cone on a grid floor, rendered with strong perspective so far objects look smaller and grid lines converge. Right panel labeled "Orthographic": the exact same scene from the exact same angle, but rendered with no perspective at all, so parallel grid lines stay parallel and objects keep their true size at any distance. Use the same lighting in both panels. Style: clean educational diagram, not photorealistic.
```

**Midjourney prompt:**

```
side by side 3D viewport comparison :: left panel labeled perspective shows cube sphere cone on grid floor with converging perspective lines :: right panel labeled orthographic shows identical scene with parallel lines staying parallel :: clean educational diagram style :: thin white panel separator --ar 16:9 --v 7 --style raw
```

**Negative prompts:** `text in viewport, software UI, menus, buttons, watermark, signature, blurry, photorealistic landscape, real photograph`

**Acceptance criteria:**

- Both panels show the same shapes from the same angle.
- The perspective panel clearly shows depth foreshortening.
- The orthographic panel clearly shows parallel lines staying parallel.
- Labels "Perspective" and "Orthographic" readable on both light and dark page backgrounds.
- No hallucinated UI elements.

---

## Image #9: lesson_03_09_camera_view_frame.png

**Target placement:** `camera-view` section, "The Camera Frame" subsection. After the bullet list describing frame elements (ending "Triangles at corners"), before the "Composition in Camera View" info card.

**Visual goal:** Blender's camera view with the render boundary frame, dashed safe-area guides, center cross, and corner triangles all clearly visible and annotated.

### Preferred path: real Blender screenshot, annotated

1. Open Blender 5.1 with the default scene.
2. Press `Numpad 0` to enter camera view. Confirm "Camera" appears in the viewport top-left.
3. Optional: turn on safe-area overlays. With the camera selected, in Properties → Object Data Properties (camera icon) → Viewport Display → check "Composition Guides" → enable "Center" and "Title Safe".
4. Capture the full window with the screenshot command above.
5. In an image editor, add four annotation labels with leader lines pointing at: the solid render-boundary frame, the dashed safe-area lines, the center cross, and a corner triangle. Use Blender orange `#FF6B00` for leader lines and labels. Export at 1600 wide.

### Fallback: AI prompts

**Firefly prompt:**

```
A stylized illustration of a 3D modeling application's camera view. Dark UI background. Centered on screen: a rectangular solid frame representing the render boundary; inside that frame, a smaller dashed rectangle representing safe areas; a small plus sign at the exact center; small triangle markers in each corner of the solid frame. Visible inside the frame: a simple low-poly cube on a grid floor. Four annotation labels with leader lines point at: the solid frame ("Render Boundary"), the dashed inner rectangle ("Safe Areas"), the center plus ("Center Cross"), and a corner triangle ("Corner Marker"). Clean educational illustration style. Not photorealistic. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:** Same description as Firefly, plus: "Use a flat illustration style, dark blue background, white outlines for the frame, Blender-style orange for the annotation labels. Do not use any real software logos."

**Midjourney prompt:**

```
3D software camera view illustration :: solid rectangular render boundary frame with dashed safe area guides inside, plus sign at center, small triangles in corners :: simple low poly cube on grid floor inside frame :: four annotation labels with leader lines :: dark UI background :: clean educational diagram style :: no real software branding --ar 16:9 --v 7
```

**Negative prompts:** `real photograph, photorealistic, specific software logo, real menu items, lens flare`

**Acceptance criteria:**

- Render boundary frame clearly visible as a solid rectangle.
- Safe area dashed lines clearly visible inside it.
- Center cross and corner triangles legible.
- Four annotation labels readable.
- No real software UI text or branding.

---

## Image #10: lesson_03_10_frame_all_vs_selected.png

**Target placement:** `focus-frame` section, after the "Try It Now: Frame Selected" card, before the `<h3>Zoom to Mouse Cursor</h3>`.

**Visual goal:** two-panel comparison showing the same scene before/after a Frame Selected operation. Left panel: scene with multiple objects all visible (Frame All result). Right panel: same scene zoomed to a single selected object (Frame Selected result).

### Preferred path: two real Blender screenshots, composited

1. Open Blender 5.1, build the navigation playground scene from Lesson 03's project: default cube plus UV Sphere at X+3, Cone at X-3, Torus at Z+2, Cylinder at Y+3.
2. **Capture 1:** press `Home` to Frame All. Capture with filepath `..._frame_all_raw.png`.
3. **Capture 2:** click to select the UV Sphere (it gets an orange outline). Press `Numpad .` to Frame Selected. Capture with filepath `..._frame_selected_raw.png`.
4. Composite both side by side at the same scale, label "Frame All (Home)" left and "Frame Selected (Numpad .)" right in Blender orange. Export as `lesson_03_10_frame_all_vs_selected.png`.

### Fallback: AI prompts

**Firefly prompt:**

```
A two-panel educational comparison of a 3D viewport. Left panel labeled "Frame All": a 3D scene viewport showing five distinct low-poly objects (cube, sphere, cone, torus, cylinder) arranged on a grid floor, all visible and well-framed in the viewport. Right panel labeled "Frame Selected": the same scene but the viewport has zoomed in to focus on only the sphere; the sphere has a bright orange selection outline; the other objects are barely visible at the edges. Dark UI background. Clean illustration style. Identical viewport size in both panels. Not photorealistic. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:** Same as Firefly, plus: "Use a clean flat style with a grid floor in both panels. The selection outline on the sphere in the right panel should be a bright orange. Labels in Blender-style orange below each panel."

**Midjourney prompt:**

```
two panel 3D viewport comparison :: left panel labeled Frame All shows five low poly objects cube sphere cone torus cylinder on grid floor all visible :: right panel labeled Frame Selected shows same scene zoomed in tight on the sphere with orange selection outline :: dark UI background :: clean educational illustration :: thin white panel separator --ar 16:9 --v 7
```

**Negative prompts:** `photorealistic, real software UI, menus, watermark, real photograph`

**Acceptance criteria:**

- Five objects visible in left panel.
- Right panel clearly focused on one object with selection highlight.
- Both panels rendered at the same scale and style.
- Labels clearly identify which is which.

---

## Image #11: lesson_03_11_local_view_demo.png

**Target placement:** `focus-frame` section, "The Local View" subsection. After the "Try It Now: Local View" info card, before the "Local View Gotcha" warning card.

**Visual goal:** two-panel before/after showing local view in action. Left panel: cluttered scene with multiple objects. Right panel: same scene after pressing `Numpad /` with the cube selected, so only the cube is visible and "(Local)" is showing in the viewport top-left.

### Preferred path: two real Blender screenshots, composited

1. Open Blender 5.1, build the same playground scene as image #10.
2. **Capture 1 (Normal view):** Frame All so all five objects are visible. Capture with filepath `..._local_off_raw.png`.
3. **Capture 2 (Local view):** click to select the cube. Press `Numpad /`. Confirm "User Perspective (Local)" or similar appears in the viewport top-left. Capture with filepath `..._local_on_raw.png`.
4. Composite side by side, label "Normal View" left and "Local View: only selection visible" right. Export as `lesson_03_11_local_view_demo.png`.

### Fallback: AI prompts

**Firefly prompt:**

```
A two-panel educational comparison of a 3D viewport. Left panel labeled "Normal View": a 3D scene viewport showing five distinct low-poly objects (cube, sphere, cone, torus, cylinder) on a grid floor, all visible. Right panel labeled "Local View Isolated": the same viewport but only the cube is visible, with the other four objects completely hidden; small text in the top-left of the right panel reads "(Local)". Dark UI background. Clean educational illustration. Identical viewport framing in both. Not photorealistic. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:** Same as Firefly, with note: "The left panel and right panel should be identical in framing, camera angle, and lighting. Only the visible objects differ. The right panel shows the cube alone, the others completely hidden."

**Midjourney prompt:**

```
two panel 3D viewport comparison :: left panel labeled Normal View shows cube sphere cone torus cylinder on grid floor :: right panel labeled Local View shows only the cube on the same grid floor with everything else hidden :: small Local indicator text top-left of right panel :: dark UI background :: clean educational illustration style --ar 16:9 --v 7
```

**Negative prompts:** `photorealistic, real software UI, real menu items, lens flare, watermark`

**Acceptance criteria:**

- Both panels framed identically.
- Left panel: all objects visible.
- Right panel: only the cube visible.
- "(Local)" indicator legible in right panel.

---

## Image #15: lesson_03_15_camera_to_view.png

**Target placement:** `camera-view` section, "Moving the Camera" → "Method 2: Camera View Navigation". After the "Camera to View" info card.

**Visual goal:** screenshot of camera view with the N-panel sidebar open, scrolled to the View tab, with the "Camera to View" checkbox highlighted/circled.

### Preferred path: real Blender screenshot, annotated

1. Open Blender 5.1 with default scene.
2. Press `Numpad 0` to enter camera view.
3. Press `N` to open the sidebar. Click the "View" tab in the sidebar.
4. Confirm the "View Lock" or "Camera to View" checkbox is visible.
5. Capture the full window.
6. In an image editor, add a bright orange callout circle around the "Camera to View" checkbox and a leader line to a label "Camera to View: enable this to move the camera by orbiting". Export as `lesson_03_15_camera_to_view.png`.

### Fallback: AI prompts

**Firefly prompt:**

```
A stylized illustration of a 3D modeling application's interface. Main area shows a camera view with a rectangular render frame around a simple 3D scene. On the right side of the screen, a sidebar panel labeled "View" is open, showing various checkboxes. One checkbox labeled "Camera to View" is highlighted with a bright orange circle around it, with a leader line pointing to a label explaining "Enable to move the camera by navigating". Dark UI background. Clean educational illustration. Not photorealistic. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:** Same as Firefly.

**Midjourney prompt:**

```
3D software interface illustration :: main camera view with render frame around simple scene :: right sidebar panel labeled View with checkboxes :: one checkbox labeled Camera to View circled in orange with annotation leader line :: dark UI background :: educational diagram style :: no real software branding --ar 16:9 --v 7
```

**Negative prompts:** `real software logo, real menu items, photorealistic, lens flare`

**Acceptance criteria:**

- Camera view frame visible in the main area.
- Sidebar panel clearly shown on the right.
- "Camera to View" checkbox highlighted unambiguously.
- Annotation readable on light and dark backgrounds.

---

## Image #16: lesson_03_16_quadview_layout.png

**Target placement:** `advanced-techniques` section, "Quadview: See Four Views at Once" subsection. After the "Toggle Quadview" card, before the "Try It Now: Quadview" card.

**Visual goal:** screenshot of Blender with quadview enabled (`Ctrl + Alt + Q`), showing the four-quadrant layout with each quadrant labeled (Top Ortho top-left, Front Ortho top-right, Right Ortho bottom-left, User Persp bottom-right) and the default scene visible in each.

### Preferred path: real Blender screenshot, annotated

1. Open Blender 5.1 with default scene.
2. Hover the mouse over the 3D viewport. Press `Ctrl + Alt + Q` to toggle quadview.
3. Confirm four panels appear, each showing a different angle. The bottom-right panel is the only one in perspective by default.
4. Capture the full window.
5. In an image editor, add four small annotation labels in each quadrant's corner identifying the view ("Top", "Front", "Right", "User Persp"). Use Blender orange `#FF6B00`. Export as `lesson_03_16_quadview_layout.png`.

### Fallback: AI prompts

**Firefly prompt:**

```
A stylized illustration of a 3D modeling application's viewport divided into four equal quadrants. Each quadrant shows the same scene of a cube on a grid floor from a different angle. Top-left labeled "Top": looking straight down, the cube appears as a square. Top-right labeled "Front": looking horizontally, the cube appears as a square. Bottom-left labeled "Right": looking from the side, the cube appears as a square. Bottom-right labeled "User Perspective": three-quarter angle showing the cube in proper 3D perspective. Thin white dividers separate the quadrants. Dark UI background. Clean educational illustration. Not photorealistic. 16:9 aspect ratio.
```

**ChatGPT / DALL-E prompt:** Same as Firefly.

**Midjourney prompt:**

```
3D software quadview illustration :: viewport divided into four equal quadrants showing same cube on grid floor :: top-left labeled Top shows top-down view :: top-right labeled Front shows front view :: bottom-left labeled Right shows side view :: bottom-right labeled User Persp shows three quarter angle :: thin white dividers :: dark UI background :: educational diagram style --ar 16:9 --v 7
```

**Negative prompts:** `photorealistic, real software branding, lens flare, watermark, real menu items`

**Acceptance criteria:**

- Four equally sized quadrants visible.
- Each quadrant labeled correctly.
- Same scene shown from each angle.
- Bottom-right clearly in perspective; the other three clearly orthographic.

---

## Production order

When a future chat is ready to take the screenshots, this is the suggested order. The first three (#6, #9, #11) are the highest priority because they sit in the most heavily content-loaded sections; the others can follow.

1. #6 perspective_vs_orthographic.png
2. #9 camera_view_frame.png
3. #11 local_view_demo.png
4. #10 frame_all_vs_selected.png
5. #15 camera_to_view.png
6. #16 quadview_layout.png

Plan on a single Blender session of 15-25 minutes to capture all six, since several share the same playground scene (cube plus four extra objects). Build the playground once, then iterate through the captures, adjusting only the view mode or selection between shots.

## Standing notes

- Save final outputs to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\` with the exact filenames in each section heading.
- Always use `\\wsl$\` paths, never `\\wsl.localhost\`.
- After producing a PNG, update `lesson_03_integration_progress.md` to move it from the "missing" list to the "available" list.
- For Lesson 03 the AI-fallback path is genuinely a last resort. Every PNG depicts Blender's UI, and AI generators cannot draw Blender's UI accurately. The capture path is fast; use it.
