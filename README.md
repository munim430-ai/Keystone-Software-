<div align="center">

<br/>

```
██╗  ██╗███████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ██╗███████╗
██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
█████╔╝ █████╗   ╚████╔╝ ███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗  
██╔═██╗ ██╔══╝    ╚██╔╝  ╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  
██║  ██╗███████╗   ██║   ███████║   ██║   ╚██████╔╝██║ ╚████║███████╗
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
```

### **Software Solutions**
#### *Efficiency, Engineered.*

<br/>

[![Live](https://img.shields.io/badge/LIVE-keystone--software.vercel.app-ffffff?style=for-the-badge&labelColor=000000)](https://keystone-software.vercel.app)
&nbsp;
[![Deploy](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://keystone-software.vercel.app)
&nbsp;
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
&nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

<br/>

</div>

---

<br/>

## `01` — Overview

Agency website for **Keystone Software Solutions** — a product and services studio based in Dhaka, Bangladesh. Built to reflect the precision and intentionality we bring to every client engagement.

Dark, kinetic, and built to ship. The site showcases our work, capabilities, and process — with a design language inspired by the Active Theory aesthetic: absolute black backgrounds, high-contrast typography, and motion that means something.

<br/>

## `02` — Live Preview

<div align="center">

| Page | URL |
|------|-----|
| 🏠 Home | [keystone-software.vercel.app](https://keystone-software.vercel.app) |
| 💼 Work | [keystone-software.vercel.app/work](https://keystone-software.vercel.app/work) |
| ⚙️ Services | [keystone-software.vercel.app/services](https://keystone-software.vercel.app/services) |
| 👤 About | [keystone-software.vercel.app/about](https://keystone-software.vercel.app/about) |
| 📬 Contact | [keystone-software.vercel.app/contact](https://keystone-software.vercel.app/contact) |

</div>

<br/>

## `03` — Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite 6 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS v4 + CSS Variables |
| **Animation** | GSAP 3 + ScrollTrigger |
| **Motion** | Framer Motion 11 |
| **Smooth Scroll** | Lenis |
| **Routing** | React Router v6 |
| **Font** | Geist Variable |
| **Deploy** | Vercel |

</div>

<br/>

## `04` — Features

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│   ◆  Custom GSAP magnetic cursor with link-hover expansion       │
│   ◆  Lenis smooth scroll synced to GSAP ScrollTrigger            │
│   ◆  Canvas particle system in hero (60 floating dots)           │
│   ◆  Framer Motion staggered entrance animations on all sections │
│   ◆  Glass bento grid — Services section                         │
│   ◆  Sticky nav with scroll-triggered backdrop blur              │
│   ◆  Mobile-responsive with hamburger drawer                     │
│   ◆  SPA routing via React Router + Vercel rewrites              │
│   ◆  5 pages — Home, Work, Services, About, Contact              │
│   ◆  Geist Variable font — zero layout shift                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

## `05` — Homepage Sections

```
  ╔══════════════════════╗
  ║        HERO          ║  → Particle canvas · "Efficiency, Engineered." · 2 CTAs
  ╠══════════════════════╣
  ║      PROOF STRIP     ║  → 10+ Projects · AI-First · 3× Faster · BD + KR
  ╠══════════════════════╣
  ║    SELECTED WORK     ║  → Folio · WhatsApp Bot · Keystone Website · DocuMetrix
  ╠══════════════════════╣
  ║  SERVICES BENTO GRID ║  → AI Automation · Desktop Apps · Web Dev · Mobile · Docs
  ╠══════════════════════╣
  ║       PROCESS        ║  → Discover → Design System → Build → Launch
  ╠══════════════════════╣
  ║      TECH STACK      ║  → 18 technologies across frontend, backend, AI, infra
  ╠══════════════════════╣
  ║      FINAL CTA       ║  → "Ready to build something real?" + WhatsApp
  ╚══════════════════════╝
```

<br/>

## `06` — Project Structure

```
keystone-software/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Cursor.tsx          # GSAP magnetic cursor
│   │   ├── Nav.tsx             # Sticky glass navigation
│   │   ├── Hero.tsx            # Full-viewport hero + canvas particles
│   │   ├── Proof.tsx           # Animated stats strip
│   │   ├── WorkSection.tsx     # Project cards grid
│   │   ├── ServicesSection.tsx # Glass bento grid
│   │   ├── ProcessSection.tsx  # 4-step process
│   │   ├── StackSection.tsx    # Tech stack chips
│   │   ├── CTASection.tsx      # Final call-to-action
│   │   └── Footer.tsx          # Footer with links
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── WorkPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── App.tsx                 # Router + Lenis setup
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind v4
│
├── vercel.json                 # SPA rewrite rules
├── vite.config.ts
├── tsconfig.json
└── package.json
```

<br/>

## `07` — Getting Started

**Clone and run locally:**

```bash
git clone https://github.com/munim430-ai/Keystone-Software-.git
cd Keystone-Software-
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

<br/>

**Build for production:**

```bash
npm run build
npm run preview
```

<br/>

## `08` — Deploy

The project is configured for **zero-config Vercel deployment.**

```bash
# Push to main → Vercel auto-deploys
git add .
git commit -m "your message"
git push origin main
```

`vercel.json` handles SPA routing so all `/work`, `/services`, `/about`, `/contact` routes resolve correctly.

<br/>

## `09` — Featured Projects

Projects showcased on the site:

| Project | Type | Repo |
|---------|------|------|
| **Folio** | Desktop app — Excel → DOCX form generator | [github.com/Munim430-ai/Folio](https://github.com/Munim430-ai/Folio) |
| **WhatsApp AI Bot** | 24/7 AI lead qualification bot | Private |
| **Keystone Website** | Education consultancy website | [github.com/Munim430-ai/keystone-website](https://github.com/Munim430-ai/keystone-website) |
| **DocuMetrix** | Student document validation + OCR | Private |

<br/>

## `10` — Contact

<div align="center">

**Keystone Software Solutions**
Dhaka, Bangladesh

[![WhatsApp](https://img.shields.io/badge/WhatsApp-+880_1941_646_278-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/8801941646278)
&nbsp;
[![Website](https://img.shields.io/badge/Website-keystone--software.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)](https://keystone-software.vercel.app)

</div>

<br/>

---

<div align="center">
  <sub>© 2026 Keystone Software Solutions · Built with React · Deployed on Vercel</sub>
</div>
