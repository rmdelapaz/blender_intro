# Image Requirements for Lesson 35: Rigid Body Physics

## Task Summary
**Lesson:** lesson_35_rigid_body_physics.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 35

### **1. Rigid Body Physics Concept Diagram**
- **Purpose:** Illustrate what rigid body physics is and how it differs from other physics systems
- **Type:** SVG Diagram / Comparison Chart
- **Shows:** Four objects (rigid cube, soft ball, cloth, fluid) with labels showing their behavior characteristics

### **2. First Simulation Setup - Falling Cube**
- **Purpose:** Show the basic scene setup for the first tutorial
- **Type:** Screenshot Composite (3-panel)
- **Shows:** Panel 1: Cube elevated above ground plane; Panel 2: Physics Properties with Active selected; Panel 3: Ground plane with Passive physics

### **3. Physics Properties Panel - Active Object**
- **Purpose:** Detailed view of Physics Properties for Active rigid body
- **Type:** Annotated Screenshot
- **Shows:** Physics Properties panel with key settings highlighted: Type dropdown, Mass, Friction, Bounciness, Damping

### **4. Active vs Passive Behavior Comparison**
- **Purpose:** Visual demonstration of the difference between Active and Passive objects
- **Type:** Diagram / Composite (side-by-side)
- **Shows:** Left: Active cube falling with motion blur and arrow; Right: Passive plane stationary with "immovable" indicator

### **5. Collision Detection Process**
- **Purpose:** Illustrate how Blender detects and responds to collisions
- **Type:** SVG Diagram / Sequential Illustration
- **Shows:** 4-stage sequence: Approach → Contact → Impact calculation → Response (bounce/settle)

### **6. Mass Effect Demonstration**
- **Purpose:** Show how mass affects collision behavior
- **Type:** Screenshot Composite (3-panel comparison)
- **Shows:** Three scenarios with different mass values (light 0.1kg, medium 1.0kg, heavy 10.0kg) and resulting behavior after collision

### **7. Friction Values Comparison**
- **Purpose:** Demonstrate how friction affects sliding and rolling
- **Type:** Composite Screenshot / Diagram
- **Shows:** Objects on different surfaces with friction values (0.0 ice, 0.5 wood, 1.0 rubber) showing different slide distances

### **8. Bounciness (Elasticity) Demonstration**
- **Purpose:** Visual explanation of bounciness values and effects
- **Type:** Multi-frame Composite
- **Shows:** Same ball dropped from same height with different bounciness values (0.0, 0.5, 0.9) showing bounce height differences

### **9. Collision Shapes Overview**
- **Purpose:** Show all available collision shape types
- **Type:** SVG Diagram / Reference Chart
- **Shows:** Visual representation of Box, Sphere, Capsule, Cylinder, Cone, Convex Hull, Mesh with icons and use cases

### **10. Collision Shape Comparison**
- **Purpose:** Demonstrate how different shapes affect collision detection
- **Type:** Screenshot Composite
- **Shows:** Same complex object with different collision shapes overlaid (Box, Convex Hull, Mesh) showing wireframe representations

### **11. Collision Margin Visualization**
- **Purpose:** Illustrate what collision margin is and its effect
- **Type:** Diagram with close-up view
- **Shows:** Two objects with visible collision margin "buffer zone" indicated with dotted lines

### **12. Rigid Body Constraints Types**
- **Purpose:** Visual reference for all constraint types
- **Type:** SVG Infographic
- **Shows:** Icons and simple diagrams for Fixed, Point, Hinge, Slider, Piston, Motor, Generic, Spring constraints with brief descriptions

### **13. Point Constraint Setup - Pendulum**
- **Purpose:** Step-by-step visual guide for creating a pendulum
- **Type:** Screenshot Composite (4-panel)
- **Shows:** Scene setup → Constraint placement → Properties panel → Result in motion

### **14. Hinge Constraint Setup - Door**
- **Purpose:** Tutorial visualization for swinging door mechanism
- **Type:** Screenshot Composite (3-panel)
- **Shows:** Door and frame positioned → Hinge constraint at edge → Door mid-swing

### **15. Constraint Properties Panel**
- **Purpose:** Detailed view of constraint settings
- **Type:** Annotated Screenshot
- **Shows:** Physics Properties for constraint with Object 1, Object 2, Breaking Threshold, Disable Collisions highlighted

### **16. Rigid Body World Settings Panel**
- **Purpose:** Show location and key settings for world physics
- **Type:** Annotated Screenshot
- **Shows:** Scene Properties → Rigid Body World section with Gravity, Steps Per Second, Solver Iterations highlighted

### **17. Gravity Direction Visualization**
- **Purpose:** Demonstrate how gravity vector works in 3D space
- **Type:** SVG Diagram
- **Shows:** 3D axis system with gravity vectors for different scenarios (normal -Z, sideways -X, zero gravity)

### **18. Solver Settings Impact**
- **Purpose:** Compare simulation quality at different solver settings
- **Type:** Composite Screenshot (2-panel)
- **Shows:** Low settings (unstable stack) vs High settings (stable stack) side-by-side

### **19. Domino Chain Setup**
- **Purpose:** Visual guide for creating domino effect
- **Type:** Screenshot Composite (top view + perspective)
- **Shows:** Proper domino spacing and alignment with measurements indicated

### **20. Bowling Scene Layout**
- **Purpose:** Overview of bowling simulation setup
- **Type:** Screenshot (angled view)
- **Shows:** Complete scene with ball, pins in triangle formation, lane, with physics properties visible

### **21. Jenga Tower Construction**
- **Purpose:** Show proper stacking technique for tower simulation
- **Type:** Screenshot Composite (3 stages)
- **Shows:** Stage 1: Base layer; Stage 2: Multiple layers; Stage 3: Complete tower

### **22. Newton's Cradle Diagram**
- **Purpose:** Illustrate constraint setup for physics demonstration
- **Type:** Diagram / Annotated Screenshot
- **Shows:** 5 spheres with support points and constraint connections clearly marked

### **23. Performance Optimization Comparison**
- **Purpose:** Show visual difference between optimized and unoptimized setups
- **Type:** Composite (2-panel comparison)
- **Shows:** Left: Complex collision shapes (slow); Right: Simple collision shapes (fast) with performance indicators

### **24. Collision Shape Performance Chart**
- **Purpose:** Reference chart for collision shape speed
- **Type:** SVG Infographic / Bar Chart
- **Shows:** Speed comparison of all collision shapes from fastest (Sphere) to slowest (Mesh)

### **25. Baking Process UI**
- **Purpose:** Show cache/bake settings and button location
- **Type:** Annotated Screenshot
- **Shows:** Rigid Body World cache section with Simulation Start/End, Cache Step, Bake button highlighted

### **26. Tower Collapse Project - Final Result**
- **Purpose:** Show the completed project animation
- **Type:** Multi-frame Composite / Screenshot sequence
- **Shows:** Key frames: Stable tower → Ball approaching → Impact → Mid-collapse → Scattered blocks

