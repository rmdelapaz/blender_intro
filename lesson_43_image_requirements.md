# Image Requirements for Lesson 43: Compositor Basics

## Task Summary
**Lesson:** lesson_43_compositor_basics.html  
**Purpose:** Identify and document all images needed to augment the lesson content  
**Date:** November 12, 2025  
**Total Images Identified:** 28

---

## Image List for Lesson 43

### **1. Compositor Workspace Overview**
- **Purpose:** Show students the complete Compositing workspace layout
- **Type:** Screenshot (annotated)
- **Shows:** Full Blender interface in Compositing workspace with labeled areas (node editor, backdrop, properties panel, header controls)

### **2. Compositor Node Editor Interface**
- **Purpose:** Detailed view of the node editor with key UI elements highlighted
- **Type:** Screenshot (annotated)
- **Shows:** Close-up of Compositor editor showing header bar, Use Nodes checkbox, Backdrop checkbox, and navigation controls

### **3. Default Compositor Setup**
- **Purpose:** Show the basic starting point for compositing
- **Type:** Screenshot
- **Shows:** Default node setup with Render Layers and Composite nodes connected, backdrop visible in background

### **4. Render Layers Node Outputs**
- **Purpose:** Demonstrate all available passes from Render Layers node
- **Type:** Screenshot (annotated)
- **Shows:** Expanded Render Layers node with multiple output sockets labeled (Combined, Z, Normal, AO, etc.)

### **5. Socket Type Reference**
- **Purpose:** Visual guide to socket colors and their meanings
- **Type:** SVG Diagram
- **Shows:** Color-coded sockets (Yellow=RGBA, Gray=Value, Blue=Vector) with labels and connection examples

### **6. Compositor Keyboard Shortcuts Cheat Sheet**
- **Purpose:** Quick reference for essential shortcuts
- **Type:** Infographic
- **Shows:** Grid layout of most important shortcuts with icons and descriptions

### **7. Backdrop Viewing Examples**
- **Purpose:** Show how backdrop displays image behind nodes
- **Type:** Screenshot composite
- **Shows:** Three panels showing backdrop hidden, visible, and with Viewer node connected

### **8. Render Pass Visual Examples**
- **Purpose:** Demonstrate what different render passes look like
- **Type:** Composite (grid layout)
- **Shows:** 3x3 grid showing Combined, Z, Normal, AO, Diffuse Direct, Diffuse Indirect, Glossy, Emission, Environment passes of same scene

### **9. View Layer Properties Panel**
- **Purpose:** Show where to enable render passes
- **Type:** Screenshot (annotated)
- **Shows:** Properties panel with View Layer Properties open, Passes section visible with checkboxes highlighted

### **10. Z Pass Visualization**
- **Purpose:** Explain depth pass appearance
- **Type:** Composite (before/after)
- **Shows:** Rendered scene next to its Z-pass (grayscale depth map)

### **11. Normal Pass Visualization**
- **Purpose:** Show what normal pass looks like
- **Type:** Screenshot
- **Shows:** Scene with colorful normal pass overlay showing RGB = XYZ directions

### **12. AO Pass Application Example**
- **Purpose:** Demonstrate how AO enhances depth
- **Type:** Composite (three panels)
- **Shows:** Original render, AO pass alone, result after multiplying AO over original

### **13. Cryptomatte Selection Demo**
- **Purpose:** Show automatic masking with Cryptomatte
- **Type:** Screenshot composite
- **Shows:** Cryptomatte node with picker active, selected object highlighted in viewport, resulting mask

### **14. RGB Curves Node Interface**
- **Purpose:** Detailed view of RGB Curves controls
- **Type:** Screenshot (annotated)
- **Shows:** RGB Curves node with all four curves visible (C, R, G, B), control points labeled

### **15. S-Curve Contrast Adjustment**
- **Purpose:** Illustrate how S-curve adds contrast
- **Type:** Diagram
- **Shows:** Before/after RGB Curves showing flat curve vs. S-curve, with example images showing contrast difference

### **16. Hue/Saturation/Value Node**
- **Purpose:** Show HSV controls and their effects
- **Type:** Screenshot with examples
- **Shows:** HSV node with sliders, plus small preview images showing hue shift, saturation change, value adjustment

### **17. Color Balance Node Layout**
- **Purpose:** Explain Lift/Gamma/Gain structure
- **Type:** Screenshot (annotated)
- **Shows:** Color Balance node with three sections labeled (Lift for shadows, Gamma for midtones, Gain for highlights)

### **18. Glare Node Types Comparison**
- **Purpose:** Compare different glare effects
- **Type:** Composite (2x2 grid)
- **Shows:** Same light source with Ghosts, Streaks, Fog Glow, and Simple Star glare types

### **19. Blur Node with Depth of Field**
- **Purpose:** Demonstrate Z-pass driven blur
- **Type:** Composite
- **Shows:** Node setup (Blur node with Z-pass connected) and resulting depth-of-field effect

### **20. Mix Node Blend Modes**
- **Purpose:** Visual comparison of common blend modes
- **Type:** Infographic grid
- **Shows:** 6 panels showing Mix, Add, Multiply, Screen, Overlay effects on sample images

### **21. Alpha Over Compositing Example**
- **Purpose:** Show layering with transparency
- **Type:** Composite
- **Shows:** Two images being combined with Alpha Over node, demonstrating transparent overlay

### **22. ColorRamp Masking Technique**
- **Purpose:** Show how ColorRamp controls masks
- **Type:** Screenshot with node setup
- **Shows:** Z-pass → ColorRamp → result, demonstrating depth-based masking

### **23. Color Correction Workflow Diagram**
- **Purpose:** Illustrate the step-by-step grading process
- **Type:** SVG flowchart
- **Shows:** Sequential boxes: Evaluate → Fix Exposure → Set Contrast → White Balance → Saturation → Creative Grade → Output

### **24. Complete Color Grading Node Tree**
- **Purpose:** Show professional grading setup
- **Type:** Screenshot
- **Shows:** Full node tree: Render Layers → RGB Curves → HSV → Color Balance → Composite, organized cleanly

### **25. Before/After Color Grade Comparison**
- **Purpose:** Demonstrate impact of color grading
- **Type:** Composite (side-by-side)
- **Shows:** Split-screen of render before and after professional color grade

### **26. Teal & Orange Look Setup**
- **Purpose:** Show how to create cinematic look
- **Type:** Screenshot with example
- **Shows:** Color Balance node settings for teal shadows/orange highlights, plus resulting graded image

### **27. Color Grading Styles Examples**
- **Purpose:** Compare different grading aesthetics
- **Type:** Composite (3x2 grid)
- **Shows:** Same scene with six different grades: Cinematic, High-Key, Low-Key, Vintage, HDR, Natural

### **28. Compositor Pipeline Overview**
- **Purpose:** Big-picture workflow visualization
- **Type:** SVG diagram
- **Shows:** Flow from 3D Scene → Render → Passes → Compositor → Effects/Color → Final Output

---

## AI Image Generation Prompts

### **Prompt 1: Compositor Workspace Overview**
```
Create a screenshot-style image of Blender's Compositing workspace interface. Show the complete window layout with:
- Main central area: Compositor node editor with a simple node tree visible (Render Layers connected to Composite node)
- Background: Semi-transparent rendered image visible as backdrop
- Top: Workspace tabs with "Compositing" highlighted in bright blue
- Right side: Properties panel showing View Layer Properties
- Header: Clear view of "Use Nodes" and "Backdrop" checkboxes (both checked)

Add annotations with white arrows and text labels pointing to:
- "Node Editor Area"
- "Backdrop Preview"
- "Use Nodes Toggle"
- "Backdrop Toggle"
- "Properties Panel"
- "Add Menu (Shift+A)"

Style: Professional technical documentation, Blender 4.0 interface, dark theme (#2b2b2b background). Use bright orange (#ff8c00) for selection highlights and cyan arrows for annotations. Resolution: 1920x1080. Text: Clear, sans-serif font, white with dark outline for readability. Professional training material aesthetic.
```

