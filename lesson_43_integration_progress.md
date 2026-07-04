# Lesson 43 — Compositor Basics — Integration Progress

**Module 10, lesson 3.** Live HTML: `lesson_43_compositor_basics.html`
Project root: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`

---

## Current state

**INTEGRATION COMPLETE — 14/14 figures live (2026-07-03).** Live HTML rebuilt from Phase-0 141,730 B + 9 transformed inline SVG (root `color="#222"` stripped; font-family already present on all 9, none needed injection) + 5 PNG `<figure>` blocks, bottom-up insert at the §Roster triage anchors. **OVERLAY-BAR DECISION: NO overlay bars** (unlike L41/L42): all 5 L43 PNGs already carry baked-in #FF6B00 dividers and are self-contained comparison/contact sheets, figcaptions carry the labels, so inline `<svg>` stays exactly 9 (no overlay SVGs). Live HTML now **208,504 B / md5 c8710f9fac436e21567b14da135b584e**, LF-only. get_file_info==208,504; fresh Filesystem re-read re-asserted ALL invariants (md5 match + full count set) — all pass. **BROWSER QA PASSED (2026-07-03), no live edit needed** — real Chromium (Playwright chromium-1194) over local http, desktop 1440x900 + mobile 390x844; 14/14 figures render (9 in-figure inline `<svg>` + 5 `<img>` served 200/decode non-zero), 6 mermaid → 6 `<svg>` (local mermaid@10.9.6 ESM), 0 pageerrors, only the 3 expected site-scaffold 404s, h-overflow 0 both widths. **L43 FULLY CLOSED end-to-end. NEXT = L44 (own fresh chat, Phase 0).**

---

## Status

- [x] **Phase 0** — HTML modernization + content fix — COMPLETE (2026-07-03)
- [x] **Roster triage** (figure inventory + SVG/PNG split) — COMPLETE (2026-07-03)
- [x] **SVG batch production** (9 inline SVG) — COMPLETE **9/9** (pilot #01 + batch-1 {02,03,04} + batch-2 {05,06,07} + batch-3 {08 dof, 09 atm}) (2026-07-03)
- [x] **PNG production** (5 PNG) — COMPLETE **5/5** ({10,11,12,13,14} all done + verified) (2026-07-03)
- [x] **Integration** — 14/14 figures live (9 inline SVG + 5 PNG, NO overlay bars) — COMPLETE (2026-07-03)
- [x] **Browser QA** — PASS (real Chromium desktop+mobile, no live edit) (2026-07-03)

---

## Phase-0 baseline (post-modernization invariants — HARD-ASSERTED via Python on Claude-side copy)

| Invariant | Value |
|---|---|
| bytes | **141,730** |
| CRLF | 0 (LF-only) |
| section ids | 9 — `introduction, compositor-interface, render-passes, basic-nodes, color-correction, effects, project-color-grade, project-glows, summary` |
| `<section>` open / close | 9 / 9 |
| TOC targets / dead anchors | 9 / 0 (all resolve) |
| mermaid | 6 (3 original + 3 authored) |
| jsdelivr import | 1 |
| `<table>` / table-wrap | **2 / 2** (both wrapped) |
| `#2a2a2a` | 9 |
| `fill:#3a3a3a` | **2** |
| figures / img / svg | 0 / 0 / 0 (TRUE-PRISTINE) |
| back lesson_42 / next lesson_44 | 1 / 1 |
| U+2014 | 27 |
| U+2192 literal | 128 |
| U+2013 / U+00B7 / #667eea / #764ba2 / linear-gradient | 0 / 0 / 0 / 0 / 0 |

**Locked baselines for all later phases:** U+2014 = 27 HOLD; U+2192 literal = 128 HOLD; new prose uses entities `&#8212;` / `&#8594;` / `&#8211;`, never literals.

### Note on prior-handoff invariant typos (resolved, no file defect)

The kickoff spec listed two expected counts that were internally inconsistent with its own instructions; the FILE is correct, the spec summary was mistyped:

- **tables/table-wrap:** spec instruction = "wrap the **2** bare tables"; spec expected-line said "3 / 3." Lesson has exactly **2** tables, both wrapped → **2 / 2** is correct. The "3" was an arithmetic typo.
- **fill:#3a3a3a:** spec instruction = "**2×** #667eea→#3a3a3a"; spec expected-line said "3." Exactly **2** original mermaid nodes carried #667eea, both converted → **2** is correct. The 4 authored mermaids use `#999`/`#2196F3`/`#4CAF50` accents (no dark node). The "3" was an arithmetic typo.
- **bytes:** spec estimated ≈141,333; actual 141,730 (≈400 B hand-authored-prose drift, expected).

All other invariants matched spec exactly.

---

## Phase-0 log (2026-07-03)

