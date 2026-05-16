# Image Requirements for Lesson 42: Advanced Shader Techniques - Part 1

## Task Summary
**Lesson:** lesson_42_advanced_shader_techniques.html
**Purpose:** Identify and document all images needed to augment the advanced shader techniques lesson
**Date:** November 12, 2025
**Lesson Scope:** Comprehensive 10-part lesson covering procedural texturing, texture coordinates, layered materials, advanced PBR, node groups, and four complete shader projects

---

## Image List for Lesson 42 (Images 1-25)

### **1. Principled BSDF Parameter Map**
- **Purpose:** Visual reference showing all Principled BSDF inputs and their purposes
- **Type:** Annotated screenshot/diagram
- **Shows:** Principled BSDF node with all parameters labeled and color-coded by category

### **2. Procedural Texture Node Family Overview**
- **Purpose:** Show the main procedural texture options available
- **Type:** Composite grid showing multiple texture outputs
- **Shows:** Noise, Voronoi, Wave, Musgrave, Magic textures with labels

### **3. Noise Texture Scale Comparison**
- **Purpose:** Demonstrate how Scale parameter affects pattern size
- **Type:** Composite comparison (3-4 panels)
- **Shows:** Same sphere with Noise texture at different scales (2, 10, 50, 200)

### **4. Noise Texture Detail Parameter Comparison**
- **Purpose:** Show effect of Detail (octaves) on complexity
- **Type:** Side-by-side comparison
- **Shows:** Noise with Detail 0, 3, 6, 15

### **5. Voronoi Distance Metrics Comparison**
- **Purpose:** Visualize different Voronoi pattern styles
- **Type:** Grid comparison (4 panels)
- **Shows:** Euclidean, Manhattan, Chebychev, Minkowski patterns

### **6. Voronoi Feature Outputs**
- **Purpose:** Show different Voronoi outputs and their uses
- **Type:** Composite (3 panels)
- **Shows:** Distance, Color, Position outputs on same geometry

### **7. Wave Texture Types**
- **Purpose:** Demonstrate different Wave patterns
- **Type:** Grid comparison (5 panels)
- **Shows:** Bands, Rings, Saw, Sine, Triangle wave types

### **8. ColorRamp Control Techniques**
- **Purpose:** Show how ColorRamp manipulates procedural texture output
- **Type:** Infographic/diagram
- **Shows:** Before/after examples of range control, contrast, and color mapping

### **9. Texture Coordinate Systems Comparison**
- **Purpose:** Visualize how different coordinates affect texture placement
- **Type:** Grid showing same checker texture with different coordinates
- **Shows:** Generated, UV, Object, Normal coordinates on Suzanne

### **10. Mapping Node Controls Diagram**
- **Purpose:** Explain Location, Rotation, Scale transforms
- **Type:** Annotated diagram
- **Shows:** Visual representation of how each parameter affects texture

### **11. Triplanar Mapping Concept**
- **Purpose:** Illustrate how triplanar projection works
- **Type:** Technical diagram
- **Shows:** Three projection planes (X, Y, Z) and blending based on normals

### **12. Object Coordinates for Wood Grain**
- **Purpose:** Show directional pattern control with Object coordinates
- **Type:** Comparison
- **Shows:** Wood grain correctly aligned vs. stretched with wrong coordinates

### **13. Normal Coordinates Angle-Based Effect**
- **Purpose:** Demonstrate angle-based material variation
- **Type:** Rendered example
- **Shows:** Snow accumulation on horizontal surfaces only (angle-based mixing)

### **14. Mix Shader vs Mix Color Diagram**
- **Purpose:** Clarify when to use each node type
- **Type:** Flow chart/infographic
- **Shows:** Decision tree and performance differences

### **15. Pointiness Attribute Visualization**
- **Purpose:** Show how Pointiness detects edges vs. crevices
- **Type:** Composite (3 panels)
- **Shows:** Mesh, Pointiness grayscale output, applied as edge wear mask

