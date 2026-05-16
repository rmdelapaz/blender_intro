# Image Requirements for Lesson 47: Post-Processing
## Part 1 of 2

## Task Summary
**Lesson:** lesson_47_post_processing.html  
**Purpose:** Identify and document all images needed to augment the lesson content  
**Date:** November 12, 2025  
**Total Images:** 75 images  

---

## Image List for Lesson 47

### **1. Post-Processing Before/After Comparison**
- **Purpose:** Show dramatic difference between raw render and post-processed version
- **Type:** Composite (side-by-side)
- **Shows:** Same render displayed twice—left showing flat raw render, right showing polished post-processed version with color grading, glow, and effects

### **2. Professional Post-Processing Workflow Diagram**
- **Purpose:** Visualize complete post-production pipeline
- **Type:** SVG diagram/infographic
- **Shows:** Flowchart from raw render through compositing, color correction, effects, to final output with icons for each stage

### **3. Blender Compositor Workspace Screenshot**
- **Purpose:** Show where to access compositor
- **Type:** Screenshot (annotated)
- **Shows:** Blender interface with Compositing workspace tab highlighted, showing default node setup with Render Layers and Composite nodes

### **4. Use Nodes Checkbox Location**
- **Purpose:** Show how to enable compositor
- **Type:** Screenshot (annotated)
- **Shows:** Close-up of Compositor header with "Use Nodes" checkbox highlighted with arrow and annotation

### **5. Compositor Interface Anatomy**
- **Purpose:** Label main areas of compositor workspace
- **Type:** Screenshot (annotated)
- **Shows:** Compositor with labeled areas: Node Editor, Properties Panel, Image Viewer, Header with annotations pointing to each

### **6. Node Socket Types Color Reference**
- **Purpose:** Explain different socket colors and data types
- **Type:** SVG diagram
- **Shows:** Three socket examples (Yellow/Color, Gray/Value, Blue/Vector) with labels explaining what data each carries

### **7. Essential Compositor Nodes Cheat Sheet**
- **Purpose:** Quick visual reference of most-used nodes
- **Type:** Infographic
- **Shows:** Icons and brief descriptions of Input, Output, Color, Filter, and Converter node categories with 3-4 examples each

### **8. Basic Node Connection Example**
- **Purpose:** Demonstrate how nodes connect
- **Type:** Screenshot/diagram
- **Shows:** Simple setup: Render Layers → Bright/Contrast → Composite with connection lines clearly visible

### **9. Node Selection and Manipulation**
- **Purpose:** Show node editing operations
- **Type:** Composite (multi-panel)
- **Shows:** Four panels demonstrating: selecting nodes, moving nodes (G key), duplicating (Shift+D), and muting (M key) with visual indicators

### **10. RGB Curves Interface**
- **Purpose:** Show the most important color tool
- **Type:** Screenshot (annotated)
- **Shows:** RGB Curves node properties with curve graph, axes labeled (input/output), control points visible, channel dropdown highlighted

### **11. S-Curve for Contrast**
- **Purpose:** Demonstrate classic contrast adjustment curve shape
- **Type:** Diagram
- **Shows:** RGB Curves graph showing S-shaped curve with annotations pointing to darkened shadows (bottom) and brightened highlights (top)

### **12. Render Passes Concept Diagram**
- **Purpose:** Explain what render passes are
- **Type:** SVG diagram/infographic
- **Shows:** Beauty pass splitting into component passes (Diffuse, Glossy, Shadow) with arrows showing they recombine to create final image

### **13. Beauty Pass vs Component Passes**
- **Purpose:** Visual comparison of different pass types
- **Type:** Composite (grid layout)
- **Shows:** Six panels showing same scene rendered as: Beauty Pass, Diffuse, Glossy, Transmission, Shadow, AO

### **14. View Layer Properties - Passes Section**
- **Purpose:** Show where to enable render passes
- **Type:** Screenshot (annotated)
- **Shows:** Blender Properties panel with View Layer Properties icon highlighted, Passes section expanded with checkboxes visible

### **15. Render Layers Node with Multiple Passes**
- **Purpose:** Show how passes appear in compositor
- **Type:** Screenshot
- **Shows:** Render Layers node expanded to show multiple output sockets (Image, Alpha, Diffuse Color, Glossy Color, Z-Depth, Shadow, AO)

