import { sanityFetcher } from '@/sanity/lib/client'
import {
  projectBySlugQuery,
  projectsQuery,
  takeQuery,
  updateQuery
} from '@/sanity/lib/query'
import type { ProjectInterface, TakeInterface, UpdateInterface } from '@/types'

export const fetchProjects = async (): Promise<ProjectInterface[]> =>
  sanityFetcher({
    query: projectsQuery,
    tags: ['projects']
  })

export const fetchProjectBySlug = async (
  slug: string
): Promise<ProjectInterface> =>
  sanityFetcher({
    query: projectBySlugQuery,
    tags: ['project'],
    qParams: { slug }
  })

export const fetchUpdates = async (): Promise<UpdateInterface[]> =>
  sanityFetcher({
    query: updateQuery,
    tags: ['updates']
  })

export const fetchTakes = async (): Promise<TakeInterface[]> =>
  sanityFetcher({
    query: takeQuery,
    tags: ['takes']
  })
