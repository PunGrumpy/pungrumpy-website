'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { TimeDisplay } from './time-display'

const headerVariants = cva('fixed left-0 top-0 z-40 w-full font-mono', {
  variants: {
    variant: {
      default: 'mix-blend-difference',
      solid: 'bg-background',
      transparent: 'bg-transparent'
    },
    size: {
      default: 'py-3',
      sm: 'py-2',
      lg: 'py-4'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  showBackButton?: boolean
  showSearch?: boolean
  showMenu?: boolean
  logo?: boolean
  children?: React.ReactNode
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      variant,
      size,
      showBackButton = false,
      showSearch = false,
      showMenu = false,
      logo = true,
      children,
      ...props
    },
    ref
  ) => {
    const router = useRouter()

    const handleBack = () => {
      router.push('/')
    }

    return (
      <header
        ref={ref}
        className={cn(headerVariants({ variant, size, className }))}
        {...props}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">LOCAL/</span>
            <TimeDisplay />
            {showBackButton && (
              <button
                onClick={handleBack}
                className="ml-2 rounded-full bg-muted p-1 transition-colors hover:bg-muted/80"
                aria-label="Go back to home page"
              >
                <ChevronLeft className="size-4" />
              </button>
            )}
            {logo && (
              <Image src="/favicon.ico" alt="favicon" width={32} height={32} />
            )}
          </div>

          <div className="flex items-center space-x-4">
            {children}
            {showSearch && <Search className="size-4" />}
            {showMenu && (
              <button
                className="rounded border border-border px-3 py-0.5 transition-colors hover:border-foreground/50"
                aria-label="Toggle menu"
              >
                MENU
              </button>
            )}
          </div>
        </div>
      </header>
    )
  }
)
Header.displayName = 'Header'
