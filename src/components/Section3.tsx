import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';

const Ride: React.FC = () => {
  return (
    <div className=' py-20 flex '>
      <div className=' w-[60%] h-[420px] px-28 flex flex-col justify-evenly space-y-4'>
        <div className='text-lg font-semibold'>
        WORKOUT WITH FIT
        </div>
        <div className='text-3xl font-semibold'>
        Start, sweat, and succeed in just a few quick taps
        </div>
        <div>
        No matter your goal, we’ll help you achieve it with FIT 
        </div>
        <div className='flex space-x-2'>
          <span data-testid="icon-IconCash" className="sc-18fxrom-0 gjYzMx">
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path d="M3 6.37v15.558h26V6.37H3Zm24.405 10.563a4.235 4.235 0 0 0-3.37 3.37H7.965a4.235 4.235 0 0 0-3.37-3.37v-5.598a4.235 4.235 0 0 0 3.37-3.37h16.07a4.235 4.235 0 0 0 3.37 3.37v5.598Zm1.535 7.101H3.03v1.595h25.91v-1.595Z"></path>
              <path d="M16 18.106a3.972 3.972 0 1 0 0-7.944 3.972 3.972 0 0 0 0 7.944Z"></path>
            </svg>
          </span>
          <div>
            <div className='text-base font-semibold'>
            Get a personalized workout plan in minutes
            </div>
          </div>
        </div>

        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M24.351 6.027a13.025 13.025 0 0 0-3.987-2.282l-.544 1.533a11.331 11.331 0 0 1 3.489 1.996l1.042-1.247Zm3.912 5.621a12.927 12.927 0 0 0-2.28-3.99l-1.248 1.045a11.337 11.337 0 0 1 1.998 3.489l1.53-.544Z"></path>
            <path d="m28.84 13.884-1.605.264a11.392 11.392 0 0 1-11.225 13.23A11.39 11.39 0 0 1 4.636 16 11.39 11.39 0 0 1 17.865 4.774l.263-1.603A13.012 13.012 0 0 0 3 16a13.015 13.015 0 0 0 12.998 13A13.012 13.012 0 0 0 29 16c.003-.708-.05-1.416-.16-2.116Z"></path>
            <path d="M14.995 8.501v8.513h6.543v-2.031h-4.511V8.5h-2.032Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
            Schedule your sessions in advance
            </div>
          </div>
        </div>

        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M24.351 6.027a13.025 13.025 0 0 0-3.987-2.282l-.544 1.533a11.331 11.331 0 0 1 3.489 1.996l1.042-1.247Zm3.912 5.621a12.927 12.927 0 0 0-2.28-3.99l-1.248 1.045a11.337 11.337 0 0 1 1.998 3.489l1.53-.544Z"></path>
            <path d="m28.84 13.884-1.605.264a11.392 11.392 0 0 1-11.225 13.23A11.39 11.39 0 0 1 4.636 16 11.39 11.39 0 0 1 17.865 4.774l.263-1.603A13.012 13.012 0 0 0 3 16a13.015 13.015 0 0 0 12.998 13A13.012 13.012 0 0 0 29 16c.003-.708-.05-1.416-.16-2.116Z"></path>
            <path d="M14.995 8.501v8.513h6.543v-2.031h-4.511V8.5h-2.032Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
            Earn rewards on every workout 
            </div>
          </div>
        </div>

        <div className='flex space-x-4'>
          <BlueBtn text={`Get a Call`} />
          <div className='flex space-x-2 justify-center items-center'>
            <div> Learn more about training with WHG</div>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M9.652 2.65 8.426 3.876l3.258 3.258H1v1.728h10.684L8.426 12.12l1.226 1.226L15 7.998 9.652 2.65Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className='w-[40%]'>
        <Image src={'https://images.ctfassets.net/q8mvene1wzq4/2R3M8S6ZIA7SXbMsCkxvMI/01d24491659f6678df39d245e080045d/rider_stylized_text_image.png?w=1500&q=60&fm=webp'} width={400} height={720} alt='main' />
      </div>
    </div>
  );
}

export default Ride;
