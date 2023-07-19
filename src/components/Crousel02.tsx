'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CardProps {
  item: string;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="text-black flex flex-col w-44 h-44 px-6 rounded-xl items-center justify-center space-y-4 ">
      <Image src={item} width={150} height={175} alt="brand" />
    </div>
  );
};

const Crousel02: React.FC = () => {
  const [right, setRight] = useState(0);
  const data = [
    'https://www.svgrepo.com/show/303137/airbnb-2-logo.svg',
    'https://www.svgrepo.com/show/452222/google-pay.svg',
    'https://www.svgrepo.com/show/330283/delta.svg',
    'https://www.svgrepo.com/show/354306/salesforce.svg',
    'https://www.svgrepo.com/show/331567/sap.svg',
    'https://www.svgrepo.com/show/354352/slack.svg',
    'https://www.svgrepo.com/show/211390/stethoscope.svg',
    'https://www.svgrepo.com/show/303541/bosch-1-logo.svg',
    'https://www.svgrepo.com/show/431792/meta.svg',
  ];

  const move = () => {

    if (right <= -18) {
      setRight(0);
    }
    if (right >= 3 * 11*3) {
      setRight(3 * 11*3);
    }
    const crousel = window.document.getElementById('crousel02');
    if (crousel) {
      crousel.style.right = right + 'rem';
    }
  };

  useEffect(() => {
    move();
  }, [right]);

  return (
    <div>
      <div
        id="crousel02"
        className={`relative right-0 overflow-hidden flex w-[800vw] py-20 space-x-4 transition-all duration-300 -mx-40 px-80`}
      >
        {data.map((item, index) => {
          return (
            <div className='w-44 h-44'>
              <Card item={item} key={index} />
            </div>
          )
        })}
      </div>

      <div className="flex justify-center items-center space-x-14">
        <div className="carousel-button-container" style={{ width: '40px' }}>
          <div
            className={`${right === 0 ? 'scale-0' : ''} transition-all duration-300`}
            onClick={() => setRight((r) => r - 11*3)}
          >
            <button className="border rounded-full p-2 border-slate-400 hover:bg-slate-200">
              <span className="sc-18fxrom-0 gjYzMx">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="m6.348 2.65 1.226 1.226-3.258 3.258H15v1.728H4.316l3.258 3.258-1.226 1.226L1 7.998 6.348 2.65Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="carousel-button-container" style={{ width: '40px' }}>
          <div
            className={`${right === 3 * 11 * 3 ? 'scale-0' : ''} transition-all duration-300`}
            onClick={() => setRight((r) => r + 11*3)}
          >
            <button className="border rounded-full p-2 border-slate-400 hover:bg-slate-200">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M9.652 2.65 8.426 3.876l3.258 3.258H1v1.728h10.684L8.426 12.12l1.226 1.226L15 7.998 9.652 2.65Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousel02;
