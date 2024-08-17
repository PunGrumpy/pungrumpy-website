import { Metadata } from 'next'

import { fetchTakes } from '@/app/(app)/actions'
import { SlideInView } from '@/components/animation/slide-in-view'
import { HeadingSection } from '@/components/section/heading-section'
import { TakesGallery } from '@/components/takes/takes-gallery'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/takes`)
    : new URL('http://localhost:3000/takes'),
  title: 'Takes',
  description: 'A collection of my takes and photos.'
}

export default async function TakesPage() {
  const takes = await fetchTakes()

  return (
    <main className="z-10">
      <HeadingSection
        title="Takes"
        description="A curated list of the photos I take on my journey. Check them out below!"
      />
      <SlideInView delay={0.1} className="w-[1100px]">
        <TakesGallery initialTakes={takes} />
      </SlideInView>
    </main>
  )
}
