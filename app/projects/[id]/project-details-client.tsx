'use client'

import { ProjectContent } from '@/components/projects/project-content'
import { ProjectMetadata } from '@/components/projects/project-metadata'
import { type Project } from '@/types/project'

interface ProjectDetailsClientProps {
  project: Project
}

export default function ProjectDetailsClient({
  project
}: ProjectDetailsClientProps) {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <main className="container mx-auto pt-24">
        <div className="grid grid-cols-[1fr_auto] gap-24">
          <ProjectContent project={project} />
          <ProjectMetadata project={project} />
        </div>
      </main>
    </div>
  )
}