### **16. Edge Wear Mask Creation Process**
- **Purpose:** Step-by-step visual of mask building
- **Type:** Node editor screenshot sequence
- **Shows:** Geometry → Pointiness → ColorRamp → Final mask

### **17. Cavity Dirt Mask Setup**
- **Purpose:** Show AO-based masking for crevices
- **Type:** Node setup + result
- **Shows:** Shader to RGB + AO node setup and resulting dirt placement

### **18. Mask Combination Techniques**
- **Purpose:** Illustrate multiply, add, and mix operations on masks
- **Type:** Diagram with examples
- **Shows:** Two masks combined three different ways with results

### **19. Layered Material Structure Diagram**
- **Purpose:** Show the assembly of multi-layer materials
- **Type:** Flow chart
- **Shows:** Paint → Mix (edge wear) → Mix (rust) → Mix (dirt) → Output

### **20. Subsurface Scattering Comparison**
- **Purpose:** Demonstrate SSS effect on translucent materials
- **Type:** Before/after comparison
- **Shows:** Sphere with backlight: without SSS (solid) vs. with SSS (glowing)

### **21. SSS Radius Parameter Effect**
- **Purpose:** Show how Radius values affect scattering distance
- **Type:** Comparison (3-4 examples)
- **Shows:** Different radius values on wax material

### **22. IOR Reference Chart**
- **Purpose:** Quick reference for common material IOR values
- **Type:** Infographic table
- **Shows:** Air (1.0), Water (1.33), Glass (1.5), Diamond (2.42) with visual examples

### **23. Anisotropic Reflections Example**
- **Purpose:** Show directional highlights on brushed metal
- **Type:** Rendered comparison
- **Shows:** Cylinder without anisotropic vs. with anisotropic (0.7)

### **24. Sheen Parameter for Fabric**
- **Purpose:** Demonstrate soft fabric reflections
- **Type:** Before/after
- **Shows:** Cloth material without sheen vs. with sheen

### **25. Clearcoat Layer Explanation**
- **Purpose:** Visualize two-layer specular system
- **Type:** Diagram + rendered example
- **Shows:** Car paint with rough base + glossy clearcoat

---

## AI Image Generation Prompts (Prompts 1-25)

### **Prompt 1: Principled BSDF Parameter Map**
```
Create a technical diagram of Blender's Principled BSDF shader node showing all input parameters. 
The node should be displayed clearly with a dark gray background (#2b2b2b). 
Each input socket should be color-coded: yellow for color inputs, gray for value inputs, purple for vector inputs, and green for shader inputs.
Add clear labels with arrows pointing to each parameter group:
- Surface Properties section (Base Color, Metallic, Roughness)
- Advanced Features section (Subsurface, Anisotropic, Sheen, Clearcoat)
- Transparency section (Transmission, Alpha)
- Additional inputs (Normal, Emission)
Use a clean, technical illustration style appropriate for educational materials.
Include small icons or visual hints next to each parameter indicating its effect (e.g., sphere for Base Color, brush strokes for Anisotropic).
Ensure text is large enough to be readable (minimum 12pt font).
Style: Professional training material, technical diagram, clean layout.
Resolution: 1920x1200 landscape format.
Background: Dark gray (#2b2b2b) to match Blender UI.
```

### **Prompt 2: Procedural Texture Node Family Overview**
```
Create a grid showing five procedural texture types in Blender.
Layout: 2x3 grid with 5 filled cells (one empty), each cell showing a sphere with the texture applied.
Textures to show:
1. Noise Texture - organic random pattern, grayscale
2. Voronoi Texture - cellular/honeycomb pattern with sharp cells
3. Wave Texture (Rings) - concentric circle pattern
4. Musgrave Texture - fractal terrain-like pattern
5. Magic Texture - psychedelic swirling pattern
Each sphere should be identically lit from top-right with studio lighting.
Label each texture type clearly below its sphere.
Background: Neutral gray gradient (#404040 to #303030).
Style: Clean product showcase, educational comparison.
All spheres same size and position for easy comparison.
Add subtle shadow under each sphere for depth.
Resolution: 1600x1200.
Text: Clear sans-serif labels, white text with subtle shadow for readability.
```

