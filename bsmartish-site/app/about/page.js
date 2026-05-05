export const metadata = {
  title: 'About Us - BSMARTISH',
  description: 'Since 2006, we develop independent and partnered urban renovation projects and renting apartments. Nowadays, we focus our activity on Porto. Learn more about our philosophy.',
}

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
      <section aria-hidden="true" className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Website.images/About us/separator.webp"
          alt=""
          className="w-full h-auto block"
        />
      </section>

      <AboutMissionVision />
      <AboutValues />
      <AboutDistinction />
      <AboutFAQ />
    </main>
  )
}