**Context:** A prior chat built + verified Phase 0 Claude-side, and the disk write **DID** complete (contrary to that chat's handoff, which assumed the write failed and the live file was still the 122,644 B original). This chat opened, found the file already at 141,730 B with all Phase-0 edits present, hard-asserted every invariant via Python on a Claude-side copy (all pass, modulo the two spec typos above), and wrote this progress doc + updated session.md. **Phase 0 was NOT redone** — the correct file was left intact to avoid regression risk.

**Phase-0 transforms applied (all present + verified on disk):**

1. **Purple neutralized.** 6 gradient cards `linear-gradient(135deg,#667eea,#764ba2); color:white` → `#2a2a2a; color:white`; mermaid init `primaryBorderColor '#667eea'` → `'#888888'`; 2× mermaid node `fill:#667eea` → `fill:#3a3a3a` (kept #4CAF50/#2196F3/#999 accents). Result: #667eea / #764ba2 / linear-gradient all 0.
2. **Tables wrapped.** Both bare `<table>` → `<div class="table-wrap" style="overflow-x:auto;"><table style="min-width:max-content;">…</table></div>`.
3. **Content fix (approved).** Body was missing 3 TOC-promised sections and `#summary` was nested inside `#color-correction`. Authored 3 new sections in house card/callout/mermaid style — `#effects` (Filters and Effects: glare/bloom, DOF/blur, mist atmosphere, lens/vignette/grain), `#project-color-grade` (Project 1: cinematic grade walkthrough), `#project-glows` (Project 2: glows + atmosphere) — inserted after color-correction's close; promoted `#summary` to top level; fixed the old double `</section>` tail to single. Result: 9 sections, TOC 9/9 resolve, mermaid 6, sections open==close==9.

---

## Roster triage (LOCKED 2026-07-03)

**Method.** Inventoried every figure the L43 prose implies against the 9 live sections. This lesson is overwhelmingly **conceptual / UI / node-graph / reference** — compositing teaches node trees, socket data-types, interface panels, pass breakdowns, and blend-mode logic. Almost everything the content needs is a **diagram or schematic (SVG)**. PNG is reserved only for the handful of cases where the *rendered pixels themselves* are the teaching point (a visible before/after the reader must actually see). The 6 mermaid pipeline flowcharts already cover the highest-level flows and **stay as mermaid — they are NOT figures.**

**RESULT: BUILD 14 figures = 9 inline SVG + 5 PNG.** (No DEFER list needed — the lesson's figure surface is small; every candidate that teaches is built, and mermaid absorbs the rest.)

### Why the split falls where it does

- **SVG** = anything whose content is nodes, sockets, wires, UI chrome, tables/reference charts, decision logic, or labeled diagrams. Theme-independent, crisp at any zoom, currentColor-invertible. This is the bulk of the lesson.
- **PNG** = only true rendered-image demonstrations where a diagram cannot substitute: the color-grade before/after, the glare/bloom before/after, the Z-based DOF before/after, a render-pass visual contact-sheet (what Diffuse/AO/Z/Normal actually *look like*), and the teal-and-orange grade result. These require real Cycles pixels.

### INLINE SVG — 9 (id-prefix registry)

| # | id-prefix | slug | section anchor (live h3/h4) | what it shows |
|---|---|---|---|---|
| 01 | `cif-` | compositor_interface_map | compositor-interface — "The Compositor Layout" | Annotated Compositor editor: Node area + Backdrop + Header bar + N-panel, callout labels |
| 02 | `skt-` | socket_types_datatypes | compositor-interface — "Understanding Sockets and Connections" | Yellow (RGBA) / Gray (Value) / Blue (Vector) socket legend + connection-rule matrix (gray→yellow, yellow→gray, etc.) |
| 03 | `rpf-` | render_pass_flow | render-passes — "What Are Render Passes?" | Single render splitting into labeled pass sockets (Diffuse/Glossy/Transmission/Emission/Z/AO/Normal) recombining in comp (schematic, complements the mermaid) |
| 04 | `pms-` | passes_menu_schematic | render-passes — "Enabling Render Passes" | View Layer Properties → Passes panel mock: Data group (Z, Mist, Normal, AO, Index) + Light group (Diffuse/Glossy/Transmission Direct+Indirect, Emission, Environment, Shadow) checkbox tree |
| 05 | `ndx-` | node_catalog_map | basic-nodes — section intro / "Node Usage Patterns" | Categorized node reference: Color (RGB Curves, HSV, Bright/Contrast, Color Balance, Gamma, Exposure) / Filter (Blur, Glare, Sharpen, Denoise, Dilate-Erode) / Mix (Mix, Alpha Over, Z Combine) / Converter (ColorRamp, RGB→BW, Set Alpha, Separate-Combine, Math) / Matte (ID Mask, Cryptomatte) |
| 06 | `blm-` | blend_mode_logic | basic-nodes — "Mix and Combine Nodes" | Blend-mode decision chart: Add (light passes, brightens) / Multiply (AO+shadow, darkens) / Screen (glows) / Overlay (contrast) / Mix (blend) — B/W swatch demos + "which pass uses which" |
| 07 | `ccs-` | color_correction_stack | color-correction — "Professional Color Correction Workflow" | Vertical node stack schematic: Render Layers → RGB Curves (exposure+contrast) → HSV (saturation) → Color Balance (grade) → Composite, with the fix-first/enhance-second order called out |
| 08 | `dof-` | dof_z_wiring | effects — "Depth of Field and Blur" | Node wiring: Render Layers Image → Blur (Variable Size); Z pass → Blur size input; focal-distance callout (schematic of post-DOF) |
| 09 | `atm-` | atmosphere_mist_wiring | effects — "Atmosphere: Mist and Fog" | Node wiring: Mist pass → ColorRamp (falloff) → Mix factor; fog color → Mix img2; render → Mix img1 → Composite |

**Anchors are approximate first-match h3/h4 targets; exact insertion points finalized at integration (bottom-up insert).**

### PNG — 5

| # | slug | section anchor | what it shows | render notes |
|---|---|---|---|---|
| 10 | `render_pass_contact_sheet` | render-passes — "Practical Render Pass Setup" workshop | Contact sheet: same scene shown as Combined / Diffuse / Glossy(reflections) / AO / Z(depth grayscale) / Normal(RGB) — what each pass actually looks like | Cycles, one lit scene w/ a reflective + an occluded-crevice object; enable passes, save each; Pillow grid on #2b2b2b, #FF6B00 dividers, NO baked labels |
| 11 | `color_grade_before_after` | color-correction — "Complete Color Grading Project" workshop | 2-panel A/B: flat raw render vs full grade (exposure+contrast+WB+sat) | Cycles beauty; same frame rendered twice, grade applied in comp or Pillow; #FF6B00 divider |
| 12 | `teal_orange_grade_result` | project-color-grade — grade result / mermaid | Final cinematic teal-and-orange graded frame (the Project 1 payoff) | Cycles; cool-shadow / warm-highlight split visible; single beauty |
| 13 | `glare_bloom_before_after` | effects — "Glare: Glow and Bloom" / project-glows Step 1 | 2-panel A/B: bright/emissive scene without vs with Fog Glow bloom | Cycles w/ emissive elements; render clean, add Glare in comp; #FF6B00 divider |
| 14 | `dof_before_after` | effects — "Depth of Field and Blur" | 2-panel A/B: everything-sharp vs Z-based DOF (subject sharp, background falls off) | Cycles + Z pass; post-blur via Z; #FF6B00 divider |

**PNG carry-forward (from L42):** Cycles for beauty renders; Windows tempdir → Pillow relay → WSL `images/` (direct UNC write truncates); 256-color FASTOCTREE+FS quantize to keep heavy renders <500 KB; every file md5 round-trip + `get_file_info` == byte-count; NO baked text labels (any figure captions/overlays deferred to integration); TRUE-PRISTINE teardown + assert after each batch.

### Figure-count accounting

- Live sections: 9. Mermaid diagrams: 6 (stay mermaid, NOT counted as figures).
- Figures to build: **14** → 9 `<figure>` w/ inline `<svg>` + 5 `<figure>` w/ `<img>`.
- Post-integration target invariants (to hard-assert at integration): `<figure>` 14 / `<figcaption>` 14 / `<img>` 5 / inline `<svg>` 9 (+ any PNG overlay SVGs if overlays are added at integration — decide then, L41/L42 used overlay bars; **overlay decision deferred to integration**). U+2014 27 HOLD, U+2192 literal 128 HOLD.

---

## SVG plan-lock

- **Role-hex palette (LOCKED, carry-forward L41/L42):** `#FF6B00` brand/tie-break · `#4ADE80` keep-positive/YES · `#E63946` warning/NO · `#4A9EFF` field/Z/info · `#B47EE8` practice (v8 DEF substitute, NEVER `#667eea`) · `#F5C242` caution.
- **id-prefix registry (9):** 01 `cif-` / 02 `skt-` / 03 `rpf-` / 04 `pms-` / 05 `ndx-` / 06 `blm-` / 07 `ccs-` / 08 `dof-` / 09 `atm-`.
- **Structural reqs (every standalone .svg):** `role="img"` + `aria-labelledby` → `<title>`+`<desc>`; root `color="#222"` (KEEP on standalone, STRIP at integration); body strokes/text `currentColor`; role hexes only for semantic roles + `#FF6B00` brand. Banned literals: U+2014, U+2013, U+00B7 literal, `#667eea`, `#764ba2`, `linear-gradient` + entity variants (ranges as ASCII hyphen; middot as `&#183;` where an em-dash substitute is needed).
- **Build loop:** author Claude-side → banned-literal check → cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify (currentColor inverts, role hexes legible both themes) → hex-write via bridge (`bytes.fromhex`, NEVER base64; split long hex into concatenated halves to dodge repeated-token corruption) → md5 + `get_file_info` verify → log. **Pilot #01 `cif-` → then batches of 3.**

---

## SVG build log

- **PILOT #01 `cif-`** `images/lesson_43_01_compositor_interface_map.svg` DONE 2026-07-03. viewBox 0 0 800 600, **7,266 B**, md5 **f02e19849cb15b9d508d228cd2d3ce8f**. Annotated Compositing-workspace map, 4 numbered regions: (1) Header bar #FF6B00 badge — Compositor tab + Use Nodes/Backdrop toggles + Add menu; (2) Backdrop #4A9EFF dashed panel with faux composited-image hint; (3) Node editor #4ADE80 badge — Render Layers (green header) → RGB Curves (purple #B47EE8) → Composite (orange #FF6B00), amber #F5C242 sockets + #FF6B00 wires; (4) N-panel #F5C242 sidebar mock (Item/Tool/View tabs, selected-node settings). Legend maps all 4 regions. Structural: role="img" + aria-labelledby(cif-title/cif-desc) + title/desc, root color="#222" KEPT (strip at integration), currentColor 22, role hexes #FF6B00 6 / #4ADE80 4 / #4A9EFF 7 / #B47EE8 3 / #F5C242 8 / #E63946 0, ids all `cif-` prefixed. Banned-literal check CLEAN (5× allowed `&#183;` middot substitute). cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) rendered L-extrema (26,255) both; EYE-CONFIRMED both themes (currentColor inverts, node chrome + orange wires + role-hex badges legible on both backgrounds; minor: backdrop image-hint slightly overlaps node-area label, cosmetic only). Transfer: split-hex concat (2×7266 nibble halves) via bytes.fromhex, LF-normalized — disk md5 == payload, CRLF 0, get_file_info == 7,266. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). NEXT = batch-1 {02 skt, 03 rpf, 04 pms}.

- **BATCH-1 #02 `skt-`** `images/lesson_43_02_socket_types_datatypes.svg` DONE 2026-07-03. viewBox 0 0 800 600, **6,124 B**, md5 **dc3b098dbf3f7c4bbea98ce7b7b8ed8c**. Sockets & Data Types: 3 legend cards (Yellow/Color=RGBA #F5C242 swatch, Gray/Value #AAAAAA neutral swatch, Blue/Vector #4A9EFF swatch) + 3x3 connection-rule matrix (From Color/Value/Vector to Color/Value/Vector; diagonal `direct` in #4ADE80, off-diagonal auto-convert notes) on a #2a2a2a header chip + #F5C242 caution note ("match types on purpose"). Structural: role="img" + aria-labelledby(skt-title/skt-desc) + title/desc, root color="#222" KEPT, currentColor 34, role hexes #4ADE80 3 / #4A9EFF 2 / #F5C242 4 (neutrals #AAAAAA/#2a2a2a for value-socket + matrix chrome, NOT role hexes). Banned-literal check CLEAN (4x `&#8212;` em entity, 3x `&#8594;` arrow entity, allowed). cairosvg dark L-extrema (28,212) / light (28,255); EYE-CONFIRMED both themes (legend + matrix + caution legible, currentColor inverts, matrix header chip stays dark-with-light-text both themes as intended UI chrome). Transfer via `write_file` (text/LF path per locked rules, byte-exact for SVG; bridge-hex reserved for binary/PNG). CRLF 0; get_file_info == 6,124; disk md5 == authored.

- **BATCH-1 #03 `rpf-`** `images/lesson_43_03_render_pass_flow.svg` DONE 2026-07-03. viewBox 0 0 800 600, **6,060 B**, md5 **b8742d9e7c1ec6af9f00da290c5aeeb2**. What Are Render Passes?: Single Render card (#2a2a2a, #FF6B00 border) to #FF6B00 fan-out wires to 7 color-coded pass rows (Diffuse #F5C242, Glossy/Transmission/Normal #4A9EFF, Emission #FF6B00, AO/Z-Depth #AAAAAA-value) to #4ADE80 recombine wires to Composite card (#4ADE80 border) + #4ADE80 "Why bother?" footer. Complements the section mermaid. Structural: role="img" + aria-labelledby(rpf-title/rpf-desc) + title/desc, root color="#222" KEPT, currentColor 19, role hexes #FF6B00 4 / #4ADE80 4 / #4A9EFF 6 / #F5C242 2 (render/composite thumbnails use fixed node-chrome greys #2a2a2a/#3a3a3a/#555, NOT role hexes). Banned-literal check CLEAN (1x `&#8212;` em entity). cairosvg dark L-extrema (30,213) / light (42,255); EYE-CONFIRMED both themes (fan-out/recombine wires, 7 pass rows, thumbnails legible; node-chrome greys stay constant both themes as intended). Transfer via `write_file` (text/LF). CRLF 0; get_file_info == 6,060; disk md5 == authored.

- **BATCH-1 #04 `pms-`** `images/lesson_43_04_passes_menu_schematic.svg` DONE 2026-07-03. viewBox 0 0 800 600, **7,370 B**, md5 **12dad78255f0384362671f33849e870c**. Enabling Render Passes: full View Layer Properties to Passes panel mock as a fixed #2a2a2a UI surface (#333 header w/ #FF6B00 dot). DATA group (Combined/Z/Mist/AO green-ticked #4ADE80; Normal/Position/Vector/Material Index/Object Index/Cryptomatte empty #888 outline) + LIGHT group (Diffuse & Glossy Direct/Indirect ticked, Color/Transmission empty; Emission ticked; Environment/Shadow/AO empty; #F5C242 sub-headers) + #4ADE80 "enable only what you need" tip footer. #4A9EFF micro-labels ("for DOF / fog", "atmosphere"). Structural: role="img" + aria-labelledby(pms-title/pms-desc) + title/desc, root color="#222" KEPT, currentColor 8 (low by design, panel interior is a fixed-dark UI surface w/ #d4d4d4 labels, correct on BOTH themes like the pilot N-panel), role hexes #FF6B00 1 / #4ADE80 11 / #4A9EFF 2 / #F5C242 3. Banned-literal check CLEAN (2x `&#8594;` arrow entity). cairosvg dark L-extrema (26,212) / light (26,255); EYE-CONFIRMED both themes (Data/Light groups, green ticks, tip footer legible; fixed-dark panel reads correctly on light bg as intended UI chrome). Transfer via `write_file` (text/LF). NOTE: on-disk 7,370 B vs an early scratch-count of 7,490, the 120-B delta is two authoring-comment lines I removed before the final write; write_file is byte-faithful, disk content is the intended final. CRLF 0; get_file_info == 7,370; disk md5 == authored.

**Batch-1 close:** 3/3 committed + verified on disk (bytes match get_file_info, CRLF 0, banned CLEAN, root color="#222" present, aria+title+desc present, role-hex-only). LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed post-batch). SVG now **4/9**. NEXT = batch-2 {05 ndx node_catalog_map, 06 blm blend_mode_logic, 07 ccs color_correction_stack}.

- **BATCH-2 #05 `ndx-`** `images/lesson_43_05_node_catalog_map.svg` DONE 2026-07-03. viewBox 0 0 900 620 (wider, densest SVG in set), **7,643 B**, md5 **81b13c4131f3809d142d7994704621b8**. Compositor Node Catalog: 5 category columns each with a solid role-hex header + currentColor-outlined node chips — Color (#FF6B00: RGB Curves, Hue/Sat, Bright/Contrast, Color Balance, Gamma, Exposure) / Filter (#4A9EFF: Blur, Glare, Denoise, Filter-sharpen, Dilate-Erode) / Mix (#4ADE80: Mix, Alpha Over, Z Combine) / Converter (#F5C242: ColorRamp, RGB-to-BW, Set Alpha, Separate-Combine, Math) / Matte (#B47EE8: ID Mask, Cryptomatte) + #2a2a2a "typical usage patterns" strip with 5 role-dot bullets. Structural: role="img" + aria-labelledby(ndx-title/ndx-desc) + title/desc, root color="#222" KEPT, currentColor 29, all 5 role hexes present (#FF6B00 3 / #4ADE80 3 / #4A9EFF 3 / #B47EE8 3 / #F5C242 3; header labels + chip headers use #1a1a1a on the solid hex, usage strip is #d4d4d4 on #2a2a2a). Banned-literal check CLEAN (no dash/arrow/middot entities needed). VERIFY: view tool returned empty payloads all session (known glitch, persistent) → substituted programmatic check: cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155), all 5 expected role hexes detected present in BOTH themes, lum std dark 39.8 / light 94.8, currentColor title-band ink inverts (dark 198 bright / light 74 dark, ~1800 ink px). CRLF 0; get_file_info == 7,643; disk md5 == authored.

- **BATCH-2 #06 `blm-`** `images/lesson_43_06_blend_mode_logic.svg` DONE 2026-07-03. viewBox 0 0 800 600, **5,920 B**, md5 **cba797897b3c2eed2cdbb644de2c170b**. Blend Modes: Which to Use — 5 mode rows (Add #4ADE80 brightens / Multiply #E63946 darkens / Screen #4A9EFF soft-lift / Overlay #F5C242 contrast / Mix currentColor crossfade), each with a 3-square grayscale swatch demoing the result + "what it does" + "reach for it when" columns + #4ADE80 rule-of-thumb footer. First L43 SVG to use #E63946 (warning role = Multiply/darkens). Structural: role="img" + aria-labelledby(blm-title/blm-desc) + title/desc, root color="#222" KEPT, currentColor 27, role hexes #4ADE80 4 / #E63946 2 / #4A9EFF 2 / #F5C242 2 (swatch greys #4a4a4a..#e0e0e0 are demo pixels, NOT role hexes). Banned-literal check CLEAN (3x `&#8212;` em entity). VERIFY (programmatic, view glitched): all 4 expected role hexes present both themes, lum std dark 39.2 / light 39.4, ink inverts (dark 200 / light 74). CRLF 0; get_file_info == 5,920; disk md5 == authored.

- **BATCH-2 #07 `ccs-`** `images/lesson_43_07_color_correction_stack.svg` DONE 2026-07-03. viewBox 0 0 800 620, **6,406 B**, md5 **e9ac7d6d9c608b710512fec274ca1b4c**. Color Correction Stack: vertical 5-node chain w/ header-stripe nodes + #FF6B00 wires+arrowheads — Render Layers (#4ADE80 INPUT) → RGB Curves (#FF6B00 FIX 1) → Hue/Sat/Value (#FF6B00 FIX 2) → Color Balance (#B47EE8 GRADE) → Composite (#4ADE80 OUTPUT), #F5C242 sockets, right-side dashed annotations per stage, #F5C242 "why the order matters" callout (fix-first/grade-second). Structural: role="img" + aria-labelledby(ccs-title/ccs-desc) + title/desc, root color="#222" KEPT, currentColor 19, role hexes #FF6B00 16 (node headers+wires+arrowheads+annotation labels) / #4ADE80 6 / #B47EE8 4 / #F5C242 10; node body #2a2a2a + #1a1a1a header text (fixed node chrome). Banned-literal check CLEAN (1x `&#38;` ampersand entity, allowed). VERIFY (programmatic, view glitched): all 4 expected role hexes present both themes, lum std dark 37.4 / light 63.4, ink inverts (dark 199 / light 74). CRLF 0; get_file_info == 6,406; disk md5 == authored.

**Batch-2 close:** 3/3 committed + verified on disk (bytes==authored + get_file_info, CRLF 0, banned CLEAN, root color="#222" present, aria+title+desc, role-hex-only; all expected role hexes present in both cairosvg themes + currentColor inversion confirmed programmatically since the view tool returned empty payloads all session). LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed post-batch). SVG now **7/9**. NEXT = batch-3 {08 dof dof_z_wiring, 09 atm atmosphere_mist_wiring} — the final SVG batch, then 5 PNG.

- **BATCH-3 #08 `dof-`** `images/lesson_43_08_dof_z_wiring.svg` DONE 2026-07-03. viewBox 0 0 800 600, **5,813 B**, md5 **2a1ca9e64ba702552e1333125b9910b4**. Depth of Field: Z Pass Drives a Variable Blur — node graph: Render Layers (#4ADE80, Image/Z/Alpha sockets) → Image feeds Blur (#4A9EFF, "Variable Size") Image input via #F5C242 wire; Z pass feeds Blur Size input via #4A9EFF wire carrying a #4A9EFF "depth &#8594; blur size" badge; Blur out → Composite (#FF6B00) via #FF6B00 wire. #F5C242 focal-distance callout (Z stores per-pixel camera distance; remap subject to zero blur) w/ sharp&#8594;far mini depth ramp (#4ADE80/#4A9EFF); #4ADE80 tip footer (enable Z pass first, use Variable Size not fixed radius). Structural: role="img" + aria-labelledby(dof-title/dof-desc) + title/desc, root color="#222" KEPT, currentColor 19, role hexes #FF6B00 / #4ADE80 / #4A9EFF / #F5C242 all present (#888888 neutrals for alpha/unused sockets + node body #2a2a2a/#1a1a1a header ink = fixed node chrome, NOT role hexes). Banned-literal check CLEAN (1x `&#8212;` em, 2x `&#8594;` arrow, 1x `&#183;` middot — all allowed entities). VERIFY: **view tool RECOVERED this session** — real EYE-CONFIRM both themes (node graph legible, Image/Z wires trace correctly to Blur, Z&#8594;Size badge clear, callout + ramp + tip legible, currentColor inverts light-on-dark / dark-on-light). Backing programmatic proxy also passed (lum std dark 34.6 / light 94.3, title-band ink inverts dark 194 / light 82). Transfer via `write_file` (text/LF). CRLF 0; get_file_info == 5,813; disk md5 == authored.

- **BATCH-3 #09 `atm-`** `images/lesson_43_09_atmosphere_mist_wiring.svg` DONE 2026-07-03. viewBox 0 0 800 600, **7,567 B**, md5 **da72653d74e17d7d2b3542430602d297**. Atmosphere: Mist Pass Blends Fog by Depth — node graph: Render Layers (#4ADE80, Image/Mist/Z sockets); Mist → ColorRamp (#B47EE8, Fac in / falloff swatch) via #B47EE8 wire carrying a #B47EE8 "depth &#8594; fog factor" badge; ColorRamp out → Mix (#FF6B00) Fac via #888888 wire; Render Image → Mix Image 1 (#F5C242 wire); Fog Color node (#F5C242, cool haze swatch) → Mix Image 2 (#F5C242 wire); Mix → Composite (#FF6B00). #4A9EFF explainer callout (Mist = 0&#8211;1 depth mask, near black / far white; ColorRamp bends the gradient) w/ clear&#8594;foggy mini ramp; #F5C242 "set the Mist range" tip. Structural: role="img" + aria-labelledby(atm-title/atm-desc) + title/desc, root color="#222" KEPT, currentColor 21, role hexes #FF6B00 / #4ADE80 / #4A9EFF / #B47EE8 / #F5C242 all present (#888888 value-socket/Fac wire neutral + #c9d4de fog swatch demo pixel + node chrome #2a2a2a/#1a1a1a = fixed chrome/demo, NOT role hexes). Banned-literal check CLEAN (1x `&#8212;` em, 1x `&#8594;` arrow, 1x `&#8211;` en, 1x `&amp;` — all allowed entities). VERIFY: view RECOVERED — real EYE-CONFIRM both themes (5-node graph legible, all wires trace: Mist&#8594;Ramp&#8594;Mix-Fac + render/fog into Mix, badge clear, callout + ramps + tip legible, currentColor inverts). Cosmetic note: the render-Image#8594;Mix-Image1 yellow wire routes near the ColorRamp node but doesn't collide with a socket, reads as an over-route (acceptable). Backing proxy passed (lum std dark 40.3 / light 95.9, title-band ink inverts dark 194 / light 83). Transfer via `write_file` (text/LF). CRLF 0; get_file_info == 7,567; disk md5 == authored.

**Batch-3 close (FINAL SVG BATCH):** 2/2 committed + verified on disk (bytes==authored + get_file_info, CRLF 0, banned CLEAN, root color="#222" present, aria+title+desc, role-hex-only; view tool recovered this session so both got real eye-confirm on dark+light, backed by the programmatic proxy). LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed post-batch). **SVG now 9/9 — ALL INLINE SVG COMPLETE.** NEXT = 5 PNG {10 render_pass_contact_sheet, 11 color_grade_before_after, 12 teal_orange_grade_result, 13 glare_bloom_before_after, 14 dof_before_after} → integration → browser QA.

