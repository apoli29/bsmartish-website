'use client'

// Documento 04 — POLÍTICA DE COOKIES.
// Texto reproduzido na íntegra a partir do documento fornecido pela empresa.
// NÃO ALTERAR a redação existente.
//
// A secção 4 pedia o inventário real ([PREENCHER] repetido para cada
// tecnologia). Está preenchido com o que foi efetivamente auditado no código e
// verificado num browser: uma entrada de armazenamento local e um cookie de
// segurança da Cloudflare. Nada mais é escrito no dispositivo do visitante.

import { LegalDoc, Section, P, UL, LI, A, Filled } from '@/app/components/legal/LegalDoc'
import { LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'
import { legalHref } from '@/app/lib/legalRoutes'

export default function CookieDoc({ pageLang }) {
  return (
    <LegalDoc
      docKey="cookies"
      pageLang={pageLang}
      title="Política de Cookies"
      enTitle="Cookie Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
    >
      <Section id="ambito" heading="1. Âmbito">
        <P>
          Esta Política explica a utilização de cookies e tecnologias semelhantes em
          www.bsmartish.pt e www.bsmartish.com. Deve ser lida em conjunto com a{' '}
          <A href={legalHref('privacy', 'pt')}>Política de Privacidade</A>.
        </P>
      </Section>

      <Section id="o-que-sao" heading="2. O que são cookies">
        <P>
          Cookies são pequenos ficheiros armazenados no dispositivo do utilizador. Tecnologias
          semelhantes, como armazenamento local, píxeis e identificadores, podem desempenhar funções
          equivalentes. Podem ser necessárias ao funcionamento do website ou utilizadas para
          preferências, medição de audiência e publicidade.
        </P>
      </Section>

      <Section id="categorias" heading="3. Categorias">
        <P>
          Estritamente necessários — permitem o funcionamento, segurança, distribuição de conteúdo e
          funcionalidades solicitadas. Não dependem de consentimento quando sejam realmente
          indispensáveis.
        </P>
        <P>
          Preferências — memorizam escolhas não essenciais, como determinadas opções de apresentação.
        </P>
        <P>Analíticos — medem utilização e desempenho.</P>
        <P>
          Publicidade — acompanham a atividade para personalização ou medição de campanhas.
        </P>
        <P>
          As categorias não estritamente necessárias apenas podem ser ativadas depois de o
          utilizador prestar consentimento válido.
        </P>
      </Section>

      <Section id="inventario" heading="4. Tecnologias atualmente utilizadas">
        <P>
          O inventário abaixo deve corresponder à configuração real na data da publicação. Não deve
          ser publicado antes de uma auditoria técnica final.
        </P>

        <Filled>
          <P>
            O website utiliza uma entrada de armazenamento local denominada bsmartish-lang, definida
            pela própria BSMARTISH, que memoriza o idioma escolhido pelo utilizador (português ou
            inglês). Esta entrada, que não é um cookie, só é escrita quando o utilizador clica no
            seletor de idioma e enquadra-se na categoria de preferências, por resultar de uma ação
            expressa do utilizador. Aplica-se aos domínios bsmartish.pt e bsmartish.com e mantém-se
            até o utilizador limpar os dados de navegação.
          </P>
          <P>
            É também utilizado o cookie __cf_bm, fornecido pela Cloudflare, Inc., que distingue o
            tráfego automatizado dos visitantes reais para proteger o website contra abuso. Trata-se
            de um cookie estritamente necessário, de segurança, associado aos domínios bsmartish.pt e
            bsmartish.com, com a duração de 30 minutos.
          </P>
          <P>
            Para a contagem agregada de visitas e páginas vistas e para a medição do desempenho de
            carregamento das páginas, o website recorre aos serviços Vercel Web Analytics e Vercel
            Speed Insights, fornecidos pela Vercel Inc. nos domínios bsmartish.pt e bsmartish.com.
            Ambos são de natureza analítica, funcionam sem cookies nem identificadores e nada
            escrevem no dispositivo do utilizador.
          </P>
          <P>
            Por fim, as páginas dos imóveis incluem um mapa de localização do Google Maps, fornecido
            pela Google Ireland Limited (google.com). Por se tratar de um serviço de terceiros sujeito
            a consentimento, o mapa está bloqueado por defeito: só é carregado, e só então são criados
            cookies da Google, se o utilizador premir «Carregar mapa».
          </P>
        </Filled>

        <P>
          Na análise externa inicial não foram detetados Google Analytics, Meta Pixel, Hotjar ou
          Google Tag Manager. Esta constatação deve ser reconfirmada pela equipa técnica antes da
          publicação.
        </P>
      </Section>

      <Section id="consentimento" heading="5. Consentimento">
        <P>
          Se forem utilizadas apenas tecnologias estritamente necessárias, não será pedido
          consentimento, sem prejuízo da presente informação. Se forem adicionadas tecnologias de
          preferências, análise ou publicidade, estas permanecerão bloqueadas até o utilizador
          escolher &ldquo;Aceitar&rdquo; ou configurar as suas preferências.
        </P>
        <P>
          Recusar deve ser tão simples como aceitar. A ausência de resposta ou a continuação da
          navegação não constituem consentimento.
        </P>
      </Section>

      <Section id="alteracao" heading="6. Alteração e retirada">
        <P>
          Quando existirem tecnologias sujeitas a consentimento, o utilizador poderá alterar ou
          retirar a sua escolha a qualquer momento através da ligação &ldquo;Gerir cookies&rdquo;
          disponível no rodapé. A retirada não afeta a licitude do tratamento anteriormente
          realizado.
        </P>
      </Section>

      <Section id="navegador" heading="7. Configuração do navegador">
        <P>
          O utilizador pode eliminar ou bloquear cookies através do navegador. O bloqueio de
          tecnologias estritamente necessárias pode impedir o funcionamento de partes do website.
        </P>
      </Section>

      <Section id="contacto" heading="8. Contacto e atualização">
        <P>
          Questões sobre esta Política podem ser enviadas para{' '}
          <A href="mailto:rgpd@bsmartish.com">rgpd@bsmartish.com</A>.
        </P>
      </Section>
    </LegalDoc>
  )
}
