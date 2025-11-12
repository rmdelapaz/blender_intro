# Image Requirements for Lesson 27: Basic Character Animation

## Task Summary
**Lesson:** lesson_27_basic_character_animation.html  
**Purpose:** Identify and document all images needed to augment the lesson content  
**Date:** November 11, 2025

---

## Image List for Lesson 27

### **1. Character Animation vs Object Animation Comparison**
- **Purpose:** Illustrate the fundamental difference in complexity between animating objects and characters
- **Type:** Composite diagram
- **Shows:** Side-by-side comparison showing a simple bouncing ball with single pivot point versus a character with 20+ bones labeled

### **2. Armature Hierarchy Visualization**
- **Purpose:** Help students understand parent-child bone relationships
- **Type:** Diagram/SVG
- **Shows:** Visual tree diagram of humanoid bone hierarchy with color-coded relationships and flow arrows

### **3. Bone Anatomy Components**
- **Purpose:** Teach the parts of a bone in Blender
- **Type:** Annotated screenshot/diagram
- **Shows:** Single bone with labeled parts: root, tip, body, with annotations pointing to each component

### **4. IK vs FK Comparison**
- **Purpose:** Visually explain the two control methods
- **Type:** Composite diagram
- **Shows:** Two-panel illustration showing FK (rotate shoulder→elbow→wrist sequence) vs IK (move hand target, arm adjusts automatically)

### **5. Pose Mode Interface Overview**
- **Purpose:** Orient students to Pose Mode workspace
- **Type:** Annotated screenshot
- **Shows:** Blender interface in Pose Mode with key UI elements labeled (mode selector, bone colors, timeline, tools)

### **6. Bone Selection Methods**
- **Purpose:** Demonstrate various selection techniques
- **Type:** Composite screenshot
- **Shows:** Multiple panels showing different selection methods (box select, circle select, hierarchy selection)

### **7. Line of Action Examples**
- **Purpose:** Illustrate the gesture curve principle
- **Type:** Diagram with overlays
- **Shows:** Character poses with curved lines drawn through them showing C-curve, S-curve, and straight line examples

### **8. Center of Gravity and Balance**
- **Purpose:** Teach weight distribution principles
- **Type:** Diagram
- **Shows:** Character in standing pose with plumb line from COG to ground, showing support base, with correct and incorrect examples

### **9. Contrapposto Stance Breakdown**
- **Purpose:** Show natural standing pose mechanics
- **Type:** Annotated diagram
- **Shows:** Character in contrapposto with labels pointing to: weight-bearing leg, relaxed leg, hip tilt, opposite shoulder tilt, S-curve line

### **10. Silhouette Test Examples**
- **Purpose:** Demonstrate readable vs unclear poses
- **Type:** Composite comparison
- **Shows:** Three poses shown as silhouettes - one clear, one readable, one unclear - with checkmarks and X marks

### **11. Twinning Examples (Good vs Bad)**
- **Purpose:** Show the importance of asymmetry
- **Type:** Composite comparison
- **Shows:** Two character poses side-by-side - one with symmetrical "twin" arms (marked bad), one with asymmetrical arms (marked good)

### **12. Walk Cycle Four Key Poses**
- **Purpose:** Core reference for walk cycle structure
- **Type:** Composite screenshot/diagram
- **Shows:** Four panels showing Contact, Down, Passing, and Up poses with frame numbers and labels

### **13. Walk Cycle Body Mechanics Diagram**
- **Purpose:** Illustrate vertical, horizontal, and lateral motion
- **Type:** Technical diagram
- **Shows:** Overlapping motion trails showing hip movement paths in all three directions with arrows and measurements

### **14. Foot Roll Sequence**
- **Purpose:** Teach realistic foot contact mechanics
- **Type:** Sequential diagram
- **Shows:** Five-step sequence: heel strike, foot plant, roll through, toe push, lift off - with arrows showing weight transfer

### **15. Walk Cycle Timing Chart**
- **Purpose:** Visual timing reference
- **Type:** Infographic/Chart
- **Shows:** Timeline with frame numbers 1-25 marked, showing where each key pose occurs, with color-coded phases

### **16. Arm Swing Oppositional Pattern**
- **Purpose:** Show correct arm-leg coordination
- **Type:** Diagram
- **Shows:** Top-down view of character showing right leg forward with left arm forward, with arrows indicating movement direction

### **17. Wave Animation Key Poses**
- **Purpose:** Reference for the first character animation project
- **Type:** Composite screenshot
- **Shows:** Seven poses from the wave project: Idle, Anticipation, Wave Start, Wave Peak, Wave Middle, Settle, Return

### **18. Walk Cycle Contact Pose Tutorial**
- **Purpose:** Step-by-step guide for first key pose
- **Type:** Annotated screenshot
- **Shows:** Character in contact pose with callouts explaining leg positions, hip height, arm swing, and weight distribution

### **19. Walk Cycle Passing Pose Tutorial**
- **Purpose:** Step-by-step guide for passing pose
- **Type:** Annotated screenshot
- **Shows:** Character at highest point with support leg labeled, passing leg position shown, hip shift illustrated

### **20. Root Motion Visualization**
- **Purpose:** Explain how to eliminate foot slide
- **Type:** Diagram with motion trail
- **Shows:** Character walk with root bone path shown as line, demonstrating forward progression with stride length measurements

### **21. Graph Editor Curves for Walk Cycle**
- **Purpose:** Show proper curve shapes for natural motion
- **Type:** Screenshot with annotations
- **Shows:** Graph Editor with hip Z-location curve showing wave pattern, with labels for peaks (passing) and troughs (contact)

### **22. Walk Cycle Problem Troubleshooting Guide**
- **Purpose:** Visual reference for fixing common issues
- **Type:** Composite infographic
- **Shows:** Common problems (floating, robotic, off-balance) with before/after solutions illustrated

### **23. Personality Walk Variations**
- **Purpose:** Demonstrate how personality affects movement
- **Type:** Composite comparison
- **Shows:** Same character rig with four different walk styles: Happy (bouncy), Sad (dragging), Confident (swagger), Sneaky (crouched)

### **24. Facial Animation Phoneme Chart**
- **Purpose:** Basic lip sync reference
- **Type:** Reference chart/SVG
- **Shows:** Grid of mouth shapes for key phonemes (A, E, I, O, U, M, B, P, F, V, L, R, S) with labels

### **25. X-Ray Mode and Display Options**
- **Purpose:** Show visibility settings for working with bones
- **Type:** Composite screenshot
- **Shows:** Three views: normal, X-ray mode, in-front display - demonstrating different ways to see bones through mesh

### **26. Pose Mode Tools Panel**
- **Purpose:** Interface reference for pose manipulation tools
- **Type:** Annotated screenshot
- **Shows:** Pose menu expanded showing Copy Pose, Paste Pose, Clear Transforms, with shortcuts labeled

### **27. Keyframe Insertion Menu**
- **Purpose:** Show keyframing options in Pose Mode
- **Type:** Screenshot
- **Shows:** Insert Keyframe menu (I key) with options: Location, Rotation, LocRot, Available - with descriptions

