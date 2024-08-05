'use client'

import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'
import { Clock, RefreshCw, Star, Users } from 'lucide-react'

interface WorkStatsProps {
  maintainStatus?: string
  projectStage?: string
  lastUpdated?: string
  contributors?: string[]
  highlights?: string[]
}

export default function WorkStats({
  maintainStatus,
  projectStage,
  lastUpdated,
  contributors,
  highlights
}: WorkStatsProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold">Project Stats</h2>

      {maintainStatus && (
        <div className="mb-4 flex items-center">
          <RefreshCw className="mr-2 size-5" />
          <span className="text-primary/85">{maintainStatus}</span>
        </div>
      )}

      {projectStage && (
        <div className="mb-4 flex items-center">
          <Star className="mr-2 size-5" />
          <span className="text-primary/85">{projectStage}</span>
        </div>
      )}

      {lastUpdated && (
        <div className="mb-4 flex items-center">
          <Clock className="mr-2 size-5" />
          <span className="text-primary/85">
            Updated {formatDistanceToNow(new Date(lastUpdated))} ago
          </span>
        </div>
      )}

      {contributors && contributors.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center">
            <Users className="mr-2 size-5" />
            <span className="text-primary/85">
              {contributors.length} Contributors
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {contributors.map((contributor, index) => (
              <motion.span
                key={contributor}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm"
              >
                {contributor}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <div>
          <h3 className="mb-2 font-semibold">Highlights</h3>
          <ul className="list-inside list-disc space-y-1">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-primary/85"
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