### **16. Manual Pass Reconstruction Node Setup**
- **Purpose:** Demonstrate combining passes manually
- **Type:** Node diagram/screenshot
- **Shows:** Render Layers → two Mix nodes in Add mode combining Diffuse + Glossy → Composite, with clear connection paths

### **17. Pass Integration with Control**
- **Purpose:** Show adding adjustment between passes
- **Type:** Node diagram
- **Shows:** Render Layers → Glossy goes through HSV node (reducing value) → Mix node, demonstrating independent control of reflection intensity

### **18. EXR Multi-Layer File Structure**
- **Purpose:** Explain multi-layer EXR concept
- **Type:** Infographic
- **Shows:** Single EXR file icon "exploding" to show multiple passes contained within, with file size comparison vs separate images

### **19. Color Correction vs Grading Comparison**
- **Purpose:** Visualize difference between technical correction and creative grading
- **Type:** Composite (three images)
- **Shows:** Same image three times: Raw (too dark/color cast) → Corrected (neutral, balanced) → Graded (creative warm look)

### **20. White Balance Correction Example**
- **Purpose:** Show removing color cast
- **Type:** Composite (before/after)
- **Shows:** Split image with blue color cast (left) vs neutral white balance (right) with same scene

### **21. Exposure Correction with Curves**
- **Purpose:** Demonstrate lifting shadows while preserving highlights
- **Type:** Composite diagram
- **Shows:** Split image showing dark render brightened, alongside RGB Curves graph showing lifted left side (shadows) with annotations

### **22. RGB Curves Channel-Specific Adjustment**
- **Purpose:** Show adjusting individual color channels
- **Type:** Screenshot with diagram
- **Shows:** RGB Curves node with Red channel selected, curve adjusted, showing resulting warm color shift in preview

### **23. Color Balance Node Interface**
- **Purpose:** Explain Lift/Gamma/Gain controls
- **Type:** Screenshot (annotated)
- **Shows:** Color Balance node properties with three color wheels labeled: Lift (shadows), Gamma (midtones), Gain (highlights)

### **24. Split Toning Example**
- **Purpose:** Demonstrate warm highlights + cool shadows technique
- **Type:** Composite (before/after with diagram)
- **Shows:** Image with orange-teal split toning, alongside Color Balance settings showing warm Gain, cool Lift

### **25. Popular Color Grading Styles Comparison**
- **Purpose:** Show different grading looks side-by-side
- **Type:** Composite (grid of 6)
- **Shows:** Same render with six different grades: Original, Warm, Cool, Orange-Teal, Desaturated, High Contrast

### **26. Hue Saturation Value Node Interface**
- **Purpose:** Show color adjustment controls
- **Type:** Screenshot (annotated)
- **Shows:** HSV node with Hue, Saturation, Value sliders highlighted and annotated with their effects

### **27. Professional Color Grading Workflow**
- **Purpose:** Show organized node tree for color work
- **Type:** Node setup screenshot
- **Shows:** Clean compositor node layout with frames labeled "Correction", "Primary Grade", "Secondary Grade" showing logical progression

### **28. Z-Depth Pass Visualization**
- **Purpose:** Explain depth pass appearance
- **Type:** Composite (scene + depth)
- **Shows:** Split image: Color render (left) and corresponding Z-depth pass (grayscale, near=white, far=black, right)

### **29. Depth-Based Fog Setup**
- **Purpose:** Complete node tree for atmospheric fog effect
- **Type:** Node diagram/screenshot
- **Shows:** Z-depth → Map Range → ColorRamp → Mix node with fog color, showing each step of depth-based fog creation

### **30. Fog Effect Before/After**
- **Purpose:** Demonstrate atmospheric depth enhancement
- **Type:** Composite (side-by-side)
- **Shows:** Same render without fog (clear) vs with subtle depth-based fog (distant objects fading)

### **31. Glare Node Types Comparison**
- **Purpose:** Show different glare/glow options
- **Type:** Composite (2x2 grid)
- **Shows:** Same bright light rendered with four Glare types: Fog Glow, Streaks, Ghosts, Simple Star

### **32. Glare Node Settings Interface**
- **Purpose:** Show glow/bloom controls
- **Type:** Screenshot (annotated)
- **Shows:** Glare node properties with Type dropdown, Threshold, Size, Mix parameters highlighted with descriptions

