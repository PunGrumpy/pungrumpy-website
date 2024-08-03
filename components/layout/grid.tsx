import { cn } from '@/lib/utils'

interface GridProps {
  className?: string
}

export function Grid({ className }: GridProps) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 flex size-full flex-row items-start justify-between',
        className
      )}
    >
      <div className="relative h-max w-px bg-transparent" />
      <div className="relative w-px self-stretch bg-border/50" />
      <div className="relative w-px self-stretch bg-border/50" />
      <div className="relative w-px self-stretch bg-border/50" />
      <div className="relative h-fit w-px bg-transparent" />
    </div>
  )
}
