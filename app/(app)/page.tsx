import { GallerySection } from '@/components/section/gallery-section'
import { HeroSection } from '@/components/section/hero-section'

export default function Home() {
  return (
    <main className="xs:p-5 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start sm:p-8">
      <HeroSection />
      <GallerySection />
    </main>
  )
}
