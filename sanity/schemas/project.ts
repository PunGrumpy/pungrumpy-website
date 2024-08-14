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
      name: 'maintainStatus',
      title: 'Maintain Status',
      type: 'string',
      options: {
        list: [
          { title: 'Actively Maintained', value: 'active' },
          { title: 'Minimal Maintenance', value: 'minimal' },
          { title: 'No Longer Maintained', value: 'inactive' }
        ],
        layout: 'radio'
      },
      description: 'Current maintenance status of the project'
    },
    {
      name: 'projectStage',
      title: 'Project Stage',
      type: 'string',
      options: {
        list: [
          { title: 'Concept', value: 'concept' },
          { title: 'In Development', value: 'development' },
          { title: 'Beta', value: 'beta' },
          { title: 'Released', value: 'released' },
          { title: 'Deprecated', value: 'deprecated' }
        ]
      },
      description: 'Current stage of the project lifecycle'
    },
    {
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
