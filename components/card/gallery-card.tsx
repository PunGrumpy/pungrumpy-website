import { AnimatePresence, motion } from 'framer-motion'
import { Aperture, Atom, Camera, Focus, SunDim, Timer, Zap } from 'lucide-react'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import React, { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { convertExposureTime, formatDateString } from '@/lib/utils'
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
  const { takeImage, settings, title, description, date, tags, camera } = take
  const exif = takeImage.exif || {}
  const lensModel = exif.LensModel || settings?.lensModel || 'N/A'

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
                  <IconWithText icon={Atom} value={lensModel} />
                  <IconWithText
                    icon={Aperture}
                    value={`${exif.FNumber || settings?.aperture || 'N/A'} ƒ`}
                  />
                  <IconWithText
                    icon={SunDim}
                    value={`${exif.ExposureBiasValue?.toFixed(2) || settings?.exposureCompensation || 0} eV`}
                  />
                  <IconWithText
                    icon={Timer}
                    value={`${convertExposureTime(exif.ExposureTime!) || settings?.shutterSpeed || 'N/A'} sec`}
                  />
                  <IconWithText
                    icon={Zap}
                    value={`ISO ${exif.ISO || settings?.iso || 'N/A'}`}
                  />
                  <IconWithText
                    icon={Focus}
                    value={`${exif.FocalLength || settings?.focalLength || 'N/A'} mm`}
                  />
                  <div className="flex items-center text-xs text-foreground/80 transition-colors hover:text-foreground"></div>
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
            {tags.map((tag, index) => (
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
