import Link from 'next/link'
import { Mail, Linkedin, Twitter, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export function Footer() {
    return (
        <footer className="relative py-20 border-t border-border bg-muted/30 overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,102,255,0.03),transparent_60%)] pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
                {/* Top CTA strip */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-16 mb-16 border-b border-border">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Ready to build?</h3>
                        <p className="text-muted-foreground">Let&apos;s turn your idea into a product users love.</p>
                    </div>
                    <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue text-white font-medium hover:bg-brand-blue-hover transition-colors duration-200 group">
                        Start a project
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-blue to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                V
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">Vyra Labs</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                            Elite digital product studio. We craft high-performance products with world-class design and bulletproof engineering.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a 
                                href="mailto:hello@vyralabs.systems" 
                                className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-hover transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                hello@vyralabs.systems
                            </a>
                            <a 
                                href="tel:+918309516983" 
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                <Phone className="w-4 h-4" />
                                +91 8309516983
                            </a>
                            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                Hyderabad, Telangana, India
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-tight uppercase text-muted-foreground">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                    What we do
                                </Link>
                            </li>
                            <li>
                                <Link href="/#values" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                    Why Vyra
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                                    Get started
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-4">
                        <h4 className="text-sm font-semibold mb-4 tracking-tight uppercase text-muted-foreground">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <Link 
                                href="https://linkedin.com/company/vyralabs" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </Link>
                            <Link 
                                href="https://twitter.com/vyralabs" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                            >
                                <Twitter className="w-4 h-4" />
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Vyra Labs. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <Link href="/privacy" className="hover:text-foreground transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
