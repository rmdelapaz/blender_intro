# Image Requirements for Lesson 47: Post-Processing
## Part 2 of 2

## Image List for Lesson 47 (Continued)

### **51. Transform Node Reframing**
- **Purpose:** Show repositioning and cropping capabilities
- **Type:** Composite (before/after)
- **Shows:** Off-center composition (left) vs reframed using Transform node (right) with node settings shown

### **52. Background Isolation with Z-Depth Mask**
- **Purpose:** Demonstrate selective adjustment using depth
- **Type:** Node diagram with result
- **Shows:** Z-depth pass → Map Range → ColorRamp creating mask, used to blur/darken background while keeping subject sharp

### **53. Alpha Channel Issues Example**
- **Purpose:** Show premultiply problems
- **Type:** Composite (three versions)
- **Shows:** Correct alpha, premultiply error (dark fringe), unpremultiply error (light halo) demonstrating common alpha issues

### **54. Alpha Over Node Compositing**
- **Purpose:** Demonstrate layering with transparency
- **Type:** Node diagram with visual
- **Shows:** Two image inputs (foreground with alpha, background) → Alpha Over node → result showing proper compositing

### **55. Color Space Comparison**
- **Purpose:** Show importance of correct color space
- **Type:** Composite (three versions)
- **Shows:** Same render in: Linear (too dark/washed), sRGB (correct), Wrong space (color shift) demonstrating color management importance

### **56. Photoshop Integration Workflow**
- **Purpose:** Show external software roundtrip
- **Type:** Workflow diagram
- **Shows:** Blender (export TIFF 16-bit) → Photoshop icon (retouching) → Export final, with file format icons and arrows

### **57. DaVinci Resolve Color Page**
- **Purpose:** Show professional color grading interface
- **Type:** Screenshot/illustration
- **Shows:** Resolve's Color page with node graph, color wheels, scopes visible - professional color grading environment

### **58. After Effects Timeline with 3D Render**
- **Purpose:** Demonstrate motion graphics integration
- **Type:** Screenshot/illustration
- **Shows:** After Effects timeline showing imported Blender sequence with text layers and graphics added on top

### **59. File Format Decision Tree**
- **Purpose:** Guide format selection for different uses
- **Type:** SVG flowchart
- **Shows:** Decision tree: "Need transparency?" → PNG path, "Print quality?" → TIFF path, "Web delivery?" → JPEG path, etc.

### **60. Multi-Software Workflow Example**
- **Purpose:** Complete professional pipeline visualization
- **Type:** Infographic/flowchart
- **Shows:** Blender (render) → Blender (composite) → Resolve (grade) → Photoshop (retouch) → Final delivery, with file formats at each stage

### **61. Output Properties Panel Settings**
- **Purpose:** Show where to configure export
- **Type:** Screenshot (annotated)
- **Shows:** Blender Output Properties with Resolution, Frame Rate, File Format dropdown highlighted, output path field visible

### **62. PNG Export Settings**
- **Purpose:** Show PNG format options
- **Type:** Screenshot
- **Shows:** File Format set to PNG, Color dropdown showing RGBA/RGB options, Color Depth (8/16-bit), Compression slider visible

### **63. JPEG Quality Comparison**
- **Purpose:** Demonstrate compression artifact visibility
- **Type:** Composite (zoomed details)
- **Shows:** Same image section at JPEG 100%, 90%, 80%, 60% quality - showing progressive quality loss and artifacts

### **64. EXR vs PNG vs JPEG File Size Comparison**
- **Purpose:** Show file size differences
- **Type:** Infographic
- **Shows:** Same 1920x1080 image as three file icons with sizes: EXR (28MB), PNG 16-bit (18MB), JPEG 90% (1.2MB) with relative size visualization

### **65. Color Space Settings Interface**
- **Purpose:** Show color management controls
- **Type:** Screenshot (annotated)
- **Shows:** Render Properties → Color Management section with View Transform dropdown, Look dropdown, Display Device settings highlighted

### **66. sRGB vs Adobe RGB Gamut Comparison**
- **Purpose:** Visualize color space differences
- **Type:** Diagram
- **Shows:** Two overlapping color gamut shapes on chromaticity diagram - sRGB (smaller, web standard), Adobe RGB (larger, print) with labeled regions

### **67. Video Export Settings (FFmpeg)**
- **Purpose:** Show animation output configuration
- **Type:** Screenshot
- **Shows:** File Format: FFmpeg video, Container: MPEG-4, Video Codec: H.264, Encoding settings, Quality options visible

### **68. Quality Control Checklist Visual**
- **Purpose:** Final QC steps reminder
- **Type:** Infographic checklist
- **Shows:** Checklist with icons: Resolution check ✓, Color accuracy ✓, Compression artifacts ✓, File format ✓, Playback test ✓, etc.

### **69. Cloud Transfer Service Icons**
- **Purpose:** Show delivery method options
- **Type:** Icon set
- **Shows:** Recognizable icons/logos for: Dropbox, Google Drive, WeTransfer, Frame.io arranged in grid with brief descriptors

### **70. Delivery Email Template Visual**
- **Purpose:** Professional delivery communication example
- **Type:** Mockup
- **Shows:** Email interface mockup showing well-formatted delivery email with download link, specifications, organized information

### **71. Complete Node Tree - Professional Example**
- **Purpose:** Show full professional compositor setup
- **Type:** Wide node diagram screenshot
- **Shows:** Complete node setup from lesson project: passes → correction frame → grading frame → effects frame → output, properly organized with frames

### **72. Before/After Project Comparison**
- **Purpose:** Showcase complete transformation from project
- **Type:** Large composite (split)
- **Shows:** Product turntable raw render (left) vs fully post-processed with all techniques applied (right) demonstrating complete lesson application

### **73. Multiple Export Versions Layout**
- **Purpose:** Show different format exports organized
- **Type:** File organization visualization
- **Shows:** Folder structure with file icons: master/ (TIFF), web/ (PNG), social/ (JPEG) with file sizes and formats labeled

### **74. Compositor Keyboard Shortcuts Reference**
- **Purpose:** Quick reference for common operations
- **Type:** Infographic/cheat sheet
- **Shows:** Grid layout showing keyboard key icons with actions: Shift+A (Add), M (Mute), G (Move), X (Delete), N (Properties), etc.

### **75. Post-Processing Success Indicators**
- **Purpose:** Visual checklist of quality achievement
- **Type:** Composite comparison grid
- **Shows:** Four panels showing: Good contrast ✓, Proper color balance ✓, Subtle effects ✓, Clean output ✓ with visual examples of each

---

## AI Image Generation Prompts - Part 2 (Images 26-75)

### **Prompt 26: Hue Saturation Value Node Interface**
```
Create an illustration of HSV node properties panel. Node header at top showing "Hue Saturation Value" label. Below: three horizontal sliders stacked vertically. Top slider: "Hue" with range indicator -180° to +180°, set near center (0°), color strip showing color wheel spectrum beneath. Middle slider: "Saturation" ranging 0.0 to 2.0, set to 1.0, grayscale to vivid color strip beneath. Bottom slider: "Value" ranging 0.0 to 2.0, set to 1.0, black to white gradient beneath. Clean annotations to right of each slider explaining effect: "Shifts colors", "Color intensity", "Brightness". Background: medium grey matching Blender properties. Style: accurate Blender UI with educational labels. Resolution: 1000x800.
```

