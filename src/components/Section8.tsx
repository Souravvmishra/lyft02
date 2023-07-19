import React from 'react';
import Image from 'next/image';

const Section8: React.FC = () => {
  return (
    <div className="px-28 py-20">
      <div className="flex justify-start space-y-8 flex-col">
        <Image
          src={'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHx3b3Jrb3V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'}
          width={1080}
          height={350}
          alt="frame"
        />
        <div className="text-lg font-semibold">
        Making millions of workouts more accessible
        </div>
        <div>
        A workout is more than just a workout. It’s a gateway to wellness and happiness. A connection to yourself and others. And access to essentials like nutrition, health, and fitness tips. Our WHG Up initiative makes sessions more accessible for millions, and helps bring communities even closer.
        </div>
        <div className="flex space-x-2 justify-start items-center font-semibold">
          <div className="hover:underline cursor-pointer">Learn more about training with WHG</div>
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M9.652 2.65 8.426 3.876l3.258 3.258H1v1.728h10.684L8.426 12.12l1.226 1.226L15 7.998 9.652 2.65Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section8;
