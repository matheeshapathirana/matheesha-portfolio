# Matheesha Pathirana · Portfolio Website

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)

A modern one-page portfolio derived from a Figma concept and implemented with React, TypeScript, and Tailwind CSS. It highlights experience, selected work, and contact details without extra clutter.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Smooth anchor navigation plus a simple mobile menu.
- Highlight cards/carousels for projects and experience.
- Contact + social links surfaced near the footer.
- Accessible Radix UI primitives with consistent focus states.

## Tech Stack

- React 18 + Vite 6
- TypeScript 5
- Tailwind CSS 3
- Radix UI wrappers, Lucide icons, Recharts visualizations

## Getting Started

Prereqs: Node.js 18+ and npm 9+.

```bash
git clone <repository-url>
cd matheesha-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` for the dev server.

### Scripts
- `npm i` - Install node packages.
- `npm run dev` – Vite dev server with HMR.
- `npm run build` – Production bundle in `dist/`.

## Project Structure

```
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   ├── imports/
│   └── styles/
├── vite.config.ts
└── README.md
```

## Deployment

Run `npm run build`, then host the `dist/` directory on any static provider (Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc.).

## Attributions

- Design source: internal Figma file (see `src/Attributions.md` for full design references).
- Icons by [Lucide](https://lucide.dev/) under ISC.
- UI primitives powered by [Radix UI](https://www.radix-ui.com/).

## License

This codebase is private and not licensed for public distribution or reuse.

## Author

**Matheesha Pathirana** – Back-end Developer & creator of this portfolio.