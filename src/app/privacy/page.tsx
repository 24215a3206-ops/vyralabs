import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Learn how Vyra Labs collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-16 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-[-0.02em]">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 mb-12">
                        Last updated: February 10, 2026
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Vyra Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            
                            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Fill out our contact form</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request information about our services</li>
                                <li>Engage with us through email or other communication channels</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This information may include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Company name</li>
                                <li>Phone number</li>
                                <li>Project details and business information</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device identifiers</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you information about our services</li>
                                <li>Improve our website and services</li>
                                <li>Analyze website usage and trends</li>
                                <li>Protect against fraudulent or illegal activity</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our website and conduct our business (e.g., Google Sheets for form submissions, analytics providers)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our business</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                                <li>Access to your personal information</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of your personal information</li>
                                <li>Restriction of processing</li>
                                <li>Data portability</li>
                                <li>Objection to processing</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed">
                                To exercise these rights, please contact us at{' '}
                                <a href="mailto:privacy@vyralabs.systems" className="text-brand-blue hover:underline">
                                    privacy@vyralabs.systems
                                </a>
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-subtle border border-border rounded-lg p-6">
                                <p className="text-gray-700 mb-2">
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:privacy@vyralabs.systems" className="text-brand-blue hover:underline">
                                        privacy@vyralabs.systems
                                    </a>
                                </p>
                                <p className="text-gray-700">
                                    <strong>Website:</strong>{' '}
                                    <a href="https://vyralabs.systems" className="text-brand-blue hover:underline">
                                        vyralabs.systems
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
