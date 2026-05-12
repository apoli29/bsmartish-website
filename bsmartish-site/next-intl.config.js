import { getRequestConfig } from 'next-intl/server'

// Server always defaults to 'en'; the client-side I18nProvider overrides
// the locale dynamically based on localStorage ("bsmartish-lang").
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'en'
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
