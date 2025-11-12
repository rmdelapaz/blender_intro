# Image Requirements for Lesson 12: UV Unwrapping Basics

## Task Summary
**Lesson:** lesson_12_uv_unwrapping_basics.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025
**Total Images Identified:** 28 images

---

## Image List for Lesson 12

### **1. UV Coordinate System Diagram**
- **Purpose:** Visualize the relationship between 3D space (X,Y,Z) and 2D texture space (U,V)
- **Type:** SVG Diagram
- **Shows:** Side-by-side comparison showing 3D cube with XYZ axes and 2D square with UV coordinates (0-1 range)

### **2. UV Space Grid Visualization**
- **Purpose:** Demonstrate the 0-1 UV square with coordinates labeled
- **Type:** SVG Diagram
- **Shows:** Square grid with corners labeled (0,0), (1,0), (0,1), (1,1), center at (0.5,0.5)

### **3. UV Mapping Process Illustration**
- **Purpose:** Show how 3D vertices map to 2D texture coordinates
- **Type:** Composite/Diagram
- **Shows:** 3D model point → UV coordinate → texture sample → colored surface

### **4. UV Islands Example**
- **Purpose:** Illustrate what UV islands look like and why they exist
- **Type:** Screenshot/Composite
- **Shows:** UV Editor with multiple distinct islands from unwrapped model, with labels

### **5. Good vs Bad Unwrap Comparison**
- **Purpose:** Visual comparison showing quality differences
- **Type:** Composite (2 panels)
- **Shows:** Left: good unwrap with minimal distortion; Right: bad unwrap with stretching

### **6. UV Editor Interface Overview**
- **Purpose:** Annotated guide to UV Editor components
- **Type:** Annotated Screenshot
- **Shows:** UV Editor with labels pointing to grid, islands, toolbar, header, sidebar

### **7. UV Selection Modes**
- **Purpose:** Show vertex, edge, and face selection in UV Editor
- **Type:** Composite (3 panels)
- **Shows:** Same UV island with different selection modes active

### **8. UV Grid Test Texture**
- **Purpose:** Show the standard checker pattern used for testing
- **Type:** Actual UV Grid texture
- **Shows:** Blender's built-in UV Grid pattern with numbered squares

### **9. UV Stretch Overlay Display**
- **Purpose:** Demonstrate the stretch visualization with color coding
- **Type:** Screenshot
- **Shows:** UV islands with stretch overlay (blue=good, green=ok, yellow/red=bad)

### **10. Seam Marking Example**
- **Purpose:** Show what marked seams look like on a 3D model
- **Type:** Screenshot
- **Shows:** Simple mesh in Edit Mode with red seam edges visible

### **11. Seam Placement Strategy Diagram**
- **Purpose:** Illustrate strategic seam placement principles
- **Type:** Diagram/Composite
- **Shows:** 3D model with arrows/annotations showing good seam locations (hidden areas)

### **12. Cube Seam Pattern**
- **Purpose:** Show standard unwrapping pattern for cube
- **Type:** Composite (2 panels)
- **Shows:** Left: 3D cube with seams marked; Right: resulting UV layout (cross pattern)

### **13. Cylinder Seam Pattern**
- **Purpose:** Show unwrapping pattern for cylindrical objects
- **Type:** Composite (2 panels)
- **Shows:** Left: cylinder with vertical seam; Right: resulting rectangular UV layout

### **14. Sphere Seam Pattern**
- **Purpose:** Show unwrapping challenges with spheres
- **Type:** Composite (2 panels)
- **Shows:** Left: sphere with longitude seams; Right: UV showing characteristic distortion

### **15. Unwrap Methods Comparison**
- **Purpose:** Visual comparison of different unwrapping methods
- **Type:** Composite (4 panels)
- **Shows:** Same object unwrapped with: Standard Unwrap, Smart UV Project, Cube Projection, Cylinder Projection

### **16. Project from View Example**
- **Purpose:** Demonstrate camera-based projection
- **Type:** Composite (2 panels)
- **Shows:** Left: viewport view of object; Right: resulting flattened projection in UV Editor

### **17. UV Manipulation Tools**
- **Purpose:** Show basic transformation operations on UVs
- **Type:** Composite (3 panels)
- **Shows:** UV island being moved, rotated, scaled with visual indicators

### **18. Pack Islands Before/After**
- **Purpose:** Demonstrate the Pack Islands operation
- **Type:** Composite (2 panels)
- **Shows:** Left: scattered UV islands; Right: efficiently packed layout

