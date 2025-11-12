# Image Analysis Task Template

## Purpose
This document provides a reusable prompt/task template for analyzing Blender course lesson files and generating comprehensive image requirements documentation.

---

## Task Description

**Objective:** Analyze a Blender course lesson HTML file to identify all images needed to augment and enhance the educational content, then create detailed documentation including AI generation prompts.

**Deliverable:** A markdown file containing:
1. Complete list of needed images with descriptions
2. Detailed AI image generation prompts for each image
3. Recommendations for which images work best as SVG diagrams
4. Suggested placement locations within the lesson
5. File naming conventions
6. Production priority ranking

---

## Task Prompt Template

```
Working in folder \\wsl$\Ubuntu\home\practicalace\projects\blender_course, 
the task is to read and examine [LESSON_FILE_NAME].html and determine what 
images are needed to help augment the lesson.

Create a list of the images and generate detailed image prompts for AI 
generation or SVG files to use. 

For each image identified, provide:
1. Image purpose and educational goal
2. Image type (screenshot, diagram, composite, SVG, etc.)
3. What the image should show
4. Detailed AI generation prompt
5. Recommended placement in the lesson

Additionally, identify which images would work best as SVG diagrams 
(scalable vector graphics) for clarity and file size.

Organize the output as a comprehensive markdown document using the 
Filesystem:write_file tool.
```

---

## Workflow Instructions

### Using the Filesystem:write_file Tool

When completing the image analysis task, **ALWAYS** use the `Filesystem:write_file` tool to create the output markdown file. This ensures the file is properly saved to the user's filesystem.

**Correct workflow:**
1. Read the lesson HTML file using `Filesystem:read_file`
2. Analyze the content and identify all needed images
3. Use `Filesystem:write_file` to create the `lesson_XX_image_requirements.md` file
4. Save to path: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_XX_image_requirements.md`

**Example tool call:**
```
Filesystem:write_file
path: \\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_05_image_requirements.md
content: [Full markdown content with all sections]
```

**Do NOT:**
- Create the file content in the chat without using the tool
- Present the content as a code block without saving
- Forget to actually write the file to disk

---

## Analysis Process

### Step 1: Read the Lesson File
- Navigate to the course folder
- Read the complete HTML lesson file using `Filesystem:read_file`
- Note the lesson structure and sections
- Identify all section IDs for placement mapping

### Step 2: Identify Image Needs
Review each section and identify where images would enhance understanding:
- **Conceptual explanations** - Diagrams showing abstract concepts
- **UI/Interface sections** - Screenshots of Blender interface elements
- **Tool demonstrations** - Visual guides showing tools in action
- **Workflow steps** - Step-by-step visual guides
- **Comparison sections** - Before/after or side-by-side comparisons
- **Technical concepts** - Diagrams explaining spatial relationships
- **Reference materials** - Quick reference charts and shortcuts
- **Project examples** - Final result showcase images
- **Exercise confirmations** - "Expected result" visuals for "Try It Now" sections
- **Problem/Solution pairs** - Show issues and how to fix them

### Step 3: Categorize Images
Group images by type:
- **Screenshots** - Actual Blender interface captures
- **Diagrams** - Illustrated explanations
- **Composites** - Multi-panel layouts
- **Infographics** - Information design pieces
- **SVG candidates** - Simple, scalable vector graphics
- **Annotated images** - Screenshots with labels/arrows
- **UI references** - Interface element locations
- **Comparison grids** - Side-by-side visual comparisons

### Step 4: Create AI Prompts
For each image, write a detailed generation prompt including:
- **Content description** - What should be in the image
- **Style guide** - Visual style (technical, educational, clean, etc.)
- **Layout requirements** - Composition and arrangement
- **Color scheme** - Dark backgrounds to match Blender UI (specify hex codes)
- **Labels and text** - What text should appear
- **Specific details** - Any critical visual elements
- **Technical specs** - Resolution, format preferences
- **Context** - Professional training material, educational diagram, etc.

**Color Palette Standards:**
- Background: Dark grey (#2b2b2b)
- Selection highlight: Bright orange (#ff8c00)
- Wireframe: Cyan/white
- Normals: Bright blue
- Warning/problem: Red
- Success/good: Green

### Step 5: Document Organization
Structure the output markdown file with:
- Image list (numbered with titles)
- Purpose and description for each image
- AI generation prompts section
- SVG diagram recommendations
- Placement suggestions mapped to HTML sections
- File naming convention
- Production priority ranking (High/Medium/Low)
- Style and consistency notes
- Accessibility considerations
- Technical specifications

---

## Output File Structure Template

```markdown
# Image Requirements for Lesson XX: [LESSON_TITLE]

## Task Summary
**Lesson:** [filename]
**Purpose:** Identify and document all images needed to augment the lesson content
**Date:** [date]

---

## Image List for Lesson XX

### **1. [Image Title]**
- **Purpose:** [Educational goal]
- **Type:** [Screenshot/Diagram/Composite/SVG]
- **Shows:** [Content description]

[Repeat for each image]

