# Image Requirements for Lesson 41: Procedural Modeling with Nodes

## Task Summary
**Lesson:** lesson_41_procedural_modeling_with_nodes.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 12, 2025

---

## Image List for Lesson 41

### **1. Procedural vs Traditional Modeling Comparison**
- **Purpose:** Visually demonstrate the difference between manual modeling and procedural generation
- **Type:** Composite/Infographic
- **Shows:** Side-by-side comparison showing traditional workflow (manual placement) vs procedural workflow (parameter adjustment)

### **2. Field Operations Visualization**
- **Purpose:** Illustrate the concept of fields as per-element data
- **Type:** Diagram/Composite
- **Shows:** Grid of points with color/height variation showing how field values vary across geometry

### **3. Single Value vs Field Input Comparison**
- **Purpose:** Demonstrate the fundamental distinction between uniform and per-element data
- **Type:** Composite diagram
- **Shows:** Two cubes - one with uniform scale, one with field-based varied scale

### **4. Position Field Visualization**
- **Purpose:** Show how position field provides X, Y, Z data per point
- **Type:** Annotated 3D diagram
- **Shows:** Point cloud with position vectors, color-coded by axis

### **5. Normal Field on Surface**
- **Purpose:** Illustrate surface normals as a field
- **Type:** 3D visualization
- **Shows:** Mesh surface with normal vectors displayed, color-coded by direction

### **6. Height-Based Selection Example**
- **Purpose:** Show field-based selection in action
- **Type:** Composite screenshot
- **Shows:** Node setup + viewport showing points filtered by Z position

### **7. Slope-Based Selection Visualization**
- **Purpose:** Demonstrate using Normal.Z for slope detection
- **Type:** Composite
- **Shows:** Terrain with color-coded slopes (flat=green, steep=red)

### **8. Boolean Logic Combinations (AND/OR/NOT)**
- **Purpose:** Illustrate combining multiple selection criteria
- **Type:** Diagram/Infographic
- **Shows:** Venn diagram style visualization of boolean operations on selections

### **9. Noise vs Random Comparison**
- **Purpose:** Show the critical difference between smooth noise and discrete randomness
- **Type:** Side-by-side composite
- **Shows:** Two height maps - one using noise (smooth), one using random (chaotic)

### **10. Noise Texture Types Overview**
- **Purpose:** Compare different noise patterns available
- **Type:** Reference grid
- **Shows:** 6 panels showing Perlin, Voronoi F1, Voronoi Distance to Edge, Wave, White Noise, Musgrave

### **11. Noise Scale Parameter Effect**
- **Purpose:** Demonstrate how scale affects feature size
- **Type:** Composite comparison
- **Shows:** Same terrain with scale values: 2.0 (large features), 10.0 (medium), 50.0 (fine detail)

### **12. Noise Detail/Octaves Visualization**
- **Purpose:** Show how detail layers add complexity
- **Type:** Progressive comparison
- **Shows:** Terrain with Detail 1, 3, 5, 8 - increasing complexity

### **13. Multi-Layer Noise Breakdown**
- **Purpose:** Explain the concept of layering noise at different scales
- **Type:** Composite infographic
- **Shows:** Base layer + detail layer + fine layer = final result (additive visualization)

### **14. Distribution Methods Overview**
- **Purpose:** Compare point-based, surface-based, and volume-based distribution
- **Type:** Three-panel diagram
- **Shows:** Visual representation of each distribution method

### **15. Distribute Points on Faces Interface**
- **Purpose:** Show the key node parameters
- **Type:** Annotated screenshot
- **Shows:** Distribute Points node with callouts for Density, Seed, Distribution Method

### **16. Poisson Disk vs Random Distribution**
- **Purpose:** Compare distribution patterns
- **Type:** Side-by-side viewport
- **Shows:** Same surface with Poisson (even spacing) vs Random (clustering)

### **17. Density Field Example**
- **Purpose:** Demonstrate variable density using fields
- **Type:** Composite
- **Shows:** Surface with gradient density (dense at bottom, sparse at top) + node setup

### **18. Noise-Based Density Masking**
- **Purpose:** Show natural clustering patterns
- **Type:** Viewport visualization
- **Shows:** Points distributed with noise-controlled density creating patches

### **19. Instance Alignment to Surface Normals**
- **Purpose:** Show proper orientation of instances on surfaces
- **Type:** Before/after comparison
- **Shows:** Instances with default rotation vs aligned to surface normals

### **20. Scale Variation Methods**
- **Purpose:** Demonstrate natural size distribution
- **Type:** Composite
- **Shows:** Uniform instances vs random scale vs position-correlated scale

### **21. Geometry Proximity Node Diagram**
- **Purpose:** Explain proximity calculations visually
- **Type:** Annotated diagram
- **Shows:** Source points, target surface, distance lines, nearest point indicators

### **22. Distance Field Visualization**
- **Purpose:** Show distance as a field value
- **Type:** Color-coded visualization
- **Shows:** Points color-coded by distance to target object (near=blue, far=red)

### **23. Raycast Operation Diagram**
- **Purpose:** Illustrate line-of-sight detection
- **Type:** Technical diagram
- **Shows:** Rays cast from points, some hitting obstacles, some clear

### **24. Proximity Falloff Example**
- **Purpose:** Show influence decreasing with distance
- **Type:** Composite visualization
- **Shows:** Effect strength gradient based on proximity to target

### **25. Terrain Project - Final Result**
- **Purpose:** Showcase the completed terrain generator
- **Type:** Rendered beauty shot
- **Shows:** High-quality render of procedural terrain with material zones

### **26. Terrain Project - Node Tree Overview**
- **Purpose:** Provide reference for the complete system
- **Type:** Full node tree screenshot
- **Shows:** Complete terrain generator node setup with labeled sections

### **27. Terrain Project - Material Zones**
- **Purpose:** Show automatic material distribution
- **Type:** Viewport with material preview
- **Shows:** Terrain with grass (valleys), rock (slopes), snow (peaks) clearly visible

### **28. Terrain Project - Multi-Layer Noise Setup**
- **Purpose:** Detail the noise layering technique
- **Type:** Node setup detail
- **Shows:** Three noise nodes at different scales being combined

### **29. Ivy Project - Final Result**
- **Purpose:** Showcase the completed ivy growth system
- **Type:** Rendered shot
- **Shows:** Ivy growing naturally on wall surface

### **30. Ivy Project - Proximity Filtering**
- **Purpose:** Show how proximity limits growth to near-surface
- **Type:** Technical visualization
- **Shows:** Points cloud before and after proximity filtering

### **31. Ivy Project - Surface Alignment**
- **Purpose:** Demonstrate leaf orientation to surface
- **Type:** Detail shot
- **Shows:** Ivy leaves oriented perpendicular to wall, following contours

### **32. Ivy Project - Node Tree Overview**
- **Purpose:** Complete system reference
- **Type:** Full node tree screenshot
- **Shows:** Complete ivy system with proximity, alignment, and instancing sections

### **33. Ivy Project - Density Variation**
- **Purpose:** Show noise-based clustering
- **Type:** Viewport comparison
- **Shows:** Uniform vs patchy distribution using noise

### **34. Building Project - Final Result**
- **Purpose:** Showcase the parametric building generator
- **Type:** Rendered architectural visualization
- **Shows:** Complete building with windows, door, roof

### **35. Building Project - Window Grid Generation**
- **Purpose:** Explain automatic window placement
- **Type:** Technical diagram
- **Shows:** Grid points on building face, windows instanced at points

### **36. Building Project - Boolean Operations**
- **Purpose:** Show window cutouts in action
- **Type:** Before/after comparison
- **Shows:** Building solid vs with window/door booleans subtracted

### **37. Building Project - Roof Type Variations**
- **Purpose:** Demonstrate different roof options
- **Type:** Three-panel comparison
- **Shows:** Same building with flat, peaked, and gabled roof

### **38. Building Project - Parameter Interface**
- **Purpose:** Show the exposed parameter controls
- **Type:** Annotated screenshot
- **Shows:** Modifier panel with organized parameters (dimensions, windows, roof)

### **39. Building Project - Floor Count Demonstration**
- **Purpose:** Show parametric height control
- **Type:** Progression series
- **Shows:** Same building at 1, 3, 5, and 10 floors

### **40. Building Project - Node Tree Overview**
- **Purpose:** Complete system reference
- **Type:** Full node tree screenshot
- **Shows:** Complete building generator with all sections labeled

### **41. LOD System Comparison**
- **Purpose:** Demonstrate viewport vs render quality
- **Type:** Side-by-side comparison
- **Shows:** Same scene with low detail (fast) vs high detail (quality)

### **42. Performance Bottleneck Identification**
- **Purpose:** Show how to find slow operations
- **Type:** Annotated screenshot
- **Shows:** Node tree with problem areas highlighted, element counts shown

### **43. Instance vs Realized Geometry**
- **Purpose:** Illustrate memory efficiency of instances
- **Type:** Technical diagram/infographic
- **Shows:** Memory usage comparison: 1000 instances vs 1000 realized meshes