**VIEW-TOOL NOTE (carry-forward):** the `view` image tool returned empty payloads for every PNG/JPEG in the batch-2 chat (documented recurring glitch), but **RECOVERED in the batch-3 chat** — batch-3 used real eye-confirm. The glitch is intermittent across sessions; in the PNG chats, try real `view` first and fall back to the programmatic proxy only if payloads come back empty — cairosvg/asset render, then assert (a) every expected role hex present both themes, (b) luminance std healthy, (c) currentColor inverts at the title band.

---

## PNG build log

**Pipeline (L42 carry-forward, adapted for Blender 5.1):** Cycles beauty renders; 5.1 compositor API changed (`sc.node_tree` gone → `sc.compositing_node_group`; File Output node lost `base_path`/`file_slots`) — so passes are extracted via a **Viewer node relay**: link RL pass → Viewer, render, read `bpy.data.images['Viewer Node'].pixels` into numpy (flipud, bottom-up), tone-map/remap in numpy, Pillow-composite. Windows tempdir → Pillow → direct binary write to WSL `images/` (round-trip md5 + get_file_info verified; small quantized PNGs write byte-exact, no truncation). 256-color FASTOCTREE+FS quantize <500KB. NO baked labels (overlays deferred to integration). Bridge note: socket drops between calls but Blender memory persists; retry the ping and continue. Use `vl.objects.active` not `bpy.context.object` after factory reset.

