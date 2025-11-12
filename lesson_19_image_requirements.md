# Image Requirements for Lesson 19: Cycles Path Tracing

## Task Summary
**Lesson:** lesson_19_cycles_path_tracing.html
**Purpose:** Identify and document all images needed to augment the lesson content on Cycles path tracing
**Date:** November 11, 2025

---

## Image List for Lesson 19

### **1. Path Tracing Ray Diagram**
- **Purpose:** Visualize how path tracing works - rays shooting from camera through scene
- **Type:** Diagram/Illustration
- **Shows:** Camera with multiple rays bouncing through 3D scene, hitting surfaces, reaching light sources

### **2. Ray Tracing vs Path Tracing Comparison**
- **Purpose:** Show the fundamental difference between simpler ray tracing and advanced path tracing
- **Type:** Side-by-side comparison diagram
- **Shows:** Left: Single ray path (ray tracing), Right: Multiple sampled paths (path tracing)

### **3. Sample Count Progression Grid**
- **Purpose:** Demonstrate visual improvement as samples increase
- **Type:** Composite grid (6 panels)
- **Shows:** Same scene at 16, 64, 256, 512, 1024, 2048 samples showing noise reduction

### **4. Cycles Rendering Process Flowchart (Supplemental)**
- **Purpose:** Complement the existing Mermaid diagram with visual representation
- **Type:** Infographic
- **Shows:** Visual breakdown of F12 render process with icons

### **5. Light Bounce Path Visualization**
- **Purpose:** Illustrate what a "bounce" means in path tracing
- **Type:** 3D scene diagram
- **Shows:** Single ray path labeled with bounce numbers as it hits different surfaces

### **6. Diffuse vs Glossy vs Transmission Bounce Comparison**
- **Purpose:** Show different bounce types and their effects
- **Type:** Three-panel comparison
- **Shows:** Three objects showing different bounce behaviors (matte, mirror, glass)

### **7. GPU vs CPU Architecture Diagram**
- **Purpose:** Visualize the hardware difference and why GPU is faster
- **Type:** Simplified infographic
- **Shows:** CPU (few powerful cores) vs GPU (thousands of small cores) with parallel ray tracing

### **8. Cycles Render Properties Panel Screenshot**
- **Purpose:** Show users where to find Cycles settings
- **Type:** Annotated screenshot
- **Shows:** Blender Properties panel with Render Properties tab highlighted, Cycles selected

### **9. Device Selection Screenshot**
- **Purpose:** Show GPU Compute selection
- **Type:** Screenshot with annotation
- **Shows:** Render Properties → Device dropdown with GPU Compute highlighted

### **10. Sampling Settings Panel Screenshot**
- **Purpose:** Show complete sampling configuration area
- **Type:** Annotated screenshot
- **Shows:** Sampling section expanded with Render/Viewport samples, Adaptive Sampling visible

### **11. Denoising Settings Screenshot**
- **Purpose:** Show where and how to enable denoising
- **Type:** Annotated screenshot
- **Shows:** Denoising section with checkboxes for Render/Viewport, denoiser dropdown (OptiX/OpenImageDenoise)

### **12. Denoising Before/After Comparison**
- **Purpose:** Demonstrate the power of denoising
- **Type:** Side-by-side comparison
- **Shows:** 256 samples without denoising (noisy) vs 256 samples with denoising (clean)

### **13. Adaptive Sampling Visualization**
- **Purpose:** Show how adaptive sampling works - some pixels stop early
- **Type:** Heat map style diagram
- **Shows:** Render with overlay showing which pixels stopped at lower sample counts

### **14. Light Paths Settings Screenshot**
- **Purpose:** Show bounce configuration controls
- **Type:** Annotated screenshot
- **Shows:** Light Paths section with Max Bounces, individual bounce types, caustics options

### **15. Bounce Limit Comparison**
- **Purpose:** Show visual difference between low and high bounce counts
- **Type:** Four-panel comparison
- **Shows:** Interior scene at 2, 4, 8, 12 bounces showing progressive indirect lighting improvement

### **16. Caustics Example - Glass with Light Pattern**
- **Purpose:** Show what caustics look like
- **Type:** 3D render
- **Shows:** Glass object creating beautiful light patterns on surface below

### **17. Refractive vs Reflective Caustics Comparison**
- **Purpose:** Distinguish between the two caustic types
- **Type:** Side-by-side renders
- **Shows:** Left: Glass caustics (refractive), Right: Chrome/mirror caustics (reflective)

### **18. Caustics Settings Location Screenshot**
- **Purpose:** Show where to enable/disable caustics
- **Type:** Annotated screenshot
- **Shows:** Light Paths → Fast GI Approximation section with Reflective/Refractive Caustics checkboxes

### **19. Subsurface Scattering Example**
- **Purpose:** Demonstrate SSS effect
- **Type:** Comparison render
- **Shows:** Backlit object with SSS off vs SSS on (showing translucency)

### **20. Volume Rendering Example**
- **Purpose:** Show volume/fog effect in Cycles
- **Type:** Atmospheric render
- **Shows:** God rays or fog scene demonstrating volume rendering

### **21. Fireflies Problem Example**
- **Purpose:** Show the firefly issue
- **Type:** Problem demonstration render
- **Shows:** Render with bright white pixels (fireflies) scattered throughout

### **22. Clamping Fix for Fireflies**
- **Purpose:** Show how clamping solves fireflies
- **Type:** Before/after comparison
- **Shows:** Same scene with fireflies vs with Indirect Clamp applied (clean)

### **23. GPU Memory Usage Console Screenshot**
- **Purpose:** Show where to check memory statistics
- **Type:** Screenshot
- **Shows:** Blender system console with memory usage statistics during render

### **24. Preferences GPU Setup Screenshot**
- **Purpose:** Show one-time GPU configuration
- **Type:** Annotated screenshot
- **Shows:** Edit → Preferences → System → Cycles Render Devices with GPU checkboxes

### **25. Render Region Usage Diagram**
- **Purpose:** Show how to use render region for testing
- **Type:** Annotated screenshot/diagram
- **Shows:** Camera view with drawn render region box, Ctrl+B shortcut notation

### **26. Resolution Percentage Setting Screenshot**
- **Purpose:** Show quick resolution adjustment for tests
- **Type:** Screenshot with annotation
- **Shows:** Output Properties → Resolution percentage slider at 50%

### **27. Three-Point Lighting Setup Diagram**
- **Purpose:** Visual guide for project lighting
- **Type:** Top-down scene diagram
- **Shows:** Camera, object, three lights positioned (key, fill, rim) with labels

### **28. Glass Material Settings Screenshot**
- **Purpose:** Show correct Principled BSDF settings for glass
- **Type:** Annotated screenshot
- **Shows:** Shader Editor with Principled BSDF glass settings (Transmission: 1.0, IOR: 1.45, etc.)

### **29. Metal Material Settings Screenshot**
- **Purpose:** Show Principled BSDF settings for metal
- **Type:** Annotated screenshot
- **Shows:** Shader Editor with metal settings (Metallic: 1.0, low Roughness)

### **30. Progressive Render Examples - Glass Object**
- **Purpose:** Show the scene developing during render
- **Type:** Four-panel time progression
- **Shows:** Same glass object at 10%, 25%, 50%, 100% render completion

### **31. Samples and Render Time Chart**
- **Purpose:** Show the time/quality trade-off
- **Type:** Infographic/Graph
- **Shows:** Bar chart or graph showing sample count vs render time vs quality level

### **32. Eevee vs Cycles Quality Comparison**
- **Purpose:** Show why Cycles takes longer but looks better
- **Type:** Side-by-side comparison renders
- **Shows:** Same glass/metal scene in Eevee (fast, approximate) vs Cycles (slow, accurate)

### **33. Optimization Decision Tree**
- **Purpose:** Guide users through optimization decisions
- **Type:** Flowchart diagram
- **Shows:** "Render too slow?" → decision branches with solutions

