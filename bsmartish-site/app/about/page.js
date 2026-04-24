import Image from 'next/image'
import AboutHero from '@/app/components/AboutHero'
import AboutTrajectory from '@/app/components/AboutTrajectory'
import AboutWhatWeDo from '@/app/components/AboutWhatWeDo'
import AboutMissionVision from '@/app/components/AboutMissionVision'
import AboutValues from '@/app/components/AboutValues'
import AboutDistinction from '@/app/components/AboutDistinction'
import AboutFAQ from '@/app/components/AboutFAQ'

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutTrajectory />
      <AboutWhatWeDo />

      {/* Full-bleed separator between sec 3 (What We Do) and sec 4 (Mission & Vision) */}
      <section
        aria-hidden="true"
        className="relative w-full"
        style={{ height: 'clamp(320px, 48vh, 520px)' }}
      >
        <Image
          src="/images/Website.images/About us/sec3-sec4.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={92}
        />
      </section>

      <AboutMissionVision />
      <AboutValues />
      <AboutDistinction />
      <AboutFAQ />
    </main>
  )
}
