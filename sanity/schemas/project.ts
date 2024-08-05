import { Package } from 'lucide-react'
import { defineField, defineType } from 'sanity'

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
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: rule => rule.max(60).required()
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When did you start working on this project?'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description:
        'When did you finish working on this project? Leave blank if ongoing.'
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Development', value: 'inDevelopment' },
          { title: 'Completed', value: 'completed' },
          { title: 'On Hold', value: 'onHold' },
          { title: 'Archived', value: 'archived' }
        ],
        layout: 'radio'
      },
      description: 'What is the current status of this project?'
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'University Project', value: 'university' },
          { title: 'Client Work', value: 'client' },
          { title: 'Personal Project', value: 'personal' },
          { title: 'Open Source', value: 'openSource' },
          { title: 'Hackathon', value: 'hackathon' }
        ],
        layout: 'radio'
      },
      description: 'What type of project is this?'
    }),
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
        metadata: ['lqip']
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Write a full description about this project'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List the technologies used in this project'
    })
  ]
})

export default project
