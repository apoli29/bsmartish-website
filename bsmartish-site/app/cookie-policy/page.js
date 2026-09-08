import { LegalDoc, Section, P, UL, LI, A } from '@/app/components/legal/LegalDoc'
import { LEGAL_LAST_UPDATED, legalEntity as E } from '@/app/lib/legalEntity'

const title = 'Cookie Policy - BSMARTISH'
const description =
  'What bsmartish.com stores on your device: one language preference, no tracking cookies, and third-party maps that only load if you ask for them.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/cookie-policy',
  },
}

const cellHead = {
  fontWeight: 600,
  color: '#202831',
  textAlign: 'left',
  padding: '10px 24px 10px 0',
  borderBottom: '1px solid #cfd4d9',
  whiteSpace: 'nowrap',
}

const cell = {
  padding: '12px 24px 12px 0',
  borderBottom: '1px solid #e4e4e4',
  verticalAlign: 'top',
}

export default function CookiePolicyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Cookie Policy"
      intro="The short version: this website sets no advertising cookies, no tracking cookies and no analytics cookies. It stores exactly one thing on your device — the language you picked — and it blocks third-party maps until you ask for them. That is why you are not seeing a cookie banner."
      lastUpdated={LEGAL_LAST_UPDATED.en}
    >
      <Section id="why-no-banner" heading="1. Why there is no cookie banner">
        <P>
          Under Article 5(3) of the ePrivacy Directive, implemented in Portugal by Article 5 of
          Law 41/2004, consent is needed before storing information on your device or reading
          information already stored there — <em>unless</em> that storage is strictly necessary to
          provide the service you asked for. A banner is not a legal formality to be shown
          regardless; it is required only when something non-essential is being stored.
        </P>
        <P>
          We deliberately built the site so that nothing non-essential is stored without you
          asking. That means no banner is needed, and you get to read the site without dismissing
          a pop-up. If we ever add anything that does require consent, a consent tool will appear
          here first.
        </P>
      </Section>

      <Section id="what-we-store" heading="2. What is actually stored on your device">
        <div className="overflow-x-auto mb-4">
          <table style={{ borderCollapse: 'collapse', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <thead>
              <tr>
                <th scope="col" style={cellHead}>Name</th>
                <th scope="col" style={cellHead}>Type</th>
                <th scope="col" style={cellHead}>Purpose</th>
                <th scope="col" style={cellHead}>Expires</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={cell}><code>bsmartish-lang</code></td>
                <td style={cell}>Local storage (not a cookie)</td>
                <td style={cell}>
                  Remembers whether you chose English or Portuguese, so the site does not reset
                  every time you open a page. Set only when you click the language switch.
                </td>
                <td style={cell}>Until you clear your browser data</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          That is the complete list. This entry is a user-preference store set as a direct result
          of an action you took, which is one of the cases the ePrivacy rules exempt from consent.
          It stays in your browser, is never transmitted to us, and contains no identifier.
        </P>
      </Section>

      <Section id="analytics" heading="3. Analytics without cookies">
        <P>
          We measure how many people visit which pages using Vercel Web Analytics and Vercel Speed
          Insights. Unlike Google Analytics, these do not write a cookie or any other identifier to
          your device, so no consent is required for them. They produce aggregate counts only. How
          they work and how to object is described in our{' '}
          <A href="/privacy-policy">Privacy Policy</A>.
        </P>
      </Section>

      <Section id="maps" heading="4. Google Maps — blocked until you click">
        <P>
          Each property page shows the neighbourhood on a Google map. Embedding a Google map
          normally means your browser contacts Google as soon as the page opens, which lets Google
          set its own cookies before you have had any say in it.
        </P>
        <P>
          So we do not embed it. The map area shows a placeholder with a &ldquo;Load map&rdquo;
          button. Nothing is requested from Google, and no Google cookie can be set, until you
          press that button. If you press it, you are consenting to that one map load: Google
          receives your IP address and may store cookies under{' '}
          <A href="https://policies.google.com/privacy" external>
            Google&rsquo;s privacy policy
          </A>
          . Your choice is not remembered, so simply reloading the page takes you back to the
          blocked state.
        </P>
        <P>
          You can always look the address up in your own maps application instead — the address is
          written out on the page.
        </P>
      </Section>

      <Section id="external" heading="5. Links to booking platforms">
        <P>
          Idealista, Airbnb, Spotahome and Flatio are links, not embeds. Nothing from those sites
          runs on bsmartish.com. Their cookies only come into play once you click through and land
          on their site, under their own policies.
        </P>
      </Section>

      <Section id="control" heading="6. How to remove what is stored">
        <UL>
          <LI>
            To clear the saved language preference, clear site data for bsmartish.com in your
            browser settings, or use a private window.
          </LI>
          <LI>
            To make sure no Google map ever loads, simply do not press &ldquo;Load map&rdquo;.
          </LI>
          <LI>
            Every major browser also lets you block all cookies and local storage by default. The
            site will still work; it will just start in English each time.
          </LI>
        </UL>
      </Section>

      <Section id="contact" heading="7. Questions">
        <P>
          Write to <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
      </Section>
    </LegalDoc>
  )
}
