'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Visual */}
                <div className="mb-12">
                    <h1 className="text-9xl md:text-[12rem] font-bold tracking-tighter text-gray-200 leading-none">
                        404
                    </h1>
                    <div className="-mt-8">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                            Page not found
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
                            It might have been moved or doesn&apos;t exist.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link href="/">
                        <Button variant="accent" className="gap-2">
                            <Home className="w-4 h-4" />
                            Go to homepage
                        </Button>
                    </Link>
                    <Button 
                        variant="ghost" 
                        onClick={() => window.history.back()}
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go back
                    </Button>
                </div>

                {/* Helpful links */}
                <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-sm text-gray-500 mb-4">Popular pages</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link 
                            href="/#services" 
                            className="text-brand-blue hover:underline"
                        >
                            What we do
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link 
                            href="/#values" 
                            className="text-brand-blue hover:underline"
                        >
                            Why Vyra
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link 
                            href="/#contact" 
                            className="text-brand-blue hover:underline"
                        >
                            Contact us
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link 
                            href="/privacy" 
                            className="text-brand-blue hover:underline"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
