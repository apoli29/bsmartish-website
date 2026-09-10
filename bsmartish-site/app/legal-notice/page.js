import LegalNoticeDoc from './LegalNoticeDoc'

const title = 'Informação Legal - BSMARTISH'
const description =
  'Titular e responsável pelos websites bsmartish.pt e bsmartish.com, contactos, objeto, propriedade intelectual e lei aplicável.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/legal-notice' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'pt_PT',
    title,
    description,
    url: '/legal-notice',
  },
}

export default function LegalNoticePage() {
  return <LegalNoticeDoc />
}
