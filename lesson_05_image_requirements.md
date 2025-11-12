# Image Requirements for Lesson 05: Understanding Meshes and Geometry

## Task Summary
**Lesson:** lesson_05_understanding_meshes_and_geometry.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 05

### **1. Mesh Components Labeled Diagram**
- **Purpose:** Visually demonstrate vertices, edges, and faces on a simple cube
- **Type:** Annotated screenshot or technical diagram
- **Shows:** A cube in Edit Mode with clear labels pointing to a vertex (corner point), an edge (line), and a face (surface), with dotted lines and arrows indicating each component

### **2. Low-Poly to High-Poly Progression**
- **Purpose:** Show how polygon count affects smoothness
- **Type:** Composite screenshot (4-panel horizontal)
- **Shows:** Four spheres side by side with increasing density: 8 segments (diamond-like), 16 segments, 32 segments (smooth), 64 segments (very smooth), all in wireframe mode

### **3. Mesh Data vs Object Properties Visualization**
- **Purpose:** Illustrate the distinction between object container and mesh data
- **Type:** Technical diagram or composite screenshot
- **Shows:** Split view showing the same cube - one side highlighting object properties (location, rotation, scale in properties panel), other side showing mesh data (vertices, edges, faces in Edit Mode)

### **4. Primitive Mesh Types Reference Grid**
- **Purpose:** Quick visual reference of all primitive meshes
- **Type:** Composite screenshot (grid layout)
- **Shows:** 8 primitives in 2x4 grid: Plane, Cube, UV Sphere, Ico Sphere, Cylinder, Cone, Torus, Suzanne - each in wireframe mode with vertex count labeled below

### **5. Vertex Selection Mode Example**
- **Purpose:** Show what vertex selection looks like in Edit Mode
- **Type:** Screenshot
- **Shows:** Cube in Edit Mode with vertex selection mode active, several vertices selected (orange), showing the dots at corners clearly visible

### **6. Edge Selection Mode Example**
- **Purpose:** Show what edge selection looks like in Edit Mode
- **Type:** Screenshot
- **Shows:** Cube in Edit Mode with edge selection mode active, several edges selected (orange), demonstrating the wireframe lines

### **7. Face Selection Mode Example**
- **Purpose:** Show what face selection looks like in Edit Mode
- **Type:** Screenshot
- **Shows:** Cube in Edit Mode with face selection mode active, one or two faces selected (orange highlight), showing surface selection

### **8. Mesh Density Comparison - Sphere**
- **Purpose:** Dramatic visualization of low vs high poly
- **Type:** Composite screenshot (2-panel)
- **Shows:** Same size spheres side by side - left: 8 segments/4 rings (very faceted), right: 64 segments/32 rings (smooth), both in solid shading with wireframe overlay

### **9. Smooth vs Flat Shading Comparison**
- **Purpose:** Show the dramatic effect of shading mode
- **Type:** Composite screenshot (2-panel)
- **Shows:** Same low-poly sphere (16 segments) - left panel with flat shading (clearly faceted), right panel with smooth shading (appears round)

### **10. Face Normals Visualization**
- **Purpose:** Show what normals look like and their direction
- **Type:** Screenshot with annotations
- **Shows:** UV Sphere in Edit Mode with face normals displayed as blue lines, arrows pointing outward from faces, with annotation "Normals point OUTWARD from surface"

### **11. Flipped Normals Problem**
- **Purpose:** Demonstrate incorrect normal direction and its visual effect
- **Type:** Composite screenshot (2-panel)
- **Shows:** Object with face orientation overlay - left: some faces blue (correct), some red (flipped); right: after recalculation, all faces blue

### **12. Triangle Polygon Diagram**
- **Purpose:** Clear illustration of a triangle face
- **Type:** Technical diagram/SVG
- **Shows:** Large triangle with 3 vertices marked as orange dots, 3 edges as thick lines, center labeled "3-sided face (Triangle)", clean minimal style

### **13. Quad Polygon Diagram**
- **Purpose:** Clear illustration of a quad face
- **Type:** Technical diagram/SVG
- **Shows:** Large square/quad with 4 vertices marked as orange dots, 4 edges as thick lines, center labeled "4-sided face (Quad)", clean minimal style

### **14. N-gon Polygon Diagram**
- **Purpose:** Clear illustration of an n-gon face
- **Type:** Technical diagram/SVG
- **Shows:** Pentagon or hexagon with 5-6 vertices marked as orange dots, edges as thick lines, center labeled "5+ sided face (N-gon)", clean minimal style

### **15. Polygon Type Comparison Grid**
- **Purpose:** Quick reference showing all three polygon types
- **Type:** SVG diagram or composite
- **Shows:** Three panels side by side - Triangle (labeled "3 sides - Stable"), Quad (labeled "4 sides - Preferred"), N-gon (labeled "5+ sides - Problematic")

### **16. UV Sphere Topology Analysis**
- **Purpose:** Show triangle vs quad distribution on sphere
- **Type:** Composite screenshot (2-panel)
- **Shows:** UV Sphere in Edit Mode - left: triangles at poles selected (orange), right: quads in middle section selected (orange)

