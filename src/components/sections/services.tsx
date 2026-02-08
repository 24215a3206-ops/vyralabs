'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Layers } from 'lucide-react'

const services = [
    {
        icon: <Code2 className="w-6 h-6 text-foreground" />,
        title: 'High-Performance Websites',
        description: 'Lightning-fast marketing sites that convert visitors into customers. Built with Next.js for 99+ performance scores, SEO dominance, and measurable ROI.',
        keywords: 'Sub-second load times • SEO-optimized • Conversion-focused',
    },
    {
        icon: <Rocket className="w-6 h-6 text-foreground" />,
        title: 'SaaS MVP Development',
        description: 'From concept to launch-ready product in 6-8 weeks. Scalable architecture, intuitive UX, and production-grade code that grows with your business.',
        keywords: 'Rapid deployment • Enterprise-ready • Investor-grade quality',
    },
    {
        icon: <Layers className="w-6 h-6 text-foreground" />,
        title: 'Custom Enterprise Tools',
        description: 'Tailored internal platforms, admin dashboards, and workflow automation that save hours daily. Built to optimize your team\'s unique processes.',
        keywords: 'Workflow automation • Real-time data • Team efficiency',
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
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]"
                    >
                        What we create
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-gray-700 text-lg leading-relaxed"
                    >
                        Every line of code serves a business goal. We prioritize features that drive revenue, reduce costs, or save time—nothing else makes the cut.
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
                            <p className="text-gray-700 leading-relaxed text-[15px] mb-4">
                                {service.description}
                            </p>
                            <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                                {service.keywords}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
