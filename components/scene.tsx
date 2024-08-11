import Spline from '@splinetool/react-spline'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

interface SceneProps {
  scene: string
  ratio?: number
  className?: string
}

export async function Scene({ scene, ratio = 1 / 1, className }: SceneProps) {
  return (
    <AspectRatio
      ratio={ratio}
      className={cn(
        'min-w-80 flex-1 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent p-px',
        className
      )}
    >
      <Spline
        scene={scene}
        className="rounded-[calc(1.5rem-1px)]"
        suppressHydrationWarning
      />
    </AspectRatio>
  )
}