### **33. Subtle vs Excessive Glow**
- **Purpose:** Warning about overdoing effects
- **Type:** Composite (comparison)
- **Shows:** Three versions: No glow (too harsh), Professional subtle glow (just right), Amateur excessive glow (fuzzy, overdone)

### **34. Custom Glow Creation Method**
- **Purpose:** Advanced selective glow technique
- **Type:** Node diagram
- **Shows:** RGB Curves (threshold) → Blur → Mix (Screen mode) setup for controlled glow effect

### **35. Vignette Effect Demonstration**
- **Purpose:** Show darkened corners technique
- **Type:** Composite (before/after)
- **Shows:** Product render without vignette vs with subtle vignette drawing eye to center

### **36. Vignette Creation Methods**
- **Purpose:** Show two approaches to creating vignettes
- **Type:** Node diagrams (side-by-side)
- **Shows:** Two setups: Lens Distortion node method vs Ellipse Mask method, both achieving similar vignette effect

### **37. Chromatic Aberration Example**
- **Purpose:** Show color fringing effect
- **Type:** Screenshot (zoomed detail)
- **Shows:** Close-up of image edge showing subtle red/cyan color fringing, with inset showing same area without aberration

### **38. Lens Distortion Node Interface**
- **Purpose:** Explain distortion and aberration controls
- **Type:** Screenshot (annotated)
- **Shows:** Lens Distortion node properties with Distortion (barrel/pincushion), Dispersion (chromatic aberration), Jitter sliders labeled

### **39. Film Grain Comparison**
- **Purpose:** Show grain texture addition
- **Type:** Composite (three versions)
- **Shows:** Clean render, subtle professional grain, heavy vintage grain side-by-side

### **40. Film Grain Creation Setup**
- **Purpose:** Node tree for adding grain
- **Type:** Node diagram
- **Shows:** Noise Texture → ColorRamp → Mix (Overlay, low factor) → shows texture generation and application to image

### **41. Sharpening Before/After**
- **Purpose:** Demonstrate detail enhancement
- **Type:** Composite (split comparison)
- **Shows:** Half image soft/slightly blurry, half sharpened showing enhanced edge detail, with zoom insets highlighting difference

### **42. Sharpen Node Interface**
- **Purpose:** Show sharpening controls
- **Type:** Screenshot
- **Shows:** Sharpen filter node properties with Amount and Threshold sliders visible

### **43. Over-Sharpening Warning**
- **Purpose:** Show what happens with too much sharpening
- **Type:** Composite (progression)
- **Shows:** Three versions: Original, Appropriately sharpened, Over-sharpened (halos, artifacts visible)

### **44. Complete Enhancement Stack**
- **Purpose:** Professional effects in proper order
- **Type:** Node diagram
- **Shows:** Full compositor setup from Render Layers through correction, fog, glow, grading, vignette, sharpen, grain to final output with frames organizing sections

### **45. Firefly Artifacts Example**
- **Purpose:** Show rendering noise issue
- **Type:** Screenshot (zoomed)
- **Shows:** Dark render with scattered extremely bright pixels (fireflies) circled in red for visibility

### **46. Despeckle Filter Application**
- **Purpose:** Show firefly removal tool
- **Type:** Composite (before/after)
- **Shows:** Noisy render with fireflies (left) vs cleaned with Despeckle filter (right)

### **47. Denoise Node Usage**
- **Purpose:** Demonstrate noise reduction
- **Type:** Node setup + result
- **Shows:** Render Layers (with Denoising Data) → Denoise node, plus before/after comparison of grainy vs clean result

### **48. Banding Problem and Solution**
- **Purpose:** Show gradient banding issue and fix
- **Type:** Composite (three stages)
- **Shows:** Smooth gradient with visible bands → same with subtle grain added → smooth appearance restored

### **49. Exposure Correction with Curves**
- **Purpose:** Brightening dark render properly
- **Type:** Diagram with result
- **Shows:** Dark underexposed image, RGB Curves showing lifted shadows curve, resulting brightened image preserving highlights

### **50. Background Blur for Focus**
- **Purpose:** Using depth pass to isolate subject
- **Type:** Composite (before/after)
- **Shows:** Scene with busy detailed background vs same scene with background blurred using Z-depth mask

---

## AI Image Generation Prompts - Part 1 (Images 1-25)