### **Prompt 27: Professional Color Grading Workflow**
```
Create a well-organized compositor node tree screenshot. Three distinct sections separated by colored frames: green frame labeled "CORRECTION" (left) containing Exposure, RGB Curves, HSV nodes connected in series; orange frame labeled "PRIMARY GRADE" (center) with Color Balance, additional curves; purple frame labeled "SECONDARY GRADE" (right) showing masks and selective adjustments. Render Layers on far left connects to correction frame. Final composite output on far right. Clean horizontal flow, nodes aligned neatly. Background: dark grey (#2b2b2b). Connection lines in yellow, clearly visible. Style: professional, organized node tree example. Resolution: 2400x800 (wide).
```

### **Prompt 28: Z-Depth Pass Visualization**
```
Create a split-screen showing Z-depth pass. Left half: full color render of modern interior scene with furniture at various distances - chair in foreground, table mid-ground, wall in background. Right half: corresponding Z-depth pass showing same scene in grayscale - near objects (chair) pure white, gradually transitioning to medium grey (table), far objects (wall) dark grey to black. Smooth gradient showing distance mapping. Vertical dividing line. Labels: "Color Render" and "Z-Depth Pass (Distance Data)". Background: dark grey (#2b2b2b). Style: professional technical demonstration. Resolution: 1920x1080.
```

### **Prompt 29: Depth-Based Fog Setup**
```
Create a comprehensive node diagram showing fog creation. Left to right flow: "Render Layers" node with Z output → "Map Range" node (From Min: 0, From Max: 20) → "ColorRamp" node showing black-to-white gradient → branches to two paths. Top path: ColorRamp → Mix node Factor input. Bottom path: Image output from Render Layers → Mix Image input 1. RGB node (light grey fog color) → Mix Image input 2. Mix set to Mix mode. Final output to Composite. Yellow connection lines. Orange annotation boxes explaining each step: "Normalize depth", "Control falloff", "Mix with fog color". Background: dark grey (#2b2b2b). Style: detailed technical tutorial diagram. Resolution: 2000x1000.
```

### **Prompt 30: Fog Effect Before/After**
```
Create a side-by-side comparison of atmospheric fog effect. Both panels show same 3D scene: modern architectural space with columns extending into distance. Left panel labeled "No Fog": crystal clear, all details sharp throughout depth, somewhat flat appearance. Right panel labeled "Depth-Based Fog": foreground still clear and sharp, middle distance shows subtle haze, far distance fades into soft grey fog creating atmospheric perspective and depth. Same lighting, only fog difference. Vertical dividing line. Background behind scene: dark grey (#2b2b2b). Style: professional atmosphere demonstration. Resolution: 1920x1080.
```

### **Prompt 31: Glare Node Types Comparison**
```
Create a 2x2 grid showing four Glare types applied to same bright light source (glowing sphere on dark background). Top-left: "Fog Glow" - soft, even bloom spreading from light. Top-right: "Streaks" - four or eight light rays radiating from source. Bottom-left: "Ghosts" - multiple ghost reflections/copies of light scattered across frame. Bottom-right: "Simple Star" - classic star filter effect with pointed rays. Each panel labeled at bottom. Same light source brightness in all panels to isolate glare effect differences. Background: very dark grey (#1a1a1a). Style: technical effects comparison. Resolution: 1600x1600.
```

### **Prompt 32: Glare Node Settings Interface**
```
Create an illustration of Glare node properties panel. Top: "Glare" node header. Below: dropdown menu for "Type" showing options: Fog Glow (selected), Streaks, Ghosts, Simple Star. Below that: "Quality" dropdown set to "High". Following sections show: "Threshold" slider (value 1.0) with annotation "Only affects bright areas", "Size" slider (value 7) with annotation "Spread distance", "Mix" slider (value 0.0) with annotation "Blend amount". Additional settings for iterations, color modulation. Background: medium grey. Orange annotation arrows pointing to key settings. Style: annotated Blender UI screenshot. Resolution: 800x1200 (vertical).
```

### **Prompt 33: Subtle vs Excessive Glow**
```
Create a three-panel progression showing glow effect levels. All panels show same scene: product (modern watch) with bright highlights. Left panel: "No Glow" - clean render, highlights crisp and defined, perhaps slightly harsh. Center panel: "Professional Glow" - subtle soft bloom around highlights, barely noticeable but adds polish, maintains detail. Right panel: "Excessive Glow" - obvious fuzzy halos, lost detail, amateur appearance, bloated glow obscuring form. Labels at bottom of each panel. Center panel has green checkmark, right panel has red X. Background: dark grey (#2b2b2b). Style: educational comparison warning against overdoing effects. Resolution: 1920x720.
```

### **Prompt 34: Custom Glow Creation Method**
```
Create a node diagram showing advanced selective glow technique. Top path: Render Layers → RGB Curves node (showing steep threshold curve isolating bright areas) → Blur node (Gaussian, Size: 30) → Mix node (Screen blend mode). Bottom path: Render Layers → directly to same Mix node bottom input. Mix Factor: 0.4. Output to Composite. Yellow connections clear. Orange annotations: "Isolate brights" at Curves, "Soft glow" at Blur, "Add glow back" at Mix. Shows more control than simple Glare node. Background: dark grey (#2b2b2b). Style: advanced technique tutorial. Resolution: 1800x900.
```

### **Prompt 35: Vignette Effect Demonstration**
```
Create a before/after comparison of vignette effect. Split image vertically down center. Left side: product photography (luxury perfume bottle) with even lighting corner to corner, somewhat generic feel. Right side: same image with subtle vignette - corners and edges gently darkened, drawing eye naturally to center where product sits, more professional polished appearance. Vignette should be subtle - barely noticeable but effective. Thin vertical dividing line. Labels: "Even Lighting" and "Subtle Vignette". Background outside frame: dark grey (#2b2b2b). Style: professional product photography enhancement demonstration. Resolution: 1920x1080.
```

### **Prompt 36: Vignette Creation Methods**
```
Create a side-by-side comparison of two vignette creation methods. Left panel: "Lens Distortion Method" - shows Lens Distortion node with Dispersion parameter highlighted, simple single-node approach. Right panel: "Ellipse Mask Method" - shows node setup: Ellipse Mask → ColorRamp (adjusting falloff) → Mix node (Multiply blend), more control but more complex. Both panels show resulting vignette effect as small preview. Orange annotation boxes explaining advantages of each method. Background: dark grey (#2b2b2b). Style: technical comparison of methods. Resolution: 1800x900.
```

### **Prompt 37: Chromatic Aberration Example**
```
Create a detailed close-up showing chromatic aberration effect. Main image: zoomed view of high-contrast edge (black object against white background). Edge shows subtle red/cyan color fringing - red shift on one side of edge, cyan shift on other side, creating separated color channels visible. Include inset box showing same area WITHOUT aberration for comparison - single clean edge with no color fringing. Red and cyan color fringing exaggerated slightly for educational visibility. Annotation arrows pointing to fringe areas: "Red channel shift" and "Cyan channel shift". Background: dark grey (#2b2b2b). Style: technical optical effect demonstration. Resolution: 1400x1000.
```

### **Prompt 38: Lens Distortion Node Interface**
```
Create an illustration of Lens Distortion node properties panel. Node header: "Lens Distortion". Below: three main sliders. "Distortion" slider (range -1 to +1, currently at -0.05) with annotation "Barrel/Pincushion effect". "Dispersion" slider (range 0 to 1, currently at 0.02) with annotation "Chromatic aberration". "Jitter" slider (range 0 to 1, at 0) with annotation "Edge blur amount". Checkbox: "Fit" (checked) and "Projector" (unchecked). Visual mini-previews showing effect of each parameter: barrel distortion example, color fringing example. Background: medium grey. Orange annotation arrows. Style: annotated Blender UI. Resolution: 900x1200 (vertical).
```

