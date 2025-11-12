# Image Requirements for Lesson 03: Navigation and Viewport Control

## Task Summary
**Lesson:** lesson_03_navigation_and_viewport_control.html  
**Purpose:** Identify and document all images needed to augment the lesson content  
**Date:** Analysis completed  

---

## Image List for Lesson 03

### **1. The Big Three Navigation Operations Diagram**
- **Purpose:** Visual summary of orbit, pan, and zoom
- **Type:** 3-panel composite illustration
- **Shows:** Three panels showing cursor/mouse position and resulting viewport movement for each operation

### **2. Mouse Button Reference Diagram**
- **Purpose:** Clarify which mouse buttons do what
- **Type:** Annotated mouse illustration
- **Shows:** Three-button mouse with middle button highlighted, labels for each button's navigation function

### **3. Orbit Operation Visual**
- **Purpose:** Demonstrate orbiting around objects
- **Type:** Animated-style diagram or multi-frame illustration
- **Shows:** Camera/viewpoint circling around a central object with motion arrows

### **4. Pan Operation Visual**
- **Purpose:** Show sliding movement without rotation
- **Type:** Before/after comparison or motion diagram
- **Shows:** Viewport sliding horizontally/vertically while maintaining viewing angle

### **5. Zoom Operation Visual**
- **Purpose:** Illustrate moving closer/further from objects
- **Type:** Distance progression diagram
- **Shows:** Three stages: far away, normal distance, very close - same object at different scales

### **6. Perspective vs Orthographic Comparison**
- **Purpose:** Show the fundamental difference between view modes
- **Type:** Side-by-side comparison screenshot
- **Shows:** Same scene in perspective (with depth/convergence) and orthographic (flat/parallel lines)

### **7. Standard Views Cube Diagram**
- **Purpose:** Visualize the six standard viewing angles
- **Type:** 3D cube illustration with camera positions
- **Shows:** Central cube with six camera positions (front, back, left, right, top, bottom) labeled with numpad shortcuts

### **8. Numpad Layout Reference**
- **Purpose:** Show which keys control which views
- **Type:** Numpad keyboard diagram with annotations
- **Shows:** Numpad layout with color-coded keys and labels for their navigation functions

### **9. Camera View Frame Anatomy**
- **Purpose:** Explain the camera frame elements
- **Type:** Annotated camera view screenshot
- **Shows:** Camera frame with labels pointing to render boundary, safe areas, center cross, corner triangles

### **10. Frame All vs Frame Selected Comparison**
- **Purpose:** Show the difference between framing commands
- **Type:** Two-panel comparison
- **Shows:** Left panel with Frame All (all objects visible), right panel with Frame Selected (one object focused)

### **11. Local View (Isolation) Demonstration**
- **Purpose:** Show how local view isolates objects
- **Type:** Before/after comparison
- **Shows:** Cluttered scene with multiple objects, then isolated single object with "(Local)" indicator

### **12. Perspective Depth Perception Diagram**
- **Purpose:** Explain how perspective mimics human vision
- **Type:** Illustrated diagram with railroad tracks or similar
- **Shows:** Parallel lines converging at vanishing point to show perspective effect

### **13. Orthographic Parallel Lines Diagram**
- **Purpose:** Show how orthographic maintains parallel lines
- **Type:** Technical drawing style illustration
- **Shows:** Grid with parallel lines staying parallel at any distance (blueprint style)

### **14. Navigation Workflow Flowchart**
- **Purpose:** Show decision tree for choosing navigation method
- **Type:** SVG flowchart
- **Shows:** Decision branches: "Need different angle?" → Orbit, "Need to center?" → Pan, etc.

### **15. Camera to View Mode Illustration**
- **Purpose:** Explain the camera following viewport navigation
- **Type:** Sequential diagram
- **Shows:** Viewport navigation with camera object moving in sync

### **16. Quadview Layout Diagram**
- **Purpose:** Show the four-panel layout and what each shows
- **Type:** Screenshot or mockup of quadview
- **Shows:** Four panels labeled (Top Ortho, Front Ortho, Right Ortho, User Persp)

### **17. Walk/Fly Navigation Controls**
- **Purpose:** Reference for first-person navigation
- **Type:** Keyboard and mouse control diagram
- **Shows:** WASD keys highlighted, mouse movement indicators, E/Q for up/down

### **18. Navigation Shortcuts Quick Reference Card**
- **Purpose:** Comprehensive cheat sheet
- **Type:** SVG infographic or table
- **Shows:** All major navigation shortcuts organized by category

---

## AI Image Generation Prompts

### **Prompt 1: The Big Three Navigation Operations**
```
Create a three-panel horizontal layout illustrating Blender's core navigation operations. Panel 1 labeled "ORBIT": Show circular arrows around a central 3D cube with "MMB + Drag" text, indicating rotation around the object. Panel 2 labeled "PAN": Show directional arrows (left, right, up, down) with the cube sliding while maintaining viewing angle, "Shift + MMB + Drag" text. Panel 3 labeled "ZOOM": Show cube at three sizes (small, medium, large) with zoom arrows, "Scroll Wheel" text. Clean, educational diagram style with dark background, consistent cube rendering across panels. Professional training material aesthetic.
```

