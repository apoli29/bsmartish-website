import RentalsPage from '@/app/components/pages/RentalsPage'
import { pageMetadata } from '@/app/lib/pageMeta'

export const metadata = pageMetadata('rentals', 'pt')

export default function Arrendamento() {
  return <RentalsPage locale="pt" />
}
