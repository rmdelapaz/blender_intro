# Image Requirements for Lesson 42: Advanced Shader Techniques

## Task Summary
**Lesson:** lesson_42_advanced_shader_techniques.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 12, 2024
**Lesson Scope:** Advanced shader techniques including procedural texturing, texture coordinates, layered materials, advanced PBR, node groups, and four complete material projects

---

## Image List for Lesson 42

### **1. Professional vs Amateur Materials Comparison**
- **Purpose:** Show the visual difference between amateur and professional material work
- **Type:** Composite comparison (side-by-side)
- **Shows:** Two versions of the same object - one with basic flat materials, one with professional multi-layer materials

### **2. Procedural Texture Node Types Overview**
- **Purpose:** Visual reference for the main procedural texture nodes
- **Type:** Infographic/Reference chart
- **Shows:** Icons/thumbnails of Noise, Voronoi, Wave, Musgrave, and Magic textures with their characteristic patterns

### **3. Noise Texture Parameter Effects**
- **Purpose:** Demonstrate how Scale, Detail, and Roughness affect noise output
- **Type:** Composite grid (3x3)
- **Shows:** Nine variations showing different parameter combinations

### **4. Noise Texture Scale Comparison**
- **Purpose:** Illustrate the concept of multi-scale texturing
- **Type:** Composite (3-panel horizontal)
- **Shows:** Three spheres with noise at different scales (large 5, medium 25, fine 100)

### **5. Voronoi Distance Metrics Comparison**
- **Purpose:** Show how different distance metrics create different patterns
- **Type:** Composite grid (2x2)
- **Shows:** Euclidean, Manhattan, Chebychev, and Minkowski patterns

### **6. Voronoi Feature Outputs**
- **Purpose:** Demonstrate Distance, Color, and Position outputs
- **Type:** Composite (3-panel horizontal)
- **Shows:** Three spheres showing different Voronoi outputs applied to materials

### **7. Wave Texture Types**
- **Purpose:** Show the five wave texture types
- **Type:** Composite (5-panel horizontal strip)
- **Shows:** Bands, Rings, Saw, Sine, Triangle wave patterns

### **8. Wave Texture with Distortion**
- **Purpose:** Illustrate how distortion makes waves organic
- **Type:** Before/after comparison
- **Shows:** Wave rings with distortion 0.0 vs distortion 2.0

### **9. ColorRamp Control Techniques**
- **Purpose:** Visual guide to using ColorRamp for masking
- **Type:** Infographic with diagrams
- **Shows:** Different ColorRamp configurations and their effects (range control, contrast, inversion)

### **10. Texture Coordinate System Comparison**
- **Purpose:** Show how different coordinate systems affect texture mapping
- **Type:** Composite (4-panel grid)
- **Shows:** Same checker texture on Suzanne using Generated, UV, Object, and Normal coordinates

### **11. Mapping Node Controls Diagram**
- **Purpose:** Explain Location, Rotation, and Scale parameters
- **Type:** SVG diagram/infographic
- **Shows:** Visual representation of mapping transformations on a texture

### **12. Triplanar Mapping Concept**
- **Purpose:** Illustrate how triplanar mapping eliminates stretching
- **Type:** Diagram with arrows
- **Shows:** Object with three projection directions (X, Y, Z) and blend zones

### **13. Object vs Generated Coordinates**
- **Purpose:** Show the practical difference between coordinate systems
- **Type:** Side-by-side comparison
- **Shows:** Wood grain on plank using Object (correct alignment) vs Generated (wrong alignment)

### **14. Mix Shader vs Mix Color Diagram**
- **Purpose:** Clarify when to use each node type
- **Type:** SVG flowchart/decision tree
- **Shows:** Decision logic and node connection diagrams

### **15. Pointiness Attribute Visualization**
- **Purpose:** Show how Pointiness detects edges and crevices
- **Type:** Annotated 3D render
- **Shows:** Object with Pointiness visualization (white edges, black recesses, labeled)

### **16. Edge Wear Mask Creation Flowchart**
- **Purpose:** Show the node network for creating edge wear masks
- **Type:** Node diagram or simplified flowchart
- **Shows:** Geometry → Pointiness → ColorRamp → Multiply with Noise

### **17. Cavity Dirt Mask Creation**
- **Purpose:** Demonstrate AO-based dirt masking
- **Type:** Node diagram with result preview
- **Shows:** Shader to RGB → AO → ColorRamp → Result on object

### **18. Layered Material Structure Diagram**
- **Purpose:** Visualize the concept of material layers
- **Type:** SVG diagram with layers
- **Shows:** Stack of material layers (base → wear → rust → dirt) with masks

### **19. Mask Combination Techniques**
- **Purpose:** Show how to combine multiple masks logically
- **Type:** Infographic with visual examples
- **Shows:** Multiply (AND), Add (OR), Mix operations with visual results

### **20. Subsurface Scattering Effect**
- **Purpose:** Demonstrate SSS with backlight test
- **Type:** Before/after comparison
- **Shows:** Wax/marble sphere without SSS (opaque) vs with SSS (glowing from backlight)

### **21. SSS Radius Parameter Visualization**
- **Purpose:** Show how SSS radius affects light scattering
- **Type:** Composite (3-panel)
- **Shows:** Three values of radius (low, medium, high) on translucent material

### **22. IOR Values Reference Chart**
- **Purpose:** Quick reference for common IOR values
- **Type:** SVG infographic/table
- **Shows:** Material names with IOR values and small visual indicators

### **23. Anisotropic Reflections Example**
- **Purpose:** Show directional vs circular highlights
- **Type:** Side-by-side comparison
- **Shows:** Brushed metal cylinder with isotropic (0.0) vs anisotropic (0.8) reflections

### **24. Clearcoat Layer Visualization**
- **Purpose:** Illustrate the two-layer clearcoat system
- **Type:** Cross-section diagram
- **Shows:** Base layer + clearcoat layer with different roughness values

### **25. Car Paint Clearcoat Example**
- **Purpose:** Show real-world clearcoat application
- **Type:** Rendered example
- **Shows:** Car paint material with visible clearcoat depth

### **26. Sheen Parameter Effect**
- **Purpose:** Demonstrate fabric sheen for velvet/cloth
- **Type:** Before/after comparison
- **Shows:** Fabric material without sheen vs with sheen at grazing angle

### **27. Node Group Concept Diagram**
- **Purpose:** Explain the node group abstraction
- **Type:** SVG diagram
- **Shows:** Complex node network → collapsed into single node group

### **28. Node Group Interface Setup**
- **Purpose:** Show how to create clean node group interfaces
- **Type:** Screenshot with annotations
- **Shows:** Group Input/Output nodes with labeled sockets

### **29. Wood Material Node Network**
- **Purpose:** Complete reference for procedural wood shader
- **Type:** Node diagram (can be large, detailed)
- **Shows:** Full node setup from Project 1 with labels

### **30. Wood Growth Ring Pattern**
- **Purpose:** Show the characteristic wood ring appearance
- **Type:** Rendered example (close-up)
- **Shows:** Procedural wood cross-section showing rings, grain, color variation

### **31. Wood Material Stages**
- **Purpose:** Show the build-up of wood material layers
- **Type:** Progressive composite (4-5 panels)
- **Shows:** Base rings → + grain → + color variation → + bump → final

### **32. Different Wood Species Comparison**
- **Purpose:** Demonstrate material flexibility
- **Type:** Composite grid (2x2)
- **Shows:** Oak, Walnut, Pine, Mahogany rendered examples

