# Image Requirements for Lesson 40 Part 2: Geometry Nodes Introduction (Continued)

## Task Summary
**Lesson:** lesson_40_geometry_nodes_introduction.html (Parts 06-10)
**Purpose:** Identify and document all images needed to augment the lesson content (Sections: First Node Tree through Next Steps)
**Date:** November 12, 2025

---

## Image List for Lesson 40 (Part 2)

### **16. Cube Stack Project - Complete Node Tree**
- **Purpose:** Show the finished first project node tree
- **Type:** Screenshot (annotated)
- **Shows:** Mesh Line → Instance on Points → Group Output with parameters

### **17. Cube Stack Result Viewport**
- **Purpose:** Show the visual result of the cube stack project
- **Type:** 3D render/screenshot
- **Shows:** 10 cubes stacked vertically with proper spacing

### **18. Parameter Exposure Interface**
- **Purpose:** Demonstrate the "Expose as Input" workflow
- **Type:** Composite (before/after)
- **Shows:** Node parameter → Right-click menu → Group Input socket created

### **19. Modifier Panel with Exposed Parameters**
- **Purpose:** Show where exposed parameters appear for user control
- **Type:** Screenshot
- **Shows:** Modifier properties panel with Count and Offset sliders

### **20. Primitive Nodes Overview Grid**
- **Purpose:** Show common primitive generator nodes
- **Type:** Grid layout (6-8 primitives)
- **Shows:** Mesh Cube, UV Sphere, Cylinder, Grid, Curve Circle, Mesh Line with outputs

### **21. Instance on Points Visual Explanation**
- **Purpose:** Illustrate the instancing concept visually
- **Type:** Diagram with example
- **Shows:** Points (dots) + Template object = Instances at each point

### **22. Transform Operations Comparison**
- **Purpose:** Show difference between Transform Geometry and Set Position
- **Type:** Side-by-side comparison
- **Shows:** Transform (moves all uniformly) vs Set Position (per-vertex control)

### **23. Random Value with Index Pattern**
- **Purpose:** Show the essential pattern for per-element randomness
- **Type:** Node connection diagram
- **Shows:** Index → Random Value (ID input) → Scale/Rotation

### **24. Fence Project - Complete Node Tree**
- **Purpose:** Show the full procedural fence system
- **Type:** Large screenshot (annotated)
- **Shows:** Complete node tree with curve input, posts, rails, and joins

### **25. Fence Project - Visual Results**
- **Purpose:** Showcase the fence following different curve paths
- **Type:** Composite (3 examples)
- **Shows:** Straight fence, curved fence, S-curved fence

### **26. Resample Curve Explanation**
- **Purpose:** Illustrate how Resample Curve distributes points
- **Type:** Diagram
- **Shows:** Curve with evenly spaced points along length

### **27. Curve to Mesh with Profile**
- **Purpose:** Explain the rail creation process
- **Type:** Diagram (step-by-step)
- **Shows:** Curve path + Circle profile = Cylindrical rail

### **28. Join Geometry in Practice**
- **Purpose:** Show posts + rails combining in fence project
- **Type:** Node tree with viewport result
- **Shows:** Three branches (posts, rail 1, rail 2) → Join → Combined fence

### **29. Common Errors - Visual Troubleshooting Guide**
- **Purpose:** Show typical mistakes and their visual symptoms
- **Type:** Grid of 4-6 common issues
- **Shows:** Missing connection, wrong socket type, empty output, overlapping instances

### **30. Spreadsheet Editor in Action**
- **Purpose:** Show how to inspect data with Spreadsheet
- **Type:** Screenshot (split view)
- **Shows:** Node selected + Spreadsheet showing point data/attributes

### **31. Viewer Node Workflow**
- **Purpose:** Demonstrate debugging with Viewer node
- **Type:** Process diagram with example
- **Shows:** Moving Viewer through tree to inspect stages

### **32. Mute Node Comparison**
- **Purpose:** Show muted vs active node behavior
- **Type:** Before/after comparison
- **Shows:** Node active (normal) vs muted (grayed out, data passes through)

### **33. Learning Path Flowchart**
- **Purpose:** Visual roadmap of Geometry Nodes progression
- **Type:** Flowchart diagram
- **Shows:** Beginner → Intermediate → Advanced topics with connections

### **34. Practice Project Examples**
- **Purpose:** Inspire with achievable project examples
- **Type:** Gallery grid (6-8 projects)
- **Shows:** City grid, stone wall, forest, staircase, terrain, building

### **35. Node Groups and Organization**
- **Purpose:** Show how to organize complex node trees
- **Type:** Screenshot comparison
- **Shows:** Messy node tree vs organized with frames and labels

---

## AI Image Generation Prompts

### **Prompt 16: Cube Stack Project - Complete Node Tree**
```
Create an annotated screenshot of a complete Geometry Nodes tree for the cube stack project.

Show the following connected nodes from left to right:

1. GROUP INPUT
2. MESH LINE node
   - Count: 10
   - Mode: Count
   - Offset: (0, 0, 2.5)
3. INSTANCE ON POINTS node
   - Connected to Mesh Line (Points input)
4. MESH CUBE node (separate branch)
   - Size: (1, 1, 1)
5. TRANSFORM GEOMETRY node
   - Connected to Mesh Cube
   - Scale: (0.1, 0.1, 2.0)
   - Translation: (0, 0, 1.0)
6. Connection from Transform Geometry to Instance on Points (Instance input)
7. GROUP OUTPUT connected to Instance on Points

Add clear annotations:
- "1. Generate point line" (Mesh Line)
- "2. Create post template" (Cube + Transform)
- "3. Instance posts at points" (Instance on Points)
- "4. Output result" (Group Output)

Add parameter exposure indicators:
- "Count" on Mesh Line has green input socket (exposed)
- "Offset" on Mesh Line has purple input socket (exposed)

Style: Clean Blender node tree screenshot
Background: Dark grey (#2b2b2b) with grid
Nodes: Blender 4.0 style appearance
Connections: Green for geometry, grey for parameters
Annotations: White text with orange arrows (#ff8c00)
Resolution: 1920x1080 for detail
Context: Complete first project reference

Organize nodes with good spacing in logical flow.
Make the data flow (left to right) very clear.
```