- **#10 `render_pass_contact_sheet`** `images/lesson_43_10_render_pass_contact_sheet.png` DONE 2026-07-03. 1944x1298, **89,584 B**, md5 **6af9a27db7e91e17126a8884cb660a9f**. 3x2 contact sheet of one Cycles scene (gold metal sphere + red torus + blue cube nestled for AO contact, on gray ground; 128 samples, denoised, AgX): **Combined** (lit beauty, Reinhard tone-map+sRGB) / **Diffuse Color** (albedo; metal reads dark) / **Glossy Color** (sphere bright gold, others near-black) / **AO** (crevice+contact darkening) / **Z-Depth** (bg-masked normalize, near-white→far-black) / **Normal** (−1..1 remapped to RGB, bg flat blue). #2b2b2b bg, #FF6B00 6px dividers, NO baked labels. RAW 505,949 B → 256-color FASTOCTREE+FS quantize 89,584 B. VERIFY: **view tool RECOVERED** — real EYE-CONFIRM (6 passes distinct + correct, dividers crisp, no labels). Transfer: direct binary write win32→WSL, round-trip md5==src, get_file_info==89,584. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). NEXT = {11 color_grade_before_after, 12 teal_orange_grade_result, 13 glare_bloom_before_after, 14 dof_before_after}.

