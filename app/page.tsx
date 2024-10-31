'use client'

import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { ContactSection } from '@/components/sections/contact-section'
import { FeaturedCases } from '@/components/sections/featured-cases'
import { HeroSection } from '@/components/sections/hero-section'

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]">
    <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')]" />
  </div>
)

export default function Page() {
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
      setScrolled(window.scrollY > 50 && window.scrollY < window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <NoiseOverlay />

      {/* Header */}
      <header className="fixed left-0 top-0 z-40 w-full mix-blend-difference">
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
      </header>

      <main className="container mx-auto">
        <HeroSection />
        <FeaturedCases />
        <ContactSection />
      </main>

      {/* Footer */}
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

      {/* Scroll Button */}
      {scrolled && (
        <div className="fixed bottom-6 right-6 bg-primary px-4 py-2 text-xs text-primary-foreground">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono"
            aria-label="Back to top"
          >
            {'//SCROLL'}
          </button>
        </div>
      )}
    </div>
  )
}
