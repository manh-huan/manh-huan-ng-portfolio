---
name: Manh-Huan Nguyen Portfolio
description: Dark-first single-page Angular portfolio, a faithful port of Yuji Sato's react-portfolio-template
colors:
  ground-dark: "#0d1116"
  ground-light: "#f8f9fa"
  text-dark-mode: "#ffffff"
  text-light-mode: "#0d1116"
  muted-dark: "#c9d1d9"
  muted-light: "#495057"
  accent-violet: "#5000ca"
  accent-text-dark: "#8f6ff0"
  card-surface: "#ffffff"
  card-ink: "rgb(39, 40, 34)"
typography:
  display:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "5em"
    fontWeight: 700
  headline:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "2em"
    fontWeight: 700
  title:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.3em"
    fontWeight: 700
  lede:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.5em"
    fontWeight: 400
  body:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
  label-mono:
    fontFamily: "Courier Prime, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
rounded:
  card: "2px"
  pill: "12.5px"
  image: "5px"
  circle: "50%"
spacing:
  section: "5% 10%"
  grid-gap: "50px"
  gap: "15px"
  gap-xs: "10px"
components:
  nav-link:
    textColor: "{colors.text-dark-mode}"
    typography: "{typography.body}"
    padding: "6px 10px"
  nav-link-hover:
    textColor: "{colors.accent-text-dark}"
  chip:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.card-ink}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.pill}"
    height: "25px"
    padding: "0 10px"
  timeline-card:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.card-ink}"
    typography: "{typography.title}"
    rounded: "{rounded.card}"
    padding: "1em 1.5em"
  timeline-dot:
    backgroundColor: "{colors.accent-violet}"
    textColor: "#ffffff"
    rounded: "{rounded.circle}"
    size: "44px"
  contact-item:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.card}"
    padding: "14px 20px"
  contact-item-hover:
    backgroundColor: "{colors.accent-violet}"
    textColor: "#ffffff"
  contact-button:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.card}"
    padding: "12px 24px"
  contact-button-hover:
    backgroundColor: "{colors.accent-violet}"
    textColor: "#ffffff"
---

# Design System: Manh-Huan Nguyen Portfolio

## Overview

**Creative North Star: "The Faithful Port"**

This system is a user-pinned faithful port of Yuji Sato's react-portfolio-template (MIT) into Angular 19. The world is a near-black developer portfolio: deep blue-black ground, white text, one electric violet accent, white cards floating on the darkness, and a single fixed-attachment hero image. Every value here is taken from the shipped code, not from the template's intent — where the build departs from the reference, the departure is a recorded user decision (the contact form became direct links) and the build wins.

The character is restrained and terminal-adjacent: Lato carries all UI prose at a generous 1.1rem body size, while Courier Prime marks machine-readable strings (tech chips, timeline dates, GitHub handles) the way a code editor marks literals. Depth is real but quiet — Material-elevation card shadows at rest, no gradients, no glass. Motion exists in exactly two places: a one-time 700ms app fade-in and the alternating timeline's scroll reveal, both disabled under `prefers-reduced-motion`.

Theme is a body-level class swap (`light-mode` on `<body>`, deep-linkable via `?theme=light`): every ground, text, and muted token re-points; the accent and the entire white card system stay identical in both modes.

