import { ChevronRight, GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProjectCardProps {
  imageUrl: string
  projectType: string
  title: string
  description: string
}

export function ProjectCard({
  imageUrl,
  projectType,
  title,
  description
}: ProjectCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader className="p-2">
        <div className="relative h-52 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-md border border-border"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCapIcon className="size-4" />
          <span>{projectType}</span>
        </div>
        <Separator className="bg-primary/10" />
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Separator className="bg-primary/10" />
      </CardContent>
      <CardFooter className="px-4">
        <Button
          variant="outline"
          className="rounded-[10px] hover:border-primary/10"
        >
          <span>Show more</span>
          <ChevronRight className="ml-2 size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
