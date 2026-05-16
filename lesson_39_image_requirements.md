# Image Requirements for Lesson 39: Rigging Essentials

## Task Summary
**Lesson:** lesson_39_rigging_essentials.html
**Purpose:** Identify and document all images needed to augment the rigging essentials lesson content
**Date:** November 12, 2025
**Lesson Focus:** Professional character rigging with IK/FK systems, custom controls, constraints, and complete biped rig building

---

## Image List for Lesson 39

### **1. Three-Layer Rig Architecture Diagram**
- **Purpose:** Illustrate the DEF/MCH/CTRL layer separation
- **Type:** SVG Diagram / Infographic
- **Shows:** Three distinct layers with example bones in each, showing data flow from controls to deformation

### **2. IK vs FK Visual Comparison**
- **Purpose:** Show the fundamental difference between rotation-based and position-based control
- **Type:** Composite diagram (side-by-side)
- **Shows:** Same arm pose achieved with FK (rotation arrows) vs IK (position target)

### **3. FK Arm Control Chain**
- **Purpose:** Demonstrate FK rotation hierarchy
- **Type:** Annotated screenshot/diagram
- **Shows:** Arm with FK controls (circles), rotation arrows showing parent-child relationships

### **4. IK Arm Setup with Pole Target**
- **Purpose:** Show complete IK system components
- **Type:** Annotated screenshot
- **Shows:** Hand IK target, elbow pole target, resulting arm position with visible constraint connections

### **5. IK/FK Influence Slider Interface**
- **Purpose:** Show the custom property that switches between modes
- **Type:** Screenshot (UI detail)
- **Shows:** Blender properties panel with arm_IK_FK slider at different values

### **6. Custom Control Shapes Library**
- **Purpose:** Display various control shape types
- **Type:** Composite (grid layout)
- **Shows:** Circle controls, hand shapes, foot shapes, pole target spheres, all with labels

### **7. Bone Groups Color Coding**
- **Purpose:** Illustrate color organization system
- **Type:** Screenshot with annotations
- **Shows:** Rig with left controls (blue), right controls (red), center controls (yellow)

### **8. IK Chain Components Breakdown**
- **Purpose:** Educational diagram of IK anatomy
- **Type:** Technical diagram/SVG
- **Shows:** Chain bones, IK target, pole target, constraint relationships with labels

### **9. Pole Target Positioning**
- **Purpose:** Show correct vs incorrect pole target placement
- **Type:** Comparison composite (before/after or good/bad)
- **Shows:** Elbow pointing correctly with proper pole vs elbow flipping with wrong pole

### **10. Copy Rotation Constraint Setup**
- **Purpose:** Show constraint panel configuration
- **Type:** Screenshot (UI focus)
- **Shows:** Bone Constraints panel with Copy Rotation settings, target selection, influence slider

### **11. Limit Rotation Constraint Application**
- **Purpose:** Demonstrate joint limiting
- **Type:** Composite (side-by-side)
- **Shows:** Elbow bending normally vs prevented from bending backward by limit constraint

### **12. Track To Constraint - Eye Tracking**
- **Purpose:** Show automated eye control
- **Type:** Animated sequence or composite
- **Shows:** Both eyes following a single target control as it moves

### **13. Arm Rig Component Overview**
- **Purpose:** Complete arm rig anatomy reference
- **Type:** Labeled technical diagram
- **Shows:** All arm bones (DEF, FK, IK, MCH) color-coded with labels and hierarchy lines

### **14. Arm IK Chain Setup Steps**
- **Purpose:** Step-by-step visual guide
- **Type:** Multi-panel composite (4-6 panels)
- **Shows:** Creating IK bones → adding constraint → positioning pole → testing result

### **15. Arm FK Chain Setup Steps**
- **Purpose:** Step-by-step visual guide
- **Type:** Multi-panel composite (3-4 panels)
- **Shows:** Duplicating bones → parenting chain → adding custom shapes

### **16. IK/FK Snapping Problem Illustration**
- **Purpose:** Show why snapping is necessary
- **Type:** Problem/solution composite
- **Shows:** Arm popping when switching modes without snapping vs smooth transition with snapping

### **17. Leg Rig Foot Hierarchy**
- **Purpose:** Critical foot control structure
- **Type:** Technical diagram/SVG
- **Shows:** IK_foot → heel_pivot → toe_pivot → leg_target with hierarchical connections

### **18. Foot Roll Animation Sequence**
- **Purpose:** Demonstrate heel-to-toe rolling motion
- **Type:** Sequential composite (5-7 frames)
- **Shows:** Heel contact → flat foot → ball contact → toe push-off

### **19. Foot Pivot Point Locations**
- **Purpose:** Show correct pivot bone placement
- **Type:** Annotated screenshot (top and side views)
- **Shows:** Heel pivot at back of foot, toe pivot at ball, with measurement indicators

### **20. Leg IK Setup Complete**
- **Purpose:** Show all leg IK components assembled
- **Type:** Annotated screenshot
- **Shows:** Complete leg with IK foot control, knee pole, pivot controls visible and labeled

### **21. Spine Control System Overview**
- **Purpose:** Illustrate COG + Chest architecture
- **Type:** Technical diagram
- **Shows:** Root → COG → Spine bones → Chest hierarchy with influence percentages

### **22. Spine Blending Visualization**
- **Purpose:** Show how middle spine bones interpolate
- **Type:** Gradient/interpolation diagram
- **Shows:** COG (100% influence) → gradual blend → Chest (100% influence) with percentages

### **23. COG Control Functions**
- **Purpose:** Demonstrate what COG controls
- **Type:** Composite (3-4 examples)
- **Shows:** COG moving/rotating with resulting character poses (crouch, lean, weight shift)

### **24. Chest Control Functions**
- **Purpose:** Demonstrate what chest controls
- **Type:** Composite (3-4 examples)
- **Shows:** Chest rotating with resulting upper body twist, lean, and arm following

### **25. Root Control Visualization**
- **Purpose:** Show master control purpose
- **Type:** Simple diagram with arrows
- **Shows:** Large root control at ground with character, arrows showing world space movement

### **26. Complete Rig Layer Organization**
- **Purpose:** Show bone layer management
- **Type:** Screenshot (layers panel)
- **Shows:** Blender layers panel with DEF (31), MCH (30), Controls (1-2) highlighted

### **27. Rig Testing Poses Reference**
- **Purpose:** Standard test poses for rig verification
- **Type:** Composite (6-8 poses)
- **Shows:** T-pose, sitting, reaching up, contrapposto, action pose, walk pose

### **28. Common Rigging Mistakes**
- **Purpose:** Visual troubleshooting guide
- **Type:** Problem/solution grid
- **Shows:** Common issues (elbow flipping, foot not rolling, spine breaking) with fixes

