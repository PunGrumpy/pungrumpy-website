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

export const UpdateItem = ({
  date,
  title,
  description,
  imageSrc,
  content
}: UpdateItemProps) => {
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
            className="fixed inset-0 z-40 bg-black/75"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-50 grid place-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              ref={ref}
              className="relative flex size-full max-w-lg flex-col overflow-hidden border border-border/50 bg-background shadow-lg sm:h-fit sm:max-h-[90%] sm:rounded-3xl md:h-fit"
            >
              <Image
                priority
                width={500}
                height={300}
                src={imageSrc || '/gallery/gallery-1.png'}
                alt={title || 'Update Image'}
                className="h-80 w-full object-cover object-top sm:rounded-t-3xl lg:h-80"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{date}</p>
                <div className="mt-4 max-h-60 space-y-2 overflow-auto text-sm text-muted-foreground [mask-image:linear-gradient(to_bottom,white_calc(100%-96px),transparent)] md:text-base">
                  {content || description}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-14 rounded-xl p-4 text-left text-lg text-muted-foreground">
        <div className="flex min-w-80 flex-1 flex-col gap-8">
          <div className="w-full text-base leading-5">{date}</div>
          <h2 className="w-full text-6xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="w-full text-lg leading-7">{description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl p-6 hover:border-primary/25"
              onClick={() => setIsActive(true)}
            >
              Read more
              <ChevronRight className="ml-2 size-5" />
            </Button>
          </div>
        </div>
        <div className="items-start justify-start overflow-hidden rounded-3xl border border-border transition-transform duration-500 hover:scale-110">
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
