export function LoadingSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
    )
}

export function HeroSkeleton() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-background">
            <div className="container relative z-10 px-6 md:px-16 max-w-7xl">
                <div className="max-w-4xl animate-pulse">
                    <div className="h-8 bg-muted rounded w-48 mb-8"></div>
                    <div className="h-20 bg-muted rounded w-full mb-4"></div>
                    <div className="h-20 bg-muted rounded w-3/4 mb-8"></div>
                    <div className="h-6 bg-muted rounded w-full mb-2"></div>
                    <div className="h-6 bg-muted rounded w-5/6 mb-12"></div>
                    <div className="flex gap-3">
                        <div className="h-12 bg-muted rounded w-40"></div>
                        <div className="h-12 bg-muted rounded w-40"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ServicesSkeleton() {
    return (
        <section className="py-32 md:py-40 bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="mb-20 max-w-2xl animate-pulse">
                    <div className="h-16 bg-muted rounded w-64 mb-6"></div>
                    <div className="h-6 bg-muted rounded w-full mb-2"></div>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-10 bg-subtle border border-border rounded-xl animate-pulse">
                            <div className="h-12 w-12 bg-muted rounded-lg mb-6"></div>
                            <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                            <div className="h-4 bg-muted rounded w-full mb-2"></div>
                            <div className="h-4 bg-muted rounded w-5/6 mb-2"></div>
                            <div className="h-4 bg-muted rounded w-4/6 mb-4"></div>
                            <div className="h-3 bg-muted rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function TestimonialsSkeleton() {
    return (
        <section className="py-32 md:py-40 bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-7xl">
                <div className="mb-20 text-center max-w-2xl mx-auto animate-pulse">
                    <div className="h-16 bg-muted rounded w-96 mx-auto mb-6"></div>
                    <div className="h-6 bg-muted rounded w-full mb-2"></div>
                    <div className="h-6 bg-muted rounded w-3/4 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-subtle border border-border rounded-2xl p-8 animate-pulse">
                            <div className="h-8 w-8 bg-muted rounded mb-6"></div>
                            <div className="space-y-2 mb-8">
                                <div className="h-4 bg-muted rounded w-full"></div>
                                <div className="h-4 bg-muted rounded w-full"></div>
                                <div className="h-4 bg-muted rounded w-3/4"></div>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-border">
                                <div className="w-12 h-12 rounded-full bg-muted"></div>
                                <div className="flex-1">
                                    <div className="h-4 bg-muted rounded w-24 mb-2"></div>
                                    <div className="h-3 bg-muted rounded w-32"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ContactSkeleton() {
    return (
        <section className="py-32 md:py-40 bg-background">
            <div className="container mx-auto px-6 md:px-16 max-w-5xl">
                <div className="text-center mb-16 animate-pulse">
                    <div className="h-20 bg-muted rounded w-3/4 mx-auto mb-6"></div>
                    <div className="h-6 bg-muted rounded w-full max-w-2xl mx-auto mb-2"></div>
                    <div className="h-6 bg-muted rounded w-3/4 max-w-2xl mx-auto"></div>
                </div>

                <div className="bg-subtle border border-border rounded-2xl p-8 md:p-12 animate-pulse">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-12 bg-muted rounded"></div>
                            <div className="h-12 bg-muted rounded"></div>
                        </div>
                        <div className="h-12 bg-muted rounded"></div>
                        <div className="h-12 bg-muted rounded"></div>
                        <div className="h-32 bg-muted rounded"></div>
                        <div className="h-12 bg-muted rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
