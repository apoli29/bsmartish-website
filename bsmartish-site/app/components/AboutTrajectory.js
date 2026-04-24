import FadeIn from '@/app/components/FadeIn'
import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'

export default function AboutTrajectory() {
  return (
    <section
      id="about-trajectory"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-0">

        {/* Eyebrow + Headline */}
        <FadeIn>
          <p
            className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
          >
            Our Trajectory
          </p>
          <h2
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] max-w-[820px]"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
          >
            Mastering urban renovation since 1997.
          </h2>
        </FadeIn>

        {/* Two-act timeline cards */}
        <div className="mt-10 md:mt-12 lg:mt-14 mb-6 flex flex-col lg:flex-row gap-4">

          {/* Spain era */}
          <FadeIn delay={150} className="w-full lg:flex-1">
            <FrostedGlassCard
              className="w-full min-h-[480px] md:min-h-[520px] lg:min-h-[560px]"
              image="/images/Website.images/About us/photo2.webp"
              imageSizes="(max-width: 1024px) 100vw, 720px"
              overlayOpacity={0.72}
              contentClassName="p-7 md:p-9 lg:p-10 flex flex-col justify-between h-full"
            >
              <span
                className="self-start uppercase tracking-[0.18em] text-[0.7rem] px-3 py-[6px]"
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  color: '#f8f8f8',
                  border: '1px solid rgba(255,255,255,0.55)',
                  borderRadius: '999px',
                }}
              >
                1997 — 2017
              </span>

              <div className="max-w-[440px]">
                <h3
                  className="leading-none text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]"
                  style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
                >
                  Spain.
                </h3>
                <p
                  className="mt-4 md:mt-5 text-[0.95rem] md:text-[1rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'rgba(248,248,248,0.96)' }}
                >
                  Our activity began in 1997, focused on developing urban renovation projects for the long-term rental market. We developed projects everywhere across the country, but mostly in beautiful cities like Barcelona and Girona.
                </p>
              </div>
            </FrostedGlassCard>
          </FadeIn>

          {/* Porto era */}
          <FadeIn delay={300} className="w-full lg:flex-1">
            <FrostedGlassCard
              className="w-full min-h-[480px] md:min-h-[520px] lg:min-h-[560px]"
              image="/images/Website.images/About us/photo1.webp"
              imageSizes="(max-width: 1024px) 100vw, 720px"
              overlayOpacity={0.72}
              contentClassName="p-7 md:p-9 lg:p-10 flex flex-col justify-between h-full"
            >
              <span
                className="self-start uppercase tracking-[0.18em] text-[0.7rem] px-3 py-[6px]"
                style={{
                  fontFamily: 'var(--font-aileron)',
                  fontWeight: 600,
                  color: '#f8f8f8',
                  border: '1px solid rgba(255,255,255,0.55)',
                  borderRadius: '999px',
                }}
              >
                2017 — today
              </span>

              <div className="max-w-[440px]">
                <h3
                  className="leading-none text-[2.4rem] md:text-[2.8rem] lg:text-[3rem]"
                  style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
                >
                  Porto.
                </h3>
                <p
                  className="mt-4 md:mt-5 text-[0.95rem] md:text-[1rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: 'rgba(248,248,248,0.96)' }}
                >
                  In 2017 we relocated our activity to Porto, where we have centralized all our operations to this day. All these years of activity were fundamental to define our identity and our philosophy — essentially how we operate.
                </p>
              </div>
            </FrostedGlassCard>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
