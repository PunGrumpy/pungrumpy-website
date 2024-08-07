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
  variant: BadgeProps['variant']
  icon: LucideIcon
}

const createVariantGetter = <T extends string>(
  variantMap: Record<T, VariantInfo<T>>,
  defaultVariant: VariantInfo<T>
) => {
  return {
    getLabel: (key: T): string =>
      variantMap[key]?.label ?? defaultVariant.label,
    getVariant: (key: T): BadgeProps['variant'] =>
      variantMap[key]?.variant ?? defaultVariant.variant,
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
    variant: 'green-subtle',
    icon: CircleCheck
  },
  minimal: {
    label: 'Minimal Maintenance',
    variant: 'amber-subtle',
    icon: CircleAlert
  },
  inactive: {
    label: 'No Longer Maintained',
    variant: 'red-subtle',
    icon: CircleX
  },
  unknown: { label: 'Unknown', variant: 'blue-subtle', icon: CircleDashed }
}

const projectStageMap: Record<
  ProjectStageType,
  VariantInfo<ProjectStageType>
> = {
  concept: { label: 'Concept', variant: 'purple-subtle', icon: Lightbulb },
  development: {
    label: 'In Development',
    variant: 'blue-subtle',
    icon: Code2
  },
  beta: { label: 'Beta', variant: 'amber-subtle', icon: Info },
  released: { label: 'Released', variant: 'green-subtle', icon: Rocket },
  deprecated: { label: 'Deprecated', variant: 'red-subtle', icon: Archive },
  unknown: { label: 'Unknown', variant: 'blue-subtle', icon: CircleDashed }
}

const projectTypeMap: Record<ProjectType, VariantInfo<ProjectType>> = {
  university: {
    label: 'University',
    variant: 'blue-subtle',
    icon: GraduationCap
  },
  client: { label: 'Client', variant: 'green-subtle', icon: BriefcaseBusiness },
  personal: { label: 'Personal', variant: 'purple-subtle', icon: User },
  openSource: {
    label: 'Open Source',
    variant: 'amber-subtle',
    icon: FolderOpen
  },
  hackathon: { label: 'Hackathon', variant: 'red-subtle', icon: Trophy }
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
  variant: 'blue-subtle',
  icon: CircleDashed
})

export const getMaintainStatusLabel = maintainStatusGetter.getLabel
export const getMaintainStatusVariant = maintainStatusGetter.getVariant
export const getMaintainStatusIcon = maintainStatusGetter.getIcon

export const getProjectStageLabel = projectStageGetter.getLabel
export const getProjectStageVariant = projectStageGetter.getVariant
export const getProjectStageIcon = projectStageGetter.getIcon

export const getProjectTypeLabel = projectTypeGetter.getLabel
export const getProjectTypeVariant = projectTypeGetter.getVariant
export const getProjectTypeIcon = projectTypeGetter.getIcon