### **Prompt 2: Compositor Node Editor Interface**
```
Create a detailed close-up screenshot of Blender's Compositor node editor header bar and controls. Show:
- Header bar with dark grey background (#333333)
- Editor type dropdown showing "Compositor" icon
- "Use Nodes" checkbox (checked, bright orange checkmark)
- "Backdrop" checkbox (checked, bright orange checkmark)
- View menu, Select menu, Add menu, Node menu clearly visible
- Subtle grid pattern in editor background (#2b2b2b)

Add white annotation arrows pointing to:
- "Switch Editor Type"
- "Enable Compositing Nodes"
- "Show Background Preview"
- "Add Nodes Menu"

Style: Clean technical diagram, Blender dark theme, high contrast. Annotations in white with slight drop shadow. Focus on clarity and educational value. Resolution: 1600x800. Professional training material for compositor interface orientation.
```

### **Prompt 3: Default Compositor Setup**
```
Create a Blender Compositor screenshot showing the default starting node tree. Display:
- Two nodes on dark grey background (#2b2b2b)
- Left node: "Render Layers" (slightly larger, grey header)
- Right node: "Composite" (grey header with green checkmark icon)
- Yellow connection line between them (Image output to Image input)
- In backdrop: Faint rendered image of default cube scene visible
- Nodes positioned with clear spacing, professional arrangement

Visual elements:
- Render Layers node has "Image" output socket (yellow) connected
- Composite node has "Image" input socket (yellow) receiving connection
- Connection line: Bright yellow (#ffd700), smooth bezier curve
- Node frames: Dark grey (#404040) with rounded corners
- Socket highlights: Bright orange (#ff8c00) when connected

Style: Blender 4.0 interface, dark theme, clean and minimal. Show this as "starting point" for all compositing work. Resolution: 1400x900. Professional educational documentation style.
```

### **Prompt 4: Render Layers Node Outputs**
```
Create a screenshot of an expanded Render Layers node showing all available output passes. Display:
- Large Render Layers node (tall, showing many outputs)
- Grey header bar with "Render Layers" title
- Scene dropdown showing "Scene"
- View Layer dropdown showing "ViewLayer"
- Multiple output sockets stacked vertically:
  - Image (yellow socket, topmost)
  - Alpha (grey socket)
  - Depth/Z (grey socket)
  - Normal (yellow socket, colorful preview thumbnail)
  - Combined (yellow socket)
  - Diffuse Direct (yellow socket)
  - Diffuse Indirect (yellow socket)
  - Glossy Indirect (yellow socket)
  - AO (grey socket)
  - Emission (yellow socket)
  - Environment (yellow socket)

Add small preview thumbnails next to each output showing what that pass looks like (grayscale for Z/AO, colorful for Normal, bright for Emission, etc.)

Style: Blender dark theme (#2b2b2b background), professional technical screenshot. Yellow sockets for RGBA data, grey for values. Clear labels on each output. Resolution: 800x1400 (tall). Educational diagram showing pass variety.
```

### **Prompt 5: Socket Type Reference**
```
Create a clean SVG diagram explaining Compositor socket types. Layout: Three columns.

Column 1 - Yellow (Color/RGBA):
- Large yellow circle socket icon
- "Color / RGBA" title
- "4 channels: R, G, B, Alpha" subtitle
- "Contains: Full color image data" description
- Small example: colorful cube icon
- "Most common socket type" note

Column 2 - Grey (Value):
- Large grey circle socket icon
- "Value / Float" title
- "Single channel: 0.0 to 1.0" subtitle
- "Contains: Grayscale, masks, factors" description
- Small example: greyscale gradient icon
- "Used for masks and numbers" note

Column 3 - Blue (Vector):
- Large blue circle socket icon
- "Vector / XYZ" title
- "3 channels: X, Y, Z" subtitle
- "Contains: Positions, normals, motion" description
- Small example: RGB colored sphere (showing XYZ as RGB)
- "Advanced data type" note

Bottom section: Connection rules showing compatible socket pairs with arrows.

Style: Modern infographic, clean flat design. Background: Light grey (#f0f0f0). Socket icons: Bold, with subtle inner shadow. Text: Clear sans-serif (Roboto or similar). Professional training material aesthetic. Use subtle drop shadows and clean lines. Resolution: 1600x1000.
```

### **Prompt 6: Compositor Keyboard Shortcuts Cheat Sheet**
```
Create an infographic-style keyboard shortcut reference for Blender Compositor. Grid layout: 4 rows x 3 columns.

Each cell contains:
- Keyboard key(s) visual (dark grey rounded rectangles)
- Action name below in bold
- Brief description in smaller text

Shortcuts to include:
Row 1: Shift+A (Add Node), X (Delete), Shift+D (Duplicate)
Row 2: Ctrl+Shift+Click (Add Viewer), M (Mute Node), V (Toggle Backdrop)
Row 3: Home (Frame All), Period (Frame Selected), Alt+V (Fit Backdrop)
Row 4: Ctrl+G (Make Group), Tab (Enter/Exit Group), N (Toggle Sidebar)

Design:
- Background: Dark grey (#2b2b2b) with lighter cell backgrounds (#404040)
- Key visuals: White keys with dark lettering, slight 3D effect
- Text: White for titles, light grey for descriptions
- Icons: Small relevant icons next to each (node icon, delete X, etc.)
- Header: "Essential Compositor Shortcuts" in large text with keyboard icon

Style: Modern tech aesthetic, high contrast, easy to read. Resolution: 1920x1280. Professional quick-reference card suitable for printing or screen display.
```

### **Prompt 7: Backdrop Viewing Examples**
```
Create a three-panel composite showing Backdrop functionality. Horizontal layout.

Panel 1 - "Backdrop Off":
- Compositor showing node tree clearly
- Just dark grey background
- Nodes visible (Render Layers, Curves, Composite)
- Header shows "Backdrop" checkbox unchecked (empty)
- Label: "Backdrop Hidden - Nodes Only"

Panel 2 - "Backdrop On":
- Same compositor view
- Faint rendered image visible in background
- Nodes still clearly visible overlaid
- Header shows "Backdrop" checkbox checked (orange)
- Label: "Backdrop Visible - Live Preview"

Panel 3 - "Viewer Active":
- Compositor with Viewer node added
- Rendered image more prominent in backdrop
- Connection from node to Viewer highlighted in orange
- Viewer node has bright outline
- Label: "Viewer Node - Inspect Results"

Visual design:
- Each panel has thin white border
- Labels below in clear white text
- Arrows pointing to relevant UI elements
- Consistent node tree across panels (same positions)
- Background: Dark grey (#2b2b2b)

Style: Educational comparison diagram, Blender interface aesthetic. Clear visual progression showing workflow. Resolution: 2400x800 (wide). Professional technical documentation style.
```

### **Prompt 8: Render Pass Visual Examples**
```
Create a 3x3 grid comparison showing different render passes of the same simple scene (cube, sphere, plane with lighting).

Grid layout (all same size squares):
Row 1:
- Combined (full color render)
- Z/Depth (white to black gradient, near to far)
- Normal (colorful RGB showing surface normals)

Row 2:
- AO (white surfaces with dark crevices)
- Diffuse Direct (lit surfaces, no reflections)
- Diffuse Indirect (soft global illumination bounce)

Row 3:
- Glossy Indirect (reflections only)
- Emission (only glowing materials, black elsewhere)
- Environment (HDRI reflections only)

Each panel:
- Label at top in white text
- Same camera angle across all panels
- Clear visualization of what that pass contains
- Scene: Simple (cube, sphere, cylinder on plane)
- Consistent lighting to show differences

Design:
- Dark background (#1a1a1a) around grid
- Thin white borders between panels
- Panel labels in bold white text
- Overall title: "Render Pass Reference - Same Scene" at top
- Resolution: 1800x1800 (square grid)

Style: Technical reference sheet, clean comparison. Educational material showing pass variety. Blender render aesthetic with dark theme integration.
```

### **Prompt 9: View Layer Properties Panel**
```
Create an annotated screenshot of Blender's Properties panel focused on View Layer Properties. Show:
- Properties panel right side of screen
- View Layer Properties tab icon highlighted (two stacked layers icon)
- Panel sections visible:
  - Scene and Layer dropdowns at top
  - "Passes" section expanded (most important)
  - Data passes listed with checkboxes: Combined, Z, Mist, Normal, Position, etc.
  - Light passes section: Diffuse Direct/Indirect, Glossy, Transmission, etc.
  - Cryptomatte section at bottom

Add annotations:
- Large arrow pointing to View Layer icon: "Click Here to Access Passes"
- Arrow to Passes section: "Enable Render Passes Here"
- Callout box: "Check passes you need before rendering"
- Highlight Z, Normal, AO as essential passes (with star icons)

Visual design:
- Properties panel: Dark grey (#2b2b2b)
- Checkboxes: Empty (grey outline) or checked (bright orange)
- Section headers: Slightly lighter grey (#404040)
- Annotations: White arrows with dark outlines, yellow callout boxes
- Active icon: Bright blue highlight

Style: Blender 4.0 interface, professional screenshot with educational annotations. Resolution: 800x1600 (tall panel). Clear, instructional training material aesthetic.
```

