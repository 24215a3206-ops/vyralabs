'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Zap } from 'lucide-react'

const values = [
    {
        icon: <Shield className="w-5 h-5" />,
        number: '01',
        title: 'Elite quality, selective partnerships',
        description: 'We limit ourselves to 12-16 projects annually to maintain exceptional standards. Every project receives senior-level attention from day one. No offshore teams, no junior developers learning on your budget.',
    },
    {
        icon: <Target className="w-5 h-5" />,
        number: '02',
        title: 'Business outcomes over technical theater',
        description: 'We measure success by your metrics—revenue growth, conversion rates, time saved. Every feature ships with clear ROI documentation. If a technology doesn\'t serve your business goals, we won\'t recommend it.',
    },
    {
        icon: <Zap className="w-5 h-5" />,
        number: '03',
        title: 'Built to last, designed to scale',
        description: 'Production-grade code from sprint one. Comprehensive documentation, automated testing, and architecture reviews ensure your future team can build on our foundation. Weekly progress updates and transparent roadmaps—no surprises.',
    },
]

export function Values() {
    return (
        <section id="values" className="py-32 md:py-40 bg-muted border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block"
                        >
                            Why choose us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-[-0.02em]"
                        >
                            The Vyra{' '}
                            <span className="text-brand-blue">difference</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-muted-foreground text-lg leading-relaxed"
                        >
                            Where design agencies end and engineering firms begin. We bridge the gap between beautiful interfaces and bulletproof systems—without compromise.
                        </motion.p>

                        {/* Experience badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                            className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-background border border-border"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold text-lg">
                                V
                            </div>
                            <div>
                                <div className="font-semibold text-sm">Trusted studio</div>
                                <div className="text-xs text-muted-foreground">8+ successful projects worldwide</div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="space-y-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                                className="group"
                            >
                                <div className="p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-subtle text-foreground">
                                            {value.icon}
                                        </span>
                                        <span className="text-xs font-mono text-muted-foreground tracking-wider">{value.number}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 tracking-tight">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-[15px]">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
