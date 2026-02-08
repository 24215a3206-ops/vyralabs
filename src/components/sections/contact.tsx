'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="py-32 md:py-40 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-16 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-[-0.03em] leading-[1.05]">
                        Let&apos;s build something exceptional.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We accept 12-16 select projects each year. If you&apos;re ready to ship a product that stands out, 
                        let&apos;s explore if we&apos;re the right fit for your vision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:hello@vyralabs.systems" className="no-underline">
                            <Button variant="accent" className="h-12 px-6 text-sm group">
                                <Mail className="mr-2 w-4 h-4" />
                                Start the conversation
                            </Button>
                        </a>
                        <a href="mailto:hello@vyralabs.systems?subject=Request for Case Studies" className="no-underline">
                            <Button variant="ghost" className="h-12 px-6 text-sm group">
                                Request case studies
                                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Button>
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 pt-8 border-t border-border max-w-3xl mx-auto">
                        <p className="text-sm text-gray-500 mb-4">Trusted by startups and enterprises</p>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-gray-400 uppercase tracking-wider font-medium">
                            <span>Average project value: $25K-75K</span>
                            <span className="hidden sm:inline">•</span>
                            <span>4-12 week delivery</span>
                            <span className="hidden sm:inline">•</span>
                            <span>100% satisfaction rate</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
