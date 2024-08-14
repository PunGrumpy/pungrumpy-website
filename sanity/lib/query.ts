import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id, 
  name,
  "slug": slug.current,
  tagline,
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  maintainStatus,
  projectStage,
  projectType,
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    tagline,
    startDate,
    endDate,
    maintainStatus,
    projectStage,
    contributors,
    projectType,
    projectUrl,
    repository,
    coverImage {
      "image": asset->url,
      "lqip": asset->metadata.lqip,
      "palette": asset->metadata.palette,
      alt,
    },
    description,
    technologies,
}`

export const takeQuery = groq`*[_type == 'take'] | order(date desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  date,
  takeImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    "palette": asset->metadata.palette,
    "dimensions": asset->metadata.dimensions,
    alt,
    caption
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
