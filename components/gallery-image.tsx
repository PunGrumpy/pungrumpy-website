import { Bookmark } from 'lucide-react'
import Image from 'next/image'

export interface GalleryImageProps {
  src: string
  alt: string
}

export function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="ease-&lsqb;cubic-bezier(0.2,0.8,0.2,1)&rsqb; group relative flex h-80 min-w-[280px] max-w-[520px] flex-1 flex-col items-start justify-start gap-2.5 overflow-hidden rounded-3xl border border-border">
      <Image src={src} alt={alt} fill className="z-0 object-cover" />
    </div>
  )
}
