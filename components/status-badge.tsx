import { Circle, HelpCircle } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'
import type { MaintainStatusType, ProjectStageType } from '@/types'

interface ProjectStatusBadgeProps {
  maintainStatus?: MaintainStatusType | null
  projectStage?: ProjectStageType | null
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const maintainStatusConfig: Record<
  MaintainStatusType,
  { label: string; color: string }
> = {
  active: {
    label: 'Actively Maintained',
    color: 'text-green-500 bg-green-500/10'
  },
  minimal: {
    label: 'Minimal Maintenance',
    color: 'text-yellow-500 bg-yellow-500/10'
  },
  inactive: {
    label: 'No Longer Maintained',
    color: 'text-gray-500 bg-gray-500/10'
  },
  unknown: {
    label: 'Unknown',
    color: 'text-blue-300 bg-blue-300/10'
  }
}

const projectStageConfig: Record<
  ProjectStageType,
  { label: string; color: string }
> = {
  concept: {
    label: 'Concept',
    color: 'text-purple-500 bg-purple-500/10'
  },
  development: {
    label: 'In Development',
    color: 'text-blue-500 bg-blue-500/10'
  },
  beta: {
    label: 'Beta',
    color: 'text-orange-500 bg-orange-500/10'
  },
  released: {
    label: 'Released',
    color: 'text-green-500 bg-green-500/10'
  },
  deprecated: {
    label: 'Deprecated',
    color: 'text-red-500 bg-red-500/10'
  },
  unknown: {
    label: 'Unknown',
    color: 'text-blue-300 bg-blue-300/10'
  }
}

const sizeConfig = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2'
}

export function ProjectStatusBadge({
  maintainStatus,
  projectStage,
  className,
  size = 'md'
}: ProjectStatusBadgeProps) {
  let config: { label: string; color: string }
  let IconComponent = Circle

  if (maintainStatus && maintainStatus in maintainStatusConfig) {
    config = maintainStatusConfig[maintainStatus]
  } else if (projectStage && projectStage in projectStageConfig) {
    config = projectStageConfig[projectStage]
  } else {
    config = maintainStatusConfig.unknown
    IconComponent = HelpCircle
  }

  const { label, color } = config

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium backdrop-blur-sm',
        color,
        sizeConfig[size],
        className
      )}
    >
      <IconComponent
        className={cn('mr-1', {
          'size-2': size === 'sm',
          'size-3': size === 'md',
          'size-4': size === 'lg'
        })}
      />
      {label}
    </span>
  )
}
