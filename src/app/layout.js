import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Lyft: A ride whenever you need one',
  description: 'Rideshare with Lyft. Lyft is your friend with a car, whenever you need one. Download the app and get a ride from a friendly driver within minutes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container box-border px-40 ` }>{children}</body>
    </html>
  )
}
