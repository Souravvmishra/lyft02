import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';

const Section7: React.FC = () => {
  return (
    <div className="bg-[#F4F4FA] flex px-48 py-20 justify-between items-center space-x-24 -mx-40">
      <div className="w-[50%]">
        <Image
          src={'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'}
          width={400}
          height={520}
          alt="main"
        />
      </div>

      <div className="w-[60%] flex flex-col justify-between space-y-4">
        <div className="text-lg font-semibold">SAFETY FIRST</div>

        <div className="text-3xl font-semibold">Your safety comes first. Always.</div>
        <div>
        We care for you before, during, and after every single session. And we monitor your progress to help you achieve your fitness goals. If you ever need it, we’re standing by, ready to help.
        </div>

        <div className="flex space-x-4">
          <BlueBtn text={`Learn about safety`} />
          <div className="flex space-x-2 justify-center items-center font-semibold">
            <div>Community Guidelines</div>
            <span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M9.652 2.65 8.426 3.876l3.258 3.258H1v1.728h10.684L8.426 12.12l1.226 1.226L15 7.998 9.652 2.65Z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
