'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { ProjectTypeIcon } from '@/components/project-type-icon'
import { ProjectStatusBadge } from '@/components/status-badge'
import { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

interface WorkHeaderProps {
  name: string
  tagline: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  projectType: ProjectType
  coverImage: string
  alt: string
}

export default function WorkHeader({
  name,
  tagline,
  maintainStatus,
  projectStage,
  projectType,
  coverImage,
  alt
}: WorkHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold">{name}</h1>
        <div className="flex flex-wrap gap-2">
          <ProjectStatusBadge maintainStatus={maintainStatus} size="md" />
          <ProjectStatusBadge projectStage={projectStage} size="md" />
        </div>
      </div>

      <div className="flex items-center gap-3 text-muted-foreground">
        <ProjectTypeIcon type={projectType} size="md" />
        <span className="text-lg font-medium capitalize">{projectType}</span>
      </div>

      <p className="text-xl text-muted-foreground">{tagline}</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="overflow-hidden rounded-lg border border-primary/25"
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
