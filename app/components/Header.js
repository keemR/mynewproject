'use client'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: 'Deals', href: '/deals' },
    { name: 'Freebies', href: '/freebies' },
    { name: 'Coupons', href: '/coupons' },
    { name: 'Samples', href: '/samples' },
    { name: 'Gift Cards', href: '/gift-cards' },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">DealHunter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map(category => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="search"
              placeholder="Search deals..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
} 