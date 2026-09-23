import PortfolioHero from '@/app/components/PortfolioHero'
import PortfolioList from '@/app/components/PortfolioList'
import JsonLd from '@/app/components/JsonLd'
import { graph, portfolioSchema } from '@/app/lib/schema'

// Served at /mid-term-rentals-in-porto (EN) and
// /pt/arrendamento-media-duracao-porto (PT).
export default function RentalsPage({ locale }) {
  return (
    <main>
      <JsonLd data={graph(portfolioSchema(locale))} />
      <PortfolioHero />
      <PortfolioList />
    </main>
  )
}
