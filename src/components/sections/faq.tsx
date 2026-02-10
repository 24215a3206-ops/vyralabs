'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What's included in your SaaS MVP development?",
        answer: "We deliver a production-ready product with core features, user authentication, responsive design, database setup, API integration, admin dashboard, automated testing, deployment to cloud infrastructure, comprehensive documentation, and 30 days of post-launch support. You'll also receive the complete source code and deployment guides."
    },
    {
        question: "How long does a typical project take?",
        answer: "Most projects take 4-12 weeks depending on scope. Marketing websites typically take 3-4 weeks, SaaS MVPs 6-8 weeks, and enterprise tools 8-12 weeks. We provide detailed timeline estimates during the discovery phase and stick to our commitments with weekly progress updates."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Absolutely! We've helped dozens of founders go from idea to funded startup. We understand resource constraints and can advise on MVP scope to maximize your runway. Many of our clients have successfully raised seed rounds using products we built. We also offer flexible payment terms for qualifying startups."
    },
    {
        question: "What happens after the project is delivered?",
        answer: "You receive complete ownership of all code, designs, and documentation. We provide 30 days of free support for bug fixes and technical questions. After that, we offer maintenance retainers starting at ₹50K/month for ongoing updates, feature additions, and priority support. Many clients choose to hire their own team and we provide full knowledge transfer."
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in modern, proven technologies: Next.js/React for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, AWS/Vercel for hosting, and TypeScript throughout. We choose the best tools for your specific needs, not what's trendy. Every technology decision is documented and justified in terms of your business goals."
    },
    {
        question: "Can you work with our existing team or codebase?",
        answer: "Yes! We frequently collaborate with in-house teams or take over existing projects. We conduct thorough code audits, identify technical debt, and create a roadmap for improvements. Whether you need to rescue a stalled project, add capacity to your team, or build a specific feature, we seamlessly integrate with your workflow."
    },
    {
        question: "How do you handle changes in project scope?",
        answer: "We follow an agile approach with weekly check-ins. Minor adjustments are included, but significant scope changes are documented and priced transparently. We'll always provide options: adjust timeline, adjust features, or adjust budget. Our goal is flexibility while maintaining quality and realistic expectations."
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer: "We've maintained a 98% satisfaction rate by staying in constant communication. Every milestone requires your approval before we proceed. If you're ever unhappy, we'll work until it's right—no additional cost. Our reputation depends on your success, which is why we're selective about projects we take on."
    }
]

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
            className="border-b border-border last:border-none"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group hover:opacity-80 transition-opacity duration-200"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold pr-8 tracking-tight">
                    {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-subtle border border-border group-hover:border-brand-blue transition-colors duration-200">
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-brand-blue" />
                    ) : (
                        <Plus className="w-4 h-4" />
                    )}
                </span>
            </button>
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 0.03, 0.26, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-muted-foreground leading-relaxed pb-6 pr-10">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export function FAQ() {
    return (
        <section className="py-32 md:py-40 bg-background relative overflow-hidden noise-bg">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none blur-3xl" />
            
            <div className="container mx-auto px-6 md:px-16 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block">FAQ</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-[-0.02em]">
                        Questions?{' '}
                        <span className="gradient-text">Answered.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about working with Vyra Labs. Can&apos;t find your answer? 
                        Reach out at{' '}
                        <a 
                            href="mailto:hello@vyralabs.systems" 
                            className="text-brand-blue hover:underline"
                        >
                            hello@vyralabs.systems
                        </a>
                        {' '}or call{' '}
                        <a 
                            href="tel:+918309516983"
                            className="text-brand-blue hover:underline"
                        >
                            +91 8309516983
                        </a>
                    </p>
                </motion.div>

                <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
                    {faqs.map((faq, index) => (
                        <FAQAccordion key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