### **29. Constraint Stack Order**
- **Purpose:** Show constraint evaluation order matters
- **Type:** Screenshot with annotations
- **Shows:** Bone Constraints panel with multiple constraints, arrows showing top-to-bottom evaluation

### **30. Custom Shape Assignment Process**
- **Purpose:** Step-by-step UI guide
- **Type:** Multi-panel screenshot sequence
- **Shows:** Creating shape mesh → Bone Properties → Custom Shape dropdown → Result

### **31. Workflow Flowchart - Complete Rig Build**
- **Purpose:** Overview of entire rigging process
- **Type:** SVG Flowchart
- **Shows:** Preparation → Spine → Arms → Legs → Polish with decision points

### **32. Pole Angle Adjustment**
- **Purpose:** Show how pole angle affects joint direction
- **Type:** Comparison composite
- **Shows:** Same IK setup at different pole angles (0°, 90°, -90°, 180°) with resulting elbow positions

### **33. Symmetry and Mirroring**
- **Purpose:** Show left-to-right mirroring process
- **Type:** Before/after composite
- **Shows:** Completed left arm rig → mirrored to right with bone name changes

### **34. Driver Setup for IK/FK Switching**
- **Purpose:** Show driver configuration
- **Type:** Screenshot (Graph Editor - Drivers)
- **Shows:** Driver expression "1.0 - var" connecting custom property to constraint influence

### **35. Complete Character Rig - Final Result**
- **Purpose:** Showcase finished professional rig
- **Type:** Beauty shot (multiple angles)
- **Shows:** Character with all controls visible, color-coded, in neutral pose with clean viewport

### **36. Rig Control Interface Reference**
- **Purpose:** Control identification guide
- **Type:** Labeled diagram/infographic
- **Shows:** All main controls with names, colors, and brief descriptions of function

### **37. Weight Painting Integration**
- **Purpose:** Show relationship between weights and rig
- **Type:** Split-screen composite
- **Shows:** Weight paint mode on left, posed rig deforming mesh on right

### **38. Animation-Ready Rig in Action**
- **Purpose:** Demonstrate rig being animated
- **Type:** Composite (timeline + viewport)
- **Shows:** Character in mid-animation pose with timeline showing keyframes

---

## AI Image Generation Prompts

### **Prompt 1: Three-Layer Rig Architecture Diagram**
```
Create a clean technical diagram showing character rig architecture with three distinct layers.

CONTENT:
- Top layer labeled "CTRL (Control Bones)" in bright green (#4CAF50)
  - Show example bones: hand_IK.L, foot_IK.L, COG (with custom circle/hand/foot shapes)
  - Label: "What animators interact with"
  
- Middle layer labeled "MCH (Mechanism Bones)" in blue (#2196F3)
  - Show example bones: MCH_IK_upper_arm.L, MCH_IK_shin.L (standard bone shapes)
  - Label: "Behind-the-scenes calculations"
  
- Bottom layer labeled "DEF (Deformation Bones)" in purple (#667eea)
  - Show example bones: DEF_upper_arm.L, DEF_forearm.L (weighted to mesh)
  - Label: "Actually deform the mesh"

- Arrows flowing top to bottom showing: CTRL controls MCH controls DEF controls MESH
- Silhouette of character mesh at bottom in gray

STYLE:
- Clean technical illustration style
- Dark background (#2b2b2b)
- Bright accent colors for each layer
- Clear hierarchical layout (vertical stack)
- Professional training material aesthetic
- Sharp, legible labels in white text

LAYOUT:
- Vertical three-layer stack
- Each layer clearly separated with horizontal dividing lines
- Arrows showing data flow direction
- Character silhouette integrated at bottom
- 1920x1080 resolution for clarity

TECHNICAL:
- Vector-style illustration (simulates SVG quality)
- High contrast for readability
- Suitable for both light and dark theme viewing
```

### **Prompt 2: IK vs FK Visual Comparison**
```
Create a side-by-side comparison showing FK vs IK control methods for character arms.

CONTENT LEFT SIDE (FK):
- Character arm in reaching pose
- Three visible rotation controls: shoulder (large orange circle), elbow (medium orange circle), wrist (small orange circle)
- Curved rotation arrows showing each joint rotating independently
- Label at top: "FK - Forward Kinematics (Rotation-Based)"
- Caption: "Rotate each joint individually - natural arcing motion"
- Shoulder control has "30°" label
- Elbow control has "45°" label

CONTENT RIGHT SIDE (IK):
- Same character arm in identical reaching pose
- Single hand control (hand-shaped widget in bright cyan)
- Knee/elbow pole target (small sphere in front of elbow)
- Straight line from shoulder to hand control showing direct relationship
- Label at top: "IK - Inverse Kinematics (Position-Based)"
- Caption: "Move hand target - joints calculate automatically"
- Hand control has "Target Position" label

STYLE:
- Clean technical illustration
- Dark gray background (#2b2b2b)
- FK controls in orange/yellow (#ff8c00)
- IK controls in cyan (#00bcd4)
- Character arm in light gray wireframe
- Professional educational diagram style

LAYOUT:
- Perfect vertical split (50/50)
- Thin white dividing line between sides
- Labels clearly positioned at top of each side
- Same arm pose on both sides for direct comparison
- 1920x1080 resolution

TECHNICAL:
- Both sides show same end result (hand position)
- Emphasize different input methods (rotations vs position)
- Annotations should be clear and readable
- Use arrows to show motion/control flow
```

### **Prompt 3: FK Arm Control Chain**
```
Create an educational diagram showing FK arm control chain with parent-child relationships.

CONTENT:
- Character arm extended to side (T-pose position)
- Three FK control bones visible as orange circles with increasing size:
  - FK_upper_arm.L (large circle at shoulder)
  - FK_forearm.L (medium circle at elbow)  
  - FK_hand.L (small circle at wrist)
  
- Curved rotation arrows showing hierarchy:
  - Arrow from shoulder control: "Rotating this moves entire arm"
  - Arrow from elbow control: "Rotating this moves forearm + hand"
  - Arrow from wrist control: "Rotating this moves only hand"
  
- Parent-child connection lines (dotted white lines connecting controls)
- Small inset showing same arm bent with rotation annotations

STYLE:
- Dark background (#2b2b2b)
- Orange FK controls (#ff8c00) with white outlines
- Arm bones in light gray wireframe
- White annotation text with arrows
- Professional training material look
- Clear, readable labels

LAYOUT:
- Main arm view takes 70% of canvas (left side)
- Small bent-arm example in top right corner (30%)
- Rotation arrows clearly visible and well-spaced
- Labels positioned to avoid overlap
- 1920x1080 resolution

TECHNICAL:
- Emphasize decreasing control size (visual hierarchy)
- Show parent-child connection clearly
- Rotation arrows should be curved and natural-looking
- Multiple annotation layers for educational clarity
```

