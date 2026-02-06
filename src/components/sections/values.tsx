'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const values = [
    {
        title: 'Clean Code',
        description: 'Maintainable, scalable, and documented. We write code that your future team will thank us for.',
    },
    {
        title: 'Fast Delivery',
        description: 'Weekly sprints and regular updates. We ship features, not excuses.',
    },
    {
        title: 'Founder Mindset',
        description: 'We prioritize business value over technical vanity. If it doesn&apos;t move the needle, we don&apos;t build it.',
    },
]

export function Values() {
    return (
        <section id="values" className="py-32 bg-[#080808]"> {/* Slightly different shade */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                        >
                            Why world-class brands choose <span className="text-accent">Vyra Labs</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg mb-8"
                        >
                            We bridge the gap between design agency creative and engineering firm reliability.
                        </motion.p>
                    </div>

                    <div className="space-y-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
