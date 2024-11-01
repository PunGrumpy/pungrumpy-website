'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

interface AvailabilityStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  label?: string
}

export const AvailabilityStatus = React.forwardRef<
  HTMLDivElement,
  AvailabilityStatusProps
>(
  (
    {
      className,
      color = 'bg-blue-500',
      label = 'AVAILABLE FOR FREELANCE',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn('flex items-center space-x-4 text-xs', className)}
      {...props}
    >
      <div className="relative flex">
        <div className={cn('size-1.5 rounded-full', color)} />
        <div className="absolute -inset-1">
          <div
            className={cn(
              'size-full animate-ping rounded-full opacity-75',
              color
            )}
          />
        </div>
      </div>
      <span className="text-lg text-muted-foreground">{label}</span>
    </div>
  )
)
AvailabilityStatus.displayName = 'AvailabilityStatus'
