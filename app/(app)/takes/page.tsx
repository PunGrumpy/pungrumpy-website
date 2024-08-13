import { Metadata } from 'next'

import { fetchTakes } from '@/app/(app)/actions'
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
      <TakesGallery initialTakes={takes} />
    </main>
  )
}
