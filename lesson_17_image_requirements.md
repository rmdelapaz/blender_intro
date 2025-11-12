# Image Requirements for Lesson 17: HDRI and World Lighting

## Task Summary
**Lesson:** lesson_17_hdri_and_world_lighting.html
**Purpose:** Identify and document all images needed to augment the lesson content on HDRI (High Dynamic Range Imaging) and world lighting in Blender
**Date:** November 11, 2025

---

## Image List for Lesson 17

### **1. HDR vs LDR Comparison Diagram**
- **Purpose:** Visually demonstrate the difference between High Dynamic Range and Low Dynamic Range images
- **Type:** Composite/Infographic
- **Shows:** Side-by-side comparison showing LDR image with blown-out highlights and crushed blacks versus HDR image with detail in both bright and dark areas

### **2. Dynamic Range Visual Spectrum**
- **Purpose:** Illustrate the concept of dynamic range with a visual representation
- **Type:** Infographic/Diagram
- **Shows:** Visual spectrum showing 0-255 values for LDR (8-bit) versus unlimited values for HDR (32-bit), with example brightness values

### **3. HDRI as Sphere Wrapping Concept**
- **Purpose:** Help students understand how HDRI wraps around a 3D scene
- **Type:** 3D Diagram
- **Shows:** Spherical environment map surrounding a 3D object, with arrows indicating light rays from different pixels

### **4. Equirectangular Projection Diagram**
- **Purpose:** Show what an equirectangular HDRI looks like and how it maps to a sphere
- **Type:** Diagram with annotations
- **Shows:** Flat equirectangular HDRI map with grid overlay, plus small sphere showing how it wraps (similar to world map projection)

### **5. World Properties Panel Screenshot**
- **Purpose:** Show students where to find World Properties in Blender interface
- **Type:** Annotated screenshot
- **Shows:** Blender Properties panel with World Properties icon highlighted, showing Surface settings

### **6. Default World Shader Node Setup**
- **Purpose:** Show the starting point for world shader setup
- **Type:** Screenshot
- **Shows:** Shader Editor in World mode with default Background node connected to World Output node

### **7. HDRI Setup Node Workflow (Step-by-step)**
- **Purpose:** Visual guide for complete HDRI node setup
- **Type:** Multi-panel composite (4 panels)
- **Shows:** 
  - Panel 1: Empty world shader
  - Panel 2: Adding Environment Texture node
  - Panel 3: Loading HDRI file
  - Panel 4: Final connected setup

### **8. Complete HDRI Node Network**
- **Purpose:** Show the full node setup with all components
- **Type:** Annotated screenshot
- **Shows:** Environment Texture → Background → World Output, with all connections clearly labeled and color-coded

### **9. HDRI Rotation Node Setup**
- **Purpose:** Show how to add rotation control to HDRI
- **Type:** Annotated screenshot
- **Shows:** Texture Coordinate → Mapping → Environment Texture chain with Rotation parameters highlighted

### **10. Viewport Shading Mode Icons**
- **Purpose:** Help students find the correct viewport mode for seeing HDRI
- **Type:** Annotated screenshot
- **Shows:** Blender viewport top-right icons with Material Preview and Rendered modes highlighted

### **11. HDRI Strength Comparison**
- **Purpose:** Demonstrate visual effect of different strength values
- **Type:** 3-panel composite
- **Shows:** Same scene rendered at strength 0.5, 1.0, and 2.5

### **12. HDRI Rotation Effect Demonstration**
- **Purpose:** Show how rotating HDRI changes lighting direction
- **Type:** 4-panel composite
- **Shows:** Same object with HDRI rotated 0°, 90°, 180°, 270°

### **13. HDRI Types Comparison Grid**
- **Purpose:** Show examples of different HDRI categories
- **Type:** 6-panel grid composite
- **Shows:** Outdoor clear sky, cloudy, sunset, studio, interior, night/urban - each labeled

### **14. Outdoor HDRI Example Renders**
- **Purpose:** Demonstrate various outdoor HDRI lighting results
- **Type:** 4-panel composite
- **Shows:** Same object lit by clear sky, cloudy, sunset, and night HDRIs

### **15. Studio HDRI Example Renders**
- **Purpose:** Show professional studio lighting setups
- **Type:** 3-panel composite
- **Shows:** Three-point studio, softbox grid, single key + ambient

### **16. Interior HDRI Examples**
- **Purpose:** Demonstrate indoor environment lighting
- **Type:** 3-panel composite
- **Shows:** Window light, artificial light, mixed lighting scenarios

### **17. Hybrid Lighting Concept Diagram**
- **Purpose:** Illustrate the concept of combining HDRI with manual lights
- **Type:** Infographic/Diagram
- **Shows:** Venn diagram or layered diagram showing HDRI (ambient/reflections) + Manual lights (control) = Best results

### **18. HDRI + Key Light Setup**
- **Purpose:** Show most common hybrid lighting setup
- **Type:** Composite (scene + node setup)
- **Shows:** Split view of rendered result plus shader/light setup showing low-strength HDRI and manual key light

### **19. Three-Point Lighting + HDRI Diagram**
- **Purpose:** Visualize complete hybrid lighting setup
- **Type:** 3D diagram with annotations
- **Shows:** Object with HDRI environment (subtle), Key light, Fill light, and Rim light positions labeled

### **20. Poly Haven Website Navigation Guide**
- **Purpose:** Help students find and download HDRIs
- **Type:** Annotated screenshot
- **Shows:** Poly Haven website with key areas highlighted (search, categories, download options)

### **21. HDRI File Organization Diagram**
- **Purpose:** Show recommended folder structure for HDRI library
- **Type:** Folder tree diagram/Infographic
- **Shows:** Directory structure with organized categories (Outdoor, Studio, Interior, Creative subfolders)

### **22. Separate Lighting and Background Node Setup**
- **Purpose:** Advanced technique for independent control
- **Type:** Complex node network screenshot with annotations
- **Shows:** Light Path node setup with Mix Shader for separate camera and lighting backgrounds

### **23. Color Grading Nodes Examples**
- **Purpose:** Show advanced color control options
- **Type:** 3-panel composite
- **Shows:** HSV node setup, ColorRamp setup, RGB Curves setup between Environment Texture and Background

### **24. HDRI Quality Comparison**
- **Purpose:** Demonstrate difference between HDRI resolutions
- **Type:** 3-panel detail comparison
- **Shows:** Close-up reflections showing 2K vs 4K vs 8K HDRI quality

### **25. Troubleshooting Flowchart**
- **Purpose:** Quick visual guide for solving common HDRI problems
- **Type:** Flowchart diagram
- **Shows:** Decision tree starting with "HDRI not working?" leading to various checks and solutions

### **26. Viewport Mode Comparison**
- **Purpose:** Show why correct viewport mode matters
- **Type:** 3-panel composite
- **Shows:** Same HDRI scene in Solid, Material Preview, and Rendered modes