### **Prompt 4: IK Arm Setup with Pole Target**
```
Create an annotated diagram showing complete IK arm system components.

CONTENT:
- Character arm reaching forward at 90-degree angle
- Hand IK target visible (cyan hand-shaped control at wrist position)
- Elbow pole target visible (small cyan sphere in front of elbow, about forearm-length away)
- IK chain bones (upper arm and forearm) shown in darker gray
- Deformation bones shown in light gray

ANNOTATIONS WITH LEADER LINES:
- "IK Target (hand_IK.L)" pointing to hand control
  - Sub-label: "Move this to position hand"
  
- "Pole Target (elbow_pole.L)" pointing to sphere
  - Sub-label: "Controls elbow direction"
  
- "IK Constraint on forearm" with arrow to middle of arm
  - Sub-label: "Chain Length: 2"
  
- Dotted line showing relationship between pole and elbow
- Straight line from shoulder to hand showing IK solution path

STYLE:
- Dark background (#2b2b2b)
- Cyan IK controls (#00bcd4) with glow effect
- Light gray arm mesh/bones
- White annotation lines and text
- Professional technical illustration
- Clean, uncluttered composition

LAYOUT:
- Arm positioned diagonally (bottom-left to upper-right)
- Pole target clearly visible in front of arm
- Annotations positioned for maximum clarity
- No overlapping labels
- 1920x1080 resolution

TECHNICAL:
- Show spatial relationship between all three components
- Pole target positioned correctly (in front, proper distance)
- IK chain clearly identified
- Emphasize this is the "target" animators move
```

### **Prompt 5: IK/FK Influence Slider Interface**
```
Create a screenshot-style image showing the custom property UI for IK/FK switching.

CONTENT:
- Blender Properties panel (right-side panel typical layout)
- "Custom Properties" section expanded
- Property named "arm_L_IKFK" visible with slider
- Slider at three positions shown in sequence or separate views:
  - Top view: Slider at 0.0 with label "0.0 = FK Mode"
  - Middle view: Slider at 0.5 with label "0.5 = 50/50 Blend"
  - Bottom view: Slider at 1.0 with label "1.0 = IK Mode"

- Each view shows corresponding rig behavior:
  - FK mode: FK controls highlighted in orange
  - Blend mode: Both control sets semi-visible
  - IK mode: IK controls highlighted in cyan

UI DETAILS:
- Blender 4.0 interface styling (dark theme)
- Property slider with numeric value visible
- Min: 0.0, Max: 1.0, Default: 0.0 shown
- Description field: "IK/FK arm switch - 0=FK, 1=IK"
- Keyboard shortcut or quick access hints

STYLE:
- Accurate Blender UI appearance
- Dark gray panels (#383838)
- Slider in Blender blue (#5680c2)
- White text for labels
- Annotations in bright green (#4CAF50)
- Professional screenshot aesthetic

LAYOUT:
- Properties panel on right (typical Blender layout)
- Three states shown vertically or side-by-side
- Clear visual distinction between states
- Arrows or indicators showing state changes
- 1920x1080 resolution (can crop to UI focus)

TECHNICAL:
- Accurate Blender UI styling and proportions
- Readable text at all sizes
- Clear connection between slider value and rig behavior
```

### **Prompt 6: Custom Control Shapes Library**
```
Create a grid reference sheet showing various custom control shape types.

CONTENT (3x4 grid = 12 shapes):
TOP ROW:
- Large circle (labeled "Root / COG")
- Medium circle (labeled "Chest / Shoulders")
- Small circle (labeled "FK Joints")
- Tiny circle (labeled "Fingers / Toes")

MIDDLE ROW:
- Hand-shaped control (flat hand outline, labeled "IK Hand Target")
- Foot-shaped control (foot outline, labeled "IK Foot Target")
- Small sphere (labeled "Pole Target")
- Diamond/pyramid (labeled "Alternative Pole")

BOTTOM ROW:
- Four-arrow shape (labeled "Root / Master")
- Half-circle arc (labeled "Chest / Torso")
- Crosshair (labeled "Eye Target")
- Arrow shape (labeled "Directional")

EACH CELL:
- Dark background square
- Control shape shown in appropriate color (orange, cyan, yellow based on function)
- Shape name label below
- Use case label in smaller text

STYLE:
- Clean grid layout with equal-sized cells
- Dark background (#2b2b2b) for entire sheet
- Bright colored shapes (easy to distinguish)
- White text labels
- Professional reference sheet aesthetic
- Subtle cell borders (dark gray)

LAYOUT:
- Perfect 3x4 grid with equal spacing
- Title at top: "Custom Control Shape Library"
- Each cell: 400x400 pixels
- Overall: 1920x1600 resolution
- Generous padding between cells

TECHNICAL:
- All shapes shown from optimal viewing angle
- Consistent scale within functional groups
- Color-coded by control type (IK, FK, Center)
- Suitable for printing as reference sheet
```

### **Prompt 7: Bone Groups Color Coding**
```
Create an annotated screenshot showing bone group color organization system.

CONTENT:
- Character rig in T-pose (neutral stance)
- All controls visible with color coding:
  - Left arm/leg controls in BLUE/CYAN (#00bcd4)
  - Right arm/leg controls in RED/MAGENTA (#e91e63)
  - Center controls (root, COG, chest, spine) in YELLOW/GREEN (#ffd600)
  
ANNOTATIONS (with leader lines):
- "Left Side - Blue/Cyan" pointing to left hand IK control
  - Sub-items: "IK_hand.L, IK_foot.L, FK_upper_arm.L"
  
- "Right Side - Red/Magenta" pointing to right hand IK control
  - Sub-items: "IK_hand.R, IK_foot.R, FK_upper_arm.R"
  
- "Center - Yellow/Green" pointing to COG control
  - Sub-items: "Root, COG, Chest, Spine"

- Inset showing Bone Groups panel with groups listed and colored

STYLE:
- Dark viewport background (#2b2b2b)
- Bright, saturated control colors
- White annotation text with semi-transparent dark backgrounds
- Professional Blender viewport aesthetic
- Clean, organized annotations

LAYOUT:
- Character centered in viewport
- Annotations positioned around character (not overlapping controls)
- Bone Groups panel inset in bottom right corner
- Clear sight lines from labels to controls
- 1920x1080 resolution

TECHNICAL:
- Show actual Blender viewport rendering
- All colors clearly distinguishable
- Annotations don't obscure important controls
- Demonstrates left/right/center organization clearly
```

