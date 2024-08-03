import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Gallery } from '@/components/gallery'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="xs:p-5 mx-auto flex flex-row flex-wrap items-center justify-center gap-14 rounded-3xl p-14 text-start sm:p-8">
      <div className="z-10 flex w-full max-w-7xl flex-wrap items-center justify-center gap-14 rounded-3xl">
        <div className="flex min-w-80 flex-1 flex-col gap-8">
          <h1 className="xs:text-3xl text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Hello, I&apos;m Noppakorn Kaewsalabnil
          </h1>
          <h2 className="text-2xl font-semibold leading-normal tracking-tight text-muted-foreground">
            DevOps Enthusiast and Computer Science Student
          </h2>
          <p className="text-base leading-normal text-muted-foreground">
            I&apos;m a dedicated computer science student at King Mongkut&apos;s
            Institute of Technology Ladkrabang, specializing in software
            development and DevOps. My passion lies in creating innovative
            solutions and optimizing development processes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl p-6"
              asChild
            >
              <Link href="/works">
                Explore My Portfolio
                <ChevronRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="min-w-80 flex-1 rounded-3xl border border-border object-cover"
          priority
        />
      </div>
      <Gallery />
    </main>
  )
}
