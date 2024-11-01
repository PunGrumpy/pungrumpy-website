'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const noiseOverlayVariants = cva('absolute animate-noise', {
  variants: {
    size: {
      default: '-inset-1/2 size-[200%]',
      full: 'inset-0 size-full',
      large: '-inset-full size-[300%]'
    },
    intensity: {
      light: 'opacity-5',
      default: 'opacity-10',
      strong: 'opacity-20'
    }
  },
  defaultVariants: {
    size: 'default',
    intensity: 'default'
  }
})

export interface NoiseOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noiseOverlayVariants> {
  noiseImage?: string
  zIndex?: number
}

export const NoiseOverlay = React.forwardRef<HTMLDivElement, NoiseOverlayProps>(
  (
    {
      className,
      size,
      intensity,
      noiseImage = 'https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png',
      zIndex = 20,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(noiseOverlayVariants({ size, intensity, className }))}
      style={{ zIndex }}
      {...props}
    >
      <div
        style={{
          background: `url("${noiseImage}") repeat 0 0`,
          inset: '-200%',
          width: '400%',
          height: '400%',
          position: 'absolute',
          willChange: 'transform'
        }}
      />
    </div>
  )
)
NoiseOverlay.displayName = 'NoiseOverlay'
