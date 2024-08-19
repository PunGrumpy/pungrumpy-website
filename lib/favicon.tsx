import Image from 'next/image'

interface faviconProps {
  domain: string
  alt: string
}

export const Favicon: React.FC<faviconProps> = ({ domain, alt }) => {
  function extractDomain(url: string) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    )
    if (match) {
      const fullDomain = match[1]
      const parts = fullDomain.split('.')
      if (parts.length >= 2) {
        return parts[0]
      }
    }
  }

  return (
    <Image
      className="mr-2"
      src={`http://www.google.com/s2/favicons?domain=${domain}`}
      width={16}
      height={16}
      alt={extractDomain(domain) || alt}
    />
  )
}
