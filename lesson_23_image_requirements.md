# Image Requirements for Lesson 23: Camera Animation

## Task Summary
**Lesson:** lesson_23_camera_animation.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 23

### **1. Camera Movement Overview Diagram**
- **Purpose:** Visual reference showing the different types of camera movements
- **Type:** Diagram/Infographic (SVG)
- **Shows:** Six classic camera movements illustrated with arrows and camera positions (dolly, track, crane, pan, tilt, orbit)

### **2. Position Changes vs Rotation Changes Comparison**
- **Purpose:** Help students understand the fundamental difference between moving and rotating the camera
- **Type:** Composite diagram (SVG)
- **Shows:** Side-by-side comparison of position-based moves (dolly, track, crane) vs rotation-based moves (pan, tilt, roll)

### **3. Keyframe Workflow Visual Guide**
- **Purpose:** Show the step-by-step keyframing process visually
- **Type:** Composite screenshot with annotations
- **Shows:** Six panels showing: camera at start position, inserting keyframe, moving timeline, camera at end position, inserting second keyframe, animation playing

### **4. Timeline Interface with Keyframes**
- **Purpose:** Familiarize students with timeline appearance during camera animation
- **Type:** Screenshot
- **Shows:** Blender timeline with diamond keyframe markers at frames 1 and 120, playhead position visible

### **5. Lock Camera to View Setup**
- **Purpose:** Show where to enable this crucial feature
- **Type:** Annotated screenshot
- **Shows:** Side panel (N key) with View tab open, "Lock Camera to View" checkbox highlighted

### **6. Dolly Shot Diagram**
- **Purpose:** Illustrate forward/backward camera movement concept
- **Type:** Diagram (SVG)
- **Shows:** Top-down view of camera moving toward subject, with arrows showing direction and perspective lines showing field of view

### **7. Tracking/Trucking Shot Diagram**
- **Purpose:** Illustrate parallel lateral movement
- **Type:** Diagram (SVG)
- **Shows:** Top-down view of camera moving left-to-right parallel to subject, showing parallax effect with foreground/background elements

### **8. Crane Movement Diagram**
- **Purpose:** Illustrate vertical camera movement
- **Type:** Diagram (SVG)
- **Shows:** Side view of camera moving up/down vertically, showing height change and perspective shift

### **9. Pan and Tilt Rotation Diagram**
- **Purpose:** Show difference between horizontal and vertical rotation
- **Type:** Diagram (SVG)
- **Shows:** Two cameras - one showing pan (horizontal arc), one showing tilt (vertical arc), both with rotation axis indicated

### **10. Orbit Movement Diagram**
- **Purpose:** Illustrate circular movement around subject
- **Type:** Diagram (SVG)
- **Shows:** Top-down view of camera path circling around central subject, with arrows showing direction and equidistant positions marked

### **11. Zoom vs Dolly Comparison**
- **Purpose:** Demonstrate critical difference between these techniques
- **Type:** Composite comparison (2 panels)
- **Shows:** Left panel: zoom effect (no parallax), Right panel: dolly effect (parallax visible), both with same subject framing

### **12. Interpolation Types Comparison**
- **Purpose:** Show how different interpolation affects motion feel
- **Type:** Diagram with motion curves
- **Shows:** Three graph curves: Linear (straight line), Bezier (smooth S-curve), Sine (ease in/out), with labels indicating "robotic," "smooth," "natural"

### **13. Graph Editor Interface for Camera Animation**
- **Purpose:** Introduce students to the Graph Editor for easing
- **Type:** Screenshot with annotations
- **Shows:** Graph Editor with camera location curves, keyframes visible, handles showing Bezier interpolation

### **14. Easing Types Visual Reference**
- **Purpose:** Show different easing patterns
- **Type:** Infographic (SVG)
- **Shows:** Four boxes showing ease in, ease out, ease in/out, and custom curves with descriptive text and visual curves

### **15. Track To Constraint Setup**
- **Purpose:** Show how to set up automatic camera aiming
- **Type:** Screenshot with step numbers
- **Shows:** Empty at target location, camera selected, Constraint Properties panel showing Track To constraint settings

### **16. Damped Track vs Track To Comparison**
- **Purpose:** Illustrate the difference between rigid and smooth tracking
- **Type:** Composite diagram
- **Shows:** Two scenarios side-by-side showing Track To (perfect lock) vs Damped Track (smooth follow)

### **17. Orbit Camera Rig Setup**
- **Purpose:** Show the Empty parent method for perfect orbits
- **Type:** Diagram with viewport screenshot composite
- **Shows:** Empty at center, camera parented to Empty at distance, rotation arrows on Empty showing animation

### **18. Follow Path Constraint Setup**
- **Purpose:** Demonstrate path-based camera animation
- **Type:** Screenshot composite (3 panels)
- **Shows:** Panel 1: Bezier curve path, Panel 2: Camera with Follow Path constraint, Panel 3: Camera following path with motion trail visible

### **19. Path Curve Editing Interface**
- **Purpose:** Show how to shape camera paths in Edit Mode
- **Type:** Annotated screenshot
- **Shows:** Bezier curve in Edit Mode with handles visible, points selected, with annotations showing handle types menu

### **20. Speed Variation Along Path Diagram**
- **Purpose:** Show how point density affects camera speed
- **Type:** Diagram (SVG)
- **Shows:** Curved path with dense points (slow movement) and sparse points (fast movement) labeled clearly

### **21. Handheld Camera Noise Modifier Setup**
- **Purpose:** Show how to add realistic camera shake
- **Type:** Screenshot with Graph Editor
- **Shows:** Graph Editor with Noise modifier added to camera channels, parameters visible (Scale, Strength, Phase)

### **22. Handheld Shake Intensity Comparison**
- **Purpose:** Show different levels of shake for different styles
- **Type:** Composite comparison (4 panels)
- **Shows:** Four rendered frames showing: subtle stabilized, documentary handheld, action heavy shake, extreme found footage

### **23. Focus Object Setup for Rack Focus**
- **Purpose:** Show how to animate focus along with camera movement
- **Type:** Annotated screenshot
- **Shows:** Camera with DoF settings, Empty as Focus Object highlighted, second Empty at different position showing focus shift animation

### **24. Movement Plus Focus Timing Diagram**
- **Purpose:** Illustrate coordinating camera movement with focus shift
- **Type:** Timeline diagram (SVG)
- **Shows:** Timeline with two tracks: camera movement (location keyframes) and focus animation (Empty position keyframes), showing simultaneous vs sequential timing

### **25. Aperture Considerations for Moving Cameras**
- **Purpose:** Show how DoF depth affects moving camera shots
- **Type:** Composite comparison (3 renders)
- **Shows:** Same camera move with three apertures: f/1.4 (very shallow), f/5.6 (moderate), f/11 (deep), demonstrating forgiveness and look

### **26. Project Shot 1: Establishing Dolly Example**
- **Purpose:** Show what the first project shot should look like
- **Type:** Rendered frame
- **Shows:** Opening frame of dolly-in shot with subject centered, good composition, shallow DoF

### **27. Project Shot 2: Orbit Showcase Example**
- **Purpose:** Demonstrate orbit shot execution
- **Type:** Rendered frame
- **Shows:** Mid-orbit frame showing subject from side angle, background bokeh visible, clean framing

### **28. Project Shot 3: Tracking Shot Example**
- **Purpose:** Show tracking shot with moving subject
- **Type:** Rendered frame
- **Shows:** Camera following animated object/character, subject in motion blur, maintaining good framing

### **29. Project Shot 4: Rack Focus Example**
- **Purpose:** Demonstrate focus shift during camera move
- **Type:** Composite (2 frames)
- **Shows:** Left: focus on foreground subject, Right: same shot with focus shifted to background, showing DoF transition

### **30. Project Shot 5: Complex Finale Example**
- **Purpose:** Show sophisticated multi-technique combination
- **Type:** Rendered frame
- **Shows:** Spiral crane shot or complex path following, multiple techniques visible, dramatic composition

### **31. Multi-Camera Sequence Timeline**
- **Purpose:** Show how to organize multiple shots in one project
- **Type:** Screenshot
- **Shows:** Timeline with markers for each shot, multiple cameras visible in outliner, active camera indicated

### **32. Motion Blur Settings for Camera Animation**
- **Purpose:** Show essential render settings for realistic motion
- **Type:** Annotated screenshot
- **Shows:** Render Properties panel with Motion Blur enabled, Shutter value highlighted (0.5), sample settings visible

### **33. Camera Animation Shortcuts Quick Reference**
- **Purpose:** Handy reference for essential hotkeys
- **Type:** Infographic (SVG)
- **Shows:** Key shortcuts listed with icons: I (keyframe), Spacebar (play), Numpad 0 (camera view), N (side panel), Lock Camera to View

### **34. Classic Camera Moves Quick Reference Table**
- **Purpose:** Visual summary of all classic movements
- **Type:** Infographic (SVG)
- **Shows:** Table with columns: Move Name, Type, Effect, Common Use, with simple icons for each move type

### **35. Constraint Properties Panel Overview**
- **Purpose:** Familiarize students with constraint interface
- **Type:** Annotated screenshot
- **Shows:** Constraint Properties panel with Track To constraint expanded, all parameters labeled (Target, To, Up, Influence)

### **36. Empty Types for Camera Control**
- **Purpose:** Show different Empty visualizations useful for camera work
- **Type:** Composite screenshot
- **Shows:** Plain Axes, Single Arrow, and Cube Empties positioned in scene, with labels explaining when to use each

### **37. Graph Editor Handle Adjustment**
- **Purpose:** Show how to fine-tune easing curves
- **Type:** Screenshot with annotation overlay
- **Shows:** Graph Editor with Bezier handle selected and being dragged, showing how handle length affects curve shape

### **38. Speed Ramping Example Graph**
- **Purpose:** Illustrate variable speed animation
- **Type:** Graph Editor screenshot
- **Shows:** F-curve with varying slopes: steep (fast), shallow (slow), steep again, demonstrating speed ramp pattern

