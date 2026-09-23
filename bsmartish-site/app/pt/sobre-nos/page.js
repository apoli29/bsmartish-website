import AboutPage from '@/app/components/pages/AboutPage'
import { pageMetadata } from '@/app/lib/pageMeta'

export const metadata = pageMetadata('about', 'pt')

export default function SobreNos() {
  return <AboutPage locale="pt" />
}
