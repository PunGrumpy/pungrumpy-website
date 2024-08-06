'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { ProjectTypeIcon } from '@/components/project-type-icon'
import { ProjectStatusBadge } from '@/components/status-badge'
import type { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mb-12"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background"></div>
      <Image
        src={coverImage}
        alt={alt}
        width={1920}
        height={1080}
        className="h-[50vh] w-full rounded-xl object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 z-20 p-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="shadow-text mb-2 text-4xl font-bold text-primary"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shadow-text mb-4 text-xl text-primary/80"
        >
          {tagline}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          <ProjectStatusBadge maintainStatus={maintainStatus} size="md" />
          <ProjectStatusBadge projectStage={projectStage} size="md" />
          <div className="flex items-center rounded-full bg-background/70 px-2 py-1 text-foreground backdrop-blur-sm">
            <ProjectTypeIcon type={projectType} size="sm" variant="ghost" />
            <span className="text-sm font-medium capitalize">
              {projectType}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
