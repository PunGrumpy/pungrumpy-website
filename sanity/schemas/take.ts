import { Camera } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const take = defineType({
  name: 'take',
  title: 'Take',
  description: 'A curated list of the photos I have taken',
  type: 'document',
  icon: Camera,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the photo',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier for the photo, used in URLs',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date and time the photo was taken',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'takeImage',
      title: 'Take Image',
      type: 'image',
      description: 'The image that I have taken',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette', 'exif']
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'A description of the image for accessibility',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Tags to categorize the photo'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A detailed description of the photo'
    }),
    defineField({
      name: 'camera',
      title: 'Camera',
      type: 'string',
      description: 'The camera used to take the photo',
      validation: Rule => Rule.required()
    })
  ],
  orderings: [
    {
      title: 'Date, New to Old',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    },
    {
      title: 'Date, Old to New',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }]
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'takeImage',
      subtitle: 'date'
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title: title,
        media: media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : ''
      }
    }
  }
})

export default take
