# Image Requirements for Lesson 14: Advanced Materials and Shading

## Task Summary
**Lesson:** lesson_14_advanced_materials.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 14

### **1. Material Properties Comparison Diagram**
- **Purpose:** Show the visual difference between material properties
- **Type:** Composite/Diagram
- **Shows:** Three spheres side-by-side demonstrating different material properties (diffuse, metallic, glass)

### **2. Shader Editor Interface Overview**
- **Purpose:** Familiarize students with the Shader Editor workspace
- **Type:** Screenshot with annotations
- **Shows:** Complete Shader Editor interface with labeled areas (workspace, header, toolbar, sidebar)

### **3. Node Anatomy Diagram**
- **Purpose:** Explain the structure of a shader node
- **Type:** Annotated diagram/SVG
- **Shows:** Single node with labeled parts (header, input sockets, output sockets, parameters, socket colors)

### **4. Socket Color Reference Chart**
- **Purpose:** Quick reference for node socket data types
- **Type:** SVG infographic
- **Shows:** Color-coded circles with labels (Green=Shader, Yellow=Color, Gray=Value, Blue=Vector)

### **5. Basic Node Connection Example**
- **Purpose:** Show how to connect nodes properly
- **Type:** Screenshot/Diagram
- **Shows:** Principled BSDF connected to Material Output with green shader connection

### **6. Principled BSDF Parameter Overview**
- **Purpose:** Visual guide to all Principled BSDF inputs
- **Type:** Screenshot with callouts
- **Shows:** Complete Principled BSDF node with arrows pointing to key inputs

### **7. Base Color PBR Value Range Chart**
- **Purpose:** Show acceptable color value ranges for realistic materials
- **Type:** SVG infographic
- **Shows:** Gradient bar from black to white with labeled zones (too dark, realistic range, too bright)

### **8. Metallic Workflow Comparison**
- **Purpose:** Demonstrate metal vs non-metal behavior
- **Type:** Composite image
- **Shows:** Two spheres - one metallic (1.0) with colored reflections, one non-metallic (0.0) with white reflections

### **9. Roughness Scale Visual Guide**
- **Purpose:** Show how roughness values affect appearance
- **Type:** Composite image
- **Shows:** 5-7 spheres with increasing roughness from 0.0 (mirror) to 1.0 (matte)

### **10. IOR Reference Chart**
- **Purpose:** Common IOR values for real-world materials
- **Type:** SVG infographic table
- **Shows:** List of materials with IOR values (air=1.0, water=1.33, glass=1.5, diamond=2.4)

### **11. Transmission vs Alpha Comparison**
- **Purpose:** Clarify the difference between these two transparency methods
- **Type:** Composite diagram
- **Shows:** Two cubes - one with transmission (refracts), one with alpha (disappears)

### **12. Normal Map Setup Workflow**
- **Purpose:** Show correct node setup for normal maps
- **Type:** Node tree diagram
- **Shows:** Image Texture → Normal Map node → Principled BSDF connection with color space settings

### **13. Subsurface Scattering Example**
- **Purpose:** Demonstrate SSS effect on organic materials
- **Type:** Comparison composite
- **Shows:** Sphere with SSS off vs SSS on, showing light penetration

### **14. PBR Texture Map Types**
- **Purpose:** Visual reference for standard PBR texture maps
- **Type:** Multi-panel composite
- **Shows:** Example of each map type (Base Color, Roughness, Metallic, Normal, Height, AO)

### **15. Complete PBR Material Setup**
- **Purpose:** Show full node setup for PBR workflow
- **Type:** Node tree screenshot
- **Shows:** All texture maps connected to Principled BSDF with proper color space settings

### **16. Noise Texture Parameters Guide**
- **Purpose:** Demonstrate how noise texture settings affect output
- **Type:** Grid composite
- **Shows:** 3x3 grid showing different Scale, Detail, and Roughness combinations

### **17. ColorRamp Techniques Visual**
- **Purpose:** Show common ColorRamp manipulation techniques
- **Type:** Multi-panel diagram
- **Shows:** ColorRamp examples (thresholding, contrast increase, inversion, color variation)

### **18. Procedural Texture Gallery**
- **Purpose:** Visual reference for all procedural texture types
- **Type:** Grid composite
- **Shows:** Sample outputs of Noise, Voronoi, Wave, Musgrave, Magic, Checker, Brick, Gradient

### **19. Texture Coordinate Systems Comparison**
- **Purpose:** Show how different coordinate systems affect texture mapping
- **Type:** Composite image
- **Shows:** Same texture mapped using Generated, UV, Object coordinates

### **20. Mapping Node Controls Diagram**
- **Purpose:** Explain Mapping node transformation parameters
- **Type:** Annotated diagram
- **Shows:** Mapping node with arrows showing Location, Rotation, Scale effects

### **21. Mix Shader Basic Setup**
- **Purpose:** Show fundamental shader mixing workflow
- **Type:** Node tree diagram
- **Shows:** Two shaders → Mix Shader → Material Output with factor control

### **22. Layered Material Node Tree**
- **Purpose:** Demonstrate complex material layering
- **Type:** Organized node tree screenshot
- **Shows:** 3-4 Mix Shaders in sequence with frame nodes organizing layers

### **23. Geometry Node Outputs Visual**
- **Purpose:** Show Pointiness and other geometry data outputs
- **Type:** Composite image
- **Shows:** Object with Pointiness visualization (edges highlighted)

### **24. Edge Wear Using Pointiness**
- **Purpose:** Demonstrate realistic edge wear technique
- **Type:** Node setup + result composite
- **Shows:** Node tree with Geometry→ColorRamp→Mix Shader, plus rendered result

### **25. Glass Material Examples**
- **Purpose:** Show various glass material variations
- **Type:** Composite render
- **Shows:** Clear glass, frosted glass, tinted glass, dirty glass side-by-side

### **26. Metal Material Library**
- **Purpose:** Visual reference for different metal types
- **Type:** Composite render
- **Shows:** Gold, silver, copper, steel, aluminum spheres with appropriate colors/roughness

### **27. Procedural Wood Material Setup**
- **Purpose:** Complete workflow for creating wood material
- **Type:** Node tree + result composite
- **Shows:** Wave/Noise → ColorRamp setup with rendered wood result

### **28. Plastic Material Variations**
- **Purpose:** Show glossy vs matte plastic differences
- **Type:** Comparison composite
- **Shows:** Two objects - glossy plastic (low roughness) vs matte plastic (high roughness)

### **29. Stone/Rock Procedural Setup**
- **Purpose:** Demonstrate stone material creation
- **Type:** Node tree + result
- **Shows:** Voronoi/Musgrave → Bump node setup with rendered stone

### **30. Fabric Material with Sheen**
- **Purpose:** Show sheen parameter effect on fabric
- **Type:** Comparison composite
- **Shows:** Fabric material with sheen off vs on (grazing angle view)

### **31. Anisotropic Reflection Examples**
- **Purpose:** Demonstrate anisotropic highlight stretching
- **Type:** Composite render
- **Shows:** Brushed metal cylinder showing elongated highlights

### **32. Clearcoat Effect Demonstration**
- **Purpose:** Show dual-layer clearcoat reflection
- **Type:** Comparison composite
- **Shows:** Car paint material with clearcoat off vs on

### **33. Displacement vs Bump Comparison**
- **Purpose:** Clarify true displacement vs fake bump
- **Type:** Side-by-side close-up
- **Shows:** Silhouette comparison showing bump (flat edges) vs displacement (actual geometry)

### **34. Baking Workflow Diagram**
- **Purpose:** Step-by-step visual guide for texture baking
- **Type:** Flowchart/diagram
- **Shows:** Process steps from UV unwrap → bake settings → result

### **35. Material Performance Hierarchy Chart**
- **Purpose:** Visual guide to material complexity vs performance
- **Type:** SVG infographic
- **Shows:** Bar chart or pyramid showing fastest to slowest material types

### **36. Node Organization Example**
- **Purpose:** Show clean vs messy node tree organization
- **Type:** Before/after comparison
- **Shows:** Same material - disorganized vs organized with frames

### **37. Viewport Shading Modes Visual**
- **Purpose:** Show the four viewport shading options
- **Type:** Composite screenshot
- **Shows:** 2x2 grid of same object in Solid, Material Preview, Rendered, Wireframe

### **38. Color Space Settings Comparison**
- **Purpose:** Demonstrate importance of correct color space
- **Type:** Comparison composite
- **Shows:** Same texture with sRGB vs Non-Color (showing wrong vs right)

### **39. Common Material Problems Visual Guide**
- **Purpose:** Troubleshooting reference showing common issues
- **Type:** Multi-panel diagnostic image
- **Shows:** Examples of problems (stretched UVs, missing textures, wrong color space, etc.)

### **40. Complete Material Library Showcase**
- **Purpose:** Final project inspiration showing all material types
- **Type:** Professional render
- **Shows:** Multiple objects with different materials in well-lit scene

---

## AI Image Generation Prompts

### **Prompt 1: Material Properties Comparison Diagram**
```
Create a technical educational diagram showing three identical spheres side-by-side on a dark grey background (#2b2b2b). 

Left sphere: Diffuse/matte material - flat orange color, no reflections, completely matte surface showing only color without shine.

Middle sphere: Metallic material - chrome/silver appearance with sharp, clear reflections of environment, mirror-like surface, no diffuse color component.

Right sphere: Glass material - transparent with visible refraction, slight blue tint, sharp reflections at edges, showing depth and transparency.

Each sphere should have a label below it clearly stating the material type in white sans-serif text. Include subtle ground shadow under each sphere. Spheres should be evenly spaced with adequate separation.

Style: Clean technical illustration, educational material quality
Background: Dark grey (#2b2b2b) 
Lighting: Neutral, showing material properties clearly
Resolution: 1920x800 landscape format
Context: Professional Blender training material
Labels: "Diffuse Material", "Metallic Material", "Glass Material" in clean white text
```

