import { AnimatePresence, motion } from 'framer-motion'
import {
  Aperture,
  Camera,
  Focus,
  SunDim,
  Telescope,
  Timer,
  Zap
} from 'lucide-react'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import React, { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  formatAperture,
  formatExposureTime,
  getExifValue,
  NullableExif
} from '@/lib/exif'
import { formatDateString } from '@/lib/utils'
import { TakeInterface } from '@/types'

interface IconWithTextProps {
  icon: React.ElementType
  value: string | number
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon: Icon, value }) => (
  <div className="flex items-center text-xs text-foreground/80 transition-colors hover:text-foreground">
    <Icon className="mr-1 size-4" />
    <span>{value}</span>
  </div>
)

export const GalleryCard: React.FC<{ take: TakeInterface }> = ({ take }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { takeImage, title, description, date, tags, camera } = take
  const exif: NullableExif = takeImage.exif

  return (
    <Card
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={takeImage.image}
            alt={takeImage.alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            quality={100}
            placeholder={takeImage?.lqip ? 'blur' : 'empty'}
            blurDataURL={takeImage?.lqip || ''}
            className="object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex flex-col justify-end p-4 backdrop-blur-sm"
              >
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <div className="mb-2 line-clamp-2 text-sm">
                  <PortableText value={description} />
                </div>
                <div className="grid-row-3 mb-2 grid gap-2">
                  <IconWithText icon={Camera} value={camera || 'N/A'} />
                  <IconWithText
                    icon={Telescope}
                    value={getExifValue(exif, 'LensModel', 'N/A') || 'N/A'}
                  />
                  <IconWithText
                    icon={Aperture}
                    value={
                      formatAperture(
                        getExifValue(exif, 'FNumber', undefined)
                      ) || 'N/A'
                    }
                  />
                  <IconWithText
                    icon={SunDim}
                    value={`${getExifValue(exif, 'ExposureBiasValue', 0)?.toFixed(2) || 'N/A'} eV`}
                  />
                  <IconWithText
                    icon={Timer}
                    value={`${formatExposureTime(getExifValue(exif, 'ExposureTime', undefined)) || 'N/A'} sec`}
                  />
                  <IconWithText
                    icon={Zap}
                    value={`ISO ${getExifValue(exif, 'ISO', undefined) || 'N/A'}`}
                  />
                  <IconWithText
                    icon={Focus}
                    value={`${getExifValue(exif, 'FocalLength', undefined) || 'N/A'} mm`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-4">
          <div className="h-20">
            <h3 className="mb-1 truncate text-lg font-semibold text-foreground">
              {title}
            </h3>
            <p className="mb-1 text-sm text-muted-foreground">
              {formatDateString(date)}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.sort().map((tag, index) => (
              <Badge key={index} color="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
