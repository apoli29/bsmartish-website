const title = 'BSMARTISH Urban Renovation - Mid-Term Rentals Porto'
const description = 'Real estate company with 20 years of expertise focused on mid-term, fully furnished apartments in Porto and urban renovation projects.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/',
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: 'BSMARTISH — urban renovation in Porto' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/default.jpg'] },
}

import HeroSection from '@/app/components/HeroSection'
import CarouselSection from '@/app/components/CarouselSection'
import ImpactWidget from '@/app/components/ImpactWidget'
import FeaturedProperties from '@/app/components/FeaturedProperties'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <ImpactWidget />
      <FeaturedProperties />
    </main>
  )
}
