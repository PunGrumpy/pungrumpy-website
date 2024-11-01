'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowUpRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const socialLinkVariants = cva(
  'group relative inline-flex items-center space-x-2 font-mono transition-colors',
  {
    variants: {
      variant: {
        default: 'hover:text-foreground',
        primary: 'hover:text-primary',
        secondary: 'hover:text-secondary'
      },
      size: {
        default: 'text-base gap-2',
        sm: 'text-sm gap-1.5',
        lg: 'text-lg gap-2.5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface SocialLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof socialLinkVariants> {
  href: string
  label: string
  icon?: React.ReactNode
  underline?: boolean
}

export const SocialLink = React.forwardRef<HTMLAnchorElement, SocialLinkProps>(
  (
    {
      className,
      variant,
      size,
      href,
      label,
      icon = <ArrowUpRight className="size-4" />,
      underline = true,
      ...props
    },
    ref
  ) => (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(socialLinkVariants({ variant, size, className }))}
      aria-label={`Visit ${label}`}
      {...props}
    >
      <span className="relative">
        {label}
        {underline && (
          <span className="absolute bottom-1/2 left-0 h-px w-0 bg-current transition-all group-hover:w-full" />
        )}
      </span>
      {icon}
    </a>
  )
)
SocialLink.displayName = 'SocialLink'
