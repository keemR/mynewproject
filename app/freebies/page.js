import Header from '../components/Header'
import PostCard from '../components/PostCard'

const freebiesPosts = [
  {
    title: "Freebie Alert: Enjoy a Free Coffee",
    description: "Get your free coffee from leading coffee shops. Limited time offer!",
    image: "/images/coffee-freebie.jpg",
    link: "/freebies/free-coffee",
    category: "Free Coffee"
  },
  {
    title: "Get Your Free Sample of New Skincare Products",
    description: "Luxury skincare samples available now. Try before you buy!",
    image: "/images/skincare-samples.jpg",
    link: "/freebies/skincare-samples",
    category: "Skincare Samples"
  },
  {
    title: "Win Free Movie Tickets to the Latest Blockbuster",
    description: "Enter for a chance to win free movie tickets!",
    image: "/images/movie-tickets.jpg",
    link: "/freebies/movie-tickets",
    category: "Movie Tickets"
  }
  // Add more posts as needed
]

export default function FreebiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Freebies</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Freebies
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Free Coffee
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Skincare Samples
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Movie Tickets
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Perfume Samples
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Organic Snacks
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freebiesPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  )
} 