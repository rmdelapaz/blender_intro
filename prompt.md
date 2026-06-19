L18 Blender course — resume P9 (hero render #28). P8 DONE (28/29 figures).
Root: \\wsl$\Ubuntu\home\practicalace\projects\blender_course (always \\wsl$, never \\wsl.localhost)
Tools: bridge = blender:execute_blender_code (open() for all \\wsl$ reads/writes/byte-counts; Claude-side bash can't reach UNC). Filesystem:copy_file_user_to_claude to pull PNGs Claude-side. cairosvg Claude-side (pip install cairosvg --break-system-packages). Bridge-side Pillow straight to images\ deliverable. Write overlay SVGs to /home/claude (uploads read-only).

Read first via bridge open(): lesson_18_integration_progress.md — §8 top entry (P8 COMPLETE), §5 rules, §6 #28 spec + P5/P7 harness notes. session.md top banner. Everything below is delta only; specs/locked rules/discoveries live in those docs.

On-disk state (verify via bridge UTF-8 count — authoritative): HTML lesson_18_eevee_realtime_rendering.html = 290,644 B; figure/figcaption 28/28, svg 28, img 19, em-dash 6, mdash/8212 0, color222 0, mermaid 1, 12 sections no dups.

Pre-flight (bridge): 1) print(bpy.app.version_string) — if hung, ask me to restart BlenderMCP. 2) len(win.screen.areas)==4; screen_full_area() to restore if ==1. 3) Scene CLEAN baseline: Cube/Light(POINT,1000)/Camera only, no mats/probes/nodegroups/compositor, AgX/look None, use_raytracing False, ray/step 1/6, taa 64, world 1.0, res 1920x1080.

P9 — #28 project_reference_render — `project` section, "Project Overview" card, c28 (optional). Single hero render: 3-point lit Eevee showcase, LD17 Standard/None during render, AgX restore at close. Proven harness: render.render(write_still) to Windows tempdir → Pillow → images\ deliverable → (optional c28 overlay viewBox=PNG px → cairosvg 1:1) → integrate inline-attr house form (figure col 20, figcaption OUTSIDE col 20, no c{N} container ids, overlay element ids c28-* namespaced, numeric entities only, zero em-dash) → bridge open() read, assert anchor count==1, replace, write, re-count invariants. Pre-write assert no \u2014 / &#8212; / &mdash; in any new block.

Per-figure close: tear down rig → restore pristine baseline → purge Windows temp + any _l18_* relays in images\. Docs-first close-out: update §8 + session.md banner BEFORE handoff.

After #28: P10 figure-complete (re-verify all 29 integrated, em-dash 6, mermaid 1, byte-trail), then browser-QA LAST (mermaid 1/1). Body-defect pass (legacy Bloom/SSR/AO/Shadow Cube/Cascade prose) still DEFERRED, separate from figure work.
