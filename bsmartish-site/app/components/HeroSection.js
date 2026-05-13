'use client'

import Link from 'next/link'
import FadeIn from '@/app/components/FadeIn'
import { useTranslations } from 'next-intl'

function handleSweep(e) {
  const el = e.currentTarget
  if (el.classList.contains('sweeping')) return
  el.classList.add('sweeping')
  const onEnd = (ev) => {
    if (ev.animationName !== 'light-sweep-full') return
    el.classList.remove('sweeping')
    el.removeEventListener('animationend', onEnd)
  }
  el.addEventListener('animationend', onEnd)
}

export default function HeroSection() {
  const t = useTranslations('hero')
  return (
    <section className="relative min-h-screen flex flex-col justify-center">

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/website.images/Home/home.image.sec1.webp')" }}
      />

      {/* Overlay Deep Urban */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(32, 40, 49, 0.68)' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-[110px] md:pt-[130px] lg:pt-[150px] pb-20">

        <FadeIn delay={100}>
          <h1
            className="text-[#F8F8F8] leading-[1.1] max-w-2xl mb-[21.6px] md:mb-6"
            style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, fontSize: 'clamp(2.1rem, 6vw, 3.5rem)' }}
          >
            {t('headline').includes('for 20 years.')
                ? <>{t('headline').replace(' for 20 years.', '')}<br />{'for 20 years.'}</>
                : t('headline')
              }
          </h1>
        </FadeIn>

        <FadeIn delay={250}>
          <p
            className="text-[#F8F8F8] max-w-xl mb-10 leading-relaxed text-[1rem] md:text-[1.05rem] lg:text-[1.1rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, opacity: 0.9 }}
          >
            {t('paragraph')}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="px-7 py-3 text-[#F8F8F8] rounded text-[0.8rem] uppercase tracking-[0.1em] overflow-hidden relative btn-sweep" onMouseEnter={handleSweep}
              style={{
                border: '1px solid rgba(248,248,248,0.55)',
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
              }}
            >
              {t('button1')}
            </Link>
            <Link
              href="/mid-term-rentals-in-porto"
              className="px-7 py-3 text-[#F8F8F8] rounded text-[0.8rem] uppercase tracking-[0.1em] overflow-hidden relative btn-sweep" onMouseEnter={handleSweep}
              style={{
                backgroundColor: '#202831',
                fontFamily: 'var(--font-aileron)',
                fontWeight: 600,
              }}
            >
              {t('button2')}
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
