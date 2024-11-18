import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'

const discountPosts = [
  {
    title: "Student Discount - 50% Off Software",
    description: "Special software discounts for students with valid ID",
    image: "/images/student-discount.jpg",
    link: "/discounts/student/software-deals",
    category: "Student Discounts",
    endDate: "2024-08-31"
  },
  {
    title: "Military & Veterans 20% Off",
    description: "Exclusive savings for military personnel and veterans",
    image: "/images/military-discount.jpg",
    link: "/discounts/military/store-wide",
    category: "Military Discounts",
    endDate: "2024-12-31"
  },
  {
    title: "Senior Citizen Shopping Day",
    description: "10% off every Wednesday for seniors",
    image: "/images/senior-discount.jpg",
    link: "/discounts/senior/weekly-savings",
    category: "Senior Discounts",
    ongoing: true
  }
]

export default function DiscountsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Discounts</h1>
        <SearchBar />
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Discounts
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Student Discounts
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Military Discounts
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Senior Discounts
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Seasonal Sales
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discountPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

        <Newsletter />
      </main>
    </div>
  )
} 