### **Prompt 17: Cube Stack Result Viewport**
```
Create a 3D render showing the result of the cube stack project.

Show in Blender's 3D viewport:
- 10 cubes stacked vertically
- Each cube: 2 units tall, thin (0.1m x 0.1m width)
- Spaced 2.5 units apart (slight gap between cubes)
- Clean geometric appearance
- Starting from ground level (Z=0)

Viewport settings:
- Solid shading mode
- Default grey background
- Subtle ambient lighting
- Camera angle: Slight perspective showing depth
- Orange selection outline around the object (selected state)

Add viewport overlay information:
- Show coordinates (X, Y, Z axes)
- Grid floor visible
- Object origin point at base

Style: Blender viewport screenshot
Background: Default grey (#7f7f7f)
Lighting: Basic three-point setup
Render: Solid shading, no materials
Camera: 45-degree angle showing stack clearly
Resolution: 1920x1080
Context: Project result demonstration

Make the stack look professional and clean.
Show proper spacing and proportions matching tutorial specs.
```

### **Prompt 18: Parameter Exposure Interface**
```
Create a three-panel tutorial showing the parameter exposure workflow.

PANEL 1 - "Before Exposure":
Show Mesh Line node with "Count" parameter as number field
Cursor hovering over "Count" label
No input socket on left side of parameter

PANEL 2 - "Right-Click Menu":
Show context menu appearing after right-clicking "Count" label
Menu options visible:
- "Expose as Input" (highlighted)
- Other options greyed out
Cursor on the "Expose as Input" option

PANEL 3 - "After Exposure":
Show same Mesh Line node
"Count" now has green input socket on left
Line connecting from Group Input to this socket
Group Input shows new "Count" output
Parameter is now controllable externally

Add numbered steps (1, 2, 3) above each panel.
Add annotations explaining what happened in each step.

Style: Step-by-step tutorial panels
Background: Blender's dark theme (#2b2b2b)
Highlight color: Bright cyan for menu selection
Nodes: Standard Blender appearance
Arrows: Show data flow and interactions
Resolution: 1800x700 (3 panels horizontal)
Context: Interactive workflow demonstration

Make the transformation from internal parameter to exposed input very clear.
Use color highlighting to draw attention to changing elements.
```

### **Prompt 19: Modifier Panel with Exposed Parameters**
```
Create a screenshot of the Modifier Properties panel showing exposed Geometry Nodes parameters.

Show the Properties panel (right side of Blender interface):
- Wrench icon (Modifier Properties) highlighted in orange
- "GeometryNodes" modifier listed
- Expanded to show parameters:

PARAMETER 1:
- Label: "Count"
- Type: Integer slider
- Value: 10
- Range: 1 to 100

PARAMETER 2:
- Label: "Offset"
- Type: Vector (XYZ fields)
- Values: X: 0.000, Y: 0.000, Z: 2.500

Add annotations:
- "Exposed parameters appear here" pointing to parameter section
- "Adjust without opening node editor" with arrow
- "Changes update in real-time" note

Include other modifier elements:
- Eye icon (visibility toggle)
- Camera icon (render visibility)
- Collapse/expand arrows
- "Apply" button at bottom

Style: Blender UI screenshot
Background: Blender's properties panel dark theme
Typography: Blender's UI font
Highlights: Orange for active elements (#ff8c00)
Resolution: 600x1000 (vertical panel)
Context: User interface for parameter control

Show realistic Blender modifier panel appearance.
Make parameter controls large and clearly readable.
```

### **Prompt 20: Primitive Nodes Overview Grid**
```
Create a reference grid showing common primitive generator nodes with their outputs.

Layout: 3x3 grid (9 primitives total)

Each cell shows:
- Node preview (small node representation)
- Node name below
- Simple output preview (what geometry it creates)

PRIMITIVES TO SHOW:
1. MESH CUBE → Shows cube wireframe
2. UV SPHERE → Shows sphere wireframe
3. ICO SPHERE → Shows icosphere wireframe
4. CYLINDER → Shows cylinder wireframe
5. CONE → Shows cone wireframe
6. GRID → Shows flat grid mesh
7. MESH LINE → Shows points in a line
8. CURVE CIRCLE → Shows circular curve
9. CURVE LINE → Shows straight line curve

Style: Reference grid layout
Background: Light grey (#f5f5f5) with grid dividers
Nodes: Simplified Blender node appearance
Previews: Wireframe style, cyan/white color
Labels: Clear sans-serif font
Grid lines: Thin dividers between cells
Resolution: 1200x1200 (square grid)
Context: Quick reference for primitive options

Add title at top: "Common Primitive Generators"
Include note: "These nodes create geometry from scratch"
Make each cell self-contained and informative.
```

### **Prompt 21: Instance on Points Visual Explanation**
```
Create an educational diagram explaining the instancing concept.

Show three stages horizontally:

STAGE 1 - "Points" (Left):
Show a line of 5-6 dots (points) evenly spaced
Label: "Instance Locations"
Color: White/cyan dots on dark background

STAGE 2 - "Template" (Center):
Show a single cube (the template object)
Label: "Object to Copy"
Color: Orange (#ff8c00) to stand out

STAGE 3 - "Result" (Right):
Show cubes placed at each point location
Label: "Instances Created"
Color: Green (#4CAF50) to show result

Add a large "+" symbol between stages 1 and 2
Add a large "=" symbol before stage 3

Include annotations:
- "Same object referenced by all instances"
- "Efficient: 1 object in memory, 10 displayed"

Style: Conceptual explanation diagram
Background: Dark grey (#2b2b2b)
Objects: Simple geometric representation
Labels: Clear, prominent text
Symbols: Large, bright operators (+, =)
Resolution: 1600x600 (wide horizontal)
Context: Core concept visualization

Make the concept transformation very clear and intuitive.
Use color progression to show the process.
```

