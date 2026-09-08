import { LegalDoc, Section, P, UL, LI, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const title = 'Privacy Policy - BSMARTISH'
const description =
  'How BSMARTISH collects, uses and protects personal data on bsmartish.com, and the rights you have under the GDPR.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/privacy-policy',
  },
}

const controller = E.legalName || E.tradingName

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`This policy explains what personal data ${controller} collects when you visit bsmartish.com, why we collect it, how long we keep it and what rights you have. It is written to meet Regulation (EU) 2016/679 (GDPR) and Portuguese Law 58/2019.`}
      lastUpdated={LEGAL_LAST_UPDATED.en}
    >
      <Section id="controller" heading="1. Who is responsible for your data">
        <P>
          The data controller is {controller}
          {E.address ? `, with registered office at ${E.address}` : ''}
          {E.taxNumber ? `, tax number ${E.taxNumber}` : ''}.
        </P>
        <P>
          For anything relating to this policy or to your personal data, write to{' '}
          <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
        <P>
          We have not appointed a Data Protection Officer, because our processing does not meet
          any of the conditions in Article 37 of the GDPR that would make one mandatory. The
          address above is our contact point for all data protection matters.
        </P>
      </Section>

      <Section id="what" heading="2. What we collect, and why">
        <P>
          This website has no account system, no shopping basket and no contact form. We do not
          ask you to type anything into it. There are three narrow ways your data is processed:
        </P>
        <UL>
          <LI>
            <strong>Aggregated audience measurement.</strong> We use Vercel Web Analytics and
            Vercel Speed Insights to count page views and measure loading performance. These
            tools do not use cookies and do not store an identifier on your device. They derive a
            non-reversible, daily-rotating hash from your IP address and browser so the same
            visitor is not counted twice on the same day, and they record coarse information such
            as the page visited, the referring site, the country, and the device and browser type.
            The result is statistics, not a profile: we cannot single you out, and we cannot link
            a visit to you. Legal basis: our legitimate interest in knowing whether our website
            works and is being found (Article 6(1)(f) GDPR).
          </LI>
          <LI>
            <strong>Server and security logs.</strong> Our hosting provider records standard
            technical request logs, including IP addresses, which are needed to serve the site and
            to defend it against abuse. Legal basis: legitimate interest (Article 6(1)(f) GDPR).
          </LI>
          <LI>
            <strong>Maps you choose to load.</strong> Each property page contains a Google Maps
            location map that is <strong>not</strong> loaded until you click it. See section 4.
          </LI>
        </UL>
        <P>
          If you contact us by email or telephone, we process the details you send us — your name,
          your contact details and whatever you tell us — in order to answer you and, if it goes
          that way, to prepare and manage a rental or a project. Legal basis: steps taken at your
          request before entering into a contract, and performance of that contract
          (Article 6(1)(b) GDPR), and our legitimate interest in answering enquiries.
        </P>
      </Section>

      <Section id="not" heading="3. What we do not do">
        <UL>
          <LI>We do not sell, rent or trade personal data. Ever.</LI>
          <LI>We do not use advertising, retargeting or social media tracking pixels.</LI>
          <LI>We do not build profiles and we do not make automated decisions about you.</LI>
          <LI>We do not knowingly collect data from children.</LI>
        </UL>
      </Section>

      <Section id="third-parties" heading="4. Third parties who may receive data">
        <UL>
          <LI>
            <strong>Vercel Inc.</strong> — hosting, web analytics and performance measurement,
            acting as our processor.
          </LI>
          <LI>
            <strong>Google Ireland Limited</strong> — the location maps on property pages. These
            maps are blocked by default. Nothing is sent to Google until you click &ldquo;Load
            map&rdquo;; once you do, Google receives your IP address and may set cookies in your
            browser under its own privacy policy. Legal basis: your consent
            (Article 6(1)(a) GDPR), which you give by clicking, and which you can withdraw at any
            time by reloading the page without clicking.
          </LI>
          <LI>
            <strong>Booking platforms</strong> — Idealista, Airbnb, Spotahome and Flatio. When you
            follow one of our links to those sites you leave bsmartish.com and their own privacy
            policies apply. We do not pass them any data about you; they simply see that you
            arrived from our site.
          </LI>
        </UL>
        <P>
          Some of these providers are established outside the European Economic Area or transfer
          data to the United States. Where that happens the transfer is covered by the European
          Commission&rsquo;s Standard Contractual Clauses and, where applicable, by the
          EU&ndash;US Data Privacy Framework.
        </P>
      </Section>

      <Section id="retention" heading="5. How long we keep it">
        <UL>
          <LI>Aggregated analytics statistics: retained by Vercel for up to 12 months.</LI>
          <LI>Server logs: typically 30 days.</LI>
          <LI>
            Email correspondence: for as long as needed to deal with your enquiry, and afterwards
            only where we have to keep it — Portuguese tax and accounting law requires supporting
            documents relating to a contract to be kept for 10 years.
          </LI>
          <LI>
            Your language preference: stored only in your own browser, until you clear your
            browser data. It never reaches us.
          </LI>
        </UL>
      </Section>

      <Section id="rights" heading="6. Your rights">
        <P>Under the GDPR you can ask us to:</P>
        <UL>
          <LI>confirm whether we hold data about you, and give you a copy (access);</LI>
          <LI>correct data that is wrong or incomplete (rectification);</LI>
          <LI>delete data we no longer need (erasure);</LI>
          <LI>restrict how we use it, while a dispute is resolved;</LI>
          <LI>send your data to another provider in a machine-readable format (portability);</LI>
          <LI>
            object to processing we base on legitimate interest — including our audience
            measurement.
          </LI>
        </UL>
        <P>
          Where we rely on your consent, you can withdraw it at any time; that does not affect
          anything done before you withdrew it.
        </P>
        <P>
          Write to <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A> and we will answer
          within one month. There is no charge. If you are not satisfied with our answer you can
          complain to the{' '}
          <A href={E.dpa.url} external>
            {E.dpa.name}
          </A>
          , the Portuguese supervisory authority.
        </P>
      </Section>

      <Section id="security" heading="7. Security">
        <P>
          The site is served over HTTPS only. Access to the mailbox and hosting account is limited
          to the people who need it and protected by strong authentication. No system is perfectly
          secure, but if a breach ever affected your data and posed a high risk to you, we would
          tell you and notify the supervisory authority as the GDPR requires.
        </P>
      </Section>

      <Section id="changes" heading="8. Changes to this policy">
        <P>
          If we change how we handle personal data we will update this page and change the date at
          the top. Material changes will be highlighted on the site.
        </P>
      </Section>
    </LegalDoc>
  )
}
