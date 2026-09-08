'use client'

import { LegalDoc, Section, P, UL, LI, A, CELL, CELL_HEAD } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const NT = '(abre num novo separador)'

function StorageTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table style={{ borderCollapse: 'collapse', fontSize: '0.95rem', lineHeight: 1.6 }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col" style={CELL_HEAD}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i}>
              {cells.map((c, j) => (
                <td key={j} style={CELL}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function EnglishBody() {
  return (
    <>
      <Section id="why-no-banner" heading="1. Why there is no cookie banner">
        <P>
          Under Article 5(3) of the ePrivacy Directive, implemented in Portugal by Article 5 of
          Law 41/2004, consent is needed before storing information on your device or reading
          information already stored there — <em>unless</em> that storage is strictly necessary to
          provide the service you asked for. A banner is not a legal formality to be shown
          regardless; it is required only when something non-essential is being stored.
        </P>
        <P>
          We deliberately built the site so that nothing non-essential is stored without you asking.
          What is stored is either a preference you set yourself or a security measure needed to
          serve the site at all — both of which the rules exempt. That means no banner is needed,
          and you get to read the site without dismissing a pop-up. If we ever add anything that
          does require consent, a consent tool will appear here first.
        </P>
      </Section>

      <Section id="what-we-store" heading="2. What is actually stored on your device">
        <StorageTable
          headers={['Name', 'Type', 'Purpose', 'Expires']}
          rows={[
            [
              <code key="c">bsmartish-lang</code>,
              'Local storage (not a cookie)',
              'Remembers whether you chose English or Portuguese, so the site does not reset every time you open a page. Set only when you click the language switch.',
              'Until you clear your browser data',
            ],
            [
              <code key="c">__cf_bm</code>,
              'Cookie, set by Cloudflare',
              'Tells automated bots apart from real visitors. Cloudflare protects this site from attacks and abusive traffic; this cookie is what makes that possible. It is a security measure, not a tracking or advertising cookie, and it cannot be used to identify you or follow you across other websites.',
              '30 minutes',
            ],
          ]}
        />
        <P>That is the complete list, and both entries are exempt from the consent requirement:</P>
        <UL>
          <LI>
            <code>bsmartish-lang</code> is a user-preference store, written only as a direct result
            of an action you took. It stays in your browser, is never transmitted to us, and
            contains no identifier.
          </LI>
          <LI>
            <code>__cf_bm</code> is strictly necessary to deliver the site securely — a service you
            asked for by visiting it. Blocking it would mean serving the site without protection
            against automated abuse.
          </LI>
        </UL>
      </Section>

      <Section id="analytics" heading="3. Analytics without cookies">
        <P>
          We measure how many people visit which pages using Vercel Web Analytics and Vercel Speed
          Insights. Unlike Google Analytics, these do not write a cookie or any other identifier to
          your device, so no consent is required for them. They produce aggregate counts only. How
          they work and how to object is described in our <A href="/privacy-policy">Privacy Policy</A>.
        </P>
      </Section>

      <Section id="maps" heading="4. Google Maps — blocked until you click">
        <P>
          Each property page shows the neighbourhood on a Google map. Embedding a Google map normally
          means your browser contacts Google as soon as the page opens, which lets Google set its own
          cookies before you have had any say in it.
        </P>
        <P>
          So we do not embed it. The map area shows a placeholder with a &ldquo;Load map&rdquo;
          button. Nothing is requested from Google, and no Google cookie can be set, until you press
          that button. If you press it, you are consenting to that one map load: Google receives your
          IP address and may store cookies under{' '}
          <A href="https://policies.google.com/privacy" external>Google&rsquo;s privacy policy</A>.
          Your choice is not remembered, so simply reloading the page takes you back to the blocked
          state.
        </P>
        <P>
          You can always look the address up in your own maps application instead — the address is
          written out on the page.
        </P>
      </Section>

      <Section id="infrastructure" heading="5. Cloudflare and Google Search Console">
        <P>
          This site sits behind <strong>Cloudflare</strong>, which filters malicious traffic before
          it reaches our server and speeds the site up by serving it from a location near you.
          Cloudflare necessarily sees your IP address and the request itself, and sets the security
          cookie listed above. It acts as our processor and does not use this traffic to build
          advertising profiles.
        </P>
        <P>
          We also use <strong>Google Search Console</strong>, which reports how our pages perform in
          Google search results. It runs no code on this website, sets no cookie, and shows us only
          aggregated search statistics — never anything that identifies an individual visitor.
        </P>
      </Section>

      <Section id="external" heading="6. Links to booking platforms">
        <P>
          Idealista, Airbnb, Spotahome and Flatio are links, not embeds. Nothing from those sites
          runs on bsmartish.com. Their cookies only come into play once you click through and land
          on their site, under their own policies.
        </P>
      </Section>

      <Section id="control" heading="7. How to remove what is stored">
        <UL>
          <LI>
            To clear the saved language preference, clear site data for bsmartish.com in your
            browser settings, or use a private window.
          </LI>
          <LI>To make sure no Google map ever loads, simply do not press &ldquo;Load map&rdquo;.</LI>
          <LI>
            Every major browser also lets you block all cookies and local storage by default. The
            site will still work; it will just start in English each time.
          </LI>
        </UL>
      </Section>

      <Section id="contact" heading="8. Questions">
        <P>
          Write to <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
      </Section>
    </>
  )
}

function CorpoPortugues() {
  return (
    <>
      <Section id="sem-banner" heading="1. Porque não existe banner de cookies">
        <P>
          Nos termos do artigo 5.º, n.º 3, da Diretiva ePrivacy, transposto em Portugal pelo artigo
          5.º da Lei n.º 41/2004, é necessário consentimento antes de guardar informação no seu
          dispositivo ou de ler informação aí já guardada — <em>exceto</em> quando esse
          armazenamento é estritamente necessário para prestar o serviço que solicitou. O banner não
          é uma formalidade a exibir em qualquer circunstância; só é exigido quando se guarda algo
          não essencial.
        </P>
        <P>
          Construímos deliberadamente o site de modo a que nada de não essencial seja guardado sem
          que o peça. O que é guardado é ou uma preferência que o próprio definiu, ou uma medida de
          segurança necessária para sequer servir o site — ambas dispensadas pelas regras. Por isso
          não é preciso banner nenhum, e pode ler o site sem ter de fechar uma janela. Se alguma vez
          acrescentarmos algo que exija consentimento, aparecerá aqui primeiro uma ferramenta de
          consentimento.
        </P>
      </Section>

      <Section id="o-que-guardamos" heading="2. O que é efetivamente guardado no seu dispositivo">
        <StorageTable
          headers={['Nome', 'Tipo', 'Finalidade', 'Validade']}
          rows={[
            [
              <code key="c">bsmartish-lang</code>,
              'Armazenamento local (não é um cookie)',
              'Memoriza se escolheu inglês ou português, para que o site não volte ao início sempre que abre uma página. Só é criado quando clica no seletor de idioma.',
              'Até limpar os dados de navegação',
            ],
            [
              <code key="c">__cf_bm</code>,
              'Cookie, criado pela Cloudflare',
              'Distingue robôs automatizados de visitantes reais. A Cloudflare protege este site de ataques e de tráfego abusivo; é este cookie que o torna possível. É uma medida de segurança, não um cookie de rastreio ou de publicidade, e não pode ser usado para o identificar nem para o seguir noutros sites.',
              '30 minutos',
            ],
          ]}
        />
        <P>
          É esta a lista completa, e ambos os registos estão dispensados de consentimento:
        </P>
        <UL>
          <LI>
            <code>bsmartish-lang</code> guarda uma preferência do utilizador, criada apenas em
            resultado direto de uma ação sua. Fica no seu navegador, nunca nos é transmitida e não
            contém qualquer identificador.
          </LI>
          <LI>
            <code>__cf_bm</code> é estritamente necessário para entregar o site em segurança — um
            serviço que solicitou ao visitá-lo. Bloqueá-lo significaria servir o site sem proteção
            contra abuso automatizado.
          </LI>
        </UL>
      </Section>

      <Section id="estatisticas" heading="3. Estatísticas sem cookies">
        <P>
          Medimos quantas pessoas visitam que páginas através do Vercel Web Analytics e do Vercel
          Speed Insights. Ao contrário do Google Analytics, estas ferramentas não escrevem qualquer
          cookie ou identificador no seu dispositivo, pelo que não exigem consentimento. Produzem
          apenas contagens agregadas. O modo como funcionam e como se opor está descrito na nossa{' '}
          <A href="/privacy-policy">Política de Privacidade</A>.
        </P>
      </Section>

      <Section id="mapas" heading="4. Google Maps — bloqueado até clicar">
        <P>
          Cada página de imóvel mostra a zona num mapa do Google. Normalmente, incorporar um mapa do
          Google faz com que o seu navegador contacte a Google assim que a página abre, o que permite
          à Google criar os seus próprios cookies antes de o visitante ter tido qualquer palavra a
          dizer.
        </P>
        <P>
          Por isso não o incorporamos. A área do mapa mostra um marcador com um botão
          &laquo;Carregar mapa&raquo;. Nada é pedido à Google, e nenhum cookie da Google pode ser
          criado, enquanto não premir esse botão. Se o premir, está a consentir nesse carregamento
          concreto: a Google recebe o seu endereço IP e pode guardar cookies ao abrigo da{' '}
          <A href="https://policies.google.com/privacy" external newTabLabel={NT}>
            política de privacidade da Google
          </A>
          . A sua escolha não é memorizada, pelo que basta recarregar a página para voltar ao estado
          bloqueado.
        </P>
        <P>
          Em alternativa, pode sempre procurar a morada na sua própria aplicação de mapas — a morada
          está escrita na página.
        </P>
      </Section>

      <Section id="infraestrutura" heading="5. Cloudflare e Google Search Console">
        <P>
          Este site está por detrás da <strong>Cloudflare</strong>, que filtra tráfego malicioso
          antes de chegar ao nosso servidor e acelera o site servindo-o a partir de um local próximo
          de si. A Cloudflare vê necessariamente o seu endereço IP e o próprio pedido, e cria o
          cookie de segurança indicado acima. Atua como nosso subcontratante e não utiliza este
          tráfego para construir perfis publicitários.
        </P>
        <P>
          Utilizamos também o <strong>Google Search Console</strong>, que nos indica o desempenho das
          nossas páginas nos resultados de pesquisa do Google. Não executa qualquer código neste
          site, não cria cookies e mostra-nos apenas estatísticas de pesquisa agregadas — nunca algo
          que identifique um visitante concreto.
        </P>
      </Section>

      <Section id="externos" heading="6. Ligações para plataformas de reserva">
        <P>
          Idealista, Airbnb, Spotahome e Flatio são ligações, não conteúdos incorporados. Nada
          desses sites é executado em bsmartish.com. Os cookies deles só entram em jogo depois de
          clicar e chegar ao site respetivo, ao abrigo das políticas deles.
        </P>
      </Section>

      <Section id="controlo" heading="7. Como remover o que está guardado">
        <UL>
          <LI>
            Para apagar a preferência de idioma, limpe os dados do site bsmartish.com nas definições
            do seu navegador, ou utilize uma janela privada.
          </LI>
          <LI>
            Para garantir que nenhum mapa do Google é carregado, basta não premir
            &laquo;Carregar mapa&raquo;.
          </LI>
          <LI>
            Todos os navegadores permitem também bloquear por predefinição todos os cookies e o
            armazenamento local. O site continuará a funcionar; apenas começará sempre em inglês.
          </LI>
        </UL>
      </Section>

      <Section id="contacto" heading="8. Questões">
        <P>
          Escreva para <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
      </Section>
    </>
  )
}

export default function CookieDoc() {
  return (
    <LegalDoc
      lastUpdated={LEGAL_LAST_UPDATED}
      en={{
        eyebrow: 'Legal',
        title: 'Cookie Policy',
        intro:
          'The short version: this website sets no advertising cookies, no tracking cookies and no analytics cookies. It stores your language choice, plus one security cookie, and it blocks third-party maps until you ask for them. That is why you are not seeing a cookie banner.',
        body: <EnglishBody />,
      }}
      pt={{
        eyebrow: 'Informação Legal',
        title: 'Política de Cookies',
        intro:
          'Em resumo: este site não cria cookies de publicidade, de rastreio nem de estatísticas. Guarda a sua escolha de idioma e um cookie de segurança, e bloqueia os mapas de terceiros até que os peça. É por isso que não está a ver um banner de cookies.',
        body: <CorpoPortugues />,
      }}
    />
  )
}
