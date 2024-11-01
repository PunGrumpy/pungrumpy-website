'use client'

import { WorkContent } from '@/components/works/work-content'
import { WorkMetadata } from '@/components/works/work-metadata'
import { type Work } from '@/types/work'

interface WorkDetailsClientProps {
  work: Work
}

export function WorkDetailsClient({ work }: WorkDetailsClientProps) {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <main className="container mx-auto pt-24">
        <div className="grid grid-cols-[1fr_auto] gap-24">
          <WorkContent work={work} />
          <WorkMetadata work={work} />
        </div>
      </main>
    </div>
  )
}
