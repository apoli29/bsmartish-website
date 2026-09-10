import CookieDoc from './CookieDoc'

const title = 'Política de Cookies - BSMARTISH'
const description =
  'Cookies e tecnologias semelhantes em bsmartish.pt e bsmartish.com: inventário, categorias, consentimento e como alterar as suas escolhas.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'pt_PT',
    title,
    description,
    url: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return <CookieDoc />
}
