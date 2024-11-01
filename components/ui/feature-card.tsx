import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

import { NoiseOverlay } from './noise-overlay'

const featureCardVariants = cva(
  'relative cursor-pointer border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border-2',
        ghost: 'border-0 bg-transparent'
      },
      size: {
        default: 'p-6',
        sm: 'p-4',
        lg: 'p-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  title: string
  type?: string
  image: string
  onClick?: () => void
  imageHeight?: string
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      variant,
      size,
      title,
      type,
      image,
      onClick,
      imageHeight = 'h-72',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick?.()}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project details`}
      className={cn(featureCardVariants({ variant, size, className }))}
      {...props}
    >
      {type && (
        <div className="absolute right-0 top-0 p-4">
          <div className="font-mono text-xs text-muted-foreground">{`//${type}`}</div>
        </div>
      )}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className={cn(
            'w-full object-cover opacity-70 transition-opacity hover:opacity-100',
            imageHeight
          )}
        />
        <NoiseOverlay />
      </div>
      <div className="mt-6">
        <h3 className="font-mono uppercase text-foreground">{title}</h3>
      </div>
    </div>
  )
)
FeatureCard.displayName = 'FeatureCard'
