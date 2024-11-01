'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'

import { NoiseOverlay } from '@/components/ui/noise-overlay'

export const ProfileImage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden"
  >
    <div className="relative size-full">
      <Image
        src="https://placehold.co/1200x800/png"
        alt="Profile showcase"
        fill
        className="object-cover opacity-70 transition-opacity hover:opacity-100"
        priority
      />
      <NoiseOverlay />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
    </div>
  </motion.div>
)
