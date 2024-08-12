'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { useEffect, useState } from 'react'

import { formatDateString } from '@/lib/utils'
import { UpdateInterface } from '@/types'

interface UpdateCardProps {
  id: number
  update: UpdateInterface
}

export function UpdateCard({ id, update }: UpdateCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, id * 250)

    return () => clearTimeout(timer)
  }, [id])

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    hover: { scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)' }
  }

  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(-20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.5, delay: id * 0.25 }}
    >
      <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-8 rounded-xl text-left text-lg text-muted-foreground sm:gap-14">
        <div className="flex min-w-full flex-1 flex-col gap-4 sm:min-w-80 sm:gap-8">
          <div className="w-full text-sm leading-5 sm:text-base">
            {formatDateString(update.date)}
          </div>
          <h2 className="w-full text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {update.title}
          </h2>
          <div className="w-full text-base leading-7 sm:text-lg">
            <PortableText value={update.description} />
          </div>
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="relative items-start justify-start overflow-hidden rounded-3xl border border-border"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Image
                className="object-cover transition-transform duration-300"
                src={update.coverImage.image}
                alt={update.coverImage.alt}
                width={500}
                height={500}
              />
              <motion.div
                className="absolute inset-0 bg-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </motion.div>
  )
}