- **#11 `color_grade_before_after`** `images/lesson_43_11_color_grade_before_after.png` DONE 2026-07-03. 1458x732, **45,868 B**, md5 **cf373c9f734f0ec8f548dcca0d135e35**. 2-panel A/B of one Cycles still-life (warm terracotta sphere + teal vase + tan box + emissive warm bulb on neutral floor/wall; warm key + cool fill; 160 samples, denoised, AgX). LEFT raw/ungraded (flat Reinhard, lifted muddy blacks, slight desat). RIGHT full grade (exposure +1.25×, S-curve contrast, teal-orange split-tone — cool shadows / warm highlights — +1.35× saturation). #2b2b2b bg, #FF6B00 6px divider, NO baked labels. RAW 356,245 B → 256-color FASTOCTREE+FS quantize 45,868 B. VERIFY: view tool returned EMPTY this call (glitch recurred) → programmatic proxy: A(raw) lum-mean 131.6/std 36.5/sat 15.0 vs B(grade) lum-mean 146.8/std 60.2/sat 53.5 (3.5×); teal-orange confirmed — B shadow R-B −32.0 (cool), B highlight R-B +77.9 (warm); A/B MAD 23.8 (distinct). Transfer: direct binary write win32→WSL, round-trip md5==src, get_file_info==45,868. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). NEXT = {12 teal_orange_grade_result, 13 glare_bloom_before_after, 14 dof_before_after}.

