'use client'

import { motion } from 'framer-motion'
import { Metadata } from 'next'

import { UpdateSection } from '@/components/section/update-section'
import { Updates } from '@/config/updates'

export const metadata: Metadata = {
  title: 'Updates',
  description: 'A describe changelong of my personal website.'
}

export default function UpdatesPage() {
  return (
    <main className="space-y-8">
      {Updates.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ).map((update, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5, delay: index * 0.25 }}
        >
          <UpdateSection
            key={index}
            date={update.date}
            title={update.title}
            description={update.description}
            imageSrc={update.image}
          />
        </motion.div>
      ))}
    </main>
  )
}
