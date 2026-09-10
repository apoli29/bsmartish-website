'use client'

// Documento 04 — POLÍTICA DE COOKIES.
// Texto reproduzido na íntegra a partir do documento fornecido pela empresa.
// NÃO ALTERAR a redação existente.
//
// A secção 4 pedia o inventário real ([PREENCHER] repetido para cada
// tecnologia). Está preenchido com o que foi efetivamente auditado no código e
// verificado num browser: uma entrada de armazenamento local e um cookie de
// segurança da Cloudflare. Nada mais é escrito no dispositivo do visitante.

import { LegalDoc, Section, P, UL, LI, A, Filled, CELL, CELL_HEAD } from '@/app/components/legal/LegalDoc'
import { LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const INVENTARIO = [
  {
    nome: 'bsmartish-lang',
    fornecedor: 'BSMARTISH (próprio)',
    finalidade: 'Memorizar o idioma escolhido pelo utilizador (português ou inglês). Só é escrito quando o utilizador clica no seletor de idioma.',
    categoria: 'Preferências, definida por ação expressa do utilizador',
    duracao: 'Até o utilizador limpar os dados de navegação',
    dominio: 'bsmartish.pt · bsmartish.com',
    tipo: 'Armazenamento local (não é cookie)',
  },
  {
    nome: '__cf_bm',
    fornecedor: 'Cloudflare, Inc.',
    finalidade: 'Distinguir tráfego automatizado de visitantes reais, para proteção do website contra abuso.',
    categoria: 'Estritamente necessário (segurança)',
    duracao: '30 minutos',
    dominio: 'bsmartish.pt · bsmartish.com',
    tipo: 'Cookie',
  },
]

export default function CookieDoc() {
  return (
    <LegalDoc eyebrow="Informação Legal" title="Política de Cookies" lastUpdated={LEGAL_LAST_UPDATED.pt}>
      <Section id="ambito" heading="1. Âmbito">
        <P>
          Esta Política explica a utilização de cookies e tecnologias semelhantes em
          www.bsmartish.pt e www.bsmartish.com. Deve ser lida em conjunto com a{' '}
          <A href="/privacy-policy">Política de Privacidade</A>.
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
          <div className="overflow-x-auto mb-6">
            <table style={{ borderCollapse: 'collapse', fontSize: '0.92rem', lineHeight: 1.6 }}>
              <thead>
                <tr>
                  {['Nome', 'Tipo', 'Fornecedor', 'Finalidade', 'Categoria', 'Duração', 'Domínio'].map((h) => (
                    <th key={h} scope="col" style={CELL_HEAD}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INVENTARIO.map((c) => (
                  <tr key={c.nome}>
                    <td style={CELL}><code>{c.nome}</code></td>
                    <td style={CELL}>{c.tipo}</td>
                    <td style={CELL}>{c.fornecedor}</td>
                    <td style={CELL}>{c.finalidade}</td>
                    <td style={CELL}>{c.categoria}</td>
                    <td style={CELL}>{c.duracao}</td>
                    <td style={CELL}>{c.dominio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <P>
            Não são utilizadas quaisquer outras cookies, píxeis ou identificadores. Em complemento
            do inventário acima:
          </P>
          <UL>
            <LI>
              <strong>Vercel Web Analytics e Vercel Speed Insights</strong> — medem visitas e
              desempenho sem escrever cookies nem qualquer identificador no dispositivo, pelo que
              não integram o inventário nem dependem de consentimento.
            </LI>
            <LI>
              <strong>Google Maps</strong> — os mapas nas páginas dos imóveis não são carregados
              automaticamente. Enquanto o utilizador não premir «Carregar mapa», nada é pedido à
              Google e nenhuma cookie da Google pode ser criada. Ao premir, o utilizador consente
              nesse carregamento e passam a aplicar-se as cookies e a política de privacidade da
              Google.
            </LI>
            <LI>
              <strong>Idealista, Airbnb, Spotahome e Flatio</strong> — são ligações, não conteúdos
              incorporados. Nada dessas plataformas é executado nos websites.
            </LI>
          </UL>
        </Filled>

        <P>
          Na análise externa inicial não foram detetados Google Analytics, Meta Pixel, Hotjar ou
          Google Tag Manager. Esta constatação deve ser reconfirmada pela equipa técnica antes da
          publicação.
        </P>
        <Filled>
          <P>
            <em>
              Reconfirmado pela equipa técnica: auditoria ao código-fonte e verificação em browser
              não encontraram Google Analytics, Meta Pixel, Hotjar nem Google Tag Manager.
            </em>
          </P>
        </Filled>
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
