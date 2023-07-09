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
            const currentScrollPos = window.scrollY ;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down
                console.log('Scrolling down');
            } else if (currentScrollPos < prevScrollPos) {
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
            <Link href='/' className='text-pink-500  hover:text-black'>
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
            </Link>

            <div>
                <ul className='flex justify-center items-center space-x-6 font-semibold text-base capitalize divide-x'>
                    {<Link href={'getdriver'} className='h-20 px-1 flex justify-center items-center capitalize text-center'><BlueBtn text="Get a ride" /></Link>}

                    {<Link className='h-20 px-[1px] flex items-center justify-center pl-8 hover:text-blue-800  ' href="driver" >DRIVER</Link>}

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