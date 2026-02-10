'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Code2, Rocket, Layers, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const services = [
    {
        icon: <Code2 className="w-6 h-6" />,
        title: 'High-Performance Websites',
        description: 'Lightning-fast marketing sites that convert visitors into customers. Built with Next.js for 99+ performance scores, SEO dominance, and measurable ROI.',
        keywords: ['Sub-second loads', 'SEO-optimized', 'Conversion-focused'],
        gradient: 'from-blue-500 to-cyan-400',
        number: '01',
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'SaaS MVP Development',
        description: 'From concept to launch-ready product in 6-8 weeks. Scalable architecture, intuitive UX, and production-grade code that grows with your business.',
        keywords: ['Rapid deployment', 'Enterprise-ready', 'Investor-grade'],
        gradient: 'from-violet-500 to-purple-400',
        number: '02',
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Custom Enterprise Tools',
        description: 'Tailored internal platforms, admin dashboards, and workflow automation that save hours daily. Built to optimize your team\'s unique processes.',
        keywords: ['Workflow automation', 'Real-time data', 'Team efficiency'],
        gradient: 'from-emerald-500 to-teal-400',
        number: '03',
    },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-150, 150], [5, -5])
    const rotateY = useTransform(mouseX, [-150, 150], [-5, 5])

    function handleMouse(e: React.MouseEvent) {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
    }

    function handleMouseLeave() {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 0.03, 0.26, 1] }}
            style={{ 
                rotateX: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateX : 0, 
                rotateY: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateY : 0, 
                transformStyle: 'preserve-3d' 
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            className="group relative"
        >
            <div className="relative h-full p-8 md:p-10 rounded-2xl bg-subtle border border-border hover:border-foreground/20 transition-colors duration-300 overflow-hidden">
                
                {/* Number tag */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-foreground/[0.03] select-none tracking-tighter">
                    {service.number}
                </div>
                
                <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`mb-8 w-12 h-12 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 tracking-tight flex items-center gap-2">
                        {service.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-blue" />
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                        {service.description}
                    </p>
                    
                    {/* Keyword pills */}
                    <div className="flex flex-wrap gap-2">
                        {service.keywords.map((keyword) => (
                            <span key={keyword} className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-border text-muted-foreground group-hover:border-brand-blue/20 group-hover:text-foreground transition-all duration-300">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function Services() {
    return (
        <section id="services" className="py-32 md:py-40 relative bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                <div className="mb-20 max-w-2xl">
                    <motion.span 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block"
                    >
                        Our expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]"
                    >
                        What we create
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.03, 0.26, 1] }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Every line of code serves a business goal. We prioritize features that drive revenue, reduce costs, or save time nothing else makes the cut.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
