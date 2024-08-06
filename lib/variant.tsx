import {
  BriefcaseBusiness,
  CircleCheck,
  CircleDashed,
  CircleX,
  FolderOpen,
  GraduationCap,
  Info,
  LucideIcon,
  Trophy,
  User
} from 'lucide-react'

import { BadgeProps } from '@/components/ui/badge'
import { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

export function getMaintainStatusLabel(status: MaintainStatusType): string {
  const labels: Record<MaintainStatusType, string> = {
    active: 'Actively Maintained',
    minimal: 'Minimal Maintenance',
    inactive: 'No Longer Maintained',
    unknown: 'Unknown'
  }
  return labels[status] || 'Unknown'
}

export function getMaintainStatusVariant(
  status: MaintainStatusType
): BadgeProps['variant'] {
  const variants: Record<MaintainStatusType, BadgeProps['variant']> = {
    active: 'green-subtle',
    minimal: 'amber-subtle',
    inactive: 'gray-subtle',
    unknown: 'blue-subtle'
  }
  return variants[status] || 'blue-subtle'
}

export function getMaintainStatusIcon(status: MaintainStatusType): LucideIcon {
  const icons: Record<MaintainStatusType, LucideIcon> = {
    active: CircleCheck,
    minimal: Info,
    inactive: CircleX,
    unknown: CircleDashed
  }
  return icons[status] || CircleDashed
}

export function getProjectStageLabel(stage: ProjectStageType): string {
  const labels: Record<ProjectStageType, string> = {
    concept: 'Concept',
    development: 'In Development',
    beta: 'Beta',
    released: 'Released',
    deprecated: 'Deprecated',
    unknown: 'Unknown'
  }
  return labels[stage] || 'Unknown'
}

export function getProjectStageVariant(
  stage: ProjectStageType
): BadgeProps['variant'] {
  const variants: Record<ProjectStageType, BadgeProps['variant']> = {
    concept: 'purple-subtle',
    development: 'blue-subtle',
    beta: 'amber-subtle',
    released: 'green-subtle',
    deprecated: 'red-subtle',
    unknown: 'blue-subtle'
  }
  return variants[stage] || 'blue-subtle'
}

export function getProjectStageIcon(stage: ProjectStageType): LucideIcon {
  const icons: Record<ProjectStageType, LucideIcon> = {
    concept: Info,
    development: Info,
    beta: Info,
    released: CircleCheck,
    deprecated: CircleX,
    unknown: CircleDashed
  }
  return icons[stage] || CircleDashed
}

export function gerProjectTypeLabel(type: ProjectType): string {
  const labels: Record<ProjectType, string> = {
    university: 'University',
    client: 'Client',
    personal: 'Personal',
    openSource: 'Open Source',
    hackathon: 'Hackathon'
  }
  return labels[type] || 'Unknown'
}

export function getProjectTypeIcon(type: ProjectType): LucideIcon {
  const icons: Record<ProjectType, LucideIcon> = {
    university: GraduationCap,
    client: BriefcaseBusiness,
    personal: User,
    openSource: FolderOpen,
    hackathon: Trophy
  }
  return icons[type] || FolderOpen
}

export function getProjectTypeIconElement(type: ProjectType) {
  const Icon = getProjectTypeIcon(type)
  return <Icon className="size-4" />
}
