# Image Requirements for Lesson 31: Advanced Modifier Stack

## Task Summary
**Lesson:** lesson_31_advanced_modifier_stack.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 31

### **1. Modifier Stack Data Flow Diagram**
- **Purpose:** Visualize how data flows sequentially through the modifier stack
- **Type:** Diagram/Infographic
- **Shows:** Base mesh → Modifier 1 → Modifier 2 → Modifier 3 → Final result with arrows showing sequential processing

### **2. Modifier Panel Anatomy**
- **Purpose:** Show all elements of a modifier panel section
- **Type:** Annotated Screenshot
- **Shows:** Modifier name, visibility toggles (eye, camera, arrow icons), stack position arrows, copy/delete icons, settings area

### **3. Mirror Before vs After Subdivision Comparison**
- **Purpose:** Demonstrate how stack order changes results
- **Type:** Side-by-side Composite
- **Shows:** Two panels - Mirror→Subdivision (correct) vs Subdivision→Mirror (incorrect with seam)

### **4. Boolean Order Comparison**
- **Purpose:** Show why Boolean→Bevel→Subdivision order matters
- **Type:** Three-panel Composite
- **Shows:** Boolean alone (artifacts) → Boolean+Bevel (better) → Boolean+Bevel+Subdivision (clean)

### **5. Array and Mirror Order Variations**
- **Purpose:** Illustrate different patterns from different stack orders
- **Type:** Two-panel Composite
- **Shows:** Mirror→Array pattern vs Array→Mirror pattern with labeled results

### **6. General Stack Order Flowchart**
- **Purpose:** Show recommended modifier order hierarchy
- **Type:** SVG Flowchart
- **Shows:** Data Prep → Generation → Shape Changes → Edge Refinement → Deformation → Smoothing → Details → Animation/Physics

### **7. Modifier Categories Visual Reference**
- **Purpose:** Quick reference for modifier types
- **Type:** Infographic/Grid
- **Shows:** Four category boxes (Modify, Generate, Deform, Physics) with key modifiers listed

### **8. Nested Array 3D Grid Example**
- **Purpose:** Show exponential complexity from multiple arrays
- **Type:** 3D Viewport Screenshot
- **Shows:** Simple base object with 3 array modifiers creating 3D grid pattern (windor grid on building)

### **9. Boolean Chain Workflow Diagram**
- **Purpose:** Visualize multi-object Boolean dependencies
- **Type:** Diagram with arrows
- **Shows:** Object A (with modifiers) → Boolean on Object B → Boolean on Object C with dependency arrows

### **10. Performance Comparison Chart**
- **Purpose:** Show relative performance cost of different modifiers
- **Type:** Bar Chart/Infographic
- **Shows:** Modifiers ranked by performance impact (Simulation=highest, Data modifiers=lowest)

### **11. Viewport vs Render Settings Screenshot**
- **Purpose:** Show subdivision modifier with different viewport/render levels
- **Type:** Annotated Screenshot
- **Shows:** Subdivision modifier panel with Viewport level 1, Render level 3 highlighted

### **12. Cutter Object Organization**
- **Purpose:** Show proper organization of Boolean cutter objects
- **Type:** Outliner Screenshot
- **Shows:** Outliner with "Cutters" collection containing organized cutter objects, display settings shown

### **13. Modifier Visibility Toggles Reference**
- **Purpose:** Quick guide to modifier visibility icons
- **Type:** SVG Diagram/Infographic
- **Shows:** Eye icon, camera icon, arrow icon with explanations of each

### **14. Mirror + Array Workflow Example**
- **Purpose:** Show symmetrical duplication workflow result
- **Type:** 3D Viewport Screenshot
- **Shows:** Fence posts created from one base object with Mirror→Array modifiers

### **15. Boolean + Bevel + Subdivision Workflow**
- **Purpose:** Demonstrate clean Boolean workflow
- **Type:** Three-stage Composite
- **Shows:** Stage 1: Boolean cutout → Stage 2: Bevel added → Stage 3: Subdivision smoothing

### **16. Solidify + Array Pattern Example**
- **Purpose:** Show thin-to-thick workflow result
- **Type:** 3D Viewport Screenshot
- **Shows:** Decorative panel created from 2D profile with Solidify→Array modifiers

### **17. Curve Modifier Workflow Example**
- **Purpose:** Show deformation along curved path
- **Type:** Side-by-side Composite
- **Shows:** Straight road segment → Road following curved terrain with curve modifier

### **18. Multiresolution + Mirror Setup**
- **Purpose:** Show sculpting workflow with symmetry
- **Type:** Split-screen Screenshot
- **Shows:** Character head with Mirror modifier in Edit Mode, Multiresolution in Sculpt Mode

### **19. Lattice Deformation Example**
- **Purpose:** Demonstrate cage deformation
- **Type:** 3D Viewport Screenshot
- **Shows:** Object with lattice cage around it, lattice points moved to deform object

### **20. Radial Array Pattern Setup**
- **Purpose:** Show circular duplication using Empty control
- **Type:** 3D Viewport Screenshot with Annotations
- **Shows:** Base spoke with Array modifier, Empty positioned for radial offset, resulting circular pattern

### **21. Displacement + Subdivision Terrain**
- **Purpose:** Show texture-driven geometry creation
- **Type:** Before/After Composite
- **Shows:** Flat subdivided plane → Terrain created by Displace modifier

### **22. Shrinkwrap Projection Example**
- **Purpose:** Demonstrate surface conforming
- **Type:** Two-panel Composite
- **Shows:** Flat decal plane → Decal wrapped onto curved surface with Shrinkwrap

### **23. Animated Modifier Parameters Timeline**
- **Purpose:** Show keyframed modifier settings
- **Type:** Screenshot with Timeline
- **Shows:** Array count animated from 1 to 20 over time in timeline with keyframes visible

### **24. Build Modifier Animation**
- **Purpose:** Show progressive mesh appearance
- **Type:** Four-frame Sequence
- **Shows:** Object appearing progressively over frames with Build modifier

### **25. Stack Performance Optimization Checklist Visual**
- **Purpose:** Visual checklist for optimization
- **Type:** Infographic
- **Shows:** Checkboxes with optimization tips (viewport levels, cutter simplification, etc.)

### **26. Modifier Stack Troubleshooting Flowchart**
- **Purpose:** Debugging decision tree
- **Type:** SVG Flowchart
- **Shows:** Problem identification → Check steps → Solutions for common issues

### **27. LOD (Level of Detail) Comparison**
- **Purpose:** Show different complexity versions
- **Type:** Three-panel Composite
- **Shows:** LOD0 (full stack), LOD1 (medium), LOD2 (simplified) side by side

### **28. Applied vs Unapplied Modifiers**
- **Purpose:** Show what happens when applying modifiers
- **Type:** Side-by-side Comparison
- **Shows:** Object with modifier stack visible vs same object with modifiers applied (clean geometry)

### **29. Collection Organization for Production**
- **Purpose:** Show proper file organization
- **Type:** Outliner Screenshot
- **Shows:** Collections organized: Main objects, Cutters, References, LODs with hierarchical structure

