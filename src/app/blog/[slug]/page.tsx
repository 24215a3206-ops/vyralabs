import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

interface BlogPost {
    title: string
    date: string
    category: string
    readTime: string
    author: string
    content: string
}

const blogPosts: Record<string, BlogPost> = {
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
                        <div className="flex items-center gap-5 text-sm text-muted-foreground">
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
                        className="prose prose-lg max-w-none text-foreground prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-[1.8] prose-a:text-brand-blue"
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
