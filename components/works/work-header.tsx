'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { ProjectTypeIcon } from '@/components/project-type-icon'
import { StatusBadge } from '@/components/status-badge'
import { ProjectType, StatusType } from '@/types'

interface WorkHeaderProps {
  name: string
  tagline: string
  status: StatusType
  projectType: ProjectType
  coverImage: string
  alt: string
}

export default function WorkHeader({
  name,
  tagline,
  status,
  projectType,
  coverImage,
  alt
}: WorkHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">{name}</h1>
        <StatusBadge status={status} />
      </div>

      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <ProjectTypeIcon type={projectType} size="md" />
        <span className="text-base font-medium capitalize">{projectType}</span>
      </div>

      <p className="mb-8 text-xl text-muted-foreground">{tagline}</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8 overflow-hidden rounded-lg border border-primary/25"
      >
        <Image
          src={coverImage}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
