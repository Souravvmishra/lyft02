import React from 'react';
import Image from 'next/image';
import BlueBtn from './BlueBtn';

const Section7: React.FC = () => {
  return (
    <div className="bg-[#F4F4FA] flex px-4 -mx-2 xl:px-48 py-20 justify-between items-center xl:space-x-24 xl:-mx-40 flex-col space-y-4 xl:flex-row">
      <div className="xl:w-[50%]">
        <Image
          src={'https://images.ctfassets.net/q8mvene1wzq4/3tEhujwTqY4G4LXZ0yZltF/c544aaffe54de76aacce746d9db34d9b/home_pinkpaint_safety.jpg?w=1500&q=60&fm=webp'}
          width={650}
          height={650}
          alt="main"
        />
      </div>

      <div className="xl:w-[60%] flex flex-col justify-between space-y-4">
        <div className="text-lg font-semibold text-center">SAFETY FIRST</div>

        <div className="text-3xl font-semibold">Your safety comes first. Always.</div>
        <div>
          We look out for you before, during, and after every single ride. And we monitor rides to help you get where you
          need to go. If you ever need it, we’re standing by, ready to help.
        </div>

        <div className="flex md:space-x-4 flex-col  items-center justify-center md:flex-row">
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
