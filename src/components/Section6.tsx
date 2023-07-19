import React, { FC } from 'react';
import WhiteBtn from './WhiteBtn';

interface Section6Props {}

const Section6: FC<Section6Props> = () => {
    return (
      <div className="px-4 -mx-2 bg-[#DCDCFF] xl:-mx-40 xl:px-52 py-8 flex justify-between items-center flex-col space-y-4 xl:flex-row">
        <div className="flex flex-col text-2xl font-semibold">
          <div>Ready to roll?</div>
          <div>Get an estimate.</div>
        </div>
  
        <div className="border-2 border-black flex bg-white space-x-3 justify-center items-center px-4 rounded-2xl h-[3.5rem]">
          <span className="">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path fill="pink" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM8 4.99A3.015 3.015 0 0 0 4.99 8 3.015 3.015 0 0 0 8 11.01 3.015 3.015 0 0 0 11.01 8 3.015 3.015 0 0 0 8 4.99Z"></path>
            </svg>
          </span>
          <input type="text" className="w-[15rem] outline-none placeholder:text-sm" placeholder="Enter Pick-up Location*" />
        </div>
  
        <div className="border-2 border-black flex bg-white space-x-3 justify-center items-center px-4 rounded-2xl h-[3.5rem]">
          <span className="">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path fill="blue" d="M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM8 4.99A3.015 3.015 0 0 0 4.99 8 3.015 3.015 0 0 0 8 11.01 3.015 3.015 0 0 0 11.01 8 3.015 3.015 0 0 0 8 4.99Z"></path>
            </svg>
          </span>
          <input type="text" className="w-[15rem] outline-none placeholder:text-sm" placeholder="Enter Drop-off Location*" />
        </div>
  
        <div>
          <WhiteBtn text={`Get estimate`} />
        </div>
      </div>
    );
  };
  

  export default Section6;