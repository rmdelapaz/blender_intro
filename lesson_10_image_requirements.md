# Image Requirements for Lesson 10: Introduction to Shader Editor

## Task Summary
**Lesson:** lesson_10_shader_editor_introduction.html
**Purpose:** Identify and document all images needed to augment the Shader Editor introduction lesson
**Date:** November 11, 2025

---

## Image List for Lesson 10

### **1. Material Behavior Comparison Grid**
- **Purpose:** Show how different materials respond to identical lighting
- **Type:** Composite/Diagram
- **Shows:** 4-5 identical spheres under same lighting with different materials (chrome, rubber, glass, wood) displaying their unique light interactions

### **2. Shader Editor Interface Overview**
- **Purpose:** Introduce students to the Shader Editor workspace layout
- **Type:** Annotated Screenshot
- **Shows:** Blender's Shading workspace with labels pointing to key areas (3D Viewport, Shader Editor, Properties panel)

### **3. Shader Editor Anatomy Diagram**
- **Purpose:** Identify components of the Shader Editor interface
- **Type:** Annotated Screenshot/Diagram
- **Shows:** Close-up of Shader Editor with annotations for header, canvas, default nodes, connections

### **4. Default Node Setup**
- **Purpose:** Show students what they'll see when first opening Shader Editor
- **Type:** Screenshot
- **Shows:** Principled BSDF connected to Material Output (clean, clear view)

### **5. Node Socket Color Chart**
- **Purpose:** Help students understand data types in node system
- **Type:** Infographic/Diagram
- **Shows:** Visual reference showing green (shader), yellow (color), gray (value), purple (vector) sockets with examples

### **6. Node Directionality Diagram**
- **Purpose:** Explain input/output flow in nodes
- **Type:** Diagram
- **Shows:** Generic node with left side (inputs) and right side (outputs) clearly labeled

### **7. Principled BSDF Parameter Sections**
- **Purpose:** Break down the intimidating parameter list into manageable groups
- **Type:** Annotated Screenshot
- **Shows:** Principled BSDF with parameter groups highlighted (Essential: Base Color, Metallic, Roughness, etc. vs Advanced: Subsurface, Sheen, etc.)

### **8. Metallic Comparison - Metal vs Non-Metal**
- **Purpose:** Visually demonstrate the metallic parameter's effect
- **Type:** Side-by-side Composite
- **Shows:** Two identical spheres, left: Metallic = 0.0 (plastic), right: Metallic = 1.0 (metal)

### **9. Roughness Scale Visualization**
- **Purpose:** Show the full range of roughness values
- **Type:** Multi-panel Composite
- **Shows:** 5-6 spheres with same material but roughness from 0.0 (mirror) to 1.0 (matte), labeled with values

### **10. Material Personality Types Reference**
- **Purpose:** Quick visual reference for common material categories
- **Type:** Multi-sphere Composite
- **Shows:** Grid of spheres demonstrating polished metal, brushed metal, glossy plastic, matte plastic, glass, rubber

### **11. Viewport Shading Modes Comparison**
- **Purpose:** Show students how each viewport mode displays materials differently
- **Type:** 4-panel Composite
- **Shows:** Same scene in Solid, Material Preview, Rendered, and Wireframe modes

### **12. Material Preview Settings Panel**
- **Purpose:** Guide students to important Material Preview options
- **Type:** Annotated Screenshot
- **Shows:** Material Preview dropdown settings with key options highlighted (Lighting, HDRI, Rotation, Blur)

### **13. HDRI Environment Examples**
- **Purpose:** Show how different HDRIs affect material appearance
- **Type:** Multi-panel Composite
- **Shows:** Same material under studio.exr, forest.exr, interior.exr, night.exr

### **14. Material Library Organization Example**
- **Purpose:** Inspire students with organized material showcase
- **Type:** 3D Viewport Screenshot
- **Shows:** Grid of 10+ cubes/spheres, each with different material, neatly arranged with visible variety

### **15. Chrome/Polished Metal Result**
- **Purpose:** Show target result for chrome material exercise
- **Type:** High-quality Render
- **Shows:** Chrome sphere or cube with sharp reflections, demonstrating successful chrome material

### **16. Matte vs Glossy Plastic Comparison**
- **Purpose:** Highlight the importance of roughness in plastic materials
- **Type:** Side-by-side Composite
- **Shows:** Two plastic spheres (red matte vs blue glossy) clearly showing reflection differences

### **17. Clear Glass Material**
- **Purpose:** Show proper glass material with refraction
- **Type:** High-quality Render
- **Shows:** Clear glass cube/sphere with visible refraction, showing objects behind it distorted

### **18. Frosted Glass vs Clear Glass**
- **Purpose:** Demonstrate roughness effect on transparent materials
- **Type:** Side-by-side Composite
- **Shows:** Clear glass (Roughness 0.0) vs Frosted glass (Roughness 0.4), both with Transmission 1.0

### **19. Emissive Material Glow Effect**
- **Purpose:** Show emission creating actual light in scene
- **Type:** Rendered Scene
- **Shows:** Emissive cube/panel illuminating nearby objects in dark environment (Rendered mode)

### **20. Car Paint Clearcoat Effect**
- **Purpose:** Demonstrate the two-layer reflection of clearcoat
- **Type:** High-quality Render
- **Shows:** Red car paint material with visible base layer and glossy clearcoat highlights

### **21. Node Connection Demonstration**
- **Purpose:** Show students how to physically connect nodes
- **Type:** Annotated Screenshot/Diagram
- **Shows:** Hand cursor connecting output socket to input socket with connection line visible

### **22. Z-Key Pie Menu**
- **Purpose:** Show viewport shading mode quick-switch interface
- **Type:** Screenshot
- **Shows:** Pie menu that appears when pressing Z key, with shading modes labeled

### **23. Material Workflow Decision Tree**
- **Purpose:** Guide students through metallic/roughness workflow decisions
- **Type:** Flowchart/Diagram (could be SVG)
- **Shows:** Decision tree starting with "Is it metal?" branching to roughness considerations

### **24. Base Color Considerations for Metals**
- **Purpose:** Show correct base colors for common metals
- **Type:** Reference Chart
- **Shows:** Swatches with RGB/Hex values for Gold, Copper, Steel, Aluminum with example spheres

### **25. IOR Values Reference Chart**
- **Purpose:** Quick reference for transparent material IOR settings
- **Type:** Infographic
- **Shows:** Common materials (water, glass, diamond, etc.) with their IOR values and small visual examples

### **26. File Browser - Append Material Interface**
- **Purpose:** Guide students through material library workflow
- **Type:** Annotated Screenshot
- **Shows:** Blender's File → Append dialog navigated to Material folder with materials listed

### **27. Material Slots Panel**
- **Purpose:** Explain material slot system for multiple materials
- **Type:** Annotated Screenshot
- **Shows:** Material Properties panel showing multiple material slots on an object

### **28. Principled BSDF Advanced Parameters**
- **Purpose:** Overview of specialized parameters students will learn later
- **Type:** Annotated Screenshot
- **Shows:** Principled BSDF scrolled down to show Subsurface, Clearcoat, Sheen, Anisotropic with brief labels

