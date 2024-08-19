import { IconName } from '@/components/icons'

export const getSocialIcon = (socialName: string): IconName => {
  const iconMap: Record<string, IconName> = {
    github: 'LogoGithub',
    linkedin: 'LogoLinkedin',
    instagram: 'LogoInstagram',
    discord: 'LogoDiscord',
    google: 'LogoGoogle'
  }

  return iconMap[socialName.toLowerCase()] || 'LogoLinkedin'
}