### **Prompt 8: IK Chain Components Breakdown**
```
Create a technical diagram showing IK chain anatomy with all components labeled.

CONTENT:
- Simple arm chain shown in side view
- Components clearly separated and labeled:

1. CHAIN SECTION (left side):
   - Upper arm bone (labeled "Chain Bone 1")
   - Forearm bone (labeled "Chain Bone 2")
   - Connected with dotted line (parent-child)
   - Label: "Deformation Chain"

2. IK TARGET SECTION (right side):
   - Hand control shape (cyan)
   - Label: "IK Target"
   - Sub-label: "Animator moves this"
   - Arrow pointing from hand back to chain

3. POLE TARGET SECTION (top center):
   - Small sphere (cyan)
   - Label: "Pole Target"
   - Sub-label: "Controls elbow direction"
   - Dotted line to elbow position

4. CONSTRAINT SECTION (bottom):
   - Box diagram showing IK constraint settings
   - "Target: hand_IK.L"
   - "Chain Length: 2"
   - "Pole Target: elbow_pole.L"

ARROWS SHOWING DATA FLOW:
- From IK Target to chain (solving direction)
- From Pole Target to elbow (direction control)
- From constraint to both targets (connection indicators)

STYLE:
- Technical schematic style (like engineering diagram)
- Dark background (#2b2b2b)
- Cyan controls (#00bcd4)
- Gray bones
- White labels with dark semi-transparent boxes
- Clean, educational layout

LAYOUT:
- Arm chain on left 40%
- Targets on right 40%
- Constraint info at bottom 20%
- All connections visible and logical
- 1920x1080 resolution

TECHNICAL:
- Clear spatial relationships
- All components properly labeled
- Data flow direction obvious
- Suitable for use as teaching reference
```

### **Prompt 9: Pole Target Positioning**
```
Create a comparison showing correct vs incorrect pole target placement.

CONTENT LEFT SIDE (INCORRECT):
- Arm with IK setup
- Pole target positioned too close to elbow (almost touching)
- Elbow bent at unnatural angle (flipped backward or sideways)
- Large RED "X" mark overlay
- Label: "❌ INCORRECT - Pole Too Close"
- Caption: "Elbow flips unpredictably, unstable IK"

CONTENT RIGHT SIDE (CORRECT):
- Same arm with IK setup  
- Pole target positioned proper distance in front (about forearm length away)
- Elbow bent naturally forward
- Large GREEN checkmark overlay
- Label: "✓ CORRECT - Proper Distance"
- Caption: "Elbow points naturally, stable IK solution"

BOTH SIDES SHOW:
- Character arm reaching forward
- IK hand target at same position
- Pole target sphere visible
- Elbow position clearly different
- Distance measurement lines (dotted)

STYLE:
- Dark background (#2b2b2b)
- Cyan IK controls
- Red wrong side, green right side
- Clear before/after comparison aesthetic
- Professional educational style

LAYOUT:
- Perfect 50/50 vertical split
- Thin white dividing line
- Wrong on left (standard convention)
- Right on right
- Large checkmark and X for immediate understanding
- 1920x1080 resolution

TECHNICAL:
- Exaggerate the difference for clarity
- Show consequences of bad placement (elbow flip)
- Distance from pole to elbow clearly marked
- Side-by-side makes comparison obvious
```

### **Prompt 10: Copy Rotation Constraint Setup**
```
Create a screenshot showing Bone Constraints panel with Copy Rotation configured.

CONTENT:
- Blender Bone Constraints panel (Properties panel)
- "Copy Rotation" constraint expanded
- Constraint settings visible:
  - Target: [Armature icon] "Armature"
  - Bone: [Bone icon] "FK_upper_arm.L"
  - Mix: "Replace"
  - Target Space: "World Space"
  - Owner Space: "World Space"
  - Influence: 1.000 (slider at full)
  - X, Y, Z checkboxes all enabled (checked)
  
- Constraint header showing:
  - Eye icon (visibility)
  - Copy Rotation name
  - Influence value
  - Collapse arrow

- Additional UI context:
  - Bone Properties panel visible above
  - "DEF_upper_arm.L" bone selected (shown in header)
  - "Pose Mode" indicator visible

ANNOTATIONS:
- Arrow pointing to Target selection: "Which armature has the target bone"
- Arrow pointing to Bone dropdown: "Which bone to copy from"
- Arrow pointing to Influence slider: "How much to copy (1.0 = 100%)"
- Note: "This constraint makes DEF bone match FK bone rotation"

STYLE:
- Accurate Blender 4.0 UI styling
- Dark theme (#383838 panels)
- Blue highlights for active elements (#5680c2)
- White text, gray inactive elements
- Professional screenshot appearance
- Readable at all sizes

LAYOUT:
- Properties panel right-aligned (typical Blender layout)
- Constraint panel expanded and centered
- Annotations positioned outside panel (don't obscure UI)
- Clean, uncluttered composition
- 1600x1200 resolution (portrait for panel visibility)

TECHNICAL:
- Pixel-perfect Blender UI recreation
- All text readable
- Icons accurate to Blender 4.0
- Shows typical constraint configuration
```

### **Prompt 11: Limit Rotation Constraint Application**
```
Create a side-by-side comparison showing elbow with and without rotation limits.

CONTENT LEFT SIDE (WITHOUT LIMIT):
- Character arm bending backward (elbow hyperextended)
- Forearm bending wrong direction (unnatural pose)
- RED outline or warning overlay
- Label: "❌ Without Limit Rotation"
- Caption: "Elbow can bend backward - unrealistic!"
- Rotation angle shown: "-45°" (negative/backward)

CONTENT RIGHT SIDE (WITH LIMIT):
- Same arm attempting same backward bend
- Forearm stopped at natural limit (0° minimum)
- GREEN outline or success overlay
- Label: "✓ With Limit Rotation"
- Caption: "Elbow prevented from bending backward"
- Rotation angle shown: "0° (minimum limit)"

ADDITIONAL ELEMENTS:
- Small inset showing Limit Rotation constraint settings:
  - "Limit X Rotation" enabled
  - Min: 0°, Max: 150°
  - Influence: 1.0

STYLE:
- Dark background (#2b2b2b)
- Light gray arm mesh
- Orange FK controls visible
- Red warning color for wrong side
- Green success color for right side
- Professional educational diagram style

LAYOUT:
- 50/50 vertical split
- Wrong on left, correct on right
- Constraint settings inset in bottom center
- Clear visual distinction between behaviors
- 1920x1080 resolution

TECHNICAL:
- Exaggerate hyperextension for clarity
- Show the "wall" that stops rotation
- Angle measurements clearly visible
- Demonstrates protective function of limits
```

