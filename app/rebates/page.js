import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'

const rebatePosts = [
  {
    title: "$200 Back on Smart TVs",
    description: "Get cash back on select TV models",
    image: "/images/tv-rebate.jpg",
    link: "/rebates/electronics/smart-tv-rebate",
    category: "Electronics",
    endDate: "2024-06-30"
  },
  {
    title: "Appliance Rebate Program",
    description: "Save up to $500 on energy-efficient appliances",
    image: "/images/appliance-rebate.jpg",
    link: "/rebates/home-appliances/energy-efficient",
    category: "Home Appliances",
    endDate: "2024-07-15"
  },
  {
    title: "Garden Tools Rebate",
    description: "Get 30% back on qualifying garden equipment",
    image: "/images/garden-tools.jpg",
    link: "/rebates/garden-tools/spring-rebate",
    category: "Garden Tools",
    endDate: "2024-05-31"
  }
]

export default function RebatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Rebates</h1>
        <SearchBar />
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Rebates
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Electronics
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Home Appliances
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Garden Tools
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rebatePosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

        <Newsletter />
      </main>
    </div>
  )
} 