### **Prompt 3: Noise Texture Scale Comparison**
```
Create a 4-panel horizontal comparison showing the effect of Noise Texture Scale parameter.
Each panel shows the same sphere with Noise texture applied.
Panel 1: Scale = 2 (large blobby features) - label "Scale: 2.0 - Large Features"
Panel 2: Scale = 10 (medium features) - label "Scale: 10.0 - Medium Detail"
Panel 3: Scale = 50 (fine detail) - label "Scale: 50.0 - Fine Texture"
Panel 4: Scale = 200 (very fine noise) - label "Scale: 200.0 - Micro Detail"
All spheres identically positioned and lit (studio lighting from upper right).
Background: Dark gray (#2b2b2b).
Labels: White text, positioned consistently below each sphere.
Add thin separator lines between panels.
Style: Technical comparison chart, educational material.
Resolution: 2400x600 (wide panoramic format for easy comparison).
Ensure smooth shading on spheres to show texture clearly.
```

### **Prompt 4: Noise Texture Detail Parameter Comparison**
```
Create a side-by-side comparison showing 4 examples of Noise Texture with different Detail values.
Horizontal layout, 4 equal panels.
All examples use Scale = 10 for consistency.
Panel 1: Detail = 0 - smooth blobby noise, label "Detail: 0 - Smooth"
Panel 2: Detail = 3 - moderate complexity, label "Detail: 3 - Balanced"
Panel 3: Detail = 6 - complex pattern, label "Detail: 6 - Complex"
Panel 4: Detail = 15 - extremely detailed, label "Detail: 15 - Maximum"
Each panel shows flat square plane with noise texture clearly visible.
Lighting: Even front lighting to show pattern clearly.
Background: Dark gray (#2b2b2b).
Labels: White sans-serif text below each panel.
Style: Educational comparison, technical documentation.
Resolution: 2000x500 (panoramic).
Note the progressive increase in fine detail from left to right.
```

### **Prompt 5: Voronoi Distance Metrics Comparison**
```
Create a 2x2 grid comparing four Voronoi Distance Metrics.
Each cell shows a plane with Voronoi texture applied using different metric.
Top-left: Euclidean - round natural cells, label "Euclidean - Circular Cells"
Top-right: Manhattan - square grid-like cells, label "Manhattan - Square Cells"
Bottom-left: Chebychev - diamond-shaped cells, label "Chebychev - Sharp Corners"
Bottom-right: Minkowski - adjustable cells, label "Minkowski - Variable Shape"
All examples use same Scale value (8) for fair comparison.
Use grayscale coloring with light cells (#cccccc) and dark cells (#333333).
Background: Medium gray (#555555).
Clear labels with arrows pointing to pattern characteristics.
Style: Technical comparison chart, educational diagram.
Resolution: 1200x1200 (square).
Add thin white grid lines separating the four cells.
Professional training material style.
```

### **Prompt 6: Voronoi Feature Outputs**
```
Create a 3-panel comparison showing Voronoi Texture different outputs.
Horizontal layout showing same geometry with three different Voronoi outputs.
Panel 1: Distance Output - grayscale gradient showing distance to nearest point, label "Distance Output - Gradients"
Panel 2: Color Output - random colors per cell creating mosaic, label "Color Output - Random Cell Colors"
Panel 3: Position Output - each cell has uniform color based on point position, label "Position Output - Point Coordinates"
Use Suzanne (monkey head) as the geometry for interesting surface variation.
Lighting: Studio three-point lighting.
Background: Dark gray (#2b2b2b).
Labels: White text below each panel.
Add subtle description text explaining use case for each output.
Style: Professional educational comparison.
Resolution: 2100x700 (3:1 panoramic).
Ensure high contrast and clarity in patterns.
```