### **Prompt 12: Track To Constraint - Eye Tracking**
```
Create an animated-style sequence showing eyes following a target.

CONTENT (4-panel sequence or composite):
PANEL 1:
- Character head (front view)
- Both eyes looking straight ahead
- Eye target (small crosshair) centered in front of face
- Label: "Target Centered"

PANEL 2:
- Same head
- Both eyes rotated to look left
- Eye target moved to left side
- Label: "Target Left"

PANEL 3:
- Same head
- Both eyes rotated to look right
- Eye target moved to right side
- Label: "Target Right"

PANEL 4:
- Same head
- Both eyes rotated to look up
- Eye target moved upward
- Label: "Target Up"

ALL PANELS SHOW:
- Dotted lines from each eye to target (sight lines)
- Eye bones with Track To constraint indicators
- Target control visible and highlighted

ADDITIONAL:
- Inset showing Track To constraint settings:
  - Target: eye_target
  - To: -Z axis
  - Up: Y axis

STYLE:
- Dark background (#2b2b2b)
- Character head in light gray
- Eyes with colored pupils (blue) for clarity
- Cyan target control (#00bcd4)
- Professional animation reference style
- Clean, clear sight lines

LAYOUT:
- 2x2 grid (four panels)
- Each panel: 960x540 pixels
- Overall: 1920x1080 resolution
- Equal spacing between panels
- Labels clear and positioned consistently

TECHNICAL:
- Show eye rotation clearly
- Sight lines help visualize tracking
- Demonstrate automated following behavior
- Multiple viewing angles for complete understanding
```

### **Prompt 13: Arm Rig Component Overview**
```
Create a comprehensive labeled diagram showing all arm rig bones and their relationships.

CONTENT (arm extended horizontally, side view):

DEFORMATION LAYER (purple #667eea):
- DEF_upper_arm.L
- DEF_forearm.L
- DEF_hand.L
- Connected in parent-child chain
- Weighted to mesh (indicated by mesh attachment symbols)

FK CONTROL LAYER (orange #ff8c00):
- FK_upper_arm.L (large circle)
- FK_forearm.L (medium circle)
- FK_hand.L (small circle)
- Dotted lines to DEF bones showing Copy Rotation

IK CONTROL LAYER (cyan #00bcd4):
- IK_hand.L (hand-shaped control)
- IK_elbow_pole.L (sphere in front)
- Solid lines to MCH bones showing IK relationship

MECHANISM LAYER (blue #2196F3):
- MCH_IK_upper_arm.L
- MCH_IK_forearm.L
- Has IK constraint (shown with constraint icon)
- Dotted lines to DEF bones showing Copy Rotation

LEGEND BOX (corner):
- Color swatches with layer names
- Line types explained (solid = IK, dotted = constraint)
- Hierarchy explanation

STYLE:
- Technical schematic style
- Dark background (#2b2b2b)
- Each layer in distinct color
- All bones labeled clearly
- Connection lines color-coded by type
- Professional technical documentation look

LAYOUT:
- Arm centered horizontally
- Layers stacked vertically for clarity
- Legend in top-right corner
- No overlapping labels
- 1920x1200 resolution (wider for complexity)

TECHNICAL:
- Show complete rig architecture
- All relationships visible
- Color coding consistent with lesson
- Suitable as reference poster
```

### **Prompt 14: Arm IK Chain Setup Steps**
```
Create a multi-panel step-by-step visual guide for creating IK arm system.

PANEL 1: "Duplicate Deformation Bones"
- Shows DEF bones in purple
- Duplicated bones appear in blue (MCH)
- Action: Shift+D command shown
- Caption: "Duplicate DEF_upper_arm and DEF_forearm for MCH layer"

PANEL 2: "Create IK Hand Target"
- Shows new hand-shaped control being positioned
- Hand control in cyan at wrist position
- Action: Add bone, rename to IK_hand.L
- Caption: "Create IK target control at hand position"

PANEL 3: "Create Elbow Pole Target"
- Shows small sphere being positioned in front of elbow
- Pole target in cyan
- Distance measurement from elbow (forearm length)
- Caption: "Add pole target in front of elbow (proper distance)"

PANEL 4: "Add IK Constraint"
- Shows Bone Constraints panel
- IK constraint being added to MCH_forearm.L
- Settings visible (target, chain length 2, pole)
- Caption: "Add Inverse Kinematics constraint to middle bone"

PANEL 5: "Test IK System"
- Shows hand control being moved
- Arm following target
- Elbow bending naturally toward pole
- Motion arrows indicating movement
- Caption: "Move hand control - arm reaches automatically"

PANEL 6: "Adjust Pole Angle"
- Shows pole angle slider in constraint
- Elbow direction changing as angle adjusts
- Before/after elbow positions
- Caption: "Fine-tune pole angle until elbow points correctly"

STYLE:
- Clean educational steps
- Dark background (#2b2b2b)
- Cyan IK elements, blue MCH elements
- Action indicators (arrows, highlights)
- Professional tutorial aesthetic
- Consistent lighting and angle across panels

LAYOUT:
- 2x3 grid (six steps)
- Each panel: 640x360 pixels
- Overall: 1920x1080 resolution
- Step numbers clearly visible (1-6)
- Captions below each panel

TECHNICAL:
- Each step clearly shows one action
- Progressive build (each step builds on last)
- UI elements accurate where shown
- Demonstrates complete workflow
```

### **Prompt 15: Arm FK Chain Setup Steps**
```
Create a multi-panel step-by-step visual guide for creating FK arm system.

PANEL 1: "Duplicate DEF Bones"
- Shows DEF bones in purple
- Duplicated bones appearing in orange (FK)
- Action: Shift+D, rename to FK_
- Caption: "Duplicate DEF bones for FK control layer"

PANEL 2: "Clear Parents"
- Shows FK bones with parent connections being removed
- Alt+P command indicator
- Bones separated (not connected yet)
- Caption: "Clear parent relationships (Alt+P > Keep Transform)"

PANEL 3: "Re-parent FK Chain"
- Shows FK bones being reconnected in proper hierarchy
- Parent lines from hand → forearm → upper_arm
- Ctrl+P command indicator
- Caption: "Re-parent: hand to forearm, forearm to upper arm"

PANEL 4: "Add Custom Shapes"
- Shows circle meshes being assigned as custom shapes
- Properties panel with Custom Shape setting visible
- Circles appearing at bone locations
- Size decreasing down chain (large → medium → small)
- Caption: "Assign circle controls (decreasing size down chain)"

PANEL 5: "Test FK System"
- Shows shoulder control being rotated
- Entire arm following rotation
- Rotation arrow at shoulder
- Natural arcing motion indicated
- Caption: "Rotate shoulder - whole arm moves naturally"

STYLE:
- Clean educational steps
- Dark background (#2b2b2b)
- Orange FK elements (#ff8c00)
- Clear before/after states
- Professional tutorial aesthetic
- Consistent viewing angle

LAYOUT:
- Horizontal 5-panel layout or 2x3 grid
- Each panel: 640x360 pixels
- Step numbers (1-5) prominent
- Captions below panels
- 1920x1080 resolution

TECHNICAL:
- Each step shows clear action
- Progressive workflow (builds on previous)
- UI elements shown where relevant
- Demonstrates complete FK setup process
```

