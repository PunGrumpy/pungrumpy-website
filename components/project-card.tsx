'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProjectCardProps {
  index: number
  slug: string
  imageUrl: string
  iconType: React.ReactNode
  projectType: string
  title: string
  description: string
}

export function ProjectCard({
  index,
  slug,
  imageUrl,
  iconType,
  projectType,
  title,
  description
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
              src={imageUrl}
              alt={title}
              fill
              className="rounded-md object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-xl"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {iconType}
            <span>{projectType}</span>
          </div>
          <Separator className="bg-primary/10" />
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Separator className="bg-primary/10" />
        </CardContent>
        <CardFooter className="px-4">
          <Link href={`/works/${encodeURIComponent(slug)}`}>
            <Button
              variant="outline"
              className="rounded-[10px] hover:border-primary/10"
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
