export default function PortfolioHero() {
  return (
    <section
      style={{
        backgroundColor: '#1a1a1a',
        minHeight: '260px',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 w-full pb-12">
      <h1
        style={{
          color: '#ffffff',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: '700',
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        Property
      </h1>
      </div>
    </section>
  )
}
