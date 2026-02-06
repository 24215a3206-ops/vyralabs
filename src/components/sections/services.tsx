'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Layers } from 'lucide-react'

const services = [
    {
        icon: <Code2 className="w-8 h-8 text-accent" />,
        title: 'Website Development',
        description: 'High-performance marketing sites that convert. Built with Next.js for speed and SEO.',
    },
    {
        icon: <Rocket className="w-8 h-8 text-purple-500" />,
        title: 'SaaS MVPs',
        description: 'Rapid prototyping and scalable architecture to get your product to market fast.',
    },
    {
        icon: <Layers className="w-8 h-8 text-cyan-400" />,
        title: 'Internal Tools',
        description: 'Streamline operations with custom dashboards and admin panels tailored to your workflow.',
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 relative bg-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
                    <p className="text-muted-foreground text-lg">
                        We don&apos;t just write code. We build systems that help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-background border border-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