### **30. Export Workflow Diagram**
- **Purpose:** Show modifier application for export
- **Type:** Flowchart/Process Diagram
- **Shows:** Working file → Duplicate → Apply modifiers → Export → Maintain both versions

### **31. Naming Convention Examples**
- **Purpose:** Show descriptive naming best practices
- **Type:** Annotated Screenshot
- **Shows:** Modifier stack with well-named modifiers vs default names, highlighting difference

### **32. Procedural Colonnade Project Reference**
- **Purpose:** Show completed project example
- **Type:** 3D Viewport Render
- **Shows:** Finished architectural colonnade with columns, arches, and decorative details

### **33. Column Base with Fluting Details**
- **Purpose:** Project step reference - column creation
- **Type:** 3D Viewport Screenshot
- **Shows:** Single column with Mirror modifier, Boolean fluting cuts, before Array duplication

### **34. Colonnade Array Setup**
- **Purpose:** Project step reference - array creation
- **Type:** 3D Viewport Screenshot
- **Shows:** Row of 5 columns created via Array modifier with spacing visible

### **35. Arch Connection System**
- **Purpose:** Project step reference - arch creation
- **Type:** 3D Viewport Screenshot
- **Shows:** Curved arch connecting columns with bevel depth visible

### **36. Decorative Panel Boolean Cuts**
- **Purpose:** Project step reference - detail addition
- **Type:** Close-up 3D Viewport Screenshot
- **Shows:** Arch with decorative panel cutouts created by Boolean→Array cutter system

### **37. Modifier Stack Complexity Comparison**
- **Purpose:** Show simple vs complex stacks
- **Type:** Side-by-side Screenshot
- **Shows:** 2-3 modifier stack (simple) vs 8-10 modifier stack (complex) with visible results

### **38. Boolean Fast vs Exact Solver**
- **Purpose:** Show solver quality differences
- **Type:** Two-panel Comparison
- **Shows:** Same Boolean operation with Fast solver (potential artifacts) vs Exact solver (clean)

### **39. Subdivision Level Polygon Count Chart**
- **Purpose:** Illustrate exponential polygon growth
- **Type:** Bar Chart/Graph
- **Shows:** Base mesh vs Level 1 (4x) vs Level 2 (16x) vs Level 3 (64x) vs Level 4 (256x)

### **40. Geometry Nodes in Modifier Stack**
- **Purpose:** Show Geometry Nodes integration
- **Type:** Screenshot with Modifier Stack
- **Shows:** Modifier stack with Geometry Nodes modifier between Mirror and Subdivision

---

## AI Image Generation Prompts

### **Prompt 1: Modifier Stack Data Flow Diagram**
```
Create a technical diagram showing the sequential data flow through a Blender modifier stack. Display a vertical flowchart with:
- At top: "Base Mesh" box in light gray (#f9f9f9)
- Five modifier boxes in purple (#667eea) labeled: "Modifier 1: Mirror", "Modifier 2: Array", "Modifier 3: Boolean", "Modifier 4: Bevel", "Modifier 5: Subdivision"
- At bottom: "Final Visual Result" box in green (#4CAF50)
- Arrows connecting each box showing downward flow
- Clean, technical style with clear labels
- Dark background (#2b2b2b) matching Blender UI
- Professional training material aesthetic
- Resolution: 1200x1600 pixels (vertical orientation)
```

### **Prompt 2: Modifier Panel Anatomy**
```
Create an annotated diagram of a Blender modifier panel. Show a single modifier section with:
- Header bar with modifier name "Mirror" and icon
- Right side icons: eye (viewport visibility), camera (render visibility), arrow (edit mode visibility)
- Up/down arrows for stack reordering
- Copy and delete icons
- Expanded settings area below
- All elements labeled with clear callout lines and descriptive text
- Use Blender's dark theme colors (#2b2b2b background, #3c3c3c panel)
- Orange highlights (#ff8c00) for important elements
- Clean, educational diagram style
- Resolution: 1400x1000 pixels
```

### **Prompt 3: Mirror Before vs After Subdivision Comparison**
```
Create a side-by-side comparison showing modifier stack order importance. Two panels:
LEFT PANEL - "Correct: Mirror → Subdivision":
- 3D character head, smooth and symmetrical
- Green checkmark icon
- No visible seam down center
- Clean smooth surface

RIGHT PANEL - "Incorrect: Subdivision → Mirror":
- Same head, but with visible seam down center line
- Red X icon
- Obvious artifacts at center
- Duplicate vertices visible

Both panels show dark viewport background (#2b2b2b)
Clear labels at top of each panel
Professional technical illustration style
Resolution: 2000x1000 pixels
```

### **Prompt 4: Boolean Order Comparison**
```
Create a three-panel horizontal comparison showing Boolean workflow refinement:

PANEL 1 - "Boolean Only":
- 3D box with circular cutout
- Visible triangulation and messy edges
- Red warning indicators

PANEL 2 - "Boolean + Bevel":
- Same box and cutout
- Smoothed edges, less pinching
- Yellow caution indicators

PANEL 3 - "Boolean + Bevel + Subdivision":
- Same box and cutout
- Perfectly smooth edges
- Green checkmark, professional result

Dark background (#2b2b2b)
Orange highlights (#ff8c00) on modified areas
Labels at top of each panel
Clean technical style
Resolution: 2400x800 pixels
```

### **Prompt 5: Array and Mirror Order Variations**
```
Create a comparison showing two different modifier order results:

TOP PANEL - "Mirror → Array":
- Single fence post becomes symmetrical pair
- Then arrayed into row of pairs
- 5 pairs total (10 posts)
- Label shows resulting pattern

BOTTOM PANEL - "Array → Mirror":
- Single post arrayed into row (5 posts)
- Then mirrored to create two rows
- 2 rows of 5 (10 posts total)
- Label shows different pattern

Both use same base object but different order creates different structures
Dark background (#2b2b2b)
Cyan wireframe overlay showing geometry
Clear labels explaining the difference
Resolution: 2000x1200 pixels
```

### **Prompt 6: General Stack Order Flowchart**
```
Create an SVG-style flowchart showing optimal modifier stack order:
Vertical flow with boxes for each stage:
1. "Data Preparation" (light blue)
2. "Generation (Mirror/Array)" (purple)
3. "Shape Changes (Boolean/Solidify)" (orange)
4. "Edge Refinement (Bevel)" (yellow)
5. "Deformation (Curve/Lattice)" (green)
6. "Smoothing (Subdivision)" (teal)
7. "Final Details (Decimate/Wireframe)" (pink)
8. "Animation/Physics (Armature/Cloth)" (red)

Arrows connecting each stage
Side annotations explaining "why this order"
Clean, professional diagram style
White background for printing
Resolution: 1000x2000 pixels (vertical)
```

### **Prompt 7: Modifier Categories Visual Reference**
```
Create an infographic showing Blender's four modifier categories:

Four quadrants in 2x2 grid:

TOP LEFT - "MODIFY" (blue):
- Icons representing: Data Transfer, Normal Edit, UV Warp
- "Transforms existing geometry"

TOP RIGHT - "GENERATE" (purple):
- Icons representing: Array, Boolean, Mirror, Subdivision
- "Creates new geometry"

BOTTOM LEFT - "DEFORM" (green):
- Icons representing: Curve, Lattice, Shrinkwrap
- "Moves vertices"

BOTTOM RIGHT - "PHYSICS" (red):
- Icons representing: Cloth, Fluid, Soft Body
- "Simulations"

Clean modern design, icons for each modifier type
Dark background (#2b2b2b)
Color-coded by category
Resolution: 1600x1600 pixels (square)
```