### **Prompt 7: Wave Texture Types**
```
Create a horizontal comparison showing 5 Wave Texture types.
Each panel displays a plane with different wave type applied.
Panel 1: Bands - parallel straight lines, label "Bands - Straight Lines"
Panel 2: Rings - concentric circles, label "Rings - Circular Pattern"
Panel 3: Saw - sawtooth wave pattern, label "Saw - Sharp Ramps"
Panel 4: Sine - smooth wave curves, label "Sine - Smooth Curves"
Panel 5: Triangle - linear up and down, label "Triangle - Linear Ramps"
All use same Scale value (5) for consistency.
High contrast: white peaks, black valleys.
Background: Medium gray (#666666).
Each panel clearly labeled below pattern.
Add small amplitude/wavelength diagram overlay showing wave shape.
Style: Technical educational diagram, clear and precise.
Resolution: 2500x500 (panoramic).
Clean minimalist style appropriate for training materials.
```

### **Prompt 8: ColorRamp Control Techniques**
```
Create an educational infographic showing ColorRamp manipulation techniques.
Layout: 3 rows, each demonstrating a technique.
Row 1 - Range Control:
- Before: Noise texture full range
- ColorRamp diagram showing stops moved inward (0.4 to 0.6)
- After: Noise with limited value range
- Label: "Range Control - Clipping Values"
Row 2 - Contrast Adjustment:
- Before: Low contrast noise
- ColorRamp with stops close together
- After: High contrast black and white
- Label: "Contrast - Stop Proximity"
Row 3 - Color Mapping:
- Before: Grayscale noise
- ColorRamp with multiple colored stops
- After: Noise mapped to color gradient
- Label: "Color Mapping - Multiple Stops"
Background: Dark gray (#2b2b2b).
ColorRamp nodes shown with actual gradient bars.
Arrows showing flow from input to ColorRamp to output.
Style: Technical infographic, educational diagram.
Resolution: 1400x1200.
Clear labels, arrows, and annotations.
Professional training material aesthetic.
```

### **Prompt 9: Texture Coordinate Systems Comparison**
```
Create a comparison grid showing how different texture coordinates affect the same checker texture.
4-panel layout showing Blender's Suzanne monkey head with checker pattern.
Panel 1: Generated Coordinates - checker fits bounding box, label "Generated - Bounding Box"
Panel 2: UV Coordinates - checker follows UV unwrap, label "UV - Unwrapped"
Panel 3: Object Coordinates - checker based on object space, label "Object - Local Space"
Panel 4: Normal Coordinates - checker based on surface direction (weird!), label "Normal - Surface Angle"
Checker pattern: 8x8 squares, orange (#ff8c00) and dark gray (#2b2b2b).
Consistent lighting across all panels (studio lighting).
Background: Medium gray (#555555).
Labels clearly describe coordinate system behavior.
Add small technical note under each explaining use case.
Style: Technical comparison, educational reference.
Resolution: 1600x1600 (square grid).
Professional documentation style.
```

### **Prompt 10: Mapping Node Controls Diagram**
```
Create an annotated technical diagram showing the Mapping node's transform controls.
Center: A textured cube showing transformation effects.
Left side: Location controls with arrows showing X, Y, Z offset.
Top: Rotation controls with circular rotation indicators around each axis.
Right side: Scale controls with expansion/compression indicators.
Show before/after for each transform type:
- Location: Texture shifted in space
- Rotation: Texture rotated 45 degrees
- Scale: Texture enlarged 2x
Background: Dark gray (#2b2b2b).
Use color-coded arrows: Red for X, Green for Y, Blue for Z (standard 3D convention).
Labels: Clear white text with arrows pointing to relevant controls.
Include small Mapping node screenshot showing actual interface.
Style: Technical instructional diagram, engineering drawing style.
Resolution: 1600x1200.
Clean, professional training material aesthetic.
Add grid lines to help show transformations.
```

