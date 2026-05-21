# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**dualsoftware-landing** is a static HTML landing page for Dual Software, a company offering AI generative solutions. The page showcases various AI provider integrations and services.

- **Technology**: Pure HTML with Tailwind CSS (loaded from CDN)
- **Structure**: Single-page application in `index.html`
- **Repository**: GitHub (`github.com:RuanBonavina/dualsoftware-landing`)

## Development & Deployment

**View the landing page:**
- Open `index.html` directly in a browser (double-click the file or drag to browser)
- Or run a local server: `python -m http.server 8000` (then visit `http://localhost:8000`)
- Or use any other HTTP server (e.g., `npx http-server`)

**No build process required** — this is a static site with no compilation, bundling, or dependencies to install.

## Architecture

### File Structure
- **`index.html`**: Landing page markup only — no inline styles, Tailwind config, or scripts
- **`css/styles.css`**: Custom CSS (reveal animations, marquee keyframes, glow, logo typography, spec-card hover)
- **`js/tailwind.config.js`**: Tailwind theme extension (colors, spacing, fonts, fontSize tokens, keyframes)
- **`js/main.js`**: Mobile menu, IntersectionObserver reveal, connect-line animation, AI brand marquee renderer + the `AI_BRANDS` list
- **`assets/brand/`**: Dual Software's own logos (`icone.svg`, `logo.svg`)
- **`assets/ai-brands/`**: Third-party AI provider logos rendered into the marquee from `AI_BRANDS`
- **`README.md`**: Project metadata

### Key Technical Details

**Styling:**
- Tailwind CSS v4+ loaded from CDN (`cdn.tailwindcss.com`)
- Tailwind theme lives in `js/tailwind.config.js`, loaded right after the CDN script in `<head>`. Load order matters: CDN sets up the `tailwind` global synchronously, then the config script assigns `tailwind.config` before Tailwind scans the DOM.
- Custom styles live in `css/styles.css`, loaded via `<link rel="stylesheet">`
- Custom color palette (Material Design inspired: primary `#d4f000`, error `#ffb4ab`, etc.)
- Dark mode enabled by default (`<html class="dark">`)
- Custom spacing, typography (Space Grotesk, DM Sans, Montserrat), and border radius tokens

**Fonts & Icons:**
- Material Symbols Outlined for icon sets
- Google Fonts: Space Grotesk, DM Sans, Montserrat
- Language: Portuguese (Brazil) — `lang="pt-BR"`

**Assets:**
- Brand logos for Dual Software itself live in `assets/brand/`
- Third-party AI provider logos live in `assets/ai-brands/` and are rendered into `#brand-marquee` by `renderBrandMarquee()` in `js/main.js` (two seamless groups for the infinite scroll)
- SVGs should be optimized before committing (remove metadata, minify)

## Development Guidelines

**When editing:**
- Keep `js/tailwind.config.js` synchronized with actual class usage
- Test dark mode appearance (the page ships with dark mode enabled)
- Verify responsive design on mobile (viewport meta tag is configured)
- Ensure all Google Font and Material Symbol CDN links remain valid
- Use Tailwind's custom tokens (spacing, colors, typography) for consistency

**Adding new AI provider logos:**
- Drop the SVG in `assets/ai-brands/`
- Add an entry `{ name, file }` to `AI_BRANDS` at the top of `js/main.js` — the marquee picks it up automatically

**Adding other SVG assets:**
- Brand assets for Dual itself → `assets/brand/`
- Reference with relative paths from `index.html`: `./assets/brand/filename.svg`

**Testing:**
- Test in multiple browsers (Chrome, Firefox, Safari, Edge) since this ships as-is
- Check mobile responsiveness using browser DevTools
- Verify all external CDN resources load (Tailwind, Google Fonts, Material Symbols)

## Common Tasks

- **Update company information or content**: Edit HTML in `index.html`
- **Adjust colors or spacing**: Edit `js/tailwind.config.js`
- **Edit animations or custom styles**: Edit `css/styles.css`
- **Add new AI provider logos**: Drop SVG in `assets/ai-brands/` and append to `AI_BRANDS` in `js/main.js`
- **Change typography**: Update font imports in `index.html` and `fontFamily` in `js/tailwind.config.js`
