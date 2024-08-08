import Image from 'next/image'
import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { formatDateString } from '@/lib/utils'
import { TakeInterface } from '@/types'

interface GalleryCardProps {
  take: TakeInterface
}

export function GalleryCard({ take }: GalleryCardProps) {
  return (
    <Card className="md:w-[calc(33.33% - 16px)] w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={take.takeImage.image}
            alt={take.takeImage.alt}
            fill
            className="rounded-t-xl object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold">{take.title}</h3>
          <p className="mb-2 text-sm text-muted-foreground">
            {formatDateString(take.date)}
          </p>
          <div className="mb-2 mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {take.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