### **28. Dope Sheet with Character Animation**
- **Purpose:** Show how character keyframes appear in timeline
- **Type:** Screenshot
- **Shows:** Dope Sheet view with multiple bone channels showing keyframes at walk cycle intervals, color-coded by bone

### **29. Character Animation Workflow Diagram**
- **Purpose:** Illustrate the professional animation process
- **Type:** Flowchart/Mermaid diagram
- **Shows:** Six-phase process from Reference → Planning → Blocking → Timing → Refinement → Polish with arrows

### **30. Breakdown Poses in Walk Cycle**
- **Purpose:** Show intermediate poses that improve motion quality
- **Type:** Composite screenshot
- **Shows:** Eight-pose walk cycle including breakdowns at frames 4, 10, 16, 22 with arrows showing how they guide interpolation

---

## AI Image Generation Prompts

### **Prompt 1: Character Animation vs Object Animation Comparison**
```
Create a professional educational diagram showing the complexity difference between object and character animation. Left side: a simple orange sphere (bouncing ball) with a single arrow showing its pivot point and basic motion trail. Right side: a humanoid character stick figure with skeleton visible, showing 20+ bones labeled and colored in cyan/blue. Draw red dots at key joints (shoulders, elbows, wrists, hips, knees, ankles, spine segments, head). Include text labels: "Object Animation: 1 pivot, simple motion" and "Character Animation: 20+ bones, complex hierarchy". Style: Clean technical diagram with dark grey background (#2b2b2b). Use white text for labels, cyan for bones, orange for the ball. Layout: Side-by-side comparison with equal spacing. Context: Professional training material for 3D animation education.
```

### **Prompt 2: Armature Hierarchy Visualization**
```
Create a tree diagram showing humanoid character bone hierarchy for Blender animation training. Root at top: "Hips/Root" in bright green box. Branch down to "Spine" in blue. From Spine: "Chest" box connected below. From Chest: three branches - "Neck→Head" (purple), "Left Shoulder→Upper Arm→Forearm→Hand" (cyan), "Right Shoulder→Upper Arm→Forearm→Hand" (orange). From Hips: two branches - "Left Thigh→Shin→Foot" (cyan), "Right Thigh→Shin→Foot" (orange). Use connecting lines with arrows showing parent-child relationships. Style: Clean org-chart layout with rounded rectangle boxes, dark grey background (#2b2b2b), white text in boxes, colored borders matching bone sides. Add legend: "Green=Root, Blue=Spine, Purple=Head, Cyan=Left, Orange=Right". Context: Educational diagram for understanding rigging structure. Dimensions: Wide format 1920x1080.
```

### **Prompt 3: Bone Anatomy Components**
```
Create an educational technical illustration showing a single Blender bone anatomy. Center: A cyan-colored octahedral bone shape (8-sided diamond) displayed at 45-degree angle. Label with white arrows and text pointing to: "Root (Base)" at the bottom pointed end, "Tip (Head)" at the top pointed end, "Body" pointing to the middle section, "Envelope Influence" with a subtle translucent sphere around the bone showing deformation area. Background: Dark grey (#2b2b2b). Add coordinate axis indicator (X-red, Y-green, Z-blue) in corner for spatial reference. Style: Clean technical diagram with clear labels, professional training material aesthetic. Include small text at bottom: "Bone components in Blender Pose Mode". Format: Square 1200x1200.
```

### **Prompt 4: IK vs FK Comparison**
```
Create a two-panel comparison diagram showing Forward Kinematics (FK) vs Inverse Kinematics (IK). Left panel labeled "FK - Forward Kinematics": Show simplified arm with three segments (shoulder, elbow, hand) in cyan. Draw numbered arrows (1→2→3) showing rotation starting at shoulder, then elbow, then hand. Add rotation indicators (curved arrows) at each joint. Right panel labeled "IK - Inverse Kinematics": Same arm structure but with single large arrow pointing to hand, showing it being moved directly. Automatic calculation shown with dotted lines connecting back to elbow and shoulder with "Auto" text. Background: Dark grey (#2b2b2b). Text labels: "Manual rotation of each joint" under FK, "Target-based, automatic joint calculation" under IK. Style: Clean technical diagram, educational material. Use bright orange (#ff8c00) for arrows, cyan for bones, white text. Layout: Side-by-side equal panels. Dimensions: 1920x1080.
```

### **Prompt 5: Pose Mode Interface Overview**
```
Create an annotated screenshot-style diagram of Blender interface in Pose Mode. Show viewport with simple humanoid armature (stick figure) with bones visible in cyan and selected bone in brighter cyan. Annotate key interface elements with white text and orange arrow indicators: "Mode Selector: Pose Mode" pointing to top-left dropdown, "Selected Bone (Cyan)" pointing to active bone, "Unselected Bones (Blue)" pointing to inactive bones, "Timeline" pointing to bottom timeline area with yellow keyframe diamonds visible, "Transform Tools" pointing to left toolbar, "Pose Menu" pointing to header menu. Background: Blender's standard dark interface. Grid floor visible. Style: Professional screenshot with clear annotations and arrows. Include coordinate axis (X-red, Y-green, Z-blue) visible in viewport. Dimensions: 1920x1080.
```

### **Prompt 6: Bone Selection Methods**
```
Create a four-panel composite showing different bone selection methods in Blender. Panel 1 (top-left): Single bone selection with mouse cursor and text "Click to Select". Panel 2 (top-right): Box selection with orange selection box drawn around multiple bones and text "B - Box Select". Panel 3 (bottom-left): Circle selection with circular brush selecting bones and text "C - Circle Select". Panel 4 (bottom-right): Hierarchy selection showing bones connected with highlighted relationship lines and text "L - Select Linked". Each panel shows simplified humanoid armature in Pose Mode. Selected bones in bright cyan, unselected in dark blue. Background: Dark grey (#2b2b2b). White text labels with orange arrows pointing to relevant features. Style: Clean educational composite with even spacing between panels. Dimensions: 1920x1080.
```

### **Prompt 7: Line of Action Examples**
```
Create a three-panel educational diagram showing Line of Action principles in character poses. Panel 1: Character in dynamic C-curve pose (reaching/leaning) with bold orange curved line drawn through body from head to feet, labeled "C-Curve: Dynamic, Single Direction". Panel 2: Character in relaxed stance with S-curve through body (contrapposto), purple curved line showing the flowing S-shape, labeled "S-Curve: Natural, Contrapposto". Panel 3: Character at attention with straight red vertical line through center, labeled "Straight Line: Rigid, Formal". Use simple stick figure style with visible skeleton. Background: Dark grey (#2b2b2b) per panel. Each pose shown in profile for clarity. White text labels below each. Style: Clean technical illustration for animation training. Dimensions: Wide format 1920x800 for horizontal layout.
```