### **Prompt 2: Shader Editor Interface Overview**
```
Create an annotated screenshot-style image of Blender's Shader Editor interface showing the complete workspace layout.

Main elements to show:
- Large central grid workspace area with subtle grid pattern
- Top header bar with tools and menus
- Left toolbar (collapsed) with tool icons visible
- Right sidebar showing node properties
- Two nodes visible in workspace: Principled BSDF node connected to Material Output node with green shader connection line

Add clear callout labels with arrows pointing to:
- "Node Workspace" (pointing to central grid area)
- "Header with Add Menu" (pointing to top bar)
- "Toolbar (Press T)" (pointing to left edge)
- "Sidebar (Press N)" (pointing to right panel)
- "Principled BSDF - Main Shader" (pointing to left node)
- "Material Output - Final Connection" (pointing to right node)

Style: Technical screenshot aesthetic with clean white annotations on semi-transparent backgrounds
Colors: Blender's dark UI theme (#2b2b2b interface)
Labels: White text, clear arrows, professional annotation style
Resolution: 1920x1080
Context: Blender 4.0 interface training material
```

### **Prompt 3: Node Anatomy Diagram**
```
Create a detailed technical diagram showing the anatomy of a single Blender shader node.

Show a Principled BSDF node with clear labeling of all components:
- Node header at top with name "Principled BSDF"
- Left side: Multiple input sockets (small circles) with labels like "Base Color", "Metallic", "Roughness"
- Right side: One output socket (larger circle) labeled "BSDF"
- Interior: Parameter fields and sliders
- Socket color coding visible: Yellow (color), Gray (value), Green (shader)

Add detailed callout annotations with arrows:
- "Node Header" → pointing to top bar
- "Input Sockets (Left)" → pointing to left side sockets
- "Output Socket (Right)" → pointing to right socket
- "Parameters & Settings" → pointing to interior controls
- "Socket Colors Indicate Data Type" → pointing to colored sockets

Style: Clean technical diagram, educational infographic quality
Background: Dark grey (#2b2b2b)
Node: Blender's node style with rounded corners
Text: White labels on semi-transparent dark backgrounds
Resolution: 1200x800
Context: Node-based system tutorial material
```

### **Prompt 4: Socket Color Reference Chart**
```
Create a clean infographic chart showing Blender shader node socket color meanings.

Layout as a vertical reference card with four rows:

Row 1: Large green circle followed by text "GREEN = Shader Data (material properties)"
Row 2: Large yellow circle followed by text "YELLOW = Color/RGB Data (colors and textures)"
Row 3: Large grey circle followed by text "GREY = Value/Number (single values like roughness, metallic)"
Row 4: Large blue circle followed by text "BLUE = Vector Data (coordinates, normals, directions)"

Style: Flat design infographic, professional training material
Background: Dark grey (#2b2b2b)
Circles: Exact Blender socket colors with subtle glow
Text: White sans-serif, clear and readable
Layout: Clean alignment, adequate spacing between rows
Dimensions: 800x600 portrait format, suitable for reference chart
Context: Quick reference card for shader node connections
Title at top: "Node Socket Color Guide" in white text
```

### **Prompt 5: Basic Node Connection Example**
```
Create a simple node tree diagram showing basic shader connection.

Show two nodes connected by a green line:

Left side: Principled BSDF node (typical Blender node appearance)
- Multiple input sockets on left (Base Color, Metallic, Roughness visible)
- Green output socket on right labeled "BSDF"

Right side: Material Output node
- Green input socket on left labeled "Surface"
- Node shows connection point clearly

Between them: Curved green connection line flowing from Principled BSDF output to Material Output input, showing active data flow from left to right.

Optional: Small arrow indicators showing data flow direction (left to right)

Style: Clean technical illustration, node-based workflow visualization
Background: Dark grey (#2b2b2b)
Nodes: Blender's rounded rectangle style with realistic shadowing
Connection: Bright green (#4CAF50) curved line
Labels: White text, clearly readable
Resolution: 1400x600 horizontal layout
Context: Basic shader setup tutorial for beginners
```

### **Prompt 6: Principled BSDF Parameter Overview**
```
Create an annotated diagram of the complete Principled BSDF node showing all major parameters.

Center: Large Principled BSDF node displaying all inputs clearly:
- Base Color
- Metallic
- Roughness
- IOR
- Transmission
- Emission
- Subsurface Weight
- Normal
- Alpha

Add callout labels with arrows pointing to key inputs:
- "Base Color - Surface color" → Base Color input
- "Metallic - 0=non-metal, 1=metal" → Metallic
- "Roughness - 0=smooth, 1=rough" → Roughness
- "IOR - Refraction index" → IOR
- "Transmission - Transparency" → Transmission
- "Emission - Glow effect" → Emission Strength
- "Normal - Surface detail" → Normal input

Style: Technical educational diagram with clear annotations
Background: Dark grey (#2b2b2b)
Node: Full-size Principled BSDF with all parameters visible
Callouts: White text on dark semi-transparent backgrounds with clean arrows
Resolution: 1000x1400 portrait format
Context: Principled BSDF parameter reference guide
Title: "Principled BSDF - Key Parameters" at top
```

### **Prompt 7: Base Color PBR Value Range Chart**
```
Create an infographic showing acceptable base color value ranges for PBR materials.

Design as a horizontal gradient bar with labeled zones:

Bottom: Gradient bar transitioning from pure black (left) to pure white (right)

Top: Zone labels with markers:
- Red zone (left): "TOO DARK - Avoid" (0-30 range)
- Yellow zone: "Dark Materials" (30-80)
- Green zone (center, largest): "IDEAL RANGE - Most Materials" (80-220)
- Yellow zone: "Light Materials" (220-245)
- Red zone (right): "TOO BRIGHT - Avoid" (245-255)

Below gradient: RGB value scale showing 0, 50, 100, 150, 200, 255

Add example material names in appropriate zones:
- Dark zone: "Dark wood, asphalt"
- Center: "Brick, leather, cloth, concrete"
- Light zone: "Light wood, fresh paint"

Style: Professional infographic, flat design
Background: Dark grey (#2b2b2b)
Gradient: Full spectrum from black to white
Text: White labels, clear and readable
Dimensions: 1600x600 horizontal format
Context: PBR value guidelines for realistic materials
```

### **Prompt 8: Metallic Workflow Comparison**
```
Create a side-by-side comparison showing metal vs non-metal material behavior.

Left sphere: NON-METALLIC (Metallic = 0.0)
- Red/orange colored surface (base color visible)
- White/colorless reflections of environment
- Mix of diffuse and specular reflection
- Label below: "Non-Metallic (0.0)" and "Colorless reflections, diffuse+specular"

Right sphere: METALLIC (Metallic = 1.0)
- Gold/yellow-tinted appearance
- Colored reflections matching base color (yellow-tinted reflections)
- Pure specular reflection, no diffuse
- Label below: "Metallic (1.0)" and "Colored reflections, specular only"

Both spheres on same background showing identical environment reflections to emphasize the difference in reflection color.

Style: Technical comparison render, educational material
Background: Dark grey (#2b2b2b) with subtle gradient
Lighting: Studio lighting showing clear reflections
Ground: Subtle shadow under spheres
Text: White labels below spheres, clear sans-serif font
Resolution: 1600x800 horizontal split-screen
Context: PBR metallic workflow explanation
```

### **Prompt 9: Roughness Scale Visual Guide**
```
Create a chart showing spheres with increasing roughness values from perfectly smooth to completely rough.

Layout: Six spheres in a horizontal row, each showing progressive roughness:

Sphere 1: Roughness 0.0 - Perfect mirror, sharp reflections
Sphere 2: Roughness 0.2 - Glossy, slightly soft reflections
Sphere 3: Roughness 0.4 - Semi-gloss, noticeable blur
Sphere 4: Roughness 0.6 - Satin, significant blur
Sphere 5: Roughness 0.8 - Matte, heavily blurred
Sphere 6: Roughness 1.0 - Completely matte, no reflections

Below each sphere: Label showing "0.0", "0.2", "0.4", "0.6", "0.8", "1.0"
Below labels: Material examples like "Mirror", "Glossy Plastic", "Satin", "Rough Plastic", "Fabric", "Clay"

All spheres same base color (neutral grey or chrome), only roughness changes

Style: Technical product visualization, educational reference
Background: Dark grey (#2b2b2b) gradient
Lighting: Consistent across all spheres to show roughness differences clearly
Spacing: Equal spacing between spheres
Text: White labels, clean and readable
Resolution: 2400x800 wide horizontal format
Context: Roughness parameter training material
Title: "Roughness Scale: 0.0 (Smooth) to 1.0 (Rough)"
```

### **Prompt 10: IOR Reference Chart**
```
Create a clean reference table showing Index of Refraction values for common materials.

Design as a professional reference card with two columns:

Left column: Material name
Right column: IOR value

Materials to include (in order):
- Vacuum/Air .......... 1.0
- Water ............... 1.33
- Plastic/Acrylic ..... 1.45 (marked as "Blender default")
- Glass (standard) .... 1.5
- Glass (window) ...... 1.55
- Quartz .............. 1.55
- Emerald ............. 1.58
- Ruby ................ 1.76
- Diamond ............. 2.4

Style: Professional technical reference chart
Background: Dark grey (#2b2b2b)
Layout: Two-column table with clean lines
Text: White monospace or sans-serif font for values, regular sans-serif for names
Highlight: "1.45 (Blender default)" in subtle orange/yellow
Dimensions: 600x800 portrait format, reference card style
Context: IOR quick reference for material creation
Title: "Index of Refraction (IOR) Reference"
Optional: Small icon or symbol next to each material type
```