- **#12 `teal_orange_grade_result`** `images/lesson_43_12_teal_orange_grade_result.png` DONE 2026-07-03. 720x720, **29,237 B**, md5 **17dd26a36c27a409dd233326679bb4b2**. Single cinematic beauty = Project-1 payoff. Same #11 Cycles still-life render, re-graded stronger: exposure +1.3×, S-curve contrast 0.62, deeper teal-orange split (shadow tint [-0.02,0.11,0.20] / highlight [0.20,0.08,-0.06]), +1.45× saturation, gentle cinematic vignette. NO baked labels. RAW 214,879 B → 256-color FASTOCTREE+FS quantize 29,237 B. VERIFY: view tool EMPTY again (glitch) → programmatic proxy: shadow R-B −48.7 (deep teal), highlight R-B +93.8 (rich warm), sat 70.5 — strong clean cinematic grade, full dynamic range intact. Transfer: direct binary write win32→WSL, round-trip md5==src, get_file_info==29,237. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). NEXT = {13 glare_bloom_before_after, 14 dof_before_after}.

- **#13 `glare_bloom_before_after`** `images/lesson_43_13_glare_bloom_before_after.png` DONE 2026-07-03. 1446x720 (2× 720×720 panels + 6px divider), **56,165 B**, md5 **7a9be64979aa1cece6be40f5b6433e21**. 2-panel A/B of one Cycles emissive scene (warm bulb sphere str18 + cyan neon torus str14 + magenta/green glow cubes + matte ball catching bounce, on near-black backdrop+wall; 160 samples, denoised, AgX). Scene built via bridge (8 objs). BOTH panels rendered from the SAME beauty pass through the 5.1 Viewer-node relay; identical Reinhard+sRGB tone-map so ONLY the glare differs. LEFT = clean (emitters crisp, no halo, HDR max 18.5). RIGHT = Fog Glow bloom added in compositor via **CompositorNodeGlare** (5.1 socket-driven: Type menu-socket='Fog Glow', Quality='High', Threshold 1.0, Size 0.8, Strength 1.0 — old node attrs glare_type/size/threshold GONE, now input sockets; enum identifiers are DISPLAY strings 'Fog Glow'/'High', not 'FOG_GLOW'/'HIGH'). Bloom diff vs clean: frame-mean 82.4→101.9, std 68.5→62.9 (halos fill darks), diff-mean 1.16, A/B MAD 19.46. #2b2b2b bg, #FF6B00 6px divider, NO baked labels. RAW 407,316 B → 256-color FASTOCTREE+FS quantize 56,165 B. VERIFY: **view tool RECOVERED** — real EYE-CONFIRM (left crisp emitters / right soft blooming halos bleeding onto neighbors+backdrop, divider crisp, no labels). Transfer: direct binary write win32→WSL, round-trip md5==src, get_file_info==56,165. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). NEXT = {14 dof_before_after}.

