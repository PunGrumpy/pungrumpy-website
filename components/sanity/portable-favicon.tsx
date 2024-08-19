import { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

import { RefLinkSection } from '@/components/button/reflink-section'
import { HashScroll } from '@/components/sanity/hash-scroll'
import { Favicon } from '@/lib/favicon'
import { cn } from '@/lib/utils'

export const CustomPortableTextFavicon: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, '-')
          .replaceAll(/--+/g, '-')
          .replace(/^-|-$/g, '')}
        className="group relative my-8 text-3xl font-bold tracking-tight text-foreground lg:text-4xl"
      >
        <span className="absolute -left-4 hidden text-muted-foreground group-hover:sm:inline-block lg:-left-5">
          #
        </span>
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          'relative mb-2 mt-6 inline-block',
          "before:absolute before:-left-5 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:content-['#']",
          'before:text-muted-foreground before:opacity-80',
          'before:hidden hover:before:inline'
        )}
      >
        <Link
          href={`#${children?.toString().toLowerCase().replaceAll(' ', '-')}`}
        >
          {children}
        </Link>
      </h3>
    ),
    normal: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    )
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <RefLinkSection
          href={value?.href}
          className={cn(
            'font-medium underline underline-offset-4',
            'inline-flex items-center justify-start gap-x-1',
            'text-primary hover:text-primary/80'
          )}
        >
          <Favicon domain={value?.href} alt={value?.href} />
          {children}
        </RefLinkSection>
      )
    }
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc text-muted-foreground [&>li]:mt-2">
        {children}
      </ul>
    )
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>
  }
}
