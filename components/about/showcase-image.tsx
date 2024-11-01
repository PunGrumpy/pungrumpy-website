'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'

import { NoiseOverlay } from '@/components/ui/noise-overlay'

interface ShowcaseImageProps {
  src?: string
  alt?: string
  priority?: boolean
}

export const ShowcaseImage: React.FC<ShowcaseImageProps> = ({
  src = 'https://placehold.co/1920x1080/png',
  alt = 'Showcase image',
  priority = false
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden"
  >
    <div className="relative size-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="size-full object-cover opacity-70 transition-opacity hover:opacity-100"
      />
      <NoiseOverlay />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
    </div>
  </motion.div>
)
