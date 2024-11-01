import { AnimatedImage } from '@/components/ui/animated-image'
import { AvailabilityStatus } from '@/components/ui/availability-status'

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center pt-32">
      <div className="relative z-10 mx-auto w-full">
        <div className="flex flex-col items-center">
          <div className="relative z-30 mb-12">
            <AvailabilityStatus />
          </div>
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-foreground md:text-8xl">
              <span className="mb-2 block transition-colors hover:text-primary">
                NOPPAKORN
              </span>
              <span className="block transition-colors hover:text-primary">
                KAEWSALABNIL
              </span>
            </h1>
          </div>
          <div className="relative mb-8 flex w-full justify-between">
            <div className="hidden text-xs text-muted-foreground md:block">
              {'//DIGITAL WEB + DEVOPS'}
            </div>
            <div className="hidden text-xs text-muted-foreground md:block">
              {'//SCROLL TO EXPLORE'}
            </div>
            <div className="flex w-full justify-between text-xs text-muted-foreground md:hidden">
              <span>{'//DIGITAL WEB + DEVOPS'}</span>
              <span>{'//SCROLL TO EXPLORE'}</span>
            </div>
          </div>
          <AnimatedImage
            src="https://placehold.co/1920x1080/png"
            alt="Profile"
            priority
          />
        </div>
      </div>
    </section>
  )
}
