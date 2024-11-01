import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface FilterButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
  isReversed: boolean
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  isReversed
}) => {
  return (
    <Button
      variant="outline"
      className={`flex h-12 w-full items-center justify-between gap-4 rounded-[20px] transition duration-300 ease-in-out md:w-48 ${
        isActive
          ? 'border-muted-foreground/25 bg-muted'
          : 'hover:border-primary/20 hover:bg-muted'
      }`}
      onClick={onClick}
    >
      <span className="text-lg font-medium leading-7">{label}</span>
      {isReversed ? (
        <ArrowUpIcon className="size-5" />
      ) : (
        <ArrowDownIcon className="size-5" />
      )}
    </Button>
  )
}