### **Prompt 10: Z Pass Visualization**
```
Create a side-by-side comparison showing Z-pass (depth pass) visualization.

Left panel - "Combined Render":
- Full color rendered scene
- Simple 3D scene: Three cubes at different depths
- Nearest cube: Sharp and clear
- Middle cube: Medium distance
- Farthest cube: Most distant
- Textured plane ground
- Realistic lighting and materials
- Label: "Normal Render"

Right panel - "Z Pass (Depth)":
- Same camera angle
- Grayscale depth map
- Nearest cube: Bright white
- Middle cube: Medium grey
- Farthest cube: Dark grey
- Background/sky: Black
- Smooth gradient showing distance
- Label: "Z-Pass / Depth"

Add legend:
- Gradient bar showing "Near (White) → Far (Black)"
- Text: "Used for: Depth of field, fog, atmospheric effects"

Design:
- Each panel: 900x900 pixels
- Thin white border between panels
- Title across top: "Understanding the Z-Pass"
- Background: Dark grey (#2b2b2b)
- Labels: Clear white text

Style: Educational comparison diagram, Blender render aesthetic, professional technical documentation. Resolution: 1900x1000. Clear depth visualization for training purposes.
```

### **Prompt 11: Normal Pass Visualization**
```
Create an image explaining the Normal pass with visual examples.

Main image (large):
- 3D scene with cube, sphere, and plane
- Colorful normal pass overlay (RGB = XYZ directions)
- Color key visible:
  - Red areas: Surfaces facing +X (right)
  - Green areas: Surfaces facing +Y (forward)
  - Blue areas: Surfaces facing +Z (up)
  - Cyan: Surfaces facing left/back
  - Magenta: Mixed directions
- Clear, vibrant colors showing direction

Side diagram:
- Small 3D axis widget (XYZ arrows)
- Labels: "Red = X", "Green = Y", "Blue = Z"
- Title: "RGB Represents Surface Direction"

Bottom text panel:
- "Normal Pass Uses:"
- "• Edge detection"
- "• Relighting effects"
- "• Technical masking"
- "• Surface analysis"

Design:
- Main image: Dark background to make colors pop
- Colorful normal data very vibrant and clear
- Axis widget: White arrows with RGB color coding
- Background: Dark grey (#2b2b2b)
- Text: White, clean sans-serif

Style: Technical educational diagram with color-coded information. Blender aesthetic. Resolution: 1600x1200. Professional training material showing data visualization.
```

### **Prompt 12: AO Pass Application Example**
```
Create a three-panel horizontal composite showing AO (Ambient Occlusion) application workflow.

Panel 1 - "Original Render":
- 3D scene: Detailed object (like architectural interior or character)
- Properly lit but somewhat flat
- Good exposure and colors
- Label: "1. Base Render"

Panel 2 - "AO Pass Alone":
- Same scene, grayscale only
- White areas: Exposed surfaces
- Dark grey/black: Crevices, corners, contact points
- Clear occlusion shadows visible
- Label: "2. Ambient Occlusion Pass"

Panel 3 - "AO Multiplied Over":
- Same scene with AO applied
- Enhanced depth and definition
- Crevices darker, more detail
- Overall more three-dimensional look
- Subtle but noticeable improvement
- Label: "3. Final Result (AO Applied)"

Node setup diagram (below panels):
- Simple node tree showing: Render Layers (Combined + AO) → Mix (Multiply) → Composite
- Arrows showing workflow

Design:
- Each panel: Equal size, clear borders
- Background: Dark grey (#1a1a1a)
- Labels: White text, bold
- Before/after comparison clear
- Node diagram: Simplified, clear connections

Style: Educational before/after/result sequence. Professional training material. Resolution: 2700x900 (wide format). Blender aesthetic showing practical AO usage.
```

### **Prompt 13: Cryptomatte Selection Demo**
```
Create a composite image showing Cryptomatte automatic masking in action.

Top section - Compositor view:
- Cryptomatte node with picker active (eyedropper icon highlighted)
- Node shows matte output (white object on black background)
- Clear connection to output
- Background: Dark grey compositor (#2b2b2b)

Middle section - 3D Viewport:
- Split view showing:
  - Left: Full color scene (multiple objects - car, environment, props)
  - Right: Cryptomatte picker active, one object highlighted in bright orange
- Cursor icon showing picking action

Bottom section - Result mask:
- Clean white silhouette of selected object
- Perfect edge detail
- Black background
- Text: "Perfect mask with one click!"

Add annotations:
- Arrow: "Click to pick object"
- Arrow: "Automatic mask generated"
- Callout: "No manual masking needed!"

Design:
- Three horizontal sections, clear separation
- Orange highlights for interactive elements
- Clean, professional layout
- Title: "Cryptomatte: Automatic Object Masking"
- Background: Dark interface (#2b2b2b)

Style: Professional workflow demonstration. Blender interface aesthetic. Resolution: 1600x1400. Educational screenshot showing professional masking technique.
```

### **Prompt 14: RGB Curves Node Interface**
```
Create a detailed screenshot/diagram of the RGB Curves node with clear educational annotations.

Main node view:
- Large RGB Curves node displayed prominently
- All four curve displays visible:
  - C (Combined) - top, currently selected (bright outline)
  - R (Red) - below C
  - G (Green) - below R
  - B (Blue) - bottom
- Each curve shows diagonal line (default) with control points
- Grid background on each curve display
- Input/output sockets visible (yellow)

Add control points shown on C curve:
- Bottom-left corner point (shadows)
- Middle point (midtones)
- Top-right corner point (highlights)

Annotations:
- Arrow to C curve: "Combined curve - overall brightness"
- Arrow to R curve: "Red channel - add/remove red"
- Arrow to middle point: "Control points - drag to adjust"
- Arrow to curve buttons: "Switch between channels"
- Callout: "Most powerful color correction tool"

Design:
- Node background: Dark grey (#404040)
- Curve grids: Subtle grey lines
- Selected curve: Bright outline (#667eea)
- Control points: White circles with orange centers
- Curve line: Bright white
- Background: Dark compositor (#2b2b2b)

Style: Technical documentation screenshot with clear annotations. Blender dark theme. Resolution: 1200x1400 (tall). Professional training material showing interface mastery.
```

### **Prompt 15: S-Curve Contrast Adjustment**
```
Create a side-by-side comparison diagram showing S-curve contrast enhancement.

Left side - "Before (Flat Contrast)":
- RGB Curves node showing straight diagonal line
- Sample image below: Cube scene, flat/low contrast
- Histogram: Narrow, centered distribution
- Text: "Diagonal line = No contrast change"

Right side - "After (S-Curve)":
- RGB Curves node showing S-curve:
  - Bottom-left pulled down (darker shadows)
  - Top-right pulled up (brighter highlights)
  - Smooth S-shape maintained
- Same cube scene: Enhanced contrast, punchy
- Histogram: Wider distribution, separated tones
- Text: "S-curve = Increased contrast"

Bottom explanation:
- Diagram showing curve sections:
  - "Lower shadows" (bottom bend)
  - "Lift highlights" (top bend)
  - "Result: More separation between darks and lights"

Design:
- Split layout with clear division
- Each side: Node + result + explanation
- Curves: White lines on dark grey grid
- Sample images: Clear before/after difference
- Arrows showing curve adjustments
- Background: Dark grey (#2b2b2b)

Style: Educational comparison showing cause and effect. Professional training diagram. Resolution: 1800x1200. Blender aesthetic with clear visual teaching.
```

