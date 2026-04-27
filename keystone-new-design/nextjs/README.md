# Keystone Software Solutions — Next.js Site

A cinematic, scroll-driven website for **Keystone Software Solutions** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Three.js**, and **GSAP**.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript (strict)
- Tailwind CSS
- Three.js — modular cube system, scroll-driven 3D
- GSAP + ScrollTrigger ready (installed)
- Geist + Geist Mono via Google Fonts

## Project Structure

```
app/
  layout.tsx        # Root layout — fonts, metadata, viewport
  page.tsx          # Home — composes all scenes + 3D
  globals.css       # Tokens + base styles + utility classes
components/
  Loader.tsx
  Cursor.tsx        # Custom cursor (desktop only)
  Nav.tsx           # Floating navbar + mobile overlay
  SectionRail.tsx   # Right-rail section progress
  RevealObserver.tsx
  Footer.tsx
  3d/
    CubeStage.tsx   # Three.js scene — dynamic-imported with ssr:false
  scenes/
    SceneShell.tsx
    HeroScene.tsx       # 01
    ProblemScene.tsx    # 02
    TransformScene.tsx  # 03
    ProductsScene.tsx   # 04 (interactive cards)
    ServicesScene.tsx   # 05
    MarketScene.tsx     # 06
    MoatScene.tsx       # 07
    OriginScene.tsx     # 08
    ContactScene.tsx    # 09
tailwind.config.ts
postcss.config.js
next.config.mjs
tsconfig.json
package.json
```

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Notes

- **SSR-safe**: `CubeStage` is loaded with `dynamic(..., { ssr: false })`. Three.js never touches the server.
- **Adaptive 3D**: cube count, pixel ratio, antialiasing, and FOV adjust on mobile.
- **Reduced motion**: animations disable cleanly via `prefers-reduced-motion`.
- **Color tokens** live as CSS variables in `globals.css` and as Tailwind colors in `tailwind.config.ts`. Change `--accent` to re-skin.

## Deploy

Drop into Vercel — zero config.
