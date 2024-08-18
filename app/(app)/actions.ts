import { sanityFetcher } from '@/sanity/lib/client'
import {
  profileQuery,
  projectBySlugQuery,
  projectsQuery,
  takeQuery
} from '@/sanity/lib/query'
import type { ProfileInterface, ProjectInterface, TakeInterface } from '@/types'

export const fetchProfile = async (): Promise<ProfileInterface> =>
  sanityFetcher({
    query: profileQuery,
    tags: ['profile']
  })

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

export const fetchTakes = async (): Promise<TakeInterface[]> =>
  sanityFetcher({
    query: takeQuery,
    tags: ['takes']
  })
