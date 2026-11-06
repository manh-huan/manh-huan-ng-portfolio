# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed equal priority:

1. **Recruiters and hiring managers** evaluating Manh-Huan for full-time engineering
   roles. They scan fast: current role, stack, career arc, evidence of shipped work.
2. **Potential clients** considering him for contract/project work. They need proof
   of finished, working software and a credible way to start a conversation.

## Product Purpose

Personal portfolio of **Manh-Huan Nguyen**, a Full Stack Engineer (Java/Angular,
DevOps) based in Strasbourg, France (updated 2026-11-05; previously Rennes —
career entries below still reflect where each role was held). A passive
showcase — he is not actively job hunting. Success: a visitor understands who
he is, what he builds, and how good he is within one minute, and can reach him
without friction.

## Positioning

Enterprise-grade backend/full-stack engineer who also owns delivery: CI/CD,
Docker, Kubernetes, AWS — not just code. Career arc: Java backend on
Stellantis' financial quotation platform (via SFEIR, current), trading-systems
Java development (Horizon Trading Solution), full-stack at Orange Business,
FPT Software. The combination of backend depth + full-stack range + DevOps
ownership is the differentiator.

## Operating Context

- Single-page scroll site (Home → Expertise → Career History → Projects →
  Contact → Footer), deployed to GitHub Pages at
  https://manh-huan.github.io/manh-huan-ng-portfolio
- Dark mode default, light mode toggle; both must stay supported
- Visitors arrive mostly via GitHub/LinkedIn profiles

## Capabilities and Constraints

- Angular 19 + PrimeNG (timeline) + Angular Material (chips) + FontAwesome +
  Material prebuilt theme (magenta-violet)
- SSR build for GitHub Pages deploy (`npm run build:prod` + angular-cli-ghpages)
- All asset URLs hardcode the `/manh-huan-ng-portfolio/` base path
- Contact form removed by user decision (was console-only): replaced with
  direct contact info — GitHub and LinkedIn links confirmed; **email address
  open: user has not provided one** (design must work with links alone and
  accept an email later)

## Brand Commitments

- Name: Manh-Huan Nguyen. Title: Full Stack Engineer.
- GitHub: https://github.com/manh-huan — LinkedIn:
  https://www.linkedin.com/in/manh-huan-nguyen-aa4b97203/
- **Pinned visual world (2026-11-05, user decision):** the portfolio must
  match https://yujisatojr.github.io/react-portfolio-template/ (Yuji Sato's
  react-portfolio-template, MIT). Keep attribution to the template in the
  footer and README per the license.

## Evidence on Hand

- 4 career entries (2022–present) with real employer names and concrete work
  descriptions — real, must not be embellished. Current: Java Backend
  Developer, Stellantis Financial Services via SFEIR (Jan 2026–present,
  user-supplied detail 2026-11-05: calculation engine, eligibility
  microservice with Redis, batch hardening on AWS S3)
- 2 personal projects with real GitHub repos (CompDoc academic-report-analyzer,
  Java Banking App) and existing screenshot mockups (mock01–06.png)
- 1 profile photo (public/assets/images/profile-photo.jpg)
- **Claude Developer Certification (Anthropic) — achieved, user-confirmed
  2026-11-05**; may be claimed on the site (expertise card)
- No testimonials or metrics exist — do not fabricate any

## Product Principles

1. Credibility over decoration: every claim is backed by real employers or
   real repos.
2. One-minute scan: a recruiter should grasp role, stack, and career arc
   without scrolling twice.
3. Full-stack + DevOps ownership is the story the sections tell together.
4. Reachable in one click: contact means real working links, nothing
   decorative.
5. Passive but current: reads as an engineer at the top of his game, not
   someone searching.

## Accessibility & Inclusion

No product-specific standard confirmed; meet WCAG AA contrast in both dark
and light modes as a professional floor.
