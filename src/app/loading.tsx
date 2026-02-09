import { HeroSkeleton, ServicesSkeleton } from '@/components/loading-skeletons'

export default function Loading() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <HeroSkeleton />
            <ServicesSkeleton />
        </main>
    )
}