### **33. Weathered Metal Layer Breakdown**
- **Purpose:** Visualize the four layers of weathered metal
- **Type:** Exploded view diagram
- **Shows:** Base metal, paint, rust, dirt layers separated vertically

### **34. Weathered Metal Mask Visualization**
- **Purpose:** Show all three masks used
- **Type:** Composite (3-panel)
- **Shows:** Edge wear mask, rust mask, cavity dirt mask as black/white images

### **35. Weathered Metal Final Result**
- **Purpose:** Showcase the completed weathered metal material
- **Type:** Beauty render
- **Shows:** Painted metal object with realistic wear, rust, and dirt

### **36. Weathered Metal Progressive Build**
- **Purpose:** Show material building step by step
- **Type:** Progressive composite (5-panel)
- **Shows:** Paint only → + edge wear → + rust → + dirt → final

### **37. Edge Wear Pointiness Setup**
- **Purpose:** Detailed view of edge wear mask creation
- **Type:** Split screen (node network + result)
- **Shows:** Pointiness node setup with resulting mask on object

### **38. Stone Color Scale Hierarchy**
- **Purpose:** Illustrate multi-scale color variation in stone
- **Type:** Composite (3-panel)
- **Shows:** Large patches → + medium crystals → + fine noise

### **39. Stone Surface Relief Layers**
- **Purpose:** Show how bump maps stack
- **Type:** Composite (3-panel with bump visualization)
- **Shows:** Large relief → + medium texture → + fine pits

### **40. Granite Material Example**
- **Purpose:** Showcase procedural granite with speckles
- **Type:** Rendered beauty shot
- **Shows:** Sphere or slab with visible crystal structure and color variation

### **41. Marble Veining Pattern**
- **Purpose:** Demonstrate wave-based marble veins
- **Type:** Rendered example (close-up)
- **Shows:** White marble with realistic gray veining

### **42. Different Stone Types Comparison**
- **Purpose:** Show material variations
- **Type:** Composite grid (2x3)
- **Shows:** Granite, Marble, Sandstone, Limestone, Slate, Basalt

### **43. Procedural Texture Scale Guide**
- **Purpose:** Reference chart for appropriate scale values
- **Type:** SVG infographic/table
- **Shows:** Scale ranges (0.5-2, 3-10, 15-50, 100+) with use cases and visual examples

### **44. Multi-Scale Layering Concept**
- **Purpose:** Visual explanation of the professional technique
- **Type:** Diagram with overlays
- **Shows:** Three transparent layers (large, medium, fine) combining into final result

### **45. Professional Material Workflow Flowchart**
- **Purpose:** Overview of complete material creation process
- **Type:** SVG flowchart
- **Shows:** Research → Base → Detail layers → Properties → Layering → Polish → Save

### **46. Principled BSDF Parameter Map**
- **Purpose:** Visual guide to all Principled BSDF inputs
- **Type:** SVG annotated diagram
- **Shows:** Principled BSDF node with labeled inputs and brief descriptions

### **47. Coordinate System Decision Tree**
- **Purpose:** Help choose the right coordinate system
- **Type:** SVG decision tree
- **Shows:** Questions leading to Generated/UV/Object/Normal choices

### **48. Material Library Organization**
- **Purpose:** Show how to organize node groups
- **Type:** Screenshot mockup or diagram
- **Shows:** Folder structure with categories (Masks, Patterns, Materials)

### **49. Common Material Mistakes**
- **Purpose:** Visual warning of pitfalls
- **Type:** Composite (wrong vs right examples)
- **Shows:** Common errors (too shiny, no variation, etc.) vs correct approach

### **50. Shader Editor Organization Example**
- **Purpose:** Show clean node network layout
- **Type:** Screenshot with frames and labels
- **Shows:** Well-organized shader with frames, clear flow, labeled sections

---

## AI Image Generation Prompts

### **Prompt 1: Professional vs Amateur Materials Comparison**
```
Create a side-by-side comparison image showing two rendered 3D objects (cylinders or spheres) with materials applied. Left side labeled "Amateur Material": flat, uniform gray color, single roughness value, no surface detail, obviously CG appearance. Right side labeled "Professional Material": multi-layered with subtle color variation, roughness variation, edge wear showing in corners, dirt in crevices, surface bump detail, photorealistic appearance. Dark gray background (#2b2b2b). Clean separation between panels with vertical divider. Labels in white text at top of each panel. Professional training material style. High contrast for clarity. 1920x1080 resolution.
```

### **Prompt 2: Procedural Texture Node Types Overview**
```
Create an educational reference chart showing five procedural texture types in Blender. Display in horizontal row: 1) Noise Texture (cloudy random pattern), 2) Voronoi Texture (cellular honeycomb pattern), 3) Wave Texture (concentric rings), 4) Musgrave Texture (rocky fractal pattern), 5) Magic Texture (psychedelic swirls). Each texture shown as 200x200 pixel square with pattern clearly visible. Label below each square in white text. Dark gray background (#2b2b2b). Clean, minimal design. Technical illustration style. Educational diagram for professional training.
```

### **Prompt 3: Noise Texture Parameter Effects**
```
Create a 3x3 grid showing nine variations of noise texture with different parameters. Top row: Scale 5, 15, 50 (Detail 2, Roughness 0.5). Middle row: Detail 0, 4, 10 (Scale 15, Roughness 0.5). Bottom row: Roughness 0.0, 0.5, 1.0 (Scale 15, Detail 4). Each cell is 250x250 pixels showing noise pattern applied to a flat surface. Labels on left margin show varying parameter. Labels on top show parameter values. Clean grid with thin white dividing lines. Dark background (#2b2b2b). Professional technical diagram. Educational material style.
```

### **Prompt 4: Noise Texture Scale Comparison**
```
Create a three-panel horizontal composite showing the multi-scale texturing concept. Three identical spheres with noise texture applied. Left sphere: Scale 5 (large blobs), labeled "Large Scale - Overall Variation". Center sphere: Scale 25 (medium detail), labeled "Medium Scale - Primary Texture". Right sphere: Scale 100 (fine detail), labeled "Fine Scale - Micro Detail". Each sphere rendered with simple three-point lighting. Dark gray background (#2b2b2b). Labels in white text below each sphere. Clean professional rendering. Educational diagram for shader training. 1920x640 resolution.
```

### **Prompt 5: Voronoi Distance Metrics Comparison**
```
Create a 2x2 grid comparing four Voronoi distance metrics. Top-left: Euclidean (round, natural cells), labeled "Euclidean - Round Cells". Top-right: Manhattan (square, grid-like), labeled "Manhattan - Square Grid". Bottom-left: Chebychev (square cells), labeled "Chebychev - Sharp Corners". Bottom-right: Minkowski with exponent 0.5 (variable blend), labeled "Minkowski - Custom Blend". Each cell 400x400 pixels showing pattern clearly. Dark background (#2b2b2b). White cell borders and labels. Professional technical illustration. Educational reference chart.
```

### **Prompt 6: Voronoi Feature Outputs**
```
Create a three-panel horizontal comparison of Voronoi outputs. Left panel: Distance output (gradient from cell centers), labeled "Distance - Gradient from Points". Center panel: Color output (random colors per cell), labeled "Color - Random Cell Colors". Right panel: Position output (uniform color per cell), labeled "Position - Cell Coordinates". Each panel shows a 3D sphere with the respective output applied as material. Dark gray background (#2b2b2b). Clean rendering with good lighting. White text labels below. Professional shader training diagram. 1920x640 resolution.
```

