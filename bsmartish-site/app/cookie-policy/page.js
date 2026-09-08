import CookieDoc from './CookieDoc'

const title = 'Cookie Policy - BSMARTISH'
const description =
  'What bsmartish.com stores on your device: your language choice, one security cookie, and third-party maps that only load if you ask for them.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return <CookieDoc />
}
