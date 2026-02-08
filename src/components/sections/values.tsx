'use client'

import { motion } from 'framer-motion'

const values = [
    {
        title: 'Elite quality, selective partnerships',
        description: 'We limit ourselves to 12-16 projects annually to maintain exceptional standards. Every project receives senior-level attention from day one. No offshore teams, no junior developers learning on your budget.',
    },
    {
        title: 'Business outcomes over technical theater',
        description: 'We measure success by your metrics—revenue growth, conversion rates, time saved. Every feature ships with clear ROI documentation. If a technology doesn\'t serve your business goals, we won\'t recommend it.',
    },
    {
        title: 'Built to last, designed to scale',
        description: 'Production-grade code from sprint one. Comprehensive documentation, automated testing, and architecture reviews ensure your future team can build on our foundation. Weekly progress updates and transparent roadmaps—no surprises.',
    },
]

export function Values() {
    return (
        <section id="values" className="py-32 md:py-40 bg-muted border-y border-border">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-[-0.02em]"
                        >
                            The Vyra difference
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.05, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-gray-700 text-lg leading-relaxed"
                        >
                            Where design agencies end and engineering firms begin. We bridge the gap between beautiful interfaces and bulletproof systems—without compromise.
                        </motion.p>
                    </div>

                    <div className="space-y-12 pt-2">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                                className="border-l-2 border-border pl-6 hover:border-brand-blue transition-colors duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
