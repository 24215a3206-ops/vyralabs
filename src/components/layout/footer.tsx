import Link from 'next/link'

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Vyra Labs. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Twitter
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    )
}
