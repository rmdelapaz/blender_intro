# Image Requirements for Lesson 18: Eevee Real-Time Rendering

## Task Summary
**Lesson:** lesson_18_eevee_realtime_rendering.html
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** November 11, 2025

---

## Image List for Lesson 18

### **1. Real-Time vs Ray Tracing Comparison Diagram**
- **Purpose:** Visualize the fundamental difference between rasterization and path tracing
- **Type:** SVG diagram
- **Shows:** Split diagram showing Eevee's rasterization pipeline vs Cycles' ray tracing approach with simplified visual metaphors

### **2. Eevee Rendering Pipeline Flowchart**
- **Purpose:** Educational visualization of Eevee's 4-step rendering process
- **Type:** SVG diagram
- **Shows:** Step 1: Rasterization → Step 2: Shading → Step 3: Screen Space Effects → Step 4: Post-Processing

### **3. Screen Space Concept Illustration**
- **Purpose:** Help students understand the "screen space" limitation
- **Type:** Diagram/Composite
- **Shows:** Camera view with visible and non-visible objects, demonstrating what screen space effects can and cannot see

### **4. Eevee vs Cycles Side-by-Side Render**
- **Purpose:** Visual quality comparison between the two engines
- **Type:** Composite screenshot
- **Shows:** Same scene rendered in both Eevee (left) and Cycles (right) with quality differences highlighted

### **5. Eevee Render Properties Panel**
- **Purpose:** UI reference for finding Eevee settings
- **Type:** Annotated screenshot
- **Shows:** Blender's Render Properties panel with Eevee selected, key sections highlighted

### **6. Sampling Settings Explained**
- **Purpose:** Clarify render vs viewport samples
- **Type:** Annotated screenshot
- **Shows:** Sampling section with annotations explaining render samples, viewport samples, and their effects

### **7. Bloom Effect Before/After**
- **Purpose:** Demonstrate bloom's visual impact
- **Type:** Composite
- **Shows:** Scene with bright lights - left without bloom, right with bloom enabled

### **8. Bloom Settings Panel**
- **Purpose:** UI reference for bloom configuration
- **Type:** Annotated screenshot
- **Shows:** Bloom settings with threshold, radius, intensity controls annotated

### **9. Screen Space Reflections Demo**
- **Purpose:** Show SSR in action and its limitations
- **Type:** Composite
- **Shows:** Reflective surface showing both on-screen and off-screen reflection limitations

### **10. Screen Space Refraction Setup**
- **Purpose:** Step-by-step visual guide for glass materials
- **Type:** Composite screenshot
- **Shows:** Material settings panel with required settings highlighted (Transmission, IOR, Blend Mode, Screen Space Refraction)

### **11. Ambient Occlusion Comparison**
- **Purpose:** Demonstrate AO's impact on depth perception
- **Type:** Composite
- **Shows:** Same scene without AO (left) vs with AO (right)

### **12. Shadow Settings Panel**
- **Purpose:** UI reference for shadow configuration
- **Type:** Annotated screenshot
- **Shows:** Shadow settings with Cube Size, Cascade Size, High Bitdepth, Soft Shadows labeled

### **13. Shadow Quality Comparison**
- **Purpose:** Show impact of shadow map resolution
- **Type:** Composite
- **Shows:** Low resolution (512) vs high resolution (2048) shadow examples

### **14. Shadow Artifacts Visual Guide**
- **Purpose:** Help identify and fix common shadow issues
- **Type:** Composite
- **Shows:** Examples of shadow acne, peter panning, and pixelation with labels

### **15. Irradiance Volume Setup**
- **Purpose:** Visual guide for placing and scaling irradiance volumes
- **Type:** Annotated screenshot
- **Shows:** Scene with irradiance volume visible, scale handles, and resolution settings panel

### **16. Reflection Cubemap Setup**
- **Purpose:** Visual guide for reflection probe placement
- **Type:** Annotated screenshot
- **Shows:** Scene with reflection cubemap probe, influence sphere visible, settings panel

### **17. Light Probe Workflow Diagram**
- **Purpose:** Comprehensive workflow visualization
- **Type:** SVG flowchart
- **Shows:** Step-by-step process from adding probes → positioning → baking → checking results

### **18. Material Blend Mode Options**
- **Purpose:** Explain different transparency modes
- **Type:** Composite
- **Shows:** Four panels showing Opaque, Alpha Clip, Alpha Hashed, Alpha Blend with visual examples

### **19. Glass Material Setup Guide**
- **Purpose:** Complete visual checklist for Eevee glass
- **Type:** Composite screenshot
- **Shows:** Principled BSDF settings, Material Settings panel, and Render Settings with all required options highlighted

### **20. Emission and Bloom Interaction**
- **Purpose:** Show how emission strength affects bloom
- **Type:** Composite
- **Shows:** Same emissive object with different emission strengths and resulting bloom effects

### **21. Performance Optimization Checklist**
- **Purpose:** Quick reference infographic
- **Type:** SVG infographic
- **Shows:** Hierarchical list of optimization techniques with priority indicators

### **22. Viewport vs Render Mode Comparison**
- **Purpose:** Show why viewport differs from render
- **Type:** Composite screenshot
- **Shows:** Same scene in viewport rendered mode (left) vs final render (right) with sample counts labeled

### **23. Troubleshooting Decision Tree**
- **Purpose:** Visual problem-solving guide
- **Type:** SVG flowchart
- **Shows:** Common problems → diagnostic questions → solutions

### **24. Contact Shadows Detail**
- **Purpose:** Show fine detail that contact shadows provide
- **Type:** Composite
- **Shows:** Close-up of object contact point without (left) and with (right) contact shadows

### **25. Eevee vs Cycles Decision Flowchart**
- **Purpose:** Help users choose the right engine
- **Type:** Enhanced mermaid diagram (already in HTML)
- **Shows:** Decision tree from project type → final engine recommendation

### **26. Light Threshold Visualization**
- **Purpose:** Explain how light threshold works
- **Type:** Diagram
- **Shows:** Multiple lights with varying brightness, threshold line, and which lights cast shadows

### **27. Texture Resolution Strategy**
- **Purpose:** Infographic for texture optimization
- **Type:** SVG infographic
- **Shows:** Scene depth zones (close/mid/far) with recommended texture resolutions

### **28. Project Reference Image**
- **Purpose:** Show completed project example
- **Type:** Render
- **Shows:** Final product showcase scene with proper Eevee lighting, reflections, and effects

### **29. Typical Eevee Settings Presets**
- **Purpose:** Quick reference card for common scenarios
- **Type:** SVG infographic
- **Shows:** Three columns: Draft/Production/High Quality with all relevant settings listed

### **30. HDRI with Light Probes Setup**
- **Purpose:** Show HDRI lighting in Eevee context
- **Type:** Annotated screenshot
- **Shows:** Scene with HDRI background, irradiance volume, and proper baking indication

