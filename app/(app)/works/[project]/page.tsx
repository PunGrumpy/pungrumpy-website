import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { WorkContent } from '@/components/works/work-content'
import { WorkHeader } from '@/components/works/work-header'
import { SITE_TITLE, SITE_URL } from '@/config/sitemap'
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
      url: `${SITE_URL}/works/${slug}`,
      siteName: `${SITE_TITLE}`,
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
    <main className="z-10 flex max-w-6xl flex-col space-y-16">
      <WorkHeader
        work={{
          ...project
        }}
      />
      <div className="md:col-span-2">
        <WorkContent
          work={{
            ...project
          }}
        />
      </div>
    </main>
  )
}
