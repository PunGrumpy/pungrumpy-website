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
  summary: string
  technologies?: string[]
  maintained?: boolean
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
    summary: `Paperclip is an innovative online learning platform designed to teach UX/UI design and coding skills. Developed as a part of the Human-Computer Interaction course, this project aims to provide an interactive and engaging environment for students to learn essential digital skills. The platform features intuitive lessons, practical exercises, and real-world projects to help users gain hands-on experience in both design and coding aspects of digital product development.`,
    technologies: ['Figma'],
    maintained: true,
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
    summary: `Pongsathorn's Portfolio is a modern, responsive personal website designed to showcase the client's professional works, skills, and experiences. Utilizing cutting-edge web technologies such as Next.js, Tailwind CSS, and TypeScript, this portfolio site offers a seamless user experience with fast load times and smooth transitions. The design focuses on presenting information in a clear, engaging manner, allowing visitors to easily navigate through projects, skills, and contact information. This project demonstrates the ability to create a polished, professional web presence that effectively highlights an individual's achievements and capabilities.`,
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'shadcn/ui',
      'Framer Motion'
    ],
    maintained: true,
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
    summary: `Logixlysia is an advanced logging middleware plugin developed for the Elysia.js framework. This open-source project aims to enhance the development experience by providing developers with a powerful, yet easy-to-use logging solution. Featuring a customizable design and a rich set of features, Logixlysia allows developers to effortlessly track and analyze application behavior, debug issues, and monitor performance. The plugin's beautiful log output and flexible configuration options make it an essential tool for both small-scale projects and large enterprise applications built with Elysia.js.`,
    technologies: ['TypeScript', 'Elysia.js', 'Bun'],
    maintained: true,
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
    summary: `KMITL Wizard is a innovative Chrome extension designed to enhance the user experience for students at King Mongkut's Institute of Technology Ladkrabang (KMITL). This community-driven project transforms the institute's standard schedule table into a visually appealing and interactive interface. By incorporating modern design principles and introducing features like dark mode, the extension significantly improves readability and usability. KMITL Wizard not only makes schedule management more efficient but also demonstrates the power of community-led initiatives in improving digital tools for educational institutions.`,
    technologies: ['TypeScript', 'Svelte', 'Tailwind CSS', 'Vite'],
    maintained: true,
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
    summary: `OG Tester is a comprehensive web application designed to simplify the process of debugging and previewing metadata for websites. This tool is particularly useful for developers and content creators who want to ensure their websites look great when shared on social media platforms. OG Tester allows users to input a URL and instantly see how it will appear on various social media sites, including previews for Open Graph tags and Twitter Cards. With its user-friendly interface and real-time preview capabilities, OG Tester streamlines the often tedious process of optimizing website metadata, helping to improve social media engagement and click-through rates.`,
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'shadcn/ui',
      'Framer Motion',
      'Cheerio'
    ],
    maintained: true,
    links: {
      github: 'https://github.com/PunGrumpy/og-tester/',
      website: 'https://og.pungrumpy.com/'
    }
  },
  {
    slug: '42-rush-project',
    imageUrl: '/works/42-rush-project.png',
    iconType: <GraduationCapIcon className="size-4" />,
    projectType: 'University Project',
    title: '42 Rush Project',
    description:
      'A simple website that describes members, projects, and activities of the 42 Bangkok Rush team. Built using HTML, CSS, and JavaScript.',
    summary: `The 42 Rush Project is a collaborative effort by students of 42 Bangkok, showcasing the innovative and intensive learning environment of the 42 coding school. This website serves as a comprehensive platform to highlight the achievements, projects, and activities of the 42 Bangkok Rush team. Built using fundamental web technologies, the site demonstrates the team's ability to create functional and aesthetically pleasing web solutions within a short timeframe, reflecting the 'rush' nature of the project. Visitors can explore team member profiles, view ongoing and completed projects, and get a glimpse into the unique learning methodology employed at 42 Bangkok.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    maintained: false,
    links: {
      website: 'https://42-rush-project.vercel.app/'
    }
  }
]
