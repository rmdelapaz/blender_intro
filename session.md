# Lesson 06 Session State

**Last updated:** 2026-05-25 (Phase 6 PRODUCTION plan-lock CLOSED)
**Next chat:** Phase 6 PRODUCTION sub-chat A
**Lesson:** `lesson_06_edit_mode_essentials.html`
**Project root:** `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Current state

**Phase 6 PRODUCTION plan-lock CLOSED** 2026-05-25. New `Phase 6 PRODUCTION plan` section written into `lesson_06_integration_progress.md` between `Phase 5 INTEGRATION plan` and `Locked rules` (progress doc 227,997 → 262,243 bytes; +34,246 plan-section delta), then Status bullet appended (→ 267,199 bytes; +4,956 Status-bullet delta), then bottom-of-doc Next chat section rewritten to point at Phase 6 PRODUCTION sub-chat A execution (final progress doc size 269,089 bytes). 2 sub-chats locked following Phase 3 / 4 / 5 PRODUCTION precedent (scripted vs manual split): sub-chat A = 7 BlenderMCP captures (#36 / #37 / #38 / #40 / #41 / #42 / #43) + 5 Pillow composites with A1 / A2 fallback split on the section + geometry boundary (A1 = #36 + #37 + #38 subdivide trio with plane geometry; A2 = #40 + #41 + #42 + #43 bevel quartet with cube geometry); sub-chat B = 1 manual Win+Shift+S capture (#39 Ctrl+B bevel modal active state, smallest manual sub-chat in Lesson 06 to date vs Phase 4 sub-chat B at 2 manual + Phase 5 sub-chat B at 3 manual + 2 composite runs). Sub-chat A is the largest scripted PRODUCTION sub-chat in Lesson 06 to date; A1 / A2 fallback likelihood correspondingly higher. 4 key spec deviations from Phase 5 default config locked (TOP ortho via `view3d.view_axis(type='TOP')` for #36, WIREFRAME OVERLAY ON for #36 / #38, MATCAP viewport shading for #42, full-window `bpy.ops.screen.screenshot` with Properties editor in MODIFIER context for #43 reusing the verified #28 recipe). 4 op-name verification points logged for sub-chat A execution to log working values in the sub-chat A close Status bullet (subdivide `fractal` / `fractal_along_normal` / `seed` signature, bevel `offset` / `segments` / `affect` signature, Bevel Modifier attribute names `width` / `segments` / `angle_limit` / `limit_method` / `use_clamp_overlap`, MATCAP `studio_light` enum). 5 new `L06_*` object names introduced (`L06_SubdivPlane` / `L06_SmoothEdge` / `L06_FractalPlane` / `L06_BevelCube` / `L06_BevelModCube`); Step 0 fresh scene reset clears the 5 Phase 5 `L06_*` leftovers (`L06_ArrayCylinder` / `L06_SpinProfile` / `L06_ScrewCircle` / `L06_KnifeProjectPlane` / `L06_KnifeProjectCircle`) plus defensive `L06_*` sweep. ID prefix registry update minimal (`c43` already reserved from initial planning; multi-label overlay specs and pixel coords deferred to Phase 6 INTEGRATION plan-lock per the c2 / c3 / c25 / c28 / c30 multi-label precedent; no SVG ids added since Phase 6 has no SVGs per Option L). Phase 6 closes ALL of Lesson 06 PRODUCTION work at sub-chat B close (50 of 50 produced); only Phase 6 INTEGRATION remains for full Lesson 06 image-work closeout. Read the 2026-05-25 Phase 6 PRODUCTION plan-lock Status bullet of `lesson_06_integration_progress.md` for full detail rather than restating here.

**Counts:** 42 of 50 produced; 42 of 50 integrated (unchanged from Phase 5 INTEGRATION close since plan-lock is plan-lock only). Cumulative Lesson 06 PNG overlay tally unchanged at 15 integrated + 1 planned (`c43`); plan-locked PNG overlay registry total remains 13 entries.

---

## Next chat: Phase 6 PRODUCTION sub-chat A

Read this `session.md`, then the 2026-05-25 Phase 6 PRODUCTION plan-lock Status bullet in the Status section of `lesson_06_integration_progress.md`, then the new `Phase 6 PRODUCTION plan` section of the progress doc (per-image scene + capture specs, op-name verification points, sub-chat A / B split + A1 / A2 fallback boundary, 5 new `L06_*` object names, Step 0 fresh scene reset spec). The locked specs in the `Phase 6 PRODUCTION plan` section are authoritative; do not re-derive from `lesson_06_image_requirements.md`. See the bottom-of-doc Next chat section of the progress doc for full Phase 6 PRODUCTION sub-chat A execution scope, the A1 / A2 fallback split point, and alternative next steps.

---

## Locked rules carrying forward

Full list in the `Locked rules` section of `lesson_06_integration_progress.md`. Phase 6 PRODUCTION sub-chat A specific:

- WSL `\\wsl$\Ubuntu\` paths only
- `Filesystem:edit_file` with `dryRun=true` then commit with `dryRun=false` then `Filesystem:get_file_info` verify per edit
- `Filesystem:write_file` for new files and small full-doc overwrites; NEVER Claude's built-in `create_file`
- NO new em-dashes in any new prose; middle-dot (`·`) for separation; date-prefix em-dash in Status bullets grandfathered
- NO `bpy.ops.wm.read_factory_settings(use_empty=False)` calls anywhere (kills BlenderMCP addon mid-execution); manual scene cleanup only
- Render engine fallback: try `BLENDER_EEVEE_NEXT` first, fall back to `BLENDER_EEVEE` on enum error
- Pillow 12.2.0 confirmed available in Blender 5.1's Python; survives restarts
- Phase 5 PRODUCTION sub-chat A discoveries (4) and sub-chat B discoveries (6) apply to any future BlenderMCP / modal-capture / popover-capture / cross-sub-chat composite / Screw Modifier / subdivide / knife_project / show_wire work; see the 2026-05-24 sub-chat A and 2026-05-25 sub-chat B Status bullets of the progress doc for the discovery details
- Phase 5 INTEGRATION sub-chat 1 precedent: 8-row placement-table flip with 29-char column-padding for any future multi-row table flip; c28 / c30 multi-callout overlay markup pattern (per-overlay aria-labelledby title+desc pair, per-callout ellipse ids, structural author comments before each callout group) carries forward to any future multi-callout overlay (likely c43 in Phase 6 INTEGRATION)
- Phase 6 PRODUCTION plan-lock specific (this chat): 4 key spec deviations from Phase 5 default config locked (TOP ortho via `view3d.view_axis(type='TOP')` for #36, WIREFRAME OVERLAY ON for #36 / #38, MATCAP shading for #42, full-window screenshot with Properties editor in MODIFIER context for #43); 4 op-name verification points to log in sub-chat A close Status bullet