### **Prompt 11: Transmission vs Alpha Comparison**
```
Create a clear comparison diagram showing the difference between Transmission and Alpha transparency.

Split-screen layout with two cubes:

Left side: TRANSMISSION (Glass-like transparency)
- Transparent cube with visible refraction/light bending
- Background visible through cube but distorted
- Objects behind cube appear bent/refracted
- Label: "Transmission = 1.0" and "Light refracts through material"
- Subtitle: "Use for: Glass, water, translucent materials"

Right side: ALPHA (Cutout transparency)
- Same cube position but partially invisible
- Background visible through cube without distortion
- Objects behind cube appear normal, not bent
- Label: "Alpha < 1.0" and "Material becomes invisible"
- Subtitle: "Use for: Cutouts, fading effects, alpha masks"

Both cubes positioned identically, same viewing angle, with textured/patterned background behind them to clearly show refraction vs no refraction.

Style: Technical comparison illustration, educational diagram
Background: Dark grey (#2b2b2b) with patterned test grid behind cubes
Cubes: Same size and position for direct comparison
Text: White labels, clear explanation text
Resolution: 1600x900 split-screen horizontal
Context: Transparency methods explanation
```

### **Prompt 12: Normal Map Setup Workflow**
```
Create a node tree diagram showing correct normal map setup workflow.

Show three nodes connected in sequence:

Node 1 (Left): Image Texture node
- Load ed with purple/blue normal map image preview
- Important label: "Color Space: Non-Color" (highlighted in orange)
- Normal map texture visible in preview

Node 2 (Middle): Normal Map node
- Vector → Normal Map conversion node
- Connected between Image Texture and Principled BSDF

Node 3 (Right): Principled BSDF (partial, showing only Normal input)
- Normal socket receiving connection from Normal Map node
- Other inputs faded or cropped for focus

Connections: Yellow line from Image Texture Color → Normal Map Color, Blue line from Normal Map Normal → Principled BSDF Normal

Add callout annotations:
- "Set to Non-Color!" (pointing to Color Space setting with warning icon)
- "Normal Map node required" (pointing to middle node)
- "Connects to Normal input" (pointing to final connection)

Style: Clean technical node diagram, educational workflow
Background: Dark grey (#2b2b2b)
Nodes: Blender-style rounded rectangles
Important highlight: Orange border or glow around "Non-Color" setting
Text: White labels with warning emphasis on color space
Resolution: 1600x600 horizontal workflow
Context: Correct normal map implementation guide
```

### **Prompt 13: Subsurface Scattering Example**
```
Create a side-by-side comparison demonstrating subsurface scattering effect.

Left sphere: NO SUBSURFACE SCATTERING
- Opaque appearance
- No light penetration visible
- Hard shadow transition on back side
- Looks like solid plastic or painted surface
- Label: "Subsurface OFF" and "No light penetration"

Right sphere: WITH SUBSURFACE SCATTERING
- Translucent appearance
- Visible light glow through thin areas
- Soft red/orange glow at edges where light passes through
- Looks like wax, skin, or organic material
- Label: "Subsurface ON" and "Light penetrates and scatters"

Both spheres: Same peachy-pink/skin-tone color, lit from behind or side to show SSS effect clearly

Style: Technical comparison render showing material properties
Background: Dark grey (#2b2b2b) to make glow visible
Lighting: Strong backlight or rim light to demonstrate light penetration
Ground: Subtle shadows under spheres
Text: White labels clearly describing effect
Resolution: 1600x800 horizontal comparison
Context: Subsurface scattering demonstration for organic materials
Optional: Arrows or highlighting showing where light penetrates on SSS sphere
```

### **Prompt 14: PBR Texture Map Types**
```
Create a reference grid showing all standard PBR texture map types.

Layout as 3x2 grid (6 panels) showing same brick wall surface with different map types:

Panel 1: Base Color (Albedo)
- Full color texture, no shadows or highlights
- RGB colored bricks with mortar
- Label: "Base Color / Albedo"

Panel 2: Roughness Map
- Grayscale, black = smooth, white = rough
- Mortar lighter (rougher), bricks darker (smoother)
- Label: "Roughness"

Panel 3: Metallic Map
- Grayscale, black and white only
- Mostly black (bricks are non-metallic)
- Label: "Metallic"

Panel 4: Normal Map
- Purple/blue-ish tangent-space normal map
- Shows brick bumps and mortar recesses
- Label: "Normal Map"

Panel 5: Height/Displacement
- Grayscale height map
- White = high (brick surface), black = low (mortar)
- Label: "Height / Displacement"

Panel 6: Ambient Occlusion
- Grayscale showing shadows
- Dark in crevices, light on exposed areas
- Label: "Ambient Occlusion (AO)"

Style: Educational reference grid, technical material visualization
Background: Dark grey (#2b2b2b)
Each panel: Equal size, clear borders
Labels: White text below each panel
Resolution: 1920x1280 (3:2 aspect ratio)
Context: PBR texture map types reference guide
Title: "PBR Texture Map Types" at top
```

### **Prompt 15: Complete PBR Material Setup**
```
Create a comprehensive node tree diagram showing complete PBR material workflow with all texture maps connected.

Layout showing these nodes organized left to right:

Left column: Five Image Texture nodes vertically stacked:
- Base Color texture (Color Space: sRGB)
- Roughness texture (Color Space: Non-Color)
- Metallic texture (Color Space: Non-Color)
- Normal texture (Color Space: Non-Color)
- AO texture (Color Space: Non-Color)

Middle: Processing nodes:
- Normal Map node (receiving normal texture)
- Math node set to Multiply (for AO mixing)

Right: Principled BSDF receiving all connections:
- Base Color ← (AO multiplied with Base Color)
- Roughness ← Roughness texture
- Metallic ← Metallic texture
- Normal ← Normal Map output

Far right: Material Output node

Add color-coded connections: Yellow for colors, Grey for values, Blue for vectors/normals

Include callout labels showing critical settings:
- "sRGB for color only!" pointing to Base Color color space
- "Non-Color for data maps!" pointing to other textures
- Connection flow arrows showing data direction

Style: Professional node tree layout, organized and clean
Background: Dark grey (#2b2b2b)
Nodes: Blender-style with realistic appearance
Organization: Uses frame nodes to group sections
Text: White labels, clear annotations
Resolution: 2400x1200 horizontal layout
Context: Complete PBR material setup reference
```

### **Prompt 16: Noise Texture Parameters Guide**
```
Create a grid showing how Noise Texture parameters affect output pattern.

Layout as 3x3 grid (9 variations) of the same noise texture with different settings:

Row 1 - Scale variations (Detail=5, Roughness=0.5):
- Scale 2: Large, broad patterns
- Scale 10: Medium detail
- Scale 50: Fine, small patterns

Row 2 - Detail variations (Scale=10, Roughness=0.5):
- Detail 0: Simple, smooth blobs
- Detail 5: Moderate fractal detail
- Detail 15: Maximum complexity

Row 3 - Roughness variations (Scale=10, Detail=5):
- Roughness 0.0: Very smooth transitions
- Roughness 0.5: Balanced contrast
- Roughness 1.0: Harsh, high contrast

Each panel labeled with parameters below image.

Style: Technical reference grid, procedural texture demonstration
Background: Dark grey (#2b2b2b)
Each panel: 512x512 px showing noise pattern in grayscale
Labels: White text clearly stating parameter values
Grid lines: Subtle separators between panels
Resolution: 1800x1800 square format
Context: Noise Texture parameter learning guide
Title: "Noise Texture Parameters" at top
Column headers: "Scale", "Detail", "Roughness"
```

### **Prompt 17: ColorRamp Techniques Visual**
```
Create an educational diagram showing four common ColorRamp manipulation techniques.

Layout as 2x2 grid with four panels:

Panel 1: THRESHOLDING
- ColorRamp with stops pushed close together creating hard edge
- Input noise shown on left
- Output hard-edged pattern on right
- Label: "Thresholding - Hard edges"

Panel 2: CONTRAST INCREASE
- ColorRamp with black and white stops moved inward
- Shows increased contrast in output
- Label: "Contrast Increase - Stronger values"

Panel 3: INVERSION
- ColorRamp with black/white positions swapped
- Shows reversed pattern
- Label: "Inversion - Reverse pattern"

Panel 4: COLOR ZONES
- ColorRamp with multiple color stops (not just B&W)
- Creates distinct color regions
- Label: "Color Variation - Multiple zones"

Each panel shows:
- Input texture (left)
- ColorRamp node (center) with visible gradient bar and stop positions
- Output result (right)

Style: Step-by-step educational diagram, technical visualization
Background: Dark grey (#2b2b2b)
Nodes: Blender-style ColorRamp nodes showing gradient clearly
Arrows: Showing input→process→output flow
Text: White labels explaining technique
Resolution: 1600x1600 square format (2x2 grid)
Context: ColorRamp manipulation techniques tutorial
```

### **Prompt 18: Procedural Texture Gallery**
```
Create a reference gallery showing all Blender procedural texture types.

Layout as 4x2 grid (8 main textures) showing:

Row 1:
- Noise Texture - Organic cloudy pattern
- Voronoi Texture - Cellular/cracked pattern
- Wave Texture - Concentric rings/bands
- Musgrave Texture - Detailed fractal noise

Row 2:
- Magic Texture - Abstract psychedelic pattern
- Checker Texture - Clean checkerboard
- Brick Texture - Brick wall pattern with mortar
- Gradient Texture - Smooth linear gradient

Each panel:
- 512x512 px texture sample
- Label below with texture name
- Parameters shown (if relevant)

Style: Clean reference gallery, technical texture samples
Background: Dark grey (#2b2b2b)
Each texture: Displayed at default/typical settings for recognition
Labels: White text, clear texture name
Grid: Even spacing, subtle borders
Resolution: 2400x1400 (4:2 aspect ratio)
Context: Procedural texture quick reference guide
Title: "Blender Procedural Textures" at top
Optional: Small icon showing typical use case for each
```