### **Prompt 1: Post-Processing Before/After Comparison**
```
Create a professional side-by-side comparison showing the power of post-processing. Left side: flat, slightly underexposed product render of a sleek modern water bottle on neutral background—raw render, no effects, colors slightly muted. Right side: same exact composition but post-processed with color grading (subtle warm tone), gentle glow around highlights, proper contrast adjustment, slight vignette, and professional polish making it pop. Split down the middle with thin vertical dividing line. Background: dark grey (#2b2b2b). Style: professional training material demonstrating transformation. Resolution: 1920x1080. Include subtle label text "Raw Render" on left and "Post-Processed" on right in professional sans-serif font.
```

### **Prompt 2: Professional Post-Processing Workflow Diagram**
```
Create a clean professional workflow diagram showing post-production pipeline. Horizontal flowchart with seven connected stages: "Raw Render" → "Compositing" → "Pass Integration" → "Color Correction" → "Creative Grading" → "Effects & Polish" → "Final Output". Each stage represented by rounded rectangle box with icon above (render icon, node graph icon, layers icon, color wheel icon, artistic palette icon, sparkle/star icon, export icon). Arrows connect each stage. Color code boxes: starting box purple (#667eea), processing boxes gradient purple to blue, final box green (#4CAF50). Background: clean white or light grey. Style: modern, clean, professional infographic. Include subtle drop shadows for depth. Text: clear sans-serif font. Resolution: 1600x600 optimized for wide display.
```

### **Prompt 3: Blender Compositor Workspace Screenshot**
```
Create an illustration showing Blender's interface in Compositing workspace. Top workspace tabs visible with "Compositing" tab highlighted in orange (#ff8c00). Main area shows node editor in center with default setup: Render Layers node on left connected to Composite node on right. Dark grey background (#2b2b2b) for node editor. Nodes have blue-grey headers. Connection line in yellow between nodes. Properties panel visible on right side. Image viewer area at top showing render preview. Interface should look like Blender 4.x. Style: clean screenshot-like illustration maintaining Blender's actual UI colors and design. Include thin orange rectangle around Compositing tab to draw attention. Resolution: 1920x1080.
```

### **Prompt 4: Use Nodes Checkbox Location**
```
Create a close-up view of Blender Compositor header bar. Dark grey header (#2b2b2b) spanning width. Left side shows "Compositing" editor type icon. Center-left shows checkbox labeled "Use Nodes" which should be checked (checkmark visible). Bright orange arrow pointing to this checkbox from above-right with annotation "Enable to start compositing" in white text. Header includes other subtle UI elements like view options on right. Style: professional software UI screenshot with annotation overlay. Resolution: 1200x200 optimized for wide horizontal display. Font: clear sans-serif.
```

### **Prompt 5: Compositor Interface Anatomy**
```
Create an annotated diagram of Blender Compositor workspace showing labeled areas. Central node editor area (largest, dark grey #2b2b2b) with sample nodes. Right side: Properties panel (medium grey) labeled with bracket and "Properties Panel (N key)" text. Top area: Image viewer showing preview, labeled "Image Viewer". Bottom: header bar labeled "Header - View options". Node editor center labeled "Node Editor - Main workspace". Use colored brackets/lines pointing to each area: cyan for node editor, orange for properties, green for viewer, purple for header. Clean professional annotation style. Background outside workspace: darker grey. Style: technical diagram maintaining Blender UI aesthetic. Resolution: 1920x1080.
```

### **Prompt 6: Node Socket Types Color Reference**
```
Create an educational diagram showing three node socket types. Three large circular sockets displayed horizontally with labels beneath. Left socket: Yellow/gold color, labeled "Color (RGBA)" with subtext "Image data, textures". Center socket: Grey color, labeled "Value (Float)" with subtext "Numbers, masks, factors". Right socket: Blue color, labeled "Vector (XYZ)" with subtext "Coordinates, motion". Each socket should have subtle gradient and slight glow. Background: clean white or light grey. Include small example icon above each showing typical use case (image icon for color, number "1.0" for value, XYZ arrows for vector). Style: clean, educational, professional. Font: clear sans-serif. Resolution: 1200x600.
```