### **Prompt 39: Film Grain Comparison**
```
Create a three-panel comparison showing grain intensity levels. All panels show same image (vintage-style portrait). Left panel: "No Grain" - perfectly clean digital render, perhaps too perfect. Center panel: "Subtle Professional Grain" - barely visible fine texture, adds organic quality without being distracting, film-like. Right panel: "Heavy Vintage Grain" - pronounced grainy texture throughout, strong vintage film aesthetic. Each panel labeled at bottom. Center panel has green checkmark as recommended for professional work. Background: dark grey (#2b2b2b). Zoom inset circles showing grain detail close-up. Style: educational grain intensity comparison. Resolution: 1920x720.
```

### **Prompt 40: Film Grain Creation Setup**
```
Create a node diagram showing grain texture application. Top path: "Noise Texture" node (Grayscale, Scale: 500) → "ColorRamp" node (adjusting contrast of grain) → "Mix" node (Overlay blend mode, Factor: 0.04). Bottom path: Image from Render Layers → same Mix node bottom input. Mix output to Composite. Yellow connection lines. Orange annotations: "Generate grain texture" at Noise, "Control grain contrast" at ColorRamp, "Very low factor = subtle" at Mix. Inset showing resulting grain texture pattern. Background: dark grey (#2b2b2b). Style: technical texture overlay tutorial. Resolution: 1800x900.
```

### **Prompt 41: Sharpening Before/After**
```
Create a split comparison showing sharpening effect. Single image divided vertically: architectural detail with fine textures. Left half: "Slightly Soft" - edges somewhat blurred, fine details unclear, perhaps from denoising. Right half: "Sharpened" - edges crisp and defined, fine texture details visible, enhanced clarity. Include zoomed-in inset circles on both sides showing detail area close-up - dramatic difference in edge definition visible. Thin vertical dividing line. Background: dark grey (#2b2b2b). Style: professional detail enhancement demonstration. Resolution: 1920x1080.
```

### **Prompt 42: Sharpen Node Interface**
```
Create a simple illustration of Sharpen filter node properties. Node header: "Sharpen". Below: two main controls. "Amount" slider (range 0 to 1, currently at 0.4) with annotation "Sharpening intensity". "Threshold" slider (range 0 to 1, currently at 0.0) with annotation "Prevents sharpening noise". Simple interface. Optional: small preview window showing effect. Background: medium grey matching Blender properties. Style: clean Blender UI representation. Resolution: 800x600.
```

### **Prompt 43: Over-Sharpening Warning**
```
Create a three-stage progression showing sharpening levels. All panels show same detail: product edge with texture. Left panel: "Original" - baseline sharpness, natural appearance. Center panel: "Properly Sharpened" - enhanced edge definition, increased clarity, no artifacts, green checkmark. Right panel: "Over-Sharpened" - harsh edges, visible halos (light outlines around edges), unnatural appearance, artifacts visible, red X. Each panel labeled. Zoom inset showing edge detail in each version. Background: dark grey (#2b2b2b). Style: warning demonstration against excessive processing. Resolution: 1920x720.
```

### **Prompt 44: Complete Enhancement Stack**
```
Create a comprehensive wide node tree showing complete post-processing setup. Organized left to right with labeled frames: Frame 1 "PASS INTEGRATION" (green) - combining diffuse/glossy. Frame 2 "CORRECTION" (blue) - exposure, curves, saturation. Frame 3 "FOG" (cyan) - Z-depth fog setup. Frame 4 "GRADING" (orange) - creative color balance. Frame 5 "EFFECTS" (purple) - glow, vignette. Frame 6 "POLISH" (pink) - sharpen, grain. Frame 7 "OUTPUT" (green) - file outputs. Render Layers far left feeds into pipeline. Multiple file output nodes at end for different formats. Clean horizontal flow, well-organized. Background: dark grey (#2b2b2b). Style: professional complete compositor example. Resolution: 3000x1000 (very wide).
```

### **Prompt 45: Firefly Artifacts Example**
```
Create an illustration showing firefly rendering artifacts. Dark rendered scene (night interior) with numerous extremely bright white/colored pixels scattered randomly throughout - these are fireflies. Most visible in dark/shadow areas. Several fireflies circled in red with annotation arrows pointing to them: "Firefly artifact - single bright pixel". Image shows problematic render quality. Small inset showing zoomed detail of one firefly - appears as single ultra-bright pixel surrounded by darker neighbors. Background: very dark scene showing problem clearly. Style: technical problem demonstration. Resolution: 1920x1080.
```

### **Prompt 46: Despeckle Filter Application**
```
Create a before/after comparison of firefly removal. Split image vertically. Left side: "Noisy Render with Fireflies" - dark scene with scattered bright pixel artifacts throughout, particularly in shadows. Right side: "After Despeckle Filter" - same scene cleaned, fireflies removed, smooth rendering, details preserved. Thin vertical dividing line. Below images: simple node diagram showing Filter → Despeckle node with settings visible. Labels at bottom of each panel. Background: dark grey (#2b2b2b). Style: problem-solution demonstration. Resolution: 1920x1080.
```

### **Prompt 47: Denoise Node Usage**
```
Create a composite showing denoise node application. Top section: node diagram showing Render Layers (with Denoising Data: Albedo and Normal passes) → Denoise node → Composite. Bottom section: before/after comparison split image. Left: "Grainy Render" - visible noise throughout, especially in shadows. Right: "Denoised" - smooth clean render, noise removed while preserving edge detail. Orange annotation: "Requires Albedo & Normal passes enabled before rendering". Background: dark grey (#2b2b2b). Style: technical noise reduction demonstration. Resolution: 1800x1200.
```

### **Prompt 48: Banding Problem and Solution**
```
Create a three-stage demonstration of gradient banding fix. All panels show smooth gradient (sunset sky). Left panel: "Banding Visible" - gradient shows clear stepped bands instead of smooth transition, 8-bit limitation visible. Center panel: "Grain Added" - same gradient with subtle noise texture applied, grain breaking up band visibility. Right panel: "Smooth Appearance" - gradient appears smooth due to dithering effect of grain, bands no longer visible. Each panel labeled. Background: dark grey (#2b2b2b). Style: technical solution demonstration. Resolution: 1920x720.
```

### **Prompt 49: Exposure Correction with Curves**
```
Create a composite showing shadow recovery technique. Left side: very dark underexposed render with lost shadow detail. Center: RGB Curves graph showing correction - left side of curve lifted significantly (brightening shadows), right side remains flat (preserving highlights that aren't blown). Right side: corrected image with visible shadow detail, proper exposure, highlights protected. Orange annotation arrows on curve: "Lift shadows" pointing to raised left portion, "Preserve highlights" pointing to flat right portion. Background: dark grey (#2b2b2b). Style: technical correction demonstration. Resolution: 1920x900.
```

### **Prompt 50: Background Blur for Focus**
```
Create a before/after showing depth-based selective focus. Split image vertically. Left side: "Sharp Throughout" - product in foreground sharp, background environment also sharp and detailed, somewhat distracting. Right side: "Background Blurred" - product remains crisp and clear, background softly blurred creating depth separation and focus on subject, professional depth of field effect. Z-depth pass used for masking visible in small corner inset. Vertical dividing line. Background: dark grey (#2b2b2b). Style: professional focus enhancement demonstration. Resolution: 1920x1080.
```

