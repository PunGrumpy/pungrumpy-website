import {
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  UsersIcon
} from 'lucide-react'

export type Work = {
  slug: string
  imageUrl: string
  iconType: JSX.Element
  projectType: string
  title: string
  description: string
  technologies?: string[]
  roles?: string[]
  links?: {
    github?: string
    website?: string
  }
}

export const Works: Work[] = [
  {
    slug: 'paperclip',
    imageUrl: '/works/paperclip.png',
    iconType: <GraduationCapIcon className="size-4" />,
    projectType: 'University Project',
    title: 'Paperclip',
    description:
      'An online platform for learning UX/UI design and coding, developed as part of the Human-Computer Interaction course at the university.',
    technologies: ['Figma'],
    roles: ['Creator', 'Frontend Developer', 'UI/UX Designer'],
    links: {
      website:
        'https://www.figma.com/design/GJKlQNTn0wqRmOiMQjutBe/Paperclip-(UI)?t=qsZtHbpshKEyb849-1/'
    }
  },
  {
    slug: 'pongsathorn-portfolio',
    imageUrl: '/works/pongsathorn-portfolio.png',
    iconType: <BriefcaseBusinessIcon className="size-4" />,
    projectType: 'Client Project',
    title: "Pongsathorn's Portfolio",
    description:
      'A personal portfolio website that showcases works, skills, and experiences. It is built with Next.js, Tailwind CSS, and TypeScript.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'shadcn/ui',
      'Framer Motion'
    ],
    roles: ['Creator', 'Frontend Developer', 'UI/UX Designer'],
    links: {
      website: 'https://pongsathorn-portfolio.netlify.app/'
    }
  },
  {
    slug: 'logixlysia',
    imageUrl: '/works/logixlysia.png',
    iconType: <UsersIcon className="size-4" />,
    projectType: 'Community Project',
    title: 'Logixlysia',
    description:
      'A plugin for Elysia.js that provides a beautiful and simple logging middleware with a customizable design and features.',
    technologies: ['TypeScript', 'Elysia.js', 'Bun'],
    roles: ['Creator', 'Maintainer'],
    links: {
      github: 'https://github.com/PunGrumps/logixlysia/',
      website: 'https://www.npmjs.com/package/logixlysia/'
    }
  }
]
