// Endereços das páginas legais em cada idioma.
//
// O idioma do site é escolhido no cliente (i18n-provider) e não faz parte do
// URL; as páginas legais são a exceção, porque um documento jurídico deve ter
// um endereço que corresponda à língua em que é lido. Cada documento tem por
// isso uma rota PT e uma rota EN, que renderizam o mesmo componente.
//
// `hasEnglish` indica se o advogado forneceu tradução EN. Sem tradução, a rota
// EN mostra o mesmo texto PT que a rota PT; para o Google são páginas
// duplicadas, e ele escolhia sozinho qual indexar («Página duplicada, o Google
// escolheu uma página canónica diferente do utilizador»). Nesses casos a rota
// EN declara a PT como canónica e fica fora do sitemap e do hreflang.

export const LEGAL_PAGES = [
  {
    key: 'legalNotice',
    hasEnglish: true,
    en: { path: '/legal-information', title: 'Legal Information' },
    pt: { path: '/informacao-legal', title: 'Informação Legal' },
  },
  {
    key: 'privacy',
    hasEnglish: true,
    en: { path: '/privacy-policy', title: 'Privacy Policy' },
    pt: { path: '/politica-de-privacidade', title: 'Política de Privacidade' },
  },
  {
    key: 'cookies',
    hasEnglish: false,
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
  // Sem tradução, a versão EN é uma cópia da PT: aponta a canónica para a PT e
  // não anuncia hreflang (um hreflang para uma página não canónica é um erro).
  const canonical = page.hasEnglish ? own.path : page.pt.path
  const alternates = page.hasEnglish
    ? { canonical, languages: { en: page.en.path, pt: page.pt.path, 'x-default': page.en.path } }
    : { canonical }
  return {
    title,
    description,
    alternates,
    openGraph: {
      type: 'website',
      siteName: 'BSMARTISH',
      locale: lang === 'pt' ? 'pt_PT' : 'en_GB',
      title,
      description,
      url: canonical,
    },
  }
}
