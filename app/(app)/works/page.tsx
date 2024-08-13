import { Metadata } from 'next'

import { projectFetch } from '@/app/(app)/actions'
import { WorkCard } from '@/components/card/work-card'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}/works`)
    : new URL('http://localhost:3000/works'),
  title: 'Works',
  description: 'A collection of my works and projects.'
}

export default function WorksPage() {
  return (
    <main className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
        {projectFetch.map((project, index) => (
          <WorkCard key={project._id} id={index} work={{ ...project }} />
        ))}
      </div>
    </main>
  )
}
