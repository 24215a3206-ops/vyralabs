'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        quote: "Vyra Labs transformed our vision into a production-ready SaaS platform in 8 weeks. Their technical expertise and design sensibility are unmatched. We went from concept to 1,000 users in the first month.",
        author: "Priya Sharma",
        role: "CEO & Founder",
        company: "TechFlow",
        image: "/testimonials/priya.jpg",
        rating: 5,
        highlight: "1,000 users in 30 days"
    },
    {
        quote: "Working with Vyra felt like having a technical co-founder. They didn't just build what we asked for—they challenged our assumptions and delivered something far better. Our conversion rate increased 340%.",
        author: "Arjun Mehta",
        role: "VP of Product",
        company: "DataSync",
        image: "/testimonials/arjun.jpg",
        rating: 5,
        highlight: "340% conversion lift"
    },
    {
        quote: "The quality-to-speed ratio is incredible. We've worked with agencies 3x the price that delivered half the value. Vyra's code is clean, documented, and scaled with us from MVP to Series A.",
        author: "Neha Kapoor",
        role: "CTO",
        company: "CloudMetrics",
        image: "/testimonials/neha.jpg",
        rating: 5,
        highlight: "MVP to Series A"
    }
]

export function Testimonials() {
    return (
        <section className="py-32 md:py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block"
                    >
                        Client stories
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]"
                    >
                        Trusted by founders{' '}
                        <span className="text-brand-blue">who ship</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Vyra Labs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 0.03, 0.26, 1] }}
                            className="group relative"
                        >
                            <div className="h-full bg-subtle border border-border rounded-2xl p-8 hover:border-foreground/20 transition-all duration-500 flex flex-col relative overflow-hidden">
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    
                                    <Quote className="w-8 h-8 text-brand-blue mb-4 opacity-30" />
                                    
                                    <blockquote className="text-muted-foreground leading-relaxed mb-6 grow">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>

                                    {/* Highlight badge */}
                                    <div className="mb-6">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
                                            {testimonial.highlight}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-brand-blue to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg">
                                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">{testimonial.author}</div>
                                            <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