### **39. Camera Movement Emotional Impact Guide**
- **Purpose:** Help students understand storytelling through movement
- **Type:** Infographic (SVG)
- **Shows:** Six movement types paired with emotional descriptors: Push-in (tension), Pull-back (isolation), Orbit (heroic), Pan (connection), etc.

### **40. Professional Camera Rig Setup Examples**
- **Purpose:** Show real-world constraint combinations
- **Type:** Diagram composite (4 setups)
- **Shows:** Four common professional setups: Product turntable, Over-shoulder follow, Dynamic two-subject, Dolly zoom rig

---

## AI Image Generation Prompts

### **Prompt 1: Camera Movement Overview Diagram**
```
Create a clean technical infographic showing six classic camera movements arranged in a 2x3 grid layout. Each movement should be illustrated with a simple camera icon (orange) and directional arrows showing the motion path. Include:

Top row:
- DOLLY: Camera moving forward/backward (front view with forward arrow)
- TRACK: Camera moving left/right (top view with horizontal arrow)
- CRANE: Camera moving up/down (side view with vertical arrow)

Bottom row:
- PAN: Camera rotating horizontally (top view with curved rotation arrow)
- TILT: Camera rotating vertically (side view with vertical rotation arc)
- ORBIT: Camera circling subject (top view with circular arrow path)

Style: Clean, educational diagram with dark grey background (#2b2b2b). Camera icons in bright orange (#ff8c00). Motion arrows in cyan (#00d4ff). Each section labeled in clear white text. Minimalist, professional technical illustration style. Subject (cube or sphere) shown in light grey (#d0d0d0) to indicate what camera is framing. Grid layout with subtle dividing lines.
```

### **Prompt 2: Position Changes vs Rotation Changes Comparison**
```
Create a side-by-side educational comparison diagram explaining the fundamental difference between camera position changes and rotation changes.

Left side - POSITION CHANGES:
Show three simple top-down view diagrams stacked vertically:
1. Dolly (forward/back): Camera icon moving linearly toward/away from subject
2. Track (left/right): Camera icon moving laterally parallel to subject  
3. Crane (up/down): Side view showing camera moving vertically

Right side - ROTATION CHANGES:
Show three simple diagrams:
1. Pan: Top view, camera rotates horizontally (curved arrow around camera)
2. Tilt: Side view, camera rotates vertically (curved arrow)
3. Roll: Front view, camera rotates on lens axis (circular arrow)

Background: Dark grey (#2b2b2b). Camera icons: Bright orange (#ff8c00). Movement arrows: Cyan (#00d4ff). Subject (simple cube): Light grey (#d0d0d0). White text labels. Header text: "Position Changes (Camera Moves)" vs "Rotation Changes (Camera Rotates)". Clean, educational technical diagram style. Professional training material appearance.
```

### **Prompt 3: Keyframe Workflow Visual Guide**
```
Create a 6-panel comic-style workflow guide showing the keyframe animation process for camera animation. Layout: 2 rows of 3 panels, reading left to right.

Panel 1: Camera positioned at starting point (distant from subject), timeline showing frame 1. Label: "1. Set Starting Position"

Panel 2: Hand cursor pressing "I" key, keyframe diamond appearing in timeline. Label: "2. Insert Keyframe (I)"

Panel 3: Timeline playhead moved to frame 120. Label: "3. Move to End Frame"

Panel 4: Camera now closer to subject (dolly movement). Label: "4. Move Camera to End Position"

Panel 5: "I" key being pressed again, second keyframe diamond at frame 120. Label: "5. Insert End Keyframe"

Panel 6: Timeline with both keyframes visible, smooth curve connecting them, play button highlighted. Label: "6. Play Animation"

Style: Clean instructional diagram, dark grey background (#2b2b2b), bright orange camera icons (#ff8c00), cyan UI elements (#00d4ff), white text labels. Blender-themed UI colors. Professional training material aesthetic. Each panel has clear border separation.
```

### **Prompt 4: Timeline Interface with Keyframes**
```
Create a detailed screenshot representation of Blender's timeline interface showing camera animation keyframes. 

Show timeline spanning frames 1-250 horizontally. Two orange diamond keyframe markers visible: one at frame 1, one at frame 120. Blue playhead indicator at frame 60. Frame numbers clearly visible at top (1, 30, 60, 90, 120, etc.). Timeline in dark grey (#2b2b2b). Keyframe diamonds in bright orange (#ff8c00). Playhead in cyan (#00d4ff). 

Bottom of timeline shows playback controls: play/pause button, frame forward/back buttons, all in Blender's standard UI style. Timeline track labeled "Camera" on left side. Subtle grid lines every 30 frames for reference.

Style: Photorealistic Blender UI representation. Professional interface mockup. Dark theme matching Blender 4.0 interface. High contrast for visibility. Clean, uncluttered presentation focused on keyframe markers.
```

### **Prompt 5: Lock Camera to View Setup**
```
Create an annotated screenshot showing Blender's side panel with the "Lock Camera to View" feature highlighted.

Show Blender viewport in camera view (camera frame outline visible). Right side panel (N panel) open showing "View" tab selected. Within View tab, "View Lock" section expanded. "Lock Camera to View" checkbox prominently displayed and checked (enabled). Large orange arrow pointing to this checkbox with label "Enable This!"

Background: Blender viewport showing simple scene from camera perspective. UI panels in Blender's dark grey theme (#2b2b2b). Checkbox and surrounding UI elements use Blender 4.0 standard colors. Annotation arrow in bright orange (#ff8c00). Label text in white with subtle shadow for readability.

Additional small callout box explaining: "With this enabled, moving the viewport = animating the camera"

Style: Educational screenshot with clear annotations. Professional Blender training material aesthetic. High contrast for important elements. Clean, focused presentation.
```

### **Prompt 6: Dolly Shot Diagram**
```
Create a technical top-down diagram illustrating dolly camera movement (forward/backward).

Show: Top-down view of a scene. Central subject (grey cube). Camera starting position at bottom (distant) shown in faded orange. Camera ending position (closer to subject) in bright orange (#ff8c00). Large forward-pointing arrow connecting start to end positions showing dolly direction. 

Field of view cone/frustum shown for both positions: narrower at start (distant), wider at end (close). Demonstrates how dolly changes perspective. Background elements (small circles representing background objects) showing parallax effect - movement apparent between start/end.

Background: Dark grey (#2b2b2b). Camera icons: Orange gradient from faded to bright showing motion. Arrow: Cyan (#00d4ff). Subject: Light grey (#d0d0d0). FOV lines: Thin white/grey dashed lines. Labels: "Start Position," "End Position," "DOLLY IN (Forward Movement)," "Perspective Changes," "Parallax Effect."

Style: Clean technical diagram. Engineering blueprint aesthetic. Professional cinematography training material. Precise, geometric shapes. Clear labeling.
```

### **Prompt 7: Tracking/Trucking Shot Diagram**
```
Create a top-down technical diagram showing lateral camera tracking movement.

Show: Camera moving left-to-right (horizontal) parallel to subject path. Subject (grey cube) centered. Camera start position on left (faded orange), end position on right (bright orange #ff8c00). Horizontal arrow showing tracking direction. 

Key element: Show strong parallax effect. Foreground element (larger circle) appearing to move fast across frame. Background elements (smaller circles) appearing to move slowly. Multiple positions of these elements shown with fading effect to illustrate relative motion at different depths.

Background: Dark grey (#2b2b2b). Camera icons: Orange (#ff8c00). Tracking arrow: Cyan (#00d4ff). Subject: Light grey (#d0d0d0). Motion trails on foreground/background elements showing relative speed. Labels: "Camera tracks parallel to subject," "Strong parallax depth effect," "Foreground moves fast," "Background moves slow."

Style: Technical cinematography diagram. Clear motion illustration. Professional training material. Geometric precision. Parallax effect clearly demonstrated.
```

### **Prompt 8: Crane Movement Diagram**
```
Create a side-view technical diagram illustrating vertical crane camera movement.

Show: Side profile view. Ground plane at bottom. Subject (grey cube or character silhouette) on ground. Camera at two positions: low position (faded orange) near ground level, high position (bright orange #ff8c00) elevated above. Vertical arrow showing upward crane movement. 

Demonstrate perspective change: at low position, camera views subject at eye level. At high position, camera has god's-eye view looking down. Dashed sight lines from each camera position to subject showing angle change.

Background: Dark gradient from dark grey (#2b2b2b) to lighter grey representing sky. Camera icons: Orange (#ff8c00). Vertical arrow: Cyan (#00d4ff). Subject: Light grey silhouette (#d0d0d0). Sight lines: White dashed lines. Ground plane: Thin white line. Labels: "Low Position (Eye Level)," "High Position (God's Eye)," "CRANE UP," "Perspective Shift."

Style: Side-view technical diagram. Architecture drawing aesthetic. Professional cinematography reference. Clean geometric shapes. Clear vertical movement indication.
```

### **Prompt 9: Pan and Tilt Rotation Diagram**
```
Create a split diagram showing the difference between pan (horizontal rotation) and tilt (vertical rotation).

Left side - PAN:
Top-down view. Camera at center. Curved horizontal arc showing rotation path (90° arc). Subject positions at arc endpoints. Rotation axis indicated with vertical line through camera. Label: "PAN - Horizontal Rotation"

Right side - TILT:
Side view. Camera at center. Curved vertical arc showing rotation path (90° arc). Subject positions at arc endpoints (one high, one low). Rotation axis indicated with horizontal line through camera. Label: "TILT - Vertical Rotation"

Both diagrams show camera icon (orange #ff8c00) with rotation axis line through center. Curved arrows showing rotation direction (cyan #00d4ff). Subject markers (light grey #d0d0d0 cubes) at start/end of rotation. Axis lines in white with labels.

Background: Dark grey (#2b2b2b). Dividing line between left/right sections. Clear labels for each type. Note at bottom: "Camera position stays fixed - only rotation changes"

Style: Technical rotation diagram. Engineering/physics illustration aesthetic. Rotational motion clearly indicated. Professional cinematography training material.
```