### **44. Progressive Filtering Workflow**
- **Purpose:** Show two-pass optimization technique
- **Type:** Flow diagram
- **Shows:** Broad filter (cheap) → Narrow filter (expensive) process

### **45. Node Tree Organization Best Practices**
- **Purpose:** Show professional node tree layout
- **Type:** Annotated screenshot
- **Shows:** Well-organized tree with frames, labels, clean connections

### **46. Parameter Design Guidelines**
- **Purpose:** Demonstrate good parameter interface
- **Type:** Comparison screenshot
- **Shows:** Bad parameters (unclear names, no ranges) vs good parameters (organized, labeled, ranges)

### **47. Field Operations Quick Reference**
- **Purpose:** Handy reference chart for common field operations
- **Type:** SVG infographic
- **Shows:** Common field patterns with node mini-diagrams

### **48. Noise Recipes Reference Chart**
- **Purpose:** Quick reference for common noise setups
- **Type:** SVG infographic
- **Shows:** Preset configurations for hills, mountains, bumps, cracks

### **49. Distribution Patterns Gallery**
- **Purpose:** Visual reference for common distribution types
- **Type:** Grid of examples
- **Shows:** Rings, gradients, exclusion zones, multi-species distributions

### **50. Optimization Checklist Infographic**
- **Purpose:** Quick visual checklist for performance
- **Type:** SVG checklist design
- **Shows:** Pre-delivery optimization steps with checkboxes

---

## AI Image Generation Prompts

### **Prompt 1: Procedural vs Traditional Modeling Comparison**
```
Create an educational infographic showing two workflows side by side. LEFT SIDE: Traditional modeling workflow - show stick figure manually placing tree objects one by one on a hillside terrain, with text "8+ hours tedious work" and arrows showing repetitive actions. Include small clock icon showing elapsed time. RIGHT SIDE: Procedural workflow - show a clean node graph interface with slider controls, one adjustment creating instant forest coverage on terrain, with text "2 hour setup, instant results, infinite variations" and magic sparkle effects. Color scheme: Left side muted grays and blues (tedious), right side vibrant purples and greens (#667eea, #4CAF50) showing efficiency. Style: Clean, professional training material with isometric view. Background: White with subtle grid. Include title "Traditional vs Procedural Modeling" in bold. Size: 1920x1080. Ensure clear visual flow from left (slow/manual) to right (fast/automated).
```

### **Prompt 2: Field Operations Visualization**
```
Create a technical diagram showing a grid of points (10x10) where each point has different height and color values. Points should be 3D cubes or spheres positioned at different Z heights forming a wave pattern. Color each point on a gradient from blue (low) through green (mid) to red (high), matching its height. Add semi-transparent vertical lines from ground plane to each point showing height differences. Style: Clean technical illustration on dark background (#2b2b2b). Include axis indicators (X, Y, Z) in bottom-left. Add callout labels: "Each point has unique field value" pointing to varied points, "Field = Per-element data" as title. Use professional data visualization aesthetic. Include subtle grid on ground plane. Size: 1920x1080. Render isometric view at 30-degree angle for depth perception.
```

### **Prompt 3: Single Value vs Field Input Comparison**
```
Create a split-screen educational diagram. LEFT PANEL: Show a cube mesh with uniform scale transformation, all vertices same size, labeled "Single Value Input: Scale = 2.0" with gray socket icon. Visual: Cube edges all equal length, uniform appearance. Add text: "ALL elements affected equally". RIGHT PANEL: Show a cube mesh with field-based scale where top vertices are larger than bottom, creating tapered effect, labeled "Field Input: Position.Z drives scale" with purple socket icon. Visual: Gradient scaling creating interesting deformation. Add text: "EACH element has different value". Style: Clean technical diagram with dark background (#2b2b2b). Use orange highlights (#ff8c00) for selected elements. Include socket type indicators (gray vs purple). Size: 1920x1080 horizontal split. Professional training material aesthetic.
```

### **Prompt 4: Position Field Visualization**
```
Create a 3D technical visualization showing 20-30 points distributed in space. Each point should display its position vector as an arrow from origin (0,0,0) extending to the point location. Color-code vectors by dominant axis: Red for X-dominant, Green for Y-dominant, Blue for Z-dominant. Show XYZ axis indicators prominently at origin with labels. Add coordinate text labels on 5-6 key points showing (X, Y, Z) values. Style: Technical scientific visualization with dark background (#2b2b2b). Make vectors semi-transparent where they overlap. Include legend box showing color meanings. Add title "Position Field: Every Point Has Unique Coordinates" in white text. Size: 1920x1080. View angle: Perspective view showing all three dimensions clearly.
```

### **Prompt 5: Normal Field on Surface**
```
Create a technical 3D visualization of a curved mesh surface (like a rolling hill or wave) with surface normal vectors displayed perpendicular to each face. Show approximately 50 normal vectors as cyan arrows protruding from surface. Color-code normals by their Z component: White/cyan for upward-facing (Normal.Z near 1.0), orange for side-facing (Normal.Z near 0.5), red for downward-facing (Normal.Z near 0). Include a color gradient scale on the side showing Normal.Z values from 0.0 to 1.0. Style: Professional technical visualization with dark gray background (#2b2b2b). Add title "Normal Field: Surface Direction at Each Point". Include subtle grid on ground plane. Show coordinate axes. Size: 1920x1080. Lighting: Rim lighting to show surface curvature.
```

### **Prompt 6: Height-Based Selection Example**
```
Create a composite image with two sections. TOP SECTION (40% of height): Show Blender Geometry Nodes interface with node setup for height-based selection. Display: Position node → Separate XYZ → Compare node (Greater Than 5.0) → Delete Geometry. Nodes should be clearly visible with orange highlights on active connections. Dark theme interface (#2b2b2b background). BOTTOM SECTION (60% of height): Show 3D viewport with grid of points where points above Z=5 are visible (bright green), points below are deleted/missing, creating clear horizontal division. Add Z-axis indicator and height measurement showing "Z = 5.0" cutoff line. Style: Professional training screenshot composite. Size: 1920x1080. Include subtle arrows connecting node setup to viewport result.
```

### **Prompt 7: Slope-Based Selection Visualization**
```
Create a 3D terrain visualization showing a mountainous landscape color-coded by slope angle. Color scheme: Bright green for flat surfaces (Normal.Z > 0.8), Yellow for moderate slopes (0.5-0.8), Orange for steep slopes (0.3-0.5), Red for cliffs (< 0.3). Make colors vibrant and clearly distinguishable. Show terrain in isometric view with good lighting to show surface detail. Add legend sidebar on right showing color-to-slope mapping with text labels and Normal.Z value ranges. Include title "Slope Detection Using Normal.Z". Dark background (#2b2b2b). Add subtle contour lines on terrain surface. Show coordinate axes. Size: 1920x1080. Style: Technical visualization meeting professional GIS standards.
```

### **Prompt 8: Boolean Logic Combinations (AND/OR/NOT)**
```
Create an educational infographic showing boolean operations on selections using Venn diagram style. Display three scenarios: AND Operation - two overlapping circles (blue and green) with only intersection highlighted in purple, labeled "Both conditions TRUE". OR Operation - two overlapping circles with entire combined area highlighted, labeled "Either condition TRUE". NOT Operation - single circle with outside area highlighted, labeled "Invert selection". Below diagrams, show practical example: "Trees on flat ground ABOVE 5m height" with visual showing filtered results. Style: Clean vector graphics on white background with colored circles and clear labels. Use professional infographic aesthetic. Include icons for each operation (∧, ∨, ¬). Size: 1920x1080. Layout: Horizontal arrangement of three operations with example below.
```

### **Prompt 9: Noise vs Random Comparison**
```
Create a stark side-by-side comparison showing two height-mapped surfaces. LEFT SIDE: Labeled "Noise Texture - Smooth Variation" showing a terrain with smooth, rolling hills and valleys created by Perlin noise, natural-looking landscape. Use smooth gradients of brown/tan for elevation. RIGHT SIDE: Labeled "Random Values - Chaotic" showing extremely jagged, spiky surface with sharp discontinuities and no flow, looking unnatural. Use same color scheme but showing harsh transitions. Add text labels: Left - "Neighboring values CORRELATED, Natural patterns", Right - "Neighboring values INDEPENDENT, Unusable for terrain". Background: Split screen with dark gray (#2b2b2b). Include sample value graphs below each showing noise (smooth curve) vs random (erratic spikes). Size: 1920x1080. Style: Professional technical comparison.
```

### **Prompt 10: Noise Texture Types Overview**
```
Create a 2x3 grid reference chart showing six different noise texture types. Each panel 640x360 pixels: TOP ROW: (1) Perlin/Simplex Noise - soft cloudy pattern in grayscale, (2) Voronoi F1 - cellular pattern with smooth cells, (3) Voronoi Distance to Edge - showing cracked earth pattern. BOTTOM ROW: (4) Wave Texture - concentric bands or stripes, (5) White Noise - pure random static, (6) Musgrave - realistic terrain-like pattern with sharp ridges. Label each clearly with texture name. All rendered as grayscale height maps. Background: Dark gray (#2b2b2b). Add title "Noise Texture Types - Quick Reference". Include subtle borders between panels. Size: 1920x1080 overall. Style: Technical reference sheet for professional training.
```

