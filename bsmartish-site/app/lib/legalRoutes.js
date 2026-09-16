// Endereços das páginas legais em cada idioma.
//
// O idioma do site é escolhido no cliente (i18n-provider) e não faz parte do
// URL; as páginas legais são a exceção, porque um documento jurídico deve ter
// um endereço que corresponda à língua em que é lido. Cada documento tem por
// isso uma rota PT e uma rota EN, que renderizam o mesmo componente.

export const LEGAL_PAGES = [
  {
    key: 'legalNotice',
    en: { path: '/legal-information', title: 'Legal Information' },
    pt: { path: '/informacao-legal', title: 'Informação Legal' },
  },
  {
    key: 'privacy',
    en: { path: '/privacy-policy', title: 'Privacy Policy' },
    pt: { path: '/politica-de-privacidade', title: 'Política de Privacidade' },
  },
  {
    key: 'cookies',
    en: { path: '/cookie-policy', title: 'Cookie Policy' },
    pt: { path: '/politica-de-cookies', title: 'Política de Cookies' },
  },
]

const byKey = Object.fromEntries(LEGAL_PAGES.map((p) => [p.key, p]))

// `lang` aceita 'EN'/'PT' (useLang) ou 'en'/'pt' (useLocale).
export function legalHref(key, lang) {
  return byKey[key][String(lang).toLowerCase() === 'pt' ? 'pt' : 'en'].path
}

// Metadados partilhados pelas duas rotas de cada documento: canonical própria
// e hreflang a apontar para a versão na outra língua.
export function legalMetadata(key, lang, description) {
  const page = byKey[key]
  const own = page[lang]
  const title = `${own.title} - BSMARTISH`
  return {
    title,
    description,
    alternates: {
      canonical: own.path,
      languages: { en: page.en.path, pt: page.pt.path, 'x-default': page.en.path },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'BSMARTISH',
      locale: lang === 'pt' ? 'pt_PT' : 'en_GB',
      title,
      description,
      url: own.path,
    },
  }
}
