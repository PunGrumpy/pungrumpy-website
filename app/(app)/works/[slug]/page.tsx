import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Work {
  slug: string
  imageUrl: string
  projectType: string
  title: string
  description: string
}

function getWorkBySlug(slug: string): Work | undefined {
  const works: Work[] = [
    {
      slug: 'paperclip',
      imageUrl: '/works/paperclip.png',
      projectType: 'University Project',
      title: 'Paperclip',
      description:
        'An online platform for learning UX/UI design and coding, developed as part of the Human-Computer Interaction course at the university.'
    },
    {
      slug: 'pongsathorn-portfolio',
      imageUrl: '/works/pongsathorn-portfolio.png',
      projectType: 'Personal Work',
      title: "Pongsathorn's Portfolio",
      description:
        'A personal portfolio website that showcases works, skills, and experiences. It is built with Next.js, Tailwind CSS, and TypeScript.'
    }
  ]

  return works.find(work => work.slug === slug)
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
