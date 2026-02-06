'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
})

interface SplineSceneProps {
    scene: string
    className?: string
}

export default function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-muted-foreground/20">Loading 3D...</div>}>
            <Spline scene={scene} className={className} />
        </Suspense>
    )
}
