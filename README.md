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

| Category  | Technologies            |
| --------- | ----------------------- |
| Framework | Next.js 15 (App Router) |
| Language  | TypeScript              |
| Styling   | Tailwind CSS            |
| Animation | Framer Motion, GSAP     |
| Icons     | Lucide React            |
| Theming   | next-themes             |

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

Replace `public/Umair Babar.jpeg` to update the portrait. The project illustrations in `components/ProjectVisual.tsx` are local SVG visuals, so they do not require an external image service.

Update `SITE_CONFIG.url` in constants for production deployment.

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npx vercel
```

## License

MIT

## Motion and visual design

The portfolio opens with a name reveal and split-curtain transition. The intro can
be skipped with its button or Escape, and is bypassed for reduced-motion users.
The hero features a prominent name and a portrait inside a terminal window, with
a smaller workflow terminal below it.

The portfolio also includes rotating role text, portrait parallax, an expertise marquee,
masked section headings, pointer-driven card tilt, animated project diagrams,
filter transitions, skill progress bars, and a scroll-linked experience timeline.
Use the fixed **Motion on / Motion off** control to pause decorative motion. The
site also respects the device's reduced-motion preference and avoids pointer
tracking on touch devices.

`components/MotionPreferences.tsx` coordinates motion preferences;
`components/TiltCard.tsx` provides shared pointer interactions. Fonts are bundled
in `public/fonts` with their licenses and are loaded through `next/font/local`.
Original technology logos are bundled in `public/logos`, with source attribution
and licenses, and shared between the toolkit and relevant skill cards.

Validate changes with:

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
```
