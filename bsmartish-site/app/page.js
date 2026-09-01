export const metadata = {
  title: 'BSMARTISH Urban Renovation - Mid-Term Rentals Porto',
  description: 'Real estate company with 20 years of expertise focused on mid-term, fully furnished apartments in Porto and urban renovation projects.',
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
