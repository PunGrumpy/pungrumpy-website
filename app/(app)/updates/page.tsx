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
        <UpdateSection
          key={index}
          index={index}
          date={update.date}
          title={update.title}
          description={update.description}
          imageSrc={update.image}
        />
      ))}
    </main>
  )
}
