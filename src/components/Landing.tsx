import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';
import WhiteBtn from './WhiteBtn';

const Landing: React.FC = () => {
    return (
        <div className='py-20 flex items-center space-x-0  '>
            <div className='w-[60%] '>
                <Image src={'/giri.webp'}  width={480} height={720} alt='main' />
            </div>
            <div>
                <div className='text-[7rem] font-semibold leading-tight font-mono'>
                    WAR HOUSE
                </div>
                <div className='flex space-x-4'>
                    <BlueBtn text={`Apply to Join`} />
                    <WhiteBtn text={`Contact Us`} />
                </div>
            </div>
        </div>
    );
}

export default Landing;