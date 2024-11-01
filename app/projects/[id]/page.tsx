// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation'

import ProjectDetailsClient from '@/app/projects/[id]/project-details-client'

const projects = [
  {
    id: 'distil-wizard',
    title: 'DISTIL WIZARD',
    type: 'SYSTEM',
    description: 'Automated system for processing and analyzing data streams',
    image: 'https://placehold.co/800x600/png',
    fullDescription:
      'A comprehensive data processing system that leverages advanced algorithms to distill complex information streams into actionable insights.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
    year: '2024',
    role: 'Lead Developer'
  },
  {
    id: 'qa-tester',
    title: 'QA TESTER',
    type: 'DEVOPS',
    description: 'Automated system for testing and validating software',
    image: 'https://placehold.co/800x600/png',
    fullDescription:
      'A comprehensive testing system that leverages advanced algorithms to validate software and ensure its quality.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
    year: '2024',
    role: 'Lead Developer'
  }
]

export default async function ProjectDetails({
  params
}: {
  params: { id: string }
}) {
  const { id } = await params
  const project = projects.find(project => project.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 pt-24">
      <ProjectDetailsClient project={project} />
    </div>
  )
}
