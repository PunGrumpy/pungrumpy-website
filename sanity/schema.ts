import { type SchemaTypeDefinition } from 'sanity'

import blockContent from '@/sanity/schemas/blockContent'
import education from '@/sanity/schemas/education'
import profile from '@/sanity/schemas/profile'
import project from '@/sanity/schemas/project'
import take from '@/sanity/schemas/take'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Schema
    education,
    profile,
    project,
    take,

    // Reference
    blockContent
  ]
}
