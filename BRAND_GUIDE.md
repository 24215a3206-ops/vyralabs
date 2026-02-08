# Vyra Labs Brand Implementation

This document outlines how the Vyra Labs brand has been implemented across the website.

## Brand Colors

### Primary Colors

```css
--foreground: #0A0A0A      /* Brand Black */
--background: #FFFFFF       /* White */
--brand-blue: #0066FF       /* Brand Blue - Primary Accent */
--brand-blue-hover: #0052CC /* Brand Blue Hover State */
```

### Neutral Gray Scale

```css
--gray-900: #1A1A1A  /* Secondary text */
--gray-700: #404040  /* Tertiary text */
--gray-500: #808080  /* Disabled states */
--gray-300: #CCCCCC  /* Borders, dividers */
--gray-100: #F5F5F5  /* Backgrounds */
```

### Accent Palette (Use Sparingly)

```css
--success: #00C853
--warning: #FFB300
--error: #E53935
--premium: #6200EA
```

## Typography

### Font Family

**Primary:** Inter (Loaded via Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Typography Hierarchy

```css
H1/Display: 48-72px, Weight 700, Line height 1.1, Letter spacing -0.02em
H2: 36-48px, Weight 700, Line height 1.2, Letter spacing -0.02em
H3: 28-32px, Weight 600, Line height 1.3, Letter spacing -0.01em
H4: 20-24px, Weight 600, Line height 1.4, Letter spacing -0.01em

Body Large: 18-20px, Weight 400, Line height 1.6
Body Regular: 16px, Weight 400, Line height 1.6
Body Small: 14px, Weight 400, Line height 1.5
Caption: 12px, Weight 400, Line height 1.4
```

## Layout System

### Grid System

- **Base unit:** 8px
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 96, 128px
- **Max content width:** 1200px
- **Columns:** 12-column grid
- **Gutters:** 24px (mobile), 32px (tablet), 48px (desktop)

## UI Components

### Buttons

**Variants:**

1. **Primary** - Black background, white text
2. **Secondary** - Light gray background, black text, border
3. **Outline** - Transparent, bordered
4. **Ghost** - Transparent, hover background
5. **Accent** - Brand blue background, white text

**Sizing:**
- Small: h-9 px-4 text-xs
- Medium: h-11 px-6 text-sm
- Large: h-12 px-6 text-sm

### Interactions

- **Transition duration:** 200ms
- **Easing:** ease-in-out
- **Button active state:** scale-[0.98]
- **Focus ring:** 2px brand-blue with 2px offset

## Brand Voice

### Key Messages

1. **Primary Message:**
   "We build modern digital products with founder-level clarity and engineering precision."

2. **Quality over Volume:**
   "We only take on select projects each quarter to maintain our quality standards."

3. **Business Focus:**
   "We prioritize business value over technical vanity. If it doesn't move the needle, we don't build it."

4. **Reliability:**
   "We write code that your future team will thank us for."

### Writing Guidelines

**Do:**
- Use active voice, present tense
- Keep sentences short (15-20 words avg)
- Be specific with numbers and metrics
- Show concrete value

**Don't:**
- Use buzzwords ("synergy", "paradigm shift", "disruptive")
- Use tech clichés ("rockstar", "ninja", "cutting-edge")
- Make vague or exaggerated claims
- Use title case in headlines

## Services

### 1. Website Development
**Keywords:** Performance, conversion, SEO
**Description:** High-performance marketing sites that convert. Built with Next.js for speed and SEO.

### 2. SaaS MVPs
**Keywords:** Rapid, scalable, architecture
**Description:** Rapid prototyping and scalable architecture. Ship your MVP in 6 weeks, not 6 months.

### 3. Internal Tools
**Keywords:** Streamline, custom, workflow
**Description:** Streamline operations with custom dashboards and admin panels tailored to your workflow.

## Differentiators

### 1. Quality over volume
We only take on select projects each quarter to maintain our quality standards. No assembly lines, no junior developers learning on your dime.

### 2. Business focus
We prioritize business value over technical vanity. If it doesn't move the needle, we don't build it. Every feature ships with ROI clarity.

### 3. Reliability
We write code that your future team will thank us for. Clean, maintainable, and documented. Weekly sprints and regular updates—we ship features, not excuses.

## Social Media

**Primary Platform:** LinkedIn (company updates, thought leadership)
**Secondary Platform:** Twitter/X (quick insights, industry commentary)

**Social Links:**
- LinkedIn: https://linkedin.com/company/vyralabs
- Twitter: https://twitter.com/vyralabs
- Email: hello@vyralabs.systems

## File Structure

```
src/
├── app/
│   ├── globals.css         # Brand colors, typography, global styles
│   ├── layout.tsx          # Metadata, SEO, page structure
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/
│   │   ├── header.tsx      # Navigation
│   │   └── footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── hero.tsx        # Hero with primary message
│   │   ├── services.tsx    # Three service offerings
│   │   ├── values.tsx      # Three differentiators
│   │   └── contact.tsx     # CTA section
│   └── ui/
│       └── button.tsx      # Button component with variants
```

## Usage Examples

### Using Brand Colors in Tailwind

```tsx
// Brand Blue accent
<div className="bg-brand-blue text-white">

// Gray scale
<p className="text-gray-700">

// Hover states
<button className="hover:bg-brand-blue-hover">
```

### Typography Classes

```tsx
// Headlines use bold weight (700)
<h1 className="text-6xl font-bold tracking-[-0.03em]">

// Body text uses regular weight (400)  
<p className="text-lg text-gray-700 leading-relaxed">

// Captions
<span className="text-xs text-gray-500 uppercase tracking-wide">
```

### Using Button Variants

```tsx
import { Button } from '@/components/ui/button'

// Primary CTA (Brand Blue)
<Button variant="accent">Get started</Button>

// Secondary action
<Button variant="ghost">Learn more</Button>

// Form submit
<Button variant="primary">Submit</Button>
```

## Animation Guidelines

- **Performance target:** 60fps minimum
- **Fade duration:** 200ms
- **Slide duration:** 300ms
- **Easing:** cubic-bezier(0.22, 0.03, 0.26, 1)
- **Respect prefers-reduced-motion**

## Accessibility

- **Color contrast:** All combinations meet WCAG AA (4.5:1)
- **Focus indicators:** Visible 2px ring on all interactive elements
- **Font size minimum:** 12px (captions only)
- **Touch targets:** Minimum 44x44px
- **Alt text:** Required for all images
- **Semantic HTML:** Use proper heading hierarchy

## Maintenance

### Review Cycle
- **Minor updates:** As needed
- **Major review:** Annually
- **Full rebrand:** 5-7 years or market shift

### What Can Change
- Color values (slight adjustments)
- Typography weights/sizes
- Photography style direction
- Messaging emphasis

### What Should Stay Consistent
- Logo fundamental structure
- Core color palette (#0A0A0A, #0066FF)
- Brand personality (Modern, Precise, Trustworthy)
- Value proposition

---

**Last Updated:** February 7, 2026
**Version:** 1.0
**Maintained By:** Vyra Labs Development Team
