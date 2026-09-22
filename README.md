# Nicole Tal Portfolio Website

A modern, professional portfolio website for Nicole Tal, an AI-savvy instructional designer specializing in AI integration for learning and training.

## Features

- **Modern Design**: Clean, professional aesthetic using custom color palette
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper metadata and structured content for search engines
- **AI Focus**: Highlighting expertise in AI integration for education and training
- **Contact Form**: Client-side form validation with submission handling
- **Smooth Navigation**: Sticky navigation with smooth scrolling

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Typography**: Aptos font family via Google Fonts
- **Language**: TypeScript for type safety
- **Deployment Ready**: Optimized for Vercel deployment

## Color Palette

The official NATLearning brand colors. See `src/app/globals.css` for the full derived token set (surfaces, lines, tint/deep pairs).

| Color | Hex | Use |
| --- | --- | --- |
| Sage | `#A3B18A` | Accents, highlights, icons |
| Olive | `#6B705C` | Secondary headings, buttons |
| Warm neutral | `#DAD7CD` | Backgrounds, panels, dividers |
| Navy-black | `#0D1F2D` | Primary text, dark backgrounds |

One extra tone, `--color-additional` (`#414C47`, an olive/navy blend), isn't part of the official table — it's used where the UI needs a fifth accent (nav hover, eyebrow labels, a third icon color) so it doesn't just repeat the button color.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page (metadata + layout)
│   ├── contact/ContactForm.tsx     # Client-side contact form
│   ├── portfolio/page.tsx          # Portfolio & case studies
│   ├── portfolio/portfolio-data.ts # Project & category data
│   ├── portfolio/PortfolioTabs.tsx # Filterable project grid
│   ├── services/page.tsx           # Services overview
│   ├── globals.css                 # Global styles & custom properties
│   ├── icon.png / apple-icon.png   # App icons (auto-detected by Next.js)
│   ├── favicon.ico                 # Browser tab favicon
│   ├── layout.tsx                  # Root layout with SEO metadata
│   └── page.tsx                    # Homepage with hero section
├── components/
│   └── Navigation.tsx       # Responsive navigation component
└── public/
    └── natlearning-logo.png # Full logo used in the nav header
```

## Customization

### Adding Your Headshot

Replace the placeholder in the hero section by:
1. Add your image to `/public/nicole-headshot.png`
2. Update the hero section in `src/app/page.tsx` to use the actual image

### Calendly Integration

Replace the Calendly placeholder in `src/app/contact/page.tsx` with your actual Calendly embed code.

### Contact Form Backend

The contact form currently has client-side validation only. To make it functional:
1. Set up a backend API route in `src/app/api/contact/route.ts`
2. Update the form submission handler in the contact page
3. Configure email service (SendGrid, Nodemailer, etc.)

## Content Focus

The website emphasizes:
- AI integration for learning and training
- Instructional design services  
- Chatbot development
- Training program optimization
- Custom AI solutions for education
- Change management for AI adoption

## SEO Features

- Optimized page titles and descriptions
- Structured metadata for all pages
- Semantic HTML structure
- Performance optimizations
- Social media meta tags

## Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the domain to `idnicoletal.com`
4. Deploy automatically with each push

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Performance

- Core Web Vitals optimized
- Image optimization with Next.js
- Font optimization
- Minimal JavaScript bundle
- Fast page loads
