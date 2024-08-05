'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn, formatDateString } from '@/lib/utils'
import { sanityFetcher } from '@/sanity/lib/client'
import { ProjectInterface, UpdateInterface } from '@/types'

export interface HeaderProps {
  className?: string
  selectedButton?: 'Works' | 'Updates' | 'CV'
}

export async function Header({ className, selectedButton }: HeaderProps) {
  const pathname = usePathname()
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const project: ProjectInterface[] = await sanityFetcher({
    query: `*[_type == "project"]`,
    tags: ['projects']
  })

  const update: UpdateInterface[] = await sanityFetcher({
    query: `*[_type == "update"]`,
    tags: ['updates']
  })

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
        <Icons.logo className="mr-2 size-8" />
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
        >
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
              className="size-10 rounded-full border border-border bg-muted/50 md:hidden"
            >
              <Icons.menu />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-background/95 p-10 backdrop-blur-lg">
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
                  href="/works"
                  label="Works"
                  total="Total"
                  value="2"
                  isSelected={pathname === '/works'}
                  onClick={() => setDrawerOpen(false)}
                />
                <HeaderButton
                  href="/updates"
                  label="Updates"
                  total="2024"
                  value="Aug"
                  isSelected={pathname === '/updates'}
                  onClick={() => setDrawerOpen(false)}
                />
                <HeaderButton
                  href="https://cv.pungrumpy.com"
                  label="CV"
                  total="Info"
                  value="More"
                  isSelected={selectedButton === 'CV'}
                  isExternal
                  onClick={() => setDrawerOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </SheetContent>
      </Sheet>

      <div className="hidden min-w-56 max-w-2xl flex-1 items-center justify-start gap-5 rounded-[32px] border border-border bg-background p-3 shadow-lg backdrop-blur-md md:flex">
        <HeaderButton
          href="/works"
          label="Works"
          total="Total"
          value={project.length.toString()}
          isSelected={pathname === '/works'}
        />
        <HeaderButton
          href="/updates"
          label="Updates"
          total={
            formatDateString(update[update.length - 1]?.date).split(' ')[2] ||
            '-'
          }
          value={
            formatDateString(update[update.length - 1]?.date, 'short').split(
              ' '
            )[0] || '-'
          }
          isSelected={pathname === '/updates'}
        />
        <HeaderButton
          href="https://cv.pungrumpy.com"
          label="CV"
          total="Info"
          value="More"
          isSelected={selectedButton === 'CV'}
          isExternal
        />
        <Button
          variant="outline"
          size="icon"
          className="size-[62px] rounded-[20px] border-border hover:border-muted-foreground/50 hover:bg-muted"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <SunIcon className="size-5" />
          ) : (
            <MoonIcon className="size-5" />
          )}
        </Button>
      </div>
    </div>
  )
}

interface HeaderButtonProps {
  href: string
  label: string
  total: string
  value: string
  isSelected?: boolean
  isExternal?: boolean
  onClick?: () => void
}

const HeaderButton = ({
  href,
  label,
  total,
  value,
  isSelected,
  isExternal,
  onClick
}: HeaderButtonProps) => {
  const ButtonComponent = isExternal ? 'a' : Link
  const buttonProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <ButtonComponent
      {...buttonProps}
      onClick={onClick}
      className={cn(
        'flex min-w-24 flex-1 items-center justify-start gap-2 rounded-[20px] border border-border bg-background px-4 py-2 transition duration-300 ease-in-out hover:border-muted-foreground/50 hover:bg-muted',
        isSelected ? 'border-muted-foreground/25 bg-muted' : ''
      )}
    >
      <div className="flex-1 p-2 text-xl font-medium leading-7">{label}</div>
      <div className="flex w-16 flex-col items-center justify-end text-center text-xs text-muted-foreground">
        <div>{total}</div>
        <div className="text-base leading-6">{value}</div>
      </div>
    </ButtonComponent>
  )
}
