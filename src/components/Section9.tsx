import React from 'react';
import ListComponent from './List';
import WhiteBtn from './WhiteBtn';
import Crousel02 from './Crousel02';



const Section9: React.FC = ({}) => {
  const items = [
    'employees',
    'VIPs',
    'customers',
    'ideas',
    'interviewees',
    'visitors',
    'students',
    'patients',
    'guests',
    'essential goods',
    'prospects',
    'supplies',
    'people',
    'business',
  ];

  return (
    <div className={ `px-4  -mx-2 xl:px-40  py-20 overflow-clip bg-[#F4F4FA] dark:bg-gray-600 dark:text-white `}>
      <div className="flex justify-center items-center flex-col space-y-4">
        <div className='flex space-x-2 scale-75 justify-center items-center'>
          {/* <Image src={'http://images.ctfassets.net/q8mvene1wzq4/3WkSLIffcV7OYpUgMpBwJ7/6951147bed1e0844f7eeeb9785cf84ba/Lyft_Business_Pink.svg?w=&q=60&fm='} width={1080} height={250} alt='logo' /> */}
          {/* CAN NOT GET THIS IMAGE  */}
          <svg
            fill="#EC4899"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 72 50"
            aria-labelledby="lyft-logo"
            height="40px"
          >
            <g>
              <title id="lyft-logo">Lyft Logo</title>
              <path d="M.023.888h10.912v28.716c0 4.544 2.12 7.251 3.796 8.411-1.775 1.547-7.198 2.901-11.24-.386C1.106 35.69.022 32.504.022 29.507V.888z"></path>
              <path d="M68.218 24.742v-3.018h3.328V11.137H67.89C66.488 4.781 60.717.018 53.815.018c-7.95 0-14.396 6.32-14.396 14.116v24.724c2.265.312 4.964-.04 7.26-1.906 2.384-1.938 3.467-5.124 3.467-8.122v-.91h5.45V17.333h-5.45v-3.199h.013c0-1.98 1.637-3.585 3.656-3.585 2.02 0 3.662 1.605 3.662 3.585v10.608c0 7.796 6.453 14.116 14.403 14.116V28.326c-2.019 0-3.662-1.605-3.662-3.584"></path>
              <path d="M26.89 11.137v15.537c0 .883-.746 1.597-1.667 1.597-.92 0-1.667-.714-1.667-1.597V11.137H12.759V29.41c0 3.288 1.137 7.445 6.31 8.799 5.18 1.355 8.185-1.45 8.185-1.45-.274 1.848-2.049 3.201-4.909 3.491-2.164.22-4.93-.483-6.31-1.063v9.681c3.517 1.017 7.236 1.345 10.877.653 6.606-1.257 10.775-6.671 10.775-13.874v-24.51H26.891z"></path>
            </g>
          </svg>
          <div className='text-4xl font-sans  font-bold '>
            business
          </div>
        </div>
        <div className="text-3xl font-semibold">We Help Move</div>
        <ListComponent items={items} />
        <div className="py-12 xl:w-[50%] text-center text-slate-800">
          From affordable transportation solutions to effortless expensing, we’ll help drive your business forward by
          getting your people where they need to go.
        </div>
        <div>
          <WhiteBtn text="Learn More" />
        </div>
      </div>
      <Crousel02 />
    </div>
  );
};

export default Section9;
