'use client'

import { motion } from 'framer-motion'
import { Calendar, LinkIcon, RefreshCw, Rocket, Users } from 'lucide-react'
import Link from 'next/link'
import { PortableText, PortableTextBlock } from 'next-sanity'

import { Icons } from '@/components/icons'
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
  maintainStatus?: string
  projectStage?: string
  contributors?: string[]
}

export default function WorkContent({
  description,
  technologies,
  startDate,
  endDate,
  projectUrl,
  repositoryUrl,
  maintainStatus,
  projectStage,
  contributors
}: WorkContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
    >
      <div className="space-y-8 md:col-span-2">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Project Description</h2>
          <div className="prose prose-invert max-w-none font-normal text-primary/90">
            <PortableText value={description} />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-8">
        <section className="rounded-lg border border-border bg-card p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Project Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="mr-2 size-5 text-primary" />
              <span className="text-primary/85">
                {formatDateString(startDate)} -{' '}
                {endDate === 'Present' ? 'Ongoing' : formatDateString(endDate)}
              </span>
            </div>
            {maintainStatus && (
              <div className="flex items-center">
                <RefreshCw className="mr-2 size-5 text-primary" />
                <span className="capitalize text-primary/85">
                  {maintainStatus} Maintenance
                </span>
              </div>
            )}
            {projectStage && (
              <div className="flex items-center">
                <Rocket className="mr-2 size-5 text-primary" />
                <span className="capitalize text-primary/85">
                  {projectStage}
                </span>
              </div>
            )}
            <div className="flex items-center">
              <Users className="mr-2 size-5 text-primary" />
              <span className="text-primary/85">
                {contributors && contributors.length > 0
                  ? `${contributors.length} Contributors`
                  : 'No Contributors'}
              </span>
            </div>
            {contributors && contributors.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {contributors.map((contributor, index) => (
                  <Badge key={index} variant="outline" className="px-2 py-1">
                    {contributor}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-2 pt-4">
              {projectUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="mr-2 size-4" />
                    Visit Project
                  </Link>
                </Button>
              )}
              {repositoryUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link
                    href={repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.github className="mr-2 size-4" />
                    View Repository
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
