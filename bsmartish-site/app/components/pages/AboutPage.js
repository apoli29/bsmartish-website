import AboutHero from '@/app/components/AboutHero'
import AboutTrajectory from '@/app/components/AboutTrajectory'
import AboutWhatWeDo from '@/app/components/AboutWhatWeDo'
import AboutMissionVision from '@/app/components/AboutMissionVision'
import AboutValues from '@/app/components/AboutValues'
import AboutDistinction from '@/app/components/AboutDistinction'
import AboutFAQ from '@/app/components/AboutFAQ'
import JsonLd from '@/app/components/JsonLd'
import { graph, aboutPageSchema, faqSchema } from '@/app/lib/schema'

// Served at /about (EN) and /pt/sobre-nos (PT).
export default function AboutPage({ locale }) {
  return (
    <main>
      <JsonLd data={graph(aboutPageSchema(locale), faqSchema(locale))} />
      <AboutHero />
      <AboutTrajectory />
      <AboutWhatWeDo />

      {/* Full-bleed separator between sec 3 (What We Do) and sec 4 (Mission & Vision) */}
      <section aria-hidden="true" className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/website.images/about-us/separator.webp"
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
