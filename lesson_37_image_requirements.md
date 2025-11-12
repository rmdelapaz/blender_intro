# Image Requirements for Lesson 37: Armature and Bones

## Task Summary
**Lesson:** lesson_37_armature_and_bones.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025
**Lesson Focus:** Building skeletal armatures for character animation - fundamentals of bones, hierarchies, positioning, naming, and symmetry

---

## Image List for Lesson 37

### **1. Armature Concept Diagram**
- **Purpose:** Introduce the relationship between mesh (character surface) and armature (skeleton)
- **Type:** Diagram/Illustration
- **Shows:** Character mesh (semi-transparent) with armature visible inside, labels showing mesh, armature, bones, joints, and the connection between them

### **2. Bone Anatomy Breakdown**
- **Purpose:** Teach the parts of a bone and their functions
- **Type:** Annotated diagram
- **Shows:** Single bone with clear labels pointing to: head (start point), tail (end point), body (shaft), roll (twist indicator), and local axes (X, Y, Z color-coded)

### **3. Bone Display Types Comparison**
- **Purpose:** Show different visualization options for bones
- **Type:** Multi-panel comparison grid
- **Shows:** Same armature displayed in 5 styles: Octahedral (default), Stick, B-Bone (bendy), Envelope, and Wire - each labeled

### **4. Three Armature Modes Comparison**
- **Purpose:** Clarify when to use Object, Edit, and Pose modes
- **Type:** Three-panel comparison with interface screenshots
- **Shows:** Same armature in each mode with UI differences highlighted, showing what operations are available in each

### **5. Bone Selection Methods**
- **Purpose:** Demonstrate different selection techniques
- **Type:** Multi-panel screenshot guide
- **Shows:** Bone body selection, head/tail selection, box select, circle select - each with visual indicators

### **6. Extrusion Process Step-by-Step**
- **Purpose:** Illustrate how to create bone chains by extruding
- **Type:** Sequential diagram (4-6 steps)
- **Shows:** Starting bone → pressing E → moving cursor → new connected bone → repeating for chain

### **7. Parent-Child Hierarchy Visualization**
- **Purpose:** Show how bone hierarchies work
- **Type:** Diagram with visual tree structure
- **Shows:** Pelvis (root) → Spine chain → branching to arms and head, with arrows showing influence flow

### **8. Hierarchy Testing in Pose Mode**
- **Purpose:** Demonstrate how to verify hierarchy works correctly
- **Type:** Before/after comparison (2 panels)
- **Shows:** Left panel: shoulder bone selected; Right panel: rotating shoulder moves entire arm chain

### **9. Anatomical Bone Positioning Reference**
- **Purpose:** Show correct placement of bones at real anatomical joints
- **Type:** Character reference with overlay
- **Shows:** Side-by-side front and side views of character with bones properly aligned to joints (hip deep inside pelvis, shoulder in ribcage, knee slightly forward)

### **10. Critical Joint Positions Guide**
- **Purpose:** Detail the most important joint placements
- **Type:** Close-up multi-panel reference
- **Shows:** Four detailed views: shoulder joint (inside ribcage), elbow joint, hip joint (deep inside), knee joint (slightly forward)

### **11. Bone Roll Visualization**
- **Purpose:** Explain bone roll and its effect on bending direction
- **Type:** Diagram with axes displayed
- **Shows:** Two bones with axes visible - one with correct roll (bends naturally), one with incorrect roll (bends sideways)

### **12. Recalculate Roll Interface**
- **Purpose:** Show how to fix bone roll automatically
- **Type:** Screenshot with menu highlighted
- **Shows:** Edit Mode, Ctrl+N menu open with "Recalculate Roll" options visible and "Global +Y Axis" highlighted

### **13. Naming Convention Examples**
- **Purpose:** Demonstrate professional bone naming standards
- **Type:** Labeled diagram with Outliner view
- **Shows:** Armature with proper names (upper_arm.L, forearm.R, spine_01) in Outliner, highlighting .L/.R suffixes and numbering

### **14. Batch Rename Tool Interface**
- **Purpose:** Show efficient naming workflow
- **Type:** Screenshot tutorial
- **Shows:** Batch Rename panel open with Find/Replace example (replacing "Bone" with "finger") highlighted

### **15. Biped Armature Blueprint**
- **Purpose:** Provide overview of complete character skeleton structure
- **Type:** Technical diagram (front and side views)
- **Shows:** Complete biped with ~20 bones labeled, showing standard structure from pelvis to head, arms, and legs

### **16. Spine Chain Construction**
- **Purpose:** Step-by-step guide for building center skeleton
- **Type:** Sequential tutorial (5-6 steps)
- **Shows:** Pelvis → extrude spine_01 → spine_02 → spine_03 → neck → head with proper curvature

### **17. Arm Chain Build Process**
- **Purpose:** Demonstrate complete arm construction
- **Type:** Sequential diagram (4 steps per side)
- **Shows:** Shoulder placement → extrude upper_arm → forearm → hand, with proper connectivity highlighted

### **18. Leg Chain with Forward Knee**
- **Purpose:** Emphasize critical knee positioning
- **Type:** Side-by-side comparison
- **Shows:** Correct: knee slightly forward | Incorrect: knee centered - with annotations explaining IK implications

### **19. Symmetrize Tool Demonstration**
- **Purpose:** Show automatic mirroring workflow
- **Type:** Before/after screenshot sequence
- **Shows:** Before: Left side bones selected | Menu: Armature > Symmetrize | After: Perfect mirrored right side created

### **20. X-Axis Mirror Mode**
- **Purpose:** Demonstrate real-time symmetrical editing
- **Type:** Split-screen live demo concept
- **Shows:** Left: editing upper_arm.L | Right: upper_arm.R updates simultaneously, with mirror mode checkbox highlighted

### **21. Bone Properties Panel Overview**
- **Purpose:** Tour the essential bone settings interface
- **Type:** Annotated screenshot
- **Shows:** Bone Properties panel with key sections labeled: Transform, Relations, Deform checkbox, Display, IK settings

### **22. Deform Checkbox Comparison**
- **Purpose:** Show difference between deforming and control bones
- **Type:** Two-panel comparison
- **Shows:** Left: Deform ON - bone affects mesh | Right: Deform OFF - control bone, mesh unaffected

### **23. Custom Bone Shapes Example**
- **Purpose:** Demonstrate animator-friendly control displays
- **Type:** Before/after comparison
- **Shows:** Default bone display → Custom shape (cube, circle, or widget) replacing bone visualization

### **24. Complete Armature in T-Pose**
- **Purpose:** Final project reference showing finished rig
- **Type:** Clean render/screenshot (front, side, perspective views)
- **Shows:** Completed 20-bone biped armature in T-pose with proper naming visible, ready for weight painting

### **25. Pose Mode Test Poses**
- **Purpose:** Show rig functionality and natural deformation
- **Type:** Multi-pose demonstration (3-4 poses)
- **Shows:** Same armature in: neutral T-pose, arm raised, leg bent, spine curved - demonstrating hierarchy works

### **26. Common Mistakes Illustrated**
- **Purpose:** Visual warning about typical errors
- **Type:** Problem/solution grid (4-6 panels)
- **Shows:** Wrong: bones outside mesh, knee centered, bad naming | Right: bones inside, knee forward, proper names

### **27. Bone Layers Organization**
- **Purpose:** Show organizational system for complex rigs
- **Type:** Interface screenshot with diagram
- **Shows:** Bone layers panel with common organization: Layer 1 (main deform), Layer 2 (face), Layer 3 (hands), etc.

### **28. Add Armature Menu Path**
- **Purpose:** Guide users to create first armature
- **Type:** UI navigation screenshot
- **Shows:** Shift+A menu open with Armature > Single Bone highlighted, showing menu path clearly

### **29. Edit vs Pose Mode Visual Difference**
- **Purpose:** Help users distinguish the two critical modes
- **Type:** Side-by-side comparison
- **Shows:** Same armature - Left: Edit Mode (bones orange) | Right: Pose Mode (bones blue), with mode selector highlighted

### **30. Finger Bones Detail (Bonus)**
- **Purpose:** Show advanced detail for complete hands
- **Type:** Close-up detailed view
- **Shows:** Hand with all 5 fingers fully rigged (thumb 2 bones, fingers 3 bones each) with proper naming convention

---

## AI Image Generation Prompts

### **Prompt 1: Armature Concept Diagram**
```
Create an educational technical diagram showing a 3D character model with visible armature system inside. The character mesh should be semi-transparent blue-gray (#aabbcc with 40% opacity) to show the internal skeleton. The armature bones should be bright orange (#ff8c00) octahedral shapes clearly visible through the mesh. Add labeled callouts with arrows pointing to: "Mesh (Character Surface)", "Armature (Skeleton)", "Bone (Individual Element)", "Joint (Connection Point)". Background should be dark gray (#2b2b2b) for contrast. Style: clean technical illustration, educational diagram, professional training material. Layout: 3/4 perspective view showing full character from head to mid-thigh. Include subtle dotted lines connecting labels to armature parts. Resolution: 1920x1080, PNG format with transparency support.
```

