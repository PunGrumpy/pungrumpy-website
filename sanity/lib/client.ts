import { createClient } from 'next-sanity'
import { QueryParams } from 'sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'development' ? true : false,
  ignoreBrowserTokenWarning: true,
  perspective: 'published'
})

export async function sanityFetcher<QueryResponse>({
  query,
  qParams = {},
  tags
}: {
  query: string
  qParams?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // If you want to enable cache, you can use the following options (for faster loading)
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    // If you want to disable cache, you can use the following options (for latest data)
    // cache: 'no-store',
    next: { tags }
  })
}
