import { DealCard } from './components/DealCard'
import { getFeaturedDeals } from './utils/deals'

export default async function Home() {
  const deals = await getFeaturedDeals()

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <nav className="space-y-2">
              <a href="/deals" className="block hover:text-blue-600">Deals</a>
              <a href="/freebies" className="block hover:text-blue-600">Freebies</a>
              <a href="/coupons" className="block hover:text-blue-600">Coupons</a>
              <a href="/samples" className="block hover:text-blue-600">Samples</a>
              <a href="/contests" className="block hover:text-blue-600">Contests</a>
              <a href="/sweepstakes" className="block hover:text-blue-600">Sweepstakes</a>
              <a href="/rebates" className="block hover:text-blue-600">Rebates</a>
              <a href="/discounts" className="block hover:text-blue-600">Discounts</a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-8">Latest Deals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deals?.featured?.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
