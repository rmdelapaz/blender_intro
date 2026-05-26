# Blender Course · Next chat: Lesson 07 kickoff

**Last updated:** 2026-05-25 (Lesson 06 image work CLOSED · all 50 of 50 produced + integrated · status.md rolled · lesson_06_completion_handoff.md written)
**Next chat:** Lesson 07 kickoff (planning chat for `lesson_07_modeling_your_first_object.html`)
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Current state

**Lesson 06 image work CLOSED 2026-05-25.** All 50 of 50 images produced and integrated into `lesson_06_edit_mode_essentials.html` (237,004 bytes / 231.5 KB; +95.1 KB across six phases from the 136.3 KB integration-start baseline). 17 PNG overlays + 3 SVGs across the integrated set: 11 positive-green full-callouts (c2, c3, c10, c16, c20, c28, c30, c43, c45, c46, c49) + 2 positive-green composite-overlays (c25, c41) + 1 warning-red (c23) + 3 decorative-shape-only (c13, c14, c15) + 3 inline SVGs (pf #8, dd #21, sr #44).

Close-out artifacts at project root:

- `lesson_06_completion_handoff.md` (57,950 B) — final L06 handoff; carry-forward patterns, 10 new BlenderMCP discoveries from Phases 5 / 6, modal-status-bar-as-truth criterion, marginal-read rejection precedent, Win+Shift+S overlay-freezes-screen popover capture path, cross-sub-chat composite pattern, resume-chat workflow precedent, manual-capture save-direct-to-WSL forward fix, Pillow crop+resize pre-integration step, multi-callout pattern extension (3→4 callouts via c43), composite-overlay second precedent (c25→c41), decorative-shape-only overlay variant, card-internal figure placement, deferred follow-ups
- `lesson_06_integration_progress.md` — running narrative log; all 6 phases COMPLETE; Status section is the canonical history including all interruption-resume chats
- `lesson_06_session_final.md` (7,513 B) — frozen snapshot of `session.md` at L06 close
- `images\IMAGE_STYLE_GUIDE.md` v5 (49,085 B; v5 addenda CLOSED earlier this session)
- `status.md` — rolled this chat (L06 row flipped from `📋 Planning Complete · 0 of 50 produced` to `✅ Complete · 50 of 50 produced + integrated`; Last Updated bumped to May 25, 2026; Total Size line and Module 2 table file size updated)
- `images\_archive\lesson_06_close_2026-05-25\` + project-root `_archive\` — historical L06 close-out docs (5 `_temp_*` + 1 `.bak` archived in images sweep; 3 L06 handoff docs archived at project root; 4 `_tmp_*` / `_diag_*` staged for review in `_pending_delete\`)

**Standing deferred follow-ups (do not close in Lesson 07 kickoff chat):**

- Browser QA pass for Lesson 06 across all 50 figures (highest priority for Phase 6 fresh integrations: #43 c43 4-callout, #41 c41 NEW composite-overlay, #38 card-internal placement, #39 cropped Pillow image plus the `Full Blender window` alt-text mismatch flagged at integration)
- Browser QA pass for Lesson 05 (pending from L05 close)
- Optional progress-doc archive sweeps for Lessons 05 and 06
- `IMAGE_STYLE_GUIDE.md` v6 revision (not yet scoped; would fold in the L06 pattern additions and the 10 Phase 5 / 6 PRODUCTION discoveries)
- Lesson body Knife Tool Modes table edit in `lesson_06_edit_mode_essentials.html` to flip pre-5.1.1 keybindings to corrected 5.1.1 bindings (low-priority; figure copy already sidesteps the contradiction)

---

## Next chat: Lesson 07 kickoff

Read this `session.md`, then `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_06_completion_handoff.md` for carry-forward patterns and new locked rules from L06, then `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_image_requirements.md` for the Lesson 07 spec, then the head of `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_modeling_your_first_object.html` (current size 114.7 KB per status.md) to confirm section IDs match the requirements doc.

**Planning chat scope:**

1. Decide SVG-vs-PNG split for Lesson 07
2. Decide phase plan + per-phase figure counts (pre-allocate sub-chat slots for any phase with 5+ figures per L05 / L06 cadence; pre-allocate dedicated plan-lock chats for any INTEGRATION phase with 6+ figures)
3. Lock ID prefix registry (SVG prefixes + PNG overlay `c{N}` ids; no collisions with prior lessons since each lesson's HTML is its own page-scope)
4. Write `\\wsl$\Ubuntu\home\practicalace\projects\blender_course\lesson_07_integration_progress.md` modeled on `lesson_06_integration_progress.md` (or the leaner post-archive-sweep shape if Ray opts for the L05 / L06 archive sweep first)
5. Rewrite this `session.md` to point at Phase 1 PRODUCTION

**Alternative kickoffs** (per the `Next` section of `lesson_06_completion_handoff.md`): browser QA pass for L06 (or paired L05 + L06); `IMAGE_STYLE_GUIDE.md` v6 revision paired with L07 planning; progress-doc archive sweeps for L05 + L06.

---

## Locked rules carrying forward (from L06 close-out)

Full list in `lesson_06_completion_handoff.md`. Lesson 07 kickoff specific:

- WSL `\\wsl$\Ubuntu\` paths only
- `Filesystem:edit_file` with `dryRun=true` first, then commit with `dryRun=false`, then `Filesystem:get_file_info` to verify per edit
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`
- `tool_search` for deferred tools rather than asking
- No new em-dashes anywhere in new content; middle-dot (`·`) for separation; pre-existing en-dashes and em-dashes in source HTML preserved verbatim through edit anchors; structural em-dash after a date in Status bullets grandfathered as list-item separator
- All 10 L06 Phase 5 / 6 BlenderMCP discoveries apply (Screw Modifier needs `transform_apply(rotation=True)` before add; `subdivide` needs VIEW_3D `temp_override`; multi-object Edit Mode breaks `knife_project`; `plane.show_wire=True` for knife_project SOLID-shading visibility; `view3d.view_axis` operator vs `region_data.view_rotation` for view sync; knife modal keybindings A/C/Z not C/Z/A; Alt+Z X-ray ON before knife cut-through; `subdivide(number_cuts=N)` quadratic-not-exponential; `bpy.ops.screen.screenshot` WSL UNC silent-truncation; bevel modal readout splits top-floating + bottom-hints-bar)
- Modal-status-bar-as-truth criterion for manual modal captures
- Win+Shift+S overlay freezes screen on Win 11 (popover capture path; complements `bpy.ops.screen.screenshot_area`)
- Manual-capture save-direct-to-WSL forward fix (skip Claude UI upload roundtrip)
- Cross-sub-chat composite pattern (sub-chat A retains `_temp_*` files; sub-chat B opens with `Filesystem:get_file_info` verify)
- Resume-chat workflow precedent (chat hits tool-use limit mid-execution → resume picks up at next pending step; Status bullet documents both halves; sub-chat envelope stays single unless section boundary requires)
- MCP server hang recovery: 4-min timeout boundary → `Filesystem:get_file_info` size check before retry
- Multi-callout overlay pattern (c2 / c3 multi-label · c28 / c30 3-callout · c43 4-callout extension): per-overlay aria-labelledby title+desc pair, per-callout ellipse ids, structural author comments before each callout group
- Composite-overlay variant (c25 / c41 precedent): two centered bottom-of-panel rect+text pairs, no ellipse / leader / marker
- Decorative-shape-only overlay variant (c13 / c14 / c15 precedent): shape itself carries the message without ellipse / leader / marker / badge
- Card-internal figure placement variant: col 8 / 12 depth inside cards (single L06 instance at #38; precedent across L04 / L05 / L06)
- Pillow crop+resize via `blender:execute_blender_code` for oversize manual captures (precedent: #45 in L04, #39 in L06)
- Warning-vs-positive overlay colorway split (`#E63946` warning · `#4ADE80` positive)
- Pre-emptively plan sub-chat splits for any phase with 5+ figures; pre-emptively split INTEGRATION planning into its own chat for any phase with 6+ figures
- Warn Ray before context tightens rather than letting automatic compaction happen
