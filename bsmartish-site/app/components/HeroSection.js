'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation, useLocale } from '@/app/i18n-provider'
import { pageHref } from '@/app/lib/routes'

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
  const { t } = useTranslation('hero')
  const locale = useLocale()
  return (
    <section className="relative min-h-screen flex flex-col justify-center">

      {/* Imagem de fundo — candidata a LCP. next/image em vez de background-image
          em CSS: o browser descobre-a logo no HTML e recebe-a redimensionada ao
          ecrã (o original tem 5349 px). fetchPriority="high" põe-na à frente do
          JavaScript na fila de rede; sem isso, em 4G lento, ficava para o fim. */}
      <Image
        src="/images/website.images/Home/home.image.sec1.webp"
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay Deep Urban */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(32, 40, 49, 0.68)' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-[110px] md:pt-[130px] lg:pt-[150px] pb-20">

        {/* Entrada em CSS e não com <FadeIn>: o FadeIn esconde o texto quando o
            JavaScript arranca e volta a mostrá-lo, o que num telemóvel lento fazia
            o título piscar e atrasava o LCP. A animação CSS corre desde a
            primeira pintura, sem depender do JavaScript. */}
        {/* O título (elemento LCP) sobe sem desvanecer: o Chrome só conta um
            elemento para o LCP quando deixa de ter opacidade 0. */}
        <div className="hero-rise hero-rise--solid" style={{ '--d': '100ms' }}>
          <h1
            className="text-[#F8F8F8] leading-[1.1] max-w-2xl mb-[21.6px] md:mb-6"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, fontSize: 'clamp(2.1rem, 6vw, 3.5rem)' }}
          >
            {t('headline').includes('for 20 years.')
                ? <>{t('headline').replace(' for 20 years.', '')}<br />{'for 20 years.'}</>
                : t('headline')
              }
          </h1>
        </div>

        <div className="hero-rise" style={{ '--d': '250ms' }}>
          <p
            className="text-[#F8F8F8] max-w-xl mb-10 leading-relaxed text-[1rem] md:text-[1.05rem] lg:text-[1.1rem]"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, opacity: 0.9 }}
          >
            {t('paragraph')}
          </p>
        </div>

        <div className="hero-rise" style={{ '--d': '400ms' }}>
          <div className="flex flex-wrap gap-3">
            <Link
              href={pageHref('about', locale)}
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
              href={pageHref('rentals', locale)}
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
        </div>

      </div>
    </section>
  )
}
