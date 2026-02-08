# Quick Start — Vyra Labs Website

> **Everything you need to know in 5 minutes.**

This guide gets you up to speed on the Vyra Labs website project quickly.

---

## 🎯 What This Is

A high-performance Next.js marketing website for **Vyra Labs** — an elite digital product studio that builds SaaS MVPs, high-performance websites, and custom enterprise tools.

**Goal:** Attract premium clients who value quality over cost, convert visitors into project inquiries.

---

## 📚 Documentation Overview

This project has comprehensive documentation:

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **README.md** | Project overview, setup instructions | First-time setup |
| **BRAND_SYSTEM.md** | Complete brand guidelines | Design decisions, visual identity |
| **IMPLEMENTATION_GUIDE.md** | Developer quick reference | Daily development work |
| **CONTENT_STRATEGY.md** | Messaging & copywriting | Writing content, social posts |

**Start here:** README.md → IMPLEMENTATION_GUIDE.md → BRAND_SYSTEM.md

---

## ⚡ 30-Second Setup

```bash
# Clone and install
git clone [repo-url]
cd vyra-labs
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 🎨 Brand Essentials

### Colors (Minimalist Palette)

```tsx
// Use these Tailwind classes
<div className="bg-brand-blue">      // Primary accent (#0066FF)
<p className="text-gray-700">        // Body text (#404040)
<div className="bg-background">      // White (#FFFFFF)
<div className="border-border">      // Subtle borders (#CCCCCC)
```

**Philosophy:** 90% black/white, 10% blue accent for emphasis.

### Typography

```tsx
<h1>Headline</h1>           // Auto-sized, bold (700)
<p className="text-lg">     // Body large (18-20px)
<p className="text-base">   // Body default (16px)
```

**Font:** Inter via Google Fonts ([view font](https://fonts.google.com/specimen/Inter))

### Spacing (8px Grid)

```tsx
<div className="p-6">      // 24px padding
<div className="mb-8">     // 32px margin
<div className="gap-12">   // 48px gap
```

**Philosophy:** Everything aligns to 8px for visual rhythm.

---

## 📝 Writing Guidelines

### Voice
- **Confident** but not arrogant
- **Direct** but not cold  
- **Technical** but accessible

### Do's ✅
- Be specific: "6-8 weeks" not "quickly"
- Use active voice: "We build" not "Products are built"
- Show proof: "99+ Lighthouse scores" not just "high performance"

### Don'ts ❌
- No buzzwords: synergy, leverage, disruptive
- No jargon: unless explained
- No Title Case: headlines should be sentence case

---

## 🔧 Common Tasks

### Add a New Section

```tsx
// 1. Create component in src/components/sections/
export function NewSection() {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">
        {/* Content */}
      </div>
    </section>
  )
}

// 2. Import and add to src/app/page.tsx
import { NewSection } from '@/components/sections/new-section'
<NewSection />
```

### Update Copy

Find the component in `src/components/sections/`:
- Hero text: [`hero.tsx`](src/components/sections/hero.tsx)
- Services: [`services.tsx`](src/components/sections/services.tsx)
- Values: [`values.tsx`](src/components/sections/values.tsx)
- Contact: [`contact.tsx`](src/components/sections/contact.tsx)

### Change Colors

Edit design tokens in [`globals.css`](src/app/globals.css):

```css
:root {
  --brand-blue: #0066FF;
  --foreground: #0A0A0A;
  /* etc */
}
```

### Update SEO

Edit metadata in [`layout.tsx`](src/app/layout.tsx):

```tsx
export const metadata: Metadata = {
  title: "New Title | Vyra Labs",
  description: "New description...",
  // ...
}
```

---

## 🚀 Key Features

### Performance
- Next.js 15 with App Router
- Image optimization with `next/image`
- Font optimization with `next/font`
- Target: 95+ Lighthouse scores

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered reveals
- Respects `prefers-reduced-motion`

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Tested on iOS, Android, all major browsers

### Accessibility
- WCAG AA compliant
- Semantic HTML
- Keyboard navigation
- Proper ARIA labels

---

## 📦 Tech Stack

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| Next.js 15 | Framework | [nextjs.org](https://nextjs.org) |
| TypeScript | Type safety | [typescriptlang.org](https://www.typescriptlang.org) |
| Tailwind CSS 4 | Styling | [tailwindcss.com](https://tailwindcss.com) |
| Framer Motion | Animations | [framer.com/motion](https://www.framer.com/motion/) |
| Lucide Icons | Icons | [lucide.dev](https://lucide.dev) |

---

## 🎯 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 95+ | [Check] |
| Lighthouse Accessibility | 100 | [Check] |
| First Contentful Paint | < 1.5s | [Check] |
| Largest Contentful Paint | < 2.5s | [Check] |
| Cumulative Layout Shift | < 0.1 | [Check] |

Run audit: `npm run build && npm run lighthouse`

---

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx       ← SEO, metadata, fonts
│   ├── page.tsx         ← Homepage (imports sections)
│   └── globals.css      ← Design tokens, base styles
├── components/
│   ├── sections/        ← Hero, Services, Values, Contact
│   ├── layout/          ← Header, Footer
│   └── ui/              ← Button, reusable UI components
└── lib/
    └── utils.ts         ← Utility functions
```

---

## ✅ Pre-Deployment Checklist

Before pushing to production:

- [ ] All links work (internal and external)
- [ ] Images have alt text
- [ ] Meta tags are set (title, description, OG)
- [ ] Lighthouse score 95+ (performance, accessibility, SEO)
- [ ] Mobile responsive (test on real devices)
- [ ] Keyboard navigation works
- [ ] Forms work and validate properly
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] Type check passes: `npm run type-check`
- [ ] Lint passes: `npm run lint`

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styles Not Updating
- Restart dev server: `Ctrl+C` → `npm run dev`
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### TypeScript Errors
```bash
# Run type check
npm run type-check

# Check specific file
npx tsc --noEmit src/components/sections/hero.tsx
```

### Images Not Loading
- Ensure images are in `/public` directory
- Use relative paths: `/logo.svg` not `./logo.svg`
- Check image format (preferPNG, SVG, WebP)

---

## 📧 Project Contacts

**Technical Questions:** developers@vyralabs.systems
**Brand/Design Questions:** brand@vyralabs.systems
**Content/Copy Questions:** content@vyralabs.systems
**General Questions:** hello@vyralabs.systems

---

## 🔗 Quick Links

- **Production Site:** [vyralabs.systems](https://vyralabs.systems) *(when deployed)*
- **Staging:** [TBD]
- **Figma:** [Design files] *(if available)*
- **Analytics:** [Google Analytics / Plausible]
- **Repository:** [GitHub repo]

---

## 💡 Pro Tips

1. **Use the Implementation Guide** for quick code reference
2. **Check BRAND_SYSTEM.md** before making design decisions
3. **Refer to CONTENT_STRATEGY.md** when writing copy
4. **Test on real devices**, not just browser DevTools
5. **Commit often** with clear messages
6. **Ask questions** — better to clarify than assume

---

## 🎓 Learning Resources

**New to Next.js?**
- [Next.js Tutorial](https://nextjs.org/learn)
- [Next.js Docs](https://nextjs.org/docs)

**New to Tailwind?**
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Playground](https://play.tailwindcss.com)

**New to TypeScript?**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

---

**Ready to dive in? Start with the README.md, then check out IMPLEMENTATION_GUIDE.md for development patterns.**

*Last updated: February 8, 2026*
