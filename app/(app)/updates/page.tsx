import { Metadata } from 'next'

import { UpdateCard } from '@/components/card/update-card'
import { sanityFetcher } from '@/sanity/lib/client'
import { updateQuery } from '@/sanity/lib/query'
import type { UpdateInterface } from '@/types'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/updates`)
    : new URL('http://localhost:3000/updates'),
  title: 'Updates',
  description: 'A describe changelog of my personal website.'
}

export default async function UpdatesPage() {
  const updates: UpdateInterface[] = await sanityFetcher({
    query: updateQuery,
    tags: ['updates']
  })

  return (
    <main className="space-y-16">
      {updates.map((update, index) => (
        <UpdateCard key={update._id} id={index} update={{ ...update }} />
      ))}
    </main>
  )
}
