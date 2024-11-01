import { Project } from '@/types/project'

interface ProjectMetadataProps {
  project: Project
}

export const ProjectMetadata = ({ project }: ProjectMetadataProps) => {
  return (
    <div className="w-60 space-y-6 pt-2">
      <div>
        <div className="text-sm text-muted-foreground">CLIENT</div>
        <div className="text-xl uppercase">EVERYONE</div>
      </div>

      <div>
        <div className="text-sm text-muted-foreground">YEAR</div>
        <div className="text-xl">{project.year}</div>
      </div>

      <div>
        <div className="text-sm text-muted-foreground">CATEGORY</div>
        <div className="text-xl uppercase">OPEN SOURCE</div>
      </div>

      <div>
        <div className="text-sm text-muted-foreground">LIVE PROJECT</div>
        <button
          className="group mt-1 flex items-center gap-2"
          aria-label={`View ${project.title} project`}
        >
          <span className="text-xl">VIEW NOW</span>
          <span className="font-normal text-muted-foreground transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      <div>
        <div className="text-sm text-muted-foreground">TECHNOLOGIES</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-card-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