### **Prompt 11: Triplanar Mapping Concept**
```
Create a technical diagram explaining triplanar projection mapping.
Center: A complex organic mesh (like Suzanne or rock).
Show three projection planes:
- Red plane projecting from X direction (left side)
- Green plane projecting from Y direction (front)
- Blue plane projecting from Z direction (top)
Each projection shown with semi-transparent colored plane and projection rays.
Result sphere in corner showing blended result with no stretching.
Add annotations:
- "X-Facing surfaces use X projection"
- "Y-Facing surfaces use Y projection"  
- "Z-Facing surfaces use Z projection"
- "Blended based on surface normals"
Background: White or light gray (#f0f0f0) for technical clarity.
Style: Engineering/CAD diagram style, technical illustration.
Use dashed lines for projection rays.
Color-code clearly: Red, Green, Blue for XYZ.
Resolution: 1400x1000.
Include small diagram showing normal-based blending weights.
Professional technical documentation aesthetic.
```

### **Prompt 12: Object Coordinates for Wood Grain**
```
Create a comparison showing correct vs. incorrect wood grain alignment.
Side-by-side comparison, two wooden planks.
Left panel: CORRECT - Wood grain runs lengthwise along plank
- Wave Texture Rings with proper Object coordinate alignment
- Grain direction follows plank length
- Label: "✓ Correct - Object Coordinates Aligned"
- Show small coordinate axis overlay indicating orientation
Right panel: INCORRECT - Wood grain stretched/wrong direction
- Same texture with Generated coordinates causing distortion
- Grain perpendicular or stretched
- Label: "✗ Incorrect - Distorted Grain Direction"
Background: Neutral wood workshop background, blurred.
Lighting: Natural soft lighting from above.
Add arrows indicating grain direction on both.
Style: Product comparison, educational reference.
Resolution: 1600x800 (2:1 landscape).
Realistic wood rendering with clear grain visibility.
Professional visualization style.
```

### **Prompt 13: Normal Coordinates Angle-Based Effect**
```
Create a rendered scene demonstrating angle-based material mixing using Normal coordinates.
Scene: Rocky terrain/landscape with varied surface angles.
Material effect: White snow material appears only on upward-facing (horizontal) surfaces.
Vertical surfaces and overhangs show dark rock material with no snow.
Add color-coded overlay showing surface angles:
- Green tint: Horizontal surfaces (snow accumulates)
- Red tint: Vertical/downward surfaces (no snow)
Include small technical diagram in corner showing:
- Normal Z-component used as mask
- ColorRamp controlling threshold
- Mix Shader combining rock and snow
Background: Outdoor environment, overcast sky.
Lighting: Soft natural outdoor lighting.
Style: Realistic 3D render with technical annotation overlay.
Resolution: 1920x1080 (landscape).
Make the snow/rock contrast clear and visually striking.
Add label: "Angle-Based Material Mixing - Normal Coordinates"
Professional visualization with educational overlay.
```

### **Prompt 14: Mix Shader vs Mix Color Diagram**
```
Create a technical decision flowchart comparing Mix Shader and Mix Color nodes.
Layout: Split diagram with clear visual separation.
Left side - Mix Shader:
- Input: Two complete shader nodes (green shader sockets)
- Outputs: Blended shader result
- Icon showing two material spheres combining
- Use cases: "Combining different materials (metal + paint)"
- Performance note: "More expensive - calculates both shaders"
Right side - Mix Color:
- Input: Two color/value inputs (yellow/gray sockets)
- Outputs: Blended value
- Icon showing color gradient blending
- Use cases: "Blending colors or values within single material"
- Performance note: "Lightweight - simple value mixing"
Center: Decision tree flowchart:
"Need different material properties?" → Yes → Mix Shader
"Need different material properties?" → No → Mix Color
Background: Dark gray (#2b2b2b) for Blender UI consistency.
Color-coded sockets matching Blender's color system.
Style: Technical flowchart, educational infographic.
Resolution: 1600x1000.
Clear arrows and decision points.
Professional training material style.
```

