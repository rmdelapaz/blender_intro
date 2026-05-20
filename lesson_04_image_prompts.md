# Lesson 04 Image Prompts and Capture Instructions

Covers the 4 PNG raster images that Lesson 04 needs. The 10 SVG images in this lesson are authored directly in code per the locked house style and do not need prompts. For every PNG below, the preferred sourcing route is a live Blender 5.1 viewport capture via the MCP Blender bridge; AI generation (Adobe Firefly via the Adobe for creativity MCP, or Canva AI image generator) is documented as a fallback only.

## Tool selection for capture

Per the locked rules in `lesson_03_completion_handoff.md`:

- Lowercase `blender:execute_blender_code` for all Blender Python calls (uppercase hangs).
- `bpy.ops.screen.screenshot()` inside `bpy.context.temp_override` with the VIEW_3D WINDOW region for full-window captures that preserve panels.
- For pure viewport captures without panels, `bpy.ops.render.opengl(write_still=True)` or `bpy.context.scene.render.filepath` + `bpy.ops.render.opengl()`.
- Save captures to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_NN_slug.png`.
- Annotations (highlight ellipses, corner labels in Blender orange `#FF6B00`) added in a post-capture step via PIL or as a second SVG overlay during integration. The Lesson 03 #15 camera_to_view PNG and #16 quadview PNG demonstrated the precise annotation pattern (ellipse with measured pixel coordinates, corner labels at fixed offsets).

For AI fallback when Blender capture is impossible:

- **Adobe Firefly via Adobe for creativity MCP:** call the relevant Firefly generation tool with the prompt below. Acceptance criteria gate whether the output is usable.
- **Canva AI image generator:** use Canva MCP if Firefly is unavailable; same prompt with light reformatting for Canva's preferred imperative style.

PNGs that fail acceptance criteria from AI generation should fall back to a manual screenshot by Ray on his Blender 5.1 install. Document any fallback path in this file as a new note when it happens.

### Addon safety note (added 2026-05-19)

Do NOT call `bpy.ops.wm.read_factory_settings(use_empty=False)` from MCP-executed code. That call reloads Blender's startup file, which forcibly unregisters all addons including BlenderMCP, killing the socket and ending the session mid-execution. Recovery requires restarting Blender and manually re-clicking Start MCP Server in the N-panel BlenderMCP tab. The four PNG state-setup snippets below have been patched to operate on the existing scene without resetting it. For a true factory-clean baseline, restart Blender manually before the capture chat begins; do not try to factory-reset from inside MCP-executed code. This was discovered during the 2026-05-19 Phase 4 production chat after `read_factory_settings` killed the bridge twice in a row before the addon-safe pattern was identified.

---

## Image #8: 3D Cursor Placement

**File:** `lesson_04_08_3d_cursor.png`  
**Section:** 3d-cursor → "What Is the 3D Cursor?"  
**Status:** Not captured.

### Preferred source: live Blender 5.1 capture

**State setup (Blender Python via MCP):**

```python
import bpy

# Assumes a fresh Blender session. Do NOT call read_factory_settings here;
# it unregisters the BlenderMCP addon (see the Addon safety note above).
# If extra objects exist from prior runs, delete them via the UI first.

# Move the 3D cursor to a visible off-center location
bpy.context.scene.cursor.location = (2.5, -1.5, 0.8)

# Add a UV sphere AT the cursor location to demonstrate "new objects spawn at cursor"
bpy.ops.mesh.primitive_uv_sphere_add(
    radius=0.6,
    location=bpy.context.scene.cursor.location
)

# Re-select the default cube so the active outline highlights it; the sphere
# at the cursor stays selected-but-not-active for color contrast
cube = bpy.data.objects.get("Cube")
if cube:
    bpy.ops.object.select_all(action='DESELECT')
    cube.select_set(True)
    bpy.context.view_layer.objects.active = cube
```

**Capture:**

```python
# Position the view so the cursor is roughly centered
# Use a standard user-perspective angle (Numpad 0 alt-1 then orbit a bit)
for area in bpy.context.screen.areas:
    if area.type == 'VIEW_3D':
        for region in area.regions:
            if region.type == 'WINDOW':
                with bpy.context.temp_override(area=area, region=region):
                    # Set a clean user-perspective view
                    bpy.ops.view3d.view_axis(type='FRONT')
                    bpy.ops.view3d.view_orbit(angle=0.6, type='ORBITUP')
                    bpy.ops.view3d.view_orbit(angle=0.4, type='ORBITRIGHT')

# Save the viewport via OpenGL render (no panels, just the viewport)
bpy.context.scene.render.filepath = (
    "//images/lesson_04_08_3d_cursor.png"
)
bpy.context.scene.render.resolution_x = 1280
bpy.context.scene.render.resolution_y = 720
bpy.ops.render.opengl(write_still=True)
```

