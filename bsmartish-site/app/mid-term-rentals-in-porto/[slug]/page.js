import { properties } from '@/app/lib/propertiesData'
import PropertyPage from '@/app/components/pages/PropertyPage'
import { propertyMetadata } from '@/app/lib/pageMeta'

export const dynamicParams = false

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  return propertyMetadata(slug, 'en')
}

export default async function Property({ params }) {
  const { slug } = await params
  return <PropertyPage slug={slug} locale="en" />
}
