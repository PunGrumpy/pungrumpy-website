import { PortableText } from 'next-sanity'

import { SlideInView } from '@/components/animation/slide-in-view'
import { CustomPortableText } from '@/components/sanity/portable-text'
import { ProfileInterface } from '@/types'

export const ContentSection: React.FC<{ profile: ProfileInterface }> = ({
  profile
}) => (
  <SlideInView delay={0.1} className="flex flex-col justify-start">
    <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
      I&apos;m{' '}
      <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {profile.name}
      </span>
    </h1>
    <h2 className="mb-6 text-3xl font-semibold text-muted-foreground">
      A college student and open-source contributor
    </h2>
    <div className="mb-8 text-lg leading-relaxed text-muted-foreground">
      <PortableText value={profile.about} components={CustomPortableText} />
    </div>
  </SlideInView>
)
