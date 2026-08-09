import React from 'react'
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { Menu } from "lucide-react";
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
  return (
    <div className='px-4 pt-3'>
     <div className='text-white flex items-center mt-6 justify-between'>
        <div className='flex items-center'>
          <Menu className="" size={25} />
        <span
        className='block ml-2.5 text-3xl font-medium font-roboto-slab'
        >facebook</span>
        </div>
        <div className='flex items-center scale-150 gap-2 p-4'>
          <AddBoxOutlinedIcon className='rounded-md'/>
          <SearchOutlinedIcon/>
          <MapsUgcOutlinedIcon/>
        </div>
     </div>
    </div>
  )
}

export default Navbar
