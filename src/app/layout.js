
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Lyft: A ride whenever you need one',
  description: 'Rideshare with Lyft. Lyft is your friend with a car, whenever you need one. Download the app and get a ride from a friendly driver within minutes.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className=' '>
      <body className={`${inter.className} w-screen box-border px-2  overflow-x-hidden  `}>
        <Navbar />

        {children}
        
        <div className='px-2 -mx-2 xl:-mx-40 h-12 bg-gradient-to-b from-gray-200 to-transparent dark:from-black dark:to-black/50'></div>
        <Footer />

      </body>
    </html>
  )
}
