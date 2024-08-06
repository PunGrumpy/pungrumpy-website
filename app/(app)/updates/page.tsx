import { Metadata } from 'next'

import { UpdateSection } from '@/components/section/update-section'
import { sanityFetcher } from '@/sanity/lib/client'
import { updateQuery } from '@/sanity/lib/query'
import type { UpdateInterface } from '@/types'

export const metadata: Metadata = {
  title: 'Updates',
  description: 'A describe changelog of my personal website.'
}

export default async function UpdatesPage() {
  const updates: UpdateInterface[] = await sanityFetcher({
    query: updateQuery,
    tags: ['updates']
  })

  return (
    <main className="space-y-8">
      {updates.map((update, index) => (
        <UpdateSection
          key={update._id}
          index={index}
          date={update.date}
          title={update.title}
          description={update.description}
          coverImage={update.coverImage.image}
        />
      ))}
    </main>
  )
}
