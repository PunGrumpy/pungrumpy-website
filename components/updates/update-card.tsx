'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { formatDateString } from '@/lib/utils'

interface UpdateCardProps {
  index: number
  date: string
  title: string
  description: string
  coverImage: string
  alt?: string
}

export function UpdateCard({
  index,
  date,
  title,
  description,
  coverImage,
  alt
}: UpdateCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 250)

    return () => clearTimeout(timer)
  }, [index])

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
      transition={{ duration: 0.5, delay: index * 0.25 }}
    >
      <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-8 rounded-xl text-left text-lg text-muted-foreground sm:gap-14">
        <div className="flex min-w-full flex-1 flex-col gap-4 sm:min-w-80 sm:gap-8">
          <div className="w-full text-sm leading-5 sm:text-base">
            {formatDateString(date)}
          </div>
          <h2 className="w-full text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="w-full text-base leading-7 sm:text-lg">{description}</p>
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
                src={coverImage}
                alt={alt || title}
                width={500}
                height={500}
              />
              <motion.div
                className="absolute inset-0 bg-black"
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