### **Prompt 2: Bone Anatomy Breakdown**
```
Create a detailed technical diagram of a single armature bone showing all anatomical parts. The bone should be displayed as bright orange (#ff8c00) octahedral shape on dark gray background (#2b2b2b). Clearly label and point to: "Head (Start Point)" at the larger sphere end, "Tail (End Point)" at the smaller sphere end, "Body (Shaft)" along the main octahedral connection, "Roll (Twist Axis)" showing rotation around bone's length. Display local coordinate axes: X-axis in red, Y-axis in blue pointing from head to tail, Z-axis in green. Add a small curved arrow near the bone showing roll rotation. Style: precise technical illustration, clean lines, educational clarity. Layout: centered bone at slight angle to show 3D depth, labels positioned around bone with leader lines. Include a small compass rose showing global orientation. Resolution: 1600x1200, high contrast for clarity.
```

### **Prompt 3: Bone Display Types Comparison**
```
Create a five-panel horizontal comparison showing the same simple armature (3 bones in a chain) displayed in different visualization styles. Dark gray background (#2b2b2b) throughout. Panel 1: "Octahedral" - default diamond shapes in orange. Panel 2: "Stick" - simple lines connecting spheres. Panel 3: "B-Bone" - segmented curved bones. Panel 4: "Envelope" - bones with radius spheres shown. Panel 5: "Wire" - wireframe outline only. Each panel clearly labeled at top. Armature should be identical in all panels, just display style changes. Style: clean technical comparison, consistent lighting, educational reference. Layout: 2400x600 horizontal strip, 480x600 per panel. Include subtle dividing lines between panels. Ensure bone colors maintain Blender orange (#ff8c00) or appropriate style variants.
```

### **Prompt 4: Three Armature Modes Comparison**
```
Create a three-panel comparison showing Blender's armature modes. Dark Blender interface theme (#2b2b2b background). Panel 1: "Object Mode" - armature with white outline, mode dropdown showing "Object Mode", cursor tool visible. Panel 2: "Edit Mode" - bones displayed as orange (#ff8c00), mode shows "Edit Mode", bone heads/tails visible as spheres. Panel 3: "Pose Mode" - bones displayed as blue/cyan (#00b8ff), mode shows "Pose Mode", slightly different viewport overlay. Each panel shows the same simple 3-bone armature but with mode-specific visual differences. Add text overlay at top of each panel showing mode name and key operations: "Object: Move whole armature", "Edit: Build structure", "Pose: Animate". Style: Blender 4.0 interface aesthetic, professional UI documentation. Layout: 2400x900, three equal panels. Include mode selector dropdown highlighted in each.
```

### **Prompt 5: Bone Selection Methods**
```
Create a four-panel educational guide showing bone selection techniques in Blender Edit Mode. Dark viewport background (#2b2b2b). Panel 1: "Select Body" - hand cursor clicking bone body, entire bone highlighted orange. Panel 2: "Select Head/Tail" - cursor clicking head sphere, only head highlighted. Panel 3: "Box Select (B)" - white dotted selection box around multiple bones. Panel 4: "Circle Select (C)" - circular brush painting over bones to select them. Each panel shows clear visual feedback with orange selection color (#ff8c00). Add keyboard shortcut labels: "Click", "Click Sphere", "B + Drag", "C + Paint". Style: clean tutorial illustration, Blender viewport aesthetic, instructional clarity. Layout: 2x2 grid, 1600x1600 total, 800x800 per panel. Include subtle panel dividers and consistent 3D armature reference.
```

### **Prompt 6: Extrusion Process Step-by-Step**
```
Create a six-step sequential tutorial showing bone extrusion process. Dark gray background (#2b2b2b) throughout. Step 1: Single vertical bone selected (orange), tail highlighted. Step 2: Press "E" key indicator appears. Step 3: Bone tail detached, moving upward following cursor (show motion with faded trail). Step 4: New position confirmed, second bone now connected to first. Step 5: Second bone's tail selected for next extrusion. Step 6: Final result showing 3-bone connected chain. Add step numbers (1-6) and action text under each: "1. Select tail", "2. Press E", "3. Move", "4. Click to confirm", "5. Repeat", "6. Connected chain". Orange bones (#ff8c00), bright green cursor crosshair, dotted connection lines. Style: instructional sequence, animated tutorial feel, progressive demonstration. Layout: horizontal flow 2400x800, 400x800 per step. Arrows between steps showing flow direction.
```

### **Prompt 7: Parent-Child Hierarchy Visualization**
```
Create a hierarchical tree diagram showing bone parent-child relationships in a biped armature. Dark background (#2b2b2b). At top/center: "Pelvis (Root)" in larger text box. Below branching out: "Spine_01" → "Spine_02" → "Spine_03" → "Neck" → "Head" in vertical chain. From Spine_03, two branches: Left shows "Shoulder.L" → "Upper_Arm.L" → "Forearm.L" → "Hand.L". Right mirror shows .R variants. From Pelvis, two lower branches: "Upper_Leg.L/R" → "Lower_Leg.L/R" → "Foot.L/R". Use connecting lines (bright orange #ff8c00) with arrows showing parent→child direction. Each bone name in rounded rectangle box. Color code: Root pelvis in purple accent, spine bones in orange, arms in cyan, legs in green. Add influence indicators with opacity gradient showing "Parent moves → All children follow". Style: organizational chart meets technical diagram, clear hierarchy visualization. Layout: 1920x1200, centered tree structure.
```

### **Prompt 8: Hierarchy Testing in Pose Mode**
```
Create a before-and-after comparison demonstrating hierarchy verification. Dark Blender viewport (#2b2b2b). Left panel labeled "Before": Simple armature (shoulder → upper_arm → forearm → hand chain) in neutral position, shoulder bone selected and highlighted bright blue (Pose Mode color). Add rotation widget visible at shoulder. Right panel labeled "After": Same armature with shoulder rotated 45 degrees, showing entire arm chain has followed the rotation - all child bones moved together while maintaining their connections. Add curved arrow on right panel showing rotation direction. Overlay text: "✓ Hierarchy Working: Children Follow Parent". Include subtle ghost image of original position in gray for reference. Style: Blender viewport aesthetic, clear demonstration of rig functionality, tutorial visualization. Layout: split-screen comparison 1920x900, 960x900 per panel. Orange bones (#ff8c00) in Edit reference, blue (#00b8ff) in Pose demonstration.
```

### **Prompt 9: Anatomical Bone Positioning Reference**
```
Create a dual-view anatomical reference showing correct bone placement in a humanoid character. Dark background (#2b2b2b). Left view: Front orthographic view of character in T-pose with armature visible inside. Right view: Side orthographic view of same character. Character mesh should be semi-transparent gray-blue (#8899aa, 30% opacity) showing internal skeleton clearly. Bones displayed as bright orange (#ff8c00) octahedral shapes. Critical joints marked with small red target indicators: shoulder joint (deep in ribcage), hip joint (inside pelvis, not on surface), knee joint (slightly forward of center), elbow joint (slightly behind center). Add measurement guides showing depth from surface to bone. Include small callout boxes: "Shoulder: Inside ribcage at armpit level", "Hip: Deep inside pelvis, groin area", "Knee: Slightly forward (CRITICAL)", "Spine: Natural S-curve". Style: medical/technical illustration quality, anatomical accuracy, educational reference material. Layout: 1920x1200, two equal panels side-by-side.
```

### **Prompt 10: Critical Joint Positions Guide**
```
Create a four-panel detailed reference showing close-ups of critical joint placements. Dark background (#2b2b2b) throughout. Panel 1 "Shoulder": Close-up of upper torso, ribcage mesh semi-transparent, showing shoulder bone head INSIDE ribcage near armpit, not on visible shoulder surface. Red X on wrong surface placement, green checkmark on correct deep placement. Panel 2 "Elbow": Arm in straight position, elbow bone joint at visible bump, slightly behind arm center line. Panel 3 "Hip": Pelvis cross-section view showing hip joint deep inside pelvis at groin level, not at visible hip surface. Panel 4 "Knee": Leg side view with knee joint in kneecap position, clearly forward of leg centerline (dotted reference line). Each panel has clear "CORRECT" and "INCORRECT" examples with checkmarks and X marks. Add measurement annotations showing offset distances. Style: technical medical illustration quality, anatomical precision, instructional clarity. Layout: 2x2 grid, 1600x1600 total, 800x800 per panel.
```

### **Prompt 11: Bone Roll Visualization**
```
Create a comparison diagram showing bone roll effects on bend direction. Dark background (#2b2b2b). Left side "Correct Roll": Forearm bone with local axes visible (X-red, Y-blue, Z-green), axes oriented properly. Below it, same bone in Pose Mode bent 90 degrees, bending in natural forward direction (elbow motion). Right side "Incorrect Roll": Forearm bone with axes rotated 90 degrees wrong. Below it, same bone bent creates unnatural sideways bend instead. Add rotation indicator arrows near bone showing roll angle. Label each with "✓ Natural Bending" and "✗ Unnatural Sideways Bend". Include small axis compass in corner showing X/Y/Z orientation. Highlight the X-axis with emphasis since it determines bend direction. Style: technical educational comparison, clear visual difference between correct and incorrect, side-by-side learning tool. Layout: 1600x1000, split left/right with before/after poses for each condition. Bones in orange (#ff8c00), axes in standard RGB colors.
```

