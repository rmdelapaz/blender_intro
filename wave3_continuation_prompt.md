# Blender Course Lesson 2 — Wave 3 Image Production (continued)

## Project
`blender_course` lesson 2 images, Wave 3. Brand: PetalFawnStudio.

## Paths (always use `\\wsl$\Ubuntu\` — never `\\wsl.localhost\`)
- Course root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Images: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images`
- Style guide (locked v2): `images\IMAGE_STYLE_GUIDE.md`
- Spec: `lesson_02_image_requirements.md`
- Wave 3 raw captures (DO NOT DELETE, may feed future composites):
  - `images\_wave3_temp\shading_01_wireframe.png` (1000×700)
  - `images\_wave3_temp\shading_02_solid.png` (1000×700)
  - `images\_wave3_temp\shading_03_material.png` (1000×700)
  - `images\_wave3_temp\shading_04_rendered.png` (1000×700)
  - Plus three dead-end framing test files in the same dir (`shading_solid_test*.png`); safe to sweep at your convenience
- Wave 2 raw captures (DO NOT DELETE):
  - `images\_wave2_temp\outliner_raw.png` (337×177)
  - `images\_wave2_temp\viewport_raw.png` (1572×899)
- Wave 1 raw captures: `images\_wave1_temp\` (DO NOT DELETE)

## Status going in

**Done, do not touch:**
- Wave 1 (all SVGs from earlier chats)
- Wave 2 SVGs (earlier chats)
- Wave 2 PNGs:
  - `lesson_02_09_outliner_anatomy.png` — 202 KB
  - `lesson_02_04_viewport_header_breakdown.png` — 144 KB
  - `lesson_02_01_annotated_interface.png` — 565 KB
- Wave 3 PNGs:
  - `lesson_02_05_four_shading_modes.png` — 676 KB, 1578×1291
  - `lesson_02_08_workspace_tabs.png` — 647.5 KB, 6846×2280 (PIL synthesis, S=3, all 11 Blender 5.1 workspaces + button)
  - `lesson_02_03_editor_type_selector.png` — 683.5 KB, 3300×3642 (real icon cropped from viewport_raw + synthesized dropdown of all 23 editor types)

**Wave 3 pending:** #10, #13, #14, #15, #16
Read `lesson_02_image_requirements.md` to confirm exact specs per item before starting any of them.

## Blender 5.1 reality vs spec doc

`lesson_02_image_requirements.md` was written against an older Blender version (4.x). Reality in Blender 5.1:

- **Default workspaces: 11**, not 10. Spec omits Scripting. Canonical tab order: Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, Geometry Nodes, Scripting.
- **Editor types in the type-selector dropdown: 23**, not 22. Spec omits Asset Browser. Sections: General (7), Animation (7), Scripting (3), Data (5 incl. Asset Browser), Other (1).

Both #8 and #3 were synthesized to Blender 5.1 truth. Cross-check live Blender before producing any remaining item with an enumerated UI list (especially #13 Preferences categories).

## Locked infrastructure, do NOT relitigate

**MCP tool flavor:** use lowercase `blender:execute_blender_code`. Uppercase `Blender:execute_blender_code` hangs. Tools are deferred; call `tool_search` for "blender" and "filesystem" before invoking.

**NEVER call `bpy.ops.wm.read_factory_settings(use_empty=False)` from Python.** It resets preferences and unregisters the BlenderMCP addon, killing the bridge for the rest of the session. If you need a clean default scene, build it programmatically:
```python
import bpy
# Clear all objects
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
# Default cube at origin
bpy.ops.mesh.primitive_cube_add(location=(0, 0, 0))
# Default point light
light_data = bpy.data.lights.new(name='Light', type='POINT')
light_data.energy = 1000
light_obj = bpy.data.objects.new(name='Light', object_data=light_data)
light_obj.location = (4.08, 1.01, 5.91)
bpy.context.scene.collection.objects.link(light_obj)
```

**Viewport-render override pattern** (verified working):
```python
window = bpy.context.window_manager.windows[0]
screen = window.screen
for area in screen.areas:
    if area.type == 'VIEW_3D':
        viewport_area = area
        viewport_space = next(s for s in area.spaces if s.type == 'VIEW_3D')
        viewport_region = next(r for r in area.regions if r.type == 'WINDOW')
        break