### **34. Instancing Memory Savings Diagram**
- **Purpose:** Visualize instancing benefit
- **Type:** Infographic
- **Shows:** 100 unique objects (high memory) vs 100 linked duplicates (low memory) with icons

### **35. Quick Settings Reference Card**
- **Purpose:** One-stop reference for recommended Cycles settings
- **Type:** Reference infographic
- **Shows:** Recommended values for samples, bounces, denoising, device in clean format

---

## AI Image Generation Prompts

### **Prompt 1: Path Tracing Ray Diagram**
```
Create a technical diagram showing path tracing in action. Scene includes a 3D camera on the left side shooting multiple colored rays (red, blue, green, yellow) into a simple room environment. The rays bounce off surfaces (floor, walls, objects) multiple times before reaching a light source on the ceiling. Each ray path should be clearly visible with different colors. Use arrows to show ray direction. Scene view is from a 45-degree angle to show depth.

Style: Clean technical diagram with geometric shapes for room and objects. 
Background: Dark grey (#2b2b2b) for depth.
Ray colors: Bright distinct colors (red #ff0000, blue #00b0ff, green #00ff00, yellow #ffeb3b).
Surface materials: Simple flat colors (walls: grey, floor: light grey, object: orange).
Labels: "Camera" at start, "Light Source" at ceiling, "Bounce 1", "Bounce 2", etc. along ray paths.
Context: Educational diagram for professional training material explaining path tracing fundamentals.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 2: Ray Tracing vs Path Tracing Comparison**
```
Create a side-by-side comparison diagram illustrating the difference between ray tracing and path tracing. Split the image vertically.

Left panel - Ray Tracing:
- Single ray from camera to object to light
- One ray path shown in blue
- Simple, direct path
- Label: "Ray Tracing - Single Ray"

Right panel - Path Tracing:
- Multiple rays (10-15) from camera in random directions
- Rays in various colors (red, blue, green, yellow, orange)
- Many random bounces creating complex paths
- Label: "Path Tracing - Multiple Samples"

