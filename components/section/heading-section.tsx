import { SlideInView } from '@/components/animation/slide-in-view'

interface HeadingSectionProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export const HeadingSection: React.FC<HeadingSectionProps> = ({
  title,
  description,
  children
}) => {
  return (
    <header className="mb-10">
      <SlideInView className="space-y-8">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
        {children}
      </SlideInView>
    </header>
  )
}
