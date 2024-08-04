'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WorkImageProps {
  imageUrl: string
  title: string
}

export default function WorkImage({ imageUrl, title }: WorkImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 overflow-hidden rounded-lg border border-border"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={1920}
        height={1080}
        className="w-full object-cover"
      />
    </motion.div>
  )
}
