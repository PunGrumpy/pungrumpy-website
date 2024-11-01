import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

export const timeDisplayVariants = cva('font-mono', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg'
    },
    variant: {
      default: 'text-foreground',
      muted: 'text-muted-foreground'
    }
  },
  defaultVariants: {
    size: 'default',
    variant: 'default'
  }
})

export interface TimeDisplayProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof timeDisplayVariants> {
  format?: Intl.DateTimeFormatOptions
}

export const TimeDisplay = React.forwardRef<HTMLSpanElement, TimeDisplayProps>(
  ({ className, size, variant, format = { hour12: false }, ...props }, ref) => {
    const [time, setTime] = React.useState('')

    React.useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        setTime(now.toLocaleTimeString('en-US', format))
      }
      updateTime()
      const interval = setInterval(updateTime, 1000)
      return () => clearInterval(interval)
    }, [format])

    return (
      <span
        ref={ref}
        className={cn(timeDisplayVariants({ size, variant, className }))}
        {...props}
      >
        {time}
      </span>
    )
  }
)
TimeDisplay.displayName = 'TimeDisplay'
