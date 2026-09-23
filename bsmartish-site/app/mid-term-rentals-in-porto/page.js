import RentalsPage from '@/app/components/pages/RentalsPage'
import { pageMetadata } from '@/app/lib/pageMeta'

export const metadata = pageMetadata('rentals', 'en')

export default function Rentals() {
  return <RentalsPage locale="en" />
}
