'use client'

// Documento 02 — INFORMAÇÃO LEGAL.
// Texto reproduzido na íntegra a partir do documento fornecido pela empresa.
// NÃO ALTERAR a redação, NÃO ACRESCENTAR secções. A única intervenção são
// ligações (mailto/tel) colocadas sobre texto que já existia no documento.

import { LegalDoc, Section, P, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

export default function LegalNoticeDoc() {
  return (
    <LegalDoc eyebrow="Informação Legal" title="Informação Legal">
      <Section id="titular" heading="1. Titular e responsável pelo website">
        <P>
          Os sítios eletrónicos www.bsmartish.pt e www.bsmartish.com são explorados por
          Neptunevictory Lda, pessoa coletiva n.º 514177152, com sede em Alameda da Granja, 66,
          4425-093 Maia, Portugal.
        </P>
        <P>
          A sociedade Neptunevictory Lda: é titular da marca BSMARTISH URBAN RENOVATION.
        </P>
      </Section>

      <Section id="contactos" heading="2. Contactos">
        <P>
          Email geral: <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A>
          <br />
          Telefone: <A href={`tel:${E.phoneHref}`}>+351 936 920 210</A>
          <br />
          Contacto para proteção de dados:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
          <br />
          Morada para comunicações: Alameda da Granja, 66, 4425-093 Maia, Portugal.
        </P>
      </Section>

      <Section id="objeto" heading="3. Objeto dos websites">
        <P>
          Os websites disponibilizam informação institucional sobre a atividade da BSMARTISH, os
          seus projetos de reabilitação urbana e os imóveis disponibilizados para arrendamento
          temporário, permitindo ao utilizador contactar a sociedade para solicitar informações ou
          iniciar diligências pré-contratuais.
        </P>
        <P>
          A informação publicada não constitui, por si só, uma proposta contratual irrevogável. A
          disponibilidade, o preço final, os serviços incluídos e as restantes condições são
          confirmados antes da celebração de cada contrato.
        </P>
      </Section>

      <Section id="propriedade-intelectual" heading="4. Propriedade intelectual">
        <P>
          Salvo indicação em contrário, os textos, fotografias, elementos gráficos, logótipos,
          marcas e demais conteúdos dos websites pertencem à sociedade ou são utilizados com
          autorização dos respetivos titulares. A sua reprodução, alteração, distribuição ou
          utilização comercial sem autorização prévia é proibida, sem prejuízo das utilizações
          permitidas por lei.
        </P>
      </Section>

      <Section id="ligacoes-externas" heading="5. Ligações externas">
        <P>
          Os websites podem conter ligações para plataformas e páginas geridas por terceiros. A
          sociedade não controla as respetivas condições, políticas de privacidade ou
          disponibilidade. O utilizador deve consultar os documentos aplicáveis no website externo
          antes de lhe fornecer dados pessoais ou contratar serviços.
        </P>
      </Section>

      <Section id="responsabilidade" heading="6. Responsabilidade">
        <P>
          A sociedade procura manter a informação correta e atualizada, mas a disponibilidade dos
          imóveis e determinadas condições podem alterar-se. Nenhum contrato se considera celebrado
          apenas pela consulta do website ou pelo envio de um pedido de informação.
        </P>
        <P>
          Esta disposição não exclui nem limita responsabilidades que não possam ser legalmente
          excluídas ou limitadas.
        </P>
      </Section>

      <Section id="lei-aplicavel" heading="7. Lei aplicável">
        <P>
          O funcionamento dos websites rege-se pela legislação portuguesa, sem prejuízo das normas
          imperativas aplicáveis ao consumidor e das regras legais de competência territorial.
        </P>
      </Section>

      <Section id="atualizacao" heading="8. Atualização">
        <P>Última atualização: {LEGAL_LAST_UPDATED.pt}</P>
      </Section>
    </LegalDoc>
  )
}