---

## AI Image Generation Prompts

### **Prompt 1: Real-Time vs Ray Tracing Comparison Diagram**
```
Create a clean technical diagram showing the difference between real-time rendering (Eevee) and ray tracing (Cycles). Left side: Show "EEVEE - Rasterization" with a simplified illustration of 3D geometry being projected to 2D screen pixels quickly (use fast-forward arrows). Right side: Show "CYCLES - Path Tracing" with light rays bouncing between surfaces multiple times. Use a split-screen layout with a vertical divider. Left side should have green accents (#4CAF50) suggesting speed, right side should have blue accents (#667eea) suggesting accuracy. Include simple icons: stopwatch for Eevee (fast), magnifying glass for Cycles (detailed). Background: Dark grey (#2b2b2b). Style: Educational technical diagram, flat design, clear visual metaphors. Add labels: "Fast approximation" for Eevee, "Physically accurate" for Cycles. Format: 1920x1080, clean professional training material.
```

### **Prompt 2: Eevee Rendering Pipeline Flowchart**
```
Create a horizontal flowchart showing Eevee's 4-step rendering process. Dark grey background (#2b2b2b). Four connected boxes from left to right with arrows between them. Box 1: "Step 1: Rasterization" (teal #00bcd4) with simple 3D mesh icon becoming 2D. Box 2: "Step 2: Shading" (green #4CAF50) with material/light icon. Box 3: "Step 3: Screen Space Effects" (orange #ff8c00) with reflection/AO icons. Box 4: "Step 4: Post-Processing" (purple #9c27b0) with bloom/DOF icons. Under each box, add 2-3 bullet points describing what happens. Arrows should be bright white with subtle glow. Top of image: "EEVEE RENDERING PIPELINE" in bold white text. Style: Modern technical flowchart, professional training material. Format: 1920x600, horizontal layout.
```

### **Prompt 3: Screen Space Concept Illustration**
```
Create an educational diagram explaining the screen space concept. Show a 3D scene from camera viewpoint. In the center, draw a camera frustum (viewing volume) showing what the camera sees. Inside frustum: Objects are colored bright cyan (#00bcd4) with label "Visible - Used by screen space effects". Outside frustum: Objects are colored dim grey with label "Not visible - Cannot be used". Background: Dark grey (#2b2b2b). Add a reflection example: Show a mirror/reflective surface in frame trying to reflect an object that's behind the camera (outside frustum) - this object should have a red X over it with text "Cannot reflect". Include a text box: "Screen Space Limitation: Only what's on screen can be processed". Style: Technical illustration, educational clarity, clear color coding. Format: 1920x1080, professional training diagram.
```

### **Prompt 4: Eevee vs Cycles Side-by-Side Render**
```
Create a split-screen comparison image of a simple 3D scene. Left half labeled "EEVEE" at top, right half labeled "CYCLES". Scene: Shiny metallic sphere on a plane with one area light. Left (Eevee): Slightly more "crisp" appearance, screen-space reflections visible, faster-looking post-processing style. Right (Cycles): Softer, more photographic quality, more natural light bounce, subtle indirect lighting. Both should look good but with subtle differences. Background: Dark grey (#2b2b2b). Add time indicators: "Render: 3 seconds" under Eevee, "Render: 45 seconds" under Cycles. Vertical dividing line with annotations pointing to differences: "Sharper edges", "Screen-space reflections" for Eevee; "Natural bounce light", "Ray-traced reflections" for Cycles. Style: Professional rendering comparison, clean layout. Format: 1920x1080.
```

### **Prompt 5: Eevee Render Properties Panel**
```
Create a screenshot mockup of Blender's Render Properties panel with Eevee selected. Dark Blender theme (#2b2b2b background). Top shows render engine dropdown with "Eevee" selected (highlighted in orange #ff8c00). Below, show collapsible sections with bright orange circles highlighting them: "Sampling", "Ambient Occlusion", "Bloom", "Screen Space Reflections", "Shadows", "Film". Add arrows pointing from right side to each section with labels: "Quality settings here", "Contact shadows", "Glow effects", "Reflective surfaces", "Shadow quality", "Transparency". Panel should look like authentic Blender UI. Style: Clean UI mockup, professional software training. Format: 800x1200 vertical, Blender-accurate interface design.
```

### **Prompt 6: Sampling Settings Explained**
```
Create an annotated screenshot mockup of Eevee's Sampling section. Dark UI background (#2b2b2b). Show "Sampling" header, then two main settings: "Render: 64" and "Viewport: 16" with number input fields. Add three annotation arrows and text boxes: Arrow 1 pointing to Render value: "Final render quality - Higher = cleaner but slower - Recommended: 64-128". Arrow 2 pointing to Viewport value: "Preview quality - Lower = faster interaction - Recommended: 16-32". Arrow 3 pointing to both: "More samples = less noise in effects like AO, SSR, DOF". Annotations should be bright yellow (#ffd700) boxes with black text. Include a visual comparison at bottom: Two small render thumbnails showing "32 samples (grainy)" vs "128 samples (clean)". Style: Educational UI annotation, training material. Format: 1600x900.
```

### **Prompt 7: Bloom Effect Before/After**
```
Create a side-by-side comparison showing bloom's impact. Dark scene with several bright point lights. Left half labeled "WITHOUT BLOOM" shows clean, non-glowing lights - just bright spots with no halo. Right half labeled "WITH BLOOM ENABLED" shows same lights with beautiful glowing halos spreading into surrounding areas. Lights should be various colors: warm white, cool blue, orange. Background: Dark grey (#2b2b2b). Add vertical dividing line. At bottom, show settings used: "Bloom Threshold: 0.8, Radius: 6.5, Intensity: 0.1". Lights on right should have visible soft glow extending beyond the light source. Style: Dramatic visual comparison, cinematic look. Format: 1920x1080, photographic quality.
```

### **Prompt 8: Bloom Settings Panel**
```
Create an annotated mockup of Bloom settings in Blender. Dark UI (#2b2b2b). "Bloom" section header with checkbox (checked, orange highlight #ff8c00). Below, show four slider settings with annotations: "Threshold: 0.800" - Annotation: "How bright to glow (lower = more glow)". "Radius: 6.500" - Annotation: "Spread distance of glow". "Color: [white swatch]" - Annotation: "Tint color (usually white)". "Intensity: 0.050" - Annotation: "Strength of effect (subtle = realistic)". "Clamp: 1000.000" - Annotation: "Maximum brightness limit". All annotations in bright yellow boxes (#ffd700) with arrows pointing to each setting. At bottom, add tip box: "Start with Threshold: 0.8, Intensity: 0.05 for natural look". Style: Software UI annotation, educational. Format: 1400x800.
```

