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
        '@type': 'Organization',
        name,
        url,
        logo,
        description,
        email,
        telephone: phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            addressCountry: 'IN'
        },
        sameAs: [
            social.linkedin,
            social.twitter,
        ].filter(Boolean),
        contactPoint: {
            '@type': 'ContactPoint',
            email,
            telephone: phone,
            contactType: 'customer service',
            areaServed: 'Worldwide',
            availableLanguage: ['English']
        }
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
        name,
        url,
        description
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
