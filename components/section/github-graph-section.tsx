import { SlideInView } from '@/components/animation/slide-in-view'
import { ContributionGraphCard } from '@/components/card/contribution-graph-card'

export const GitHubGraphSection: React.FC = () => {
  return (
    <section className="flex w-full max-w-6xl flex-col items-start space-y-6 sm:space-y-8">
      <SlideInView delay={0.16}>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Contribution Graph
        </h2>
      </SlideInView>
      <SlideInView delay={0.2}>
        <ContributionGraphCard />
      </SlideInView>
    </section>
  )
}
