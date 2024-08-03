import { GallerySection } from '@/components/section/gallery-section'
import { HeroSection } from '@/components/section/hero-section'

export default function Home() {
  return (
    <main className="mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl text-start">
      <HeroSection />
      <GallerySection />
    </main>
  )
}