### **Prompt 22: Transform Operations Comparison**
```
Create a side-by-side comparison showing Transform Geometry vs Set Position.

LEFT PANEL - "Transform Geometry":
TOP: Show node - Transform Geometry with Translation Z: 2.0
MIDDLE: Show before state - grid of points at Z=0
BOTTOM: Show after state - entire grid moved up 2 units
All points moved identically
Label: "Uniform Transformation"
Icon: Arrows showing entire object moving

RIGHT PANEL - "Set Position":
TOP: Show node - Set Position with per-point offsets
MIDDLE: Show before state - same grid at Z=0
BOTTOM: Show after state - points at different heights
Wave-like displacement pattern
Label: "Per-Vertex Control"
Icon: Individual point arrows at different heights

Add key differences:
- Left: "Moves object as whole"
- Right: "Moves each point individually"

Style: Technical comparison
Background: Dark grey (#2b2b2b) for nodes, light for 3D views
Grid: Visible in viewport sections
Annotations: Clear labels and icons
Colors: Before in grey, after in green
Resolution: 1600x900 (wide split)
Context: Concept differentiation

Make the distinction between uniform and per-element transformation very clear.
Use color coding and visual flow to show differences.
```

### **Prompt 23: Random Value with Index Pattern**
```
Create a focused diagram showing the essential pattern for randomness.

Show a simple node connection pattern:

NODE 1 - "Index":
- Small node with single output
- Label: "Index"
- Output: Integer socket (dark blue)

NODE 2 - "Random Value":
- Larger node with ID input
- "ID" socket highlighted
- Output: Float or Vector
- Label: "Random Value"

NODE 3 - "Scale Instances" (or "Rotate Instances"):
- Receives random value
- Shows variation in output
- Label: "Apply Variation"

CONNECTION FLOW:
Index → Random Value (ID input) → Scale/Rotate

Add annotations:
- "Each element has unique index" (Index node)
- "Index as seed creates unique random values" (Random Value)
- "Result: Every instance different" (Output)

Include visual result preview:
Show small viewport with instances at different scales/rotations

Style: Essential pattern demonstration
Background: Dark grey (#2b2b2b)
Nodes: Clear, simplified but recognizable
Connections: Bright to show critical path
Highlight: ID socket emphasized in yellow
Resolution: 1200x700
Context: Critical pattern for variation

Add "ESSENTIAL PATTERN" banner at top.
Make this feel like a reference card for constant use.
```

### **Prompt 24: Fence Project - Complete Node Tree**
```
Create a comprehensive annotated screenshot of the complete procedural fence node tree.

Show all nodes organized in logical branches:

BRANCH 1 - CURVE PATH:
- Group Input (Curve)
- Resample Curve (Length: 2.0)
Split into two paths from here:

PATH A - POSTS:
- Curve to Points
- Mesh Cube → Transform Geometry (post shaping)
- Instance on Points (posts at curve points)

PATH B - RAILS:
- Curve Circle (radius: 0.03)
- Curve to Mesh (using Curve Circle as profile)
- Transform Geometry (rail 1, Z: 1.5)
- Transform Geometry (rail 2, Z: 0.7) [duplicate branch]

CONVERGENCE:
- Join Geometry (combines posts + rail 1 + rail 2)
- Group Output

Add colored annotations for each major section:
- "1. Sample Curve Path" (cyan)
- "2. Create Post Template" (orange)
- "3. Instance Posts" (green)
- "4. Generate Rails" (blue)
- "5. Combine All" (purple)

Show parameter exposures:
- Resample "Length" exposed
- Post Transform "Scale" exposed
- Rail Transform "Translation Z" exposed

Style: Large detailed node tree screenshot
Background: Blender's dark grey (#2b2b2b) with grid
Connections: Color-coded by data type
Organization: Clean layout with logical flow
Annotations: Minimal but informative labels
Resolution: 2560x1440 for maximum detail
Context: Complete project reference

Use frames or visual grouping to organize complex sections.
Make the overall data flow very clear despite complexity.
```

### **Prompt 25: Fence Project - Visual Results**
```
Create a three-panel showcase showing the fence on different curve paths.

PANEL 1 - "Straight Fence":
Show fence along straight path
5-6 posts in perfect line
Two horizontal rails connecting them
Label: "Linear Path"
Clean, simple result

PANEL 2 - "Curved Fence":
Show fence following gentle curve
Posts follow curve naturally
Rails bend smoothly between posts
Label: "Curved Path"
Demonstrate path-following

PANEL 3 - "S-Curve Fence":
Show fence along S-shaped curve
Multiple direction changes
Rails handle complex path smoothly
Label: "Complex Path"
Show system flexibility

Each panel should show:
- Clear 3D perspective
- Proper post spacing
- Rail continuity
- Professional appearance

Style: Rendered examples showcase
Background: Gradient backdrop (lighter at top)
Lighting: Three-point lighting setup
Materials: Simple but clean (wood-like for posts/rails)
Camera: Angled to show 3D depth
Resolution: 1800x600 (3 equal panels)
Context: Project capability demonstration

Add caption: "Same node setup adapts to any curve path"
Make results look professional and appealing.
```

