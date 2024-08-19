import { GraduationCap } from 'lucide-react'
import { defineField } from 'sanity'

const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: GraduationCap,
  fields: [
    defineField({
      name: 'institutionName',
      title: 'Institution Name',
      type: 'string',
      description: 'What is the name of the educational institution?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
      description:
        'Enter the degree or qualification. E.g: Bachelor of Science',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Institution Logo',
      type: 'image',
      description: 'Upload the institution logo',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for screen readers',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'url',
      title: 'Institution Website',
      type: 'url'
    }),
    defineField({
      name: 'description',
      title: 'Program Description',
      type: 'text',
      rows: 3,
      description: 'Write a brief description about this educational program'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When did you start this program?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'When did you finish this program? (Leave empty if ongoing)'
    }),
    defineField({
      name: 'major',
      title: 'Major',
      type: 'string',
      description: 'Enter the main field of study'
    }),
    defineField({
      name: 'gpa',
      title: 'GPA',
      type: 'number',
      description: 'Enter the Grade Point Average (if applicable)'
    })
  ]
}

export default education
