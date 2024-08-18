import { GitHubGraphSection } from '@/components/section/github-graph-section'
import { HeroSection } from '@/components/section/hero-section'

export default function Home() {
  return (
    <main className="z-10 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl text-start">
      <HeroSection />
      <GitHubGraphSection />
    </main>
  )
}
