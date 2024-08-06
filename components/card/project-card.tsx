'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ProjectTypeIcon } from '@/components/project-type-icon'
import { ProjectStatusBadge } from '@/components/status-badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MaintainStatusType, ProjectStageType, ProjectType } from '@/types'

interface ProjectCardProps {
  index: number
  name: string
  slug: string
  maintainStatus: MaintainStatusType
  projectStage: ProjectStageType
  projectType: ProjectType
  tagline: string
  coverImage: string
}

export function ProjectCard({
  index,
  name,
  slug,
  maintainStatus,
  projectStage,
  projectType,
  tagline,
  coverImage
}: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, transform: 'translateY(-20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.5, delay: index * 0.25 }}
    >
      <Card className="group bg-card">
        <CardHeader className="p-2">
          <div className="relative h-52 w-full">
            <Image
              src={coverImage}
              alt={name}
              fill
              className="rounded-md transition-transform duration-200 group-hover:scale-95 group-hover:rounded-xl group-hover:border group-hover:border-primary/20 md:object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ProjectTypeIcon type={projectType} size="sm" />
              <h3 className="font-semibold">{name}</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <ProjectStatusBadge maintainStatus={maintainStatus} size="sm" />
            <ProjectStatusBadge projectStage={projectStage} size="sm" />
          </div>
          <Separator className="bg-primary/10" />
          <p className="h-10 text-sm text-muted-foreground">{tagline}</p>
        </CardContent>
        <CardFooter className="px-4">
          <Link href={`/works/${encodeURIComponent(slug)}`} className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-[10px] hover:border-primary/10"
            >
              <span>Show more</span>
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
