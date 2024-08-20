'use client'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { encode } from 'qss'
import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type LinkPreviewProps = {
  children: React.ReactNode
  url: string
  className?: string
  width?: number
  height?: number
  quality?: number
  layout?: string
  cardStyle?: 'modern' | 'classic'
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
)

export const LinkPreview = ({
  children,
  url,
  className,
  width = 300,
  height = 200,
  quality = 80,
  layout = 'responsive',
  isStatic = false,
  imageSrc = '',
  cardStyle = 'modern'
}: LinkPreviewProps) => {
  const [src, setSrc] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (!isStatic) {
      const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: 'screenshot.url',
        colorScheme: 'dark',
        'viewport.isMobile': true,
        'viewport.deviceScaleFactor': 2,
        'viewport.width': width * 2,
        'viewport.height': height * 2
      })
      setSrc(`https://api.microlink.io/?${params}`)
    } else {
      setSrc(imageSrc)
    }
  }, [url, isStatic, imageSrc, width, height])

  const [isOpen, setOpen] = React.useState(false)

  const springConfig = { stiffness: 150, damping: 20 }
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const translateX = useSpring(x, springConfig)
  const translateY = useSpring(y, springConfig)
  const scaleSpring = useSpring(scale, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (event.clientX - centerX) / (rect.width / 2)
    const distanceY = (event.clientY - centerY) / (rect.height / 2)

    x.set(distanceX * 10)
    y.set(distanceY * 10)
    scale.set(1.05)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  const cardClasses = cn(
    'rounded-xl shadow-2xl overflow-hidden',
    cardStyle === 'modern'
      ? 'bg-gradient-to-br from-background to-secondary'
      : 'bg-background',
    className
  )

  const handleImageError = () => {
    setError(true)
  }

  const renderContent = () => {
    if (error || !src) {
      return null
    }

    return (
      <Image
        src={src}
        width={width}
        height={height}
        quality={quality}
        layout={layout}
        priority={true}
        className="h-auto w-full object-cover"
        alt="preview image"
        onError={handleImageError}
      />
    )
  }

  return (
    <HoverCardPrimitive.Root
      openDelay={100}
      closeDelay={300}
      onOpenChange={setOpen}
    >
      <HoverCardPrimitive.Trigger asChild>
        <span className={cn('cursor-pointer', className)}>{children}</span>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="w-[400px] p-0"
        side="top"
        align="center"
        sideOffset={5}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className={cardClasses}
              style={{
                x: translateX,
                y: translateY,
                scale: scaleSpring
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={url} className="block" style={{ fontSize: 0 }}>
                <div className="relative">
                  {renderContent()}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-foreground">
                    <h3 className="truncate text-lg font-bold">
                      {new URL(url).hostname}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">
                      {url}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  )
}
