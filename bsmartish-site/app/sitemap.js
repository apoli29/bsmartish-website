import { LEGAL_PAGES } from '@/app/lib/legalRoutes'
import { PAGES, propertyHref } from '@/app/lib/routes'
import { properties } from '@/app/lib/propertiesData'

const BASE_URL = 'https://www.bsmartish.com'

// Each EN/PT pair is listed twice (one entry per language), and each entry
// names both versions under `alternates` — the sitemap form of hreflang.
function pair({ en, pt }, { changeFrequency, priority }) {
  const languages = { en: `${BASE_URL}${en}`, pt: `${BASE_URL}${pt}` }
  return [en, pt].map((path) => ({
    url: `${BASE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  }))
}

export default function sitemap() {
  return [
    ...pair(PAGES.home, { changeFrequency: 'weekly', priority: 1 }),
    ...pair(PAGES.rentals, { changeFrequency: 'weekly', priority: 0.9 }),
    ...pair(PAGES.about, { changeFrequency: 'monthly', priority: 0.8 }),
    ...properties.flatMap((p) =>
      pair(
        { en: propertyHref(p.slug, 'en'), pt: propertyHref(p.slug, 'pt') },
        { changeFrequency: 'monthly', priority: 0.7 }
      )
    ),
    // Legal documents without an English translation only list the PT route:
    // the EN one declares the PT page as canonical (see legalRoutes.js).
    ...LEGAL_PAGES.flatMap((p) =>
      p.hasEnglish
        ? pair({ en: p.en.path, pt: p.pt.path }, { changeFrequency: 'yearly', priority: 0.3 })
        : [{ url: `${BASE_URL}${p.pt.path}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }]
    ),
  ]
}
