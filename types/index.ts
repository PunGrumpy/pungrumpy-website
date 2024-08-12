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
export type LensType =
  | 'wideAngle'
  | 'standard'
  | 'telephoto'
  | 'macro'
  | 'prime'
  | 'zoom'
  | 'other'
export type CameraType = 'dslr' | 'mirrorless' | 'film' | 'smartphone' | 'other'

interface ImageMetadata {
  image: string
  alt: string
  lqip?: string
  palette?: {
    darkMuted?: { background: string; foreground: string }
    lightVibrant?: { background: string; foreground: string }
    darkVibrant?: { background: string; foreground: string }
    vibrant?: { background: string; foreground: string }
    dominant?: { background: string; foreground: string }
    lightMuted?: { background: string; foreground: string }
    muted?: { background: string; foreground: string }
  }
  dimensions?: {
    width: number
    height: number
    aspectRatio: number
  }
}

interface BaseContent {
  _id: string
  title: string
  slug: string
  date: string
  description: PortableTextBlock[]
}

export interface ProjectInterface extends BaseContent {
  name: string
  tagline: string
  startDate: string
  endDate?: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  contributors: string[]
  projectType: ProjectType
  projectUrl: string
  repository: string
  coverImage: ImageMetadata
  technologies: string[]
}

export interface UpdateInterface extends Partial<BaseContent> {
  _createdAt: string
  _updatedAt?: string
  coverImage: Omit<ImageMetadata, 'lqip' | 'palette' | 'dimensions'>
}

export interface TakeInterface extends BaseContent {
  takeImage: ImageMetadata & { caption?: string }
  tags: string[]
  camera: string
  cameraType: CameraType
  lensType: LensType
  settings: {
    aperture: string
    shutterSpeed: string
    iso: number
    exposureCompensation: string
    focalLength: string
  }
}