### **17. Edge Loop Selection Example**
- **Purpose:** Demonstrate edge loop selection on cylinder
- **Type:** Screenshot
- **Shows:** Cylinder in Edit Mode with one complete horizontal edge loop selected (orange), showing how Alt+Click selects entire loop

### **18. Good vs Bad Topology Comparison**
- **Purpose:** Show the difference between clean and problematic topology
- **Type:** Composite diagram (2-panel)
- **Shows:** Left: clean quad-based mesh with good edge flow (labeled "Good - Even quads, clear loops"); Right: messy triangulated mesh with random edge flow (labeled "Bad - Mixed polygons, chaotic flow")

### **19. Edge Flow on Character Head**
- **Purpose:** Demonstrate proper topology following facial contours
- **Type:** Reference diagram or screenshot
- **Shows:** Simplified head model in wireframe showing edge loops around eyes, mouth, and following facial muscle flow with colored lines highlighting key loops

### **20. Manifold Geometry Diagram**
- **Purpose:** Illustrate what manifold geometry means
- **Type:** Technical diagram/SVG
- **Shows:** Simple cube diagram with callout showing one edge with exactly 2 faces connected, labeled "Manifold: Every edge has EXACTLY 2 faces"

### **21. Non-Manifold Edge Types**
- **Purpose:** Show different types of non-manifold problems
- **Type:** Technical diagram (4-panel grid)
- **Shows:** Four examples - "Boundary Edge (1 face)", "Triple Edge (3+ faces)", "Isolated Vertex", "Wire Edge" - each illustrated clearly

### **22. Non-Manifold Geometry Visual Example**
- **Purpose:** Real example of non-manifold selection in Blender
- **Type:** Screenshot
- **Shows:** Cube in Edit Mode with one face deleted, non-manifold edges selected (shown in orange/red), clearly showing the hole's boundary edges

### **23. Mesh Density Decision Flowchart**
- **Purpose:** Help students decide appropriate poly count
- **Type:** SVG flowchart
- **Shows:** Decision tree with questions like "Real-time use?" → Yes → Low-poly, "Close-up view?" → Yes → High-poly, etc.

### **24. Topology Pole Types Diagram**
- **Purpose:** Illustrate 3-pole, 4-pole, 5-pole, 6-pole vertices
- **Type:** Technical diagram/SVG
- **Shows:** Four vertex configurations showing 3 edges meeting (triangle), 4 edges (quad), 5 edges (acceptable pole), 6+ edges (problematic pole)

### **25. Shading Mode Toggle Location**
- **Purpose:** Show where to find smooth/flat shading in interface
- **Type:** Screenshot with annotation
- **Shows:** Right-click context menu in Blender with "Shade Smooth" and "Shade Flat" options highlighted with arrows

### **26. Component Count Display Location**
- **Purpose:** Show where vertex/edge/face counts appear in viewport
- **Type:** Annotated screenshot
- **Shows:** Blender Edit Mode interface with red arrow/box pointing to top header showing "Verts: 482 | Edges: 960 | Faces: 480"

### **27. Select By Trait Menu**
- **Purpose:** Show where to find polygon type selection tools
- **Type:** Screenshot with annotation
- **Shows:** Select menu dropdown with "Select All by Trait" submenu expanded, showing "Triangles", "Quads", "N-gons", "Non-Manifold" options

### **28. Overlays Normal Visualization Toggle**
- **Purpose:** Show how to enable normal display
- **Type:** Screenshot with annotation
- **Shows:** Viewport overlays dropdown menu with "Normals" section highlighted, showing face/vertex normal size slider

### **29. Inset Operation Creating N-gon**
- **Purpose:** Visual example of how n-gons are created
- **Type:** Composite screenshot (3-step)
- **Shows:** Three panels: 1) Cube face selected, 2) After inset operation, 3) After deleting inner face (showing n-gon border)

### **30. Real-World Object Topology Examples**
- **Purpose:** Show professional topology on common objects
- **Type:** Composite screenshot (3-panel)
- **Shows:** Three common objects (cup, chair, character) in wireframe showing clean topology patterns

---

## AI Image Generation Prompts

### **Prompt 1: Mesh Components Labeled Diagram**
```
Create a professional technical diagram showing a 3D cube in Edit Mode with clearly labeled mesh components. The cube should be rendered in wireframe with solid edges visible. Three callout labels with arrows pointing to: 1) A VERTEX (corner point) labeled "Vertex - Point in 3D space", 2) An EDGE (line between vertices) labeled "Edge - Connects 2 vertices", and 3) A FACE (surface) labeled "Face - Surface made of 3+ vertices". Use dark grey background (#2b2b2b), bright orange highlights for the selected components (#ff8c00), white edges for the cube, and clear sans-serif font for labels. Professional educational style, clean and minimal, high contrast for clarity.
```

