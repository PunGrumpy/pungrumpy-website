import React from 'react'

export const ContactSection = () => {
  return (
    <section className="relative pb-24">
      <div>
        <div className="mb-12 max-w-xl">
          <p className="text-4xl font-bold md:text-6xl">
            LET&apos;S WORK TOGETHER TO CREATE SOMETHING EXTRAORDINARY.
          </p>
        </div>

        <button
          className="bg-primary px-8 py-3 font-mono text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="Contact Now"
        >
          CONTACT NOW
        </button>
      </div>
    </section>
  )
}
