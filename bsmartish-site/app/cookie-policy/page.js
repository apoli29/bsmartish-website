import CookieDoc from './CookieDoc'
import { legalMetadata } from '@/app/lib/legalRoutes'

export const metadata = legalMetadata(
  'cookies',
  'en',
  'Cookies and similar technologies on bsmartish.com and bsmartish.pt: inventory, categories, consent and how to change your choices.'
)

export default function CookiePolicyPage() {
  return <CookieDoc pageLang="en" />
}
