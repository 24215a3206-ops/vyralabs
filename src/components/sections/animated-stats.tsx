'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface CounterProps {
    end: number
    suffix?: string
    prefix?: string
    duration?: number
}

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isInView, end, duration])

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    )
}

interface StatItem {
    value: number
    suffix: string
    label: string
    description: string
}

const stats: StatItem[] = [
    { value: 8, suffix: '+', label: 'Projects Delivered', description: 'With Different Requirements' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
    { value: 340, suffix: '%', label: 'Avg. Conversion Lift', description: 'Measured ROI improvement' },
    { value: 24, suffix: 'h', label: 'Response Time', description: 'From inquiry to first call' },
]

export function AnimatedStats() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block">By the numbers</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impact that speaks for itself</h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                            className="relative group"
                        >
                            <div className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-subtle border border-border hover:border-foreground/20 transition-colors duration-300">
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight whitespace-nowrap">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                                <div className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{stat.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