### **Prompt 8: Nested Array 3D Grid Example**
```
Create a 3D viewport screenshot showing exponential array complexity:
- Small base object: single window frame
- Array #1 creates horizontal row (5 windows)
- Array #2 creates vertical columns (8 floors)
- Array #3 creates depth (2 sides)
- Result: 5×8×2 = 80 windows from one base object
- Show in perspective view with building context
- Orange selection highlight on base window
- Cyan wireframe showing all duplicates
- Dark viewport background (#2b2b2b)
- Annotation showing "80 instances from 1 object"
- Professional architectural visualization style
- Resolution: 1920x1080 pixels
```

### **Prompt 9: Boolean Chain Workflow Diagram**
```
Create a diagram showing Boolean chain dependencies:

Three objects connected by arrows:

OBJECT A (left):
- Simple cube with Mirror and Array modifiers
- Modifier stack visible
- Flows into →

OBJECT B (center):
- Boolean modifier references Object A
- Own modifiers add complexity
- Flows into →

OBJECT C (right):
- Boolean modifier references Object B
- Final complex result
- Shows complete chain effect

Visual indicators showing when Object A changes, entire chain updates
Arrows labeled "feeds into"
Dark background with colored boxes for each object
Technical diagram style
Resolution: 2400x1000 pixels
```

### **Prompt 10: Performance Comparison Chart**
```
Create a horizontal bar chart showing modifier performance impact:

Vertical axis lists modifiers:
- Simulation (Cloth/Fluid/Soft Body)
- Boolean (Exact solver)
- Subdivision Surface (high level)
- Remesh/Voxel
- Geometry Nodes (variable)
- Boolean (Fast solver)
- Array
- Mirror
- Bevel
- Data modifiers

Horizontal axis shows performance cost (Low to High)
Color-coded bars:
- Red for expensive
- Yellow for moderate
- Green for cheap

Clean infographic style
Dark background (#2b2b2b)
Clear labels and legend
Resolution: 1600x1200 pixels
```

### **Prompt 11: Viewport vs Render Settings Screenshot**
```
Create an annotated screenshot of Subdivision Surface modifier panel showing:
- Modifier header with "Subdivision Surface" name
- Two level settings clearly visible:
  - "Levels Viewport: 1" (highlighted in blue)
  - "Render: 3" (highlighted in green)
- Callout annotations explaining:
  - Viewport = fast, lower quality for working
  - Render = slow, high quality for output
- Orange arrows pointing to both settings
- Blender's dark UI theme (#2b2b2b)
- Clean, educational annotation style
- Resolution: 1400x800 pixels
```

### **Prompt 12: Cutter Object Organization**
```
Create a screenshot of Blender's Outliner showing organized Boolean cutters:
- Main collection hierarchy visible
- "Cutters" collection clearly visible
- Inside: multiple cutter objects with descriptive names:
  - "Cutter_Window_Front"
  - "Cutter_Door_Main"
  - "Cutter_Vent_Holes"
- Collection has eye icon disabled (hidden)
- Objects set to "Wire" display mode (indicated by icon)
- Clean naming convention highlighted
- Blender's dark Outliner theme
- Annotations pointing to key organizational features
- Resolution: 1000x1400 pixels (vertical)
```

### **Prompt 13: Modifier Visibility Toggles Reference**
```
Create an SVG infographic showing three modifier visibility icons:

Three sections horizontally arranged:

LEFT - "Eye Icon":
- Large eye icon
- "Viewport Visibility"
- "Shows/hides effect in 3D view"
- Toggle on/off examples

CENTER - "Camera Icon":
- Large camera icon
- "Render Visibility"
- "Includes/excludes from renders"
- Toggle on/off examples

RIGHT - "Arrow Icon":
- Large arrow icon
- "Edit Mode Visibility"
- "See modifier in Edit Mode"
- Toggle on/off examples

Clean, simple design
Icons in white on dark background
Text in light gray
Professional reference card style
Resolution: 1800x600 pixels
```

### **Prompt 14: Mirror + Array Workflow Example**
```
Create a 3D viewport screenshot showing symmetrical duplication result:
- Base: single fence post (half-modeled)
- Mirror modifier creates complete symmetrical post
- Array modifier duplicates into row of 5 posts
- Total: 5 complete posts from one half-post
- Perspective view showing entire row
- Orange selection highlight on base geometry
- Cyan wireframe showing mirrored/arrayed result
- Dark viewport (#2b2b2b)
- Ground plane for context
- Annotation: "5 posts from 1 base object"
- Professional architectural visualization
- Resolution: 1920x1080 pixels
```

### **Prompt 15: Boolean + Bevel + Subdivision Workflow**
```
Create a three-stage composite showing Boolean refinement process:

STAGE 1 (left third):
- 3D cube with cylindrical hole
- Boolean operation visible
- Messy triangulated edges
- Orange highlights on problem areas
- Label: "1. Boolean"

STAGE 2 (center third):
- Same cube with hole
- Bevel modifier added
- Rounded edges, cleaner geometry
- Yellow highlights on improved areas
- Label: "2. Bevel"

STAGE 3 (right third):
- Same cube with hole
- Subdivision Surface added
- Perfectly smooth result
- Green highlights on final quality
- Label: "3. Subdivision"

Dark background (#2b2b2b)
Consistent lighting and angle
Technical visualization style
Resolution: 2400x800 pixels
```

### **Prompt 16: Solidify + Array Pattern Example**
```
Create a 3D viewport screenshot showing thin-to-thick workflow:
- Original: single thin vertical strip (2D profile)
- Solidify modifier adds thickness
- Array modifier creates pattern of thick strips
- Result: decorative panel with repeating vertical elements
- Perspective view showing depth and pattern
- Orange outline on base 2D profile
- Cyan wireframe on solidified result
- Dark viewport background (#2b2b2b)
- Architectural detail context
- Annotation showing workflow: "2D → 3D → Pattern"
- Resolution: 1600x1200 pixels
```

### **Prompt 17: Curve Modifier Workflow Example**
```
Create a side-by-side comparison showing curve deformation:

LEFT PANEL:
- Straight road segment (rectangular mesh)
- Positioned at origin
- Orange outline showing base geometry
- Label: "Before: Straight Segment"

RIGHT PANEL:
- Same road now following curved path
- Bezier curve visible in scene
- Road conforms to terrain curve
- Cyan wireframe showing deformed geometry
- Label: "After: Curve Modifier Applied"

Both panels share dark background (#2b2b2b)
Isometric/perspective view for clarity
Terrain context visible
Professional technical visualization
Resolution: 2000x1000 pixels
```

