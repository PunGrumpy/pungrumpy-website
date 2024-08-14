'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface SlideInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const SlideInView: React.FC<SlideInViewProps> = ({
  children,
  className,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
