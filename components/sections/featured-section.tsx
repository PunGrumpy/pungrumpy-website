'use client'

import { useRouter } from 'next/navigation'
import * as React from 'react'

import { FeatureCard } from '@/components/ui/feature-card'

const projects = [
  {
    id: 'distil-wizard',
    title: 'DISTIL WIZARD',
    type: 'SYSTEM',
    image: 'https://placehold.co/800x600/png'
  },
  {
    id: 'qa-tester',
    title: 'QA TESTER',
    type: 'DEVOPS',
    image: 'https://placehold.co/800x600/png'
  }
]

export const FeaturedSection = () => {
  const router = useRouter()

  const handleProjectClick = (id: string) => {
    router.push(`/projects/${id}`)
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
        {projects.map(project => (
          <FeatureCard
            key={project.id}
            {...project}
            onClick={() => handleProjectClick(project.id)}
            onKeyDown={e => e.key === 'Enter' && handleProjectClick(project.id)}
          />
        ))}
      </div>
    </section>
  )
}
