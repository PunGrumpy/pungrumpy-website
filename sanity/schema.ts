import { type SchemaTypeDefinition } from 'sanity'

import project from '@/sanity/schemas/project'
import take from '@/sanity/schemas/take'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, take]
}
