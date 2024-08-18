import { ImageSection } from '@/components/section/image-section'

interface PortableImageProps {
  value: {
    alt: string
    caption: string
  }
}

export const PortableImage: React.FC<PortableImageProps> = ({ value }) => {
  return (
    <figure className="my-10">
      <ImageSection src={value} alt={value.alt} className="rounded-md" />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">
          {value.caption}
        </figcaption>
      )}
    </figure>
  )
}
