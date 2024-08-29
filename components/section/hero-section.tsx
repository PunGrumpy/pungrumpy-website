import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { SlideInView } from '@/components/animation/slide-in-view'
import { Scene } from '@/components/scene'
import { Button } from '@/components/ui/button'

export const HeroSection: React.FC = () => {
  return (
    <SlideInView className="flex w-full max-w-6xl flex-wrap items-center gap-14 rounded-3xl">
      <div className="flex min-w-80 flex-1 flex-col gap-8">
        <h1 className="xs:text-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Hello, I&apos;m Noppakorn Kaewsalabnil
        </h1>
        <h2 className="text-2xl font-semibold leading-normal tracking-tight text-muted-foreground">
          DevOps Enthusiast and Computer Science Student
        </h2>
        <p className="text-lg leading-normal text-muted-foreground">
          I&apos;m a dedicated computer science student at King Mongkut&apos;s
          Institute of Technology Ladkrabang, specializing in software
          development and DevOps. My passion lies in creating innovative
          solutions and optimizing development processes.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl p-6 hover:border-primary/25"
              asChild
            >
              <Link href="/projects">
                Explore My Portfolio
                <ChevronRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <SlideInView
        className="flex flex-1 items-center justify-center"
        delay={0.16}
      >
        <Scene
          scene="https://prod.spline.design/wilNy8PO5GgG6gyi/scene.splinecode"
          ratio={1 / 1}
        />
      </SlideInView>
    </SlideInView>
  )
}
