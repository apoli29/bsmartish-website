const BASE_URL = 'https://www.bsmartish.com'

const propertySlugs = [
  'paranhos-apartment',
  'matosinhos-apartment',
  'alegria-apartment',
]

export default function sitemap() {
  const propertyPages = propertySlugs.map((slug) => ({
    url: `${BASE_URL}/mid-term-rentals-in-porto/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/mid-term-rentals-in-porto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...propertyPages,
  ]
}
