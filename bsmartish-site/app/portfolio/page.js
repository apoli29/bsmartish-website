import PortfolioHero from '@/app/components/PortfolioHero'
import PortfolioList from '@/app/components/PortfolioList'

export default function PortfolioPage() {
  return (
    <main className="pt-24 md:pt-28 lg:pt-32">
      <PortfolioHero />
      <PortfolioList />
    </main>
  )
}
