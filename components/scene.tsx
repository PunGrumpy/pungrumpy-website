import Spline from '@splinetool/react-spline'

import { AspectRatio } from '@/components/ui/aspect-ratio'

export async function Scene() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="min-w-80 flex-1 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent p-px"
    >
      <Spline
        scene="https://prod.spline.design/wilNy8PO5GgG6gyi/scene.splinecode"
        className="rounded-[calc(1.5rem-1px)]"
        suppressHydrationWarning
      />
    </AspectRatio>
  )
}
