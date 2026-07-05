# Lesson 51 (Your Portfolio Piece) - Integration Progress

Module 11 (Pro Workflows), lesson 5. FINAL LESSON of the course.
Live HTML: `lesson_51_your_portfolio_piece.html` (project root).

## Phase-0 baseline (pristine original)
- Bytes: 167,548
- md5: `518c2a4225706f94f9adce14d20dff35`
- LF-only, 0 CR, TRUE-PRISTINE (0 figure / 0 img / 0 svg)

## Content check: NO fix needed
TOC lists 10 anchors; all 10 resolve to 10 top-level `<section>` (open==close==10); 0 dead links.
Section ids (order == TOC): understanding-portfolio, choosing-direction, project-types, planning-phase, technical-requirements, production-workflow, common-pitfalls, presentation-polish, your-project, summary.

## Phase-0 transforms (deterministic)
1. 5 purple gradient cards `linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white` -> `#2a2a2a;color:white`.
2. 10x mermaid node `fill:#667eea` -> `fill:#3a3a3a`.
3. 1x mermaid `primaryBorderColor:'#667eea'` -> `'#888888'`.
4. 5 bare `<table>` wrapped in `.table-wrap` + inline `style="overflow-x:auto;"` (carry-forward; mobile-table clamp without external main.css).
5. 83 literal U+2014 -> `&#8212;`.

### KEPT deliberately (not banned)
- 5 NON-purple gradient cards preserved as-is: `#f093fb/#f5576c` (pink), `#4facfe/#00f2fe` (blue), `#fa709a/#fee140` (peach), `#a8edea/#fed6e3` (mint), `#4CAF50/#45a049` (green). Banned-literal rule targets the purple `#667eea/#764ba2` pair only; prior lessons (L46/L48) explicitly KEPT the green `#4CAF50`. These are intentional semantic project-type/direction card colors, not the generic purple hero styling. `#4CAF50` appears 49x across the doc as a course-wide accent - untouched.

## Post-Phase-0 result (HARD-VERIFIED on fresh disk re-read)
- Bytes: 167,945 (delta +397 B, deterministic - Claude-side and server-side md5 identical)
- md5: `89e623f9f1b04a23ee31b0a07101a993`
- LF-only, 0 CR
- Write path: Claude-side transform hard-asserted -> reproduced SERVER-SIDE via Blender bridge (source re-verified pristine 518c2a42 at commit -> dry-run md5 == 89e623f9 byte-exact BEFORE commit -> binary LF write -> get_file_info==167,945 -> fresh independent Filesystem re-read re-assert ALL PASS).

### Invariants (28/28 PASS on fresh disk re-read)
bytes 167,945 / md5 89e623f9 / CR 0; U+2014 literal 0 -> &#8212; 83; U+2013 0 / U+00B7 0 / U+2192 0; #667eea 0 / #764ba2 0; fill:#3a3a3a 10; primaryBorderColor '#888888' 1; #2a2a2a cards 5; linear-gradient 5 (non-purple KEPT); #4CAF50 49 (course accent, untouched); color="#222" 0; figure/img/svg 0/0/0; `<table>` 5 / table-wrap 5 / overflow-x:auto 5; section ids 10 (order==TOC); section open==close==10; mermaid 10; jsdelivr 1; back lesson_50 1; next lesson_52 0 (FINAL lesson, no next-nav).

## Carry-forward
- overflow-x:auto on all 5 `.table-wrap` (mobile-table clamp without external main.css; L43/L44/L46/L47/L48 pattern).
- HOLD &#8212; 83 / U+2192 0 through all later phases; new prose uses entities never literals.

