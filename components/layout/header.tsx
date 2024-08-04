'use client'

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
        'flex w-full max-w-7xl flex-row flex-wrap items-center justify-between text-left text-2xl',
        className
      )}
    >
      <Link
        href="/"
        className="flex flex-row items-center text-2xl font-bold leading-9 tracking-tighter no-underline transition-colors hover:text-muted-foreground"
      >
        <Icons.logo className="mr-2 size-8" />
        <span className="hidden sm:block">Noppakorn Kaewsalabnil</span>
        <span className="block sm:hidden">PunGrumpy</span>
      </Link>

      <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center sm:hidden">
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full border border-border bg-muted/50 sm:hidden"
            >
              <Icons.menu />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent>{/* Add content here */}</SheetContent>
      </Sheet>

      <div className="hidden min-w-56 max-w-2xl flex-1 items-center justify-start gap-5 rounded-[32px] border border-border bg-background p-3 shadow-lg backdrop-blur-md sm:flex">
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
          isExternal
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
      className={`flex min-w-24 flex-1 items-center justify-start gap-2 rounded-[20px] border border-border bg-background px-4 py-2 transition duration-300 ease-in-out hover:border-muted-foreground/50 hover:bg-muted ${isSelected ? 'bg-muted' : ''}`}
    >
      <div className="flex-1 p-2 text-xl font-medium leading-7">{label}</div>
      <div className="flex w-16 flex-col items-center justify-end text-center text-xs text-muted-foreground">
        <div>{total}</div>
        <div className="text-base leading-6">{value}</div>
      </div>
    </ButtonComponent>
  )
}
