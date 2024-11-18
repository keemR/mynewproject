'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Settings() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    dealAlerts: true,
    newsletter: true,
    theme: 'light'
  })

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">User Settings</h1>

      <div className="space-y-6">
        {/* Profile Settings */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                defaultValue={user?.name}
                className="w-full px-4 py-2 rounded-lg border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                defaultValue={user?.email}
                className="w-full px-4 py-2 rounded-lg border"
              />
            </div>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input 
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                className="mr-2"
              />
              Email Notifications
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox"
                checked={settings.dealAlerts}
                onChange={(e) => setSettings({...settings, dealAlerts: e.target.checked})}
                className="mr-2"
              />
              Deal Alerts
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox"
                checked={settings.newsletter}
                onChange={(e) => setSettings({...settings, newsletter: e.target.checked})}
                className="mr-2"
              />
              Newsletter Subscription
            </label>
          </div>
        </section>

        {/* Save Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  )
} 