## ROSTER TRIAGE COMPLETE + LOCKED (2026-07-04) -> SVG BATCHES
**Verdict: 12 inline SVG / 0 PNG.** L51 is a pure planning/mindset/reference capstone (final lesson) - no live Blender scene and no rendered-beauty or before/after subject anywhere to capture, so 0 PNG (the wishlist's 40+ showcase-render / gallery / annotated-scene items are uncapturable aspiration, not roster). The 65-item `lesson_51_image_requirements_part1/2.md` is a Nov-2025 padded pre-production WISHLIST, NOT the roster; triaged against the 10 live sections + existing scaffolding.

### Existing scaffolding absorbs (do NOT duplicate)
- **10 mermaid:** M1 pillars tree (understanding), M2 sweet-spot convergence (choosing), M3 planning flow (planning), M4 7-phase linear (planning), M5 scene-collections tree (technical), M6 modeling-priority tree (production), M7 three-point-lighting tree (production), M8 post-processing chain (production), M9 supplementary-content tree (presentation), M10 4-week timeline (your-project). -> kills wishlist #2,#7(conv),#20,#61,#22,#29,#36,#9,#51.
- **5 tables:** portfolio-reveals, tech-spec checklist, render-settings comparison (kills #34), material-quality (kills #26/#27), aspect-ratio (kills #46/#13). 
- **1 ASCII pre:** folder structure (kills #60 as a literal dup; #08 pfs below is the numbered-infographic COMPLEMENT, L44 pfs precedent).

### 12-SVG registry (id-prefix -> section anchor -> wishlist origin)
| # | id | slug | section (anchor h4) | wishlist |
|---|-----|------|---------|----------|
| 01 | pvp | portfolio_vs_practice | understanding-portfolio (Four Pillars intro) | #1 |
| 02 | rea | reality_check_scope_tiers | understanding-portfolio (Important Reality Check) | #16 |
| 03 | gsm | goal_to_direction_map | choosing-direction (The Self-Discovery Questions) | #7 routing (M2 is only convergence) |
| 04 | ptc | project_type_compass | project-types (Making Your Final Choice) | #8/#10/#12/#14/#15 collapsed |
| 05 | rgo | reference_gathering_organization | planning-phase (Step 1) | #17 |
| 06 | tsc | tech_spec_decisions | planning-phase (Step 3) | #19 (complements spec table) |
| 07 | lod | detail_by_distance | production-workflow (Modeling Quality Standards) | #24 |
| 08 | pfs | project_folder_numbered | technical-requirements (Recommended Folder Structure) | #60 numbered complement to ASCII pre |
| 09 | b321 | backup_321_strategy | technical-requirements (The 3-2-1 Backup Rule) | #63 |
| 10 | pit | seven_pitfalls_overview | common-pitfalls (section h3; 0 mermaid/0 table) | #39/#40/#41 collapsed |
| 11 | d7 | seven_day_launch | your-project (The 7-Day Launch Plan) | #50 day-by-day (M10 is weeks) |
| 12 | jrn | journey_1_to_51 | summary (What You've Accomplished) | #56 |

### Deferred (absorbed or uncapturable), rationale
- **Uncapturable galleries/renders/annotated-scenes (no scene to shoot):** #3,4,5,6,8,10,11,12,14,15,21,23,25,28,30,32,37,38,43,44,48,59,64,65.
- **Owned by existing mermaid:** #2,#7(conv),#9,#20,#22,#29,#36,#51,#61.
- **Owned by existing tables:** #13,#26,#27,#34,#46.
- **Owned by existing ASCII pre:** #60 (literal); #08 pfs kept as numbered complement only.
- **Low-value text-equivalent infographics (text already carries it):** #31,#33,#45,#47,#49,#52,#53,#54,#55,#57,#58,#62.

### Post-integration target invariants (for the integration phase)
figure 12 / figcaption 12 / inline svg 12 / img 0 / aria-labelledby 12 / role="img" 12; color="#222" 0; #667eea 0 / #764ba2 0 / purple linear-gradient 0; U+2014 literal 0 (body-prose &#8212; 83 HOLD; SVG-internal &#8212; adds are the L44/L45/L47/L48-parallel split, real invariant is U+2014-literal-0); U+2192 0 HOLD; U+2013 0 / U+00B7 0; #2a2a2a cards 5 / non-purple linear-gradient 5 KEPT / #4CAF50 49 KEPT; mermaid 10; jsdelivr 1; `<table>` 5 / table-wrap 5; section ids 10 (order==TOC); back lesson_50 1; next lesson_52 0 (FINAL lesson).

### SVG plan-lock
ViewBox 800x560 default (800x680 dense where a canvas crowds); role-hex palette #FF6B00/#4ADE80/#E63946/#4A9EFF/#B47EE8/#F5C242; per-file id prefix from the registry (pvp-/rea-/gsm-/ptc-/rgo-/tsc-/lod-/pfs-/b321-/pit-/d7-/jrn-); banned literals U+2014/U+2013/U+00B7-literal/#667eea/#764ba2/purple linear-gradient; every svg role="img"+aria-labelledby->title/desc; standalone root color="#222" KEEP now / STRIP at integration; footer-tip Variant B left-rail; em-dash discipline (middle-dot separators, entities never literals). Files land in `images/lesson_51_NN_slug.svg`. Build loop per SVG: author Claude-side -> banned-literal check -> cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) verify -> write to `images/` byte-exact LF (TEXT write, base64 BANNED) -> copy back + md5 round-trip + get_file_info -> log to §SVG build log. Cadence: pilot #01, then batches of 3.

### Pilot #01 pvp built + cairosvg dark+light verified this chat (see §SVG build log). LIVE HTML UNTOUCHED 167,945 B / md5 89e623f9f1b04a23ee31b0a07101a993.

## §SVG build log
- 01 pvp portfolio_vs_practice — built + cairosvg dark(#1e1e1e/#d4d4d4)+light(#fff/#334155) EYE-CONFIRMED + banned-literal clean + written to `images/lesson_51_01_portfolio_vs_practice.svg`, round-trip verified: 7,379 B / md5 `d11e7fb127eb22e52d42bdf1b91f438d` / 0 CR / LF-only. 800x560 default viewBox, split-panel (green Portfolio/SHOW quad-clean vs amber Practice/LEARN red-messy topology), role="img"+aria-labelledby, standalone root color="#222" KEPT (strip at integration).
- 02 rea reality_check_scope_tiers — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 5,164 B / md5 `8058c950cfd841a9f1fef2379852a73a` / 0 CR / LF-only. 800x560, three stacked scope-tier cards (green Realistic/ships 1-2wk, amber Ambitious/month, red Dream/rarely-finishes), left-rail per card + ship-time pill, standalone root color="#222" KEPT.
- 03 gsm goal_to_direction_map — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 5,862 B / md5 `e2cb17bf4a4edbffda41674ed4c8612b` / 0 CR / LF-only. 800x560, 4-row goal→direction routing map (blue game/purple film/green product/amber freelance, currentColor connectors+arrowheads), convergence note band, standalone root color="#222" KEPT.
- 04 ptc project_type_compass — built + cairosvg dark+light EYE-CONFIRMED (mountain glyph fixed) + banned-literal clean + on disk, round-trip verified: 6,155 B / md5 `773d85900d59b735a3d9d7947bb615a4` / 0 CR / LF-only. 800x680 dense variant, five project-type rows (purple Character / green Environment / blue Hard-surface / amber Stylised / pink Motion) each glyph + Proves/Hard-part/Best-for, standalone root color="#222" KEPT.
- 05 rgo reference_gathering_organization — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 4,313 B / md5 `f8df13fe599d0253f64b2728eb8a5a49` / 0 CR / LF-only. 800x560, planning-phase Step 1: five reference categories left rail (orange Direct / blue Material / amber Lighting / purple Composition / green Technical) + right one-project-folder tree (modeling/materials/lighting/composition/technical) + sources line, standalone root color="#222" KEPT.
- 06 tsc tech_spec_decisions — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 3,951 B / md5 `d69c0302d1756c22f490da4e27cd357e` / 0 CR / LF-only. 800x680 dense variant, planning-phase Step 3: six spec-decision cards (orange Render Engine / blue Final Resolution / amber Render Type / purple Topology Requirements / green Level of Detail / red Asset Sources) each with the core question, standalone root color="#222" KEPT.
- 07 lod detail_by_distance — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 4,737 B / md5 `d8f1af7561e434c5aae1d342d8eb4481` / 0 CR / LF-only. 800x560, production-workflow Modeling Quality Standards: inverse detail-distance rule — camera glyph + distance axis (1/5/10 ft) with three shrinking-grid-density objects (green Hero fine / amber Supporting medium / blue Background sparse), 10x-less-detail callout band, standalone root color="#222" KEPT.
- 08 pfs project_folder_numbered — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 5,420 B / md5 `75c6b102a5f21aabd38e2d3b7a733809` / 0 CR / LF-only. 800x680 dense, technical-requirements Recommended Folder Structure: five numbered folder rows (orange 01 Planning / blue 02 Assets / purple 03 Scenes / amber 04 Renders / green 05 PostProcessing) each color-rail + folder glyph + sub-folder list + purpose line, numbered complement to the ASCII pre. standalone root color="#222" KEPT.
- 09 b321 backup_321_strategy — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 3,700 B / md5 `7ee37b190af691882111aa407298f33b` / 0 CR / LF-only. 800x560, technical-requirements 3-2-1 Backup Rule: three numbered bands (orange 3 copies + copy glyphs / blue 2 storage types / green 1 off-site), practical main-drive→external→cloud tip. standalone root color="#222" KEPT.
- 10 pit seven_pitfalls_overview — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 6,293 B / md5 `10aa527537b646efb44dc616a9aa14f5` / 0 CR / LF-only. 800x680 dense, common-pitfalls overview: seven numbered rows, red trap chip left (Scope Creep / Tutorial Hell / Perfectionism Paralysis / No Planning / Ignoring Composition / Weak Lighting / No Feedback Loop) + green one-line fix right. standalone root color="#222" KEPT.
- 11 d7 seven_day_launch — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 4,886 B / md5 `6762c287deb968810038579edbf94dfd` / 0 CR / LF-only. 800x560, your-project 7-Day Launch Plan: vertical timeline rail with 5 colored day nodes (Day 1 Choose Direction 1-2h / Day 2 Research 2-3h / Day 3 Planning 1-2h / Day 4-5 Blockout 3-5h / Day 6-7 Start Modeling 3-5h) + right time pills + by-day-7 summary. standalone root color="#222" KEPT.
- 12 jrn journey_1_to_51 — built + cairosvg dark+light EYE-CONFIRMED + banned-literal clean + on disk, round-trip verified: 5,116 B / md5 `0195420caaf1afd1ef828a2d566b6466` / 0 CR / LF-only. 800x560, summary journey arc: L1 start node → 3x2+1 skill-chip grid (Modeling/Materials/Lighting/Rendering/Animation/Simulation/Character Work) → L51 portfolio-piece end node. standalone root color="#222" KEPT.

**SVG BATCHES COMPLETE — 12/12 inline SVG built + EYE-CONFIRMED + round-trip verified on disk. 0 PNG.**

## INTEGRATION COMPLETE + HARD-VERIFIED (2026-07-04)
Live HTML `lesson_51_your_portfolio_piece.html` now **249,470 B / md5 `23754fc85d8dab314ee891b9014964c3` / LF-only / 0 CR** (Phase-0 baseline 167,945 -> 249,470 = +81,525 B). All 12 SVGs inlined at their §Roster-triage registry anchors (immediately after each anchor h3/h4, before its first prose child), each root `color="#222"` STRIPPED, multi-line attrs collapsed, decorative `=====` divider comments pruned (structural comments kept), re-indented to depth (col-20 content for the 8 section-level anchors; col-24 deeper-indent for the 4 in-card anchors: rea/lod/pfs/b321), each wrapped `<figure>`+`<figcaption>` (figcaption == that SVG's `<title>`). **0 PNG.**

Write path (carry-forward): Claude-side transform hard-asserted (30/30) -> reproduced SERVER-SIDE via Blender bridge reading source HTML + 12 SVGs from WSL disk (source re-verified pristine 89e623f9 at commit -> dry-run md5 == 23754fc8 byte-exact BEFORE commit -> binary LF write -> get_file_info==249,470 -> fresh independent Filesystem re-read byte-identical to Claude-side target + re-assert ALL 30 PASS); staging module removed post-commit; no `read_factory_settings`.

### Post-integration invariants (30/30 PASS on fresh disk re-read)
figure 12 / figcaption 12 / inline svg 12 / img 0 / aria-labelledby 12 / role="img" 12; color="#222" 0; #667eea 0 / #764ba2 0 / purple linear-gradient 0; U+2014 literal 0 / U+2192 0 / U+2013 0 / U+00B7 0; #2a2a2a cards 5 / total linear-gradient 5 (non-purple KEPT) / #4CAF50 49 (KEPT); mermaid 10; jsdelivr 1; `<table>` 5 / table-wrap 5; section ids 10 (order==TOC); back lesson_50 1; next lesson_52 0 (FINAL lesson); all 12 inline svg XML well-formed; all 12 figcaptions == their SVG `<title>`; each figure inserted once at its registry anchor. **NOTE** `&#8212;` entity total 83 -> 92 (+9 SVG-internal; body-prose 83 HELD; real invariant U+2014-literal-0 holds — L44/L45/L47/L48-parallel split).

**NEXT PHASE = BROWSER QA (own fresh chat).** LIVE HTML 249,470 B / md5 23754fc85d8dab314ee891b9014964c3.

## Locked rules (carry-forward)
- `\\wsl$\` paths only (never `\\wsl.localhost\`).
- Filesystem read tools + bridge writes reach `\\wsl$\` byte-exact; `edit_file` line-based edits OK; bash CANNOT reach UNC.
- Blender-bridge host sees WSL FS via UNC (server-side transform/write; dry-run md5 match before commit; binary + normalize CRLF->LF + get_file_info==byte-count; do NOT call read_factory_settings; namespaces don't persist across bridge calls - self-contained per call).
- Module SVG plan: role-hex palette (#FF6B00 / #4ADE80 / #E63946 / #4A9EFF / #B47EE8 / #F5C242) + banned-literal list (U+2014, U+2013, U+00B7 literal, #667eea, #764ba2, purple linear-gradient). SVG text via file write (base64 BANNED - silent line-collapse; hex reserved for binary). cairosvg dark+light verify before each SVG write.
- Browser QA Claude-side (copy live file, serve local http, local mermaid@10.9.6 ESM since CDN blocked; external site css/js 404s expected sandbox-only).

## BROWSER QA — PASS (2026-07-04)
QA harness = real Chromium (Playwright chromium-1194 at `/opt/pw-browsers`, `--no-sandbox`, `--proxy-server=direct://`) over local http. Live file copied Claude-side byte-exact (md5 + 249,470 B + 0 CR match disk); all 30 §Post-integration invariants re-asserted on the fresh copy BEFORE serving (figure 12/12, figcaption 12/12, inline svg 12, img 0, aria-labelledby 12, role="img" 12, color=#222 / #667eea / #764ba2 / purple-gradient / U+2014-literal / U+2192 / U+2013 / U+00B7 all 0, #2a2a2a 5 / linear-gradient 5 KEPT / #4CAF50 49 KEPT, class="mermaid" 10, jsdelivr 1, `<table>` 5 / table-wrap 5, section ids 10 order==TOC, section open==close==10, back lesson_50 1 / next lesson_52 0, &#8212; entity 92, all 12 inline svg XML well-formed, all 12 figcaptions == their svg `<title>`) — all pass. QA-only render copy rewrote the one jsdelivr mermaid import (`mermaid@10/dist/mermaid.esm.min.mjs`) to LOCAL mermaid@10.9.6 ESM (`vendor/mermaid-dist/`, npm dist with all 359 lazy chunks, CDN blocked Claude-side) — **live import line NOT touched (live jsdelivr held at 1; live file never written to, only read + copied).** Tested desktop 1440x900 + mobile 390x844.

### Results (both widths)
- 12/12 `<figure>` + 12/12 `<figcaption>`.
- 12/12 in-figure inline `<svg>` render non-zero bbox (0 zero-size).
- 0 `<img>` (no PNG phase).
- 10 `.mermaid` -> 10 rendered `<svg>` (local ESM, 0 parse errors, 0 error-svgs).
- 0 pageerrors.
- **desktop h-overflow 0** (scrollW 1440 == clientW 1440).
- **mobile h-overflow 0** (scrollW 390 == clientW 390).

### Expected sandbox-only (resolve on Ray's real server)
Site-scaffold refs present in HTML: styles/main.css, js/clipboard.js, js/course-enhancements.js, favicon.png (4). Three fired as network 404s (main.css, clipboard.js, course-enhancements.js); favicon.png is referenced but headless Chromium did not request it this run. NOT a QA failure.

### MOBILE FIT — IMPROVEMENT over L47/L48/L49 (NOT the main.css-dependency finding)
Unlike L47/L48/L49 (inline SVGs shipped `width="760"`, so mobile clamp depended on the site `figure svg{max-width:100%}` rule in main.css -> raw sandbox h-overflow ~418), L51's 12 inline SVGs carry **`viewBox` with NO fixed `width` attribute** (12/12 viewBox, 0/12 width). A viewBox-only inline SVG defaults to `width:auto` and scales to its container, so it clamps at 390px WITHOUT main.css. Mobile h-overflow is a **true 0** here (scrollW 390) — the L47/L48/L49 main.css mobile-SVG dependency does NOT apply to L51. Verified: the doc's own `<style>` has no `figure svg{max-width}` clamp and none is needed.

### VERDICT: PASS
L51 pipeline COMPLETE end-to-end (Phase 0 -> roster triage -> SVG 12 + PNG 0 -> integration -> browser QA PASS). L51 is the FINAL lesson (Module 11, lesson 5); next lesson_52 0 confirmed correct (no next-nav invented). **With L51 closed, the entire Blender Mastery Course pipeline is complete end-to-end.** Live HTML unchanged by QA: 249,470 B / md5 23754fc85d8dab314ee891b9014964c3 / LF-only / 0 CR.
