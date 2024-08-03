'use client'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export interface HeaderProps {
  className?: string
  selectedButton?: 'Works' | 'Takes' | 'CV'
}

export function Header({ className, selectedButton }: HeaderProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  return (
    <div
      className={cn(
        'relative flex w-full max-w-7xl flex-row flex-wrap items-center justify-between text-left text-2xl text-foreground',
        className
      )}
    >
      <Link
        href="/"
        className="flex flex-row items-center gap-2 p-5 text-2xl font-bold leading-9 tracking-tighter text-foreground no-underline hover:text-muted-foreground"
      >
        <Icons.logo className="size-8" />
        <span className="hidden sm:block">Noppakorn Kaewsalabnil</span>
      </Link>

      <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center p-5 sm:hidden">
            <Button variant="outline" size="icon" className="sm:hidden">
              <Icons.menu />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent>{/* Add content here */}</SheetContent>
      </Sheet>

      <div className="hidden min-w-[230px] max-w-[680px] flex-1 items-center justify-start gap-5 rounded-3xl border border-border bg-background p-3 shadow-lg backdrop-blur-md sm:flex">
        <HeaderButton
          href="/works"
          label="Works"
          total="Total"
          value="2"
          isSelected={selectedButton === 'Works'}
        />
        <HeaderButton
          href="https://takes.pungrumpy.com"
          label="Takes"
          total="2022"
          value="Oct"
          isSelected={selectedButton === 'Takes'}
        />
        <HeaderButton
          href="https://cv.pungrumpy.com"
          label="CV"
          total="Info"
          value="More"
          isSelected={selectedButton === 'CV'}
          isExternal
        />
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
}

const HeaderButton = ({
  href,
  label,
  total,
  value,
  isSelected,
  isExternal
}: HeaderButtonProps) => {
  const ButtonComponent = isExternal ? 'a' : Link
  const buttonProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <ButtonComponent
      {...buttonProps}
      className={`flex min-w-[200px] flex-1 items-center justify-start gap-2 rounded-2xl border border-border bg-background p-2 transition duration-300 ease-in-out hover:border-muted hover:bg-muted ${isSelected ? 'bg-muted' : ''}`}
    >
      <div className="flex-1 text-xl font-medium leading-7 text-foreground">
        {label}
      </div>
      <div className="flex w-16 flex-col items-center justify-end text-center text-xs text-muted-foreground">
        <div>{total}</div>
        <div className="text-base leading-6">{value}</div>
      </div>
    </ButtonComponent>
  )
}
