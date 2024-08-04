'use client'

import { motion } from 'framer-motion'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Work } from '@/config/works'

interface WorkContentProps {
  work: Work
}

export default function WorkContent({ work }: WorkContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p className="mb-6 text-lg">{work.description}</p>

      {work.technologies && (
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {work.technologies.map(tech => (
              <Badge key={tech} variant="outline" className="px-2 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {work.roles && (
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Roles</h2>
          <ul className="list-inside list-disc text-muted-foreground">
            {work.roles.map(role => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Project Details</h2>
        <p className="text-muted-foreground">{work.summary}</p>
      </div>

      {work.links && (
        <div className="flex gap-4">
          {work.links.github && (
            <Button variant="outline" asChild>
              <a
                href={work.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          )}
          {work.links.website && (
            <Button asChild>
              <a
                href={work.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </Button>
          )}
        </div>
      )}
    </motion.div>
  )
}