### **Prompt 18: Multiresolution + Mirror Setup**
```
Create a split-screen showing sculpting workflow with symmetry:

LEFT SIDE - "Edit Mode":
- Character head (half-modeled)
- Mirror modifier visible in modifier stack
- Orange selection on one side
- Cyan mirrored geometry on other side
- Edit Mode tools visible

RIGHT SIDE - "Sculpt Mode":
- Same character head
- Multiresolution modifier in stack
- Sculpt brush active
- Symmetry indicators visible
- Higher density subdivided mesh
- Both sides update simultaneously

Dark background (#2b2b2b)
Modifier stacks visible on both sides
Professional character modeling style
Resolution: 2400x1200 pixels
```

### **Prompt 19: Lattice Deformation Example**
```
Create a 3D viewport screenshot showing cage deformation:
- Central object: simple cylinder or cube
- Surrounding lattice: 3D grid cage (visible wireframe)
- Lattice points moved to create bend/twist
- Object deforms to follow lattice deformation
- Orange highlights on moved lattice points
- Cyan lines showing deformation influence
- Dark viewport background (#2b2b2b)
- Perspective view showing 3D nature of deformation
- Annotation: "Lattice controls object deformation"
- Professional technical visualization
- Resolution: 1600x1200 pixels
```

### **Prompt 20: Radial Array Pattern Setup**
```
Create a 3D viewport screenshot with annotations showing radial array:
- Center: Empty object at origin (orange cube icon)
- Single spoke/petal extending from center
- Array modifier creates 8 duplicates in circle
- Empty rotated 45° (360°/8)
- Result: flower/gear/wheel pattern
- Orange highlights on Empty and base spoke
- Cyan wireframe showing all array instances
- Rotation indicators showing 45° increments
- Dark viewport background (#2b2b2b)
- Top-down view for clarity
- Annotations explaining Empty control
- Resolution: 1600x1600 pixels (square)
```

### **Prompt 21: Displacement + Subdivision Terrain**
```
Create a before/after comparison showing texture-driven geometry:

TOP PANEL - "Before":
- Flat subdivided plane
- Grid pattern visible (high density)
- Completely flat surface
- Orange outline
- Label: "Subdivided Plane"

BOTTOM PANEL - "After":
- Same plane transformed into terrain
- Displacement modifier applied
- Heightmap texture visible (grayscale pattern)
- Mountains and valleys created
- Cyan wireframe showing displaced geometry
- Label: "Displace Modifier Applied"

Perspective view showing 3D depth
Dark background (#2b2b2b)
Professional terrain visualization
Resolution: 1600x1800 pixels (vertical)
```

### **Prompt 22: Shrinkwrap Projection Example**
```
Create a two-panel comparison showing surface conforming:

LEFT PANEL:
- Flat decal plane with text/logo
- Positioned near curved surface (cylinder or sphere)
- Not yet projected
- Orange outline on decal
- Label: "Before: Flat Decal"

RIGHT PANEL:
- Same decal wrapped onto curved surface
- Conforms perfectly to surface curvature
- Small offset maintained from surface
- Cyan outline showing conformed geometry
- Label: "After: Shrinkwrap Applied"

Both panels show same curved target surface
Dark background (#2b2b2b)
Clear before/after transformation
Professional technical visualization
Resolution: 2000x1000 pixels
```

### **Prompt 23: Animated Modifier Parameters Timeline**
```
Create a screenshot showing keyframed modifier animation:
- Top: 3D viewport with object at different animation frames
  - Frame 1: 1 array instance
  - Frame 50: 10 array instances
  - Frame 100: 20 array instances
- Bottom: Blender timeline showing keyframes
  - Keyframes at frames 1, 50, 100 visible as diamonds
  - Array count parameter highlighted
- Modifier stack panel showing Array modifier
- Orange highlights on keyframed values
- Dark UI theme (#2b2b2b)
- Motion graphics/procedural animation context
- Annotations explaining keyframe workflow
- Resolution: 2400x1400 pixels
```

### **Prompt 24: Build Modifier Animation**
```
Create a four-frame sequence showing progressive mesh appearance:

FRAME 1 (0%):
- Empty viewport, nothing visible
- Label: "Frame 1: 0%"

FRAME 2 (33%):
- One-third of mesh visible
- Appears to be drawing in
- Label: "Frame 30: 33%"

FRAME 3 (66%):
- Two-thirds visible
- Progressive construction
- Label: "Frame 60: 66%"

FRAME 4 (100%):
- Complete mesh visible
- Fully constructed
- Label: "Frame 90: 100%"

Horizontal layout, four equal panels
Same camera angle throughout
Orange edges on appearing geometry
Dark background (#2b2b2b)
Build modifier animation demonstration
Resolution: 2400x600 pixels
```

### **Prompt 25: Stack Performance Optimization Checklist Visual**
```
Create an infographic checklist for optimization:

Checklist items with checkbox graphics:
☑ Subdivision viewport level ≤ 2
☑ Boolean cutters are simple geometry
☑ Cutter objects set to Wire/Bounds display
☑ Expensive modifiers disabled while modeling
☑ Boolean solver set to Fast first
☑ No more than 8-10 modifiers in stack
☑ Applied modifiers that won't change
☑ Instances used for repeated elements
☑ Physics simulations cached
☑ Regular saves

Each item has small icon visualization
Green checkmarks (#4CAF50)
Clean, professional checklist design
Dark background (#2b2b2b)
Easily scannable layout
Resolution: 1200x1600 pixels (vertical)
```

### **Prompt 26: Modifier Stack Troubleshooting Flowchart**
```
Create an SVG flowchart for debugging modifier stacks:

Start: "Stack Issue?"
↓
Decision: "Performance Problem?"
→ Yes: Check Subdivision levels, Boolean solver, disable heavy modifiers
→ No: Continue

Decision: "Visual Artifacts?"
→ Yes: Check stack order, Boolean before Subdivision?, Add Bevel?
→ No: Continue

Decision: "Modifier Not Working?"
→ Yes: Check dependencies, referenced objects exist?, Intersections correct?
→ No: Continue

End: Solutions provided

Flowchart uses diamond shapes for decisions
Rectangle shapes for actions
Arrows connecting all elements
Color-coded: Problems (red), Solutions (green)
Clean technical diagram style
White background for printing
Resolution: 1400x2000 pixels (vertical)
```

### **Prompt 27: LOD (Level of Detail) Comparison**
```
Create a three-panel comparison showing complexity levels:

LEFT - "LOD 0 (High Detail)":
- Complex object with full modifier stack
- Subdivision level 3
- All details visible
- High polygon count
- Label with poly count

CENTER - "LOD 1 (Medium)":
- Same object, some modifiers applied
- Subdivision level 2
- Most details preserved
- Medium polygon count
- Label with poly count

RIGHT - "LOD 2 (Low)":
- Same object, most modifiers applied
- Subdivision level 1
- Essential details only
- Low polygon count
- Label with poly count

Same camera angle for all three
Wireframe overlay showing polygon density
Dark background (#2b2b2b)
Professional optimization visualization
Resolution: 2400x800 pixels
```

