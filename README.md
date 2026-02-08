# Vyra Labs — Website

> **Elite digital product studio. Where design agencies end and engineering firms begin.**

This repository contains the Vyra Labs marketing website—a high-performance Next.js application showcasing world-class design and engineering excellence.

---

## 🎯 Overview

**Live Site:** [vyralabs.systems](https://vyralabs.systems) *(placeholder)*
**Framework:** Next.js 15 (App Router)
**Styling:** Tailwind CSS 4.0
**Animations:** Framer Motion
**TypeScript:** Full type safety

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/vyralabs/website.git
cd website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
vyra-labs/
├── public/                  # Static assets
│   ├── icon.svg            # Favicon & app icon
│   ├── logo.svg            # Full logo
│   └── og-image.png        # Social share image (1200x630)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles, design tokens
│   │   ├── layout.tsx      # Root layout, metadata, fonts
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx  # Site header with navigation
│   │   │   └── footer.tsx  # Site footer
│   │   ├── sections/
│   │   │   ├── hero.tsx    # Hero section
│   │   │   ├── services.tsx # Services/offerings
│   │   │   ├── values.tsx  # Value propositions
│   │   │   └── contact.tsx # Contact/CTA section
│   │   ├── ui/
│   │   │   └── button.tsx  # Button component with variants
│   │   └── 3d/
│   │       └── spline-scene.tsx # 3D elements (if used)
│   └── lib/
│       └── utils.ts        # Utility functions
├── BRAND_SYSTEM.md         # Complete brand guidelines
├── IMPLEMENTATION_GUIDE.md # Developer quick reference
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## 🎨 Brand System

This project implements a comprehensive brand system documented in:
- **`BRAND_SYSTEM.md`** — Full brand guidelines (colors, typography, voice, messaging)
- **`IMPLEMENTATION_GUIDE.md`** — Quick reference for developers

### Design Principles

1. **Minimalist Excellence** — Let whitespace and typography create impact
2. **Performance First** — Sub-second load times, 95+ Lighthouse scores
3. **Accessible by Default** — WCAG AA compliance minimum
4. **Developer-Friendly** — Clean, maintainable, documented code

### Key Technologies

- **Next.js 15** — App Router, Server Components, optimized performance
- **Tailwind CSS 4** — Utility-first styling with custom design tokens
- **Framer Motion** — Smooth, performant animations
- **Inter Font** — Via Google Fonts with optimal loading
- **Lucide Icons** — Clean, consistent iconography

---

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

### Code Style

This project follows strict TypeScript and React best practices:
- Functional components with hooks
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Component-driven architecture
- Mobile-first responsive design

---

## 🎯 Performance Targets

### Core Web Vitals
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

### Lighthouse Scores
- Performance: **95+**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

### Optimization Techniques
- Image optimization with Next.js `<Image>`
- Font optimization with `next/font`
- Code splitting and lazy loading
- Minimal JavaScript payload
- Static generation where possible

---

## ♿ Accessibility

This site is built to WCAG AA standards:
- Semantic HTML throughout
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance
- Focus indicators on all interactive elements
- Respects `prefers-reduced-motion`

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker containers
- Node.js servers

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

---

## 📄 License

&copy; 2026 Vyra Labs. All rights reserved.

This code is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📧 Contact

**Website:** [vyralabs.systems](https://vyralabs.systems)
**Email:** hello@vyralabs.systems
**LinkedIn:** [linkedin.com/company/vyralabs](https://linkedin.com/company/vyralabs)
**Twitter:** [@vyralabs](https://twitter.com/vyralabs)

---

## 🙏 Acknowledgements

Built with:
- [Next.js](https://nextjs.org) by Vercel
- [Tailwind CSS](https://tailwindcss.com) by Tailwind Labs
- [Framer Motion](https://www.framer.com/motion/) by Framer
- [Inter Font](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- [Lucide Icons](https://lucide.dev) by Lucide Community

---

*For developers: See `IMPLEMENTATION_GUIDE.md` for quick reference on implementing the brand system.*
