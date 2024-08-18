import { fetchProfile } from '@/app/(app)/actions'
import { ContentSection } from '@/components/about/content-section'
import { ProfileSection } from '@/components/about/profile-section'
import { SlideInView } from '@/components/animation/slide-in-view'

export default async function AboutPage() {
  const profile = await fetchProfile()

  return (
    <main className="z-10 mx-auto max-w-6xl py-16">
      {profile && (
        <div className="relative">
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContentSection profile={profile} />
            <SlideInView
              delay={0.16}
              className="flex flex-col items-center justify-start lg:items-start"
            >
              <ProfileSection profile={profile} />
            </SlideInView>
          </div>
        </div>
      )}
    </main>
  )
}
