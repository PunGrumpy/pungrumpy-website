import { StatItemProps } from '@/types/about'

export const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-center">
    <div className="mb-2 text-4xl font-bold md:text-6xl">{number}</div>
    <div className="text-xs text-muted-foreground md:text-sm">{label}</div>
  </div>
)
