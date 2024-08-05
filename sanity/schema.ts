import { type SchemaTypeDefinition } from 'sanity'

import project from '@/sanity/schemas/project'
import update from '@/sanity/schemas/update'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, update]
}
