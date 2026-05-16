# Blender Course - Session Continue Notes

## Last Updated: April 12, 2026

## Recent Changes

### Index Page Modernization
- Complete rewrite of `index.html` with responsive CSS, mobile-friendly layout
- All inline hardcoded colors replaced with CSS variable-based classes for dark mode support
- Fixed all 51 lesson URLs to match actual filenames
- Added sticky site-nav bar with Ray's House of Fun + Contact links + theme toggle
- Updated footer with links
- Copyright updated to 2025, author to PetalFawnStudio

### Light/Dark Mode Toggle
- Theme toggle button (`#theme-toggle`) added to index.html (static) and all lesson pages (dynamic via JS)
- Theme persists via `localStorage` key `theme`
- Early initialization script runs before DOMContentLoaded to prevent flash of wrong theme
- CSS already had `data-theme` attribute support; added explicit `data-theme="dark"` surface rules for nav/card/lesson-nav backgrounds

### Dynamic Site Nav Injection (course-enhancements.js)
- `injectSiteNav()` — injects site-wide nav bar (Ray's House of Fun, Course Home, Contact, theme toggle) into every lesson page automatically. Skips if `.site-nav` already exists (index.html).
- `injectSiteFooter()` — updates footer on every lesson page with Ray's House of Fun + Contact links
- Early theme init added at top of JS file (runs immediately, not waiting for DOMContentLoaded)

### Fixed Files
- `lesson_51_your_portfolio_piece.html` — was truncated (missing closing tags, footer, scripts). Added proper closing structure with prev/next nav, footer, and script includes.

## File Structure
- `index.html` — Course homepage (modernized)
- `styles/main.css` — Shared CSS (dark mode fixes added)
- `js/course-enhancements.js` — Shared JS (dynamic nav injection + theme toggle)
- `lesson_01_*.html` through `lesson_51_*.html` — 51 lesson files
- `parts/archive/` — Multi-part lesson files (archive)

## WSL Path Note
- Working path: `\\wsl$\Ubuntu\home\practicalace\projects\blender_course`
- Confirmed: `\\wsl$\Ubuntu\` works; `\\wsl.localhost\` does NOT