### **29. Real-World Material Reference Collage**
- **Purpose:** Train students' eyes to observe material properties
- **Type:** Photo Collage
- **Shows:** Real photos of chrome, brushed metal, plastic, rubber, glass with notes on roughness/metallic values

### **30. Project Completion Gallery**
- **Purpose:** Show target result for final project - complete material library
- **Type:** Clean 3D Viewport Render
- **Shows:** All 10 project materials displayed on organized grid of cubes/spheres with good lighting

---

## AI Image Generation Prompts

### **Prompt 1: Material Behavior Comparison Grid**
```
Create a professional 3D rendering showing five identical spheres arranged horizontally on a neutral surface under the same studio lighting. Each sphere demonstrates a different material behavior:
1. Chrome metal - sharp, mirror-like reflections with slight blue-gray tint
2. Matte rubber - very dark, almost no reflections, soft diffuse appearance
3. Clear glass - transparent with visible refraction and light bending
4. Rough wood - brown with minimal reflection, textured matte appearance
5. Glossy plastic - bright color with clean specular highlights

Style: Professional 3D render, educational diagram quality
Background: Dark grey gradient (#2b2b2b to #1a1a1a)
Lighting: Soft studio lighting to show material differences clearly
Labels: Material name below each sphere in white sans-serif font
Resolution: 1920x600 (horizontal banner format)
Context: Educational material for Blender shader course
Technical: Ensure distinct material characteristics are clearly visible, realistic PBR rendering
```

### **Prompt 2: Shader Editor Interface Overview**
```
Create an annotated screenshot-style diagram of Blender's Shading workspace layout. Show the four-quadrant layout with:
- Top-left: 3D Viewport showing a cube with orange edges in Material Preview mode
- Top-right: Shader Editor with Principled BSDF and Material Output nodes connected
- Bottom-left: Properties panel showing material properties (sphere icon)
- Bottom-right: Outliner or File Browser

Style: Clean educational diagram with professional annotations
Background: Blender's default dark theme (#2b2b2b)
Annotations: Use bright orange (#ff8c00) arrows and white text labels pointing to:
  - "3D Viewport - see your materials in real-time"
  - "Shader Editor - build material nodes here"
  - "Properties Panel - quick adjustments"
  - "Workspace tabs" at top
Labels: Clear, sans-serif font, high contrast
Context: First-time user orientation to Shading workspace
Resolution: 1920x1080
Technical: Accurate Blender 4.0 interface, clean and uncluttered
```

### **Prompt 3: Shader Editor Anatomy Diagram**
```
Create a detailed annotated diagram of the Shader Editor interface focused on key components. Show:
- Header bar at top with material selector, add menu, view options
- Main canvas area (dark grey #2b2b2b) with two nodes
- Principled BSDF node on left
- Material Output node on right
- Green connection line between them labeled "BSDF connection"

Style: Technical educational diagram
Background: Shader Editor's dark grey canvas (#2b2b2b)
Annotations: Use bright cyan (#00ffff) arrows and white text boxes pointing to:
  - "Header: Commands and material selector"
  - "Canvas: Where nodes live"
  - "Principled BSDF: Your main shader"
  - "Material Output: Final destination"
  - "Connection/Noodle: Data flow"
Highlights: Orange (#ff8c00) boxes around annotated areas
Context: Interface orientation for beginners
Resolution: 1600x900
Technical: Accurate node appearance, readable text at all sizes
```

### **Prompt 4: Default Node Setup**
```
Create a clean, clear diagram of the default Blender material setup showing two nodes:
- Left: Principled BSDF node (tall rectangular node with many parameters visible)
- Right: Material Output node (smaller rectangular node)
- Connected by a bright green line from "BSDF" output to "Surface" input

Style: Technical illustration, high clarity
Background: Dark grey Shader Editor canvas (#2b2b2b)
Nodes: Accurate Blender node appearance with visible sockets
  - Principled BSDF showing Base Color, Metallic, Roughness at minimum
  - Material Output showing Surface, Volume, Displacement inputs
Connection: Bright green line (#4ade80), slight curve
Labels: Node names clearly visible
Context: "This is what you see by default" reference
Resolution: 1200x600
Technical: Nodes should be identifiable as Blender 4.0 style, clean and uncluttered
```

### **Prompt 5: Node Socket Color Chart**
```
Create an educational infographic showing node socket data types with color coding:

Four sections arranged vertically:
1. Green socket + "Shader" + description: "Complete shader information"
   Example: Shows shader data flowing from Principled BSDF
2. Yellow socket + "Color" + description: "RGB color values"
   Example: Shows colorful gradient or color wheel
3. Gray socket + "Value" + description: "Single numerical value"
   Example: Shows number like 0.5 or slider representation
4. Purple socket + "Vector" + description: "3D coordinates (X, Y, Z)"
   Example: Shows coordinate arrows or position data

Style: Clean technical infographic, educational reference chart
Background: Dark grey panel (#2b2b2b)
Layout: Vertical stack, equal spacing between sections
Colors: Use actual socket colors (bright green #4ade80, bright yellow #facc15, light gray #a1a1a1, purple #c084fc)
Typography: Sans-serif, white text, clear hierarchy
Icons: Socket circles should be prominent and easily identifiable
Context: Quick reference guide for node data types
Resolution: 800x1000 (vertical reference card)
Technical: Accurate to Blender's socket color system
```

### **Prompt 6: Node Directionality Diagram**
```
Create a simple, clear diagram showing node input/output directionality using a generic node illustration:

Center: Large rectangular node representation
Left side: Three circular sockets labeled "Inputs →" with arrows pointing INTO the node
Right side: Two circular sockets labeled "← Outputs" with arrows pointing OUT OF the node
Inside node: Text "Processing happens here" or gear icon
Flow arrows: Show data flowing left-to-right through the system

Style: Clean technical diagram, educational illustration
Background: Dark grey (#2b2b2b)
Colors: 
  - Node body: Medium grey (#404040)
  - Input sockets: Various colors (yellow, gray, purple) on left
  - Output sockets: Green and yellow on right
  - Flow arrows: Bright orange (#ff8c00), bold
Labels: White sans-serif text, clear and readable
Additional notes: "Data flows left to right" as subtitle
Context: Fundamental concept explanation for node beginners
Resolution: 1000x600
Technical: Simple and clear, not cluttered with details
```

### **Prompt 7: Principled BSDF Parameter Sections**
```
Create an annotated diagram of the Principled BSDF node showing parameter groupings:

Show the full Principled BSDF node with all parameters visible
Use colored highlight boxes to group parameters:

ESSENTIAL GROUP (bright green #4ade80 highlight):
- Base Color
- Metallic
- Roughness
- Transmission
- Emission (color and strength)
- Alpha

INTERMEDIATE GROUP (yellow #facc15 highlight):
- IOR
- Specular
- Clearcoat
- Clearcoat Roughness

ADVANCED GROUP (orange #ff8c00 highlight):
- Subsurface
- Sheen
- Anisotropic
- Normal

Style: Educational reference diagram with clear visual hierarchy
Background: Shader Editor dark grey (#2b2b2b)
Labels: "Start Here", "Common Next Steps", "Special Effects" for each group
Context: Help students prioritize which parameters to learn first
Resolution: 1000x1400 (vertical, node is tall)
Technical: Accurate Blender 4.0 Principled BSDF appearance
```

