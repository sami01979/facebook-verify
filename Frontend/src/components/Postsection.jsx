import React from 'react'
import { Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import alp from "../assets/alifp.jpg"

const Postsection = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className='px-3 mt-3 flex items-center gap-4'>
      <div 
        onClick={handleLogout}
        className='h-[55.3px] w-[55.3px] rounded-full overflow-hidden object-cover cursor-pointer'
      >
        <img 
          src={alp}
          alt="" 
          className='h-full w-full object-cover'
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