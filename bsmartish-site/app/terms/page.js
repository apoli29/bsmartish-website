import TermsDoc from './TermsDoc'

const title = 'Terms & Conditions - BSMARTISH'
const description =
  'The terms on which BSMARTISH provides this website, what the property information means, and how bookings, deposits and cancellations work.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/terms',
  },
}

export default function TermsPage() {
  return <TermsDoc />
}
