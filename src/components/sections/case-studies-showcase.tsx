'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react'

const highlights = [
    {
        company: 'TechFlow',
        category: 'SaaS MVP',
        stat: '1,000+',
        statLabel: 'users in 30 days',
        description: 'From concept to production-ready SaaS platform in 8 weeks. Raised $2M seed round shortly after launch.',
        color: 'from-blue-500 to-cyan-400',
        icon: <Users className="w-5 h-5" />,
        metrics: [
            { label: 'Launch Time', value: '8 weeks' },
            { label: 'Seed Round', value: '$2M' },
        ],
        link: '/case-studies',
    },
    {
        company: 'DataSync',
        category: 'Enterprise Tool',
        stat: '85%',
        statLabel: 'less manual work',
        description: 'Custom dashboard processing 50K+ records/day, deployed across 15 countries with 99.9% uptime.',
        color: 'from-emerald-500 to-teal-400',
        icon: <TrendingUp className="w-5 h-5" />,
        metrics: [
            { label: 'Daily Records', value: '50K+' },
            { label: 'Countries', value: '15' },
        ],
        link: '/case-studies',
    },
    {
        company: 'CloudMetrics',
        category: 'Marketing Website',
        stat: '2x',
        statLabel: 'conversion rate',
        description: 'Complete redesign achieving 99 Lighthouse score and 3x organic traffic growth in 90 days.',
        color: 'from-violet-500 to-purple-400',
        icon: <Zap className="w-5 h-5" />,
        metrics: [
            { label: 'Lighthouse', value: '99/100' },
            { label: 'Traffic Growth', value: '3x' },
        ],
        link: '/case-studies',
    },
]

export function CaseStudiesShowcase() {
    return (
        <section className="py-32 md:py-40 bg-muted border-y border-border relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block"
                        >
                            Featured work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-4xl md:text-6xl font-bold mb-5 tracking-[-0.02em]"
                        >
                            Real results,{' '}
                            <span className="text-brand-blue">real impact</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                            className="text-muted-foreground text-lg leading-relaxed"
                        >
                            From pre-seed startups to global enterprises — here&apos;s what happens when vision meets execution.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-blue-hover transition-colors duration-200 whitespace-nowrap group"
                        >
                            View all case studies
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.company}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 0.03, 0.26, 1] }}
                        >
                            <Link href={item.link} className="block group h-full">
                                <div className="h-full bg-background border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.1)] relative">
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(0,102,255,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Gradient header */}
                                    <div className={`h-1.5 bg-linear-to-r ${item.color}`} />

                                    <div className="p-8 relative z-10">
                                        {/* Company & Category */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold tracking-tight">{item.company}</h3>
                                                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.category}</span>
                                                </div>
                                            </div>
                                            <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>

                                        {/* Big Stat */}
                                        <div className="mb-6">
                                            <div className="text-5xl font-bold tracking-tight mb-1">{item.stat}</div>
                                            <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        {/* Mini metrics */}
                                        <div className="flex gap-4 pt-4 border-t border-border">
                                            {item.metrics.map((metric) => (
                                                <div key={metric.label}>
                                                    <div className="text-sm font-semibold">{metric.value}</div>
                                                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
