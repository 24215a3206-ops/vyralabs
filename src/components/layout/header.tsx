'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#values' },
    { name: 'Work', href: '#work' },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' 
                    : 'bg-transparent py-5'
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
        >
            <div className="container mx-auto px-6 md:px-16 flex items-center justify-between max-w-7xl">
                <Link href="/" className="text-base font-semibold tracking-tight z-50 hover:opacity-60 transition-opacity duration-200">
                    Vyra Labs
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="secondary" className="text-xs px-4 h-9">
                        Let&apos;s talk
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-foreground hover:opacity-60 transition-opacity duration-200"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-2xl font-light tracking-tight hover:opacity-60 transition-opacity duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <Button className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                            Let&apos;s talk
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}
