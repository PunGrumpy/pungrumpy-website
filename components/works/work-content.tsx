'use client'

import { motion } from 'framer-motion'
import {
  ActivityIcon,
  Calendar,
  LinkIcon,
  RefreshCw,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { PortableText } from 'next-sanity'

import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDateString } from '@/lib/utils'
import { ProjectInterface } from '@/types'

interface WorkContentProps {
  work: ProjectInterface
}

export const WorkContent: React.FC<WorkContentProps> = ({ work }) => {
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
          <div className="prose prose-invert max-w-none text-primary/90">
            <PortableText value={work.description} />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {work.technologies.map(tech => (
              <Badge
                key={tech}
                variant="filled"
                color="secondary"
                className="px-3 py-1"
              >
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
                {formatDateString(work.startDate)} -{' '}
                {work.endDate === 'Present'
                  ? 'Ongoing'
                  : formatDateString(work.endDate || '')}
              </span>
            </div>
            {work.maintainStatus && (
              <div className="flex items-center">
                <RefreshCw className="mr-2 size-5 text-primary" />
                <span className="capitalize text-primary/85">
                  {work.maintainStatus} Maintenance
                </span>
              </div>
            )}
            {work.projectStage && (
              <div className="flex items-center">
                <ActivityIcon className="mr-2 size-5 text-primary" />
                <span className="capitalize text-primary/85">
                  {work.projectStage}
                </span>
              </div>
            )}
            <div className="flex items-center">
              <Users className="mr-2 size-5 text-primary" />
              <span className="text-primary/85">
                {work.contributors && work.contributors.length > 0
                  ? `${work.contributors.length} Contributors`
                  : 'No Contributors'}
              </span>
            </div>
            {work.contributors && work.contributors.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {work.contributors.map((contributor, index) => (
                  <Badge key={index} variant="outline" className="px-2 py-1">
                    {contributor}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-2 pt-4">
              {work.projectUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link
                    href={work.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="mr-2 size-4" />
                    Visit Project
                  </Link>
                </Button>
              )}
              {work.repository && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link
                    href={work.repository}
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
