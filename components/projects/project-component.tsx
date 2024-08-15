import Image from 'next/image'
import { PortableText } from 'next-sanity'

import { SlideInView } from '@/components/animation/slide-in-view'
import { ProjectInterface } from '@/types'

interface ProjectComponentProps {
  project: ProjectInterface
}

export const ProjectComponent: React.FC<ProjectComponentProps> = ({
  project
}) => {
  return (
    <SlideInView className="space-y-8 md:space-y-16">
      <section className="mx-auto">
        <h1 className="mb-4 max-w-md text-3xl tracking-tight sm:text-5xl">
          {project.name}
        </h1>
      </section>
      <section className="space-y-8 md:space-y-16">
        <div className="rounded-xl bg-gradient-to-b from-primary/20 to-transparent p-px">
          <Image
            src={project.coverImage.image}
            alt={project.coverImage.alt || project.name}
            width={1920}
            height={1080}
            quality={100}
            placeholder={project.coverImage?.lqip ? 'blur' : 'empty'}
            blurDataURL={project.coverImage?.lqip || ''}
            className="size-full rounded-[calc(0.75rem-1px)] object-cover"
          />
        </div>
        <div>
          <PortableText value={project.description} />
        </div>
      </section>
    </SlideInView>
  )
}
