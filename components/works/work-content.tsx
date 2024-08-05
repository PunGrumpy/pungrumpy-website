'use client'

import { motion } from 'framer-motion'
import { PortableText, PortableTextBlock } from 'next-sanity'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDateString } from '@/lib/utils'

interface WorkContentProps {
  description: PortableTextBlock[]
  technologies: string[]
  startDate: string
  endDate: string
  projectUrl: string
  repositoryUrl: string
}

export default function WorkContent({
  description,
  technologies,
  startDate,
  endDate,
  projectUrl,
  repositoryUrl
}: WorkContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Project Description</h2>
        <div className="prose prose-invert max-w-none font-normal text-primary/90">
          <PortableText value={description} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <Badge key={tech} variant="outline" className="px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Project Timeline</h2>
        <p className="text-base text-primary/90">
          Start Date is{formatDateString(startDate)} and the project is{' '}
          {endDate === 'Present'
            ? 'ongoing'
            : `completed on ${formatDateString(endDate)}`}
        </p>
      </div>

      <div className="flex gap-4">
        {projectUrl && (
          <Button asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Button>
        )}
        {repositoryUrl && (
          <Button variant="outline" asChild>
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}