### **Prompt 2: Mouse Button Reference**
```
Create a clear top-down illustration of a three-button computer mouse with scroll wheel. Use different colors to highlight each button's function: Left button (blue) labeled "Select", Middle button/scroll wheel (orange) labeled "NAVIGATION - Click & Drag", Right button (green) labeled "Context Menu". Add scroll wheel with up/down arrows labeled "Zoom In/Out". Include annotation lines pointing to each element. Clean, technical illustration style on white background. Easy to read labels with icons.
```

### **Prompt 3: Orbit Operation Visual**
```
Create an educational diagram showing orbit navigation in 3D space. Central element: a simple 3D cube or sphere. Around it, show a circular orbital path with a camera/eye icon moving along the path at 4 positions (front, right, back, left). Use curved arrows to show the circular motion. Add "MMB + Drag" label prominently. The object stays stationary while the viewpoint rotates. Show faded ghost images of the object from different angles. Technical illustration style with motion lines and clarity. Dark background.
```

### **Prompt 4: Pan Operation Visual**
```
Create a two-panel comparison showing pan operation. Each panel shows the same 3D scene with a grid floor and central object. Panel 1: Object centered in frame. Panel 2: Same viewing angle but object has slid to the edge of frame (viewport has panned). Use large directional arrows to show the sliding motion. Label: "Shift + MMB + Drag". Emphasize that the camera angle doesn't change, only position. Side-by-side layout, consistent lighting and perspective.
```

### **Prompt 5: Zoom Operation Visual**
```
Create a three-stage zoom progression diagram showing the same 3D object (cube or sphere) at different distances. Stage 1 (left): Object very small and far away labeled "Zoomed Out". Stage 2 (center): Object at comfortable viewing distance labeled "Normal View". Stage 3 (right): Object fills most of frame labeled "Zoomed In". Show dotted lines or arrows connecting the stages. Add "Scroll Wheel" label with up/down arrows. Clean educational style, consistent object, grid floor for depth reference.
```

### **Prompt 6: Perspective vs Orthographic Comparison**
```
Create a split-screen comparison showing the same 3D scene in two different view modes. Left side labeled "PERSPECTIVE VIEW": Show a scene with multiple cubes arranged in depth, with visible perspective distortion - objects further away appear smaller, parallel lines converge toward vanishing point. Right side labeled "ORTHOGRAPHIC VIEW": Same scene but all objects same size regardless of distance, parallel lines stay parallel, looks flat/technical like a blueprint. Use the same camera angle for both. Add "Numpad 5" label to toggle. Professional 3D software aesthetic.
```

### **Prompt 7: Standard Views Cube Diagram**
```
Create a central 3D cube with six camera/eye icons positioned around it representing the standard views. Front camera with "Numpad 1", Back with "Ctrl + Numpad 1", Right with "Numpad 3", Left with "Ctrl + Numpad 3", Top with "Numpad 7", Bottom with "Ctrl + Numpad 7". Connect each camera to the cube with dotted lines. Use color coding: primary views (1, 3, 7) in one color, opposite views in another. Clean isometric or 3D diagram style. Arrows showing camera looking at cube. Educational 3D graphics style.
```

### **Prompt 8: Numpad Layout Reference**
```
Create a clear numpad keyboard layout diagram showing keys 0-9, +, -, /, *, and Enter. Color-code keys by function: View switches (1, 3, 7) in blue, Camera (0) in orange, Perspective toggle (5) in green, Opposite views (Ctrl combinations) in purple, Navigation rotation (2, 4, 6, 8) in yellow. Include small icons next to each key showing what it does (camera icon for 0, eye for 1/3/7, etc.). Add a legend explaining each color. Clean, technical keyboard diagram style with annotations.
```

### **Prompt 9-18:** [Additional detailed prompts continue...]

---

## SVG Diagram Recommendations

Best suited for SVG format:
1. Navigation Workflow Flowchart (#14)
2. Standard Views Cube Diagram (#7)
3. Numpad Layout Reference (#8)
4. Navigation Shortcuts Quick Reference Card (#18)
5. Mouse Button Reference (#2)
6. The Big Three Operations Diagram (#1)
7. Orthographic Parallel Lines Diagram (#13)

---

## Production Priority

### High Priority (Essential)
1. The Big Three Operations Diagram
2. Perspective vs Orthographic Comparison
3. Standard Views Cube Diagram
4. Mouse Button Reference
5. Navigation Shortcuts Reference Card

### Medium Priority
6-12. [Supporting diagrams]

### Lower Priority
13-18. [Advanced features]

---

## File Naming Convention

```
lesson_03_01_big_three_operations.svg
lesson_03_02_mouse_button_reference.svg
lesson_03_03_orbit_operation.png
[etc.]
```

---

## Notes

- Use dark backgrounds to match Blender interface
- Maintain consistent object styling across diagrams
- Use Blender's orange (#FF6B00) for highlights
- Color-code shortcuts consistently
- High contrast text for readability

---

## Revision History

- **Version 1.0** - Initial analysis for Lesson 03
- 18 core images identified
- Prioritized movement visualization
- Emphasized spatial relationships for 3D on 2D screen