### **Prompt 2: Low-Poly to High-Poly Progression**
```
Create a horizontal 4-panel comparison showing sphere density progression. Four UV spheres of equal size arranged left to right showing: Panel 1: 8 segments (very angular diamond shape), Panel 2: 16 segments (somewhat rounded), Panel 3: 32 segments (smooth sphere), Panel 4: 64 segments (very smooth sphere). All spheres shown in cyan/white wireframe on dark grey background (#2b2b2b). Below each sphere, label with polygon count: "32 faces", "128 faces", "512 faces", "2048 faces". Clean technical illustration style, professional training material aesthetic, even lighting, clear wireframe visibility.
```

### **Prompt 3: Mesh Data vs Object Properties Visualization**
```
Create a split-screen technical diagram showing the distinction between Object and Mesh Data. Left side: cube with property labels pointing to "Location (X, Y, Z)", "Rotation", "Scale", "Name" - representing the Object container. Right side: same cube in Edit Mode wireframe showing vertices, edges, faces with labels "Vertices (8)", "Edges (12)", "Faces (6)" - representing Mesh Data. Use a vertical dividing line down the middle. Dark background, bright orange highlights for selected elements, professional typography, clean technical illustration style. Add title at top: "Object vs Mesh Data".
```

### **Prompt 4: Primitive Mesh Types Reference Grid**
```
Create an 8-panel grid (2 rows × 4 columns) showing Blender's primitive mesh types in wireframe. Top row: Plane (single square), Cube (box), UV Sphere (latitude/longitude sphere), Ico Sphere (triangulated sphere). Bottom row: Cylinder (tube), Cone (pointed cylinder), Torus (donut), Suzanne (monkey head). All shown in cyan/white wireframe on dark grey background (#2b2b2b). Below each primitive, label with name and vertex count in small text. Even spacing, centered composition, professional reference chart style, clean and organized layout.
```

### **Prompt 5: Vertex Selection Mode Example**
```
Create a Blender Edit Mode screenshot showing vertex selection mode on a cube. Display the cube in perspective view with 4-5 vertices selected and highlighted in bright orange (#ff8c00). Show orange dots at each vertex point (corners) with selected vertices clearly brighter. Include the vertex selection mode icon (single dot) in the top-left toolbar area highlighted or with arrow. Dark grey viewport background (#2b2b2b), white/grey edges on unselected vertices. Professional training screenshot style, clear and educational.
```

### **Prompt 6: Edge Selection Mode Example**
```
Create a Blender Edit Mode screenshot showing edge selection mode on a cube. Display the cube in perspective view with 3-4 edges selected and highlighted in bright orange (#ff8c00). Show the wireframe with selected edges significantly brighter and thicker. Include the edge selection mode icon (single line) in the top-left toolbar area highlighted or with arrow. Dark grey viewport background (#2b2b2b), white/grey edges on unselected edges. Professional training screenshot style, clear selection visibility.
```

### **Prompt 7: Face Selection Mode Example**
```
Create a Blender Edit Mode screenshot showing face selection mode on a cube. Display the cube in perspective view with 2 visible faces selected and highlighted in bright orange (#ff8c00). Show solid face highlighting with visible edges. Include the face selection mode icon (triangle) in the top-left toolbar area highlighted or with arrow. Dark grey viewport background (#2b2b2b), darker grey on unselected faces. Professional training screenshot style, clear surface selection visible.
```

### **Prompt 8: Mesh Density Comparison - Sphere**
```
Create a side-by-side comparison showing two UV spheres of equal size. Left sphere: very low density with 8 segments and 4 rings, appearing diamond-shaped and highly faceted. Right sphere: high density with 64 segments and 32 rings, appearing perfectly smooth. Both spheres shown with wireframe overlay on solid shading, bright orange outline edges. Dark grey background (#2b2b2b). Labels below: "Low-Poly: 32 faces" and "High-Poly: 2048 faces". Professional technical comparison style, dramatic difference clearly visible, clean composition.
```

### **Prompt 9: Smooth vs Flat Shading Comparison**
```
Create a side-by-side comparison of the same low-poly sphere (16 segments) with different shading modes. Left panel: sphere with flat shading showing clearly visible facets and polygon edges. Right panel: exact same sphere with smooth shading appearing round and smooth despite same geometry. Both on dark grey background (#2b2b2b), even lighting. Labels below: "Flat Shading - Faceted" and "Smooth Shading - Smooth". Dramatic visual difference, professional educational style, same camera angle for both.
```

### **Prompt 10: Face Normals Visualization**
```
Create a Blender Edit Mode screenshot showing a UV sphere with face normals displayed as blue lines/arrows sticking out from each face. The normal lines should be clearly visible, pointing radially outward from the sphere surface. Show in wireframe or solid with wireframe overlay. Add annotation text with arrow: "Face normals point OUTWARD from surface". Dark grey background (#2b2b2b), cyan/white wireframe, bright blue normal lines. Professional training screenshot style, normals clearly visible at good length.
```

### **Prompt 11: Flipped Normals Problem**
```
Create a 2-panel comparison showing face orientation. Left panel: sphere with Face Orientation overlay enabled, showing mix of blue faces (correct normals) and red faces (flipped normals) scattered across surface. Right panel: same sphere after normal recalculation, all faces showing blue (correct). Dark background, clear blue and red coloring. Labels below: "Before: Flipped Normals (red)" and "After: Recalculated (all blue)". Professional educational style, problem and solution clearly shown.
```