### **Prompt 8: Metallic Comparison - Metal vs Non-Metal**
```
Create a side-by-side comparison rendering showing the metallic parameter's dramatic effect:

Two identical spheres on a reflective surface under studio lighting:
Left sphere: Metallic = 0.0
  - Label: "Metallic: 0.0 (Plastic)"
  - Appearance: Bright blue base color (#1E90FF), clean specular highlights, visible color
  - Reflections: White/bright, not colored

Right sphere: Metallic = 1.0
  - Label: "Metallic: 1.0 (Metal)"
  - Appearance: Same blue but only in reflections, surface appears more grey
  - Reflections: Blue-tinted, sharp and mirror-like

Style: Professional 3D rendering, high-quality PBR
Background: Dark grey gradient (#2b2b2b to #1a1a1a)
Lighting: HDRI studio lighting with visible reflections
Both spheres: Roughness = 0.2 (so both are somewhat glossy)
Dividing line: Thin vertical white line between spheres
Labels: Clear white text below each sphere
Context: Demonstrate fundamental metallic property difference
Resolution: 1600x900
Technical: Ensure metallic behavior is scientifically accurate (colored reflections vs colored surface)
```

### **Prompt 9: Roughness Scale Visualization**
```
Create a horizontal lineup showing the complete roughness spectrum:

Six spheres arranged in a row on a neutral surface, all with same material except roughness:
1. Roughness: 0.0 - Label: "Mirror (0.0)" - Perfect mirror reflections
2. Roughness: 0.2 - Label: "Glossy (0.2)" - Sharp but slightly blurred reflections
3. Roughness: 0.4 - Label: "Satin (0.4)" - Soft reflections visible
4. Roughness: 0.6 - Label: "Semi-matte (0.6)" - Very diffuse reflections
5. Roughness: 0.8 - Label: "Matte (0.8)" - Almost no reflections
6. Roughness: 1.0 - Label: "Completely rough (1.0)" - No reflections at all

Style: Professional 3D rendering, educational comparison
Background: Dark grey (#2b2b2b)
All spheres: Same color (neutral grey #808080), Metallic = 0.0
Lighting: Studio HDRI with visible ceiling lights in reflections
Layout: Horizontal row with equal spacing
Labels: Below each sphere, white text with roughness value
Title: "Roughness Scale" centered above
Context: Visual reference for understanding roughness parameter
Resolution: 2000x700 (wide horizontal format)
Technical: Physically accurate roughness progression, PBR rendering
```

### **Prompt 10: Material Personality Types Reference**
```
Create a reference grid showing common material categories:

3x2 grid of spheres, each demonstrating a distinct material personality:
Row 1:
  - Polished Chrome (Metallic: 1.0, Rough: 0.05)
  - Brushed Aluminum (Metallic: 1.0, Rough: 0.4)
  - Glossy Plastic (Metallic: 0.0, Rough: 0.2, colored)
Row 2:
  - Matte Rubber (Metallic: 0.0, Rough: 0.95, dark)
  - Clear Glass (Transmission: 1.0, Rough: 0.0)
  - Frosted Glass (Transmission: 1.0, Rough: 0.4)

Style: Professional material library showcase
Background: Studio environment with soft grey (#3a3a3a)
Lighting: Uniform studio HDRI for fair comparison
Labels: Material name and key parameters below each sphere
Layout: Clean grid, equal spacing, professional presentation
Context: Quick visual reference for material types
Resolution: 1600x1200 (4:3 grid format)
Technical: Each material should be immediately identifiable by characteristics
```

### **Prompt 11: Viewport Shading Modes Comparison**
```
Create a 4-panel comparison showing the same scene in different viewport shading modes:

Scene: Simple setup with cube, sphere, and plane with various materials
Panel layout: 2x2 grid

Top-left: Solid Mode
  - Label: "Solid Mode"
  - Appearance: Flat grey shading, basic studio lighting
  - Use: Modeling focus

Top-right: Material Preview
  - Label: "Material Preview"
  - Appearance: Materials visible with HDRI lighting, fast preview
  - Use: Material creation

Bottom-left: Rendered (Eevee or Cycles)
  - Label: "Rendered Mode"
  - Appearance: Full render quality, accurate materials
  - Use: Final verification

Bottom-right: Wireframe
  - Label: "Wireframe Mode"
  - Appearance: Orange edge lines only, transparent
  - Use: Topology inspection

Style: Educational comparison diagram
Background per panel: As per respective shading mode
Panel borders: Thin white lines separating quadrants
Labels: White text at top of each panel
Context: Help students understand when to use each mode
Resolution: 1920x1080 (fits 2x2 grid nicely)
Technical: Accurate representation of each Blender shading mode
```

### **Prompt 12: Material Preview Settings Panel**
```
Create an annotated screenshot-style diagram of Material Preview mode settings:

Show the dropdown menu that appears when clicking the arrow next to Material Preview shading icon
Visible settings should include:
- Lighting: Scene Lights / Scene World / Studio (Studio selected)
- HDRI dropdown showing available environments (studio.exr, forest.exr, etc.)
- Rotation slider for HDRI
- Strength slider for lighting intensity
- Blur slider for reflection quality

Style: Technical interface diagram with annotations
Background: Blender's dark interface (#2b2b2b)
Annotations: Orange arrows (#ff8c00) pointing to key settings:
  - "Choose lighting source"
  - "Select environment"
  - "Rotate lighting"
  - "Adjust brightness"
  - "Blur reflections"
Highlights: Subtle orange boxes around important options
Context: Guide users to customize Material Preview
Resolution: 800x1000 (vertical panel)
Technical: Accurate Blender 4.0 interface appearance
```

### **Prompt 13: HDRI Environment Examples**
```
Create a 2x2 grid showing the same chrome sphere under different HDRI environments:

Top-left: studio.exr
  - Label: "Studio HDRI"
  - Appearance: Neutral grey environment, even lighting
  - Reflections: Studio ceiling lights visible

Top-right: forest.exr
  - Label: "Forest HDRI"
  - Appearance: Green/natural tones, outdoor lighting
  - Reflections: Trees and sky visible

Bottom-left: interior.exr
  - Label: "Interior HDRI"
  - Appearance: Warm indoor lighting, softer
  - Reflections: Room elements visible

Bottom-right: night.exr
  - Label: "Night HDRI"
  - Appearance: Dark, dramatic, cool tones
  - Reflections: Stars or city lights

Style: Professional comparison showcase
Material: Same chrome sphere (Metallic: 1.0, Rough: 0.1) in all panels
Panel layout: Equal-sized quadrants with thin dividers
Labels: Environment name at top of each panel
Context: Demonstrate HDRI impact on material appearance
Resolution: 1600x1600 (square 2x2 grid)
Technical: Each HDRI should create distinctly different look on same material
```

### **Prompt 14: Material Library Organization Example**
```
Create an inspiring, well-organized material library showcase:

Scene: 3D viewport showing 12 objects (cubes or spheres) arranged in neat 3x4 grid
Each object displays a different material:
Row 1: Chrome, Gold, Brushed Steel, Copper
Row 2: Red Glossy Plastic, Blue Matte Plastic, Clear Glass, Frosted Glass
Row 3: Emissive Blue, Car Paint, Rubber, Wood

Style: Professional 3D scene, organized and clean
View: Slight angle (not perfectly top-down), shows material details
Background: Clean dark grey (#2b2b2b)
Lighting: Even studio lighting to show all materials fairly
Spacing: Equal spacing between objects, aligned grid
Context: Inspire students with organization goals
Resolution: 1920x1080
Technical: Each material should be clearly distinguishable and well-rendered
```