### **Prompt 8: Center of Gravity and Balance**
```
Create a two-panel comparison diagram showing correct and incorrect balance. Left panel (correct - green checkmark): Character standing on one leg with vertical dotted white line drawn from hips (COG) down to ground, landing inside the support foot (shown as orange footprint area). Character appears balanced. Label: "COG Over Support = Balanced". Right panel (incorrect - red X): Same character with COG line falling outside support foot area. Character appears to be falling. Label: "COG Outside Support = Falling". Both panels show simplified humanoid figure in profile. Background: Dark grey (#2b2b2b). Use bright green for correct example border, bright red for incorrect. Show hip point highlighted in yellow. Style: Clear educational diagram with bold visual indicators. Add text at bottom: "Center of Gravity must be over support base". Dimensions: 1920x1080.
```

### **Prompt 9: Contrapposto Stance Breakdown**
```
Create an annotated diagram showing contrapposto standing pose mechanics. Center: Simplified humanoid figure in natural standing pose with weight on right leg. Overlay annotations with white text and orange arrows: "Weight-bearing leg (straight)" pointing to right leg in bold cyan, "Relaxed leg (bent)" pointing to left leg in lighter cyan, "Hip tilt - higher on weight side" with horizontal line showing angle, "Shoulders tilt opposite direction" with horizontal line showing counter-tilt, "S-curve through body" with flowing orange curved line from head through spine to feet. Highlight COG point at hips in yellow. Background: Dark grey (#2b2b2b). Add subtle grid floor for reference. Style: Professional anatomy/animation training diagram. Include text label at bottom: "Natural Standing Pose - Contrapposto". Dimensions: 1080x1920 (vertical format).
```

### **Prompt 10: Silhouette Test Examples**
```
Create a three-panel comparison showing silhouette readability. Each panel shows same character pose rendered as pure black silhouette against light grey background (#e0e0e0). Panel 1 (Clear ✓): Character waving with arm extended outward, body in profile, limbs separated. Green checkmark overlay. Label: "Clear - Action Readable". Panel 2 (Readable ✓): Character in moderate pose, some overlap but still understandable. Yellow checkmark overlay. Label: "Readable - Action Identifiable". Panel 3 (Unclear ✗): Character with limbs overlapping body, unclear pose. Red X overlay. Label: "Unclear - Action Confusing". Arrange panels horizontally with equal spacing. Add text header: "The Silhouette Test". Style: Clean comparison layout for animation education. Dimensions: 1920x800.
```

### **Prompt 11: Twinning Examples (Good vs Bad)**
```
Create a side-by-side comparison showing asymmetry importance. Left panel (BAD - Red X): Character with both arms at exactly same angle, both hands same position, perfectly symmetrical pose. Looks stiff and robotic. Label: "❌ TWINNING - Symmetrical/Boring". Draw red circles around matching arm positions. Right panel (GOOD - Green ✓): Same character with arms at different angles, one raised more than other, asymmetrical and natural. Label: "✓ ASYMMETRY - Natural/Interesting". Draw green arrows showing varied positioning. Background per panel: Dark grey (#2b2b2b). Character shown in front view as simplified humanoid. Style: Clear educational comparison with bold visual indicators (red vs green borders around each panel). White text labels. Dimensions: 1920x1080.
```

### **Prompt 12: Walk Cycle Four Key Poses**
```
Create a four-panel horizontal layout showing the essential walk cycle poses. Panel 1: "CONTACT (Frame 1)" - Character with both feet on ground, legs spread in V-shape, body low. Panel 2: "DOWN (Frame 4)" - Character at lowest point, one foot lifting, weight compressed. Panel 3: "PASSING (Frame 7)" - Character at highest point, support leg straight, other leg lifted with bent knee passing by. Panel 4: "UP (Frame 10)" - Character extending upward, front foot about to land. Use simplified humanoid figure in profile view. Background: Dark grey (#2b2b2b). Each pose outlined in bright orange (#ff8c00) box with white frame number and pose name at top. Draw ground line (white) for reference. Style: Clean technical animation reference sheet. Add arrows between panels showing progression. Dimensions: 2400x800 (wide format).
```

### **Prompt 13: Walk Cycle Body Mechanics Diagram**
```
Create a technical diagram showing three-dimensional hip movement in walk cycle. Center: Simplified character shown from side view with ghost/transparent duplicate poses showing motion phases. Overlay three colored motion paths: VERTICAL (green curved line showing up-down bobbing motion with measurement "1-2 inches"), HORIZONTAL (blue straight arrow showing forward progression with measurement "steady speed"), LATERAL (red curved line showing side-to-side sway with measurement "~1 inch"). Label each path with white text. Show high points and low points marked with small circles on curves. Background: Dark grey (#2b2b2b). Add coordinate axis (X-Y-Z) in corner for reference. Include text label: "Walk Cycle: Three-Axis Body Mechanics". Style: Technical animation training diagram with clear motion visualization. Dimensions: 1920x1080.
```

### **Prompt 14: Foot Roll Sequence**
```
Create a five-panel sequential diagram showing foot contact through walking step. Panel 1: "Heel Strike" - Foot at angle with heel touching ground first (red dot on heel). Panel 2: "Foot Plant" - Whole foot flat on ground (green highlight on entire foot). Panel 3: "Roll Through" - Weight transferring toward toes (yellow arrow showing direction). Panel 4: "Toe Push" - Heel lifting, toes pressing down (orange dot on toes, upward arrow on heel). Panel 5: "Lift Off" - Foot leaving ground completely (blue motion lines). Show simplified foot/leg in profile each panel. Background: Dark grey (#2b2b2b). White labels under each panel. Draw ground line (white) for reference. Use color-coded dots and arrows to emphasize contact points. Style: Clean sequential technical illustration. Dimensions: 2000x600 (wide horizontal).
```

### **Prompt 15: Walk Cycle Timing Chart**
```
Create an infographic-style timeline showing walk cycle frame breakdown. Horizontal timeline from frame 1 to frame 25 with tick marks for each frame. Color-coded sections: Frames 1-4 (red zone labeled "Contact to Down"), Frames 4-7 (orange zone labeled "Down to Passing"), Frames 7-10 (yellow zone labeled "Passing to Up"), Frames 10-13 (green zone labeled "Up to Contact"). Mark key poses with large circles at frames 1, 4, 7, 10, 13. Draw small character silhouettes at each key frame showing the pose. Repeat pattern for second half (13-25) with opposite leg. Background: Dark grey (#2b2b2b). White text labels. Add note at top: "Standard Walk Cycle = 24 Frames (1 second at 24fps)". Style: Clear reference infographic for animation timing. Include legend explaining color zones. Dimensions: 2400x1000.
```

### **Prompt 16: Arm Swing Oppositional Pattern**
```
Create a top-down diagram showing correct arm-leg coordination in walking. View from above showing simplified character outline in dark blue. Right leg stepping forward (highlighted in bright cyan with forward arrow). Left arm swinging forward (highlighted in bright cyan with forward arrow). Left leg back (shown in orange with back arrow). Right arm back (shown in orange with back arrow). Draw large curved arrows showing motion direction. Label in white text: "RIGHT LEG FORWARD = LEFT ARM FORWARD" and "Oppositional Movement for Balance". Background: Dark grey (#2b2b2b). Add compass indicator (N-S-E-W) showing character facing north. Draw dotted line through center of body showing division. Include text at bottom: "Always opposite: Forward leg matches opposite arm". Style: Clean technical diagram, bird's eye view. Dimensions: 1200x1200 (square format).
```

