import { LegalDoc, Section, P, UL, LI, A, DataTable } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const title = 'Legal Notice - BSMARTISH'
const description =
  'Company identification, registration details, licences and consumer complaint channels for BSMARTISH.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/legal-notice' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'BSMARTISH',
    locale: 'en_US',
    title,
    description,
    url: '/legal-notice',
  },
}

export default function LegalNoticePage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Legal Notice"
      intro="Identification of the business behind this website, published in accordance with Article 10 of Decree-Law 7/2004 of 7 January (the Portuguese electronic commerce law)."
      lastUpdated={LEGAL_LAST_UPDATED.en}
    >
      <Section id="identification" heading="1. Who operates this website">
        <DataTable
          rows={[
            ['Company', E.legalName],
            ['Trading as', E.tradingName],
            ['Registered office', E.address],
            ['Tax number (NIPC/NIF)', E.taxNumber],
            ['VAT number', E.taxNumber ? `PT${E.taxNumber}` : null],
            ['Commercial registry', E.registryOffice && E.registryNumber ? `${E.registryOffice}, no. ${E.registryNumber}` : null],
            ['Share capital', E.shareCapital],
            ['Email', <A key="e" href={`mailto:${E.email}`}>{E.email}</A>],
            [
              'Telephone',
              <span key="p">
                <A href={`tel:${E.phoneHref}`}>{E.phone}</A>
                <br />
                <span style={{ fontSize: '0.85rem' }}>{E.phoneCostNote.en}</span>
              </span>,
            ],
            ['AMI licence (real estate mediation)', E.amiLicence],
            ['Local Accommodation registration (RNAL)', E.rnalNumber],
          ]}
        />
        {!E.legalName && (
          <P>
            <em>
              Company registration details are being finalised and will be published here. In the
              meantime you can reach us at{' '}
              <A href={`mailto:${E.email}`}>{E.email}</A> or{' '}
              <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
            </em>
          </P>
        )}
      </Section>

      <Section id="activity" heading="2. What we do">
        <P>
          BSMARTISH develops urban renovation projects and lets the resulting apartments directly,
          as owner, on a mid-term basis. We also manage and advise on renovation projects for
          third-party investors and property owners.
        </P>
        <P>
          We let our own properties. We do not act as an intermediary between third-party buyers,
          sellers, landlords or tenants, so real estate mediation licensing under Law 15/2013 does
          not apply to that activity.
          {E.amiLicence ? ` Where we do carry out mediation, we do so under AMI licence ${E.amiLicence}.` : ''}
        </P>
      </Section>

      <Section id="complaints" heading="3. Complaints">
        <P>
          If something goes wrong, please tell us first at{' '}
          <A href={`mailto:${E.email}`}>{E.email}</A> — most things are resolved that way, and
          quickly.
        </P>
        <P>
          You can also use the Portuguese electronic complaints book, which reaches the relevant
          authority directly:
        </P>
        <UL>
          <LI>
            <A href={E.complaintsBookUrl} external>
              Livro de Reclamações Eletrónico — livroreclamacoes.pt
            </A>
          </LI>
        </UL>
      </Section>

      <Section id="adr" heading="4. Out-of-court dispute resolution">
        <P>
          In accordance with Article 18 of Law 144/2015, consumers may refer a dispute with us to
          an alternative dispute resolution body. The body with territorial competence for our
          area is:
        </P>
        <DataTable
          rows={[
            ['Entity', E.adrEntity.name],
            ['Address', E.adrEntity.address],
            ['Telephone', E.adrEntity.phone],
            [
              'Website',
              <A key="w" href={E.adrEntity.url} external>
                {E.adrEntity.url.replace('https://', '')}
              </A>,
            ],
          ]}
        />
        <P>
          More information about consumer arbitration in Portugal is available from the{' '}
          <A href="https://www.consumidor.gov.pt" external>
            Direção-Geral do Consumidor
          </A>
          .
        </P>
        <P>
          <em>
            Note: the European Commission&rsquo;s Online Dispute Resolution (ODR) platform was
            permanently discontinued on 20 July 2025 by Regulation (EU) 2024/3228. Websites should
            no longer link to it.
          </em>
        </P>
      </Section>

      <Section id="ip" heading="5. Intellectual property">
        <P>
          The name BSMARTISH, the logo, the texts, the photographs of our properties and projects,
          and the design of this website belong to {E.legalName || E.tradingName} or are used under
          licence. You may not copy, reproduce or republish them without our written permission.
        </P>
        <P>
          The Idealista, Airbnb, Spotahome and Flatio names and logos are trademarks of their
          respective owners. They appear here only to indicate where our properties can be booked.
          Their use does not imply any endorsement, partnership or affiliation beyond our listing
          the properties on those platforms.
        </P>
      </Section>

      <Section id="jurisdiction" heading="6. Applicable law">
        <P>
          This website and these notices are governed by Portuguese law. Nothing here removes the
          protection that mandatory consumer law in your country of residence gives you.
        </P>
      </Section>
    </LegalDoc>
  )
}
