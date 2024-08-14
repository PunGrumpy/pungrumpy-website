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

type VariantInfo = {
  label: string
  color: BadgeProps['color']
  icon: LucideIcon
}

type VariantMap<T extends string> = Record<T, VariantInfo>

const createVariantUtils = <T extends string>(
  variantMap: VariantMap<T>,
  defaultVariant: VariantInfo
) => ({
  getLabel: (key: T): string => variantMap[key]?.label ?? defaultVariant.label,
  getColor: (key: T): BadgeProps['color'] =>
    variantMap[key]?.color ?? defaultVariant.color,
  getIcon: (key: T): ReactElement => {
    const Icon = variantMap[key]?.icon ?? defaultVariant.icon
    return <Icon className="size-4" />
  }
})

const defaultVariant: VariantInfo = {
  label: 'Unknown',
  color: 'blue',
  icon: CircleDashed
}

const maintainStatusMap: VariantMap<MaintainStatusType> = {
  active: { label: 'Active', color: 'green', icon: CircleCheck },
  minimal: { label: 'Minimal', color: 'amber', icon: CircleAlert },
  inactive: { label: 'Inactive', color: 'red', icon: CircleX },
  unknown: defaultVariant
}

const projectStageMap: VariantMap<ProjectStageType> = {
  concept: { label: 'Concept', color: 'purple', icon: Lightbulb },
  development: { label: 'Dev', color: 'blue', icon: Code2 },
  beta: { label: 'Beta', color: 'amber', icon: Info },
  released: { label: 'Released', color: 'green', icon: Rocket },
  deprecated: { label: 'Deprecated', color: 'red', icon: Archive },
  unknown: defaultVariant
}

const projectTypeMap: VariantMap<ProjectType> = {
  university: { label: 'University', color: 'blue', icon: GraduationCap },
  client: { label: 'Client', color: 'green', icon: BriefcaseBusiness },
  personal: { label: 'Personal', color: 'purple', icon: User },
  openSource: { label: 'Open Source', color: 'amber', icon: FolderOpen },
  hackathon: { label: 'Hackathon', color: 'red', icon: Trophy }
}

export const maintainStatus = createVariantUtils(
  maintainStatusMap,
  defaultVariant
)
export const projectStage = createVariantUtils(projectStageMap, defaultVariant)
export const projectType = createVariantUtils(projectTypeMap, defaultVariant)