scene = bpy.context.scene
scene.render.resolution_x = 1000
scene.render.resolution_y = 700
scene.render.resolution_percentage = 100
scene.render.filepath = OUT_PATH

with bpy.context.temp_override(window=window, screen=screen,
                                area=viewport_area, region=viewport_region,
                                space_data=viewport_space):
    bpy.ops.render.opengl(view_context=True, write_still=True)
```
The `space_data` slot is required, not just `area`. Hide gizmos and the 3D cursor + object-origins overlays for clean captures:
```python
viewport_space.show_gizmo = False
viewport_space.overlay.show_cursor = False
viewport_space.overlay.show_object_origins = False
```

**Pillow path injection** (required at the top of every Blender Python call; Blender 5.1 on Windows ships with `site.ENABLE_USER_SITE = False`):
```python
import sys, site
user_site = site.getusersitepackages()
if user_site not in sys.path:
    sys.path.insert(0, user_site)
from PIL import Image, ImageDraw, ImageFont
```
Pillow 12.2.0 is at `C:\Users\pract\AppData\Roaming\Python\Python313\site-packages`.

**Font loader** (try in order, fallback to default):
```python
def load_font(size):
    for fname in ["arial.ttf", "segoeui.ttf",
                  "C:\\Windows\\Fonts\\arial.ttf",
                  "C:\\Windows\\Fonts\\segoeui.ttf"]:
        try: return ImageFont.truetype(fname, size)
        except Exception: pass
    return ImageFont.load_default()

def load_bold(size):
    for fname in ["arialbd.ttf", "seguisb.ttf",
                  "C:\\Windows\\Fonts\\arialbd.ttf",
                  "C:\\Windows\\Fonts\\seguisb.ttf"]:
        try: return ImageFont.truetype(fname, size)
        except Exception: pass
    return load_font(size)
```

**Save settings (default):** `img.convert("RGB").save(OUT, optimize=False, compress_level=3)`. `optimize=True` crushes file size below the target band on small images.

**File size target:** 400–800 KB. 800 KB is a HARD ceiling per the spec doc.
- If a render comes in under 200 KB: bump source scale (2× → 3×); switch `Image.NEAREST` to `Image.LANCZOS` resampling on upscale (anti-aliased pixels are less compressible; `_04` jumped 83 KB → 144 KB just from this).
- If a composite comes in OVER 800 KB: first try re-saving with `optimize=True, compress_level=9`. If still over, downsize panels. For 4-panel viewport grids at 10:7 aspect, panels at 720×504 with PetalFawnStudio margins (55 sides, 165 top, 90 bottom, 28 gap) land at ~680 KB. 800×560 panels push to 980 KB raw / 817 KB optimized (over band). Use 720×504 as the default for any future N-panel viewport composite.

## Style constants (locked)

```python
ORANGE = (255, 107, 0, 255)         # brand, arrows, pill borders
WHITE  = (255, 255, 255, 255)       # pill fill
DARK   = (34, 34, 34, 255)          # pill text
MUTED  = (90, 90, 90, 255)          # subtitle, footer text
CANVAS_BG = (245, 245, 245, 255)    # outer canvas
```

Standard canvas pattern: 4px orange strip at canvas top, title + subtitle at top-left, source image inset with margins, footer note bottom-left, all labels as **white-filled rounded-rect pills with orange borders** + 2–3 px orange leader lines + 7–8 px filled orange anchor dot.

Pill helper (locked, works for all single-point callouts; picks leader exit edge automatically based on relative position of anchor):
```python
def pill_with_leader(label, pill_center_x, pill_center_y,
                     anchor_x, anchor_y, font=f_label):
    bbox = draw.textbbox((0, 0), label, font=font)
    tw, th = bbox[2]-bbox[0], bbox[3]-bbox[1]
    pad_x, pad_y = 18, 12
    pill_w, pill_h = tw + pad_x*2, th + pad_y*2
    px0 = pill_center_x - pill_w // 2
    py0 = pill_center_y - pill_h // 2
    px1, py1 = px0 + pill_w, py0 + pill_h
    radius = pill_h // 2
    pcx, pcy = (px0+px1)//2, (py0+py1)//2
    dx, dy = anchor_x - pcx, anchor_y - pcy
    if abs(dx) > abs(dy):
        lx = px1 if dx > 0 else px0
        ly = pcy
    else:
        lx = pcx
        ly = py1 if dy > 0 else py0
    draw.line([(lx, ly), (anchor_x, anchor_y)], fill=ORANGE, width=3)
    r = 8
    draw.ellipse([anchor_x-r, anchor_y-r, anchor_x+r, anchor_y+r], fill=ORANGE)
    draw.rounded_rectangle([px0, py0, px1, py1], radius=radius,
                           fill=WHITE, outline=ORANGE, width=3)
    draw.text((px0 + pad_x - bbox[0], py0 + pad_y - bbox[1]),
              label, font=font, fill=DARK)
