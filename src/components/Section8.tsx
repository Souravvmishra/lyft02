import React from 'react';
import Image from 'next/image';

const Section8: React.FC = () => {
  return (
    <div className="px-4 xl:px-28 py-20">
      <div className="flex justify-start space-y-8 flex-col">
        <Image
          src={'https://images.ctfassets.net/q8mvene1wzq4/4sC7flJuNRu1wS6K9AmbXD/c17d6cef53f37721c44ce8bc4b668214/home_pinkpaint_lyftup.jpg?q=60'}
          width={1080}
          height={450}
          alt="frame"
        />
        <div className="text-lg font-semibold">
          Making millions of rides more accessible
        </div>
        <div>
          A ride is more than just a ride. It's a gateway to opportunities and jobs. A connection to community. And access to essentials like groceries, healthcare, and polling places. Our Lyft Up initiative makes rides more accessible for millions, and helps bring communities even closer.
        </div>
        <div className="flex space-x-2 justify-start items-center font-semibold">
          <div className="hover:underline cursor-pointer">Learn more about riding with Lyft</div>
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
