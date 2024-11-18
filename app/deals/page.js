import Header from '../components/Header'
import PostCard from '../components/PostCard'

const dealPosts = [
  {
    title: "Flash Sale: 70% Off Smart Home Devices",
    description: "24-hour deal on smart speakers, displays, and more!",
    image: "/images/smart-home-deal.jpg",
    link: "/deals/daily-deals/smart-home-flash-sale",
    category: "Flash Sales",
    endTime: "2024-04-10T23:59:59"
  },
  {
    title: "Bundle Deal: Gaming Console + 3 Games",
    description: "Save $150 on this exclusive gaming bundle",
    image: "/images/gaming-bundle.jpg",
    link: "/deals/bundle-deals/gaming-console-bundle",
    category: "Bundle Deals",
    endTime: "2024-04-15T23:59:59"
  },
  {
    title: "Clearance: Home Office Furniture",
    description: "Up to 80% off on desks, chairs, and accessories",
    image: "/images/furniture-clearance.jpg",
    link: "/deals/clearance/home-office-furniture",
    category: "Clearance",
    endTime: "2024-04-20T23:59:59"
  }
]

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Hot Deals</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Deals
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Daily Deals
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Flash Sales
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Clearance
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Bundle Deals
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  )
} 