- **#14 `dof_before_after`** `images/lesson_43_14_dof_before_after.png` DONE 2026-07-03. 1446x720 (2× 720×720 panels + 6px divider), **26,313 B**, md5 **01bfcddf418c62370b1687a9e9a16070**. 2-panel A/B of a FRESH depth-staggered still-life (surgical teardown of #13 scene, addon stayed armed): 5 objects (sphere/cube/sphere/cylinder/metal-sphere) receding down +Y from cam-dist ~2.6 to ~38.6 on a warm floor, area key+fill, world lift; 160 samples, denoised, AgX. **Z/Depth pass enabled** (vl.use_pass_z), Image + Depth both pulled via Viewer relay (5.1 pass socket name = 'Depth'). LEFT = all-sharp (raw Image, front-to-back crisp). RIGHT = Z-driven variable blur composited in numpy (Blender Python has numpy but NO scipy — rolled own separable box-blur×3≈gaussian pyramid at radii {0,3,6,10,15,20,26}, per-pixel CoC = depth−focus with focus=3.6 on nearest obj, steep ramp 1.6× behind / 0.8× front, per-pixel lerp between bracketing pyramid levels). Result: far-band high-freq detail dropped to 12.6% of sharp (heavy bg melt) while near stays sharp (lap-energy near 0.00074→0.00068); A/B MAD 2.01 (modest by pixel count — scene is smooth/low-freq, but the blur is visually strong+correct). #2b2b2b bg, #FF6B00 6px divider, NO baked labels. RAW 138,209 B → 256-color FASTOCTREE+FS quantize 26,313 B. VERIFY: **view tool WORKED** — real EYE-CONFIRM (left row uniformly sharp / right nearest obj crisp + progressive melt to soft bokeh with distance, divider crisp, no labels). Transfer: direct binary write win32→WSL, round-trip md5==src, get_file_info==26,313. LIVE HTML UNTOUCHED 141,730 B (get_file_info re-confirmed). **PNG 5/5 COMPLETE.**

