import LegalNoticeDoc from './LegalNoticeDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'legalNotice',
  'en',
  'Owner of the bsmartish.com and bsmartish.pt websites, contact details, purpose, intellectual property and governing law.'
)

export default function LegalInformationPage() {
  return <LegalNoticeDoc pageLang="en" />
}