**Post-capture annotation:** add three Blender-orange `#FF6B00` callouts:

1. Arrow + label "3D Cursor" pointing at the red-white target ring.
2. Arrow + label "New object spawns at cursor" pointing at the UV sphere.
3. Dashed circle around the cursor's location with a small radius (about 50 px) plus a "pivot reference" label nearby. Annotation done in PIL after capture, or as an SVG overlay during HTML integration.

**Acceptance criteria:**

- Cursor visible and clearly off-center, not at world origin.
- UV sphere visibly at the cursor location.
- Default cube selected (orange outline).
- Three annotations readable, all in Blender orange, no overlap.
- Resolution at least 1024 wide for retina-friendly inline display.

### AI fallback prompt (Adobe Firefly)

```
A clean Blender 3D viewport screenshot showing the 3D cursor (a red and white target ring) placed off-center in the scene. A UV sphere has been added exactly at the cursor location, demonstrating that new objects spawn at the cursor. The default cube sits at world origin nearby with a bright orange selection outline. Dark gray viewport background, standard Blender grid floor visible. Three orange annotation callouts: an arrow labeled "3D Cursor" pointing at the target ring, an arrow labeled "New object spawns at cursor" pointing at the sphere, a dashed circle around the cursor with a label "pivot reference" nearby. Modern professional training material style, 16:9 aspect ratio.
```

### AI fallback prompt (Canva AI image generator)

```
Blender 3D viewport screenshot, training material style. Center: a red-and-white 3D cursor target ring placed off-center. A UV sphere sits at the cursor location. The default Blender cube is to the side with a bright orange selection outline. Dark gray background, grid floor. Three orange annotations: "3D Cursor", "New object spawns at cursor", "pivot reference". 16:9, high contrast, suitable for embedding in a course web page.
```

### AI acceptance criteria

- The cursor target must be the recognizable red-and-white circle pattern, not a generic cursor or arrow.
- Annotations must be in Blender orange `#FF6B00`, readable at 800 px width.
- No fictional Blender UI elements (the AI may invent fake panel layouts; the image needs to look authentic).
- If the AI image fails on cursor authenticity, fall back to live Blender capture.

---

## Image #9: Snap Menu Visual Reference

**File:** `lesson_04_09_snap_menu.png`  
**Section:** 3d-cursor → "The Snap Menu (Shift + S)"  
**Status:** Not captured.

### Preferred source: live Blender 5.1 capture

**State setup (Blender Python via MCP):**

```python
import bpy

# Assumes a fresh Blender session. Do NOT call read_factory_settings here;
# it unregisters the BlenderMCP addon (see the Addon safety note above).
# If extra objects exist from prior runs, delete them via the UI first.

# Select the default cube so the pie menu has a valid selection context
cube = bpy.data.objects.get("Cube")
if cube:
    bpy.ops.object.select_all(action='DESELECT')
    cube.select_set(True)
    bpy.context.view_layer.objects.active = cube
```

**Capture approach:** the Shift+S pie menu is modal and disappears when any key or click ends the modal. Two viable strategies:

1. **Macro capture:** invoke `bpy.ops.view3d.snap_selected_to_cursor` and its peers in a way that triggers the pie menu, then immediately `bpy.ops.screen.screenshot()`. This is fragile because pie menus are timed UI overlays.
2. **Manual capture by Ray:** open Blender, hit Shift+S, take a screenshot with the OS snipping tool. Save to `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\images\lesson_04_09_snap_menu.png`.

Strategy 2 is more reliable for pie menus. Document the manual capture in the next chat's status bullet if used.

**For programmatic capture (Strategy 1, experimental):**

```python
# Trigger the snap pie menu (this may not block; the modal is rendered
# asynchronously, so the screenshot may capture either the menu open or
# the viewport without it).
for area in bpy.context.screen.areas:
    if area.type == 'VIEW_3D':
        for region in area.regions:
            if region.type == 'WINDOW':
                with bpy.context.temp_override(area=area, region=region):
                    bpy.ops.wm.call_menu_pie(name="VIEW3D_MT_snap_pie")

# Immediate screenshot
bpy.ops.screen.screenshot(
    filepath="//images/lesson_04_09_snap_menu.png",
    full=False
)
```

