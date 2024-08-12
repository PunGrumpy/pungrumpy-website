import { CalendarIcon } from '@sanity/icons'
import { defineType } from 'sanity'

const update = defineType({
  name: 'update',
  title: 'Update',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the update',
      validation: rule => rule.required().max(200)
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When was this update published?',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A detailed description of the photo',
      validation: rule => rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'date'
    },
    prepare(selection) {
      const { title, date, media } = selection
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
        media
      }
    }
  }
})

export default update
