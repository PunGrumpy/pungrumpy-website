import { GalleryImage } from '@/components/gallery-image'

export interface GalleryProps {
  className?: string
}

const images = [
  { src: '/gallery/gallery-1.png', alt: 'Gallery Image 1' },
  { src: '/gallery/gallery-2.png', alt: 'Gallery Image 2' },
  { src: '/gallery/gallery-3.png', alt: 'Gallery Image 3' }
]

export function Gallery({ className }: GalleryProps) {
  return (
    <div
      className={`relative flex w-full max-w-7xl flex-row flex-wrap items-start justify-start gap-6 ${className}`}
    >
      {images.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  )
}
