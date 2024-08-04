import { UpdateItem } from '@/components/update-item'

const updates = [
  {
    date: 'Aug 2, 2024',
    title: 'Behind the Scenes: Crafting Our Digital Identity',
    description: `Ever wondered what goes into building a website from scratch? In this update, we take you behind the curtain of our design process. From brainstorming sessions to late-night coding sprints, discover the passion and creativity that shaped every pixel of our digital presence. Get ready for an insider's look at our journey!`,
    content: `Our journey to create this website was exciting and challenging.

    We started with research on web design trends. Our team then sketched layouts, chose colors, and refined typography.

    Developers worked hard to make the site fast and responsive. We faced and overcame many technical challenges.

    User experience was our top priority. We conducted tests to ensure the site is intuitive and enjoyable.

    The result? A website we're proud of. It reflects our values and showcases our work beautifully.

    This is just the beginning. We'll keep improving and evolving our online presence.

    Thanks for joining us on this digital adventure!`,
    image: '/updates/update-1.png'
  }
]

export default function UpdatesPage() {
  return (
    <div className="z-10 space-y-8">
      {updates
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((update, index) => (
          <UpdateItem
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
