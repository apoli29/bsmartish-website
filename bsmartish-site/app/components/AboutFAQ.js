'use client'

import { useState } from 'react'
import FadeIn from '@/app/components/FadeIn'

const faqs = [
  {
    q: 'What types of properties does BSMARTISH renovate?',
    a: 'We focus on urban properties suited to midterm residential rental, typically apartments and small buildings in central locations. We renovate both for our own portfolio and on behalf of investors and owners who commission us to develop their projects.',
  },
  {
    q: 'What is a mid-term rent and who is it for?',
    a: 'Midterm rentals cover stays typically ranging from one to twelve months. These are designed for relocating professionals, families in transition, digital nomads, or long term travelers seeking a fully furnished home ready to move into, with greater flexibility than a traditional long term lease.',
  },
  {
    q: 'Can I commission a renovation project for my own property?',
    a: 'Yes. We work with property owners who want to renovate their building to a high standard, whether to live in it, to rent it, or to sell it. We bring the same procedures and standards we apply to our own portfolio.',
  },
  {
    q: 'Where are your projects located?',
    a: 'Today our operations are centralized in Porto, where most of our active properties and ongoing projects are located.',
  },
  {
    q: 'How long does a typical urban renovation project take?',
    a: 'Timelines depend on the scope, the building, and any licensing involved. As a general reference, a full apartment renovation typically takes between four and nine months from project start to handover. We share a realistic schedule before any work begins.',
  },
  {
    q: 'How can I get in touch about a property or a partnership?',
    a: 'The fastest way is the contact section of this site. Tell us briefly whether you are looking to live in one of our properties, to invest, or to commission a renovation, and we will get back to you with the right next step.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <li
      className="block"
      style={{ borderBottom: '1px solid #e4e4e4' }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left transition-colors hover:opacity-80"
      >
        <span
          className="text-[1.05rem] md:text-[1.15rem] lg:text-[1.2rem] leading-snug"
          style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#202831' }}
        >
          {q}
        </span>

        {/* Plus / Cross icon */}
        <span
          aria-hidden="true"
          className="relative flex-shrink-0 mt-[6px] md:mt-[8px]"
          style={{ width: '18px', height: '18px' }}
        >
          <span
            className="absolute left-0 top-1/2 block w-full"
            style={{
              height: '1.5px',
              backgroundColor: '#6b87a4',
              transform: 'translateY(-50%)',
            }}
          />
          <span
            className="absolute left-1/2 top-0 block h-full transition-transform duration-300"
            style={{
              width: '1.5px',
              backgroundColor: '#6b87a4',
              transform: isOpen ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)',
            }}
          />
        </span>
      </button>

      {/* Animated answer panel — grid-template-rows trick (no height animation) */}
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p
            className="pb-6 md:pb-8 pr-10 md:pr-16 text-[clamp(0.98rem,2.46vw,1.06rem)] leading-[1.7] max-w-[65ch] text-justify"
            style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#75797c', hyphens: 'auto' }}
          >
            {a}
          </p>
        </div>
      </div>
    </li>
  )
}

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="about-faq"
      className="w-full"
      style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e4e4e4' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 lg:gap-20">

          {/* Left column — heading */}
          <FadeIn>
            <p
              className="mb-4 md:mb-5 uppercase tracking-[0.15em] text-[0.7rem]"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 600, color: '#6b87a4' }}
            >
              Questions
            </p>
            <h2
              className="text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] max-w-[420px]"
              style={{ fontFamily: 'var(--font-radnika)', fontWeight: 500, color: '#6b87a4' }}
            >
              Frequently asked questions.
            </h2>

            <p
              className="mt-6 max-w-[380px] text-[clamp(0.98rem,2.46vw,1.06rem)] leading-relaxed text-justify"
              style={{ fontFamily: 'var(--font-aileron)', fontWeight: 400, color: '#75797c', hyphens: 'auto' }}
            >
              A few things people often ask us. If your question is not here, write to us directly and we will get back to you.
            </p>
          </FadeIn>

          {/* Right column — accordion */}
          <FadeIn delay={150}>
            <ul style={{ borderTop: '1px solid #e4e4e4' }}>
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </ul>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
