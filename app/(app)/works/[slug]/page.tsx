import { notFound } from 'next/navigation'

import WorkContent from '@/components/works/work-content'
import WorkHeader from '@/components/works/work-header'
import WorkImage from '@/components/works/work-image'
import { Work, Works } from '@/config/works'

function getWorkBySlug(slug: string): Work | undefined {
  return Works.find(work => work.slug === slug)
}

interface WorkDetailPageProps {
  params: { slug: string }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  return (
    <div className="container z-10 mx-auto max-w-6xl px-4 py-8">
      <WorkImage imageUrl={work.imageUrl} title={work.title} />
      <WorkHeader
        title={work.title}
        iconType={work.iconType}
        projectType={work.projectType}
      />
      <WorkContent work={work} />
    </div>
  )
}
