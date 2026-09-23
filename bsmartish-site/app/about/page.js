import AboutPage from '@/app/components/pages/AboutPage'
import { pageMetadata } from '@/app/lib/pageMeta'

export const metadata = pageMetadata('about', 'en')

export default function About() {
  return <AboutPage locale="en" />
}