### **27. Node Connection Close-up**
- **Purpose:** Detailed view of proper node connections
- **Type:** Zoomed screenshot with annotations
- **Shows:** Close-up of Color output to Color input connection with data types visible

### **28. HDRI File Formats Visual Guide**
- **Purpose:** Help students identify correct file formats
- **Type:** Infographic
- **Shows:** File icons for .hdr, .exr (correct) vs .jpg, .png (incorrect), with checkmarks and X marks

### **29. Project Setup Reference**
- **Purpose:** Visual guide for project scene setup
- **Type:** Composite screenshot
- **Shows:** Complete project scene with object, ground plane, camera position, and lighting

### **30. Before/After HDRI Comparison**
- **Purpose:** Dramatically show HDRI impact
- **Type:** 2-panel side-by-side
- **Shows:** Same scene without HDRI (default gray) vs with HDRI lighting

---

## AI Image Generation Prompts

### **Prompt 1: HDR vs LDR Comparison Diagram**
```
Create an educational infographic showing the difference between HDR and LDR images. Split-screen layout with two sections. Left side labeled "LDR (Low Dynamic Range)": show a photograph of a sunset scene where the bright sky is completely blown out to pure white and the foreground is crushed to pure black, with a gradient bar showing 0-255 values (8-bit). Right side labeled "HDR (High Dynamic Range)": show the same scene with visible detail in both the bright sky and dark foreground, with a gradient bar showing unlimited values beyond 1.0 (32-bit floating point).

Style: Clean educational diagram with clear labels
Background: White or light gray (#f5f5f5)
Text: Professional sans-serif font, high contrast
Visual elements: Include value scales showing 8-bit vs 32-bit range
Annotations: Arrow indicators pointing to blown-out areas in LDR and preserved detail in HDR
Context: Technical training material for 3D artists
Dimensions: 1920x1080 landscape format
```

### **Prompt 2: Dynamic Range Visual Spectrum**
```
Create an infographic illustrating dynamic range concept. Show two horizontal gradient bars. Top bar labeled "LDR - 8-bit per channel": gradient from black to white with 256 discrete steps visible, with numbers 0, 128, 255 marked. Bottom bar labeled "HDR - 32-bit per channel": smooth gradient from black through white extending beyond, with values 0.0, 1.0, 2.0, 5.0, 10.0+ marked showing values can exceed 1.0.

Include icons: Sun icon at bright end (value 10.0+), light bulb at mid-bright (value 2.0), ambient light at neutral (1.0), shadow area at dim (0.1).

Style: Modern infographic design
Colors: Gradient from pure black (#000000) through mid-gray (#808080) to pure white (#ffffff) and beyond (indicated with glowing effect)
Background: Dark gray (#2b2b2b)
Labels: White text with clear contrast
Context: Professional training diagram
Dimensions: 1600x900 horizontal layout
```

### **Prompt 3: HDRI as Sphere Wrapping Concept**
```
Create a 3D diagram showing how HDRI environment maps wrap around a scene. Central element: simple 3D sphere or cube object. Surrounding it: translucent spherical shell representing the HDRI environment, with a sample outdoor HDRI texture mapped onto the sphere (showing sky, ground, horizon). Multiple colored arrows pointing inward from different directions on the sphere toward the central object, representing light rays.

Labels: "HDRI Environment Sphere", "Light from all directions", "3D Object receives lighting"
Color coding: Blue arrows for sky light, warm orange arrows for sun/bright areas, cool arrows for shadow areas

Style: Technical 3D illustration with clean lines
Background: Dark gray (#2b2b2b) to make the concept stand out
Lighting: No complex lighting, keep it diagrammatic
Transparency: HDRI sphere should be semi-transparent (40% opacity) so inner object is visible
Context: Educational diagram for understanding IBL (Image-Based Lighting)
Dimensions: 1200x1200 square format
```

### **Prompt 4: Equirectangular Projection Diagram**
```
Create a diagram explaining equirectangular HDRI projection. Top half: flat equirectangular map showing a panoramic outdoor scene (sky at top, ground at bottom, 360° horizontal view), with a 2:1 aspect ratio. Add latitude/longitude grid overlay in white lines. Bottom half: small 3D sphere showing how the flat map wraps onto a spherical surface, with arrows connecting the flat map to the sphere to show the projection.

Annotations: "Equirectangular Map (2:1 ratio)", "Distorted at poles (like world map)", "Wraps to sphere around 3D scene"

Style: Clean technical diagram
Colors: Muted outdoor scene colors with white grid overlay
Background: Light gray (#e0e0e0)
Text: Dark text with high contrast
Arrows: Bright cyan (#00ffff) to show projection flow
Context: Technical documentation for 3D HDRI setup
Dimensions: 1920x1080 landscape with top/bottom layout
```

### **Prompt 5: World Properties Panel Screenshot**
```
Create a mock-up screenshot of Blender's Properties panel showing World Properties. Show the right-side Properties panel with several icons at the top (Scene, World, Object icons). Highlight the World Properties icon (sphere/globe icon) with a bright orange outline (#ff8c00). Below, display the Surface section showing Background shader controls with Color picker and Strength slider.

Style: Match Blender 4.0 dark theme interface
Background: Dark interface (#2b2b2b)
Highlight color: Bright orange (#ff8c00) glow around World icon
UI elements: Match Blender's interface style exactly
Labels: Add annotation arrow pointing to World icon with text "Click here for World Properties"
Text: Blender's default UI font
Context: Blender UI navigation guide
Dimensions: 800x1200 vertical panel format
```

### **Prompt 6: Default World Shader Node Setup**
```
Create a screenshot-style image of Blender's Shader Editor showing default World shader setup. Dark Shader Editor background (#1e1e1e). Two nodes visible: Background node (left) with Color input showing light gray and Strength value 1.0, connected to World Output node (right) via yellow shader connection line. Nodes should have Blender's characteristic rounded corners and clean appearance.

Style: Exact Blender Shader Editor appearance
Background: Shader Editor dark gray (#1e1e1e)
Node colors: Match Blender's shader node colors (Background is green-tinted)
Connection: Yellow shader connection line
Grid: Subtle dot grid in background (very faint)
Text: Blender's node font and size
Context: Blender shader node documentation
Dimensions: 1600x900 horizontal layout
```

### **Prompt 7: HDRI Setup Node Workflow (4-panel)**
```
Create a 4-panel step-by-step visual guide showing HDRI setup progression. Each panel shows Blender Shader Editor in World mode with numbered steps.

Panel 1 (top-left): "Step 1: Default Setup" - Background and World Output nodes only
Panel 2 (top-right): "Step 2: Add Environment Texture" - Environment Texture node added but not connected, floating between other nodes
Panel 3 (bottom-left): "Step 3: Load HDRI" - Environment Texture now showing HDRI preview thumbnail inside node
Panel 4 (bottom-right): "Step 4: Connect Nodes" - Complete setup with Environment Texture Color output connected to Background Color input

Style: Clean progression showing each step
Background: Shader Editor dark gray (#1e1e1e)
Connections: Yellow color output to color input lines
Labels: Step numbers in bright orange (#ff8c00) circles
Annotations: Brief text describing each step
Context: Tutorial step-by-step guide
Dimensions: 1920x1080 divided into 4 equal quadrants
```

