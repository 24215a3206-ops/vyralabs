# Vyra Labs — Implementation Guide

> **Quick reference for developers implementing the Vyra Labs brand system.**

This guide provides practical implementation details for the brand system defined in `BRAND_SYSTEM.md`.

---

## Quick Start

### 1. Colors in Tailwind

The brand colors are already configured in `globals.css` and available as Tailwind utilities:

```tsx
// Brand Blue (Primary Accent)
<button className="bg-brand-blue hover:bg-brand-blue-hover">

// Grayscale
<p className="text-gray-700">        // Tertiary text
<div className="bg-subtle">           // Light background
<div className="border border-border"> // Subtle borders

// Semantic (use sparingly)
<span className="text-success">Success message</span>
<span className="text-error">Error message</span>
```

### 2. Typography

Headers and body text follow the brand scale automatically via `globals.css`:

```tsx
// Headlines - Auto-sized with bold weight
<h1>Hero Heading</h1>          // 48-72px, weight 700
<h2>Section Heading</h2>       // 36-48px, weight 700
<h3>Subsection</h3>            // 28-32px, weight 600

// Body text - Regular weight, 1.6 line height
<p className="text-lg">Large intro text</p>    // 18-20px
<p className="text-base">Default body</p>       // 16px
<p className="text-sm">Secondary text</p>       // 14px
<p className="text-xs">Captions, labels</p>     // 12px
```

### 3. Spacing (8px Grid)

Use Tailwind's spacing scale aligned to 8px increments:

```tsx
<div className="p-8">        // 32px padding
<div className="gap-6">      // 24px gap
<div className="mb-12">      // 48px margin bottom
<div className="py-32">      // 128px vertical padding (sections)
```

**Common Section Spacing:**
- Mobile: `py-20` (80px)
- Desktop: `py-32 md:py-40` (128px-160px)

---

## Component Patterns

### Button Component

The `Button` component in `/src/components/ui/button.tsx` has these variants:

```tsx
import { Button } from '@/components/ui/button'

// Primary CTA (Brand Blue)
<Button variant="accent" size="md">
  Get Started
</Button>

// Secondary
<Button variant="secondary" size="md">
  Learn More
</Button>

// Ghost (minimal)
<Button variant="ghost" size="md">
  View Details
</Button>

// Outline
<Button variant="outline" size="md">
  Contact Us
</Button>

// With icon
import { ArrowRight } from 'lucide-react'
<Button variant="accent">
  Continue
  <ArrowRight className="ml-2 w-4 h-4" />
</Button>
```

**Sizes:**
- `sm`: h-9 px-4 text-xs
- `md`: h-11 px-6 text-sm (default)
- `lg`: h-12 px-8 text-base

### Cards

Standard card pattern with subtle borders and hover states:

```tsx
<div className="bg-background border border-border rounded-xl p-8 
                hover:bg-subtle transition-colors duration-300">
  <h3 className="text-lg font-semibold mb-3">Card Title</h3>
  <p className="text-gray-700">Card description text</p>
</div>
```

### Section Layout

Standard section structure:

```tsx
<section className="py-32 md:py-40 bg-background">
  <div className="container mx-auto px-6 md:px-16 max-w-7xl">
    <div className="mb-20 max-w-2xl">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]">
        Section Heading
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Section introduction text
      </p>
    </div>
    
    {/* Section content */}
  </div>
</section>
```

---

## Animation Patterns

Using Framer Motion for scroll-triggered animations:

### Fade In

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
>
  Content
</motion.div>
```

### Staggered Children

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 0.03, 0.26, 1]
    }}
  >
    {item.content}
  </motion.div>
))}
```

**Standard Easing:**
```tsx
ease: [0.22, 0.03, 0.26, 1]  // Brand standard cubic-bezier
```

**Standard Durations:**
- Fast interactions: `200ms`
- Default transitions: `300ms`
- Scroll animations: `500ms`
- Page transitions: `600ms`

---

## Messaging Guidelines

### Headlines

**DO:**
- Use sentence case: "Where vision meets velocity"
- Keep under 10 words
- Lead with benefit or outcome
- Use action verbs

**DON'T:**
- Use Title Case: "Where Vision Meets Velocity"
- Use ALL CAPS (except abbreviations)
- End with punctuation (unless question)
- Use clichés: "cutting-edge," "next-generation"

### Body Copy

**DO:**
- Write in active voice: "We build" vs "Products are built"
- Be specific: "6-8 weeks" vs "quickly"
- Use contractions: "we're" vs "we are"
- Focus on benefits: "Save 10 hours weekly" vs "Automated workflows"

**DON'T:**
- Use buzzwords: "synergy," "leverage," "disruptive"
- Passive voice: "is created by"
- Jargon without explanation
- Vague claims: "world-class" without proof

### CTAs (Call to Action)

**Strong CTAs:**
- ✅ "Start your project"
- ✅ "Book a call"
- ✅ "Get started"
- ✅ "Let's build together"

