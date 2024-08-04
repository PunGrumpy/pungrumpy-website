import { ProjectCard } from '@/components/project-card'

const works = [
  {
    slug: 'paperclip',
    imageUrl: '/works/paperclip.png',
    projectType: 'University Project',
    title: 'Paperclip',
    description:
      'An online platform for learning UX/UI design and coding, developed as part of the Human-Computer Interaction course at the university.'
  },
  {
    slug: 'pongsathorn-portfolio',
    imageUrl: '/works/pongsathorn-portfolio.png',
    projectType: 'Personal Work',
    title: "Pongsathorn's Portfolio",
    description:
      'A personal portfolio website that showcases works, skills, and experiences. It is built with Next.js, Tailwind CSS, and TypeScript.'
  }
]

export default function WorksPage() {
  return (
    <>
      <div className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map(work => (
            <ProjectCard
              key={work.title}
              slug={work.slug}
              imageUrl={work.imageUrl}
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
