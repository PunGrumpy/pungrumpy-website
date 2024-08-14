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

export interface ProjectInterface {
  _id: string
  name: string
  slug: string
  tagline: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  projectType: ProjectType
  projectUrl: string
  repositoryUrl: string
  coverImage: {
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
  }
  description: PortableTextBlock[]
}

export interface TakeInterface {
  _id: string
  title: string
  slug: string
  date: string
  takeImage: {
    image: string
    alt: string
    caption?: string
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
  tags: string[]
  description: PortableTextBlock[]
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
