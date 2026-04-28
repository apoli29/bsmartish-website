export const properties = [
  {
    id: 1,
    slug: 'paranhos-apartment',
    bookingLinks: {
      idealista: 'https://www.idealista.pt/imovel/34457200/',
      airbnb: 'https://airbnb.es/h/bsmartishparanhos5',
      spotahome: 'https://www.spotahome.com/porto/for-rent:apartments/1491376',
      flatio: 'https://www.flatio.es/alquiler/piso/120808-oporto',
    },
    name: 'Paranhos',
    subtitle: 'Ultra-Modern Urban Apartment',
    location: 'Paranhos, Porto',
    description:
      'This is one of the most modern-looking buildings you will find, embodying a minimalistic approach that combines a clean architectural exterior with a functional, elegant, and high-standard interior. Located in Paranhos, Porto — a privileged location due to its direct access to the city center, the University Polo, shopping hubs, major healthcare facilities, and diverse dining options.',
    longDescription:
      'This is one of the most modern-looking buildings you will find, embodying a minimalistic approach that combines a clean architectural exterior with a functional, elegant, and high-standard interior. Located in Paranhos, Porto — a privileged location due to its direct access to the city center, the University Polo, shopping hubs, major healthcare facilities, and diverse dining options.',
    tags: [
      { type: 'people', count: 2 },
      'Garage',
      'Privileged Location',
      'Wide Space',
      'Ultra-Modern',
    ],
    specs: {
      area: '110 m²',
      beds: '2',
      baths: '1',
      type: 'Apartment',
      status: 'For Rent',
      year: '2023',
      floor: '3',
      rooms: '4',
      garage: 'Yes',
    },
    image: '/images/Website.images/apt.photos/paranhos.apt/1.webp',
    gallery: Array.from({ length: 19 }, (_, i) => `/images/Website.images/apt.photos/paranhos.apt/${i + 1}.webp`),
  },
  {
    id: 2,
    slug: 'matosinhos-apartment',
    bookingLinks: {
      idealista: 'https://www.idealista.pt/imovel/34888612/',
      airbnb: 'https://airbnb.es/h/bsmartishmatosinhos',
      spotahome: 'https://www.spotahome.com/porto/for-rent:apartments/1553828',
      flatio: 'https://www.flatio.es/alquiler/piso/127332-matosinhos',
    },
    name: 'Matosinhos',
    subtitle: 'Coastal Premium Living',
    location: 'Matosinhos, Porto',
    description:
      "An apartment located in the most premium area in Porto: Matosinhos. An apartment that was formerly a law firm's office and has been transformed into a top-tier apartment, due to its location, architectural excellence, and an incredible view.",
    longDescription:
      "An apartment located in the most premium area in Porto: Matosinhos. An apartment that was formerly a law firm's office and has been transformed into a top-tier apartment, due to its location, architectural excellence, and an incredible view.",
    tags: [
      { type: 'people', count: 3 },
      'Premium Location',
      'Top-Tier Architectural Design and Furniture',
      'Amazing View',
      'Amenity-Rich',
    ],
    specs: {
      area: '145 m²',
      beds: '3',
      baths: '2',
      type: 'Apartment',
      status: 'For Sale',
      year: '2022',
      floor: '5',
      rooms: '6',
      garage: 'No',
    },
    image: '/images/Website.images/apt.photos/matosinhos.apt/1.webp',
    gallery: Array.from({ length: 19 }, (_, i) => `/images/Website.images/apt.photos/matosinhos.apt/${i + 1}.webp`),
  },
  {
    id: 3,
    slug: 'alegria-apartment',
    bookingLinks: {
      idealista: 'https://www.idealista.pt/imovel/34305390/',
      airbnb: 'https://airbnb.es/h/bsmartishalegria',
      spotahome: 'https://www.spotahome.com/porto/for-rent:apartments/1478660',
      flatio: 'https://www.flatio.es/alquiler/piso/120807-oporto',
    },
    name: 'Alegria',
    subtitle: 'Heart of Porto Residence',
    location: 'Rua da Alegria, Porto',
    description:
      "A sleek, minimalist and renewed apartment located in the heart of Porto, on Rua da Alegria. This residence brings a modern edge to the city center, perfectly balancing Porto's traditional heritage with contemporary design. Its privileged location is only a 2-minute walk from Rua Santa Catarina, a hub that aggregates everything from premium retail and local boutiques to diverse restaurants, cafés, and other amazing places.",
    longDescription:
      "A sleek, minimalist and renewed apartment located in the heart of Porto, on Rua da Alegria. This residence brings a modern edge to the city center, perfectly balancing Porto's traditional heritage with contemporary design. Its privileged location is only a 2-minute walk from Rua Santa Catarina, a hub that aggregates everything from premium retail and local boutiques to diverse restaurants, cafés, and other amazing places.",
    tags: [
      { type: 'people', count: 2 },
      'Privileged Location',
      'Modern',
      'Minimalist',
      'Cozy View',
    ],
    specs: {
      area: '280 m²',
      beds: '2',
      baths: '1',
      type: 'Apartment',
      status: 'For Rent',
      year: '2024',
      floor: '2',
      rooms: '4',
      garage: 'No',
    },
    image: '/images/Website.images/apt.photos/alegria.apt/1.webp',
    gallery: Array.from({ length: 14 }, (_, i) => `/images/Website.images/apt.photos/alegria.apt/${i + 1}.webp`),
  },
]

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug) ?? null
}

export function getRelatedProperties(slug) {
  return properties.filter((p) => p.slug !== slug)
}
