'use client'

import { useEffect, useState } from 'react'

interface ABTestConfig {
    testName: string
    variants: string[]
    weights?: number[]
}

export function useABTest(config: ABTestConfig): string {
    const [variant, setVariant] = useState<string>(config.variants[0])

    useEffect(() => {
        // Get or create user ID
        let userId = localStorage.getItem('vyra_user_id')
        if (!userId) {
            userId = Math.random().toString(36).substring(7)
            localStorage.setItem('vyra_user_id', userId)
        }

        // Check if user already has a variant assigned
        const storageKey = `vyra_ab_${config.testName}`
        let assignedVariant = localStorage.getItem(storageKey)

        if (assignedVariant && config.variants.includes(assignedVariant)) {
            setVariant(assignedVariant)
        } else {
            // Assign variant based on weights or evenly
            const weights = config.weights || config.variants.map(() => 1 / config.variants.length)
            const random = Math.random()
            let sum = 0
            
            for (let i = 0; i < config.variants.length; i++) {
                sum += weights[i]
                if (random < sum) {
                    assignedVariant = config.variants[i]
                    break
                }
            }

            if (assignedVariant) {
                localStorage.setItem(storageKey, assignedVariant)
                setVariant(assignedVariant)

                // Track variant assignment in analytics
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'ab_test_assigned', {
                        event_category: 'AB Testing',
                        event_label: config.testName,
                        value: assignedVariant,
                    })
                }
            }
        }
    }, [config.testName, config.variants, config.weights])

    return variant
}

// Track AB test conversion
export function trackABTestConversion(testName: string, variant: string, conversionName: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ab_test_conversion', {
            event_category: 'AB Testing',
            event_label: `${testName}_${variant}`,
            value: conversionName,
        })
    }
}

// Example usage component
export function ABTestExample() {
    const variant = useABTest({
        testName: 'homepage_hero_cta',
        variants: ['control', 'variant_a', 'variant_b'],
        weights: [0.33, 0.33, 0.34] // Optional: custom weights
    })

    const handleCTAClick = () => {
        trackABTestConversion('homepage_hero_cta', variant, 'cta_clicked')
        // Your CTA action here
    }

    return (
        <button onClick={handleCTAClick}>
            {variant === 'control' && 'Start your project'}
            {variant === 'variant_a' && 'Get started now'}
            {variant === 'variant_b' && 'Build with us'}
        </button>
    )
}
