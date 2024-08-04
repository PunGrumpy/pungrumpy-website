'use client'

import { motion } from 'framer-motion'

interface WorkHeaderProps {
  title: string
  iconType: React.ReactNode
  projectType: string
}

export default function WorkHeader({
  title,
  iconType,
  projectType
}: WorkHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        {iconType}
        <span>{projectType}</span>
      </div>
    </motion.div>
  )
}
