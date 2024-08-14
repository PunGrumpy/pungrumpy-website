'use client'

import { motion } from 'framer-motion'
import { PortableText } from 'next-sanity'

import { Badge } from '@/components/ui/badge'
import { formatDateString } from '@/lib/utils'
import { ProjectInterface } from '@/types'

import { SlideInView } from '../animation/slide-in-view'

interface WorkContentProps {
  work: ProjectInterface
}

export const WorkContent: React.FC<WorkContentProps> = ({ work }) => {
  return (
    <SlideInView>
      <div className="space-y-4 md:col-span-2">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Description</h2>
          <div className="prose prose-invert max-w-none text-primary/90">
            <PortableText value={work.description} />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Period</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-primary/85">
                {formatDateString(work.startDate)} -{' '}
                {work.endDate === 'Present'
                  ? 'Ongoing'
                  : formatDateString(work.endDate || '')}
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Technologies</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {work.technologies.map(tech => (
                <Badge key={tech} variant="outline" className="px-2 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Contributors</h2>
          <div className="space-y-4">
            {work.contributors && work.contributors.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {work.contributors.map((contributor, index) => (
                  <Badge key={index} variant="outline" className="px-2 py-1">
                    {contributor}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </SlideInView>
  )
}