### **19. Average Island Scale Visualization**
- **Purpose:** Show texture density normalization
- **Type:** Composite (2 panels)
- **Shows:** Left: inconsistent island sizes; Right: proportionally scaled islands

### **20. UV Pinning Example**
- **Purpose:** Show pinned vertices (red) vs unpinned
- **Type:** Screenshot
- **Shows:** UV island with some vertices pinned (red dots) while others remain selectable

### **21. UV Mirroring Setup**
- **Purpose:** Demonstrate symmetrical UV layout
- **Type:** Composite (2 panels)
- **Shows:** Left: symmetrical model; Right: mirrored UVs sharing same space

### **22. Texture Density Test**
- **Purpose:** Show checker pattern for testing uniform density
- **Type:** Screenshot
- **Shows:** 3D model with UV Grid applied showing uniform square sizes across surface

### **23. UV Distortion Analysis**
- **Purpose:** Color-coded distortion visualization
- **Type:** Screenshot
- **Shows:** Model with stretch overlay showing blue/green (good) and red (bad) areas

### **24. Straightening UV Islands**
- **Purpose:** Show before/after of Follow Active Quads
- **Type:** Composite (2 panels)
- **Shows:** Left: skewed UV island; Right: perfectly rectangular straightened version

### **25. Overlapping UVs Detection**
- **Purpose:** Show how to identify accidental overlaps
- **Type:** Screenshot
- **Shows:** UV Editor with overlapping islands highlighted through Select Overlap

### **26. UV Workspace Layout**
- **Purpose:** Show optimal setup for UV work
- **Type:** Screenshot
- **Shows:** UV Editing workspace with 3D view (right) and UV Editor (left) side by side

### **27. Mug Project - Seam Placement**
- **Purpose:** Hands-on project reference
- **Type:** Annotated 3D Screenshot
- **Shows:** Coffee mug with seams marked in red, labeled for clarity

### **28. Mug Project - Final UV Layout**
- **Purpose:** Show completed project UVs
- **Type:** Screenshot
- **Shows:** UV Editor with mug's UV islands properly unwrapped and packed

---

## AI Image Generation Prompts

### **Prompt 1: UV Coordinate System Diagram**
```
Create a clean educational diagram showing UV coordinate system. Split into two panels side by side. Left panel: 3D cube in dark space (#2b2b2b background) with bright cyan XYZ axes labeled clearly. Right panel: 2D square representing UV space with U horizontal (0 to 1) and V vertical (0 to 1), corners labeled with coordinates. Use bright orange (#ff8c00) for UV axes. Connect the two panels with subtle arrows suggesting the mapping relationship. Professional technical illustration style, high contrast, clear labels in white sans-serif font. Educational diagram for 3D training material. 1920x1080 resolution, crisp and clean.
```

### **Prompt 2: UV Space Grid Visualization**
```
Create a technical diagram of UV space as a perfect square grid. Dark grey background (#2b2b2b). Square from 0.0 to 1.0 in both directions with grid lines every 0.1 units in subtle gray. Four corners clearly labeled: bottom-left (0,0), bottom-right (1,0), top-left (0,1), top-right (1,1). Center point marked with bright orange dot and labeled (0.5, 0.5). U-axis along bottom in bright orange, V-axis along left side in bright orange. Clean, technical style. Labels in white. Professional training material aesthetic. 1000x1000 square format.
```

### **Prompt 3: UV Mapping Process Illustration**
```
Create an educational flowchart showing UV mapping process. Dark background (#2b2b2b). Five connected stages from left to right: (1) 3D vertex with XYZ coordinates shown, (2) arrow to UV coordinates (U,V values), (3) arrow to 2D texture image with sample point highlighted, (4) arrow showing color being picked from texture, (5) final result: colored point on 3D surface. Use bright orange (#ff8c00) for highlights and connection arrows. White text labels for each stage. Clean, modern technical illustration style. Horizontal layout 1920x600. Professional training diagram.
```

### **Prompt 4: UV Islands Example**
```
Create a screenshot-style image of Blender's UV Editor showing UV islands. Dark interface background (#2b2b2b). Display 4-5 distinct UV islands of various shapes (rectangles, irregular polygons) scattered across the 0-1 grid. Islands should have bright cyan edges (#00bcd4) with semi-transparent blue fill. Show grid lines in background. Add subtle labels pointing to each island: "UV Island 1", "UV Island 2", etc. in white text with arrows. Professional Blender UI aesthetic. 1920x1080 resolution. Clean, clear educational visualization.
```

