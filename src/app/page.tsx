import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Values } from '@/components/sections/values'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
