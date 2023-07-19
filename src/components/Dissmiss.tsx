'use client'
import React from 'react';
import Image from 'next/image';

interface DismissProps {
  dark: boolean; // Adjust the type according to the actual type of 'dark'
}

const Dismiss: React.FC<DismissProps> = ({ dark }) => {
  const remove = () => {
    const dissmissElement = document.querySelector<HTMLElement>('#dissmiss');
    if (dissmissElement) {
      dissmissElement.style.display = 'none';
    }
  };

  return (
    <div id='dissmiss' className={`relative text-center h-16 bg-[#E7F6FF] -mx-2 xl:-mx-40  font-semibold flex items-center justify-center group flex-col md:flex-row ${dark && 'bg-black/80 text-white'} `}>
      We’ve made it easier for you to 
      <a className='underline decoration-[1.5px] pl-2'>get to and from the airport</a>



      <Image src={'https://www.svgrepo.com/show/506174/cross-small.svg'} width={35} height={35} className='absolute z-10 top-2 right-4 font-normal opacity-50 hover:bg-slate-300 rounded-full cursor-pointer' onClick={remove} alt='Cross'/>
    </div>
  );
};

export default Dismiss;