### **Prompt 7: Wave Texture Types**
```
Create a horizontal strip showing five wave texture types. Five panels equal width: 1) Bands (parallel straight lines), 2) Rings (concentric circles), 3) Saw (sawtooth pattern), 4) Sine (smooth waves), 5) Triangle (linear ramp waves). Each panel 300x400 pixels showing pattern on flat surface. Label at bottom of each panel in white text. Dark background (#2b2b2b). High contrast black and white patterns for clarity. Clean technical illustration. Educational reference for procedural textures. 1500x400 resolution.
```

### **Prompt 8: Wave Texture with Distortion**
```
Create a before/after comparison of wave rings texture. Left side labeled "Distortion 0.0 - Perfect Circles": shows perfect concentric rings, obviously computer-generated appearance. Right side labeled "Distortion 2.0 - Organic Pattern": shows irregular, natural-looking rings like tree growth rings. Vertical divider between panels. Both shown on flat surface or sphere. Dark gray background (#2b2b2b). White text labels at top. Clean rendering. Professional training material demonstrating importance of distortion. 1920x1080 resolution.
```

### **Prompt 9: ColorRamp Control Techniques**
```
Create an educational infographic showing ColorRamp usage. Three rows: 1) "Range Control" - showing ColorRamp with stops moved inward (0.4-0.6) and resulting limited value output, 2) "Increase Contrast" - stops close together creating sharp transition, 3) "Inversion" - black and white stops swapped. Each row shows: ColorRamp node diagram on left, arrow pointing to result example on right. Dark background (#2b2b2b). White text labels. Clean vector-style illustrations. Professional technical diagram. Educational shader training material. 1920x1080 resolution.
```

### **Prompt 10: Texture Coordinate System Comparison**
```
Create a 2x2 grid showing four coordinate systems applied to Suzanne monkey head. Top-left: Generated coordinates (checker fits bounding box, some stretching). Top-right: UV coordinates (even checker distribution, requires unwrapping). Bottom-left: Object coordinates (based on object space, different scale). Bottom-right: Normal coordinates (pattern based on surface direction, unusual appearance). Each panel 480x480 pixels. Checker texture with 5-unit scale for visibility. Labels below each: "Generated", "UV", "Object", "Normal". Dark gray background (#2b2b2b). Clean three-point lighting. Professional technical comparison. 1920x1920 resolution.
```

### **Prompt 11: Mapping Node Controls Diagram**
```
Create a clean SVG-style diagram explaining Mapping node transformations. Center: textured square showing brick pattern. Three arrows pointing outward: Top arrow labeled "Location - Moves Texture" with offset pattern example. Right arrow labeled "Rotation - Rotates Texture" with rotated pattern example. Bottom arrow labeled "Scale - Resizes Texture" with scaled pattern example. Clean vector graphics style. White lines and text on dark background (#2b2b2b). Professional educational diagram. Technical illustration for shader course. 1920x1080 resolution.
```

### **Prompt 12: Triplanar Mapping Concept**
```
Create a technical diagram showing triplanar mapping concept. Central cube with three colored arrows showing projection directions: Red arrow from X direction, Green arrow from Y direction, Blue arrow from Z direction. Semi-transparent projection planes showing texture projected from each axis. Color-coded blend zones where projections meet. Labels: "X Projection" (red), "Y Projection" (green), "Z Projection" (blue), "Blend Zones" (white). Dark background (#2b2b2b). Clean technical illustration. Professional training diagram. Isometric or three-quarter view. 1920x1080 resolution.
```

### **Prompt 13: Object vs Generated Coordinates**
```
Create a side-by-side comparison showing wood grain on wooden plank. Left panel labeled "Object Coordinates - Correct": wood grain runs along plank length (correct orientation). Right panel labeled "Generated Coordinates - Wrong": wood grain perpendicular to plank or stretched (incorrect). Both planks identical geometry, only coordinate system different. Dark gray background (#2b2b2b). White text labels at top. Clear visibility of grain direction. Professional rendering demonstrating coordinate system importance. 1920x1080 resolution.
```

### **Prompt 14: Mix Shader vs Mix Color Diagram**
```
Create a decision tree flowchart in SVG style. Top: "What Are You Mixing?" with two branches. Left branch: "Complete Materials (Different Metallic, Roughness, etc.)" arrow pointing to green box "Use Mix Shader". Right branch: "Just Colors or Values (Same Material Type)" arrow pointing to blue box "Use Mix Color". Below each box, small node connection diagram showing correct usage. White text and lines on dark background (#2b2b2b). Clean vector graphics. Professional technical diagram. Educational flowchart for shader training. 1920x1080 resolution.
```

### **Prompt 15: Pointiness Attribute Visualization**
```
Create an annotated render of a beveled cube showing Pointiness attribute. Object rendered with Pointiness as material: edges and corners bright white, flat surfaces medium gray, any indentations black. Three arrows with labels: White arrow pointing to bright edge labeled "High Pointiness - Convex Edges", Gray arrow to flat surface labeled "Zero Pointiness - Flat Areas", Black arrow to any crevice labeled "Negative Pointiness - Concave Areas". Dark gray background (#2b2b2b). Clean professional rendering. White annotation text and arrows. Educational diagram showing geometric attribute. 1920x1080 resolution.
```

### **Prompt 16: Edge Wear Mask Creation Flowchart**
```
Create a simplified node network flowchart showing edge wear mask creation. Flow from left to right: "Geometry Node" (Pointiness output) → "ColorRamp" (tight range 0.50-0.52) → "Multiply" (×) ← "Noise Texture" (random variation) → "Final Edge Wear Mask" (result preview showing white edges). Each node represented as rounded rectangle with key parameters labeled. Clean arrows showing data flow. Preview thumbnails showing output at each stage. Dark background (#2b2b2b). White text and connection lines. Professional technical diagram. 1920x1080 resolution.
```

### **Prompt 17: Cavity Dirt Mask Creation**
```
Create a node diagram with result preview showing cavity dirt mask. Flow: "Shader to RGB" → "Ambient Occlusion" → "ColorRamp" (adjust range) → "Multiply" (×) ← "Noise" → "Cavity Dirt Mask". Each node shown as box with name and key setting. Result preview on right showing object with white in crevices, black on surfaces. Dark background (#2b2b2b). Clean flow arrows. White text labels. Professional shader network diagram with practical result. Educational training material. 1920x1080 resolution.
```

### **Prompt 18: Layered Material Structure Diagram**
```
Create an exploded layer diagram showing weathered metal material structure. Four transparent layers stacked vertically with slight offset: Bottom layer "Base Metal" (gray, metallic), second layer "Paint" (blue, matte), third layer "Rust" (orange, rough), top layer "Dirt" (dark brown, very matte). Each layer labeled on right side. Between layers, show mask icons indicating where each layer appears (white silhouettes). Dark background (#2b2b2b). Clean isometric or three-quarter view. Professional technical illustration. Educational diagram explaining material layering concept. 1920x1080 resolution.
```

### **Prompt 19: Mask Combination Techniques**
```
Create a three-row infographic showing mask combination operations. Each row shows: Left - Mask A (example pattern), Center - Operation symbol, Center-right - Mask B (example pattern), Right - Result. Row 1: Multiply operation (× symbol), shows AND logic, only areas white in both become white in result. Row 2: Add operation (+ symbol), shows OR logic, areas white in either become white in result. Row 3: Mix operation (50% symbol), shows blend, gradual combination. All masks shown as black/white patterns. Dark background (#2b2b2b). White text labels. Clean technical illustration. 1920x1080 resolution.
```