### **Prompt 7: Essential Compositor Nodes Cheat Sheet**
```
Create an infographic showing essential Blender compositor nodes organized by category. Five sections in grid layout: INPUT, OUTPUT, COLOR, FILTER, CONVERTER. Each section has header bar with category name and 3-4 node examples below. Each node shown as small rounded rectangle with icon and name. INPUT: Render Layers, Image, RGB. OUTPUT: Composite, Viewer, File Output. COLOR: RGB Curves, Mix, Hue Sat Value. FILTER: Blur, Glare, Denoise, Sharpen. CONVERTER: Alpha Over, Math, ColorRamp. Use color coding: purple headers for Input/Output, orange for Color, blue for Filter, green for Converter. Background: clean white or light grey. Style: modern cheat sheet design, professional, clean. Resolution: 1600x1200.
```

### **Prompt 8: Basic Node Connection Example**
```
Create a simple node diagram showing basic compositor setup. Three nodes displayed horizontally left to right: "Render Layers" node (large, blue-grey header) with multiple output sockets on right side → "Bright/Contrast" node (medium size, showing Bright and Contrast sliders inside) → "Composite" node (compact, single input socket). Yellow connection lines between nodes clearly visible connecting sockets. Nodes have subtle drop shadows. Background: dark grey (#2b2b2b) matching Blender compositor. Node headers have slight gradient. Style: clean technical illustration replicating Blender's actual node appearance. Include subtle grid pattern in background. Resolution: 1600x600 optimized for horizontal display.
```

### **Prompt 9: Node Selection and Manipulation**
```
Create a four-panel instructional composite demonstrating node operations. Each panel shows same simple node setup but different operation. Panel 1 (top-left): Node with orange outline, labeled "Select (Left-click)". Panel 2 (top-right): Node with motion blur effect and "G" key indicator, labeled "Move (G key)". Panel 3 (bottom-left): Original node plus duplicate with dashed outline, labeled "Duplicate (Shift+D)". Panel 4 (bottom-right): Node shown semi-transparent/greyed out, labeled "Mute (M key)". Background: dark grey (#2b2b2b). Clean dividing lines between panels. Keyboard key indicators shown as small rounded squares with key letter. Style: technical training material. Resolution: 1200x1200.
```

### **Prompt 10: RGB Curves Interface**
```
Create an illustration of RGB Curves node interface. Left side: compact node with blue-grey header "RGB Curves" and input/output sockets. Right side (larger): properties panel showing curve graph. Graph has diagonal line (default) from bottom-left to top-right on grid background. Axes labeled: horizontal "Input (Original)" and vertical "Output (Adjusted)". Small control points on curve line (circular handles). Top of panel shows channel dropdown currently set to "C" (combined). Include subtle RGB color indicators showing R, G, B channel options. Graph background: slightly lighter grey with subtle grid lines. Style: accurate representation of Blender RGB Curves interface. Resolution: 1400x800.
```

### **Prompt 11: S-Curve for Contrast**
```
Create a diagram showing S-curve in RGB Curves for contrast enhancement. Large curve graph (dark grey background #2b2b2b, light grey grid). Diagonal line transformed into S-shape: bottom portion curves downward (darkening shadows), middle relatively straight, top curves upward (brightening highlights). Red annotation arrows pointing to bottom curve with label "Darkened shadows" and top curve with "Brightened highlights". Control points visible on curve at inflection areas. Axes labeled: "Input" (horizontal) and "Output" (vertical), both 0 to 1 scale. Include small inset images showing before/after contrast adjustment. Style: educational diagram, professional, clean annotations. Resolution: 1200x1200.
```

### **Prompt 12: Render Passes Concept Diagram**
```
Create an educational diagram explaining render passes. Top: single image labeled "Beauty Pass" showing complete rendered product. Thick downward arrow labeled "Breaks into components". Below: four separate images arranged horizontally showing same product as: "Diffuse" (matte colors only), "Glossy" (reflections only on black), "Shadow" (shadows only), "Emission" (glowing elements only). Thin upward arrows from these four converge back up to beauty pass with "+ ADD" labels, showing they combine. Each component image in rounded frame. Color code frames: diffuse=orange, glossy=cyan, shadow=grey, emission=yellow. Background: clean white. Style: clean infographic, educational. Resolution: 1600x1200.
```

### **Prompt 13: Beauty Pass vs Component Passes**
```
Create a six-panel grid comparing render passes. Layout: 2 rows × 3 columns. All panels show same scene (modern headphones on surface). Panel 1: "Beauty Pass" - full color final render. Panel 2: "Diffuse" - only base colors, no reflections. Panel 3: "Glossy" - only reflections/highlights on black background. Panel 4: "Transmission" - if transparent parts, shows light passing through. Panel 5: "Shadow" - grayscale shadow information only. Panel 6: "AO" - ambient occlusion showing crevices/contact shadows in grayscale. Each panel labeled at bottom in clean white text. Thin borders between panels. Background: dark grey (#2b2b2b). Style: professional technical comparison. Resolution: 1920x1280.
```

