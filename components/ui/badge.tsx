import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full backdrop-blur-sm',
  variants: {
    variant: {
      filled: '',
      subtle: 'bg-opacity-10',
      outline: 'border border-border'
    },
    color: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      gray: 'bg-gray-500 text-white',
      blue: 'bg-blue-500 text-white',
      purple: 'bg-purple-500 text-white',
      amber: 'bg-amber-500 text-white',
      red: 'bg-red-500 text-white',
      pink: 'bg-pink-500 text-white',
      green: 'bg-green-500 text-white',
      teal: 'bg-teal-500 text-white'
    },
    size: {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-3 py-1.5',
      lg: 'text-base px-4 py-2'
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      class: 'text-primary bg-transparent border-border'
    },
    {
      variant: 'subtle',
      color: 'default',
      class: 'text-primary bg-primary/10'
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: 'text-secondary bg-secondary/10'
    },
    {
      variant: 'subtle',
      color: 'destructive',
      class: 'text-destructive bg-destructive/10'
    },
    {
      variant: 'subtle',
      color: 'gray',
      class: 'text-gray-500 bg-gray-500'
    },
    {
      variant: 'subtle',
      color: 'blue',
      class: 'text-blue-500 bg-blue-500'
    },
    {
      variant: 'subtle',
      color: 'purple',
      class: 'text-purple-500 bg-purple-500'
    },
    {
      variant: 'subtle',
      color: 'amber',
      class: 'text-amber-500 bg-amber-500'
    },
    {
      variant: 'subtle',
      color: 'red',
      class: 'text-red-500 bg-red-500'
    },
    {
      variant: 'subtle',
      color: 'pink',
      class: 'text-pink-500 bg-pink-500'
    },
    {
      variant: 'subtle',
      color: 'green',
      class: 'text-green-500 bg-green-500'
    },
    {
      variant: 'subtle',
      color: 'teal',
      class: 'text-teal-500 bg-teal-500'
    }
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'default',
    size: 'md'
  }
})

type BadgeVariantProps = VariantProps<typeof badgeVariants>

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    BadgeVariantProps {
  icon?: React.ReactElement
}

function Badge({
  className,
  variant,
  color,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, color, size }), className)}
      {...props}
    >
      {icon &&
        React.cloneElement(icon, {
          className: cn(
            'mr-1',
            {
              'size-3': size === 'sm',
              'size-4': size === 'md',
              'size-5': size === 'lg'
            },
            icon.props.className
          )
        })}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