### **Prompt 9: Screen Space Reflections Demo**
```
Create a demonstration image showing SSR limitations. Scene: Reflective floor in center (shiny, roughness 0.2), camera angle looking at floor. On the floor reflection: Show objects that ARE in camera view reflecting properly (bright, clear reflections in cyan #00bcd4). Also show where objects BEHIND the camera would be (gaps in reflection or dark areas) marked with red X's and text "Cannot reflect - not on screen". Add a wireframe view overlay in corner showing full scene including off-screen objects. Main text overlay: "Screen Space Reflections (SSR) Limitation". Annotation arrows pointing to missing reflections: "Objects behind camera don't reflect". Background: Dark grey (#2b2b2b). Style: Technical demonstration, educational clarity. Format: 1920x1080.
```

### **Prompt 10: Screen Space Refraction Setup**
```
Create a step-by-step visual guide for glass setup. Show four panels arranged in 2x2 grid. Dark background (#2b2b2b). Panel 1 (top-left): Principled BSDF shader settings showing "Transmission: 1.0", "Roughness: 0.1", "IOR: 1.45" - highlight these in orange (#ff8c00). Panel 2 (top-right): Material Settings dropdown showing "Blend Mode: Alpha Blend" (highlighted) and "Screen Space Refraction" checkbox (checked, highlighted). Panel 3 (bottom-left): Render Properties showing "Screen Space Reflections" enabled (checked, highlighted) and "Refraction" sub-option enabled (highlighted). Panel 4 (bottom-right): Result - beautiful clear glass render showing refraction. Connect panels with numbered arrows (1→2→3→4). Title at top: "EEVEE GLASS SETUP CHECKLIST". Style: Step-by-step tutorial, professional. Format: 1920x1200.
```

### **Prompt 11: Ambient Occlusion Comparison**
```
Create a split-screen comparison of Ambient Occlusion. Scene: Simple room corner with objects touching floor and walls (cylinder, cube on surface). Left half: "WITHOUT AMBIENT OCCLUSION" - scene looks flat, no contact shadows, corners not darkened. Right half: "WITH AMBIENT OCCLUSION" - same scene with darkened corners, contact shadows where objects meet surfaces, visible depth. Dark grey background (#2b2b2b). Vertical divider. Add annotation arrows pointing to key differences: "No depth cues" vs "Contact shadows add realism", "Flat corners" vs "Darkened crevices". Settings shown at bottom: "Distance: 0.2, Factor: 1.0". Style: Before/after comparison, photographic rendering. Format: 1920x1080.
```

### **Prompt 12: Shadow Settings Panel**
```
Create annotated mockup of Shadow settings panel. Dark Blender UI (#2b2b2b). "Shadows" section header. Show settings with annotations: "Cube Size: 2048" - Arrow pointing with text "Shadow map resolution for Point/Area lights - Higher = sharper". "Cascade Size: 4096" - Arrow: "Sun light shadow resolution - Usually needs to be higher". "High Bitdepth" checkbox (checked, orange #ff8c00) - Arrow: "Reduces shadow artifacts - Enable for quality". "Soft Shadows" checkbox (checked, orange) - Arrow: "Softer shadow edges - Almost always enable". Each annotation in yellow box (#ffd700). At bottom, add recommendation box: "Quality Settings: Cube=2048, Cascade=4096, Both checkboxes enabled". Style: UI annotation, training material. Format: 1400x900.
```

### **Prompt 13: Shadow Quality Comparison**
```
Create a comparison showing shadow resolution impact. Three panels showing same scene (cylinder casting shadow on plane under area light). Panel 1: "Low (512)" - Blocky, pixelated shadow edges, obvious stair-stepping. Panel 2: "Medium (1024)" - Better but still some visible pixels. Panel 3: "High (2048)" - Clean, smooth shadow edges, professional quality. Dark background (#2b2b2b). Each panel labeled at bottom with resolution. Add zoom-in circles highlighting shadow edges in each version. Main title: "SHADOW RESOLUTION COMPARISON". Recommendation text: "Use 2048-4096 for production quality". Style: Technical comparison, educational. Format: 1920x800, horizontal layout.
```

### **Prompt 14: Shadow Artifacts Visual Guide**
```
Create an educational reference showing three common shadow problems. Three panels arranged horizontally. Dark background (#2b2b2b). Panel 1: "Shadow Acne" - Surface with speckled shadow artifacts (black dots pattern). Red arrow pointing with "Fix: Increase Bias, Enable High Bitdepth". Panel 2: "Peter Panning" - Object appears to float above its shadow (gap between object and shadow). Red arrow: "Fix: Decrease Bias". Panel 3: "Pixelation" - Blocky, low-res shadow. Red arrow: "Fix: Increase Shadow Map Size". Each issue clearly labeled with bright red warning indicators. Title at top: "COMMON SHADOW ARTIFACTS & FIXES". Style: Technical troubleshooting guide, clear problem identification. Format: 1920x700.
```

### **Prompt 15: Irradiance Volume Setup**
```
Create an instructional image for irradiance volume setup. Show Blender viewport with visible irradiance volume (wireframe cube with colored dots representing light samples inside). Object should be in center (simple character or object). Volume scaled to encompass scene. Scale handles visible with orange highlights (#ff8c00). Right side: Properties panel showing "Irradiance Volume" settings with Resolution X/Y/Z sliders (set to 8). Add annotation arrows: "Scale to cover entire scene", "Higher resolution = more accurate indirect light", "Re-bake when scene changes". Bottom: Large orange button "BAKE INDIRECT LIGHTING" highlighted. Background: Blender dark theme. Style: Software tutorial, clear instructional. Format: 1920x1080.
```

### **Prompt 16: Reflection Cubemap Setup**
```
Create instructional image for reflection cubemap probe. Blender viewport showing scene with shiny floor/objects. In center: Reflection Cubemap probe visible as small icon with influence sphere around it (wireframe sphere, cyan #00bcd4). Probe positioned at center of reflective area. Scale handles visible. Right panel: Probe settings showing Distance, Falloff, Resolution controls. Annotations: Arrow to probe icon: "Position at center of reflective area". Arrow to sphere: "Influence range - scale to cover objects". Arrow to settings: "Higher resolution = better reflections". Bottom: "BAKE INDIRECT LIGHTING" button highlighted. Background: Blender UI theme. Style: Technical tutorial. Format: 1920x1080.
```

