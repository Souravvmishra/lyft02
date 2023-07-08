import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';
import WhiteBtn from './WhiteBtn';

const Landing: React.FC = () => {
    return (
        <div className='py-20 flex items-center space-x-4 '>
            <div className='w-[60%]'>
                <Image src={'https://images.ctfassets.net/q8mvene1wzq4/1V7KEdm8GVuIRx1fHaCovZ/eafdba3bb2b13c73c0f79f2533a4fb6e/home_pinkpaint_hero.jpg?w=1000&q=60&fm=webp'} width={720} height={720} alt='main' />
            </div>
            <div>
                <div className='text-[5rem] font-semibold'>
                    Let's ride
                </div>
                <div className='flex space-x-4'>
                    <BlueBtn text={`Apply to drive`} />
                    <WhiteBtn text={`Sign up to ride`} />
                </div>
            </div>
        </div>
    );
}

export default Landing;