### **Prompt 51: Transform Node Reframing**
```
Create a before/after comparison showing image repositioning. Left panel: "Off-Center Original" - subject positioned awkwardly to left of frame, poor composition. Right panel: "Reframed" - same image shifted using Transform node, subject now well-positioned using rule of thirds. Below panels: Transform node settings visible showing X/Y offset values, Scale and Rotate parameters. Orange annotations showing transformation applied. Background: dark grey (#2b2b2b). Style: compositional correction demonstration. Resolution: 1800x1000.
```

### **Prompt 52: Background Isolation with Z-Depth Mask**
```
Create a node diagram with result showing selective background adjustment. Top: node tree showing Z-depth → Map Range → ColorRamp creating mask. Mask splits to two paths: foreground (subject) path stays sharp, background path goes through Blur/Darken nodes. Paths recombine. Bottom: resulting image showing sharp focused subject with blurred/darkened background. Orange annotations: "Subject mask", "Background processing". Background: dark grey (#2b2b2b). Style: advanced masking technique tutorial. Resolution: 1800x1200.
```

### **Prompt 53: Alpha Channel Issues Example**
```
Create a three-panel comparison showing alpha problems. All panels show same transparent element composited over background. Left panel: "Correct Alpha" - clean edges, proper transparency, no fringing. Center panel: "Premultiply Error" - dark fringe around edges, black halo visible. Right panel: "Unpremultiply Error" - light halo around edges, white fringing. Each panel labeled with red X for errors, green check for correct. Below: annotations explaining premultiply vs straight alpha. Background: contrasting colored background to show edge issues clearly. Style: technical alpha channel problem demonstration. Resolution: 1920x720.
```

### **Prompt 54: Alpha Over Node Compositing**
```
Create a node diagram with visual result showing layer compositing. Top section: node tree showing two Image input nodes - "Foreground" (object with alpha transparency) and "Background" (environment) → Alpha Over node → Composite. Alpha Over node settings visible: Factor 1.0, Premul checked. Bottom section: resulting composite image showing foreground properly layered over background with correct transparency blending. Orange annotations: "Image with transparency", "Background layer", "Properly composited result". Background: dark grey (#2b2b2b). Style: compositing fundamentals tutorial. Resolution: 1600x1200.
```

### **Prompt 55: Color Space Comparison**
```
Create a three-panel comparison showing color space importance. All panels show same render. Left panel: "Linear (Incorrect Display)" - appears very dark and washed out, incorrect for viewing. Center panel: "sRGB (Correct)" - proper brightness, vibrant colors, natural appearance, green checkmark. Right panel: "Wrong Space Applied" - color shift, unnatural tones, incorrect gamma. Each panel labeled. Above: annotation explaining "Color space must match output destination". Background: dark grey (#2b2b2b). Style: color management education demonstration. Resolution: 1920x720.
```

### **Prompt 56: Photoshop Integration Workflow**
```
Create a horizontal workflow diagram showing Blender to Photoshop roundtrip. Left: Blender logo/icon with "Export TIFF 16-bit" arrow. Center: Photoshop logo with annotation "Detailed retouching, text, graphics". Right: "Export PNG/JPEG" arrow to final delivery icon. File format icons shown at transition points. Color coded: purple for Blender, blue for Photoshop, green for delivery. Rounded rectangles for each stage. Background: clean white or light grey. Style: professional workflow infographic. Resolution: 1600x400.
```

### **Prompt 57: DaVinci Resolve Color Page**
```
Create an illustration of DaVinci Resolve Color page interface. Top: tabs showing "Color" selected. Center-left: node graph showing color grading node tree. Center-right: color wheels (three circular gradients for Lift/Gamma/Gain). Bottom: scopes section showing waveform and vectorscope. Right side: clip thumbnails. Dark interface (Resolve's signature dark theme). Professional color grading environment. Orange highlights on key areas. Style: professional color grading software interface. Resolution: 1920x1080.
```

### **Prompt 58: After Effects Timeline with 3D Render**
```
Create an illustration of After Effects timeline. Top: composition viewer showing 3D product render with motion graphics text overlaid. Bottom: timeline panel showing multiple layers - "3D Render Sequence" layer at bottom, "Animated Title" layer, "Logo" layer, "Background Graphics" layer stacked above. Timeline markers and keyframes visible. Purple/dark interface matching After Effects aesthetic. Layer icons showing different types. Style: motion graphics software interface demonstration. Resolution: 1920x1080.
```

### **Prompt 59: File Format Decision Tree**
```
Create an SVG flowchart guiding format selection. Start at top: "Choose Export Format". First decision diamond: "Need transparency?" - Yes → "PNG" box, No → continue. Next diamond: "Print quality needed?" - Yes → "TIFF 16-bit" box, No → continue. Next diamond: "Small file size required?" - Yes → "JPEG 90%" box, No → "PNG" box. Additional branch: "Further editing?" - Yes → "EXR/TIFF" box. Use color coding: green for final formats, orange for intermediate formats. Clean arrows connecting decisions. Background: white or light grey. Style: clean decision tree diagram. Resolution: 1200x1600 (vertical).
```

### **Prompt 60: Multi-Software Workflow Example**
```
Create a comprehensive workflow infographic. Horizontal flow showing: Blender icon "Render + Composite" (purple) → file icon "EXR 16-bit" → DaVinci Resolve icon "Color Grade" (red) → file icon "ProRes" → After Effects icon "Motion Graphics" (blue) → file icon "H.264" → Photoshop icon "Still Frame Retouch" (blue) → file icon "PNG/JPEG" → "Final Delivery" (green). Each stage in rounded rectangle, file formats between stages. Arrows connecting all elements. Software logos recognizable. Background: clean gradient. Style: professional multi-software pipeline infographic. Resolution: 2400x600 (wide).
```

### **Prompt 61: Output Properties Panel Settings**
```
Create an illustration of Blender Output Properties panel. Properties icon row at top with Output Properties (printer icon) highlighted in orange. Below: expanded sections. "Format" section showing Resolution X/Y fields (1920×1080), Frame Rate dropdown (24 fps). "Output" section showing file path field with folder icon. "File Format" dropdown expanded showing options: PNG, JPEG, OpenEXR, TIFF, FFmpeg video. Orange annotations pointing to key settings. Background: medium grey matching Blender interface. Style: annotated Blender UI screenshot. Resolution: 800x1400 (vertical).
```

### **Prompt 62: PNG Export Settings**
```
Create an illustration showing PNG format options in Blender. Output Properties panel section focused on File Format settings. Dropdown set to "PNG". Below: "Color" dropdown showing options: RGB, RGBA (highlighted - includes transparency). "Color Depth" dropdown: 8, 16 (16 selected). "Compression" slider (0-100%, set to 15%). Orange annotations: "RGBA for transparency" pointing to Color dropdown, "16-bit for quality" pointing to depth setting. Background: medium grey. Style: Blender UI detail with annotations. Resolution: 800x800.
```

### **Prompt 63: JPEG Quality Comparison**
```
Create a four-panel grid showing JPEG compression levels. All panels show same detail-rich area (texture, edges). Top-left: "100% Quality" - maximum quality but still lossy. Top-right: "90% Quality" - excellent, imperceptible loss. Bottom-left: "80% Quality" - minor artifacts in detailed areas. Bottom-right: "60% Quality" - obvious compression artifacts, blocking visible. Each panel labeled with quality percentage and file size. Red boxes highlighting artifact areas in lower quality versions. Green checkmark on 90% as recommended. Background: dark grey (#2b2b2b). Style: compression quality education. Resolution: 1600x1600.
```

