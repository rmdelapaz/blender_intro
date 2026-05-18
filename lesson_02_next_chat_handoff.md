Lesson 02 next chat handoff: Phase 5 HTML integration

Project context

Root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Target file: lesson_02_the_blender_interface.html
Tracking doc: lesson_02_integration_progress.md (READ THIS FIRST. The locked approach, wrapper pattern, anchor strategy, and full placement table all live there.)
Always use \\wsl$\Ubuntu\ paths (never \\wsl.localhost\)

Status as of end of Phase 4

Phases 1, 2, 3, 4 done. 14 of 20 images placed.
- Phase 1 (first-impressions + interface-philosophy): #11, #1, #17, #19 inline
- Phase 2 (areas-and-editors): #2 inline, #3, #7 inline, #16
- Phase 3 (the-viewport): #4, #5, #10, #12
- Phase 4 (workspaces): #8, #15, plus structural cleanup (orphan </div> after PART 8 START removed; added 7 missing workspace cards so the Default Workspaces list now matches the 11 tabs shown in image #8)

Lesson HTML file size after Phase 4: 111,987 bytes (111.99 KB).
Progress doc updated: phase rows for #8 and #15 flipped to done; status block bumped to Phases 1, 2, 3, 4 done; Phase 4 cleanup note added.

6 images and 2 phases remain.

Phase 5 scope: key-editors and customization

This is the largest phase by image count. 5 images total, including 2 inline SVGs.

Section id="key-editors":
- #9 `lesson_02_09_outliner_anatomy.png` — in "The Outliner: Your Scene's Family Tree" subsection, after the "What You See in the Outliner" list (the eye / arrow / camera / monitor icon list)
- #6 `lesson_02_06_properties_panel_icons.svg` — in "Properties Panel: Your Control Center", before the "Properties Panel Sections (Top to Bottom)" cards. Inline SVG.

Section id="customization":
- #13 `lesson_02_13_preferences_window.png` — in "Preferences: Your Personal Settings", after the intro paragraph that names Edit → Preferences and before "Key Preference Categories"
- #14 `lesson_02_14_quick_favorites_menu.png` — in "Quick Favorites Menu" subsection, after the numbered list that ends with "Build a collection of frequently-used operations"
- #20 `lesson_02_20_mobile_tablet_note.svg` — in "Interface Scaling" subsection, after the numbered list. Inline SVG.

Confirm each insertion point against the file before committing; anchors above use phrases from the current HTML, but always dry-run first to make sure the anchor block is unique.

Inline SVG critical rule (applies to #6 and #20 in this phase)

When inlining a .svg file, strip the `color="#222"` attribute from the inline `<svg>` root tag. That attribute is the `<img>`-embedded fallback so a standalone SVG has some color; when inlined it locks the SVG's color to #222 and prevents currentColor from inheriting the page text color, breaking dark mode. The .svg source files in images/ keep the attribute for standalone viewing; only the inline copy in HTML drops it.

This bit Phase 1: image #19 shipped with `color="#222"` intact and was unreadable in dark mode until fixed after the fact. Phase 2 #2 and #7 were correct. Phase 4 had no inline SVGs. Phase 5 has two more chances to get it right.

Indentation when inlining: re-indent the outer `<svg>` to 20-space content depth (figure is at 16 spaces, figure children at 20 spaces). Inner SVG lines proportionally. Preserve `role`, `aria-labelledby`, `<title>`, `<desc>` exactly.

Locked approach reminders (full version in lesson_02_integration_progress.md)

- Plain `<figure>` wrapper with `<figcaption>`. No class.
- PNG: `<img src="images/..." alt="..." loading="lazy">` inside the figure.
- Indentation: 16 spaces for `<figure>`, 20 spaces for inner content (matches Phases 1-4).
- Anchors: use one element above and one element below the insertion point as the `oldText` block; insert the figure between them in `newText`.
- Preserve existing em-dashes that appear in source paragraphs. The no-em-dash rule applies only to NEW text Claude writes (alt, figcaption, etc.).
- Filesystem:edit_file only, never the built-in container-side create_file.
- Always dryRun=true first to confirm anchors match, then commit. Verify with Filesystem:get_file_info after every commit.

Tools are deferred

Call tool_search with query "filesystem" before the first Filesystem call. The loaded set should include read_text_file, edit_file, get_file_info at minimum.

Standing rules

- \\wsl$\Ubuntu\ paths (never \\wsl.localhost\)
- No new em-dashes
- Filesystem:edit_file with dryRun=true first, then commit
- Verify with Filesystem:get_file_info after every commit
- Plain <figure> wrapper with figcaption (no class)
- For inline SVGs (#6 and #20 in this phase), strip the color="#222" attribute from the inline <svg> root tag
- Warn Ray to start a new chat before context gets tight, rather than letting automatic compaction happen

After Phase 5

Phase 6: summary (1 image: #18 inline, the 14.74 KB keyboard shortcuts reference SVG, biggest in the set). Same inline-SVG rule applies (strip color="#222"). After Phase 6, Lesson 02 image integration is complete.

How to start the Phase 5 chat

Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 02 HTML integration, Phase 5 of 6 (key-editors + customization, 5 images including 2 inline SVGs: #9, #6 inline, #13, #14, #20 inline). Read lesson_02_integration_progress.md and lesson_02_next_chat_handoff.md first for plan, current state, locked approach, and the inline-SVG color="#222" strip rule.
Standing rules: \\wsl$ paths, no new em-dashes, Filesystem:edit_file with dryRun=true first then commit, verify with Filesystem:get_file_info, plain <figure> wrapper with figcaption (no class), strip color="#222" from inline SVGs.
