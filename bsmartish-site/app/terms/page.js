import { LegalDoc, Section, P, UL, LI, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const title = 'Terms & Conditions - BSMARTISH'
const description =
  'The terms on which BSMARTISH provides this website, what the property information means, and how bookings, deposits and cancellations work.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/terms',
  },
}

const operator = E.legalName || E.tradingName

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`These terms govern your use of bsmartish.com. They are not your rental agreement: renting one of our apartments is done through a separate written contract, or through the booking platform you book on. Where those documents say something different from this page, they win.`}
      lastUpdated={LEGAL_LAST_UPDATED.en}
    >
      <Section id="who" heading="1. Who you are dealing with">
        <P>
          This website is operated by {operator}. Full registration details are on our{' '}
          <A href="/legal-notice">Legal Notice</A> page. You can reach us at{' '}
          <A href={`mailto:${E.email}`}>{E.email}</A> or{' '}
          <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
        </P>
      </Section>

      <Section id="purpose" heading="2. What this website is">
        <P>
          bsmartish.com is an informational showcase. It presents our urban renovation work and
          the apartments we currently offer for mid-term rental. You cannot create an account,
          make a payment or conclude a rental contract on this site. Every &ldquo;Book&rdquo; link
          takes you to an external platform, or to us by email or telephone.
        </P>
      </Section>

      <Section id="accuracy" heading="3. Property information and prices">
        <P>
          We take care to keep property descriptions, photographs, floor areas, availability and
          prices accurate and up to date. Even so, this information is an invitation to enquire,
          not a binding offer. Availability and prices can change, and details are confirmed to
          you in writing before any contract is signed.
        </P>
        <P>
          Prices shown on property pages are monthly rent in euros. Residential letting is exempt
          from VAT under Article 9(29) of the Portuguese VAT Code, so no VAT is added. Where a
          property page states a one-off administrative fee, a security deposit, or a cap on the
          utilities included, those amounts are stated on that page and are payable in addition to
          the monthly rent. We will always set out the full cost in writing before you commit to
          anything.
        </P>
        <P>
          Photographs show the actual property unless they are marked otherwise. Photographs of
          completed renovation projects illustrate our work generally and are not offers of those
          specific properties.
        </P>
        <P>
          If an obvious pricing or description error appears on the site, we are not obliged to
          honour it; we will tell you promptly and you are free to walk away.
        </P>
      </Section>

      <Section id="booking" heading="4. Booking, deposits and cancellation">
        <P>
          Because no booking is concluded on this website, the cancellation and refund rules that
          apply to you are the ones in the channel you actually book through:
        </P>
        <UL>
          <LI>
            <strong>If you book through Idealista, Airbnb, Spotahome or Flatio</strong>, that
            platform&rsquo;s cancellation and refund policy applies, alongside the specific
            cancellation terms shown on the listing. Read them before you confirm.
          </LI>
          <LI>
            <strong>If you rent directly from us</strong>, the cancellation and refund terms are in
            the written rental contract we send you before signature. Nothing is due until that
            contract exists.
          </LI>
        </UL>
        <P>
          For our own direct lettings, and unless the contract says otherwise: the security deposit
          is returned within 30 days of departure, less any amount properly due for damage beyond
          normal wear and tear or for unpaid sums, with a written breakdown of any deduction. The
          administrative fee stated on the property page covers preparing the contract and setting
          up the tenancy, is charged once at the start, and is not refundable once that work has
          been done.
        </P>
        <P>
          <strong>A note on the 14-day cooling-off period.</strong> The right of withdrawal for
          distance contracts under Decree-Law 24/2014 does not apply to contracts for the
          provision of accommodation for a specified date or period (Article 17(1)(l)), which is
          what a fixed-term rental is. That is a statutory exception, not something we impose. Your
          rights under Portuguese residential tenancy law are unaffected and are set out in your
          contract.
        </P>
      </Section>

      <Section id="use" heading="5. Using the site">
        <P>You agree not to:</P>
        <UL>
          <LI>copy, scrape or republish our photographs, texts or design without permission;</LI>
          <LI>use the site for anything unlawful, or in a way that damages or overloads it;</LI>
          <LI>present yourself as connected to BSMARTISH when you are not.</LI>
        </UL>
        <P>
          Ownership of the site content is covered in our{' '}
          <A href="/legal-notice">Legal Notice</A>.
        </P>
      </Section>

      <Section id="external" heading="6. External links">
        <P>
          We link to booking platforms and to map services. We do not control those sites and are
          not responsible for their content, their availability or their terms. Following such a
          link means their terms and privacy policies apply to you from that point.
        </P>
      </Section>

      <Section id="liability" heading="7. Liability">
        <P>
          We provide this website with reasonable care but cannot guarantee it will always be
          available, uninterrupted or free of errors. To the extent Portuguese law allows, we are
          not liable for indirect or consequential loss arising from using — or being unable to use
          — this website.
        </P>
        <P>
          Nothing in these terms limits our liability for death or personal injury caused by our
          negligence, for fraud, or for anything else that cannot lawfully be limited. If you are a
          consumer, your mandatory statutory rights are not affected by anything on this page.
        </P>
      </Section>

      <Section id="privacy" heading="8. Privacy and cookies">
        <P>
          How we handle personal data is set out in our{' '}
          <A href="/privacy-policy">Privacy Policy</A>, and what is stored on your device in our{' '}
          <A href="/cookie-policy">Cookie Policy</A>.
        </P>
      </Section>

      <Section id="complaints" heading="9. Complaints and dispute resolution">
        <P>
          Please contact us first at <A href={`mailto:${E.email}`}>{E.email}</A>. You may also use
          the{' '}
          <A href={E.complaintsBookUrl} external>
            Livro de Reclamações Eletrónico
          </A>
          , and consumers may refer a dispute to{' '}
          <A href={E.adrEntity.url} external>
            {E.adrEntity.name}
          </A>
          . Details are on our <A href="/legal-notice">Legal Notice</A> page.
        </P>
      </Section>

      <Section id="law" heading="10. Changes, applicable law and courts">
        <P>
          We may update these terms; the version published here when you use the site is the one
          that applies, and the date at the top tells you when it last changed.
        </P>
        <P>
          Portuguese law governs these terms. Disputes fall to the Portuguese courts, without
          prejudice to a consumer&rsquo;s right to bring proceedings in the courts of their own
          country of residence where EU law so provides.
        </P>
      </Section>
    </LegalDoc>
  )
}