If Strategy 1 fails (likely; pie menus are notoriously hard to capture programmatically), fall back to Strategy 2 (Ray captures manually with OS snipping tool).

**Acceptance criteria:**

- All eight pie menu options visible (Cursor to World Origin, Cursor to Selected, Cursor to Active, Selection to Cursor, Selection to Grid, Selection to Active, Selection to Cursor Offset, Cursor to Grid).
- Menu rendered cleanly with no glitch or partial draw.
- Default cube and selection visible in the background for context.
- Resolution at least 1024 wide.

### AI fallback prompt (Adobe Firefly)

```
A pixel-accurate mockup of Blender's Shift+S snap pie menu. A circular radial menu floating in the center of a Blender 3D viewport, with eight options arranged in a circle around a small center icon. Option labels (clockwise from top): "Cursor to World Origin", "Cursor to Selected", "Cursor to Active", "Cursor to Grid", "Selection to Cursor (Keep Offset)", "Selection to Active", "Selection to Grid", "Selection to Cursor". Modern dark UI (#2b2b2b), white text, slight glow on the hovered option. Center of menu has a small snap-target icon. Dark gray Blender viewport behind it with default cube visible. Professional software UI mockup style, 16:9 aspect ratio.
```

### AI fallback prompt (Canva AI image generator)

```
Mockup of Blender's Shift+S radial pie menu. Eight options arranged in a circle on a dark UI background. Labels: Cursor to World Origin, Cursor to Selected, Cursor to Active, Cursor to Grid, Selection to Cursor, Selection to Active, Selection to Grid, Selection to Cursor (Keep Offset). White text on dark gray. Default Blender cube visible behind the menu. 16:9, training-material style.
```

### AI acceptance criteria

- All eight options legible, with correct spelling.
- Radial layout, not a vertical list (must look like a pie menu, not a context menu).
- Dark UI tone matches Blender 5.1 (`#2b2b2b` or close).
- If the AI generates the wrong layout (vertical list, six options, fake Blender styling), fall back to manual capture.

---

## Image #12: Transform Properties Panel

**File:** `lesson_04_12_transform_properties.png`  
**Section:** origin-transform → "Transform Properties Panel"  
**Status:** Not captured.

### Preferred source: live Blender 5.1 capture

**State setup (Blender Python via MCP):**

```python
import bpy
import math

# Assumes a fresh Blender session. Do NOT call read_factory_settings here;
# it unregisters the BlenderMCP addon (see the Addon safety note above).
# If extra objects exist from prior runs, delete them via the UI first.

# Set the default cube to interesting transform values so the N-panel
# shows non-zero numbers (Location, Rotation, Scale)
cube = bpy.data.objects.get("Cube")
if cube:
    cube.location = (2.5, -1.0, 1.5)
    cube.rotation_euler = (math.radians(30), 0, math.radians(45))
    cube.scale = (1.5, 1.0, 0.75)

# Make sure the cube is selected (so the N-panel shows its values)
bpy.ops.object.select_all(action='DESELECT')
cube.select_set(True)
bpy.context.view_layer.objects.active = cube

# Open the N-panel (sidebar) in the 3D viewport. The sidebar visibility
# is per-area in Blender; toggle if not already open.
for area in bpy.context.screen.areas:
    if area.type == 'VIEW_3D':
        space = area.spaces.active
        if not space.show_region_ui:
            space.show_region_ui = True
```

**Capture:**

```python
# Full-window screenshot preserves the N-panel layout
bpy.ops.screen.screenshot(
    filepath="//images/lesson_04_12_transform_properties.png",
    full=False
)
```

**Post-capture annotation:** add a Blender-orange `#FF6B00` outline rectangle around the Item tab's Transform section (Location, Rotation, Scale, Dimensions group). Optionally add small labeled callouts:

1. Arrow + "Location X, Y, Z" pointing at the Location field block.
2. Arrow + "Rotation X, Y, Z (degrees)" pointing at the Rotation field block.
3. Arrow + "Scale X, Y, Z (multiplier, 1.0 = original)" pointing at the Scale field block.
4. Arrow + "Dimensions (actual size in Blender units)" pointing at the Dimensions block.

