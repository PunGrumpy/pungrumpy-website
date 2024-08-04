import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Work, Works } from '@/config/works'

function getWorkBySlug(slug: string): Work | undefined {
  return Works.find(work => work.slug === slug)
}

export default function WorkDetailPage({
  params
}: {
  params: { slug: string }
}) {
  const work = getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  return (
    <div className="container z-10 mx-auto max-w-6xl px-4 py-8">
      <Image
        src={work.imageUrl}
        alt={work.title}
        width={800}
        height={400}
        className="rounded-lg object-cover"
      />
      <h1 className="mt-4 text-3xl font-bold">{work.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{work.projectType}</p>
      <p className="mt-4">{work.description}</p>
    </div>
  )
}
