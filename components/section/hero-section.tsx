'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Scene } from '@/components/scene'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full max-w-6xl flex-wrap items-center gap-14 rounded-3xl"
    >
      <div className={cn('flex min-w-80 flex-1 flex-col gap-8', className)}>
        <motion.h1
          variants={itemVariants}
          className="xs:text-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Hello, I&apos;m Noppakorn Kaewsalabnil
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold leading-normal tracking-tight text-muted-foreground"
        >
          DevOps Enthusiast and Computer Science Student
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg leading-normal text-muted-foreground"
        >
          I&apos;m a dedicated computer science student at King Mongkut&apos;s
          Institute of Technology Ladkrabang, specializing in software
          development and DevOps. My passion lies in creating innovative
          solutions and optimizing development processes.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex gap-4"
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
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="flex flex-1 items-center justify-center"
      >
        <Scene
          scene="https://prod.spline.design/wilNy8PO5GgG6gyi/scene.splinecode"
          ratio={1 / 1}
        />
      </motion.div>
    </motion.div>
  )
}
