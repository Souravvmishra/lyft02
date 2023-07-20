import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';
import WhiteBtn from './WhiteBtn';


const Landing: React.FC = () => {
    return (
        <div className={`xl:py-20 xl:px-40 -mx-2 py-10 flex items-center space-x-4 flex-col-reverse xl:flex-row px-4 dark:bg-black/80 dark:text-white`}>
            <div className='xl:w-[60%] my-4 '>
                <Image src={'https://images.ctfassets.net/q8mvene1wzq4/1V7KEdm8GVuIRx1fHaCovZ/eafdba3bb2b13c73c0f79f2533a4fb6e/home_pinkpaint_hero.jpg?w=1000&q=60&fm=webp'} width={1080} height={720} alt='main' />
            </div>
            <div>
                <div className='md:text-[5rem] text-[3rem] font-semibold text-center'>
                    Let's ride
                </div>
                <div className='flex sm:space-x-4 my-4 scale-90 md:scale-100 flex-wrap  justify-center items-center '>
                    <BlueBtn  text={`Apply to drive`} />
                    <WhiteBtn text={`Sign up to ride`} />
                </div>
            </div>
        </div>
    );
}

export default Landing;