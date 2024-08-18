import { groq } from 'next-sanity'

export const profileQuery = groq`*[_type == "profile"][0]{
  _id,
  name,
  alias,
  tagline,
  bio,
  avatar {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    "palette": asset->metadata.palette,
    alt,
  },
  about,
}`

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id, 
  name,
  "slug": slug.current,
  tagline,
  logo {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  tags,
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    tagline,
    "slug": slug.current,
    tags,
    projectUrl,
    repository,
    logo {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      "palette": asset->metadata.palette,
      alt,
    },
    coverImage {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      "palette": asset->metadata.palette,
      alt,
    },
    description,
}`

export const takeQuery = groq`*[_type == 'take'] | order(date desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  date,
  takeImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    "palette": asset->metadata.palette,
    "exif": asset->metadata.exif,
    alt,
  },
  tags,
  description,
  camera,
  cameraType,
  lensType,
  settings {
    aperture,
    shutterSpeed,
    iso,
    exposureCompensation,
    focalLength
  }
}`