### **Prompt 16: Hue/Saturation/Value Node**
```
Create an educational diagram showing HSV node controls and their effects.

Main node (left side):
- Hue/Saturation/Value node displayed
- Three slider controls visible:
  - Hue slider (0.5 default)
  - Saturation slider (1.0 default)
  - Value slider (1.0 default)
- Input/output sockets (yellow)
- Clean, clear interface

Right side - Effects grid (2x3):
Row 1: Hue adjustments
- Original image (colorful cube)
- Hue -0.3 (color shift left)
- Hue +0.3 (color shift right)

Row 2: Saturation adjustments
- Saturation 0.0 (grayscale)
- Saturation 1.0 (normal)
- Saturation 2.0 (hyper-saturated)

Bottom: Value adjustment
- Split image showing Value 0.5 (darker) vs Value 1.5 (brighter)

Labels and descriptions:
- "Hue: Shifts all colors along spectrum"
- "Saturation: Color intensity (0=grey, 2=vivid)"
- "Value: Overall brightness"

Design:
- Node: Dark grey background (#404040)
- Sample images: Clear, identical framing
- Grid: Organized, equal spacing
- Text labels: White, clear
- Background: Dark grey (#2b2b2b)

Style: Educational reference showing node capabilities. Professional training material. Resolution: 1800x1200. Blender interface aesthetic with practical examples.
```

### **Prompt 17: Color Balance Node Layout**
```
Create an annotated screenshot of the Color Balance node showing Lift/Gamma/Gain structure.

Main node display:
- Large Color Balance node
- Three distinct sections visible:
  1. Top section: "Lift" (labeled clearly)
     - RGB color wheels or sliders
     - Text: "Shadows"
  2. Middle section: "Gamma" (labeled)
     - RGB color wheels or sliders
     - Text: "Midtones"
  3. Bottom section: "Gain" (labeled)
     - RGB color wheels or sliders
     - Text: "Highlights"
- Input/output sockets (yellow)

Side diagram:
- Brightness gradient bar (dark to light)
- Three sections marked:
  - "Lift affects here" (dark end)
  - "Gamma affects here" (middle)
  - "Gain affects here" (bright end)

Annotations:
- Arrow to Lift: "Cool shadows (add cyan/blue)"
- Arrow to Gamma: "Neutral midtones (balanced)"
- Arrow to Gain: "Warm highlights (add orange/red)"
- Example: "Cinematic teal & orange look"

Design:
- Node background: Dark grey (#404040)
- Section dividers: Subtle lines
- Labels: Clear, white text
- Gradient bar: Smooth, accurate
- Annotations: Yellow callouts with white text
- Background: Dark compositor (#2b2b2b)

Style: Professional technical screenshot with educational overlay. Blender dark theme. Resolution: 1000x1600 (tall format). Training material for color grading workflow.
```

### **Prompt 18: Glare Node Types Comparison**
```
Create a 2x2 grid comparison showing different Glare node types with same light source.

Base scene: Single bright point light against dark background (like street lamp or candle).

Grid layout:
Top-left: "Ghosts"
- Lens flare artifacts visible
- Geometric ghost reflections
- Looks like camera lens flare
- Label clearly visible

Top-right: "Streaks"
- Star-like light rays extending outward
- Sharp, directional streaks
- Clean, dramatic effect
- Label clearly visible

Bottom-left: "Fog Glow"
- Soft, diffused bloom around light
- Natural, subtle glow
- Most realistic option
- Label clearly visible

Bottom-right: "Simple Star"
- Four-pointed star pattern
- Cross-shaped rays
- Clean geometric effect
- Label clearly visible

Design:
- Each panel: Equal size (800x800)
- Dark background (#1a1a1a) around grid
- White borders between panels
- Panel labels: Bold white text at top of each
- Overall title: "Glare Node Types Comparison"
- Consistent light source across all panels
- Settings note: "All at default settings for comparison"

Style: Technical comparison chart. Blender render aesthetic. Resolution: 1700x1700 (square). Professional reference showing effect variety.
```

### **Prompt 19: Blur Node with Depth of Field**
```
Create a composite diagram showing Z-pass driven blur for depth of field effect.

Top section - Node setup:
- Render Layers node with outputs:
  - Image (yellow socket) → Blur node → Viewer
  - Z (grey socket) → Blur "Size" input
- Blur node settings visible: "Variable Size" enabled
- Clean, organized node tree
- Annotations showing data flow

Bottom section - Result:
- Split image showing:
  - Left: Sharp render (everything in focus)
  - Right: DOF applied (foreground sharp, background blurred)
- Scene: Cubes at different depths
- Focus plane indicator visible
- Clear blur gradient from near to far

Side diagram:
- Depth visualization showing:
  - Focus distance (sharp zone)
  - Near blur (foreground)
  - Far blur (background)
- Labels: "Focus Here", "Blurred", "Blurred"

Design:
- Top: Node tree on dark grey (#2b2b2b)
- Bottom: Render comparison, clear borders
- Arrows showing workflow: Z-pass controls blur amount
- Labels: White text, clear annotations
- Background: Professional dark theme

Style: Technical workflow demonstration. Blender interface aesthetic. Resolution: 1800x1200. Educational material showing practical Z-pass usage for DOF effect.
```

### **Prompt 20: Mix Node Blend Modes**
```
Create an infographic grid showing common Mix node blend modes with visual examples.

Layout: 2x3 grid (6 panels total)

Base images for all panels:
- Image A: Colored gradients
- Image B: Textured pattern
- Consistent source images across all panels

Panel contents:
Top row:
1. "Mix" - 50/50 blend of A and B
2. "Add" - Combined brightness (lighter result)
3. "Multiply" - Darkening effect

Bottom row:
4. "Screen" - Inverse multiply (brightening)
5. "Overlay" - Contrast enhancement
6. "Color" - B's color with A's luminance

Each panel shows:
- Top: Mode name in bold
- Middle: Result image
- Bottom: Usage note (e.g., "Add: Combine lights", "Multiply: Apply shadows")

Design:
- Panel backgrounds: Dark grey (#404040)
- Result images: Clear, well-lit examples
- Mode names: Large, white, bold text
- Usage notes: Smaller cyan text (#00d9ff)
- Grid borders: Thin white lines
- Overall background: Dark grey (#2b2b2b)
- Title: "Essential Mix Node Blend Modes"

Style: Modern infographic, clean layout. Professional quick-reference card. Resolution: 1800x1200. Color-coded categories (light operations, dark operations, special blends).
```

### **Prompt 21: Alpha Over Compositing Example**
```
Create a three-stage diagram showing Alpha Over node compositing workflow.

Stage 1 - Source Images:
Top image: "Background" - Complete scene (room interior)
Bottom image: "Foreground" - Object with transparency (logo, character, etc.)
- Checkered pattern showing transparency
- Label: "Source images with alpha channel"

Stage 2 - Node Setup:
- Alpha Over node in center
- Background → Alpha Over "Image" input (bottom)
- Foreground → Alpha Over "Image" input (top)
- Output → Composite
- "Premultiply" checkbox visible
- Annotations showing input order: "Top image appears over bottom"

Stage 3 - Final Result:
- Composite result showing foreground layered over background
- Transparency respected (foreground object integrated naturally)
- No harsh edges or masking artifacts
- Label: "Final composite - transparent areas show background"

Design:
- Three sections arranged vertically or in sequence
- Clear arrows showing workflow progression
- Node setup: Dark grey background (#2b2b2b)
- Images: Framed with thin white borders
- Annotations: Yellow callouts with white text
- Background: Professional dark theme

Style: Step-by-step workflow tutorial. Blender interface aesthetic. Resolution: 1600x1400. Educational demonstration of layering technique.
```

### **Prompt 22: ColorRamp Masking Technique**
```
Create a technical diagram showing ColorRamp node for mask control.

Left section - Node setup:
- Input: Z-pass (grayscale depth)
- ColorRamp node (detailed view):
  - Gradient stops visible
  - Color stops: Black → White
  - Adjustment controls visible
- Output: Controlled mask
- Connection: Z-pass → ColorRamp → Mask output

Middle section - Process visualization:
Top: "Input Z-Pass" - Greyscale depth gradient
Arrow down
Middle: "ColorRamp Processing" - Gradient with adjustment markers
Arrow down
Bottom: "Output Mask" - High-contrast black/white mask

Right section - Result application:
- Original render
- Mask applied (showing masked area)
- Final effect (fog or selective adjustment)

Annotations:
- "Input range" pointing to ColorRamp
- "Adjust stops to control mask"
- "Output controls what's affected"
- Example note: "Common uses: Depth fog, distance effects, selection masks"

Design:
- Node view: Dark grey (#2b2b2b)
- ColorRamp: Clear gradient with visible stops
- Process arrows: Bold, white
- Example images: Clear, demonstrative
- Background: Professional dark theme
- Text: White, clear labels

Style: Technical workflow diagram. Blender aesthetic. Resolution: 1800x1000. Educational material showing practical masking technique.
```

