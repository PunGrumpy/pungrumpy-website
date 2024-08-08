import { Metadata } from 'next'

import { WorkCard } from '@/components/works/work-card'
import { sanityFetcher } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/query'
import type { ProjectInterface } from '@/types'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/works`)
    : new URL('http://localhost:3000/works'),
  title: 'Works',
  description: 'A collection of my works and projects.'
}

export default async function WorksPage() {
  const projects: ProjectInterface[] = await sanityFetcher({
    query: projectsQuery,
    tags: ['projects']
  })

  return (
    <main className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
        {projects.map((project, index) => (
          <WorkCard
            key={project._id}
            index={index}
            name={project.name}
            slug={project.slug}
            maintainStatus={project.maintainStatus}
            projectStage={project.projectStage}
            projectType={project.projectType}
            tagline={project.tagline}
            coverImage={project.coverImage.image}
          />
        ))}
      </div>
    </main>
  )
}
