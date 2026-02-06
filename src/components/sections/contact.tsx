'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
                        Ready to build <br />
                        <span className="text-muted-foreground">the next big thing?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        We only take on 3 new clients per quarter to maintain our quality standards. Let&apos;s see if we&apos;re a match.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="mailto:hello@vyralabs.systems" className="no-underline">
                            <Button className="h-14 px-8 text-lg rounded-full">
                                <Mail className="mr-2 w-5 h-5" />
                                hello@vyralabs.systems
                            </Button>
                        </a>
                        <Button variant="ghost" className="h-14 px-8 text-lg rounded-full">
                            Book a Call <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
