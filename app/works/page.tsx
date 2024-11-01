'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { NoiseOverlay } from '@/components/ui/noise-overlay'
import { WORKS_DATA } from '@/contrants/works'
import { Work } from '@/types/work'

const ProjectCard = ({ work }: { work: Work }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/works/${work.id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden bg-card"
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label={`View ${work.title} project details`}
    >
      <div className="relative aspect-video">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover opacity-70 transition-opacity group-hover:opacity-100"
        />
        <NoiseOverlay />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">{work.title}</h2>
          <span className="font-mono text-sm text-muted-foreground">
            {`///${work.type}`}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Header
        variant="default"
        size="lg"
        logo={false}
        showBackButton
        showSearch
        showMenu
      />

      <main className="container mx-auto pb-24 pt-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 space-y-4"
        >
          <div className="flex justify-end">
            <span className="text-sm text-muted-foreground">(2021 - 2024)</span>
          </div>
          <h1 className="text-6xl font-bold md:text-8xl">
            <span className="block transition-colors hover:text-primary">
              SELECTED
            </span>
            <span className="block transition-colors hover:text-primary">
              WORKS
            </span>
          </h1>
          <p className="max-w-xl text-muted-foreground">
            MY CREATIVE SPIRIT COMES ALIVE IN THE DIGITAL REALM. WITH NIMBLE
            FINGERS FLYING ACROSS THE KEYBOARD, I CRAFT CLEAR EXPERIENCES OUT OF
            NOTHING BUT ONES AND ZEROES.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {WORKS_DATA.map(work => (
            <ProjectCard key={work.id} work={work} />
          ))}
        </div>
      </main>

      <Footer variant="transparent" showScrollButton>
        <span className="text-sm text-muted-foreground">© 2024 PUNGRUMPY</span>
      </Footer>
    </div>
  )
}