### **Prompt 5: Good vs Bad Unwrap Comparison**
```
Create a side-by-side comparison image showing good and bad UV unwraps. Dark background (#2b2b2b). Left panel labeled "GOOD UNWRAP" shows 3D sphere with uniform UV grid checker pattern (squares look square). Right panel labeled "BAD UNWRAP" shows 3D sphere with severely stretched checker pattern (rectangles instead of squares). Both on dark stands. Green checkmark on left, red X on right. Clean, professional technical comparison. Equal lighting. Educational training material style. 1920x1080 resolution, split vertically down middle.
```

### **Prompt 6: UV Editor Interface Overview**
```
Create an annotated screenshot of Blender's UV Editor interface. Dark theme (#2b2b2b background). Show main UV grid with several UV islands. Add bright orange callout arrows and labels pointing to: "Main UV Canvas", "Toolbar (left)", "Header (top)", "UV Grid 0-1", "UV Islands", "Sidebar (N panel)". Use white sans-serif font for labels with semi-transparent dark boxes behind text. Professional technical documentation style. Clean arrows that don't obscure interface. 1920x1080 resolution. Blender 4.0 style interface.
```

### **Prompt 7: UV Selection Modes**
```
Create a three-panel comparison showing UV selection modes. Dark background (#2b2b2b). Same UV island (rectangular shape) shown three times. Left panel: vertex select mode with individual points highlighted in orange. Center panel: edge select mode with edges highlighted in orange. Right panel: face select mode with entire faces filled in semi-transparent orange. Labels below each: "Vertex Mode (1)", "Edge Mode (2)", "Face Mode (3)". Clean, educational style. Each panel 600x600. Total layout 1920x680.
```

### **Prompt 8: UV Grid Test Texture**
```
Create a UV Grid test texture pattern. Alternating light and dark squares in a checkerboard with numbered sections. Each square should have numbers 0-9 in corners for orientation testing. High contrast black and white base with subtle colored accents (red, green, blue) at key reference points. Professional texture testing pattern. Seamless tileable design. 2048x2048 resolution. Clean, geometric, technical appearance suitable for 3D UV testing.
```

### **Prompt 9: UV Stretch Overlay Display**
```
Create an image of UV Editor showing stretch overlay visualization. Dark background (#2b2b2b). Display several UV islands with color-coded stretch overlay: majority in blue (#2196F3) indicating no distortion, some areas in green (#4CAF50) showing slight distortion, smaller sections in yellow (#FFC107), and problem areas in red (#F44336). Semi-transparent overlay on islands. Grid visible underneath. Legend in top right showing color meanings. Professional Blender-style visualization. 1920x1080.
```

### **Prompt 10: Seam Marking Example**
```
Create a 3D wireframe view of a simple mesh (cylinder or character-like form) in Edit Mode. Dark viewport background (#2b2b2b). Mesh shown in cyan wireframe. Several edges marked as seams displayed in bright red (#ff0000) - clearly thicker and more prominent than other edges. Some edges should form vertical line, others around top/bottom rims. Clean 3D viewport aesthetic. Slight perspective angle to show depth. Professional Blender viewport style. 1920x1080 resolution.
```

### **Prompt 11: Seam Placement Strategy Diagram**
```
Create an educational diagram showing strategic seam placement on a character-like 3D model. Dark background (#2b2b2b). Simple humanoid figure shown from front. Green arrows and checkmarks pointing to good seam locations: back, underarms, inner legs, under chin (labeled "GOOD - Hidden areas"). Red X marks on bad locations: face, chest, visible limbs (labeled "BAD - Visible areas"). Annotations in white text. Clean technical illustration style. Educational training diagram. 1200x1600 vertical format.
```

### **Prompt 12: Cube Seam Pattern**
```
Create a two-panel educational diagram for cube unwrapping. Dark background (#2b2b2b). Left panel: 3D cube shown in perspective with edges marked as seams in bright red forming a cross pattern (7 edges marked). Right panel: resulting UV layout showing cross/T-shape of six connected squares laid flat. Use bright cyan for cube edges, bright orange (#ff8c00) for UV layout. Clear labels: "3D Model with Seams" and "UV Layout". Professional technical illustration. 1920x1080 horizontal split.
```

### **Prompt 13: Cylinder Seam Pattern**
```
Create a two-panel diagram showing cylinder unwrapping. Dark background (#2b2b2b). Left panel: 3D cylinder with single vertical red seam line from top to bottom (back of cylinder). Optional seams around top and bottom cap edges. Right panel: UV layout showing rectangular strip (barrel) and two circles (caps). Bright cyan for cylinder, bright orange for UVs. Labels: "Single Vertical Seam" and "Rectangular + Circle UVs". Clean technical style. 1920x1080 horizontal format.
```

