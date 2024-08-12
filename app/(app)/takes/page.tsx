import { Metadata } from 'next'
import React from 'react'

import { TakesGallery } from '@/components/takes/takes-gallery'
import { sanityFetcher } from '@/sanity/lib/client'
import { takeQuery } from '@/sanity/lib/query'
import { TakeInterface } from '@/types'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/takes`)
    : new URL('http://localhost:3000/takes'),
  title: 'Takes',
  description: 'A collection of my takes and photos.'
}

export default async function TakesPage() {
  const takes: TakeInterface[] = await sanityFetcher({
    query: takeQuery,
    tags: ['takes']
  })

  return (
    <main className="z-10">
      <TakesGallery initialTakes={{ ...takes }} />
    </main>
  )
}