### **Prompt 26: Resample Curve Explanation**
```
Create a diagram showing how Resample Curve distributes points along a curve.

Show two states:

TOP - "Before Resample":
Curved line (bezier curve)
Original control points visible (4-5 points)
Uneven spacing
Label: "Original Curve - Uneven point distribution"

BOTTOM - "After Resample":
Same curve shape
Many evenly spaced points along entire length
Points shown as small dots
Spacing measurement lines between points (all equal)
Label: "Resampled Curve - Even spacing"

Add annotations:
- "Original: 5 control points" (top)
- "Resampled: 20 evenly spaced points" (bottom)
- "Length parameter: 2.0 units between points"

Include Resample Curve node representation:
Show node with "Mode: Length" and "Length: 2.0"

Style: Technical diagram
Background: White or light grey (#f5f5f5)
Curve: Dark blue line
Points: Bright dots (orange #ff8c00)
Measurements: Dimension lines showing equal spacing
Resolution: 1200x800 (vertical emphasis)
Context: Operation explanation

Make the even distribution very obvious visually.
Use measurement indicators to emphasize equal spacing.
```

### **Prompt 27: Curve to Mesh with Profile**
```
Create a step-by-step diagram explaining rail creation with Curve to Mesh.

Show three stages:

STAGE 1 - "Path Curve":
Show a curved line in 3D space
Label: "Path to follow"
Color: Blue line

STAGE 2 - "Profile Curve":
Show a small circle (cross-section)
Label: "Cross-section shape"
Color: Orange circle
Show it positioned at start of path

STAGE 3 - "Swept Mesh":
Show cylindrical tube following the path
The circle swept along the blue curve
Label: "Result: Cylindrical rail"
Color: Green mesh

Add "+" between stages 1 and 2
Add "=" before stage 3

Include node representation:
Show "Curve to Mesh" node with two inputs:
- "Curve" (path) ← Blue
- "Profile Curve" (circle) ← Orange

Style: 3D process diagram
Background: Gradient (light to dark)
Objects: Wireframe style for clarity
Labels: Clear technical font
Process flow: Left to right
Resolution: 1600x600 (wide)
Context: Complex operation visualization

Make the sweeping/extrusion concept very clear.
Show 3D perspective to understand spatial relationships.
```

### **Prompt 28: Join Geometry in Practice**
```
Create a diagram showing how Join Geometry combines fence components.

Show node tree structure:

THREE INPUT BRANCHES:
Branch 1: "Posts" (Instance on Points output) - orange
Branch 2: "Top Rail" (Transform Geometry output) - blue
Branch 3: "Bottom Rail" (Transform Geometry output) - blue

CONVERGENCE:
All three branches connect to "Join Geometry" node
Single output from Join Geometry to Group Output

Include viewport preview:
BEFORE JOIN (three separate previews):
- Posts only
- Top rail only
- Bottom rail only

AFTER JOIN (single preview):
- Complete fence with all components visible

Add annotations:
- "Three geometry streams" pointing to branches
- "Join Geometry combines all" at convergence
- "Single combined output" at result

Style: Node tree with viewport integration
Background: Blender dark theme (#2b2b2b)
Branches: Color-coded for clarity
Viewport: Split showing before/after
Resolution: 1600x1000
Context: Practical pattern demonstration

Make the convergence point very obvious.
Use color coding to track each component.
Show the necessity of Join Geometry clearly.
```

### **Prompt 29: Common Errors - Visual Troubleshooting Guide**
```
Create a 2x3 grid showing common Geometry Nodes errors and their visual symptoms.

ERROR 1 - "No Output Connection":
Show: Nodes but nothing connects to Group Output
Viewport: Empty (no geometry visible)
Label: "Object disappears"
Fix: "Connect nodes to output"

ERROR 2 - "Wrong Socket Type":
Show: Grey socket trying to connect to green socket
Visual: Connection fails/error indicator
Label: "Can't connect nodes"
Fix: "Match socket types or use converter"

ERROR 3 - "Missing Instance":
Show: Instance on Points with nothing connected to Instance input
Viewport: Points visible but no copies
Label: "No instances appear"
Fix: "Connect geometry to Instance input"

ERROR 4 - "Overlapping Instances":
Show: Instance on Points with too-small offset
Viewport: Cubes overlapping/intersecting
Label: "Instances too close"
Fix: "Increase spacing parameter"

ERROR 5 - "Realized Performance":
Show: Realize Instances node with 10,000+ instances
Viewport: Lag icon/spinning wheel
Label: "Viewport lag"
Fix: "Remove Realize or reduce count"

ERROR 6 - "Missing Points":
Show: Instance on Points with mesh input instead of points
Viewport: Unexpected result or nothing
Label: "Wrong geometry type"
Fix: "Use Mesh to Points or Curve to Points"

Style: Troubleshooting reference grid
Background: Light grey (#f5f5f5) with grid lines
Each cell: Node preview + viewport + label + fix
Icons: Error symbols (red X or warning triangle)
Text: Clear, concise problem/solution pairs
Resolution: 1800x1200 (2x3 grid)
Context: Quick debugging reference

Add title: "Common Errors & Fixes"
Make errors immediately recognizable.
Provide clear, actionable solutions.
```

### **Prompt 30: Spreadsheet Editor in Action**
```
Create a split-screen image showing Spreadsheet editor usage.

LEFT SIDE - "Node Tree":
Show node tree with one node selected (highlighted in yellow)
Example: Mesh Line node selected
Arrow pointing to it with label: "Selected node"

RIGHT SIDE - "Spreadsheet Editor":
Show Spreadsheet displaying data from selected node
Table layout with columns:
- Index (0, 1, 2, 3, 4...)
- Position (Vector values: X, Y, Z)
- ID (Integer values)
- Any other attributes

Highlight features:
- Domain selector at top (Points/Edges/Faces/Instances)
- Pin icon (to lock view to specific node)
- Row count indicator
- Column headers clearly labeled

Add annotations:
- "Node selection determines data" (node tree)
- "View point/face/edge data" (spreadsheet)
- "Verify geometry and attributes" (spreadsheet)

Style: Interface demonstration
Background: Blender's dark theme (#2b2b2b)
Selected node: Yellow highlight
Spreadsheet: Data table with clear grid
Typography: Monospace for data values
Resolution: 1920x1080 (split 60/40)
Context: Data inspection workflow

Show realistic data values.
Make the connection between node and data display clear.
Include enough rows to show pattern of data.
```

