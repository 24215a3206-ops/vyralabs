'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
    name: string
    email: string
    company: string
    projectType: string
    message: string
}

export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toISOString()
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit form')
            }

            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: ''
            })

            // Track form submission
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'form_submission', {
                    event_category: 'Contact',
                    event_label: 'Contact Form',
                })
            }
        } catch (error) {
            setSubmitStatus('error')
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-32 md:py-40 relative overflow-hidden bg-background noise-bg">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,102,255,0.06),transparent_60%)] animate-aurora blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(98,0,234,0.05),transparent_60%)] animate-float-delayed blur-3xl pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-medium uppercase tracking-widest text-brand-blue mb-4 block">Get in touch</span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-[-0.03em] leading-[1.05]">
                        Let&apos;s build something{' '}
                        <span className="gradient-text">exceptional.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We accept 12-16 select projects each year. Share your vision below and we&apos;ll get back to you within 24 hours.
                    </p>

                    {/* Direct Contact Info */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
                        <a 
                            href="tel:+918309516983" 
                            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-hover font-medium transition-colors min-h-[44px]"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 8309516983
                        </a>
                        <a 
                            href="mailto:hello@vyralabs.systems" 
                            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-hover font-medium transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            hello@vyralabs.systems
                        </a>
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Hyderabad, Telangana
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 0.03, 0.26, 1] }}
                    className="relative bg-subtle border border-border rounded-2xl p-8 md:p-12 hover:border-brand-blue/20 transition-colors duration-500 overflow-hidden"
                >
                    {/* Form glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(0,102,255,0.04),transparent_50%)] pointer-events-none" />
                    {submitStatus === 'success' ? (
                        <div className="text-center py-12">
                            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold mb-3">Thank you for reaching out!</h3>
                            <p className="text-muted-foreground mb-6">
                                We&apos;ve received your message and will get back to you within 24 hours.
                            </p>
                            <Button 
                                variant="ghost" 
                                onClick={() => setSubmitStatus('idle')}
                            >
                                Submit another inquiry
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                                        placeholder="Rahul Verma"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                                        placeholder="rahul@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                                    placeholder="Acme Technologies"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                                    Project Type *
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    required
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="website">Marketing Website</option>
                                    <option value="saas-mvp">SaaS MVP</option>
                                    <option value="enterprise-tool">Enterprise Tool</option>
                                    <option value="redesign">Redesign/Rebuild</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Tell us about your project *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Describe your project goals, challenges, and what success looks like..."
                                />
                            </div>

                            {submitStatus === 'error' && (
                                <div className="flex items-start gap-3 p-4 bg-error/10 border border-error/20 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                                    <p className="text-sm text-error">{errorMessage}</p>
                                </div>
                            )}

                            <Button 
                                type="submit" 
                                variant="accent" 
                                disabled={isSubmitting}
                                className="w-full h-12 text-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send your inquiry'
                                )}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                By submitting this form, you agree to our{' '}
                                <a href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</a>
                                {' '}and{' '}
                                <a href="/terms" className="text-brand-blue hover:underline">Terms of Service</a>.
                            </p>
                        </form>
                    )}
                </motion.div>

                {/* Trust indicators */}
                <div className="mt-16 pt-8 border-t border-border max-w-3xl mx-auto">
                    <p className="text-sm text-muted-foreground mb-4 text-center">Trusted by startups and enterprises</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        <span>4-12 week delivery</span>
                        <span className="hidden sm:inline">•</span>
                        <span>98% satisfaction rate</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Elite quality guaranteed</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
