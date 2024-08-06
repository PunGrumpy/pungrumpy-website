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
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags }
  })
}