### **Prompt 64: EXR vs PNG vs JPEG File Size Comparison**
```
Create an infographic comparing file sizes. Three file icons vertically stacked (all representing same 1920×1080 image): Top: EXR file icon (blue) "scene.exr - 28.5 MB" with tag "32-bit HDR, all passes". Middle: PNG file icon (orange) "scene.png - 18.2 MB" with tag "16-bit lossless". Bottom: JPEG file icon (green) "scene.jpg - 1.2 MB" with tag "8-bit compressed 90%". Horizontal bars to right showing relative file sizes visually - EXR longest bar, JPEG shortest. Background: clean white. Style: clean comparative infographic. Resolution: 1000x1400 (vertical).
```

### **Prompt 65: Color Space Settings Interface**
```
Create an illustration of Color Management section in Render Properties. Properties panel showing Color Management rollout expanded. "View Transform" dropdown showing options: Standard (selected), Filmic, False Color. "Look" dropdown: None, Very High Contrast, High Contrast, Medium Contrast, etc. "Display Device" dropdown: sRGB (selected), DCI-P3, Rec.709. Orange annotations: "Output color space" at View Transform, "Creative looks" at Look dropdown. Background: medium grey. Style: annotated Blender UI showing color management. Resolution: 900x800.
```

### **Prompt 66: sRGB vs Adobe RGB Gamut Comparison**
```
Create a diagram showing color space gamuts. CIE 1931 chromaticity diagram as base (horseshoe-shaped color space plot). Two triangular gamut outlines overlaid: smaller triangle in orange representing sRGB gamut, larger triangle in blue representing Adobe RGB gamut. Adobe RGB clearly encompasses more green and cyan areas. Labels: "sRGB (Web/Digital)" on smaller triangle, "Adobe RGB (Print/Photo)" on larger. Spectral locus outline in rainbow gradient. Background: white or light grey. Style: technical color science diagram. Resolution: 1200x1200.
```

### **Prompt 67: Video Export Settings (FFmpeg)**
```
Create an illustration showing video export settings in Blender. Output Properties panel focused on FFmpeg video section. "File Format" set to FFmpeg video. "Container" dropdown showing: MPEG-4 (selected), QuickTime, AVI, etc. "Video Codec" dropdown: H.264 (selected), H.265, ProRes, DNxHD options visible. Below: "Encoding" section with "Output Quality" dropdown (High Quality selected), "Encoding Speed" (Good), "Bitrate" slider. Orange annotations highlighting key settings for web delivery. Background: medium grey. Style: Blender UI with educational annotations. Resolution: 900x1200 (vertical).
```

### **Prompt 68: Quality Control Checklist Visual**
```
Create an infographic checklist for final QC. Vertical list with checkbox items and icons: ✓ Resolution verified (1920×1080 icon), ✓ Color accuracy checked (color wheel icon), ✓ No compression artifacts (magnifying glass icon), ✓ Correct file format (document icon), ✓ Playback tested (play button icon), ✓ File naming correct (file icon), ✓ Tested on other devices (multiple device icons). All checkmarks in green. Clean professional checklist design. Background: light grey or white. Style: professional quality control infographic. Resolution: 800x1400 (vertical).
```

### **Prompt 69: Cloud Transfer Service Icons**
```
Create a clean icon grid showing delivery services. 2×2 grid layout. Top-left: Dropbox logo (blue box icon) with "Dropbox" text below. Top-right: Google Drive logo (triangle) with "Google Drive" text. Bottom-left: WeTransfer logo with "WeTransfer" text. Bottom-right: Frame.io logo with "Frame.io" text. Each logo recognizable, official brand colors maintained. Below each: brief descriptor like "All files", "Free 15GB", "Simple transfer", "Video review". Clean spacing between elements. Background: white or light grey. Style: professional service comparison. Resolution: 1200x1200.
```

### **Prompt 70: Delivery Email Template Visual**
```
Create a mockup of professional delivery email interface. Email client interface showing composed message. Subject line: "[Project Name] - Final Delivery". Body shows well-formatted text with sections: greeting, download link (prominent blue button), CONTENTS list (bullet points), FILE SPECIFICATIONS list, organized file structure description, closing. Clean formatting, professional appearance, good spacing and hierarchy. Sidebar shows typical email interface elements. Modern email client design. Style: professional email mockup demonstration. Resolution: 1400x1000.
```

### **Prompt 71: Complete Node Tree - Professional Example**
```
Create a very wide screenshot showing complete professional compositor setup. Spans entire width showing: far left "Render Layers" with multiple passes → green frame "PASS INTEGRATION" (combining diffuse/glossy with adjustments) → blue frame "COLOR CORRECTION" (exposure, curves, saturation) → orange frame "COLOR GRADING" (color balance, creative look) → purple frame "ATMOSPHERIC EFFECTS" (fog, glow) → pink frame "FINAL POLISH" (vignette, sharpen, grain) → far right multiple File Output nodes for different export formats. Approximately 30-40 nodes total, logically organized with clean connections. Background: dark grey (#2b2b2b). Style: complete professional node tree example. Resolution: 3840x1200 (ultra-wide).
```

### **Prompt 72: Before/After Project Comparison**
```
Create a dramatic split comparison showing complete transformation. Large split image divided vertically down center. Left side: "Raw Render" - product turntable render (modern headphones) that's technically correct but flat: neutral colors, even lighting throughout, no effects, somewhat clinical appearance. Right side: "Post-Processed Final" - same headphones with full professional treatment: warm color grade, subtle atmospheric haze adding depth, gentle glow on highlights, slight vignette, proper contrast, sharpened details, film grain texture, polished professional appearance. Thin vertical dividing line. Labels at top of each side. Background: dark grey (#2b2b2b). Style: dramatic portfolio-worthy transformation showcase. Resolution: 1920x1080.
```

### **Prompt 73: Multiple Export Versions Layout**
```
Create a file organization visualization. Folder structure diagram showing: Root folder "ProjectName_Final/" containing three subfolders. Folder 1 (green): "master/" containing TIFF file icon "product_master.tif - 24MB" with tag "16-bit archive". Folder 2 (orange): "web/" containing PNG file icon "product_web.png - 4.2MB" with tag "8-bit optimized". Folder 3 (blue): "social/" containing JPEG file icon "product_social_1080x1080.jpg - 890KB" with tag "Instagram ready". Clean folder icons, file type icons, size labels. Background: light grey. Style: organized file delivery demonstration. Resolution: 1400x1000.
```

### **Prompt 74: Compositor Keyboard Shortcuts Reference**
```
Create a keyboard shortcut cheat sheet for Blender Compositor. Grid layout showing 12 common shortcuts. Each cell contains: keyboard key visual (rounded square with key letter/symbol) above action text. Shortcuts shown: Shift+A (Add Node), M (Mute Node), G (Move), X (Delete), Shift+D (Duplicate), Ctrl+J (Frame), N (Properties Panel), H (Hide Sockets), B (Box Select), Ctrl+Right-drag (Cut Connections), F12 (Render), Ctrl+F12 (Animation). Keys shown in orange, text in white. Background: dark grey (#2b2b2b). Style: professional quick reference cheat sheet. Resolution: 1600x1200.
```

