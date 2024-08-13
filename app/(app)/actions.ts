import { sanityFetcher } from '@/sanity/lib/client'
import {
  projectBySlugQuery,
  projectsQuery,
  takeQuery,
  updateQuery
} from '@/sanity/lib/query'
import type { ProjectInterface, TakeInterface, UpdateInterface } from '@/types'

export const projectFetch: ProjectInterface[] = await sanityFetcher({
  query: projectsQuery,
  tags: ['projects']
})

export const projectFetchBySlug = async (
  slug: string
): Promise<ProjectInterface> => {
  return await sanityFetcher({
    query: projectBySlugQuery,
    tags: ['project'],
    qParams: { slug }
  })
}

export const updateFetch: UpdateInterface[] = await sanityFetcher({
  query: updateQuery,
  tags: ['updates']
})

export const takeFetch: TakeInterface[] = await sanityFetcher({
  query: takeQuery,
  tags: ['takes']
})
