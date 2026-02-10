'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
}

const staggerItem = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { 
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 0.03, 0.26, 1] as const }
    },
}

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background noise-bg">
            {/* Subtle grid - barely visible */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Content */}
            <motion.div style={{ opacity }} className="container relative z-10 px-4 sm:px-6 md:px-16 max-w-7xl pt-28 sm:pt-32 pb-12">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="max-w-5xl"
                >
                    {/* Subtle status badge */}
                    <motion.div
                        variants={staggerItem}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-subtle border border-border text-xs font-medium text-muted-foreground mb-10"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-40 animate-[ping_2s_ease-in-out_infinite]"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                        Now accepting Q2 2026 projects — Limited availability
                    </motion.div>

                    {/* Main heading - includes brand name for SEO */}
                    <motion.h1 
                        variants={staggerItem}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-foreground leading-[0.95] mb-6 sm:mb-8"
                    >
                        <span className="sr-only">Vyra Labs — </span>
                        Where vision
                        <br />
                        <span className="relative inline-block">
                            meets
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[4px] bg-brand-blue rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8, ease: [0.22, 0.03, 0.26, 1] }}
                            />
                        </span>{' '}
                        <span className="text-brand-blue">velocity.</span>
                    </motion.h1>

                    {/* Supporting text */}
                    <motion.p 
                        variants={staggerItem}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-14 max-w-2xl leading-relaxed"
                    >
                        Elite digital products built with founder-level clarity, world-class design, and bulletproof engineering. 
                        We ship high-performance SaaS MVPs, conversion-optimized websites, and enterprise-grade tools in weeks, not months.
                    </motion.p>

                    {/* CTA with enhanced buttons */}
                    <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                        <a href="#contact" className="no-underline w-full sm:w-auto">
                            <Button variant="accent" className="group h-12 px-8 text-sm relative overflow-hidden w-full sm:w-auto">
                                <span className="relative z-10 flex items-center justify-center">
                                    Start your project
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-brand-blue-hover"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Button>
                        </a>
                        <a href="#services" className="no-underline w-full sm:w-auto">
                            <Button variant="ghost" className="h-12 px-8 text-sm group border border-border hover:border-brand-blue transition-colors duration-300 w-full sm:w-auto">
                                Explore what we do
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">↓</span>
                            </Button>
                        </a>
                    </motion.div>

                    
                </motion.div>
            </motion.div>
        </section>
    )
}