### **Prompt 20: Subsurface Scattering Effect**
```
Create a before/after comparison with backlight test. Two spheres (wax or marble material): Left labeled "Without SSS - Opaque": sphere blocks all light, solid silhouette from behind. Right labeled "With SSS - Translucent Glow": sphere glows from within, edges luminous, light penetrates and scatters. Strong light source behind both spheres (visible rim). Dark background (#2b2b2b). White text labels. Dramatic lighting demonstrating subsurface scattering effect. Professional rendering. Educational comparison showing importance of SSS. 1920x1080 resolution.
```

### **Prompt 21: SSS Radius Parameter Visualization**
```
Create a three-panel comparison showing SSS radius effect. Three identical spheres backlit: Left "Radius 1.0 - Tight Scattering": thin bright rim, light doesn't penetrate far. Center "Radius 5.0 - Medium Scattering": noticeable glow, moderate light penetration. Right "Radius 15.0 - Wide Scattering": diffuse glow throughout, extensive light scattering. All spheres same material except radius parameter. Dark background (#2b2b2b). Strong backlight on each. White text labels below. Professional demonstration of SSS parameter. Educational training material. 1920x640 resolution.
```

### **Prompt 22: IOR Values Reference Chart**
```
Create a clean reference chart for Index of Refraction values. Vertical list format with three columns: Material Name | IOR Value | Visual Indicator. Rows include: Air (1.0), Water (1.33), Glass (1.5), Crystal (2.0), Diamond (2.42), and others. Visual indicator column shows small sphere with appropriate reflectivity level. Clean table format with white text on dark background (#2b2b2b). Professional typography. Educational reference chart. Technical illustration style. SVG-style clean vectors. 1920x1080 resolution suitable for reference.
```

### **Prompt 23: Anisotropic Reflections Example**
```
Create side-by-side comparison of anisotropic reflections on brushed metal cylinder. Left labeled "Isotropic 0.0 - Round Highlights": circular specular highlight from light source. Right labeled "Anisotropic 0.8 - Streaked Highlights": elongated vertical streak highlight following brush direction. Both cylinders identical except anisotropic parameter. Strong directional light from 45-degree angle. Dark background (#2b2b2b). White text labels. Professional rendering demonstrating anisotropic effect clearly. Educational material. 1920x1080 resolution.
```

### **Prompt 24: Clearcoat Layer Visualization**
```
Create a cross-section diagram showing clearcoat material structure. Side view cutaway showing two distinct layers: Bottom "Base Layer" (rough surface, visible texture), Top "Clearcoat Layer" (smooth glossy surface). Arrows and labels indicating: Base Roughness 0.6, Clearcoat Roughness 0.05. Light rays showing sharp reflection from clearcoat and diffuse reflection from base. Clean technical illustration. White lines and text on dark background (#2b2b2b). Professional educational diagram explaining two-layer system. 1920x1080 resolution.
```

### **Prompt 25: Car Paint Clearcoat Example**
```
Create a rendered example of car paint material with clearcoat. Curved automotive body panel in metallic blue. Visible dual-layer reflection: sharp bright highlight from clearcoat (glossy), softer colored reflection from metallic base layer beneath. Strong lighting to emphasize depth effect. Dark studio background (#2b2b2b). Professional automotive rendering quality. Shows characteristic car paint appearance with depth and richness. Educational example of clearcoat in practice. 1920x1080 resolution.
```

### **Prompt 26: Sheen Parameter Effect**
```
Create before/after comparison showing fabric sheen. Two identical velvet cloth materials draped: Left labeled "Sheen 0.0 - No Soft Reflection": matte appearance, no edge glow. Right labeled "Sheen 1.0 - Velvet Glow": soft luminous reflection at edges and folds, characteristic velvet appearance. Grazing angle lighting to emphasize sheen effect. Dark background (#2b2b2b). Professional fabric rendering. White text labels. Educational demonstration of sheen parameter for fabric materials. 1920x1080 resolution.
```

### **Prompt 27: Node Group Concept Diagram**
```
Create a before/after visualization of node group concept. Left side shows complex network of 15-20 shader nodes tangled with many connections (messy spaghetti). Large arrow pointing right labeled "Make Group (Ctrl+G)". Right side shows single clean green node group box labeled "Procedural Dirt Mask" with just 2-3 input/output sockets. Dark background (#2b2b2b). Clean illustration showing simplification. White text and connection lines. Professional diagram explaining node group abstraction benefit. 1920x1080 resolution.
```

### **Prompt 28: Node Group Interface Setup**
```
Create an annotated screenshot showing node group interior. Central area shows Group Input node (left) and Group Output node (right) connected to internal network. Arrows and labels pointing to: "Group Input - Define Parameters", "Internal Network - Hidden Complexity", "Group Output - Expose Results", "Socket Labels - Clear Names". Clean professional shader editor appearance. Dark background matching Blender interface (#2b2b2b). White annotation text and arrows. Educational diagram showing proper node group organization. 1920x1080 resolution.
```

### **Prompt 29: Wood Material Node Network**
```
Create a comprehensive node network diagram for procedural wood shader. Show complete setup with clearly labeled sections using frames: "Growth Rings" section (Wave texture with distortion), "Color Variation" section (multiple noise scales with ColorRamps), "Wood Grain" section (fine noise), "Roughness" section (variation), "Bump Detail" section (stacked bump nodes). Nodes arranged in logical left-to-right flow. Color-coded frames for different sections. Clean connection lines. Dark background (#2b2b2b). Professional technical diagram. Can be large/detailed. Educational reference. 1920x1080 or larger.
```

### **Prompt 30: Wood Growth Ring Pattern**
```
Create a close-up rendered view of procedural wood cross-section. Circular growth rings visible with natural irregularity (not perfect circles). Rings show alternating light tan and medium brown colors. Visible fine grain texture running perpendicular to rings. Subtle color variation across surface (some areas warmer, some cooler). Surface has slight bump detail. Realistic wood appearance with characteristic ring pattern. Dark neutral background. Professional rendering quality. Educational example showing successful procedural wood. 1920x1080 resolution.
```

### **Prompt 31: Wood Material Stages**
```
Create a progressive build sequence showing wood material development. Five panels horizontal: 1) "Base Rings" - just wave pattern rings, simple, 2) "+ Grain Detail" - fine streaks added, 3) "+ Color Variation" - browns and tans introduced, 4) "+ Bump Texture" - surface relief visible, 5) "Final Material" - complete photorealistic wood. Each panel shows same sphere with material at that stage. Dark background (#2b2b2b). Labels below each panel. Professional rendering progression. Educational diagram showing iterative material building. 1920x1080 resolution.
```

### **Prompt 32: Different Wood Species Comparison**
```
Create a 2x2 grid comparing four wood types. Top-left: Oak (light tan, pronounced grain, wide rings). Top-right: Walnut (dark brown, rich color, tight rings). Bottom-left: Pine (very light, yellowish, soft appearance). Bottom-right: Mahogany (red-brown, elegant, fine grain). Each panel 480x480 pixels showing wooden sphere or plank. Labels below: species name. All rendered with consistent lighting. Dark background (#2b2b2b). Professional wood rendering demonstrating material flexibility. 960x960 resolution.
```

### **Prompt 33: Weathered Metal Layer Breakdown**
```
Create an exploded view diagram showing weathered metal layers separated. Four layers stacked vertically with gaps: Bottom "Base Metal" (gray metallic sphere), second "Paint Layer" (blue matte sphere), third "Rust Layer" (orange rough sphere with irregular coverage), top "Dirt Layer" (dark brown sphere with crevice accumulation). Layers slightly offset to show all. Labels on right side. Dark background (#2b2b2b). Professional technical illustration. Clean rendering. Educational diagram explaining multi-layer material structure. 1920x1080 resolution.
```

