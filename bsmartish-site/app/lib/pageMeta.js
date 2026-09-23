// Metadados (title, description, canónica, hreflang, Open Graph) das páginas
// principais, em cada idioma. As rotas EN e PT importam daqui para que as duas
// versões fiquem sempre ligadas entre si.

import { PAGES, propertyHref, localeAlternates } from '@/app/lib/routes'
import { getPropertyBySlug } from '@/app/lib/propertiesData'

const OG_DEFAULT = '/og/default.jpg'

const META = {
  home: {
    en: {
      title: 'BSMARTISH Urban Renovation - Mid-Term Rentals Porto',
      description: 'Real estate company with 20 years of expertise focused on mid-term, fully furnished apartments in Porto and urban renovation projects.',
      imageAlt: 'BSMARTISH — urban renovation in Porto',
    },
    pt: {
      title: 'BSMARTISH Urban Renovation - Arrendamento de Média Duração no Porto',
      description: 'Empresa imobiliária com 20 anos de experiência, focada em apartamentos mobilados para arrendamento de média duração no Porto e em projetos de reabilitação urbana.',
      imageAlt: 'BSMARTISH — reabilitação urbana no Porto',
    },
  },
  about: {
    en: {
      title: 'About Us - BSMARTISH',
      description: 'Since 2006, we develop independent and partnered urban renovation projects and renting apartments. Nowadays, we focus our activity on Porto. Learn more about our philosophy.',
      imageAlt: 'BSMARTISH — urban renovation in Porto',
    },
    pt: {
      title: 'Sobre Nós - BSMARTISH',
      description: 'Desde 2006 desenvolvemos projetos de reabilitação urbana, próprios e em parceria, e arrendamos apartamentos. Hoje concentramos a nossa atividade no Porto. Conheça a nossa filosofia.',
      imageAlt: 'BSMARTISH — reabilitação urbana no Porto',
    },
  },
  rentals: {
    en: {
      title: 'Mid-Term Rentals in Porto - BSMARTISH Properties',
      description: 'Modern, fully furnished apartments for mid-term rental in Porto. Stays from 30 days to 12 months. Ideal for professionals and digital nomads.',
      imageAlt: 'BSMARTISH — mid-term rentals in Porto',
    },
    pt: {
      title: 'Arrendamento de Média Duração no Porto - Imóveis BSMARTISH',
      description: 'Apartamentos modernos e totalmente mobilados para arrendamento de média duração no Porto. Estadias de 30 dias a 12 meses. Ideais para profissionais e nómadas digitais.',
      imageAlt: 'BSMARTISH — arrendamento de média duração no Porto',
    },
  },
}

const PROPERTY_META = {
  'paranhos-apartment': {
    en: {
      title: 'Paranhos Apartment - Mid-Term Rental in Porto | BSMARTISH',
      description: 'Modern, fully furnished apartment in Paranhos, Porto. Mid-term rental from 30 days to 12 months. University area with direct access to city centre.',
    },
    pt: {
      title: 'Apartamento em Paranhos - Arrendamento de Média Duração no Porto | BSMARTISH',
      description: 'Apartamento moderno e totalmente mobilado em Paranhos, Porto. Arrendamento de média duração, de 30 dias a 12 meses. Zona universitária com acesso direto ao centro da cidade.',
    },
  },
  'matosinhos-apartment': {
    en: {
      title: 'Matosinhos Apartment - Mid-Term Rental in Porto | BSMARTISH',
      description: 'Modern, fully furnished apartment in Matosinhos, Porto. Mid-term rental from 30 days to 12 months. Premium location, near beach and direct access to the city centre.',
    },
    pt: {
      title: 'Apartamento em Matosinhos - Arrendamento de Média Duração no Porto | BSMARTISH',
      description: 'Apartamento moderno e totalmente mobilado em Matosinhos, Porto. Arrendamento de média duração, de 30 dias a 12 meses. Localização premium, perto da praia e com acesso direto ao centro da cidade.',
    },
  },
  'alegria-apartment': {
    en: {
      title: 'Alegria Apartment - Mid-Term Rental in Porto | BSMARTISH',
      description: 'Modern, fully furnished apartment in Alegria, Porto. Mid-term rental from 30 days to 12 months. City centre location with soundproof double glazed windows.',
    },
    pt: {
      title: 'Apartamento na Alegria - Arrendamento de Média Duração no Porto | BSMARTISH',
      description: 'Apartamento moderno e totalmente mobilado na Alegria, Porto. Arrendamento de média duração, de 30 dias a 12 meses. Localização central, com janelas de vidro duplo e isolamento acústico.',
    },
  },
}

function build({ title, description, paths, locale, image }) {
  return {
    title,
    description,
    alternates: localeAlternates(paths, locale),
    openGraph: {
      type: 'website',
      siteName: 'BSMARTISH',
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      alternateLocale: locale === 'pt' ? 'en_US' : 'pt_PT',
      title,
      description,
      url: paths[locale],
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  }
}

export function pageMetadata(key, locale) {
  const m = META[key][locale]
  return build({
    ...m,
    paths: PAGES[key],
    locale,
    image: { url: OG_DEFAULT, width: 1200, height: 630, alt: m.imageAlt },
  })
}

export function propertyMetadata(slug, locale) {
  const m = PROPERTY_META[slug]?.[locale]
  if (!m) return {}
  const property = getPropertyBySlug(slug)
  const alt = locale === 'pt'
    ? `${property?.ptName ?? 'BSMARTISH'} — arrendamento de média duração no Porto`
    : `${property?.name ?? 'BSMARTISH'} apartment — mid-term rental in Porto`
  return build({
    ...m,
    paths: { en: propertyHref(slug, 'en'), pt: propertyHref(slug, 'pt') },
    locale,
    image: { url: `/og/${slug}.jpg`, width: 1200, height: 630, alt },
  })
}