**PNG batch close (5/5):** TRUE-PRISTINE teardown verified (0 objs / 0 meshes / 0 mats / 0 node-groups; only 'Render Result' image remains; 8 Windows temps os.remove'd). All 5 PNG on disk byte-exact (get_file_info==md5-verified byte-count each). **LIVE HTML UNTOUCHED 141,730 B** (get_file_info re-confirmed after final commit). 5.1 GLARE API NOTE (carry-forward): CompositorNodeGlare in 5.1 has NO glare_type/size/threshold/mix/quality attrs — all moved to INPUT SOCKETS (Type/Quality are MENU sockets set by DISPLAY-string default_value e.g. 'Fog Glow'/'High'; Size is now a 0–1 factor). 5.1 Z pass output socket is named 'Depth'. Blender Python has numpy but NOT scipy — use numpy-only blur. **NEXT PHASE = INTEGRATION** (own fresh chat).

---

## INTEGRATION (2026-07-03)

**Built deterministically from Phase-0 live (141,730 B) + 9 transformed inline SVG + 5 PNG `<figure>` blocks; bottom-up insert; Claude-side full-invariant assert; server-side (Blender-bridge host, which sees the WSL FS directly) binary LF write; get_file_info==208,504; fresh Filesystem re-read re-assert ALL PASS.**

**Live HTML: 208,504 B / md5 c8710f9fac436e21567b14da135b584e / LF-only.** (was Phase-0 141,730.)

**Overlay-bar decision (deferred by §Roster triage): NO overlay bars.** L41/L42 added #FF6B00 overlay bars to label unlabelled PNGs; L43's 5 PNGs are self-contained (contact sheet + A/B panels) and already carry baked-in #FF6B00 dividers, so an overlay bar would be redundant orange-on-orange. Labels live in the figcaptions. Consequently inline `<svg>` count == 9 exactly (no overlay SVGs); target invariants unchanged.

**SVG transform:** root `color="#222"` stripped on all 9 (0 remain). font-family was already present on the root of all 9 (incl. #08/#09) — injection was a no-op; verified present post-transform. Bodies keep currentColor + role hexes.

**Figure markup:** each `<figure style="margin:2rem 0;font-size:0;">` (L33 overlay-margin discipline: font-size:0 wrapper) with inline SVG or `<img ... style="max-width:100%;height:auto;margin:0;vertical-align:top;border-radius:6px;">` (margin:0;vertical-align:top per L33), then `<figcaption style="font-size:0.9rem;color:#aaa;margin-top:0.5rem;text-align:center;">`. Caption dashes/arrows use entities (&#8212;/&#8594;), never literals.

**Placement map (landmark = unique heading each figure was inserted BEFORE; bottom-up):**

| # | fig | section | inserted before |
|---|---|---|---|
| 01 | svg cif | compositor-interface | `<h3>Key Nodes You'll Always Use</h3>` |
| 02 | svg skt | compositor-interface | `<h3>Essential Keyboard Shortcuts</h3>` |
| 03 | svg rpf | render-passes | `<h3>Enabling Render Passes</h3>` |
| 04 | svg pms | render-passes | `<h3>Essential Render Passes Explained</h3>` |
| 10 | png contact-sheet | render-passes | `<h3>Common Render Pass Workflows</h3>` |
| 05 | svg ndx | basic-nodes | `<h4>💡 Common Node Combinations</h4>` |
| 06 | svg blm | basic-nodes | `<h3>Converter Nodes (Data Manipulation)</h3>` |
| 07 | svg ccs | color-correction | `<h3>Complete Color Grading Project</h3>` |
| 11 | png grade-b/a | color-correction | `<h3>Common Color Grading Styles</h3>` |
| 08 | svg dof | effects | `<h3>Atmosphere: Mist and Fog</h3>` (svg then png#14) |
| 14 | png dof-b/a | effects | `<h3>Atmosphere: Mist and Fog</h3>` (after svg#08) |
| 09 | svg atm | effects | `<h3>Lens Effects: Vignette, Distortion, Grain</h3>` |
| 13 | png glare-b/a | project-glows | `<h3>Step 2: Add Atmosphere</h3>` |
| 12 | png teal-orange | project-color-grade | `<h4>💡 What to Watch For</h4>` |

**Post-integration invariants (fresh re-read, ALL PASS):** bytes 208,504; CRLF 0; `<figure>` 14 / `</figure>` 14; `<figcaption>` 14 / `</figcaption>` 14; `<img>` 5; `<svg>` 9 / `</svg>` 9; aria-labelledby 9; U+2014 27; U+2192 literal 128; U+2013 0; U+00B7 0; `color="#222"` 0; #667eea 0; #764ba2 0; linear-gradient 0; `<section id=` 9 / `</section>` 9; each PNG src referenced exactly once (10–14); back lesson_42 1 / next lesson_44 1.

---

## BROWSER QA (2026-07-03) — PASS

**Harness (L41/L42 method).** Live HTML copied Claude-side byte-exact (md5 `c8710f9fac436e21567b14da135b584e`, 208,504 B, 0 CR — matches disk) + the 5 PNGs staged (all 5 md5s match the PNG build log). All post-integration invariants re-asserted on the fresh copy before serving: `<figure>` 14/14, `<figcaption>` 14/14, `<img>` 5, `<svg>` 9/9, aria-labelledby 9, U+2014 27, U+2192 literal 128, U+2013/U+00B7/`color="#222"`/#667eea/#764ba2/linear-gradient all 0, `<section id=` 9/9, each PNG (10–14) referenced once, back lesson_42 1 / next lesson_44 1, jsdelivr import exactly 1 — all pass. QA-only render copy (`lesson_43_qa_render.html`) rewrote the single jsdelivr mermaid import → a LOCAL mermaid@10.9.6 ESM (`vendor/mermaid-dist/`, full 156-file dist unpacked from the npm tarball; CDN blocked). **Live import line NOT touched** (live copy still carries jsdelivr, unmodified). Served over local http; real Chromium via Playwright (chromium-1194, `--no-sandbox`); tested desktop 1440x900 + mobile 390x844.

**Results (both widths, identical):**
- **14/14 `<figure>` + 14/14 `<figcaption>`** in the rendered DOM.
- **9 in-figure inline `<svg>`** render (the 9 diagram SVGs).
- **5 `<img>`** all served 200 + `complete==true` + non-zero natural dims matching disk: contact-sheet 1944×1298, grade-b/a 1458×732, dof-b/a 1446×720, teal-orange 720×720, glare-b/a 1446×720.
- **6 mermaid `.mermaid` → 6 rendered `<svg>`** (local ESM + all chunks 200). No mermaid parse/render errors.
- **0 pageerrors; 0 lesson-content console errors.** The only console errors are the 3 expected site-scaffold 404s: `styles/main.css`, `js/clipboard.js`, `js/course-enhancements.js` (absent from the isolated QA dir, resolve on Ray's real server). No favicon request (page has no favicon ref).
- **Horizontal overflow 0 at both widths** (desktop body scrollWidth 1424 ≤ 1440; mobile 374 ≤ 390).

**Mobile wide-table check (the anticipated risk):** no stub needed. Both wide tables (scrollWidth 733 and 522) are wrapped in `.table-wrap` carrying **inline** `overflow-x:auto` (from Phase-0 modernization), so at 390px each wrapper clamps to the viewport (clientWidth 374/370) and the table scrolls *inside* it — contributing zero page overflow. This is cleaner than L42, where the `overflow-x:auto` rule lived only in external main.css and had to be stubbed to confirm; here it is inline in the live HTML and needs nothing from the external stylesheet.

**VERDICT: PASS** — integration invariants intact, all 14 figures (9 SVG + 5 PNG) + 6 mermaid render, layout sound desktop + mobile, no live edit required. **L43 pipeline COMPLETE end-to-end (Phase 0 → roster triage → SVG → PNG → integration → browser QA). NEXT = L44 (own fresh chat, start at Phase 0).**

---

## Locked rules (carry-forward)

- `\\wsl$\` paths only. Filesystem read tools + `write_file` reach `\\wsl$\` byte-exact. `str_replace`/`edit` and bash CANNOT reach `\\wsl$\` — all writes route through `write_file` (or the Blender bridge for binary/PNG).
- Bridge writes: binary + normalize CRLF→LF + `get_file_info` == byte-count; namespaces don't persist across `execute_blender_code` calls (inline all helpers per call); Blender bridge lowercase only; no Filesystem delete → `os.remove` temps.
- Module 10 SVG plan: fixed role-hex palette (`#FF6B00` brand, `#4ADE80` keep-positive, `#E63946` warning, `#4A9EFF` field/Z-info, `#B47EE8` practice); banned literals (U+2014, U+2013, U+00B7 literal, `#667eea`, `#764ba2`, `linear-gradient`); binary transfer via `bytes.fromhex()` (base64 BANNED — confirmed silent line-collapse failure).
- Browser QA: real Chromium via Playwright, local mermaid ESM stub (CDN blocked); external site css/js 404s are expected sandbox-only.
- Warn Ray when the conversation gets long (start fresh chat) rather than letting auto-compaction happen.
