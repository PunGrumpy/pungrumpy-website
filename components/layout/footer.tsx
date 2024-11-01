'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronUp } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const footerVariants = cva('border-t border-border p-6', {
  variants: {
    variant: {
      default: 'bg-background',
      transparent: 'bg-transparent'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  showScrollButton?: boolean
  children?: React.ReactNode
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, variant, showScrollButton = true, children, ...props },
    ref
  ) => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
      <footer
        ref={ref}
        className={cn(footerVariants({ variant, className }))}
        {...props}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <span className="text-muted-foreground">NOPPAKORN KAEWSALABNIL</span>
          {children}
          {showScrollButton && (
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ChevronUp className="size-4" />
            </button>
          )}
        </div>
      </footer>
    )
  }
)
Footer.displayName = 'Footer'
