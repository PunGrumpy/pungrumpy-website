import Image from 'next/image'

import { NoiseOverlay } from '@/components/ui/noise-overlay'
import { type Work } from '@/types/work'

interface WorkContentProps {
  work: Work
}

export const WorkContent = ({ work }: WorkContentProps) => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="mb-6 text-6xl font-bold uppercase tracking-tight">
          {work.title}
        </h1>
        <p className="max-w-xl text-muted-foreground">{work.description}</p>
      </div>
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="relative size-full">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover"
            priority
          />
          <NoiseOverlay />
          <div className="absolute inset-0 bg-background/10" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">About the Project</h2>
        <p className="text-muted-foreground">{work.description}</p>
      </div>
    </div>
  )
}
