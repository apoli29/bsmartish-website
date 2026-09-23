// Endereços do site em cada idioma — fonte única.
//
// O idioma é decidido pelo URL: as páginas EN vivem na raiz e as PT têm
// endereços próprios e traduzidos. Assim o Google indexa as duas versões
// (antes a versão PT só existia no browser, depois de clicar em «PT»).
//
// As páginas legais já tinham rotas por idioma e mantêm-nas (legalRoutes.js).

import { LEGAL_PAGES } from '@/app/lib/legalRoutes'

export const LOCALES = ['en', 'pt']

export const PAGES = {
  home: { en: '/', pt: '/pt' },
  about: { en: '/about', pt: '/pt/sobre-nos' },
  rentals: { en: '/mid-term-rentals-in-porto', pt: '/pt/arrendamento-media-duracao-porto' },
}

// Slug EN (usado em propertiesData) → slug PT.
export const PROPERTY_PT_SLUGS = {
  'paranhos-apartment': 'apartamento-paranhos',
  'matosinhos-apartment': 'apartamento-matosinhos',
  'alegria-apartment': 'apartamento-alegria',
}

const PT_TO_EN_SLUG = Object.fromEntries(
  Object.entries(PROPERTY_PT_SLUGS).map(([en, pt]) => [pt, en])
)

const norm = (locale) => (String(locale).toLowerCase() === 'pt' ? 'pt' : 'en')

export function pageHref(key, locale) {
  return PAGES[key][norm(locale)]
}

export function propertyHref(slug, locale) {
  return norm(locale) === 'pt'
    ? `${PAGES.rentals.pt}/${PROPERTY_PT_SLUGS[slug]}`
    : `${PAGES.rentals.en}/${slug}`
}

// Slug PT → slug EN (o que propertiesData conhece). null se não existir.
export function enSlugFromPt(ptSlug) {
  return PT_TO_EN_SLUG[ptSlug] ?? null
}

export function isPtPath(pathname) {
  if (pathname === '/pt' || pathname.startsWith('/pt/')) return true
  return LEGAL_PAGES.some((p) => p.pt.path === pathname)
}

export function localeFromPath(pathname) {
  return isPtPath(pathname || '/') ? 'pt' : 'en'
}

export function isRentalsPath(pathname) {
  return Object.values(PAGES.rentals).some((p) => pathname === p || pathname.startsWith(`${p}/`))
}

// Endereço equivalente noutro idioma. Se a página não tiver equivalente,
// devolve a página inicial desse idioma.
export function alternatePath(pathname, target) {
  const to = norm(target)
  const from = localeFromPath(pathname)
  if (from === to) return pathname

  for (const page of Object.values(PAGES)) {
    if (page[from] === pathname) return page[to]
  }
  for (const page of LEGAL_PAGES) {
    if (page[from].path === pathname) return page[to].path
  }

  const rentalsPrefix = `${PAGES.rentals[from]}/`
  if (pathname.startsWith(rentalsPrefix)) {
    const slug = pathname.slice(rentalsPrefix.length)
    const enSlug = from === 'pt' ? enSlugFromPt(slug) : slug
    if (enSlug && PROPERTY_PT_SLUGS[enSlug]) return propertyHref(enSlug, to)
  }

  return PAGES.home[to]
}

// Bloco `alternates` dos metadados: canónica própria + hreflang para a outra
// língua. `paths` é { en, pt }.
export function localeAlternates(paths, locale) {
  return {
    canonical: paths[norm(locale)],
    languages: { en: paths.en, pt: paths.pt, 'x-default': paths.en },
  }
}
