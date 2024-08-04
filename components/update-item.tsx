import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface UpdateItemProps {
  date?: string
  title?: string
  description?: string
  href?: string
  imageSrc?: string
}

export const UpdateItem = ({
  date,
  title,
  description,
  href,
  imageSrc
}: UpdateItemProps) => {
  return (
    <article className="z-10 flex w-full max-w-6xl flex-wrap items-center gap-14 text-left text-lg text-muted-foreground">
      <div className="flex min-w-80 flex-1 flex-col gap-8">
        <div className="w-full text-base leading-5">{date}</div>
        <h2 className="w-full text-6xl font-semibold tracking-tight text-primary sm:text-5xl">
          {title}
        </h2>
        <p className="w-full text-lg leading-7">{description}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={href || '#'} passHref>
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl p-6 hover:border-primary/25"
            >
              Read more
              <ChevronRight className="ml-2 size-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="items-start justify-start overflow-hidden rounded-3xl border border-border transition-transform duration-500 hover:scale-110">
        <Image
          className="object-cover"
          src={imageSrc || '/gallery/gallery-1.png'}
          alt={title || 'Gallery Image'}
          width={520}
          height={500}
        />
      </div>
    </article>
  )
}