### **Prompt 15: Pointiness Attribute Visualization**
```
Create a 3-panel visualization showing Pointiness attribute in action.
Panel 1: Base Mesh
- Subdivided beveled cube/cylinder with varied surface curvature
- Normal gray material (#666666)
- Clear edges and concave areas visible
- Label: "Base Geometry"
Panel 2: Pointiness Visualization
- Same mesh with Pointiness output displayed as grayscale
- White on convex edges (positive pointiness)
- Black in concave areas (negative pointiness)  
- Gray on flat surfaces (zero pointiness)
- Label: "Pointiness Output - Edge Detection"
- Add legend: "White = Edges | Gray = Flat | Black = Crevices"
Panel 3: Applied as Mask
- Mesh with edge wear material applied
- Bright metal showing on white edges
- Dark paint on flat and concave areas
- Label: "Applied as Edge Wear Mask"
Background: Dark gray (#2b2b2b).
Consistent lighting across panels (studio lighting).
Style: Technical demonstration, before/during/after sequence.
Resolution: 2100x700 (3:1 panoramic).
Clear progression showing concept to application.
```

### **Prompt 16: Edge Wear Mask Creation Process**
```
Create a step-by-step node editor screenshot sequence showing mask construction.
4-step horizontal layout showing node network building:
Step 1: Geometry Node
- Single Geometry node with Pointiness output highlighted
- Label: "Step 1 - Get Pointiness"
Step 2: Add ColorRamp
- Geometry → ColorRamp connection
- ColorRamp stops adjusted (0.50 to 0.52 for sharp edges)
- Label: "Step 2 - Isolate Edges"
Step 3: Add Noise Variation
- Noise Texture added, multiplied with ColorRamp output
- Label: "Step 3 - Add Randomness"
Step 4: Final Mask
- Complete mask network connected to Mix Shader
- Result preview showing mask applied to geometry
- Label: "Step 4 - Apply to Material"
Background: Blender node editor dark theme (#2b2b2b).
Nodes styled exactly like Blender's interface.
Orange highlights (#ff8c00) on key connections.
Add arrows showing flow progression between steps.
Style: Screenshot sequence, software tutorial style.
Resolution: 2400x600 (panoramic).
Authentic Blender UI appearance.
Clear step numbers and descriptions.
```

### **Prompt 17: Cavity Dirt Mask Setup**
```
Create a technical diagram showing AO-based cavity detection setup.
Left side: Node Network
- Shader to RGB node
- Ambient Occlusion node connected
- ColorRamp for controlling dirt amount
- Math nodes for fine-tuning
- Show actual Blender-style nodes with proper colors
Right side: Result Visualization  
- 3D rendered object (mechanical part with details)
- Dark dirt (#1a1510) visible in crevices and corners
- Clean surface on exposed areas
- Add grayscale mask preview in corner showing AO output
Background: Dark gray (#2b2b2b) for node area, neutral for render.
Arrows connecting node setup to visual result.
Annotations explaining key settings:
- "AO Distance controls detection range"
- "ColorRamp adjusts dirt coverage"
- "Works best in crevices and corners"
Style: Technical documentation, node graph + result.
Resolution: 1800x1000.
Split-screen layout for clarity.
Professional Blender tutorial aesthetic.
```

### **Prompt 18: Mask Combination Techniques**
```
Create an educational diagram showing three mask combination methods.
3x3 grid layout:
Top row - Multiply (AND Logic):
- Mask A (edges): White on edges
- Mask B (noise): Random pattern
- Result: White only where BOTH are white (selective edges)
- Operation shown: A × B
- Label: "Multiply - Both Must Be True"
Middle row - Add (OR Logic):
- Mask A (edges): White on edges  
- Mask B (cavities): White in crevices
- Result: White where EITHER is white (combined areas)
- Operation shown: A + B
- Label: "Add - Either Can Be True"
Bottom row - Mix (Blend):
- Mask A: Pattern 1
- Mask B: Pattern 2
- Result: Blended combination (Factor = 0.5)
- Operation shown: Mix(A, B, 0.5)
- Label: "Mix - Proportional Blend"
Each cell shows grayscale mask clearly.
Background: Dark gray (#2b2b2b).
Math operation symbols clearly displayed.
Style: Educational infographic, clear visual math.
Resolution: 1200x1200 (square).
Clean, minimalist presentation.
Professional training material style.
```

