import React, { ReactNode } from 'react';

interface WhiteBtnProps {
  text: string;
  children?: ReactNode;
}

const WhiteBtn: React.FC<WhiteBtnProps> = ({ text, children }) => {
  return (
    <div>
      <button className='bg-white hover:bg-slate-100 rounded-full shadow-lg text-black  px-6 py-[0.8rem]'>
        {text}
        {children}
      </button>
    </div>
  );
};

export default WhiteBtn;
