# Blender Course - Continuation Guide

## 🚨🚨🚨 CRITICAL PAUSE RULE 🚨🚨🚨

### MANDATORY CONFIRMATION WORKFLOW

**AFTER CREATING EACH AND EVERY PART FILE, YOU MUST:**

1. ✋ **STOP IMMEDIATELY** - Do not create the next file
2. 📢 **ANNOUNCE** what you just created: "✅ Part [X] created: [filename]"
3. ❓ **ASK EXPLICITLY**: "Should I continue with Part [X+1]?"
4. ⏸️ **WAIT** for user's response before doing ANYTHING else
5. ✅ Only proceed after receiving confirmation

### 🚫 WHAT NOT TO DO:

- ❌ Do NOT create multiple parts in a row without confirmation
- ❌ Do NOT assume the user wants you to continue
- ❌ Do NOT say "creating next part..." and just do it
- ❌ Do NOT batch-create files

### ✅ WHAT TO DO:

```
Example correct workflow:
1. Create part_01.html
2. Say: "✅ Part 1 created: lesson_07_modeling_your_first_object_part_01.html"
3. Ask: "Should I continue with Part 2?"
4. [WAIT FOR USER RESPONSE]
5. Only after "yes/continue/go ahead" → create part_02.html
```

**THIS RULE OVERRIDES ALL OTHER INSTRUCTIONS. FOLLOW IT EVERY TIME.**

---

## Project Overview
This is a comprehensive Blender course for absolute beginners. The course teaches 3D character posing, scene creation, and rendering through hands-on lessons with a friendly, instructor-style approach.

## Project Location
- **Working Directory:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- **Template Reference:** `\\wsl$\Ubuntu\home\practicalace\projects\course_template`
- **Lesson Plan:** `course_lesson_plan.json` (in blender_course directory)

### 📍 NEXT ACTION
**Continue Lesson 07 - Part 6** 

## File Creation Guidelines

### CRITICAL REQUIREMENTS

**1. File Naming Convention:**
- Use underscores only (NO spaces, NO hyphens)
- Format: `lesson_##_descriptive_name.html`
- Examples: `lesson_01_welcome_to_poser.html`, `lesson_06_natural_poses.html`

**2. File Part Markers:**
Each part file MUST include comments at the start and end:

```html
<!-- ============================================
     LESSON ## - PART ##
     File: lesson_##_descriptive_name_part_##.html
     ============================================ -->

[CONTENT HERE]

<!-- ============================================
     END OF PART ##
     Continue with lesson_##_descriptive_name_part_##.html
     ============================================ -->
```

**3. Writing Style:**
- Write as an AMAZING INSTRUCTOR teaching beginners
- Friendly, accessible, encouraging tone
- Use plenty of real-world examples, analogies, and metaphors
- NO numbering in headings within content (use descriptive headings)
- Keep lessons focused and practical (aim for 8,000-12,000 words)
- For very long topics, create streamlined versions focusing on essentials

**4. Complete HTML Structure:**
Every lesson MUST include:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Lesson description]">
    <meta name="author" content="Blender Course">
    <title>[Lesson Title] - Blender Mastery Course</title>
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

**5. Sticky Table of Contents (REQUIRED):**
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

**6. Visual Elements:**
- 📊 Mermaid diagrams for workflows and hierarchies
- 😊 Emojis for section markers and engagement
- 🎨 Color-coded cards for tips, warnings, success messages
- 📸 Placeholder divs for future images (if needed)

**7. Standard Navigation Footer:**
```html
<nav class="lesson-nav" aria-label="Lesson Navigation">
    <a href="lesson_##_previous.html" class="prev-lesson">← Previous: [Title]</a>
    <a href="index.html" class="home-link">🏠 Course Home</a>
    <a href="lesson_##_next.html" class="next-lesson">Next: [Title] →</a>
</nav>
```

**8. Required Scripts:**
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
- Meshes = "digital clay" or "wire sculpture"
- Modifiers = "magic filters that change your object"
- Materials = "paint and texture"
- Lighting = "painting with light"
- Rendering = "taking a photograph of your 3D scene"

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
- ✅ Part markers (comments) at start and end of each file

## File Creation Process

1. **Multiple file approach** (REQUIRED for long lessons)
   - Create lesson in separate numbered parts (part_01, part_02, etc.)
   - User will concatenate parts together
   - Each part should be a complete section
   - Aim for 8-15 parts per lesson depending on complexity

2. **After EACH part file:**
   - ✋ STOP and confirm the part was created
   - 📢 Announce: "✅ Part [X] created"
   - ❓ Ask: "Should I continue with Part [X+1]?"
   - ⏸️ WAIT for user confirmation

3. **After all parts of a lesson:**
   - Verify all parts were created successfully
   - User will join parts and inform you of final filename
   - PAUSE and ask: "Should I continue to the next lesson?"
   - Wait for user confirmation before proceeding

## Tools to Use

### 🚨 CRITICAL: File Creation Tool Requirements

**ALWAYS USE `Filesystem:write_file` for creating files!**

The `Filesystem:write_file` tool writes to the proper Windows-accessible WSL directory.
The `create_file` and `bash_tool` tools write to container-only locations that the user CANNOT access.

**Correct Tool Usage:**
- ✅ `Filesystem:write_file` - Create new HTML files (REQUIRED)
- ✅ `Filesystem:read_file` - Read existing files
- ✅ `Filesystem:list_directory` - Check directory contents
- ✅ `Filesystem:edit_file` - Edit existing files

**NEVER Use These for File Creation:**
- ❌ `create_file` - Writes to container filesystem (user cannot access)
- ❌ `bash_tool` with `cat >` or similar - Writes to container filesystem (user cannot access)
- ❌ `str_replace` - Use `Filesystem:edit_file` instead

### Why This Matters:

The working directory `\\wsl$\Ubuntu\home\practicalace\projects\blender_course` is a WSL (Windows Subsystem for Linux) mount point that is accessible from Windows.

**What happens with different tools:**
- `Filesystem:write_file` → Writes to WSL mount (✅ User can see files in Windows)
- `create_file` / `bash_tool` → Writes to container filesystem (❌ User CANNOT see files)

**If files aren't visible to the user:**
1. Check what tool was used
2. Verify the file path starts with `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
3. Re-create the file using `Filesystem:write_file`

## Important Reminders

1. **File paths:** Use `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\`
2. **Always create lessons in multiple parts** for easier management
3. **🚨 PAUSE AFTER EACH PART FILE 🚨** for user confirmation
4. **Add part markers** (HTML comments) to each file
5. **Keep instructor tone consistent** - friendly, encouraging, practical
6. **Progressive learning** - each lesson builds on previous ones
7. **Every lesson needs a hands-on project or exercise**
8. **Focus on practical skills** students can immediately apply
