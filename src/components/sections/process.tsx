'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Compass, Code2, Rocket } from 'lucide-react'

const steps = [
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: 'Discovery Call',
        description: 'We learn about your vision, goals, and technical needs. Free, no-obligation consultation.',
        duration: 'Day 1',
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        icon: <Compass className="w-5 h-5" />,
        title: 'Strategy & Planning',
        description: 'Detailed technical roadmap, timeline, architecture decisions, and transparent pricing.',
        duration: 'Week 1',
        gradient: 'from-violet-500 to-purple-400',
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: 'Build & Iterate',
        description: 'Agile development with weekly demos, milestone approvals, and constant communication.',
        duration: 'Weeks 2-8',
        gradient: 'from-emerald-500 to-teal-400',
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        title: 'Launch & Support',
        description: 'Production deployment, knowledge transfer, documentation, and 30 days of free support.',
        duration: 'Launch Day',
        gradient: 'from-amber-500 to-orange-400',
    },
]

export function Process() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block">How we work</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-4">From idea to launch in four steps</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A proven process that&apos;s delivered many successful projects.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
                    {/* Connecting line - desktop only */}
                    <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-border" />
                    
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                            className="relative group text-center p-2 sm:p-0"
                        >
                            {/* Step circle */}
                            <div className="relative mx-auto mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-subtle border border-border flex items-center justify-center text-foreground shadow-sm mx-auto transition-all duration-300 group-hover:border-brand-blue group-hover:text-brand-blue relative z-10">
                                    {step.icon}
                                </div>
                            </div>
                            
                            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-brand-blue mb-2 block">{step.duration}</span>
                            <h3 className="text-base sm:text-lg font-semibold mb-2 tracking-tight">{step.title}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
