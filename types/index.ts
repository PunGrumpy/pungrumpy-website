import { TableRow } from '@sanity/table'
import { PortableTextBlock } from 'next-sanity'

export type Table = {
  rows?: TableRow[]
  title?: string
}

export interface TableInterface {
  table?: Table
  caption?: string
}

export interface QuizValueInterface {
  _key: string
  question: string
  answer: string
}

export type LensType =
  | 'wideAngle'
  | 'standard'
  | 'telephoto'
  | 'macro'
  | 'prime'
  | 'zoom'
  | 'other'

export type CameraType = 'dslr' | 'mirrorless' | 'film' | 'smartphone' | 'other'

export interface TakeInterface {
  _id: string
  title: string
  slug: string
  date: string
  takeImage: {
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
    exif?: any
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

export interface ProjectInterface {
  _id: string
  name: string
  slug: string
  tagline: string
  tags: string[]
  logo?: {
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
  projectUrl?: string
  repository?: string
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
