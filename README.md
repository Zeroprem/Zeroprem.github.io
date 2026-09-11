# Premchand Tarange, portfolio

Personal site for a software engineer working on CI/CD and test automation.
Dark, bento-grid layout. Every fact on the page comes from the resume in
`public/Premchand-Tarange-Resume.pdf`.

## Stack

- Next.js 16 (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4
- Motion for entrance, timeline and hover animation
- Phosphor Icons plus Simple Icons for brand marks

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Editing content

All copy, metrics, roles, projects, skills and credentials live in one file:
`src/lib/content.ts`. Change it there and every section updates. No copy is
hard-coded inside components.

To replace the resume PDF, drop a new file at
`public/Premchand-Tarange-Resume.pdf`, or change `profile.resumePath`.

## Deploying to Netlify

`netlify.toml` is already configured. Connect the repository in Netlify and it
picks up the build command, the publish directory and the Next.js runtime
plugin automatically.

After the first deploy, set the real site URL in `src/app/layout.tsx`
(`siteUrl`) so Open Graph, canonical and JSON-LD metadata point at the live
domain.

## Accessibility and motion

- Single dark theme, all text at WCAG AA contrast or better
- Skip link, landmarks, visible focus rings, labelled icon links
- Every animation degrades to static under `prefers-reduced-motion`
