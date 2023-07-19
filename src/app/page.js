'use client'

import Dissmiss from '../components/Dissmiss'
import Landing from '../components/Landing'
import Drive from '../components/Drive'
import Ride from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Section8 from '../components/Section8'
import Section9 from '../components/Section9'
import Crousel01 from '../components/Crousel01'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {

  const [dark, setDark] = useState(true)
  return (
    <>
      <button onClick={() => {
        if (localStorage.getItem('dark') === 'true') {
          localStorage.setItem('dark', 'false')
        }else{
          localStorage.setItem('dark', 'true')
        }
        setDark(!dark)}} className='fixed z-50 bottom-14 right-14'><Image src={'https://www.svgrepo.com/show/432159/dark.svg'} width={50} height={50} alt='dark mode' className='bg-white p-2 rounded-full' /></button>
      <Dissmiss dark = {dark} />
      <Landing />
      <Drive  dark = {dark}  />
      <Crousel01 />
      <Ride dark = {dark}/>
      <Section4 dark = {dark}/>
      <Section5 />
      <Section6 />
      <Section7 dark = {dark} />
      <Section8 />
      <Section9  dark = {dark} />
    </>
  )
}
