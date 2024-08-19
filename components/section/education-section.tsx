import Image from 'next/image'

import { SlideInView } from '@/components/animation/slide-in-view'
import { RefLinkSection } from '@/components/button/reflink-section'
import { formatDateString } from '@/lib/utils'
import { EducationInterface } from '@/types'

export const EducationSection: React.FC<{
  education: EducationInterface[]
}> = ({ education }) => {
  return (
    <section className="flex w-full max-w-6xl flex-col items-start">
      <SlideInView delay={0.16}>
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Education Background
          </h2>
        </div>
        <SlideInView delay={0.2}>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
            {education.map(edu => (
              <div
                key={edu._id}
                className="relative flex max-w-2xl items-start gap-x-6"
              >
                <RefLinkSection
                  href={edu.url || '#'}
                  className="relative grid min-h-20 min-w-20 place-items-center text-clip rounded-md border border-border bg-card p-2"
                >
                  <Image
                    src={edu.logo.image}
                    alt={edu.logo.alt}
                    width={50}
                    height={50}
                    className="rounded-md object-cover duration-300"
                  />
                </RefLinkSection>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold transition-colors hover:text-primary">
                    {edu.institutionName}
                  </h3>
                  <p className="text-lg text-secondary-foreground">
                    {edu.degree}
                  </p>
                  <time className="mt-2 text-sm uppercase tracking-widest text-accent-foreground/80">
                    {formatDateString(edu.startDate)} -{' '}
                    {edu.endDate ? (
                      formatDateString(edu.endDate)
                    ) : (
                      <span className="text-green-500">Present</span>
                    )}
                  </time>
                  <p className="my-4 text-sm tracking-tight text-muted-foreground">
                    {edu.description}
                  </p>
                  {edu.major && (
                    <p className="text-sm font-medium">
                      Major: <span className="text-primary">{edu.major}</span>
                    </p>
                  )}
                  {edu.gpa && (
                    <p className="text-sm font-medium">
                      GPA: <span className="text-primary">{edu.gpa}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SlideInView>
      </SlideInView>
    </section>
  )
}
