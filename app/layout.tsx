import '@/app/globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { Footer } from '@/components/layout/footer'
import { Grid } from '@/components/layout/grid'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Noppakorn Kaewsalabnil',
  description: 'DevOps Enthusiast and Computer Science Student'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background">
            <div className="xs:p-5 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start">
              <Grid />
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
