'use client'

import { ChevronLeft, Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { NoiseOverlay } from '@/components/ui/noise-overlay'
import { type Project } from '@/types/project'

interface ProjectDetailsClientProps {
  project: Project
}

const TimeDisplay = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}

export default function ProjectDetailsClient({
  project
}: ProjectDetailsClientProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="mb-24 min-h-screen bg-background font-mono text-foreground">
      {/* Header */}
      <header className="fixed left-0 top-0 z-40 w-full">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">LOCAL/</span>
            <TimeDisplay />
            <button
              onClick={handleBack}
              className="ml-2 rounded-full bg-muted p-1 transition-colors hover:bg-muted/80"
              aria-label="Back"
            >
              <ChevronLeft className="size-4" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="size-4" />
            <button className="rounded border border-border px-3 py-0.5 transition-colors hover:border-foreground/50">
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-24">
        <div className="grid grid-cols-[1fr_auto] gap-24">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <h1 className="mb-6 text-6xl font-bold uppercase tracking-tight">
                {project.title}
              </h1>
              <p className="max-w-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden">
              <div className="relative size-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <NoiseOverlay />
                <div className="absolute inset-0 bg-background/10" />
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">About the Project</h2>
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>
          </div>

          {/* Right Metadata */}
          <div className="w-60 space-y-6 pt-2">
            <div>
              <div className="text-sm text-muted-foreground">CLIENT</div>
              <div className="text-xl uppercase">EVERYONE</div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">YEAR</div>
              <div className="text-xl">{project.year}</div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">CATEGORY</div>
              <div className="text-xl uppercase">OPEN SOURCE</div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">LIVE PROJECT</div>
              <button className="group mt-1 flex items-center gap-2">
                <span className="text-xl">VIEW NOW</span>
                <span className="font-normal text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">TECHNOLOGIES</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-card-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
