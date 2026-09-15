'use client'

// Documento 03 — POLÍTICA DE PRIVACIDADE / PRIVACY POLICY.
// Texto PT reproduzido na íntegra a partir do documento fornecido pela empresa
// (versão setembro de 2026). Tradução EN fornecida pelo advogado no mesmo
// documento. NÃO ALTERAR a redação, NÃO ACRESCENTAR secções.
// A única intervenção são ligações (mailto/tel/url) colocadas sobre texto que
// já existia no documento.

import { LegalDoc, Section, SubSection, P, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

// ─── Secções em português ────────────────────────────────────────────────────

function PtSections() {
  return (
    <>
      <Section id="objeto-ambito" heading="1. Objeto e âmbito">
        <P>
          A presente Política de Privacidade explica como a Neptunevictory, Lda., que utiliza
          a marca BSMARTISH, trata os dados pessoais relacionados com:
        </P>
        <P>
          a) a utilização dos websites{' '}
          <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> e{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A>;
        </P>
        <P>b) os pedidos de informação enviados por email ou efetuados por telefone;</P>
        <P>c) as diligências necessárias antes da celebração de um contrato de arrendamento;</P>
        <P>
          d) a celebração, gestão e execução dos contratos de arrendamento temporário dos
          imóveis disponibilizados pela BSMARTISH.
        </P>
        <P>
          Os websites são informativos e não permitem efetuar reservas, celebrar contratos ou
          realizar pagamentos online.
        </P>
      </Section>

      <Section id="responsavel" heading="2. Responsável pelo tratamento">
        <P>O responsável pelo tratamento dos dados pessoais é:</P>
        <P>
          Neptunevictory, Lda.
          <br />
          Pessoa coletiva n.º 514 177 152
          <br />
          Alameda da Granja 66
          <br />
          4425-093 Maia
          <br />
          Portugal
        </P>
        <P>
          Email geral:{' '}
          <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A>
          <br />
          Telefone:{' '}
          <A href={`tel:${E.phoneHref}`}>+351 936 920 210</A>
          <br />
          Contacto para proteção de dados e exercício de direitos:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
      </Section>

      <Section id="dados-tratados" heading="3. Dados pessoais tratados">
        <P>
          Consoante a relação estabelecida com a BSMARTISH, podemos tratar as seguintes
          categorias de dados pessoais:
        </P>
        <P>
          a) dados de identificação, como nome, nacionalidade, data de nascimento, assinatura e
          dados dos documentos de identificação, quando estes sejam necessários;
        </P>
        <P>b) dados de contacto, como endereço de email, número de telefone e morada;</P>
        <P>
          c) informações relativas ao pedido de arrendamento, incluindo imóvel pretendido,
          datas, duração da estadia, número de ocupantes e necessidades comunicadas;
        </P>
        <P>d) dados necessários à preparação, celebração e execução do contrato;</P>
        <P>e) dados de faturação, pagamento e restituição de cauções;</P>
        <P>
          f) comunicações mantidas por email, telefone ou outros canais utilizados pelo
          interessado;
        </P>
        <P>
          g) dados técnicos e de segurança que possam ser registados automaticamente pela
          infraestrutura do website, como endereço IP, data e hora de acesso, tipo de
          dispositivo, navegador e registos técnicos.
        </P>
        <P>
          Solicitamos apenas os dados adequados, pertinentes e necessários para cada finalidade.
        </P>
        <P>
          O interessado deve evitar enviar documentos de identificação ou informação pessoal
          sensível que não tenham sido expressamente solicitados.
        </P>
      </Section>

      <Section id="finalidades" heading="4. Finalidades e fundamentos jurídicos">
        <P>Os dados pessoais podem ser tratados para as seguintes finalidades:</P>
        <SubSection heading="4.1. Responder a pedidos de informação">
          <P>
            Tratamos o nome, email, telefone e conteúdo da comunicação para responder a
            questões sobre os imóveis, verificar disponibilidade e prestar as informações
            solicitadas.
          </P>
          <P>
            Fundamento jurídico: diligências pré-contratuais realizadas a pedido do titular
            dos dados ou interesse legítimo em responder às comunicações recebidas.
          </P>
        </SubSection>
        <SubSection heading="4.2. Preparar e celebrar o contrato">
          <P>
            Tratamos os dados necessários para verificar as condições do arrendamento,
            identificar as partes e os ocupantes e preparar a documentação contratual.
          </P>
          <P>
            Fundamento jurídico: diligências pré-contratuais realizadas a pedido do titular e
            celebração do contrato.
          </P>
        </SubSection>
        <SubSection heading="4.3. Executar e gerir o arrendamento">
          <P>
            Tratamos os dados necessários para gerir pagamentos, entradas e saídas,
            comunicações, manutenção, limpeza quando contratada, resolução de incidentes e
            restituição da caução.
          </P>
          <P>Fundamento jurídico: execução do contrato.</P>
        </SubSection>
        <SubSection heading="4.4. Cumprir obrigações legais">
          <P>
            Os dados podem ser tratados para efeitos fiscais, contabilísticos, administrativos
            e para responder a pedidos legítimos das autoridades.
          </P>
          <P>Fundamento jurídico: cumprimento de obrigações legais.</P>
        </SubSection>
        <SubSection heading="4.5. Segurança e defesa de direitos">
          <P>
            Os dados podem ser tratados para proteger os imóveis, prevenir fraude ou utilização
            indevida, gerir incumprimentos, conservar prova de comunicações e exercer ou
            defender direitos em processos administrativos ou judiciais.
          </P>
          <P>
            Fundamento jurídico: interesses legítimos da Neptunevictory, Lda., sem prejuízo dos
            direitos e liberdades fundamentais dos titulares dos dados.
          </P>
        </SubSection>
      </Section>

      <Section id="origem" heading="5. Origem dos dados">
        <P>
          Os dados são normalmente fornecidos pelo próprio titular através de email, telefone
          ou durante as diligências anteriores à celebração do contrato.
        </P>
        <P>
          Também podemos receber dados através de plataformas utilizadas pelo interessado para
          contactar a BSMARTISH, como portais imobiliários ou plataformas de arrendamento.
          Nesses casos, a plataforma trata inicialmente os dados de acordo com a sua própria
          política de privacidade.
        </P>
      </Section>

      <Section id="acompanhantes" heading="6. Dados de acompanhantes e terceiros">
        <P>
          Quando uma pessoa fornece dados relativos a acompanhantes, familiares ou outros
          ocupantes, deve assegurar que está autorizada a fazê-lo e que lhes comunicou a
          existência desta Política de Privacidade.
        </P>
        <P>
          A BSMARTISH pode fornecer diretamente a informação aplicável a essas pessoas quando
          tal seja legalmente necessário.
        </P>
      </Section>

      <Section id="destinatarios" heading="7. Destinatários e prestadores">
        <P>
          Os dados pessoais são tratados apenas por pessoas autorizadas e podem ser
          transmitidos, na medida estritamente necessária, às seguintes categorias de
          destinatários:
        </P>
        <P>a) prestadores de alojamento, manutenção e segurança do website;</P>
        <P>b) prestadores de email, comunicações, produtividade e armazenamento documental;</P>
        <P>c) contabilistas, assessores jurídicos e outros consultores profissionais;</P>
        <P>
          d) prestadores de manutenção, limpeza ou apoio ao imóvel, quando a intervenção
          implique acesso aos dados necessários;
        </P>
        <P>e) bancos e prestadores de serviços de pagamento;</P>
        <P>f) plataformas imobiliárias ou de arrendamento utilizadas pelo interessado;</P>
        <P>
          g) autoridades públicas, fiscais, administrativas, policiais ou judiciais, quando
          exista uma obrigação legal ou um pedido legítimo.
        </P>
        <P>
          Os prestadores que tratam dados por conta da Neptunevictory, Lda. estão sujeitos a
          obrigações de confidencialidade, segurança e tratamento segundo instruções adequadas.
        </P>
      </Section>

      <Section id="transferencias" heading="8. Transferências internacionais">
        <P>
          Alguns prestadores tecnológicos podem tratar dados pessoais fora do Espaço Económico
          Europeu, designadamente nos Estados Unidos da América.
        </P>
        <P>
          Quando exista uma transferência internacional, esta será realizada através de um
          mecanismo legalmente reconhecido, como uma decisão de adequação da Comissão Europeia,
          o Quadro de Privacidade de Dados UE-EUA aplicável a entidades certificadas ou
          cláusulas contratuais-tipo acompanhadas, quando necessário, de medidas suplementares.
        </P>
      </Section>

      <Section id="conservacao" heading="9. Conservação dos dados">
        <P>
          Os dados são conservados apenas durante o período necessário às respetivas
          finalidades:
        </P>
        <P>
          a) pedidos de informação que não resultem num contrato: até 12 meses após o último
          contacto;
        </P>
        <P>
          b) dados e documentação relacionados com contratos, faturação e obrigações fiscais ou
          contabilísticas: durante os prazos legalmente aplicáveis;
        </P>
        <P>
          c) documentação de identificação: apenas durante o período estritamente necessário à
          identificação, contratação, cumprimento das obrigações aplicáveis e defesa de
          direitos;
        </P>
        <P>
          d) comunicações relacionadas com um contrato ou eventual incumprimento: durante a
          vigência do contrato e, posteriormente, enquanto possam ser necessárias para
          cumprimento de obrigações ou exercício e defesa de direitos;
        </P>
        <P>
          e) registos técnicos e de segurança: durante o período definido pelo respetivo
          prestador e pelo tempo estritamente necessário à segurança e diagnóstico de
          incidentes, normalmente não superior a seis meses, salvo quando exista uma razão
          legítima ou obrigação legal para conservação mais prolongada.
        </P>
        <P>
          Quando os dados deixem de ser necessários, serão eliminados, anonimizados ou mantidos
          com acesso limitado quando a conservação seja legalmente exigida.
        </P>
      </Section>

      <Section id="direitos" heading="10. Direitos dos titulares">
        <P>Nos termos da legislação aplicável, o titular pode solicitar:</P>
        <P>a) acesso aos seus dados pessoais;</P>
        <P>b) retificação de dados inexatos ou incompletos;</P>
        <P>c) apagamento dos dados, quando legalmente aplicável;</P>
        <P>d) limitação do tratamento;</P>
        <P>e) portabilidade dos dados, quando aplicável;</P>
        <P>f) oposição ao tratamento baseado em interesses legítimos;</P>
        <P>g) retirada do consentimento, quando o tratamento se baseie no consentimento.</P>
        <P>Os pedidos devem ser enviados para:</P>
        <P>
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
        <P>
          O pedido deve conter informação suficiente para identificar o titular e localizar os
          dados, mas não deve incluir uma cópia integral do documento de identificação, salvo
          quando esta seja expressamente solicitada e estritamente necessária.
        </P>
        <P>
          A Neptunevictory, Lda. responderá sem demora injustificada e, em regra, no prazo de
          um mês, sem prejuízo das extensões legalmente permitidas.
        </P>
      </Section>

      <Section id="reclamacao" heading="11. Reclamação à autoridade de controlo">
        <P>
          O titular tem o direito de apresentar reclamação à Comissão Nacional de Proteção de
          Dados:
        </P>
        <P>
          Comissão Nacional de Proteção de Dados – CNPD
          <br />
          Avenida D. Carlos I, 134, 1.º
          <br />
          1200-651 Lisboa
          <br />
          Portugal
          <br />
          <A href="https://www.cnpd.pt" external>www.cnpd.pt</A>
        </P>
        <P>Este direito não prejudica a possibilidade de recurso aos tribunais.</P>
      </Section>

      <Section id="seguranca" heading="12. Segurança">
        <P>
          A Neptunevictory, Lda. adota medidas técnicas e organizativas adequadas ao risco,
          destinadas a proteger os dados pessoais contra acesso não autorizado, perda,
          alteração, divulgação ou destruição indevida.
        </P>
        <P>
          O acesso aos dados é limitado às pessoas e prestadores que deles necessitem para o
          exercício das respetivas funções.
        </P>
      </Section>

      <Section id="decisoes-automatizadas" heading="13. Decisões automatizadas">
        <P>
          A Neptunevictory, Lda. não toma decisões exclusivamente automatizadas, incluindo
          definição de perfis, que produzam efeitos jurídicos ou afetem significativamente os
          titulares dos dados.
        </P>
      </Section>

      <Section id="alteracoes" heading="14. Alterações à política">
        <P>
          A presente Política pode ser atualizada para refletir alterações legais, técnicas ou
          operacionais.
        </P>
        <P>
          A versão atualizada estará disponível nos websites, com indicação da data da última
          atualização.
        </P>
      </Section>
    </>
  )
}

