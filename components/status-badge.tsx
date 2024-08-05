import { Circle } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'
import { StatusType } from '@/types'

interface StatusBadgeProps {
  status: StatusType
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const statusConfig: Record<StatusType, { label: string; color: string }> = {
  inDevelopment: {
    label: 'In Development',
    color: 'text-blue-500 bg-blue-500/10'
  },
  completed: { label: 'Completed', color: 'text-green-500 bg-green-500/10' },
  onHold: { label: 'On Hold', color: 'text-yellow-500 bg-yellow-500/10' },
  archived: { label: 'Archived', color: 'text-gray-500 bg-gray-500/10' }
}

const sizeConfig = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2'
}

export function StatusBadge({
  status,
  className,
  size = 'md'
}: StatusBadgeProps) {
  const { label, color } = statusConfig[status]

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        color,
        sizeConfig[size],
        className
      )}
    >
      <Circle
        className={cn('mr-1 animate-pulse', {
          'size-2': size === 'sm',
          'size-3': size === 'md',
          'size-4': size === 'lg'
        })}
      />
      {label}
    </span>
  )
}
