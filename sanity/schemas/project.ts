import { Package } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const project = defineType({
  name: 'project',
  title: 'Project',
  description: 'Works are the projects that you have worked on',
  type: 'document',
  icon: Package,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the project',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: rule => rule.max(60).required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add tags that describe this project',
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload a logo for this project',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette']
      }
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Add a custom slug for the URL or generate one from the name',
      options: { source: 'name' },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Enter the URL of the project'
    }),
    defineField({
      name: 'repository',
      title: 'Repository',
      type: 'url',
      description: 'Enter the URL of the repository'
    }),
    defineField({
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
          title: 'Alternative text',
          validation: rule => rule.required()
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ],
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ]
          }
        },
        {
          type: 'image'
        }
      ],
      description: 'Write a full description about this project'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'tagline'
    }
  }
})

export default project
