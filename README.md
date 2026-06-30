# Umair Babar — Portfolio

A modern, premium personal portfolio website for **Umair Babar**, Machine Learning Engineer. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- **Premium Design** — Minimal, futuristic aesthetic inspired by Vercel, Linear, Stripe, and Apple
- **Dark / Light Mode** — Theme toggle with smooth transitions
- **Rich Animations** — Framer Motion + GSAP: typing effect, parallax, tilt cards, scroll progress, cursor glow, loading screen
- **Full Sections** — Hero, About, Skills, Projects, Experience, Education, Achievements, Tech Stack, Contact
- **SEO Ready** — Metadata, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- **Responsive** — Mobile-first, accessible (ARIA labels), optimized images

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React |
| Theming | next-themes |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/              # Next.js App Router (layout, page, SEO)
components/       # Reusable UI components
sections/         # Page section components
hooks/            # Custom React hooks
lib/              # Utilities and animation variants
constants/        # Site content and configuration
types/            # TypeScript type definitions
public/           # Static assets
styles/           # Global styles (app/globals.css)
```

## Customization

Edit `constants/index.ts` to update:

- Personal info (name, email, social links)
- Skills, projects, experience, education
- Achievement stats and tech stack

Replace the profile image URL in `sections/Hero.tsx` and add your resume to `public/resume.pdf`.

Update `SITE_CONFIG.url` in constants for production deployment.

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npx vercel
```

## License

MIT