### **Prompt 8: Complete HDRI Node Network**
```
Create an annotated Blender Shader Editor screenshot showing complete HDRI setup with all connections labeled. Left to right: Environment Texture node (showing HDRI preview) → Background node (Strength visible) → World Output node. Add colored annotation boxes:
- Green box around Environment Texture: "HDRI Image"
- Blue box around Color connection: "Color Data"
- Orange box around Strength value: "Brightness Control"
- Purple box around World Output: "Final Output"

Style: Clean Blender Shader Editor appearance with color-coded annotations
Background: Shader Editor dark gray (#1e1e1e)
Annotations: Colored boxes with white text, semi-transparent backgrounds
Connection lines: Yellow shader connections
Node previews: Show actual HDRI preview thumbnail in Environment Texture node
Context: Comprehensive node setup reference guide
Dimensions: 1920x1080 landscape
```

### **Prompt 9: HDRI Rotation Node Setup**
```
Create Blender Shader Editor screenshot showing rotation control node chain. Left to right: Texture Coordinate node → Mapping node → Environment Texture node → Background node → World Output node. Highlight Mapping node's Rotation Z-axis parameter with bright orange glow (#ff8c00). Show Rotation values (X: 0.0, Y: 0.0, Z: 45.0).

Add annotation: Large arrow pointing to Z Rotation value with text "Adjust this to rotate HDRI"

Style: Blender Shader Editor style
Background: Dark editor background (#1e1e1e)
Highlight: Bright orange glow around Rotation Z parameter
Connections: Green (vector) and yellow (shader) connection lines matching Blender's color coding
Nodes: Accurate Blender node appearance
Context: HDRI rotation control tutorial
Dimensions: 1920x1080 landscape
```

### **Prompt 10: Viewport Shading Mode Icons**
```
Create a close-up screenshot of Blender's viewport top-right corner showing the four shading mode icons. From left to right: Wireframe (wire cube), Solid (solid cube), Material Preview (sphere with shading), Rendered (sphere with realistic shading). Highlight Material Preview and Rendered icons with bright orange outlines (#ff8c00) and glowing effect.

Add annotation below: "Use these modes to see HDRI lighting" with arrow pointing up

Style: Exact Blender 4.0 interface appearance
Background: Dark gray Blender viewport header (#383838)
Icons: White/light gray icons on dark background
Highlights: Bright orange glows (#ff8c00)
Context: Blender UI navigation guide
Dimensions: 600x400 close-up detail view
```

### **Prompt 11: HDRI Strength Comparison (3-panel)**
```
Create a 3-panel horizontal comparison showing same 3D scene (simple sphere on ground plane) rendered with different HDRI strength values. Each panel shows outdoor HDRI background.

Left panel: "Strength: 0.5" - Dim lighting, darker scene, muted colors
Center panel: "Strength: 1.0" - Balanced lighting, standard exposure
Right panel: "Strength: 2.5" - Bright lighting, strong highlights, vibrant

Style: Clean renders in Cycles style
Object: Glossy sphere to show reflections clearly
Ground: Matte gray plane
HDRI: Outdoor clear sky visible in background
Labels: Large white text overlays showing strength values
Separators: Thin white lines between panels
Context: Parameter comparison educational material
Dimensions: 2400x800 (three 800px panels)
```

### **Prompt 12: HDRI Rotation Effect (4-panel grid)**
```
Create a 2x2 grid showing the same object (glossy sphere) rendered with HDRI rotated at different angles. All panels use the same outdoor HDRI with visible sun position.

Top-left: "0° Rotation" - Sun from right side
Top-right: "90° Rotation" - Sun from behind
Bottom-left: "180° Rotation" - Sun from left side  
Bottom-right: "270° Rotation" - Sun from front

Style: Consistent Cycles renders
Object: Chrome-like sphere showing clear reflections
Lighting: Outdoor HDRI with distinct sun position
Labels: White text overlays with rotation values
Visual element: Small compass/rotation diagram in each panel corner
Context: Demonstrating rotation parameter effect
Dimensions: 1600x1600 square grid (800x800 per panel)
```

### **Prompt 13: HDRI Types Comparison Grid (6-panel)**
```
Create a 3x2 grid showing examples of six different HDRI categories. Each panel shows a simple reflective sphere rendered with that HDRI type.

Top row:
- Panel 1: "Outdoor Clear Sky" - Blue sky with bright sun
- Panel 2: "Cloudy/Overcast" - Gray even sky
- Panel 3: "Sunset/Golden Hour" - Warm orange sky

Bottom row:
- Panel 4: "Studio" - Neutral gray with softbox lights visible
- Panel 5: "Interior" - Window light with room visible
- Panel 6: "Night/Urban" - Dark with colorful city lights

Style: Consistent simple sphere object across all panels
Object: Chrome sphere on matte gray plane
Labels: Category names in white text overlay
Borders: Thin white separators between panels
Context: HDRI category visual reference guide
Dimensions: 2400x1600 (800x533 per panel)
```

### **Prompt 14: Outdoor HDRI Example Renders (4-panel)**
```
Create 4-panel horizontal comparison showing product-style render with different outdoor HDRIs. Object: modern abstract sculpture or product design (same in all panels).

Panel 1: "Clear Sky Morning" - Bright, cool blue tones, crisp shadows
Panel 2: "Cloudy Midday" - Soft even lighting, minimal shadows
Panel 3: "Sunset" - Warm orange/pink tones, long dramatic shadows
Panel 4: "Night" - Dark with moonlight, minimal ambient

Style: Professional product rendering quality
Object: Consistent across all panels (metallic/glossy material)
Ground: White or light gray studio floor with reflections
Labels: HDRI type labeled at bottom of each panel
Context: Demonstrating outdoor HDRI mood variations
Dimensions: 3200x800 (four 800x800 panels horizontal)
```

### **Prompt 15: Studio HDRI Example Renders (3-panel)**
```
Create 3-panel horizontal comparison of same object (modern product design) with different studio HDRI setups.

Panel 1: "Three-Point Studio" - Clear key, fill, rim light separation visible in reflections
Panel 2: "Softbox Grid" - Very even lighting from multiple directions, minimal shadows
Panel 3: "Single Key + Ambient" - One dominant light source with subtle fill

Style: Professional product photography rendering
Object: Sleek product with glossy surfaces to show reflections
Background: Clean white or neutral gray
Labels: Setup name in clean sans-serif font
Lighting: Studio HDRI characteristics clearly visible
Context: Studio lighting comparison for product visualization
Dimensions: 2400x800 (three 800x800 panels)
```

