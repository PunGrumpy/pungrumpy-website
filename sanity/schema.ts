import { type SchemaTypeDefinition } from 'sanity'

import profile from '@/sanity/schemas/profile'
import project from '@/sanity/schemas/project'
import take from '@/sanity/schemas/take'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, take]
}
