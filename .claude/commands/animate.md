# Animation Skill

Add GSAP or Framer Motion animation to a component or page.

## Usage

`/animate <file-path> [animation description]`

## Instructions

Given `$ARGUMENTS`:

1. Parse the first argument as the target file path (relative to repo root).
2. Parse the rest as the desired animation behavior.
3. Read the file.
4. Choose the right tool:
   - Use **Framer Motion** (`motion.*`, `useAnimate`, `AnimatePresence`) for component-level, state-driven, or layout animations.
   - Use **GSAP** (`gsap.to`, `gsap.timeline`, `ScrollTrigger`) for scroll-driven, complex sequenced, or canvas/SVG animations.
   - Use **Lenis** for smooth scroll setup (only in the root layout/App).
5. Apply the animation cleanly — no extra wrappers, no style duplication.
6. Show the user the diff of what changed.
