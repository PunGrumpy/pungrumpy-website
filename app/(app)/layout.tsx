import type { Metadata } from 'next'

import { Footer } from '@/components/layout/footer'
import { Grid } from '@/components/layout/grid'
import { Header } from '@/components/layout/header'

export const metadata: Metadata = {
  title: 'Noppakorn Kaewsalabnil',
  description: 'DevOps Enthusiast and Computer Science Student'
}

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="xs:p-5 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start">
      <Grid />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
