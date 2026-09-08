// Schema markup (JSON-LD, schema.org) — fonte única para todo o site.
//
// A organização é definida UMA vez, em app/layout.js, com o @id ORG_ID.
// Todas as outras páginas referenciam-na por esse @id em vez de a repetirem.
//
// Valores derivados de propertiesData.js e locales/en.json sempre que possível.
// O único mapeamento manual é o das comodidades (AMENITIES), porque as frases
// originais misturam várias características numa só string.

import { properties, getPropertyBySlug } from '@/app/lib/propertiesData'
import { HOME_GALLERY_SRCS } from '@/app/lib/homeGalleryImages'
import en from '../../locales/en.json'

export const BASE_URL = 'https://www.bsmartish.com'
export const ORG_ID = `${BASE_URL}/#organization`
export const SITE_ID = `${BASE_URL}/#website`

const abs = (path) => `${BASE_URL}${path}`

const PORTFOLIO_PATH = '/mid-term-rentals-in-porto'

// ─────────────────────────────────────────────────────────────
// Organização
// ─────────────────────────────────────────────────────────────

const ORG_DESCRIPTION =
  'Mid-term rentals & real estate developer in Porto. Fully furnished serviced apartments for stays from 30 days to 12 months, and urban renovation projects developed both independently and in partnership with investors, since 2006.'

// Legenda partilhada pelas 22 fotos do carrossel. Diz o que são — projetos de
// renovação urbana da empresa — sem atribuir nome ou local a nenhuma delas.
const PROJECT_PHOTO_CAPTION =
  'Urban renovation project developed by BSMARTISH — Porto'

// Perfil de anfitrião, comum aos três imóveis: pertence à empresa, não a um
// apartamento em concreto.
const AIRBNB_PROFILE = properties[0]?.bookingLinks?.airbnb

const SERVICES = [
  {
    name: en.aboutWhatWeDo.activity1Title,
    description: en.aboutWhatWeDo.activity1Text,
  },
  {
    name: en.aboutWhatWeDo.activity2Title,
    description: en.aboutWhatWeDo.activity2Text,
  },
]

export function organizationSchema() {
  return {
    // NOT RealEstateAgent. In Portugal "mediação imobiliária" — matching
    // third-party buyers/sellers or landlords/tenants for a commission — is a
    // regulated activity requiring an AMI licence (Lei 15/2013). BSMARTISH lets
    // its own properties and manages renovation projects, which is not
    // mediation, so the markup should not announce an agency it is not.
    // ProfessionalService is a subtype of LocalBusiness, so local SEO signals
    // are unaffected. Revert this one line if an AMI licence is ever obtained.
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: 'BSMARTISH Urban Renovation',
    alternateName: 'BSMARTISH',
    url: BASE_URL,
    logo: abs('/images/logo/logo.png'),
    image: abs('/og/default.jpg'),
    description: ORG_DESCRIPTION,
    telephone: '+351936920210',
    email: 'hello@bsmartish.com',
    foundingDate: '2006',
    knowsLanguage: ['en', 'pt'],
    sameAs: [
      'https://www.instagram.com/bsmartish',
      AIRBNB_PROFILE,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto',
      addressRegion: 'Porto',
      addressCountry: 'PT',
    },
    areaServed: {
      '@type': 'City',
      name: 'Porto',
      address: { '@type': 'PostalAddress', addressCountry: 'PT' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+351936920210',
      email: 'hello@bsmartish.com',
      availableLanguage: ['en', 'pt'],
    },
    photo: HOME_GALLERY_SRCS.map((src) => ({
      '@type': 'ImageObject',
      contentUrl: abs(src),
      caption: PROJECT_PHOTO_CAPTION,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  }
}

export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: 'BSMARTISH',
    url: BASE_URL,
    inLanguage: ['en', 'pt'],
    publisher: { '@id': ORG_ID },
  }
}

// ─────────────────────────────────────────────────────────────
// Apartamentos
// ─────────────────────────────────────────────────────────────

// Mapeamento manual aprovado. As frases de moreDetails misturam várias
// comodidades numa só string ("Air conditioning, heating and double-glazed
// Windows" são três), por isso a partição é feita à mão e não derivada.
const COMMON_AMENITIES = [
  'Furnished',
  'Air conditioning',
  'Heating',
  'Double-glazed windows',
  'High-speed internet',
  'Television',
  'Cleaning service (fortnightly)',
  'Washing machine',
  'Dryer',
  'Stove',
  'Oven',
  'Refrigerator',
  'Dishwasher',
  'Linens & towels provided',
  'Workspace',
]

// Diferenças reais entre imóveis, verificadas frase a frase em moreDetails:
// Paranhos não lista micro-ondas e é o único com estacionamento; Matosinhos é
// o único com escritório independente e vista sobre o Porto de Leixões.
const AMENITIES = {
  'paranhos-apartment': [...COMMON_AMENITIES, 'Parking'],
  'matosinhos-apartment': [...COMMON_AMENITIES, 'Microwave', 'Home office', 'View'],
  'alegria-apartment': [...COMMON_AMENITIES, 'Microwave'],
}

// Bairro / código postal. Localização deliberadamente ao nível de bairro:
// sem rua, sem número e sem coordenadas.
const ADDRESSES = {
  'paranhos-apartment': { addressLocality: 'Paranhos', postalCode: '4200-550' },
  'matosinhos-apartment': { addressLocality: 'Matosinhos', postalCode: '4450-038' },
  'alegria-apartment': { addressLocality: 'Porto', postalCode: '4000-041' },
}

// Tipologia portuguesa — deriva do número de quartos (T1 = 1 quarto).
const typology = (beds) => `T${beds}`

// Condições comerciais, de moreDetails.conditions e .characteristics.
// Vão para a oferta, não para as comodidades: são termos do negócio, não
// características do imóvel.
const offerTerms = (property) => {
  const fee = property.slug === 'matosinhos-apartment' ? '€200' : '€135'
  return [
    'Utilities included up to €150/month (water, electricity and internet).',
    'Deposit: 1 month, returned up to 30 days after departure.',
    `Administrative fee: ${fee}, one-time payment at the start of the contract.`,
    'Fixed-term contract, not automatically renewable.',
  ].join(' ')
}

export function apartmentSchema(slug) {
  const property = getPropertyBySlug(slug)
  if (!property) return null

  const { specs } = property
  const url = abs(`${PORTFOLIO_PATH}/${slug}`)
  const address = ADDRESSES[slug]

  const yearName =
    specs.yearLabel === 'Renovation Year' ? 'Renovation year' : 'Built year'

  return {
    '@type': ['Apartment', 'Product'],
    '@id': `${url}#apartment`,
    name: `${property.name} ${specs.type}`,
    description: property.description,
    url,
    image: property.gallery.map(abs),
    numberOfRooms: Number(specs.rooms),
    numberOfBedrooms: Number(specs.beds),
    numberOfBathroomsTotal: Number(specs.baths),
    floorSize: {
      '@type': 'QuantitativeValue',
      value: Number(specs.area),
      unitCode: 'MTK',
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: Number(
        property.tags.find((tag) => tag?.type === 'people')?.count ?? 0
      ),
      unitText: 'guests',
    },
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressRegion: 'Porto',
      addressCountry: 'PT',
    },
    amenityFeature: (AMENITIES[slug] ?? []).map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Typology',
        value: typology(specs.beds),
      },
      {
        '@type': 'PropertyValue',
        name: yearName,
        value: specs.year,
      },
    ],
    sameAs: [
      property.bookingLinks.idealista,
      property.bookingLinks.spotahome,
      property.bookingLinks.flatio,
    ].filter(Boolean),
    offers: {
      '@type': 'Offer',
      url,
      price: Number(property.price.replace(/,/g, '')),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
      description: offerTerms(property),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: Number(property.price.replace(/,/g, '')),
        priceCurrency: 'EUR',
        unitCode: 'MON',
      },
      leaseLength: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 12,
        unitCode: 'MON',
      },
      seller: { '@id': ORG_ID },
    },
  }
}