### **Prompt 14: Sphere Seam Pattern**
```
Create a two-panel diagram showing sphere unwrapping challenges. Dark background (#2b2b2b). Left panel: 3D sphere with longitude seam lines (like orange peel segments) marked in red. Right panel: UV layout showing characteristic stretched/pinched pattern at poles (top and bottom compression). Use bright cyan for sphere wireframe, bright orange for UV representation. Labels explaining pole pinching. Technical educational diagram style. 1920x1080.
```

### **Prompt 15: Unwrap Methods Comparison**
```
Create a four-panel grid comparison of unwrapping methods on same object (simple organic shape). Dark background (#2b2b2b). Each panel shows UV Editor result. Top-left: "Standard Unwrap" - few clean islands. Top-right: "Smart UV Project" - many small islands. Bottom-left: "Cube Projection" - six squares. Bottom-right: "Cylinder Projection" - rectangular strip. Each labeled clearly. Consistent object across all panels. Professional technical comparison. 1920x1080 in 2x2 grid.
```

### **Prompt 16: Project from View Example**
```
Create a two-panel diagram showing Project from View operation. Dark background (#2b2b2b). Left panel: 3D viewport camera view of object (front-facing logo or flat surface with text/pattern). Right panel: UV Editor showing resulting flat projection - exact match of what camera sees. Connect panels with arrow labeled "Project from View". Bright orange highlights. Professional technical demonstration. 1920x1080 horizontal split.
```

### **Prompt 17: UV Manipulation Tools**
```
Create a three-panel demonstration of UV transformation tools. Dark background (#2b2b2b). Same UV island shown three times. Left: Move operation (G key) with movement arrows in orange. Center: Rotate operation (R key) with circular rotation indicator. Right: Scale operation (S key) with outward/inward arrows. Labels: "Move (G)", "Rotate (R)", "Scale (S)". Clean educational style. 1920x720 format, three equal panels.
```

### **Prompt 18: Pack Islands Before/After**
```
Create a before/after comparison of Pack Islands operation. Dark background (#2b2b2b). Left panel labeled "BEFORE": UV islands scattered randomly with large gaps, poor space usage. Right panel labeled "AFTER": same islands efficiently packed, rotated optimally, filling 80% of 0-1 space with small uniform margins. Arrow in center showing transformation. Bright orange for UVs. Professional technical comparison. 1920x1080 horizontal split.
```

### **Prompt 19: Average Island Scale Visualization**
```
Create a before/after comparison showing texture density normalization. Dark background (#2b2b2b). Left panel "INCONSISTENT": UV islands of wildly different sizes - some huge, some tiny. Right panel "NORMALIZED": same islands proportionally scaled - sizes match their 3D surface areas. Use checker texture overlay on islands to emphasize uniform density after normalization. Bright orange outlines. Labels explaining texel density. 1920x1080 horizontal split.
```

### **Prompt 20: UV Pinning Example**
```
Create a UV Editor screenshot showing pinned vertices. Dark background (#2b2b2b). Single UV island (rectangular or organic shape) with several vertices pinned shown as bright red dots/circles. Unpinned vertices shown as regular cyan points. Add subtle labels with arrows: "Pinned Vertices (won't move)" pointing to red dots, "Unpinned Vertices (movable)" pointing to cyan points. Professional Blender UV Editor aesthetic. 1400x1000 format. Clean, educational visualization.
```

### **Prompt 21: UV Mirroring Setup**
```
Create a two-panel diagram showing symmetrical UV mirroring. Dark background (#2b2b2b). Left panel: symmetrical 3D model (character or object) with centerline seam marked. Right panel: UV Editor showing both left and right sides stacked perfectly on top of each other (overlapping UVs sharing same space). Use semi-transparent layers to show overlap. Arrow labeled "50% Space Saved!" between panels. Professional technical diagram. 1920x1080.
```

### **Prompt 22: Texture Density Test**
```
Create a 3D model visualization with UV Grid applied. Dark viewport background (#2b2b2b). Show a simple organic 3D shape (maybe mug, bottle, or character part) with UV checker pattern applied. Squares should be uniform size across entire surface demonstrating consistent texture density. Good lighting showing pattern clearly. Slight rotation to show multiple surfaces. Professional Blender render. 1920x1080. Clean, demonstrative render.
```

