import HeroSection from '@/app/components/HeroSection'
import CarouselSection from '@/app/components/CarouselSection'
import ImpactWidget from '@/app/components/ImpactWidget'
import FeaturedProperties from '@/app/components/FeaturedProperties'

// Served at / (EN) and /pt (PT). The language comes from the URL, via the
// I18nProvider, so the sections need no props.
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <ImpactWidget />
      <FeaturedProperties />
    </main>
  )
}
