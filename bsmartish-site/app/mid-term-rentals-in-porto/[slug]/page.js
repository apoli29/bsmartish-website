
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug, getRelatedProperties } from '@/app/lib/propertiesData'
import PropertyGallery from '@/app/components/PropertyGallery'
import FadeIn from '@/app/components/FadeIn'
import MoreDetailsAccordion from '@/app/components/MoreDetailsAccordion'
import PropertyMobileSections from '@/app/components/PropertyMobileSections'
import PropertyOverviewSection from '@/app/components/PropertyOverviewSection'
import MapEmbed from '@/app/components/MapEmbed'
import { BookWithUs, GalleryHeading, MoreDetailsHeading, ExploreMoreHeading, LocationHeading, RelatedPropertiesSection } from '@/app/components/PropertyPageHeadings'
import JsonLd from '@/app/components/JsonLd'
import { graph, apartmentSchema, propertyBreadcrumbSchema } from '@/app/lib/schema'

const slugMetadata = {
  'paranhos-apartment': {
    title: 'Paranhos Apartment - Mid-Term Rental in Porto | BSMARTISH',
    description: 'Modern, fully furnished apartment in Paranhos, Porto. Mid-term rental from 30 days to 12 months. University area with direct access to city centre.',
  },
  'matosinhos-apartment': {
    title: 'Matosinhos Apartment - Mid-Term Rental in Porto | BSMARTISH',
    description: 'Modern, fully furnished apartment in Matosinhos, Porto. Mid-term rental from 30 days to 12 months. Premium location, near beach and direct access to the city centre.',
  },
  'alegria-apartment': {
    title: 'Alegria Apartment - Mid-Term Rental in Porto | BSMARTISH',
    description: 'Modern, fully furnished apartment in Alegria, Porto. Mid-term rental from 30 days to 12 months. City centre location with soundproof double glazed windows.',
  },
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = slugMetadata[slug]
  if (!meta) return {}

  const url = `/mid-term-rentals-in-porto/${slug}`
  const image = {
    url: `/og/${slug}.jpg`,
    width: 1200,
    height: 630,
    alt: `${getPropertyBySlug(slug)?.name ?? 'BSMARTISH'} apartment — mid-term rental in Porto`,
  }

  return {
    ...meta,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'BSMARTISH',
      locale: 'en_US',
      title: meta.title,
      description: meta.description,
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [image.url],
    },
  }
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

const eyebrow = {
  margin: '0 0 12px',
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.7rem',
  fontWeight: 600,
  color: 'var(--color-slate-blue-text)',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
}

const detailLabel = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '0.65rem',
  fontWeight: 600,
  color: 'var(--color-slate-blue-text)',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  marginBottom: '7px',
}

const detailValue = {
  fontFamily: 'var(--font-aileron)',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#202831',
  lineHeight: 1.2,
}

const detailRow = {
  paddingTop: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e4e4e4',
}

const sectionH2 = {
  margin: '0 0 32px',
  fontFamily: 'var(--font-radnika)',
  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
  color: '#6b87a4',
  fontWeight: 500,
  lineHeight: 1.2,
}

export default async function PropertyPage({ params }) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(slug)

  return (
    <main className="pt-24 md:pt-28 lg:pt-32" style={{ backgroundColor: '#f8f8f8', fontFamily: 'var(--font-aileron)' }}>

      <JsonLd data={graph(apartmentSchema(slug), propertyBreadcrumbSchema(slug))} />

      <PropertyMobileSections property={property} />

      {/* ── Overview + Gallery (reordered on mobile) ── */}
      <div className="flex flex-col">

      <PropertyOverviewSection property={property} />

      {/* ── Photo Gallery ── */}
      <section className="order-1 md:order-2" style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <GalleryHeading />
          </FadeIn>
          <FadeIn delay={150}>
            <PropertyGallery photos={property.gallery} propertyName={property.name} />
          </FadeIn>
          <FadeIn delay={250}>
            <BookWithUs bookingLinks={property.bookingLinks} />
          </FadeIn>
        </div>
      </section>

      </div>{/* end reorder wrapper */}

      {/* ── More Details ── */}
      {property.moreDetails && (
        <section style={{ borderBottom: '1px solid #e4e4e4' }}>
          <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
            <FadeIn delay={0}>
              <MoreDetailsHeading />
            </FadeIn>
            <FadeIn delay={150}>
              <MoreDetailsAccordion moreDetails={property.moreDetails} ptMoreDetails={property.ptMoreDetails} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Location & Map ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <LocationHeading location={property.location} />
          </FadeIn>
          <FadeIn delay={150}>
            <MapEmbed src={property.mapSrc} location={property.location} />
          </FadeIn>
        </div>
      </section>

      {/* ── Related Properties ── */}
      <section style={{ borderBottom: '1px solid #e4e4e4' }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-12 md:py-16 lg:py-[72px]">
          <FadeIn delay={0}>
            <ExploreMoreHeading />
          </FadeIn>
          <FadeIn delay={150}>
            <RelatedPropertiesSection related={related} />
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
