import Image from 'next/image'

const images = [
  { src: '/gallery/gallery-1.png', alt: 'Gallery Image 1' },
  { src: '/gallery/gallery-2.png', alt: 'Gallery Image 2' },
  { src: '/gallery/gallery-3.png', alt: 'Gallery Image 3' }
]

export default function WorksPage() {
  return (
    <>
      <div className="gap-15 z-10 mx-auto flex max-w-6xl flex-col items-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="size-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