### **Prompt 19: Texture Coordinate Systems Comparison**
```
Create a comparison showing how different coordinate systems affect texture mapping on same object.

Show the same cube/object three times with same procedural texture mapped differently:

Left: GENERATED coordinates
- Texture fits to bounding box
- 0-1 range across object
- Shows stretching on non-uniform dimensions
- Label: "Generated - Automatic 0-1 range"

Center: UV coordinates
- Texture follows UV unwrap
- Clean, undistorted if properly unwrapped
- Label: "UV - Follows unwrap layout"

Right: OBJECT coordinates
- Texture based on object space origin
- Different scale/position than Generated
- Label: "Object - Based on local coordinates"

All three using same Checker or Grid texture for easy comparison of distortion/mapping differences.

Style: Technical comparison demonstration
Background: Dark grey (#2b2b2b)
Objects: Identical cubes/spheres positioned for comparison
Texture: High-contrast pattern (checker/grid) to show mapping clearly
Labels: White text explaining coordinate system below each
Resolution: 1800x700 horizontal comparison
Context: Texture coordinate system explanation
Optional: Node tree snippet below showing coordinate selection
```

### **Prompt 20: Mapping Node Controls Diagram**
```
Create an annotated diagram showing Mapping node transformation controls and their effects.

Center: Large Mapping node showing three parameter sections:
- Location (X, Y, Z)
- Rotation (X, Y, Z)
- Scale (X, Y, Z)

Around the node, show example effects:

Top: LOCATION effect
- Before/after showing texture shifted position
- Arrow indicating translation direction
- Label: "Location - Moves texture position"

Left: ROTATION effect
- Before/after showing texture rotated
- Circular arrow indicating rotation
- Label: "Rotation - Rotates texture orientation"

Right: SCALE effect
- Before/after showing texture size change
- Arrows indicating scale change
- Label: "Scale - Controls texture size/tiling"

Style: Technical diagram with clear before/after examples
Background: Dark grey (#2b2b2b)
Node: Large central Mapping node with parameters visible
Examples: Small texture squares showing transformation effects
Arrows: Indicating transformation type and direction
Text: White labels, clear explanations
Resolution: 1400x1000 centered layout
Context: Mapping node parameter guide
```

### **Prompt 21: Mix Shader Basic Setup**
```
Create a simple node tree diagram showing fundamental Mix Shader workflow.

Show three nodes arranged horizontally:

Left: Two Principled BSDF nodes stacked vertically
- Top shader: Red/orange material
- Bottom shader: Blue material
- Both connect to Mix Shader

Center: Mix Shader node
- Two shader inputs (top and bottom)
- Factor slider visible (set to 0.5 for 50/50 mix)
- One shader output on right

Right: Material Output node
- Receiving mix shader output

Above Mix Shader: Show Factor control options:
- Slider for manual control
- Or texture input socket for mask-based mixing

Add simple annotations:
- "Shader 1" → top Principled BSDF
- "Shader 2" → bottom Principled BSDF  
- "Factor controls blend (0=Shader1, 1=Shader2)" → pointing to Factor
- "Mixed result" → output connection

Style: Clean educational node diagram
Background: Dark grey (#2b2b2b)
Nodes: Blender-style with clear connections
Connections: Green shader lines, grey for factor
Text: White labels, simple and clear
Resolution: 1600x800 horizontal layout
Context: Basic shader mixing introduction
```

### **Prompt 22: Layered Material Node Tree**
```
Create a well-organized node tree showing complex material layering with multiple Mix Shaders.

Layout showing 4-layer material structure organized with frame nodes:

Frame 1 (bottom): "Base Material"
- Single Principled BSDF (clean metal)

Frame 2: "Rust Layer"
- Rusty Principled BSDF
- Noise texture controlling mix
- Mix Shader combining with base

Frame 3: "Edge Wear Layer"
- Worn/lighter material
- Geometry Pointiness → ColorRamp for mask
- Mix Shader adding to previous result

Frame 4: "Dirt Layer"
- Dark dirt material
- Another noise mask
- Final Mix Shader

Far right: Material Output receiving final result

Frames color-coded and labeled clearly, showing logical organization

Style: Professional node tree layout, clean organization
Background: Dark grey (#2b2b2b)
Frames: Colored backgrounds grouping related nodes (subtle colors)
Frame labels: Clear white text identifying each layer
Connections: Clean routing, minimal crossing
Node arrangement: Left-to-right flow
Resolution: 2400x1200 wide layout
Context: Advanced layered material organization example
```

### **Prompt 23: Geometry Node Outputs Visual**
```
Create a visualization showing Geometry node outputs, particularly Pointiness.

Split layout:

Left side: Geometry node with outputs labeled:
- Position
- Normal
- Pointiness (highlighted)
- Random Per Island
- And other outputs listed

Right side: Sphere/complex object showing Pointiness visualization:
- Convex areas (edges, peaks) shown in bright white
- Flat areas shown in medium grey
- Concave areas (crevices) shown in dark grey/black
- Creates a "wear map" appearance

Below: Explanation labels:
- "Positive Pointiness (convex - edges)" → bright areas
- "Zero Pointiness (flat)" → mid-grey areas
- "Negative Pointiness (concave)" → dark areas

Style: Technical demonstration render
Background: Dark grey (#2b2b2b)
Object: Complex shape showing varied surface angles (Suzanne monkey or similar)
Visualization: False-color pointiness map (white to black range)
Text: White labels with arrows
Resolution: 1600x900 split layout
Context: Geometry node Pointiness output explanation
```

### **Prompt 24: Edge Wear Using Pointiness**
```
Create a combined diagram showing edge wear technique setup and result.

Top half: Node tree setup
- Geometry node → Pointiness output
- Connected to ColorRamp (adjusted to isolate edges)
- ColorRamp output → Mix Shader Factor
- Shader 1: Base material (dark metal)
- Shader 2: Worn material (lighter, smoother)
- Mix Shader → Material Output

Bottom half: Split screen result
- Left: Object without edge wear (uniform dark material)
- Right: Object with edge wear (bright highlights on edges, natural wear pattern)
- Same object, same angle for direct comparison

Connection arrows showing node setup leads to visual result

Style: Educational workflow + result demonstration
Background: Dark grey (#2b2b2b)
Node tree: Clean, organized, annotated
Result: Clear before/after comparison
Arrows: Showing workflow flow and connection between setup and result
Text: White labels explaining technique
Resolution: 1800x1200 vertical layout (nodes top, results bottom)
Context: Realistic edge wear technique tutorial
```

### **Prompt 25: Glass Material Examples**
```
Create a showcase of glass material variations showing different glass types.

Layout: Four glass spheres or bottles in a row:

Object 1: CLEAR GLASS
- Perfectly transparent
- Sharp refractions
- Transmission=1.0, Roughness=0.0
- Label: "Clear Glass (Roughness 0.0)"

Object 2: FROSTED GLASS
- Semi-transparent with blur
- Diffused light transmission
- Transmission=1.0, Roughness=0.3
- Label: "Frosted Glass (Roughness 0.3)"

Object 3: TINTED GLASS
- Transparent with blue/green tint
- Colored transmission
- Base Color with color, Transmission=1.0
- Label: "Tinted Glass (Colored)"

Object 4: DIRTY/STAINED GLASS
- Slight dirt texture
- Roughness variation
- Imperfections visible
- Label: "Dirty Glass (Variation)"

Background with visible environment to show refraction effects clearly

Style: Product visualization, realistic glass renders
Background: Neutral gradient or HDRI environment showing refractions
Lighting: Professional studio lighting
Spacing: Equal spacing between objects
Text: White labels below objects
Resolution: 2400x800 horizontal showcase
Context: Glass material variations reference
```

### **Prompt 26: Metal Material Library**
```
Create a professional metal material reference showing five different metal types.

Layout: Five metallic spheres in a row, each demonstrating different metal:

Sphere 1: GOLD
- Warm yellowish color (RGB ~1.0, 0.766, 0.336)
- Metallic=1.0, Roughness=0.15
- Colored reflections
- Label: "Gold - Metallic with warm color"

Sphere 2: CHROME/SILVER
- Bright neutral grey (RGB ~0.95, 0.95, 0.95)
- Metallic=1.0, Roughness=0.05
- Perfect mirror reflections
- Label: "Chrome - Mirror smooth"

Sphere 3: COPPER
- Orange-tinted reddish (RGB ~0.955, 0.637, 0.538)
- Metallic=1.0, Roughness=0.2
- Warm reflections
- Label: "Copper - Orange-tinted metal"

Sphere 4: BRUSHED STEEL
- Medium grey (RGB ~0.56, 0.57, 0.58)
- Metallic=1.0, Roughness=0.4, Anisotropic=0.5
- Directional highlights
- Label: "Brushed Steel - Anisotropic"

Sphere 5: ALUMINUM
- Light grey (RGB ~0.91, 0.92, 0.92)
- Metallic=1.0, Roughness=0.3
- Soft reflections
- Label: "Aluminum - Light metal"

All showing clear reflections of environment

Style: Product showcase, professional metal renders
Background: Studio environment with visible reflections
Lighting: Three-point lighting showing metal properties clearly
Ground: Reflective surface showing quality
Text: White labels with material properties
Resolution: 2800x800 wide horizontal showcase
Context: Metal PBR material reference library
```

