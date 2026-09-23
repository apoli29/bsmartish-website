import HomePage from '@/app/components/pages/HomePage'
import { pageMetadata } from '@/app/lib/pageMeta'

export const metadata = pageMetadata('home', 'pt')

export default function Inicio() {
  return <HomePage />
}
