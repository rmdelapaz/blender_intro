# Status archive (blender_course)

Historical and superseded content moved out of `status.md` to keep the active status doc lean. New content goes to `status.md`; this file is append-only history. Created 2026-05-19 as part of the `INTERRUPTION_RECOVERY.md` minimum viable retrofit.

## 2026-05-19 archive sweep

### Lesson 03 production chat-by-chat history

Originally in the Total Size paragraph at the top of `status.md`. Per-chat production detail also lives in `lesson_03_integration_progress.md` and `lesson_03_completion_handoff.md`; this is the rolled-up summary as it appeared in `status.md` through 2026-05-19.

Twelve Lesson 03 SVGs shipped across three chats:

- Planning chat: #1 `big_three_operations`, #2 `mouse_button_reference`.
- Production chat 1: #3 `orbit_operation`, #4 `pan_operation`, #5 `zoom_operation`, #14 `navigation_workflow`.
- Production chat 2: #7 `standard_views_cube`, #8 `numpad_layout`, #12 `perspective_depth`, #13 `orthographic_parallels`, #17 `walk_fly_controls`, #18 `navigation_shortcuts_reference`.

Lesson 03 HTML integration ran across six phases (Phases 3 and 4 in a single chat): 18 figures (12 inline SVG plus 6 PNG) placed across the-big-three, mouse-navigation, perspective-ortho, standard-views, focus-frame, camera-view, advanced-techniques, and summary sections. HTML grew from 103.5 KB to 231.8 KB (237,410 bytes).

### Resolved Known Issues entries

Rows originally in the "Known Issues / Future Work" table of `status.md`. Kept here for traceability.

- **Lesson 51 was truncated** (resolved April 12, 2026). Was missing closing tags, footer, scripts. Resolution merged the existing parts into a complete file. Note: content may still be incomplete (parts 8 and beyond were referenced but not merged); if Lesson 51 prose ever needs auditing for missing content, this is the lead.
- **Copyright dates** (stale, low priority). At the time of the original note: `index.html` and `lesson_51` showed 2025; other 50 lesson footers showed 2024; the `injectSiteFooter()` JS function replaced footer content at runtime with 2025. Current year (2026) means a fresh sweep of static and dynamic footers will be warranted next time the site is touched holistically.

### Superseded session-handoff file references

Listed originally in `status.md` Supporting Files / Other Documentation. The files themselves are still on disk; they are no longer surfaced in `status.md` because the per-lesson and per-phase handoff files plus the new `session.md` resume pointer have superseded them.

- `continue.md` (~2.0 KB): early session handoff notes, predates the per-lesson progress doc pattern.
- `continue_updated.md` (~11.2 KB): later session handoff notes, also predates the current pattern.
- `lesson_02_next_chat_handoff.md`: mid-project Lesson 02 handoff; Lesson 02 is now complete.
- `lesson_02_phase4_cleanup_handoff.md`: Lesson 02 Phase 4 cleanup handoff; phase complete and folded into `lesson_02_integration_progress.md`.
- `wave3_continuation_prompt.md`: Wave 3 image production continuation prompt; the wave-based production pattern was superseded by the current per-lesson Phase pattern.

## Conventions for future archive sweeps

When trimming `status.md`:

1. Append a new dated section to this file (`## YYYY-MM-DD archive sweep`).
2. Group archived content under sub-headings that mirror the `status.md` section the content came from (Total Size, Known Issues, Supporting Files, and so on).
3. Keep each archived entry's original wording where practical, with a brief note explaining why it was archived.
4. Update `status.md` references to point here when the archived content is still potentially useful (resolved bug history, retired-but-on-disk files, prior workflow notes).
