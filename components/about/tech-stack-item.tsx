import { TechStackItemProps } from '@/types/about'

export const TechStackItem: React.FC<TechStackItemProps> = ({
  icon,
  number,
  name,
  description,
  percentage
}) => (
  <div className="group relative overflow-hidden rounded-lg bg-card p-6 transition-colors hover:bg-card/80">
    <div className="mb-4 flex items-center justify-between">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm text-muted-foreground">[{number}]</div>
    </div>
    <h3 className="mb-1 text-lg font-bold uppercase">{name}</h3>
    <p className="mb-4 text-sm text-muted-foreground">{description}</p>
    <div className="text-right text-lg">{percentage}%</div>
    <div
      className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 group-hover:opacity-80"
      style={{ width: `${percentage}%` }}
    />
  </div>
)
