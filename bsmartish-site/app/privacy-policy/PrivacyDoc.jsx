'use client'

import { LegalDoc, Section, P, UL, LI, A } from '@/app/components/legal/LegalDoc'
import { legalEntity as E, LEGAL_LAST_UPDATED } from '@/app/lib/legalEntity'

const controller = E.legalName || E.tradingName
const NT = '(abre num novo separador)'

function EnglishBody() {
  return (
    <>
      <Section id="controller" heading="1. Who is responsible for your data">
        <P>
          The data controller is {controller}
          {E.address ? `, with registered office at ${E.address}` : ''}
          {E.taxNumber ? `, tax number ${E.taxNumber}` : ''}.
        </P>
        <P>
          For anything relating to this policy or to your personal data, write to{' '}
          <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
        <P>
          We have not appointed a Data Protection Officer, because our processing does not meet any
          of the conditions in Article 37 of the GDPR that would make one mandatory. The address
          above is our contact point for all data protection matters.
        </P>
      </Section>

      <Section id="what" heading="2. What we collect, and why">
        <P>
          This website has no account system, no shopping basket and no contact form. We do not ask
          you to type anything into it. There are three narrow ways your data is processed:
        </P>
        <UL>
          <LI>
            <strong>Aggregated audience measurement.</strong> We use Vercel Web Analytics and Vercel
            Speed Insights to count page views and measure loading performance. These tools do not
            use cookies and do not store an identifier on your device. They derive a non-reversible,
            daily-rotating hash from your IP address and browser so the same visitor is not counted
            twice on the same day, and they record coarse information such as the page visited, the
            referring site, the country, and the device and browser type. The result is statistics,
            not a profile: we cannot single you out, and we cannot link a visit to you. Legal basis:
            our legitimate interest in knowing whether our website works and is being found
            (Article 6(1)(f) GDPR).
          </LI>
          <LI>
            <strong>Server and security logs.</strong> Our hosting provider and Cloudflare record
            standard technical request logs, including IP addresses, which are needed to serve the
            site and to defend it against abuse. Legal basis: legitimate interest
            (Article 6(1)(f) GDPR).
          </LI>
          <LI>
            <strong>Maps you choose to load.</strong> Each property page contains a Google Maps
            location map that is <strong>not</strong> loaded until you click it. See section 4.
          </LI>
        </UL>
        <P>
          If you contact us by email or telephone, we process the details you send us — your name,
          your contact details and whatever you tell us — in order to answer you and, if it goes
          that way, to prepare and manage a rental or a project. Legal basis: steps taken at your
          request before entering into a contract, and performance of that contract
          (Article 6(1)(b) GDPR), and our legitimate interest in answering enquiries.
        </P>
      </Section>

      <Section id="not" heading="3. What we do not do">
        <UL>
          <LI>We do not sell, rent or trade personal data. Ever.</LI>
          <LI>We do not use advertising, retargeting or social media tracking pixels.</LI>
          <LI>We do not build profiles and we do not make automated decisions about you.</LI>
          <LI>We do not knowingly collect data from children.</LI>
        </UL>
      </Section>

      <Section id="third-parties" heading="4. Third parties who may receive data">
        <UL>
          <LI>
            <strong>Vercel Inc.</strong> — hosting, web analytics and performance measurement,
            acting as our processor.
          </LI>
          <LI>
            <strong>Cloudflare, Inc.</strong> — sits in front of the site, filtering malicious
            traffic and serving pages from a location near you. It processes your IP address and
            request data for that purpose, and sets a short-lived bot-detection cookie, as our
            processor. See our <A href="/cookie-policy">Cookie Policy</A>.
          </LI>
          <LI>
            <strong>Google Search Console</strong> — reports how our pages appear in Google search
            results. It runs no code on this site, sets no cookie and gives us only aggregate
            statistics, so it does not receive personal data about you from us.
          </LI>
          <LI>
            <strong>Google Ireland Limited</strong> — the location maps on property pages. These
            maps are blocked by default. Nothing is sent to Google until you click &ldquo;Load
            map&rdquo;; once you do, Google receives your IP address and may set cookies in your
            browser under its own privacy policy. Legal basis: your consent
            (Article 6(1)(a) GDPR), which you give by clicking, and which you can withdraw at any
            time by reloading the page without clicking.
          </LI>
          <LI>
            <strong>Booking platforms</strong> — Idealista, Airbnb, Spotahome and Flatio. When you
            follow one of our links to those sites you leave bsmartish.com and their own privacy
            policies apply. We do not pass them any data about you; they simply see that you
            arrived from our site.
          </LI>
        </UL>
        <P>
          Some of these providers are established outside the European Economic Area or transfer
          data to the United States. Where that happens the transfer is covered by the European
          Commission&rsquo;s Standard Contractual Clauses and, where applicable, by the EU&ndash;US
          Data Privacy Framework.
        </P>
      </Section>

      <Section id="retention" heading="5. How long we keep it">
        <UL>
          <LI>Aggregated analytics statistics: retained by Vercel for up to 12 months.</LI>
          <LI>Server and Cloudflare security logs: typically 30 days.</LI>
          <LI>
            Email correspondence: there is no contact form, no mailing list and no customer database
            behind this website. If you write to us, your message sits in our mailbox and nowhere
            else, for as long as we need it to deal with your enquiry. Afterwards we keep it only
            where the law requires — Portuguese tax and accounting rules oblige us to retain
            documents supporting a contract for 10 years. You can ask us to delete correspondence
            that is not covered by that obligation.
          </LI>
          <LI>
            Your language preference: stored only in your own browser, until you clear your browser
            data. It never reaches us.
          </LI>
        </UL>
      </Section>

      <Section id="rights" heading="6. Your rights">
        <P>Under the GDPR you can ask us to:</P>
        <UL>
          <LI>confirm whether we hold data about you, and give you a copy (access);</LI>
          <LI>correct data that is wrong or incomplete (rectification);</LI>
          <LI>delete data we no longer need (erasure);</LI>
          <LI>restrict how we use it, while a dispute is resolved;</LI>
          <LI>send your data to another provider in a machine-readable format (portability);</LI>
          <LI>
            object to processing we base on legitimate interest — including our audience
            measurement.
          </LI>
        </UL>
        <P>
          Where we rely on your consent, you can withdraw it at any time; that does not affect
          anything done before you withdrew it.
        </P>
        <P>
          Write to <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A> and we will answer
          within one month. There is no charge. If you are not satisfied with our answer you can
          complain to the{' '}
          <A href={E.dpa.url} external>{E.dpa.name}</A>, the Portuguese supervisory authority.
        </P>
      </Section>

      <Section id="security" heading="7. Security">
        <P>
          The site is served over HTTPS only. Access to the mailbox and hosting account is limited
          to the people who need it and protected by strong authentication. No system is perfectly
          secure, but if a breach ever affected your data and posed a high risk to you, we would
          tell you and notify the supervisory authority as the GDPR requires.
        </P>
      </Section>

      <Section id="changes" heading="8. Changes to this policy">
        <P>
          If we change how we handle personal data we will update this page and change the date at
          the top. Material changes will be highlighted on the site.
        </P>
      </Section>
    </>
  )
}

