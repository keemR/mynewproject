import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PostCard from '../components/PostCard'
import Newsletter from '../components/Newsletter'

const contestPosts = [
  {
    title: "Photography Contest - Win $5000",
    description: "Submit your best nature photos for a chance to win!",
    image: "/images/photo-contest.jpg",
    link: "/contests/photo/nature-photography",
    category: "Photo Contests",
    endDate: "2024-05-15"
  },
  {
    title: "Short Story Writing Competition",
    description: "Share your creative writing and win prizes",
    image: "/images/writing-contest.jpg",
    link: "/contests/writing/short-story",
    category: "Writing Contests",
    endDate: "2024-06-01"
  },
  {
    title: "Video Creation Challenge",
    description: "Create a 1-minute video for a chance to win $1000",
    image: "/images/video-contest.jpg",
    link: "/contests/video/creation-challenge",
    category: "Video Contests",
    endDate: "2024-05-30"
  }
]

export default function ContestsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contests</h1>
        <SearchBar />
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            All Contests
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Photo Contests
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Writing Contests
          </button>
          <button className="px-4 py-2 bg-white rounded-full shadow hover:bg-gray-100">
            Video Contests
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contestPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

        <Newsletter />
      </main>
    </div>
  )
} 