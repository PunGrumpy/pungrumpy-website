'use client'

import { IconMenuDeep, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { HeaderButton } from '@/components/button/header-button'
import { ThemeToggleIcon } from '@/components/button/theme-button'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface HeaderProps {
  className?: string
  totalProject?: number
  totalTake?: number
}

export const Header: React.FC<HeaderProps> = ({
  className,
  totalProject,
  totalTake
}) => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const menuItems = [
    { href: '/about', label: 'About', total: "I'm", value: 'Pun' },
    {
      href: '/projects',
      label: 'Projects',
      total: 'Total',
      value: totalProject?.toString() || '0'
    },
    {
      href: '/takes',
      label: 'Takes',
      total: 'Taken',
      value: totalTake?.toString() || '0'
    }
  ]

  return (
    <>
      <div
        className={cn(
          'relative flex w-full max-w-6xl flex-row flex-wrap items-center justify-between text-left text-2xl',
          className
        )}
      >
        <Link
          href="/"
          className="flex flex-row items-center text-2xl font-bold leading-9 tracking-tighter no-underline transition-colors hover:text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Icons.LogoPunGrumpy className="size-8" />
            <span className="hidden sm:block">Noppakorn Kaewsalabnil</span>
            <span className="block sm:hidden">PunGrumpy</span>
          </div>
        </Link>

        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full border border-border md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <IconMenuDeep className="size-6" />
        </Button>

        <div className="hidden min-w-56 max-w-2xl flex-1 items-center justify-start gap-5 rounded-[32px] border border-border p-3 shadow-lg backdrop-blur-md md:flex">
          {menuItems.map(item => (
            <HeaderButton
              key={item.href}
              href={item.href}
              label={item.label}
              total={item.total}
              value={item.value}
              isSelected={pathname === item.href}
            />
          ))}
          <Button
            variant="outline"
            size="icon"
            className="size-[62px] rounded-[20px] border-border hover:border-primary/20 hover:bg-muted"
            onClick={handleThemeToggle}
          >
            <ThemeToggleIcon theme={theme} className="size-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-background shadow-xl"
            >
              <div className="flex h-full flex-col overflow-y-auto p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-2xl font-bold leading-9 tracking-tighter">
                    <Icons.LogoPunGrumpy className="size-8" />
                    PunGrumpy
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative size-10"
                  >
                    <motion.div
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconX className="size-6" />
                    </motion.div>
                  </Button>
                </div>
                <nav className="flex flex-col gap-2 rounded-[32px] border border-border/75 p-4">
                  {menuItems.map(item => (
                    <HeaderButton
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      total={item.total}
                      value={item.value}
                      isSelected={pathname === item.href}
                      onClick={() => setIsMenuOpen(false)}
                    />
                  ))}
                  <button
                    className="flex w-full flex-1 items-center gap-2 rounded-[20px] border border-border px-4 py-2 transition duration-300 ease-in-out hover:border-primary/20 hover:bg-muted"
                    onClick={handleThemeToggle}
                  >
                    <div className="flex-1 justify-start p-2 text-start text-xl font-medium leading-7">
                      Theme
                    </div>
                    <div className="flex w-16 flex-col items-center justify-end text-center text-xs text-muted-foreground">
                      <div>Toggle</div>
                      <div className="text-base leading-6">
                        {theme === 'dark' ? 'Light' : 'Dark'}
                      </div>
                    </div>
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