### **Prompt 31: Viewer Node Workflow**
```
Create a process diagram showing Viewer node debugging workflow.

Show a simple node chain:
Input → Node A → Node B → Node C → Output

STEP 1:
Viewer connected to Node A
Viewport preview shows geometry at stage A
Label: "Check stage 1"

STEP 2:
Viewer moved to Node B
Viewport preview shows geometry at stage B
Label: "Check stage 2"

STEP 3:
Viewer moved to Node C
Viewport preview shows geometry at stage C
Label: "Check stage 3"

Add workflow annotations:
- "Move Viewer through tree" (showing movement arrows)
- "Viewport displays that stage" (viewport indicator)
- "Find where problem occurs" (troubleshooting note)

Include visual indicators:
- Viewer node has camera icon
- Yellow connection to Viewer (different from normal green)
- Viewport shows changing geometry at each stage

Style: Workflow tutorial diagram
Background: Dark grey (#2b2b2b)
Viewer connection: Bright yellow (#FFC107)
Normal connections: Standard green
Movement: Animated-style arrows (static image)
Resolution: 1600x900
Context: Debugging technique demonstration

Add tip box: "Viewer displays intermediate results without changing final output"
Make the progressive inspection concept clear.
```

### **Prompt 32: Mute Node Comparison**
```
Create a before/after comparison showing muted node behavior.

TOP PANEL - "Active Node":
Show node tree: Input → Node A → Node B → Node C → Output
Node B is normal (full color)
Viewport shows result with Node B's effect applied
Label: "Normal Operation"
Visual: Full color, active appearance

BOTTOM PANEL - "Muted Node":
Same node tree: Input → Node A → Node B → Node C → Output
Node B is muted (greyed out, slightly transparent)
Dotted line showing data bypassing Node B
Viewport shows result WITHOUT Node B's effect
Label: "Node Muted (M key)"
Visual: Greyed out, semi-transparent

Add annotations:
- "Press M to mute selected node" (instruction)
- "Data passes through unchanged" (data flow)
- "Useful for testing and comparison" (use case)

Show visual differences:
- Active: Full colors, solid appearance
- Muted: Grey, transparent, dashed connections

Style: Comparison demonstration
Background: Blender theme (#2b2b2b)
Active state: Normal vibrant colors
Muted state: Desaturated, transparent
Viewport: Split showing different results
Resolution: 1400x1000 (vertical comparison)
Context: Feature explanation

Make the muted state obviously different visually.
Show how data flow changes with muting.
```

### **Prompt 33: Learning Path Flowchart**
```
Create a flowchart showing the Geometry Nodes learning progression.

TIER 1 - BEGINNER (Top):
Box 1: "Interface & Navigation"
Box 2: "Node Basics"
Box 3: "Simple Instances"
All connected to next tier
Color: Green (#4CAF50)

TIER 2 - INTERMEDIATE (Middle):
Box 4: "Fields & Attributes"
Box 5: "Noise & Randomness"
Box 6: "Curves & Proximity"
Connected from Tier 1, leading to Tier 3
Color: Blue (#2196F3)

TIER 3 - ADVANCED (Bottom):
Box 7: "Simulations"
Box 8: "Custom Node Groups"
Box 9: "Complex Systems"
Connected from Tier 2
Color: Purple (#9C27B0)

Add connecting arrows showing progression.
Include time estimates: "Weeks 1-2", "Weeks 3-6", "Months 2-3"

Add branching paths:
- Architecture specialization
- Nature/organic specialization
- Motion graphics specialization
- Abstract/procedural art

Style: Professional flowchart
Background: White or light grey (#f5f5f5)
Boxes: Rounded rectangles with tier colors
Arrows: Directional with gradient
Typography: Clear hierarchy with sizing
Resolution: 1400x1000 (vertical flow)
Context: Learning roadmap visualization

Add title: "Your Geometry Nodes Learning Path"
Include milestone indicators at each tier.
Show optional branches clearly.
```

### **Prompt 34: Practice Project Examples**
```
Create a gallery grid showcasing beginner-to-intermediate practice projects.

Layout: 3x2 grid (6 projects) or 4x2 grid (8 projects)

PROJECT 1 - "City Grid":
Grid of building instances at varying heights
Label: "Procedural City"
Difficulty: ⭐ Beginner

PROJECT 2 - "Stone Wall":
Brick pattern with offset rows
Label: "Brick/Stone Pattern"
Difficulty: ⭐ Beginner

PROJECT 3 - "Forest Scatter":
Trees distributed on terrain
Label: "Tree Distribution"
Difficulty: ⭐⭐ Intermediate

PROJECT 4 - "Procedural Staircase":
Stairs with railings
Label: "Parametric Stairs"
Difficulty: ⭐⭐ Intermediate

PROJECT 5 - "Cable Along Curve":
Pipe/cable following path with connectors
Label: "Cable System"
Difficulty: ⭐⭐ Intermediate

PROJECT 6 - "Terrain with Features":
Landscape with roads, trees, water
Label: "Terrain Generator"
Difficulty: ⭐⭐⭐ Advanced

Each cell includes:
- Rendered example
- Project name
- Difficulty rating
- Key concepts used

Style: Portfolio showcase grid
Background: Neutral grey gradient
Renders: Professional quality
Labels: Clear, readable text
Grid lines: Subtle dividers
Resolution: 1800x1200 (gallery format)
Context: Project inspiration and progression

Add title: "Practice Projects: Beginner to Advanced"
Make projects look achievable but impressive.
```