### **Prompt 15: Chrome/Polished Metal Result**
```
Create a high-quality render demonstrating successful chrome material:

Subject: Sphere or cube with perfect chrome material
Material properties:
  - Base Color: Light grey (#D9D9D9)
  - Metallic: 1.0
  - Roughness: 0.05

Style: Professional product visualization quality
Background: Studio environment with interesting elements to reflect
Lighting: High-quality HDRI with visible light sources
Reflections: Sharp, clear environment reflections with slight blur
Surface: Mirror-like but not perfectly perfect (subtle roughness visible)
Context: "This is what you're aiming for" target image
Resolution: 1200x1200 (square, centered composition)
Technical: Physically accurate chrome, realistic reflections
Note: Should look premium and professional, motivating for students
```

### **Prompt 16: Matte vs Glossy Plastic Comparison**
```
Create a dramatic side-by-side comparison highlighting roughness importance in plastics:

Two spheres on neutral surface:
Left: Matte Red Plastic
  - Label: "Matte (Roughness: 0.9)"
  - Color: Deep red (#8B0000)
  - Appearance: Solid color, almost no reflections, very diffuse
  - Surface: Looks soft and non-reflective

Right: Glossy Blue Plastic
  - Label: "Glossy (Roughness: 0.2)"
  - Color: Bright blue (#1E90FF)
  - Appearance: Clean specular highlights, visible environment reflections
  - Surface: Looks shiny and reflective like a toy

Style: Educational comparison rendering
Background: Dark grey gradient (#2b2b2b)
Lighting: Strong directional light to emphasize reflection difference
Divider: Thin vertical white line between spheres
Both: Metallic = 0.0 (they're plastic, not metal)
Labels: Below each sphere with roughness value prominent
Context: Demonstrate crucial importance of roughness parameter
Resolution: 1600x900
Technical: Exaggerate the difference clearly for educational impact
```

### **Prompt 17: Clear Glass Material**
```
Create a demonstration of proper glass material with visible refraction:

Scene: Clear glass cube or sphere in front of a striped or checkered background
Glass material:
  - Transmission: 1.0
  - Roughness: 0.0
  - IOR: 1.45

Style: Clean technical demonstration
Background: Simple black and white stripes or checkerboard pattern
Visible effect: Background pattern clearly distorted/refracted through glass
Lighting: Even studio lighting, no dramatic shadows
Focus: The refraction should be obvious - bent lines visible through glass
Additional elements: Perhaps a second colored object behind glass showing color passing through
Context: Prove to students their glass material is working correctly
Resolution: 1200x900
Technical: Accurate refraction based on IOR 1.45, realistic glass rendering
```

### **Prompt 18: Frosted Glass vs Clear Glass**
```
Create a direct comparison showing roughness effect on transparent materials:

Two glass spheres side-by-side:
Left: Clear Glass
  - Label: "Clear (Roughness: 0.0)"
  - Transmission: 1.0
  - Appearance: Crisp, sharp refraction, clear environment reflections
  - Effect: Can see through clearly with bent light

Right: Frosted Glass
  - Label: "Frosted (Roughness: 0.4)"
  - Transmission: 1.0
  - Appearance: Soft, diffused light passing through, blurred reflections
  - Effect: Translucent but not transparent, privacy glass look

Style: Technical comparison rendering
Background: Interesting objects or patterns behind both spheres to show transparency difference
Lighting: Studio HDRI to show reflection quality difference
Both: Same IOR (1.45), same transmission (1.0), ONLY roughness differs
Divider: Thin white vertical line
Labels: Clear parameter differences noted
Context: Demonstrate roughness effect on transparent materials
Resolution: 1600x900
Technical: Accurate roughness behavior on transmission
```

### **Prompt 19: Emissive Material Glow Effect**
```
Create a dramatic demonstration of emission actually lighting the scene:

Scene: Dark environment with emissive panel/cube and nearby objects
Emissive object:
  - Bright blue emission (RGB: 0.3, 0.6, 1.0)
  - Emission Strength: 10.0
  - Glowing brightly

Effect: Blue light visibly illuminating nearby objects
  - Sphere next to emissive object lit by blue glow
  - Ground plane showing blue light falloff
  - Shadows cast away from emissive source

Style: Dramatic demonstration render
Background: Very dark (#0a0a0a) to emphasize glow
Render mode: Must be Rendered mode (Cycles or Eevee) to show lighting effect
Mood: Sci-fi, dramatic, clear cause-and-effect
Context: Show emission is real light source, not just color
Resolution: 1600x900
Technical: Accurate light emission and illumination, realistic falloff
```

### **Prompt 20: Car Paint Clearcoat Effect**
```
Create a detailed close-up showing the two-layer clearcoat reflection:

Subject: Curved surface with red car paint material
Material properties:
  - Base Color: Deep red (#8B0000)
  - Roughness: 0.4 (base layer)
  - Clearcoat: 1.0
  - Clearcoat Roughness: 0.1 (glossy layer)

Visual effect: Should show TWO types of reflections:
  1. Broader, softer reflections from base layer
  2. Sharp, crisp highlights from clearcoat layer

Style: Automotive product photography quality
Lighting: Strong studio lights to emphasize the dual-reflection effect
View: Angle that shows both the color depth and surface reflections
Annotations (optional): Arrows pointing to "Base layer reflection" and "Clearcoat highlights"
Context: Demonstrate the sophistication of clearcoat parameter
Resolution: 1600x900
Technical: Clearcoat effect must be clearly visible and distinguishable
```

### **Prompt 21: Node Connection Demonstration**
```
Create an instructional diagram showing how to connect nodes:

Scene: Two nodes with cursor/hand icon showing connection process
Left node: Has an output socket (right side) highlighted
Right node: Has an input socket (left side) highlighted
Connection line: Green noodle being drawn from output to input
Cursor: Hand/pointer icon positioned mid-connection

Style: Instructional technical diagram
Background: Shader Editor dark canvas (#2b2b2b)
Annotations: 
  - "1. Click output socket" (arrow to output)
  - "2. Drag to input socket" (arrow following connection line)
  - "3. Release to connect" (arrow to input)
Numbers: Bright orange (#ff8c00) numbered steps
Highlights: Sockets being connected should glow or be highlighted
Context: Visual instruction for physical node connection process
Resolution: 1200x800
Technical: Clear step-by-step visual instruction
```

### **Prompt 22: Z-Key Pie Menu**
```
Create a diagram of Blender's Z-key viewport shading pie menu:

Center: Small circular center point
Radiating outward: Four or five options arranged in pie/radial menu:
  - Top-right: "Wireframe" with wireframe icon
  - Top-left: "Solid" with solid sphere icon
  - Bottom-left: "Material Preview" with preview sphere icon
  - Bottom-right: "Rendered" with rendered sphere icon
  - (Optional center: additional options)

Style: Interface mockup diagram
Background: Semi-transparent overlay showing it appears over viewport
Menu appearance: Blender's dark theme (#2b2b2b) with rounded segments
Icons: Each option has corresponding sphere icon showing mode
Highlighted: One option highlighted as if mouse hovering
Label at top: "Press Z for quick shading mode switch"
Context: Show students the quick-access pie menu
Resolution: 1000x1000 (square, centered pie)
Technical: Accurate to Blender's pie menu design
```

