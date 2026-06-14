Blender course session resume. Read first, in order:
  \\wsl$\Ubuntu\home\practicalace\projects\blender_course\session.md (TOP banner + Last updated),
  then the relevant lesson_NN_integration_progress.md / lesson_NN_browser_qa_progress.md,
  then images/IMAGE_STYLE_GUIDE.md v6. WSL \\wsl$\ paths only.

STATE: All figure work COMPLETE (L15 40/40, L14 40/40). All lesson-body defects CLOSED
  2026-06-13 (L12 dup-id+TOC, L13 + L09-F2 table-overflow). No active figure phase.

NEXT = standing browser-QA queue (pick one, confirm with Ray):
  - L05 / L06 / L07 browser-QA passes (L08 image work done but QA parked)
  - L07 #20/#21 held flags (menu-cascade overlays)
  - L11 1024-width sweep (only width never run; no defects expected)
  - Optional: L15 browser-QA pass (fresh lesson_15_browser_qa_progress.md)

METHOD (carry forward unchanged):
  - Browser-QA: real Chromium + Playwright, dark+light x 1920/1024/414, overlay box-delta,
    console-error sweep, blank-img check; copy live HTML + styles/main.css + distinct PNGs to a
    Claude-side qa/ harness, neutralize the 4 externals (mermaid CDN module / favicon /
    js/clipboard.js / js/course-enhancements.js), swap CDN mermaid for local mermaid.min.js,
    real HTML UNTOUCHED; scroll top->bottom before measuring (lazy imgs); log to
    lesson_NN_browser_qa_progress.md.
  - Any HTML edit: copy_file_user_to_claude to refresh; anchor by unique TEXT span until count=1
    (never section id); edit_file dryRun->commit->get_file_info; bottom-up; no new em-dashes
    (&#183;); Python count('\u2014') authoritative for em-dash baseline (per-lesson, held).
  - Per-lesson integrity sweep before+after any commit.
  - tool_search (silently) for deferred Filesystem / Playwright tools.
  - Close each task by updating session.md (banner + Last updated + outcome bullet) and the
    lesson's progress/QA doc.

NOTE: L12/L13/L09 live files were each ~47-80 B smaller than their figure-close sizes with a
  shared Jun-12 mtime (benign batch touch; bodies verified sound). Current sizes in session.md
  Last-updated are authoritative. If a future lesson-body pass wants it, L09 has 21 tables but
  only 3 named ones were wrapped this session — the other 18 are unflagged/narrower and could be
  wrapped for full robustness (optional).
