import { notFound } from 'next/navigation'

import { WorkDetailsClient } from '@/app/works/[id]/work-details-client'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const works = [
  {
    id: 'distil-wizard',
    title: 'DISTIL WIZARD',
    type: 'SYSTEM',
    description: 'Automated system for processing and analyzing data streams',
    image: 'https://placehold.co/800x600/png',
    fullDescription:
      'A comprehensive data processing system that leverages advanced algorithms to distill complex information streams into actionable insights.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
    year: 2024,
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
    year: 2024,
    role: 'Lead Developer'
  }
]

interface WorkDetailsProps {
  params: Promise<{ id: string }>
}

export default async function WorkDetails({ params }: WorkDetailsProps) {
  const { id } = await params
  const work = works.find(work => work.id === id)

  if (!work) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Header
        variant="default"
        size="lg"
        logo={false}
        showBackButton
        showSearch
        showMenu
      />
      <div className="container mx-auto pb-24">
        <WorkDetailsClient work={work} />
      </div>
      <Footer variant="transparent" showScrollButton />
    </div>
  )
}
