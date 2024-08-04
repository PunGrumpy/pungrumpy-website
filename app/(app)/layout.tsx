import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/layout/footer'
import { Grid } from '@/components/layout/grid'
import { Header } from '@/components/layout/header'
import { Sitemap } from '@/config/sitemap'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_VERCEL_URL
    ? new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL}`)
    : new URL('http://localhost:3000'),
  title: {
    default: `Home | ${Sitemap.name}`,
    template: `%s | ${Sitemap.name}`
  },
  description: `${Sitemap.description}`,
  robots: 'follow, index',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/metadata/favicon-dark.ico'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/metadata/favicon-light.ico'
      }
    ],
    shortcut: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/metadata/favicon-dark.ico'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/metadata/favicon-light.ico'
      }
    ],
    apple: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/metadata/apple-touch-icon-dark.png'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/metadata/apple-touch-icon-light.png'
      }
    ]
  },
  openGraph: {
    title: `${Sitemap.name}`,
    description: `${Sitemap.description}`,
    type: 'website',
    url: `${Sitemap.url}`,
    siteName: `${Sitemap.name}`,
    locale: 'en_US',
    countryName: 'Thailand',
    images: [
      {
        url: '/metadata/og-image.png',
        width: 1920,
        height: 1080,
        alt: `${Sitemap.name}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${Sitemap.name}`,
    description: `${Sitemap.description}`,
    creator: '@pungrumpy',
    site: '@pungrumpy',
    creatorId: 'pungrumpy',
    siteId: 'pungrumpy',
    images: [
      {
        url: '/metadata/twitter-card.png',
        width: 1920,
        height: 1080,
        alt: `${Sitemap.name}`
      }
    ]
  }
}

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start">
      <Grid />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
