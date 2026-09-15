'use client'

// Documento 02 — INFORMAÇÃO LEGAL / LEGAL INFORMATION.
// Texto PT reproduzido na íntegra a partir do documento fornecido pela empresa
// (versão setembro de 2026). Tradução EN fornecida pelo advogado no mesmo
// documento. NÃO ALTERAR a redação, NÃO ACRESCENTAR secções.
// A única intervenção são ligações (mailto/tel) colocadas sobre texto que já
// existia no documento.

import { LegalDoc, Section, P, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

// ─── Secções em português ────────────────────────────────────────────────────

function PtSections() {
  return (
    <>
      <Section id="titular" heading="1. Titular do website">
        <P>
          Os websites <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> e{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A> são explorados pela
          Neptunevictory, Lda., pessoa coletiva e matrícula n.º 514 177 152, com sede na
          Alameda da Granja 66, 4425-093 Maia, Portugal, com o capital social de €5.000.
        </P>
        <P>
          BSMARTISH é a marca utilizada pela Neptunevictory, Lda. na apresentação dos seus
          projetos de reabilitação urbana e dos imóveis que disponibiliza para arrendamento
          temporário.
        </P>
      </Section>

      <Section id="contactos" heading="2. Contactos">
        <P>
          Email geral:{' '}
          <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A>
          <br />
          Telefone:{' '}
          <A href={`tel:${E.phoneHref}`}>+351 936 920 210</A>
          <br />
          Contacto para proteção de dados pessoais e exercício de direitos:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
        <P>
          Morada para comunicações:
          <br />
          Neptunevictory, Lda.
          <br />
          Alameda da Granja 66
          <br />
          4425-093 Maia
          <br />
          Portugal
        </P>
      </Section>

      <Section id="objeto" heading="3. Objeto dos websites">
        <P>
          Os websites{' '}
          <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> e{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A> disponibilizam
          informação institucional sobre a BSMARTISH, os seus projetos de reabilitação urbana e
          os imóveis próprios disponibilizados para arrendamento temporário ou de média duração.
        </P>
        <P>
          Os websites têm caráter exclusivamente informativo. Não permitem efetuar reservas,
          celebrar contratos ou realizar pagamentos online.
        </P>
        <P>
          A apresentação de um imóvel no website não constitui uma proposta contratual
          vinculativa. A disponibilidade, o preço, a duração, os serviços incluídos e as
          restantes condições aplicáveis são confirmados diretamente com o interessado antes da
          celebração de qualquer contrato.
        </P>
        <P>
          Os arrendamentos são formalizados através de contrato próprio, celebrado diretamente
          entre as partes.
        </P>
      </Section>

      <Section id="exatidao" heading="4. Exatidão da informação">
        <P>
          A Neptunevictory, Lda. procura manter a informação publicada correta e atualizada.
        </P>
        <P>
          Contudo, a disponibilidade dos imóveis, os preços, as características apresentadas e
          outras condições podem ser alterados ou atualizados sem aviso prévio.
        </P>
        <P>
          A informação disponibilizada no website não substitui as condições estabelecidas no
          respetivo contrato de arrendamento.
        </P>
      </Section>

      <Section id="propriedade-intelectual" heading="5. Propriedade intelectual">
        <P>
          Salvo indicação em contrário, os textos, fotografias, vídeos, logótipos, marcas,
          elementos gráficos e demais conteúdos disponibilizados nos websites pertencem à
          Neptunevictory, Lda. ou são utilizados com autorização dos respetivos titulares.
        </P>
        <P>
          Não é permitida a reprodução, modificação, distribuição, publicação ou utilização
          comercial destes conteúdos sem autorização prévia, salvo nos casos permitidos por lei.
        </P>
      </Section>

      <Section id="ligacoes-terceiros" heading="6. Ligações para terceiros">
        <P>
          Os websites podem incluir ligações para páginas, plataformas ou serviços geridos por
          terceiros.
        </P>
        <P>
          A Neptunevictory, Lda. não controla o funcionamento, a disponibilidade, os conteúdos
          nem as políticas de privacidade desses websites externos. O utilizador deve consultar
          as condições e políticas aplicáveis antes de fornecer dados pessoais ou utilizar
          serviços de terceiros.
        </P>
      </Section>

      <Section id="responsabilidade" heading="7. Responsabilidade">
        <P>
          A Neptunevictory, Lda. adota medidas razoáveis para assegurar o funcionamento e a
          segurança dos websites, mas não pode garantir que estes estejam permanentemente
          disponíveis ou totalmente isentos de falhas técnicas.
        </P>
        <P>
          A Neptunevictory, Lda. não será responsável por interrupções temporárias, falhas
          técnicas ou acontecimentos fora do seu controlo, sem prejuízo das responsabilidades
          que não possam ser legalmente excluídas ou limitadas.
        </P>
      </Section>

      <Section id="lei-aplicavel" heading="8. Lei aplicável">
        <P>
          Os websites e a presente Informação Legal regem-se pela legislação portuguesa, sem
          prejuízo das normas imperativas aplicáveis e das regras legais de competência dos
          tribunais.
        </P>
      </Section>
    </>
  )
}

// ─── Secções em inglês (tradução do advogado) ─────────────────────────────────

function EnSections() {
  return (
    <>
      <Section id="en-website-operator" heading="1. Website Operator">
        <P>
          The websites <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> and{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A> are operated by
          Neptunevictory, Lda., Portuguese company and registration number 514 177 152, with
          registered office at Alameda da Granja 66, 4425-093 Maia, Portugal, and a share
          capital of €5,000.
        </P>
        <P>
          BSMARTISH is the brand used by Neptunevictory, Lda. to present its urban renovation
          projects and the properties it makes available for temporary rental.
        </P>
      </Section>

      <Section id="en-contact-details" heading="2. Contact Details">
        <P>
          General email:{' '}
          <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A>
          <br />
          Telephone:{' '}
          <A href={`tel:${E.phoneHref}`}>+351 936 920 210</A>
          <br />
          Contact for personal data protection and the exercise of data protection rights:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
        <P>
          Address for correspondence:
          <br />
          Neptunevictory, Lda.
          <br />
          Alameda da Granja 66
          <br />
          4425-093 Maia
          <br />
          Portugal
        </P>
      </Section>

      <Section id="en-purpose" heading="3. Purpose of the Websites">
        <P>
          The websites <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> and{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A> provide information
          about BSMARTISH, its urban renovation projects and the properties it makes available
          for temporary or mid-term rental.
        </P>
        <P>
          The websites are for information purposes only. It is not possible to make a
          reservation, enter into a contract or make a payment through the websites.
        </P>
        <P>
          The presentation of a property on the website does not constitute a binding
          contractual offer. Availability, price, duration, included services and any other
          applicable conditions are confirmed directly with the interested person before any
          contract is entered into.
        </P>
        <P>
          Rentals are formalised through a separate agreement entered into directly between the
          parties.
        </P>
      </Section>

      <Section id="en-accuracy" heading="4. Accuracy of Information">
        <P>
          Neptunevictory, Lda. makes reasonable efforts to keep the published information
          accurate and up to date.
        </P>
        <P>
          However, property availability, prices, listed features and other conditions may be
          changed or updated without prior notice.
        </P>
        <P>
          The information provided on the website does not replace the conditions established
          in the relevant rental agreement.
        </P>
      </Section>

      <Section id="en-intellectual-property" heading="5. Intellectual Property">
        <P>
          Unless otherwise stated, the texts, photographs, videos, logos, trademarks, graphic
          elements and other content made available on the websites belong to Neptunevictory,
          Lda. or are used with the permission of their respective owners.
        </P>
        <P>
          The reproduction, modification, distribution, publication or commercial use of this
          content without prior authorisation is not permitted, except where allowed by law.
        </P>
      </Section>

      <Section id="en-third-party-links" heading="6. Third-Party Links">
        <P>
          The websites may include links to websites, platforms or services operated by third
          parties.
        </P>
        <P>
          Neptunevictory, Lda. does not control the operation, availability, content or privacy
          policies of external websites. Users should review the applicable terms and policies
          before providing personal data to or using a third-party service.
        </P>
      </Section>

      <Section id="en-liability" heading="7. Liability">
        <P>
          Neptunevictory, Lda. takes reasonable measures to ensure the operation and security
          of the websites, but cannot guarantee that they will always be available or entirely
          free from technical faults.
        </P>
        <P>
          Neptunevictory, Lda. shall not be liable for temporary interruptions, technical
          failures or events outside its reasonable control, without prejudice to any liability
          that cannot legally be excluded or limited.
        </P>
      </Section>

      <Section id="en-governing-law" heading="8. Governing Law">
        <P>
          The websites and this Legal Information are governed by Portuguese law, without
          prejudice to any applicable mandatory legal provisions and jurisdiction rules.
        </P>
      </Section>
    </>
  )
}

// ─── Export principal ─────────────────────────────────────────────────────────

export default function LegalNoticeDoc() {
  return (
    <LegalDoc
      eyebrow="Informação Legal"
      title="Informação Legal"
      enTitle="Legal Information"
      lastUpdated={LEGAL_LAST_UPDATED}
      enContent={<EnSections />}
    >
      <PtSections />
    </LegalDoc>
  )
}