### **Prompt 12: Triangle Polygon Diagram**
```
Create a clean vector diagram of a triangle face. Large equilateral triangle with three vertices shown as bright orange dots (#ff8c00) at corners, edges as thick white/cyan lines, filled with semi-transparent light blue. Center label: "TRIANGLE - 3 sides" in bold text. Dark grey background (#2b2b2b). Minimal technical illustration style, geometric precision, educational diagram aesthetic. Size should emphasize the triangle shape clearly. Clean, professional, suitable for technical documentation.
```

### **Prompt 13: Quad Polygon Diagram**
```
Create a clean vector diagram of a quad face. Large square/quadrilateral with four vertices shown as bright orange dots (#ff8c00) at corners, edges as thick white/cyan lines, filled with semi-transparent light blue. Center label: "QUAD - 4 sides" in bold text. Dark grey background (#2b2b2b). Minimal technical illustration style, geometric precision, educational diagram aesthetic. Size should emphasize the square shape clearly. Clean, professional, suitable for technical documentation.
```

### **Prompt 14: N-gon Polygon Diagram**
```
Create a clean vector diagram of an n-gon face. Large hexagon (6 sides) with six vertices shown as bright orange dots (#ff8c00) at corners, edges as thick white/cyan lines, filled with semi-transparent light blue. Center label: "N-GON - 5+ sides" in bold text. Dark grey background (#2b2b2b). Minimal technical illustration style, geometric precision, educational diagram aesthetic. Size should emphasize the multi-sided polygon clearly. Clean, professional, suitable for technical documentation.
```

### **Prompt 15: Polygon Type Comparison Grid**
```
Create a 3-panel horizontal comparison showing all polygon types. Panel 1: Triangle labeled "TRIANGLES - 3 sides, Stable, Always flat". Panel 2: Square/quad labeled "QUADS - 4 sides, Preferred, Subdivision-friendly" with green checkmark or highlight. Panel 3: Hexagon labeled "N-GONS - 5+ sides, Problematic, Avoid". Each polygon with vertices as orange dots, thick edges. Dark grey background (#2b2b2b). Clean technical diagram style, equal panel sizes, professional reference chart aesthetic. The quad panel should appear most prominent or have green highlight to show preference.
```

### **Prompt 16: UV Sphere Topology Analysis**
```
Create a 2-panel comparison showing polygon type distribution on a UV sphere. Left panel: UV sphere in Edit Mode with triangular faces at top and bottom poles selected in bright orange, rest of sphere in grey wireframe. Label: "Triangles at poles". Right panel: same sphere with all quad faces in middle section selected in bright orange, poles unselected grey. Label: "Quads in middle section". Dark grey background (#2b2b2b), clear wireframe, bright orange highlighting. Professional educational comparison showing typical sphere topology pattern.
```

### **Prompt 17: Edge Loop Selection Example**
```
Create a Blender Edit Mode screenshot showing edge loop selection on a cylinder. Display cylinder in perspective view with one complete horizontal edge loop selected (bright orange #ff8c00), wrapping completely around the cylinder. All edges of the loop should be highlighted uniformly. Show in wireframe or solid with edge overlay. Dark grey background (#2b2b2b). Add small annotation: "Alt + Click selects complete loop". Professional training screenshot style, loop selection clearly visible as continuous orange ring.
```

### **Prompt 18: Good vs Bad Topology Comparison**
```
Create a 2-panel side-by-side comparison showing mesh topology quality. Left panel: clean mesh surface with even quads, regular edge flow, organized loops - labeled "GOOD TOPOLOGY" with green checkmark. "Even quads, Clear loops, Deforms well". Right panel: messy mesh with mixed triangles/n-gons, chaotic edge flow, uneven density - labeled "BAD TOPOLOGY" with red X. "Mixed polygons, Chaotic flow, Deforms poorly". Both shown in wireframe on dark background (#2b2b2b). Professional technical comparison style, clear visual difference in organization.
```

### **Prompt 19: Edge Flow on Character Head**
```
Create a simplified wireframe head model showing proper edge loop topology. Display front 3/4 view of stylized head with colored edge loops highlighting: circular loops around eyes (blue), loops around mouth (red), loops following muscle flow on cheeks (green), horizontal loops for facial zones (yellow). Clean wireframe on dark grey background (#2b2b2b). Professional character topology reference style, colored lines clearly showing edge flow patterns. Educational diagram aesthetic, emphasizing how loops follow facial contours.
```

### **Prompt 20: Manifold Geometry Diagram**
```
Create a technical diagram illustrating manifold geometry concept. Show a simple cube or box shape in wireframe with a callout zooming into one edge. The callout should clearly show that edge connecting exactly 2 faces (shown as two surfaces meeting at the edge). Label: "MANIFOLD GEOMETRY - Every edge has EXACTLY 2 faces" with green checkmark. Dark grey background (#2b2b2b), bright edges, clear annotation arrows. Clean technical illustration style, educational diagram aesthetic, concept clearly demonstrated.
```