### **Prompt 35: Node Groups and Organization**
```
Create a before/after comparison showing node tree organization.

LEFT PANEL - "Unorganized":
Show complex node tree with:
- Nodes scattered randomly
- Crossing connections (spaghetti noodles)
- No visual grouping
- Unclear data flow
- No labels or frames
Label: "Hard to Read & Maintain"
Visual chaos indicators

RIGHT PANEL - "Organized":
Same functionality but cleaned up:
- Nodes aligned in logical flow
- Clean left-to-right progression
- Frames grouping related nodes (with labels)
- Color-coded sections
- Clear annotations
- Reroute points cleaning up long connections
Label: "Clear & Professional"
Visual clarity indicators

Add organizational techniques highlighted:
- "Frames group related nodes" (Frame example)
- "Reroutes clean connections" (Reroute point example)
- "Labels document purpose" (Label example)
- "Alignment improves readability" (Grid alignment)

Style: Professional practice comparison
Background: Blender dark theme (#2b2b2b)
Left: Intentionally messy but realistic
Right: Clean, aligned, well-organized
Frames: Colored backgrounds with labels
Resolution: 1920x800 (wide comparison)
Context: Best practices demonstration

Add title: "Node Tree Organization Matters"
Include tips: "Use Frames (Ctrl+J), Reroutes (Shift+RMB), Labels (F2)"
Make the improvement obvious and aspirational.
```

---

## SVG Diagram Recommendations

**Recommended for SVG format:**
1. **Image #21 - Instance on Points Visual Explanation**
   - Simple geometric shapes and arrows
   - Concept diagram without photorealistic elements
   - Benefits from crisp vector rendering
   - File size: ~6KB

2. **Image #26 - Resample Curve Explanation**
   - Technical diagram with measurements
   - Lines, dots, and dimension indicators
   - Scalable for detail viewing
   - File size: ~8KB

3. **Image #33 - Learning Path Flowchart**
   - Boxes, arrows, and text
   - Perfect for vector format
   - Easy to update as curriculum evolves
   - File size: ~12KB

4. **Image #27 - Curve to Mesh with Profile**
   - 3D concept visualization with simple shapes
   - Wireframe representation works well as vector
   - Clean technical illustration
   - File size: ~10KB

**Rationale for SVG recommendations:**
These images are primarily:
- Conceptual diagrams rather than interface screenshots
- Geometric shapes, lines, and text
- Benefit from infinite scalability
- Easy to edit and maintain
- Smaller file sizes improve page load times
- Accessibility benefits (searchable text, screen reader friendly)

---

## Image Placement Suggestions in HTML

### Section: Building Your First Node Tree (id="first-node-tree")
- **At section start:** Insert Image #16 (Complete Cube Stack Node Tree) as reference
- **After Step 3 completion:** Insert Image #17 (Cube Stack Result) showing success
- **Within "Step 5: Make It Interactive":** Insert Image #18 (Parameter Exposure workflow)
- **After exposing parameters:** Insert Image #19 (Modifier Panel with controls)

### Section: Essential Beginner Nodes Reference (id="essential-nodes")
- **After "Primitive Generators" heading:** Insert Image #20 (Primitive Nodes Grid)
- **Within "Instance Operations" section:** Insert Image #21 (Instance on Points Explanation)
- **In "Geometry Operations" section:** Insert Image #22 (Transform vs Set Position)
- **Within "Common Patterns" discussion:** Insert Image #23 (Random Value Pattern)

### Section: Practical Project - Procedural Fence (id="practical-project")
- **At project overview:** Insert Image #24 (Complete Fence Node Tree) as reference
- **After Phase 6 completion:** Insert Image #25 (Fence Visual Results showcase)
- **Within Phase 3 (Sample Points):** Insert Image #26 (Resample Curve explanation)
- **Within Phase 5 (Rails):** Insert Image #27 (Curve to Mesh process)
- **Within Phase 6 (Combine):** Insert Image #28 (Join Geometry in practice)

### Section: Troubleshooting (id="troubleshooting")
- **At section start:** Insert Image #29 (Common Errors Grid) as quick reference
- **Within "Debugging Tools" section:** Insert Image #30 (Spreadsheet Editor)
- **Within "Viewer Node" explanation:** Insert Image #31 (Viewer Workflow)
- **Within "Mute Nodes" section:** Insert Image #32 (Mute Comparison)

### Section: Next Steps (id="next-steps")
- **After "Immediate Next Topics":** Insert Image #33 (Learning Path Flowchart)
- **Within "Practice Projects" section:** Insert Image #34 (Project Examples Gallery)
- **Within "Effective Practice" discussion:** Insert Image #35 (Organization comparison)

---

## File Naming Convention

```
lesson_40_16_cube_stack_node_tree.png
lesson_40_17_cube_stack_result.png
lesson_40_18_parameter_exposure.png
lesson_40_19_modifier_panel_controls.png
lesson_40_20_primitive_nodes_grid.png
lesson_40_21_instance_on_points_explanation.svg
lesson_40_22_transform_vs_set_position.png
lesson_40_23_random_value_pattern.png
lesson_40_24_fence_complete_node_tree.png
lesson_40_25_fence_visual_results.png
lesson_40_26_resample_curve_explanation.svg
lesson_40_27_curve_to_mesh_process.svg
lesson_40_28_join_geometry_practice.png
lesson_40_29_common_errors_grid.png
lesson_40_30_spreadsheet_editor_action.png
lesson_40_31_viewer_node_workflow.png
lesson_40_32_mute_node_comparison.png
lesson_40_33_learning_path_flowchart.svg
lesson_40_34_practice_projects_gallery.png
lesson_40_35_node_organization_comparison.png
```

**Format guidelines:**
- Continue numbering from Part 1 (16-35)
- PNG for screenshots, complex composites, and rendered examples
- SVG for diagrams, flowcharts, and concept visualizations
- Two-digit numbering maintains sort order
- Descriptive names clearly indicate content

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #16 - Cube Stack Node Tree** - Shows complete first project for reference
2. **Image #24 - Fence Complete Node Tree** - Main practical project reference
3. **Image #21 - Instance on Points Explanation** - Core instancing concept
4. **Image #23 - Random Value Pattern** - Essential pattern students use constantly
5. **Image #29 - Common Errors Grid** - Critical troubleshooting reference

