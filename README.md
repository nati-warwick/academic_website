# Academic Website Template (Natinael)

This repository is a personal academic website template built with React + Vite and styled with Tailwind CSS.

It is designed as a tab-based portfolio site with sections for:
- Home
- Publications
- Experience
- CV
- Code

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Run Locally

```bash
pnpm install
pnpm dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build

```bash
pnpm lint
pnpm build
pnpm preview
```

## Customize Content

Most editable website content lives in:

- `src/AcademicTabbedWebsiteTemplate.jsx`

Update these top-level objects/arrays:

- `profile`
- `publications`
- `experience`
- `cv`
- `projects`

## Add Profile Photo

1. Put your image in `public/` (example: `public/profile.jpg`)
2. Set `profile.photo` to `"/profile.jpg"` in `src/AcademicTabbedWebsiteTemplate.jsx`

## Add CV PDF

1. Put your CV file in `public/cv.pdf`
2. Keep `cv.file` as `"/cv.pdf"` in `src/AcademicTabbedWebsiteTemplate.jsx`

## Deploy

This is a static frontend and can be deployed to Vercel, Netlify, or GitHub Pages.

For Vercel:

- Build command: `pnpm build`
- Output directory: `dist`
