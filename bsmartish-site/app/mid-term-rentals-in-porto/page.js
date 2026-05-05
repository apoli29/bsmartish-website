export const metadata = {
  title: 'Mid-Term Rentals in Porto - BSMARTISH Properties',
  description: 'The best modern, fully furnished apartments for mid-term rental in Porto. Stays from 1 to 12 months. Ideal for professionals and digital nomads.',
}

import PortfolioHero from '@/app/components/PortfolioHero'
import PortfolioList from '@/app/components/PortfolioList'

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioList />
    </main>
  )
}
