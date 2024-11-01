export interface StatItemProps {
  number: string
  label: string
}

export interface EducationItemProps {
  school: string
  degree: string
  period: string
  description: string
}

export interface TechStackItemProps {
  icon: React.ReactNode
  number: string
  name: string
  description: string
  percentage: number
}
