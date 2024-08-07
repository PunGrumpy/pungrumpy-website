import { Metadata } from 'next'

import { WorkCard } from '@/components/works/work-card'
import { sanityFetcher } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/query'
import type { ProjectInterface } from '@/types'

export const metadata: Metadata = {
  title: 'Works',
  description: 'A collection of my works and projects.'
}

export default async function WorksPage() {
  const projects: ProjectInterface[] = await sanityFetcher({
    query: projectsQuery,
    tags: ['projects']
  })

  return (
    <>
      <div className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </>
  )
}
