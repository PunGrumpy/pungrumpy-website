import {
  Briefcase,
  FolderOpen,
  GraduationCap,
  Trophy,
  User
} from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'
import { ProjectType } from '@/types'

const projectTypeIcons: Record<ProjectType, React.ElementType> = {
  university: GraduationCap,
  client: Briefcase,
  personal: User,
  openSource: FolderOpen,
  hackathon: Trophy
}

interface ProjectTypeIconProps {
  type: ProjectType
  variant?: 'default' | 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantStyles = {
  default: 'bg-primary/10 text-primary',
  outline: 'bg-transparent border-2 border-primary text-primary',
  solid: 'bg-primary text-primary-foreground'
}

const sizeStyles = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3'
}

const iconSizes = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8'
}

export function ProjectTypeIcon({
  type,
  variant = 'default',
  size = 'md',
  className = ''
}: ProjectTypeIconProps) {
  const IconComponent = projectTypeIcons[type]

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <IconComponent className={cn(iconSizes[size], 'text-current')} />
      <span className="sr-only">{type}</span>
    </div>
  )
}
