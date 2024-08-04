export type Update = {
  date: string
  title: string
  description: string
  image: string
}

export const Updates: Update[] = [
  {
    date: 'Aug 2, 2024',
    title: 'Behind the Scenes: Crafting Our Digital Identity',
    description: `Ever wondered what goes into building a website from scratch? In this update, we take you behind the curtain of our design process. From brainstorming sessions to late-night design sprints, discover the passion and creativity that will shape every pixel of our digital presence.`,
    image: '/updates/update-1.png'
  },
  {
    date: 'Aug 4, 2024',
    title: 'First Look: Our Website Takes Shape',
    description: `Exciting news! Today marks the official start of our website development. We're thrilled to share a first look at what we've been working on. Join us as we unveil the initial designs and discuss our vision for the future.`,
    image: '/updates/update-2.png'
  }
]
