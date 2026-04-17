# Thurein Naing Portfolio

A production-ready personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.
The site highlights professional experience, selected projects, technical skills, and contact information with a responsive, animated UI.

## Highlights

- Modern single-page portfolio experience with smooth section navigation
- Animated interactions powered by Framer Motion
- SEO-ready metadata configuration, sitemap, and robots support
- Reusable component architecture with App Router conventions
- Mobile-first responsive layout for phones, tablets, and desktop devices

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- pnpm

## Project Structure

- `app/(root)/page.tsx` - Main landing page composition
- `app/layout.tsx` - Global layout and SEO metadata
- `app/sitemap.ts` - Sitemap generation
- `app/robots.ts` - Robots configuration
- `components/HeroSection.tsx` - Intro and hero content
- `components/ShowCaseSection.tsx` - Featured project cards
- `components/TechStack.tsx` - Skills and technology stack
- `components/ExperienceSection.tsx` - Professional timeline
- `components/AboutMe.tsx` - About and contact section

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This value is used for canonical metadata, Open Graph URLs, sitemap, and robots output.

### 3) Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production

Build and run the production server locally:

```bash
pnpm build
pnpm start
```

## Scripts

- `pnpm dev` - Start local development server
- `pnpm build` - Build production assets
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

## Contact

- Email: `thuureinnnaingg412@gmail.com`
- GitHub: [github.com/ThureinNaing](https://github.com/ThureinNaing)