### **Prompt 11: Noise Scale Parameter Effect**
```
Create a three-panel horizontal comparison showing the same terrain base shape with different noise scale settings. LEFT PANEL: Labeled "Scale: 2.0 - Large Features" showing broad, rolling hills and wide valleys, gentle large-scale terrain. MIDDLE PANEL: Labeled "Scale: 10.0 - Medium Features" showing more detailed terrain with moderate-sized hills. RIGHT PANEL: Labeled "Scale: 50.0 - Fine Detail" showing highly detailed surface with small bumps and texture. All three should be same base terrain with increasing detail frequency. Color: Earth tones for terrain. Background: Dark gray (#2b2b2b). Add measurement indicators showing feature size comparison. Include title "Noise Scale Effect on Terrain". Size: 1920x1080. Style: Professional technical comparison with isometric view.
```

### **Prompt 12: Noise Detail/Octaves Visualization**
```
Create a progressive four-panel comparison showing cumulative effect of noise detail layers. Each panel showing same terrain view: PANEL 1: "Detail: 1 - Base Only" smooth simple terrain. PANEL 2: "Detail: 3" adding medium complexity ridges. PANEL 3: "Detail: 5" adding fine surface texture. PANEL 4: "Detail: 8" showing very detailed complex terrain with all scales visible. Arrange in 2x2 grid. Each terrain rendered with good lighting to show surface detail. Use brown/tan earth colors. Add progressive arrows between panels showing "adding more octaves". Background: Dark gray (#2b2b2b). Include title "Noise Detail Parameter - Layer Accumulation". Size: 1920x1080. Style: Educational progression visualization.
```

### **Prompt 13: Multi-Layer Noise Breakdown**
```
Create an infographic showing additive noise layering process. Show four terrain visualizations arranged vertically or in flow diagram: TOP: "Layer 1: Large Features (Scale 2.0, Amplitude 15m)" showing broad mountains. SECOND: "Layer 2: Medium Features (Scale 8.0, Amplitude 6m)" showing ridges and hills. THIRD: "Layer 3: Fine Detail (Scale 30.0, Amplitude 2m)" showing surface texture. BOTTOM: "Combined Result" showing all three layers added together creating realistic complex terrain. Use color coding: Layer 1 in blue tint, Layer 2 in green tint, Layer 3 in orange tint, Combined in natural brown. Add "+" symbols between layers and "=" before result. Background: Dark gray (#2b2b2b). Size: 1080x1920 (vertical). Style: Educational flow diagram.
```

### **Prompt 14: Distribution Methods Overview**
```
Create a three-panel technical diagram showing different distribution approaches. PANEL 1: "Point-Based Distribution" showing grid of evenly spaced points with objects instanced on them, labeled "Explicit positions, Regular patterns". PANEL 2: "Surface-Based Distribution" showing points scattered across a curved mesh surface with varying density, labeled "Follows surface topology, Natural scatter". PANEL 3: "Volume-Based Distribution" showing points filling a 3D cubic volume uniformly, labeled "Fills 3D space, Volumetric effects". Use different colors for each method: Blue for point-based, Green for surface-based, Purple for volume-based. Background: Dark gray (#2b2b2b). Include icons and labels. Size: 1920x1080. Style: Clean technical diagram for training material.
```

### **Prompt 15: Distribute Points on Faces Interface**
```
Create an annotated screenshot of the Distribute Points on Faces node in Blender's Geometry Nodes interface. Show the node with its parameters clearly visible: Density (highlighted with orange), Seed, Distribution Method dropdown showing "Poisson Disk" and "Random" options. Add colorful callout boxes with arrows pointing to each parameter explaining: "Density: Points per m² - controls how many instances", "Seed: Randomization value - change for different patterns", "Method: Poisson = even spacing, Random = clustering allowed". Dark theme interface (#2b2b2b background). Node should have orange highlight border indicating selection. Size: 1920x1080. Style: Professional training screenshot with clean annotations.
```

### **Prompt 16: Poisson Disk vs Random Distribution**
```
Create a side-by-side viewport comparison. LEFT: "Poisson Disk Distribution" showing points on a plane with even spacing, no clustering, maintaining minimum distance between points, professional uniform appearance. RIGHT: "Random Distribution" showing points on same plane with natural clustering, some dense areas, some sparse areas, less uniform. Both views same camera angle and scale for fair comparison. Show approximately 100 points each. Color points bright cyan (#00ffff) on dark gray surface (#2b2b2b). Add measurement circles on left showing minimum spacing maintained. Include labels and title "Distribution Method Comparison". Size: 1920x1080. Style: Clean technical comparison viewport.
```

### **Prompt 17: Density Field Example**
```
Create a composite image showing variable density distribution. TOP SECTION: Show node setup with Position.Z → Map Range → Distribute Points Density input, nodes clearly visible with connections highlighted. BOTTOM SECTION: Show 3D viewport with sloped surface where instance density decreases from bottom (dense, many instances) to top (sparse, few instances). Use tree or rock instances. Color-code by height: Dense area in green tint, sparse area in blue tint. Add gradient bar on side showing "High Density" to "Low Density" with height correlation. Background: Dark gray (#2b2b2b). Size: 1920x1080. Style: Technical demonstration combining node setup and result.
```

### **Prompt 18: Noise-Based Density Masking**
```
Create a top-down view of a large plane surface with point distribution controlled by noise texture. Show clear patches where points cluster (high noise values) and empty areas (low noise values). Approximately 500 points total forming organic, cloud-like clustering patterns. Color points bright green (#4CAF50) on dark surface (#2b2b2b). Add semi-transparent overlay showing the noise texture as grayscale pattern with same clustering visible. Include scale reference and title "Noise-Controlled Density - Natural Clustering". Add small inset showing the noise texture alone for reference. Size: 1920x1080. Style: Professional technical visualization from overhead orthographic view.
```

### **Prompt 19: Instance Alignment to Surface Normals**
```
Create a dramatic before/after comparison split vertically. LEFT HALF: "Default Orientation" showing tree or plant instances all pointing straight up (Z-axis) on a curved hillside surface, looking unnatural and floating. RIGHT HALF: "Aligned to Surface Normals" showing same instances perpendicular to the surface, naturally following terrain contours. Use simple tree models (cone + cylinder) for clarity. Show curved terrain surface clearly with shading to indicate slope. Add normal vector arrows on right side showing alignment. Color trees green, terrain brown. Background: Sky gradient. Include title and labels. Size: 1920x1080. Style: Clear demonstration render with good lighting.
```

### **Prompt 20: Scale Variation Methods**
```
Create a three-panel comparison showing different scale variation approaches. PANEL 1: "Uniform Scale" - all instances identical size, labeled "No variation - Artificial look". PANEL 2: "Random Scale Variation" - instances vary between 0.7× and 1.3× randomly, labeled "Natural variation - Each unique". PANEL 3: "Position-Correlated Scale" - instances larger at bottom, smaller at top showing gradient, labeled "Contextual variation - Height-based". Show approximately 20 tree instances per panel on flat ground. Use simple cylinder+cone tree shapes. Color green. Background: Dark gray ground (#2b2b2b), light sky. Size: 1920x1080. Style: Clean comparison render.
```

### **Prompt 21: Geometry Proximity Node Diagram**
```
Create a technical diagram showing proximity calculation mechanics. Show source points (blue spheres) on the left, target mesh surface (gray curved wall) on the right. Draw colored lines from each source point to its nearest point on target surface. Color lines by distance: Short distances in green, medium in yellow, long in red. At endpoints on target surface, show small markers indicating "nearest point" with surface normal vectors displayed. Add distance value labels on a few lines (e.g., "0.3m", "1.2m", "0.8m"). Include legend explaining color coding. Background: Dark gray (#2b2b2b). Include title "Geometry Proximity: Distance to Nearest Point". Size: 1920x1080. Style: Clean technical diagram with professional annotations.
```

### **Prompt 22: Distance Field Visualization**
```
Create a 3D visualization showing a central target object (large sphere or cube) surrounded by point cloud. Color-code each point by its distance to target object: Blue for very close (0-1m), Cyan for near (1-2m), Green for medium (2-4m), Yellow for far (4-6m), Red for very far (6m+). Show gradient sphere zones around target for reference. Display approximately 200 points in organized pattern. Include color scale legend on side showing distance mapping. Background: Dark (#2b2b2b). Add title "Distance Field: Per-Point Distance to Target". Show coordinate axes. Size: 1920x1080. Style: Technical data visualization with smooth gradients.
```

