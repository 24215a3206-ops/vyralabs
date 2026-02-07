'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Subtle grid - barely visible */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Content */}
            <div className="container relative z-10 px-6 md:px-16 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="max-w-4xl"
                >
                    {/* Subtle status badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-subtle border border-border text-xs font-medium text-muted-foreground mb-8"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-[ping_2s_ease-in-out_infinite]"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                        </span>
                        Accepting select projects
                    </motion.div>

                    {/* Main heading - confident, clear */}
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-[-0.03em] text-foreground leading-[0.95] mb-8">
                        Building modern
                        <br />
                        digital products.
                    </h1>

                    {/* Supporting text - room to breathe */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-light">
                        We build high-performance websites and scalable SaaS products with
                        founder-level clarity and engineering precision.
                    </p>

                    {/* CTA - simple, direct */}
                    <div className="flex flex-col sm:flex-row items-start gap-3">
                        <Button className="group h-11 px-6 text-sm">
                            Start a project
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Button>
                        <Button variant="ghost" className="h-11 px-6 text-sm">
                            View our work
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground"
            >
                <span className="text-[10px] uppercase tracking-wider font-medium">Scroll</span>
                <div className="w-px h-16 bg-linear-to-b from-border to-transparent" />
            </motion.div>
        </section>
    )
}