### **Prompt 16: Interior HDRI Examples (3-panel)**
```
Create 3-panel comparison showing interior HDRI lighting scenarios on same object.

Panel 1: "Window Light" - Strong directional light from one side, warm/cool contrast
Panel 2: "Artificial Light" - Warm yellow/orange artificial lighting, visible lamps in reflections
Panel 3: "Mixed Lighting" - Combination of window and artificial, complex lighting pattern

Style: Atmospheric interior render quality
Object: Artistic object or sculpture that shows lighting well
Environment: Interior elements visible in reflections
Labels: Lighting type clearly labeled
Mood: Each panel should have distinct atmosphere
Context: Interior HDRI category demonstrations
Dimensions: 2400x800 (three 800x800 panels horizontal)
```

### **Prompt 17: Hybrid Lighting Concept Diagram**
```
Create an infographic diagram explaining hybrid HDRI + manual lights concept. Center design showing three overlapping circles in Venn diagram style:

Left circle (blue): "HDRI Lighting" with icons for ambient light, reflections, atmosphere
Right circle (orange): "Manual Lights" with icons for key light, fill light, rim light
Center overlap (purple): "Best Results" with checkmark and icons showing combined benefits

Below circles: Two side-by-side examples:
- Left: "HDRI Only" simple sphere with just environmental lighting
- Right: "HDRI + Manual" same sphere with environmental + directional lighting

Style: Modern infographic design
Colors: Blue (#667eea) for HDRI, orange (#ff8c00) for manual, purple (#764ba2) for combination
Background: Light gray (#f5f5f5)
Icons: Simple line-art style icons
Text: Clear labels and brief descriptions
Context: Concept explanation diagram for lighting strategy
Dimensions: 1920x1080 landscape
```

### **Prompt 18: HDRI + Key Light Setup**
```
Create a split-screen educational image. Left side (60%): rendered result showing object lit by combination of low-strength HDRI and manual Area light creating clear key lighting. Right side (40%): node setup view showing Background shader with Strength 0.4 and separate 3D viewport showing Area light position relative to object.

Style: Educational split-screen reference
Left side: Professional render quality showing combined lighting result
Right side: Clean technical view of setup (nodes + light position)
Object: Product or artistic object showing lighting clearly
Lighting result: Visible ambient from HDRI plus strong directional key light
Annotations: Arrows pointing to HDRI strength and manual light with labels
Context: Hybrid lighting technique demonstration
Dimensions: 1920x1080 landscape split
```

### **Prompt 19: Three-Point Lighting + HDRI Diagram**
```
Create a 3D diagram showing complete hybrid lighting setup from top-down view. Center: object (represented as simple shape). Surrounding: translucent HDRI sphere environment (subtle, muted). Three manual lights with clear positions and labels:

- Key Light (front-right, 45°, brightest) - orange cone showing light direction
- Fill Light (front-left, lower intensity) - blue cone
- Rim Light (back-right, creating edge highlight) - cyan cone

Add subtle arrows showing light directions
Include legend: HDRI = ambient/reflections, Manual lights = controlled directional

Style: Clean technical diagram with 3D perspective
Background: Dark gray (#2b2b2b)
HDRI sphere: Very subtle, 20% opacity
Light cones: Semi-transparent colored cones showing coverage
Labels: Clear text labels for each light type
Context: Advanced lighting setup diagram
Dimensions: 1200x1200 square format
```

### **Prompt 20: Poly Haven Website Navigation Guide**
```
Create an annotated screenshot mockup of Poly Haven website homepage (polyhaven.com). Show main sections with bright orange (#ff8c00) annotation boxes and arrows:

1. Top search bar highlighted: "Search by keyword"
2. Category filters highlighted: "Filter by type"
3. HDRI thumbnail grid highlighted: "Browse available HDRIs"
4. Individual HDRI card highlighted: "Click to view details"
5. Download button highlighted: "Download multiple resolutions"

Style: Clean website mockup with clear annotations
Website appearance: Modern, clean design matching Poly Haven style
Highlights: Bright orange arrows and callout boxes
Text: Numbered steps in annotation boxes
Context: Website navigation tutorial for finding HDRIs
Dimensions: 1920x1080 landscape screenshot style
```

### **Prompt 21: HDRI File Organization Diagram**
```
Create a folder tree diagram showing recommended HDRI library organization. Visual tree structure with folder icons:

📁 HDRIs/
├── 📁 Outdoor/
│   ├── 📁 Clear_Sky/ (☀️ icon, "5-10 files")
│   ├── 📁 Cloudy/ (☁️ icon, "3-5 files")
│   ├── 📁 Sunset/ (🌅 icon, "3-5 files")
│   └── 📁 Night/ (🌙 icon, "2-3 files")
├── 📁 Studio/
│   ├── 📁 Softbox/ (💡 icon, "3-5 files")
│   ├── 📁 Product_Lighting/ (📸 icon, "3-5 files")
│   └── 📁 Neutral/ (⚪ icon, "2-3 files")
├── 📁 Interior/
│   ├── 📁 Window_Light/ (🪟 icon, "2-3 files")
│   ├── 📁 Artificial/ (💡 icon, "2-3 files")
│   └── 📁 Mixed/ (🔆 icon, "2-3 files")
└── 📁 Creative/
    ├── 📁 Urban/ (🏙️ icon, "2-3 files")
    ├── 📁 Neon/ (✨ icon, "1-2 files")
    └── 📁 Abstract/ (🎨 icon, "1-2 files")

Style: Clean folder tree visualization
Colors: Yellow folder icons, colorful category icons
Background: White or light gray (#f5f5f5)
Font: Monospace for tree structure, sans-serif for labels
Context: File organization guide for asset management
Dimensions: 1200x1400 vertical layout
```

### **Prompt 22: Separate Lighting and Background Node Setup**
```
Create a complex Blender Shader Editor screenshot showing advanced Light Path technique. Show complete node network:

- Two Environment Texture nodes (both showing same HDRI)
- Light Path node (showing Is Camera Ray output highlighted)
- Mix Shader node (Fac input highlighted)
- Two Background nodes (one labeled "Camera - Low Strength", one labeled "Lighting - High Strength")
- World Output node

Connections clearly shown with color-coded lines
Annotations: Numbered callouts (1-5) explaining signal flow

Style: Detailed Blender Shader Editor appearance
Background: Editor dark gray (#1e1e1e)
Highlights: Bright orange (#ff8c00) for key nodes/connections
Annotations: Semi-transparent colored boxes with white text
Context: Advanced HDRI technique documentation
Dimensions: 1920x1080 landscape, may need to be slightly wider for all nodes
```

