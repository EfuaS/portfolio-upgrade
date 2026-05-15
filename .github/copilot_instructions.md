# GitHub Copilot Instructions

## Purpose
This file is the single source-of-truth for how AI assistants (Copilot and similar) should generate code for this repository. Keep suggestions **consistent**, **readable**, and **production-minded**.

## Project overview
- Tech stack: **React + Vite + Tailwindcss** .
- Styling approach: **Tailwind CSS** utilities + CSS variables for theme values.
- Language: **TypeScript-friendly** code (use TypeScript).
- UI intent: personal portfolio — **Morden** , clean, accessible, fast, creative, hover animations, scroll animations.
- All css styles are defined in src\global.css .
---

## Design system (must follow)

### Typography
- Primary font-family:
  - `"Inter", "sans-serif"`
- Use this font across components and layout; do not introduce additional fonts without approval.

### Colors
- **Base text color** (default body text): will rely on the system base color defined in `var(--primary-text-color)` instead of hardcoding the hex value.

### Accents & Headings
- General UI accent color : prefer to use the css variable `--color-accent-color` for sitewide accents which uses the tailwind css color --color-teal-400.
- Headings **must** reference `--color-accent-color` instead of hardcoding the hex value.

---

## Styling rules (strict)
- **Prefer Tailwind utility classes** for spacing, layout, and simple styling.
- Use **CSS variables** for shared theme values (colors, optionally spacing scale). Add those variables in src\global.css .
- Avoid inline `style={}` unless the value is dynamic and cannot be expressed via Tailwind or CSS variables.
- Avoid arbitrary hex colors or new Tailwind color classes that conflict with the design system.
- For component-level complex styling, prefer small CSS modules or Tailwind + `@apply` in a component stylesheet.
- Keep visual components predictable and theme-aware (read values from CSS variables where appropriate).
- Use the aos library added to this project for component entry animations with a delay duration of 1000ms.

---

## React & code style (opinionated)
- Use **functional components** only (no class components).
- Prefer **named exports** for components. Default exports are allowed for the main page component if needed.
- Favor **small, composable components** (single responsibility).
- Prefer **explicit prop typing** (TypeScript `Props` interfaces/types) when writing new components.
- Prefer to create functional components as .tsx files.
- Use React hooks where appropriate. Avoid unnecessary re-renders.
- Keep Return JSX readable: prefer descriptive variable names and short helper functions.
- File naming: `PascalCase` for components, `camelCase` for folder naming — be consistent with repository examples.
- Add app-wide navigation ui in the **`src/features/navigation-ui`** folder.

---

## Accessibility & performance
- Use semantic HTML elements (`nav`, `main`, `header`, `section`, `button`, etc.).
- All interactive elements must have accessible labels (`aria-label`, visible text, or `aria-labelledby`).
- Images must include `alt` attributes.
- Focus states must be visible for keyboard users.
- Avoid heavy client-side work on page load; prefer code-splitting for large components.

---

## When generating code
- **Do** follow the design system above.
- **Do** read existing components to match patterns (naming, folder structure, props style).
- **Do not** introduce new global dependencies (packages) without a short justification or approval.
- **Do not** change the visual theme (fonts, core colors) unless the change is requested and the file is updated.
- When suggesting CSS, reference the CSS variable names and Tailwind classes rather than inline hex values.

---

## Commit & PR expectations for AI-generated code
- If Copilot suggests a multi-file change, keep changes **small and reviewable**.
- Add a short PR description explaining why an AI suggestion was accepted or modified.
- Tag any generated or scaffolded files with a comment: `/* Generated with Copilot — reviewed */`.

---

## Maintenance & evolution
- Keep this file updated when theme tokens, fonts, or major architecture choices change.
- If you add new shared tokens (spacing scale, radii, etc.), define them as CSS variables here.

---

## Final notes
- Be prescriptive: the AI should not invent new design tokens or layout systems.
- Keep the file short and explicit — earlier rules have more weight.


