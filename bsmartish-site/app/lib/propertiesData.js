export const properties = [
  {
    id: 1,
    slug: 'paranhos-apartment',
    name: 'Paranhos Apartment',
    price: null,
    priceLabel: 'Price on request',
    description:
      'Welcome to our living room property, where comfort and relaxation come together to create the perfect home for you. Step into a spacious and inviting space that blends practicality and elegance.',
    longDescription:
      'A carefully considered space where every element has been chosen with intention. Natural light fills the room through floor-to-ceiling glazing, while refined finishes and thoughtful proportions create an atmosphere of calm confidence. This is urban living at its most considered.',
    tags: ['Landscaped garden', 'Enhanced privacy', 'Private work door'],
    specs: {
      area: '110 m²',
      beds: '2',
      baths: '1',
      type: 'Apartment',
      status: 'For Rent',
    },
    image: null,
    gallery: [null, null, null, null, null],
  },
  {
    id: 2,
    slug: 'matosinhos-apartment',
    name: 'Matosinhos Apartment',
    price: '$750,000.00 USD',
    priceLabel: null,
    description:
      'Welcome to our elegant kitchen property, where modern appliances, sleek design, and functionality come together to inspire your culinary creativity. Step into an efficient space that blends practicality and style.',
    longDescription:
      'The kitchen is the heart of this property — a space where precision design meets everyday practicality. Bespoke cabinetry, professional-grade appliances, and an expansive island define a workspace that performs as well as it looks.',
    tags: ['Enhanced privacy', 'Enhanced privacy'],
    specs: {
      area: '145 m²',
      beds: '3',
      baths: '2',
      type: 'Apartment',
      status: 'For Sale',
    },
    image: null,
    gallery: [null, null, null, null, null],
  },
  {
    id: 3,
    slug: 'alegria-apartment',
    name: 'Alegria Apartment',
    price: '$3,000,000.00 USD',
    priceLabel: null,
    description:
      'Welcome to our charming family house property, where warmth, togetherness, and comfort define every corner. Step into a thoughtfully designed home with urban design with modern living.',
    longDescription:
      'Conceived for the way families actually live, this property brings together generous proportions, considered outdoor space, and the kind of material quality that only improves with time. Urban design thinking applied to family-scale living.',
    tags: ['Tech-friendly', 'Lush rooftop', 'Enhanced privacy', 'Private work door'],
    specs: {
      area: '280 m²',
      beds: '5',
      baths: '3',
      type: 'House',
      status: 'For Sale',
    },
    image: null,
    gallery: [null, null, null, null, null],
  },
]

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug) ?? null
}

export function getRelatedProperties(slug) {
  return properties.filter((p) => p.slug !== slug)
}
