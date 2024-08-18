import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { fetchProjectBySlug } from '@/app/(app)/actions'
import { ProjectComponent } from '@/components/projects/project-component'
import { SITE_TITLE, SITE_URL } from '@/config/sitemap'

interface WorkDetailPageProps {
  params: { project: string }
}

export async function generateMetadata(
  { params }: WorkDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.project
  const project = await fetchProjectBySlug(slug)

  const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      url: `${SITE_URL}/projects/${slug}`,
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
  const project = await fetchProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="z-10 flex max-w-6xl flex-col space-y-16">
      <ProjectComponent project={project} />
    </main>
  )
}
