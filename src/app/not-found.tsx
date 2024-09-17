import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Hjem">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Siden ble ikke funnet
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Beklager, vi kunne ikke finne siden du leter etter.
      </p>
      <Button href="/" className="mt-10">
        Gå tilbake til forsiden
      </Button>
    </SlimLayout>
  )
}