**Rationale:** These images support hands-on projects and essential patterns that students will use immediately and reference repeatedly.

### Medium Priority (Helpful Enhancement)
6. **Image #17 - Cube Stack Result** - Shows expected outcome for validation
7. **Image #25 - Fence Visual Results** - Demonstrates project flexibility
8. **Image #18 - Parameter Exposure** - Important workflow for user-friendly systems
9. **Image #22 - Transform Comparison** - Clarifies common confusion point
10. **Image #26 - Resample Curve** - Explains key operation in fence project
11. **Image #27 - Curve to Mesh** - Visualizes rail creation process
12. **Image #30 - Spreadsheet Editor** - Important debugging tool

**Rationale:** These enhance project comprehension and show important techniques, but projects can be completed without them.

### Lower Priority (Nice to Have)
13. **Image #19 - Modifier Panel** - Interface element students can discover
14. **Image #20 - Primitive Nodes Grid** - Reference content (exploreable in Blender)
15. **Image #28 - Join Geometry Practice** - Reinforces concept from Part 1
16. **Image #31 - Viewer Workflow** - Advanced debugging technique
17. **Image #32 - Mute Comparison** - Feature demonstration
18. **Image #33 - Learning Path** - Planning/motivation rather than instruction
19. **Image #34 - Project Gallery** - Inspiration and next steps
20. **Image #35 - Organization** - Best practice (not essential for beginners)

**Rationale:** Supplementary materials that improve the learning experience but aren't critical for project completion or concept understanding.

---

## Style Consistency Guidelines

