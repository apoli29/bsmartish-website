import CookieDoc from '../cookie-policy/CookieDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'cookies',
  'pt',
  'Cookies e tecnologias semelhantes em bsmartish.pt e bsmartish.com: inventário, categorias, consentimento e como alterar as suas escolhas.'
)

export default function PoliticaDeCookiesPage() {
  return <CookieDoc pageLang="pt" />
}