### **Prompt 21: Non-Manifold Edge Types**
```
Create a 4-panel grid showing non-manifold geometry types. Panel 1: "Boundary Edge" - edge with only 1 face (hole). Panel 2: "Triple Edge" - edge with 3 faces meeting. Panel 3: "Isolated Vertex" - single floating vertex point. Panel 4: "Wire Edge" - edge with no faces. Each panel shows simple diagram of the problem with red highlighting on problematic element. Dark grey background (#2b2b2b), clean technical illustration, equal-sized panels in 2×2 grid. Educational reference chart style with clear labels and red warning indicators.
```

### **Prompt 22: Non-Manifold Geometry Visual Example**
```
Create a Blender Edit Mode screenshot showing non-manifold geometry selection. Display a cube with one face deleted (creating a hole/open box). The boundary edges around the hole should be selected and highlighted in bright red-orange or orange (#ff8c00). Show in wireframe or solid mode with visible edges. Dark grey background (#2b2b2b). Add annotation: "Non-manifold boundary edges selected" with arrow pointing to hole. Professional training screenshot style, the open edges clearly visible and highlighted.
```

### **Prompt 23: Mesh Density Decision Flowchart**
```
Create a decision tree flowchart for choosing mesh density. Start node: "Mesh Density Decision". Branch 1: "Real-time use?" → Yes → "LOW-POLY (games, VR, AR)". Branch 2: "Close-up renders?" → Yes → "HIGH-POLY (film, product viz)". Branch 3: "Will it deform?" → Yes → "MEDIUM-POLY with good loops". Branch 4: "Background object?" → Yes → "LOW-POLY". Use rounded rectangle nodes in blue gradient, arrows connecting them, decision diamonds in orange. Dark grey background (#2b2b2b), clean flowchart style, professional infographic aesthetic.
```

### **Prompt 24: Topology Pole Types Diagram**
```
Create a 4-panel technical diagram showing different pole types (vertices where edges meet). Panel 1: 3 edges meeting (triangle vertex) - labeled "3-POLE - Generally OK" in green. Panel 2: 4 edges meeting (quad vertex) - labeled "4-POLE - Ideal" in bright green. Panel 3: 5 edges meeting - labeled "5-POLE - Minimize" in yellow/orange. Panel 4: 6+ edges meeting - labeled "6+ POLE - Problematic" in red. Each shows simple line diagram of edges converging at vertex point. Dark background (#2b2b2b), color-coded by acceptability, clean technical style.
```

### **Prompt 25: Shading Mode Toggle Location**
```
Create a Blender interface screenshot showing the right-click context menu. Display menu with "Shade Smooth" and "Shade Flat" options visible and highlighted with bright outline or arrow annotation. Show this menu appearing over a simple object (cube or sphere) in viewport. Dark Blender interface theme, clear menu text, professional UI screenshot style. Add red arrow or red box highlighting these two options with text note: "Right-click → Shading mode". Clear UI element visibility for educational purposes.
```

### **Prompt 26: Component Count Display Location**
```
Create a Blender Edit Mode interface screenshot showing the top header bar. Focus on the component count display showing "Verts: 482 | Edges: 960 | Faces: 480" or similar statistics. Highlight this area with bright red box or arrow annotation pointing to it. Show some object selected in viewport below. Dark Blender interface theme. Add label: "Component counts displayed here in Edit Mode". Professional UI tutorial screenshot style, clear UI element identification.
```

### **Prompt 27: Select By Trait Menu**
```
Create a Blender Edit Mode interface screenshot showing the Select menu dropdown expanded. Show the "Select All by Trait" submenu expanded with options visible: "Triangles", "Quads", "N-gons", "Non-Manifold", and other trait options. Highlight these specific options with red boxes or arrows. Dark Blender interface theme, clear menu text, professional UI screenshot style. Object visible in viewport background. Clear navigation path for educational purposes.
```

### **Prompt 28: Overlays Normal Visualization Toggle**
```
Create a Blender interface screenshot showing the Viewport Overlays dropdown menu. Focus on the "Normals" section with checkboxes for "Face" and "Vertex" normals, plus the size slider. Highlight this section with red box or arrow annotation. Show the overlays icon (two overlapping circles) in top-right of viewport. Dark Blender interface theme. Add label: "Enable normals display here". Professional UI tutorial screenshot style, clear path to feature.
```

### **Prompt 29: Inset Operation Creating N-gon**
```
Create a 3-panel step-by-step progression showing n-gon creation. Panel 1: Cube face selected (orange highlight), labeled "1. Select face". Panel 2: After inset operation showing inner square created, labeled "2. Inset face (I key)". Panel 3: After deleting inner face showing 8-sided border/hole, labeled "3. Delete inner face = N-gon". All on dark grey background (#2b2b2b), clear wireframe, bright orange selections. Professional tutorial sequence style, equal panel sizing, clear progression arrows between panels.
```

