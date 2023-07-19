'use client'
import React, { useState, useEffect } from 'react';

const driverArray: string[] = [
  "Become a Driver",
  "New Driver Guide",
  "Earnings",
  "Cities",
  "Help",
  "Safety",
  "Application Requirements",
  "Express Drive",
  "Bonus",
  "Lyft Rewards",
  "Driving Opportunities",
  "Go Electric",
  "Insurance",
  "Driver Blog"
];

const riderArray: string[] = [
  "Sign up to ride",
  "Fare Estimate",
  "Lyft Pink",
  "Cities",
  "Help",
  "Safety",
  "Business Profile",
  "Rewards",
  "Events",
  "Airports",
  "Gift Cards",
  "Donate",
  "Blog"
];

const lyftArray: string[] = [
  "Careers",
  "Lyft Up",
  "Business",
  "Healthcare",
  "Bikes",
  "Scooters",
  "Self-Driving",
  "Lyft Media",
  "Developers",
  "Rev",
  "Press",
  "Investor Relations"
];

const Footer: React.FC = () => {

  const [driver, setDriver] = useState(false)
  const [rider, setRider] = useState(false)
  const [lyft, setLyft] = useState(false)


  useEffect(() => {
    const setTrue = () => {
      setDriver(true)
      setRider(true)
      setLyft(true)
    }

    const setFalse = () => {
      setDriver(false)
      setRider(false)
      setLyft(false)
    }
    window.innerWidth > 1280 ? setTrue() : setFalse();
    window.addEventListener('resize', () => {
        window.innerWidth > 1280 ? setTrue() : setFalse();
    })
}, [])

  return (
    <div className=' px-4 xl:mx-40 py-10'>
      <div className='flex justify-between flex-col xl:flex-row '>
        <div>
          <div className='flex justify-between items-center pb-8 mb-4 border-b-2 xl:border-b-0 ' onClick={() => setDriver(!driver)}>
            <div className='text-xl font-semibold '>Driver</div>
            <div className={`${driver ? 'rotate-180' : ''} xl:hidden`}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8.012 3.89 15 10.902l-1.208 1.208-5.78-5.78-5.78 5.78L1 10.902 8.012 3.89Z"></path></svg>
            </div>
          </div>

          {driver && driverArray.map((item) => {
            return (
              <div className='pb-2 text-sm' key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div>
          <div className='flex justify-between items-center pb-8 xl:border-b-0 border-b-2 mb-4' onClick={() => setRider(!rider)}>
            <div className='text-xl font-semibold '>Rider</div>
            <div className={`${rider ? 'rotate-180' : ''} xl:hidden`}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8.012 3.89 15 10.902l-1.208 1.208-5.78-5.78-5.78 5.78L1 10.902 8.012 3.89Z"></path></svg>
            </div>
          </div>
          {rider && riderArray.map((item) => {
            return (
              <div className='pb-2 text-sm' key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div>
          <div className='flex justify-between items-center pb-8 border-b-2 mb-4 xl:border-b-0 ' onClick={() => setLyft(!lyft)}>
            <div className='text-xl font-semibold '>Lyft</div>
            <div className={`${lyft ? 'rotate-180' : ''} xl:hidden`}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8.012 3.89 15 10.902l-1.208 1.208-5.78-5.78-5.78 5.78L1 10.902 8.012 3.89Z"></path></svg>
            </div>
          </div>
          {lyft && lyftArray.map((item) => {
            return (
              <div className='pb-2 text-sm' key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4'>
            <button className='w-36 px-2 rounded-full border text-black border-black py-1 hover:bg-slate-200'>
              Lyft driver app
            </button>
          </div>
          <div className=''>
            <button className='w-36 px-2 rounded-full border text-black border-black py-1 hover:bg-slate-200'>
              Lyft rider app
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center my-4  space-x-4 flex-wrap'>
        <div className='text-xs underline'>
          <div>Terms</div>
        </div>
        <div className='text-xs underline'>
          <div>Privacy</div>
        </div>
        <div className='text-xs underline'>
          <div>Accessibility Statement</div>
        </div>
        <div className='text-xs underline'>
          <div>Your Privacy Choices</div>
        </div>
        <div className='text-xs underline'>
          <div>© 2023 Lyft, Inc.</div>
        </div>
        <div className='text-xs underline'>
          <div>CPUC ID No. TCP0032513-P</div>
        </div>
        <div className='text-xs underline'>
          <div className=''>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M5.403 13.376c5.283 0 8.172-4.377 8.172-8.173 0-.124 0-.248-.008-.371A5.844 5.844 0 0 0 15 3.345a5.732 5.732 0 0 1-1.65.452 2.882 2.882 0 0 0 1.263-1.589c-.564.335-1.18.57-1.824.697a2.875 2.875 0 0 0-4.895 2.62 8.155 8.155 0 0 1-5.92-3 2.874 2.874 0 0 0 .89 3.833 2.85 2.85 0 0 1-1.304-.36v.037c0 1.368.964 2.545 2.304 2.816a2.868 2.868 0 0 1-1.297.05 2.876 2.876 0 0 0 2.684 1.994A5.763 5.763 0 0 1 1 12.085a8.132 8.132 0 0 0 4.403 1.289"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className='text-xs underline'>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M15 8a7 7 0 1 0-8.094 6.915v-4.892H5.13V8h1.777V6.458c0-1.755 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.002 7.002 0 0 0 15 8Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className='text-xs underline'>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M7.998 4.918a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16Zm0 5.08a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
              <path
                d="M7.998 2c-1.629 0-1.833.007-2.473.036-.638.03-1.074.13-1.456.279a2.94 2.94 0 0 0-1.062.692 2.94 2.94 0 0 0-.692 1.062c-.148.382-.25.818-.279 1.456-.03.64-.036.844-.036 2.473 0 1.63.007 1.833.036 2.473.03.639.13 1.075.279 1.456.153.395.358.729.692 1.063.333.333.668.538 1.062.691.382.149.818.25 1.456.28.64.028.844.035 2.473.035 1.63 0 1.833-.007 2.473-.036.639-.029 1.075-.13 1.456-.279a2.939 2.939 0 0 0 1.063-.691c.333-.334.538-.668.691-1.063.149-.381.25-.817.28-1.456.028-.64.035-.844.035-2.473s-.007-1.833-.036-2.473c-.029-.638-.13-1.074-.279-1.456a2.939 2.939 0 0 0-.691-1.062 2.94 2.94 0 0 0-1.063-.692c-.381-.148-.817-.25-1.456-.279C9.831 2.006 9.627 2 7.998 2Zm0 1.08c1.602 0 1.791.007 2.424.036.585.026.902.124 1.114.206.28.11.48.239.69.449.21.21.34.41.448.69.082.211.18.529.207 1.113.028.633.034.823.034 2.424 0 1.602-.006 1.791-.034 2.424-.027.585-.125.902-.207 1.114-.109.28-.239.48-.449.69-.21.21-.41.34-.69.448-.21.082-.528.18-1.113.207-.633.028-.822.034-2.424.034s-1.791-.006-2.424-.034c-.584-.027-.902-.125-1.113-.207a1.858 1.858 0 0 1-.69-.449c-.21-.21-.34-.41-.449-.69-.082-.21-.18-.528-.206-1.113-.03-.633-.035-.822-.035-2.424 0-1.601.006-1.791.035-2.424.026-.584.124-.902.206-1.113.11-.28.239-.48.449-.69.21-.21.41-.34.69-.449.211-.082.529-.18 1.113-.206.633-.03.823-.035 2.424-.035Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