### **Prompt 17: Light Probe Workflow Diagram**
```
Create a professional workflow flowchart for light probes. Dark background (#2b2b2b). Vertical flowchart with 6 steps connected by downward arrows (bright orange #ff8c00). Step 1: "Add Irradiance Volume" (icon: wireframe cube). Step 2: "Scale to cover scene" (icon: scale handles). Step 3: "Add Reflection Cubemap(s)" (icon: sphere with arrows). Step 4: "Position probes correctly" (icon: move cursor). Step 5: "BAKE INDIRECT LIGHTING" (large button graphic, emphasized with glow effect). Step 6: "Check result in Rendered view" (icon: eye). Each step in rounded rectangle box. Add side note boxes with tips: "One irradiance volume per scene", "One reflection probe per area", "Re-bake after any lighting changes". Title: "LIGHT PROBE WORKFLOW". Style: Professional process diagram. Format: 1200x1600 vertical.
```

### **Prompt 18: Material Blend Mode Options**
```
Create a four-panel comparison of blend modes. Dark background (#2b2b2b). Each panel shows same leaf/foliage texture with alpha channel. Panel 1: "OPAQUE" - No transparency, solid. Panel 2: "ALPHA CLIP" - Sharp cutout, hard edges, no partial transparency. Panel 3: "ALPHA HASHED" - Noisy/dithered transparency pattern. Panel 4: "ALPHA BLEND" - Smooth, gradient transparency. Under each panel, show use cases: "Solid objects", "Leaves, grass (sharp edge)", "Hair, grass (noisy)", "Glass, smooth gradients". All panels labeled clearly. Title at top: "EEVEE BLEND MODES COMPARISON". Add shadow examples under each showing how shadows differ. Style: Technical comparison, educational. Format: 1920x1200.
```

### **Prompt 19: Glass Material Setup Guide**
```
Create comprehensive glass setup checklist. Three-column layout. Column 1: "SHADER SETTINGS" - Principled BSDF with Transmission=1.0, Roughness=0.1, IOR=1.45 highlighted (orange #ff8c00). Column 2: "MATERIAL SETTINGS" - Blend Mode: Alpha Blend (highlighted), Screen Space Refraction checkbox checked (highlighted), Shadow Mode: None or Alpha Blend (highlighted). Column 3: "RENDER SETTINGS" - Screen Space Reflections enabled (highlighted), Refraction checkbox under SSR enabled (highlighted). Each setting has green checkmark (✓) indicating it's required. Dark background (#2b2b2b). At bottom: Large text "ALL FOUR REQUIREMENTS MUST BE MET FOR GLASS TO WORK". Title: "EEVEE GLASS SETUP CHECKLIST". Style: Complete reference guide. Format: 1920x1080.
```

### **Prompt 20: Emission and Bloom Interaction**
```
Create demonstration showing emission strength impact on bloom. Four panels showing same glowing sphere. Dark background (#2b2b2b). Panel 1: "Emission: 1.0" - Slight glow, minimal bloom. Panel 2: "Emission: 5.0" - Moderate glow and bloom halo. Panel 3: "Emission: 10.0" - Strong glow, larger bloom. Panel 4: "Emission: 50.0" - Very intense glow, large bloom spread. Under each: Show exact Emission Strength value. All panels use same Bloom settings (listed at top: "Bloom Threshold: 0.8, Intensity: 0.1"). Add annotation: "Higher emission = more bloom effect". Title: "EMISSION STRENGTH & BLOOM RELATIONSHIP". Show bloom Threshold line visualization. Style: Technical demonstration, scientific comparison. Format: 1920x1000.
```

### **Prompt 21: Performance Optimization Checklist**
```
Create hierarchical infographic for performance optimization. Dark background (#2b2b2b). Title at top: "EEVEE PERFORMANCE OPTIMIZATION" in large white text. Three priority tiers arranged vertically. Tier 1 (red #f44336): "HIGH IMPACT (Do First)" with 4 items: Lower viewport samples, Reduce shadow map sizes, Disable expensive effects temporarily, Check polygon count. Tier 2 (orange #ff8c00): "MEDIUM IMPACT" with 3 items: Reduce texture resolutions, Limit shadow-casting lights, Hide objects not in shot. Tier 3 (yellow #ffd700): "LOWER IMPACT (Fine Tuning)" with 3 items: Use instances vs duplicates, Enable backface culling, Optimize texture compression. Use numbered bullets (1-10). Add icons for each category. Style: Modern infographic, flat design, clear hierarchy. Format: 1200x1600 vertical.
```

### **Prompt 22: Viewport vs Render Mode Comparison**
```
Create split comparison showing why viewport differs from render. Left: "VIEWPORT (16 samples)" - Shows scene in Blender rendered viewport mode with slightly grainier quality. Right: "FINAL RENDER (128 samples)" - Same camera angle, cleaner, smoother, less noise in AO and reflections. Dark background (#2b2b2b). Vertical divider with annotations pointing to differences: "More noise in effects", "Lower AO quality", "Rougher SSR" on left side. "Clean effects", "Smooth AO", "Clear reflections" on right side. At bottom: Large text "This is normal and expected - viewport uses lower samples for speed". Sample count displayed prominently at top of each side. Style: Educational comparison. Format: 1920x1080.
```

### **Prompt 23: Troubleshooting Decision Tree**
```
Create flowchart for common Eevee problems. Dark background (#2b2b2b). Start at top: "Problem?" with four branches. Branch 1: "Render too dark" → "Check: Lights exist?" → "Add light / Check strength". Branch 2: "Glass is black" → "Check: SSR Refraction enabled?" → "Enable in render settings + material settings". Branch 3: "No reflections" → "Check: SSR enabled?" → "Enable SSR, Check material roughness, Add reflection probe". Branch 4: "Shadows pixelated" → "Check: Shadow map size?" → "Increase Cube/Cascade Size to 2048+". Use color coding: Problem boxes (red #f44336), Question boxes (yellow #ffd700), Solution boxes (green #4CAF50). Clear arrows connecting nodes. Title: "EEVEE TROUBLESHOOTING FLOWCHART". Style: Professional decision tree. Format: 1920x1200.
```

### **Prompt 24: Contact Shadows Detail**
```
Create close-up comparison of contact shadows. Extreme close-up of object resting on surface (cylinder on plane). Dark scene with single area light. Left: "WITHOUT CONTACT SHADOWS" - Clean shadow but gap visible at contact point, slight floating appearance. Right: "WITH CONTACT SHADOWS" - Additional fine shadow detail at exact contact point, object appears properly grounded. Dark background (#2b2b2b). Vertical divider. Add zoom-in circles highlighting the contact point in each version. Arrows pointing to contact area: "No fine detail" vs "Enhanced detail where objects touch". Settings shown: "Contact Shadows: Distance 0.1". Title: "CONTACT SHADOWS ENHANCE REALISM". Style: Detailed comparison, technical photography. Format: 1920x900.
```