### **Prompt 75: Post-Processing Success Indicators**
```
Create a 2×2 grid showing quality indicators. Four panels demonstrating success criteria. Top-left: "Good Contrast ✓" - image with proper tonal range, histogram shown below. Top-right: "Proper Color Balance ✓" - neutral whites, natural colors. Bottom-left: "Subtle Effects ✓" - before/after toggle showing barely noticeable but impactful enhancements. Bottom-right: "Clean Output ✓" - zoomed detail showing no artifacts, proper sharpness. Green checkmarks on each panel. Each panel shows product render example meeting criterion. Background: dark grey (#2b2b2b). Style: quality achievement demonstration. Resolution: 1600x1600.
```

---

## SVG Diagram Recommendations

The following images are ideal candidates for SVG format due to their geometric nature, scalability needs, and text-heavy content:

### **High Priority SVG Candidates:**

1. **Image #2 - Professional Post-Processing Workflow Diagram** - Flowchart with icons and text, perfect for SVG
2. **Image #6 - Node Socket Types Color Reference** - Simple geometric shapes with labels
3. **Image #7 - Essential Compositor Nodes Cheat Sheet** - Grid of labeled boxes, ideal for SVG
4. **Image #12 - Render Passes Concept Diagram** - Educational diagram with arrows and labels
5. **Image #18 - EXR Multi-Layer File Structure** - Infographic with radiating arrows
6. **Image #27 - Professional Color Grading Workflow** - Organized node frames diagram
7. **Image #59 - File Format Decision Tree** - Classic flowchart, SVG perfect
8. **Image #60 - Multi-Software Workflow Example** - Linear workflow with icons
9. **Image #66 - sRGB vs Adobe RGB Gamut Comparison** - Technical diagram with overlays
10. **Image #68 - Quality Control Checklist Visual** - List with checkboxes and icons
11. **Image #69 - Cloud Transfer Service Icons** - Icon grid with labels
12. **Image #74 - Compositor Keyboard Shortcuts Reference** - Grid layout cheat sheet

### **Rationale for SVG Recommendations:**

These images benefit from SVG format because they:
- Contain primarily text and geometric shapes
- Need to scale without quality loss for different screen sizes
- Have clean lines and simple color palettes
- Serve as reference materials that users may zoom into
- Are primarily informational/diagrammatic rather than photographic
- Can be easily updated or modified if needed
- Result in smaller file sizes than raster equivalents

---

## Image Placement Suggestions in HTML

### **Introduction Section (id="intro-post-processing")**
- **After opening paragraph:** Insert **Image #1** (Post-Processing Before/After Comparison)
- **Within "Why Post-Processing Matters" card:** Insert **Image #2** (Professional Post-Processing Workflow Diagram)
- **Within "Tools for Post-Processing" card:** Insert **Image #69** (Cloud Transfer Service Icons) near software discussion

### **Compositor Basics Section (id="compositor-basics")**
- **After "Accessing the Compositor" heading:** Insert **Image #3** (Blender Compositor Workspace Screenshot)
- **In "Getting Started" card:** Insert **Image #4** (Use Nodes Checkbox Location)
- **After "Compositor Interface Overview":** Insert **Image #5** (Compositor Interface Anatomy)
- **Within "Understanding the Layout" subsection:** Insert **Image #6** (Node Socket Types Color Reference)
- **In "Essential Node Types" card:** Insert **Image #7** (Essential Compositor Nodes Cheat Sheet)
- **After basic operations explanation:** Insert **Image #8** (Basic Node Connection Example)
- **In "Working with Nodes" card:** Insert **Image #9** (Node Selection and Manipulation)
- **After "Your First Compositor Setup" exercise:** Insert **Image #10** (RGB Curves Interface)
- **Near end of section:** Insert **Image #74** (Compositor Keyboard Shortcuts Reference)

### **Render Passes Section (id="render-passes")**
- **After section opening:** Insert **Image #12** (Render Passes Concept Diagram)
- **In "Core Passes Explained" card:** Insert **Image #13** (Beauty Pass vs Component Passes)
- **In "Setting Up Passes" subsection:** Insert **Image #14** (View Layer Properties - Passes Section)
- **After "Accessing Passes in Compositor":** Insert **Image #15** (Render Layers Node with Multiple Passes)
- **In "Basic Pass Compositing" exercise:** Insert **Image #16** (Manual Pass Reconstruction Node Setup)
- **After pass adjustment explanation:** Insert **Image #17** (Pass Integration with Control)
- **In "EXR Multi-Layer Workflow" card:** Insert **Image #18** (EXR Multi-Layer File Structure)

### **Color Correction Section (id="color-correction")**
- **After section introduction:** Insert **Image #19** (Color Correction vs Grading Comparison)
- **In white balance correction subsection:** Insert **Image #20** (White Balance Correction Example)
- **After exposure correction explanation:** Insert **Image #21** (Exposure Correction with Curves)
- **In "RGB Curves Mastery" card:** Insert **Image #11** (S-Curve for Contrast)
- **After channel-specific explanation:** Insert **Image #22** (RGB Curves Channel-Specific Adjustment)
- **In Color Balance section:** Insert **Image #23** (Color Balance Node Interface)
- **In "Split Toning Technique" card:** Insert **Image #24** (Split Toning Example)
- **After grading styles list:** Insert **Image #25** (Popular Color Grading Styles Comparison)
- **In HSV node explanation:** Insert **Image #26** (Hue Saturation Value Node Interface)
- **In workflow section:** Insert **Image #27** (Professional Color Grading Workflow)

### **Atmospheric Effects Section (id="atmospheric-effects")**
- **After Z-Depth explanation:** Insert **Image #28** (Z-Depth Pass Visualization)
- **In "Adding Depth with Fog" card:** Insert **Image #29** (Depth-Based Fog Setup)
- **After fog creation steps:** Insert **Image #30** (Fog Effect Before/After)
- **In "Glows and Bloom Effects" card:** Insert **Image #31** (Glare Node Types Comparison)
- **After Glare node explanation:** Insert **Image #32** (Glare Node Settings Interface)
- **In glow warning section:** Insert **Image #33** (Subtle vs Excessive Glow)
- **In "Selective Glow" subsection:** Insert **Image #34** (Custom Glow Creation Method)
- **After vignette explanation:** Insert **Image #35** (Vignette Effect Demonstration)
- **In vignette creation methods:** Insert **Image #36** (Vignette Creation Methods)
- **After chromatic aberration description:** Insert **Image #37** (Chromatic Aberration Example)
- **In lens effects card:** Insert **Image #38** (Lens Distortion Node Interface)
- **In "Film Grain and Texture" card:** Insert **Image #39** (Film Grain Comparison)
- **After grain creation steps:** Insert **Image #40** (Film Grain Creation Setup)
- **In sharpening section:** Insert **Image #41** (Sharpening Before/After)
- **After Sharpen node description:** Insert **Image #42** (Sharpen Node Interface)
- **In sharpening warning:** Insert **Image #43** (Over-Sharpening Warning)
- **In "Combining Effects" card:** Insert **Image #44** (Complete Enhancement Stack)

### **Common Fixes Section (id="common-fixes")**
- **In firefly subsection:** Insert **Image #45** (Firefly Artifacts Example)
- **After Despeckle explanation:** Insert **Image #46** (Despeckle Filter Application)
- **In "General Noise" subsection:** Insert **Image #47** (Denoise Node Usage)
- **After banding explanation:** Insert **Image #48** (Banding Problem and Solution)
- **In shadow recovery section:** Insert **Image #49** (Exposure Correction with Curves)
- **After background adjustment discussion:** Insert **Image #50** (Background Blur for Focus)
- **In composition fixes card:** Insert **Image #51** (Transform Node Reframing)
- **In selective adjustment section:** Insert **Image #52** (Background Isolation with Z-Depth Mask)
- **In alpha channel section:** Insert **Image #53** (Alpha Channel Issues Example)
- **After Alpha Over explanation:** Insert **Image #54** (Alpha Over Node Compositing)

