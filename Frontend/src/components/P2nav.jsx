import React from 'react'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import verp from "../assets/verify.png"

const Pnav = () => {
  return (
    <div>
      <div className='px-2 pt-2.5 flex items-center flex-row gap-2'>
                <div className='h-[50.45px] w-[50.45px] rounded-full overflow-hidden border-2 border-blue-800'>
                    <img className='p-0.5 rounded-full' src={verp} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='text-lg font-semibold font-rubik'>Verify Profile</h1>
                            <h2 className='flex items-center text-fb-text'>
                                1m <span className='block pl-2 mb-2'>.</span> <PublicOutlinedIcon className='scale-75' />
                            </h2>
                        </div>
                        <div className='flex items-center gap-6'>
                            <MoreHorizOutlinedIcon className='scale-125'/>
                            <ClearOutlinedIcon  className='scale-125'/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Pnav
