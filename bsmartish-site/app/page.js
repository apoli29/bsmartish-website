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
