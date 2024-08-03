import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Icons } from '../icons'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'p-15 relative flex w-full max-w-7xl flex-wrap justify-between gap-20 text-left',
        className
      )}
    >
      <Icons.line className="w-full" />
      <div className="z-10 flex flex-wrap gap-5">
        <div className="flex min-w-52 max-w-80 flex-col gap-5">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
            >
              <Icons.logo />
            </Link>
            <span className="font-bold">Noppakorn Kaewsalabnil</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Undergraduate Student at King Mongkut&apos;s Institute of Technology
            Ladkrabang
          </p>
          <div className="flex gap-5">
            <SocialButton icon={<Icons.github className="size-6" />} href="#" />
            <SocialButton
              icon={<Icons.linkedin className="size-6" />}
              href="#"
            />
            <SocialButton
              icon={<Icons.instagram className="size-6" />}
              href="#"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 . PRIVACY . TERMS
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-wrap gap-5">
        <FooterMenu
          category="About"
          items={['Work', 'Takes', 'Curriculum Vitae', 'Source Code']}
        />
        <FooterMenu
          category="Tools we use"
          items={['Figma', 'Next.js', 'shadcn/ui', 'Framer Motion']}
        />
      </div>
    </footer>
  )
}

const SocialButton = ({ icon, href }: { icon: any; href: string }) => (
  <Link
    href={href}
    className="flex size-10 items-center justify-center rounded-full shadow-md backdrop-blur-sm transition-colors hover:bg-muted"
  >
    {icon}
  </Link>
)

const FooterMenu = ({
  category,
  items
}: {
  category: string
  items: string[]
}) => (
  <div className="flex min-w-52 max-w-80 flex-col gap-1">
    <span className="text-xs uppercase text-muted-foreground md:hidden">
      {category}
    </span>
    {items.map((item, index) => (
      <div
        key={index}
        className="group relative h-8 w-36 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 blur-md transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        <div className="absolute left-0 top-0 h-full w-0.5 bg-primary opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        <div className="flex h-full items-center px-4 py-1.5">
          <span className="text-sm leading-tight transition-transform duration-300 ease-in-out group-hover:font-medium">
            {item}
          </span>
        </div>
      </div>
    ))}
  </div>
)
