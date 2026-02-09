import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// This will be replaced with actual MDX content later
const blogPosts: Record<string, any> = {
    'mvp-development-checklist': {
        title: 'The Complete MVP Development Checklist for 2026',
        date: '2026-02-08',
        category: 'Product Development',
        readTime: '8 min read',
        author: 'Vyra Labs Team',
        content: `
            <p>Content coming soon. This blog post is currently under development.</p>
            <p>We're creating comprehensive guides on MVP development, technical best practices, and startup growth strategies.</p>
        `
    }
}

export function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug: slug,
    }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug]

    if (!post) {
        notFound()
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-32 pb-20">
                <article className="container mx-auto px-6 md:px-16 max-w-4xl">
                    {/* Back Link */}
                    <Link 
                        href="/blog"
                        className="inline-flex items-center gap-2 text-brand-blue hover:underline mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{post.author}</span>
                            <span>•</span>
                            <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>

                    {/* Content */}
                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share & Newsletter CTA */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="bg-subtle rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold mb-3">
                                Enjoyed this article?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Subscribe to our newsletter for more insights on building world-class products.
                            </p>
                            <Link 
                                href="/#newsletter"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors duration-200"
                            >
                                Subscribe to newsletter
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}
