import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | Vyra Labs',
    description: 'Read the terms and conditions for using Vyra Labs services. Our service agreement for digital product development.',
    alternates: {
        canonical: 'https://vyralabs.systems/terms'
    }
}

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-16 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-[-0.02em]">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground mb-12">
                        Last updated: February 10, 2026
                    </p>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                By accessing or using the Vyra Labs website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Services</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Vyra Labs provides digital product development services, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Website design and development</li>
                                <li>SaaS MVP development</li>
                                <li>Custom enterprise tool development</li>
                                <li>Product strategy and consulting</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                Specific services, timelines, and deliverables will be outlined in individual project agreements or statements of work.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Project Engagement</h2>
                            
                            <h3 className="text-xl font-semibold mb-3 mt-6">Proposal and Agreement</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All projects begin with a discovery phase and proposal. Work will not commence until both parties have signed a project agreement and initial payment has been received.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Client Responsibilities</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Clients are responsible for:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Providing timely feedback and approvals</li>
                                <li>Supplying necessary content, assets, and access</li>
                                <li>Making timely payments per the agreed schedule</li>
                                <li>Maintaining clear communication throughout the project</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Timeline and Delays</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Project timelines are estimates based on our current workload and client responsiveness. Delays in client feedback or provision of materials may extend project timelines. We will communicate any expected delays promptly.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Payment terms will be specified in individual project agreements. Typically:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>50% deposit required to begin work</li>
                                <li>Milestone payments for larger projects</li>
                                <li>Final payment due upon project completion</li>
                                <li>Invoices are due within 14 days unless otherwise specified</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                Late payments may incur interest charges of 1.5% per month or the maximum allowed by law. We reserve the right to suspend work on projects with overdue payments.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                            
                            <h3 className="text-xl font-semibold mb-3 mt-6">Client Ownership</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Upon full payment, clients own the final deliverables created specifically for their project, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Custom designs and visual assets</li>
                                <li>Custom code written for the project</li>
                                <li>Project-specific documentation</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Vyra Labs Ownership</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Vyra Labs retains ownership of:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Pre-existing code libraries and frameworks</li>
                                <li>Proprietary tools and methodologies</li>
                                <li>General knowledge and techniques</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">Portfolio Rights</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to showcase completed work in our portfolio and marketing materials unless a non-disclosure agreement specifies otherwise. Clients may request anonymity or removal from our portfolio at any time.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We warrant that:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Services will be performed with professional skill and care</li>
                                <li>Deliverables will substantially conform to agreed specifications</li>
                                <li>We have the right to provide the services</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Disclaimer:</strong> Except as expressly stated above, all services are provided &ldquo;as is&rdquo; without warranty of any kind, either express or implied. We do not guarantee specific business results, traffic, or revenue from our work.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To the maximum extent permitted by law, Vyra Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability shall not exceed the amount paid by the client for the specific project giving rise to the claim.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Both parties agree to keep confidential any proprietary information shared during the project. This obligation survives termination of the project. Confidential information does not include information that is publicly available or independently developed.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Either party may terminate a project with written notice. Upon termination:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                                <li>Client will pay for all work completed to date</li>
                                <li>Vyra Labs will deliver all work in progress</li>
                                <li>Intellectual property transfers only for fully paid work</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Vyra Labs operates, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of modified terms.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Questions about these Terms? Contact us:
                            </p>
                            <div className="bg-subtle border border-border rounded-lg p-6">
                                <p className="text-muted-foreground mb-2">
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:legal@vyralabs.systems" className="text-brand-blue hover:underline">
                                        legal@vyralabs.systems
                                    </a>
                                </p>
                                <p className="text-muted-foreground">
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
