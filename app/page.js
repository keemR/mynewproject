import { DealCard } from '@/components/DealCard'
import { getFeaturedDeals } from '@/utils/deals'

export default async function Home() {
  const deals = await getFeaturedDeals()

  return (
    <div className="space-y-8">
      {/* Featured Deals */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.featured.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Latest Deals */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.latest.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>
    </div>
  )
}
