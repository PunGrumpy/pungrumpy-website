import { type SchemaTypeDefinition } from 'sanity'

import project from '@/sanity/schemas/project'
import take from '@/sanity/schemas/take'
import update from '@/sanity/schemas/update'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, update, take]
}
