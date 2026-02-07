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
                    <h2 className="text-5xl md:text-7xl font-semibold mb-6 tracking-[-0.03em] leading-[1.05]">
                        Ready to build the next big thing?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        We only take on select projects each quarter to maintain our quality standards.
                        Let&apos;s see if we&apos;re a match.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:hello@vyralabs.systems" className="no-underline">
                            <Button className="h-12 px-6 text-sm group">
                                <Mail className="mr-2 w-4 h-4" />
                                hello@vyralabs.systems
                            </Button>
                        </a>
                        <Button variant="ghost" className="h-12 px-6 text-sm group">
                            Book a call
                            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
