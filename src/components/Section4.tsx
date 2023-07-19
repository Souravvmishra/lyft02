import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';

const Section4: React.FC = () => {
  return (
    <div className=' py-10 md:py-20 flex px-4 md:px-28 justify-between items-center md:space-x-24 flex-col md:flex-row'>
      <div className='md:w-[50%] my-8'>
        <Image src={'https://images.ctfassets.net/q8mvene1wzq4/1H8Zw8AkZvMYqLkWnBjO3f/a2406a01c7a91b37f78c427326006fa8/Lyft_Pink_Image_V3.jpg?w=1500&q=60&fm=webp'} width={3000} height={3500} alt='main' />
      </div>

      <div className='md:w-[60%] md:h-[420px]  flex flex-col justify-evenly space-y-4'>
        <div className='text-3xl font-semibold'>
          We’re rolling out the red carpet
        </div>
        <div>
          Join the new Lyft Pink to enjoy complimentary upgrades to Priority Pickup, exclusive savings, and preferential pricing on Lux, XL, and Preferred rides. Members save an average of $23/month.
        </div>
        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M24.25 13.6h-6.6V3l-9.9 15.3h6.6V29l9.9-15.4Zm-13.6 3.1 5.4-8.3v6.8h5.3l-5.4 8.4v-6.9h-5.3Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
              Free Priority Pickup upgrades
            </div>
            <div>
              Get picked up faster and save $3-4 per ride on average
            </div>
          </div>
        </div>

        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="m9.431 19.428-.7-1.259-.7 1.26a8.737 8.737 0 0 1-3.442 3.47l-1.259.671 1.26.7a8.807 8.807 0 0 1 3.47 3.47l.7 1.26.7-1.26a8.807 8.807 0 0 1 3.47-3.47l1.259-.7-1.26-.7a8.631 8.631 0 0 1-3.498-3.442Zm-.7 6.465A9.922 9.922 0 0 0 6.438 23.6a9.923 9.923 0 0 0 2.295-2.295 9.926 9.926 0 0 0 2.294 2.295 9.924 9.924 0 0 0-2.294 2.294Zm.672-14.805a9.978 9.978 0 0 1 4.03-4.03A10.221 10.221 0 0 1 9.403 3c-.923 1.707-2.35 3.107-4.058 4.058a10.22 10.22 0 0 1 4.058 4.03Zm18.22 3.667a19.02 19.02 0 0 1-7.585-7.585l-.7-1.26-.7 1.26a18.674 18.674 0 0 1-7.584 7.585l-1.259.7 1.26.699a19.019 19.019 0 0 1 7.584 7.584l.7 1.26.7-1.26a18.675 18.675 0 0 1 7.584-7.584l1.26-.7-1.26-.7Zm-8.284 7.052a20.54 20.54 0 0 0-6.353-6.353 20.541 20.541 0 0 0 6.353-6.353 20.544 20.544 0 0 0 6.353 6.353 20.846 20.846 0 0 0-6.353 6.353Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
              Exclusive savings
            </div>
            <div>
              Enjoy 5% off on Lux, XL, and Preferred rides
            </div>
          </div>
        </div>

        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M15.972 3 4 6.205v10.218c0 5.503 3.084 7.65 7.467 10.068L16.002 29l4.535-2.51c4.354-2.448 7.468-4.595 7.468-10.067V6.205L15.972 3Zm10.37 13.423c0 4.656-2.51 6.38-6.621 8.677l-3.749 2.086-3.749-2.086c-4.142-2.298-6.62-4.02-6.62-8.677V7.444l10.37-2.781 10.369 2.781v8.98Z"></path>
            <path d="M14.974 8.412V9.56c-1.572.182-2.75.968-3.265 2.207-.453 1.119-.211 2.359.635 3.145.847.786 2.117.937 3.356 1.088.968.12 1.995.242 2.48.665.21.181.271.514.15.877-.242.665-.997 1.058-2.056 1.058-1.7830-2.57-.635-2.841-.907l-1.452 1.36c.424.454 1.36 1.18 2.993 1.452v1.209h1.996v-1.149c1.814-.212 2.842-1.3 3.235-2.298.423-1.118.15-2.327-.726-3.083-.967-.816-2.328-.998-3.567-1.119-.877-.09-1.845-.211-2.207-.544-.242-.212-.303-.575-.152-.937.242-.635.998-.998 2.026-.998 1.784 0 2.6.635 2.842.937l1.481-1.36c-.423-.454-1.33-1.18-2.932-1.451v-1.24h-1.996v-.06Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
              Cancellation forgiveness
            </div>
            <div>
              Cancel up to 3x/month for free
            </div>
          </div>
        </div>

        <div className='flex space-x-2'>
          <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <path d="M11.87 9.857V3h-1.601v6.857H7.17V3h-1.6v9.398c0 2.123 1.566 2.889 2.784 3.515 1.15.557 1.81.94 1.915 1.845V29h1.6V17.758c.105-.87.767-1.253 1.915-1.81 1.253-.627 2.82-1.392 2.82-3.516V3h-1.602v6.857H11.87Zm1.183 4.664c-.661.313-1.427.696-1.984 1.322-.557-.626-1.322-1.009-1.984-1.357-1.218-.627-1.914-1.01-1.914-2.088v-.94h7.797v.94c0 1.113-.697 1.496-1.915 2.123ZM25.618 3a6.684 6.684 0 0 0-6.682 6.683v11.103h5.046c.453 0 .836.383.836.835V29h1.6V3h-.8Zm-.8 16.324c-.244-.105-.557-.14-.836-.14h-3.445v-9.5a5.06 5.06 0 0 1 4.28-5.012v14.653Z"></path>
          </svg>
          <div>
            <div className='text-base font-semibold'>
              Free Grubhub+ for a year
            </div>
            <div>
              $0 restaurant delivery fees
            </div>
          </div>
        </div>

        <div className='flex space-x-4'>
          <BlueBtn text={`Get your first month free`} />
        </div>
        <div className='text-xs'>
          Subject to the <span className='underline decoration-[1px]'>Lyft Pink Terms & Conditions</span> and <span className='underline decoration-[1px]'>Lyft Terms of Service.</span>
        </div>
      </div>
    </div>
  );
}

export default Section4;
