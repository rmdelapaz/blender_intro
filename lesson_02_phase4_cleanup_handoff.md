# Lesson 02 Phase 4 Cleanup: Handoff

This handoff opens a fresh chat to close the two outstanding Phase 4 cleanup items in `lesson_02_the_blender_interface.html`. Image integration is complete (all 20 images placed across Phases 1-6); this is structural-content polish only.

## Project context

- Root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Target file: `lesson_02_the_blender_interface.html` (152,371 bytes as of end of Phase 6)
- Progress doc: `lesson_02_integration_progress.md` (read first - it has the locked approach and a "Phase 4 cleanup" section that defines the two items below)
- Stale prior handoff (do NOT use): `lesson_02_next_chat_handoff.md`

## Current state

- All 6 phases of image integration are done. 20 / 20 images placed (14 PNG, 6 inline SVG).
- The two cleanup items below were scoped during Phase 4 planning but deferred and never executed. They are independent of the image work and can be done in either order.
- File size growth from Phase 1 start: 82.87 KB → 148.80 KB.

## Outstanding items

### Item 1: Orphan `</div>` in the workspaces section

**Symptom:** an unmatched `</div>` sits somewhere after the `<!-- PART 8 START -->` comment marker in the `workspaces` section. No matching opening tag is visible nearby.

**Find it:** grep / view the file for `<!-- PART 8 START -->`. Read 30-60 lines downward from that marker. Count opening `<div>` and closing `</div>` tags until you find the one with no partner. PART comment markers in this file are sentinels left from the original chunked assembly process.

**Fix:** remove the orphan `</div>` with `Filesystem:edit_file`. The `oldText` anchor should be 2-3 lines wide so the match is unique: include the line immediately above and the line immediately below the orphan tag. Use `dryRun=true` first, then commit, then `Filesystem:get_file_info` to confirm a small negative byte delta (around -25 to -45 bytes depending on indent).

**Risk check:** before committing, visually confirm in the dry-run diff that the surrounding structure (the `<section id="workspaces">`, the "Default Workspaces" `<h3>`, and the cards beneath it) is still balanced. If the diff shows new content following an unexpectedly unclosed parent, do NOT commit; re-read a larger window first.

### Item 2: Missing default-workspace cards

**Symptom:** the "Default Workspaces" subsection of the `workspaces` section currently has cards for only 4 workspaces (Layout, Modeling, Sculpting, UV Editing). Blender 5.1 ships with 11 default workspaces. Image #8 (`lesson_02_08_workspace_tabs.png`, already placed at the start of the section) shows the full row of 11 tabs, so the explanatory cards need to match the image.

**Add cards for these 7 workspaces, in this order:**

1. Texture Paint
2. Shading
3. Animation
4. Rendering
5. Compositing
6. Geometry Nodes
7. Scripting

**Pattern:** each card follows the existing in-file style. Read the existing 4 cards first to mirror their structure exactly. The pattern is `<div class="card">` containing an emoji + `<h4>` + one short paragraph describing what the workspace is for and which editors it surfaces. Keep paragraphs to roughly 1-2 sentences each, matching the brevity of the existing 4. Suggested emoji starters (use your judgment, these are not locked):

- Texture Paint: 🎨
- Shading: ✨ or 🌈
- Animation: 🎞️ or 🎬
- Rendering: 🖼️ or 📷
- Compositing: 🎛️
- Geometry Nodes: 🔗 or 🕸️
- Scripting: 🐍 or 💻

**Insertion point:** after the 4th existing card (UV Editing), before whatever element currently follows it. Anchor `oldText` with the closing `</div>` of the UV Editing card plus the next element below.

**Workflow:** one `Filesystem:edit_file` call with all 7 cards in a single `newText` block is fine, OR split into two calls if the anchor's `oldText` becomes hard to keep unique. Standard `dryRun=true` first, then commit, then `get_file_info` verify. Expected size delta is roughly +1.5 to +2.5 KB.

**Content accuracy note:** keep the card descriptions factually correct for Blender 5.1. If unsure about what a workspace surfaces, prefer a shorter description over a guess. Compositing in 5.1 is the node-based post-processing workspace; Geometry Nodes is the procedural modeling workspace; Scripting exposes the Python console and text editor. Rendering surfaces the Image Editor for inspecting renders. These are safe baseline statements.

## Locked workflow (unchanged from Phases 1-6)

- **Tools:** `Filesystem:edit_file` only. NEVER use the built-in `create_file` (it writes to Claude's container, not the user filesystem at `\\wsl$\` paths). For new files, use `Filesystem:write_file`.
- **Edits:** always `dryRun=true` first to confirm anchors match. Commit with `dryRun=false`. Verify every commit with `Filesystem:get_file_info` (check size delta and modified timestamp).
- **Anchors:** use 2-3 lines for `oldText` (the line above and below the insertion or edit point). Make sure the anchor is unique in the file.
- **Path prefix:** `\\wsl$\Ubuntu\` always. Never `\\wsl.localhost\`.
- **No new em-dashes** in any new content. Preserve existing em-dashes in source content (paragraphs, blockquotes).
- **Per-chat archive discipline:** when the chat is winding down or context is getting heavy, warn Ray rather than letting automatic compaction happen.

## Suggested order

Item 1 first (it is a single small deletion, fast to verify). Item 2 second (it is additive content). Doing Item 1 first means Item 2 anchors cannot accidentally land near the broken structure.

## After completion

1. Update `lesson_02_integration_progress.md`:
   - Remove the "Phase 4 cleanup" section, OR mark both items as done with a brief outcome note.
   - Update the post-cleanup file size in the Status block if you want a final tally line.
2. Tell Ray Lesson 02 is fully closed and ready for whatever comes next (likely Lesson 03 image production).

## Tool loading note

The Filesystem MCP tools (read_text_file, edit_file, get_file_info, list_directory, write_file) are deferred. At the start of the new chat, call `tool_search` with a query like "filesystem read edit write file" to load them. `Filesystem:read_text_file` accepts `head` / `tail` line counts but NOT `view_range`.

---

## Copy-paste prompt for the new chat

```
Project root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course
Today's task: Lesson 02 Phase 4 cleanup. Read lesson_02_phase4_cleanup_handoff.md first for the two outstanding items, locked workflow, and post-completion steps. Then read lesson_02_integration_progress.md for the current file state and the "Phase 4 cleanup" item list it already tracks.

Standing rules: \\wsl$ paths only (no \\wsl.localhost\), no new em-dashes, Filesystem:edit_file with dryRun=true then commit, verify every commit with Filesystem:get_file_info, use Filesystem:write_file (never the built-in create_file) for any new files. Warn me to start a new chat before context gets tight rather than letting automatic compaction happen.

Begin with Item 1 (orphan </div> after the <!-- PART 8 START --> marker), then Item 2 (add 7 missing default-workspace cards: Texture Paint, Shading, Animation, Rendering, Compositing, Geometry Nodes, Scripting). When both items land cleanly, update the progress doc to close out Phase 4 cleanup.
```
