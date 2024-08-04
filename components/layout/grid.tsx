import { cn } from '@/lib/utils'

interface GridProps {
  className?: string
}

export function Grid({ className }: GridProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-0 flex flex-row items-stretch justify-between',
        className
      )}
    >
      <div className="w-px bg-transparent" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-border/50" />
      <div className="w-px bg-transparent" />
    </div>
  )
}