---

## AI Image Generation Prompts

### **Prompt 1: [Image Title]**
```
[Detailed generation prompt with:
- Content description
- Style guidance
- Color specifications (hex codes)
- Layout requirements
- Labels and text
- Professional context]
```

[Repeat for each image]

---

## SVG Diagram Recommendations

List of images that work best as SVG:
1. **[Image Title]** (#X) - [Reason why SVG is ideal]

**Rationale for SVG recommendations:** [Explain why these specific images benefit from vector format]

---

## Image Placement Suggestions in HTML

### Section: [Section Name] (id="section-id")
- **After [specific paragraph/element]:** Insert Image #X ([Title])
- **Within [card/exercise]:** Reference Image #Y as visual guide

[Repeat for each section]

---

## File Naming Convention

```
lesson_XX_01_[descriptive_name].[ext]
lesson_XX_02_[descriptive_name].[ext]
```

**Format guidelines:**
- Use two-digit numbering (01, 02, etc.)
- Descriptive names use underscores (no spaces)
- Extension based on type (.png, .svg, .jpg)

---

## Production Priority

### High Priority (Essential for Understanding)
1. **Image #X - [Title]** - [Rationale for why this is essential]
[Continue listing with specific rationale]

**Rationale:** These images directly support primary learning objectives.

### Medium Priority (Helpful but not Critical)
[List with brief rationale for each]

**Rationale:** These enhance understanding but concepts can be grasped without them.

### Lower Priority (Nice to Have)
[List with brief rationale]

**Rationale:** Supplementary materials that enhance experience but aren't necessary for core concepts.

---

## Notes

### Style Consistency Guidelines
- **Color Palette:** [Specify standard colors with hex codes]
- **Blender Version:** [Specify version for UI consistency]
- **View Angles:** [Default camera perspectives]
- **Selection Highlighting:** [How to show selected elements]
- **Typography:** [Font choices for labels]
- **Annotation Style:** [Arrow and callout standards]
- **Wireframe Clarity:** [Edge visibility requirements]

### Accessibility Considerations
- **Color Blindness:** [How to ensure accessibility]
- **Alt Text Required:** [Guidance for descriptive alt text]
- **High Contrast:** [Contrast ratio requirements]
- **Text Size:** [Minimum legible sizes]
- **Diagram Simplicity:** [Complexity guidelines]

### Technical Specifications
- **Screenshot Resolution:** [Minimum resolution requirements]
- **Image Format:** 
  - PNG for [use cases]
  - SVG for [use cases]
  - JPG for [use cases]
- **File Size Target:** [Maximum file sizes]
- **Compression:** [Optimization approaches]
- **Responsive Sizing:** [Multi-device considerations]

### Special Considerations for This Lesson
[Lesson-specific notes about unique image requirements, special effects needed, etc.]

### Production Notes
- **Blender Scene Setup:** [Instructions for creating source scenes]
- **Lighting Setup:** [Viewport lighting standards]
- **Camera Angles:** [How to maintain consistency]
- **Batch Processing:** [Workflow optimization tips]
- **Version Control:** [Asset management recommendations]
- **Template Reuse:** [Opportunities for reusable components]

---

## Quality Checklist

Before finalizing images, verify:

- [ ] All major lesson sections have appropriate image support
- [ ] Each image has clear educational purpose defined
- [ ] AI prompts are detailed and specific with color codes, style guidance
- [ ] SVG recommendations are justified with clear rationale
- [ ] Placement suggestions reference actual HTML section IDs
- [ ] File naming follows consistent convention with descriptive names
- [ ] Priority ranking is logical and justified with clear rationale
- [ ] Style/accessibility notes are comprehensive and practical
- [ ] Output is well-organized with clear sections and easy navigation
- [ ] Technical specifications cover all production needs
- [ ] Special considerations address lesson-specific requirements

---

## Additional Recommendations Section

Include in output document:

### Image Creation Workflow
[Suggested phases for production]

### Alternative Approaches
[Video clips, interactive elements, etc.]

### Future Enhancements
[Downloadable assets, quizzes, galleries, etc.]

---

## Example Usage

```bash
# For Lesson 04
Task: Analyze lesson_04_basic_object_manipulation.html
Output: lesson_04_image_requirements.md

# For Lesson 05
Task: Analyze lesson_05_understanding_meshes_and_geometry.html
Output: lesson_05_image_requirements.md

# For any lesson
Task: Analyze lesson_[XX]_[title].html
Output: lesson_[XX]_image_requirements.md
```

---

## AI Prompt Best Practices

### Effective Prompt Elements
1. **Be specific about content** - "Three cubes with orange outlines" not "some objects"
2. **Specify style** - "Clean technical diagram" vs "photorealistic render"
3. **Include color guidance** - "Dark grey background (#2b2b2b), bright orange highlights (#ff8c00)"
4. **Define layout** - "Three-panel horizontal layout" vs "show multiple views"
5. **Request labels** - "Clearly labeled 'X-Axis', 'Y-Axis', 'Z-Axis'"
6. **Set context** - "Professional training material style" or "educational diagram"
7. **Mention software** - "Blender 4.0 interface" for UI screenshots
8. **Specify dimensions** - "1920x1080 resolution" or "Square format 1000x1000"
9. **Define text placement** - "Labels positioned at top-left with arrows"
10. **Request specific elements** - "Show edge selection mode icon in toolbar"

### Prompt Template Structure
```
Create a [type of image] showing [main subject]. 
[Detailed description of what should be visible].
[Specific elements that must be included].
Style: [technical/educational/professional].
Background: [color with hex code].
Highlights: [color with hex code for selected elements].
Layout: [composition description].
Labels: [what text should appear and where].
Context: [professional training material/educational diagram].
Technical: [resolution or format requirements].
```

### SVG Identification Criteria
Images are good SVG candidates when they:
- Contain primarily geometric shapes
- Have clean lines and simple forms
- Need to scale without quality loss
- Are primarily text, icons, and basic shapes
- Serve as reference charts or infographics
- Don't require photorealistic detail
- Use limited color palettes
- Contain flowcharts or diagrams
- Show technical illustrations
- Display UI mockups or wireframes

---

## Image Type Guidelines

### Screenshots
- **Use for:** Actual interface elements, menu systems, panels, viewport states
- **Requirements:** High resolution (min 1920x1080), clean interface, proper framing
- **Annotations:** Add arrows, labels, highlights as needed with consistent style
- **Best practices:** 
  - Use Blender's default dark theme
  - Show clean viewport without clutter
  - Highlight only relevant UI elements
  - Ensure text is readable at smaller sizes

### Diagrams
- **Use for:** Conceptual explanations, spatial relationships, abstract concepts
- **Requirements:** Clean, minimal, focused on concept
- **Style:** Technical illustration, educational clarity
- **Best practices:**
  - Use consistent geometric shapes
  - Limit to 3-4 colors
  - Label clearly and concisely
  - Show only essential information

### Composites
- **Use for:** Comparisons, step-by-step processes, multiple views, before/after
- **Requirements:** Consistent panel sizing, clear separations, equal spacing
- **Layout:** Grid or horizontal/vertical arrangements
- **Best practices:**
  - Use dividing lines between panels
  - Maintain consistent lighting across panels
  - Label each panel clearly
  - Ensure visual hierarchy

### Infographics
- **Use for:** Quick reference, shortcuts, workflow summaries, decision trees
- **Requirements:** High information density, scannable design, clear hierarchy
- **Style:** Modern, flat design, high contrast
- **Best practices:**
  - Use icons consistently
  - Group related information
  - Create clear visual flow
  - Balance text and visuals

### Annotated Images
- **Use for:** UI guidance, highlighting specific features, tutorial steps
- **Requirements:** Clear annotations that don't obscure important content
- **Style:** Arrows, boxes, labels that stand out
- **Best practices:**
  - Use bright colors for annotations
  - Keep arrow styles consistent
  - Position labels to avoid overlap
  - Use leader lines when needed

---

## Common Image Patterns by Lesson Type

### For Modeling Lessons
- Tool location screenshots
- Before/after modeling steps
- Topology diagrams
- Mesh structure visualizations
- Selection mode examples
- Edge flow patterns

### For Animation Lessons
- Timeline screenshots
- Keyframe visualizations
- Graph editor examples
- Motion path diagrams
- Rigging structure
- Constraint setups

### For Rendering Lessons
- Lighting setup diagrams
- Shader node networks
- Render settings screenshots
- Quality comparisons
- Camera angle examples
- Material previews

### For UI/Workflow Lessons
- Interface element locations
- Menu navigation paths
- Shortcut reference charts
- Workflow diagrams
- Panel configurations
- Preference settings

---

## Notes for Future Lessons

- Maintain consistent visual style across all lesson images
- Build a library of reusable elements (UI panels, common objects)
- Consider creating template compositions for repeated patterns
- Track which AI prompts produce best results for refinement
- Keep SVG source files editable for future updates
- Document any custom Blender scenes used for screenshots
- Create a master .blend file with common setups
- Maintain a style guide document for reference
- Save camera presets for consistent angles
- Use naming conventions that allow easy sorting and finding

---

## Revision History

- **Version 1.0** - Initial template created based on Lesson 04 analysis
- **Version 2.0** - Enhanced with Lesson 05 insights, added:
  - Comprehensive workflow instructions
  - Filesystem:write_file tool usage requirements
  - Detailed color palette standards
  - Enhanced AI prompt best practices
  - Extended image type guidelines
  - Common patterns by lesson type
  - Additional recommendations section structure
  - Quality checklist expansion
  - Production notes and special considerations
- **Version 2.1** - November 11, 2025 - Updated all paths to use correct WSL format:
  - Changed `\\wsl.localhost\` to `\\wsl$\` throughout document
  - Corrected all path references in examples and instructions
  - Updated task prompt template with correct path format
- Template designed to be reusable across all 51 course lessons
- Adaptable for different lesson types (modeling, animation, rendering, etc.)
