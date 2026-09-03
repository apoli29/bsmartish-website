const title = 'About Us - BSMARTISH'
const description = 'Since 2006, we develop independent and partnered urban renovation projects and renting apartments. Nowadays, we focus our activity on Porto. Learn more about our philosophy.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/about',
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: 'BSMARTISH — urban renovation in Porto' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/default.jpg'] },
}

import Image from 'next/image'
import AboutHero from '@/app/components/AboutHero'
import AboutTrajectory from '@/app/components/AboutTrajectory'
import AboutWhatWeDo from '@/app/components/AboutWhatWeDo'
import AboutMissionVision from '@/app/components/AboutMissionVision'
import AboutValues from '@/app/components/AboutValues'
import AboutDistinction from '@/app/components/AboutDistinction'
import AboutFAQ from '@/app/components/AboutFAQ'
import JsonLd from '@/app/components/JsonLd'
import { graph, aboutPageSchema, faqSchema } from '@/app/lib/schema'

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={graph(aboutPageSchema(), faqSchema())} />
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