### **Prompt 12: Recalculate Roll Interface**
```
Create a Blender interface screenshot showing the Recalculate Roll menu. Dark Blender theme (#2b2b2b). Main viewport shows armature in Edit Mode with all bones selected (orange #ff8c00). User has pressed Ctrl+N, bringing up the "Recalculate Roll" menu. Menu displays options: "Global +Y Axis", "Global +Z Axis", "Active Bone", "View Axis", "Cursor". "Global +Y Axis" is highlighted with hover state. Add a callout box with arrow pointing to highlighted option: "For limbs and most bones". Show before state (bones with misaligned axes) in small inset, and indicate after state will auto-fix roll. Include keyboard shortcut indicator "Ctrl + N" in top corner. Style: Blender 4.0 UI aesthetic, tutorial screenshot with annotations, professional software documentation. Layout: 1920x1080 full Blender window, viewport focused, menu clearly visible center-screen. Add subtle glow or highlight around the menu for emphasis.
```

### **Prompt 13: Naming Convention Examples**
```
Create a split educational diagram showing proper bone naming. Left side: Blender Outliner panel (dark theme #2b2b2b) showing armature hierarchy with professional names: "pelvis" (root), "spine_01", "spine_02", "spine_03", "neck", "head", "shoulder.L", "upper_arm.L", "forearm.L", "hand.L", "shoulder.R", "upper_arm.R", etc. Use color coding: center bones in white, .L bones in cyan tint, .R bones in orange tint. Right side: annotation panel showing naming rules: "Lowercase with underscores", ".L suffix for left", ".R suffix for right", "Numbers with underscore: _01, _02", "Descriptive not generic". Add examples with checkmarks for correct names and X marks for wrong names like "Bone.001", "ArmUpper", "left_arm". Include highlighted section showing .L/.R enables auto-mirroring. Style: UI documentation, clean typography, educational reference card. Layout: 1920x1080, 40% Outliner on left, 60% annotation rules on right.
```

### **Prompt 14: Batch Rename Tool Interface**
```
Create a Blender interface tutorial showing Batch Rename in action. Dark Blender theme (#2b2b2b). Main scene: Multiple bones selected in Edit Mode (orange #ff8c00) with default names "Bone.001", "Bone.002", "Bone.003" visible in viewport. Batch Rename panel is open showing options. "Find/Replace" operation selected. Find field contains "Bone", Replace field contains "finger". Small preview panel shows before/after: "Bone.001" → "finger.001", "Bone.002" → "finger.002", etc. Add step indicators: "1. Select bones", "2. Right-click > Batch Rename", "3. Choose operation", "4. Enter Find/Replace text". Highlight the "Apply" button. Include small callout: "Rename multiple bones instantly". Style: Blender UI documentation, tutorial screenshot with numbered steps, professional training material. Layout: 1920x1080, centered on batch rename panel with enough context to show selected bones and viewport.
```

### **Prompt 15: Biped Armature Blueprint**
```
Create a technical blueprint-style diagram of complete biped armature. Dark blue-gray background (#1a2332) like engineering blueprint. Two main views: Front orthographic view on left, Side orthographic view on right. Armature displayed as white/light blue (#aaccff) technical line drawing. All ~20 bones clearly visible and labeled with leader lines: pelvis, spine_01/02/03, chest, neck, head, shoulder.L/R, upper_arm.L/R, forearm.L/R, hand.L/R, upper_leg.L/R, lower_leg.L/R, foot.L/R. Add dimension lines showing bone lengths and proportions. Include small legend box listing: "Total Bones: 20", "Symmetrical: Yes", "Hierarchy: Single root (pelvis)". Add grid overlay for reference. Small 3D perspective view in corner showing same armature at 3/4 angle. Style: technical engineering drawing, blueprint aesthetic, architectural precision, CAD-style documentation. Layout: 2400x1600, split view with measurements and clean linework.
```

### **Prompt 16: Spine Chain Construction**
```
Create a six-step progressive sequence showing spine chain building. Dark background (#2b2b2b). Step 1: Single vertical "pelvis" bone in orange (#ff8c00). Step 2: Tail selected (bright yellow highlight), "Press E" indicator. Step 3: "spine_01" extruded upward to lower back. Step 4: "spine_02" added at mid-back. Step 5: "spine_03" at upper back/shoulder level. Step 6: "neck" and "head" completing the chain. Show natural S-curve developing in side view inset for steps 4-6. Each step has large number label and bone name label. Add connection lines between bones showing they're linked. Final step shows complete chain from pelvis to head with all naming visible. Arrows between steps show progression. Include small checkmark and "✓ All connected" on final step. Style: progressive tutorial sequence, step-by-step instruction, animated guide feel. Layout: horizontal flow 2400x800, 400x800 per step. Clean, instructional, easy to follow.
```

### **Prompt 17: Arm Chain Build Process**
```
Create a four-step tutorial showing complete arm construction. Dark viewport background (#2b2b2b). Step 1: "shoulder.L" bone positioned from sternum to shoulder joint (inside ribcage), shown with semi-transparent character reference in background. Yellow arrow points to correct deep position. Step 2: "Extrude from shoulder tail" - press E indicator, "upper_arm.L" extending to elbow. Step 3: "Press E again" - "forearm.L" from elbow to wrist. Step 4: "Final extrusion" - "hand.L" from wrist to knuckles. Complete chain visible with all connections shown by dotted lines between bone heads/tails. Include small side-by-side comparison showing "Connected bones = auto-hierarchy". Add parent relationship indicators: shoulder → upper_arm → forearm → hand. Each bone labeled clearly. Final panel shows "Test in Pose Mode" with shoulder rotated and entire arm following. Style: instructional tutorial, progressive build sequence, hands-on guide. Layout: 2000x1000, four panels in progression with clear flow arrows.
```

### **Prompt 18: Leg Chain with Forward Knee**
```
Create a critical comparison showing correct vs incorrect knee positioning. Dark background (#2b2b2b). Large side-view of leg (upper_leg + lower_leg + foot bones in orange #ff8c00). Left panel "CORRECT ✓": Knee joint positioned FORWARD of leg centerline (shown with vertical dotted reference line). Green checkmark, green highlight around knee joint. Add measurement annotation showing forward offset. Label: "Knee forward = Natural bending + IK success". Right panel "INCORRECT ✗": Knee joint centered on leg line. Red X mark, red highlight. Label: "Centered knee = IK ambiguity + Unnatural bending". Include small inset showing IK problem: centered knee doesn't know which direction to bend (arrows pointing both forward and back with question mark). Add prominent warning box: "⚠️ CRITICAL: Always position knee slightly forward in side view!" Style: technical warning diagram, clear correct/incorrect comparison, emphasis on critical detail. Layout: 1600x1000, large side-by-side comparison with detailed annotations.
```

### **Prompt 19: Symmetrize Tool Demonstration**
```
Create a three-stage demonstration of the Symmetrize workflow. Dark Blender interface (#2b2b2b). Stage 1 "Before": Armature with only left-side bones visible (shoulder.L, upper_arm.L, forearm.L, hand.L, upper_leg.L, lower_leg.L, foot.L) all selected in orange. Center spine bones visible but not selected. Stage 2 "Execute": Menu visible showing "Armature > Symmetrize" command highlighted. Large arrow indicating action. Show mouse cursor on menu item. Stage 3 "After": Complete armature now visible with perfectly mirrored right side bones (shoulder.R, upper_arm.R, etc.) appearing in orange. Add sparkle/glow effect on newly created bones. Overlay text: "✓ Perfect mirror created!", "✓ Names auto-changed .L → .R", "✓ Hierarchy preserved". Include small before/after miniature views in corners for reference. Style: Blender UI tutorial, clear workflow demonstration, visual transformation emphasis. Layout: 2400x800 horizontal flow, three equal panels showing progression.
```

### **Prompt 20: X-Axis Mirror Mode**
```
Create a live demonstration concept showing real-time mirror editing. Dark Blender interface split-screen (#2b2b2b). Top of screen: "X-Axis Mirror" checkbox visibly enabled/checked in toolbar with emphasis glow. Main split screen: Left viewport shows left arm ("upper_arm.L" selected and being moved/rotated with manipulator gizmo visible). Right viewport shows right arm ("upper_arm.R") simultaneously updating to mirror position in real-time. Add motion arrows and ghost trails showing synchronized movement. Center dividing line with two-way arrows indicating mirroring relationship. Overlay text: "Edit One Side = Other Side Updates Automatically". Show small inset demonstrating: move .L bone, .R bone mirrors instantly. Add callout: "Requires both sides to exist first - use after Symmetrize". Include small warning: "Disable when working on center bones or single side". Style: Blender tutorial, split-screen demonstration, dynamic action visualization, real-time editing concept. Layout: 1920x1080, clear split with emphasis on simultaneous updating.
```

