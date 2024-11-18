import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PostCard from '../components/PostCard'

const sweepstakesPosts = [
  {
    title: "$10,000 Cash Giveaway",
    description: "Enter daily for your chance to win $10,000 cash!",
    image: "/images/cash-prize.jpg",
    link: "/sweepstakes/cash-prizes/10k-giveaway",
    category: "Cash Prizes",
    endDate: "2024-05-30"
  },
  {
    title: "Dream Vacation Sweepstakes",
    description: "Win an all-expenses-paid trip to Hawaii!",
    image: "/images/vacation.jpg",
    link: "/sweepstakes/travel/hawaii-dream-vacation",
    category: "Travel",
    endDate: "2024-06-15"
  },
  {
    title: "Win a New iPhone",
    description: "Enter to win the latest iPhone model!",
    image: "/images/iphone.jpg",
    link: "/sweepstakes/electronics/iphone-giveaway",
    category: "Electronics",
    endDate: "2024-05-01"
  }
]

export default function SweepstakesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sweepstakes</h1>
        <SearchBar />
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Sweepstakes
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Cash Prizes
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Travel
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Electronics
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Vehicles
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sweepstakesPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  )
} 