### **Prompt 16: IK/FK Snapping Problem Illustration**
```
Create a problem/solution comparison showing why control snapping is necessary.

CONTENT TOP SECTION (PROBLEM):
Label: "❌ PROBLEM: Switching Without Snapping"

FRAME 1: "Frame 50 - FK Mode (IK/FK = 0.0)"
- Arm in specific pose (reaching forward)
- FK controls visible and positioned naturally
- IK controls visible but in wrong position (left behind from last use)
- Hand control not matching current hand position

FRAME 2: "Frame 51 - Switch to IK (IK/FK = 1.0)"
- Arm suddenly JUMPS to wrong position
- Following the IK hand control wherever it was
- RED motion lines showing violent pop/jump
- Arm in completely different pose
- Label: "ARM POPS!"

CONTENT BOTTOM SECTION (SOLUTION):
Label: "✓ SOLUTION: Snap Controls Before Switching"

FRAME 1: "Frame 50 - FK Mode, IK Snapped"
- Arm in same reaching forward pose
- FK controls visible
- IK hand control NOW positioned to match current hand location
- Match indicator (green checkmark or equal sign)

FRAME 2: "Frame 51 - Switch to IK (IK/FK = 1.0)"
- Arm stays in SAME position
- Smoothly transitions to IK control
- GREEN smooth motion lines (no pop)
- Hand control and hand bone perfectly aligned
- Label: "SMOOTH!"

STYLE:
- Dark background (#2b2b2b)
- Orange FK controls, cyan IK controls
- Red for problem section, green for solution
- Motion lines clearly show jump vs smooth
- Professional educational diagram

LAYOUT:
- Top half: Problem (two frames side-by-side)
- Bottom half: Solution (two frames side-by-side)
- Thick horizontal divider between sections
- Before/after clearly labeled
- 1920x1080 resolution

TECHNICAL:
- Exaggerate the pop for clarity
- Show the cause (mismatched controls) and effect (jump)
- Demonstrate proper workflow (snap first)
- Critical lesson visualized clearly
```

### **Prompt 17: Leg Rig Foot Hierarchy**
```
Create a technical diagram showing foot control pivot hierarchy.

CONTENT:
Main diagram (side view of foot):
- IK_foot.L control at ankle (large cyan foot-shaped control)
  - Label: "Parent Control - Moves entire foot system"
  - Shape: foot outline or rectangle
  
- IK_heel_pivot.L at back of foot (orange small control)
  - Label: "Heel Pivot - Rotates foot on heel"
  - Shape: small sphere or bone at heel point
  - Child of IK_foot.L (shown with hierarchy line)
  
- IK_toe_pivot.L at ball of foot (green small control)
  - Label: "Toe Pivot - Rotates foot on ball"
  - Shape: small sphere or bone at ball
  - Child of IK_heel_pivot.L (shown with hierarchy line)
  
- MCH_IK_leg_target.L at ankle (hidden mechanism, shown in gray)
  - Label: "IK Target - Actual IK constraint target"
  - Child of IK_toe_pivot.L (shown with hierarchy line)

HIERARCHY FLOW DIAGRAM (to the side):
- Box diagram showing parent-child structure:
  ```
  IK_foot.L
  └─ IK_heel_pivot.L
     └─ IK_toe_pivot.L
        └─ MCH_IK_leg_target.L → IK Constraint
  ```

ADDITIONAL:
- Dotted lines showing pivot points (heel contact point, ball contact point)
- Rotation arrows showing how each pivot affects foot angle
- Small inset showing thigh-shin IK chain connecting to target

STYLE:
- Technical schematic style
- Dark background (#2b2b2b)
- Color-coded controls (cyan main, orange/green pivots)
- Clear hierarchy lines (thicker for direct parent)
- Professional rigging documentation look

LAYOUT:
- Foot diagram on left (70%)
- Hierarchy box on right (30%)
- All labels clearly readable
- No overlapping elements
- 1920x1080 resolution

TECHNICAL:
- Show exact pivot point locations
- Hierarchy clearly indicates data flow
- Demonstrate why order matters (each affects children)
- Critical for understanding foot roll setup
```

### **Prompt 18: Foot Roll Animation Sequence**
```
Create a sequential composite showing heel-to-toe foot roll motion.

CONTENT (7 frames in sequence):

FRAME 1: "Heel Strike"
- Foot angled with heel down, toes up
- IK_heel_pivot rotated backward
- Contact point at heel highlighted (red dot)
- Angle: ~30° toes up
- Caption: "Initial contact - heel touches ground"

FRAME 2: "Heel Contact"
- Foot beginning to flatten
- Heel pivot starting to return to neutral
- Contact point still at heel
- Angle: ~15° toes up
- Caption: "Weight transfers onto heel"

FRAME 3: "Flat Foot"
- Foot completely flat on ground
- Both heel and toe pivots at neutral (0°)
- Contact area entire sole (shown with gradient)
- Caption: "Full foot contact - mid-stance"

FRAME 4: "Heel Lift Begin"
- Heel starting to lift slightly
- Toe pivot beginning rotation forward
- Contact point shifting toward ball
- Caption: "Weight shifts forward, heel lifts"

FRAME 5: "Ball Contact"
- Heel clearly lifted off ground
- Toe pivot rotated ~30° forward
- Contact point at ball of foot (red dot)
- Caption: "Pivoting on ball of foot"

FRAME 6: "Toe Push-Off"
- Heel high, maximum toe pivot rotation (~60°)
- Contact point at toe tips
- Foot angled dramatically
- Caption: "Maximum push-off - heel at peak height"

FRAME 7: "Toe Off"
- Foot leaving ground
- Toe pivot at extreme forward angle
- No contact points
- Caption: "Foot completely off ground - swing begins"

EACH FRAME SHOWS:
- Foot skeleton/bones in light gray
- IK foot control in cyan
- Pivot controls in orange/green
- Ground plane line
- Contact point indicators
- Rotation angle measurements

STYLE:
- Clean animation reference style
- Dark background (#2b2b2b)
- Consistent side view angle for all frames
- Color-coded pivots and controls
- Professional animation breakdown aesthetic

LAYOUT:
- 7 frames in horizontal sequence (timeline-like)
- Each frame: 270x480 pixels
- Overall: 1920x480 resolution (wide format)
- Frame numbers and captions clear
- Equal spacing between frames
- Arrow progression indicators between frames

TECHNICAL:
- Show progressive rotation of pivots
- Demonstrate smooth heel-to-toe transition
- Contact points clearly marked
- Angles visible for animator reference
- Critical for understanding walk cycle foot motion
```

