# Keystone Software Solutions — Project Context

## Company
- **Name:** Keystone Software Solutions
- **Slogan:** Efficiency, Engineered.
- **Mission:** Build and ship software products for the Bangladeshi market (Bangla-first, low-cost, high-distribution), while offering premium software/automation services to fund growth.

---

## Website — Trionn Mirror Implementation

### Design Identity ("Active Theory" style)
- Ultra-dark mode (absolute black background, high-contrast white/silver typography)
- 3D interactive hero sections
- Liquid morphing transitions
- Smooth scrolling (Lenis)
- Magnetic cursor (GSAP-driven, follows mouse with lag)
- Bento grid layouts (glassmorphism: 1px border, backdrop-blur)
- Split-type letter-by-letter reveal on all headers

### Tech Stack
| Layer | Tool |
|---|---|
| Framework | React 19 + Vite (TypeScript) |
| Styling | Tailwind CSS v4 |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| Smooth scroll | Lenis |
| 3D | Three.js + @react-three/fiber |
| Font | Geist (variable) |

### Hero Morph Logic
- **Stage 1 (Hero):** Logo centered, scaled 1.5x
- **Stage 2 (Scroll):** ScrollTrigger pins logo → scales to 0.3x → moves to `top: 1rem; left: 1rem`
- **Stage 3 (Nav):** Transitions into sticky nav with 20% opacity background

---

## Site Map

### Pages
- `/` — Home
- `/work` — Work / Projects
- `/services` — Services
- `/about` — About
- `/contact` — Contact
- `/work/[project]` — Case study (optional)
- `/pricing` — Pricing (optional)

### Home Page Sections (in order)
1. Hero morph (logo + headline + 2 CTAs)
2. Proof strip (3–6 credibility highlights)
3. Selected work / featured projects (3–6 cards)
4. Services bento grid (4–6 glass cards)
5. Process / playbook (Discover → Design System → Build → Launch)
6. Capabilities / tech stack
7. Final CTA (book a call / WhatsApp / email)
8. Footer (links, email, GitHub, socials)

### Featured Projects (GitHub)
- **Folio** — Offline university application form generator (Excel → filled DOCX with photos) — https://github.com/Munim430-ai/Folio
- **keystone-website** — Keystone website (TypeScript) — https://github.com/Munim430-ai/keystone-website
- **Creative-Global-** — HTML — https://github.com/Munim430-ai/Creative-Global-
- **Fcp** — HTML — https://github.com/Munim430-ai/Fcp
- **Keystone-Software-** — https://github.com/Munim430-ai/Keystone-Software-

---

## Core Dependencies
```
gsap + ScrollTrigger   → scroll-driven animation
lenis                  → smooth scroll
three + @react-three/fiber → 3D scenes
tailwindcss            → layout/styling
framer-motion          → component animations
split-type             → letter-by-letter text reveals
@fontsource-variable/geist → typography
```

---

## Bangladesh Mobile Apps Strategy
- Target: mass market, low-to-mid Android devices
- Bangla-first UX, offline/low-data modes, fast onboarding (phone login)
- "App factory" playbook: shared design system, shared auth/analytics/payments
- Verticals: Utility, Education, Health, Commerce helpers, Local services
- Distribution: Facebook groups, TikTok, YouTube Shorts, WhatsApp loops
- Monetization: Freemium + ads → subscription for power features

## Premium Services
- Custom AI automation & high-end web apps
- Targets: luxury real estate, boutique law firms, high-growth SaaS
- Pricing: $1,500–$5,000/project
- Bootstrap ($0 capital)

## Operational Rules
- Free-tier or open-source tools only
- Speed-to-market over perfection
- AI-first execution (Claude, Gemini, Bolt)