Annotations done in PIL post-capture. Crop the image to roughly 800 wide focusing on the N-panel and adjacent viewport, leaving the Properties editor on the right out of frame.

**Acceptance criteria:**

- N-panel Item tab visible with all four field groups (Location, Rotation, Scale, Dimensions).
- Field values reflect the state set above (non-zero, non-default; helps reader see "real values" not blank fields).
- Cube visible in the viewport to provide context.
- Annotations readable, in Blender orange.
- Crop tight enough to fit comfortably at 800 px inline width.

### AI fallback prompt (Adobe Firefly)

```
A pixel-accurate mockup of Blender's N-panel sidebar (Item tab) showing the Transform section. Display Location X=2.5, Y=-1.0, Z=1.5 fields. Rotation X=30 degrees, Y=0, Z=45 degrees. Scale X=1.5, Y=1.0, Z=0.75. Dimensions block below showing 3m x 2m x 1.5m. Dark UI theme (#2b2b2b), white text, realistic Blender 5.1 interface style. Properties organized in collapsible sections with clear labels. Four orange annotation callouts pointing at each field group: "Location", "Rotation (degrees)", "Scale (multiplier)", "Dimensions (actual size)". 16:9 or 4:3 aspect ratio, training material style.
```

### AI fallback prompt (Canva AI image generator)

```
Mockup of Blender's Item tab in the N-panel sidebar. Show Location, Rotation (degrees), Scale, and Dimensions field groups. Numeric values populated, not blank. Dark gray UI, white text. Four orange labels pointing at each field group with arrows: Location, Rotation, Scale, Dimensions. Training-material style, 4:3 aspect ratio.
```

### AI acceptance criteria

- Field groups labeled correctly (no typos, no fake Blender labels like "Position" instead of "Location").
- Numeric values present in fields, not blank placeholders or "TODO" strings.
- Dark UI tone matches Blender 5.1.
- Orange annotations match brand orange and do not overlap field labels.
- If the AI invents field names that do not exist in actual Blender (e.g., "Translation" or "Bounding Box Size"), fall back to live capture.

---

## Image #13: Project Scene Reference (Completed Table)

**File:** `lesson_04_13_completed_scene.png`  
**Section:** manipulation-project → at the top, as a goal reference  
**Status:** Not captured.

### Preferred source: live Blender 5.1 capture

The image is the finished outcome of the lesson's Step 1 through Step 7 project. Building it in Blender python verbatim lets the figure match exactly what the reader will produce.

**State setup (Blender Python via MCP):**

```python
import bpy

# Assumes a fresh Blender session. Do NOT call read_factory_settings here;
# it unregisters the BlenderMCP addon (see the Addon safety note above).
# This snippet deletes the default cube to start the scene build cleanly.
# If extra objects exist from prior runs, delete them via the UI first too.
bpy.ops.object.select_all(action='DESELECT')
cube = bpy.data.objects.get("Cube")
if cube:
    cube.select_set(True)
    bpy.ops.object.delete()

# Step 2: Ground plane
bpy.ops.mesh.primitive_plane_add(size=2, location=(0, 0, 0))
plane = bpy.context.active_object
plane.scale = (10, 10, 10)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
plane.name = "Ground"

# Step 3: Table top
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 2))
table_top = bpy.context.active_object
table_top.scale = (2, 1.5, 0.1)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
table_top.name = "TableTop"

# Step 4: Four table legs, one at each corner
leg_positions = [
    ( 1.8,  1.3, 1.0),
    (-1.8,  1.3, 1.0),
    ( 1.8, -1.3, 1.0),
    (-1.8, -1.3, 1.0),
]
for i, pos in enumerate(leg_positions):
    bpy.ops.mesh.primitive_cube_add(size=2, location=pos)
    leg = bpy.context.active_object
    leg.scale = (0.15, 0.15, 1.0)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    leg.name = f"Leg_{i+1}"

# Step 5: Objects on the table
# UV Sphere
bpy.ops.mesh.primitive_uv_sphere_add(location=(0, 0, 2.6))
sphere = bpy.context.active_object
sphere.scale = (0.4, 0.4, 0.4)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
sphere.name = "Sphere"

# Cone
bpy.ops.mesh.primitive_cone_add(location=(-1.5, 0, 2.6))
cone = bpy.context.active_object
cone.scale = (0.5, 0.5, 0.5)
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
cone.name = "Cone"

# Torus
import math
bpy.ops.mesh.primitive_torus_add(location=(1.5, 0, 2.4))
torus = bpy.context.active_object
torus.scale = (0.6, 0.6, 0.6)
torus.rotation_euler = (0, math.radians(90), 0)
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
torus.name = "Torus"

# Cylinder
bpy.ops.mesh.primitive_cylinder_add(location=(0, -1, 2.6))
cyl = bpy.context.active_object
cyl.scale = (0.3, 0.3, 1.5 * 0.3)  # base 0.3 scale, then z stretch 1.5
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
cyl.name = "Cylinder"

# Position the camera for a 3/4 view of the table
cam = bpy.data.objects.get("Camera")
if cam:
    cam.location = (7.5, -7.5, 5.5)
    cam.rotation_euler = (math.radians(63), 0, math.radians(45))

# Bump the default light a bit so the table reads well
light = bpy.data.objects.get("Light")
if light:
    light.location = (4, 4, 6)
```

