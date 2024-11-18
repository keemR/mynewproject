import './globals.css'

export const metadata = {
  title: 'Deals & Freebies | Your Ultimate Source',
  description: 'Find the best freebies, coupons, deals, sweepstakes, and more!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
