import LegalNoticeDoc from './LegalNoticeDoc'

const title = 'Legal Notice - BSMARTISH'
const description =
  'Company identification, registration details, licences and consumer complaint channels for BSMARTISH.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/legal-notice' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/legal-notice',
  },
}

export default function LegalNoticePage() {
  return <LegalNoticeDoc />
}