### **Prompt 23: Material Workflow Decision Tree**
```
Create a clear flowchart guiding material creation decisions:

Start: "What material am I creating?"
First decision: "Is it metal?" (diamond shape)
  - If Yes → "Metallic = 1.0" (rectangle)
  - If No → "Metallic = 0.0" (rectangle)
Second decision (from both paths): "How reflective?" (diamond shape)
Branches to:
  - "Mirror smooth" → "Roughness = 0.0 - 0.1"
  - "Glossy" → "Roughness = 0.1 - 0.3"
  - "Satin" → "Roughness = 0.3 - 0.6"
  - "Matte" → "Roughness = 0.6 - 0.9"
  - "Completely rough" → "Roughness = 0.9 - 1.0"

Style: Clean flowchart/decision tree
Colors:
  - Start node: Purple (#764ba2)
  - Decision diamonds: Orange (#ff8c00)
  - Action rectangles: Green (#4ade80)
  - Final values: Blue (#3b82f6)
Background: Light grey (#f5f5f5) for clarity
Arrows: Clear directional flow, labeled "Yes"/"No" where appropriate
Layout: Top-to-bottom flow, tree branches out
Context: Decision-making guide for beginners
Resolution: 1000x1400 (vertical flowchart)
Technical: Could be created as SVG for scalability
```

### **Prompt 24: Base Color Considerations for Metals**
```
Create a reference chart showing correct metallic base colors:

Four columns, each showing:
  - Metal name
  - RGB/Hex color swatch (large)
  - Numerical values
  - Small rendered sphere with that metal

Metals to show:
1. Gold
   - RGB: (1.0, 0.71, 0.29) / Hex: #FFB54A
   - Sphere: Polished gold appearance

2. Copper
   - RGB: (0.95, 0.64, 0.54) / Hex: #F2A389
   - Sphere: Reddish-brown metal

3. Steel/Iron
   - RGB: (0.56, 0.57, 0.58) / Hex: #8F9194
   - Sphere: Blue-grey metal

4. Aluminum
   - RGB: (0.91, 0.92, 0.92) / Hex: #E8EBEB
   - Sphere: Bright grey metal

Style: Reference chart, educational and practical
Layout: Four equal columns with clear hierarchy
Background: Dark grey (#2b2b2b)
Color swatches: Large, prominent, easy to reference
Values: Clear, copyable, in both RGB and Hex
Spheres: High-quality renders showing final result
Note at top: "All with Metallic: 1.0, Roughness: 0.1"
Context: Quick-reference for accurate metal colors
Resolution: 1920x600 (horizontal reference bar)
Technical: Colors should be scientifically accurate for real metals
```

### **Prompt 25: IOR Values Reference Chart**
```
Create an infographic showing common IOR (Index of Refraction) values:

Layout: Vertical list or table format
Include these materials with values:
- Air/Vacuum: 1.0 (reference baseline)
- Water: 1.33
- Plastic/Acrylic: 1.45-1.49
- Glass (standard): 1.45-1.52
- Quartz Crystal: 1.54
- Sapphire: 1.77
- Diamond: 2.42

Style: Clean reference infographic
Background: Dark grey panel (#2b2b2b)
Layout: Two columns
  - Left: Material name + IOR value
  - Right: Small illustration or photo showing refraction strength
Visual indication: Bent light ray showing increasingly dramatic bending
Color coding: Perhaps gradient from blue (low IOR) to red (high IOR)
Practical note: "Higher IOR = More light bending"
Context: Quick reference when creating transparent materials
Resolution: 800x1200 (vertical reference card)
Technical: IOR values should be accurate to real-world physics
```

### **Prompt 26: File Browser - Append Material Interface**
```
Create an annotated screenshot-style diagram of the Append material workflow:

Show Blender's File Browser in Append mode:
- Top: File path showing navigation to Material_Library.blend
- Main view: Material folder selected, showing list of materials
  - Chrome_Metal
  - Gold_Polished
  - Plastic_Glossy_Red
  - Glass_Clear
  - (etc.)
- Bottom-right: "Append" button highlighted

Style: Interface tutorial diagram
Background: Blender's file browser dark theme
Annotations: Orange arrows and text:
  - "1. Navigate to your library file"
  - "2. Double-click to open"
  - "3. Select Material folder"
  - "4. Choose materials"
  - "5. Click Append button"
Highlights: Important UI elements outlined in orange
Context: Step-by-step visual guide for material appending
Resolution: 1600x900
Technical: Accurate Blender 4.0 file browser interface
```

### **Prompt 27: Material Slots Panel**
```
Create an annotated diagram of the Material Properties panel showing multiple material slots:

Show Material Properties panel (sphere icon) with:
- Object (cube icon) selected at top
- Material Slots section showing:
  - Slot 1: "Metal_Chrome" (highlighted/active)
  - Slot 2: "Plastic_Red"
  - Slot 3: "Glass_Clear"
- Plus/minus buttons for adding/removing slots
- Link/assignment indicators

Style: Interface reference diagram
Background: Blender's dark properties panel theme
Annotations: Labels pointing to:
  - "Active material slot"
  - "Add new slot"
  - "Remove slot"
  - "Material preview sphere"
  - "Link vs. Object data indicator"
Highlights: Orange boxes around key elements
Note: "Different materials for different faces/parts of object"
Context: Explain multi-material objects
Resolution: 600x1000 (vertical panel)
Technical: Accurate Blender 4.0 Material Properties appearance
```

### **Prompt 28: Principled BSDF Advanced Parameters**
```
Create an overview diagram of specialized Principled BSDF parameters:

Show the lower section of Principled BSDF with advanced parameters visible:
- Subsurface (with Subsurface Color, Radius, IOR, Anisotropy)
- Sheen (with Sheen Tint)
- Clearcoat (with Clearcoat Roughness, Clearcoat Normal)
- Anisotropic (with Anisotropic Rotation)
- Transmission (with Transmission Roughness)
- Emission (Color and Strength)

Style: Reference diagram with use-case labels
Background: Shader Editor dark grey (#2b2b2b)
Labels: Each parameter group gets colored tag:
  - Subsurface: "For skin, wax, marble"
  - Sheen: "For fabric, velvet"
  - Clearcoat: "For car paint, lacquer"
  - Anisotropic: "For brushed metal, hair"
Colors: Different colors for each category for easy identification
Context: "Advanced parameters for specialized materials"
Resolution: 1000x1600 (vertical, showing full node)
Technical: Accurate parameter layout and grouping
```

