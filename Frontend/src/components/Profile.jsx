import React from 'react'
import fahim from "../assets/Fahim.jpg"
const Profile = () => {
  return (
    <div>
        <div className='h-64 w-35 mt-5  flex justify-center rounded-2xl overflow-hidden bg-fb-input relative'>
                      <img src={fahim} alt="" className='h-[60%] relative w-full object-cover' />
                      <div
                          className='flex items-center justify-center h-[55.49px] w-[55.49px] rounded-full bg-blue-700 absolute mt-[140.89px]'
                      >
                          <p className='font-rubik text-5xl'>+</p>
                      </div>
                      <p className='absolute bottom-2  text-lg font-medium'>Create Story</p>
                  </div>
    </div>
  )
}

export default Profile