### **Prompt 27: Procedural Wood Material Setup**
```
Create a combined workflow showing procedural wood creation from nodes to result.

Top section: Node tree setup (40% of image)
- Texture Coordinate (Object) → Mapping node (rotation visible)
- Mapping → Wave Texture (Rings mode) OR Noise Texture with distortion
- Wave/Noise → ColorRamp with 3-4 brown color stops (dark to light brown)
- ColorRamp Color → Principled BSDF Base Color
- Same pattern → Bump node → Normal (for grain texture)
- Settings visible: Metallic=0.0, Roughness=0.4-0.6

Bottom section: Result render (60% of image)
- Wooden object (cylinder, plank, or sphere) showing:
  - Natural wood grain pattern
  - Brown color variation
  - Surface texture from bump
  - Realistic wood appearance

Side-by-side comparison (optional):
- Raw wood vs polished wood (roughness difference)

Style: Workflow tutorial with result demonstration
Background: Dark grey (#2b2b2b)
Node tree: Organized, clean, annotated with arrows showing flow
Result: Professional wood render with clear grain visible
Text: White labels explaining key nodes and settings
Resolution: 1800x1200 vertical layout (nodes top, result bottom)
Context: Procedural wood material tutorial
```

### **Prompt 28: Plastic Material Variations**
```
Create a comparison showing glossy vs matte plastic materials.

Split screen layout:

Left object: GLOSSY PLASTIC
- Smooth shiny appearance
- Clear reflections visible
- Bright highlights
- Parameters shown: Roughness=0.2, Metallic=0.0
- Label: "Glossy Plastic - Low Roughness (0.2)"

Right object: MATTE PLASTIC
- Flat, non-reflective appearance
- No visible reflections
- Soft, diffuse look
- Parameters shown: Roughness=0.8, Metallic=0.0
- Label: "Matte Plastic - High Roughness (0.8)"

Both objects:
- Same shape (sphere or product-like object)
- Same base color (red, blue, or any saturated color)
- Same lighting to show contrast clearly
- Only roughness differs

Style: Technical comparison render
Background: Dark grey (#2b2b2b) gradient
Lighting: Studio lighting showing reflections on glossy side
Ground: Subtle shadows under objects
Text: White labels with parameter values clearly shown
Resolution: 1600x800 horizontal split
Context: Plastic roughness variation demonstration
```

### **Prompt 29: Stone/Rock Procedural Setup**
```
Create workflow showing procedural stone/rock material creation.

Top half: Node setup
- Noise Texture (Scale ~5-8) → ColorRamp (grey variations)
- ColorRamp → Principled BSDF Base Color
- Voronoi or Musgrave Texture → Bump node (Strength 0.5-0.8)
- Bump → Principled BSDF Normal
- Settings: Metallic=0.0, Roughness=0.7-0.9
- Optional: Second noise for roughness variation

Bottom half: Result render
- Rocky surface showing:
  - Grey color variation
  - Rough, irregular surface
  - Natural stone appearance
  - Could be on sphere, plane, or irregular shape

Callouts showing:
- "Color variation from noise" → ColorRamp section
- "Surface detail from bump" → Bump node
- "High roughness for matte stone" → Roughness setting

Style: Educational workflow with result
Background: Dark grey (#2b2b2b)
Node tree: Clean, organized, key settings highlighted
Result: Realistic stone material render
Text: White annotated labels
Resolution: 1800x1200 vertical (nodes top, render bottom)
Context: Procedural stone material tutorial
```

### **Prompt 30: Fabric Material with Sheen**
```
Create a demonstration of the Sheen parameter effect on fabric materials.

Side-by-side comparison:

Left: Fabric WITHOUT Sheen
- Flat, matte appearance
- No edge glow
- Uniform diffuse look
- Parameters: Sheen=0.0, Roughness=0.8
- Label: "Sheen OFF - Flat matte fabric"

Right: Fabric WITH Sheen
- Soft glow at grazing angles (edges)
- Velvet/carpet-like appearance
- Visible rim lighting effect
- Parameters: Sheen=0.7-1.0, Roughness=0.8
- Label: "Sheen ON - Velvet/carpet effect"

Both fabrics:
- Same base color (deep red, purple, or blue works well)
- Viewed at angle showing edge highlight
- Back/rim lit to demonstrate sheen effect

Optional: Close-up inset showing edge detail clearly

Style: Technical comparison demonstrating Sheen parameter
Background: Dark grey (#2b2b2b)
Lighting: Rim lighting from behind/side to show sheen effect
Object: Cloth draped over form or sphere showing fabric behavior
Text: White labels explaining sheen parameter
Resolution: 1600x900 horizontal comparison
Context: Sheen parameter demonstration for fabric materials
```

### **Prompt 31: Anisotropic Reflection Examples**
```
Create demonstration of anisotropic reflection effects on brushed metal.

Main subject: Metallic cylinder or curved surface with brushed metal texture

Left view: NO ANISOTROPY
- Round, symmetrical specular highlights
- Normal metallic reflections
- Anisotropic=0.0
- Label: "Anisotropic OFF - Round highlights"

Right view: WITH ANISOTROPY
- Elongated, directional specular highlights
- Highlights stretched perpendicular to brush direction
- Clear directional pattern
- Anisotropic=0.5-0.8
- Label: "Anisotropic ON - Stretched highlights"

Top-down or angled view clearly showing:
- Brush direction lines on surface
- Elongated highlight pattern following geometry
- Metallic appearance with directional reflection

Style: Technical demonstration render
Background: Dark grey (#2b2b2b)
Lighting: Point or area light positioned to create clear highlights
Object: Cylinder or curved surface ideal for showing effect
Annotations: Arrows showing highlight direction and brush pattern
Text: White labels explaining anisotropic effect
Resolution: 1600x900 horizontal comparison or single view
Context: Anisotropic reflection parameter demonstration
Additional note: Works well for brushed aluminum, CDs, hair, satin
```

### **Prompt 32: Clearcoat Effect Demonstration**
```
Create comparison showing dual-layer clearcoat reflection effect.

Side-by-side comparison:

Left: Car paint WITHOUT clearcoat
- Single reflection layer
- Base paint color with simple reflections
- Clearcoat=0.0
- Looks flatter, less depth
- Label: "No Clearcoat - Single layer"

Right: Car paint WITH clearcoat
- Dual reflection layers visible
- Glossy clear coat over colored base
- Clearcoat=0.8-1.0, Clearcoat Roughness=0.05
- More depth and richness
- Label: "Clearcoat ON - Dual layer reflection"

Both surfaces:
- Same base paint color (metallic blue, red, or pearl)
- Curved surface (car hood, sphere) showing layered reflections
- Environment reflections visible to show effect

Optional annotations:
- Arrows pointing to clearcoat reflection layer
- Arrows pointing to base paint layer
- Showing how light reflects at two different depths

Style: Professional car paint demonstration render
Background: Dark grey (#2b2b2b) or HDRI environment
Lighting: Studio lighting showing clear reflections
Object: Curved automotive surface or sphere
Text: White labels explaining clearcoat effect
Resolution: 1600x900 horizontal comparison
Context: Clearcoat parameter demonstration for automotive materials
```

### **Prompt 33: Displacement vs Bump Comparison**
```
Create a clear comparison showing true displacement vs fake bump mapping.

Layout: Two identical curved surfaces or spheres with rocky texture

Top panel: BUMP MAPPING (Fake detail)
- Close-up side view showing silhouette edge
- Textured appearance with lighting tricks
- Silhouette edge is perfectly smooth (no actual geometry change)
- Label: "Bump - Fake detail (fast)"
- Arrow pointing to smooth silhouette: "Edge remains flat"

Bottom panel: DISPLACEMENT (True geometry)
```

Continuing with the remaining prompts:

### **Prompt 33 (continued): Displacement vs Bump Comparison**
```
Bottom panel: DISPLACEMENT (True geometry)
- Same view showing silhouette edge
- Actual geometric detail visible on silhouette
- Bumpy, irregular edge with 3D depth
- Label: "Displacement - Real geometry (slow)"
- Arrow pointing to bumpy silhouette: "Edge has actual depth"

Both surfaces with same rocky/rough texture pattern to emphasize the silhouette difference

Style: Technical educational comparison
Background: Contrasting background color to make silhouette edges obvious
Lighting: Side lighting creating clear silhouette visibility
Camera angle: Profile view emphasizing edge detail
Text: White labels with clear arrows pointing to silhouette differences
Resolution: 1200x1600 vertical stacked comparison
Context: Displacement vs Bump technical explanation
Critical detail: Focus on edge/silhouette showing flat vs bumpy geometry
```

### **Prompt 34: Baking Workflow Diagram**
```
Create a step-by-step flowchart showing the texture baking process.

Vertical flowchart with 7 steps:

Step 1: "UV Unwrap Object"
- Icon: Cube with UV grid overlay
- Label: "Create clean UV layout"

Step 2: "Create Procedural Material"
- Icon: Node tree simplified illustration
- Label: "Build material with procedural textures"

Step 3: "Add Image Texture Node"
- Icon: Empty Image Texture node
- Label: "Create new blank texture (don't connect)"

Step 4: "Select Image Node"
- Icon: Selected/highlighted node
- Label: "Make sure image node is active"

Step 5: "Configure Bake Settings"
- Icon: Settings panel
- Label: "Render Properties → Bake → Set type"

Step 6: "Click Bake Button"
- Icon: Bake button highlighted
- Label: "Wait for baking to complete"

Step 7: "Save Baked Texture"
- Icon: Save file icon
- Label: "Image → Save As → PNG/EXR"

Arrows connecting each step showing workflow progression

Style: Clean flowchart diagram, educational process visualization
Background: Dark grey (#2b2b2b)
Icons: Simple, clear visual representations
Text: White labels explaining each step
Arrows: Green or blue showing flow direction
Resolution: 800x1600 vertical flowchart
Context: Texture baking workflow tutorial
Optional: Success checkmark at bottom
```

