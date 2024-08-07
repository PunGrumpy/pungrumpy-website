import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import WorkContent from '@/components/works/work-content'
import WorkHeader from '@/components/works/work-header'
import { Sitemap } from '@/config/sitemap'
import { sanityFetcher } from '@/sanity/lib/client'
import { projectBySlugQuery } from '@/sanity/lib/query'
import type { ProjectInterface } from '@/types'

interface WorkDetailPageProps {
  params: { project: string }
}

export async function generateMetadata(
  { params }: WorkDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.project
  const project: ProjectInterface = await sanityFetcher({
    query: projectBySlugQuery,
    tags: ['project'],
    qParams: { slug }
  })

  const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `${Sitemap.url}/works/${slug}`,
      siteName: `${Sitemap.name}`,
      images: [
        {
          url: project.coverImage.image,
          width: 1920,
          height: 1080,
          alt: project.coverImage.alt || project.name
        },
        ...previousOGImages
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.tagline,
      creator: '@pungrumpy',
      site: '@pungrumpy',
      creatorId: 'pungrumpy',
      siteId: 'pungrumpy',
      images: [
        {
          url: project.coverImage.image,
          width: 1920,
          height: 1080,
          alt: project.coverImage.alt || project.name
        },
        ...previousTwitterImages
      ]
    }
  }
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const slug = params.project
  const project: ProjectInterface = await sanityFetcher({
    query: projectBySlugQuery,
    tags: ['project'],
    qParams: { slug }
  })

  if (!project) {
    notFound()
  }

  return (
    <div className="container z-10 mx-auto max-w-6xl px-4 py-8">
      <WorkHeader
        name={project.name}
        tagline={project.tagline}
        maintainStatus={project.maintainStatus}
        projectStage={project.projectStage}
        projectType={project.projectType}
        coverImage={project.coverImage.image}
        alt={project.coverImage.alt || project.name}
      />
      <div className="md:col-span-2">
        <WorkContent
          description={project.description}
          technologies={project.technologies}
          startDate={project.startDate}
          endDate={project.endDate || 'Present'}
          projectUrl={project.projectUrl}
          repositoryUrl={project.repository}
          maintainStatus={project.maintainStatus}
          projectStage={project.projectStage}
          contributors={project.contributors}
        />
      </div>
    </div>
  )
}
