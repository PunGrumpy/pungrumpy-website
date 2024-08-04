'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <div className="flex w-full max-w-7xl flex-wrap items-center gap-14 rounded-3xl">
      <div className={cn('flex min-w-80 flex-1 flex-col gap-8', className)}>
        <motion.h1
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
          className="xs:text-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Hello, I&apos;m Noppakorn Kaewsalabnil
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-2xl font-semibold leading-normal tracking-tight text-muted-foreground"
        >
          DevOps Enthusiast and Computer Science Student
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg leading-normal text-muted-foreground"
        >
          I&apos;m a dedicated computer science student at King Mongkut&apos;s
          Institute of Technology Ladkrabang, specializing in software
          development and DevOps. My passion lies in creating innovative
          solutions and optimizing development processes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button
            variant="outline"
            size="default"
            className="rounded-3xl p-6 hover:border-primary/25"
            asChild
          >
            <Link href="/works">
              Explore My Portfolio
              <ChevronRight className="ml-2 size-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-20px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={520}
          height={500}
          className="min-w-80 flex-1 rounded-3xl border border-border object-cover"
          priority
        />
      </motion.div>
    </div>
  )
}
