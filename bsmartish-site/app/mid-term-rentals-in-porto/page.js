const title = 'Mid-Term Rentals in Porto - BSMARTISH Properties'
const description = 'Modern, fully furnished apartments for mid-term rental in Porto. Stays from 1 to 12 months. Ideal for professionals and digital nomads.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/mid-term-rentals-in-porto' },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/mid-term-rentals-in-porto',
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: 'BSMARTISH — mid-term rentals in Porto' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/default.jpg'] },
}

import PortfolioHero from '@/app/components/PortfolioHero'
import PortfolioList from '@/app/components/PortfolioList'
import JsonLd from '@/app/components/JsonLd'
import { graph, portfolioSchema } from '@/app/lib/schema'

export default function PortfolioPage() {
  return (
    <main>
      <JsonLd data={graph(portfolioSchema())} />
      <PortfolioHero />
      <PortfolioList />
    </main>
  )
}