export function propertyBreadcrumbSchema(slug) {
  const property = getPropertyBySlug(slug)
  if (!property) return null

  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mid-Term Rentals in Porto',
        item: abs(PORTFOLIO_PATH),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${property.name} ${property.specs.type}`,
        item: abs(`${PORTFOLIO_PATH}/${slug}`),
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────
// Listagem
// ─────────────────────────────────────────────────────────────

const PORTFOLIO_DESCRIPTION =
  'Fully furnished and serviced apartments for mid-term rentals in Porto: Paranhos, Matosinhos and Alegria. Flexible stays from 30 days to 12 months. For expatriates, digital nomads and students.'

export function portfolioSchema() {
  return {
    '@type': 'CollectionPage',
    '@id': `${abs(PORTFOLIO_PATH)}#page`,
    name: 'Mid-Term Rentals in Porto',
    description: PORTFOLIO_DESCRIPTION,
    url: abs(PORTFOLIO_PATH),
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: properties.length,
      itemListElement: properties.map((property, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${property.name} ${property.specs.type}`,
        url: abs(`${PORTFOLIO_PATH}/${property.slug}`),
      })),
    },
  }
}

// ─────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────

const ABOUT_DESCRIPTION =
  'Urban renovation specialists in Porto since 2006. We develop, renovate and operate mid-term rental apartments, and manage renovation projects for third-party investors.'

// A 6.ª resposta está partida em três chaves porque no site contém um link.
// Aqui é reconstruída como texto simples — o schema quer a resposta, não a
// marcação.
const faqAnswers = () => {
  const f = en.aboutFAQ
  return [
    [f.q1, f.a1],
    [f.q2, f.a2],
    [f.q3, f.a3],
    [f.q4, f.a4],
    [f.q5, f.a5],
    [f.q6, `${f.a6_pre}${f.a6_link}${f.a6_post}`],
  ]
}

export function aboutPageSchema() {
  return {
    '@type': 'AboutPage',
    '@id': `${abs('/about')}#page`,
    name: 'About Us',
    description: ABOUT_DESCRIPTION,
    url: abs('/about'),
    isPartOf: { '@id': SITE_ID },
    mainEntity: { '@id': ORG_ID },
  }
}

export function faqSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${abs('/about')}#faq`,
    mainEntity: faqAnswers().map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

// ─────────────────────────────────────────────────────────────

// Envolve um ou mais nós num único grafo, que é a forma recomendada de
// entregar vários blocos relacionados na mesma página.
export function graph(...nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  }
}
