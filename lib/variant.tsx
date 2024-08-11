import {
  Archive,
  BriefcaseBusiness,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Code2,
  FolderOpen,
  GraduationCap,
  Info,
  Lightbulb,
  LucideIcon,
  Rocket,
  Trophy,
  User
} from 'lucide-react'
import { ReactElement } from 'react'

import { BadgeProps } from '@/components/ui/badge'
import { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

type VariantInfo<T extends string> = {
  label: string
  color: BadgeProps['color']
  icon: LucideIcon
}

const createVariantGetter = <T extends string>(
  variantMap: Record<T, VariantInfo<T>>,
  defaultVariant: VariantInfo<T>
) => {
  return {
    getLabel: (key: T): string =>
      variantMap[key]?.label ?? defaultVariant.label,
    getColor: (key: T): BadgeProps['color'] =>
      variantMap[key]?.color ?? defaultVariant.color,
    getIcon: (key: T): ReactElement => {
      const Icon = variantMap[key]?.icon ?? defaultVariant.icon
      return <Icon className="size-4" />
    }
  }
}

const maintainStatusMap: Record<
  MaintainStatusType,
  VariantInfo<MaintainStatusType>
> = {
  active: {
    label: 'Actively Maintained',
    color: 'green',
    icon: CircleCheck
  },
  minimal: {
    label: 'Minimal Maintenance',
    color: 'amber',
    icon: CircleAlert
  },
  inactive: {
    label: 'No Longer Maintained',
    color: 'red',
    icon: CircleX
  },
  unknown: { label: 'Unknown', color: 'blue', icon: CircleDashed }
}

const projectStageMap: Record<
  ProjectStageType,
  VariantInfo<ProjectStageType>
> = {
  concept: { label: 'Concept', color: 'purple', icon: Lightbulb },
  development: {
    label: 'In Development',
    color: 'blue',
    icon: Code2
  },
  beta: { label: 'Beta', color: 'amber', icon: Info },
  released: { label: 'Released', color: 'green', icon: Rocket },
  deprecated: { label: 'Deprecated', color: 'red', icon: Archive },
  unknown: { label: 'Unknown', color: 'blue', icon: CircleDashed }
}

const projectTypeMap: Record<ProjectType, VariantInfo<ProjectType>> = {
  university: {
    label: 'University',
    color: 'blue',
    icon: GraduationCap
  },
  client: { label: 'Client', color: 'green', icon: BriefcaseBusiness },
  personal: { label: 'Personal', color: 'purple', icon: User },
  openSource: {
    label: 'Open Source',
    color: 'amber',
    icon: FolderOpen
  },
  hackathon: { label: 'Hackathon', color: 'red', icon: Trophy }
}

const maintainStatusGetter = createVariantGetter(
  maintainStatusMap,
  maintainStatusMap.unknown
)
const projectStageGetter = createVariantGetter(
  projectStageMap,
  projectStageMap.unknown
)
const projectTypeGetter = createVariantGetter(projectTypeMap, {
  label: 'Unknown',
  color: 'blue',
  icon: CircleDashed
})

export const getMaintainStatusLabel = maintainStatusGetter.getLabel
export const getMaintainStatusColor = maintainStatusGetter.getColor
export const getMaintainStatusIcon = maintainStatusGetter.getIcon

export const getProjectStageLabel = projectStageGetter.getLabel
export const getProjectStageColor = projectStageGetter.getColor
export const getProjectStageIcon = projectStageGetter.getIcon

export const getProjectTypeLabel = projectTypeGetter.getLabel
export const getProjectTypeColor = projectTypeGetter.getColor
export const getProjectTypeIcon = projectTypeGetter.getIcon