```

For **region callouts** (whole-panel labels like in #1), draw 4px orange stroke rectangles on a separate RGBA overlay layer composited via `Image.alpha_composite`, with labels in canvas margins (typical: 360 left / 380 right / 220 top / 180 bottom).

For **panel-header pills** (centered top labels on grid panels, like the four shading-mode labels): position `pill_y_top = panel_y + 18`, padding `pad_x=20, pad_y=11`, font bold 30 (smaller than the 34 used for single-point callouts).

## Blender 5.1 dark theme colors (sampled and verified)

Sampled during Wave 3 from `lesson_02_11_default_startup_scene.png` and `viewport_raw.png`:

**Topbar / workspace tabs (used in #8):**
```python
TOPBAR_BG     = (24, 24, 24)     # main topbar background
ACTIVE_PILL   = (215, 215, 215)  # active tab pill (Layout)
ACTIVE_TEXT   = (19, 19, 19)     # text on active pill
INACTIVE_TEXT = (181, 181, 181)  # inactive tab labels
```

**Popup dropdown menus (used in #3 editor-type dropdown):**
```python
DROPDOWN_BG       = (38, 38, 38)
DROPDOWN_SECT_BG  = (30, 30, 30)    # slightly darker section header rows
DROPDOWN_BORDER   = (12, 12, 12)
ITEM_TEXT         = (220, 220, 220)
SECT_TEXT         = (140, 140, 140)  # smaller all-caps section labels
ACTIVE_BG         = ORANGE          # brand orange doubles as Blender's accent on synthesized menus
ACTIVE_TEXT_COL   = WHITE
```

These carry over directly to **#13 Preferences** (Blender preferences window has dropdown-style left sidebar) and **#14 Quick Favorites** (same popup chrome).

## Synthesis recipe (for flat-color UI synthesis)

For PIL-synthesized UI elements (dropdowns, tab strips, menus) where the canvas is mostly flat color, PNG compression flattens file size dramatically. The recipe that landed both #8 and #3 in the 400-800 KB band:

1. Render with all geometry constants multiplied by `S = 3` (font sizes, padding, widths).
2. Save with `optimize=False, compress_level=1` (less aggressive PNG compression preserves more bytes than the default `compress_level=3`).
3. Add a soft drop shadow under the composited UI element. Improves visual polish AND boosts file size (gradient pixels resist flat-compression):

```python
shadow_layer = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow_layer)
sd.rectangle([elem_x - 18*S, elem_y - 8*S,
              elem_x + elem_w + 18*S, elem_y + elem_h + 18*S],
             fill=(0, 0, 0, 100))
shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(radius=18*S))
canvas = Image.alpha_composite(canvas, shadow_layer)
canvas.paste(ui_element_rgba, (elem_x, elem_y))
```

Quick reference for size progression at S=3:
- Flat synthesis only (no shadow), compress_level=3: ~56 KB at S=1, ~130 KB at S=2 → under floor
- Add drop shadow at S=2, compress_level=3: ~150 KB → still under floor
- Drop shadow at S=3 + compress_level=1: ~650 KB → in band

## Critical workflow rules

1. **Pixel-sample to find anchors, don't guess.** Initial coordinate guesses on Wave 2 were off by ~20 px until brightness sampling along rows/columns located actual icon clusters. Pattern: sample row brightness across a y-range averaging over a small band (e.g. y=8..25), threshold at ~100, detect contiguous bright runs. Same trick works column-wise for panel-separator detection (look for brightness drops to ~22 = dark separator line).
2. **Render, view, re-render.** Always `copy_file_user_to_claude` + `view` the result before considering a deliverable done. Layout problems are easier to spot visually than to reason about.
3. **One image per chat ideal, two if simple.** Wave 3 chat A took the whole context just for #5 (four captures + composite + size-tune iteration).
4. **No em-dashes** in any catalog notes or commit-style log entries (Ray's standing rule across all projects).
5. **Warn before context gets tight** so Ray can start a new chat rather than letting auto-compaction happen.

## Verified source coordinates

**Default startup scene (`lesson_02_11_default_startup_scene.png`, 1920×1046):**
- Top menubar (File/Edit/...): y=0..15
- Workspaces tabs: y=16..38
- Viewport header: y=39..73 across x=0..1574
- Toolbar: x=0..73, y=74..977
- 3D Viewport content: x=74..1574, y=74..977
- Outliner: x=1575..1919, y=39..217
- Properties: x=1575..1919, y=218..977
- Timeline: y=978..1045 full width

**Outliner raw (337×177):** rows at y≈55 (Scene Collection), 82 (Collection), 111 (Camera), 140 (Cube), 167 (Light); cols x≈35 (disclosure arrow), 90 (object-type icon), 215 (data-type icon), 285 (eye toggle), 317 (camera toggle).

**Viewport raw (1572×899), header strip y=0..34:** Mode dropdown src_x=130, menus src_x=270 (View) → 470 (Object), Global dropdown src_x≈700, snap-magnet icon src_x≈800, X-Ray icon src_x≈1265, 4 shading spheres src_x=1391..1497 (center ≈1430), shading-options caret src_x≈1510.

## Wave 3 pending: source notes per item

- **#10 Toolbar and Sidebar Toggle.** TWO fresh viewport captures (T+N visible vs both hidden). Before/after composite with key-cap callouts.
- **#13 Preferences Window Overview.** Fresh Blender capture of Preferences window with Save & Load section selected. Open via `bpy.ops.screen.userpref_show()`.
- **#14 Quick Favorites Menu.** Fresh capture of Q-key menu open. Requires items in Quick Favorites first (right-click "Add to Quick Favorites" on a few default ops).
- **#15 Custom Workspace Creation Steps.** Three-panel sequence (cursor on +, name dialog, new tab appearing). Synthesize from workspace tab strip in `lesson_02_11_default_startup_scene.png`.
- **#16 Resize Areas Visual Guide.** Before/after of viewport-Outliner border with double-arrow cursor overlay. Needs a cursor glyph drawn at the border seam.

## Recommended next target

**#15 Custom Workspace Creation Steps** is the cleanest next target: pure PIL synthesis reusing the workspace tab strip pattern from #8, no fresh Blender capture needed. Three-panel sequence: (1) cursor on +, (2) name dialog appearing, (3) new tab added. The Blender 5.1 colors and synthesis recipe below carry over directly.

After #15, suggested order: #16 (cursor overlay on viewport-Outliner seam, lightweight), then #13 (Preferences, single fresh capture), then #10 (T/N toggle, two captures with viewport-override), then #14 (Quick Favorites, most setup work because Quick Favorites must be seeded first).

## First action

Read `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_02_image_requirements.md` to see the exact spec for Wave 3 items #10, #13, #14, #15, #16. Then ask me which item to start with.
