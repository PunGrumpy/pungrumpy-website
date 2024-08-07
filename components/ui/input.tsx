import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
            {React.cloneElement(startIcon, {
              size: 18,
              className: cn(
                'text-foreground/50 peer-focus:text-foreground',
                startIcon.props.className
              )
            })}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            startIcon ? 'pl-8' : '',
            endIcon ? 'pr-8' : '',
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {React.cloneElement(endIcon, {
              size: 18,
              className: cn(
                'text-foreground/50 peer-focus:text-foreground',
                endIcon.props.className
              )
            })}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
