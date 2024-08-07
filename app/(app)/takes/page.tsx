import { ChevronDownIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const images = Array(6).fill({
  src: '/gallery/gallery-1.png',
  alt: 'Gallery Image'
})

export default function TakesPage() {
  return (
    <div className="z-10 flex w-full max-w-6xl flex-col space-y-16 rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-row flex-wrap items-center justify-start gap-5 rounded-[32px] border border-border bg-background p-3">
          {['Newest', 'Designs', 'Bookmarks'].map(label => (
            <Button
              key={label}
              variant="outline"
              className="flex h-12 min-w-40 items-center justify-between gap-16 rounded-[20px] transition duration-300 ease-in-out hover:border-muted-foreground/50 hover:bg-muted"
            >
              <span className="text-lg font-medium leading-7">{label}</span>
              <ChevronDownIcon className="size-6" />
            </Button>
          ))}
        </div>
        <div className="flex w-60 items-center rounded-[32px] border border-border bg-background p-3">
          <Input
            placeholder="Search"
            className="text-md h-12 rounded-[20px] border border-border bg-transparent leading-7 transition duration-300 ease-in-out hover:border-muted-foreground/50 hover:bg-muted"
            endIcon={<SearchIcon className="size-6" />}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-start gap-[30px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square w-[calc(33.33%-20px)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