### **Prompt 10: Orbit Movement Diagram**
```
Create a top-down circular orbit diagram showing camera circling around subject.

Show: Central subject (grey cube or sphere) at exact center. Perfect circular path around subject (cyan #00d4ff dashed line). Camera positions marked at 4-5 points around circle: 0°, 90°, 180°, 270°, 360°. Camera icons at each position (orange #ff8c00), all aiming toward center. Curved arrow following circle showing direction of orbit. 

Demonstrate: Equal distance maintained throughout orbit. Camera always faces center (indicated by sight lines from each camera to subject). Circle radius labeled. Background elements outside circle showing depth/parallax as camera orbits.

Background: Dark grey (#2b2b2b). Orbit path: Cyan dashed circle. Camera icons: Bright orange. Subject: Light grey (#d0d0d0). Sight lines: Thin white dashed lines from cameras to center. Labels: "360° Orbit," "Maintains Distance," "Always Faces Subject," "Perfect Circle Path."

Style: Technical circular motion diagram. Precision geometry. Professional showcase orbit reference. Clean, geometric illustration. Cinematography training aesthetic.
```

### **Prompt 11: Zoom vs Dolly Comparison**
```
Create a split-screen comparison showing the critical difference between zoom and dolly.

Left panel - ZOOM (Focal Length Change):
Show: Camera position fixed. Subject framed identically in start/end. Background scale changes but NO parallax. Background elements get proportionally larger but maintain same relative positions. Field of view lines change (wide → narrow). Label: "ZOOM - Focal Length Changes" and "No Parallax • Flat Feeling • Position Fixed"

Right panel - DOLLY (Camera Movement):
Show: Camera moves closer. Subject framed identically to zoom panel. But background shows STRONG parallax - background elements separated differently, depth revealed. Foreground elements moved significantly. Field of view stays constant. Label: "DOLLY - Camera Moves" and "Strong Parallax • Depth Revealed • Natural Look"

Both panels show same subject (grey cube) at same frame size for direct comparison. Background has multiple depth layers (foreground, midground, background elements as circles/shapes at different distances).

Background: Dark grey (#2b2b2b). Camera icons: Orange (#ff8c00). Parallax effect illustrated with motion trails on background elements in dolly panel. Text labels in white. Warning banner at bottom: "Always prefer DOLLY over ZOOM for professional look"

Style: Side-by-side educational comparison. Clear visual distinction between effects. Professional cinematography training. High-contrast illustration.
```

### **Prompt 12: Interpolation Types Comparison**
```
Create a technical graph comparison showing three interpolation types for camera animation.

Three horizontal sections stacked vertically:

Top section - LINEAR:
Straight diagonal line from start keyframe (frame 0) to end keyframe (frame 120). Perfectly constant slope. Dots evenly spaced along line representing equal movement each frame. Label: "LINEAR - Constant Speed" with icon showing robotic/mechanical feel. Subtitle: "Robotic, unnatural (avoid)"

Middle section - BEZIER:
Smooth S-curve from start to end. Shallow start (slow), steep middle (fast), shallow end (slow). Bezier handle controls visible at keyframes. Dots along curve showing varying speed (sparse start, dense middle, sparse end). Label: "BEZIER - Smooth Curves" with icon showing smooth motion. Subtitle: "Natural, customizable (recommended)"

Bottom section - SINE:
Smooth sinusoidal ease in/out curve. Perfect mathematical ease. Similar to Bezier but more standardized. Label: "SINE - Ease In/Out" with icon showing wave motion. Subtitle: "Smooth, organic (good default)"

Background: Dark grey (#2b2b2b). Graph grid in subtle grey. Curves in bright orange (#ff8c00). Keyframe markers in cyan (#00d4ff). Dots showing frame positions. White text labels. Professional animation curve reference.

Style: Technical graph illustration. Animation timing reference. Professional motion graphics training aesthetic. Clear comparison of interpolation methods.
```

### **Prompt 13: Graph Editor Interface for Camera Animation**
```
Create a detailed mockup of Blender's Graph Editor showing camera location animation curves.

Show: Graph Editor interface with typical Blender dark theme. Left sidebar showing channel list: Camera → Location X, Location Y, Location Z (all visible and expanded). Rotation channels collapsed below.

Main graph area: Three F-curves visible:
- Red curve: Location X (flat, minor movement)
- Green curve: Location Y (dramatic curve - dolly movement, strong Bezier curve)
- Blue curve: Location Z (slight elevation change)

Two keyframe points visible on each curve (frame 1 and frame 120). Green curve has visible Bezier handles extending from keyframes showing smooth ease in/out. Timeline ruler at top showing frame numbers.

Background: Blender Graph Editor theme (#2b2b2b for background, #393939 for panels). Curves in Blender's standard RGB colors (red, green, blue). Keyframes as orange diamonds (#ff8c00). Grid lines subtle grey. Handles visible with control points.

Annotations: Orange arrows pointing to "Bezier Handles" and "Smooth Curve = Natural Motion." Small label: "This is a dolly shot - Y location changes"

Style: Accurate Blender UI mockup. Professional Graph Editor reference. Educational screenshot aesthetic. Clean, readable interface representation.
```

### **Prompt 14: Easing Types Visual Reference**
```
Create a clean 2x2 grid infographic showing four easing patterns.

Top-left - EASE IN (Slow Start):
Small graph showing curve starting shallow, ending steep. Motion icon showing slow → fast. Text: "Starts slow, accelerates" • "Use for: takeoff, building momentum"

Top-right - EASE OUT (Slow End):
Graph showing curve starting steep, ending shallow. Motion icon showing fast → slow. Text: "Starts fast, decelerates" • "Use for: landing, settling into place"

Bottom-left - EASE IN/OUT (Smooth Both):
Graph showing S-curve: shallow start, steep middle, shallow end. Motion icon showing slow → fast → slow. Text: "Smooth start and end" • "Use for: most camera moves (default)"

Bottom-right - CUSTOM:
Graph showing complex curve with multiple inflection points. Motion icon showing varied speed. Text: "Advanced control" • "Use for: specific timing needs"

Each box has graph in center (orange #ff8c00 curve on grey #2b2b2b background), motion icon above, descriptive text below.

Background: Dark grey (#2b2b2b) overall. Individual boxes separated with subtle borders. Text in white. Graphs consistent size across all boxes. Motion icons as simple arrow diagrams (cyan #00d4ff).

Style: Clean infographic. Educational reference card. Professional animation timing guide. Scannable layout. Typography: clear, hierarchy established.
```

### **Prompt 15: Track To Constraint Setup**
```
Create an annotated screenshot showing Track To constraint setup process.

Show: Blender 3D viewport (perspective view) with simple scene. Subject (grey cube or Suzanne head) at scene center. Empty (Plain Axes type, orange color) positioned exactly at subject location. Camera visible in viewport, positioned away from subject.

Right side: Properties panel showing Constraint Properties (chain link icon selected). Track To constraint added and expanded. Settings visible:
- Target: Empty (name highlighted)  
- To: -Z (dropdown selected)
- Up: Y (dropdown selected)
- Influence: 1.000

Annotations: Large orange numbered circles/arrows showing workflow:
1. Arrow pointing to Empty: "1. Create Empty at subject"
2. Arrow pointing to camera: "2. Select camera"
3. Arrow pointing to Add Constraint button: "3. Add Track To"
4. Arrow pointing to Target field: "4. Set target to Empty"

Result callout: "Camera now always aims at Empty!"

Background: Blender viewport dark theme. UI in Blender 4.0 style (#2b2b2b). Annotations in bright orange (#ff8c00). White text labels with subtle shadows. Professional training screenshot aesthetic.

Style: Instructional screenshot with clear workflow steps. Professional Blender tutorial aesthetic. High contrast annotations. Educational clarity.
```

### **Prompt 16: Damped Track vs Track To Comparison**
```
Create a side-by-side comparison diagram illustrating Damped Track vs Track To constraint behavior.

Left side - TRACK TO:
Show subject (grey cube) moving in erratic path (jagged line). Camera icon with perfectly rigid line connecting to subject (straight, taut). Label: "Track To - Rigid Locking." Text: "Perfectly locked aim" • "Mechanical feel" • "No lag"

Right side - DAMPED TRACK:
Same subject path. Camera icon with soft, smooth curve connecting to subject (flowing, organic). Small lag illustrated between subject position and camera aim. Label: "Damped Track - Smooth Following." Text: "Natural tracking" • "Slight lag/smoothness" • "Organic feel"

Both diagrams show motion over 5 frames with faded ghost positions illustrating tracking behavior.

Background: Dark grey (#2b2b2b). Camera icons: Orange (#ff8c00). Aim lines: Cyan (#00d4ff) - straight/rigid for Track To, curved/smooth for Damped Track. Subject: Light grey (#d0d0d0). Motion trails showing tracking difference. Dividing line between left/right panels.

Bottom banner comparing: "Track To: Product shots, precise" vs "Damped Track: Characters, organic"

Style: Side-by-side technical comparison. Motion tracking illustration. Professional cinematography constraint reference. Clear behavioral difference shown.
```

### **Prompt 17: Orbit Camera Rig Setup**
```
Create a technical diagram showing the Empty parent method for creating perfect camera orbits.

Show: Isometric/3D perspective view. Central subject (grey cube or product) at exact origin point. Empty (Plain Axes visualization, orange) positioned exactly at subject center with coordinate axes visible.

Camera positioned at distance from Empty (connected by parent relationship line - dashed orange line). Distance labeled "Orbit Radius." Camera aimed at Empty/subject (sight line shown).

Rotation arrow (large, bright cyan #00d4ff) circling around Empty showing Z-axis rotation. Multiple ghost positions of camera around circle (faded orange) showing where camera will be at different rotation values (0°, 90°, 180°, 270°).

Hierarchical relationship shown in corner: Empty (parent) with Camera (child) indented below, connected by parent-child line.

Annotations with numbered workflow:
1. "Empty at subject center"
2. "Camera at desired distance"  
3. "Parent Camera to Empty"
4. "Rotate Empty = Camera orbits!"

Background: Dark grey (#2b2b2b). Empty axes in RGB (X-red, Y-green, Z-blue). Camera icons: Orange (#ff8c00). Orbit path: Cyan dashed circle. Labels in white.

Style: Technical 3D diagram. Professional camera rig setup reference. Engineering illustration aesthetic. Clear spatial relationships. Cinematography training material.
```

