// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS IDENTIFICATION — SINGLE SOURCE OF TRUTH
//
// Portuguese law (Decreto-Lei n.º 7/2004, art. 10) requires every commercial
// website to give "permanent, direct and easy access" to the identification of
// the business behind it. Every legal page and the site footer read from here,
// so you only ever have to fill this in once.
//
// >>> ACTION REQUIRED: replace every "TODO:" value below with your real data.
//     Any field left as null is simply not rendered, so the site never shows a
//     placeholder to the public — but the page is not compliant until they are
//     filled in.
// ─────────────────────────────────────────────────────────────────────────────

export const legalEntity = {
  // Full registered company name, exactly as it appears at the Registo Comercial
  // (e.g. "BSMARTISH — Renovação Urbana, Lda."). NOT the brand name.
  legalName: 'Neptunevictory Lda',

  // Trading / brand name shown to the public.
  tradingName: 'BSMARTISH',

  // BSMARTISH URBAN RENOVATION is a registered trademark held by the company
  // above. Stated in the counsel-drafted Informação Legal.
  trademark: 'BSMARTISH URBAN RENOVATION',

  // Registered office (sede social): street, postcode, city, country.
  address: 'Alameda da Granja, 66, 4425-093 Maia, Portugal',

  // NIPC / NIF (also serves as the VAT number, prefixed with PT).
  taxNumber: '514177152',

  // Commercial registry: "matriculada na Conservatória do Registo Comercial
  // de <city> sob o número <n>". In Portugal this is usually the same as the NIPC.
  // Still unknown: the counsel documents give the NIPC but never name the
  // conservatória or the matrícula number. Both rows are omitted from the
  // rendered page until filled.
  registryOffice: null, // TODO
  registryNumber: null, // TODO

  // Share capital (capital social), if a Lda./S.A.
  shareCapital: null, // TODO — not stated in the counsel documents

  email: 'hello@bsmartish.com',
  phone: '+351 936 920 210',
  phoneHref: '+351936920210',

  // Cost-of-call statement. Portuguese consumer law (DL 24/2014, art. 4/2 and
  // Lei 24/96, art. 9.º-A) requires consumer-facing numbers to state the cost.
  // A normal Portuguese mobile number is "chamada para rede móvel nacional".
  phoneCostNote: {
    en: 'Call to a Portuguese mobile network — standard national rates apply.',
    pt: 'Chamada para a rede móvel nacional.',
  },

  // ── Sector licences ───────────────────────────────────────────────────────
  // AMI licence number — ONLY if you carry out real estate MEDIATION
  // (matching third-party buyers/sellers or landlords/tenants for a fee).
  // Renting out your OWN properties and managing renovation projects for
  // investors is NOT mediation and needs no AMI. Leave null if you have none.
  // CONFIRMED 2026-09: BSMARTISH does not carry out mediation — it lets its own
  // properties and provides project management/consultancy. No AMI required.
  amiLicence: null,

  // RNAL / Alojamento Local registration number — REQUIRED, and required to be
  // shown in ALL advertising (DL 128/2014, art. 18), if you let any unit for
  // stays of LESS than 30 days. Leave null if your minimum stay is 30+ days.
  // CONFIRMED 2026-09: minimum stay is 30 days, so the lettings fall outside
  // the Alojamento Local regime. No RNAL registration or number required.
  rnalNumber: null,

  // ── Consumer dispute resolution ───────────────────────────────────────────
  // Lei 144/2015, art. 18 obliges you to tell consumers, on your website, which
  // ADR ("RAL") entity is competent for disputes with you. For a business based
  // in Porto that is normally CICAP.
  adrEntity: {
    name: 'CICAP — Centro de Informação de Consumo e Arbitragem do Porto',
    url: 'https://www.cicap.pt',
    address: 'Rua Damião de Góis 31, loja 6, 4050-225 Porto',
    phone: '+351 225 508 349',
  },

  // Electronic complaints book (DL 156/2005 as amended by DL 74/2017): if you
  // are a covered supplier and have a website, the link must be visible on it.
  complaintsBookUrl: 'https://www.livroreclamacoes.pt/inicio',

  // Data protection supervisory authority for Portugal.
  dpa: {
    name: 'CNPD — Comissão Nacional de Proteção de Dados',
    url: 'https://www.cnpd.pt',
  },

  // Contact point for data protection requests. A DPO is not mandatory for a
  // business of this size; a plain contact address satisfies GDPR art. 13.
  privacyEmail: 'rgpd@bsmartish.com',
}

// Last substantive review of the legal documents. Update when you edit them.
export const LEGAL_LAST_UPDATED = {
  iso: '2026-09-08',
  en: '8 September 2026',
  pt: '8 de setembro de 2026',
}

// True once the operator has filled in the minimum set of identification data
// required by DL 7/2004. Used to show a build-time warning in development.
export const hasLegalEntityData = Boolean(
  legalEntity.legalName && legalEntity.address && legalEntity.taxNumber
)
