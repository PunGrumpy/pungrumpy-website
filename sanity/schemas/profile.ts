import { User } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const profile = defineType({
  name: 'profile',
  title: 'Profile',
  description: 'Information about me',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter your name (or the name you want to be known by)',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'alias',
      title: 'Alias',
      type: 'string',
      description: 'Enter your alias (or the name you want to be known by)'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Enter your tags',
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the social media'
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Enter the URL of the social media'
            })
          ]
        }
      ],
      description: 'Enter your social media'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short description of yourself',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A longer description of yourself',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: 'Upload an avatar for yourself',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette']
      }
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
      description: 'Tell us about yourself'
    }),
    defineField({
      name: 'usage',
      title: 'Usage',
      type: 'blockContent',
      description: 'What technologies do you use?'
    })
  ]
})

export default profile
