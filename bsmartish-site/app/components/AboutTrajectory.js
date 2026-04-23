import FadeIn from '@/app/components/FadeIn'

const cards = [
  {
    image: '/images/Website.images/About%20us/img.square.sec2.webp',
    headline: '20 years',
    tagline: 'of activity in Spain.',
    delay: 100,
  },
  {
    image: '/images/Website.images/About%20us/2.img.square.sec.2.webp',
    headline: '~10 years',
    tagline: 'of activity in Porto.',
    delay: 220,
  },
]

const TRAJECTORY_TEXT =
  'In spain, our focus was the development of urban renovation projects to therefore place them on the Market on a long-term rental market. We developed projects everywhere across the country, but mostly in beautiful cities like Barcelona and Girona. All these years of activity were fundamental for us to find our identity and our philosophy — essentially how we operate. In 2017 we relocated our activity to Porto, where we have centralized all our operations to this day.'

export default function AboutTrajectory() {
  return (
    <section
      id="about-trajectory"
      className="w-full"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 py-20 md:py-24 lg:py-28">

        {/* Section headline (Slate Blue) */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <span
              aria-hidden="true"
              className="block"
              style={{ width: '28px', height: '1px', backgroundColor: '#6b87a4' }}
            />
            <p
              className="uppercase tracking-[0.22em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
            >
              Our Trajectory
            </p>
          </div>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] mb-12 md:mb-14 lg:mb-16 max-w-[820px]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            Mastering urban renovation since 1997.
          </h2>
        </FadeIn>

        {/* Squares, alinhados à esquerda (50% maiores) */}
        <div className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
            {cards.map(({ image, headline, tagline, delay }) => (
              <FadeIn key={headline} delay={delay}>
                <article
                  className="group relative aspect-[9/16] overflow-hidden rounded-2xl transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: '#202831',
                    boxShadow: '0 12px 30px -18px rgba(32,40,49,0.45), 0 4px 10px -6px rgba(32,40,49,0.20)',
                  }}
                >
                  {/* Background image — sem blur para preservar qualidade da foto */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${image}')` }}
                  />

                  {/* Tint constante Deep Urban */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(32,40,49,0.42)' }}
                  />

                  {/* Gradient — reforça topo e fundo */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(32,40,49,0.78) 0%, rgba(32,40,49,0.30) 45%, rgba(32,40,49,0.30) 70%, rgba(32,40,49,0.65) 100%)',
                    }}
                  />

                  {/* Subtle Slate Blue tint */}
                  <div
                    className="absolute inset-0 mix-blend-overlay pointer-events-none"
                    style={{ backgroundColor: 'rgba(107,135,164,0.18)' }}
                  />

                  {/* Texto no TOPO */}
                  <div className="absolute inset-0 flex flex-col justify-start p-7 md:p-9 lg:p-10">
                    <h3
                      className="text-[#F8F8F8] leading-[1.05] text-[2.4rem] md:text-[2.9rem] lg:text-[3.5rem]"
                      style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500 }}
                    >
                      {headline}
                    </h3>
                    <p
                      className="text-[#F8F8F8] mt-1.5 md:mt-2 text-[1.1rem] md:text-[1.25rem] lg:text-[1.4rem]"
                      style={{
                        fontFamily: 'var(--font-aileron)',
                        fontWeight: 400,
                        opacity: 0.94,
                        letterSpacing: '0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {tagline}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Rectangle widget — largura total do container (esticado) */}
        <FadeIn delay={340}>
          <article
            className="relative w-full mt-4 md:mt-5 lg:mt-6 overflow-hidden rounded-2xl"
            style={{
              backgroundColor: '#202831',
              boxShadow: '0 16px 40px -22px rgba(32,40,49,0.55), 0 6px 14px -8px rgba(32,40,49,0.25)',
            }}
          >
            {/* Radial highlight Slate Blue (top-right) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 100% 0%, rgba(107,135,164,0.22) 0%, rgba(107,135,164,0) 55%)',
              }}
            />

            <div className="relative px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
              {/* Body text esticado, max-width confortável para leitura */}
              <p
                className="text-[1rem] md:text-[1.08rem] lg:text-[1.18rem] max-w-[1100px]"
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 400,
                  color: '#F8F8F8',
                  lineHeight: 1.7,
                  opacity: 0.92,
                }}
              >
                {TRAJECTORY_TEXT}
              </p>
            </div>
          </article>
        </FadeIn>

      </div>
    </section>
  )
}
