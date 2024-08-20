import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

import { LinkPreview } from '@/components/ui/link-preview'
import { cn } from '@/lib/utils'

interface RefLinkSectionProps {
  href: Url
  children?: React.ReactNode
  className?: string
  target?: HTMLAttributeAnchorTarget
}

export const RefLinkSection: React.FC<RefLinkSectionProps> = ({
  href,
  children,
  className,
  target = '_blank'
}) => {
  return (
    <LinkPreview url={href as string} quality={100}>
      <Link
        href={href + '?ref=pungrumpy.com'}
        rel="noopener"
        target={target}
        className={cn(
          'text-blue-500 hover:underline dark:text-blue-400',
          className
        )}
      >
        {children}
      </Link>
    </LinkPreview>
  )
}