### **Prompt 18: Follow Path Constraint Setup**
```
Create a three-panel composite showing Follow Path constraint workflow.

Panel 1 - PATH CREATED:
Show Bezier curve path (cyan #00d4ff) in 3D space, curving smoothly through scene. Path has visible control points. Label: "1. Create Bezier Curve Path"

Panel 2 - CONSTRAINT ADDED:
Same view, now with camera icon (orange #ff8c00) snapped to path start. Properties panel visible showing Follow Path constraint settings. Path selected as target. Label: "2. Add Follow Path Constraint"

Panel 3 - ANIMATION RESULT:
Camera trail/motion path visible (orange dotted line) following curve exactly. Multiple ghost camera positions along path. Timeline showing Path Animation enabled (Frames set). Label: "3. Camera Follows Path Automatically"

All panels show same 3D scene angle for consistency. Background: Dark grey (#2b2b2b). Path curves: Bright cyan. Camera: Orange. Motion trails: Dotted orange.

Bottom note: "Perfect for architectural walkthroughs, flyovers, complex camera choreography"

Style: Sequential workflow illustration. Professional path animation tutorial. Clean panel layout. Blender feature demonstration. Educational cinematography training material.
```

### **Prompt 19: Path Curve Editing Interface**
```
Create a detailed mockup showing Bezier curve editing for camera paths.

Show: 3D viewport in Edit Mode. Bezier curve visible with multiple control points selected (highlighted in orange #ff8c00). Bezier handles extending from selected point, showing how to adjust curve shape. Handle being dragged (motion arrow indicated).

Top-left UI: Edit Mode active (visible in mode selector). Top menu bar showing curve editing tools.

Popup menu visible: "Set Handle Type" menu showing options:
- Automatic
- Vector  
- Aligned
- Free
(One option highlighted as if being selected)

Curve properties visible on right: "Curve" object data properties panel showing Resolution, Fill settings.

Annotations pointing to:
- "Select control point"
- "Drag handles to shape curve"
- "Set Handle Type for smooth/sharp"
- "This curve = camera path"

Background: Blender Edit Mode viewport (dark grey #2b2b2b). Selected elements in orange. Handles in white. Curve in cyan (#00d4ff). Professional Blender Edit Mode representation.

Style: Accurate Blender Edit Mode mockup. Technical curve editing reference. Professional path editing tutorial screenshot. Educational clarity with annotations.
```

### **Prompt 20: Speed Variation Along Path Diagram**
```
Create a technical diagram showing how control point density affects camera speed along path.

Show: Single curved Bezier path (cyan #00d4ff) from left to right in S-curve shape.

Left section of path: Dense clustering of control points (many points close together). Camera positions shown with very small spacing (slow movement). Label: "DENSE POINTS = SLOW MOTION" with speedometer icon showing slow.

Middle section: Moderate point spacing. Camera positions medium spacing. Label: "MEDIUM SPACING = NORMAL SPEED"

Right section: Sparse control points (few points, far apart). Camera positions widely spaced (fast movement). Label: "SPARSE POINTS = FAST MOTION" with speedometer icon showing fast.

Path dots representing frame-by-frame camera positions: dense where slow, sparse where fast. Color gradient showing speed (cool blue for slow, warm orange for fast).

Background: Dark grey (#2b2b2b). Path in cyan. Control points as visible circles. Camera position indicators as small orange triangles. Speed indicators with motion lines. Clear labels with speed comparison.

Bottom note: "Control camera speed by adjusting point density along path"

Style: Technical speed visualization diagram. Motion timing illustration. Professional path animation reference. Clear speed variation demonstration. Educational cinematography training.
```

### **Prompt 21: Handheld Camera Noise Modifier Setup**
```
Create a Graph Editor screenshot mockup showing Noise modifier applied for handheld shake.

Show: Graph Editor interface. Left channel list showing Camera location and rotation channels (all visible). Main graph area showing F-curves with subtle noise/jitter applied - curves aren't smooth but have small random fluctuations.

Right side: Modifiers panel (wrench icon) expanded showing Noise modifier added. Settings visible:
- Strength: 0.15 (location)
- Scale: 4.0
- Phase: 127
- Offset: 0.0

Two F-curves visible:
- Top curve (Location Y): Smooth dolly motion with subtle noise overlay
- Bottom curve (Rotation X): Stronger noise pattern (camera shake in rotation)

Annotations:
- Arrow pointing to noise pattern: "Subtle shake added"
- Arrow pointing to modifier: "Noise Modifier adds randomness"
- Note: "Rotation shake > Position shake for realism"

Background: Blender Graph Editor theme (#2b2b2b). Curves in standard colors. Noise visible as small irregularities in otherwise smooth curves. Interface in Blender 4.0 style.

Style: Technical Graph Editor mockup. Handheld camera shake tutorial screenshot. Professional Noise modifier demonstration. Clear before/after concept implied.
```

### **Prompt 22: Handheld Shake Intensity Comparison**
```
Create a 2x2 grid comparison showing four levels of handheld camera shake.

Top-left - SUBTLE STABILIZED:
Rendered frame of subject (clean, sharp). Barely perceptible camera shake. Label: "Subtle Stabilized" • "Professional handheld" • "Strength: 0.05-0.1"

Top-right - DOCUMENTARY HANDHELD:
Same scene, slight motion blur visible, minor tilt/shift. Label: "Documentary" • "Visible shake" • "Strength: 0.1-0.2"

Bottom-left - ACTION HEAVY SHAKE:
More pronounced motion blur, noticeable dutch angle, frame less stable. Label: "Action/Chaos" • "Intense movement" • "Strength: 0.3-0.5"

Bottom-right - EXTREME FOUND FOOTAGE:
Heavy motion blur, significant tilt, almost disorienting. Label: "Found Footage Horror" • "Extreme shake" • "Strength: 0.5-1.0"

All panels show same subject (grey character or cube) for direct comparison. Background elements showing varying amounts of blur based on shake intensity.

Background: Dark rendered scenes. Each panel clearly separated. Consistent lighting across panels for fair comparison. Labels in white text overlays. Professional shake comparison reference.

Style: Rendered frame comparison grid. Handheld intensity reference. Professional cinematography style guide. Clear progression of shake levels. Educational training material.
```

### **Prompt 23: Focus Object Setup for Rack Focus**
```
Create an annotated 3D viewport screenshot showing rack focus animation setup.

Show: 3D viewport with two subjects: Foreground subject (grey cube/character) and Background subject (orange cube/object) spaced 8 units apart.

Two Empties visible:
- Empty_Focus_A (cyan) at foreground subject
- Empty_Focus_B (orange) at background subject

Camera visible with DoF frustum/guide visible. Focus distance line drawn to Empty_Focus_A at frame 1. Second ghosted focus line to Empty_Focus_B indicated for frame 120.

Right side: Camera properties panel showing Depth of Field settings:
- F-Stop: 2.8
- Focus Object: Empty_Focus_A (dropdown)

Timeline at bottom showing keyframes:
- Frame 1: Empty_Focus_A position keyframe
- Frame 120: Empty_Focus_A moved to Background subject position, keyframe

Annotations:
1. "Focus Empty starts at foreground"
2. "Animate Empty to background"
3. "Camera follows Empty position for focus"
4. "Result: Smooth rack focus"

Background: Blender viewport dark theme. Empties color-coded (cyan/orange). Camera with orange DOF guides. Professional DoF setup demonstration.

Style: Annotated workflow screenshot. Rack focus tutorial reference. Professional focus animation setup guide. Clear spatial relationships. Educational cinematography material.
```

### **Prompt 24: Movement Plus Focus Timing Diagram**
```
Create a timeline diagram showing coordinated camera movement and focus shift timing.

Show: Horizontal timeline from frame 1 to 120. Two parallel tracks:

Top track - CAMERA MOVEMENT (Location):
Orange bar showing camera dolly animation. Keyframes at frame 1 (start) and frame 120 (end). Easing curve shown above bar (slow-fast-slow). Label: "Camera Movement (Dolly Forward)"

Bottom track - FOCUS ANIMATION (Empty Position):
Cyan bar showing focus shift animation. Keyframes at frame 1 (focus foreground) and frame 60 (focus background). Focus stays on background from 60-120. Label: "Focus Shift (Rack Focus)"

Visual alignment showing:
- Frames 1-60: Both movement and focus changing (simultaneous)
- Frames 60-120: Movement continues, focus held

Three timing pattern examples shown in corner boxes:
1. "Simultaneous" - both start/end together
2. "Sequential" - movement first, then focus
3. "Overlapping" - offset timing (shown in main diagram)

Background: Dark grey (#2b2b2b). Camera track: Orange (#ff8c00). Focus track: Cyan (#00d4ff). Keyframe diamonds at ends of bars. Timeline grid every 30 frames. White text labels.

Style: Technical timeline diagram. Animation coordination reference. Professional timing illustration. Clear synchronization demonstration. Cinematography training material.
```

### **Prompt 25: Aperture Considerations for Moving Cameras**
```
Create a three-panel comparison showing how aperture affects moving camera shots.

Panel 1 - f/1.4 (Very Shallow):
Rendered frame mid-dolly. Subject sharp, background extremely blurred (strong bokeh). Label: "f/1.4 - Very Shallow DoF" • "Dramatic look" • "Small focus margin" • "Difficult to keep subject sharp"

Panel 2 - f/5.6 (Moderate):
Same frame position. Subject sharp, background moderately blurred. Some depth visible. Label: "f/5.6 - Moderate DoF" • "Professional standard" • "Good balance" • "Forgiving focus"

Panel 3 - f/11 (Deep):
Same frame. Subject sharp, background relatively sharp. Most depth in focus. Label: "f/11 - Deep DoF" • "Everything sharp" • "Less cinematic" • "Very forgiving"

All panels show identical camera position and framing for direct comparison. Same subject (character or cube). Background with distinct elements at multiple depths to show DoF effect clearly.

Background: Dark rendered scenes. Consistent lighting. Each panel clearly labeled. Professional aperture comparison. Bokeh quality visible in f/1.4 panel.

Bottom note: "Moving cameras: Start with f/4-5.6 for balance of look and forgiveness"

Style: Rendered frame comparison. DoF aperture reference for animation. Professional cinematography guide. Educational depth of field training material. Clear visual progression.
```

