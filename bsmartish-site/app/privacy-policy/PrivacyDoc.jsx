'use client'

// Documento 03 — POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS.
// Texto reproduzido na íntegra a partir do documento fornecido pela empresa.
// NÃO ALTERAR a redação existente.
//
// Os campos que o documento deixou como [PREENCHER] foram preenchidos com
// factos verificados no código e no comportamento real do site. Estão
// envolvidos em <Filled> para serem localizáveis numa revisão futura. Dois
// prazos continuam por definir porque dependem de decisão da empresa e não de
// nada que se possa apurar a partir do site.

import { LegalDoc, Section, P, UL, LI, A, Filled } from '@/app/components/legal/LegalDoc'
import { LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

export default function PrivacyDoc() {
  return (
    <LegalDoc
      eyebrow="Informação Legal"
      title="Política de Privacidade e Proteção de Dados"
      lastUpdated={LEGAL_LAST_UPDATED.pt}
    >
      <Section id="ambito" heading="1. Âmbito">
        <P>
          A presente Política aplica-se ao tratamento de dados pessoais realizado através de
          www.bsmartish.pt e www.bsmartish.com e no âmbito dos contactos, pedidos de informação,
          diligências pré-contratuais, contratos e serviços associados à atividade BSMARTISH.
        </P>
      </Section>

      <Section id="responsavel" heading="2. Responsável pelo tratamento">
        <P>
          O responsável pelo tratamento é Neptunevictory Lda, pessoa coletiva n.º 514177152, com
          sede em Alameda da Granja 66, 4425-093 Maia, Portugal, titular da marca BSMARTISH URBAN
          RENOVATION.
        </P>
        <P>
          Contacto geral: <A href="mailto:hello@bsmartish.com">hello@bsmartish.com</A> | Telefone:{' '}
          <A href="tel:+351936920210">+351 936 920 210</A>
          <br />
          Contacto para privacidade e exercício de direitos:{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
      </Section>

      <Section id="dados" heading="3. Dados tratados">
        <P>
          Podemos tratar dados de identificação e contacto, como nome, email, telefone,
          nacionalidade, morada e assinatura; dados relativos ao pedido e à estadia, como datas,
          duração, imóvel pretendido, número e identidade dos ocupantes e necessidades comunicadas;
          dados contratuais, fiscais e de pagamento; documentação estritamente necessária à
          identificação, contratação ou cumprimento de obrigações legais; comunicações trocadas
          connosco; e dados técnicos de utilização, como endereço IP, data e hora de acesso,
          dispositivo, navegador, páginas visitadas e registos de segurança.
        </P>
        <P>
          Solicitamos apenas os dados adequados, pertinentes e limitados ao necessário para cada
          finalidade. O titular deve evitar enviar documentação sensível ou excessiva que não tenha
          sido solicitada.
        </P>
      </Section>

      <Section id="finalidades" heading="4. Finalidades e fundamentos jurídicos">
        <P>
          Resposta a pedidos de informação, verificação de disponibilidade, preparação de propostas
          e outras diligências anteriores ao contrato — diligências pré-contratuais a pedido do
          titular.
        </P>
        <P>
          Celebração, gestão e execução do contrato, pagamentos, check-in, apoio durante a estadia e
          restituição da caução — execução do contrato.
        </P>
        <P>
          Faturação, contabilidade, cumprimento de deveres fiscais, conservação de documentos e
          resposta às autoridades — cumprimento de obrigações legais.
        </P>
        <P>
          Segurança dos sistemas, prevenção de fraude, gestão de incumprimentos, prova de
          comunicações e defesa de direitos — interesses legítimos da sociedade, após ponderação dos
          direitos dos titulares.
        </P>
        <P>
          Envio de comunicações comerciais não relacionadas com uma relação contratual existente —
          consentimento, quando legalmente exigido.
        </P>
        <P>
          Quando o tratamento se basear no consentimento, este pode ser retirado a qualquer momento,
          sem afetar a licitude do tratamento anteriormente realizado.
        </P>
      </Section>

      <Section id="obrigatoriedade" heading="5. Caráter obrigatório dos dados">
        <P>
          Os dados assinalados como obrigatórios são necessários para responder ao pedido, preparar
          ou executar o contrato ou cumprir obrigações legais. A sua não disponibilização pode
          impedir a resposta, a reserva ou a celebração e execução do contrato.
        </P>
      </Section>

      <Section id="destinatarios" heading="6. Destinatários e prestadores">
        <P>
          Os dados podem ser tratados por trabalhadores e colaboradores autorizados e, na medida
          necessária, por prestadores de alojamento e segurança do website, email e produtividade,
          armazenamento documental, contabilidade e faturação, assessoria jurídica, manutenção,
          limpeza, gestão de pagamentos, assinatura eletrónica e plataformas através das quais o
          titular contactou a BSMARTISH.
        </P>
        <P>
          Prestadores atualmente utilizados e respetiva função:
        </P>
        <Filled>
          <UL>
            <LI>
              <strong>Vercel Inc.</strong> — alojamento dos websites e medição agregada de audiência
              e de desempenho (Vercel Web Analytics e Speed Insights), sem cookies.
            </LI>
            <LI>
              <strong>Cloudflare, Inc.</strong> — rede de distribuição de conteúdos, filtragem de
              tráfego malicioso e segurança do website.
            </LI>
            <LI>
              <strong>Google Ireland Limited</strong> — mapas de localização nas páginas dos
              imóveis, carregados apenas mediante clique do utilizador, e Google Search Console,
              que não executa código no website nem recolhe dados dos visitantes.
            </LI>
            <LI>
              <strong>Idealista, Airbnb, Spotahome e Flatio</strong> — plataformas através das quais
              o titular pode ter contactado a BSMARTISH.
            </LI>
          </UL>
        </Filled>
        <P>
          Os prestadores que atuem por nossa conta ficam sujeitos a deveres contratuais de
          confidencialidade, segurança e tratamento apenas segundo instruções documentadas. Os dados
          podem também ser comunicados a autoridades quando exista obrigação legal ou pedido
          legítimo.
        </P>
      </Section>

      <Section id="transferencias" heading="7. Transferências internacionais">
        <P>
          Alguns prestadores podem tratar dados fora do Espaço Económico Europeu. Quando tal
          ocorrer, a transferência será efetuada com base num mecanismo legal aplicável,
          designadamente uma decisão de adequação, o Quadro de Privacidade de Dados UE–EUA quando
          aplicável, cláusulas contratuais-tipo e, quando necessário, medidas suplementares.
        </P>
        <P>Transferências efetivamente realizadas e garantias:</P>
        <Filled>
          <UL>
            <LI>
              <strong>Estados Unidos da América</strong> — Vercel Inc. e Cloudflare, Inc., ao abrigo
              de cláusulas contratuais-tipo da Comissão Europeia e, quando aplicável, do Quadro de
              Privacidade de Dados UE–EUA.
            </LI>
            <LI>
              <strong>Google</strong> — os mapas são prestados pela Google Ireland Limited, na União
              Europeia; qualquer transferência subsequente para os Estados Unidos ocorre ao abrigo
              das garantias declaradas pela Google.
            </LI>
          </UL>
        </Filled>
      </Section>

      <Section id="conservacao" heading="8. Conservação">
        <P>
          Pedidos que não resultem em contrato:{' '}
          <em>prazo a definir pela sociedade em política interna de conservação.</em>
        </P>
        <P>
          Documentação contratual, contabilística e fiscal: durante os prazos legais aplicáveis e
          enquanto necessária à declaração, exercício ou defesa de direitos.
        </P>
        <P>
          Documentos de identificação: apenas pelo período estritamente necessário à finalidade e
          obrigação aplicável, devendo ser eliminados ou anonimizados quando deixem de ser
          necessários.
        </P>
        <P>
          Consentimentos e oposição a comunicações comerciais: enquanto o consentimento estiver
          válido e, depois, durante o período necessário para demonstrar o seu cumprimento ou
          respeitar a oposição.
        </P>
        <P>
          Registos técnicos e de segurança:{' '}
          <em>prazo a definir pela sociedade em política interna de conservação.</em>
        </P>
        <P>
          Os prazos concretos devem ser aprovados numa política interna de conservação e aplicados
          aos sistemas e cópias de segurança.
        </P>
      </Section>

      <Section id="direitos" heading="9. Direitos dos titulares">
        <P>
          Nos termos aplicáveis, o titular pode solicitar acesso, retificação, apagamento,
          limitação, portabilidade dos dados e oposição ao tratamento, bem como retirar o
          consentimento. Quando o tratamento se fundar em interesses legítimos, o titular pode
          opor-se por motivos relacionados com a sua situação particular.
        </P>
        <P>
          O pedido deve ser enviado para{' '}
          <Filled>
            <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
          </Filled>
          , com informação suficiente para confirmar a identidade e localizar os dados. Não devem
          ser enviados documentos de identificação completos salvo se forem estritamente
          solicitados e necessários.
        </P>
        <P>
          Responderemos sem demora injustificada e, em regra, no prazo de um mês, sem prejuízo das
          extensões legalmente permitidas.
        </P>
      </Section>

      <Section id="reclamacao" heading="10. Reclamação">
        <P>
          O titular pode apresentar reclamação à Comissão Nacional de Proteção de Dados — CNPD,
          Avenida D. Carlos I, 134, 1.º, 1200-651 Lisboa, através dos canais disponíveis em{' '}
          <A href="https://www.cnpd.pt" external>www.cnpd.pt</A> — sem prejuízo de recorrer aos
          tribunais.
        </P>
      </Section>

      <Section id="seguranca" heading="11. Segurança">
        <P>
          Aplicamos medidas técnicas e organizativas adequadas ao risco, incluindo controlo de
          acessos, autenticação, gestão de permissões, cópias de segurança e procedimentos de
          resposta a incidentes. Nenhum sistema é totalmente isento de risco; qualquer suspeita de
          acesso indevido deve ser comunicada para{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>
        </P>
      </Section>

      <Section id="decisoes-automatizadas" heading="12. Decisões automatizadas">
        <P>
          Não são tomadas decisões exclusivamente automatizadas, incluindo definição de perfis, que
          produzam efeitos jurídicos ou afetem significativamente o titular, salvo se esta
          informação vier a ser expressamente alterada.
        </P>
      </Section>

      <Section id="dados-terceiros" heading="13. Dados de terceiros">
        <P>
          Quem forneça dados de acompanhantes ou outros terceiros deve assegurar que está autorizado
          a fazê-lo e que lhes disponibilizou esta Política. A BSMARTISH poderá fornecer informação
          diretamente ao terceiro quando legalmente necessário.
        </P>
      </Section>

      <Section id="alteracoes" heading="14. Alterações">
        <P>
          Esta Política pode ser atualizada para refletir alterações legais, operacionais ou
          tecnológicas. A versão vigente estará sempre disponível nos websites.
        </P>
      </Section>
    </LegalDoc>
  )
}
