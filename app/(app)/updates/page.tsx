import { UpdateSection } from '@/components/section/update-section'

const updates = [
  {
    date: 'Aug 4, 2024',
    title: 'First Look: Our Website Takes Shape',
    description: `Exciting news! Today marks the official start of our website development. We're thrilled to share a first look at what we've been working on. Join us as we unveil the initial designs and discuss our vision for the future.`,
    content: `We're thrilled to kick off our website development today!

    Our team reviewed the first designs in Figma, showcasing a clean, modern, and user-friendly site. Key features include:
    - Sleek, minimalist homepage
    - Intuitive navigation
    - Responsive design for all devices

    We're now transitioning from design to development. Stay tuned as we bring these Figma concepts to life!`,
    image: '/updates/update-2.png'
  },
  {
    date: 'Aug 2, 2024',
    title: 'Behind the Scenes: Crafting Our Digital Identity',
    description: `Ever wondered what goes into building a website from scratch? In this update, we take you behind the curtain of our design process. From brainstorming sessions to late-night design sprints, discover the passion and creativity that will shape every pixel of our digital presence.`,
    content: `Our website creation journey begins in Figma, where we're bringing our ideas to life.

    We're using Figma to design layouts, choose colors, and refine typography. Its collaborative features allow our team to work together seamlessly.

    We're prioritizing user experience from the start, planning to test our Figma prototypes before moving to development.

    This is just the beginning of our digital adventure. We're excited to share more updates as we progress!`,
    image: '/updates/update-1.png'
  }
]

export default function UpdatesPage() {
  return (
    <div className="z-10 space-y-8">
      {updates
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((update, index) => (
          <UpdateSection
            key={index}
            date={update.date}
            title={update.title}
            description={update.description}
            content={update.content}
            imageSrc={update.image}
          />
        ))}
    </div>
  )
}
