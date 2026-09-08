import localFont from 'next/font/local'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import PageTransition from '@/app/components/PageTransition'
import { I18nProvider } from '@/app/i18n-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import JsonLd from '@/app/components/JsonLd'
import { graph, organizationSchema, webSiteSchema } from '@/app/lib/schema'

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', sizes: '900x900', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
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
      lang="en"
      suppressHydrationWarning
      className={`${garet.variable} ${aileron.variable}`}
    >
      <head>
        {/* Hanken Grotesk is declared by hand in globals.css (two unicode-range
            subsets), so it does not get next/font's automatic preloading.
            Preloading the latin subset keeps headings from flashing in the
            fallback face on first paint. */}
        <link
          rel="preload"
          href="/fonts/HankenGrotesk-Medium-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* WCAG 2.4.1 — lets keyboard users skip the fixed header and nav. */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={graph(organizationSchema(), webSiteSchema())} />
        <I18nProvider>
          <Header />
          <div id="main-content" tabIndex={-1}>
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