Both panels show same simple scene (camera, sphere, plane, light).
Style: Technical educational diagram with clean geometric shapes.
Background: Dark grey (#2b2b2b).
Labels: White text with clear contrast.
Include small text: "Fast but approximate" under left, "Slow but accurate" under right.
Context: Professional training comparison diagram.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 3: Sample Count Progression Grid**
```
Create a 2x3 grid showing the same 3D scene rendered at increasing sample counts. Each panel shows identical camera angle of a simple scene (chrome sphere on a plane with area light).

Panel arrangement (left to right, top to bottom):
1. "16 Samples" - Extremely noisy, barely recognizable
2. "64 Samples" - Very noisy but shapes visible
3. "256 Samples" - Noisy but acceptable
4. "512 Samples" - Clean with minor noise
5. "1024 Samples" - Very clean
6. "2048 Samples" - Nearly perfect

Each panel labeled in top-left corner with sample count in white text.
Noise should progressively decrease across panels.
Style: Photorealistic 3D renders of same scene at different sample levels.
Background: Dark grey (#2b2b2b) environment.
Object: Chrome/glossy sphere with orange tint visible.
Lighting: Single soft area light creating subtle shadows.
Layout: Grid with thin white dividing lines between panels.
Context: Educational comparison showing sample quality progression.
Technical: 1920x1200 resolution to accommodate 6 panels, PNG format.
```

### **Prompt 4: Cycles Rendering Process Flowchart (Supplemental)**
```
Create a visual flowchart showing the Cycles rendering process with icons and clear flow. 

Flow stages (top to bottom or left to right):
1. "Start Render (F12)" - Play button icon
2. "Load Scene Data" - Folder/file icon
3. "Build BVH" - Tree structure icon
4. "Divide Into Tiles" - Grid icon
5. "Sample Pixels" - Dots/particles icon (emphasize this - multiple samples)
6. "Denoising" - Sparkle/clean icon
7. "Final Image" - Picture frame icon

Each stage connected with arrows showing flow direction.
Style: Modern flat design infographic with icons and short text labels.
Background: Light gradient from white to light grey.
Icons: Simple line art style in purple/blue (#667eea).
Labels: Clear sans-serif font below each icon.
Arrows: Thick, clear directional arrows in matching color.
Include small annotation: "Progressive updates" with circular arrow near sampling stage.
Context: Professional educational infographic for training material.
Technical: 1920x600 horizontal banner format, PNG format.
```

### **Prompt 5: Light Bounce Path Visualization**
```
Create a 3D scene diagram showing a single light ray path with numbered bounces through a simple interior.

Scene elements:
- Camera position (left)
- Ray starting from camera (bright cyan line with arrow)
- Numbered bounce points (1, 2, 3, 4) where ray hits surfaces
- Final connection to ceiling light source

Bounce sequence visualization:
- Bounce 0: Camera origin
- Bounce 1: Hits mirror/glossy object (reflects)
- Bounce 2: Hits white diffuse wall (scatters)
- Bounce 3: Hits grey floor (diffuse)
- Bounce 4: Reaches light source on ceiling

Style: Technical 3D diagram with clean geometric room.
Background: Dark grey (#2b2b2b).
Ray path: Bright cyan (#00ffff) line with arrows showing direction.
Bounce numbers: Circular badges in orange (#ff8c00) at each hit point.
Objects: Simple geometric shapes (cube for mirror, plane for wall/floor).
Labels: "Camera", "Glossy Bounce", "Diffuse Bounce", "Light Source".
View angle: 45-degree isometric to show depth.
Context: Educational diagram showing light path mechanics.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 6: Diffuse vs Glossy vs Transmission Bounce Comparison**
```
Create a three-panel horizontal comparison showing different bounce types.

Panel 1 - Diffuse Bounce:
- Matte red sphere on white plane
- Incoming ray hits sphere, scatters in random directions (multiple exit rays)
- Label: "Diffuse - Random Scatter"
- Exit rays shown as multiple lines in all directions

Panel 2 - Glossy Bounce:
- Mirror/chrome sphere on white plane
- Incoming ray hits sphere, reflects cleanly at angle
- Label: "Glossy - Reflection"
- Single clear reflection ray

Panel 3 - Transmission Bounce:
- Glass sphere on white plane
- Incoming ray enters sphere, refracts through it, exits other side
- Label: "Transmission - Refraction"
- Ray bends as it enters and exits glass

All panels:
- Same camera angle and layout
- Incoming ray in yellow (#ffeb3b)
- Exit rays in cyan (#00ffff)
- Background: Dark grey (#2b2b2b)
- White dividing lines between panels

Style: Technical 3D diagram with ray visualization.
Spheres: High quality material representation (matte, mirror, glass).
Context: Educational comparison showing bounce types.
Technical: 1920x600 horizontal format, PNG format.
```

### **Prompt 7: GPU vs CPU Architecture Diagram**
```
Create a simplified comparison diagram showing GPU vs CPU architecture for rendering.

Left side - CPU:
- 4-16 large circles arranged in grid (representing cores)
- Each circle is substantial in size
- Label: "CPU - Few Powerful Cores"
- Sub-text: "4-16 cores, High per-core performance"
- Show 2-3 ray paths being processed

Right side - GPU:
- Hundreds of tiny dots in dense grid pattern (representing cores)
- Each dot much smaller than CPU circles
- Label: "GPU - Thousands of Small Cores"
- Sub-text: "2000-10000 cores, Massive parallelism"
- Show many ray paths being processed simultaneously

Visual representation:
- Use size difference to show the concept
- CPU cores: Large blue circles (#2196F3)
- GPU cores: Small purple dots (#9C27B0) in dense array
- Ray processing: Small arrows/lines showing work being done
- Background: Clean white or light grey
- Clear dividing line between sections

Bottom comparison text:
- "Rendering Time" with bar chart: CPU (long bar), GPU (short bar)

Style: Clean technical infographic with geometric shapes.
Context: Educational diagram comparing rendering architectures.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 8: Cycles Render Properties Panel Screenshot**
```
Create an annotated screenshot of Blender's Render Properties panel with Cycles selected.

Elements to show:
- Properties panel (right side of Blender interface)
- Render Properties tab icon (camera icon) highlighted
- Render Engine dropdown showing "Cycles" selected
- Several main sections visible: Sampling, Light Paths, Film

Annotations:
- Bright orange arrow pointing to camera icon: "Render Properties"
- Orange box around "Cycles" dropdown: "Select Cycles Engine"
- Callout bubble: "This is where all Cycles settings are configured"

Style: Clean Blender interface screenshot with professional annotations.
Interface theme: Blender default dark theme.
Annotation color: Bright orange (#ff8c00) for visibility.
Arrow style: Bold, clear arrows.
Text: White text on dark semi-transparent bubbles.
Context: Professional training screenshot showing navigation.
Technical: 1920x1080 resolution, PNG format with clear text.
```

### **Prompt 9: Device Selection Screenshot**
```
Create an annotated screenshot showing the Device selection dropdown in Cycles.

Elements visible:
- Render Properties panel
- Device dropdown expanded showing options
- "GPU Compute" option highlighted
- Also visible: "CPU" option

Annotations:
- Orange arrow pointing to Device dropdown
- Label: "Choose GPU Compute for fastest rendering"
- Orange highlight box around GPU Compute option
- Small note: "3-10x faster than CPU"

Style: Blender interface screenshot with clear annotations.
Interface: Dark theme default Blender.
Highlight: Orange (#ff8c00) arrows and boxes.
Text: White on dark semi-transparent backgrounds.
Context: Quick reference for device selection.
Technical: 1200x800 cropped focus on relevant area, PNG format.
```

### **Prompt 10: Sampling Settings Panel Screenshot**
```
Create an annotated screenshot of the Sampling section in Cycles Render Properties.

Elements visible:
- Sampling section expanded
- Render: 512 (slider)
- Viewport: 64 (slider)
- Adaptive Sampling checkbox (checked)
- Noise Threshold: 0.01
- Min Samples: 0
- Denoising section below (collapsed)

Annotations:
- "Render Samples" - arrow pointing to Render slider: "For final output (F12)"
- "Viewport Samples" - arrow pointing to Viewport slider: "For interactive preview"
- "Adaptive Sampling" - checkbox annotation: "Automatic optimization"
- Box highlighting entire section: "Key quality controls"

Style: Blender interface screenshot with professional annotations.
Theme: Dark UI.
Annotations: Orange (#ff8c00) with white text.
Context: Settings configuration reference.
Technical: 1000x1200 vertical crop, PNG format.
```

### **Prompt 11: Denoising Settings Screenshot**
```
Create an annotated screenshot showing Denoising configuration in Cycles.

Elements visible:
- Denoising section (expanded)
- Render checkbox (checked)
- Viewport checkbox (checked)
- Denoiser dropdown showing "OptiX" selected
- Also visible: "OpenImageDenoise" option
- Denoising Data options

Annotations:
- Large orange arrow to Render checkbox: "Enable for final renders - CRITICAL!"
- Arrow to Denoiser dropdown: "OptiX (NVIDIA) or OpenImageDenoise"
- Callout bubble: "Reduces needed samples by 4-8x"
- Green checkmark icon emphasizing importance

Style: Blender interface screenshot with emphasis on critical settings.
Theme: Dark Blender UI.
Annotation colors: Orange (#ff8c00) arrows, green (#4CAF50) checkmark.
Text: Bold white text for visibility.
Context: Essential configuration screenshot.
Technical: 1000x800 crop focusing on denoising, PNG format.
```

### **Prompt 12: Denoising Before/After Comparison**
```
Create a dramatic before/after comparison showing the power of denoising.

Layout: Vertical split screen comparison.

Left panel:
- Label at top: "256 Samples - NO Denoising"
- Render of glass object on surface
- Very noisy/grainy appearance
- Grain visible throughout image
- Render time: "8 minutes" in corner

Right panel:
- Label at top: "256 Samples - WITH Denoising"
- Same exact scene and angle
- Clean, smooth appearance
- Noise removed
- Render time: "8 minutes" in corner (same time!)

Visual emphasis:
- Both sides show same content (glass sphere, soft lighting)
- Left side should have realistic noise/grain pattern
- Right side perfectly clean
- White dividing line between panels
- Labels in white text at top of each panel

Style: Photorealistic 3D renders demonstrating denoising.
Background: Dark grey environment (#2b2b2b).
Lighting: Soft area light creating subtle shadows and reflections.
Context: Before/after comparison for training material.
Technical: 1920x1080 resolution (960px each panel), PNG format.
```

### **Prompt 13: Adaptive Sampling Visualization**
```
Create a visualization showing how adaptive sampling works with a heat map overlay.

Main image:
- Base render of interior scene (room with objects, window light)

Overlay (semi-transparent):
- Heat map colors showing sample distribution
- Blue areas: Stopped early (simple areas like solid walls) - Low sample count
- Green areas: Moderate samples (normal complexity)
- Yellow areas: More samples needed (detailed areas)
- Red areas: Maximum samples (complex lighting, caustics)

Legend in corner:
- Color bar showing: Blue (16 samples) → Green (128) → Yellow (256) → Red (512+)
- Title: "Adaptive Sampling Distribution"

Style: 3D render with heat map data visualization overlay.
Base render: Standard architectural interior.
Heat map: Transparent overlay (40% opacity) with smooth color gradients.
Background: Interior scene lighting.
Legend: Clean color bar with sample count labels.
Context: Educational visualization of adaptive sampling mechanics.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 14: Light Paths Settings Screenshot**
```
Create an annotated screenshot of the Light Paths section in Cycles.

Elements visible:
- Light Paths section (expanded)
- Max Bounces: 12
- Diffuse: 4
- Glossy: 4
- Transmission: 12
- Volume: 0
- Transparent: 8
- Clamping section (Direct: 0, Indirect: 10)
- Fast GI Approximation with Caustics checkboxes

Annotations:
- "Max Bounces" - label: "Total light bounces allowed"
- "Transmission" - highlight: "Important for glass (12+)"
- "Clamping" section - box: "Reduces fireflies"
- Caustics checkboxes - arrow: "Disable if not needed (faster)"

Style: Blender interface with clear functional annotations.
Theme: Dark UI.
Annotations: Orange (#ff8c00) with organized layout.
Context: Complete light path configuration reference.
Technical: 1000x1400 vertical crop, PNG format.
```

### **Prompt 15: Bounce Limit Comparison**
```
Create a four-panel grid comparing interior renders at different bounce limits.

Panel layout (2x2 grid):

Top-left: "2 Bounces - Flat Lighting"
- Interior room very dark
- Only direct light visible
- No indirect lighting
- Harsh shadows
- Unrealistic appearance

Top-right: "4 Bounces - Basic Indirect"
- Interior room somewhat lit
- Some bounce light visible
- Starting to look better
- Still somewhat dark in corners

Bottom-left: "8 Bounces - Good Indirect"
- Interior well-lit
- Natural bounce light throughout
- Realistic appearance
- Good quality

Bottom-right: "12 Bounces - Excellent Indirect"
- Interior beautifully lit
- Full indirect illumination
- Very subtle improvement over 8
- Highest realism

Scene consistency:
- Same interior room in all panels
- Same window light source
- Same camera angle
- Progressive improvement visible

Style: Photorealistic interior renders.
Room: Simple interior with walls, floor, window, furniture.
Lighting: Natural window light entering from one side.
Background: Interior environment.
Labels: White text clearly showing bounce count.
Layout: Thin white grid lines separating panels.
Context: Educational comparison of bounce settings impact.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 16: Caustics Example - Glass with Light Pattern**
```
Create a beautiful render showcasing refractive caustics.

Scene composition:
- Clear glass object (wine glass or geometric crystal shape) on center
- Strong light source above/behind glass
- White or light grey surface below
- Beautiful focused light patterns (caustics) visible on the surface
- Soft shadows complementing the caustics

Caustic characteristics:
- Bright concentrated light patterns below glass
- Organic, flowing shapes created by refraction
- Sharp edges where light is focused
- Gradual falloff to darker areas
- Realistic light behavior through glass

Style: Photorealistic 3D render emphasizing caustic beauty.
Glass: Perfectly clear with IOR 1.45.
Surface: Smooth matte white/grey to clearly show patterns.
Lighting: Strong directional or sun light for clear caustics.
Background: Dark grey (#2b2b2b) fading to black for drama.
Focus: The caustic patterns should be the star of the image.
Context: Example render showing caustics in Cycles.
Technical: 1920x1080 resolution, PNG format, high quality.
```

### **Prompt 17: Refractive vs Reflective Caustics Comparison**
```
Create a side-by-side comparison of the two caustic types.

Left panel - Refractive Caustics:
- Glass sphere or wine glass
- Light passing THROUGH the object
- Focused light patterns on surface below
- Soft, flowing organic patterns
- Label: "Refractive Caustics - Light Through Glass"

Right panel - Reflective Caustics:
- Chrome/mirror curved object (like spoon or curved mirror)
- Light bouncing OFF the object
- Focused light patterns on nearby surface
- Sharp, geometric patterns
- Label: "Reflective Caustics - Light From Mirror"

Both panels:
- Same lighting setup (strong directional light)
- Same surface showing patterns (white matte plane)
- Similar composition for easy comparison
- Clear caustic patterns visible

Style: Photorealistic 3D renders with matched lighting.
Background: Dark grey (#2b2b2b).
Objects: High-quality materials (clear glass, perfect chrome).
Lighting: Strong enough to create clear caustic patterns.
Layout: Vertical split with thin white dividing line.
Context: Educational comparison of caustic types.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 18: Caustics Settings Location Screenshot**
```
Create an annotated screenshot showing caustics enable/disable controls.

Elements visible:
- Light Paths section
- Fast GI Approximation subsection
- Reflective Caustics checkbox (checked)
- Refractive Caustics checkbox (checked)

Annotations:
- Large arrow pointing to Fast GI Approximation: "Caustics Controls"
- Box around both checkboxes: "Check to enable caustics"
- Callout note: "Uncheck for 20-50% speed boost if caustics not needed"
- Icons: Small glass icon next to Refractive, mirror icon next to Reflective

Style: Blender interface screenshot with functional annotations.
Theme: Dark UI.
Annotations: Orange (#ff8c00) arrows and boxes.
Text: Clear white text with important speed note.
Context: Quick reference for caustics settings.
Technical: 800x600 crop focusing on this section, PNG format.
```

### **Prompt 19: Subsurface Scattering Example**
```
Create a before/after comparison demonstrating subsurface scattering.

Layout: Side-by-side comparison.

Left panel:
- Label: "SSS Off - Opaque"
- Object (wax candle or jade/marble sphere) backlit
- No light penetration through material
- Looks solid and opaque
- Dark edges where backlit

Right panel:
- Label: "SSS On - Translucent"
- Same object, same lighting
- Light penetrating and glowing through material edges
- Soft internal glow visible
- Realistic translucency effect
- Warm glow around edges

Scene details:
- Strong light source behind object
- Dark/neutral environment to show effect
- Object should clearly benefit from SSS (organic material)
- Same camera angle and composition both sides

Style: Photorealistic 3D renders demonstrating SSS effect.
Material: Wax, jade, or marble appearance.
Lighting: Strong backlight to showcase translucency.
Background: Dark grey (#2b2b2b).
Context: Educational before/after comparison.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 20: Volume Rendering Example**
```
Create an atmospheric render showcasing volume rendering in Cycles.

Scene composition:
- Interior space (room or corridor)
- Strong light source (window or spot light)
- Visible god rays/light beams through fog/dust
- Volumetric fog creating atmospheric depth
- Light shafts clearly visible cutting through the volume

Volume characteristics:
- Light beams should be prominent
- Gradual density falloff
- Atmospheric haze throughout space
- Shadows cast within the volume
- Mysterious, cinematic mood

Style: Atmospheric photorealistic 3D render.
Environment: Moody interior with dramatic lighting.
Volume: Subtle dust/fog particles catching light.
Lighting: Strong directional light creating visible beams.
Color palette: Cool blues and warm light (contrast).
Context: Demonstration of volume rendering capabilities.
Technical: 1920x1080 resolution, PNG format, cinematic quality.
```

### **Prompt 21: Fireflies Problem Example**
```
Create a render demonstrating the firefly problem in path tracing.

Scene content:
- Glass and metal objects on surface
- Multiple light sources
- Complex lighting scenario
- Scattered bright white pixels throughout image (fireflies)

Firefly characteristics:
- Random bright white pixels (fireflies) scattered across dark areas
- Especially visible in shadows and around reflective/glass surfaces
- Small bright pinpoint artifacts
- Clearly visible noise problem
- Concentrated in areas with complex light paths

Annotation:
- Red circles highlighting several firefly examples
- Label pointing to circled areas: "Fireflies - Bright pixel artifacts"
- Note: "Common with complex lighting, low samples, or caustics"

Style: Photorealistic render with visible artifacts.
Scene: Interior or product shot with glass/metal.
Lighting: Complex setup to cause fireflies.
Background: Dark grey (#2b2b2b) to make fireflies obvious.
Context: Problem demonstration for troubleshooting section.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 22: Clamping Fix for Fireflies**
```
Create a before/after comparison showing clamping solving fireflies.

Layout: Side-by-side comparison.

Left panel:
- Label: "No Clamping - Fireflies Visible"
- Scene with obvious bright white pixel artifacts scattered
- Glass/metal objects with complex reflections
- Fireflies especially in dark areas and around highlights
- Noisy, distracting bright pixels

Right panel:
- Label: "Indirect Clamp: 5.0 - Clean"
- Same exact scene and angle
- Fireflies eliminated
- Clean, smooth appearance
- No bright artifacts
- Natural, realistic lighting

Settings shown:
- Small text overlay showing: "Indirect Clamp: 0" (left), "Indirect Clamp: 5.0" (right)

Style: Photorealistic renders showing clamping effectiveness.
Scene: Product shot or interior with reflective materials.
Background: Dark grey (#2b2b2b).
Layout: Vertical split with dividing line.
Context: Solution demonstration for troubleshooting.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 23: GPU Memory Usage Console Screenshot**
```
Create an annotated screenshot of Blender system console showing memory statistics.

Elements visible:
- System console window (Windows style)
- Blender render output text
- Memory statistics lines highlighted:
  - "Total geometry: 2.4 GB"
  - "Textures: 1.8 GB"
  - "Peak memory: 4.6 GB"
- Render progress information

Annotations:
- Orange arrow pointing to memory lines: "Check these values"
- Callout box: "Compare to your GPU VRAM capacity"
- Note: "If total exceeds VRAM, switch to CPU or optimize"
- Highlight box around key memory statistics

Style: System console screenshot with professional annotations.
Console: Dark background, light colored text (typical console).
Annotations: Orange (#ff8c00) arrows and boxes.
Text: Clear, readable highlights.
Context: Memory monitoring reference.
Technical: 1600x900 console window size, PNG format.
```

### **Prompt 24: Preferences GPU Setup Screenshot**
```
Create an annotated screenshot of Blender Preferences showing GPU configuration.

Elements visible:
- Edit → Preferences window open
- System tab selected (left sidebar)
- Cycles Render Devices section
- GPU devices listed with checkboxes
- Example: "NVIDIA RTX 4070" (checked)
- OptiX/CUDA/HIP options visible
- CPU also listed (optional checkbox)

Annotations:
- Large arrow: "System Tab"
- Box around GPU devices: "Check your GPU(s)"
- Arrow to OptiX selection: "OptiX fastest for NVIDIA RTX"
- Note: "One-time setup - save preferences"
- Green checkmark indicating correct selection

Style: Blender preferences window with clear setup guide.
Interface: Blender dark theme.
Annotations: Orange (#ff8c00) for navigation, green (#4CAF50) for confirmation.
Text: Step-by-step clear labels.
Context: Initial setup guide screenshot.
Technical: 1600x1000 preferences window size, PNG format.
```

### **Prompt 25: Render Region Usage Diagram**
```
Create an annotated diagram showing render region workflow in Blender.

Elements to show:
- Blender camera view of a scene
- Visible drawn region box (orange dashed outline) around specific area
- Rest of image slightly dimmed or greyed out
- Mouse cursor visible drawing the box

Annotations and labels:
- Large text: "Ctrl+B to activate Render Region"
- Arrow showing "Click and drag to draw box"
- Label: "Only this area will render"
- Small note: "Ctrl+Alt+B to clear region"
- Icon: Keyboard shortcut visualization

Visual elements:
- Scene: Simple interior or product shot
- Region box: Bright orange (#ff8c00) dashed line
- Outside region: 50% opacity overlay showing it won't render
- Clean, instructional diagram style

Style: Blender viewport screenshot with instructional overlay.
Interface: Camera view with region tool active.
Annotations: Clear orange highlights and white text.
Context: Quick reference for render region tool.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 26: Resolution Percentage Setting Screenshot**
```
Create an annotated screenshot showing resolution adjustment for test renders.

Elements visible:
- Output Properties panel (printer icon)
- Resolution X: 1920
- Resolution Y: 1080
- Resolution percentage slider: 50%
- Shows resulting resolution: 960 x 540

Annotations:
- Arrow to percentage slider: "Adjust this for quick tests"
- Callout: "50% = 4x faster renders"
- Small chart showing:
  - 100% → Full quality (slowest)
  - 50% → Quarter pixels (4x faster)
  - 25% → 1/16 pixels (16x faster)
- Note: "Use for testing, render at 100% when ready"

Style: Blender interface with practical time-saving tip.
Theme: Dark UI.
Annotations: Orange (#ff8c00) with helpful speed comparisons.
Text: Clear labels with time savings emphasized.
Context: Workflow optimization reference.
Technical: 1000x800 crop, PNG format.
```

### **Prompt 27: Three-Point Lighting Setup Diagram**
```
Create a top-down lighting diagram for the project.

Elements (bird's eye view):
- Camera position (bottom of diagram, rectangle icon)
- Central object (circle or square in center)
- Ground plane (large square)

Three lights positioned:
1. Key Light (top-right, 45 degrees)
   - Largest area light icon
   - Label: "Key Light - Main illumination"
   - Orange glow indicating position

2. Fill Light (left side, lower)
   - Medium area light icon
   - Label: "Fill Light - Softens shadows"
   - Blue glow indicating position

3. Rim/Back Light (behind object)
   - Small light icon
   - Label: "Rim Light - Edge highlight"
   - Purple glow indicating position

Visual style:
- Clean, schematic top-down view
- Lights shown as glowing icons with directional indicators
- Distance lines showing approximate positioning
- Angle measurements (45°, etc.)
- Legend showing light intensities (Key: 100-150W, Fill: 30-50W, Rim: 50-100W)

Style: Technical lighting diagram with clear positioning.
Background: Clean white or light grey.
Icons: Simple but clear light representations with direction arrows.
Labels: Clean sans-serif text with organized annotations.
Context: Project setup reference for three-point lighting.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 28: Glass Material Settings Screenshot**
```
Create an annotated screenshot of Principled BSDF with glass material settings.

Elements visible in Shader Editor:
- Principled BSDF node (expanded)
- Key settings clearly visible:
  - Base Color: Slight blue/white tint
  - Metallic: 0.0
  - Roughness: 0.0
  - Transmission: 1.0
  - IOR: 1.45

Material preview:
- Small preview sphere showing glass appearance
- Clear, transparent look

Annotations:
- Large arrow to Transmission: "1.0 for clear glass - CRITICAL"
- Arrow to IOR: "1.45 for glass (1.33 for water)"
- Arrow to Roughness: "0.0 for perfectly clear"
- Box around key settings: "Essential glass settings"
- Note: "Needs 12+ Transmission bounces in Light Paths"

Style: Blender Shader Editor with professional material setup guide.
Theme: Dark UI.
Annotations: Orange (#ff8c00) emphasizing critical values.
Preview: Clear glass ball visible.
Context: Material configuration reference for project.
Technical: 1600x1000 shader editor view, PNG format.
```

### **Prompt 29: Metal Material Settings Screenshot**
```
Create an annotated screenshot of Principled BSDF with metal material settings.

Elements visible in Shader Editor:
- Principled BSDF node (expanded)
- Key settings clearly visible:
  - Base Color: Gold/silver metallic color
  - Metallic: 1.0
  - Roughness: 0.1-0.3
  - Clear Coat: 0.5 (optional)

Material preview:
- Preview sphere showing polished metal
- Clear reflections visible

Annotations:
- Arrow to Metallic: "1.0 for metal - CRITICAL"
- Arrow to Roughness: "0.1-0.3 for polished"
- Arrow to Base Color: "Metal tint (gold, silver, copper)"
- Box highlighting: "Essential metal settings"
- Note: "Lower roughness = sharper reflections"

Style: Blender Shader Editor with metal material guide.
Theme: Dark UI.
Annotations: Orange (#ff8c00) with clear labels.
Preview: Shiny metal sphere visible.
Context: Material configuration reference.
Technical: 1600x1000 shader editor view, PNG format.
```

### **Prompt 30: Progressive Render Examples - Glass Object**
```
Create a four-panel time progression showing render developing.

Panel layout (2x2 grid):

Top-left: "10% Complete - 51/512 samples"
- Very noisy, barely recognizable scene
- Glass object visible but extremely grainy
- High noise throughout

Top-right: "25% Complete - 128/512 samples"
- Still noisy but scene clearer
- Glass starting to look transparent
- Reflections forming

Bottom-left: "50% Complete - 256/512 samples"
- Much cleaner, acceptable quality
- Glass looks good, some minor noise
- Most details visible

Bottom-right: "100% Complete - 512/512 samples + Denoising"
- Perfect clean result
- Glass beautifully rendered
- No noise, photorealistic

Scene consistency:
- Same glass object on surface all panels
- Same camera angle
- Same lighting
- Progressive quality improvement

Style: Photorealistic renders at different completion stages.
Object: Clear glass wine glass or sphere.
Background: Dark grey (#2b2b2b).
Lighting: Soft dramatic lighting.
Labels: White text showing completion percentage and samples.
Layout: Grid with thin dividing lines.
Context: Demonstration of progressive rendering in Cycles.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 31: Samples and Render Time Chart**
```
Create an infographic showing the relationship between samples, render time, and quality.

Chart type: Combined bar chart and line graph.

X-axis: Sample counts (64, 128, 256, 512, 1024, 2048, 4096)
Y-axis left: Render time (minutes) - Bar chart
Y-axis right: Quality score (0-10) - Line graph

Data visualization:
- Blue bars showing exponential render time increase
- Green line showing quality improvement (logarithmic curve)
- Sweet spot highlighted (256-512 samples with denoising)

Additional elements:
- Title: "Samples vs Time vs Quality"
- Annotation showing "Denoising Zone" (256-512 samples)
- Callout: "Best balance for most scenes"
- Small note: "Without denoising" line vs "With denoising" line showing difference

Visual markers:
- Red zone: 2048+ samples (diminishing returns)
- Yellow zone: 512-1024 samples (high quality)
- Green zone: 256-512 samples with denoising (optimal)
- Orange zone: Below 256 (may need more)

Style: Professional data visualization / infographic.
Colors: Clear, distinct colors for data series.
Background: Clean white or light grey.
Labels: Clear axis labels and legends.
Context: Educational chart explaining sample choices.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 32: Eevee vs Cycles Quality Comparison**
```
Create a dramatic side-by-side comparison of Eevee and Cycles rendering same scene.

Layout: Vertical split comparison.

Left panel - Eevee:
- Label: "Eevee - Real-Time (Fast)"
- Scene with glass and metal objects
- Approximate reflections and transparency
- Screen-space limitations visible
- Some artifacts or missing effects
- Render time: "30 seconds"
- Quality: Good but not perfect

Right panel - Cycles:
- Label: "Cycles - Path Tracing (Accurate)"
- Same exact scene and camera
- Physically accurate reflections and refraction
- Perfect glass transparency
- Realistic caustics and lighting
- Render time: "5 minutes"
- Quality: Photorealistic

Scene details:
- Glass object (clear quality difference)
- Metal/chrome object (reflection quality difference)
- Complex lighting (shows Cycles' advantage)
- Same composition for fair comparison

Style: Photorealistic renders showing quality difference.
Scene: Product-style shot with challenging materials.
Background: Studio environment, dark grey (#2b2b2b).
Layout: Clear split with labels and render times.
Context: Educational comparison of render engines.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 33: Optimization Decision Tree**
```
Create a flowchart decision tree for render optimization.

Starting point (top):
- "Render Too Slow?" (large box at top)

First level branches:
- "Yes" → Continue down tree
- "No" → "Great! You're done" (green box)

Optimization path (decision nodes):
1. "Using GPU?" 
   - No → "Switch to GPU Compute" (solution box)
   - Yes → Continue

2. "Denoising enabled?"
   - No → "Enable denoising NOW!" (urgent box in red)
   - Yes → Continue

3. "Samples over 512?"
   - Yes → "Reduce to 256-512" (solution box)
   - No → Continue

4. "Test at full resolution?"
   - Yes → "Use 50% for tests" (solution box)
   - No → Continue

5. "Many bounces (>12)?"
   - Yes → "Reduce to 8-12" (solution box)
   - No → Continue

6. "Caustics visible in shot?"
   - No → "Disable caustics" (solution box)
   - Yes → Continue

7. "Still slow?"
   - "Optimize geometry/textures" (solution box)

Visual elements:
- Diamond shapes for questions
- Rectangle boxes for solutions
- Green boxes for "done" states
- Red box for critical action (denoising)
- Orange boxes for solutions
- Clear arrows showing flow

Style: Clean flowchart with professional design.
Colors: Blue questions, orange solutions, green success, red urgent.
Background: White or light grey.
Text: Clear, readable font.
Context: Troubleshooting guide flowchart.
Technical: 1200x1600 vertical format, PNG format.
```

### **Prompt 34: Instancing Memory Savings Diagram**
```
Create an infographic showing instancing memory benefit.

Layout: Side-by-side comparison with memory usage visualization.

Left side - Without Instancing:
- Grid showing 100 unique tree objects (small icons)
- Each tree icon slightly different (unique)
- Memory bar: Long red bar
- Label: "100 Unique Objects"
- Memory usage: "12.5 GB" (large number in red)
- Text: "Each object loads into memory separately"

Right side - With Instancing (Alt+D):
- Grid showing 100 identical tree objects (same icon repeated)
- All tree icons identical (instances)
- Memory bar: Short green bar (much smaller)
- Label: "100 Linked Instances"
- Memory usage: "125 MB" (small number in green)
- Text: "Single object + 100 references"

Visual comparison:
- Large "100x" reduction badge between sides
- Memory bars clearly showing the difference
- Happy/sad face icons (sad on left, happy on right)
- Arrows showing "One master object" on right side

Style: Clean infographic with clear memory visualization.
Icons: Simple tree silhouettes for object representation.
Colors: Red for high memory usage, green for low.
Bars: Horizontal bar chart showing memory comparison.
Context: Educational diagram explaining instancing benefit.
Technical: 1920x1080 resolution, PNG format.
```

### **Prompt 35: Quick Settings Reference Card**
```
Create a one-page reference card with recommended Cycles settings.

Layout: Clean organized sections in a single reference sheet.

Title (top): "Cycles Quick Reference - Recommended Settings"

Section 1 - Essential Settings:
- Device: GPU Compute
- Render Samples: 256-512
- Viewport Samples: 32-64
- Denoising: Enabled (OptiX or OpenImageDenoise)

Section 2 - Light Paths:
- Max Bounces: 12
- Diffuse: 4
- Glossy: 6
- Transmission: 12
- Volume: 0

Section 3 - Optimization:
- Adaptive Sampling: Enabled
- Noise Threshold: 0.01
- Indirect Clamp: 3-10
- Caustics: Disable if not visible

Section 4 - When to Adjust:
- Glass-heavy scene: Transmission 16
- Indoor scene: Diffuse 6-8, Max 16
- Speed priority: All bounces lower
- Ultra quality: Samples 1024+

Color coding:
- Green boxes: Recommended defaults
- Yellow boxes: Adjust for specific scenes
- Blue boxes: Optimization tips

Visual style:
- Clean table/card layout
- Easy to scan and reference
- Icons for quick visual recognition
- Clear hierarchy of information

Style: Professional reference card / cheat sheet.
Background: White or light grey with subtle texture.
Accent colors: Section headers in purple (#667eea).
Text: Clear, organized, easy to read.
Context: Quick reference for lesson review.
Technical: 1920x1200 resolution for print quality, PNG format.
```

---

## SVG Diagram Recommendations

Images that work best as SVG diagrams:

1. **Path Tracing Ray Diagram** (#1) - Geometric paths and arrows, scales well
2. **Ray Tracing vs Path Tracing Comparison** (#2) - Simple shapes and lines
3. **Light Bounce Path Visualization** (#5) - Clean geometric paths with labels
4. **Diffuse vs Glossy vs Transmission Bounce Comparison** (#6) - Simple sphere diagrams with rays
5. **GPU vs CPU Architecture Diagram** (#7) - Abstract representation with shapes
6. **Cycles Rendering Process Flowchart** (#4) - Flow diagram with icons and text
7. **Three-Point Lighting Setup Diagram** (#27) - Top-down schematic view
8. **Optimization Decision Tree** (#33) - Flowchart structure
9. **Instancing Memory Savings Diagram** (#34) - Infographic with simple icons
10. **Quick Settings Reference Card** (#35) - Text-based reference table
11. **Samples and Render Time Chart** (#31) - Data visualization graph

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, lines, arrows, and simple visual elements that don't require photorealistic detail. SVG format provides:
- Perfect scaling at any resolution
- Smaller file sizes than raster
- Crisp text rendering
- Easy editing and updates
- Ideal for diagrams, flowcharts, and technical illustrations

---

## Image Placement Suggestions in HTML

### Section: What is Path Tracing (id="what-is-path-tracing")
- **After "Understanding Path Tracing" paragraph:** Insert Image #1 (Path Tracing Ray Diagram)
- **After "Ray Tracing vs Path Tracing" heading:** Insert Image #2 (Ray Tracing vs Path Tracing Comparison)
- **Within "The Noise-Quality Trade-off" card:** Insert Image #3 (Sample Count Progression Grid)

### Section: How Cycles Works (id="how-cycles-works")
- **After the existing Mermaid flowchart:** Insert Image #4 (Cycles Rendering Process Flowchart) as supplemental
- **Within "Light Path Fundamentals" card:** Insert Image #5 (Light Bounce Path Visualization)
- **After "Types of bounces" list:** Insert Image #6 (Diffuse vs Glossy vs Transmission Bounce Comparison)
- **Within "GPU vs CPU Architecture" card:** Insert Image #7 (GPU vs CPU Architecture Diagram)

### Section: Cycles Basic Settings (id="basic-settings")
- **Within "Accessing Cycles Settings" card:** Insert Image #8 (Cycles Render Properties Panel Screenshot)
- **Within "Switching to Cycles" card, after step-by-step:** Insert Image #9 (Device Selection Screenshot)
- **Within "Render Device Configuration" card:** Insert Image #24 (Preferences GPU Setup Screenshot)

### Section: Samples and Denoising (id="samples-denoising")
- **Within "Render Samples Setting" card:** Insert Image #10 (Sampling Settings Panel Screenshot)
- **Within "Enabling and Configuring Denoising" card:** Insert Image #11 (Denoising Settings Screenshot)
- **After "Denoising Technology" explanation:** Insert Image #12 (Denoising Before/After Comparison)
- **Within "Adaptive Sampling" card:** Insert Image #13 (Adaptive Sampling Visualization)

### Section: Light Paths and Bounces (id="light-paths")
- **Within "Light Path Settings" card:** Insert Image #14 (Light Paths Settings Screenshot)
- **After "Bounce Recommendations by Scene":** Insert Image #15 (Bounce Limit Comparison)

### Section: Caustics and Complex Lighting (id="caustics")
- **After "Understanding Caustics" explanation:** Insert Image #16 (Caustics Example)
- **Within "Understanding Caustics" card:** Insert Image #17 (Refractive vs Reflective Caustics Comparison)
- **Within "Enabling Caustics in Cycles" card:** Insert Image #18 (Caustics Settings Location Screenshot)
- **Within "Subsurface Scattering" card:** Insert Image #19 (Subsurface Scattering Example)
- **Within "Volume Rendering" card:** Insert Image #20 (Volume Rendering Example)

### Section: GPU vs CPU Rendering (id="gpu-cpu")
- **Within "Detailed Comparison" card, after table:** Reference Image #7 (GPU vs CPU Architecture Diagram) again or place here if not used earlier
- **Within "Checking Memory Usage" card:** Insert Image #23 (GPU Memory Usage Console Screenshot)

### Section: Optimization Strategies (id="optimization")
- **Within "Render Region" card:** Insert Image #25 (Render Region Usage Diagram)
- **Within "Resolution and Output" card:** Insert Image #26 (Resolution Percentage Setting Screenshot)
- **After "Quick Optimization Checklist":** Insert Image #33 (Optimization Decision Tree)
- **Within "Geometry Optimization" card:** Insert Image #34 (Instancing Memory Savings Diagram)

### Section: Troubleshooting Cycles (id="troubleshooting")
- **Within "Fireflies" problem card:** Insert Image #21 (Fireflies Problem Example)
- **After firefly fixes list:** Insert Image #22 (Clamping Fix for Fireflies)
- **At end of troubleshooting section:** Insert Image #35 (Quick Settings Reference Card)

### Section: Project (id="project")
- **Within Part 2 (Cycles Configuration):** Insert Image #31 (Samples and Render Time Chart)
- **Within Part 3 (Create Materials):** Insert Image #28 (Glass Material Settings) and Image #29 (Metal Material Settings)
- **Within Part 4 (Professional Lighting):** Insert Image #27 (Three-Point Lighting Setup Diagram)
- **Within Part 5 (Test and Optimize):** Insert Image #30 (Progressive Render Examples)
- **Within Part 6 (Final Render):** Insert Image #32 (Eevee vs Cycles Quality Comparison)

---

## File Naming Convention

```
lesson_19_01_path_tracing_ray_diagram.svg
lesson_19_02_ray_vs_path_comparison.svg
lesson_19_03_sample_progression_grid.png
lesson_19_04_render_process_flowchart.svg
lesson_19_05_light_bounce_visualization.svg
lesson_19_06_bounce_types_comparison.svg
lesson_19_07_gpu_cpu_architecture.svg
lesson_19_08_render_properties_screenshot.png
lesson_19_09_device_selection_screenshot.png
lesson_19_10_sampling_settings_screenshot.png
lesson_19_11_denoising_settings_screenshot.png
lesson_19_12_denoising_comparison.png
lesson_19_13_adaptive_sampling_viz.png
lesson_19_14_light_paths_screenshot.png
lesson_19_15_bounce_limit_comparison.png
lesson_19_16_caustics_example.png
lesson_19_17_caustics_types_comparison.png
lesson_19_18_caustics_settings_screenshot.png
lesson_19_19_subsurface_scattering_example.png
lesson_19_20_volume_rendering_example.png
lesson_19_21_fireflies_problem.png
lesson_19_22_clamping_fix.png
lesson_19_23_memory_usage_console.png
lesson_19_24_preferences_gpu_setup.png
lesson_19_25_render_region_diagram.png
lesson_19_26_resolution_percentage_screenshot.png
lesson_19_27_lighting_setup_diagram.svg
lesson_19_28_glass_material_screenshot.png
lesson_19_29_metal_material_screenshot.png
lesson_19_30_progressive_render_examples.png
lesson_19_31_samples_time_chart.svg
lesson_19_32_eevee_vs_cycles_comparison.png
lesson_19_33_optimization_decision_tree.svg
lesson_19_34_instancing_memory_diagram.svg
lesson_19_35_quick_settings_reference.svg
```

**Format guidelines:**
- Two-digit numbering (01-35)
- Descriptive names with underscores
- .svg for diagrams, flowcharts, and technical illustrations
- .png for screenshots, renders, and photorealistic images

---

## Production Priority

### High Priority (Essential for Understanding)

1. **Image #12 - Denoising Before/After Comparison** - Demonstrates the single most important optimization technique
2. **Image #2 - Ray Tracing vs Path Tracing Comparison** - Core concept understanding
3. **Image #10 - Sampling Settings Panel Screenshot** - Critical configuration reference
4. **Image #11 - Denoising Settings Screenshot** - Essential for modern workflow
5. **Image #8 - Cycles Render Properties Panel Screenshot** - Navigation and access
6. **Image #14 - Light Paths Settings Screenshot** - Key configuration area
7. **Image #28 - Glass Material Settings Screenshot** - Project-critical setup
8. **Image #15 - Bounce Limit Comparison** - Shows visual impact of key setting
9. **Image #35 - Quick Settings Reference Card** - Comprehensive quick reference
10. **Image #3 - Sample Count Progression Grid** - Visualizes fundamental concept

**Rationale:** These images directly support primary learning objectives and are referenced throughout the lesson. They demonstrate critical concepts (denoising, samples, bounces) and provide essential navigation/configuration guidance. Without these images, students would struggle with key workflow steps.

### Medium Priority (Helpful but not Critical)

11. **Image #1 - Path Tracing Ray Diagram** - Helps visualize the concept
12. **Image #16 - Caustics Example** - Shows beautiful effect worth understanding
13. **Image #22 - Clamping Fix for Fireflies** - Solves common problem
14. **Image #27 - Three-Point Lighting Setup Diagram** - Project guidance
15. **Image #32 - Eevee vs Cycles Quality Comparison** - Context for engine choice
16. **Image #5 - Light Bounce Path Visualization** - Clarifies bounce concept
17. **Image #6 - Diffuse vs Glossy vs Transmission Bounce Comparison** - Bounce type understanding
18. **Image #9 - Device Selection Screenshot** - Quick device setup reference
19. **Image #18 - Caustics Settings Location Screenshot** - Settings navigation
20. **Image #25 - Render Region Usage Diagram** - Workflow optimization tip
21. **Image #26 - Resolution Percentage Setting Screenshot** - Testing workflow
22. **Image #31 - Samples and Render Time Chart** - Helps decision making
23. **Image #33 - Optimization Decision Tree** - Troubleshooting guide

**Rationale:** These enhance understanding and provide helpful visual references but the concepts can be grasped through text if needed. They add significant value to the learning experience and should be included when possible.

### Lower Priority (Nice to Have)

24. **Image #4 - Cycles Rendering Process Flowchart** - Supplements existing Mermaid diagram
25. **Image #7 - GPU vs CPU Architecture Diagram** - Interesting but not essential
26. **Image #13 - Adaptive Sampling Visualization** - Advanced concept
27. **Image #17 - Refractive vs Reflective Caustics Comparison** - Refinement detail
28. **Image #19 - Subsurface Scattering Example** - Specialized effect
29. **Image #20 - Volume Rendering Example** - Rarely used feature
30. **Image #21 - Fireflies Problem Example** - Problem demonstration
31. **Image #23 - GPU Memory Usage Console Screenshot** - Advanced troubleshooting
32. **Image #24 - Preferences GPU Setup Screenshot** - One-time setup
33. **Image #29 - Metal Material Settings Screenshot** - Supplemental to glass
34. **Image #30 - Progressive Render Examples** - Interesting but not critical
35. **Image #34 - Instancing Memory Savings Diagram** - Optimization detail

**Rationale:** These are supplementary materials that enhance the experience but aren't necessary for core concept mastery. They address edge cases, advanced topics, or provide redundant information that's covered adequately in text.

---

## Notes

### Style Consistency Guidelines

**Color Palette (Standard across all images):**
- Background dark grey: #2b2b2b
- Selection highlight orange: #ff8c00
- Wireframe/rays cyan: #00ffff or #00b0ff
- Normals/accent blue: #2196F3
- Warning/problem red: #f44336
- Success/solution green: #4CAF50
- Metal purple accent: #9C27B0
- Text white: #ffffff

**Blender Version:** 4.0+ for UI consistency

**View Angles:** 
- Diagrams: 45-degree isometric for depth
- Screenshots: Actual Blender interface at default viewport
- Renders: Professional product photography angles

**Selection Highlighting:**
- Bright orange (#ff8c00) for annotations
- 2-3px stroke width for arrows
- Semi-transparent bubbles for callout text
- Green checkmarks for confirmations

**Typography:**
- Interface screenshots: System default (as-is in Blender)
- Diagrams: Clean sans-serif (Arial, Helvetica, or similar)
- Callouts: Bold for emphasis, regular for descriptions
- Minimum 14pt for readability at scale

**Annotation Style:**
- Arrows: Bold, 2-3px, orange (#ff8c00)
- Boxes: 2px stroke, orange, 10% fill opacity
- Callout bubbles: Dark grey (#333) fill, white text, rounded corners
- Labels: Clear, concise, positioned to avoid obscuring content

### Accessibility Considerations

- **Color blindness:** Use patterns/shapes in addition to color coding
- **Text contrast:** Minimum 4.5:1 ratio against backgrounds
- **Alt text ready:** All images described clearly in prompts for screen readers
- **Scalability:** SVG diagrams scale without quality loss
- **Clear labels:** No reliance on color alone to convey information

### Technical Specifications

**Screenshot Resolution:** 
- Full interface: 1920x1080 minimum
- Panel crops: 1000x800 to 1600x1000
- Console windows: 1600x900

**Image Format:**
- PNG for screenshots, renders, and photorealistic images
- SVG for diagrams, flowcharts, technical illustrations
- JPG avoided (use PNG for quality)

**File Size Target:**
- Screenshots: <500KB with PNG optimization
- Renders: <1MB (balance quality and loading)
- SVG diagrams: <100KB (text and vectors)

**Compression:**
- PNG: Use pngquant or similar for optimization
- Maintain quality: No visible artifacts
- Web-optimized: sRGB color space

**Responsive Sizing:**
- Design at 1920px width
- Should scale well to 768px (tablets)
- Critical details readable at 320px (mobile)
- Consider mobile-first for complex diagrams

### Special Considerations for This Lesson

**Rendering Complexity:**
- Lesson focuses on photorealism - some example renders should showcase this
- Balance between showing artifacts (for learning) and beautiful results
- Progressive render examples need to be actual Cycles renders, not simulated

**Technical Accuracy:**
- Screenshots must reflect Blender 4.0+ interface
- Settings shown must match recommended values in lesson text
- No outdated UI or deprecated features

**Demonstration Quality:**
- Caustics examples need to clearly show the effect
- Firefly problems need to be obvious but not exaggerated
- Before/after comparisons must use identical scenes/angles

**Educational Focus:**
- Images should teach, not just decorate
- Every image has clear purpose stated
- Annotations guide attention to important elements

### Production Notes

**Blender Scene Setup:**
- Create master .blend file with all example scenes
- Consistent lighting rig for product shots
- Camera presets saved for repeated angles
- Material library for glass, metal, etc.

**Lighting Setup:**
- Three-point lighting template saved
- HDRI environment for caustics examples
- Studio lighting for product shots
- Consistent exposure across similar images

**Camera Angles:**
- 45-degree isometric for diagrams
- Straight-on for UI screenshots (actual Blender viewport)
- Beauty shots at professional angles (eye-level or slightly elevated)

**Batch Processing:**
- Screenshots can be captured in sequence
- Renders can be queue-rendered overnight
- SVG diagrams can reuse components

**Version Control:**
- Save .blend files for all rendered images
- Keep SVG source files editable
- Document camera/lighting settings
- Note render settings used for each image

**Template Reuse:**
- Three-point lighting setup reusable
- Material setups can be saved to library
- Camera angles can be saved as presets
- Annotation styles can be templates in image editor

---

## Quality Checklist

Before finalizing images, verify:

- [x] All major lesson sections have appropriate image support
- [x] Each image has clear educational purpose defined
- [x] AI prompts are detailed and specific with color codes (#hexcodes) and style guidance
- [x] SVG recommendations are justified with clear rationale for vector format benefits
- [x] Placement suggestions reference actual HTML section IDs from lesson file
- [x] File naming follows consistent convention (lesson_19_XX_descriptive_name.ext)
- [x] Priority ranking is logical with clear rationale for each tier
- [x] Style/accessibility notes are comprehensive and practical
- [x] Output is well-organized with clear sections and easy navigation
- [x] Technical specifications cover all production needs (resolution, format, optimization)
- [x] Special considerations address lesson-specific requirements (rendering quality, technical accuracy)

---

## Additional Recommendations

### Image Creation Workflow

**Phase 1: Screenshots (Week 1)**
- Capture all Blender interface screenshots
- Annotate with consistent style
- Optimize and save as PNG

**Phase 2: Diagrams (Week 1-2)**
- Create SVG technical diagrams
- Use consistent color palette
- Export at multiple sizes for testing

**Phase 3: Renders (Week 2-3)**
- Set up Blender scenes for renders
- Queue overnight renders for quality images
- Post-process if needed (color correction, composition)

**Phase 4: Composites (Week 3)**
- Create comparison grids
- Build before/after layouts
- Final touch-ups and optimization

### Alternative Approaches

**Video Clips (Future Enhancement):**
- Progressive render time-lapse video
- Real-time denoising demonstration
- Interactive bounce count adjustment

**Interactive Elements:**
- Sample count slider showing quality/time
- Before/after slider for comparisons
- Clickable lighting diagram

### Future Enhancements

**Downloadable Assets:**
- Example .blend files for students
- Material library (glass, metal presets)
- Lighting rig templates

**Student Exercises:**
- Sample images for optimization practice
- Scenes for troubleshooting exercises
- Reference images for comparison

**Advanced Content:**
- Additional caustics examples
- Complex material setups
- Render farm configuration guide

---

## Summary

**Total Images Identified:** 35 images covering all aspects of Cycles path tracing

**Breakdown by Type:**
- Screenshots: 12 (UI navigation and settings)
- Diagrams/SVG: 11 (technical explanations and flowcharts)
- Renders: 12 (examples and comparisons)

**Key Focus Areas:**
1. Fundamental concepts (path tracing, samples, bounces)
2. Configuration guidance (screenshots and settings)
3. Problem-solving (troubleshooting and optimization)
4. Project support (material setups, lighting diagrams)
5. Quality reference (quick reference card)

**Production Timeline Estimate:**
- Week 1: Screenshots and simple diagrams (12-15 images)
- Week 2: Complex diagrams and renders (12-15 images)
- Week 3: Comparisons and final touches (8-10 images)

**Most Critical Images:** Focus on High Priority tier first (Images #1-10) as these provide maximum educational value and directly support core learning objectives.

This comprehensive image requirements document provides all necessary information for creating professional, educational visual content that will significantly enhance Lesson 19's effectiveness in teaching Cycles path tracing concepts.