### **Prompt 34: Weathered Metal Mask Visualization**
```
Create a three-panel view showing masks as grayscale images. Left panel: Edge Wear Mask (white on edges, black elsewhere, labeled). Center panel: Rust Mask (white patches on some edges, mostly black, labeled). Right panel: Cavity Dirt Mask (white in crevices, black on surfaces, labeled). Same object geometry in all three showing how masks target different areas. High contrast black and white for clarity. Dark background (#2b2b2b). White text labels. Professional technical visualization of masking strategy. 1920x640 resolution.
```

### **Prompt 35: Weathered Metal Final Result**
```
Create a beauty render showcasing complete weathered metal material. Mechanical object (pipe, machinery part, or cylinder) with painted blue-green surface. Visible features: edges worn showing gray metal underneath, orange rust patches on exposed metal areas, dark dirt accumulated in crevices and corners. Surface shows realistic aging and use. Strong directional lighting emphasizing surface detail. Dark studio background (#2b2b2b). Professional industrial rendering quality. Photorealistic appearance. Educational showcase of final weathered metal material. 1920x1080 resolution.
```

### **Prompt 36: Weathered Metal Progressive Build**
```
Create a five-stage progressive sequence horizontal. Five panels showing same object: 1) "Paint Only" - clean blue painted surface, 2) "+ Edge Wear" - metal exposed on corners, 3) "+ Rust" - orange patches on exposed metal, 4) "+ Dirt" - dark accumulation in crevices, 5) "Final Complete" - all layers combined realistically. Each panel labeled below. Dark background (#2b2b2b). Consistent lighting across all. Professional rendering sequence. Educational demonstration of layered material building process. 1920x1080 resolution.
```

### **Prompt 37: Edge Wear Pointiness Setup**
```
Create a split-screen view showing technique and result. Left half: simplified node network showing Geometry node → Pointiness output → ColorRamp (tight range) → multiply with Noise → result. Right half: 3D object with resulting mask applied (white edges, black surfaces). Arrows connecting nodes to result showing correlation. Dark background (#2b2b2b). Clean technical diagram. White text labels. Professional educational split-screen demonstration. Practical shader technique with visual result. 1920x1080 resolution.
```

### **Prompt 38: Stone Color Scale Hierarchy**
```
Create a three-panel sequence showing stone color build-up. Three spheres horizontal: Left "Large Patches" - broad color zones (scale 2-5), Center "+Medium Crystals" - granular structure added (scale 20), Right "+Fine Noise" - micro detail layer added (scale 80). Each sphere shows cumulative detail. Labels below each. Dark background (#2b2b2b). Professional rendering. Educational demonstration of multi-scale color layering concept. Stone material development. 1920x640 resolution.
```

### **Prompt 39: Stone Surface Relief Layers**
```
Create a three-panel visualization with exaggerated bump to show layers. Three views of stone surface: Left "Large Relief" - big lumps and depressions (Musgrave, scale 3-5), Center "+Medium Texture" - added surface roughness (Noise, scale 30), Right "+Fine Pits" - micro surface detail (Noise, scale 100). Side-lit to emphasize relief. Dark background (#2b2b2b). Labels below. Professional rendering showing bump map layering. Educational diagram for stone detail. 1920x640 resolution.
```

### **Prompt 40: Granite Material Example**
```
Create a beauty render of procedural granite material. Sphere or rectangular slab showing granite characteristics: gray base color with visible black speckles (biotite), white speckles (quartz), possible pink inclusions (feldspar). Crystalline structure visible. Natural color variation across surface. Medium roughness appearance (polished granite). Strong lighting to show surface detail. Dark background (#2b2b2b). Professional rendering quality. Photorealistic granite appearance. Educational showcase. 1920x1080 resolution.
```

### **Prompt 41: Marble Veining Pattern**
```
Create a close-up render of procedural white marble. White to cream base color with elegant gray veins flowing through surface naturally (not perfectly straight). Veins should be thin, organic, flowing patterns. Very smooth surface (low roughness). Slight translucency if possible (subtle glow). Polished appearance. Strong lighting showing smooth reflective surface. Dark background (#2b2b2b). Professional high-end marble rendering. Educational example of wave-based veining technique. 1920x1080 resolution.
```

### **Prompt 42: Different Stone Types Comparison**
```
Create a 2x3 grid comparing six stone types. Top row: Granite (speckled gray), Marble (white with veins), Sandstone (tan with layers). Bottom row: Limestone (light beige, uniform), Slate (dark gray, flat), Basalt (very dark, dense). Each panel 400x360 pixels showing sphere or slab with characteristic appearance. Labels below: stone type name. Consistent lighting. Dark background (#2b2b2b). Professional geological material comparison. Educational reference chart. 1200x720 resolution.
```

### **Prompt 43: Procedural Texture Scale Guide**
```
Create a reference infographic showing appropriate scale ranges. Four rows showing scale ranges and applications: Row 1: "0.5-2 Large Features" with example (big color patches), Row 2: "3-10 Medium Features" with example (primary texture), Row 3: "15-50 Fine Details" with example (surface detail), Row 4: "100+ Micro Detail" with example (imperceptible variation). Each row: scale range in large text, use case description, small visual example. Clean table format. Dark background (#2b2b2b). White text. Professional reference chart. 1920x1080 resolution.
```

### **Prompt 44: Multi-Scale Layering Concept**
```
Create a conceptual diagram showing three transparent layers combining. Three semi-transparent overlays stacked above base: Bottom "Large Scale" layer (big blobs, 50% opacity), middle "Medium Scale" layer (texture detail, 50% opacity), top "Fine Scale" layer (noise, 50% opacity). Arrow pointing down to "Final Combined Result" showing all three merged. Labels for each layer. Dark background (#2b2b2b). Clean professional illustration. Educational concept diagram. Shows additive layering principle. 1920x1080 resolution.
```

### **Prompt 45: Professional Material Workflow Flowchart**
```
Create a comprehensive flowchart showing complete material creation process. Boxes connected with arrows in logical flow: "Research & Reference" → "Base Material Setup" → "Add Large Scale Detail" → "Add Medium Scale" → "Add Fine Scale" → "Surface Properties" → decision diamond "Complex Material?" → if yes: "Add Layers & Masks" → "Polish & Test" → "Optimize & Document" → "Save to Library". Clean vector flowchart. White boxes and text on dark background (#2b2b2b). Professional workflow diagram. Educational process visualization. 1920x1080 resolution.
```

### **Prompt 46: Principled BSDF Parameter Map**
```
Create an annotated diagram of Principled BSDF node. Central node shape with all input sockets on left side labeled clearly: Base Color, Metallic, Roughness, IOR, Subsurface, Anisotropic, Sheen, Clearcoat, etc. Brief one-line description next to each input explaining what it controls. Clean vector-style illustration. White text and lines on dark background (#2b2b2b). Professional technical reference. Educational parameter guide. Clear typography. SVG-style clean design. 1920x1080 resolution.
```

### **Prompt 47: Coordinate System Decision Tree**
```
Create a decision tree for choosing coordinate systems. Top: "Choose Coordinate System". First decision: "Need Precise Placement?" Yes → "UV Coordinates". No → "Procedural OK?". Second decision: "Directional Pattern?" Yes → "Object Coordinates". No → "Angle-Based Effect?" Yes → "Normal Coordinates". No → "Generated Coordinates". Clean flowchart with white text and lines on dark background (#2b2b2b). Professional decision tree. Educational tool for material artists. 1920x1080 resolution.
```

