'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useOutsideClick } from '@/hooks/use-outside-click'

interface UpdateItemProps {
  date?: string
  title?: string
  description?: string
  imageSrc?: string
  content?: string
}

export function UpdateSection({
  date,
  title,
  description,
  imageSrc,
  content
}: UpdateItemProps) {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsActive(false)
      }
    }

    if (isActive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isActive])

  useOutsideClick(ref, () => setIsActive(false))

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/75"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              ref={ref}
              className="relative flex w-full max-w-lg flex-col overflow-hidden border border-border/50 bg-background shadow-lg sm:max-h-[90vh] sm:rounded-3xl"
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={() => setIsActive(false)}
              >
                <X className="size-4 text-foreground" />
              </Button>
              <Image
                priority
                width={500}
                height={300}
                src={imageSrc || '/gallery/gallery-1.png'}
                alt={title || 'Update Image'}
                className="h-48 w-full object-cover object-top sm:h-56 sm:rounded-t-3xl"
              />
              <div className="flex flex-1 flex-col overflow-auto p-6">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{date}</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
                  {content || description}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-8 rounded-xl p-4 text-left text-lg text-muted-foreground sm:gap-14">
        <div className="flex min-w-full flex-1 flex-col gap-4 sm:min-w-80 sm:gap-8">
          <div className="w-full text-sm leading-5 sm:text-base">{date}</div>
          <h2 className="w-full text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="w-full text-base leading-7 sm:text-lg">{description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl p-4 hover:border-primary/25 sm:p-6"
              onClick={() => setIsActive(true)}
            >
              Read more
              <ChevronRight className="ml-2 size-4 sm:size-5" />
            </Button>
          </div>
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
    </>
  )
}
