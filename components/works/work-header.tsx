'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import {
  getMaintainStatusColor,
  getMaintainStatusIcon,
  getMaintainStatusLabel,
  getProjectStageColor,
  getProjectStageIcon,
  getProjectStageLabel,
  getProjectTypeIcon,
  getProjectTypeLabel
} from '@/lib/variant'
import type { ProjectInterface } from '@/types'

interface WorkHeaderProps {
  work: ProjectInterface
}

export const WorkHeader: React.FC<WorkHeaderProps> = ({ work }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="inset-0 z-10 bg-gradient-to-b from-transparent to-background md:absolute" />
      <div className="rounded-xl bg-gradient-to-b from-primary/20 to-transparent p-px">
        <Image
          src={work.coverImage.image}
          alt={work.coverImage.alt}
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
          {work.name}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shadow-text mb-4 text-xl text-primary/80"
        >
          {work.tagline}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          <Badge
            size="md"
            variant="subtle"
            color={getMaintainStatusColor(work.maintainStatus)}
            icon={getMaintainStatusIcon(work.maintainStatus)}
          >
            {getMaintainStatusLabel(work.maintainStatus)}
          </Badge>
          <Badge
            size="md"
            variant="subtle"
            color={getProjectStageColor(work.projectStage)}
            icon={getProjectStageIcon(work.projectStage)}
          >
            {getProjectStageLabel(work.projectStage)}
          </Badge>
          <Badge
            variant="filled"
            color="secondary"
            size="md"
            icon={getProjectTypeIcon(work.projectType)}
          >
            {getProjectTypeLabel(work.projectType)}
          </Badge>
        </motion.div>
      </div>
    </motion.div>
  )
}
