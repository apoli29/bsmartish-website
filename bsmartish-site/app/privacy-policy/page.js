import PrivacyDoc from './PrivacyDoc'

const title = 'Privacy Policy - BSMARTISH'
const description =
  'How BSMARTISH collects, uses and protects personal data on bsmartish.com, and the rights you have under the GDPR.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyDoc />
}
