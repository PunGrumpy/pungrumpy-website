import { FileText, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { ProfileInterface } from '@/types'

export const ProfileSection: React.FC<{ profile: ProfileInterface }> = ({
  profile
}) => {
  return (
    <div className="relative flex w-full flex-col items-center space-y-6 overflow-hidden bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
      <div className="relative">
        <div className="aspect-auto overflow-hidden rounded-xl ring-2 ring-primary/20">
          <Image
            src={profile.avatar.image}
            alt={profile.avatar.alt}
            width={1024}
            height={1024}
            quality={100}
            placeholder="blur"
            blurDataURL={profile.avatar.lqip}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex w-full flex-row space-x-4">
        <Button variant="default" className="group w-full" asChild>
          <Link href="mailto:">
            <Mail className="mr-2 size-5 transition-transform group-hover:scale-110" />
            Contact Me
          </Link>
        </Button>
        <Button variant="outline" className="group w-full" asChild>
          <Link href="https://cv.pungrumpy.com">
            <FileText className="mr-2 size-5 transition-transform group-hover:scale-110" />
            View Resume
          </Link>
        </Button>
      </div>
    </div>
  )
}
