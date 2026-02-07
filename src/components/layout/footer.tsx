import Link from 'next/link'

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
                <div className="text-sm text-muted-foreground font-light">
                    &copy; {new Date().getFullYear()} Vyra Labs. All rights reserved.
                </div>

                <div className="flex items-center gap-8">
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                    >
                        Twitter
                    </Link>
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                    >
                        LinkedIn
                    </Link>
                    <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    )
}
