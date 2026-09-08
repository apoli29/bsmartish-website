'use client'

import { LegalDoc, Section, P, UL, LI, A, DataTable } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const NT = '(abre num novo separador)'

function EnglishBody() {
  return (
    <>
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
              meantime you can reach us at <A href={`mailto:${E.email}`}>{E.email}</A> or{' '}
              <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
            </em>
          </P>
        )}
      </Section>

      <Section id="activity" heading="2. What we do">
        <P>
          BSMARTISH develops urban renovation projects and lets the resulting apartments directly,
          as owner, on a mid-term basis with a minimum stay of 30 days. We also manage and advise on
          renovation projects for third-party investors and property owners.
        </P>
        <P>
          We let our own properties. We do not act as an intermediary between third-party buyers,
          sellers, landlords or tenants, and we receive no commission for doing so, which is why
          real estate mediation licensing under Law 15/2013 does not apply to our activity.
        </P>
        <P>
          Because no stay is shorter than 30 days, our lettings fall outside the Local Accommodation
          (Alojamento Local) regime of Decree-Law 128/2014 and no RNAL registration is required.
        </P>
      </Section>

      <Section id="complaints" heading="3. Complaints">
        <P>
          If something goes wrong, please tell us first at <A href={`mailto:${E.email}`}>{E.email}</A> —
          most things are resolved that way, and quickly.
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
          In accordance with Article 18 of Law 144/2015, consumers may refer a dispute with us to an
          alternative dispute resolution body. The body with territorial competence for our area is:
        </P>
        <DataTable
          rows={[
            ['Entity', E.adrEntity.name],
            ['Address', E.adrEntity.address],
            ['Telephone', E.adrEntity.phone],
            ['Website', <A key="w" href={E.adrEntity.url} external>{E.adrEntity.url.replace('https://', '')}</A>],
          ]}
        />
        <P>
          More information about consumer arbitration in Portugal is available from the{' '}
          <A href="https://www.consumidor.gov.pt" external>Direção-Geral do Consumidor</A>.
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
    </>
  )
}