### **Prompt 28: Applied vs Unapplied Modifiers**
```
Create a side-by-side comparison showing modifier application:

LEFT PANEL - "With Modifiers (Unapplied)":
- Object in viewport
- Modifier stack panel visible on side
- 5-6 modifiers listed
- Orange highlight around modifier stack
- Editable, procedural
- Label: "Flexible, Editable"

RIGHT PANEL - "After Applying":
- Same object, identical appearance
- Modifier stack panel empty
- Properties show increased vertex count
- Cyan highlight around geometry
- Frozen, no longer procedural
- Label: "Fixed Geometry"

Both show same object from same angle
Dark UI theme (#2b2b2b)
Technical documentation style
Resolution: 2000x1000 pixels
```

### **Prompt 29: Collection Organization for Production**
```
Create an Outliner screenshot showing professional organization:

Hierarchical structure visible:
- Project_Name (top collection)
  - Main_Assets
    - Building_01
    - Character_Hero
  - Cutters
    - Cutter_Windows
    - Cutter_Doors
  - References
    - Reference_Images
    - Guide_Objects
  - LODs
    - LOD0_High
    - LOD1_Medium
    - LOD2_Low

Each collection with appropriate icon
Some collections hidden (eye icon off)
Some objects set to different display modes
Color-coded collections for organization
Blender's dark Outliner theme
Clear, professional structure
Annotations explaining organization strategy
Resolution: 1000x1600 pixels (vertical)
```

### **Prompt 30: Export Workflow Diagram**
```
Create a flowchart showing export preparation:

Step 1: "Working File" (blue box)
- Modifiers intact
- Fully editable
↓
Step 2: "Duplicate Object" (yellow box)
- Shift+D duplicate
- Rename "_Export"
↓
Step 3: "Apply Modifiers" (orange box)
- Apply from top to bottom
- Or Convert to Mesh
↓
Step 4: "Check Geometry" (purple box)
- Verify poly count
- Check for errors
- Confirm UVs
↓
Step 5: "Export" (green box)
- FBX/GLB/OBJ
- Selected objects only
↓
Step 6: "Maintain Both" (blue box)
- Keep working file
- Archive export file

Arrows connecting all steps
Side note: "Never lose procedural version"
Clean process diagram style
White background for printing
Resolution: 1200x2000 pixels (vertical)
```

### **Prompt 31: Naming Convention Examples**
```
Create a side-by-side comparison of modifier naming:

LEFT PANEL - "Poor Naming":
Modifier stack showing:
- Mirror
- Array
- Boolean
- Boolean.001
- Boolean.002
- Subdivision Surface
All default names, confusing
Red X indicator
Label: "Unclear, Unprofessional"

RIGHT PANEL - "Good Naming":
Same stack with descriptive names:
- Mirror_Symmetry_X
- Array_Columns_5x
- Boolean_WindowCutouts
- Boolean_DoorOpening
- Boolean_VentHoles
- Subdivision_FinalSmooth
Clear purpose for each
Green checkmark
Label: "Clear, Professional"

Both panels show Blender modifier stack UI
Dark theme (#2b2b2b)
Highlighting shows difference
Professional documentation style
Resolution: 2000x1000 pixels
```

### **Prompt 32: Procedural Colonnade Project Reference**
```
Create a 3D render of completed architectural colonnade:
- Row of 5 classical columns with capitals
- Fluted column shafts (vertical grooves)
- Arches connecting columns at top
- Decorative panel cutouts on arches
- Clean, symmetrical design
- Professional architectural visualization
- Dramatic lighting from side
- Dark background fading to light
- Rendered with realistic materials (marble/stone)
- Wide angle showing entire structure
- High quality, production-ready result
- Demonstrates modifier stack mastery
- Resolution: 2400x1400 pixels
```

### **Prompt 33: Column Base with Fluting Details**
```
Create a 3D viewport screenshot showing column creation step:
- Single classical column in center
- Capital detail at top (wider section)
- Base detail at bottom (wider section)
- Vertical fluting grooves created by Boolean array
- Mirror modifier symmetry visible
- Orange highlight on base geometry
- Cyan wireframe showing Boolean cutters
- Modifier stack visible on side showing:
  - Mirror_Symmetry
  - Boolean_FlutingCuts
  - Bevel_SmoothEdges
- Dark viewport background (#2b2b2b)
- Professional modeling visualization
- Resolution: 1600x1200 pixels
```

### **Prompt 34: Colonnade Array Setup**
```
Create a 3D viewport screenshot showing array duplication:
- Row of 5 complete columns
- Even spacing between columns (2.5 units)
- All columns identical (instances of one base)
- Perspective view showing depth
- Orange highlight on first column (base)
- Cyan wireframe on duplicates
- Modifier stack shows:
  - Previous modifiers
  - Array_Colonnade (Count: 5)
- Spacing indicators visible
- Dark viewport (#2b2b2b)
- Ground plane for context
- Annotation: "5 columns from 1 base"
- Resolution: 2000x1000 pixels
```

### **Prompt 35: Arch Connection System**
```
Create a 3D viewport screenshot showing arch creation:
- Curved arch connecting two columns
- Bezier curve profile visible
- Bevel depth giving arch thickness
- Arch positioned at column tops
- Orange highlight on arch curve
- Columns visible for context (gray)
- Curve control points visible
- Bevel settings shown
- Dark viewport background (#2b2b2b)
- Side/perspective view showing curve
- Annotation: "Arch connects columns"
- Resolution: 1600x1200 pixels
```

### **Prompt 36: Decorative Panel Boolean Cuts**
```
Create a close-up 3D viewport screenshot showing detail work:
- Arch surface with decorative rectangular panel cutouts
- Pattern of recessed panels
- Boolean cutters visible as wireframe
- Array modifier creates repeated pattern
- Orange highlight on cutter objects
- Cyan outline on arch geometry
- Modifier stack shows:
  - Array (on cutters)
  - Boolean_DecorativePanel
  - Bevel_SmoothEdges
- Dark viewport (#2b2b2b)
- Close-up perspective showing detail
- Professional architectural detail
- Resolution: 1600x1200 pixels
```

### **Prompt 37: Modifier Stack Complexity Comparison**
```
Create a side-by-side comparison of simple vs complex stacks:

LEFT PANEL - "Simple Stack":
- Basic cube object
- 2-3 modifiers:
  - Mirror
  - Subdivision Surface
- Result: simple symmetrical object
- Modifier stack clearly visible
- Label: "Simple: 2-3 Modifiers"

RIGHT PANEL - "Complex Stack":
- Architectural element
- 8-10 modifiers:
  - Mirror
  - Array (×2)
  - Boolean (×3)
  - Bevel
  - Subdivision Surface
- Result: intricate procedural structure
- Full modifier stack visible
- Label: "Complex: 8-10 Modifiers"

Both show object and modifier panel
Dark UI theme (#2b2b2b)
Demonstrates professional complexity
Resolution: 2000x1200 pixels
```

### **Prompt 38: Boolean Fast vs Exact Solver**
```
Create a two-panel comparison showing solver differences:

LEFT - "Fast Solver":
- 3D box with circular cutout
- Slight artifacts visible at intersection
- Faster calculation indicator
- Yellow caution icon
- Label: "Fast: Quick but potential artifacts"
- Poly count displayed

RIGHT - "Exact Solver":
- Same box and cutout
- Clean intersection, no artifacts
- Slower calculation indicator
- Green checkmark icon
- Label: "Exact: Slower but cleaner"
- Poly count displayed

Same camera angle and lighting
Dark background (#2b2b2b)
Close-up showing intersection quality
Technical comparison visualization
Resolution: 2000x1000 pixels
```

