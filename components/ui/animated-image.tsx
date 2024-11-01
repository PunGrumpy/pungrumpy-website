'use client'

import {
  type HTMLMotionProps,
  motion,
  useScroll,
  useTransform
} from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { NoiseOverlay } from './noise-overlay'

interface AnimatedImageProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

export const AnimatedImage = React.forwardRef<
  HTMLDivElement,
  AnimatedImageProps
>(
  (
    {
      className,
      src,
      alt,
      width = 1920,
      height = 1080,
      priority = false,
      ...props
    },
    ref
  ) => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 200])
    const scale = useTransform(scrollY, [0, 1000], [1.25, 1])
    const opacity = useTransform(scrollY, [0, 1000], [1, 0.8])

    return (
      <motion.div
        ref={ref}
        className={cn('relative size-full overflow-hidden', className)}
        {...props}
      >
        <motion.div
          style={{
            y,
            scale,
            opacity,
            willChange: 'transform'
          }}
        >
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="size-full object-cover"
            priority={priority}
          />
        </motion.div>
        <NoiseOverlay />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </motion.div>
    )
  }
)
AnimatedImage.displayName = 'AnimatedImage'
