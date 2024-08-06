import { PortableTextBlock } from 'next-sanity'

export type ProjectType =
  | 'university'
  | 'client'
  | 'personal'
  | 'openSource'
  | 'hackathon'

export type MaintainStatusType = 'active' | 'minimal' | 'inactive' | 'unknown'

export type ProjectStageType =
  | 'concept'
  | 'development'
  | 'beta'
  | 'released'
  | 'deprecated'
  | 'unknown'

export interface ProjectInterface {
  _id: string
  name: string
  slug: string
  tagline: string
  startDate: string
  endDate?: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  contributors: string[]
  projectType: ProjectType
  projectUrl: string
  repository: string
  coverImage: {
    image: string
    alt: string | null
    lqip: string
  }
  description: PortableTextBlock[]
  technologies: string[]
}

export interface UpdateInterface {
  _id: string
  _createdAt: string
  _updatedAt?: string
  title: string
  date: string
  description: string
  coverImage: {
    image: string
    alt?: string
  }
}
