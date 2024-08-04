'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

interface UpdateItemProps {
  date?: string
  title?: string
  description?: string
  imageSrc?: string
}

export function UpdateSection({
  date,
  title,
  description,
  imageSrc
}: UpdateItemProps) {
  return (
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
  )
}