// ─── Secções em inglês (tradução do advogado) ─────────────────────────────────

function EnSections() {
  return (
    <>
      <Section id="en-purpose-scope" heading="1. Purpose and Scope">
        <P>
          This Privacy Policy explains how Neptunevictory, Lda., which uses the BSMARTISH
          brand, processes personal data in connection with:
        </P>
        <P>
          a) the use of{' '}
          <A href="https://www.bsmartish.com" external>www.bsmartish.com</A> and{' '}
          <A href="https://www.bsmartish.pt" external>www.bsmartish.pt</A>;
        </P>
        <P>b) enquiries made by email or telephone;</P>
        <P>c) steps taken before entering into a rental agreement;</P>
        <P>
          d) the conclusion, management and performance of temporary rental agreements
          concerning properties made available by BSMARTISH.
        </P>
        <P>
          The websites are for information purposes and do not allow users to make
          reservations, enter into contracts or make payments online.
        </P>
      </Section>

      <Section id="en-data-controller" heading="2. Data Controller">
        <P>The controller responsible for processing personal data is:</P>
        <P>
          Neptunevictory, Lda.
          <br />
          Portuguese company number 514 177 152
          <br />
          Alameda da Granja 66
          <br />
          4425-093 Maia
          <br />
          Portugal
        </P>
        <P>
          General email:{' '}
          <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A>
          <br />
          Telephone:{' '}
          <A href={`tel:${E.phoneHref}`}>+351 936 920 210</A>
          <br />
          Contact for data protection matters and the exercise of rights:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
      </Section>

      <Section id="en-personal-data" heading="3. Personal Data We Process">
        <P>
          Depending on your relationship with BSMARTISH, we may process the following
          categories of personal data:
        </P>
        <P>
          a) identification data, such as name, nationality, date of birth, signature and
          identification document details, where necessary;
        </P>
        <P>
          b) contact details, such as email address, telephone number and postal address;
        </P>
        <P>
          c) information relating to the rental enquiry, including the requested property,
          dates, length of stay, number of occupants and any requirements communicated to us;
        </P>
        <P>d) information required to prepare, enter into and perform the agreement;</P>
        <P>e) invoicing, payment and deposit refund information;</P>
        <P>
          f) communications exchanged by email, telephone or other channels used by the
          interested person;
        </P>
        <P>
          g) technical and security information that may be recorded automatically by the
          website infrastructure, such as IP address, access date and time, device type,
          browser and technical logs.
        </P>
        <P>
          We only request personal data that are appropriate, relevant and necessary for each
          purpose.
        </P>
        <P>
          Interested persons should avoid sending identification documents or sensitive
          personal information that have not been specifically requested.
        </P>
      </Section>

      <Section id="en-purposes" heading="4. Purposes and Legal Bases">
        <P>Personal data may be processed for the following purposes:</P>
        <SubSection heading="4.1. Responding to enquiries">
          <P>
            We process your name, email address, telephone number and the contents of your
            communication to answer questions about the properties, check availability and
            provide the requested information.
          </P>
          <P>
            Legal basis: taking steps at the request of the data subject before entering into a
            contract or our legitimate interest in responding to communications received.
          </P>
        </SubSection>
        <SubSection heading="4.2. Preparing and entering into the agreement">
          <P>
            We process the data required to verify the rental conditions, identify the parties
            and occupants and prepare the contractual documentation.
          </P>
          <P>
            Legal basis: taking pre-contractual steps at the request of the data subject and
            entering into the agreement.
          </P>
        </SubSection>
        <SubSection heading="4.3. Managing and performing the rental">
          <P>
            We process the information required to manage payments, arrivals and departures,
            communications, maintenance, cleaning where contracted, incident management and
            deposit refunds.
          </P>
          <P>Legal basis: performance of the agreement.</P>
        </SubSection>
        <SubSection heading="4.4. Compliance with legal obligations">
          <P>
            Data may be processed for tax, accounting and administrative purposes and to
            respond to legitimate requests from public authorities.
          </P>
          <P>Legal basis: compliance with legal obligations.</P>
        </SubSection>
        <SubSection heading="4.5. Security and the protection of legal rights">
          <P>
            Data may be processed to protect the properties, prevent fraud or misuse, manage
            breaches of contract, preserve evidence of communications and establish, exercise
            or defend legal rights.
          </P>
          <P>
            Legal basis: the legitimate interests of Neptunevictory, Lda., without prejudice to
            the fundamental rights and freedoms of the data subjects.
          </P>
        </SubSection>
      </Section>

      <Section id="en-source" heading="5. Source of the Data">
        <P>
          Personal data are normally provided directly by the data subject by email, telephone
          or during the steps preceding the conclusion of the agreement.
        </P>
        <P>
          We may also receive data through platforms used by the interested person to contact
          BSMARTISH, such as property portals or rental platforms. In those cases, the platform
          initially processes the data in accordance with its own privacy policy.
        </P>
      </Section>

      <Section id="en-other-occupants" heading="6. Data Relating to Other Occupants">
        <P>
          A person who provides information about accompanying persons, family members or other
          occupants must ensure that they are authorised to do so and that those persons have
          been informed about this Privacy Policy.
        </P>
        <P>
          BSMARTISH may provide the relevant information directly to those persons where
          legally required.
        </P>
      </Section>

      <Section id="en-recipients" heading="7. Recipients and Service Providers">
        <P>
          Personal data are only processed by authorised persons and may be disclosed, where
          strictly necessary, to the following categories of recipients:
        </P>
        <P>a) website hosting, maintenance and security providers;</P>
        <P>b) email, communications, productivity and document storage providers;</P>
        <P>c) accountants, legal advisers and other professional advisers;</P>
        <P>
          d) property maintenance, cleaning or support providers, where their involvement
          requires access to relevant information;
        </P>
        <P>e) banks and payment service providers;</P>
        <P>f) property or rental platforms used by the interested person;</P>
        <P>
          g) public, tax, administrative, police or judicial authorities where disclosure is
          required by law or pursuant to a legitimate request.
        </P>
        <P>
          Service providers that process personal data on behalf of Neptunevictory, Lda. are
          subject to appropriate confidentiality, security and data processing obligations.
        </P>
      </Section>

      <Section id="en-international-transfers" heading="8. International Transfers">
        <P>
          Some technology providers may process personal data outside the European Economic
          Area, including in the United States of America.
        </P>
        <P>
          Where an international transfer takes place, it will be based on a legally recognised
          mechanism, such as an adequacy decision adopted by the European Commission, the EU-US
          Data Privacy Framework where the recipient is certified, or Standard Contractual
          Clauses supplemented, where necessary, by additional safeguards.
        </P>
      </Section>

      <Section id="en-retention" heading="9. Data Retention">
        <P>
          Personal data are only retained for as long as necessary for the relevant purpose:
        </P>
        <P>
          a) enquiries that do not result in an agreement: for up to 12 months following the
          last contact;
        </P>
        <P>
          b) contractual, invoicing, tax and accounting data: for the applicable statutory
          retention periods;
        </P>
        <P>
          c) identification documents: only for the period strictly necessary for
          identification, contracting, compliance with applicable obligations and the protection
          of legal rights;
        </P>
        <P>
          d) communications relating to an agreement or a possible breach: for the duration of
          the agreement and afterwards for as long as they may be required to comply with legal
          obligations or establish, exercise or defend legal rights;
        </P>
        <P>
          e) technical and security logs: for the period established by the relevant provider
          and for no longer than necessary for security and incident diagnosis purposes,
          normally no longer than six months, unless a legitimate reason or legal obligation
          requires a longer period.
        </P>
        <P>
          When personal data are no longer required, they will be deleted or anonymised, or
          access will be restricted where their retention is required by law.
        </P>
      </Section>

      <Section id="en-rights" heading="10. Data Subject Rights">
        <P>Subject to applicable law, data subjects may request:</P>
        <P>a) access to their personal data;</P>
        <P>b) correction of inaccurate or incomplete data;</P>
        <P>c) erasure of personal data, where legally applicable;</P>
        <P>d) restriction of processing;</P>
        <P>e) data portability, where applicable;</P>
        <P>f) objection to processing based on legitimate interests;</P>
        <P>g) withdrawal of consent where processing is based on consent.</P>
        <P>Requests should be sent to:</P>
        <P>
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
        <P>
          The request should contain sufficient information to identify the data subject and
          locate the relevant data. A complete copy of an identification document should not be
          provided unless specifically requested and strictly necessary.
        </P>
        <P>
          Neptunevictory, Lda. will respond without undue delay and normally within one month,
          subject to any extension permitted by law.
        </P>
      </Section>

      <Section id="en-complaint" heading="11. Right to Lodge a Complaint">
        <P>
          Data subjects have the right to lodge a complaint with the Portuguese supervisory
          authority:
        </P>
        <P>
          Comissão Nacional de Proteção de Dados – CNPD
          <br />
          Avenida D. Carlos I, 134, 1.º
          <br />
          1200-651 Lisboa
          <br />
          Portugal
          <br />
          <A href="https://www.cnpd.pt" external>www.cnpd.pt</A>
        </P>
        <P>This does not affect the right to seek a judicial remedy.</P>
      </Section>

      <Section id="en-security" heading="12. Security">
        <P>
          Neptunevictory, Lda. implements technical and organisational measures appropriate to
          the risks involved, designed to protect personal data against unauthorised access,
          loss, alteration, disclosure or improper destruction.
        </P>
        <P>
          Access to personal data is limited to persons and service providers that require the
          information to perform their duties.
        </P>
      </Section>

      <Section id="en-automated" heading="13. Automated Decision-Making">
        <P>
          Neptunevictory, Lda. does not make decisions based solely on automated processing,
          including profiling, which produce legal effects or similarly significantly affect
          data subjects.
        </P>
      </Section>

      <Section id="en-changes" heading="14. Changes to This Policy">
        <P>
          This Privacy Policy may be updated to reflect legal, technical or operational
          changes.
        </P>
        <P>
          The current version will be made available on the websites, together with the date on
          which it was last updated.
        </P>
      </Section>
    </>
  )
}

// ─── Export principal ─────────────────────────────────────────────────────────

export default function PrivacyDoc() {
  return (
    <LegalDoc
      eyebrow="Informação Legal"
      title="Política de Privacidade"
      enTitle="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
      enDisclaimer="This English translation is provided for information purposes. The Portuguese version is the official version. In the event of any discrepancy or inconsistency, the Portuguese version shall prevail, without prejudice to any mandatory rights available under applicable data protection law."
      enContent={<EnSections />}
    >
      <PtSections />
    </LegalDoc>
  )
}
