import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Sitemap } from '@/config/sitemap'
import { formatDateString } from '@/lib/utils'
import { sanityFetcher } from '@/sanity/lib/client'
import { takeBySlugQuery } from '@/sanity/lib/query'
import { TakeInterface } from '@/types'

interface TakeDetailPageProps {
  params: { photo: string }
}

export async function generateMetadata(
  { params }: TakeDetailPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.photo
  const take: TakeInterface = await sanityFetcher({
    query: takeBySlugQuery,
    tags: ['take'],
    qParams: { slug }
  })

  console.log(take)

  const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: take.title,
    description: `Details about ${take.title}`,
    openGraph: {
      title: take.title,
      description: `Details about ${take.title}`,
      url: `${Sitemap.url}/takes/${slug}`,
      siteName: `${Sitemap.name}`,
      images: [
        {
          url: take.takeImage.image,
          width: 1920,
          height: 1080,
          alt: take.takeImage.alt || take.title
        },
        ...previousOGImages
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: take.title,
      description: `Details about ${take.title}`,
      creator: '@pungrumpy',
      site: '@pungrumpy',
      creatorId: 'pungrumpy',
      siteId: 'pungrumpy',
      images: [
        {
          url: take.takeImage.image,
          width: 1920,
          height: 1080,
          alt: take.takeImage.alt || take.title
        },
        ...previousTwitterImages
      ]
    }
  }
}

export default async function TakePage({ params }: TakeDetailPageProps) {
  const slug = params.photo
  const take: TakeInterface = await sanityFetcher({
    query: takeBySlugQuery,
    tags: ['take'],
    qParams: { slug }
  })

  if (!take) {
    notFound()
  }

  return <main className="z-10 mx-auto max-w-6xl px-4 py-8">{take.title}</main>
}