### **Prompt 23: Color Correction Workflow Diagram**
```
Create a clean SVG flowchart showing the professional color grading process.

Flow (left to right or top to bottom):

Box 1: "Evaluate" (grey)
- Icon: Eye symbol
- "Assess exposure, contrast, color balance"
↓
Box 2: "Fix Exposure" (blue)
- Icon: Sun/brightness symbol
- "RGB Curves or Exposure node"
- "Make overall brightness correct"
↓
Box 3: "Set Contrast" (blue)
- Icon: Contrast adjustment bars
- "S-curve in RGB Curves"
- "Separate darks from lights"
↓
Box 4: "White Balance" (blue)
- Icon: Temperature scale
- "Correct color temperature"
- "Neutralize unwanted tints"
↓
Box 5: "Adjust Saturation" (blue)
- Icon: Color intensity slider
- "Hue/Saturation/Value node"
- "Control color intensity"
↓
Box 6: "Creative Grade" (purple)
- Icon: Palette symbol
- "Color Balance node"
- "Apply stylistic look"
↓
Box 7: "Output" (green)
- Icon: Checkmark
- "Final polished image"

Design:
- Boxes: Rounded rectangles with subtle gradients
- Arrows: Bold, smooth curves
- Icons: Simple line icons in white
- Text: Clear hierarchy (titles bold, descriptions lighter)
- Color coding: Grey→Blue→Purple→Green (showing workflow stages)
- Background: Light grey (#f5f5f5) or white
- Drop shadows: Subtle depth

Style: Modern flowchart, professional infographic aesthetic. Clean, minimal design. Resolution: 1200x1800 (vertical) or 2400x800 (horizontal). Suitable for both screen and print. Educational process visualization.
```

### **Prompt 24: Complete Color Grading Node Tree**
```
Create a screenshot of a professional, complete color grading node setup in Blender Compositor.

Node tree (left to right):
1. Render Layers node (left)
   - Image output connected
   
2. RGB Curves node
   - Showing adjusted curve (S-curve visible)
   - Label: "Exposure & Contrast"
   
3. Hue/Saturation/Value node
   - Saturation at 0.95
   - Label: "Saturation Control"
   
4. Color Balance node
   - Settings visible (teal shadows, warm highlights)
   - Label: "Creative Grade"
   
5. Composite node (right)
   - Final output
   
Additional elements:
- Viewer node branching off before Composite (for preview)
- Clean, organized layout with proper spacing
- Reroute nodes used to keep connections tidy
- Frame around node group labeled "Color Grading Stack"
- Backdrop showing final graded image

Design:
- Background: Dark grey (#2b2b2b)
- Nodes: Standard Blender appearance (#404040)
- Connections: Yellow lines (image data)
- Selected nodes: Orange outline
- Labels: Small text annotations near nodes
- Organized left-to-right flow
- Professional spacing and arrangement

Style: Clean Blender Compositor screenshot showing professional workflow organization. Resolution: 2400x1000 (wide). Educational example of proper node tree structure.
```

### **Prompt 25: Before/After Color Grade Comparison**
```
Create a split-screen comparison showing the impact of professional color grading.

Layout: Vertical split down the middle

Left side - "Before Grading":
- Raw render from Blender
- Technically correct but flat
- Neutral colors, medium contrast
- Label clearly visible: "BEFORE - Raw Render"
- Somewhat lifeless, lacks mood

Right side - "After Grading":
- Same scene with full color grade applied
- Enhanced contrast (punchy blacks, bright highlights)
- Cinematic color (teal shadows, warm highlights)
- Saturated but natural
- Label clearly visible: "AFTER - Color Graded"
- Atmospheric, professional, mood established

Scene content:
- Interesting subject (interior, character, product, landscape)
- Good lighting to show grade effect
- Identifiable elements for comparison
- Same camera angle and framing

Design:
- Thin white line dividing left/right
- Labels: Bold white text on dark overlay at top
- Before/After indicators clear
- Scene: 3D render aesthetic, professional quality
- Ensure clear difference but not overdone
- Realistic, achievable grading example

Style: Professional before/after comparison. Blender render aesthetic. Resolution: 2000x1125 (16:9 aspect). Educational demonstration showing value of color grading.
```

### **Prompt 26: Teal & Orange Look Setup**
```
Create an educational composite showing how to create the cinematic teal & orange look.

Top section - Color Balance node closeup:
- Node displayed with three sections visible
- Lift (Shadows): Sliders show blue +0.15, cyan +0.1
- Gamma (Midtones): Neutral, minimal adjustment
- Gain (Highlights): Sliders show red +0.2, yellow +0.1
- Annotations pointing to each: "Cool Shadows", "Warm Highlights"

Middle section - Color wheel representation:
- Two circles:
  - Left: Teal/Cyan color (shadows)
  - Right: Orange/Warm color (highlights)
- Text: "Complementary colors create cinematic separation"
- Arrow showing "This look is everywhere in Hollywood!"

Bottom section - Example result:
- Split or side-by-side:
  - Before: Normal neutral render
  - After: Teal shadows, orange highlights applied
- Scene showing clear teal in shadows, warm orange in lit areas
- Label: "Classic Blockbuster Look"

Design:
- Node view: Dark grey background (#2b2b2b)
- Color wheels: Vibrant, accurate colors
- Example images: Clear demonstration of effect
- Annotations: Yellow callouts with white text
- Background: Professional dark theme
- Text: Clear, educational tone

Style: Step-by-step tutorial for popular grade. Blender interface aesthetic. Resolution: 1400x1600 (tall format). Professional training material for cinematic color grading.
```

### **Prompt 27: Color Grading Styles Examples**
```
Create a comprehensive comparison grid showing different color grading aesthetics applied to the same scene.

Layout: 3 columns x 2 rows (6 total styles)

Base scene (consistent across all):
- Interesting 3D scene (interior or exterior with good detail)
- Same camera angle, lighting, framing in each panel
- Quality render showing full range of tones

Panel styles:
Row 1:
1. "Cinematic" - Teal shadows, orange highlights, high contrast
2. "High-Key" - Very bright, low contrast, desaturated, airy
3. "Low-Key" - Dark, dramatic shadows, moody, film noir

Row 2:
4. "Vintage/Film" - Lifted blacks, muted colors, warm tint, slightly faded
5. "HDR" - Hyper-saturated, strong contrast, sharp, vibrant
6. "Natural" - Balanced, realistic, subtle adjustments, neutral

Each panel:
- Style name in bold at top
- Description tags below (e.g., "warm, dramatic, Hollywood")
- Clear visual demonstration of that aesthetic

Design:
- Grid layout with thin white borders
- Equal-sized panels
- Dark background (#1a1a1a) around grid
- Style labels: Large, white, clear typography
- Overall title: "Color Grading Style Reference"
- Subtitle: "Same Scene - Different Moods"

Style: Professional reference guide. Blender render aesthetic. Resolution: 2400x1600. Educational comparison showing creative range of color grading.
```

