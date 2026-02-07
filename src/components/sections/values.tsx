'use client'

import { motion } from 'framer-motion'

const values = [
    {
        title: 'Clean code',
        description: 'Maintainable, scalable, and documented. We write code that your future team will thank us for.',
    },
    {
        title: 'Fast delivery',
        description: 'Weekly sprints and regular updates. We ship features, not excuses.',
    },
    {
        title: 'Founder mindset',
        description: 'We prioritize business value over technical vanity. If it doesn&apos;t move the needle, we don&apos;t build it.',
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
                            className="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-[-0.02em]"
                        >
                            Why world-class brands choose Vyra Labs.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.05, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-muted-foreground text-lg font-light leading-relaxed"
                        >
                            We bridge the gap between design agency creative and engineering firm reliability.
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
                                className="border-l-2 border-border pl-6 hover:border-foreground transition-colors duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-light">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
