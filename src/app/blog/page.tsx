import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog & Resources',
    description: 'Insights on product development, startup growth, and technical best practices from Vyra Labs.',
}

// Placeholder blog posts - will be replaced with MDX content
const blogPosts = [
    {
        slug: 'mvp-development-checklist',
        title: 'The Complete MVP Development Checklist for 2026',
        excerpt: 'A comprehensive guide to building and launching your minimum viable product without wasting time or resources.',
        category: 'Product Development',
        readTime: '8 min read',
        date: '2026-02-08',
        author: 'Vyra Labs Team'
    },
    {
        slug: 'nextjs-performance-optimization',
        title: '10 Next.js Performance Optimizations That Actually Matter',
        excerpt: 'Practical tips to achieve 99+ Lighthouse scores and sub-second load times for your Next.js applications.',
        category: 'Technical',
        readTime: '12 min read',
        date: '2026-02-05',
        author: 'Vyra Labs Team'
    },
    {
        slug: 'saas-tech-stack-2026',
        title: 'Choosing the Right SaaS Tech Stack in 2026',
        excerpt: 'An opinionated guide to selecting technologies that will scale with your startup from MVP to Series A.',
        category: 'Startup Growth',
        readTime: '10 min read',
        date: '2026-02-01',
        author: 'Vyra Labs Team'
    },
    {
        slug: 'design-systems-that-scale',
        title: 'Building Design Systems That Actually Scale',
        excerpt: 'Learn how to create design systems that grow with your product without becoming a maintenance nightmare.',
        category: 'Design',
        readTime: '15 min read',
        date: '2026-01-28',
        author: 'Vyra Labs Team'
    },
    {
        slug: 'startup-mistakes-avoid',
        title: '7 Technical Mistakes That Kill Startups (And How to Avoid Them)',
        excerpt: 'Common technical pitfalls we see early-stage startups make and how to build smarter from day one.',
        category: 'Startup Growth',
        readTime: '9 min read',
        date: '2026-01-25',
        author: 'Vyra Labs Team'
    },
    {
        slug: 'api-design-best-practices',
        title: 'REST API Design Best Practices for Modern Web Apps',
        excerpt: 'Build APIs that are intuitive, scalable, and a joy for developers to work with.',
        category: 'Technical',
        readTime: '11 min read',
        date: '2026-01-22',
        author: 'Vyra Labs Team'
    }
]

const categories = ['All', 'Technical', 'Product Development', 'Startup Growth', 'Design']

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-[-0.02em]">
                            Blog & Resources
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Practical insights on building world-class digital products. 
                            Learn from our experience shipping 50+ successful projects.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12 flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    category === 'All'
                                        ? 'bg-brand-blue text-white'
                                        : 'bg-subtle text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-brand-blue transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Featured Image Placeholder */}
                                <div className="aspect-[16/9] bg-gradient-to-br from-brand-blue/10 to-purple-100 flex items-center justify-center">
                                    <span className="text-sm text-gray-500">{post.category}</span>
                                </div>

                                <div className="p-6">
                                    {/* Category & Read Time */}
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                        <span className="px-2 py-1 rounded bg-subtle font-medium">
                                            {post.category}
                                        </span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold mb-3 tracking-tight group-hover:text-brand-blue transition-colors duration-200">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-border">
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        <Link 
                                            href={`/blog/${post.slug}`}
                                            className="text-brand-blue font-medium hover:underline"
                                        >
                                            Read article →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Coming Soon Notice */}
                    <div className="mt-16 text-center bg-subtle rounded-2xl p-12">
                        <h2 className="text-2xl font-bold mb-3 tracking-tight">
                            More content coming soon
                        </h2>
                        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
                            We&apos;re actively working on detailed guides and case studies. 
                            Subscribe to our newsletter to get notified when new content is published.
                        </p>
                        <Link 
                            href="/#newsletter"
                            className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline"
                        >
                            Subscribe to newsletter →
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