### **Prompt 17: Wave Animation Key Poses**
```
Create a seven-panel horizontal layout showing wave animation progression. Simplified humanoid character in each panel. Panel 1: "IDLE (Frame 1)" - Neutral standing pose. Panel 2: "ANTICIPATION (Frame 12)" - Slight crouch, arm pulling back. Panel 3: "WAVE START (Frame 24)" - Arm raising, hand at shoulder height. Panel 4: "WAVE PEAK (Frame 36)" - Arm fully raised, hand at highest point. Panel 5: "WAVE MOTION (Frame 48)" - Hand waving side to side (show motion lines). Panel 6: "SETTLE (Frame 60)" - Arm lowering halfway. Panel 7: "RETURN (Frame 72)" - Back to idle pose. Background: Dark grey (#2b2b2b) per panel. White frame numbers and pose names at top of each panel. Character outlined in bright cyan (#00ffff). Draw ground line for reference. Style: Clean animation reference sheet with consistent spacing. Dimensions: 2800x800 (extra wide format).
```

### **Prompt 18: Walk Cycle Contact Pose Tutorial**
```
Create an annotated reference showing the contact pose in detail. Center: Humanoid character in contact pose (both feet on ground, legs spread). Annotations with white text and orange arrows: "Right leg forward - mostly straight" pointing to front leg, "Left leg back - more bent" pointing to back leg, "Hips lowered - compressed body" with horizontal dashed line showing low position, "Left arm forward (opposite)" with arrow, "Right arm back" with arrow, "Feet shoulder-width apart" with measurement indicators. Highlight key points: COG in yellow, feet contact points in red dots, knee bends in green circles. Background: Dark grey (#2b2b2b). Show character from 3/4 view for clarity. Add grid floor for reference. Include large text label: "CONTACT POSE - Frame 1 & 13". Style: Detailed tutorial annotation. Dimensions: 1920x1080.
```

### **Prompt 19: Walk Cycle Passing Pose Tutorial**
```
Create an annotated reference showing the passing pose in detail. Center: Humanoid character at highest point of walk cycle. Annotations with white text and orange arrows: "Support leg straight - locked knee" pointing to planted left leg, "Passing leg bent - knee high" pointing to right leg passing through, "Hips raised - maximum height" with dashed horizontal line showing high position, "Hip shifted over support foot" with red vertical plumb line from hips to support foot, "Body extended - tall posture" with vertical measurement, "Opposite arm swing" showing right arm forward, left arm back. Highlight key points: COG directly over support foot (yellow line to show alignment), passing knee apex (green circle). Background: Dark grey (#2b2b2b). Character shown from side view. Grid floor for reference. Large text label: "PASSING POSE - Frame 7 & 19". Style: Detailed tutorial annotation. Dimensions: 1920x1080.
```

### **Prompt 20: Root Motion Visualization**
```
Create a diagram showing root bone forward progression to eliminate foot slide. Top view shows character from side walking through 5 ghost positions showing motion progression. Draw bright yellow line showing root bone path moving steadily forward. Label each ghost position with frame numbers: 1, 7, 13, 19, 25. Draw ground grid with measurement marks showing stride length. Annotate with white text: "Root moves forward consistently" with arrow along yellow path, "Stride length per step = ~0.6-1.0 units" pointing to measured distance, "Foot plants stay locked to grid when in contact" showing feet aligned to grid squares. Background: Dark grey (#2b2b2b). Character ghosts shown in progressively fading cyan (nearest bright, farthest faded). Include large text: "Forward Root Motion Prevents Foot Slide". Style: Technical motion visualization. Dimensions: 2400x1000.
```

### **Prompt 21: Graph Editor Curves for Walk Cycle**
```
Create a screenshot-style diagram showing Graph Editor with proper walk cycle curves. Main area: Graph Editor interface (Blender style) with dark background. Show Z-location curve (vertical movement) as smooth sine wave with peaks at frames 7 and 19 (labeled "HIGH - Passing Pose" in green text), troughs at frames 1 and 13 (labeled "LOW - Contact Pose" in blue text). The curve should show smooth bezier interpolation. Annotate with white arrows: "Smooth wave = natural bounce", "Peak to trough = 1-2 inches travel". Show frame numbers (1-25) on horizontal axis, height values on vertical axis. Include small thumbnail of character at key frames above curve showing corresponding poses. Background: Blender's Graph Editor dark theme. Style: Educational screenshot with clear annotations. Add text at top: "Graph Editor: Hip Vertical Motion in Walk Cycle". Dimensions: 1920x1080.
```

### **Prompt 22: Walk Cycle Problem Troubleshooting Guide**
```
Create a three-column troubleshooting infographic. Column 1 (left): "PROBLEM" - Show three issue scenarios: "Floating/Sliding" (character with feet sliding across ground), "Robotic Motion" (stiff straight-line movement), "Off Balance" (character leaning too far, falling). Column 2 (middle): "CAUSE" - Matching issues: "No root forward motion", "Linear interpolation", "COG not over support foot". Column 3 (right): "SOLUTION" - Corrected examples: "Add root translation", "Use Bezier curves + breakdowns", "Adjust hip position over planted foot". Each row separated by horizontal divider. Use red X for problems, green checkmark for solutions. Background: Dark grey (#2b2b2b) with white text. Include header: "Common Walk Cycle Problems & Fixes". Style: Clean troubleshooting reference chart with before/after visuals. Dimensions: 1920x1200.
```

### **Prompt 23: Personality Walk Variations**
```
Create a four-panel comparison showing how personality affects walk cycle. Panel 1: "HAPPY/CONFIDENT" - Character with higher bounce (green upward arrows showing lift), chest up, bigger arm swing. Panel 2: "SAD/DEPRESSED" - Character slouched (blue downward arrows), minimal vertical motion, dragging feet. Panel 3: "CONFIDENT/SWAGGER" - Character with exaggerated hip sway (purple curved arrows), chest puffed, slow deliberate steps. Panel 4: "SNEAKY/CAUTIOUS" - Character crouched low (orange arrows showing compressed posture), small careful steps, arms close. All panels show same simplified humanoid character in profile walking left to right. Background: Dark grey (#2b2b2b). White text labels with personality traits. Draw ground line for reference. Motion trails in respective colors showing movement quality. Style: Comparative animation study showing same mechanics, different personality. Dimensions: 2400x900.
```

### **Prompt 24: Facial Animation Phoneme Chart**
```
Create a reference grid showing mouth shapes for key phonemes used in lip sync. 4x4 grid layout. Each cell contains: simplified character face (front view) showing specific mouth shape, with phoneme label below. Phonemes to show: A, E, I, O, U (vowels row), M/B/P, F/V, W/Q (consonants row 1), L, R, S, TH (consonants row 2). Use clean simple line art style for faces - just mouth, jaw, teeth visible. Background per cell: Light grey (#f0f0f0). Cell borders in dark grey. Mouth positions shown in orange/red. Label each with large letter/sound. Include header text: "Basic Phoneme Reference for Lip Sync". Add note at bottom: "Approximate shapes - emotion matters more than precision". Style: Clean reference chart for animation training. Dimensions: 1600x1600 (square grid).
```