### **Prompt 23: UV Distortion Analysis**
```
Create a 3D model with stretch overlay visualization. Dark viewport background (#2b2b2b). Show a 3D character or object with color-coded distortion overlay. Most of model in blue (#2196F3) and green (#4CAF50) showing good unwrapping. Some problem areas highlighted in yellow (#FFC107) and red (#F44336) indicating stretching. Legend in corner showing color meanings: Blue=no distortion, Green=minimal, Yellow=some, Red=severe. Professional training visualization. 1920x1080.
```

### **Prompt 24: Straightening UV Islands**
```
Create a before/after comparison of UV island straightening. Dark background (#2b2b2b). Left panel "BEFORE": UV island slightly skewed and irregular, edges not aligned to grid. Right panel "AFTER": same island perfectly rectangular with edges aligned to UV grid axes. Use overlay grid to emphasize alignment. Bright orange for UV outlines. Arrow between panels labeled "Follow Active Quads". Professional technical comparison. 1920x1080 horizontal split.
```

### **Prompt 25: Overlapping UVs Detection**
```
Create a UV Editor screenshot showing overlapping UV detection. Dark background (#2b2b2b). Display several UV islands, with 2-3 islands stacked on top of each other (same location). Overlapping islands highlighted with bright warning color (yellow or orange glow). Non-overlapping islands shown in normal cyan. Label pointing to overlap: "Overlapping UVs Detected". Professional Blender UV Editor style. 1920x1080 format. Clear problem visualization.
```

### **Prompt 26: UV Workspace Layout**
```
Create a full Blender workspace screenshot showing UV Editing layout. Dark theme. Left half: UV Editor with UV islands and grid visible. Right half: 3D Viewport showing model in Edit Mode with face selection. Top: workspace tabs with "UV Editing" highlighted. Show toolbar on left sides. Professional Blender 4.0 interface aesthetic. Both editors showing same model for sync demonstration. 1920x1080 resolution. Clean, professional UI screenshot.
```

### **Prompt 27: Mug Project - Seam Placement**
```
Create an annotated 3D screenshot of coffee mug in Edit Mode. Dark viewport background (#2b2b2b). Simple mug with handle shown in wireframe or X-ray mode. Seams marked in bright red along: back vertical edge, bottom rim, inner top rim, and inner handle curve. Add bright orange callout labels with arrows: "Back Seam (hidden)", "Bottom Separation", "Inner Rim", "Handle Seam". Professional Blender viewport style. Good viewing angle showing all seams clearly. 1920x1080.
```

### **Prompt 28: Mug Project - Final UV Layout**
```
Create a UV Editor screenshot showing completed mug UV layout. Dark background (#2b2b2b). Display 4-5 UV islands efficiently packed: large rectangle for outer body, rectangle for inner body, circle for bottom, curved strip for handle. All islands packed efficiently within 0-1 grid, using about 75-80% of space. Uniform margins between islands. Professional appearance. Labels identifying each island: "Outer Body", "Inner Body", "Bottom", "Handle". 1920x1080 format. Clean, professional result.
```

---

## SVG Diagram Recommendations

The following images work best as SVG diagrams for clarity and scalability:

