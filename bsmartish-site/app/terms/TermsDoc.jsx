'use client'

import { LegalDoc, Section, P, UL, LI, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const operator = E.legalName || E.tradingName
const NT = '(abre num novo separador)'

function EnglishBody() {
  return (
    <>
      <Section id="who" heading="1. Who you are dealing with">
        <P>
          This website is operated by {operator}. Full registration details are on our{' '}
          <A href="/legal-notice">Legal Notice</A> page. You can reach us at{' '}
          <A href={`mailto:${E.email}`}>{E.email}</A> or <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
        </P>
      </Section>

      <Section id="purpose" heading="2. What this website is">
        <P>
          bsmartish.com is an informational showcase. It presents our urban renovation work and the
          apartments we currently offer for mid-term rental. You cannot create an account, make a
          payment or conclude a rental contract on this site. Every &ldquo;Book&rdquo; link takes you
          to an external platform, or to us by email or telephone.
        </P>
      </Section>

      <Section id="accuracy" heading="3. Property information and prices">
        <P>
          We take care to keep property descriptions, photographs, floor areas, availability and
          prices accurate and up to date. Even so, this information is an invitation to enquire, not
          a binding offer. Availability and prices can change, and details are confirmed to you in
          writing before any contract is signed.
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
          Our minimum stay is 30 days and our maximum is 12 months. Because no booking is concluded
          on this website, the cancellation and refund rules that apply to you are the ones in the
          channel you actually book through:
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
          administrative fee stated on the property page covers preparing the contract and setting up
          the tenancy, is charged once at the start, and is not refundable once that work has been
          done.
        </P>
        <P>
          <strong>A note on the 14-day cooling-off period.</strong> The right of withdrawal for
          distance contracts under Decree-Law 24/2014 does not apply to contracts for the provision
          of accommodation for a specified date or period (Article 17(1)(l)), which is what a
          fixed-term rental is. That is a statutory exception, not something we impose. Your rights
          under Portuguese residential tenancy law are unaffected and are set out in your contract.
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
          Ownership of the site content is covered in our <A href="/legal-notice">Legal Notice</A>.
        </P>
      </Section>

      <Section id="external" heading="6. External links">
        <P>
          We link to booking platforms and to map services. We do not control those sites and are not
          responsible for their content, their availability or their terms. Following such a link
          means their terms and privacy policies apply to you from that point.
        </P>
      </Section>

      <Section id="liability" heading="7. Liability">
        <P>
          We provide this website with reasonable care but cannot guarantee it will always be
          available, uninterrupted or free of errors. To the extent Portuguese law allows, we are not
          liable for indirect or consequential loss arising from using — or being unable to use —
          this website.
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
          the <A href={E.complaintsBookUrl} external>Livro de Reclamações Eletrónico</A>, and
          consumers may refer a dispute to{' '}
          <A href={E.adrEntity.url} external>{E.adrEntity.name}</A>. Details are on our{' '}
          <A href="/legal-notice">Legal Notice</A> page.
        </P>
      </Section>

      <Section id="law" heading="10. Changes, applicable law and courts">
        <P>
          We may update these terms; the version published here when you use the site is the one that
          applies, and the date at the top tells you when it last changed.
        </P>
        <P>
          Portuguese law governs these terms. Disputes fall to the Portuguese courts, without
          prejudice to a consumer&rsquo;s right to bring proceedings in the courts of their own
          country of residence where EU law so provides.
        </P>
      </Section>
    </>
  )
}

function CorpoPortugues() {
  return (
    <>
      <Section id="quem" heading="1. Com quem está a contratar">
        <P>
          Este site é explorado pela {operator}. Os dados completos de registo constam da nossa
          página de <A href="/legal-notice">Informação Legal</A>. Pode contactar-nos através de{' '}
          <A href={`mailto:${E.email}`}>{E.email}</A> ou <A href={`tel:${E.phoneHref}`}>{E.phone}</A>.
        </P>
      </Section>

      <Section id="finalidade" heading="2. O que é este site">
        <P>
          bsmartish.com é uma montra informativa. Apresenta o nosso trabalho de renovação urbana e os
          apartamentos que disponibilizamos para arrendamento de média duração. Não é possível criar
          conta, efetuar pagamentos ou celebrar um contrato de arrendamento neste site. Todas as
          ligações de reserva remetem para uma plataforma externa, ou para nós por email ou telefone.
        </P>
      </Section>

      <Section id="informacao" heading="3. Informação sobre os imóveis e preços">
        <P>
          Procuramos manter as descrições, fotografias, áreas, disponibilidade e preços dos imóveis
          corretos e atualizados. Ainda assim, esta informação constitui um convite a contactar-nos e
          não uma proposta vinculativa. A disponibilidade e os preços podem alterar-se, e os
          pormenores são confirmados por escrito antes da assinatura de qualquer contrato.
        </P>
        <P>
          Os preços indicados nas páginas dos imóveis correspondem à renda mensal, em euros. O
          arrendamento para habitação está isento de IVA nos termos do artigo 9.º, n.º 29, do Código
          do IVA, pelo que não acresce IVA. Quando a página de um imóvel indique uma taxa
          administrativa única, um depósito de caução ou um limite de despesas incluídas, esses
          valores estão indicados nessa página e são devidos para além da renda mensal. Apresentamos
          sempre o custo total por escrito antes de assumir qualquer compromisso.
        </P>
        <P>
          As fotografias mostram o imóvel real, salvo indicação em contrário. As fotografias de
          projetos de renovação concluídos ilustram o nosso trabalho em geral e não constituem
          propostas relativas a esses imóveis concretos.
        </P>
        <P>
          Se surgir no site um erro evidente de preço ou de descrição, não estamos obrigados a
          honrá-lo; informá-lo-emos com prontidão e ficará livre de desistir.
        </P>
      </Section>

      <Section id="reservas" heading="4. Reservas, cauções e cancelamento">
        <P>
          A estadia mínima é de 30 dias e a máxima de 12 meses. Uma vez que nenhuma reserva é
          celebrada neste site, as regras de cancelamento e reembolso aplicáveis são as do canal
          através do qual efetivamente reservar:
        </P>
        <UL>
          <LI>
            <strong>Se reservar através do Idealista, Airbnb, Spotahome ou Flatio</strong>, aplica-se
            a política de cancelamento e reembolso dessa plataforma, a par das condições de
            cancelamento indicadas no anúncio. Leia-as antes de confirmar.
          </LI>
          <LI>
            <strong>Se arrendar diretamente connosco</strong>, as condições de cancelamento e
            reembolso constam do contrato de arrendamento escrito que lhe enviamos antes da
            assinatura. Nada é devido enquanto esse contrato não existir.
          </LI>
        </UL>
        <P>
          Nos arrendamentos diretos e salvo estipulação diversa no contrato: o depósito de caução é
          devolvido no prazo de 30 dias após a saída, deduzido de quaisquer montantes devidos por
          danos que excedam o desgaste normal ou por valores em dívida, com discriminação escrita de
          qualquer dedução. A taxa administrativa indicada na página do imóvel destina-se à
          preparação do contrato e à constituição do arrendamento, é cobrada uma única vez no início
          e não é reembolsável depois de esse trabalho estar executado.
        </P>
        <P>
          <strong>Nota sobre o prazo de livre resolução de 14 dias.</strong> O direito de livre
          resolução dos contratos celebrados à distância, previsto no Decreto-Lei n.º 24/2014, não se
          aplica aos contratos de prestação de serviços de alojamento para data ou período
          determinados (artigo 17.º, n.º 1, alínea l)), que é o caso de um arrendamento a termo
          certo. Trata-se de uma exceção legal, e não de algo que lhe imponhamos. Os seus direitos ao
          abrigo da lei do arrendamento urbano mantêm-se e constam do seu contrato.
        </P>
      </Section>

      <Section id="utilizacao" heading="5. Utilização do site">
        <P>O utilizador compromete-se a não:</P>
        <UL>
          <LI>copiar, extrair ou republicar as nossas fotografias, textos ou design sem autorização;</LI>
          <LI>utilizar o site para fins ilícitos, ou de modo que o danifique ou sobrecarregue;</LI>
          <LI>apresentar-se como estando ligado à BSMARTISH quando não está.</LI>
        </UL>
        <P>
          A titularidade dos conteúdos do site está tratada na nossa{' '}
          <A href="/legal-notice">Informação Legal</A>.
        </P>
      </Section>

      <Section id="ligacoes" heading="6. Ligações externas">
        <P>
          Remetemos para plataformas de reserva e para serviços de mapas. Não controlamos esses sites
          nem somos responsáveis pelos seus conteúdos, pela sua disponibilidade ou pelos seus termos.
          Ao seguir uma dessas ligações, passam a aplicar-se-lhe os termos e as políticas de
          privacidade desses sites.
        </P>
      </Section>

      <Section id="responsabilidade" heading="7. Responsabilidade">
        <P>
          Disponibilizamos este site com a diligência devida, mas não podemos garantir que esteja
          sempre disponível, sem interrupções ou isento de erros. Na medida em que a lei portuguesa o
          permita, não respondemos por danos indiretos ou consequenciais decorrentes da utilização —
          ou da impossibilidade de utilização — deste site.
        </P>
        <P>
          Nada nestes termos limita a nossa responsabilidade por morte ou lesão corporal causada por
          negligência nossa, por dolo, ou por qualquer outra situação que não possa legalmente ser
          limitada. Se for consumidor, os seus direitos legais imperativos não são afetados por nada
          do que consta desta página.
        </P>
      </Section>

      <Section id="privacidade" heading="8. Privacidade e cookies">
        <P>
          O modo como tratamos dados pessoais consta da nossa{' '}
          <A href="/privacy-policy">Política de Privacidade</A>, e o que é guardado no seu
          dispositivo da nossa <A href="/cookie-policy">Política de Cookies</A>.
        </P>
      </Section>

      <Section id="reclamacoes" heading="9. Reclamações e resolução de litígios">
        <P>
          Contacte-nos primeiro através de <A href={`mailto:${E.email}`}>{E.email}</A>. Pode também
          recorrer ao{' '}
          <A href={E.complaintsBookUrl} external newTabLabel={NT}>Livro de Reclamações Eletrónico</A>
          , e os consumidores podem submeter um litígio ao{' '}
          <A href={E.adrEntity.url} external newTabLabel={NT}>{E.adrEntity.name}</A>. Os
          pormenores constam da nossa <A href="/legal-notice">Informação Legal</A>.
        </P>
      </Section>

      <Section id="lei" heading="10. Alterações, lei aplicável e foro">
        <P>
          Podemos atualizar estes termos; aplica-se a versão aqui publicada no momento em que utiliza
          o site, e a data no topo indica quando foi alterada pela última vez.
        </P>
        <P>
          Estes termos regem-se pela lei portuguesa. Os litígios são da competência dos tribunais
          portugueses, sem prejuízo do direito de o consumidor propor ação nos tribunais do seu país
          de residência quando o direito da União assim o permita.
        </P>
      </Section>
    </>
  )
}

export default function TermsDoc() {
  return (
    <LegalDoc
      lastUpdated={LEGAL_LAST_UPDATED}
      en={{
        eyebrow: 'Legal',
        title: 'Terms & Conditions',
        intro:
          'These terms govern your use of bsmartish.com. They are not your rental agreement: renting one of our apartments is done through a separate written contract, or through the booking platform you book on. Where those documents say something different from this page, they win.',
        body: <EnglishBody />,
      }}
      pt={{
        eyebrow: 'Informação Legal',
        title: 'Termos e Condições',
        intro:
          'Estes termos regulam a utilização de bsmartish.com. Não são o seu contrato de arrendamento: o arrendamento de um dos nossos apartamentos é feito através de contrato escrito autónomo, ou através da plataforma de reserva que utilizar. Em caso de divergência, prevalecem esses documentos sobre esta página.',
        body: <CorpoPortugues />,
      }}
    />
  )
}