### **Prompt 23: Raycast Operation Diagram**
```
Create a technical diagram showing raycast mechanics. Show 10-15 source points at bottom casting rays upward (as white/cyan arrows). Some rays hit obstacles (gray mesh objects floating above), shown with red X hit markers and hit points highlighted. Other rays pass through empty space completely, shown with green checkmarks and extending to top of frame. Label hit rays with "Hit = True" and clear rays with "Hit = False". Include one detailed callout showing hit position, hit normal vector, and hit distance measurement. Background: Dark gray (#2b2b2b). Grid on ground plane. Include title "Raycast: Line-of-Sight Detection". Size: 1920x1080. Style: Clean technical diagram for training.
```

### **Prompt 24: Proximity Falloff Example**
```
Create a visualization showing influence falloff based on distance. Show a central target sphere with concentric gradient rings emanating outward. Inner ring (closest) bright cyan with "Influence: 1.0", middle ring blue-green with "Influence: 0.5", outer ring purple with "Influence: 0.0". Place small cubes in rings scaled by influence value - large near center, medium in middle, tiny at edge. Add curve graph on side showing falloff function (linear or smooth). Background: Dark gray (#2b2b2b). Include mathematical notation: "Influence = 1.0 - (Distance / Max Distance)". Title: "Distance-Based Falloff". Size: 1920x1080. Style: Technical visualization with clear gradient zones.
```

### **Prompt 25: Terrain Project - Final Result**
```
Create a stunning high-quality render of procedural terrain landscape. Show mountainous terrain with three distinct material zones clearly visible: Green grass in valleys and flat areas, Gray rock on steep slopes and mid-elevation, White snow on peaks above timberline. Terrain should show multi-scale detail - large mountains, medium ridges, fine surface texture. Lighting: Golden hour with warm sunlight from side creating long shadows and rim lighting on peaks. Sky: Blue gradient with subtle clouds. Camera: Dramatic low angle looking up at mountains. Render quality: Photorealistic with ambient occlusion, sharp details. Resolution: 1920x1080. Style: Professional landscape visualization suitable for portfolio. Include subtle atmospheric haze for depth.
```

### **Prompt 26: Terrain Project - Node Tree Overview**
```
Create a comprehensive screenshot of complete terrain generator node tree in Blender Geometry Nodes editor. Show entire workflow from left to right: Input section (Grid creation), Noise section (three layers at different scales with multiply nodes), Combination section (adding layers together), Displacement section (Set Position with combined height), Material zone section (height and slope comparisons, material assignments). Use frame labels for each major section: "Base Grid", "Layer 1 - Large", "Layer 2 - Medium", "Layer 3 - Fine", "Combine Layers", "Apply Displacement", "Material Zones". Highlight connections with subtle glow. Dark theme (#2b2b2b background). Size: 1920x1080. Zoom level showing all nodes readable but fitting in frame.
```

### **Prompt 27: Terrain Project - Material Zones**
```
Create a viewport screenshot showing terrain in material preview mode with three distinct materials clearly visible. Color scheme: Bright green (#2d5016) for grass material in valleys, Dark gray (#5a5a5a) for rock material on slopes, Pure white (#f0f0f0) for snow material on peaks. Terrain should show good variety of slopes and elevations demonstrating automatic material assignment. Lighting: Three-point lighting setup for clear material visibility. Show enough terrain to see transition zones between materials. Camera: 45-degree angle isometric view. Background: Medium gray viewport. Include small material swatches in corner labeled "Grass", "Rock", "Snow". Size: 1920x1080. Style: Clean Blender viewport screenshot in material preview mode.
```

### **Prompt 28: Terrain Project - Multi-Layer Noise Setup**
```
Create a detailed node setup screenshot focusing on the three-noise-layer system. Show three Noise Texture nodes vertically arranged, each clearly labeled: "Large Features (Scale: 2.0)", "Medium Features (Scale: 8.0)", "Fine Detail (Scale: 30.0)". Each noise node connected to Math Multiply node showing amplitudes: 15.0, 6.0, 2.0 respectively. All three multiplication results feeding into a chain of Math Add nodes combining the layers. Highlight the position input feeding all three noise nodes. Use colored frames or backgrounds to distinguish each layer: Blue tint for Layer 1, Green for Layer 2, Orange for Layer 3. Dark theme (#2b2b2b). Size: 1920x1080. Clear, readable node labels and values.
```

### **Prompt 29: Ivy Project - Final Result**
```
Create a beautiful render of ivy covering a brick or stone wall surface. Ivy should show natural clustering with denser patches and sparser areas, all leaves oriented toward the wall following its surface. Use realistic ivy leaf shapes (or simple green planes if needed). Color: Various shades of green (#2d5016, #3d7020, #4d8030) for leaf variation. Wall texture: Rough brick or stone in reddish-brown tones. Lighting: Soft outdoor lighting showing depth and shadows of leaves on wall. Camera: Slight angle showing both wall surface and leaf detail. Some leaves should cast soft shadows on wall. Resolution: 1920x1080. Style: Realistic architectural visualization render. Show enough detail to see individual leaves and natural growth pattern.
```

### **Prompt 30: Ivy Project - Proximity Filtering**
```
Create a technical visualization showing proximity filtering in action. TOP VIEW: Show volume of scattered points (clouds of blue dots) around a wall surface (gray rectangle). BOTTOM VIEW: After proximity filter, show only points within 0.5m of wall surface (green dots), forming a thin layer hugging the wall contour. Use ghost/transparent representation for deleted far points. Add distance measurement indicators showing 0.5m threshold zone. Include before/after labels and count: "Before: 5000 points" and "After: 800 points". Background: Dark gray (#2b2b2b). Show both orthographic side view and slight perspective. Size: 1920x1080. Style: Technical filtering demonstration diagram.
```

### **Prompt 31: Ivy Project - Surface Alignment**
```
Create a detail close-up render showing ivy leaves properly aligned to wall surface. Show 15-20 leaves at various angles all perpendicular to their local surface position. Wall should have slight curve or corner to show leaves adapting to different normal directions. Display several semi-transparent normal vectors (cyan arrows) protruding from wall at leaf positions showing alignment. Leaves should be simple planes or realistic leaf shapes, all oriented outward from surface. Lighting: Directional light showing leaf surface orientation clearly. Color: Leaves green (#2d5016), wall gray, normal vectors bright cyan (#00ffff). Background: Dark with subtle vignette. Size: 1920x1080. Style: Technical demonstration with artistic quality.
```

### **Prompt 32: Ivy Project - Node Tree Overview**
```
Create a comprehensive screenshot of complete ivy growth system node tree. Show workflow sections with labeled frames: "Volume Distribution" (distribute points on plane with Z offset), "Proximity Check" (Object Info for wall, Geometry Proximity, distance comparison), "Filter & Snap" (Delete far points, Set Position to surface), "Instance Leaves" (Instance on Points), "Alignment" (Geometry Proximity normals, Align Euler to Vector, random twist), "Scale Variation" (Random values for size). Use color-coded frames: Blue for distribution, Orange for proximity, Green for instancing, Purple for alignment. Dark theme (#2b2b2b). Show clear connection flow. Size: 1920x1080. Ensure all node labels readable.
```

### **Prompt 33: Ivy Project - Density Variation**
```
Create a side-by-side comparison of ivy distribution patterns. LEFT: "Uniform Density" showing ivy leaves evenly spread across wall surface in grid-like pattern, appearing artificial. RIGHT: "Noise-Based Clustering" showing organic patches of dense ivy alternating with sparse or empty areas, natural appearance. Both views same wall and camera angle. Use approximately 200 leaves for uniform, 200 for clustered (but clustered creates visible patches). Color: Green leaves on gray wall. Include small noise texture inset on right showing the noise pattern used. Size: 1920x1080. Style: Clear comparison render demonstrating natural vs artificial distribution.
```

### **Prompt 34: Building Project - Final Result**
```
Create a professional architectural visualization render of procedural building. Modern commercial building: 5 stories tall, rectangular form, grid of windows (4 windows per floor horizontal, 5 floors vertical = 20 windows total), ground floor with centered glass door, flat modern roof. Windows should show as dark openings with subtle reflections. Building material: Concrete/brick texture in neutral gray/beige. Clean modern aesthetic. Lighting: Daytime with sun from 45-degree angle casting shadows, showing window depth. Camera: Slightly low angle emphasizing building height, front-three-quarter view. Background: Clear blue sky or simple environment. Ground: Paved or grass. Resolution: 1920x1080. Style: Professional architectural rendering, clean and realistic.
```

### **Prompt 35: Building Project - Window Grid Generation**
```
Create a technical diagram showing window placement system. TOP: Show grid of points arranged on building facade (4 columns × 5 rows), points shown as small spheres. Each point labeled with position. Color points orange (#ff8c00). BOTTOM: Show same grid with window instances (small rectangles/cubes) placed at each grid point. Use ghost/wireframe overlay showing the generating grid structure. Add callouts: "Grid vertices become window positions", "Distribute based on floor count", "Instance window template at each point". Background: Dark gray (#2b2b2b). Show building facade as gray surface behind. Include rulers/dimensions showing spacing. Size: 1920x1080. Style: Technical system diagram.
```

