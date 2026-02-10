import Script from 'next/script'

interface OrganizationSchemaProps {
    name: string
    url: string
    logo: string
    description: string
    email: string
    phone?: string
    social: {
        linkedin?: string
        twitter?: string
    }
}

export function OrganizationSchema({ name, url, logo, description, email, phone, social }: OrganizationSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${url}/#organization`,
        name,
        alternateName: ['VyraLabs', 'Vyra Labs', 'vyralabs.systems'],
        url,
        logo: {
            '@type': 'ImageObject',
            url: logo,
            width: 512,
            height: 512
        },
        image: logo,
        description,
        email,
        telephone: phone,
        foundingDate: '2024',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 5,
            maxValue: 20
        },
        slogan: 'Where vision meets velocity',
        knowsAbout: [
            'SaaS Development',
            'MVP Development',
            'Web Application Development',
            'Next.js Development',
            'React Development',
            'Enterprise Software',
            'UI/UX Design',
            'Product Engineering'
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500032',
            addressCountry: 'IN'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 17.385044,
            longitude: 78.486671
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 0,
                longitude: 0
            },
            geoRadius: '40075000'
        },
        serviceArea: {
            '@type': 'Place',
            name: 'Worldwide'
        },
        priceRange: '$$$$',
        sameAs: [
            social.linkedin,
            social.twitter,
        ].filter(Boolean),
        contactPoint: [{
            '@type': 'ContactPoint',
            email,
            telephone: phone,
            contactType: 'customer service',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Hindi']
        }, {
            '@type': 'ContactPoint',
            email,
            telephone: phone,
            contactType: 'sales',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Hindi']
        }],
        makesOffer: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SaaS MVP Development',
                    description: 'From concept to launch-ready SaaS product in 6-8 weeks'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'High-Performance Websites',
                    description: 'Lightning-fast marketing sites that convert visitors to customers'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Enterprise Tools',
                    description: 'Tailored internal platforms and workflow automation systems'
                }
            }
        ]
    }

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface ServiceSchemaProps {
    name: string
    description: string
    provider: string
    areaServed: string
}

export function ServiceSchema({ name, description, provider, areaServed }: ServiceSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: name,
        description,
        provider: {
            '@type': 'Organization',
            name: provider
        },
        areaServed,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Product Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'SaaS MVP Development',
                        description: 'From concept to launch-ready product in 6-8 weeks'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'High-Performance Websites',
                        description: 'Lightning-fast marketing sites that convert'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Custom Enterprise Tools',
                        description: 'Tailored internal platforms and workflow automation'
                    }
                }
            ]
        }
    }

    return (
        <Script
            id="service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface FAQSchemaProps {
    faqs: Array<{
        question: string
        answer: string
    }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface WebsiteSchemaProps {
    name: string
    url: string
    description: string
}

export function WebsiteSchema({ name, url, description }: WebsiteSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        name,
        alternateName: ['VyraLabs', 'Vyra Labs', 'vyralabs.systems'],
        url,
        description,
        publisher: {
            '@id': `${url}/#organization`
        },
        inLanguage: 'en-US',
        copyrightYear: new Date().getFullYear(),
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${url}/?s={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    }

    return (
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

interface BreadcrumbSchemaProps {
    items: Array<{
        name: string
        url: string
    }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