### **Prompt 48: Material Library Organization**
```
Create a visual representation of organized material library structure. Folder tree diagram showing: "Material_Library.blend" as root, with three main folders: "Masks" (containing Edge Wear, Cavity Dirt, etc.), "Patterns" (containing Wood Grain, Triplanar, etc.), "Materials" (containing Metal, Wood, Stone subfolders). Clean hierarchical tree structure. Folder icons. White text on dark background (#2b2b2b). Professional file organization diagram. Educational guide for library management. 1920x1080 resolution.
```

### **Prompt 49: Common Material Mistakes**
```
Create a comparison showing wrong vs right approaches. Two rows, three columns (six total examples): Row 1 labeled "Common Mistakes" - shows too shiny (roughness 0.0), perfectly uniform (no variation), no surface detail. Row 2 labeled "Correct Approach" - shows realistic roughness (0.3), subtle variation, visible surface detail. Each cell labeled with issue/solution. Dark background (#2b2b2b). Professional comparison demonstrating good practices. Educational warning against common errors. 1920x1080 resolution.
```

### **Prompt 50: Shader Editor Organization Example**
```
Create a screenshot mockup of well-organized shader editor. Node network with clear organization: nodes grouped in labeled frames ("Color", "Roughness", "Bump", "Final Mix"), logical left-to-right flow, straight connection lines (no spaghetti), proper spacing between nodes, descriptive node labels. Dark shader editor background (#2b2b2b). Professional clean layout. Educational example of good node network organization. Demonstrating best practices for maintainability. 1920x1080 resolution.
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Mix Shader vs Mix Color Diagram** (#14) - Simple flowchart with text and arrows, perfect for vector format
2. **Mapping Node Controls Diagram** (#11) - Technical diagram with arrows and labels, scales perfectly as SVG
3. **Layered Material Structure Diagram** (#18) - Layer visualization with simple shapes and labels
4. **Node Group Concept Diagram** (#27) - Before/after simplification with boxes and arrows
5. **Triplanar Mapping Concept** (#12) - Technical illustration with arrows and color-coding
6. **ColorRamp Control Techniques** (#9) - Interface explanation with node representations
7. **Coordinate System Decision Tree** (#47) - Flowchart with decision points and paths
8. **Professional Material Workflow Flowchart** (#45) - Process flowchart with multiple steps
9. **Principled BSDF Parameter Map** (#46) - Node diagram with annotations
10. **Material Library Organization** (#48) - Folder tree structure diagram
11. **Multi-Scale Layering Concept** (#44) - Transparent layer visualization
12. **IOR Values Reference Chart** (#22) - Table/chart with text and small indicators
13. **Procedural Texture Scale Guide** (#43) - Reference table with ranges and examples
14. **Clearcoat Layer Visualization** (#24) - Cross-section technical diagram
15. **Edge Wear Mask Creation Flowchart** (#16) - Node flow with simplified representations

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, arrows, and simple illustrations rather than photorealistic renders. SVG format provides:
- Perfect scaling at any resolution
- Smaller file sizes than raster images
- Easy editing and updating
- Crisp text rendering at all sizes
- Ideal for technical diagrams, flowcharts, and infographics

---

## Image Placement Suggestions in HTML

### Introduction Section (id="introduction")
- **After paragraph discussing amateur vs professional:** Insert Image #1 (Professional vs Amateur Materials Comparison)
- **Within "Advanced Shader Toolkit" card:** Insert Image #2 (Procedural Texture Node Types Overview) as visual reference

### Procedural Textures Section (id="procedural-textures")
- **After "Understanding Procedural Texture Nodes" heading:** Insert Image #2 (Procedural Texture Node Types Overview)
- **Within Noise Texture parameters discussion:** Insert Image #3 (Noise Texture Parameter Effects) and Image #4 (Noise Texture Scale Comparison)
- **After Voronoi Texture explanation:** Insert Image #5 (Voronoi Distance Metrics) and Image #6 (Voronoi Feature Outputs)
- **Within Wave Texture section:** Insert Image #7 (Wave Texture Types) and Image #8 (Wave with Distortion)
- **After ColorRamp discussion:** Insert Image #9 (ColorRamp Control Techniques)
- **Within "Try It Now" exercise:** Reference Image #4 for expected scale differences

### Texture Coordinates Section (id="texture-coordinates")
- **After texture coordinate explanation:** Insert Image #10 (Coordinate System Comparison)
- **Within Mapping Node discussion:** Insert Image #11 (Mapping Node Controls Diagram)
- **After triplanar mapping explanation:** Insert Image #12 (Triplanar Mapping Concept)
- **Within Object vs Generated comparison:** Insert Image #13 (Object vs Generated example)
- **At section end:** Insert Image #47 (Coordinate System Decision Tree) as reference

### Layered Materials Section (id="layered-materials")
- **After layered materials introduction:** Insert Image #18 (Layered Material Structure Diagram)
- **Within Mix Shader vs Mix Color explanation:** Insert Image #14 (Mix Shader vs Mix Color Diagram)
- **After Pointiness discussion:** Insert Image #15 (Pointiness Visualization) and Image #37 (Edge Wear Setup)
- **Within mask creation section:** Insert Image #16 (Edge Wear Mask) and Image #17 (Cavity Dirt Mask)
- **After mask combination explanation:** Insert Image #19 (Mask Combination Techniques)
- **Within painted metal workshop:** Reference Images #33-37 throughout steps

### Advanced PBR Section (id="pbr-advanced")
- **At section start:** Insert Image #46 (Principled BSDF Parameter Map) as overview
- **Within Subsurface Scattering discussion:** Insert Image #20 (SSS Effect) and Image #21 (SSS Radius)
- **After IOR explanation:** Insert Image #22 (IOR Values Reference Chart)
- **Within Anisotropic section:** Insert Image #23 (Anisotropic Reflections Example)
- **After Clearcoat explanation:** Insert Image #24 (Clearcoat Visualization) and Image #25 (Car Paint Example)
- **Within Sheen discussion:** Insert Image #26 (Sheen Parameter Effect)

### Node Groups Section (id="node-groups")
- **After node group introduction:** Insert Image #27 (Node Group Concept Diagram)
- **Within interface setup discussion:** Insert Image #28 (Node Group Interface Setup)
- **At section end:** Insert Image #48 (Material Library Organization)

### Wood Project Section (id="project-wood")
- **Before workshop steps begin:** Insert Image #29 (Wood Material Node Network) as reference
- **After completing basic rings:** Reference Image #30 (Wood Growth Ring Pattern) as goal
- **Within progressive build:** Insert Image #31 (Wood Material Stages) showing development
- **At project end:** Insert Image #32 (Different Wood Species Comparison) showing variations

### Weathered Metal Section (id="project-metal")
- **At section start:** Insert Image #33 (Weathered Metal Layer Breakdown) as overview
- **Before mask creation phase:** Insert Image #34 (Weathered Metal Mask Visualization)
- **After completing material:** Insert Image #35 (Weathered Metal Final Result)
- **Within progressive build explanation:** Insert Image #36 (Weathered Metal Progressive Build)
- **During edge wear setup:** Insert Image #37 (Edge Wear Pointiness Setup) as reference

### Stone Project Section (id="project-stone")
- **Within color hierarchy discussion:** Insert Image #38 (Stone Color Scale Hierarchy)
- **During bump setup phase:** Insert Image #39 (Stone Surface Relief Layers)
- **After granite discussion:** Insert Image #40 (Granite Material Example)
- **After marble explanation:** Insert Image #41 (Marble Veining Pattern)
- **At variations section:** Insert Image #42 (Different Stone Types Comparison)

### Summary Section (id="summary")
- **Within multi-scale discussion:** Insert Image #44 (Multi-Scale Layering Concept)
- **After workflow explanation:** Insert Image #45 (Professional Material Workflow Flowchart)
- **Within scale guide discussion:** Insert Image #43 (Procedural Texture Scale Guide)
- **In mistakes section:** Insert Image #49 (Common Material Mistakes)
- **In organization best practices:** Insert Image #50 (Shader Editor Organization Example)

---

## File Naming Convention

```
lesson_42_01_professional_vs_amateur_comparison.png
lesson_42_02_procedural_texture_types_overview.png
lesson_42_03_noise_texture_parameter_effects.png
lesson_42_04_noise_texture_scale_comparison.png
lesson_42_05_voronoi_distance_metrics.png
lesson_42_06_voronoi_feature_outputs.png
lesson_42_07_wave_texture_types.png
lesson_42_08_wave_texture_distortion.png
lesson_42_09_colorramp_control_techniques.svg
lesson_42_10_coordinate_system_comparison.png
lesson_42_11_mapping_node_controls.svg
lesson_42_12_triplanar_mapping_concept.svg
lesson_42_13_object_vs_generated_coordinates.png
lesson_42_14_mix_shader_vs_mix_color.svg
lesson_42_15_pointiness_visualization.png
lesson_42_16_edge_wear_mask_flowchart.svg
lesson_42_17_cavity_dirt_mask_creation.png
lesson_42_18_layered_material_structure.svg
lesson_42_19_mask_combination_techniques.png
lesson_42_20_subsurface_scattering_effect.png
lesson_42_21_sss_radius_visualization.png
lesson_42_22_ior_values_reference.svg
lesson_42_23_anisotropic_reflections.png
lesson_42_24_clearcoat_layer_visualization.svg
lesson_42_25_car_paint_clearcoat_example.png
lesson_42_26_sheen_parameter_effect.png
lesson_42_27_node_group_concept.svg
lesson_42_28_node_group_interface.png
lesson_42_29_wood_material_node_network.png
lesson_42_30_wood_growth_ring_pattern.png
lesson_42_31_wood_material_stages.png
lesson_42_32_wood_species_comparison.png
lesson_42_33_weathered_metal_layer_breakdown.svg
lesson_42_34_weathered_metal_mask_visualization.png
lesson_42_35_weathered_metal_final_result.png
lesson_42_36_weathered_metal_progressive_build.png
lesson_42_37_edge_wear_pointiness_setup.png
lesson_42_38_stone_color_scale_hierarchy.png
lesson_42_39_stone_surface_relief_layers.png
lesson_42_40_granite_material_example.png
lesson_42_41_marble_veining_pattern.png
lesson_42_42_stone_types_comparison.png
lesson_42_43_procedural_texture_scale_guide.svg
lesson_42_44_multiscale_layering_concept.svg
lesson_42_45_professional_workflow_flowchart.svg
lesson_42_46_principled_bsdf_parameter_map.svg
lesson_42_47_coordinate_system_decision_tree.svg
lesson_42_48_material_library_organization.svg
lesson_42_49_common_material_mistakes.png
lesson_42_50_shader_editor_organization.png
```

**Format guidelines:**
- Use two-digit numbering (01-50) for proper sorting
- Descriptive names use underscores (no spaces)
- Extension based on type (.png for renders, .svg for diagrams)
- All lowercase for consistency

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #2 - Procedural Texture Node Types Overview** - Essential reference for core lesson concepts
2. **Image #10 - Coordinate System Comparison** - Critical for understanding texture mapping fundamentals
3. **Image #14 - Mix Shader vs Mix Color Diagram** - Clarifies common confusion point
4. **Image #15 - Pointiness Attribute Visualization** - Key to understanding edge wear masking
5. **Image #18 - Layered Material Structure Diagram** - Core concept for multi-layer materials
6. **Image #20 - Subsurface Scattering Effect** - Demonstrates critical advanced PBR feature
7. **Image #29 - Wood Material Node Network** - Complete reference for first major project
8. **Image #33 - Weathered Metal Layer Breakdown** - Essential structure for second major project
9. **Image #46 - Principled BSDF Parameter Map** - Comprehensive reference for all PBR parameters
10. **Image #45 - Professional Material Workflow Flowchart** - Overview of complete process

**Rationale:** These images directly support the primary learning objectives and provide essential visual references for complex concepts. Without them, students would struggle to understand core shader techniques and material structure.

### Medium Priority (Helpful Enhancement)
11. **Image #4 - Noise Texture Scale Comparison** - Reinforces multi-scale concept visually
12. **Image #7 - Wave Texture Types** - Useful reference for procedural patterns
13. **Image #11 - Mapping Node Controls Diagram** - Clarifies coordinate transformation
14. **Image #19 - Mask Combination Techniques** - Shows logical mask operations
15. **Image #22 - IOR Values Reference Chart** - Quick reference for common values
16. **Image #30 - Wood Growth Ring Pattern** - Target result for wood project
17. **Image #31 - Wood Material Stages** - Progressive build visualization
18. **Image #35 - Weathered Metal Final Result** - Target result for metal project
19. **Image #36 - Weathered Metal Progressive Build** - Step-by-step development
20. **Image #40 - Granite Material Example** - Stone project target result
21. **Image #43 - Procedural Texture Scale Guide** - Practical reference chart
22. **Image #47 - Coordinate System Decision Tree** - Decision-making tool
23. **Image #48 - Material Library Organization** - Professional workflow guide
24. **Image #49 - Common Material Mistakes** - Learning from errors

**Rationale:** These images enhance understanding and provide helpful references but aren't absolutely critical. Students can grasp concepts without them, though learning is improved with their inclusion.

### Lower Priority (Nice to Have)
25. **Image #3 - Noise Texture Parameter Effects** - Detailed parameter exploration
26. **Image #5 - Voronoi Distance Metrics Comparison** - Advanced pattern variations
27. **Image #6 - Voronoi Feature Outputs** - Technical output details
28. **Image #8 - Wave Texture with Distortion** - Specific technique demonstration
29. **Image #9 - ColorRamp Control Techniques** - Interface usage details
30. **Image #12 - Triplanar Mapping Concept** - Advanced technique visualization
31. **Image #13 - Object vs Generated Coordinates** - Specific comparison
32. **Image #16 - Edge Wear Mask Flowchart** - Detailed technique breakdown
33. **Image #17 - Cavity Dirt Mask Creation** - Specific masking technique
34. **Image #21 - SSS Radius Visualization** - Parameter effect details
35. **Image #23 - Anisotropic Reflections Example** - Specific PBR feature
36. **Image #24 - Clearcoat Layer Visualization** - Technical diagram
37. **Image #25 - Car Paint Clearcoat Example** - Real-world application
38. **Image #26 - Sheen Parameter Effect** - Specific parameter demonstration
39. **Image #27 - Node Group Concept Diagram** - Workflow concept
40. **Image #28 - Node Group Interface Setup** - Technical setup details
41. **Image #32 - Different Wood Species Comparison** - Variation examples
42. **Image #34 - Weathered Metal Mask Visualization** - Technical mask display
43. **Image #37 - Edge Wear Pointiness Setup** - Detailed technique
44. **Image #38 - Stone Color Scale Hierarchy** - Progressive layering
45. **Image #39 - Stone Surface Relief Layers** - Bump detail progression
46. **Image #41 - Marble Veining Pattern** - Specific material example
47. **Image #42 - Different Stone Types Comparison** - Variation showcase
48. **Image #44 - Multi-Scale Layering Concept** - Abstract concept diagram
49. **Image #50 - Shader Editor Organization Example** - Best practices demonstration
50. **Image #1 - Professional vs Amateur Materials Comparison** - Motivational comparison

**Rationale:** These images provide additional detail, examples, and variations that enrich the lesson but aren't necessary for core comprehension. They're excellent supplements for students who want deeper understanding or visual variety.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:** 
  - Background: Dark grey (#2b2b2b) for all technical images
  - Selection highlight: Bright orange (#ff8c00) where applicable
  - Text: White (#ffffff) for maximum contrast
  - Accent colors: Blue (#2196F3), Green (#4CAF50), Purple (#9C27B0) for categorization
- **Blender Version:** Use Blender 4.0+ interface for consistency
- **View Angles:** Default three-quarter view for 3D objects unless otherwise specified
- **Selection Highlighting:** Orange outline/highlight for selected elements
- **Typography:** 
  - Sans-serif fonts (Arial, Helvetica, or Roboto)
  - Minimum 14pt for labels
  - Bold for emphasis
- **Annotation Style:** 
  - White arrows with 2px stroke
  - Arrow heads clearly visible
  - Labels with slight background for readability
- **Wireframe Clarity:** When showing wireframes, use cyan or white edges with good visibility

### Accessibility Considerations
- **Color Blindness:** All important distinctions should work in grayscale; use labels and patterns in addition to color
- **Alt Text Required:** Each image should have descriptive alt text explaining what's shown (to be added during HTML integration)
- **High Contrast:** Maintain at least 4.5:1 contrast ratio between text and background
- **Text Size:** All text within images should be legible when image is displayed at intended size
- **Diagram Simplicity:** Avoid cluttered diagrams; use multiple images if needed to maintain clarity

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 for full-width images, 960x540 for half-width
- **Image Format:** 
  - PNG for renders, screenshots, and complex images (better quality, transparency support)
  - SVG for diagrams, flowcharts, and vector graphics (scalable, small file size)
  - JPG only if file size is critical and quality loss acceptable
- **File Size Target:** 
  - Maximum 500KB per PNG image (compress with tools like TinyPNG if needed)
  - SVG files typically under 50KB
  - Optimize all images before deployment
- **Compression:** Use lossless compression for PNGs; optimize SVG by removing unnecessary data
- **Responsive Sizing:** Images should scale gracefully from mobile (360px) to desktop (1920px+) displays

### Special Considerations for This Lesson
- **Node Network Clarity:** When showing shader nodes, ensure connections are clear with no crossing lines where possible
- **3D Render Quality:** Use Cycles with sufficient samples (256+ for final images) to avoid noise
- **Material Lighting:** Ensure all material examples have strong directional lighting to show surface detail
- **Progressive Sequences:** Maintain exact same camera angle and lighting across all panels in progression images
- **Comparison Images:** Keep object geometry, lighting, and camera identical between comparison panels
- **Color Accuracy:** Ensure rendered materials show correct color representation (check monitor calibration)

### Production Notes
- **Blender Scene Setup:** 
  - Use consistent HDRIs for material showcases (neutral outdoor HDRI recommended)
  - Save .blend files with descriptive names for each image
  - Include camera presets for common angles
- **Lighting Setup:** 
  - Three-point lighting template for object showcases
  - Strong key light at 45° for surface detail visibility
  - Rim light for edge definition
- **Camera Angles:** 
  - Default: 35° elevation, 45° azimuth for 3D objects
  - Maintain consistency across related images
- **Batch Processing:** 
  - Group similar images for efficient rendering
  - Use render layers if multiple outputs needed from same scene
- **Version Control:** 
  - Save source .blend files in version-controlled directory
  - Tag final approved versions
- **Template Reuse:** 
  - Create template scenes for common image types (sphere showcase, comparison layout, etc.)
  - Maintain material library in separate .blend file for consistency

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All major lesson sections have appropriate image support
- [ ] Each image has clear educational purpose defined
- [ ] AI prompts are detailed and specific with color codes (#2b2b2b background, #ffffff text)
- [ ] SVG recommendations are justified with clear rationale (15 diagrams identified)
- [ ] Placement suggestions reference actual HTML section IDs
- [ ] File naming follows consistent convention (lesson_42_XX_description.ext)
- [ ] Priority ranking is logical and justified with clear rationale
- [ ] Style/accessibility notes are comprehensive and practical
- [ ] Output is well-organized with clear sections and easy navigation
- [ ] Technical specifications cover all production needs
- [ ] Special considerations address lesson-specific requirements (shader node clarity, material lighting)

---

## Additional Recommendations

### Image Creation Workflow
**Phase 1 - High Priority Images (Week 1)**
- Create essential reference images first (#2, #10, #14, #15, #18, #20, #46)
- These provide maximum educational value
- Test integration into lesson HTML

**Phase 2 - Project Images (Week 2)**
- Complete wood project images (#29-32)
- Complete weathered metal images (#33-37)
- Complete stone project images (#38-42)

**Phase 3 - Medium Priority (Week 3)**
- Fill in helpful enhancement images
- Focus on procedural texture comparisons and technique demonstrations

**Phase 4 - Polish (Week 4)**
- Add lower priority supplementary images
- Create any additional variations requested
- Optimize all images for web delivery

### Alternative Approaches
- **Video Clips:** Consider short video loops for procedural texture parameter changes (Scale, Detail, Roughness)
- **Interactive Elements:** WebGL shader viewer could allow students to manipulate parameters in real-time
- **3D Models:** Provide downloadable .blend files for key projects (wood, metal, stone)
- **Comparison Sliders:** Before/after images could use interactive slider for comparison

### Future Enhancements
- **Downloadable Assets:** Provide starter .blend files with basic setups for each project
- **Practice Exercises:** Additional images showing "your turn" challenges with solution reveals
- **Image Galleries:** Expand to show more material variations and student work examples
- **Video Tutorials:** Supplement static images with video walkthroughs of complex node setups
- **Interactive Quizzes:** Use images as quiz content to test understanding

---

## Summary

**Total Images Identified:** 50
- **High Priority:** 10 images (essential for core understanding)
- **Medium Priority:** 14 images (helpful enhancements)
- **Lower Priority:** 26 images (nice to have supplements)

**SVG Diagrams:** 15 images recommended as vector graphics for scalability and clarity

**File Formats:**
- PNG: 35 images (renders, screenshots, complex visuals)
- SVG: 15 images (diagrams, flowcharts, technical illustrations)

**Primary Focus Areas:**
- Procedural texture fundamentals (10 images)
- Texture coordinate systems (5 images)
- Layered material techniques (8 images)
- Advanced PBR parameters (7 images)
- Wood project (4 images)
- Weathered metal project (6 images)
- Stone project (5 images)
- Workflow and organization (5 images)

**Production Estimate:**
- High priority: 20-30 hours
- All images: 60-80 hours
- Includes scene setup, rendering, post-processing, optimization

This comprehensive image requirements document provides everything needed to create a complete visual supplement for Lesson 42: Advanced Shader Techniques. Each image is purposefully designed to enhance student understanding of complex shader concepts, procedural techniques, and professional material workflows.
