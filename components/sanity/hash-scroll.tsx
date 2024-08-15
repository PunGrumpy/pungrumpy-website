import Link from 'next/link'

interface HashScrollProps {
  text: React.ReactNode
  event?: any
}

export const slugify = (id: any) => {
  if (id) {
    return id
      .toString()
      .toLowerCase()
      .replaceAll(/[^-\w]+/g, '-')
      .replaceAll(/--+/g, '-')
      .replace(/^-|-$/g, '')
  }
  return ''
}

export const HashScroll: React.FC<HashScrollProps> = ({ text, event }) => {
  return (
    <Link
      onClick={event}
      href={`#${slugify(text)}`}
      className="text-foreground transition-colors hover:text-primary"
    >
      {text}
    </Link>
  )
}