### **Prompt 28: Compositor Pipeline Overview**
```
Create a comprehensive SVG diagram showing the complete compositing pipeline from start to finish.

Flow diagram (left to right):

Start:
"3D Scene" (grey box)
- Icon: 3D cube wireframe
↓
"Render" (grey box)
- Icon: Camera
- "F12 - Create base image"
↓
"Render Passes" (multi-branch)
- Splits into multiple colored paths:
  - "Combined" (main path)
  - "Z/Depth" (side path)
  - "AO" (side path)
  - "Emission" (side path)
  - "Other passes" (dotted)
↓ (paths converge)
"Compositor" (blue box - central)
- Icon: Node network
- "Node-based processing"
↓ (splits into two parallel paths)
Path A: "Effects"
- Blur
- Glare
- Denoise

Path B: "Color Correction"
- RGB Curves
- HSV
- Color Balance
↓ (paths merge)
"Final Output" (green box)
- Icon: Checkmark
- "Polished image ready for delivery"

Design elements:
- Boxes: Rounded rectangles with subtle gradients
- Icons: Simple line art, white
- Arrows: Bold, smooth bezier curves
- Color coding:
  - Grey: Source/input
  - Blue: Processing
  - Green: Output
  - Various colors for pass types
- Background: Light grey (#f5f5f5) or white
- Text: Clear hierarchy (titles bold, notes lighter)
- Subtle drop shadows for depth

Style: Professional flowchart/infographic. Modern, clean aesthetic. Resolution: 2400x1200 (wide format). Suitable for presentations and documentation. Educational big-picture overview of compositing workflow.
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Socket Type Reference** (#5) - Clean geometric shapes (circles for sockets), text labels, connection diagrams. Perfect for vector format, scales without quality loss, simple color palette.

2. **Keyboard Shortcuts Cheat Sheet** (#6) - Primarily text and simple keyboard key shapes. Vector format ensures crisp text at any size, easy to update and maintain.

3. **Color Correction Workflow Diagram** (#23) - Flowchart with boxes, arrows, and icons. Vector format ideal for process diagrams, maintains clarity when scaled or printed.

4. **Compositor Pipeline Overview** (#28) - Complex flowchart showing entire pipeline. SVG ensures all text and connections remain sharp at any zoom level, perfect for presentations.

**Rationale for SVG recommendations:** These four images consist primarily of geometric shapes, text, icons, and connecting lines—all elements that benefit from vector format. SVG ensures perfect clarity at any size (crucial for cheat sheets and diagrams), small file sizes, easy editing for future updates, and professional appearance in both screen and print. The other 24 images require screenshots, realistic renders, or photographic elements that must remain raster format (PNG).

---

## Image Placement Suggestions in HTML

### Section: Introduction to Compositing (id="introduction")
- **After first paragraph:** Insert **Image #1** (Compositor Workspace Overview) - Gives immediate visual context
- **Within "What is Compositing?" card:** Insert **Image #28** (Compositor Pipeline Overview) - Illustrates the flowchart concept
- **After "Why Use the Compositor?" section:** Insert **Image #25** (Before/After Color Grade) - Demonstrates impact

### Section: The Compositor Interface (id="compositor-interface")
- **After "Accessing the Compositor" heading:** Insert **Image #2** (Compositor Node Editor Interface)
- **Within "The Compositor Layout" card:** Insert **Image #3** (Default Compositor Setup)
- **After "Key Nodes" explanation:** Insert **Image #4** (Render Layers Node Outputs)
- **Within "Understanding Sockets" card:** Insert **Image #5** (Socket Type Reference)
- **After "Essential Keyboard Shortcuts" table:** Insert **Image #6** (Keyboard Shortcuts Cheat Sheet)
- **Within "Working with the Backdrop" section:** Insert **Image #7** (Backdrop Viewing Examples)

### Section: Understanding Render Passes (id="render-passes")
- **After "What Are Render Passes?" heading:** Insert **Image #8** (Render Pass Visual Examples)
- **Within "Enabling Render Passes" card:** Insert **Image #9** (View Layer Properties Panel)
- **Within "Essential Render Passes" - Data Passes:** Insert **Image #10** (Z Pass Visualization)
- **After Normal pass description:** Insert **Image #11** (Normal Pass Visualization)
- **After AO pass description:** Insert **Image #12** (AO Pass Application Example)
- **Within "Working with Passes" section:** Insert **Image #13** (Cryptomatte Selection Demo)

### Section: Essential Compositor Nodes (id="basic-nodes")
- **After "Color Nodes" heading:** Insert **Image #14** (RGB Curves Node Interface)
- **Within RGB Curves explanation:** Insert **Image #15** (S-Curve Contrast Adjustment)
- **After HSV node description:** Insert **Image #16** (Hue/Saturation/Value Node)
- **After Color Balance description:** Insert **Image #17** (Color Balance Node Layout)
- **Within "Filter Nodes" section:** Insert **Image #18** (Glare Node Types Comparison)
- **After Blur node description:** Insert **Image #19** (Blur Node with Depth of Field)
- **Within "Mix and Combine Nodes":** Insert **Image #20** (Mix Node Blend Modes)
- **After Alpha Over description:** Insert **Image #21** (Alpha Over Compositing Example)
- **Within "Converter Nodes" section:** Insert **Image #22** (ColorRamp Masking Technique)

### Section: Color Correction Workflow (id="color-correction")
- **At section start:** Insert **Image #23** (Color Correction Workflow Diagram) - Overview of process
- **Within workshop project:** Insert **Image #24** (Complete Color Grading Node Tree)
- **After workshop completion:** Insert **Image #25** (Before/After Color Grade Comparison) - Show results
- **Within "Common Color Grading Styles":** Insert **Image #26** (Teal & Orange Look Setup)
- **After all style descriptions:** Insert **Image #27** (Color Grading Styles Examples)

### Section: Summary (id="summary")
- **At summary start:** Reference back to **Image #28** (Compositor Pipeline Overview) - Tie everything together

---

## File Naming Convention

```
lesson_43_01_compositor_workspace_overview.png
lesson_43_02_node_editor_interface.png
lesson_43_03_default_setup.png
lesson_43_04_render_layers_outputs.png
lesson_43_05_socket_type_reference.svg
lesson_43_06_keyboard_shortcuts_cheatsheet.svg
lesson_43_07_backdrop_viewing_examples.png
lesson_43_08_render_pass_examples.png
lesson_43_09_view_layer_properties_panel.png
lesson_43_10_z_pass_visualization.png
lesson_43_11_normal_pass_visualization.png
lesson_43_12_ao_pass_application.png
lesson_43_13_cryptomatte_demo.png
lesson_43_14_rgb_curves_interface.png
lesson_43_15_s_curve_contrast.png
lesson_43_16_hsv_node_controls.png
lesson_43_17_color_balance_layout.png
lesson_43_18_glare_types_comparison.png
lesson_43_19_blur_depth_of_field.png
lesson_43_20_mix_blend_modes.png
lesson_43_21_alpha_over_example.png
lesson_43_22_colorramp_masking.png
lesson_43_23_color_correction_workflow.svg
lesson_43_24_complete_grading_tree.png
lesson_43_25_before_after_comparison.png
lesson_43_26_teal_orange_setup.png
lesson_43_27_grading_styles_examples.png
lesson_43_28_compositor_pipeline_overview.svg
```

**Format guidelines:**
- Two-digit numbering for proper sorting
- Descriptive names using underscores
- PNG for screenshots and renders
- SVG for diagrams and infographics
- Consistent naming pattern for easy management

---

## Production Priority

### High Priority (Essential for Understanding - Produce First)
1. **Image #1 - Compositor Workspace Overview** - Students need immediate orientation to the interface
2. **Image #3 - Default Compositor Setup** - Shows the essential starting point everyone uses
3. **Image #8 - Render Pass Visual Examples** - Critical for understanding what passes contain
4. **Image #14 - RGB Curves Node Interface** - Most important color correction tool
5. **Image #24 - Complete Color Grading Node Tree** - Shows real-world professional workflow
6. **Image #25 - Before/After Color Grade Comparison** - Demonstrates the value of compositing

**Rationale:** These six images directly support the primary learning objectives. Without them, students cannot visualize the interface, understand render passes, or see the practical results. They answer the core questions: "What does this look like?" and "Why should I do this?"

### Medium Priority (Helpful Enhancement - Produce Second)
7. **Image #5 - Socket Type Reference** - Clarifies data flow understanding
8. **Image #9 - View Layer Properties Panel** - Shows where to enable essential features
9. **Image #10 - Z Pass Visualization** - Demonstrates most commonly used pass
10. **Image #12 - AO Pass Application** - Practical example students will use immediately
11. **Image #15 - S-Curve Contrast Adjustment** - Core technique for color work
12. **Image #18 - Glare Node Types Comparison** - Popular effect students want to use
13. **Image #20 - Mix Node Blend Modes** - Essential for combining elements
14. **Image #23 - Color Correction Workflow Diagram** - Process overview for methodology
15. **Image #26 - Teal & Orange Look Setup** - Popular style everyone wants to try
16. **Image #27 - Color Grading Styles Examples** - Inspiring reference for creative work

**Rationale:** These images enhance comprehension and provide practical examples that students will frequently reference. They bridge theory to practice and give visual answers to "How do I do this?" questions. Important for skill development but concepts can be understood without them.

### Lower Priority (Nice to Have - Produce Last)
17. **Image #2 - Compositor Node Editor Interface** - Detailed but redundant with #1
18. **Image #4 - Render Layers Node Outputs** - Useful but can explore in software
19. **Image #6 - Keyboard Shortcuts Cheat Sheet** - Helpful reference but not critical for learning
20. **Image #7 - Backdrop Viewing Examples** - Feature that's intuitive once shown once
21. **Image #11 - Normal Pass Visualization** - Advanced pass, less commonly used
22. **Image #13 - Cryptomatte Demo** - Professional tool, complex, nice extra
23. **Image #16 - HSV Node Controls** - Simple interface, self-explanatory
24. **Image #17 - Color Balance Node Layout** - Covered adequately in text
25. **Image #19 - Blur DOF Example** - Specific technique, optional
26. **Image #21 - Alpha Over Example** - Straightforward concept
27. **Image #22 - ColorRamp Masking** - Advanced technique
28. **Image #28 - Compositor Pipeline Overview** - Nice context but Mermaid diagram exists

**Rationale:** These images provide additional detail and alternative visualizations. While they add polish and completeness, the lesson remains effective without them. Students can discover these concepts through experimentation, or the information is adequately conveyed through text and existing higher-priority images.

---

## Style Consistency Guidelines

### Color Palette
**Blender Interface Colors:**
- Background: Dark grey (#2b2b2b)
- Node backgrounds: Slightly lighter grey (#404040)
- Selection/Active: Bright orange (#ff8c00)
- Text: White (#ffffff)
- Wireframes: Cyan (#00d9ff)
- Success indicators: Green (#4CAF50)
- Warning/attention: Red (#f44336)

**Annotation Colors:**
- Arrows: White with dark outline or cyan (#00d9ff)
- Callout boxes: Yellow (#ffd700) with semi-transparency
- Highlight circles: Orange (#ff8c00) with 50% opacity
- Text labels: White with dark stroke for readability

**Socket Colors (Blender Standard):**
- RGBA/Color: Yellow (#ffcc00)
- Value/Float: Grey (#999999)
- Vector: Blue (#6699ff)

### Blender Version
- Use Blender 4.0+ interface appearance
- Dark theme (default)
- Standard icon set
- Maintain consistency with official Blender UI design

### View Angles and Camera
**For 3D renders:**
- Default view: 45-degree angle showing front and side
- Camera height: Slightly above object center
- Consistent lighting across similar shots
- World background: Neutral grey or HDRI for realism

**For interface screenshots:**
- Capture at 1920x1080 minimum resolution
- Standard Blender layout proportions
- Clear, uncluttered workspace
- Essential panels visible, irrelevant UI hidden

### Selection Highlighting
- Selected nodes: Orange outline (#ff8c00), 2px width
- Active elements: Bright orange fill or highlight
- Connection paths: Thicker when selected (3px vs 1.5px)
- Hover states: Subtle lighter grey background

### Typography
**For annotations and labels:**
- Font family: Roboto, Inter, or system sans-serif
- Heading size: 24-32pt, bold
- Body text: 14-18pt, regular weight
- Small labels: 12-14pt
- All text: White or very light grey for contrast
- Add text stroke/outline when over complex backgrounds

### Annotation Style
**Arrows:**
- Style: Simple line arrows, not fancy
- Width: 2-3px
- Color: White with dark outline OR cyan
- Tips: Solid triangular arrowhead
- Curve: Smooth bezier for elegance

**Callout boxes:**
- Background: Semi-transparent yellow or dark grey
- Border: 1px solid white or contrasting color
- Corner radius: 4-8px for modern look
- Padding: 8-12px internal spacing
- Text: Left-aligned, clear hierarchy

---

## Accessibility Considerations

### Text Legibility
- **Minimum font size:** 14pt for body text in final images
- **Contrast ratio:** Maintain 4.5:1 minimum (WCAG AA)
- **Text backgrounds:** Always use semi-transparent backgrounds or outlines for text over images
- **Font weight:** Use bold or semi-bold for emphasis, avoid light weights

### Color Considerations
- **Don't rely on color alone:** Use labels, numbers, or patterns in addition to color coding
- **High contrast:** Ensure annotations stand out from background
- **Colorblind-friendly:** Avoid red-green only distinctions; use different shapes or patterns
- **Test visibility:** Check that elements are visible at small sizes and on various screens

### Alternative Text Preparation
For each image, prepare alt text that describes:
- What the image shows
- Key visual information
- Relationships between elements
- Any text contained in the image

### Information Density
- **Avoid overcrowding:** Maximum 5-7 annotations per image
- **Clear hierarchy:** Most important information first/largest
- **White space:** Leave breathing room around elements
- **Focus points:** Use size and contrast to guide attention

### Sequential Understanding
- **Numbered steps:** When showing process, use clear 1-2-3 numbering
- **Directional flow:** Use arrows to show reading/process order
- **Logical grouping:** Related items clustered together
- **Clear boundaries:** Visual separation between different concepts

---

## Technical Specifications

### Screenshot Resolution
- **Minimum resolution:** 1920x1080 for full interface captures
- **Optimal resolution:** 2560x1440 for clarity at various sizes
- **Close-up shots:** Higher resolution (3840x2160) for detailed node views
- **Crop thoughtfully:** Remove unnecessary empty space while maintaining context

### Image Format
**PNG (Primary format):**
- Use for: Screenshots, interface captures, rendered images, composites
- Settings: 24-bit RGB or 32-bit RGBA (with transparency)
- Compression: PNG-24 with optimization
- Why: Lossless quality, transparency support, sharp text

**SVG (For diagrams):**
- Use for: Flowcharts, infographics, diagrams, icons, shortcuts reference
- Why: Infinite scalability, small file size, crisp at any zoom, easy updates
- Export settings: Optimize SVG, embed fonts or convert to paths

**JPG (Avoid unless necessary):**
- Only if: File size critical AND no transparency needed
- Quality: 90-95% to minimize artifacts
- Note: Generally avoid for technical documentation

### File Size Targets
- **Full screenshots:** 500KB - 2MB (PNG optimized)
- **Composites/grids:** 1MB - 3MB (more detail)
- **SVG diagrams:** 50KB - 200KB (vector efficiency)
- **Optimization:** Use tools like TinyPNG, ImageOptim, or pngquant

### Compression and Optimization
**PNG optimization workflow:**
1. Capture/create at high resolution
2. Crop and scale to final size
3. Run through PNG optimizer (reduce palette if possible)
4. Verify quality hasn't degraded
5. Target: 30-50% file size reduction without visible quality loss

**SVG optimization:**
1. Remove unnecessary metadata
2. Simplify paths where possible
3. Group related elements
4. Embed or link fonts appropriately
5. Minify XML (remove whitespace)

### Responsive Sizing Considerations
**Create images that work at multiple sizes:**
- Test readability at 50% scale (common for mobile)
- Ensure text remains legible at thumbnail size
- Consider providing multiple resolutions if needed
- Use SVG for content that must scale perfectly

### Color Space and Profiles
- **Color space:** sRGB (web standard)
- **Bit depth:** 8-bit per channel (24-bit RGB)
- **Profile:** Embed sRGB profile for consistency
- **Gamma:** 2.2 (standard display gamma)

---

## Special Considerations for This Lesson

### Compositor-Specific Requirements

**Node Tree Complexity:**
- Show realistic node trees, not overly simplified
- But keep them organized and clean (use Frames, Reroutes)
- Demonstrate good node layout practices
- Color-code or group related nodes

**Backdrop Integration:**
- Show backdrop visible in node editor when relevant
- Demonstrate how backdrop updates with changes
- Use backdrop to show before/after comparisons
- Ensure backdrop image doesn't obscure nodes

**Pass Visualization:**
- Render passes must be clearly distinguishable
- Use consistent lighting across pass comparisons
- Show same scene from same angle for all passes
- Label passes clearly (many look similar to beginners)

**Color Accuracy:**
- Color grading examples must show accurate colors
- Avoid compression artifacts that distort color
- Use high-quality source renders
- Show subtle differences clearly (may need exaggeration for learning)

### Render Quality for Examples

**Base scenes for examples:**
- Create reusable Blender scenes for consistency
- Simple geometry that demonstrates concepts clearly
- Good lighting that shows grading effects
- Materials varied enough to show pass separation

**Render settings:**
- Use Cycles for all pass examples (more comprehensive)
- Sufficient samples to avoid noise (unless showing denoise)
- Proper exposure (not too dark or blown out)
- Final resolution adequate for image requirements

### Multi-Panel Layouts

**For comparison grids:**
- Equal panel sizes for fair comparison
- Consistent framing across panels
- Clear visual separation (borders)
- Maintain same scene/angle in each panel
- Labels integrated cleanly

**For before/after:**
- Split-screen with clear divider
- Or side-by-side with equal weighting
- Synchronized framing and scale
- Labels don't obscure important areas

### Annotation Density

**For this technical lesson:**
- More annotations are acceptable (complex interface)
- But still limit to 5-7 per image maximum
- Use numbered callouts for sequential instructions
- Group related annotations with lines/boxes
- Ensure annotations don't create visual clutter

---

## Production Notes

### Blender Scene Setup for Consistency

**Create master scene file:**
- Default cube scene (simple, recognizable)
- Standard three-point lighting setup
- Camera at consistent angle
- Materials: One diffuse, one glossy, one mixed
- Save as `lesson_43_master_scene.blend`

**Lighting standards for screenshots:**
- Viewport shading: Solid or Material Preview
- Background: Theme default (dark)
- No dramatic lighting unless demonstrating effect
- Consistent intensity across shots

### Camera Angles and Framing

**Interface screenshots:**
- Capture full workspace for overview shots
- Close-up on specific panels/nodes when detailed
- Leave 10-20px padding around edges
- Ensure critical info isn't near edges (may get cropped)

**Node trees:**
- Left-to-right flow (traditional reading direction)
- Frame entire tree with some margin
- Zoom level: Readable node names and socket labels
- Organize nodes before capturing

### Batch Processing Workflow

**Efficient production:**
1. Create all Blender scenes first (set up 3D content)
2. Capture all interface screenshots in one session (consistent state)
3. Render all 3D examples in batch (consistent quality)
4. Create all diagrams/infographics together (consistent style)
5. Add annotations in batches (consistent annotation style)
6. Optimize all images at once (consistent settings)

### Version Control and Iteration

**Save source files:**
- Keep original high-res captures
- Save annotation layers separately (PSD, XCF)
- Version iterations (image_v1, image_v2)
- Document settings used for future updates

**Master templates:**
- Create Figma/Illustrator templates for diagrams
- Blender scene templates for consistent renders
- Annotation style guide document
- Color palette swatches saved

### Template Reuse Opportunities

**Reusable elements:**
- Node screenshots (many nodes reusable across lessons)
- Standard annotations (arrows, callouts)
- Color grading example base scenes
- Interface chrome (headers, panels) can be composited

**Asset library:**
- Build library of common UI elements
- Reusable node configurations
- Standard annotation graphics
- Template compositions for multi-panel layouts

---

## Quality Checklist

Before finalizing images, verify:

- [ ] **All major lesson sections have appropriate image support** - No section left without visuals
- [ ] **Each image has clear educational purpose defined** - Not decorative, serves learning goal
- [ ] **AI prompts are detailed and specific** - Include color codes (#2b2b2b, #ff8c00), style guidance (Blender 4.0 dark theme), composition details
- [ ] **SVG recommendations are justified with clear rationale** - Explain why vector format benefits these specific images
- [ ] **Placement suggestions reference actual HTML section IDs** - Verified against lesson_43_compositor_basics.html structure
- [ ] **File naming follows consistent convention** - lesson_43_XX_descriptive_name.ext format throughout
- [ ] **Priority ranking is logical and justified** - High priority = essential for understanding, with specific rationale
- [ ] **Style/accessibility notes are comprehensive** - Color palette (#2b2b2b, #ff8c00, etc.), contrast, legibility covered
- [ ] **Output is well-organized** - Clear sections, easy navigation, professional formatting
- [ ] **Technical specifications cover all production needs** - Resolution, formats, compression, optimization detailed
- [ ] **Special considerations address lesson-specific requirements** - Compositor-specific needs covered
- [ ] **Annotations don't obscure critical information** - Maximum 5-7 per image maintained
- [ ] **Text is readable at 50% scale** - Mobile-friendly sizing verified
- [ ] **Colors maintain 4.5:1 contrast ratio minimum** - WCAG AA accessibility standard met
- [ ] **Socket colors follow Blender standards** - Yellow (RGBA), Grey (Value), Blue (Vector) consistently used
- [ ] **Before/after comparisons use identical framing** - Fair, accurate comparisons
- [ ] **All interface screenshots show Blender 4.0+ UI** - Current version consistency
- [ ] **Multi-panel layouts have equal-sized panels** - Visual balance and fair comparison
- [ ] **Diagrams include all necessary labels and legends** - Self-explanatory without external reference
- [ ] **File size targets are realistic and achieved** - PNG <2MB, SVG <200KB optimized

---

## Additional Recommendations

### Image Creation Workflow Phases

**Phase 1: Foundation (Week 1)**
- Create master Blender scene files
- Capture all interface screenshots
- Set up annotation templates and style guide
- Produce all High Priority images (#1, #3, #8, #14, #24, #25)

**Phase 2: Enhancement (Week 2)**
- Create all render pass examples
- Produce Medium Priority images
- Develop all node workflow demonstrations
- Create color grading examples

**Phase 3: Polish (Week 3)**
- Produce Lower Priority images
- Create all SVG diagrams and infographics
- Add final annotations and refinements
- Optimize all images for web

**Phase 4: Review (Week 4)**
- Quality check against checklist
- Test images at various sizes
- Verify accessibility standards
- Make final adjustments

### Alternative Approaches

**Video Clips (Consider for future enhancement):**
- Node tree building timelapse (30-second clips)
- Before/after color grade transitions (smooth animated wipes)
- Backdrop updating in real-time as adjustments made
- Pass switching demonstration (clicking through different passes)

**Interactive Elements:**
- Image hotspots showing node details on hover
- Slider comparisons for before/after grading
- Clickable render pass grid (click to see full-size)
- Interactive color balance controls demonstration

**Downloadable Assets:**
- Sample .blend files with pre-configured compositor setups
- Color grading presets (node groups)
- Practice images for students to grade
- Render pass example sets

### Future Enhancements

**Extended content:**
- Advanced compositing techniques lesson (masks, tracking)
- Color grading masterclass (20+ style examples)
- Render pass deep dive (all Cycles passes explained)
- Compositor node encyclopedia (every node detailed)

**Student practice materials:**
- Grading challenge scenes (practice files)
- Before/after comparison quizzes
- Node tree reconstruction exercises
- Pass identification tests

**Reference galleries:**
- 50+ color grading style examples
- Node tree patterns library
- Common compositor setups collection
- Troubleshooting visual guide

---

## Notes for Image Production

### Balancing Realism and Clarity

**Screenshots should:**
- Show actual Blender interface (authentic)
- But be cleaned up (close unnecessary panels)
- Use realistic node trees (not trivial examples)
- But keep them organized and readable
- Include real render results (not synthetic)
- But ensure they demonstrate concepts clearly

### Consistency vs. Variety

**Maintain consistency in:**
- Color palette across all images
- Blender version and theme
- Annotation style and typography
- Scene complexity and rendering quality

**Allow variety in:**
- Subject matter (keeps interesting)
- Camera angles (best for each concept)
- Layout approaches (grid vs. split vs. single)
- Level of detail (overview vs. close-up)

### Teaching Through Visuals

**Each image should:**
- Answer a specific question students have
- Show, don't just tell (visual > text)
- Build on previous images when possible
- Stand alone if viewed independently
- Lead naturally to next concept

**Avoid:**
- Decorative images that don't teach
- Over-complex examples that confuse
- Inconsistent quality across set
- Redundant images that repeat information
- Missing the "money shot" (critical visual answer)

---

## Final Production Recommendations

1. **Start with High Priority images** - Get the essentials done first to validate approach
2. **Build reusable templates early** - Saves massive time on later images
3. **Test one image at each priority level** - Verify quality before batch production
4. **Get feedback on first few images** - Adjust approach based on actual usage
5. **Document your process** - Create production notes for future lessons
6. **Keep source files organized** - Future updates will require original files
7. **Create style guide document** - Ensure consistency across all 51 lessons

**Estimated production time:**
- High Priority (6 images): 8-12 hours
- Medium Priority (10 images): 12-16 hours
- Lower Priority (12 images): 10-14 hours
- **Total: 30-42 hours for complete set**

**Resource requirements:**
- Blender 4.0+ (scenes and interface)
- Image editor (Photoshop, GIMP, Affinity Photo) for annotations
- Vector editor (Illustrator, Inkscape, Figma) for diagrams
- Screen capture tool (Snagit, ShareX, built-in)
- Image optimization tools (TinyPNG, ImageOptim)

---

**This documentation provides complete guidance for creating all 28 images needed for Lesson 43. Each image has detailed purpose, specifications, and AI generation prompts. Priority ranking ensures efficient production. Style guide maintains consistency. Quality checklist ensures professional results.**