### **Prompt 26: Light Threshold Visualization**
```
Create diagram explaining light threshold. Dark scene with 5 lights of different intensities: Light A (Power: 100W), Light B (50W), Light C (25W), Light D (10W), Light E (5W). Show threshold line at 20W (horizontal line, bright red #f44336). Lights above threshold (A, B, C) have shadow indicators (enabled, green checkmark). Lights below threshold (D, E) have no shadow indicators (disabled, red X). Add annotations: "Shadows cast" above line, "No shadows (optimization)" below line. Title: "LIGHT THRESHOLD SETTING". Show setting box: "Light Threshold: 0.01 (very low)" with explanation: "Lights dimmer than this don't cast shadows". Background: Dark grey (#2b2b2b). Style: Technical diagram, educational. Format: 1920x1000.
```

### **Prompt 27: Texture Resolution Strategy**
```
Create infographic showing texture optimization by distance. Show scene depth divided into three zones from camera POV. Dark background (#2b2b2b). Zone 1 (foreground, closest to camera): "CLOSE-UP OBJECTS" with icon and "2K-4K textures" recommendation in green (#4CAF50). Zone 2 (mid-ground): "MID-DISTANCE" with "1K-2K textures" in orange (#ff8c00). Zone 3 (background, farthest): "BACKGROUND" with "512-1K textures" in blue (#2196f3). Show camera frustum expanding with depth. Add percentage indicators: "Full detail", "Good detail", "Low detail acceptable". Include memory usage bar showing "Optimize = Save VRAM". Title: "TEXTURE RESOLUTION STRATEGY". Style: Educational infographic, isometric view. Format: 1920x1080.
```

### **Prompt 28: Project Reference Image**
```
Create beautiful Eevee-rendered product showcase. Scene: Metallic object (abstract sculpture or product) on matte plane with subtle reflection. Professional three-point lighting: key area light from upper left, fill from right, rim from behind. Dark grey backdrop. Visible bloom on bright highlights, clean ambient occlusion in crevices, screen-space reflections on floor, soft shadows. Professional product photography style. Object should be semi-metallic (Metallic: 0.7, Roughness: 0.3) with interesting form. Lighting creates depth and dimension. Background: Dark grey to dark blue gradient (#2b2b2b to #1a1a2e). Render should look polished and professional, demonstrating Eevee's capabilities. Style: Professional product render, cinematic lighting. Format: 1920x1080.
```

### **Prompt 29: Typical Eevee Settings Presets**
```
Create quick-reference card with three preset columns. Dark background (#2b2b2b). Three vertical columns with headers. Column 1 (green #4CAF50): "DRAFT (Fast Preview)" - Samples: 32, Shadow Cube: 512, Shadow Cascade: 1024, AO: Disabled, Bloom: Disabled, SSR: Disabled, Use: "Quick tests, iteration". Column 2 (orange #ff8c00): "PRODUCTION (Balanced)" - Samples: 64-128, Shadow Cube: 1024, Shadow Cascade: 2048, AO: Enabled, Bloom: As needed, SSR: Enabled, Soft Shadows: Yes, Use: "Most final renders". Column 3 (purple #9c27b0): "HIGH QUALITY (Slow)" - Samples: 256-512, Shadow Cube: 2048, Shadow Cascade: 4096, All effects enabled, High Bitdepth: Yes, Contact Shadows: Yes, Use: "Hero shots, stills". Title: "EEVEE SETTINGS PRESETS". Style: Clean reference card, table layout. Format: 1920x1200.
```

### **Prompt 30: HDRI with Light Probes Setup**
```
Create instructional image for HDRI + light probes workflow. Blender viewport showing scene with HDRI environment visible (sky dome). Objects in scene. Irradiance volume visible (wireframe cube encompassing scene). Bottom of viewport: Properties panel showing World settings with HDRI loaded (Environment Texture node visible) and strength value. Add annotation arrows: "HDRI provides environment lighting", "Irradiance volume captures indirect light from HDRI", "Must bake after loading HDRI". Large orange button at bottom: "BAKE INDIRECT LIGHTING" emphasized. Show before/after split: left side showing flat lighting (not baked), right side showing proper indirect lighting (baked). Background: Blender dark theme. Style: Software tutorial. Format: 1920x1080.
```

---

## SVG Diagram Recommendations

List of images that work best as SVG:

1. **Real-Time vs Ray Tracing Comparison Diagram** (#1) - Simple conceptual split diagram with icons and text, perfect for vector
2. **Eevee Rendering Pipeline Flowchart** (#2) - Flowchart with boxes and arrows, ideal vector format
3. **Eevee vs Cycles Decision Flowchart** (#25) - Already in mermaid format, can be converted to SVG
4. **Light Probe Workflow Diagram** (#17) - Process flowchart with steps and icons
5. **Performance Optimization Checklist** (#21) - Hierarchical infographic with text and icons
6. **Troubleshooting Decision Tree** (#23) - Flowchart with decision nodes
7. **Light Threshold Visualization** (#26) - Simple diagram with threshold line and lights
8. **Texture Resolution Strategy** (#27) - Isometric infographic with zones
9. **Typical Eevee Settings Presets** (#29) - Table/reference card format

**Rationale for SVG recommendations:** These images are primarily composed of geometric shapes, text, flowchart elements, and simple icons without photographic detail. SVG format ensures perfect scalability, small file sizes, and allows easy updates to text or colors. They serve as reference diagrams and educational illustrations where clarity and crispness at any zoom level are essential.

---

## Image Placement Suggestions in HTML

### Section: What is Real-Time Rendering? (id="what-is-eevee")
- **After "Understanding Real-Time Rendering" card:** Insert Image #1 (Real-Time vs Ray Tracing Comparison)
- **After "How Eevee Works" card:** Insert Image #2 (Eevee Rendering Pipeline Flowchart)
- **After "Understanding Screen Space" explanation:** Insert Image #3 (Screen Space Concept Illustration)

### Section: Eevee vs Cycles Comparison (id="eevee-vs-cycles")
- **After side-by-side comparison table:** Insert Image #4 (Eevee vs Cycles Side-by-Side Render)
- **Within "Decision Framework" card:** Image #25 (Decision Flowchart) is already present as mermaid diagram

### Section: Eevee Basic Settings (id="basic-settings")
- **After "Accessing Eevee Settings" card:** Insert Image #5 (Eevee Render Properties Panel)
- **Within "Sampling Settings" card:** Insert Image #6 (Sampling Settings Explained)

### Section: Screen Space Effects (id="screen-space-effects")
- **After "What is Screen Space?" card:** Reference Image #3 if not already placed
- **Within "Screen Space Reflections" card:** Insert Image #9 (Screen Space Reflections Demo)
- **Within "Screen Space Refraction" card:** Insert Image #10 (Screen Space Refraction Setup)
- **Within "Ambient Occlusion" card:** Insert Image #11 (Ambient Occlusion Comparison)

### Section: Bloom and Visual Effects (id="bloom-effects")
- **After "Understanding Bloom" card:** Insert Image #7 (Bloom Effect Before/After)
- **Within "Enabling and Configuring Bloom" card:** Insert Image #8 (Bloom Settings Panel)
- **Within "Emissive Materials and Bloom" card:** Insert Image #20 (Emission and Bloom Interaction)

### Section: Shadow Settings (id="shadows")
- **Within "Shadow Settings Overview" card:** Insert Image #12 (Shadow Settings Panel)
- **After "Shadow Quality Tips" card:** Insert Images #13 (Shadow Quality Comparison) and #14 (Shadow Artifacts Visual Guide)
- **Within "Contact Shadows" card:** Insert Image #24 (Contact Shadows Detail)

### Section: Indirect Lighting Setup (id="indirect-lighting")
- **Within "Irradiance Volumes" card:** Insert Image #15 (Irradiance Volume Setup)
- **Within "Reflection Cubemap Probes" card:** Insert Image #16 (Reflection Cubemap Setup)
- **After "Reflection Plane Probes" card:** Insert Image #17 (Light Probe Workflow Diagram)
- **Within HDRI context (if mentioned):** Insert Image #30 (HDRI with Light Probes Setup)

### Section: Materials for Eevee (id="material-considerations")
- **Within "Eevee Material Settings" card:** Insert Image #18 (Material Blend Mode Options)
- **Within "Transparency Setup" card:** Insert Image #19 (Glass Material Setup Guide)

### Section: Performance Optimization (id="optimization")
- **At beginning of section:** Insert Image #21 (Performance Optimization Checklist)
- **Within "Viewport Performance" card:** Insert Image #22 (Viewport vs Render Mode Comparison)
- **Within "Lighting Optimization" card:** Insert Image #26 (Light Threshold Visualization)
- **Within "Texture Optimization" card:** Insert Image #27 (Texture Resolution Strategy)
- **Within "Render Settings Balance" card:** Insert Image #29 (Typical Eevee Settings Presets)

### Section: Troubleshooting Eevee (id="troubleshooting")
- **At beginning of section:** Insert Image #23 (Troubleshooting Decision Tree)
- **Individual problem cards can reference specific images:** 
  - Shadow artifacts card: Image #14
  - Transparency issues: Image #19
  - Reflection problems: Image #9

### Section: Project (id="project")
- **At "Project Overview" card beginning:** Insert Image #28 (Project Reference Image) as inspiration
- **Within workflow steps:** Reference relevant setup images (#15, #16, #17, #19)

---

## File Naming Convention

```
lesson_18_01_realtime_vs_raytracing_diagram.svg
lesson_18_02_eevee_pipeline_flowchart.svg
lesson_18_03_screen_space_concept.png
lesson_18_04_eevee_cycles_comparison.png
lesson_18_05_render_properties_panel.png
lesson_18_06_sampling_settings_annotated.png
lesson_18_07_bloom_before_after.png
lesson_18_08_bloom_settings_panel.png
lesson_18_09_ssr_demonstration.png
lesson_18_10_refraction_setup_guide.png
lesson_18_11_ambient_occlusion_comparison.png
lesson_18_12_shadow_settings_panel.png
lesson_18_13_shadow_quality_comparison.png
lesson_18_14_shadow_artifacts_guide.png
lesson_18_15_irradiance_volume_setup.png
lesson_18_16_reflection_cubemap_setup.png
lesson_18_17_light_probe_workflow.svg
lesson_18_18_blend_mode_comparison.png
lesson_18_19_glass_setup_checklist.png
lesson_18_20_emission_bloom_interaction.png
lesson_18_21_performance_optimization.svg
lesson_18_22_viewport_render_comparison.png
lesson_18_23_troubleshooting_tree.svg
lesson_18_24_contact_shadows_detail.png
lesson_18_25_engine_decision_flowchart.svg
lesson_18_26_light_threshold_visualization.svg
lesson_18_27_texture_resolution_strategy.svg
lesson_18_28_project_reference_render.png
lesson_18_29_settings_presets_card.svg
lesson_18_30_hdri_light_probes_setup.png
```

**Format guidelines:**
- Use two-digit numbering (01-30)
- Descriptive names with underscores (no spaces)
- SVG for diagrams, flowcharts, infographics
- PNG for screenshots, renders, annotated images

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #5 - Eevee Render Properties Panel** - Critical UI reference students need immediately
2. **Image #6 - Sampling Settings Explained** - Core quality settings that affect everything
3. **Image #11 - Ambient Occlusion Comparison** - Demonstrates essential effect clearly
4. **Image #12 - Shadow Settings Panel** - Another critical UI reference for quality
5. **Image #15 - Irradiance Volume Setup** - Essential for proper Eevee lighting workflow
6. **Image #17 - Light Probe Workflow Diagram** - Ties together the entire light probe concept
7. **Image #19 - Glass Material Setup Guide** - Addresses most common student question
8. **Image #21 - Performance Optimization Checklist** - Quick reference students will use repeatedly
9. **Image #29 - Typical Eevee Settings Presets** - Immediate practical value for any project

**Rationale:** These images directly support primary learning objectives and answer the most common questions students have when learning Eevee. They provide essential UI references and workflow guidance that text alone cannot convey effectively.

### Medium Priority (Helpful Enhancement)
10. **Image #1 - Real-Time vs Ray Tracing Comparison** - Good conceptual foundation
11. **Image #2 - Eevee Rendering Pipeline** - Helps understand the process
12. **Image #3 - Screen Space Concept Illustration** - Clarifies important limitation
13. **Image #4 - Eevee vs Cycles Side-by-Side** - Visual quality comparison helpful
14. **Image #7 - Bloom Effect Before/After** - Demonstrates popular effect
15. **Image #8 - Bloom Settings Panel** - UI reference for bloom
16. **Image #9 - SSR Demonstration** - Shows reflection limitations
17. **Image #10 - Screen Space Refraction Setup** - Alternative to glass setup guide
18. **Image #13 - Shadow Quality Comparison** - Shows impact of settings
19. **Image #14 - Shadow Artifacts Guide** - Troubleshooting reference
20. **Image #16 - Reflection Cubemap Setup** - Complements irradiance volume
21. **Image #18 - Blend Mode Comparison** - Clarifies transparency options
22. **Image #23 - Troubleshooting Decision Tree** - Problem-solving tool
23. **Image #28 - Project Reference Image** - Inspiration and goal

**Rationale:** These images enhance understanding and provide valuable reference material, but core concepts can be grasped without them. They improve the learning experience but aren't absolutely critical.

### Lower Priority (Nice to Have)
24. **Image #20 - Emission and Bloom Interaction** - Specific effect demonstration
25. **Image #22 - Viewport vs Render Comparison** - Explains minor differences
26. **Image #24 - Contact Shadows Detail** - Advanced subtle effect
27. **Image #26 - Light Threshold Visualization** - Optimization detail
28. **Image #27 - Texture Resolution Strategy** - Optimization infographic
29. **Image #30 - HDRI with Light Probes Setup** - Specific workflow variation
30. **Image #25 - Engine Decision Flowchart** - Already exists as mermaid diagram in HTML

**Rationale:** These are supplementary materials that address edge cases, advanced features, or specific scenarios. Useful for completeness but not required for core competency in Eevee.

---

## Style and Consistency Guidelines

### Color Palette Standards
All images should use this consistent color scheme to match Blender and lesson style:
- **Background:** Dark grey (#2b2b2b) - matches Blender UI
- **Primary accent:** Bright orange (#ff8c00) - for selections, highlights, important UI elements
- **Secondary accent:** Cyan (#00bcd4) - for visible objects, active elements
- **Success/Enable:** Green (#4CAF50) - for checkmarks, enabled features, good examples
- **Warning:** Yellow/Gold (#ffd700) - for annotations, tips, medium priority
- **Error/Disable:** Red (#f44336) - for problems, disabled features, bad examples
- **Info:** Blue (#2196f3) - for additional information, background elements
- **Wireframe:** White or light cyan - for 3D wireframes
- **Text:** White (#ffffff) - primary text on dark backgrounds
- **Text secondary:** Light grey (#b0b0b0) - less important text

### Blender Version
- **All screenshots:** Use Blender 4.0+ interface for consistency
- **UI Theme:** Dark theme (matches lesson aesthetic)
- **Workspace:** Standard "Shading" or "Rendering" workspace

### View Angles and Composition
- **3D Viewport screenshots:** Use standard camera angles (front, 3/4 view, top)
- **UI Screenshots:** Full panel visible, no cut-off elements
- **Annotations:** Use arrows consistently (white or yellow, 3px width)
- **Callout boxes:** Rounded rectangles with yellow background, black text

### Selection Highlighting
- **Selected objects:** Orange outline (#ff8c00, 3px width)
- **UI elements:** Orange glow or background
- **Active settings:** Orange checkbox, highlighted field

### Typography
- **Diagram labels:** Sans-serif font (Arial, Helvetica), bold for emphasis
- **Body text in diagrams:** 18-24pt for readability
- **Headers:** 32-48pt, bold
- **UI mockup text:** Match Blender's Inter font where possible

### Annotation Style
- **Arrow style:** Straight arrows with triangular heads, 3px width
- **Callout boxes:** Yellow (#ffd700) background, black text, slight drop shadow
- **Highlight circles:** 3px dashed circles in orange
- **Leader lines:** Thin white lines connecting labels to features

---

## Accessibility Considerations

### Visual Clarity
- **High contrast:** Ensure text readable against backgrounds (4.5:1 minimum ratio)
- **Color coding:** Never rely solely on color - use icons, labels, patterns too
- **Font sizes:** Minimum 16pt for body text in diagrams, 12pt for UI mockups
- **Line weights:** Minimum 2px for visibility at various screen sizes

### Alternative Text Needs
Each image should have descriptive alt text for screen readers:
- Describe what the image shows
- Explain its educational purpose
- Note key differences in comparison images
- Describe color-coded elements by label, not just color

### Image Descriptions
For complex diagrams, provide supplementary text descriptions in HTML:
- Flowchart paths and decision points
- Step-by-step processes
- Comparison image differences
- UI element locations and purposes

### Responsive Design
- **Minimum width:** Images should remain legible at 800px width
- **Mobile considerations:** Test legibility on smaller screens
- **SVG benefits:** Vector graphics scale perfectly on all devices
- **PNG resolution:** Minimum 1920px wide for detail retention

---

## Technical Specifications

### Screenshot Resolution
- **Primary resolution:** 1920x1080 (Full HD) minimum
- **UI screenshots:** 1920x1080 or higher for clarity
- **Detail shots:** 2560x1440 for close-ups requiring detail
- **Composite layouts:** Adjust based on panel arrangement

### Image Formats
- **PNG for:**
  - Screenshots with UI elements
  - Renders with transparency
  - Annotated images with text
  - Photographic-style comparisons
  - Complex composites with gradients
- **SVG for:**
  - Flowcharts and diagrams
  - Infographics with text and shapes
  - Icons and simple illustrations
  - Reference cards and checklists
  - Decision trees
- **JPG for:**
  - Final renders without transparency (smaller file size)
  - Photographic comparisons where compression acceptable

### File Size Targets
- **PNG screenshots:** Target 500KB-2MB (use PNG compression)
- **SVG diagrams:** Target 50-200KB (optimize paths)
- **Render images:** Target 1-3MB depending on detail
- **Composite images:** May be larger (2-5MB) if necessary for quality

### Compression Guidelines
- **PNG:** Use PNG-8 for simple graphics, PNG-24 for complex/gradients
- **Optimization:** Run images through ImageOptim or TinyPNG
- **Quality:** Maintain visual quality - don't over-compress
- **Balance:** Size vs quality - favor quality for educational value

### Responsive Sizing
- **Desktop:** Full resolution images
- **Tablet:** 80% scale acceptable
- **Mobile:** Consider providing alternate crops for complex diagrams
- **Zoom:** Ensure images remain sharp when zoomed to 150%

---

## Special Considerations for This Lesson

### Eevee-Specific Rendering
When creating renders for this lesson:
- **Use Eevee engine:** All example renders should be made in Eevee (unless comparing to Cycles)
- **Bake light probes:** Demonstrate proper indirect lighting
- **Enable effects:** Show Bloom, SSR, AO in action
- **Professional settings:** Use quality settings (64-128 samples, high shadow resolution)

### Real-Time Engine Aesthetic
Images should reflect Eevee's visual characteristics:
- **Crisp, clean look:** Slightly sharper than Cycles
- **Screen space artifacts:** Show realistic limitations where appropriate
- **Fast rendering feel:** Images can show that it's achievable in real-time
- **Gaming aesthetic:** Acknowledge the "game engine" visual style

### Before/After Comparisons
Many images require before/after splits:
- **Consistent setup:** Same camera, lighting, objects in both sides
- **Only one variable:** Change only the feature being demonstrated
- **Clear divider:** Vertical line with labels "Before"/"After" or "Without"/"With"
- **Settings display:** Show what settings changed between versions

### UI Mockup Accuracy
For Blender UI screenshots and mockups:
- **Accurate layout:** Match actual Blender 4.0+ interface
- **Correct terminology:** Use exact wording from Blender
- **Real values:** Use realistic setting values, not placeholders
- **Context:** Show enough surrounding UI for orientation

### Workflow Visualization
Several images show multi-step processes:
- **Numbered steps:** Clear 1→2→3→4 progression
- **Arrows:** Directional flow indicators
- **Checkpoints:** Visual markers for completion
- **Results:** Show what success looks like at each stage

---

## Production Notes

### Blender Scene Setup
For creating source renders and screenshots:
- **Template file:** Create "lesson_18_image_template.blend" with common setups
- **Lighting presets:** Save area light positions (key, fill, rim)
- **Camera presets:** Save camera angles for consistency
- **Material library:** Create example materials (metal, glass, matte) with proper Eevee settings
- **Probe setup:** Template scene with irradiance volume and reflection cubemap pre-configured

### Viewport Lighting Standards
Consistent viewport lighting for screenshots:
- **Key light:** Area light, 50-100W, upper left at 45°
- **Fill light:** Area light, 20-30W, lower right, shadows disabled
- **Rim light:** Point light, 30W, behind and above subject
- **HDRI alternative:** Use same HDRI across images if using environment lighting

### Camera Angles
Standard camera positions for consistency:
- **3/4 view:** 45° horizontal, 30° vertical from subject
- **Front view:** Dead center, slight elevation
- **Close-up:** 30° off-axis to show depth
- **UI screenshots:** Straight-on, full panel visible

### Batch Processing Workflow
Efficient production approach:
1. **Phase 1:** Create all SVG diagrams (can be done quickly)
2. **Phase 2:** Set up Blender template scene with all settings
3. **Phase 3:** Capture all UI screenshots in one session (consistency)
4. **Phase 4:** Render all comparison images (same lighting)
5. **Phase 5:** Create composites and annotated images
6. **Phase 6:** Review and adjust for consistency

### Version Control
Asset management for future updates:
- **Source files:** Keep .blend files for renders (easy to update)
- **SVG sources:** Keep editable SVG files (Adobe Illustrator or Inkscape)
- **PSD sources:** If using Photoshop for composites, keep layered files
- **Export folder:** Maintain "lesson_18_images_export" with final web versions
- **Naming:** Match HTML filename convention exactly

### Template Reuse Opportunities
Elements that can be reused across images:
- **Annotation arrows:** Create arrow library
- **Callout box style:** Consistent yellow box template
- **UI frame:** Blender panel background template
- **Color swatches:** Palette reference file
- **Icons:** Light bulb, checkmark, X, eye, etc.

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All images match established color palette (#2b2b2b bg, #ff8c00 highlights)
- [ ] Text is readable at expected display sizes (minimum 16pt)
- [ ] Annotations clearly point to referenced elements
- [ ] Blender UI mockups accurately reflect version 4.0+
- [ ] SVG diagrams are optimized (clean paths, no unnecessary elements)
- [ ] File naming follows convention exactly (lesson_18_##_description.ext)
- [ ] Before/after comparisons use consistent setup between sides
- [ ] All comparison images clearly show the difference being illustrated
- [ ] Technical accuracy verified (all settings, values, terminology correct)
- [ ] Images are comprehensive enough to stand alone with HTML text
- [ ] Accessibility considered (alt text planned, high contrast, not color-only)
- [ ] File sizes are optimized without sacrificing educational quality
- [ ] Workflow images show logical, followable step progression
- [ ] All required Eevee features properly demonstrated (probes, SSR, bloom, etc.)
- [ ] Consistent style across all images in lesson
- [ ] Source files saved for future updates and modifications

---

## Additional Recommendations

### Image Creation Workflow
Suggested production phases:

**Phase 1: Planning (1-2 hours)**
- Review lesson content thoroughly
- Create detailed shot list with priorities
- Sketch rough layouts for complex composites
- Identify reusable elements

**Phase 2: SVG Diagrams (4-6 hours)**
- Create all flowcharts and infographics
- Establish style guide and templates
- Export and test at various sizes
- Get early feedback on clarity

**Phase 3: Blender Setup (2-3 hours)**
- Build template scene with proper Eevee settings
- Configure lighting presets
- Set up materials library
- Position cameras and save presets

**Phase 4: Rendering & Screenshots (6-8 hours)**
- Capture all UI screenshots (group by panel type)
- Render all comparison images (group by subject)
- Create 3D demonstrations
- Capture workflow sequences

**Phase 5: Compositing & Annotation (6-8 hours)**
- Create side-by-side comparisons
- Add annotations and callouts
- Build multi-panel layouts
- Create final composites

**Phase 6: Review & Refinement (2-3 hours)**
- Check against quality checklist
- Test images at various sizes
- Verify consistency across set
- Make final adjustments
- Optimize file sizes

**Total estimated time: 21-30 hours for complete image set**

### Alternative Approaches

**Video Alternatives:**
Some concepts might work better as short video clips:
- Light probe baking process (show progress)
- Real-time viewport interaction demonstrating speed
- Bloom threshold adjustment in real-time
- Shadow quality comparison while adjusting settings

**Interactive Elements:**
Consider for future enhancement:
- Before/after sliders for comparisons
- Interactive flowchart (clickable nodes)
- Settings calculator (input scene complexity → recommended settings)
- Troubleshooting wizard (interactive decision tree)

**3D Viewers:**
Advanced possibilities:
- Embedded 3D viewer showing light probe placement
- Interactive scene showing screen space limitations
- Rotatable example showing shadow quality differences

### Future Enhancements

**Downloadable Assets:**
- Example .blend file with proper Eevee setup
- Light probe template scene
- Material presets configured for Eevee
- Project starter file for students

**Additional Diagrams:**
If time allows in future:
- Memory usage diagram (VRAM optimization)
- GPU utilization comparison (Eevee vs Cycles)
- Render time scaling chart (samples vs time)
- Quality-speed trade-off visualization

**Extended Galleries:**
- Student example renders (showcase section)
- Professional Eevee work (inspiration)
- Common mistakes gallery (what to avoid)
- Progressive quality examples (draft→production→high)

### Student Resource Package
Bundle to accompany lesson:
- All 30 images in downloadable .zip
- Quick reference PDF (settings presets, troubleshooting)
- Template .blend file
- Printable cheat sheet (keyboard shortcuts + settings)
- Practice exercise files

---

## Conclusion

This comprehensive image set will transform Lesson 18 from text-heavy to visually rich, making Eevee concepts immediately clear and actionable. The 30 images cover:
- **9 SVG diagrams** for scalable reference materials
- **21 screenshots and renders** for practical demonstrations
- **Multiple before/after comparisons** showing clear differences
- **UI references** for immediate application
- **Workflow visualizations** for process understanding

**Priority focus:** Start with the 9 high-priority images that provide immediate educational value and essential UI references. These will have the biggest impact on student success and reduce common confusion points.

**Production efficiency:** Use template scenes, consistent lighting, and batch processing to create all 30 images in approximately 25-30 hours of focused work.

**Outcome:** Students will have visual confirmation of concepts, clear UI guidance, troubleshooting references, and workflow templates - everything needed to master Eevee real-time rendering confidently.
