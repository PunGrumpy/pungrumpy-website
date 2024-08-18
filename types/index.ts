import { TableRow } from '@sanity/table'
import { PortableTextBlock } from 'next-sanity'

export type Table = {
  rows?: TableRow[]
  title?: string
}

export interface QuizValueInterface {
  _key: string
  question: string
  answer: string
}

export interface ProfileInterface {
  _id: string
  name: string
  alias: string
  tagline: string
  bio: string
  avatar: {
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
  about: PortableTextBlock[]
}

export interface ExifDataInterface {
  ISO?: number
  FocalLength?: number
  ExposureBiasValue?: number
  FNumber?: number
  LensModel?: string
  ExposureTime?: number
}

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
    exif?: ExifDataInterface
  }
  tags: string[]
  description: PortableTextBlock[]
  camera: string
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