### **External Software Section (id="external-software")**
- **In color space discussion:** Insert **Image #55** (Color Space Comparison)
- **In Photoshop workflow:** Insert **Image #56** (Photoshop Integration Workflow)
- **After Resolve description:** Insert **Image #57** (DaVinci Resolve Color Page)
- **In After Effects section:** Insert **Image #58** (After Effects Timeline with 3D Render)
- **In file format card:** Insert **Image #59** (File Format Decision Tree)
- **After multi-software example:** Insert **Image #60** (Multi-Software Workflow Example)

### **Final Output Section (id="final-output")**
- **In export settings subsection:** Insert **Image #61** (Output Properties Panel Settings)
- **After PNG settings explanation:** Insert **Image #62** (PNG Export Settings)
- **In compression discussion:** Insert **Image #63** (JPEG Quality Comparison)
- **After file size explanation:** Insert **Image #64** (EXR vs PNG vs JPEG File Size Comparison)
- **In "Color Space Management" card:** Insert **Image #65** (Color Space Settings Interface)
- **After color space explanation:** Insert **Image #66** (sRGB vs Adobe RGB Gamut Comparison)
- **In video export section:** Insert **Image #67** (Video Export Settings (FFmpeg))
- **In "Quality Control" card:** Insert **Image #68** (Quality Control Checklist Visual)
- **In delivery methods section:** Insert **Image #70** (Delivery Email Template Visual)

### **Project Section (id="project")**
- **After Phase 3 completion:** Insert **Image #71** (Complete Node Tree - Professional Example)
- **In "Evaluation and Comparison" subsection:** Insert **Image #72** (Before/After Project Comparison)
- **After export discussion:** Insert **Image #73** (Multiple Export Versions Layout)
- **In success indicators section:** Insert **Image #75** (Post-Processing Success Indicators)

---

## File Naming Convention

```
lesson_47_XX_descriptive_name.ext
```

**Format Guidelines:**
- Lesson number: `lesson_47`
- Two-digit image number: `01` through `75`
- Descriptive name: lowercase with underscores
- Extension: `.png` for screenshots/composites, `.svg` for diagrams, `.jpg` for photos

**Examples:**
```
lesson_47_01_before_after_comparison.png
lesson_47_02_workflow_diagram.svg
lesson_47_03_compositor_workspace.png
lesson_47_06_socket_types_reference.svg
lesson_47_12_render_passes_concept.svg
lesson_47_44_complete_enhancement_stack.png
lesson_47_59_format_decision_tree.svg
lesson_47_74_keyboard_shortcuts.svg
```

---

## Production Priority Ranking

### **High Priority (Essential for Understanding) - Create First**

These images directly support primary learning objectives and fill critical knowledge gaps:

1. **Image #3 - Blender Compositor Workspace Screenshot** - Shows where to access compositor, foundational
2. **Image #4 - Use Nodes Checkbox Location** - Critical first step users must take
3. **Image #8 - Basic Node Connection Example** - Demonstrates fundamental node workflow
4. **Image #12 - Render Passes Concept Diagram** - Explains core concept of pass-based workflow
5. **Image #13 - Beauty Pass vs Component Passes** - Visual understanding of pass separation
6. **Image #16 - Manual Pass Reconstruction Node Setup** - Shows practical pass integration
7. **Image #19 - Color Correction vs Grading Comparison** - Critical distinction for workflow
8. **Image #29 - Depth-Based Fog Setup** - Complete technique demonstration
9. **Image #31 - Glare Node Types Comparison** - Shows different glow options clearly
10. **Image #44 - Complete Enhancement Stack** - Professional complete workflow example
11. **Image #59 - File Format Decision Tree** - Helps users choose correct formats
12. **Image #72 - Before/After Project Comparison** - Dramatic demonstration of lesson value

**Rationale:** These 12 images form the visual backbone of the lesson. Without them, key concepts remain abstract. Each addresses a "must understand" topic where visual demonstration is more effective than text alone.

### **Medium Priority (Helpful Enhancement) - Create Second**

These enhance understanding but concepts can be grasped with text alone:

13. **Image #1 - Post-Processing Before/After Comparison** - Motivational hook
14. **Image #2 - Professional Post-Processing Workflow Diagram** - Overview visualization
15. **Image #6 - Node Socket Types Color Reference** - Useful reference
16. **Image #7 - Essential Compositor Nodes Cheat Sheet** - Quick reference tool
17. **Image #10 - RGB Curves Interface** - Important tool interface
18. **Image #11 - S-Curve for Contrast** - Classic technique visualization
19. **Image #20 - White Balance Correction Example** - Color cast fix demonstration
20. **Image #23 - Color Balance Node Interface** - Key grading tool
21. **Image #25 - Popular Color Grading Styles Comparison** - Inspiration and examples
22. **Image #28 - Z-Depth Pass Visualization** - Understanding depth data
23. **Image #30 - Fog Effect Before/After** - Result demonstration
24. **Image #33 - Subtle vs Excessive Glow** - Important warning against over-processing
25. **Image #35 - Vignette Effect Demonstration** - Common technique result
26. **Image #39 - Film Grain Comparison** - Grain intensity levels
27. **Image #45 - Firefly Artifacts Example** - Common problem identification
28. **Image #55 - Color Space Comparison** - Critical color management concept
29. **Image #60 - Multi-Software Workflow Example** - Professional pipeline
30. **Image #68 - Quality Control Checklist Visual** - Final QC reminder
31. **Image #71 - Complete Node Tree - Professional Example** - Comprehensive setup reference

**Rationale:** These images significantly improve the learning experience by providing visual confirmation, inspiration, and warning examples. Students can follow along without them, but comprehension and retention improve with visual support.

### **Lower Priority (Nice to Have) - Create Third**

Supplementary materials that enhance experience but aren't necessary for core concepts:

32-75. All remaining images (Interface screenshots, detailed settings panels, method comparisons, technique variations, tool interfaces, etc.)

**Rationale:** These images provide polish, detailed reference material, and complete visual documentation. They're valuable for comprehensive understanding and reference, but the lesson functions effectively with High and Medium priority images alone.

---

## Production Notes

### **Style Consistency Guidelines**

**Color Palette (Standardized):**
- **Blender UI Background:** `#2b2b2b` (dark grey)
- **Blender Node Editor:** `#2b2b2b` (dark grey)
- **Properties Panel:** `#3a3a3a` (medium grey)
- **Selection Highlight:** `#ff8c00` (bright orange)
- **Node Connections:** `#ffcc00` (yellow for color data)
- **Annotations:** `#ff8c00` (orange arrows/boxes)
- **Success Indicators:** `#4CAF50` (green)
- **Warning/Problem:** `#f44336` (red)
- **Frames/Organization:** Purple `#667eea`, Blue `#2196F3`, Green `#4CAF50`, Orange `#ff9800`

**Typography:**
- **Primary font:** Clear sans-serif (Roboto, Open Sans, or similar)
- **Annotation text:** 14-16pt, white or orange for visibility
- **Labels:** 12-14pt, white text with subtle drop shadow on dark backgrounds
- **UI text:** Match Blender's actual interface fonts

