import localFont from 'next/font/local'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import PageTransition from '@/app/components/PageTransition'
import { I18nProvider } from '@/app/i18n-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const radnika = localFont({
  src: [
    { path: '../public/fonts/Radnika-Medium.otf.otf', weight: '500', style: 'normal' },
  ],
  variable: '--font-radnika',
})

const garet = localFont({
  src: [
    { path: '../public/fonts/Garet-Heavy.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-garet',
})

const aileron = localFont({
  src: [
    { path: '../public/fonts/Aileron-Regular.otf.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Aileron-SemiBold.otf.otf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Aileron-Bold.otf.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-aileron',
})

export const metadata = {
  metadataBase: new URL('https://www.bsmartish.com'),
  title: 'BSMARTISH',
  description: 'Urban renovations — high-end properties in Porto.',
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title: 'BSMARTISH Urban Renovation',
    description: 'Urban renovations — high-end properties in Porto.',
    url: '/',
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: 'BSMARTISH — urban renovation in Porto' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSMARTISH Urban Renovation',
    description: 'Urban renovations — high-end properties in Porto.',
    images: ['/og/default.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={`${radnika.variable} ${garet.variable} ${aileron.variable}`}
    >
      <body>
        <I18nProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
