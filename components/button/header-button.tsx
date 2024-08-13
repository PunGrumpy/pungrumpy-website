import Link from 'next/link'

import { cn } from '@/lib/utils'

interface HeaderButtonProps {
  href: string
  label: string
  total: string
  value: string
  isSelected?: boolean
  isExternal?: boolean
  onClick?: () => void
}

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  href,
  label,
  total,
  value,
  isSelected,
  isExternal,
  onClick
}) => {
  const ButtonComponent = isExternal ? 'a' : Link
  const buttonProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <ButtonComponent
      {...buttonProps}
      onClick={onClick}
      className={cn(
        'flex min-w-24 flex-1 items-center justify-start gap-2 rounded-[20px] border border-border px-4 py-2 transition duration-300 ease-in-out hover:border-muted-foreground/50 hover:bg-muted',
        isSelected ? 'border-muted-foreground/25 bg-muted' : ''
      )}
    >
      <div className="flex-1 p-2 text-xl font-medium leading-7">{label}</div>
      <div className="flex w-16 flex-col items-center justify-end text-center text-xs text-muted-foreground">
        <div>{total}</div>
        <div className="text-base leading-6">{value}</div>
      </div>
    </ButtonComponent>
  )
}
