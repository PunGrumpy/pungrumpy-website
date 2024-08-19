import { fetchProfile } from '@/app/(app)/actions'
import { ContentSection } from '@/components/about/content-section'
import { ProfileSection } from '@/components/about/profile-section'
import { SlideInView } from '@/components/animation/slide-in-view'

export default async function AboutPage() {
  const profile = await fetchProfile()

  return (
    <main className="z-10 mx-auto max-w-6xl px-4 py-8 sm:py-16">
      {profile && (
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <SlideInView
            delay={0.1}
            className="order-2 w-full sm:order-1 sm:w-1/2"
          >
            <ContentSection profile={profile} />
          </SlideInView>
          <SlideInView
            delay={0.16}
            className="order-1 w-full sm:order-2 sm:w-1/2"
          >
            <ProfileSection profile={profile} />
          </SlideInView>
        </div>
      )}
    </main>
  )
}
