const stats = [
  { value: '+10', label: 'Curated Projects', bg: 'rgba(107, 135, 164, 0.72)' },
  { value: '+6.2M €', label: 'In Investments', bg: 'rgba(32, 40, 49, 0.82)' },
  { value: '100%', label: 'Client Satisfaction', bg: 'rgba(107, 135, 164, 0.72)' },
]

export default function ImpactWidget() {
  return (
    <section
      id="impact-widget"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-9">
          {stats.map(({ value, label, bg }) => (
            <div
              key={label}
              className="rounded-2xl p-10 md:p-12 lg:p-14 text-center"
              style={{
                backgroundColor: bg,
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: '1px solid rgba(255, 255, 255, 0.30)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.20)',
              }}
            >
              <p
                className="leading-none mb-4 text-[2.2rem] md:text-[2.6rem] lg:text-[3rem]"
                style={{ fontFamily: 'var(--font-garet)', fontWeight: 800, color: '#F8F8F8' }}
              >
                {value}
              </p>
              <p
                className="text-base md:text-lg lg:text-xl tracking-wide"
                style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#F8F8F8' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
