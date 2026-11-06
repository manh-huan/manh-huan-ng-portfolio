---
version: 1
slug: "src-app-app-component-html"
primary_target: "src/app/app.component.html"
related_targets: ["src/app/components/home/home.component.html","src/app/components/skills/skills.component.html","src/app/components/timeline/timeline.component.html","src/app/components/projects/projects.component.html","src/app/components/contact/contact.component.html","src/styles.scss"]
---

# Surface brief — portfolio single page (src/app)

## Scope and visitor mode

Single-page portfolio (home, expertise, history, projects, contact, footer), Experience mode. Audiences: recruiters and potential clients, equal weight; passive showcase.

## Audience, job, proof

Recruiters scan role, stack, career arc in under a minute and need one-click contact. Proof: three real employers (Horizon Trading, Orange Business, FPT), two real project repos with screenshots, real photo. No testimonials or metrics exist; none may be invented.

## Direction contract

THESIS: A faithful port of the user-pinned reference — Yuji Sato's react-portfolio-template (MIT), the design this Angular app was originally extracted from. Dark #0d1116 Lato portfolio: avatar hero over a fixed-attachment background image, chip-listed expertise cards, alternating white-card career timeline with #5000ca dots, screenshot project grid, direct-link contact. It refuses the current site's drift: unloaded fonts, three competing component libraries, a dead form.

OWN-WORLD: #0d1116 ground (light: #f8f9fa), white text, #5000ca accent for hover and markers, white cards and white chips with Courier Prime labels, Lato for all UI text, bg-dark.png/bg-light.png hero imagery with fixed attachment, app-level fade-in on load.

STORY: visitor reads name → role → stack in the hero, scans expertise chips, walks the alternating career timeline, opens a project repo, and reaches the engineer through real GitHub/LinkedIn links — no decorative form.

FIRST VIEWPORT: fixed top nav with theme toggle and four text links (Expertise, History, Projects, Contact); hero holds a 150px round photo left, social icons above a 5em name and 1.5em role, over bg-dark.png, min-height 700px; sections fade up 20px over 700ms on load.

FORM: brief-pinned by the user (reference URL https://yujisatojr.github.io/react-portfolio-template/); seed:c35fa5e68f75c45b — the roll's dealt seed, superseded by the user's pin before any build. Divergence from reference, by earlier user decision: contact form replaced with direct contact links.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