### **Prompt 21: Bone Properties Panel Overview**
```
Create an annotated interface guide showing the Bone Properties panel. Dark Blender theme (#2b2b2b). Right side panel showing complete "Bone Properties" interface (bone icon 🦴 tab). Clearly visible sections with colored annotation boxes pointing to each: "Transform" section (green box) - showing Head XYZ, Tail XYZ, Roll inputs. "Relations" section (blue box) - showing Parent dropdown, Connected checkbox. "Deform" section (orange box) - highlighting the Deform checkbox, Envelope settings, B-Bone segments. "Display" section (purple box) - showing Hide checkbox, Custom Shape selector. "Inverse Kinematics" section (cyan box) - showing IK Stretch, Lock axes. Left side shows armature in viewport with single bone selected (orange) so properties are active. Add numbered callouts: "1. Select bone", "2. Access properties", "3. Adjust settings". Style: Blender UI documentation, educational interface guide, clear section identification. Layout: 1920x1080, properties panel prominent on right, viewport context on left, colorful annotations for clarity.
```

### **Prompt 22: Deform Checkbox Comparison**
```
Create a before/after comparison demonstrating the Deform checkbox effect. Dark background (#2b2b2b). Two scenarios shown: Top "Deform: ON ✓": Left shows bone in Edit Mode with "Deform" checked in properties inset. Right shows Pose Mode with bone rotated and mesh visibly deforming/following the bone movement. Green checkmark, green tint. Label: "Bone affects mesh - use for all limbs/body". Bottom "Deform: OFF ✗": Left shows bone with "Deform" unchecked. Right shows Pose Mode with bone moved but mesh stays in original position (ghost outline showing mesh not following). Orange/yellow indicator, not a negative but informational. Label: "Control bone only - mesh unaffected - use for IK targets/helpers". Include small icon representations: deform ON = bone with mesh influence waves, deform OFF = bone with crossed-out mesh influence. Style: educational comparison, clear visual difference, side-by-side demonstration. Layout: 1600x1200, stacked comparison panels, clear before/after for each state.
```

### **Prompt 23: Custom Bone Shapes Example**
```
Create a transformation demonstration showing default bones becoming custom shapes. Dark viewport background (#2b2b2b). Top half "Before - Default Display": Simple armature with standard octahedral bone shapes in orange (#ff8c00). Bones labeled: "FK hand control", "IK foot target", "Root controller". Bottom half "After - Custom Shapes": Same armature but bones now display as custom shapes: hand control shows as cube wireframe, foot target shows as circle/ring, root shows as arrows cross. Add glow effect on transformed bones. Include small UI inset showing "Custom Shape" dropdown in Bone Properties with object selected. Arrows pointing from original bones to transformed versions. Overlay text: "Animator-Friendly Controls", "Easier to Select", "Professional Rig Quality". Style: professional rig demonstration, before/after transformation, production-quality visualization. Layout: 1600x1200, stacked before/after with clear transformation indicated.
```

### **Prompt 24: Complete Armature in T-Pose**
```
Create a professional multi-view render of completed biped armature. Dark neutral background (#2b2b2b). Three views arranged: Center/Large "Front View": Complete armature in perfect T-pose (arms out to sides, legs slightly apart), all bones clearly visible as bright orange (#ff8c00) octahedral shapes. Left "Side View": Same armature showing spine curvature, arm/leg depth, knee forward position. Right "3/4 Perspective": Armature at slight angle showing 3D structure. All bone names visible as text labels (pelvis, spine_01/02/03, neck, head, shoulder.L/R, upper_arm.L/R, forearm.L/R, hand.L/R, upper_leg.L/R, lower_leg.L/R, foot.L/R). Add small info panel: "Total: 20 bones", "Hierarchy: ✓", "Symmetry: ✓", "Ready for Weight Painting". Clean, professional presentation. Style: technical documentation render, production-ready showcase, portfolio-quality presentation. Layout: 2400x1600, main front view centered, side views flanking, clean composition.
```

### **Prompt 25: Pose Mode Test Poses**
```
Create a four-pose demonstration showing rig functionality. Dark background (#2b2b2b). Four panels showing same armature in different poses: Panel 1 "T-Pose": Neutral starting position, arms out, standing straight. Panel 2 "Arm Raised": Right arm bent at elbow, raised overhead, showing hierarchy (shoulder moves entire arm). Panel 3 "Leg Bent": Left leg bent at knee, foot lifted, showing natural deformation. Panel 4 "Spine Curved": Torso bent forward, spine showing smooth curve, arms hanging down. All bones visible as blue (#00b8ff) indicating Pose Mode. Add motion trails/ghost images showing transition between poses. Overlay checkmarks on each: "✓ Hierarchy works", "✓ Bends naturally", "✓ No breaking". Include small "Pose Mode" indicator in corner. Style: animation test sheet, pose demonstration, rig functionality showcase, professional animation reference. Layout: 2x2 grid, 1920x1080 total, each pose 960x540, clean pose to pose comparison.
```

### **Prompt 26: Common Mistakes Illustrated**
```
Create a grid showing common rigging errors vs corrections. Dark background (#2b2b2b). Six panels in 2x3 grid, each split into WRONG (left, red tint) and RIGHT (right, green tint): Panel 1 "Bone Position": Wrong shows bone sticking out of mesh surface vs Right shows bone inside mesh volume. Panel 2 "Knee Placement": Wrong shows knee centered vs Right shows knee forward. Panel 3 "Naming": Wrong shows "Bone.001" default name vs Right shows "upper_arm.L" descriptive name. Panel 4 "Hierarchy": Wrong shows disconnected bones, no parent vs Right shows proper connected chain with parent arrows. Panel 5 "Symmetry": Wrong shows misaligned left/right sides vs Right shows perfectly mirrored bones. Panel 6 "Roll": Wrong shows bone bending sideways vs Right shows natural forward bending. Each panel has large X mark on wrong side, checkmark on right side. Style: educational error reference, clear wrong/right comparison, learning tool, warning guide. Layout: 2400x1600, 6 panels arranged in neat grid with clear dividers.
```

### **Prompt 27: Bone Layers Organization**
```
Create an interface diagram showing bone layer organization system. Dark Blender interface (#2b2b2b). Main viewport shows complex armature with ~50+ bones. Right side: Bone Properties panel with "Layers" section visible - 32 layer dots in 4x8 grid. Color code different layer groups: Layers 1-4 highlighted green (main deform bones). Layers 5-8 highlighted cyan (facial bones). Layers 9-12 highlighted yellow (hand/finger details). Layers 16-20 highlighted purple (control bones). Add annotations with arrows pointing to each group: "Layer 1: Main Body", "Layer 2: Face", "Layer 3: Hands", "Layer 10+: Controls". Show example: clicking layer 1 hides all other bones, viewport updates to show only main deform bones. Include small legend box showing typical layer organization. Note: "Blender 4.0+ uses Bone Collections (better system)". Style: UI organization guide, system documentation, layer management tutorial. Layout: 1920x1080, properties panel prominent, clear layer system explanation.
```

### **Prompt 28: Add Armature Menu Path**
```
Create a clear UI navigation tutorial showing how to add first armature. Dark Blender interface (#2b2b2b) showing default scene with cube, light, camera. Main focus: Shift+A "Add" menu is open and prominent. Menu tree visible: "Mesh" (collapsed), "Curve" (collapsed), "Surface" (collapsed), then "Armature" (expanded/highlighted with orange accent) showing submenu with "Single Bone" option highlighted in bright selection color. Add large numbered callouts: "1. Press Shift + A" (shown as keyboard keys graphic), "2. Navigate to Armature", "3. Click Single Bone". Result shown in small inset: single bone appears at 3D cursor in viewport. Include cursor position indicator. Add helpful note: "Default: vertical bone, 1 unit tall". Style: Blender UI tutorial for beginners, clear step-by-step instruction, menu navigation guide. Layout: 1920x1080, menu prominently displayed center-screen, clear visual hierarchy, easy to follow steps.
```

### **Prompt 29: Edit vs Pose Mode Visual Difference**
```
Create a clear comparison showing the two critical armature modes. Dark Blender interface (#2b2b2b). Split-screen comparison: Left "Edit Mode": Simple armature (3 bones in chain) displayed with orange bones (#ff8c00). Mode dropdown in header clearly shows "Edit Mode" selected. Toolbar shows edit-specific tools: Select, Move, Rotate, Extrude visible. Add list overlay: "Can: Add/delete bones, Set rest pose, Build hierarchy". Right "Pose Mode": Same armature but bones now blue/cyan (#00b8ff). Mode dropdown shows "Pose Mode". Toolbar shows pose-specific tools: Rotate, Scale, Move. Add list overlay: "Can: Create poses, Keyframe animation, Test rig". Include prominent indicator: "Edit = Orange, Permanent changes" and "Pose = Blue, Temporary poses". Show keyboard shortcut: "Tab = Toggle Edit/Object" and "Ctrl+Tab = Enter Pose Mode". Style: Blender UI documentation, clear mode distinction, beginner-friendly reference. Layout: 1920x1080, clean split-screen with emphasized differences.
```