### **Prompt 19: Foot Pivot Point Locations**
```
Create an annotated diagram showing correct pivot bone placement for foot controls.

CONTENT:
Main view (side profile of foot):
- Foot mesh in light gray
- Bones visible inside
- Two critical pivot point locations marked:

1. HEEL PIVOT (back of foot):
   - Red crosshair at exact heel contact point
   - Bone positioned here (orange circle)
   - Label: "IK_heel_pivot.L - Exact heel position"
   - Measurement line from ankle to heel
   - Annotation: "Pivot point where heel touches ground"

2. TOE PIVOT (ball of foot):
   - Green crosshair at ball (base of toes)
   - Bone positioned here (green circle)
   - Label: "IK_toe_pivot.L - At ball of foot"
   - Measurement line showing MTP (metatarsophalangeal) joint location
   - Annotation: "Pivot point for toe push-off"

ADDITIONAL VIEWS:
- Top view inset showing pivot alignment (ensures pivots are centered, not off to side)
- Front view inset showing left-right symmetry

WRONG VS RIGHT COMPARISON:
Small inset panels showing:
- ❌ Heel pivot too far forward → foot doesn't roll correctly
- ❌ Toe pivot at toe tips → premature rotation
- ✓ Both pivots at correct anatomical positions → smooth roll

STYLE:
- Technical anatomy-style diagram
- Dark background (#2b2b2b)
- Foot in light gray with semi-transparent view of bones
- Pivot points in bright colors (red, green)
- Measurement lines with dimension indicators
- Professional technical illustration

LAYOUT:
- Main side view: 60% of canvas
- Top view inset: top right 20%
- Front view inset: bottom right 20%
- Wrong/right comparison at bottom
- 1920x1080 resolution

TECHNICAL:
- Anatomically correct foot proportions
- Pivot points at exact locations (not approximate)
- Multiple viewing angles for precision
- Shows the "why" of placement (walking biomechanics)
```

### **Prompt 20: Leg IK Setup Complete**
```
Create an annotated screenshot showing fully assembled leg IK system.

CONTENT:
- Character leg extended (standing position)
- All IK components visible and labeled:

MAIN CONTROLS (cyan):
- IK_foot.L - Large foot-shaped control at ankle
  - Label: "Main foot control - Move to position leg"
  
- IK_knee_pole.L - Sphere in front of knee
  - Label: "Knee pole - Controls knee direction"
  - Dotted line from pole to knee

PIVOT CONTROLS (orange/green):
- IK_heel_pivot.L at heel
  - Label: "Heel pivot - Rotate for heel-down pose"
  - Small rotation arc indicator
  
- IK_toe_pivot.L at ball
  - Label: "Toe pivot - Rotate for push-off"
  - Small rotation arc indicator

MECHANISM (shown in lighter gray or dotted):
- MCH_IK_thigh.L and MCH_IK_shin.L
- IK constraint indicator on shin
- MCH_IK_leg_target.L at ankle

DEFORMATION (shown very subtle):
- DEF bones inside leg mesh
- Mesh semi-transparent to show bones

HIERARCHY LINES:
- Parent-child connections shown with dotted lines
- Data flow arrows showing control → mechanism → deformation

STYLE:
- Blender viewport aesthetic
- Dark background (#2b2b2b)
- Color-coded controls
- Clean annotations with leader lines
- Professional rig showcase

LAYOUT:
- Leg positioned center-left (45°angle for visibility)
- Annotations positioned right side
- Hierarchy diagram in corner
- Clean, uncluttered layout
- 1920x1080 resolution

TECHNICAL:
- All controls clearly visible
- Shows complete system assembled
- Demonstrates spatial relationships
- Suitable as setup verification reference
```

---

## SVG Diagram Recommendations

The following images work best as SVG (Scalable Vector Graphics):

