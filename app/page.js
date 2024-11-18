import { DealCard } from './components/DealCard'
import { getFeaturedDeals } from './utils/deals'

export default async function Home() {
  const deals = await getFeaturedDeals()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Welcome to My New Project
        </h1>

        {/* Featured Deals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deals.featured.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
