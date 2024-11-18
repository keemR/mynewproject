import Header from '../components/Header'
import PostCard from '../components/PostCard'

const couponPosts = [
  {
    title: "50% Off Electronics at TechStore",
    description: "Save big on laptops, smartphones, and more!",
    image: "/images/electronics-coupon.jpg",
    link: "/coupons/electronics/techstore-50-off",
    category: "Electronics",
    expiryDate: "2024-05-01"
  },
  {
    title: "BOGO Grocery Deals at FreshMart",
    description: "Buy one get one free on selected items",
    image: "/images/grocery-coupon.jpg",
    link: "/coupons/grocery/freshmart-bogo",
    category: "Grocery",
    expiryDate: "2024-04-15"
  },
  {
    title: "25% Off Fashion Items",
    description: "Spring collection sale at StyleHub",
    image: "/images/fashion-coupon.jpg",
    link: "/coupons/fashion/stylehub-spring",
    category: "Fashion",
    expiryDate: "2024-04-30"
  }
]

export default function CouponsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Coupons</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Coupons
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Grocery
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Electronics
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Fashion
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Home & Garden
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {couponPosts.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
} 