'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

import { cn } from '@/lib/utils'

interface RunningTextProps {
  text?: string
  className?: string
  speed?: number
}

const RunningText = ({ text, className, speed = 20 }: RunningTextProps) => {
  const controls = useAnimationControls()
  const baseText = 'NOPPAKORN KAEWSALABNIL + COMPUTER SCIENCE'
  const repeatedText = `${baseText}    ${baseText}    `

  useEffect(() => {
    controls.start({
      x: [0, -1000],
      transition: {
        duration: speed,
        ease: 'linear',
        repeat: Infinity
      }
    })
  }, [controls, speed])

  return (
    <div
      className={cn('relative overflow-hidden whitespace-nowrap', className)}
    >
      <motion.span animate={controls} className="inline-block">
        {repeatedText}
      </motion.span>
    </div>
  )
}

export { RunningText }
