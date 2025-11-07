# Blender Course - Continuation Guide

## Project Overview
This is a comprehensive Blender course for absolute beginners. The course teaches 3D character posing, scene creation, and rendering through hands-on lessons with a friendly, instructor-style approach.

## Project Location
- **Working Directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- **Template Reference:** `\\wsl$\Ubuntu\home\practicalace\projects\course_template`
- **Lesson Plan:** `course_lesson_plan.json` (in blender_course directory)



### 📍 NEXT ACTION
**Start Lesson 01** 

## File Creation Guidelines

### CRITICAL REQUIREMENTS

**1. File Naming Convention:**
- Use underscores only (NO spaces, NO hyphens)
- Format: `lesson_##_descriptive_name.html`
- Examples: `lesson_01_welcome_to_poser.html`, `lesson_06_natural_poses.html`

**2. Writing Style:**
- Write as an AMAZING INSTRUCTOR teaching beginners
- Friendly, accessible, encouraging tone
- Use plenty of real-world examples, analogies, and metaphors
- NO numbering in headings within content (use descriptive headings)
- Keep lessons focused and practical (aim for 8,000-12,000 words)
- For very long topics, create streamlined versions focusing on essentials

**3. Complete HTML Structure:**
Every lesson MUST include:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Lesson description]">
    <meta name="author" content="Poser 12 Course">
    <title>[Lesson Title] - Poser 12 Mastery Course</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="icon" type="image/png" href="/favicon.png">
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            themeVariables: {
                primaryColor: '#f0f0f0',
                primaryTextColor: '#333',
                primaryBorderColor: '#667eea'
            }
        });
    </script>
</head>
<body>
    <!-- Navigation, breadcrumb, main content, footer, scripts -->
</body>
</html>
```

**4. Sticky Table of Contents (REQUIRED):**
```html
<details class="card" open style="position: sticky; top: 80px; z-index: 100; background: var(--card-bg, white); box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem;">
    <summary style="cursor: pointer; font-weight: bold; padding: 0.5rem 1rem; user-select: none;">
        <h2 style="display: inline; margin: 0;">📑 In This Lesson</h2>
    </summary>
    <nav aria-label="Table of Contents" style="padding: 0 1rem 1rem 1rem;">
        <ol>
            <li><a href="#section-id" class="toc-link">Section Title</a></li>
        </ol>
    </nav>
</details>
```

**5. Visual Elements:**
- 📊 Mermaid diagrams for workflows and hierarchies
- 😊 Emojis for section markers and engagement
- 🎨 Color-coded cards for tips, warnings, success messages
- 📸 Placeholder divs for future images (if needed)

**6. Standard Navigation Footer:**
```html
<nav class="lesson-nav" aria-label="Lesson Navigation">
    <a href="lesson_##_previous.html" class="prev-lesson">← Previous: [Title]</a>
    <a href="index.html" class="home-link">🏠 Course Home</a>
    <a href="lesson_##_next.html" class="next-lesson">Next: [Title] →</a>
</nav>
```

**7. Required Scripts:**
```html
<script src="js/clipboard.js"></script>
<script src="js/course-enhancements.js"></script>
```

## Standard Lesson Structure

Every lesson follows this pattern:

1. **Header with Learning Objectives**
   - Engaging title with emoji
   - Lead paragraph explaining why topic matters
   - Learning objectives card (what you'll learn, estimated time, project)

2. **Sticky Table of Contents**
   - 6-10 main sections typical
   - Collapsible, always visible on scroll

3. **Main Content Sections** (6-10 sections)
   - Clear section headings with IDs
   - Real-world analogies throughout
   - Visual aids (Mermaid, cards, tables)
   - Blockquotes for key insights
   - Pro tips in special cards
   - Common mistakes highlighted

4. **Project Section**
   - Hands-on exercise applying lesson concepts
   - Step-by-step instructions
   - Success checklist
   - Bonus challenges (optional)

5. **Summary/Wrap-Up**
   - Key takeaways card
   - What's next preview
   - Encouragement card with gradient background

6. **Navigation & Footer**
   - Previous/Home/Next links
   - Copyright footer
   - Required scripts

## Card Style Patterns

### Information Card
```html
<div class="card">
    <h4>Title</h4>
    <p>Content</p>
