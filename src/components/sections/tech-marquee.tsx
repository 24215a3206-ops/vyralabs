'use client'

import { motion } from 'framer-motion'

const technologies = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Vercel', 'Tailwind CSS', 'Prisma', 'Redis',
    'GraphQL', 'Docker', 'Stripe', 'Figma',
]

export function TechMarquee() {
    return (
        <section className="relative py-12 overflow-hidden border-y border-border bg-muted/50">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
            >
                <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
                    {[...technologies, ...technologies].map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
                            <span className="text-sm font-medium tracking-wide uppercase">{tech}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
