'use client'

import { useRouter } from 'next/navigation'

import { FeatureCard } from '@/components/ui/feature-card'
import { WORKS_DATA } from '@/contrants/works'

export const FeaturedSection = () => {
  const router = useRouter()

  const handleProjectClick = (id: string) => {
    router.push(`/works/${id}`)
  }

  return (
    <section className="bg-card">
      <div className="mb-12">
        <div className="text-4xl font-bold text-foreground transition-colors hover:text-primary md:text-6xl">
          FEATURED CASES
        </div>
        <div className="mt-2 text-muted-foreground">
          MY FEATURED WORKS BASED ON THE DIGITAL REALM AND UNIQUE EXPERIENCES OF
          UI
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {WORKS_DATA.slice(0, 4).map(work => (
          <FeatureCard
            key={work.id}
            {...work}
            onClick={() => handleProjectClick(work.id)}
            onKeyDown={e => e.key === 'Enter' && handleProjectClick(work.id)}
          />
        ))}
      </div>
    </section>
  )
}
