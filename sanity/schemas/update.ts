import { CalendarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const update = defineType({
  name: 'update',
  title: 'Update',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the update',
      validation: rule => rule.required().max(200)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When was this update published?',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Write a brief description of the update',
      validation: rule => rule.required().min(10).max(1000)
    }),
    defineField({
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
    })
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image'
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
