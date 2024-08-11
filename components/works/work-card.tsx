'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  getMaintainStatusColor,
  getMaintainStatusIcon,
  getMaintainStatusLabel,
  getProjectStageColor,
  getProjectStageIcon,
  getProjectStageLabel,
  getProjectTypeIcon
} from '@/lib/variant'
import type { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

interface WorkCardProps {
  index: number
  name: string
  slug: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  projectType: ProjectType
  tagline: string
  coverImage: string
}

export function WorkCard({
  index,
  name,
  slug,
  maintainStatus,
  projectStage,
  projectType,
  tagline,
  coverImage
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div whileHover="hover" initial="initial" className="h-full">
        <Card className="relative h-full overflow-hidden bg-card">
          <CardHeader className="p-2">
            <Link href={`/works/${encodeURIComponent(slug)}`}>
              <motion.div className="relative h-40 w-full overflow-hidden rounded-md md:h-52">
                <Image
                  src={coverImage}
                  alt={name}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="inline-flex items-center rounded-full bg-foreground/10 p-2 text-xs text-foreground shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {getProjectTypeIcon(projectType)}
                </motion.div>
                <motion.h3 className="font-semibold">{name}</motion.h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  size="sm"
                  variant="subtle"
                  color={getMaintainStatusColor(maintainStatus)}
                  icon={getMaintainStatusIcon(maintainStatus)}
                >
                  {getMaintainStatusLabel(maintainStatus)}
                </Badge>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  size="sm"
                  variant="subtle"
                  color={getProjectStageColor(projectStage)}
                  icon={getProjectStageIcon(projectStage)}
                >
                  {getProjectStageLabel(projectStage)}
                </Badge>
              </motion.div>
            </div>
            <motion.div
              variants={{
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <Separator className="bg-foreground/10" />
            </motion.div>
            <motion.p className="h-10 text-sm text-muted-foreground">
              {tagline}
            </motion.p>
          </CardContent>
          <CardFooter className="px-4">
            <Link
              href={`/works/${encodeURIComponent(slug)}`}
              className="w-full"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Button
                  variant="outline"
                  className="w-full rounded-[10px] hover:border-primary/25"
                >
                  <span>Show more</span>
                  <motion.div
                    variants={{
                      hover: { x: 5 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="ml-2 size-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}
