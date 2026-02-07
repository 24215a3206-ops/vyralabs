'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Layers } from 'lucide-react'

const services = [
    {
        icon: <Code2 className="w-6 h-6 text-foreground" />,
        title: 'Website Development',
        description: 'High-performance marketing sites that convert. Built with Next.js for speed and SEO.',
    },
    {
        icon: <Rocket className="w-6 h-6 text-foreground" />,
        title: 'SaaS MVPs',
        description: 'Rapid prototyping and scalable architecture to get your product to market fast.',
    },
    {
        icon: <Layers className="w-6 h-6 text-foreground" />,
        title: 'Internal Tools',
        description: 'Streamline operations with custom dashboards and admin panels tailored to your workflow.',
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 md:py-40 relative bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="mb-20 max-w-2xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-4xl md:text-6xl font-semibold mb-6 tracking-[-0.02em]"
                    >
                        What we do
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-muted-foreground text-lg font-light leading-relaxed"
                    >
                        We don&apos;t just write code. We build systems that help your business grow.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="p-10 bg-background hover:bg-subtle transition-colors duration-300 group"
                        >
                            <div className="mb-6 p-3 rounded-lg bg-subtle border border-border w-fit transition-transform duration-300 group-hover:scale-105">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-3 tracking-tight">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-light text-[15px]">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
