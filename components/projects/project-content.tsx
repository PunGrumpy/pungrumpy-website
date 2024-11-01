import Image from 'next/image'

import { NoiseOverlay } from '@/components/ui/noise-overlay'
import { type Project } from '@/types/project'

interface ProjectContentProps {
  project: Project
}

export const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="mb-6 text-6xl font-bold uppercase tracking-tight">
          {project.title}
        </h1>
        <p className="max-w-xl text-muted-foreground">{project.description}</p>
      </div>

      <div className="relative aspect-video w-full overflow-hidden">
        <div className="relative size-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <NoiseOverlay />
          <div className="absolute inset-0 bg-background/10" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">About the Project</h2>
        <p className="text-muted-foreground">{project.fullDescription}</p>
      </div>
    </div>
  )
}
