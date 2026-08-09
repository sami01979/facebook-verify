import React from 'react'
import { Image } from "lucide-react";
import fahim from "../assets/Fahim.jpg"
const Postsection = () => {
  return (
    <div className='px-3 mt-3 flex items-center gap-4'>
      <div className='h-[63.3px] w-[63.3px] rounded-full overflow-hidden object-cover '>
        <img 
          src={fahim}
          alt="" 
        />
      </div>

      <div className='border-3 flex items-center border-gray-700 h-14 rounded-4xl w-[70%]'>
        <h1 className='text-white text-lg px-6 py-2 font-rubik'>What's on your mind?</h1>
      </div>

      <Image className="text-white" size={36} />
    </div>
  )
}

export default Postsection