### **Prompt 26-30: Project Shot Examples (Rendered Frames)**

**Prompt 26: Project Shot 1 - Establishing Dolly**
```
Create a professional rendered frame showing the opening dolly shot of a camera animation sequence.

Show: Wide establishing view of simple scene. Central hero subject (grey character or stylized object) well-lit with three-point lighting. Subject centered in frame using rule of thirds. Camera at medium distance (8-10 units).

Depth of field: f/5.6, subject sharp, background softly blurred. Background has scattered elements with bokeh visible. Foreground element partially visible (slight defocus) for depth. Good composition: subject eye-catching, clear visual hierarchy.

Lighting: Key light from upper left creating nice modeling. Fill light softening shadows. Rim light separating subject from background. Clean, professional lighting setup visible in render quality.

Background: Dark gradient background with subtle volumetrics. Ground plane with subtle texture. Background lights creating bokeh orbs (cyan/orange color scheme). Clean, polished render quality (Cycles, 256+ samples).

Label overlay (corner): "Shot 1: Establishing Dolly - Frame 1" with small camera icon.

Style: Professional 3D render. Cinematic lighting. Clean composition. High production value. Portfolio-quality render. Demonstrates proper establishing shot principles.
```

**Prompt 27: Project Shot 2 - Orbit Showcase**
```
Create a professional rendered frame showing mid-orbit camera position around hero subject.

Show: Hero subject (grey character or product) centered perfectly in frame. Camera at 90° position (side view) during orbit. Subject sharp (Track To constraint evident - always facing camera). Background completely blurred (f/2.8) with beautiful bokeh spheres visible throughout.

Subject well-lit from all angles (lighting setup rotates with camera or is omni-directional). Clean, even illumination. No harsh shadows. Professional product photography lighting quality.

Composition: Subject perfectly centered. Negative space balanced. Background elements providing depth context without distracting. Slight foreground elements adding depth layers.

Background: Dark blue-grey gradient. Multiple point lights or emissive spheres creating cyan/orange bokeh orbs. Shallow depth of field clearly visible. Clean render (no noise, proper sampling).

Motion blur: Slight blur on background elements showing orbit motion. Subject crisp (locked to camera view).

Label overlay: "Shot 2: Orbit Showcase - Frame 300 (90° Position)"

Style: Professional product visualization render. Cinematic shallow DoF. Beautiful bokeh. High production quality. Portfolio-worthy frame. Demonstrates perfect orbit execution.
```

**Prompt 28: Project Shot 3 - Tracking Shot**
```
Create a professional rendered frame showing camera tracking moving subject.

Show: Animated subject (character, cube, or vehicle) in motion. Motion blur visible on subject indicating movement (horizontal). Camera perfectly tracking subject - keeping it in frame despite movement. Background with strong parallax: foreground elements blurred and fast-moving (motion blur), background elements slower, subject sharp (focus locked).

Subject positioned using rule of thirds (not dead center - leading into frame direction). Clear sense of direction and speed from motion blur and composition.

Depth of field: f/4, subject sharp despite motion, foreground/background showing appropriate blur. Background elements streaking past showing lateral motion.

Lighting: Dynamic lighting suggesting movement (perhaps light trails or volumetrics). Subject well-illuminated. Cinematic motion capture aesthetic.

Background: Dark environment with depth layers clearly visible. Motion blur on background elements showing camera tracking speed. Clean render quality.

Label overlay: "Shot 3: Tracking Shot - Frame 480 (Following Motion)"

Style: Action cinematography render. Motion blur enhancing energy. Dynamic composition. Professional tracking shot execution. Portfolio-quality animation frame.
```

**Prompt 29: Project Shot 4 - Rack Focus Transition**
```
Create a side-by-side comparison showing rack focus shift.

Left panel - FOCUS ON FOREGROUND:
Foreground subject (grey cube or character face) sharp and detailed. Background subject (orange cube or object) completely blurred. Camera mid-dolly position. Label: "Frame 570 - Focus: Foreground"

Right panel - FOCUS ON BACKGROUND:  
Same camera angle but focus shifted. Foreground subject now blurred. Background subject sharp and detailed. Demonstrates focus transition during dolly. Label: "Frame 630 - Focus: Background"

Both panels show:
- Same composition and framing
- Shallow depth of field (f/2)
- Clear subject separation (8-10 units between foreground/background)
- Professional lighting maintained
- High render quality
- Smooth bokeh transition visible

Background: Dark grey environment. Subjects well-lit. Clear focus plane shift visible. Professional rack focus execution demonstrated.

Bottom note: "Rack Focus During Dolly - Attention Shift + Spatial Progression"

Style: Split-screen before/after comparison. Professional focus pulling demonstration. Cinematic shallow DoF. High production quality renders. Educational rack focus reference.
```

**Prompt 30: Project Shot 5 - Complex Finale**
```
Create a dramatic rendered frame showing complex combined camera movement.

Show: Dynamic finale shot combining multiple techniques. Camera in spiral crane position (elevated view, angled down). Wide establishing view of entire scene revealed. Multiple subjects visible at different depths. Dramatic lighting (possibly rim-lit or back-lit subjects).

Visible techniques evident:
- Elevated camera position (crane up)
- Orbital movement implied (angled perspective)
- Depth of field showing multiple depth layers (f/4-5.6)
- Dynamic composition (dramatic angle)
- Epic scale feeling

Subject arrangement: Hero subject visible but small in frame (showing context/environment). Background reveals full scene scope. Foreground elements framing shot. Professional "big reveal" cinematography.

Lighting: Dramatic, high-contrast lighting. Possible volumetric light rays. Rim lighting on multiple subjects. Beautiful bokeh spheres in out-of-focus areas. Cinematic lighting design.

Background: Grand establishing view. Clear sense of scale and scope. Beautiful gradient sky or environment. High production value render quality (Cycles, high samples, denoising).

Motion blur: Subtle blur indicating camera movement. Professional camera motion aesthetics.

Label overlay: "Shot 5: Finale - Spiral Crane Reveal - Frame 810"

Style: Epic finale cinematography. Dramatic establishing shot. High production value. Professional complex camera move execution. Portfolio showpiece frame. Demonstrates mastery of combined techniques.
```

### **Prompt 31: Multi-Camera Sequence Timeline**
```
Create a Blender timeline mockup showing multi-camera sequence organization.

Show: Extended timeline view spanning 0-900 frames. Five distinct camera sections separated by colored markers:
- Marker at frame 1: "Shot_1_Dolly" (green marker)
- Marker at frame 180: "Shot_2_Orbit" (blue marker)
- Marker at frame 420: "Shot_3_Tracking" (yellow marker)
- Marker at frame 570: "Shot_4_RackFocus" (orange marker)
- Marker at frame 690: "Shot_5_Finale" (red marker)

Left side outliner showing: Five camera objects listed:
- Camera_Dolly (green)
- Camera_Orbit (blue)  
- Camera_Tracking (yellow)
- Camera_RackFocus (orange)
- Camera_Finale (red)

Camera_Dolly has small camera icon indicating active camera.

Timeline shows colored regions corresponding to each shot duration. Playhead at frame 180 (transition point).

Background: Blender timeline theme (#2b2b2b). Markers clearly visible and labeled. Outliner visible on left showing camera hierarchy. Professional multi-camera project organization.

Style: Blender timeline UI mockup. Professional multi-cam sequence organization reference. Clear shot structure visualization. Educational project management screenshot.
```

### **Prompt 32: Motion Blur Settings for Camera Animation**
```
Create an annotated screenshot showing essential motion blur render settings.

Show: Render Properties panel (camera icon selected). "Motion Blur" section expanded and enabled (checkbox checked - orange highlight). Settings visible:
- Shutter: 0.5 (highlighted)
- Rolling Shutter: None (dropdown)
- Shutter Curve: Default

Additional visible sections:
- Sampling section showing samples: 256
- Film section showing Transparent Background checkbox

Large annotation arrows:
1. Pointing to Motion Blur enable checkbox: "ENABLE THIS!"
2. Pointing to Shutter value: "0.5 = Standard Film Look (180° shutter)"
3. Pointing to Samples: "256+ samples for clean motion blur"

Example comparison in corner: Two small rendered frames side-by-side showing "Motion Blur OFF" (strobing, fake) vs "Motion Blur ON" (smooth, natural).

Background: Blender Render Properties interface (#2b2b2b theme). Orange highlights on critical settings. Professional annotation style. Educational screenshot with clear guidance.

Style: Annotated settings screenshot. Professional render settings tutorial. Clear "what to enable" guidance. Blender interface mockup. Cinematography render settings reference.
```

### **Prompt 33: Camera Animation Shortcuts Quick Reference**
```
Create a clean infographic showing essential camera animation hotkeys.

Layout: 5 rows, each with keyboard key icon + description

Row 1: Large "I" key icon (bright orange #ff8c00) | "Insert Keyframe - Opens menu to keyframe Location, Rotation, or both"

Row 2: Spacebar icon | "Play/Pause Animation - Preview camera movement"

Row 3: "Numpad 0" key icon | "Camera View - Toggle between camera view and regular viewport"

Row 4: "N" key icon | "Side Panel - Access Lock Camera to View and other view settings"

Row 5: "Alt + G / Alt + R" keys | "Reset Location / Reset Rotation - Clear transforms quickly"

Additional shortcuts in smaller section:
- Left/Right Arrow: "Frame forward/back"
- Shift + Left/Right: "Jump 10 frames"
- Home/End: "Jump to first/last frame"

Background: Dark grey (#2b2b2b). Key icons in light grey with orange highlights. White text descriptions. Clean, scannable layout. Professional keyboard shortcut reference card aesthetic.

Bottom note: "Pin this reference while learning camera animation!"

Style: Quick reference infographic. Keyboard shortcut guide. Professional training material. Clean, scannable design. Educational reference card.
```

