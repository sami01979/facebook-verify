import React from 'react'



import Profile from './Profile'
import Fastor from './Fastor'
const Story = () => {
    return (
        <div className='px-2 pb-1 text-fb-text flex flex-row gap-1.5  overflow-x-auto no-scrollbar'>

            <div className='flex shrink-0 gap-1'>
                <Profile />
                <Fastor />

                
            </div>
        </div>
    )
}

export default Story