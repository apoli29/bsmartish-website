import PrivacyDoc from './PrivacyDoc'

const title = 'Política de Privacidade - BSMARTISH'
const description =
  'Como a Neptunevictory Lda trata dados pessoais através de bsmartish.pt e bsmartish.com: finalidades, fundamentos jurídicos, destinatários, conservação e direitos dos titulares.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'pt_PT',
    title,
    description,
    url: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyDoc />
}
