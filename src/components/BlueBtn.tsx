import React from 'react'

interface Props {
  text: string;
}

const BlueBtn: React.FC<Props> = ({text}) => {
  return (
    <div>
      <button className=' bg-[#523BE4] hover:bg-[#6854de] rounded-full shadow-lg text-white px-6 py-[0.8rem] font-semibold m-2'>
        {text}
      </button>
    </div>
  )
}

export default BlueBtn