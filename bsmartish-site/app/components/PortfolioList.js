import Link from 'next/link'
import { properties } from '@/app/lib/propertiesData'

function PropertyRow({ property }) {
  return (
    <div
      style={{
        borderTop: '1px solid #e0e0e0',
        padding: '40px 0 48px',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20" style={{ display: 'flex', alignItems: 'stretch', gap: '40px' }}>
      {/* Left: text content */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Logo mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: '#222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '2px solid #fff',
              }}
            />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#555' }}>Brand®</span>
        </div>

        {/* Name — clickable */}
        <Link href={`/portfolio/${property.slug}`} style={{ textDecoration: 'none' }}>
          <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '700', color: '#111', lineHeight: 1.2 }}>
            {property.name}
          </h2>
        </Link>

        {/* Price */}
        {property.price && (
          <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', color: '#333' }}>
            {property.price}
          </p>
        )}

        {/* Description */}
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#555', lineHeight: 1.6, maxWidth: '480px' }}>
          {property.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
          {property.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.72rem',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid #ccc',
                color: '#444',
                backgroundColor: '#f5f5f5',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '8px' }}>
          <Link
            href={`/portfolio/${property.slug}`}
            style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '600',
              padding: '10px 24px',
              borderRadius: '6px',
              backgroundColor: '#111',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Right: image */}
      <div
        style={{
          flex: '1',
          minHeight: '260px',
          borderRadius: '8px',
          backgroundColor: '#d0d0d0',
          overflow: 'hidden',
        }}
      >
        {property.image ? (
          <img src={property.image} alt={property.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '260px',
              backgroundColor: '#c8c8c8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '0.8rem',
            }}
          >
            Image placeholder
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default function PortfolioList() {
  return (
    <section style={{ backgroundColor: '#ffffff' }}>
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property} />
      ))}
      <div style={{ borderTop: '1px solid #e0e0e0' }} />
    </section>
  )
}
