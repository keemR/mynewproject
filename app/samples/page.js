import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PostCard from '../components/PostCard'

const samplePosts = [
  {
    title: "Free Beauty Box Sample",
    description: "Get your free luxury beauty samples delivered!",
    image: "/images/beauty-box.jpg",
    link: "/samples/beauty/luxury-beauty-box",
    category: "Beauty",
    available: true
  },
  {
    title: "Premium Coffee Samples",
    description: "Try our new coffee blend for free!",
    image: "/images/coffee-sample.jpg",
    link: "/samples/food-beverage/premium-coffee",
    category: "Food & Beverage",
    available: true
  },
  {
    title: "Pet Food Sample Pack",
    description: "Get free samples for your furry friend",
    image: "/images/pet-food.jpg",
    link: "/samples/pet-products/food-sample-pack",
    category: "Pet Products",
    available: true
  }
]

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Free Samples</h1>
        <SearchBar />
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Samples
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Beauty
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Food & Beverage
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Health
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Pet Products
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samplePosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  )
} 