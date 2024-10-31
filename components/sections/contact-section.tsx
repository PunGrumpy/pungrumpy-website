import React from 'react'

const HoverText = ({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`relative inline-block font-mono transition-colors duration-300 hover:text-primary ${className}`}
    >
      {children}
    </div>
  )
}

export const ContactSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mb-12 text-4xl font-bold md:text-6xl">
        <HoverText className="mb-2 block">I AM EVOLUTIONARILY</HoverText>
        <HoverText className="mb-2 block">WIRED TO SLEEK</HoverText>
        <HoverText className="block">.WO—NDER</HoverText>
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
  )
}