### **Prompt 36: Building Project - Boolean Operations**
```
Create a dramatic before/after comparison of boolean operations. TOP HALF: "Before Booleans" showing solid building box with window and door geometry overlapping but not cut, everything solid opaque. BOTTOM HALF: "After Mesh Boolean Difference" showing same building with clean rectangular window openings and door opening cut through walls, showing interior darkness. Make the cutout areas clearly visible with dark interior and sharp edges. Use wireframe overlay on bottom image showing clean boolean topology. Color: Building gray (#5a5a5a), cutout areas black or dark interior. Add label arrows pointing to boolean cuts: "Window cutouts", "Door opening". Size: 1920x1080. Style: Technical demonstration render.
```

### **Prompt 37: Building Project - Roof Type Variations**
```
Create a three-panel comparison showing same base building with different roof styles. PANEL 1: "Flat Roof" - simple rectangular cap on top with slight overhang, modern commercial style. PANEL 2: "Peaked Roof" - pyramid-style pointed roof (four triangular faces meeting at center peak), classic style. PANEL 3: "Gabled Roof" - traditional A-frame gable with two sloped sides, residential style. All three buildings identical base (5 floors, windows, door), only roof differs. Each panel labeled clearly. Camera angle: Front-three-quarter view showing roof shape. Lighting: Consistent across panels. Colors: Building gray, roofs darker gray or brown. Background: Sky gradient. Size: 1920x1080. Style: Clean architectural comparison render.
```

### **Prompt 38: Building Project - Parameter Interface**
```
Create a screenshot of Blender's modifier panel showing organized Geometry Nodes parameters for building generator. Show clear sections with headers: "DIMENSIONS" (Floor Count slider 1-20 showing value 5, Building Width 10.0, Building Depth 8.0, Floor Height 4.0), "WINDOWS" (Windows Per Floor 2, Window Width 0.8, Window Height 1.0), "ROOF" (Roof Type dropdown showing options 0=Flat/1=Peaked/2=Gabled, Roof Height 3.0, Roof Overhang 0.2). Use Blender's dark theme interface. Parameters should show appropriate value types (sliders, number inputs, dropdowns). Highlight a few parameters with subtle color to show active values. Size: 1920x1080 (can be portrait 1080x1920). Style: Clean Blender UI screenshot with organized layout.
```

### **Prompt 39: Building Project - Floor Count Demonstration**
```
Create a progression series showing parametric height control. Four buildings in a row, same base width/depth, increasing floor count: Building 1: "1 Floor" - short single-story warehouse style. Building 2: "3 Floors" - small apartment building. Building 3: "5 Floors" - medium commercial building. Building 4: "10 Floors" - tall office tower. Each building should show proportional window count (more floors = more window rows). All buildings aligned at ground level. Camera: Wide shot showing all four, slight perspective. Lighting: Consistent time of day. Color: Gray buildings with dark window openings. Add floor count labels clearly. Background: Simple sky. Size: 1920x1080 horizontal panoramic. Style: Architectural comparison render.
```

### **Prompt 40: Building Project - Node Tree Overview**
```
Create a comprehensive screenshot of complete building generator node tree. Show major sections with labeled frames: "Base Structure" (Cube creation, Transform for dimensions), "Floor Scaling" (Floor Count input, height multiplication), "Window Grid" (Grid creation, positioning, scaling by floor count), "Window Instances" (Instance on Points, Mesh to Points), "Boolean Cutouts" (Realize Instances, Join windows, Mesh Boolean for subtraction), "Door" (Door cube, boolean), "Roof System" (Three roof types, Switch node), "Materials" (Set Material nodes). Use color-coded frames: Blue for structure, Green for windows, Orange for booleans, Purple for roof. Dark theme (#2b2b2b). Connection flow clearly visible. Size: 1920x1080. Ensure readable labels.
```

### **Prompt 41: LOD System Comparison**
```
Create a split-screen comparison showing quality settings impact. LEFT: "Viewport Preview (Quality 0.3)" - terrain or scene with visible lower polygon count, simplified details, but fast and interactive, labeled "Fast - Smooth interaction". RIGHT: "Render Quality (Quality 1.0)" - same scene with high polygon count, fine details visible, labeled "Beautiful - Final output". Show polygon count differences obviously - left has visible faceting, right has smooth surfaces. Include performance metrics overlay: Left "60 FPS, 200K vertices", Right "2 FPS, 5M vertices". Background: Dark gray ground plane. Objects: Trees and terrain for complexity. Size: 1920x1080. Style: Technical comparison demonstrating optimization.
```

### **Prompt 42: Performance Bottleneck Identification**
```
Create an annotated screenshot of Geometry Nodes tree with performance issues highlighted. Show complex node tree with several problem areas marked with red warning icons and callout boxes: "Realize Instances: 50,000 objects - SLOW!" pointing to Realize Instances node, "Geometry Proximity: Checking 100,000 points - BOTTLENECK!" pointing to Geometry Proximity, "High Detail: 10 octaves - Expensive" pointing to Noise Texture with Detail=10. Add green checkmarks on efficient nodes for contrast. Include viewport overlay showing element counts: "1.5M vertices, 12 FPS". Dark theme (#2b2b2b). Size: 1920x1080. Style: Educational diagnostic screenshot with clear problem identification.
```

### **Prompt 43: Instance vs Realized Geometry**
```
Create an infographic comparing memory usage. Two columns: LEFT: "1000 Instances" showing single tree model icon (labeled "10KB") with "×1000" text, arrow pointing to memory bar showing "10MB total" in green, labeled "Efficient - References". RIGHT: "1000 Realized Meshes" showing 1000 tiny tree copies, arrow pointing to memory bar showing "10GB total" in red, labeled "Wasteful - Full copies". Include visual metaphor: Left shows small stack of reference cards, Right shows huge pile of copied documents. Use clear icons and bold numbers. Background: Light gray with colored sections (green for good, red for bad). Size: 1920x1080. Style: Clean infographic for business/technical presentation.
```

### **Prompt 44: Progressive Filtering Workflow**
```
Create a flow diagram showing two-pass filtering optimization. TOP: "Step 1 - Broad Filter (Cheap & Fast)" showing 100,000 points, simple bounding box test, removing 80,000 points outside rough area, resulting in 20,000 points, labeled "Simple position check: X between -10 and 10, Y between -5 and 5". MIDDLE: Arrow labeled "Only remaining points processed". BOTTOM: "Step 2 - Precise Filter (Expensive but Fewer)" showing 20,000 points, Geometry Proximity calculation on reduced set, further filtering to 5,000 final points. Use color coding: Gray for discarded points, Orange for rough selection, Green for final selection. Include timing labels: "Step 1: 0.01s", "Step 2: 0.1s", "Total: 0.11s vs 5s without optimization". Size: 1080x1920 (vertical flow). Style: Technical optimization diagram.
```

### **Prompt 45: Node Tree Organization Best Practices**
```
Create a screenshot showing well-organized Geometry Nodes tree. Display clear visual organization: Left-to-right flow (Input → Processing → Output). Major sections separated by colored frames with labels: "INPUT" (blue frame), "DISTRIBUTION" (green frame), "EFFECTS" (orange frame), "OUTPUT" (purple frame). Nodes aligned in neat columns. Connections routed cleanly using reroute points (green dots) to avoid spaghetti. Important parameters exposed with clear names. Some nodes have brief comment annotations. Empty space between sections for readability. Dark theme (#2b2b2b). Contrast this with tiny "bad example" inset showing chaotic, unlabeled spaghetti node tree. Size: 1920x1080. Style: Professional training material showing best practices.
```

### **Prompt 46: Parameter Design Guidelines**
```
Create a comparison showing good vs bad parameter interface design. LEFT SIDE: "Bad Parameters" - modifier panel showing unclear names ("Value_001", "Float", "Vector"), no min/max ranges (can enter any value including negative/broken), no organization (random order), no descriptions. RIGHT SIDE: "Good Parameters" - same panel showing clear names ("Tree Density", "Growth Height", "Seed Value"), appropriate ranges (Density 1-1000, Height 0-20), logical grouping with section headers ("Distribution Settings", "Appearance", "Performance"), tooltips/descriptions visible. Use Blender UI style. Show sliders, number inputs, properly configured. Size: 1920x1080 (can be portrait). Style: UI/UX comparison for training.
```

### **Prompt 47: Field Operations Quick Reference**
```
Create an SVG infographic reference chart showing common field operations as mini-diagrams. Grid layout with 6-8 common patterns: (1) "Height Selection" - Position.Z → Compare → Selection, (2) "Slope Detection" - Normal.Z → Compare → Flat areas, (3) "Distance Falloff" - Position → Length → Map Range, (4) "Index Pattern" - Index → Modulo → Every Nth, (5) "Noise Variation" - Position → Noise → Random field, (6) "Boolean Combine" - Field A AND Field B → Combined. Each pattern shows minimal node diagram (2-4 nodes) with colored connections and one-sentence description. Use professional color scheme (#667eea, #4CAF50, #ff8c00). Clean vector graphics style. White background with subtle grid. Size: 1920x1080. Suitable for printing as reference poster.
```