### **Prompt 14: View Layer Properties - Passes Section**
```
Create an illustration of Blender's Properties panel showing View Layer settings. Right side panel: medium grey background. Top: row of properties icons with "View Layer Properties" icon (looks like layers) highlighted with orange glow. Below: expanded "Passes" section showing checkboxes for render passes. Visible passes: "Combined" (checked, greyed), "Z", "Mist", "Normal". Below that: "Data" subsection. Below: "Light" subsection with "Diffuse" expandable showing "Color", "Direct", "Indirect" sub-options. Similar for "Glossy", "Transmission". Orange annotation arrow pointing to checkboxes with text "Enable passes here". Style: Blender UI accurate representation, annotated for training. Resolution: 800x1200 (vertical).
```

### **Prompt 15: Render Layers Node with Multiple Passes**
```
Create an illustration of expanded Render Layers node showing multiple pass outputs. Large node with blue-grey header "Render Layers". Left side shows scene/layer selector. Right side shows many output sockets stacked vertically, each labeled: "Image" (yellow socket), "Alpha" (grey socket), "Depth" (grey), "Diffuse Color" (yellow), "Glossy Color" (yellow), "Transmission Color" (yellow), "Shadow" (grey), "AO" (grey), and several more. Sockets should alternate slight spacing for readability. Node background: medium grey. Style: accurate Blender node representation showing socket variety. Yellow sockets for color data, grey for value data clearly distinguishable. Resolution: 600x1200 (tall vertical node).
```

### **Prompt 16: Manual Pass Reconstruction Node Setup**
```
Create a node diagram showing pass integration. Left: "Render Layers" node with "Diffuse Color" and "Glossy Color" outputs highlighted. Center: two "Mix" nodes stacked vertically, both set to "Add" blend mode. Top Mix combines Diffuse + Glossy. Bottom Mix (if needed for more passes) adds result. Right: "Composite" output node. Yellow connection lines clearly showing data flow from passes through Mix nodes to output. Mix nodes show "Add" text and Factor: 1.0. Background: dark grey (#2b2b2b). Nodes have subtle drop shadows. Include light orange annotation arrows showing flow direction with "Recombines passes" label. Style: clean technical diagram. Resolution: 1600x800.
```

### **Prompt 17: Pass Integration with Control**
```
Create a node setup showing adjustment inserted between pass and mix. Left: Render Layers node with "Glossy Color" output. Center: "Hue/Saturation/Value" node showing Value slider reduced to 0.7. Right: Mix node combining with other passes. Yellow connections between nodes. Orange annotation box around HSV node with text "Reduce reflection intensity before combining - gives you control!" Second annotation pointing to slider: "Value: 0.7 = 30% dimmer reflections". Background: dark grey (#2b2b2b). This demonstrates independent pass control concept. Style: educational node diagram with clear annotations. Resolution: 1600x600.
```

### **Prompt 18: EXR Multi-Layer File Structure**
```
Create an infographic showing EXR multi-layer concept. Center: large icon representing single EXR file (modern file icon with ".exr" extension). From this file, five arrows radiate outward pointing to smaller image thumbnails representing contained passes: Beauty, Diffuse, Glossy, Z-Depth, Shadow. Each thumbnail labeled. Below EXR icon: "scene_render.exr - 28MB". Below: comparison showing "vs separate files: 5 × 12MB = 60MB". Use vibrant purple-blue gradient for EXR file icon, orange/yellow for pass thumbnails. Background: clean white or light grey. Style: modern infographic showing file format advantage. Resolution: 1400x1000.
```

### **Prompt 19: Color Correction vs Grading Comparison**
```
Create a three-panel progression showing color workflow stages. Panel 1 (left): "Raw Render" - image with noticeable blue color cast, slightly underexposed, flat contrast. Panel 2 (center): "Corrected" - same image with neutral white balance, proper exposure, good contrast - technically correct but neutral. Panel 3 (right): "Graded" - same image with warm golden creative grade, slight vignette, professional cinematic look. Each panel labeled at bottom. Vertical dividing lines between panels for clear separation. Above panels: workflow arrow showing "Technical Correction → Creative Grading". Style: professional color grading demonstration. Resolution: 1920x720.
```