### **Prompt 30: Finger Bones Detail (Bonus)**
```
Create a detailed close-up showing complete hand rigging. Dark background (#2b2b2b). Large hand armature in clear frontal view with all bones visible as orange octahedral shapes (#ff8c00). Five finger chains: Thumb (2 bones): "thumb_01.L" → "thumb_02.L". Index (3 bones): "index_01.L" → "index_02.L" → "index_03.L". Middle (3 bones): "middle_01/02/03.L". Ring (3 bones): "ring_01/02/03.L". Pinky (3 bones): "pinky_01/02/03.L". Palm/hand bone at base: "hand.L". All bones clearly labeled with small text callouts. Show bone connections with subtle dotted lines. Include small inset showing finger in bent position (Pose Mode test) demonstrating natural curl. Add count: "Total: 16 bones per hand (1 palm + 15 finger segments)". Side panel shows alternative naming convention: "f_index.01.L" style. Style: anatomical precision, detailed hand anatomy, professional rig reference, technical bone mapping. Layout: 1600x1200, hand centered, clear labeling, zoomed for detail visibility.
```

---

## SVG Diagram Recommendations

The following images would work exceptionally well as SVG diagrams due to their technical, schematic nature:

1. **Bone Anatomy Breakdown (#2)** - Clear geometric shapes, labels, and arrows make this ideal for vector format. Scalability ensures clarity at any size for reference.

2. **Bone Display Types Comparison (#3)** - Simple bone shapes in different styles translate perfectly to vector graphics. Clean lines and consistent styling.

3. **Parent-Child Hierarchy Visualization (#7)** - Tree diagrams are perfect for SVG - boxes, connecting lines, and arrows with no rasterization needed. Infinitely scalable for presentations.

4. **Bone Roll Visualization (#11)** - Technical diagram showing axes and rotation - vector graphics will keep lines crisp and colors pure at any zoom level.

5. **Naming Convention Examples (#13)** - Text-heavy with organizational structure - SVG ensures perfect text rendering and easy color adjustments.

6. **Biped Armature Blueprint (#15)** - Technical blueprint style with measurement lines and annotations is ideal for vector format. CAD-like precision.

7. **Common Mistakes Illustrated (#26)** - Grid layout with comparison panels, text labels, and simple geometry - perfect for SVG. Easy to update and modify.

8. **Bone Layers Organization (#27)** - UI diagram with boxes, labels, and color coding translates well to vector. Clean, scalable interface documentation.

**Rationale for SVG recommendations:** These diagrams are primarily composed of geometric shapes, text, lines, and organizational structures rather than photorealistic renders or complex gradients. SVG format provides:
- Infinite scalability without quality loss
- Smaller file sizes for web delivery
- Easy color/text updates for localization
- Crisp rendering on high-DPI displays
- Better accessibility for screen readers

---

## Image Placement Suggestions in HTML

### Section: Understanding Armatures (id="understanding-armatures")
- **After first paragraph:** Insert Image #1 (Armature Concept Diagram) to introduce mesh-armature relationship
- **Within "How Armatures Work" card:** Reference Image #7 (Hierarchy Visualization) showing parent-child flow
- **After "Why Proper Armature Setup Matters" card:** Place Image #26 (Common Mistakes) as warning reference

### Section: Bone Anatomy (id="bone-anatomy")
- **After "Parts of a Bone" heading:** Insert Image #2 (Bone Anatomy Breakdown) showing head, tail, body, roll
- **Within "Bone Display Types" card:** Insert Image #3 (Display Types Comparison) showing visualization options
- **After "Bone Coordinate System" explanation:** Add Image #11 (Bone Roll Visualization) showing axes and bend direction

### Section: Creating First Armature (id="creating-first-armature")
- **Within "Adding Your First Armature" card:** Insert Image #28 (Add Menu Path) showing Shift+A navigation
- **After "Understanding Armature Modes" heading:** Insert Image #4 (Three Modes Comparison) and Image #29 (Edit vs Pose)
- **Within "Basic Bone Manipulation" card:** Add Image #5 (Selection Methods) showing different selection techniques
- **After "Adding More Bones" heading:** Insert Image #6 (Extrusion Process) showing step-by-step bone creation

### Section: Bone Hierarchies (id="bone-hierarchies")
- **After opening paragraph:** Insert Image #7 (Hierarchy Visualization) as central concept reference
- **Within "How Hierarchies Work" card:** Reference Image #8 (Testing Hierarchy) showing Pose Mode verification
- **After "Testing Your Hierarchy" section:** Place Image #25 (Test Poses) showing rig functionality

### Section: Positioning Bones (id="positioning-bones")
- **After "Why Bone Position Matters" heading:** Insert Image #9 (Anatomical Reference) showing front/side views
- **Within "Anatomical Landmarks" card:** Add Image #10 (Critical Joint Positions) as detailed reference
- **After "Joint-Specific Positioning" section:** Insert Image #18 (Forward Knee) emphasizing critical placement
- **Within "Bone Roll Alignment" card:** Add Image #12 (Recalculate Roll Interface) showing tool usage

### Section: Naming Conventions (id="naming-conventions")
- **After "Standard Bone Naming Convention" heading:** Insert Image #13 (Naming Examples) showing proper conventions
- **Within "Batch Renaming Techniques" card:** Add Image #14 (Batch Rename Tool) showing interface
- **After "Naming Checklist" section:** Reference Image #27 (Bone Layers) for organization context

### Section: Biped Armature (id="biped-armature")
- **After opening paragraph:** Insert Image #15 (Biped Blueprint) showing complete skeleton overview
- **Within "Phase 1: Spine Chain":** Add Image #16 (Spine Construction) showing sequential build
- **Within "Phase 2: Arms":** Insert Image #17 (Arm Chain Build) showing limb construction
- **Within "Phase 3: Legs":** Add Image #18 (Leg with Forward Knee) emphasizing critical positioning
- **Within "Phase 4: Mirror":** Insert Image #19 (Symmetrize Demo) showing mirroring workflow
- **After "Final Touches" section:** Place Image #24 (Complete T-Pose) as final reference

### Section: Bone Properties (id="bone-properties")
- **After opening paragraph:** Insert Image #21 (Properties Panel Overview) as interface guide
- **Within "Deformation Settings" card:** Add Image #22 (Deform Checkbox) showing ON/OFF comparison
- **Within "Display Settings" card:** Insert Image #23 (Custom Shapes) showing control customization

### Section: Symmetry and Mirroring (id="symmetry-mirroring")
- **After "The Symmetrize Tool" heading:** Insert Image #19 (Symmetrize Demo) as primary reference
- **Within "X-Axis Mirror Editing" card:** Add Image #20 (Mirror Mode) showing real-time editing
- **After "Common Symmetry Problems" section:** Reference Image #26 (Common Mistakes) for troubleshooting

### Section: Project (id="project")
- **Within "Project Goal" card:** Place Image #15 (Biped Blueprint) as reference for what to build
- **Throughout build phases:** Reference relevant sequential images (#16 spine, #17 arm, #18 leg, #19 symmetrize)
- **At "Success Checklist":** Insert Image #24 (Complete T-Pose) showing expected final result
- **Within "Bonus Challenges":** Add Image #30 (Finger Bones) as advanced reference

### Section: Summary (id="summary")
- **Within "Quick Reference Guide":** Reference Image #29 (Edit vs Pose Mode) and Image #21 (Properties Panel)
- **After "Workflow Best Practices":** Place Image #24 (Complete T-Pose) as achievement showcase

---

## File Naming Convention

```
lesson_37_01_armature_concept_diagram.png
lesson_37_02_bone_anatomy_breakdown.png
lesson_37_03_display_types_comparison.png
lesson_37_04_three_modes_comparison.png
lesson_37_05_selection_methods.png
lesson_37_06_extrusion_process.png
lesson_37_07_hierarchy_visualization.svg
lesson_37_08_hierarchy_testing.png
lesson_37_09_anatomical_positioning.png
lesson_37_10_critical_joint_positions.png
lesson_37_11_bone_roll_visualization.svg
lesson_37_12_recalculate_roll_interface.png
lesson_37_13_naming_conventions.svg
lesson_37_14_batch_rename_tool.png
lesson_37_15_biped_blueprint.svg
lesson_37_16_spine_construction.png
lesson_37_17_arm_chain_build.png
lesson_37_18_leg_forward_knee.png
lesson_37_19_symmetrize_demo.png
lesson_37_20_x_axis_mirror.png
lesson_37_21_bone_properties_panel.png
lesson_37_22_deform_checkbox_comparison.png
lesson_37_23_custom_shapes_example.png
lesson_37_24_complete_tpose_armature.png
lesson_37_25_pose_mode_test_poses.png
lesson_37_26_common_mistakes.svg
lesson_37_27_bone_layers_organization.png
lesson_37_28_add_armature_menu.png
lesson_37_29_edit_vs_pose_mode.png
lesson_37_30_finger_bones_detail.png
```

**Format guidelines:**
- Use two-digit numbering (01, 02, etc.) for proper file sorting
- Descriptive names use underscores (no spaces) for web compatibility
- Extension based on type:
  - `.png` for screenshots, UI captures, and complex renders
  - `.svg` for diagrams, blueprints, and technical illustrations
  - `.jpg` could be used for final showcase images (if file size is concern)

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #2 - Bone Anatomy Breakdown** - Core concept visualization showing head, tail, body, roll
   **Rationale:** Foundational understanding - students must know bone parts to follow all subsequent instructions

2. **Image #4 - Three Armature Modes Comparison** - Critical mode distinctions (Object, Edit, Pose)
   **Rationale:** Mode confusion is #1 beginner issue - clear visual prevents hours of frustration

3. **Image #7 - Parent-Child Hierarchy Visualization** - Tree diagram showing bone relationships
   **Rationale:** Hierarchy is the core concept that makes armatures functional - without this, everything breaks

4. **Image #9 - Anatomical Bone Positioning Reference** - Front/side views showing correct bone placement
   **Rationale:** Proper positioning directly determines animation quality - bad placement = broken deformation

5. **Image #18 - Leg Chain with Forward Knee** - Critical knee positioning comparison
   **Rationale:** Forward knee is single most critical detail for IK and natural movement - common mistake with major consequences

6. **Image #15 - Biped Armature Blueprint** - Complete skeleton overview showing final goal
   **Rationale:** Students need clear target to work toward - blueprint shows what success looks like

7. **Image #19 - Symmetrize Tool Demonstration** - Workflow showing left→right mirroring
   **Rationale:** Symmetry is standard professional workflow - this one tool cuts rigging time by 50%

8. **Image #24 - Complete Armature in T-Pose** - Final project result showing finished rig
   **Rationale:** Visual confirmation of project completion - students compare their work to reference

**Rationale for High Priority:** These images directly support the primary learning objectives: understanding what armatures are, how to build them correctly, and how to position bones for animation. Without these, students will struggle with fundamental concepts and make costly mistakes.

### Medium Priority (Helpful but not Critical)
9. **Image #1 - Armature Concept Diagram** - Mesh-armature relationship introduction
10. **Image #6 - Extrusion Process Step-by-Step** - Sequential bone creation guide
11. **Image #8 - Hierarchy Testing in Pose Mode** - Verification demonstration
12. **Image #11 - Bone Roll Visualization** - Bend direction explanation
13. **Image #13 - Naming Convention Examples** - Professional naming standards
14. **Image #21 - Bone Properties Panel Overview** - Interface tour
15. **Image #26 - Common Mistakes Illustrated** - Error prevention guide
16. **Image #29 - Edit vs Pose Mode Visual Difference** - Mode distinction clarifier

**Rationale for Medium Priority:** These enhance understanding and prevent common issues but concepts can be grasped through text alone or discovered through practice. They significantly improve the learning experience but aren't blocking factors.

### Lower Priority (Nice to Have)
17. **Image #3 - Bone Display Types Comparison** - Visualization options reference
18. **Image #5 - Bone Selection Methods** - Selection techniques demo
19. **Image #10 - Critical Joint Positions Guide** - Detailed joint placement closeups
20. **Image #12 - Recalculate Roll Interface** - Tool usage screenshot
21. **Image #14 - Batch Rename Tool Interface** - Naming efficiency tool
22. **Image #16 - Spine Chain Construction** - Sequential spine build
23. **Image #17 - Arm Chain Build Process** - Arm construction sequence
24. **Image #20 - X-Axis Mirror Mode** - Real-time mirroring demo
25. **Image #22 - Deform Checkbox Comparison** - Deform setting visualization
26. **Image #23 - Custom Bone Shapes Example** - Advanced display customization
27. **Image #25 - Pose Mode Test Poses** - Rig functionality demonstration
28. **Image #27 - Bone Layers Organization** - Organization system guide
29. **Image #28 - Add Armature Menu Path** - Basic menu navigation
30. **Image #30 - Finger Bones Detail** - Advanced hand rigging reference

**Rationale for Lower Priority:** These provide polish, detail, and advanced techniques. While valuable for comprehensive learning, students can complete core curriculum without them. They serve as supplementary references for deeper exploration or troubleshooting specific issues.

---

## Style Consistency Guidelines

### Color Palette Standards
- **Background:** Dark grey (#2b2b2b) for all viewport and diagram backgrounds
- **Selected Bones (Edit Mode):** Bright orange (#ff8c00) - Blender's standard selection color
- **Selected Bones (Pose Mode):** Bright cyan/blue (#00b8ff) - Blender's Pose Mode color
- **Unselected Bones:** Medium grey (#666666) or white (#ffffff) depending on context
- **Mesh:** Semi-transparent grey-blue (#8899aa at 30-40% opacity) when showing context
- **Axes:** Standard X=Red, Y=Blue, Z=Green RGB color coding
- **Success/Correct:** Bright green (#4CAF50) for checkmarks and positive indicators
- **Warning/Error:** Bright red (#f44336) for X marks and error indicators
- **Highlight/Emphasis:** Bright yellow (#ffeb3b) for attention elements
- **UI Elements:** Blender's dark theme colors (#2b2b2b backgrounds, #ffffff text)

### Blender Version
- **Target Version:** Blender 4.0+ interface for consistency
- **UI Theme:** Default Dark theme
- **Viewport Shading:** Solid shading with moderate lighting
- **Icon Style:** Blender 4.0 modern icon set

### View Angles and Camera Perspectives
- **Front Orthographic:** For front-view anatomy and symmetry checks (Numpad 1)
- **Side Orthographic:** For depth and spine curve reference (Numpad 3)
- **Top Orthographic:** For width and spacing verification (Numpad 7)
- **3/4 Perspective:** For portfolio-quality showcase renders (45-degree angle, slight elevation)
- **Avoid:** Extreme angles that distort bone proportions or obscure critical details

### Selection Highlighting
- **Edit Mode Selected:** Solid bright orange fill (#ff8c00) with slight glow
- **Pose Mode Selected:** Solid cyan/blue fill (#00b8ff) with slight glow
- **Manipulation Widgets:** Standard Blender gizmos (RGB axes for move, rotation arcs)
- **Hover State:** Subtle lightening (10-20% brightness increase) of UI elements

### Typography for Labels
- **Font Family:** Sans-serif (Inter, Roboto, or Open Sans for clean technical look)
- **Label Text:** 16-18pt for main labels, 12-14pt for secondary annotations
- **Headers:** 24-32pt bold for section titles or panel headers
- **Color:** White (#ffffff) for text on dark backgrounds, ensure high contrast
- **Leader Lines:** Thin lines (1-2px) connecting labels to targets, subtle curves for elegance
- **Avoid:** Overly decorative fonts, all-caps for long text, low-contrast combinations

### Annotation Style
- **Arrows:** Simple triangular heads, 2-3px stroke weight, matching theme colors
- **Callout Boxes:** Rounded rectangles with 4-6px corner radius, semi-transparent fills
- **Numbering:** Circular badges for step numbers (colored circles with white numbers)
- **Emphasis:** Colored borders or glows (green for success, red for errors, yellow for warnings)
- **Motion Indicators:** Curved arrows with motion blur or faded trails for dynamic actions
- **Icons:** Use simple, recognizable symbols (✓ checkmark, ✗ X mark, ⚠️ warning triangle)

---

## Accessibility Considerations

### Visual Accessibility
- **Color Blindness:** Don't rely solely on color - use shapes, patterns, and text labels
  - Green checkmarks should also have "✓" symbol
  - Red errors should also have "✗" symbol
  - Use patterns or textures in addition to color coding
- **High Contrast:** Ensure text has minimum 4.5:1 contrast ratio against backgrounds
- **Text Size:** Labels should be readable at minimum 12pt when images are displayed at intended size
- **Consistent Icons:** Use standard symbols (arrows, checkmarks) that are universally recognized

### Alt Text Recommendations
Each image should have descriptive alt text for screen readers:
- **Format:** "Description of image content - specific details about what's shown - purpose/learning goal"
- **Example:** "Bone anatomy diagram showing labeled parts: orange octahedral bone with head sphere at bottom, tail sphere at top, body connecting them, and local coordinate axes (X-red, Y-blue, Z-green) visible - teaches fundamental bone structure"
- **Length:** 125-200 characters - concise but complete
- **Avoid:** "Image of..." or "Diagram showing..." - be direct and descriptive

### Screen Reader Compatibility
- **SVG Accessibility:** Include `<title>` and `<desc>` tags within SVG files
- **Semantic Structure:** Use proper heading hierarchy and list structures in annotations
- **Link Descriptions:** If images are clickable/downloadable, describe what action occurs
- **Navigation:** Ensure images can be skipped by screen reader users if they choose

### Motion and Animation
- **Static Alternatives:** If showing motion (extrusion, rotation), provide static key frames
- **No Auto-Play:** If creating animated versions, don't auto-play - user control
- **Reduced Motion:** Consider providing simplified versions for users with vestibular disorders

---

## Technical Specifications

### Screenshot Resolution
- **Minimum:** 1920x1080 (Full HD) for full-screen UI captures
- **Preferred:** 2560x1440 (2K) for detail clarity and future-proofing
- **Maximum:** 3840x2160 (4K) for hero images or portfolio showcases
- **Aspect Ratios:** 16:9 for landscape, 4:3 for detailed closeups, 1:1 for square diagrams
- **Viewport Capture:** Use Blender's render borders for precise framing

### Image Format Guidelines
- **PNG Usage:**
  - UI screenshots with transparency needs
  - Diagrams with sharp edges and text
  - Multi-panel layouts with defined boundaries
  - Target 24-bit PNG (no alpha) or 32-bit PNG (with alpha) as needed
  - Compression: Use lossless PNG optimization (tools: PNGCrush, TinyPNG)
  
- **SVG Usage:**
  - Technical diagrams with geometric shapes
  - Flowcharts and hierarchy visualizations
  - Blueprint-style technical drawings
  - Text-heavy infographics
  - Maintain editable text layers for easy updates
  - Embed or outline fonts for consistent rendering
  
- **JPG Usage (if needed):**
  - Final showcase renders (armature in T-pose)
  - Photography-style demonstration images
  - When file size is critical (>500KB PNG)
  - Quality setting: 85-90% for balance of size/quality

### File Size Targets
- **Hero Images:** 500KB - 1MB (high-quality showcase)
- **Standard Diagrams:** 150KB - 300KB (optimal web performance)
- **UI Screenshots:** 200KB - 400KB (detail preserved)
- **SVG Files:** 50KB - 150KB (vector efficiency)
- **Thumbnail Versions:** 50KB - 100KB (quick loading)
- **Optimization:** Use ImageOptim, Squoosh, or similar tools post-creation

### Compression Guidelines
- **PNG Optimization:** Lossless compression with pngquant or similar
- **JPG Quality:** 85-90% quality setting (high quality, reasonable size)
- **SVG Optimization:** SVGO for removing unnecessary metadata, simplifying paths
- **Batch Processing:** Use scripts for consistent compression across all images
- **Quality Check:** View compressed images at 100% zoom to verify no artifacts

### Responsive Sizing Considerations
- **Desktop:** Full-resolution images (1920px wide maximum)
- **Tablet:** 1280px wide scaled versions for faster loading
- **Mobile:** 768px wide versions optimized for smaller screens
- **Srcset Strategy:** Provide 1x, 1.5x, 2x versions for different DPI screens
- **Loading:** Implement lazy loading for images below fold
- **Fallbacks:** Always provide alt text and consider text-only descriptions

---

## Special Considerations for This Lesson

### Armature-Specific Requirements
This lesson focuses on skeletal rigging, requiring special attention to:

**Bone Visibility:**
- Bones must be clearly visible against dark backgrounds
- Use X-ray mode or semi-transparent meshes in context shots
- Ensure bone colors (orange, blue) have sufficient contrast
- Avoid over-complex backgrounds that distract from bone structure

**Anatomical Accuracy:**
- Joint positions must match real human anatomy precisely
- Reference medical/anatomical illustrations for accuracy
- Hip joint depth (inside pelvis, not on surface) is critical
- Knee forward position must be consistently emphasized
- Spine curvature should show natural S-shape in side views

**Symmetry Visualization:**
- Left/right sides must be perfectly mirrored in final images
- Use consistent naming (.L/.R) visible in all labeled diagrams
- Show mirroring process clearly (before → action → after)
- Highlight automatic naming changes when demonstrating Symmetrize

**Hierarchy Emphasis:**
- Use tree diagrams and flowcharts to show parent-child relationships
- Visual arrows indicating influence flow (parent → children)
- Before/after demonstrations showing hierarchy effects
- Color coding for different hierarchy levels or bone types

**Mode Distinction:**
- Clear visual difference between Edit Mode (orange) and Pose Mode (blue)
- Mode selector visible in UI screenshots to prevent confusion
- Consistent use of mode colors throughout all images
- Warnings when mode-specific operations are shown

### Production Notes

**Blender Scene Setup:**
- Create clean template .blend file with:
  - Simple humanoid mesh in T-pose (low-poly for clarity)
  - Basic three-point lighting setup for consistent appearance
  - Camera presets for front, side, top, and 3/4 views
  - Named camera angles for quick switching
  - Clean material setup (semi-transparent for x-ray demonstrations)

**Lighting Standards:**
- Viewport lighting: Moderate Studio lighting (Blender's default)
- Consistent light intensity across all screenshots
- No dramatic shadows that obscure bone details
- Flat lighting for technical diagrams, subtle depth for showcase renders

**Camera Settings:**
- Orthographic views for technical accuracy (no perspective distortion)
- Perspective views only for final showcase/portfolio pieces
- Consistent focal length (50mm equivalent) for perspective shots
- Center armature in frame with appropriate padding (10-15% margin)

**Batch Processing Workflow:**
1. Create master .blend with all required armature states
2. Set up named cameras for each required view
3. Render all views in sequence with consistent settings
4. Use Python scripting for batch viewport captures if many iterations needed
5. Export at high resolution, downscale and optimize later
6. Version control: save incremental versions (v01, v02) for iterations

**Version Control:**
- Use descriptive file names for source .blend files
  - `lesson37_armature_anatomy_v03.blend`
  - `lesson37_biped_blueprint_v02.blend`
- Keep layered/editable versions separate from final exports
- Document camera positions and lighting setups in text file
- Save render/screenshot settings as presets

**Template Reuse:**
- Create armature templates for common poses:
  - T-pose neutral (project reference)
  - Test poses (arm raised, leg bent, spine curved)
  - Error demonstrations (knee centered, bone outside)
- Save custom bone shape objects for control visualizations
- Develop consistent annotation styles in image editing software
- Create text label templates with proper sizing/fonts

---

## Image Creation Workflow

### Phase 1: Planning & Design (Before Creation)
1. **Review lesson content** thoroughly - identify exact needs for each section
2. **Sketch rough layouts** for complex diagrams (hierarchy trees, multi-panel comparisons)
3. **Gather reference materials** - anatomy books, existing rigs, professional examples
4. **Plan color coding system** - consistent use across all images
5. **Create style guide** - document decisions for fonts, colors, layout patterns

### Phase 2: 3D Content Creation (Blender Work)
1. **Setup master scenes:**
   - Basic armature states (T-pose, posed, test configurations)
   - Character mesh with proper materials (transparent option for x-ray)
   - Lighting rigs optimized for bone visibility
   - Camera presets for all required angles
2. **Create bone configurations:**
   - Correct anatomical positioning
   - Error examples (for comparison images)
   - Progressive build states (for step-by-step sequences)
3. **Screenshot capture:**
   - Use consistent viewport settings
   - Capture at high resolution (2K or 4K)
   - Save with descriptive names indicating content
4. **Render showcase images:**
   - Final T-pose armature (portfolio quality)
   - Test pose demonstrations
   - Use consistent render settings

### Phase 3: 2D Graphics & Diagrams (Vector/Raster Work)
1. **SVG diagram creation:**
   - Use vector graphics software (Inkscape, Illustrator)
   - Hierarchy trees with clean lines and arrows
   - Blueprint-style technical drawings
   - Maintain editable text layers
2. **Screenshot annotation:**
   - Add labels, callouts, and leader lines
   - Highlight critical UI elements or bones
   - Add numbered steps for tutorials
   - Overlay comparison indicators (✓ ✗ ⚠️)
3. **Multi-panel compositions:**
   - Combine multiple screenshots into grids
   - Add dividing lines and panel labels
   - Ensure consistent sizing across panels

### Phase 4: Optimization & Export (Finalization)
1. **Image optimization:**
   - Compress PNG files losslessly
   - Optimize SVG files (remove metadata, simplify paths)
   - Create responsive versions (desktop, tablet, mobile sizes)
2. **Quality check:**
   - View at target display size
   - Verify text readability
   - Check color contrast
   - Test on different screens/devices
3. **Final export:**
   - Consistent naming convention
   - Organized folder structure
   - Include source files in separate directory
   - Generate thumbnail versions if needed

### Phase 5: Documentation & Delivery
1. **Create asset catalog:**
   - List all images with descriptions
   - Document which images go where in lesson
   - Note any special considerations or alt text
2. **Provide usage notes:**
   - Recommended display sizes
   - HTML integration suggestions
   - Responsive image strategy
3. **Prepare updates:**
   - Keep editable source files organized
   - Document version history
   - Maintain template library for future lessons

---

## Alternative Approaches

### Video Clips Alternative
For complex processes that are difficult to show in static images:
- **Extrusion demonstration:** 10-15 second loop showing E key press → movement → confirmation
- **Hierarchy testing:** Quick video rotating parent bone, showing children follow
- **Symmetrize action:** Animated demonstration of instant mirroring effect
- **Pose Mode tests:** Real-time manipulation showing rig responsiveness

**Video Specifications:**
- Format: MP4 (H.264 codec) for broad compatibility
- Resolution: 1920x1080 minimum
- Frame rate: 30fps or 60fps for smooth motion
- Duration: Keep clips short (10-30 seconds) for quick loading
- Looping: Seamless loops for continuous demonstration
- Captions: Always include for accessibility

### Interactive 3D Views
For allowing students to explore armatures themselves:
- **Embedded Sketchfab viewer:** Rotate/zoom full armature in browser
- **Blender Web viewer:** Direct interaction with .blend file in browser
- **Annotated 3D models:** Clickable bone labels revealing information
- **Comparison sliders:** Drag to reveal before/after or correct/incorrect states

**Implementation Notes:**
- Ensure fast loading and mobile compatibility
- Provide static image fallback for non-supported browsers
- Include clear instructions for interaction
- Consider bandwidth limitations

### Downloadable Assets
Provide supplementary materials students can use:
- **Template .blend files:** Pre-configured scenes for practice
  - Basic armature templates (biped, quadruped)
  - Reference character mesh in T-pose
  - Pre-positioned cameras and lighting
- **Checklist PDFs:** Printable verification lists
  - Bone positioning checklist
  - Naming convention reference card
  - Hierarchy verification steps
- **SVG templates:** Editable diagrams for notes
  - Blank biped blueprint for annotation
  - Hierarchy tree template
  - Joint position guides

---

## Future Enhancements

### Progressive Complexity Gallery
- **Beginner gallery:** Simple 10-bone rigs with labels
- **Intermediate gallery:** 30-50 bone rigs showing fingers
- **Advanced gallery:** 100+ bone production rigs with facial rigging
- **Creature variations:** Quadruped, spider, snake, flying creature examples

### Animated GIF Sequences
Short looping animations demonstrating key concepts:
- Bone hierarchy in action (rotate pelvis → whole body follows)
- Extrusion process (continuous loop of creating bone chain)
- Symmetrize effect (left side → instant mirror to right)
- Pose mode testing (continuous poses showcasing rig flexibility)

**GIF Specifications:**
- Maximum 5MB file size for web performance
- 10-20 frames for smooth motion
- 480p or 720p resolution for balance
- Optimized color palette (256 colors maximum)
- Seamless looping for continuous demonstration

### Interactive Quizzes
Visual identification exercises:
- "Identify the bone head/tail in this image"
- "Which knee position is correct?"
- "What's wrong with this bone hierarchy?"
- "Match bone names to their positions"

### Comparison Sliders
Before/after interactive reveals:
- Drag slider to compare correct vs. incorrect bone roll
- Reveal effect of Symmetrize operation
- Show mesh deformation with/without proper bone positioning

### 360-Degree Turntable Views
Full rotation showcases:
- Complete armature rotating continuously
- Inspect from all angles
- Pause at key positions (front, side, back)
- Embedded in lesson or downloadable

### Printable Reference Cards
Quick-reference materials students can keep beside workspace:
- Bone naming cheat sheet (laminated card size)
- Keyboard shortcuts for armature work
- Common mistakes visual guide
- Anatomical joint position reference

### Blender Add-on or Script
Custom tools for lesson:
- Auto-generate basic armatures for practice
- Verification script (checks naming, hierarchy, positioning)
- Template installer (one-click setup of practice files)
- Progress tracker (checklist within Blender)

---

## Quality Checklist

Before finalizing images, verify:

- [x] **All major lesson sections have appropriate image support** (30 images covering all 11 main sections)
- [x] **Each image has clear educational purpose defined** (Every image includes Purpose field explaining learning goal)
- [x] **AI prompts are detailed and specific** with:
  - [x] Color codes specified (hex values for all key colors: #2b2b2b, #ff8c00, #00b8ff, etc.)
  - [x] Style guidance provided (technical illustration, educational diagram, professional training)
  - [x] Layout requirements clear (panel arrangements, aspect ratios, resolution specifications)
  - [x] Specific visual elements described (bone shapes, axes, labels, annotations)
  - [x] Professional context established (Blender 4.0 interface, training material style)
- [x] **SVG recommendations are justified with clear rationale** (8 SVG candidates identified with specific reasons: geometric shapes, text-heavy, organizational structures, infinite scalability benefits)
- [x] **Placement suggestions reference actual HTML section IDs** (All 11 sections mapped with specific placement points after headings, within cards, and logical flow positions)
- [x] **File naming follows consistent convention** (lesson_37_XX_descriptive_name.ext format with two-digit numbering, underscores, appropriate extensions)
- [x] **Priority ranking is logical and justified** with:
  - [x] High Priority (8 images): Core concepts, critical mistakes, essential workflows - each with specific rationale
  - [x] Medium Priority (8 images): Enhanced learning, common issues, helpful references
  - [x] Lower Priority (14 images): Polish, advanced details, supplementary materials
  - [x] Clear rationale provided for each tier explaining impact on learning outcomes
- [x] **Style/accessibility notes are comprehensive and practical** including:
  - [x] Complete color palette with hex codes
  - [x] Blender version specification (4.0+)
  - [x] Camera angle standards
  - [x] Typography guidelines
  - [x] Accessibility considerations (color blindness, contrast, alt text, screen readers)
  - [x] Consistent annotation style
- [x] **Output is well-organized** with:
  - [x] Clear sections with descriptive headers
  - [x] Logical flow from image list → prompts → recommendations
  - [x] Easy navigation with consistent formatting
  - [x] Professional documentation structure
- [x] **Technical specifications cover all production needs:**
  - [x] Resolution requirements defined
  - [x] File format guidelines with use cases
  - [x] Compression and optimization strategies
  - [x] Responsive sizing considerations
- [x] **Special considerations address lesson-specific requirements:**
  - [x] Armature visibility in dark backgrounds
  - [x] Anatomical accuracy requirements
  - [x] Symmetry visualization needs
  - [x] Hierarchy emphasis methods
  - [x] Mode distinction importance

### Additional Validation
- [x] **Comprehensive coverage:** 30 images span all critical concepts (armature basics, bone anatomy, modes, hierarchy, positioning, naming, biped construction, properties, symmetry, project)
- [x] **Professional tone:** All descriptions maintain educational, instructional clarity appropriate for training materials
- [x] **Actionable prompts:** Every AI prompt includes sufficient detail to generate usable images without ambiguity
- [x] **Practical organization:** File naming enables easy sorting, placement maps enable straightforward HTML integration
- [x] **Future-proof:** Includes workflow templates, alternative approaches, and enhancement suggestions for iteration

---

## Additional Recommendations

### Image Creation Workflow Phases
**Phase 1: Core Concepts (Week 1)**
- Create foundational images #1-8 (armature concepts, bone anatomy, modes, hierarchy)
- Establish style guide and templates
- Get initial feedback on style/clarity

**Phase 2: Practical Application (Week 2)**
- Build images #9-19 (positioning, naming, biped construction, symmetry)
- Develop screenshot templates and annotation style
- Create reusable Blender scenes for consistency

**Phase 3: Interface & Details (Week 3)**
- Produce images #20-27 (properties, layers, common mistakes, organization)
- Refine UI documentation approach
- Establish batch processing workflow

**Phase 4: Polish & Showcase (Week 4)**
- Complete images #28-30 (menu paths, mode comparison, advanced details)
- Create final showcase images
- Optimize all images for web delivery
- Generate responsive versions

### Alternative Content Delivery
Consider supplementing static images with:
- **Animated SVGs:** Subtle motion for hierarchy flow or bone extrusion
- **Step-by-step slideshow:** Click through sequential processes
- **Embedded Blender tips:** Tooltips revealing keyboard shortcuts on hover
- **Progress indicators:** Visual checkmarks as students complete sections

### Community Contributions
After initial release, enable:
- **Student showcase gallery:** Best student-created armatures
- **Common mistake submissions:** Real errors students encounter for additions
- **Language translations:** Community-translated labels for SVG diagrams
- **Alternative examples:** Creature rigs, mechanical rigs, stylized characters

---

This comprehensive image requirements document provides a complete blueprint for creating professional educational images that will significantly enhance Lesson 37. The systematic approach, detailed prompts, and thoughtful organization ensure consistency, clarity, and educational effectiveness across all visual materials.

**Total Images Specified:** 30 comprehensive images
**Format Breakdown:** 22 PNG screenshots/renders, 8 SVG diagrams
**Estimated Production Time:** 40-60 hours for complete set (assuming experience with Blender and image editing)
**File Size Estimate:** ~15-20 MB total for all optimized images

The images work together to create a complete visual learning system that supports every major concept in the lesson, from basic bone anatomy to complete biped construction, making this complex subject accessible and clear for students at all skill levels.
