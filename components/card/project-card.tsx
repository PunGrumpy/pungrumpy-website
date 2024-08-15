import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { ProjectInterface } from '@/types'

interface ProjectCardProps {
  project: ProjectInterface
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="grid w-full max-w-md gap-6 p-6 hover:border-primary/20">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-md bg-primary/10 p-3">
          <Image
            src={project.coverImage.image}
            alt={project.coverImage.alt || project.name}
            width={32}
            height={32}
            className="size-8"
          />
        </div>
        <div className="flex-1 flex-col justify-start space-y-1">
          <h3 className="text-xl font-semibold">{project.name}</h3>
        </div>
      </div>
      <div className="h-12 text-muted-foreground">{project.tagline}</div>
    </Card>
  )
}