function CorpoPortugues() {
  return (
    <>
      <Section id="responsavel" heading="1. Quem é responsável pelos seus dados">
        <P>
          O responsável pelo tratamento é a {controller}
          {E.address ? `, com sede em ${E.address}` : ''}
          {E.taxNumber ? `, NIF ${E.taxNumber}` : ''}.
        </P>
        <P>
          Para qualquer assunto relacionado com esta política ou com os seus dados pessoais,
          escreva para <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A>.
        </P>
        <P>
          Não designámos Encarregado de Proteção de Dados, porque o nosso tratamento não preenche
          nenhuma das condições do artigo 37.º do RGPD que o tornariam obrigatório. O endereço
          acima é o nosso ponto de contacto para todos os assuntos de proteção de dados.
        </P>
      </Section>

      <Section id="o-que" heading="2. O que recolhemos, e porquê">
        <P>
          Este site não tem registo de utilizadores, não tem carrinho de compras e não tem
          formulário de contacto. Não lhe pedimos que escreva nada nele. Os seus dados são tratados
          apenas de três formas, todas elas limitadas:
        </P>
        <UL>
          <LI>
            <strong>Medição agregada de audiência.</strong> Utilizamos o Vercel Web Analytics e o
            Vercel Speed Insights para contar visualizações de páginas e medir o desempenho do site.
            Estas ferramentas não usam cookies nem guardam qualquer identificador no seu
            dispositivo. Derivam do seu endereço IP e do seu navegador um código irreversível, que
            muda todos os dias, apenas para que o mesmo visitante não seja contado duas vezes no
            mesmo dia, e registam informação genérica como a página visitada, o site de proveniência,
            o país e o tipo de dispositivo e navegador. O resultado são estatísticas, não um perfil:
            não conseguimos identificá-lo nem associar uma visita à sua pessoa. Fundamento jurídico:
            o nosso interesse legítimo em saber se o site funciona e se está a ser encontrado
            (artigo 6.º, n.º 1, alínea f) do RGPD).
          </LI>
          <LI>
            <strong>Registos de servidor e de segurança.</strong> O nosso fornecedor de alojamento e
            a Cloudflare registam os pedidos técnicos habituais, incluindo endereços IP, necessários
            para servir o site e para o proteger de abusos. Fundamento jurídico: interesse legítimo
            (artigo 6.º, n.º 1, alínea f) do RGPD).
          </LI>
          <LI>
            <strong>Mapas que decida carregar.</strong> Cada página de imóvel tem um mapa do Google
            Maps que <strong>não</strong> é carregado enquanto não clicar nele. Ver o ponto 4.
          </LI>
        </UL>
        <P>
          Se nos contactar por email ou por telefone, tratamos os dados que nos enviar — o seu nome,
          os seus contactos e aquilo que nos disser — para lhe responder e, se for esse o caso, para
          preparar e gerir um arrendamento ou um projeto. Fundamento jurídico: diligências
          pré-contratuais a seu pedido e execução do contrato (artigo 6.º, n.º 1, alínea b) do
          RGPD), bem como o nosso interesse legítimo em responder a pedidos de informação.
        </P>
      </Section>

      <Section id="nao-fazemos" heading="3. O que não fazemos">
        <UL>
          <LI>Não vendemos, alugamos nem trocamos dados pessoais. Nunca.</LI>
          <LI>Não usamos pixéis de publicidade, de remarketing ou de redes sociais.</LI>
          <LI>Não criamos perfis nem tomamos decisões automatizadas sobre si.</LI>
          <LI>Não recolhemos conscientemente dados de crianças.</LI>
        </UL>
      </Section>

      <Section id="terceiros" heading="4. Terceiros que podem receber dados">
        <UL>
          <LI>
            <strong>Vercel Inc.</strong> — alojamento, estatísticas de visitas e medição de
            desempenho, na qualidade de subcontratante.
          </LI>
          <LI>
            <strong>Cloudflare, Inc.</strong> — está à frente do site, filtrando tráfego malicioso e
            servindo as páginas a partir de um local próximo de si. Para esse efeito trata o seu
            endereço IP e os dados do pedido, e cria um cookie de deteção de robôs de curta duração,
            na qualidade de subcontratante. Ver a nossa{' '}
            <A href="/cookie-policy">Política de Cookies</A>.
          </LI>
          <LI>
            <strong>Google Search Console</strong> — indica-nos como as nossas páginas aparecem nos
            resultados de pesquisa do Google. Não executa qualquer código neste site, não cria
            cookies e dá-nos apenas estatísticas agregadas, pelo que não recebe da nossa parte
            quaisquer dados pessoais sobre si.
          </LI>
          <LI>
            <strong>Google Ireland Limited</strong> — os mapas de localização nas páginas dos
            imóveis. Estes mapas estão bloqueados por predefinição. Nada é enviado para a Google
            enquanto não clicar em &laquo;Carregar mapa&raquo;; a partir do momento em que o fizer, a
            Google recebe o seu endereço IP e pode criar cookies no seu navegador, ao abrigo da
            política de privacidade da própria Google. Fundamento jurídico: o seu consentimento
            (artigo 6.º, n.º 1, alínea a) do RGPD), dado através desse clique, e que pode retirar a
            qualquer momento recarregando a página sem clicar.
          </LI>
          <LI>
            <strong>Plataformas de reserva</strong> — Idealista, Airbnb, Spotahome e Flatio. Quando
            segue uma das nossas ligações para esses sites, sai de bsmartish.com e passam a aplicar-se
            as políticas de privacidade deles. Não lhes transmitimos quaisquer dados sobre si; apenas
            veem que chegou através do nosso site.
          </LI>
        </UL>
        <P>
          Alguns destes fornecedores estão estabelecidos fora do Espaço Económico Europeu ou
          transferem dados para os Estados Unidos. Quando isso acontece, a transferência está coberta
          pelas Cláusulas Contratuais-Tipo da Comissão Europeia e, quando aplicável, pelo Quadro de
          Privacidade de Dados UE&ndash;EUA.
        </P>
      </Section>

      <Section id="conservacao" heading="5. Durante quanto tempo conservamos">
        <UL>
          <LI>Estatísticas agregadas de visitas: conservadas pela Vercel até 12 meses.</LI>
          <LI>Registos de servidor e de segurança da Cloudflare: normalmente 30 dias.</LI>
          <LI>
            Correspondência por email: não existe formulário de contacto, lista de distribuição nem
            base de dados de clientes por detrás deste site. Se nos escrever, a sua mensagem fica na
            nossa caixa de correio e em mais lado nenhum, pelo tempo necessário para tratar do seu
            pedido. Depois disso, só a conservamos quando a lei o exige — as regras fiscais e
            contabilísticas portuguesas obrigam a guardar durante 10 anos os documentos de suporte a
            um contrato. Pode pedir-nos que apaguemos a correspondência não abrangida por essa
            obrigação.
          </LI>
          <LI>
            A sua preferência de idioma: guardada apenas no seu próprio navegador, até limpar os
            dados de navegação. Nunca chega até nós.
          </LI>
        </UL>
      </Section>

      <Section id="direitos" heading="6. Os seus direitos">
        <P>Ao abrigo do RGPD, pode pedir-nos que:</P>
        <UL>
          <LI>confirmemos se temos dados sobre si e lhe entreguemos uma cópia (acesso);</LI>
          <LI>corrijamos dados errados ou incompletos (retificação);</LI>
          <LI>apaguemos dados de que já não necessitamos (apagamento);</LI>
          <LI>limitemos a sua utilização, enquanto um diferendo é resolvido;</LI>
          <LI>enviemos os seus dados a outro fornecedor em formato legível por máquina (portabilidade);</LI>
          <LI>
            se oponha a tratamentos que baseamos no interesse legítimo — incluindo a nossa medição
            de audiência.
          </LI>
        </UL>
        <P>
          Quando nos baseamos no seu consentimento, pode retirá-lo a qualquer momento; isso não
          afeta o que tiver sido feito antes de o retirar.
        </P>
        <P>
          Escreva para <A href={`mailto:${E.privacyEmail}`}>{E.privacyEmail}</A> e responderemos no
          prazo de um mês. É gratuito. Se não ficar satisfeito com a nossa resposta, pode apresentar
          reclamação à <A href={E.dpa.url} external newTabLabel={NT}>{E.dpa.name}</A>, a autoridade
          de controlo portuguesa.
        </P>
      </Section>

      <Section id="seguranca" heading="7. Segurança">
        <P>
          O site é servido exclusivamente por HTTPS. O acesso à caixa de correio e à conta de
          alojamento está limitado a quem dele necessita e protegido por autenticação forte. Nenhum
          sistema é perfeitamente seguro, mas se alguma vez ocorrer uma violação que afete os seus
          dados e represente um risco elevado para si, informá-lo-emos e notificaremos a autoridade
          de controlo, como o RGPD exige.
        </P>
      </Section>

      <Section id="alteracoes" heading="8. Alterações a esta política">
        <P>
          Se alterarmos a forma como tratamos dados pessoais, atualizaremos esta página e a data no
          topo. As alterações relevantes serão assinaladas no site.
        </P>
      </Section>
    </>
  )
}

export default function PrivacyDoc() {
  return (
    <LegalDoc
      lastUpdated={LEGAL_LAST_UPDATED}
      en={{
        eyebrow: 'Legal',
        title: 'Privacy Policy',
        intro: `This policy explains what personal data ${controller} collects when you visit bsmartish.com, why we collect it, how long we keep it and what rights you have. It is written to meet Regulation (EU) 2016/679 (GDPR) and Portuguese Law 58/2019.`,
        body: <EnglishBody />,
      }}
      pt={{
        eyebrow: 'Informação Legal',
        title: 'Política de Privacidade',
        intro: `Esta política explica que dados pessoais a ${controller} recolhe quando visita bsmartish.com, porque os recolhe, durante quanto tempo os conserva e que direitos lhe assistem. Foi redigida para cumprir o Regulamento (UE) 2016/679 (RGPD) e a Lei n.º 58/2019.`,
        body: <CorpoPortugues />,
      }}
    />
  )
}