### **Prompt 23: Color Grading Nodes Examples (3-panel)**
```
Create a 3-panel horizontal comparison showing different color grading node setups in Blender Shader Editor.

Panel 1: "HSV Node" - Environment Texture → Hue Saturation Value node → Background, with HSV controls visible
Panel 2: "ColorRamp" - Environment Texture → ColorRamp node → Background, with gradient bar visible
Panel 3: "RGB Curves" - Environment Texture → RGB Curves node → Background, with curve graph visible

Style: Clean Shader Editor screenshots
Background: Editor dark gray (#1e1e1e)
Nodes: Accurate Blender node appearance
Highlights: Key controls in each node highlighted with orange glow
Labels: Panel titles in white text overlay
Context: Color grading technique options guide
Dimensions: 2400x800 (three 800x800 panels)
```

### **Prompt 24: HDRI Quality Comparison (3-panel detail)**
```
Create a 3-panel extreme close-up comparison showing HDRI resolution differences in reflections. Each panel shows identical chrome sphere with visible HDRI reflections zoomed in to 400%.

Panel 1: "2K HDRI" - Slightly pixelated HDRI details visible in reflection
Panel 2: "4K HDRI" - Clear detailed HDRI in reflection, good quality
Panel 3: "8K HDRI" - Sharp, crystal-clear HDRI details in reflection

Style: High-quality close-up renders
Focus: Extreme detail on reflective surface
Visual difference: Clearly show resolution quality difference
Labels: Resolution clearly marked
Red circles: Highlight specific areas showing quality differences
Context: Technical quality comparison for resolution selection
Dimensions: 2400x800 (three 800x800 close-up panels)
```

### **Prompt 25: Troubleshooting Flowchart**
```
Create a decision tree flowchart for HDRI troubleshooting. Start at top: "HDRI Not Working?"

Branch 1: "Scene dark?" → Yes → Check: "Viewport in Rendered mode?" → No → "Switch to Material Preview/Rendered" (Solution box in green)
Branch 2: "Scene dark?" → Yes → Check: "Strength above 0?" → No → "Increase Background Strength" (Solution box in green)
Branch 3: "Background visible but no lighting?" → Yes → "Check Light Bounces (Cycles) or AO (Eevee)" (Solution box in green)
Branch 4: "Won't load HDRI?" → Yes → "Check file format (.hdr or .exr)" (Solution box in green)
Branch 5: "Grainy render?" → Yes → "Increase samples or enable denoising" (Solution box in green)

Style: Clean flowchart design
Colors: Problem boxes in orange (#ff8c00), question boxes in blue (#667eea), solution boxes in green (#4CAF50)
Arrows: Clear directional flow, labeled Yes/No
Background: Light gray (#f5f5f5)
Icons: Small alert/warning icons in problem boxes, checkmark icons in solution boxes
Context: Quick troubleshooting reference guide
Dimensions: 1200x1600 vertical flowchart
```

### **Prompt 26: Viewport Mode Comparison (3-panel)**
```
Create 3-panel comparison showing same HDRI scene in different Blender viewport modes.

Panel 1: "Solid Mode" - Flat shaded view, no HDRI visible, object in solid color
Panel 2: "Material Preview" - Moderate quality, HDRI visible, materials show basic properties
Panel 3: "Rendered Mode" - Full quality, realistic HDRI lighting and reflections

Style: Actual Blender viewport appearance
Object: Reflective sphere or object showing clear differences
HDRI: Outdoor HDRI with visible sky/sun
Labels: Mode names in white text overlays
Visual indicators: Small mode icons in corner of each panel
Context: Viewport mode comparison for proper HDRI viewing
Dimensions: 2400x800 (three 800x800 panels horizontal)
```

### **Prompt 27: Node Connection Close-up**
```
Create an extreme close-up screenshot of Blender node connection showing proper connection technique. Focus on: Environment Texture node's Color output socket (yellow circle) connected with yellow line to Background node's Color input socket (yellow circle). 

Show:
- Circular sockets clearly visible with yellow color coding
- Connection line between them (yellow shader connection)
- Socket labels "Color" visible
- Slight glow effect when connection is active

Add annotation: "Yellow = Color data" with arrow pointing to connection

Style: Extreme close-up of Blender nodes
Background: Editor dark gray (#1e1e1e)
Sockets: Yellow shader color sockets clearly visible
Connection: Yellow line with slight glow
Annotation: White text with orange arrow
Context: Technical detail view for connection accuracy
Dimensions: 1200x800 close-up view
```

### **Prompt 28: HDRI File Formats Visual Guide**
```
Create an infographic showing correct and incorrect HDRI file formats. Two columns:

LEFT COLUMN - "✅ Correct Formats" (green header):
- .HDR file icon with "Radiance HDR" label - large checkmark
- .EXR file icon with "OpenEXR" label - large checkmark
- Text: "True HDR data, unlimited range"

RIGHT COLUMN - "❌ Incorrect Formats" (red header):
- .JPG file icon with "JPEG" label - large X mark
- .PNG file icon with "PNG" label - large X mark  
- Text: "8-bit, limited range, not true HDR"

Below both columns: "Use .hdr or .exr for realistic lighting!"

Style: Clean infographic design
Colors: Green (#4CAF50) for correct, red (#f44336) for incorrect
Icons: Recognizable file icons with extensions
Checkmarks/X marks: Large, clear, bold
Background: White or light gray (#f5f5f5)
Context: File format reference guide
Dimensions: 1200x1000 vertical layout
```

### **Prompt 29: Project Setup Reference**
```
Create a comprehensive Blender viewport screenshot showing complete project scene setup. Camera view showing:

- Main object (modern sculpture or product) centered
- Ground plane extending beyond visible area
- Camera positioned at 45° angle
- No default light (deleted)
- HDRI visible in background
- Grid floor visible

Include overlay information:
- Camera outlined in orange
- Ground plane labeled
- Object labeled
- "Default light deleted" notation with X mark
- Small reference showing top view of camera/object relationship

Style: Clear Blender viewport appearance
Mode: Material Preview or Rendered to show HDRI
Overlays: On, showing camera outline
Labels: White text with black outline for visibility
Reference inset: Small top-down view showing spatial relationship
Context: Project setup template reference
Dimensions: 1920x1080 landscape
```