### **27. Physical Properties Reference Table Visual**
- **Purpose:** Quick reference for common material settings
- **Type:** Infographic / Visual Table
- **Shows:** Illustrated objects (rubber ball, wood block, metal, concrete) with property values displayed

### **28. Troubleshooting Guide Diagram**
- **Purpose:** Visual decision tree for common problems
- **Type:** SVG Flowchart
- **Shows:** Problem symptoms → diagnostic questions → solutions with branching paths

### **29. Active/Passive Decision Flowchart**
- **Purpose:** Help users decide which type to use
- **Type:** SVG Flowchart / Decision Tree
- **Shows:** Questions leading to Active or Passive choice with example use cases

### **30. Constraint Breaking Demonstration**
- **Purpose:** Show breakable constraint in action
- **Type:** Multi-frame Composite (3-panel)
- **Shows:** Connected objects → Force applied → Constraint breaks and objects separate

---

## AI Image Generation Prompts

### **Prompt 1: Rigid Body Physics Concept Diagram**
```
Create an educational diagram showing four 3D objects representing different physics systems in Blender. Layout should be 2x2 grid.
Top-left: Solid cube labeled "RIGID BODY" with text "Maintains shape, collides, bounces"
Top-right: Squishy ball with deformation labeled "SOFT BODY" with text "Deforms, squishes, jiggles"
Bottom-left: Flowing fabric labeled "CLOTH" with text "Flexible, drapes, folds"
Bottom-right: Liquid splash labeled "FLUID" with text "Flows, splashes, pours"
Style: Clean technical illustration with simple shading
Background: White or light gray
Colors: Each object in different color (blue cube, red ball, purple cloth, cyan water)
Labels: Clear sans-serif font, professional
Context: Educational training material for 3D software
Resolution: 1200x1200 pixels, square format
Include subtle drop shadows for depth


### **Prompt 2: First Simulation Setup - Falling Cube**
```
Create a three-panel horizontal composite showing Blender rigid body setup process.
Panel 1 (left): 3D viewport showing orange cube floating 5 units above gray ground plane, dark viewport background (#2b2b2b), grid floor visible
Panel 2 (center): Blender Physics Properties panel interface showing "Rigid Body" button and "Type: Active" dropdown, clean UI screenshot style
Panel 3 (right): Same 3D viewport with ground plane now selected, showing "Type: Passive" in properties
Style: Professional Blender 4.0 interface screenshots
Background: Standard Blender dark theme
Annotations: Small numbered circles (1, 2, 3) in corners of each panel
Separation: Thin white lines between panels
Context: Step-by-step tutorial illustration
Dimensions: 1920x640 pixels (wide composite)
Keep UI elements crisp and readable


### **Prompt 3: Physics Properties Panel - Active Object**
```
Create an annotated screenshot of Blender's Physics Properties panel for a rigid body object.
Show the complete panel with these sections visible:
- "Rigid Body" header with enabled checkbox
- Type dropdown showing "Active" selected
- Settings section showing: Mass (1.0 kg), Friction (0.5), Bounciness (0.0), Linear/Angular Damping values
- Collisions section showing Shape dropdown and Margin value
Style: Clean Blender 4.0 interface
Background: Dark Blender theme (#2b2b2b)
Annotations: Bright orange (#ff8c00) arrows pointing to: Type dropdown, Mass field, Friction value, Bounciness field, Shape setting
Labels: White text on semi-transparent dark boxes next to arrows
Highlight: Active checkbox should have bright orange outline
Context: Professional training material screenshot
Dimensions: 800x1200 pixels (vertical panel)
Ensure all text is sharp and legible


### **Prompt 4: Active vs Passive Behavior Comparison**
```
Create a side-by-side comparison diagram showing Active vs Passive rigid body behavior.
Left side: Orange cube falling downward with motion blur trail and large downward arrow, labeled "ACTIVE" at top, text below: "Affected by gravity, collides with environment, responds to forces"
Right side: Large gray ground plane, static and stable, labeled "PASSIVE" at top, text below: "Immovable, provides collision surface, not affected by forces"
Middle: Vertical dividing line
Background: Dark gradient (#2b2b2b to #1a1a1a)
Colors: Active cube bright orange (#ff8c00), Passive plane neutral gray (#6e6e6e)
Arrows: Bright cyan (#00f5ff) for motion indicators
Style: Clean technical diagram, educational illustration
Typography: Sans-serif, clear labels
Context: Physics concept explanation for 3D animation course
Dimensions: 1600x800 pixels (2:1 ratio)
Include small physics icons (like ball icon) near labels


### **Prompt 5: Collision Detection Process**
```
Create a 4-stage sequential diagram showing collision detection process.
Stage 1: Two objects approaching (cube and sphere), label "APPROACH", distance indicator
Stage 2: Objects touching, label "CONTACT DETECTED", small collision sparkle effect
Stage 3: Force calculation visualization with arrows showing impact vectors, label "IMPACT CALCULATION"
Stage 4: Objects separating/bouncing, motion trails, label "RESPONSE"
Layout: Horizontal sequence with arrows between stages
Background: Dark gradient (#2b2b2b)
Objects: Orange cube (#ff8c00) and cyan sphere (#00f5ff)
Arrows: White for directional indicators, yellow for force vectors
Text: Labels in white sans-serif font
Style: Technical illustration, educational diagram
Context: Physics simulation explanation
Dimensions: 1920x600 pixels (wide format)
Include subtle drop shadows for depth
Visual clarity prioritized over photorealism


### **Prompt 6: Mass Effect Demonstration**
```
Create a three-panel comparison showing mass effect in rigid body collisions.
Panel 1: Light object (small red sphere, Mass: 0.1kg label) after collision, bounced far away with long motion trail
Panel 2: Medium object (medium blue sphere, Mass: 1.0kg label) after collision, moderate bounce and trail
Panel 3: Heavy object (large gray sphere, Mass: 10.0kg label) after collision, barely moved with tiny trail
All panels show same impact scenario with larger sphere hitting from left
Background: Dark Blender viewport style (#2b2b2b)
Grid floor visible in all panels
Motion trails: Bright cyan (#00f5ff) with fade
Impact point: Small starburst effect in orange (#ff8c00)
Labels: Clear mass values displayed above each sphere
Style: Technical demonstration, clean 3D render
Context: Physics property comparison for training
Dimensions: 1920x640 pixels (three equal panels)
Consistent lighting and camera angle across all panels


### **Prompt 7: Friction Values Comparison**
```
Create a diagram showing three different friction scenarios side-by-side.
Each scenario: Cube on an inclined ramp, different slide distances
Scenario 1: ICE - Friction 0.0, cube slid very far, long trail, light blue ramp, label "Friction: 0.0 (Slippery)"
Scenario 2: WOOD - Friction 0.5, cube slid moderate distance, medium trail, brown ramp, label "Friction: 0.5 (Normal)"
Scenario 3: RUBBER - Friction 1.0, cube barely moved, short trail, dark gray ramp, label "Friction: 1.0 (Grippy)"
Layout: Three angled ramps side-by-side
Background: Dark gray (#2b2b2b)
Cube: Orange (#ff8c00) in all scenarios
Trails: Dotted lines showing path, cyan (#00f5ff)
Measurements: Distance markers at ramp bottom
Style: Educational diagram, technical illustration
Typography: Clean sans-serif labels
Context: Physics property demonstration
Dimensions: 1800x700 pixels
Include small friction coefficient icon in corner of each panel


### **Prompt 8: Bounciness (Elasticity) Demonstration**
```
Create a multi-frame diagram showing three balls with different bounciness values bouncing.
Ball 1 (Left): Red ball, Bounciness 0.0, drops and stays on ground (no bounce), label "Elasticity: 0.0 - No Bounce"
Ball 2 (Center): Blue ball, Bounciness 0.5, bounces to half original height, label "Elasticity: 0.5 - Medium Bounce"
Ball 3 (Right): Green ball, Bounciness 0.9, bounces almost to original height multiple times, label "Elasticity: 0.9 - High Bounce"
Show: Dotted arc lines tracing ball paths, numbered bounce points
Ground: Dark gray plane (#3e3e3e)
Background: Gradient dark to light gray (#2b2b2b to #4e4e4e)
Height markers: Dashed lines showing drop height (10 units marked)
Ball colors: Bright saturated colors (red #ff3333, blue #3366ff, green #33ff66)
Style: Clean technical diagram with motion trails
Typography: Labels with property values
Context: Physics elasticity explanation
Dimensions: 1800x800 pixels
Arc trails should be clear and easy to follow


### **Prompt 9: Collision Shapes Overview**
```
Create a comprehensive visual reference chart showing all Blender rigid body collision shapes.
Layout: 2 rows x 4 columns grid (8 shapes total)
Row 1: Box, Sphere, Capsule, Cylinder
Row 2: Cone, Convex Hull, Mesh, [Performance indicators]
Each cell contains:
- 3D icon representation of the shape
- Shape name as header
- Brief use case text below
- Performance indicator (1-5 stars for speed)
Shapes: Rendered in orange wireframe (#ff8c00) on dark background
Background: Each cell dark gray (#2b2b2b) with subtle border
Icons: Isometric view, consistent size
Text: White sans-serif font, two-line descriptions
Performance stars: Cyan color (#00f5ff)
Special note on Mesh: "Passive Objects Only" in red
Style: Clean infographic, professional reference chart
Context: Technical documentation for 3D physics
Dimensions: 1920x1080 pixels
Include subtle drop shadow on each shape for depth


### **Prompt 10: Collision Shape Comparison**
```
Create a composite image showing same complex object with three different collision shape overlays.
Object: Medium complexity mesh (perhaps a stylized chair or rock)
Panel 1: Box collision shape - Simple rectangular bounding box in orange wireframe, label "Box - Fast but approximate"
Panel 2: Convex Hull - Shrink-wrapped collision outline in cyan wireframe, label "Convex Hull - Moderate speed, good fit"
Panel 3: Mesh - Detailed mesh collision (every polygon) in yellow wireframe, label "Mesh - Slow but precise (Passive only)"
Layout: Three columns, same object/camera angle
Background: Dark Blender viewport (#2b2b2b)
Actual mesh: Subtle gray solid
Collision overlays: Bright colored wireframes (orange #ff8c00, cyan #00f5ff, yellow #ffff00)
Performance indicators: Small speedometer icons below each (full, medium, low)
Style: Technical comparison, Blender viewport rendering
Context: Educational demonstration of collision shape options
Dimensions: 1920x720 pixels
Camera angle: 3/4 view showing all dimensions clearly


### **Prompt 11: Collision Margin Visualization**
```
Create a close-up technical diagram showing collision margin concept.
Main view: Two cubes nearly touching, gap between them
Cube 1 (left): Orange solid cube (#ff8c00)
Cube 2 (right): Blue solid cube (#3366ff)
Margin visualization: Dotted outline around each cube showing invisible buffer zone, labeled "Collision Margin: 0.04"
Gap indication: Measurement line between cubes showing actual separation
Inset zoom panel: Magnified view of gap area with dimensions labeled
Background: Dark technical drawing style (#2b2b2b)
Margin lines: Bright cyan dashed lines (#00f5ff)
Annotations: White arrows pointing to margin area with labels
Text: "Objects never truly touch - margin prevents penetration"
Style: Technical engineering diagram
Typography: Clean sans-serif, measurement callouts
Context: Physics concept explanation
Dimensions: 1400x800 pixels
Include small ruler/measurement icon for scale reference


### **Prompt 12: Rigid Body Constraints Types**
```
Create an infographic showing all 8 rigid body constraint types with icons and descriptions.
Layout: 4 rows x 2 columns grid
Each constraint cell contains:
- Icon representing the constraint type
- Constraint name as bold header
- One-line description
- Example use case in smaller text
Constraints to show:
1. Fixed - Two blocks welded together
2. Point - Ball and socket joint
3. Hinge - Door on hinge
4. Slider - Drawer sliding
5. Piston - Shock absorber
6. Motor - Rotating wheel
7. Generic - Adjustable joint
8. Spring - Bouncy connection
Color scheme: Icons in orange (#ff8c00), backgrounds dark gray (#2b2b2b)
Borders: Subtle cyan accent (#00f5ff)
Icons: Simple, clear, isometric style
Typography: Headers bold, descriptions regular weight
Style: Modern infographic, professional reference
Context: Physics constraints overview for 3D course
Dimensions: 1200x1600 pixels (vertical)
Ensure icons are intuitive and immediately recognizable


### **Prompt 13: Point Constraint Setup - Pendulum**
```
Create a 4-panel tutorial composite showing pendulum creation process.
Panel 1 (top-left): Small passive cube at top, active sphere hanging below, constraint empty shown as small octahedron at cube location, label "1. Position Objects & Constraint"
Panel 2 (top-right): Physics Properties panel showing constraint settings, Object 1: Cube, Object 2: Sphere, Type: Point, label "2. Configure Constraint"
Panel 3 (bottom-left): Sphere pulled to side (displaced), ready to swing, motion arc indicated with dotted line, label "3. Give Initial Position"
Panel 4 (bottom-right): Sphere mid-swing with motion blur, showing pendulum motion, label "4. Simulate!"
Background: Blender dark viewport (#2b2b2b)
Objects: Cube gray, Sphere orange (#ff8c00), Constraint empty cyan octahedron (#00f5ff)
Panel borders: Thin white separators
Numbers: Large circled numbers in corners
Style: Step-by-step tutorial screenshots
Context: Physics constraint tutorial
Dimensions: 1600x1600 pixels (square, 4 panels)
Keep all elements clear and well-lit


### **Prompt 14: Hinge Constraint Setup - Door**
```
Create a 3-panel wide tutorial showing door hinge setup.
Panel 1: Door (flat orange cube) positioned next to door frame (gray cube), touching at one edge, constraint empty at connection point, label "Setup: Door + Frame"
Panel 2: Close-up of Physics Properties showing Hinge constraint settings, Axis: Z, Limits enabled (0° to 90°), label "Configure Hinge"
Panel 3: Door mid-swing at 45° angle, motion arc shown with dotted line, frame stays static, label "Door Swings on Hinge"
View: All panels from above (top-down view) to clearly show rotation
Background: Dark Blender viewport (#2b2b2b), grid visible
Door: Orange (#ff8c00), Frame: Gray (#6e6e6e)
Constraint: Bright cyan indicator (#00f5ff)
Rotation indicators: Curved arrows showing swing direction
Style: Technical demonstration, clear annotations
Context: Constraint tutorial for door mechanism
Dimensions: 1920x640 pixels (3 equal panels wide)
Ensure hinge point is clearly visible in all panels


### **Prompt 15: Constraint Properties Panel**
```
Create an annotated screenshot of rigid body constraint properties panel.
Show full panel with these sections:
- Constraint type dropdown (showing "Hinge" selected)
- Object 1 field with eyedropper icon
- Object 2 field with eyedropper icon
- Breaking Threshold setting (value: 0.0)
- Disable Collisions checkbox (enabled)
- Override Iterations field
- Limits section (for Hinge)
Background: Blender dark theme (#2b2b2b)
Annotations: Orange arrows (#ff8c00) pointing to key settings with labels:
- "Connect these two objects"
- "Force required to break"
- "Prevent jittering"
- "Rotation limits"
Text boxes: Semi-transparent dark backgrounds with white text
Highlights: Important fields outlined in cyan (#00f5ff)
Style: Professional interface documentation
Context: Constraint settings reference
Dimensions: 800x1400 pixels (vertical panel)
Ensure all text is crisp and readable at size


### **Prompt 16: Rigid Body World Settings Panel**
```
Create an annotated screenshot of Scene Properties Rigid Body World section.
Show panel sections:
- Rigid Body World header
- Speed setting (1.0)
- Gravity vector (X: 0, Y: 0, Z: -9.81)
- Steps Per Second (60)
- Solver Iterations (10)
- Cache section with Start/End frames
- Bake button at bottom
Background: Blender Scene Properties dark theme
Annotations: Bright orange arrows (#ff8c00) pointing to:
- Gravity Z value: "Controls fall speed"
- Steps Per Second: "Accuracy setting"
- Solver Iterations: "Stability setting"
- Bake button: "Pre-calculate simulation"
Highlights: Critical settings have cyan outlines (#00f5ff)
Icon: Small world/planet icon visible at top
Style: Clear UI documentation screenshot
Context: World physics settings reference
Dimensions: 800x1200 pixels (vertical)
Include subtle glow on Bake button for emphasis


### **Prompt 17: Gravity Direction Visualization**
```
Create a 3D axis diagram showing different gravity direction scenarios.
Center: 3D axis system (X red, Y green, Z blue) with small cube at origin
Scenario 1 (standard): Vector arrow pointing down Z axis, label "Normal: (0, 0, -9.81) - Earth gravity"
Scenario 2 (sideways): Vector arrow pointing along X axis, label "Sideways: (-9.81, 0, 0) - Objects fall left"
Scenario 3 (zero-g): No arrow, multiple small objects floating, label "Zero-G: (0, 0, 0) - Weightless"
Scenario 4 (custom): Diagonal arrow between axes, label "Custom: (-5, 0, -5) - Diagonal pull"
Background: Dark space-like background (#1a1a1a)
Axes: Bright colored lines (red X, green Y, blue Z)
Gravity vectors: Bright yellow arrows (#ffff00)
Cubes: Orange (#ff8c00)
Style: Technical 3D diagram, educational
Typography: Clear labels with vector values
Context: Physics gravity explanation
Dimensions: 1600x900 pixels
Include small compass rose for orientation reference


### **Prompt 18: Solver Settings Impact**
```
Create a side-by-side comparison of solver settings impact on tower stability.
Panel 1 (left): Unstable tower collapsing, blocks penetrating each other, labeled "Low Settings" with settings overlay: "30 Steps/sec, 5 Iterations", red warning indicator
Panel 2 (right): Stable perfect tower, blocks properly stacked, labeled "High Settings" with settings overlay: "120 Steps/sec, 30 Iterations", green success indicator
Both panels: Same tower configuration, same initial setup
Background: Dark Blender viewport (#2b2b2b)
Blocks: Orange cubes (#ff8c00)
Problem indicators (left): Red circles around penetrating blocks
Success indicators (right): Green checkmarks near stable stack
Settings display: Semi-transparent panels in corners showing values
Style: Direct comparison, technical demonstration
Context: Settings impact visualization
Dimensions: 1920x800 pixels (two equal panels)
Same camera angle for fair comparison
Include small performance meter icon (turtle vs rabbit)


### **Prompt 19: Domino Chain Setup**
```
Create a dual-view diagram showing proper domino spacing and setup.
Top view: Overhead view of 10 dominos in perfect line, spacing measurements between each (0.4 units), dotted alignment guide line
Perspective view: 3/4 angle showing dominos upright with proper height and thickness proportions
Measurement callouts: Distance between dominos, domino dimensions (height, width, depth)
First domino: Highlighted in orange (#ff8c00), slight tilt indicated
Other dominos: Neutral gray
Background: Dark with grid (#2b2b2b)
Annotations: White measurement lines and text
Spacing indicators: Cyan dotted lines (#00f5ff) showing gaps
Expected path: Curved arrow showing falling direction
Style: Technical setup diagram, precision emphasis
Typography: Measurement callouts in engineering style
Context: Domino simulation tutorial
Dimensions: 1920x800 pixels (split view)
Include small "key measurements" legend box


### **Prompt 20: Bowling Scene Layout**
```
Create an angled 3/4 perspective view of complete bowling simulation setup.
Elements visible:
- Long rectangular lane (low friction gray plane)
- Bowling ball at start (large orange sphere, mass labeled "7.0 kg")
- 10 bowling pins in triangle formation at far end (white/gray)
- Initial velocity arrow on ball pointing down lane
- Physics properties panel visible to side showing pin settings
Background: Dark Blender viewport (#2b2b2b)
Lane: Light gray (#6e6e6e) with subtle texture
Ball: Orange (#ff8c00), large and prominent
Pins: White with red stripe pattern
Trajectory: Dotted cyan line (#00f5ff) showing ball path
Labels: Mass values, friction settings displayed near objects
Camera angle: Shows entire scene length, slight elevation
Style: Tutorial setup screenshot with annotations
Context: Complete bowling simulation overview
Dimensions: 1920x1080 pixels
Include small "Start Deactivated: ON" indicator near pins


### **Prompt 21: Jenga Tower Construction**
```
Create a 3-panel progression showing Jenga tower building stages.
Panel 1: Base layer - 3 rectangular blocks side-by-side, label "Stage 1: Foundation Layer"
Panel 2: 4-5 layers built, alternating orientations (horizontal, vertical, horizontal), label "Stage 2: Building Up"
Panel 3: Complete tower, 10+ layers tall, slightly unstable looking, label "Stage 3: Ready to Test"
View: Same angle for all panels, 3/4 perspective
Blocks: Wooden texture, tan/brown color (#d4a574)
Measurements: Layer height indicated, spacing between blocks shown
Rotation indicators: Small curved arrows showing 90° orientation change between layers
Background: Dark Blender viewport (#2b2b2b) with grid
Grid alignment: Visible to show precise placement
Stability note: Small warning icon on tallest tower
Style: Construction tutorial, step-by-step progression
Context: Tower stacking simulation setup
Dimensions: 1920x640 pixels (3 equal panels)
Include small "Critical: High Iterations Required" note


### **Prompt 22: Newton's Cradle Diagram**
```
Create a technical diagram showing Newton's Cradle constraint setup.
Main view: 5 metal spheres in a perfect horizontal line, just touching
Above spheres: 5 support points (small gray cubes) in line
Connections visible: Cyan lines (#00f5ff) connecting each sphere to its support point (Point constraints)
First sphere: Pulled back to side, showing starting position
Constraint indicators: Small cyan octahedron icons at each connection point
Labels on each connection: "Point Constraint"
Background: Dark technical background (#2b2b2b)
Spheres: Metallic gray with reflection
Support points: Small passive cubes labeled "Passive Anchor"
Arc indicator: Dotted line showing first sphere's swing path
Measurements: Distance between spheres (precise alignment critical)
Style: Technical assembly diagram
Typography: Clean labels with connector lines
Context: Constraint physics demonstration setup
Dimensions: 1920x800 pixels (wide horizontal)
Include side-view inset showing support heights


### **Prompt 23: Performance Optimization Comparison**
```
Create a split-screen comparison showing optimization impact.
Left panel: "UNOPTIMIZED - Slow"
- Complex objects with Mesh collision shape (highlighted wireframe)
- Many active objects (20+ shown with active indicators)
- High poly count visible
- Performance meter showing low speed (red)
- Calculation time: "10 seconds per frame"
Right panel: "OPTIMIZED - Fast"
- Same scene, simple Box collision shapes
- Fewer active objects (many converted to passive)
- Low poly collision proxies
- Performance meter showing high speed (green)
- Calculation time: "0.5 seconds per frame"
Background: Split with vertical divider
Left side: Red tint, slow indicators
Right side: Green tint, fast indicators
Objects: Same positioning to show direct comparison
Collision shapes: Wireframe overlays showing complexity difference
Style: Performance comparison, technical demonstration
Context: Optimization techniques illustration
Dimensions: 1920x800 pixels
Include speedometer icons showing performance difference


### **Prompt 24: Collision Shape Performance Chart**
```
Create a horizontal bar chart showing collision shape performance comparison.
Y-axis (shapes listed top to bottom):
- Sphere ⚡⚡⚡⚡⚡ (fastest)
- Box ⚡⚡⚡⚡⚡
- Capsule ⚡⚡⚡⚡
- Cylinder ⚡⚡⚡⚡
- Cone ⚡⚡⚡
- Convex Hull ⚡⚡
- Mesh ⚡ (slowest, marked "Passive Only" in red)
X-axis: Calculation Speed (Fast to Slow)
Bars: Gradient from green (fast) to red (slow)
Each shape: Small icon next to name
Performance indicators: Lightning bolt symbols
Special note: Red warning on Mesh shape
Background: Dark gray (#2b2b2b)
Chart style: Modern, clean, professional
Colors: Green #4CAF50 to Yellow #FFC107 to Red #f44336 gradient
Typography: Clear sans-serif font
Grid lines: Subtle for readability
Context: Performance reference chart
Dimensions: 1600x1000 pixels
Include legend explaining lightning bolt count


### **Prompt 25: Baking Process UI**
```
Create an annotated screenshot of Rigid Body World cache/bake section.
Panel sections visible:
- Cache header
- Simulation Start frame (value: 1)
- Simulation End frame (value: 250)
- Cache Step (value: 1)
- Large prominent "Bake" button (or "Free Bake" if baked)
- Optional: Disk Cache checkbox and path
Background: Scene Properties panel dark theme
Bake button: Highlighted with bright cyan glow (#00f5ff)
Annotations: Orange arrows (#ff8c00) pointing to:
- Start/End: "Define simulation range"
- Cache Step: "Keep at 1 for smoothness"
- Bake button: "Click to pre-calculate"
Status indicator: Small progress bar if mid-bake
Info box: "Saves to disk for instant playback" with folder icon
Style: UI documentation screenshot with callouts
Context: Baking workflow tutorial
Dimensions: 800x700 pixels
Include small warning: "Save file before baking!"


### **Prompt 26: Tower Collapse Project - Final Result**
```
Create a 5-frame sequence showing key moments of tower collapse project.
Frame 1: Stable tower standing upright, ball positioned far left on cable, label "Start: Tower Stable"
Frame 2: Ball swinging toward tower, motion blur visible, label "Approach"
Frame 3: Moment of impact, collision effects, blocks just starting to move, label "Impact"
Frame 4: Mid-collapse, blocks flying in multiple directions, label "Destruction"
Frame 5: Blocks scattered on ground, ball hanging still, label "Aftermath"
Layout: 5 frames in horizontal sequence with arrows between
Background: Dark Blender render background (#2b2b2b)
Tower blocks: Orange/tan construction blocks (#d4a574)
Ball: Dark metallic wrecking ball
Effects: Motion blur, impact particles at collision
Camera: Consistent angle showing full scene
Timing labels: Frame numbers displayed (1, 50, 75, 120, 200)
Style: Cinematic sequence, dramatic lighting
Context: Project completion showcase
Dimensions: 2400x600 pixels (wide 5-panel sequence)
Include subtle dust/debris effects for drama


### **Prompt 27: Physical Properties Reference Table Visual**
```
Create an illustrated reference table showing common material properties.
Layout: 4 rows of illustrated objects with property tables
Row 1: Rubber Ball (bouncy red sphere)
- Mass: 0.5 | Friction: 0.8 | Bounce: 0.8 | Damping: 0.04
Row 2: Wooden Block (textured cube)
- Mass: 1.5 | Friction: 0.6 | Bounce: 0.2 | Damping: 0.04
Row 3: Metal Box (metallic gray cube)
- Mass: 10.0 | Friction: 0.4 | Bounce: 0.2 | Damping: 0.04
Row 4: Concrete Block (rough gray block)
- Mass: 20.0 | Friction: 0.8 | Bounce: 0.05 | Damping: 0.05
Style: Clean product catalog layout
Objects: Rendered 3D icons on left
Properties: Neat table format on right
Background: Light gray gradient for readability
Colors: Realistic material colors
Typography: Monospace font for numbers, consistent spacing
Dividers: Thin lines between rows
Context: Quick reference material for physics setup
Dimensions: 1200x1400 pixels (vertical)
Include small icons for each property type (weight, friction, bounce)


### **Prompt 28: Troubleshooting Guide Diagram**
```
Create a flowchart-style troubleshooting decision tree for common rigid body problems.
Start node: "Rigid Body Problem?"
Branch 1: "Objects pass through?" → Yes → Check: "Increase Steps Per Second" → "Still issue?" → "Increase Collision Margin"
Branch 2: "Tower collapses?" → Yes → Check: "Increase Solver Iterations" → "Still falling?" → "Increase Friction"
Branch 3: "Simulation jitters?" → Yes → Check: "Increase Damping" → "Still shaking?" → "Check Intersections"
Branch 4: "Too slow?" → Yes → Check: "Simplify Collision Shapes" → "Still slow?" → "Reduce Active Objects"
Color coding: Problem nodes (red), check nodes (yellow), solution nodes (green)
Arrows: Clear directional flow with Yes/No labels
Background: Dark gray (#2b2b2b)
Node shapes: Rounded rectangles
Typography: Clear sans-serif, hierarchical
Icons: Small warning/check/fix icons in nodes
Style: Professional flowchart, technical diagram
Context: Diagnostic troubleshooting reference
Dimensions: 1600x1200 pixels
Include legend explaining color meanings


### **Prompt 29: Active/Passive Decision Flowchart**
```
Create a decision tree helping users choose Active vs Passive rigid body type.
Start diamond: "Does object need to move?"
No path → Rectangle: "Make PASSIVE" → Examples: "floors, walls, terrain"
Yes path → Diamond: "Move via physics or animation?"
Physics path → Rectangle: "Make ACTIVE" → Examples: "falling objects, projectiles, rolling balls"
Animation path → Rectangle: "Make PASSIVE + Enable Animated" → Examples: "moving platforms, swinging pendulum anchor"
Flow: Top to bottom with branching
Shapes: Diamonds for decisions, rectangles for outcomes
Colors: Decision diamonds orange (#ff8c00), outcome boxes green (#4CAF50)
Background: White or very light gray for clarity
Arrows: Bold black with clear labels (Yes/No)
Icons: Small object icons next to examples
Typography: Large readable font for questions
Style: Clean flowchart, educational diagram
Context: Type selection guidance
Dimensions: 1000x1400 pixels (vertical)
Include "Most Common: Active" note near Active box


### **Prompt 30: Constraint Breaking Demonstration**
```
Create a 3-frame sequence showing breakable constraint in action.
Frame 1: Two connected objects (cube and sphere linked by constraint), labeled "Connected", constraint visualization visible, Breaking Threshold: 50.0 shown
Frame 2: External force applied (large arrow), stress building, labeled "Force Applied", constraint beginning to strain (visualized with lightning/crack effect)
Frame 3: Constraint broken, objects separated and moving apart, broken constraint indicator, labeled "Constraint Broken!"
Layout: Horizontal 3-panel sequence
Objects: Orange cube and cyan sphere connected by constraint
Constraint: Visualized as cyan line with small markers
Breaking effect: Lightning bolt or crack animation on middle frame
Background: Dark Blender viewport (#2b2b2b)
Force indicator: Large red arrow showing applied force
Motion: Objects have motion blur after breaking
Labels: Frame-specific labels at top
Style: Technical demonstration, clear progression
Context: Breakable constraint tutorial
Dimensions: 1920x640 pixels
Include settings panel showing Breaking Threshold value


---

## SVG Diagram Recommendations

The following images work best as SVG diagrams for clarity, scalability, and small file size:

1. **Rigid Body Physics Concept Diagram** (#1) - Simple geometric shapes with labels, ideal for vector
2. **Collision Detection Process** (#5) - Sequential diagram with arrows and labels
3. **Collision Shapes Overview** (#9) - Icon-based reference chart with text
4. **Rigid Body Constraints Types** (#12) - Infographic with icons and descriptions
5. **Gravity Direction Visualization** (#17) - 3D axis diagram with vectors
6. **Collision Shape Performance Chart** (#24) - Bar chart with data visualization
7. **Troubleshooting Guide Diagram** (#28) - Flowchart with decision nodes
8. **Active/Passive Decision Flowchart** (#29) - Decision tree diagram

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, arrows, and diagrams without photorealistic requirements. SVG format ensures:
- Perfect clarity at any zoom level
- Small file sizes for fast page loading
- Easy editability if content updates needed
- Crisp text rendering at all sizes
- Accessibility for screen readers

---

## Image Placement Suggestions in HTML

### Section: Understanding Rigid Body Physics (id="understanding-rigid-body")
- **After paragraph "Think about everyday objects...":** Insert Image #1 (Rigid Body Physics Concept Diagram)
- **After "How Rigid Body Physics Works" heading:** The Mermaid diagram already exists, supplement with Image #5 (Collision Detection Process) after the existing Mermaid
- **Within comparison table:** The table is effective, but Image #4 (Active vs Passive Behavior) could replace or supplement it

### Section: Your First Rigid Body Simulation (id="first-simulation")
- **At start of "Setting Up the Scene":** Insert Image #2 (First Simulation Setup composite)
- **After Step 3 in Quick Start card:** Insert Image #3 (Physics Properties Panel - Active Object)
- **After "Understanding What You See" heading:** Insert Image #6 (Mass Effect Demonstration) to show physics principles

### Section: Active vs. Passive Objects (id="active-vs-passive")
- **After "Active Objects: The Dynamic Performers" heading:** Insert Image #4 (Active vs Passive Behavior Comparison)
- **After comparison table:** Insert Image #29 (Active/Passive Decision Flowchart)

### Section: Physical Properties (id="physical-properties")
- **After "Friction: The Sliding Controller" heading:** Insert Image #7 (Friction Values Comparison)
- **After "Bounciness (Elasticity)" heading:** Insert Image #8 (Bounciness Demonstration)
- **In "Combining Properties" section:** Insert Image #27 (Physical Properties Reference Table)

### Section: Collision Shapes (id="collision-shapes")
- **After "Available Collision Shapes" heading:** Insert Image #9 (Collision Shapes Overview)
- **After "Choosing the Right Collision Shape" heading:** Insert Image #10 (Collision Shape Comparison)
- **After "Collision Margin" section:** Insert Image #11 (Collision Margin Visualization)
- **After "Performance Impact" heading:** Insert Image #24 (Collision Shape Performance Chart)

### Section: Constraints and Joints (id="constraints")
- **After "Types of Rigid Body Constraints" heading:** Insert Image #12 (Rigid Body Constraints Types)
- **After "Creating Your First Constraint" tutorial:** Insert Image #13 (Point Constraint Setup - Pendulum)
- **After "Creating a Hinged Door" tutorial:** Insert Image #14 (Hinge Constraint Setup - Door)
- **After "Constraint Settings Deep Dive" heading:** Insert Image #15 (Constraint Properties Panel)
- **After "Creating a Chain" tutorial:** Insert Image #22 (Newton's Cradle Diagram)
- **In examples section:** Insert Image #30 (Constraint Breaking Demonstration)

### Section: Rigid Body World Settings (id="world-settings")
- **After "Accessing Rigid Body World Settings" heading:** Insert Image #16 (Rigid Body World Settings Panel)
- **After "Gravity Settings" heading:** Insert Image #17 (Gravity Direction Visualization)
- **After "Solver Settings" heading:** Insert Image #18 (Solver Settings Impact)

### Section: Practical Examples (id="practical-examples")
- **After "Example 1: Domino Chain" tutorial:** Insert Image #19 (Domino Chain Setup)
- **After "Example 2: Bowling Alley" tutorial:** Insert Image #20 (Bowling Scene Layout)
- **After "Example 3: Jenga Tower" tutorial:** Insert Image #21 (Jenga Tower Construction)

### Section: Optimization and Performance (id="optimization")
- **After "Optimization Strategies" heading:** Insert Image #23 (Performance Optimization Comparison)
- **After "Baking Your Simulation" heading:** Insert Image #25 (Baking Process UI)

### Section: Project: Tower Collapse (id="project")
- **After completion of all project steps:** Insert Image #26 (Tower Collapse Project - Final Result)

### Section: Lesson Summary (id="summary")
- **In "Common Problems and Solutions" section:** Insert Image #28 (Troubleshooting Guide Diagram)

---

## File Naming Convention

```
lesson_35_01_physics_concept_diagram.svg
lesson_35_02_first_simulation_setup.png
lesson_35_03_physics_properties_active.png
lesson_35_04_active_passive_comparison.png
lesson_35_05_collision_detection_process.svg
lesson_35_06_mass_effect_demo.png
lesson_35_07_friction_comparison.png
lesson_35_08_bounciness_demo.png
lesson_35_09_collision_shapes_overview.svg
lesson_35_10_collision_shape_comparison.png
lesson_35_11_collision_margin_visualization.png
lesson_35_12_constraints_types_overview.svg
lesson_35_13_point_constraint_pendulum.png
lesson_35_14_hinge_constraint_door.png
lesson_35_15_constraint_properties_panel.png
lesson_35_16_world_settings_panel.png
lesson_35_17_gravity_directions.svg
lesson_35_18_solver_settings_impact.png
lesson_35_19_domino_chain_setup.png
lesson_35_20_bowling_scene_layout.png
lesson_35_21_jenga_tower_construction.png
lesson_35_22_newtons_cradle_diagram.png
lesson_35_23_optimization_comparison.png
lesson_35_24_collision_performance_chart.svg
lesson_35_25_baking_process_ui.png
lesson_35_26_tower_collapse_sequence.png
lesson_35_27_properties_reference_table.png
lesson_35_28_troubleshooting_flowchart.svg
lesson_35_29_active_passive_decision.svg
lesson_35_30_constraint_breaking_demo.png
```

**Format guidelines:**
- Two-digit numbering (01-30)
- Descriptive names with underscores
- .svg for diagrams and charts
- .png for screenshots and composites

---

## Production Priority

### High Priority (Essential for Understanding - Produce First)
1. **Image #2 - First Simulation Setup** - Critical for first hands-on tutorial
2. **Image #3 - Physics Properties Active** - Essential UI reference for beginners
3. **Image #4 - Active vs Passive Comparison** - Core concept visualization
4. **Image #9 - Collision Shapes Overview** - Fundamental reference needed throughout
5. **Image #12 - Constraints Types Overview** - Essential constraint reference
6. **Image #16 - World Settings Panel** - Critical settings location guide
7. **Image #29 - Active/Passive Decision** - Helps prevent fundamental mistakes

**Rationale:** These images support the primary learning objectives and are referenced multiple times throughout the lesson. They address the most common beginner questions and setup issues.

### Medium Priority (Helpful Enhancement - Produce Second)
8. **Image #6 - Mass Effect Demo** - Reinforces property understanding
9. **Image #7 - Friction Comparison** - Visual property demonstration
10. **Image #8 - Bounciness Demo** - Property impact visualization
11. **Image #13 - Point Constraint Pendulum** - Practical constraint example
12. **Image #14 - Hinge Constraint Door** - Common constraint application
13. **Image #18 - Solver Settings Impact** - Shows critical settings importance
14. **Image #19 - Domino Chain Setup** - Popular practical example
15. **Image #20 - Bowling Scene** - Engaging practical application
16. **Image #25 - Baking Process UI** - Important workflow step
17. **Image #28 - Troubleshooting Flowchart** - Problem-solving aid

**Rationale:** These enhance understanding and provide practical guidance but lessons can function without them initially. They support specific tutorials and examples.

### Lower Priority (Nice to Have - Produce Last)
18. **Image #1 - Physics Concept Diagram** - Introductory overview
19. **Image #5 - Collision Detection Process** - Supplementary explanation
20. **Image #10 - Collision Shape Comparison** - Advanced optimization topic
21. **Image #11 - Collision Margin** - Technical detail
22. **Image #15 - Constraint Properties** - Detailed settings reference
23. **Image #17 - Gravity Directions** - Creative applications
24. **Image #21 - Jenga Tower** - One of several examples
25. **Image #22 - Newton's Cradle** - Advanced example
26. **Image #23 - Optimization Comparison** - Performance topic
27. **Image #24 - Performance Chart** - Reference data
28. **Image #26 - Tower Collapse Project** - Final project showcase
29. **Image #27 - Properties Reference** - Supplementary reference
30. **Image #30 - Constraint Breaking** - Advanced technique

**Rationale:** While valuable, these are supplementary materials that enhance rather than enable learning. The lesson functions well without them, though they add polish and depth.

---

## Style Consistency Guidelines

### Color Palette Standards
- **Background:** Dark grey (#2b2b2b) for viewport screenshots
- **Active objects:** Orange (#ff8c00) - bright and visible
- **Passive objects:** Neutral grey (#6e6e6e)
- **Constraints/connections:** Cyan (#00f5ff)
- **Selection highlights:** Bright orange (#ff8c00)
- **UI accents:** Cyan (#00f5ff)
- **Warnings/problems:** Red (#f44336)
- **Success/good:** Green (#4CAF50)
- **Motion trails:** Cyan with fade (#00f5ff)

### Blender Version
- All screenshots should reflect Blender 4.0+ interface
- Use default dark theme
- Consistent icon set across all UI screenshots

### Annotation Style
- **Arrows:** Solid or outlined, bright orange or cyan
- **Text boxes:** Semi-transparent dark backgrounds (#000000 at 70% opacity)
- **Labels:** White text, clear sans-serif font (Arial or similar)
- **Callouts:** Connected to relevant areas with leader lines
- **Emphasis:** Cyan or orange outlines on important elements

### Technical Specifications
- **Screenshot Resolution:** Minimum 1920x1080 for full viewport shots
- **UI Panel Resolution:** 800px wide minimum for readability
- **Composite Panels:** Equal sizing, consistent separation (20-30px white borders)
- **SVG Diagrams:** Clean lines, 2px stroke weight standard
- **Text Size:** Minimum 14pt for labels, 18pt for headers in diagrams

---

## Accessibility Considerations

### Visual Clarity
- High contrast between text and backgrounds (WCAG AA minimum)
- Avoid red-green only distinctions (use shape/pattern too)
- Include descriptive alt text for all images in HTML
- Text on images should be large enough to read when scaled down

### Color Independence
- Don't rely solely on color to convey information
- Use icons, patterns, or labels in addition to color coding
- Ensure diagrams work in grayscale for printability

### Text Alternatives
- All technical terms should be defined in image or nearby text
- Complex diagrams should have step-by-step explanations in lesson text
- Settings values should match actual Blender defaults

---

## Special Considerations for Lesson 35

### Physics Simulation Specifics
- Motion blur effects should be subtle but visible
- Collision visualizations need clear before/after states
- Constraint connections must be obvious in screenshots
- Settings values should reflect working, tested configurations

### Tutorial Accuracy
- All UI screenshots must match current Blender version
- Step numbers and sequences must be clear and sequential
- Property values shown should produce expected results
- Warning indicators where physics can fail

### Performance Visualization
- Speed differences should be obvious in comparisons
- Use visual metaphors (speedometer, loading bars) for performance
- Optimization benefits should be quantifiable in images

---

## Production Notes

### Blender Scene Setup for Screenshots
- Create template scenes for common setups (tower, dominos, bowling)
- Save camera presets for consistent angles across images
- Use consistent lighting (3-point setup with rim light)
- Enable viewport overlays selectively (physics visualization when needed)

### Workflow Optimization
- Batch similar screenshots (all UI panels together)
- Create master .blend file with all example scenes
- Use Blender's camera bookmarks for quick angle switching
- Screenshot at 2x resolution, scale down for crispness

### Version Control
- Keep source .blend files for all screenshot scenes
- Save SVG source files with editable text layers
- Document any Blender settings used for consistency
- Maintain changelog for image updates

### Batch Processing
- Use consistent export settings for all PNGs (8-bit, medium compression)
- Optimize PNGs with tools like TinyPNG or similar
- SVG files should have embedded fonts or convert text to paths
- Create thumbnail versions (400px wide) for quick reference

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All major lesson sections have appropriate visual support
- [ ] Each image has clear educational purpose aligned with lesson objectives
- [ ] AI prompts include specific color codes, style guidance, and context
- [ ] SVG recommendations are justified with clear rationale (scalability, editability)
- [ ] Placement suggestions reference actual HTML section IDs from lesson file
- [ ] File naming follows consistent convention with descriptive, searchable names
- [ ] Priority ranking is logical with clear rationale for each tier
- [ ] Style/accessibility notes address practical production needs
- [ ] Output is well-organized with clear navigation and hierarchy
- [ ] Technical specifications cover all production requirements
- [ ] Special considerations address lesson-specific challenges (physics simulation)
- [ ] All Blender UI screenshots show version 4.0+ interface consistently
- [ ] Physics property values shown will actually work in practice
- [ ] Diagrams are simple enough to understand but detailed enough to be useful
- [ ] Color choices maintain consistency with previous lesson images

---

## Additional Recommendations

### Image Creation Workflow Phases
**Phase 1: Core UI Screenshots (Week 1)**
- Focus on High Priority items #2, #3, #16
- Establish Blender scene template
- Create annotation style guide document
- Test export settings and quality

**Phase 2: Conceptual Diagrams (Week 2)**
- Create SVG diagrams (#1, #5, #9, #12, #29)
- Establish vector style consistency
- Get feedback on clarity and educational value

**Phase 3: Tutorial Screenshots (Week 3)**
- Practical examples and setups (#13, #14, #19, #20)
- Ensure all steps are reproducible
- Verify settings produce expected results

**Phase 4: Advanced Content (Week 4)**
- Optimization, performance, troubleshooting images
- Project showcase and final polish
- Create any missing supplementary images

### Alternative Approaches
- **Video clips:** Consider short 5-10 second GIF loops for motion demonstrations (pendulum swinging, ball bouncing)
- **Interactive elements:** 3D viewport embeds using three.js for constraint visualization
- **Before/after sliders:** Interactive comparison for optimization impacts
- **Hover states:** Show settings panels on hover over relevant objects

### Future Enhancements
- **Downloadable starter .blend files:** Pre-setup scenes for each major tutorial
- **Physics settings presets:** JSON files users can import for common scenarios
- **Interactive physics calculator:** Web tool for mass/friction/bounce relationships
- **Video tutorial series:** Complement written content with screencasts
- **Printable quick reference:** PDF cheat sheet for physics properties
- **Community gallery:** User-submitted rigid body simulations for inspiration

---

## Notes for Specific Images

### Image #2 (First Simulation Setup)
This is the entry point for hands-on learning. Ensure panels are crystal clear, with objects easily distinguished. Consider adding small numbered indicators showing exact sequence.

### Image #9 (Collision Shapes)
This will be referenced throughout the lesson. Make it comprehensive enough to stand alone as a reference. Consider adding small "best for" icons (speed, accuracy, both).

### Image #16 (World Settings)
Many students get stuck not finding these settings. Make location obvious - maybe add breadcrumb trail showing Scene Properties → Rigid Body World.

### Image #24 (Performance Chart)
Use actual benchmark data if possible. If not, make it clear this is comparative/relative. Consider adding example object counts where each shape becomes problematic.

### Image #28 (Troubleshooting)
This should be printable and used as actual reference. Ensure all text is readable even when reduced to letter-size paper. Test print before finalizing.

---

**Total Images Required:** 30 (8 SVG diagrams, 22 raster images)

**Estimated Production Time:**
- High Priority (7 images): 14-21 hours
- Medium Priority (10 images): 20-30 hours  
- Lower Priority (13 images): 26-39 hours
- **Total:** 60-90 hours for complete image set

**File Size Targets:**
- Individual PNGs: 200-500 KB max after optimization
- SVG files: 50-100 KB max
- Total image assets for lesson: ~8-12 MB

This comprehensive image requirements document provides everything needed to create professional, educational visual content for Lesson 35: Rigid Body Physics.
