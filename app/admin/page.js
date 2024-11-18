import StatsCard from '../components/admin/StatsCard'
import RecentActivity from '../components/admin/RecentActivity'
import Chart from '../components/admin/Chart'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Users"
          value="1,234"
          change="+12%"
          trend="up"
        />
        <StatsCard 
          title="Active Deals"
          value="456"
          change="+5%"
          trend="up"
        />
        <StatsCard 
          title="Comments"
          value="789"
          change="-3%"
          trend="down"
        />
        <StatsCard 
          title="Page Views"
          value="10.2k"
          change="+25%"
          trend="up"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Chart title="User Growth" type="line" />
        <Chart title="Popular Categories" type="pie" />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  )
} 