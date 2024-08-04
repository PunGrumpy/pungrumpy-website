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
    roles: ['Creator', 'Frontend Developer', 'UI/UX Designer', 'Maintainer'],
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
  },
  {
    slug: 'kmitl-wizard',
    imageUrl: '/works/kmitl-wizard.png',
    iconType: <UsersIcon className="size-4" />,
    projectType: 'Community Project',
    title: 'KMITL Wizard',
    description:
      "A Chrome extension that transforms KMITL's schedule table into a more beautiful and interactive design with a dark mode.",
    technologies: ['TypeScript', 'Svelte', 'Tailwind CSS', 'Vite'],
    roles: ['Creator', 'Frontend Developer', 'Maintainer'],
    links: {
      github: 'https://github.com/PunGrumpy/kmitl-wizard/'
    }
  },
  {
    slug: 'og-tester',
    imageUrl: '/works/og-tester.png',
    iconType: <UsersIcon className="size-4" />,
    projectType: 'Community Project',
    title: 'OG Tester',
    description:
      'A tool to help you debug and preview your metadata (Open Graph, Twitter Card, etc.) before sharing your website on social media.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'shadcn/ui',
      'Framer Motion',
      'Cheerio'
    ],
    roles: ['Creator', 'Fullstack Developer', 'Maintainer'],
    links: {
      github: 'https://github.com/PunGrumpy/og-tester/',
      website: 'https://og-tester.pungrumpy.com/'
    }
  },
  {
    slug: '42-rush-project',
    imageUrl: '/works/42-rush-project.png',
    iconType: <GraduationCapIcon className="size-4" />,
    projectType: 'University Project',
    title: '42 Rush Project',
    description:
      'A simple website that describes members, projects, and activities of the 42 Bangkok Rush team.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    roles: ['Frontend Developer', 'Maintainer'],
    links: {
      website: 'https://42-rush-project.vercel.app/'
    }
  }
]
