import { ChevronRight, GraduationCapIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { FollowerPointerCard } from './ui/following-pointer'

interface ProjectCardProps {
  slug: string
  imageUrl: string
  projectType: string
  title: string
  description: string
}

export function ProjectCard({
  slug,
  imageUrl,
  projectType,
  title,
  description
}: ProjectCardProps) {
  return (
    <Card className="group bg-card">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={title}
            avatar="https://avatars.githubusercontent.com/u/108584943?v=4"
          />
        }
      >
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
            <GraduationCapIcon className="size-4" />
            <span>{projectType}</span>
          </div>
          <Separator className="bg-primary/10" />
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Separator className="bg-primary/10" />
        </CardContent>
        <CardFooter className="px-4">
          <Link href={`/works/${encodeURIComponent(slug)}`} className="w-full">
            <Button
              variant="outline"
              className="rounded-[10px] hover:border-primary/10"
            >
              <span>Show more</span>
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </Link>
        </CardFooter>
      </FollowerPointerCard>
    </Card>
  )
}

const TitleComponent = ({
  title,
  avatar
}: {
  title: string
  avatar: string
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="Thumbnail"
      className="rounded-full border border-border object-cover"
    />
    <p>{title}</p>
  </div>
)
