import { Work } from '@/types/work'

export const WORKS_DATA: Work[] = [
  {
    id: 'kmitl-wizard',
    title: 'KMITL WIZARD',
    type: 'OPEN SOURCE',
    description:
      "KMITL WIZARD IS AN INNOVATIVE CHROME EXTENSION DESIGNED TO TRANSFORM THE STANDARD CLASS SCHEDULE OF KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG (KMITL) INTO A VISUALLY APPEALING AND USER-FRIENDLY INTERFACE.",
    image: 'https://placehold.co/800x600/png',
    technologies: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite'],
    client: 'KMITL STUDENT COUNCIL',
    year: 2023,
    category: 'OPEN SOURCE',
    link: 'https://github.com/PunGrumpy/kmitl-wizard'
  },
  {
    id: 'og-tester',
    title: 'OG TESTER',
    type: 'OPEN SOURCE',
    description:
      'OG TESTER IS A PERSONAL WEBSITE PROJECT DEVELOPED TO PROVIDE A USER-FRIENDLY TOOL FOR TESTING AND VALIDATING OPEN GRAPH AND TWITTER CARD METADATA FOR WEBSITES.',
    image: 'https://placehold.co/800x600/png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    client: 'EVERYONE',
    year: 2024,
    category: 'OPEN SOURCE',
    link: 'https://og.pungrumpy.com'
  },
  {
    id: 'logixlysia',
    title: 'LOGIXLYSIA',
    type: 'OPEN SOURCE',
    description:
      'LOGIXLYSIA IS AN INNOVATIVE, OPEN-SOURCE LOGGING PLUGIN DESIGNED SPECIFICALLY FOR ELYSIA.JS FRAMEWORK.',
    image: 'https://placehold.co/800x600/png',
    technologies: ['Elysia.js', 'TypeScript', 'Bun'],
    client: 'EVERYONE',
    year: 2023,
    category: 'OPEN SOURCE',
    link: 'https://github.com/PunGrumpy/logixlysia'
  },
  {
    id: 'paperclip',
    title: 'PAPERCLIP',
    type: 'MOBILE DESIGN',
    description:
      'PAPERCLIP IS AN INNOVATIVE MOBILE APPLICATION DESIGNED AS PART OF A HUMAN-COMPUTER INTERACTION COURSE PROJECT.',
    image: 'https://placehold.co/800x600/png',
    technologies: ['Figma'],
    client: 'EVERYONE',
    year: 2024,
    category: 'MOBILE DESIGN',
    link: 'https://www.figma.com/design/GJKlQNTn0wqRmOiMQjutBe/Paperclip-(UI)?t=qsZtHbpshKEyb849-1/'
  }
] as const