**Blender Version Consistency:**
- Target Blender 4.0-4.2 interface appearance
- Maintain consistent UI colors across all screenshots
- Use same icon set throughout (Blender 4.x icons)

### **Image Production Workflow**

**Phase 1: SVG Diagrams (Fastest ROI)**
1. Create all high-priority SVG diagrams first (#2, #6, #7, #12, #59)
2. Establish template styles for reuse
3. Use consistent colors, fonts, and spacing
4. Export at multiple resolutions for responsive design

**Phase 2: Blender Screenshots**
1. Set up Blender with consistent theme/preferences
2. Create reusable .blend files with common setups
3. Take screenshots at 1920x1080 minimum resolution
4. Annotate in external editor (Photoshop, GIMP, or Figma)
5. Save both raw and annotated versions

**Phase 3: Composite Images**
1. Gather source renders (use existing project renders when possible)
2. Create comparison layouts in image editor
3. Maintain consistent spacing and divider styles
4. Ensure before/after images align perfectly

**Phase 4: Node Diagrams**
1. Build actual working node setups in Blender
2. Screenshot and clean up in editor
3. Add annotations, arrows, and explanatory labels
4. Consider creating .blend templates for similar diagrams

### **Technical Specifications**

**Resolution Standards:**
- **Wide diagrams:** 1920x1080 or 2400x800 (16:9 or wider)
- **Vertical panels:** 800x1200 or 900x1400
- **Square comparisons:** 1200x1200 or 1600x1600
- **Ultra-wide node trees:** 3000x1000 or 3840x1200
- **All images:** Minimum 1920px width for main screenshots

**File Formats:**
- **Screenshots/Composites:** PNG 16-bit (lossless)
- **Diagrams:** SVG (scalable) with PNG fallback
- **Photos (if any):** JPEG 90-95% quality
- **Working files:** Maintain layered PSD/XCF sources

**File Size Targets:**
- **PNG screenshots:** 500KB - 2MB target
- **SVG diagrams:** <100KB each
- **Total lesson images:** Aim for <50MB combined

**Compression:**
- Use PNG optimization tools (TinyPNG, OptiPNG)
- SVG: Minimize and remove unnecessary metadata
- Balance quality and file size for web performance

### **Accessibility Considerations**

**Alt Text Requirements:**
All images need descriptive alt text for screen readers:
- Describe what the image shows, not just its title
- Include key information visible in the image
- For diagrams: describe the flow/relationship shown
- For comparisons: explain the difference being demonstrated

**Example:**
```html
<img src="lesson_47_12_render_passes_concept.svg" 
     alt="Diagram showing beauty pass splitting into four component passes: diffuse, glossy, shadow, and AO, with arrows indicating they recombine to create the final render">
```

**Color Contrast:**
- Ensure text annotations have sufficient contrast (4.5:1 minimum)
- Use drop shadows or outlines for text over images
- Avoid red-green only comparisons (add labels/patterns)

**Responsive Design:**
- SVG diagrams scale perfectly for mobile
- Provide smaller versions of large images for mobile
- Ensure text remains readable at smaller sizes

### **Batch Processing Recommendations**

**Screenshot Session Setup:**
1. Configure Blender interface once
2. Prepare all scenes/node setups in advance
3. Take all screenshots in single session for consistency
4. Use consistent naming immediately (don't rename later)
5. Organize into folders: raw_screenshots/, annotated/, final/

**Annotation Template:**
1. Create Photoshop/GIMP template with standard annotation styles
2. Layers for: arrows, text boxes, highlights, backgrounds
3. Save as template for consistent styling
4. Batch process similar annotations

**Version Control:**
- Keep original source files (PSD, XCF, Blend, AI, SVG source)
- Export finals to separate folder
- Document which source created which final
- Allows easy updates if lesson content changes

### **Special Considerations for Lesson 47**

**Post-Processing Emphasis:**
- Before/after comparisons are critical - ensure dramatic but realistic differences
- Show subtle effects clearly (may need to exaggerate slightly for visibility)
- Color accuracy crucial - use calibrated monitor for color grading images

**Node Tree Complexity:**
- Some setups will have 30+ nodes - ensure clarity at web resolution
- Consider showing zoomed sections for complex areas
- Use frames and labels extensively in node screenshots

**Color Space Critical:**
- All renders shown must be in correct color space
- Document which color space used for each image
- Maintain consistency across comparison images

**Software Integration:**
- External software screenshots (Photoshop, Resolve, AE) need clear licensing
- May need to recreate interfaces if official screenshots unavailable
- Maintain recognizable brand aesthetics while avoiding trademark issues

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All high-priority images created and tested in HTML
- [ ] Color palette consistent across all Blender interface images
- [ ] Annotations clearly visible and consistently styled
- [ ] Text readable at target web resolution (check on mobile)
- [ ] SVG files validated and optimized
- [ ] PNG files optimized for file size
- [ ] Alt text written for all images
- [ ] File naming convention followed consistently
- [ ] Before/after comparisons aligned perfectly
- [ ] Node connection lines clearly visible
- [ ] No proprietary software watermarks or trial notices
- [ ] Image dimensions appropriate for responsive web design
- [ ] Drop shadows and effects consistent across similar image types
- [ ] Color contrast sufficient for accessibility (WCAG AA minimum)
- [ ] Images actually demonstrate the described concept clearly

---

## Additional Recommendations

### **Interactive Elements (Future Enhancement)**
Consider creating interactive versions of key images:
- **Node trees:** Hovering shows node descriptions
- **Before/after sliders:** Draggable comparison dividers
- **Step-by-step diagrams:** Animated progression
- **Image galleries:** Click to enlarge, swipe through variations

### **Video Alternatives**
Some concepts might benefit from short video clips:
- Node connection process (animate the actual connection)
- Live color grading adjustment (show real-time changes)
- Fog effect buildup (animated progression)
- Complete project workflow (timelapse)

### **Downloadable Assets**
Provide supplementary downloads:
- Template .blend files with pre-built node setups
- SVG source files for diagrams (editable)
- Sample renders for practice (with passes included)
- Preset files for common color grades

### **Image Update Schedule**
- **Quarterly review:** Check if Blender UI changed (major updates)
- **Annual refresh:** Update examples with current best practices
- **Immediate update needed if:** Blender interface significantly changes

---

## Conclusion

This comprehensive image requirements document provides complete specifications for all 75 images needed to fully augment Lesson 47: Post-Processing. The images are strategically designed to:

1. **Visualize abstract concepts** (render passes, color spaces, workflows)
2. **Provide step-by-step guidance** (node setups, settings panels)
3. **Demonstrate results** (before/after comparisons, effect examples)
4. **Serve as reference material** (cheat sheets, checklists, shortcuts)
5. **Warn against common mistakes** (over-processing, artifacts)

Priority ranking ensures efficient production—create high-priority images first for maximum educational impact, then enhance with medium and lower priority images as time and resources allow.

All images maintain consistent professional styling aligned with the Blender Mastery Course aesthetic while ensuring accessibility and responsive design compatibility.

---

**Document Complete - Ready for Production**

**Total Images Specified:** 75  
**AI Prompts Provided:** 75 (complete)  
**SVG Recommendations:** 12 images  
**Estimated Total Production Time:** 40-60 hours for complete set  
**Estimated High Priority Time:** 10-15 hours  

**Next Steps:**
1. Review and approve image specifications
2. Begin production with High Priority images (12 images)
3. Test images in HTML lesson layout
4. Iterate based on visual feedback
5. Complete Medium Priority images
6. Finalize with Lower Priority images as time permits
