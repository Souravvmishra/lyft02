'use client'
import React, { useEffect, useState } from 'react'
import BlueBtn from './BlueBtn'
import Link from 'next/link'


const Navbar: React.FC = () => {
    const [show, setShow] = useState(false); // declare a state variable to store the navbar visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {

        function handleScroll() { // define a function to handle the scroll event
            if (window.scrollY > 125) { // if scrolled more than 25px
                setShow(true); // update the state variable to true
            }
            const currentScrollPos = window.scrollY;
            if (currentScrollPos < prevScrollPos) {
                // Scrolling up
                setShow(false)
            }

            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll); // add the event listener using the function

        return () => {
            window.removeEventListener('scroll', handleScroll); // remove the event listener using the same function
        };

    }, [prevScrollPos]);


    return (
        <div id='navbar' className={`navbar transition-all duration-200 ${show ? '-translate-y-24' : 'translate-y-0'} sticky  top-0 z-10 bg-white flex justify-between items-center h-20 border  -mx-40 px-40`}>
            <Link href='/' className='text-black text-3xl font-semibold font-mono  hover:text-black'>
                {/* <img src='https://www.svgrepo.com/show/277575/weightlifting-gym.svg' width={50}/> */}
                War House Gym
            </Link>

            <div>
                <ul className='flex justify-center items-center space-x-6 font-semibold text-base capitalize divide-x'>
                    {<Link href={'getdriver'} className='h-20 px-1 flex justify-center items-center capitalize text-center'><BlueBtn text="Join us" /></Link>}

                    <Link className='h-20 px-[1px] flex items-center justify-center pl-8 hover:text-blue-800  ' href="driver" >DRIVER</Link>

                    <Link className='h-20 px-[1px] flex justify-center items-center pl-8 hover:text-blue-800' href="rider">RIDER</Link>

                    <Link className='h-20 px-[1px] flex justify-center items-center pl-8 hover:text-blue-800' href="business">BUSSINES</Link>

                    <Link className='h-20 px-[1px] flex justify-center items-center pl-8 hover:text-blue-800' href="login">LOG IN</Link>

                    <Link className='h-20 px-[1px] flex justify-center items-center pl-8 hover:text-blue-800' href="signup">SIGN IN</Link>

                </ul>
            </div>
        </div >
    )
}

export default Navbar