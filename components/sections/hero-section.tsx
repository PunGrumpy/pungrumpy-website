'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import { NoiseOverlay } from '@/components/ui/noise-overlay'

const AvailabilityStatus = () => (
  <div className="flex items-center space-x-4 text-xs">
    <div className="relative flex">
      <div className="size-1.5 rounded-full bg-blue-500" />
      <div className="absolute -inset-1">
        <div className="size-full animate-ping rounded-full bg-blue-500 opacity-75" />
      </div>
    </div>
    <span className="text-lg text-muted-foreground">
      AVAILABLE FOR FREELANCE
    </span>
  </div>
)

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const scale = useTransform(scrollY, [0, 1000], [1.25, 1])
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.8])

  return (
    <section className="relative flex flex-col justify-center pt-32">
      <div className="relative z-10 mx-auto w-full">
        <div className="flex flex-col items-center">
          {/* Availability Status */}
          <div className="relative z-30 mb-12">
            <AvailabilityStatus />
          </div>

          {/* Title */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-foreground md:text-8xl">
              <span className="mb-2 block transition-colors hover:text-primary">
                NOPPAKORN
              </span>
              <span className="block transition-colors hover:text-primary">
                KAEWSALABNIL
              </span>
            </h1>
          </div>

          {/* Side Text - Between Title and Image */}
          <div className="relative mb-8 flex w-full justify-between">
            <div className="hidden text-xs text-muted-foreground md:block">
              {'//DIGITAL WEB + DEVOPS'}
            </div>
            <div className="hidden text-xs text-muted-foreground md:block">
              {'//SCROLL TO EXPLORE'}
            </div>
            <div className="flex w-full justify-between text-xs text-muted-foreground md:hidden">
              <span>{'//DIGITAL WEB + DEVOPS'}</span>
              <span>{'//SCROLL TO EXPLORE'}</span>
            </div>
          </div>

          {/* Image Section */}
          <motion.div className="relative size-full overflow-hidden">
            <motion.div
              style={{
                y,
                scale,
                opacity,
                willChange: 'transform'
              }}
            >
              <Image
                src="https://placehold.co/1920x1080/png"
                width={1920}
                height={1080}
                alt="Profile"
                className="size-full object-cover"
                priority
              />
            </motion.div>
            <NoiseOverlay />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
