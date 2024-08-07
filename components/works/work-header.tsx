'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import {
  getMaintainStatusIcon,
  getMaintainStatusLabel,
  getMaintainStatusVariant,
  getProjectStageIcon,
  getProjectStageLabel,
  getProjectStageVariant,
  getProjectTypeIcon,
  getProjectTypeLabel
} from '@/lib/variant'
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
      <div className="inset-0 z-10 bg-gradient-to-b from-transparent to-background md:absolute" />
      <div className="rounded-xl bg-gradient-to-b from-primary/20 to-transparent p-px">
        <Image
          src={coverImage}
          alt={alt}
          width={1920}
          height={1080}
          className="size-full rounded-[calc(0.75rem-1px)] object-cover"
        />
      </div>
      <div className="inset-x-0 bottom-0 z-20 py-8 md:absolute md:p-8">
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
          <Badge
            size="md"
            variant={getMaintainStatusVariant(maintainStatus)}
            icon={getMaintainStatusIcon(maintainStatus)}
          >
            {getMaintainStatusLabel(maintainStatus)}
          </Badge>
          <Badge
            size="md"
            variant={getProjectStageVariant(projectStage)}
            icon={getProjectStageIcon(projectStage)}
          >
            {getProjectStageLabel(projectStage)}
          </Badge>
          <Badge
            variant="inverted"
            size="md"
            icon={getProjectTypeIcon(projectType)}
          >
            {getProjectTypeLabel(projectType)}
          </Badge>
        </motion.div>
      </div>
    </motion.div>
  )
}
