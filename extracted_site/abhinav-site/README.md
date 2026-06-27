# Abhinav Bajpai — Personal Site

A premium personal brand website built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploying

`dist/` is a fully static site — deploy it anywhere that serves static files:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`. Both auto-detect Vite.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch (or use an action), and make sure to add a `base` setting in `vite.config.js` if hosting under a subpath.
- **Any static host** (S3, Cloudflare Pages, etc.): upload the contents of `dist/` directly.

This is a single-page app with client-side routing (`react-router-dom`). If you deploy somewhere that doesn't automatically rewrite all paths to `index.html`, add a rewrite/fallback rule so routes like `/about` or `/journey` don't 404 on refresh. Vercel and Netlify handle this automatically for Vite + React Router projects; for others, look for an "SPA fallback" or add a `_redirects` / rewrite config.

## Project structure

```
src/
  assets/images/     Photos, book cover, certificate
  components/
    layout/          Navbar, Footer, ScrollToTop
    ui/               Reusable design-system pieces (Button, Card, Reveal, etc.)
  data/
    content.js        SINGLE SOURCE OF TRUTH for all site copy and structured content
  pages/              One file per route
public/
  assets/              Downloadable files (résumé PDF)
```

## Editing content

Almost everything you'd want to update — your bio, experience, achievements, certifications,
journey timeline, project case studies — lives in **`src/data/content.js`**. Edit the values
there and the change will show up everywhere that data is used across the site, automatically.

To update the résumé PDF, replace `public/assets/Abhinav_Bajpai_Resume.pdf` with a new file of
the same name (or update the filename referenced in `src/pages/Resume.jsx`).

To add more photos to the Gallery, drop images into `src/assets/images/` and add them to the
`photos` array in `src/pages/Gallery.jsx`.

## Design system

- **Colors**: defined as CSS custom properties in `src/index.css` (`@theme` block) — graphite/near-black
  base, off-white text, electric blue accent for technology/analytics content, amber/gold accent for
  leadership/achievement content.
- **Type**: Fraunces (display/headings), Inter (body/UI), JetBrains Mono (labels, data, timestamps).
  All self-hosted via `@fontsource` — no external font CDN dependency.
- **Plain color utility classes** (`.text-ink`, `.bg-amber-soft`, `.border-hairline`, etc.) are defined
  directly in `src/index.css` rather than via Tailwind's bracket arbitrary-value syntax
  (`text-[var(--x)]`), which had a selector-escaping bug in this Tailwind v4 setup. Stick to the
  plain classes already defined there for any new components.

## What's still a placeholder

- **Data Analytics projects** (`/projects/analytics`) — no real projects yet; shows an honest
  "in progress" empty state. Add entries to `projects.analytics` in `content.js` once ready.
- **Gallery** — only has 2 real photos right now (the rest are styled placeholder slots). Add more
  to `src/pages/Gallery.jsx` as they become available.
- **Contact form** — has no backend. Submitting it opens the visitor's email client with a
  pre-filled message instead of sending anything server-side. If you want real form submissions,
  wire it up to a service like Formspree, Resend, or a small serverless function.
