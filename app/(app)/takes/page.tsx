import React from 'react'

import { TakesGallery } from '@/components/takes/takes-gallery'
import { sanityFetcher } from '@/sanity/lib/client'
import { takeQuery } from '@/sanity/lib/query'
import { TakeInterface } from '@/types'

export default async function TakesPage() {
  const takes: TakeInterface[] = await sanityFetcher({
    query: takeQuery,
    tags: ['takes']
  })

  return (
    <main className="z-10">
      <TakesGallery initialTakes={takes} />
    </main>
  )
}
