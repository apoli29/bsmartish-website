import LegalNoticeDoc from '../legal-information/LegalNoticeDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'legalNotice',
  'pt',
  'Titular e responsável pelos websites bsmartish.pt e bsmartish.com, contactos, objeto, propriedade intelectual e lei aplicável.'
)

export default function InformacaoLegalPage() {
  return <LegalNoticeDoc pageLang="pt" />
}