### Color Palette (Continued from Part 1)
- **Background:** Dark grey (#2b2b2b) - Blender's dark theme
- **Selection highlight:** Bright orange (#ff8c00) - Blender's selection color
- **Geometry sockets:** Green (#4CAF50) - geometry data
- **Float/parameter sockets:** Grey (#9E9E9E)
- **Vector sockets:** Purple (#9C27B0)
- **Boolean sockets:** White or light grey
- **Success/result:** Green (#4CAF50)
- **Error/problem:** Red (#f44336)
- **Viewer highlight:** Bright yellow (#FFC107)
- **Annotations:** White text on semi-transparent dark (#000000AA)

### Project-Specific Elements
- **Cube stack:** Keep cubes simple, thin (0.1x0.1x2.0), orange when selected
- **Fence posts:** Wooden appearance optional, keep clean geometry visible
- **Rails:** Cylindrical, smaller diameter than posts
- **Curves:** Blue or cyan for path curves
- **Profile curves:** Orange for distinction

### Annotation Consistency
- **Numbered steps:** Circled numbers (1, 2, 3) for sequential processes
- **Arrows:** Solid orange (#ff8c00) for important pointers
- **Callout boxes:** Semi-transparent dark background, white text
- **Highlights:** Yellow boxes or outlines for key elements
- **Labels:** Sans-serif font, appropriate sizing for context

### Result Showcases
- **Rendered examples:** Professional lighting (3-point or HDRI)
- **Materials:** Simple but clean (not distracting from geometry)
- **Camera angles:** Show depth and structure clearly
- **Background:** Gradient or neutral backdrop
- **Multiple views:** Consistent camera distance/angle across panels

---

## Technical Specifications

### Screenshot Capture Settings
- **Interface shots:** 1920x1080 minimum, 2560x1440 preferred
- **Node trees:** Capture at high resolution for detail
- **DPI:** 96 DPI for web, 150 DPI for print materials
- **Format:** PNG 24-bit with transparency where needed

### 3D Renders
- **Resolution:** 1920x1080 for single views
- **Sampling:** Sufficient to eliminate noise (128+ samples)
- **Format:** PNG for transparency support, JPG for solid backgrounds
- **File size:** Optimize to <500KB while maintaining quality

### Composite Images
- **Panel layouts:** Equal sizing for fair comparison
- **Dividers:** 2-4px solid lines between panels
- **Margins:** Consistent spacing (20-30px) around elements
- **Alignment:** Grid-based for professional appearance

### Grid Layouts
- **Cell sizing:** Equal dimensions for uniform appearance
- **Gutters:** 10-20px spacing between cells
- **Border:** 1-2px subtle border for definition
- **Title space:** Reserve 80-100px at top for heading

---

## Accessibility Considerations

### Alt Text Examples for Part 2 Images

**Image #16 - Cube Stack Node Tree:**
"Complete Geometry Nodes tree for cube stack project showing Mesh Line generating points, Mesh Cube transformed to post shape, Instance on Points placing cubes at each point location, with exposed Count and Offset parameters connected to Group Input, flowing to Group Output."

**Image #21 - Instance on Points Explanation:**
"Three-stage diagram showing instancing concept: Stage 1 shows line of point locations, Stage 2 shows single cube template object, Stage 3 shows cubes placed at each point location, demonstrating efficient duplication where one object is referenced multiple times."

**Image #24 - Fence Complete Node Tree:**
"Comprehensive node tree for procedural fence system showing curve input resampled for even spacing, splitting into two main branches: posts branch creating and instancing post geometry along curve points, and rails branch creating two horizontal rails at different heights using Curve to Mesh, all branches converging at Join Geometry before output."

**Image #29 - Common Errors Grid:**
"Six-panel troubleshooting grid showing common Geometry Nodes errors: no output connection causing disappearing geometry, wrong socket type preventing connections, missing instance input showing points without copies, overlapping instances from insufficient spacing, performance lag from realized instances, and wrong geometry type causing unexpected results. Each panel shows the error symptom and clear fix."

**Image #33 - Learning Path Flowchart:**
"Learning progression flowchart showing three tiers of Geometry Nodes education: Beginner tier with interface, node basics, and simple instances in green; Intermediate tier with fields, noise, and curves in blue; Advanced tier with simulations and custom groups in purple. Arrows show progression from beginner through intermediate to advanced topics, with estimated time frames and optional specialization branches."

### Color Contrast Verification
- **Text on dark:** White (#FFFFFF) on dark grey (#2b2b2b) = 14:1 ratio ✓
- **Annotations:** Ensure minimum 7:1 contrast ratio
- **Important elements:** Use both color AND shape/icon differentiation
- **Error indicators:** Red combined with X symbol or warning icon

### Screen Reader Compatibility
- **SVG diagrams:** Include proper title and desc tags
- **Complex images:** Provide detailed text alternative in HTML
- **Sequential processes:** Use ordered lists in alt text
- **Data tables:** Describe structure and key data points

---

## Special Considerations for This Lesson (Part 2)

### Project Complexity
- **Progressive detail:** Start with simple overview, add detail gradually
- **Step-by-step visuals:** Each project phase gets visual confirmation
- **Reference quality:** Complete project images must be high-detail for reference
- **Variant examples:** Show system flexibility with multiple examples

### Practical Application Focus
- **Working examples:** All project images should be accurate and reproducible
- **Parameter values:** Show exact values used in examples
- **Troubleshooting emphasis:** Error images must show realistic problems
- **Workflow demonstration:** Process images show practical techniques

### Learning Path Integration
- **Concept progression:** Images build on concepts from Part 1
- **Future-looking:** Some images hint at advanced topics to come
- **Motivation:** Gallery and examples inspire continued learning
- **Reference utility:** Images serve as long-term reference materials

### Performance Considerations
- **Complex node trees:** High resolution critical for readability
- **Multiple instances:** Show realistic counts (not extreme)
- **Render times:** Example renders should be achievable on student hardware
- **File optimization:** Balance detail with reasonable file sizes

---

## Production Notes

### Node Tree Capture Workflow
1. **Setup clean scene:** Factory defaults, clear naming
2. **Organize nodes:** Use auto-arrange or manual spacing
3. **Expose parameters:** Show all user-facing controls
4. **Add frames/labels:** Organize complex sections
5. **Capture at 200% zoom:** Scale down for crisp detail
6. **Annotate separately:** Add callouts after capture

### 3D Render Setup for Projects
- **Consistent lighting:** Save lighting setup as preset
- **Camera presets:** Standard angles for showcasing
- **Material library:** Simple materials for clarity
- **Render layers:** Separate renders for compositing
- **Batch rendering:** Queue multiple angles/variations

### Diagram Creation Workflow
1. **Sketch concept:** Paper sketch of idea flow
2. **Build in vector tool:** Figma, Illustrator, or Inkscape
3. **Follow style guide:** Colors, fonts, spacing
4. **Export optimized SVG:** Remove unnecessary elements
5. **Test at various sizes:** Ensure scalability
6. **Add semantic structure:** Title and description tags

### Error Example Creation
- **Real mistakes:** Capture actual errors, not staged
- **Clear symptoms:** Show obvious visual problems
- **Simple contexts:** Don't complicate with extra elements
- **Solutions visible:** Include fix in same image or caption
- **Common patterns:** Focus on errors beginners encounter

---

## Quality Checklist

Before finalizing Part 2 images, verify:

- [ ] All project sections (First Node Tree, Essential Nodes, Fence Project, Troubleshooting, Next Steps) have appropriate image support
- [ ] Each image has clear educational purpose defined and serves practical function
- [ ] AI prompts include exact specifications (colors with hex codes, dimensions, style guidance)
- [ ] SVG recommendations are justified with clear technical and practical rationale
- [ ] Placement suggestions reference actual HTML section IDs from lesson file
- [ ] File naming continues sequence from Part 1 (16-35) with descriptive names
- [ ] Priority ranking is logical with specific justification for each tier
- [ ] Style consistency maintained with Part 1 (colors, fonts, layout)
- [ ] Accessibility notes comprehensive (alt text examples, contrast ratios)
- [ ] Technical specs appropriate for each image type (resolution, format, size)
- [ ] Special considerations address practical application focus
- [ ] Production notes provide clear workflow guidance
- [ ] Project images are accurate and reproducible
- [ ] Troubleshooting images show realistic common problems
- [ ] Learning path materials inspire and guide progression

---

## Integration Notes

### Combining Parts 1 & 2
- **Total images:** 35 images across both parts
- **Consistent numbering:** Sequential from 1-35
- **Style continuity:** Same color palette, typography, layouts
- **Cross-references:** Part 2 builds on concepts from Part 1
- **Complementary content:** No duplication, each part stands alone but enhances the other

### Complete Lesson Coverage
- **Sections 01-05 (Part 1):** Interface, concepts, node anatomy, data flow
- **Sections 06-10 (Part 2):** Hands-on projects, node reference, troubleshooting, learning path
- **Comprehensive support:** Every major section has visual aids
- **Balance:** Mix of concept diagrams, interface screenshots, and practical examples

### Usage Recommendations
- **For students:** Use as visual reference while following lesson
- **For instructors:** Adapt images for presentations and workshops
- **For documentation:** Include in downloadable course materials
- **For testing:** Use to verify understanding (identify elements, explain processes)

---

## Conclusion

This Part 2 image requirements document completes the visual asset planning for Lesson 40: Geometry Nodes Introduction. Together with Part 1, it provides comprehensive coverage of:

**Part 1 (Images 1-15):**
- Workspace and interface orientation
- Node fundamentals and anatomy
- Data flow concepts
- Connection patterns

**Part 2 (Images 16-35):**
- Practical project construction
- Essential node reference
- Troubleshooting and debugging
- Learning progression planning

The complete 35-image set ensures students have visual support for:
- **Understanding concepts** (diagrams and explanations)
- **Following tutorials** (step-by-step process images)
- **Building projects** (complete reference screenshots)
- **Solving problems** (troubleshooting guides)
- **Planning growth** (learning path visualizations)

All images are designed with professional production standards, accessibility considerations, and practical teaching utility in mind. The systematic approach ensures consistency, clarity, and educational effectiveness throughout the lesson.
