'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            DealHunter
          </Link>
          <div className="flex space-x-4">
            <Link href="/deals" className="hover:text-blue-600">Deals</Link>
            <Link href="/freebies" className="hover:text-blue-600">Freebies</Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 