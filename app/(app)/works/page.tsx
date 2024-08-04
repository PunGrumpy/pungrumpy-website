import { ProjectCard } from '@/components/project-card'
import { Works } from '@/config/works'

export default function WorksPage() {
  return (
    <>
      <div className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Works.map(work => (
            <ProjectCard
              key={work.title}
              slug={work.slug}
              imageUrl={work.imageUrl}
              iconType={work.iconType}
              projectType={work.projectType}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}