### **Prompt 30: Real-World Object Topology Examples**
```
Create a 3-panel comparison showing professional topology on common objects. Panel 1: Coffee cup in wireframe showing clean quad loops, cylindrical flow, handle topology. Panel 2: Simple chair in wireframe showing structural edge loops, seat plane, leg topology. Panel 3: Simple character head in wireframe showing facial edge loops, clean quad flow. All shown on dark grey background (#2b2b2b), cyan/white wireframe, professional modeling reference style. Labels below each: "Cup Topology", "Chair Topology", "Character Topology". Clean professional examples of good mesh structure.
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Triangle Polygon Diagram** (#12) - Simple geometric shape with labels, perfect for scalable vector format, no photo-realism needed
2. **Quad Polygon Diagram** (#13) - Simple geometric shape with labels, clean lines ideal for SVG
3. **N-gon Polygon Diagram** (#14) - Simple geometric shape with labels, vector format ensures perfect edges
4. **Polygon Type Comparison Grid** (#15) - Multiple simple geometric shapes with text, excellent SVG candidate
5. **Mesh Density Decision Flowchart** (#23) - Flowchart with boxes, arrows, and text - perfect for SVG, allows easy editing
6. **Topology Pole Types Diagram** (#24) - Simple line diagrams showing edge convergence, clean vector format ideal
7. **Mesh Data vs Object Properties Visualization** (#3) - Could be created as SVG diagram rather than screenshot, allowing better scalability
8. **Non-Manifold Edge Types** (#21) - Technical diagrams showing edge configurations, clean vector format preferred
9. **Manifold Geometry Diagram** (#20) - Simple technical illustration, perfect for SVG

**Rationale for SVG recommendations:** These images contain primarily geometric shapes, text labels, arrows, and simple line work. They require sharp edges at any zoom level, benefit from editability, and don't need photorealistic rendering or complex shading. SVG format ensures perfect clarity at any size and smaller file sizes.

---

## Image Placement Suggestions in HTML

### Section: What Are Meshes? (id="what-are-meshes")
- **After "The Mesh Concept" paragraph:** Insert Image #1 (Mesh Components Labeled Diagram) 
- **After "Real-World Analogy" card:** Insert Image #2 (Low-Poly to High-Poly Progression)
- **After "Mesh Data vs Object" explanation:** Insert Image #3 (Mesh Data vs Object Properties Visualization)
- **After "Mesh Types in Blender" list:** Insert Image #4 (Primitive Mesh Types Reference Grid)

### Section: The Building Blocks: Vertices, Edges, Faces (id="mesh-components")
- **After "Vertices: Points in Space" explanation:** Insert Image #5 (Vertex Selection Mode Example)
- **After "Edges: Connections Between Vertices" explanation:** Insert Image #6 (Edge Selection Mode Example)
- **After "Faces: Surfaces and Polygons" explanation:** Insert Image #7 (Face Selection Mode Example)
- **Within or after "Try It Now: Examine a Cube's Components" card:** Reference Images #5, #6, #7 as visual guide

### Section: Mesh Density and Resolution (id="mesh-density")
- **After "Understanding Mesh Density" paragraphs:** Insert Image #8 (Mesh Density Comparison - Sphere)
- **After "The Density Trade-off" explanation:** Insert Image #2 (could be reused here or reference earlier)
- **After "Try It Now: Compare Sphere Densities" exercise:** Insert Image #8 again or as visual confirmation

### Section: Normals: Inside vs Outside (id="normals")
- **After "What Are Normals?" explanation:** Insert Image #10 (Face Normals Visualization)
- **After "Flipped Normals: A Common Problem" list:** Insert Image #11 (Flipped Normals Problem)
- **After "Smooth vs Flat Shading" card explanations:** Insert Image #9 (Smooth vs Flat Shading Comparison)
- **Within "Try It Now: Smooth vs Flat" exercise:** Reference Image #9 as expected result

### Section: Triangles, Quads, and N-gons (id="polygon-types")
- **After "Triangles (Tris)" card:** Insert Image #12 (Triangle Polygon Diagram)
- **After "Quads (Quadrilaterals)" card:** Insert Image #13 (Quad Polygon Diagram)
- **After "N-gons" card:** Insert Image #14 (N-gon Polygon Diagram)
- **After Mermaid diagram:** Insert Image #15 (Polygon Type Comparison Grid) as visual summary
- **Within "Try It Now: Identify Polygon Types" exercise:** Insert Image #16 (UV Sphere Topology Analysis) as reference

### Section: Topology and Edge Flow (id="topology")
- **After "Edge Flow and Edge Loops" explanation:** Insert Image #17 (Edge Loop Selection Example)
- **Within "Try It Now: Select Edge Loops" exercise:** Reference Image #17 as visual guide
- **After "Why Topology Matters" card:** Insert Image #18 (Good vs Bad Topology Comparison)
- **After "Topology Patterns" explanation:** Insert Image #19 (Edge Flow on Character Head)
- **After "Topology Patterns" card:** Insert Image #24 (Topology Pole Types Diagram)

### Section: Manifold vs Non-Manifold Geometry (id="manifold-geometry")
- **After "What Is Manifold Geometry?" explanation:** Insert Image #20 (Manifold Geometry Diagram)
- **After "Non-Manifold Geometry Problems" card:** Insert Image #21 (Non-Manifold Edge Types)
- **Within "Try It Now: Finding Non-Manifold Elements" exercise:** Insert Image #22 (Non-Manifold Geometry Visual Example)

### Section: Project: Explore Mesh Structure (id="mesh-project")
- **After "Primitive Analysis" heading:** Insert Image #4 (Primitive Mesh Types Reference Grid) as reference
- **After "Density Exploration" heading:** Insert Image #8 (Mesh Density Comparison) as expected result reference
- **After "Polygon Type Investigation" heading:** Insert Image #15 (Polygon Type Comparison) as quick reference

### Section: Lesson Summary (id="summary")
- **Within "Essential Concepts Reference" card:** Insert Image #25 (Shading Mode Toggle Location)
- **Within "Essential Concepts Reference" card:** Insert Image #26 (Component Count Display Location)
- **Within "Essential Concepts Reference" card:** Insert Image #27 (Select By Trait Menu)

### Additional Supporting Images for Exercises
- **For UI location guidance:** Insert Image #28 (Overlays Normal Visualization Toggle) near normal visualization exercises
- **For operation demonstration:** Insert Image #29 (Inset Operation Creating N-gon) in Exercise 6 section
- **For reference inspiration:** Insert Image #30 (Real-World Object Topology Examples) in summary or "Learning Good Topology" section
- **For decision making:** Insert Image #23 (Mesh Density Decision Flowchart) in "When to Use Different Densities" section

---

## File Naming Convention

```
lesson_05_01_mesh_components_labeled.png
lesson_05_02_lowpoly_highpoly_progression.png
lesson_05_03_mesh_vs_object_properties.png
lesson_05_04_primitive_types_grid.png
lesson_05_05_vertex_selection_mode.png
lesson_05_06_edge_selection_mode.png
lesson_05_07_face_selection_mode.png
lesson_05_08_density_comparison_sphere.png
lesson_05_09_smooth_vs_flat_shading.png
lesson_05_10_face_normals_visualization.png
lesson_05_11_flipped_normals_problem.png
lesson_05_12_triangle_diagram.svg
lesson_05_13_quad_diagram.svg
lesson_05_14_ngon_diagram.svg
lesson_05_15_polygon_types_comparison.svg
lesson_05_16_sphere_topology_analysis.png
lesson_05_17_edge_loop_selection.png
lesson_05_18_good_bad_topology.png
lesson_05_19_character_edge_flow.png
lesson_05_20_manifold_geometry.svg
lesson_05_21_nonmanifold_types.svg
lesson_05_22_nonmanifold_example.png
lesson_05_23_density_decision_flowchart.svg
lesson_05_24_topology_pole_types.svg
lesson_05_25_shading_toggle_ui.png
lesson_05_26_component_count_ui.png
lesson_05_27_select_by_trait_menu.png
lesson_05_28_normals_overlay_toggle.png
lesson_05_29_inset_ngon_creation.png
lesson_05_30_realworld_topology_examples.png
```

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #1 - Mesh Components Labeled Diagram** - Core concept, shows the three fundamental building blocks that entire lesson revolves around
2. **Image #2 - Low-Poly to High-Poly Progression** - Critical visual for understanding mesh density concept
3. **Image #9 - Smooth vs Flat Shading Comparison** - Students need to see this dramatic difference to understand shading
4. **Image #10 - Face Normals Visualization** - Essential for understanding normal direction concept
5. **Images #12, #13, #14 - Triangle/Quad/N-gon Diagrams** - Core polygon type identification, referenced throughout
6. **Image #15 - Polygon Type Comparison Grid** - Quick reference students will use repeatedly
7. **Image #18 - Good vs Bad Topology Comparison** - Critical for understanding topology quality
8. **Image #20 - Manifold Geometry Diagram** - Core concept visualization
9. **Image #21 - Non-Manifold Edge Types** - Essential problem identification reference

**Rationale:** These images directly support the lesson's primary learning objectives - understanding mesh structure, component types, and topology fundamentals. Without these, key concepts remain abstract.

### Medium Priority (Helpful but not Critical)
10. **Image #3 - Mesh Data vs Object Properties** - Clarifies important distinction but concept can be understood from text
11. **Image #4 - Primitive Mesh Types Reference Grid** - Useful reference but primitives are demonstrated in exercises
12. **Images #5, #6, #7 - Selection Mode Examples** - Helpful visual confirmation of UI states
13. **Image #8 - Mesh Density Comparison** - Supplements #2, adds another viewing angle
14. **Image #11 - Flipped Normals Problem** - Shows problem-solution, helpful for troubleshooting
15. **Image #16 - UV Sphere Topology Analysis** - Demonstrates polygon distribution in real object
16. **Image #17 - Edge Loop Selection Example** - Shows important workflow technique
17. **Image #19 - Character Edge Flow** - Advanced topology example showing real application
18. **Image #22 - Non-Manifold Geometry Example** - Real-world visualization of problem
19. **Image #24 - Topology Pole Types** - Technical reference for advanced understanding

**Rationale:** These images enhance understanding and provide useful references but the concepts can be grasped through hands-on exercises if images aren't available.

### Lower Priority (Nice to Have)
20. **Images #25-28 - UI Location Screenshots** - Useful for complete beginners but UI can be explored
21. **Image #23 - Mesh Density Decision Flowchart** - Helpful decision aid but experience teaches this
22. **Image #29 - Inset Operation Creating N-gon** - Specific example of one operation
23. **Image #30 - Real-World Topology Examples** - Inspirational reference showing professional work

**Rationale:** These are supplementary materials that enhance the lesson experience but aren't necessary for grasping core concepts. Students can discover UI elements through exploration and will develop decision-making skills through practice.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:** Maintain consistent use of dark grey background (#2b2b2b), bright orange selection (#ff8c00), cyan/white wireframes, blue for normals
- **Blender Version:** All screenshots should use Blender 4.0+ interface for consistency
- **View Angles:** Use 3/4 perspective view for most objects to show depth; front/side views only when specifically needed
- **Selection Highlighting:** Always use bright orange (#ff8c00) for selected elements to match Blender's default theme
- **Typography:** Use clean sans-serif fonts (Arial, Helvetica, or Open Sans) for all labels and annotations
- **Annotation Style:** Arrows should be simple, bold, and highly visible - avoid decorative or thin arrows
- **Wireframe Clarity:** Ensure wireframes have sufficient contrast against background - use bright cyan or white edges

### Accessibility Considerations
- **Color Blindness:** Ensure red/green comparisons (like good/bad topology) also use icons (checkmarks/X) or labels
- **Alt Text Required:** Each image needs descriptive alt text explaining what's shown for screen readers
- **High Contrast:** Maintain high contrast ratios for all text and important elements
- **Text Size:** Keep label text large enough to read when images are scaled down
- **Diagram Simplicity:** SVG diagrams should be clean and not overly complex

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 source, can be cropped as needed
- **Image Format:** 
  - PNG for screenshots and raster diagrams (lossless)
  - SVG for vector diagrams (scalable)
  - JPG only for photorealistic renders if needed
- **File Size Target:** Keep individual images under 500KB when possible for web performance
- **Compression:** Use PNG optimization tools to reduce file size without quality loss
- **Responsive Sizing:** Images should work well at various viewport sizes (mobile to desktop)

### Special Considerations for This Lesson
- **Wireframe Visibility:** Many images show wireframe mode - ensure mesh structure is clearly visible
- **Edit Mode Indicators:** Screenshots showing Edit Mode should clearly show mode indicator in UI
- **Selection Highlighting:** Critical that selected components (orange) are highly visible against background
- **Mermaid Diagrams:** Lesson already has Mermaid diagrams - additional static images should complement, not duplicate
- **Exercise Integration:** Many "Try It Now" exercises could benefit from "expected result" images
- **Progressive Complexity:** Images should progress from simple (single cube) to complex (character topology) matching lesson flow

### Production Notes
- **Blender Scene Setup:** Create a master .blend file with all primitives and examples for screenshot consistency
- **Lighting Setup:** Use consistent viewport lighting (default Blender viewport lighting is fine)
- **Camera Angles:** Save camera positions for consistent angle across related screenshots
- **Batch Processing:** Screenshots can be taken in sequence during single Blender session
- **Version Control:** Keep source .blend files and original images for future updates
- **Template Reuse:** Some diagrams (polygon types, topology patterns) could be reused in future lessons

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes, style guidance, and context
- [x] SVG recommendations are justified with clear rationale
- [x] Placement suggestions reference actual HTML section IDs
- [x] File naming follows consistent convention with descriptive names
- [x] Priority ranking is logical and justified with clear rationale
- [x] Style/accessibility notes are comprehensive and practical
- [x] Output is well-organized with clear sections and easy navigation
- [x] Technical specifications cover all production needs
- [x] Special considerations address lesson-specific requirements

---

## Additional Recommendations

### Image Creation Workflow
1. **Phase 1 (High Priority):** Create images #1, #2, #9, #10, #12-15, #18, #20, #21 first
2. **Phase 2 (Medium Priority):** Create supporting images #3-8, #11, #16-17, #19, #22, #24
3. **Phase 3 (Lower Priority):** Create UI screenshots #25-28 and supplementary #23, #29, #30

### Alternative Approaches
- **Video Alternative:** Some complex operations (like edge loop selection) might benefit from short video clips or GIFs
- **Interactive Elements:** Consider interactive 3D model viewers for primitive types (Sketchfab embeds)
- **Annotation Overlays:** Some screenshots could use semi-transparent overlay annotations rather than external arrows
- **Before/After Sliders:** Smooth vs flat shading comparison could use an interactive slider

### Future Enhancements
- **Downloadable Assets:** Provide .blend files with example meshes for students to examine
- **Quiz Integration:** Images could be used for identification quizzes (identify polygon types, find problems)
- **Expanded Reference:** Create comprehensive "Topology Reference" page with more real-world examples
- **Student Gallery:** Collect and showcase student work showing good topology examples

---

## Revision History

- **Version 1.0** (November 11, 2025) - Initial analysis completed
  - 30 images identified across all major sections
  - 9 SVG diagram candidates identified
  - Detailed AI generation prompts created for all images
  - Comprehensive placement and priority recommendations provided
  - Style and technical guidelines established
