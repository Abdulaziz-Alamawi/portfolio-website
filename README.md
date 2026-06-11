# Abdulaziz Faisal Alamawi — Portfolio Website

Production-grade portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Premium dark mode with glassmorphism design
- 8 fully responsive pages (Home, About, Projects, Skills, Certifications, Leadership, Research, Contact)
- 5 detailed project pages with architecture, features, challenges, and results
- SEO optimized with Open Graph, structured data (JSON-LD), sitemap, and robots.txt
- Smooth page transitions and scroll animations
- Accessible navigation and semantic HTML

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | Shadcn-inspired components |
| Animation | Framer Motion |
| Deployment | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── projects/
│   │   └── [slug]/       # Dynamic project detail pages
│   ├── skills/
│   ├── certifications/
│   ├── leadership/
│   ├── research/
│   ├── contact/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── home/             # Hero, stats, skills preview
│   ├── projects/         # Project cards
│   ├── skills/           # Interactive skills
│   ├── layout/           # Navbar, footer
│   ├── motion/           # Animations
│   └── ui/               # Reusable UI components
├── data/                 # Content data (projects, skills, etc.)
└── lib/                  # Utilities, config, metadata
public/
├── cv/                   # Place your CV PDF here
└── projects/             # Project screenshots
```

## Before Deploying

1. **Add your CV**: Place your PDF at `public/cv/abdulaziz-alamawi-cv.pdf`
2. **Add project screenshots**: Add images to `public/projects/{project-slug}/`
3. **Add OG image**: Add `public/og-image.png` (1200×630 recommended)
4. **Update site URL**: Edit `src/lib/site-config.ts` → `url` field with your Vercel domain

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

### Environment Variables

No environment variables required for basic deployment.

## Customization

- **Content**: Edit files in `src/data/` to update projects, skills, certifications, etc.
- **Theme**: Modify CSS variables in `src/app/globals.css`
- **SEO**: Update `src/lib/site-config.ts` and `src/lib/metadata.ts`
- **Navigation**: Edit `navLinks` in `src/lib/site-config.ts`

## License

Private — © Abdulaziz Faisal Alamawi
