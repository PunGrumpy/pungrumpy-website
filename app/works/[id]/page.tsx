import { notFound } from 'next/navigation'

import { WorkDetailsClient } from '@/app/works/[id]/work-details-client'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { WORKS_DATA } from '@/contrants/works'

interface WorkDetailsProps {
  params: Promise<{ id: string }>
}

export default async function WorkDetails({ params }: WorkDetailsProps) {
  const { id } = await params
  const work = WORKS_DATA.find(work => work.id === id)

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
