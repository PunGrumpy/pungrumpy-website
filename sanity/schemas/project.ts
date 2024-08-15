import { Package } from 'lucide-react'
import { defineType } from 'sanity'

const project = defineType({
  name: 'project',
  title: 'Project',
  description: 'Works are the projects that you have worked on',
  type: 'document',
  icon: Package,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the project'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: rule => rule.max(60).required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add tags that describe this project',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload a logo for this project',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette']
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Add a custom slug for the URL or generate one from the name',
      options: { source: 'name' }
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Leaving this URL blank will add a coming soon to the link.'
    },
    {
      name: 'repository',
      title: 'Repository URL',
      type: 'url',
      description:
        'Leaving this URL blank will add a "No Repository" message to the link.'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Upload a cover image for this project',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette']
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Write a full description about this project'
    }
  ]
})

export default project
