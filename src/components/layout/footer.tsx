import Link from 'next/link'
import { Mail, Linkedin, Twitter, Phone, MapPin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="py-16 border-t border-border bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-5">
                        <h3 className="text-lg font-semibold mb-3 tracking-tight">Vyra Labs</h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-md">
                            Elite digital product studio. We craft high-performance products with world-class design and bulletproof engineering.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a 
                                href="mailto:hello@vyralabs.systems" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-brand-blue hover:text-brand-blue-hover transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                hello@vyralabs.systems
                            </a>
                            <a 
                                href="tel:+918309516983" 
                                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-foreground transition-colors duration-200"
                            >
                                <Phone className="w-4 h-4" />
                                +91 8309516983
                            </a>
                            <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                                <MapPin className="w-4 h-4" />
                                Hyderabad, Telangana, India
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-tight uppercase text-gray-500">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" className="text-sm text-gray-700 hover:text-foreground transition-colors duration-200">
                                    What we do
                                </a>
                            </li>
                            <li>
                                <a href="#values" className="text-sm text-gray-700 hover:text-foreground transition-colors duration-200">
                                    Why Vyra
                                </a>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-gray-700 hover:text-foreground transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-sm text-gray-700 hover:text-foreground transition-colors duration-200">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <a href="#contact" className="text-sm text-gray-700 hover:text-foreground transition-colors duration-200">
                                    Get started
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="md:col-span-4">
                        <h4 className="text-sm font-semibold mb-4 tracking-tight uppercase text-gray-500">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <Link 
                                href="https://linkedin.com/company/vyralabs" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-foreground transition-colors duration-200 w-fit"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </Link>
                            <Link 
                                href="https://twitter.com/vyralabs" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-foreground transition-colors duration-200 w-fit"
                            >
                                <Twitter className="w-4 h-4" />
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Vyra Labs. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
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
