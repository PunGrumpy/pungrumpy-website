import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import WorkContent from '@/components/works/work-content'
import WorkHeader from '@/components/works/work-header'
import WorkImage from '@/components/works/work-image'
import { Sitemap } from '@/config/sitemap'
import { Work, Works } from '@/config/works'

interface generateMetadataProps {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: generateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const work = getWorkBySlug(slug)

  const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: work ? work.title : 'Work not found',
    description: work
      ? work.description
      : 'Sorry, the work you are looking for does not exist.',
    openGraph: {
      title: work ? work.title : 'Work not found',
      description: work
        ? work.description
        : 'Sorry, the work you are looking for does not exist.',
      url: `${Sitemap.url}/works/${slug}`,
      siteName: `${Sitemap.name}`,
      images: [
        {
          url: work?.imageUrl || '',
          width: 1920,
          height: 1080,
          alt: work?.title || ''
        },
        ...previousOGImages
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: work ? work.title : 'Work not found',
      description: work
        ? work.description
        : 'Sorry, the work you are looking for does not exist.',
      creator: '@pungrumpy',
      site: '@pungrumpy',
      creatorId: 'pungrumpy',
      siteId: 'pungrumpy',
      images: [
        {
          url: work?.imageUrl || '',
          width: 1920,
          height: 1080,
          alt: work?.title || ''
        },
        ...previousTwitterImages
      ]
    }
  }
}

function getWorkBySlug(slug: string): Work | undefined {
  return Works.find(work => work.slug === slug)
}

interface WorkDetailPageProps {
  params: { slug: string }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  return (
    <div className="container z-10 mx-auto max-w-6xl px-4 py-8">
      <WorkImage imageUrl={work.imageUrl} title={work.title} />
      <WorkHeader
        title={work.title}
        maintained={work.maintained}
        iconType={work.iconType}
        projectType={work.projectType}
      />
      <WorkContent work={work} />
    </div>
  )
}
