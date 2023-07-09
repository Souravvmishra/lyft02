import Navbar from './components/Navbar'
import Dissmiss from './components/Dissmiss'
import Landing from './components/Landing'
import Drive from './components/Drive'
import Ride from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Footer from './components/Footer'
import Crousel01 from './components/Crousel01'

export default function Home() {
  return (
    <>

      <Navbar />
      <Dissmiss />
      <Landing />
      <Drive />
      <Crousel01 />
      <Ride />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <div className='-mx-40 h-12 bg-gradient-to-b from-gray-200 to-transparent'></div>
      <Footer />
    </>
  )
}
