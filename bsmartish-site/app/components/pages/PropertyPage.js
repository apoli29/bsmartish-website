import { notFound } from 'next/navigation'
import { getPropertyBySlug, getRelatedProperties } from '@/app/lib/propertiesData'
import PropertyGallery from '@/app/components/PropertyGallery'
import FadeIn from '@/app/components/FadeIn'
import MoreDetailsAccordion from '@/app/components/MoreDetailsAccordion'
import PropertyMobileSections from '@/app/components/PropertyMobileSections'
import PropertyOverviewSection from '@/app/components/PropertyOverviewSection'
import MapEmbed from '@/app/components/MapEmbed'
import { BookWithUs, GalleryHeading, MoreDetailsHeading, ExploreMoreHeading, LocationHeading, RelatedPropertiesSection } from '@/app/components/PropertyPageHeadings'
import JsonLd from '@/app/components/JsonLd'
import { graph, apartmentSchema, propertyBreadcrumbSchema } from '@/app/lib/schema'

// Served at /mid-term-rentals-in-porto/<slug> (EN) and
// /pt/arrendamento-media-duracao-porto/<slug-pt> (PT). `slug` is always the EN
// slug that propertiesData knows.
export default function PropertyPage({ slug, locale }) {
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(slug)

  return (
    <main className="pt-24 md:pt-28 lg:pt-32" style={{ backgroundColor: '#f8f8f8', fontFamily: 'var(--font-aileron)' }}>

      <JsonLd data={graph(apartmentSchema(slug, locale), propertyBreadcrumbSchema(slug, locale))} />

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
