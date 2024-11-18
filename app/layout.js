import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Deal Hunter',
  description: 'Find the best deals online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}