### **Prompt 19: Layered Material Structure Diagram**
```
Create a flow diagram showing multi-layer material assembly.
Vertical flow diagram with 5 levels:
Level 1 (Bottom): Base Paint Material
- Blue-green painted surface
- Properties shown: Non-metallic, Roughness 0.5
Level 2: + Edge Wear Layer (Mix Shader)
- Edges show exposed metal
- Mask: Pointiness-based edge detection
- Arrow showing Mix Shader node combining layers
Level 3: + Rust Layer (Mix Shader)
- Orange rust on some exposed metal areas
- Mask: Noise + edge detection
Level 4: + Dirt Layer (Mix Shader)
- Dark dirt in crevices
- Mask: AO + facing
Level 5 (Top): Final Result
- Complete weathered metal with all layers visible
Each level shows:
- Material preview sphere
- Mask visualization (grayscale)
- Mix Shader node icon
- Connecting arrows
Background: White or light gray for clarity.
Color-coded layers for easy identification.
Style: Technical flowchart, layered assembly diagram.
Resolution: 800x1600 (tall vertical).
Clear progression from simple to complex.
Professional instructional diagram style.
```

### **Prompt 20: Subsurface Scattering Comparison**
```
Create a dramatic before/after comparison showing SSS effect.
Split-screen composition:
Left side - WITHOUT Subsurface Scattering:
- Wax candle or similar object backlit
- Appears as solid silhouette
- Hard shadow edges
- No internal glow
- Label: "Without SSS - Opaque"
Right side - WITH Subsurface Scattering:
- Same object, same lighting
- Beautiful internal glow visible
- Soft edges where light penetrates
- Warm translucent appearance
- Label: "With SSS - Translucent"
Lighting: Strong backlight from behind object to emphasize effect.
Background: Dark studio setting to maximize glow visibility.
Add small parameter overlay showing:
- Subsurface Amount: 0.5
- Radius: (2.5, 2.5, 2.5)
Style: Dramatic product photography, educational comparison.
Resolution: 1920x1080 (landscape).
High contrast to show effect clearly.
Professional CGI demonstration render.
```

### **Prompt 21: SSS Radius Parameter Effect**
```
Create a comparison showing different Subsurface Radius values.
4-panel horizontal comparison, all showing same backlit wax object:
Panel 1: Radius (0.5, 0.5, 0.5) - Minimal scattering
- Very tight glow around edges only
- Label: "Radius: 0.5 - Tight Glow"
Panel 2: Radius (2.5, 2.5, 2.5) - Medium scattering
- Moderate glow penetration
- Label: "Radius: 2.5 - Balanced"
Panel 3: Radius (8.0, 8.0, 8.0) - Heavy scattering
- Deep light penetration, glowing interior
- Label: "Radius: 8.0 - Deep Penetration"
Panel 4: Radius (20.0, 20.0, 20.0) - Extreme scattering
- Almost completely translucent
- Label: "Radius: 20.0 - Maximum"
All have same backlight and camera angle.
Subsurface Amount = 1.0 for all (full effect).
Background: Black studio (#000000) to maximize glow visibility.
Style: Technical comparison, parameter study.
Resolution: 2400x600 (panoramic).
Clear progression of effect intensity.
```

### **Prompt 22: IOR Reference Chart**
```
Create an infographic table showing common material IOR values.
Table format with 4 columns:
Column 1: Material Name
Column 2: IOR Value (numeric)
Column 3: Visual Example (small rendered sphere)
Column 4: Notes/Use Case
Rows to include:
- Air: 1.0 (reference sphere) - "Vacuum/Air - Reference"
- Water: 1.33 (slight refraction) - "Water, Light Liquids"
- Plastic: 1.45 (moderate) - "Acrylic, Common Plastics"
- Glass: 1.5-1.52 (standard glass look) - "Standard Window Glass"
- Quartz: 1.54 (clearer) - "Clear Crystals"
- Sapphire: 1.76 (strong refraction) - "Precious Stones"
- Diamond: 2.42 (extreme sparkle) - "Brilliant Sparkle"
Each visual example shows transparent sphere with visible refraction/reflection.
Background: Clean white (#ffffff) for table readability.
Headers in dark gray (#333333).
Alternating row colors for readability.
Style: Technical reference chart, clean infographic.
Resolution: 1400x1000.
Professional documentation aesthetic.
Easy to scan and reference quickly.
```

