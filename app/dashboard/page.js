import Header from '../components/Header'
import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h2 className="font-bold text-xl">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Saved Deals</a>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">My Reviews</a>
                <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Settings</a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Saved Deals */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Your Saved Deals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Saved deal cards will go here */}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {/* Activity items will go here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 