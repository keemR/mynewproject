import { AuthProvider } from './context/AuthContext'
import './globals.css'

export const metadata = {
  title: 'Deal Hunter - Find the Best Deals',
  description: 'Find the best deals, coupons, freebies, and discounts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}