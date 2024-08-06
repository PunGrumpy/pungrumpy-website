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

export const singleProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
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
      alt,
    },
    description,
    technologies,
}`

export const updateQuery = groq`*[_type == 'update'] | order(date desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    date,
    description,
    coverImage {
        "image": asset->url,
        alt
    }
}`
