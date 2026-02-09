import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Values } from '@/components/sections/values'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'
import { OrganizationSchema, ServiceSchema, FAQSchema, WebsiteSchema } from '@/components/schema-markup'

const faqs = [
  {
    question: "What's included in your SaaS MVP development?",
    answer: "We deliver a production-ready product with core features, user authentication, responsive design, database setup, API integration, admin dashboard, automated testing, deployment to cloud infrastructure, comprehensive documentation, and 30 days of post-launch support."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4-12 weeks depending on scope. Marketing websites typically take 3-4 weeks, SaaS MVPs 6-8 weeks, and enterprise tools 8-12 weeks."
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely! We've helped dozens of founders go from idea to funded startup. We understand resource constraints and can advise on MVP scope to maximize your runway."
  },
  {
    question: "What happens after the project is delivered?",
    answer: "You receive complete ownership of all code, designs, and documentation. We provide 30 days of free support for bug fixes and technical questions."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern, proven technologies: Next.js/React for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for databases, AWS/Vercel for hosting, and TypeScript throughout."
  },
  {
    question: "Can you work with our existing team or codebase?",
    answer: "Yes! We frequently collaborate with in-house teams or take over existing projects. We conduct thorough code audits, identify technical debt, and create a roadmap for improvements."
  },
  {
    question: "How do you handle changes in project scope?",
    answer: "We follow an agile approach with weekly check-ins. Minor adjustments are included, but significant scope changes are documented and priced transparently."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "We've maintained a 100% satisfaction rate by staying in constant communication. Every milestone requires your approval before we proceed."
  }
]

export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <OrganizationSchema
        name="Vyra Labs"
        url="https://vyralabs.systems"
        logo="https://vyralabs.systems/icon.svg"
        description="Elite digital product studio. We craft high-performance products with world-class design and bulletproof engineering."
        email="hello@vyralabs.systems"
        phone="+918309516983"
        social={{
          linkedin: "https://linkedin.com/company/vyralabs",
          twitter: "https://twitter.com/vyralabs"
        }}
      />
      <ServiceSchema
        name="Digital Product Development"
        description="High-performance digital products built with founder-level clarity, world-class design, and bulletproof engineering."
        provider="Vyra Labs"
        areaServed="Worldwide"
      />
      <FAQSchema faqs={faqs} />
      <WebsiteSchema
        name="Vyra Labs"
        url="https://vyralabs.systems"
        description="Elite digital product studio specializing in SaaS MVP development, high-performance websites, and custom enterprise tools."
      />

      <main id="main-content" className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <Values />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