1. **Three-Layer Rig Architecture Diagram** (#1)
   - **Rationale:** Simple geometric shapes, text labels, clean lines. Perfect for vector format. Scales infinitely for presentations. Minimal colors and shapes.

2. **IK vs FK Visual Comparison** (#2)
   - **Rationale:** Primarily line art with annotations. Arrows and labels benefit from vector precision. Educational diagram with geometric elements.

3. **IK Chain Components Breakdown** (#8)
   - **Rationale:** Technical schematic with arrows, boxes, and labels. All geometric primitives. Benefits from sharp vector rendering.

4. **Leg Rig Foot Hierarchy** (#17)
   - **Rationale:** Hierarchical diagram with connection lines and boxes. Pure information design. Vector format ensures clarity at any size.

5. **Spine Control System Overview** (#21)
   - **Rationale:** Technical diagram showing hierarchy with arrows and labels. Geometric shapes with text. Clean vector appearance ideal.

6. **Spine Blending Visualization** (#22)
   - **Rationale:** Gradient visualization with percentage overlays. SVG gradients work perfectly. Text and simple shapes dominate.

7. **Root Control Visualization** (#25)
   - **Rationale:** Simple diagram with arrows and circles. Minimal complexity, maximum clarity. Vector format provides crisp lines.

8. **Workflow Flowchart - Complete Rig Build** (#31)
   - **Rationale:** Flowchart is THE classic SVG use case. Boxes, diamonds, arrows, text. Benefits immensely from vector format. Scales for printing.

**Why these are ideal for SVG:**
- Primarily geometric shapes and text
- Sharp, clean lines without photographic detail
- Need to scale for different contexts (web, print, presentations)
- Benefit from infinite zoom capability
- Small file sizes (vector data is compact)
- Easy to edit and update (color changes, text edits)
- Professional documentation standard

**Implementation Note:**
While we're generating with AI (which produces rasters), the prompts specify "vector-style illustration" or "SVG-style" to ensure clean, geometric results that could be recreated in actual SVG if needed.

---

## Image Placement Suggestions in HTML

### Introduction Section (id="introduction")
- **After opening paragraph:** Insert Image #1 (Three-Layer Rig Architecture)
  - Establishes fundamental rig organization concept early
  - Helps users understand DEF/MCH/CTRL separation before details

### Rigging Philosophy Section (id="rigging-philosophy")
- **After "Core Rigging Principles":** Insert Image #2 (IK vs FK Visual Comparison)
  - Introduces the two control paradigms that dominate the lesson
  - Visual anchor for abstract concept before deep dive

### IK vs FK Section (id="ik-vs-fk")
- **After FK Explained subsection:** Insert Image #3 (FK Arm Control Chain)
  - Demonstrates FK rotation hierarchy visually
  - Reinforces parent-child concept just explained

- **After IK Explained subsection:** Insert Image #4 (IK Arm Setup with Pole Target)
  - Shows complete IK system components
  - Makes pole target concept concrete

- **After Decision Guide table:** Insert Image #9 (Pole Target Positioning)
  - Practical troubleshooting visual after theoretical discussion
  - Shows correct vs incorrect immediately

### Custom Control Bones Section (id="control-bones")
- **After "Why Custom Shapes Matter":** Insert Image #6 (Custom Control Shapes Library)
  - Visual reference for the shapes being discussed
  - Students can see what they'll be creating

- **After "Practical Example":** Insert Image #30 (Custom Shape Assignment Process)
  - Step-by-step UI guide reinforces written instructions
  - Users can follow along with screenshots

- **After "Organizing Control Shapes":** Insert Image #7 (Bone Groups Color Coding)
  - Shows the finished color organization result
  - Demonstrates left/right/center color system

### IK Chains Section (id="ik-chains")
- **After "IK Chain Anatomy":** Insert Image #8 (IK Chain Components Breakdown)
  - Technical diagram of all components labeled
  - Reference for the three required elements

- **After "Setting Up Basic IK Chain":** Insert Image #14 (Arm IK Chain Setup Steps)
  - Multi-panel step-by-step guide
  - Visual walkthrough of written instructions

- **After "Pole Target Best Practices":** Insert Image #32 (Pole Angle Adjustment)
  - Shows how pole angle affects joint direction
  - Troubleshooting tool for common issue

### Constraints Section (id="constraints")
- **After "Understanding Constraints":** Insert Image #29 (Constraint Stack Order)
  - Shows evaluation order concept visually
  - Makes top-to-bottom evaluation obvious

- **After "Copy Rotation Constraint":** Insert Image #10 (Copy Rotation Constraint Setup)
  - UI screenshot showing actual settings
  - Users can replicate configuration

- **After "Limit Rotation Constraint":** Insert Image #11 (Limit Rotation Constraint Application)
  - Before/after showing protection from hyperextension
  - Demonstrates constraint's practical value

- **After "Track To Constraint":** Insert Image #12 (Track To Constraint - Eye Tracking)
  - Shows automated behavior in action
  - Multiple frames demonstrate following

### Arm Rig Section (id="arm-rig")
- **After "Arm Rig Components":** Insert Image #13 (Arm Rig Component Overview)
  - Complete labeled diagram of all bones
  - Color-coded reference showing relationships

- **After "Phase 2: Create FK Control Chain":** Insert Image #15 (Arm FK Chain Setup Steps)
  - Visual workflow for FK setup
  - Reinforces written instructions

- **After "Phase 5: Add IK/FK Switch Property":** Insert Image #34 (Driver Setup for IK/FK Switching)
  - Shows driver configuration in Graph Editor
  - Makes abstract driver concept concrete

- **After "IK/FK Switching and Snapping":** Insert Image #16 (IK/FK Snapping Problem Illustration)
  - Problem/solution comparison
  - Critical lesson visualized clearly

- **After "Testing the Complete Arm Rig":** Insert Image #5 (IK/FK Influence Slider Interface)
  - Shows the UI for switching modes
  - Users can find and use custom property

### Leg Rig Section (id="leg-rig")
- **After "Understanding Foot Controls":** Insert Image #17 (Leg Rig Foot Hierarchy)
  - Critical foot pivot structure diagram
  - Must understand hierarchy before building

- **After "Phase 3: Create IK System with Foot Controls":** Insert Image #19 (Foot Pivot Point Locations)
  - Shows exact pivot placement
  - Top and side views for precision

- **After "Advanced Foot Features":** Insert Image #18 (Foot Roll Animation Sequence)
  - Sequential frames showing heel-to-toe roll
  - Demonstrates what the rig enables

- **After "Testing the Complete Leg Rig":** Insert Image #20 (Leg IK Setup Complete)
  - Annotated screenshot of finished leg rig
  - Verification reference

### Spine Rig Section (id="spine-rig")
- **After "COG + Chest Spine Rig Components":** Insert Image #21 (Spine Control System Overview)
  - Technical diagram showing hierarchy
  - Visualizes COG → Spine → Chest flow

- **After "Phase 5: Connect Controls to Spine":** Insert Image #22 (Spine Blending Visualization)
  - Gradient showing influence interpolation
  - Makes blending concept concrete

- **After "Phase 2: Create Root Control":** Insert Image #25 (Root Control Visualization)
  - Simple diagram showing master control
  - Emphasizes size and function

- **After "Phase 3: Create COG Control":** Insert Image #23 (COG Control Functions)
  - Multi-panel showing COG movements
  - Demonstrates what COG controls

- **After "Phase 4: Create Chest Control":** Insert Image #24 (Chest Control Functions)
  - Multi-panel showing chest movements
  - Demonstrates what chest controls

### Project Section (id="project")
- **After "Project Overview":** Insert Image #31 (Workflow Flowchart - Complete Rig Build)
  - Big-picture view of entire process
  - Helps users understand scope and sequence

- **After "Phase 1: Preparation":** Insert Image #26 (Complete Rig Layer Organization)
  - Shows bone layer management
  - Organization reference

- **After "Phase 7: Polish and Testing":** Insert Image #35 (Complete Character Rig - Final Result)
  - Beauty shot of finished rig
  - Aspirational/motivational showcase

- **After "Comprehensive Rig Testing":** Insert Image #27 (Rig Testing Poses Reference)
  - Reference sheet of test poses
  - Checklist for verification

- **After "Common Issues and Fixes":** Insert Image #28 (Common Rigging Mistakes)
  - Problem/solution grid
  - Troubleshooting reference

### Summary Section (id="summary")
- **After "Professional Workflows":** Insert Image #36 (Rig Control Interface Reference)
  - Complete control reference infographic
  - Quick lookup guide for all controls

- **After "Beyond Biped Rigging":** Insert Image #37 (Weight Painting Integration)
  - Shows connection between Lesson 38 and 39
  - Demonstrates weights + rig relationship

- **At end of lesson:** Insert Image #38 (Animation-Ready Rig in Action)
  - Shows rig being animated with timeline
  - Motivational conclusion image

---

*Document continues in lesson_39_image_requirements_part2.md*
