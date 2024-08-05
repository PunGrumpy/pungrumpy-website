'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface UpdateItemProps {
  index: number
  date?: string
  title?: string
  description?: string
  imageSrc?: string
}

export function UpdateSection({
  index,
  date,
  title,
  description,
  imageSrc
}: UpdateItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(-20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.5, delay: index * 0.25 }}
    >
      <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-8 rounded-xl p-4 text-left text-lg text-muted-foreground sm:gap-14">
        <div className="flex min-w-full flex-1 flex-col gap-4 sm:min-w-80 sm:gap-8">
          <div className="w-full text-sm leading-5 sm:text-base">{date}</div>
          <h2 className="w-full text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="w-full text-base leading-7 sm:text-lg">{description}</p>
        </div>
        <div className="items-start justify-start overflow-hidden rounded-3xl border border-border transition-transform duration-500 hover:scale-105 sm:hover:scale-110">
          <Image
            className="object-cover"
            src={imageSrc || '/gallery/gallery-1.png'}
            alt={title || 'Gallery Image'}
            width={500}
            height={500}
          />
        </div>
      </article>
    </motion.div>
  )
}