### **Prompt 35: Material Performance Hierarchy Chart**
```
Create a visual chart showing material complexity ranked by performance impact.

Layout as a horizontal bar chart or pyramid with 8 levels:

FASTEST (Top/Left - Green zone):
1. Simple Principled BSDF + solid colors
   - Icon: Single node
   - Performance: ★★★★★ Fastest

2. Principled BSDF + image textures
   - Icon: Node with texture
   - Performance: ★★★★☆ Very Fast

3. Principled BSDF + procedural textures
   - Icon: Node with noise pattern
   - Performance: ★★★★☆ Fast

4. Materials with 2-3 Mix Shaders
   - Icon: Multiple connected nodes
   - Performance: ★★★☆☆ Medium

5. Complex layered materials (4+ Mix Shaders)
   - Icon: Complex node tree
   - Performance: ★★☆☆☆ Slower

6. Materials with Subsurface Scattering
   - Icon: Glowing sphere
   - Performance: ★★☆☆☆ Slow

7. Transparent/Transmission materials
   - Icon: Glass sphere
   - Performance: ★☆☆☆☆ Very Slow

SLOWEST (Bottom/Right - Red zone):
8. Materials with Displacement
   - Icon: Bumpy surface
   - Performance: ★☆☆☆☆ Slowest

Color coding: Green (fast) → Yellow (medium) → Red (slow)

Style: Professional infographic, technical performance guide
Background: Dark grey (#2b2b2b)
Bars/levels: Color-coded by performance (green to red)
Icons: Simple, clear visual representations
Text: White labels with star ratings
Resolution: 1800x1000 horizontal or pyramid layout
Context: Material optimization guide
Title: "Material Performance Hierarchy"
```

### **Prompt 36: Node Organization Example**
```
Create a before/after comparison showing messy vs organized node trees.

Split screen layout:

Left side (BEFORE): MESSY/DISORGANIZED
- Nodes scattered randomly
- Crossing connection lines (spaghetti)
- No logical flow
- Unlabeled, no grouping
- Hard to read and understand
- Red "X" or warning symbol
- Label: "Disorganized - Hard to edit"

Right side (AFTER): CLEAN/ORGANIZED
- Nodes aligned in neat rows
- Clear left-to-right flow
- Logical grouping with Frame nodes
- Frame labels visible ("Base Material", "Edge Wear", etc.)
- Minimal line crossing
- Easy to read and understand
- Green checkmark symbol
- Label: "Organized - Easy to edit"

Same material/functionality in both, only organization differs

Style: Educational comparison, workflow best practices
Background: Dark grey (#2b2b2b)
Both sides: Actual node trees (could be simplified but recognizable)
Frames: Colored subtle backgrounds on organized side
Text: White labels, clear comparison markers
Resolution: 2000x900 horizontal split comparison
Context: Node tree organization best practices
```

### **Prompt 37: Viewport Shading Modes Visual**
```
Create a 2x2 grid showing the four viewport shading modes in Blender.

Layout: Four panels showing same object (textured sphere or model) in different viewport shading modes:

Top-Left: SOLID SHADING
- Flat colored surface with basic lighting
- No textures visible, just solid colors
- Icon shown: Second sphere icon (solid mode)
- Label: "Solid - Fast modeling view"

Top-Right: MATERIAL PREVIEW
- Materials and textures visible
- Basic real-time lighting
- Icon shown: Third sphere icon (material preview)
- Label: "Material Preview - Quick material view"

Bottom-Left: RENDERED
- Full render quality in viewport
- All effects visible (SSS, transmission, etc.)
- Icon shown: Fourth sphere icon (rendered)
- Label: "Rendered - Final quality preview"

Bottom-Right: WIREFRAME
- Wireframe mesh view
- No surfaces, just edges
- Icon shown: First sphere icon (wireframe)
- Label: "Wireframe - Mesh structure"

Same object and camera angle in all four views for direct comparison

Style: Interface comparison demonstration
Background: Each panel shows default Blender viewport background for that mode
Icons: Small shading mode icons shown in corner of each panel
Text: White labels clearly identifying mode and purpose
Resolution: 1600x1600 square (2x2 grid)
Context: Viewport shading modes explanation
Border: Subtle lines separating quadrants
```

### **Prompt 38: Color Space Settings Comparison**
```
Create a dramatic comparison showing the importance of correct Color Space settings.

Split screen comparison:

Left side: INCORRECT (sRGB for roughness map)
- Material looks wrong
- Roughness map interpreted as color data
- Overly contrast-y and incorrect brightness
- Screenshot showing: Image Texture node with "Color Space: sRGB" visible
- Rendered result below showing incorrect material
- Red "X" mark
- Label: "WRONG - sRGB for data map" 

Right side: CORRECT (Non-Color for roughness map)
- Material looks realistic and accurate
- Roughness map interpreted correctly as data
- Proper material behavior
- Screenshot showing: Image Texture node with "Color Space: Non-Color" visible
- Rendered result below showing correct material
- Green checkmark
- Label: "CORRECT - Non-Color for data map"

Both showing same object with same roughness texture, only Color Space setting differs

Style: Critical comparison demonstration, technical correctness
Background: Dark grey (#2b2b2b)
Emphasis: Color Space dropdown highlighted/circled in both sides
Results: Clear visual difference in rendered material
Text: White labels with warning emphasis on left, success on right
Resolution: 1600x1000 horizontal split
Context: Color Space setting importance tutorial
Note: This is one of most common beginner mistakes!
```

### **Prompt 39: Common Material Problems Visual Guide**
```
Create a troubleshooting reference showing 6 common material problems.

Layout as 3x2 grid (6 panels):

Panel 1: STRETCHED/DISTORTED TEXTURE
- Object with badly stretched UV texture
- Label: "Problem: Bad UVs" / "Fix: UV unwrap properly"

Panel 2: MISSING TEXTURE (PINK/MAGENTA)
- Object showing missing texture warning color
- Label: "Problem: Missing file" / "Fix: Reload texture file"

Panel 3: WRONG COLOR SPACE (WASHED OUT)
- Material with wrong color space applied
- Label: "Problem: Wrong color space" / "Fix: Set to Non-Color"

Panel 4: MATERIAL NOT SHOWING IN VIEWPORT
- Flat grey object (not showing material)
- Label: "Problem: Wrong shading mode" / "Fix: Use Material Preview"

Panel 5: FIREFLIES/BLACK SPLOTCHES
- Render with noise artifacts
- Label: "Problem: Insufficient samples" / "Fix: Increase samples/denoise"

Panel 6: GLASS NOT TRANSPARENT IN EEVEE
- Opaque glass object
- Label: "Problem: Blend mode wrong" / "Fix: Set Alpha Blend + SSR"

Each panel showing problem and solution text

Style: Diagnostic troubleshooting guide
Background: Dark grey (#2b2b2b)
Each panel: Clear visual showing the problem
Text: White labels with problem description and fix
Layout: Even spacing, organized grid
Resolution: 1800x1200 (3:2 grid)
Context: Material troubleshooting quick reference
Icons: Warning symbols on problem areas
```

### **Prompt 40: Complete Material Library Showcase**
```
Create a professional rendered scene showcasing multiple material types in one beautiful composition.

Scene layout: Multiple objects on a display platform, each showing different material:

Objects and materials (10-12 total):
- Sphere 1: Polished gold metal
- Sphere 2: Chrome/silver metal
- Cube: Clear glass
- Cylinder: Brushed aluminum (anisotropic)
- Object 4: Wooden texture (procedural)
- Object 5: Glossy red plastic
- Object 6: Matte fabric/velvet (with sheen)
- Object 7: Rough stone/concrete
- Object 8: Blue glass (frosted)
- Object 9: Rusted/weathered metal
- Object 10: Glowing emission material
- Object 11: White ceramic/porcelain
- Object 12: Copper or brass

Arrangement: Artfully arranged on platform with good composition
Each object clearly visible and well-lit to show material properties

Style: Professional product visualization render
Lighting: Three-point studio lighting or HDRI
Background: Neutral gradient or subtle environment
Quality: Photorealistic, high sample count, denoised
Camera: Angled view showing all materials clearly
Resolution: 2400x1350 (16:9 landscape)
Context: Complete material library showcase/portfolio piece
Optional: Subtle labels or numbers identifying each material type
```

---

## SVG Diagram Recommendations

The following images would work best as SVG (scalable vector graphics) for clarity and file size:

