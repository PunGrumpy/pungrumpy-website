import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { fetchProjects } from '@/app/(app)/actions'
import { SlideInView } from '@/components/animation/slide-in-view'
import { ProjectCard } from '@/components/card/project-card'
import { HeadingSection } from '@/components/section/heading-section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/works`)
    : new URL('http://localhost:3000/works'),
  title: 'Works',
  description: 'A collection of my works and projects.'
}

export default async function WorksPage() {
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
              href={`/works/${encodeURIComponent(project.slug)}`}
              className="flex h-full flex-col"
            >
              {/* <Card className="relative h-full overflow-hidden bg-card transition-shadow duration-300 hover:border-primary/20">
                <CardContent className="flex space-x-4 p-4">
                  <div className="flex size-16 items-center justify-center rounded-md bg-primary/10 text-4xl font-bold">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage.image}
                        alt={project.coverImage.alt}
                        width={64}
                        height={64}
                        className="p-2"
                      />
                    ) : (
                      <span>{project.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.repository}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </SlideInView>
    </main>
  )
}
