'use client'

import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
  </div>
)

const HoverText = ({
  children,
  className = '',
  variant = 'default'
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'title'
}) => {
  const baseClasses = 'relative inline-block font-mono'
  const variantClasses = {
    default: 'transition-colors duration-300 hover:text-primary',
    title: 'transition-colors duration-300 hover:text-primary'
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

const FeatureCard = ({
  title,
  type,
  image
}: {
  title: string
  type: string
  image: string
}) => (
  <div className="relative border border-border bg-card p-4 transition-colors hover:border-primary/20">
    <div className="absolute right-0 top-0 p-2">
      <div className="font-mono text-xs text-muted-foreground">{`//${type}`}</div>
    </div>
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="h-48 w-full object-cover opacity-70 transition-opacity hover:opacity-100"
    />
    <div className="mt-4">
      <h3 className="font-mono uppercase text-foreground">{title}</h3>
    </div>
  </div>
)

export default function Component() {
  const [currentTime, setCurrentTime] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: 'DISTIL WIZARD',
      type: 'SYSTEM',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      title: 'QA TESTER',
      type: 'DEVOPS',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      title: 'LOGIN/VISA',
      type: 'PORTAL',
      image: '/placeholder.svg?height=300&width=400'
    },
    {
      title: 'PSH/HELP',
      type: 'MOBILE',
      image: '/placeholder.svg?height=300&width=400'
    }
  ]

  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <NoiseOverlay />

      <div className="fixed left-0 top-0 z-40 w-full mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-2 font-mono text-xs">
            <span className="text-muted-foreground">LOCAL/</span>
            {currentTime}
            <Image src="/favicon.ico" alt="favicon" width={32} height={32} />
          </div>
          <div className="space-x-6 font-mono text-xs">
            <span className="hidden md:inline">{'//DIGITAL WEB + DEVOPS'}</span>
            <span>BASED IN BKK, THAILAND</span>
          </div>
        </div>
      </div>

      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20">
        <div className="absolute left-6 top-1/4">
          <div className="writing-vertical-lr rotate-180 text-xs text-muted-foreground">
            {'//DIGITAL WEB + DEVOPS'}
          </div>
        </div>

        <div className="mb-8 text-6xl font-bold md:text-8xl">
          <HoverText variant="title" className="mb-2 block">
            NOPPAKORN KAEWSALABNIL
          </HoverText>
        </div>

        <div className="max-w-xl">
          <p className="mb-8 text-muted-foreground">
            I AM A FUTURE DEVOPS ENGINEER WHO MERGES TECHNICAL EXPERTISE WITH
            CREATIVE INNOVATION TO BUILD NEXT-GENERATION DIGITAL EXPERIENCES.
          </p>
        </div>

        <div className="absolute bottom-12 right-6">
          <div className="text-xs text-muted-foreground">
            {'//SCROLL TO EXPLORE'}
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-24">
        <div className="mb-12">
          <HoverText variant="title" className="text-4xl font-bold">
            FEATURED CASES
          </HoverText>
          <div className="mt-2 text-xs text-muted-foreground">
            MY FEATURED WORKS BASED ON THE DIGITAL REALM AND UNIQUE EXPERIENCES
            OF UI
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FeatureCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mb-12 text-4xl font-bold md:text-6xl">
          <HoverText variant="title" className="mb-2 block">
            I AM EVOLUTIONARILY
          </HoverText>
          <HoverText variant="title" className="mb-2 block">
            WIRED TO SLEEK
          </HoverText>
          <HoverText variant="title" className="block">
            .WO—NDER
          </HoverText>
        </div>

        <div className="mb-12 max-w-xl">
          <p className="text-muted-foreground">
            LET&apos;S WORK TOGETHER TO CREATE SOMETHING EXTRAORDINARY.
          </p>
        </div>

        <button
          className="bg-primary px-8 py-3 font-mono text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Contact Now"
        >
          CONTACT NOW
        </button>
      </section>

      <footer className="border-t border-border p-6">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">NOPPAKORN</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="size-4" />
          </button>
        </div>
      </footer>

      {scrolled && (
        <div className="fixed bottom-6 right-6 bg-primary px-4 py-2 text-xs text-primary-foreground">
          <span>{'//SCROLL'}</span>
        </div>
      )}
    </div>
  )
}