### **Prompt 25: X-Ray Mode and Display Options**
```
Create a three-panel comparison showing bone visibility options in Blender. Panel 1: "NORMAL VIEW" - Character mesh in solid view with bones not visible inside, only orange bone outline at edges. Panel 2: "X-RAY MODE" - Same character with semi-transparent mesh, bones clearly visible through body in bright cyan, labeled "Alt+Z - See bones through mesh". Panel 3: "IN FRONT DISPLAY" - Character mesh opaque but bones render on top in bright cyan with slight glow effect, labeled "Always Visible - Never Occluded". Show simplified humanoid character in neutral pose for all three panels. Background: Dark grey (#2b2b2b) per panel. White text labels at bottom of each. Add icons showing the mode indicators. Style: Clear interface option comparison for tutorial. Dimensions: 1920x800.
```

### **Prompt 26: Pose Mode Tools Panel**
```
Create an annotated interface reference showing Pose Mode menu options. Center: Blender-style menu panel expanded showing: "Pose" dropdown menu with options visible: "Copy Pose (Ctrl+C)", "Paste Pose (Ctrl+V)", "Paste Pose Flipped (Ctrl+Shift+V)", "Clear Transform" submenu showing "Clear Location (Alt+G)", "Clear Rotation (Alt+R)", "Clear Scale (Alt+S)", "Relax Pose", "Propagate Pose". Each option shown with keyboard shortcut in lighter grey text to the right. Use orange highlights to emphasize frequently used options (Copy, Paste, Clear Rotation). Background: Blender's dark interface theme. Add white arrows and annotations: "Most used for symmetrical posing" pointing to Paste Flipped, "Reset to rest pose" pointing to Clear Rotation. Style: Screenshot-style interface documentation. Dimensions: 1000x1400 (vertical menu layout).
```

### **Prompt 27: Keyframe Insertion Menu**
```
Create an interface reference showing the Insert Keyframe menu in Pose Mode. Center: Dark popup menu (Blender style) showing keyframe options after pressing I key: "Location" with icon, "Rotation" with icon (highlighted in orange as most common), "Scaling" with icon, "LocRot" with icon, "LocRotScale" with icon, "Available" with icon. Each option has small descriptive text underneath in lighter grey: "Position only", "Angle only (most common for posing)", etc. Draw keyboard key visual showing "I" key at top. Annotate with white arrows: "Most common for character animation" pointing to Rotation and LocRot options. Background: Blender's dark theme. Show simplified character armature in background (out of focus) to provide context. Include title text: "Keyframe Insertion Menu (I Key)". Style: Clear interface documentation. Dimensions: 1000x1200.
```

### **Prompt 28: Dope Sheet with Character Animation**
```
Create an educational screenshot showing Dope Sheet view with character walk cycle keyframes. Top: Blender Dope Sheet interface header. Main area: Channel list on left showing bone names in hierarchy: "Root", "Spine", "Chest", "Head", "UpperArm.L", "Forearm.L", "Hand.L", "Thigh.L", "Shin.L", "Foot.L", etc. Right side: Timeline grid with yellow diamond keyframes at frames 1, 7, 13, 19, 25 for each bone channel. Some channels have keyframes at all frames (root), others only at specific frames (hands). Color-code channels: Root in green, Spine in blue, Left limbs in cyan, Right limbs in orange. Background: Blender's dark Dope Sheet theme. Add white annotations: "All bones keyframed at main poses" pointing to frame 1, "Hand detail only" pointing to hand channel. Include playhead (green line) at frame 7. Style: Educational interface screenshot with annotations. Dimensions: 1920x1080.
```

### **Prompt 29: Character Animation Workflow Diagram**
```
Create a professional flowchart showing the character animation production pipeline. Six large rounded rectangle boxes arranged horizontally with arrows connecting them in sequence: 1. "REFERENCE" (purple box) - icons of video camera and person. 2. "PLANNING" (blue box) - icons of thumbnails and notes. 3. "BLOCKING" (green box) - icon of stick figure with key poses. 4. "TIMING" (yellow box) - icon of timeline/clock. 5. "REFINEMENT" (orange box) - icon of curve/graph. 6. "POLISH" (red box) - icon of sparkle/finish. Large arrow flowing left to right connecting all stages. Background: Dark grey (#2b2b2b). White text in boxes. Add small descriptive text under each box explaining the phase. Include title at top: "Professional Animation Workflow". Style: Clean modern flowchart with icons and clear progression. Dimensions: 2400x800.
```

### **Prompt 30: Breakdown Poses in Walk Cycle**
```
Create an eight-pose comprehensive walk cycle reference sheet showing main poses AND breakdowns. Top row (Key Poses): Frame 1 "Contact", Frame 7 "Passing", Frame 13 "Contact", Frame 19 "Passing" - shown in bright cyan outline. Bottom row (Breakdown Poses): Frame 4 "Down", Frame 10 "Up", Frame 16 "Down", Frame 22 "Up" - shown in orange outline. Each pose shows simplified humanoid character in profile. Draw curved arrows between poses showing smooth motion flow. Background: Dark grey (#2b2b2b). White frame numbers and pose names. Key poses have solid borders, breakdowns have dashed borders. Add text annotations: "Key poses define action" with arrow to top row, "Breakdowns guide interpolation" with arrow to bottom row. Include ground line for reference. Style: Comprehensive technical animation reference. Dimensions: 2400x1200.
```

---

## SVG Diagram Recommendations

The following images would work best as SVG diagrams for clarity, scalability, and file size optimization:

1. **Armature Hierarchy Visualization** (#2) - Tree diagram with clear connections between boxes and text labels
2. **Walk Cycle Timing Chart** (#15) - Timeline-based infographic with color zones and text
3. **Character Animation Workflow Diagram** (#29) - Flowchart with boxes, arrows, and icons
4. **Phoneme Chart** (#24) - Grid layout with simple line art faces and text labels
5. **IK vs FK Comparison** (#4) - Simple geometric shapes (arm segments) with arrows and labels
6. **Line of Action Examples** (#7) - Stick figures with curved line overlays
7. **Foot Roll Sequence** (#14) - Simple foot diagrams with dots and arrows showing sequence
8. **Arm Swing Oppositional Pattern** (#16) - Top-down view with arrows showing movement direction
9. **Silhouette Test Examples** (#10) - Pure black silhouettes on light background (vector perfect)

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, lines, arrows, text labels, and simple diagrams without photorealistic detail or complex gradients. SVG format provides infinite scalability without quality loss, smaller file sizes for web delivery, and easy editing for future updates. They serve as reference charts and technical diagrams where clarity and readability at any size are more important than texture or realistic rendering.

---

## Image Placement Suggestions in HTML

### Section: Introduction to Character Animation (id="character-animation-intro")
- **After "What Makes Character Animation Different" heading:** Insert Image #1 (Character Animation vs Object Animation Comparison)
- **After "Animation Principles in Character Work" heading:** Insert Image #29 (Character Animation Workflow Diagram)

### Section: Understanding Armatures and Bones (id="armatures-bones")
- **After "What is an Armature?" heading:** Insert Image #2 (Armature Hierarchy Visualization)
- **Within "Bone Anatomy in Blender" card:** Insert Image #3 (Bone Anatomy Components)
- **Within "IK vs FK" card:** Insert Image #4 (IK vs FK Comparison)

### Section: Working in Pose Mode (id="pose-mode")
- **After "Entering and Exiting Pose Mode" heading:** Insert Image #5 (Pose Mode Interface Overview)
- **Within "Selecting Bones" card:** Insert Image #6 (Bone Selection Methods)
- **Within "X-Ray and Display Options" card:** Insert Image #25 (X-Ray Mode and Display Options)
- **Within "Pose Mode Keyframing" card:** Insert Image #27 (Keyframe Insertion Menu)
- **Within "Pose Mode Tools" card:** Insert Image #26 (Pose Mode Tools Panel)

### Section: Character Posing Principles (id="posing-principles")
- **Within "The Line of Action" card:** Insert Image #7 (Line of Action Examples)
- **Within "Weight and Balance" card:** Insert Image #8 (Center of Gravity and Balance) and Image #9 (Contrapposto Stance Breakdown)
- **Within "Silhouette and Clarity" card:** Insert Image #10 (Silhouette Test Examples)
- **Within "Twinning and Breaking Symmetry" card:** Insert Image #11 (Twinning Examples)

### Section: Your First Character Animation (id="first-animation")
- **Within "Project Overview" card:** Insert Image #17 (Wave Animation Key Poses)

### Section: Walk Cycle Theory (id="walk-cycle-theory")
- **Within "The Four Key Poses" card:** Insert Image #12 (Walk Cycle Four Key Poses)
- **Within "Body Mechanics in Walking" card:** Insert Image #13 (Walk Cycle Body Mechanics Diagram)
- **Within "Arm Swing" card:** Insert Image #16 (Arm Swing Oppositional Pattern)
- **Within "Foot Contact and Roll" card:** Insert Image #14 (Foot Roll Sequence)
- **Within "Walk Cycle Timing" card:** Insert Image #15 (Walk Cycle Timing Chart)

### Section: Project: Your First Walk Cycle (id="walk-cycle-project")
- **Within "Phase 1: First Contact Pose" card:** Insert Image #18 (Walk Cycle Contact Pose Tutorial)
- **Within "Phase 2: Passing Pose" card:** Insert Image #19 (Walk Cycle Passing Pose Tutorial)
- **Within "Dope Sheet view reference":** Insert Image #28 (Dope Sheet with Character Animation)

### Section: Refining Your Walk Cycle (id="walk-cycle-refinement")
- **Within "Adding Breakdown Poses" card:** Insert Image #30 (Breakdown Poses in Walk Cycle)
- **Within "Fixing Foot Slide" card:** Insert Image #20 (Root Motion Visualization)
- **Within "Graph Editor Polish" card:** Insert Image #21 (Graph Editor Curves for Walk Cycle)
- **Within "Common Walk Cycle Problems" card:** Insert Image #22 (Walk Cycle Problem Troubleshooting Guide)

### Section: Walk Cycle Variations (id="variations")
- **Within "Personality Through Walk" card:** Insert Image #23 (Personality Walk Variations)

### Section: Beyond the Basics (id="beyond-basics")
- **Within "Facial Animation Basics" card:** Insert Image #24 (Facial Animation Phoneme Chart)

---

## File Naming Convention

```
lesson_27_01_character_vs_object_comparison.png
lesson_27_02_armature_hierarchy.svg
lesson_27_03_bone_anatomy.png
lesson_27_04_ik_vs_fk_comparison.svg
lesson_27_05_pose_mode_interface.png
lesson_27_06_bone_selection_methods.png
lesson_27_07_line_of_action.svg
lesson_27_08_cog_balance.png
lesson_27_09_contrapposto_breakdown.png
lesson_27_10_silhouette_test.svg
lesson_27_11_twinning_examples.png
lesson_27_12_walk_cycle_key_poses.png
lesson_27_13_walk_body_mechanics.png
lesson_27_14_foot_roll_sequence.svg
lesson_27_15_walk_timing_chart.svg
lesson_27_16_arm_swing_pattern.svg
lesson_27_17_wave_animation_poses.png
lesson_27_18_contact_pose_tutorial.png
lesson_27_19_passing_pose_tutorial.png
lesson_27_20_root_motion_viz.png
lesson_27_21_graph_editor_curves.png
lesson_27_22_troubleshooting_guide.png
lesson_27_23_personality_variations.png
lesson_27_24_phoneme_chart.svg
lesson_27_25_xray_display_options.png
lesson_27_26_pose_tools_panel.png
lesson_27_27_keyframe_menu.png
lesson_27_28_dope_sheet_view.png
lesson_27_29_workflow_diagram.svg
lesson_27_30_breakdown_poses.png
```

**Format guidelines:**
- Use two-digit numbering (01, 02, etc.) for proper sorting
- Descriptive names use underscores (no spaces)
- .png for screenshots and detailed composite images
- .svg for diagrams, charts, and simple illustrations
- Keep names concise but descriptive

---

## Production Priority

### High Priority (Essential for Understanding Core Concepts)

1. **Image #12 - Walk Cycle Four Key Poses** - THE fundamental reference for walk cycles. Students cannot complete walk cycle project without this visual guide showing Contact, Down, Passing, Up poses.

2. **Image #4 - IK vs FK Comparison** - Essential for understanding the two primary bone control methods. Students must grasp this difference before attempting character animation.

3. **Image #8 - Center of Gravity and Balance** - Critical principle that separates believable poses from falling characters. Shows the plumb line test visually.

4. **Image #18 - Walk Cycle Contact Pose Tutorial** - Step-by-step visual guide for creating the first key pose. Students refer to this repeatedly while building their walk cycle.

5. **Image #19 - Walk Cycle Passing Pose Tutorial** - Essential companion to #18, showing the opposite extreme pose with detailed annotations.

6. **Image #15 - Walk Cycle Timing Chart** - Provides the frame-by-frame timing reference students need. Without this, timing becomes guesswork.

7. **Image #2 - Armature Hierarchy Visualization** - Shows parent-child bone relationships that are fundamental to understanding how character rigs work.

8. **Image #22 - Walk Cycle Problem Troubleshooting Guide** - Addresses the most common issues students will encounter. Saves hours of frustration.

**Rationale:** These eight images directly support the two major hands-on projects (wave animation and walk cycle) and teach the foundational concepts that everything else builds upon. Without these, students cannot successfully complete the lesson projects or understand why their animations don't work.

### Medium Priority (Significantly Enhances Learning Experience)

9. **Image #1 - Character Animation vs Object Animation Comparison** - Sets context for the entire lesson by showing complexity difference.

10. **Image #5 - Pose Mode Interface Overview** - Orients students to the workspace they'll spend hours in.

11. **Image #7 - Line of Action Examples** - Teaches pose design principle that immediately improves student work quality.

12. **Image #10 - Silhouette Test Examples** - Visual demonstration of pose readability principle.

13. **Image #11 - Twinning Examples** - Shows common mistake and correction that students need to see.

14. **Image #13 - Walk Cycle Body Mechanics Diagram** - Explains the three-axis motion that makes walk cycles believable.

15. **Image #16 - Arm Swing Oppositional Pattern** - Shows the arm-leg coordination many students get wrong initially.

16. **Image #20 - Root Motion Visualization** - Solves the foot slide problem that confounds most beginners.

17. **Image #21 - Graph Editor Curves for Walk Cycle** - Shows what proper timing curves should look like.

18. **Image #23 - Personality Walk Variations** - Demonstrates how same mechanics create different characters.

19. **Image #3 - Bone Anatomy Components** - Technical knowledge that helps when troubleshooting.

20. **Image #6 - Bone Selection Methods** - Workflow efficiency tips that save time.

**Rationale:** These images enhance understanding of principles and workflow but aren't absolutely required to complete the projects. They significantly reduce confusion and improve results but students could theoretically proceed without them.

### Lower Priority (Nice to Have, Polish and Reference)

21. **Image #17 - Wave Animation Key Poses** - Helpful reference but wave project is simpler than walk cycle.

22. **Image #9 - Contrapposto Stance Breakdown** - Good anatomical detail but not essential for basic animation.

23. **Image #14 - Foot Roll Sequence** - Advanced detail for later refinement, basic walk works without it.

24. **Image #24 - Facial Animation Phoneme Chart** - Useful reference but facial animation is future lesson topic.

25. **Image #25 - X-Ray Mode and Display Options** - Interface options students discover through exploration.

26. **Image #26 - Pose Mode Tools Panel** - Menu reference that's documented in Blender's UI.

27. **Image #27 - Keyframe Insertion Menu** - Interface reference, not conceptual teaching.

28. **Image #28 - Dope Sheet with Character Animation** - Shows result of work, not teaching core concept.

29. **Image #29 - Character Animation Workflow Diagram** - Overview that's nice context but process explained in text.

30. **Image #30 - Breakdown Poses in Walk Cycle** - Advanced refinement technique for intermediate stage.

**Rationale:** These images provide additional context, references, and polish but the lesson remains complete without them. They're valuable for comprehensive course materials but can be added later if production time/budget is limited.

---

## Notes

### Style Consistency Guidelines
- **Color Palette Standards:**
  - Background: Dark grey (#2b2b2b) for Blender viewport screenshots and technical diagrams
  - Selection highlight: Bright orange (#ff8c00) for selected elements
  - Bone colors: Cyan (#00ffff) for unselected, brighter cyan for selected, orange for right side, blue for general unselected
  - Wireframe: Cyan/white
  - Warning/problem: Red (#ff0000)
  - Success/good: Green (#4CAF50)
  - Annotations: White text with orange arrows
  - Motion trails: Vary by context (green for vertical, blue for horizontal, red for lateral)

- **Blender Version:** Specify Blender 4.0+ for UI consistency in screenshots
- **View Angles:** 
  - Profile (side view) for walk cycle poses
  - 3/4 view for general character poses
  - Top-down for oppositional movement patterns
  - Front view for symmetry demonstrations
- **Selection Highlighting:** Use bright cyan (#00ffff) for selected bones, dark blue for unselected
- **Typography:** 
  - Sans-serif fonts for all labels (Arial, Helvetica, or similar)
  - Minimum 14pt for body text in diagrams
  - Minimum 18pt for headers
  - White text on dark backgrounds, dark text on light backgrounds
- **Annotation Style:** 
  - Arrows: Orange (#ff8c00) with white text labels
  - Arrow style: Filled solid arrows, not hollow
  - Leader lines: Straight lines connecting label to target, not curved
  - Callout boxes: Semi-transparent dark background with white text

### Accessibility Considerations
- **High Contrast:** Ensure all text has minimum 4.5:1 contrast ratio with background
- **Color Blindness:** 
  - Don't rely solely on red/green for success/failure (add symbols: ✓/✗)
  - Use patterns or shapes in addition to colors where possible
  - Test diagrams with deuteranopia filter
- **Text Size:** All text must be readable at 1080p resolution without zooming
- **Alt Text Requirements:** 
  - Each image needs descriptive alt text explaining the concept shown
  - Alt text should describe visual information, not just say "diagram of..."
  - Include key information visible in image (pose names, frame numbers, etc.)
- **Screen Reader Friendly:** Diagrams should supplement text content, not replace it
- **Motion Considerations:** For any animated examples, provide static alternative

### Technical Specifications
- **Screenshot Resolution:** 
  - Minimum 1920x1080 for full interface screenshots
  - Can be lower for cropped/focused shots if clarity maintained
  - Save at 2x resolution for Retina displays (3840x2160), scale down in HTML
- **Image Format:**
  - PNG for screenshots, composite images, detailed illustrations (with transparency)
  - SVG for diagrams, charts, infographics, line art (scalable)
  - JPG only if file size becomes issue (avoid for technical diagrams)
- **File Size Target:**
  - PNG screenshots: Maximum 500KB each (use compression tools)
  - SVG diagrams: Maximum 100KB each
  - Total image payload for lesson: Target under 10MB for all images
- **Compression:** 
  - Use TinyPNG or similar for PNG optimization
  - Manually optimize SVG files (remove unnecessary metadata)
  - Test images at 1x and 2x scale to ensure quality
- **Responsive Sizing:** 
  - Images should scale gracefully from mobile (375px) to desktop (1920px)
  - Use max-width: 100% in CSS
  - Consider mobile layout for wide comparison images (may need to stack vertically)

### Special Considerations for This Lesson

**Walk Cycle Timing Precision:**
- Frame numbers in walk cycle images must be exact and consistent across all related images
- Contact pose always at frames 1 and 13
- Passing pose always at frames 7 and 19
- Any variation must be explicitly noted and explained

**Character Rig Consistency:**
- If using same character model across multiple images, maintain consistency
- Same proportions, same bone structure, same visual style
- Consider creating a "reference rig" file for all character-based images
- If using multiple character types, make it clear why (personality variations, etc.)

**Annotation Clarity:**
- Character animation has many moving parts - annotations must be unambiguous
- Use numbered callouts when multiple items need explanation in single image
- Color-code related elements consistently (left limbs always cyan, right always orange)
- Don't overcrowd - if image needs 10+ callouts, consider splitting into two images

**Motion Visualization:**
- Walk cycle and gesture animations benefit from motion trails and ghost poses
- Use fading opacity to show progression through time
- Motion blur or directional arrows can indicate speed and direction
- Ghost poses should be distinguishable but not distracting

**Technical Accuracy:**
- Character animation is mechanically complex - images must be technically correct
- Consult professional animators or animation principles references
- Bone positions, joint bends, and weight distribution must follow real anatomy
- Frame timing must follow animation principles (not just arbitrary)

### Production Notes

**Blender Scene Setup for Screenshots:**
- Create standardized Blender scene with:
  - Simple character rig (humanoid with ~20 bones)
  - Lighting: 3-point setup (key, fill, rim) for clear forms
  - Camera: Preset positions (front, side, 3/4) saved as camera bookmarks
  - Grid floor with subtle gradient for depth
  - Consistent materials (bones in viewport display mode)
  
**Lighting Setup Standards:**
- Viewport lighting: Studio or MatCap for clear bone visibility
- Avoid harsh shadows that obscure bone structure
- Rim light to separate character from background
- Consistent lighting across all images for cohesive visual style

**Camera Angles for Consistency:**
- Side view: 90° perpendicular for walk cycle profiles
- 3/4 view: 45° angle for general poses (most readable)
- Front view: Exact front for symmetry demonstrations
- Top view: Bird's eye for oppositional patterns
- Save camera positions as presets to maintain exact angles

**Batch Processing Workflow:**
- Render all walk cycle key poses in single session for consistency
- Use compositor for consistent post-processing (contrast, color correction)
- Create master template .blend file with scene, lighting, camera setups
- Version control for scene files (walk_cycle_scene_v01.blend, etc.)

**Version Control:**
- Save source .blend files separately from final renders
- Maintain editable SVG sources (not just exported PNGs)
- Keep layered files if using external illustration software
- Document any custom materials, node setups, or rig configurations
- Git or file versioning for tracking changes and maintaining history

**Template Reuse Opportunities:**
- Key pose template: Once Contact pose image created, template for Passing pose
- Annotation style: Create reusable callout graphics
- Character model: Same rig used across all character-based images
- Color schemes: Save Blender theme and material presets
- SVG symbols: Create library of reusable arrow shapes, icons, diagram elements

**Quality Control Checklist:**
- [ ] All frame numbers accurate and consistent
- [ ] Text readable at target resolution
- [ ] Colors match style guide
- [ ] Annotations clear and unambiguous
- [ ] Technical accuracy verified (bone positions, timing, principles)
- [ ] File size optimized
- [ ] Alt text written
- [ ] Cross-browser/device testing (especially SVGs)
- [ ] Accessibility review (contrast, color blindness)

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support (character animation intro, armatures, pose mode, posing principles, walk cycle theory and practice)
- [x] Each image has clear educational purpose defined (supporting project completion, illustrating principles, or providing reference)
- [x] AI prompts are detailed and specific with color codes (#2b2b2b, #ff8c00, #00ffff), style guidance (technical diagram, educational composite), layout requirements (side-by-side, sequential), and professional context
- [x] SVG recommendations are justified with clear rationale (9 images identified as SVG candidates based on geometric composition, scalability needs, and diagram nature)
- [x] Placement suggestions reference actual HTML section IDs (character-animation-intro, armatures-bones, pose-mode, posing-principles, first-animation, walk-cycle-theory, walk-cycle-project, variations)
- [x] File naming follows consistent convention with descriptive names (lesson_27_##_descriptive_name.ext with two-digit numbering)
- [x] Priority ranking is logical and justified with clear rationale:
  - High Priority: 8 images essential for completing projects and understanding foundational concepts
  - Medium Priority: 12 images that significantly enhance learning and prevent common issues
  - Lower Priority: 10 images providing reference and polish but not essential for core completion
- [x] Style/accessibility notes are comprehensive and practical (color palette with hex codes, contrast requirements, screen reader considerations, file size targets, responsive sizing)
- [x] Output is well-organized with clear sections and easy navigation (8 major sections with table of contents structure)
- [x] Technical specifications cover all production needs (resolution standards, compression targets, format guidelines, viewport setup)
- [x] Special considerations address lesson-specific requirements (walk cycle timing precision, character rig consistency, motion visualization, technical accuracy verification)

---

## Additional Recommendations

### Image Creation Workflow

**Phase 1: High Priority Production (Week 1)**
- Focus on the 8 essential images that directly support project completion
- Walk cycle key poses, tutorials, and timing chart are absolute requirements
- IK/FK comparison and COG balance critical for preventing major errors
- Prioritize technical accuracy over artistic polish at this stage

**Phase 2: Medium Priority Enhancement (Week 2)**
- Add the 12 images that significantly reduce confusion and improve results
- Pose mode interface, selection methods, and troubleshooting guide
- Line of action, silhouette test, and personality variations
- These elevate lesson from "functional" to "excellent"

**Phase 3: Lower Priority Polish (Week 3)**
- Complete remaining 10 reference and polish images
- Workflow diagram, detailed breakdowns, advanced techniques
- These complete the comprehensive resource but lesson works without them

**Phase 4: Testing and Iteration (Week 4)**
- User testing with actual students
- Gather feedback on which images were most/least helpful
- Identify any gaps or confusing visuals that need revision
- Optimize file sizes and performance

### Alternative Approaches

**Video Clips for Complex Motion:**
- Consider short (5-10 second) video clips for walk cycle demonstration
- Looping video showing proper timing more intuitive than static poses
- Side-by-side comparison videos (correct vs incorrect walk cycles)
- Screen recordings of Graph Editor curve adjustments in action
- MP4 format, optimized for web (H.264 codec, ~2MB max per clip)

**Interactive Elements:**
- Interactive pose viewer (rotate 3D character to see pose from all angles)
- Timeline scrubber showing walk cycle frame-by-frame
- Comparison slider (before/after pose corrections)
- Clickable hotspots on diagrams revealing detailed information
- Could be future enhancement using Three.js or similar library

**Animated GIFs for Quick Reference:**
- Simple looping GIF of complete walk cycle
- IK vs FK bone movement demonstration
- Weight shift visualization (hip movement loop)
- Kept small (under 1MB), maximum 10-15 frames
- Alternative to video for inline motion demonstration

### Future Enhancements

**Downloadable Assets:**
- Starter .blend file with pre-rigged simple character
- Walk cycle template with key poses already blocked
- Pose library with common character poses
- Reference image pack (all lesson images in high resolution)
- Cheat sheet PDF with quick reference for walk cycle timing

**Quiz Integration:**
- Interactive quiz using lesson images
- "Identify the walk cycle pose" (show image, multiple choice)
- "Spot the mistake" (show incorrect pose, user identifies issue)
- "Match the principle to the pose" (connect animation principles to visual examples)

**Gallery and Portfolio Examples:**
- Student work showcase using lesson techniques
- Professional animation examples breaking down walk cycles
- Before/after comparison gallery (beginner vs refined)
- Personality walk variations from professional animators
- Inspiration gallery to motivate continued practice

**Extended Reference Library:**
- Additional walk cycle variations (elderly, child, different body types)
- Run cycle breakdowns (natural progression from walk)
- Jump cycle keyframes (another fundamental locomotion type)
- Personality gesture library (waves, reaches, sits, stands)
- Emotional reaction poses (surprise, joy, fear, anger)

---

## Revision History

- **Version 1.0** - November 11, 2025 - Initial analysis of Lesson 27: Basic Character Animation
  - Identified 30 images needed to support character animation fundamentals
  - Created comprehensive AI generation prompts for each image
  - Recommended 9 images as SVG candidates for optimal scalability
  - Established three-tier priority system (8 high, 12 medium, 10 lower)
  - Mapped image placement to specific HTML sections
  - Defined technical specifications for character animation lesson images
  - Special considerations for walk cycle timing precision and character rig consistency
  - Adapted template for complex character animation subject matter
  - Focus on supporting two major hands-on projects: wave animation and walk cycle
