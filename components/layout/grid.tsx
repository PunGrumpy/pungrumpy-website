import { cn } from '@/lib/utils'

interface GridProps {
  className?: string
}

export const Grid: React.FC<GridProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-0 flex flex-row items-stretch justify-between',
        className
      )}
    >
      <div className="w-px bg-blend-saturation" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-blend-saturation" />
    </div>
  )
}