### **Prompt 48: Noise Recipes Reference Chart**
```
Create an SVG reference chart showing noise presets for common use cases. Format as a table or grid: Each row shows: Preset Name, Visual Swatch (small grayscale noise preview), Parameters (Scale, Detail, Distortion values), Use Case. ROWS: (1) "Rolling Hills" - Scale 1.5, Detail 3, Distortion 0, showing smooth terrain, "Gentle landscapes", (2) "Sharp Mountains" - Scale 1.5, Detail 6, Distortion 0, Musgrave Ridged, "Alpine peaks", (3) "Surface Bumps" - Scale 20, Detail 2, Distortion 0.5, "Organic texture", (4) "Cracked Earth" - Voronoi Distance to Edge, Scale 5, "Dry ground", (5) "Natural Patches" - Scale 4, Detail 2, Threshold 0.6, "Clustering mask". Use clean vector table layout with icons. Size: 1920x1080. Style: Professional reference chart suitable for printing.
```

### **Prompt 49: Distribution Patterns Gallery**
```
Create a visual gallery showing common distribution pattern types. 2x3 grid of top-down views, each showing points on a plane: (1) "Ring/Circle" - points arranged in circular band, (2) "Radial Gradient" - density decreasing from center outward, (3) "Exclusion Zone" - clear circular area in center with scattered points around, (4) "Height-Based" - density gradient from left (dense) to right (sparse), (5) "Multi-Species Zones" - different colored points in distinct regions (blue valley, green mid, red peaks), (6) "Noise Clustering" - organic patch patterns. Each panel 640x360 pixels. Label each clearly. Use color coding: Cyan points on dark gray plane (#2b2b2b). Size: 1920x1080 overall. Style: Clean technical gallery for pattern reference.
```

### **Prompt 50: Optimization Checklist Infographic**
```
Create an SVG checklist infographic for pre-delivery optimization. Visual design: Clipboard or checklist graphic with checkboxes. Sections with headers and items: "VIEWPORT PERFORMANCE: □ Update speed < 0.5s? □ Smooth navigation? □ Quality parameter works?" "MEMORY USAGE: □ Instances used? □ Realize only when needed? □ Element count reasonable?" "NODE TREE HEALTH: □ No unused nodes? □ Clean layout? □ Sections labeled?" "PARAMETERS: □ All values exposed? □ Logical organization? □ Sensible defaults?" "TESTING: □ Extreme values tested? □ Works on different geometry? □ Renders without errors?" Use green checkmarks for completed items. Color scheme: Professional green (#4CAF50) for checks, dark headers. Clean vector graphics. Size: 1080x1920 (vertical poster format). Style: Modern infographic suitable for printing.
```

---

## SVG Diagram Recommendations

The following images work best as SVG (scalable vector graphics) for clarity and file size:

1. **Field Operations Quick Reference (#47)** - Clean line diagrams, text labels, simple node representations benefit from vector format. SVG allows infinite scaling without quality loss for reference use.

2. **Noise Recipes Reference Chart (#48)** - Table layout with text and small preview swatches. Vector format ensures crisp text at any size and easy editing of parameter values.

3. **Boolean Logic Combinations (#8)** - Venn diagrams with simple shapes and labels. Perfect vector graphics use case with circles, text, and clear geometric shapes.

4. **Distribution Patterns Gallery (#49)** - Top-down views of point patterns can be represented as simple geometric shapes (circles/dots) in vector format for clean, scalable reference.

5. **Optimization Checklist Infographic (#50)** - Text-based checklist with checkboxes and headers. SVG ensures readable text at all sizes and allows easy updates/modifications.

**Rationale for SVG recommendations:** These images contain primarily text, simple geometric shapes, diagrams, and infographic elements rather than photorealistic 3D renders or complex textures. Vector format provides:
- Infinite scalability without quality loss
- Smaller file sizes than raster equivalents
- Easy editing and updates to text/values
- Crisp appearance on any display resolution
- Professional look suitable for print materials

The remaining images (#1-7, #9-46, #49) require photorealistic 3D renders, complex shading, Blender UI screenshots, or detailed terrain/textures that are better suited to raster formats (PNG/JPG).

---

## Image Placement Suggestions in HTML

### Introduction Section (id="introduction")
- **After first paragraph:** Insert Image #1 (Procedural vs Traditional Comparison) to immediately demonstrate value proposition
- **Within "Why Procedural Modeling Matters" card:** Insert Image #2 (Field Operations Visualization) as visual example of procedural concepts
- **After comparison table:** Insert Image #41 (LOD System Comparison) to show real-world performance considerations

### Field Operations Section (id="field-operations")
- **After "Understanding Fields vs Values" heading:** Insert Image #2 (Field Operations Visualization) and Image #3 (Single Value vs Field Input)
- **Within "Built-In Attribute Fields" card:** Insert Image #4 (Position Field) and Image #5 (Normal Field) as visual references
- **After "Creating Selection Fields" heading:** Insert Image #6 (Height-Based Selection) and Image #7 (Slope-Based Selection) to show practical examples
- **Within "Combining Multiple Fields" card:** Insert Image #8 (Boolean Logic Combinations) to explain AND/OR/NOT operations

### Noise Systems Section (id="noise-systems")
- **After "Understanding Noise vs Randomness" heading:** Insert Image #9 (Noise vs Random Comparison) prominently as key conceptual distinction
- **Within "Noise Texture Types" card:** Insert Image #10 (Noise Texture Types Overview) as comprehensive reference
- **After "Noise Parameters Deep Dive" heading:** Insert Image #11 (Noise Scale Effect), Image #12 (Noise Detail/Octaves), throughout parameter explanations
- **Within "Layering Multiple Noise" card:** Insert Image #13 (Multi-Layer Noise Breakdown) to visualize additive process
- **At end of section:** Insert Image #48 (Noise Recipes Reference Chart) as practical takeaway

### Distribution Section (id="distribution")
- **After "Distribution Methods Overview" heading:** Insert Image #14 (Distribution Methods Overview) as foundational concept
- **Within "Distribute Points on Faces" card:** Insert Image #15 (Node Interface) and Image #16 (Poisson vs Random)
- **Within "Density Field Control" section:** Insert Image #17 (Density Field Example) and Image #18 (Noise-Based Density)
- **Within "Advanced Scattering Patterns" card:** Insert Image #49 (Distribution Patterns Gallery) as visual reference
- **Within "Orientation and Alignment" card:** Insert Image #19 (Instance Alignment) showing before/after
- **Within "Scale Variation" section:** Insert Image #20 (Scale Variation Methods) comparing approaches

### Proximity Section (id="proximity")
- **After "Proximity Concepts" heading:** Insert Image #21 (Geometry Proximity Diagram) explaining core mechanics
- **Within "Geometry Proximity Node" card:** Insert Image #22 (Distance Field Visualization) showing output
- **After "Raycast Node" heading:** Insert Image #23 (Raycast Operation Diagram) illustrating concept
- **Within "Advanced Proximity Techniques" card:** Insert Image #24 (Proximity Falloff) demonstrating influence gradient

### Terrain Project Section (id="project-terrain")
- **At section start:** Insert Image #25 (Terrain Final Result) as aspirational goal image
- **After Phase 2 completion:** Insert Image #28 (Multi-Layer Noise Setup) showing node detail
- **After Phase 4 completion:** Insert Image #27 (Material Zones) in viewport
- **After Phase 6 completion:** Insert Image #26 (Complete Node Tree) as reference
- **Within testing section:** Insert Image #11 (scale variations) for terrain type examples

### Ivy Project Section (id="project-ivy")
- **At section start:** Insert Image #29 (Ivy Final Result) showing completed system
- **After Phase 3 completion:** Insert Image #30 (Proximity Filtering) showing before/after
- **After Phase 5 completion:** Insert Image #31 (Surface Alignment) detail shot
- **After Phase 4 completion:** Insert Image #33 (Density Variation) comparison
- **After Phase 7 completion:** Insert Image #32 (Complete Node Tree) as reference

### Building Project Section (id="project-building")
- **At section start:** Insert Image #34 (Building Final Result) as goal visualization
- **After Phase 3 completion:** Insert Image #35 (Window Grid Generation) explaining system
- **After Phase 4 completion:** Insert Image #36 (Boolean Operations) showing cutouts
- **After Phase 6 completion:** Insert Image #37 (Roof Type Variations) demonstrating options
- **Within Phase 8 (Parameters):** Insert Image #38 (Parameter Interface) showing organization
- **After testing section:** Insert Image #39 (Floor Count Demo) showing parametric control
- **Final reference:** Insert Image #40 (Complete Node Tree) at section end

### Optimization Section (id="optimization")
- **After "Performance Fundamentals" heading:** Insert Image #41 (LOD Comparison) showing quality tradeoff
- **Within "Profiling and Debugging" section:** Insert Image #42 (Bottleneck Identification) with annotations
- **Within "Memory Management" card:** Insert Image #43 (Instance vs Realized) comparing efficiency
- **Within "Optimization Strategies" card:** Insert Image #44 (Progressive Filtering) showing workflow
- **Within "Best Practices" section:** Insert Image #45 (Node Organization) and Image #46 (Parameter Design)
- **At section end:** Insert Image #50 (Optimization Checklist) as final reference

### Summary Section (id="summary")
- **Within "Next Steps" card:** Insert Image #47 (Field Operations Reference) as take-away cheat sheet
- **Throughout section:** Re-use key images from projects (#25, #29, #34) to celebrate achievements

---

## File Naming Convention

```
lesson_41_01_procedural_vs_traditional_comparison.png
lesson_41_02_field_operations_visualization.png
lesson_41_03_single_value_vs_field_comparison.png
lesson_41_04_position_field_visualization.png
lesson_41_05_normal_field_surface.png
lesson_41_06_height_based_selection.png
lesson_41_07_slope_based_selection.png
lesson_41_08_boolean_logic_combinations.svg
lesson_41_09_noise_vs_random_comparison.png
lesson_41_10_noise_texture_types.png
lesson_41_11_noise_scale_parameter_effect.png
lesson_41_12_noise_detail_octaves.png
lesson_41_13_multi_layer_noise_breakdown.png
lesson_41_14_distribution_methods_overview.png
lesson_41_15_distribute_points_interface.png
lesson_41_16_poisson_vs_random_distribution.png
lesson_41_17_density_field_example.png
lesson_41_18_noise_based_density_masking.png
lesson_41_19_instance_alignment_surface.png
lesson_41_20_scale_variation_methods.png
lesson_41_21_geometry_proximity_diagram.png
lesson_41_22_distance_field_visualization.png
lesson_41_23_raycast_operation_diagram.png
lesson_41_24_proximity_falloff_example.png
lesson_41_25_terrain_project_final.png
lesson_41_26_terrain_node_tree_overview.png
lesson_41_27_terrain_material_zones.png
lesson_41_28_terrain_noise_setup.png
lesson_41_29_ivy_project_final.png
lesson_41_30_ivy_proximity_filtering.png
lesson_41_31_ivy_surface_alignment.png
lesson_41_32_ivy_node_tree_overview.png
lesson_41_33_ivy_density_variation.png
lesson_41_34_building_project_final.png
lesson_41_35_building_window_grid.png
lesson_41_36_building_boolean_operations.png
lesson_41_37_building_roof_variations.png
lesson_41_38_building_parameter_interface.png
lesson_41_39_building_floor_count_demo.png
lesson_41_40_building_node_tree_overview.png
lesson_41_41_lod_system_comparison.png
lesson_41_42_performance_bottleneck_identification.png
lesson_41_43_instance_vs_realized_geometry.png
lesson_41_44_progressive_filtering_workflow.png
lesson_41_45_node_tree_organization.png
lesson_41_46_parameter_design_guidelines.png
lesson_41_47_field_operations_reference.svg
lesson_41_48_noise_recipes_reference.svg
lesson_41_49_distribution_patterns_gallery.png
lesson_41_50_optimization_checklist.svg
```

**Format guidelines:**
- Two-digit numbering (01-50) for proper sorting
- Descriptive names using underscores (no spaces)
- PNG for photorealistic renders and screenshots
- SVG for diagrams, infographics, and reference charts
- All lowercase for consistency

---

## Production Priority

### High Priority (Essential for Understanding) - Complete First

1. **Image #9 - Noise vs Random Comparison** - Critical conceptual distinction that underlies entire noise section
2. **Image #25 - Terrain Project Final Result** - Motivational goal image showing what students will build
3. **Image #29 - Ivy Project Final Result** - Showcases context-aware procedural modeling capability
4. **Image #34 - Building Project Final Result** - Demonstrates complete parametric system
5. **Image #2 - Field Operations Visualization** - Foundational concept that enables all advanced techniques
6. **Image #3 - Single Value vs Field Input** - Core distinction that must be understood first
7. **Image #10 - Noise Texture Types Overview** - Essential reference for entire noise workflow
8. **Image #21 - Geometry Proximity Diagram** - Explains proximity calculations visually
9. **Image #1 - Procedural vs Traditional Comparison** - Sets up value proposition immediately
10. **Image #19 - Instance Alignment Surface** - Critical technique used in multiple projects

**Rationale:** These images directly support primary learning objectives and are referenced throughout the lesson. Without them, core concepts remain abstract. Students need these to understand fundamental differences (noise vs random, fields vs values, procedural vs traditional) and to see completed project goals.

### Medium Priority (Helpful but not Critical) - Complete Second

11. **Image #26 - Terrain Node Tree Overview** - Complete reference after students build system
12. **Image #32 - Ivy Node Tree Overview** - Reference for complete workflow
13. **Image #40 - Building Node Tree Overview** - System documentation
14. **Image #6 - Height-Based Selection** - Practical field example with nodes
15. **Image #7 - Slope-Based Selection** - Important terrain technique
16. **Image #11 - Noise Scale Parameter Effect** - Shows critical parameter impact
17. **Image #14 - Distribution Methods Overview** - Categorizes distribution approaches
18. **Image #15 - Distribute Points Interface** - Key node explanation
19. **Image #27 - Terrain Material Zones** - Shows automatic material system working
20. **Image #31 - Ivy Surface Alignment** - Detail of proper orientation technique
21. **Image #35 - Building Window Grid** - Explains window placement system
22. **Image #36 - Building Boolean Operations** - Shows cutout technique in action
23. **Image #41 - LOD System Comparison** - Performance optimization demonstration
24. **Image #43 - Instance vs Realized Geometry** - Memory management concept
25. **Image #47 - Field Operations Reference (SVG)** - Handy quick reference chart
26. **Image #48 - Noise Recipes Reference (SVG)** - Practical preset configurations

**Rationale:** These enhance understanding but concepts can be grasped without them. They provide helpful examples, detailed references, and optimization guidance. Students benefit from having them but can complete exercises without.

### Lower Priority (Nice to Have) - Complete Third

27. **Image #4 - Position Field Visualization** - Additional field example
28. **Image #5 - Normal Field Surface** - Supplementary field visualization
29. **Image #8 - Boolean Logic Combinations (SVG)** - Helpful but abstract concept understood through practice
30. **Image #12 - Noise Detail/Octaves** - Supplementary parameter explanation
31. **Image #13 - Multi-Layer Noise Breakdown** - Process visualization (understood through doing)
32. **Image #16 - Poisson vs Random Distribution** - Nice comparison but difference becomes apparent in practice
33. **Image #17 - Density Field Example** - Additional density control example
34. **Image #18 - Noise-Based Density Masking** - Supplementary clustering technique
35. **Image #20 - Scale Variation Methods** - Comparison of approaches (explored through experimentation)
36. **Image #22 - Distance Field Visualization** - Additional proximity visualization
37. **Image #23 - Raycast Operation Diagram** - Supplementary raycast explanation
38. **Image #24 - Proximity Falloff Example** - Additional influence gradient demo
39. **Image #28 - Terrain Noise Setup** - Detailed node view (covered in overview)
40. **Image #30 - Ivy Proximity Filtering** - Technical visualization of filtering process
41. **Image #33 - Ivy Density Variation** - Comparison example
42. **Image #37 - Building Roof Variations** - Shows options (students experiment with these)
43. **Image #38 - Building Parameter Interface** - Parameter organization example
44. **Image #39 - Building Floor Count Demo** - Parametric control demonstration
45. **Image #42 - Performance Bottleneck Identification** - Debugging example
46. **Image #44 - Progressive Filtering Workflow** - Optimization technique diagram
47. **Image #45 - Node Tree Organization** - Best practices example
48. **Image #46 - Parameter Design Guidelines** - UI/UX comparison
49. **Image #49 - Distribution Patterns Gallery** - Pattern reference collection
50. **Image #50 - Optimization Checklist (SVG)** - Final checklist reference

**Rationale:** Supplementary materials that enhance experience but aren't necessary for core concepts. Students can successfully complete lesson without these. They add polish, provide additional examples, and serve as nice-to-have references rather than essential teaching aids.

---

## Notes

### Style Consistency Guidelines

**Color Palette (Blender 4.x Dark Theme):**
- Background: Dark grey (#2b2b2b) for all viewport and node screenshots
- UI Chrome: Medium grey (#3c3c3c) for panels
- Selection highlight: Bright orange (#ff8c00) for selected elements
- Active connections: Orange (#ff8c00) for active node connections
- Inactive connections: Grey (#666666) for inactive node connections
- Wireframe: Cyan (#00ffff) or white for mesh edges
- Normals: Bright blue (#0080ff) for normal vector displays
- Success/positive: Green (#4CAF50) for correct/good examples
- Warning/problem: Red (#f44336) for issues/bad examples
- Course branding: Purple gradient (#667eea to #764ba2) for lesson branding

**Blender Version:** All screenshots must use Blender 4.0 or later for UI consistency. Ensure Geometry Nodes workspace visible where applicable.

**View Angles:** 
- Technical diagrams: Isometric or orthographic views for clarity
- Beauty shots: 35-45 degree perspective for visual interest
- Node trees: Straight-on orthographic view
- Comparisons: Consistent camera angles across panels

**Selection Highlighting:**
- Use Blender's native orange selection color
- For emphasis, add subtle glow or arrow annotations
- Don't overuse highlights - only critical elements

**Typography:**
- Headers: Bold, clear sans-serif (18-24pt)
- Body text: Regular weight (12-14pt)
- Callouts: Medium weight (14-16pt) with clear arrows
- Code/values: Monospace font for technical accuracy

**Annotation Style:**
- Arrows: Simple, solid, colored appropriately
- Callout boxes: Semi-transparent with rounded corners
- Labels: Clear, concise, positioned to avoid obscuring content
- Distance lines: Dashed when showing measurements

### Accessibility Considerations

**Color Blindness:**
- Don't rely on color alone - add patterns, labels, or symbols
- Test critical images with color blindness simulator
- Use high contrast between foreground and background
- Avoid red-green only distinctions (use red-blue or green-blue)

**Text Readability:**
- Minimum 12pt font size for body text
- High contrast text on backgrounds (white on dark or dark on light)
- Avoid placing text over busy backgrounds
- Include text alternatives (alt text) for all images

**Visual Clarity:**
- Maintain adequate whitespace/breathing room
- Group related elements together
- Use consistent visual hierarchy
- Ensure crisp, clear image rendering at target resolution

**Screen Reader Support:**
- All diagrams should have descriptive alt text
- Complex technical diagrams should include text descriptions in lesson
- Don't convey information through color only

### Technical Specifications

**Screenshot Resolution:** 
- Minimum: 1920x1080 (Full HD)
- Preferred: 2560x1440 (2K) for future-proofing
- Node trees may be wider (panoramic) if needed for readability

**Image Formats:**
- PNG for screenshots, diagrams with transparency, UI elements
- JPG for photorealistic renders (quality 90-95%)
- SVG for vector diagrams, charts, infographics
- Avoid GIF (outdated, poor quality)

**File Size Targets:**
- Screenshots/UI: < 500KB (PNG optimized)
- Renders: < 1MB (JPG 90% quality)
- SVG: < 200KB (optimized paths)
- If larger needed for quality, that's acceptable

**Compression:**
- PNG: Use PNG optimization tools (pngquant, optipng)
- JPG: 90-95% quality, optimize for web
- SVG: Optimize/clean paths, remove unnecessary metadata

**Responsive Sizing:**
- Images should be legible when scaled to 50% (mobile view)
- Critical text/details should remain readable at smaller sizes
- Consider providing high-res versions via link for complex diagrams

### Special Considerations for This Lesson

**Node Tree Complexity:**
- Lesson 41 has very complex multi-section node trees
- May require multiple detail shots rather than single overview
- Consider progressive reveals showing sections being built
- Use frame labels extensively in screenshots

**Three Major Projects:**
- Each project (Terrain, Ivy, Building) needs complete visual documentation
- Balance between showing process and final results
- Include "checkpoint" images at key phases
- Node trees for projects can be panoramic format if needed

**Performance/Optimization Theme:**
- Before/after comparisons critical for optimization section
- Show performance metrics where relevant (FPS, vertex counts)
- Demonstrate LOD differences visually
- Make efficiency gains obvious in visualizations

**Advanced Technical Content:**
- Audience is intermediate to advanced students
- Can include more technical detail in diagrams
- Don't oversimplify - show real-world complexity
- Include actual node setups, not simplified icons

### Production Notes

**Blender Scene Setup:**
- Create reusable template scenes for each project
- Save camera positions for consistent angles across related images
- Set up standard lighting rigs for beauty shots
- Use consistent materials for diagrams (glass, metal, plastic presets)

**Lighting Setup:**
- Viewport screenshots: Use Blender's default lighting or MatCap
- Rendered beauty shots: Three-point lighting or HDRI environment
- Technical diagrams: Even, shadowless lighting for clarity
- Comparisons: Consistent lighting across all panels

**Camera Angles:**
- Save camera bookmarks for repeated shots
- Use same focal length for comparison panels (35mm or 50mm)
- Isometric views: 30-degree angle from horizontal
- Top-down views: Pure orthographic for patterns

**Batch Processing:**
- Render beauty shots in batch for consistent quality
- Create image templates with standard dimensions
- Use Blender's compositor for consistent post-processing
- Save render settings presets for efficiency

**Version Control:**
- Save .blend files for all complex images
- Keep layered source files (PSD, SVG working files)
- Version naming: lesson_41_XX_descriptive_name_v01.blend
- Archive source files for future updates

**Template Reuse:**
- Create reusable node tree templates for screenshots
- Build standard annotation styles (arrows, callouts, labels)
- Develop lighting rig presets for different shot types
- Standard camera rigs for comparisons

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes (#RRGGBB), style guidance
- [x] SVG recommendations are justified with clear rationale (simple shapes, text, diagrams)
- [x] Placement suggestions reference actual HTML section IDs (id="section-name")
- [x] File naming follows consistent convention with descriptive names (lesson_41_##_description.ext)
- [x] Priority ranking is logical and justified with clear rationale (High = essential concepts, Medium = helpful examples, Low = supplementary)
- [x] Style/accessibility notes are comprehensive and practical (color palette, typography, contrast)
- [x] Output is well-organized with clear sections and easy navigation
- [x] Technical specifications cover all production needs (resolution, formats, compression)
- [x] Special considerations address lesson-specific requirements (three projects, complex node trees, optimization theme)

---

## Additional Recommendations

### Image Creation Workflow

**Phase 1: High Priority (Week 1)**
1. Create all project final result renders (#25, #29, #34) - motivational goals
2. Generate foundational concept images (#2, #3, #9) - core understanding
3. Build essential comparison images (#1, #10, #19) - critical distinctions
4. Develop key technical diagrams (#21, #41) - important mechanics

**Phase 2: Medium Priority (Week 2)**
1. Complete project node tree overviews (#26, #32, #40)
2. Generate practical example screenshots (#6, #7, #11, #15)
3. Create project detail images (#27, #31, #35, #36)
4. Build performance/optimization visuals (#41, #43)
5. Develop reference charts (#47 SVG, #48 SVG)

**Phase 3: Lower Priority (Week 3)**
1. Create supplementary field visualizations (#4, #5, #8 SVG)
2. Generate additional noise examples (#12, #13)
3. Build distribution comparisons (#16, #17, #18, #20)
4. Create proximity variations (#22, #23, #24)
5. Complete project detail shots (#28, #30, #33, #37, #38, #39)
6. Finalize optimization examples (#42, #44, #45, #46)
7. Create pattern galleries (#49, #50 SVG)

### Alternative Approaches

**Video Clips:** Consider short 10-15 second video clips for:
- Parameter adjustment demonstrations (slider changes → instant updates)
- Node tree navigation (zooming in/out, highlighting sections)
- Viewport interaction (rotating, examining details)
- Animation of procedural generation process

**Interactive Elements:** Where possible, provide:
- Downloadable .blend files for each project
- Interactive parameter exploration (embedded if web allows)
- Before/after sliders for comparison images
- Zoom-able high-resolution node tree diagrams

**Downloadable Assets:**
- Complete project .blend files (terrain, ivy, building generators)
- Node group libraries (.blend asset files)
- Parameter preset collections (JSON or .blend)
- Optimization templates

### Future Enhancements

**Lesson Update Considerations:**
- If Blender version updates significantly, update UI screenshots
- Add images for any new Geometry Nodes features
- Refresh project examples to showcase latest capabilities
- Update optimization techniques as performance improves

**Student Feedback Integration:**
- Monitor which sections students find confusing
- Add clarifying images based on common questions
- Create additional comparison images for frequently confused concepts
- Develop troubleshooting visual guides for common errors

**Portfolio Gallery:**
- Showcase student variations of project results
- Create "inspiration gallery" of advanced modifications
- Document creative applications of taught techniques
- Share community-created extensions

---

## Revision Notes

**Version 1.0** - November 12, 2025
- Initial comprehensive image requirements document for Lesson 41
- 50 images identified covering all major concepts and three complete projects
- Detailed AI generation prompts with technical specifications
- SVG recommendations for 5 reference/infographic images
- Organized placement suggestions mapped to HTML section IDs
- Three-tier priority ranking (High: 10, Medium: 16, Low: 24)
- Complete style guide and technical specifications
- Production workflow and quality checklist included
- Special considerations for advanced technical content and complex node systems

**Document Purpose:**
This comprehensive requirements document serves as the complete blueprint for creating all visual assets for Lesson 41: Procedural Modeling with Nodes. It provides detailed guidance for image generation, organization, and integration to ensure consistent, high-quality educational materials that effectively support the advanced Geometry Nodes curriculum.
