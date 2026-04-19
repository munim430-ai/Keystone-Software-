# Component Generator Skill

Generate a new React component for the website.

## Usage

`/component <ComponentName> [description]`

## Instructions

Given `$ARGUMENTS`:

1. Parse the first word as `ComponentName` (PascalCase).
2. Parse the rest as a description of what the component should do.
3. Create the file at `docs/src/components/<ComponentName>.tsx`.
4. Use this stack: React 19, TypeScript, Tailwind CSS v4, Framer Motion for animations.
5. Follow these conventions:
   - Functional component with typed props interface
   - Use `motion.` from framer-motion for any animated elements
   - Tailwind classes only — no inline styles
   - No comments unless logic is non-obvious
6. After creating the file, tell the user the file path and how to import it.