function CorpoPortugues() {
  return (
    <>
      <Section id="identificacao" heading="1. Quem explora este site">
        <DataTable
          rows={[
            ['Denominação social', E.legalName],
            ['Marca', E.tradingName],
            ['Sede social', E.address],
            ['NIPC / NIF', E.taxNumber],
            ['Número de IVA', E.taxNumber ? `PT${E.taxNumber}` : null],
            ['Registo comercial', E.registryOffice && E.registryNumber ? `${E.registryOffice}, n.º ${E.registryNumber}` : null],
            ['Capital social', E.shareCapital],
            ['Email', <A key="e" href={`mailto:${E.email}`}>{E.email}</A>],
            [
              'Telefone',
              <span key="p">
                <A href={`tel:${E.phoneHref}`}>{E.phone}</A>
                <br />
                <span style={{ fontSize: '0.85rem' }}>{E.phoneCostNote.pt}</span>
              </span>,
            ],
            ['Licença AMI (mediação imobiliária)', E.amiLicence],
            ['Registo de Alojamento Local (RNAL)', E.rnalNumber],
          ]}
        />
        {!E.legalName && (
          <P>
            <em>
              Os dados de registo da empresa estão a ser finalizados e serão aqui publicados.
              Entretanto pode contactar-nos através de{' '}
              <A href={`mailto:${E.email}`}>{E.email}</A> ou{' '}
              <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
            </em>
          </P>
        )}
      </Section>

      <Section id="atividade" heading="2. A nossa atividade">
        <P>
          A BSMARTISH desenvolve projetos de renovação urbana e arrenda diretamente, na qualidade de
          proprietária, os apartamentos daí resultantes, em regime de média duração, com uma estadia
          mínima de 30 dias. Gerimos também projetos de renovação para investidores e proprietários
          terceiros, prestando-lhes consultoria.
        </P>
        <P>
          Arrendamos imóveis próprios. Não intervimos como intermediários entre compradores,
          vendedores, senhorios ou inquilinos terceiros, nem recebemos qualquer comissão por isso,
          razão pela qual o licenciamento da atividade de mediação imobiliária previsto na Lei n.º
          15/2013 não se aplica à nossa atividade.
        </P>
        <P>
          Uma vez que nenhuma estadia é inferior a 30 dias, os nossos arrendamentos ficam fora do
          regime do Alojamento Local previsto no Decreto-Lei n.º 128/2014, não sendo exigível
          qualquer registo no RNAL.
        </P>
      </Section>

      <Section id="reclamacoes" heading="3. Reclamações">
        <P>
          Se algo correr mal, fale connosco primeiro através de{' '}
          <A href={`mailto:${E.email}`}>{E.email}</A> — a maioria das situações resolve-se assim, e
          depressa.
        </P>
        <P>
          Pode também recorrer ao livro de reclamações eletrónico, que chega diretamente à entidade
          competente:
        </P>
        <UL>
          <LI>
            <A href={E.complaintsBookUrl} external newTabLabel={NT}>
              Livro de Reclamações Eletrónico — livroreclamacoes.pt
            </A>
          </LI>
        </UL>
      </Section>

      <Section id="ral" heading="4. Resolução extrajudicial de litígios">
        <P>
          Nos termos do artigo 18.º da Lei n.º 144/2015, os consumidores podem submeter um litígio
          connosco a uma entidade de resolução alternativa de litígios. A entidade territorialmente
          competente para a nossa área é:
        </P>
        <DataTable
          rows={[
            ['Entidade', E.adrEntity.name],
            ['Morada', E.adrEntity.address],
            ['Telefone', E.adrEntity.phone],
            ['Sítio na Internet', <A key="w" href={E.adrEntity.url} external newTabLabel={NT}>{E.adrEntity.url.replace('https://', '')}</A>],
          ]}
        />
        <P>
          Mais informação sobre arbitragem de consumo em Portugal está disponível junto da{' '}
          <A href="https://www.consumidor.gov.pt" external newTabLabel={NT}>
            Direção-Geral do Consumidor
          </A>
          .
        </P>
        <P>
          <em>
            Nota: a plataforma de Resolução de Litígios em Linha (RLL) da Comissão Europeia foi
            definitivamente desativada em 20 de julho de 2025 pelo Regulamento (UE) 2024/3228. Os
            sites não devem continuar a remeter para ela.
          </em>
        </P>
      </Section>

      <Section id="propriedade-intelectual" heading="5. Propriedade intelectual">
        <P>
          O nome BSMARTISH, o logótipo, os textos, as fotografias dos nossos imóveis e projetos e o
          design deste site pertencem à {E.legalName || E.tradingName} ou são utilizados ao abrigo de
          licença. Não podem ser copiados, reproduzidos ou republicados sem a nossa autorização
          escrita.
        </P>
        <P>
          As denominações e logótipos Idealista, Airbnb, Spotahome e Flatio são marcas dos
          respetivos titulares. Aparecem aqui apenas para indicar onde os nossos imóveis podem ser
          reservados. A sua utilização não implica qualquer aprovação, parceria ou afiliação para
          além da colocação dos imóveis nessas plataformas.
        </P>
      </Section>

      <Section id="lei-aplicavel" heading="6. Lei aplicável">
        <P>
          Este site e as presentes informações regem-se pela lei portuguesa. Nada aqui previsto
          afasta a proteção que a legislação de consumo imperativa do seu país de residência lhe
          confere.
        </P>
      </Section>
    </>
  )
}

export default function LegalNoticeDoc() {
  return (
    <LegalDoc
      lastUpdated={LEGAL_LAST_UPDATED}
      en={{
        eyebrow: 'Legal',
        title: 'Legal Notice',
        intro:
          'Identification of the business behind this website, published in accordance with Article 10 of Decree-Law 7/2004 of 7 January (the Portuguese electronic commerce law).',
        body: <EnglishBody />,
      }}
      pt={{
        eyebrow: 'Informação Legal',
        title: 'Informação Legal',
        intro:
          'Identificação da empresa responsável por este sítio na Internet, publicada nos termos do artigo 10.º do Decreto-Lei n.º 7/2004, de 7 de janeiro (lei do comércio eletrónico).',
        body: <CorpoPortugues />,
      }}
    />
  )
}
