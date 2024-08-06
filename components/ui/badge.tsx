import { cva, type VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full backdrop-blur-sm',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow ',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow',
        outline: 'text-foreground',
        gray: 'text-foreground bg-gray-500',
        'gray-subtle': 'text-gray-500 bg-gray-500/10',
        blue: 'text-foreground bg-blue-500',
        'blue-subtle': 'text-blue-500 bg-blue-500/10',
        purple: 'text-foreground bg-purple-500',
        'purple-subtle': 'text-purple-500 bg-purple-500/10',
        amber: 'text-foreground bg-amber-500',
        'amber-subtle': 'text-amber-500 bg-amber-500/10',
        red: 'text-foreground bg-red-500',
        'red-subtle': 'text-red-500 bg-red-500/10',
        pink: 'text-foreground bg-pink-500',
        'pink-subtle': 'text-pink-500 bg-pink-500/10',
        green: 'text-foreground bg-green-500',
        'green-subtle': 'text-green-500 bg-green-500/10',
        teal: 'text-foreground bg-teal-500',
        'teal-subtle': 'text-teal-500 bg-teal-500/10',
        inverted: 'text-background bg-primary'
      },
      size: {
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-3 py-1.5',
        lg: 'text-base px-4 py-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: LucideIcon
}

function Badge({
  className,
  variant,
  size,
  icon: Icon,
  children,
  ...props
}: BadgeProps) {
  const IconComponent = Icon

  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {IconComponent && (
        <IconComponent
          className={cn('mr-1', {
            'size-3': size === 'sm',
            'size-4': size === 'md',
            'size-5': size === 'lg'
          })}
        />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
