'use client'

import { motion } from 'framer-motion'
import { ArchiveIcon, HeartPulseIcon } from 'lucide-react'

import { Badge } from '../ui/badge'

interface WorkHeaderProps {
  title: string
  maintained?: boolean
  iconType: React.ReactNode
  projectType: string
}

export default function WorkHeader({
  title,
  maintained,
  iconType,
  projectType
}: WorkHeaderProps) {
  const badgeMaintained = maintained ? (
    <Badge variant="outline" className="bg-green-500 px-2 py-1">
      <HeartPulseIcon className="mr-1 size-4" />
      Maintained
    </Badge>
  ) : (
    <Badge variant="outline" className="bg-yellow-500 px-2 py-1">
      <ArchiveIcon className="mr-1 size-4" />
      Archived
    </Badge>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        {badgeMaintained}
      </div>
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        {iconType}
        <span>{projectType}</span>
      </div>
    </motion.div>
  )
}