**Key Characteristics:**
- Near-black ground (#0d1116) with white text; light mode swaps the ground to #f8f9fa and text to #0d1116, nothing else
- One accent for both modes (#5000ca) used only as fills, dots, focus rings, selection, and the scrollbar — never as body text or large surfaces
- White cards and white chips with card-ink text (rgb(39, 40, 34)) in both themes
- Lato for all UI text; Courier Prime reserved for chips, dates, and handle strings
- Fixed-attachment hero background (bg-dark.png / bg-light.png), min-height 700px
- Two motion moments only (app fade-in, timeline reveal), both SSR-safe and reduced-motion-safe

## Colors

A two-ground, one-accent palette: the theme toggle changes the ground and text; the accent and card system are theme-invariant.

### Primary
- **Electric Violet** (#5000ca): the only accent. Timeline dots (44px circles), contact-item and contact-button hover fills, focus-visible outlines, text selection, and the scrollbar thumb. In light mode it also serves as the link-hover text color (dark mode uses **Soft Violet Text** instead for legibility on black).
- **Soft Violet Text** (#8f6ff0): dark-mode link/nav hover text color. Reverts to #5000ca in light mode.

### Neutral
- **Ink Black Ground** (#0d1116): dark-mode page and navbar ground.
- **Pale Gray Ground** (#f8f9fa): light-mode page and navbar ground.
- **Pure White Text** (#ffffff): dark-mode text and hero heading.
- **Blue-Gray Muted** (#c9d1d9): dark-mode secondary text (timeline dates on the line). Light-mode counterpart is **Slate Muted** (#495057).
- **Card White** (#ffffff): every card and chip surface, both modes.
- **Card Ink** (rgb(39, 40, 34)): text on every card and chip, both modes.

### Named Rules
**The One Violet Rule.** #5000ca is the only accent hue in either theme. It appears as small fills, markers, and interaction states — never as a large resting surface, never as decorative gradient, never as a second accent alongside anything else.

**The Card Stays White Rule.** Cards and chips keep white surfaces and card-ink text in dark and light mode alike. Theme changes touch grounds, text, and muted tones only; the card system is theme-invariant.

## Typography

**Display Font:** Lato (system sans fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue)
**Body Font:** Lato (same fallback stack)
**Label/Mono Font:** Courier Prime (monospace fallback)

**Character:** A humanist grotesque at a slightly enlarged body size (1.1rem) keeps the page warm and fast to scan; the monospace punctuates it like syntax highlighting — chips, dates, and handles read as literals from the engineer's own editor. Weights loaded: Lato 300/400/700/900 + italic 400; Courier Prime 400/700.

### Hierarchy
- **Display** (700, 5em, margins zeroed): the hero name. Drops to 4em under 768px.
- **Headline** (700, browser-default h1 at the 1.1rem root ≈ 2.2em): section titles (Expertise, Career History, Personal Projects, Contact Me), top margin zeroed.
- **Title** (700, 1.3em): timeline card titles; h3 skill headings use browser-default bold.
- **Lede** (400, 1.5em): the hero role line "Full Stack Engineer"; contact intro paragraph is 1.2em.
- **Body** (400, 1.1rem): all prose. Section text blocks max out around 65–75ch via the 3-column and 2-column grids.
- **Label** (400, 0.8rem, Courier Prime): tech chips; timeline dates are 0.95em Courier Prime; contact values are 1rem Courier Prime at 0.85 opacity.

### Named Rules
**The Mono Is Metadata Rule.** Courier Prime appears only on machine-readable strings — tech-stack chips, date ranges, GitHub/LinkedIn handles. UI prose is always Lato; mono is never used for headings, sentences, or buttons.

## Layout

Single-page vertical scroll: sticky navbar, then Home, Expertise, Career History, Projects, Contact, Footer. Sections are centered flex columns (`.container`, margin-top 64px) whose content pads 5% horizontally 10% (5% / 5% under 768px). Content grids: expertise 3 columns, projects 2 columns, both with 50px gaps; each collapses to a single stacked column on mobile. The timeline is a centered alternating spine (max-width 1170px, 4px line at 50%, opacity 0.5) with cards at `calc(50% - 50px)` and dates opposite; under 1170px it becomes a single left rail at 20px with cards at 56px offset and dates in flow. The hero is a row (150px round photo left, social icons + name + role right) over the fixed-attachment background at min-height 700px; under 768px it centers and stacks. Navbar links appear at 600px+; below that a right drawer (240px, slides in over a rgba(0,0,0,0.35) backdrop).

## Elevation & Depth

Real but quiet Material-style elevation: white cards float on the dark ground via a standard three-layer MDC shadow at rest — not tonal layering, and shadows do not change on hover. The scrolled navbar gains a soft drop shadow; the mobile drawer casts one to its left. Timeline dots sit on the spine with a 4px ground-colored ring that cuts the line behind them.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)`): timeline cards, contact items, contact buttons. Constant in both themes; hover changes background, not shadow.
- **Navbar Scrolled** (`box-shadow: 0 2px 10px rgba(0,0,0,0.35)`): appears once the page scrolls.
- **Drawer Edge** (`box-shadow: -2px 0 10px rgba(0,0,0,0.25)`): the open mobile drawer.
- **Dot Cutout Ring** (`box-shadow: 0 0 0 4px var(--bg)`): timeline icon circles, so the spine passes behind them cleanly.

### Named Rules
**The Shadow At Rest Rule.** Elevation is a property of the surface, not the state: cards carry Card Rest at all times, hover swaps the background to accent instead of lifting. Never add hover shadows or scale-on-hover to cards.

## Shapes

Two form languages, strictly separated. Cards are almost square — 2px radius on timeline cards, contact items, and contact buttons. Chips are the only pills (12.5px radius on a 25px height, i.e. fully rounded ends). Circles are reserved for the avatar (150px photo, 50%) and the 44px timeline dots. Project screenshots get a soft 5px. Timeline cards carry a 7px CSS-triangle arrow pointing at the center spine (removed under 1170px).

## Components

### Navigation
Sticky top bar over the ground color, 8px 12px padding. Left: 24px icon button (theme toggle, transparent background). Right (600px+): text links in Lato 1.1rem, transparent background, hover to accent-text over 0.15s. Below 600px a hamburger opens a white right drawer with centered Lato 1.05rem links that hover to #5000ca.

### Chips
White pill (background var(--card), text var(--card-text), Courier Prime 0.8rem, 25px height, 0 10px padding, 12.5px radius, 0.5em right margin). Rendered inline in a 2-line-height flex row after a "Tech stack:" label in text color. No selected/disabled variants — chips are static labels, never interactive.

### Cards / Containers
Two white-card components share one recipe: white surface, card-ink text, 2px radius, Card Rest shadow. The **timeline card** (1em 1.5em padding) holds a 1.3em/700 title, a 0.75-opacity subtitle, and 0.9em description. The **contact item** (14px 20px padding, 15px gap) is a row of FontAwesome icon + 700 label (min-width 90px) + Courier Prime value; on hover the whole surface fills #5000ca and all text turns white — except the non-link "static" variant (e.g. location), which keeps its white surface on hover. Hover is reserved for actionable rows.

### Timeline (signature)
Alternating vertical spine with 44px violet dots (Font Awesome briefcase glyph, white, 4px ground ring). Cards reveal on scroll: hidden state (opacity 0, translateY 24px; dots also scale 0.6) exists only behind a `.vt-reveal` class added by browser JS, so SSR and no-JS visitors always see the cards. IntersectionObserver adds `.in-view`; cards rise over 0.55s cubic-bezier(0.25, 0.8, 0.25, 1), dots bounce over 0.55s cubic-bezier(0.34, 1.56, 0.64, 1). All reveal transitions drop to none under reduced motion.

### Buttons
No native button styles; actions are link-styled. **Contact button**: white surface, card-ink Lato 1rem text, 12px 24px padding, 2px radius, Card Rest shadow, inline icon; hover fills #5000ca with white text. **Project link**: screenshot (100% width, 5px radius, object-fit cover) scales to 1.05 over 0.2s on hover; the title underlines on hover and on keyboard focus, with the accent focus ring.

### Hero
150px circular photo beside social icon links (1.8em glyphs, text color) above the 5em/700 name and 1.5em role, over the fixed-attachment theme background at min-height 700px. Under 768px the layout centers and stacks, and a separate mobile social row appears.

### Inputs / Fields
None. The reference template's contact form was removed by user decision and replaced with direct GitHub/LinkedIn rows; an email row may be added later using the existing contact-item pattern.

## Do's and Don'ts

### Do:
- **Do** keep all themeable values on the CSS custom properties (`--bg`, `--text`, `--muted`, `--accent`, `--accent-text`, `--card`, `--card-text`, `--home-bg`) so the light-mode class swap stays a one-place change.
- **Do** use #5000ca for hover fills, dots, focus-visible rings (2px solid, offset 2px), selection, and the scrollbar — the complete list of its appearances.
- **Do** keep state transitions at 0.15s ease-in-out (color, background-color, border-color) — the single transition speed the whole site uses.
- **Do** gate any scroll-reveal hidden state behind a JS-added class (as `.vt-reveal` does) so SSR prerenders and no-JS visitors see full content.
- **Do** honor `prefers-reduced-motion: reduce` wherever motion is added — the global clamp already exists in styles.scss.

### Don't:
- **Don't** introduce a second accent hue, a gradient, or a colored large surface; the palette is grounds + white + one violet.
- **Don't** use Courier Prime for headings, sentences, or buttons; mono is for chips, dates, and handle strings only.
- **Don't** tint cards or chips with the theme; they are white with card-ink text in both modes.
- **Don't** add fonts beyond Lato and Courier Prime (loaded weights: Lato 300/400/700/900 + italic 400, Courier Prime 400/700).
- **Don't** add entry animation beyond the two shipped moments (app fade-in 700ms, timeline reveal); never animate on scroll elsewhere.
- **Don't** give hover fills to non-actionable rows; static contact rows keep their white surface (the `.static` variant).