1. **Node Anatomy Diagram** (#3) - Simple shapes, lines, and text
   - **Rationale:** Geometric node representation with callouts is perfect for vector format

2. **Socket Color Reference Chart** (#4) - Colored circles with text labels
   - **Rationale:** Simple colored circles and text, infinitely scalable

3. **Base Color PBR Value Range Chart** (#7) - Gradient bar with zone markers
   - **Rationale:** Clean gradient with labeled zones, benefits from vector precision

4. **IOR Reference Chart** (#10) - Two-column text table
   - **Rationale:** Pure text and simple lines, ideal for vector format

5. **Material Performance Hierarchy Chart** (#35) - Bar chart or pyramid diagram
   - **Rationale:** Geometric shapes, icons, and text - perfect for SVG

6. **Baking Workflow Diagram** (#34) - Flowchart with arrows and icons
   - **Rationale:** Flowchart elements are naturally suited to vector graphics

7. **Texture Coordinate Systems Diagram** (simplified version) - Technical diagram
   - **Rationale:** Geometric representation of coordinate systems works well as vector

**Overall rationale for SVG recommendations:** These images contain primarily geometric shapes, text, and simple graphics without photorealistic detail. SVG format provides infinite scalability, smaller file sizes, and crisp rendering at any resolution. They're ideal for reference charts, diagrams, and infographics that students will zoom into or view on different screen sizes.

---

## Image Placement Suggestions in HTML

### Section: Understanding Materials (id="understanding-materials")
- **After "What Are Materials?" card:** Insert Image #1 (Material Properties Comparison)
- **After Shader vs Materials terminology card:** Insert Mermaid diagram (already present in HTML)
- **After "The Material Creation Workflow" card:** Could reference Image #5 (Basic Node Connection)

### Section: The Shader Editor Workspace (id="shader-editor")
- **After "Opening the Shader Editor" card:** Insert Image #2 (Shader Editor Interface Overview)
- **At beginning of "Understanding Nodes" subsection:** Insert Image #3 (Node Anatomy Diagram)
- **Within "Node Connections and Data Flow" card:** Insert Image #4 (Socket Color Reference)
- **After "Node Connections" explanation:** Insert Image #5 (Basic Node Connection Example)

### Section: Mastering Principled BSDF (id="principled-bsdf")
- **At beginning of section:** Insert Image #6 (Principled BSDF Parameter Overview)
- **Within "Metallic Parameter" card:** Insert Image #8 (Metallic Workflow Comparison)
- **Within "Roughness Parameter" card:** Insert Image #9 (Roughness Scale Visual Guide)
- **Within "IOR Parameter" card:** Insert Image #10 (IOR Reference Chart)
- **Within "Transmission" card:** Insert Image #11 (Transmission vs Alpha Comparison)
- **Within "Subsurface Scattering" card:** Insert Image #13 (SSS Example)
- **Within "Normal Map" explanation:** Insert Image #12 (Normal Map Setup)

### Section: PBR Workflow Fundamentals (id="pbr-workflow")
- **Within "PBR Value Ranges" card:** Insert Image #7 (Base Color Value Range Chart)
- **After "PBR Texture Maps" card:** Insert Image #14 (PBR Texture Map Types)
- **After "Setting Up PBR Materials" card:** Insert Image #15 (Complete PBR Material Setup) and Mermaid diagram (already in HTML)

### Section: Procedural Textures (id="procedural-textures")
- **After "Essential Procedural Texture Nodes" card:** Insert Image #18 (Procedural Texture Gallery)
- **Within "Noise Texture Deep Dive" card:** Insert Image #16 (Noise Parameters Guide)
- **Within "ColorRamp" card:** Insert Image #17 (ColorRamp Techniques)

### Section: Texture Mapping and Coordinates (id="texture-mapping")
- **Within "Texture Coordinate Node" card:** Insert Image #19 (Coordinate Systems Comparison)
- **Within "Mapping Node" card:** Insert Image #20 (Mapping Node Controls)

### Section: Mixing Shaders and Materials (id="mixing-shaders")
- **After "Mix Shader Node" card:** Insert Image #21 (Mix Shader Basic Setup)
- **After "Layering Multiple Shaders" card:** Insert Image #22 (Layered Material Node Tree)
- **Within "Geometry Node" card:** Insert Image #23 (Geometry Outputs Visual)
- **After edge wear example:** Insert Image #24 (Edge Wear Using Pointiness)

### Section: Creating Realistic Materials (id="realistic-materials")
- **Within "Glass Material" card:** Insert Image #25 (Glass Material Examples)
- **Within "Metal Materials" card:** Insert Image #26 (Metal Material Library)
- **Within "Wood Material" card:** Insert Image #27 (Procedural Wood Setup)
- **Within "Plastic Material" card:** Insert Image #28 (Plastic Variations)
- **Within "Stone/Rock Material" card:** Insert Image #29 (Stone Procedural Setup)
- **Within "Fabric Material" card:** Insert Image #30 (Fabric with Sheen)

### Section: Advanced Shading Techniques (id="advanced-techniques")
- **Within "Anisotropic Reflections" card:** Insert Image #31 (Anisotropic Examples)
- **Within "Clearcoat Effect" card:** Insert Image #32 (Clearcoat Demonstration)
- **Within "Displacement and Height" card:** Insert Image #33 (Displacement vs Bump)

### Section: Material Optimization (id="optimization")
- **Within "Understanding Material Performance" card:** Insert Image #35 (Performance Hierarchy)
- **Within "Baking Procedural Materials" card:** Insert Image #34 (Baking Workflow)
- **Within "Material Organization" card:** Insert Image #36 (Node Organization Example)

### Section: Troubleshooting (id="troubleshooting")
- **At beginning of "Material Not Showing in Viewport" subsection:** Insert Image #37 (Viewport Shading Modes)
- **Within "Texture Issues" subsection:** Insert Image #38 (Color Space Comparison)
- **Within "Weird Visual Artifacts" or as standalone reference:** Insert Image #39 (Common Problems Guide)

### Section: Project (id="project-advanced-materials")
- **At beginning or in success checklist:** Insert Image #40 (Material Library Showcase) as inspiration/goal reference

---

## File Naming Convention

```
lesson_14_01_material_properties_comparison.png
lesson_14_02_shader_editor_interface.png
lesson_14_03_node_anatomy_diagram.svg
lesson_14_04_socket_color_reference.svg
lesson_14_05_basic_node_connection.png
lesson_14_06_principled_bsdf_overview.png
lesson_14_07_pbr_value_range_chart.svg
lesson_14_08_metallic_workflow_comparison.png
lesson_14_09_roughness_scale_guide.png
lesson_14_10_ior_reference_chart.svg
lesson_14_11_transmission_vs_alpha.png
lesson_14_12_normal_map_setup.png
lesson_14_13_subsurface_example.png
lesson_14_14_pbr_texture_map_types.png
lesson_14_15_complete_pbr_setup.png
lesson_14_16_noise_parameters_guide.png
lesson_14_17_colorramp_techniques.png
lesson_14_18_procedural_texture_gallery.png
lesson_14_19_coordinate_systems_comparison.png
lesson_14_20_mapping_node_controls.png
lesson_14_21_mix_shader_basic.png
lesson_14_22_layered_material_tree.png
lesson_14_23_geometry_outputs_visual.png
lesson_14_24_edge_wear_pointiness.png
lesson_14_25_glass_material_examples.png
lesson_14_26_metal_material_library.png
lesson_14_27_procedural_wood_setup.png
lesson_14_28_plastic_variations.png
lesson_14_29_stone_procedural_setup.png
lesson_14_30_fabric_with_sheen.png
lesson_14_31_anisotropic_reflections.png
lesson_14_32_clearcoat_demonstration.png
lesson_14_33_displacement_vs_bump.png
lesson_14_34_baking_workflow_diagram.svg
lesson_14_35_material_performance_hierarchy.svg
lesson_14_36_node_organization_example.png
lesson_14_37_viewport_shading_modes.png
lesson_14_38_color_space_comparison.png
lesson_14_39_common_problems_guide.png
lesson_14_40_material_library_showcase.png
```

**Format guidelines:**
- Use two-digit numbering (01-40)
- Descriptive names use underscores (no spaces)
- Extension based on type (.png for renders/screenshots, .svg for diagrams/infographics)
- Consistent naming pattern for easy sorting and identification

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #6 - Principled BSDF Parameter Overview** - Core shader reference
   - **Rationale:** This is the foundation shader students will use constantly; understanding its parameters is critical

2. **Image #4 - Socket Color Reference Chart** - Node connection basics
   - **Rationale:** Students cannot work with nodes without understanding socket colors; this prevents connection errors

3. **Image #8 - Metallic Workflow Comparison** - PBR core concept
   - **Rationale:** Understanding metal vs non-metal is fundamental to PBR workflow; this visual makes the distinction crystal clear

4. **Image #9 - Roughness Scale Visual Guide** - Most impactful parameter
   - **Rationale:** Roughness is the single most important parameter for realism; students need this visual reference constantly

5. **Image #38 - Color Space Settings Comparison** - Common critical error
   - **Rationale:** Wrong color space is #1 beginner mistake causing broken materials; dramatic visual shows importance

6. **Image #2 - Shader Editor Interface Overview** - Workspace orientation
   - **Rationale:** Students must navigate Shader Editor confidently; annotated interface prevents confusion

7. **Image #15 - Complete PBR Material Setup** - Full workflow reference
   - **Rationale:** Shows complete, correct setup students will replicate for texture-based materials

8. **Image #37 - Viewport Shading Modes Visual** - Essential workflow knowledge
   - **Rationale:** Students must know these modes to see their materials; fundamental interface knowledge

**Rationale:** These images directly support primary learning objectives and prevent the most common beginner mistakes. Without these, students will struggle with fundamental concepts and make critical errors.

### Medium Priority (Helpful but not Critical)
9. **Image #3 - Node Anatomy Diagram** - Node structure understanding
10. **Image #5 - Basic Node Connection Example** - First shader connection
11. **Image #10 - IOR Reference Chart** - Material property reference
12. **Image #14 - PBR Texture Map Types** - Texture understanding
13. **Image #18 - Procedural Texture Gallery** - Procedural reference
14. **Image #21 - Mix Shader Basic Setup** - Shader mixing fundamentals
15. **Image #25 - Glass Material Examples** - Glass variations
16. **Image #26 - Metal Material Library** - Metal reference colors
17. **Image #7 - Base Color PBR Value Range Chart** - PBR guidelines
18. **Image #24 - Edge Wear Using Pointiness** - Advanced technique demonstration
19. **Image #35 - Material Performance Hierarchy Chart** - Optimization guidance
20. **Image #39 - Common Material Problems Visual Guide** - Troubleshooting reference

**Rationale:** These enhance understanding and provide helpful references but concepts can be grasped through text explanations if necessary. They significantly improve learning efficiency but aren't blocking.

### Lower Priority (Nice to Have)
21. **Image #1 - Material Properties Comparison** - Conceptual introduction
22. **Image #11 - Transmission vs Alpha Comparison** - Transparency distinction
23. **Image #12 - Normal Map Setup Workflow** - Normal map implementation
24. **Image #13 - Subsurface Scattering Example** - SSS effect demonstration
25. **Image #16 - Noise Texture Parameters Guide** - Noise parameter effects
26. **Image #17 - ColorRamp Techniques Visual** - ColorRamp manipulation
27. **Image #19 - Texture Coordinate Systems Comparison** - Coordinate understanding
28. **Image #20 - Mapping Node Controls Diagram** - Mapping transformations
29. **Image #22 - Layered Material Node Tree** - Organization example
30. **Image #23 - Geometry Node Outputs Visual** - Pointiness visualization
31. **Image #27 - Procedural Wood Material Setup** - Wood workflow
32. **Image #28 - Plastic Material Variations** - Plastic examples
33. **Image #29 - Stone/Rock Procedural Setup** - Stone workflow
34. **Image #30 - Fabric Material with Sheen** - Sheen demonstration
35. **Image #31 - Anisotropic Reflection Examples** - Anisotropic effect
36. **Image #32 - Clearcoat Effect Demonstration** - Clearcoat visualization
37. **Image #33 - Displacement vs Bump Comparison** - Displacement distinction
38. **Image #34 - Baking Workflow Diagram** - Baking process
39. **Image #36 - Node Organization Example** - Organization best practices
40. **Image #40 - Complete Material Library Showcase** - Portfolio inspiration

**Rationale:** Supplementary materials that enhance experience and provide inspiration but aren't necessary for core concept mastery. Students can complete lesson successfully without these, though they add polish and professional context.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:**
  - Background: Dark grey (#2b2b2b) - matches Blender's UI
  - Selection highlight: Bright orange (#ff8c00)
  - Success/good: Green (#4CAF50)
  - Warning/problem: Red/orange for errors
  - Node connections: Green (shader), Yellow (color), Grey (value), Blue (vector)
  - Text: White (#ffffff) for maximum readability on dark backgrounds
  
- **Blender Version:** 4.0+ interface consistency
  - Use current Blender UI styling
  - Accurate node appearances and colors
  - Modern interface elements

- **View Angles:** 
  - Three-quarter view for 3D objects showing form and reflections
  - Front view for technical comparisons
  - Profile view when emphasizing silhouette (displacement)

- **Selection Highlighting:** 
  - Orange outlines or glows for selected elements
  - Arrows and callouts in white with subtle shadows
  - Semi-transparent backgrounds for annotation text

- **Typography:** 
  - Sans-serif fonts (Inter, Roboto, or similar)
  - White text on dark backgrounds
  - Adequate font sizes for readability (minimum 14pt for labels)

- **Annotation Style:** 
  - Clean arrows with single-pixel lines
  - Callout boxes with rounded corners
  - Consistent arrow style throughout
  - Annotations don't obscure important details

### Accessibility Considerations
- **High Contrast:** White text on dark grey (#2b2b2b) background provides excellent readability
- **Clear Labels:** All diagrams and comparisons have explicit text labels
- **Color-blind Friendly:** Don't rely solely on color to convey information; use labels, patterns, and text
- **Alt Text Ready:** Each image has clear purpose description for screen readers
- **Scalable:** SVG diagrams scale without quality loss for vision accessibility
- **Descriptive Naming:** File names clearly indicate content for navigation

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 for interface screenshots
- **Render Resolution:** 1920x1080 or higher for material showcases
- **Image Format:**
  - PNG for screenshots, renders, and photographic content (lossless)
  - SVG for diagrams, charts, and infographics (scalable)
  - JPG only if file size absolutely requires it (use high quality 90+)
- **File Size Target:** 
  - Screenshots/diagrams: Under 500KB each
  - Renders: Under 1MB each
  - Optimize all images without visible quality loss
- **Compression:** Use PNG compression (OptiPNG, TinyPNG) while maintaining visual quality
- **Responsive Sizing:** All images should work well at different viewport sizes (mobile to desktop)

### Special Considerations for This Lesson

**Materials lesson requires MORE visual support than average:**
- Materials are inherently visual - text alone cannot convey appearance
- Students need to see what parameters do before adjusting them
- Reference images are essential for matching real-world materials
- Troubleshooting requires visual comparison (correct vs incorrect)

**Key focus areas needing strong visual support:**
1. Principled BSDF parameters and their effects
2. PBR workflow and texture setup
3. Metallic vs non-metallic distinction
4. Roughness value effects on appearance
5. Common mistakes and their fixes
6. Material type examples (glass, metal, wood, etc.)

**Interactive elements to consider:**
- Before/after sliders for comparison images (future enhancement)
- Annotated hotspots on complex diagrams (future enhancement)
- Downloadable material setup files (future enhancement)

### Production Notes

**Blender Scene Setup for Consistency:**
- Create master scene file with standard lighting setup
- Camera presets for consistent angles (three-quarter view, profile, top-down)
- Material sphere template with proper subdivisions
- Default HDRI environment for consistent lighting
- Background template with dark grey (#2b2b2b)

**Lighting Setup Standards:**
- Three-point lighting for material showcases
- Or HDRI environment (consistent across all renders)
- Adequate lighting to show material properties without overexposure
- Rim lighting for demonstrating effects like sheen and subsurface scattering

**Camera Angles for Consistency:**
- Standard three-quarter view: 45° horizontal, 30° vertical
- Profile view: Exactly side-on for silhouette comparisons
- Top-down: 90° above for certain texture demonstrations

**Batch Processing Optimization:**
- Create template scenes for each image type
- Reuse lighting and camera setups
- Batch render similar images in same session
- Use consistent render settings across all images

**Version Control:**
- Save .blend files for all rendered images
- Keep procedural materials editable (don't bake unless necessary)
- Name .blend files matching final image names
- Maintain master material library .blend file

**Template Reuse Opportunities:**
- Comparison split-screen template (left vs right)
- Before/after template with arrows
- Grid layouts (2x2, 3x2, 3x3)
- Annotation overlay template (callouts, arrows, labels)
- Node tree diagram template (organized, clean)

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All major lesson sections have appropriate image support
- [ ] Each image has clear educational purpose defined with specific rationale
- [ ] AI prompts are detailed and specific with:
  - [ ] Exact color codes (#2b2b2b background, etc.)
  - [ ] Specific style guidance (technical, educational, professional)
  - [ ] Layout requirements clearly stated
  - [ ] Resolution/dimensions specified
  - [ ] Context and purpose mentioned
- [ ] SVG recommendations are justified with clear, specific rationale explaining why vector format benefits each image
- [ ] Placement suggestions reference actual HTML section IDs from the lesson file
- [ ] File naming follows consistent convention with two-digit numbering and descriptive names
- [ ] Priority ranking is logical and justified with detailed rationale for each tier explaining impact on learning
- [ ] Style/accessibility notes are comprehensive covering:
  - [ ] Complete color palette with hex codes
  - [ ] Typography specifications
  - [ ] Annotation standards
  - [ ] Accessibility considerations
- [ ] Output is well-organized with clear sections and hierarchical structure
- [ ] Technical specifications cover all production needs (resolution, formats, compression)
- [ ] Special considerations address lesson-specific requirements (materials are visual)
- [ ] Production notes include workflow optimization and template reuse strategies
- [ ] All 40 images have complete, detailed AI prompts
- [ ] Prompts include all critical specifications (background color, resolution, style, context)
- [ ] Quality checklist is comprehensive and actionable

---

## Additional Recommendations

### Image Creation Workflow Phases

**Phase 1: Essential Foundation (8 images)**
Priority: High priority images 1-8
Timeline: Create these first as they're blocking for lesson usability
Focus: Core concepts and common mistakes

**Phase 2: Material Examples (12 images)**
Priority: Material showcase and comparison images
Timeline: Second phase, provides practical examples
Focus: Glass, metal, wood, plastic, stone, fabric references

**Phase 3: Technique Demonstrations (12 images)**
Priority: Workflow and technique images
Timeline: Third phase, shows advanced applications
Focus: Node setups, layering, optimization, troubleshooting

**Phase 4: Polish and Reference (8 images)**
Priority: Supplementary diagrams and references
Timeline: Final phase, adds comprehensive coverage
Focus: Charts, infographics, detailed references

### Alternative Approaches

**Video Clips as Supplements:**
- Screen recording of node connection process
- Real-time parameter adjustment showing effects
- Viewport navigation and mode switching demonstration
- Live material creation walkthrough

**Interactive Elements (Future Enhancement):**
- Before/after image sliders for comparisons
- Interactive node tree explorer
- Clickable hotspots on Principled BSDF diagram
- Material property interactive demos

**Downloadable Assets:**
- Starter material library .blend file
- PBR texture pack for practice
- Node group presets (edge wear, dirt, etc.)
- Example scene files for each material type

### Future Enhancements

**Expandable Image Gallery:**
- Click to enlarge functionality for detailed views
- Lightbox modal for full-resolution viewing
- Image carousel for related material examples
- Zoom functionality for complex node trees

**Material Browser Integration:**
- Thumbnail grid of all materials
- Filter by material type (metal, glass, organic, etc.)
- Search functionality for specific materials
- Direct download links for .blend files

**Comparison Tools:**
- Side-by-side parameter comparison builder
- Material A vs Material B interactive tool
- Settings difference highlighter
- Visual parameter impact simulator

**Progress Tracking:**
- Image loading indicators
- Completion checklist for image exercises
- Visual progress through material types
- Achievement badges for mastering categories

---

## Success Metrics

**Image quality indicators:**
- Clear visibility of all important details
- Text readable at multiple sizes
- Colors accurate and intentional
- Professional presentation quality

**Educational effectiveness indicators:**
- Concept immediately clear from image alone
- Reduces need for lengthy text explanation
- Serves as standalone reference
- Applicable to real-world work

**Technical quality indicators:**
- Appropriate resolution for use case
- Optimized file size without quality loss
- Consistent style across all images
- Proper format choice (PNG vs SVG)

**Usability indicators:**
- Quick visual scanning possible
- Clear hierarchy and focus
- Annotations helpful not cluttered
- Images enhance rather than distract from content

---

This comprehensive image requirements document provides a complete roadmap for creating high-quality visual assets that will significantly enhance the Advanced Materials lesson. The detailed AI prompts ensure consistency and quality, while the organizational structure facilitates efficient production and future maintenance.