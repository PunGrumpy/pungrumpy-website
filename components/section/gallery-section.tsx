'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { cn } from '@/lib/utils'

export interface GalleryProps {
  className?: string
}

export interface GalleryImageProps {
  src: string
  alt: string
}

const images = [
  { src: '/gallery/gallery-1.png', alt: 'Gallery Image 1' },
  { src: '/gallery/gallery-2.png', alt: 'Gallery Image 2' },
  { src: '/gallery/gallery-3.png', alt: 'Gallery Image 3' }
]

export const GallerySection: React.FC<GalleryProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative flex w-full max-w-6xl flex-row flex-wrap items-start justify-start gap-6',
        className
      )}
    >
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </motion.div>
  )
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-80 min-w-72 max-w-lg flex-1 flex-col items-start justify-start overflow-hidden rounded-3xl border border-border/50"
    >
      <Image src={src} alt={alt} fill className="z-0 object-cover" />
    </motion.div>
  )
}