### **Prompt 29: Real-World Material Reference Collage**
```
Create an educational photo collage showing real materials with analysis notes:

4x2 grid of real-world photographs:
Row 1:
  - Chrome car bumper (with note: "Metallic: 1.0, Roughness: 0.05")
  - Brushed aluminum laptop (note: "Metallic: 1.0, Roughness: 0.4, Anisotropic")
  - Glossy plastic toy (note: "Metallic: 0.0, Roughness: 0.2")
  - Matte rubber mouse pad (note: "Metallic: 0.0, Roughness: 0.95")
Row 2:
  - Clear glass window (note: "Transmission: 1.0, Roughness: 0.0")
  - Frosted bathroom window (note: "Transmission: 1.0, Roughness: 0.4")
  - Polished wood furniture (note: "Metallic: 0.0, Roughness: 0.3")
  - Concrete wall (note: "Metallic: 0.0, Roughness: 0.85")

Style: Educational reference collage, photo compilation
Photos: High-quality real-world photography
Notes: White text overlay with material parameters
Frame: Each photo in clean white border
Background: Dark grey (#2b2b2b) between photos
Title: "Real-World Material Analysis"
Context: Train students to observe and analyze real materials
Resolution: 1920x1080
Technical: Photos should clearly show material characteristics
```

### **Prompt 30: Project Completion Gallery**
```
Create an inspiring showcase of the completed material library project:

Scene: Professional 3D render showing all 10 project materials
Objects: Spheres or cubes arranged in organized 2x5 or 3x4 grid
Materials displayed:
  1. Chrome Metal (mirror-like)
  2. Brushed Steel (satin finish)
  3. Polished Gold (warm reflections)
  4. Glossy Red Plastic (shiny with color)
  5. Matte Black Rubber (very diffuse)
  6. Clear Glass (transparent with refraction)
  7. Frosted Glass (translucent, soft)
  8. Cyan Emissive (glowing blue)
  9. Red Car Paint (clearcoat highlights)
  10. Polished Wood (brown with subtle reflection)

Style: Portfolio-quality presentation render
Background: Professional studio environment with subtle gradient
Lighting: High-quality HDRI showing materials at their best
Arrangement: Neat grid, professional spacing
Camera: Slight angle to show depth and material variety
Labels (optional): Material names on small plates below each
Title: "Material Library - 10 Essential Materials"
Context: "This is your goal" inspirational target image
Resolution: 1920x1080 (suitable for course banner)
Technical: Each material should look professional and correct
Note: This should be impressive and motivating for students
```

---

## SVG Diagram Recommendations

The following images would work excellently as SVG diagrams for clarity, scalability, and file size:

