import PrivacyDoc from './PrivacyDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'privacy',
  'en',
  'How Neptunevictory, Lda. processes personal data through bsmartish.com and bsmartish.pt: purposes, legal bases, recipients, retention and your rights.'
)

export default function PrivacyPolicyPage() {
  return <PrivacyDoc pageLang="en" />
}