1. **UV Coordinate System Diagram** (#1) - Simple geometric shapes and text, perfect for vector format
2. **UV Space Grid Visualization** (#2) - Grid lines and coordinates ideal for SVG
3. **UV Mapping Process Illustration** (#3) - Flowchart with boxes and arrows
4. **Seam Placement Strategy Diagram** (#11) - Annotation diagram with arrows and labels
5. **Cube Seam Pattern** (#12) - Geometric shapes showing unwrap pattern
6. **Cylinder Seam Pattern** (#13) - Simple geometric illustration
7. **Sphere Seam Pattern** (#14) - Geometric representation of sphere unwrapping

**Rationale for SVG recommendations:** These images contain primarily geometric shapes, text labels, arrows, and diagrams rather than photorealistic or complex rendered content. Vector format ensures perfect clarity at any zoom level, smaller file sizes, and easy editing for future updates.

---

## Image Placement Suggestions in HTML

### Section: What Are UV Coordinates (id="what-are-uvs")
- **After "The Problem: Mapping 2D to 3D" paragraph:** Insert Image #1 (UV Coordinate System Diagram)
- **After "UV Space: The 0 to 1 Square" card:** Insert Image #2 (UV Space Grid Visualization)
- **Within "How UV Mapping Works" card:** Insert Image #3 (UV Mapping Process Illustration)
- **After "UV Islands" explanation:** Insert Image #4 (UV Islands Example)
- **Within "Good vs. Bad Unwraps" section:** Insert Image #5 (Good vs Bad Unwrap Comparison)

### Section: The UV Editor Interface (id="uv-editor-interface")
- **After "UV Editor Anatomy" card:** Insert Image #6 (UV Editor Interface Overview)
- **Within "Selection Modes in UV Editor" card:** Insert Image #7 (UV Selection Modes)
- **After "Creating UV Grid texture" instructions:** Insert Image #8 (UV Grid Test Texture)
- **Within "UV Overlay" display options:** Insert Image #9 (UV Stretch Overlay Display)
- **At start of section for workspace overview:** Insert Image #26 (UV Workspace Layout)

### Section: Seams and Unwrapping Concepts (id="seams-and-unwrapping")
- **After "What Are Seams?" card:** Insert Image #10 (Seam Marking Example)
- **Within "Strategic Seam Placement" card:** Insert Image #11 (Seam Placement Strategy Diagram)
- **Within "Cube Seam Pattern" card:** Insert Image #12 (Cube Seam Pattern)
- **Within "Cylinder Seam Pattern" card:** Insert Image #13 (Cylinder Seam Pattern)
- **Within "Sphere Seam Pattern" card:** Insert Image #14 (Sphere Seam Pattern)

### Section: Unwrapping Methods (id="unwrapping-methods")
- **After table comparing unwrap methods:** Insert Image #15 (Unwrap Methods Comparison)
- **Within "Project from View" explanation:** Insert Image #16 (Project from View Example)

### Section: Manipulating UV Islands (id="manipulating-uv-islands")
- **Within "UV Manipulation Tools" card:** Insert Image #17 (UV Manipulation Tools)
- **After "Pack Islands Settings" card:** Insert Image #18 (Pack Islands Before/After)
- **Within "Proportional Island Scaling" explanation:** Insert Image #19 (Average Island Scale Visualization)
- **Within "UV Pinning" card:** Insert Image #20 (UV Pinning Example)
- **Within "Mirror UVs" explanation:** Insert Image #21 (UV Mirroring Setup)

### Section: Optimizing UV Layouts (id="optimizing-uvs")
- **Within "Checking texture density" explanation:** Insert Image #22 (Texture Density Test)
- **Within "Analyzing UV Distortion" card:** Insert Image #23 (UV Distortion Analysis)
- **Within "Straightening UV Islands" explanation:** Insert Image #24 (Straightening UV Islands)
- **Within "Handling Overlapping UVs" section:** Insert Image #25 (Overlapping UVs Detection)

### Section: Hands-On Project (id="hands-on-project")
- **After Step 4: Mark Seams:** Insert Image #27 (Mug Project - Seam Placement)
- **After Step 10: Analyze and Optimize:** Insert Image #28 (Mug Project - Final UV Layout)

---

## File Naming Convention

```
lesson_12_01_uv_coordinate_system_diagram.svg
lesson_12_02_uv_space_grid.svg
lesson_12_03_uv_mapping_process.png
lesson_12_04_uv_islands_example.png
lesson_12_05_good_bad_unwrap_comparison.png
lesson_12_06_uv_editor_interface_overview.png
lesson_12_07_uv_selection_modes.png
lesson_12_08_uv_grid_test_texture.png
lesson_12_09_uv_stretch_overlay.png
lesson_12_10_seam_marking_example.png
lesson_12_11_seam_placement_strategy.svg
lesson_12_12_cube_seam_pattern.svg
lesson_12_13_cylinder_seam_pattern.svg
lesson_12_14_sphere_seam_pattern.svg
lesson_12_15_unwrap_methods_comparison.png
lesson_12_16_project_from_view_example.png
lesson_12_17_uv_manipulation_tools.png
lesson_12_18_pack_islands_before_after.png
lesson_12_19_average_island_scale.png
lesson_12_20_uv_pinning_example.png
lesson_12_21_uv_mirroring_setup.png
lesson_12_22_texture_density_test.png
lesson_12_23_uv_distortion_analysis.png
lesson_12_24_straightening_uv_islands.png
lesson_12_25_overlapping_uvs_detection.png
lesson_12_26_uv_workspace_layout.png
lesson_12_27_mug_project_seam_placement.png
lesson_12_28_mug_project_final_uvs.png
```

**Format guidelines:**
- Use two-digit numbering (01-28)
- Descriptive names with underscores
- .svg for vector diagrams (7 images)
- .png for screenshots and composites (21 images)

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #1 - UV Coordinate System Diagram** - Core concept visualization, essential for understanding UV basics
2. **Image #2 - UV Space Grid Visualization** - Fundamental to understanding 0-1 space
3. **Image #4 - UV Islands Example** - Shows what unwrapping produces
4. **Image #5 - Good vs Bad Unwrap Comparison** - Critical for quality awareness
5. **Image #6 - UV Editor Interface Overview** - Essential workspace navigation
6. **Image #10 - Seam Marking Example** - Shows fundamental seam concept
7. **Image #11 - Seam Placement Strategy Diagram** - Core strategic principle
8. **Image #18 - Pack Islands Before/After** - Demonstrates essential organization step
9. **Image #22 - Texture Density Test** - Shows quality verification method
10. **Image #26 - UV Workspace Layout** - Optimal setup for workflow

**Rationale:** These images directly support primary learning objectives about UV fundamentals, workspace setup, and core workflow concepts that students must understand.

### Medium Priority (Helpful but not Critical)
11. **Image #3 - UV Mapping Process Illustration** - Reinforces technical understanding
12. **Image #7 - UV Selection Modes** - Useful for tool mastery
13. **Image #8 - UV Grid Test Texture** - Testing tool reference
14. **Image #9 - UV Stretch Overlay Display** - Quality analysis tool
15. **Image #12 - Cube Seam Pattern** - Common primitive example
16. **Image #13 - Cylinder Seam Pattern** - Common primitive example
17. **Image #15 - Unwrap Methods Comparison** - Method selection guidance
18. **Image #17 - UV Manipulation Tools** - Tool usage reference
19. **Image #19 - Average Island Scale Visualization** - Quality technique
20. **Image #23 - UV Distortion Analysis** - Advanced quality check
21. **Image #27 - Mug Project - Seam Placement** - Project guidance
22. **Image #28 - Mug Project - Final UV Layout** - Project reference

**Rationale:** These enhance understanding and provide useful references but concepts can be grasped through text explanations if needed.

### Lower Priority (Nice to Have)
23. **Image #14 - Sphere Seam Pattern** - Specific primitive case
24. **Image #16 - Project from View Example** - Specialized technique
25. **Image #20 - UV Pinning Example** - Advanced technique
26. **Image #21 - UV Mirroring Setup** - Optimization technique
27. **Image #24 - Straightening UV Islands** - Refinement technique
28. **Image #25 - Overlapping UVs Detection** - Troubleshooting tool

**Rationale:** Supplementary materials that enhance the learning experience but aren't necessary for grasping core UV unwrapping concepts. Can be added in future updates.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:**
  - Background: Dark grey (#2b2b2b) for all screenshots and diagrams
  - UV elements: Bright cyan (#00bcd4) for edges
  - Selection highlights: Bright orange (#ff8c00)
  - Seams: Bright red (#ff0000)
  - Grid lines: Subtle grey (#505050)
  - Text labels: White (#ffffff)
  - Success/Good: Green (#4CAF50)
  - Warning: Yellow (#FFC107)
  - Problem/Error: Red (#F44336)
- **Blender Version:** Blender 4.0 interface style for consistency
- **View Angles:** Use clear, educational angles that show features prominently
- **Selection Highlighting:** Use bright orange for selected elements
- **Typography:** Clear sans-serif font (Roboto or similar) for all labels
- **Annotation Style:** Bright orange arrows with white text on semi-transparent dark backgrounds

### Accessibility Considerations
- High contrast between UI elements and backgrounds
- Clear, large text labels readable at smaller sizes
- Color-blind friendly: don't rely solely on color (use shapes/labels too)
- Consistent iconography across images
- Alternative text descriptions for all images in HTML

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 for full-screen images, 1400x1000 for detail shots
- **Image Format:**
  - PNG for screenshots and composites (lossless, transparency support)
  - SVG for diagrams and vector graphics (7 images)
  - JPG not recommended (quality loss not acceptable for educational material)
- **File Size Target:** PNG images under 500KB each (use PNG optimization tools)
- **Compression:** PNG with optimization (pngquant or similar), maintain visual quality
- **Responsive Sizing:** Images should display well at 1200px width (common content width)

### Special Considerations for This Lesson
- **UV Editor focus:** Many images will need accurate Blender UV Editor interface representation
- **Dual-view images:** Several need split-screen showing 3D and UV views simultaneously
- **Progressive complexity:** Start with simple diagrams, progress to actual Blender screenshots
- **Consistent test object:** Consider using same simple model (cube, cylinder, or simple character part) across multiple demonstration images for continuity
- **Color coding crucial:** Stretch overlay colors (blue/green/yellow/red) must be consistent with Blender's actual color scheme
- **Grid visibility:** UV grid lines should be visible but not overwhelming in screenshots

### Production Notes
- **Blender Scene Setup:**
  - Create template .blend file with UV Editor workspace pre-configured
  - Dark theme enabled (Edit → Preferences → Themes)
  - UV Grid texture pre-loaded as default test pattern
  - Standard lighting setup for 3D viewport (good visibility without glare)
- **Lighting Setup:**
  - Viewport shading: Solid mode with MatCap or consistent studio lighting
  - Avoid harsh shadows that obscure geometry
  - Ensure seam highlighting is clearly visible
- **Camera Angles:**
  - 3D views: Slight perspective (not orthographic) for depth perception
  - UV Editor views: Flat on, no perspective distortion
  - Consistent zoom levels across similar images
- **Batch Processing:**
  - Capture multiple related screenshots in single session for consistency
  - Use Blender's screenshot hotkey (Ctrl+F3 for viewport captures)
  - Keep .blend files of setups for potential re-renders
- **Version Control:**
  - Save source .blend files with descriptive names matching image numbers
  - Keep PSD/XCF files for any post-processing/annotation layers
  - Document any special settings or setup procedures
- **Template Reuse:**
  - UV Editor interface template can be reused for multiple images
  - Standard object (cube, cylinder) setups can be saved as templates
  - Annotation style (arrows, text boxes) should be consistent

---

## Quality Checklist

Before finalizing images, verify:

- [✓] All major lesson sections have appropriate image support
- [✓] Each image has clear educational purpose defined
- [✓] AI prompts are detailed and specific with color codes (#2b2b2b, #ff8c00, etc.) and style guidance
- [✓] SVG recommendations are justified with clear rationale (7 vector images identified)
- [✓] Placement suggestions reference actual HTML section IDs from lesson file
- [✓] File naming follows consistent convention (lesson_12_01 through lesson_12_28)
- [✓] Priority ranking is logical and justified with clear rationale
- [✓] Style/accessibility notes are comprehensive and practical
- [✓] Output is well-organized with clear sections and easy navigation
- [✓] Technical specifications cover all production needs
- [✓] Special considerations address UV unwrapping visualization requirements

---

## Additional Recommendations

### Image Creation Workflow
**Phase 1: Core Concepts (High Priority)**
- Create images 1, 2, 4, 5, 6, 10, 11 first - these are foundational
- Focus on clarity and simplicity
- Get feedback before proceeding

**Phase 2: Workflow Tools (High/Medium Priority)**
- Create images 18, 22, 26 and other workflow demonstrations
- These show practical application
- Ensure consistency with Phase 1 style

**Phase 3: Specific Techniques (Medium/Low Priority)**
- Create primitive patterns, advanced tools, project images
- Build on established visual style
- Can be added incrementally

### Alternative Approaches
- **Video clips:** Consider short 5-10 second video loops for:
  - Pack Islands animation (showing real-time rearrangement)
  - Unwrap operation (showing before/during/after)
  - Stretch overlay changes as seams are added
- **Interactive elements:**
  - Clickable hotspots on UV Editor interface image
  - Before/after sliders for comparison images
  - Expandable detail views of complex screenshots

### Future Enhancements
- **Downloadable assets:**
  - Practice .blend files with pre-marked seams
  - UV Grid test textures in multiple resolutions
  - Template UV layouts for common primitives
- **Supplementary materials:**
  - Quick reference PDF: keyboard shortcuts
  - Cheat sheet: seam placement strategies
  - Troubleshooting flowchart: fixing common UV problems
- **Interactive quizzes:**
  - "Identify the good seam locations" exercise
  - "Match the primitive to its UV pattern" quiz
  - "Spot the distortion" challenge

---

## Production Timeline Estimate

**High Priority Images (10):** 15-20 hours
- 2-3 hours per image including setup, capture, annotation, optimization
- Complex composites may take longer

**Medium Priority Images (12):** 18-24 hours
- Similar effort per image
- Some can reuse setups from high priority

**Low Priority Images (6):** 8-12 hours
- Can be produced more quickly with established workflow
- Lower urgency allows for flexible scheduling

**Total Estimated Effort:** 41-56 hours for complete image set

**Recommended Approach:** Focus on high priority first, release lesson with those, then add medium/low priority in subsequent updates.