</div>
```

### Success/Tip Card (Green)
```html
<div class="card" style="background: #e8f5e9; border-left: 4px solid #4CAF50;">
    <h4>✅ Title</h4>
    <p>Content</p>
</div>
```

### Warning Card (Yellow)
```html
<div class="card" style="background-color: #fff3cd; border-left: 4px solid #ffc107;">
    <h4>⚠️ Title</h4>
    <p>Content</p>
</div>
```

### Feature Card (Purple Gradient)
```html
<div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
    <h3>💡 Title</h3>
    <p style="color: white;">Content</p>
</div>
```

## Mermaid Diagram Examples

### Simple Flow
```html
<div class="mermaid">
    graph TD
    A[Start] --> B[Step 1]
    B --> C[Step 2]
    C --> D[End]
    style A fill:#667eea,stroke:#333,stroke-width:2px,color:#fff
</div>
```

### Hierarchy
```html
<div class="mermaid">
    graph LR
    A[Parent] --> B[Child 1]
    A --> C[Child 2]
    style A fill:#4CAF50,stroke:#333,stroke-width:2px,color:#fff
</div>
```

## Writing Best Practices

### Tone Guidelines:
- Friendly and encouraging (like a patient teacher)
- Use "you" and "we" language
- Acknowledge challenges but stay positive
- Celebrate progress and small wins
- Break complex topics into digestible chunks

### Proven Analogies:
- Blender = "digital sculpting studio"
- Figure hierarchy = "family tree" or "mobile"
- Morphs = "volume knobs on a mixing board"
- Props = "set dressing for a movie"
- Lighting = "painting with light"
- Scene building = "set designer for a movie"
- Ground plane = "stage floor" or "foundation"

### Common Patterns:
- Start sections with relatable questions
- Include "Pro Tips" in highlighted cards
- Add "Try It Now" practice moments
- Use comparison tables for choices
- Include troubleshooting boxes for common issues

## Quality Checklist

Before considering a lesson complete:
- ✅ Clear learning objectives stated upfront
- ✅ Logical flow from simple to complex
- ✅ At least 3-5 real-world analogies or examples
- ✅ Visual aids support understanding (Mermaid, tables, cards)
- ✅ Sticky TOC properly configured
- ✅ Navigation links correct (check lesson numbers!)
- ✅ Mobile-friendly (responsive design)
- ✅ Encouraging, friendly tone throughout
- ✅ No numbered headings in content
- ✅ Favicon link present
- ✅ Mermaid script in head
- ✅ Required scripts at bottom
- ✅ Project/exercise included
- ✅ Summary with key takeaways

## File Creation Process

1. **Multiple file approach** (REQUIRED for long lessons)
   - Create lesson in separate numbered parts (part_01, part_02, etc.)
   - User will concatenate parts together
   - Each part should be a complete section
   - Aim for 8-15 parts per lesson depending on complexity

2. **After each lesson:**
   - Verify all parts were created successfully
   - User will join parts and inform you of final filename
   - PAUSE and ask: "Should I continue to the next lesson?"
   - Wait for user confirmation before proceeding

## Tools to Use

**Recommended:**
- `Filesystem:write_file` - Create new HTML files
- `Filesystem:read_file` - Read existing files
- `Filesystem:list_directory` - Check directory contents

**Avoid:**
- `create_file` tool (use Filesystem:write_file instead)
- `str_replace` tool (use Filesystem:edit_file if needed)



## Important Reminders

1. **File paths:** Use `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
2. **Always create lessons in multiple parts** for easier management
3. **Pause after each lesson** for user confirmation
4. **Keep instructor tone consistent** - friendly, encouraging, practical
5. **Progressive learning** - each lesson builds on previous ones
6. **Every lesson needs a hands-on project or exercise**
7. **Focus on practical skills** students can immediately apply

