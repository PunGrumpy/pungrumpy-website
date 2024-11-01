'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { RunningText } from '@/components/ui/running-text'
import { TimeDisplay } from '@/components/ui/time-display'
import { cn } from '@/lib/utils'

import { SocialLink } from './social-link'

interface MenuItem {
  id: string
  label: string
  path: string
  number: string
}

const menuItems: MenuItem[] = [
  { id: '1', label: 'HOME', path: '/', number: '01' },
  { id: '2', label: 'ABOUT PUN', path: '/about', number: '02' },
  { id: '3', label: 'WORKS', path: '/projects', number: '03' },
  { id: '4', label: 'MY TREK', path: '/trek', number: '04' },
  { id: '5', label: 'CONTACT', path: '/contact', number: '05' }
] as const

interface OverlayMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const OverlayMenu = React.forwardRef<HTMLDivElement, OverlayMenuProps>(
  ({ isOpen, onClose }, ref) => {
    const pathname = usePathname()

    const isActive = React.useCallback(
      (path: string) => {
        if (path === '/') {
          return pathname === path
        }
        return pathname.startsWith(path)
      },
      [pathname]
    )

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Menu Panel */}
            <motion.div
              ref={ref}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 flex size-full flex-col bg-background md:w-1/3"
            >
              {/* Header */}
              <header className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>LOCAL/</span>
                  <TimeDisplay />
                </div>
                <div className="w-32 overflow-hidden border border-border p-1 md:w-48">
                  <RunningText className="text-sm text-muted-foreground" />
                </div>
                <button
                  onClick={onClose}
                  className="rounded border border-border px-3 py-0.5 transition-colors hover:border-foreground/50"
                  aria-label="Close menu"
                >
                  CLOSE
                </button>
              </header>

              {/* Menu Items */}
              <nav className="flex flex-1 flex-col justify-center">
                <ul className="space-y-2 px-6">
                  {menuItems.map(item => {
                    const active = isActive(item.path)
                    return (
                      <li key={item.id} className="border-t border-border">
                        <Link
                          href={item.path}
                          onClick={onClose}
                          className={cn(
                            'group flex items-start gap-2 py-4 text-4xl font-bold transition-colors md:text-5xl',
                            active
                              ? 'text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                          )}
                        >
                          <span className="text-base">
                            {active ? '−' : '+'}
                          </span>
                          <span>{item.label}</span>
                          <span
                            className={cn(
                              'ml-auto font-mono text-base',
                              active && 'text-foreground'
                            )}
                          >
                            /{item.number}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <footer className="border-t border-border px-6 py-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <span className="text-sm text-muted-foreground">
                    BASED IN BKK, THAILAND
                  </span>
                  <div className="flex items-center gap-8">
                    <SocialLink
                      size="sm"
                      href="https://github.com"
                      label="GITHUB"
                      className="text-muted-foreground"
                    />
                    <SocialLink
                      size="sm"
                      href="https://twitter.com"
                      label="TWITTER"
                      className="text-muted-foreground"
                    />
                    <SocialLink
                      size="sm"
                      href="https://linkedin.com"
                      label="LINKEDIN"
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
              </footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }
)

OverlayMenu.displayName = 'OverlayMenu'
