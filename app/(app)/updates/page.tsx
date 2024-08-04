'use client'

import { motion } from 'framer-motion'

import { UpdateSection } from '@/components/section/update-section'

const updates = [
  {
    date: 'Aug 4, 2024',
    title: 'First Look: Our Website Takes Shape',
    description: `Exciting news! Today marks the official start of our website development. We're thrilled to share a first look at what we've been working on. Join us as we unveil the initial designs and discuss our vision for the future.`,
    image: '/updates/update-2.png'
  },
  {
    date: 'Aug 2, 2024',
    title: 'Behind the Scenes: Crafting Our Digital Identity',
    description: `Ever wondered what goes into building a website from scratch? In this update, we take you behind the curtain of our design process. From brainstorming sessions to late-night design sprints, discover the passion and creativity that will shape every pixel of our digital presence.`,

    image: '/updates/update-1.png'
  }
]

export default function UpdatesPage() {
  return (
    <div className="z-10 space-y-8">
      {updates
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((update, index) => (
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
    </div>
  )
}