### **Prompt 23: Anisotropic Reflections Example**
```
Create a side-by-side comparison showing anisotropic effect on brushed metal.
Two rendered metal cylinders with studio lighting:
Left cylinder - Isotropic (Normal):
- Round circular highlights
- Anisotropic = 0.0
- Standard metallic appearance
- Label: "Isotropic - Round Highlights"
Right cylinder - Anisotropic:
- Streaky highlights along brush direction
- Anisotropic = 0.7
- Visible directional reflection pattern
- Label: "Anisotropic 0.7 - Streaked Highlights"
Lighting: Strong key light from upper right to show highlights.
Background: Dark studio gray (#1a1a1a).
Both cylinders oriented vertically with horizontal brush direction.
Add small diagram showing:
- Brush direction arrow
- Highlight elongation direction
Style: Product photography, technical demonstration.
Resolution: 1600x900 (landscape).
Metallic: 1.0, Roughness: 0.3 for both.
Clear highlight streaking visible on anisotropic version.
Professional CGI product render quality.
```

### **Prompt 24: Sheen Parameter for Fabric**
```
Create a before/after comparison showing Sheen effect on fabric material.
Split screen, both showing velvet cloth draped over object:
Left side - WITHOUT Sheen:
- Flat matte appearance
- Looks like plastic or painted surface
- No soft fabric quality
- Roughness 1.0, Sheen 0.0
- Label: "Without Sheen - Plastic Appearance"
Right side - WITH Sheen:
- Soft velvety glow at edges
- Grazing angles show gentle highlight
- Looks touchable and fabric-like
- Roughness 1.0, Sheen 0.8
- Label: "With Sheen 0.8 - Fabric Softness"
Lighting: Soft directional light from side to show grazing angle effect.
Background: Neutral studio gray.
Color: Deep burgundy or navy blue fabric color.
Add parameter overlay showing Sheen and Sheen Tint settings.
Style: Textile product photography, material comparison.
Resolution: 1920x1080 (landscape).
Emphasis on soft fabric qualities.
Professional fabric visualization.
```

### **Prompt 25: Clearcoat Layer Explanation**
```
Create an educational diagram explaining clearcoat's two-layer system.
Layout: Cross-section view + rendered example
Left side: Technical Diagram
- Show two layers cross-section:
  - Bottom layer: Base material (matte, rough surface texture)
  - Top layer: Glossy clearcoat (smooth, reflective)
- Arrows showing:
  - Base layer: Roughness 0.6 (rough)
  - Clearcoat layer: Roughness 0.05 (glossy)
- Light rays showing how each layer reflects differently
- Label: "Two Independent Specular Layers"
Right side: Rendered Example
- Car paint panel showing:
  - Color depth from base layer
  - Sharp glossy reflection from clearcoat
  - Both visible simultaneously
- Label: "Car Paint - Perfect Clearcoat Use Case"
Background: White for diagram, dark studio for render.
Add annotations:
- "Base provides color and depth"
- "Clearcoat provides protection and gloss"
- "Different roughness creates realistic depth"
Style: Technical cutaway diagram + product render.
Resolution: 1800x900 (2:1 landscape).
Professional automotive visualization quality.
Clear labeling and annotations.
```

---

## Continuation Note

**This is Part 1 of 2.** 

Part 2 contains:
- Images 26-50 with AI prompts
- SVG diagram recommendations with detailed rationale
- Image placement suggestions mapped to HTML sections
- File naming conventions
- Complete production priority rankings with justifications
- Style consistency guidelines
- Accessibility considerations
- Technical specifications
- Special considerations for this lesson
- Production notes and workflow recommendations

Please refer to `lesson_42_image_requirements_part2.md` for complete documentation.

---

**Document Status:** Part 1 Complete
**Total Images Documented:** 25 of 50
**Next Steps:** Review Part 2 for remaining content and implementation guidelines