### **Prompt 39: Subdivision Level Polygon Count Chart**
```
Create a bar chart showing exponential polygon growth:

Vertical bars showing polygon count:
- Base Mesh: 1,000 polys (reference bar)
- Level 1: 4,000 polys (4× bar height)
- Level 2: 16,000 polys (16× bar height)
- Level 3: 64,000 polys (64× bar height)
- Level 4: 256,000 polys (256× bar height)

Color gradient from green (base) to red (level 4)
Multiplication factors labeled: ×4, ×16, ×64, ×256
Warning indicator at Level 4: "Viewport Performance Risk"
Clean infographic style
Dark background (#2b2b2b)
Clear labels and axis
Resolution: 1600x1200 pixels
```

### **Prompt 40: Geometry Nodes in Modifier Stack**
```
Create a screenshot showing Geometry Nodes integration:
- Modifier stack panel with multiple modifiers:
  - Mirror_Symmetry
  - Geometry Nodes (expanded settings)
  - Subdivision_Final
- Object in viewport showing node-generated details
- Geometry Nodes modifier highlighted in orange
- Node editor visible at bottom showing simple node tree
- Demonstrates integration with traditional modifiers
- Dark Blender UI theme (#2b2b2b)
- Professional technical documentation
- Annotations explaining position in stack
- Resolution: 1800x1400 pixels
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Modifier Stack Data Flow Diagram** (#1) - Clean flowchart with boxes and arrows, perfect for vector
2. **General Stack Order Flowchart** (#6) - Sequential process diagram, scalable needed
3. **Modifier Categories Visual Reference** (#7) - Grid layout with icons, clean scaling
4. **Boolean Chain Workflow Diagram** (#9) - Dependency arrows and boxes, vector ideal
5. **Performance Comparison Chart** (#10) - Bar chart, clean lines and text
6. **Modifier Visibility Toggles Reference** (#13) - Icon reference card, needs perfect scaling
7. **Stack Performance Optimization Checklist Visual** (#25) - Checklist layout, text clarity
8. **Modifier Stack Troubleshooting Flowchart** (#26) - Decision tree, clean vector lines
9. **Export Workflow Diagram** (#30) - Process flowchart, vector for clarity

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, arrows, and simple icons. They contain no photorealistic elements or complex gradients. SVG format allows them to scale perfectly at any resolution, maintains crisp text at all sizes, keeps file sizes small, and remains easily editable for future updates. Charts, flowcharts, and infographics benefit most from vector format.

---

## Image Placement Suggestions in HTML

### Section: Understanding the Modifier Stack (id="understanding-stack")
- **After "What Is the Modifier Stack?" subheading:** Insert Image #1 (Modifier Stack Data Flow Diagram)
- **After "Stack Fundamentals" card:** Already has Mermaid diagram, optionally add Image #1 as alternative
- **After "Reading the Modifier Stack" subheading:** Insert Image #2 (Modifier Panel Anatomy)
- **Within "Modifier Data Flow" card:** Insert Image #1 again to reinforce concept

### Section: Stack Order and Dependencies (id="stack-order")
- **After "The Order Matters Principle" subheading:** Insert Image #3 (Mirror Before vs After Subdivision)
- **After Boolean order examples:** Insert Image #4 (Boolean Order Comparison)
- **After Array and Mirror examples:** Insert Image #5 (Array and Mirror Order Variations)
- **Within "General Stack Order Rules" card:** Insert Image #6 (General Stack Order Flowchart)
- **After "Types of Modifiers" subheading:** Insert Image #7 (Modifier Categories Visual Reference)

### Section: Strategic Modifier Combinations (id="strategic-combinations")
- **After "Mirror + Array Workflows" subheading:** Insert Image #14 (Mirror + Array Example)
- **After "Boolean + Bevel + Subdivision" subheading:** Insert Image #15 (Boolean Workflow)
- **Within "Boolean Workflow Checklist":** Insert Image #12 (Cutter Organization)
- **After "Solidify + Array Techniques":** Insert Image #16 (Solidify + Array Example)
- **After "Curve + Array + Deform":** Insert Image #17 (Curve Modifier Example)
- **After "Multiresolution + Mirror Workflow":** Insert Image #18 (Multiresolution Setup)
- **After "Lattice + Subdivision":** Insert Image #19 (Lattice Deformation)

### Section: Advanced Modifier Techniques (id="advanced-techniques")
- **After "Nested Array Patterns":** Insert Image #8 (Nested Array Grid) and Image #20 (Radial Array)
- **After "Boolean Chains":** Insert Image #9 (Boolean Chain Diagram)
- **After "Animated Modifier Stacks":** Insert Image #23 (Animated Parameters) and Image #24 (Build Modifier)
- **After "Displacement + Subdivision":** Insert Image #21 (Displacement Terrain)
- **After "Shrinkwrap Projection Workflows":** Insert Image #22 (Shrinkwrap Example)

### Section: Performance and Optimization (id="performance-optimization")
- **After "Understanding Performance Impact":** Insert Image #10 (Performance Chart)
- **Within "Optimization Strategies":** Insert Image #11 (Viewport vs Render Settings)
- **After "Optimization Strategies" card:** Insert Image #13 (Visibility Toggles)
- **Within "Performance Optimization Checklist":** Insert Image #25 (Optimization Checklist)
- **After "Working with Heavy Stacks":** Insert Image #27 (LOD Comparison)
- **Within "Profiling and Debugging":** Insert Image #26 (Troubleshooting Flowchart)
- **After "Baking and Finalizing":** Insert Image #28 (Applied vs Unapplied)

### Section: Production Workflows (id="production-workflows")
- **After "Team Collaboration":** Insert Image #31 (Naming Convention)
- **After "Export and Interchange":** Insert Image #30 (Export Workflow)
- **Within "Collection Organization":** Insert Image #29 (Collection Organization)
- **Within "Asset Libraries":** Insert Image #40 (Geometry Nodes Integration)

### Section: Hands-On Project (id="project")
- **At start of project section:** Insert Image #32 (Completed Colonnade)
- **After "Phase 1: Create Base Column":** Insert Image #33 (Column Base)
- **After "Phase 3: Create Colonnade":** Insert Image #34 (Colonnade Array)
- **After "Phase 4: Add Connecting Arches":** Insert Image #35 (Arch System)
- **After "Phase 5: Add Decorative Panels":** Insert Image #36 (Decorative Panels)
- **Within "Success Checklist":** Insert Image #37 (Complexity Comparison)

### Section: Lesson Summary (id="summary")
- **Within "Essential Modifier Patterns" table:** Insert Image #38 (Boolean Solver Comparison) and Image #39 (Subdivision Polygon Chart)
- **After "Common Mistakes" card:** Could reference earlier optimization images

---

## File Naming Convention

```
lesson_31_01_modifier_stack_data_flow.svg
lesson_31_02_modifier_panel_anatomy.png
lesson_31_03_mirror_subdivision_comparison.png
lesson_31_04_boolean_order_comparison.png
lesson_31_05_array_mirror_variations.png
lesson_31_06_stack_order_flowchart.svg
lesson_31_07_modifier_categories_reference.svg
lesson_31_08_nested_array_grid.png
lesson_31_09_boolean_chain_diagram.svg
lesson_31_10_performance_comparison_chart.svg
lesson_31_11_viewport_render_settings.png
lesson_31_12_cutter_organization.png
lesson_31_13_visibility_toggles_reference.svg
lesson_31_14_mirror_array_workflow.png
lesson_31_15_boolean_bevel_subdivision.png
lesson_31_16_solidify_array_pattern.png
lesson_31_17_curve_modifier_workflow.png
lesson_31_18_multiresolution_mirror_setup.png
lesson_31_19_lattice_deformation.png
lesson_31_20_radial_array_setup.png
lesson_31_21_displacement_subdivision_terrain.png
lesson_31_22_shrinkwrap_projection.png
lesson_31_23_animated_parameters_timeline.png
lesson_31_24_build_modifier_animation.png
lesson_31_25_optimization_checklist.svg
lesson_31_26_troubleshooting_flowchart.svg
lesson_31_27_lod_comparison.png
lesson_31_28_applied_unapplied_modifiers.png
lesson_31_29_collection_organization.png
lesson_31_30_export_workflow_diagram.svg
lesson_31_31_naming_convention_examples.png
lesson_31_32_procedural_colonnade_final.png
lesson_31_33_column_base_fluting.png
lesson_31_34_colonnade_array_setup.png
lesson_31_35_arch_connection_system.png
lesson_31_36_decorative_panel_cuts.png
lesson_31_37_stack_complexity_comparison.png
lesson_31_38_boolean_fast_exact_solver.png
lesson_31_39_subdivision_polygon_chart.svg
lesson_31_40_geometry_nodes_integration.png
```

**Format guidelines:**
- Use two-digit numbering (01-40)
- Descriptive names use underscores (no spaces)
- Extension based on type:
  - .svg for diagrams, flowcharts, infographics
  - .png for screenshots, composites, 3D renders

---

## Production Priority

### High Priority (Essential for Understanding)

1. **Image #1 - Modifier Stack Data Flow Diagram** - Core concept visualization, appears multiple times
2. **Image #2 - Modifier Panel Anatomy** - Essential UI reference students need immediately
3. **Image #3 - Mirror Before vs After Subdivision** - Critical order concept demonstration
4. **Image #6 - General Stack Order Flowchart** - Foundation principle students must understand
5. **Image #11 - Viewport vs Render Settings** - Critical performance optimization knowledge
6. **Image #15 - Boolean + Bevel + Subdivision Workflow** - Most-used workflow pattern
7. **Image #32 - Procedural Colonnade Project Reference** - Shows what students will create
8. **Image #38 - Boolean Fast vs Exact Solver** - Important technical decision visualization

**Rationale:** These images directly support primary learning objectives: understanding data flow, stack order importance, performance management, and the main project. Without these, core concepts remain abstract.

### Medium Priority (Helpful but not Critical)

9. **Image #4 - Boolean Order Comparison** - Reinforces Boolean workflow understanding
10. **Image #7 - Modifier Categories Reference** - Useful quick reference for modifier types
11. **Image #10 - Performance Comparison Chart** - Helps prioritize optimization efforts
12. **Image #13 - Visibility Toggles Reference** - UI clarity for common controls
13. **Image #14 - Mirror + Array Workflow** - Common pattern demonstration
14. **Image #25 - Optimization Checklist** - Practical performance guide
15. **Image #31 - Naming Convention Examples** - Professional practice demonstration
16. **Image #33-36 - Project Step References** - Helpful for following project steps
17. **Image #39 - Subdivision Polygon Chart** - Visualizes performance implications

**Rationale:** These enhance understanding and provide practical guidance but concepts can be grasped through text and practice without them.

### Lower Priority (Nice to Have)

18. **Image #5 - Array and Mirror Variations** - Specific pattern variation example
19. **Image #8 - Nested Array Grid** - Advanced technique example
20. **Image #9 - Boolean Chain Diagram** - Complex workflow visualization
21. **Image #12 - Cutter Organization** - Organizational best practice
22. **Image #16-22 - Specific Technique Examples** - Various workflow demonstrations
23. **Image #23-24 - Animation Examples** - Advanced animated modifier techniques
24. **Image #26 - Troubleshooting Flowchart** - Debugging reference
25. **Image #27 - LOD Comparison** - Production optimization example
26. **Image #28-30 - Production Workflow Images** - Professional pipeline visuals
27. **Image #37 - Complexity Comparison** - Project context visualization
28. **Image #40 - Geometry Nodes Integration** - Forward-looking integration example

**Rationale:** Supplementary materials that enhance experience but aren't necessary for core concept mastery. Students can understand these concepts through text and experimentation.

---

## Notes

### Style Consistency Guidelines

**Color Palette:**
- Background: Dark grey (#2b2b2b) - matches Blender default dark theme
- Primary UI elements: Medium grey (#3c3c3c)
- Selection highlight: Bright orange (#ff8c00)
- Wireframe: Cyan (#00bcd4) or white (#ffffff)
- Success indicators: Green (#4CAF50)
- Warning indicators: Yellow/Orange (#ffc107)
- Error indicators: Red (#f44336)
- Modifier categories:
  - Modify: Blue (#2196F3)
  - Generate: Purple (#667eea)
  - Deform: Green (#4CAF50)
  - Physics: Red (#f44336)

**Blender Version:**
- Use Blender 4.0+ interface for consistency
- Dark theme throughout
- Modern iconography

**View Angles:**
- Perspective view for 3D depth perception
- Isometric for technical clarity
- Top-down for radial/circular patterns
- Side view for profile demonstrations

**Selection Highlighting:**
- Orange outline (#ff8c00) for selected/base geometry
- Cyan outline (#00bcd4) for generated/duplicated geometry
- Wireframe overlay for showing geometry structure

**Typography:**
- Sans-serif fonts for labels (Arial, Helvetica, Open Sans)
- Clear, readable sizes (minimum 12pt)
- High contrast text (white on dark, dark on light)

**Annotation Style:**
- Arrows: Simple, clean lines with arrowheads
- Callout boxes: Semi-transparent with border
- Leader lines: Straight or single-bend, minimal
- Text backgrounds for readability over complex images

### Accessibility Considerations

- **Color blindness:** Never rely solely on color to convey information
  - Use shapes, patterns, labels in addition to color
  - Red/green distinctions also marked with icons or text
- **Text contrast:** Minimum 4.5:1 contrast ratio for normal text, 3:1 for large text
- **Alternative text:** Each image should have descriptive alt text explaining visual content
- **Icon clarity:** Icons should be recognizable at small sizes (16px minimum)
- **Text size:** Labels readable at reduced sizes (not smaller than 10pt when scaled)

### Technical Specifications

**Screenshot Resolution:**
- Minimum: 1920×1080 pixels (Full HD)
- Preferred: 2560×1440 pixels (2K) for crispness
- High detail shots: 3840×2160 pixels (4K)

**Image Format:**
- PNG for screenshots, composites, UI elements (lossless)
  - 24-bit color depth
  - No compression for master files
  - Light compression for web delivery
- SVG for diagrams, flowcharts, infographics (scalable)
  - Embedded fonts or convert text to paths
  - Optimize for web delivery
- JPG for large photorealistic renders only (if file size critical)
  - Quality: 90-95%
  - Use only when PNG too large

**File Size Target:**
- Individual images: <2MB for web delivery
- SVG files: <500KB
- Master files: No limit (archive quality)

**Compression:**
- PNG: Use pngquant or similar (lossy) for web
- SVG: Optimize with SVGO
- Maintain uncompressed masters

**Responsive Sizing:**
- Provide 1x, 1.5x, 2x versions for responsive web
- Or use srcset with appropriate breakpoints
- SVGs automatically scale (single file)

### Special Considerations for This Lesson

**Modifier Stack Complexity:**
- Many images show complex modifier stacks (8-10+ modifiers)
- Ensure modifier names are readable at display size
- May need to show modifier stack separately from 3D view
- Consider split-panel layouts for clarity

**Sequential Workflows:**
- Several concepts require multi-step visualization
- Use numbered panels or arrows showing progression
- Maintain consistent camera angles across steps
- Before/after comparisons are critical

**Performance Visualization:**
- Charts showing performance impact need clear data
- Use consistent scale/units across all performance images
- Color-coding helps (red=expensive, green=cheap)

**Production Focus:**
- Professional organization examples important
- Clean, well-organized Outliner screenshots
- Descriptive naming conventions clearly shown
- Real-world production context emphasized

### Production Notes

**Blender Scene Setup:**
- Create master .blend file: `lesson_31_image_sources.blend`
- Organized by image number in collections
- Save camera positions for each shot
- Store all source scenes for future updates

**Lighting Setup:**
- Viewport: Default studio lighting or HDRI
- Renders: Three-point lighting for clear form
- Consistent lighting across all 3D shots
- Avoid overly dramatic lighting that obscures detail

**Camera Angles:**
- Save camera presets for repeated angles
- Perspective: 50mm lens, moderate angle
- Orthographic: For technical precision shots
- Consistent framing across similar images

**Batch Processing:**
- Create render queue for all 3D screenshots
- Use consistent render settings across batch
- Output to organized folder structure
- Naming convention applied automatically

**Version Control:**
- Keep source .blend files in version control
- Master images in separate repo/folder
- Web-optimized versions in website assets
- Document any special setup or procedures

**Template Reuse:**
- Create reusable compositor setups for annotations
- Save material presets for consistent look
- Node group libraries for common setups
- Camera rig templates for standard angles

### Workflow Optimization

**Production Order:**
1. Create all SVG diagrams first (fastest, no 3D needed)
2. Batch 3D screenshot setup (all scenes in one file)
3. Render all 3D screenshots in batch
4. Create composites from screenshots
5. Add annotations to final images
6. Optimize for web delivery

**Quality Control Checklist:**
- [ ] All text readable at 50% zoom
- [ ] Consistent lighting across 3D shots
- [ ] Color palette matches specification
- [ ] Annotations don't obscure critical details
- [ ] File sizes within target ranges
- [ ] Alt text written for all images
- [ ] Source files saved and organized
- [ ] Web-optimized versions created

---

## Additional Recommendations Section

### Image Creation Workflow

**Phase 1: Planning (completed)**
- Image requirements documented ✓
- Prompts created ✓
- Priorities assigned ✓
- Technical specs defined ✓

**Phase 2: Production (1-2 weeks estimated)**
- Week 1: High priority images (8 images)
  - SVG diagrams (3-4 hours)
  - Critical screenshots (1-2 days)
  - Main comparisons (1-2 days)
- Week 2: Medium priority images (9 images)
  - Workflow examples (2-3 days)
  - Project references (2-3 days)
- Optional: Lower priority images (as time allows)

**Phase 3: Integration (1-2 days)**
- Insert images into HTML lesson
- Test responsive display
- Verify all links work
- Check page load performance

### Alternative Approaches

**Video Clips:**
- Modifier reordering demonstration (drag modifiers, see real-time result change)
- Array count animation (slowly increase count to show duplication)
- Boolean workflow in action (add cutters, see immediate effect)
- Performance comparison (show viewport lag with high subdivision)

**Interactive Elements:**
- Interactive modifier stack (click to show/hide modifiers, see result)
- Stack order quiz (drag modifiers to correct order)
- Before/after slider for comparisons
- Embedded viewport viewer for 3D examples

**Downloadable Assets:**
- Practice .blend files with modifier stacks to explore
- Project starter file with base geometry
- Modifier template library (.blend file)
- Troubleshooting checklist PDF

### Future Enhancements

**Advanced Visualizations:**
- Animated GIFs showing modifier stack reordering
- Video tutorials embedded alongside text
- Interactive 3D viewer using Three.js
- Zoomable high-res images for detail inspection

**Learning Tools:**
- Self-assessment quiz on stack order principles
- Interactive troubleshooting tool
- Performance calculator (estimate polygon count)
- Modifier compatibility checker

**Community Features:**
- Student project gallery (show colonnade variations)
- Best practices sharing (community modifier templates)
- Troubleshooting forum integration
- Peer review system for projects

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes (#2b2b2b, #ff8c00, etc.)
- [x] SVG recommendations are justified with clear rationale (9 SVGs for scalability)
- [x] Placement suggestions reference actual HTML section IDs (understanding-stack, stack-order, etc.)
- [x] File naming follows consistent convention (lesson_31_01_descriptive_name.ext)
- [x] Priority ranking is logical and justified (High: core concepts, Medium: helpful, Low: supplementary)
- [x] Style/accessibility notes are comprehensive (color palette, contrast, text size)
- [x] Output is well-organized (clear sections, easy navigation, TOC would help)
- [x] Technical specifications cover all production needs (resolution, formats, file sizes)
- [x] Special considerations address lesson-specific requirements (modifier complexity, sequential workflows)
- [x] Production notes include workflow optimization (batch processing, version control)
- [x] Quality control checklist provided for final verification

---

## Summary

This lesson requires **40 images** spanning multiple types:
- **9 SVG diagrams** for flowcharts, infographics, and technical diagrams
- **19 3D viewport screenshots** showing Blender interface and modifier setups
- **9 composites/comparisons** demonstrating before/after and multi-stage processes
- **3 special images** (charts, UI references, outliner screenshots)

**Production priorities:**
- **8 high-priority images** form the essential visual foundation
- **9 medium-priority images** enhance understanding significantly
- **23 lower-priority images** provide comprehensive coverage

**Estimated production time:**
- High priority: 4-5 days
- Medium priority: 4-5 days  
- Lower priority: 8-10 days
- Total: 16-20 days full-time equivalent

**Key characteristics:**
- Heavy emphasis on technical visualization
- Many sequential/comparative images showing modifier stack effects
- Professional production workflow documentation
- Complex 3D scenes requiring careful setup and lighting
- Consistent style across all images matching Blender UI theme

This comprehensive image set will transform Lesson 31 from text-heavy to highly visual, making complex modifier stack concepts clear and accessible. The systematic approach to stack order, strategic combinations, and professional workflows will be reinforced through carefully designed visuals that students can reference during practice.