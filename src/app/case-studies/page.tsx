import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'Explore how Vyra Labs has helped startups and enterprises build world-class digital products.',
}

const caseStudies = [
    {
        id: 'techflow-saas-mvp',
        title: 'TechFlow',
        subtitle: 'SaaS MVP to 1,000 users in 30 days',
        category: 'SaaS MVP',
        challenge: 'Early-stage startup needed to validate product-market fit before Series A',
        solution: 'Built production-ready MVP with core features in 8 weeks',
        results: [
            '1,000+ users in first month',
            '340% conversion rate increase',
            'Successfully raised $2M seed round',
            'Featured on Product Hunt #1'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        image: '/case-studies/techflow.jpg',
        testimonial: {
            quote: "Vyra Labs transformed our vision into a production-ready SaaS platform in 8 weeks. Their technical expertise and design sensibility are unmatched.",
            author: "Priya Sharma",
            role: "CEO & Founder, TechFlow"
        }
    },
    {
        id: 'datasync-enterprise',
        title: 'DataSync',
        subtitle: 'Enterprise tool scaling to 10K+ daily users',
        category: 'Enterprise Tool',
        challenge: 'Global enterprise needed internal tool to streamline data workflows',
        solution: 'Custom dashboard with real-time data processing and automation',
        results: [
            'Processing 50K+ records/day',
            '85% reduction in manual work',
            'Saved 200+ hours/week',
            'Deployed across 15 countries'
        ],
        technologies: ['React', 'Python', 'MongoDB', 'Docker'],
        image: '/case-studies/datasync.jpg',
        testimonial: {
            quote: "Working with Vyra felt like having a technical co-founder. They delivered something far better than we imagined.",
            author: "Arjun Mehta",
            role: "VP of Product, DataSync"
        }
    },
    {
        id: 'cloudmetrics-redesign',
        title: 'CloudMetrics',
        subtitle: 'Website redesign driving 2x conversion',
        category: 'Marketing Website',
        challenge: 'Analytics platform needed modern website to compete with larger players',
        solution: 'Complete redesign with performance optimization and SEO overhaul',
        results: [
            '99 Lighthouse performance score',
            '200% increase in conversions',
            '3x organic traffic growth',
            'Page load time: 0.8s average'
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        image: '/case-studies/cloudmetrics.jpg',
        testimonial: {
            quote: "The quality-to-speed ratio is incredible. Vyra's code scaled with us from MVP to Series A.",
            author: "Neha Kapoor",
            role: "CTO, CloudMetrics"
        }
    }
]

export default function CaseStudiesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                    {/* Header */}
                    <div className="mb-20 max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-[-0.02em]">
                            Case Studies
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Real results from real projects. See how we&apos;ve helped startups and enterprises 
                            build products that drive growth, raise funding, and scale successfully.
                        </p>
                    </div>

                    {/* Case Studies Grid */}
                    <div className="space-y-32">
                        {caseStudies.map((study, index) => (
                            <div 
                                key={study.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="aspect-4/3 bg-linear-to-br from-brand-blue/5 to-blue-50 dark:from-brand-blue/10 dark:to-gray-800 rounded-2xl flex items-center justify-center border border-border overflow-hidden">
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-brand-blue">{study.title[0]}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                                            <p className="text-sm text-muted-foreground">{study.category}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
                                        {study.category}
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                                        {study.subtitle}
                                    </h2>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                                Challenge
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                                Solution
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                                Results
                                            </h3>
                                            <ul className="space-y-2">
                                                {study.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                        <span className="text-brand-blue mt-1">✓</span>
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {study.technologies.map((tech, i) => (
                                                    <span 
                                                        key={i}
                                                        className="px-3 py-1 rounded-full bg-subtle text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="border-l-2 border-brand-blue pl-6 py-4 bg-subtle/50 rounded-r-lg">
                                        <p className="text-muted-foreground italic mb-3">
                                            &ldquo;{study.testimonial.quote}&rdquo;
                                        </p>
                                        <div className="text-sm">
                                            <div className="font-semibold">{study.testimonial.author}</div>
                                            <div className="text-muted-foreground">{study.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 text-center bg-subtle rounded-2xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Ready to be our next success story?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We&apos;re currently accepting projects for Q2 2026. Let&apos;s discuss how we can 
                            help you achieve similar results.
                        </p>
                        <Link href="/#contact">
                            <Button variant="accent" className="gap-2">
                                Start your project
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
