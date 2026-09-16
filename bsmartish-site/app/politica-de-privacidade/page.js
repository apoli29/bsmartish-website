import PrivacyDoc from '../privacy-policy/PrivacyDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'privacy',
  'pt',
  'Como a Neptunevictory, Lda. trata dados pessoais através de bsmartish.pt e bsmartish.com: finalidades, fundamentos jurídicos, destinatários, conservação e direitos dos titulares.'
)

export default function PoliticaDePrivacidadePage() {
  return <PrivacyDoc pageLang="pt" />
}