### **Prompt 30: Before/After HDRI Comparison**
```
Create dramatic 2-panel side-by-side before/after comparison showing HDRI impact.

LEFT PANEL: "Before - Default Lighting" 
- Same object lit only by default gray world background
- Flat, boring lighting
- Minimal shadows and highlights
- Dull appearance
- Label: "Strength 1.0, Gray background"

RIGHT PANEL: "After - HDRI Lighting"
- Same object lit by outdoor HDRI
- Rich, dimensional lighting
- Clear shadows and highlights
- Reflections showing environment
- Vibrant, realistic appearance
- Label: "Outdoor HDRI, Strength 1.5"

Style: High-quality Cycles renders
Object: Same in both panels (glossy material to show reflection difference)
Ground: Same matte plane in both
Dramatic difference: Clear visual improvement in "after"
Separator: Thin white line between panels
Context: Demonstrating HDRI value/impact
Dimensions: 1920x1080 (two 960x1080 panels)
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Dynamic Range Visual Spectrum** (#2) - Simple gradient bars with numeric labels, scalable and clean
2. **Equirectangular Projection Diagram** (#4) - Geometric shapes, grid overlay, projection lines - perfect for vector
3. **Hybrid Lighting Concept Diagram** (#17) - Venn diagram with icons, infographic style benefits from vector scalability
4. **HDRI File Organization Diagram** (#21) - Folder tree structure with icons, text-heavy diagram ideal for SVG
5. **Troubleshooting Flowchart** (#25) - Decision tree with boxes, arrows, text - classic SVG use case
6. **HDRI File Formats Visual Guide** (#28) - Icon-based infographic with checkmarks and X marks, clean vector design

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, icons, and diagrams rather than photorealistic renders or complex shading. SVG format provides:
- Infinite scalability without quality loss
- Smaller file sizes for web delivery
- Easy editability for future updates
- Crisp appearance at any zoom level
- Perfect for infographics, diagrams, flowcharts, and technical illustrations

---

## Image Placement Suggestions in HTML

### Section: What is HDRI (id="what-is-hdri")

**After the "Understanding HDRI" card:**
- Insert Image #1 (HDR vs LDR Comparison) - Shows the fundamental difference students need to understand
- Insert Image #2 (Dynamic Range Visual Spectrum) - Reinforces the numeric/technical aspect

**After "HDR vs. LDR Images" card:**
- Insert Image #30 (Before/After HDRI Comparison) - Dramatic demonstration of HDRI impact

**After "How HDRIs Work as Lighting" card:**
- Insert Image #3 (HDRI as Sphere Wrapping Concept) - Visualizes the abstract IBL concept

**After "Types of HDRI Maps" card:**
- Insert Image #4 (Equirectangular Projection Diagram) - Shows the standard HDRI format

### Section: World Lighting Basics (id="world-lighting-basics")

**After "Accessing World Properties" card:**
- Insert Image #5 (World Properties Panel Screenshot) - Shows where to find controls

**After "Default World Shader Setup" card:**
- Insert Image #6 (Default World Shader Node Setup) - Shows starting point for modifications

### Section: Setting Up HDRI (id="setting-up-hdri")

**After "Step-by-Step HDRI Setup" card:**
- Insert Image #7 (HDRI Setup Node Workflow 4-panel) - Complete visual workflow guide
- Insert Image #8 (Complete HDRI Node Network) - Final setup reference

**After "Quick Setup Summary" box:**
- Insert Image #10 (Viewport Shading Mode Icons) - Shows how to view results

**After "Testing Your HDRI Setup" card:**
- Insert Image #26 (Viewport Mode Comparison) - Demonstrates correct viewing mode
- Insert Image #27 (Node Connection Close-up) - Detail view for troubleshooting connections

**After "HDRI File Formats" card:**
- Insert Image #28 (HDRI File Formats Visual Guide) - Quick format reference
- Insert Image #24 (HDRI Quality Comparison) - Shows resolution differences

### Section: Adjusting HDRI Properties (id="adjusting-hdri")

**After "Strength (Brightness)" card:**
- Insert Image #11 (HDRI Strength Comparison) - Visual demonstration of strength values

**After "Rotation" card:**
- Insert Image #9 (HDRI Rotation Node Setup) - Shows how to add rotation control
- Insert Image #12 (HDRI Rotation Effect) - Demonstrates rotation impact

**After "Color Adjustment" card:**
- Insert Image #23 (Color Grading Nodes Examples) - Shows color control options

### Section: Types of HDRIs (id="hdri-types")

**After introductory paragraph:**
- Insert Image #13 (HDRI Types Comparison Grid) - Overview of all categories

**After "Outdoor/Natural HDRIs" card:**
- Insert Image #14 (Outdoor HDRI Example Renders) - Specific outdoor examples

**After "Studio HDRIs" card:**
- Insert Image #15 (Studio HDRI Example Renders) - Studio lighting examples

**After "Interior HDRIs" card:**
- Insert Image #16 (Interior HDRI Examples) - Interior lighting scenarios

### Section: Combining HDRI with Manual Lights (id="combining-lights")

**After "Why Combine HDRI and Manual Lights?" card:**
- Insert Image #17 (Hybrid Lighting Concept Diagram) - Conceptual understanding

**After "Common Hybrid Lighting Setups" card:**
- Insert Image #18 (HDRI + Key Light Setup) - Most common setup example
- Insert Image #19 (Three-Point Lighting + HDRI Diagram) - Complete hybrid setup

### Section: Finding and Using HDRIs (id="finding-hdris")

**After "Free HDRI Resources" card:**
- Insert Image #20 (Poly Haven Website Navigation Guide) - Website navigation help

**After "File Organization" card:**
- Insert Image #21 (HDRI File Organization Diagram) - Recommended folder structure

### Section: Advanced HDRI Techniques (id="advanced-techniques")

**After "Separate Lighting and Background" card:**
- Insert Image #22 (Separate Lighting and Background Node Setup) - Complex node network

### Section: Troubleshooting HDRI Issues (id="troubleshooting")

**At beginning of section:**
- Insert Image #25 (Troubleshooting Flowchart) - Quick decision tree for solving problems

### Section: Project (id="project")

**After "Part 1: Scene Setup":**
- Insert Image #29 (Project Setup Reference) - Complete scene setup template

---

## File Naming Convention

```
lesson_17_01_hdr_ldr_comparison.png
lesson_17_02_dynamic_range_spectrum.svg
lesson_17_03_hdri_sphere_concept.png
lesson_17_04_equirectangular_projection.svg
lesson_17_05_world_properties_panel.png
lesson_17_06_default_world_shader.png
lesson_17_07_hdri_setup_workflow.png
lesson_17_08_complete_node_network.png
lesson_17_09_rotation_node_setup.png
lesson_17_10_viewport_shading_icons.png
lesson_17_11_strength_comparison.png
lesson_17_12_rotation_effect.png
lesson_17_13_hdri_types_grid.png
lesson_17_14_outdoor_examples.png
lesson_17_15_studio_examples.png
lesson_17_16_interior_examples.png
lesson_17_17_hybrid_concept_diagram.svg
lesson_17_18_hdri_key_light_setup.png
lesson_17_19_three_point_hdri_diagram.png
lesson_17_20_poly_haven_navigation.png
lesson_17_21_file_organization.svg
lesson_17_22_separate_lighting_nodes.png
lesson_17_23_color_grading_nodes.png
lesson_17_24_quality_comparison.png
lesson_17_25_troubleshooting_flowchart.svg
lesson_17_26_viewport_mode_comparison.png
lesson_17_27_node_connection_closeup.png
lesson_17_28_file_formats_guide.svg
lesson_17_29_project_setup_reference.png
lesson_17_30_before_after_comparison.png
```

**Format guidelines:**
- Two-digit numbering (01-30)
- Descriptive names using underscores
- .png for screenshots, renders, and complex images
- .svg for diagrams, flowcharts, and infographics
- All lowercase for consistency

---

## Production Priority

### High Priority (Essential for Understanding Core Concepts)

1. **Image #8 - Complete HDRI Node Network** - Students absolutely need to see the correct node setup
2. **Image #7 - HDRI Setup Node Workflow** - Step-by-step is critical for success
3. **Image #1 - HDR vs LDR Comparison** - Fundamental concept that defines what HDRI is
4. **Image #13 - HDRI Types Comparison Grid** - Essential visual reference for different HDRI categories
5. **Image #9 - HDRI Rotation Node Setup** - Critical control that students will use constantly
6. **Image #11 - HDRI Strength Comparison** - Shows most common adjustment students will make
7. **Image #25 - Troubleshooting Flowchart** - Will save students hours of frustration
8. **Image #30 - Before/After HDRI Comparison** - Dramatically shows why HDRI matters

**Rationale:** These images directly support the primary learning objectives and are referenced multiple times in the lesson. Without them, students will struggle to set up HDRI correctly or understand why they're doing it. The node setup images (#7, #8, #9) are particularly critical as they show the exact technical implementation. The comparison images (#1, #11, #30) provide essential visual proof of concepts. The troubleshooting flowchart (#25) addresses the most common blocking issues students will encounter.

### Medium Priority (Greatly Enhance Understanding)

9. **Image #3 - HDRI as Sphere Wrapping Concept** - Helps visualize abstract IBL concept
10. **Image #17 - Hybrid Lighting Concept Diagram** - Important technique for professional results
11. **Image #14 - Outdoor HDRI Example Renders** - Shows real-world applications of outdoor HDRIs
12. **Image #15 - Studio HDRI Example Renders** - Demonstrates studio lighting capabilities
13. **Image #5 - World Properties Panel Screenshot** - UI navigation essential for beginners
14. **Image #12 - HDRI Rotation Effect** - Reinforces rotation control impact
15. **Image #28 - HDRI File Formats Visual Guide** - Prevents common file format mistakes
16. **Image #26 - Viewport Mode Comparison** - Solves viewport visibility issues
17. **Image #21 - HDRI File Organization Diagram** - Practical asset management guidance
18. **Image #18 - HDRI + Key Light Setup** - Most common hybrid approach demonstration
19. **Image #10 - Viewport Shading Mode Icons** - Quick UI reference for viewing HDRI
20. **Image #4 - Equirectangular Projection Diagram** - Technical understanding of HDRI format

**Rationale:** These images significantly improve comprehension and prevent common mistakes, but students could potentially complete the lesson without them if they read carefully. They provide valuable context, reinforcement, and practical guidance that accelerates learning. The HDRI category examples (#14, #15) help students choose appropriate HDRIs. The viewport and UI images (#5, #10, #26) address common beginner confusion points. The organizational and workflow images (#17, #18, #21) support professional practices.

### Lower Priority (Nice to Have, Enhance Experience)

21. **Image #2 - Dynamic Range Visual Spectrum** - Technical detail that reinforces HDR concept
22. **Image #6 - Default World Shader Node Setup** - Starting point reference
23. **Image #16 - Interior HDRI Examples** - Additional HDRI category examples
24. **Image #19 - Three-Point Lighting + HDRI Diagram** - Advanced hybrid technique
25. **Image #20 - Poly Haven Website Navigation** - Website interface help (can navigate without)
26. **Image #22 - Separate Lighting and Background Node Setup** - Advanced technique
27. **Image #23 - Color Grading Nodes Examples** - Advanced color control options
28. **Image #24 - HDRI Quality Comparison** - Technical quality differences
29. **Image #27 - Node Connection Close-up** - Extreme detail view for troubleshooting
30. **Image #29 - Project Setup Reference** - Project-specific reference

**Rationale:** These images provide supplementary information, advanced techniques, or reference materials that enhance the lesson but aren't critical for core understanding. Students can complete projects and understand main concepts without them. They're valuable for completeness and serve students who want to dive deeper or need very specific guidance. The advanced technique images (#19, #22, #23) serve more experienced users. The detail images (#2, #24, #27) provide technical depth for curious students. The project reference (#29) is helpful but students can set up scenes from text instructions.

---

## Notes

### Style Consistency Guidelines

**Color Palette for All Images:**
- Blender interface dark gray: #2b2b2b
- Shader Editor background: #1e1e1e  
- Highlight/selection orange: #ff8c00
- Connection wires yellow (shader): #ffd700
- Connection wires green (vector): #00ff00
- Annotation blue: #667eea
- Success green: #4CAF50
- Warning orange: #ffc107
- Error red: #f44336
- Light background gray: #f5f5f5
- White text: #ffffff

**Blender Version:**
- All screenshots and mockups should reflect Blender 4.0+ interface
- Use current dark theme as default
- Node designs should match current Blender appearance

**View Angles for 3D Renders:**
- Default camera: 45° angle from object
- Lighting should be visible and clear
- Reflections should be prominent on glossy objects
- Ground plane always visible for context

**Selection Highlighting:**
- Use bright orange (#ff8c00) glow or outline
- Consistent thickness (3-5px) for outlines
- Semi-transparent overlays (30% opacity)
- Arrow annotations in matching orange

**Typography:**
- Primary font: Clean sans-serif (Roboto, Inter, or similar)
- Code/technical: Monospace font
- Labels: 18-24pt for readability
- Annotations: 14-18pt
- High contrast for all text

**Annotation Style:**
- Numbered callouts in circles for multi-step processes
- Arrow style: Simple, bold, with slight curve
- Callout boxes: Semi-transparent background with border
- Color-coded by purpose (blue for info, orange for attention, green for success)

### Accessibility Considerations

**For All Images:**
- High contrast between text and background (minimum 4.5:1 ratio)
- Large enough text to be readable when scaled down
- Avoid relying solely on color to convey information (use shapes/patterns too)
- Include text labels in addition to color coding
- Alternative text descriptions should be provided in HTML

**For Diagrams:**
- Clear visual hierarchy
- Logical reading order (left-to-right, top-to-bottom)
- Sufficient spacing between elements
- Clear connection lines that don't overlap confusingly

**For Comparison Images:**
- Consistent subject/object across all panels
- Clear labels for each variant
- Separators between panels for clarity
- Panel order that makes logical sense (progression or contrast)

### Technical Specifications

**Screenshot Resolution:**
- UI screenshots: Minimum 1920x1080 for full interface views
- Detail screenshots: Minimum 1200x800 for close-ups
- Multi-panel composites: Each panel minimum 800x800
- Maintain 2x resolution for retina displays where possible

**Image Format:**
- **PNG for:**
  - Screenshots with transparency
  - Renders with gradients
  - Any image with text that needs to be sharp
  - Complex multi-color images
- **SVG for:**
  - Diagrams with simple shapes
  - Flowcharts and decision trees
  - Infographics with text and icons
  - Any image that needs to scale perfectly
- **JPG for:**
  - Large photographic-style renders (if file size is concern)
  - Background images without transparency
  - Use quality 90-95% to avoid artifacts

**File Size Target:**
- PNG screenshots: Under 500KB (use compression)
- PNG renders: Under 1MB
- SVG diagrams: Under 100KB
- Multi-panel composites: Under 1.5MB
- Total all images for lesson: Target under 20MB

**Compression:**
- PNG: Use tools like TinyPNG or ImageOptim
- Maintain quality while reducing file size
- Test compression doesn't lose critical detail
- SVG: Optimize and remove unnecessary metadata

**Responsive Sizing:**
- Images should work at mobile sizes (400px width)
- Text should remain readable when scaled down
- Consider providing multiple resolutions for critical images
- Use CSS to ensure images don't break layout on small screens

### Special Considerations for This Lesson

**HDRI Image Challenges:**
- Many images need to show HDRI backgrounds clearly
- Reflections are critical to demonstrate HDRI effectiveness
- Need consistent test objects across multiple comparisons
- Color accuracy important for demonstrating color temperature differences

**Node Network Complexity:**
- Some node setups are quite complex (especially advanced techniques)
- May need extra-wide images to show all nodes without crowding
- Consider breaking very complex setups into multiple images
- Annotations crucial for guiding through complex node networks

**Before/After Comparisons:**
- Critical to show exact same scene/object/camera angle
- Only lighting should change between panels
- Dramatic difference important to show HDRI value
- Consistent materials across comparisons

**File Format Examples:**
- Actual file icons should be recognizable
- Show both correct (.hdr, .exr) and incorrect (.jpg, .png) formats
- Visual indicators (checkmarks, X marks) must be very clear
- Color coding helps but shouldn't be only differentiator

### Production Notes

**Blender Scene Setup for Screenshots:**
- Create master template scene for HDRI comparisons
- Use same object (modern glossy sculpture or sphere) across images
- Save camera angles as presets for consistency
- Keep lighting setups documented for reproducibility

**Lighting Setup for Viewport:**
- Match Blender's default viewport lighting for UI screenshots
- Ensure interface elements are clearly visible
- Use screen capture at native resolution, then scale down

**Camera Angles for Consistency:**
- 45° angle as default for product-style renders
- Top-down for spatial relationship diagrams
- Side view for showing light direction
- Front view for showing results to viewer

**Batch Processing Workflow:**
1. Create all node setups first
2. Capture all screenshots in one session
3. Render all 3D visualizations with consistent settings
4. Apply color correction/adjustments as batch
5. Add annotations as final step
6. Export in appropriate formats
7. Compress and optimize all images

**Version Control:**
- Keep source Blender files for all 3D renders
- Maintain layered files (PSD/XCF) for composites with annotations
- Save SVG source files for all diagrams
- Document any custom assets or HDRIs used

**Template Reuse Opportunities:**
- Node network template can be reused for other shader lessons
- HDRI comparison grid layout can be template for other comparisons
- Troubleshooting flowchart style can be reused for other lessons
- Before/after comparison layout is reusable template
- Folder organization diagram format applicable to other asset types

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes (#hex), style guidance, dimensions
- [x] SVG recommendations are justified with clear rationale (6 images recommended)
- [x] Placement suggestions reference actual HTML section IDs
- [x] File naming follows consistent convention with descriptive names (lesson_17_XX_description.ext)
- [x] Priority ranking is logical and justified with clear rationale (High: 8 images, Medium: 12 images, Low: 10 images)
- [x] Style/accessibility notes are comprehensive and practical
- [x] Output is well-organized with clear sections and easy navigation
- [x] Technical specifications cover all production needs (formats, resolutions, file sizes)
- [x] Special considerations address lesson-specific requirements (HDRI backgrounds, node complexity, comparisons)
- [x] Production notes include workflow guidance and template reuse opportunities
- [x] Color palette standardized across all images with specific hex codes
- [x] Annotation style consistent (orange #ff8c00 highlights, numbered callouts, arrow style)
- [x] All comparison images use consistent test objects and camera angles
- [x] Node network images show complete, accurate Blender 4.0 appearance

---

## Additional Recommendations

### Image Creation Workflow

**Phase 1: High Priority Production (Week 1)**
- Focus on images #1, #7, #8, #9, #11, #13, #25, #30
- These are essential for lesson functionality
- Test with actual students/users if possible
- Iterate based on feedback before moving to Phase 2

**Phase 2: Medium Priority Production (Week 2)**
- Complete images #3, #5, #10, #12, #14, #15, #17, #18, #21, #26, #28
- These significantly improve lesson quality
- Can be released as enhancement update

**Phase 3: Lower Priority & Polish (Week 3)**
- Complete remaining images #2, #6, #16, #19, #20, #22, #23, #24, #27, #29
- Polish all images with consistent styling
- Final optimization and compression
- Complete documentation

### Alternative Approaches

**Video Alternatives:**
- Consider short video clips (10-30 seconds) for:
  - HDRI rotation demonstration (showing real-time rotation effect)
  - Node connection process (showing dragging connections)
  - Viewport mode switching (showing interface interaction)
- Benefits: Shows motion and interaction
- Drawbacks: Larger file sizes, requires video player

**Interactive Elements:**
- HDRI strength slider that updates preview in real-time
- Node network with clickable nodes for explanations
- Before/after comparison with slider control
- Requires JavaScript implementation
- Great for engagement but higher development cost

**360° Object Viewers:**
- Show object lit by HDRI from all angles
- Interactive rotation for exploration
- Excellent for demonstrating lighting from all directions
- Can be implemented with Three.js or similar

### Future Enhancements

**Downloadable Assets:**
- Starter HDRI pack (5-10 essential HDRIs)
- Pre-built Blender file with all example setups
- Node group presets for common HDRI setups
- Camera angle presets for consistent renders

**Interactive Quizzes:**
- "Identify the HDRI type" quiz with example renders
- "Match the node to its function" drag-and-drop
- "Find the mistake" in node setup diagrams
- Reinforces learning through interaction

**Comparison Gallery:**
- Expandable gallery showing same object with 20+ different HDRIs
- Filterable by category, time of day, mood
- Download option for high-res versions
- Helps students visualize HDRI variety

**Community Showcase:**
- User-submitted renders using HDRIs from lesson
- Voting system for favorites
- Comments on technique
- Builds community and provides inspiration

---

## Revision History

- **Version 1.0** - November 11, 2025 - Initial comprehensive image requirements document for Lesson 17: HDRI and World Lighting
  - 30 images identified covering all major lesson concepts
  - Detailed AI generation prompts for each image with specific hex colors, dimensions, and style guidance
  - 6 SVG recommendations for diagrams and infographics
  - Complete placement mapping to HTML section IDs
  - Three-tier priority system with detailed rationale
  - Comprehensive style guide with Blender 4.0 specifications
  - Production workflow and quality checklist
  - Special considerations for HDRI-specific challenges
  - Template structure optimized for lesson complexity
