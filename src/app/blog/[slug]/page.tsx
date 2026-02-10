import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

interface BlogPost {
    title: string
    date: string
    category: string
    readTime: string
    author: string
    content: string
    excerpt: string
}

const blogPosts: Record<string, BlogPost> = {
    'mvp-development-checklist': {
        title: 'The Complete MVP Development Checklist for 2026',
        date: '2026-02-08',
        category: 'Product Development',
        readTime: '8 min read',
        author: 'Vyra Labs Team',
        excerpt: 'A comprehensive guide to building and launching your minimum viable product without wasting time or resources.',
        content: `
            <h2>Why Most MVPs Fail — And How Yours Won&rsquo;t</h2>
            <p>Building an MVP isn&rsquo;t about shipping the bare minimum. It&rsquo;s about identifying the core value hypothesis, validating it with real users, and iterating faster than your competitors. After launching 50+ MVPs at Vyra Labs, here&rsquo;s the exact checklist we use.</p>
            
            <h3>Phase 1: Discovery &amp; Validation (Week 1-2)</h3>
            <ul>
                <li><strong>Define your core value proposition</strong> &mdash; What is the one thing your product does better than anything else?</li>
                <li><strong>Identify your ideal user</strong> &mdash; Create a detailed persona with pain points, goals, and behaviors.</li>
                <li><strong>Map the user journey</strong> &mdash; Sketch the critical path from signup to &ldquo;aha moment.&rdquo;</li>
                <li><strong>Validate demand</strong> &mdash; Talk to 20+ potential users before writing a single line of code.</li>
                <li><strong>Define success metrics</strong> &mdash; Pick 3 KPIs that prove product-market fit.</li>
            </ul>

            <h3>Phase 2: Architecture &amp; Design (Week 2-3)</h3>
            <ul>
                <li><strong>Choose your tech stack wisely</strong> &mdash; Optimize for speed-to-market, not theoretical perfection. We recommend Next.js + PostgreSQL + Vercel for most SaaS MVPs.</li>
                <li><strong>Design the data model</strong> &mdash; Get this right early. Schema changes are expensive later.</li>
                <li><strong>Create high-fidelity wireframes</strong> &mdash; Skip low-fi. Go straight to clickable prototypes.</li>
                <li><strong>Plan your authentication flow</strong> &mdash; Use Auth.js, Clerk, or Supabase Auth.</li>
                <li><strong>Set up CI/CD from day one</strong> &mdash; Automated deploys save hundreds of hours over the project lifecycle.</li>
            </ul>

            <h3>Phase 3: Build &amp; Ship (Week 3-6)</h3>
            <ul>
                <li><strong>Build the happy path first</strong> &mdash; Get the core loop working end-to-end before handling edge cases.</li>
                <li><strong>Ship to staging daily</strong> &mdash; Continuous deployment catches issues early and keeps momentum.</li>
                <li><strong>Implement analytics from day one</strong> &mdash; You can&rsquo;t improve what you don&rsquo;t measure.</li>
                <li><strong>Write tests for critical paths only</strong> &mdash; Don&rsquo;t aim for 100% coverage in an MVP. Test what matters.</li>
                <li><strong>Get real users testing by week 4</strong> &mdash; Beta testers are your most valuable asset.</li>
            </ul>

            <h3>Phase 4: Launch &amp; Iterate (Week 6-8)</h3>
            <ul>
                <li><strong>Soft launch to a small audience</strong> &mdash; Iron out bugs with 50-100 users before going wide.</li>
                <li><strong>Set up error monitoring</strong> &mdash; Sentry or similar. Know about bugs before your users report them.</li>
                <li><strong>Create a feedback loop</strong> &mdash; In-app feedback widgets, user interviews, analytics dashboards.</li>
                <li><strong>Plan your first 3 iterations</strong> &mdash; Based on real user data, not assumptions.</li>
            </ul>

            <h3>The Bottom Line</h3>
            <p>An MVP is not a crappy version of your product. It&rsquo;s the smartest version &mdash; one that validates your biggest assumptions with the least effort. Follow this checklist and you&rsquo;ll ship something users actually want, on time and within budget.</p>
        `
    },
    'nextjs-performance-optimization': {
        title: '10 Next.js Performance Optimizations That Actually Matter',
        date: '2026-02-05',
        category: 'Technical',
        readTime: '12 min read',
        author: 'Vyra Labs Team',
        excerpt: 'Practical tips to achieve 99+ Lighthouse scores and sub-second load times for your Next.js applications.',
        content: `
            <h2>Why Performance Is a Business Metric</h2>
            <p>Every 100ms of latency costs Amazon 1% in sales. Google found that a 0.5-second delay in search results caused a 20% drop in traffic. Performance isn&rsquo;t just a technical concern &mdash; it directly impacts revenue, SEO rankings, and user satisfaction.</p>

            <h3>1. Use Server Components by Default</h3>
            <p>Next.js 15+ makes Server Components the default. This means less JavaScript shipped to the browser, faster initial page loads, and better SEO. Only add &lsquo;use client&rsquo; when you need interactivity.</p>

            <h3>2. Optimize Images with next/image</h3>
            <p>The next/image component automatically serves WebP/AVIF formats, lazy-loads below-the-fold images, and prevents Cumulative Layout Shift. Always specify width and height.</p>

            <h3>3. Implement Route-Level Code Splitting</h3>
            <p>Next.js automatically code-splits by route, but heavy components within a page should use dynamic() imports. Modal dialogs, rich text editors, and chart libraries are prime candidates.</p>

            <h3>4. Cache Aggressively with ISR</h3>
            <p>Incremental Static Regeneration lets you serve static pages while revalidating in the background. For most content pages, a 1-hour revalidation is the sweet spot.</p>

            <h3>5. Minimize Client-Side JavaScript</h3>
            <p>Use the Next.js Bundle Analyzer to identify large dependencies. Replace heavy libraries with lighter alternatives. Every kilobyte matters on mobile networks.</p>

            <h3>6. Preload Critical Resources</h3>
            <p>Use next/font for self-hosted fonts. Preload critical CSS and above-the-fold images. Every external request you eliminate saves 50-200ms.</p>

            <h3>7. Optimize Third-Party Scripts</h3>
            <p>Load analytics scripts with next/script using the afterInteractive or lazyOnload strategy. Never let a third-party script block your page render.</p>

            <h3>8. Use Edge Runtime for API Routes</h3>
            <p>For simple API routes, the Edge Runtime provides sub-millisecond cold starts and global distribution. Perfect for auth checks, redirects, and feature flags.</p>

            <h3>9. Implement Proper Caching Headers</h3>
            <p>Set Cache-Control headers for static assets (1 year), API responses (vary by freshness), and HTML pages (short TTL with stale-while-revalidate).</p>
            
            <h3>10. Monitor Real User Metrics</h3>
            <p>Lighthouse scores are synthetic. What matters is real user performance: Core Web Vitals from actual visitors. Use Vercel Analytics or web-vitals to track real performance.</p>

            <h3>The Payoff</h3>
            <p>These optimizations typically move a Next.js app from a 60-70 Lighthouse score to 95+. Real users experience faster loads, which directly improves engagement and conversion rates.</p>
        `
    },
    'saas-tech-stack-2026': {
        title: 'Choosing the Right SaaS Tech Stack in 2026',
        date: '2026-02-01',
        category: 'Startup Growth',
        readTime: '10 min read',
        author: 'Vyra Labs Team',
        excerpt: 'An opinionated guide to selecting technologies that will scale with your startup from MVP to Series A.',
        content: `
            <h2>The Stack That Ships</h2>
            <p>Choosing a tech stack is one of the most consequential decisions a startup makes. Pick wrong and you&rsquo;ll spend months rewriting. Pick right and your technology becomes a competitive advantage.</p>

            <h3>Frontend: Next.js + TypeScript + Tailwind CSS</h3>
            <p>This trio is the gold standard for SaaS frontends. Next.js gives you SSR, API routes, and Server Components. TypeScript catches bugs before production. Tailwind eliminates CSS debates.</p>

            <h3>Backend: Node.js or Python</h3>
            <p><strong>Node.js</strong> if your team is JavaScript-heavy. Shared language reduces context-switching. Express or Fastify for APIs, Prisma for database access.</p>
            <p><strong>Python</strong> if you&rsquo;re building ML/AI components. FastAPI is excellent, and the data science ecosystem is unmatched.</p>

            <h3>Database: PostgreSQL (Almost Always)</h3>
            <p>PostgreSQL handles relational data, JSON documents, full-text search, and geospatial queries. Start here. Add Redis only when you need caching and real-time features.</p>

            <h3>Authentication: Don&rsquo;t Build Your Own</h3>
            <p>Use Clerk, Auth.js, or Supabase Auth. Authentication is a solved problem with enormous security implications.</p>

            <h3>Hosting: Vercel + AWS</h3>
            <p>Vercel for your Next.js frontend. AWS or Supabase for your database and backend services that need more control.</p>

            <h3>Payments: Stripe or Razorpay</h3>
            <p>Stripe for global SaaS. Razorpay if your primary market is India. Both handle subscriptions, invoicing, and compliance.</p>

            <h3>The Golden Rule</h3>
            <p>The best tech stack is the one your team can ship with fastest. Don&rsquo;t chase trends. Build, ship, learn, iterate &mdash; and let your architecture evolve with your business.</p>
        `
    },
    'design-systems-that-scale': {
        title: 'Building Design Systems That Actually Scale',
        date: '2026-01-28',
        category: 'Design',
        readTime: '15 min read',
        author: 'Vyra Labs Team',
        excerpt: 'Learn how to create design systems that grow with your product without becoming a maintenance nightmare.',
        content: `
            <h2>Design Systems Are Products, Not Projects</h2>
            <p>A design system is not a Figma file with components. It&rsquo;s a living product that serves your design and engineering teams. The difference between one that scales and one that becomes shelfware: adoption, governance, and iteration.</p>

            <h3>Start With Tokens, Not Components</h3>
            <p>Design tokens are the atomic building blocks: colors, spacing, typography, shadows, borders. Get these right first. A consistent token system means your components will automatically feel cohesive.</p>

            <h3>Build Components at Three Levels</h3>
            <p><strong>Primitives</strong> &mdash; Button, Input, Text, Box. Extremely flexible atoms that make no assumptions about context.</p>
            <p><strong>Patterns</strong> &mdash; Form groups, Card layouts, Navigation bars. Reusable patterns with sensible defaults.</p>
            <p><strong>Features</strong> &mdash; Pricing tables, Onboarding flows, Dashboard widgets. Product-specific compositions.</p>

            <h3>Enforce Through Tooling, Not Documentation</h3>
            <p>Nobody reads documentation. Use ESLint rules, Storybook for visual testing, and TypeScript types that make wrong usage impossible. The best design system is one where doing the right thing is easier than doing the wrong thing.</p>

            <h3>Measure Adoption, Not Coverage</h3>
            <p>A system with 200 unused components is worse than one with 20 components covering 90% of use cases. Track: system component usage percentage, time-to-implement, and handoff friction.</p>

            <h3>The Vyra Labs Approach</h3>
            <p>Every project at Vyra Labs starts with a design system &mdash; even MVPs. We build a minimal token system and 10-15 core components in the first sprint. This pays dividends throughout: faster development, consistent UI, and a foundation the client&rsquo;s team can extend.</p>
        `
    },
    'startup-mistakes-avoid': {
        title: '7 Technical Mistakes That Kill Startups',
        date: '2026-01-25',
        category: 'Startup Growth',
        readTime: '9 min read',
        author: 'Vyra Labs Team',
        excerpt: 'Common technical pitfalls we see early-stage startups make and how to build smarter from day one.',
        content: `
            <h2>Lessons From 50+ Startup Launches</h2>
            <p>The startups that fail rarely fail because of bad ideas &mdash; they fail because of avoidable technical decisions made in the first 6 months.</p>

            <h3>1. Building Before Validating</h3>
            <p>The #1 killer. Spending months building a product nobody wants. Before writing code: talk to 20+ potential customers, create a landing page, and validate willingness to pay.</p>

            <h3>2. Over-Engineering the MVP</h3>
            <p>Microservices for zero users. Kubernetes for 100 requests/day. Build the simplest thing that works, then scale with real usage data.</p>

            <h3>3. Ignoring Technical Debt</h3>
            <p>Strategic debt is fine if tracked. Unconscious debt &mdash; no tests, no docs, no reviews &mdash; makes codebases unmaintainable by Series A.</p>

            <h3>4. Choosing the Wrong Tech Stack</h3>
            <p>Optimize for: hiring, ecosystem, and velocity. Boring technology is usually the right technology.</p>

            <h3>5. No Analytics from Day One</h3>
            <p>You can&rsquo;t improve what you don&rsquo;t measure. Set up event tracking, funnel analysis, and error monitoring before launch.</p>

            <h3>6. Skipping Security Fundamentals</h3>
            <p>SQL injection, XSS, exposed API keys. A single incident can destroy trust. Use parameterized queries, sanitize inputs, and never store secrets in code.</p>

            <h3>7. Building Everything In-House</h3>
            <p>Auth, payments, email &mdash; solved problems with excellent third-party solutions. Every hour rebuilding Stripe&rsquo;s checkout is an hour not spent on your core product.</p>

            <h3>The Path Forward</h3>
            <p>The startups that win ship the right product to the right users at the right time. Avoid these 7 mistakes and you&rsquo;ll be ahead of 90% of competitors.</p>
        `
    },
    'api-design-best-practices': {
        title: 'REST API Design Best Practices for Modern Web Apps',
        date: '2026-01-22',
        category: 'Technical',
        readTime: '11 min read',
        author: 'Vyra Labs Team',
        excerpt: 'Build APIs that are intuitive, scalable, and a joy for developers to work with.',
        content: `
            <h2>APIs Are User Interfaces for Developers</h2>
            <p>A well-designed API is like a well-designed UI &mdash; intuitive, consistent, and hard to misuse. Here are the principles we follow at Vyra Labs.</p>

            <h3>1. Use Nouns for Resources, Not Verbs</h3>
            <p>GET /users not GET /getUsers. POST /orders not POST /createOrder. The HTTP method implies the action.</p>

            <h3>2. Version Your API from Day One</h3>
            <p>Use URL versioning: /api/v1/users. When breaking changes are needed, create v2 and maintain both during migration.</p>

            <h3>3. Consistent Error Responses</h3>
            <p>Every error should return: HTTP status code, machine-readable error code, and human-readable message. Standardize across all endpoints.</p>

            <h3>4. Paginate All List Endpoints</h3>
            <p>Cursor-based for real-time data, offset-based for static content. Always return total count and navigation links. Never return unbounded lists.</p>

            <h3>5. Design for Partial Updates</h3>
            <p>PATCH for partial updates, PUT for replacements. Most consumers only update one or two fields at a time.</p>

            <h3>6. Rate Limit Everything</h3>
            <p>Return rate limit info in headers. This protects infrastructure and gives consumers clear usage feedback.</p>

            <h3>7. Use Proper Status Codes</h3>
            <p>200 success, 201 created, 204 deleted, 400 bad request, 401 unauthorized, 404 not found, 422 validation, 429 rate limited, 500 server error.</p>

            <h3>8. Document with OpenAPI</h3>
            <p>Auto-generate docs from code. Interactive documentation that stays in sync. Static docs always go stale.</p>

            <h3>9. Consistent Naming Conventions</h3>
            <p>Pick camelCase or snake_case and use it everywhere. Consistency matters more than convention choice.</p>

            <h3>10. Design for the Frontend</h3>
            <p>Talk to your frontend team before designing endpoints. Consider compound documents and response shaping to minimize API calls per page.</p>
        `
    }
}

export function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts[slug]
    if (!post) return { title: 'Post Not Found' }
    
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts[slug]

    if (!post) {
        notFound()
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-28 pb-20">
                <article className="container mx-auto px-6 md:px-16 max-w-3xl">
                    {/* Back Link */}
                    <Link 
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-5">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-[-0.02em] leading-[1.15]">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{post.author}</span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                            </span>
                        </div>
                    </header>

                    {/* Divider */}
                    <hr className="border-border mb-10" />

                    {/* Content */}
                    <div 
                        className="prose prose-lg max-w-none text-foreground 
                            prose-headings:tracking-tight prose-headings:text-foreground
                            prose-p:text-muted-foreground prose-p:leading-[1.8] 
                            prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                            prose-li:text-muted-foreground
                            prose-strong:text-foreground
                            prose-code:text-brand-blue prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="bg-muted rounded-xl p-8 text-center">
                            <h3 className="text-xl font-bold mb-2">
                                Enjoyed this article?
                            </h3>
                            <p className="text-muted-foreground text-sm mb-5">
                                Let&apos;s talk about how we can help you build something amazing.
                            </p>
                            <Link 
                                href="/#contact"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity duration-200"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}
