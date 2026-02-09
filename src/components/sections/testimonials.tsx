'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        quote: "Vyra Labs transformed our vision into a production-ready SaaS platform in 8 weeks. Their technical expertise and design sensibility are unmatched. We went from concept to 1,000 users in the first month.",
        author: "Priya Sharma",
        role: "CEO & Founder",
        company: "TechFlow",
        image: "/testimonials/priya.jpg"
    },
    {
        quote: "Working with Vyra felt like having a technical co-founder. They didn't just build what we asked for—they challenged our assumptions and delivered something far better. Our conversion rate increased 340%.",
        author: "Arjun Mehta",
        role: "VP of Product",
        company: "DataSync",
        image: "/testimonials/arjun.jpg"
    },
    {
        quote: "The quality-to-speed ratio is incredible. We've worked with agencies 3x the price that delivered half the value. Vyra's code is clean, documented, and scaled with us from MVP to Series A.",
        author: "Neha Kapoor",
        role: "CTO",
        company: "CloudMetrics",
        image: "/testimonials/neha.jpg"
    }
]

export function Testimonials() {
    return (
        <section className="py-32 md:py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]"
                    >
                        Trusted by founders who ship
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-gray-700 text-lg leading-relaxed"
                    >
                        Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Vyra Labs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                            className="bg-subtle border border-border rounded-2xl p-8 hover:border-brand-blue transition-colors duration-300 flex flex-col"
                        >
                            <Quote className="w-8 h-8 text-brand-blue mb-6 opacity-50" />
                            
                            <blockquote className="text-gray-700 leading-relaxed mb-8 grow">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-4 pt-6 border-t border-border">
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-brand-blue to-purple-600 flex items-center justify-center text-white font-semibold">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{testimonial.author}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social proof stats */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="mt-20 pt-16 border-t border-border"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">98%</div>
                            <div className="text-sm text-gray-600">Client satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">6.2 <span className="text-2xl">weeks</span></div>
                            <div className="text-sm text-gray-600">Average delivery</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">340%</div>
                            <div className="text-sm text-gray-600">Avg. conversion lift</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">50+</div>
                            <div className="text-sm text-gray-600">Projects delivered</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
