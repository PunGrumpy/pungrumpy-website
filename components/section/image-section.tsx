import Image from 'next/image'

import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'

interface ImageSectionProps {
  src: Record<string, any>
  alt: string
  className?: string
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  className = ''
}) => {
  return (
    <div
      className={cn(
        'relative aspect-video overflow-hidden rounded-md',
        className
      )}
    >
      <Image
        className="object-cover object-center transition-all duration-300 hover:scale-105"
        src={urlFor(src).url()}
        alt={alt}
        loading="lazy"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        placeholder="blur"
        blurDataURL={urlFor(src).blur(10).quality(10).format('webp').url()}
      />
    </div>
  )
}
