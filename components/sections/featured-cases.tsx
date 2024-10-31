import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { NoiseOverlay } from '../ui/noise-overlay'

const FeatureCard = ({
  id,
  title,
  type,
  image
}: {
  id: string
  title: string
  type: string
  image: string
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/projects/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project details`}
      className="relative cursor-pointer border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      <div className="absolute right-0 top-0 p-4">
        <div className="font-mono text-xs text-muted-foreground">{`//${type}`}</div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="h-72 w-full object-cover opacity-70 transition-opacity hover:opacity-100"
        />
        <NoiseOverlay />
      </div>
      <div className="mt-6">
        <h3 className="font-mono uppercase text-foreground">{title}</h3>
      </div>
    </div>
  )
}

export const FeaturedCases = () => {
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

  return (
    <section className="bg-card px-6 py-24">
      <div className="mb-12">
        <div className="text-4xl font-bold text-foreground transition-colors hover:text-primary">
          FEATURED CASES
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          MY FEATURED WORKS BASED ON THE DIGITAL REALM AND UNIQUE EXPERIENCES OF
          UI
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FeatureCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