**Weak CTAs:**
- ❌ "Click here"
- ❌ "Learn more" (overused)
- ❌ "Submit"
- ❌ "Continue"

---

## Responsive Patterns

### Breakpoints

```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Tailwind breakpoints (configured in tailwind.config)
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Small desktops
xl: 1280px  // Desktops
2xl: 1536px // Large desktops
```

### Common Responsive Patterns

**Text Sizing:**
```tsx
<h1 className="text-6xl md:text-8xl">
<p className="text-base md:text-lg">
```

**Spacing:**
```tsx
<div className="px-6 md:px-16">     // Padding
<div className="py-20 md:py-32">    // Sections
<div className="gap-6 md:gap-12">   // Grid gaps
```

**Layout:**
```tsx
// Stack on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row">

// Column count
<div className="grid grid-cols-1 md:grid-cols-3">
```

---

## SEO Implementation

### Page Metadata Template

In each page's layout or metadata export:

```tsx
export const metadata: Metadata = {
  title: "Page Title | Vyra Labs",
  description: "Compelling description under 155 characters with primary keyword and CTA.",
  keywords: ["primary keyword", "secondary keyword", "long-tail keyword"],
  openGraph: {
    title: "Page Title | Vyra Labs",
    description: "Same or similar to meta description",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title | Vyra Labs",
    description: "Same or similar to meta description",
    images: ['/og-image.png'],
  },
}
```

### Semantic HTML

```tsx
// Use proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>

// Semantic elements
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>

// Accessible links
<a href="#section" aria-label="Navigate to services section">
```

---

## Accessibility Checklist

### Color Contrast
- [ ] All text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] Interactive elements have 3:1 minimum contrast
- [ ] Color isn't the only indicator of state

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Logical tab order
- [ ] Visible focus indicators (2px blue ring)
- [ ] Skip links present

### Content
- [ ] All images have meaningful alt text
- [ ] Form inputs have associated labels
- [ ] Error messages are clear and helpful
- [ ] Proper heading hierarchy (H1 → H2 → H3)

### Motion
- [ ] Respect `prefers-reduced-motion`
- [ ] No auto-play without controls
- [ ] No flashing content

### Forms
```tsx
// Proper label association
<label htmlFor="email" className="text-sm font-medium mb-2 block">
  Email Address
</label>
<input 
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" className="text-error text-sm">
  Please enter a valid email
</span>
```

---

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Techniques
```tsx
// Image optimization
import Image from 'next/image'
<Image 
  src="/hero.png" 
  alt="Description"
  width={1920}
  height={1080}
  priority // For above-fold images
  loading="lazy" // For below-fold images
/>

// Font optimization (already configured)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Prevents FOIT (Flash of Invisible Text)
  weight: ['300', '400', '500', '600', '700'],
});
```

---

## Common Mistakes to Avoid

### ❌ DON'T
```tsx
// Hardcoded colors
<div className="bg-[#0066FF]">

// Inconsistent spacing (off 8px grid)
<div className="p-5 mb-7">

// Missing hover states
<button className="bg-brand-blue">

// Passive voice in copy
"Products are built by our team"

// Vague CTAs
<button>Click Here</button>

// Title Case Headlines
<h1>Where Vision Meets Velocity</h1>

// Missing semantic HTML
<div onClick={handleClick}>Click me</div>
```

### ✅ DO
```tsx
// Use design tokens
<div className="bg-brand-blue">

// Stick to 8px grid
<div className="p-6 mb-8">

// Include hover and focus states
<button className="bg-brand-blue hover:bg-brand-blue-hover 
                   focus:ring-2 focus:ring-brand-blue">

// Active voice
"We build products"

// Strong, specific CTAs
<button>Start your project</button>

// Sentence case headlines
<h1>Where vision meets velocity</h1>

// Proper semantic elements
<button onClick={handleClick}>Click me</button>
```

---

## Testing Checklist

### Before Deployment
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS Safari and Android Chrome
- [ ] Verify responsive breakpoints (mobile, tablet, desktop)
- [ ] Check all links work
- [ ] Validate forms and error states
- [ ] Run Lighthouse audit (aim for 95+ in all categories)
- [ ] Test keyboard navigation
- [ ] Verify color contrast with browser tools
- [ ] Check meta tags with social media preview tools

### Tools
- **Performance:** Chrome DevTools, Lighthouse
- **Accessibility:** axe DevTools, WAVE
- **Contrast:** WebAIM Contrast Checker
- **SEO:** Google Search Console, Screaming Frog
- **Cross-browser:** BrowserStack, LambdaTest

---

## Quick Reference Links

- **Brand System:** `BRAND_SYSTEM.md`
- **Color Variables:** `src/app/globals.css`
- **Components:** `src/components/`
- **Typography:** Inter font via Google Fonts
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

---

## Need Help?

**Technical Questions:** developers@vyralabs.systems
**Brand Questions:** brand@vyralabs.systems
**General Questions:** hello@vyralabs.systems

---

*Last Updated: February 8, 2026*
