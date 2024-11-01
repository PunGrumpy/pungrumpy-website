import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ContactSection } from '@/components/sections/contact-section'
import { DescriptionSection } from '@/components/sections/description-section'
import { FeaturedSection } from '@/components/sections/featured-section'
import { HeroSection } from '@/components/sections/hero-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Header variant="default" size="lg">
        <div className="space-x-6 font-mono">
          <span className="hidden md:inline">{'//DIGITAL WEB + DEVOPS'}</span>
          <span>BASED IN BKK, THAILAND</span>
        </div>
      </Header>

      <main className="container mx-auto space-y-12 md:space-y-24">
        <HeroSection />
        <FeaturedSection />
        <DescriptionSection />
        <ContactSection />
      </main>

      <Footer>
        <span className="text-sm text-muted-foreground">
          © 2024 All rights reserved
        </span>
      </Footer>
    </div>
  )
}
