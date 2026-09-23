import { properties } from '@/app/lib/propertiesData'
import { PROPERTY_PT_SLUGS, enSlugFromPt } from '@/app/lib/routes'
import PropertyPage from '@/app/components/pages/PropertyPage'
import { propertyMetadata } from '@/app/lib/pageMeta'

// O parâmetro é o slug PT (apartamento-paranhos); propertiesData usa o EN.
export const dynamicParams = false

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: PROPERTY_PT_SLUGS[p.slug] }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  return propertyMetadata(enSlugFromPt(slug), 'pt')
}

export default async function Imovel({ params }) {
  const { slug } = await params
  return <PropertyPage slug={enSlugFromPt(slug)} locale="pt" />
}