**Capture:**

```python
# Render with Eevee (fast) at a reasonable resolution
bpy.context.scene.render.engine = 'BLENDER_EEVEE_NEXT'
bpy.context.scene.render.resolution_x = 1280
bpy.context.scene.render.resolution_y = 720
bpy.context.scene.render.filepath = "//images/lesson_04_13_completed_scene.png"
bpy.ops.render.render(write_still=True)
```

Note: `BLENDER_EEVEE_NEXT` is the Blender 5.1 Eevee engine name. If that string fails, try `'BLENDER_EEVEE'` (older engine name) or `'CYCLES'` (slower but always present).

**Acceptance criteria:**

- All seven scene elements visible: ground plane, table top, four legs, sphere, cone, torus, cylinder.
- Camera angle shows the entire table from a 3/4 perspective view (not directly head-on, not directly overhead).
- Lighting reads cleanly. Default neutral gray materials are fine; the figure is a goal reference, not a beauty shot.
- No visible artifacts, no overexposed highlights, no z-fighting between table top and legs.
- Resolution at least 1024 wide.

### AI fallback prompt (Adobe Firefly)

```
A simple 3D rendered scene rendered in Blender Eevee style. A wooden-look brown table sits on a neutral gray floor. The table has a flat rectangular top supported by four square cross-section legs at the corners. Four primitive shapes are arranged on the tabletop: a gray UV sphere in the center, a gray cone to the left of center, a gray torus to the right tilted on its side (rotated 90 degrees on Y), and a tall gray cylinder behind. Camera framed at a 3/4 view from the front-right, slightly above tabletop height. Soft directional lighting from upper-right. Neutral neutral palette, beginner 3D modeling tutorial aesthetic, clean and uncluttered. 16:9 aspect ratio.
```

### AI fallback prompt (Canva AI image generator)

```
Simple 3D render of a basic table with four legs sitting on a gray floor. On top of the table: a sphere, a cone, a tilted torus, and a tall cylinder. Neutral gray materials. Soft lighting. 3/4 perspective camera angle. Blender Eevee tutorial render style. 16:9.
```

### AI acceptance criteria

- All four primitive objects (sphere, cone, torus, cylinder) recognizable.
- Table has four legs visible (not a pedestal table, not a wall-mounted surface).
- Torus is tilted, not lying flat (matches the lesson's Step 5 rotation).
- No fictional objects that the project does not include (no plates, no fruit, no books).
- If the AI generates a fancy realistic table scene instead of the simple primitive scene, fall back to the live Blender build.

---

## Notes

- All four PNGs target the Blender 5.1 default scene as their starting state, then add or modify objects programmatically. This keeps the captures reproducible across sessions.
- Resolution target is 1280 by 720 (16:9) for #8, #9, #13, and roughly 1024 wide cropped for #12 since the N-panel is a tall narrow strip.
- Annotation overlays (orange callouts, arrows, labeled ellipses) are added in a post-capture step. The Lesson 03 PNG annotation pattern (PIL or SVG overlay during integration) is the proven approach; document the chosen method in the capture chat's status bullet.
- If any of the four PNGs cannot be captured live (Blender MCP unavailable, pie menu uncapturable, etc.), the AI fallback prompts above are the documented next step. If AI also fails acceptance criteria, Ray captures manually on his Blender 5.1 install and saves directly to the `images/` directory.
