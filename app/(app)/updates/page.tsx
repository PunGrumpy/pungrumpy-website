import { UpdateItem } from '@/components/update-item'

const updates = [
  {
    date: 'Aug 2, 2024',
    title: 'Behind the Scenes: Crafting Our Digital Identity',
    description: `Ever wondered what goes into building a website from scratch? In this update, we take you behind the curtain of our design process. From brainstorming sessions to late-night coding sprints, discover the passion and creativity that shaped every pixel of our digital presence. Get ready for an insider's look at our journey!`,
    href: '/updates/design-journey',
    image: '/updates/update-1.png'
  }
]

export default function UpdatesPage() {
  return (
    <>
      {updates
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((update, index) => (
          <UpdateItem
            key={index}
            date={update.date}
            title={update.title}
            description={update.description}
            href={update.href}
            imageSrc={update.image}
          />
        ))}
    </>
  )
}
