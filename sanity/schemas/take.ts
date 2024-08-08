import { Camera } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const take = defineType({
  name: 'take',
  title: 'Take',
  description: 'A curated list of the photos I have taken',
  type: 'document',
  icon: Camera,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the photo',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier for the photo, used in URLs',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date and time the photo was taken',
      validation: Rule => Rule.required()
    },
    {
      name: 'takeImage',
      title: 'Take Image',
      type: 'image',
      description: 'The image that I have taken',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette']
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'A description of the image for accessibility',
          validation: Rule => Rule.required()
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'A caption for the image'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Tags to categorize the photo'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the photo'
    },
    {
      name: 'camera',
      title: 'Camera',
      type: 'string',
      description: 'The camera used to take the photo'
    },
    defineField({
      name: 'cameraType',
      title: 'Camera Type',
      type: 'string',
      options: {
        list: [
          { title: 'DSLR', value: 'dslr' },
          { title: 'Mirrorless', value: 'mirrorless' },
          { title: 'Film', value: 'film' },
          { title: 'Smartphone', value: 'smartphone' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'lensType',
      title: 'Lens Type',
      type: 'string',
      options: {
        list: [
          { title: 'Wide Angle', value: 'wideAngle' },
          { title: 'Standard', value: 'standard' },
          { title: 'Telephoto', value: 'telephoto' },
          { title: 'Macro', value: 'macro' },
          { title: 'Prime', value: 'prime' },
          { title: 'Zoom', value: 'zoom' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    {
      name: 'settings',
      title: 'Camera Settings',
      type: 'object',
      fields: [
        { name: 'aperture', type: 'string', title: 'Aperture' },
        { name: 'shutterSpeed', type: 'string', title: 'Shutter Speed' },
        { name: 'iso', type: 'number', title: 'ISO' },
        { name: 'focalLength', type: 'string', title: 'Focal Length' }
      ],
      description: 'Technical details of the photo'
    }
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
