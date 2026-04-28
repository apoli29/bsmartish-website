import FadeIn from '@/app/components/FadeIn'

export default function PortfolioHero() {
  return (
    <section
      style={{
        backgroundColor: '#F8F8F8',
        minHeight: '260px',
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: '100px',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 w-full pb-12">
        <FadeIn delay={0}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, backgroundColor: '#6b87a4', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
                fontSize: '0.7rem',
                color: '#6b87a4',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
              }}
            >
              Our Portfolio
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <h1
            style={{
              fontFamily: 'var(--font-radnika)',
              fontWeight: 500,
              color: '#6b87a4',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Our Properties
          </h1>
        </FadeIn>
      </div>
    </section>
  )
}
