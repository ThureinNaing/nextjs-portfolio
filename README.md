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

### 3) Set up EmailJS for Contact Form (Optional)

The contact form uses EmailJS to send emails. To enable it:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (e.g., Gmail)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
4. Get your Service ID, Template ID, and Public Key
5. Update `.env.local` with your values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4) Run the development server

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
