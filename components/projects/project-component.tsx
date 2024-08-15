import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { PortableText } from 'next-sanity'

import { SlideInView } from '@/components/animation/slide-in-view'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
        <div className="flex flex-wrap items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <h1 className="max-w-md text-3xl tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <div className="flex items-center gap-2 md:rounded-[32px] md:border md:border-border md:bg-background md:p-4">
            <Button
              variant="outline"
              asChild
              disabled={!project.projectUrl}
              className="md:rounded-[20px] md:px-4 md:py-8"
            >
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className="gap-2"
              >
                <ExternalLink className="size-4" />
                {project.projectUrl ? 'Live URL' : 'Coming Soon'}
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              disabled={!project.repository}
              className="md:rounded-[20px] md:px-4 md:py-8"
            >
              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className="gap-2"
              >
                <GitHubLogoIcon className="size-4" />
                {project.repository ? 'GitHub' : 'No Repo'}
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="space-y-8 md:space-y-16">
        <Card>
          <CardContent className="p-1">
            <Image
              src={project.coverImage.image}
              alt={project.coverImage.alt || project.name}
              width={1920}
              height={1080}
              quality={100}
              placeholder={project.coverImage?.lqip ? 'blur' : 'empty'}
              blurDataURL={project.coverImage?.lqip || ''}
              className="size-full rounded-lg object-cover"
            />
          </CardContent>
        </Card>
        <div>
          <PortableText value={project.description} />
        </div>
      </section>
    </SlideInView>
  )
}