1. **Node Socket Color Chart** (#5) - Simple geometric shapes and colors, perfect for vector
   - Rationale: Consists of circles, text, and color blocks - ideal SVG content

2. **Node Directionality Diagram** (#6) - Basic shapes and arrows
   - Rationale: Simple geometric illustration, scales perfectly, very small file size

3. **Material Workflow Decision Tree** (#23) - Flowchart structure
   - Rationale: Standard flowchart with boxes, diamonds, and connecting lines - classic SVG use case

4. **IOR Values Reference Chart** (#25) - Information design with text and simple graphics
   - Rationale: Primarily text-based with simple visual elements, excellent SVG candidate

5. **Z-Key Pie Menu** (#22) - Interface mockup with geometric layout
   - Rationale: Circular segments and icons, clean vector graphics

**Rationale for SVG recommendations:** These images contain primarily geometric shapes, text, icons, and simple illustrations rather than photorealistic 3D renders or photographs. SVG format provides:
- Resolution independence (perfect at any zoom level)
- Tiny file sizes (important for web delivery)
- Easy editing and updating
- Crisp rendering on all displays
- Accessibility benefits (can include text descriptions)

Images requiring photorealistic 3D renders, actual screenshots, or complex shading should remain as PNG format.

---

## Image Placement Suggestions in HTML

### Section: "What Are Materials and Why They Matter" (id="what-are-materials")
- **After paragraph "A material is essentially...":** Insert Image #1 (Material Behavior Comparison Grid)
- **After table "Materials vs. Textures":** Insert Image #29 (Real-World Material Reference Collage)
- **Before "Why Blender Uses Node-Based Materials" heading:** Insert mermaid diagram showing material light interaction

### Section: "The Shader Editor Interface" (id="shader-editor-interface")
- **After paragraph "Time to open Blender's material workshop":** Insert Image #2 (Shader Editor Interface Overview)
- **After "Shader Editor Anatomy" paragraph:** Insert Image #3 (Shader Editor Anatomy Diagram)
- **After "Your First Look at Nodes" heading:** Insert Image #4 (Default Node Setup)
- **Within "Node Interaction Basics" card:** Insert Image #21 (Node Connection Demonstration)

### Section: "Understanding the Node System" (id="understanding-nodes")
- **After "What Is a Node?" paragraph:** Insert Image #6 (Node Directionality Diagram)
- **After "Node Categories" table:** Insert Image #5 (Node Socket Color Chart)
- **Within "How Data Flows Through Nodes" section:** Reference existing mermaid diagram, supplement if needed

### Section: "The Principled BSDF" (id="principled-bsdf")
- **After "The Principled BSDF Interface" paragraph:** Insert Image #7 (Principled BSDF Parameter Sections)
- **After "Metallic: The Binary Decision" section:** Insert Image #8 (Metallic Comparison)
- **After "Roughness: Surface Microsurface Detail" section:** Insert Image #9 (Roughness Scale Visualization)
- **Within "Quick Material Recipes" section:** Insert Image #10 (Material Personality Types Reference)
- **After "Advanced Parameters" section:** Insert Image #28 (Principled BSDF Advanced Parameters)

### Section: "Basic Material Properties" (id="basic-material-properties")
- **After "The Metallic/Roughness Workflow" heading:** Insert mermaid decision tree or Image #23 (Material Workflow Decision Tree)
- **After "Understanding Material 'Personality'" table:** Insert Image #10 (Material Personality Types Reference) if not used earlier
- **Within "Base Color: More Than Just Paint" section:** Insert Image #24 (Base Color Considerations for Metals)
- **Within "IOR: Index of Refraction" section:** Insert Image #25 (IOR Values Reference Chart)

### Section: "Creating Your First Simple Materials" (id="creating-simple-materials")
- **After "Material 1: Polished Gold" completion:** Insert Image #15 (Chrome/Polished Metal Result) showing example
- **After "Material 4: Glossy Red Plastic" and "Material 5: Matte Rubber":** Insert Image #16 (Matte vs Glossy Plastic Comparison)
- **After "Material 6: Clear Glass":** Insert Image #17 (Clear Glass Material)
- **After "Material 7: Frosted Glass":** Insert Image #18 (Frosted Glass vs Clear Glass)
- **After "Material 8: Glowing Emissive Surface":** Insert Image #19 (Emissive Material Glow Effect)
- **After "Material 9: Car Paint":** Insert Image #20 (Car Paint Clearcoat Effect)
- **After "Organizing Your Material Library" section:** Insert Image #14 (Material Library Organization Example)

### Section: "Material Preview and Viewport Shading" (id="material-preview")
- **After "The Four Viewport Shading Modes" table:** Insert Image #11 (Viewport Shading Modes Comparison)
- **After "Material Preview Settings" paragraph:** Insert Image #12 (Material Preview Settings Panel)
- **After describing HDRI selection options:** Insert Image #13 (HDRI Environment Examples)
- **After "The Z-Key Quick Menu" heading:** Insert Image #22 (Z-Key Pie Menu)

### Section: "Project: Essential Material Library" (id="project")
- **At project introduction:** Insert Image #30 (Project Completion Gallery) as aspirational goal image
- **In "Step 3: Organize Your Library":** Reference Image #14 (Material Library Organization Example)
- **In "How to Use Your Material Library":** Insert Image #26 (File Browser - Append Material Interface)
- **After project completion checklist:** Reinsert Image #30 as success showcase

### Additional Suggestions:
- **Material Slots explanation:** Insert Image #27 (Material Slots Panel) in sidebar or as expandable reference
- **Throughout lesson:** Use small inline icons or thumbnails where referencing viewport modes

---

## File Naming Convention

```
lesson_10_01_material_behavior_comparison.png
lesson_10_02_shader_editor_overview.png
lesson_10_03_shader_editor_anatomy.png
lesson_10_04_default_node_setup.png
lesson_10_05_node_socket_colors.svg
lesson_10_06_node_directionality.svg
lesson_10_07_principled_bsdf_sections.png
lesson_10_08_metallic_comparison.png
lesson_10_09_roughness_scale.png
lesson_10_10_material_personality_types.png
lesson_10_11_viewport_shading_modes.png
lesson_10_12_material_preview_settings.png
lesson_10_13_hdri_environments.png
lesson_10_14_material_library_organization.png
lesson_10_15_chrome_result.png
lesson_10_16_matte_glossy_comparison.png
lesson_10_17_clear_glass.png
lesson_10_18_frosted_clear_comparison.png
lesson_10_19_emissive_glow.png
lesson_10_20_car_paint_clearcoat.png
lesson_10_21_node_connection_demo.png
lesson_10_22_z_key_pie_menu.png
lesson_10_23_workflow_decision_tree.svg
lesson_10_24_metal_base_colors.png
lesson_10_25_ior_reference_chart.svg
lesson_10_26_append_interface.png
lesson_10_27_material_slots_panel.png
lesson_10_28_advanced_parameters.png
lesson_10_29_real_world_reference.png
lesson_10_30_project_completion_gallery.png
```

**Format guidelines:**
- Use two-digit numbering (01-30)
- Descriptive names with underscores (no spaces)
- .png for screenshots and renders
- .svg for diagrams and charts where recommended
- .jpg only if file size becomes critical issue

---

## Production Priority

### High Priority (Essential for Understanding Core Concepts)

1. **Image #7 - Principled BSDF Parameter Sections**
   - Rationale: Critical for helping students not feel overwhelmed by parameters. Shows which to focus on first.

2. **Image #8 - Metallic Comparison**
   - Rationale: The metallic parameter is fundamental to PBR workflow. This visual makes the difference crystal clear.

3. **Image #9 - Roughness Scale Visualization**
   - Rationale: Roughness is the most important parameter for material realism. Students need this visual reference.

4. **Image #2 - Shader Editor Interface Overview**
   - Rationale: First-time orientation to the workspace. Without this, students may feel lost.

5. **Image #4 - Default Node Setup**
   - Rationale: Shows students what they'll see immediately. Reduces confusion and builds confidence.

6. **Image #11 - Viewport Shading Modes Comparison**
   - Rationale: Students must understand different viewport modes for efficient workflow.

7. **Image #5 - Node Socket Color Chart**
   - Rationale: Fundamental to understanding node connections. Referenced throughout course.

8. **Image #10 - Material Personality Types Reference**
   - Rationale: Quick visual reference for common materials. Students will reference this constantly.

**Rationale for High Priority:** These images directly support primary learning objectives: understanding the interface, grasping core PBR parameters (metallic/roughness), and navigating viewport modes. Without these, students cannot effectively follow the lesson.

### Medium Priority (Enhance Understanding but Concepts Can Be Grasped Without)

9. **Image #16 - Matte vs Glossy Plastic Comparison**
   - Rationale: Reinforces roughness concept with practical comparison. Helpful but roughness scale (#9) covers similar ground.

10. **Image #3 - Shader Editor Anatomy Diagram**
    - Rationale: Detailed breakdown helpful but interface overview (#2) covers basics adequately.

11. **Image #12 - Material Preview Settings Panel**
    - Rationale: Useful for customization but most students will use defaults initially.

12. **Image #13 - HDRI Environment Examples**
    - Rationale: Shows environment impact but students can experiment themselves.

13. **Image #22 - Z-Key Pie Menu**
    - Rationale: Convenient shortcut but viewport mode concept already covered in #11.

14. **Image #6 - Node Directionality Diagram**
    - Rationale: Helpful conceptual diagram but left-to-right flow is fairly intuitive.

15. **Image #24 - Metal Base Colors Reference**
    - Rationale: Useful reference but specific values provided in text. Students can adjust by eye.

16. **Image #18 - Frosted vs Clear Glass Comparison**
    - Rationale: Good comparison but concept can be understood from descriptions.

17. **Image #26 - Append Material Interface**
    - Rationale: Helpful workflow guide but File → Append is straightforward for most users.

18. **Image #30 - Project Completion Gallery**
    - Rationale: Inspirational goal image. Nice to have but not essential for learning.

**Rationale for Medium Priority:** These images enhance the learning experience and provide helpful references, but the core concepts can be understood from text descriptions, existing images, and hands-on practice. They improve clarity but aren't blocking factors for comprehension.

### Lower Priority (Nice to Have, Supplementary)

19. **Image #1 - Material Behavior Comparison Grid**
    - Rationale: Great opening visual but concept explained well in text. More motivational than instructional.

20. **Image #14 - Material Library Organization Example**
    - Rationale: Inspirational organization example. Students will create their own unique layouts.

21. **Image #21 - Node Connection Demonstration**
    - Rationale: Connection process is fairly intuitive once nodes are understood.

22. **Image #23 - Material Workflow Decision Tree** (SVG)
    - Rationale: Helpful reference but decision-making flow covered in text and tables.

23. **Image #25 - IOR Reference Chart** (SVG)
    - Rationale: Useful reference values but only relevant for transparent materials (subset of lesson).

24. **Image #27 - Material Slots Panel**
    - Rationale: Advanced feature for multi-material objects. Not critical for basic material creation.

25. **Image #28 - Advanced Parameters Overview**
    - Rationale: Explicitly marked as optional/advanced in lesson. Students don't need this immediately.

26. **Image #29 - Real-World Material Reference Collage**
    - Rationale: Excellent observational training but students can observe their own environment.

27. **Image #15 - Chrome Result**
    - Rationale: Success example but students will create their own and see results in viewport.

28. **Image #17 - Clear Glass Material**
    - Rationale: Example image but glass behavior can be verified in student's own work.

29. **Image #19 - Emissive Glow Effect**
    - Rationale: Dramatic demonstration but effect visible in student's viewport when they create it.

30. **Image #20 - Car Paint Clearcoat Effect**
    - Rationale: Advanced material demonstration. Nice visual but not essential for core lesson.

**Rationale for Lower Priority:** These images provide supplementary value—inspiration, advanced examples, alternative explanations—but aren't necessary for completing the lesson successfully. They're "nice to have" additions that polish the course but can be added later if resources allow.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:**
  - Background: Dark grey (#2b2b2b) - matches Blender's default theme
  - Selection highlight: Bright orange (#ff8c00) - Blender's default selection color
  - Wireframe: Cyan/white (#00ffff / #ffffff)
  - UI annotations: Orange arrows and highlights (#ff8c00)
  - Success/positive: Green (#4ade80)
  - Warning/caution: Yellow (#facc15)
  - Information: Blue (#3b82f6)
  
- **Blender Version:** All screenshots and UI elements should reflect Blender 4.0 interface for consistency

- **View Angles:** 
  - Default camera: 45° angle showing three faces of cube/sphere
  - Material comparison shots: Consistent angle across all samples
  - Interface screenshots: Clear, unobstructed view with important elements visible

- **Selection Highlighting:** Use bright orange (#ff8c00) outlines for selected elements, matching Blender's default

- **Typography:**
  - Font: Sans-serif (Roboto, Open Sans, or similar clean font)
  - Labels: White text on dark backgrounds
  - Hierarchy: Clear size differences between headers, body, and annotations
  - Minimum text size: 14pt for body, 18pt for headers in diagrams

- **Annotation Style:**
  - Arrows: Bold orange (#ff8c00), 3-4px stroke width
  - Callout boxes: Semi-transparent dark background with white text
  - Leader lines: Clean, minimal bends
  - Number badges: Circular orange backgrounds with white numbers for step sequences

- **Wireframe Clarity:**
  - Edge visibility: Bright orange (#ff8c00) for selected edges
  - Unselected edges: White or cyan on dark background
  - Edge width: 2-3px for clear visibility

### Accessibility Considerations
- **Alt Text Required:** All images must have descriptive alt text explaining visual content for screen readers
- **High Contrast:** Maintain minimum 4.5:1 contrast ratio between text and backgrounds (WCAG AA standard)
- **Text Size:** Labels and annotations should be legible at minimum 14pt font size
- **Color Independence:** Don't rely solely on color to convey information; use shapes, labels, and patterns
- **Diagram Simplicity:** Avoid overly complex diagrams; break into multiple images if necessary

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 for full-screen captures, maintain clarity when scaled down
- **Image Format:**
  - PNG for screenshots, UI elements, and images requiring transparency (24-bit or 32-bit with alpha)
  - SVG for diagrams, flowcharts, and vector-based illustrations (with embedded fonts)
  - JPG only if file size is critical and quality loss acceptable (quality 85-95)
- **File Size Target:**
  - Individual images: < 500KB for PNG (use compression tools like TinyPNG)
  - SVG: < 100KB (optimize with SVGO)
  - Total lesson image payload: Aim for < 10MB combined
- **Compression:** Use lossless compression for PNG (pngquant, OptiPNG), optimize SVG markup
- **Responsive Sizing:** Images should scale well on mobile devices; test at 375px width minimum

### Special Considerations for This Lesson
- **Shader Editor canvas:** Always use Blender's dark grey background (#2b2b2b) for authentic appearance
- **Material realism:** All 3D renders must use physically accurate PBR rendering (Cycles preferred for final quality)
- **Lighting consistency:** Use same HDRI environment across comparison images (studio.exr recommended)
- **Node network clarity:** Ensure node connections (noodles) don't cross unnecessarily; use reroute nodes if needed
- **Viewport mode indicators:** When showing viewport modes, include the mode indicator spheres visible in corner
- **Parameter values visible:** When showing Principled BSDF, ensure parameter values are readable
- **Focus on education:** Prioritize clarity over artistic composition; images are teaching tools first

### Production Notes
- **Blender Scene Setup:**
  - Create template .blend file with standard camera, lighting (studio HDRI), and reference objects
  - Save camera positions as presets for consistent angles across images
  - Use collections to organize different material examples
  
- **Lighting Setup:**
  - Primary: studio.exr HDRI at default strength (1.0)
  - Viewport shading: Material Preview mode unless Rendered mode specifically needed
  - Avoid dramatic lighting; maintain even, educational presentation
  
- **Camera Angles:**
  - Default angle: 30-45° elevation, 45° rotation
  - For grids/comparisons: Overhead or straight-on views
  - For interface: Perpendicular to screen for clarity
  
- **Batch Processing:**
  - Create material library .blend with all example materials
  - Use Blender's Python API to automate screenshot captures if creating many similar images
  - Standardize render settings for consistency
  
- **Version Control:**
  - Save .blend source files for all 3D renders
  - Keep layered files (PSD/XCF) for annotated diagrams
  - Maintain source SVG files with unflattened layers
  - Document any custom assets or HDRI sources used
  
- **Template Reuse:**
  - Node connection demonstration template can be reused for future node lessons
  - Viewport mode comparison template applicable to multiple lessons
  - Material sphere/cube grid template for material showcases across course

---

## Quality Checklist

Before finalizing images, verify:

- [x] All 30 major lesson sections have appropriate image support identified
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes (#hex), style guidance, and context
- [x] SVG recommendations are justified with clear rationale for vector suitability
- [x] Placement suggestions reference actual HTML section IDs from lesson file
- [x] File naming follows consistent convention (lesson_10_##_descriptive_name.ext)
- [x] Priority ranking is logical and justified with clear rationale explaining why each tier
- [x] Style/accessibility notes are comprehensive and practical
- [x] Output document is well-organized with clear sections and easy navigation
- [x] Technical specifications cover all production needs (resolution, format, compression)
- [x] Special considerations address lesson-specific requirements (Shader Editor, PBR materials)

---

## Additional Recommendations

### Image Creation Workflow
**Phase 1: High Priority Images (1-2 weeks)**
- Focus on images #2, #4, #5, #7, #8, #9, #10, #11
- These are foundational and blocking for effective lesson delivery
- Test images with sample students for clarity

**Phase 2: Medium Priority Images (1 week)**
- Create images #3, #12, #13, #16, #18, #22, #24, #26, #30
- These enhance understanding and provide helpful references
- Prioritize based on student feedback from Phase 1

**Phase 3: Lower Priority Images (as time allows)**
- Remaining images add polish and supplementary value
- Can be added incrementally over time
- Consider crowd-sourcing some from community (student submissions)

### Alternative Approaches
- **Video clips:** Consider short 10-15 second loops showing:
  - Node connection animation
  - Roughness parameter slider being adjusted with live preview
  - Viewport mode switching demonstration
- **Interactive elements:** 
  - Embedded Blender viewport via Sketchfab for material exploration
  - Interactive parameter sliders using web technologies
- **Student submissions:** Encourage students to submit their material library renders for gallery

### Future Enhancements
- **Downloadable assets:**
  - Sample .blend files with pre-built materials
  - Material library starter template
  - Node group templates for common setups
- **Quiz images:** Create visual quizzes with material identification
- **Gallery section:** Showcase exceptional student material libraries
- **Video tutorials:** Supplement complex topics with short video demonstrations
- **Printable reference cards:** PDF versions of key charts (socket colors, IOR values, etc.)

---

## Revision History
- **Version 1.0** - Initial comprehensive analysis completed November 11, 2025
  - Identified 30 essential images for Lesson 10
  - Created detailed AI generation prompts with color specifications (#hex codes)
  - Recommended 5 images for SVG format with justification
  - Mapped image placement to specific HTML section IDs
  - Established three-tier priority system with detailed rationale
  - Provided production guidelines, technical specs, and style consistency notes
  - Included quality checklist and implementation recommendations
