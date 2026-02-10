import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Blog & Resources | Vyra Labs Insights',
    description: 'Insights on product development, startup growth, and technical best practices from Vyra Labs. Expert guides on MVP development, Next.js, SaaS tech stack, and more.',
    alternates: {
        canonical: 'https://vyralabs.systems/blog'
    },
    openGraph: {
        title: 'Blog & Resources | Vyra Labs Insights',
        description: 'Expert insights on product development, startup growth, and technical best practices from Vyra Labs.',
        url: 'https://vyralabs.systems/blog',
        type: 'website'
    }
}

const blogPosts = [
    {
        slug: 'mvp-development-checklist',
        title: 'The Complete MVP Development Checklist for 2026',
        excerpt: 'A comprehensive guide to building and launching your minimum viable product. Learn the exact process we use to take startups from idea to launch without wasting time or resources.',
        category: 'Product Development',
        readTime: '8 min read',
        date: '2026-02-08',
        author: 'Vyra Labs Team',
        featured: true,
        color: 'from-blue-500 to-blue-700',
        icon: '📋'
    },
    {
        slug: 'nextjs-performance-optimization',
        title: '10 Next.js Performance Optimizations That Actually Matter',
        excerpt: 'Practical tips to achieve 99+ Lighthouse scores and sub-second load times for your Next.js applications.',
        category: 'Technical',
        readTime: '12 min read',
        date: '2026-02-05',
        author: 'Vyra Labs Team',
        featured: false,
        color: 'from-emerald-500 to-emerald-700',
        icon: '⚡'
    },
    {
        slug: 'saas-tech-stack-2026',
        title: 'Choosing the Right SaaS Tech Stack in 2026',
        excerpt: 'An opinionated guide to selecting technologies that will scale with your startup from MVP to Series A.',
        category: 'Startup Growth',
        readTime: '10 min read',
        date: '2026-02-01',
        author: 'Vyra Labs Team',
        featured: false,
        color: 'from-violet-500 to-violet-700',
        icon: '🧱'
    },
    {
        slug: 'design-systems-that-scale',
        title: 'Building Design Systems That Actually Scale',
        excerpt: 'Learn how to create design systems that grow with your product without becoming a maintenance nightmare.',
        category: 'Design',
        readTime: '15 min read',
        date: '2026-01-28',
        author: 'Vyra Labs Team',
        featured: false,
        color: 'from-pink-500 to-pink-700',
        icon: '🎨'
    },
    {
        slug: 'startup-mistakes-avoid',
        title: '7 Technical Mistakes That Kill Startups',
        excerpt: 'Common technical pitfalls we see early-stage startups make and how to build smarter from day one.',
        category: 'Startup Growth',
        readTime: '9 min read',
        date: '2026-01-25',
        author: 'Vyra Labs Team',
        featured: false,
        color: 'from-amber-500 to-amber-700',
        icon: '🚨'
    },
    {
        slug: 'api-design-best-practices',
        title: 'REST API Design Best Practices for Modern Web Apps',
        excerpt: 'Build APIs that are intuitive, scalable, and a joy for developers to work with.',
        category: 'Technical',
        readTime: '11 min read',
        date: '2026-01-22',
        author: 'Vyra Labs Team',
        featured: false,
        color: 'from-cyan-500 to-cyan-700',
        icon: '🔌'
    }
]

const categories = ['All', 'Technical', 'Product Development', 'Startup Growth', 'Design']

export default function BlogPage() {
    const featuredPost = blogPosts.find(p => p.featured)
    const otherPosts = blogPosts.filter(p => !p.featured)

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-28 pb-20">
                <div className="container mx-auto px-6 md:px-16 max-w-6xl">

                    {/* Page Header */}
                    <div className="mb-14">
                        <p className="text-brand-blue font-medium text-sm tracking-wide uppercase mb-3">
                            Blog & Resources
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-[-0.02em] leading-tight">
                            Insights for builders
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Practical guides on product development, engineering, and startup growth from the Vyra Labs team.
                        </p>
                    </div>

                    {/* Featured Post */}
                    {featuredPost && (
                        <Link href={`/blog/${featuredPost.slug}`} className="block group mb-16">
                            <article className="relative bg-foreground text-background rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Content */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/15 text-sm font-medium mb-5">
                                            {featuredPost.category}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-snug group-hover:text-brand-blue transition-colors duration-200">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-sm opacity-70 leading-relaxed mb-6">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs opacity-50">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Visual */}
                                    <div className={`hidden md:flex items-center justify-center bg-linear-to-br ${featuredPost.color} min-h-80`}>
                                        <span className="text-8xl">{featuredPost.icon}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )}

                    {/* Category Filter */}
                    <div className="mb-10 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    category === 'All'
                                        ? 'bg-foreground text-background'
                                        : 'bg-muted text-muted-foreground hover:bg-border'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                <article className="h-full bg-background border border-border rounded-xl p-6 hover:border-foreground/20 transition-all duration-200 flex gap-5">
                                    {/* Icon */}
                                    <div className={`shrink-0 w-14 h-14 rounded-xl bg-linear-to-br ${post.color} flex items-center justify-center text-2xl`}>
                                        {post.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                            <span className="font-medium text-foreground/60">{post.category}</span>
                                            <span>·</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-base font-semibold mb-1.5 tracking-tight leading-snug group-hover:text-brand-blue transition-colors duration-200">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-3 flex items-center gap-1.5 text-xs text-brand-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            Read article <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon */}
                    <div className="mt-16 text-center border border-border rounded-xl p-10">
                        <p className="text-sm text-muted-foreground mb-2">More content coming soon</p>
                        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-5">
                            Follow us for updates on new guides, case studies, and engineering insights.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <Link
                                href="https://linkedin.com/company/vyralabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue font-medium hover:underline"
                            >
                                LinkedIn →
                            </Link>
                            <Link
                                href="https://twitter.com/vyralabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue font-medium hover:underline"
                            >
                                Twitter →
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