### **Prompt 20: White Balance Correction Example**
```
Create a split comparison showing color cast removal. Single image divided vertically down center. Left half: product (silver camera) on grey background with strong blue color cast - everything tinted blue, whites appear cyan. Right half: same scene with corrected white balance - neutral colors, whites are actually white, natural appearance. Thin dividing line down center. Small labels: "Blue Cast" on left, "Neutral Balance" on right. Same exposure and composition both sides to isolate white balance as the only change. Background: studio grey. Style: professional color correction demonstration. Resolution: 1920x1080.
```

### **Prompt 21: Exposure Correction with Curves**
```
Create a composite showing underexposure fix. Left side: dark, underexposed render of modern desk lamp - details lost in shadows, overall too dark. Right side: same lamp properly exposed with shadow detail restored. Bottom center: RGB Curves graph showing correction curve - left portion (shadows) lifted significantly upward, right portion (highlights) stays flat preserving bright areas. Curve creates gentle lift without harsh S-shape. Orange arrows on graph pointing to lifted shadow area with annotation "Brightened shadows". Background: dark grey (#2b2b2b). Style: technical demonstration of exposure correction. Resolution: 1920x1080.
```

### **Prompt 22: RGB Curves Channel-Specific Adjustment**
```
Create an illustration showing channel-specific color adjustment. Top: original image (neutral grey product). Center: RGB Curves interface showing Red channel selected from dropdown. Curve for red channel pulled up in midtones area, creating warm shift. Bottom: resulting image with warm orange-red color shift applied. Side-by-side split showing original vs adjusted. Annotations: arrow pointing to channel selector "Select individual channel", arrow to curve "Lift Red = add warmth". Background: dark grey (#2b2b2b). Graph background: slightly lighter grey. Style: educational color grading demonstration. Resolution: 1400x1200.
```

### **Prompt 23: Color Balance Node Interface**
```
Create an illustration of Color Balance node properties panel. Three sections stacked vertically, each with color wheel: top "Lift (Shadows)", middle "Gamma (Midtones)", bottom "Gain (Highlights)". Each color wheel shows circular gradient from center white to rim colors (red, yellow, green, cyan, blue, magenta around circumference). Small control point indicator on each wheel showing current position. Between wheels: subtle labels describing tonal range affected. Orange annotation brackets labeling each section. Background: medium grey matching Blender properties panel. Style: accurate Blender UI representation with educational labels. Resolution: 800x1400 (vertical).
```

### **Prompt 24: Split Toning Example**
```
Create a split-screen demonstration of split toning technique. Left: Color Balance node settings showing warm orange color added to "Gain" wheel (highlights), cool blue-cyan added to "Lift" wheel (shadows), "Gamma" neutral. Right: resulting image of landscape showing warm golden highlights in sky and cool blue shadows in foreground, creating depth and cinematic look. Small inset arrows connecting color wheel positions to resulting image areas (highlight arrow to sky, shadow arrow to foreground). Background: dark grey (#2b2b2b). Style: professional color grading tutorial. Resolution: 1800x1000.
```

### **Prompt 25: Popular Color Grading Styles Comparison**
```
Create a six-panel grid comparing different grading styles applied to same base render (modern product on pedestal). Layout: 2 rows × 3 columns. Panel 1: "Original" - neutral, ungraded. Panel 2: "Warm Golden" - yellow-orange tones, inviting. Panel 3: "Cool Blue" - cyan-blue tones, modern. Panel 4: "Orange-Teal" - warm highlights, cool shadows, cinematic. Panel 5: "Desaturated" - reduced color, increased contrast, gritty. Panel 6: "High Contrast" - boosted saturation and contrast, energetic. Each panel labeled at bottom in clear text. Subtle borders between panels. Background: dark grey (#2b2b2b). Style: professional grading comparison showcase. Resolution: 1920x1280.
```

---

**[Continued in Part 2: Images 26-75 and remaining prompts]**

**Part 1 contains:** Images 1-50 (described) and AI Prompts 1-25 (detailed)  
**Part 2 will contain:** Remaining image descriptions (51-75), remaining AI prompts (26-75), SVG recommendations, placement suggestions, file naming, priority ranking, and production notes.
