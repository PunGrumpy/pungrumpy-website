'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { HeaderButton } from '@/components/button/header-button'
import { ThemeToggleIcon } from '@/components/button/theme-button'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
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
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
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
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Icons.logo className="size-8" />
          <span className="hidden sm:block">Noppakorn Kaewsalabnil</span>
          <span className="block sm:hidden">PunGrumpy</span>
        </motion.div>
      </Link>

      <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full border border-border md:hidden"
            >
              <Icons.menu />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-background p-10 backdrop-blur-lg">
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 rounded-[32px] border border-border/75 p-4"
              >
                <HeaderButton
                  href="/about"
                  label="About"
                  total="I'm"
                  value="Pun"
                  isSelected={pathname === '/about'}
                  onClick={() => setDrawerOpen(false)}
                />
                <HeaderButton
                  href="/projects"
                  label="Projects"
                  total="Total"
                  value={totalProject?.toString() || '0'}
                  isSelected={pathname === '/projects'}
                  onClick={() => setDrawerOpen(false)}
                />
                <HeaderButton
                  href="/takes"
                  label="Takes"
                  total="Taken"
                  value={totalTake?.toString() || '0'}
                  isSelected={pathname === '/takes'}
                  onClick={() => setDrawerOpen(false)}
                />
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
              </motion.div>
            )}
          </AnimatePresence>
        </SheetContent>
      </Sheet>

      <div className="hidden min-w-56 max-w-2xl flex-1 items-center justify-start gap-5 rounded-[32px] border border-border p-3 shadow-lg backdrop-blur-md md:flex">
        <HeaderButton
          href="/about"
          label="About"
          total="I'm"
          value="Pun"
          isSelected={pathname === '/about'}
        />
        <HeaderButton
          href="/projects"
          label="Projects"
          total="Total"
          value={totalProject?.toString() || '0'}
          isSelected={pathname === '/projects'}
        />
        <HeaderButton
          href="/takes"
          label="Takes"
          total="Taken"
          value={totalTake?.toString() || '0'}
          isSelected={pathname === '/takes'}
        />
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
  )
}
