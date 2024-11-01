'use client'

import { motion } from 'framer-motion'

import { EducationItem } from '@/components/about/education-item'
import { ProfileImage } from '@/components/about/profile-image'
import { ShowcaseImage } from '@/components/about/showcase-image'
import { StatItem } from '@/components/about/stat-item'
import { TechStackItem } from '@/components/about/tech-stack-item'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import {
  EDUCATION_DATA,
  SHOWCASE_IMAGE_DATA,
  TECH_STACK_DATA
} from '@/contrants/about'

export default function AboutPage() {
  const handleLearnMore = (): void => {
    const experienceSection = document.getElementById('experience')
    experienceSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-background font-mono text-foreground">
      <Header
        variant="default"
        size="lg"
        logo={false}
        showBackButton
        showSearch
        showMenu
      />
      <main className="container relative mx-auto space-y-24 pt-32">
        <section className="relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center space-y-12 text-center"
          >
            <h1 className="text-5xl font-bold uppercase tracking-tight md:text-8xl">
              <span className="mb-2 block transition-colors hover:text-primary">
                MORE ABOUT
              </span>
              <span className="block transition-colors hover:text-primary">
                NOPPAKORN
              </span>
            </h1>
            <p className="max-w-2xl text-center font-mono text-lg text-muted-foreground">
              UNLEASH YOUR CREATIVITY. SHOWCASE YOU WORK AND HIGHLIGHT YOUR
              UNIQUE SKILLS TO ATTRACT NEW CLIENTS.
            </p>
            <button
              onClick={handleLearnMore}
              className="group flex items-center gap-2 border border-border bg-card px-6 py-2 transition-colors hover:border-primary/50"
            >
              <span className="text-lg uppercase">LEARN DETAILED</span>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                *
              </span>
            </button>
          </motion.div>
        </section>
        <ProfileImage />
        <section
          id="experience"
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <StatItem number="3+" label="YEARS OF EXPERIENCE" />
          <StatItem number="100+" label="REPOSITY PROJECTS" />
          <StatItem number="4000+" label="COMMIT CONTRIBUTIONS" />
          <StatItem number="2 HOUR" label="SPENT TIME A DAY" />
        </section>
        <section className="space-y-12">
          <h2 className="text-2xl font-bold">ABOUT PUNGRUMPY</h2>
          <p className="text-muted-foreground">
            I&apos;M A DEDICATED COMPUTER SCIENCE STUDENT AT KING MONGKUT&apos;S
            INSTITUTE OF TECHNOLOGY LADKRABANG, SPECIALIZING IN SOFTWARE
            DEVELOPMENT AND DEVOPS. MY PASSION LIES IN CREATING INNOVATIVE
            SOLUTIONS AND OPTIMIZING DEVELOPMENT PROCESSES.
          </p>
          <div>
            <h3 className="mb-4 text-xl font-bold">MY APPROACH & STRATEGY</h3>
            <p className="text-muted-foreground">
              AS A COMPUTER SCIENCE STUDENT ASPIRING TO BECOME A DEVOPS
              ENGINEER, YOU GET TO BLEND CODING, AUTOMATION, AND SYSTEM
              MANAGEMENT TO CREATE SEAMLESS AND EFFICIENT WORKFLOWS THAT ENHANCE
              SOFTWARE DELIVERY. EVERY DAY IS DIFFERENT - ONE DAY YOU MAY BE
              SCRIPTING AUTOMATED DEPLOYMENTS, AND THE NEXT, OPTIMIZING CI/CD
              PIPELINES FOR FASTER RELEASES.
            </p>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SHOWCASE_IMAGE_DATA.map((item, index) => (
            <ShowcaseImage key={index} {...item} />
          ))}
        </div>
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">EDUCATION</h2>
          <div className="space-y-4">
            {EDUCATION_DATA.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="space-y-8 pb-24">
          <h2 className="text-2xl font-bold">ALL MY STACK</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TECH_STACK_DATA.map((item, index) => (
              <TechStackItem key={index} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer variant="transparent" showScrollButton />
    </div>
  )
}
