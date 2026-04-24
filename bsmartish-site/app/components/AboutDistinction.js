import FadeIn from '@/app/components/FadeIn'
import { FrostedGlassCard } from '@/app/components/ui/interactive-frosted-glass-card'

export default function AboutDistinction() {
  return (
    <section
      id="about-distinction"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-14 md:pt-18 lg:pt-22 pb-0">

        <FadeIn>
          <FrostedGlassCard
            className="w-full min-h-[480px] md:min-h-[540px] lg:min-h-[600px]"
            image="/images/Website.images/About us/photo6.webp"
            imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
            imagePosition="center 62%"
            overlayOpacity={0.72}
            contentClassName="p-8 md:p-12 lg:p-16 flex flex-col justify-end h-full"
          >
            <p
              className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#f8f8f8' }}
            >
              What Distinguishes Us
            </p>

            <h2
              className="leading-[1.1] text-[2rem] md:text-[2.6rem] lg:text-[3.1rem] max-w-[820px]"
              style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#f8f8f8' }}
            >
              Specialists, by trajectory.
            </h2>

            <p
              className="mt-5 md:mt-6 max-w-[680px] text-[0.98rem] md:text-[1.05rem] lg:text-[1.1rem] leading-[1.7]"
              style={{
                fontFamily: 'var(--font-aileron)',
                fontWeight: 400,
                color: 'rgba(248,248,248,0.96)',
              }}
            >
              Our trajectory sets us apart, positioning us as urban renovation specialists with deep niche expertise. We are uniquely capable of developing complex, reliable, and high-standard real estate projects across various sectors — through the application of exceptional and efficient procedures that consistently guarantee the best results.
            </p>
          </FrostedGlassCard>
        </FadeIn>

      </div>
    </section>
  )
}
