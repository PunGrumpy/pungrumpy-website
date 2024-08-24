import Link from 'next/link'

import { fetchProfile } from '@/app/(app)/actions'
import { Icon, Icons } from '@/components/icons'
import { getSocialIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

interface FooterMenuProps {
  category: string
  items: { label: string; href: string; isExternal?: boolean }[]
}

export const Footer: React.FC<FooterProps> = async ({ className }) => {
  const profile = await fetchProfile()

  return (
    <footer
      className={cn(
        'p-15 relative flex w-full max-w-6xl flex-wrap justify-between gap-20 text-left',
        className
      )}
    >
      <Icons.LineScale className="w-full" />
      <div className="flex flex-wrap gap-5">
        <div className="flex min-w-52 max-w-80 flex-col gap-5">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary/20 hover:bg-muted"
            >
              <Icons.LogoPunGrumpy />
            </Link>
            <span className="font-bold">Noppakorn Kaewsalabnil</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Undergraduate Student at King Mongkut&apos;s Institute of Technology
            Ladkrabang
          </p>
          <div className="flex gap-5">
            {profile.socials.map((social, index) => (
              <SocialButton
                key={index}
                icon={
                  <Icon name={getSocialIcon(social.name)} className="size-6" />
                }
                href={social.url}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Noppakorn Kaewsalabnil. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <FooterMenu
          category="Site map"
          items={[
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Takes', href: '/takes' },
            {
              label: 'Curriculum Vitae',
              href: 'https://cv.pungrumpy.com/',
              isExternal: true
            }
          ]}
        />
        <FooterMenu
          category="Tools we use"
          items={[
            { label: 'Next.js', href: 'https://nextjs.org/', isExternal: true },
            {
              label: 'shadcn/ui',
              href: 'https://ui.shadcn.com/',
              isExternal: true
            },
            {
              label: 'Framer Motion',
              href: 'https://www.framer.com/motion/',
              isExternal: true
            },
            {
              label: 'Sanity.io',
              href: 'https://www.sanity.io/',
              isExternal: true
            }
          ]}
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

const FooterMenu = ({ category, items }: FooterMenuProps) => (
  <div className="flex min-w-52 max-w-80 flex-col gap-1">
    <span className="text-xs uppercase text-muted-foreground">{category}</span>
    {items.map(({ label, href, isExternal }, index) => (
      <Link
        key={label}
        href={href}
        className="text-sm leading-tight transition-transform duration-300 ease-in-out group-hover:font-medium"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <div
          key={index}
          className="group relative h-8 w-36 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 blur-md transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <div className="absolute left-0 top-0 h-full w-0.5 bg-primary opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <div className="flex h-full items-center px-4 py-1.5">{label}</div>
        </div>
      </Link>
    ))}
  </div>
)
