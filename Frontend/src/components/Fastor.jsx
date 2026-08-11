import React from 'react'
import livst from "../assets/livst.jpg"
import liverp from "../assets/liverp.jpg"
import fahisto from "../assets/carabao.jfif"
import fahipro from "../assets/carabprofile.jpg"
import manp from "../assets/manp.jpg"
import manst from "../assets/manst.jpg"
import manst2 from "../assets/manst2.jfif"
const Fastor = () => {
    return (
        <div className='flex flex-row gap-1'>
            <div className='h-64 w-35 mt-5 flex justify-start rounded-2xl overflow-hidden bg-fb-input relative'>

                <img src={livst} alt="" className='h-full relative w-full object-cover' />
                <div className='h-[52.79px] overflow-hidden w-[52.79px] absolute border-3 border-blue-800 ml-3 mt-3 rounded-full'>
                    <img className='p-0.5 rounded-full' src={liverp} alt="" />
                </div>
                <p className='absolute bottom-2  text-lg font-medium px-2'>Liverpool FC</p>
            </div>
            <div className='h-64 w-35 mt-5 flex justify-start rounded-2xl overflow-hidden bg-fb-input relative'>

                <img src={manst} alt="" className='h-full relative w-full object-cover' />
                <div className='h-[52.79px] overflow-hidden w-[52.79px] absolute border-3 border-blue-800 ml-3 mt-3 rounded-full'>
                    <img className='p-0.5 rounded-full' src={manp} alt="" />
                </div>
                <p className='absolute bottom-2  text-lg font-medium px-2 flex flex-wrap'>Manchester City</p>
            </div>
            <div className='h-64 w-35 mt-5 flex justify-start rounded-2xl overflow-hidden bg-fb-input relative'>

                <img src={fahisto} alt="" className='h-full relative w-full object-cover' />
                <div className='h-[52.79px] overflow-hidden w-[52.79px] absolute border-3 border-blue-800 ml-3 mt-3 rounded-full'>
                    <img className='p-0.5 rounded-full' src={fahipro} alt="" />
                </div>
                <p className='absolute bottom-2  text-lg font-medium px-2'>Carabao Cup</p>
            </div>
            <div className='h-64 w-35 mt-5 flex justify-start rounded-2xl overflow-hidden bg-fb-input relative'>

                <img src={manst2} alt="" className='h-full relative w-full object-cover' />
                <div className='h-[52.79px] overflow-hidden w-[52.79px] absolute border-3 border-blue-800 ml-3 mt-3 rounded-full'>
                    <img className='p-0.5 rounded-full' src={manp} alt="" />
                </div>
                <p className='absolute bottom-2  text-lg font-medium px-2'>Carabao Cup</p>
            </div>
        </div>
    )
}

export default Fastor
