'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { NoiseOverlay } from '@/components/ui/noise-overlay'

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center space-x-2 font-mono transition-colors hover:text-foreground"
    aria-label={`Visit ${label}`}
  >
    <span className="relative">
      {label}
      <span className="absolute bottom-1/2 left-0 h-px w-0 bg-current transition-all group-hover:w-full" />
    </span>
    <ArrowUpRight className="size-4" />
  </a>
)

export const ContactSection = () => {
  const handleContact = () => {}

  return (
    <section className="relative flex flex-col items-center justify-center pb-24">
      <div className="flex flex-col items-center space-y-12 text-center">
        <div className="max-w-xl">
          <p className="text-4xl font-bold md:text-6xl">
            LET&apos;S WORK TOGETHER
          </p>
        </div>

        <button
          onClick={handleContact}
          className="bg-primary px-8 py-3 font-mono text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Contact Now"
        >
          CONTACT NOW
        </button>

        <div className="relative aspect-video w-full max-w-4xl overflow-hidden">
          <div className="relative size-full">
            <Image
              src="https://placehold.co/1080x1920/png"
              alt="Contact section decorative image"
              fill
              className="object-cover opacity-70 transition-opacity hover:opacity-100"
              priority
            />
            <NoiseOverlay />
            <div className="absolute inset-0 bg-background/10" />
          </div>
        </div>

        <div className="max-w-2xl space-y-6">
          <p className="text-ellipsis font-mono text-lg font-semibold leading-tight">
            BASED IN BANGKOK, I AM A COMPUTER SCIENCE STUDENT WITH ASPIRATIONS
            IN DEVOPS. MY PASSION FOR AUTOMATION, EFFICIENCY, AND INTUITIVE
            SYSTEMS IS EVIDENT IN MY LEARNING JOURNEY
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <SocialLink
              href="https://github.com/your-username"
              label="GITHUB"
            />
            <SocialLink
              href="https://twitter.com/your-username"
              label="TWITTER"
            />
            <SocialLink
              href="https://linkedin.com/in/your-username"
              label="LINKEDIN"
            />
            <SocialLink href="mailto:your-email@example.com" label="EMAIL" />
          </div>
        </div>
      </div>
    </section>
  )
}
