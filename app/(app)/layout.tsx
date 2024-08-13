import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/layout/footer'
import { Grid } from '@/components/layout/grid'
import { Header } from '@/components/layout/header'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/config/sitemap'
import { formatDateString } from '@/lib/utils'

import { fetchProjects, fetchTakes, fetchUpdates } from './actions'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(`${process.env.NEXT_PUBLIC_METADATA_BASE}`)
    : new URL('http://localhost:3000'),
  title: {
    default: `Home | ${SITE_TITLE}`,
    template: `%s | ${SITE_TITLE}`
  },
  description: `${SITE_DESCRIPTION}`,
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
    title: `${SITE_TITLE}`,
    description: `${SITE_DESCRIPTION}`,
    type: 'website',
    url: `${SITE_URL}`,
    siteName: `${SITE_TITLE}`,
    locale: 'en_US',
    countryName: 'Thailand',
    images: [
      {
        url: '/metadata/og-image.png',
        width: 1920,
        height: 1080,
        alt: `${SITE_TITLE}`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_TITLE}`,
    description: `${SITE_DESCRIPTION}`,
    creator: '@pungrumpy',
    site: '@pungrumpy',
    creatorId: 'pungrumpy',
    siteId: 'pungrumpy',
    images: [
      {
        url: '/metadata/twitter-card.png',
        width: 1920,
        height: 1080,
        alt: `${SITE_TITLE}`
      }
    ]
  }
}

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const [projects, updates, takes] = await Promise.all([
    fetchProjects(),
    fetchUpdates(),
    fetchTakes()
  ])

  const latestUpdate = updates[updates.length - 1]
  const updateYear = latestUpdate
    ? formatDateString(latestUpdate.date).split(' ')[2]
    : '-'
  const updateMonth = latestUpdate
    ? formatDateString(latestUpdate.date, 'short').split(' ')[0]
    : '-'

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start">
      <Grid />
      <Header
        totalProject={projects.length}
        yearUpdate={updateYear}
        monthUpdate={updateMonth}
        totalTake={takes.length}
      />
      {children}
      <Footer />
    </div>
  )
}