### **Prompt 34: Classic Camera Moves Quick Reference Table**
```
Create a clean infographic table summarizing all classic camera movements.

Table with 4 columns and 7 rows (plus header):

Header: Movement | Type | Effect | Common Use

Row 1: DOLLY (camera icon moving forward/back) | Position Change | Parallax, depth | Emphasis, intimacy

Row 2: TRACK (camera icon moving left/right) | Position Change | Strong parallax | Follow action, reveal

Row 3: CRANE (camera icon moving up/down) | Position Change | Perspective shift | Show scale, drama

Row 4: PAN (camera icon rotating horizontally) | Rotation | Reveal horizontal | Connect subjects, follow

Row 5: TILT (camera icon rotating vertically) | Rotation | Reveal vertical | Show height, scale

Row 6: ROLL (camera icon rotating on axis) | Rotation | Disorienting | Tension, stylized

Row 7: ORBIT (camera icon circling) | Combined | 360° showcase | Product reveal, hero

Each movement name has small icon illustration. Alternating row colors for readability (dark grey #2b2b2b and slightly lighter #393939).

Background: Professional infographic design. Table grid with clear borders. Icons in orange (#ff8c00). Text in white. Clean typography. Reference card aesthetic.

Style: Professional reference table. Camera movement quick guide. Educational infographic. Scannable layout. Cinematography cheat sheet.
```

### **Prompt 35: Constraint Properties Panel Overview**
```
Create an annotated mockup of Blender's Constraint Properties panel showing Track To constraint.

Show: Properties panel with Constraint Properties icon (chain link) selected. Track To constraint added and expanded, showing all parameters:

Settings visible:
- Target: [Dropdown field with "Empty" selected - highlighted]
- To: [Dropdown showing "-Z" selected]
- Up: [Dropdown showing "Y" selected]  
- Target Space: World
- Owner Space: World
- Influence: 1.000 [Slider at maximum]

Additional UI elements:
- "Add Constraint" button at top
- Track To constraint header with enable/disable toggle
- Mute and visibility icons
- Move up/down reorder arrows

Annotations with orange arrows:
1. "Target object camera will aim at"
2. "Camera's forward direction axis"
3. "Camera's up orientation axis"
4. "Strength of constraint effect (1.0 = full)"

Background: Blender Properties panel theme (#2b2b2b). UI elements in Blender 4.0 standard colors. Professional interface mockup. Clear parameter labeling.

Style: Annotated UI screenshot. Constraint setup reference. Professional Blender interface tutorial. Educational parameter guide. Clear visual hierarchy.
```

### **Prompt 36: Empty Types for Camera Control**
```
Create a viewport screenshot showing three types of Empties useful for camera work.

Show: 3D viewport with three Empties positioned at different locations:

Left - Plain Axes:
Traditional XYZ axes (red/green/blue). Medium size. Label: "Plain Axes - Best for targets & focus points"

Center - Single Arrow:
Large upward-pointing arrow. Orange color. Label: "Single Arrow - Shows clear direction, good for path markers"

Right - Cube:
Wireframe cube outline. Label: "Cube - Good for visualizing space/volume, collision targets"

All Empties roughly same size for comparison. Simple scene with camera visible in background for context showing how Empties are used in camera control.

Sidebar text explaining: "Empties are invisible null objects perfect for camera constraints, focus targets, and parent relationships"

Background: Blender viewport dark theme. Grid floor visible. Clean, uncluttered view. Empties clearly visible and distinct. Professional Blender Empty reference.

Style: Educational viewport screenshot. Empty types comparison. Professional Blender reference guide. Clear visualization of options. Cinematography setup tutorial element.
```

### **Prompt 37: Graph Editor Handle Adjustment**
```
Create a detailed Graph Editor screenshot showing Bezier handle manipulation.

Show: Graph Editor zoomed in on single keyframe. F-curve (orange #ff8c00) showing smooth Bezier curve through keyframe. Keyframe point visible as orange diamond.

Two Bezier handles extending from keyframe:
- Left handle: Shown being dragged (mouse cursor visible, white arrow indicating drag direction)
- Right handle: Static position

Handle manipulation overlay showing effect:
- Dotted "before" curve (lighter orange) showing original shape
- Solid "after" curve (bright orange) showing result of handle adjustment
- Curve becoming more gradual/gentle due to longer handle

Annotations:
- "Drag handle to adjust curve shape"
- "Longer handle = more gradual ease"
- "Shorter handle = quicker acceleration"

Small comparison inset: Two curves side-by-side showing "Short Handle (Quick Ease)" vs "Long Handle (Slow Ease)"

Background: Blender Graph Editor theme (#2b2b2b). Grid visible. Handles in white. Curve in orange. Professional curve editing reference.

Style: Technical Graph Editor tutorial screenshot. Bezier handle manipulation guide. Professional animation timing reference. Clear before/after demonstration. Educational curve adjustment tutorial.
```

### **Prompt 38: Speed Ramping Example Graph**
```
Create a Graph Editor screenshot showing speed ramp animation curve.

Show: Graph Editor with Camera Location Y F-curve displaying speed ramp pattern. Curve shows:
- Frames 1-40: Shallow slope (slow movement)
- Frames 40-60: Steep slope (fast movement - speed ramp!)
- Frames 60-100: Shallow slope again (slow movement)

Keyframes visible at transition points (frames 1, 40, 60, 100) as orange diamonds.

Annotations with colored zones:
- Blue zone (slow): "Slow Deliberate Start"
- Red zone (fast): "SPEED RAMP - Sudden Acceleration"
- Blue zone (slow): "Controlled Slow Ending"

Small velocity graph overlay showing speed over time: flat (slow) → spike (fast) → flat (slow)

Grid visible showing frame numbers along X-axis. Y-axis showing location values.

Background: Blender Graph Editor theme (#2b2b2b). Curve in bright orange (#ff8c00). Zones color-coded with transparent overlays. Professional speed ramp visualization.

Style: Technical Graph Editor demonstration. Speed ramping tutorial. Professional timing visualization. Animation velocity reference. Clear speed variation illustration.
```

### **Prompt 39: Camera Movement Emotional Impact Guide**
```
Create an infographic showing emotional storytelling through camera movement.

6-section grid layout (2x3):

Section 1 - PUSH-IN (Dolly Forward):
Camera moving toward subject icon. Text: "Increasing tension, intimacy, focus" | "Emotion: Anxiety, closeness, emphasis"

Section 2 - PULL-BACK (Dolly Backward):
Camera moving away icon. Text: "Revealing context, isolation, distance" | "Emotion: Loneliness, abandonment, perspective"

Section 3 - ORBIT (Circle Around):
Circular arrow around subject. Text: "Showcase, 360° reveal, hero moment" | "Emotion: Triumph, importance, grandeur"

Section 4 - PAN (Horizontal Rotation):
Camera rotating left-right. Text: "Connection, relationship, following gaze" | "Emotion: Curiosity, exploration, linking"

Section 5 - CRANE UP (Rising):
Camera ascending icon. Text: "God's eye view, expanding scope, freedom" | "Emotion: Revelation, liberation, transcendence"

Section 6 - TRACKING (Lateral):
Camera moving parallel. Text: "Companionship, journey, progression" | "Emotion: Following, participation, momentum"

Each section has movement icon (orange #ff8c00), descriptive text, and emotional keywords. Color-coded emotional categories (calm/intense).

Background: Dark grey (#2b2b2b). Clear section dividers. Typography hierarchy clear. Professional emotional cinematography guide.

Style: Educational infographic. Emotional storytelling reference. Professional cinematography psychology guide. Clear movement-emotion connections. Director's reference card.
```

### **Prompt 40: Professional Camera Rig Setup Examples**
```
Create a 2x2 grid showing four professional camera constraint setups.

Top-left - PRODUCT TURNTABLE:
Diagram: Empty at center, Camera parented at distance, Track To constraint. Rotation arrow on Empty. Label: "Product Turntable Setup" • Components: "Empty (center) + Parented Camera + Track To"

Top-right - OVER-SHOULDER FOLLOW:
Diagram: Character with Empty parented to back/head. Camera with Copy Location + Damped Track. Label: "Over-Shoulder Follow" • "Copy Location (offset) + Damped Track"

Bottom-left - DYNAMIC TWO-SUBJECT:
Diagram: Two subjects (A & B), focus Empty between them, Camera tracking focus Empty. Label: "Dynamic Focus Shift" • "Animated focus Empty + Track To"

Bottom-right - DOLLY ZOOM RIG:
Diagram: Camera with keyframed location AND focal length arrows. Track To maintaining subject framing. Label: "Dolly Zoom (Vertigo Effect)" • "Animate Location + Focal Length + Track To"

Each diagram shows top-down or side view. Clear component labeling. Orange cameras, cyan Empties, grey subjects. Constraint connections shown as dashed lines.

Background: Dark grey (#2b2b2b). Each quadrant clearly separated. Simple, clean diagrams. Professional rig reference illustrations.

Style: Technical setup diagrams. Professional camera rig guide. Educational constraint combinations. Clean schematic illustrations. Cinematography toolkit reference.
```

---

## SVG Diagram Recommendations

Images recommended as SVG for clarity and scalability:

1. **Camera Movement Overview Diagram** (#1) - Simple geometric shapes, arrows, icons
2. **Position Changes vs Rotation Changes Comparison** (#2) - Diagrams with clear geometric forms
3. **Dolly Shot Diagram** (#6) - Top-down technical diagram  
4. **Tracking/Trucking Shot Diagram** (#7) - Top-down movement illustration
5. **Crane Movement Diagram** (#8) - Side-view technical diagram
6. **Pan and Tilt Rotation Diagram** (#9) - Rotation axis illustrations
7. **Orbit Movement Diagram** (#10) - Circular path diagram
8. **Interpolation Types Comparison** (#12) - Graph curves comparison
9. **Easing Types Visual Reference** (#14) - Simple curve diagrams in grid
10. **Speed Variation Along Path Diagram** (#20) - Path with density illustration
11. **Movement Plus Focus Timing Diagram** (#24) - Timeline bars and tracks
12. **Camera Animation Shortcuts Quick Reference** (#33) - Keyboard icons and text
13. **Classic Camera Moves Quick Reference Table** (#34) - Table infographic
14. **Camera Movement Emotional Impact Guide** (#39) - Grid infographic
15. **Professional Camera Rig Setup Examples** (#40) - Technical setup diagrams

**Rationale:** These diagrams consist primarily of geometric shapes, lines, arrows, curves, and text labels. SVG format ensures they remain crisp at any scale, load quickly, and are easy to modify if lesson content changes. They don't require photorealistic rendering—clarity and precision are paramount.

---

## Image Placement Suggestions in HTML

### Section: why-camera-animation
- **After "The Power of Movement" heading:** Insert Image #1 (Camera Movement Overview Diagram)
- **Within "Camera Movement in Different Contexts" card:** Insert Image #39 (Emotional Impact Guide)

### Section: animation-fundamentals
- **After "The Animation Workflow" heading:** Insert Image #3 (Keyframe Workflow Visual Guide)
- **Within "Timeline and Playback" card:** Insert Image #4 (Timeline Interface with Keyframes)
- **After "Lock Camera to View" explanation:** Insert Image #5 (Lock Camera to View Setup)

### Section: classic-camera-moves
- **Immediately after section heading:** Insert Image #1 (Camera Movement Overview) as overview
- **Within "Dolly Movement" card:** Insert Image #6 (Dolly Shot Diagram)
- **Within "Tracking/Trucking" card:** Insert Image #7 (Tracking Shot Diagram)
- **Within "Crane/Boom" card:** Insert Image #8 (Crane Movement Diagram)
- **Within "Pan" card:** Insert Image #9 (Pan and Tilt Rotation - left half)
- **Within "Tilt" card:** Insert Image #9 (Pan and Tilt Rotation - right half)
- **Within "Orbit" card:** Insert Image #10 (Orbit Movement Diagram)
- **Within "Zoom vs Dolly" card:** Insert Image #11 (Zoom vs Dolly Comparison)
- **At end of section:** Insert Image #34 (Quick Reference Table)

### Section: keyframe-basics
- **Within "Basic Keyframing Workflow" card:** Insert Image #3 (Keyframe Workflow) as visual guide
- **Within "Lock Camera to View" card:** Insert Image #5 (Lock Camera to View Setup)
- **After "Viewing and Editing Keyframes" heading:** Insert Image #13 (Graph Editor Interface)

### Section: timing-and-easing
- **Within "Understanding Interpolation" card:** Insert Image #12 (Interpolation Types Comparison)
- **Within "Types of Easing" card:** Insert Image #14 (Easing Types Visual Reference)
- **Within "Setting Easing in Blender" card:** Insert Image #13 (Graph Editor Interface) and Image #37 (Handle Adjustment)
- **Within "Speed Ramping" card:** Insert Image #38 (Speed Ramping Example Graph)

### Section: camera-constraints
- **Within "Track To Constraint" card:** Insert Image #15 (Track To Setup)
- **Within "Damped Track Constraint" card:** Insert Image #16 (Damped Track vs Track To)
- **Within "Parenting Camera to Empty" card:** Insert Image #17 (Orbit Camera Rig Setup)
- **After "Practical Constraint Setups" heading:** Insert Image #40 (Professional Rig Examples)
- **Within "Constraint Tips and Tricks" card:** Insert Image #35 (Constraint Properties Panel) and Image #36 (Empty Types)

### Section: follow-path
- **Within "Creating a Follow Path Camera" card:** Insert Image #18 (Follow Path Setup - 3 panels)
- **Within "Shaping the Path" card:** Insert Image #19 (Path Curve Editing Interface)
- **Within "Controlling Speed Along Path" card:** Insert Image #20 (Speed Variation Diagram)

### Section: handheld-camera
- **Within "Creating Handheld Camera in Blender" card:** Insert Image #21 (Noise Modifier Setup)
- **After "Method 1" description:** Insert Image #22 (Shake Intensity Comparison)

### Section: combining-with-dof
- **Within "Technical Setup" card:** Insert Image #23 (Focus Object Setup)
- **Within "Timing: Coordinating Movement and Focus" card:** Insert Image #24 (Movement Plus Focus Timing)
- **Within "Aperture Considerations" card:** Insert Image #25 (Aperture Comparison)

### Section: project
- **After "Scene Setup" heading:** Insert Image #31 (Multi-Camera Sequence Timeline)
- **Within "Shot 1" description:** Insert Image #26 (Establishing Dolly Example)
- **Within "Shot 2" description:** Insert Image #27 (Orbit Showcase Example)
- **Within "Shot 3" description:** Insert Image #28 (Tracking Shot Example)
- **Within "Shot 4" description:** Insert Image #29 (Rack Focus Example)
- **Within "Shot 5" description:** Insert Image #30 (Complex Finale Example)
- **Within "Rendering Your Sequence" card:** Insert Image #32 (Motion Blur Settings)

### Section: summary
- **Within "Complete Camera Animation Knowledge" card:** Insert Image #33 (Shortcuts Quick Reference)
- **End of summary:** Insert Image #34 (Classic Moves Quick Reference Table)

---

## File Naming Convention

```
lesson_23_01_camera_movement_overview.svg
lesson_23_02_position_vs_rotation.svg
lesson_23_03_keyframe_workflow.png
lesson_23_04_timeline_keyframes.png
lesson_23_05_lock_camera_view.png
lesson_23_06_dolly_diagram.svg
lesson_23_07_tracking_diagram.svg
lesson_23_08_crane_diagram.svg
lesson_23_09_pan_tilt_diagram.svg
lesson_23_10_orbit_diagram.svg
lesson_23_11_zoom_vs_dolly.png
lesson_23_12_interpolation_types.svg
lesson_23_13_graph_editor.png
lesson_23_14_easing_types.svg
lesson_23_15_track_to_setup.png
lesson_23_16_damped_vs_track.svg
lesson_23_17_orbit_rig.svg
lesson_23_18_follow_path_setup.png
lesson_23_19_path_editing.png
lesson_23_20_speed_variation.svg
lesson_23_21_noise_modifier.png
lesson_23_22_shake_intensity.png
lesson_23_23_focus_object_setup.png
lesson_23_24_movement_focus_timing.svg
lesson_23_25_aperture_comparison.png
lesson_23_26_shot1_establishing.png
lesson_23_27_shot2_orbit.png
lesson_23_28_shot3_tracking.png
lesson_23_29_shot4_rack_focus.png
lesson_23_30_shot5_finale.png
lesson_23_31_multicam_timeline.png
lesson_23_32_motion_blur_settings.png
lesson_23_33_shortcuts_reference.svg
lesson_23_34_moves_quick_reference.svg
lesson_23_35_constraint_panel.png
lesson_23_36_empty_types.png
lesson_23_37_handle_adjustment.png
lesson_23_38_speed_ramp_graph.png
lesson_23_39_emotional_impact_guide.svg
lesson_23_40_professional_rigs.svg
```

**Format guidelines:**
- Two-digit numbering (01-40)
- Descriptive names using underscores
- .svg for diagrams/infographics (scalable, small file size)
- .png for screenshots and rendered examples (alpha channel support)

---

## Production Priority

### High Priority (Essential for Understanding Core Concepts)

1. **Image #3 - Keyframe Workflow Visual Guide** - Core animation workflow, used repeatedly
   - **Rationale:** Students need visual reference for fundamental keyframing process

2. **Image #6 - Dolly Shot Diagram** - Most common camera move
   - **Rationale:** Dolly is primary technique, diagram clarifies position vs zoom concept

3. **Image #10 - Orbit Movement Diagram** - Essential for project work
   - **Rationale:** Orbit shot is major project component, needs clear visualization

4. **Image #15 - Track To Constraint Setup** - Critical constraint technique
   - **Rationale:** Track To is most-used constraint, setup must be crystal clear

5. **Image #17 - Orbit Camera Rig Setup** - Professional technique foundation
   - **Rationale:** Empty parent method is professional standard, requires diagram

6. **Image #21 - Handheld Camera Noise Modifier Setup** - Key effect technique
   - **Rationale:** Handheld shake is important aesthetic, Noise setup needs visual guide

7. **Image #23 - Focus Object Setup for Rack Focus** - Advanced integration technique
   - **Rationale:** Combining movement + focus is lesson climax, needs clear setup visual

8. **Image #32 - Motion Blur Settings** - Essential render setting
   - **Rationale:** Motion blur is mandatory for realistic camera animation, settings must be shown

9. **Image #34 - Classic Camera Moves Quick Reference Table** - Summary reference
   - **Rationale:** Students need scannable reference of all moves for quick lookup

10. **Image #5 - Lock Camera to View Setup** - Game-changing workflow feature
    - **Rationale:** This feature transforms camera animation workflow, must be clearly shown

**High Priority Rationale:** These images directly support the most important learning objectives: keyframing workflow, classic camera moves, constraints, and essential rendering settings. Without these, students will struggle with fundamental concepts.

### Medium Priority (Enhances Understanding and Workflow)

11. **Image #1 - Camera Movement Overview Diagram** - Opening orientation graphic
12. **Image #12 - Interpolation Types Comparison** - Timing/easing foundation
13. **Image #14 - Easing Types Visual Reference** - Timing refinement guide
14. **Image #18 - Follow Path Constraint Setup** - Advanced path technique
15. **Image #24 - Movement Plus Focus Timing Diagram** - Coordination visualization
16. **Image #11 - Zoom vs Dolly Comparison** - Critical distinction clarification
17. **Image #4 - Timeline Interface with Keyframes** - Interface familiarity
18. **Image #13 - Graph Editor Interface** - Advanced timing tool intro
19. **Image #26-30 - Project Shot Examples** (5 images) - Project execution references
20. **Image #33 - Shortcuts Quick Reference** - Workflow efficiency aid
21. **Image #31 - Multi-Camera Sequence Timeline** - Project organization guide
22. **Image #22 - Handheld Shake Intensity Comparison** - Style reference levels

**Medium Priority Rationale:** These enhance understanding and provide valuable references but aren't absolutely critical for initial concept grasp. Students can understand the concepts without them but benefit significantly from having them.

### Lower Priority (Nice to Have, Supplementary)

23. **Image #2 - Position Changes vs Rotation Changes** - Foundational concept visualization
24. **Image #7 - Tracking/Trucking Shot Diagram** - Secondary move type
25. **Image #8 - Crane Movement Diagram** - Secondary move type
26. **Image #9 - Pan and Tilt Rotation Diagram** - Rotation principles illustration
27. **Image #16 - Damped Track vs Track To Comparison** - Constraint variation detail
28. **Image #19 - Path Curve Editing Interface** - Follow Path detail
29. **Image #20 - Speed Variation Along Path** - Advanced path control
30. **Image #25 - Aperture Considerations for Moving Cameras** - DoF integration detail
31. **Image #35 - Constraint Properties Panel Overview** - UI reference detail
32. **Image #36 - Empty Types for Camera Control** - Tool options reference
33. **Image #37 - Graph Editor Handle Adjustment** - Advanced easing detail
34. **Image #38 - Speed Ramping Example Graph** - Advanced timing technique
35. **Image #39 - Camera Movement Emotional Impact Guide** - Storytelling reference
36. **Image #40 - Professional Camera Rig Setup Examples** - Advanced rig patterns

**Lower Priority Rationale:** These are supplementary materials that deepen understanding or provide advanced techniques. The lesson functions well without them, but they add professional polish and reference value for advanced students.

---

## Notes

### Style Consistency Guidelines

**Color Palette:**
- Background: Dark grey #2b2b2b (matches Blender viewport)
- Primary accent: Bright orange #ff8c00 (camera icons, keyframes, highlights)
- Secondary accent: Cyan #00d4ff (motion arrows, paths, UI elements)
- Subjects/objects: Light grey #d0d0d0
- Text: White #ffffff with subtle shadows for readability
- Success/good: Green #4CAF50
- Warning: Yellow/Orange #ffc107
- RGB axes: Standard X-red, Y-green, Z-blue

**Blender Version Consistency:**
- All UI screenshots should reflect Blender 4.0 interface styling
- Dark theme throughout
- Modern Blender icon set
- Consistent panel layouts

**Typography Standards:**
- Headers: Bold, clear hierarchy
- Body text: Sans-serif, highly readable
- Labels: Concise, descriptive
- Annotations: Brief, action-oriented
- Use consistent font across all diagrams

**Diagram Style:**
- Clean, minimal backgrounds
- Geometric precision
- Clear motion indicators (arrows, trails)
- Professional technical illustration aesthetic
- Engineering/blueprint inspiration for diagrams

**Screenshot Standards:**
- High resolution (minimum 1920x1080 for interface shots)
- Clean viewport (no clutter)
- Relevant UI elements highlighted
- Clear annotations with consistent arrow style
- Focus on key elements only

### Accessibility Considerations

**Visual Clarity:**
- High contrast between elements (text on backgrounds minimum 4.5:1 ratio)
- Large enough text (minimum 14px for body, 18px for headers)
- Clear distinction between similar elements (use both color AND shape)
- Colorblind-friendly: Don't rely solely on color (use patterns, labels, shapes)

**Annotations:**
- Clear, descriptive labels
- Numbered sequences for workflows
- Arrows that don't obscure important details
- Consistent annotation style across all images

**Alternative Text:**
- Each image should have descriptive alt text planned
- Alt text describes content AND purpose
- Technical diagrams need detailed descriptions

### Technical Specifications

**Screenshot Resolution:**
- Full interface: 1920x1080 minimum
- Detail shots: Can be smaller but maintain clarity
- Rendered examples: 1920x1080 for consistency

**Image Format:**
- PNG for screenshots (lossless, alpha channel)
- SVG for diagrams (scalable, small file size, web-friendly)
- JPEG only for large photographic renders if file size critical

**File Size Targets:**
- PNG screenshots: <500KB (optimize with tools like TinyPNG)
- SVG diagrams: <100KB (optimize SVG code)
- Rendered examples: <1MB (balance quality and load time)

**Compression:**
- PNG: 8-bit when possible, optimize with pngquant
- SVG: Minify code, remove unnecessary data
- Use WebP format for even better compression if browser support allows

**Responsive Sizing:**
- Images should scale well on mobile (test at 375px width)
- Maintain readability at smaller sizes
- Consider providing different sizes for different viewports

### Special Considerations for This Lesson

**Animation Demonstration Challenge:**
- Static images showing motion requires careful use of:
  - Motion blur indication
  - Ghost frames/positions
  - Motion trails/paths
  - Arrows and directional indicators
  - Before/after comparisons

**Temporal Concepts:**
- Timeline visualizations must clearly show:
  - Frame numbers
  - Keyframe positions
  - Duration/timing
  - Easing curves

**3D Space in 2D:**
- Use multiple views (top, side, perspective) as needed
- Clear depth indicators (foreground/background separation)
- Perspective lines showing field of view
- Z-axis indicators for 3D clarity

**Constraint Visualization:**
- Show relationships between objects clearly
  - Dashed lines for parent-child relationships
  - Solid lines for sight lines/aiming
  - Color-coding for different empties/targets
  - Clear hierarchical diagrams

**Blender Scene Setup:**
- For rendered examples: consistent lighting setup
- Simple, clear subjects (avoid visual clutter)
- Professional material shading
- Depth of field demonstration requires good bokeh
- Motion blur requires proper render settings

### Production Notes

**Blender Scene Setup for Screenshots:**
- Create master .blend file with standard camera animation scenes
- Standard lighting rig (3-point lighting)
- Material library (metal, glass, matte grey for subjects)
- Camera presets at common positions
- Background lights/emissive spheres for bokeh

**Lighting Standards for Renders:**
- Key light: 100% strength, 45° angle
- Fill light: 30-40% strength, opposite side
- Rim light: 80% strength, behind and above
- World lighting: HDRI or gradient for reflections

**Viewport Configuration:**
- Overlays: Minimal (hide grid if distracting)
- Camera guide: Passepartout at 0.8 for rendered examples
- Motion paths: Enabled for movement visualization
- Onion skinning: For multi-position demonstrations

**Workflow Efficiency:**
- Batch process similar images together
- Create reusable templates for diagrams
- Use consistent naming during creation
- Save high-res source files separately from optimized web versions
- Version control for iterative refinements

**Quality Checklist (per image):**
- [ ] Matches lesson content section accurately
- [ ] Colors match specified palette
- [ ] Text is readable at target size
- [ ] Annotations are clear and non-obstructive
- [ ] File size is optimized
- [ ] Format is appropriate (PNG/SVG/JPG)
- [ ] Filename follows convention
- [ ] Alt text drafted
- [ ] High-contrast elements for accessibility
- [ ] Tested at mobile size if applicable

---

## Additional Recommendations

### Image Creation Workflow

**Phase 1: Core Diagrams (Week 1)**
- Create all SVG diagrams (#1, 2, 6-10, 12, 14, 20, 24, 33, 34, 39, 40)
- These are reusable and set visual style
- Establish templates for consistent look

**Phase 2: Blender Screenshots (Week 2)**
- Set up master .blend file with standard scenes
- Capture all UI/interface screenshots (#4, 5, 13, 15, 18, 19, 21, 31, 32, 35, 36, 37, 38)
- Annotate screenshots with consistent style

**Phase 3: Workflow Composites (Week 3)**
- Create multi-panel workflows (#3, 11, 16, 18, 22, 25)
- These require combining multiple elements

**Phase 4: Project Renders (Week 4)**
- Render all project example shots (#26-30)
- Highest quality renders
- Consistent lighting and materials

### Alternative Approaches

**Video Alternatives:**
- Consider short 5-10 second video clips for some concepts
- Animated GIFs showing camera movement
- Screen recordings of Graph Editor manipulation
- Before/after animations for interpolation comparisons

**Interactive Elements:**
- Embedded Sketchfab models showing camera paths
- Interactive comparison sliders (zoom vs dolly)
- Timeline scrubbers showing camera position over time

### Future Enhancements

**Downloadable Assets:**
- Blender .blend file with all camera rig examples
- Pre-built constraint setups
- Project starter file with scene setup
- Empty templates for orbit rigs

**Quiz Integration:**
- "Identify the camera move" quiz with video clips
- "Match the easing curve" interactive exercise
- "Set up constraint" challenge with feedback

**Gallery Section:**
- Student project showcase
- Professional cinematography examples
- Camera move comparison gallery

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All major lesson concepts have appropriate image support
- [ ] Each image has clear educational purpose defined with specific rationale
- [ ] AI prompts are detailed and specific with hex color codes, layout descriptions
- [ ] SVG recommendations are justified with clear rationale (scalability, file size, geometric content)
- [ ] Placement suggestions reference actual HTML section IDs from lesson file
- [ ] File naming follows consistent convention (lesson_23_XX_descriptive_name.ext)
- [ ] Priority ranking is logical and justified with clear educational rationale
- [ ] Style/accessibility notes are comprehensive and actionable
- [ ] Output is well-organized with clear sections and consistent formatting
- [ ] Technical specifications cover all production needs (resolution, formats, compression)
- [ ] Special considerations address lesson-specific requirements (animation, 3D space, constraints)
- [ ] Production workflow is practical and efficient
- [ ] Quality checklist is detailed and usable
- [ ] Alternative approaches and future enhancements are considered

---

## Summary

This comprehensive image requirements document identifies **40 distinct images** needed to fully augment Lesson 23: Camera Animation. The images range from foundational concept diagrams to advanced technique demonstrations, workflow screenshots, and portfolio-quality rendered examples.

**Key priorities:**
1. **Immediate production:** High-priority images (10 total) covering core keyframing workflow, essential camera moves, critical constraints
2. **Phase 2:** Medium-priority images (12 total) enhancing understanding and providing valuable references
3. **Polish phase:** Lower-priority images (18 total) adding professional depth and supplementary details

**Technical approach:**
- **15 SVG diagrams** for scalable, lightweight technical illustrations
- **22 PNG screenshots** for interface demonstrations and workflow guides  
- **3 rendered examples** for project shot references and quality benchmarks

**Production strategy:** Phased creation over 4 weeks, starting with reusable SVG templates, progressing through Blender screenshots, workflow composites, and culminating in high-quality project renders.

This documentation provides everything needed to create professional, educational, accessible imagery that transforms Lesson 23 from text-heavy to visually engaging, significantly improving student comprehension and retention of complex camera animation concepts.
