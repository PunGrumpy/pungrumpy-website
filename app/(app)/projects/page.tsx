import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { fetchProjects } from '@/app/(app)/actions'
import { SlideInView } from '@/components/animation/slide-in-view'
import { ProjectCard } from '@/components/card/project-card'
import { HeadingSection } from '@/components/section/heading-section'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/projects`)
    : new URL('http://localhost:3000/projects'),
  title: 'Projects',
  description: 'A collection of my works and projects.'
}

export default async function ProjectsPage() {
  const projects = await fetchProjects()

  return (
    <main className="gap-15 z-10 mx-auto flex max-w-6xl flex-col">
      <HeadingSection
        title="Projects"
        description="I've worked on tons of little projects over the years but these are the ones I'm most proud of. Check them out below!"
      />
      <SlideInView delay={0.1}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Link
              key={project._id}
              href={`/projects/${encodeURIComponent(project.slug)}`}
              className="flex h-full flex-col"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </SlideInView>
    </main>
  )
}
