'use client'
import React, { useEffect, useState } from 'react'
import BlueBtn from './BlueBtn'
import Link from 'next/link'
import WhiteBtn from './WhiteBtn'

const MobNav: React.FC<{ setMobMenu: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setMobMenu }) => {

    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        window.innerWidth > 1280 && setHidden(true)
        window.addEventListener('resize', () => {
            window.innerWidth > 1280 && setHidden(true)
        })
    }, [])
    return (
        <div className='fixed top-0 left-0 w-screen h-[115vh] bg-white z-90 px-4 py-2'>
            <div className='flex justify-between items-center'>
                <Link href='/' className='text-pink-500  hover:text-black'>
                    <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
                </Link>

                <div className='xl:hidden flex space-x-8 justify-center items-center'>
                    <div className={`scale-90 sm:scale-100 `}>
                        <WhiteBtn text='LOG IN' />
                    </div>
                    <div className='cursor-pointer' onClick={() => setMobMenu(false)} >
                        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M29 4.582 27.418 3l-11.43 11.406L4.582 3 3 4.582l11.406 11.406L3 27.395 4.582 29l11.406-11.407L27.418 29 29 27.395 17.593 15.988 29 4.582Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className='my-4 border-b-2'>
                <div className='font-semibold text-2xl'>
                    Driver
                </div>
                <div className='my-4'>
                    Earning
                </div>
                <div className='my-4'>
                    Cities
                </div>
                <div className='my-4'>
                    Help
                </div>
                <div className='my-4'>
                    Apply To Drive
                </div>
            </div>

            <div className='my-4 border-b-2'>
                <div className='font-semibold text-2xl'>
                    Rider
                </div>
                <div className='my-4'>
                    Cities
                </div>
                <div className='my-4'>
                    For Business
                </div>
                <div className='my-4'>
                    Help
                </div>
                <div className='my-4'>
                    Sign Up to Ride
                </div>
            </div>

            <div className='font-semibold text-2xl border-b-2 py-4'>
                BUSINESS
            </div>

            <div className='font-semibold text-2xl border-b-2 py-4'>
                LOG IN
            </div>
        </div>
    )

}


const Navbar: React.FC = () => {
    const [show, setShow] = useState(false); // declare a state variable to store the navbar visibility
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [mobMenu, setMobMenu] = useState(false)

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
        <div id='navbar' className={` dark:bg-gray-600 dark:text-white text-black navbar transition-all duration-200 ${show ? '-translate-y-24' : 'translate-y-0'} sticky  top-0 z-10 bg-white flex justify-between items-center h-20 border border-l-0 border-r-0  -mx-2  px-4  xl:px-40`}>
            <Link href='/' className='text-pink-500  hover:text-black'>
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" viewBox="0 0 72 50" aria-labelledby="lyft-logo" height="40px"><g><title id="lyft-logo">Lyft Logo</title><path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path><path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path><path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path></g></svg>
            </Link>

            {mobMenu && <MobNav setMobMenu={setMobMenu} />}

            <div>
                <div className='xl:hidden flex space-x-8 justify-center items-center'>
                    <div className={`scale-90 sm:scale-100 ${mobMenu && 'hidden'}`}>
                        <BlueBtn text="Get a ride" />
                    </div>
                    <div className='cursor-pointer' onClick={() => setMobMenu(!mobMenu)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M29 7.75H3v1.989h26V7.75Zm0 7.26H3V17h26v-1.99Zm0 7.238H3v1.989h26v-1.99Z"></path>
                        </svg>
                    </div>
                </div>
                <ul className='hidden xl:flex justify-center items-center space-x-6 font-semibold text-base capitalize divide-x '>
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