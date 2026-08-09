import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { MessageCircle } from "lucide-react";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Pnav from './Pnav';
import P2nav from './P2nav';
import verpost from "../assets/veripost.png"
const Postcard = () => {
    return (
        <div>
            <div>
                <Pnav />
                <div>
                    <p className='text-lg px-2'>Our Captain 💂‍♂️</p>
                </div>
                <div className=' w-full  mt-3'>
                    <img src="https://images.unsplash.com/photo-1654886580603-7c9a6e4bdc25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmVycG9vbCUyMGZjfGVufDB8fDB8fHww" alt="" />
                    <div className='flex flex-row'>
                        <div className='flex flex-row w-[60%] items-center justify-between px-3 py-2'>
                            <h1 className='flex items-center gap-1'><ThumbUpOffAltIcon /> <span>24.4k</span></h1>
                            <h1 className='flex items-center gap-1'><MessageCircle /> <span>2.7k</span></h1>
                            <h1 className='flex items-center gap-1'><ReplyOutlinedIcon /> <span>1.7k</span></h1>
                        </div>
                    </div>
                    <div className="w-full h-0.75 bg-fb-border"></div>
                </div>
            </div>
            <div>
                <P2nav />
                <div>
                    <p className='text-lg px-2'>Verification Pending</p>
                </div>
                <div className=' w-full  mt-3'>
                    <img src={verpost} alt="" />
                    <div className='flex flex-row'>
                        <div className='flex flex-row w-[60%] items-center justify-between px-3 py-2'>
                            <h1 className='flex items-center gap-1'><ThumbUpOffAltIcon /> <span>0</span></h1>
                            <h1 className='flex items-center gap-1'><MessageCircle /> <span>0</span></h1>
                            <h1 className='flex items-center gap-1'><ReplyOutlinedIcon /> <span>0</span></h1>
                        </div>
                    </div>
                    <div className="w-full h-0.75 bg-fb-border"></div>
                </div>
            </div>
        </div>
    )
}

export default Postcard
